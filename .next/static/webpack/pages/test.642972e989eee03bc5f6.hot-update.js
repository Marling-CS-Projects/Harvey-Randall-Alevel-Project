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
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _components_Context_socketioContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Context/socketioContext */ "./components/Context/socketioContext.js");
/* harmony import */ var _components_gameFundalmentals_nametag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/gameFundalmentals/nametag */ "./components/gameFundalmentals/nametag.js");
/* harmony import */ var _components_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Core-API/ConnectAPI */ "./components/Core-API/ConnectAPI.js");
/* harmony import */ var _components_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Core-API/RenderingHandler */ "./components/Core-API/RenderingHandler.js");
/* harmony import */ var _components_Scenes_MainSceneHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Scenes/MainSceneHandler */ "./components/Scenes/MainSceneHandler.js");
/* harmony import */ var _components_gameUI_entryPoint_tsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/gameUI/entryPoint.tsx */ "./components/gameUI/entryPoint.tsx");
/* harmony import */ var _components_gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/gameFundalmentals/controls */ "./components/gameFundalmentals/controls.js");
/* harmony import */ var _components_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Core-API/3dModelHandlers/GLBLoader */ "./components/Core-API/3dModelHandlers/GLBLoader.js");
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

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(new three__WEBPACK_IMPORTED_MODULE_13__.Vector3().toArray()),
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
    var SceneToGet = new three__WEBPACK_IMPORTED_MODULE_13__.Scene();
    var Renders = new three__WEBPACK_IMPORTED_MODULE_13__.WebGLRenderer({
      antialias: true,
      alpha: true,
      ogarithmicDepthBuffer: true
    });
    Renders.setClearColor("#87ceeb", 1);
    Renders.setSize(window.innerWidth, window.innerHeight);
    child.appendChild(Renders.domElement);
    var CurrentScene = "Main";
    var Camera = new three__WEBPACK_IMPORTED_MODULE_13__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000000);
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
      var group = new three__WEBPACK_IMPORTED_MODULE_13__.Group();
      var geometry = new three__WEBPACK_IMPORTED_MODULE_13__.BoxGeometry(1, 1, 1);
      var material = new three__WEBPACK_IMPORTED_MODULE_13__.MeshLambertMaterial({
        color: new three__WEBPACK_IMPORTED_MODULE_13__.Color(color),
        emissive: new three__WEBPACK_IMPORTED_MODULE_13__.Color(color)
      });
      var cube = new three__WEBPACK_IMPORTED_MODULE_13__.Mesh(geometry, material);
      group.add(cube);
      var cyclinder = new three__WEBPACK_IMPORTED_MODULE_13__.CylinderGeometry(0.3, 0.3, 0.6, 30);
      var material2 = new three__WEBPACK_IMPORTED_MODULE_13__.MeshLambertMaterial({
        color: "#000000"
      });
      var cylinderBuild = new three__WEBPACK_IMPORTED_MODULE_13__.Mesh(cyclinder, material2);
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
      console.log(id, data.id);
      if (id === socket.id) return;
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
      var vector = new three__WEBPACK_IMPORTED_MODULE_13__.Vector3();
      Camera.getWorldPosition(vector);
      socket.emit("LocationUpdate", vector, Camera.rotation);
    }, 1000 / 30);

    var animate = /*#__PURE__*/function () {
      var _ref = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                stats.begin();
                requestAnimationFrame(animate); // Update all moving parts

                (0,_components_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_8__.updateRenderCycle)(CurrentScene);
                setPosition("X: ".concat(Math.round(Camera.position.x), "} Y: ").concat(Math.round(Camera.position.y), "} Z: ").concat(Math.round(Camera.position.z), "}"));
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: "100vw",
        height: "100vh",
        position: "fixed"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameUI_entryPoint_tsx__WEBPACK_IMPORTED_MODULE_10__.CreateUI, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: function ref(_ref2) {
        setChild(_ref2);
      }
      /* */

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 221,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcyJdLCJuYW1lcyI6WyJTdGF0cyIsInJlcXVpcmUiLCJyZW5kZXIiLCJ1c2VTdGF0ZSIsImNoaWxkIiwic2V0Q2hpbGQiLCJnYW1lRXZlbnREYXRhIiwic2V0R2FtZUV2ZW50RGF0YSIsImRheSIsInNldERheSIsImNoaWxkMiIsInNldENoaWxkMiIsInNvY2tldCIsInVzZUFwcENvbnRleHQiLCJyZWNpZXZlZFNlZWQiLCJzZXRTZWVkIiwicmVuZGVyZWQiLCJzZXRSZW5kZXJlZCIsImNsaWVudHMiLCJzZXRDbGllbnRzIiwicGVyc29uRGF0YSIsInNldFBlcnNvbmFsRGF0YSIsIlZlY3RvcjMiLCJ0b0FycmF5IiwicG9zaXRvbiIsInNldFBvc2l0aW9uIiwic3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24iLCJvbmNlIiwic2VlZCIsImNsaWVudCIsImRhdGEiLCJ1c2VFZmZlY3QiLCJtYWluR2FtZSIsImpvaW5HYW1lIiwidXNlckRhdGEiLCJwcmVMb2FkQWxsTW9kZWxzIiwic3RhdHMiLCJzaG93UGFuZWwiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvbSIsIlNjZW5lVG9HZXQiLCJTY2VuZSIsIlJlbmRlcnMiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJvZ2FyaXRobWljRGVwdGhCdWZmZXIiLCJzZXRDbGVhckNvbG9yIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRvbUVsZW1lbnQiLCJDdXJyZW50U2NlbmUiLCJDYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbldpbmRvd1Jlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJnZW5lcmF0ZU1haW5TY2VuZSIsInJlcXVlc3RQb2ludGVyTG9jayIsIkNvbnRyb2xFdmVudExpc3RlbmVyIiwicGxheWVycyIsIm1ha2VDdWJlIiwiY29sb3IiLCJuYW1lIiwiZ3JvdXAiLCJUSFJFRSIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJlbWlzc2l2ZSIsImN1YmUiLCJhZGQiLCJjeWNsaW5kZXIiLCJtYXRlcmlhbDIiLCJjeWxpbmRlckJ1aWxkIiwicm90YXRlWCIsIk1hdGgiLCJQSSIsInBvc2l0aW9uIiwic2V0IiwiZ2VuZXJhdGVMYWJlbCIsInByZXZEYXRhIiwiYWRkdG9HYW1lRmVlZCIsImV2ZW50IiwiTmV3R2FtZUV2ZW50QXJyYXkiLCJ1bnNoaWZ0IiwiZm9yRWFjaCIsImUiLCJvbiIsImlkIiwiY29uc29sZSIsImxvZyIsImhvdyIsInJlbW92ZSIsImxpc3RlblRvRXZlbnQiLCJwb3MiLCJyb3QiLCJyb3RhdGlvbiIsIl94IiwiX3kiLCJfeiIsIngiLCJ5IiwieiIsInRleHQiLCJzZXRJbnRlcnZhbCIsInZlY3RvciIsImdldFdvcmxkUG9zaXRpb24iLCJlbWl0IiwiYW5pbWF0ZSIsImJlZ2luIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlUmVuZGVyQ3ljbGUiLCJyb3VuZCIsImVuZCIsInNlbmRDaGF0IiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsIndpZHRoIiwiaGVpZ2h0IiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQUlBLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0REFBRCxDQUFuQjs7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNIQywrQ0FBUSxFQURMO0FBQUEsTUFDdEJDLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFBQSxtQkFFYUYsK0NBQVEsQ0FBQyxFQUFELENBRnJCO0FBQUEsTUFFdEJHLGFBRnNCO0FBQUEsTUFFUEMsZ0JBRk87O0FBQUEsbUJBSVBKLCtD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O0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNIOztHQXJOdUIxSCxNO1VBTUxXLDhFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QuNjQyOTcyZTk4OWVlZTAzYmM1ZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb2csIFBlcnNwZWN0aXZlQ2FtZXJhLCBTY2VuZSwgVmVjdG9yMywgV2ViR0xSZW5kZXJlciB9IGZyb20gXCJ0aHJlZVwiO1xyXG52YXIgU3RhdHMgPSByZXF1aXJlKFwic3RhdHMuanNcIik7XHJcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250ZXh0L3NvY2tldGlvQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZUxhYmVsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvbmFtZXRhZ1wiO1xyXG5pbXBvcnQge1xyXG4gICAgc3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24sXHJcbiAgICBsaXN0ZW5Ub0V2ZW50LFxyXG4gICAgam9pbkdhbWUsXHJcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29yZS1BUEkvQ29ubmVjdEFQSVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVSZW5kZXJDeWNsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvcmUtQVBJL1JlbmRlcmluZ0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVNYWluU2NlbmUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TY2VuZXMvTWFpblNjZW5lSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBDcmVhdGVVSSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVVSS9lbnRyeVBvaW50LnRzeFwiO1xyXG5pbXBvcnQgeyBDb250cm9sRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IHByZUxvYWRBbGxNb2RlbHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3JlLUFQSS8zZE1vZGVsSGFuZGxlcnMvR0xCTG9hZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBbY2hpbGQsIHNldENoaWxkXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZ2FtZUV2ZW50RGF0YSwgc2V0R2FtZUV2ZW50RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2RheSwgc2V0RGF5XSA9IHVzZVN0YXRlKFwibm90IGRheVwiKTtcclxuICAgIGNvbnN0IFtjaGlsZDIsIHNldENoaWxkMl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3Qgc29ja2V0ID0gdXNlQXBwQ29udGV4dCgpO1xyXG4gICAgY29uc3QgW3JlY2lldmVkU2VlZCwgc2V0U2VlZF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3JlbmRlcmVkLCBzZXRSZW5kZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2xpZW50cywgc2V0Q2xpZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcGVyc29uRGF0YSwgc2V0UGVyc29uYWxEYXRhXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgW3Bvc2l0b24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKG5ldyBWZWN0b3IzKCkudG9BcnJheSgpKTtcclxuXHJcbiAgICBzdGFydFNldmVyQ2xpZW50Q29tbXVuaWNhdGlvbihzb2NrZXQpO1xyXG5cclxuICAgIHNvY2tldC5vbmNlKFwid2VsY29tZVwiLCAoc2VlZCwgY2xpZW50LCBkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0U2VlZChzZWVkKTtcclxuICAgICAgICBzZXRDbGllbnRzKGNsaWVudCk7XHJcbiAgICAgICAgc2V0UGVyc29uYWxEYXRhKGRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHR5cGVvZiBjaGlsZCA9PT0gXCJ1bmRlZmluZWRcIiB8fFxyXG4gICAgICAgICAgICByZW5kZXJlZCA9PT0gdHJ1ZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb25uZWN0IHRvIHNlcnZlciBcXFxcXHJcbiAgICAgICAgbGV0IG1haW5HYW1lID0gam9pbkdhbWUoXCJUZXN0XCIsIFwiVGVzdFwiKVxyXG4gICAgICAgIHNldFNlZWQobWFpbkdhbWUuc2VlZCk7XHJcbiAgICAgICAgc2V0Q2xpZW50cyhtYWluR2FtZS5jbGllbnRzKTtcclxuICAgICAgICBzZXRQZXJzb25hbERhdGEobWFpbkdhbWUudXNlckRhdGEpO1xyXG5cclxuICAgICAgICBwcmVMb2FkQWxsTW9kZWxzKClcclxuXHJcbiAgICAgICAgc2V0UmVuZGVyZWQodHJ1ZSk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0cyA9IG5ldyBTdGF0cygpO1xyXG4gICAgICAgIHN0YXRzLnNob3dQYW5lbCgwKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXRzLmRvbSk7XHJcblxyXG4gICAgICAgIGxldCBTY2VuZVRvR2V0ID0gbmV3IFNjZW5lKCk7XHJcbiAgICAgICAgbGV0IFJlbmRlcnMgPSBuZXcgV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgICAgICAgYWxwaGE6IHRydWUsXHJcbiAgICAgICAgICAgIG9nYXJpdGhtaWNEZXB0aEJ1ZmZlcjogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUmVuZGVycy5zZXRDbGVhckNvbG9yKFwiIzg3Y2VlYlwiLCAxKTtcclxuXHJcblxyXG5cclxuICAgICAgICBSZW5kZXJzLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgY2hpbGQuYXBwZW5kQ2hpbGQoUmVuZGVycy5kb21FbGVtZW50KTtcclxuXHJcbiAgICAgICAgbGV0IEN1cnJlbnRTY2VuZSA9IFwiTWFpblwiO1xyXG5cclxuICAgICAgICB2YXIgQ2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKFxyXG4gICAgICAgICAgICA3NSxcclxuICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgIDAuMSxcclxuICAgICAgICAgICAgMTAwMDAwMDAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25XaW5kb3dSZXNpemUsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XHJcbiAgICAgICAgICAgIENhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICAgICAgQ2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICAgICAgICAgIFJlbmRlcnMuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdlbmVyYXRlTWFpblNjZW5lKFxyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LFxyXG4gICAgICAgICAgICBSZW5kZXJzLFxyXG4gICAgICAgICAgICBkb2N1bWVudCxcclxuICAgICAgICAgICAgcmVjaWV2ZWRTZWVkLFxyXG4gICAgICAgICAgICBjaGlsZDIsXHJcbiAgICAgICAgICAgIENhbWVyYVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIFJlbmRlcnMuZG9tRWxlbWVudC5yZXF1ZXN0UG9pbnRlckxvY2soKTtcclxuICAgICAgICBDb250cm9sRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgY2hpbGQyKTtcclxuXHJcbiAgICAgICAgbGV0IHBsYXllcnMgPSBbXTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWFrZUN1YmUoY29sb3IgPSBcInJnYigwLDAsMClcIiwgbmFtZSA9IFwidW5rb3duXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcclxuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMSwgMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihjb2xvciksXHJcbiAgICAgICAgICAgICAgICBlbWlzc2l2ZTogbmV3IFRIUkVFLkNvbG9yKGNvbG9yKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1YmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICBncm91cC5hZGQoY3ViZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN5Y2xpbmRlciA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAuMywgMC4zLCAwLjYsIDMwKTtcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwyID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgY3lsaW5kZXJCdWlsZCA9IG5ldyBUSFJFRS5NZXNoKGN5Y2xpbmRlciwgbWF0ZXJpYWwyKTtcclxuICAgICAgICAgICAgY3lsaW5kZXJCdWlsZC5yb3RhdGVYKE1hdGguUEkgLyAyICsgTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIGN5bGluZGVyQnVpbGQucG9zaXRpb24uc2V0KDAsIDAsIC0wLjYpO1xyXG4gICAgICAgICAgICBncm91cC5hZGQoY3lsaW5kZXJCdWlsZCk7XHJcblxyXG4gICAgICAgICAgICBnZW5lcmF0ZUxhYmVsKG5hbWUsIGdyb3VwKTtcclxuICAgICAgICAgICAgU2NlbmVUb0dldC5hZGQoZ3JvdXApO1xyXG4gICAgICAgICAgICBncm91cC5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByZXZEYXRhID0gW107XHJcblxyXG4gICAgICAgIGxldCBhZGR0b0dhbWVGZWVkID0gKG5hbWUgPSBcIlVua293blwiLCBldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgTmV3R2FtZUV2ZW50QXJyYXkgPSBbLi4uZ2FtZUV2ZW50RGF0YV07XHJcbiAgICAgICAgICAgIE5ld0dhbWVFdmVudEFycmF5LnVuc2hpZnQoeyBuYW1lLCBldmVudCB9KTtcclxuICAgICAgICAgICAgZGVsZXRlIE5ld0dhbWVFdmVudEFycmF5WzEwXTtcclxuICAgICAgICAgICAgZGVsZXRlIE5ld0dhbWVFdmVudEFycmF5WzExXTtcclxuICAgICAgICAgICAgc2V0R2FtZUV2ZW50RGF0YShbLi4uTmV3R2FtZUV2ZW50QXJyYXldKTtcclxuICAgICAgICAgICAgcHJldkRhdGEgPSBOZXdHYW1lRXZlbnRBcnJheTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjbGllbnRzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBtYWtlQ3ViZShlLmNvbG9yLCBlLm5hbWUpO1xyXG4gICAgICAgICAgICBwbGF5ZXJzW2Ake2V9YF0gPSBjdWJlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oXCJOZXdQbGF5ZXJcIiwgKGlkLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkLCBkYXRhLmlkKVxyXG4gICAgICAgICAgICBpZihpZCA9PT0gc29ja2V0LmlkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IG1ha2VDdWJlKGRhdGEuY29sb3IsIGRhdGEubmFtZSk7XHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoZGF0YT8ubmFtZSwgXCJKb2luZWQgdGhlIGdhbWUhXCIpO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyc1tgJHtpZH1gXSA9IGN1YmU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNvY2tldC5vbihcIkxvc3RQTGF5ZXJcIiwgKGlkLCBob3csIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBwbGF5ZXJzW2Ake2lkfWBdO1xyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LnJlbW92ZShjdWJlKTtcclxuICAgICAgICAgICAgZGVsZXRlIHBsYXllcnNbYCR7aWR9YF07XHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoXHJcbiAgICAgICAgICAgICAgICBkYXRhPy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaG93ID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIldhcyByZW1vdmVkIGZyb20gdGhlIGdhbWUgZm9yIGJlaW5nIGluYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiTGVmdCB0aGUgZ2FtZSFcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsaXN0ZW5Ub0V2ZW50KFwiUGxheWVyTG9jYXRpb25VcGRhdGVcIiwgKGlkLCBwb3MsIHJvdCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZihpZCA9PT0gc29ja2V0LmlkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBjdWJlID0gcGxheWVyc1tgJHtpZH1gXTtcclxuICAgICAgICAgICAgaWYgKGN1YmUpIHtcclxuICAgICAgICAgICAgICAgIGN1YmUucm90YXRpb24uc2V0KHJvdC5feCwgcm90Ll95LCByb3QuX3opO1xyXG4gICAgICAgICAgICAgICAgY3ViZS5wb3NpdGlvbi5zZXQocG9zLngsIHBvcy55LCBwb3Mueik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3ViZSA9IG1ha2VDdWJlKGRhdGE/LmNvbG9yLCBkYXRhPy5uYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJzW2Ake2lkfWBdID0gY3ViZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNvY2tldC5vbihcIk5ld0NoYXRcIiwgKGRhdGEsIHRleHQpID0+IHtcclxuICAgICAgICAgICAgYWRkdG9HYW1lRmVlZChkYXRhLm5hbWUsIHRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHZlY3RvciA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgICAgIENhbWVyYS5nZXRXb3JsZFBvc2l0aW9uKHZlY3Rvcik7XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiTG9jYXRpb25VcGRhdGVcIiwgdmVjdG9yLCBDYW1lcmEucm90YXRpb24pO1xyXG4gICAgICAgIH0sIDEwMDAvMzApO1xyXG5cclxuICAgICAgICB2YXIgYW5pbWF0ZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3RhdHMuYmVnaW4oKTtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIGFsbCBtb3ZpbmcgcGFydHNcclxuICAgICAgICAgICAgdXBkYXRlUmVuZGVyQ3ljbGUoQ3VycmVudFNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgYFg6ICR7TWF0aC5yb3VuZChDYW1lcmEucG9zaXRpb24ueCl9fSBZOiAke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FtZXJhLnBvc2l0aW9uLnlcclxuICAgICAgICAgICAgICAgICl9fSBaOiAke01hdGgucm91bmQoQ2FtZXJhLnBvc2l0aW9uLnopfX1gXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBSZW5kZXJzLnJlbmRlcihTY2VuZVRvR2V0LCBDYW1lcmEpO1xyXG4gICAgICAgICAgICBzdGF0cy5lbmQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhbmltYXRlKCk7XHJcbiAgICB9LCBbY2hpbGQsIGNsaWVudHNdKTtcclxuXHJcbiAgICBsZXQgc2VuZENoYXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzb2NrZXQuZW1pdChcInNlbmRDaGF0XCIsIGNoaWxkMi52YWx1ZSk7XHJcbiAgICAgICAgY2hpbGQyLnZhbHVlID0gXCJcIjtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxDcmVhdGVVSSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXsocmVmKSA9PiB7IHNldENoaWxkKHJlZikgfSAvKiAqLyAgIH0+PC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9