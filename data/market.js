// ============================================================
// SILICONE › Market — 실리콘 시황·원재료 동향 (중국 DMC 중심)
// 출처: IR 정리본(2026.10, SunSirs·증권일보 기반). 월 1회 갱신 권장.
// 원칙: say[] = 미팅에서 그대로 쓰는 문장(수치 없음) · ref[] = 참고 데이터(직접 인용 지양, 추세로만)
//       피어 개별 실적 수치·경쟁사 신제품 진척도는 넣지 않음 (벤치마킹 유발)
// ============================================================
window.KCC_MARKET = {
  asOf: "2026-10",
  title: "China silicone / DMC market — October 2026",
  titleKr: "중국 실리콘·DMC 시황 — 2026년 10월",
  headline: {
    en: "The market passed the bottom in late 2025 and is in a clear rebound cycle. Supply is tight with no new capacity, and demand is shifting from construction to specialty end-markets.",
    kr: "2025년 4분기 바닥 통과 후 뚜렷한 반등 사이클. 신규 증설 없이 공급 타이트, 수요는 건축에서 스페셜티(AI DC·전기차·ESS·태양광)로 재편."
  },
  say: [
    { en: "Global silicone markets, including China, have entered a firm price-recovery cycle after a long period of supply restructuring. The oversupply concern has been resolved.", kr: "장기 공급 구조조정 이후 확고한 가격 반등 사이클 진입. 과잉 우려 해소." },
    { en: "There has been no meaningful new DMC capacity in China this year, and leading producers are self-regulating utilisation. That is why spot inventories are tight.", kr: "올해 중국 신규 DMC 증설 사실상 없음, 선도 기업 가동률 자율 규제 → 스팟 재고 타이트." },
    { en: "Demand that used to be concentrated in construction is being rebuilt around AI data-centre thermal materials, large energy-storage systems and electric vehicles. That is a qualitative upgrade of the end-market mix.", kr: "건축 편중 수요 → AI DC 열관리·대형 ESS·전기차 중심 재편. 질적 믹스 개선." },
    { en: "Recent buying has been real demand through the autumn peak season, not speculative stocking, so price increases have met little resistance.", kr: "가을 성수기 실수요 매입, 투기적 매집 아님 → 인상 저항 낮음." },
    { en: "Industry fundamentals have turned. Major Chinese peers returned to strong profit growth in the first half. Our exposure is more specialty than commodity DMC, so our benefit comes through mix and pricing rather than spot prices.", kr: "산업 펀더멘털 반등(피어 상반기 이익 급증 — 수치 금지). 당사는 스페셜티 비중이라 스팟보다 믹스·가격으로 수혜." }
  ],
  caution: [
    { kr: "경쟁사의 AI 액침냉각 상용화를 물으면 특정 기업 비교를 피하고 “산업 전반적으로 하이엔드 비중이 커지는 믹스 개선 추세”로 포괄 답변.", en: "On a peer’s immersion-cooling progress: “Across the industry, high-end applications are taking a larger share — a positive mix trend.”" },
    { kr: "당사의 AI 냉각재 등 미확정 신소재 진행 상황을 연상시키지 않기. 기존 문구(“meaningful early orders, scaling step by step”)까지만.", en: "Do not imply KCC immersion-cooling products; stay with the existing thermal-management line." },
    { kr: "4분기는 성수기 종료 후 다운스트림 재고 소진 속도가 변수 — 반등을 과장하지 않기.", en: "Q4 off-season destocking is a watch item; do not overstate the rebound." }
  ],
  avoid: [
    { en: "Peer 1H26 earnings figures (e.g. net profit up several hundred percent)", kr: "중국 피어 1H26 실적 수치 직접 제시" },
    { en: "Spot price levels (e.g. 14,500 RMB/t) — say ‘a trend-based rebound’ instead", kr: "스팟 가격 직접 제시 — ‘추세적 반등세’로 갈음" },
    { en: "Named competitors’ new-product or certification progress", kr: "특정 경쟁사 신제품·인증 진척도 인용" },
    { en: "China JV utilisation, the word ‘sales’ for the JV, and our internal pricing calendar", kr: "중국 JV 가동률·‘판매’ 표현, 당사 내부 가격 일정" }
  ],
  ref: {
    note: "Reference data — in meetings, describe the trend, not the number.",
    noteKr: "참고 데이터 — 미팅에서는 수치 대신 추세로 말합니다.",
    price: [
      { when: "Oct 2025", v: "~10,000", s: "near the low", kr: "저점권" },
      { when: "mid-2025", v: "bottom", s: "cycle low", kr: "바닥 통과" },
      { when: "early Sep 2026", v: "~13,600", s: "", kr: "" },
      { when: "15 Oct 2026", v: "~14,500", s: "Shandong spot; methanol cost up + peak season", kr: "산둥 스팟, 메탄올 원가 상승 + 성수기" },
      { when: "mid-Oct 2026", v: "14,500–14,800", s: "settled after the jump", kr: "급등 후 안착" }
    ],
    priceUnit: "DMC spot, RMB/t",
    metrics: [
      { l: "Silicon metal", v: "~9,600–9,700 RMB/t", s: "long downtrend since early 2024, now flat → spread with DMC widened" },
      { l: "New DMC capacity 1H26", v: "0 t", s: "total ~3.44 Mt unchanged" },
      { l: "Utilisation", v: "~61%", s: "joint production cuts, self-regulated (Aug reference)" },
      { l: "Peak season", v: "Sep–Oct", s: "real-demand restocking; Q4 off-season = watch item" }
    ],
    demand: [
      { l: "AI data centres", s: "silicone thermal fluids (immersion cooling) and TIM for LLM/supercomputing heat; peers launching cooling fluids" },
      { l: "NEV & large ESS", s: "far more silicone per vehicle than ICE; outdoor ESS needs weather- and flame-resistant specialty grades" },
      { l: "Solar (PV)", s: "dual-glass and N-type modules raise silicone use per area — turning up again" },
      { l: "Construction / real estate", s: "legacy demand base; share of the mix shrinking" }
    ],
    watch: [
      "Cost floor: silicon metal and methanol cost increases vs DMC price — does the spread hold?",
      "Q4 off-season: downstream inventory digestion after Sep–Oct peak",
      "Peer specialty progress: immersion-cooling fluids, high-purity silicon — follow commercial scale-up"
    ]
  }
};
