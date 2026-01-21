# Automation Exercise E2E Tests

Projet d'automatisation des tests end-to-end (E2E) utilisant Cucumber et Playwright pour tester une application e-commerce.

## 🚀 Technologies utilisées

- **Playwright** - Framework d'automatisation des tests
- **Cucumber** - Framework BDD (Behavior-Driven Development)
- **TypeScript** - Langage de programmation typé
- **Node.js** - Environnement d'exécution JavaScript

## 📋 Prérequis

- Node.js (version 14+)
- npm ou yarn

## 🌐 Site testé

**Automation Exercise** - https://www.automationexercise.com/

Application e-commerce de démonstration utilisée pour pratiquer l'automatisation des tests. Cette application contient :
- Catalogue de produits
- Fonctionnalité de recherche
- Gestion du panier
- Processus de checkout

## 🔧 Installation

1. Cloner le repository
```bash
git clone <url-du-repo>
cd Projet
```

2. Installer les dépendances
```bash
npm install
```

## 🧪 Exécuter les tests

### Lancer tous les tests
```bash
npm run test
```

### Lancer les tests avec rapport HTML
```bash
npm run test
```

Les résultats seront disponibles dans `reports/cucumber-report.html`

## 📁 Structure du projet

```
├── features/              # Fichiers de scénarios Cucumber (.feature)
│   ├── cart.feature       # Scénarios de panier
│   └── search.feature     # Scénarios de recherche
│
├── pages/                 # Page Object Model (POM)
│   ├── CartPage.ts        # Interactions avec la page panier
│   ├── HomePage.ts        # Interactions avec la page d'accueil
│   └── ProductsPage.ts    # Interactions avec la page produits
│
├── steps/                 # Step definitions Cucumber
│   ├── cart.steps.ts      # Étapes pour les tests de panier
│   ├── search.steps.ts    # Étapes pour les tests de recherche
│   └── hooks.ts           # Hooks Before/After
│
├── reports/               # Rapports des tests
│   └── cucumber-report.html
│
├── cucumber.js            # Configuration Cucumber
├── playwright.config.ts   # Configuration Playwright
├── tsconfig.json          # Configuration TypeScript
└── package.json           # Dépendances du projet
```

## 📖 Architecture

Ce projet suit le pattern **Page Object Model (POM)** :

- **Features** : Décrivent les scénarios en langage Gherkin (Given/When/Then)
- **Steps** : Implémentent les étapes décrites dans les features
- **Pages** : Encapsulent les interactions avec les éléments de la page (selectors, actions)
1. Recherche de produits (`features/search.feature`)
- **Scénario** : Rechercher un produit existant
  - Navigation vers la page d'accueil
  - Recherche du produit "Dress"
  - Vérification que les résultats de recherche sont affichés

### 2. Gestion du panier (`features/cart.feature`)
- **Scénario** : Ajouter un produit au panier
  - Navigation vers la page d'accueil
  - Sélection du premier produit disponible
  - Ajout du produit au panier
  - Vérification que le produit appara
    When j'ajoute un produit au panier
    Then le produit apparait dans le panier
```

## 🎯 Scénarios couverts

### Search
- Recherche de produits par mot-clé

### Cart
- Ajout de produits au panier
- Vérification de la présence du produit dans le panier

## 📊 Rapports
Ouvrez ce fichier dans un navigateur pour visualiser les résultats détaillés des tests, incluant :
- Scénarios passés/échoués
- Durée d'exécution
- Captures d'écran en cas d'erreur
- Logs détaillés

## 🛠️ Configuration

### Playwright (`playwright.config.ts`)
- Navigateur : Chrome
- Headless mode activé par défaut
- Timeout par défaut : 30 secondes
- Mode strict activé pour éviter les ambiguïtés sur les sélecteurs

### Cucumber (`cucumber.js`)
- Format de rapport : HTML avec screenshots
- Hooks de setup/teardown pour initialiser et nettoyer les tests

### TypeScript (`tsconfig.json`)
- Transpilation TypeScript vers JavaScript
- Strict mode activé

## 🐛 Difficultés rencontrées et solutions

### 1. **Strict Mode Violation - Sélecteurs ambigus**
**Problème** : Playwright levait une erreur "strict mode violation" lors du clic sur le bouton "Add to cart" car le sélecteur `.add-to-cart` résolvait à 2 éléments.

**Cause** : Le sélecteur était trop générique et correspondait à plusieurs boutons dans le DOM.

**Solution** : Utilisation du pattern `.first()` pour sélectionner précisément le premier élément correspondant :
```typescript
await this.page.locator('.product-image-wrapper')
  .first()
  .locator('.add-to-cart')
  .first()  // ← Added for strict mode compliance
  .click();
```

### 2. **Navigation vers l'application externe**
**Problème** : Les tests doivent naviguer vers https://www.automationexercise.com/

**Solution** : Configuration de l'URL de base dans les hooks et utilisation de chemins relatifs pour la navigation.

## 📝 Détails de l'implémentation

### Page Object Model (POM)

#### HomePage.ts
- `navigateTo()` : Navigation vers la page d'accueil

#### ProductsPage.ts
- `searchProduct(product)` : Recherche un produit
- `addFirstProductToCart()` : Ajoute le premier produit au panier
- `hasResults()` : Vérifie la présence de résultats de recherche

#### CartPage.ts
- Interactions spécifiques au panier

### Hooks (`steps/hooks.ts`)
- **Before** : Initialisation du navigateur et navigation
- **After** : Capture d'écran en cas d'erreur et fermeture du navigateur


