import { loginMethods } from "./pages/login/login.methods"
import { loginLocators } from "./pages/login/login.elements"
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoblaze.com')
    loginMethods.clickOnElement(loginLocators.loginNav)
    loginMethods.loginMethod





  })
})