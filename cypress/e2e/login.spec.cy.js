
import userDate from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPagefrom from '../pages/dashboardPage.js'




const loginPage = new LoginPage()
const dashboard = new DashboardPagefrom()


describe('login Orange HRN', () => {
  
  it('login success', () => {
   
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userDate.userSuccess.username,userDate.userSuccess.password)
    dashboard.checkPage()
    
    
})

  
  it('login fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userDate.userFail.username,userDate.userFail.password)
    
   
})
})