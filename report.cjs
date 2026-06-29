const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './test-results/', // Ensure this matches where your JSON files are saved
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