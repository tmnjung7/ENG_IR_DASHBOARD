/* KCC IR Meet — app logic (vanilla JS, no build step). Data comes from data/*.js globals. */
(function () {
  "use strict";
  const CFG = window.KCC_CONFIG || {};
  const SCRIPTS = window.KCC_SCRIPTS || [];
  const ANSWERS = window.KCC_ANSWERS || [];
  const PHRASES = window.KCC_PHRASES || { categories: [], easyWords: [], pronounce: [], mistakes: [], numberExamples: [] };
  const FACTS = window.KCC_FACTS || [];
  const STUDY = window.KCC_STUDY || [];
  const MARKET = window.KCC_MARKET || null;

  const $ = (sel, el) => (el || document).querySelector(sel);
  const h = (tag, attrs, ...kids) => {
    const el = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      const v = attrs[k];
      if (v === null || v === undefined || v === false) continue;
      if (k === "class") el.className = v;
      else if (k === "html") el.innerHTML = v;
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (const kid of kids.flat()) {
      if (kid === null || kid === undefined || kid === false) continue;
      el.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
    }
    return el;
  };
  const store = {
    get(k, d) { try { const v = localStorage.getItem("kccmeet:" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("kccmeet:" + k, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ---------- global state ----------
  const VIEWS = [
    { id: "speak", label: "SPEAK", ic: "🎙️" },
    { id: "answer", label: "ANSWER", ic: "💬" },
    { id: "silicone", label: "SILICONE", ic: "🧪" },
    { id: "phrases", label: "PHRASES", ic: "🗣️" },
    { id: "facts", label: "FACTS", ic: "📊" }
  ];
  const state = {
    view: "speak",
    scale: store.get("scale", 1),
    theme: store.get("theme", null),
    // Korean gist visibility per view (SPEAK hidden by default — brief §2)
    kr: store.get("kr", { speak: false, answer: true, silicone: true, phrases: false, facts: true }),
    interp: store.get("interp", !!CFG.interpreterDefault),
    scriptId: store.get("scriptId", SCRIPTS[0] && SCRIPTS[0].id),
    pos: store.get("pos", {}),      // scriptId -> flat paragraph index
    answerId: null,
    aCat: store.get("aCat", "all"),
    aSub: store.get("aSub", "all"),
    aPeriod: store.get("aPeriod", "all"),
    aQuery: "",
    sSub: store.get("sSub", "all"), sTab: store.get("sTab", "qa"), sQuery: "",
    stars: store.get("stars", []),
    speakMode: store.get("speakMode", "flow"),
    sQuarter: store.get("sQuarter", null),
    phraseTab: store.get("phraseTab", "study"),
    studyDeck: store.get("studyDeck", "all"),
    studyTier: store.get("studyTier", 1),
    studyMode: store.get("studyMode", "list"),
    studyDir: store.get("studyDir", "kr2en"),
    known: store.get("known", []),
    studyIdx: 0, studyFlip: false, studyOrder: null,
    phraseCat: store.get("phraseCat", PHRASES.categories[0] && PHRASES.categories[0].id),
    outline: false,
    timer: { running: false, start: 0, acc: 0, iv: null }
  };

  function applyScale() {
    document.documentElement.style.setProperty("--scale", state.scale);
    store.set("scale", state.scale);
  }
  function applyTheme() {
    const sysDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const t = state.theme || (sysDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", t);
    const meta = $('meta[name="theme-color"]'); if (meta) meta.setAttribute("content", t === "dark" ? "#0B1220" : "#002D56");
  }
  function applyKr() {
    document.body.classList.toggle("hide-kr", !state.kr[state.view]);
    store.set("kr", state.kr);
    const b = $("#krBtn"); if (b) b.classList.toggle("on", !!state.kr[state.view]);
  }

  // ---------- routing ----------
  function parseHash() {
    const parts = (location.hash || "#speak").slice(1).split("/").map(decodeURIComponent);
    return { view: VIEWS.some(v => v.id === parts[0]) ? parts[0] : "speak", a: parts[1], b: parts[2] };
  }
  function go(view, a, b) {
    const parts = [view]; if (a !== undefined && a !== null) parts.push(a); if (b !== undefined && b !== null) parts.push(b);
    const hash = "#" + parts.map(encodeURIComponent).join("/");
    if (location.hash === hash) render(); else location.hash = hash;
  }
  window.addEventListener("hashchange", render);

  // ---------- header / tabs ----------
  function renderHeader() {
    const nav = $("#topnav"); nav.innerHTML = "";
    const tabs = $("#tabbar"); tabs.innerHTML = "";
    for (const v of VIEWS) {
      nav.append(h("button", { class: v.id === state.view ? "on" : "", onclick: () => go(v.id) }, v.ic + " " + v.label));
      tabs.append(h("button", { class: v.id === state.view ? "on" : "", onclick: () => go(v.id) }, h("span", { class: "ic" }, v.ic), v.label));
    }
    $("#qbadge").textContent = CFG.quarter || "";
    const st = $("#status");
    if (CFG.status) { st.classList.remove("hidden"); st.innerHTML = "⚠️ " + esc(CFG.status); } else st.classList.add("hidden");
  }
  function bindControls() {
    $("#krBtn").addEventListener("click", () => { state.kr[state.view] = !state.kr[state.view]; applyKr(); });
    $("#aMinus").addEventListener("click", () => { state.scale = Math.max(0.8, +(state.scale - 0.1).toFixed(2)); applyScale(); });
    $("#aPlus").addEventListener("click", () => { state.scale = Math.min(1.8, +(state.scale + 0.1).toFixed(2)); applyScale(); });
    $("#themeBtn").addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme");
      state.theme = cur === "dark" ? "light" : "dark"; store.set("theme", state.theme); applyTheme();
    });
    document.addEventListener("keydown", e => {
      if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
      if (state.view === "speak") {
        if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); step(1); }
        else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); step(-1); }
        else if (e.key === "Escape") { state.outline = !state.outline; render(); }
        else if (e.key.toLowerCase() === "k") { state.kr.speak = !state.kr.speak; applyKr(); }
        else if (e.key.toLowerCase() === "t") toggleTimer();
      } else if (state.view === "phrases" && state.phraseTab === "study" && state.studyMode === "cards") {
        if (e.key === " ") { e.preventDefault(); state.studyFlip = !state.studyFlip; render(); }
        else if (e.key === "ArrowRight") { state.studyFlip = false; state.studyIdx++; render(); }
        else if (e.key === "ArrowLeft") { state.studyFlip = false; state.studyIdx = Math.max(0, state.studyIdx - 1); render(); }
        else if (e.key.toLowerCase() === "k") { const pool = studyItems().filter(i => !state.known.includes(i.key)); if (pool.length) { const it = pool[(state.studyOrder || pool.map((_, i) => i))[state.studyIdx % pool.length]]; toggleKnown(it.key); state.studyFlip = false; state.studyOrder = null; render(); } }
      } else if (state.view === "answer" || (state.view === "silicone" && state.sTab === "qa")) {
        const cfg = state.view === "silicone" ? SIL_CFG : { view: "answer" };
        if (e.key === "/") { e.preventDefault(); const q = $("#aSearch"); if (q) { q.focus(); q.select(); } return; }
        if (!state.answerId) return;
        if (e.key === "ArrowRight") stepAnswer(1, cfg);
        else if (e.key === "ArrowLeft") stepAnswer(-1, cfg);
        else if (e.key === "Escape") (cfg.lockCat ? go("silicone", "qa") : go("answer"));
      }
    });
  }

  // ---------- render root ----------
  function render() {
    const r = parseHash();
    state.view = r.view;
    renderHeader(); applyKr();
    const main = $("#main"); main.innerHTML = "";
    if (r.view === "speak") renderSpeak(main, r);
    else if (r.view === "answer") renderAnswer(main, r, { view: "answer" });
    else if (r.view === "silicone") renderSilicone(main, r);
    else if (r.view === "phrases") renderPhrases(main, r);
    else renderFacts(main, r);
    main.append(h("div", { class: "foot" }, `${CFG.appName || "KCC IR Meet"} ${CFG.version || ""} · as of ${CFG.asOf || ""} · external-statement content only · ←→ keys / swipe to move`));
    window.scrollTo({ top: 0 });
  }

  // =====================================================================
  // SPEAK — teleprompter
  // =====================================================================
  function flatParas(script) {
    const out = [];
    script.sections.forEach((s, si) => s.paras.forEach((p, pi) => out.push({ s, si, p, pi })));
    return out;
  }
  function curScript() { return SCRIPTS.find(s => s.id === state.scriptId) || SCRIPTS[0]; }
  function step(d) {
    const sc = curScript(); if (!sc) return;
    const flat = flatParas(sc);
    const i = Math.min(flat.length - 1, Math.max(0, (state.pos[sc.id] || 0) + d));
    state.pos[sc.id] = i; store.set("pos", state.pos);
    if (state.speakMode === "flow") {
      // update highlight in place, no full re-render (keeps scroll position)
      document.querySelectorAll(".flow-p.cur").forEach(el => el.classList.remove("cur"));
      const el = document.getElementById("fp-" + i);
      if (el) { el.classList.add("cur"); el.scrollIntoView({ block: "center", behavior: "smooth" }); }
      history.replaceState(null, "", "#" + ["speak", sc.id, String(i)].map(encodeURIComponent).join("/"));
      return;
    }
    go("speak", sc.id, String(i));
  }
  function fmtTime(ms) { const s = Math.floor(ms / 1000); return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); }
  function timerElapsed() { const t = state.timer; return t.acc + (t.running ? Date.now() - t.start : 0); }
  function toggleTimer() {
    const t = state.timer;
    if (t.running) { t.acc += Date.now() - t.start; t.running = false; clearInterval(t.iv); t.iv = null; }
    else { t.start = Date.now(); t.running = true; t.iv = setInterval(paintTimer, 500); }
    paintTimer();
  }
  function resetTimer() { const t = state.timer; t.acc = 0; t.start = Date.now(); if (!t.running) { clearInterval(t.iv); t.iv = null; } paintTimer(); }
  function paintTimer() { const el = $("#timer"); if (el) { el.textContent = fmtTime(timerElapsed()); el.classList.toggle("run", state.timer.running); } }

  function renderSpeak(main, r) {
    if (!SCRIPTS.length) { main.append(h("div", { class: "card", style: "padding:20px" }, "No scripts in data/scripts.js")); return; }
    if (r.a && SCRIPTS.some(s => s.id === r.a)) { state.scriptId = r.a; store.set("scriptId", r.a); }
    const sc = curScript();
    const flat = flatParas(sc);
    let i = r.b !== undefined ? parseInt(r.b, 10) : (state.pos[sc.id] || 0);
    if (isNaN(i) || i < 0) i = 0; if (i > flat.length - 1) i = flat.length - 1;
    state.pos[sc.id] = i; store.set("pos", state.pos);
    const cur = flat[i];

    // picker — quarter tabs, then scripts of that quarter
    const quarters = [];
    for (const q of SCRIPTS.map(x => x.quarter || "Evergreen")) if (!quarters.includes(q)) quarters.push(q);
    const qkey = q => { const m = /^(\d)Q (\d{4})$/.exec(q); return m ? m[2] + m[1] : "0"; };
    quarters.sort((a, b) => qkey(b).localeCompare(qkey(a)));
    if (!state.sQuarter || !quarters.includes(state.sQuarter) || (r.a && sc.quarter !== state.sQuarter)) state.sQuarter = sc.quarter || "Evergreen";
    store.set("sQuarter", state.sQuarter);
    const qrow = h("div", { class: "chips catrow" }, quarters.map(q => h("button", {
      class: "chip" + (q === state.sQuarter ? " sel" : ""),
      onclick: () => { state.sQuarter = q; store.set("sQuarter", q); const first = SCRIPTS.find(x => (x.quarter || "Evergreen") === q); go("speak", first.id, String(state.pos[first.id] || 0)); }
    }, q === "Evergreen" ? "상시 · Evergreen" : q)));
    main.append(qrow);
    const picker = h("div", { class: "picker" });
    for (const s of SCRIPTS.filter(x => (x.quarter || "Evergreen") === state.sQuarter)) {
      picker.append(h("button", { class: s.id === sc.id ? "on" : "", onclick: () => go("speak", s.id, String(state.pos[s.id] || 0)) },
        h("span", { class: "t" }, s.kind ? h("span", { class: "b k-" + s.kind.toLowerCase() }, s.kind) : null, s.title),
        h("span", { class: "s" }, `${s.duration} · ${s.titleKr}${s.badge ? " · " + s.badge : ""}`)));
    }
    main.append(picker);

    const modeBar = h("div", { class: "modebar" },
      h("button", { class: "tool" + (state.speakMode === "flow" ? " on" : ""), onclick: () => { state.speakMode = "flow"; store.set("speakMode", "flow"); render(); } }, "📜 Full script"),
      h("button", { class: "tool" + (state.speakMode === "prompter" ? " on" : ""), onclick: () => { state.speakMode = "prompter"; store.set("speakMode", "prompter"); render(); } }, "🎬 Prompter"),
      h("span", { class: "kr modehint" }, state.speakMode === "flow" ? "전체를 스크롤하며 읽기. 문단을 클릭하면 현재 위치로 표시, ←→로 이동." : "한 화면에 한 문단. ←→ / 스와이프 / 탭으로 넘김."),
      h("button", { class: "tool", onclick: () => { state.kr.speak = !state.kr.speak; applyKr(); } }, "한글 (K)"),
      h("button", { class: "tool", onclick: toggleTimer, title: "T key" }, "▶/❚❚"),
      h("button", { class: "tool", onclick: resetTimer }, "00:00"),
      h("span", { class: "timer", id: "timer" }, fmtTime(timerElapsed())));
    main.append(modeBar);

    if (state.speakMode === "flow") {
      const card = h("div", { class: "card flow" });
      if (sc.note) card.append(h("div", { class: "flow-note kr" }, "📝 " + sc.note));
      let idx = 0;
      sc.sections.forEach((s, si) => {
        card.append(h("div", { class: "flow-sec" }, h("span", { class: "n" }, `${si + 1}. ${s.title}`), h("span", { class: "tm" }, "⏱ " + s.time)));
        if (s.chips && s.chips.length) card.append(h("div", { class: "flow-chips chips" }, s.chips.map(c => h("span", { class: "chip" }, c))));
        s.paras.forEach(p => {
          const k = idx++;
          const el = h("div", { class: "flow-p" + (k === i ? " cur" : ""), id: "fp-" + k, onclick: () => { state.pos[sc.id] = k; store.set("pos", state.pos); go("speak", sc.id, String(k)); } },
            h("p", { class: "fp-en", html: p.en }),
            p.kr ? h("p", { class: "fp-kr kr" }, p.kr) : null,
            p.pause ? h("div", { class: "pr-pause" }, "··· pause") : null);
          card.append(el);
        });
      });
      main.append(card);
      setTimeout(() => { const cur = document.getElementById("fp-" + i); if (cur && i > 0) cur.scrollIntoView({ block: "center", behavior: "smooth" }); }, 30);
      paintTimer();
      return;
    }

    const card = h("div", { class: "card prompter" });
    card.append(h("div", { class: "progress" }, h("i", { style: `width:${((i + 1) / flat.length) * 100}%` })));
    card.append(h("div", { class: "pr-top" },
      h("span", { class: "sec" }, `${cur.si + 1}. ${cur.s.title}`),
      h("span", { class: "tm" }, "⏱ " + cur.s.time),
      h("span", { class: "pos" }, `${i + 1} / ${flat.length}`)));
    if (cur.s.chips && cur.s.chips.length) {
      card.append(h("div", { class: "pr-chips chips" }, cur.s.chips.map(c => h("span", { class: "chip" }, c))));
    }
    const body = h("div", { class: "pr-body" },
      h("p", { class: "pr-en", html: cur.p.en }),
      cur.p.kr ? h("p", { class: "pr-kr kr" }, cur.p.kr) : null,
      cur.p.pause ? h("div", { class: "pr-pause" }, "··· pause") : null);
    let tx = 0, ty = 0;
    body.addEventListener("touchstart", e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
    body.addEventListener("touchend", e => {
      const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
    });
    body.addEventListener("click", e => {
      if (window.getSelection && String(window.getSelection())) return;
      const rect = body.getBoundingClientRect(); step((e.clientX - rect.left) < rect.width / 3 ? -1 : 1);
    });
    card.append(body);
    const nav = h("div", { class: "pr-nav" },
      h("button", { class: "big ghost", disabled: i === 0, onclick: () => step(-1) }, "← Prev"),
      h("div", { class: "pr-tools" },
        h("button", { class: "tool" + (state.outline ? " on" : ""), onclick: () => { state.outline = !state.outline; render(); } }, "☰ Outline"),
        h("button", { class: "tool", onclick: () => { state.pos[sc.id] = 0; store.set("pos", state.pos); resetTimer(); go("speak", sc.id, "0"); } }, "⟲ Start")),
      h("button", { class: "big", disabled: i === flat.length - 1, onclick: () => step(1) }, "Next →"));
    card.append(nav);
    if (state.outline) {
      const ol = h("div", { class: "outline" });
      let acc = 0;
      sc.sections.forEach((s, si) => {
        const start = acc; acc += s.paras.length;
        ol.append(h("button", { class: si === cur.si ? "on" : "", onclick: () => { state.outline = false; go("speak", sc.id, String(start)); } },
          h("span", null, `${si + 1}. ${s.title}`), h("span", { class: "tm" }, `${s.time} · ${s.paras.length}¶`)));
      });
      if (sc.note) ol.append(h("div", { class: "kr", style: "font-size:.8rem;padding:8px 12px" }, "📝 " + sc.note));
      card.append(ol);
    }
    main.append(card);
    paintTimer();
  }

  // =====================================================================
  // ANSWER — question buttons → one card
  // =====================================================================
  const CATS = window.KCC_ANSWER_CATS || [];
  const catOf = id => CATS.find(c => c.id === id) || { id, label: id, labelKr: "" };
  // 한글 ↔ 영문 별칭: 어느 쪽으로 쳐도 같은 카드가 나오게
  const ALIASES = {
    "물산": "samsung c&t", "삼성물산": "samsung c&t", "삼물": "samsung c&t", "모멘티브": "momentive", "mpm": "momentive",
    "자사주": "treasury", "소각": "cancellation / cancel", "유동화": "monetisation / sell down / sell-down", "매각": "sale / disposal",
    "교환사채": "exchangeable / eb", "eb": "exchangeable", "환율": "fx / won", "원화": "won", "순차입": "net debt", "순차입금": "net debt",
    "차입": "debt", "부채비율": "debt-to-equity", "신용등급": "rating", "등급": "rating", "밸류업": "value-up", "배당": "dividend",
    "특별배당": "special dividend", "주주환원": "shareholder return / returns", "실리콘": "silicone", "도료": "paint / coatings",
    "건자재": "building materials", "석고": "gypsum", "석고보드": "gypsum", "단열재": "insulation", "창호": "windows", "선박": "marine",
    "자동차": "auto / automotive", "원재료": "raw material", "판가": "price", "가격": "price", "인상": "price increase", "마진": "margin",
    "가이던스": "guidance", "전망": "outlook / guidance", "중국": "china / chinese", "관세": "tariff", "유가": "oil", "투자": "capex",
    "설비투자": "capex", "행동주의": "activist", "트러스톤": "truston", "주총": "agm", "승계": "succession", "기판": "substrate",
    "데이터센터": "data centre", "열관리": "thermal", "타이어": "tire", "품질": "quality", "납기": "delivery", "자립": "self-funding",
    "순이익": "net profit", "평가손익": "valuation", "평가이익": "valuation gain", "시가평가": "mark-to-market", "ipo": "ipo",
    "인적분할": "spin-off", "출자": "injection", "리스크": "risk", "환원": "returns", "목표": "target", "pbr": "pbr", "roe": "roe"
  };
  function answerFields(a) {
    const c = catOf(a.cat);
    const sc = c.subs && c.subs.find(x => x.id === a.sub);
    return [
      { w: 4, t: [a.label, a.labelKr].join(" ") },
      { w: 3, t: [(a.tags || []).join(" "), c.label, c.labelKr, sc ? sc.labelKr + " " + sc.label : "", a.period || ""].join(" ") },
      { w: 2, t: [a.core, (a.fixed || []).join(" "), (a.terms || []).map(t => t.kr + " " + t.en).join(" ")].join(" ") },
      { w: 1, t: [(a.support || []).join(" "), (a.kr || []).join(" "), (a.numbers || []).map(n => n.v + " " + n.l).join(" ")].join(" ") }
    ].map(f => { const t = f.t.toLowerCase(); return { w: f.w, t, ns: t.replace(/\s+/g, "") }; });
  }
  // 검색어 → 후보 구(phrase) 목록. 별칭은 정확히 일치할 때만, 구 단위로 추가 (쪼개지 않음)
  function expandQuery(q) {
    const words = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return words.map(w => { const alts = [w]; if (ALIASES[w]) alts.push(...ALIASES[w].split(" / ")); return alts; });
  }
  function scoreAnswer(a, groups) {
    if (!groups.length) return 1;
    const fields = answerFields(a);
    let total = 0;
    for (const alts of groups) {
      let best = 0;
      for (const f of fields) for (const ph of alts) {
        const p = ph.replace(/\s+/g, "");
        if (f.t.includes(ph) || (p.length >= 2 && f.ns.includes(p))) { best = Math.max(best, f.w + (f.w === 4 && f.t.startsWith(ph) ? 1 : 0)); }
      }
      if (!best) return 0;          // AND: every word must hit somewhere
      total += best;
    }
    return total;
  }
  const SIL_CFG = { view: "silicone", lockCat: "silicone" };
  function filteredAnswers(cfg) {
    cfg = cfg || {};
    const lock = cfg.lockCat;
    const cat = lock || state.aCat, sub = lock ? state.sSub : state.aSub, query = lock ? state.sQuery : state.aQuery;
    const groups = expandQuery(query);
    const searching = groups.length > 0;
    const order = id => { const i = CATS.findIndex(c => c.id === id); return i < 0 ? 99 : i; };
    const base = ANSWERS.filter(a => (lock ? a.cat === lock : true) && (searching ? true :
        (cat === "stars" ? state.stars.includes(a.id) :
          (cat === "all" || a.cat === cat) && (sub === "all" || cat === "all" || a.sub === sub)) &&
        (state.aPeriod === "all" || a.period === state.aPeriod)));
    const subOrder = (c, id) => { const cc = CATS.find(x => x.id === c); const i = cc && cc.subs ? cc.subs.findIndex(x => x.id === id) : -1; return i < 0 ? 99 : i; };
    if (!searching) return base.sort((a, b) => order(a.cat) - order(b.cat) || (lock ? subOrder(a.cat, a.sub) - subOrder(b.cat, b.sub) : 0) || (b.period || "").localeCompare(a.period || "") || a.n - b.n);
    return base.map(a => ({ a, s: scoreAnswer(a, groups) })).filter(x => x.s > 0)
      .sort((x, y) => y.s - x.s || order(x.a.cat) - order(y.a.cat) || x.a.n - y.a.n).map(x => x.a);
  }
  function toggleStar(id) {
    const i = state.stars.indexOf(id);
    if (i < 0) state.stars.push(id); else state.stars.splice(i, 1);
    store.set("stars", state.stars);
  }
  function highlight(text, groups) {
    if (!groups.length) return document.createTextNode(text);
    const words = groups.flat().filter(w => w.length >= 2).sort((a, b) => b.length - a.length);
    const re = new RegExp("(" + words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")", "ig");
    const frag = document.createDocumentFragment();
    String(text).split(re).forEach((part, i) => { if (!part) return; frag.append(i % 2 ? h("mark", null, part) : part); });
    return frag;
  }
  function openCard(id, cfg) { if (cfg && cfg.lockCat) go("silicone", "qa", id); else go("answer", id); }
  function stepAnswer(d, cfg) {
    const f = filteredAnswers(cfg);
    const list = f.length ? f : (cfg && cfg.lockCat ? ANSWERS.filter(a => a.cat === cfg.lockCat) : ANSWERS);
    let i = list.findIndex(a => a.id === state.answerId); if (i < 0) i = 0;
    const n = (i + d + list.length) % list.length;
    openCard(list[n].id, cfg);
  }
  function renderAnswer(main, r, cfg) {
    cfg = cfg || { view: "answer" };
    const lock = cfg.lockCat || null;
    const idArg = lock ? r.b : r.a;
    state.answerId = idArg && ANSWERS.some(a => a.id === idArg && (!lock || a.cat === lock)) ? idArg : null;
    const wrap = h("div", { class: "ans-wrap" + (state.answerId ? " has-detail" : "") });
    const side = h("div", { class: "alist-wrap" });
    const getQ = () => lock ? state.sQuery : state.aQuery;
    const setQ = v => { if (lock) state.sQuery = v; else state.aQuery = v; };

    // search
    const input = h("input", { id: "aSearch", type: "search", placeholder: lock ? "실리콘 카드 안에서 검색 (예: Wacker, 4Q, 현금, 품질)   /" : "검색: 질문·키워드·숫자 (예: 특별배당, Wacker, 2028, EB)   /", value: getQ(), autocomplete: "off" });
    let deb = null;
    input.addEventListener("input", () => { setQ(input.value); clearTimeout(deb); deb = setTimeout(paintList, 80); });
    input.addEventListener("keydown", e => {
      if (e.key === "Escape") { input.value = ""; setQ(""); paintList(); input.blur(); }
      if (e.key === "Enter") { const f = filteredAnswers(cfg); if (f.length) openCard(f[0].id, cfg); }
    });
    side.append(h("div", { class: "asearch" }, h("span", { class: "mag" }, "🔍"), input,
      h("button", { class: "clr", title: "clear", onclick: () => { input.value = ""; setQ(""); paintList(); input.focus(); } }, "✕")));

    // category chips (+ ★ Today, + sub-chips when the category has them)
    const periods = []; for (const p of ANSWERS.map(a => a.period).filter(Boolean)) if (!periods.includes(p)) periods.push(p);
    periods.sort().reverse();
    if (!lock) {
      const chipRow = h("div", { class: "chips catrow" });
      const setCat = id => { state.aCat = id; state.aSub = "all"; store.set("aCat", id); store.set("aSub", "all"); render(); };
      const mkCat = (id, label, sub) => h("button", { class: "chip" + (state.aCat === id ? " sel" : ""), onclick: () => setCat(id) }, label, sub ? h("span", { class: "sub" }, sub) : null);
      chipRow.append(mkCat("all", "All", "전체"));
      chipRow.append(h("button", { class: "chip star" + (state.aCat === "stars" ? " sel" : ""), onclick: () => setCat("stars") }, "★ Today", h("span", { class: "sub" }, String(state.stars.length))));
      for (const c of CATS) chipRow.append(mkCat(c.id, c.labelKr, c.label));
      side.append(chipRow);
    }
    const curCat = CATS.find(c => c.id === (lock || state.aCat));
    const curSub = lock ? state.sSub : state.aSub;
    if (curCat && curCat.subs && curCat.subs.length) {
      const srow = h("div", { class: "chips catrow subs" + (lock ? " nolead" : "") });
      const setSub = id => { if (lock) { state.sSub = id; store.set("sSub", id); } else { state.aSub = id; store.set("aSub", id); } render(); };
      const mkSub = (id, label, sub) => h("button", { class: "chip" + (curSub === id ? " sel" : ""), onclick: () => setSub(id) }, label, sub ? h("span", { class: "sub" }, sub) : null);
      srow.append(mkSub("all", "All " + curCat.labelKr));
      for (const sc of curCat.subs) srow.append(mkSub(sc.id, sc.labelKr, sc.label));
      side.append(srow);
    }
    if (periods.length > 1) {
      const prow = h("div", { class: "chips catrow periods" });
      const mkP = (id, label) => h("button", { class: "chip" + (state.aPeriod === id ? " sel" : ""), onclick: () => { state.aPeriod = id; store.set("aPeriod", id); render(); } }, label);
      prow.append(mkP("all", "All periods"));
      for (const p of periods) prow.append(mkP(p, p));
      side.append(prow);
    }

    const note = h("div", { class: "anote kr hidden" });
    side.append(note);
    const listEl = h("div", { class: "alist card" });
    const cntEl = h("span", { id: "aCount" });
    side.append(listEl);
    const poolN = lock ? ANSWERS.filter(a => a.cat === lock).length : ANSWERS.length;
    function paintList() {
      listEl.innerHTML = "";
      const groups = expandQuery(getQ());
      const searching = groups.length > 0;
      note.classList.toggle("hidden", !searching);
      note.textContent = lock ? "🔎 실리콘 카드 " + poolN + "개 안에서 찾습니다 (하위 카테고리·시기 무시)." : "🔎 검색 중에는 카테고리·시기 필터를 무시하고 전체 " + ANSWERS.length + "개에서 찾습니다.";
      side.classList.toggle("searching", searching);
      const list = filteredAnswers(cfg);
      if (!list.length) { cntEl.textContent = `0 / ${poolN}`; listEl.append(h("div", { class: "aempty" }, "No match. ", h("span", { class: "kr" }, state.aCat === "stars" && !lock ? "행의 ★을 눌러 오늘 쓸 카드를 담아두세요." : "다른 단어로 검색해 보세요 (한글·영문 모두 가능)."))); return; }
      let lastCat = null, lastSub = null;
      const grouped = !searching && !lock && state.aCat === "all";
      const groupedSub = !searching && !!lock && state.sSub === "all" && curCat && curCat.subs;
      for (const a of list) {
        if (grouped && a.cat !== lastCat) {
          lastCat = a.cat; const c = catOf(a.cat);
          listEl.append(h("div", { class: "ahead" }, c.labelKr, h("span", null, c.label)));
        }
        if (groupedSub && a.sub !== lastSub) {
          lastSub = a.sub; const sc = curCat.subs.find(x => x.id === a.sub) || { labelKr: "기타", label: "" };
          listEl.append(h("div", { class: "ahead" }, sc.labelKr, h("span", null, sc.label)));
        }
        const starred = state.stars.includes(a.id);
        const subLabel = (!groupedSub && curCat && curCat.subs && curSub === "all" && a.sub) ? (curCat.subs.find(x => x.id === a.sub) || {}).labelKr : null;
        listEl.append(h("button", { class: "arow" + (a.id === state.answerId ? " on" : ""), onclick: () => openCard(a.id, cfg) },
          h("span", { class: "txt" }, h("span", { class: "l" }, highlight(a.label, groups)), h("span", { class: "lk kr" }, highlight(a.labelKr, groups))),
          h("span", { class: "meta" },
            (!grouped && (searching || state.aCat === "stars")) ? h("span", { class: "per cat" }, catOf(a.cat).labelKr) : null,
            subLabel ? h("span", { class: "per cat" }, subLabel) : null,
            a.period ? h("span", { class: "per" }, a.period) : null,
            h("span", { class: "starbtn" + (starred ? " on" : ""), title: "Today 목록에 담기", onclick: e => { e.stopPropagation(); toggleStar(a.id); paintList(); const sc = $(".chip.star .sub"); if (sc) sc.textContent = String(state.stars.length); } }, starred ? "★" : "☆"))));
      }
      cntEl.textContent = `${list.length} / ${poolN}`;
    }
    side.append(h("div", { class: "acount kr" }, cntEl, " · 카테고리 → 최신 분기 → 번호 순 · ☆ = 오늘 쓸 카드 담기"));
    paintList();
    wrap.append(side);

    if (state.answerId) wrap.append(renderAnswerDetail(ANSWERS.find(a => a.id === state.answerId), cfg));
    else if (window.innerWidth >= 900) {
      wrap.append(h("div", { class: "card", style: "padding:28px;color:var(--muted);font-size:1rem" },
        h("div", { style: "font-size:1.3rem;font-weight:800;color:var(--text);margin-bottom:8px" }, "Pick a question on the left, or type to search."),
        "Each card: fixed line → core sentence → support → 3 numbers → Korean core for the interpreter → terms.",
        h("div", { class: "kr", style: "margin-top:8px;font-size:.9rem" }, "/ 키로 검색창, Enter로 첫 결과 열기, ←→ 카드 이동, Esc 목록 복귀.")));
    }
    main.append(wrap);
  }
  function renderAnswerDetail(a, cfg) {
    cfg = cfg || { view: "answer" };
    const d = h("div", { class: "card adetail" + (state.interp ? " interp" : "") });
    d.append(h("div", { class: "ad-head" },
      h("button", { class: "tool", onclick: () => (cfg.lockCat ? go("silicone", "qa") : go("answer")), title: "Esc" }, "← All"),
      h("span", { class: "ic" }, a.icon || ""),
      h("div", null, h("div", { class: "t" }, a.label, h("span", { class: "cardno" }, "#" + a.n)),
        h("div", { class: "tk" }, h("span", { class: "per" }, catOf(a.cat).labelKr), (() => { const c = catOf(a.cat); const sc = c.subs && c.subs.find(x => x.id === a.sub); return sc ? h("span", { class: "per" }, sc.labelKr) : null; })(), a.period ? h("span", { class: "per" }, a.period) : null, a.updated ? h("span", { class: "upd" }, "updated " + a.updated) : null, " ", h("span", { class: "kr" }, a.labelKr))),
      h("div", { class: "sp" },
        h("button", { class: "tool" + (state.stars.includes(a.id) ? " on" : ""), onclick: () => { toggleStar(a.id); render(); } }, state.stars.includes(a.id) ? "★ Today" : "☆ Today"),
        h("button", { class: "tool" + (state.interp ? " on" : ""), onclick: () => { state.interp = !state.interp; store.set("interp", state.interp); render(); } },
          state.interp ? "🎧 With interpreter" : "🗣 Direct English"))));
    if (a.fixed && a.fixed.length) {
      d.append(h("div", { class: "ad-fixed" }, h("div", { class: "lbl" }, "FIXED LINE — SAY IT THE SAME WAY EVERY TIME"), a.fixed.map(f => h("p", null, f))));
    }
    const body = h("div", { class: "ad-body" });
    body.append(h("p", { class: "ad-core" }, h("span", { class: "lbl" }, "Core answer"), a.core));
    if (a.support && a.support.length) {
      body.append(h("ul", { class: "ad-sup" }, a.support.map((s, i) => h("li", null, h("i", null, String(i + 1)), h("span", null, s)))));
    }
    if (a.numbers && a.numbers.length) {
      body.append(h("div", { class: "ad-nums" }, a.numbers.slice(0, 3).map(n => h("div", { class: "num" }, h("b", null, n.v), h("span", null, n.l)))));
    }
    if (a.kr && a.kr.length) {
      body.append(h("div", { class: "ad-kr kr" }, h("span", { class: "ad-lbl" }, "국문 핵심 — 통역이 그대로 옮길 수 있게"), a.kr.map(k => h("p", null, k))));
    }
    if (a.terms && a.terms.length) {
      body.append(h("div", { class: "ad-terms" }, h("span", { class: "ad-lbl" }, "Terms — 통역 병기 용어"),
        h("table", null, a.terms.map(t => h("tr", null, h("td", null, t.kr), h("td", null, t.en, t.note ? h("span", { class: "nt" }, "⚠ " + t.note) : null))))));
    }
    if (a.hold && a.hold !== "—") body.append(h("div", { class: "ad-hold kr" }, h("span", null, "🚧"), h("span", null, "여기까지만: " + a.hold)));
    d.append(body);
    d.append(h("div", { class: "ad-nav" },
      h("button", { onclick: () => stepAnswer(-1, cfg) }, "← Prev card"),
      h("button", { onclick: () => stepAnswer(1, cfg) }, "Next card →")));
    return d;
  }

  // =====================================================================
  // SILICONE — top-level hub: Q&A (locked to silicone) · Scripts · Facts · Stance
  // =====================================================================
  const STABS = [{ id: "qa", label: "Q&A" }, { id: "market", label: "Market" }, { id: "scripts", label: "Scripts" }, { id: "facts", label: "Facts" }, { id: "stance", label: "Stance" }];
  const SIL_SCRIPT_IDS = ["seg-silicone-3q26", "silicone-3q4q-update", "momentive-5min", "silicone-vision"];
  const SIL_FACT_IDS = ["sil-3q4q", "sil-market", "silicone", "momentive"];
  function renderSilicone(main, r) {
    if (r.a && STABS.some(t => t.id === r.a)) { state.sTab = r.a; store.set("sTab", r.a); }
    else if (!r.a) { state.sTab = "qa"; }
    const sil = ANSWERS.filter(a => a.cat === "silicone");
    const latest = sil.map(a => a.period || "").sort().reverse()[0];
    main.append(h("div", { class: "silhead" },
      h("div", null, h("div", { class: "t" }, "🧪 Silicone & Momentive"), h("div", { class: "s kr" }, `외국인 질문의 대부분. 카드 ${sil.length}장 · 스크립트 ${SIL_SCRIPT_IDS.length}개 · 최신 스탠스 ${latest}`)),
      h("div", { class: "subtabs", style: "margin:0" }, STABS.map(t => h("button", { class: t.id === state.sTab ? "on" : "", onclick: () => go("silicone", t.id) }, t.label)))));
    if (state.sTab === "qa") { renderAnswer(main, r, SIL_CFG); return; }
    if (state.sTab === "market") { renderMarket(main); return; }
    if (state.sTab === "scripts") {
      const list = SIL_SCRIPT_IDS.map(id => SCRIPTS.find(s => s.id === id)).filter(Boolean);
      main.append(h("p", { class: "kr", style: "font-size:.85rem;margin-bottom:10px" }, "투자자가 실리콘을 콕 집어 물을 때. 1분 코멘트 → 3Q/4Q 업데이트 → 모멘티브 5분 → 장기 비전 순으로 깊어집니다."));
      main.append(h("div", { class: "plist" }, list.map(sc => h("button", { class: "card pitem sbtn", onclick: () => go("speak", sc.id, String(state.pos[sc.id] || 0)) },
        h("div", { class: "en" }, h("span", { class: "b k-" + (sc.kind || "").toLowerCase() }, sc.kind), " ", sc.title),
        h("div", { class: "kr" }, `${sc.quarter} · ${sc.duration} · ${sc.titleKr}`),
        sc.note ? h("div", { class: "kr", style: "font-size:.78rem;margin-top:4px" }, "📝 " + sc.note) : null))));
      return;
    }
    if (state.sTab === "facts") {
      for (const id of SIL_FACT_IDS) {
        const g = FACTS.find(x => x.id === id); if (!g) continue;
        const card = h("div", { class: "card fgroup" });
        card.append(h("h3", null, g.icon ? h("span", null, g.icon) : null, g.title));
        if (g.note) card.append(h("div", { class: "note kr" }, g.note));
        for (const row of g.rows) card.append(h("div", { class: "frow" }, h("div", { class: "l" }, row[0]), h("div", { class: "v" }, row[1]), row[2] ? h("div", { class: "s" }, row[2]) : null));
        main.append(card);
      }
      return;
    }
    // stance: fixed lines by period, latest first — the "say it the same way" sheet
    const periods = [...new Set(sil.map(a => a.period || ""))].sort().reverse();
    main.append(h("p", { class: "kr", style: "font-size:.85rem;margin-bottom:10px" }, "실리콘 카드의 고정 문장만 모은 것. 최신 분기가 위. 같은 주제가 여러 분기에 있으면 위의 것을 씁니다."));
    for (const per of periods) {
      const card = h("div", { class: "card fgroup" });
      card.append(h("h3", null, h("span", { class: "per" }, per), per === latest ? "Current stance" : "Earlier stance"));
      for (const a of sil.filter(x => (x.period || "") === per).sort((x, y) => x.n - y.n)) {
        card.append(h("button", { class: "stance", onclick: () => go("silicone", "qa", a.id) },
          h("div", { class: "l" }, a.label, h("span", { class: "lk kr" }, " · " + a.labelKr)),
          h("div", { class: "fx" }, (a.fixed || [a.core]).map(f => h("p", null, f)))));
      }
      main.append(card);
    }
  }

  // ---------- SILICONE › Market — raw-material & China DMC trends (English first) ----------
  function renderMarket(main) {
    if (!MARKET) { main.append(h("div", { class: "card", style: "padding:20px" }, "No market data (data/market.js)")); return; }
    const M = MARKET;
    main.append(h("div", { class: "card mhead" },
      h("div", { class: "mk-lbl" }, "MARKET VIEW · " + M.asOf),
      h("div", { class: "mk-t" }, M.title), h("div", { class: "mk-tk kr" }, M.titleKr),
      h("p", { class: "mk-h" }, M.headline.en), h("p", { class: "kr mk-hk" }, M.headline.kr)));
    // say
    const say = h("div", { class: "card mcard" }, h("div", { class: "ad-lbl", style: "padding:12px 16px 0" }, "Say it like this — no numbers"));
    M.say.forEach((x, i) => say.append(h("div", { class: "msay" }, h("i", null, String(i + 1)), h("div", null, h("div", { class: "en" }, x.en), h("div", { class: "kr" }, x.kr)))));
    main.append(say);
    // grid: price path + metrics
    const grid = h("div", { class: "mgrid" });
    const price = h("div", { class: "card mcard" }, h("div", { class: "ad-lbl", style: "padding:12px 16px 0" }, "DMC price path — " + M.ref.priceUnit), h("div", { class: "mnote kr" }, M.ref.noteKr || M.ref.note));
    const path = h("div", { class: "mpath" });
    M.ref.price.forEach((pt, i) => { if (i) path.append(h("span", { class: "arr" }, "→")); path.append(h("div", { class: "mpt" }, h("b", null, pt.v), h("span", null, pt.when), pt.s ? h("em", null, pt.s) : null)); });
    price.append(path, h("div", { class: "mnote" }, M.ref.note));
    grid.append(price);
    const met = h("div", { class: "card mcard" }, h("div", { class: "ad-lbl", style: "padding:12px 16px 0" }, "Supply & cost — reference"));
    M.ref.metrics.forEach(m => met.append(h("div", { class: "frow" }, h("div", { class: "l" }, m.l), h("div", { class: "v" }, m.v), h("div", { class: "s" }, m.s))));
    grid.append(met);
    main.append(grid);
    // demand shift
    const dem = h("div", { class: "card mcard" }, h("div", { class: "ad-lbl", style: "padding:12px 16px 0" }, "Downstream shift — where demand is moving"));
    M.ref.demand.forEach(d => dem.append(h("div", { class: "frow" }, h("div", { class: "l" }, d.l), h("div", { class: "s", style: "grid-column:2 / -1" }, d.s))));
    main.append(dem);
    // caution / avoid / watch
    const g2 = h("div", { class: "mgrid three" });
    const cau = h("div", { class: "card mcard warn" }, h("div", { class: "ad-lbl", style: "padding:12px 16px 0" }, "Careful"));
    M.caution.forEach(c => cau.append(h("div", { class: "mli" }, h("div", { class: "en" }, c.en), h("div", { class: "kr" }, c.kr))));
    const avd = h("div", { class: "card mcard stop" }, h("div", { class: "ad-lbl", style: "padding:12px 16px 0" }, "Do not say"));
    M.avoid.forEach(a => avd.append(h("div", { class: "mli" }, h("div", { class: "en" }, "✕ " + a.en), h("div", { class: "kr" }, a.kr))));
    const wat = h("div", { class: "card mcard" }, h("div", { class: "ad-lbl", style: "padding:12px 16px 0" }, "Watch list"));
    M.ref.watch.forEach(w => wat.append(h("div", { class: "mli" }, h("div", { class: "en" }, "• " + w))));
    g2.append(cau, avd, wat);
    main.append(g2);
    main.append(h("div", { class: "kr", style: "font-size:.78rem;margin-top:8px" }, "관련 카드: SILICONE › Q&A › 시황·수요·경쟁. 갱신: data/market.js (월 1회 권장)."));
  }

  // =====================================================================
  // PHRASES — survival English + tools
  // =====================================================================
  const PTABS = [
    { id: "study", label: "IR Core ★" }, { id: "phrases", label: "Phrases" }, { id: "easy", label: "Easy words" }, { id: "say", label: "Pronounce" },
    { id: "numbers", label: "Numbers" }, { id: "mistakes", label: "Mistakes" }
  ];
  function renderPhrases(main, r) {
    if (r.a && PTABS.some(t => t.id === r.a)) { state.phraseTab = r.a; store.set("phraseTab", r.a); }
    const tabs = h("div", { class: "subtabs" }, PTABS.map(t => h("button", { class: t.id === state.phraseTab ? "on" : "", onclick: () => go("phrases", t.id) }, t.label)));
    main.append(tabs);
    const t = state.phraseTab;
    if (t === "study") { renderStudy(main); return; }
    if (t === "phrases") {
      if (r.b && PHRASES.categories.some(c => c.id === r.b)) { state.phraseCat = r.b; store.set("phraseCat", r.b); }
      const cat = PHRASES.categories.find(c => c.id === state.phraseCat) || PHRASES.categories[0];
      main.append(h("div", { class: "chips catrow" }, PHRASES.categories.map(c =>
        h("button", { class: "chip" + (c.id === cat.id ? " sel" : ""), onclick: () => go("phrases", "phrases", c.id) }, c.title, h("span", { class: "sub kr" }, c.titleKr)))));
      main.append(h("div", { class: "plist" }, cat.items.map(it => h("div", { class: "card pitem" }, h("div", { class: "en" }, it.en), it.kr ? h("div", { class: "kr" }, it.kr) : null))));
    } else if (t === "easy") {
      main.append(h("p", { class: "kr", style: "font-size:.85rem;margin-bottom:10px" }, "낭독·답변 중 전달이 흔들린 단어 → 쉬운 말로. 왼쪽을 말하려다 막히면 오른쪽."));
      main.append(h("div", { class: "card tablecard scrollx" }, h("table", { class: "ptable" },
        h("tr", null, h("th", null, "Instead of"), h("th", null, "Say"), h("th", { class: "kr" }, "뜻")),
        PHRASES.easyWords.map(w => h("tr", null, h("td", { class: "h" }, w.hard), h("td", { class: "e" }, w.easy), h("td", { class: "kr" }, w.kr))))));
    } else if (t === "say") {
      main.append(h("p", { class: "kr", style: "font-size:.85rem;margin-bottom:10px" }, "대문자 = 강세. 미팅 전 한 번씩 소리 내 읽기."));
      main.append(h("div", { class: "card tablecard scrollx" }, h("table", { class: "ptable" },
        h("tr", null, h("th", null, "Word"), h("th", null, "Say"), h("th", { class: "kr" }, "뜻")),
        PHRASES.pronounce.map(w => h("tr", null, h("td", { class: "e" }, w.word), h("td", { class: "say" }, w.say), h("td", { class: "kr" }, w.kr))))));
    } else if (t === "mistakes") {
      main.append(h("div", { class: "card tablecard scrollx" }, h("table", { class: "ptable" },
        h("tr", null, h("th", null, "✕ Avoid"), h("th", null, "✓ Say"), h("th", { class: "kr" }, "왜")),
        PHRASES.mistakes.map(w => h("tr", null, h("td", { class: "h" }, w.wrong), h("td", { class: "e" }, w.right), h("td", { class: "kr" }, w.kr))))));
    } else if (t === "numbers") {
      main.append(renderConverter());
      main.append(h("div", { class: "sect-title", style: "margin-top:16px" }, "Common numbers"));
      main.append(h("div", { class: "card tablecard scrollx" }, h("table", { class: "ptable" },
        h("tr", null, h("th", null, "한국어"), h("th", null, "English")),
        PHRASES.numberExamples.map(w => h("tr", null, h("td", { class: "h", style: "color:var(--text)" }, w.kr), h("td", { class: "e" }, w.en))))));
    }
  }

  // ---------- IR Core English — study deck (list / flashcards) ----------
  function studyItems() {
    const decks = state.studyDeck === "all" ? STUDY : STUDY.filter(d => d.id === state.studyDeck);
    const out = [];
    decks.forEach(d => d.items.forEach((it, i) => { if (it.t <= state.studyTier) out.push({ ...it, deck: d, key: d.id + ":" + i }); }));
    return out;
  }
  function renderStudy(main) {
    const all = studyItems();
    const knownSet = new Set(state.known);
    const setS = (k, v) => { state[k] = v; store.set(k, v); state.studyIdx = 0; state.studyFlip = false; state.studyOrder = null; render(); };
    // deck chips
    main.append(h("div", { class: "chips catrow" },
      h("button", { class: "chip" + (state.studyDeck === "all" ? " sel" : ""), onclick: () => setS("studyDeck", "all") }, "All decks"),
      STUDY.map(d => h("button", { class: "chip" + (state.studyDeck === d.id ? " sel" : ""), onclick: () => setS("studyDeck", d.id) }, d.titleKr.split(" — ")[0]))));
    // controls
    const tierBtn = (n, l) => h("button", { class: "tool" + (state.studyTier === n ? " on" : ""), onclick: () => setS("studyTier", n) }, l);
    const total = studyItems().length, knownN = studyItems().filter(i => knownSet.has(i.key)).length;
    main.append(h("div", { class: "modebar" },
      h("button", { class: "tool" + (state.studyMode === "list" ? " on" : ""), onclick: () => setS("studyMode", "list") }, "☰ List"),
      h("button", { class: "tool" + (state.studyMode === "cards" ? " on" : ""), onclick: () => setS("studyMode", "cards") }, "🃏 Flashcards"),
      h("span", { class: "sep" }),
      tierBtn(1, "필수"), tierBtn(2, "+권장"), tierBtn(3, "+심화"),
      h("span", { class: "kr modehint" }, `${knownN} / ${total} 외움`),
      h("button", { class: "tool", onclick: () => { if (confirm("외운 표시를 모두 지울까요?")) { state.known = []; store.set("known", []); render(); } } }, "↺ reset")));
    const deck = state.studyDeck === "all" ? null : STUDY.find(d => d.id === state.studyDeck);
    if (deck && deck.tip) main.append(h("div", { class: "status", style: "margin-bottom:12px" }, "💡 " + deck.tip));

    if (state.studyMode === "list") {
      let lastDeck = null;
      const card = h("div", { class: "card slist" });
      for (const it of all) {
        if (it.deck.id !== lastDeck) { lastDeck = it.deck.id; card.append(h("div", { class: "ahead" }, it.deck.titleKr, h("span", null, it.deck.title))); }
        const known = knownSet.has(it.key);
        card.append(h("div", { class: "sitem" + (known ? " known" : "") },
          h("button", { class: "kbox", title: "외웠음", onclick: () => { toggleKnown(it.key); render(); } }, known ? "✓" : ""),
          h("div", { class: "stxt" },
            h("div", { class: "sen" }, it.en, h("span", { class: "tier t" + it.t }, it.t === 1 ? "필수" : it.t === 2 ? "권장" : "심화")),
            h("div", { class: "skr" }, it.kr),
            it.ex ? h("div", { class: "sex" }, "“" + it.ex + "”", it.exKr ? h("span", { class: "sexk" }, " — " + it.exKr) : null) : null)));
      }
      if (!all.length) card.append(h("div", { class: "aempty" }, "No items."));
      main.append(card);
      return;
    }

    // flashcards — default: show Korean, recall English (active recall for speaking)
    const pool = all.filter(i => !knownSet.has(i.key));
    if (!state.studyOrder || state.studyOrder.length !== pool.length) { state.studyOrder = pool.map((_, i) => i); state.studyIdx = 0; }
    if (!pool.length) { main.append(h("div", { class: "card", style: "padding:28px;text-align:center" }, h("div", { style: "font-size:1.3rem;font-weight:800" }, "All done 🎉"), h("div", { class: "kr", style: "margin-top:6px" }, "이 범위는 다 외웠습니다. 범위를 넓히거나 reset 하세요."))); return; }
    const it = pool[state.studyOrder[state.studyIdx % pool.length]];
    const k2e = state.studyDir === "kr2en";
    const front = k2e ? it.kr : it.en, back = k2e ? it.en : it.kr;
    const frontEx = k2e ? it.exKr : it.ex, backEx = k2e ? it.ex : it.exKr;
    const fc = h("div", { class: "card fcard" + (state.studyFlip ? " flip" : ""), onclick: () => { state.studyFlip = !state.studyFlip; render(); } },
      h("div", { class: "fdeck" }, it.deck.titleKr.split(" — ")[0], h("span", { class: "tier t" + it.t }, it.t === 1 ? "필수" : it.t === 2 ? "권장" : "심화"), h("span", { class: "fpos" }, `${(state.studyIdx % pool.length) + 1} / ${pool.length}`)),
      h("div", { class: "fface" }, h("div", null, h("div", null, front), frontEx ? h("div", { class: "fex" }, "“" + frontEx + "”") : null)),
      state.studyFlip ? h("div", { class: "fback" }, h("div", { class: "fans" }, back), backEx ? h("div", { class: "sex" }, "“" + backEx + "”") : null) : h("div", { class: "fhint kr" }, "탭하면 답이 보입니다 · Space"));
    const nav = h("div", { class: "fnav" },
      h("button", { class: "big ghost", onclick: () => { state.studyFlip = false; state.studyIdx = (state.studyIdx - 1 + pool.length) % pool.length; render(); } }, "← Prev"),
      h("button", { class: "big know", onclick: () => { toggleKnown(it.key); state.studyFlip = false; state.studyOrder = null; render(); } }, "✓ 외웠음"),
      h("button", { class: "big", onclick: () => { state.studyFlip = false; state.studyIdx = (state.studyIdx + 1) % pool.length; render(); } }, "Next →"));
    const opts = h("div", { class: "modebar", style: "margin-top:10px" },
      h("button", { class: "tool" + (state.studyDir === "kr2en" ? " on" : ""), onclick: () => setS("studyDir", "kr2en") }, "한 → 영 (말하기)"),
      h("button", { class: "tool" + (state.studyDir === "en2kr" ? " on" : ""), onclick: () => setS("studyDir", "en2kr") }, "영 → 한 (듣기)"),
      h("button", { class: "tool", onclick: () => { const o = pool.map((_, i) => i); for (let i = o.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [o[i], o[j]] = [o[j], o[i]]; } state.studyOrder = o; state.studyIdx = 0; state.studyFlip = false; render(); } }, "🔀 Shuffle"));
    main.append(fc, nav, opts);
  }
  function toggleKnown(key) { const i = state.known.indexOf(key); if (i < 0) state.known.push(key); else state.known.splice(i, 1); store.set("known", state.known); }

  // ---------- number converter (KR 억/조 ↔ EN billion/trillion) ----------
  function convert(raw) {
    const s = raw.trim(); if (!s) return null;
    const flat = s.replace(/,/g, "").replace(/\s+/g, "");
    const kUnit = /(조|억|만)/.test(flat);
    const eUnit = /(trillion|billion|million|thousand|tn|bn|mn|mm|m|k)\b/i.test(s);
    // currency / unit
    let unitKr = "원", unitEn = "won";
    if (/달러|\$|dollar|usd/i.test(s)) { unitKr = "달러"; unitEn = "dollars"; }
    else if (/유로|€|euro|eur/i.test(s)) { unitKr = "유로"; unitEn = "euros"; }
    else if (/톤|tons?\b/i.test(s)) { unitKr = "톤"; unitEn = "tons"; }
    else if (/주(?!당)|shares?\b/i.test(s)) { unitKr = "주"; unitEn = "shares"; }
    const perShare = /주당|per share/i.test(s);

    let value = null, dir = null;
    if (kUnit) {
      dir = "kr→en";
      const re = /(\d+(?:\.\d+)?)(조|억|만)?/g; let m, sum = 0, any = false;
      const num = flat.replace(/[^\d.조억만]/g, "");
      while ((m = re.exec(num))) { any = true; const n = parseFloat(m[1]); const u = m[2] === "조" ? 1e12 : m[2] === "억" ? 1e8 : m[2] === "만" ? 1e4 : 1; sum += n * u; }
      if (!any) return null; value = sum;
    } else if (eUnit) {
      dir = "en→kr";
      const re = /(\d+(?:\.\d+)?)\s*(trillion|billion|million|thousand|tn|bn|mn|mm|m|k)\b/gi; let m, sum = 0, any = false;
      while ((m = re.exec(s))) { any = true; const n = parseFloat(m[1]); const u = m[2].toLowerCase(); const mult = /^(trillion|tn)$/.test(u) ? 1e12 : /^(billion|bn)$/.test(u) ? 1e9 : /^(million|mn|mm|m)$/.test(u) ? 1e6 : 1e3; sum += n * mult; }
      if (!any) return null; value = sum;
    } else {
      const n = parseFloat(flat.replace(/[^\d.]/g, "")); if (isNaN(n)) return null;
      value = n; dir = "plain";
    }
    const en = toEnglish(value, unitEn, perShare), kr = toKorean(value, unitKr, perShare);
    return { dir, en, kr, value };
  }
  function trim(n, d) { return (+n.toFixed(d)).toLocaleString("en-US", { maximumFractionDigits: d }); }
  function toEnglish(v, unit, perShare) {
    const money = /won|dollars|euros/.test(unit);
    let main, alt = "";
    if (v >= 1e12) { main = `${trim(v / 1e12, 2)} trillion`; alt = `${trim(v / 1e9, 1)} billion`; }
    else if (v >= 1e9) { main = `${trim(v / 1e9, 2)} billion`; alt = `${trim(v / 1e6, 0)} million`; }
    else if (v >= 1e6) { main = `${trim(v / 1e6, 2)} million`; }
    else if (v >= 1e4 && !money) { main = `${trim(v / 1e3, 1)} thousand`; }
    else main = trim(v, 2);
    const u = perShare ? `${money ? unit : "won"} per share` : unit;
    return { main: `${main} ${u}`, alt: alt ? `${alt} ${u}` : "" };
  }
  function toKorean(v, unit, perShare) {
    const parts = [];
    let rest = v;
    const jo = Math.floor(rest / 1e12); if (jo) { parts.push(`${jo.toLocaleString("ko-KR")}조`); rest -= jo * 1e12; }
    if (v >= 1e8) {
      const eok = rest / 1e8;
      if (eok > 0) parts.push(`${(+eok.toFixed(1)).toLocaleString("ko-KR", { maximumFractionDigits: 1 })}억`);
    } else if (v >= 1e4 && !/원|달러|유로/.test(unit)) {
      parts.push(`${(+(rest / 1e4).toFixed(1)).toLocaleString("ko-KR", { maximumFractionDigits: 1 })}만`);
    } else parts.push(trim(rest, 2));
    const body = parts.join(" ");
    if (perShare) return `주당 ${body}${/원|달러|유로/.test(unit) ? unit : "원"}`;
    return `${body}${unit}`;
  }
  function renderConverter() {
    const out = h("div", { class: "out" }, h("b", null, "—"), h("span", null, "예: 1조 8,060억 / 1,289억원 / 6.5억달러 / 128.9 billion / 650 million dollars / 17 million shares"));
    const input = h("input", { type: "text", placeholder: "숫자 입력: 1,289억원  또는  128.9 billion", autocomplete: "off", inputmode: "text" });
    const paint = () => {
      const r = convert(input.value);
      if (!r) { out.innerHTML = ""; out.append(h("b", null, "—"), h("span", null, "억·조·만 또는 billion·trillion·million 단위를 포함해 입력")); return; }
      out.innerHTML = "";
      if (r.dir === "kr→en") out.append(h("b", null, r.en.main), h("span", null, r.en.alt ? `also: ${r.en.alt}` : ""));
      else if (r.dir === "en→kr") out.append(h("b", null, r.kr), h("span", null, `= ${r.en.main}`));
      else out.append(h("b", null, r.en.main), h("span", null, r.kr));
    };
    input.addEventListener("input", paint);
    const ex = ["1조 8,060억원", "1,289억원", "373억원", "6.5억달러", "16.4억달러", "1,700만주", "128.9 billion", "2 trillion won", "650 million dollars", "300 thousand shares"];
    return h("div", { class: "card conv" },
      h("label", null, "Number converter — 억·조 ↔ billion·trillion"),
      h("div", { class: "row" }, input),
      out,
      h("div", { class: "ex chips" }, ex.map(e => h("button", { class: "chip", onclick: () => { input.value = e; paint(); } }, e))),
      h("div", { class: "hint kr" }, "1억 = 100 million · 1,000억 = 100 billion · 1조 = 1 trillion. 말할 때는 소수 한 자리까지만 (128.9 billion)."));
  }

  // =====================================================================
  // FACTS — quick reference
  // =====================================================================
  function renderFacts(main, r) {
    main.append(h("div", { class: "chips catrow" }, FACTS.map(g => h("button", { class: "chip", onclick: () => { const el = document.getElementById("f-" + g.id); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); } }, (g.icon || "") + " " + g.title.split(" — ")[0]))));
    for (const g of FACTS) {
      const card = h("div", { class: "card fgroup", id: "f-" + g.id, style: "scroll-margin-top:calc(var(--hdr) + 12px)" });
      card.append(h("h3", null, g.icon ? h("span", null, g.icon) : null, g.title));
      if (g.note) card.append(h("div", { class: "note kr" }, g.note));
      for (const row of g.rows) card.append(h("div", { class: "frow" }, h("div", { class: "l" }, row[0]), h("div", { class: "v" }, row[1]), row[2] ? h("div", { class: "s" }, row[2]) : null));
      main.append(card);
    }
  }

  // =====================================================================
  // lock screen
  // =====================================================================
  function initLock() {
    const lock = $("#lock");
    if (!CFG.passcode || store.get("unlocked", false)) { lock.remove(); return; }
    const err = $(".err", lock), inp = $("input", lock);
    $("form", lock).addEventListener("submit", e => {
      e.preventDefault();
      if (inp.value.trim() === String(CFG.passcode)) { store.set("unlocked", true); lock.remove(); }
      else { err.textContent = "Incorrect passcode."; inp.value = ""; inp.focus(); }
    });
    setTimeout(() => inp.focus(), 50);
  }

  // ---------- boot ----------
  applyScale(); applyTheme(); bindControls(); initLock(); render();
  if (window.matchMedia) window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => { if (!state.theme) applyTheme(); });
})();
