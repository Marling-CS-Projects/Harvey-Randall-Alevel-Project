self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _components_Context_socketioContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Context/socketioContext */ "./components/Context/socketioContext.js");
/* harmony import */ var _components_gameFundalmentals_nametag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/gameFundalmentals/nametag */ "./components/gameFundalmentals/nametag.js");
/* harmony import */ var _components_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Core-API/ConnectAPI */ "./components/Core-API/ConnectAPI.js");
/* harmony import */ var _components_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Core-API/RenderingHandler */ "./components/Core-API/RenderingHandler.js");
/* harmony import */ var _components_Scenes_MainSceneHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Scenes/MainSceneHandler */ "./components/Scenes/MainSceneHandler.js");
/* harmony import */ var _components_gameUI_entryPoint_tsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/gameUI/entryPoint.tsx */ "./components/gameUI/entryPoint.tsx");
/* harmony import */ var _components_gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/gameFundalmentals/controls */ "./components/gameFundalmentals/controls.js");
/* harmony import */ var _components_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Core-API/3dModelHandlers/GLBLoader */ "./components/Core-API/3dModelHandlers/GLBLoader.js");
/* harmony import */ var _components_gameFundalmentals_planeHandler_MainPlane_ts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/gameFundalmentals/planeHandler/MainPlane.ts */ "./components/gameFundalmentals/planeHandler/MainPlane.ts");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "H:\\Desktop\\code\\Harvey-Randall-Alevel-Project\\pages\\test.js",
    _s = $RefreshSig$();

// Written By Harvey Randall \\





var Stats = __webpack_require__(/*! stats.js */ "./node_modules/stats.js/build/stats.min.js");










