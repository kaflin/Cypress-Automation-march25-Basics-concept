/// <reference types="Cypress" />

describe('CSSLocators', () => {
    it('csslocators', () => {
        cy.visit('https://www.amazon.com'); //To visit or open the url
        cy.get("#twotabsearchtextbox").type("Sneaker"); //We use get, to identify the element i.e using get() method
        cy.get("input#nav-search-submit-button").click();
        cy.get(".a-color-state").contains("Sneaker") //Assertions using contains() method

    })
})