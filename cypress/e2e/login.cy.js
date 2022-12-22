import { LoginPage } from "../pages/login_page.cy";

const loginPage = new LoginPage

it('login test', () => {

    loginPage.navigate('https://trytestingthis.netlify.app/');
    loginPage.enterUsername('test');
    loginPage.enterPassword('test');
    loginPage.clickLoginButton();
    loginPage.clickBackHome();

})

it.only('file form', () => {
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#fname').type('Ndifreke')
    cy.get('#lname').type('Jacob')
    cy.get('#male').click()
    cy.get('#owc').select(['Option 1', 'Option 2'])
    cy.get('#option').select('Option 2')
    cy.get('[name="option1"]').check()
    cy.get('[name="option3"]').check()

    cy.get('[list="datalists"]').type('Strawberry')
    cy.get('<input list="datalists" name="Options">')
        .each(function ($element, index, $list){
            if($element.text().includes('Strawberry')){
                cy.wrap($element).click()
            }
            else{
                cy.log($element.text())
            }
        }) 
    cy.get('#favcolor').click() //select('#00ced1').should('have.value','#00ced1')
    cy.get('#day').click()
})