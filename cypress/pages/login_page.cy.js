
export class LoginPage{

    loginPage_username = '#uname'
    loginPage_password = '#pwd'
    loginPage_loginButton = '[type="submit"]'
    loginPage_backHome = 'h4 > a'

    navigate(URL){
        cy.visit(URL)
    }
    enterUsername(username){
        cy.get(this.loginPage_username).type(username)
    }
    enterPassword(password){
        cy.get(this.loginPage_password).type(password)
    }
    clickLoginButton(){
        cy.get(this.loginPage_loginButton).click()
    }
    clickBackHome(){
        cy.get(this.loginPage_backHome).click()
    }
    
}

export class FormPage{
    formpage_firstname = ''
}