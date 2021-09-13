"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkRedux_Store"] = self["webpackChunkRedux_Store"] || []).push([["actions_js"],{

/***/ "./DateCounterStore/actions.js":
/*!*************************************!*\
  !*** ./DateCounterStore/actions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"increment_date\": () => (/* binding */ increment_date),\n/* harmony export */   \"decrement_date\": () => (/* binding */ decrement_date)\n/* harmony export */ });\nconst INCREMENT_DATE=\"INCREMENT_DATE\"\r\nconst DECREMENT_DATE=\"DECREMENT_DATE\"\r\n\r\nconst increment_date=(payload)=>({type:INCREMENT_DATE,payload})\r\nconst decrement_date=(payload)=>({type:DECREMENT_DATE,payload})\n\n//# sourceURL=webpack://Redux-Store/./DateCounterStore/actions.js?");

/***/ }),

/***/ "./NumberCounterStore/actions.js":
/*!***************************************!*\
  !*** ./NumberCounterStore/actions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"increment_one\": () => (/* binding */ increment_one),\n/* harmony export */   \"decrement_one\": () => (/* binding */ decrement_one)\n/* harmony export */ });\nconst INCREMENT_ONE=\"INCREMENT_ONE\"\r\nconst DECREMENT_ONE=\"DECREMENT_ONE\"\r\n\r\nconst increment_one={type:INCREMENT_ONE}\r\nconst decrement_one={type:DECREMENT_ONE}\n\n//# sourceURL=webpack://Redux-Store/./NumberCounterStore/actions.js?");

/***/ }),

/***/ "./actions.js":
/*!********************!*\
  !*** ./actions.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DateCounterActions\": () => (/* reexport module object */ _DateCounterStore_actions__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   \"NumberCounterActions\": () => (/* reexport module object */ _NumberCounterStore_actions__WEBPACK_IMPORTED_MODULE_1__),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DateCounterStore_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateCounterStore/actions */ \"./DateCounterStore/actions.js\");\n/* harmony import */ var _NumberCounterStore_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NumberCounterStore/actions */ \"./NumberCounterStore/actions.js\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({...DateCounterActions,...NumberCounterActions});\n\n//# sourceURL=webpack://Redux-Store/./actions.js?");

/***/ })

}]);