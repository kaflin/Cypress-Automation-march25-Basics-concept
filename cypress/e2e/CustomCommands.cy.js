// click on link using label
// over writing existing contains() command
// re-usable cutom command

import 'cypress-label';
describe('Custom commands',()=>{
    it("handling links",()=>{
      //This is a direct way to perform click action-without using custom command
      cy.visit("https://demo.nopcommerce.com/");
      cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();
      

      //Using custom command
      cy.clickLink("Apple MacBook Pro 13-inch");
      cy.get("div[class='product-name'] h1").should('have.text',"Apple MacBook Pro 13-inch");

    



    })
    it.only("overwritibg existing command",()=>{
      cy.visit("https://demo.nopcommerce.com/");

         //Using custom command
      cy.clickLink("APPLE MACBOOK PROo 13-inch");
      cy.get("div[class='product-name'] h1").should('have.text',"Apple MacBook Pro 13-inch");
    })
    it("Login command",()=>{
        
    })
})