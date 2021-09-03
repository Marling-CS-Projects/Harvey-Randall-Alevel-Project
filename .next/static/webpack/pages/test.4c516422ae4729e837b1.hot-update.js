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

    var skyBox = new three__WEBPACK_IMPORTED_MODULE_6__.BoxGeometry(1200, 1200, 1200);
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

      this.sunGroup.position.set(Camera.position.x + 100, Camera.position.y, Camera.position.z);
      this.moonGroup.position.set(Camera.position.x + 100, Camera.position.y, Camera.position.z);
      this.cube.position.set(Camera.position.x + 100, Camera.position.y, Camera.position.z);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9EYXlOaWdodEN5Y2xlLmpzIl0sIm5hbWVzIjpbInJlY2lldmVEYXl0aW1lVXBkYXRlIiwiZGF5IiwiYWRkdG9EYXlUaW1lQ2hlY2tlciIsImFyZyIsIlVVSUQiLCJ2NCIsInJlbW92ZUZyb21EYXlUaW1lSG9vayIsImdldERheVN0YXRlIiwiQ3JlYXRlRGF5TmlnaHRDeWNsZSIsIlNjZW5lVG9HZXQiLCJSZW5kZXJzIiwiYW5ub3VuY2VkRGF5IiwiYW5ub3VuY2VkTmlnaHQiLCJzdW4iLCJTcGhlcmVCdWZmZXJHZW9tZXRyeSIsInN1bk1hdGVyaWFsIiwiTWVzaExhbWJlcnRNYXRlcmlhbCIsImVtaXNzaXZlIiwic3VubWVzaCIsIk1lc2giLCJwb3NpdGlvbiIsInNldCIsImFkZCIsInN1bkdyb3VwIiwiR3JvdXAiLCJtb29uIiwibW9vbk1hdGVyaWFsIiwibW9vbk1lc2giLCJtb29uR3JvdXAiLCJnZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwiY3ViZSIsInZpc2libGUiLCJ0IiwiZFRJbWUiLCJkaXJlY3Rpb25hbExpZ2h0IiwiY3JlYXRlRGlyZWN0aW9uYWxMaWdodCIsImRpcmVjdGlvbmFsTGlnaHQyIiwibGlnaHQiLCJjcmVhdGVBbWJpZW50TGlnaHQiLCJza3lCb3giLCJza3lCb3hNYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwibWFwIiwiZ2V0UmFuZG9tU3RhckZpZWxkIiwic2lkZSIsIkJhY2tTaWRlIiwic2t5IiwiQ2FtZXJhIiwidGhldGEiLCJyb3RhdGVBYm91dFBvaW50IiwiVmVjdG9yMyIsImFuZ2xlIiwiTWF0aFV0aWxzIiwicm90YXRpb24iLCJ4IiwieSIsInoiLCJjb2xvciIsIkNvbG9yIiwic2V0Q2xlYXJDb2xvciIsImxlcnBDb2xvcnMiLCJpbnRlbnNpdHkiLCJyZW1vdmUiLCJwYXJlbnQiLCJyb3RhdGVPbkF4aXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxvQkFBb0IsR0FBRyxFQUEzQjtBQUVBLElBQUlDLEdBQUcsR0FBRyxJQUFWO0FBQ08sU0FBU0MsbUJBQVQsQ0FBNkJDLEdBQTdCLEVBQWtDO0FBQ3JDLE1BQUlDLElBQUksR0FBR0Msd0NBQUUsRUFBYjtBQUNBTCxzQkFBb0IsQ0FBQ0ksSUFBRCxDQUFwQixHQUE2QkQsR0FBN0I7QUFDQSxTQUFPQyxJQUFQO0FBQ0g7QUFDTSxTQUFTRSxxQkFBVCxDQUErQkYsSUFBL0IsRUFBcUM7QUFDeEMsU0FBT0osb0JBQW9CLENBQUNJLElBQUQsQ0FBM0I7QUFDSDtBQUNNLFNBQVNHLFdBQVQsR0FBdUI7QUFDMUIsU0FBT04sR0FBUDtBQUNIO0FBRU0sSUFBTU8sbUJBQWI7QUFDSSwrQkFBWUMsVUFBWixFQUF3QkMsT0FBeEIsRUFBaUM7QUFBQTs7QUFDN0I7QUFDQSxTQUFLRCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUVBLFNBQUtDLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLEtBQXRCLENBTjZCLENBUTdCOztBQUNBLFFBQUlDLEdBQUcsR0FBRyxJQUFJQyx1REFBSixDQUF5QixFQUF6QixFQUE2QixFQUE3QixFQUFpQyxHQUFqQyxFQUFzQyxHQUF0QyxDQUFWO0FBQ0EsUUFBSUMsV0FBVyxHQUFHLElBQUlDLHNEQUFKLENBQXdCO0FBQ3RDQyxjQUFRLEVBQUU7QUFENEIsS0FBeEIsQ0FBbEI7QUFHQSxRQUFJQyxPQUFPLEdBQUcsSUFBSUMsdUNBQUosQ0FBU04sR0FBVCxFQUFjRSxXQUFkLENBQWQ7QUFDQUcsV0FBTyxDQUFDRSxRQUFSLENBQWlCQyxHQUFqQixDQUFxQixDQUFyQixFQUF3QixHQUF4QixFQUE2QixHQUE3QjtBQUNBWixjQUFVLENBQUNhLEdBQVgsQ0FBZUosT0FBZixFQWY2QixDQWlCN0I7O0FBQ0EsUUFBSUssUUFBUSxHQUFHLElBQUlDLHdDQUFKLEVBQWY7QUFDQUQsWUFBUSxDQUFDRCxHQUFULENBQWFKLE9BQWI7QUFDQVQsY0FBVSxDQUFDYSxHQUFYLENBQWVDLFFBQWYsRUFwQjZCLENBc0I3Qjs7QUFDQSxRQUFJRSxJQUFJLEdBQUcsSUFBSVgsdURBQUosQ0FBeUIsRUFBekIsRUFBNkIsRUFBN0IsRUFBaUMsR0FBakMsRUFBc0MsR0FBdEMsQ0FBWDtBQUNBLFFBQUlZLFlBQVksR0FBRyxJQUFJVixzREFBSixDQUF3QjtBQUN2Q0MsY0FBUSxFQUFFO0FBRDZCLEtBQXhCLENBQW5CO0FBR0EsUUFBSVUsUUFBUSxHQUFHLElBQUlSLHVDQUFKLENBQVNNLElBQVQsRUFBZUMsWUFBZixDQUFmO0FBQ0FDLFlBQVEsQ0FBQ1AsUUFBVCxDQUFrQkMsR0FBbEIsQ0FBc0IsQ0FBQyxDQUF2QixFQUEwQixDQUFDLEdBQTNCLEVBQWdDLENBQUMsR0FBakM7QUFDQVosY0FBVSxDQUFDYSxHQUFYLENBQWVLLFFBQWYsRUE3QjZCLENBK0I3Qjs7QUFDQSxRQUFJQyxTQUFTLEdBQUcsSUFBSUosd0NBQUosRUFBaEI7QUFDQUksYUFBUyxDQUFDTixHQUFWLENBQWNLLFFBQWQ7QUFDQWxCLGNBQVUsQ0FBQ2EsR0FBWCxDQUFlTSxTQUFmLEVBbEM2QixDQW9DN0I7O0FBQ0EsUUFBSUMsUUFBUSxHQUFHLElBQUlDLDhDQUFKLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBQWY7QUFDQSxRQUFJQyxJQUFJLEdBQUcsSUFBSVosdUNBQUosQ0FBU1UsUUFBVCxDQUFYO0FBQ0FFLFFBQUksQ0FBQ0MsT0FBTCxHQUFlLEtBQWY7QUFDQXZCLGNBQVUsQ0FBQ2EsR0FBWCxDQUFlUyxJQUFmLEVBeEM2QixDQXlDN0I7QUFFQTs7QUFDQSxTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLSixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtULE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtLLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0ssU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLSyxDQUFMLEdBQVMsQ0FBVDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiLENBbEQ2QixDQW9EN0I7O0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JDLGlGQUFzQixDQUMxQzNCLFVBRDBDLEVBRTFDLFNBRjBDLEVBRzFDLEdBSDBDLEVBSTFDLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxHQUFULENBSjBDLENBQTlDO0FBTUEsU0FBSzRCLGlCQUFMLEdBQXlCRCxpRkFBc0IsQ0FDM0MzQixVQUQyQyxFQUUzQyxTQUYyQyxFQUczQyxHQUgyQyxFQUkzQyxDQUFDLENBQUQsRUFBSSxDQUFDLEdBQUwsRUFBVSxDQUFDLEdBQVgsQ0FKMkMsQ0FBL0M7QUFNQSxTQUFLNkIsS0FBTCxHQUFhQyw2RUFBa0IsQ0FBQzlCLFVBQUQsRUFBYSxTQUFiLEVBQXdCLEdBQXhCLENBQS9CO0FBRUEsU0FBS2MsUUFBTCxDQUFjRCxHQUFkLENBQWtCLEtBQUthLGdCQUF2QjtBQUNBLFNBQUtQLFNBQUwsQ0FBZU4sR0FBZixDQUFtQixLQUFLZSxpQkFBeEIsRUFwRTZCLENBc0U3Qjs7QUFDQSxRQUFJRyxNQUFNLEdBQUcsSUFBSVYsOENBQUosQ0FBZ0IsSUFBaEIsRUFBc0IsSUFBdEIsRUFBNEIsSUFBNUIsQ0FBYjtBQUNBLFFBQUlXLGNBQWMsR0FBRyxJQUFJQyxvREFBSixDQUFzQjtBQUN2Q0MsU0FBRyxFQUFFQywwREFBa0IsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLElBQVosQ0FEZ0I7QUFFdkNDLFVBQUksRUFBRUMsMkNBQVFBO0FBRnlCLEtBQXRCLENBQXJCO0FBSUEsU0FBS0MsR0FBTCxHQUFXLElBQUk1Qix1Q0FBSixDQUFTcUIsTUFBVCxFQUFpQkMsY0FBakIsQ0FBWDtBQUNIO0FBQ0Q7OztBQS9FSjtBQUFBO0FBQUEsMkJBZ0ZXTyxNQWhGWCxFQWdGbUI7QUFFWDtBQUNBLFVBQUlDLEtBQUssR0FBR0Msb0VBQWdCLENBQ3hCLEtBQUtmLGdCQURtQixFQUV4QixJQUFJZ0IsMENBQUosQ0FBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQixDQUFsQixDQUZ3QixFQUd4QixJQUFJQSwwQ0FBSixDQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLENBQWxCLENBSHdCLEVBSXhCLEtBSndCLEVBS3hCLElBTHdCLENBQTVCO0FBT0EsVUFBSUMsS0FBSyxHQUFHQyxxREFBQSxDQUFtQixLQUFLdEIsSUFBTCxDQUFVdUIsUUFBVixDQUFtQkMsQ0FBdEMsQ0FBWixDQVZXLENBWVg7O0FBR0EsV0FBS2hDLFFBQUwsQ0FBY0gsUUFBZCxDQUF1QkMsR0FBdkIsQ0FBMkIyQixNQUFNLENBQUM1QixRQUFQLENBQWdCbUMsQ0FBaEIsR0FBb0IsR0FBL0MsRUFBb0RQLE1BQU0sQ0FBQzVCLFFBQVAsQ0FBZ0JvQyxDQUFwRSxFQUF1RVIsTUFBTSxDQUFDNUIsUUFBUCxDQUFnQnFDLENBQXZGO0FBQ0EsV0FBSzdCLFNBQUwsQ0FBZVIsUUFBZixDQUF3QkMsR0FBeEIsQ0FBNEIyQixNQUFNLENBQUM1QixRQUFQLENBQWdCbUMsQ0FBaEIsR0FBb0IsR0FBaEQsRUFBcURQLE1BQU0sQ0FBQzVCLFFBQVAsQ0FBZ0JvQyxDQUFyRSxFQUF3RVIsTUFBTSxDQUFDNUIsUUFBUCxDQUFnQnFDLENBQXhGO0FBRUEsV0FBSzFCLElBQUwsQ0FBVVgsUUFBVixDQUFtQkMsR0FBbkIsQ0FBdUIyQixNQUFNLENBQUM1QixRQUFQLENBQWdCbUMsQ0FBaEIsR0FBb0IsR0FBM0MsRUFBZ0RQLE1BQU0sQ0FBQzVCLFFBQVAsQ0FBZ0JvQyxDQUFoRSxFQUFtRVIsTUFBTSxDQUFDNUIsUUFBUCxDQUFnQnFDLENBQW5GO0FBR0FQLDBFQUFnQixDQUNaLEtBQUtoQyxPQURPLEVBRVosSUFBSWlDLDBDQUFKLENBQVksR0FBWixFQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUZZLEVBR1osSUFBSUEsMENBQUosQ0FBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQixDQUFsQixDQUhZLEVBSVosS0FKWSxFQUtaLElBTFksQ0FBaEI7QUFPQUQsMEVBQWdCLENBQ1osS0FBS3ZCLFFBRE8sRUFFWixJQUFJd0IsMENBQUosQ0FBWSxHQUFaLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBRlksRUFHWixJQUFJQSwwQ0FBSixDQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLENBQWxCLENBSFksRUFJWixLQUpZLEVBS1osSUFMWSxDQUFoQjtBQU9BRCwwRUFBZ0IsQ0FDWixLQUFLYixpQkFETyxFQUVaLElBQUljLDBDQUFKLENBQVksQ0FBWixFQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FGWSxFQUdaLElBQUlBLDBDQUFKLENBQVksQ0FBWixFQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FIWSxFQUlaLEtBSlksRUFLWixJQUxZLENBQWhCLENBbkNXLENBMkNYOztBQUNBLFVBQUlDLEtBQUssR0FBRyxFQUFSLElBQWMsS0FBS2xCLEtBQUwsR0FBYSxDQUEvQixFQUFrQztBQUM5QmpDLFdBQUcsR0FBRyxJQUFOO0FBRUEsYUFBS2dDLENBQUwsR0FBUyxDQUFUO0FBQ0EsYUFBS0UsZ0JBQUwsQ0FBc0J1QixLQUF0QixHQUE4QixJQUFJQyx3Q0FBSixDQUFVLFNBQVYsQ0FBOUI7QUFDQSxhQUFLekIsS0FBTCxJQUFjLEtBQWQ7O0FBQ0EsWUFBSSxLQUFLQSxLQUFMLElBQWMsQ0FBbEIsRUFBcUI7QUFDakIsZUFBS0EsS0FBTCxHQUFhLENBQWI7QUFDSDs7QUFDRCxhQUFLeEIsT0FBTCxDQUFha0QsYUFBYixDQUNJLElBQUlELHdDQUFKLEdBQVlFLFVBQVosQ0FDSSxJQUFJRix3Q0FBSixDQUFVLFNBQVYsQ0FESixFQUVJLElBQUlBLHdDQUFKLENBQVUsU0FBVixDQUZKLEVBR0ksS0FBS3pCLEtBSFQsQ0FESixFQU1JLENBTko7QUFRQSxhQUFLSSxLQUFMLENBQVd3QixTQUFYLEdBQXVCLEdBQXZCO0FBQ0EsYUFBS3pCLGlCQUFMLENBQXVCcUIsS0FBdkIsR0FBK0IsSUFBSUMsd0NBQUosQ0FBVSxTQUFWLENBQS9CO0FBQ0EsYUFBS3hCLGdCQUFMLENBQXNCMkIsU0FBdEIsR0FBa0MsR0FBbEM7QUFDQSxhQUFLekIsaUJBQUwsQ0FBdUJ5QixTQUF2QixHQUFtQyxDQUFuQztBQUNBLGFBQUtyRCxVQUFMLENBQWdCc0QsTUFBaEIsQ0FBdUIsS0FBS2hCLEdBQTVCO0FBQ0gsT0F0QkQsTUFzQk8sSUFBSSxFQUFFSyxLQUFLLEdBQUcsRUFBVixLQUFpQixLQUFLTCxHQUFMLENBQVNpQixNQUFULEtBQW9CLEtBQUt2RCxVQUE5QyxFQUEwRDtBQUM3RDtBQUNBUixXQUFHLEdBQUcsS0FBTjtBQUVBLGFBQUtpQyxLQUFMLEdBQWEsQ0FBYjtBQUVBLGFBQUtELENBQUwsSUFBVSxJQUFWOztBQUNBLFlBQUksS0FBS0EsQ0FBTCxJQUFVLENBQWQsRUFBaUI7QUFDYixlQUFLQSxDQUFMLEdBQVMsQ0FBVDtBQUNBLGVBQUt4QixVQUFMLENBQWdCYSxHQUFoQixDQUFvQixLQUFLeUIsR0FBekI7QUFDSDs7QUFDRCxhQUFLVixpQkFBTCxDQUF1QnFCLEtBQXZCLEdBQStCLElBQUlDLHdDQUFKLENBQVUsU0FBVixDQUEvQjtBQUNBLGFBQUtqRCxPQUFMLENBQWFrRCxhQUFiLENBQ0ksSUFBSUQsd0NBQUosR0FBWUUsVUFBWixDQUNJLElBQUlGLHdDQUFKLENBQVUsU0FBVixDQURKLEVBRUksSUFBSUEsd0NBQUosQ0FBVSxTQUFWLENBRkosRUFHSSxLQUFLMUIsQ0FIVCxDQURKLEVBTUksQ0FOSjtBQVFBLGFBQUtLLEtBQUwsQ0FBV3dCLFNBQVgsR0FBdUIsR0FBdkI7QUFDQSxhQUFLM0IsZ0JBQUwsQ0FBc0IyQixTQUF0QixHQUFrQyxDQUFsQztBQUNBLGFBQUt6QixpQkFBTCxDQUF1QnlCLFNBQXZCLEdBQW1DLEdBQW5DO0FBQ0g7O0FBQ0QsVUFBSSxLQUFLZixHQUFMLENBQVNpQixNQUFULEtBQW9CLEtBQUt2RCxVQUE3QixFQUF5QztBQUNyQyxhQUFLc0MsR0FBTCxDQUFTTyxRQUFULENBQWtCQyxDQUFsQixJQUF1QixJQUFJLEtBQTNCO0FBQ0g7O0FBQ0QsV0FBS3hCLElBQUwsQ0FBVWtDLFlBQVYsQ0FBdUIsSUFBSWQsMENBQUosQ0FBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQixDQUFsQixDQUF2QixFQUE2Q0YsS0FBN0M7QUFDSDtBQTlLTDs7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QuNGM1MTY0MjJhZTQ3MjllODM3YjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxyXG5pbXBvcnQge1xyXG4gICAgQmFja1NpZGUsXHJcbiAgICBCb3hHZW9tZXRyeSxcclxuICAgIENvbG9yLFxyXG4gICAgTWF0aFV0aWxzLFxyXG4gICAgTWVzaCxcclxuICAgIE1lc2hCYXNpY01hdGVyaWFsLFxyXG4gICAgTWVzaExhbWJlcnRNYXRlcmlhbCxcclxuICAgIFNwaGVyZUJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgVmVjdG9yMyxcclxufSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHtcclxuICAgIGNyZWF0ZUFtYmllbnRMaWdodCxcclxuICAgIGNyZWF0ZURpcmVjdGlvbmFsTGlnaHQsXHJcbn0gZnJvbSBcIi4uL0NvcmUtQVBJL0xpZ2h0aW5nTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBnZXRSYW5kb21TdGFyRmllbGQgfSBmcm9tIFwiLi9zdGFyc1wiO1xyXG5pbXBvcnQgeyByb3RhdGVBYm91dFBvaW50IH0gZnJvbSBcIi4vcm90YXRlQXJvdW5kUG9pbnRcIjtcclxuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxubGV0IHJlY2lldmVEYXl0aW1lVXBkYXRlID0ge307XHJcblxyXG5sZXQgZGF5ID0gdHJ1ZVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkdG9EYXlUaW1lQ2hlY2tlcihhcmcpIHtcclxuICAgIGxldCBVVUlEID0gdjQoKTtcclxuICAgIHJlY2lldmVEYXl0aW1lVXBkYXRlW1VVSURdID0gYXJnO1xyXG4gICAgcmV0dXJuIFVVSUQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZyb21EYXlUaW1lSG9vayhVVUlEKSB7XHJcbiAgICBkZWxldGUgcmVjaWV2ZURheXRpbWVVcGRhdGVbVVVJRF07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERheVN0YXRlKCkge1xyXG4gICAgcmV0dXJuIGRheVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlRGF5TmlnaHRDeWNsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihTY2VuZVRvR2V0LCBSZW5kZXJzKSB7XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLSBbVHdvIHRvIGxldmVsIGdsb2JhbCB2YXJpYWJsZXNdIC0tLS0tLS0tLS0gXFxcXFxyXG4gICAgICAgIHRoaXMuU2NlbmVUb0dldCA9IFNjZW5lVG9HZXQ7XHJcbiAgICAgICAgdGhpcy5SZW5kZXJzID0gUmVuZGVycztcclxuXHJcbiAgICAgICAgdGhpcy5hbm5vdW5jZWREYXkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFubm91bmNlZE5pZ2h0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW0NyZWF0ZSBTdW4gTWVzaF0gLS0tLS0tLS0tLSBcXFxcXHJcbiAgICAgICAgbGV0IHN1biA9IG5ldyBTcGhlcmVCdWZmZXJHZW9tZXRyeSgyMCwgMjAsIDEwMCwgMTAwKTtcclxuICAgICAgICBsZXQgc3VuTWF0ZXJpYWwgPSBuZXcgTWVzaExhbWJlcnRNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgIGVtaXNzaXZlOiBcIiNmOWQ3MWNcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgc3VubWVzaCA9IG5ldyBNZXNoKHN1biwgc3VuTWF0ZXJpYWwpO1xyXG4gICAgICAgIHN1bm1lc2gucG9zaXRpb24uc2V0KDEsIDMwMCwgMzAwKTtcclxuICAgICAgICBTY2VuZVRvR2V0LmFkZChzdW5tZXNoKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGdyb3VwIHRvIGVhc2lseSBtb3ZlIGl0IFxcXFxcclxuICAgICAgICBsZXQgc3VuR3JvdXAgPSBuZXcgR3JvdXAoKVxyXG4gICAgICAgIHN1bkdyb3VwLmFkZChzdW5tZXNoKVxyXG4gICAgICAgIFNjZW5lVG9HZXQuYWRkKHN1bkdyb3VwKVxyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tIFtDcmVhdGUgTW9vbiBNZXNoXSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICBsZXQgbW9vbiA9IG5ldyBTcGhlcmVCdWZmZXJHZW9tZXRyeSgxMCwgMTAsIDEwMCwgMTAwKTtcclxuICAgICAgICBsZXQgbW9vbk1hdGVyaWFsID0gbmV3IE1lc2hMYW1iZXJ0TWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICBlbWlzc2l2ZTogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IG1vb25NZXNoID0gbmV3IE1lc2gobW9vbiwgbW9vbk1hdGVyaWFsKTtcclxuICAgICAgICBtb29uTWVzaC5wb3NpdGlvbi5zZXQoLTEsIC0yMDAsIC0zMDApO1xyXG4gICAgICAgIFNjZW5lVG9HZXQuYWRkKG1vb25NZXNoKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGdyb3VwIHRvIGVhc2lseSBtb3ZlIGl0IFxcXFxcclxuICAgICAgICBsZXQgbW9vbkdyb3VwID0gbmV3IEdyb3VwKClcclxuICAgICAgICBtb29uR3JvdXAuYWRkKG1vb25NZXNoKVxyXG4gICAgICAgIFNjZW5lVG9HZXQuYWRkKG1vb25Hcm91cClcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLSBbQ3JlYXRlIEJveCBHb21ldHJ5IGZvciBoYW5kbGluZyByb3RhdGlvbl0gLS0tLS0tLS0tLSBcXFxcXHJcbiAgICAgICAgdmFyIGdlb21ldHJ5ID0gbmV3IEJveEdlb21ldHJ5KDEsIDEsIDEpO1xyXG4gICAgICAgIHZhciBjdWJlID0gbmV3IE1lc2goZ2VvbWV0cnkpO1xyXG4gICAgICAgIGN1YmUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIFNjZW5lVG9HZXQuYWRkKGN1YmUpO1xyXG4gICAgICAgIC8vIF4gVGhpcyBpcyBhIHZlcnkgYmFkIHdvcmsgYXJvdW5kIGZpeCBsYXRlclxyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tIFtBbGwgZGVmaW50aW9ucyBmb3IgdGhlIG1vdmluZyBwYXJ0XSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICB0aGlzLmN1YmUgPSBjdWJlO1xyXG4gICAgICAgIHRoaXMubW9vbk1lc2ggPSBtb29uTWVzaDtcclxuICAgICAgICB0aGlzLnN1bm1lc2ggPSBzdW5tZXNoO1xyXG4gICAgICAgIHRoaXMuc3VuR3JvdXAgPSBzdW5Hcm91cDtcclxuICAgICAgICB0aGlzLm1vb25Hcm91cCA9IG1vb25Hcm91cDtcclxuICAgICAgICB0aGlzLnQgPSAwO1xyXG4gICAgICAgIHRoaXMuZFRJbWUgPSAwO1xyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tIFtBbGwgZGVmaW50aW9ucyBmb3IgbGlnaHRzIHRvIGNyZWF0ZSBzaGFkb3dzXSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbmFsTGlnaHQgPSBjcmVhdGVEaXJlY3Rpb25hbExpZ2h0KFxyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LFxyXG4gICAgICAgICAgICBcIiNkZGZmZWVcIixcclxuICAgICAgICAgICAgMC41LFxyXG4gICAgICAgICAgICBbMSwgMTAwLCAxMDBdXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbmFsTGlnaHQyID0gY3JlYXRlRGlyZWN0aW9uYWxMaWdodChcclxuICAgICAgICAgICAgU2NlbmVUb0dldCxcclxuICAgICAgICAgICAgXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgIDAuMixcclxuICAgICAgICAgICAgWzEsIC0xMDAsIC0xMDBdXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmxpZ2h0ID0gY3JlYXRlQW1iaWVudExpZ2h0KFNjZW5lVG9HZXQsIFwiI2FhYWFhYVwiLCAwLjUpO1xyXG5cclxuICAgICAgICB0aGlzLnN1bkdyb3VwLmFkZCh0aGlzLmRpcmVjdGlvbmFsTGlnaHQpXHJcbiAgICAgICAgdGhpcy5tb29uR3JvdXAuYWRkKHRoaXMuZGlyZWN0aW9uYWxMaWdodDIpXHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW0NyZWF0ZSBTdGFyeSBuaWdodF0gLS0tLS0tLS0tLSBcXFxcXHJcbiAgICAgICAgbGV0IHNreUJveCA9IG5ldyBCb3hHZW9tZXRyeSgxMjAwLCAxMjAwLCAxMjAwKTtcclxuICAgICAgICBsZXQgc2t5Qm94TWF0ZXJpYWwgPSBuZXcgTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICBtYXA6IGdldFJhbmRvbVN0YXJGaWVsZCg2MDAsIDIwNDgsIDIwNDgpLFxyXG4gICAgICAgICAgICBzaWRlOiBCYWNrU2lkZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNreSA9IG5ldyBNZXNoKHNreUJveCwgc2t5Qm94TWF0ZXJpYWwpO1xyXG4gICAgfVxyXG4gICAgLyplc2xpbnQgY29tcGxleGl0eTogW1wiZXJyb3JcIiwgMjBdKi9cclxuICAgIHVwZGF0ZShDYW1lcmEpIHtcclxuXHJcbiAgICAgICAgLy8gVGhpcyB0d28gbGluZXMgYXJlICBpbXBvcnRhbnQgYXMgaXQgaXMgcGFydCBvZiB0aGUgaGFja3kgd29yayBhcm91bmQgdG8gZ2V0IHRpbWUgb2YgZGF5IG9uIHZhcnlpbmcgRlBTXHJcbiAgICAgICAgbGV0IHRoZXRhID0gcm90YXRlQWJvdXRQb2ludChcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0LFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMygwLCAwLCAwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjMoMSwgMCwgMCksXHJcbiAgICAgICAgICAgIDAuMDAxLFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgYW5nbGUgPSBNYXRoVXRpbHMucmFkVG9EZWcodGhpcy5jdWJlLnJvdGF0aW9uLngpO1xyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tIFtSb3RhdGUgYWxsIHRoZSBsaWdodHMgYW5kIE1lc2hlc10gLS0tLS0tLS0tLSBcXFxcXHJcblxyXG5cclxuICAgICAgICB0aGlzLnN1bkdyb3VwLnBvc2l0aW9uLnNldChDYW1lcmEucG9zaXRpb24ueCArIDEwMCwgQ2FtZXJhLnBvc2l0aW9uLnksIENhbWVyYS5wb3NpdGlvbi56KTtcclxuICAgICAgICB0aGlzLm1vb25Hcm91cC5wb3NpdGlvbi5zZXQoQ2FtZXJhLnBvc2l0aW9uLnggKyAxMDAsIENhbWVyYS5wb3NpdGlvbi55LCBDYW1lcmEucG9zaXRpb24ueik7XHJcblxyXG4gICAgICAgIHRoaXMuY3ViZS5wb3NpdGlvbi5zZXQoQ2FtZXJhLnBvc2l0aW9uLnggKyAxMDAsIENhbWVyYS5wb3NpdGlvbi55LCBDYW1lcmEucG9zaXRpb24ueik7XHJcblxyXG5cclxuICAgICAgICByb3RhdGVBYm91dFBvaW50KFxyXG4gICAgICAgICAgICB0aGlzLnN1bm1lc2gsXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKDEwMCwgMCwgMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKDEsIDAsIDApLFxyXG4gICAgICAgICAgICAwLjAwMSxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcm90YXRlQWJvdXRQb2ludChcclxuICAgICAgICAgICAgdGhpcy5tb29uTWVzaCxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjMoMTAwLCAwLCAwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjMoMSwgMCwgMCksXHJcbiAgICAgICAgICAgIDAuMDAxLFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICByb3RhdGVBYm91dFBvaW50KFxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbmFsTGlnaHQyLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMygwLCAwLCAwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjMoMSwgMCwgMCksXHJcbiAgICAgICAgICAgIDAuMDAxLFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLSBbSWYgaXQgaXMgZGF5XSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICBpZiAoYW5nbGUgPCA0MCAmJiB0aGlzLmRUSW1lIDwgMSkge1xyXG4gICAgICAgICAgICBkYXkgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB0aGlzLnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbmFsTGlnaHQuY29sb3IgPSBuZXcgQ29sb3IoXCIjZGRmZmVlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmRUSW1lICs9IDAuMDAzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kVEltZSA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRUSW1lID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLlJlbmRlcnMuc2V0Q2xlYXJDb2xvcihcclxuICAgICAgICAgICAgICAgIG5ldyBDb2xvcigpLmxlcnBDb2xvcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvbG9yKFwiI2ZkYjgxM1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQ29sb3IoXCIjODdjZWViXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZFRJbWVcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMubGlnaHQuaW50ZW5zaXR5ID0gMC41O1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbmFsTGlnaHQyLmNvbG9yID0gbmV3IENvbG9yKFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0LmludGVuc2l0eSA9IDAuNTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0Mi5pbnRlbnNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlNjZW5lVG9HZXQucmVtb3ZlKHRoaXMuc2t5KTtcclxuICAgICAgICB9IGVsc2UgaWYgKCEoYW5nbGUgPCA0MCkgJiYgdGhpcy5za3kucGFyZW50ICE9PSB0aGlzLlNjZW5lVG9HZXQpIHtcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLSBbSWYgaXQgaXMgbmlnaHRdIC0tLS0tLS0tLS0gXFxcXFxyXG4gICAgICAgICAgICBkYXkgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kVEltZSA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnQgKz0gMC4wMTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TY2VuZVRvR2V0LmFkZCh0aGlzLnNreSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0Mi5jb2xvciA9IG5ldyBDb2xvcihcIiNmZmZmZmZcIik7XHJcbiAgICAgICAgICAgIHRoaXMuUmVuZGVycy5zZXRDbGVhckNvbG9yKFxyXG4gICAgICAgICAgICAgICAgbmV3IENvbG9yKCkubGVycENvbG9ycyhcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQ29sb3IoXCIjODdjZWViXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDb2xvcihcIiMwMDAwMDBcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0LmludGVuc2l0eSA9IDAuMjtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0LmludGVuc2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodDIuaW50ZW5zaXR5ID0gMC4yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5za3kucGFyZW50ID09PSB0aGlzLlNjZW5lVG9HZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5za3kucm90YXRpb24ueCAtPSA0IC8gMTAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3ViZS5yb3RhdGVPbkF4aXMobmV3IFZlY3RvcjMoMSwgMCwgMCksIHRoZXRhKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9