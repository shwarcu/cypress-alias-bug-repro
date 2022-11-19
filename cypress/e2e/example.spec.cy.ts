import { DEFAULT_VIDEO_URL, OTHER_VIDEO_URL } from '../../src/constants';
describe('Alias problem reproduction', () => {
  it('fails when using get command after previously waiting for alias with the same name', () => {
    cy.intercept(DEFAULT_VIDEO_URL, (request) => {
      request.redirect(OTHER_VIDEO_URL);
    }).as('video');
    cy.visit('');

    cy.wait('@video');

    cy.get('video').should('have.attr', 'src');
  });

  it('passes with other alias name', () => {
    cy.intercept(DEFAULT_VIDEO_URL, (request) => {
      request.redirect(OTHER_VIDEO_URL);
    }).as('somethingElse');
    cy.visit('');

    cy.wait('@somethingElse');

    cy.get('video').should('have.attr', 'src');
  });

  it('passes when not using cy.wait command', () => {
    cy.intercept(DEFAULT_VIDEO_URL, (request) => {
      request.redirect(OTHER_VIDEO_URL);
    }).as('video');
    cy.visit('');

    // cy.wait('@video');

    cy.get('video').should('have.attr', 'src');
  });

  it('passes when not modyfing request', () => {
    cy.intercept(DEFAULT_VIDEO_URL).as('video');
    cy.visit('');

    cy.wait('@video');

    cy.get('video').should('have.attr', 'src');
  });
});
