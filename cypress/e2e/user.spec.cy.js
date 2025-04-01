
import userDate from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import MenuPage from '../pages/menuPage.js'
import RegisterPage from '../pages/registerPage.js'


const Chance = require('chance')
const chance = new Chance()
const loginPage = new LoginPage()
const menuPage = new MenuPage()
const registerPage = new RegisterPage()



describe('Orange HRN', () => {
  
  it('user info Update-Success', () => {
   
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userDate.userSuccess.username,userDate.userSuccess.password)  

    menuPage.accessMyInfo()

    registerPage.fillPersonallDetails(chance.first(),chance.last(),chance.last())
    registerPage.fillEmployeeDetails('TI','4321','1234','2025-03-31')
    registerPage.fillStatus()
    registerPage.saveForm()
    
})

  
})