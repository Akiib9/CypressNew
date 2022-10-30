describe('Fine set',function(){
    before('My test',function(){
        cy.fixture('orange').then(function(data){
            this.data=data
        })
    })
    it('List test',function(){
       const websitter=Cypress.env('websitter')
        cy.visit(websitter)
        cy.get('input[maxlength="61"]').type(this.data.fullname)
        cy.get('input[onclick="javascript:UncheckAllOptions();"]').type(this.data.rediffmailid)
        cy.get('.btn_checkavail').click()
        cy.get('input[id="newpasswd"]').type(this.data.pass)
        cy.get('input[id="newpasswd1"]').type(this.data.repassword)
        cy.get('#eyeiconNew').click()
        cy.get('#eyeiconRe').click()
        cy.get('input[type="checkbox"]').click()
        cy.get('select[style="width:285px;"]').select('What is your favourite food?')
        cy.get('input[type="password"]').type(this.data.foods)
        cy.get(':nth-child(6) > :nth-child(3) > input').type(this.data.mname)
        cy.get('#mobno').type(this.data.contact)
        //cy.get('[name="DOB_Day72f76886"]').select('24')
        cy.get('input[value="m"]').click().should('be.checked')
        cy.get('select[style="width: 183px;"]').select('India').should('contain.text','India')
        cy.get('select[style="width:183px;"]').select('Mumbai')
    })
})