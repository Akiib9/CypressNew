describe('custom command',function(){
    it('test',function(){
        cy.visit("https://www.google.com/");
      //custom parent command
      cy.userInput('Java')
    })
})