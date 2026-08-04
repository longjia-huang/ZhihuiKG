/* ============================================================
   广西医科大学护理学院 · 学科大模型
   公共交互脚本
   ============================================================ */

// ---------- 灯焰粒子生成 ----------
function createEmbers(containerId, count = 15) {
  const container = document.getElementById(containerId);
  if (!container) return;
  for (let i = 0; i < count; i++) {
    const ember = document.createElement('span');
    ember.className = 'ember';
    ember.style.left = Math.random() * 100 + '%';
    ember.style.animationDuration = (3 + Math.random() * 4) + 's';
    ember.style.animationDelay = Math.random() * 5 + 's';
    ember.style.setProperty('--drift', (Math.random() * 60 - 30) + 'px');
    ember.style.setProperty('--size', (2 + Math.random() * 3) + 'px');
    container.appendChild(ember);
  }
}

// ---------- 滚动渐入 ----------
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ---------- Agent 切换 ----------
function initAgentPills() {
  const pills = document.querySelectorAll('.agent-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const agentName = pill.dataset.agent;
      const placeholder = document.getElementById('searchPlaceholder');
      if (placeholder && agentName) {
        const placeholders = {
          'clinical': '请输入临床护理问题，如：压疮的分期护理要点？',
          'exam': '请输入考研复习问题，如：护理学基础的重点章节有哪些？',
          'skills': '请输入操作技能问题，如：静脉留置针穿刺的操作流程？',
          'literature': '请输入文献检索关键词，如：安宁疗护 最新研究进展',
          'case': '请输入病例分析需求，如：糖尿病足患者的护理评估',
          'medication': '请输入用药相关疑问，如：华法林的用药指导要点',
          'education': '请输入健康宣教主题，如：高血压患者的居家管理'
        };
        placeholder.textContent = placeholders[agentName] || '请输入你的问题，开启护理智慧探索之旅～';
      }
    });
  });
}

// ---------- 搜索框交互 ----------
function initSearchBar() {
  const input = document.getElementById('searchInput');
  const sendBtn = document.getElementById('sendBtn');
  const suggestionChips = document.querySelectorAll('.suggestion-chip');
  if (!input) return;

  const sendMessage = (text) => {
    if (!text.trim()) return;
    // 跳转至对话页并携带问题
    window.location.href = `chat.html?q=${encodeURIComponent(text.trim())}`;
  };

  if (sendBtn) {
    sendBtn.addEventListener('click', () => sendMessage(input.value));
  }
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendMessage(input.value);
    });
  }
  suggestionChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const text = chip.dataset.q || chip.textContent.replace('→', '').trim();
      sendMessage(text);
    });
  });
}

// ---------- 对话页模拟回复 ----------
function initChat() {
  const chatBody = document.getElementById('chatBody');
  const chatInput = document.getElementById('chatInput');
  const chatSend = document.getElementById('chatSend');
  if (!chatBody || !chatInput) return;

  const responses = {
    '压疮': '【压疮分期护理要点】\n\n根据 NPUAP/EPUAP 标准，压疮分为四期：\n\n1. Ⅰ期：皮肤完整，指压不褪色的红斑。护理重点——解除压迫，每2小时翻身一次，使用减压敷料。\n\n2. Ⅱ期：部分皮层缺损，表浅溃疡。护理重点——保持创面清洁，水胶体敷料保护。\n\n3. Ⅲ期：全层皮肤缺损。护理重点——清创换药，控制感染，营养支持。\n\n4. Ⅳ期：全层组织缺损，可见骨肌腱。护理重点——外科清创，负压引流，多学科协作。\n\n💡 核心原则：评估风险（Braden量表）→ 解除压力 → 改善营养 → 创面管理 → 健康教育。',
    '静脉': '【静脉留置针穿刺操作流程】\n\n一、评估\n· 核对医嘱与患者信息\n· 评估血管条件、皮肤情况、凝血功能\n· 向患者解释取得配合\n\n二、准备\n· 六步洗手，戴口罩\n· 准备留置针、透明敷贴、消毒用品\n\n三、操作\n· 扎止血带（穿刺点上方10cm）\n· 消毒范围≥8cm，待干\n· 绷紧皮肤，15°-30°角进针\n· 见回血后降低角度再进0.2cm\n· 送软管，撤针芯\n· 松止血带，透明敷贴固定\n\n四、宣教\n· 留置时间72-96小时\n· 保持干燥，避免剧烈活动\n· 观察穿刺点有无红肿渗液\n\n⚠️ 注意：严格无菌操作，记录穿刺时间。',
    'default': '您好！我是广西医科大学护理学院学科大模型助手。\n\n我可以为您提供以下方面的帮助：\n\n📋 临床护理问答 —— 内外科护理、急危重症护理等\n📚 考研备考辅导 —— 护理学基础、内科护理学等核心科目\n💉 操作技能指导 —— 各类护理操作规范与流程\n🔬 文献情报检索 —— 护理前沿研究动态\n\n请详细描述您的问题，我将为您专业解答。'
  };

  const getResponse = (q) => {
    if (q.includes('压疮') || q.includes('褥疮')) return responses['压疮'];
    if (q.includes('静脉') || q.includes('穿刺')) return responses['静脉'];
    return responses['default'];
  };

  const appendMsg = (role, text) => {
    const msg = document.createElement('div');
    msg.className = `chat-msg chat-msg-${role} fade-up`;
    const avatar = role === 'user'
      ? '<div class="msg-avatar user">我</div>'
      : '<div class="msg-avatar ai"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/></svg></div>';
    const bubble = `<div class="msg-bubble">${text.replace(/\n/g, '<br>')}</div>`;
    msg.innerHTML = avatar + bubble;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const handleSend = () => {
    const text = chatInput.value.trim();
    if (!text) return;
    appendMsg('user', text);
    chatInput.value = '';
    // 打字指示器
    const typing = document.createElement('div');
    typing.className = 'chat-msg chat-msg-ai fade-up';
    typing.id = 'typing';
    typing.innerHTML = '<div class="msg-avatar ai"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/></svg></div><div class="msg-bubble typing"><span></span><span></span><span></span></div>';
    chatBody.appendChild(typing);
    chatBody.scrollTop = chatBody.scrollHeight;
    setTimeout(() => {
      typing.remove();
      appendMsg('ai', getResponse(text));
    }, 1200);
  };

  if (chatSend) chatSend.addEventListener('click', handleSend);
  chatInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSend(); });

  // 从首页携带的问题
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  if (q) {
    chatInput.value = q;
    setTimeout(handleSend, 500);
  }
}

