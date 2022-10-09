describe('Mumbai Trip',function(){
    it('Via Train',function(){
        cy.visit('https://etrain.info/in')
        cy.get('#tbsfi1').click().type('HYD')
        cy.get('div[class="ui-menu-item"]').each(($ele,index,$list)=>{
            const obj=$ele.text()
            if(obj==='HYDERABAD DECAN (HYB)'){
                cy.wrap($ele).click({force:true})
            }
            else{

            }
        })
        cy.get('#tbsfi3').click().type('LOK')
        cy.get('div[class="ui-menu-item"]').each(($ele,index,$list)=>{
            const obj=$ele.text()
            if(obj==='LOKMANYATILAK T (LTT)'){
                cy.wrap($ele).click({force:true})
            }
            else{

            }
        })
        cy.get('#tbsfi4').click()
        cy.get('input[value="29"]').click()
        cy.get('#tbsfi5').select('Yuva')
        cy.get('#tbssbmtbtn').click()
        
    })
    it.only('Fight booking',function(){
        cy.visit('https://in.via.com/flight-tickets')
        cy.get('#source').type('mum')
        cy.get('span[class="name"]').each(($ele,index,$list)=>{
            const aquib=$ele.text()
            if(aquib==='Mumbai,Mumbai - India'){
                cy.wrap($ele).click()
            }
            else{
                
            }
        })
        cy.get('#destination').type('goa')
        cy.get('span[class="name"]').each(($ele,index,$list)=>{
            const zoya=$ele.text()
            if(zoya==='Goa,Goa - India'){
                cy.wrap($ele).click()
            }
            else{

            }
            cy.get('#departure').click()
            cy.get('div[data-date="30"]').click({ multiple: true })
            cy.get('#return').click()
            cy.get('div[data-date="28"]').click({force: true})
        })
    })
})
