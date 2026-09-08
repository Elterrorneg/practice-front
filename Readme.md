# Pruebas Automatizadas FrontEnd - SauceDemo

Este proyecto contiene la automatización de pruebas End-to-End (E2E) para la aplicación web [SauceDemo](https://www.saucedemo.com/), desarrollada en **Node.js** utilizando **Playwright** como motor de automatización y **Cucumber.js** para el enfoque BDD (Behavior-Driven Development).

---

## 🛠️ Tecnologías y Herramientas
* **Lenguaje:** JavaScript (Node.js)
* **Framework BDD:** Cucumber.js (`@cucumber/cucumber`)
* **Motor de Automatización:** Playwright (`playwright`)
* **Aserciones:** `@playwright/test` / `assert`
* **Patrón de Diseño:** Page Object Model (POM)

---

## 📊 Estrategia de Automatización y Patrones de Diseño

### 1. Patrón de Diseño: Page Object Model (POM)
El proyecto implementa **POM** para desacoplar la lógica de interacción con la interfaz de usuario de las definiciones de pasos de Cucumber.

---

## 🚀 Requisitos Previos

Asegúrate de contar con las siguientes herramientas instaladas en tu sistema:
* [Node.js](https://nodejs.org/).
* Git.

---

## ⚙️ Configuración del Proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone 
   cd practice-front
2. **instalar dependencias:**
    ```bash
    npm install
3. **Instalar los navegadores de Playwright:**
    ```bash
    npx playwright instal

4. **Ejecucion de las pruebas:**
    ```bash
    npm run test