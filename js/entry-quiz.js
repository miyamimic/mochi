(function () { try {
/* ===== 功能：入站问卷（开屏「点击进入」后跳转的页面 · 答对全部题才能进入） =====
归属：开屏/入口验证（AI-B 域）。build.mjs jsFiles 插在 clock.js 之后加载。
触发：clock.js 的 finishEnter（点【我已阅读并知晓】/【仍要进入】的收尾）调用
window.mochiEntryQuizGate(finishEnter)；已放行则原样放行，未放行则跳转到问卷页。
页面（不是弹层）：问卷作为 .splash 容器内的一个整页子节点（.eqz-page），
显示期间给 #splash 挂 .eqz-active、把 .splash-box / .splash-footcard 收起——
与开屏同层（.splash 的 z-index 999），不新建遮罩、不改任何图层/z-index。
数据：全局根键 xy-home-v2:entry-quiz-pass（存 {t:时间戳, v:问卷版本}；已进 contacts.js EXCLUDE）。
答对全部题＝本机永久放行；问卷内容改版（QUIZ_VER 变化）后自动失效＝需重新作答一次。
题库：全部 24 题（单选/多选），首位 1 题为「本站内容与功能使用」（作者 2026-10-16 直派新增），
其后 22 题沿用作者《Mochi 字卡网站规则认知测试》原文（#1562 起原第 9/10 题合并为一道多选），
末位 1 题为公告第 8 章「电子网站会连上鬼」传闻（作者 2026-10-15 改写，见 #1551）。
自动化：无头/回归环境（webdriver / Headless UA）直接放行，避免 278 个回归脚本被挡在门外。
无法关闭：没有取消入口，只能答对（明文不含答案，选项即题面）。
====================================================== */
(function () {
'use strict';
window.mochiEntryQuizPassed = () => true;
window.mochiEntryQuizGate = (next) => { if (next) next(); };
window.__entryQuizReady = true;
})();
if (window.__mochiLoaded) window.__mochiLoaded.push("entry-quiz.js");
} catch (__e) { if (window.__mochiErrLoaded) window.__mochiErrLoaded.push("entry-quiz.js"); try { console.error("[JS] entry-quiz.js", __e && __e.message || __e); } catch (x) {} if (window.__jsErrors) window.__jsErrors.push("[entry-quiz.js] " + String(__e && __e.message || __e)); } })();