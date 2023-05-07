// before
// after
// beforeEach
// AfterEach ,4 hooks provided by cypress

// before: It is executed before starting all the test
// after: It will be executed after completion of all test

// beforeEach: This particular hook is executed multiple times before each 'it' block
// AfterEach: This particular hook is executed multiple times after completion  of every 'it' block

describe('MyTestSuite',()=>{

    before(()=>{ //It will executed only once,before each it block
        cy.log("***** Launch App ******");
    })
    after(()=>{ // It will executed only once,after completion of every it block
        cy.log("***** Close App ******");
    })
    beforeEach(()=>{ // It will executed executed multiple times before every it block
        cy.log("***** Login ******");
    })
    afterEach(()=>{ // It will executed executed multiple times after completion  every it block
        cy.log("***** Logout  ******");
    })


    it('search',()=>{
        cy.log('******* searching *******');

    })
    it('advanced search',()=>{
        cy.log('******* advanced searching *******');
    })
    it('listing Products',()=>{
        cy.log('******* Listing Products *******');
        
    })
})