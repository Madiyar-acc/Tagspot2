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

/***/ "./src/components/api.js"
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCard: () => (/* binding */ addCard),\n/* harmony export */   deleteCardApi: () => (/* binding */ deleteCardApi),\n/* harmony export */   dislikeCardApi: () => (/* binding */ dislikeCardApi),\n/* harmony export */   getInitialCards: () => (/* binding */ getInitialCards),\n/* harmony export */   getUserInfo: () => (/* binding */ getUserInfo),\n/* harmony export */   likeCardApi: () => (/* binding */ likeCardApi),\n/* harmony export */   updateAvatar: () => (/* binding */ updateAvatar),\n/* harmony export */   updateUserInfo: () => (/* binding */ updateUserInfo)\n/* harmony export */ });\nvar config = {\n  baseUrl: 'https://practicetasks.kz/tagspot',\n  headers: {\n    authorization: '5bc26d174023415396664cc82b21164fbQDTFFVcdJ',\n    'Content-Type': 'application/json'\n  }\n};\nfunction handleResponse(res) {\n  if (res.ok) {\n    return res.json();\n  }\n  return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n}\nvar getUserInfo = function getUserInfo() {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar getInitialCards = function getInitialCards() {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar updateUserInfo = function updateUserInfo(name, about) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    method: 'PATCH',\n    headers: config.headers,\n    body: JSON.stringify({\n      name: name,\n      about: about\n    })\n  }).then(handleResponse);\n};\nvar addCard = function addCard(name, link) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    method: 'POST',\n    headers: config.headers,\n    body: JSON.stringify({\n      name: name,\n      link: link\n    })\n  }).then(handleResponse);\n};\nvar deleteCardApi = function deleteCardApi(cardId) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/\").concat(cardId), {\n    method: 'DELETE',\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar likeCardApi = function likeCardApi(cardId) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(cardId), {\n    method: 'PUT',\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar dislikeCardApi = function dislikeCardApi(cardId) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(cardId), {\n    method: 'DELETE',\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar updateAvatar = function updateAvatar(avatar) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me/avatar\"), {\n    method: 'PATCH',\n    headers: config.headers,\n    body: JSON.stringify({\n      avatar: avatar\n    })\n  }).then(handleResponse);\n};\n\n//# sourceURL=webpack://tagspot2/./src/components/api.js?\n}");

/***/ },

/***/ "./src/components/card.js"
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/components/api.js\");\n\nfunction createCard(cardData, onImageClick, currentUserId) {\n  var cardTemp = document.querySelector('#card-template').content;\n  var cardElement = cardTemp.cloneNode(true).querySelector('.card');\n  var cardImage = cardElement.querySelector('.card__image');\n  var cardTitle = cardElement.querySelector('.card__title');\n  var deleteBtn = cardElement.querySelector('.card__delete-button');\n  var likeBtn = cardElement.querySelector('.card__like-button');\n  var likeCount = cardElement.querySelector('.card__like-count');\n  cardImage.src = cardData.link;\n  cardImage.alt = cardData.name;\n  cardTitle.textContent = cardData.name;\n  likeCount.textContent = cardData.likes.length;\n  var isLiked = cardData.likes.some(function (user) {\n    return user.id === currentUserId;\n  });\n  if (isLiked) {\n    likeBtn.classList.add('card__like-button_is-active');\n  }\n  if (cardData.owner.id !== currentUserId) {\n    deleteBtn.remove();\n  } else {\n    deleteBtn.addEventListener('click', function () {\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.deleteCardApi)(cardData.id).then(function () {\n        return cardElement.remove();\n      }).catch(function (err) {\n        return console.error('Ошибка при удалении:', err);\n      });\n    });\n  }\n  likeBtn.addEventListener('click', function () {\n    var isActive = likeBtn.classList.contains('card__like-button_is-active');\n    var likeRequest = isActive ? (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.dislikeCardApi)(cardData.id) : (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.likeCardApi)(cardData.id);\n    likeRequest.then(function (updatedCard) {\n      likeBtn.classList.toggle('card__like-button_is-active');\n      likeCount.textContent = updatedCard.likes.length;\n    }).catch(function (err) {\n      return console.error('Ошибка при лайке:', err);\n    });\n  });\n  cardImage.addEventListener('click', function () {\n    return onImageClick(cardData);\n  });\n  return cardElement;\n}\n\n//# sourceURL=webpack://tagspot2/./src/components/card.js?\n}");

