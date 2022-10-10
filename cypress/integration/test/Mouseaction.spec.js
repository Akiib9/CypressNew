/// <reference types= "cypress" />
describe('Mouseover',function(){
    it.only('test',function(){
        cy.visit('https://courses.letskodeit.com/practice').wait(5000)
        cy.get('div.mouse-hover-content').invoke('show').wait(4000)
        cy.contains('Top').click()
    })
    it('Meta',function(){
        cy.visit('https://courses.letskodeit.com/practice').wait(5000)
        cy.get('div[class="mouse-hover-content"]').invoke('show').wait(4000)
        cy.get('a[href="#top"]').click()
    })
})