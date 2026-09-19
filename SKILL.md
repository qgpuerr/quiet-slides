---
name: quiet-slides
description: "Design and build aesthetic, distraction-free 16:9 presentation slides (Quiet Luxury & Artisan Handcrafted) powered by HTML, Tailwind CSS, GSAP, inline live editing, mother color tuning, one-click baked clean HTML export, and native 16:9 multi-page PDF export."
---

# Quiet Slides (静谧幻灯片) 设计与工程规范

> **大道至简，重归内容原发排版。**
> Quiet Slides 专为高要求演讲者、设计师、学术作者与创意工作者打造。摒弃花哨装饰与冗长文字，通过克制的字数预算、清晰的版式结构与轻量交互，提供清爽自然的数字演示体验。

---

## 核心设计理念 (Core Design Principles)

### 1. 严格字数预算与 3 秒一览原则 (Strict Word Budget & 3-Second Rule)
- **字数预算**：每张幻灯片核心内容字数控制在 **≤ 35–50 字**，避免大段堆砌。
- **3 秒一览原则**：观众视线触及画面后的 3 秒内，能够直接获取核心结论，无需吃力阅读。
- **合理留白**：留白让核心内容自然浮现。保持开阔舒适的留白比例，不为了“充实”而堆叠装饰元素。

### 2. 内容驱动排版 (Content-Driven Layout)
- **拒绝死板模版**：不机械套用单一卡片网格。每一张幻灯片的空间排布由其**核心表达主题**自然推导：
  - **核心对比**（如 51% vs 49%）：使用大号数字与清晰比例条对比；
  - **时间与生理节律**（如眼跳与生理切点）：使用平直时间波形与节律坐标；
  - **递进层级序列**：使用自底向上的层级阶梯与标尺；
  - **嵌套从属回路**：使用同心圆或单向流转关系图。

### 3. 动态对比度安全映射 (Dynamic Contrast Inversion)
- **避免同色系吞噬**：在切换到彩色或深色底色时，次级标注与百分比自动做明度适配。
- **高明度反转**：在深色背景下，标注自动反转为明亮暖白或浅金，确保在各种投影仪与屏幕上均具备良好的可读性与对比度。

### 4. 平直微标与克制线条
- 徽章、微标一律平直锚定在角落或发丝基线上，禁止斜置 45° 的虚线徽章。
- 线条统一使用 `0.5px - 1px` 实线（`opacity: 0.25 - 0.4`），杜绝杂乱大点虚线。

### 5. 严格负向约束与反模式 (Negative Constraints & Anti-Patterns)
- **严禁双斜杠 `//` 与方括号 `[ ... ]` 伪工业符号**：禁止使用形如 `RHYTHM // 视听节律节奏`、`[ WALTER MURCH // EDITING AXIOMS ]`、`[ CRITERIA 00 // PREFACE ]` 等工程师/蓝图伪代码符号，避免视觉污染与造作感。
- **严禁中英文双语重复堆叠**：文字必须自然、凝练、真实，不可中英双语平行罗列强行增重。
- **严禁伪文档编号与工程代号**：禁止出现 `DOCUMENT ID: MC-1995`、`FIGURE 04`、`SECTION 02` 等无意义装饰编码。
- **四角与边缘装饰字数硬约束**：眉标、角注、说明性微标文字**严格限制在 3–4 个汉字以内**（或 2–3 个英文单词），绝不能喧宾夺主。
- **抽屉职责单一原则**：色彩抽屉专注于配色选择与重置默认；导出 HTML / PDF 等动作统一留在顶栏，抽屉内不放置重复的导出按钮。
- **快捷键指南收纳原则**：顶栏右侧提供圆形 `?` 按钮，点击展开轻量毛玻璃浮层卡片，支持 `Esc` 或点击遮罩即刻关闭，主界面保持绝对克制清爽。

---

## 双生美学风格规范 (Dual Aesthetics)

### Style A: 物料档案版 (Artisan Paper & Workshop Material)
- **材质基底**：400gsm 纯棉纸微距纤维、压印封签（Artisan Seal）、物理印章感。
- **排印字系**：
  - 核心大字：`Playfair Display` / `Noto Serif SC` (思源宋体)
  - 元数据与编号：`Courier Prime` (打字机等宽体)
  - 副标与注释：`Jost` (极简无衬线)
- **色彩特征**：鼠草冷灰（#9EABA2）、羊皮纸、赤褐胶片朱砂印章（#823838）。

### Style B: 静奢编辑版 (Minimal Luxury Editorial & Hairline Geometry)
- **材质基底**：平滑暖白纸基（#F5F2EB）、极细发丝网格（0.5px–1px）、微距十字准线（Crosshairs）。
- **排印字系**：
  - 巨号标题：`Playfair Display Light` / `Noto Serif SC`
  - 眉标与标签：`Cinzel` / `JetBrains Mono`
  - 正文与说明：`Jost`
- **色彩特征**：冷茶白、陶土焦红、曜石墨黑，强留白与呼吸感。

---

## 交互引擎技术标准 (16:9 Interactive Deck Engine)

每一套 Quiet Slides 均搭载自研统一轻量交互引擎：

### 1. 视口居中 16:9 JS 等比缩放 (Stage Transform Scaling)
- 画布固定标准为 `1280 × 720` (严格 16:9 比例)。
- 监听 `window.resize`，动态计算 `scale = Math.min(vw / 1280, vh / 720)`，使用 `translate(-50%, -50%) scale(...)` 保持完美居中，彻底消除黑边与元素错位。

