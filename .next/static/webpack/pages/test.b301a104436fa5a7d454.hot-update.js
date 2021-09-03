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
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _components_Context_socketioContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Context/socketioContext */ "./components/Context/socketioContext.js");
/* harmony import */ var _components_gameFundalmentals_nametag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/gameFundalmentals/nametag */ "./components/gameFundalmentals/nametag.js");
/* harmony import */ var _components_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Core-API/ConnectAPI */ "./components/Core-API/ConnectAPI.js");
/* harmony import */ var _components_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Core-API/RenderingHandler */ "./components/Core-API/RenderingHandler.js");
/* harmony import */ var _components_Scenes_MainSceneHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Scenes/MainSceneHandler */ "./components/Scenes/MainSceneHandler.js");
/* harmony import */ var _components_gameUI_gameFeed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/gameUI/gameFeed */ "./components/gameUI/gameFeed.js");
/* harmony import */ var _components_gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/gameFundalmentals/controls */ "./components/gameFundalmentals/controls.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "H:\\Desktop\\code\\Harvey-Randall-Alevel-Project\\pages\\test.js",
    _s = $RefreshSig$();

// Written By Harvey Randall \\





var Stats = __webpack_require__(/*! stats.js */ "./node_modules/stats.js/build/stats.min.js");








