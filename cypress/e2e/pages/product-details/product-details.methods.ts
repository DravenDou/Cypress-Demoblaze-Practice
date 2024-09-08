export class productDetailMethods { 

    static selectProductContain (productName : string) {
        return cy.contains ("a", productName);
      }
     

}