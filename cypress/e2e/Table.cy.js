describe('Handle Tables',()=>{
    //In cypress we call beforeEach as Hook,it will executed befor every it block
    beforeEach('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php");
        cy.get('#input-username').type("demo");
        cy.get('#input-password').type("demo");
        cy.get("button[type='submit']").click();

        cy.get(".btn-close").click();

        //Customers Main menu --->Then Customers Sub menu
        cy.get('#menu-customer >a').click();//Click on Customer main-menu
        cy.get('#menu-customer >ul >li:first-child').click();//Click on Customers sub/child item


    })
    it('Check Number of Rows and Columns',()=>{
        //To get No of Rows
        cy.get('table[class="table table-bordered table-hover"] > tbody >tr').should('have.length','10');

        //To get No of Column
        cy.get('table[class="table table-bordered table-hover"] > thead >tr >td').should('have.length','7');

    })
    it('Check Cell data from specific row & column',()=>{
        //cell value of 5th row and 3rd column
        cy.get('table[class="table table-bordered table-hover"] > tbody>tr:nth-child(5) > td:nth-child(3)')
        .contains('princytrainings4@gmail.com');
        
    })

    it('Read all the rows and columns data in first page',()=>{

        //we need to capture all row
        cy.get('table[class="table table-bordered table-hover"] >tbody >tr')
        //$row is represting current row
           .each(($row,index,$rows)=>{
             cy.wrap($row).within( ()=>  {
                //$col represnt first column
                cy.get("td").each(($col,index,$cols)=>{
                    cy.log($col.text());

                })

             })

           })
        
    })
    it.only('Pagination',()=>{

    //To get Total no of pages first,present in particluar table
    //Find Total No of pages
   /* let totalPages;
    cy.get('.col-sm-6.text-end').then((e)=>{
        const mytext=e.text();//Showing 1 to 10 of 12430 (1243 Pages)
        totalPages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1 );//Starting index, ending index
        cy.log("Total number of pages in Table =============>"+totalPages);

    })*/
    //To get Data from table of totalpages
    let totalPages=5;
    for(let p=1;p<=totalPages;p++){
        if(totalPages>1){
            cy.log("Current Active Page is==========>"+p);
            cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
            cy.wait(2000);//wait for 2sec

            cy.get('table[class="table table-bordered table-hover"] >tbody >tr')//capture every row
            .each(($row ,index,$rows)=>{ //read every row
                cy.wrap($row).within(()=>{//wrap every row 
                    cy.get('td:nth-child(3)').then((e)=>{//Then get 3rd column of the row
                        cy.log(e.text());//it will capture email address of 3rd column

                    } )
                })
            })


        }
    }
        
    })

})