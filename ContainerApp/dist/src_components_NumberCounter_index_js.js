"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkContainerApp"] = self["webpackChunkContainerApp"] || []).push([["src_components_NumberCounter_index_js"],{

/***/ "./src/System.js":
/*!***********************!*\
  !*** ./src/System.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadComponent\": () => (/* binding */ loadComponent),\n/* harmony export */   \"loadScript\": () => (/* binding */ loadScript),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?255a\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable react/jsx-props-no-spreading */\n\n/* eslint-disable react/prop-types */\n\n/* eslint-disable react/destructuring-assignment */\n\n/* eslint-disable no-undef */\n // import Loader from './common/loader';\n\nconst Loader = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"loading..\");\n\nconst loadComponent = (scope, module) => async () => {\n  // Initializes the share scope. This fills it with known provided modules from this build and all remotes\n  await __webpack_require__.I('default');\n  const container = window[scope]; // or get the container somewhere else\n  // Initialize the container, it may provide shared modules\n\n  await container.init(__webpack_require__.S.default);\n  const factory = await window[scope].get(module);\n  const Module = factory();\n  return Module;\n};\n\nconst useDynamicScript = args => {\n  const [ready, setReady] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);\n  const [failed, setFailed] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {\n    if (!args.url) {\n      return;\n    }\n\n    const element = document.createElement('script');\n    element.src = args.url;\n    element.type = 'text/javascript';\n    element.async = true;\n    setReady(false);\n    setFailed(false);\n\n    element.onload = () => {\n      console.log(`Dynamic Script Loaded: ${args.url}`);\n      setReady(true);\n    };\n\n    element.onerror = () => {\n      console.error(`Dynamic Script Error: ${args.url}`);\n      setReady(false);\n      setFailed(true);\n    };\n\n    document.head.appendChild(element);\n    return () => {\n      console.log(`Dynamic Script Removed: ${args.url}`);\n      document.head.removeChild(element);\n    };\n  }, [args.url]);\n  return {\n    ready,\n    failed\n  };\n};\n\nfunction System(props) {\n  const {\n    ready,\n    failed\n  } = useDynamicScript({\n    url: props.system && props.system.url\n  });\n\n  if (!props.system) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Loader, null);\n  } // if (!ready) {\n  //     return <h2>Loading dynamic script: {props.system.url}</h2>;\n  // }\n\n\n  if (!ready) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Loader, null);\n  }\n\n  if (failed) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Failed to load dynamic script: \", props.system.url);\n  }\n\n  const Component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(loadComponent(props.system.scope, props.system.module)); // const Component = React.lazy(() => import(\"app2/Widget\"))\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Loader, null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, props));\n}\n\nconst loadScript = args => {\n  // if (!args.url) {\n  //     return;\n  // }\n  const element = document.createElement('script');\n  element.src = 'http://localhost:4010/remoteEntry.js';\n  element.type = 'text/javascript';\n  element.async = true; // setReady(false);\n  // setFailed(false);\n\n  element.onload = () => {\n    console.log('store loaded;'); // const ret = loadComponent('store', './Store');\n    // console.log('ret = ', ret);\n  };\n\n  element.onerror = () => {\n    console.error(`Dynamic Script Error: ${args.url}`);\n  };\n\n  document.head.appendChild(element);\n  return () => {\n    console.log(`Dynamic Script Removed: ${args.url}`);\n    document.head.removeChild(element);\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (System);\n\n//# sourceURL=webpack://ContainerApp/./src/System.js?");

/***/ }),

/***/ "./src/components/NumberCounter/NumberCounter.js":
/*!*******************************************************!*\
  !*** ./src/components/NumberCounter/NumberCounter.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NumberCounter\": () => (/* binding */ NumberCounter)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?255a\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _System__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../System */ \"./src/System.js\");\n\n\nconst NumberCounter = () => {\n  const [system, setSystem] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(undefined);\n\n  function setLayout() {\n    setSystem({\n      url: \"http://localhost:4003/remoteEntry.js\",\n      scope: \"NumberCounter\",\n      module: \"./NumberCounter\"\n    });\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setLayout();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_System__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    system: system\n  });\n};\n\n//# sourceURL=webpack://ContainerApp/./src/components/NumberCounter/NumberCounter.js?");

/***/ }),

/***/ "./src/components/NumberCounter/index.js":
/*!***********************************************!*\
  !*** ./src/components/NumberCounter/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _NumberCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberCounter */ \"./src/components/NumberCounter/NumberCounter.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NumberCounter__WEBPACK_IMPORTED_MODULE_0__.NumberCounter);\n\n//# sourceURL=webpack://ContainerApp/./src/components/NumberCounter/index.js?");

/***/ })

}]);