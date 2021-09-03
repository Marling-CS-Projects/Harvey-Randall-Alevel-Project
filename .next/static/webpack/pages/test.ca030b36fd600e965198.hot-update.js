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
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _components_Context_socketioContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Context/socketioContext */ "./components/Context/socketioContext.js");
/* harmony import */ var _components_gameFundalmentals_nametag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/gameFundalmentals/nametag */ "./components/gameFundalmentals/nametag.js");
/* harmony import */ var _components_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Core-API/ConnectAPI */ "./components/Core-API/ConnectAPI.js");
/* harmony import */ var _components_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Core-API/RenderingHandler */ "./components/Core-API/RenderingHandler.js");
/* harmony import */ var _components_Scenes_MainSceneHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Scenes/MainSceneHandler */ "./components/Scenes/MainSceneHandler.js");
/* harmony import */ var _components_gameUI_gameFeed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/gameUI/gameFeed */ "./components/gameUI/gameFeed.js");
/* harmony import */ var _components_gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/gameFundalmentals/controls */ "./components/gameFundalmentals/controls.js");
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
    var SceneToGet = new three__WEBPACK_IMPORTED_MODULE_12__.Scene();
    var Renders = new three__WEBPACK_IMPORTED_MODULE_12__.WebGLRenderer({
      antialias: true,
      alpha: true,
      ogarithmicDepthBuffer: true
    });
    Renders.setClearColor("#87ceeb", 1);
    var fog = new three__WEBPACK_IMPORTED_MODULE_12__.Fog(0xDCDBDF, 10, 100000);
    SceneToGet.fog = fog;
    Renders.setSize(window.innerWidth, window.innerHeight);
    child.appendChild(Renders.domElement);
    var CurrentScene = "Main";
    var Camera = new three__WEBPACK_IMPORTED_MODULE_12__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000000);
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
      var group = new three__WEBPACK_IMPORTED_MODULE_12__.Group();
      var geometry = new three__WEBPACK_IMPORTED_MODULE_12__.BoxGeometry(1, 1, 1);
      var material = new three__WEBPACK_IMPORTED_MODULE_12__.MeshLambertMaterial({
        color: new three__WEBPACK_IMPORTED_MODULE_12__.Color(color),
        emissive: new three__WEBPACK_IMPORTED_MODULE_12__.Color(color)
      });
      var cube = new three__WEBPACK_IMPORTED_MODULE_12__.Mesh(geometry, material);
      group.add(cube);
      var cyclinder = new three__WEBPACK_IMPORTED_MODULE_12__.CylinderGeometry(0.3, 0.3, 0.6, 30);
      var material2 = new three__WEBPACK_IMPORTED_MODULE_12__.MeshLambertMaterial({
        color: "#000000"
      });
      var cylinderBuild = new three__WEBPACK_IMPORTED_MODULE_12__.Mesh(cyclinder, material2);
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
      var vector = new three__WEBPACK_IMPORTED_MODULE_12__.Vector3();
      Camera.getWorldPosition(vector);
      socket.emit("LocationUpdate", vector, Camera.rotation);
    }, 10);

    var animate = /*#__PURE__*/function () {
      var _ref = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                stats.begin();
                requestAnimationFrame(animate); // Update all moving parts

                (0,_components_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_8__.updateRenderCycle)(CurrentScene);
                Renders.render(SceneToGet, Camera);
                stats.end();

              case 5:
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
      lineNumber: 206,
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
        lineNumber: 221,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: sendChat,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          ref: function ref(_ref2) {
            return setChild2(_ref2);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 222,
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
          lineNumber: 231,
          columnNumber: 25
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }, this), (_ref3 = typeof recievedSeed === "undefined") !== null && _ref3 !== void 0 ? _ref3 : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "LOADING SEED!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 53
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: function ref(_ref4) {
        return setChild(_ref4);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: function ref(_ref5) {
        return setChild(_ref5);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 205,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcyJdLCJuYW1lcyI6WyJTdGF0cyIsInJlcXVpcmUiLCJyZW5kZXIiLCJ1c2VTdGF0ZSIsImNoaWxkIiwic2V0Q2hpbGQiLCJnYW1lRXZlbnREYXRhIiwic2V0R2FtZUV2ZW50RGF0YSIsImRheSIsInNldERheSIsImNoaWxkMiIsInNldENoaWxkMiIsInNvY2tldCIsInVzZUFwcENvbnRleHQiLCJyZWNpZXZlZFNlZWQiLCJzZXRTZWVkIiwicmVuZGVyZWQiLCJzZXRSZW5kZXJlZCIsImNsaWVudHMiLCJzZXRDbGllbnRzIiwicGVyc29uRGF0YSIsInNldFBlcnNvbmFsRGF0YSIsInN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uIiwib25jZSIsInNlZWQiLCJjbGllbnQiLCJkYXRhIiwidXNlRWZmZWN0Iiwic3RhdHMiLCJzaG93UGFuZWwiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvbSIsIlNjZW5lVG9HZXQiLCJTY2VuZSIsIlJlbmRlcnMiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJvZ2FyaXRobWljRGVwdGhCdWZmZXIiLCJzZXRDbGVhckNvbG9yIiwiZm9nIiwiRm9nIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRvbUVsZW1lbnQiLCJDdXJyZW50U2NlbmUiLCJDYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbldpbmRvd1Jlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJnZW5lcmF0ZU1haW5TY2VuZSIsInJlcXVlc3RQb2ludGVyTG9jayIsIkNvbnRyb2xFdmVudExpc3RlbmVyIiwicGxheWVycyIsIm1ha2VDdWJlIiwiY29sb3IiLCJuYW1lIiwiZ3JvdXAiLCJUSFJFRSIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJlbWlzc2l2ZSIsImN1YmUiLCJhZGQiLCJjeWNsaW5kZXIiLCJtYXRlcmlhbDIiLCJjeWxpbmRlckJ1aWxkIiwicm90YXRlWCIsIk1hdGgiLCJQSSIsInBvc2l0aW9uIiwic2V0IiwiZ2VuZXJhdGVMYWJlbCIsInByZXZEYXRhIiwiYWRkdG9HYW1lRmVlZCIsImV2ZW50IiwiTmV3R2FtZUV2ZW50QXJyYXkiLCJ1bnNoaWZ0IiwiZm9yRWFjaCIsImUiLCJvbiIsImlkIiwiaG93IiwicmVtb3ZlIiwibGlzdGVuVG9FdmVudCIsInBvcyIsInJvdCIsInJvdGF0aW9uIiwiX3giLCJfeSIsIl96IiwieCIsInkiLCJ6IiwidGV4dCIsInNldEludGVydmFsIiwidmVjdG9yIiwiVmVjdG9yMyIsImdldFdvcmxkUG9zaXRpb24iLCJlbWl0IiwiYW5pbWF0ZSIsImJlZ2luIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlUmVuZGVyQ3ljbGUiLCJlbmQiLCJzZW5kQ2hhdCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImhlaWdodCIsInJlZiIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQUlBLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0REFBRCxDQUFuQjs7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTtBQUFBOztBQUFBLGtCQUNIQywrQ0FBUSxFQURMO0FBQUEsTUFDdEJDLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFBQSxtQkFFYUYsK0NBQVEsQ0FBQyxFQUFELENBRnJCO0FBQUEsTUFFdEJHLGFBRnNCO0FBQUEsTUFFUEMsZ0JBRk87O0FBQUEsbUJBSVBKLCtDQUFRLENBQUMsU0FBRCxDQUpEO0FBQUEsTUFJdEJLLEdBSnNCO0FBQUEsTUFJakJDLE1BSmlCOztBQUFBLG1CQUtETiwrQ0FBUSxF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QVRKLFdBZ0NLLE9BQU9uRSxZQUFQLEtBQXdCLFdBaEM3QixzREFnQzRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEM1QyxlQWlDSTtBQUFLLFNBQUcsRUFBRSxhQUFDdUcsS0FBRDtBQUFBLGVBQVNoSCxRQUFRLENBQUNnSCxLQUFELENBQWpCO0FBQUE7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakNKLGVBa0NJO0FBQUssU0FBRyxFQUFFLGFBQUNBLEtBQUQ7QUFBQSxlQUFTaEgsUUFBUSxDQUFDZ0gsS0FBRCxDQUFqQjtBQUFBO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNDSDs7R0EvTnVCbkgsTTtVQU1MVyw4RSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0LmNhMDMwYjM2ZmQ2MDBlOTY1MTk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9nLCBQZXJzcGVjdGl2ZUNhbWVyYSwgU2NlbmUsIFZlY3RvcjMsIFdlYkdMUmVuZGVyZXIgfSBmcm9tIFwidGhyZWVcIjtcclxudmFyIFN0YXRzID0gcmVxdWlyZShcInN0YXRzLmpzXCIpO1xyXG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGV4dC9zb2NrZXRpb0NvbnRleHRcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVMYWJlbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL25hbWV0YWdcIjtcclxuaW1wb3J0IHtcclxuICAgIHN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uLFxyXG4gICAgbGlzdGVuVG9FdmVudCxcclxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3JlLUFQSS9Db25uZWN0QVBJXCI7XHJcbmltcG9ydCB7IHVwZGF0ZVJlbmRlckN5Y2xlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29yZS1BUEkvUmVuZGVyaW5nSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZU1haW5TY2VuZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1NjZW5lcy9NYWluU2NlbmVIYW5kbGVyXCI7XHJcbmltcG9ydCB7IENyZWF0ZVVJIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZVVJL2dhbWVGZWVkXCI7XHJcbmltcG9ydCB7IENvbnRyb2xFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvY29udHJvbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IFtjaGlsZCwgc2V0Q2hpbGRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtnYW1lRXZlbnREYXRhLCBzZXRHYW1lRXZlbnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbZGF5LCBzZXREYXldID0gdXNlU3RhdGUoXCJub3QgZGF5XCIpO1xyXG4gICAgY29uc3QgW2NoaWxkMiwgc2V0Q2hpbGQyXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBzb2NrZXQgPSB1c2VBcHBDb250ZXh0KCk7O1xyXG4gICAgY29uc3QgW3JlY2lldmVkU2VlZCwgc2V0U2VlZF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3JlbmRlcmVkLCBzZXRSZW5kZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2xpZW50cywgc2V0Q2xpZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcGVyc29uRGF0YSwgc2V0UGVyc29uYWxEYXRhXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgc3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24oc29ja2V0KTtcclxuXHJcbiAgICBzb2NrZXQub25jZShcIndlbGNvbWVcIiwgKHNlZWQsIGNsaWVudCwgZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFNlZWQoc2VlZCk7XHJcbiAgICAgICAgc2V0Q2xpZW50cyhjbGllbnQpO1xyXG4gICAgICAgIHNldFBlcnNvbmFsRGF0YShkYXRhKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0eXBlb2YgY2hpbGQgPT09IFwidW5kZWZpbmVkXCIgfHxcclxuICAgICAgICAgICAgdHlwZW9mIHJlY2lldmVkU2VlZCA9PT0gXCJ1bmRlZmluZWRcIiB8fFxyXG4gICAgICAgICAgICByZW5kZXJlZCA9PT0gdHJ1ZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRSZW5kZXJlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRzID0gbmV3IFN0YXRzKCk7XHJcbiAgICAgICAgc3RhdHMuc2hvd1BhbmVsKDIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhdHMuZG9tKTtcclxuXHJcbiAgICAgICAgbGV0IFNjZW5lVG9HZXQgPSBuZXcgU2NlbmUoKTtcclxuICAgICAgICBsZXQgUmVuZGVycyA9IG5ldyBXZWJHTFJlbmRlcmVyKHtcclxuICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgICAgICAgICBhbHBoYTogdHJ1ZSxcclxuICAgICAgICAgICAgb2dhcml0aG1pY0RlcHRoQnVmZmVyOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBSZW5kZXJzLnNldENsZWFyQ29sb3IoXCIjODdjZWViXCIsIDEpO1xyXG5cclxuICAgICAgICBsZXQgZm9nID0gbmV3IEZvZygweERDREJERiwgMTAsIDEwMDAwMClcclxuICAgICAgICBTY2VuZVRvR2V0LmZvZyA9IGZvZ1xyXG5cclxuICAgICAgICBSZW5kZXJzLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgY2hpbGQuYXBwZW5kQ2hpbGQoUmVuZGVycy5kb21FbGVtZW50KTtcclxuXHJcbiAgICBcclxuXHJcbiAgICAgICAgbGV0IEN1cnJlbnRTY2VuZSA9IFwiTWFpblwiO1xyXG5cclxuICAgICAgICB2YXIgQ2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKFxyXG4gICAgICAgICAgICA3NSxcclxuICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgIDAuMSxcclxuICAgICAgICAgICAgMTAwMDAwMDAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xyXG5cclxuICAgICAgICAgICAgQ2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgICBDYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgICAgICAgICAgUmVuZGVycy5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdlbmVyYXRlTWFpblNjZW5lKFxyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LFxyXG4gICAgICAgICAgICBSZW5kZXJzLFxyXG4gICAgICAgICAgICBkb2N1bWVudCxcclxuICAgICAgICAgICAgcmVjaWV2ZWRTZWVkLFxyXG4gICAgICAgICAgICBjaGlsZDIsXHJcbiAgICAgICAgICAgIENhbWVyYVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIFJlbmRlcnMuZG9tRWxlbWVudC5yZXF1ZXN0UG9pbnRlckxvY2soKTtcclxuICAgICAgICBDb250cm9sRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgY2hpbGQyKVxyXG5cclxuICAgICAgICBsZXQgcGxheWVycyA9IFtdO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBtYWtlQ3ViZShjb2xvciA9IFwicmdiKDAsMCwwKVwiLCBuYW1lID0gXCJ1bmtvd25cIikge1xyXG4gICAgICAgICAgICBjb25zdCBncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xyXG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAxLCAxKTtcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKGNvbG9yKSxcclxuICAgICAgICAgICAgICAgIGVtaXNzaXZlOiBuZXcgVEhSRUUuQ29sb3IoY29sb3IpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIGdyb3VwLmFkZChjdWJlKTtcclxuICAgICAgICAgICAgY29uc3QgY3ljbGluZGVyID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC4zLCAwLjMsIDAuNiwgMzApO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbDIgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjeWxpbmRlckJ1aWxkID0gbmV3IFRIUkVFLk1lc2goY3ljbGluZGVyLCBtYXRlcmlhbDIpO1xyXG4gICAgICAgICAgICBjeWxpbmRlckJ1aWxkLnJvdGF0ZVgoTWF0aC5QSSAvIDIgKyBNYXRoLlBJKTtcclxuICAgICAgICAgICAgY3lsaW5kZXJCdWlsZC5wb3NpdGlvbi5zZXQoMCwgMCwgLTAuNik7XHJcbiAgICAgICAgICAgIGdyb3VwLmFkZChjeWxpbmRlckJ1aWxkKTtcclxuXHJcbiAgICAgICAgICAgIGdlbmVyYXRlTGFiZWwobmFtZSwgZ3JvdXApO1xyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LmFkZChncm91cCk7XHJcbiAgICAgICAgICAgIGdyb3VwLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcHJldkRhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGFkZHRvR2FtZUZlZWQgPSAobmFtZSA9IFwiVW5rb3duXCIsIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBOZXdHYW1lRXZlbnRBcnJheSA9IFsuLi5nYW1lRXZlbnREYXRhXTtcclxuICAgICAgICAgICAgTmV3R2FtZUV2ZW50QXJyYXkudW5zaGlmdCh7IG5hbWUsIGV2ZW50IH0pO1xyXG4gICAgICAgICAgICBkZWxldGUgTmV3R2FtZUV2ZW50QXJyYXlbMTBdO1xyXG4gICAgICAgICAgICBkZWxldGUgTmV3R2FtZUV2ZW50QXJyYXlbMTFdO1xyXG4gICAgICAgICAgICBzZXRHYW1lRXZlbnREYXRhKFsuLi5OZXdHYW1lRXZlbnRBcnJheV0pO1xyXG4gICAgICAgICAgICBwcmV2RGF0YSA9IE5ld0dhbWVFdmVudEFycmF5O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNsaWVudHMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IG1ha2VDdWJlKGUuY29sb3IsIGUubmFtZSk7XHJcbiAgICAgICAgICAgIHBsYXllcnNbYCR7ZX1gXSA9IGN1YmU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNvY2tldC5vbihcIk5ld1BsYXllclwiLCAoaWQsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBtYWtlQ3ViZShkYXRhLmNvbG9yLCBkYXRhLm5hbWUpO1xyXG4gICAgICAgICAgICBhZGR0b0dhbWVGZWVkKGRhdGE/Lm5hbWUsIFwiSm9pbmVkIHRoZSBnYW1lIVwiKTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllcnNbYCR7aWR9YF0gPSBjdWJlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oXCJMb3N0UExheWVyXCIsIChpZCwgaG93LCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdWJlID0gcGxheWVyc1tgJHtpZH1gXTtcclxuICAgICAgICAgICAgU2NlbmVUb0dldC5yZW1vdmUoY3ViZSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBwbGF5ZXJzW2Ake2lkfWBdO1xyXG4gICAgICAgICAgICBhZGR0b0dhbWVGZWVkKFxyXG4gICAgICAgICAgICAgICAgZGF0YT8ubmFtZSxcclxuICAgICAgICAgICAgICAgIGhvdyA9PT0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJXYXMgcmVtb3ZlZCBmcm9tIHRoZSBnYW1lIGZvciBiZWluZyBpbmFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkxlZnQgdGhlIGdhbWUhXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGlzdGVuVG9FdmVudChcIlBsYXllckxvY2F0aW9uVXBkYXRlXCIsIChpZCwgcG9zLCByb3QsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBwbGF5ZXJzW2Ake2lkfWBdO1xyXG4gICAgICAgICAgICBpZiAoY3ViZSkge1xyXG4gICAgICAgICAgICAgICAgY3ViZS5yb3RhdGlvbi5zZXQocm90Ll94LCByb3QuX3ksIHJvdC5feik7XHJcbiAgICAgICAgICAgICAgICBjdWJlLnBvc2l0aW9uLnNldChwb3MueCwgcG9zLnksIHBvcy56KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdWJlID0gbWFrZUN1YmUoZGF0YT8uY29sb3IsIGRhdGE/Lm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHBsYXllcnNbYCR7aWR9YF0gPSBjdWJlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc29ja2V0Lm9uKFwiTmV3Q2hhdFwiLCAoZGF0YSwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICBhZGR0b0dhbWVGZWVkKGRhdGEubmFtZSwgdGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmVjdG9yID0gbmV3IFZlY3RvcjMoKVxyXG4gICAgICAgICAgICBDYW1lcmEuZ2V0V29ybGRQb3NpdGlvbih2ZWN0b3IpXHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiTG9jYXRpb25VcGRhdGVcIiwgdmVjdG9yLCBDYW1lcmEucm90YXRpb24pO1xyXG4gICAgICAgIH0sIDEwKTtcclxuXHJcbiAgICAgICAgdmFyIGFuaW1hdGUgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0YXRzLmJlZ2luKCk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBhbGwgbW92aW5nIHBhcnRzXHJcbiAgICAgICAgICAgIHVwZGF0ZVJlbmRlckN5Y2xlKEN1cnJlbnRTY2VuZSk7XHJcblxyXG4gICAgICAgICAgICBSZW5kZXJzLnJlbmRlcihTY2VuZVRvR2V0LCBDYW1lcmEpO1xyXG4gICAgICAgICAgICBzdGF0cy5lbmQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhbmltYXRlKCk7XHJcbiAgICB9LCBbY2hpbGQsIGNsaWVudHNdKTtcclxuXHJcbiAgICBsZXQgc2VuZENoYXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzb2NrZXQuZW1pdChcInNlbmRDaGF0XCIsIGNoaWxkMi52YWx1ZSk7XHJcbiAgICAgICAgY2hpbGQyLnZhbHVlID0gXCJcIjtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7dHlwZW9mIHBlcnNvbkRhdGEgPT09IFwidW5kZWZpbmVkXCIgPyBcIkxPQURJTkcuLi5cIiA6IHBlcnNvbkRhdGEubmFtZX1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjgwcHhcIixcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZVVJIC8+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZENoYXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9eyhyZWYpID0+IHNldENoaWxkMihyZWYpfT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiU3VibWl0XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIHtbLi4uZ2FtZUV2ZW50RGF0YV0ubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZS5uYW1lfSAtIHtlLmV2ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHt0eXBlb2YgcmVjaWV2ZWRTZWVkID09PSBcInVuZGVmaW5lZFwiID8/IDxoMT5MT0FESU5HIFNFRUQhPC9oMT59XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXsocmVmKSA9PiBzZXRDaGlsZChyZWYpfT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiByZWY9eyhyZWYpID0+IHNldENoaWxkKHJlZil9PjwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==