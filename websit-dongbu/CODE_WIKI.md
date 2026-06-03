# 视评智能AI测评系统 - Code Wiki

## 1. 项目概述

### 1.1 项目简介
视评智能AI测评系统是智慧树开发的AI测评展示网站，用于展示其视觉动捕和AI测评能力。

### 1.2 项目信息
- **项目名称**: 视评智能AI测评系统（websit-dongbu）
- **所属仓库**: ZhihuiKG-main
- **项目类型**: 静态HTML网站
- **开发日期**: 2025年
- **维护单位**: 智慧树人工智能实验室

---

## 2. 项目整体架构

### 2.1 架构概览
本项目采用极简架构，由单个HTML文件构成，包含完整的页面结构、CSS样式和HTML内容。

```
websit-dongbu/
└── dongbu.html    # 完整的静态页面文件
```

### 2.2 技术栈
- **前端**: 纯HTML5 + CSS3
- **布局**: Flexbox + CSS Grid
- **响应式设计**: 支持移动端适配
- **配色方案**: 深色主题 (#12141C) + 青色 (#24C8C8) + 橙色 (#FF9F33)

---

## 3. 主要模块职责

### 3.1 页面结构模块

#### 3.1.1 导航栏 (Nav)
- **文件位置**: [dongbu.html#L262-L273](file:///f:\智慧树\01-售前事宜\01-售前材料库\ZhihuiKG-main\websit-dongbu\dongbu.html#L262-L273)
- **功能**: 固定顶部导航，提供页面各板块链接
- **主要元素**:
  - Logo标识
  - 导航菜单（首页、产品能力、技术架构等）
  - 动捕体验专区链接

#### 3.1.2 首屏Banner
- **文件位置**: [dongbu.html#L276-L283](file:///f:\智慧树\01-售前事宜\01-售前材料库\ZhihuiKG-main\websit-dongbu\dongbu.html#L276-L283)
- **功能**: 展示产品核心价值和行动按钮
- **内容**:
  - 产品标题
  - 核心标语
  - 动捕测评体验按钮
  - 测评试用申请按钮

#### 3.1.3 八大核心测评能力模块
- **文件位置**: [dongbu.html#L286-L329](file:///f:\智慧树\01-售前事宜\01-售前材料库\ZhihuiKG-main\websit-dongbu\dongbu.html#L286-L329)
- **功能**: 展示产品的8大核心能力
- **能力列表**:
  1. 高精度3D视觉动捕引擎
  2. AI动捕智能自动评分
  3. 标准动作实时比对分析
  4. 多模态全域感知识别
  5. AI智能体标准化测评
  6. 自动化测评任务管理
  7. 云端+轻量化部署
  8. 可视化报告+数据大屏

#### 3.1.4 技术架构模块
- **文件位置**: [dongbu.html#L332-L352](file:///f:\智慧树\01-售前事宜\01-售前材料库\ZhihuiKG-main\websit-dongbu\dongbu.html#L332-L352)
- **功能**: 展示产品四层技术架构
- **架构层次**:
  1. 数据采集层
  2. 核心引擎层
  3. 测评服务层
  4. 应用输出层

#### 3.1.5 应用场景模块
- **文件位置**: [dongbu.html#L355-L363](file:///f:\智慧树\01-售前事宜\01-售前材料库\ZhihuiKG-main\websit-dongbu\dongbu.html#L355-L363)
- **功能**: 展示产品应用场景
- **场景列表**:
  - 文娱科教
  - 医疗康养
  - 数字人产业
  - 人工智能企业

#### 3.1.6 页脚 (Footer)
- **文件位置**: [dongbu.html#L366-L368](file:///f:\智慧树\01-售前事宜\01-售前材料库\ZhihuiKG-main\websit-dongbu\dongbu.html#L366-L368)
- **功能**: 展示版权信息

---

## 4. 关键CSS样式说明

### 4.1 主色调配置
- **主背景色**: `#12141C` (深色背景)
- **次背景色**: `#1a1d27` (卡片背景)
- **主色调**: `#24C8C8` (青色)
- **强调色**: `#FF9F33` (橙色)
- **文本色**: `#fff` (白色)
- **次要文本**: `#a8b1c4` (浅灰色)

### 4.2 响应式断点
- **桌面端**: 默认
- **平板端**: `@media (max-width: 1024px)`

### 4.3 核心样式类

| 类名 | 说明 | 位置 |
|------|------|------|
| `.nav` | 导航栏样式 | [dongbu.html#L22-L33](file:///f:\智慧树\01-售前事宜\01-售前材料库\ZhihuiKG-main\websit-dongbu\dongbu.html#L22-L33) |
| `.banner` | 首屏Banner样式 | [dongbu.html#L58-L83](file:///f:\智慧树\01-售前事宜\01-售前材料库\ZhihuiKG-main\websit-dongbu\dongbu.html#L58-L83) |
| `.card` | 能力卡片样式 | [dongbu.html#L128-L139](file:///f:\智慧树\01-售前事宜\01-售前材料库\ZhihuiKG-main\websit-dongbu\dongbu.html#L128-L139) |
| `.module-box` | 能力模块网格布局 | [dongbu.html#L119-L126](file:///f:\智慧树\01-售前事宜\01-售前材料库\ZhihuiKG-main\websit-dongbu\dongbu.html#L119-L126) |
| `.arch-box` | 技术架构布局 | [dongbu.html#L178-L185](file:///f:\智慧树\01-售前事宜\01-售前材料库\ZhihuiKG-main\websit-dongbu\dongbu.html#L178-L185) |

---

## 5. 依赖关系

### 5.1 外部资源
本项目无外部JavaScript或CSS库依赖，完全使用原生HTML和CSS实现。

### 5.2 外部链接
- 动捕体验专区: https://classroom-assets.zhihuishu.com/panorama/PanoramicDanceTeachingSpace/videos/index.html

---

## 6. 项目运行方式

### 6.1 本地运行
1. 直接在浏览器中打开 `dongbu.html` 文件
2. 或使用本地服务器工具（如Live Server）

### 6.2 部署方式
将 `dongbu.html` 部署到任何静态网站托管服务：
- Nginx
- Apache
- GitHub Pages
- 云存储服务（OSS/CDN）

---

## 7. 维护建议

### 7.1 内容更新
- 修改HTML内容直接编辑对应模块即可
- 更新链接地址时注意保持相对路径或绝对路径一致性

### 7.2 样式维护
- 新增样式建议遵循现有命名规范
- 响应式断点可根据需求调整

### 7.3 浏览器兼容性
- 建议使用现代浏览器（Chrome、Firefox、Safari、Edge）
- CSS Grid和Flexbox在主流浏览器中均有良好支持

---

## 8. 文件清单

| 文件名 | 路径 | 说明 |
|--------|------|------|
| dongbu.html | [dongbu.html](file:///f:\智慧树\01-售前事宜\01-售前材料库\ZhihuiKG-main\websit-dongbu\dongbu.html) | 主页面文件 |

---

*文档生成日期: 2026-06-04*
