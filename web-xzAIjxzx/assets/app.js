/* ============================================================
   AI 智慧教学平台 · 功能演示  共享脚本（原生 JS，无依赖）
   ============================================================ */

/* 模块清单（严格按响应文档顺序排列） */
var MODULES = [
  { id: '01', title: '课程能力目标编辑', file: 'module-01.html', icon: '🎯' },
  { id: '02', title: '知识二维码生成', file: 'module-02.html', icon: '🔗' },
  { id: '03', title: 'AI 智能答疑伴学', file: 'module-03.html', icon: '💬' },
  { id: '04', title: '教师特色指令创建', file: 'module-04.html', icon: '🧩' },
  { id: '05', title: 'AI 出题功能', file: 'module-05.html', icon: '📝' },
  { id: '06', title: '知识点建设进度', file: 'module-06.html', icon: '📊' },
  { id: '07', title: '视频举手提问', file: 'module-07.html', icon: '🙋' },
  { id: '08', title: '智能体构建与情景模板', file: 'module-08.html', icon: '🤖' },
  { id: '09', title: '智能体测评任务', file: 'module-09.html', icon: '📋' },
  { id: '10', title: '题目生成与题库管理', file: 'module-10.html', icon: '🗂️' }
];

/* 从当前文件名识别当前模块 */
function currentModuleIndex() {
  var name = (location.pathname.split('/').pop() || '').toLowerCase();
  for (var i = 0; i < MODULES.length; i++) {
    if (name === MODULES[i].file.toLowerCase()) return i;
  }
  return -1;
}

/* 渲染侧边栏导航 */
function renderSidebar() {
  var box = document.getElementById('sidebar');
  if (!box) return;
  var idx = currentModuleIndex();
  var html = '<div class="sidebar-title">功能模块导航</div><nav class="side-nav">';
  MODULES.forEach(function (m, i) {
    var active = i === idx ? ' active' : '';
    html += '<a href="' + m.file + '" class="' + active.trim() + '">'
      + '<span class="num">' + m.id + '</span><span>' + m.title + '</span></a>';
  });
  html += '</nav>';
  box.innerHTML = html;
}

/* 渲染顶部标题与上一步/下一步 */
function renderTopbar() {
  var idx = currentModuleIndex();
  var titleEl = document.getElementById('topbar-title');
  var metaEl = document.getElementById('topbar-meta');
  if (idx >= 0) {
    var m = MODULES[idx];
    if (titleEl) titleEl.textContent = '模块 ' + m.id + ' · ' + m.title;
    if (metaEl) metaEl.textContent = m.id + ' / ' + MODULES.length;
  }
  var prev = document.getElementById('btn-prev');
  var next = document.getElementById('btn-next');
  if (prev) {
    if (idx > 0) {
      prev.textContent = '← ' + MODULES[idx - 1].id + ' ' + MODULES[idx - 1].title;
      prev.disabled = false;
      prev.onclick = function () { location.href = MODULES[idx - 1].file; };
    } else { prev.disabled = true; prev.textContent = '← 已是首个模块'; }
  }
  if (next) {
    if (idx >= 0 && idx < MODULES.length - 1) {
      next.textContent = MODULES[idx + 1].id + ' ' + MODULES[idx + 1].title + ' →';
      next.disabled = false;
      next.onclick = function () { location.href = MODULES[idx + 1].file; };
    } else { next.disabled = true; next.textContent = '已是末个模块 →'; }
  }
}

/* 标签页切换（data-tab / data-panel） */
function initTabs() {
  document.querySelectorAll('.tabs .tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      var group = tab.closest('.tabs');
      group.querySelectorAll('.tab').forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      var target = tab.getAttribute('data-tab');
      var scope = tab.closest('[data-tab-scope]') || document;
      var panels = scope.querySelectorAll('.tab-panel');
      panels.forEach(function (p) {
        p.classList.toggle('active', p.id === target);
      });
    });
  });
}

/* 轻提示 */
function toast(msg, type) {
  var wrap = document.getElementById('toast-wrap');
  if (!wrap) { wrap = document.createElement('div'); wrap.id = 'toast-wrap'; wrap.className = 'toast-wrap'; document.body.appendChild(wrap); }
  var t = document.createElement('div');
  t.className = 'toast ' + (type || '');
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(function () { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; }, 1800);
  setTimeout(function () { t.remove(); }, 2200);
}

/* 生成确定性伪二维码（SVG，用于演示免登录扫码/链接） */
function makeQR(seed) {
  var n = 21, cells = [];
  var s = 0;
  for (var i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) >>> 0;
  function rnd() { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; }
  for (var r = 0; r < n; r++) {
    for (var c = 0; c < n; c++) cells.push(rnd() > 0.5);
  }
  // 三个定位角
  function finder(r0, c0) {
    for (var r = 0; r < 7; r++) for (var c = 0; c < 7; c++) {
      var rr = r0 + r, cc = c0 + c;
      var on = (r === 0 || r === 6 || c === 0 || c === 6) || (r >= 2 && r <= 4 && c >= 2 && c <= 4);
      cells[rr * n + cc] = on;
    }
  }
  finder(0, 0); finder(0, n - 7); finder(n - 7, 0);
  var size = 21, unit = 6, pad = 4;
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + (size * unit + pad * 2) + ' ' + (size * unit + pad * 2) + '" shape-rendering="crispEdges">';
  svg += '<rect width="100%" height="100%" fill="#ffffff"/>';
  for (var r = 0; r < size; r++) for (var c = 0; c < size; c++) {
    if (cells[r * size + c]) svg += '<rect x="' + (pad + c * unit) + '" y="' + (pad + r * unit) + '" width="' + unit + '" height="' + unit + '" fill="#0f172a"/>';
  }
  svg += '</svg>';
  return svg;
}

/* 复制文本到剪贴板 */
function copyText(text, msg) {
  var done = function () { toast(msg || '已复制到剪贴板', 'success'); };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
  } else { fallbackCopy(text, done); }
}
function fallbackCopy(text, cb) {
  var ta = document.createElement('textarea');
  ta.value = text; document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); cb(); } catch (e) { toast('复制失败，请手动复制', 'warn'); }
  ta.remove();
}

/* 工具：转义 HTML */
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (m) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
  });
}

/* 页面初始化 */
document.addEventListener('DOMContentLoaded', function () {
  renderSidebar();
  renderTopbar();
  initTabs();
  if (typeof onModuleReady === 'function') onModuleReady();
});
