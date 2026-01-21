import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('j ajoute un produit au panier', async function () {
  await this.homePage.goToProducts();
  await this.productsPage.addFirstProductToCart();
});

Then('le produit apparait dans le panier', async function () {
  await this.cartPage.goToCart();
  expect(await this.cartPage.hasProductInCart()).toBeTruthy();
});
