/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Context_socketioContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Context/socketioContext */ \"./components/Context/socketioContext.js\");\n/* harmony import */ var _components_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Core-API/ConnectAPI */ \"./components/Core-API/ConnectAPI.js\");\n/* harmony import */ var _components_gameUI_entryPoint_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/gameUI/entryPoint.tsx */ \"./components/gameUI/entryPoint.tsx\");\n/* harmony import */ var _components_Core_API_GenerateWorld_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Core-API/GenerateWorld.ts */ \"./components/Core-API/GenerateWorld.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/year12/Desktop/Harvey/alevel_2020-2021/pages/test.js\",\n    _s = $RefreshSig$();\n\n// Written By Harvey Randall \\\\\n\n\n\n\n\nfunction render() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      child = _useState[0],\n      setChild = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      child2 = _useState2[0],\n      setChild2 = _useState2[1];\n\n  var socket = (0,_components_Context_socketioContext__WEBPACK_IMPORTED_MODULE_2__.useAppContext)();\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      recievedSeed = _useState3[0],\n      setSeed = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      rendered = _useState4[0],\n      setRendered = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      clients = _useState5[0],\n      setClients = _useState5[1];\n\n  (0,_components_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_3__.startSeverClientCommunication)(socket);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (typeof child === \"undefined\" || rendered === true) {\n      return;\n    }\n    /*\n    \n    let mainGame = await joinGame(\"Test\", \"Test\");\n        \n        setSeed(mainGame.seed);\n        setClients(mainGame.clients);\n        setPersonalData(mainGame.userData);*/\n\n\n    var game = new _components_Core_API_GenerateWorld_ts__WEBPACK_IMPORTED_MODULE_5__.GenerateWorld();\n    game.update(child, recievedSeed, child2, clients, socket.id);\n    setRendered(true);\n  }, [child, clients]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {\n        width: \"100vw\",\n        height: \"100vh\",\n        position: \"fixed\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameUI_entryPoint_tsx__WEBPACK_IMPORTED_MODULE_4__.CreateUI, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {\n        display: \"none\"\n      },\n      ref: function ref(_ref) {\n        setChild(_ref);\n      }\n      /* */\n\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 9\n  }, this);\n}\n/*let sendChat = (e) => {\n        e.preventDefault();\n        socket.emit(\"sendChat\", child2.value);\n        child2.value = \"\";\n    };*/\n\n_s(render, \"lDLJgnob6MUvKsiSXTxV62/dye0=\", false, function () {\n  return [_components_Context_socketioContext__WEBPACK_IMPORTED_MODULE_2__.useAppContext];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcz8xNDJiIl0sIm5hbWVzIjpbInJlbmRlciIsInVzZVN0YXRlIiwiY2hpbGQiLCJzZXRDaGlsZCIsImNoaWxkMiIsInNldENoaWxkMiIsInNvY2tldCIsInVzZUFwcENvbnRleHQiLCJyZWNpZXZlZFNlZWQiLCJzZXRTZWVkIiwicmVuZGVyZWQiLCJzZXRSZW5kZXJlZCIsImNsaWVudHMiLCJzZXRDbGllbnRzIiwic3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24iLCJ1c2VFZmZlY3QiLCJnYW1lIiwiR2VuZXJhdGVXb3JsZCIsInVwZGF0ZSIsImlkIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDSEMsK0NBQVEsRUFETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBQUEsbUJBRURGLCtDQUFRLEVBRlA7QUFBQSxNQUV0QkcsTUFGc0I7QUFBQSxNQUVkQyxTQUZjOztBQUc3QixNQUFNQyxNQUFNLEdBQUdDLGtGQUFhLEVBQTVCOztBQUg2QixtQkFJR04sK0NBQVEsQ0FBQyxDQUFELENBSlg7QUFBQSxNQUl0Qk8sWUFKc0I7QUFBQSxNQUlSQyxPQUpROztBQUFBLG1CQUtHUiwrQ0FBUSxDQUFDLEtBQUQsQ0FMWDtBQUFBLE1BS3RCUyxRQUxzQjtBQUFBLE1BS1pDLFdBTFk7O0FBQUEsbUJBTUNWLCtDQUFRLENBQUMsRUFBRCxDQU5UO0FBQUEsTUFNdEJXLE9BTnNCO0FBQUEsTUFNYkMsVUFOYTs7QUFRN0JDLGdHQUE2QixDQUFDUixNQUFELENBQTdCO0FBRUFTLGtEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUksT0FBT2IsS0FBUCxLQUFpQixXQUFqQixJQUFnQ1EsUUFBUSxLQUFLLElBQWpELEVBQXVEO0FBQ25EO0FBQ0g7QUFDRDtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRVEsUUFBSU0sSUFBSSxHQUFHLElBQUlDLGdGQUFKLEVBQVg7QUFDQUQsUUFBSSxDQUFDRSxNQUFMLENBQ0loQixLQURKLEVBRUlNLFlBRkosRUFHSUosTUFISixFQUlJUSxPQUpKLEVBS0lOLE1BQU0sQ0FBQ2EsRUFMWDtBQU9BUixlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0gsR0FyQlEsRUFxQk4sQ0FBQ1QsS0FBRCxFQUFRVSxPQUFSLENBckJNLENBQVQ7QUF1QkEsc0JBQ0k7QUFBQSw0QkFDSTtBQUNJLFdBQUssRUFBRTtBQUNIUSxhQUFLLEVBQUUsT0FESjtBQUVIQyxjQUFNLEVBQUUsT0FGTDtBQUdIQyxnQkFBUSxFQUFFO0FBSFAsT0FEWDtBQUFBLDZCQU1JLDhEQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFVSTtBQUNJLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURYO0FBRUksU0FBRyxFQUNDLGFBQUNDLElBQUQsRUFBUztBQUNMckIsZ0JBQVEsQ0FBQ3FCLElBQUQsQ0FBUjtBQUNIO0FBQUM7O0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0JIO0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0E3RHdCeEIsTTtVQUdMTyw4RSIsImZpbGUiOiIuL3BhZ2VzL3Rlc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250ZXh0L3NvY2tldGlvQ29udGV4dFwiO1xuaW1wb3J0IHsgc3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3JlLUFQSS9Db25uZWN0QVBJXCI7XG5pbXBvcnQgeyBDcmVhdGVVSSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVVSS9lbnRyeVBvaW50LnRzeFwiO1xuaW1wb3J0IHsgR2VuZXJhdGVXb3JsZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvcmUtQVBJL0dlbmVyYXRlV29ybGQudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGNvbnN0IFtjaGlsZCwgc2V0Q2hpbGRdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbY2hpbGQyLCBzZXRDaGlsZDJdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBzb2NrZXQgPSB1c2VBcHBDb250ZXh0KCk7XG4gICAgY29uc3QgW3JlY2lldmVkU2VlZCwgc2V0U2VlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbcmVuZGVyZWQsIHNldFJlbmRlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbY2xpZW50cywgc2V0Q2xpZW50c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBzdGFydFNldmVyQ2xpZW50Q29tbXVuaWNhdGlvbihzb2NrZXQpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gXCJ1bmRlZmluZWRcIiB8fCByZW5kZXJlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgIFxuICAgICAgICBsZXQgbWFpbkdhbWUgPSBhd2FpdCBqb2luR2FtZShcIlRlc3RcIiwgXCJUZXN0XCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRTZWVkKG1haW5HYW1lLnNlZWQpO1xuICAgICAgICAgICAgc2V0Q2xpZW50cyhtYWluR2FtZS5jbGllbnRzKTtcbiAgICAgICAgICAgIHNldFBlcnNvbmFsRGF0YShtYWluR2FtZS51c2VyRGF0YSk7Ki9cblxuICAgICAgICBsZXQgZ2FtZSA9IG5ldyBHZW5lcmF0ZVdvcmxkKClcbiAgICAgICAgZ2FtZS51cGRhdGUoXG4gICAgICAgICAgICBjaGlsZCxcbiAgICAgICAgICAgIHJlY2lldmVkU2VlZCxcbiAgICAgICAgICAgIGNoaWxkMixcbiAgICAgICAgICAgIGNsaWVudHMsXG4gICAgICAgICAgICBzb2NrZXQuaWRcbiAgICAgICAgKTtcbiAgICAgICAgc2V0UmVuZGVyZWQodHJ1ZSlcbiAgICB9LCBbY2hpbGQsIGNsaWVudHNdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxDcmVhdGVVSSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICAgIHJlZj17XG4gICAgICAgICAgICAgICAgICAgIChyZWYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENoaWxkKHJlZik7XG4gICAgICAgICAgICAgICAgICAgIH0gLyogKi9cbiAgICAgICAgICAgICAgICB9PjwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn1cblxuXG5cbi8qbGV0IHNlbmRDaGF0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzb2NrZXQuZW1pdChcInNlbmRDaGF0XCIsIGNoaWxkMi52YWx1ZSk7XG4gICAgICAgIGNoaWxkMi52YWx1ZSA9IFwiXCI7XG4gICAgfTsqLyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/test.js\n");

/***/ })

});