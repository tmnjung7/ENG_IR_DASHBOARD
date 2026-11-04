// IR Core English 암기 덱 → 가로형 A4 PDF (태블릿용)
// 사용:  node scripts/build-study-pdf.mjs [fontDir] [outPath]
//   fontDir: Pretendard otf(Regular/SemiBold/Bold/ExtraBold)가 있는 폴더 (없으면 시스템 폰트)
//   outPath: 기본 docs/IR_Core_English.pdf
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const pw = require(fs.existsSync("/opt/node-tools/node_modules/playwright") ? "/opt/node-tools/node_modules/playwright" : "playwright");

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const fontDir = process.argv[2] || "";
const out = process.argv[3] || path.join(root, "docs", "IR_Core_English.pdf");
global.window = {};
require(path.join(root, "data", "study.js"));
const DECKS = window.KCC_STUDY;
const CFG = { asOf: new Date().toISOString().slice(0, 10) };

const esc = s => String(s).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
const face = (w, file) => fontDir && fs.existsSync(path.join(fontDir, file)) ? `@font-face{font-family:P;src:url("file://${path.join(fontDir, file)}");font-weight:${w}}` : "";
const fonts = [face(400, "Pretendard-Regular.otf"), face(600, "Pretendard-SemiBold.otf"), face(700, "Pretendard-Bold.otf"), face(800, "Pretendard-ExtraBold.otf")].join("\n");
const tierName = t => t === 1 ? "필수" : t === 2 ? "권장" : "심화";
const total = DECKS.reduce((a, d) => a + d.items.length, 0);
const t1 = DECKS.reduce((a, d) => a + d.items.filter(i => i.t === 1).length, 0);

const cover = `
<section class="cover">
  <div class="brand">KCC IR · English</div>
  <h1>IR Core English</h1>
  <div class="sub">IR 영어 필수 표현 ${total}개 · 10개 덱 · 필수 ${t1} / 권장 / 심화</div>
  <div class="how">
    <div><b>읽는 법</b> 왼쪽 영문을 가리고 한글만 보고 말해 보세요(한→영). 되면 □에 체크. 예문은 그대로 외우는 문장입니다.</div>
    <div><b>순서 추천</b> ⑧ 문장 틀 → ③ 전망·단서 → ① 증감 → ⑦ Q&amp;A 12문장 → 나머지. 로우 어드밴스드에서 체감이 가장 큰 것은 단어보다 <b>틀</b>입니다.</div>
    <div><b>표시</b> <span class="tier t1">필수</span> 먼저, <span class="tier t2">권장</span>은 두 번째 회독, <span class="tier t3">심화</span>는 여유 있을 때.</div>
  </div>
  <table class="toc">
    ${DECKS.map((d, i) => `<tr><td class="n">${i + 1}</td><td class="k">${esc(d.titleKr.replace(/^[①-⑩]\s*/, ""))}</td><td class="e">${esc(d.title)}</td><td class="c">${d.items.filter(x => x.t === 1).length} / ${d.items.length}</td></tr>`).join("")}
  </table>
  <div class="foot">KCC Corporation · 재정팀(IR) · ${CFG.asOf} · 회사 무관 범용 표현 — 외부 배포 무방</div>
</section>`;

const decks = DECKS.map((d, i) => `
<section class="deck">
  <div class="dh">
    <div class="dn">${i + 1}</div>
    <div class="dt"><div class="k">${esc(d.titleKr.replace(/^[①-⑩]\s*/, ""))}</div><div class="e">${esc(d.title)}</div></div>
    <div class="dc">${d.items.filter(x => x.t === 1).length} 필수 · ${d.items.length} 총</div>
  </div>
  ${d.tip ? `<div class="tip">💡 ${esc(d.tip)}</div>` : ""}
  <table class="items">
    <thead><tr><th class="cb"></th><th class="en">English</th><th class="kr">뜻 · 쓰임</th><th class="ex">예문 (그대로 외우기)</th><th class="tt"></th></tr></thead>
    <tbody>
    ${d.items.map(it => `<tr class="t${it.t}"><td class="cb"><span class="box"></span></td><td class="en">${esc(it.en)}</td><td class="kr">${esc(it.kr)}</td><td class="ex">${it.ex ? "“" + esc(it.ex) + "”" : ""}</td><td class="tt"><span class="tier t${it.t}">${tierName(it.t)}</span></td></tr>`).join("")}
    </tbody>
  </table>
</section>`).join("");

