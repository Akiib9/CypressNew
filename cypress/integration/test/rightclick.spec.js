describe('rightclick',function(){
    it('test',function(){
       cy.visit('http://deluxe-menu.com/popup-mode-sample.html')
       cy.get(':nth-child(17) > img').rightclick()
       cy.contains('Contact Us').click()
    })
})