### 2. 原生全屏放映 (True Fullscreen API)
- 支持 `F` 键或按钮触发 `document.documentElement.requestFullscreen()`。
- 全屏状态下：
  - 自动隐去顶部工具栏和上一页/下一页按钮；
  - 底部居中悬浮极简指示胶囊（`#deck-indicators`）；
  - 演讲者直接使用键盘 `←` / `→` / `Space` 切换幻灯片；
  - 支持 `Esc` 或再次按 `F` 退出全屏。

### 3. 一键导出 HTML (Baked Clean HTML Export)
- 提供 **“导出 HTML”** 功能：
  - 克隆当前幻灯片 DOM；
  - 将用户行内编辑的所有文案修改直接改写进静态源码中；
  - 将当前激活的配色变量保存进 `:root`；
  - 剥离顶部控制栏与编辑抽屉；
  - 生成自包含、零依赖的独立单文件 HTML；
  - **在任何其他电脑、手机或脱网投影仪上双击即用**，保证原貌无差。

### 4. 严格 16:9 多页无损 PDF 导出
- 规范标准 `@media print` 样式：
  ```css
  @media print {
    @page { size: 16in 9in; margin: 0; }
    *, *::before, *::after { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    html, body { background-color: var(--board-bg) !important; width: 100% !important; height: auto !important; min-height: 100% !important; overflow: visible !important; margin: 0 !important; }
    #deck-top-bar, #drawer, #deck-nav, #shortcuts-modal, #deck-merge-capsule, #merge-modal, #paper-fiber-overlay, #editorial-grid-overlay { display: none !important; }
    #deck-viewport-wrap { display: block !important; position: static !important; width: 100% !important; height: auto !important; overflow: visible !important; }
    #deck-stage { display: block !important; position: static !important; transform: none !important; box-shadow: none !important; border-radius: 0 !important; width: 100% !important; height: auto !important; overflow: visible !important; }
    .slide-pane { display: flex !important; flex-direction: column !important; justify-content: space-between !important; position: relative !important; width: 100vw !important; height: 100vh !important; box-sizing: border-box !important; break-after: page !important; page-break-after: always !important; }
  }
  ```
- 保证无论是通过浏览器快捷键 `P` (调用 `window.print()`)，还是通过 Puppeteer 自动化导出，都能准确连续输出全部幻灯片，无裁切、无白边。

### 5. 元素级三方智能合并与基准指纹 (Granular 3-Way Smart Merge)
- **解决人机协同冲突**：用户在浏览器中直编文案后存在 `localStorage`，后续若再让 AI 调整排版或修改 HTML 代码，系统采用**三方智能合并算法**：
  - **稳定指纹寻址**：基于元素 `id` 或语义结构路径生成唯一稳定的 `data-edit-id`，防止增删节点导致顺序移位；
  - **三方基准存储**：记录 `{ userText, baseOriginal, timestamp }`；
  - **无冲突自动保留**：对于代码未改动的元素，100% 保留用户在浏览器中手写的文案；
  - **代码更新优先呈现**：对于被外部或 AI 专门改写过的元素，优先展示最新代码排版，并在顶栏滑出轻量通知胶囊；
  - **一键对比与撤回**：提供独立对比卡片，用户可随时一键还原为本地草稿；
  - **导出即固化**：点击“导出 HTML”时将合并后的文案直接烧录进独立文件，并自动将本地缓存基准重置为最新状态。

---

## 自动化工程与智能体工作流 (Agent Automation & Tooling)

### 1. 智能体端到端交付工作流
- **模板与排版定制**：AI 优先以 `templates/starter_artisan.html` (物料档案版) 或 `templates/starter_editorial.html` (静奢编辑版) 为骨架，严格遵循字数预算（≤35–50 字/页）与版式原型生成 16:9 演示文稿。
- **自主无头导出**：当用户提出“帮我导出 PDF”或“导出脱水 HTML”时，具备终端权限的 Agent 应直接在后台调用仓库内置脚本完成导出，并将产物路径直接交付用户，无需用户手动在终端配置。

### 2. 自动化脚本调用标准
- **无损 16:9 多页 PDF 导出**：
  ```bash
  node scripts/export_pdf.js <input-html-path> [output-pdf-path]
  ```
  *(脚本已内置 macOS / Linux / Windows 常见 Chrome 路径探测，以严格 16in 9in 无边距打印，输出完整多页矢量 PDF)*
- **无头纯净脱水 HTML 导出**：
  ```bash
  node scripts/export_clean_html.js <input-interactive-html> [output-clean-html]
  ```
  *(无头加载页面后执行清理，将行内编辑文案与选定配色变量固化进 DOM，剥离顶栏与抽屉控件，生成零依赖独立单文件)*

### 3. 依赖自主管理与用户免配置保障
- **环境依赖自动处理**：若环境中未安装 Puppeteer，AI 可在后台自主安装 `puppeteer-core`（体积轻量，复用本地 Chrome）或 `puppeteer`，全自动排除环境故障，无需打扰用户。
- **免安装备用交互**：向用户交付产物时，AI 可告知：“若您想在浏览器中直接体验或导出，只需双击打开 HTML，在页面中按下键盘快捷键 `P` 即可一键调用系统打印另存为 16:9 PDF，零环境依赖”。

---

## 快捷键一览

| 按键 | 功能 |
| :--- | :--- |
| `→` / `Space` / `PageDown` | 下一页 (触发入场动效) |
| `←` / `PageUp` | 上一页 |
| `F` | 全屏放映模式 |
| `E` | 行内文案编辑 |
| `Cmd + S` / `Ctrl + S` | 保存文案到本地缓存 |
| `P` | 导出完整 16:9 PDF (浏览器原生打印) |
| `R` | 重播当前页入场动画 |
| `?` / `/` | 展开 / 关闭快捷键帮助卡片 |
| `Esc` | 退出全屏 / 关闭浮层窗口 / 退出编辑 |

