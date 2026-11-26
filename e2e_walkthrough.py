import asyncio
import json
from pathlib import Path
from playwright.async_api import async_playwright

BASE = "http://localhost:8080/"
OUT = Path("/home/ubuntu/lexora-prototype/.shots/")
SHOTS = []


async def shot(page, name):
    path = OUT / name
    await page.screenshot(path=str(path), full_page=False)
    SHOTS.append(str(path))

async def assert_no_french_no_voice_toast(page, screen):
    message = await page.evaluate("window.LEXORA_I18N.strings.noVoiceHelp.fr.replace('{lang}', 'Français')")
    toast = page.locator(".toast:visible", has_text=message)
    assert await toast.count() == 0, f"Unexpected French no-voice toast on {screen}"

async def select_profile_language(page, code):
    names = {"en": "English", "fr": "Français", "es": "Español", "pt": "Português", "ar": "العربية"}
    await page.goto(BASE + "#/home")
    await page.locator(".lang-pill").click()
    await page.locator(".language-option", has_text=names[code]).click()
    assert await page.evaluate("document.documentElement.lang") == code

async def preview_screenshots(page, lesson_id, lang):
    await select_profile_language(page, lang)
    await page.goto(BASE + f"#/preview/{lesson_id}")
    await page.wait_for_selector("#act")
    await page.wait_for_timeout(100)
    if lesson_id == "k4":
        assert await page.locator("#vcap-tr").inner_text()
    if lesson_id == "k5":
        assert await page.evaluate("document.documentElement.dir") == "rtl"
        assert await page.locator(".gloss").count()
    await shot(page, f"new-{lesson_id}-1.png")
    await page.locator("#cnt").click()
    await page.wait_for_timeout(100)
    await shot(page, f"new-{lesson_id}-2.png")

async def open_m6_number_question(page):
    await page.goto(BASE + "#/preview/m6")
    await page.wait_for_selector("#cnt")
    await page.locator("#cnt").click()
    await page.locator(".opt").first.click()
    await page.locator("#chk").click()
    await page.locator("#cnt").click()
    await page.wait_for_selector("#num")

async def m6_unit_feedback_screenshot(page):
    await select_profile_language(page, "en")
    await open_m6_number_question(page)
    assert await page.locator(".number-unit").inner_text() == "XAF"
    await page.locator("#num").fill("999")
    await page.locator("#chk").click()
    await page.wait_for_selector(".footer.wrong")
    feedback = await page.locator(".footer").inner_text()
    assert "6,000 XAF" in feedback, f"Expected formatted unit answer, got: {feedback}"
    await shot(page, "new-m6-unit.png")

    await select_profile_language(page, "ar")
    await open_m6_number_question(page)
    assert await page.evaluate("document.documentElement.dir") == "rtl"
    assert await page.locator(".number-answer").get_attribute("dir") == "ltr"
    assert await page.locator(".number-unit").evaluate("(el) => getComputedStyle(el).direction") == "ltr"


VOICE_LANGS = ["en-GB", "fr-FR", "es-ES", "pt-BR", "ar-SA"]
VOICE_STUB = r"""
(() => {
  window.__voiceLangs = window.__voiceLangs || __VOICE_LANGS__;
  window.__spoken = [];
  window.__speechEvents = [];
  let queue = [], running = false, timer = null, generation = 0;
  const details = (utterance) => ({
    text: utterance.text,
    lang: utterance.voice?.lang || utterance.lang
  });
  const pump = () => {
    if (running || !queue.length) return;
    running = true;
    const { utterance, id } = queue.shift();
    timer = setTimeout(() => {
      if (id !== generation) { running = false; pump(); return; }
      window.__speechEvents.push({ type: "start", ...details(utterance) });
      if (utterance.onstart) utterance.onstart({});
      timer = setTimeout(() => {
        if (id === generation) {
      window.__speechEvents.push({
        type: "end", ...details(utterance),
        scene: document.querySelector("#vcount")?.textContent || ""
      });
          running = false;
          if (utterance.onend) utterance.onend({});
        } else running = false;
        pump();
      }, 30);
    }, 30);
  };
  const synth = {
    onvoiceschanged: null,
    getVoices() {
      return window.__voiceLangs.map((lang) => ({
        lang, default: lang === "en-GB", localService: true
      }));
    },
    speak(utterance) {
      window.__spoken.push(details(utterance));
      queue.push({ utterance, id: generation });
      pump();
    },
    cancel() {
      generation++;
      queue = [];
      if (timer) clearTimeout(timer);
      timer = null;
      running = false;
    }
  };
  Object.defineProperty(window, "speechSynthesis", { configurable: true, value: synth });
  window.SpeechSynthesisUtterance = function (text) {
    this.text = String(text);
    this.lang = "";
    this.voice = null;
    this.rate = 1;
  };
  setTimeout(() => { if (synth.onvoiceschanged) synth.onvoiceschanged(); }, 0);
})();
"""


async def mocked_voice_page(browser, lang, voices=None, voice_help=True, errors=None):
    context = await browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=1)
    voice_langs = VOICE_LANGS if voices is None else voices
    await context.add_init_script(VOICE_STUB.replace("__VOICE_LANGS__", json.dumps(voice_langs)))
    page = await context.new_page()
    if errors is not None:
        page.on("pageerror", lambda error: errors.append(str(error)))
        page.on("console", lambda message: errors.append(message.text) if message.type == "error" else None)
    await page.goto(BASE)
    state = {
        "parent": None,
        "profiles": [{
            "id": "voice-test", "name": "Ama", "avatar": "🦊", "type": "child",
            "ageBand": "5–7", "lang": lang, "voiceHelp": voice_help
        }],
        "activeId": "voice-test",
        "progress": {},
        "lang": "en"
    }
    await page.evaluate("(state) => localStorage.setItem('lexora_proto_v1', JSON.stringify(state))", state)
    await page.reload()
    await page.goto(BASE + "#/home")
    await page.wait_for_timeout(80)
    return context, page


async def seeded_page(browser, profile, errors=None, parent=None, progress=None):
    context = await browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=1)
    await context.add_init_script(VOICE_STUB.replace("__VOICE_LANGS__", json.dumps(VOICE_LANGS)))
    page = await context.new_page()
    if errors is not None:
        page.on("pageerror", lambda error: errors.append(str(error)))
        page.on("console", lambda message: errors.append(message.text) if message.type == "error" else None)
    page.on("dialog", lambda dialog: asyncio.ensure_future(dialog.accept()))
    await page.goto(BASE)
    state = {
        "parent": parent,
        "profiles": [profile],
        "activeId": profile["id"],
        "progress": progress or {},
        "lang": profile.get("lang", "en")
    }
    await page.evaluate("(state) => localStorage.setItem('lexora_proto_v1', JSON.stringify(state))", state)
    await page.reload()
    await page.goto(BASE + "#/home")
    await page.wait_for_timeout(100)
    return context, page


