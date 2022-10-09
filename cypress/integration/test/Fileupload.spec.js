describe('New files',function(){
    it('Images',function(){
        cy.visit('https://the-internet.herokuapp.com/upload')
        const filepath='download (1).jpg'
        cy.get('input[type="file"]').attachFile(filepath)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('download (1).jpg')
    })
})