/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/Scenes/MainSceneHandler.js":
/*!***********************************************!*\
  !*** ./components/Scenes/MainSceneHandler.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateMainScene\": function() { return /* binding */ generateMainScene; }\n/* harmony export */ });\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core-API/RenderingHandler */ \"./components/Core-API/RenderingHandler.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _gameFundalmentals_clouds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gameFundalmentals/clouds */ \"./components/gameFundalmentals/clouds.js\");\n/* harmony import */ var _gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gameFundalmentals/controls */ \"./components/gameFundalmentals/controls.js\");\n/* harmony import */ var _gameFundalmentals_DayNightCycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gameFundalmentals/DayNightCycle */ \"./components/gameFundalmentals/DayNightCycle.js\");\n/* harmony import */ var _gameFundalmentals_planeHandler_MainPlane__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gameFundalmentals/planeHandler/MainPlane */ \"./components/gameFundalmentals/planeHandler/MainPlane.js\");\n/* harmony import */ var _gameFundalmentals_TerrainManagement_terrainChunkriser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gameFundalmentals/TerrainManagement/terrainChunkriser */ \"./components/gameFundalmentals/TerrainManagement/terrainChunkriser.js\");\n/* harmony import */ var _Core_API_WorkerSetup_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Core-API/WorkerSetup.ts */ \"./components/Core-API/WorkerSetup.ts\");\n/* harmony import */ var _Core_API_gemotryManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Core-API/gemotryManager */ \"./components/Core-API/gemotryManager.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n// Written By Harvey Randall \\\\\n// Render Handler\n //Functional Dependencies\n\n\n\n\n\n\n\n\n\nvar debug = true;\nfunction generateMainScene(_x, _x2, _x3, _x4, _x5, _x6) {\n  return _generateMainScene.apply(this, arguments);\n}\n\nfunction _generateMainScene() {\n  _generateMainScene = (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(SceneToGet, Renders, document, seed, child2, Camera) {\n    var collisionHandler, clouds, i, daynight, planeGeometry, planeMaterial, plane, gridHelper, newPlane;\n    return _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            collisionHandler = new Worker('webWorkers/Collision.js');\n\n            collisionHandler.onmessage = function (event) {\n              console.log(event);\n            };\n\n            collisionHandler.onmessageerror = function (event) {\n              console.log(event);\n            };\n\n            collisionHandler.onerror = function (error) {\n              console.log(error);\n            };\n\n            collisionHandler.postMessage({\n              Command: \"Start\",\n              origin: window.location.origin\n            });\n            setTimeout(function () {\n              collisionHandler.postMessage({\n                Command: \"AddShape\",\n                data: new three__WEBPACK_IMPORTED_MODULE_10__.PlaneBufferGeometry(2, 2, 2, 2)\n              });\n            }, 1000);\n            clouds = [];\n\n            for (i = 0; i < 40; i++) {\n              clouds.push(new _gameFundalmentals_clouds__WEBPACK_IMPORTED_MODULE_3__.GenerateClouds(new three__WEBPACK_IMPORTED_MODULE_10__.Vector3(Math.random() * 300 - 300, 80 + Math.random() * 20, Math.random() * 600 - 400), SceneToGet, Math.random() * 0.2, Math.random() * 6 + 1));\n            }\n\n            daynight = new _gameFundalmentals_DayNightCycle__WEBPACK_IMPORTED_MODULE_5__.CreateDayNightCycle(SceneToGet, Renders); //generateTerrain(seed, SceneToGet);\n\n            (0,_gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_4__.controlHandlerInit)(document, child2);\n\n            if (debug) {\n              planeGeometry = new three__WEBPACK_IMPORTED_MODULE_10__.PlaneGeometry(20, 20, 32, 32);\n              planeGeometry.rotateX(Math.PI / 2);\n              planeMaterial = new three__WEBPACK_IMPORTED_MODULE_10__.MeshStandardMaterial({\n                color: \"#567d46\",\n                side: three__WEBPACK_IMPORTED_MODULE_10__.DoubleSide\n              });\n              plane = new three__WEBPACK_IMPORTED_MODULE_10__.Mesh(planeGeometry, planeMaterial);\n              plane.position.y = -0.5;\n              SceneToGet.add(plane);\n              gridHelper = new three__WEBPACK_IMPORTED_MODULE_10__.GridHelper(50, 50);\n              gridHelper.position.y = -1;\n              SceneToGet.add(gridHelper);\n            } // Add all updating parts to a function\n\n\n            (0,_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_2__.addToRenderSequence)(\"Main\", function () {\n              clouds.forEach(function (e, i) {\n                e.update();\n              });\n            }, true);\n            newPlane = new _gameFundalmentals_planeHandler_MainPlane__WEBPACK_IMPORTED_MODULE_6__.MakePlane(SceneToGet);\n            _context.next = 15;\n            return newPlane.loadFiles();\n\n          case 15:\n            newPlane.CreateGroupAndPos();\n            newPlane.attachCameraAndControl(Camera);\n            (0,_gameFundalmentals_TerrainManagement_terrainChunkriser__WEBPACK_IMPORTED_MODULE_7__.generateTerrainAroundPlayer)(seed, Camera, SceneToGet); //addToRenderSequence(\"Main\", () => controlHandlerUpdate(Camera));\n\n            (0,_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_2__.addToRenderSequence)(\"Main\", function () {\n              return daynight.update(Camera);\n            }); //console.log(GenerateWebWorker(`/webWorkers/basicTest.js`, [], (e) => {console.log(e)} ))\n\n          case 19:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _generateMainScene.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TY2VuZXMvTWFpblNjZW5lSGFuZGxlci5qcz84ZWM4Il0sIm5hbWVzIjpbImRlYnVnIiwiZ2VuZXJhdGVNYWluU2NlbmUiLCJTY2VuZVRvR2V0IiwiUmVuZGVycyIsImRvY3VtZW50Iiwic2VlZCIsImNoaWxkMiIsIkNhbWVyYSIsImNvbGxpc2lvbkhhbmRsZXIiLCJXb3JrZXIiLCJvbm1lc3NhZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJvbm1lc3NhZ2VlcnJvciIsIm9uZXJyb3IiLCJlcnJvciIsInBvc3RNZXNzYWdlIiwiQ29tbWFuZCIsIm9yaWdpbiIsIndpbmRvdyIsImxvY2F0aW9uIiwic2V0VGltZW91dCIsImRhdGEiLCJQbGFuZUJ1ZmZlckdlb21ldHJ5IiwiY2xvdWRzIiwiaSIsInB1c2giLCJHZW5lcmF0ZUNsb3VkcyIsIlZlY3RvcjMiLCJNYXRoIiwicmFuZG9tIiwiZGF5bmlnaHQiLCJDcmVhdGVEYXlOaWdodEN5Y2xlIiwiY29udHJvbEhhbmRsZXJJbml0IiwicGxhbmVHZW9tZXRyeSIsIlBsYW5lR2VvbWV0cnkiLCJyb3RhdGVYIiwiUEkiLCJwbGFuZU1hdGVyaWFsIiwiTWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJjb2xvciIsInNpZGUiLCJEb3VibGVTaWRlIiwicGxhbmUiLCJNZXNoIiwicG9zaXRpb24iLCJ5IiwiYWRkIiwiZ3JpZEhlbHBlciIsIkdyaWRIZWxwZXIiLCJhZGRUb1JlbmRlclNlcXVlbmNlIiwiZm9yRWFjaCIsImUiLCJ1cGRhdGUiLCJuZXdQbGFuZSIsIk1ha2VQbGFuZSIsImxvYWRGaWxlcyIsIkNyZWF0ZUdyb3VwQW5kUG9zIiwiYXR0YWNoQ2FtZXJhQW5kQ29udHJvbCIsImdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7Q0FHQTs7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FB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QyxDQUFwQixHQUF3QixDQUFDLENBQXpCO0FBQ0E3Qyx3QkFBVSxDQUFDOEMsR0FBWCxDQUFlQyxVQUFmO0FBQ0gsYUEzREUsQ0E4REg7OztBQUNBRSwyRkFBbUIsQ0FDZixNQURlLEVBRWYsWUFBTTtBQUNGMUIsb0JBQU0sQ0FBQzJCLE9BQVAsQ0FBZSxVQUFDQyxDQUFELEVBQUkzQixDQUFKLEVBQVU7QUFDckIyQixpQkFBQyxDQUFDQyxNQUFGO0FBQ0gsZUFGRDtBQUdILGFBTmMsRUFPZixJQVBlLENBQW5CO0FBU0lDLG9CQXhFRCxHQXdFWSxJQUFJQyxnRkFBSixDQUFjdEQsVUFBZCxDQXhFWjtBQUFBO0FBQUEsbUJBeUVHcUQsUUFBUSxDQUFDRSxTQUFULEVBekVIOztBQUFBO0FBMEVIRixvQkFBUSxDQUFDRyxpQkFBVDtBQUNBSCxvQkFBUSxDQUFDSSxzQkFBVCxDQUFnQ3BELE1BQWhDO0FBRUFxRCwrSEFBMkIsQ0FBQ3ZELElBQUQsRUFBT0UsTUFBUCxFQUFlTCxVQUFmLENBQTNCLENBN0VHLENBK0VIOztBQUNBaUQsMkZBQW1CLENBQUMsTUFBRCxFQUFTO0FBQUEscUJBQU1uQixRQUFRLENBQUNzQixNQUFULENBQWdCL0MsTUFBaEIsQ0FBTjtBQUFBLGFBQVQsQ0FBbkIsQ0FoRkcsQ0FrRkg7O0FBbEZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoiLi9jb21wb25lbnRzL1NjZW5lcy9NYWluU2NlbmVIYW5kbGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXG5cbi8vIFJlbmRlciBIYW5kbGVyXG5pbXBvcnQgeyBhZGRUb1JlbmRlclNlcXVlbmNlIH0gZnJvbSBcIi4uL0NvcmUtQVBJL1JlbmRlcmluZ0hhbmRsZXJcIjtcblxuLy9GdW5jdGlvbmFsIERlcGVuZGVuY2llc1xuaW1wb3J0IHtcbiAgICBCdWZmZXJHZW9tZXRyeSxcbiAgICBEb3VibGVTaWRlLFxuICAgIEdyaWRIZWxwZXIsXG4gICAgTWVzaCxcbiAgICBNZXNoU3RhbmRhcmRNYXRlcmlhbCxcbiAgICBQbGFuZUJ1ZmZlckdlb21ldHJ5LFxuICAgIFBsYW5lR2VvbWV0cnksXG4gICAgVmVjdG9yMyxcbn0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBHZW5lcmF0ZUNsb3VkcyB9IGZyb20gXCIuLi9nYW1lRnVuZGFsbWVudGFscy9jbG91ZHNcIjtcbmltcG9ydCB7IGNvbnRyb2xIYW5kbGVySW5pdCwgY29udHJvbEhhbmRsZXJVcGRhdGUgfSBmcm9tIFwiLi4vZ2FtZUZ1bmRhbG1lbnRhbHMvY29udHJvbHNcIjtcbmltcG9ydCB7IENyZWF0ZURheU5pZ2h0Q3ljbGUgfSBmcm9tIFwiLi4vZ2FtZUZ1bmRhbG1lbnRhbHMvRGF5TmlnaHRDeWNsZVwiO1xuaW1wb3J0IHsgTWFrZVBsYW5lIH0gZnJvbSBcIi4uL2dhbWVGdW5kYWxtZW50YWxzL3BsYW5lSGFuZGxlci9NYWluUGxhbmVcIjtcbmltcG9ydCB7IGdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllciB9IGZyb20gXCIuLi9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC90ZXJyYWluQ2h1bmtyaXNlclwiO1xuaW1wb3J0IHsgR2VuZXJhdGVXZWJXb3JrZXIgfSBmcm9tIFwiLi4vQ29yZS1BUEkvV29ya2VyU2V0dXAudHNcIjtcbmltcG9ydCB7IGRlYnVnQ3ViZSB9IGZyb20gXCIuLi9Db3JlLUFQSS9nZW1vdHJ5TWFuYWdlclwiO1xuXG5sZXQgZGVidWcgPSB0cnVlO1xuIFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVNYWluU2NlbmUoXG4gICAgU2NlbmVUb0dldCxcbiAgICBSZW5kZXJzLFxuICAgIGRvY3VtZW50LFxuICAgIHNlZWQsXG4gICAgY2hpbGQyLFxuICAgIENhbWVyYVxuKSB7XG5cblxuICAgIGxldCBjb2xsaXNpb25IYW5kbGVyID0gbmV3IFdvcmtlcignd2ViV29ya2Vycy9Db2xsaXNpb24uanMnKTtcbiAgICBjb2xsaXNpb25IYW5kbGVyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgfVxuICAgIGNvbGxpc2lvbkhhbmRsZXIub25tZXNzYWdlZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIH1cbiAgICBjb2xsaXNpb25IYW5kbGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgICBjb2xsaXNpb25IYW5kbGVyLnBvc3RNZXNzYWdlKHtDb21tYW5kOlwiU3RhcnRcIiwgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24ub3JpZ2lufSlcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb2xsaXNpb25IYW5kbGVyLnBvc3RNZXNzYWdlKHtDb21tYW5kOlwiQWRkU2hhcGVcIiwgZGF0YTogbmV3IFBsYW5lQnVmZmVyR2VvbWV0cnkoMiwgMiwgMiwgMil9KVxuICAgIH0sMTAwMCk7XG5cbiAgICBsZXQgY2xvdWRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XG4gICAgICAgIGNsb3Vkcy5wdXNoKFxuICAgICAgICAgICAgbmV3IEdlbmVyYXRlQ2xvdWRzKFxuICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IzKFxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMzAwIC0gMzAwLFxuICAgICAgICAgICAgICAgICAgICA4MCArIE1hdGgucmFuZG9tKCkgKiAyMCxcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDYwMCAtIDQwMFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgU2NlbmVUb0dldCxcbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMC4yLFxuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiA2ICsgMVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGxldCBkYXluaWdodCA9IG5ldyBDcmVhdGVEYXlOaWdodEN5Y2xlKFNjZW5lVG9HZXQsIFJlbmRlcnMpO1xuICAgIC8vZ2VuZXJhdGVUZXJyYWluKHNlZWQsIFNjZW5lVG9HZXQpO1xuICAgIGNvbnRyb2xIYW5kbGVySW5pdChkb2N1bWVudCwgY2hpbGQyKTtcblxuICAgIGlmIChkZWJ1Zykge1xuICAgICAgICBjb25zdCBwbGFuZUdlb21ldHJ5ID0gbmV3IFBsYW5lR2VvbWV0cnkoMjAsIDIwLCAzMiwgMzIpO1xuICAgICAgICBwbGFuZUdlb21ldHJ5LnJvdGF0ZVgoTWF0aC5QSSAvIDIpO1xuICAgICAgICBjb25zdCBwbGFuZU1hdGVyaWFsID0gbmV3IE1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiM1NjdkNDZcIixcbiAgICAgICAgICAgIHNpZGU6IERvdWJsZVNpZGUsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwbGFuZSA9IG5ldyBNZXNoKHBsYW5lR2VvbWV0cnksIHBsYW5lTWF0ZXJpYWwpO1xuICAgICAgICBwbGFuZS5wb3NpdGlvbi55ID0gLTAuNTtcbiAgICAgICAgU2NlbmVUb0dldC5hZGQocGxhbmUpO1xuICAgICAgICBjb25zdCBncmlkSGVscGVyID0gbmV3IEdyaWRIZWxwZXIoNTAsIDUwKTtcbiAgICAgICAgZ3JpZEhlbHBlci5wb3NpdGlvbi55ID0gLTE7XG4gICAgICAgIFNjZW5lVG9HZXQuYWRkKGdyaWRIZWxwZXIpO1xuICAgIH1cblxuXG4gICAgLy8gQWRkIGFsbCB1cGRhdGluZyBwYXJ0cyB0byBhIGZ1bmN0aW9uXG4gICAgYWRkVG9SZW5kZXJTZXF1ZW5jZShcbiAgICAgICAgXCJNYWluXCIsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGNsb3Vkcy5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgZS51cGRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB0cnVlXG4gICAgKTtcbiAgICBsZXQgbmV3UGxhbmUgPSBuZXcgTWFrZVBsYW5lKFNjZW5lVG9HZXQpXG4gICAgYXdhaXQgbmV3UGxhbmUubG9hZEZpbGVzKClcbiAgICBuZXdQbGFuZS5DcmVhdGVHcm91cEFuZFBvcygpXG4gICAgbmV3UGxhbmUuYXR0YWNoQ2FtZXJhQW5kQ29udHJvbChDYW1lcmEpXG5cbiAgICBnZW5lcmF0ZVRlcnJhaW5Bcm91bmRQbGF5ZXIoc2VlZCwgQ2FtZXJhLCBTY2VuZVRvR2V0KVxuXG4gICAgLy9hZGRUb1JlbmRlclNlcXVlbmNlKFwiTWFpblwiLCAoKSA9PiBjb250cm9sSGFuZGxlclVwZGF0ZShDYW1lcmEpKTtcbiAgICBhZGRUb1JlbmRlclNlcXVlbmNlKFwiTWFpblwiLCAoKSA9PiBkYXluaWdodC51cGRhdGUoQ2FtZXJhKSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKEdlbmVyYXRlV2ViV29ya2VyKGAvd2ViV29ya2Vycy9iYXNpY1Rlc3QuanNgLCBbXSwgKGUpID0+IHtjb25zb2xlLmxvZyhlKX0gKSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Scenes/MainSceneHandler.js\n");

/***/ })

});