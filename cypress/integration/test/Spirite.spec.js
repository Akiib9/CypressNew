describe('Fatal test',function(){
    it('Master',function(){
        /*cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio2"]').click()
        cy.wait(1000)
        cy.get('input[value="option1"]').click().should('be.checked')
        cy.wait(500)
        cy.get('#dropdown-class-example').select('Option2')
        cy.get('#autocomplete').type('ind')
        cy.get('div[class="ui-menu-item-wrapper"]').each(($ele,index,$list)=>{
            const obj=$ele.text()
           if(obj==='India'){
            cy.wrap($ele).click()
           } 
           else{

           }
        })
        cy.wait(5000)
        cy.get('div.mouse-hover-content').invoke('show')
        cy.wait(4000)
        cy.contains('Reload').click({force: true})*/
        cy.visit('https://the-internet.herokuapp.com/upload')
        const filepath='Capture'
        cy.get('input[name="file"]').attachFile(filepath)
        cy.get('input[class="button"]').click()
        cy.get('#drag-drop-upload').contains('Capture')  
        /*cy.visit('https://the-internet.herokuapp.com/upload')
        const filepath='download (1).jpg'
        cy.get('input[type="file"]').attachFile(filepath)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('download (1).jpg')*/
        /*cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        const dataTransfer=new DataTransfer
        cy.get('#column-a').trigger('dragstart',{dataTransfer})
        cy.wait(2000)
        cy.get('#column-b').trigger('drop',{dataTransfer})
       cy.visit('https://jqueryui.com/droppable/')
        const dataTransfer=new DataTransfer
        cy.contains('Drag me to my target').trigger('dragstart',{dataTransfer})
        cy.contains('Drop here').trigger('drop',{dataTransfer})*/

    })
})