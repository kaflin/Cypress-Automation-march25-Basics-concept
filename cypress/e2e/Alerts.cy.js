describe('Alerts', () => {
    // 1)Javascript Alert:It will have some text and an "OK" Button
    it('JS Alert', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsAlert()']").click();

        //To trigger the event,to validate
        cy.on('window:alert', (t) => {
            // storing Alert into t variable and validating it
            expect(t).to.contains('I am a JS Alert')
        })


        cy.get("#result").should('have.text', 'You successfully clicked an alert')

    })



    //2) javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' Buttons
    it('JS Confirm Alert-OK', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsConfirm()']").click();
        //To trigger the event,to validate
        cy.on('window:confirm', (t) => {
                // storing Alert into t variable and validating it
                expect(t).to.contains('I am a JS Confirm')
            })
            //Cypress will automatically closed the window by clicking OK button-default
        cy.get('#result').should('have.text', 'You clicked: Ok')



    })
    it.only('JS Confirm Alert-Cancel', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsConfirm()']").click();
        //To trigger the event,to validate
        cy.on('window:confirm', (t) => {
                // storing Alert into t variable and validating it
                expect(t).to.contains('I am a JS Confirm')
            })
            //Close window alert by using cancel button
        cy.on('window:confirm', () => false)

        cy.get('#result').should('have.text', 'You clicked: Cancel')

    })




    //3) Javascript Prompt Alert: It will have some text with a text box for user input along with "Ok"

    it.only('JS prompt Alert-Ok', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts');

        //To get control on window and passing text on it
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome')
        })


        cy.get("button[onclick='jsPrompt()']").click();

        //cypress will automatically close prompted alert -it will use Ok button -by default
        cy.get("#result").should('have.text', 'You entered: welcome')
    })
    it.only('JS prompt Alert-Cancel', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts');

        //To get control on window and passing text on it
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome')
        })


        cy.get("button[onclick='jsPrompt()']").click();

        //Close window alert by using cancel button
        // cy.on('window:prompt', () => false)


        //cypress will automatically close prompted alert -it will use Ok button -by default
        cy.get("#result").should('have.text', 'You entered: welcome')
    })




    //4) Authenticated Alert
    it.only('Authenticated Alert', () => {

        //approach1
        cy.visit('https://the-internet.herokuapp.com/basic_auth',

            {
                auth: {
                    username: "admin",
                    password: "admin"
                }
            })

        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')

        //appraoch2
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')




    })



    // If we have to do some validation on alert window.
    // We have to trigger some event with our cypress automation script



})