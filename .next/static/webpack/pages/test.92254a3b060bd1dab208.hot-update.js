webpackHotUpdate_N_E("pages/test",{

/***/ "./components/gameFundalmentals/MainSceneHandler.js":
/*!**********************************************************!*\
  !*** ./components/gameFundalmentals/MainSceneHandler.js ***!
  \**********************************************************/
/*! exports provided: GenerateMainScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GenerateMainScene\", function() { return GenerateMainScene; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core-API/RenderingHandler */ \"./components/Core-API/RenderingHandler.js\");\n/* harmony import */ var _clouds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clouds */ \"./components/gameFundalmentals/clouds.js\");\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls */ \"./components/gameFundalmentals/controls.js\");\n/* harmony import */ var _DayNightCycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DayNightCycle */ \"./components/gameFundalmentals/DayNightCycle.js\");\n/* harmony import */ var _ProceduleTerrain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProceduleTerrain */ \"./components/gameFundalmentals/ProceduleTerrain.js\");\n// Written By Harvey Randall \\\\\n\n\n\n\n\n\nvar debug = true;\nfunction GenerateMainScene(SceneToGet, Renders, document, seed, child2, Camera) {\n  var clouds = [];\n\n  for (var i = 0; i < 40; i++) {\n    clouds.push(new _clouds__WEBPACK_IMPORTED_MODULE_2__[\"GenerateClouds\"](new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](Math.random() * 300 - 300, 80 + Math.random() * 20, Math.random() * 600 - 400), SceneToGet, Math.random() * 0.2, Math.random() * 6 + 1));\n  }\n\n  var daynight = new _DayNightCycle__WEBPACK_IMPORTED_MODULE_4__[\"CreateDayNightCycle\"](SceneToGet, Renders);\n  Object(_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_5__[\"GenerateTerrain\"])(seed, SceneToGet);\n  Object(_controls__WEBPACK_IMPORTED_MODULE_3__[\"ControlHandlerInit\"])(document, child2);\n\n  if (debug) {\n    var planeGeometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"PlaneGeometry\"](20, 20, 32, 32);\n    planeGeometry.rotateX(Math.PI / 2);\n    var planeMaterial = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshStandardMaterial\"]({\n      color: 0x567d46,\n      side: DoubleSide\n    });\n    var plane = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](planeGeometry, planeMaterial);\n    plane.position.y = -0.5;\n    SceneToGet.add(plane);\n    var gridHelper = new three__WEBPACK_IMPORTED_MODULE_0__[\"GridHelper\"](50, 50);\n    gridHelper.position.y = -1;\n    SceneToGet.add(gridHelper);\n  } // Add all updating parts to a function\n\n\n  Object(_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_1__[\"addToRenderSequence\"])(function () {\n    clouds.forEach(function (e, i) {\n      e.update();\n    });\n  });\n  Object(_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_1__[\"addToRenderSequence\"])(function () {\n    return Object(_controls__WEBPACK_IMPORTED_MODULE_3__[\"ControlHandlerUpdate\"])(Camera);\n  });\n  Object(_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_1__[\"addToRenderSequence\"])(function () {\n    return daynight.update();\n  });\n}\n_c = GenerateMainScene;\n\nvar _c;\n\n$RefreshReg$(_c, \"GenerateMainScene\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9NYWluU2NlbmVIYW5kbGVyLmpzPzAxMmIiXSwibmFtZXMiOlsiZGVidWciLCJHZW5lcmF0ZU1haW5TY2VuZSIsIlNjZW5lVG9HZXQiLCJSZW5kZXJzIiwiZG9jdW1lbnQiLCJzZWVkIiwiY2hpbGQyIiwiQ2FtZXJhIiwiY2xvdWRzIiwiaSIsInB1c2giLCJHZW5lcmF0ZUNsb3VkcyIsIlZlY3RvcjMiLCJNYXRoIiwicmFuZG9tIiwiZGF5bmlnaHQiLCJDcmVhdGVEYXlOaWdodEN5Y2xlIiwiR2VuZXJhdGVUZXJyYWluIiwiQ29udHJvbEhhbmRsZXJJbml0IiwicGxhbmVHZW9tZXRyeSIsIlBsYW5lR2VvbWV0cnkiLCJyb3RhdGVYIiwiUEkiLCJwbGFuZU1hdGVyaWFsIiwiTWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJjb2xvciIsInNpZGUiLCJEb3VibGVTaWRlIiwicGxhbmUiLCJNZXNoIiwicG9zaXRpb24iLCJ5IiwiYWRkIiwiZ3JpZEhlbHBlciIsIkdyaWRIZWxwZXIiLCJhZGRUb1JlbmRlclNlcXVlbmNlIiwiZm9yRWFjaCIsImUiLCJ1cGRhdGUiLCJDb250cm9sSGFuZGxlclVwZGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsS0FBSyxHQUFHLElBQVo7QUFFTyxTQUFTQyxpQkFBVCxDQUEyQkMsVUFBM0IsRUFBdUNDLE9BQXZDLEVBQWdEQyxRQUFoRCxFQUEwREMsSUFBMUQsRUFBZ0VDLE1BQWhFLEVBQXdFQyxNQUF4RSxFQUErRTtBQUVsRixNQUFJQyxNQUFNLEdBQUcsRUFBYjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDekJELFVBQU0sQ0FBQ0UsSUFBUCxDQUFZLElBQUlDLHNEQUFKLENBQW1CLElBQUlDLDZDQUFKLENBQWFDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFqQixHQUF3QixHQUFwQyxFQUF5QyxLQUFLRCxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBOUQsRUFBbUVELElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFqQixHQUF3QixHQUExRixDQUFuQixFQUFtSFosVUFBbkgsRUFBK0hXLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUEvSSxFQUFvSkQsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLENBQWhCLEdBQW9CLENBQXhLLENBQVo7QUFDSDs7QUFFRCxNQUFJQyxRQUFRLEdBQUcsSUFBSUMsa0VBQUosQ0FBd0JkLFVBQXhCLEVBQW9DQyxPQUFwQyxDQUFmO0FBQ0FjLDJFQUFlLENBQUNaLElBQUQsRUFBT0gsVUFBUCxDQUFmO0FBQ0FnQixzRUFBa0IsQ0FBQ2QsUUFBRCxFQUFXRSxNQUFYLENBQWxCOztBQUVBLE1BQUdOLEtBQUgsRUFBUztBQUNMLFFBQU1tQixhQUFhLEdBQUcsSUFBSUMsbURBQUosQ0FBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEIsRUFBMUIsRUFBOEIsRUFBOUIsQ0FBdEI7QUFDQUQsaUJBQWEsQ0FBQ0UsT0FBZCxDQUFzQlIsSUFBSSxDQUFDUyxFQUFMLEdBQVUsQ0FBaEM7QUFDQSxRQUFNQyxhQUFhLEdBQUcsSUFBSUMsMERBQUosQ0FBeUI7QUFBRUMsV0FBSyxFQUFFLFFBQVQ7QUFBbUJDLFVBQUksRUFBRUM7QUFBekIsS0FBekIsQ0FBdEI7QUFDQSxRQUFNQyxLQUFLLEdBQUcsSUFBSUMsMENBQUosQ0FBU1YsYUFBVCxFQUF3QkksYUFBeEIsQ0FBZDtBQUNBSyxTQUFLLENBQUNFLFFBQU4sQ0FBZUMsQ0FBZixHQUFtQixDQUFDLEdBQXBCO0FBQ0E3QixjQUFVLENBQUM4QixHQUFYLENBQWVKLEtBQWY7QUFDQSxRQUFNSyxVQUFVLEdBQUcsSUFBSUMsZ0RBQUosQ0FBZSxFQUFmLEVBQW1CLEVBQW5CLENBQW5CO0FBQ0FELGNBQVUsQ0FBQ0gsUUFBWCxDQUFvQkMsQ0FBcEIsR0FBd0IsQ0FBQyxDQUF6QjtBQUNBN0IsY0FBVSxDQUFDOEIsR0FBWCxDQUFlQyxVQUFmO0FBQ0gsR0FyQmlGLENBdUJsRjs7O0FBQ0FFLHdGQUFtQixDQUFDLFlBQU07QUFDdEIzQixVQUFNLENBQUM0QixPQUFQLENBQWUsVUFBQ0MsQ0FBRCxFQUFJNUIsQ0FBSixFQUFVO0FBQ3JCNEIsT0FBQyxDQUFDQyxNQUFGO0FBQ0gsS0FGRDtBQUdILEdBSmtCLENBQW5CO0FBTUFILHdGQUFtQixDQUFDO0FBQUEsV0FBTUksc0VBQW9CLENBQUNoQyxNQUFELENBQTFCO0FBQUEsR0FBRCxDQUFuQjtBQUNBNEIsd0ZBQW1CLENBQUM7QUFBQSxXQUFPcEIsUUFBUSxDQUFDdUIsTUFBVCxFQUFQO0FBQUEsR0FBRCxDQUFuQjtBQUVIO0tBakNlckMsaUIiLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL01haW5TY2VuZUhhbmRsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcblxuaW1wb3J0IHsgR3JpZEhlbHBlciwgTWVzaCwgTWVzaFN0YW5kYXJkTWF0ZXJpYWwsIFBsYW5lR2VvbWV0cnksIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIlxuaW1wb3J0IHsgYWRkVG9SZW5kZXJTZXF1ZW5jZSB9IGZyb20gXCIuLi9Db3JlLUFQSS9SZW5kZXJpbmdIYW5kbGVyXCJcbmltcG9ydCB7IEdlbmVyYXRlQ2xvdWRzIH0gZnJvbSBcIi4vY2xvdWRzXCJcbmltcG9ydCB7IENvbnRyb2xIYW5kbGVySW5pdCwgQ29udHJvbEhhbmRsZXJVcGRhdGUgfSBmcm9tIFwiLi9jb250cm9sc1wiXG5pbXBvcnQgeyBDcmVhdGVEYXlOaWdodEN5Y2xlIH0gZnJvbSBcIi4vRGF5TmlnaHRDeWNsZVwiXG5pbXBvcnQgeyBHZW5lcmF0ZVRlcnJhaW4gfSBmcm9tIFwiLi9Qcm9jZWR1bGVUZXJyYWluXCJcblxubGV0IGRlYnVnID0gdHJ1ZVxuXG5leHBvcnQgZnVuY3Rpb24gR2VuZXJhdGVNYWluU2NlbmUoU2NlbmVUb0dldCwgUmVuZGVycywgZG9jdW1lbnQsIHNlZWQsIGNoaWxkMiwgQ2FtZXJhKXtcblxuICAgIGxldCBjbG91ZHMgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xuICAgICAgICBjbG91ZHMucHVzaChuZXcgR2VuZXJhdGVDbG91ZHMobmV3IFZlY3RvcjMoKE1hdGgucmFuZG9tKCkgKiAzMDApIC0gMzAwLCA4MCArIE1hdGgucmFuZG9tKCkgKiAyMCwgKE1hdGgucmFuZG9tKCkgKiA2MDApIC0gNDAwKSwgU2NlbmVUb0dldCwgTWF0aC5yYW5kb20oKSAqIDAuMiwgTWF0aC5yYW5kb20oKSAqIDYgKyAxKSlcbiAgICB9XG5cbiAgICBsZXQgZGF5bmlnaHQgPSBuZXcgQ3JlYXRlRGF5TmlnaHRDeWNsZShTY2VuZVRvR2V0LCBSZW5kZXJzKVxuICAgIEdlbmVyYXRlVGVycmFpbihzZWVkLCBTY2VuZVRvR2V0KVxuICAgIENvbnRyb2xIYW5kbGVySW5pdChkb2N1bWVudCwgY2hpbGQyKVxuXG4gICAgaWYoZGVidWcpe1xuICAgICAgICBjb25zdCBwbGFuZUdlb21ldHJ5ID0gbmV3IFBsYW5lR2VvbWV0cnkoMjAsIDIwLCAzMiwgMzIpO1xuICAgICAgICBwbGFuZUdlb21ldHJ5LnJvdGF0ZVgoTWF0aC5QSSAvIDIpXG4gICAgICAgIGNvbnN0IHBsYW5lTWF0ZXJpYWwgPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogMHg1NjdkNDYsIHNpZGU6IERvdWJsZVNpZGUgfSlcbiAgICAgICAgY29uc3QgcGxhbmUgPSBuZXcgTWVzaChwbGFuZUdlb21ldHJ5LCBwbGFuZU1hdGVyaWFsKTtcbiAgICAgICAgcGxhbmUucG9zaXRpb24ueSA9IC0wLjVcbiAgICAgICAgU2NlbmVUb0dldC5hZGQocGxhbmUpO1xuICAgICAgICBjb25zdCBncmlkSGVscGVyID0gbmV3IEdyaWRIZWxwZXIoNTAsIDUwKTtcbiAgICAgICAgZ3JpZEhlbHBlci5wb3NpdGlvbi55ID0gLTE7XG4gICAgICAgIFNjZW5lVG9HZXQuYWRkKGdyaWRIZWxwZXIpO1xuICAgIH1cblxuICAgIC8vIEFkZCBhbGwgdXBkYXRpbmcgcGFydHMgdG8gYSBmdW5jdGlvblxuICAgIGFkZFRvUmVuZGVyU2VxdWVuY2UoKCkgPT4ge1xuICAgICAgICBjbG91ZHMuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgICAgICAgICAgZS51cGRhdGUoKVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBhZGRUb1JlbmRlclNlcXVlbmNlKCgpID0+IENvbnRyb2xIYW5kbGVyVXBkYXRlKENhbWVyYSkpXG4gICAgYWRkVG9SZW5kZXJTZXF1ZW5jZSgoKSA9PiAgZGF5bmlnaHQudXBkYXRlKCkpXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/gameFundalmentals/MainSceneHandler.js\n");

/***/ })

})