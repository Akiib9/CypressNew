/// <reference types="cypress" />
describe('Login test',function(){
it('my first test cases',function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.login('Admin','admin123')
})
})