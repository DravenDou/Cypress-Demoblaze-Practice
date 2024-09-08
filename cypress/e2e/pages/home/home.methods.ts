import { StringNullableChain } from "cypress/types/lodash";
import { loginMethods } from "../login/login.methods";
import { homeCategoryElements } from "./home.elements";
import { homePhones } from "./home.data";


export class homeMethods {
         
     static selectProduct (productName : string) {
       return cy.contains ("a", productName);
     }

     static clickOnPhones () : void {
        loginMethods.clickOnElement(homeCategoryElements.categoryPhoneS)
     }
     static clickOnLaptops () : void {
      loginMethods.clickOnElement(homeCategoryElements.categoryLaptop)
   }
   static clickOnMonitors () : void {
      loginMethods.clickOnElement(homeCategoryElements.categoryMonitor)
   }

   static clickOnLink () { 
      this.selectProduct(homePhones.samsungS6).click()
   }


}