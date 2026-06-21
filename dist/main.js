/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n    const content = document.querySelector('#content');\n    content.innerHTML = '';\n\n    const heading = document.createElement('h1');\n    heading.textContent = \"Contact Us\";\n\n    const contactCard = document.createElement('div');\n    contactCard.classList.add('contact-card');\n\n    const phone = document.createElement('p');\n    phone.textContent = \"📞 Phone: +673 234-5678\";\n\n    const email = document.createElement('p');\n    email.textContent = \"✉️ Email: hello@cozycornerbistro.com\";\n\n    const address = document.createElement('p');\n    address.textContent = \"📍 Location: Simpang 123, Jalan Gadong, Bandar Seri Begawan, Brunei\"\n\n    contactCard.appendChild(phone);\n    contactCard.appendChild(email);\n    contactCard.appendChild(address);\n\n    content.appendChild(heading);\n    content.appendChild(contactCard);\n}\n\n//# sourceURL=webpack://project-restaurant-page/./src/contact.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n    const content = document.querySelector('#content');\n    content.innerHTML = '';\n\n    const headline = document.createElement('h1');\n    const description = document.createElement('p');\n    const hours = document.createElement('div');\n\n    headline.textContent = \"The Cozy Corner Bistro\";\n    description.textContent = \"Experience authentic, home-cooked comfort food crafted with love and fresh, locally sourced ingredients.\";\n    hours.textContent = \"Open Daily: 8:00 AM - 10:00 PM\";\n\n    content.appendChild(headline);\n    content.appendChild(description);\n    content.appendChild(hours);\n}\n\n//# sourceURL=webpack://project-restaurant-page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n\nconst homeBtn = document.querySelector('#home-btn');\nconst menuBtn = document.querySelector('#menu-btn');\nconst contactBtn = document.querySelector('#contact-btn');\n\nhomeBtn.addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome);\nmenuBtn.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu);\ncontactBtn.addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContact);\n\n//# sourceURL=webpack://project-restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n    const content = document.querySelector('#content');\n    content.innerHTML = '';\n\n    const heading = document.createElement('h1');\n    heading.textContent = \"Our Menu\";\n    content.appendChild(heading);\n\n    const menuContainer = document.createElement('div');\n    menuContainer.classList.add('menu-grid');\n\n    function createMenuItem(name, price, description) {\n        const itemDiv = document.createElement('div');\n        itemDiv.classList.add('menu-item');\n\n        const itemName = document.createElement('h3');\n        itemName.textContent = `${name} - ${price}`;\n\n        const itemDesc = document.createElement('p');\n        itemDesc.textContent = description;\n\n        itemDiv.appendChild(itemName);\n        itemDiv.appendChild(itemDesc);\n\n        return itemDiv;\n    }\n\n    const dish1 = createMenuItem(\"Truffle Mushroom Pasta\", \"$18\", \"Creamy fettuccine tossed with wild mushrooms and white truffle oil.\");\n    const dish2 = createMenuItem(\"Classic Bistro Burger\", \"$16\", \"Prime beef patty, aged cheddar, special house sauce, served with rosemary fries.\");\n    const dish3 = createMenuItem(\"Artisanal Avocado Toast\", \"$12\", \"Sourdough bread topped with smashed avocado, cherry tomatoes, and a poached egg.\")\n\n    menuContainer.appendChild(dish1);\n    menuContainer.appendChild(dish2);\n    menuContainer.appendChild(dish3);\n\n    content.appendChild(menuContainer);\n\n}\n\n//# sourceURL=webpack://project-restaurant-page/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;