async def seek_k1_prompt(page, prompt):
    await page.evaluate("Math.random = () => 0.999")
    await page.goto(BASE + "#/preview/k1")
    await page.wait_for_timeout(50)
    start = await page.evaluate("window.__spoken.length")
    for _ in range(12):
        current = page.locator("#act .prompt")
        if await current.count() and await current.first.inner_text() == prompt:
            return start
        before = await page.evaluate("window.__spoken.length")
        if await page.locator("#cnt").count():
            await page.locator("#cnt").click()
        else:
            raise AssertionError(f"Could not advance K1 preview to {prompt!r}")
        await page.wait_for_timeout(50)
        current = page.locator("#act .prompt")
        if await current.count() and await current.first.inner_text() == prompt:
            return before
        start = before
    raise AssertionError(f"Could not find K1 prompt {prompt!r}")


async def mocked_voice_tests(browser, errors):
    prompt = "Tap the picture that starts with B."
    context, page = await mocked_voice_page(browser, "fr", errors=errors)
    start = await seek_k1_prompt(page, prompt)
    await page.wait_for_timeout(80)
    spoken_a = await page.evaluate("(start) => window.__spoken.slice(start)", start)
    translated_prompt = await page.evaluate("(text) => window.LEXORA_I18N.tr[text].fr", prompt)
    assert spoken_a[:2] == [
        {"text": translated_prompt, "lang": "fr-FR"},
        {"text": prompt, "lang": "en-GB"}
    ], spoken_a
    print("VOICE SCENARIO a:", spoken_a)
    await context.close()

    context, page = await mocked_voice_page(browser, "fr", errors=errors)
    await page.goto(BASE + "#/preview/k3")
    await page.wait_for_selector("#vstart")
    await page.evaluate("window.__spoken = []; window.__speechEvents = []")
    await page.locator("#vstart").click()
    caption = "This apple is red."
    translated_caption = await page.evaluate("(text) => window.LEXORA_I18N.tr[text].fr", caption)
    await page.wait_for_function(
        "(text) => window.__speechEvents.some((event) => event.type === 'end' && event.text === text)",
        arg=caption
    )
    english_end = await page.evaluate(
        "(text) => window.__speechEvents.find((event) => event.type === 'end' && event.text === text)",
        caption
    )
    assert english_end["scene"].endswith("1 / 6"), english_end
    await page.wait_for_function(
        "(text) => window.__speechEvents.some((event) => event.type === 'end' && event.text === text)",
        arg=translated_caption
    )
    translated_end = await page.evaluate(
        "(text) => window.__speechEvents.find((event) => event.type === 'end' && event.text === text)",
        translated_caption
    )
    assert translated_end["scene"].endswith("1 / 6"), translated_end
    await page.wait_for_function("document.querySelector('#vcount').textContent.endsWith('2 / 6')")
    spoken_b = await page.evaluate("window.__spoken.slice(0, 2)")
    assert spoken_b == [
        {"text": caption, "lang": "en-GB"},
        {"text": translated_caption, "lang": "fr-FR"}
    ], spoken_b
    print("VOICE SCENARIO b:", spoken_b)
    await context.close()

    context, page = await mocked_voice_page(browser, "ar", ["en-GB"], voice_help=False, errors=errors)
    await page.goto(BASE + "#/settings")
    await page.locator("#voice-help").check()
    await page.evaluate("Math.random = () => 0.999")
    await page.goto(BASE + "#/preview/k1")
    await page.wait_for_selector("#cnt")
    await page.locator("#cnt").click()
    await page.wait_for_timeout(100)
    first_count = await page.locator(".toast:visible").count()
    await page.locator("#cnt").click()
    await page.wait_for_timeout(100)
    message_c = await page.evaluate(
        "window.LEXORA_I18N.strings.noVoiceHelp.ar.replace('{lang}', 'العربية')"
    )
    toast_count = await page.locator(".toast:visible", has_text=message_c).count()
    spoken_c = await page.evaluate("window.__spoken")
    assert first_count == 1 and toast_count == 1, (first_count, toast_count)
    assert spoken_c and all(not item["lang"].lower().startswith("ar") for item in spoken_c), spoken_c
    assert len(spoken_c) >= 2 and all(item["lang"] == "en-GB" for item in spoken_c), spoken_c
    print("VOICE SCENARIO c:", spoken_c)
    await context.close()

    context, page = await mocked_voice_page(browser, "fr", errors=errors)
    await page.goto(BASE + "#/settings")
    checkbox = page.locator("#voice-help")
    assert await checkbox.is_checked()
    await shot(page, "voice-setting.png")
    await checkbox.uncheck()
    saved = await page.evaluate(
        "JSON.parse(localStorage.getItem('lexora_proto_v1')).profiles[0].voiceHelp"
    )
    assert saved is False
    start = await seek_k1_prompt(page, prompt)
    await page.wait_for_timeout(80)
    spoken_d = await page.evaluate("(start) => window.__spoken.slice(start)", start)
    assert spoken_d and all(not item["lang"].lower().startswith("fr") for item in spoken_d), spoken_d
    print("VOICE SCENARIO d:", spoken_d)
    await context.close()

    context, page = await mocked_voice_page(browser, "en", errors=errors)
    start = await seek_k1_prompt(page, prompt)
    await page.wait_for_timeout(80)
    spoken_e = await page.evaluate("(start) => window.__spoken.slice(start)", start)
    assert spoken_e == [{"text": prompt, "lang": "en-GB"}], spoken_e
    print("VOICE SCENARIO e:", spoken_e)
    await context.close()

    context, page = await mocked_voice_page(browser, "fr", errors=errors)
    start = await seek_k1_prompt(page, prompt)
    await page.locator(".opt").nth(1).click()
    await page.locator("#chk").click()
    await page.wait_for_timeout(80)
    spoken_f = await page.evaluate("(start) => window.__spoken.slice(start)", start)
    praise = await page.evaluate("""() => ["great", "excellent", "wellDone", "brilliant"]
      .map((key) => window.LEXORA_I18N.strings[key].fr)""")
    assert any(item["text"] in praise and item["lang"] == "fr-FR" for item in spoken_f), spoken_f
    print("VOICE SCENARIO f:", spoken_f)
    await context.close()


async def rendered_activity_type(page):
    act = page.locator("#act")
    if await act.locator(".video-stage").count(): return "video"
    if await act.locator(".story").count(): return "story"
    if await act.locator(".flash").count(): return "card"
    if await act.locator(".match").count(): return "match"
    if await act.locator("#num").count(): return "number"
    if await act.locator("#ty").count(): return "dictation"
    if await act.locator("#al").count(): return "order"
    if await act.locator("#tl").count(): return "build"
    if await act.locator("#wv").count(): return "missing"
    if await act.locator(".tf").count(): return "truefalse"
    if await act.locator(".options").count(): return "choice"
    return "unknown"


