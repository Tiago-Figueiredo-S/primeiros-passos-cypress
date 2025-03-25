
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
  
  it('login com sucesso', () => {
   
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userDate.userSuccess.username,userDate.userSuccess.password)
    dashboard.checkPage()
    menuPage.accessMyInfo()
    cadastroPage.successFulRegistration()
    cadastroPage.savedRegistratio()
    
})

  

  it('login sem sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userDate.userFail.username,userDate.userFail.password)
    
   
})
})