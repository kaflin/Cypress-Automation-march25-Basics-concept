describe('Handle Drodowns', () => {

    it.skip('Dropdown with select', () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html");
        //for normal select box
        cy.get('#zcf_address_country')
            .select('Italy')
            .should('have.value', 'Italy')

    })
    it.skip('dropdown without select', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application");
        //for dropdown having not normal select box i.e bootstraped dropdown
        /* 1.first click select Option
         2.type text and enter 
         3.assert text of particluar select */
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'Italy')

    })
    it.skip('Auto Suggested dropdown', () => {
        cy.visit("https://www.wikipedia.org/");
        cy.xpath('//*[@id="searchInput"]').type('Delhi')

        //select one of them from multiple select
        cy.get('.suggestion-title').contains('Delhi University').click()


    })
    it('Dynamic dropdown', () => {
        cy.visit("https://www.google.com/");
        cy.get("input[name='q']").type('cypress automation');
        cy.wait(3000)
        cy.get('div.wM6W7d>span').should("have.length", 12)
            //To capture total no of option
        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            if ($el.text() == 'cypress automation tutorial') {
                cy.wrap($el).click()
            }

        })
        cy.get("input[name='q']").should("have.value", 'cypress automation tutorial')



    })
})