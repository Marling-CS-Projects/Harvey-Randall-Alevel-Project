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






function generateTerrainAroundPlayer(seed, camera, scene) {
  var loadedChunks = {};
  var chunksInMem = {};
  var laoding = true;
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
        var treeGroup = (0,_staticAssets_treeBuilder__WEBPACK_IMPORTED_MODULE_3__.GenerateTrees)(50, scene, new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(ChunkYourIn.x - 250, 250, ChunkYourIn.y - 250), new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(ChunkYourIn.x + 250, 250, ChunkYourIn.y + 250), seed, 120, 0.1, ChunkYourIn);
        chunksInMem["".concat(ChunkYourIn.x, ":").concat(ChunkYourIn.y)] = chunk;
        scene.add(chunk);
      }
    };

    chunkyThing(yourChunk);
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x + 500, yourChunk.y));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x + 500, yourChunk.y + 500));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x, yourChunk.y + 500));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x - 500, yourChunk.y + 500));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x - 500, yourChunk.y));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x - 500, yourChunk.y - 500));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x, yourChunk.y - 500));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x + 500, yourChunk.y - 500));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC90ZXJyYWluQ2h1bmtyaXNlci5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZVRlcnJhaW5Bcm91bmRQbGF5ZXIiLCJzZWVkIiwiY2FtZXJhIiwic2NlbmUiLCJsb2FkZWRDaHVua3MiLCJjaHVua3NJbk1lbSIsImxhb2RpbmciLCJzZXRJbnRlcnZhbCIsInZlY3RvciIsIlZlY3RvcjMiLCJnZXRXb3JsZFBvc2l0aW9uIiwieW91ckNodW5rIiwiVmVjdG9yMiIsInJvdW5kbnVtIiwieCIsInoiLCJjaHVua3lUaGluZyIsIkNodW5rWW91ckluIiwieSIsInVuZGVmaW5lZCIsImNodW5rIiwiZ2VuZXJhdGVUZXJyYWluQ2h1bmsiLCJ0cmVlR3JvdXAiLCJHZW5lcmF0ZVRyZWVzIiwiYWRkIiwic3RvcExvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsMkJBQVQsQ0FBcUNDLElBQXJDLEVBQTJDQyxNQUEzQyxFQUFtREMsS0FBbkQsRUFBMEQ7QUFDN0QsTUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLElBQWQ7QUFDQUMsYUFBVyxDQUFDLFlBQU07QUFDZCxRQUFJQyxNQUFNLEdBQUcsSUFBSUMsMENBQUosRUFBYjtBQUNBUCxVQUFNLENBQUNRLGdCQUFQLENBQXdCRixNQUF4QjtBQUNBLFFBQUlHLFNBQVMsR0FBRyxJQUFJQywwQ0FBSixDQUNaQywrREFBUSxDQUFDTCxNQUFNLENBQUNNLENBQVIsRUFBVyxHQUFYLENBREksRUFFWkQsK0RBQVEsQ0FBQ0wsTUFBTSxDQUFDTyxDQUFSLEVBQVcsR0FBWCxDQUZJLENBQWhCOztBQUtBLFFBQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFdBQUQsRUFBaUI7QUFDL0IsVUFBSUEsV0FBVyxDQUFDSCxDQUFaLEtBQWtCLENBQUMsQ0FBdkIsRUFBMEI7QUFDdEJHLG1CQUFXLENBQUNILENBQVosR0FBZ0IsQ0FBaEI7QUFDSDs7QUFDRCxVQUFJRyxXQUFXLENBQUNDLENBQVosS0FBa0IsQ0FBQyxDQUF2QixFQUEwQjtBQUN0QkQsbUJBQVcsQ0FBQ0MsQ0FBWixHQUFnQixDQUFoQjtBQUNIOztBQUNELFVBQ0lkLFlBQVksV0FBSWEsV0FBVyxDQUFDSCxDQUFoQixjQUFxQkcsV0FBVyxDQUFDQyxDQUFqQyxFQUFaLEtBQ0lDLFNBREosSUFFQWYsWUFBWSxXQUFJYSxXQUFXLENBQUNILENBQWhCLGNBQXFCRyxXQUFXLENBQUNDLENBQWpDLEVBQVosS0FBc0QsSUFIMUQsRUFJRSxDQUNFO0FBQ0gsT0FORCxNQU1PO0FBQ0g7QUFFQWQsb0JBQVksV0FBSWEsV0FBVyxDQUFDSCxDQUFoQixjQUFxQkcsV0FBVyxDQUFDQyxDQUFqQyxFQUFaLEdBQW9ELElBQXBEO0FBQ0EsWUFBSUUsS0FBSyxHQUFHQyx1RUFBb0IsQ0FBQ3BCLElBQUQsRUFBT2dCLFdBQVAsRUFBb0IsR0FBcEIsRUFBeUIsR0FBekIsQ0FBaEM7QUFDQSxZQUFJSyxTQUFTLEdBQUdDLHdFQUFhLENBQUMsRUFBRCxFQUFLcEIsS0FBTCxFQUFZLElBQUlNLDBDQUFKLENBQVlRLFdBQVcsQ0FBQ0gsQ0FBWixHQUFjLEdBQTFCLEVBQStCLEdBQS9CLEVBQW1DRyxXQUFXLENBQUNDLENBQVosR0FBYyxHQUFqRCxDQUFaLEVBQW1FLElBQUlULDBDQUFKLENBQVlRLFdBQVcsQ0FBQ0gsQ0FBWixHQUFjLEdBQTFCLEVBQThCLEdBQTlCLEVBQWtDRyxXQUFXLENBQUNDLENBQVosR0FBYyxHQUFoRCxDQUFuRSxFQUF5SGpCLElBQXpILEVBQStILEdBQS9ILEVBQW9JLEdBQXBJLEVBQXlJZ0IsV0FBekksQ0FBN0I7QUFDQVosbUJBQVcsV0FBSVksV0FBVyxDQUFDSCxDQUFoQixjQUFxQkcsV0FBVyxDQUFDQyxDQUFqQyxFQUFYLEdBQW1ERSxLQUFuRDtBQUNBakIsYUFBSyxDQUFDcUIsR0FBTixDQUFVSixLQUFWO0FBQ0g7QUFDSixLQXRCRDs7QUF3QkFKLGVBQVcsQ0FBQ0wsU0FBRCxDQUFYO0FBQ0FLLGVBQVcsQ0FBQyxJQUFJSiwwQ0FBSixDQUFZRCxTQUFTLENBQUNHLENBQVYsR0FBWSxHQUF4QixFQUE2QkgsU0FBUyxDQUFDTyxDQUF2QyxDQUFELENBQVg7QUFDQUYsZUFBVyxDQUFDLElBQUlKLDBDQUFKLENBQVlELFNBQVMsQ0FBQ0csQ0FBVixHQUFZLEdBQXhCLEVBQTZCSCxTQUFTLENBQUNPLENBQVYsR0FBWSxHQUF6QyxDQUFELENBQVg7QUFDQUYsZUFBVyxDQUFDLElBQUlKLDBDQUFKLENBQVlELFNBQVMsQ0FBQ0csQ0FBdEIsRUFBeUJILFNBQVMsQ0FBQ08sQ0FBVixHQUFZLEdBQXJDLENBQUQsQ0FBWDtBQUNBRixlQUFXLENBQUMsSUFBSUosMENBQUosQ0FBWUQsU0FBUyxDQUFDRyxDQUFWLEdBQVksR0FBeEIsRUFBNkJILFNBQVMsQ0FBQ08sQ0FBVixHQUFZLEdBQXpDLENBQUQsQ0FBWDtBQUNBRixlQUFXLENBQUMsSUFBSUosMENBQUosQ0FBWUQsU0FBUyxDQUFDRyxDQUFWLEdBQVksR0FBeEIsRUFBNkJILFNBQVMsQ0FBQ08sQ0FBdkMsQ0FBRCxDQUFYO0FBQ0FGLGVBQVcsQ0FBQyxJQUFJSiwwQ0FBSixDQUFZRCxTQUFTLENBQUNHLENBQVYsR0FBWSxHQUF4QixFQUE2QkgsU0FBUyxDQUFDTyxDQUFWLEdBQVksR0FBekMsQ0FBRCxDQUFYO0FBQ0FGLGVBQVcsQ0FBQyxJQUFJSiwwQ0FBSixDQUFZRCxTQUFTLENBQUNHLENBQXRCLEVBQXlCSCxTQUFTLENBQUNPLENBQVYsR0FBWSxHQUFyQyxDQUFELENBQVg7QUFDQUYsZUFBVyxDQUFDLElBQUlKLDBDQUFKLENBQVlELFNBQVMsQ0FBQ0csQ0FBVixHQUFZLEdBQXhCLEVBQTZCSCxTQUFTLENBQUNPLENBQVYsR0FBWSxHQUF6QyxDQUFELENBQVg7O0FBR0EsUUFBR1osT0FBSCxFQUFXO0FBQ1BBLGFBQU8sR0FBRyxLQUFWO0FBQ0FtQixzRkFBVztBQUNkO0FBQ0osR0EvQ1UsRUErQ1IsSUEvQ1EsQ0FBWDtBQWdESCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0LjRkZGM4ZThiM2E4ZjAwNjNiNzYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZWN0b3IyLCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IHJvdW5kbnVtIH0gZnJvbSBcIi4uLy4uL0FsZ29yaXRobXMvTWF0aFV0aWxzXCI7XHJcbmltcG9ydCB7IHN0b3BMb2FkaW5nIH0gZnJvbSBcIi4uLy4uL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9HTEJMb2FkZXJcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVUZXJyYWluQ2h1bmsgfSBmcm9tIFwiLi4vUHJvY2VkdWxlVGVycmFpblwiO1xyXG5pbXBvcnQgeyBHZW5lcmF0ZVRyZWVzIH0gZnJvbSBcIi4uL3N0YXRpY0Fzc2V0cy90cmVlQnVpbGRlclwiO1xyXG5pbXBvcnQgeyBjaGVja0Jpb21lTG9jYXRpb24gfSBmcm9tIFwiLi91dGlscy9HZW5lcmF0ZUJpb21lc01hcC50c1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllcihzZWVkLCBjYW1lcmEsIHNjZW5lKSB7XHJcbiAgICBsZXQgbG9hZGVkQ2h1bmtzID0ge307XHJcbiAgICBsZXQgY2h1bmtzSW5NZW0gPSB7fTtcclxuICAgIGxldCBsYW9kaW5nID0gdHJ1ZVxyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGxldCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIGNhbWVyYS5nZXRXb3JsZFBvc2l0aW9uKHZlY3Rvcik7XHJcbiAgICAgICAgbGV0IHlvdXJDaHVuayA9IG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICByb3VuZG51bSh2ZWN0b3IueCwgNTAwKSxcclxuICAgICAgICAgICAgcm91bmRudW0odmVjdG9yLnosIDUwMClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgY2h1bmt5VGhpbmcgPSAoQ2h1bmtZb3VySW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKENodW5rWW91ckluLnggPT09IC0wKSB7XHJcbiAgICAgICAgICAgICAgICBDaHVua1lvdXJJbi54ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoQ2h1bmtZb3VySW4ueSA9PT0gLTApIHtcclxuICAgICAgICAgICAgICAgIENodW5rWW91ckluLnkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGxvYWRlZENodW5rc1tgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gIT09XHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICBsb2FkZWRDaHVua3NbYCR7Q2h1bmtZb3VySW4ueH06JHtDaHVua1lvdXJJbi55fWBdID09PSB0cnVlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgLy8gRXhpc3RpbmcgdGVycmFpbiwgbGVmdCBoZWFyIGZvciBhIGZ1dHVyZSBBUElcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIENodW5rXHJcblxyXG4gICAgICAgICAgICAgICAgbG9hZGVkQ2h1bmtzW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmsgPSBnZW5lcmF0ZVRlcnJhaW5DaHVuayhzZWVkLCBDaHVua1lvdXJJbiwgMTIwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRyZWVHcm91cCA9IEdlbmVyYXRlVHJlZXMoNTAsIHNjZW5lLCBuZXcgVmVjdG9yMyhDaHVua1lvdXJJbi54LTI1MCwgMjUwLENodW5rWW91ckluLnktMjUwKSwgbmV3IFZlY3RvcjMoQ2h1bmtZb3VySW4ueCsyNTAsMjUwLENodW5rWW91ckluLnkrMjUwKSwgc2VlZCwgMTIwLCAwLjEsIENodW5rWW91ckluKVxyXG4gICAgICAgICAgICAgICAgY2h1bmtzSW5NZW1bYCR7Q2h1bmtZb3VySW4ueH06JHtDaHVua1lvdXJJbi55fWBdID0gY2h1bms7XHJcbiAgICAgICAgICAgICAgICBzY2VuZS5hZGQoY2h1bmspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2h1bmt5VGhpbmcoeW91ckNodW5rKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnkpKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnkrNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCwgeW91ckNodW5rLnkrNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueC01MDAsIHlvdXJDaHVuay55KzUwMCkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueSkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueS01MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54LCB5b3VyQ2h1bmsueS01MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnktNTAwKSlcclxuXHJcblxyXG4gICAgICAgIGlmKGxhb2Rpbmcpe1xyXG4gICAgICAgICAgICBsYW9kaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgc3RvcExvYWRpbmcoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9