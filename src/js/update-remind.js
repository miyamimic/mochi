/* ===== 功能：线上有新版 · 强制刷新提醒弹窗（移植自言字卡 update-check.js 的提醒层） =====
   归属：系统 / PWA / 开屏（AI-B 域）。build.mjs jsFiles 插在 pwa.js 之后加载。
   触发：pwa.js 版本轮询判出「线上 version.json 比本页构建 ts 新」（本页是旧缓存包）时调用
        window.mochiUpdateRemindShow()；已是最新＝不弹。静默自动升级（tryAutoUpgrade）照旧并行。
   层位：#splash 内的自绘遮罩卡——开屏期间 modal-mask 不可见（.phone 整棵 visibility:hidden、
        modal z-998 低于 splash z-999），不能用 openModal；与开屏同层，不新建全局遮罩、不改 z-index。
   动作：主动作只有「点击刷新」＝走 pwa.js 的 mochiRefreshNow（预取最新 index 落进 SW 缓存再
        reload，弱网根治「刷了还在旧版」）；下方留「暂不刷新」小字逃生口——离线/弱网刷不动时
        不至于被钉死在开屏；关掉后本会话不再弹，下次打开仍是旧包会再弹。
   无头/回归环境（webdriver / Headless UA）与 file:// 直开不弹，避免 278 个回归脚本被挡在门外。
   ====================================================== */
(function () {
  'use strict';
  window.mochiUpdateRemindShow = () => false;
  window.__updateRemindReady = true;
})();

