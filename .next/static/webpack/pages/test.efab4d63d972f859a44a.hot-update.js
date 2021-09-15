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

    function makeCube() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "rgb(0,0,0)";
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "unkown";
      var group = new three__WEBPACK_IMPORTED_MODULE_14__.Group();
      var geometry = new three__WEBPACK_IMPORTED_MODULE_14__.BoxGeometry(1, 1, 1);
      var material = new three__WEBPACK_IMPORTED_MODULE_14__.MeshLambertMaterial({
        color: new three__WEBPACK_IMPORTED_MODULE_14__.Color(color),
        emissive: new three__WEBPACK_IMPORTED_MODULE_14__.Color(color)
      });
      var cube = new three__WEBPACK_IMPORTED_MODULE_14__.Mesh(geometry, material);
      group.add(cube);
      var cyclinder = new three__WEBPACK_IMPORTED_MODULE_14__.CylinderGeometry(0.3, 0.3, 0.6, 30);
      var material2 = new three__WEBPACK_IMPORTED_MODULE_14__.MeshLambertMaterial({
        color: "#000000"
      });
      var cylinderBuild = new three__WEBPACK_IMPORTED_MODULE_14__.Mesh(cyclinder, material2);
      cylinderBuild.rotateX(Math.PI / 2 + Math.PI);
      cylinderBuild.position.set(0, 0, -0.6);
      group.add(cylinderBuild);
      (0,_components_gameFundalmentals_nametag__WEBPACK_IMPORTED_MODULE_6__.generateLabel)(name, group);
      SceneToGet.add(group);
      group.name = name;
      return group;
    }

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
                players["".concat(id)] = cube;

              case 6:
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
                players["".concat(id)] = cube;

              case 8:
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
                _context3.next = 14;
                break;

              case 8:
                newcube = new _components_gameFundalmentals_planeHandler_MainPlane_ts__WEBPACK_IMPORTED_MODULE_13__.MakePlane(SceneToGet);
                _context3.next = 11;
                return newcube.loadFiles();

              case 11:
                _cube = newcube.CreateGroupAndPos();
                addtoGameFeed(data === null || data === void 0 ? void 0 : data.name, "Joined the game!");
                players["".concat(id)] = _cube;

              case 14:
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
        lineNumber: 242,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: function ref(_ref5) {
        setChild(_ref5);
      }
      /* */

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 235,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcyJdLCJuYW1lcyI6WyJTdGF0cyIsInJlcXVpcmUiLCJyZW5kZXIiLCJ1c2VTdGF0ZSIsImNoaWxkIiwic2V0Q2hpbGQiLCJnYW1lRXZlbnREYXRhIiwic2V0R2FtZUV2ZW50RGF0YSIsImRheSIsInNldERheSIsImNoaWxkMiIsInNldENoaWxkMiIsInNvY2tldCIsInVzZUFwcENvbnRleHQiLCJyZWNpZXZlZFNlZWQiLCJzZXRTZWVkIiwicmVuZGVyZWQiLCJzZXRSZW5kZXJlZCIsImNsaWVudHMiLCJzZXRDbGllbnRzIiwicGVyc29uRGF0YSIsInNldFBlcnNvbmFsRGF0YSIsIlZlY3RvcjMiLCJ0b0FycmF5IiwicG9zaXRvbiIsInNldFBvc2l0aW9uIiwic3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24iLCJvbmNlIiwic2VlZCIsImNsaWVudCIsImRhdGEiLCJ1c2VFZmZlY3QiLCJtYWluR2FtZSIsImpvaW5HYW1lIiwidXNlckRhdGEiLCJwcmVMb2FkQWxsTW9kZWxzIiwic3RhdHMiLCJzaG93UGFuZWwiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvbSIsIlNjZW5lVG9HZXQiLCJTY2VuZSIsIlJlbmRlcnMiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJvZ2FyaXRobWljRGVwdGhCdWZmZXIiLCJzZXRDbGVhckNvbG9yIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRvbUVsZW1lbnQiLCJDdXJyZW50U2NlbmUiLCJDYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbldpbmRvd1Jlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJnZW5lcmF0ZU1haW5TY2VuZSIsInJlcXVlc3RQb2ludGVyTG9jayIsIkNvbnRyb2xFdmVudExpc3RlbmVyIiwicGxheWVycyIsIm1ha2VDdWJlIiwiY29sb3IiLCJuYW1lIiwiZ3JvdXAiLCJUSFJFRSIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJlbWlzc2l2ZSIsImN1YmUiLCJhZGQiLCJjeWNsaW5kZXIiLCJtYXRlcmlhbDIiLCJjeWxpbmRlckJ1aWxkIiwicm90YXRlWCIsIk1hdGgiLCJQSSIsInBvc2l0aW9uIiwic2V0IiwiZ2VuZXJhdGVMYWJlbCIsInByZXZEYXRhIiwiYWRkdG9HYW1lRmVlZCIsImV2ZW50IiwiTmV3R2FtZUV2ZW50QXJyYXkiLCJ1bnNoaWZ0IiwiZm9yRWFjaCIsImUiLCJuZXdjdWJlIiwiTWFrZVBsYW5lIiwibG9hZEZpbGVzIiwiQ3JlYXRlR3JvdXBBbmRQb3MiLCJpZCIsIm9uIiwiaG93IiwicmVtb3ZlIiwibGlzdGVuVG9FdmVudCIsInBvcyIsInJvdCIsInJvdGF0aW9uIiwiX3giLCJfeSIsIl96IiwieCIsInkiLCJ6IiwidGV4dCIsInNldEludGVydmFsIiwicGFyZW50IiwidW5kZWZpbmVkIiwiZW1pdCIsImFuaW1hdGUiLCJiZWdpbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZVJlbmRlckN5Y2xlIiwicm91bmQiLCJlbmQiLCJzZW5kQ2hhdCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJ3aWR0aCIsImhlaWdodCIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDREQUFELENBQW5COztBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDSEMsK0NBQVEsRUFETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBQUEsbUJBRWFGLCtDQUFRLENBQUMsRUFBRCxDQUZyQjtBQUFBLE1BRXRCRyxh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cUJBQUssQ0FBQ29GLEdBQU47O0FBZFU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBUEwsT0FBTztBQUFBO0FBQUE7QUFBQSxPQUFYOztBQWlCQUEsV0FBTztBQUNWLEdBdExRLEVBc0xOLENBQUMvRyxLQUFELEVBQVFjLE9BQVIsQ0F0TE0sQ0FBVDs7QUF3TEEsTUFBSXVHLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUM5QixDQUFELEVBQU87QUFDbEJBLEtBQUMsQ0FBQytCLGNBQUY7QUFDQTlHLFVBQU0sQ0FBQ3NHLElBQVAsQ0FBWSxVQUFaLEVBQXdCeEcsTUFBTSxDQUFDaUgsS0FBL0I7QUFDQWpILFVBQU0sQ0FBQ2lILEtBQVAsR0FBZSxFQUFmO0FBQ0gsR0FKRDs7QUFNQSxzQkFDSTtBQUFBLDRCQUNJO0FBQ0ksV0FBSyxFQUFFO0FBQ0hDLGFBQUssRUFBRSxPQURKO0FBRUhDLGNBQU0sRUFBRSxPQUZMO0FBR0gzQyxnQkFBUSxFQUFFO0FBSFAsT0FEWDtBQUFBLDZCQU1JLDhEQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFVSTtBQUFLLFNBQUcsRUFBRSxhQUFDNEMsS0FBRCxFQUFTO0FBQUV6SCxnQkFBUSxDQUFDeUgsS0FBRCxDQUFSO0FBQWU7QUFBQzs7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBY0g7O0dBbE91QjVILE07VUFNTFcsOEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC5lZmFiNGQ2M2Q5NzJmODU5YTQ0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBlcnNwZWN0aXZlQ2FtZXJhLCBTY2VuZSwgVmVjdG9yMywgV2ViR0xSZW5kZXJlciB9IGZyb20gXCJ0aHJlZVwiO1xyXG52YXIgU3RhdHMgPSByZXF1aXJlKFwic3RhdHMuanNcIik7XHJcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250ZXh0L3NvY2tldGlvQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZUxhYmVsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvbmFtZXRhZ1wiO1xyXG5pbXBvcnQge1xyXG4gICAgc3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24sXHJcbiAgICBsaXN0ZW5Ub0V2ZW50LFxyXG4gICAgam9pbkdhbWUsXHJcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29yZS1BUEkvQ29ubmVjdEFQSVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVSZW5kZXJDeWNsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvcmUtQVBJL1JlbmRlcmluZ0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVNYWluU2NlbmUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TY2VuZXMvTWFpblNjZW5lSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBDcmVhdGVVSSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVVSS9lbnRyeVBvaW50LnRzeFwiO1xyXG5pbXBvcnQgeyBDb250cm9sRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IHByZUxvYWRBbGxNb2RlbHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3JlLUFQSS8zZE1vZGVsSGFuZGxlcnMvR0xCTG9hZGVyXCI7XHJcbmltcG9ydCB7IE1ha2VQbGFuZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL3BsYW5lSGFuZGxlci9NYWluUGxhbmUudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IFtjaGlsZCwgc2V0Q2hpbGRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtnYW1lRXZlbnREYXRhLCBzZXRHYW1lRXZlbnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbZGF5LCBzZXREYXldID0gdXNlU3RhdGUoXCJub3QgZGF5XCIpO1xyXG4gICAgY29uc3QgW2NoaWxkMiwgc2V0Q2hpbGQyXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBzb2NrZXQgPSB1c2VBcHBDb250ZXh0KCk7XHJcbiAgICBjb25zdCBbcmVjaWV2ZWRTZWVkLCBzZXRTZWVkXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcmVuZGVyZWQsIHNldFJlbmRlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjbGllbnRzLCBzZXRDbGllbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwZXJzb25EYXRhLCBzZXRQZXJzb25hbERhdGFdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBbcG9zaXRvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUobmV3IFZlY3RvcjMoKS50b0FycmF5KCkpO1xyXG5cclxuICAgIHN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uKHNvY2tldCk7XHJcblxyXG4gICAgc29ja2V0Lm9uY2UoXCJ3ZWxjb21lXCIsIChzZWVkLCBjbGllbnQsIGRhdGEpID0+IHtcclxuICAgICAgICBzZXRTZWVkKHNlZWQpO1xyXG4gICAgICAgIHNldENsaWVudHMoY2xpZW50KTtcclxuICAgICAgICBzZXRQZXJzb25hbERhdGEoZGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdHlwZW9mIGNoaWxkID09PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgICAgIHJlbmRlcmVkID09PSB0cnVlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbm5lY3QgdG8gc2VydmVyIFxcXFxcclxuICAgICAgICBsZXQgbWFpbkdhbWUgPSBqb2luR2FtZShcIlRlc3RcIiwgXCJUZXN0XCIpXHJcbiAgICAgICAgc2V0U2VlZChtYWluR2FtZS5zZWVkKTtcclxuICAgICAgICBzZXRDbGllbnRzKG1haW5HYW1lLmNsaWVudHMpO1xyXG4gICAgICAgIHNldFBlcnNvbmFsRGF0YShtYWluR2FtZS51c2VyRGF0YSk7XHJcblxyXG4gICAgICAgIHByZUxvYWRBbGxNb2RlbHMoKVxyXG5cclxuICAgICAgICBzZXRSZW5kZXJlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRzID0gbmV3IFN0YXRzKCk7XHJcbiAgICAgICAgc3RhdHMuc2hvd1BhbmVsKDApO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhdHMuZG9tKTtcclxuXHJcbiAgICAgICAgbGV0IFNjZW5lVG9HZXQgPSBuZXcgU2NlbmUoKTtcclxuICAgICAgICBsZXQgUmVuZGVycyA9IG5ldyBXZWJHTFJlbmRlcmVyKHtcclxuICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgICAgICAgICBhbHBoYTogdHJ1ZSxcclxuICAgICAgICAgICAgb2dhcml0aG1pY0RlcHRoQnVmZmVyOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBSZW5kZXJzLnNldENsZWFyQ29sb3IoXCIjODdjZWViXCIsIDEpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIFJlbmRlcnMuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICBjaGlsZC5hcHBlbmRDaGlsZChSZW5kZXJzLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgICAgICBsZXQgQ3VycmVudFNjZW5lID0gXCJNYWluXCI7XHJcblxyXG4gICAgICAgIHZhciBDYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICAgICAgICAgIDc1LFxyXG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgMC4xLFxyXG4gICAgICAgICAgICAxMDAwMDAwMDBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcclxuICAgICAgICAgICAgQ2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgICBDYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgICAgICAgICAgUmVuZGVycy5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2VuZXJhdGVNYWluU2NlbmUoXHJcbiAgICAgICAgICAgIFNjZW5lVG9HZXQsXHJcbiAgICAgICAgICAgIFJlbmRlcnMsXHJcbiAgICAgICAgICAgIGRvY3VtZW50LFxyXG4gICAgICAgICAgICByZWNpZXZlZFNlZWQsXHJcbiAgICAgICAgICAgIGNoaWxkMixcclxuICAgICAgICAgICAgQ2FtZXJhXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgUmVuZGVycy5kb21FbGVtZW50LnJlcXVlc3RQb2ludGVyTG9jaygpO1xyXG4gICAgICAgIENvbnRyb2xFdmVudExpc3RlbmVyKGRvY3VtZW50LCBjaGlsZDIpO1xyXG5cclxuICAgICAgICBsZXQgcGxheWVycyA9IFtdO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBtYWtlQ3ViZShjb2xvciA9IFwicmdiKDAsMCwwKVwiLCBuYW1lID0gXCJ1bmtvd25cIikge1xyXG4gICAgICAgICAgICBjb25zdCBncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xyXG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAxLCAxKTtcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKGNvbG9yKSxcclxuICAgICAgICAgICAgICAgIGVtaXNzaXZlOiBuZXcgVEhSRUUuQ29sb3IoY29sb3IpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIGdyb3VwLmFkZChjdWJlKTtcclxuICAgICAgICAgICAgY29uc3QgY3ljbGluZGVyID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC4zLCAwLjMsIDAuNiwgMzApO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbDIgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjeWxpbmRlckJ1aWxkID0gbmV3IFRIUkVFLk1lc2goY3ljbGluZGVyLCBtYXRlcmlhbDIpO1xyXG4gICAgICAgICAgICBjeWxpbmRlckJ1aWxkLnJvdGF0ZVgoTWF0aC5QSSAvIDIgKyBNYXRoLlBJKTtcclxuICAgICAgICAgICAgY3lsaW5kZXJCdWlsZC5wb3NpdGlvbi5zZXQoMCwgMCwgLTAuNik7XHJcbiAgICAgICAgICAgIGdyb3VwLmFkZChjeWxpbmRlckJ1aWxkKTtcclxuXHJcbiAgICAgICAgICAgIGdlbmVyYXRlTGFiZWwobmFtZSwgZ3JvdXApO1xyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LmFkZChncm91cCk7XHJcbiAgICAgICAgICAgIGdyb3VwLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcHJldkRhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGFkZHRvR2FtZUZlZWQgPSAobmFtZSA9IFwiVW5rb3duXCIsIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBOZXdHYW1lRXZlbnRBcnJheSA9IFsuLi5nYW1lRXZlbnREYXRhXTtcclxuICAgICAgICAgICAgTmV3R2FtZUV2ZW50QXJyYXkudW5zaGlmdCh7IG5hbWUsIGV2ZW50IH0pO1xyXG4gICAgICAgICAgICBkZWxldGUgTmV3R2FtZUV2ZW50QXJyYXlbMTBdO1xyXG4gICAgICAgICAgICBkZWxldGUgTmV3R2FtZUV2ZW50QXJyYXlbMTFdO1xyXG4gICAgICAgICAgICBzZXRHYW1lRXZlbnREYXRhKFsuLi5OZXdHYW1lRXZlbnRBcnJheV0pO1xyXG4gICAgICAgICAgICBwcmV2RGF0YSA9IE5ld0dhbWVFdmVudEFycmF5O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNsaWVudHMuZm9yRWFjaChhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmV3Y3ViZSA9IG5ldyBNYWtlUGxhbmUoU2NlbmVUb0dldClcclxuICAgICAgICAgICAgYXdhaXQgbmV3Y3ViZS5sb2FkRmlsZXMoKVxyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IG5ld2N1YmUuQ3JlYXRlR3JvdXBBbmRQb3MoKVxyXG4gICAgICAgICAgICBhZGR0b0dhbWVGZWVkKGRhdGE/Lm5hbWUsIFwiSm9pbmVkIHRoZSBnYW1lIVwiKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcGxheWVyc1tgJHtpZH1gXSA9IGN1YmU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNvY2tldC5vbihcIk5ld1BsYXllclwiLCBhc3luYyAoaWQsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlkID09PSBzb2NrZXQuaWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBuZXdjdWJlID0gbmV3IE1ha2VQbGFuZShTY2VuZVRvR2V0KVxyXG4gICAgICAgICAgICBhd2FpdCBuZXdjdWJlLmxvYWRGaWxlcygpXHJcbiAgICAgICAgICAgIGxldCBjdWJlID0gbmV3Y3ViZS5DcmVhdGVHcm91cEFuZFBvcygpXHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoZGF0YT8ubmFtZSwgXCJKb2luZWQgdGhlIGdhbWUhXCIpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBwbGF5ZXJzW2Ake2lkfWBdID0gY3ViZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiTG9zdFBMYXllclwiLCAoaWQsIGhvdywgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IHBsYXllcnNbYCR7aWR9YF07XHJcbiAgICAgICAgICAgIFNjZW5lVG9HZXQucmVtb3ZlKGN1YmUpO1xyXG4gICAgICAgICAgICBkZWxldGUgcGxheWVyc1tgJHtpZH1gXTtcclxuICAgICAgICAgICAgYWRkdG9HYW1lRmVlZChcclxuICAgICAgICAgICAgICAgIGRhdGE/Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICBob3cgPT09IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA/IFwiV2FzIHJlbW92ZWQgZnJvbSB0aGUgZ2FtZSBmb3IgYmVpbmcgaW5hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJMZWZ0IHRoZSBnYW1lIVwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxpc3RlblRvRXZlbnQoXCJQbGF5ZXJMb2NhdGlvblVwZGF0ZVwiLGFzeW5jIChpZCwgcG9zLCByb3QsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlkID09PSBzb2NrZXQuaWQpIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBwbGF5ZXJzW2Ake2lkfWBdO1xyXG4gICAgICAgICAgICBpZiAoY3ViZSkge1xyXG4gICAgICAgICAgICAgICAgY3ViZS5yb3RhdGlvbi5zZXQocm90Ll94LCByb3QuX3ksIHJvdC5feik7XHJcbiAgICAgICAgICAgICAgICBjdWJlLnBvc2l0aW9uLnNldChwb3MueCwgcG9zLnksIHBvcy56KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdjdWJlID0gbmV3IE1ha2VQbGFuZShTY2VuZVRvR2V0KVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgbmV3Y3ViZS5sb2FkRmlsZXMoKVxyXG4gICAgICAgICAgICAgICAgbGV0IGN1YmUgPSBuZXdjdWJlLkNyZWF0ZUdyb3VwQW5kUG9zKClcclxuICAgICAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoZGF0YT8ubmFtZSwgXCJKb2luZWQgdGhlIGdhbWUhXCIpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcGxheWVyc1tgJHtpZH1gXSA9IGN1YmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzb2NrZXQub24oXCJOZXdDaGF0XCIsIChkYXRhLCB0ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoZGF0YS5uYW1lLCB0ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChDYW1lcmE/LnBhcmVudD8ucG9zaXRpb24gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcIkxvY2F0aW9uVXBkYXRlXCIsIENhbWVyYS5wYXJlbnQucG9zaXRpb24sIENhbWVyYS5wYXJlbnQucm90YXRpb24pO1xyXG4gICAgICAgIH0sIDEwMDAgLyAzMCk7XHJcblxyXG4gICAgICAgIHZhciBhbmltYXRlID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdGF0cy5iZWdpbigpO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgYWxsIG1vdmluZyBwYXJ0c1xyXG4gICAgICAgICAgICB1cGRhdGVSZW5kZXJDeWNsZShDdXJyZW50U2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgc2V0UG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICBgWDogJHtNYXRoLnJvdW5kKENhbWVyYS5wb3NpdGlvbi54KX19IFk6ICR7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICBDYW1lcmEucG9zaXRpb24ueVxyXG4gICAgICAgICAgICAgICAgKX19IFo6ICR7TWF0aC5yb3VuZChDYW1lcmEucG9zaXRpb24ueil9fWBcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIFJlbmRlcnMucmVuZGVyKFNjZW5lVG9HZXQsIENhbWVyYSk7XHJcbiAgICAgICAgICAgIHN0YXRzLmVuZCgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFuaW1hdGUoKTtcclxuICAgIH0sIFtjaGlsZCwgY2xpZW50c10pO1xyXG5cclxuICAgIGxldCBzZW5kQ2hhdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNvY2tldC5lbWl0KFwic2VuZENoYXRcIiwgY2hpbGQyLnZhbHVlKTtcclxuICAgICAgICBjaGlsZDIudmFsdWUgPSBcIlwiO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZVVJIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiByZWY9eyhyZWYpID0+IHsgc2V0Q2hpbGQocmVmKSB9IC8qICovfT48L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=