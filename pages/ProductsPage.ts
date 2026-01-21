import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async searchProduct(product: string) {
    await this.page.fill('#search_product', product);
    await this.page.click('#submit_search');
  }

  async addFirstProductToCart() {
    await this.page.locator('.product-image-wrapper').first().waitFor({ state: 'visible', timeout: 10000 });
    await this.page.locator('.product-image-wrapper').first().hover();
    await this.page.locator('.product-image-wrapper').first().locator('.add-to-cart').first().click();
    await this.page.click('button[data-dismiss="modal"]');
  }

  async hasResults() {
    return this.page.locator('.product-image-wrapper').first().isVisible();
  }
}
