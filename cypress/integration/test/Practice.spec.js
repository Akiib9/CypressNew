describe('Fine set',function(){
    before(function(){
        cy.fixture('example').then(function(data){
             globalThis.data=data
        })
    })

    it('Loading',function(){
        const website=Cypress.env('website')
        cy.visit(website)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(globalThis.data.fullName)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(globalThis.data.number)
        cy.get('.oxd-button').click()
    })
})