const html = `<!DOCTYPE html><html lang="ko"><head><meta charset="utf-8"><title>IR Core English</title>
<style>
${fonts}
@page{size:A4 landscape;margin:11mm 12mm 13mm 12mm}
*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{font-family:P,"Pretendard","Apple SD Gothic Neo","Malgun Gothic","WenQuanYi Zen Hei",sans-serif;color:#0F172A;font-size:11pt;line-height:1.4;word-break:keep-all}
.cover{break-after:page;padding:2mm 4mm 0}
.cover .brand{color:#64748B;font-weight:700;font-size:11pt;letter-spacing:.5px}
.cover h1{font-size:32pt;font-weight:800;color:#002D56;margin:2mm 0 1mm;letter-spacing:-1px}
.cover .sub{font-size:12.5pt;color:#1F3864;font-weight:600;margin-bottom:4mm}
.cover .how{display:grid;grid-template-columns:1fr 1fr 1fr;gap:4mm;margin-bottom:4mm}
.cover .how div{background:#F4F6FA;border:1px solid #E2E8F0;border-radius:3mm;padding:3mm;font-size:9.5pt;line-height:1.45}
.toc{width:100%;border-collapse:collapse;font-size:10pt}
.toc td{padding:1.2mm 3mm;border-top:1px solid #E2E8F0;white-space:nowrap}
.toc .n{width:9mm;font-weight:800;color:#002D56}
.toc .k{font-weight:700;width:95mm}
.toc .e{color:#64748B}
.toc .c{text-align:right;color:#64748B;font-variant-numeric:tabular-nums;width:22mm}
.cover .foot{margin-top:3mm;color:#94A3B8;font-size:8.5pt}
.deck{break-before:page}
.dh{display:flex;align-items:center;gap:4mm;background:#002D56;color:#fff;border-radius:3mm;padding:3mm 5mm;margin-bottom:2.5mm}
.dn{font-size:20pt;font-weight:800;width:12mm;text-align:center;background:rgba(255,255,255,.14);border-radius:2mm;padding:1mm 0}
.dt .k{font-size:15pt;font-weight:800}
.dt .e{font-size:10pt;opacity:.8}
.dc{margin-left:auto;font-size:10pt;opacity:.85;font-variant-numeric:tabular-nums}
.tip{background:#FFF7E0;border:1px solid #EAD98C;color:#7F6000;border-radius:2.5mm;padding:2mm 4mm;font-size:10pt;margin-bottom:3mm;font-weight:600}
table.items{width:100%;border-collapse:collapse;table-layout:fixed}
.items thead th{font-size:8.5pt;color:#64748B;text-align:left;font-weight:800;letter-spacing:.5px;text-transform:uppercase;padding:0 2.5mm 1.5mm;border-bottom:1.5px solid #CBD5E1}
.items tbody tr{break-inside:avoid}
.items td{padding:1.9mm 2.5mm;border-bottom:1px solid #E2E8F0;vertical-align:top}
.items .cb{width:8mm}
.items .box{display:inline-block;width:4.6mm;height:4.6mm;border:1.4px solid #94A3B8;border-radius:1.2mm;margin-top:.6mm}
.items .en{width:36%;font-weight:800;font-size:12pt;line-height:1.3;color:#0F172A}
.items .kr{width:24%;font-size:10.5pt;color:#334155}
.items .ex{font-size:10.5pt;color:#1F3864;font-style:italic}
.items .tt{width:13mm;text-align:right}
.tier{display:inline-block;font-size:7.5pt;font-weight:800;padding:.6mm 2mm;border-radius:99px;font-style:normal;vertical-align:middle}
.tier.t1{background:#FDE2E2;color:#9F1D1D}.tier.t2{background:#FFF1CC;color:#7A5200}.tier.t3{background:#EDF1F9;color:#1F3864}
tr.t2 .en{color:#334155}tr.t3 .en{color:#475569;font-weight:700}
</style></head><body>${cover}${decks}</body></html>`;

const tmpHtml = path.join(root, "docs", ".study-print.html");
fs.writeFileSync(tmpHtml, html);
const browser = await pw.chromium.launch();
const page = await browser.newPage();
await page.goto("file://" + tmpHtml, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await page.pdf({
  path: out, format: "A4", landscape: true, printBackground: true, preferCSSPageSize: true,
  displayHeaderFooter: true, headerTemplate: "<span></span>",
  footerTemplate: `<div style="width:100%;font-family:sans-serif;font-size:8px;color:#94A3B8;padding:0 12mm;display:flex;justify-content:space-between"><span>IR Core English · KCC IR</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`
});
await browser.close();
fs.unlinkSync(tmpHtml);
console.log("wrote", out, Math.round(fs.statSync(out).size / 1024), "KB");
