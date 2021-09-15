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









var renderDistance = 3;
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
                return (0,_staticAssets_treeBuilder__WEBPACK_IMPORTED_MODULE_6__.GenerateTrees)(0, scene, new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(ChunkYourIn.x - 250, 250, ChunkYourIn.y - 250), new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(ChunkYourIn.x + 250, 250, ChunkYourIn.y + 250), seed, 120, 0.1, ChunkYourIn);

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
    }

    var chunkDistmance = renderDistance * 500;
    var diagonal = Math.sqrt(Math.pow(chunkDistmance, 2) + Math.pow(chunkDistmance, 2)); // Unload chunks

    Object.entries(chunksInMem).forEach(function (_ref2) {
      var _ref3 = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1];

      var _key$split = key.split(":"),
          _key$split2 = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_key$split, 2),
          x = _key$split2[0],
          y = _key$split2[1];

      var vectorNew = new three__WEBPACK_IMPORTED_MODULE_8__.Vector2(x, y);
      var magnitide = vectorNew.distanceTo(yourChunk);

      if (magnitide > diagonal) {
        // Remove chunk
        loadedChunks[key] = false;
        TerrainGroup.remove(value.chunk);
        TerrainGroup.remove(value.trees);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC90ZXJyYWluQ2h1bmtyaXNlci5qcyJdLCJuYW1lcyI6WyJyZW5kZXJEaXN0YW5jZSIsImdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllciIsInNlZWQiLCJjYW1lcmEiLCJzY2VuZSIsImxvYWRlZENodW5rcyIsImNodW5rc0luTWVtIiwibGFvZGluZyIsIlRlcnJhaW5Hcm91cCIsIkdyb3VwIiwiYWRkIiwic2V0SW50ZXJ2YWwiLCJ2ZWN0b3IiLCJWZWN0b3IzIiwiZ2V0V29ybGRQb3NpdGlvbiIsInlvdXJDaHVuayIsIlZlY3RvcjIiLCJyb3VuZG51bSIsIngiLCJ6IiwiY2h1bmt5VGhpbmciLCJDaHVua1lvdXJJbiIsInkiLCJ1bmRlZmluZWQiLCJjaHVuayIsImdlbmVyYXRlVGVycmFpbkNodW5rIiwiR2VuZXJhdGVUcmVlcyIsInRyZWVzIiwiZGVmYXVsdFgiLCJsb29raW5nQ2h1bmtYIiwibG9va2luZ0NodW5rWSIsImkiLCJrIiwiY2h1bmtEaXN0bWFuY2UiLCJkaWFnb25hbCIsIk1hdGgiLCJzcXJ0IiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsInNwbGl0IiwidmVjdG9yTmV3IiwibWFnbml0aWRlIiwiZGlzdGFuY2VUbyIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJzdG9wTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsY0FBYyxHQUFHLENBQXJCO0FBRU8sU0FBU0MsMkJBQVQsQ0FBcUNDLElBQXJDLEVBQTJDQyxNQUEzQyxFQUFtREMsS0FBbkQsRUFBMEQ7QUFDN0QsTUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0EsTUFBSUMsT0FB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S0FBMUI7QUFDQW9CLGVBQU8sQ0FBQ0MsR0FBUixtQkFBdUJSLEdBQXZCO0FBQ0g7QUFDSixLQWJMO0FBZ0JBO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVROztBQUlBLFFBQUdqQyxPQUFILEVBQVc7QUFDUEEsYUFBTyxHQUFHLEtBQVY7QUFDQTBDLHNGQUFXO0FBQ2Q7QUFDSixHQXBGVSxFQW9GUixJQXBGUSxDQUFYO0FBcUZIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QuNDBjZDhkZDVjMmJmMzgyMzQ0MzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyb3VwLCBWZWN0b3IyLCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IHJvdW5kbnVtIH0gZnJvbSBcIi4uLy4uL0FsZ29yaXRobXMvTWF0aFV0aWxzXCI7XHJcbmltcG9ydCB7IHN0b3BMb2FkaW5nIH0gZnJvbSBcIi4uLy4uL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9HTEJMb2FkZXJcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVUZXJyYWluQ2h1bmsgfSBmcm9tIFwiLi4vUHJvY2VkdWxlVGVycmFpblwiO1xyXG5pbXBvcnQgeyBHZW5lcmF0ZVRyZWVzIH0gZnJvbSBcIi4uL3N0YXRpY0Fzc2V0cy90cmVlQnVpbGRlclwiO1xyXG5pbXBvcnQgeyBjaGVja0Jpb21lTG9jYXRpb24gfSBmcm9tIFwiLi91dGlscy9HZW5lcmF0ZUJpb21lc01hcC50c1wiO1xyXG5cclxubGV0IHJlbmRlckRpc3RhbmNlID0gMztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRlcnJhaW5Bcm91bmRQbGF5ZXIoc2VlZCwgY2FtZXJhLCBzY2VuZSkge1xyXG4gICAgbGV0IGxvYWRlZENodW5rcyA9IHt9O1xyXG4gICAgbGV0IGNodW5rc0luTWVtID0ge307XHJcbiAgICBsZXQgbGFvZGluZyA9IHRydWVcclxuXHJcbiAgICBsZXQgVGVycmFpbkdyb3VwID0gbmV3IEdyb3VwKClcclxuXHJcbiAgICBzY2VuZS5hZGQoVGVycmFpbkdyb3VwKVxyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGxldCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIGNhbWVyYS5nZXRXb3JsZFBvc2l0aW9uKHZlY3Rvcik7XHJcbiAgICAgICAgbGV0IHlvdXJDaHVuayA9IG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICByb3VuZG51bSh2ZWN0b3IueCwgNTAwKSxcclxuICAgICAgICAgICAgcm91bmRudW0odmVjdG9yLnosIDUwMClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgY2h1bmt5VGhpbmcgPSBhc3luYyAoQ2h1bmtZb3VySW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKENodW5rWW91ckluLnggPT09IC0wKSB7XHJcbiAgICAgICAgICAgICAgICBDaHVua1lvdXJJbi54ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoQ2h1bmtZb3VySW4ueSA9PT0gLTApIHtcclxuICAgICAgICAgICAgICAgIENodW5rWW91ckluLnkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGxvYWRlZENodW5rc1tgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gIT09XHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICBsb2FkZWRDaHVua3NbYCR7Q2h1bmtZb3VySW4ueH06JHtDaHVua1lvdXJJbi55fWBdID09PSB0cnVlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgLy8gRXhpc3RpbmcgdGVycmFpbiwgbGVmdCBoZWFyIGZvciBhIGZ1dHVyZSBBUElcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIENodW5rXHJcblxyXG4gICAgICAgICAgICAgICAgbG9hZGVkQ2h1bmtzW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmsgPSBnZW5lcmF0ZVRlcnJhaW5DaHVuayhzZWVkLCBDaHVua1lvdXJJbiwgMTIwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRyZWVzID0gYXdhaXQgR2VuZXJhdGVUcmVlcygwLCBzY2VuZSwgbmV3IFZlY3RvcjMoQ2h1bmtZb3VySW4ueC0yNTAsIDI1MCxDaHVua1lvdXJJbi55LTI1MCksIG5ldyBWZWN0b3IzKENodW5rWW91ckluLngrMjUwLDI1MCxDaHVua1lvdXJJbi55KzI1MCksIHNlZWQsIDEyMCwgMC4xLCBDaHVua1lvdXJJbilcclxuICAgICAgICAgICAgICAgIGNodW5rc0luTWVtW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSA9IHtjaHVuaywgdHJlZXN9O1xyXG4gICAgICAgICAgICAgICAgVGVycmFpbkdyb3VwLmFkZChjaHVuayk7XHJcbiAgICAgICAgICAgICAgICBUZXJyYWluR3JvdXAuYWRkKHRyZWVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2h1bmt5VGhpbmcoeW91ckNodW5rKVxyXG4gICAgICAgIGxldCBkZWZhdWx0WCA9ICgtKHJlbmRlckRpc3RhbmNlICogNTAwKSkgKyB5b3VyQ2h1bmsueFxyXG4gICAgICAgIGxldCBsb29raW5nQ2h1bmtYID0gZGVmYXVsdFhcclxuICAgICAgICBsZXQgbG9va2luZ0NodW5rWSA9ICgtKHJlbmRlckRpc3RhbmNlICogNTAwKSkgKyB5b3VyQ2h1bmsueVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8cmVuZGVyRGlzdGFuY2UgKiAyO2krKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaz0wO2s8cmVuZGVyRGlzdGFuY2UgKiAyO2srKyl7XHJcbiAgICAgICAgICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMihsb29raW5nQ2h1bmtYLCBsb29raW5nQ2h1bmtZKSlcclxuICAgICAgICAgICAgICAgIGxvb2tpbmdDaHVua1ggKz0gNTAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbG9va2luZ0NodW5rWCA9IGRlZmF1bHRYXHJcbiAgICAgICAgICAgIGxvb2tpbmdDaHVua1kgKz0gNTAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY2h1bmtEaXN0bWFuY2UgPSAocmVuZGVyRGlzdGFuY2UgKiA1MDApXHJcbiAgICAgICAgbGV0IGRpYWdvbmFsID0gTWF0aC5zcXJ0KGNodW5rRGlzdG1hbmNlKioyK2NodW5rRGlzdG1hbmNlKioyKVxyXG5cclxuICAgICAgICAvLyBVbmxvYWQgY2h1bmtzXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY2h1bmtzSW5NZW0pLmZvckVhY2goXHJcbiAgICAgICAgICAgIChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBbeCwgeV0gPSBrZXkuc3BsaXQoXCI6XCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgdmVjdG9yTmV3ID0gbmV3IFZlY3RvcjIoeCx5KVxyXG4gICAgICAgICAgICAgICAgbGV0IG1hZ25pdGlkZSA9IHZlY3Rvck5ldy5kaXN0YW5jZVRvKHlvdXJDaHVuaylcclxuXHJcbiAgICAgICAgICAgICAgICBpZihtYWduaXRpZGUgPiBkaWFnb25hbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGNodW5rXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkQ2h1bmtzW2tleV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBUZXJyYWluR3JvdXAucmVtb3ZlKHZhbHVlLmNodW5rKVxyXG4gICAgICAgICAgICAgICAgICAgIFRlcnJhaW5Hcm91cC5yZW1vdmUodmFsdWUudHJlZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92ZWQgJHtrZXl9IWApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnkpKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnkrNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCwgeW91ckNodW5rLnkrNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueC01MDAsIHlvdXJDaHVuay55KzUwMCkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueSkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueS01MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54LCB5b3VyQ2h1bmsueS01MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnktNTAwKSkqL1xyXG5cclxuICAgICAgICAvLyBOb3cgdW5sb2FkIG9sZCBjaHVua3NcclxuXHJcblxyXG5cclxuICAgICAgICBpZihsYW9kaW5nKXtcclxuICAgICAgICAgICAgbGFvZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHN0b3BMb2FkaW5nKClcclxuICAgICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==