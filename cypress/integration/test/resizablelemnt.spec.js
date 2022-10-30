describe('resizablelemnt',function(){
    it('test',function(){
       cy.visit('https://jqueryui.com/resources/demos/resizable/default.html')
       cy.get('#resizable').invoke('attr','style','width: 310px; height: 265px;') 
    })
})