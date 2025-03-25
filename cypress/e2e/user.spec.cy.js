
import userDate from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPagefrom from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import CadastroPage from '../pages/cadastroPage.js'



const loginPage = new LoginPage()
const dashboard = new DashboardPagefrom()
const menuPage= new MenuPage()
const cadastroPage= new CadastroPage() 


describe('Orange HRN', () => {

  const selectorsList =  {
 
    
  
  }
  
  it.only('login com sucesso', () => {
   
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userDate.userSuccess.username,userDate.userSuccess.password)
    dashboard.checkPage()
    menuPage.accessMyInfo()
    cadastroPage.successFulRegistration()
    
})

  

  it('login sem sucesso', () => {
    cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type(userDate.userFail.username)
      cy.get(selectorsList.passwordField).type(userDate.userFail.password)
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredencialAlert)
   
})
})