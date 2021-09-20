/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/gameUI/entryPoint.tsx":
/*!******************************************!*\
  !*** ./components/gameUI/entryPoint.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateUI\": function() { return /* binding */ CreateUI; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core-API/ConnectAPI */ \"./components/Core-API/ConnectAPI.js\");\n/* harmony import */ var _Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core-API/3dModelHandlers/GLBLoader */ \"./components/Core-API/3dModelHandlers/GLBLoader.js\");\n/* harmony import */ var _menuPages_loading_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuPages/loading.tsx */ \"./components/gameUI/menuPages/loading.tsx\");\n/* harmony import */ var _menuPages_welcompage_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuPages/welcompage.tsx */ \"./components/gameUI/menuPages/welcompage.tsx\");\n/* harmony import */ var _menuPages_welcompage_tsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_menuPages_welcompage_tsx__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/year12/Desktop/Harvey/alevel_2020-2021/components/gameUI/entryPoint.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction CreateUI(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      isLoading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Not long now!\"),\n      status = _useState2[0],\n      setStatus = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      gamefeed = _useState3[0],\n      setGameFeed = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var timeout = setInterval(function () {\n      setStatus((0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_3__.finishedLoading)().status);\n\n      if ((0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_3__.finishedLoading)().setLoading === false) {\n        clearInterval(timeout);\n        setLoading(false);\n      }\n    }, 100);\n    (0,_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_2__.listenToEvent)(\"NewPlayer\", function (id, data) {});\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_menuPages_welcompage_tsx__WEBPACK_IMPORTED_MODULE_5___default()), {\n      canvas: props.canvas,\n      visible: !isLoading\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, this), isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menuPages_loading_tsx__WEBPACK_IMPORTED_MODULE_4__.default, {\n      status: status\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 23\n    }, this)]\n  }, void 0, true);\n}\n\n_s(CreateUI, \"j25UMMxtYIZ5MAwgegq1Pqm4XqQ=\");\n\n_c = CreateUI;\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateUI\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lVUkvZW50cnlQb2ludC50c3g/MDQ5YSJdLCJuYW1lcyI6WyJDcmVhdGVVSSIsInByb3BzIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiZ2FtZWZlZWQiLCJzZXRHYW1lRmVlZCIsInVzZUVmZmVjdCIsInRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsImZpbmlzaGVkTG9hZGluZyIsImNsZWFySW50ZXJ2YWwiLCJsaXN0ZW5Ub0V2ZW50IiwiaWQiLCJkYXRhIiwiY2FudmFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUEsa0JBQ0VDLCtDQUFRLENBQUMsSUFBRCxDQURWO0FBQUEsTUFDdkJDLFNBRHVCO0FBQUEsTUFDWkMsVUFEWTs7QUFBQSxtQkFFRkYsK0NBQVEsQ0FBQyxlQUFELENBRk47QUFBQSxNQUV2QkcsTUFGdUI7QUFBQSxNQUVmQyxTQUZlOztBQUFBLG1CQUlFSiwrQ0FBUSxFQUpWO0FBQUEsTUFJdkJLLFFBSnVCO0FBQUEsTUFJYkMsV0FKYTs7QUFNNUJDLGtEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLE9BQU8sR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDNUJMLGVBQVMsQ0FBQ00sb0ZBQWUsR0FBR1AsTUFBbkIsQ0FBVDs7QUFDQSxVQUFJTyxvRkFBZSxHQUFHUixVQUFsQixLQUFpQyxLQUFyQyxFQUE0QztBQUN4Q1MscUJBQWEsQ0FBQ0gsT0FBRCxDQUFiO0FBQ0FOLGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0g7QUFDSixLQU53QixFQU10QixHQU5zQixDQUF6QjtBQVFBVSx1RUFBYSxDQUFDLFdBQUQsRUFBYyxVQUFDQyxFQUFELEVBQUtDLElBQUwsRUFBYyxDQUFHLENBQS9CLENBQWI7QUFDSCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUEsc0JBQ0E7QUFBQSw0QkFDSSw4REFBQyxrRUFBRDtBQUFlLFlBQU0sRUFBRWYsS0FBSyxDQUFDZ0IsTUFBN0I7QUFBcUMsYUFBTyxFQUFFLENBQUNkO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUVLQSxTQUFTLGlCQUFJLDhEQUFDLDJEQUFEO0FBQWUsWUFBTSxFQUFFRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRmxCO0FBQUEsa0JBREE7QUFLSDs7R0F2QmVMLFE7O0tBQUFBLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWVVSS9lbnRyeVBvaW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGxpc3RlblRvRXZlbnQgfSBmcm9tIFwiLi4vQ29yZS1BUEkvQ29ubmVjdEFQSVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZmluaXNoZWRMb2FkaW5nIH0gZnJvbSBcIi4uL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9HTEJMb2FkZXJcIjtcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuL21lbnVQYWdlcy9sb2FkaW5nLnRzeFwiO1xuaW1wb3J0IFdlbGNvbWV0b0dhbWUgZnJvbSBcIi4vbWVudVBhZ2VzL3dlbGNvbXBhZ2UudHN4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVVSShwcm9wcykge1xuICAgIGxldCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGxldCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJOb3QgbG9uZyBub3chXCIpXG5cbiAgICBsZXQgW2dhbWVmZWVkLCBzZXRHYW1lRmVlZF0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IHRpbWVvdXQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdGF0dXMoZmluaXNoZWRMb2FkaW5nKCkuc3RhdHVzKVxuICAgICAgICAgICAgaWYgKGZpbmlzaGVkTG9hZGluZygpLnNldExvYWRpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lb3V0KVxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgIGxpc3RlblRvRXZlbnQoXCJOZXdQbGF5ZXJcIiwgKGlkLCBkYXRhKSA9PiB7IH0pO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgPD4gXG4gICAgICAgIDxXZWxjb21ldG9HYW1lIGNhbnZhcz17cHJvcHMuY2FudmFzfSB2aXNpYmxlPXshaXNMb2FkaW5nfSAvPlxuICAgICAgICB7aXNMb2FkaW5nICYmIDxMb2FkaW5nU2NyZWVuIHN0YXR1cz17c3RhdHVzfSAvPn1cbiAgICA8Lz4pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/gameUI/entryPoint.tsx\n");

/***/ }),

/***/ "./components/gameUI/menuPages/welcompage.tsx":
/*!****************************************************!*\
  !*** ./components/gameUI/menuPages/welcompage.tsx ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});