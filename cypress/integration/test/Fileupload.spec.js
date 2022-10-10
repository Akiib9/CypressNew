describe('New files',function(){
    it.only('Images',function(){
        cy.visit('https://the-internet.herokuapp.com/upload')
        const filepath='download (1).jpg'
        cy.get('input[type="file"]').attachFile(filepath)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('download (1).jpg')
    })
    it('Mimic',function(){
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('input[id="file-upload"]').click({force:true})
        //const aquib='Mimic.bmp'
        cy.get('input[type="file"]').attachFile('Mimic.bmp')
        cy.get('input[class="button"]').click()
        //cy.get('div[id="drag-drop-upload"]').contains('Mimic.bmp')
    })
})