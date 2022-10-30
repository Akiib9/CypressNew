describe('Fine set',function(){
    before(function(){
        cy.fixture('cycode').then(function(data){
             this.data=data
        })
    })

    it('Loading',function(){
        const website=Cypress.env('website')
        cy.visit(website)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(this.data.username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(this.data.password)
        cy.get('.oxd-button').click()
    })                                                                                                    
})
describe('Site test',function(){
    it('Final test',function(){
     cy.visit('https://www.facebook.com/login/')
     cy.get('[data-testid="royal_email"]').type('aquibshaikh700@gmail.com')
     cy.get('[data-testid="royal_pass"]').type('Aqueeb@786#786')
     cy.get('[data-testid="royal_login_button"]').click()
    })
})