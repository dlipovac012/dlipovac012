describe('Canvas loading test - ', () => {

	it('should load canvas', () => {
		cy.visit('http://localhost:8080');

		cy.get('section').contains('canvas');
	});
});