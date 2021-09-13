"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkRedux_Store"] = self["webpackChunkRedux_Store"] || []).push([["index_js"],{

/***/ "./DateCounterStore/reducer.js":
/*!*************************************!*\
  !*** ./DateCounterStore/reducer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DateCounterReducer\": () => (/* binding */ DateCounterReducer)\n/* harmony export */ });\nconst DateCounterReducer = (state = { date: Date.now() }, action) => {\r\n    const ms = 3600 * 60 * 24 * 100\r\n    const load = parseInt(action.payload)\r\n    switch (action.type) {\r\n        case 'INCREMENT_DATE':\r\n            return { ...state, date: state.date + load * ms };\r\n        case 'DECREMENT_DATE':\r\n            return { ...state, date: state.date - load * ms };\r\n        default:\r\n            return state\r\n    }\r\n}\n\n//# sourceURL=webpack://Redux-Store/./DateCounterStore/reducer.js?");

/***/ }),

/***/ "./NumberCounterStore/reducer.js":
/*!***************************************!*\
  !*** ./NumberCounterStore/reducer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CounterReducer\": () => (/* binding */ CounterReducer)\n/* harmony export */ });\nconst CounterReducer=(state = {value:0}, action)=> {\r\n    switch (action.type) {\r\n      case 'INCREMENT_ONE':\r\n        return {...state,value:state.value+1}\r\n    case 'DECREMENT_ONE':\r\n        return {...state,value:state.value-1}\r\n      default:\r\n        return state\r\n    }\r\n  }\n\n//# sourceURL=webpack://Redux-Store/./NumberCounterStore/reducer.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./reducer.js\");\n\r\n\r\n\r\n\r\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({\r\n    ..._reducer__WEBPACK_IMPORTED_MODULE_0__,\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(rootReducer));\r\n\r\n\n\n//# sourceURL=webpack://Redux-Store/./index.js?");

/***/ }),

/***/ "./reducer.js":
/*!********************!*\
  !*** ./reducer.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CounterReducer\": () => (/* reexport safe */ _NumberCounterStore_reducer__WEBPACK_IMPORTED_MODULE_0__.CounterReducer),\n/* harmony export */   \"DateCounterReducer\": () => (/* reexport safe */ _DateCounterStore_reducer__WEBPACK_IMPORTED_MODULE_1__.DateCounterReducer)\n/* harmony export */ });\n/* harmony import */ var _NumberCounterStore_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberCounterStore/reducer */ \"./NumberCounterStore/reducer.js\");\n/* harmony import */ var _DateCounterStore_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateCounterStore/reducer */ \"./DateCounterStore/reducer.js\");\n\r\n\n\n//# sourceURL=webpack://Redux-Store/./reducer.js?");

/***/ })

}]);