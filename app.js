(() => {
  "use strict";
  const C = window.LEXORA_CONTENT;
  const app = document.getElementById("app");
  const KEY = "lexora_proto_v1";
  const SCORED = ["choice", "truefalse", "match", "missing", "build", "order", "dictation", "number"];
  const AVATARS = ["🦁", "🐘", "🦊", "🐼", "🐸", "🦋", "🐵", "🐯"];
  const BADGES = [
    { id: "first", e: "🌱", t: "First lesson", test: (p) => doneCount(p) >= 1 },
    { id: "three", e: "🚀", t: "3 lessons", test: (p) => doneCount(p) >= 3 },
    { id: "perfect", e: "💯", t: "Perfect score", test: (p) => Object.values(p.lessons).some((l) => l.best === 100) },
    { id: "speller", e: "🐝", t: "Spelling star", test: (p) => (p.lessons.s1 && p.lessons.s2) || (p.lessons.s3 && p.lessons.s4) },
    { id: "reader", e: "📖", t: "Story time", test: (p) => !!p.lessons.k2 },
    { id: "streak3", e: "🔥", t: "3-day streak", test: (p) => p.streak.count >= 3 },
    { id: "movie", e: "🎬", t: "Movie time", key: "movie", test: (p) => !!p.lessons.k3 },
    { id: "maths", e: "🧮", t: "Maths whiz", key: "mathsWhiz", test: (p) => ["m1", "m2", "m3"].some((id) => p.lessons[id]) },
    { id: "family", e: "👪", t: "Family words", key: "familyBadge", test: (p) => !!p.lessons.k5 },
    { id: "shopper", e: "🛒", t: "Smart shopper", key: "shopperBadge", test: (p) => !!(p.lessons.a3 && p.lessons.a4) },
    { id: "shapes", e: "🔷", t: "Shape spotter", key: "shapesBadge", test: (p) => !!p.lessons.m5 },
    { id: "ten", e: "🏆", t: "10 lessons", key: "tenBadge", test: (p) => doneCount(p) >= 10 }
  ];

  // ---------- state ----------
  let S = load();
  function fresh() {
    const deviceLang = (navigator.language || "en").slice(0, 2).toLowerCase();
    return { parent: null, profiles: [], activeId: null, progress: {}, lang: window.LEXORA_I18N.langs.some((l) => l.code === deviceLang) ? deviceLang : "en" };
  }
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || fresh(); } catch { return fresh(); } }
  function save() { localStorage.setItem(KEY, JSON.stringify(S)); }
  const active = () => S.profiles.find((p) => p.id === S.activeId);
  const langInfo = (code) => window.LEXORA_I18N.langs.find((l) => l.code === code) || window.LEXORA_I18N.langs[0];
  const curLang = () => (active() && active().lang) || S.lang || "en";
  function t(key, vars = {}) {
    const entry = window.LEXORA_I18N.strings[key];
    let text = entry && (entry[curLang()] || entry.en);
    if (!text) text = key;
    return text.replace(/\{(\w+)\}/g, (_, name) => vars[name] == null ? "" : vars[name]);
  }
  function tEn(key, vars = {}) {
    const text = window.LEXORA_I18N.strings[key]?.en || key;
    return text.replace(/\{(\w+)\}/g, (_, name) => vars[name] == null ? "" : vars[name]);
  }
  const tc = (english) => curLang() === "en" ? "" : ((window.LEXORA_I18N.tr[english] || {})[curLang()] || "");
  const gl = (word) => curLang() === "en" ? "" : ((window.LEXORA_I18N.gloss[word.toLowerCase()] || {})[curLang()] || "");
  function prog(pid) {
    S.progress[pid] = S.progress[pid] || { lessons: {}, skills: {}, words: [], review: [], streak: { last: null, count: 0 }, badges: [], seconds: 0, log: [] };
    return S.progress[pid];
  }
  const doneCount = (p) => Object.keys(p.lessons).length;
  const totalStars = (p) => Object.values(p.lessons).reduce((a, l) => a + l.stars, 0);
  const uid = () => Math.random().toString(36).slice(2, 9);
  const today = () => new Date().toISOString().slice(0, 10);

  // ---------- utils ----------
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (s, el = app) => el.querySelector(s);
  const $$ = (s, el = app) => [...el.querySelectorAll(s)];
  const go = (h) => { location.hash = h; };
  function shuffle(a) {
    const orig = a.join("|");
    let b = a.slice();
    for (let n = 0; n < 6; n++) {
      for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
      if (b.length < 2 || b.join("|") !== orig) break;
    }
    return b;
  }
  const norm = (s) => s.toLowerCase().replace(/[^\p{L}\p{N}\s']/gu, "").replace(/\s+/g, " ").trim();
  function toast(msg) {
    const t = document.createElement("div"); t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t); setTimeout(() => t.remove(), 2200);
  }
  const starsHtml = (n, of = 3) => `<span class="stars">${"★".repeat(n)}<span class="off">${"★".repeat(of - n)}</span></span>`;

  // ---------- audio (text-to-speech stands in for recorded audio) ----------
  let voice = null;
  const hasTTS = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  function pickVoice() {
    const vs = speechSynthesis.getVoices();
    voice = vs.find((v) => /en[-_]GB/i.test(v.lang)) || vs.find((v) => /^en/i.test(v.lang)) || null;
  }
  if (hasTTS) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text, opts = {}) {
    if (!hasTTS) { toast(t("noVoiceBrowser")); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const code = opts.lang;
    if (code && code !== "en") {
      const v = speechSynthesis.getVoices().find((item) => item.lang.toLowerCase().startsWith(code.toLowerCase()));
      if (!v) { toast(t("noVoice", { lang: langInfo(code).name })); return; }
      u.voice = v; u.lang = v.lang;
    } else {
      if (voice) u.voice = voice;
      u.lang = voice ? voice.lang : "en-GB";
    }
    u.rate = opts.rate || 0.9;
    if (opts.onstart) u.onstart = opts.onstart;
    if (opts.onboundary) u.onboundary = opts.onboundary;
    if (opts.onend) u.onend = opts.onend;
    speechSynthesis.speak(u);
  }
  const videoTimers = new Set();
  const setVideoTimer = (callback, delay) => {
    let timer;
    timer = setTimeout(() => { videoTimers.delete(timer); callback(); }, delay);
    videoTimers.add(timer);
    return timer;
  };
  const clearVideoTimer = (timer) => {
    if (timer == null) return;
    clearTimeout(timer); videoTimers.delete(timer);
  };
  const clearVideoTimers = () => {
    videoTimers.forEach(clearTimeout); videoTimers.clear();
  };
  let videoCleanup = null;
  const stopAudio = () => {
    clearVideoTimers();
    if (videoCleanup) videoCleanup();
    videoCleanup = null;
    if (hasTTS) speechSynthesis.cancel();
  };
  const speakBtns = (text, big) => `<div class="speakrow"><button class="speak ${big ? "big" : ""}" data-say="${esc(text)}" aria-label="Play audio">🔊${big ? "" : ` ${t("listen")}`}</button><button class="speak slow" data-say="${esc(text)}" data-rate="0.55" aria-label="Play slowly">🐢 ${t("slow")}</button></div>`;

  app.addEventListener("click", (e) => {
    const s = e.target.closest("[data-say]");
    if (s) { speak(s.dataset.say, { rate: +s.dataset.rate || 0.9 }); return; }
    const translated = e.target.closest("[data-say-lang]");
    if (translated) { speak(translated.dataset.sayLang, { lang: curLang() }); return; }
    if (e.target.closest("[data-lang-open]")) { languageSheet(e.target.closest("[data-lang-open]").dataset.langScope); return; }
    const choice = e.target.closest("[data-lang-choice]");
    if (choice) {
      const code = choice.dataset.langChoice;
      if (choice.dataset.scope === "active" && active()) active().lang = code;
      else S.lang = code;
      save(); router();
      return;
    }
    if (e.target.closest("[data-lang-close]")) { const sheet = $("#language-sheet"); if (sheet) sheet.remove(); return; }
    const g = e.target.closest("[data-go]");
    if (g) go(g.dataset.go);
  });

  // ---------- shell ----------
  const banner = () => `<div class="banner">${t("banner")}</div>`;
  function languageSheet(scope) {
    const old = $("#language-sheet"); if (old) old.remove();
    app.insertAdjacentHTML("beforeend", `<div class="sheet-scrim" id="language-sheet" data-lang-close><div class="language-sheet"><b>${t("language")}</b>${window.LEXORA_I18N.langs.map((l) => `<button class="language-option" data-lang-choice="${l.code}" data-scope="${scope}">${l.code === curLang() ? "✓ " : ""}${l.name}</button>`).join("")}</div></div>`);
  }
  const langSelect = (id, value) => `<select id="${id}" aria-label="${t("language")}">${window.LEXORA_I18N.langs.map((l) => `<option value="${l.code}" ${l.code === value ? "selected" : ""}>${l.name}</option>`).join("")}</select>`;
  function topbar() {
    const p = active(); const pr = prog(p.id);
    return `<div class="topbar"><button class="who" data-go="#/profiles"><span class="avatar">${p.avatar}</span>${esc(p.name)}</button>
      <span class="spacer"></span><button class="pill lang-pill" data-lang-open data-lang-scope="active">🌐 ${curLang().toUpperCase()}</button><span class="pill">⭐ ${totalStars(pr)}</span><span class="pill">🔥 ${pr.streak.count}</span></div>`;
  }
  function tabbar(on) {
    const tabs = [["home", "🏠", t("learn")], ["progress", "📊", t("progress")], ["review", "🔁", t("review")], ["profiles", "👥", t("profiles")]];
    return `<nav class="tabbar">${tabs.map(([r, e, t]) => `<a href="#/${r}" class="${on === r ? "on" : ""}"><span>${e}</span>${t}</a>`).join("")}</nav>`;
  }
  const render = (html) => {
    document.documentElement.lang = curLang();
    document.documentElement.dir = langInfo(curLang()).dir;
    app.innerHTML = html;
    window.scrollTo(0, 0);
  };

  // ---------- onboarding ----------
  function welcome() {
    render(`${banner()}<div class="screen center">
      <button class="language-button" data-lang-open data-lang-scope="device">🌐 ${langInfo(S.lang || "en").name} ▾</button>
      <div style="font-size:3.4rem">📚🌍✨</div>
      <div class="logo"><img src="icon.svg" alt="">Lexora</div>
      <div class="slogan">${t("slogan")}</div>
      <p class="muted">${t("welcomeDesc")}</p>
      <div style="width:100%;display:flex;flex-direction:column;gap:12px;margin-top:10px">
        <button class="btn" data-go="#/parent">${t("parentButton")}</button>
        <button class="btn secondary" data-go="#/age">${t("learnerButton")}</button>
      </div>
      <p class="small muted" style="margin-top:18px">${t("under13")}</p>
      <a class="small" href="#/admin">${t("adminPreview")}</a>
    </div>`);
  }

  function ageGate() {
    const y = new Date().getFullYear();
    let opts = `<option value="">${t("selectYear")}</option>`;
    for (let i = y - 3; i >= y - 90; i--) opts += `<option>${i}</option>`;
    render(`${banner()}<div class="screen"><button class="back" data-go="#/welcome">${t("back")}</button>
      <h2>${t("ageQuestion")}</h2><p class="muted">${t("ageWhy")}</p>
      <div class="field"><select id="yr" aria-label="Birth year">${opts}</select></div>
      <button class="btn" id="next" disabled>${t("continue")}</button></div>`);
    $("#yr").onchange = () => { $("#next").disabled = !$("#yr").value; };
    $("#next").onclick = () => {
      const age = y - +$("#yr").value;
      if (age < 13) {
        render(`${banner()}<div class="screen center"><div style="font-size:4rem">👨‍👩‍👧</div><h2>${t("under13Title")}</h2>
          <p class="muted">${t("under13Desc")}</p>
          <button class="btn" data-go="#/parent">${t("parentSetup")}</button><button class="btn ghost" data-go="#/welcome">${t("back")}</button></div>`);
      } else go("#/learner");
    };
  }

  function learnerSignup() {
    let mode = "start";
    render(`${banner()}<div class="screen"><button class="back" data-go="#/age">${t("back")}</button>
      <h2>${t("createAccount")}</h2>
      <div class="field"><label for="nm">${t("yourName")}</label><input id="nm" maxlength="20" autocomplete="nickname"></div>
      <div class="field"><label for="em">${t("email")}</label><input id="em" type="email" placeholder="you@example.com" autocomplete="email"></div>
      <div class="field"><label for="pw">${t("password")}</label><input id="pw" type="password" placeholder="At least 8 characters" autocomplete="new-password"></div>
      <div class="field"><label>${t("startWhere")}</label>
        <div class="seg"><button class="on" data-m="start">${t("beginner")}</button><button data-m="quiz">${t("levelQuiz")}</button></div></div>
      <div class="field"><label>${t("language")}</label>${langSelect("profile-lang", S.lang || "en")}</div>
      <label class="check"><input type="checkbox" id="ok"> ${t("terms")}</label>
      <button class="btn" id="go" disabled>${t("create")}</button>
      <p class="small muted">${t("prototypeNote")}</p></div>`);
    const upd = () => { $("#go").disabled = !($("#nm").value.trim() && $("#ok").checked); };
    $("#nm").oninput = upd; $("#ok").onchange = upd;
    $$(".seg button").forEach((b) => b.onclick = () => { mode = b.dataset.m; $$(".seg button").forEach((x) => x.classList.toggle("on", x === b)); });
    $("#go").onclick = () => {
      const p = { id: uid(), name: $("#nm").value.trim(), avatar: "🧑🏾", type: "learner", level: "Beginner A1", lang: $("#profile-lang").value };
      S.profiles.push(p); S.activeId = p.id; save();
      go(mode === "quiz" ? "#/placement" : "#/home");
    };
  }

  function parentSignup() {
    render(`${banner()}<div class="screen"><button class="back" data-go="#/welcome">${t("back")}</button>
      <h2>${t("parentAccount")}</h2><p class="muted">${t("parentIntro")}</p>
      <div class="field"><label for="nm">${t("parentFirst")}</label><input id="nm" maxlength="20" autocomplete="given-name"></div>
      <div class="field"><label for="em">${t("contact")}</label><input id="em" placeholder="you@example.com or 6XX XXX XXX"></div>
      <div class="field"><label for="pw">${t("password")}</label><input id="pw" type="password" placeholder="At least 8 characters" autocomplete="new-password"></div>
      <div class="card small"><b>${t("consent")}</b><p class="muted" style="margin:.4em 0 .6em">${t("consentText")}</p>
      <label class="check"><input type="checkbox" id="ok"> ${t("consentCheck")}</label></div>
      <button class="btn" id="go" disabled>${t("continue")}</button></div>`);
    const upd = () => { $("#go").disabled = !($("#nm").value.trim() && $("#ok").checked); };
    $("#nm").oninput = upd; $("#ok").onchange = upd;
    $("#go").onclick = () => {
      S.parent = { name: $("#nm").value.trim(), contact: $("#em").value.trim(), consentAt: new Date().toISOString(), policyVersion: "0.1-demo" };
      const me = { id: uid(), name: S.parent.name, avatar: "🧑🏾‍🦱", type: "learner", isParent: true, level: "Beginner A1", lang: S.lang || "en" };
      S.profiles.push(me); save();
      sessionStorage.setItem("gate", Date.now());
      go("#/addchild");
    };
  }

  function addChild() {
    let av = AVATARS[0], band = "5–7";
    render(`${banner()}<div class="screen"><button class="back" data-go="#/profiles">${t("back")}</button>
      <h2>${t("addChild")}</h2><p class="muted">${t("childPrivacy")}</p>
      <div class="field"><label for="nm">${t("nickname")}</label><input id="nm" maxlength="14" placeholder="e.g. Ama"></div>
      <div class="field"><label>${t("avatar")}</label><div class="avatars">${AVATARS.map((a, i) => `<button data-a="${a}" class="${i ? "" : "on"}" aria-label="avatar ${a}">${a}</button>`).join("")}</div></div>
      <div class="field"><label>${t("age")}</label><div class="seg">${["5–7", "8–10", "11–12"].map((b, i) => `<button data-b="${b}" class="${i ? "" : "on"}">${b}</button>`).join("")}</div></div>
      <div class="field"><label>${t("language")}</label>${langSelect("child-lang", S.lang || "en")}</div>
      <button class="btn" id="go" disabled>${t("add")}</button></div>`);
    $("#nm").oninput = () => { $("#go").disabled = !$("#nm").value.trim(); };
    $$("[data-a]").forEach((b) => b.onclick = () => { av = b.dataset.a; $$("[data-a]").forEach((x) => x.classList.toggle("on", x === b)); });
    $$("[data-b]").forEach((b) => b.onclick = () => { band = b.dataset.b; $$("[data-b]").forEach((x) => x.classList.toggle("on", x === b)); });
    $("#go").onclick = () => {
      const p = { id: uid(), name: $("#nm").value.trim(), avatar: av, type: "child", ageBand: band, lang: $("#child-lang").value };
      S.profiles.push(p); save(); toast(t("toastAdded", { name: p.name })); go("#/profiles");
    };
  }

  function profiles() {
    render(`${banner()}<div class="screen center"><div class="logo" style="font-size:1.4rem"><img src="icon.svg" alt="" style="width:34px;height:34px">Lexora</div>
      <h2>${t("whoLearning")}</h2>
      <div class="profiles">${S.profiles.map((p) => `<button class="profile" data-pid="${p.id}"><span class="avatar lg">${p.avatar}</span>${esc(p.name)}<span class="small muted">${p.type === "child" ? `${t("kids")} · ${p.ageBand}` : p.isParent ? t("parent") : t("learner")}</span></button>`).join("")}</div>
      ${S.parent ? `<button class="btn secondary" data-go="#/gate">🔒 ${t("parentArea")}</button>` : `<button class="btn secondary" data-go="#/settings">⚙️ ${t("settings")}</button>`}
    </div>`);
    $$("[data-pid]").forEach((b) => b.onclick = () => { S.activeId = b.dataset.pid; save(); go("#/home"); });
  }

  function placement() {
    const qs = C.placement; let i = 0, score = 0;
    const step = () => {
      if (i >= qs.length) {
        const lvl = score <= 1 ? "Beginner A1" : score <= 3 ? "Elementary A2" : "Intermediate B1";
        active().level = lvl; save();
        return render(`${banner()}<div class="screen center"><div style="font-size:4rem">🎯</div><h2>${t("placementYourLevel", { level: lvl })}</h2>
          <p class="muted">${t("placementScore", { score, total: qs.length })}</p>
          <p class="small muted">${t("placementNote")}</p>
          <button class="btn" data-go="#/home">${t("startLearning")}</button></div>`);
      }
      const q = qs[i];
      render(`${banner()}<div class="player-top"><div class="bar"><i style="width:${(i / qs.length) * 100}%"></i></div></div>
        <div class="act"><div class="muted small">${t("placementLevel", { n: i + 1, total: qs.length })}</div><div class="prompt" dir="ltr">${esc(q.prompt)}</div>${helperLine(q.prompt)}
        <div class="options">${q.options.map((o, k) => `<button class="opt" data-k="${k}">${esc(o)}</button>`).join("")}</div></div>`);
      $$(".opt").forEach((b) => b.onclick = () => { if (+b.dataset.k === q.answer) score++; i++; step(); });
    };
    step();
  }

  // ---------- learning ----------
  const sectionsFor = (p) => C.sections.filter((s) => s.audience === "all" || (p.type === "child" ? s.audience === "child" : s.audience === "learner"));
  const unitsFor = (s, p) => !p ? s.units : s.units.filter((u) => !u.audience || u.audience === p.type);
  const lessonIdsFor = (s, p) => unitsFor(s, p).flatMap((u) => u.lessons || []);
  const lessonIds = (sec) => sec.units.flatMap((u) => u.lessons || []);
  const sectionOf = (lid) => C.sections.find((s) => lessonIds(s).includes(lid));
  const unitOf = (lid) => { const s = sectionOf(lid); return s && s.units.find((u) => (u.lessons || []).includes(lid)); };
  function unlocked(lid, pr, p = active()) {
    const ids = p ? lessonIdsFor(sectionOf(lid), p) : lessonIds(sectionOf(lid)); const i = ids.indexOf(lid);
    return i <= 0 || !!pr.lessons[ids[i - 1]];
  }
  function nextLesson(p, pr) {
    for (const s of sectionsFor(p)) for (const id of lessonIdsFor(s, p)) if (!pr.lessons[id] && unlocked(id, pr, p)) return id;
    return null;
  }

  function home() {
    const p = active(), pr = prog(p.id), nxt = nextLesson(p, pr);
    const kid = p.type === "child";
    const nxtTitle = nxt ? C.lessons[nxt].title : "";
    const nxtTranslation = nxt ? tc(nxtTitle) : "";
    render(`${topbar()}<div class="screen">
      <h2>${kid ? esc(t("homeHi", { name: p.name })) : `${t("hello")} ${esc(p.name)}`}</h2>
      <p class="muted" style="margin-top:-6px">${kid ? "👋" : t("level", { level: esc(p.level || "Beginner A1") })}</p>
      ${nxt ? `<button class="lesson-row" data-go="#/lesson/${nxt}" style="border:2px solid var(--accent)"><span class="em">${C.lessons[nxt].emoji}</span><span style="flex:1"><span class="small muted">${t("continueLesson")}</span><br><span class="t" dir="ltr">${esc(nxtTitle)}</span>${nxtTranslation ? `<br><span class="small muted" dir="auto">${esc(nxtTranslation)}</span>` : ""}</span><span style="font-size:1.6rem">▶️</span></button>` : `<div class="card">🎉 ${t("lessonFinished")}</div>`}
      ${sectionsFor(p).map((s) => `<button class="section-card" style="background:${s.color}" data-go="#/section/${s.id}"><span class="em">${s.emoji}</span><span><h3>${esc(translatedSection(s.title))}</h3><p>${esc(translatedSection(s.desc))}</p></span></button>`).join("")}
      ${kid ? "" : `<button class="section-card locked" onclick="void 0" data-locked><span class="em">🤖</span><span><h3>${t("aiTutor")}</h3><p>${t("aiTutorDesc")}</p></span></button>`}
    </div>${tabbar("home")}`);
    const lk = $("[data-locked]"); if (lk) lk.onclick = () => toast(t("aiPlanned"));
    if (kid) speak(tEn("homeHi", { name: p.name }));
  }

  const translatedSection = (value) => tc(value) || value;
  const helperLine = (english) => {
    const translation = tc(english);
    return translation ? `<div class="help" dir="auto">🌐 ${esc(translation)} <button class="speak mini" data-say-lang="${esc(translation)}" aria-label="Listen to translation">🔊</button></div>` : "";
  };
  const glossLabel = (word) => { const meaning = gl(word); return meaning ? `<div class="gloss"><span dir="ltr">${esc(word)}</span> — <span dir="auto">${esc(meaning)}</span></div>` : ""; };
  const promptMarkup = (prompt) => `<div class="prompt" dir="ltr">${esc(prompt)}</div>${helperLine(prompt)}`;
  const badgeStringKey = (id) => ({ first: "badgeFirst", three: "threeBadge", perfect: "perfectBadge", speller: "spellerBadge", reader: "readerBadge", streak3: "streakBadge", movie: "movie", maths: "mathsWhiz", family: "familyBadge", shopper: "shopperBadge", shapes: "shapesBadge", ten: "tenBadge" }[id] || id);

  function section(id) {
    const s = C.sections.find((x) => x.id === id); if (!s) return go("#/home");
    const pr = prog(active().id);
    const p = active();
    render(`${topbar()}<div class="screen"><button class="back" data-go="#/home">‹ ${t("home")}</button>
      <div class="section-card" style="background:${s.color}"><span class="em">${s.emoji}</span><span><h3>${esc(translatedSection(s.title))}</h3><p>${esc(translatedSection(s.desc))}</p></span></div>
      ${unitsFor(s, p).map((u) => `<div class="unit"><h3>${esc(translatedSection(u.title))}</h3>${u.soon ? `<div class="lesson-row locked"><span class="em">🔒</span><span><span class="t">${t("comingSoon")}</span><br><span class="small muted">${t("moreLessons")}</span></span></div>` :
        (u.lessons || []).map((lid) => { const L = C.lessons[lid], done = pr.lessons[lid], open = unlocked(lid, pr, p), hasVideo = L.activities.some((a) => a.type === "video");
          const titleTranslation = tc(L.title);
          return `<button class="lesson-row ${open ? "" : "locked"}" data-lid="${lid}" data-open="${open ? 1 : ""}"><span class="em">${open ? L.emoji : "🔒"}</span><span style="flex:1"><span class="t" dir="ltr">${esc(L.title)}</span>${titleTranslation ? `<br><span class="small muted" dir="auto">${esc(titleTranslation)}</span>` : ""}<br><span class="small muted">${esc(L.skill)} · ${L.activities.length} ${t("activities", { n: "" }).trim()}${hasVideo ? ` · ${t("videoTag")}` : ""}</span></span>${done ? starsHtml(done.stars) : open ? "▶️" : ""}</button>`; }).join("")}</div>`).join("")}
    </div>${tabbar("home")}`);
    $$("[data-lid]").forEach((b) => b.onclick = () => b.dataset.open ? go(`#/lesson/${b.dataset.lid}`) : toast(t("unlockMsg")));
  }

  // ---------- lesson player ----------
  function lesson(lid, preview) {
    let L;
    if (lid === "review") {
      const pr = prog(active().id);
      if (!pr.review.length) return go("#/review");
      L = { id: "review", title: "Review words", emoji: "🔁", skill: "Spelling", words: [],
        activities: pr.review.map((w) => ({ type: "dictation", prompt: "Spell the word you hear.", say: w, answer: w, word: true })) };
    } else L = C.lessons[lid];
    if (!L) return go("#/home");
    const p = preview ? null : active();
    if (!preview && lid !== "review" && !unlocked(lid, prog(p.id))) return go("#/home");
    const kid = preview ? sectionOf(lid).id === "kids" || unitOf(lid).audience === "child" : p.type === "child";
    const st = { queue: L.activities.map((_, i) => i), pos: 0, first: {}, retried: new Set(), wrongWords: new Set(), rightWords: new Set(), t0: Date.now() };

    const leave = () => { if (confirm(t("leaveConfirm"))) { stopAudio(); go(preview ? "#/admin" : `#/section/${lid === "review" ? "spelling" : sectionOf(lid).id}`); } };

    function show() {
      const idx = st.queue[st.pos], a = L.activities[idx];
      render(`<div class="player-top"><button class="x" aria-label="${t("closeLesson")}">✕</button><div class="bar"><i style="width:${(st.pos / st.queue.length) * 100}%"></i></div>${preview ? `<span class="pill">Preview</span>` : ""}</div>
        <div class="act ${kid ? "kid" : ""}" id="act"></div><div class="footer" id="ft"></div>`);
      $(".x").onclick = leave;
      const act = $("#act"), ft = $("#ft");
      const ctx = {
        preview, next,
        ready(fn) { ft.innerHTML = `<button class="btn" id="chk" disabled>${t("check")}</button>`; ctx.check = fn; $("#chk", ft).onclick = () => ctx.result(ctx.check()); },
        enable(on = true) { const b = $("#chk", ft); if (b) b.disabled = !on; },
        cont(label = t("continue"), fn) { ft.className = "footer"; ft.innerHTML = `<button class="btn" id="cnt">${label}</button>`; $("#cnt", ft).onclick = fn || next; },
        result({ ok, answer, explain }) {
          $$("button.opt, button.tile, input", act).forEach((b) => b.disabled = true);
          if (!(idx in st.first)) st.first[idx] = ok;
          const w = a.word === true ? a.answer : a.word;
          if (w) (ok ? st.rightWords : st.wrongWords).add(w);
          if (!ok && !st.retried.has(idx)) { st.queue.push(idx); st.retried.add(idx); }
          const praiseKey = ["great", "excellent", "wellDone", "brilliant"][Math.floor(Math.random() * 4)];
          const praise = t(praiseKey);
          ft.className = `footer ${ok ? "good" : "wrong"}`;
          ft.innerHTML = `<div class="fb">${ok ? "✓ " + praise : "✗ " + t("notQuite")}${!ok && answer ? `<small>${t("correctAnswer")} <b dir="ltr">${esc(answer)}</b></small>` : ""}${explain && !ok ? `<small dir="auto">${esc(explain)}</small>${helperLine(explain)}` : ""}${!ok ? `<small class="muted">${t("retryEnd")}</small>` : ""}</div><button class="btn ${ok ? "ok" : "bad"}" id="cnt">${t("continue")}</button>`;
          $("#cnt", ft).onclick = next;
          if (kid) speak(tEn(ok ? praiseKey : "greatAgain"));
          else if (!ok && answer) speak(answer);
        }
      };
      (R[a.type] || R.card)(a, act, ctx, kid);
    }
    function next() { stopAudio(); st.pos++; st.pos >= st.queue.length ? finish() : show(); }

    function finish() {
      const scored = L.activities.map((a, i) => i).filter((i) => SCORED.includes(L.activities[i].type));
      const right = scored.filter((i) => st.first[i]).length;
      const pct = scored.length ? Math.round((right / scored.length) * 100) : 100;
      const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : 1;
      const secs = Math.round((Date.now() - st.t0) / 1000);
      let newBadges = [];
      if (!preview) {
        const pr = prog(p.id);
        if (lid !== "review") {
          const old = pr.lessons[lid] || { best: 0, stars: 0, attempts: 0 };
          pr.lessons[lid] = { best: Math.max(old.best, pct), stars: Math.max(old.stars, stars), attempts: old.attempts + 1, completedAt: new Date().toISOString() };
          L.words.forEach((w) => { if (!pr.words.includes(w)) pr.words.push(w); });
        }
        const sk = (pr.skills[L.skill] = pr.skills[L.skill] || { c: 0, t: 0 }); sk.c += right; sk.t += scored.length;
        st.wrongWords.forEach((w) => { if (!pr.review.includes(w)) pr.review.push(w); });
        if (lid === "review") pr.review = pr.review.filter((w) => !scored.some((i) => st.first[i] && L.activities[i].answer === w));
        const t = today(), y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
        if (pr.streak.last !== t) { pr.streak.count = pr.streak.last === y ? pr.streak.count + 1 : 1; pr.streak.last = t; }
        pr.seconds += secs;
        pr.log.unshift({ at: new Date().toISOString(), lid, title: L.title, pct });
        pr.log = pr.log.slice(0, 20);
        newBadges = BADGES.filter((b) => !pr.badges.includes(b.id) && b.test(pr));
        newBadges.forEach((b) => pr.badges.push(b.id));
        save();
      }
      const backTo = preview ? "#/admin" : lid === "review" ? "#/review" : `#/section/${sectionOf(lid).id}`;
      render(`<div class="screen center summary"><div class="trophy">${stars === 3 ? "🏆" : stars === 2 ? "🎉" : "👍"}</div>
        <h1>${t("summaryTitle")}</h1>${starsHtml(stars)}
        <div class="statgrid" style="width:100%"><div class="stat"><b>${pct}%</b><span>${t("firstTry")}</span></div><div class="stat"><b>${L.words.length}</b><span>${t("words")}</span></div><div class="stat"><b>${Math.max(1, Math.round(secs / 60))} ${t("minutes")}</b><span>${t("time")}</span></div></div>
        ${newBadges.length ? `<div class="card" style="width:100%"><b>${newBadges.length > 1 ? t("newBadges") : t("newBadge")}</b><div class="badges" style="margin-top:10px">${newBadges.map((b) => `<div class="badge"><span class="e">${b.e}</span>${t(b.key || badgeStringKey(b.id))}</div>`).join("")}</div></div>` : ""}
        ${L.words.length ? `<p class="small muted" dir="auto">${L.words.map((w) => `<span dir="ltr">${esc(w)}</span>${gl(w) ? ` — <span dir="auto">${esc(gl(w))}</span>` : ""}`).join(" · ")}</p>` : ""}
        ${st.wrongWords.size && !preview ? `<p class="small muted">${t("practiceList")} ${[...st.wrongWords].map((w) => `<span dir="ltr">${esc(w)}</span>${gl(w) ? ` — <span dir="auto">${esc(gl(w))}</span>` : ""}`).join(", ")}</p>` : ""}
        <div style="width:100%;display:flex;flex-direction:column;gap:10px"><button class="btn" data-go="${backTo}">${t("continue")}</button><button class="btn ghost" id="again">${t("tryAgain")}</button></div></div>`);
      $("#again").onclick = () => lesson(lid, preview);
      speak(tEn(kid ? stars === 1 ? "spokenStars" : "spokenStarsPlural" : "summaryTitle", { n: stars }));
    }
    show();
  }

  // ---------- activity renderers ----------
  const R = {
    video(a, el, ctx) {
      let index = 0, started = false, playing = false, ended = false, captions = true, speed = 1, token = 0;
      let startupTimer = null, estimateTimer = null, safetyTimer = null;
      const scenes = a.scenes;
      const clearSceneTimers = () => {
        clearVideoTimer(startupTimer); clearVideoTimer(estimateTimer); clearVideoTimer(safetyTimer);
        startupTimer = estimateTimer = safetyTimer = null;
      };
      el.innerHTML = `<div class="video-title" dir="ltr">${esc(a.title)}</div>
        <div class="video-stage" id="vstage"><div class="video-art" id="vart"></div>
          <button class="video-overlay" id="vstart" aria-label="${t("play")}">▶︎</button>
          <button class="video-again" id="vagain">${t("watchAgain")}</button>
          <div class="video-captions" id="vcaptions"><div class="caption-en" id="vcap-en" dir="ltr"></div><div class="caption-tr" id="vcap-tr" dir="auto"></div></div>
        </div>
        <div class="video-controls">
          <button class="video-control" id="vplay" aria-label="${t("play")}">▶︎</button>
          <button class="video-control" id="vrestart" aria-label="Restart">⏮</button>
          <button class="video-control" id="vnext" aria-label="Next scene">⏭</button>
          <div class="scene-track">${scenes.map((_, i) => `<button class="scene-segment" data-scene="${i}" aria-label="Scene ${i + 1}"></button>`).join("")}</div>
          <span class="scene-count" id="vcount"></span>
          <button class="video-control speed" id="vspeed">1×</button>
          <button class="video-control cc" id="vcc">CC</button>
        </div>`;
      const ft = $("#ft");
      ft.innerHTML = `<button class="btn" id="cnt" ${ctx.preview ? "" : "disabled"}>${ctx.preview ? t("continue") : t("watchEnd")}</button>`;
      $("#cnt", ft).onclick = ctx.next;
      const paint = () => {
        const scene = scenes[index], art = $("#vart", el), cap = $("#vcap-en", el);
        $("#vstage", el).style.background = scene.bg;
        art.className = `video-art anim-${scene.anim}`;
        art.textContent = scene.art;
        const parts = scene.caption.split(" ");
        cap.innerHTML = parts.map((word, i) => `<span data-vword="${i}">${esc(word)}</span>`).join(" ");
        $("#vcap-tr", el).textContent = tc(scene.caption);
        $("#vcaptions", el).hidden = !captions;
        $("#vstart", el).hidden = started;
        $("#vagain", el).hidden = !ended;
        $("#vcount", el).textContent = `${t("scene")} ${index + 1} / ${scenes.length}`;
        $("#vplay", el).textContent = playing ? "⏸" : "▶︎";
        $("#vspeed", el).textContent = speed === 1 ? "1×" : "🐢 0.7×";
        $$(".scene-segment", el).forEach((b, i) => b.classList.toggle("done", i < index));
        $$(".scene-segment", el).forEach((b, i) => b.classList.toggle("current", i === index));
        $("#cnt", ft).disabled = !ctx.preview && !ended;
        $("#cnt", ft).textContent = !ctx.preview && !ended ? t("watchEnd") : t("continue");
      };
      const playScene = () => {
        if (index >= scenes.length) return;
        clearSceneTimers();
        started = true; playing = true; ended = false;
        const thisToken = ++token, scene = scenes[index];
        videoCleanup = () => { playing = false; token++; clearSceneTimers(); };
        paint();
        const words = scene.caption.split(/\s+/).length;
        const estimate = (1200 + 420 * words) / speed;
        let speechStarted = false;
        const useEstimate = () => {
          if (!playing || thisToken !== token || speechStarted) return;
          estimateTimer = setVideoTimer(() => advance(thisToken), estimate);
        };
        if (!hasTTS) estimateTimer = setVideoTimer(() => advance(thisToken), estimate);
        else startupTimer = setVideoTimer(useEstimate, 1500);
        const starts = []; let pos = 0;
        scene.caption.split(" ").forEach((word) => { starts.push(pos); pos += word.length + 1; });
        speak(scene.caption, {
          rate: speed,
          onstart: () => {
            if (!playing || thisToken !== token) return;
            speechStarted = true;
            clearVideoTimer(startupTimer); startupTimer = null;
            clearVideoTimer(estimateTimer); estimateTimer = null;
            safetyTimer = setVideoTimer(() => { if (speechStarted) advance(thisToken); }, Math.max(4000, 2.5 * estimate));
          },
          onboundary: (event) => {
            const k = starts.findIndex((start, i) => event.charIndex >= start && (i === starts.length - 1 || event.charIndex < starts[i + 1]));
            $$("#vcap-en span", el).forEach((span) => span.classList.toggle("hl", +span.dataset.vword === k));
          },
          onend: () => advance(thisToken)
        });
      };
      const advance = (thisToken) => {
        if (!playing || thisToken !== token) return;
        clearSceneTimers();
        playing = false;
        if (index + 1 < scenes.length) { index++; playScene(); }
        else { ended = true; paint(); }
      };
      $("#vstart", el).onclick = playScene;
      $("#vplay", el).onclick = () => {
        if (playing) { playing = false; token++; stopAudio(); paint(); }
        else playScene();
      };
      $("#vrestart", el).onclick = () => { stopAudio(); token++; index = 0; ended = false; playing = false; playScene(); };
      $("#vnext", el).onclick = () => {
        stopAudio(); token++; playing = false;
        if (index + 1 < scenes.length) { index++; playScene(); }
        else { ended = true; paint(); }
      };
      $$(".scene-segment", el).forEach((b) => b.onclick = () => { stopAudio(); token++; index = +b.dataset.scene; ended = false; playing = false; playScene(); });
      $("#vspeed", el).onclick = () => {
        const resume = playing;
        if (resume) { playing = false; token++; stopAudio(); }
        speed = speed === 1 ? 0.7 : 1; paint();
        if (resume) playScene();
      };
      $("#vcc", el).onclick = () => { captions = !captions; paint(); };
      $("#vagain", el).onclick = () => { stopAudio(); token++; index = 0; ended = false; playing = false; playScene(); };
      paint();
    },
    number(a, el, ctx, kid) {
      const inputMarkup = `<input class="typed numeric ${kid ? "kid-number" : ""}" id="num" type="text" inputmode="numeric" pattern="[0-9, ]*" autocomplete="off" aria-label="Answer">`;
      el.innerHTML = `${promptMarkup(a.prompt)}${a.visual ? `<div class="number-visual" dir="ltr">${a.visual}</div>` : ""}${a.unit ? `<div class="number-answer" dir="ltr">${inputMarkup}<span class="number-unit" dir="ltr">${esc(a.unit)}</span></div>` : inputMarkup}`;
      const input = $("#num", el);
      input.oninput = () => ctx.enable(!!input.value.trim());
      input.onkeydown = (event) => { if (event.key === "Enter" && input.value.trim()) $("#chk").click(); };
      ctx.ready(() => ({ ok: Number(input.value.replace(/[,\s]/g, "")) === Number(a.answer), answer: a.unit ? `${Number(a.answer).toLocaleString("en-US")} ${a.unit}` : a.answer }));
    },
    card(a, el, ctx) {
      el.innerHTML = `<div class="flash" dir="ltr">${a.big ? `<div class="big">${a.big}</div>` : ""}${a.emoji ? `<div class="emoji">${a.emoji}</div>` : ""}
        ${a.title ? `<h2>${esc(a.title)}</h2>${helperLine(a.title)}` : ""}${a.text ? `<div class="word">${esc(a.text)}</div>${/^[\p{L}\p{N}]+$/u.test(a.text) ? glossLabel(a.text) : helperLine(a.text)}` : ""}${a.lines ? `<div class="lines">${a.lines.map((l) => `<div>${l}</div>`).join("")}</div>` : ""}
        ${a.say ? speakBtns(a.say) : ""}</div>`;
      if (a.say) speak(a.say);
      ctx.cont();
    },
    choice(a, el, ctx, kid) {
      let sel = null;
      el.innerHTML = `${promptMarkup(a.prompt)}${a.listen ? speakBtns(a.say, true) : ""}${a.bigEmoji ? `<div class="bigemoji" dir="ltr">${a.bigEmoji}</div>` : ""}
        ${a.word && !a.listen ? speakBtns(a.say) : ""}
        <div class="options ${a.pictures ? "pics" : ""}" dir="ltr">${a.options.map((o, i) => `<button class="opt" data-i="${i}" dir="ltr">${o.e ? `<span class="e">${o.e}</span>` : ""}${a.pictures && kid ? "" : esc(o.t)}</button>`).join("")}</div>`;
      $$(".opt", el).forEach((b) => b.onclick = () => {
        sel = +b.dataset.i; $$(".opt", el).forEach((x) => x.classList.toggle("sel", x === b)); ctx.enable();
        const o = a.options[sel]; if (kid || a.pictures) speak(o.t);
      });
      ctx.ready(() => {
        const ok = sel === a.answer; $$(".opt", el)[a.answer].classList.add("good"); if (!ok) $$(".opt", el)[sel].classList.add("wrong");
        return { ok, answer: a.sentence || a.options[a.answer].t };
      });
      if (a.listen || kid || a.word) speak(a.say || a.prompt);
    },
    truefalse(a, el, ctx) {
      let sel = null;
      el.innerHTML = `<div class="muted small">${t("truefalseTitle")}</div>${promptMarkup(a.prompt)}
        <div class="tf" dir="ltr"><button class="opt" data-v="1">✓ ${t("true")}</button><button class="opt" data-v="0">✗ ${t("false")}</button></div>`;
      $$(".opt", el).forEach((b) => b.onclick = () => { sel = b.dataset.v === "1"; $$(".opt", el).forEach((x) => x.classList.toggle("sel", x === b)); ctx.enable(); });
      ctx.ready(() => {
        const ok = sel === a.answer; $$(".opt", el)[a.answer ? 0 : 1].classList.add("good"); if (!ok) $$(".opt", el)[sel ? 0 : 1].classList.add("wrong");
        return { ok, answer: a.answer ? t("true") : t("false"), explain: a.explain };
      });
    },
    match(a, el, ctx, kid) {
      const L = shuffle(a.pairs.map((p) => p[0])), Rr = shuffle(a.pairs.map((p) => p[1]));
      let pick = null, mistakes = 0, done = 0;
      el.innerHTML = `${promptMarkup(a.prompt)}<div class="match" dir="ltr">${L.map((x, i) => `<button class="opt" data-side="l" data-v="${esc(x)}" style="grid-column:1;grid-row:${i + 1}" dir="ltr">${esc(x)}</button>`).join("")}${Rr.map((x, i) => `<button class="opt" data-side="r" data-v="${esc(x)}" style="grid-column:2;grid-row:${i + 1}" dir="ltr">${esc(x)}</button>`).join("")}</div>`;
      ft(ctx);
      $$(".opt", el).forEach((b) => b.onclick = () => {
        if (b.classList.contains("done")) return;
        if (!/\p{Extended_Pictographic}/u.test(b.dataset.v)) speak(b.dataset.v.replace(/^(\w)\w$/, "$1"));
        if (!pick || pick.dataset.side === b.dataset.side) { if (pick) pick.classList.remove("sel"); pick = b; b.classList.add("sel"); return; }
        const [l, r] = pick.dataset.side === "l" ? [pick, b] : [b, pick];
        const good = a.pairs.some((p) => p[0] === l.dataset.v && p[1] === r.dataset.v);
        if (good) { l.classList.add("done"); r.classList.add("done"); l.classList.remove("sel"); r.classList.remove("sel"); done++; }
        else { mistakes++; [l, r].forEach((x) => { x.classList.remove("sel"); x.classList.add("shake"); setTimeout(() => x.classList.remove("shake"), 400); }); }
        pick = null;
        if (done === a.pairs.length) ctx.result({ ok: mistakes === 0, answer: mistakes ? a.pairs.map((p) => `${p[0]} → ${p[1]}`).join(", ") : "" });
      });
      function ft(c) { $("#ft").innerHTML = `<p class="small muted" style="text-align:center;margin:0">${t("tapPair")}</p>`; }
      if (kid && a.say) speak(a.say);
    },
    missing(a, el, ctx) {
      let sel = null;
      const draw = () => a.word.split("").map((ch, i) => i === a.hide ? `<span class="slot blank">${sel || "_"}</span>` : `<span class="slot">${ch}</span>`).join("");
      el.innerHTML = `${promptMarkup(a.prompt)}${a.emoji ? `<div class="bigemoji" dir="ltr">${a.emoji}</div>` : ""}${speakBtns(a.say)}
        <div class="wordview ${a.word.length > 6 ? "long" : ""}" id="wv" dir="ltr">${draw()}</div><div class="tiles" dir="ltr">${a.choices.map((c) => `<button class="tile" data-c="${c}" dir="ltr">${c}</button>`).join("")}</div>`;
      $$(".tile", el).forEach((b) => b.onclick = () => { sel = b.dataset.c; $("#wv", el).innerHTML = draw(); $$(".tile", el).forEach((x) => x.classList.toggle("sel", x === b)); ctx.enable(); });
      ctx.ready(() => ({ ok: sel === a.word[a.hide], answer: a.word }));
      speak(a.say);
    },
    build(a, el, ctx) {
      const letters = shuffle(a.word.split("")).map((c, i) => ({ c, i }));
      let built = [];
      el.innerHTML = `${promptMarkup(a.prompt)}${a.emoji ? `<div class="bigemoji" dir="ltr">${a.emoji}</div>` : ""}${speakBtns(a.say || a.word)}
        <div class="wordview ${a.word.length > 6 ? "long" : ""}" id="wv" dir="ltr"></div><div class="tiles" id="tl" dir="ltr"></div>`;
      const draw = () => {
        $("#wv", el).innerHTML = a.word.split("").map((_, k) => built[k] ? `<button class="slot tile" data-k="${k}">${built[k].c}</button>` : `<span class="slot blank"></span>`).join("");
        $("#tl", el).innerHTML = letters.map((t) => `<button class="tile ${built.includes(t) ? "used" : ""}" data-i="${t.i}">${t.c}</button>`).join("");
        $$("#tl .tile", el).forEach((b) => b.onclick = () => { const t = letters.find((x) => x.i === +b.dataset.i); if (!built.includes(t) && built.length < a.word.length) { built.push(t); draw(); } });
        $$("#wv .tile", el).forEach((b) => b.onclick = () => { built.splice(+b.dataset.k, 1); draw(); });
        ctx.enable(built.length === a.word.length);
      };
      ctx.ready(() => ({ ok: built.map((t) => t.c).join("").toLowerCase() === a.word.toLowerCase(), answer: a.word }));
      draw(); speak(a.say || a.word);
    },
    order(a, el, ctx) {
      const words = shuffle(a.words).map((w, i) => ({ w, i }));
      let line = [];
      el.innerHTML = `${promptMarkup(a.prompt)}${a.say ? speakBtns(a.say) : ""}<div class="answer-line" id="al" dir="ltr"></div><div class="tiles" id="tl" dir="ltr"></div>`;
      const draw = () => {
        $("#al", el).innerHTML = line.map((t, k) => `<button class="tile word" data-k="${k}">${esc(t.w)}</button>`).join("");
        $("#tl", el).innerHTML = words.map((t) => `<button class="tile word ${line.includes(t) ? "used" : ""}" data-i="${t.i}">${esc(t.w)}</button>`).join("");
        $$("#tl .tile", el).forEach((b) => b.onclick = () => { const t = words.find((x) => x.i === +b.dataset.i); if (!line.includes(t)) { line.push(t); draw(); } });
        $$("#al .tile", el).forEach((b) => b.onclick = () => { line.splice(+b.dataset.k, 1); draw(); });
        ctx.enable(line.length === words.length);
      };
      ctx.ready(() => ({ ok: line.map((t) => t.w).join(" ") === a.words.join(" "), answer: a.words.join(" ") }));
      draw();
    },
    dictation(a, el, ctx) {
      el.innerHTML = `${promptMarkup(a.prompt)}${speakBtns(a.say, true)}
        <input class="typed" id="ty" dir="ltr" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="${t("typeHere")}" aria-label="Your answer">
        <p class="small muted" style="text-align:center">${t("spellOff")}</p>`;
      const inp = $("#ty", el);
      inp.oninput = () => ctx.enable(!!inp.value.trim());
      inp.onkeydown = (e) => { if (e.key === "Enter" && inp.value.trim()) $("#chk").click(); };
      ctx.ready(() => ({ ok: norm(inp.value) === norm(a.answer), answer: a.answer }));
      speak(a.say);
    },
    story(a, el, ctx) {
      let pg = 0;
      const draw = () => {
        const page = a.pages[pg];
        const words = page.text.split(" ");
        el.innerHTML = `<div class="muted small">${t("story")} · <span dir="ltr">${esc(a.title)}</span></div><div class="story"><div class="emoji">${page.emoji}</div>
          <div class="text" id="tx" dir="ltr">${words.map((w, i) => `<span data-w="${i}">${esc(w)}</span>`).join(" ")}</div>${helperLine(page.text)}</div>
          <div class="dots">${a.pages.map((_, i) => `<i class="${i === pg ? "on" : ""}"></i>`).join("")}</div>
          <div class="speakrow"><button class="speak" id="read">🔊 ${t("readToMe")}</button></div>`;
        const starts = []; let pos = 0; words.forEach((w) => { starts.push(pos); pos += w.length + 1; });
        const read = () => speak(page.text, { rate: 0.8,
          onboundary: (e) => { let k = starts.findIndex((s, i) => e.charIndex >= s && (i === starts.length - 1 || e.charIndex < starts[i + 1])); $$("#tx span", el).forEach((s) => s.classList.toggle("hl", +s.dataset.w === k)); },
          onend: () => $$("#tx span", el).forEach((s) => s.classList.remove("hl")) });
        $("#read", el).onclick = read; read();
        const last = pg === a.pages.length - 1;
        ctx.cont(last ? t("continue") : t("nextPage"), last ? undefined : () => { pg++; draw(); });
      };
      draw();
    }
  };

  // ---------- progress & review ----------
  function progress() {
    const p = active(), pr = prog(p.id);
    const acc = Object.values(pr.skills).reduce((a, s) => [a[0] + s.c, a[1] + s.t], [0, 0]);
    render(`${topbar()}<div class="screen"><h2>${t("myProgress")}</h2>
      <div class="statgrid"><div class="stat"><b>⭐ ${totalStars(pr)}</b><span>${t("stars")}</span></div><div class="stat"><b>${doneCount(pr)}</b><span>${t("lessonsDone")}</span></div><div class="stat"><b>🔥 ${pr.streak.count}</b><span>${t("dayStreak")}</span></div>
      <div class="stat"><b>${pr.words.length}</b><span>${t("wordsLearned")}</span></div><div class="stat"><b>${Math.round(pr.seconds / 60)}</b><span>${t("minutes")}</span></div><div class="stat"><b>${acc[1] ? Math.round((acc[0] / acc[1]) * 100) + "%" : "–"}</b><span>${t("accuracy")}</span></div></div>
      <div class="card"><h3>${t("skills")}</h3>${Object.keys(pr.skills).length ? Object.entries(pr.skills).map(([k, s]) => { const v = Math.round((s.c / s.t) * 100); return `<div class="skillbar"><span class="l">${esc(k)}</span><div class="bar"><i style="width:${v}%"></i></div><span>${v}%</span></div>`; }).join("<div style='height:8px'></div>") : `<p class="muted small">${t("finishSkill")}</p>`}</div>
      <h3>${t("badges")}</h3><div class="badges">${BADGES.map((b) => `<div class="badge ${pr.badges.includes(b.id) ? "" : "off"}"><span class="e">${b.e}</span>${t(b.key || badgeStringKey(b.id))}</div>`).join("")}</div>
      ${pr.log.length ? `<div class="card"><h3>${t("recentLessons")}</h3>${pr.log.slice(0, 6).map((l) => `<div class="small" style="display:flex;justify-content:space-between;padding:4px 0"><span>${esc(l.title)}</span><b>${l.pct}%</b></div>`).join("")}</div>` : ""}
    </div>${tabbar("progress")}`);
  }

  function review() {
    const pr = prog(active().id);
    render(`${topbar()}<div class="screen"><h2>${t("reviewTitle")}</h2>
      <p class="muted">${t("reviewDesc")}</p>
      ${pr.review.length ? `<div class="chips">${pr.review.map((w) => `<button class="chip" data-say="${esc(w)}" style="border:0">🔊 <span dir="ltr">${esc(w)}</span>${gl(w) ? ` — <span dir="auto">${esc(gl(w))}</span>` : ""}</button>`).join("")}</div>
        <button class="btn" data-go="#/lesson/review">${pr.review.length > 1 ? t("practisePlural", { n: pr.review.length }) : t("practise", { n: pr.review.length })}</button>`
        : `<div class="card center" style="display:flex;flex-direction:column"><div style="font-size:3rem">🌟</div><p>${t("emptyReview")}</p></div>`}
    </div>${tabbar("review")}`);
  }

  // ---------- parent area & settings ----------
  function gate() {
    if (+sessionStorage.getItem("gate") > Date.now() - 5 * 60e3) return go("#/parent");
    const a = 3 + Math.floor(Math.random() * 7), b = 4 + Math.floor(Math.random() * 6);
    render(`${banner()}<div class="screen center"><button class="back" data-go="#/profiles">${t("back")}</button><div style="font-size:3.5rem">🔒</div>
      <h2>${t("grownups")}</h2><p class="muted">${t("gatePrompt")}</p>
      <div class="prompt" style="font-size:1.6rem">What is ${a} × ${b}?</div>
      <input class="typed" id="ans" inputmode="numeric" aria-label="Answer" style="max-width:200px">
      <button class="btn" id="go">${t("continue")}</button></div>`);
    $("#go").onclick = () => {
      if (+$("#ans").value === a * b) { sessionStorage.setItem("gate", Date.now()); go("#/parent"); }
      else { toast(t("notRight")); gate(); }
    };
  }

  function exportData() {
    const blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
    const u = URL.createObjectURL(blob), l = document.createElement("a");
    l.href = u; l.download = "lexora-my-data.json"; l.click(); setTimeout(() => URL.revokeObjectURL(u), 1000);
  }
  function deleteAll() {
    if (!confirm(t("deleteConfirm"))) return;
    localStorage.removeItem(KEY); sessionStorage.clear(); S = fresh(); toast(t("allDeleted")); go("#/welcome");
  }

  function parentArea() {
    if (!S.parent) return go("#/settings");
    if (!(+sessionStorage.getItem("gate") > Date.now() - 5 * 60e3)) return go("#/gate");
    const kids = S.profiles.filter((p) => p.type === "child");
    render(`${banner()}<div class="screen"><button class="back" data-go="#/profiles">‹ ${t("profiles")}</button>
      <h2>${t("parentArea")}</h2><p class="muted">${t("yourProgress", { name: esc(S.parent.name) })}</p>
      ${kids.length ? kids.map((k) => { const pr = prog(k.id), last = pr.log[0];
        const acc = Object.values(pr.skills).reduce((a, s) => [a[0] + s.c, a[1] + s.t], [0, 0]);
        return `<div class="card"><div style="display:flex;gap:12px;align-items:center"><span class="avatar lg" style="width:56px;height:56px;font-size:2rem">${k.avatar}</span><div style="flex:1"><b>${esc(k.name)}</b><div class="small muted">${t("age")} ${k.ageBand} · ${t("lastActive", { date: last ? new Date(last.at).toLocaleDateString() : t("never") })}</div></div></div>
          <div class="field parent-language"><label>${t("language")}</label><select data-kid-lang="${k.id}">${window.LEXORA_I18N.langs.map((l) => `<option value="${l.code}" ${l.code === (k.lang || "en") ? "selected" : ""}>${l.name}</option>`).join("")}</select></div>
          <div class="statgrid" style="margin-top:12px"><div class="stat"><b>${doneCount(pr)}</b><span>${t("lessonsDone")}</span></div><div class="stat"><b>${Math.round(pr.seconds / 60)}</b><span>${t("minutes")}</span></div><div class="stat"><b>${acc[1] ? Math.round((acc[0] / acc[1]) * 100) + "%" : "–"}</b><span>${t("accuracy")}</span></div></div>
          ${pr.review.length ? `<p class="small" style="margin-top:10px">${t("needsPractice")} <b>${pr.review.map(esc).join(", ")}</b></p>` : ""}
          ${pr.log.length ? `<p class="small muted" style="margin:8px 0 0">${t("recent")} ${pr.log.slice(0, 3).map((l) => `${esc(l.title)} (${l.pct}%)`).join(" · ")}</p>` : ""}
          <button class="btn ghost small" data-del="${k.id}" style="color:var(--bad);margin-top:6px">${t("deleteProfile", { name: esc(k.name) })}</button></div>`; }).join("") : `<div class="card">${t("noChildProfiles")}</div>`}
      <button class="btn" data-go="#/addchild">${t("addAnotherChild")}</button>
      <div class="card small"><b>${t("privacyConsent")}</b><p class="muted" style="margin:.4em 0">${t("consentGiven", { date: new Date(S.parent.consentAt).toLocaleString(), version: S.parent.policyVersion })}</p>
        <button class="btn secondary" id="exp">${t("downloadFamily")}</button><div style="height:8px"></div><button class="btn bad" id="del">${t("deleteFamily")}</button></div>
    </div>`);
    $$("[data-del]").forEach((b) => b.onclick = () => {
      const k = S.profiles.find((p) => p.id === b.dataset.del);
      if (confirm(t("deleteProfileConfirm", { name: k.name }))) { S.profiles = S.profiles.filter((p) => p !== k); delete S.progress[k.id]; if (S.activeId === k.id) S.activeId = null; save(); parentArea(); }
    });
    $$("[data-kid-lang]").forEach((select) => select.onchange = () => {
      const child = S.profiles.find((profile) => profile.id === select.dataset.kidLang);
      child.lang = select.value; save(); parentArea();
    });
    $("#exp").onclick = exportData; $("#del").onclick = deleteAll;
  }

  function settings() {
    const p = active() || S.profiles[0];
    render(`${banner()}<div class="screen"><button class="back" data-go="#/profiles">‹ ${t("profiles")}</button><h2>${t("settings")}</h2>
      <div class="card"><b>${esc(p ? p.name : "")}</b><div class="small muted">${esc(p && p.level || "")}</div></div>
      <div class="field"><label>${t("language")}</label>${langSelect("settings-lang", p && p.lang || S.lang || "en")}</div>
      <button class="btn secondary" data-go="#/placement">${t("retakeQuiz")}</button>
      <button class="btn secondary" id="exp">${t("downloadData")}</button><button class="btn bad" id="del">${t("deleteData")}</button></div>`);
    $("#settings-lang").onchange = () => {
      if (p) p.lang = $("#settings-lang").value; else S.lang = $("#settings-lang").value;
      save(); router();
    };
    $("#exp").onclick = exportData; $("#del").onclick = deleteAll;
  }

  // ---------- admin preview ----------
  function admin() {
    const types = {};
    Object.values(C.lessons).forEach((l) => l.activities.forEach((a) => { types[a.type] = (types[a.type] || 0) + 1; }));
    const done = S.profiles.reduce((n, p) => n + doneCount(prog(p.id)), 0);
    render(`<div class="topbar"><b>Lexora · Content admin</b><span class="spacer"></span><span class="pill">Preview</span></div><div class="screen">
      <button class="back" data-go="${S.profiles.length ? "#/profiles" : "#/welcome"}">‹ Back to app</button>
      <p class="small muted">In the full product, editors create, edit, review and publish these lessons on a web dashboard without a developer. This preview shows the content structure and lets you play any lesson without saving progress.</p>
      <div class="statgrid"><div class="stat"><b>${C.sections.length}</b><span>sections</span></div><div class="stat"><b>${Object.keys(C.lessons).length}</b><span>lessons</span></div><div class="stat"><b>${S.profiles.length}</b><span>profiles (device)</span></div></div>
      ${C.sections.map((s) => `<div class="card" style="padding:12px"><h3>${s.emoji} ${s.title}</h3><table class="admin"><tr><th>Unit / lesson</th><th>Audience</th><th>Skill</th><th>Acts</th><th>Status</th><th></th></tr>
        ${s.units.map((u) => u.soon ? `<tr><td>${u.title}</td><td>${u.audience === "child" ? "Kids" : u.audience === "learner" ? "13+" : "All"}</td><td></td><td>0</td><td><span class="tag soon">Draft</span></td><td></td></tr>` : u.lessons.map((lid) => { const L = C.lessons[lid];
          return `<tr><td>${u.title}<br><b>${esc(L.title)}</b></td><td>${u.audience === "child" ? "Kids" : u.audience === "learner" ? "13+" : "All"}</td><td>${L.skill}</td><td>${L.activities.length}</td><td><span class="tag">Published</span></td><td><button class="btn secondary" style="padding:6px 10px;font-size:.8rem" data-go="#/preview/${lid}">Play</button></td></tr>`; }).join("")).join("")}</table></div>`).join("")}
      <div class="card"><h3>Activity types used</h3><p class="small">${Object.entries(types).map(([t, n]) => `<b>${t}</b> ×${n}`).join(" · ")}</p></div>
      <p class="small muted">Lessons completed on this device: ${done}.</p></div>`);
  }

  // ---------- router ----------
  const needsProfile = ["home", "section", "lesson", "progress", "review", "placement"];
  function router() {
    stopAudio();
    const [r, arg] = location.hash.replace(/^#\/?/, "").split("/");
    if (needsProfile.includes(r) && !active()) return go(S.profiles.length ? "#/profiles" : "#/welcome");
    if ((r === "" || r === "welcome") && S.profiles.length) return go("#/profiles");
    if (r === "addchild" && !S.parent) return go("#/welcome");
    if (r === "addchild" && !(+sessionStorage.getItem("gate") > Date.now() - 5 * 60e3)) return go("#/gate");
    ({ welcome, age: ageGate, learner: learnerSignup, parent: S.parent ? parentArea : parentSignup, addchild: addChild, profiles: S.profiles.length ? profiles : welcome,
       placement, home, section: () => section(arg), lesson: () => lesson(arg), preview: () => lesson(arg, true), progress, review, gate, settings, admin }[r] || welcome)();
  }
  window.addEventListener("hashchange", router);
  router();
})();
