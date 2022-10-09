Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('Dropdown, Check box, Radio button',function(){
      it.only('Dropdown test',function(){
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get('#dropdown-class-example').select('Option3').should('contain.text','Option3')
      cy.get('#autocomplete').click({force:true}).type('ind')
      cy.get('div[class="ui-menu-item-wrapper"]').each(($ele,index,$list)=>{
        const obj=$ele.text()
        if(obj==='India'){
            cy.wrap($ele).click()
        }
        else{

        }
      })
    })
    it('check box handling',function(){
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get('#checkBoxOption3').click().should('be.checked')
    })
    it('Radio button handling',function(){
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get('input[value="radio3"]').click().should('be.checked')
    })
})