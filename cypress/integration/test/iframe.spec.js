describe('Iframe',function(){
    it('Test',function(){
       cy.visit('https://jqueryui.com/draggable/')        
       // you have to load iframe at first
       cy.frameLoaded('.demo-frame')  
       //shifting focus
       cy.iframe().find('#draggable').then(function(t){
        const frame=t.text()
        expect(frame).to.contains('Drag me around');
         cy.log(frame);
       })
    })
})