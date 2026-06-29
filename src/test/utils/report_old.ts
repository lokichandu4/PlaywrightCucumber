// declare module 'multiple-cucumber-html-reporter' {
//   export interface Metadata {
//     browser?: {
//       name?: string;
//       version?: string;
//     };
//     username?: string;
//     device?: string;
//     platform?: {
//       name?: string;
//       version?: string;
//     };
//     [key: string]: unknown;
//   }

//   export interface GenerateOptions {
//     jsonDir?: string;
//     reportPath?: string;
//     durationInMS?: boolean;
//     metadata?: Metadata;
//     customData?: {
//       title?: string;
//       data?: Array<{ label: string; value: string }>;
//     };
//     useCDN?: boolean;
//     openReportInBrowser?: boolean;
//     saveCollectedJSON?: boolean;
//     displayReportTime?: boolean;
//     displayDuration?: boolean;
//     pageTitle?: string;
//     reportName?: string;
//     [key: string]: unknown;
//   }

//   export function generate(options: GenerateOptions): void;
// }

// type Metadata = import('multiple-cucumber-html-reporter').Metadata;
// type GenerateOptions = import('multiple-cucumber-html-reporter').GenerateOptions;

// const { generate } = require('multiple-cucumber-html-reporter') as {
//   generate: (options: GenerateOptions) => void;
// };

// const metadata: { [key: string]: Metadata } = {
//   'saucedemo.feature': {
//     browser: {
//       name: 'chrome',
//       version: '148',
//     },
//     username: 'Wasiq Bhamla',
//     device: 'MacBook Pro 14 inch',
//     platform: {
//       name: 'osx',
//       version: '26.5',
//     },
//   },
//   'restful-booker.feature': {
//     browser: {
//       name: 'api',
//       version: '',
//     },
//     username: 'Lokesh',
//     device: 'MacBook Pro 14 inch',
//     platform: {
//       name: 'osx',
//       version: '26.5',
//     },
//   },
// };

// //updateMetadata('reports/cucumber-report.json', metadata);

// // generate({
// //   jsonDir: 'reports/',
// //   reportPath: 'reports/report/',
// //   useCDN: false,
// //   openReportInBrowser: true,
// //   saveCollectedJSON: false,
// //   displayReportTime: true,
// //   durationInMS: true,
// //   displayDuration: true,
// //   pageTitle: 'My Playwright Typescript Sample',
// //   reportName: 'Cucumber JS Report',
// //   customData: {
// //     title: 'Playwright Sample',
// //     data: [
// //       { label: 'Project', value: 'Sample Playwright Typescript' },
// //       { label: 'Release', value: '1.0.0' },
// //       { label: 'Cycle', value: 'Build-1002' },
// //       { label: 'Playwright Version', value: '1.61.0' },
// //       { label: 'Test Environment', value: 'Dev' },
// //     ],
// //   },
// // });

// // function updateMetadata(arg0: string, metadata: { [key: string]: Metadata; }) {
// //   throw new Error('Function not implemented.');
// // }

// // generate-report.ts

// generate({
//   jsonDir: "./test-results",
//   reportPath: "./",
//   durationInMS: true, 
//   metadata: {
//     browser: {
//       name: "chrome",
//       version: "latest",
//     },
//     device: "Local test machine",
//     platform: {
//       name: "MacBook Pro 14 inch",
//       version: "26.5",
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
