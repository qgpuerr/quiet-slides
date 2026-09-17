# Quiet Slides

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](LICENSE)
[![Format: 16:9](https://img.shields.io/badge/Ratio-16%3A9%20Fixed-emerald.svg)]()
[![Engine: GSAP + Tailwind](https://img.shields.io/badge/Engine-GSAP%20%2B%20Tailwind-blue.svg)]()
[![Export: Clean HTML & PDF](https://img.shields.io/badge/Export-Clean%20HTML%20%7C%20PDF-amber.svg)]()

**Radical Simplicity. Content-First Typography.**  
A modern web-based 16:9 presentation deck suite engineered for design purists, keynote speakers, and academic researchers.

[中文文档](README.md) · [Design Principles](docs/design_principles.md) · [Shortcuts Guide](docs/keyboard_shortcuts.md)

</div>

---

## 🌟 Key Highlights

### 1. Strict Word Budget & 3-Second Rule
- **Word Limit**: Strictly **≤ 35–50 words** per slide. Eliminate clutter and paragraphs.
- **3-Second Rule**: The audience grasps the core thesis in 3 seconds without having to read a wall of text.
- **Intentional Negative Space**: 65%–75% whitespace serves as the primary visual hierarchy.

### 2. Zero-Template Doctrine
- Layouts are derived organically from the core concept—never forced into rigid cards.
- Bespoke visual structures: Asymmetrical tension fields, neural blink waveforms, bottom-up sacrifice staircases, and hairline concentric circles.

### 3. Dual Aesthetic Systems
- **Style A (Artisan Paper & Material Archive)**: 400gsm cotton fiber paper textures, workshop manuscript typography, typewriter metadata, and tactile seals.
- **Style B (Minimal Luxury Editorial)**: Smooth warm neutral paper, 0.5–1px hairline geometry, micro crosshairs, and 4-part editorial typography.

### 4. Robust Interactive Deck Engine
- **16:9 Transform Scaling**: Native JS transform engine ensures exact 16:9 aspect ratio across any screen resolution without letterboxing bugs.
- **True Fullscreen Mode**: HTML5 Fullscreen API with floating minimalist indicator pill and hidden navigation buttons.
- **One-Click Baked Clean HTML Export**: Bakes live edits and active color schemes directly into static HTML source code. Works 100% offline on any device with zero dependencies.
- **Seamless 16:9 PDF Export**: Full multi-page landscape PDF export via `window.print()` (`P` key) or headless Puppeteer CLI.
- **Inline Editing**: Press `E` to edit text directly on screen, with `Cmd+S` auto-persistence.

---

## Keyboard Shortcuts

| Shortcut | Action | Description |
| :--- | :--- | :--- |
| **`→` / `Space` / `PageDown`** | Next Slide | Transitions forward and triggers GSAP timeline |
| **`←` / `PageUp`** | Previous Slide | Transitions backward |
| **`F`** | **True Fullscreen** | Native browser fullscreen with floating bottom pill |
| **`E`** | **Edit Copy** | Toggle WYSIWYG inline text editing |
| **`Cmd + S` / `Ctrl + S`** | Save Copy | Persist edits to local browser storage |
| **`P`** | **Export PDF** | Print/export all 6 slides in strict 16:9 ratio |
| **`R`** | Replay Animations | Re-run GSAP entrance choreography |
| **`Esc`** | Exit | Exit fullscreen or drop editing focus |

---

## License

Released under the [MIT License](LICENSE).
