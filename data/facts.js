// ============================================================
// FACTS — 숫자 빠른 참조 (대외 커뮤니케이션된 수치만)
// 분기 교체 시: 'confirmed' 블록을 최신 확정 분기로 교체, 'direction' 블록은 공시 후 삭제/갱신
// rows: [label, value, sub]
// ============================================================
window.KCC_FACTS = [
  {
    id: "unified", title: "Fixed Sentences — 미팅마다 흔들리지 않게", icon: "📌",
    note: "10/26 L1 Capital 미팅에서 흔들렸던 항목. 이 문장 그대로.",
    rows: [
      ["Special dividend formula", "≥50% of the C&T special dividend above its 2,500-won floor, pre-tax", "50% is a floor, not a ceiling"],
      ["Special dividend timing", "Full effect in the 2027 dividend, paid in 2028", "C&T pays first → we decide on dividends actually received"],
      ["Monetisation timing", "Intention on the record. No timetable today.", "review slowed; methods open (EB / sale / dividend-linked structure)"],
      ["C&T dividend growth multiple", "“Analyst estimates vary. They are not our guidance.”", "배수(7~8배 vs 10~15배)를 직접 말하지 않음"],
      ["Exchangeable vs convertible", "Exchangeable bond (EB) — exchangeable into Samsung C&T / KSOE shares", "convertible(전환사채) 아님"],
      ["Silicone full-year OP", "“Up on last year, but 100 billion won looks challenging.”", "여기까지만"],
      ["Q3 net profit", "“Valuation loss of around 2 trillion won. Mark-to-market, both ways.”", "소수점 수치 금지(공시 전)"],
      ["Momentive numbers", "“Momentive’s stand-alone numbers are not separately disclosed, but directionally …”", "달러 P&L·현금·계획 대비 수치 금지"],
      ["Momentive funding", "“Last year was refinancing. This year is investment. The goal is self-funding.”", "‘never again’ 단정 금지 — planned as the last"],
      ["Chinese competition", "“In commoditised products, yes — and we are not fighting on price there.”", ""]
    ]
  },
  {
    id: "direction", title: "3Q 2026 — Direction (pre-disclosure)", icon: "🧭",
    note: "공시 전 IR view(10/26). 공시 후 확정 수치로 교체.",
    rows: [
      ["Profitability vs Q2", "Somewhat lower", "summer slow season · raw-material delay · stronger won"],
      ["Cost-of-sales ratio", "+2–3 pts vs Q2", "paint & PVC windows most exposed; eases from ~Nov"],
      ["Net profit", "Valuation loss ~2tn won on Samsung C&T", "no other special items"],
      ["Q4", "Recovery", "purchasing costs and prices back to normal basis"],
      ["Silicone", "Down from Q2 → Q4 recovery", "low-end hurt by season; FX translation; FY EBITDA 12–13%"],
      ["Building materials", "Demand softer", "interior ↓, semiconductor initial volumes ↓, PVC windows cost+volume; gypsum stable"],
      ["Paint", "Below 1H profitability", "auto & marine demand continue; architectural weak; overseas growing"],
      ["Treasury shares", "~300k cancelled at year-end", "remainder by 3Q 2027"]
    ]
  },
  {
    id: "confirmed", title: "2Q 2026 — Confirmed (KRW bn)", icon: "✅",
    note: "2Q 잠정공시 기준. 유리장섬유 중단영업 재분류 후.",
    rows: [
      ["Revenue", "1,806.0", "+12.2% QoQ · +7.2% YoY"],
      ["Operating profit", "128.9", "+37.6% QoQ · −13.1% YoY · OPM 7.1%"],
      ["Net profit", "2,839.2", "almost all valuation gain (Samsung C&T)"],
      ["Q1 restated", "Revenue 1,609.7 · OP 93.6", "glass fiber → discontinued (OP was 88.1)"],
      ["Cost ratio / SG&A", "74.6% / 329.1", "SG&A +11.6%: payroll, R&D 60.3, freight"],
      ["Building Materials", "262.3 / 37.9", "+13.7% / +39.9% QoQ · strongest in 5 quarters · OPM 13–14%"],
      ["Paint", "545.9 / 48.5", "+15.9% / +6.0% QoQ · OP −25% YoY · margin ~9%"],
      ["Silicone", "885.4 / 37.3", "+9.8% QoQ · OP from 2.6 in Q1 · EBITDA 13.5%"],
      ["Others", "112.5 / 1.3", "ceramic-substrate capacity investment"]
    ]
  },
  {
    id: "balance", title: "Balance Sheet & Financial Assets (end-Jun 2026)", icon: "🏦",
    rows: [
      ["Gross debt", "5,265.5bn won", "−172bn in Q2"],
      ["Net debt", "~4tn won", "long-term: keep reducing"],
      ["Debt-to-equity", "91.7%", "from 114.8% (YE25) · target <100%"],
      ["Cash", "1,203bn won", "current ratio 91.5% = maturity reclassification, not deterioration"],
      ["Financial assets", "9.08tn fair value vs 1.45tn cost", "Samsung C&T 7.97tn (10.49%) · HD KSOE 0.97tn (3.91%)"],
      ["Avg funding rate", "<4%", "from 7–9% at acquisition · interest saved 100bn+/yr"],
      ["KSOE EB (Jul 2025)", "$650M · 1.75% · 5y · 30% premium", "refinanced Momentive high-cost debt"],
      ["Momentive bond (Oct 2025)", "$700M guaranteed", "remaining acquisition financing, <4% after swaps"],
      ["Momentive debt", "$1.64B → <$0.9B · 7.1% → 4.6%", "equity: $800M (2025, debt) · $100M (Jun 2026, capex — planned as last)"]
    ]
  },
  {
    id: "returns", title: "Shareholder Returns & Value-up", icon: "🎯",
    rows: [
      ["Dividend layer 1", "6,000 won per share floor", "paid through the cycle"],
      ["Dividend layer 2", "+10% of standalone OP above 100bn won", "base = stable domestic businesses"],
      ["Dividend layer 3", "≥50% of C&T special dividend (above 2,500 won), pre-tax", "remainder → debt repayment"],
      ["DPS FY2025", "15,000 won (+50%)", "26th consecutive year-end dividend"],
      ["Treasury cancellation", "13.2% of shares, 4 tranches by 3Q 2027", "1st done Apr 2026 · ~4% reserved for employees"],
      ["Targets", "PBR 0.5 (2028) · PBR ≥1.0 & ROE 10% (2030)", "unchanged"],
      ["Since Jul 2025 plan", "Price +79% · TSR 87.5% · ROE 23.5%", "ROE largely valuation-driven — say so"],
      ["Governance compliance", "86.7%", "2030 target met 4 years early"],
      ["Samsung C&T stake", "10.49% · 17m shares", "every 1,000 won of C&T special ≈ 17bn won to KCC"],
      ["Proceeds priority", "Silicone → balance sheet → returns", "decisions start from funding needs"]
    ]
  },
  {
    id: "silicone", title: "Silicone KPIs", icon: "🧪",
    rows: [
      ["Volume", "63kt → 66kt (Q1 → Q2)", "+4%; blended ASP ~+5% after April hike (+10–15% list)"],
      ["EBITDA margin", "9.5% → 13.5% (Q1 → Q2)", "FY 12–13% · 2028–29 target 16–17%"],
      ["Electronics", "12–13% of sales → 20% target", "margin high-30s · volume +10% QoQ"],
      ["Industrial (low-end)", "EBITDA −10% → −2%", "fixed-cost restructuring since 2025"],
      ["Cost-to-sales", "~80% → ~75%", "basic → specialty shift"],
      ["Currency mix", "~40% EUR · 20–30% USD", "stronger won lowers reported won revenue"],
      ["China", "joint cuts, utilisation ~61%", "commodity weak, specialty firm"],
      ["2030 target", "10tn won silicone revenue · global #2", "a target, not an organic forecast"],
      ["Silicon metal / DMC (China)", "~9,600–9,700 RMB/t flat · DMC 13,000–14,800 RMB/t", "DMC bottomed mid-2025; spread shows in margin"],
      ["Dow Europe", "~1/3 of European siloxane capacity (~140kt) closing", "Dow & Shin-Etsu raised prices again in Q2"]
    ]
  },
  {
    id: "momentive", title: "Momentive — Sayable Anchors (directional)", icon: "🌐",
    note: "8월 이사회 자료 기반. 🟢 정성 메시지만. 단독 P&L·현금·계획 대비 수치·고객사명·사업장은 말하지 않음.",
    rows: [
      ["Profitability", "1H pre-tax meaningfully better YoY; EBITDA broadly stable; interest far lower", "gap to own plan = execution (quality, delivery), not demand"],
      ["Demand", "Order intake well above last year; backlog healthy", "shortfall = orders not shipped on time (capacity bottlenecks, quality holds)"],
      ["Full year (directional)", "EBITDA around / slightly above last year; pre-tax clearly positive", "cost & cash actions in place"],
      ["Liquidity", "Strongest in several years", "2025: $800M equity → debt repaid; Jun 2026: $100M for capex programme"],
      ["Debt", "$1.64B → under $0.9B · 7.1% → 4.6%", "remaining acquisition financing: $700M guaranteed bond, <4% after swaps"],
      ["Strong / weak", "Strong: personal care, urethane additives, electronics, healthcare · Weak: tire & silanes, coatings · Industrial mixed", ""],
      ["Execution fixes", "New head of quality · SPC in every plant · lead time ~3 wks → ~1 wk", "KCC know-how transfer; Korea 18 months injury-free"],
      ["Big bets", "Thermal management · bio-pharma · next-gen tire silane (commercial decision 2028)", "no product names, no customer names"],
      ["Capex", "Stepping up after under-investment; 5-year plan to board in Nov", "no site-level comments"],
      ["IPO / spin-off", "IPO paused · no spin-off · no stake sale under review", ""]
    ]
  },
  {
    id: "segments", title: "Building Materials & Paint — Anchors", icon: "🏗️",
    rows: [
      ["Gypsum board", "60–70% domestic share · never a loss", "lags housing starts ~2 years"],
      ["Inorganic insulation", "55%+ share", "fixed-cost heavy; utilisation ~90% in Q2"],
      ["Housing recovery", "around early 2028 (our view)", "commercial first, housing later"],
      ["Marine coatings", "mid-teens margin · orders ~2x YoY · solid to 2028", "repair coatings growing double digits"],
      ["Auto coatings", "~10% margin", "market-linked pricing"],
      ["Architectural", "weak, mid-single-digit margin", "hard to pass through"],
      ["Paint FY target", "9–10% OP margin", "Q3 cost peak, Q4 normal"],
      ["Raw materials (vs Mar)", "toluene/xylene settled +15–25% · TiO2 +23%", "solvents first, resins later"]
    ]
  },
  {
    id: "engage", title: "IR & Governance", icon: "🤝",
    rows: [
      ["Analyst coverage", "3 → 7", ""],
      ["Investor meetings", "10+ per month · NDR each quarter", "English disclosure strengthened"],
      ["Foreign ownership", "21%+", ""],
      ["Truston", "1–2 meetings a quarter · proposal withdrawn", "latest ideas under internal review, reported to board"],
      ["Controlling family", "majority holding · next generation <2%", "“we suppress the price” is simply not true"]
    ]
  }
];
