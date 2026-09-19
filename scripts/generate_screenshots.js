#!/usr/bin/env node
/**
 * Quiet Slides - Automated Showcase Screenshot Generator
 *
 * Captures pixel-perfect screenshots of Style A (Artisan) and Style B (Editorial)
 * slides, color palettes, and interactive features using Puppeteer.
 *
 * Usage:
 *   node scripts/generate_screenshots.js
 */

const fs = require('fs');
const path = require('path');

async function main() {
  let puppeteer;
  try {
    puppeteer = require('puppeteer');
  } catch (e) {
    try {
      puppeteer = require('puppeteer-core');
    } catch (e2) {
      console.error('Error: Please install puppeteer or puppeteer-core.');
      process.exit(1);
    }
  }

  let executablePath = process.env.CHROME_PATH || process.env.PUPPETEER_EXECUTABLE_PATH;
  if (!executablePath) {
    const commonPaths = [
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/Applications/Chromium.app/Contents/MacOS/Chromium',
      '/usr/bin/google-chrome',
      '/usr/bin/chromium-browser',
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    ];
    for (const p of commonPaths) {
      if (fs.existsSync(p)) {
        executablePath = p;
        break;
      }
    }
  }

  const rootDir = path.resolve(__dirname, '..');
  const assetsDir = path.join(rootDir, 'assets', 'screenshots');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  console.log('[Quiet Slides] Launching Chrome...');
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });

  const artisanPath = 'file://' + path.join(rootDir, 'showcases', 'editing_principles', 'editing_principles_artisan.html');
  console.log(`[Quiet Slides] Loading Style A: ${artisanPath}...`);
  await page.goto(artisanPath, { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 1500));

  const completeGSAP = async () => {
    await page.evaluate(() => {
      if (window.gsap) {
        window.gsap.globalTimeline.progress(1);
      }
    });
    await new Promise(r => setTimeout(r, 200));
  };

  const hideToast = async () => {
    await page.evaluate(() => {
      const toast = document.getElementById('deck-toast');
      if (toast) {
        toast.classList.add('opacity-0', '-translate-y-2');
        toast.style.display = 'none';
      }
    });
  };

  const restoreToast = async () => {
    await page.evaluate(() => {
      const toast = document.getElementById('deck-toast');
      if (toast) {
        toast.style.display = '';
      }
    });
  };

  // 1. Capture Style A 8 Archetype Slides
  const artisanSlides = [
    { num: 1, file: 'artisan_s1_cover_toc.png' },
    { num: 2, file: 'artisan_s2_tension.png' },
    { num: 3, file: 'artisan_s3_waveform.png' },
    { num: 4, file: 'artisan_s4_staircase.png' },
    { num: 5, file: 'artisan_s5_eyetrace.png' },
    { num: 6, file: 'artisan_s6_2d.png' },
    { num: 7, file: 'artisan_s7_3d.png' },
    { num: 8, file: 'artisan_s8_pyramid.png' }
  ];

  console.log('\n[Quiet Slides] Capturing Style A Slides (1-8)...');
  await page.evaluate(() => window.applyPalette('celadon', false));
  await completeGSAP();

  for (const item of artisanSlides) {
    console.log(`  -> Capturing Slide ${item.num}: ${item.file}...`);
    await page.evaluate(n => window.goToSlide(n), item.num);
    await completeGSAP();
    await hideToast();

    const stage = await page.$('#deck-stage');
    const outPath = path.join(assetsDir, item.file);
    await stage.screenshot({ path: outPath });
  }

  // Also update hero_artisan.png
  console.log('  -> Updating hero_artisan.png...');
  fs.copyFileSync(path.join(assetsDir, 'artisan_s1_cover_toc.png'), path.join(assetsDir, 'hero_artisan.png'));

  // 2. Capture Style A 9 Master Palettes
  const artisanPalettes = [
    { key: 'celadon', slide: 1, file: 'palette_artisan_1_celadon_s1.png' },
    { key: 'terracotta', slide: 2, file: 'palette_artisan_2_terracotta_s2.png' },
    { key: 'butter', slide: 3, file: 'palette_artisan_3_butter_s3.png' },
    { key: 'olive', slide: 4, file: 'palette_artisan_4_olive_s4.png' },
    { key: 'blush', slide: 5, file: 'palette_artisan_5_blush_s5.png' },
    { key: 'beige', slide: 6, file: 'palette_artisan_6_beige_s6.png' },
    { key: 'pistachio', slide: 7, file: 'palette_artisan_7_pistachio_s2.png' },
    { key: 'oyster', slide: 8, file: 'palette_artisan_8_oyster_s4.png' },
    { key: 'laid', slide: 1, file: 'palette_artisan_9_laid_s1.png' }
  ];

  console.log('\n[Quiet Slides] Capturing Style A Palettes (9 colorways)...');
  for (const item of artisanPalettes) {
    console.log(`  -> Capturing Palette ${item.key} on Slide ${item.slide}: ${item.file}...`);
    await page.evaluate((k, s) => {
      window.applyPalette(k, false);
      window.goToSlide(s);
    }, item.key, item.slide);
    await completeGSAP();
    await hideToast();

    const stage = await page.$('#deck-stage');
    const outPath = path.join(assetsDir, item.file);
    await stage.screenshot({ path: outPath });
  }

  // Reset back to celadon & slide 1
  await page.evaluate(() => {
    window.applyPalette('celadon', false);
    window.goToSlide(1);
  });
  await completeGSAP();
  await restoreToast();

  // 3. Capture Feature Screenshots (Drawer, Inline Edit, Fullscreen)
  console.log('\n[Quiet Slides] Capturing Feature Screenshots...');

  // 3a. Color Drawer Open
  console.log('  -> Capturing feature_drawer.png...');
  await page.evaluate(() => {
    const drawer = document.getElementById('drawer');
    if (drawer) drawer.classList.remove('translate-x-full');
  });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(assetsDir, 'feature_drawer.png') });

  // Close drawer
  await page.evaluate(() => {
    const drawer = document.getElementById('drawer');
    if (drawer) drawer.classList.add('translate-x-full');
  });
  await new Promise(r => setTimeout(r, 300));

  // 3b. Inline Edit Mode
  console.log('  -> Capturing feature_inline_edit.png...');
  await page.evaluate(() => {
    window.toggleEditMode(true);
  });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(assetsDir, 'feature_inline_edit.png') });

  // Exit edit mode
  await page.evaluate(() => {
    window.toggleEditMode(false);
  });
  await new Promise(r => setTimeout(r, 300));

  // 3c. Fullscreen Mode
  console.log('  -> Capturing feature_fullscreen.png...');
  await hideToast();
  await page.evaluate(() => {
    document.body.classList.add('is-fullscreen');
    document.body.style.setProperty('background-color', '#000000', 'important');
    window.updateStageScale();
    if (window.gsap) window.gsap.globalTimeline.progress(1);
  });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(assetsDir, 'feature_fullscreen.png') });

  // Clean up
  await page.evaluate(() => {
    document.body.classList.remove('is-fullscreen');
    window.updateStageScale();
  });
  await restoreToast();

  await browser.close();
  console.log('\n[Quiet Slides] All Style A screenshots successfully generated and updated in assets/screenshots/!');
}

main().catch(err => {
  console.error('[Quiet Slides] Screenshot generation failed:', err);
  process.exit(1);
});
