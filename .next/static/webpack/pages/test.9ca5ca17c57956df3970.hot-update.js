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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateWelcomePageThreejs\": function() { return /* binding */ CreateWelcomePageThreejs; }\n/* harmony export */ });\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Core-API/3dModelHandlers/GLBLoader */ \"./components/Core-API/3dModelHandlers/GLBLoader.js\");\n/* harmony import */ var _Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Core-API/LightingManager */ \"./components/Core-API/LightingManager.js\");\n/* harmony import */ var _gameFundalmentals_planeHandler_MainPlane_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../gameFundalmentals/planeHandler/MainPlane.ts */ \"./components/gameFundalmentals/planeHandler/MainPlane.ts\");\n/* harmony import */ var _gameFundalmentals_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../gameFundalmentals/ProceduleTerrain */ \"./components/gameFundalmentals/ProceduleTerrain.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nvar CreateWelcomePageThreejs = /*#__PURE__*/function () {\n  function CreateWelcomePageThreejs(ref) {\n    (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, CreateWelcomePageThreejs);\n\n    (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, \"running\", true);\n\n    (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, \"x\", 0);\n\n    (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(this, \"y\", 0);\n\n    this.start(ref);\n  }\n\n  (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(CreateWelcomePageThreejs, [{\n    key: \"stop\",\n    value: function stop() {\n      this.running = false;\n    }\n  }, {\n    key: \"start\",\n    value: function () {\n      var _start = (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(ref) {\n        var _this = this;\n\n        var SceneToGet, pixelRatio, AA, Renders, Camera, onWindowResize, newPlane, pointLight, mesh, animate;\n        return _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                onWindowResize = function _onWindowResize() {\n                  Camera.aspect = window.innerWidth / window.innerHeight;\n                  Camera.updateProjectionMatrix();\n                  Renders.setSize(window.innerWidth, window.innerHeight);\n                };\n\n                SceneToGet = new three__WEBPACK_IMPORTED_MODULE_9__.Scene();\n                pixelRatio = window.devicePixelRatio;\n                AA = true;\n\n                if (pixelRatio > 1) {\n                  AA = false;\n                }\n\n                Renders = new three__WEBPACK_IMPORTED_MODULE_9__.WebGLRenderer({\n                  alpha: true,\n                  logarithmicDepthBuffer: true,\n                  antialias: AA,\n                  powerPreference: \"high-performance\"\n                });\n                Renders.setClearColor(\"#87ceeb\", 1);\n                Renders.setSize(window.innerWidth, window.innerHeight);\n                ref.appendChild(Renders.domElement);\n                Camera = new three__WEBPACK_IMPORTED_MODULE_9__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n                window.addEventListener(\"resize\", onWindowResize, false);\n                newPlane = new _gameFundalmentals_planeHandler_MainPlane_ts__WEBPACK_IMPORTED_MODULE_7__.MakePlane(SceneToGet);\n                _context2.next = 14;\n                return newPlane.loadFiles();\n\n              case 14:\n                newPlane.CreateGroupAndPos();\n                (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_6__.createAmbientLight)(SceneToGet, \"#aaaaaa\", 0.5);\n                Camera.position.set(10, 6, 10);\n                Camera.lookAt(newPlane.group.position);\n                pointLight = (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_6__.createPointLight)(\"#ffffff\", 10, [0, 100, 100], 10, SceneToGet);\n                pointLight.lookAt(newPlane.group.position);\n                SceneToGet.add(pointLight);\n                SceneToGet.add(new three__WEBPACK_IMPORTED_MODULE_9__.PointLightHelper(pointLight, 5));\n                mesh = (0,_gameFundalmentals_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_8__.generateTerrainChunk)(\"harvey\", new three__WEBPACK_IMPORTED_MODULE_9__.Vector2(0, 0), 120, 0.1, true);\n                SceneToGet.add(mesh);\n\n                animate = /*#__PURE__*/function () {\n                  var _ref = (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            if (_this !== null && _this !== void 0 && _this.running) {\n                              requestAnimationFrame(animate);\n                            }\n\n                            Renders.render(SceneToGet, Camera);\n                            Camera.position.set(10 + _this.x, 6 + _this.y, 10);\n                            Camera.lookAt(newPlane.group.position);\n\n                          case 4:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee);\n                  }));\n\n                  return function animate() {\n                    return _ref.apply(this, arguments);\n                  };\n                }();\n\n                (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_5__.stopLoading)(2);\n                animate();\n\n              case 27:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function start(_x) {\n        return _start.apply(this, arguments);\n      }\n\n      return start;\n    }()\n  }, {\n    key: \"updateMousePos\",\n    value: function updateMousePos(mousePosX, mousePosY) {\n      this.x = mousePosX;\n      this.y = mousePosY;\n    }\n  }]);\n\n  return CreateWelcomePageThreejs;\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lVUkvbWVudVBhZ2VzL3dlbGNvbWVQYWdlV29ybGQudHM/Nzg5YiJdLCJuYW1lcyI6WyJDcmVhdGVXZWxjb21lUGFnZVRocmVlanMiLCJyZWYiLCJzdGFydCIsInJ1bm5pbmciLCJvbldpbmRvd1Jlc2l6ZSIsIkNhbWVyYSIsImFzcGVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJSZW5kZXJzIiwic2V0U2l6ZSIsIlNjZW5lVG9HZXQiLCJTY2VuZSIsInBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwiQUEiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJsb2dhcml0aG1pY0RlcHRoQnVmZmVyIiwiYW50aWFsaWFzIiwicG93ZXJQcmVmZXJlbmNlIiwic2V0Q2xlYXJDb2xvciIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5ld1BsYW5lIiwiTWFrZVBsYW5lIiwibG9hZEZpbGVzIiwiQ3JlYXRlR3JvdXBBbmRQb3MiLCJjcmVhdGVBbWJpZW50TGlnaHQiLCJwb3NpdGlvbiIsInNldCIsImxvb2tBdCIsImdyb3VwIiwicG9pbnRMaWdodCIsImNyZWF0ZVBvaW50TGlnaHQiLCJhZGQiLCJQb2ludExpZ2h0SGVscGVyIiwibWVzaCIsImdlbmVyYXRlVGVycmFpbkNodW5rIiwiVmVjdG9yMiIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJ4IiwieSIsInN0b3BMb2FkaW5nIiwibW91c2VQb3NYIiwibW91c2VQb3NZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsd0JBQWI7QUFLSSxvQ0FBWUMsR0FBWixFQUFzQjtBQUFBOztBQUFBLGtL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dkM7QUFrRVE5QiwwQkFBVSxDQUFDMEIsR0FBWCxDQUFlRSxJQUFmOztBQUVJRyx1QkFwRVo7QUFBQSwyVEFvRXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVixnQ0FBSSxLQUFKLGFBQUksS0FBSixlQUFJLEtBQUksQ0FBRXpDLE9BQVYsRUFBbUI7QUFDZjBDLG1EQUFxQixDQUFDRCxPQUFELENBQXJCO0FBQ0g7O0FBQ0RqQyxtQ0FBTyxDQUFDbUMsTUFBUixDQUFlakMsVUFBZixFQUEyQlIsTUFBM0I7QUFDQUEsa0NBQU0sQ0FBQzRCLFFBQVAsQ0FBZ0JDLEdBQWhCLENBQW9CLEtBQUcsS0FBSSxDQUFDYSxDQUE1QixFQUErQixJQUFFLEtBQUksQ0FBQ0MsQ0FBdEMsRUFBeUMsRUFBekM7QUFDQTNDLGtDQUFNLENBQUM4QixNQUFQLENBQWNQLFFBQVEsQ0FBQ1EsS0FBVCxDQUFlSCxRQUE3Qjs7QUFOVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwRXRCOztBQUFBLGtDQW9FWVcsT0FwRVo7QUFBQTtBQUFBO0FBQUE7O0FBNkVRSyxnR0FBVyxDQUFDLENBQUQsQ0FBWDtBQUVBTCx1QkFBTzs7QUEvRWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBa0ZtQk0sU0FsRm5CLEVBa0ZzQ0MsU0FsRnRDLEVBa0Z5RDtBQUNqRCxXQUFLSixDQUFMLEdBQVNHLFNBQVQ7QUFDQSxXQUFLRixDQUFMLEdBQVNHLFNBQVQ7QUFDSDtBQXJGTDs7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9nYW1lVUkvbWVudVBhZ2VzL3dlbGNvbWVQYWdlV29ybGQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJzcGVjdGl2ZUNhbWVyYSwgUGxhbmVCdWZmZXJHZW9tZXRyeSwgUG9pbnRMaWdodEhlbHBlciwgU2NlbmUsIFZlY3RvcjIsIFZlY3RvcjMsIFdlYkdMUmVuZGVyZXIgfSBmcm9tIFwidGhyZWVcIlxuaW1wb3J0IHsgc3RvcExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL0dMQkxvYWRlclwiO1xuaW1wb3J0IHsgY3JlYXRlQW1iaWVudExpZ2h0LCBjcmVhdGVQb2ludExpZ2h0IH0gZnJvbSBcIi4uLy4uL0NvcmUtQVBJL0xpZ2h0aW5nTWFuYWdlclwiO1xuaW1wb3J0IHsgTWFrZVBsYW5lIH0gZnJvbSBcIi4uLy4uL2dhbWVGdW5kYWxtZW50YWxzL3BsYW5lSGFuZGxlci9NYWluUGxhbmUudHNcIjtcbmltcG9ydCB7IGdlbmVyYXRlVGVycmFpbkNodW5rIH0gZnJvbSBcIi4uLy4uL2dhbWVGdW5kYWxtZW50YWxzL1Byb2NlZHVsZVRlcnJhaW5cIjtcblxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlV2VsY29tZVBhZ2VUaHJlZWpzIHtcbiAgICBwcml2YXRlIHJ1bm5pbmcgPSB0cnVlXG4gICAgcHJpdmF0ZSB4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgeTogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogYW55KSB7XG4gICAgICAgIHRoaXMuc3RhcnQocmVmKVxuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlXG4gICAgfVxuXG4gICAgYXN5bmMgc3RhcnQocmVmOiBhbnkpIHtcbiAgICAgICAgbGV0IFNjZW5lVG9HZXQgPSBuZXcgU2NlbmUoKTtcblxuICAgICAgICBsZXQgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvXG4gICAgICAgIGxldCBBQSA9IHRydWVcbiAgICAgICAgaWYgKHBpeGVsUmF0aW8gPiAxKSB7XG4gICAgICAgICAgICBBQSA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgUmVuZGVycyA9IG5ldyBXZWJHTFJlbmRlcmVyKHtcbiAgICAgICAgICAgIGFscGhhOiB0cnVlLFxuICAgICAgICAgICAgbG9nYXJpdGhtaWNEZXB0aEJ1ZmZlcjogdHJ1ZSxcbiAgICAgICAgICAgIGFudGlhbGlhczogQUEsXG4gICAgICAgICAgICBwb3dlclByZWZlcmVuY2U6IFwiaGlnaC1wZXJmb3JtYW5jZVwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBSZW5kZXJzLnNldENsZWFyQ29sb3IoXCIjODdjZWViXCIsIDEpO1xuXG4gICAgICAgIFJlbmRlcnMuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgcmVmLmFwcGVuZENoaWxkKFJlbmRlcnMuZG9tRWxlbWVudCk7XG5cblxuICAgICAgICB2YXIgQ2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKFxuICAgICAgICAgICAgNzUsXG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgIDEwMDBcbiAgICAgICAgKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UpO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xuICAgICAgICAgICAgQ2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgQ2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgICAgICAgICAgUmVuZGVycy5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld1BsYW5lID0gbmV3IE1ha2VQbGFuZShTY2VuZVRvR2V0KVxuICAgICAgICBhd2FpdCBuZXdQbGFuZS5sb2FkRmlsZXMoKVxuICAgICAgICBuZXdQbGFuZS5DcmVhdGVHcm91cEFuZFBvcygpXG5cblxuICAgICAgICBjcmVhdGVBbWJpZW50TGlnaHQoU2NlbmVUb0dldCwgXCIjYWFhYWFhXCIsIDAuNSlcblxuICAgICAgICBDYW1lcmEucG9zaXRpb24uc2V0KDEwLCA2LCAxMCk7XG4gICAgICAgIENhbWVyYS5sb29rQXQobmV3UGxhbmUuZ3JvdXAucG9zaXRpb24pO1xuXG4gICAgICAgIGxldCBwb2ludExpZ2h0ID0gY3JlYXRlUG9pbnRMaWdodCggXCIjZmZmZmZmXCIsIDEwLCBbMCwxMDAsMTAwXSwxMCwgU2NlbmVUb0dldClcbiAgICAgICAgcG9pbnRMaWdodC5sb29rQXQobmV3UGxhbmUuZ3JvdXAucG9zaXRpb24pXG4gICAgICAgIFNjZW5lVG9HZXQuYWRkKHBvaW50TGlnaHQpXG4gICAgICAgIFNjZW5lVG9HZXQuYWRkKG5ldyBQb2ludExpZ2h0SGVscGVyKHBvaW50TGlnaHQsIDUpKVxuICAgICAgICBsZXQgbWVzaCA9IGdlbmVyYXRlVGVycmFpbkNodW5rKFwiaGFydmV5XCIsIG5ldyBWZWN0b3IyKDAsMCksIDEyMCwwLjEsIHRydWUpXG4gICAgICAgIFNjZW5lVG9HZXQuYWRkKG1lc2gpXG5cbiAgICAgICAgdmFyIGFuaW1hdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcz8ucnVubmluZykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJlbmRlcnMucmVuZGVyKFNjZW5lVG9HZXQsIENhbWVyYSk7XG4gICAgICAgICAgICBDYW1lcmEucG9zaXRpb24uc2V0KDEwK3RoaXMueCwgNit0aGlzLnksIDEwKTtcbiAgICAgICAgICAgIENhbWVyYS5sb29rQXQobmV3UGxhbmUuZ3JvdXAucG9zaXRpb24pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHN0b3BMb2FkaW5nKDIpXG5cbiAgICAgICAgYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZU1vdXNlUG9zKG1vdXNlUG9zWDogbnVtYmVyLCBtb3VzZVBvc1k6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSBtb3VzZVBvc1hcbiAgICAgICAgdGhpcy55ID0gbW91c2VQb3NZXG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/gameUI/menuPages/welcomePageWorld.ts\n");

/***/ })

});