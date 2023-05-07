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

/***/ "./src/book.js":
/*!*********************!*\
  !*** ./src/book.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Book\": () => (/* binding */ Book)\n/* harmony export */ });\n\nclass Book {\n\n    constructor(title, author, pages, language, read) {\n        this.title = title.toUpperCase().trim();\n        this.author = author.trim();\n        this.pages = pages;\n        this.language = language;\n        this.read = read;\n    }\n    \n}\n\n\n\n\n//# sourceURL=webpack://brainnest-library/./src/book.js?");

/***/ }),

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.js */ \"./src/book.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\nclass Card extends _book_js__WEBPACK_IMPORTED_MODULE_0__.Book {\n    \n    constructor(title, author, pages, language, read, index){\n     super( title, author, pages, language, read)\n        \n        this.index = index;\n        //Render the book cards on the Library\n        this.createCard()\n    }\n\n\n\n createCard() {\n  const libraryContainer = document.getElementById(\"book-cards\");\n\n    const bookCard = document.createElement(\"div\");\n    bookCard.classList.add(\"book-card\");\n\n    const title = document.createElement(\"h2\");\n    title.textContent = this.title;\n    bookCard.appendChild(title);\n\n    const author = document.createElement(\"h3\");\n    author.textContent = `By: ${this.author}`;\n    bookCard.appendChild(author);\n\n    const pages = document.createElement(\"p\");\n    pages.textContent = `${this.pages} pages`;\n    bookCard.appendChild(pages);\n\n    const language = document.createElement(\"p\");\n    language.textContent = `Language: ${this.language}`;\n    bookCard.appendChild(language);\n\n    const read = document.createElement(\"p\");\n    read.textContent = this.read ? \"Read\" : \"Unread\";\n    bookCard.appendChild(read);\n\n    //Readstatus button card\n    const readButton = this.AddReadStatusBtn(read);\n    bookCard.appendChild(readButton);\n\n    //set index to card\n    bookCard.setAttribute(\"data-index\", this.index);\n \n\n    //remove button card\n    const removeButton = this.toggleRemove(bookCard);\n    bookCard.appendChild(removeButton);\n\n  \n    //append everythig to libraryContainer\n    libraryContainer.appendChild(bookCard);\n\n \n    }\n\n   \n  \n\n\n    toggleReadStatus() {\n        this.read = !this.read;\n    }\n\n    AddReadStatusBtn(read) {\n        const readButton = document.createElement(\"button\");\n        readButton.classList.add(\"book-read-btn\");\n        readButton.textContent = this.read ? \"Mark as unread\" : \"Mark as read\";\n\n        readButton.addEventListener(\"click\", () => {\n            this.toggleReadStatus();\n            readButton.textContent = this.read ? \"Mark as unread\" : \"Mark as read\";\n            read.textContent = this.read ? \"Read\" : \"Unread\";\n            (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.updateCounters)();\n        });\n\n        return readButton;\n    }\n\n    toggleRemove(bookCard) {\n       \n        const removeButton = document.createElement(\"button\");\n        removeButton.classList.add(\"book-remove-btn\");\n        removeButton.textContent = \"Remove\";\n\n        removeButton.addEventListener(\"click\", () => {\n             \n             // Remove the book card from the DOM\n            bookCard.remove();\n\n            const cardIndex = parseInt(bookCard.getAttribute(\"data-index\"));\n\n            // Remove the book at the specified card index from the myLibrary array\n            _index_js__WEBPACK_IMPORTED_MODULE_1__.bookCards.splice(cardIndex,1);\n     \n            // Re-index the remaining book cards\n            //finds all child elements of \"book-cards\" with the class \"book-card\" using querySelectorAll()\n            const librarySection = document.querySelector(\"#book-cards\");\n            librarySection.querySelectorAll(\".book-card\").forEach((card, index) => {\n                 //sets its \"data-index\" attribute to its new index in the bookCards array.\n                 card.setAttribute(\"data-index\", index);\n            });\n          \n           // Update the counters\n            (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.updateCounters)();\n          \n        });\n        return removeButton;\n    }\n\n\n}\n\n\n\n//# sourceURL=webpack://brainnest-library/./src/card.js?");

/***/ }),

