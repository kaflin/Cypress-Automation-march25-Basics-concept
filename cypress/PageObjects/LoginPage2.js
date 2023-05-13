class Login{
    

    //All locators for Login
    txtUserName="input[placeholder='Username']";
    txtPassword= "input[placeholder='Password']";
    btnSubmit="button[type='submit']";
    labelMessage=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";

   setUserName(username){
        cy.get(this.txtUserName).type(username)
    }
    setPassword(password){
        cy.get(this.txtPassword).type(password)
    }
    clickSubmit(){
       cy.get(this.btnSubmit).click();
    }
    
    verifyLogin(){
        cy.get(this.labelMessage).should('have.text',"Dashboard");
    }
}
//If we want to use this class,we have to export it
export default Login;