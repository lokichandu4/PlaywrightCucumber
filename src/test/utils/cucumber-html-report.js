import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Now you can safely require the older package
const report = require('multiple-cucumber-html-reporter');
const moment = require('moment');

const executionStartTime = moment().format('MMMM Do YYYY, h:mm:ss A');
const executionEndTime = moment().add(30, 'minutes').format('MMMM Do YYYY, h:mm:ss A');

report.generate({
 jsonDir: 'reports',// Path of cucumber json file
 reportPath: 'test-results',//path of required report
    reportTitle: 'Latest Execution',
    overwrite: true,
 metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: executionStartTime},
            {label: 'Execution End Time', value: executionEndTime}
        ]
    }
});

//"posttest": "npx ts-node src/test/utils/reports.ts
/*

"scripts": {
    "test": "cucumber-js test",
    "posttest": "npx ts-node src/test/utils/cucumber-html-report.js",
    "generate-report": "npx ts-node src/test/utils/cucumber-html-report.js",
    "execute:report": "npm run test && npm run generate-report"
  },

  */