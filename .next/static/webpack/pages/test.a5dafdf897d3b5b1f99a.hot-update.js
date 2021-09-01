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
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _gameFundalmentals_clouds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gameFundalmentals/clouds */ "./components/gameFundalmentals/clouds.js");
/* harmony import */ var _gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gameFundalmentals/controls */ "./components/gameFundalmentals/controls.js");
/* harmony import */ var _gameFundalmentals_DayNightCycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gameFundalmentals/DayNightCycle */ "./components/gameFundalmentals/DayNightCycle.js");
/* harmony import */ var _gameFundalmentals_planeHandler_MainPlane__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gameFundalmentals/planeHandler/MainPlane */ "./components/gameFundalmentals/planeHandler/MainPlane.js");
/* harmony import */ var _gameFundalmentals_TerrainManagement_terrainChunkriser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gameFundalmentals/TerrainManagement/terrainChunkriser */ "./components/gameFundalmentals/TerrainManagement/terrainChunkriser.js");
/* harmony import */ var _Core_API_WorkerSetup_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Core-API/WorkerSetup.ts */ "./components/Core-API/WorkerSetup.ts");
/* harmony import */ var _Core_API_gemotryManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Core-API/gemotryManager */ "./components/Core-API/gemotryManager.js");
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
                data: new three__WEBPACK_IMPORTED_MODULE_10__.PlaneBufferGeometry(2, 2, 2, 2)
              });
            }, 1000);
            clouds = [];

            for (i = 0; i < 40; i++) {
              clouds.push(new _gameFundalmentals_clouds__WEBPACK_IMPORTED_MODULE_3__.GenerateClouds(new three__WEBPACK_IMPORTED_MODULE_10__.Vector3(Math.random() * 300 - 300, 80 + Math.random() * 20, Math.random() * 600 - 400), SceneToGet, Math.random() * 0.2, Math.random() * 6 + 1));
            }

            daynight = new _gameFundalmentals_DayNightCycle__WEBPACK_IMPORTED_MODULE_5__.CreateDayNightCycle(SceneToGet, Renders); //generateTerrain(seed, SceneToGet);

            (0,_gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_4__.controlHandlerInit)(document, child2);

            if (debug) {
              planeGeometry = new three__WEBPACK_IMPORTED_MODULE_10__.PlaneGeometry(20, 20, 32, 32);
              planeGeometry.rotateX(Math.PI / 2);
              planeMaterial = new three__WEBPACK_IMPORTED_MODULE_10__.MeshStandardMaterial({
                color: "#567d46",
                side: three__WEBPACK_IMPORTED_MODULE_10__.DoubleSide
              });
              plane = new three__WEBPACK_IMPORTED_MODULE_10__.Mesh(planeGeometry, planeMaterial);
              plane.position.y = -0.5;
              SceneToGet.add(plane);
              gridHelper = new three__WEBPACK_IMPORTED_MODULE_10__.GridHelper(50, 50);
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
            return addGLBFile("/Assets/Airport.glb", SceneToGet);

          case 19:
            airport = _context.sent;
            SceneToGet.add(airport);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TY2VuZXMvTWFpblNjZW5lSGFuZGxlci5qcyJdLCJuYW1lcyI6WyJkZWJ1ZyIsImdlbmVyYXRlTWFpblNjZW5lIiwiU2NlbmVUb0dldCIsIlJlbmRlcnMiLCJkb2N1bWVudCIsInNlZWQiLCJjaGlsZDIiLCJDYW1lcmEiLCJjb2xsaXNpb25IYW5kbGVyIiwiV29ya2VyIiwib25tZXNzYWdlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwib25tZXNzYWdlZXJyb3IiLCJvbmVycm9yIiwiZXJyb3IiLCJwb3N0TWVzc2FnZSIsIkNvbW1hbmQiLCJvcmlnaW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNldFRpbWVvdXQiLCJkYXRhIiwiUGxhbmVCdWZmZXJHZW9tZXRyeSIsImNsb3VkcyIsImkiLCJwdXNoIiwiR2VuZXJhdGVDbG91ZHMiLCJWZWN0b3IzIiwiTWF0aCIsInJhbmRvbSIsImRheW5pZ2h0IiwiQ3JlYXRlRGF5TmlnaHRDeWNsZSIsImNvbnRyb2xIYW5kbGVySW5pdCIsInBsYW5lR2VvbWV0cnkiLCJQbGFuZUdlb21ldHJ5Iiwicm90YXRlWCIsIlBJIiwicGxhbmVNYXRlcmlhbCIsIk1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiY29sb3IiLCJzaWRlIiwiRG91YmxlU2lkZSIsInBsYW5lIiwiTWVzaCIsInBvc2l0aW9uIiwieSIsImFkZCIsImdyaWRIZWxwZXIiLCJHcmlkSGVscGVyIiwiYWRkVG9SZW5kZXJTZXF1ZW5jZSIsImZvckVhY2giLCJlIiwidXBkYXRlIiwibmV3UGxhbmUiLCJNYWtlUGxhbmUiLCJsb2FkRmlsZXMiLCJDcmVhdGVHcm91cEFuZFBvcyIsImF0dGFjaENhbWVyYUFuZENvbnRyb2wiLCJhZGRHTEJGaWxlIiwiYWlycG9ydCIsImdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7Q0FHQTs7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QVdQRCx3QkFBVSxDQUFDSCxRQUFYLENBQW9CQyxDQUFwQixHQUF3QixDQUFDLENBQXpCO0FBQ0E3Qyx3QkFBVSxDQUFDOEMsR0FBWCxDQUFlQyxVQUFmO0FBQ0gsYUEzREUsQ0E4REg7OztBQUNBRSwyRkFBbUIsQ0FDZixNQURlLEVBRWYsWUFBTTtBQUNGMUIsb0JBQU0sQ0FBQzJCLE9BQVAsQ0FBZSxVQUFDQyxDQUFELEVBQUkzQixDQUFKLEVBQVU7QUFDckIyQixpQkFBQyxDQUFDQyxNQUFGO0FBQ0gsZUFGRDtBQUdILGFBTmMsRUFPZixJQVBlLENBQW5CO0FBU0lDLG9CQXhFRCxHQXdFWSxJQUFJQyxnRkFBSixDQUFjdEQsVUFBZCxDQXhFWjtBQUFBO0FBQUEsbUJBeUVHcUQsUUFBUSxDQUFDRSxTQUFULEVBekVIOztBQUFBO0FBMEVIRixvQkFBUSxDQUFDRyxpQkFBVDtBQUNBSCxvQkFBUSxDQUFDSSxzQkFBVCxDQUFnQ3BELE1BQWhDO0FBM0VHO0FBQUEsbUJBNkVpQnFELFVBQVUsQ0FDMUIscUJBRDBCLEVBRTFCMUQsVUFGMEIsQ0E3RTNCOztBQUFBO0FBNkVDMkQsbUJBN0VEO0FBaUZIM0Qsc0JBQVUsQ0FBQzhDLEdBQVgsQ0FBZWEsT0FBZjtBQUVBQywrSEFBMkIsQ0FBQ3pELElBQUQsRUFBT0UsTUFBUCxFQUFlTCxVQUFmLENBQTNCLENBbkZHLENBcUZIOztBQUNBaUQsMkZBQW1CLENBQUMsTUFBRCxFQUFTO0FBQUEscUJBQU1uQixRQUFRLENBQUNzQixNQUFULENBQWdCL0MsTUFBaEIsQ0FBTjtBQUFBLGFBQVQsQ0FBbkIsQ0F0RkcsQ0F3Rkg7O0FBeEZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC5hNWRhZmRmODk3ZDNiNWIxZjk5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG4vLyBSZW5kZXIgSGFuZGxlclxyXG5pbXBvcnQgeyBhZGRUb1JlbmRlclNlcXVlbmNlIH0gZnJvbSBcIi4uL0NvcmUtQVBJL1JlbmRlcmluZ0hhbmRsZXJcIjtcclxuXHJcbi8vRnVuY3Rpb25hbCBEZXBlbmRlbmNpZXNcclxuaW1wb3J0IHtcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgRG91YmxlU2lkZSxcclxuICAgIEdyaWRIZWxwZXIsXHJcbiAgICBNZXNoLFxyXG4gICAgTWVzaFN0YW5kYXJkTWF0ZXJpYWwsXHJcbiAgICBQbGFuZUJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgUGxhbmVHZW9tZXRyeSxcclxuICAgIFZlY3RvcjMsXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IEdlbmVyYXRlQ2xvdWRzIH0gZnJvbSBcIi4uL2dhbWVGdW5kYWxtZW50YWxzL2Nsb3Vkc1wiO1xyXG5pbXBvcnQgeyBjb250cm9sSGFuZGxlckluaXQsIGNvbnRyb2xIYW5kbGVyVXBkYXRlIH0gZnJvbSBcIi4uL2dhbWVGdW5kYWxtZW50YWxzL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IENyZWF0ZURheU5pZ2h0Q3ljbGUgfSBmcm9tIFwiLi4vZ2FtZUZ1bmRhbG1lbnRhbHMvRGF5TmlnaHRDeWNsZVwiO1xyXG5pbXBvcnQgeyBNYWtlUGxhbmUgfSBmcm9tIFwiLi4vZ2FtZUZ1bmRhbG1lbnRhbHMvcGxhbmVIYW5kbGVyL01haW5QbGFuZVwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVRlcnJhaW5Bcm91bmRQbGF5ZXIgfSBmcm9tIFwiLi4vZ2FtZUZ1bmRhbG1lbnRhbHMvVGVycmFpbk1hbmFnZW1lbnQvdGVycmFpbkNodW5rcmlzZXJcIjtcclxuaW1wb3J0IHsgR2VuZXJhdGVXZWJXb3JrZXIgfSBmcm9tIFwiLi4vQ29yZS1BUEkvV29ya2VyU2V0dXAudHNcIjtcclxuaW1wb3J0IHsgZGVidWdDdWJlIH0gZnJvbSBcIi4uL0NvcmUtQVBJL2dlbW90cnlNYW5hZ2VyXCI7XHJcblxyXG5sZXQgZGVidWcgPSB0cnVlO1xyXG4gXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVNYWluU2NlbmUoXHJcbiAgICBTY2VuZVRvR2V0LFxyXG4gICAgUmVuZGVycyxcclxuICAgIGRvY3VtZW50LFxyXG4gICAgc2VlZCxcclxuICAgIGNoaWxkMixcclxuICAgIENhbWVyYVxyXG4pIHtcclxuXHJcblxyXG4gICAgbGV0IGNvbGxpc2lvbkhhbmRsZXIgPSBuZXcgV29ya2VyKCd3ZWJXb3JrZXJzL0NvbGxpc2lvbi5qcycpO1xyXG4gICAgY29sbGlzaW9uSGFuZGxlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICB9XHJcbiAgICBjb2xsaXNpb25IYW5kbGVyLm9ubWVzc2FnZWVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgY29sbGlzaW9uSGFuZGxlci5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgY29sbGlzaW9uSGFuZGxlci5wb3N0TWVzc2FnZSh7Q29tbWFuZDpcIlN0YXJ0XCIsIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLm9yaWdpbn0pXHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29sbGlzaW9uSGFuZGxlci5wb3N0TWVzc2FnZSh7Q29tbWFuZDpcIkFkZFNoYXBlXCIsIGRhdGE6IG5ldyBQbGFuZUJ1ZmZlckdlb21ldHJ5KDIsIDIsIDIsIDIpfSlcclxuICAgIH0sMTAwMCk7XHJcblxyXG4gICAgbGV0IGNsb3VkcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XHJcbiAgICAgICAgY2xvdWRzLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBHZW5lcmF0ZUNsb3VkcyhcclxuICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IzKFxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAzMDAgLSAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgODAgKyBNYXRoLnJhbmRvbSgpICogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDYwMCAtIDQwMFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIFNjZW5lVG9HZXQsXHJcbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMC4yLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDYgKyAxXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkYXluaWdodCA9IG5ldyBDcmVhdGVEYXlOaWdodEN5Y2xlKFNjZW5lVG9HZXQsIFJlbmRlcnMpO1xyXG4gICAgLy9nZW5lcmF0ZVRlcnJhaW4oc2VlZCwgU2NlbmVUb0dldCk7XHJcbiAgICBjb250cm9sSGFuZGxlckluaXQoZG9jdW1lbnQsIGNoaWxkMik7XHJcblxyXG4gICAgaWYgKGRlYnVnKSB7XHJcbiAgICAgICAgY29uc3QgcGxhbmVHZW9tZXRyeSA9IG5ldyBQbGFuZUdlb21ldHJ5KDIwLCAyMCwgMzIsIDMyKTtcclxuICAgICAgICBwbGFuZUdlb21ldHJ5LnJvdGF0ZVgoTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgIGNvbnN0IHBsYW5lTWF0ZXJpYWwgPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICBjb2xvcjogXCIjNTY3ZDQ2XCIsXHJcbiAgICAgICAgICAgIHNpZGU6IERvdWJsZVNpZGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcGxhbmUgPSBuZXcgTWVzaChwbGFuZUdlb21ldHJ5LCBwbGFuZU1hdGVyaWFsKTtcclxuICAgICAgICBwbGFuZS5wb3NpdGlvbi55ID0gLTAuNTtcclxuICAgICAgICBTY2VuZVRvR2V0LmFkZChwbGFuZSk7XHJcbiAgICAgICAgY29uc3QgZ3JpZEhlbHBlciA9IG5ldyBHcmlkSGVscGVyKDUwLCA1MCk7XHJcbiAgICAgICAgZ3JpZEhlbHBlci5wb3NpdGlvbi55ID0gLTE7XHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQoZ3JpZEhlbHBlcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIEFkZCBhbGwgdXBkYXRpbmcgcGFydHMgdG8gYSBmdW5jdGlvblxyXG4gICAgYWRkVG9SZW5kZXJTZXF1ZW5jZShcclxuICAgICAgICBcIk1haW5cIixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsb3Vkcy5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRydWVcclxuICAgICk7XHJcbiAgICBsZXQgbmV3UGxhbmUgPSBuZXcgTWFrZVBsYW5lKFNjZW5lVG9HZXQpXHJcbiAgICBhd2FpdCBuZXdQbGFuZS5sb2FkRmlsZXMoKVxyXG4gICAgbmV3UGxhbmUuQ3JlYXRlR3JvdXBBbmRQb3MoKVxyXG4gICAgbmV3UGxhbmUuYXR0YWNoQ2FtZXJhQW5kQ29udHJvbChDYW1lcmEpXHJcblxyXG4gICAgbGV0IGFpcnBvcnQgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgIFwiL0Fzc2V0cy9BaXJwb3J0LmdsYlwiLFxyXG4gICAgICAgIFNjZW5lVG9HZXRcclxuICAgICk7XHJcbiAgICBTY2VuZVRvR2V0LmFkZChhaXJwb3J0KVxyXG5cclxuICAgIGdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllcihzZWVkLCBDYW1lcmEsIFNjZW5lVG9HZXQpXHJcblxyXG4gICAgLy9hZGRUb1JlbmRlclNlcXVlbmNlKFwiTWFpblwiLCAoKSA9PiBjb250cm9sSGFuZGxlclVwZGF0ZShDYW1lcmEpKTtcclxuICAgIGFkZFRvUmVuZGVyU2VxdWVuY2UoXCJNYWluXCIsICgpID0+IGRheW5pZ2h0LnVwZGF0ZShDYW1lcmEpKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKEdlbmVyYXRlV2ViV29ya2VyKGAvd2ViV29ya2Vycy9iYXNpY1Rlc3QuanNgLCBbXSwgKGUpID0+IHtjb25zb2xlLmxvZyhlKX0gKSlcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9