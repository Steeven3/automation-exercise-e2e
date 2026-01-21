Feature: Gestion du panier

  Scenario: Ajouter un produit au panier
    Given je suis sur la page accueil
    When j ajoute un produit au panier
    Then le produit apparait dans le panier
