self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/Scenes/MainSceneHandler.js":
/*!***********************************************!*\
  !*** ./components/Scenes/MainSceneHandler.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateMainScene": function() { return /* binding */ generateMainScene; }
/* harmony export */ });
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core-API/RenderingHandler */ "./components/Core-API/RenderingHandler.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _gameFundalmentals_clouds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gameFundalmentals/clouds */ "./components/gameFundalmentals/clouds.js");
/* harmony import */ var _gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gameFundalmentals/controls */ "./components/gameFundalmentals/controls.js");
/* harmony import */ var _gameFundalmentals_DayNightCycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gameFundalmentals/DayNightCycle */ "./components/gameFundalmentals/DayNightCycle.js");
/* harmony import */ var _gameFundalmentals_planeHandler_MainPlane__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gameFundalmentals/planeHandler/MainPlane */ "./components/gameFundalmentals/planeHandler/MainPlane.js");
/* harmony import */ var _gameFundalmentals_TerrainManagement_terrainChunkriser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gameFundalmentals/TerrainManagement/terrainChunkriser */ "./components/gameFundalmentals/TerrainManagement/terrainChunkriser.js");
/* harmony import */ var _Core_API_WorkerSetup_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Core-API/WorkerSetup.ts */ "./components/Core-API/WorkerSetup.ts");
/* harmony import */ var _Core_API_gemotryManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Core-API/gemotryManager */ "./components/Core-API/gemotryManager.js");
/* harmony import */ var _Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Core-API/3dModelHandlers/GLBLoader */ "./components/Core-API/3dModelHandlers/GLBLoader.js");
/* module decorator */ module = __webpack_require__.hmd(module);


// Written By Harvey Randall \\
// Render Handler
 //Functional Dependencies










var debug = true;
function generateMainScene(_x, _x2, _x3, _x4, _x5, _x6) {
  return _generateMainScene.apply(this, arguments);
}

