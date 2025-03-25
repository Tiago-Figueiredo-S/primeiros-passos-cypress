
class DashboardPage {

	selectorList( ){

	const Selectors = {
		dashboardGrid: '.orangehrm-upgrade-layout .orangehrm-dashboard-grid'

	}
	return selectors

	}

	checkPage() {

		cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
	    //cy.get(this.constSelectors.dashboardGrid).should('be.visible')
	}

}

export default DashboardPage