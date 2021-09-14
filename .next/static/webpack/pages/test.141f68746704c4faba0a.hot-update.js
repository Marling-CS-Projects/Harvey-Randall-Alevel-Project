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






var renderDistance = 3;
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
        TerrainGroup.add(trees);
      }
    };

    chunkyThing(yourChunk);
    var lookingChunkX = -(renderDistance * 500) + yourChunk.x;
    var lookingChunkY = -(renderDistance * 500) + yourChunk.y;

    for (var i = 0; i < renderDistance * 2; i++) {
      for (var k = 0; k < renderDistance * 2; k++) {
        chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(lookingChunkX, lookingChunkY));
        lookingChunkX += 500;
      }

      lookingChunkY += 500;
      console.log(lookingChunkX, lookingChunkY);
    }
    /*
    chunkyThing(new Vector2(yourChunk.x+500, yourChunk.y))
    chunkyThing(new Vector2(yourChunk.x+500, yourChunk.y+500))
    chunkyThing(new Vector2(yourChunk.x, yourChunk.y+500))
    chunkyThing(new Vector2(yourChunk.x-500, yourChunk.y+500))
    chunkyThing(new Vector2(yourChunk.x-500, yourChunk.y))
    chunkyThing(new Vector2(yourChunk.x-500, yourChunk.y-500))
    chunkyThing(new Vector2(yourChunk.x, yourChunk.y-500))
    chunkyThing(new Vector2(yourChunk.x+500, yourChunk.y-500))*/
    // Now unload old chunks


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC90ZXJyYWluQ2h1bmtyaXNlci5qcyJdLCJuYW1lcyI6WyJyZW5kZXJEaXN0YW5jZSIsImdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllciIsInNlZWQiLCJjYW1lcmEiLCJzY2VuZSIsImxvYWRlZENodW5rcyIsImNodW5rc0luTWVtIiwibGFvZGluZyIsIlRlcnJhaW5Hcm91cCIsIkdyb3VwIiwiYWRkIiwic2V0SW50ZXJ2YWwiLCJ2ZWN0b3IiLCJWZWN0b3IzIiwiZ2V0V29ybGRQb3NpdGlvbiIsInlvdXJDaHVuayIsIlZlY3RvcjIiLCJyb3VuZG51bSIsIngiLCJ6IiwiY2h1bmt5VGhpbmciLCJDaHVua1lvdXJJbiIsInkiLCJ1bmRlZmluZWQiLCJjaHVuayIsImdlbmVyYXRlVGVycmFpbkNodW5rIiwidHJlZXMiLCJHZW5lcmF0ZVRyZWVzIiwibG9va2luZ0NodW5rWCIsImxvb2tpbmdDaHVua1kiLCJpIiwiayIsImNvbnNvbGUiLCJsb2ciLCJzdG9wTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxjQUFjLEdBQUcsQ0FBckI7QUFFTyxTQUFTQywyQkFBVCxDQUFxQ0MsSUFBckMsRUFBMkNDLE1BQTNDLEVBQW1EQyxLQUFuRCxFQUEwRDtBQUM3RCxNQUFJQyxZQUFZLEdBQUcsRUFBbkI7QUFDQSxNQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUVBLE1BQUlDLFlBQVksR0FBRyxJQUFJQyx3Q0FBSixFQUFuQjtBQUVBTCxPQUFLLENBQUNNLEdBQU4sQ0FBVUYsWUFBVjtBQUNBRyxhQUFXLENBQUMsWUFBTTtBQUNkLFFBQUlDLE1BQU0sR0FBRyxJQUFJQywwQ0FBSixFQUFiO0FBQ0FWLFVBQU0sQ0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRVE7OztBQUlBLFFBQUd0QixPQUFILEVBQVc7QUFDUEEsYUFBTyxHQUFHLEtBQVY7QUFDQTJCLHNGQUFXO0FBQ2Q7QUFDSixHQS9EVSxFQStEUixJQS9EUSxDQUFYO0FBZ0VIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QuMTQxZjY4NzQ2NzA0YzRmYWJhMGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyb3VwLCBWZWN0b3IyLCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IHJvdW5kbnVtIH0gZnJvbSBcIi4uLy4uL0FsZ29yaXRobXMvTWF0aFV0aWxzXCI7XHJcbmltcG9ydCB7IHN0b3BMb2FkaW5nIH0gZnJvbSBcIi4uLy4uL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9HTEJMb2FkZXJcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVUZXJyYWluQ2h1bmsgfSBmcm9tIFwiLi4vUHJvY2VkdWxlVGVycmFpblwiO1xyXG5pbXBvcnQgeyBHZW5lcmF0ZVRyZWVzIH0gZnJvbSBcIi4uL3N0YXRpY0Fzc2V0cy90cmVlQnVpbGRlclwiO1xyXG5pbXBvcnQgeyBjaGVja0Jpb21lTG9jYXRpb24gfSBmcm9tIFwiLi91dGlscy9HZW5lcmF0ZUJpb21lc01hcC50c1wiO1xyXG5cclxubGV0IHJlbmRlckRpc3RhbmNlID0gMztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRlcnJhaW5Bcm91bmRQbGF5ZXIoc2VlZCwgY2FtZXJhLCBzY2VuZSkge1xyXG4gICAgbGV0IGxvYWRlZENodW5rcyA9IHt9O1xyXG4gICAgbGV0IGNodW5rc0luTWVtID0ge307XHJcbiAgICBsZXQgbGFvZGluZyA9IHRydWVcclxuXHJcbiAgICBsZXQgVGVycmFpbkdyb3VwID0gbmV3IEdyb3VwKClcclxuXHJcbiAgICBzY2VuZS5hZGQoVGVycmFpbkdyb3VwKVxyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGxldCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIGNhbWVyYS5nZXRXb3JsZFBvc2l0aW9uKHZlY3Rvcik7XHJcbiAgICAgICAgbGV0IHlvdXJDaHVuayA9IG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICByb3VuZG51bSh2ZWN0b3IueCwgNTAwKSxcclxuICAgICAgICAgICAgcm91bmRudW0odmVjdG9yLnosIDUwMClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgY2h1bmt5VGhpbmcgPSAoQ2h1bmtZb3VySW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKENodW5rWW91ckluLnggPT09IC0wKSB7XHJcbiAgICAgICAgICAgICAgICBDaHVua1lvdXJJbi54ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoQ2h1bmtZb3VySW4ueSA9PT0gLTApIHtcclxuICAgICAgICAgICAgICAgIENodW5rWW91ckluLnkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGxvYWRlZENodW5rc1tgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gIT09XHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICBsb2FkZWRDaHVua3NbYCR7Q2h1bmtZb3VySW4ueH06JHtDaHVua1lvdXJJbi55fWBdID09PSB0cnVlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgLy8gRXhpc3RpbmcgdGVycmFpbiwgbGVmdCBoZWFyIGZvciBhIGZ1dHVyZSBBUElcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIENodW5rXHJcblxyXG4gICAgICAgICAgICAgICAgbG9hZGVkQ2h1bmtzW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmsgPSBnZW5lcmF0ZVRlcnJhaW5DaHVuayhzZWVkLCBDaHVua1lvdXJJbiwgMTIwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRyZWVzID0gR2VuZXJhdGVUcmVlcyg1MCwgc2NlbmUsIG5ldyBWZWN0b3IzKENodW5rWW91ckluLngtMjUwLCAyNTAsQ2h1bmtZb3VySW4ueS0yNTApLCBuZXcgVmVjdG9yMyhDaHVua1lvdXJJbi54KzI1MCwyNTAsQ2h1bmtZb3VySW4ueSsyNTApLCBzZWVkLCAxMjAsIDAuMSwgQ2h1bmtZb3VySW4pXHJcbiAgICAgICAgICAgICAgICBjaHVua3NJbk1lbVtgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gPSB7Y2h1bmssIHRyZWVzfTtcclxuICAgICAgICAgICAgICAgIFRlcnJhaW5Hcm91cC5hZGQoY2h1bmspO1xyXG4gICAgICAgICAgICAgICAgVGVycmFpbkdyb3VwLmFkZCh0cmVlcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNodW5reVRoaW5nKHlvdXJDaHVuaylcclxuXHJcbiAgICAgICAgbGV0IGxvb2tpbmdDaHVua1ggPSAtKHJlbmRlckRpc3RhbmNlICogNTAwKSArIHlvdXJDaHVuay54XHJcbiAgICAgICAgbGV0IGxvb2tpbmdDaHVua1kgPSAtKHJlbmRlckRpc3RhbmNlICogNTAwKSArIHlvdXJDaHVuay55XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxyZW5kZXJEaXN0YW5jZSAqIDI7aSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBrPTA7azxyZW5kZXJEaXN0YW5jZSAqIDI7aysrKXtcclxuICAgICAgICAgICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKGxvb2tpbmdDaHVua1gsIGxvb2tpbmdDaHVua1kpKVxyXG4gICAgICAgICAgICAgICAgbG9va2luZ0NodW5rWCArPSA1MDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb29raW5nQ2h1bmtZICs9IDUwMFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb29raW5nQ2h1bmtYLCBsb29raW5nQ2h1bmtZKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKlxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnkpKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnkrNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCwgeW91ckNodW5rLnkrNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueC01MDAsIHlvdXJDaHVuay55KzUwMCkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueSkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueS01MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54LCB5b3VyQ2h1bmsueS01MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnktNTAwKSkqL1xyXG5cclxuICAgICAgICAvLyBOb3cgdW5sb2FkIG9sZCBjaHVua3NcclxuXHJcblxyXG5cclxuICAgICAgICBpZihsYW9kaW5nKXtcclxuICAgICAgICAgICAgbGFvZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHN0b3BMb2FkaW5nKClcclxuICAgICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==