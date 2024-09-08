import { loginMethods } from "./pages/login/login.methods"
import { loginLocators } from "./pages/login/login.elements"
import { registerMethods } from "./pages/register/register.methods";
import { registerLocators } from "./pages/register/register.elements";
import { homeMethods } from "./pages/home/home.methods";
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoblaze.com');
    loginMethods.clickOnElement(registerLocators.registerNav)
    registerMethods.registerMethod();
    loginMethods.clickOnElement(loginLocators.loginNav);
    loginMethods.loginMethod();
    homeMethods.clickOnLink();
    





  })
})