async def advance_intro(page):
    for _ in range(6):
        if await rendered_activity_type(page) not in ("card", "video", "story"):
            return
        await page.locator("#cnt").click()
        await page.wait_for_timeout(60)
    raise AssertionError("Intro did not advance to a scored activity")


async def curriculum_replay_tests(browser, errors):
    context, page = await mocked_voice_page(browser, "en", errors=errors)
    await page.evaluate("""() => {
      let calls = 0;
      Math.random = () => calls++ < 2 ? 0 : 0.999;
    }""")
    await page.goto(BASE + "#/preview/am4b")
    await page.wait_for_selector("#act")
    intro_type = await page.evaluate("window.LEXORA_CONTENT.lessons.am4b.activities[0].type")
    assert intro_type in ("card", "video", "story")
    assert await rendered_activity_type(page) == intro_type, intro_type
    await advance_intro(page)
    await page.wait_for_selector("#act .prompt")
    first_type = await rendered_activity_type(page)
    first_prompt = await page.locator("#act .prompt").inner_text()
    assert first_type == "choice", (first_type, first_prompt)
    original = await page.evaluate("""() => {
      const activity = window.LEXORA_CONTENT.lessons.am4b.activities.find(item => item.type === 'choice');
      return { options: activity.options.map(option => option.t), answer: activity.options[activity.answer].t };
    }""")
    shown = await page.locator("#act .options .opt").all_text_contents()
    assert shown != original["options"] and set(shown) == set(original["options"]), (shown, original)
    await shot(page, "anglo-shuffled-choice-question.png")
    await page.locator("#act .options .opt").nth(shown.index(original["answer"])).click()
    await page.locator("#chk").click()
    assert await page.locator(".footer.good").count(), "Shuffled choice answer index was not remapped"
    order_a = [intro_type, first_type, first_prompt]
    print("CURRICULUM REPLAY ATTEMPT 1:", order_a, "OPTIONS:", shown)
    await context.close()

    context, page = await mocked_voice_page(browser, "en", errors=errors)
    await page.evaluate("Math.random = () => 0")
    await page.goto(BASE + "#/preview/am4b")
    await page.wait_for_selector("#act")
    second_intro = await page.evaluate("window.LEXORA_CONTENT.lessons.am4b.activities[0].type")
    assert second_intro in ("card", "video", "story")
    assert await rendered_activity_type(page) == second_intro, second_intro
    await advance_intro(page)
    await page.wait_for_selector("#act .prompt")
    second_type = await rendered_activity_type(page)
    second_prompt = await page.locator("#act .prompt").inner_text()
    order_b = [second_intro, second_type, second_prompt]
    assert order_a != order_b, (order_a, order_b)
    assert first_type == second_type == "choice", (first_type, second_type)
    print("CURRICULUM REPLAY ATTEMPT 2:", order_b, second_prompt)
    await context.close()


async def math_word_problem_screenshot(browser, errors):
    context, page = await mocked_voice_page(browser, "en", errors=errors)
    await page.evaluate("""() => {
      let calls = 0;
      Math.random = () => {
        const call = calls++;
        if (call < 48) return 0.999;
        const orderCall = call - 48;
        if (orderCall === 3) return 0.2;
        if (orderCall === 9) return 0;
        return 0.999;
      };
    }""")
    await page.goto(BASE + "#/preview/am4b")
    await page.wait_for_selector("#act")
    await advance_intro(page)
    assert await rendered_activity_type(page) == "number"
    prompt = await page.locator("#act .prompt").inner_text()
    assert "market bag" in prompt.lower(), prompt
    await shot(page, "anglo-math-word-problem.png")
    print("MATH WORD-PROBLEM SCREENSHOT:", prompt)
    await context.close()


async def franco_curriculum_screenshots(browser, errors):
    profile = {
        "id": "franco-curriculum-shot", "name": "Ama", "avatar": "🦊", "type": "child",
        "system": "franco", "cls": 3, "lang": "fr", "voiceHelp": True
    }
    context, page = await seeded_page(browser, profile, errors)
    await page.evaluate("Math.random = () => 0.999")

    await page.goto(BASE + "#/subject/math")
    await page.wait_for_selector("[data-lid='fm4']")
    lesson_titles = await page.locator("[data-lid] .t").all_text_contents()
    assert lesson_titles == ["Les tables de multiplication", "La division", "L'heure et la durée"], lesson_titles
    await shot(page, "franco-ce2-math-lessons.png")

    await page.goto(BASE + "#/preview/fsc5b")
    await page.wait_for_selector("#act")
    await advance_intro(page)
    science_prompt = await page.locator("#act .prompt").inner_text()
    assert science_prompt, "Francophone science lesson did not show a question"
    await shot(page, "franco-science-question.png")

    await page.goto(BASE + "#/preview/fa5c")
    await page.wait_for_selector("#act")
    await advance_intro(page)
    english_prompt = await page.locator("#act .prompt").inner_text()
    assert english_prompt, "Francophone Anglais lesson did not show a question"
    await shot(page, "franco-anglais-question.png")
    print("FRANCOPHONE SCREENSHOTS:", [
        str(OUT / "franco-ce2-math-lessons.png"),
        str(OUT / "franco-science-question.png"),
        str(OUT / "franco-anglais-question.png")
    ])
    await context.close()


async def missing_curriculum_locale_tests(browser, errors):
    for lang in ["es", "pt", "ar"]:
        context, page = await mocked_voice_page(browser, lang, errors=errors)
        await page.evaluate("Math.random = () => 0.999; window.__spoken = []")
        await page.goto(BASE + "#/preview/ae2")
        await page.wait_for_selector("#act")
        await page.locator("#cnt").click()
        await page.wait_for_selector("#act .prompt")
        await page.wait_for_timeout(100)
        prompt = await page.locator("#act .prompt").inner_text()
        assert await page.locator("#act .help").count() == 0, (lang, prompt)
        spoken = await page.evaluate("window.__spoken")
        assert any(item["text"] == prompt and item["lang"].lower().startswith("en") for item in spoken), (lang, prompt, spoken)
        assert all(not item["lang"].lower().startswith(lang) for item in spoken), (lang, spoken)
        print(f"CURRICULUM MISSING {lang.upper()} HELPER:", spoken)
        await context.close()


