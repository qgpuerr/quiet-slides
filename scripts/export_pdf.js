#!/usr/bin/env node
/**
 * Quiet Slides - Automated Headless 16:9 PDF Exporter
 * 
 * Usage:
 *   node scripts/export_pdf.js <path-to-html-file> [output-pdf-path]
 * 
 * Example:
 *   node scripts/export_pdf.js showcases/editing_principles/editing_principles_artisan.html artisan_deck.pdf
 */

const fs = require('fs');
const path = require('path');

async function main() {
  const inputArg = process.argv[2];
  if (!inputArg) {
    console.error('Usage: node scripts/export_pdf.js <input-html-path> [output-pdf-path]');
    process.exit(1);
  }

  const inputPath = path.resolve(process.cwd(), inputArg);
  if (!fs.existsSync(inputPath)) {
    console.error(`Error: File not found: ${inputPath}`);
    process.exit(1);
  }

  const defaultOutName = path.basename(inputPath, path.extname(inputPath)) + '.pdf';
  const outputPath = process.argv[3] ? path.resolve(process.cwd(), process.argv[3]) : path.resolve(path.dirname(inputPath), defaultOutName);

  let puppeteer;
  try {
    puppeteer = require('puppeteer');
  } catch (e) {
    try {
      puppeteer = require('puppeteer-core');
    } catch (e2) {
      console.error('Error: Please install puppeteer or puppeteer-core:');
      console.error('  npm install puppeteer');
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

  console.log(`[Quiet Slides] Launching Chrome...`);
  const launchOptions = {
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  };
  if (executablePath) launchOptions.executablePath = executablePath;

  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log(`[Quiet Slides] Loading ${inputPath}...`);
  await page.goto(`file://${inputPath}`, { waitUntil: 'domcontentloaded' });

  await new Promise(r => setTimeout(r, 600));

  console.log(`[Quiet Slides] Generating 16:9 PDF...`);
  await page.pdf({
    path: outputPath,
    preferCSSPageSize: true,
    printBackground: true,
    displayHeaderFooter: false,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  console.log(`[Quiet Slides] Successfully exported to: ${outputPath}`);
  await browser.close();
}

main().catch(err => {
  console.error('[Quiet Slides] Export failed:', err);
  process.exit(1);
});
