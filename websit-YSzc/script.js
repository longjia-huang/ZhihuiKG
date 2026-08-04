/* ========================================
   广西医科大学护理学院 · AI专业创新中心
   交互逻辑：页面切换 / 数字动画 / AI对话 / 课程筛选
   ======================================== */

(function () {
    'use strict';

    /* ===== 页面切换 ===== */
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    let currentPage = 'home';
    let statsAnimated = false;

    function switchPage(pageName) {
        if (pageName === currentPage) return;

        // 更新导航高亮
        navItems.forEach(item => {
            item.classList.toggle('active', item.dataset.page === pageName);
        });

        // 切换页面显示
        pages.forEach(page => {
            page.classList.toggle('active', page.id === 'page-' + pageName);
        });

        currentPage = pageName;
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // 首页时重新触发数字动画
        if (pageName === 'home' && !statsAnimated) {
            setTimeout(animateStats, 300);
        }
    }

    // 导航点击
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            switchPage(this.dataset.page);
        });
    });

    // 带 data-page 属性的元素点击跳转
    document.querySelectorAll('[data-page]').forEach(el => {
        if (!el.classList.contains('nav-item')) {
            el.addEventListener('click', function () {
                switchPage(this.dataset.page);
            });
        }
    });

    /* ===== 数字递增动画 ===== */
    function animateStats() {
        const statNums = document.querySelectorAll('.stat-num[data-target]');
        statNums.forEach(el => {
            const target = parseInt(el.dataset.target, 10);
            const prefix = el.dataset.prefix || '';
            const duration = 1800;
            const startTime = performance.now();

            function update(now) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // easeOutExpo
                const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                const current = Math.floor(eased * target);
                el.textContent = prefix + current.toLocaleString();
                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    el.textContent = prefix + target.toLocaleString();
                }
            }
            requestAnimationFrame(update);
        });
        statsAnimated = true;
    }

    // 首次加载触发动画
    setTimeout(animateStats, 500);

    /* ===== 首页AI搜索框 ===== */
    const aiInputHome = document.getElementById('aiInputHome');
    const aiSendHome = document.getElementById('aiSendHome');

    function handleHomeSearch() {
        const query = aiInputHome.value.trim();
        if (!query) {
            showTip('请输入您想了解的问题~', aiSendHome);
            return;
        }
        // 跳转到AI页面并填充
        aiInputHome.value = '';
        switchPage('ai');
        setTimeout(() => {
            const chatInput = document.getElementById('chatInput');
            if (chatInput) {
                chatInput.value = query;
                chatInput.focus();
            }
        }, 400);
    }

    if (aiSendHome) aiSendHome.addEventListener('click', handleHomeSearch);
    if (aiInputHome) {
        aiInputHome.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') handleHomeSearch();
        });
    }

    /* ===== AI聊天功能 ===== */
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');

    // 护理学知识库（模拟AI回答）
    const knowledgeBase = [
        { keywords: ['静脉输液', '输液'], answer: '静脉输液操作要点如下：<br><br>① <b>核对检查</b>：严格三查七对，检查药液质量、有效期<br>② <b>排气准备</b>：排尽空气，防止空气栓塞<br>③ <b>选择静脉</b>：选择粗直、固定的血管，避开关节<br>④ <b>消毒穿刺</b>：碘伏消毒直径≥5cm，15°-30°角进针<br>⑤ <b>固定调节</b>：妥善固定，根据年龄病情调节滴速<br>⑥ <b>观察记录</b>：密切观察，及时处理不良反应' },
        { keywords: ['心肺复苏', 'CPR', '复苏'], answer: '心肺复苏（CPR）操作流程：<br><br>① <b>评估环境</b>：确保环境安全，判断患者意识<br>② <b>呼救</b>：大声呼救，拨打急救电话<br>③ <b>胸外按压</b>：按压部位为胸骨中下1/3交界处，频率100-120次/分，深度5-6cm<br>④ <b>开放气道</b>：仰头抬颏法，清除口腔异物<br>⑤ <b>人工呼吸</b>：按压与吹气比例30:2<br>⑥ <b>持续复苏</b>：直至专业救援到达或患者恢复自主循环' },
        { keywords: ['压疮', '褥疮'], answer: '压疮预防与护理要点：<br><br>① <b>风险评估</b>：使用Braden量表评估高危患者<br>② <b>定时翻身</b>：每2小时翻身一次，避免拖拽<br>③ <b>皮肤护理</b>：保持皮肤清洁干燥，避免过度摩擦<br>④ <b>营养支持</b>：高蛋白、高维生素饮食<br>⑤ <b>减压设备</b>：使用气垫床、减压敷料<br>⑥ <b>分期处理</b>：根据压疮分期采取相应治疗措施' },
        { keywords: ['无菌', '消毒'], answer: '无菌技术操作原则：<br><br>① <b>环境准备</b>：操作前30分钟停止清扫，减少人员走动<br>② <b>个人准备</b>：洗手、戴口罩帽子，修剪指甲<br>③ <b>无菌区</b>：无菌区域不可面对面部说话或咳嗽<br>④ <b>无菌物品</b>：一份无菌物品仅供一位患者使用<br>⑤ <b>取用方法</b>：无菌持物钳取用，不可跨越无菌区<br>⑥ <b>时间限制</b>：无菌包打开后24小时内有效' },
        { keywords: ['给药', '用药', '药物'], answer: '给药原则（三查七对）：<br><br><b>三查</b>：操作前查、操作中查、操作后查<br><br><b>七对</b>：<br>① 床号 ② 姓名 ③ 药名 ④ 剂量 ⑤ 浓度 ⑥ 时间 ⑦ 用法<br><br><b>注意事项</b>：<br>• 严格遵守给药时间<br>• 观察用药后反应<br>• 注意药物配伍禁忌<br>• 做好用药健康教育' },
        { keywords: ['生命体征', '体温', '血压', '脉搏', '呼吸'], answer: '生命体征测量方法：<br><br>① <b>体温</b>：口温3分钟，腋温10分钟，肛温3分钟<br>② <b>脉搏</b>：计数30秒×2，异常者计数1分钟<br>③ <b>呼吸</b>：在不告知患者的情况下观察胸腹起伏<br>④ <b>血压</b>：袖带下缘距肘窝2-3cm，听诊器不可塞入袖带内<br><br><b>正常范围</b>：<br>• 体温：36.1-37.2°C<br>• 脉搏：60-100次/分<br>• 呼吸：16-20次/分<br>• 血压：90-139/60-89 mmHg' },
        { keywords: ['糖尿病', '血糖'], answer: '糖尿病护理要点：<br><br>① <b>饮食管理</b>：控制总热量，定时定量，少食多餐<br>② <b>运动指导</b>：餐后1小时运动，每次30分钟，每周≥150分钟<br>③ <b>用药护理</b>：遵医嘱使用降糖药或胰岛素，注意低血糖反应<br>④ <b>血糖监测</b>：空腹及餐后2小时血糖<br>⑤ <b>足部护理</b>：每日检查足部，温水洗脚，穿合适鞋袜<br>⑥ <b>健康教育</b>：认识并发症，掌握自救方法' },
        { keywords: ['心衰', '心力衰竭'], answer: '心力衰竭护理要点：<br><br>① <b>体位</b>：半坐卧位或端坐位，双腿下垂<br>② <b>吸氧</b>：2-4L/min，急性肺水肿时酒精湿化吸氧<br>③ <b>休息</b>：根据心功能分级安排活动量<br>④ <b>饮食</b>：低盐低脂饮食，限制水分摄入<br>⑤ <b>用药</b>：遵医嘱使用利尿剂、强心药，监测电解质<br>⑥ <b>病情观察</b>：监测生命体征、出入量、呼吸困难程度' },
        { keywords: ['产后出血', '产后'], answer: '产后出血急救护理：<br><br>① <b>评估</b>：胎儿娩出后24小时内阴道流血量≥500ml<br>② <b>原因判断</b>：子宫收缩乏力、胎盘因素、软产道裂伤、凝血功能障碍<br>③ <b>止血措施</b>：按摩子宫、使用缩宫素、宫腔填塞<br>④ <b>补充血容量</b>：建立静脉通路，快速补液输血<br>⑤ <b>监测</b>：生命体征、出血量、宫底高度、膀胱充盈情况<br>⑥ <b>心理护理</b>：安抚产妇情绪，做好家属沟通' },
        { keywords: ['老年', '跌倒'], answer: '老年患者跌倒预防与护理：<br><br>① <b>风险评估</b>：使用Morse跌倒风险评估量表<br>② <b>环境改造</b>：保持地面干燥，走廊安装扶手，充足照明<br>③ <b>体位管理</b>：起床遵循"三个30秒"原则<br>④ <b>用药管理</b>：注意降压药、镇静药的不良反应<br>⑤ <b>功能锻炼</b>：平衡训练、下肢肌力训练<br>⑥ <b>健康教育</b>：正确使用助行器，穿防滑鞋' },
    ];

    function findAnswer(query) {
        for (const item of knowledgeBase) {
            for (const kw of item.keywords) {
                if (query.includes(kw)) {
                    return item.answer;
                }
            }
        }
        // 默认回复
        const defaults = [
            '这是一个很好的问题！关于"' + query + '"，我建议您可以从以下几个方向深入学习：<br><br>① 查阅相关课程资料<br>② 参考临床护理实践指南<br>③ 咨询带教老师<br><br>您也可以尝试问我更具体的护理学问题，如：静脉输液、心肺复苏、压疮护理、无菌技术等。',
            '感谢您的提问！关于"' + query + '"，我目前的知识库中暂未收录详细信息。不过您可以尝试以下关键词：<br><br>• 静脉输液操作要点<br>• 心肺复苏流程<br>• 压疮预防护理<br>• 糖尿病护理<br>• 产后出血急救<br>• 老年跌倒预防<br><br>我会持续学习，为您提供更全面的解答！',
        ];
        return defaults[Math.floor(Math.random() * defaults.length)];
    }

    function addMessage(content, isUser) {
        if (!chatMessages) return;
        const msgDiv = document.createElement('div');
        msgDiv.className = 'msg ' + (isUser ? 'user-msg' : 'ai-msg');
        const bubble = document.createElement('div');
        bubble.className = 'msg-bubble';
        bubble.innerHTML = content;
        msgDiv.appendChild(bubble);
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function addTypingIndicator() {
        if (!chatMessages) return null;
        const msgDiv = document.createElement('div');
        msgDiv.className = 'msg ai-msg typing-msg';
        const bubble = document.createElement('div');
        bubble.className = 'msg-bubble';
        bubble.innerHTML = '<span class="typing-dots">正在思考</span>';
        msgDiv.appendChild(bubble);
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return msgDiv;
    }

    function handleChatSend() {
        if (!chatInput) return;
        const query = chatInput.value.trim();
        if (!query) return;

        addMessage(query, true);
        chatInput.value = '';

        const typingEl = addTypingIndicator();

        setTimeout(() => {
            if (typingEl) typingEl.remove();
            const answer = findAnswer(query);
            addMessage(answer, false);
        }, 800 + Math.random() * 600);
    }

    if (chatSend) chatSend.addEventListener('click', handleChatSend);
    if (chatInput) {
        chatInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') handleChatSend();
        });
    }

    /* ===== 课程筛选 ===== */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const filter = this.dataset.filter;

            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            courseCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                    // 重新触发动画
                    card.style.animation = 'none';
                    card.offsetHeight; // trigger reflow
                    card.style.animation = '';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    /* ===== 课程路径节点点击 ===== */
    const pathNodes = document.querySelectorAll('.path-node');
    pathNodes.forEach(node => {
        node.addEventListener('click', function () {
            pathNodes.forEach(n => n.classList.remove('active'));
            this.classList.add('active');
        });
    });

    /* ===== 知识图谱节点交互 ===== */
    const graphNodes = document.querySelectorAll('.graph-node');
    graphNodes.forEach(node => {
        node.addEventListener('click', function () {
            const name = this.dataset.name;
            if (name) {
                // 高亮效果
                const circles = this.querySelectorAll('circle');
                circles.forEach(c => {
                    c.style.filter = 'brightness(1.5) drop-shadow(0 0 12px rgba(201,169,97,0.8))';
                    setTimeout(() => {
                        c.style.filter = '';
                    }, 1000);
                });
            }
        });
    });

    /* ===== 导航栏滚动效果 ===== */
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;
        if (scrollY > 10) {
            navbar.style.background = 'rgba(6, 31, 63, 0.85)';
            navbar.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(6, 31, 63, 0.6)';
            navbar.style.boxShadow = 'none';
        }
        lastScroll = scrollY;
    });

    /* ===== 提示框 ===== */
    function showTip(message, anchor) {
        const tip = document.createElement('div');
        tip.textContent = message;
        tip.style.cssText = `
            position: fixed;
            top: 90px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #C9A961, #A88842);
            color: #fff;
            padding: 10px 24px;
            border-radius: 999px;
            font-size: 14px;
            z-index: 9999;
            box-shadow: 0 8px 24px rgba(201,169,97,0.3);
            animation: tipIn 0.3s ease;
        `;
        document.body.appendChild(tip);
        setTimeout(() => {
            tip.style.opacity = '0';
            tip.style.transition = 'opacity 0.3s';
            setTimeout(() => tip.remove(), 300);
        }, 2000);
    }

    /* ===== 打字动画样式注入 ===== */
    const style = document.createElement('style');
    style.textContent = `
        .typing-dots::after {
            content: '...';
            animation: typingDots 1.4s infinite;
        }
        @keyframes typingDots {
            0%, 20% { content: '.'; }
            40% { content: '..'; }
            60%, 100% { content: '...'; }
        }
        @keyframes tipIn {
            from { opacity: 0; transform: translateX(-50%) translateY(-10px); }
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
    `;
    document.head.appendChild(style);

    /* ===== 学期卡片点击导航 ===== */
    const semesterCards = document.querySelectorAll('.semester-card');
    semesterCards.forEach(card => {
        card.addEventListener('click', function () {
            switchPage('courses');
        });
    });

    /* ===== 问题项点击反馈 ===== */
    const qItems = document.querySelectorAll('.q-item');
    qItems.forEach(item => {
        item.addEventListener('click', function () {
            const text = this.textContent.trim();
            // 跳转到AI页面并自动提问
            switchPage('ai');
            setTimeout(() => {
                if (chatInput) {
                    chatInput.value = text;
                    handleChatSend();
                }
            }, 500);
        });
    });

    console.log('%c广西医科大学护理学院 · AI专业创新中心', 'color: #C9A961; font-size: 16px; font-weight: bold;');
    console.log('%c厚德励志 · 博学弘医', 'color: #E0C485; font-size: 12px;');

})();
