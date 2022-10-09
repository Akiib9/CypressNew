/// <reference types="cypress" />
describe('Login test',function(){
it('my first test cases',function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Akee')
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Ishraque')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Shaikh')
    cy.get('.oxd-button--secondary').click()
})
})