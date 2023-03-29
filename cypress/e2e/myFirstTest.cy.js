//Cypress follow Mocha framework,inside describe we can write multiple it block,it blocks represents test case
describe('My First Test', () => {
    it('verify title-positive', () => {
        //test steps-Postive test
        cy.visit("https://www.facebook.com/");
        cy.title().should('eq', 'Facebook')
    })
    it('verify title-negative', () => {
        //test steps-Negative test
        cy.visit("https://www.facebook.com/");
        cy.title().should('eq', 'Facebook152')
    })
})