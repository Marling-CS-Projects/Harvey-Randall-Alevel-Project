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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateWelcomePageThreejs\": function() { return /* binding */ CreateWelcomePageThreejs; }\n/* harmony export */ });\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Core-API/3dModelHandlers/GLBLoader */ \"./components/Core-API/3dModelHandlers/GLBLoader.js\");\n/* harmony import */ var _Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Core-API/LightingManager */ \"./components/Core-API/LightingManager.js\");\n/* harmony import */ var _gameFundalmentals_planeHandler_MainPlane_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../gameFundalmentals/planeHandler/MainPlane.ts */ \"./components/gameFundalmentals/planeHandler/MainPlane.ts\");\n/* harmony import */ var _gameFundalmentals_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../gameFundalmentals/ProceduleTerrain */ \"./components/gameFundalmentals/ProceduleTerrain.js\");\n/* harmony import */ var _gameFundalmentals_staticAssets_treeBuilder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../gameFundalmentals/staticAssets/treeBuilder */ \"./components/gameFundalmentals/staticAssets/treeBuilder.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nvar CreateWelcomePageThreejs = /*#__PURE__*/function () {\n  function CreateWelcomePageThreejs(ref) {\n    (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, CreateWelcomePageThreejs);\n\n    (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, \"running\", true);\n\n    (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, \"x\", 0);\n\n    (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, \"y\", 0);\n\n    this.start(ref);\n  }\n\n  (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CreateWelcomePageThreejs, [{\n    key: \"stop\",\n    value: function stop() {\n      this.running = false;\n    }\n  }, {\n    key: \"start\",\n    value: function () {\n      var _start = (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(ref) {\n        var _this = this;\n\n        var SceneToGet, pixelRatio, AA, Renders, Camera, onWindowResize, newPlane, pointLight, mesh, animate;\n        return _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                onWindowResize = function _onWindowResize() {\n                  Camera.aspect = window.innerWidth / window.innerHeight;\n                  Camera.updateProjectionMatrix();\n                  Renders.setSize(window.innerWidth, window.innerHeight);\n                };\n\n                SceneToGet = new three__WEBPACK_IMPORTED_MODULE_10__.Scene();\n                pixelRatio = window.devicePixelRatio;\n                AA = true;\n\n                if (pixelRatio > 1) {\n                  AA = false;\n                }\n\n                Renders = new three__WEBPACK_IMPORTED_MODULE_10__.WebGLRenderer({\n                  alpha: true,\n                  logarithmicDepthBuffer: true,\n                  antialias: AA,\n                  powerPreference: \"high-performance\"\n                });\n                Renders.setClearColor(\"#87ceeb\", 1);\n                Renders.shadowMap.enabled = true;\n                Renders.setSize(window.innerWidth, window.innerHeight);\n                ref.appendChild(Renders.domElement);\n                Camera = new three__WEBPACK_IMPORTED_MODULE_10__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n                window.addEventListener(\"resize\", onWindowResize, false);\n                newPlane = new _gameFundalmentals_planeHandler_MainPlane_ts__WEBPACK_IMPORTED_MODULE_7__.MakePlane(SceneToGet);\n                _context2.next = 15;\n                return newPlane.loadFiles();\n\n              case 15:\n                newPlane.CreateGroupAndPos();\n                (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_6__.createAmbientLight)(SceneToGet, \"#aaaaaa\", 0.8);\n                Camera.position.set(10, 6, 10);\n                Camera.lookAt(newPlane.group.position);\n                pointLight = new three__WEBPACK_IMPORTED_MODULE_10__.SpotLight(\"#fdfbd3\", 2, 200);\n                pointLight.position.set(100, 100, -100);\n                pointLight.lookAt(newPlane.group.position);\n                SceneToGet.add(pointLight);\n                pointLight.castShadow = true;\n                mesh = (0,_gameFundalmentals_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_8__.generateTerrainChunk)(\"harvey\", new three__WEBPACK_IMPORTED_MODULE_10__.Vector2(0, 0), 120, 0.1, true);\n                _context2.t0 = SceneToGet;\n                _context2.next = 28;\n                return (0,_gameFundalmentals_staticAssets_treeBuilder__WEBPACK_IMPORTED_MODULE_9__.GenerateTrees)(50, SceneToGet, new three__WEBPACK_IMPORTED_MODULE_10__.Vector3(-250, 250, -250), new three__WEBPACK_IMPORTED_MODULE_10__.Vector3(250, 250, 250), \"harvey\", 120, 0.1);\n\n              case 28:\n                _context2.t1 = _context2.sent;\n\n                _context2.t0.add.call(_context2.t0, _context2.t1);\n\n                SceneToGet.add(mesh);\n\n                animate = /*#__PURE__*/function () {\n                  var _ref = (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            if (_this !== null && _this !== void 0 && _this.running) {\n                              requestAnimationFrame(animate);\n                            }\n\n                            Renders.render(SceneToGet, Camera);\n                            Camera.position.set(10 + _this.x, 6 + _this.y, 10);\n                            Camera.lookAt(newPlane.group.position);\n                            newPlane.spinProp();\n\n                          case 5:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee);\n                  }));\n\n                  return function animate() {\n                    return _ref.apply(this, arguments);\n                  };\n                }();\n\n                (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_5__.stopLoading)(2);\n                animate();\n\n              case 34:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function start(_x) {\n        return _start.apply(this, arguments);\n      }\n\n      return start;\n    }()\n  }, {\n    key: \"updateMousePos\",\n    value: function updateMousePos(mousePosX, mousePosY) {\n      this.x = mousePosX;\n      this.y = mousePosY;\n    }\n  }]);\n\n  return CreateWelcomePageThreejs;\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lVUkvbWVudVBhZ2VzL3dlbGNvbWVQYWdlV29ybGQudHM/Nzg5YiJdLCJuYW1lcyI6WyJDcmVhdGVXZWxjb21lUGFnZVRocmVlanMiLCJyZWYiLCJzdGFydCIsInJ1bm5pbmciLCJvbldpbmRvd1Jlc2l6ZSIsIkNhbWVyYSIsImFzcGVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJSZW5kZXJzIiwic2V0U2l6ZSIsIlNjZW5lVG9HZXQiLCJTY2VuZSIsInBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwiQUEiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJsb2dhcml0aG1pY0RlcHRoQnVmZmVyIiwiYW50aWFsaWFzIiwicG93ZXJQcmVmZXJlbmNlIiwic2V0Q2xlYXJDb2xvciIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdQbGFuZSIsIk1ha2VQbGFuZSIsImxvYWRGaWxlcyIsIkNyZWF0ZUdyb3VwQW5kUG9zIiwiY3JlYXRlQW1iaWVudExpZ2h0IiwicG9zaXRpb24iLCJzZXQiLCJsb29rQXQiLCJncm91cCIsInBvaW50TGlnaHQiLCJTcG90TGlnaHQiLCJhZGQiLCJjYXN0U2hhZG93IiwibWVzaCIsImdlbmVyYXRlVGVycmFpbkNodW5rIiwiVmVjdG9yMiIsIkdlbmVyYXRlVHJlZXMiLCJWZWN0b3IzIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsIngiLCJ5Iiwic3BpblByb3AiLCJzdG9wTG9hZGluZyIsIm1vdXNlUG9zWCIsIm1vdXNlUG9zWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUF2RmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBMEZtQk8sU0ExRm5CLEVBMEZzQ0MsU0ExRnRDLEVBMEZ5RDtBQUNqRCxXQUFLTCxDQUFMLEdBQVNJLFNBQVQ7QUFDQSxXQUFLSCxDQUFMLEdBQVNJLFNBQVQ7QUFDSDtBQTdGTDs7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9nYW1lVUkvbWVudVBhZ2VzL3dlbGNvbWVQYWdlV29ybGQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2csIFBlcnNwZWN0aXZlQ2FtZXJhLCBTY2VuZSwgU3BvdExpZ2h0LCBTcG90TGlnaHRIZWxwZXIsIFZlY3RvcjIsIFZlY3RvcjMsIFdlYkdMUmVuZGVyZXIgfSBmcm9tIFwidGhyZWVcIlxuaW1wb3J0IHsgc3RvcExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL0dMQkxvYWRlclwiO1xuaW1wb3J0IHsgY3JlYXRlQW1iaWVudExpZ2h0IH0gZnJvbSBcIi4uLy4uL0NvcmUtQVBJL0xpZ2h0aW5nTWFuYWdlclwiO1xuaW1wb3J0IHsgTWFrZVBsYW5lIH0gZnJvbSBcIi4uLy4uL2dhbWVGdW5kYWxtZW50YWxzL3BsYW5lSGFuZGxlci9NYWluUGxhbmUudHNcIjtcbmltcG9ydCB7IGdlbmVyYXRlVGVycmFpbkNodW5rIH0gZnJvbSBcIi4uLy4uL2dhbWVGdW5kYWxtZW50YWxzL1Byb2NlZHVsZVRlcnJhaW5cIjtcbmltcG9ydCB7IEdlbmVyYXRlVHJlZXMgfSBmcm9tIFwiLi4vLi4vZ2FtZUZ1bmRhbG1lbnRhbHMvc3RhdGljQXNzZXRzL3RyZWVCdWlsZGVyXCI7XG5cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVdlbGNvbWVQYWdlVGhyZWVqcyB7XG4gICAgcHJpdmF0ZSBydW5uaW5nID0gdHJ1ZVxuICAgIHByaXZhdGUgeDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHk6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IGFueSkge1xuICAgICAgICB0aGlzLnN0YXJ0KHJlZilcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZVxuICAgIH1cblxuICAgIGFzeW5jIHN0YXJ0KHJlZjogYW55KSB7XG4gICAgICAgIGxldCBTY2VuZVRvR2V0ID0gbmV3IFNjZW5lKCk7XG5cbiAgICAgICAgbGV0IHBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuICAgICAgICBsZXQgQUEgPSB0cnVlXG4gICAgICAgIGlmIChwaXhlbFJhdGlvID4gMSkge1xuICAgICAgICAgICAgQUEgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIGxldCBSZW5kZXJzID0gbmV3IFdlYkdMUmVuZGVyZXIoe1xuICAgICAgICAgICAgYWxwaGE6IHRydWUsXG4gICAgICAgICAgICBsb2dhcml0aG1pY0RlcHRoQnVmZmVyOiB0cnVlLFxuICAgICAgICAgICAgYW50aWFsaWFzOiBBQSxcbiAgICAgICAgICAgIHBvd2VyUHJlZmVyZW5jZTogXCJoaWdoLXBlcmZvcm1hbmNlXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFJlbmRlcnMuc2V0Q2xlYXJDb2xvcihcIiM4N2NlZWJcIiwgMSk7XG5cbiAgICAgICAgUmVuZGVycy5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWVcblxuICAgICAgICBSZW5kZXJzLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIHJlZi5hcHBlbmRDaGlsZChSZW5kZXJzLmRvbUVsZW1lbnQpO1xuXG5cbiAgICAgICAgdmFyIENhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgICAgICAgIDc1LFxuICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAwLjEsXG4gICAgICAgICAgICAxMDAwXG4gICAgICAgICk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25XaW5kb3dSZXNpemUsIGZhbHNlKTtcblxuICAgICAgICBmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgICAgIENhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIENhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICAgICAgICAgIFJlbmRlcnMuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZXdQbGFuZSA9IG5ldyBNYWtlUGxhbmUoU2NlbmVUb0dldClcbiAgICAgICAgYXdhaXQgbmV3UGxhbmUubG9hZEZpbGVzKClcbiAgICAgICAgbmV3UGxhbmUuQ3JlYXRlR3JvdXBBbmRQb3MoKVxuXG5cbiAgICAgICAgY3JlYXRlQW1iaWVudExpZ2h0KFNjZW5lVG9HZXQsIFwiI2FhYWFhYVwiLCAwLjgpXG5cbiAgICAgICAgQ2FtZXJhLnBvc2l0aW9uLnNldCgxMCwgNiwgMTApO1xuICAgICAgICBDYW1lcmEubG9va0F0KG5ld1BsYW5lLmdyb3VwLnBvc2l0aW9uKTtcblxuICAgICAgICBsZXQgcG9pbnRMaWdodCA9IG5ldyBTcG90TGlnaHQoXCIjZmRmYmQzXCIsIDIsIDIwMClcbiAgICAgICAgcG9pbnRMaWdodC5wb3NpdGlvbi5zZXQoMTAwLCAxMDAsIC0xMDApXG4gICAgICAgIHBvaW50TGlnaHQubG9va0F0KG5ld1BsYW5lLmdyb3VwLnBvc2l0aW9uKVxuICAgICAgICBTY2VuZVRvR2V0LmFkZChwb2ludExpZ2h0KVxuICAgICAgICBwb2ludExpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlXG4gICAgXG4gICAgICAgIGxldCBtZXNoID0gZ2VuZXJhdGVUZXJyYWluQ2h1bmsoXCJoYXJ2ZXlcIiwgbmV3IFZlY3RvcjIoMCwgMCksIDEyMCwgMC4xLCB0cnVlKVxuXG4gICAgICAgIFNjZW5lVG9HZXQuYWRkKGF3YWl0IEdlbmVyYXRlVHJlZXMoNTAsIFNjZW5lVG9HZXQsIG5ldyBWZWN0b3IzKC0yNTAsIDI1MCwgLTI1MCksIG5ldyBWZWN0b3IzKDI1MCwgMjUwLCAyNTApLCBcImhhcnZleVwiLCAxMjAsIDAuMSkpXG4gICAgICAgIFNjZW5lVG9HZXQuYWRkKG1lc2gpXG5cbiAgICAgICAgdmFyIGFuaW1hdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcz8ucnVubmluZykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJlbmRlcnMucmVuZGVyKFNjZW5lVG9HZXQsIENhbWVyYSk7XG4gICAgICAgICAgICBDYW1lcmEucG9zaXRpb24uc2V0KDEwICsgdGhpcy54LCA2ICsgdGhpcy55LCAxMCk7XG4gICAgICAgICAgICBDYW1lcmEubG9va0F0KG5ld1BsYW5lLmdyb3VwLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIG5ld1BsYW5lLnNwaW5Qcm9wKClcbiAgICAgICAgfTtcblxuICAgICAgICBzdG9wTG9hZGluZygyKVxuXG4gICAgICAgIGFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVNb3VzZVBvcyhtb3VzZVBvc1g6IG51bWJlciwgbW91c2VQb3NZOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0gbW91c2VQb3NYIFxuICAgICAgICB0aGlzLnkgPSBtb3VzZVBvc1kgXG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/gameUI/menuPages/welcomePageWorld.ts\n");

/***/ })

});