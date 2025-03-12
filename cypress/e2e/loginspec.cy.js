
import userDate from '../fixtures/user-data.json'


describe('Orange HRN', () => {

  const selectorsList =  {
    usernameField:"[name='username']",
    passwordField: "[name='password']",
    loginButton: '.oxd-button',
    selectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    dashboardGrid: '.orangehrm-upgrade-layout .orangehrm-dashboard-grid',
    wrongCredencialAlert: '.oxd-alert'


  }

  
    
  it('login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(selectorsList.usernameField).type(userDate.userSuccess.username)
      cy.get(selectorsList.passwordField  ).type(userDate.userSuccess.password)
      cy.get(selectorsList.loginButton).click()
      cy.location ('pathname').should('equal','/web/index.php/dashboard/index')
      cy.get(selectorsList.dashboardGrid)
      
  })

  it('login sem sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(selectorsList.usernameField).type(userDate.userFail.username)
      cy.get(selectorsList.passwordField).type(userDate.userFail.password)
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredencialAlert)
   
})
})