import 'cypress-iframe'

describe('Handling Frames',()=>{
    it('Approach 1',()=>{
        cy.visit('http://the-internet.herokuapp.com/iframe');//launch our application
        const iframe= cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')//Only one document,So 0(zero is used)
        .should('be.visible')
        .then(cy.wrap);//Inside it we are getting the frame,inside the frame we have document part,check if it is visible or not bot and wrap that element

        iframe.clear().type("Welcome {ctrl+a}");//For window {ctrl+a} to select  text,for mac{cmd+a}
        cy.get("[aria-label='Bold']").click();

        //for multiple iframes, we can create custom commands and can use it in multiple place.We create our custom commands inside support >> commends.js
    })
    it('Approach 2-By using Custom commands',()=>{
        cy.visit('http://the-internet.herokuapp.com/iframe');//launch our application
        cy.getIframe().clear().type("Welcome {ctrl+a}");//For window {ctrl+a} to select  text,for mac{cmd+a}
        cy.get("[aria-label='Bold']").click();

        //for multiple iframes, we can create custom commands and can use it in multiple place.We create our custom commands inside support >> commends.js
    })

    //By using cypress default plugin ,we can handle iframe
    it.only('Approach 3-By using Cypess iframe plugin',()=>{
        cy.visit('http://the-internet.herokuapp.com/iframe');//launch our application

       //frameLoaded comes from plugin of iframe 

        cy.frameLoaded('#mce_0_ifr');//Load the frame

        cy.iframe('#mce_0_ifr').clear().type("Welcome to kathmandu {ctrl+a}");
        cy.get("[aria-label='Bold']").click();

       
    })

})