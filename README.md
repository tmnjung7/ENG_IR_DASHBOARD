# KCC IR Meet — 영문 IR 미팅용 치트 대시보드

외국인 투자자 미팅(Zoom·대면) 중 **30초 안에 입을 열게 해주는** 발화 보조 도구입니다.
정보 저장소가 아니라 **미팅 중에만 쓰는 화면**입니다. 빌드 없이 정적 파일만으로 동작하며 Vercel에 그대로 배포됩니다.

> 역할 분리: 내부 준비용(MBR·이사회·금지 리스트 포함)은 기존 `kcc_ir.html`(암호화)이고,
> 이 저장소는 **대외 발언 가능한 문장만** 담습니다. 그래서 암호화 대신 가벼운 패스코드만 둡니다.

## 네 가지 모드

| 모드 | 용도 | 조작 |
|---|---|---|
| **SPEAK** | 오늘 쓸 스크립트 1개를 텔레프롬프터처럼. 문단당 2~3문장, 글자 크게, 문단 위에 숫자 칩 | `←` `→` / 스페이스 / 좌우 스와이프 / 화면 탭(왼쪽 1/3 = 뒤로) · `K` 한글 요지 · `T` 타이머 · `Esc` 목차 |
| **ANSWER** | 질문 유형 19개 큰 버튼 → ① 고정 문장 ② Core answer 한 문장 ③ 근거 2~4문장 ④ 숫자 3개 ⑤ 통역용 국문 핵심 ⑥ 병기 용어 ⑦ 발언 경계선 | 버튼 탭 · `←` `→` 카드 이동 · `Esc` 격자 복귀 · **With interpreter** 토글 시 국문이 먼저·크게 |
| **PHRASES** | 생존영어(상황별) · 쉬운 단어 사전(dip→fall) · 발음(강세) · 숫자 변환기(억·조 ↔ billion·trillion) · 흔한 실수 | 하위 탭 |
| **FACTS** | 미팅마다 흔들리지 않게 못 박는 **고정 문장** + 2Q 확정 수치 · 재무 · 환원 · 실리콘 KPI | 칩으로 점프 |

공통: 상단 **한글** 토글(모드별로 기억, SPEAK는 기본 숨김), **A− / A+** 글자 크기, **🌓** 다크 모드. 모두 기기(localStorage)에 저장됩니다.

## 파일 구조 — 어디를 고치면 되나

```
index.html          화면 뼈대 (거의 손댈 일 없음)
assets/app.css      스타일 (kccirdashboard 네이비 팔레트)
assets/app.js       동작 (라우팅·프롬프터·변환기)
data/config.js      ★ 분기 라벨, 상태 문구, 패스코드
data/scripts.js     ★ SPEAK 스크립트 (분기마다 교체)
data/answers.js     ★ ANSWER 19개 카드 (수치·문장 갱신)
data/phrases.js     PHRASES (분기 무관, 유지)
data/facts.js       ★ FACTS 숫자표 (확정 분기로 교체)
```

### 분기 업데이트 순서 (예: 3Q 잠정공시 후)
1. `data/config.js` — `quarter`, `asOf` 수정, `status` 문구를 빈 문자열로(공시 전 경고 제거).
2. `data/scripts.js` — 맨 위 스크립트를 새 분기 것으로 교체. `[ ]` 자리를 확정 수치로.
3. `data/answers.js` — 각 카드의 `numbers`(3개)와 `support` 안의 분기 수치만 갱신. `fixed`/`core`는 스탠스가 바뀐 경우에만.
4. `data/facts.js` — `direction` 블록 삭제 또는 갱신, `confirmed` 블록을 최신 확정 분기로.
5. 커밋·푸시하면 Vercel이 자동 배포.

데이터 파일은 전부 `window.KCC_xxx = [...]` 형태의 일반 JS이므로 메모장에서도 수정할 수 있습니다. 문장 안에 큰따옴표(`"`)를 쓰려면 `\"`로 쓰거나 ‘ ’ 를 사용하세요.

### 내용 규칙
- **대외 발언 가능한 문장만.** 내부 추정치, MBR·이사회 수치, 고객사명, 특정 기관과의 비공개 대화는 넣지 않습니다.
- 한 문장 = 한 메시지, 12단어 이내 목표. 나열은 First / Second / Third.
- 쉬운 단어 우선 (dip→fall, lag→delay, core→main business, seasonality→summer slow season).
- 카드의 `hold`(여기까지만)는 발언 경계선을 한 줄로만 — 금지 리스트가 아닙니다.

## 배포 (Vercel)
1. Vercel → Add New Project → 이 저장소 Import.
2. Framework Preset: **Other**, Build Command: 비움, Output Directory: 비움(루트). `vercel.json`이 `cleanUrls`와 `noindex` 헤더를 설정합니다.
3. Deploy. 이후에는 `main`(또는 연결한 브랜치)에 푸시할 때마다 자동 배포.

패스코드는 `data/config.js`의 `passcode`입니다(기본 `kccir`). 빈 문자열이면 잠금 화면이 사라집니다.
클라이언트 측 잠금이라 **억제 장치일 뿐 보안이 아닙니다** — 그래서 내부 자료는 이 저장소에 넣지 않습니다.

## 폰·태블릿에 설치
- 배포 URL을 Safari/Chrome으로 열고 **홈 화면에 추가** → 전체화면 앱처럼 실행(매니페스트 포함).
- 대면 미팅: 세로 모드, 하단 탭 4개, 큰 버튼. PC 두 번째 모니터: 가로 모드, SPEAK 글자 2.3rem(A+로 더 키움).
- 네트워크 없는 곳: 폰트만 시스템 폰트로 대체되고 기능은 동일하게 동작합니다.

## 로컬 확인
```bash
python3 -m http.server 8765
# http://localhost:8765/
```

## 출처
3Q 외국인 주주 미팅 영문 스크립트 v1(10/26), 2Q 실적 10분 스크립트(8/25), 영문 치트시트 v4(10/01) 중 대외 발언 가능 부분, 영문 IR 미팅 툴 v5 설계 브리프, L1 Capital 미팅(10/26) 설계 포인트.
