Feature: Recherche de produits

  Scenario: Rechercher un produit existant
    Given je suis sur la page accueil
    When je recherche le produit "Dress"
    Then les resultats de recherche sont affiches
