Feature: Proceso de Compra

  Background:
    Given que el Cliente se encuentra en la página SauceDemo
    And inicia sesion con las credenciales: "standard_user", "secret_sauce"
    And agrega el primer producto disponible al carrito

  @happyCheckout
  Scenario: Completar la compra exitosamente
    Given que el usuario navega al carrito de compras
    When inicia el proceso de checkout
    And completa la información de envío: "Juan", "Pérez", "15001"
    And finaliza la compra
    Then se confirma la compra con el mensaje "Thank you for your order!"