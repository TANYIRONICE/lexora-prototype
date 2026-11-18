import asyncio
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
    message = await page.evaluate("window.LEXORA_I18N.strings.noVoice.fr.replace('{lang}', 'Français')")
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

async def play(page, tag, maxsteps=120):
    video_shot_done = False
    help_shot_done = False
    number_shot_done = False
    for step in range(maxsteps):
        await page.wait_for_timeout(80)
        if await page.locator(".summary").count():
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

        await page.locator("[data-go='#/section/kids']").click()
        await page.locator("[data-lid='k1']").click()
        assert await play(page, "k1")
        await page.locator(".summary [data-go]").click()
        await page.locator("[data-lid='k2']").click()
        assert await play(page, "k2")
        await page.locator(".summary [data-go]").click()
        await page.locator("[data-lid='k3']").click()
        assert await play(page, "k3")
        await page.locator(".summary [data-go]").click()

        await page.goto(BASE + "#/section/maths")
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
          Object.entries(content.lessons).forEach(([lessonId, lesson]) => {
            lesson.activities.forEach((activity, index) => {
              const where = `${lessonId} activity ${index + 1}`;
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
          Object.keys(content.lessons).forEach(lessonId => {
            if (references[lessonId] !== 1) errors.push(`${lessonId}: referenced by ${references[lessonId] || 0} units`);
          });
          return errors;
        }""")
        print("CONTENT ERRORS:", content_errors)
        assert not content_errors, content_errors

        coverage = await page.evaluate("""() => {
          const content = window.LEXORA_CONTENT, i18n = window.LEXORA_I18N;
          const codes = ['en', 'fr', 'es', 'pt', 'ar'];
          const newLessonIds = new Set(['k4', 'k5', 'k6', 'a3', 'a4', 'a5', 's3', 's4', 'm4', 'm5', 'm6']);
          const missingStrings = Object.entries(i18n.strings)
            .filter(([, values]) => codes.some(code => !values[code]))
            .map(([key]) => key);
          const required = new Set();
          const missingGloss = [];
          content.sections.forEach(section => {
            required.add(section.title); required.add(section.desc);
            section.units.forEach(unit => required.add(unit.title));
          });
          Object.entries(content.lessons).forEach(([lessonId, lesson]) => {
            required.add(lesson.title);
            lesson.activities.forEach(activity => {
              if (activity.prompt) required.add(activity.prompt);
              if (activity.explain) required.add(activity.explain);
              if (activity.title) required.add(activity.title);
              if (newLessonIds.has(lessonId) && activity.text) required.add(activity.text);
              if (newLessonIds.has(lessonId)) (activity.lines || []).forEach(line => required.add(line));
              (activity.pages || []).forEach(page => required.add(page.text));
              (activity.scenes || []).forEach(scene => required.add(scene.caption));
            });
            (lesson.words || []).forEach(word => {
              if (!i18n.gloss[word]) missingGloss.push(word);
            });
            lesson.activities.filter(activity => activity.type === 'card' && /^[\\p{L}\\p{N}]+$/u.test(activity.text || ''))
              .forEach(activity => { if (!i18n.gloss[activity.text]) missingGloss.push(activity.text); });
          });
          content.placement.forEach(question => required.add(question.prompt));
          const missingTranslations = [...required].filter(text =>
            !i18n.tr[text] || ['fr', 'es', 'pt', 'ar'].some(code => !i18n.tr[text][code])
          );
          return { missingStrings, missingTranslations, missingGloss: [...new Set(missingGloss)] };
        }""")
        print("MISSING STRINGS:", coverage["missingStrings"])
        print("MISSING CONTENT TRANSLATIONS:", coverage["missingTranslations"])
        print("MISSING GLOSSES:", coverage["missingGloss"])
        assert not coverage["missingStrings"], coverage["missingStrings"]
        assert not coverage["missingTranslations"], coverage["missingTranslations"]
        assert not coverage["missingGloss"], coverage["missingGloss"]
        print("SCREENSHOTS:", SHOTS)
        print("ERRORS:", errors)
        assert not errors, errors
        await context.close()
        await browser.close()


asyncio.run(main())
