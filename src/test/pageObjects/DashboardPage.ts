
import { pageFixture } from "../hooks/pageFixture";
import { expect } from "@playwright/test";

export default class DashboardPage {
    private Elements = {
        sucessmessage_loc: "//h3[normalize-space()='Login Successfully']"
    }
    async verifySucessMessaage(message: string) {
        const page = pageFixture.page
        if (!page) throw new Error('Page is not initialized')
        const msg = await page.locator(this.Elements.sucessmessage_loc).textContent()
        expect(msg).toEqual(message)
    }
}