import {chromium, firefox, webkit, LaunchOptions} from '@playwright/test'

const options: LaunchOptions = {
  headless: process.env.CI ? true : false,
}

export const invokeBrowser= ()=>{
  //const browserType = (process.env.BROWSER || "chrome").toLowerCase().trim();
  const bType = process.env.npm_config_browser || process.env.BROWSER || "chrome";
  const browserType = bType.toLowerCase().trim();
  console.log("browser type: ", browserType);
  switch(browserType) {
    case "chrome":
      return chromium.launch(options)
    case "firefox":
      return firefox.launch(options)
    case "webkit":
      return webkit.launch(options)
    default:
      throw new Error("please provide valid browser name")
  }
}