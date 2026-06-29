const report = require('multiple-cucumber-html-reporter');

report.generate({
    // Make sure these paths match where your JSON is actually saved
    jsonDir: './test-results/', 
    reportPath: './test-results/html-report/',
    displayDuration: true,
    metadata: {
        browser: {
            name: 'chrome',
            version: 'latest'
        },
        device: 'Local Mac',
        platform: {
            name: 'osx',
            version: 'latest'
        }
    }
});