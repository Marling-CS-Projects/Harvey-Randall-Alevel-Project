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

    clients.forEach(function (e) {
      var cube = makeCube(e.color, e.name);
      players["".concat(e)] = cube;
    });
    socket.on("NewPlayer", /*#__PURE__*/function () {
      var _ref = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(id, data) {
        var newcube, cube;
        return H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(id === socket.id)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                newcube = new _components_gameFundalmentals_planeHandler_MainPlane_ts__WEBPACK_IMPORTED_MODULE_13__.MakePlane(SceneToGet);
                _context.next = 5;
                return newcube.loadFiles();

              case 5:
                cube = newcube.CreateGroupAndPos();
                addtoGameFeed(data === null || data === void 0 ? void 0 : data.name, "Joined the game!");
                players["".concat(id)] = cube;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
    socket.on("LostPLayer", function (id, how, data) {
      var cube = players["".concat(id)];
      SceneToGet.remove(cube);
      delete players["".concat(id)];
      addtoGameFeed(data === null || data === void 0 ? void 0 : data.name, how === true ? "Was removed from the game for being inactive" : "Left the game!");
    });
    (0,_components_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_7__.listenToEvent)("PlayerLocationUpdate", function (id, pos, rot, data) {
      if (id === socket.id) return;
      var cube = players["".concat(id)];

      if (cube) {
        cube.rotation.set(rot._x, rot._y, rot._z);
        cube.position.set(pos.x, pos.y, pos.z);
      } else {
        var _cube = makeCube(data === null || data === void 0 ? void 0 : data.color, data === null || data === void 0 ? void 0 : data.name);

        players["".concat(id)] = _cube;
      }
    });
    socket.on("NewChat", function (data, text) {
      addtoGameFeed(data.name, text);
    });
    setInterval(function () {
      var _Camera$parent;

      if ((Camera === null || Camera === void 0 ? void 0 : (_Camera$parent = Camera.parent) === null || _Camera$parent === void 0 ? void 0 : _Camera$parent.position) === undefined) return;
      socket.emit("LocationUpdate", Camera.parent.position, Camera.parent.rotation);
    }, 1000 / 30);

    var animate = /*#__PURE__*/function () {
      var _ref2 = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        return H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                stats.begin();
                requestAnimationFrame(animate); // Update all moving parts

                (0,_components_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_8__.updateRenderCycle)(CurrentScene);
                setPosition("X: ".concat(Math.round(Camera.position.x), "} Y: ").concat(Math.round(Camera.position.y), "} Z: ").concat(Math.round(Camera.position.z), "}"));
                Renders.render(SceneToGet, Camera);
                stats.end();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function animate() {
        return _ref2.apply(this, arguments);
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
        lineNumber: 231,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: function ref(_ref3) {
        setChild(_ref3);
      }
      /* */

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 224,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcyJdLCJuYW1lcyI6WyJTdGF0cyIsInJlcXVpcmUiLCJyZW5kZXIiLCJ1c2VTdGF0ZSIsImNoaWxkIiwic2V0Q2hpbGQiLCJnYW1lRXZlbnREYXRhIiwic2V0R2FtZUV2ZW50RGF0YSIsImRheSIsInNldERheSIsImNoaWxkMiIsInNldENoaWxkMiIsInNvY2tldCIsInVzZUFwcENvbnRleHQiLCJyZWNpZXZlZFNlZWQiLCJzZXRTZWVkIiwicmVuZGVyZWQiLCJzZXRSZW5kZXJlZCIsImNsaWVudHMiLCJzZXRDbGllbnRzIiwicGVyc29uRGF0YSIsInNldFBlcnNvbmFsRGF0YSIsIlZlY3RvcjMiLCJ0b0FycmF5IiwicG9zaXRvbiIsInNldFBvc2l0aW9uIiwic3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24iLCJvbmNlIiwic2VlZCIsImNsaWVudCIsImRhdGEiLCJ1c2VFZmZlY3QiLCJtYWluR2FtZSIsImpvaW5HYW1lIiwidXNlckRhdGEiLCJwcmVMb2FkQWxsTW9kZWxzIiwic3RhdHMiLCJzaG93UGFuZWwiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvbSIsIlNjZW5lVG9HZXQiLCJTY2VuZSIsIlJlbmRlcnMiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJvZ2FyaXRobWljRGVwdGhCdWZmZXIiLCJzZXRDbGVhckNvbG9yIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRvbUVsZW1lbnQiLCJDdXJyZW50U2NlbmUiLCJDYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbldpbmRvd1Jlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJnZW5lcmF0ZU1haW5TY2VuZSIsInJlcXVlc3RQb2ludGVyTG9jayIsIkNvbnRyb2xFdmVudExpc3RlbmVyIiwicGxheWVycyIsIm1ha2VDdWJlIiwiY29sb3IiLCJuYW1lIiwiZ3JvdXAiLCJUSFJFRSIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJlbWlzc2l2ZSIsImN1YmUiLCJhZGQiLCJjeWNsaW5kZXIiLCJtYXRlcmlhbDIiLCJjeWxpbmRlckJ1aWxkIiwicm90YXRlWCIsIk1hdGgiLCJQSSIsInBvc2l0aW9uIiwic2V0IiwiZ2VuZXJhdGVMYWJlbCIsInByZXZEYXRhIiwiYWRkdG9HYW1lRmVlZCIsImV2ZW50IiwiTmV3R2FtZUV2ZW50QXJyYXkiLCJ1bnNoaWZ0IiwiZm9yRWFjaCIsImUiLCJvbiIsImlkIiwibmV3Y3ViZSIsIk1ha2VQbGFuZSIsImxvYWRGaWxlcyIsIkNyZWF0ZUdyb3VwQW5kUG9zIiwiaG93IiwicmVtb3ZlIiwibGlzdGVuVG9FdmVudCIsInBvcyIsInJvdCIsInJvdGF0aW9uIiwiX3giLCJfeSIsIl96IiwieCIsInkiLCJ6IiwidGV4dCIsInNldEludGVydmFsIiwicGFyZW50IiwidW5kZWZpbmVkIiwiZW1pdCIsImFuaW1hdGUiLCJiZWdpbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZVJlbmRlckN5Y2xlIiwicm91bmQiLCJlbmQiLCJzZW5kQ2hhdCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJ3aWR0aCIsImhlaWdodCIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDREQUFELENBQW5COztBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDSEMsK0NBQVEsRUFETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBQUEsbUJBRWFGLCtDQUFRLENBQUMsRUFBRCxDQUZyQjtBQUFBLE1BRXRCRyxh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QUVIQyxjQUFNLEVBQUUsT0FGTDtBQUdIM0MsZ0JBQVEsRUFBRTtBQUhQLE9BRFg7QUFBQSw2QkFNSSw4REFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBVUk7QUFBSyxTQUFHLEVBQUUsYUFBQzRDLEtBQUQsRUFBUztBQUFFekgsZ0JBQVEsQ0FBQ3lILEtBQUQsQ0FBUjtBQUFlO0FBQUM7O0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNIOztHQXZOdUI1SCxNO1VBTUxXLDhFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QuMjkxMTkwMDdlNTRjMGY5YTkyYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQZXJzcGVjdGl2ZUNhbWVyYSwgU2NlbmUsIFZlY3RvcjMsIFdlYkdMUmVuZGVyZXIgfSBmcm9tIFwidGhyZWVcIjtcclxudmFyIFN0YXRzID0gcmVxdWlyZShcInN0YXRzLmpzXCIpO1xyXG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGV4dC9zb2NrZXRpb0NvbnRleHRcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVMYWJlbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL25hbWV0YWdcIjtcclxuaW1wb3J0IHtcclxuICAgIHN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uLFxyXG4gICAgbGlzdGVuVG9FdmVudCxcclxuICAgIGpvaW5HYW1lLFxyXG59IGZyb20gXCIuLi9jb21wb25lbnRzL0NvcmUtQVBJL0Nvbm5lY3RBUElcIjtcclxuaW1wb3J0IHsgdXBkYXRlUmVuZGVyQ3ljbGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3JlLUFQSS9SZW5kZXJpbmdIYW5kbGVyXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlTWFpblNjZW5lIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2NlbmVzL01haW5TY2VuZUhhbmRsZXJcIjtcclxuaW1wb3J0IHsgQ3JlYXRlVUkgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lVUkvZW50cnlQb2ludC50c3hcIjtcclxuaW1wb3J0IHsgQ29udHJvbEV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBwcmVMb2FkQWxsTW9kZWxzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL0dMQkxvYWRlclwiO1xyXG5pbXBvcnQgeyBNYWtlUGxhbmUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9wbGFuZUhhbmRsZXIvTWFpblBsYW5lLnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBbY2hpbGQsIHNldENoaWxkXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZ2FtZUV2ZW50RGF0YSwgc2V0R2FtZUV2ZW50RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2RheSwgc2V0RGF5XSA9IHVzZVN0YXRlKFwibm90IGRheVwiKTtcclxuICAgIGNvbnN0IFtjaGlsZDIsIHNldENoaWxkMl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3Qgc29ja2V0ID0gdXNlQXBwQ29udGV4dCgpO1xyXG4gICAgY29uc3QgW3JlY2lldmVkU2VlZCwgc2V0U2VlZF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3JlbmRlcmVkLCBzZXRSZW5kZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2xpZW50cywgc2V0Q2xpZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcGVyc29uRGF0YSwgc2V0UGVyc29uYWxEYXRhXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgW3Bvc2l0b24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKG5ldyBWZWN0b3IzKCkudG9BcnJheSgpKTtcclxuXHJcbiAgICBzdGFydFNldmVyQ2xpZW50Q29tbXVuaWNhdGlvbihzb2NrZXQpO1xyXG5cclxuICAgIHNvY2tldC5vbmNlKFwid2VsY29tZVwiLCAoc2VlZCwgY2xpZW50LCBkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0U2VlZChzZWVkKTtcclxuICAgICAgICBzZXRDbGllbnRzKGNsaWVudCk7XHJcbiAgICAgICAgc2V0UGVyc29uYWxEYXRhKGRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHR5cGVvZiBjaGlsZCA9PT0gXCJ1bmRlZmluZWRcIiB8fFxyXG4gICAgICAgICAgICByZW5kZXJlZCA9PT0gdHJ1ZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb25uZWN0IHRvIHNlcnZlciBcXFxcXHJcbiAgICAgICAgbGV0IG1haW5HYW1lID0gam9pbkdhbWUoXCJUZXN0XCIsIFwiVGVzdFwiKVxyXG4gICAgICAgIHNldFNlZWQobWFpbkdhbWUuc2VlZCk7XHJcbiAgICAgICAgc2V0Q2xpZW50cyhtYWluR2FtZS5jbGllbnRzKTtcclxuICAgICAgICBzZXRQZXJzb25hbERhdGEobWFpbkdhbWUudXNlckRhdGEpO1xyXG5cclxuICAgICAgICBwcmVMb2FkQWxsTW9kZWxzKClcclxuXHJcbiAgICAgICAgc2V0UmVuZGVyZWQodHJ1ZSk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0cyA9IG5ldyBTdGF0cygpO1xyXG4gICAgICAgIHN0YXRzLnNob3dQYW5lbCgwKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXRzLmRvbSk7XHJcblxyXG4gICAgICAgIGxldCBTY2VuZVRvR2V0ID0gbmV3IFNjZW5lKCk7XHJcbiAgICAgICAgbGV0IFJlbmRlcnMgPSBuZXcgV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgICAgICAgYWxwaGE6IHRydWUsXHJcbiAgICAgICAgICAgIG9nYXJpdGhtaWNEZXB0aEJ1ZmZlcjogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUmVuZGVycy5zZXRDbGVhckNvbG9yKFwiIzg3Y2VlYlwiLCAxKTtcclxuXHJcblxyXG5cclxuICAgICAgICBSZW5kZXJzLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgY2hpbGQuYXBwZW5kQ2hpbGQoUmVuZGVycy5kb21FbGVtZW50KTtcclxuXHJcbiAgICAgICAgbGV0IEN1cnJlbnRTY2VuZSA9IFwiTWFpblwiO1xyXG5cclxuICAgICAgICB2YXIgQ2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKFxyXG4gICAgICAgICAgICA3NSxcclxuICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgIDAuMSxcclxuICAgICAgICAgICAgMTAwMDAwMDAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25XaW5kb3dSZXNpemUsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XHJcbiAgICAgICAgICAgIENhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICAgICAgQ2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICAgICAgICAgIFJlbmRlcnMuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdlbmVyYXRlTWFpblNjZW5lKFxyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LFxyXG4gICAgICAgICAgICBSZW5kZXJzLFxyXG4gICAgICAgICAgICBkb2N1bWVudCxcclxuICAgICAgICAgICAgcmVjaWV2ZWRTZWVkLFxyXG4gICAgICAgICAgICBjaGlsZDIsXHJcbiAgICAgICAgICAgIENhbWVyYVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIFJlbmRlcnMuZG9tRWxlbWVudC5yZXF1ZXN0UG9pbnRlckxvY2soKTtcclxuICAgICAgICBDb250cm9sRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgY2hpbGQyKTtcclxuXHJcbiAgICAgICAgbGV0IHBsYXllcnMgPSBbXTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWFrZUN1YmUoY29sb3IgPSBcInJnYigwLDAsMClcIiwgbmFtZSA9IFwidW5rb3duXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcclxuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMSwgMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihjb2xvciksXHJcbiAgICAgICAgICAgICAgICBlbWlzc2l2ZTogbmV3IFRIUkVFLkNvbG9yKGNvbG9yKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1YmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICBncm91cC5hZGQoY3ViZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN5Y2xpbmRlciA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAuMywgMC4zLCAwLjYsIDMwKTtcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwyID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgY3lsaW5kZXJCdWlsZCA9IG5ldyBUSFJFRS5NZXNoKGN5Y2xpbmRlciwgbWF0ZXJpYWwyKTtcclxuICAgICAgICAgICAgY3lsaW5kZXJCdWlsZC5yb3RhdGVYKE1hdGguUEkgLyAyICsgTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIGN5bGluZGVyQnVpbGQucG9zaXRpb24uc2V0KDAsIDAsIC0wLjYpO1xyXG4gICAgICAgICAgICBncm91cC5hZGQoY3lsaW5kZXJCdWlsZCk7XHJcblxyXG4gICAgICAgICAgICBnZW5lcmF0ZUxhYmVsKG5hbWUsIGdyb3VwKTtcclxuICAgICAgICAgICAgU2NlbmVUb0dldC5hZGQoZ3JvdXApO1xyXG4gICAgICAgICAgICBncm91cC5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByZXZEYXRhID0gW107XHJcblxyXG4gICAgICAgIGxldCBhZGR0b0dhbWVGZWVkID0gKG5hbWUgPSBcIlVua293blwiLCBldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgTmV3R2FtZUV2ZW50QXJyYXkgPSBbLi4uZ2FtZUV2ZW50RGF0YV07XHJcbiAgICAgICAgICAgIE5ld0dhbWVFdmVudEFycmF5LnVuc2hpZnQoeyBuYW1lLCBldmVudCB9KTtcclxuICAgICAgICAgICAgZGVsZXRlIE5ld0dhbWVFdmVudEFycmF5WzEwXTtcclxuICAgICAgICAgICAgZGVsZXRlIE5ld0dhbWVFdmVudEFycmF5WzExXTtcclxuICAgICAgICAgICAgc2V0R2FtZUV2ZW50RGF0YShbLi4uTmV3R2FtZUV2ZW50QXJyYXldKTtcclxuICAgICAgICAgICAgcHJldkRhdGEgPSBOZXdHYW1lRXZlbnRBcnJheTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjbGllbnRzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBtYWtlQ3ViZShlLmNvbG9yLCBlLm5hbWUpO1xyXG4gICAgICAgICAgICBwbGF5ZXJzW2Ake2V9YF0gPSBjdWJlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oXCJOZXdQbGF5ZXJcIiwgYXN5bmMgKGlkLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlkID09PSBzb2NrZXQuaWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBuZXdjdWJlID0gbmV3IE1ha2VQbGFuZShTY2VuZVRvR2V0KVxyXG4gICAgICAgICAgICBhd2FpdCBuZXdjdWJlLmxvYWRGaWxlcygpXHJcbiAgICAgICAgICAgIGxldCBjdWJlID0gbmV3Y3ViZS5DcmVhdGVHcm91cEFuZFBvcygpXHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoZGF0YT8ubmFtZSwgXCJKb2luZWQgdGhlIGdhbWUhXCIpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBwbGF5ZXJzW2Ake2lkfWBdID0gY3ViZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiTG9zdFBMYXllclwiLCAoaWQsIGhvdywgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IHBsYXllcnNbYCR7aWR9YF07XHJcbiAgICAgICAgICAgIFNjZW5lVG9HZXQucmVtb3ZlKGN1YmUpO1xyXG4gICAgICAgICAgICBkZWxldGUgcGxheWVyc1tgJHtpZH1gXTtcclxuICAgICAgICAgICAgYWRkdG9HYW1lRmVlZChcclxuICAgICAgICAgICAgICAgIGRhdGE/Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICBob3cgPT09IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA/IFwiV2FzIHJlbW92ZWQgZnJvbSB0aGUgZ2FtZSBmb3IgYmVpbmcgaW5hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJMZWZ0IHRoZSBnYW1lIVwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxpc3RlblRvRXZlbnQoXCJQbGF5ZXJMb2NhdGlvblVwZGF0ZVwiLCAoaWQsIHBvcywgcm90LCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGlkID09PSBzb2NrZXQuaWQpIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBwbGF5ZXJzW2Ake2lkfWBdO1xyXG4gICAgICAgICAgICBpZiAoY3ViZSkge1xyXG4gICAgICAgICAgICAgICAgY3ViZS5yb3RhdGlvbi5zZXQocm90Ll94LCByb3QuX3ksIHJvdC5feik7XHJcbiAgICAgICAgICAgICAgICBjdWJlLnBvc2l0aW9uLnNldChwb3MueCwgcG9zLnksIHBvcy56KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdWJlID0gbWFrZUN1YmUoZGF0YT8uY29sb3IsIGRhdGE/Lm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHBsYXllcnNbYCR7aWR9YF0gPSBjdWJlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc29ja2V0Lm9uKFwiTmV3Q2hhdFwiLCAoZGF0YSwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICBhZGR0b0dhbWVGZWVkKGRhdGEubmFtZSwgdGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihDYW1lcmE/LnBhcmVudD8ucG9zaXRpb24gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcIkxvY2F0aW9uVXBkYXRlXCIsIENhbWVyYS5wYXJlbnQucG9zaXRpb24sIENhbWVyYS5wYXJlbnQucm90YXRpb24pO1xyXG4gICAgICAgIH0sIDEwMDAvMzApO1xyXG5cclxuICAgICAgICB2YXIgYW5pbWF0ZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3RhdHMuYmVnaW4oKTtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIGFsbCBtb3ZpbmcgcGFydHNcclxuICAgICAgICAgICAgdXBkYXRlUmVuZGVyQ3ljbGUoQ3VycmVudFNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgYFg6ICR7TWF0aC5yb3VuZChDYW1lcmEucG9zaXRpb24ueCl9fSBZOiAke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FtZXJhLnBvc2l0aW9uLnlcclxuICAgICAgICAgICAgICAgICl9fSBaOiAke01hdGgucm91bmQoQ2FtZXJhLnBvc2l0aW9uLnopfX1gXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBSZW5kZXJzLnJlbmRlcihTY2VuZVRvR2V0LCBDYW1lcmEpO1xyXG4gICAgICAgICAgICBzdGF0cy5lbmQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhbmltYXRlKCk7XHJcbiAgICB9LCBbY2hpbGQsIGNsaWVudHNdKTtcclxuXHJcbiAgICBsZXQgc2VuZENoYXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzb2NrZXQuZW1pdChcInNlbmRDaGF0XCIsIGNoaWxkMi52YWx1ZSk7XHJcbiAgICAgICAgY2hpbGQyLnZhbHVlID0gXCJcIjtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxDcmVhdGVVSSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXsocmVmKSA9PiB7IHNldENoaWxkKHJlZikgfSAvKiAqLyAgIH0+PC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9