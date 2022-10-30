describe('Drag and drop',function(){
    it.only('Test',function(){
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        //cy.frameLoaded('.demo-frame')
        cy.wait(2000)
        const dataTransfer=new DataTransfer
        cy.get('#column-a').trigger('dragstart',{dataTransfer})
        cy.get('#column-b').trigger('drop',{dataTransfer})
    })
    it('Test',function(){
        cy.visit('https://jqueryui.com/droppable/')
        //cy.frameLoaded('.demo-frame')
        cy.wait(2000)
        //const dataTransfer=new DataTransfer
        cy.contains('Drag me to my target').wait(2000).drag('#droppable',{force:true})
    })
})