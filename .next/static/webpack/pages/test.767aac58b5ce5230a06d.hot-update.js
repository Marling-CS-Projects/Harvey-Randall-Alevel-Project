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
      requestAnimationFrame(animate);
      console.log(Camera.position); // Update all moving parts

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
      lineNumber: 207,
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
        lineNumber: 222,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: sendChat,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          ref: function ref(_ref) {
            return setChild2(_ref);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 223,
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
          lineNumber: 232,
          columnNumber: 25
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }, this), (_ref2 = typeof recievedSeed === "undefined") !== null && _ref2 !== void 0 ? _ref2 : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "LOADING SEED!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 53
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: function ref(_ref3) {
        return setChild(_ref3);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: function ref(_ref4) {
        return setChild(_ref4);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 206,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcyJdLCJuYW1lcyI6WyJTdGF0cyIsInJlcXVpcmUiLCJyZW5kZXIiLCJ1c2VTdGF0ZSIsImNoaWxkIiwic2V0Q2hpbGQiLCJnYW1lRXZlbnREYXRhIiwic2V0R2FtZUV2ZW50RGF0YSIsImRheSIsInNldERheSIsImNoaWxkMiIsInNldENoaWxkMiIsInNvY2tldCIsInVzZUFwcENvbnRleHQiLCJyZWNpZXZlZFNlZWQiLCJzZXRTZWVkIiwicmVuZGVyZWQiLCJzZXRSZW5kZXJlZCIsImNsaWVudHMiLCJzZXRDbGllbnRzIiwicGVyc29uRGF0YSIsInNldFBlcnNvbmFsRGF0YSIsInN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uIiwib25jZSIsInNlZWQiLCJjbGllbnQiLCJkYXRhIiwidXNlRWZmZWN0Iiwic3RhdHMiLCJzaG93UGFuZWwiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvbSIsIlNjZW5lVG9HZXQiLCJTY2VuZSIsIlJlbmRlcnMiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJvZ2FyaXRobWljRGVwdGhCdWZmZXIiLCJzZXRDbGVhckNvbG9yIiwiZm9nIiwiRm9nIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRvbUVsZW1lbnQiLCJDdXJyZW50U2NlbmUiLCJDYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbldpbmRvd1Jlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJnZW5lcmF0ZU1haW5TY2VuZSIsInJlcXVlc3RQb2ludGVyTG9jayIsIkNvbnRyb2xFdmVudExpc3RlbmVyIiwicGxheWVycyIsIm1ha2VDdWJlIiwiY29sb3IiLCJuYW1lIiwiZ3JvdXAiLCJUSFJFRSIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJlbWlzc2l2ZSIsImN1YmUiLCJhZGQiLCJjeWNsaW5kZXIiLCJtYXRlcmlhbDIiLCJjeWxpbmRlckJ1aWxkIiwicm90YXRlWCIsIk1hdGgiLCJQSSIsInBvc2l0aW9uIiwic2V0IiwiZ2VuZXJhdGVMYWJlbCIsInByZXZEYXRhIiwiYWRkdG9HYW1lRmVlZCIsImV2ZW50IiwiTmV3R2FtZUV2ZW50QXJyYXkiLCJ1bnNoaWZ0IiwiZm9yRWFjaCIsImUiLCJvbiIsImlkIiwiaG93IiwicmVtb3ZlIiwibGlzdGVuVG9FdmVudCIsInBvcyIsInJvdCIsInJvdGF0aW9uIiwiX3giLCJfeSIsIl96IiwieCIsInkiLCJ6IiwidGV4dCIsInNldEludGVydmFsIiwidmVjdG9yIiwiVmVjdG9yMyIsImdldFdvcmxkUG9zaXRpb24iLCJlbWl0IiwiYW5pbWF0ZSIsImJlZ2luIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZVJlbmRlckN5Y2xlIiwiZW5kIiwic2VuZENoYXQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwibWFyZ2luVG9wIiwid2lkdGgiLCJoZWlnaHQiLCJyZWYiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDREQUFELENBQW5COztBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsa0JBQ0hDLCtDQUFRLEVBREw7QUFBQSxNQUN0QkMsS0FEc0I7QUFBQSxNQUNmQyxRQURlOztBQUFBLG1CQUVhRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGckI7QUFBQSxNQUV0QkcsYUFGc0I7QUFBQSxNQUVQQyxnQkFGTzs7QUFBQSxtQkFJUEosK0NBQVEsQ0FBQyxTQUFELENBSkQ7QUFBQSxNQUl0QkssR0FKc0I7QUFBQSxNQUlqQkMsTUFKaUI7O0FBQUEsbUJB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UCxLQUF3QixXQWhDN0Isc0RBZ0M0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDNUMsZUFpQ0k7QUFBSyxTQUFHLEVBQUUsYUFBQ3lHLEtBQUQ7QUFBQSxlQUFTbEgsUUFBUSxDQUFDa0gsS0FBRCxDQUFqQjtBQUFBO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpDSixlQWtDSTtBQUFLLFNBQUcsRUFBRSxhQUFDQSxLQUFEO0FBQUEsZUFBU2xILFFBQVEsQ0FBQ2tILEtBQUQsQ0FBakI7QUFBQTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzQ0g7O0dBaE91QnJILE07VUFNTFcsOEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC43NjdhYWM1OGI1Y2U1MjMwYTA2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZvZywgUGVyc3BlY3RpdmVDYW1lcmEsIFNjZW5lLCBWZWN0b3IzLCBXZWJHTFJlbmRlcmVyIH0gZnJvbSBcInRocmVlXCI7XHJcbnZhciBTdGF0cyA9IHJlcXVpcmUoXCJzdGF0cy5qc1wiKTtcclxuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRleHQvc29ja2V0aW9Db250ZXh0XCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlTGFiZWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9uYW1ldGFnXCI7XHJcbmltcG9ydCB7XHJcbiAgICBzdGFydFNldmVyQ2xpZW50Q29tbXVuaWNhdGlvbixcclxuICAgIGxpc3RlblRvRXZlbnQsXHJcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29yZS1BUEkvQ29ubmVjdEFQSVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVSZW5kZXJDeWNsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvcmUtQVBJL1JlbmRlcmluZ0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVNYWluU2NlbmUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TY2VuZXMvTWFpblNjZW5lSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBDcmVhdGVVSSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVVSS9nYW1lRmVlZFwiO1xyXG5pbXBvcnQgeyBDb250cm9sRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL2NvbnRyb2xzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBbY2hpbGQsIHNldENoaWxkXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZ2FtZUV2ZW50RGF0YSwgc2V0R2FtZUV2ZW50RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2RheSwgc2V0RGF5XSA9IHVzZVN0YXRlKFwibm90IGRheVwiKTtcclxuICAgIGNvbnN0IFtjaGlsZDIsIHNldENoaWxkMl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3Qgc29ja2V0ID0gdXNlQXBwQ29udGV4dCgpOztcclxuICAgIGNvbnN0IFtyZWNpZXZlZFNlZWQsIHNldFNlZWRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtyZW5kZXJlZCwgc2V0UmVuZGVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NsaWVudHMsIHNldENsaWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3BlcnNvbkRhdGEsIHNldFBlcnNvbmFsRGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIHN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uKHNvY2tldCk7XHJcblxyXG4gICAgc29ja2V0Lm9uY2UoXCJ3ZWxjb21lXCIsIChzZWVkLCBjbGllbnQsIGRhdGEpID0+IHtcclxuICAgICAgICBzZXRTZWVkKHNlZWQpO1xyXG4gICAgICAgIHNldENsaWVudHMoY2xpZW50KTtcclxuICAgICAgICBzZXRQZXJzb25hbERhdGEoZGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdHlwZW9mIGNoaWxkID09PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgICAgIHR5cGVvZiByZWNpZXZlZFNlZWQgPT09IFwidW5kZWZpbmVkXCIgfHxcclxuICAgICAgICAgICAgcmVuZGVyZWQgPT09IHRydWVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0UmVuZGVyZWQodHJ1ZSk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0cyA9IG5ldyBTdGF0cygpO1xyXG4gICAgICAgIHN0YXRzLnNob3dQYW5lbCgyKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXRzLmRvbSk7XHJcblxyXG4gICAgICAgIGxldCBTY2VuZVRvR2V0ID0gbmV3IFNjZW5lKCk7XHJcbiAgICAgICAgbGV0IFJlbmRlcnMgPSBuZXcgV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgICAgICAgYWxwaGE6IHRydWUsXHJcbiAgICAgICAgICAgIG9nYXJpdGhtaWNEZXB0aEJ1ZmZlcjogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUmVuZGVycy5zZXRDbGVhckNvbG9yKFwiIzg3Y2VlYlwiLCAxKTtcclxuXHJcbiAgICAgICAgbGV0IGZvZyA9IG5ldyBGb2coMHhEQ0RCREYsIDEwLCAxMDAwMDApXHJcbiAgICAgICAgU2NlbmVUb0dldC5mb2cgPSBmb2dcclxuXHJcbiAgICAgICAgUmVuZGVycy5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgIGNoaWxkLmFwcGVuZENoaWxkKFJlbmRlcnMuZG9tRWxlbWVudCk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgICAgIGxldCBDdXJyZW50U2NlbmUgPSBcIk1haW5cIjtcclxuXHJcbiAgICAgICAgdmFyIENhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYShcclxuICAgICAgICAgICAgNzUsXHJcbiAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgICAgICAwLjEsXHJcbiAgICAgICAgICAgIDEwMDAwMDAwMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcclxuXHJcbiAgICAgICAgICAgIENhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICAgICAgQ2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICAgICAgICAgIFJlbmRlcnMuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZW5lcmF0ZU1haW5TY2VuZShcclxuICAgICAgICAgICAgU2NlbmVUb0dldCxcclxuICAgICAgICAgICAgUmVuZGVycyxcclxuICAgICAgICAgICAgZG9jdW1lbnQsXHJcbiAgICAgICAgICAgIHJlY2lldmVkU2VlZCxcclxuICAgICAgICAgICAgY2hpbGQyLFxyXG4gICAgICAgICAgICBDYW1lcmFcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBSZW5kZXJzLmRvbUVsZW1lbnQucmVxdWVzdFBvaW50ZXJMb2NrKCk7XHJcbiAgICAgICAgQ29udHJvbEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsIGNoaWxkMilcclxuXHJcbiAgICAgICAgbGV0IHBsYXllcnMgPSBbXTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWFrZUN1YmUoY29sb3IgPSBcInJnYigwLDAsMClcIiwgbmFtZSA9IFwidW5rb3duXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcclxuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMSwgMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihjb2xvciksXHJcbiAgICAgICAgICAgICAgICBlbWlzc2l2ZTogbmV3IFRIUkVFLkNvbG9yKGNvbG9yKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1YmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICBncm91cC5hZGQoY3ViZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN5Y2xpbmRlciA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAuMywgMC4zLCAwLjYsIDMwKTtcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwyID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgY3lsaW5kZXJCdWlsZCA9IG5ldyBUSFJFRS5NZXNoKGN5Y2xpbmRlciwgbWF0ZXJpYWwyKTtcclxuICAgICAgICAgICAgY3lsaW5kZXJCdWlsZC5yb3RhdGVYKE1hdGguUEkgLyAyICsgTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIGN5bGluZGVyQnVpbGQucG9zaXRpb24uc2V0KDAsIDAsIC0wLjYpO1xyXG4gICAgICAgICAgICBncm91cC5hZGQoY3lsaW5kZXJCdWlsZCk7XHJcblxyXG4gICAgICAgICAgICBnZW5lcmF0ZUxhYmVsKG5hbWUsIGdyb3VwKTtcclxuICAgICAgICAgICAgU2NlbmVUb0dldC5hZGQoZ3JvdXApO1xyXG4gICAgICAgICAgICBncm91cC5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByZXZEYXRhID0gW107XHJcblxyXG4gICAgICAgIGxldCBhZGR0b0dhbWVGZWVkID0gKG5hbWUgPSBcIlVua293blwiLCBldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgTmV3R2FtZUV2ZW50QXJyYXkgPSBbLi4uZ2FtZUV2ZW50RGF0YV07XHJcbiAgICAgICAgICAgIE5ld0dhbWVFdmVudEFycmF5LnVuc2hpZnQoeyBuYW1lLCBldmVudCB9KTtcclxuICAgICAgICAgICAgZGVsZXRlIE5ld0dhbWVFdmVudEFycmF5WzEwXTtcclxuICAgICAgICAgICAgZGVsZXRlIE5ld0dhbWVFdmVudEFycmF5WzExXTtcclxuICAgICAgICAgICAgc2V0R2FtZUV2ZW50RGF0YShbLi4uTmV3R2FtZUV2ZW50QXJyYXldKTtcclxuICAgICAgICAgICAgcHJldkRhdGEgPSBOZXdHYW1lRXZlbnRBcnJheTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjbGllbnRzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBtYWtlQ3ViZShlLmNvbG9yLCBlLm5hbWUpO1xyXG4gICAgICAgICAgICBwbGF5ZXJzW2Ake2V9YF0gPSBjdWJlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oXCJOZXdQbGF5ZXJcIiwgKGlkLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdWJlID0gbWFrZUN1YmUoZGF0YS5jb2xvciwgZGF0YS5uYW1lKTtcclxuICAgICAgICAgICAgYWRkdG9HYW1lRmVlZChkYXRhPy5uYW1lLCBcIkpvaW5lZCB0aGUgZ2FtZSFcIik7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXJzW2Ake2lkfWBdID0gY3ViZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiTG9zdFBMYXllclwiLCAoaWQsIGhvdywgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IHBsYXllcnNbYCR7aWR9YF07XHJcbiAgICAgICAgICAgIFNjZW5lVG9HZXQucmVtb3ZlKGN1YmUpO1xyXG4gICAgICAgICAgICBkZWxldGUgcGxheWVyc1tgJHtpZH1gXTtcclxuICAgICAgICAgICAgYWRkdG9HYW1lRmVlZChcclxuICAgICAgICAgICAgICAgIGRhdGE/Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICBob3cgPT09IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA/IFwiV2FzIHJlbW92ZWQgZnJvbSB0aGUgZ2FtZSBmb3IgYmVpbmcgaW5hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJMZWZ0IHRoZSBnYW1lIVwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxpc3RlblRvRXZlbnQoXCJQbGF5ZXJMb2NhdGlvblVwZGF0ZVwiLCAoaWQsIHBvcywgcm90LCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdWJlID0gcGxheWVyc1tgJHtpZH1gXTtcclxuICAgICAgICAgICAgaWYgKGN1YmUpIHtcclxuICAgICAgICAgICAgICAgIGN1YmUucm90YXRpb24uc2V0KHJvdC5feCwgcm90Ll95LCByb3QuX3opO1xyXG4gICAgICAgICAgICAgICAgY3ViZS5wb3NpdGlvbi5zZXQocG9zLngsIHBvcy55LCBwb3Mueik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3ViZSA9IG1ha2VDdWJlKGRhdGE/LmNvbG9yLCBkYXRhPy5uYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJzW2Ake2lkfWBdID0gY3ViZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNvY2tldC5vbihcIk5ld0NoYXRcIiwgKGRhdGEsIHRleHQpID0+IHtcclxuICAgICAgICAgICAgYWRkdG9HYW1lRmVlZChkYXRhLm5hbWUsIHRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHZlY3RvciA9IG5ldyBWZWN0b3IzKClcclxuICAgICAgICAgICAgQ2FtZXJhLmdldFdvcmxkUG9zaXRpb24odmVjdG9yKVxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcIkxvY2F0aW9uVXBkYXRlXCIsIHZlY3RvciwgQ2FtZXJhLnJvdGF0aW9uKTtcclxuICAgICAgICB9LCAxMCk7XHJcblxyXG4gICAgICAgIHZhciBhbmltYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdGF0cy5iZWdpbigpO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKENhbWVyYS5wb3NpdGlvbilcclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBhbGwgbW92aW5nIHBhcnRzXHJcbiAgICAgICAgICAgIHVwZGF0ZVJlbmRlckN5Y2xlKEN1cnJlbnRTY2VuZSk7XHJcblxyXG4gICAgICAgICAgICBSZW5kZXJzLnJlbmRlcihTY2VuZVRvR2V0LCBDYW1lcmEpO1xyXG4gICAgICAgICAgICBzdGF0cy5lbmQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhbmltYXRlKCk7XHJcbiAgICB9LCBbY2hpbGQsIGNsaWVudHNdKTtcclxuXHJcbiAgICBsZXQgc2VuZENoYXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzb2NrZXQuZW1pdChcInNlbmRDaGF0XCIsIGNoaWxkMi52YWx1ZSk7XHJcbiAgICAgICAgY2hpbGQyLnZhbHVlID0gXCJcIjtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7dHlwZW9mIHBlcnNvbkRhdGEgPT09IFwidW5kZWZpbmVkXCIgPyBcIkxPQURJTkcuLi5cIiA6IHBlcnNvbkRhdGEubmFtZX1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjgwcHhcIixcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZVVJIC8+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZENoYXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9eyhyZWYpID0+IHNldENoaWxkMihyZWYpfT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiU3VibWl0XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIHtbLi4uZ2FtZUV2ZW50RGF0YV0ubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZS5uYW1lfSAtIHtlLmV2ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHt0eXBlb2YgcmVjaWV2ZWRTZWVkID09PSBcInVuZGVmaW5lZFwiID8/IDxoMT5MT0FESU5HIFNFRUQhPC9oMT59XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXsocmVmKSA9PiBzZXRDaGlsZChyZWYpfT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiByZWY9eyhyZWYpID0+IHNldENoaWxkKHJlZil9PjwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==