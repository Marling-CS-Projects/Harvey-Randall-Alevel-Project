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
    if (typeof child === "undefined" || typeof recievedSeed === "undefined" || rendered === true) {
      return;
    }

    (0,_components_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_12__.preLoadAllModels)();
    setRendered(true);
    var stats = new Stats();
    stats.showPanel(2);
    document.body.appendChild(stats.dom);
    var SceneToGet = new three__WEBPACK_IMPORTED_MODULE_13__.Scene();
    var Renders = new three__WEBPACK_IMPORTED_MODULE_13__.WebGLRenderer({
      antialias: true,
      alpha: true,
      ogarithmicDepthBuffer: true
    });
    Renders.setClearColor("#87ceeb", 1);
    var fog = new three__WEBPACK_IMPORTED_MODULE_13__.Fog(0x00000, 10, 1000);
    SceneToGet.fog = fog;
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
      var vector = new three__WEBPACK_IMPORTED_MODULE_13__.Vector3();
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
        lineNumber: 219,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: function ref(_ref2) {
        setChild(_ref2);
      }
      /* */

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 212,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcyJdLCJuYW1lcyI6WyJTdGF0cyIsInJlcXVpcmUiLCJyZW5kZXIiLCJ1c2VTdGF0ZSIsImNoaWxkIiwic2V0Q2hpbGQiLCJnYW1lRXZlbnREYXRhIiwic2V0R2FtZUV2ZW50RGF0YSIsImRheSIsInNldERheSIsImNoaWxkMiIsInNldENoaWxkMiIsInNvY2tldCIsInVzZUFwcENvbnRleHQiLCJyZWNpZXZlZFNlZWQiLCJzZXRTZWVkIiwicmVuZGVyZWQiLCJzZXRSZW5kZXJlZCIsImNsaWVudHMiLCJzZXRDbGllbnRzIiwicGVyc29uRGF0YSIsInNldFBlcnNvbmFsRGF0YSIsIlZlY3RvcjMiLCJ0b0FycmF5IiwicG9zaXRvbiIsInNldFBvc2l0aW9uIiwic3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24iLCJvbmNlIiwic2VlZCIsImNsaWVudCIsImRhdGEiLCJ1c2VFZmZlY3QiLCJwcmVMb2FkQWxsTW9kZWxzIiwic3RhdHMiLCJzaG93UGFuZWwiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvbSIsIlNjZW5lVG9HZXQiLCJTY2VuZSIsIlJlbmRlcnMiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJvZ2FyaXRobWljRGVwdGhCdWZmZXIiLCJzZXRDbGVhckNvbG9yIiwiZm9nIiwiRm9nIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRvbUVsZW1lbnQiLCJDdXJyZW50U2NlbmUiLCJDYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbldpbmRvd1Jlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJnZW5lcmF0ZU1haW5TY2VuZSIsInJlcXVlc3RQb2ludGVyTG9jayIsIkNvbnRyb2xFdmVudExpc3RlbmVyIiwicGxheWVycyIsIm1ha2VDdWJlIiwiY29sb3IiLCJuYW1lIiwiZ3JvdXAiLCJUSFJFRSIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJlbWlzc2l2ZSIsImN1YmUiLCJhZGQiLCJjeWNsaW5kZXIiLCJtYXRlcmlhbDIiLCJjeWxpbmRlckJ1aWxkIiwicm90YXRlWCIsIk1hdGgiLCJQSSIsInBvc2l0aW9uIiwic2V0IiwiZ2VuZXJhdGVMYWJlbCIsInByZXZEYXRhIiwiYWRkdG9HYW1lRmVlZCIsImV2ZW50IiwiTmV3R2FtZUV2ZW50QXJyYXkiLCJ1bnNoaWZ0IiwiZm9yRWFjaCIsImUiLCJvbiIsImlkIiwiaG93IiwicmVtb3ZlIiwibGlzdGVuVG9FdmVudCIsInBvcyIsInJvdCIsInJvdGF0aW9uIiwiX3giLCJfeSIsIl96IiwieCIsInkiLCJ6IiwidGV4dCIsInNldEludGVydmFsIiwidmVjdG9yIiwiZ2V0V29ybGRQb3NpdGlvbiIsImVtaXQiLCJhbmltYXRlIiwiYmVnaW4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGVSZW5kZXJDeWNsZSIsInJvdW5kIiwiZW5kIiwic2VuZENoYXQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwid2lkdGgiLCJoZWlnaHQiLCJyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDREQUFELENBQW5COztBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ0hDLCtDQUFRLEVBREw7QUFBQSxNQUN0QkMsS0FEc0I7QUFBQSxNQUNmQyxRQURlOztBQUFBLG1CQUVhRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGckI7QUFBQSxNQUV0QkcsYUFGc0I7QUFBQSxNQUVQQyxnQkFGTzs7QUFBQSxtQkFJUEosK0NBQVEsQ0FBQyxTQUFELENBSkQ7QUFBQSxNQUl0QkssR0FKc0I7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RCx1QkFBTyxDQUFDdkMsTUFBUixDQUFlcUMsVUFBZixFQUEyQmdCLE1BQTNCO0FBQ0F0QixxQkFBSyxDQUFDa0YsR0FBTjs7QUFkVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFQTCxPQUFPO0FBQUE7QUFBQTtBQUFBLE9BQVg7O0FBaUJBQSxXQUFPO0FBQ1YsR0FqS1EsRUFpS04sQ0FBQzFHLEtBQUQsRUFBUWMsT0FBUixDQWpLTSxDQUFUOztBQW1LQSxNQUFJa0csUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQzFCLENBQUQsRUFBTztBQUNsQkEsS0FBQyxDQUFDMkIsY0FBRjtBQUNBekcsVUFBTSxDQUFDaUcsSUFBUCxDQUFZLFVBQVosRUFBd0JuRyxNQUFNLENBQUM0RyxLQUEvQjtBQUNBNUcsVUFBTSxDQUFDNEcsS0FBUCxHQUFlLEVBQWY7QUFDSCxHQUpEOztBQU1BLHNCQUNJO0FBQUEsNEJBQ0k7QUFDSSxXQUFLLEVBQUU7QUFDSEMsYUFBSyxFQUFFLE9BREo7QUFFSEMsY0FBTSxFQUFFLE9BRkw7QUFHSHZDLGdCQUFRLEVBQUU7QUFIUCxPQURYO0FBQUEsNkJBTUksOERBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVVJO0FBQUssU0FBRyxFQUFFLGFBQUN3QyxLQUFELEVBQVM7QUFBRXBILGdCQUFRLENBQUNvSCxLQUFELENBQVI7QUFBZTtBQUFDOztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFjSDs7R0E3TXVCdkgsTTtVQU1MVyw4RSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0LmIwY2M3ODgxY2VhN2VjN2JhMjBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9nLCBQZXJzcGVjdGl2ZUNhbWVyYSwgU2NlbmUsIFZlY3RvcjMsIFdlYkdMUmVuZGVyZXIgfSBmcm9tIFwidGhyZWVcIjtcclxudmFyIFN0YXRzID0gcmVxdWlyZShcInN0YXRzLmpzXCIpO1xyXG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGV4dC9zb2NrZXRpb0NvbnRleHRcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVMYWJlbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL25hbWV0YWdcIjtcclxuaW1wb3J0IHtcclxuICAgIHN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uLFxyXG4gICAgbGlzdGVuVG9FdmVudCxcclxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3JlLUFQSS9Db25uZWN0QVBJXCI7XHJcbmltcG9ydCB7IHVwZGF0ZVJlbmRlckN5Y2xlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29yZS1BUEkvUmVuZGVyaW5nSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZU1haW5TY2VuZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1NjZW5lcy9NYWluU2NlbmVIYW5kbGVyXCI7XHJcbmltcG9ydCB7IENyZWF0ZVVJIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZVVJL2VudHJ5UG9pbnQudHN4XCI7XHJcbmltcG9ydCB7IENvbnRyb2xFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgcHJlTG9hZEFsbE1vZGVscyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9HTEJMb2FkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IFtjaGlsZCwgc2V0Q2hpbGRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtnYW1lRXZlbnREYXRhLCBzZXRHYW1lRXZlbnREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbZGF5LCBzZXREYXldID0gdXNlU3RhdGUoXCJub3QgZGF5XCIpO1xyXG4gICAgY29uc3QgW2NoaWxkMiwgc2V0Q2hpbGQyXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBzb2NrZXQgPSB1c2VBcHBDb250ZXh0KCk7XHJcbiAgICBjb25zdCBbcmVjaWV2ZWRTZWVkLCBzZXRTZWVkXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcmVuZGVyZWQsIHNldFJlbmRlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjbGllbnRzLCBzZXRDbGllbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwZXJzb25EYXRhLCBzZXRQZXJzb25hbERhdGFdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBbcG9zaXRvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUobmV3IFZlY3RvcjMoKS50b0FycmF5KCkpO1xyXG5cclxuICAgIHN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uKHNvY2tldCk7XHJcblxyXG4gICAgc29ja2V0Lm9uY2UoXCJ3ZWxjb21lXCIsIChzZWVkLCBjbGllbnQsIGRhdGEpID0+IHtcclxuICAgICAgICBzZXRTZWVkKHNlZWQpO1xyXG4gICAgICAgIHNldENsaWVudHMoY2xpZW50KTtcclxuICAgICAgICBzZXRQZXJzb25hbERhdGEoZGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdHlwZW9mIGNoaWxkID09PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgICAgIHR5cGVvZiByZWNpZXZlZFNlZWQgPT09IFwidW5kZWZpbmVkXCIgfHxcclxuICAgICAgICAgICAgcmVuZGVyZWQgPT09IHRydWVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJlTG9hZEFsbE1vZGVscygpXHJcblxyXG4gICAgICAgIHNldFJlbmRlcmVkKHRydWUpO1xyXG5cclxuICAgICAgICBsZXQgc3RhdHMgPSBuZXcgU3RhdHMoKTtcclxuICAgICAgICBzdGF0cy5zaG93UGFuZWwoMik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5kb20pO1xyXG5cclxuICAgICAgICBsZXQgU2NlbmVUb0dldCA9IG5ldyBTY2VuZSgpO1xyXG4gICAgICAgIGxldCBSZW5kZXJzID0gbmV3IFdlYkdMUmVuZGVyZXIoe1xyXG4gICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgICAgIGFscGhhOiB0cnVlLFxyXG4gICAgICAgICAgICBvZ2FyaXRobWljRGVwdGhCdWZmZXI6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFJlbmRlcnMuc2V0Q2xlYXJDb2xvcihcIiM4N2NlZWJcIiwgMSk7XHJcblxyXG4gICAgICAgIGxldCBmb2cgPSBuZXcgRm9nKDB4MDAwMDAsIDEwLCAxMDAwKTtcclxuICAgICAgICBTY2VuZVRvR2V0LmZvZyA9IGZvZztcclxuXHJcbiAgICAgICAgUmVuZGVycy5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgIGNoaWxkLmFwcGVuZENoaWxkKFJlbmRlcnMuZG9tRWxlbWVudCk7XHJcblxyXG4gICAgICAgIGxldCBDdXJyZW50U2NlbmUgPSBcIk1haW5cIjtcclxuXHJcbiAgICAgICAgdmFyIENhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYShcclxuICAgICAgICAgICAgNzUsXHJcbiAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgICAgICAwLjEsXHJcbiAgICAgICAgICAgIDEwMDAwMDAwMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uV2luZG93UmVzaXplLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xyXG4gICAgICAgICAgICBDYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgIENhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG4gICAgICAgICAgICBSZW5kZXJzLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZW5lcmF0ZU1haW5TY2VuZShcclxuICAgICAgICAgICAgU2NlbmVUb0dldCxcclxuICAgICAgICAgICAgUmVuZGVycyxcclxuICAgICAgICAgICAgZG9jdW1lbnQsXHJcbiAgICAgICAgICAgIHJlY2lldmVkU2VlZCxcclxuICAgICAgICAgICAgY2hpbGQyLFxyXG4gICAgICAgICAgICBDYW1lcmFcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBSZW5kZXJzLmRvbUVsZW1lbnQucmVxdWVzdFBvaW50ZXJMb2NrKCk7XHJcbiAgICAgICAgQ29udHJvbEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsIGNoaWxkMik7XHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXJzID0gW107XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VDdWJlKGNvbG9yID0gXCJyZ2IoMCwwLDApXCIsIG5hbWUgPSBcInVua293blwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3IoY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgZW1pc3NpdmU6IG5ldyBUSFJFRS5Db2xvcihjb2xvciksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjdWJlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgICAgICAgICAgZ3JvdXAuYWRkKGN1YmUpO1xyXG4gICAgICAgICAgICBjb25zdCBjeWNsaW5kZXIgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjMsIDAuMywgMC42LCAzMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN5bGluZGVyQnVpbGQgPSBuZXcgVEhSRUUuTWVzaChjeWNsaW5kZXIsIG1hdGVyaWFsMik7XHJcbiAgICAgICAgICAgIGN5bGluZGVyQnVpbGQucm90YXRlWChNYXRoLlBJIC8gMiArIE1hdGguUEkpO1xyXG4gICAgICAgICAgICBjeWxpbmRlckJ1aWxkLnBvc2l0aW9uLnNldCgwLCAwLCAtMC42KTtcclxuICAgICAgICAgICAgZ3JvdXAuYWRkKGN5bGluZGVyQnVpbGQpO1xyXG5cclxuICAgICAgICAgICAgZ2VuZXJhdGVMYWJlbChuYW1lLCBncm91cCk7XHJcbiAgICAgICAgICAgIFNjZW5lVG9HZXQuYWRkKGdyb3VwKTtcclxuICAgICAgICAgICAgZ3JvdXAubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBncm91cDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcmV2RGF0YSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgYWRkdG9HYW1lRmVlZCA9IChuYW1lID0gXCJVbmtvd25cIiwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IE5ld0dhbWVFdmVudEFycmF5ID0gWy4uLmdhbWVFdmVudERhdGFdO1xyXG4gICAgICAgICAgICBOZXdHYW1lRXZlbnRBcnJheS51bnNoaWZ0KHsgbmFtZSwgZXZlbnQgfSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBOZXdHYW1lRXZlbnRBcnJheVsxMF07XHJcbiAgICAgICAgICAgIGRlbGV0ZSBOZXdHYW1lRXZlbnRBcnJheVsxMV07XHJcbiAgICAgICAgICAgIHNldEdhbWVFdmVudERhdGEoWy4uLk5ld0dhbWVFdmVudEFycmF5XSk7XHJcbiAgICAgICAgICAgIHByZXZEYXRhID0gTmV3R2FtZUV2ZW50QXJyYXk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2xpZW50cy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdWJlID0gbWFrZUN1YmUoZS5jb2xvciwgZS5uYW1lKTtcclxuICAgICAgICAgICAgcGxheWVyc1tgJHtlfWBdID0gY3ViZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiTmV3UGxheWVyXCIsIChpZCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IG1ha2VDdWJlKGRhdGEuY29sb3IsIGRhdGEubmFtZSk7XHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoZGF0YT8ubmFtZSwgXCJKb2luZWQgdGhlIGdhbWUhXCIpO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyc1tgJHtpZH1gXSA9IGN1YmU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNvY2tldC5vbihcIkxvc3RQTGF5ZXJcIiwgKGlkLCBob3csIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBwbGF5ZXJzW2Ake2lkfWBdO1xyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LnJlbW92ZShjdWJlKTtcclxuICAgICAgICAgICAgZGVsZXRlIHBsYXllcnNbYCR7aWR9YF07XHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoXHJcbiAgICAgICAgICAgICAgICBkYXRhPy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaG93ID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIldhcyByZW1vdmVkIGZyb20gdGhlIGdhbWUgZm9yIGJlaW5nIGluYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiTGVmdCB0aGUgZ2FtZSFcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsaXN0ZW5Ub0V2ZW50KFwiUGxheWVyTG9jYXRpb25VcGRhdGVcIiwgKGlkLCBwb3MsIHJvdCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IHBsYXllcnNbYCR7aWR9YF07XHJcbiAgICAgICAgICAgIGlmIChjdWJlKSB7XHJcbiAgICAgICAgICAgICAgICBjdWJlLnJvdGF0aW9uLnNldChyb3QuX3gsIHJvdC5feSwgcm90Ll96KTtcclxuICAgICAgICAgICAgICAgIGN1YmUucG9zaXRpb24uc2V0KHBvcy54LCBwb3MueSwgcG9zLnopO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1YmUgPSBtYWtlQ3ViZShkYXRhPy5jb2xvciwgZGF0YT8ubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcGxheWVyc1tgJHtpZH1gXSA9IGN1YmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzb2NrZXQub24oXCJOZXdDaGF0XCIsIChkYXRhLCB0ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoZGF0YS5uYW1lLCB0ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgICAgICBDYW1lcmEuZ2V0V29ybGRQb3NpdGlvbih2ZWN0b3IpO1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcIkxvY2F0aW9uVXBkYXRlXCIsIHZlY3RvciwgQ2FtZXJhLnJvdGF0aW9uKTtcclxuICAgICAgICB9LCAxMCk7XHJcblxyXG4gICAgICAgIHZhciBhbmltYXRlID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdGF0cy5iZWdpbigpO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgYWxsIG1vdmluZyBwYXJ0c1xyXG4gICAgICAgICAgICB1cGRhdGVSZW5kZXJDeWNsZShDdXJyZW50U2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgc2V0UG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICBgWDogJHtNYXRoLnJvdW5kKENhbWVyYS5wb3NpdGlvbi54KX19IFk6ICR7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICBDYW1lcmEucG9zaXRpb24ueVxyXG4gICAgICAgICAgICAgICAgKX19IFo6ICR7TWF0aC5yb3VuZChDYW1lcmEucG9zaXRpb24ueil9fWBcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIFJlbmRlcnMucmVuZGVyKFNjZW5lVG9HZXQsIENhbWVyYSk7XHJcbiAgICAgICAgICAgIHN0YXRzLmVuZCgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFuaW1hdGUoKTtcclxuICAgIH0sIFtjaGlsZCwgY2xpZW50c10pO1xyXG5cclxuICAgIGxldCBzZW5kQ2hhdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNvY2tldC5lbWl0KFwic2VuZENoYXRcIiwgY2hpbGQyLnZhbHVlKTtcclxuICAgICAgICBjaGlsZDIudmFsdWUgPSBcIlwiO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZVVJIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiByZWY9eyhyZWYpID0+IHsgc2V0Q2hpbGQocmVmKSB9IC8qICovICAgfT48L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=