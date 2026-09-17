#!/usr/bin/env node
/**
 * Quiet Slides - Automated Headless Clean HTML Exporter
 * 
 * Usage:
 *   node scripts/export_clean_html.js <path-to-interactive-html> [output-clean-html]
 */

const fs = require('fs');
const path = require('path');

async function main() {
  const inputArg = process.argv[2];
  if (!inputArg) {
    console.error('Usage: node scripts/export_clean_html.js <input-html-path> [output-clean-html]');
    process.exit(1);
  }

  const inputPath = path.resolve(process.cwd(), inputArg);
  if (!fs.existsSync(inputPath)) {
    console.error(`Error: File not found: ${inputPath}`);
    process.exit(1);
  }

  const defaultOutName = path.basename(inputPath, path.extname(inputPath)) + '_clean.html';
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

  const launchOptions = {
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  };
  if (executablePath) launchOptions.executablePath = executablePath;

  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto(`file://${inputPath}`, { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 400));

  const cleanHtml = await page.evaluate(async () => {
    return new Promise((resolve) => {
      let interceptedBlob = null;
      URL.createObjectURL = function(blob) {
        interceptedBlob = blob;
        return 'blob:captured';
      };

      const origClick = HTMLAnchorElement.prototype.click;
      HTMLAnchorElement.prototype.click = function() {
        if (this.download && interceptedBlob) {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsText(interceptedBlob);
          return;
        }
        origClick.call(this);
      };

      exportCleanDeckHTML();
    });
  });

  fs.writeFileSync(outputPath, cleanHtml, 'utf8');
  console.log(`[Quiet Slides] Clean standalone presentation exported to: ${outputPath}`);
  await browser.close();
}

main().catch(err => {
  console.error('[Quiet Slides] Export clean HTML failed:', err);
  process.exit(1);
});