function render() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      child = _useState[0],
      setChild = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      gameEventData = _useState2[0],
      setGameEventData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("not day"),
      day = _useState3[0],
      setDay = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      child2 = _useState4[0],
      setChild2 = _useState4[1];

  var socket = (0,_components_Context_socketioContext__WEBPACK_IMPORTED_MODULE_5__.useAppContext)();

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      recievedSeed = _useState5[0],
      setSeed = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      rendered = _useState6[0],
      setRendered = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      clients = _useState7[0],
      setClients = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      personData = _useState8[0],
      setPersonalData = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(new three__WEBPACK_IMPORTED_MODULE_14__.Vector3().toArray()),
      positon = _useState9[0],
      setPosition = _useState9[1];

  (0,_components_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_7__.startSeverClientCommunication)(socket);
  socket.once("welcome", function (seed, client, data) {
    setSeed(seed);
    setClients(client);
    setPersonalData(data);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (typeof child === "undefined" || rendered === true) {
      return;
    } // Connect to server \\


    var mainGame = (0,_components_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_7__.joinGame)("Test", "Test");
    setSeed(mainGame.seed);
    setClients(mainGame.clients);
    setPersonalData(mainGame.userData);
    (0,_components_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_12__.preLoadAllModels)();
    setRendered(true);
    var stats = new Stats();
    stats.showPanel(0);
    document.body.appendChild(stats.dom);
    var SceneToGet = new three__WEBPACK_IMPORTED_MODULE_14__.Scene();
    var Renders = new three__WEBPACK_IMPORTED_MODULE_14__.WebGLRenderer({
      antialias: true,
      alpha: true,
      ogarithmicDepthBuffer: true
    });
    Renders.setClearColor("#87ceeb", 1);
    Renders.setSize(window.innerWidth, window.innerHeight);
    child.appendChild(Renders.domElement);
    var CurrentScene = "Main";
    var Camera = new three__WEBPACK_IMPORTED_MODULE_14__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000000);
    window.addEventListener("resize", onWindowResize, false);

    function onWindowResize() {
      Camera.aspect = window.innerWidth / window.innerHeight;
      Camera.updateProjectionMatrix();
      Renders.setSize(window.innerWidth, window.innerHeight);
    }

    (0,_components_Scenes_MainSceneHandler__WEBPACK_IMPORTED_MODULE_9__.generateMainScene)(SceneToGet, Renders, document, recievedSeed, child2, Camera);
    Renders.domElement.requestPointerLock();
    (0,_components_gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_11__.ControlEventListener)(document, child2);
    var players = [];
    var prevData = [];

    var addtoGameFeed = function addtoGameFeed() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Unkown";
      var event = arguments.length > 1 ? arguments[1] : undefined;

      var NewGameEventArray = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(gameEventData);

      NewGameEventArray.unshift({
        name: name,
        event: event
      });
      delete NewGameEventArray[10];
      delete NewGameEventArray[11];
      setGameEventData((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(NewGameEventArray));
      prevData = NewGameEventArray;
    };

    clients.forEach( /*#__PURE__*/function () {
      var _ref = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
        var _data;

        var newcube, cube;
        return H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                newcube = new _components_gameFundalmentals_planeHandler_MainPlane_ts__WEBPACK_IMPORTED_MODULE_13__.MakePlane(SceneToGet);
                _context.next = 3;
                return newcube.loadFiles();

              case 3:
                cube = newcube.CreateGroupAndPos();
                addtoGameFeed((_data = data) === null || _data === void 0 ? void 0 : _data.name, "Joined the game!");
                (0,_components_gameFundalmentals_nametag__WEBPACK_IMPORTED_MODULE_6__.generateLabel)(e.name, cube);
                players["".concat(id)] = cube;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    socket.on("NewPlayer", /*#__PURE__*/function () {
      var _ref2 = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(id, data) {
        var newcube, cube;
        return H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(id === socket.id)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                newcube = new _components_gameFundalmentals_planeHandler_MainPlane_ts__WEBPACK_IMPORTED_MODULE_13__.MakePlane(SceneToGet);
                _context2.next = 5;
                return newcube.loadFiles();

              case 5:
                cube = newcube.CreateGroupAndPos();
                addtoGameFeed(data === null || data === void 0 ? void 0 : data.name, "Joined the game!");
                (0,_components_gameFundalmentals_nametag__WEBPACK_IMPORTED_MODULE_6__.generateLabel)(data.name, cube);
                players["".concat(id)] = cube;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }());
    socket.on("LostPLayer", function (id, how, data) {
      var cube = players["".concat(id)];
      SceneToGet.remove(cube);
      delete players["".concat(id)];
      addtoGameFeed(data === null || data === void 0 ? void 0 : data.name, how === true ? "Was removed from the game for being inactive" : "Left the game!");
    });
    (0,_components_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_7__.listenToEvent)("PlayerLocationUpdate", /*#__PURE__*/function () {
      var _ref3 = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(id, pos, rot, data) {
        var cube, newcube, _cube;

        return H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(id === socket.id)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                cube = players["".concat(id)];

                if (!cube) {
                  _context3.next = 8;
                  break;
                }

                cube.rotation.set(rot._x, rot._y, rot._z);
                cube.position.set(pos.x, pos.y, pos.z);
                _context3.next = 15;
                break;

              case 8:
                newcube = new _components_gameFundalmentals_planeHandler_MainPlane_ts__WEBPACK_IMPORTED_MODULE_13__.MakePlane(SceneToGet);
                _context3.next = 11;
                return newcube.loadFiles();

              case 11:
                _cube = newcube.CreateGroupAndPos();
                (0,_components_gameFundalmentals_nametag__WEBPACK_IMPORTED_MODULE_6__.generateLabel)(data.name, _cube);
                addtoGameFeed(data === null || data === void 0 ? void 0 : data.name, "Joined the game!");
                players["".concat(id)] = _cube;

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x4, _x5, _x6, _x7) {
        return _ref3.apply(this, arguments);
      };
    }());
    socket.on("NewChat", function (data, text) {
      addtoGameFeed(data.name, text);
    });
    setInterval(function () {
      var _Camera$parent;

      if ((Camera === null || Camera === void 0 ? void 0 : (_Camera$parent = Camera.parent) === null || _Camera$parent === void 0 ? void 0 : _Camera$parent.position) === undefined) return;
      socket.emit("LocationUpdate", Camera.parent.position, Camera.parent.rotation);
    }, 1000 / 30);

    var animate = /*#__PURE__*/function () {
      var _ref4 = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {
        return H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                stats.begin();
                requestAnimationFrame(animate); // Update all moving parts

                (0,_components_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_8__.updateRenderCycle)(CurrentScene);
                setPosition("X: ".concat(Math.round(Camera.position.x), "} Y: ").concat(Math.round(Camera.position.y), "} Z: ").concat(Math.round(Camera.position.z), "}"));
                Renders.render(SceneToGet, Camera);
                stats.end();

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function animate() {
        return _ref4.apply(this, arguments);
      };
    }();

    animate();
  }, [child, clients]);

  var sendChat = function sendChat(e) {
    e.preventDefault();
    socket.emit("sendChat", child2.value);
    child2.value = "";
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: "100vw",
        height: "100vh",
        position: "fixed"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameUI_entryPoint_tsx__WEBPACK_IMPORTED_MODULE_10__.CreateUI, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: function ref(_ref5) {
        setChild(_ref5);
      }
      /* */

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 215,
    columnNumber: 9
  }, this);
}

_s(render, "+51wkI/fooWHd/LGRHnID0ruMKM=", false, function () {
  return [_components_Context_socketioContext__WEBPACK_IMPORTED_MODULE_5__.useAppContext];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcyJdLCJuYW1lcyI6WyJTdGF0cyIsInJlcXVpcmUiLCJyZW5kZXIiLCJ1c2VTdGF0ZSIsImNoaWxkIiwic2V0Q2hpbGQiLCJnYW1lRXZlbnREYXRhIiwic2V0R2FtZUV2ZW50RGF0YSIsImRheSIsInNldERheSIsImNoaWxkMiIsInNldENoaWxkMiIsInNvY2tldCIsInVzZUFwcENvbnRleHQiLCJyZWNpZXZlZFNlZWQiLCJzZXRTZWVkIiwicmVuZGVyZWQiLCJzZXRSZW5kZXJlZCIsImNsaWVudHMiLCJzZXRDbGllbnRzIiwicGVyc29uRGF0YSIsInNldFBlcnNvbmFsRGF0YSIsIlZlY3RvcjMiLCJ0b0FycmF5IiwicG9zaXRvbiIsInNldFBvc2l0aW9uIiwic3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24iLCJvbmNlIiwic2VlZCIsImNsaWVudCIsImRhdGEiLCJ1c2VFZmZlY3QiLCJtYWluR2FtZSIsImpvaW5HYW1lIiwidXNlckRhdGEiLCJwcmVMb2FkQWxsTW9kZWxzIiwic3RhdHMiLCJzaG93UGFuZWwiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvbSIsIlNjZW5lVG9HZXQiLCJTY2VuZSIsIlJlbmRlcnMiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJvZ2FyaXRobWljRGVwdGhCdWZmZXIiLCJzZXRDbGVhckNvbG9yIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRvbUVsZW1lbnQiLCJDdXJyZW50U2NlbmUiLCJDYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbldpbmRvd1Jlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJnZW5lcmF0ZU1haW5TY2VuZSIsInJlcXVlc3RQb2ludGVyTG9jayIsIkNvbnRyb2xFdmVudExpc3RlbmVyIiwicGxheWVycyIsInByZXZEYXRhIiwiYWRkdG9HYW1lRmVlZCIsIm5hbWUiLCJldmVudCIsIk5ld0dhbWVFdmVudEFycmF5IiwidW5zaGlmdCIsImZvckVhY2giLCJlIiwibmV3Y3ViZSIsIk1ha2VQbGFuZSIsImxvYWRGaWxlcyIsImN1YmUiLCJDcmVhdGVHcm91cEFuZFBvcyIsImdlbmVyYXRlTGFiZWwiLCJpZCIsIm9uIiwiaG93IiwicmVtb3ZlIiwibGlzdGVuVG9FdmVudCIsInBvcyIsInJvdCIsInJvdGF0aW9uIiwic2V0IiwiX3giLCJfeSIsIl96IiwicG9zaXRpb24iLCJ4IiwieSIsInoiLCJ0ZXh0Iiwic2V0SW50ZXJ2YWwiLCJwYXJlbnQiLCJ1bmRlZmluZWQiLCJlbWl0IiwiYW5pbWF0ZSIsImJlZ2luIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlUmVuZGVyQ3ljbGUiLCJNYXRoIiwicm91bmQiLCJlbmQiLCJzZW5kQ2hhdCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJ3aWR0aCIsImhlaWdodCIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDREQUFELENBQW5COztBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDSEMsK0NBQVEsRUFETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBQUEsbUJBRWFGLCtDQUFRLENBQUMsRUFBRCxDQUZyQjtBQUFBLE1BRXRCRyxhQUZzQjtBQUFBLE1BRVBDLGdCQUZPOztBQUFBLG1CQUlQSiwrQ0FBUSxDQUFDLFNBQUQsQ0FKRDtBQUFBLE1BSXRCSyxHQUpzQjtBQUFBLE1BSWpCQyxNQUppQjs7QUFBQSxtQkFLRE4sK0NBQVEsRUFMUDtBQUFBLE1BS3RCTyxN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QWlCQUEsV0FBTztBQUNWLEdBbEtRLEVBa0tOLENBQUNqRyxLQUFELEVBQVFjLE9BQVIsQ0FsS00sQ0FBVDs7QUFvS0EsTUFBSTBGLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNuQyxDQUFELEVBQU87QUFDbEJBLEtBQUMsQ0FBQ29DLGNBQUY7QUFDQWpHLFVBQU0sQ0FBQ3dGLElBQVAsQ0FBWSxVQUFaLEVBQXdCMUYsTUFBTSxDQUFDb0csS0FBL0I7QUFDQXBHLFVBQU0sQ0FBQ29HLEtBQVAsR0FBZSxFQUFmO0FBQ0gsR0FKRDs7QUFNQSxzQkFDSTtBQUFBLDRCQUNJO0FBQ0ksV0FBSyxFQUFFO0FBQ0hDLGFBQUssRUFBRSxPQURKO0FBRUhDLGNBQU0sRUFBRSxPQUZMO0FBR0hwQixnQkFBUSxFQUFFO0FBSFAsT0FEWDtBQUFBLDZCQU1JLDhEQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFVSTtBQUFLLFNBQUcsRUFBRSxhQUFDcUIsS0FBRCxFQUFTO0FBQUU1RyxnQkFBUSxDQUFDNEcsS0FBRCxDQUFSO0FBQWU7QUFBQzs7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBY0g7O0dBOU11Qi9HLE07VUFNTFcsOEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC5kOWRlM2U0NTg1OWJkYmRmMDdkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBlcnNwZWN0aXZlQ2FtZXJhLCBTY2VuZSwgVmVjdG9yMywgV2ViR0xSZW5kZXJlciB9IGZyb20gXCJ0aHJlZVwiO1xyXG52YXIgU3RhdHMgPSByZXF1aXJlKFwic3RhdHMuanNcIik7XHJcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250ZXh0L3NvY2tldGlvQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZUxhYmVsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvbmFtZXRhZ1wiO1xyXG5pbXBvcnQge1xyXG4gICAgc3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24sXHJcbiAgICBsaXN0ZW5Ub0V2ZW50LFxyXG4gICAgam9pbkdhbWUsXHJcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29yZS1BUEkvQ29ubmVjdEFQSVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVSZW5kZXJDeWNsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvcmUtQVBJL1JlbmRlcmluZ0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVNYWluU2NlbmUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TY2VuZXMvTWFpblNjZW5lSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBDcmVhdGVVSSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVVSS9lbnRyeVBvaW50LnRzeFwiO1xyXG5pbXBvcnQgeyBDb250cm9sRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IHByZUxvYWRBbGxNb2RlbHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3JlLUFQSS8zZE1vZGVsSGFuZGxlcnMvR0xCTG9hZGVyXCI7XHJcbmltcG9ydCB7IE1ha2VQbGFuZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL3BsYW5lSGFuZGxlci9NYWluUGxhbmUudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IFtjaGlsZCwgc2V0Q2hpbGRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtnYW1lRXZlbnREYXRhLCBzZXRHYW1lRXZlbnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbZGF5LCBzZXREYXldID0gdXNlU3RhdGUoXCJub3QgZGF5XCIpO1xyXG4gICAgY29uc3QgW2NoaWxkMiwgc2V0Q2hpbGQyXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBzb2NrZXQgPSB1c2VBcHBDb250ZXh0KCk7XHJcbiAgICBjb25zdCBbcmVjaWV2ZWRTZWVkLCBzZXRTZWVkXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcmVuZGVyZWQsIHNldFJlbmRlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjbGllbnRzLCBzZXRDbGllbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwZXJzb25EYXRhLCBzZXRQZXJzb25hbERhdGFdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBbcG9zaXRvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUobmV3IFZlY3RvcjMoKS50b0FycmF5KCkpO1xyXG5cclxuICAgIHN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uKHNvY2tldCk7XHJcblxyXG4gICAgc29ja2V0Lm9uY2UoXCJ3ZWxjb21lXCIsIChzZWVkLCBjbGllbnQsIGRhdGEpID0+IHtcclxuICAgICAgICBzZXRTZWVkKHNlZWQpO1xyXG4gICAgICAgIHNldENsaWVudHMoY2xpZW50KTtcclxuICAgICAgICBzZXRQZXJzb25hbERhdGEoZGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdHlwZW9mIGNoaWxkID09PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgICAgIHJlbmRlcmVkID09PSB0cnVlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbm5lY3QgdG8gc2VydmVyIFxcXFxcclxuICAgICAgICBsZXQgbWFpbkdhbWUgPSBqb2luR2FtZShcIlRlc3RcIiwgXCJUZXN0XCIpXHJcbiAgICAgICAgc2V0U2VlZChtYWluR2FtZS5zZWVkKTtcclxuICAgICAgICBzZXRDbGllbnRzKG1haW5HYW1lLmNsaWVudHMpO1xyXG4gICAgICAgIHNldFBlcnNvbmFsRGF0YShtYWluR2FtZS51c2VyRGF0YSk7XHJcblxyXG4gICAgICAgIHByZUxvYWRBbGxNb2RlbHMoKVxyXG5cclxuICAgICAgICBzZXRSZW5kZXJlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRzID0gbmV3IFN0YXRzKCk7XHJcbiAgICAgICAgc3RhdHMuc2hvd1BhbmVsKDApO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhdHMuZG9tKTtcclxuXHJcbiAgICAgICAgbGV0IFNjZW5lVG9HZXQgPSBuZXcgU2NlbmUoKTtcclxuICAgICAgICBsZXQgUmVuZGVycyA9IG5ldyBXZWJHTFJlbmRlcmVyKHtcclxuICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgICAgICAgICBhbHBoYTogdHJ1ZSxcclxuICAgICAgICAgICAgb2dhcml0aG1pY0RlcHRoQnVmZmVyOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBSZW5kZXJzLnNldENsZWFyQ29sb3IoXCIjODdjZWViXCIsIDEpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIFJlbmRlcnMuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICBjaGlsZC5hcHBlbmRDaGlsZChSZW5kZXJzLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgICAgICBsZXQgQ3VycmVudFNjZW5lID0gXCJNYWluXCI7XHJcblxyXG4gICAgICAgIHZhciBDYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICAgICAgICAgIDc1LFxyXG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgMC4xLFxyXG4gICAgICAgICAgICAxMDAwMDAwMDBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcclxuICAgICAgICAgICAgQ2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgICBDYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgICAgICAgICAgUmVuZGVycy5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2VuZXJhdGVNYWluU2NlbmUoXHJcbiAgICAgICAgICAgIFNjZW5lVG9HZXQsXHJcbiAgICAgICAgICAgIFJlbmRlcnMsXHJcbiAgICAgICAgICAgIGRvY3VtZW50LFxyXG4gICAgICAgICAgICByZWNpZXZlZFNlZWQsXHJcbiAgICAgICAgICAgIGNoaWxkMixcclxuICAgICAgICAgICAgQ2FtZXJhXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgUmVuZGVycy5kb21FbGVtZW50LnJlcXVlc3RQb2ludGVyTG9jaygpO1xyXG4gICAgICAgIENvbnRyb2xFdmVudExpc3RlbmVyKGRvY3VtZW50LCBjaGlsZDIpO1xyXG5cclxuICAgICAgICBsZXQgcGxheWVycyA9IFtdO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHByZXZEYXRhID0gW107XHJcblxyXG4gICAgICAgIGxldCBhZGR0b0dhbWVGZWVkID0gKG5hbWUgPSBcIlVua293blwiLCBldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgTmV3R2FtZUV2ZW50QXJyYXkgPSBbLi4uZ2FtZUV2ZW50RGF0YV07XHJcbiAgICAgICAgICAgIE5ld0dhbWVFdmVudEFycmF5LnVuc2hpZnQoeyBuYW1lLCBldmVudCB9KTtcclxuICAgICAgICAgICAgZGVsZXRlIE5ld0dhbWVFdmVudEFycmF5WzEwXTtcclxuICAgICAgICAgICAgZGVsZXRlIE5ld0dhbWVFdmVudEFycmF5WzExXTtcclxuICAgICAgICAgICAgc2V0R2FtZUV2ZW50RGF0YShbLi4uTmV3R2FtZUV2ZW50QXJyYXldKTtcclxuICAgICAgICAgICAgcHJldkRhdGEgPSBOZXdHYW1lRXZlbnRBcnJheTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjbGllbnRzLmZvckVhY2goYXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld2N1YmUgPSBuZXcgTWFrZVBsYW5lKFNjZW5lVG9HZXQpXHJcbiAgICAgICAgICAgIGF3YWl0IG5ld2N1YmUubG9hZEZpbGVzKClcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBuZXdjdWJlLkNyZWF0ZUdyb3VwQW5kUG9zKClcclxuICAgICAgICAgICAgYWRkdG9HYW1lRmVlZChkYXRhPy5uYW1lLCBcIkpvaW5lZCB0aGUgZ2FtZSFcIik7XHJcblxyXG4gICAgICAgICAgICBnZW5lcmF0ZUxhYmVsKGUubmFtZSwgY3ViZSk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXJzW2Ake2lkfWBdID0gY3ViZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiTmV3UGxheWVyXCIsIGFzeW5jIChpZCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaWQgPT09IHNvY2tldC5pZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5ld2N1YmUgPSBuZXcgTWFrZVBsYW5lKFNjZW5lVG9HZXQpXHJcbiAgICAgICAgICAgIGF3YWl0IG5ld2N1YmUubG9hZEZpbGVzKClcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBuZXdjdWJlLkNyZWF0ZUdyb3VwQW5kUG9zKClcclxuICAgICAgICAgICAgYWRkdG9HYW1lRmVlZChkYXRhPy5uYW1lLCBcIkpvaW5lZCB0aGUgZ2FtZSFcIik7XHJcblxyXG4gICAgICAgICAgICBnZW5lcmF0ZUxhYmVsKGRhdGEubmFtZSwgY3ViZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHBsYXllcnNbYCR7aWR9YF0gPSBjdWJlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oXCJMb3N0UExheWVyXCIsIChpZCwgaG93LCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdWJlID0gcGxheWVyc1tgJHtpZH1gXTtcclxuICAgICAgICAgICAgU2NlbmVUb0dldC5yZW1vdmUoY3ViZSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBwbGF5ZXJzW2Ake2lkfWBdO1xyXG4gICAgICAgICAgICBhZGR0b0dhbWVGZWVkKFxyXG4gICAgICAgICAgICAgICAgZGF0YT8ubmFtZSxcclxuICAgICAgICAgICAgICAgIGhvdyA9PT0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJXYXMgcmVtb3ZlZCBmcm9tIHRoZSBnYW1lIGZvciBiZWluZyBpbmFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkxlZnQgdGhlIGdhbWUhXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGlzdGVuVG9FdmVudChcIlBsYXllckxvY2F0aW9uVXBkYXRlXCIsYXN5bmMgKGlkLCBwb3MsIHJvdCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaWQgPT09IHNvY2tldC5pZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IHBsYXllcnNbYCR7aWR9YF07XHJcbiAgICAgICAgICAgIGlmIChjdWJlKSB7XHJcbiAgICAgICAgICAgICAgICBjdWJlLnJvdGF0aW9uLnNldChyb3QuX3gsIHJvdC5feSwgcm90Ll96KTtcclxuICAgICAgICAgICAgICAgIGN1YmUucG9zaXRpb24uc2V0KHBvcy54LCBwb3MueSwgcG9zLnopO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld2N1YmUgPSBuZXcgTWFrZVBsYW5lKFNjZW5lVG9HZXQpXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBuZXdjdWJlLmxvYWRGaWxlcygpXHJcbiAgICAgICAgICAgICAgICBsZXQgY3ViZSA9IG5ld2N1YmUuQ3JlYXRlR3JvdXBBbmRQb3MoKVxyXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVMYWJlbChkYXRhLm5hbWUsIGN1YmUpO1xyXG4gICAgICAgICAgICAgICAgYWRkdG9HYW1lRmVlZChkYXRhPy5uYW1lLCBcIkpvaW5lZCB0aGUgZ2FtZSFcIik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJzW2Ake2lkfWBdID0gY3ViZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNvY2tldC5vbihcIk5ld0NoYXRcIiwgKGRhdGEsIHRleHQpID0+IHtcclxuICAgICAgICAgICAgYWRkdG9HYW1lRmVlZChkYXRhLm5hbWUsIHRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKENhbWVyYT8ucGFyZW50Py5wb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiTG9jYXRpb25VcGRhdGVcIiwgQ2FtZXJhLnBhcmVudC5wb3NpdGlvbiwgQ2FtZXJhLnBhcmVudC5yb3RhdGlvbik7XHJcbiAgICAgICAgfSwgMTAwMCAvIDMwKTtcclxuXHJcbiAgICAgICAgdmFyIGFuaW1hdGUgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0YXRzLmJlZ2luKCk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBhbGwgbW92aW5nIHBhcnRzXHJcbiAgICAgICAgICAgIHVwZGF0ZVJlbmRlckN5Y2xlKEN1cnJlbnRTY2VuZSk7XHJcblxyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbihcclxuICAgICAgICAgICAgICAgIGBYOiAke01hdGgucm91bmQoQ2FtZXJhLnBvc2l0aW9uLngpfX0gWTogJHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgIENhbWVyYS5wb3NpdGlvbi55XHJcbiAgICAgICAgICAgICAgICApfX0gWjogJHtNYXRoLnJvdW5kKENhbWVyYS5wb3NpdGlvbi56KX19YFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgUmVuZGVycy5yZW5kZXIoU2NlbmVUb0dldCwgQ2FtZXJhKTtcclxuICAgICAgICAgICAgc3RhdHMuZW5kKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYW5pbWF0ZSgpO1xyXG4gICAgfSwgW2NoaWxkLCBjbGllbnRzXSk7XHJcblxyXG4gICAgbGV0IHNlbmRDaGF0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc29ja2V0LmVtaXQoXCJzZW5kQ2hhdFwiLCBjaGlsZDIudmFsdWUpO1xyXG4gICAgICAgIGNoaWxkMi52YWx1ZSA9IFwiXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8Q3JlYXRlVUkgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17KHJlZikgPT4geyBzZXRDaGlsZChyZWYpIH0gLyogKi99PjwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==