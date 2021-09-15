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
                (0,_components_gameFundalmentals_nametag__WEBPACK_IMPORTED_MODULE_6__.generateLabel)(data.name, cube);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcyJdLCJuYW1lcyI6WyJTdGF0cyIsInJlcXVpcmUiLCJyZW5kZXIiLCJ1c2VTdGF0ZSIsImNoaWxkIiwic2V0Q2hpbGQiLCJnYW1lRXZlbnREYXRhIiwic2V0R2FtZUV2ZW50RGF0YSIsImRheSIsInNldERheSIsImNoaWxkMiIsInNldENoaWxkMiIsInNvY2tldCIsInVzZUFwcENvbnRleHQiLCJyZWNpZXZlZFNlZWQiLCJzZXRTZWVkIiwicmVuZGVyZWQiLCJzZXRSZW5kZXJlZCIsImNsaWVudHMiLCJzZXRDbGllbnRzIiwicGVyc29uRGF0YSIsInNldFBlcnNvbmFsRGF0YSIsIlZlY3RvcjMiLCJ0b0FycmF5IiwicG9zaXRvbiIsInNldFBvc2l0aW9uIiwic3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24iLCJvbmNlIiwic2VlZCIsImNsaWVudCIsImRhdGEiLCJ1c2VFZmZlY3QiLCJtYWluR2FtZSIsImpvaW5HYW1lIiwidXNlckRhdGEiLCJwcmVMb2FkQWxsTW9kZWxzIiwic3RhdHMiLCJzaG93UGFuZWwiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvbSIsIlNjZW5lVG9HZXQiLCJTY2VuZSIsIlJlbmRlcnMiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJvZ2FyaXRobWljRGVwdGhCdWZmZXIiLCJzZXRDbGVhckNvbG9yIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRvbUVsZW1lbnQiLCJDdXJyZW50U2NlbmUiLCJDYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbldpbmRvd1Jlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJnZW5lcmF0ZU1haW5TY2VuZSIsInJlcXVlc3RQb2ludGVyTG9jayIsIkNvbnRyb2xFdmVudExpc3RlbmVyIiwicGxheWVycyIsInByZXZEYXRhIiwiYWRkdG9HYW1lRmVlZCIsIm5hbWUiLCJldmVudCIsIk5ld0dhbWVFdmVudEFycmF5IiwidW5zaGlmdCIsImZvckVhY2giLCJlIiwibmV3Y3ViZSIsIk1ha2VQbGFuZSIsImxvYWRGaWxlcyIsImN1YmUiLCJDcmVhdGVHcm91cEFuZFBvcyIsImdlbmVyYXRlTGFiZWwiLCJpZCIsIm9uIiwiaG93IiwicmVtb3ZlIiwibGlzdGVuVG9FdmVudCIsInBvcyIsInJvdCIsInJvdGF0aW9uIiwic2V0IiwiX3giLCJfeSIsIl96IiwicG9zaXRpb24iLCJ4IiwieSIsInoiLCJ0ZXh0Iiwic2V0SW50ZXJ2YWwiLCJwYXJlbnQiLCJ1bmRlZmluZWQiLCJlbWl0IiwiYW5pbWF0ZSIsImJlZ2luIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlUmVuZGVyQ3ljbGUiLCJNYXRoIiwicm91bmQiLCJlbmQiLCJzZW5kQ2hhdCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJ3aWR0aCIsImhlaWdodCIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDREQUFELENBQW5COztBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDSEMsK0NBQVEsRUFETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBQUEsbUJBRWFGLCtDQUFRLENBQUMsRUFBRCxDQUZyQjtBQUFBLE1BRXRCRyxhQUZzQjtBQUFBLE1BRVBDLGdCQUZPOztBQUFBLG1CQUlQSiwrQ0FBUSxDQUFDLFNBQUQsQ0FKRDtBQUFBLE1BSXRCSyxHQUpzQjtBQUFBLE1BSWpCQyxNQUppQjs7QUFBQSxtQkFLRE4sK0NBQVEsRUFMUDtBQUFBLE1BS3RCTyxN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O0FBaUJBQSxXQUFPO0FBQ1YsR0FsS1EsRUFrS04sQ0FBQ2pHLEtBQUQsRUFBUWMsT0FBUixDQWxLTSxDQUFUOztBQW9LQSxNQUFJMEYsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ25DLENBQUQsRUFBTztBQUNsQkEsS0FBQyxDQUFDb0MsY0FBRjtBQUNBakcsVUFBTSxDQUFDd0YsSUFBUCxDQUFZLFVBQVosRUFBd0IxRixNQUFNLENBQUNvRyxLQUEvQjtBQUNBcEcsVUFBTSxDQUFDb0csS0FBUCxHQUFlLEVBQWY7QUFDSCxHQUpEOztBQU1BLHNCQUNJO0FBQUEsNEJBQ0k7QUFDSSxXQUFLLEVBQUU7QUFDSEMsYUFBSyxFQUFFLE9BREo7QUFFSEMsY0FBTSxFQUFFLE9BRkw7QUFHSHBCLGdCQUFRLEVBQUU7QUFIUCxPQURYO0FBQUEsNkJBTUksOERBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVVJO0FBQUssU0FBRyxFQUFFLGFBQUNxQixLQUFELEVBQVM7QUFBRTVHLGdCQUFRLENBQUM0RyxLQUFELENBQVI7QUFBZTtBQUFDOztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFjSDs7R0E5TXVCL0csTTtVQU1MVyw4RSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0LjQ0Yzg1ZGY2MWJlNzZjNzA0NTczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGVyc3BlY3RpdmVDYW1lcmEsIFNjZW5lLCBWZWN0b3IzLCBXZWJHTFJlbmRlcmVyIH0gZnJvbSBcInRocmVlXCI7XHJcbnZhciBTdGF0cyA9IHJlcXVpcmUoXCJzdGF0cy5qc1wiKTtcclxuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRleHQvc29ja2V0aW9Db250ZXh0XCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlTGFiZWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9uYW1ldGFnXCI7XHJcbmltcG9ydCB7XHJcbiAgICBzdGFydFNldmVyQ2xpZW50Q29tbXVuaWNhdGlvbixcclxuICAgIGxpc3RlblRvRXZlbnQsXHJcbiAgICBqb2luR2FtZSxcclxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3JlLUFQSS9Db25uZWN0QVBJXCI7XHJcbmltcG9ydCB7IHVwZGF0ZVJlbmRlckN5Y2xlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29yZS1BUEkvUmVuZGVyaW5nSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZU1haW5TY2VuZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1NjZW5lcy9NYWluU2NlbmVIYW5kbGVyXCI7XHJcbmltcG9ydCB7IENyZWF0ZVVJIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZVVJL2VudHJ5UG9pbnQudHN4XCI7XHJcbmltcG9ydCB7IENvbnRyb2xFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgcHJlTG9hZEFsbE1vZGVscyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9HTEJMb2FkZXJcIjtcclxuaW1wb3J0IHsgTWFrZVBsYW5lIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvcGxhbmVIYW5kbGVyL01haW5QbGFuZS50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgY29uc3QgW2NoaWxkLCBzZXRDaGlsZF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2dhbWVFdmVudERhdGEsIHNldEdhbWVFdmVudERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFtkYXksIHNldERheV0gPSB1c2VTdGF0ZShcIm5vdCBkYXlcIik7XHJcbiAgICBjb25zdCBbY2hpbGQyLCBzZXRDaGlsZDJdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IHNvY2tldCA9IHVzZUFwcENvbnRleHQoKTtcclxuICAgIGNvbnN0IFtyZWNpZXZlZFNlZWQsIHNldFNlZWRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtyZW5kZXJlZCwgc2V0UmVuZGVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NsaWVudHMsIHNldENsaWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3BlcnNvbkRhdGEsIHNldFBlcnNvbmFsRGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IFtwb3NpdG9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZShuZXcgVmVjdG9yMygpLnRvQXJyYXkoKSk7XHJcblxyXG4gICAgc3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24oc29ja2V0KTtcclxuXHJcbiAgICBzb2NrZXQub25jZShcIndlbGNvbWVcIiwgKHNlZWQsIGNsaWVudCwgZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFNlZWQoc2VlZCk7XHJcbiAgICAgICAgc2V0Q2xpZW50cyhjbGllbnQpO1xyXG4gICAgICAgIHNldFBlcnNvbmFsRGF0YShkYXRhKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0eXBlb2YgY2hpbGQgPT09IFwidW5kZWZpbmVkXCIgfHxcclxuICAgICAgICAgICAgcmVuZGVyZWQgPT09IHRydWVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ29ubmVjdCB0byBzZXJ2ZXIgXFxcXFxyXG4gICAgICAgIGxldCBtYWluR2FtZSA9IGpvaW5HYW1lKFwiVGVzdFwiLCBcIlRlc3RcIilcclxuICAgICAgICBzZXRTZWVkKG1haW5HYW1lLnNlZWQpO1xyXG4gICAgICAgIHNldENsaWVudHMobWFpbkdhbWUuY2xpZW50cyk7XHJcbiAgICAgICAgc2V0UGVyc29uYWxEYXRhKG1haW5HYW1lLnVzZXJEYXRhKTtcclxuXHJcbiAgICAgICAgcHJlTG9hZEFsbE1vZGVscygpXHJcblxyXG4gICAgICAgIHNldFJlbmRlcmVkKHRydWUpO1xyXG5cclxuICAgICAgICBsZXQgc3RhdHMgPSBuZXcgU3RhdHMoKTtcclxuICAgICAgICBzdGF0cy5zaG93UGFuZWwoMCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5kb20pO1xyXG5cclxuICAgICAgICBsZXQgU2NlbmVUb0dldCA9IG5ldyBTY2VuZSgpO1xyXG4gICAgICAgIGxldCBSZW5kZXJzID0gbmV3IFdlYkdMUmVuZGVyZXIoe1xyXG4gICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgICAgIGFscGhhOiB0cnVlLFxyXG4gICAgICAgICAgICBvZ2FyaXRobWljRGVwdGhCdWZmZXI6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFJlbmRlcnMuc2V0Q2xlYXJDb2xvcihcIiM4N2NlZWJcIiwgMSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgUmVuZGVycy5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgIGNoaWxkLmFwcGVuZENoaWxkKFJlbmRlcnMuZG9tRWxlbWVudCk7XHJcblxyXG4gICAgICAgIGxldCBDdXJyZW50U2NlbmUgPSBcIk1haW5cIjtcclxuXHJcbiAgICAgICAgdmFyIENhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYShcclxuICAgICAgICAgICAgNzUsXHJcbiAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgICAgICAwLjEsXHJcbiAgICAgICAgICAgIDEwMDAwMDAwMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uV2luZG93UmVzaXplLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xyXG4gICAgICAgICAgICBDYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgIENhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG4gICAgICAgICAgICBSZW5kZXJzLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZW5lcmF0ZU1haW5TY2VuZShcclxuICAgICAgICAgICAgU2NlbmVUb0dldCxcclxuICAgICAgICAgICAgUmVuZGVycyxcclxuICAgICAgICAgICAgZG9jdW1lbnQsXHJcbiAgICAgICAgICAgIHJlY2lldmVkU2VlZCxcclxuICAgICAgICAgICAgY2hpbGQyLFxyXG4gICAgICAgICAgICBDYW1lcmFcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBSZW5kZXJzLmRvbUVsZW1lbnQucmVxdWVzdFBvaW50ZXJMb2NrKCk7XHJcbiAgICAgICAgQ29udHJvbEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsIGNoaWxkMik7XHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXJzID0gW107XHJcblxyXG5cclxuICAgICAgICBsZXQgcHJldkRhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGFkZHRvR2FtZUZlZWQgPSAobmFtZSA9IFwiVW5rb3duXCIsIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBOZXdHYW1lRXZlbnRBcnJheSA9IFsuLi5nYW1lRXZlbnREYXRhXTtcclxuICAgICAgICAgICAgTmV3R2FtZUV2ZW50QXJyYXkudW5zaGlmdCh7IG5hbWUsIGV2ZW50IH0pO1xyXG4gICAgICAgICAgICBkZWxldGUgTmV3R2FtZUV2ZW50QXJyYXlbMTBdO1xyXG4gICAgICAgICAgICBkZWxldGUgTmV3R2FtZUV2ZW50QXJyYXlbMTFdO1xyXG4gICAgICAgICAgICBzZXRHYW1lRXZlbnREYXRhKFsuLi5OZXdHYW1lRXZlbnRBcnJheV0pO1xyXG4gICAgICAgICAgICBwcmV2RGF0YSA9IE5ld0dhbWVFdmVudEFycmF5O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNsaWVudHMuZm9yRWFjaChhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmV3Y3ViZSA9IG5ldyBNYWtlUGxhbmUoU2NlbmVUb0dldClcclxuICAgICAgICAgICAgYXdhaXQgbmV3Y3ViZS5sb2FkRmlsZXMoKVxyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IG5ld2N1YmUuQ3JlYXRlR3JvdXBBbmRQb3MoKVxyXG4gICAgICAgICAgICBhZGR0b0dhbWVGZWVkKGRhdGE/Lm5hbWUsIFwiSm9pbmVkIHRoZSBnYW1lIVwiKTtcclxuXHJcbiAgICAgICAgICAgIGdlbmVyYXRlTGFiZWwoZGF0YS5uYW1lLCBjdWJlKTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllcnNbYCR7aWR9YF0gPSBjdWJlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oXCJOZXdQbGF5ZXJcIiwgYXN5bmMgKGlkLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PT0gc29ja2V0LmlkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV3Y3ViZSA9IG5ldyBNYWtlUGxhbmUoU2NlbmVUb0dldClcclxuICAgICAgICAgICAgYXdhaXQgbmV3Y3ViZS5sb2FkRmlsZXMoKVxyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IG5ld2N1YmUuQ3JlYXRlR3JvdXBBbmRQb3MoKVxyXG4gICAgICAgICAgICBhZGR0b0dhbWVGZWVkKGRhdGE/Lm5hbWUsIFwiSm9pbmVkIHRoZSBnYW1lIVwiKTtcclxuXHJcbiAgICAgICAgICAgIGdlbmVyYXRlTGFiZWwoZGF0YS5uYW1lLCBjdWJlKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcGxheWVyc1tgJHtpZH1gXSA9IGN1YmU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNvY2tldC5vbihcIkxvc3RQTGF5ZXJcIiwgKGlkLCBob3csIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBwbGF5ZXJzW2Ake2lkfWBdO1xyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LnJlbW92ZShjdWJlKTtcclxuICAgICAgICAgICAgZGVsZXRlIHBsYXllcnNbYCR7aWR9YF07XHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoXHJcbiAgICAgICAgICAgICAgICBkYXRhPy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaG93ID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIldhcyByZW1vdmVkIGZyb20gdGhlIGdhbWUgZm9yIGJlaW5nIGluYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiTGVmdCB0aGUgZ2FtZSFcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsaXN0ZW5Ub0V2ZW50KFwiUGxheWVyTG9jYXRpb25VcGRhdGVcIixhc3luYyAoaWQsIHBvcywgcm90LCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PT0gc29ja2V0LmlkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBjdWJlID0gcGxheWVyc1tgJHtpZH1gXTtcclxuICAgICAgICAgICAgaWYgKGN1YmUpIHtcclxuICAgICAgICAgICAgICAgIGN1YmUucm90YXRpb24uc2V0KHJvdC5feCwgcm90Ll95LCByb3QuX3opO1xyXG4gICAgICAgICAgICAgICAgY3ViZS5wb3NpdGlvbi5zZXQocG9zLngsIHBvcy55LCBwb3Mueik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3Y3ViZSA9IG5ldyBNYWtlUGxhbmUoU2NlbmVUb0dldClcclxuICAgICAgICAgICAgICAgIGF3YWl0IG5ld2N1YmUubG9hZEZpbGVzKClcclxuICAgICAgICAgICAgICAgIGxldCBjdWJlID0gbmV3Y3ViZS5DcmVhdGVHcm91cEFuZFBvcygpXHJcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUxhYmVsKGRhdGEubmFtZSwgY3ViZSk7XHJcbiAgICAgICAgICAgICAgICBhZGR0b0dhbWVGZWVkKGRhdGE/Lm5hbWUsIFwiSm9pbmVkIHRoZSBnYW1lIVwiKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHBsYXllcnNbYCR7aWR9YF0gPSBjdWJlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc29ja2V0Lm9uKFwiTmV3Q2hhdFwiLCAoZGF0YSwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICBhZGR0b0dhbWVGZWVkKGRhdGEubmFtZSwgdGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoQ2FtZXJhPy5wYXJlbnQ/LnBvc2l0aW9uID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJMb2NhdGlvblVwZGF0ZVwiLCBDYW1lcmEucGFyZW50LnBvc2l0aW9uLCBDYW1lcmEucGFyZW50LnJvdGF0aW9uKTtcclxuICAgICAgICB9LCAxMDAwIC8gMzApO1xyXG5cclxuICAgICAgICB2YXIgYW5pbWF0ZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3RhdHMuYmVnaW4oKTtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIGFsbCBtb3ZpbmcgcGFydHNcclxuICAgICAgICAgICAgdXBkYXRlUmVuZGVyQ3ljbGUoQ3VycmVudFNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgYFg6ICR7TWF0aC5yb3VuZChDYW1lcmEucG9zaXRpb24ueCl9fSBZOiAke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FtZXJhLnBvc2l0aW9uLnlcclxuICAgICAgICAgICAgICAgICl9fSBaOiAke01hdGgucm91bmQoQ2FtZXJhLnBvc2l0aW9uLnopfX1gXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBSZW5kZXJzLnJlbmRlcihTY2VuZVRvR2V0LCBDYW1lcmEpO1xyXG4gICAgICAgICAgICBzdGF0cy5lbmQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhbmltYXRlKCk7XHJcbiAgICB9LCBbY2hpbGQsIGNsaWVudHNdKTtcclxuXHJcbiAgICBsZXQgc2VuZENoYXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzb2NrZXQuZW1pdChcInNlbmRDaGF0XCIsIGNoaWxkMi52YWx1ZSk7XHJcbiAgICAgICAgY2hpbGQyLnZhbHVlID0gXCJcIjtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxDcmVhdGVVSSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXsocmVmKSA9PiB7IHNldENoaWxkKHJlZikgfSAvKiAqL30+PC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9