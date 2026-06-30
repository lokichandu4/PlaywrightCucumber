
export {
};
declare global {
    namespace NodeJS {
        interface processEnv {
            BROWSER: "chrome" | "firefox" | "webket"
            ENV: "staging" | "test" | "prod"
        }
    }
}
