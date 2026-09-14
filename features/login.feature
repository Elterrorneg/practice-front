Feature: Login en la página de SauceDemo

  @happyLogin
  Scenario: Inicio de sesión exitoso - Sauce Demo
    Given que el Cliente se encuentra en la página SauceDemo
    When inicia sesion con las credenciales: "standard_user", "secret_sauce"
    Then el login es satisfactorio

  @unhappyLogin
  Scenario: Inicio de sesión fallido - Sauce Demo
    Given que el Cliente se encuentra en la página SauceDemo
    When inicia sesion con las credenciales: "invalid_user", "secret_sauce"
    Then el login no es satisfactorio