/***/ },

/***/ "./src/components/modal.js"
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(modal) {\n  modal.classList.add('popup_is-opened');\n  modal.addEventListener('click', handleOverlayClick);\n  document.addEventListener('keydown', handleEscapeKey);\n}\nfunction closeModal(modal) {\n  modal.classList.remove('popup_is-opened');\n  modal.removeEventListener('click', handleOverlayClick);\n  document.removeEventListener('keydown', handleEscapeKey);\n}\nfunction handleOverlayClick(e) {\n  if (e.target === e.currentTarget) {\n    closeModal(e.target);\n  }\n}\nfunction handleEscapeKey(e) {\n  if (e.key === 'Escape') {\n    var openedModal = document.querySelector('.popup_is-opened');\n    if (openedModal) closeModal(openedModal);\n  }\n}\n\n//# sourceURL=webpack://tagspot2/./src/components/modal.js?\n}");

/***/ },

/***/ "./src/components/validation.js"
/*!**************************************!*\
  !*** ./src/components/validation.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearValidation: () => (/* binding */ clearValidation),\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation)\n/* harmony export */ });\nfunction showInputError(formElement, inputElement, errorMessage, settings) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.add(settings.inputErrorClass);\n  if (errorElement) {\n    errorElement.textContent = errorMessage;\n    errorElement.classList.add(settings.errorClass);\n  }\n}\nfunction hideInputError(formElement, inputElement, settings) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.remove(settings.inputErrorClass);\n  if (errorElement) {\n    errorElement.textContent = '';\n    errorElement.classList.remove(settings.errorClass);\n  }\n}\nfunction checkInputValidity(formElement, inputElement, settings) {\n  if (inputElement.dataset.errorMessage) {\n    var regex = /^[A-Za-zА-Яа-яЁё\\s-]+$/;\n    if (inputElement.value && !regex.test(inputElement.value)) {\n      inputElement.setCustomValidity(inputElement.dataset.errorMessage);\n    } else {\n      inputElement.setCustomValidity('');\n    }\n  }\n  if (!inputElement.validity.valid) {\n    showInputError(formElement, inputElement, inputElement.validationMessage, settings);\n  } else {\n    hideInputError(formElement, inputElement, settings);\n  }\n}\nfunction hasInvalidInput(inputList) {\n  return inputList.some(function (inputElement) {\n    return !inputElement.validity.valid;\n  });\n}\nfunction toggleButtonState(inputList, buttonElement, settings) {\n  if (hasInvalidInput(inputList)) {\n    buttonElement.disabled = true;\n    buttonElement.classList.add(settings.inactiveButtonClass);\n  } else {\n    buttonElement.disabled = false;\n    buttonElement.classList.remove(settings.inactiveButtonClass);\n  }\n}\nfunction setEventListeners(formElement, settings) {\n  var inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));\n  var buttonElement = formElement.querySelector(settings.submitButtonSelector);\n  toggleButtonState(inputList, buttonElement, settings);\n  inputList.forEach(function (inputElement) {\n    inputElement.addEventListener('input', function () {\n      checkInputValidity(formElement, inputElement, settings);\n      toggleButtonState(inputList, buttonElement, settings);\n    });\n  });\n}\nfunction enableValidation(settings) {\n  var formList = Array.from(document.querySelectorAll(settings.formSelector));\n  formList.forEach(function (formElement) {\n    formElement.setAttribute('novalidate', true);\n    setEventListeners(formElement, settings);\n  });\n}\nfunction clearValidation(formElement, settings) {\n  var inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));\n  var buttonElement = formElement.querySelector(settings.submitButtonSelector);\n  inputList.forEach(function (inputElement) {\n    hideInputError(formElement, inputElement, settings);\n    inputElement.setCustomValidity('');\n  });\n  buttonElement.disabled = true;\n  buttonElement.classList.add(settings.inactiveButtonClass);\n}\n\n//# sourceURL=webpack://tagspot2/./src/components/validation.js?\n}");

/***/ },

