class CadastroPage{

    selectorList(){
        const selectors= {
            
    fistNameField:"[name='firstName']",
    middleNameField:"[name='middleName']",
    lastNameField:"[name='lastName']",
    genericField:".oxd-input--active",
    licenseExpiryDate:"[placeholder='yyyy-dd-mm']",
    nationalyField:"[tabindex='0']",
    dateCloseButton:'.--close',
    saveButton:'.oxd-button--medium',
    genericComboBox:".oxd-select-text",
    secondItenComboBox:':nth-child(6) > span',
    thirdItenComboBox: '.oxd-select-dropdown > :nth-child(4)'


        }

        return selectors

    }

    successFulRegistration() {
      cy.get(this.selectorList().fistNameField).clear().type('Tiago')
      cy.get(this.selectorList().middleNameField).clear().type('F')
      cy.get(this.selectorList().lastNameField).clear().type('silva')
      cy.get(this.selectorList().genericField).eq(3).clear().type(' TI ')
      cy.get(this.selectorList().genericField).eq(4).clear().type(' 1234 ')
      cy.get(this.selectorList().genericField).eq(5).clear().type( '4321')
      cy.get(this.selectorList().genericField).eq(6).clear().type('2025-03-03')
      //cy.get(selectorsList.dateCloseButton).click()
      cy.get(this.selectorList().genericComboBox).eq(0).click({force: true})
      cy.get(this.selectorList().secondItenComboBox).click()
      cy.get(this.selectorList().genericComboBox).eq(1).click()
      cy.get(this.selectorList().thirdItenComboBox).click()

      cy.get(this.selectorList().saveButton).eq(0).click ()
      cy.get('body').should('contain', 'Successfully Updated')
      cy.get('.oxd-toast-close')


    }
}

export default CadastroPage