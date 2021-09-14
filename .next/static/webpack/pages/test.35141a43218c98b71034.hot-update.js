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
        scene.add(chunk);
      }
    };

    chunkyThing(yourChunk);
    var lookingChunkX = 500;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC90ZXJyYWluQ2h1bmtyaXNlci5qcyJdLCJuYW1lcyI6WyJyZW5kZXJEaXN0YW5jZSIsImdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllciIsInNlZWQiLCJjYW1lcmEiLCJzY2VuZSIsImxvYWRlZENodW5rcyIsImNodW5rc0luTWVtIiwibGFvZGluZyIsInNldEludGVydmFsIiwidmVjdG9yIiwiVmVjdG9yMyIsImdldFdvcmxkUG9zaXRpb24iLCJ5b3VyQ2h1bmsiLCJWZWN0b3IyIiwicm91bmRudW0iLCJ4IiwieiIsImNodW5reVRoaW5nIiwiQ2h1bmtZb3VySW4iLCJ5IiwidW5kZWZpbmVkIiwiY2h1bmsiLCJnZW5lcmF0ZVRlcnJhaW5DaHVuayIsInRyZWVzIiwiR2VuZXJhdGVUcmVlcyIsImFkZCIsImxvb2tpbmdDaHVua1giLCJsb29raW5nQ2h1bmtZIiwiaSIsInN0b3BMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLGNBQWMsR0FBRyxFQUFyQjtBQUVPLFNBQVNDLDJCQUFULENBQXFDQyxJQUFyQyxFQUEyQ0MsTUFBM0MsRUFBbURDLEtBQW5ELEVBQTBEO0FBQzdELE1BQUlDLFlBQVksR0FBRyxFQUFuQjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxJQUFkO0FBQ0FDLGFBQVcsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsTUFBTSxHQUFHLElBQUlDLDBDQUFKLEVBQWI7QUFDQVAsVUFBTSxDQUFDUSxnQkFBUCxDQUF3QkYsTUFBeEI7QUFDQSxRQUFJRyxTQUFTLEdBQUcsSUFBSUMsMENBQUosQ0FDWkMsK0RBQVEsQ0FBQ0wsTUFBTSxDQUFDTSxDQUFSLEVBQVcsR0FBWCxDQURJLEVBRVpELCtEQUFR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UyxDQUFDRyxDQUFWLEdBQVksR0FBeEIsRUFBNkJILFNBQVMsQ0FBQ08sQ0FBVixHQUFZLEdBQXpDLENBQUQsQ0FBWDtBQUNBRixlQUFXLENBQUMsSUFBSUosMENBQUosQ0FBWUQsU0FBUyxDQUFDRyxDQUFWLEdBQVksR0FBeEIsRUFBNkJILFNBQVMsQ0FBQ08sQ0FBdkMsQ0FBRCxDQUFYO0FBQ0FGLGVBQVcsQ0FBQyxJQUFJSiwwQ0FBSixDQUFZRCxTQUFTLENBQUNHLENBQVYsR0FBWSxHQUF4QixFQUE2QkgsU0FBUyxDQUFDTyxDQUFWLEdBQVksR0FBekMsQ0FBRCxDQUFYO0FBQ0FGLGVBQVcsQ0FBQyxJQUFJSiwwQ0FBSixDQUFZRCxTQUFTLENBQUNHLENBQXRCLEVBQXlCSCxTQUFTLENBQUNPLENBQVYsR0FBWSxHQUFyQyxDQUFELENBQVg7QUFDQUYsZUFBVyxDQUFDLElBQUlKLDBDQUFKLENBQVlELFNBQVMsQ0FBQ0csQ0FBVixHQUFZLEdBQXhCLEVBQTZCSCxTQUFTLENBQUNPLENBQVYsR0FBWSxHQUF6QyxDQUFELENBQVgsQ0FoRGMsQ0FrRGQ7O0FBSUEsUUFBR1osT0FBSCxFQUFXO0FBQ1BBLGFBQU8sR0FBRyxLQUFWO0FBQ0FzQixzRkFBVztBQUNkO0FBQ0osR0ExRFUsRUEwRFIsSUExRFEsQ0FBWDtBQTJESCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0LjM1MTQxYTQzMjE4Yzk4YjcxMDM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZWN0b3IyLCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IHJvdW5kbnVtIH0gZnJvbSBcIi4uLy4uL0FsZ29yaXRobXMvTWF0aFV0aWxzXCI7XHJcbmltcG9ydCB7IHN0b3BMb2FkaW5nIH0gZnJvbSBcIi4uLy4uL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9HTEJMb2FkZXJcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVUZXJyYWluQ2h1bmsgfSBmcm9tIFwiLi4vUHJvY2VkdWxlVGVycmFpblwiO1xyXG5pbXBvcnQgeyBHZW5lcmF0ZVRyZWVzIH0gZnJvbSBcIi4uL3N0YXRpY0Fzc2V0cy90cmVlQnVpbGRlclwiO1xyXG5pbXBvcnQgeyBjaGVja0Jpb21lTG9jYXRpb24gfSBmcm9tIFwiLi91dGlscy9HZW5lcmF0ZUJpb21lc01hcC50c1wiO1xyXG5cclxubGV0IHJlbmRlckRpc3RhbmNlID0gMTU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUZXJyYWluQXJvdW5kUGxheWVyKHNlZWQsIGNhbWVyYSwgc2NlbmUpIHtcclxuICAgIGxldCBsb2FkZWRDaHVua3MgPSB7fTtcclxuICAgIGxldCBjaHVua3NJbk1lbSA9IHt9O1xyXG4gICAgbGV0IGxhb2RpbmcgPSB0cnVlXHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHZlY3RvciA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgY2FtZXJhLmdldFdvcmxkUG9zaXRpb24odmVjdG9yKTtcclxuICAgICAgICBsZXQgeW91ckNodW5rID0gbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgIHJvdW5kbnVtKHZlY3Rvci54LCA1MDApLFxyXG4gICAgICAgICAgICByb3VuZG51bSh2ZWN0b3IueiwgNTAwKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBjaHVua3lUaGluZyA9IChDaHVua1lvdXJJbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoQ2h1bmtZb3VySW4ueCA9PT0gLTApIHtcclxuICAgICAgICAgICAgICAgIENodW5rWW91ckluLnggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChDaHVua1lvdXJJbi55ID09PSAtMCkge1xyXG4gICAgICAgICAgICAgICAgQ2h1bmtZb3VySW4ueSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgbG9hZGVkQ2h1bmtzW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSAhPT1cclxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIGxvYWRlZENodW5rc1tgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gPT09IHRydWVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFeGlzdGluZyB0ZXJyYWluLCBsZWZ0IGhlYXIgZm9yIGEgZnV0dXJlIEFQSVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgQ2h1bmtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2FkZWRDaHVua3NbYCR7Q2h1bmtZb3VySW4ueH06JHtDaHVua1lvdXJJbi55fWBdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBjaHVuayA9IGdlbmVyYXRlVGVycmFpbkNodW5rKHNlZWQsIENodW5rWW91ckluLCAxMjAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHJlZXMgPSBHZW5lcmF0ZVRyZWVzKDUwLCBzY2VuZSwgbmV3IFZlY3RvcjMoQ2h1bmtZb3VySW4ueC0yNTAsIDI1MCxDaHVua1lvdXJJbi55LTI1MCksIG5ldyBWZWN0b3IzKENodW5rWW91ckluLngrMjUwLDI1MCxDaHVua1lvdXJJbi55KzI1MCksIHNlZWQsIDEyMCwgMC4xLCBDaHVua1lvdXJJbilcclxuICAgICAgICAgICAgICAgIGNodW5rc0luTWVtW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSA9IHtjaHVuaywgdHJlZXN9O1xyXG4gICAgICAgICAgICAgICAgc2NlbmUuYWRkKGNodW5rKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNodW5reVRoaW5nKHlvdXJDaHVuaylcclxuXHJcbiAgICAgICAgbGV0IGxvb2tpbmdDaHVua1ggPSA1MDBcclxuICAgICAgICBsZXQgbG9va2luZ0NodW5rWSA9IDBcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHJlbmRlckRpc3RhbmNlO2krKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8cmVuZGVyRGlzdGFuY2U7aSsrKXtcclxuICAgICAgICAgICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54K2xvb2tpbmdDaHVua1gsIHlvdXJDaHVuay55K2xvb2tpbmdDaHVua1kpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnkpKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnkrNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCwgeW91ckNodW5rLnkrNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueC01MDAsIHlvdXJDaHVuay55KzUwMCkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueSkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueS01MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54LCB5b3VyQ2h1bmsueS01MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnktNTAwKSlcclxuXHJcbiAgICAgICAgLy8gTm93IHVubG9hZCBvbGQgY2h1bmtzXHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYobGFvZGluZyl7XHJcbiAgICAgICAgICAgIGxhb2RpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICBzdG9wTG9hZGluZygpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=