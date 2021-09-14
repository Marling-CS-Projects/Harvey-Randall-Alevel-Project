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
      for (var _i = 0; _i < renderDistance; _i++) {
        chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x + lookingChunkX, yourChunk.y + lookingChunkY));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC90ZXJyYWluQ2h1bmtyaXNlci5qcyJdLCJuYW1lcyI6WyJyZW5kZXJEaXN0YW5jZSIsImdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllciIsInNlZWQiLCJjYW1lcmEiLCJzY2VuZSIsImxvYWRlZENodW5rcyIsImNodW5rc0luTWVtIiwibGFvZGluZyIsIlRlcnJhaW5Hcm91cCIsIkdyb3VwIiwiYWRkIiwic2V0SW50ZXJ2YWwiLCJ2ZWN0b3IiLCJWZWN0b3IzIiwiZ2V0V29ybGRQb3NpdGlvbiIsInlvdXJDaHVuayIsIlZlY3RvcjIiLCJyb3VuZG51bSIsIngiLCJ6IiwiY2h1bmt5VGhpbmciLCJDaHVua1lvdXJJbiIsInkiLCJ1bmRlZmluZWQiLCJjaHVuayIsImdlbmVyYXRlVGVycmFpbkNodW5rIiwidHJlZXMiLCJHZW5lcmF0ZVRyZWVzIiwibG9va2luZ0NodW5rWCIsImxvb2tpbmdDaHVua1kiLCJpIiwic3RvcExvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsY0FBYyxHQUFHLEVBQXJCO0FBRU8sU0FBU0MsMkJBQVQsQ0FBcUNDLElBQXJDLEVBQTJDQyxNQUEzQyxFQUFtREMsS0FBbkQsRUFBMEQ7QUFDN0QsTUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLElBQWQ7QUFFQSxNQUFJQyxZQUFZLEdBQUcsSUFBSUMsd0NBQUosRUFBbkI7QUFFQUwsT0FBSyxDQUFDTSxHQUFOLENBQVVGLFlBQVY7QUFDQUcsYUFBVyxDQUFDLFlBQU07QUFDZCxRQUFJQyxNQUFNLEdBQUcsSUFBSUMsMENBQUosRUFBYjtBQUNBVixVQUFNLENBQUNXLGdCQUFQLENBQXdCRixNQUF4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Ozs7QUFJQSxRQUFHdEIsT0FBSCxFQUFXO0FBQ1BBLGFBQU8sR0FBRyxLQUFWO0FBQ0F3QixzRkFBVztBQUNkO0FBQ0osR0E5RFUsRUE4RFIsSUE5RFEsQ0FBWDtBQStESCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0Ljk5ZmEyODE4ODhiMmVhYTYwNTBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcm91cCwgVmVjdG9yMiwgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyByb3VuZG51bSB9IGZyb20gXCIuLi8uLi9BbGdvcml0aG1zL01hdGhVdGlsc1wiO1xyXG5pbXBvcnQgeyBzdG9wTG9hZGluZyB9IGZyb20gXCIuLi8uLi9Db3JlLUFQSS8zZE1vZGVsSGFuZGxlcnMvR0xCTG9hZGVyXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlVGVycmFpbkNodW5rIH0gZnJvbSBcIi4uL1Byb2NlZHVsZVRlcnJhaW5cIjtcclxuaW1wb3J0IHsgR2VuZXJhdGVUcmVlcyB9IGZyb20gXCIuLi9zdGF0aWNBc3NldHMvdHJlZUJ1aWxkZXJcIjtcclxuaW1wb3J0IHsgY2hlY2tCaW9tZUxvY2F0aW9uIH0gZnJvbSBcIi4vdXRpbHMvR2VuZXJhdGVCaW9tZXNNYXAudHNcIjtcclxuXHJcbmxldCByZW5kZXJEaXN0YW5jZSA9IDE1O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllcihzZWVkLCBjYW1lcmEsIHNjZW5lKSB7XHJcbiAgICBsZXQgbG9hZGVkQ2h1bmtzID0ge307XHJcbiAgICBsZXQgY2h1bmtzSW5NZW0gPSB7fTtcclxuICAgIGxldCBsYW9kaW5nID0gdHJ1ZVxyXG5cclxuICAgIGxldCBUZXJyYWluR3JvdXAgPSBuZXcgR3JvdXAoKVxyXG5cclxuICAgIHNjZW5lLmFkZChUZXJyYWluR3JvdXApXHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHZlY3RvciA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgY2FtZXJhLmdldFdvcmxkUG9zaXRpb24odmVjdG9yKTtcclxuICAgICAgICBsZXQgeW91ckNodW5rID0gbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgIHJvdW5kbnVtKHZlY3Rvci54LCA1MDApLFxyXG4gICAgICAgICAgICByb3VuZG51bSh2ZWN0b3IueiwgNTAwKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBjaHVua3lUaGluZyA9IChDaHVua1lvdXJJbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoQ2h1bmtZb3VySW4ueCA9PT0gLTApIHtcclxuICAgICAgICAgICAgICAgIENodW5rWW91ckluLnggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChDaHVua1lvdXJJbi55ID09PSAtMCkge1xyXG4gICAgICAgICAgICAgICAgQ2h1bmtZb3VySW4ueSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgbG9hZGVkQ2h1bmtzW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSAhPT1cclxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIGxvYWRlZENodW5rc1tgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gPT09IHRydWVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFeGlzdGluZyB0ZXJyYWluLCBsZWZ0IGhlYXIgZm9yIGEgZnV0dXJlIEFQSVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgQ2h1bmtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2FkZWRDaHVua3NbYCR7Q2h1bmtZb3VySW4ueH06JHtDaHVua1lvdXJJbi55fWBdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBjaHVuayA9IGdlbmVyYXRlVGVycmFpbkNodW5rKHNlZWQsIENodW5rWW91ckluLCAxMjAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHJlZXMgPSBHZW5lcmF0ZVRyZWVzKDUwLCBzY2VuZSwgbmV3IFZlY3RvcjMoQ2h1bmtZb3VySW4ueC0yNTAsIDI1MCxDaHVua1lvdXJJbi55LTI1MCksIG5ldyBWZWN0b3IzKENodW5rWW91ckluLngrMjUwLDI1MCxDaHVua1lvdXJJbi55KzI1MCksIHNlZWQsIDEyMCwgMC4xLCBDaHVua1lvdXJJbilcclxuICAgICAgICAgICAgICAgIGNodW5rc0luTWVtW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSA9IHtjaHVuaywgdHJlZXN9O1xyXG4gICAgICAgICAgICAgICAgVGVycmFpbkdyb3VwLmFkZChjaHVuayk7XHJcbiAgICAgICAgICAgICAgICBUZXJyYWluR3JvdXAuYWRkKHRyZWVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2h1bmt5VGhpbmcoeW91ckNodW5rKVxyXG5cclxuICAgICAgICBsZXQgbG9va2luZ0NodW5rWCA9IChyZW5kZXJEaXN0YW5jZSAqIDUwMCkgLSAoKHJlbmRlckRpc3RhbmNlICogNTAwKSAvIDIpXHJcbiAgICAgICAgbGV0IGxvb2tpbmdDaHVua1kgPSAocmVuZGVyRGlzdGFuY2UgKiA1MDApIC0gKChyZW5kZXJEaXN0YW5jZSAqIDUwMCkgLyAyKVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8cmVuZGVyRGlzdGFuY2U7aSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxyZW5kZXJEaXN0YW5jZTtpKyspe1xyXG4gICAgICAgICAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngrbG9va2luZ0NodW5rWCwgeW91ckNodW5rLnkrbG9va2luZ0NodW5rWSkpXHJcbiAgICAgICAgICAgICAgICBsb29raW5nQ2h1bmtYICs9IDUwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvb2tpbmdDaHVua1kgKz0gNTAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngrNTAwLCB5b3VyQ2h1bmsueSkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngrNTAwLCB5b3VyQ2h1bmsueSs1MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54LCB5b3VyQ2h1bmsueSs1MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54LTUwMCwgeW91ckNodW5rLnkrNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueC01MDAsIHlvdXJDaHVuay55KSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueC01MDAsIHlvdXJDaHVuay55LTUwMCkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngsIHlvdXJDaHVuay55LTUwMCkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngrNTAwLCB5b3VyQ2h1bmsueS01MDApKSovXHJcblxyXG4gICAgICAgIC8vIE5vdyB1bmxvYWQgb2xkIGNodW5rc1xyXG5cclxuXHJcblxyXG4gICAgICAgIGlmKGxhb2Rpbmcpe1xyXG4gICAgICAgICAgICBsYW9kaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgc3RvcExvYWRpbmcoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9