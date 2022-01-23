import { getHeader, getProductFilter, productsJson } from '../support/app.po';

describe('Home Page', () => {
  beforeEach(() => cy.visit('/'));

  describe('Verify Header', () => {
    it('should display header message', async () => {
      getHeader().get('*[data-cy^="header-text"]').contains("Women's tops");
    });

    it('should contain select filter', async () => {
      getProductFilter().contains("select");
    });

    describe('Verify filter options', () => {
      it('should select size by default', () => {
        getProductFilter().should('have.value', 'size');
      });
      it('should select options and filter them as per selected filter', () => {
        cy.wait(1000); // =>

        getProductFilter().select('price');
        getProductFilter().should('have.value', 'price');

        getProductFilter().select('size');
        getProductFilter().should('have.value', 'size');
      });
    });
  });
});
