import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://automationexercise.com');
    // On attend que le réseau soit calme pour laisser les scripts se stabiliser
    await this.page.waitForLoadState('networkidle');
  }

  async acceptCookies() {
    // Localise le bouton de consentement Google qui intercepte les clics
    const consentButton = this.page.locator('button:has-text("Consent"), .fc-cta-consent');
    if (await consentButton.isVisible()) {
        await consentButton.click();
    }
  }

  async goToProducts() {
    // Utilisation de force: true indispensable car la modale peut gêner le clic
    await this.page.click('a[href="/products"]', { force: true });
  }
}