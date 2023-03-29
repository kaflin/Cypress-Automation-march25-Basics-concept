const { it } = require("mocha");

describe('Assertions demo', () => {

    it('Implicit assertions', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        //should and
        // cy.url().should('include', 'orangehrm.com');
        //  cy.url().should('eq', 'https://www.orangehrm.com/');
        // cy.url().should('contain', 'orange');


        // short hand of writing same assertion
        // cy.url().should('include', 'orangehrm.com').should('eq', 'https://www.orangehrm.com/').should('contain', 'orange');

        // Writing same assertion using and without using should multiple time
        // cy.url().should('include', 'orangehrm.com')
        //     .and('eq', 'https://www.orangehrm.com/')
        //     .and('contain', 'orange');

        // For neagtive assertion we can also use
        cy.url().should('not.include', 'orangehrm.com')
            .and('not.eq', 'https://www.orangehrm.com/')
            .and('not.contain', 'greenOrange');


        // To verify Title of webpage
        cy.title().should('include', 'OrangeHRM')
            .and('contain', 'Orange')
            .and('eq', 'OrangeHRM');


        //To check particular logo is present(visible) or  display or not
        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist') //To check particluar logo is visible or not

        //To check total no of links are present or not
        cy.xpath("//a").should('have.length', 5);


        //To validate value of element
        cy.get("input[placeholder='Username']").type("Admin"); //provide value in input box

        //To verify value
        cy.get("input[placeholder='Username']").should('have.value', 'Admin');



    })
    it("Explicit Assertions", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        //To click on login button
        cy.get('.oxd-button').click();

        //BDD assertions
        let expName = 'vandy ch';
        cy.get('.oxd-userdropdown-tab').then((x) => {
            let actualName = x.text()
            expect(actualName).to.equal(expName)
            expect(actualName).to.not.equal(expName) // it should fail

            //TDD assertions
            assert.equal(actualName, expName)
            assert.notEqual(actualName, expName);
        })


    })

})