async def play(page, tag, maxsteps=120, capture_summary=True):
    video_shot_done = False
    help_shot_done = False
    number_shot_done = False
    for step in range(maxsteps):
        await page.wait_for_timeout(80)
        if await page.locator(".summary").count():
            if capture_summary:
                await shot(page, f"{tag}-summary.png")
            return True

        if await page.locator(".video-stage").count():
            if tag == "m2" and not video_shot_done:
                await page.locator("#vstart").click()
                await page.wait_for_timeout(250)
                await shot(page, "26-m2-video.png")
                video_shot_done = True
            elif await page.locator("#vstart").is_visible():
                await page.locator("#vstart").click()
                if tag == "k3":
                    await assert_no_french_no_voice_toast(page, "K3 video")
            if tag == "k3" and not video_shot_done:
                await page.wait_for_timeout(250)
                await shot(page, "22-video.png")
                video_shot_done = True
            if await page.locator("#cnt").is_disabled():
                await page.locator("#vnext").click()
                continue
            await page.locator("#cnt").click()
            continue

        prompt = await page.locator("#act .prompt").first.inner_text() if await page.locator("#act .prompt").count() else ""
        if tag == "k3" and prompt == "Which one is yellow?" and not help_shot_done:
            helper = await page.locator("#act .help").first.inner_text()
            assert "jaune" in helper, f"Expected French help line, got: {helper}"
            await shot(page, "23-help-fr.png")
            help_shot_done = True
        if tag == "m1" and await page.locator("#num").count() and not number_shot_done:
            await shot(page, "26-m1-number.png")
            number_shot_done = True

        if await page.locator("#cnt").count():
            await page.locator("#cnt").click()
            continue
        act = page.locator("#act")
        if await act.locator(".match").count():
            left = act.locator("[data-side='l']")
            right = act.locator("[data-side='r']")
            for i in range(await left.count()):
                for j in range(await right.count()):
                    if "done" in (await right.nth(j).get_attribute("class")):
                        continue
                    await left.nth(i).click()
                    await right.nth(j).click()
                    await page.wait_for_timeout(40)
                    if "done" in (await left.nth(i).get_attribute("class")):
                        break
            continue
        if await act.locator("#ty").count():
            await act.locator("#ty").fill("wrongz")
            await page.locator("#chk").click()
            continue
        if await act.locator("#num").count():
            await act.locator("#num").fill("99")
            await page.locator("#chk").click()
            continue
        if await act.locator("#tl").count():
            while await act.locator("#tl .tile:not(.used)").count():
                await act.locator("#tl .tile:not(.used)").first.click()
            await page.locator("#chk").click()
            continue
        if await act.locator(".tiles .tile").count():
            await act.locator(".tiles .tile").first.click()
            await page.locator("#chk").click()
            continue
        options = act.locator(".opt")
        if await options.count():
            await options.first.click()
            await page.locator("#chk").click()
            continue
        print("stuck:", tag, step, await act.inner_text())
        return False
    print("too many steps:", tag)
    return False


