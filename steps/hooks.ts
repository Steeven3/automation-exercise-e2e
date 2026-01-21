import { chromium, Browser, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { Before, After, Status, setDefaultTimeout } from '@cucumber/cucumber'; 



setDefaultTimeout(60 * 1000);
let browser: Browser;

Before(async function () {
    // Lancement du navigateur
    browser = await chromium.launch({ 
        headless: false, 
        args: ['--start-maximized'] 
    });
    
    // Création d'un nouveau contexte et d'une page
    const context = await browser.newContext({ viewport: null });
    const page = await context.newPage();

    
    // On intercepte les appels aux régies publicitaires pour éviter les pop-ups 
    // intempestives sur le site Automation Exercise et stabiliser les tests.
    await page.route('**/*google-analytics*', route => route.abort());
    await page.route('**/*doubleclick*', route => route.abort());
    await page.route('**/*googleadservices*', route => route.abort());

    // Injection des instances dans le "World" de Cucumber pour les utiliser dans les steps
    this.page = page;
    this.homePage = new HomePage(page);
    this.productsPage = new ProductsPage(page);
    this.cartPage = new CartPage(page);
});

After(async function (scenario) {
    if (scenario.result?.status === Status.FAILED) {
        const screenshot = await this.page.screenshot();
        await this.attach(screenshot, 'image/png');
    }

    // On utilise un try/catch pour éviter que la fermeture ne fasse planter le rapport
    try {
        await Promise.race([
            this.page.close(),
            new Promise(resolve => setTimeout(resolve, 5000))
        ]);
        await Promise.race([
            browser.close(),
            new Promise(resolve => setTimeout(resolve, 5000))
        ]);
    } catch (error) {
        console.log("Erreur lors de la fermeture du navigateur, passage outre.");
    }
});