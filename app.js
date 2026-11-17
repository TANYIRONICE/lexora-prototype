(() => {
  "use strict";
  const C = window.LEXORA_CONTENT;
  const app = document.getElementById("app");
  const KEY = "lexora_proto_v1";
  const SCORED = ["choice", "truefalse", "match", "missing", "build", "order", "dictation"];
  const AVATARS = ["🦁", "🐘", "🦊", "🐼", "🐸", "🦋", "🐵", "🐯"];
  const BADGES = [
    { id: "first", e: "🌱", t: "First lesson", test: (p) => doneCount(p) >= 1 },
    { id: "three", e: "🚀", t: "3 lessons", test: (p) => doneCount(p) >= 3 },
    { id: "perfect", e: "💯", t: "Perfect score", test: (p) => Object.values(p.lessons).some((l) => l.best === 100) },
    { id: "speller", e: "🐝", t: "Spelling star", test: (p) => p.lessons.s1 && p.lessons.s2 },
    { id: "reader", e: "📖", t: "Story time", test: (p) => !!p.lessons.k2 },
    { id: "streak3", e: "🔥", t: "3-day streak", test: (p) => p.streak.count >= 3 }
  ];

  // ---------- state ----------
  let S = load();
  function fresh() { return { parent: null, profiles: [], activeId: null, progress: {} }; }
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || fresh(); } catch { return fresh(); } }
  function save() { localStorage.setItem(KEY, JSON.stringify(S)); }
  const active = () => S.profiles.find((p) => p.id === S.activeId);
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
  const hasTTS = "speechSynthesis" in window;
  function pickVoice() {
    const vs = speechSynthesis.getVoices();
    voice = vs.find((v) => /en[-_]GB/i.test(v.lang)) || vs.find((v) => /^en/i.test(v.lang)) || null;
  }
  if (hasTTS) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text, opts = {}) {
    if (!hasTTS) { toast("Audio isn't supported in this browser"); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    if (voice) u.voice = voice;
    u.lang = voice ? voice.lang : "en-GB";
    u.rate = opts.rate || 0.9;
    if (opts.onboundary) u.onboundary = opts.onboundary;
    if (opts.onend) u.onend = opts.onend;
    speechSynthesis.speak(u);
  }
  const stopAudio = () => hasTTS && speechSynthesis.cancel();
  const speakBtns = (text, big) => `<div class="speakrow"><button class="speak ${big ? "big" : ""}" data-say="${esc(text)}" aria-label="Play audio">🔊${big ? "" : " Listen"}</button><button class="speak slow" data-say="${esc(text)}" data-rate="0.55" aria-label="Play slowly">🐢 Slow</button></div>`;

  app.addEventListener("click", (e) => {
    const s = e.target.closest("[data-say]");
    if (s) { speak(s.dataset.say, { rate: +s.dataset.rate || 0.9 }); return; }
    const g = e.target.closest("[data-go]");
    if (g) go(g.dataset.go);
  });

  // ---------- shell ----------
  const banner = `<div class="banner">Prototype · demo data is saved only on this device</div>`;
  function topbar() {
    const p = active(); const pr = prog(p.id);
    return `<div class="topbar"><button class="who" data-go="#/profiles"><span class="avatar">${p.avatar}</span>${esc(p.name)}</button>
      <span class="spacer"></span><span class="pill">⭐ ${totalStars(pr)}</span><span class="pill">🔥 ${pr.streak.count}</span></div>`;
  }
  function tabbar(on) {
    const tabs = [["home", "🏠", "Learn"], ["progress", "📊", "Progress"], ["review", "🔁", "Review"], ["profiles", "👥", "Profiles"]];
    return `<nav class="tabbar">${tabs.map(([r, e, t]) => `<a href="#/${r}" class="${on === r ? "on" : ""}"><span>${e}</span>${t}</a>`).join("")}</nav>`;
  }
  const render = (html) => { app.innerHTML = html; window.scrollTo(0, 0); };

  // ---------- onboarding ----------
  function welcome() {
    render(`${banner}<div class="screen center">
      <div style="font-size:3.4rem">📚🌍✨</div>
      <div class="logo"><img src="icon.svg" alt="">Lexora</div>
      <div class="slogan">“Words Open Worlds.”</div>
      <p class="muted">English for kids, teens and adults – lessons, spelling and listening practice.</p>
      <div style="width:100%;display:flex;flex-direction:column;gap:12px;margin-top:10px">
        <button class="btn" data-go="#/parent">I'm a parent or guardian</button>
        <button class="btn secondary" data-go="#/age">I'm a learner (13 or older)</button>
      </div>
      <p class="small muted" style="margin-top:18px">Children under 13 use Lexora through a parent's account.</p>
      <a class="small" href="#/admin">Content admin (preview)</a>
    </div>`);
  }

  function ageGate() {
    const y = new Date().getFullYear();
    let opts = `<option value="">Select year</option>`;
    for (let i = y - 3; i >= y - 90; i--) opts += `<option>${i}</option>`;
    render(`${banner}<div class="screen"><button class="back" data-go="#/welcome">‹ Back</button>
      <h2>What year were you born?</h2><p class="muted">We ask so we can give you the right experience.</p>
      <div class="field"><select id="yr" aria-label="Birth year">${opts}</select></div>
      <button class="btn" id="next" disabled>Continue</button></div>`);
    $("#yr").onchange = () => { $("#next").disabled = !$("#yr").value; };
    $("#next").onclick = () => {
      const age = y - +$("#yr").value;
      if (age < 13) {
        render(`${banner}<div class="screen center"><div style="font-size:4rem">👨‍👩‍👧</div><h2>Ask a parent to set up Lexora</h2>
          <p class="muted">Learners under 13 use Lexora through a parent or guardian's account. It only takes a minute!</p>
          <button class="btn" data-go="#/parent">I'm the parent – set up now</button><button class="btn ghost" data-go="#/welcome">Back</button></div>`);
      } else go("#/learner");
    };
  }

  function learnerSignup() {
    let mode = "start";
    render(`${banner}<div class="screen"><button class="back" data-go="#/age">‹ Back</button>
      <h2>Create your account</h2>
      <div class="field"><label for="nm">Your first name or nickname</label><input id="nm" maxlength="20" autocomplete="nickname"></div>
      <div class="field"><label for="em">Email</label><input id="em" type="email" placeholder="you@example.com" autocomplete="email"></div>
      <div class="field"><label for="pw">Password</label><input id="pw" type="password" placeholder="At least 8 characters" autocomplete="new-password"></div>
      <div class="field"><label>Where do you want to start?</label>
        <div class="seg"><button class="on" data-m="start">Beginner (A1)</button><button data-m="quiz">Take a short level quiz</button></div></div>
      <label class="check"><input type="checkbox" id="ok"> I agree to the Terms of Use and Privacy Policy.</label>
      <button class="btn" id="go" disabled>Create account</button>
      <p class="small muted">Prototype: account details stay on this device; nothing is sent to a server.</p></div>`);
    const upd = () => { $("#go").disabled = !($("#nm").value.trim() && $("#ok").checked); };
    $("#nm").oninput = upd; $("#ok").onchange = upd;
    $$(".seg button").forEach((b) => b.onclick = () => { mode = b.dataset.m; $$(".seg button").forEach((x) => x.classList.toggle("on", x === b)); });
    $("#go").onclick = () => {
      const p = { id: uid(), name: $("#nm").value.trim(), avatar: "🧑🏾", type: "learner", level: "Beginner A1" };
      S.profiles.push(p); S.activeId = p.id; save();
      go(mode === "quiz" ? "#/placement" : "#/home");
    };
  }

  function parentSignup() {
    render(`${banner}<div class="screen"><button class="back" data-go="#/welcome">‹ Back</button>
      <h2>Parent account</h2><p class="muted">You'll manage your children's profiles and see their progress.</p>
      <div class="field"><label for="nm">Your first name</label><input id="nm" maxlength="20" autocomplete="given-name"></div>
      <div class="field"><label for="em">Email or phone number</label><input id="em" placeholder="you@example.com or 6XX XXX XXX"></div>
      <div class="field"><label for="pw">Password</label><input id="pw" type="password" placeholder="At least 8 characters" autocomplete="new-password"></div>
      <div class="card small"><b>Parental consent</b><p class="muted" style="margin:.4em 0 .6em">For each child we store only a nickname, an avatar, an age band and learning progress. No ads, no chat, no contact with other users. You can download or delete this data at any time.</p>
      <label class="check"><input type="checkbox" id="ok"> I am the parent or legal guardian, I agree to the Privacy Policy, and I consent to Lexora storing this information about my child.</label></div>
      <button class="btn" id="go" disabled>Continue</button></div>`);
    const upd = () => { $("#go").disabled = !($("#nm").value.trim() && $("#ok").checked); };
    $("#nm").oninput = upd; $("#ok").onchange = upd;
    $("#go").onclick = () => {
      S.parent = { name: $("#nm").value.trim(), contact: $("#em").value.trim(), consentAt: new Date().toISOString(), policyVersion: "0.1-demo" };
      const me = { id: uid(), name: S.parent.name, avatar: "🧑🏾‍🦱", type: "learner", isParent: true, level: "Beginner A1" };
      S.profiles.push(me); save();
      sessionStorage.setItem("gate", Date.now());
      go("#/addchild");
    };
  }

  function addChild() {
    let av = AVATARS[0], band = "5–7";
    render(`${banner}<div class="screen"><button class="back" data-go="#/profiles">‹ Back</button>
      <h2>Add a child</h2><p class="muted">We don't ask for your child's real name, photo or birthday.</p>
      <div class="field"><label for="nm">Nickname</label><input id="nm" maxlength="14" placeholder="e.g. Ama"></div>
      <div class="field"><label>Choose an avatar</label><div class="avatars">${AVATARS.map((a, i) => `<button data-a="${a}" class="${i ? "" : "on"}" aria-label="avatar ${a}">${a}</button>`).join("")}</div></div>
      <div class="field"><label>Age</label><div class="seg">${["5–7", "8–10", "11–12"].map((b, i) => `<button data-b="${b}" class="${i ? "" : "on"}">${b}</button>`).join("")}</div></div>
      <button class="btn" id="go" disabled>Add child</button></div>`);
    $("#nm").oninput = () => { $("#go").disabled = !$("#nm").value.trim(); };
    $$("[data-a]").forEach((b) => b.onclick = () => { av = b.dataset.a; $$("[data-a]").forEach((x) => x.classList.toggle("on", x === b)); });
    $$("[data-b]").forEach((b) => b.onclick = () => { band = b.dataset.b; $$("[data-b]").forEach((x) => x.classList.toggle("on", x === b)); });
    $("#go").onclick = () => {
      const p = { id: uid(), name: $("#nm").value.trim(), avatar: av, type: "child", ageBand: band };
      S.profiles.push(p); save(); toast(`${p.name} added`); go("#/profiles");
    };
  }

  function profiles() {
    render(`${banner}<div class="screen center"><div class="logo" style="font-size:1.4rem"><img src="icon.svg" alt="" style="width:34px;height:34px">Lexora</div>
      <h2>Who's learning today?</h2>
      <div class="profiles">${S.profiles.map((p) => `<button class="profile" data-pid="${p.id}"><span class="avatar lg">${p.avatar}</span>${esc(p.name)}<span class="small muted">${p.type === "child" ? "Kids · " + p.ageBand : p.isParent ? "Parent" : "Learner"}</span></button>`).join("")}</div>
      ${S.parent ? `<button class="btn secondary" data-go="#/gate">🔒 Parent area</button>` : `<button class="btn secondary" data-go="#/settings">⚙️ Settings</button>`}
    </div>`);
    $$("[data-pid]").forEach((b) => b.onclick = () => { S.activeId = b.dataset.pid; save(); go("#/home"); });
  }

  function placement() {
    const qs = C.placement; let i = 0, score = 0;
    const step = () => {
      if (i >= qs.length) {
        const lvl = score <= 1 ? "Beginner A1" : score <= 3 ? "Elementary A2" : "Intermediate B1";
        active().level = lvl; save();
        return render(`${banner}<div class="screen center"><div style="font-size:4rem">🎯</div><h2>Your level: ${lvl}</h2>
          <p class="muted">You got ${score} of ${qs.length} right.</p>
          <p class="small muted">In this prototype only Beginner A1 lessons exist, so you'll start there. The full app will place you in the right unit.</p>
          <button class="btn" data-go="#/home">Start learning</button></div>`);
      }
      const q = qs[i];
      render(`${banner}<div class="player-top"><div class="bar"><i style="width:${(i / qs.length) * 100}%"></i></div></div>
        <div class="act"><div class="muted small">Level quiz · question ${i + 1} of ${qs.length}</div><div class="prompt">${esc(q.prompt)}</div>
        <div class="options">${q.options.map((o, k) => `<button class="opt" data-k="${k}">${esc(o)}</button>`).join("")}</div></div>`);
      $$(".opt").forEach((b) => b.onclick = () => { if (+b.dataset.k === q.answer) score++; i++; step(); });
    };
    step();
  }

  // ---------- learning ----------
  const sectionsFor = (p) => C.sections.filter((s) => s.audience === "all" || (p.type === "child" ? s.audience === "child" : s.audience === "learner"));
  const lessonIds = (sec) => sec.units.flatMap((u) => u.lessons);
  const sectionOf = (lid) => C.sections.find((s) => lessonIds(s).includes(lid));
  function unlocked(lid, pr) {
    const ids = lessonIds(sectionOf(lid)); const i = ids.indexOf(lid);
    return i <= 0 || !!pr.lessons[ids[i - 1]];
  }
  function nextLesson(p, pr) {
    for (const s of sectionsFor(p)) for (const id of lessonIds(s)) if (!pr.lessons[id] && unlocked(id, pr)) return id;
    return null;
  }

  function home() {
    const p = active(), pr = prog(p.id), nxt = nextLesson(p, pr);
    const kid = p.type === "child";
    render(`${topbar()}<div class="screen">
      <h2>Hi ${esc(p.name)}! ${kid ? "👋" : ""}</h2>
      <p class="muted" style="margin-top:-6px">${kid ? "What shall we learn today?" : `Level: ${esc(p.level || "Beginner A1")}`}</p>
      ${nxt ? `<button class="lesson-row" data-go="#/lesson/${nxt}" style="border:2px solid var(--accent)"><span class="em">${C.lessons[nxt].emoji}</span><span style="flex:1"><span class="small muted">Continue</span><br><span class="t">${esc(C.lessons[nxt].title)}</span></span><span style="font-size:1.6rem">▶️</span></button>` : `<div class="card">🎉 You've finished every lesson in this prototype!</div>`}
      ${sectionsFor(p).map((s) => `<button class="section-card" style="background:${s.color}" data-go="#/section/${s.id}"><span class="em">${s.emoji}</span><span><h3>${s.title}</h3><p>${s.desc}</p></span></button>`).join("")}
      ${kid ? "" : `<button class="section-card locked" onclick="void 0" data-locked><span class="em">🤖</span><span><h3>AI English Tutor</h3><p>Ask questions, get your writing corrected. Coming soon.</p></span></button>`}
    </div>${tabbar("home")}`);
    const lk = $("[data-locked]"); if (lk) lk.onclick = () => toast("The AI tutor is planned for a later phase");
    if (kid) speak(`Hi ${p.name}! What shall we learn today?`);
  }

  function section(id) {
    const s = C.sections.find((x) => x.id === id); if (!s) return go("#/home");
    const pr = prog(active().id);
    render(`${topbar()}<div class="screen"><button class="back" data-go="#/home">‹ Home</button>
      <div class="section-card" style="background:${s.color}"><span class="em">${s.emoji}</span><span><h3>${s.title}</h3><p>${s.desc}</p></span></div>
      ${s.units.map((u) => `<div class="unit"><h3>${u.title}</h3>${u.soon ? `<div class="lesson-row locked"><span class="em">🔒</span><span><span class="t">Coming soon</span><br><span class="small muted">More lessons will be added from the admin dashboard</span></span></div>` :
        u.lessons.map((lid) => { const L = C.lessons[lid], done = pr.lessons[lid], open = unlocked(lid, pr);
          return `<button class="lesson-row ${open ? "" : "locked"}" data-lid="${lid}" data-open="${open ? 1 : ""}"><span class="em">${open ? L.emoji : "🔒"}</span><span style="flex:1"><span class="t">${esc(L.title)}</span><br><span class="small muted">${L.skill} · ${L.activities.length} activities</span></span>${done ? starsHtml(done.stars) : open ? "▶️" : ""}</button>`; }).join("")}</div>`).join("")}
    </div>${tabbar("home")}`);
    $$("[data-lid]").forEach((b) => b.onclick = () => b.dataset.open ? go(`#/lesson/${b.dataset.lid}`) : toast("Finish the lesson before to unlock this one"));
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
    const kid = preview ? sectionOf(lid).id === "kids" : p.type === "child";
    const st = { queue: L.activities.map((_, i) => i), pos: 0, first: {}, retried: new Set(), wrongWords: new Set(), rightWords: new Set(), t0: Date.now() };

    const leave = () => { if (confirm("Leave this lesson? Your answers in this lesson won't be saved.")) { stopAudio(); go(preview ? "#/admin" : `#/section/${lid === "review" ? "spelling" : sectionOf(lid).id}`); } };

    function show() {
      const idx = st.queue[st.pos], a = L.activities[idx];
      render(`<div class="player-top"><button class="x" aria-label="Close lesson">✕</button><div class="bar"><i style="width:${(st.pos / st.queue.length) * 100}%"></i></div>${preview ? `<span class="pill">Preview</span>` : ""}</div>
        <div class="act ${kid ? "kid" : ""}" id="act"></div><div class="footer" id="ft"></div>`);
      $(".x").onclick = leave;
      const act = $("#act"), ft = $("#ft");
      const ctx = {
        ready(fn) { ft.innerHTML = `<button class="btn" id="chk" disabled>Check</button>`; ctx.check = fn; $("#chk", ft).onclick = () => ctx.result(ctx.check()); },
        enable(on = true) { const b = $("#chk", ft); if (b) b.disabled = !on; },
        cont(label = "Continue", fn) { ft.className = "footer"; ft.innerHTML = `<button class="btn" id="cnt">${label}</button>`; $("#cnt", ft).onclick = fn || next; },
        result({ ok, answer, explain }) {
          $$("button.opt, button.tile, input", act).forEach((b) => b.disabled = true);
          if (!(idx in st.first)) st.first[idx] = ok;
          const w = a.word === true ? a.answer : a.word;
          if (w) (ok ? st.rightWords : st.wrongWords).add(w);
          if (!ok && !st.retried.has(idx)) { st.queue.push(idx); st.retried.add(idx); }
          const praise = ["Great job!", "Excellent!", "Well done!", "Brilliant!"][Math.floor(Math.random() * 4)];
          ft.className = `footer ${ok ? "good" : "wrong"}`;
          ft.innerHTML = `<div class="fb">${ok ? "✓ " + praise : "✗ Not quite"}${!ok && answer ? `<small>Correct answer: <b>${esc(answer)}</b></small>` : ""}${explain && !ok ? `<small>${esc(explain)}</small>` : ""}${!ok ? `<small class="muted">We'll try this one again at the end.</small>` : ""}</div><button class="btn ${ok ? "ok" : "bad"}" id="cnt">Continue</button>`;
          $("#cnt", ft).onclick = next;
          if (kid) speak(ok ? praise : "Not quite. Let's try again later.");
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
        <h1>Lesson complete!</h1>${starsHtml(stars)}
        <div class="statgrid" style="width:100%"><div class="stat"><b>${pct}%</b><span>first-try score</span></div><div class="stat"><b>${L.words.length}</b><span>words</span></div><div class="stat"><b>${Math.max(1, Math.round(secs / 60))} min</b><span>time</span></div></div>
        ${newBadges.length ? `<div class="card" style="width:100%"><b>New badge${newBadges.length > 1 ? "s" : ""}!</b><div class="badges" style="margin-top:10px">${newBadges.map((b) => `<div class="badge"><span class="e">${b.e}</span>${b.t}</div>`).join("")}</div></div>` : ""}
        ${st.wrongWords.size && !preview ? `<p class="small muted">Words to practise were added to your Review list: ${[...st.wrongWords].map(esc).join(", ")}</p>` : ""}
        <div style="width:100%;display:flex;flex-direction:column;gap:10px"><button class="btn" data-go="${backTo}">Continue</button><button class="btn ghost" id="again">Try again</button></div></div>`);
      $("#again").onclick = () => lesson(lid, preview);
      speak(kid ? `Well done! You got ${stars} star${stars > 1 ? "s" : ""}!` : "Lesson complete!");
    }
    show();
  }

  // ---------- activity renderers ----------
  const R = {
    card(a, el, ctx) {
      el.innerHTML = `<div class="flash">${a.big ? `<div class="big">${a.big}</div>` : ""}${a.emoji ? `<div class="emoji">${a.emoji}</div>` : ""}
        ${a.title ? `<h2>${a.title}</h2>` : ""}${a.text ? `<div class="word">${a.text}</div>` : ""}${a.lines ? `<div class="lines">${a.lines.map((l) => `<div>${l}</div>`).join("")}</div>` : ""}
        ${a.say ? speakBtns(a.say) : ""}</div>`;
      if (a.say) speak(a.say);
      ctx.cont();
    },
    choice(a, el, ctx, kid) {
      let sel = null;
      el.innerHTML = `<div class="prompt">${esc(a.prompt)}</div>${a.listen ? speakBtns(a.say, true) : ""}${a.bigEmoji ? `<div class="bigemoji">${a.bigEmoji}</div>` : ""}
        ${a.word && !a.listen ? speakBtns(a.say) : ""}
        <div class="options ${a.pictures ? "pics" : ""}">${a.options.map((o, i) => `<button class="opt" data-i="${i}">${o.e ? `<span class="e">${o.e}</span>` : ""}${a.pictures && kid ? "" : esc(o.t)}</button>`).join("")}</div>`;
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
      el.innerHTML = `<div class="muted small">True or false?</div><div class="prompt">${esc(a.prompt)}</div>
        <div class="tf"><button class="opt" data-v="1">✓ True</button><button class="opt" data-v="0">✗ False</button></div>`;
      $$(".opt", el).forEach((b) => b.onclick = () => { sel = b.dataset.v === "1"; $$(".opt", el).forEach((x) => x.classList.toggle("sel", x === b)); ctx.enable(); });
      ctx.ready(() => {
        const ok = sel === a.answer; $$(".opt", el)[a.answer ? 0 : 1].classList.add("good"); if (!ok) $$(".opt", el)[sel ? 0 : 1].classList.add("wrong");
        return { ok, answer: a.answer ? "True" : "False", explain: a.explain };
      });
    },
    match(a, el, ctx, kid) {
      const L = shuffle(a.pairs.map((p) => p[0])), Rr = shuffle(a.pairs.map((p) => p[1]));
      let pick = null, mistakes = 0, done = 0;
      el.innerHTML = `<div class="prompt">${esc(a.prompt)}</div><div class="match">${L.map((x, i) => `<button class="opt" data-side="l" data-v="${esc(x)}" style="grid-column:1;grid-row:${i + 1}">${esc(x)}</button>`).join("")}${Rr.map((x, i) => `<button class="opt" data-side="r" data-v="${esc(x)}" style="grid-column:2;grid-row:${i + 1}">${esc(x)}</button>`).join("")}</div>`;
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
      function ft(c) { $("#ft").innerHTML = `<p class="small muted" style="text-align:center;margin:0">Tap one on each side to make a pair.</p>`; }
      if (kid && a.say) speak(a.say);
    },
    missing(a, el, ctx) {
      let sel = null;
      const draw = () => a.word.split("").map((ch, i) => i === a.hide ? `<span class="slot blank">${sel || "_"}</span>` : `<span class="slot">${ch}</span>`).join("");
      el.innerHTML = `<div class="prompt">${esc(a.prompt)}</div>${a.emoji ? `<div class="bigemoji">${a.emoji}</div>` : ""}${speakBtns(a.say)}
        <div class="wordview ${a.word.length > 6 ? "long" : ""}" id="wv">${draw()}</div><div class="tiles">${a.choices.map((c) => `<button class="tile" data-c="${c}">${c}</button>`).join("")}</div>`;
      $$(".tile", el).forEach((b) => b.onclick = () => { sel = b.dataset.c; $("#wv", el).innerHTML = draw(); $$(".tile", el).forEach((x) => x.classList.toggle("sel", x === b)); ctx.enable(); });
      ctx.ready(() => ({ ok: sel === a.word[a.hide], answer: a.word }));
      speak(a.say);
    },
    build(a, el, ctx) {
      const letters = shuffle(a.word.split("")).map((c, i) => ({ c, i }));
      let built = [];
      el.innerHTML = `<div class="prompt">${esc(a.prompt)}</div>${a.emoji ? `<div class="bigemoji">${a.emoji}</div>` : ""}${speakBtns(a.word)}
        <div class="wordview ${a.word.length > 6 ? "long" : ""}" id="wv"></div><div class="tiles" id="tl"></div>`;
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
      el.innerHTML = `<div class="prompt">${esc(a.prompt)}</div>${a.say ? speakBtns(a.say) : ""}<div class="answer-line" id="al"></div><div class="tiles" id="tl"></div>`;
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
      el.innerHTML = `<div class="prompt">${esc(a.prompt)}</div>${speakBtns(a.say, true)}
        <input class="typed" id="ty" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="Type here" aria-label="Your answer">
        <p class="small muted" style="text-align:center">Spell-check is switched off – no help from the keyboard!</p>`;
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
        el.innerHTML = `<div class="muted small">Story · ${esc(a.title)}</div><div class="story"><div class="emoji">${page.emoji}</div>
          <div class="text" id="tx">${words.map((w, i) => `<span data-w="${i}">${esc(w)}</span>`).join(" ")}</div></div>
          <div class="dots">${a.pages.map((_, i) => `<i class="${i === pg ? "on" : ""}"></i>`).join("")}</div>
          <div class="speakrow"><button class="speak" id="read">🔊 Read to me</button></div>`;
        const starts = []; let pos = 0; words.forEach((w) => { starts.push(pos); pos += w.length + 1; });
        const read = () => speak(page.text, { rate: 0.8,
          onboundary: (e) => { let k = starts.findIndex((s, i) => e.charIndex >= s && (i === starts.length - 1 || e.charIndex < starts[i + 1])); $$("#tx span", el).forEach((s) => s.classList.toggle("hl", +s.dataset.w === k)); },
          onend: () => $$("#tx span", el).forEach((s) => s.classList.remove("hl")) });
        $("#read", el).onclick = read; read();
        const last = pg === a.pages.length - 1;
        ctx.cont(last ? "Continue" : "Next page ›", last ? undefined : () => { pg++; draw(); });
      };
      draw();
    }
  };

  // ---------- progress & review ----------
  function progress() {
    const p = active(), pr = prog(p.id);
    const acc = Object.values(pr.skills).reduce((a, s) => [a[0] + s.c, a[1] + s.t], [0, 0]);
    render(`${topbar()}<div class="screen"><h2>My progress</h2>
      <div class="statgrid"><div class="stat"><b>⭐ ${totalStars(pr)}</b><span>stars</span></div><div class="stat"><b>${doneCount(pr)}</b><span>lessons done</span></div><div class="stat"><b>🔥 ${pr.streak.count}</b><span>day streak</span></div>
      <div class="stat"><b>${pr.words.length}</b><span>words learned</span></div><div class="stat"><b>${Math.round(pr.seconds / 60)}</b><span>minutes</span></div><div class="stat"><b>${acc[1] ? Math.round((acc[0] / acc[1]) * 100) + "%" : "–"}</b><span>accuracy</span></div></div>
      <div class="card"><h3>Skills</h3>${Object.keys(pr.skills).length ? Object.entries(pr.skills).map(([k, s]) => { const v = Math.round((s.c / s.t) * 100); return `<div class="skillbar"><span class="l">${k}</span><div class="bar"><i style="width:${v}%"></i></div><span>${v}%</span></div>`; }).join("<div style='height:8px'></div>") : `<p class="muted small">Finish a lesson to see your skills.</p>`}</div>
      <h3>Badges</h3><div class="badges">${BADGES.map((b) => `<div class="badge ${pr.badges.includes(b.id) ? "" : "off"}"><span class="e">${b.e}</span>${b.t}</div>`).join("")}</div>
      ${pr.log.length ? `<div class="card"><h3>Recent lessons</h3>${pr.log.slice(0, 6).map((l) => `<div class="small" style="display:flex;justify-content:space-between;padding:4px 0"><span>${esc(l.title)}</span><b>${l.pct}%</b></div>`).join("")}</div>` : ""}
    </div>${tabbar("progress")}`);
  }

  function review() {
    const pr = prog(active().id);
    render(`${topbar()}<div class="screen"><h2>Review words</h2>
      <p class="muted">Words you found tricky are saved here so you can practise them again.</p>
      ${pr.review.length ? `<div class="chips">${pr.review.map((w) => `<button class="chip" data-say="${esc(w)}" style="border:0">🔊 ${esc(w)}</button>`).join("")}</div>
        <button class="btn" data-go="#/lesson/review">Practise ${pr.review.length} word${pr.review.length > 1 ? "s" : ""}</button>`
        : `<div class="card center" style="display:flex;flex-direction:column"><div style="font-size:3rem">🌟</div><p>No words to review yet. Mistakes in spelling activities will appear here.</p></div>`}
    </div>${tabbar("review")}`);
  }

  // ---------- parent area & settings ----------
  function gate() {
    if (+sessionStorage.getItem("gate") > Date.now() - 5 * 60e3) return go("#/parent");
    const a = 3 + Math.floor(Math.random() * 7), b = 4 + Math.floor(Math.random() * 6);
    render(`${banner}<div class="screen center"><button class="back" data-go="#/profiles">‹ Back</button><div style="font-size:3.5rem">🔒</div>
      <h2>Grown-ups only</h2><p class="muted">To continue, answer this question.</p>
      <div class="prompt" style="font-size:1.6rem">What is ${a} × ${b}?</div>
      <input class="typed" id="ans" inputmode="numeric" aria-label="Answer" style="max-width:200px">
      <button class="btn" id="go">Continue</button></div>`);
    $("#go").onclick = () => {
      if (+$("#ans").value === a * b) { sessionStorage.setItem("gate", Date.now()); go("#/parent"); }
      else { toast("That's not right – try again"); gate(); }
    };
  }

  function exportData() {
    const blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
    const u = URL.createObjectURL(blob), l = document.createElement("a");
    l.href = u; l.download = "lexora-my-data.json"; l.click(); setTimeout(() => URL.revokeObjectURL(u), 1000);
  }
  function deleteAll() {
    if (!confirm("Delete the account and ALL learning data on this device? This can't be undone.")) return;
    localStorage.removeItem(KEY); sessionStorage.clear(); S = fresh(); toast("All data deleted"); go("#/welcome");
  }

  function parentArea() {
    if (!S.parent) return go("#/settings");
    if (!(+sessionStorage.getItem("gate") > Date.now() - 5 * 60e3)) return go("#/gate");
    const kids = S.profiles.filter((p) => p.type === "child");
    render(`${banner}<div class="screen"><button class="back" data-go="#/profiles">‹ Profiles</button>
      <h2>Parent area</h2><p class="muted">Hello ${esc(S.parent.name)}. Here's how your children are doing.</p>
      ${kids.length ? kids.map((k) => { const pr = prog(k.id), last = pr.log[0];
        const acc = Object.values(pr.skills).reduce((a, s) => [a[0] + s.c, a[1] + s.t], [0, 0]);
        return `<div class="card"><div style="display:flex;gap:12px;align-items:center"><span class="avatar lg" style="width:56px;height:56px;font-size:2rem">${k.avatar}</span><div style="flex:1"><b>${esc(k.name)}</b><div class="small muted">Age ${k.ageBand} · last active ${last ? new Date(last.at).toLocaleDateString() : "never"}</div></div></div>
          <div class="statgrid" style="margin-top:12px"><div class="stat"><b>${doneCount(pr)}</b><span>lessons</span></div><div class="stat"><b>${Math.round(pr.seconds / 60)}</b><span>minutes</span></div><div class="stat"><b>${acc[1] ? Math.round((acc[0] / acc[1]) * 100) + "%" : "–"}</b><span>accuracy</span></div></div>
          ${pr.review.length ? `<p class="small" style="margin-top:10px">Needs practice: <b>${pr.review.map(esc).join(", ")}</b></p>` : ""}
          ${pr.log.length ? `<p class="small muted" style="margin:8px 0 0">Recent: ${pr.log.slice(0, 3).map((l) => `${esc(l.title)} (${l.pct}%)`).join(" · ")}</p>` : ""}
          <button class="btn ghost small" data-del="${k.id}" style="color:var(--bad);margin-top:6px">Delete ${esc(k.name)}'s profile</button></div>`; }).join("") : `<div class="card">No child profiles yet.</div>`}
      <button class="btn" data-go="#/addchild">+ Add a child</button>
      <div class="card small"><b>Privacy & consent</b><p class="muted" style="margin:.4em 0">Consent given on ${new Date(S.parent.consentAt).toLocaleString()} (policy version ${S.parent.policyVersion}). No ads, no chat, no tracking.</p>
        <button class="btn secondary" id="exp">Download my family's data</button><div style="height:8px"></div><button class="btn bad" id="del">Delete account and all data</button></div>
    </div>`);
    $$("[data-del]").forEach((b) => b.onclick = () => {
      const k = S.profiles.find((p) => p.id === b.dataset.del);
      if (confirm(`Delete ${k.name}'s profile and progress?`)) { S.profiles = S.profiles.filter((p) => p !== k); delete S.progress[k.id]; if (S.activeId === k.id) S.activeId = null; save(); parentArea(); }
    });
    $("#exp").onclick = exportData; $("#del").onclick = deleteAll;
  }

  function settings() {
    const p = active() || S.profiles[0];
    render(`${banner}<div class="screen"><button class="back" data-go="#/profiles">‹ Profiles</button><h2>Settings</h2>
      <div class="card"><b>${esc(p ? p.name : "")}</b><div class="small muted">${esc(p && p.level || "")}</div></div>
      <button class="btn secondary" data-go="#/placement">Retake level quiz</button>
      <button class="btn secondary" id="exp">Download my data</button><button class="btn bad" id="del">Delete my account and data</button></div>`);
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
      ${C.sections.map((s) => `<div class="card" style="padding:12px"><h3>${s.emoji} ${s.title}</h3><table class="admin"><tr><th>Unit / lesson</th><th>Skill</th><th>Acts</th><th>Status</th><th></th></tr>
        ${s.units.map((u) => u.soon ? `<tr><td>${u.title}</td><td></td><td>0</td><td><span class="tag soon">Draft</span></td><td></td></tr>` : u.lessons.map((lid) => { const L = C.lessons[lid];
          return `<tr><td>${u.title}<br><b>${esc(L.title)}</b></td><td>${L.skill}</td><td>${L.activities.length}</td><td><span class="tag">Published</span></td><td><button class="btn secondary" style="padding:6px 10px;font-size:.8rem" data-go="#/preview/${lid}">Play</button></td></tr>`; }).join("")).join("")}</table></div>`).join("")}
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
