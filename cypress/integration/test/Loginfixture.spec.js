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
        //cy.get('.oxd-button').click() 
    })
   
})