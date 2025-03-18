
import userDate from '../fixtures/user-data.json'


describe('Orange HRN', () => {

  const selectorsList =  {
    usernameField:"[name='username']",
    passwordField: "[name='password']",
    loginButton: '.oxd-button',
    selectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    dashboardGrid: '.orangehrm-upgrade-layout .orangehrm-dashboard-grid',
    wrongCredencialAlert: '.oxd-alert',
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    fistNameField:"[name='firstName']",
    middleNameField:"[name='middleName']",
    lastNameField:"[name='lastName']",
    genericField:".oxd-input--active",
    licenseExpiryDate:"[placeholder='yyyy-dd-mm']",//1
    nationalyField:"[tabindex='0']",//1
    dateCloseButton:'.--close',
    saveButton:'.oxd-button--medium'

  }

  
    
  it.only('login com sucesso', () => {
    cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type(userDate.userSuccess.username)
      cy.get(selectorsList.passwordField  ).type(userDate.userSuccess.password)
      cy.get(selectorsList.loginButton).click()
      cy.location ('pathname').should('equal','/web/index.php/dashboard/index')
      cy.get(selectorsList.dashboardGrid)
      cy.get(selectorsList.myInfoButton).click()
      cy.get(selectorsList.fistNameField).clear().type('Tiago')
      cy.get(selectorsList.middleNameField).clear().type('F')
      cy.get(selectorsList.lastNameField).clear().type('silva')
      cy.get(selectorsList.genericField).eq(3).clear().type(' TI ')
      cy.get(selectorsList.genericField).eq(4).clear().type(' 1234 ')
      cy.get(selectorsList.genericField).eq(5).clear().type( '4321')
      cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-03')
      //cy.get(selectorsList.dateCloseButton).click()
      cy.get(selectorsList.saveButton).eq(0).click ()
      cy.get('body').should('contain', 'Successfully Updated')
      cy.get('.oxd-toast-close')
     
  })

  it('login sem sucesso', () => {
    cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type(userDate.userFail.username)
      cy.get(selectorsList.passwordField).type(userDate.userFail.password)
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredencialAlert)
   
})
})