/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/gameUI/menuPages/welcompage.tsx":
/*!****************************************************!*\
  !*** ./components/gameUI/menuPages/welcompage.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WelcometoGame; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _welcomePageWorld_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcomePageWorld.ts */ \"./components/gameUI/menuPages/welcomePageWorld.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/year12/Desktop/Harvey/alevel_2020-2021/components/gameUI/menuPages/welcompage.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction WelcometoGame(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      rendered = _useState[0],\n      setRendered = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (props.canvas === undefined || rendered) return;\n    console.log(props.canvas);\n    var welcomeScene = new _welcomePageWorld_ts__WEBPACK_IMPORTED_MODULE_2__.CreateWelcomePageThreejs(props.canvas);\n    setRendered(true);\n  }, [props]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Welcome!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}\n\n_s(WelcometoGame, \"EIGKDVJmrecJn3JW7yl0qCRfLko=\");\n\n_c = WelcometoGame;\n\nvar _c;\n\n$RefreshReg$(_c, \"WelcometoGame\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lVUkvbWVudVBhZ2VzL3dlbGNvbXBhZ2UudHN4P2UwMTYiXSwibmFtZXMiOlsiV2VsY29tZXRvR2FtZSIsInByb3BzIiwidXNlU3RhdGUiLCJyZW5kZXJlZCIsInNldFJlbmRlcmVkIiwidXNlRWZmZWN0IiwiY2FudmFzIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsIndlbGNvbWVTY2VuZSIsIkNyZWF0ZVdlbGNvbWVQYWdlVGhyZWVqcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFNZSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUFtQztBQUFBOztBQUFBLGtCQUNkQywrQ0FBUSxDQUFDLEtBQUQsQ0FETTtBQUFBLE1BQ3ZDQyxRQUR1QztBQUFBLE1BQzdCQyxXQUQ2Qjs7QUFHOUNDLGtEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUdKLEtBQUssQ0FBQ0ssTUFBTixLQUFpQkMsU0FBakIsSUFBOEJKLFFBQWpDLEVBQTJDO0FBQzNDSyxXQUFPLENBQUNDLEdBQVIsQ0FBWVIsS0FBSyxDQUFDSyxNQUFsQjtBQUNBLFFBQUlJLFlBQVksR0FBRyxJQUFJQywwRUFBSixDQUE2QlYsS0FBSyxDQUFDSyxNQUFuQyxDQUFuQjtBQUNBRixlQUFXLENBQUMsSUFBRCxDQUFYO0FBRUgsR0FOUSxFQU1OLENBQUNILEtBQUQsQ0FOTSxDQUFUO0FBUUEsc0JBQ0k7QUFBQSwyQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBS0g7O0dBaEJ1QkQsYTs7S0FBQUEsYSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZ2FtZVVJL21lbnVQYWdlcy93ZWxjb21wYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENyZWF0ZVdlbGNvbWVQYWdlVGhyZWVqcyB9IGZyb20gJy4vd2VsY29tZVBhZ2VXb3JsZC50cydcblxuaW50ZXJmYWNlIHByb3BzIHtcbiAgICBjYW52YXM6IFJlZjxhbnk+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlbGNvbWV0b0dhbWUocHJvcHM6cHJvcHMpe1xuICAgIGNvbnN0IFtyZW5kZXJlZCwgc2V0UmVuZGVyZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihwcm9wcy5jYW52YXMgPT09IHVuZGVmaW5lZCB8fCByZW5kZXJlZCkgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5jYW52YXMpXG4gICAgICAgIGxldCB3ZWxjb21lU2NlbmUgPSBuZXcgQ3JlYXRlV2VsY29tZVBhZ2VUaHJlZWpzKHByb3BzLmNhbnZhcyk7XG4gICAgICAgIHNldFJlbmRlcmVkKHRydWUpO1xuICAgICAgICBcbiAgICB9LCBbcHJvcHNdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT5XZWxjb21lITwvaDE+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/gameUI/menuPages/welcompage.tsx\n");

/***/ })

});