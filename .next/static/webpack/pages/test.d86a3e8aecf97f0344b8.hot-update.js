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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateWelcomePageThreejs\": function() { return /* binding */ CreateWelcomePageThreejs; }\n/* harmony export */ });\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Core-API/3dModelHandlers/GLBLoader */ \"./components/Core-API/3dModelHandlers/GLBLoader.js\");\n/* harmony import */ var _Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Core-API/LightingManager */ \"./components/Core-API/LightingManager.js\");\n/* harmony import */ var _gameFundalmentals_planeHandler_MainPlane_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../gameFundalmentals/planeHandler/MainPlane.ts */ \"./components/gameFundalmentals/planeHandler/MainPlane.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar CreateWelcomePageThreejs = /*#__PURE__*/function () {\n  function CreateWelcomePageThreejs(ref) {\n    (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, CreateWelcomePageThreejs);\n\n    (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, \"running\", true);\n\n    (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, \"x\", 0);\n\n    (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, \"y\", 0);\n\n    this.start(ref);\n  }\n\n  (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CreateWelcomePageThreejs, [{\n    key: \"stop\",\n    value: function stop() {\n      this.running = false;\n    }\n  }, {\n    key: \"start\",\n    value: function () {\n      var _start = (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(ref) {\n        var _this = this;\n\n        var SceneToGet, pixelRatio, AA, Renders, Camera, onWindowResize, newPlane, animate;\n        return _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                onWindowResize = function _onWindowResize() {\n                  Camera.aspect = window.innerWidth / window.innerHeight;\n                  Camera.updateProjectionMatrix();\n                  Renders.setSize(window.innerWidth, window.innerHeight);\n                };\n\n                SceneToGet = new three__WEBPACK_IMPORTED_MODULE_8__.Scene();\n                pixelRatio = window.devicePixelRatio;\n                AA = true;\n\n                if (pixelRatio > 1) {\n                  AA = false;\n                }\n\n                Renders = new three__WEBPACK_IMPORTED_MODULE_8__.WebGLRenderer({\n                  alpha: true,\n                  logarithmicDepthBuffer: true,\n                  antialias: AA,\n                  powerPreference: \"high-performance\"\n                });\n                Renders.setClearColor(\"#87ceeb\", 1);\n                Renders.setSize(window.innerWidth, window.innerHeight);\n                ref.appendChild(Renders.domElement);\n                Camera = new three__WEBPACK_IMPORTED_MODULE_8__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n                window.addEventListener(\"resize\", onWindowResize, false);\n                newPlane = new _gameFundalmentals_planeHandler_MainPlane_ts__WEBPACK_IMPORTED_MODULE_7__.MakePlane(SceneToGet);\n                _context2.next = 14;\n                return newPlane.loadFiles();\n\n              case 14:\n                newPlane.CreateGroupAndPos();\n                (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_6__.createAmbientLight)(SceneToGet, \"#aaaaaa\", 0.5);\n                Camera.position.set(10, 6, 10);\n                Camera.lookAt(newPlane.group.position);\n\n                animate = /*#__PURE__*/function () {\n                  var _ref = (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            if (_this !== null && _this !== void 0 && _this.running) {\n                              requestAnimationFrame(animate);\n                            }\n\n                            Renders.render(SceneToGet, Camera);\n                            Camera.position.set(10 + _this.x, 6 + _this.y, 10);\n                            Camera.lookAt(newPlane.group.position);\n                            console.log(Camera.Position);\n\n                          case 5:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee);\n                  }));\n\n                  return function animate() {\n                    return _ref.apply(this, arguments);\n                  };\n                }();\n\n                (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_5__.stopLoading)(2);\n                animate();\n\n              case 21:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function start(_x) {\n        return _start.apply(this, arguments);\n      }\n\n      return start;\n    }()\n  }, {\n    key: \"updateMousePos\",\n    value: function updateMousePos(mousePosX, mousePosY) {\n      this.x = mousePosX;\n      this.y = mousePosY;\n    }\n  }]);\n\n  return CreateWelcomePageThreejs;\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lVUkvbWVudVBhZ2VzL3dlbGNvbWVQYWdlV29ybGQudHM/Nzg5YiJdLCJuYW1lcyI6WyJDcmVhdGVXZWxjb21lUGFnZVRocmVlanMiLCJyZWYiLCJzdGFydCIsInJ1bm5pbmciLCJvbldpbmRvd1Jlc2l6ZSIsIkNhbWVyYSIsImFzcGVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJSZW5kZXJzIiwic2V0U2l6ZSIsIlNjZW5lVG9HZXQiLCJTY2VuZSIsInBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwiQUEiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJsb2dhcml0aG1pY0RlcHRoQnVmZmVyIiwiYW50aWFsaWFzIiwicG93ZXJQcmVmZXJlbmNlIiwic2V0Q2xlYXJDb2xvciIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5ld1BsYW5lIiwiTWFrZVBsYW5lIiwibG9hZEZpbGVzIiwiQ3JlYXRlR3JvdXBBbmRQb3MiLCJjcmVhdGVBbWJpZW50TGlnaHQiLCJwb3NpdGlvbiIsInNldCIsImxvb2tBdCIsImdyb3VwIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsIngiLCJ5IiwiY29uc29sZSIsImxvZyIsIlBvc2l0aW9uIiwic3RvcExvYWRpbmciLCJtb3VzZVBvc1giLCJtb3VzZVBvc1kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSx3QkFBYjtBQUtJLG9DQUFZQyxHQUFaLEVBQXNCO0FBQUE7O0FBQUEsa0tBSkosSUFJSTs7QUFBQSw0SkFIRixDQUdFOztBQUFBLDRKQUZGLENBRUU7O0FBQ2xCLFNBQUtDLEtBQUwsQ0FBV0QsR0FBWDtBQUNI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Z0dBQVcsQ0FBQyxDQUFELENBQVg7QUFFQVIsdUJBQU87O0FBekVmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQTRFbUJTLFNBNUVuQixFQTRFc0NDLFNBNUV0QyxFQTRFeUQ7QUFDakQsV0FBS1AsQ0FBTCxHQUFTTSxTQUFUO0FBQ0EsV0FBS0wsQ0FBTCxHQUFTTSxTQUFUO0FBQ0g7QUEvRUw7O0FBQUE7QUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZ2FtZVVJL21lbnVQYWdlcy93ZWxjb21lUGFnZVdvcmxkLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVyc3BlY3RpdmVDYW1lcmEsIFNjZW5lLCBXZWJHTFJlbmRlcmVyIH0gZnJvbSBcInRocmVlXCJcbmltcG9ydCB7IHN0b3BMb2FkaW5nIH0gZnJvbSBcIi4uLy4uL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9HTEJMb2FkZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUFtYmllbnRMaWdodCB9IGZyb20gXCIuLi8uLi9Db3JlLUFQSS9MaWdodGluZ01hbmFnZXJcIjtcbmltcG9ydCB7IE1ha2VQbGFuZSB9IGZyb20gXCIuLi8uLi9nYW1lRnVuZGFsbWVudGFscy9wbGFuZUhhbmRsZXIvTWFpblBsYW5lLnRzXCI7XG5cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVdlbGNvbWVQYWdlVGhyZWVqcyB7XG4gICAgcHJpdmF0ZSBydW5uaW5nID0gdHJ1ZVxuICAgIHByaXZhdGUgeDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHk6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IGFueSkge1xuICAgICAgICB0aGlzLnN0YXJ0KHJlZilcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZVxuICAgIH1cblxuICAgIGFzeW5jIHN0YXJ0KHJlZjogYW55KSB7XG4gICAgICAgIGxldCBTY2VuZVRvR2V0ID0gbmV3IFNjZW5lKCk7XG5cbiAgICAgICAgbGV0IHBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuICAgICAgICBsZXQgQUEgPSB0cnVlXG4gICAgICAgIGlmIChwaXhlbFJhdGlvID4gMSkge1xuICAgICAgICAgICAgQUEgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IFJlbmRlcnMgPSBuZXcgV2ViR0xSZW5kZXJlcih7XG4gICAgICAgICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgICAgICAgIGxvZ2FyaXRobWljRGVwdGhCdWZmZXI6IHRydWUsXG4gICAgICAgICAgICBhbnRpYWxpYXM6IEFBLFxuICAgICAgICAgICAgcG93ZXJQcmVmZXJlbmNlOiBcImhpZ2gtcGVyZm9ybWFuY2VcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgUmVuZGVycy5zZXRDbGVhckNvbG9yKFwiIzg3Y2VlYlwiLCAxKTtcblxuICAgICAgICBSZW5kZXJzLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIHJlZi5hcHBlbmRDaGlsZChSZW5kZXJzLmRvbUVsZW1lbnQpO1xuXG5cbiAgICAgICAgdmFyIENhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgICAgICAgIDc1LFxuICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAwLjEsXG4gICAgICAgICAgICAxMDAwXG4gICAgICAgICk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25XaW5kb3dSZXNpemUsIGZhbHNlKTtcblxuICAgICAgICBmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgICAgIENhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIENhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICAgICAgICAgIFJlbmRlcnMuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZXdQbGFuZSA9IG5ldyBNYWtlUGxhbmUoU2NlbmVUb0dldClcbiAgICAgICAgYXdhaXQgbmV3UGxhbmUubG9hZEZpbGVzKClcbiAgICAgICAgbmV3UGxhbmUuQ3JlYXRlR3JvdXBBbmRQb3MoKVxuXG5cbiAgICAgICAgY3JlYXRlQW1iaWVudExpZ2h0KFNjZW5lVG9HZXQsIFwiI2FhYWFhYVwiLCAwLjUpXG5cbiAgICAgICAgQ2FtZXJhLnBvc2l0aW9uLnNldCgxMCwgNiwgMTApO1xuICAgICAgICBDYW1lcmEubG9va0F0KG5ld1BsYW5lLmdyb3VwLnBvc2l0aW9uKTtcblxuICAgICAgICB2YXIgYW5pbWF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzPy5ydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVuZGVycy5yZW5kZXIoU2NlbmVUb0dldCwgQ2FtZXJhKTtcbiAgICAgICAgICAgIENhbWVyYS5wb3NpdGlvbi5zZXQoMTArdGhpcy54LCA2K3RoaXMueSwgMTApO1xuICAgICAgICAgICAgQ2FtZXJhLmxvb2tBdChuZXdQbGFuZS5ncm91cC5wb3NpdGlvbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhDYW1lcmEuUG9zaXRpb24pXG4gICAgICAgIH07XG5cbiAgICAgICAgc3RvcExvYWRpbmcoMilcblxuICAgICAgICBhbmltYXRlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlTW91c2VQb3MobW91c2VQb3NYOiBudW1iZXIsIG1vdXNlUG9zWTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IG1vdXNlUG9zWFxuICAgICAgICB0aGlzLnkgPSBtb3VzZVBvc1lcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/gameUI/menuPages/welcomePageWorld.ts\n");

/***/ })

});