// ============================================================
// KCC IR Meet — 설정
// 분기마다 바꿀 것: quarter, asOf, status
// passcode: ''(빈 문자열)로 두면 잠금 화면 없이 바로 열림
// ============================================================
window.KCC_CONFIG = {
  appName: "KCC IR Meet",
  version: "v5.0",
  quarter: "3Q 2026",
  asOf: "2026-11-02",
  // 3Q 잠정공시 전/후 안내 문구 (공시 후 빈 문자열로)
  status: "3Q 잠정공시 전 — 수치는 ‘방향성’으로만. [ ]는 공시 후 채움.",
  passcode: "kccir",
  // 통역 동반 미팅이 기본이면 true (ANSWER 카드에서 국문 핵심을 먼저 보여줌)
  interpreterDefault: false,
};
