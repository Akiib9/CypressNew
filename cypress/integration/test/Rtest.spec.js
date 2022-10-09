describe('New test',function(){
        it('Radio button',function(){
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            cy.get('input[value="radio1"]').click({force:true}).wait(3000)
        })
        it('Final test',function(){
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            cy.get('input[value="option2"]').click().should('be.checked').wait(4000)
        })
        it('Opera test',function(){
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            cy.get('#autocomplete').type('Australia').wait(5000)
        })
        it('Fire test',function(){
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            cy.get('#dropdown-class-example').select('Option2').wait(6000)
        })
        it('Sert test',function(){
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            cy.get('#openwindow').click().wait(7000)
        })
        it('Clear test',function(){
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            cy.get('#opentab').click().wait(8000)
        })
        it('Amine test',function(){
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            cy.get('#name').type('SAM').wait(3000)
            cy.get('#alertbtn').click()

        })

     })
    