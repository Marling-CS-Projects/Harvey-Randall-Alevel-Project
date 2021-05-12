webpackHotUpdate_N_E("pages/test",{

/***/ "./components/Core-API/OBJHandler.js":
/*!*******************************************!*\
  !*** ./components/Core-API/OBJHandler.js ***!
  \*******************************************/
/*! exports provided: ImportOBJ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImportOBJ\", function() { return ImportOBJ; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nfunction ImportOBJ(Name, Scene) {\n  var mtlLoader = new three__WEBPACK_IMPORTED_MODULE_0__[\"MaterialLoader\"]();\n  mtlLoader.load(\"/\".concat(Name, \"/index.mtl\"), function (mtl) {\n    mtl.preload();\n    var objLoader = new three__WEBPACK_IMPORTED_MODULE_0__[\"ObjectLoader\"]();\n    objLoader.setMaterials(mtl);\n    objLoader.load(\"/\".concat(Name, \"/index.obj\"), function (root) {\n      Scene.add(root);\n      console.log(\"Added\");\n    });\n  });\n}\n_c = ImportOBJ;\n\nvar _c;\n\n$RefreshReg$(_c, \"ImportOBJ\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3JlLUFQSS9PQkpIYW5kbGVyLmpzP2M2NjAiXSwibmFtZXMiOlsiSW1wb3J0T0JKIiwiTmFtZSIsIlNjZW5lIiwibXRsTG9hZGVyIiwiTWF0ZXJpYWxMb2FkZXIiLCJsb2FkIiwibXRsIiwicHJlbG9hZCIsIm9iakxvYWRlciIsIk9iamVjdExvYWRlciIsInNldE1hdGVyaWFscyIsInJvb3QiLCJhZGQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdPLFNBQVNBLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCQyxLQUF6QixFQUFnQztBQUVuQyxNQUFNQyxTQUFTLEdBQUcsSUFBSUMsb0RBQUosRUFBbEI7QUFDQUQsV0FBUyxDQUFDRSxJQUFWLFlBQW1CSixJQUFuQixpQkFBcUMsVUFBQ0ssR0FBRCxFQUFTO0FBQzFDQSxPQUFHLENBQUNDLE9BQUo7QUFDQSxRQUFNQyxTQUFTLEdBQUcsSUFBSUMsa0RBQUosRUFBbEI7QUFDQUQsYUFBUyxDQUFDRSxZQUFWLENBQXVCSixHQUF2QjtBQUNBRSxhQUFTLENBQUNILElBQVYsWUFBbUJKLElBQW5CLGlCQUFxQyxVQUFDVSxJQUFELEVBQVU7QUFDM0NULFdBQUssQ0FBQ1UsR0FBTixDQUFVRCxJQUFWO0FBQ0FFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDSCxLQUhEO0FBSUgsR0FSRDtBQVNIO0tBWmVkLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvcmUtQVBJL09CSkhhbmRsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE1hdGVyaWFsTG9hZGVyLCBPYmplY3RMb2FkZXIgfSBmcm9tICd0aHJlZSc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEltcG9ydE9CSihOYW1lLCBTY2VuZSkge1xuXG4gICAgY29uc3QgbXRsTG9hZGVyID0gbmV3IE1hdGVyaWFsTG9hZGVyKCk7XG4gICAgbXRsTG9hZGVyLmxvYWQoYC8ke05hbWV9L2luZGV4Lm10bGAsIChtdGwpID0+IHtcbiAgICAgICAgbXRsLnByZWxvYWQoKTtcbiAgICAgICAgY29uc3Qgb2JqTG9hZGVyID0gbmV3IE9iamVjdExvYWRlcigpO1xuICAgICAgICBvYmpMb2FkZXIuc2V0TWF0ZXJpYWxzKG10bCk7XG4gICAgICAgIG9iakxvYWRlci5sb2FkKGAvJHtOYW1lfS9pbmRleC5vYmpgLCAocm9vdCkgPT4ge1xuICAgICAgICAgICAgU2NlbmUuYWRkKHJvb3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBZGRlZFwiKVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Core-API/OBJHandler.js\n");

/***/ })

})