/* ============================================================
   智能课程教学平台 · 统一产品外壳（墨色金韵 · 文学主题）
   负责注入侧边栏导航、顶部栏、面包屑，并将页面业务内容包裹进工作台布局。
   约定：页面 <body> 内只写业务内容（page-head + 面板等），无需写导航/页脚。
   ============================================================ */
(function () {
  'use strict';

  var MODULES = [
    { name: '能力目标',      icon: 'ri-crosshair-2-line', file: 'competency-objectives.html', group: '教学建设' },
    { name: '知识二维码',    icon: 'ri-qr-code-line',     file: 'knowledge-qrcode.html',      group: '教学建设' },
    { name: '建设进度',      icon: 'ri-line-chart-line',  file: 'construction-progress.html', group: '教学建设' },
    { name: 'AI 学伴',       icon: 'ri-chat-smile-2-line', file: 'ai-tutor.html',             group: 'AI 能力' },
    { name: '课程指令',      icon: 'ri-command-line',     file: 'course-commands.html',       group: 'AI 能力' },
    { name: 'AI 出题',       icon: 'ri-quill-pen-line',   file: 'ai-question-gen.html',       group: 'AI 能力' },
    { name: '智能体构建',    icon: 'ri-robot-2-line',     file: 'agent-builder.html',         group: '智能体与测评' },
    { name: '测评任务',      icon: 'ri-clipboard-line',   file: 'assessment-task.html',       group: '智能体与测评' },
    { name: '视频举手',      icon: 'ri-hand',             file: 'video-raise-hand.html',      group: '教学互动' },
    { name: '题库管理',      icon: 'ri-database-2-line',  file: 'question-bank.html',         group: '教学互动' }
  ];

  var currentFile = (location.pathname.split('/').pop() || '').toLowerCase();
  var current = MODULES.find(function (m) { return m.file.toLowerCase() === currentFile; });
  if (!current) current = { name: '工作台', icon: 'ri-home-5-line', file: currentFile, group: '' };

  /* 捕获业务内容 */
  var biz = document.body.innerHTML;
  document.body.innerHTML = '';

  /* 侧边栏菜单 HTML */
  var groups = {};
  MODULES.forEach(function (m) { (groups[m.group] = groups[m.group] || []).push(m); });
  var navHtml = Object.keys(groups).map(function (g) {
    var links = groups[g].map(function (m) {
      var active = m.file === current.file ? ' active' : '';
      return '<a class="side-link' + active + '" href="' + m.file + '"><i class="ic ' + m.icon + '"></i>' + m.name + '</a>';
    }).join('');
    return '<div class="side-group"><div class="g-label">' + g + '</div>' + links + '</div>';
  }).join('');

  /* 组装外壳 */
  document.body.innerHTML =
    '<div class="app">' +
      '<aside class="sidebar" id="sidebar">' +
        '<div class="side-head">' +
          '<a class="logo" href="../index.html">文</a>' +
          '<div class="brand"><b>智能课程教学平台</b><span>墨香金韵 · 文学智慧</span></div>' +
        '</div>' +
        '<nav class="side-nav">' +
          '<div class="side-group"><a class="side-link" href="../index.html"><i class="ic ri-home-5-line"></i>产品首页</a></div>' +
          navHtml +
        '</nav>' +
        '<div class="side-user">' +
          '<img class="avatar-img" src="../1.png" alt="林老师" style="width:38px;height:38px" />' +
          '<div><div class="u-name">林老师</div><div class="u-role">课程负责人 · 文学院</div></div>' +
        '</div>' +
      '</aside>' +
      '<div class="backdrop" id="backdrop"></div>' +
      '<div class="main">' +
        '<header class="topbar">' +
          '<div style="display:flex;align-items:center;gap:12px;min-width:0">' +
            '<button class="icon-btn menu-btn" id="menuBtn" style="display:none"><i class="ri-menu-line"></i></button>' +
            '<div class="crumb"><a href="../index.html">智能课程教学平台</a><span class="sep">/</span><span class="cur">' + current.name + '</span></div>' +
          '</div>' +
          '<div class="top-actions">' +
            '<div class="search-box"><input id="globalSearch" type="text" placeholder="搜索作家、作品、知识点、题目…" /><span class="kbd">⌘K</span></div>' +
            '<div class="dropdown" id="notifDrop">' +
              '<button class="icon-btn" id="notifBtn"><i class="ri-notification-3-line"></i><span class="dot"></span></button>' +
              '<div class="dropdown-menu" style="min-width:280px">' +
                '<div style="padding:8px 12px;font-size:12px;color:var(--ink-4);font-weight:600">通知</div>' +
                '<a href="construction-progress.html"><i class="ri-line-chart-line"></i> 有 3 个文学知识点建设完成度低于 40%</a>' +
                '<a href="assessment-task.html"><i class="ri-clipboard-line"></i> 「第 5 周读书测评」已发布</a>' +
                '<a href="ai-tutor.html"><i class="ri-chat-smile-2-line"></i> 学生提问量本周上升 18%</a>' +
                '<div class="divider"></div>' +
                '<a href="javascript:void(0)"><i class="ri-check-double-line"></i> 全部标记已读</a>' +
              '</div>' +
            '</div>' +
            '<button class="icon-btn" onclick="toast(\'帮助中心：联系教学支持团队\')"><i class="ri-question-line"></i></button>' +
            '<div class="dropdown" id="userDrop">' +
              '<div class="user-menu" id="userBtn">' +
                '<img class="avatar-img" src="../1.png" alt="林老师" style="width:32px;height:32px" />' +
                '<div><div class="um-name">林老师</div><div class="um-role">课程负责人</div></div>' +
                '<span class="caret">▾</span>' +
              '</div>' +
              '<div class="dropdown-menu">' +
                '<a href="javascript:void(0)" onclick="toast(\'个人资料\')"><i class="ri-user-3-line"></i> 个人资料</a>' +
                '<a href="javascript:void(0)" onclick="toast(\'账号设置\')"><i class="ri-settings-4-line"></i> 账号设置</a>' +
                '<div class="divider"></div>' +
                '<a href="../index.html"><i class="ri-arrow-left-line"></i> 返回产品首页</a>' +
                '<a href="javascript:void(0)" onclick="toast(\'已退出登录\')"><i class="ri-logout-box-r-line"></i> 退出登录</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</header>' +
        '<main class="content">' + biz + '</main>' +
      '</div>' +
    '</div>';

  /* 通用交互 */
  var menuBtn = document.getElementById('menuBtn');
  var sidebar = document.getElementById('sidebar');
  var backdrop = document.getElementById('backdrop');
  if (window.innerWidth <= 960) menuBtn.style.display = 'grid';
  window.addEventListener('resize', function () {
    menuBtn.style.display = window.innerWidth <= 960 ? 'grid' : 'none';
    if (window.innerWidth > 960) { sidebar.classList.remove('open'); backdrop.style.display = 'none'; }
  });
  menuBtn.addEventListener('click', function () {
    sidebar.classList.toggle('open');
    backdrop.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
  });
  backdrop.addEventListener('click', function () {
    sidebar.classList.remove('open'); backdrop.style.display = 'none';
  });

  /* 下拉菜单 */
  function bindDropdown(trigger, wrap) {
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = wrap.classList.contains('open');
      document.querySelectorAll('.dropdown.open').forEach(function (d) { d.classList.remove('open'); });
      if (!open) wrap.classList.add('open');
    });
  }
  bindDropdown(document.getElementById('notifBtn'), document.getElementById('notifDrop'));
  bindDropdown(document.getElementById('userBtn'), document.getElementById('userDrop'));
  document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown.open').forEach(function (d) { d.classList.remove('open'); });
  });

  /* 全局搜索 */
  var gs = document.getElementById('globalSearch');
  gs.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && gs.value.trim()) { toast('全局搜索：' + gs.value.trim()); gs.value = ''; }
  });
  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); gs.focus(); }
  });

  /* 暴露全局工具 */
  window.toast = function (msg) {
    var t = document.getElementById('gToast');
    if (!t) { t = document.createElement('div'); t.id = 'gToast'; t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(function () { t.classList.remove('show'); }, 2000);
  };
  window.escapeHtml = function (s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };
})();
