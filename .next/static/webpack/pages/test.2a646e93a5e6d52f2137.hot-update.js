/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/Core-API/3dModelHandlers/GLBLoader.js":
/*!**********************************************************!*\
  !*** ./components/Core-API/3dModelHandlers/GLBLoader.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"finishedLoading\": function() { return /* binding */ finishedLoading; },\n/* harmony export */   \"preLoadAllModels\": function() { return /* binding */ preLoadAllModels; },\n/* harmony export */   \"addGLBFile\": function() { return /* binding */ addGLBFile; }\n/* harmony export */ });\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _glbCore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glbCore */ \"./components/Core-API/3dModelHandlers/glbCore.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar setLoading = true;\nvar status = \"Loading canvas and game world!\";\nfunction finishedLoading() {\n  return {\n    setLoading: setLoading,\n    status: status\n  };\n} // Preloader \n\nvar allFiles = [{\n  Name: \"Plane.glb\",\n  location: \"/Aircraft/BasicPlane/Plane.glb\"\n}, {\n  Name: \"Blades.glb\",\n  location: \"/Aircraft/BasicPlane/Blades.glb\"\n}, {\n  Name: \"LeftAirelone.glb\",\n  location: \"/Aircraft/BasicPlane/LeftAirelone.glb\"\n}, {\n  Name: \"RightAirelone.glb\",\n  location: \"/Aircraft/BasicPlane/RightAirelone.glb\"\n}, {\n  Name: \"LeftWingControlsSurface.glb\",\n  location: \"/Aircraft/BasicPlane/LeftWingControlsSurface.glb\"\n}, {\n  Name: \"RightWingControlsSurface.glb\",\n  location: \"/Aircraft/BasicPlane/RightWingControlsSurface.glb\"\n}, {\n  Name: \"Rudder.glb\",\n  location: \"/Aircraft/BasicPlane/Rudder.glb\"\n}, {\n  Name: \"PineTree.glb\",\n  location: \"/Assets/PineTree.glb\"\n}, {\n  Name: \"SnowyPineTree.glb\",\n  location: \"/Assets/SnowyPineTree.glb\"\n}, {\n  Name: \"PalmTree.glb\",\n  location: \"/Assets/Palm_Tree.glb\"\n}, {\n  Name: \"Airport.glb\",\n  location: \"/Assets/Airport.glb\"\n}];\nvar preimportedModels = {};\nfunction preLoadAllModels() {\n  return _preLoadAllModels.apply(this, arguments);\n}\n\nfunction _preLoadAllModels() {\n  _preLoadAllModels = (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var i, item, model;\n    return _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            i = 0;\n\n          case 1:\n            if (!(i < allFiles.length)) {\n              _context.next = 12;\n              break;\n            }\n\n            item = allFiles[i];\n            status = \"Currently Loading Model: \".concat(item.Name, \", (\").concat(i, \"/\").concat(allFiles.length, \")\");\n            _context.next = 6;\n            return addGLBFile(item.location);\n\n          case 6:\n            model = _context.sent;\n            preimportedModels[item] = model;\n            console.log(status);\n\n          case 9:\n            i++;\n            _context.next = 1;\n            break;\n\n          case 12:\n            setLoading = false;\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _preLoadAllModels.apply(this, arguments);\n}\n\nfunction addGLBFile(_x) {\n  return _addGLBFile.apply(this, arguments);\n}\n\nfunction _addGLBFile() {\n  _addGLBFile = (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(item) {\n    return _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            if (!(preimportedModels[item] !== undefined)) {\n              _context2.next = 2;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", preimportedModels[item]);\n\n          case 2:\n            return _context2.abrupt(\"return\", new Promise(function (resolve, reject) {\n              var loader = new _glbCore__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();\n              loader.load( // resource URL\n              item, // called when the resource is loaded\n              function (gltf) {\n                gltf.animations;\n                gltf.scene;\n                gltf.scenes;\n                gltf.cameras;\n                gltf.asset;\n                resolve(gltf);\n              }, // called while loading is progressing\n              function (xhr) {}, // called when loading has errors\n              function (error) {\n                console.log(\"An error happened\");\n                reject(error);\n              });\n            }));\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _addGLBFile.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3JlLUFQSS8zZE1vZGVsSGFuZGxlcnMvR0xCTG9hZGVyLmpzPzVkMGYiXSwibmFtZXMiOlsic2V0TG9hZGluZyIsInN0YXR1cyIsImZpbmlzaGVkTG9hZGluZyIsImFsbEZpbGVzIiwiTmFtZSIsImxvY2F0aW9uIiwicHJlaW1wb3J0ZWRNb2RlbHMiLCJwcmVMb2FkQWxsTW9kZWxzIiwiaSIsImxlbmd0aCIsIml0ZW0iLCJhZGRHTEJGaWxlIiwibW9kZWwiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJsb2FkZXIiLCJHTFRGTG9hZGVyIiwibG9hZCIsImdsdGYiLCJhbmltYXRpb25zIiwic2NlbmUiLCJzY2VuZXMiLCJjYW1lcmFzIiwiYXNzZXQiLCJ4aHIiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBSUEsVUFBVSxHQUFHLElBQWpCO0FBQ0EsSUFBSUMsTUFBTSxHQUFHLGdDQUFiO0FBQ08sU0FBU0MsZUFBVCxHQUEwQjtBQUM3QixTQUFPO0FBQUNGLGNBQVUsRUFBVkEsVUFBRDtBQUFhQyxVQUFNLEVBQU5BO0FBQWIsR0FBUDtBQUNILEMsQ0FFRDs7QUFDQSxJQUFJRSxRQUFRLEdBQUcsQ0FDWDtBQUNJQyxNQUFJLEVBQUUsV0FEVjtBQUVJQyxVQUFRLEVBQUU7QUFGZCxDQURXLEVBS1g7QUFDSUQsTUFBSSxFQUFFLFlBRFY7QUFFSUMsVUFBUSxFQUFFO0FBRmQsQ0FMVyxFQVNYO0FBQ0lELE1BQUksRUFBRSxrQkFEVjtBQUVJQyxVQUFRLEVBQUU7QUFGZCxDQVRXLEVBYVg7QUFDSUQsTUFBSSxFQUFFLG1CQURWO0FBRUlDLFVBQVEsRUFBRTtBQUZkLENBYlcsRUFpQlg7QUFDSUQsTUFBSSxFQUFFLDZCQURWO0FBRUlDLFVBQVEsRUFBRTtBQUZkLENBakJXLEVBcUJYO0FBQ0lELE1BQUksRUFBRSw4QkFEVjtBQUVJQyxVQUFRLEVBQUU7QUFGZCxDQXJCVyxFQXlCWDtBQUNJRCxNQUFJLEVBQUUsWUFEVjtBQUVJQyxVQUFRLEVBQUU7QUFGZCxDQXpCVyxFQTZCWDtBQUNJRCxNQUFJLEVBQUUsY0FEVjtBQUVJQyxVQUFRLEVBQUU7QUFGZCxDQTdCVyxFQWlDWDtBQUNJRCxNQUFJLEVBQUUsbUJBRFY7QUFFSUMsVUFBUSxFQUFFO0FBRmQsQ0FqQ1csRUFxQ1g7QUFDSUQsTUFBSSxFQUFFLGNBRFY7QUFFSUMsVUFBUSxFQUFFO0FBRmQsQ0FyQ1csRUF5Q1g7QUFDSUQsTUFBSSxFQUFFLGFBRFY7QUFFSUMsVUFBUSxFQUFFO0FBRmQsQ0F6Q1csQ0FBZjtBQWlEQSxJQUFJQyxpQkFBaUIsR0FBRyxFQUF4QjtBQUlPLFNBQWVDLGdCQUF0QjtBQUFBO0FBQUE7OztvVEFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDS0MsYUFETCxHQUNPLENBRFA7O0FBQUE7QUFBQSxrQkFDU0EsQ0FBQyxHQUFDTCxRQUFRLENBQUNNLE1BRHBCO0FBQUE7QUFBQTtBQUFBOztBQUVLQyxnQkFGTCxHQUVZUCxRQUFRLENBQUNLLENBQUQsQ0FGcEI7QUFHQ1Asa0JBQU0sc0NBQStCUyxJQUFJLENBQUNOLElBQXBDLGdCQUE4Q0ksQ0FBOUMsY0FBbURMLFFBQVEsQ0FBQ00sTUFBNUQsTUFBTjtBQUhEO0FBQUEsbUJBSW1CRSxVQUFVLENBQUNELElBQUksQ0FBQ0wsUUFBTixDQUo3Qjs7QUFBQTtBQUlLTyxpQkFKTDtBQUtDTiw2QkFBaUIsQ0FBQ0ksSUFBRCxDQUFqQixHQUEwQkUsS0FBMUI7QUFDQUMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZYixNQUFaOztBQU5EO0FBQzRCTyxhQUFDLEVBRDdCO0FBQUE7QUFBQTs7QUFBQTtBQVFIUixzQkFBVSxHQUFHLEtBQWI7O0FBUkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVlBLFNBQWVXLFVBQXRCO0FBQUE7QUFBQTs7OzhTQUFPLGtCQUEwQkQsSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUVBSixpQkFBaUIsQ0FBQ0ksSUFBRCxDQUFqQixLQUE0QkssU0FGNUI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsOENBR1FULGlCQUFpQixDQUFDSSxJQUFELENBSHpCOztBQUFBO0FBQUEsOENBTUksSUFBSU0sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxrQkFBTUMsTUFBTSxHQUFHLElBQUlDLGdEQUFKLEVBQWY7QUFDQUQsb0JBQU0sQ0FBQ0UsSUFBUCxFQUNJO0FBQ0FYLGtCQUZKLEVBR0k7QUFDQSx3QkFBVVksSUFBVixFQUFnQjtBQUNaQSxvQkFBSSxDQUFDQyxVQUFMO0FBQ0FELG9CQUFJLENBQUNFLEtBQUw7QUFDQUYsb0JBQUksQ0FBQ0csTUFBTDtBQUNBSCxvQkFBSSxDQUFDSSxPQUFMO0FBQ0FKLG9CQUFJLENBQUNLLEtBQUw7QUFDQVYsdUJBQU8sQ0FBQ0ssSUFBRCxDQUFQO0FBQ0gsZUFYTCxFQVlJO0FBQ0Esd0JBQVVNLEdBQVYsRUFBZSxDQUVkLENBZkwsRUFnQkk7QUFDQSx3QkFBVUMsS0FBVixFQUFpQjtBQUNiaEIsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0FJLHNCQUFNLENBQUNXLEtBQUQsQ0FBTjtBQUNILGVBcEJMO0FBc0JILGFBeEJNLENBTko7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL0dMQkxvYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi9nbGJDb3JlXCI7XG5cbmxldCBzZXRMb2FkaW5nID0gdHJ1ZVxubGV0IHN0YXR1cyA9IFwiTG9hZGluZyBjYW52YXMgYW5kIGdhbWUgd29ybGQhXCJcbmV4cG9ydCBmdW5jdGlvbiBmaW5pc2hlZExvYWRpbmcoKXtcbiAgICByZXR1cm4ge3NldExvYWRpbmcsIHN0YXR1c31cbn1cblxuLy8gUHJlbG9hZGVyIFxubGV0IGFsbEZpbGVzID0gW1xuICAgIHtcbiAgICAgICAgTmFtZTogXCJQbGFuZS5nbGJcIixcbiAgICAgICAgbG9jYXRpb246IFwiL0FpcmNyYWZ0L0Jhc2ljUGxhbmUvUGxhbmUuZ2xiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIE5hbWU6IFwiQmxhZGVzLmdsYlwiLFxuICAgICAgICBsb2NhdGlvbjogXCIvQWlyY3JhZnQvQmFzaWNQbGFuZS9CbGFkZXMuZ2xiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIE5hbWU6IFwiTGVmdEFpcmVsb25lLmdsYlwiLFxuICAgICAgICBsb2NhdGlvbjogXCIvQWlyY3JhZnQvQmFzaWNQbGFuZS9MZWZ0QWlyZWxvbmUuZ2xiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIE5hbWU6IFwiUmlnaHRBaXJlbG9uZS5nbGJcIixcbiAgICAgICAgbG9jYXRpb246IFwiL0FpcmNyYWZ0L0Jhc2ljUGxhbmUvUmlnaHRBaXJlbG9uZS5nbGJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgTmFtZTogXCJMZWZ0V2luZ0NvbnRyb2xzU3VyZmFjZS5nbGJcIixcbiAgICAgICAgbG9jYXRpb246IFwiL0FpcmNyYWZ0L0Jhc2ljUGxhbmUvTGVmdFdpbmdDb250cm9sc1N1cmZhY2UuZ2xiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIE5hbWU6IFwiUmlnaHRXaW5nQ29udHJvbHNTdXJmYWNlLmdsYlwiLFxuICAgICAgICBsb2NhdGlvbjogXCIvQWlyY3JhZnQvQmFzaWNQbGFuZS9SaWdodFdpbmdDb250cm9sc1N1cmZhY2UuZ2xiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIE5hbWU6IFwiUnVkZGVyLmdsYlwiLFxuICAgICAgICBsb2NhdGlvbjogXCIvQWlyY3JhZnQvQmFzaWNQbGFuZS9SdWRkZXIuZ2xiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIE5hbWU6IFwiUGluZVRyZWUuZ2xiXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIi9Bc3NldHMvUGluZVRyZWUuZ2xiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIE5hbWU6IFwiU25vd3lQaW5lVHJlZS5nbGJcIixcbiAgICAgICAgbG9jYXRpb246IFwiL0Fzc2V0cy9Tbm93eVBpbmVUcmVlLmdsYlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBOYW1lOiBcIlBhbG1UcmVlLmdsYlwiLFxuICAgICAgICBsb2NhdGlvbjogXCIvQXNzZXRzL1BhbG1fVHJlZS5nbGJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgTmFtZTogXCJBaXJwb3J0LmdsYlwiLFxuICAgICAgICBsb2NhdGlvbjogXCIvQXNzZXRzL0FpcnBvcnQuZ2xiXCIsXG4gICAgfSxcblxuICAgIFxuXVxuXG5sZXQgcHJlaW1wb3J0ZWRNb2RlbHMgPSB7XG5cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZUxvYWRBbGxNb2RlbHMoKXtcbiAgICBmb3IobGV0IGk9MDtpPGFsbEZpbGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IGl0ZW0gPSBhbGxGaWxlc1tpXVxuICAgICAgICBzdGF0dXMgPSBgQ3VycmVudGx5IExvYWRpbmcgTW9kZWw6ICR7aXRlbS5OYW1lfSwgKCR7aX0vJHthbGxGaWxlcy5sZW5ndGh9KWBcbiAgICAgICAgbGV0IG1vZGVsID0gYXdhaXQgYWRkR0xCRmlsZShpdGVtLmxvY2F0aW9uKVxuICAgICAgICBwcmVpbXBvcnRlZE1vZGVsc1tpdGVtXSA9IG1vZGVsXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXR1cylcbiAgICB9XG4gICAgc2V0TG9hZGluZyA9IGZhbHNlXG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEdMQkZpbGUoaXRlbSkge1xuXG4gICAgaWYocHJlaW1wb3J0ZWRNb2RlbHNbaXRlbV0gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHJldHVybiBwcmVpbXBvcnRlZE1vZGVsc1tpdGVtXVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XG4gICAgICAgIGxvYWRlci5sb2FkKFxuICAgICAgICAgICAgLy8gcmVzb3VyY2UgVVJMXG4gICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgLy8gY2FsbGVkIHdoZW4gdGhlIHJlc291cmNlIGlzIGxvYWRlZFxuICAgICAgICAgICAgZnVuY3Rpb24gKGdsdGYpIHtcbiAgICAgICAgICAgICAgICBnbHRmLmFuaW1hdGlvbnM7XG4gICAgICAgICAgICAgICAgZ2x0Zi5zY2VuZTtcbiAgICAgICAgICAgICAgICBnbHRmLnNjZW5lcztcbiAgICAgICAgICAgICAgICBnbHRmLmNhbWVyYXM7XG4gICAgICAgICAgICAgICAgZ2x0Zi5hc3NldDtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGdsdGYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gY2FsbGVkIHdoaWxlIGxvYWRpbmcgaXMgcHJvZ3Jlc3NpbmdcbiAgICAgICAgICAgIGZ1bmN0aW9uICh4aHIpIHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIGNhbGxlZCB3aGVuIGxvYWRpbmcgaGFzIGVycm9yc1xuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbiBlcnJvciBoYXBwZW5lZFwiKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Core-API/3dModelHandlers/GLBLoader.js\n");

/***/ })

});