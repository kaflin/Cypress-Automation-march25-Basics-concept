describe('XPathLocators', () => {
    it('find no of products', () => {
        cy.visit('https://www.amazon.com'); //To visit or open the url
        cy.xpath('//*[@id="gw-layout"]/div').should('have.length', 2)
    })
})