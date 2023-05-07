describe('MyTestSuite',()=>{
    //Direct access
  /*  it.only('FixtureDemoTest',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.fixture('orangehrm').then( (data)=>{
          
      
        cy.get("input[placeholder='Username']").type(data.username);
        cy.get("input[placeholder='Password']").type(data.password);
        cy.get("button[type='submit']").click();
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',data.expected);
        })


    })*/
     //Access through Hook - for Multiple it blocks
     let userdata
     before(()=>{
        cy.fixture("orangehrm").then((data)=>{
            userdata=data;
        })
     })
     it('FixtureDemoTest',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get("button[type='submit']").click();
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',userdata.expected);
       })
})