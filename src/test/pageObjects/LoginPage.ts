
import { pageFixture } from "../hooks/pageFixture";


export default class LoginPage {
    private Elements = {
        user_loc: "[name='userName']",
        password_loc: "//input[@name='password']",
        submit_loc: "[name='submit']"
    }

    async enterUserName(user: string) {
        //const page = pageFixture.page
        //if (!page) throw new Error('Page is not initialized')
        //await pageFixture.page?.locator(this.Elements.user_loc).fill(user)

        await pageFixture.page?.locator(this.Elements.user_loc).fill(user)

    }

    async enterPasswrod(password: string) {
        const page = pageFixture.page
        if (!page) throw new Error('Page is not initialized')
        await page.locator(this.Elements.password_loc).fill(password)
    }

    async clickSubmit() {
        const page = pageFixture.page
        if (!page) throw new Error('Page is not initialized')
        await page.locator(this.Elements.submit_loc).click()
    }
}