async def curriculum_flow_tests(browser, errors):
    parent_profile = {
        "id": "curriculum-parent", "name": "Parent", "avatar": "🧑🏾‍🦱",
        "type": "learner", "isParent": True, "level": "Beginner A1", "lang": "en"
    }
    parent = {
        "name": "Parent", "contact": "parent@example.com",
        "consentAt": "2026-01-01T00:00:00.000Z", "policyVersion": "0.1-demo"
    }
    context, page = await seeded_page(browser, parent_profile, errors, parent=parent)
    await page.evaluate("sessionStorage.setItem('gate', Date.now())")
    await page.goto(BASE + "#/parent")
    await page.locator("[data-go='#/addchild']").click()
    await page.locator("[data-system='franco']").click()
    assert await page.locator("#child-lang").input_value() == "fr"
    await shot(page, "curriculum-add-child-franco.png")
    await page.locator("[data-system='anglo']").click()
    await page.locator("[data-cls='3']").click()
    await page.fill("#nm", "Ama")
    await page.select_option("#child-lang", "en")
    await page.locator("#go").click()
    created = await page.evaluate("""() => JSON.parse(localStorage.getItem('lexora_proto_v1')).profiles.find(profile => profile.name === 'Ama')""")
    assert created["system"] == "anglo" and created["cls"] == 3 and "ageBand" not in created, created
    await page.locator(".profile", has_text="Ama").click()
    await page.wait_for_selector(".curriculum-card")
    titles = await page.locator(".curriculum-card h3").all_text_contents()
    assert len(titles) == 5 and {
        "English Language", "Mathematics", "Science & Technology", "Social Studies", "French"
    } == set(titles), titles
    assert await page.locator(".section-card", has_text="Spelling Studio").count() == 1
    await shot(page, "curriculum-anglo-home.png")
    await page.goto(BASE + "#/subject/math")
    assert await page.locator("#subject-class").input_value() == "3"
    assert await page.locator("#subject-class optgroup").get_attribute("label") == "Other classes"
    assert await page.locator("[data-lid]").count() == 3
    await shot(page, "anglo-class4-math-lessons.png")
    await page.locator("[data-lid='am4']").click()
    assert await play(page, "curriculum-am4", maxsteps=100, capture_summary=False)
    await page.goto(BASE + "#/home")
    stars = await page.locator(".curriculum-card").filter(has_text="Mathematics").locator(".stars").evaluate(
        "(el) => el.textContent.length - (el.querySelector('.off')?.textContent.length || 0)"
    )
    assert stars > 0, f"Expected Maths stars after completing am4, found {stars}"
    await page.evaluate("sessionStorage.setItem('gate', Date.now())")
    await page.goto(BASE + "#/parent")
    await page.locator("[data-kid-system]").select_option("franco")
    assert await page.locator("[data-kid-class] option").first.inner_text() == "SIL"
    await page.locator("[data-kid-system]").select_option("anglo")
    assert await page.locator("[data-kid-class] option").first.inner_text() == "Class 1"
    await page.locator("[data-kid-class]").select_option("3")
    await page.goto(BASE + "#/preview/aso5")
    await page.wait_for_selector("#act")
    assert await page.locator("#cnt").count()
    await page.locator("#cnt").click()
    await page.wait_for_selector("#act .prompt")
    await shot(page, "anglo-class5-social-studies-question.png")
    await context.close()

    franco_profile = {
        "id": "curriculum-franco", "name": "Ama", "avatar": "🦊", "type": "child",
        "system": "franco", "cls": 3, "lang": "fr", "voiceHelp": True
    }
    context, page = await seeded_page(browser, franco_profile, errors)
    titles = await page.locator(".curriculum-card h3").all_text_contents()
    assert {"Français", "Mathématiques", "Sciences et technologie", "Sciences humaines et sociales", "Anglais (English)"} == set(titles), titles
    await shot(page, "curriculum-franco-home.png")
    await page.goto(BASE + "#/subject/math")
    assert await page.locator("#subject-class").input_value() == "3"
    await page.evaluate("window.__spoken = []")
    await page.locator("[data-lid='fm4']").click()
    await page.wait_for_selector("#cnt")
    await page.wait_for_timeout(100)
    spoken_franco = await page.evaluate("window.__spoken")
    assert spoken_franco and all(item["lang"].lower().startswith("fr") for item in spoken_franco), spoken_franco
    assert not any(item["lang"].lower().startswith("en") for item in spoken_franco), spoken_franco
    print("CURRICULUM FLOW B AUDIO:", spoken_franco)
    await shot(page, "curriculum-franco-lesson.png")

    await page.goto(BASE + "#/subject/ang")
    await page.evaluate("window.__spoken = []")
    await page.evaluate("Math.random = () => 0.999")
    await page.locator("[data-lid='fa4']").click()
    await page.wait_for_selector("#cnt")
    await page.locator("#cnt").click()
    await page.wait_for_selector("#act .prompt")
    prompt = await page.locator("#act .prompt").inner_text()
    await page.wait_for_timeout(100)
    await page.locator(".opt", has_text="brother").click()
    await page.wait_for_timeout(100)
    spoken_english = await page.evaluate("window.__spoken")
    assert any(item["text"] == prompt and item["lang"].lower().startswith("fr") for item in spoken_english), spoken_english
    assert any(item["text"] == "brother" and item["lang"].lower().startswith("en") for item in spoken_english), spoken_english
    print("CURRICULUM FLOW C AUDIO:", spoken_english)
    await context.close()

    legacy_profile = {
        "id": "legacy-child", "name": "Legacy", "avatar": "🦊", "type": "child",
        "ageBand": "8–10", "lang": "en", "voiceHelp": True
    }
    legacy_progress = {"legacy-child": {
        "lessons": {"k1": {"best": 100, "stars": 3, "attempts": 1}},
        "skills": {}, "words": [], "review": [], "streak": {"last": None, "count": 0},
        "badges": [], "seconds": 0, "log": []
    }}
    context, page = await seeded_page(browser, legacy_profile, errors, progress=legacy_progress)
    migrated = await page.evaluate("JSON.parse(localStorage.getItem('lexora_proto_v1'))")
    child = migrated["profiles"][0]
    assert child.get("system") == "anglo" and child.get("cls") == 2, child
    assert migrated["progress"]["legacy-child"]["lessons"]["k1"]["stars"] == 3, migrated["progress"]
    assert await page.locator(".screen").inner_text() and "Class 3 · Anglophone" in await page.locator(".screen").inner_text()
    await page.goto(BASE + "#/subject/eng")
    await page.select_option("#subject-class", "0")
    await page.wait_for_selector("[data-lid='k1']")
    assert await page.locator("[data-lid='k1']").get_attribute("data-open") == "1"
    assert await page.locator("[data-lid='k1'] .stars").count() == 1
    migrated = await page.evaluate("JSON.parse(localStorage.getItem('lexora_proto_v1'))")
    assert migrated["progress"]["legacy-child"]["lessons"]["k1"]["stars"] == 3
    await context.close()

    learner_profile = {
        "id": "learner-check", "name": "Learner", "avatar": "🧑🏾‍🦱", "type": "learner",
        "level": "Beginner A1", "lang": "en"
    }
    context, page = await seeded_page(browser, learner_profile, errors)
    section_titles = await page.locator(".section-card h3").all_text_contents()
    assert {"English Academy", "Spelling Studio", "Maths"}.issubset(set(section_titles)), section_titles
    await context.close()

    preview_profile = {
        "id": "curriculum-preview", "name": "Preview", "avatar": "🦊", "type": "child",
        "system": "anglo", "cls": 0, "lang": "en", "voiceHelp": True
    }
    context, page = await seeded_page(browser, preview_profile, errors)
    lesson_ids = await page.evaluate("Object.keys(window.LEXORA_CONTENT.lessons)")
    for lesson_id in lesson_ids:
        await page.goto(BASE + f"#/preview/{lesson_id}")
        await page.wait_for_selector("#act")
        assert await play(page, f"preview-{lesson_id}", maxsteps=100, capture_summary=False), lesson_id
    print("PREVIEWED LESSONS:", len(lesson_ids))
    await context.close()


