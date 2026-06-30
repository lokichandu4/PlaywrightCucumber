
import { Given, When, Then } from "@cucumber/cucumber";
import DashboardPage from "../pageObjects/DashboardPage";

const dashboardPage = new DashboardPage();
 
Then('verify login is success {string}', async function (s: string){
  await dashboardPage.verifySucessMessaage(s)
})