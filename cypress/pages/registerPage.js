import { Chance } from "chance"

class RegisterPage{

  

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

  fillPersonallDetails(fistNameField,middleNameField,lastNameField){

    cy.get(this.selectorList().fistNameField).clear().type(fistNameField)
    cy.get(this.selectorList().middleNameField).clear().type(middleNameField)
    cy.get(this.selectorList().lastNameField).clear().type(lastNameField)



  }

  fillEmployeeDetails(employeeId,otherId,driversLicenseNumber,expiryDate){
    cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
    cy.get(this.selectorList().genericField).eq(4).clear().type(otherId)
    cy.get(this.selectorList().genericField).eq(5).clear().type(driversLicenseNumber)
    cy.get(this.selectorList().genericField).eq(6).clear().type(expiryDate)

  }


  saveForm(){
    
    cy.get(this.selectorList().saveButton).eq(0).click ({force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

  }

  fillStatus(){
      
    cy.get(this.selectorList().genericComboBox).eq(0).click({force: true})
    cy.get(this.selectorList().secondItenComboBox).click()
    cy.get(this.selectorList().genericComboBox).eq(1).click()
    cy.get(this.selectorList().thirdItenComboBox).click()

  }

}

export default RegisterPage