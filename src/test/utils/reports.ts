// // generate-report.ts
// //import { generate } from 'multiple-cucumber-html-reporter';
// //const reporter = require('multiple-cucumber-html-reporter');
// import report from 'multiple-cucumber-html-reporter';
// report.generate({
//   jsonDir: "test-results",
//   reportPath: "./",
//   durationInMS: false,
//   metadata: {
//     browser: {
//       name: "chrome",
//       version: "latest",
//     },
//     device: "Local test machine",
//     platform: {
//       name: "osx",
//       version: "Sonoma",
//     },
//   },
//   customData: {
//     title: "Playwright Cucumber Automation using Typescript",
//     data: [
//       { label: "Project", value: "Playwright Cucumber Automation Project" },
//       { label: "Release", value: "1.0.0" },
//     ],
//   },
// });