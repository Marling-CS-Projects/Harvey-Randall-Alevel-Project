/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/gameUI/menuPages/welcomePageWorld.ts":
/*!*********************************************************!*\
  !*** ./components/gameUI/menuPages/welcomePageWorld.ts ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateWelcomePageThreejs\": function() { return /* binding */ CreateWelcomePageThreejs; }\n/* harmony export */ });\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Core-API/3dModelHandlers/GLBLoader */ \"./components/Core-API/3dModelHandlers/GLBLoader.js\");\n/* harmony import */ var _Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Core-API/LightingManager */ \"./components/Core-API/LightingManager.js\");\n/* harmony import */ var _gameFundalmentals_planeHandler_MainPlane_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../gameFundalmentals/planeHandler/MainPlane.ts */ \"./components/gameFundalmentals/planeHandler/MainPlane.ts\");\n/* harmony import */ var _gameFundalmentals_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../gameFundalmentals/ProceduleTerrain */ \"./components/gameFundalmentals/ProceduleTerrain.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nvar CreateWelcomePageThreejs = /*#__PURE__*/function () {\n  function CreateWelcomePageThreejs(ref) {\n    (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, CreateWelcomePageThreejs);\n\n    (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, \"running\", true);\n\n    (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, \"x\", 0);\n\n    (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, \"y\", 0);\n\n    this.start(ref);\n  }\n\n  (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CreateWelcomePageThreejs, [{\n    key: \"stop\",\n    value: function stop() {\n      this.running = false;\n    }\n  }, {\n    key: \"start\",\n    value: function () {\n      var _start = (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(ref) {\n        var _this = this;\n\n        var SceneToGet, pixelRatio, AA, Renders, Camera, onWindowResize, newPlane, mesh, animate;\n        return _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                onWindowResize = function _onWindowResize() {\n                  Camera.aspect = window.innerWidth / window.innerHeight;\n                  Camera.updateProjectionMatrix();\n                  Renders.setSize(window.innerWidth, window.innerHeight);\n                };\n\n                SceneToGet = new three__WEBPACK_IMPORTED_MODULE_9__.Scene();\n                pixelRatio = window.devicePixelRatio;\n                AA = true;\n\n                if (pixelRatio > 1) {\n                  AA = false;\n                }\n\n                Renders = new three__WEBPACK_IMPORTED_MODULE_9__.WebGLRenderer({\n                  alpha: true,\n                  logarithmicDepthBuffer: true,\n                  antialias: AA,\n                  powerPreference: \"high-performance\"\n                });\n                Renders.setClearColor(\"#87ceeb\", 1);\n                Renders.setSize(window.innerWidth, window.innerHeight);\n                ref.appendChild(Renders.domElement);\n                Camera = new three__WEBPACK_IMPORTED_MODULE_9__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n                window.addEventListener(\"resize\", onWindowResize, false);\n                newPlane = new _gameFundalmentals_planeHandler_MainPlane_ts__WEBPACK_IMPORTED_MODULE_7__.MakePlane(SceneToGet);\n                _context2.next = 14;\n                return newPlane.loadFiles();\n\n              case 14:\n                newPlane.CreateGroupAndPos();\n                (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_6__.createAmbientLight)(SceneToGet, \"#aaaaaa\", 0.5);\n                Camera.position.set(10, 6, 10);\n                Camera.lookAt(newPlane.group.position);\n                mesh = (0,_gameFundalmentals_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_8__.generateTerrainChunk)(5, new three__WEBPACK_IMPORTED_MODULE_9__.Vector2(0, 0), 4, 0.1);\n                SceneToGet.add(mesh);\n\n                animate = /*#__PURE__*/function () {\n                  var _ref = (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            if (_this !== null && _this !== void 0 && _this.running) {\n                              requestAnimationFrame(animate);\n                            }\n\n                            Renders.render(SceneToGet, Camera);\n                            Camera.position.set(10 + _this.x, 6 + _this.y, 10);\n                            Camera.lookAt(newPlane.group.position);\n                            console.log(Camera.position);\n\n                          case 5:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee);\n                  }));\n\n                  return function animate() {\n                    return _ref.apply(this, arguments);\n                  };\n                }();\n\n                (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_5__.stopLoading)(2);\n                animate();\n\n              case 23:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function start(_x) {\n        return _start.apply(this, arguments);\n      }\n\n      return start;\n    }()\n  }, {\n    key: \"updateMousePos\",\n    value: function updateMousePos(mousePosX, mousePosY) {\n      this.x = mousePosX;\n      this.y = mousePosY;\n    }\n  }]);\n\n  return CreateWelcomePageThreejs;\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lVUkvbWVudVBhZ2VzL3dlbGNvbWVQYWdlV29ybGQudHM/Nzg5YiJdLCJuYW1lcyI6WyJDcmVhdGVXZWxjb21lUGFnZVRocmVlanMiLCJyZWYiLCJzdGFydCIsInJ1bm5pbmciLCJvbldpbmRvd1Jlc2l6ZSIsIkNhbWVyYSIsImFzcGVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJSZW5kZXJzIiwic2V0U2l6ZSIsIlNjZW5lVG9HZXQiLCJTY2VuZSIsInBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwiQUEiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJsb2dhcml0aG1pY0RlcHRoQnVmZmVyIiwiYW50aWFsaWFzIiwicG93ZXJQcmVmZXJlbmNlIiwic2V0Q2xlYXJDb2xvciIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5ld1BsYW5lIiwiTWFrZVBsYW5lIiwibG9hZEZpbGVzIiwiQ3JlYXRlR3JvdXBBbmRQb3MiLCJjcmVhdGVBbWJpZW50TGlnaHQiLCJwb3NpdGlvbiIsInNldCIsImxvb2tBdCIsImdyb3VwIiwibWVzaCIsImdlbmVyYXRlVGVycmFpbkNodW5rIiwiVmVjdG9yMiIsImFkZCIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJ4IiwieSIsImNvbnNvbGUiLCJsb2ciLCJzdG9wTG9hZGluZyIsIm1vdXNlUG9zWCIsIm1vdXNlUG9zWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLHdCQUFiO0FBS0ksb0NBQVlDLEdBQVosRUFBc0I7QUFBQTs7QUFBQSxrS0FKSixJQUlJOztBQUFBLDRKQUhGLENBR0U7O0FBQUEsNEpB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QyxrQ0FBTSxDQUFDOEIsTUFBUCxDQUFjUCxRQUFRLENBQUNRLEtBQVQsQ0FBZUgsUUFBN0I7QUFDQWEsbUNBQU8sQ0FBQ0MsR0FBUixDQUFZMUMsTUFBTSxDQUFDNEIsUUFBbkI7O0FBUFU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEV0Qjs7QUFBQSxrQ0FnRVlRLE9BaEVaO0FBQUE7QUFBQTtBQUFBOztBQTBFUU8sZ0dBQVcsQ0FBQyxDQUFELENBQVg7QUFFQVAsdUJBQU87O0FBNUVmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQStFbUJRLFNBL0VuQixFQStFc0NDLFNBL0V0QyxFQStFeUQ7QUFDakQsV0FBS04sQ0FBTCxHQUFTSyxTQUFUO0FBQ0EsV0FBS0osQ0FBTCxHQUFTSyxTQUFUO0FBQ0g7QUFsRkw7O0FBQUE7QUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZ2FtZVVJL21lbnVQYWdlcy93ZWxjb21lUGFnZVdvcmxkLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVyc3BlY3RpdmVDYW1lcmEsIFBsYW5lQnVmZmVyR2VvbWV0cnksIFNjZW5lLCBWZWN0b3IyLCBXZWJHTFJlbmRlcmVyIH0gZnJvbSBcInRocmVlXCJcbmltcG9ydCB7IHN0b3BMb2FkaW5nIH0gZnJvbSBcIi4uLy4uL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9HTEJMb2FkZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUFtYmllbnRMaWdodCB9IGZyb20gXCIuLi8uLi9Db3JlLUFQSS9MaWdodGluZ01hbmFnZXJcIjtcbmltcG9ydCB7IE1ha2VQbGFuZSB9IGZyb20gXCIuLi8uLi9nYW1lRnVuZGFsbWVudGFscy9wbGFuZUhhbmRsZXIvTWFpblBsYW5lLnRzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVRlcnJhaW5DaHVuayB9IGZyb20gXCIuLi8uLi9nYW1lRnVuZGFsbWVudGFscy9Qcm9jZWR1bGVUZXJyYWluXCI7XG5cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVdlbGNvbWVQYWdlVGhyZWVqcyB7XG4gICAgcHJpdmF0ZSBydW5uaW5nID0gdHJ1ZVxuICAgIHByaXZhdGUgeDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHk6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IGFueSkge1xuICAgICAgICB0aGlzLnN0YXJ0KHJlZilcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZVxuICAgIH1cblxuICAgIGFzeW5jIHN0YXJ0KHJlZjogYW55KSB7XG4gICAgICAgIGxldCBTY2VuZVRvR2V0ID0gbmV3IFNjZW5lKCk7XG5cbiAgICAgICAgbGV0IHBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuICAgICAgICBsZXQgQUEgPSB0cnVlXG4gICAgICAgIGlmIChwaXhlbFJhdGlvID4gMSkge1xuICAgICAgICAgICAgQUEgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IFJlbmRlcnMgPSBuZXcgV2ViR0xSZW5kZXJlcih7XG4gICAgICAgICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgICAgICAgIGxvZ2FyaXRobWljRGVwdGhCdWZmZXI6IHRydWUsXG4gICAgICAgICAgICBhbnRpYWxpYXM6IEFBLFxuICAgICAgICAgICAgcG93ZXJQcmVmZXJlbmNlOiBcImhpZ2gtcGVyZm9ybWFuY2VcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgUmVuZGVycy5zZXRDbGVhckNvbG9yKFwiIzg3Y2VlYlwiLCAxKTtcblxuICAgICAgICBSZW5kZXJzLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIHJlZi5hcHBlbmRDaGlsZChSZW5kZXJzLmRvbUVsZW1lbnQpO1xuXG5cbiAgICAgICAgdmFyIENhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgICAgICAgIDc1LFxuICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAwLjEsXG4gICAgICAgICAgICAxMDAwXG4gICAgICAgICk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25XaW5kb3dSZXNpemUsIGZhbHNlKTtcblxuICAgICAgICBmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgICAgIENhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIENhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICAgICAgICAgIFJlbmRlcnMuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZXdQbGFuZSA9IG5ldyBNYWtlUGxhbmUoU2NlbmVUb0dldClcbiAgICAgICAgYXdhaXQgbmV3UGxhbmUubG9hZEZpbGVzKClcbiAgICAgICAgbmV3UGxhbmUuQ3JlYXRlR3JvdXBBbmRQb3MoKVxuXG5cbiAgICAgICAgY3JlYXRlQW1iaWVudExpZ2h0KFNjZW5lVG9HZXQsIFwiI2FhYWFhYVwiLCAwLjUpXG5cbiAgICAgICAgQ2FtZXJhLnBvc2l0aW9uLnNldCgxMCwgNiwgMTApO1xuICAgICAgICBDYW1lcmEubG9va0F0KG5ld1BsYW5lLmdyb3VwLnBvc2l0aW9uKTtcblxuICAgICAgICBsZXQgbWVzaCA9IGdlbmVyYXRlVGVycmFpbkNodW5rKDUsIG5ldyBWZWN0b3IyKDAsMCksIDQsMC4xKVxuICAgICAgICBTY2VuZVRvR2V0LmFkZChtZXNoKVxuXG4gICAgICAgIHZhciBhbmltYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXM/LnJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZW5kZXJzLnJlbmRlcihTY2VuZVRvR2V0LCBDYW1lcmEpO1xuICAgICAgICAgICAgQ2FtZXJhLnBvc2l0aW9uLnNldCgxMCt0aGlzLngsIDYrdGhpcy55LCAxMCk7XG4gICAgICAgICAgICBDYW1lcmEubG9va0F0KG5ld1BsYW5lLmdyb3VwLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKENhbWVyYS5wb3NpdGlvbilcbiAgICAgICAgfTtcblxuICAgICAgICBzdG9wTG9hZGluZygyKVxuXG4gICAgICAgIGFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVNb3VzZVBvcyhtb3VzZVBvc1g6IG51bWJlciwgbW91c2VQb3NZOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0gbW91c2VQb3NYXG4gICAgICAgIHRoaXMueSA9IG1vdXNlUG9zWVxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/gameUI/menuPages/welcomePageWorld.ts\n");

/***/ })

});