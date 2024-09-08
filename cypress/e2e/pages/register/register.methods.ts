import { registerData } from "../register/register.data";
import { registerLocators } from "../register/register.elements";
import { loginMethods } from "../login/login.methods";
export class registerMethods {
    static insertUsername () :void {
         loginMethods.typeElement(registerLocators.registerUsername, registerData.username)
    }
    static  insertPassword () :void {
        loginMethods.typeElement(registerLocators.registerPassword, registerData.password)
   }
 static  clickRegisterButton () : void {
             loginMethods.clickOnElement(registerLocators.registerButton)
   }
   static clickCloseButton () : void {
      loginMethods.clickOnElement(registerLocators.closeButton)
   }

   static registerMethod () : void {
    this.insertUsername();
    this.insertPassword();
    this.clickRegisterButton();
    this.clickCloseButton();
   }
    
    
    





}