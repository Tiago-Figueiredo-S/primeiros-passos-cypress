
class MenuPage{

    selectorList( ) {

        const Selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']"

  }

return Selectors
 
  }

  accessMyInfo() {
    cy.get(this.selectorList().myInfoButton).click()

  }
}

export default MenuPage