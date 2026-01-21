import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('je suis sur la page accueil', async function () {
  await this.homePage.goto();
  // Supprime le blocage "fc-dialog-overlay"
  await this.homePage.acceptCookies();
});

When('je recherche le produit {string}', async function (product) {
  await this.homePage.goToProducts();
  await this.productsPage.searchProduct(product);
});

Then('les resultats de recherche sont affiches', async function () {
  expect(await this.productsPage.hasResults()).toBeTruthy();
});