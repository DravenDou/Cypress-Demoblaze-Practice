import { loginInvalidData } from "./login.data";
import { loginLocators } from "./login.elements";
export class loginMethods {
     
   static getElement (element: string) { 
        cy.get(element);
    }

   static typeElement (locator : string, textElement: string) {
        cy.get(locator).type(textElement);
    }

  static  clickOnElement (locator : string) { 
        cy.get(locator).click();
    }

   static insertUsername () :void {
         this.typeElement(loginLocators.loginUsername, loginInvalidData.username)
    }

  static  insertPassword () :void {
        this.typeElement(loginLocators.loginPassword, loginInvalidData.password)
   }

 static  clickLoginButton () : void {
             this.clickOnElement(loginLocators.loginButton)
   }
   static  clickCloseButton () : void {
     this.clickOnElement(loginLocators.closeButton)
  }


   static loginMethod () : void {
    this.insertUsername();
    this.insertPassword();
    this.clickLoginButton();
    this.clickCloseButton();
   }

}