function _generateMainScene() {
  _generateMainScene = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(SceneToGet, Renders, document, seed, child2, Camera) {
    var collisionHandler, clouds, i, daynight, cube, planeGeometry, planeMaterial, plane, gridHelper, newPlane, airport;
    return H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            collisionHandler = new Worker('webWorkers/Collision.js');

            collisionHandler.onmessage = function (event) {
              console.log(event);
            };

            collisionHandler.onmessageerror = function (event) {
              console.log(event);
            };

            collisionHandler.onerror = function (error) {
              console.log(error);
            };

            collisionHandler.postMessage({
              Command: "Start",
              origin: window.location.origin
            });
            setTimeout(function () {
              collisionHandler.postMessage({
                Command: "AddShape",
                data: new three__WEBPACK_IMPORTED_MODULE_11__.PlaneBufferGeometry(2, 2, 2, 2)
              });
            }, 1000);
            clouds = [];

            for (i = 0; i < 40; i++) {
              clouds.push(new _gameFundalmentals_clouds__WEBPACK_IMPORTED_MODULE_3__.GenerateClouds(new three__WEBPACK_IMPORTED_MODULE_11__.Vector3(Math.random() * 300 - 300, 80 + Math.random() * 20, Math.random() * 600 - 400), SceneToGet, Math.random() * 0.2, Math.random() * 6 + 1));
            }

            daynight = new _gameFundalmentals_DayNightCycle__WEBPACK_IMPORTED_MODULE_5__.CreateDayNightCycle(SceneToGet, Renders); //generateTerrain(seed, SceneToGet);

            (0,_gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_4__.controlHandlerInit)(document, child2);
            cube = (0,_Core_API_gemotryManager__WEBPACK_IMPORTED_MODULE_9__.debugCube)();
            SceneToGet.add(cube);
            cube.position.set(183.333328247, 39.83296730211061, 16.6666660309);

            if (debug) {
              planeGeometry = new three__WEBPACK_IMPORTED_MODULE_11__.PlaneGeometry(20, 20, 32, 32);
              planeGeometry.rotateX(Math.PI / 2);
              planeMaterial = new three__WEBPACK_IMPORTED_MODULE_11__.MeshStandardMaterial({
                color: "#567d46",
                side: three__WEBPACK_IMPORTED_MODULE_11__.DoubleSide
              });
              plane = new three__WEBPACK_IMPORTED_MODULE_11__.Mesh(planeGeometry, planeMaterial);
              plane.position.y = -0.5;
              SceneToGet.add(plane);
              gridHelper = new three__WEBPACK_IMPORTED_MODULE_11__.GridHelper(50, 50);
              gridHelper.position.y = -1;
              SceneToGet.add(gridHelper);
            } // Add all updating parts to a function


            (0,_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_2__.addToRenderSequence)("Main", function () {
              clouds.forEach(function (e, i) {
                e.update();
              });
            }, true);
            newPlane = new _gameFundalmentals_planeHandler_MainPlane__WEBPACK_IMPORTED_MODULE_6__.MakePlane(SceneToGet);
            _context.next = 18;
            return newPlane.loadFiles();

          case 18:
            newPlane.CreateGroupAndPos(); //newPlane.attachCameraAndControl(Camera)

            _context.next = 21;
            return (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_10__.addGLBFile)("/Assets/Airport.glb", SceneToGet);

          case 21:
            airport = _context.sent;
            SceneToGet.add(airport.scene);
            (0,_gameFundalmentals_TerrainManagement_terrainChunkriser__WEBPACK_IMPORTED_MODULE_7__.generateTerrainAroundPlayer)(seed, Camera, SceneToGet);
            (0,_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_2__.addToRenderSequence)("Main", function () {
              return (0,_gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_4__.controlHandlerUpdate)(Camera);
            });
            (0,_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_2__.addToRenderSequence)("Main", function () {
              return daynight.update(Camera);
            }); //console.log(GenerateWebWorker(`/webWorkers/basicTest.js`, [], (e) => {console.log(e)} ))

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _generateMainScene.apply(this, arguments);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TY2VuZXMvTWFpblNjZW5lSGFuZGxlci5qcyJdLCJuYW1lcyI6WyJkZWJ1ZyIsImdlbmVyYXRlTWFpblNjZW5lIiwiU2NlbmVUb0dldCIsIlJlbmRlcnMiLCJkb2N1bWVudCIsInNlZWQiLCJjaGlsZDIiLCJDYW1lcmEiLCJjb2xsaXNpb25IYW5kbGVyIiwiV29ya2VyIiwib25tZXNzYWdlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwib25tZXNzYWdlZXJyb3IiLCJvbmVycm9yIiwiZXJyb3IiLCJwb3N0TWVzc2FnZSIsIkNvbW1hbmQiLCJvcmlnaW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNldFRpbWVvdXQiLCJkYXRhIiwiUGxhbmVCdWZmZXJHZW9tZXRyeSIsImNsb3VkcyIsImkiLCJwdXNoIiwiR2VuZXJhdGVDbG91ZHMiLCJWZWN0b3IzIiwiTWF0aCIsInJhbmRvbSIsImRheW5pZ2h0IiwiQ3JlYXRlRGF5TmlnaHRDeWNsZSIsImNvbnRyb2xIYW5kbGVySW5pdCIsImN1YmUiLCJkZWJ1Z0N1YmUiLCJhZGQiLCJwb3NpdGlvbiIsInNldCIsInBsYW5lR2VvbWV0cnkiLCJQbGFuZUdlb21ldHJ5Iiwicm90YXRlWCIsIlBJIiwicGxhbmVNYXRlcmlhbCIsIk1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiY29sb3IiLCJzaWRlIiwiRG91YmxlU2lkZSIsInBsYW5lIiwiTWVzaCIsInkiLCJncmlkSGVscGVyIiwiR3JpZEhlbHBlciIsImFkZFRvUmVuZGVyU2VxdWVuY2UiLCJmb3JFYWNoIiwiZSIsInVwZGF0ZSIsIm5ld1BsYW5lIiwiTWFrZVBsYW5lIiwibG9hZEZpbGVzIiwiQ3JlYXRlR3JvdXBBbmRQb3MiLCJhZGRHTEJGaWxlIiwiYWlycG9ydCIsInNjZW5lIiwiZ2VuZXJhdGVUZXJyYWluQXJvdW5kUGxheWVyIiwiY29udHJvbEhhbmRsZXJVcGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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QWdCbEQsTUFBaEIsQ0FBTjtBQUFBLGFBQVQsQ0FBbkIsQ0ExRkcsQ0E0Rkg7O0FBNUZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC4zODc0Y2JjNzQxMmQ0MDQxZjZiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG4vLyBSZW5kZXIgSGFuZGxlclxyXG5pbXBvcnQgeyBhZGRUb1JlbmRlclNlcXVlbmNlIH0gZnJvbSBcIi4uL0NvcmUtQVBJL1JlbmRlcmluZ0hhbmRsZXJcIjtcclxuXHJcbi8vRnVuY3Rpb25hbCBEZXBlbmRlbmNpZXNcclxuaW1wb3J0IHtcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgRG91YmxlU2lkZSxcclxuICAgIEdyaWRIZWxwZXIsXHJcbiAgICBNZXNoLFxyXG4gICAgTWVzaFN0YW5kYXJkTWF0ZXJpYWwsXHJcbiAgICBQbGFuZUJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgUGxhbmVHZW9tZXRyeSxcclxuICAgIFZlY3RvcjMsXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IEdlbmVyYXRlQ2xvdWRzIH0gZnJvbSBcIi4uL2dhbWVGdW5kYWxtZW50YWxzL2Nsb3Vkc1wiO1xyXG5pbXBvcnQgeyBjb250cm9sSGFuZGxlckluaXQsIGNvbnRyb2xIYW5kbGVyVXBkYXRlIH0gZnJvbSBcIi4uL2dhbWVGdW5kYWxtZW50YWxzL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IENyZWF0ZURheU5pZ2h0Q3ljbGUgfSBmcm9tIFwiLi4vZ2FtZUZ1bmRhbG1lbnRhbHMvRGF5TmlnaHRDeWNsZVwiO1xyXG5pbXBvcnQgeyBNYWtlUGxhbmUgfSBmcm9tIFwiLi4vZ2FtZUZ1bmRhbG1lbnRhbHMvcGxhbmVIYW5kbGVyL01haW5QbGFuZVwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVRlcnJhaW5Bcm91bmRQbGF5ZXIgfSBmcm9tIFwiLi4vZ2FtZUZ1bmRhbG1lbnRhbHMvVGVycmFpbk1hbmFnZW1lbnQvdGVycmFpbkNodW5rcmlzZXJcIjtcclxuaW1wb3J0IHsgR2VuZXJhdGVXZWJXb3JrZXIgfSBmcm9tIFwiLi4vQ29yZS1BUEkvV29ya2VyU2V0dXAudHNcIjtcclxuaW1wb3J0IHsgZGVidWdDdWJlIH0gZnJvbSBcIi4uL0NvcmUtQVBJL2dlbW90cnlNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGFkZEdMQkZpbGUgfSBmcm9tIFwiLi4vQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL0dMQkxvYWRlclwiO1xyXG5cclxubGV0IGRlYnVnID0gdHJ1ZTtcclxuIFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlTWFpblNjZW5lKFxyXG4gICAgU2NlbmVUb0dldCxcclxuICAgIFJlbmRlcnMsXHJcbiAgICBkb2N1bWVudCxcclxuICAgIHNlZWQsXHJcbiAgICBjaGlsZDIsXHJcbiAgICBDYW1lcmFcclxuKSB7XHJcblxyXG5cclxuICAgIGxldCBjb2xsaXNpb25IYW5kbGVyID0gbmV3IFdvcmtlcignd2ViV29ya2Vycy9Db2xsaXNpb24uanMnKTtcclxuICAgIGNvbGxpc2lvbkhhbmRsZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgY29sbGlzaW9uSGFuZGxlci5vbm1lc3NhZ2VlcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIH1cclxuICAgIGNvbGxpc2lvbkhhbmRsZXIub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICAgIGNvbGxpc2lvbkhhbmRsZXIucG9zdE1lc3NhZ2Uoe0NvbW1hbmQ6XCJTdGFydFwiLCBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW59KVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbGxpc2lvbkhhbmRsZXIucG9zdE1lc3NhZ2Uoe0NvbW1hbmQ6XCJBZGRTaGFwZVwiLCBkYXRhOiBuZXcgUGxhbmVCdWZmZXJHZW9tZXRyeSgyLCAyLCAyLCAyKX0pXHJcbiAgICB9LDEwMDApO1xyXG5cclxuICAgIGxldCBjbG91ZHMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xyXG4gICAgICAgIGNsb3Vkcy5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgR2VuZXJhdGVDbG91ZHMoXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMyhcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMzAwIC0gMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDgwICsgTWF0aC5yYW5kb20oKSAqIDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiA2MDAgLSA0MDBcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBTY2VuZVRvR2V0LFxyXG4gICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDAuMixcclxuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiA2ICsgMVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGF5bmlnaHQgPSBuZXcgQ3JlYXRlRGF5TmlnaHRDeWNsZShTY2VuZVRvR2V0LCBSZW5kZXJzKTtcclxuICAgIC8vZ2VuZXJhdGVUZXJyYWluKHNlZWQsIFNjZW5lVG9HZXQpO1xyXG4gICAgY29udHJvbEhhbmRsZXJJbml0KGRvY3VtZW50LCBjaGlsZDIpO1xyXG5cclxuICAgIGxldCBjdWJlID0gZGVidWdDdWJlKClcclxuICAgIFNjZW5lVG9HZXQuYWRkKGN1YmUpXHJcbiAgICBjdWJlLnBvc2l0aW9uLnNldCgxODMuMzMzMzI4MjQ3LCAzOS44MzI5NjczMDIxMTA2MSwgMTYuNjY2NjY2MDMwOSlcclxuXHJcbiAgICBpZiAoZGVidWcpIHtcclxuICAgICAgICBjb25zdCBwbGFuZUdlb21ldHJ5ID0gbmV3IFBsYW5lR2VvbWV0cnkoMjAsIDIwLCAzMiwgMzIpO1xyXG4gICAgICAgIHBsYW5lR2VvbWV0cnkucm90YXRlWChNYXRoLlBJIC8gMik7XHJcbiAgICAgICAgY29uc3QgcGxhbmVNYXRlcmlhbCA9IG5ldyBNZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiM1NjdkNDZcIixcclxuICAgICAgICAgICAgc2lkZTogRG91YmxlU2lkZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBwbGFuZSA9IG5ldyBNZXNoKHBsYW5lR2VvbWV0cnksIHBsYW5lTWF0ZXJpYWwpO1xyXG4gICAgICAgIHBsYW5lLnBvc2l0aW9uLnkgPSAtMC41O1xyXG4gICAgICAgIFNjZW5lVG9HZXQuYWRkKHBsYW5lKTtcclxuICAgICAgICBjb25zdCBncmlkSGVscGVyID0gbmV3IEdyaWRIZWxwZXIoNTAsIDUwKTtcclxuICAgICAgICBncmlkSGVscGVyLnBvc2l0aW9uLnkgPSAtMTtcclxuICAgICAgICBTY2VuZVRvR2V0LmFkZChncmlkSGVscGVyKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gQWRkIGFsbCB1cGRhdGluZyBwYXJ0cyB0byBhIGZ1bmN0aW9uXHJcbiAgICBhZGRUb1JlbmRlclNlcXVlbmNlKFxyXG4gICAgICAgIFwiTWFpblwiLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgY2xvdWRzLmZvckVhY2goKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGUudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuICAgIGxldCBuZXdQbGFuZSA9IG5ldyBNYWtlUGxhbmUoU2NlbmVUb0dldClcclxuICAgIGF3YWl0IG5ld1BsYW5lLmxvYWRGaWxlcygpXHJcbiAgICBuZXdQbGFuZS5DcmVhdGVHcm91cEFuZFBvcygpXHJcbiAgICAvL25ld1BsYW5lLmF0dGFjaENhbWVyYUFuZENvbnRyb2woQ2FtZXJhKVxyXG5cclxuICAgIGxldCBhaXJwb3J0ID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICBcIi9Bc3NldHMvQWlycG9ydC5nbGJcIixcclxuICAgICAgICBTY2VuZVRvR2V0XHJcbiAgICApO1xyXG4gICAgU2NlbmVUb0dldC5hZGQoYWlycG9ydC5zY2VuZSlcclxuXHJcbiAgICBnZW5lcmF0ZVRlcnJhaW5Bcm91bmRQbGF5ZXIoc2VlZCwgQ2FtZXJhLCBTY2VuZVRvR2V0KVxyXG5cclxuICAgIGFkZFRvUmVuZGVyU2VxdWVuY2UoXCJNYWluXCIsICgpID0+IGNvbnRyb2xIYW5kbGVyVXBkYXRlKENhbWVyYSkpO1xyXG4gICAgYWRkVG9SZW5kZXJTZXF1ZW5jZShcIk1haW5cIiwgKCkgPT4gZGF5bmlnaHQudXBkYXRlKENhbWVyYSkpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coR2VuZXJhdGVXZWJXb3JrZXIoYC93ZWJXb3JrZXJzL2Jhc2ljVGVzdC5qc2AsIFtdLCAoZSkgPT4ge2NvbnNvbGUubG9nKGUpfSApKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=