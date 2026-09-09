Feature: Gestión del Carrito de Compras

  Background:
    Given que el Cliente se encuentra en la página SauceDemo
    And inicia sesion con las credenciales: "standard_user", "secret_sauce"

  Scenario: Agregar un producto al carrito
    When agrega el primer producto disponible al carrito
    Then el contador del carrito debe mostrar "1"