function render() {
  _s();

  var _this = this,
      _ref2;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      child = _useState[0],
      setChild = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      gameEventData = _useState2[0],
      setGameEventData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("not day"),
      day = _useState3[0],
      setDay = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      child2 = _useState4[0],
      setChild2 = _useState4[1];

  var socket = (0,_components_Context_socketioContext__WEBPACK_IMPORTED_MODULE_3__.useAppContext)();
  ;

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      recievedSeed = _useState5[0],
      setSeed = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      rendered = _useState6[0],
      setRendered = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      clients = _useState7[0],
      setClients = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      personData = _useState8[0],
      setPersonalData = _useState8[1];

  (0,_components_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_5__.startSeverClientCommunication)(socket);
  socket.once("welcome", function (seed, client, data) {
    setSeed(seed);
    setClients(client);
    setPersonalData(data);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (typeof child === "undefined" || typeof recievedSeed === "undefined" || rendered === true) {
      return;
    }

    setRendered(true);
    var stats = new Stats();
    stats.showPanel(2);
    document.body.appendChild(stats.dom);
    var SceneToGet = new three__WEBPACK_IMPORTED_MODULE_10__.Scene();
    var Renders = new three__WEBPACK_IMPORTED_MODULE_10__.WebGLRenderer({
      antialias: true,
      alpha: true,
      ogarithmicDepthBuffer: true
    });
    Renders.setClearColor("#87ceeb", 1);
    var fog = new three__WEBPACK_IMPORTED_MODULE_10__.Fog(0xDCDBDF, 10, 100000);
    SceneToGet.fog = fog;
    Renders.setSize(window.innerWidth, window.innerHeight);
    child.appendChild(Renders.domElement);
    var CurrentScene = "Main";
    var Camera = new three__WEBPACK_IMPORTED_MODULE_10__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000000);
    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {
      Camera.aspect = window.innerWidth / window.innerHeight;
      Camera.updateProjectionMatrix();
      Renders.setSize(window.innerWidth, window.innerHeight);
    }

    (0,_components_Scenes_MainSceneHandler__WEBPACK_IMPORTED_MODULE_7__.generateMainScene)(SceneToGet, Renders, document, recievedSeed, child2, Camera);
    Renders.domElement.requestPointerLock();
    (0,_components_gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_9__.ControlEventListener)(document, child2);
    var players = [];

    function makeCube() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "rgb(0,0,0)";
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "unkown";
      var group = new three__WEBPACK_IMPORTED_MODULE_10__.Group();
      var geometry = new three__WEBPACK_IMPORTED_MODULE_10__.BoxGeometry(1, 1, 1);
      var material = new three__WEBPACK_IMPORTED_MODULE_10__.MeshLambertMaterial({
        color: new three__WEBPACK_IMPORTED_MODULE_10__.Color(color),
        emissive: new three__WEBPACK_IMPORTED_MODULE_10__.Color(color)
      });
      var cube = new three__WEBPACK_IMPORTED_MODULE_10__.Mesh(geometry, material);
      group.add(cube);
      var cyclinder = new three__WEBPACK_IMPORTED_MODULE_10__.CylinderGeometry(0.3, 0.3, 0.6, 30);
      var material2 = new three__WEBPACK_IMPORTED_MODULE_10__.MeshLambertMaterial({
        color: "#000000"
      });
      var cylinderBuild = new three__WEBPACK_IMPORTED_MODULE_10__.Mesh(cyclinder, material2);
      cylinderBuild.rotateX(Math.PI / 2 + Math.PI);
      cylinderBuild.position.set(0, 0, -0.6);
      group.add(cylinderBuild);
      (0,_components_gameFundalmentals_nametag__WEBPACK_IMPORTED_MODULE_4__.generateLabel)(name, group);
      SceneToGet.add(group);
      group.name = name;
      return group;
    }

    var prevData = [];

    var addtoGameFeed = function addtoGameFeed() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Unkown";
      var event = arguments.length > 1 ? arguments[1] : undefined;

      var NewGameEventArray = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(gameEventData);

      NewGameEventArray.unshift({
        name: name,
        event: event
      });
      delete NewGameEventArray[10];
      delete NewGameEventArray[11];
      setGameEventData((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(NewGameEventArray));
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
    (0,_components_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_5__.listenToEvent)("PlayerLocationUpdate", function (id, pos, rot, data) {
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
      var vector = new three__WEBPACK_IMPORTED_MODULE_10__.Vector3();
      Camera.getWorldPosition(vector);
      socket.emit("LocationUpdate", vector, Camera.rotation);
    }, 10);

    var animate = function animate() {
      stats.begin();
      requestAnimationFrame(animate); // Update all moving parts

      (0,_components_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_6__.updateRenderCycle)(CurrentScene);
      Renders.render(SceneToGet, Camera);
      stats.end();
    };

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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameUI_gameFeed__WEBPACK_IMPORTED_MODULE_8__.CreateUI, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: sendChat,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          ref: function ref(_ref) {
            return setChild2(_ref);
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
      }, this), (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(gameEventData).map(function (e) {
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
    }, this), (_ref2 = typeof recievedSeed === "undefined") !== null && _ref2 !== void 0 ? _ref2 : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "LOADING SEED!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 53
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: function ref(_ref3) {
        return setChild(_ref3);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: function ref(_ref4) {
        return setChild(_ref4);
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
  return [_components_Context_socketioContext__WEBPACK_IMPORTED_MODULE_3__.useAppContext];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcyJdLCJuYW1lcyI6WyJTdGF0cyIsInJlcXVpcmUiLCJyZW5kZXIiLCJ1c2VTdGF0ZSIsImNoaWxkIiwic2V0Q2hpbGQiLCJnYW1lRXZlbnREYXRhIiwic2V0R2FtZUV2ZW50RGF0YSIsImRheSIsInNldERheSIsImNoaWxkMiIsInNldENoaWxkMiIsInNvY2tldCIsInVzZUFwcENvbnRleHQiLCJyZWNpZXZlZFNlZWQiLCJzZXRTZWVkIiwicmVuZGVyZWQiLCJzZXRSZW5kZXJlZCIsImNsaWVudHMiLCJzZXRDbGllbnRzIiwicGVyc29uRGF0YSIsInNldFBlcnNvbmFsRGF0YSIsInN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uIiwib25jZSIsInNlZWQiLCJjbGllbnQiLCJkYXRhIiwidXNlRWZmZWN0Iiwic3RhdHMiLCJzaG93UGFuZWwiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvbSIsIlNjZW5lVG9HZXQiLCJTY2VuZSIsIlJlbmRlcnMiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJvZ2FyaXRobWljRGVwdGhCdWZmZXIiLCJzZXRDbGVhckNvbG9yIiwiZm9nIiwiRm9nIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRvbUVsZW1lbnQiLCJDdXJyZW50U2NlbmUiLCJDYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbldpbmRvd1Jlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJnZW5lcmF0ZU1haW5TY2VuZSIsInJlcXVlc3RQb2ludGVyTG9jayIsIkNvbnRyb2xFdmVudExpc3RlbmVyIiwicGxheWVycyIsIm1ha2VDdWJlIiwiY29sb3IiLCJuYW1lIiwiZ3JvdXAiLCJUSFJFRSIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJlbWlzc2l2ZSIsImN1YmUiLCJhZGQiLCJjeWNsaW5kZXIiLCJtYXRlcmlhbDIiLCJjeWxpbmRlckJ1aWxkIiwicm90YXRlWCIsIk1hdGgiLCJQSSIsInBvc2l0aW9uIiwic2V0IiwiZ2VuZXJhdGVMYWJlbCIsInByZXZEYXRhIiwiYWRkdG9HYW1lRmVlZCIsImV2ZW50IiwiTmV3R2FtZUV2ZW50QXJyYXkiLCJ1bnNoaWZ0IiwiZm9yRWFjaCIsImUiLCJvbiIsImlkIiwiaG93IiwicmVtb3ZlIiwibGlzdGVuVG9FdmVudCIsInBvcyIsInJvdCIsInJvdGF0aW9uIiwiX3giLCJfeSIsIl96IiwieCIsInkiLCJ6IiwidGV4dCIsInNldEludGVydmFsIiwidmVjdG9yIiwiVmVjdG9yMyIsImdldFdvcmxkUG9zaXRpb24iLCJlbWl0IiwiYW5pbWF0ZSIsImJlZ2luIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlUmVuZGVyQ3ljbGUiLCJlbmQiLCJzZW5kQ2hhdCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImhlaWdodCIsInJlZiIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNERBQUQsQ0FBbkI7O0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxrQkFDSEMsK0NBQVEsRUFETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBQUEsbUJBRWFGLCtDQUFRLENBQUMsRUFBRCxDQUZyQjtBQUFBLE1BRXRCRyxhQUZzQjtBQUFBLE1BRVBDLGdCQUZPOztBQUFBLG1CQUlQSiwrQ0FBUSxDQUFDLFNBQUQsQ0FKRDtBQUFBLE1BSXRCSyxHQUpzQjtBQUFBLE1BSWpCQyxNQUppQjs7QUFBQSxtQkFLRE4sK0NBQVEsRUFMUDtB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STtBQUFLLFNBQUcsRUFBRSxhQUFDdUcsS0FBRDtBQUFBLGVBQVNoSCxRQUFRLENBQUNnSCxLQUFELENBQWpCO0FBQUE7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakNKLGVBa0NJO0FBQUssU0FBRyxFQUFFLGFBQUNBLEtBQUQ7QUFBQSxlQUFTaEgsUUFBUSxDQUFDZ0gsS0FBRCxDQUFqQjtBQUFBO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNDSDs7R0EvTnVCbkgsTTtVQU1MVyw4RSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0LmIzMDFhMTA0NDM2ZmE1YTdkNDU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9nLCBQZXJzcGVjdGl2ZUNhbWVyYSwgU2NlbmUsIFZlY3RvcjMsIFdlYkdMUmVuZGVyZXIgfSBmcm9tIFwidGhyZWVcIjtcclxudmFyIFN0YXRzID0gcmVxdWlyZShcInN0YXRzLmpzXCIpO1xyXG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGV4dC9zb2NrZXRpb0NvbnRleHRcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVMYWJlbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL25hbWV0YWdcIjtcclxuaW1wb3J0IHtcclxuICAgIHN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uLFxyXG4gICAgbGlzdGVuVG9FdmVudCxcclxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3JlLUFQSS9Db25uZWN0QVBJXCI7XHJcbmltcG9ydCB7IHVwZGF0ZVJlbmRlckN5Y2xlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29yZS1BUEkvUmVuZGVyaW5nSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZU1haW5TY2VuZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1NjZW5lcy9NYWluU2NlbmVIYW5kbGVyXCI7XHJcbmltcG9ydCB7IENyZWF0ZVVJIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZVVJL2dhbWVGZWVkXCI7XHJcbmltcG9ydCB7IENvbnRyb2xFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvY29udHJvbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IFtjaGlsZCwgc2V0Q2hpbGRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtnYW1lRXZlbnREYXRhLCBzZXRHYW1lRXZlbnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbZGF5LCBzZXREYXldID0gdXNlU3RhdGUoXCJub3QgZGF5XCIpO1xyXG4gICAgY29uc3QgW2NoaWxkMiwgc2V0Q2hpbGQyXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBzb2NrZXQgPSB1c2VBcHBDb250ZXh0KCk7O1xyXG4gICAgY29uc3QgW3JlY2lldmVkU2VlZCwgc2V0U2VlZF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3JlbmRlcmVkLCBzZXRSZW5kZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2xpZW50cywgc2V0Q2xpZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcGVyc29uRGF0YSwgc2V0UGVyc29uYWxEYXRhXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgc3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24oc29ja2V0KTtcclxuXHJcbiAgICBzb2NrZXQub25jZShcIndlbGNvbWVcIiwgKHNlZWQsIGNsaWVudCwgZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFNlZWQoc2VlZCk7XHJcbiAgICAgICAgc2V0Q2xpZW50cyhjbGllbnQpO1xyXG4gICAgICAgIHNldFBlcnNvbmFsRGF0YShkYXRhKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0eXBlb2YgY2hpbGQgPT09IFwidW5kZWZpbmVkXCIgfHxcclxuICAgICAgICAgICAgdHlwZW9mIHJlY2lldmVkU2VlZCA9PT0gXCJ1bmRlZmluZWRcIiB8fFxyXG4gICAgICAgICAgICByZW5kZXJlZCA9PT0gdHJ1ZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRSZW5kZXJlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRzID0gbmV3IFN0YXRzKCk7XHJcbiAgICAgICAgc3RhdHMuc2hvd1BhbmVsKDIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhdHMuZG9tKTtcclxuXHJcbiAgICAgICAgbGV0IFNjZW5lVG9HZXQgPSBuZXcgU2NlbmUoKTtcclxuICAgICAgICBsZXQgUmVuZGVycyA9IG5ldyBXZWJHTFJlbmRlcmVyKHtcclxuICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgICAgICAgICBhbHBoYTogdHJ1ZSxcclxuICAgICAgICAgICAgb2dhcml0aG1pY0RlcHRoQnVmZmVyOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBSZW5kZXJzLnNldENsZWFyQ29sb3IoXCIjODdjZWViXCIsIDEpO1xyXG5cclxuICAgICAgICBsZXQgZm9nID0gbmV3IEZvZygweERDREJERiwgMTAsIDEwMDAwMClcclxuICAgICAgICBTY2VuZVRvR2V0LmZvZyA9IGZvZ1xyXG5cclxuICAgICAgICBSZW5kZXJzLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgY2hpbGQuYXBwZW5kQ2hpbGQoUmVuZGVycy5kb21FbGVtZW50KTtcclxuXHJcbiAgICBcclxuXHJcbiAgICAgICAgbGV0IEN1cnJlbnRTY2VuZSA9IFwiTWFpblwiO1xyXG5cclxuICAgICAgICB2YXIgQ2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKFxyXG4gICAgICAgICAgICA3NSxcclxuICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgIDAuMSxcclxuICAgICAgICAgICAgMTAwMDAwMDAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xyXG5cclxuICAgICAgICAgICAgQ2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgICBDYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgICAgICAgICAgUmVuZGVycy5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdlbmVyYXRlTWFpblNjZW5lKFxyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LFxyXG4gICAgICAgICAgICBSZW5kZXJzLFxyXG4gICAgICAgICAgICBkb2N1bWVudCxcclxuICAgICAgICAgICAgcmVjaWV2ZWRTZWVkLFxyXG4gICAgICAgICAgICBjaGlsZDIsXHJcbiAgICAgICAgICAgIENhbWVyYVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIFJlbmRlcnMuZG9tRWxlbWVudC5yZXF1ZXN0UG9pbnRlckxvY2soKTtcclxuICAgICAgICBDb250cm9sRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgY2hpbGQyKVxyXG5cclxuICAgICAgICBsZXQgcGxheWVycyA9IFtdO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBtYWtlQ3ViZShjb2xvciA9IFwicmdiKDAsMCwwKVwiLCBuYW1lID0gXCJ1bmtvd25cIikge1xyXG4gICAgICAgICAgICBjb25zdCBncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xyXG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAxLCAxKTtcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKGNvbG9yKSxcclxuICAgICAgICAgICAgICAgIGVtaXNzaXZlOiBuZXcgVEhSRUUuQ29sb3IoY29sb3IpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIGdyb3VwLmFkZChjdWJlKTtcclxuICAgICAgICAgICAgY29uc3QgY3ljbGluZGVyID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC4zLCAwLjMsIDAuNiwgMzApO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbDIgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjeWxpbmRlckJ1aWxkID0gbmV3IFRIUkVFLk1lc2goY3ljbGluZGVyLCBtYXRlcmlhbDIpO1xyXG4gICAgICAgICAgICBjeWxpbmRlckJ1aWxkLnJvdGF0ZVgoTWF0aC5QSSAvIDIgKyBNYXRoLlBJKTtcclxuICAgICAgICAgICAgY3lsaW5kZXJCdWlsZC5wb3NpdGlvbi5zZXQoMCwgMCwgLTAuNik7XHJcbiAgICAgICAgICAgIGdyb3VwLmFkZChjeWxpbmRlckJ1aWxkKTtcclxuXHJcbiAgICAgICAgICAgIGdlbmVyYXRlTGFiZWwobmFtZSwgZ3JvdXApO1xyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LmFkZChncm91cCk7XHJcbiAgICAgICAgICAgIGdyb3VwLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcHJldkRhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGFkZHRvR2FtZUZlZWQgPSAobmFtZSA9IFwiVW5rb3duXCIsIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBOZXdHYW1lRXZlbnRBcnJheSA9IFsuLi5nYW1lRXZlbnREYXRhXTtcclxuICAgICAgICAgICAgTmV3R2FtZUV2ZW50QXJyYXkudW5zaGlmdCh7IG5hbWUsIGV2ZW50IH0pO1xyXG4gICAgICAgICAgICBkZWxldGUgTmV3R2FtZUV2ZW50QXJyYXlbMTBdO1xyXG4gICAgICAgICAgICBkZWxldGUgTmV3R2FtZUV2ZW50QXJyYXlbMTFdO1xyXG4gICAgICAgICAgICBzZXRHYW1lRXZlbnREYXRhKFsuLi5OZXdHYW1lRXZlbnRBcnJheV0pO1xyXG4gICAgICAgICAgICBwcmV2RGF0YSA9IE5ld0dhbWVFdmVudEFycmF5O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNsaWVudHMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IG1ha2VDdWJlKGUuY29sb3IsIGUubmFtZSk7XHJcbiAgICAgICAgICAgIHBsYXllcnNbYCR7ZX1gXSA9IGN1YmU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNvY2tldC5vbihcIk5ld1BsYXllclwiLCAoaWQsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBtYWtlQ3ViZShkYXRhLmNvbG9yLCBkYXRhLm5hbWUpO1xyXG4gICAgICAgICAgICBhZGR0b0dhbWVGZWVkKGRhdGE/Lm5hbWUsIFwiSm9pbmVkIHRoZSBnYW1lIVwiKTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllcnNbYCR7aWR9YF0gPSBjdWJlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oXCJMb3N0UExheWVyXCIsIChpZCwgaG93LCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdWJlID0gcGxheWVyc1tgJHtpZH1gXTtcclxuICAgICAgICAgICAgU2NlbmVUb0dldC5yZW1vdmUoY3ViZSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBwbGF5ZXJzW2Ake2lkfWBdO1xyXG4gICAgICAgICAgICBhZGR0b0dhbWVGZWVkKFxyXG4gICAgICAgICAgICAgICAgZGF0YT8ubmFtZSxcclxuICAgICAgICAgICAgICAgIGhvdyA9PT0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJXYXMgcmVtb3ZlZCBmcm9tIHRoZSBnYW1lIGZvciBiZWluZyBpbmFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkxlZnQgdGhlIGdhbWUhXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGlzdGVuVG9FdmVudChcIlBsYXllckxvY2F0aW9uVXBkYXRlXCIsIChpZCwgcG9zLCByb3QsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBwbGF5ZXJzW2Ake2lkfWBdO1xyXG4gICAgICAgICAgICBpZiAoY3ViZSkge1xyXG4gICAgICAgICAgICAgICAgY3ViZS5yb3RhdGlvbi5zZXQocm90Ll94LCByb3QuX3ksIHJvdC5feik7XHJcbiAgICAgICAgICAgICAgICBjdWJlLnBvc2l0aW9uLnNldChwb3MueCwgcG9zLnksIHBvcy56KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdWJlID0gbWFrZUN1YmUoZGF0YT8uY29sb3IsIGRhdGE/Lm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHBsYXllcnNbYCR7aWR9YF0gPSBjdWJlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc29ja2V0Lm9uKFwiTmV3Q2hhdFwiLCAoZGF0YSwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICBhZGR0b0dhbWVGZWVkKGRhdGEubmFtZSwgdGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmVjdG9yID0gbmV3IFZlY3RvcjMoKVxyXG4gICAgICAgICAgICBDYW1lcmEuZ2V0V29ybGRQb3NpdGlvbih2ZWN0b3IpXHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiTG9jYXRpb25VcGRhdGVcIiwgdmVjdG9yLCBDYW1lcmEucm90YXRpb24pO1xyXG4gICAgICAgIH0sIDEwKTtcclxuXHJcbiAgICAgICAgdmFyIGFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0YXRzLmJlZ2luKCk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBhbGwgbW92aW5nIHBhcnRzXHJcbiAgICAgICAgICAgIHVwZGF0ZVJlbmRlckN5Y2xlKEN1cnJlbnRTY2VuZSk7XHJcblxyXG4gICAgICAgICAgICBSZW5kZXJzLnJlbmRlcihTY2VuZVRvR2V0LCBDYW1lcmEpO1xyXG4gICAgICAgICAgICBzdGF0cy5lbmQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhbmltYXRlKCk7XHJcbiAgICB9LCBbY2hpbGQsIGNsaWVudHNdKTtcclxuXHJcbiAgICBsZXQgc2VuZENoYXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzb2NrZXQuZW1pdChcInNlbmRDaGF0XCIsIGNoaWxkMi52YWx1ZSk7XHJcbiAgICAgICAgY2hpbGQyLnZhbHVlID0gXCJcIjtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7dHlwZW9mIHBlcnNvbkRhdGEgPT09IFwidW5kZWZpbmVkXCIgPyBcIkxPQURJTkcuLi5cIiA6IHBlcnNvbkRhdGEubmFtZX1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjgwcHhcIixcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZVVJIC8+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZENoYXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9eyhyZWYpID0+IHNldENoaWxkMihyZWYpfT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiU3VibWl0XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIHtbLi4uZ2FtZUV2ZW50RGF0YV0ubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZS5uYW1lfSAtIHtlLmV2ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHt0eXBlb2YgcmVjaWV2ZWRTZWVkID09PSBcInVuZGVmaW5lZFwiID8/IDxoMT5MT0FESU5HIFNFRUQhPC9oMT59XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXsocmVmKSA9PiBzZXRDaGlsZChyZWYpfT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiByZWY9eyhyZWYpID0+IHNldENoaWxkKHJlZil9PjwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==