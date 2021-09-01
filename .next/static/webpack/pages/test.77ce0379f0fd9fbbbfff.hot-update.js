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
    var collisionHandler, clouds, i, daynight, planeGeometry, planeMaterial, plane, gridHelper, newPlane, airport;
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
            _context.next = 15;
            return newPlane.loadFiles();

          case 15:
            newPlane.CreateGroupAndPos();
            newPlane.attachCameraAndControl(Camera);
            _context.next = 19;
            return (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_10__.addGLBFile)("/Assets/Airport.glb", SceneToGet);

          case 19:
            airport = _context.sent;
            SceneToGet.add(airport.scene);
            (0,_gameFundalmentals_TerrainManagement_terrainChunkriser__WEBPACK_IMPORTED_MODULE_7__.generateTerrainAroundPlayer)(seed, Camera, SceneToGet); //addToRenderSequence("Main", () => controlHandlerUpdate(Camera));

            (0,_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_2__.addToRenderSequence)("Main", function () {
              return daynight.update(Camera);
            }); //console.log(GenerateWebWorker(`/webWorkers/basicTest.js`, [], (e) => {console.log(e)} ))

          case 23:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TY2VuZXMvTWFpblNjZW5lSGFuZGxlci5qcyJdLCJuYW1lcyI6WyJkZWJ1ZyIsImdlbmVyYXRlTWFpblNjZW5lIiwiU2NlbmVUb0dldCIsIlJlbmRlcnMiLCJkb2N1bWVudCIsInNlZWQiLCJjaGlsZDIiLCJDYW1lcmEiLCJjb2xsaXNpb25IYW5kbGVyIiwiV29ya2VyIiwib25tZXNzYWdlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwib25tZXNzYWdlZXJyb3IiLCJvbmVycm9yIiwiZXJyb3IiLCJwb3N0TWVzc2FnZSIsIkNvbW1hbmQiLCJvcmlnaW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNldFRpbWVvdXQiLCJkYXRhIiwiUGxhbmVCdWZmZXJHZW9tZXRyeSIsImNsb3VkcyIsImkiLCJwdXNoIiwiR2VuZXJhdGVDbG91ZHMiLCJWZWN0b3IzIiwiTWF0aCIsInJhbmRvbSIsImRheW5pZ2h0IiwiQ3JlYXRlRGF5TmlnaHRDeWNsZSIsImNvbnRyb2xIYW5kbGVySW5pdCIsInBsYW5lR2VvbWV0cnkiLCJQbGFuZUdlb21ldHJ5Iiwicm90YXRlWCIsIlBJIiwicGxhbmVNYXRlcmlhbCIsIk1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiY29sb3IiLCJzaWRlIiwiRG91YmxlU2lkZSIsInBsYW5lIiwiTWVzaCIsInBvc2l0aW9uIiwieSIsImFkZCIsImdyaWRIZWxwZXIiLCJHcmlkSGVscGVyIiwiYWRkVG9SZW5kZXJTZXF1ZW5jZSIsImZvckVhY2giLCJlIiwidXBkYXRlIiwibmV3UGxhbmUiLCJNYWtlUGxhbmUiLCJsb2FkRmlsZXMiLCJDcmVhdGVHcm91cEFuZFBvcyIsImF0dGFjaENhbWVyYUFuZENvbnRyb2wiLCJhZGRHTEJGaWxlIiwiYWlycG9ydCIsInNjZW5lIiwiZ2VuZXJhdGVUZXJyYWluQXJvdW5kUGxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FB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QixFQUFuQixDQVZaO0FBV1BELHdCQUFVLENBQUNILFFBQVgsQ0FBb0JDLENBQXBCLEdBQXdCLENBQUMsQ0FBekI7QUFDQTdDLHdCQUFVLENBQUM4QyxHQUFYLENBQWVDLFVBQWY7QUFDSCxhQTNERSxDQThESDs7O0FBQ0FFLDJGQUFtQixDQUNmLE1BRGUsRUFFZixZQUFNO0FBQ0YxQixvQkFBTSxDQUFDMkIsT0FBUCxDQUFlLFVBQUNDLENBQUQsRUFBSTNCLENBQUosRUFBVTtBQUNyQjJCLGlCQUFDLENBQUNDLE1BQUY7QUFDSCxlQUZEO0FBR0gsYUFOYyxFQU9mLElBUGUsQ0FBbkI7QUFTSUMsb0JBeEVELEdBd0VZLElBQUlDLGdGQUFKLENBQWN0RCxVQUFkLENBeEVaO0FBQUE7QUFBQSxtQkF5RUdxRCxRQUFRLENBQUNFLFNBQVQsRUF6RUg7O0FBQUE7QUEwRUhGLG9CQUFRLENBQUNHLGlCQUFUO0FBQ0FILG9CQUFRLENBQUNJLHNCQUFULENBQWdDcEQsTUFBaEM7QUEzRUc7QUFBQSxtQkE2RWlCcUQsZ0ZBQVUsQ0FDMUIscUJBRDBCLEVBRTFCMUQsVUFGMEIsQ0E3RTNCOztBQUFBO0FBNkVDMkQsbUJBN0VEO0FBaUZIM0Qsc0JBQVUsQ0FBQzhDLEdBQVgsQ0FBZWEsT0FBTyxDQUFDQyxLQUF2QjtBQUVBQywrSEFBMkIsQ0FBQzFELElBQUQsRUFBT0UsTUFBUCxFQUFlTCxVQUFmLENBQTNCLENBbkZHLENBcUZIOztBQUNBaUQsMkZBQW1CLENBQUMsTUFBRCxFQUFTO0FBQUEscUJBQU1uQixRQUFRLENBQUNzQixNQUFULENBQWdCL0MsTUFBaEIsQ0FBTjtBQUFBLGFBQVQsQ0FBbkIsQ0F0RkcsQ0F3Rkg7O0FBeEZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC43N2NlMDM3OWYwZmQ5ZmJiYmZmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG4vLyBSZW5kZXIgSGFuZGxlclxyXG5pbXBvcnQgeyBhZGRUb1JlbmRlclNlcXVlbmNlIH0gZnJvbSBcIi4uL0NvcmUtQVBJL1JlbmRlcmluZ0hhbmRsZXJcIjtcclxuXHJcbi8vRnVuY3Rpb25hbCBEZXBlbmRlbmNpZXNcclxuaW1wb3J0IHtcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgRG91YmxlU2lkZSxcclxuICAgIEdyaWRIZWxwZXIsXHJcbiAgICBNZXNoLFxyXG4gICAgTWVzaFN0YW5kYXJkTWF0ZXJpYWwsXHJcbiAgICBQbGFuZUJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgUGxhbmVHZW9tZXRyeSxcclxuICAgIFZlY3RvcjMsXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IEdlbmVyYXRlQ2xvdWRzIH0gZnJvbSBcIi4uL2dhbWVGdW5kYWxtZW50YWxzL2Nsb3Vkc1wiO1xyXG5pbXBvcnQgeyBjb250cm9sSGFuZGxlckluaXQsIGNvbnRyb2xIYW5kbGVyVXBkYXRlIH0gZnJvbSBcIi4uL2dhbWVGdW5kYWxtZW50YWxzL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IENyZWF0ZURheU5pZ2h0Q3ljbGUgfSBmcm9tIFwiLi4vZ2FtZUZ1bmRhbG1lbnRhbHMvRGF5TmlnaHRDeWNsZVwiO1xyXG5pbXBvcnQgeyBNYWtlUGxhbmUgfSBmcm9tIFwiLi4vZ2FtZUZ1bmRhbG1lbnRhbHMvcGxhbmVIYW5kbGVyL01haW5QbGFuZVwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVRlcnJhaW5Bcm91bmRQbGF5ZXIgfSBmcm9tIFwiLi4vZ2FtZUZ1bmRhbG1lbnRhbHMvVGVycmFpbk1hbmFnZW1lbnQvdGVycmFpbkNodW5rcmlzZXJcIjtcclxuaW1wb3J0IHsgR2VuZXJhdGVXZWJXb3JrZXIgfSBmcm9tIFwiLi4vQ29yZS1BUEkvV29ya2VyU2V0dXAudHNcIjtcclxuaW1wb3J0IHsgZGVidWdDdWJlIH0gZnJvbSBcIi4uL0NvcmUtQVBJL2dlbW90cnlNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGFkZEdMQkZpbGUgfSBmcm9tIFwiLi4vQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL0dMQkxvYWRlclwiO1xyXG5cclxubGV0IGRlYnVnID0gdHJ1ZTtcclxuIFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlTWFpblNjZW5lKFxyXG4gICAgU2NlbmVUb0dldCxcclxuICAgIFJlbmRlcnMsXHJcbiAgICBkb2N1bWVudCxcclxuICAgIHNlZWQsXHJcbiAgICBjaGlsZDIsXHJcbiAgICBDYW1lcmFcclxuKSB7XHJcblxyXG5cclxuICAgIGxldCBjb2xsaXNpb25IYW5kbGVyID0gbmV3IFdvcmtlcignd2ViV29ya2Vycy9Db2xsaXNpb24uanMnKTtcclxuICAgIGNvbGxpc2lvbkhhbmRsZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgY29sbGlzaW9uSGFuZGxlci5vbm1lc3NhZ2VlcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIH1cclxuICAgIGNvbGxpc2lvbkhhbmRsZXIub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICAgIGNvbGxpc2lvbkhhbmRsZXIucG9zdE1lc3NhZ2Uoe0NvbW1hbmQ6XCJTdGFydFwiLCBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW59KVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbGxpc2lvbkhhbmRsZXIucG9zdE1lc3NhZ2Uoe0NvbW1hbmQ6XCJBZGRTaGFwZVwiLCBkYXRhOiBuZXcgUGxhbmVCdWZmZXJHZW9tZXRyeSgyLCAyLCAyLCAyKX0pXHJcbiAgICB9LDEwMDApO1xyXG5cclxuICAgIGxldCBjbG91ZHMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xyXG4gICAgICAgIGNsb3Vkcy5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgR2VuZXJhdGVDbG91ZHMoXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMyhcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMzAwIC0gMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDgwICsgTWF0aC5yYW5kb20oKSAqIDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiA2MDAgLSA0MDBcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBTY2VuZVRvR2V0LFxyXG4gICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDAuMixcclxuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiA2ICsgMVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGF5bmlnaHQgPSBuZXcgQ3JlYXRlRGF5TmlnaHRDeWNsZShTY2VuZVRvR2V0LCBSZW5kZXJzKTtcclxuICAgIC8vZ2VuZXJhdGVUZXJyYWluKHNlZWQsIFNjZW5lVG9HZXQpO1xyXG4gICAgY29udHJvbEhhbmRsZXJJbml0KGRvY3VtZW50LCBjaGlsZDIpO1xyXG5cclxuICAgIGlmIChkZWJ1Zykge1xyXG4gICAgICAgIGNvbnN0IHBsYW5lR2VvbWV0cnkgPSBuZXcgUGxhbmVHZW9tZXRyeSgyMCwgMjAsIDMyLCAzMik7XHJcbiAgICAgICAgcGxhbmVHZW9tZXRyeS5yb3RhdGVYKE1hdGguUEkgLyAyKTtcclxuICAgICAgICBjb25zdCBwbGFuZU1hdGVyaWFsID0gbmV3IE1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICAgICAgY29sb3I6IFwiIzU2N2Q0NlwiLFxyXG4gICAgICAgICAgICBzaWRlOiBEb3VibGVTaWRlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHBsYW5lID0gbmV3IE1lc2gocGxhbmVHZW9tZXRyeSwgcGxhbmVNYXRlcmlhbCk7XHJcbiAgICAgICAgcGxhbmUucG9zaXRpb24ueSA9IC0wLjU7XHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQocGxhbmUpO1xyXG4gICAgICAgIGNvbnN0IGdyaWRIZWxwZXIgPSBuZXcgR3JpZEhlbHBlcig1MCwgNTApO1xyXG4gICAgICAgIGdyaWRIZWxwZXIucG9zaXRpb24ueSA9IC0xO1xyXG4gICAgICAgIFNjZW5lVG9HZXQuYWRkKGdyaWRIZWxwZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBBZGQgYWxsIHVwZGF0aW5nIHBhcnRzIHRvIGEgZnVuY3Rpb25cclxuICAgIGFkZFRvUmVuZGVyU2VxdWVuY2UoXHJcbiAgICAgICAgXCJNYWluXCIsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbG91ZHMuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS51cGRhdGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0cnVlXHJcbiAgICApO1xyXG4gICAgbGV0IG5ld1BsYW5lID0gbmV3IE1ha2VQbGFuZShTY2VuZVRvR2V0KVxyXG4gICAgYXdhaXQgbmV3UGxhbmUubG9hZEZpbGVzKClcclxuICAgIG5ld1BsYW5lLkNyZWF0ZUdyb3VwQW5kUG9zKClcclxuICAgIG5ld1BsYW5lLmF0dGFjaENhbWVyYUFuZENvbnRyb2woQ2FtZXJhKVxyXG5cclxuICAgIGxldCBhaXJwb3J0ID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICBcIi9Bc3NldHMvQWlycG9ydC5nbGJcIixcclxuICAgICAgICBTY2VuZVRvR2V0XHJcbiAgICApO1xyXG4gICAgU2NlbmVUb0dldC5hZGQoYWlycG9ydC5zY2VuZSlcclxuXHJcbiAgICBnZW5lcmF0ZVRlcnJhaW5Bcm91bmRQbGF5ZXIoc2VlZCwgQ2FtZXJhLCBTY2VuZVRvR2V0KVxyXG5cclxuICAgIC8vYWRkVG9SZW5kZXJTZXF1ZW5jZShcIk1haW5cIiwgKCkgPT4gY29udHJvbEhhbmRsZXJVcGRhdGUoQ2FtZXJhKSk7XHJcbiAgICBhZGRUb1JlbmRlclNlcXVlbmNlKFwiTWFpblwiLCAoKSA9PiBkYXluaWdodC51cGRhdGUoQ2FtZXJhKSk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhHZW5lcmF0ZVdlYldvcmtlcihgL3dlYldvcmtlcnMvYmFzaWNUZXN0LmpzYCwgW10sIChlKSA9PiB7Y29uc29sZS5sb2coZSl9ICkpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==