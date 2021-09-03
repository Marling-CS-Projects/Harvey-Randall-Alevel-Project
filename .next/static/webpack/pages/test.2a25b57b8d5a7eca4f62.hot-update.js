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
/* harmony import */ var _components_gameUI_gameFeed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/gameUI/gameFeed */ "./components/gameUI/gameFeed.js");
/* harmony import */ var _components_gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/gameFundalmentals/controls */ "./components/gameFundalmentals/controls.js");
/* harmony import */ var _components_Core_API_gemotryManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Core-API/gemotryManager */ "./components/Core-API/gemotryManager.js");
/* harmony import */ var _components_gameFundalmentals_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/gameFundalmentals/ProceduleTerrain */ "./components/gameFundalmentals/ProceduleTerrain.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "H:\\Desktop\\code\\Harvey-Randall-Alevel-Project\\pages\\test.js",
    _s = $RefreshSig$();

// Written By Harvey Randall \\





var Stats = __webpack_require__(/*! stats.js */ "./node_modules/stats.js/build/stats.min.js");










function render() {
  _s();

  var _this = this,
      _ref3;

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
  ;

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

  (0,_components_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_7__.startSeverClientCommunication)(socket);
  socket.once("welcome", function (seed, client, data) {
    setSeed(seed);
    setClients(client);
    setPersonalData(data);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (typeof child === "undefined" || typeof recievedSeed === "undefined" || rendered === true) {
      return;
    }

    setRendered(true);
    var stats = new Stats();
    stats.showPanel(2);
    document.body.appendChild(stats.dom);
    var SceneToGet = new three__WEBPACK_IMPORTED_MODULE_14__.Scene();
    var Renders = new three__WEBPACK_IMPORTED_MODULE_14__.WebGLRenderer({
      antialias: true,
      alpha: true,
      ogarithmicDepthBuffer: true
    });
    Renders.setClearColor("#87ceeb", 1);
    var fog = new three__WEBPACK_IMPORTED_MODULE_14__.Fog(0xDCDBDF, 10, 100000);
    SceneToGet.fog = fog;
    Renders.setSize(window.innerWidth, window.innerHeight);
    child.appendChild(Renders.domElement);
    var CurrentScene = "Main";
    var Camera = new three__WEBPACK_IMPORTED_MODULE_14__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000000);
    window.addEventListener('resize', onWindowResize, false);

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
    socket.on("NewPlayer", function (id, data) {
      var cube = makeCube(data.color, data.name);
      addtoGameFeed(data === null || data === void 0 ? void 0 : data.name, "Joined the game!");
      players["".concat(id)] = cube;
    });
    socket.on("LostPLayer", function (id, how, data) {
      var cube = players["".concat(id)];
      SceneToGet.remove(cube);
      delete players["".concat(id)];
      addtoGameFeed(data === null || data === void 0 ? void 0 : data.name, how === true ? "Was removed from the game for being inactive" : "Left the game!");
    });
    (0,_components_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_7__.listenToEvent)("PlayerLocationUpdate", function (id, pos, rot, data) {
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
    }, 10);
    var debubCube = (0,_components_Core_API_gemotryManager__WEBPACK_IMPORTED_MODULE_12__.debugCube)();
    SceneToGet.add(debubCube);

    var animate = /*#__PURE__*/function () {
      var _ref = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                stats.begin();
                requestAnimationFrame(animate);
                debubCube.position.set(Camera.position.x, (0,_components_gameFundalmentals_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_13__.getTerrainHeight)(Camera.position, recievedSeed, 120, 0.1)); // Update all moving parts

                (0,_components_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_8__.updateRenderCycle)(CurrentScene);
                Renders.render(SceneToGet, Camera);
                stats.end();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function animate() {
        return _ref.apply(this, arguments);
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      style: {
        position: "fixed",
        marginTop: "40px",
        color: "white"
      },
      children: typeof personData === "undefined" ? "LOADING..." : personData.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: "100vw",
        height: "100vh",
        position: "fixed",
        marginTop: "80px"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameUI_gameFeed__WEBPACK_IMPORTED_MODULE_10__.CreateUI, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: sendChat,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          ref: function ref(_ref2) {
            return setChild2(_ref2);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 17
      }, this), (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(gameEventData).map(function (e) {
        if (typeof e === "undefined") {
          return;
        }

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          style: {
            color: "white"
          },
          children: [e.name, " - ", e.event]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 25
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }, this), (_ref3 = typeof recievedSeed === "undefined") !== null && _ref3 !== void 0 ? _ref3 : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "LOADING SEED!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 53
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: function ref(_ref4) {
        return setChild(_ref4);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: function ref(_ref5) {
        return setChild(_ref5);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 212,
    columnNumber: 9
  }, this);
}

_s(render, "+U3E50I0Aqo/25wZ8IMW3mCEREI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcyJdLCJuYW1lcyI6WyJTdGF0cyIsInJlcXVpcmUiLCJyZW5kZXIiLCJ1c2VTdGF0ZSIsImNoaWxkIiwic2V0Q2hpbGQiLCJnYW1lRXZlbnREYXRhIiwic2V0R2FtZUV2ZW50RGF0YSIsImRheSIsInNldERheSIsImNoaWxkMiIsInNldENoaWxkMiIsInNvY2tldCIsInVzZUFwcENvbnRleHQiLCJyZWNpZXZlZFNlZWQiLCJzZXRTZWVkIiwicmVuZGVyZWQiLCJzZXRSZW5kZXJlZCIsImNsaWVudHMiLCJzZXRDbGllbnRzIiwicGVyc29uRGF0YSIsInNldFBlcnNvbmFsRGF0YSIsInN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uIiwib25jZSIsInNlZWQiLCJjbGllbnQiLCJkYXRhIiwidXNlRWZmZWN0Iiwic3RhdHMiLCJzaG93UGFuZWwiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvbSIsIlNjZW5lVG9HZXQiLCJTY2VuZSIsIlJlbmRlcnMiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJvZ2FyaXRobWljRGVwdGhCdWZmZXIiLCJzZXRDbGVhckNvbG9yIiwiZm9nIiwiRm9nIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRvbUVsZW1lbnQiLCJDdXJyZW50U2NlbmUiLCJDYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbldpbmRvd1Jlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJnZW5lcmF0ZU1haW5TY2VuZSIsInJlcXVlc3RQb2ludGVyTG9jayIsIkNvbnRyb2xFdmVudExpc3RlbmVyIiwicGxheWVycyIsIm1ha2VDdWJlIiwiY29sb3IiLCJuYW1lIiwiZ3JvdXAiLCJUSFJFRSIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJlbWlzc2l2ZSIsImN1YmUiLCJhZGQiLCJjeWNsaW5kZXIiLCJtYXRlcmlhbDIiLCJjeWxpbmRlckJ1aWxkIiwicm90YXRlWCIsIk1hdGgiLCJQSSIsInBvc2l0aW9uIiwic2V0IiwiZ2VuZXJhdGVMYWJlbCIsInByZXZEYXRhIiwiYWRkdG9HYW1lRmVlZCIsImV2ZW50IiwiTmV3R2FtZUV2ZW50QXJyYXkiLCJ1bnNoaWZ0IiwiZm9yRWFjaCIsImUiLCJvbiIsImlkIiwiaG93IiwicmVtb3ZlIiwibGlzdGVuVG9FdmVudCIsInBvcyIsInJvdCIsInJvdGF0aW9uIiwiX3giLCJfeSIsIl96IiwieCIsInkiLCJ6IiwidGV4dCIsInNldEludGVydmFsIiwidmVjdG9yIiwiVmVjdG9yMyIsImdldFdvcmxkUG9zaXRpb24iLCJlbWl0IiwiZGVidWJDdWJlIiwiZGVidWdDdWJlIiwiYW5pbWF0ZSIsImJlZ2luIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2V0VGVycmFpbkhlaWdodCIsInVwZGF0ZVJlbmRlckN5Y2xlIiwiZW5kIiwic2VuZENoYXQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwibWFyZ2luVG9wIiwid2lkdGgiLCJoZWlnaHQiLCJyZWYiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQUlBLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0REFBRCxDQUFuQjs7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxrQkFDSEMsK0NBQVEsRUFETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBQUEsbUJBRWFGLCtDQUFRLENBQUMsRUFBRCxDQUZyQjtBQUFBLE1BRXRCRyxhQUZzQjtBQUFBLE1BRVBDLGdCQUZPOztBQUFBLG1CQUlQSiwrQ0FBUSxDQUFDLFNBQUQsQ0FKRDtB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SywrSUFBSWxILGFBQUosRUFBbUJtSCxHQUFuQixDQUF1QixVQUFDcEMsQ0FBRCxFQUFPO0FBQzNCLFlBQUksT0FBT0EsQ0FBUCxLQUFhLFdBQWpCLEVBQThCO0FBQzFCO0FBQ0g7O0FBQ0QsNEJBQ0k7QUFBSSxlQUFLLEVBQUU7QUFBRXhCLGlCQUFLLEVBQUU7QUFBVCxXQUFYO0FBQUEscUJBQ0t3QixDQUFDLENBQUN2QixJQURQLFNBQ2dCdUIsQ0FBQyxDQUFDSixLQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFLSCxPQVRBLENBWkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEosV0FnQ0ssT0FBT25FLFlBQVAsS0FBd0IsV0FoQzdCLHNEQWdDNEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQzVDLGVBaUNJO0FBQUssU0FBRyxFQUFFLGFBQUMwRyxLQUFEO0FBQUEsZUFBU25ILFFBQVEsQ0FBQ21ILEtBQUQsQ0FBakI7QUFBQTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQ0osZUFrQ0k7QUFBSyxTQUFHLEVBQUUsYUFBQ0EsS0FBRDtBQUFBLGVBQVNuSCxRQUFRLENBQUNtSCxLQUFELENBQWpCO0FBQUE7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0NIOztHQXBPdUJ0SCxNO1VBTUxXLDhFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QuMmEyNWI1N2I4ZDVhN2VjYTRmNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb2csIFBlcnNwZWN0aXZlQ2FtZXJhLCBTY2VuZSwgVmVjdG9yMywgV2ViR0xSZW5kZXJlciB9IGZyb20gXCJ0aHJlZVwiO1xyXG52YXIgU3RhdHMgPSByZXF1aXJlKFwic3RhdHMuanNcIik7XHJcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250ZXh0L3NvY2tldGlvQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZUxhYmVsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvbmFtZXRhZ1wiO1xyXG5pbXBvcnQge1xyXG4gICAgc3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24sXHJcbiAgICBsaXN0ZW5Ub0V2ZW50LFxyXG59IGZyb20gXCIuLi9jb21wb25lbnRzL0NvcmUtQVBJL0Nvbm5lY3RBUElcIjtcclxuaW1wb3J0IHsgdXBkYXRlUmVuZGVyQ3ljbGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3JlLUFQSS9SZW5kZXJpbmdIYW5kbGVyXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlTWFpblNjZW5lIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2NlbmVzL01haW5TY2VuZUhhbmRsZXJcIjtcclxuaW1wb3J0IHsgQ3JlYXRlVUkgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lVUkvZ2FtZUZlZWRcIjtcclxuaW1wb3J0IHsgQ29udHJvbEV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBkZWJ1Z0N1YmUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3JlLUFQSS9nZW1vdHJ5TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBnZXRUZXJyYWluSGVpZ2h0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvUHJvY2VkdWxlVGVycmFpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgY29uc3QgW2NoaWxkLCBzZXRDaGlsZF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2dhbWVFdmVudERhdGEsIHNldEdhbWVFdmVudERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFtkYXksIHNldERheV0gPSB1c2VTdGF0ZShcIm5vdCBkYXlcIik7XHJcbiAgICBjb25zdCBbY2hpbGQyLCBzZXRDaGlsZDJdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IHNvY2tldCA9IHVzZUFwcENvbnRleHQoKTs7XHJcbiAgICBjb25zdCBbcmVjaWV2ZWRTZWVkLCBzZXRTZWVkXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcmVuZGVyZWQsIHNldFJlbmRlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjbGllbnRzLCBzZXRDbGllbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwZXJzb25EYXRhLCBzZXRQZXJzb25hbERhdGFdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBzdGFydFNldmVyQ2xpZW50Q29tbXVuaWNhdGlvbihzb2NrZXQpO1xyXG5cclxuICAgIHNvY2tldC5vbmNlKFwid2VsY29tZVwiLCAoc2VlZCwgY2xpZW50LCBkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0U2VlZChzZWVkKTtcclxuICAgICAgICBzZXRDbGllbnRzKGNsaWVudCk7XHJcbiAgICAgICAgc2V0UGVyc29uYWxEYXRhKGRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHR5cGVvZiBjaGlsZCA9PT0gXCJ1bmRlZmluZWRcIiB8fFxyXG4gICAgICAgICAgICB0eXBlb2YgcmVjaWV2ZWRTZWVkID09PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgICAgIHJlbmRlcmVkID09PSB0cnVlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFJlbmRlcmVkKHRydWUpO1xyXG5cclxuICAgICAgICBsZXQgc3RhdHMgPSBuZXcgU3RhdHMoKTtcclxuICAgICAgICBzdGF0cy5zaG93UGFuZWwoMik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5kb20pO1xyXG5cclxuICAgICAgICBsZXQgU2NlbmVUb0dldCA9IG5ldyBTY2VuZSgpO1xyXG4gICAgICAgIGxldCBSZW5kZXJzID0gbmV3IFdlYkdMUmVuZGVyZXIoe1xyXG4gICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgICAgIGFscGhhOiB0cnVlLFxyXG4gICAgICAgICAgICBvZ2FyaXRobWljRGVwdGhCdWZmZXI6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFJlbmRlcnMuc2V0Q2xlYXJDb2xvcihcIiM4N2NlZWJcIiwgMSk7XHJcblxyXG4gICAgICAgIGxldCBmb2cgPSBuZXcgRm9nKDB4RENEQkRGLCAxMCwgMTAwMDAwKVxyXG4gICAgICAgIFNjZW5lVG9HZXQuZm9nID0gZm9nXHJcblxyXG4gICAgICAgIFJlbmRlcnMuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICBjaGlsZC5hcHBlbmRDaGlsZChSZW5kZXJzLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgIFxyXG5cclxuICAgICAgICBsZXQgQ3VycmVudFNjZW5lID0gXCJNYWluXCI7XHJcblxyXG4gICAgICAgIHZhciBDYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICAgICAgICAgIDc1LFxyXG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgMC4xLFxyXG4gICAgICAgICAgICAxMDAwMDAwMDBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25XaW5kb3dSZXNpemUsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XHJcblxyXG4gICAgICAgICAgICBDYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgIENhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG4gICAgICAgICAgICBSZW5kZXJzLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2VuZXJhdGVNYWluU2NlbmUoXHJcbiAgICAgICAgICAgIFNjZW5lVG9HZXQsXHJcbiAgICAgICAgICAgIFJlbmRlcnMsXHJcbiAgICAgICAgICAgIGRvY3VtZW50LFxyXG4gICAgICAgICAgICByZWNpZXZlZFNlZWQsXHJcbiAgICAgICAgICAgIGNoaWxkMixcclxuICAgICAgICAgICAgQ2FtZXJhXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgUmVuZGVycy5kb21FbGVtZW50LnJlcXVlc3RQb2ludGVyTG9jaygpO1xyXG4gICAgICAgIENvbnRyb2xFdmVudExpc3RlbmVyKGRvY3VtZW50LCBjaGlsZDIpXHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXJzID0gW107XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VDdWJlKGNvbG9yID0gXCJyZ2IoMCwwLDApXCIsIG5hbWUgPSBcInVua293blwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3IoY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgZW1pc3NpdmU6IG5ldyBUSFJFRS5Db2xvcihjb2xvciksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjdWJlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgICAgICAgICAgZ3JvdXAuYWRkKGN1YmUpO1xyXG4gICAgICAgICAgICBjb25zdCBjeWNsaW5kZXIgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjMsIDAuMywgMC42LCAzMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN5bGluZGVyQnVpbGQgPSBuZXcgVEhSRUUuTWVzaChjeWNsaW5kZXIsIG1hdGVyaWFsMik7XHJcbiAgICAgICAgICAgIGN5bGluZGVyQnVpbGQucm90YXRlWChNYXRoLlBJIC8gMiArIE1hdGguUEkpO1xyXG4gICAgICAgICAgICBjeWxpbmRlckJ1aWxkLnBvc2l0aW9uLnNldCgwLCAwLCAtMC42KTtcclxuICAgICAgICAgICAgZ3JvdXAuYWRkKGN5bGluZGVyQnVpbGQpO1xyXG5cclxuICAgICAgICAgICAgZ2VuZXJhdGVMYWJlbChuYW1lLCBncm91cCk7XHJcbiAgICAgICAgICAgIFNjZW5lVG9HZXQuYWRkKGdyb3VwKTtcclxuICAgICAgICAgICAgZ3JvdXAubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBncm91cDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcmV2RGF0YSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgYWRkdG9HYW1lRmVlZCA9IChuYW1lID0gXCJVbmtvd25cIiwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IE5ld0dhbWVFdmVudEFycmF5ID0gWy4uLmdhbWVFdmVudERhdGFdO1xyXG4gICAgICAgICAgICBOZXdHYW1lRXZlbnRBcnJheS51bnNoaWZ0KHsgbmFtZSwgZXZlbnQgfSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBOZXdHYW1lRXZlbnRBcnJheVsxMF07XHJcbiAgICAgICAgICAgIGRlbGV0ZSBOZXdHYW1lRXZlbnRBcnJheVsxMV07XHJcbiAgICAgICAgICAgIHNldEdhbWVFdmVudERhdGEoWy4uLk5ld0dhbWVFdmVudEFycmF5XSk7XHJcbiAgICAgICAgICAgIHByZXZEYXRhID0gTmV3R2FtZUV2ZW50QXJyYXk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2xpZW50cy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdWJlID0gbWFrZUN1YmUoZS5jb2xvciwgZS5uYW1lKTtcclxuICAgICAgICAgICAgcGxheWVyc1tgJHtlfWBdID0gY3ViZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiTmV3UGxheWVyXCIsIChpZCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IG1ha2VDdWJlKGRhdGEuY29sb3IsIGRhdGEubmFtZSk7XHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoZGF0YT8ubmFtZSwgXCJKb2luZWQgdGhlIGdhbWUhXCIpO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyc1tgJHtpZH1gXSA9IGN1YmU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNvY2tldC5vbihcIkxvc3RQTGF5ZXJcIiwgKGlkLCBob3csIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBwbGF5ZXJzW2Ake2lkfWBdO1xyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LnJlbW92ZShjdWJlKTtcclxuICAgICAgICAgICAgZGVsZXRlIHBsYXllcnNbYCR7aWR9YF07XHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoXHJcbiAgICAgICAgICAgICAgICBkYXRhPy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaG93ID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIldhcyByZW1vdmVkIGZyb20gdGhlIGdhbWUgZm9yIGJlaW5nIGluYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiTGVmdCB0aGUgZ2FtZSFcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsaXN0ZW5Ub0V2ZW50KFwiUGxheWVyTG9jYXRpb25VcGRhdGVcIiwgKGlkLCBwb3MsIHJvdCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IHBsYXllcnNbYCR7aWR9YF07XHJcbiAgICAgICAgICAgIGlmIChjdWJlKSB7XHJcbiAgICAgICAgICAgICAgICBjdWJlLnJvdGF0aW9uLnNldChyb3QuX3gsIHJvdC5feSwgcm90Ll96KTtcclxuICAgICAgICAgICAgICAgIGN1YmUucG9zaXRpb24uc2V0KHBvcy54LCBwb3MueSwgcG9zLnopO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1YmUgPSBtYWtlQ3ViZShkYXRhPy5jb2xvciwgZGF0YT8ubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcGxheWVyc1tgJHtpZH1gXSA9IGN1YmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzb2NrZXQub24oXCJOZXdDaGF0XCIsIChkYXRhLCB0ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoZGF0YS5uYW1lLCB0ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpXHJcbiAgICAgICAgICAgIENhbWVyYS5nZXRXb3JsZFBvc2l0aW9uKHZlY3RvcilcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJMb2NhdGlvblVwZGF0ZVwiLCB2ZWN0b3IsIENhbWVyYS5yb3RhdGlvbik7XHJcbiAgICAgICAgfSwgMTApO1xyXG5cclxuICAgICAgICBsZXQgZGVidWJDdWJlID0gZGVidWdDdWJlKClcclxuICAgICAgICBTY2VuZVRvR2V0LmFkZChkZWJ1YkN1YmUpXHJcblxyXG4gICAgICAgIHZhciBhbmltYXRlID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdGF0cy5iZWdpbigpO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcblxyXG4gICAgICAgICAgICBkZWJ1YkN1YmUucG9zaXRpb24uc2V0KENhbWVyYS5wb3NpdGlvbi54LCBnZXRUZXJyYWluSGVpZ2h0KENhbWVyYS5wb3NpdGlvbiwgcmVjaWV2ZWRTZWVkLCAxMjAsIDAuMSkpXHJcblxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgYWxsIG1vdmluZyBwYXJ0c1xyXG4gICAgICAgICAgICB1cGRhdGVSZW5kZXJDeWNsZShDdXJyZW50U2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgUmVuZGVycy5yZW5kZXIoU2NlbmVUb0dldCwgQ2FtZXJhKTtcclxuICAgICAgICAgICAgc3RhdHMuZW5kKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYW5pbWF0ZSgpO1xyXG4gICAgfSwgW2NoaWxkLCBjbGllbnRzXSk7XHJcblxyXG4gICAgbGV0IHNlbmRDaGF0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc29ja2V0LmVtaXQoXCJzZW5kQ2hhdFwiLCBjaGlsZDIudmFsdWUpO1xyXG4gICAgICAgIGNoaWxkMi52YWx1ZSA9IFwiXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAge3R5cGVvZiBwZXJzb25EYXRhID09PSBcInVuZGVmaW5lZFwiID8gXCJMT0FESU5HLi4uXCIgOiBwZXJzb25EYXRhLm5hbWV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI4MHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxDcmVhdGVVSSAvPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRDaGF0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXsocmVmKSA9PiBzZXRDaGlsZDIocmVmKX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIlN1Ym1pdFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICB7Wy4uLmdhbWVFdmVudERhdGFdLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2UubmFtZX0gLSB7ZS5ldmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7dHlwZW9mIHJlY2lldmVkU2VlZCA9PT0gXCJ1bmRlZmluZWRcIiA/PyA8aDE+TE9BRElORyBTRUVEITwvaDE+fVxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17KHJlZikgPT4gc2V0Q2hpbGQocmVmKX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXsocmVmKSA9PiBzZXRDaGlsZChyZWYpfT48L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=