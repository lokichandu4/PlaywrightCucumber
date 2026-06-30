module.exports = {
    
    default: {
        tags: process.env.npm_config_TAGS || "",
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "src/test/features/loginPageObject.feature"
        ],
        publishQuite: true,
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/test/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "html:test-results/cucumber-report.html",
            "progress",
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        parallel: 2,
        timeout: 60000
    },
    rerun: {
        formatOptions: {
            snippetInterface: "async-await"
        },
        publishQuite: true,
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/test/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "html:test-results/cucumber-report.html",
            "progress",
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        parallel: 2,
        timeout: 60000
    }

}