describe('New files',function(){
    it('Images',function(){
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr', 'target').click()
        cy.url()
      .should('include', 'https://the-internet.herokuapp.com/windows/new').wait(4000)
      // shift to parent window
     cy.go('back');
    })
    
})