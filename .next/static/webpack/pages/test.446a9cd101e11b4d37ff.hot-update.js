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
      var vector = new three__WEBPACK_IMPORTED_MODULE_14__.Vector3();
      Camera.getWorldPosition(vector);
      socket.emit("LocationUpdate", vector, Camera.rotation);
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
        lineNumber: 232,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: function ref(_ref3) {
        setChild(_ref3);
      }
      /* */

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 225,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcyJdLCJuYW1lcyI6WyJTdGF0cyIsInJlcXVpcmUiLCJyZW5kZXIiLCJ1c2VTdGF0ZSIsImNoaWxkIiwic2V0Q2hpbGQiLCJnYW1lRXZlbnREYXRhIiwic2V0R2FtZUV2ZW50RGF0YSIsImRheSIsInNldERheSIsImNoaWxkMiIsInNldENoaWxkMiIsInNvY2tldCIsInVzZUFwcENvbnRleHQiLCJyZWNpZXZlZFNlZWQiLCJzZXRTZWVkIiwicmVuZGVyZWQiLCJzZXRSZW5kZXJlZCIsImNsaWVudHMiLCJzZXRDbGllbnRzIiwicGVyc29uRGF0YSIsInNldFBlcnNvbmFsRGF0YSIsIlZlY3RvcjMiLCJ0b0FycmF5IiwicG9zaXRvbiIsInNldFBvc2l0aW9uIiwic3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24iLCJvbmNlIiwic2VlZCIsImNsaWVudCIsImRhdGEiLCJ1c2VFZmZlY3QiLCJtYWluR2FtZSIsImpvaW5HYW1lIiwidXNlckRhdGEiLCJwcmVMb2FkQWxsTW9kZWxzIiwic3RhdHMiLCJzaG93UGFuZWwiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvbSIsIlNjZW5lVG9HZXQiLCJTY2VuZSIsIlJlbmRlcnMiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJvZ2FyaXRobWljRGVwdGhCdWZmZXIiLCJzZXRDbGVhckNvbG9yIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRvbUVsZW1lbnQiLCJDdXJyZW50U2NlbmUiLCJDYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbldpbmRvd1Jlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJnZW5lcmF0ZU1haW5TY2VuZSIsInJlcXVlc3RQb2ludGVyTG9jayIsIkNvbnRyb2xFdmVudExpc3RlbmVyIiwicGxheWVycyIsIm1ha2VDdWJlIiwiY29sb3IiLCJuYW1lIiwiZ3JvdXAiLCJUSFJFRSIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJlbWlzc2l2ZSIsImN1YmUiLCJhZGQiLCJjeWNsaW5kZXIiLCJtYXRlcmlhbDIiLCJjeWxpbmRlckJ1aWxkIiwicm90YXRlWCIsIk1hdGgiLCJQSSIsInBvc2l0aW9uIiwic2V0IiwiZ2VuZXJhdGVMYWJlbCIsInByZXZEYXRhIiwiYWRkdG9HYW1lRmVlZCIsImV2ZW50IiwiTmV3R2FtZUV2ZW50QXJyYXkiLCJ1bnNoaWZ0IiwiZm9yRWFjaCIsImUiLCJvbiIsImlkIiwibmV3Y3ViZSIsIk1ha2VQbGFuZSIsImxvYWRGaWxlcyIsIkNyZWF0ZUdyb3VwQW5kUG9zIiwiaG93IiwicmVtb3ZlIiwibGlzdGVuVG9FdmVudCIsInBvcyIsInJvdCIsInJvdGF0aW9uIiwiX3giLCJfeSIsIl96IiwieCIsInkiLCJ6IiwidGV4dCIsInNldEludGVydmFsIiwidmVjdG9yIiwiZ2V0V29ybGRQb3NpdGlvbiIsImVtaXQiLCJhbmltYXRlIiwiYmVnaW4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGVSZW5kZXJDeWNsZSIsInJvdW5kIiwiZW5kIiwic2VuZENoYXQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwid2lkdGgiLCJoZWlnaHQiLCJyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQUlBLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0REFBRCxDQUFuQjs7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ0hDLCtDQUFRLEVBREw7QUFBQSxNQUN0QkMsS0FEc0I7QUFBQSxNQUNmQyxRQURlOztBQUFBLG1CQUVhRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGckI7QUFBQSxN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QUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFVSTtBQUFLLFNBQUcsRUFBRSxhQUFDNEMsS0FBRCxFQUFTO0FBQUV6SCxnQkFBUSxDQUFDeUgsS0FBRCxDQUFSO0FBQWU7QUFBQzs7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBY0g7O0dBeE51QjVILE07VUFNTFcsOEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC40NDZhOWNkMTAxZTExYjRkMzdmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBlcnNwZWN0aXZlQ2FtZXJhLCBTY2VuZSwgVmVjdG9yMywgV2ViR0xSZW5kZXJlciB9IGZyb20gXCJ0aHJlZVwiO1xyXG52YXIgU3RhdHMgPSByZXF1aXJlKFwic3RhdHMuanNcIik7XHJcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250ZXh0L3NvY2tldGlvQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZUxhYmVsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvbmFtZXRhZ1wiO1xyXG5pbXBvcnQge1xyXG4gICAgc3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24sXHJcbiAgICBsaXN0ZW5Ub0V2ZW50LFxyXG4gICAgam9pbkdhbWUsXHJcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29yZS1BUEkvQ29ubmVjdEFQSVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVSZW5kZXJDeWNsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvcmUtQVBJL1JlbmRlcmluZ0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVNYWluU2NlbmUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TY2VuZXMvTWFpblNjZW5lSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBDcmVhdGVVSSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVVSS9lbnRyeVBvaW50LnRzeFwiO1xyXG5pbXBvcnQgeyBDb250cm9sRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IHByZUxvYWRBbGxNb2RlbHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3JlLUFQSS8zZE1vZGVsSGFuZGxlcnMvR0xCTG9hZGVyXCI7XHJcbmltcG9ydCB7IE1ha2VQbGFuZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL3BsYW5lSGFuZGxlci9NYWluUGxhbmUudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IFtjaGlsZCwgc2V0Q2hpbGRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtnYW1lRXZlbnREYXRhLCBzZXRHYW1lRXZlbnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbZGF5LCBzZXREYXldID0gdXNlU3RhdGUoXCJub3QgZGF5XCIpO1xyXG4gICAgY29uc3QgW2NoaWxkMiwgc2V0Q2hpbGQyXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBzb2NrZXQgPSB1c2VBcHBDb250ZXh0KCk7XHJcbiAgICBjb25zdCBbcmVjaWV2ZWRTZWVkLCBzZXRTZWVkXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcmVuZGVyZWQsIHNldFJlbmRlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjbGllbnRzLCBzZXRDbGllbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwZXJzb25EYXRhLCBzZXRQZXJzb25hbERhdGFdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBbcG9zaXRvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUobmV3IFZlY3RvcjMoKS50b0FycmF5KCkpO1xyXG5cclxuICAgIHN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uKHNvY2tldCk7XHJcblxyXG4gICAgc29ja2V0Lm9uY2UoXCJ3ZWxjb21lXCIsIChzZWVkLCBjbGllbnQsIGRhdGEpID0+IHtcclxuICAgICAgICBzZXRTZWVkKHNlZWQpO1xyXG4gICAgICAgIHNldENsaWVudHMoY2xpZW50KTtcclxuICAgICAgICBzZXRQZXJzb25hbERhdGEoZGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdHlwZW9mIGNoaWxkID09PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgICAgIHJlbmRlcmVkID09PSB0cnVlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbm5lY3QgdG8gc2VydmVyIFxcXFxcclxuICAgICAgICBsZXQgbWFpbkdhbWUgPSBqb2luR2FtZShcIlRlc3RcIiwgXCJUZXN0XCIpXHJcbiAgICAgICAgc2V0U2VlZChtYWluR2FtZS5zZWVkKTtcclxuICAgICAgICBzZXRDbGllbnRzKG1haW5HYW1lLmNsaWVudHMpO1xyXG4gICAgICAgIHNldFBlcnNvbmFsRGF0YShtYWluR2FtZS51c2VyRGF0YSk7XHJcblxyXG4gICAgICAgIHByZUxvYWRBbGxNb2RlbHMoKVxyXG5cclxuICAgICAgICBzZXRSZW5kZXJlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRzID0gbmV3IFN0YXRzKCk7XHJcbiAgICAgICAgc3RhdHMuc2hvd1BhbmVsKDApO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhdHMuZG9tKTtcclxuXHJcbiAgICAgICAgbGV0IFNjZW5lVG9HZXQgPSBuZXcgU2NlbmUoKTtcclxuICAgICAgICBsZXQgUmVuZGVycyA9IG5ldyBXZWJHTFJlbmRlcmVyKHtcclxuICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgICAgICAgICBhbHBoYTogdHJ1ZSxcclxuICAgICAgICAgICAgb2dhcml0aG1pY0RlcHRoQnVmZmVyOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBSZW5kZXJzLnNldENsZWFyQ29sb3IoXCIjODdjZWViXCIsIDEpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIFJlbmRlcnMuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICBjaGlsZC5hcHBlbmRDaGlsZChSZW5kZXJzLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgICAgICBsZXQgQ3VycmVudFNjZW5lID0gXCJNYWluXCI7XHJcblxyXG4gICAgICAgIHZhciBDYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICAgICAgICAgIDc1LFxyXG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgMC4xLFxyXG4gICAgICAgICAgICAxMDAwMDAwMDBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcclxuICAgICAgICAgICAgQ2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgICBDYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgICAgICAgICAgUmVuZGVycy5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2VuZXJhdGVNYWluU2NlbmUoXHJcbiAgICAgICAgICAgIFNjZW5lVG9HZXQsXHJcbiAgICAgICAgICAgIFJlbmRlcnMsXHJcbiAgICAgICAgICAgIGRvY3VtZW50LFxyXG4gICAgICAgICAgICByZWNpZXZlZFNlZWQsXHJcbiAgICAgICAgICAgIGNoaWxkMixcclxuICAgICAgICAgICAgQ2FtZXJhXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgUmVuZGVycy5kb21FbGVtZW50LnJlcXVlc3RQb2ludGVyTG9jaygpO1xyXG4gICAgICAgIENvbnRyb2xFdmVudExpc3RlbmVyKGRvY3VtZW50LCBjaGlsZDIpO1xyXG5cclxuICAgICAgICBsZXQgcGxheWVycyA9IFtdO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBtYWtlQ3ViZShjb2xvciA9IFwicmdiKDAsMCwwKVwiLCBuYW1lID0gXCJ1bmtvd25cIikge1xyXG4gICAgICAgICAgICBjb25zdCBncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xyXG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAxLCAxKTtcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKGNvbG9yKSxcclxuICAgICAgICAgICAgICAgIGVtaXNzaXZlOiBuZXcgVEhSRUUuQ29sb3IoY29sb3IpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIGdyb3VwLmFkZChjdWJlKTtcclxuICAgICAgICAgICAgY29uc3QgY3ljbGluZGVyID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC4zLCAwLjMsIDAuNiwgMzApO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbDIgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjeWxpbmRlckJ1aWxkID0gbmV3IFRIUkVFLk1lc2goY3ljbGluZGVyLCBtYXRlcmlhbDIpO1xyXG4gICAgICAgICAgICBjeWxpbmRlckJ1aWxkLnJvdGF0ZVgoTWF0aC5QSSAvIDIgKyBNYXRoLlBJKTtcclxuICAgICAgICAgICAgY3lsaW5kZXJCdWlsZC5wb3NpdGlvbi5zZXQoMCwgMCwgLTAuNik7XHJcbiAgICAgICAgICAgIGdyb3VwLmFkZChjeWxpbmRlckJ1aWxkKTtcclxuXHJcbiAgICAgICAgICAgIGdlbmVyYXRlTGFiZWwobmFtZSwgZ3JvdXApO1xyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LmFkZChncm91cCk7XHJcbiAgICAgICAgICAgIGdyb3VwLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcHJldkRhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGFkZHRvR2FtZUZlZWQgPSAobmFtZSA9IFwiVW5rb3duXCIsIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBOZXdHYW1lRXZlbnRBcnJheSA9IFsuLi5nYW1lRXZlbnREYXRhXTtcclxuICAgICAgICAgICAgTmV3R2FtZUV2ZW50QXJyYXkudW5zaGlmdCh7IG5hbWUsIGV2ZW50IH0pO1xyXG4gICAgICAgICAgICBkZWxldGUgTmV3R2FtZUV2ZW50QXJyYXlbMTBdO1xyXG4gICAgICAgICAgICBkZWxldGUgTmV3R2FtZUV2ZW50QXJyYXlbMTFdO1xyXG4gICAgICAgICAgICBzZXRHYW1lRXZlbnREYXRhKFsuLi5OZXdHYW1lRXZlbnRBcnJheV0pO1xyXG4gICAgICAgICAgICBwcmV2RGF0YSA9IE5ld0dhbWVFdmVudEFycmF5O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNsaWVudHMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IG1ha2VDdWJlKGUuY29sb3IsIGUubmFtZSk7XHJcbiAgICAgICAgICAgIHBsYXllcnNbYCR7ZX1gXSA9IGN1YmU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNvY2tldC5vbihcIk5ld1BsYXllclwiLCBhc3luYyAoaWQsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYoaWQgPT09IHNvY2tldC5pZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5ld2N1YmUgPSBuZXcgTWFrZVBsYW5lKFNjZW5lVG9HZXQpXHJcbiAgICAgICAgICAgIGF3YWl0IG5ld2N1YmUubG9hZEZpbGVzKClcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBuZXdjdWJlLkNyZWF0ZUdyb3VwQW5kUG9zKClcclxuICAgICAgICAgICAgYWRkdG9HYW1lRmVlZChkYXRhPy5uYW1lLCBcIkpvaW5lZCB0aGUgZ2FtZSFcIik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHBsYXllcnNbYCR7aWR9YF0gPSBjdWJlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oXCJMb3N0UExheWVyXCIsIChpZCwgaG93LCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdWJlID0gcGxheWVyc1tgJHtpZH1gXTtcclxuICAgICAgICAgICAgU2NlbmVUb0dldC5yZW1vdmUoY3ViZSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBwbGF5ZXJzW2Ake2lkfWBdO1xyXG4gICAgICAgICAgICBhZGR0b0dhbWVGZWVkKFxyXG4gICAgICAgICAgICAgICAgZGF0YT8ubmFtZSxcclxuICAgICAgICAgICAgICAgIGhvdyA9PT0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJXYXMgcmVtb3ZlZCBmcm9tIHRoZSBnYW1lIGZvciBiZWluZyBpbmFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkxlZnQgdGhlIGdhbWUhXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGlzdGVuVG9FdmVudChcIlBsYXllckxvY2F0aW9uVXBkYXRlXCIsIChpZCwgcG9zLCByb3QsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYoaWQgPT09IHNvY2tldC5pZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IHBsYXllcnNbYCR7aWR9YF07XHJcbiAgICAgICAgICAgIGlmIChjdWJlKSB7XHJcbiAgICAgICAgICAgICAgICBjdWJlLnJvdGF0aW9uLnNldChyb3QuX3gsIHJvdC5feSwgcm90Ll96KTtcclxuICAgICAgICAgICAgICAgIGN1YmUucG9zaXRpb24uc2V0KHBvcy54LCBwb3MueSwgcG9zLnopO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1YmUgPSBtYWtlQ3ViZShkYXRhPy5jb2xvciwgZGF0YT8ubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcGxheWVyc1tgJHtpZH1gXSA9IGN1YmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzb2NrZXQub24oXCJOZXdDaGF0XCIsIChkYXRhLCB0ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoZGF0YS5uYW1lLCB0ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgICAgICBDYW1lcmEuZ2V0V29ybGRQb3NpdGlvbih2ZWN0b3IpO1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcIkxvY2F0aW9uVXBkYXRlXCIsIHZlY3RvciwgQ2FtZXJhLnJvdGF0aW9uKTtcclxuICAgICAgICB9LCAxMDAwLzMwKTtcclxuXHJcbiAgICAgICAgdmFyIGFuaW1hdGUgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0YXRzLmJlZ2luKCk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBhbGwgbW92aW5nIHBhcnRzXHJcbiAgICAgICAgICAgIHVwZGF0ZVJlbmRlckN5Y2xlKEN1cnJlbnRTY2VuZSk7XHJcblxyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbihcclxuICAgICAgICAgICAgICAgIGBYOiAke01hdGgucm91bmQoQ2FtZXJhLnBvc2l0aW9uLngpfX0gWTogJHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgIENhbWVyYS5wb3NpdGlvbi55XHJcbiAgICAgICAgICAgICAgICApfX0gWjogJHtNYXRoLnJvdW5kKENhbWVyYS5wb3NpdGlvbi56KX19YFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgUmVuZGVycy5yZW5kZXIoU2NlbmVUb0dldCwgQ2FtZXJhKTtcclxuICAgICAgICAgICAgc3RhdHMuZW5kKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYW5pbWF0ZSgpO1xyXG4gICAgfSwgW2NoaWxkLCBjbGllbnRzXSk7XHJcblxyXG4gICAgbGV0IHNlbmRDaGF0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc29ja2V0LmVtaXQoXCJzZW5kQ2hhdFwiLCBjaGlsZDIudmFsdWUpO1xyXG4gICAgICAgIGNoaWxkMi52YWx1ZSA9IFwiXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8Q3JlYXRlVUkgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17KHJlZikgPT4geyBzZXRDaGlsZChyZWYpIH0gLyogKi8gICB9PjwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==