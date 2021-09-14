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
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Algorithms_MathUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Algorithms/MathUtils */ "./components/Algorithms/MathUtils.js");
/* harmony import */ var _Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Core-API/3dModelHandlers/GLBLoader */ "./components/Core-API/3dModelHandlers/GLBLoader.js");
/* harmony import */ var _ProceduleTerrain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ProceduleTerrain */ "./components/gameFundalmentals/ProceduleTerrain.js");
/* harmony import */ var _staticAssets_treeBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../staticAssets/treeBuilder */ "./components/gameFundalmentals/staticAssets/treeBuilder.js");
/* harmony import */ var _utils_GenerateBiomesMap_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/GenerateBiomesMap.ts */ "./components/gameFundalmentals/TerrainManagement/utils/GenerateBiomesMap.ts");
/* module decorator */ module = __webpack_require__.hmd(module);









var renderDistance = 5;
function generateTerrainAroundPlayer(seed, camera, scene) {
  var loadedChunks = {};
  var chunksInMem = {};
  var laoding = true;
  var TerrainGroup = new three__WEBPACK_IMPORTED_MODULE_8__.Group();
  scene.add(TerrainGroup);
  setInterval(function () {
    var vector = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3();
    camera.getWorldPosition(vector);
    var yourChunk = new three__WEBPACK_IMPORTED_MODULE_8__.Vector2((0,_Algorithms_MathUtils__WEBPACK_IMPORTED_MODULE_3__.roundnum)(vector.x, 500), (0,_Algorithms_MathUtils__WEBPACK_IMPORTED_MODULE_3__.roundnum)(vector.z, 500));

    var chunkyThing = /*#__PURE__*/function () {
      var _ref = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(ChunkYourIn) {
        var chunk, trees;
        return H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (ChunkYourIn.x === -0) {
                  ChunkYourIn.x = 0;
                }

                if (ChunkYourIn.y === -0) {
                  ChunkYourIn.y = 0;
                }

                if (!(loadedChunks["".concat(ChunkYourIn.x, ":").concat(ChunkYourIn.y)] !== undefined && loadedChunks["".concat(ChunkYourIn.x, ":").concat(ChunkYourIn.y)] === true)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 13;
                break;

              case 5:
                // Check Chunk
                loadedChunks["".concat(ChunkYourIn.x, ":").concat(ChunkYourIn.y)] = true;
                chunk = (0,_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_5__.generateTerrainChunk)(seed, ChunkYourIn, 120, 0.1);
                _context.next = 9;
                return (0,_staticAssets_treeBuilder__WEBPACK_IMPORTED_MODULE_6__.GenerateTrees)(50, scene, new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(ChunkYourIn.x - 250, 250, ChunkYourIn.y - 250), new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(ChunkYourIn.x + 250, 250, ChunkYourIn.y + 250), seed, 120, 0.1, ChunkYourIn);

              case 9:
                trees = _context.sent;
                chunksInMem["".concat(ChunkYourIn.x, ":").concat(ChunkYourIn.y)] = {
                  chunk: chunk,
                  trees: trees
                };
                TerrainGroup.add(chunk);
                TerrainGroup.add(trees);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function chunkyThing(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    chunkyThing(yourChunk);
    var defaultX = -(renderDistance * 500) + yourChunk.x;
    var lookingChunkX = defaultX;
    var lookingChunkY = -(renderDistance * 500) + yourChunk.y;

    for (var i = 0; i < renderDistance * 2; i++) {
      for (var k = 0; k < renderDistance * 2; k++) {
        chunkyThing(new three__WEBPACK_IMPORTED_MODULE_8__.Vector2(lookingChunkX, lookingChunkY));
        lookingChunkX += 500;
      }

      lookingChunkX = defaultX;
      lookingChunkY += 500;
    } // Unload chunks


    Object.entries(chunksInMem).forEach(function (_ref2) {
      var _ref3 = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1];

      var _key$split = key.split(":"),
          _key$split2 = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_key$split, 2),
          x = _key$split2[0],
          y = _key$split2[1];

      if (x > renderDistance * 500 || y > renderDistance * 500) {
        // Remove chunk
        loadedChunks[key] = false;
        TerrainGroup.remove([value.chunk, value.trees]);
        console.log("Removed ".concat(key, "!"));
      }
    });
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
      (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_4__.stopLoading)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC90ZXJyYWluQ2h1bmtyaXNlci5qcyJdLCJuYW1lcyI6WyJyZW5kZXJEaXN0YW5jZSIsImdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllciIsInNlZWQiLCJjYW1lcmEiLCJzY2VuZSIsImxvYWRlZENodW5rcyIsImNodW5rc0luTWVtIiwibGFvZGluZyIsIlRlcnJhaW5Hcm91cCIsIkdyb3VwIiwiYWRkIiwic2V0SW50ZXJ2YWwiLCJ2ZWN0b3IiLCJWZWN0b3IzIiwiZ2V0V29ybGRQb3NpdGlvbiIsInlvdXJDaHVuayIsIlZlY3RvcjIiLCJyb3VuZG51bSIsIngiLCJ6IiwiY2h1bmt5VGhpbmciLCJDaHVua1lvdXJJbiIsInkiLCJ1bmRlZmluZWQiLCJjaHVuayIsImdlbmVyYXRlVGVycmFpbkNodW5rIiwiR2VuZXJhdGVUcmVlcyIsInRyZWVzIiwiZGVmYXVsdFgiLCJsb29raW5nQ2h1bmtYIiwibG9va2luZ0NodW5rWSIsImkiLCJrIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsInNwbGl0IiwicmVtb3ZlIiwiY29uc29sZSIsImxvZyIsInN0b3BMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxjQUFjLEdBQUcsQ0FBckI7QUFFTyxTQUFTQywyQkFBVCxDQUFxQ0MsSUFBckMsRUFBMkNDLE1BQTNDLEVBQW1EQyxLQUFuRCxFQUEwRDtBQUM3RCxNQUFJQyxZQUFZLEdBQUcsRUFBbkI7QUFDQSxNQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUVBLE1BQUlDLFlBQVksR0FBRyxJQUFJQyx3Q0FBSixFQUFuQjtBQUVBTCxPQUFLLENBQUNNLEdBQU4sQ0FBVUYs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YyxHQUFHLENBQS9CLEVBQWlDZ0MsQ0FBQyxFQUFsQyxFQUFxQztBQUNqQ1osbUJBQVcsQ0FBQyxJQUFJSiwwQ0FBSixDQUFZYSxhQUFaLEVBQTJCQyxhQUEzQixDQUFELENBQVg7QUFDQUQscUJBQWEsSUFBSSxHQUFqQjtBQUNIOztBQUNEQSxtQkFBYSxHQUFHRCxRQUFoQjtBQUNBRSxtQkFBYSxJQUFJLEdBQWpCO0FBQ0gsS0E1Q2EsQ0ErQ2Q7OztBQUNBRyxVQUFNLENBQUNDLE9BQVAsQ0FBZTVCLFdBQWYsRUFBNEI2QixPQUE1QixDQUNJLGlCQUFrQjtBQUFBO0FBQUEsVUFBaEJDLEdBQWdCO0FBQUEsVUFBWEMsS0FBVzs7QUFBQSx1QkFDREQsR0FBRyxDQUFDRSxLQUFKLENBQVUsR0FBVixDQURDO0FBQUE7QUFBQSxVQUNUcEIsQ0FEUztBQUFBLFVBQ05JLENBRE07O0FBRWQsVUFBR0osQ0FBQyxHQUFHbEIsY0FBYyxHQUFHLEdBQXJCLElBQTRCc0IsQ0FBQyxHQUFHdEIsY0FBYyxHQUFHLEdBQXBELEVBQXdEO0FBQ3BEO0FBQ0FLLG9CQUFZLENBQUMrQixHQUFELENBQVosR0FBb0IsS0FBcEI7QUFDQTVCLG9CQUFZLENBQUMrQixNQUFiLENBQW9CLENBQUNGLEtBQUssQ0FBQ2IsS0FBUCxFQUFjYSxLQUFLLENBQUNWLEtBQXBCLENBQXBCO0FBQ0FhLGVBQU8sQ0FBQ0MsR0FBUixtQkFBdUJMLEdBQXZCO0FBQ0g7QUFDSixLQVRMO0FBWUE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRVE7O0FBSUEsUUFBRzdCLE9BQUgsRUFBVztBQUNQQSxhQUFPLEdBQUcsS0FBVjtBQUNBbUMsc0ZBQVc7QUFDZDtBQUNKLEdBOUVVLEVBOEVSLElBOUVRLENBQVg7QUErRUgiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC5jNWFjZTlhZDc0NjJmNTAzZmY0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JvdXAsIFZlY3RvcjIsIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgcm91bmRudW0gfSBmcm9tIFwiLi4vLi4vQWxnb3JpdGhtcy9NYXRoVXRpbHNcIjtcclxuaW1wb3J0IHsgc3RvcExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL0dMQkxvYWRlclwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVRlcnJhaW5DaHVuayB9IGZyb20gXCIuLi9Qcm9jZWR1bGVUZXJyYWluXCI7XHJcbmltcG9ydCB7IEdlbmVyYXRlVHJlZXMgfSBmcm9tIFwiLi4vc3RhdGljQXNzZXRzL3RyZWVCdWlsZGVyXCI7XHJcbmltcG9ydCB7IGNoZWNrQmlvbWVMb2NhdGlvbiB9IGZyb20gXCIuL3V0aWxzL0dlbmVyYXRlQmlvbWVzTWFwLnRzXCI7XHJcblxyXG5sZXQgcmVuZGVyRGlzdGFuY2UgPSA1O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllcihzZWVkLCBjYW1lcmEsIHNjZW5lKSB7XHJcbiAgICBsZXQgbG9hZGVkQ2h1bmtzID0ge307XHJcbiAgICBsZXQgY2h1bmtzSW5NZW0gPSB7fTtcclxuICAgIGxldCBsYW9kaW5nID0gdHJ1ZVxyXG5cclxuICAgIGxldCBUZXJyYWluR3JvdXAgPSBuZXcgR3JvdXAoKVxyXG5cclxuICAgIHNjZW5lLmFkZChUZXJyYWluR3JvdXApXHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHZlY3RvciA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgY2FtZXJhLmdldFdvcmxkUG9zaXRpb24odmVjdG9yKTtcclxuICAgICAgICBsZXQgeW91ckNodW5rID0gbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgIHJvdW5kbnVtKHZlY3Rvci54LCA1MDApLFxyXG4gICAgICAgICAgICByb3VuZG51bSh2ZWN0b3IueiwgNTAwKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBjaHVua3lUaGluZyA9IGFzeW5jIChDaHVua1lvdXJJbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoQ2h1bmtZb3VySW4ueCA9PT0gLTApIHtcclxuICAgICAgICAgICAgICAgIENodW5rWW91ckluLnggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChDaHVua1lvdXJJbi55ID09PSAtMCkge1xyXG4gICAgICAgICAgICAgICAgQ2h1bmtZb3VySW4ueSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgbG9hZGVkQ2h1bmtzW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSAhPT1cclxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIGxvYWRlZENodW5rc1tgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gPT09IHRydWVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFeGlzdGluZyB0ZXJyYWluLCBsZWZ0IGhlYXIgZm9yIGEgZnV0dXJlIEFQSVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgQ2h1bmtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2FkZWRDaHVua3NbYCR7Q2h1bmtZb3VySW4ueH06JHtDaHVua1lvdXJJbi55fWBdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBjaHVuayA9IGdlbmVyYXRlVGVycmFpbkNodW5rKHNlZWQsIENodW5rWW91ckluLCAxMjAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHJlZXMgPSBhd2FpdCBHZW5lcmF0ZVRyZWVzKDUwLCBzY2VuZSwgbmV3IFZlY3RvcjMoQ2h1bmtZb3VySW4ueC0yNTAsIDI1MCxDaHVua1lvdXJJbi55LTI1MCksIG5ldyBWZWN0b3IzKENodW5rWW91ckluLngrMjUwLDI1MCxDaHVua1lvdXJJbi55KzI1MCksIHNlZWQsIDEyMCwgMC4xLCBDaHVua1lvdXJJbilcclxuICAgICAgICAgICAgICAgIGNodW5rc0luTWVtW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSA9IHtjaHVuaywgdHJlZXN9O1xyXG4gICAgICAgICAgICAgICAgVGVycmFpbkdyb3VwLmFkZChjaHVuayk7XHJcbiAgICAgICAgICAgICAgICBUZXJyYWluR3JvdXAuYWRkKHRyZWVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2h1bmt5VGhpbmcoeW91ckNodW5rKVxyXG4gICAgICAgIGxldCBkZWZhdWx0WCA9ICgtKHJlbmRlckRpc3RhbmNlICogNTAwKSkgKyB5b3VyQ2h1bmsueFxyXG4gICAgICAgIGxldCBsb29raW5nQ2h1bmtYID0gZGVmYXVsdFhcclxuICAgICAgICBsZXQgbG9va2luZ0NodW5rWSA9ICgtKHJlbmRlckRpc3RhbmNlICogNTAwKSkgKyB5b3VyQ2h1bmsueVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8cmVuZGVyRGlzdGFuY2UgKiAyO2krKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaz0wO2s8cmVuZGVyRGlzdGFuY2UgKiAyO2srKyl7XHJcbiAgICAgICAgICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMihsb29raW5nQ2h1bmtYLCBsb29raW5nQ2h1bmtZKSlcclxuICAgICAgICAgICAgICAgIGxvb2tpbmdDaHVua1ggKz0gNTAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbG9va2luZ0NodW5rWCA9IGRlZmF1bHRYXHJcbiAgICAgICAgICAgIGxvb2tpbmdDaHVua1kgKz0gNTAwXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gVW5sb2FkIGNodW5rc1xyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGNodW5rc0luTWVtKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgW3gsIHldID0ga2V5LnNwbGl0KFwiOlwiKVxyXG4gICAgICAgICAgICAgICAgaWYoeCA+IHJlbmRlckRpc3RhbmNlICogNTAwIHx8IHkgPiByZW5kZXJEaXN0YW5jZSAqIDUwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGNodW5rXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkQ2h1bmtzW2tleV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBUZXJyYWluR3JvdXAucmVtb3ZlKFt2YWx1ZS5jaHVuaywgdmFsdWUudHJlZXNdKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmVkICR7a2V5fSFgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCs1MDAsIHlvdXJDaHVuay55KSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCs1MDAsIHlvdXJDaHVuay55KzUwMCkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngsIHlvdXJDaHVuay55KzUwMCkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueSs1MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54LTUwMCwgeW91ckNodW5rLnkpKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54LTUwMCwgeW91ckNodW5rLnktNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCwgeW91ckNodW5rLnktNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCs1MDAsIHlvdXJDaHVuay55LTUwMCkpKi9cclxuXHJcbiAgICAgICAgLy8gTm93IHVubG9hZCBvbGQgY2h1bmtzXHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYobGFvZGluZyl7XHJcbiAgICAgICAgICAgIGxhb2RpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICBzdG9wTG9hZGluZygpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=