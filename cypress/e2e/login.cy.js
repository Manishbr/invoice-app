describe('Login Test', () => {
  it('should login with valid credentials', () => {
    cy.visit('http://localhost:3000/login'); // Update with your app's login URL

    cy.get('input[name="username"]').type('admin'); // Replace with actual input names/selectors
    cy.get('input[name="password"]').type('password'); // Replace with actual input names/selectors

    cy.get('button[type="submit"]').click(); // Update if your login button has different attributes

    cy.url().should('include', '/dashboard'); // Replace '/dashboard' with the expected post-login URL
  });
});
