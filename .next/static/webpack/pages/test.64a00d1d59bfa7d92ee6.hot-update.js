self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/gameFundalmentals/DayNightCycle.js":
/*!*******************************************************!*\
  !*** ./components/gameFundalmentals/DayNightCycle.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addtoDayTimeChecker": function() { return /* binding */ addtoDayTimeChecker; },
/* harmony export */   "removeFromDayTimeHook": function() { return /* binding */ removeFromDayTimeHook; },
/* harmony export */   "getDayState": function() { return /* binding */ getDayState; },
/* harmony export */   "CreateDayNightCycle": function() { return /* binding */ CreateDayNightCycle; }
/* harmony export */ });
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core-API/LightingManager */ "./components/Core-API/LightingManager.js");
/* harmony import */ var _stars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stars */ "./components/gameFundalmentals/stars.js");
/* harmony import */ var _rotateAroundPoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rotateAroundPoint */ "./components/gameFundalmentals/rotateAroundPoint.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


// Written By Harvey Randall \\






var recieveDaytimeUpdate = {};
var day = true;
function addtoDayTimeChecker(arg) {
  var UUID = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)();
  recieveDaytimeUpdate[UUID] = arg;
  return UUID;
}
function removeFromDayTimeHook(UUID) {
  delete recieveDaytimeUpdate[UUID];
}
function getDayState() {
  return day;
}
var CreateDayNightCycle = /*#__PURE__*/function () {
  function CreateDayNightCycle(SceneToGet, Renders) {
    (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, CreateDayNightCycle);

    // ---------- [Two to level global variables] ---------- \\
    this.SceneToGet = SceneToGet;
    this.Renders = Renders;
    this.announcedDay = false;
    this.announcedNight = false; // ---------- [Create Sun Mesh] ---------- \\

    var sun = new three__WEBPACK_IMPORTED_MODULE_6__.SphereBufferGeometry(20, 20, 100, 100);
    var sunMaterial = new three__WEBPACK_IMPORTED_MODULE_6__.MeshLambertMaterial({
      emissive: "#f9d71c"
    });
    var sunmesh = new three__WEBPACK_IMPORTED_MODULE_6__.Mesh(sun, sunMaterial);
    sunmesh.position.set(1, 300, 300);
    SceneToGet.add(sunmesh); // Create group to easily move it \\

    var sunGroup = new three__WEBPACK_IMPORTED_MODULE_6__.Group();
    sunGroup.add(sunmesh);
    SceneToGet.add(sunGroup); // ---------- [Create Moon Mesh] ---------- \\

    var moon = new three__WEBPACK_IMPORTED_MODULE_6__.SphereBufferGeometry(10, 10, 100, 100);
    var moonMaterial = new three__WEBPACK_IMPORTED_MODULE_6__.MeshLambertMaterial({
      emissive: "#ffffff"
    });
    var moonMesh = new three__WEBPACK_IMPORTED_MODULE_6__.Mesh(moon, moonMaterial);
    moonMesh.position.set(-1, -200, -300);
    SceneToGet.add(moonMesh); // Create group to easily move it \\

    var moonGroup = new three__WEBPACK_IMPORTED_MODULE_6__.Group();
    moonGroup.add(moonMesh);
    SceneToGet.add(moonGroup); // ---------- [Create Box Gometry for handling rotation] ---------- \\

    var geometry = new three__WEBPACK_IMPORTED_MODULE_6__.BoxGeometry(1, 1, 1);
    var cube = new three__WEBPACK_IMPORTED_MODULE_6__.Mesh(geometry);
    cube.visible = false;
    SceneToGet.add(cube); // ^ This is a very bad work around fix later
    // ---------- [All defintions for the moving part] ---------- \\

    this.cube = cube;
    this.moonMesh = moonMesh;
    this.sunmesh = sunmesh;
    this.sunGroup = sunGroup;
    this.moonGroup = moonGroup;
    this.t = 0;
    this.dTIme = 0; // ---------- [All defintions for lights to create shadows] ---------- \\

    this.directionalLight = (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_2__.createDirectionalLight)(SceneToGet, "#ddffee", 0.5, [1, 100, 100]);
    this.directionalLight2 = (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_2__.createDirectionalLight)(SceneToGet, "#ffffff", 0.2, [1, -100, -100]);
    this.light = (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_2__.createAmbientLight)(SceneToGet, "#aaaaaa", 0.5);
    this.sunGroup.add(this.directionalLight);
    this.moonGroup.add(this.directionalLight2); // ---------- [Create Stary night] ---------- \\

    var skyBox = new three__WEBPACK_IMPORTED_MODULE_6__.BoxGeometry(6000, 6000, 6000);
    var skyBoxMaterial = new three__WEBPACK_IMPORTED_MODULE_6__.MeshBasicMaterial({
      map: (0,_stars__WEBPACK_IMPORTED_MODULE_3__.getRandomStarField)(600, 2048, 2048),
      side: three__WEBPACK_IMPORTED_MODULE_6__.BackSide
    });
    this.sky = new three__WEBPACK_IMPORTED_MODULE_6__.Mesh(skyBox, skyBoxMaterial);
  }
  /*eslint complexity: ["error", 20]*/


  (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(CreateDayNightCycle, [{
    key: "update",
    value: function update(Camera) {
      // This two lines are  important as it is part of the hacky work around to get time of day on varying FPS
      var theta = (0,_rotateAroundPoint__WEBPACK_IMPORTED_MODULE_4__.rotateAboutPoint)(this.directionalLight, new three__WEBPACK_IMPORTED_MODULE_6__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_6__.Vector3(1, 0, 0), 0.001, true);
      var angle = three__WEBPACK_IMPORTED_MODULE_6__.MathUtils.radToDeg(this.cube.rotation.x); // ---------- [Rotate all the lights and Meshes] ---------- \\

      var cameraPos = new three__WEBPACK_IMPORTED_MODULE_6__.Vector3();
      Camera.getWorldPosition(cameraPos);
      this.sunGroup.position.set(cameraPos.x + 100, cameraPos.y, cameraPos.z);
      this.moonGroup.position.set(cameraPos.x + 100, cameraPos.y, cameraPos.z);
      this.sky.position.set(cameraPos.x, cameraPos.y, cameraPos.z);
      (0,_rotateAroundPoint__WEBPACK_IMPORTED_MODULE_4__.rotateAboutPoint)(this.sunmesh, new three__WEBPACK_IMPORTED_MODULE_6__.Vector3(100, 0, 0), new three__WEBPACK_IMPORTED_MODULE_6__.Vector3(1, 0, 0), 0.001, true);
      (0,_rotateAroundPoint__WEBPACK_IMPORTED_MODULE_4__.rotateAboutPoint)(this.moonMesh, new three__WEBPACK_IMPORTED_MODULE_6__.Vector3(100, 0, 0), new three__WEBPACK_IMPORTED_MODULE_6__.Vector3(1, 0, 0), 0.001, true);
      (0,_rotateAroundPoint__WEBPACK_IMPORTED_MODULE_4__.rotateAboutPoint)(this.directionalLight2, new three__WEBPACK_IMPORTED_MODULE_6__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_6__.Vector3(1, 0, 0), 0.001, true); // ---------- [If it is day] ---------- \\

      if (angle < 40 && this.dTIme < 1) {
        day = true;
        this.t = 0;
        this.directionalLight.color = new three__WEBPACK_IMPORTED_MODULE_6__.Color("#ddffee");
        this.dTIme += 0.003;

        if (this.dTIme >= 1) {
          this.dTIme = 1;
        }

        this.Renders.setClearColor(new three__WEBPACK_IMPORTED_MODULE_6__.Color().lerpColors(new three__WEBPACK_IMPORTED_MODULE_6__.Color("#fdb813"), new three__WEBPACK_IMPORTED_MODULE_6__.Color("#87ceeb"), this.dTIme), 1);
        this.light.intensity = 0.5;
        this.directionalLight2.color = new three__WEBPACK_IMPORTED_MODULE_6__.Color("#000000");
        this.directionalLight.intensity = 0.5;
        this.directionalLight2.intensity = 0;
        this.SceneToGet.remove(this.sky);
      } else if (!(angle < 40) && this.sky.parent !== this.SceneToGet) {
        // ---------- [If it is night] ---------- \\
        day = false;
        this.dTIme = 0;
        this.t += 0.01;

        if (this.t >= 1) {
          this.t = 1;
          this.SceneToGet.add(this.sky);
        }

        this.directionalLight2.color = new three__WEBPACK_IMPORTED_MODULE_6__.Color("#ffffff");
        this.Renders.setClearColor(new three__WEBPACK_IMPORTED_MODULE_6__.Color().lerpColors(new three__WEBPACK_IMPORTED_MODULE_6__.Color("#87ceeb"), new three__WEBPACK_IMPORTED_MODULE_6__.Color("#000000"), this.t), 1);
        this.light.intensity = 0.2;
        this.directionalLight.intensity = 0;
        this.directionalLight2.intensity = 0.2;
      }

      if (this.sky.parent === this.SceneToGet) {
        this.sky.rotation.x -= 4 / 10000;
      }

      this.cube.rotateOnAxis(new three__WEBPACK_IMPORTED_MODULE_6__.Vector3(1, 0, 0), theta);
    }
  }]);

  return CreateDayNightCycle;
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9EYXlOaWdodEN5Y2xlLmpzIl0sIm5hbWVzIjpbInJlY2lldmVEYXl0aW1lVXBkYXRlIiwiZGF5IiwiYWRkdG9EYXlUaW1lQ2hlY2tlciIsImFyZyIsIlVVSUQiLCJ2NCIsInJlbW92ZUZyb21EYXlUaW1lSG9vayIsImdldERheVN0YXRlIiwiQ3JlYXRlRGF5TmlnaHRDeWNsZSIsIlNjZW5lVG9HZXQiLCJSZW5kZXJzIiwiYW5ub3VuY2VkRGF5IiwiYW5ub3VuY2VkTmlnaHQiLCJzdW4iLCJTcGhlcmVCdWZmZXJHZW9tZXRyeSIsInN1bk1hdGVyaWFsIiwiTWVzaExhbWJlcnRNYXRlcmlhbCIsImVtaXNzaXZlIiwic3VubWVzaCIsIk1lc2giLCJwb3NpdGlvbiIsInNldCIsImFkZCIsInN1bkdyb3VwIiwiR3JvdXAiLCJtb29uIiwibW9vbk1hdGVyaWFsIiwibW9vbk1lc2giLCJtb29uR3JvdXAiLCJnZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwiY3ViZSIsInZpc2libGUiLCJ0IiwiZFRJbWUiLCJkaXJlY3Rpb25hbExpZ2h0IiwiY3JlYXRlRGlyZWN0aW9uYWxMaWdodCIsImRpcmVjdGlvbmFsTGlnaHQyIiwibGlnaHQiLCJjcmVhdGVBbWJpZW50TGlnaHQiLCJza3lCb3giLCJza3lCb3hNYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwibWFwIiwiZ2V0UmFuZG9tU3RhckZpZWxkIiwic2lkZSIsIkJhY2tTaWRlIiwic2t5IiwiQ2FtZXJhIiwidGhldGEiLCJyb3RhdGVBYm91dFBvaW50IiwiVmVjdG9yMyIsImFuZ2xlIiwiTWF0aFV0aWxzIiwicm90YXRpb24iLCJ4IiwiY2FtZXJhUG9zIiwiZ2V0V29ybGRQb3NpdGlvbiIsInkiLCJ6IiwiY29sb3IiLCJDb2xvciIsInNldENsZWFyQ29sb3IiLCJsZXJwQ29sb3JzIiwiaW50ZW5zaXR5IiwicmVtb3ZlIiwicGFyZW50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LElBQUloQiwwQ0FBSixDQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLENBQWxCLENBQXZCLEVBQTZDRixLQUE3QztBQUNIO0FBakxMOztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC42NGEwMGQxZDU5YmZhN2Q5MmVlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcbmltcG9ydCB7XHJcbiAgICBCYWNrU2lkZSxcclxuICAgIEJveEdlb21ldHJ5LFxyXG4gICAgQ29sb3IsXHJcbiAgICBNYXRoVXRpbHMsXHJcbiAgICBNZXNoLFxyXG4gICAgTWVzaEJhc2ljTWF0ZXJpYWwsXHJcbiAgICBNZXNoTGFtYmVydE1hdGVyaWFsLFxyXG4gICAgU3BoZXJlQnVmZmVyR2VvbWV0cnksXHJcbiAgICBWZWN0b3IzLFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgY3JlYXRlQW1iaWVudExpZ2h0LFxyXG4gICAgY3JlYXRlRGlyZWN0aW9uYWxMaWdodCxcclxufSBmcm9tIFwiLi4vQ29yZS1BUEkvTGlnaHRpbmdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbVN0YXJGaWVsZCB9IGZyb20gXCIuL3N0YXJzXCI7XHJcbmltcG9ydCB7IHJvdGF0ZUFib3V0UG9pbnQgfSBmcm9tIFwiLi9yb3RhdGVBcm91bmRQb2ludFwiO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5sZXQgcmVjaWV2ZURheXRpbWVVcGRhdGUgPSB7fTtcclxuXHJcbmxldCBkYXkgPSB0cnVlXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGR0b0RheVRpbWVDaGVja2VyKGFyZykge1xyXG4gICAgbGV0IFVVSUQgPSB2NCgpO1xyXG4gICAgcmVjaWV2ZURheXRpbWVVcGRhdGVbVVVJRF0gPSBhcmc7XHJcbiAgICByZXR1cm4gVVVJRDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbURheVRpbWVIb29rKFVVSUQpIHtcclxuICAgIGRlbGV0ZSByZWNpZXZlRGF5dGltZVVwZGF0ZVtVVUlEXTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5U3RhdGUoKSB7XHJcbiAgICByZXR1cm4gZGF5XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVEYXlOaWdodEN5Y2xlIHtcclxuICAgIGNvbnN0cnVjdG9yKFNjZW5lVG9HZXQsIFJlbmRlcnMpIHtcclxuICAgICAgICAvLyAtLS0tLS0tLS0tIFtUd28gdG8gbGV2ZWwgZ2xvYmFsIHZhcmlhYmxlc10gLS0tLS0tLS0tLSBcXFxcXHJcbiAgICAgICAgdGhpcy5TY2VuZVRvR2V0ID0gU2NlbmVUb0dldDtcclxuICAgICAgICB0aGlzLlJlbmRlcnMgPSBSZW5kZXJzO1xyXG5cclxuICAgICAgICB0aGlzLmFubm91bmNlZERheSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYW5ub3VuY2VkTmlnaHQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLSBbQ3JlYXRlIFN1biBNZXNoXSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICBsZXQgc3VuID0gbmV3IFNwaGVyZUJ1ZmZlckdlb21ldHJ5KDIwLCAyMCwgMTAwLCAxMDApO1xyXG4gICAgICAgIGxldCBzdW5NYXRlcmlhbCA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtcclxuICAgICAgICAgICAgZW1pc3NpdmU6IFwiI2Y5ZDcxY1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBzdW5tZXNoID0gbmV3IE1lc2goc3VuLCBzdW5NYXRlcmlhbCk7XHJcbiAgICAgICAgc3VubWVzaC5wb3NpdGlvbi5zZXQoMSwgMzAwLCAzMDApO1xyXG4gICAgICAgIFNjZW5lVG9HZXQuYWRkKHN1bm1lc2gpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgZ3JvdXAgdG8gZWFzaWx5IG1vdmUgaXQgXFxcXFxyXG4gICAgICAgIGxldCBzdW5Hcm91cCA9IG5ldyBHcm91cCgpXHJcbiAgICAgICAgc3VuR3JvdXAuYWRkKHN1bm1lc2gpXHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQoc3VuR3JvdXApXHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW0NyZWF0ZSBNb29uIE1lc2hdIC0tLS0tLS0tLS0gXFxcXFxyXG4gICAgICAgIGxldCBtb29uID0gbmV3IFNwaGVyZUJ1ZmZlckdlb21ldHJ5KDEwLCAxMCwgMTAwLCAxMDApO1xyXG4gICAgICAgIGxldCBtb29uTWF0ZXJpYWwgPSBuZXcgTWVzaExhbWJlcnRNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgIGVtaXNzaXZlOiBcIiNmZmZmZmZcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgbW9vbk1lc2ggPSBuZXcgTWVzaChtb29uLCBtb29uTWF0ZXJpYWwpO1xyXG4gICAgICAgIG1vb25NZXNoLnBvc2l0aW9uLnNldCgtMSwgLTIwMCwgLTMwMCk7XHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQobW9vbk1lc2gpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgZ3JvdXAgdG8gZWFzaWx5IG1vdmUgaXQgXFxcXFxyXG4gICAgICAgIGxldCBtb29uR3JvdXAgPSBuZXcgR3JvdXAoKVxyXG4gICAgICAgIG1vb25Hcm91cC5hZGQobW9vbk1lc2gpXHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQobW9vbkdyb3VwKVxyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tIFtDcmVhdGUgQm94IEdvbWV0cnkgZm9yIGhhbmRsaW5nIHJvdGF0aW9uXSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICB2YXIgZ2VvbWV0cnkgPSBuZXcgQm94R2VvbWV0cnkoMSwgMSwgMSk7XHJcbiAgICAgICAgdmFyIGN1YmUgPSBuZXcgTWVzaChnZW9tZXRyeSk7XHJcbiAgICAgICAgY3ViZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQoY3ViZSk7XHJcbiAgICAgICAgLy8gXiBUaGlzIGlzIGEgdmVyeSBiYWQgd29yayBhcm91bmQgZml4IGxhdGVyXHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW0FsbCBkZWZpbnRpb25zIGZvciB0aGUgbW92aW5nIHBhcnRdIC0tLS0tLS0tLS0gXFxcXFxyXG4gICAgICAgIHRoaXMuY3ViZSA9IGN1YmU7XHJcbiAgICAgICAgdGhpcy5tb29uTWVzaCA9IG1vb25NZXNoO1xyXG4gICAgICAgIHRoaXMuc3VubWVzaCA9IHN1bm1lc2g7XHJcbiAgICAgICAgdGhpcy5zdW5Hcm91cCA9IHN1bkdyb3VwO1xyXG4gICAgICAgIHRoaXMubW9vbkdyb3VwID0gbW9vbkdyb3VwO1xyXG4gICAgICAgIHRoaXMudCA9IDA7XHJcbiAgICAgICAgdGhpcy5kVEltZSA9IDA7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW0FsbCBkZWZpbnRpb25zIGZvciBsaWdodHMgdG8gY3JlYXRlIHNoYWRvd3NdIC0tLS0tLS0tLS0gXFxcXFxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodCA9IGNyZWF0ZURpcmVjdGlvbmFsTGlnaHQoXHJcbiAgICAgICAgICAgIFNjZW5lVG9HZXQsXHJcbiAgICAgICAgICAgIFwiI2RkZmZlZVwiLFxyXG4gICAgICAgICAgICAwLjUsXHJcbiAgICAgICAgICAgIFsxLCAxMDAsIDEwMF1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodDIgPSBjcmVhdGVEaXJlY3Rpb25hbExpZ2h0KFxyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LFxyXG4gICAgICAgICAgICBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgMC4yLFxyXG4gICAgICAgICAgICBbMSwgLTEwMCwgLTEwMF1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubGlnaHQgPSBjcmVhdGVBbWJpZW50TGlnaHQoU2NlbmVUb0dldCwgXCIjYWFhYWFhXCIsIDAuNSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3VuR3JvdXAuYWRkKHRoaXMuZGlyZWN0aW9uYWxMaWdodClcclxuICAgICAgICB0aGlzLm1vb25Hcm91cC5hZGQodGhpcy5kaXJlY3Rpb25hbExpZ2h0MilcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLSBbQ3JlYXRlIFN0YXJ5IG5pZ2h0XSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICBsZXQgc2t5Qm94ID0gbmV3IEJveEdlb21ldHJ5KDYwMDAsIDYwMDAsIDYwMDApO1xyXG4gICAgICAgIGxldCBza3lCb3hNYXRlcmlhbCA9IG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgIG1hcDogZ2V0UmFuZG9tU3RhckZpZWxkKDYwMCwgMjA0OCwgMjA0OCksXHJcbiAgICAgICAgICAgIHNpZGU6IEJhY2tTaWRlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2t5ID0gbmV3IE1lc2goc2t5Qm94LCBza3lCb3hNYXRlcmlhbCk7XHJcbiAgICB9XHJcbiAgICAvKmVzbGludCBjb21wbGV4aXR5OiBbXCJlcnJvclwiLCAyMF0qL1xyXG4gICAgdXBkYXRlKENhbWVyYSkge1xyXG5cclxuICAgICAgICAvLyBUaGlzIHR3byBsaW5lcyBhcmUgIGltcG9ydGFudCBhcyBpdCBpcyBwYXJ0IG9mIHRoZSBoYWNreSB3b3JrIGFyb3VuZCB0byBnZXQgdGltZSBvZiBkYXkgb24gdmFyeWluZyBGUFNcclxuICAgICAgICBsZXQgdGhldGEgPSByb3RhdGVBYm91dFBvaW50KFxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbmFsTGlnaHQsXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKDAsIDAsIDApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMygxLCAwLCAwKSxcclxuICAgICAgICAgICAgMC4wMDEsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGhVdGlscy5yYWRUb0RlZyh0aGlzLmN1YmUucm90YXRpb24ueCk7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW1JvdGF0ZSBhbGwgdGhlIGxpZ2h0cyBhbmQgTWVzaGVzXSAtLS0tLS0tLS0tIFxcXFxcclxuXHJcbiAgICAgICAgbGV0IGNhbWVyYVBvcyA9IG5ldyBWZWN0b3IzKClcclxuICAgICAgICBDYW1lcmEuZ2V0V29ybGRQb3NpdGlvbihjYW1lcmFQb3MpXHJcblxyXG5cclxuICAgICAgICB0aGlzLnN1bkdyb3VwLnBvc2l0aW9uLnNldChjYW1lcmFQb3MueCArIDEwMCAsIGNhbWVyYVBvcy55ICwgY2FtZXJhUG9zLnopO1xyXG4gICAgICAgIHRoaXMubW9vbkdyb3VwLnBvc2l0aW9uLnNldChjYW1lcmFQb3MueCArIDEwMCwgY2FtZXJhUG9zLnksIGNhbWVyYVBvcy56KTtcclxuXHJcbiAgICAgICAgdGhpcy5za3kucG9zaXRpb24uc2V0KGNhbWVyYVBvcy54LCBjYW1lcmFQb3MueSwgY2FtZXJhUG9zLnopO1xyXG5cclxuXHJcbiAgICAgICAgcm90YXRlQWJvdXRQb2ludChcclxuICAgICAgICAgICAgdGhpcy5zdW5tZXNoLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMygxMDAsIDAsIDApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMygxLCAwLCAwKSxcclxuICAgICAgICAgICAgMC4wMDEsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICAgIHJvdGF0ZUFib3V0UG9pbnQoXHJcbiAgICAgICAgICAgIHRoaXMubW9vbk1lc2gsXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKDEwMCwgMCwgMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKDEsIDAsIDApLFxyXG4gICAgICAgICAgICAwLjAwMSxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcm90YXRlQWJvdXRQb2ludChcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0MixcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjMoMCwgMCwgMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKDEsIDAsIDApLFxyXG4gICAgICAgICAgICAwLjAwMSxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW0lmIGl0IGlzIGRheV0gLS0tLS0tLS0tLSBcXFxcXHJcbiAgICAgICAgaWYgKGFuZ2xlIDwgNDAgJiYgdGhpcy5kVEltZSA8IDEpIHtcclxuICAgICAgICAgICAgZGF5ID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgdGhpcy50ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0LmNvbG9yID0gbmV3IENvbG9yKFwiI2RkZmZlZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5kVEltZSArPSAwLjAwMztcclxuICAgICAgICAgICAgaWYgKHRoaXMuZFRJbWUgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kVEltZSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5SZW5kZXJzLnNldENsZWFyQ29sb3IoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ29sb3IoKS5sZXJwQ29sb3JzKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDb2xvcihcIiNmZGI4MTNcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvbG9yKFwiIzg3Y2VlYlwiKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRUSW1lXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0LmludGVuc2l0eSA9IDAuNTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0Mi5jb2xvciA9IG5ldyBDb2xvcihcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodC5pbnRlbnNpdHkgPSAwLjU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodDIuaW50ZW5zaXR5ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5TY2VuZVRvR2V0LnJlbW92ZSh0aGlzLnNreSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghKGFuZ2xlIDwgNDApICYmIHRoaXMuc2t5LnBhcmVudCAhPT0gdGhpcy5TY2VuZVRvR2V0KSB7XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0gW0lmIGl0IGlzIG5pZ2h0XSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICAgICAgZGF5ID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZFRJbWUgPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50ICs9IDAuMDE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnQgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2NlbmVUb0dldC5hZGQodGhpcy5za3kpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodDIuY29sb3IgPSBuZXcgQ29sb3IoXCIjZmZmZmZmXCIpO1xyXG4gICAgICAgICAgICB0aGlzLlJlbmRlcnMuc2V0Q2xlYXJDb2xvcihcclxuICAgICAgICAgICAgICAgIG5ldyBDb2xvcigpLmxlcnBDb2xvcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvbG9yKFwiIzg3Y2VlYlwiKSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQ29sb3IoXCIjMDAwMDAwXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5saWdodC5pbnRlbnNpdHkgPSAwLjI7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodC5pbnRlbnNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbmFsTGlnaHQyLmludGVuc2l0eSA9IDAuMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2t5LnBhcmVudCA9PT0gdGhpcy5TY2VuZVRvR2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2t5LnJvdGF0aW9uLnggLT0gNCAvIDEwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1YmUucm90YXRlT25BeGlzKG5ldyBWZWN0b3IzKDEsIDAsIDApLCB0aGV0YSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==