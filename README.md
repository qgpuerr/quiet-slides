# Quiet Slides (静谧幻灯片)

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](LICENSE)
[![Format: 16:9](https://img.shields.io/badge/Ratio-16%3A9%20Fixed-emerald.svg)]()
[![Engine: GSAP + Tailwind](https://img.shields.io/badge/Engine-GSAP%20%2B%20Tailwind-blue.svg)]()
[![Export: Clean HTML & PDF](https://img.shields.io/badge/Export-Clean%20HTML%20%7C%20PDF-amber.svg)]()

**大道至简，重归内容原发排版。**  
为高审美演讲者、设计师、学术作者打造的现代化网页端 16:9 幻灯片套件。

[English Documentation](README.en.md) · [查看核心设计哲学](docs/design_principles.md) · [交互与快捷键指南](docs/keyboard_shortcuts.md)

</div>

---

## 🌟 核心特色与特性

### 1. 严格字数预算与大道至简
- **单页字数绝对上限**：每页核心文案控制在 **≤ 35–50 字**，杜绝大段论述。
- **3 秒一览原则**：观众视线落在画面的前 3 秒内，必须能无压力看清核心主命题，而非被迫在台下阅读文字。
- **降维留白**：留白不仅是背景，它是第一视觉阶梯。宁可保有 70% 空间，拒绝无意义的图块堆砌。

### 2. 零模版教条 (Zero-Template Doctrine)
- **从核心命题推导排版**：绝不机械复用死板的四格或六格卡片，构图由内容本质原发生长。
- **专属图表语言**：巨号百分比无框极化对抗场、生理眨眼脉冲波形轨、自底向上阶梯式割舍断层、嵌套同心圆分级与闭环因果流。

### 3. 双生美学风格 (Dual Aesthetic Systems)
- **Style A · 物料档案版 (Artisan Paper)**：400gsm 棉质纸张微距纤维、工作台手稿排印、打字机元数据、物理印章压印。
- **Style B · 静奢编辑版 (Minimal Editorial)**：平滑暖调纸基、0.5–1px 极细发丝网格、微距十字准线、四声部排印。

### 4. 强大的交互演示引擎
- **16:9 等比居中缩放**：原生 JS Transform 监听窗口缩放，全屏无黑边、无排版畸变。
- **真正全屏沉浸放映 (True Fullscreen)**：调用原生 Fullscreen API，全屏自动隐去翻页按钮，底部居中悬浮极简指示胶囊，键盘左右键盲操翻页。
- **一键烘焙纯净 HTML 导出 (Clean HTML Export)**：一键将当前所有文案修改与母色直接烘焙改写进静态源码中，彻底移除控制台和抽屉，生成零依赖独立单文件，在任何电脑和投影仪上离线双击即用。
- **原生 16:9 多页矢量 PDF 导出**：完美支持浏览器快捷键 `P` (`window.print()`) 与 Headless 自动化导出，连续无缝输出全部页面，无任何裁切与白边。
- **母色动态调校与对比度安全**：内置 9 款典藏纸张母色，深浅母色自动反转高光与标注，确保 WCAG AAA 级可读性。
- **行内所见即所得文字直编 (Inline Editing)**：按 `E` 键即可直接修改任意文字，按 `Cmd+S` 实时持久化保存。

---

## 快捷键速查

| 快捷键 | 功能 | 说明 |
| :--- | :--- | :--- |
| **`→` / `Space` / `PageDown`** | 下一页 | 平滑切换，自动运行 GSAP 进场动效 |
| **`←` / `PageUp`** | 上一页 | 返回上一页 |
| **`F`** | **全屏放映** | 原生全屏放映，自动隐去按钮，底部悬浮极简指示器 |
| **`E`** | **直编文案** | 开启 / 退出行内文字直编模式 |
| **`Cmd + S` / `Ctrl + S`** | 保存文案 | 将修改后的文案持久化保存至本地 |
| **`P`** | **导出 PDF** | 严格 16:9 无边距输出全部幻灯片 |
| **`R`** | 重播动效 | 重新播放当前页进场动画 |
| **`Esc`** | 退出全屏 | 退出全屏放映或取消编辑 |

---

## 📂 项目结构

```
quiet-slides/
├── SKILL.md                          # Antigravity Agent 核心技能规范
├── README.md                         # 中文说明文档
├── README.en.md                      # 英文说明文档
├── LICENSE                           # MIT 开源协议
├── showcases/
│   └── editing_principles/           # 电影剪辑六原则典藏双演示
│       ├── demo_showcase.html        # 双风格对比体验中心
│       ├── editing_principles_artisan.html   # Style A 物料档案版
│       └── editing_principles_editorial.html # Style B 静奢编辑版
├── templates/
│   ├── starter_artisan.html          # Style A 独立启动模版
│   └── starter_editorial.html        # Style B 独立启动模版
├── scripts/
│   ├── export_pdf.js                 # 无头 Chrome 自动导出 16:9 PDF
│   └── export_clean_html.js          # 无头 Chrome 自动导出纯净静态 HTML
└── docs/
    ├── design_principles.md          # 核心设计规范与排印美学
    └── keyboard_shortcuts.md         # 交互引擎与快捷键指南
```

---

## 🚀 快速开始

### 1. 直接本地体验
无需安装任何复杂编译环境或后台，直接用任意现代浏览器打开以下文件即可：
- 双风格对比中心：`showcases/editing_principles/demo_showcase.html`
- 物料档案版：`showcases/editing_principles/editing_principles_artisan.html`
- 静奢编辑版：`showcases/editing_principles/editing_principles_editorial.html`

### 2. 导出纯净版演示文件
1. 在浏览器打开任意页面，按 `E` 直编修改文字，在“母色调校”抽屉选择喜爱的纸色。
2. 点击右上角或抽屉内的 **“导出纯净 HTML”**。
3. 即可下载完全独立、无控制台的纯净 HTML 文件，拷至任何设备均可完美放映！

### 3. 使用命令行自动化导出 PDF
```bash
# 安装 puppeteer
npm install puppeteer

# 导出 Artisan 版 16:9 PDF
node scripts/export_pdf.js showcases/editing_principles/editing_principles_artisan.html my_deck.pdf
```

---

## 开源协议

本项目基于 [MIT 协议](LICENSE) 开源。
