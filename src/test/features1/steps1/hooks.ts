
// import { chromium, Page, Browser, BrowserContext } from '@playwright/test'
// import { BeforeAll, AfterAll } from '@cucumber/cucumber'
// import { pageFixture } from './pageFixture';
// import { existsSync, readFileSync } from 'node:fs';
// import {
//   After,
  
//   Before,
//   type DataTable,
//   Given,
//   Status,
//   setDefaultTimeout,
//   Then,
//   When,
// } from '@cucumber/cucumber';
// import * as fs from 'fs';
// import * as path from 'path';

// let browser: Browser;
// let context: BrowserContext;
// let page: Page;

// BeforeAll(async function () {
//   browser = await chromium.launch({ headless: false });
//   context = await browser.newContext()
//   page = await context.newPage()
//   pageFixture.page = page;
// })

// Before({ tags: 'not @api' }, async () => {
//   context = await browser.newContext({
//     recordVideo: {
//       dir: './test-results/videos',
//       size: { width: 640, height: 480 },
//       showActions: {
//         duration: 500,
//       },
//     },
//   });
//   await context.tracing.start({
//     screenshots: true,
//     snapshots: true,
//     sources: true,
//   });
//   page = await context.newPage();
// });

// After({ tags: 'not @api' }, async function ({ pickle, result }) {
//   const tracePath = `./test-results/trace/${pickle.id}.zip`;
//   const screenshotPath = `./test-results/screenshots/${pickle.id}.png`;
//   let img: Buffer | undefined;
//   let video: Video | null = null;

//   if (!page.isClosed()) {
//     video = page.video();
//     img = await page.screenshot({ path: screenshotPath, type: 'png', fullPage: true });
//     this.attach(img, { mediaType: 'image/png', fileName: pickle.name });
//   }

//   await context.tracing.stop({ path: tracePath });
//   await context.close();

//   if (result?.status === Status.PASSED) {
//     const videoPath = await video?.path();
//     if (videoPath && existsSync(videoPath)) {
//       this.attach(readFileSync(videoPath), 'video/webm');
//     }
//     const traceFileLink = `<a href="https://trace.playwright.dev/">Open ${tracePath}</a>`;
//     this.attach(`Trace file: ${traceFileLink}`, 'text/html');
//   }
// });

// // After(async function ({ pickle }) {
// //   const images = await pageFixture.page?.screenshot({ path: `./test-results/screenshot/${pickle.name}.png`, type: 'png' })
// //   await this.attach(images, "image/png")
// // })

// // After(async function({ pickle }) {
// //   if (pageFixture.page) {
// //     // Capture screenshot as buffer
// //     const screenshot = await pageFixture.page.screenshot({
// //       path: `./test-results/screenshot/${pickle.name}.png`,
// //       type: 'png'
// //     });

// //     // Attach to Cucumber report
// //     await this.attach(screenshot, 'image/png');
// //   }

// AfterAll(async function () {
//   await pageFixture.page?.close()
//   await context.close()
//   await browser.close()
// })

// });