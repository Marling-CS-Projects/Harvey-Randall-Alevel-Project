self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/gameFundalmentals/TerrainManagement/terrainChunkriser.js":
/*!*****************************************************************************!*\
  !*** ./components/gameFundalmentals/TerrainManagement/terrainChunkriser.js ***!
  \*****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateTerrainAroundPlayer": function() { return /* binding */ generateTerrainAroundPlayer; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Algorithms_MathUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Algorithms/MathUtils */ "./components/Algorithms/MathUtils.js");
/* harmony import */ var _Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core-API/3dModelHandlers/GLBLoader */ "./components/Core-API/3dModelHandlers/GLBLoader.js");
/* harmony import */ var _ProceduleTerrain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProceduleTerrain */ "./components/gameFundalmentals/ProceduleTerrain.js");
/* harmony import */ var _staticAssets_treeBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../staticAssets/treeBuilder */ "./components/gameFundalmentals/staticAssets/treeBuilder.js");
/* harmony import */ var _utils_GenerateBiomesMap_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/GenerateBiomesMap.ts */ "./components/gameFundalmentals/TerrainManagement/utils/GenerateBiomesMap.ts");
/* module decorator */ module = __webpack_require__.hmd(module);






var renderDistance = 15;
function generateTerrainAroundPlayer(seed, camera, scene) {
  var loadedChunks = {};
  var chunksInMem = {};
  var laoding = true;
  var TerrainGroup = new three__WEBPACK_IMPORTED_MODULE_5__.Group();
  scene.add(TerrainGroup);
  setInterval(function () {
    var vector = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3();
    camera.getWorldPosition(vector);
    var yourChunk = new three__WEBPACK_IMPORTED_MODULE_5__.Vector2((0,_Algorithms_MathUtils__WEBPACK_IMPORTED_MODULE_0__.roundnum)(vector.x, 500), (0,_Algorithms_MathUtils__WEBPACK_IMPORTED_MODULE_0__.roundnum)(vector.z, 500));

    var chunkyThing = function chunkyThing(ChunkYourIn) {
      if (ChunkYourIn.x === -0) {
        ChunkYourIn.x = 0;
      }

      if (ChunkYourIn.y === -0) {
        ChunkYourIn.y = 0;
      }

      if (loadedChunks["".concat(ChunkYourIn.x, ":").concat(ChunkYourIn.y)] !== undefined && loadedChunks["".concat(ChunkYourIn.x, ":").concat(ChunkYourIn.y)] === true) {// Existing terrain, left hear for a future API
      } else {
        // Check Chunk
        loadedChunks["".concat(ChunkYourIn.x, ":").concat(ChunkYourIn.y)] = true;
        var chunk = (0,_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_2__.generateTerrainChunk)(seed, ChunkYourIn, 120, 0.1);
        var trees = (0,_staticAssets_treeBuilder__WEBPACK_IMPORTED_MODULE_3__.GenerateTrees)(50, scene, new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(ChunkYourIn.x - 250, 250, ChunkYourIn.y - 250), new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(ChunkYourIn.x + 250, 250, ChunkYourIn.y + 250), seed, 120, 0.1, ChunkYourIn);
        chunksInMem["".concat(ChunkYourIn.x, ":").concat(ChunkYourIn.y)] = {
          chunk: chunk,
          trees: trees
        };
        TerrainGroup.add(chunk);
      }
    };

    chunkyThing(yourChunk);
    var lookingChunkX = renderDistance;
    var lookingChunkY = 0;

    for (var i = 0; i < renderDistance; i++) {
      for (var _i = 0; _i < renderDistance; _i++) {
        chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x + lookingChunkX, yourChunk.y + lookingChunkY));
      }
    }

    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x + 500, yourChunk.y));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x + 500, yourChunk.y + 500));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x, yourChunk.y + 500));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x - 500, yourChunk.y + 500));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x - 500, yourChunk.y));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x - 500, yourChunk.y - 500));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x, yourChunk.y - 500));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x + 500, yourChunk.y - 500)); // Now unload old chunks

    if (laoding) {
      laoding = false;
      (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_1__.stopLoading)();
    }
  }, 1000);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC90ZXJyYWluQ2h1bmtyaXNlci5qcyJdLCJuYW1lcyI6WyJyZW5kZXJEaXN0YW5jZSIsImdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllciIsInNlZWQiLCJjYW1lcmEiLCJzY2VuZSIsImxvYWRlZENodW5rcyIsImNodW5rc0luTWVtIiwibGFvZGluZyIsIlRlcnJhaW5Hcm91cCIsIkdyb3VwIiwiYWRkIiwic2V0SW50ZXJ2YWwiLCJ2ZWN0b3IiLCJWZWN0b3IzIiwiZ2V0V29ybGRQb3NpdGlvbiIsInlvdXJDaHVuayIsIlZlY3RvcjIiLCJyb3VuZG51bSIsIngiLCJ6IiwiY2h1bmt5VGhpbmciLCJDaHVua1lvdXJJbiIsInkiLCJ1bmRlZmluZWQiLCJjaHVuayIsImdlbmVyYXRlVGVycmFpbkNodW5rIiwidHJlZXMiLCJHZW5lcmF0ZVRyZWVzIiwibG9va2luZ0NodW5rWCIsImxvb2tpbmdDaHVua1kiLCJpIiwic3RvcExvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsY0FBYyxHQUFHLEVBQXJCO0FBRU8sU0FBU0MsMkJBQVQsQ0FBcUNDLElBQXJDLEVBQTJDQyxNQUEzQyxFQUFtREMsS0FBbkQsRUFBMEQ7QUFDN0QsTUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLElBQWQ7QUFFQSxNQUFJQyxZQUFZLEdBQUcsSUFBSUMsd0NBQUosRUFBbkI7QUFFQUwsT0FBSyxDQUFDTSxHQUFOLENBQVVGLFlBQVY7QUFDQUcsYUFBVyxDQUFDLFlBQU07QUFDZCxRQUFJQyxNQUFNLEdBQUcsSUFBSUMsMENBQUosRUFBYjtBQUNBVixVQUFNLENBQUNXLGdCQUFQLENBQXdCRixNQUF4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SixDQUFZRCxTQUFTLENBQUNHLENBQXRCLEVBQXlCSCxTQUFTLENBQUNPLENBQVYsR0FBWSxHQUFyQyxDQUFELENBQVg7QUFDQUYsZUFBVyxDQUFDLElBQUlKLDBDQUFKLENBQVlELFNBQVMsQ0FBQ0csQ0FBVixHQUFZLEdBQXhCLEVBQTZCSCxTQUFTLENBQUNPLENBQVYsR0FBWSxHQUF6QyxDQUFELENBQVg7QUFDQUYsZUFBVyxDQUFDLElBQUlKLDBDQUFKLENBQVlELFNBQVMsQ0FBQ0csQ0FBVixHQUFZLEdBQXhCLEVBQTZCSCxTQUFTLENBQUNPLENBQXZDLENBQUQsQ0FBWDtBQUNBRixlQUFXLENBQUMsSUFBSUosMENBQUosQ0FBWUQsU0FBUyxDQUFDRyxDQUFWLEdBQVksR0FBeEIsRUFBNkJILFNBQVMsQ0FBQ08sQ0FBVixHQUFZLEdBQXpDLENBQUQsQ0FBWDtBQUNBRixlQUFXLENBQUMsSUFBSUosMENBQUosQ0FBWUQsU0FBUyxDQUFDRyxDQUF0QixFQUF5QkgsU0FBUyxDQUFDTyxDQUFWLEdBQVksR0FBckMsQ0FBRCxDQUFYO0FBQ0FGLGVBQVcsQ0FBQyxJQUFJSiwwQ0FBSixDQUFZRCxTQUFTLENBQUNHLENBQVYsR0FBWSxHQUF4QixFQUE2QkgsU0FBUyxDQUFDTyxDQUFWLEdBQVksR0FBekMsQ0FBRCxDQUFYLENBaERjLENBa0RkOztBQUlBLFFBQUdmLE9BQUgsRUFBVztBQUNQQSxhQUFPLEdBQUcsS0FBVjtBQUNBd0Isc0ZBQVc7QUFDZDtBQUNKLEdBMURVLEVBMERSLElBMURRLENBQVg7QUEyREgiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC4xODA3YWY4ZmJiODY1NDY1MjM4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JvdXAsIFZlY3RvcjIsIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgcm91bmRudW0gfSBmcm9tIFwiLi4vLi4vQWxnb3JpdGhtcy9NYXRoVXRpbHNcIjtcclxuaW1wb3J0IHsgc3RvcExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL0dMQkxvYWRlclwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVRlcnJhaW5DaHVuayB9IGZyb20gXCIuLi9Qcm9jZWR1bGVUZXJyYWluXCI7XHJcbmltcG9ydCB7IEdlbmVyYXRlVHJlZXMgfSBmcm9tIFwiLi4vc3RhdGljQXNzZXRzL3RyZWVCdWlsZGVyXCI7XHJcbmltcG9ydCB7IGNoZWNrQmlvbWVMb2NhdGlvbiB9IGZyb20gXCIuL3V0aWxzL0dlbmVyYXRlQmlvbWVzTWFwLnRzXCI7XHJcblxyXG5sZXQgcmVuZGVyRGlzdGFuY2UgPSAxNTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRlcnJhaW5Bcm91bmRQbGF5ZXIoc2VlZCwgY2FtZXJhLCBzY2VuZSkge1xyXG4gICAgbGV0IGxvYWRlZENodW5rcyA9IHt9O1xyXG4gICAgbGV0IGNodW5rc0luTWVtID0ge307XHJcbiAgICBsZXQgbGFvZGluZyA9IHRydWVcclxuXHJcbiAgICBsZXQgVGVycmFpbkdyb3VwID0gbmV3IEdyb3VwKClcclxuXHJcbiAgICBzY2VuZS5hZGQoVGVycmFpbkdyb3VwKVxyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGxldCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIGNhbWVyYS5nZXRXb3JsZFBvc2l0aW9uKHZlY3Rvcik7XHJcbiAgICAgICAgbGV0IHlvdXJDaHVuayA9IG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICByb3VuZG51bSh2ZWN0b3IueCwgNTAwKSxcclxuICAgICAgICAgICAgcm91bmRudW0odmVjdG9yLnosIDUwMClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgY2h1bmt5VGhpbmcgPSAoQ2h1bmtZb3VySW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKENodW5rWW91ckluLnggPT09IC0wKSB7XHJcbiAgICAgICAgICAgICAgICBDaHVua1lvdXJJbi54ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoQ2h1bmtZb3VySW4ueSA9PT0gLTApIHtcclxuICAgICAgICAgICAgICAgIENodW5rWW91ckluLnkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGxvYWRlZENodW5rc1tgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gIT09XHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICBsb2FkZWRDaHVua3NbYCR7Q2h1bmtZb3VySW4ueH06JHtDaHVua1lvdXJJbi55fWBdID09PSB0cnVlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgLy8gRXhpc3RpbmcgdGVycmFpbiwgbGVmdCBoZWFyIGZvciBhIGZ1dHVyZSBBUElcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIENodW5rXHJcblxyXG4gICAgICAgICAgICAgICAgbG9hZGVkQ2h1bmtzW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmsgPSBnZW5lcmF0ZVRlcnJhaW5DaHVuayhzZWVkLCBDaHVua1lvdXJJbiwgMTIwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRyZWVzID0gR2VuZXJhdGVUcmVlcyg1MCwgc2NlbmUsIG5ldyBWZWN0b3IzKENodW5rWW91ckluLngtMjUwLCAyNTAsQ2h1bmtZb3VySW4ueS0yNTApLCBuZXcgVmVjdG9yMyhDaHVua1lvdXJJbi54KzI1MCwyNTAsQ2h1bmtZb3VySW4ueSsyNTApLCBzZWVkLCAxMjAsIDAuMSwgQ2h1bmtZb3VySW4pXHJcbiAgICAgICAgICAgICAgICBjaHVua3NJbk1lbVtgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gPSB7Y2h1bmssIHRyZWVzfTtcclxuICAgICAgICAgICAgICAgIFRlcnJhaW5Hcm91cC5hZGQoY2h1bmspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2h1bmt5VGhpbmcoeW91ckNodW5rKVxyXG5cclxuICAgICAgICBsZXQgbG9va2luZ0NodW5rWCA9IHJlbmRlckRpc3RhbmNlXHJcbiAgICAgICAgbGV0IGxvb2tpbmdDaHVua1kgPSAwXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxyZW5kZXJEaXN0YW5jZTtpKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPHJlbmRlckRpc3RhbmNlO2krKyl7XHJcbiAgICAgICAgICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCtsb29raW5nQ2h1bmtYLCB5b3VyQ2h1bmsueStsb29raW5nQ2h1bmtZKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCs1MDAsIHlvdXJDaHVuay55KSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCs1MDAsIHlvdXJDaHVuay55KzUwMCkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngsIHlvdXJDaHVuay55KzUwMCkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueSs1MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54LTUwMCwgeW91ckNodW5rLnkpKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54LTUwMCwgeW91ckNodW5rLnktNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCwgeW91ckNodW5rLnktNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCs1MDAsIHlvdXJDaHVuay55LTUwMCkpXHJcblxyXG4gICAgICAgIC8vIE5vdyB1bmxvYWQgb2xkIGNodW5rc1xyXG5cclxuXHJcblxyXG4gICAgICAgIGlmKGxhb2Rpbmcpe1xyXG4gICAgICAgICAgICBsYW9kaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgc3RvcExvYWRpbmcoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9