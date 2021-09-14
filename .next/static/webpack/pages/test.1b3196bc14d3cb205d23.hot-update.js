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
        TerrainGroup.add(trees);
      }
    };

    chunkyThing(yourChunk);
    var lookingChunkX = renderDistance * 500 - renderDistance * 500 / 2;
    var lookingChunkY = renderDistance * 500 - renderDistance * 500 / 2;

    for (var i = 0; i < renderDistance; i++) {
      for (var k = 0; k < renderDistance; k++) {
        console.log(lookingChunkX, lookingChunkY);
        chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(lookingChunkX, lookingChunkY));
        lookingChunkX += 500;
      }

      lookingChunkY += 500;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC90ZXJyYWluQ2h1bmtyaXNlci5qcyJdLCJuYW1lcyI6WyJyZW5kZXJEaXN0YW5jZSIsImdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllciIsInNlZWQiLCJjYW1lcmEiLCJzY2VuZSIsImxvYWRlZENodW5rcyIsImNodW5rc0luTWVtIiwibGFvZGluZyIsIlRlcnJhaW5Hcm91cCIsIkdyb3VwIiwiYWRkIiwic2V0SW50ZXJ2YWwiLCJ2ZWN0b3IiLCJWZWN0b3IzIiwiZ2V0V29ybGRQb3NpdGlvbiIsInlvdXJDaHVuayIsIlZlY3RvcjIiLCJyb3VuZG51bSIsIngiLCJ6IiwiY2h1bmt5VGhpbmciLCJDaHVua1lvdXJJbiIsInkiLCJ1bmRlZmluZWQiLCJjaHVuayIsImdlbmVyYXRlVGVycmFpbkNodW5rIiwidHJlZXMiLCJHZW5lcmF0ZVRyZWVzIiwibG9va2luZ0NodW5rWCIsImxvb2tpbmdDaHVua1kiLCJpIiwiayIsImNvbnNvbGUiLCJsb2ciLCJzdG9wTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxjQUFjLEdBQUcsRUFBckI7QUFFTyxTQUFTQywyQkFBVCxDQUFxQ0MsSUFBckMsRUFBMkNDLE1BQTNDLEVBQW1EQyxLQUFuRCxFQUEwRDtBQUM3RCxNQUFJQyxZQUFZLEdBQUcsRUFBbkI7QUFDQSxNQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUVBLE1BQUlDLFlBQVksR0FBRyxJQUFJQyx3Q0FBSixFQUFuQjtBQUVBTCxPQUFLLENBQUNNLEdBQU4sQ0FBVUYsWUFBVjtBQUNBRyxhQUFXLENBQUMsWUFBTTtBQUNkLFFBQUlDLE1BQU0sR0FBRyxJQUFJQywwQ0FBSixFQUFiO0FBQ0FWLFVBQU0sQ0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUVROzs7QUFJQSxRQUFHdEIsT0FBSCxFQUFXO0FBQ1BBLGFBQU8sR0FBRyxLQUFWO0FBQ0EyQixzRkFBVztBQUNkO0FBQ0osR0EvRFUsRUErRFIsSUEvRFEsQ0FBWDtBQWdFSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0LjFiMzE5NmJjMTRkM2NiMjA1ZDIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcm91cCwgVmVjdG9yMiwgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyByb3VuZG51bSB9IGZyb20gXCIuLi8uLi9BbGdvcml0aG1zL01hdGhVdGlsc1wiO1xyXG5pbXBvcnQgeyBzdG9wTG9hZGluZyB9IGZyb20gXCIuLi8uLi9Db3JlLUFQSS8zZE1vZGVsSGFuZGxlcnMvR0xCTG9hZGVyXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlVGVycmFpbkNodW5rIH0gZnJvbSBcIi4uL1Byb2NlZHVsZVRlcnJhaW5cIjtcclxuaW1wb3J0IHsgR2VuZXJhdGVUcmVlcyB9IGZyb20gXCIuLi9zdGF0aWNBc3NldHMvdHJlZUJ1aWxkZXJcIjtcclxuaW1wb3J0IHsgY2hlY2tCaW9tZUxvY2F0aW9uIH0gZnJvbSBcIi4vdXRpbHMvR2VuZXJhdGVCaW9tZXNNYXAudHNcIjtcclxuXHJcbmxldCByZW5kZXJEaXN0YW5jZSA9IDE1O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllcihzZWVkLCBjYW1lcmEsIHNjZW5lKSB7XHJcbiAgICBsZXQgbG9hZGVkQ2h1bmtzID0ge307XHJcbiAgICBsZXQgY2h1bmtzSW5NZW0gPSB7fTtcclxuICAgIGxldCBsYW9kaW5nID0gdHJ1ZVxyXG5cclxuICAgIGxldCBUZXJyYWluR3JvdXAgPSBuZXcgR3JvdXAoKVxyXG5cclxuICAgIHNjZW5lLmFkZChUZXJyYWluR3JvdXApXHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHZlY3RvciA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgY2FtZXJhLmdldFdvcmxkUG9zaXRpb24odmVjdG9yKTtcclxuICAgICAgICBsZXQgeW91ckNodW5rID0gbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgIHJvdW5kbnVtKHZlY3Rvci54LCA1MDApLFxyXG4gICAgICAgICAgICByb3VuZG51bSh2ZWN0b3IueiwgNTAwKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBjaHVua3lUaGluZyA9IChDaHVua1lvdXJJbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoQ2h1bmtZb3VySW4ueCA9PT0gLTApIHtcclxuICAgICAgICAgICAgICAgIENodW5rWW91ckluLnggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChDaHVua1lvdXJJbi55ID09PSAtMCkge1xyXG4gICAgICAgICAgICAgICAgQ2h1bmtZb3VySW4ueSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgbG9hZGVkQ2h1bmtzW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSAhPT1cclxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIGxvYWRlZENodW5rc1tgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gPT09IHRydWVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFeGlzdGluZyB0ZXJyYWluLCBsZWZ0IGhlYXIgZm9yIGEgZnV0dXJlIEFQSVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgQ2h1bmtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2FkZWRDaHVua3NbYCR7Q2h1bmtZb3VySW4ueH06JHtDaHVua1lvdXJJbi55fWBdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBjaHVuayA9IGdlbmVyYXRlVGVycmFpbkNodW5rKHNlZWQsIENodW5rWW91ckluLCAxMjAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHJlZXMgPSBHZW5lcmF0ZVRyZWVzKDUwLCBzY2VuZSwgbmV3IFZlY3RvcjMoQ2h1bmtZb3VySW4ueC0yNTAsIDI1MCxDaHVua1lvdXJJbi55LTI1MCksIG5ldyBWZWN0b3IzKENodW5rWW91ckluLngrMjUwLDI1MCxDaHVua1lvdXJJbi55KzI1MCksIHNlZWQsIDEyMCwgMC4xLCBDaHVua1lvdXJJbilcclxuICAgICAgICAgICAgICAgIGNodW5rc0luTWVtW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSA9IHtjaHVuaywgdHJlZXN9O1xyXG4gICAgICAgICAgICAgICAgVGVycmFpbkdyb3VwLmFkZChjaHVuayk7XHJcbiAgICAgICAgICAgICAgICBUZXJyYWluR3JvdXAuYWRkKHRyZWVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2h1bmt5VGhpbmcoeW91ckNodW5rKVxyXG5cclxuICAgICAgICBsZXQgbG9va2luZ0NodW5rWCA9IChyZW5kZXJEaXN0YW5jZSAqIDUwMCkgLSAoKHJlbmRlckRpc3RhbmNlICogNTAwKSAvIDIpXHJcbiAgICAgICAgbGV0IGxvb2tpbmdDaHVua1kgPSAocmVuZGVyRGlzdGFuY2UgKiA1MDApIC0gKChyZW5kZXJEaXN0YW5jZSAqIDUwMCkgLyAyKVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8cmVuZGVyRGlzdGFuY2U7aSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBrPTA7azxyZW5kZXJEaXN0YW5jZTtrKyspe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobG9va2luZ0NodW5rWCwgbG9va2luZ0NodW5rWSlcclxuICAgICAgICAgICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKGxvb2tpbmdDaHVua1gsIGxvb2tpbmdDaHVua1kpKVxyXG4gICAgICAgICAgICAgICAgbG9va2luZ0NodW5rWCArPSA1MDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb29raW5nQ2h1bmtZICs9IDUwMFxyXG4gICAgICAgIH1cclxuICAgICAgICAvKlxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnkpKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnkrNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCwgeW91ckNodW5rLnkrNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueC01MDAsIHlvdXJDaHVuay55KzUwMCkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueSkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueS01MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54LCB5b3VyQ2h1bmsueS01MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnktNTAwKSkqL1xyXG5cclxuICAgICAgICAvLyBOb3cgdW5sb2FkIG9sZCBjaHVua3NcclxuXHJcblxyXG5cclxuICAgICAgICBpZihsYW9kaW5nKXtcclxuICAgICAgICAgICAgbGFvZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHN0b3BMb2FkaW5nKClcclxuICAgICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==