import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the product page", () => {
    cy.visit('/?post_type=product')
})

Then("I should see the product list", () => {
    cy.get('[data-block-name="woocommerce/product-collection"]').should('be.visible');
});

Then("I should see the product {int} regular price as {string} and sale price {string}", (productId, regularPrice, salePrice) => {
    cy.get(`.post-${productId} > .wp-block-woocommerce-product-price > .wc-block-components-product-price > del > .woocommerce-Price-amount > bdi`)
        .should('have.text', regularPrice);
    cy.get(`.post-${productId} > .wp-block-woocommerce-product-price > .wc-block-components-product-price > ins > .woocommerce-Price-amount > bdi`)
        .should('have.text', salePrice);
});

Then("I should see the product {int} regular price must be strikethrough", (productId) => {
    cy.get(`.post-${productId} > .wp-block-woocommerce-product-price > .wc-block-components-product-price > del`)
        .should('have.css', 'text-decoration-line', 'line-through');
})