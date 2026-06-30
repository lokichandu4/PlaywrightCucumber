// report.cjs
const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './test-result/', // Path where your cucumber JSON files are dropped
    reportPath: './test-result/html-report/',
    displayDuration: true,
    metadata: {
        browser: {
            name: 'chrome',
            version: 'latest'
        },
        device: 'Local Mac Machine',
        platform: {
            name: 'osx',
            version: 'latest'
        }
    },
    customData: {
        title: 'Run Info',
        data: [
            { label: 'Project', value: 'Playwright Cucumber Automation' },
            { label: 'Release', value: '1.0.0' }
        ]
    }
});