// ---------- Tab 切换 ----------
function initTabs() {
  document.querySelectorAll('[data-tab-group]').forEach(group => {
    const tabs = group.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const groupName = group.dataset.tabGroup;
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll(`[data-tab-panel="${groupName}"]`).forEach(panel => {
          panel.classList.toggle('active', panel.dataset.tabId === tab.dataset.tab);
        });
      });
    });
  });
}

// ---------- 知识图谱节点点击 ----------
function initKnowledgeNodes() {
  const nodes = document.querySelectorAll('.kg-node');
  const detailPanel = document.getElementById('kgDetail');
  if (!nodes.length) return;
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');
      if (detailPanel) {
        const title = node.dataset.title || '';
        const desc = node.dataset.desc || '';
        const points = (node.dataset.points || '').split('|').filter(Boolean);
        detailPanel.querySelector('.kg-detail-title').textContent = title;
        detailPanel.querySelector('.kg-detail-desc').textContent = desc;
        const list = detailPanel.querySelector('.kg-detail-list');
        list.innerHTML = points.map(p => `<li>${p}</li>`).join('');
        detailPanel.classList.add('active');
      }
    });
  });
}

// ---------- 病例卡片翻转 ----------
function initCaseFlip() {
  document.querySelectorAll('.case-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
}

// ---------- 考试题卡 ----------
function initQuiz() {
  document.querySelectorAll('.quiz-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const quiz = opt.closest('.quiz-card');
      if (quiz.classList.contains('answered')) return;
      quiz.classList.add('answered');
      const correct = opt.dataset.correct === 'true';
      opt.classList.add(correct ? 'correct' : 'wrong');
      if (!correct) {
        quiz.querySelector('.quiz-option[data-correct="true"]').classList.add('correct');
      }
      quiz.querySelector('.quiz-explain').classList.add('show');
    });
  });
}

// ---------- 技能步骤 ----------
function initSkillSteps() {
  document.querySelectorAll('.skill-step').forEach((step, idx) => {
    step.addEventListener('click', () => {
      step.classList.toggle('done');
      updateSkillProgress();
    });
  });
}

function updateSkillProgress() {
  const total = document.querySelectorAll('.skill-step').length;
  const done = document.querySelectorAll('.skill-step.done').length;
  const bar = document.getElementById('skillProgress');
  const text = document.getElementById('skillProgressText');
  if (bar) bar.style.width = (done / total * 100) + '%';
  if (text) text.textContent = `${done} / ${total}`;
}

// ---------- 初始化 ----------
document.addEventListener('DOMContentLoaded', () => {
  createEmbers('emberContainer');
  initScrollReveal();
  initAgentPills();
  initSearchBar();
  initChat();
  initTabs();
  initKnowledgeNodes();
  initCaseFlip();
  initQuiz();
  initSkillSteps();
});