async def main():
    OUT.mkdir(exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=1)
        page = await context.new_page()
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        page.on("console", lambda message: errors.append(message.text) if message.type == "error" else None)
        page.on("dialog", lambda dialog: asyncio.ensure_future(dialog.accept()))
        await page.goto(BASE + "#/welcome")
        await page.evaluate("localStorage.clear(); sessionStorage.clear()")
        await page.reload()
        await shot(page, "01-welcome.png")

        await page.locator("[data-lang-open]").click()
        await page.locator(".language-option", has_text="Français").click()
        assert await page.locator("[data-go='#/parent']").inner_text() == "Je suis parent ou tuteur"
        await page.locator("[data-lang-open]").click()
        await page.locator(".language-option", has_text="العربية").click()
        assert await page.evaluate("document.documentElement.dir") == "rtl"
        await shot(page, "20-welcome-ar.png")
        await page.locator("[data-lang-open]").click()
        await page.locator(".language-option", has_text="English").click()

        await page.locator("[data-go='#/parent']").click()
        await page.fill("#nm", "Tanyi")
        await page.fill("#em", "demo@example.com")
        await page.fill("#pw", "password1")
        await page.check("#ok")
        await shot(page, "02-parent.png")
        await page.click("#go")
        await page.wait_for_timeout(250)
        await page.fill("#nm", "Ama")
        await page.select_option("#child-lang", "fr")
        await page.click("[data-a='🦊']")
        await shot(page, "03-child.png")
        await page.click("#go")
        await page.wait_for_timeout(250)
        await page.locator(".profile", has_text="Ama").click()
        await page.wait_for_timeout(200)
        tabs = [await page.locator(".tabbar a").nth(i).inner_text() for i in range(4)]
        assert all(label in tab for label, tab in zip(
            ["Apprendre", "Progrès", "Révision", "Profils"], tabs
        )), tabs
        await page.wait_for_timeout(100)
        await assert_no_french_no_voice_toast(page, "French home")
        await shot(page, "21-home-fr.png")

        await page.goto(BASE + "#/subject/eng")
        await page.locator("[data-lid='k1']").click()
        assert await play(page, "k1")
        await page.locator(".summary [data-go]").click()
        await page.locator("[data-lid='k2']").click()
        assert await play(page, "k2")
        await page.locator(".summary [data-go]").click()
        await page.locator("[data-lid='k3']").click()
        assert await play(page, "k3")
        await page.locator(".summary [data-go]").click()

        await page.goto(BASE + "#/subject/math")
        await page.locator("[data-lid='m1']").click()
        assert await play(page, "m1")
        await page.locator(".summary [data-go]").click()
        await page.locator("[data-lid='m2']").click()
        assert await play(page, "m2")
        await page.locator(".summary [data-go]").click()

        await page.goto(BASE + "#/section/spelling")
        await page.locator("[data-lid='s1']").click()
        assert await play(page, "s1")
        await page.locator(".summary [data-go]").click()
        await page.goto(BASE + "#/progress")
        await shot(page, "08-progress.png")
        await page.goto(BASE + "#/review")
        await shot(page, "09-review.png")

        await page.evaluate("sessionStorage.clear()")
        await page.goto(BASE + "#/profiles")
        await page.locator("[data-go='#/gate']").click()
        question = await page.locator(".prompt").inner_text()
        import re
        left, right = map(int, re.findall(r"\d+", question))
        await page.fill("#ans", str(left * right))
        await page.click("#go")
        await page.wait_for_timeout(120)
        await shot(page, "12-parent.png")

        await page.goto(BASE + "#/profiles")
        await page.locator(".profile", has_text="Tanyi").click()
        await page.wait_for_timeout(150)
        await page.goto(BASE + "#/section/academy")
        await page.locator("[data-lid='a1']").click()
        assert await play(page, "a1", maxsteps=100)
        await page.locator(".summary [data-go]").click()

        await page.goto(BASE + "#/home")
        await page.locator(".lang-pill").click()
        await page.locator(".language-option", has_text="العربية").click()
        assert await page.evaluate("document.documentElement.dir") == "rtl"
        await shot(page, "24-home-ar.png")
        await page.goto(BASE + "#/section/maths")
        assert await page.locator("[data-lid='m3']").count() == 1
        await page.locator("[data-lid='m3']").click()
        await page.wait_for_timeout(200)
        await shot(page, "25-m3-ar.png")
        assert await page.locator(".help").count() > 0
        assert await play(page, "m3-ar")

        for lesson_id in ["k4", "k5", "k6", "a3", "a4", "a5", "s3", "s4", "m4", "m5", "m6"]:
            lang = {"k4": "fr", "k5": "ar"}.get(lesson_id, "en")
            await preview_screenshots(page, lesson_id, lang)
        await m6_unit_feedback_screenshot(page)

        content_errors = await page.evaluate("""() => {
          const content = window.LEXORA_CONTENT, errors = [];
          const validTypes = new Set(['video', 'card', 'choice', 'truefalse', 'match', 'missing', 'build', 'order', 'dictation', 'story', 'number']);
        const curriculumLessonIds = new Set(Object.values(content.curriculum.plan)
            .flatMap(subjects => Object.values(subjects).flatMap(classes => classes.flat())));
        const curriculumCells = {};
        const unchangedIds = new Set(['k1', 'k2', 'k3', 'k4', 'k5', 'k6', 'm1', 'm2', 'm4', 'm5']);
        const expandedAngloIds = new Set(Object.values(content.curriculum.plan.anglo)
          .flat().flat().filter(lessonId => !unchangedIds.has(lessonId)));
        const expandedFrancoIds = new Set(Object.values(content.curriculum.plan.franco).flat().flat());
        const expandedIds = new Set([...expandedAngloIds, ...expandedFrancoIds]);
        const nonExpandedPrompts = new Set();
        Object.entries(content.lessons).forEach(([lessonId, lesson]) => {
          if (expandedIds.has(lessonId)) return;
          lesson.activities.slice(1).forEach(activity => {
            if (activity.prompt) nonExpandedPrompts.add(activity.prompt.trim().toLocaleLowerCase());
          });
          });
          const prompts = new Map();
          let falseTruthCount = 0;
          Object.entries(content.lessons).forEach(([lessonId, lesson]) => {
            lesson.activities.forEach((activity, index) => {
              const where = `${lessonId} activity ${index + 1}`;
              if (!validTypes.has(activity.type)) errors.push(`${where}: unknown activity type ${activity.type}`);
              if (activity.type === 'choice' &&
                  (!Number.isInteger(activity.answer) || activity.answer < 0 || activity.answer >= (activity.options || []).length)) {
                errors.push(`${where}: choice answer is not a valid option index`);
              }
              if (activity.type === 'missing') {
                const letter = activity.word && activity.word[activity.hide];
                if (!letter || !(activity.choices || []).includes(letter)) {
                  errors.push(`${where}: missing letter is not among choices`);
                }
              }
              if (activity.type === 'number' &&
                  (typeof activity.answer !== 'number' || !Number.isFinite(activity.answer))) {
                errors.push(`${where}: number answer is not numeric`);
              }
              if (activity.type === 'match') {
                const pairs = activity.pairs || [];
                const keys = pairs.map(pair => JSON.stringify(pair));
                if (new Set(keys).size !== pairs.length) errors.push(`${where}: match pairs are not unique`);
              }
              if (activity.type === 'order' && (!Array.isArray(activity.words) || activity.words.length === 0)) {
                errors.push(`${where}: order words are empty`);
              }
            });
          });
          const references = {};
          content.sections.forEach(section => section.units.forEach(unit => (unit.lessons || []).forEach(lessonId => {
            if (!content.lessons[lessonId]) errors.push(`${section.id}: unit references missing lesson ${lessonId}`);
            references[lessonId] = (references[lessonId] || 0) + 1;
          })));
          content.curriculum.systems.forEach(system => {
            (content.curriculum.subjects[system.id] || []).forEach(subject => {
              const cells = content.curriculum.plan[system.id]?.[subject.id];
              if (!Array.isArray(cells) || cells.length !== system.classes.length) {
                errors.push(`${system.id}/${subject.id}: expected ${system.classes.length} class cells`);
                return;
              }
              cells.forEach((ids, classIndex) => {
                if (!Array.isArray(ids) || ids.length === 0) errors.push(`${system.id}/${subject.id}/${classIndex}: empty lesson cell`);
                if (system.id === 'anglo') {
                  const unchangedFirstCells = classIndex === 0 && ['eng', 'math'].includes(subject.id);
                  const expectedCount = unchangedFirstCells ? (subject.id === 'eng' ? 5 : 4) : 3;
                  if ((ids || []).length !== expectedCount) {
                    errors.push(`${system.id}/${subject.id}/${classIndex}: expected ${expectedCount} lessons, got ${(ids || []).length}`);
                  }
                  if (!(ids || []).some(lessonId => ['video', 'story'].includes(content.lessons[lessonId]?.activities?.[0]?.type))) {
                    errors.push(`${system.id}/${subject.id}/${classIndex}: needs a video or story intro`);
                  }
                } else if ((ids || []).length < 3) {
                  errors.push(`${system.id}/${subject.id}/${classIndex}: expected at least 3 lessons, got ${(ids || []).length}`);
                }
                if (system.id === 'franco' && (ids || []).length >= 3) {
                  const introTypes = new Set(ids.map(lessonId => content.lessons[lessonId]?.activities?.[0]?.type));
                  if (introTypes.size < 2) {
                    errors.push(`${system.id}/${subject.id}/${classIndex}: lessons need mixed intro types`);
                  }
                }
                (ids || []).forEach(lessonId => {
                  if (!content.lessons[lessonId]) errors.push(`${system.id}/${subject.id}/${classIndex}: missing lesson ${lessonId}`);
                  else {
                    const lesson = content.lessons[lessonId];
                    curriculumCells[lessonId] = { system: system.id, subject: subject.id, classIndex };
                    const expectedLang = system.id === 'anglo' && subject.id === 'fre' ? 'fr' :
                      system.id === 'franco' && subject.id !== 'ang' ? 'fr' : 'en';
                    const expectedPromptLang = system.id === 'anglo' && subject.id === 'fre' ? 'en' :
                      system.id === 'franco' && subject.id === 'ang' ? 'fr' : expectedLang;
                    if ((lesson.lang || 'en') !== expectedLang) {
                      errors.push(`${lessonId}: expected content language ${expectedLang}, got ${lesson.lang || 'en'}`);
                    }
                    if ((lesson.promptLang || lesson.lang || 'en') !== expectedPromptLang) {
                      errors.push(`${lessonId}: expected prompt language ${expectedPromptLang}, got ${lesson.promptLang || lesson.lang || 'en'}`);
                    }
                  }
                  references[lessonId] = (references[lessonId] || 0) + 1;
                });
              });
            });
          });
          curriculumLessonIds.forEach(lessonId => {
            const lesson = content.lessons[lessonId];
            const cell = curriculumCells[lessonId];
            if (!lesson || !cell) return;
            if (!['card', 'video', 'story'].includes(lesson.activities[0]?.type)) {
              errors.push(`${lessonId}: intro is not the first activity`);
            }
            if (!expandedIds.has(lessonId)) return;
            const intro = lesson.activities[0];
            if (intro.type === 'card' && (intro.text || '').trim().length < 60) {
              errors.push(`${lessonId}: card intro needs at least 60 characters`);
            } else if (intro.type === 'story' && (intro.pages || []).length < 3) {
              errors.push(`${lessonId}: story intro needs at least 3 pages`);
            } else if (intro.type === 'video' && (intro.scenes || []).length < 3) {
              errors.push(`${lessonId}: video intro needs at least 3 scenes`);
            }
            const scored = lesson.activities.filter(activity => !['card', 'video', 'story'].includes(activity.type));
            const types = new Set(scored.map(activity => activity.type));
            const choices = scored.filter(activity => activity.type === 'choice');
            const truths = scored.filter(activity => activity.type === 'truefalse');
            const matches = scored.filter(activity => activity.type === 'match');
            const spelling = scored.filter(activity => ['build', 'dictation', 'missing'].includes(activity.type));
            if (scored.length < 10 || scored.length > 12) errors.push(`${lessonId}: expected 10–12 scored questions, got ${scored.length}`);
            if (types.size < 4) errors.push(`${lessonId}: expected at least 4 question types, got ${types.size}`);
            if (choices.length < 4) errors.push(`${lessonId}: expected at least 4 choice questions, got ${choices.length}`);
            if (choices.length > 5) errors.push(`${lessonId}: has more than 5 choice questions`);
            if (choices.some(activity => activity.options?.length !== 3 ||
                new Set(activity.options.map(option => String(option.t ?? option.text ?? option))).size !== 3)) {
              errors.push(`${lessonId}: each choice question needs three distinct options`);
            }
            if (truths.length < 2) errors.push(`${lessonId}: expected at least 2 true/false questions`);
            if (!truths.some(activity => activity.answer === false)) errors.push(`${lessonId}: missing a false true/false claim`);
            const maxSpelling = (cell.system === 'anglo' && ['sci', 'soc'].includes(cell.subject)) ||
              (cell.system === 'franco' && ['sci', 'shs'].includes(cell.subject)) ? 2 : 3;
            if (spelling.length > maxSpelling) errors.push(`${lessonId}: has more than ${maxSpelling} spelling questions`);
            scored.forEach(activity => {
              if (!activity.prompt) {
                errors.push(`${lessonId}: ${activity.type} question has no prompt`);
                return;
              }
              const prompt = activity.prompt.trim();
              const key = prompt.toLocaleLowerCase();
              if (/choose the correct match/i.test(prompt) || prompt.includes(' matches ') || /^calculate:/i.test(prompt)) {
                errors.push(`${lessonId}: generic template prompt remains: ${prompt}`);
              }
              if (nonExpandedPrompts.has(key)) errors.push(`${lessonId}: prompt is reused from another lesson: ${prompt}`);
              if (prompts.has(key)) errors.push(`${lessonId}: prompt is reused by ${prompts.get(key)}: ${prompt}`);
              else prompts.set(key, lessonId);
            });
            truths.filter(activity => activity.answer === false).forEach(activity => {
              falseTruthCount += 1;
              if (!activity.explain || activity.explain.trim() === activity.prompt.trim() || /undefined/i.test(activity.explain)) {
                errors.push(`${lessonId}: false statement has no correction`);
              }
            });
            if (!matches.some(activity => activity.pairs?.length === 4 &&
                new Set(activity.pairs.map(pair => pair[0])).size === 4 &&
                new Set(activity.pairs.map(pair => pair[1])).size === 4)) {
              errors.push(`${lessonId}: needs a four-pair match with unique left- and right-hand sides`);
            }
            if (cell.subject === 'math' &&
                scored.filter(activity => activity.type === 'number').length < 4) {
              errors.push(`${lessonId}: maths lesson needs at least 4 number questions`);
            }
            const languageLesson = (cell.system === 'anglo' &&
              ((cell.subject === 'eng' && cell.classIndex > 0) || cell.subject === 'fre')) ||
              (cell.system === 'franco' && ['fra', 'ang'].includes(cell.subject));
            if (languageLesson) {
              if (!scored.some(activity => ['build', 'dictation', 'missing'].includes(activity.type))) {
                errors.push(`${lessonId}: language lesson needs build, dictation, or missing`);
              }
              if (!scored.some(activity => activity.type === 'order')) {
                errors.push(`${lessonId}: language lesson needs an order question`);
              }
            }
          });
          if (!falseTruthCount) errors.push('Expanded curriculum needs at least one false true/false claim with a correction');
          Object.keys(content.lessons).forEach(lessonId => {
            if (references[lessonId] !== 1) errors.push(`${lessonId}: referenced by ${references[lessonId] || 0} units`);
          });
          return errors;
        }""")
        print("CONTENT ERRORS:", content_errors)
        assert not content_errors, content_errors

        lesson_counts = await page.evaluate("""() => {
          const content = window.LEXORA_CONTENT;
          const anglo = Object.values(content.curriculum.plan.anglo).flat().flat();
          const franco = Object.values(content.curriculum.plan.franco).flat().flat();
          const all = Object.values(content.curriculum.plan).flatMap(subjects =>
            Object.values(subjects).flatMap(classes => classes.flat()));
          const unchanged = new Set(['k1', 'k2', 'k3', 'k4', 'k5', 'k6', 'm1', 'm2', 'm4', 'm5']);
          const expanded = anglo.filter(id => !unchanged.has(id));
          const scoredFranco = id => content.lessons[id].activities
            .filter(activity => !['card', 'video', 'story'].includes(activity.type)).length;
          const scored = id => content.lessons[id].activities
            .filter(activity => !['card', 'video', 'story'].includes(activity.type)).length;
          return {
            curriculumLessons: all.length,
            angloLessons: anglo.length,
            francoLessons: franco.length,
            expandedAngloLessons: expanded.length,
            expandedAngloQuestions: expanded.reduce((total, id) => total + scored(id), 0),
            expandedFrancoLessons: franco.length,
            expandedFrancoQuestions: franco.reduce((total, id) => total + scoredFranco(id), 0)
          };
        }""")
        print("CURRICULUM LESSON COUNTS:", lesson_counts)

        coverage = await page.evaluate("""() => {
          const content = window.LEXORA_CONTENT, i18n = window.LEXORA_I18N;
          const codes = ['en', 'fr', 'es', 'pt', 'ar'];
          const newLessonIds = new Set(['k4', 'k5', 'k6', 'a3', 'a4', 'a5', 's3', 's4', 'm4', 'm5', 'm6']);
          const curriculumLessonIds = new Set(Object.values(content.curriculum.plan)
            .flatMap(subjects => Object.values(subjects).flatMap(classes => classes.flat())));
          const coveredContentIds = new Set([...newLessonIds, ...curriculumLessonIds]);
          const missingStrings = Object.entries(i18n.strings)
            .filter(([, values]) => codes.some(code => !values[code]))
            .map(([key]) => key);
          const required = new Map();
          const missingGloss = [];
          const curriculumFr = window.LEXORA_CURRICULUM_FR || {};
          const curriculumRequired = new Set();
          const addEnglish = (text, language, curriculum) => {
            if (typeof text !== 'string' || !/\p{L}/u.test(text) || language !== 'en') return;
            if (curriculum) curriculumRequired.add(text);
            const locales = curriculum ? ['fr'] : ['fr', 'es', 'pt', 'ar'];
            const requiredLocales = required.get(text) || new Set();
            locales.forEach(code => requiredLocales.add(code));
            required.set(text, requiredLocales);
          };
          const addGlossRequirement = (word, curriculum) => {
            const locales = curriculum ? ['fr'] : ['fr', 'es', 'pt', 'ar'];
            if (!i18n.gloss[word] || locales.some(code => !i18n.gloss[word][code])) missingGloss.push(word);
          };
          content.sections.forEach(section => {
            [section.title, section.desc, ...section.units.map(unit => unit.title)].forEach(text => {
              const requiredLocales = required.get(text) || new Set();
              ['fr', 'es', 'pt', 'ar'].forEach(code => requiredLocales.add(code));
              required.set(text, requiredLocales);
            });
          });
          Object.entries(content.lessons).forEach(([lessonId, lesson]) => {
            const targetLang = lesson.lang || 'en';
            const promptLang = lesson.promptLang || targetLang;
            const curriculum = curriculumLessonIds.has(lessonId);
            addEnglish(lesson.title, targetLang, curriculum);
            lesson.activities.forEach(activity => {
              addEnglish(activity.prompt, promptLang, curriculum);
              addEnglish(activity.explain, promptLang, curriculum);
              addEnglish(activity.title, targetLang, curriculum);
              if (coveredContentIds.has(lessonId)) {
                addEnglish(activity.text, targetLang, curriculum);
                (activity.lines || []).forEach(line => addEnglish(line, targetLang, curriculum));
              }
              (activity.pages || []).forEach(page => addEnglish(page.text, targetLang, curriculum));
              (activity.scenes || []).forEach(scene => addEnglish(scene.caption, targetLang, curriculum));
            });
            if (targetLang === 'en') (lesson.words || []).forEach(word => {
              addGlossRequirement(word, curriculum);
            });
            if (targetLang === 'en' && coveredContentIds.has(lessonId)) {
              lesson.activities.filter(activity => activity.type === 'card' && /^[\\p{L}\\p{N}]+$/u.test(activity.text || ''))
                .forEach(activity => addGlossRequirement(activity.text, curriculum));
            }
          });
          content.placement.forEach(question => addEnglish(question.prompt, 'en', false));
          const isProperNounOrNumber = text =>
            /^(?:\d[\d.,\s%:/-]*|[\p{Lu}][\p{L}\p{M}'’.-]*(?:\s+[\p{Lu}][\p{L}\p{M}'’.-]*)*)$/u.test(text.trim());
          const missingTranslations = [...required].filter(([text, locales]) => {
            if (!i18n.tr[text] || [...locales].some(code => !i18n.tr[text][code])) return true;
            if (!curriculumRequired.has(text)) return false;
            const hasLiteralTranslation = Object.prototype.hasOwnProperty.call(curriculumFr, text);
            const french = curriculumFr[text];
            return !hasLiteralTranslation || i18n.tr[text].fr !== french ||
              (!isProperNounOrNumber(text) && french.trim().toLowerCase() === text.trim().toLowerCase());
          }).map(([text]) => text);
          return { missingStrings, missingTranslations, missingGloss: [...new Set(missingGloss)] };
        }""")
        print("MISSING STRINGS:", coverage["missingStrings"])
        print("MISSING CONTENT TRANSLATIONS:", coverage["missingTranslations"])
        print("MISSING GLOSSES:", coverage["missingGloss"])
        assert not coverage["missingStrings"], coverage["missingStrings"]
        assert not coverage["missingTranslations"], coverage["missingTranslations"]
        assert not coverage["missingGloss"], coverage["missingGloss"]
        await franco_curriculum_screenshots(browser, errors)
        await mocked_voice_tests(browser, errors)
        await curriculum_replay_tests(browser, errors)
        await math_word_problem_screenshot(browser, errors)
        await missing_curriculum_locale_tests(browser, errors)
        await curriculum_flow_tests(browser, errors)
        print("SCREENSHOTS:", SHOTS)
        print("ERRORS:", errors)
        assert not errors, errors
        await context.close()
        await browser.close()


asyncio.run(main())
