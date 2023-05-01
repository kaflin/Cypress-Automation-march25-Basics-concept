describe('Handle tabs',() => {
  it.skip('Approach 1',()=>{
    cy.visit('https://the-internet.herokuapp.com/windows')//parent tab
    // cy.get('.example >a').click();
    //cypress cannot handle child tab directly,This will handle new tab but we cannot perform any activity on new tab
    //Inorder to perform action on new tab ,we have to remove attribute,So here target is our attribute

    //To remove attribute in Tab we have command in cypress
    cy.get('.example >a').invoke('removeAttr','target').click(); //clicking on link after removing target attribute

    // To verify url in child window is correct or not
    cy.url().should('include','https://the-internet.herokuapp.com/windows/new') //Assertion on child tab

    cy.wait(5000);//Wait so that we can know weather it is navigated to child elemnet or not for 5 sec

    //Operations,After perfroming operation on child tab we have to go to parent tab
    cy.go('back'); //back to parent tab


    

  } )  


  //In Appraocah 2,Parent tab and child tab domain should be same i.e ''https://the-internet.herokuapp.com/windows''
  it('Approach 2',()=>{
    cy.visit('https://the-internet.herokuapp.com/windows')//parent tab
    cy.get('.example >a').then((e)=>{
        let url=e.prop('href')
        cy.visit(url);

    }) //To capture href attribute(We are getting elememt and capturing that element on 'e' and storing href on url)

    // To verify url in child window is correct or not
    cy.url().should('include','https://the-internet.herokuapp.com/windows/new') //Assertion on child tab

    cy.wait(5000);//Wait so that we can know weather it is navigated to child elemnet or not for 5 sec

    //Operations,After perfroming operation on child tab we have to go to parent tab
    cy.go('back'); //back to parent tab


    

  } ) 
})



































