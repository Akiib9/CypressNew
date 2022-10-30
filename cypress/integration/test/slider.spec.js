describe('sliderscenario',function(){
    it('test',function(){
        cy.visit('https://jqueryui.com/resources/demos/slider/default.html')
        cy.get('.ui-slider-handle').invoke('attr','style','left: 40%;')
    })
})