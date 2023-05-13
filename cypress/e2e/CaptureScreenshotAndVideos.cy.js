describe('mysuite',()=>{
    it('Capture screenshots & videos',()=>{
        cy.visit("https://demo.opencart.com/")

        // cy.screenshot("homepage");//Name to that particular screenshot,Capturing entire page
        // cy.wait(5000);

        //Capture screenshot of specific element or logo element
        // cy.get("img[title='Your Store']").screenshot("logo");

        //Automatically capture screenshot & videos  on failure - only when execute through CLI or command prompt or in terminal i.e, npx cypress run --spec cypress\e2e\CaptureScreenshotAndVideos.cy.js
        cy.get("li:nth-child(7) a:nth-child(1)").click();//cameras
        cy.get("div[id='content'] h2").should('have.text',"Tablets");//Expecting Cameras text but found Tablets text,Intentailloy to fail test to get ss and videos








    })
})