import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async goToCart() {
    await this.page.click('a[href="/view_cart"]');
  }

  async hasProductInCart() {
    return this.page.locator('.cart_info').isVisible();
  }
}