/***/ "./src/eventListener.js":
/*!******************************!*\
  !*** ./src/eventListener.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventListener\": () => (/* binding */ eventListener)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\nfunction eventListener() {\n\n      // event listener handling search form submit \n       const searchForm = document.getElementById(\"submit-search\");\n       searchForm.addEventListener(\"submit\", filterSearch);\n\n       //show-read-btna\n       const selectShowReadBooks = document.querySelector(\".show-read-btn\");\n       selectShowReadBooks.addEventListener(\"click\", showReadBtn);\n\n       //show-unread-btn\n       const showUnreadBooks = document.querySelector(\".show-unread-btn\");\n       showUnreadBooks.addEventListener(\"click\", showUnreadBtn);\n\n       //show-all-btn\n       const showAllBooks = document.querySelector(\".show-all-btn\");\n       showAllBooks.addEventListener(\"click\", showAllBtn);\n\n  }\n\n\n       //filter search func\n  function filterSearch(event) {\n    \n    //when submit the form it prevent reload the page.\n    event.preventDefault();\n\n    const title = document.getElementById(\"search\").value;\n\n    if (title.trim() === \"\") {\n      return;\n    }\n\n    const filteredByTitle = _index_js__WEBPACK_IMPORTED_MODULE_0__.bookCards.filter(\n      (book) => book.title.toUpperCase() === title.toUpperCase()\n    );\n\n   \n    //render instance of the Card based on filterByTitle instance\n    renderCard(filteredByTitle)\n\n    //set to empty the input search field\n    document.getElementById(\"search\").value = \"\"\n  }\n\n\n\n\n  //show-read-btn func\n  function showReadBtn() {\n    const filterByReadBook = _index_js__WEBPACK_IMPORTED_MODULE_0__.bookCards.filter((book) => book.read)\n    renderCard(filterByReadBook)\n  }\n\n  //show-unread-btn func\n  function showUnreadBtn() {\n    const filterByUnReadBook = _index_js__WEBPACK_IMPORTED_MODULE_0__.bookCards.filter((book) => !book.read)\n    renderCard(filterByUnReadBook)\n    \n  }\n\n  //show-all-btn func\n  function showAllBtn() {\n    //show all instance of the Card\n    renderCard(_index_js__WEBPACK_IMPORTED_MODULE_0__.bookCards)\n  }\n\n  function renderCard(cards){\n     //target book-card and set to empty  card div\n     const libraryContainer = document.getElementById(\"book-cards\")\n     libraryContainer.innerHTML = \"\";\n\n    cards.forEach((bookcard) => {\n      bookcard.createCard();\n    })\n  }\n\n\n\n\n//# sourceURL=webpack://brainnest-library/./src/eventListener.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addBookToLibrary\": () => (/* binding */ addBookToLibrary),\n/* harmony export */   \"bookCards\": () => (/* binding */ bookCards),\n/* harmony export */   \"getUserInput\": () => (/* binding */ getUserInput),\n/* harmony export */   \"updateCounters\": () => (/* binding */ updateCounters)\n/* harmony export */ });\n/* harmony import */ var _book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.js */ \"./src/book.js\");\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.js */ \"./src/card.js\");\n/* harmony import */ var _eventListener_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListener.js */ \"./src/eventListener.js\");\n\n\n\n//import \"./styles.css\"\n\nlet bookCards = [];\n\n\nfunction getUserInput(){\n  // Get user input from the form\n  const title = document.getElementById(\"title\").value.trim();\n  const author = document.getElementById(\"author\").value.trim();\n  const pages = document.getElementById(\"pages\").value.trim();\n  const language = document.getElementById(\"language\").value.trim();\n  const read = document.getElementById(\"read\").checked;\n  return {title, author, pages, language, read}\n}\n\nfunction addBookToLibrary(event){\n  event.preventDefault();\n  const {title, author, pages, language, read} = getUserInput();\n\n  // Create a new instance of card object with the user input\n  const newCard  = new _card_js__WEBPACK_IMPORTED_MODULE_1__.Card(title, author, pages, language, read, bookCards.length)\n\n  bookCards.push(newCard)\n\n}\n\n\nfunction updateCounters(){\n  const totalBooks = bookCards.length;\n  const totalReadBooks = bookCards.filter((book) => book.read).length;\n  const totalUnreadBooks = bookCards.filter((book) => !book.read).length;\n\n  const totalBooksCounter = document.querySelector(\"#total-books\");\n  totalBooksCounter.textContent = totalBooks;\n\n  const totalReadBooksCounter = document.querySelector(\"#total-read-books\");\n  totalReadBooksCounter.textContent = totalReadBooks;\n\n  const totalUnreadBooksCounter = document.querySelector(\"#total-unread-books\");\n  totalUnreadBooksCounter.textContent = totalUnreadBooks;\n}\n\n\nfunction handleFormSubmit(event) {\n \n  addBookToLibrary(event)\n  // Call the displayBooks function initially to display the book cards on the page\n  ;(0,_eventListener_js__WEBPACK_IMPORTED_MODULE_2__.eventListener)()\n  \n  //manage the counters for total books, read and unread books\n  updateCounters();\n  // Clear the form inputs\n  event.target.reset();\n}\n\n\n\n// Add an event listener to the \"ADD NEW BOOK\" form to handle form submit\n//use the DOMContentLoaded event to ensure that your JavaScript code is executed after the DOM has loaded.\n\n  const addNewBook = document.getElementById(\"submit-book-form\");\n  addNewBook.addEventListener(\"submit\", handleFormSubmit);\n\n\n\n\n\n//# sourceURL=webpack://brainnest-library/./src/index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;