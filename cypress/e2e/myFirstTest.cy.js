describe('My First Test', () => {
    it('verify title-positive', () => {
        //test steps
        cy.visit("https://www.facebook.com/");
        cy.title().should('eq', 'Facebook')
    })
    it('verify title-negative', () => {
        //test steps
        cy.visit("https://www.facebook.com/");
        cy.title().should('eq', 'Facebook152')
    })
})