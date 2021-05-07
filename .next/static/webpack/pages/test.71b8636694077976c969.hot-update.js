webpackHotUpdate_N_E("pages/test",{

/***/ "./components/gameFundalmentals/multiplayer/MainPlayerHandler.js":
/*!***********************************************************************!*\
  !*** ./components/gameFundalmentals/multiplayer/MainPlayerHandler.js ***!
  \***********************************************************************/
/*! exports provided: MakeNewCubePlayer, InitMainGameHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MakeNewCubePlayer\", function() { return MakeNewCubePlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InitMainGameHandler\", function() { return InitMainGameHandler; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core-API/ConnectAPI */ \"./components/Core-API/ConnectAPI.js\");\n/* harmony import */ var _nametag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nametag */ \"./components/gameFundalmentals/nametag.js\");\n// Written By Harvey Randall \\\\\n\n\n\nvar players = [];\nfunction MakeNewCubePlayer() {\n  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"rgb(0,0,0)\";\n  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"unkown\";\n  var group = new three__WEBPACK_IMPORTED_MODULE_0__[\"Group\"]();\n  var geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"BoxGeometry\"](1, 1, 1);\n  var material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshLambertMaterial\"]({\n    color: new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](color),\n    emissive: new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](color)\n  });\n  var cube = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geometry, material);\n  group.add(cube);\n  var cyclinder = new three__WEBPACK_IMPORTED_MODULE_0__[\"CylinderGeometry\"](0.3, 0.3, 0.6, 30);\n  var material2 = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshLambertMaterial\"]({\n    color: 0x000000\n  });\n  var cylinderBuild = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](cyclinder, material2);\n  cylinderBuild.rotateX(Math.PI / 2 + Math.PI);\n  cylinderBuild.position.set(0, 0, -0.6);\n  group.add(cylinderBuild);\n  Object(_nametag__WEBPACK_IMPORTED_MODULE_2__[\"GenerateLabel\"])(name, group);\n  SceneToGet.add(group);\n  group.name = name;\n  return group;\n}\n_c = MakeNewCubePlayer;\nfunction InitMainGameHandler() {\n  Object(_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_1__[\"ListenToEvent\"])(\"NewPlayer\", function (id, data) {\n    console.log(data);\n    console.log(\"New PLyer \" + id);\n    var cube = MakeCube(data.color, data.name);\n    addtoGameFeed(data === null || data === void 0 ? void 0 : data.name, \"Joined the game!\");\n    players[id] = cube;\n  });\n}\n_c2 = InitMainGameHandler;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MakeNewCubePlayer\");\n$RefreshReg$(_c2, \"InitMainGameHandler\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9tdWx0aXBsYXllci9NYWluUGxheWVySGFuZGxlci5qcz9iYzM1Il0sIm5hbWVzIjpbInBsYXllcnMiLCJNYWtlTmV3Q3ViZVBsYXllciIsImNvbG9yIiwibmFtZSIsImdyb3VwIiwiR3JvdXAiLCJnZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwibWF0ZXJpYWwiLCJNZXNoTGFtYmVydE1hdGVyaWFsIiwiQ29sb3IiLCJlbWlzc2l2ZSIsImN1YmUiLCJNZXNoIiwiYWRkIiwiY3ljbGluZGVyIiwiQ3lsaW5kZXJHZW9tZXRyeSIsIm1hdGVyaWFsMiIsImN5bGluZGVyQnVpbGQiLCJyb3RhdGVYIiwiTWF0aCIsIlBJIiwicG9zaXRpb24iLCJzZXQiLCJHZW5lcmF0ZUxhYmVsIiwiU2NlbmVUb0dldCIsIkluaXRNYWluR2FtZUhhbmRsZXIiLCJMaXN0ZW5Ub0V2ZW50IiwiaWQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIk1ha2VDdWJlIiwiYWRkdG9HYW1lRmVlZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxPQUFPLEdBQUcsRUFBZDtBQUVPLFNBQVNDLGlCQUFULEdBQWtFO0FBQUEsTUFBdkNDLEtBQXVDLHVFQUEvQixZQUErQjtBQUFBLE1BQWpCQyxJQUFpQix1RUFBVixRQUFVO0FBQ3JFLE1BQU1DLEtBQUssR0FBRyxJQUFJQywyQ0FBSixFQUFkO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLElBQUlDLGlEQUFKLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBQWpCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLElBQUlDLHlEQUFKLENBQXdCO0FBQUVQLFNBQUssRUFBRSxJQUFJUSwyQ0FBSixDQUFVUixLQUFWLENBQVQ7QUFBMkJTLFlBQVEsRUFBRSxJQUFJRCwyQ0FBSixDQUFVUixLQUFWO0FBQXJDLEdBQXhCLENBQWpCO0FBQ0EsTUFBTVUsSUFBSSxHQUFHLElBQUlDLDBDQUFKLENBQVNQLFFBQVQsRUFBbUJFLFFBQW5CLENBQWI7QUFDQUosT0FBSyxDQUFDVSxHQUFOLENBQVVGLElBQVY7QUFDQSxNQUFNRyxTQUFTLEdBQUcsSUFBSUMsc0RBQUosQ0FBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsRUFBcEMsQ0FBbEI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsSUFBSVIseURBQUosQ0FBd0I7QUFBRVAsU0FBSyxFQUFFO0FBQVQsR0FBeEIsQ0FBbEI7QUFDQSxNQUFNZ0IsYUFBYSxHQUFHLElBQUlMLDBDQUFKLENBQVNFLFNBQVQsRUFBb0JFLFNBQXBCLENBQXRCO0FBQ0FDLGVBQWEsQ0FBQ0MsT0FBZCxDQUF1QkMsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBWCxHQUFnQkQsSUFBSSxDQUFDQyxFQUEzQztBQUNBSCxlQUFhLENBQUNJLFFBQWQsQ0FBdUJDLEdBQXZCLENBQTJCLENBQTNCLEVBQThCLENBQTlCLEVBQWlDLENBQUMsR0FBbEM7QUFDQW5CLE9BQUssQ0FBQ1UsR0FBTixDQUFVSSxhQUFWO0FBRUFNLGdFQUFhLENBQUNyQixJQUFELEVBQU9DLEtBQVAsQ0FBYjtBQUNBcUIsWUFBVSxDQUFDWCxHQUFYLENBQWVWLEtBQWY7QUFDQUEsT0FBSyxDQUFDRCxJQUFOLEdBQWFBLElBQWI7QUFDQSxTQUFPQyxLQUFQO0FBQ0g7S0FqQmVILGlCO0FBbUJULFNBQVN5QixtQkFBVCxHQUErQjtBQUNsQ0MsNEVBQWEsQ0FBQyxXQUFELEVBQWMsVUFBQ0MsRUFBRCxFQUFLQyxJQUFMLEVBQWM7QUFDckNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQWVILEVBQTNCO0FBQ0EsUUFBSWhCLElBQUksR0FBR29CLFFBQVEsQ0FBQ0gsSUFBSSxDQUFDM0IsS0FBTixFQUFhMkIsSUFBSSxDQUFDMUIsSUFBbEIsQ0FBbkI7QUFDQThCLGlCQUFhLENBQUNKLElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFMUIsSUFBUCxFQUFhLGtCQUFiLENBQWI7QUFFQUgsV0FBTyxDQUFDNEIsRUFBRCxDQUFQLEdBQWNoQixJQUFkO0FBQ0gsR0FQWSxDQUFiO0FBUUg7TUFUZWMsbUIiLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL211bHRpcGxheWVyL01haW5QbGF5ZXJIYW5kbGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXG5cbmltcG9ydCB7IEJveEdlb21ldHJ5LCBDb2xvciwgQ3lsaW5kZXJHZW9tZXRyeSwgR3JvdXAsIE1lc2gsIE1lc2hMYW1iZXJ0TWF0ZXJpYWwgfSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IExpc3RlblRvRXZlbnQgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvQ29ubmVjdEFQSVwiO1xuaW1wb3J0IHsgR2VuZXJhdGVMYWJlbCB9IGZyb20gXCIuLi9uYW1ldGFnXCI7XG5sZXQgcGxheWVycyA9IFtdXG5cbmV4cG9ydCBmdW5jdGlvbiBNYWtlTmV3Q3ViZVBsYXllcihjb2xvciA9IFwicmdiKDAsMCwwKVwiLCBuYW1lID0gXCJ1bmtvd25cIikge1xuICAgIGNvbnN0IGdyb3VwID0gbmV3IEdyb3VwKCk7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgQm94R2VvbWV0cnkoMSwgMSwgMSk7XG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgTWVzaExhbWJlcnRNYXRlcmlhbCh7IGNvbG9yOiBuZXcgQ29sb3IoY29sb3IpLCBlbWlzc2l2ZTogbmV3IENvbG9yKGNvbG9yKSB9KTtcbiAgICBjb25zdCBjdWJlID0gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICBncm91cC5hZGQoY3ViZSlcbiAgICBjb25zdCBjeWNsaW5kZXIgPSBuZXcgQ3lsaW5kZXJHZW9tZXRyeSgwLjMsIDAuMywgMC42LCAzMCk7XG4gICAgY29uc3QgbWF0ZXJpYWwyID0gbmV3IE1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBjb2xvcjogMHgwMDAwMDAgfSk7XG4gICAgY29uc3QgY3lsaW5kZXJCdWlsZCA9IG5ldyBNZXNoKGN5Y2xpbmRlciwgbWF0ZXJpYWwyKTtcbiAgICBjeWxpbmRlckJ1aWxkLnJvdGF0ZVgoKE1hdGguUEkgLyAyKSArIE1hdGguUEkpXG4gICAgY3lsaW5kZXJCdWlsZC5wb3NpdGlvbi5zZXQoMCwgMCwgLTAuNilcbiAgICBncm91cC5hZGQoY3lsaW5kZXJCdWlsZClcblxuICAgIEdlbmVyYXRlTGFiZWwobmFtZSwgZ3JvdXApXG4gICAgU2NlbmVUb0dldC5hZGQoZ3JvdXApXG4gICAgZ3JvdXAubmFtZSA9IG5hbWVcbiAgICByZXR1cm4gZ3JvdXBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEluaXRNYWluR2FtZUhhbmRsZXIoKSB7XG4gICAgTGlzdGVuVG9FdmVudChcIk5ld1BsYXllclwiLCAoaWQsIGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgY29uc29sZS5sb2coXCJOZXcgUEx5ZXIgXCIgKyBpZClcbiAgICAgICAgbGV0IGN1YmUgPSBNYWtlQ3ViZShkYXRhLmNvbG9yLCBkYXRhLm5hbWUpXG4gICAgICAgIGFkZHRvR2FtZUZlZWQoZGF0YT8ubmFtZSwgXCJKb2luZWQgdGhlIGdhbWUhXCIpXG5cbiAgICAgICAgcGxheWVyc1tpZF0gPSBjdWJlXG4gICAgfSlcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/gameFundalmentals/multiplayer/MainPlayerHandler.js\n");

/***/ })

})