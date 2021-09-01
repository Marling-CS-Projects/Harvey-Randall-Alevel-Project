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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TY2VuZXMvTWFpblNjZW5lSGFuZGxlci5qcyJdLCJuYW1lcyI6WyJkZWJ1ZyIsImdlbmVyYXRlTWFpblNjZW5lIiwiU2NlbmVUb0dldCIsIlJlbmRlcnMiLCJkb2N1bWVudCIsInNlZWQiLCJjaGlsZDIiLCJDYW1lcmEiLCJjb2xsaXNpb25IYW5kbGVyIiwiV29ya2VyIiwib25tZXNzYWdlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwib25tZXNzYWdlZXJyb3IiLCJvbmVycm9yIiwiZXJyb3IiLCJwb3N0TWVzc2FnZSIsIkNvbW1hbmQiLCJvcmlnaW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNldFRpbWVvdXQiLCJkYXRhIiwiUGxhbmVCdWZmZXJHZW9tZXRyeSIsImNsb3VkcyIsImkiLCJwdXNoIiwiR2VuZXJhdGVDbG91ZHMiLCJWZWN0b3IzIiwiTWF0aCIsInJhbmRvbSIsImRheW5pZ2h0IiwiQ3JlYXRlRGF5TmlnaHRDeWNsZSIsImNvbnRyb2xIYW5kbGVySW5pdCIsInBsYW5lR2VvbWV0cnkiLCJQbGFuZUdlb21ldHJ5Iiwicm90YXRlWCIsIlBJIiwicGxhbmVNYXRlcmlhbCIsIk1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiY29sb3IiLCJzaWRlIiwiRG91YmxlU2lkZSIsInBsYW5lIiwiTWVzaCIsInBvc2l0aW9uIiwieSIsImFkZCIsImdyaWRIZWxwZXIiLCJHcmlkSGVscGVyIiwiYWRkVG9SZW5kZXJTZXF1ZW5jZSIsImZvckVhY2giLCJlIiwidXBkYXRlIiwibmV3UGxhbmUiLCJNYWtlUGxhbmUiLCJsb2FkRmlsZXMiLCJDcmVhdGVHcm91cEFuZFBvcyIsImF0dGFjaENhbWVyYUFuZENvbnRyb2wiLCJhZGRHTEJGaWxlIiwiYWlycG9ydCIsImdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0NBR0E7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Q0FWWjtBQVdQRCx3QkFBVSxDQUFDSCxRQUFYLENBQW9CQyxDQUFwQixHQUF3QixDQUFDLENBQXpCO0FBQ0E3Qyx3QkFBVSxDQUFDOEMsR0FBWCxDQUFlQyxVQUFmO0FBQ0gsYUEzREUsQ0E4REg7OztBQUNBRSwyRkFBbUIsQ0FDZixNQURlLEVBRWYsWUFBTTtBQUNGMUIsb0JBQU0sQ0FBQzJCLE9BQVAsQ0FBZSxVQUFDQyxDQUFELEVBQUkzQixDQUFKLEVBQVU7QUFDckIyQixpQkFBQyxDQUFDQyxNQUFGO0FBQ0gsZUFGRDtBQUdILGFBTmMsRUFPZixJQVBlLENBQW5CO0FBU0lDLG9CQXhFRCxHQXdFWSxJQUFJQyxnRkFBSixDQUFjdEQsVUFBZCxDQXhFWjtBQUFBO0FBQUEsbUJBeUVHcUQsUUFBUSxDQUFDRSxTQUFULEVBekVIOztBQUFBO0FBMEVIRixvQkFBUSxDQUFDRyxpQkFBVDtBQUNBSCxvQkFBUSxDQUFDSSxzQkFBVCxDQUFnQ3BELE1BQWhDO0FBM0VHO0FBQUEsbUJBNkVpQnFELGdGQUFVLENBQzFCLHFCQUQwQixFQUUxQjFELFVBRjBCLENBN0UzQjs7QUFBQTtBQTZFQzJELG1CQTdFRDtBQWlGSDNELHNCQUFVLENBQUM4QyxHQUFYLENBQWVhLE9BQWY7QUFFQUMsK0hBQTJCLENBQUN6RCxJQUFELEVBQU9FLE1BQVAsRUFBZUwsVUFBZixDQUEzQixDQW5GRyxDQXFGSDs7QUFDQWlELDJGQUFtQixDQUFDLE1BQUQsRUFBUztBQUFBLHFCQUFNbkIsUUFBUSxDQUFDc0IsTUFBVCxDQUFnQi9DLE1BQWhCLENBQU47QUFBQSxhQUFULENBQW5CLENBdEZHLENBd0ZIOztBQXhGRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QuMGIyNmI4ZTU1ZDA3NTg2YTY2NDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxyXG5cclxuLy8gUmVuZGVyIEhhbmRsZXJcclxuaW1wb3J0IHsgYWRkVG9SZW5kZXJTZXF1ZW5jZSB9IGZyb20gXCIuLi9Db3JlLUFQSS9SZW5kZXJpbmdIYW5kbGVyXCI7XHJcblxyXG4vL0Z1bmN0aW9uYWwgRGVwZW5kZW5jaWVzXHJcbmltcG9ydCB7XHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIERvdWJsZVNpZGUsXHJcbiAgICBHcmlkSGVscGVyLFxyXG4gICAgTWVzaCxcclxuICAgIE1lc2hTdGFuZGFyZE1hdGVyaWFsLFxyXG4gICAgUGxhbmVCdWZmZXJHZW9tZXRyeSxcclxuICAgIFBsYW5lR2VvbWV0cnksXHJcbiAgICBWZWN0b3IzLFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBHZW5lcmF0ZUNsb3VkcyB9IGZyb20gXCIuLi9nYW1lRnVuZGFsbWVudGFscy9jbG91ZHNcIjtcclxuaW1wb3J0IHsgY29udHJvbEhhbmRsZXJJbml0LCBjb250cm9sSGFuZGxlclVwZGF0ZSB9IGZyb20gXCIuLi9nYW1lRnVuZGFsbWVudGFscy9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBDcmVhdGVEYXlOaWdodEN5Y2xlIH0gZnJvbSBcIi4uL2dhbWVGdW5kYWxtZW50YWxzL0RheU5pZ2h0Q3ljbGVcIjtcclxuaW1wb3J0IHsgTWFrZVBsYW5lIH0gZnJvbSBcIi4uL2dhbWVGdW5kYWxtZW50YWxzL3BsYW5lSGFuZGxlci9NYWluUGxhbmVcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVUZXJyYWluQXJvdW5kUGxheWVyIH0gZnJvbSBcIi4uL2dhbWVGdW5kYWxtZW50YWxzL1RlcnJhaW5NYW5hZ2VtZW50L3RlcnJhaW5DaHVua3Jpc2VyXCI7XHJcbmltcG9ydCB7IEdlbmVyYXRlV2ViV29ya2VyIH0gZnJvbSBcIi4uL0NvcmUtQVBJL1dvcmtlclNldHVwLnRzXCI7XHJcbmltcG9ydCB7IGRlYnVnQ3ViZSB9IGZyb20gXCIuLi9Db3JlLUFQSS9nZW1vdHJ5TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBhZGRHTEJGaWxlIH0gZnJvbSBcIi4uL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9HTEJMb2FkZXJcIjtcclxuXHJcbmxldCBkZWJ1ZyA9IHRydWU7XHJcbiBcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZU1haW5TY2VuZShcclxuICAgIFNjZW5lVG9HZXQsXHJcbiAgICBSZW5kZXJzLFxyXG4gICAgZG9jdW1lbnQsXHJcbiAgICBzZWVkLFxyXG4gICAgY2hpbGQyLFxyXG4gICAgQ2FtZXJhXHJcbikge1xyXG5cclxuXHJcbiAgICBsZXQgY29sbGlzaW9uSGFuZGxlciA9IG5ldyBXb3JrZXIoJ3dlYldvcmtlcnMvQ29sbGlzaW9uLmpzJyk7XHJcbiAgICBjb2xsaXNpb25IYW5kbGVyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIH1cclxuICAgIGNvbGxpc2lvbkhhbmRsZXIub25tZXNzYWdlZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICB9XHJcbiAgICBjb2xsaXNpb25IYW5kbGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgICBjb2xsaXNpb25IYW5kbGVyLnBvc3RNZXNzYWdlKHtDb21tYW5kOlwiU3RhcnRcIiwgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24ub3JpZ2lufSlcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb2xsaXNpb25IYW5kbGVyLnBvc3RNZXNzYWdlKHtDb21tYW5kOlwiQWRkU2hhcGVcIiwgZGF0YTogbmV3IFBsYW5lQnVmZmVyR2VvbWV0cnkoMiwgMiwgMiwgMil9KVxyXG4gICAgfSwxMDAwKTtcclxuXHJcbiAgICBsZXQgY2xvdWRzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQwOyBpKyspIHtcclxuICAgICAgICBjbG91ZHMucHVzaChcclxuICAgICAgICAgICAgbmV3IEdlbmVyYXRlQ2xvdWRzKFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlY3RvcjMoXHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDMwMCAtIDMwMCxcclxuICAgICAgICAgICAgICAgICAgICA4MCArIE1hdGgucmFuZG9tKCkgKiAyMCxcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogNjAwIC0gNDAwXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgU2NlbmVUb0dldCxcclxuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAwLjIsXHJcbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogNiArIDFcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRheW5pZ2h0ID0gbmV3IENyZWF0ZURheU5pZ2h0Q3ljbGUoU2NlbmVUb0dldCwgUmVuZGVycyk7XHJcbiAgICAvL2dlbmVyYXRlVGVycmFpbihzZWVkLCBTY2VuZVRvR2V0KTtcclxuICAgIGNvbnRyb2xIYW5kbGVySW5pdChkb2N1bWVudCwgY2hpbGQyKTtcclxuXHJcbiAgICBpZiAoZGVidWcpIHtcclxuICAgICAgICBjb25zdCBwbGFuZUdlb21ldHJ5ID0gbmV3IFBsYW5lR2VvbWV0cnkoMjAsIDIwLCAzMiwgMzIpO1xyXG4gICAgICAgIHBsYW5lR2VvbWV0cnkucm90YXRlWChNYXRoLlBJIC8gMik7XHJcbiAgICAgICAgY29uc3QgcGxhbmVNYXRlcmlhbCA9IG5ldyBNZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiM1NjdkNDZcIixcclxuICAgICAgICAgICAgc2lkZTogRG91YmxlU2lkZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBwbGFuZSA9IG5ldyBNZXNoKHBsYW5lR2VvbWV0cnksIHBsYW5lTWF0ZXJpYWwpO1xyXG4gICAgICAgIHBsYW5lLnBvc2l0aW9uLnkgPSAtMC41O1xyXG4gICAgICAgIFNjZW5lVG9HZXQuYWRkKHBsYW5lKTtcclxuICAgICAgICBjb25zdCBncmlkSGVscGVyID0gbmV3IEdyaWRIZWxwZXIoNTAsIDUwKTtcclxuICAgICAgICBncmlkSGVscGVyLnBvc2l0aW9uLnkgPSAtMTtcclxuICAgICAgICBTY2VuZVRvR2V0LmFkZChncmlkSGVscGVyKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gQWRkIGFsbCB1cGRhdGluZyBwYXJ0cyB0byBhIGZ1bmN0aW9uXHJcbiAgICBhZGRUb1JlbmRlclNlcXVlbmNlKFxyXG4gICAgICAgIFwiTWFpblwiLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgY2xvdWRzLmZvckVhY2goKGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGUudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuICAgIGxldCBuZXdQbGFuZSA9IG5ldyBNYWtlUGxhbmUoU2NlbmVUb0dldClcclxuICAgIGF3YWl0IG5ld1BsYW5lLmxvYWRGaWxlcygpXHJcbiAgICBuZXdQbGFuZS5DcmVhdGVHcm91cEFuZFBvcygpXHJcbiAgICBuZXdQbGFuZS5hdHRhY2hDYW1lcmFBbmRDb250cm9sKENhbWVyYSlcclxuXHJcbiAgICBsZXQgYWlycG9ydCA9IGF3YWl0IGFkZEdMQkZpbGUoXHJcbiAgICAgICAgXCIvQXNzZXRzL0FpcnBvcnQuZ2xiXCIsXHJcbiAgICAgICAgU2NlbmVUb0dldFxyXG4gICAgKTtcclxuICAgIFNjZW5lVG9HZXQuYWRkKGFpcnBvcnQpXHJcblxyXG4gICAgZ2VuZXJhdGVUZXJyYWluQXJvdW5kUGxheWVyKHNlZWQsIENhbWVyYSwgU2NlbmVUb0dldClcclxuXHJcbiAgICAvL2FkZFRvUmVuZGVyU2VxdWVuY2UoXCJNYWluXCIsICgpID0+IGNvbnRyb2xIYW5kbGVyVXBkYXRlKENhbWVyYSkpO1xyXG4gICAgYWRkVG9SZW5kZXJTZXF1ZW5jZShcIk1haW5cIiwgKCkgPT4gZGF5bmlnaHQudXBkYXRlKENhbWVyYSkpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coR2VuZXJhdGVXZWJXb3JrZXIoYC93ZWJXb3JrZXJzL2Jhc2ljVGVzdC5qc2AsIFtdLCAoZSkgPT4ge2NvbnNvbGUubG9nKGUpfSApKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=