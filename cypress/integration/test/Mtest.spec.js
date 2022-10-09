describe('My test',function(){
    it('Option_3',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[type="checkbox"]').each(($ele,index,$list)=>{
            const obj=$ele.text()
            if(obj==='Option3'){
            cy.wrap($ele).click().should('be.checked')
            }
            else{
            }
        })
    })
    it('Radio_3',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[class="radioButton"]').each(($ele,index,$list)=>{
            const obj=$ele.text()
            if(obj==='Radio3'){
            cy.wrap($ele).click({force:true})
            }
            else{
            }
        })
    })
    it.only('Amazon',function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('watches')
        cy.get('div[class="s-suggestion-container"]').each(($ele,index,$list)=>{
            const obj=$ele.text()
            if(obj==='watches for boys'){
            cy.wrap($ele).click()
            }
            else{
            }
        })
        cy.get('span[class="a-dropdown-prompt"]').click().wait(4000)
        cy.get('a[href="/Stylist-Different-Attractive-Analog-Watch/dp/B07S7JZV1P/ref=sr_1_12?crid=RNBB2O2RB2PB&keywords=watches+for+boys&qid=1664818395&qu=eyJxc2MiOiI4LjEwIiwicXNhIjoiOC4zMCIsInFzcCI6IjYuODAifQ%3D%3D&sprefix=watches+for+boys%2Caps%2C482&sr=8-12"]').click()
    })
})