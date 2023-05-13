import Login from "../PageObjects/LoginPage2";
// import Login from "../PageObjects/LoginPage";

describe('pom',()=>{

    //General Approach
    it('LoginTest',()=>{
       cy.visit("https://opensource-demo.orangehrmlive.com/");
       cy.get("input[placeholder='Username']").type("Admin");
       cy.get("input[placeholder='Password']").type("admin123");
       cy.get("button[type='submit']").click();
       cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',"Dashboard");
 })
    //using pom with fixture
    it.only('LoginTestViaPom',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.fixture('orangehrm').then((data)=>{
            const ln= new Login();
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.clickSubmit();
            ln.verifyLogin();  
        })
       
    })
})