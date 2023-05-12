// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cyp ress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

require('@cypress/xpath');
// import { describe, it } from 'mocha';



//We Can use this commands in multiple place
Cypress.Commands.add('getIframe',(iframe)=>{
   return  cy.get('#mce_0_ifr')
    .its('0.contentDocument.body')//Only one document,So 0(zero is used)
    .should('be.visible')
    .then(cy.wrap);//Inside it we are getting the frame,inside the frame we have document part,check if it is visible or not bot and wrap that element

})

//custom command for clicking on link using label

Cypress.Commands.add('clickLink',(label)=>{
    cy.get('a').contains(label).click();
})