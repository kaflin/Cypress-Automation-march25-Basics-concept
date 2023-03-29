describe('Check UI Elements', () => {
    it("Checking Radio Buttons", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");

        //Intereact with radio buttons,at a time we can select one radio buttons
        //be.visible representing behaviour of element
        cy.xpath("//*[@id='female']").should('be.visible')
        cy.xpath("//*[@id='male']").should('be.visible')


        //selecting radio buttons
        cy.get("input#male").check().should("be.checked")
        cy.get("input#female").should("not.be.checked")

        //opposite of above
        cy.get("input#female").check().should("be.checked")
        cy.get("input#male").should("not.be.checked")



    })

    it("Checking Check boxes", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");

        //Visibility of the element
        cy.xpath("//*[@id='monday']").should('be.visible')

        //selecting single check box-monday and assert weather it is selected or not
        cy.xpath("//*[@id='monday']").check().should('be.checked')

        //Unselecting checkbox
        cy.xpath("//*[@id='monday']").uncheck().should('not.be.checked')

        //selecting all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked');

        //Unselecting all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked');

        //selecting first checkboxes in bulk of checkboxes
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked');

        //selecting last checkboxes in bulk of checkboxes
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked');



    })
})