---
name: quiet-slides
description: "Design and build aesthetic, distraction-free 16:9 presentation slides (Quiet Luxury & Artisan Handcrafted) powered by HTML, Tailwind CSS, GSAP, inline live editing, mother color tuning, one-click baked clean HTML export, and native 16:9 multi-page PDF export."
---

# Quiet Slides (静谧幻灯片) 设计与工程规范

> **大道至简，重归内容原发排版。**
> Quiet Slides 是专为高要求演讲者、设计师、学术作者与创意工作者打造的现代化幻灯片工程规范。它摒弃了俗套花哨的卡片网格与冗余文字，以极度克制的字数预算、精密的版式张力与丝滑的自研交互引擎，重新定义数字演讲体验。

---

## 核心设计哲学 (Core Design Axioms)

### 1. 大道至简与严格字数预算 (Strict Word Budget & 3-Second Rule)
- **字数预算**：每张幻灯片核心内容字数严格控制在 **≤ 35–50 字**，杜绝大段论述。
- **3 秒一览原则**：视线触及画面后的 3 秒内，观众必须能直接获取核心结论，而非被迫在台下阅读文字。
- **空间留白**：留白不仅是背景，它是第一视觉阶梯。宁可保有 65%–75% 的极度留白，严禁为了“充实”而堆叠装饰元素。

### 2. 零模版教条 (Zero-Template Doctrine)
- **拒绝模版套用**：绝不机械复用死板的四格或并列六卡片。每一张幻灯片的空间排布必须由其**核心表达命题**原发推导：
  - **核心对抗与霸权法则**（如 51% vs 49%）：使用巨号数字无框撕裂对比场；
  - **时间与生理神经节律**（如眼跳与生理切点）：使用平直时间波形轴与脉冲坐标；
  - **递进割舍序列**：使用自底向上的阶梯断层与基线标尺；
  - **嵌套从属与因果回路**：使用极细发丝同心圆或单向流转链。

### 3. 动态对比度安全映射 (Dynamic Contrast Inversion)
- **杜绝同色系吞噬事故**：在切换到彩色或深色母色（如陶土红棕、雪松深墨）时，次级标注与百分比**严禁**使用相同明度的同色系颜色。
- **高明度反转**：在深色背景下，标注必须自动反转为暖乳白（`#FFF8F2`）或淡米金（`#EADBC8`），确保在任何投影仪和户外屏幕上均满足 **WCAG AAA** 级对比度。

### 4. 平直微标与克制线条
- 徽章、微标一律平直锚定在角落或发丝基线上，禁止斜置 45° 的虚线徽章。
- 线条统一使用 `0.5px - 1px` 实线（`opacity: 0.25 - 0.4`），杜绝杂乱大点虚线。

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

### 3. 一键烘焙纯净 HTML 导出 (Baked Clean HTML Export)
- 提供 **“导出纯净 HTML”** 功能：
  - 深度克隆当前幻灯片 DOM；
  - 将用户行内直编的所有文本修改直接改写进静态源码中；
  - 将当前激活的母色变量烘焙进 `:root`；
  - 彻底剥离顶部控制栏、编辑抽屉和临时缓存逻辑；
  - 生成完全自包含、零依赖的独立单文件 HTML；
  - **在任何其他电脑、手机或脱网投影仪上双击即用**，保证原貌无差。

### 4. 严格 16:9 多页无损 PDF 导出
- 修复标准 `@media print` 样式：
  ```css
  @media print {
    @page { size: 16in 9in; margin: 0; }
    *, *::before, *::after { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    html, body { background-color: var(--board-bg) !important; width: 100% !important; height: auto !important; min-height: 100% !important; overflow: visible !important; margin: 0 !important; }
    #deck-top-bar, #drawer, #deck-nav, #paper-fiber-overlay, #editorial-grid-overlay { display: none !important; }
    #deck-viewport-wrap { display: block !important; position: static !important; width: 100% !important; height: auto !important; overflow: visible !important; }
    #deck-stage { display: block !important; position: static !important; transform: none !important; box-shadow: none !important; border-radius: 0 !important; width: 100% !important; height: auto !important; overflow: visible !important; }
    .slide-pane { display: flex !important; flex-direction: column !important; justify-content: space-between !important; position: relative !important; width: 100vw !important; height: 100vh !important; box-sizing: border-box !important; break-after: page !important; page-break-after: always !important; }
  }
  ```
- 保证无论是通过浏览器快捷键 `P` (调用 `window.print()`)，还是通过 Puppeteer 自动化导出，都能准确连续输出全部幻灯片，无裁切、无白边。

---

## 快捷键一览

| 按键 | 功能 |
| :--- | :--- |
| `→` / `Space` / `PageDown` | 下一页 (触发入场动效) |
| `←` / `PageUp` | 上一页 |
| `F` | 原生全屏沉浸放映 |
| `E` | 行内文字直编 (所见即所得) |
| `Cmd + S` / `Ctrl + S` | 保存文案到本地缓存 |
| `P` | 导出完整 16:9 PDF |
| `R` | 重播当前页 GSAP 动画 |
