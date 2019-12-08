describe('Canvas loading test - ', () => {

	it('should render canvas', () => {
		cy.visit('http://localhost:8080');

		cy.get('section').within(() => {
			cy.get('canvas').should('be.visible');
		});
	});

	it('should only render one canvas', () => {
		cy.visit('http://localhost:8080');

		cy.get('section').within(() => {
			cy.get('canvas').its('length').should('eq', 1);
		});
	});
});