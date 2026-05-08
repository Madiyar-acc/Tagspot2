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

/***/ "./src/components/card.js"
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   likeCard: () => (/* binding */ likeCard)\n/* harmony export */ });\nfunction deleteCard(card) {\n  card.remove();\n}\nfunction likeCard(button) {\n  button.classList.toggle('card__like-button_is-active');\n}\nfunction createCard(cardData, onDelete, onLike, onImageClick) {\n  var cardTemp = document.querySelector('#card-template').content;\n  var cardElement = cardTemp.cloneNode(true);\n  var cardImage = cardElement.querySelector('.card__image');\n  var cardTitle = cardElement.querySelector('.card__title');\n  var deleteBtn = cardElement.querySelector('.card__delete-button');\n  var likeBtn = cardElement.querySelector('.card__like-button');\n  cardImage.src = cardData.link;\n  cardImage.alt = cardData.name;\n  cardTitle.textContent = cardData.name;\n  deleteBtn.addEventListener('click', function () {\n    return onDelete(deleteBtn.closest('.card'));\n  });\n  likeBtn.addEventListener('click', function () {\n    return onLike(likeBtn);\n  });\n  cardImage.addEventListener('click', function () {\n    return onImageClick(cardData);\n  });\n  return cardElement;\n}\n\n//# sourceURL=webpack://tagspot2/./src/components/card.js?\n}");

/***/ },

/***/ "./src/components/modal.js"
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(modal) {\n  modal.classList.add('popup_is-opened');\n  modal.addEventListener('click', handleOverlayClick);\n  document.addEventListener('keydown', handleEscapeKey);\n}\nfunction closeModal(modal) {\n  modal.classList.remove('popup_is-opened');\n  modal.removeEventListener('click', handleOverlayClick);\n  document.removeEventListener('keydown', handleEscapeKey);\n}\nfunction handleOverlayClick(e) {\n  if (e.target === e.currentTarget) {\n    closeModal(e.target);\n  }\n}\nfunction handleEscapeKey(e) {\n  if (e.key === 'Escape') {\n    var openedModal = document.querySelector('.popup_is-opened');\n    if (openedModal) closeModal(openedModal);\n  }\n}\n\n//# sourceURL=webpack://tagspot2/./src/components/modal.js?\n}");

/***/ },

/***/ "./src/scripts/cards.js"
/*!******************************!*\
  !*** ./src/scripts/cards.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Бали\",\n  link: \"https://img.pac.ru/resorts/213172/248694/big/B39BBF51C0A880143F69A79019B488BD.jpg\"\n}, {\n  name: \"Фарерские острова\",\n  link: \"https://blog.ostrovok.ru/wp-content/uploads/2016/11/%D1%84%D0%B0%D1%80%D0%B5%D1%80%D1%8B-%D0%B8-%D0%B8%D1%81%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F-%D0%BD%D0%B0-%D0%B7%D0%B0%D1%85%D0%BE%D0%B4.jpg\"\n}, {\n  name: \"Монте Роза\",\n  link: \"https://alpina.guide/sites/default/files/images/tours/Monte_Rosa_title_img.jpg\"\n}, {\n  name: \"Мауи\",\n  link: \"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80\"\n}, {\n  name: \"Тоскана\",\n  link: \"https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\"\n}, {\n  name: \"Патагонские Анды\",\n  link: \"https://images.unsplash.com/photo-1657440925570-94ca8047b6fe?q=80&w=3008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\"\n}];\n\n//# sourceURL=webpack://tagspot2/./src/scripts/cards.js?\n}");

/***/ },

/***/ "./src/scripts/index.js"
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards.js */ \"./src/scripts/cards.js\");\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/card.js */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modal.js */ \"./src/components/modal.js\");\n\n\n\n\nvar cardsList = document.querySelector('.places__list');\nvar profileTitle = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\nvar profileEditButton = document.querySelector('.profile__edit-button');\nvar profileAddButton = document.querySelector('.profile__add-button');\nvar editPopup = document.querySelector('.popup_type_edit');\nvar newCardPopup = document.querySelector('.popup_type_new-card');\nvar imagePopup = document.querySelector('.popup_type_image');\nvar editForm = document.querySelector('.popup__form[name=\"edit-profile\"]');\nvar newCardForm = document.querySelector('.popup__form[name=\"new-place\"]');\nvar popupImage = imagePopup.querySelector('.popup__image');\nvar popupCaption = imagePopup.querySelector('.popup__caption');\nfunction handleImageClick(cardData) {\n  popupImage.src = cardData.link;\n  popupImage.alt = cardData.name;\n  popupCaption.textContent = cardData.name;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(imagePopup);\n}\npopupImage.addEventListener('click', function () {\n  return (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(imagePopup);\n});\n_cards_js__WEBPACK_IMPORTED_MODULE_1__.initialCards.forEach(function (card) {\n  var cardElement = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)(card, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.likeCard, handleImageClick);\n  cardsList.append(cardElement);\n});\nprofileEditButton.addEventListener('click', function () {\n  editForm.querySelector('input[name=\"name\"]').value = profileTitle.textContent;\n  editForm.querySelector('input[name=\"description\"]').value = profileDescription.textContent;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(editPopup);\n});\neditForm.addEventListener('submit', function (e) {\n  e.preventDefault();\n  profileTitle.textContent = editForm.querySelector('input[name=\"name\"]').value;\n  profileDescription.textContent = editForm.querySelector('input[name=\"description\"]').value;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(editPopup);\n});\ndocument.querySelectorAll('.popup__close').forEach(function (btn) {\n  btn.addEventListener('click', function (e) {\n    var popup = e.target.closest('.popup');\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(popup);\n  });\n});\nprofileAddButton.addEventListener('click', function () {\n  return (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(newCardPopup);\n});\nnewCardForm.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var cardData = {\n    name: newCardForm.querySelector('input[name=\"place-name\"]').value,\n    link: newCardForm.querySelector('input[name=\"link\"]').value\n  };\n  var cardElement = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_2__.createCard)(cardData, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_2__.likeCard, handleImageClick);\n  cardsList.prepend(cardElement);\n  newCardForm.reset();\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(newCardPopup);\n});\n\n//# sourceURL=webpack://tagspot2/./src/scripts/index.js?\n}");

/***/ },

/***/ "./src/pages/index.css"
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tagspot2/./src/pages/index.css?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;