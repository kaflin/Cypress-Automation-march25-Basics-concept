import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe("Mouse Operation",() =>{
    it('MouseHover',()=>{
        cy.visit('https://demo.opencart.com');
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should('not.be.visible');
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should('be.visible');

    });
    it('Right Click',()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');

        //Approach1 for Right click,use contextmenu for triggering to perform rightclick
        // cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
        // cy.get('.context-menu-icon-copy > span').should('be.visible');

        //Approach2 for Right click
        cy.get('.context-menu-one.btn.btn-neutral').rightclick(); //call rightclick method
        cy.get('.context-menu-icon-copy > span').should('be.visible');




    });
    it('Double click',()=>{
        cy.visit("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick");
        cy.frameLoaded('#iframeResult'); //Load the frame

        //Using Trigger event(Appraoch 1)-trigger()
        // cy.iframe('#iframeResult').find("p[ondblclick='myFunction()']").trigger('dblclick');//Inside iframe find the element which we want to load
        // cy.iframe('#iframeResult').find('#demo').should('contain','Hello World');
        
        //Approach 2-dblclick()
        cy.iframe('#iframeResult').find("p[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find('#demo').should('contain','Hello World');


 });
    it('Drag and Drop using plugin',()=>{
         //Drag and drop using plugin,source and target elemnet
         cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
         cy.get('#box6').should('be.visible');
         cy.get('#box106').should('be.visible');
         cy.wait(3000);
         cy.get('#box6').drag('#box106',{force:true}); //box6 to box106,sometime we have to forcefully drag and drop by writing force:true




    });
    it.only('Scrolling Page',()=>{
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html');

        //Nepal Flag
        cy.get(':nth-child(2) > tbody > :nth-child(23) > :nth-child(2)').scrollIntoView({duration:2000});//Scroll to Nepal flad with 2 sec pause
        cy.get(':nth-child(2) > tbody > :nth-child(23) > :nth-child(2)').should('be.visible');

        //Scroll Up to Albania
        cy.get(':nth-child(1) > tbody > :nth-child(3) > :nth-child(2)').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(3) > :nth-child(2)').should('be.visible')
    })
})