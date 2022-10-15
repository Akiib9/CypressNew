describe('Login test',function(){
    before(function(){
        cy.fixture('example').then(function(data){
            globalThis.data=data
        })
        
    })
    it('LoginFixtur',function(){
        cy.visit('https://register.rediff.com/register/register.php')
        cy.get('[width="200"] > input').type(globalThis.data.fullName)
        cy.get('[valign="bottom"] > [type="text"]').type(globalThis.data.number)
    })
    /* it.only('LoginFixtureV2',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(globalThis.data.Username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(globalThis.data.Password)
     })*/
})