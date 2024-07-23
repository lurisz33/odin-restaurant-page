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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAboutPage)\n/* harmony export */ });\n/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/pizza.jpg */ \"./assets/pizza.jpg\");\n\r\n\r\nfunction loadAboutPage() {\r\n    const content = document.querySelector(\"#content\");\r\n\r\n    const img = document.createElement(\"img\");\r\n    img.src = _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    img.alt = 'A delicious pizza';\r\n    img.style.width = '100%';\r\n    img.style.height = '30vh';\r\n    img.style.objectFit = 'cover';\r\n\r\n    const headTitle = document.createElement(\"h1\");\r\n    headTitle.innerHTML = \"About me\";\r\n\r\n    const description = document.createElement(\"h3\");\r\n    description.innerHTML = \"Young computer scientist with special love for pizza\"\r\n\r\n    content.appendChild(img);\r\n    content.appendChild(headTitle);\r\n    content.appendChild(description);\r\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\n/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/pizza.jpg */ \"./assets/pizza.jpg\");\n\r\n\r\nfunction loadHomePage() {\r\n    const content = document.querySelector(\"#content\");\r\n\r\n    const img = document.createElement(\"img\");\r\n    img.src = _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    img.alt = 'A delicious pizza';\r\n    img.style.width = '100%';\r\n    img.style.height = '30vh';\r\n    img.style.objectFit = 'cover';\r\n\r\n    const headTitle = document.createElement(\"h1\");\r\n    headTitle.innerHTML = \"Pizzeria Lurisz\";\r\n\r\n    const description = document.createElement(\"h3\");\r\n    description.innerHTML = \"A pizza-ish experience like no other!\"\r\n\r\n    content.appendChild(img);\r\n    content.appendChild(headTitle);\r\n    content.appendChild(description);\r\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\nconst content = document.querySelector(\"#content\");\r\nconst homeButton = document.querySelector(\"#home-button\");\r\nconst menuButton = document.querySelector(\"#menu-button\");\r\nconst aboutButton = document.querySelector(\"#about-button\");\r\n\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nhomeButton.addEventListener(\"click\", function () {\r\n    content.innerHTML = \"\";\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n})\r\n\r\nmenuButton.addEventListener(\"click\", function () {\r\n    content.innerHTML = \"\";\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n})\r\n\r\naboutButton.addEventListener(\"click\", function () {\r\n    content.innerHTML = \"\";\r\n    (0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n})\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\n/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/pizza.jpg */ \"./assets/pizza.jpg\");\n\r\n\r\nfunction loadMenuPage() {\r\n    const content = document.querySelector(\"#content\");\r\n\r\n    const img = document.createElement(\"img\");\r\n    img.src = _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    img.alt = 'A delicious pizza';\r\n    img.style.width = '100%';\r\n    img.style.height = '30vh';\r\n    img.style.objectFit = 'cover';\r\n\r\n    const headTitle = document.createElement(\"h1\");\r\n    headTitle.innerHTML = \"Menu Pizza normal 30cm\";\r\n\r\n    const description1 = document.createElement(\"h2\");\r\n    description1.innerHTML = \"Margherita\"\r\n\r\n    const ingredients1 = document.createElement(\"h3\");\r\n    ingredients1.innerHTML = \"Tomato sauce, mozzarella (Italy), oregano BIO\"\r\n\r\n    const description2 = document.createElement(\"h2\");\r\n    description2.innerHTML = \"Napoli\"\r\n\r\n    const ingredients2 = document.createElement(\"h3\");\r\n    ingredients2.innerHTML = \"Tomato sauce, mozzarella (Italy), fresh pepperoni, olives, oregano BIO\"\r\n\r\n    content.appendChild(img);\r\n    content.appendChild(headTitle);\r\n    content.appendChild(description1);\r\n    content.appendChild(ingredients1);\r\n    content.appendChild(description2);\r\n    content.appendChild(ingredients2);\r\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./assets/pizza.jpg":
/*!**************************!*\
  !*** ./assets/pizza.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0493c0b507f808e7f821.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./assets/pizza.jpg?");

/***/ })

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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