/***/ "./src/scripts/index.js"
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card.js */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _components_validation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/validation.js */ \"./src/components/validation.js\");\n/* harmony import */ var _components_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/api.js */ \"./src/components/api.js\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n// import '../pages/index.css';\n// import { initialCards } from './cards.js';\n// import { createCard, deleteCard, likeCard } from '../components/card.js';\n// import { openModal, closeModal } from '../components/modal.js';\n//\n// const cardsList = document.querySelector('.places__list');\n// const profileTitle = document.querySelector('.profile__title');\n// const profileDescription = document.querySelector('.profile__description');\n// const profileEditButton = document.querySelector('.profile__edit-button');\n// const profileAddButton = document.querySelector('.profile__add-button');\n// const editPopup = document.querySelector('.popup_type_edit');\n// const newCardPopup = document.querySelector('.popup_type_new-card');\n// const imagePopup = document.querySelector('.popup_type_image');\n// const editForm = document.querySelector('.popup__form[name=\"edit-profile\"]');\n// const newCardForm = document.querySelector('.popup__form[name=\"new-place\"]');\n// const popupImage = imagePopup.querySelector('.popup__image');\n// const popupCaption = imagePopup.querySelector('.popup__caption');\n//\n//\n// const form = document.querySelector('.popup__form');\n// const inputs = form.querySelectorAll('.popup__input');\n// const button = form.querySelector('.popup__button');\n// const regex = /^[A-Za-zА-Яа-яЁё\\s-]+$/;\n//\n// function handleImageClick(cardData) {\n//     popupImage.src = cardData.link;\n//     popupImage.alt = cardData.name;\n//     popupCaption.textContent = cardData.name;\n//     openModal(imagePopup);\n// }\n//\n// popupImage.addEventListener('click', () => closeModal(imagePopup));\n//\n// initialCards.forEach(card => {\n//     const cardElement = createCard(card, deleteCard, likeCard, handleImageClick);\n//     cardsList.append(cardElement);\n// })\n//\n//\n//\n// editForm.addEventListener('submit', (e) => {\n//     e.preventDefault();\n//     profileTitle.textContent = editForm.querySelector('input[name=\"name\"]').value;\n//     profileDescription.textContent = editForm.querySelector('input[name=\"description\"]').value;\n//     closeModal(editPopup);\n// });\n//\n// document.querySelectorAll('.popup__close').forEach(btn => {\n//     btn.addEventListener('click', (e) => {\n//         const popup = e.target.closest('.popup');\n//         closeModal(popup);\n//     });\n// });\n//\n// profileAddButton.addEventListener('click', () => openModal(newCardPopup));\n//\n//\n//\n// newCardForm.addEventListener('submit', (e) => {\n//     e.preventDefault();\n//     const cardData = {\n//         name: newCardForm.querySelector('input[name=\"place-name\"]').value,\n//         link: newCardForm.querySelector('input[name=\"link\"]').value\n//     };\n//     const cardElement = createCard(cardData, deleteCard, likeCard, handleImageClick);\n//     cardsList.prepend(cardElement);\n//     newCardForm.reset();\n//     closeModal(newCardPopup);\n// });\n\n\n\n\n\n\nvar cardsList = document.querySelector('.places__list');\nvar profileTitle = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\nvar profileImage = document.querySelector('.profile__image');\nvar profileEditButton = document.querySelector('.profile__edit-button');\nvar profileAddButton = document.querySelector('.profile__add-button');\nvar profileAvatarButton = document.querySelector('.profile__avatar-button');\nvar editPopup = document.querySelector('.popup_type_edit');\nvar newCardPopup = document.querySelector('.popup_type_new-card');\nvar imagePopup = document.querySelector('.popup_type_image');\nvar avatarPopup = document.querySelector('.popup_type_avatar');\nvar editForm = document.querySelector('.popup__form[name=\"edit-profile\"]');\nvar newCardForm = document.querySelector('.popup__form[name=\"new-place\"]');\nvar avatarForm = document.querySelector('.popup__form[name=\"edit-avatar\"]');\nvar popupImage = imagePopup.querySelector('.popup__image');\nvar popupCaption = imagePopup.querySelector('.popup__caption');\nvar validationConfig = {\n  formSelector: '.popup__form',\n  inputSelector: '.popup__input',\n  submitButtonSelector: '.popup__button',\n  inactiveButtonClass: 'popup__button_disabled',\n  inputErrorClass: 'popup__input_type_error',\n  errorClass: 'popup__error_visible'\n};\nvar currentUserId;\nfunction renderLoading(button, isLoading) {\n  button.textContent = isLoading ? 'Сохранение...' : 'Сохранить';\n}\nfunction handleImageClick(cardData) {\n  popupImage.src = cardData.link;\n  popupImage.alt = cardData.name;\n  popupCaption.textContent = cardData.name;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(imagePopup);\n}\ndocument.querySelectorAll('.popup__close').forEach(function (btn) {\n  btn.addEventListener('click', function (e) {\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(e.target.closest('.popup'));\n  });\n});\nprofileEditButton.addEventListener('click', function () {\n  editForm.querySelector('input[name=\"name\"]').value = profileTitle.textContent;\n  editForm.querySelector('input[name=\"description\"]').value = profileDescription.textContent;\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(editForm, validationConfig);\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(editPopup);\n});\neditForm.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var submitBtn = editForm.querySelector('.popup__button');\n  var name = editForm.querySelector('input[name=\"name\"]').value;\n  var about = editForm.querySelector('input[name=\"description\"]').value;\n  renderLoading(submitBtn, true);\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_4__.updateUserInfo)(name, about).then(function (user) {\n    profileTitle.textContent = user.name;\n    profileDescription.textContent = user.about;\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(editPopup);\n  }).catch(function (err) {\n    return console.error('Ошибка при обновлении профиля:', err);\n  }).finally(function () {\n    return renderLoading(submitBtn, false);\n  });\n});\nprofileAddButton.addEventListener('click', function () {\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(newCardPopup);\n});\nnewCardForm.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var submitBtn = newCardForm.querySelector('.popup__button');\n  var name = newCardForm.querySelector('input[name=\"place-name\"]').value;\n  var link = newCardForm.querySelector('input[name=\"link\"]').value;\n  renderLoading(submitBtn, true);\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_4__.addCard)(name, link).then(function (cardData) {\n    var cardElement = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(cardData, handleImageClick, currentUserId);\n    cardsList.prepend(cardElement);\n    newCardForm.reset();\n    (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(newCardForm, validationConfig);\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(newCardPopup);\n  }).catch(function (err) {\n    return console.error('Ошибка при добавлении карточки:', err);\n  }).finally(function () {\n    return renderLoading(submitBtn, false);\n  });\n});\nprofileAvatarButton.addEventListener('click', function () {\n  (0,_components_validation_js__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(avatarForm, validationConfig);\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(avatarPopup);\n});\navatarForm.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var submitBtn = avatarForm.querySelector('.popup__button');\n  var avatarUrl = avatarForm.querySelector('input[name=\"avatar\"]').value;\n  renderLoading(submitBtn, true);\n  (0,_components_api_js__WEBPACK_IMPORTED_MODULE_4__.updateAvatar)(avatarUrl).then(function (user) {\n    profileImage.style.backgroundImage = \"url('\".concat(user.avatar, \"')\");\n    avatarForm.reset();\n    (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(avatarPopup);\n  }).catch(function (err) {\n    return console.error('Ошибка при обновлении аватара:', err);\n  }).finally(function () {\n    return renderLoading(submitBtn, false);\n  });\n});\nPromise.all([(0,_components_api_js__WEBPACK_IMPORTED_MODULE_4__.getUserInfo)(), (0,_components_api_js__WEBPACK_IMPORTED_MODULE_4__.getInitialCards)()]).then(function (_ref) {\n  var _ref2 = _slicedToArray(_ref, 2),\n    user = _ref2[0],\n    cards = _ref2[1];\n  currentUserId = user.id;\n  profileTitle.textContent = user.name;\n  profileDescription.textContent = user.about;\n  profileImage.style.backgroundImage = \"url('\".concat(user.avatar, \"')\");\n  cards.forEach(function (cardData) {\n    var cardElement = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(cardData, handleImageClick, currentUserId);\n    cardsList.append(cardElement);\n  });\n}).catch(function (err) {\n  return console.error('Ошибка при загрузке данных:', err);\n});\n(0,_components_validation_js__WEBPACK_IMPORTED_MODULE_3__.enableValidation)(validationConfig);\n\n//# sourceURL=webpack://tagspot2/./src/scripts/index.js?\n}");

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