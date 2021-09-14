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

      console.log(Math.abs(yourChunk.y + renderDistance * 500));

      if (Math.abs(x) > Math.abs(yourChunk.x + renderDistance * 500) || Math.abs(y) > Math.abs(yourChunk.y + renderDistance * 500)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC90ZXJyYWluQ2h1bmtyaXNlci5qcyJdLCJuYW1lcyI6WyJyZW5kZXJEaXN0YW5jZSIsImdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllciIsInNlZWQiLCJjYW1lcmEiLCJzY2VuZSIsImxvYWRlZENodW5rcyIsImNodW5rc0luTWVtIiwibGFvZGluZyIsIlRlcnJhaW5Hcm91cCIsIkdyb3VwIiwiYWRkIiwic2V0SW50ZXJ2YWwiLCJ2ZWN0b3IiLCJWZWN0b3IzIiwiZ2V0V29ybGRQb3NpdGlvbiIsInlvdXJDaHVuayIsIlZlY3RvcjIiLCJyb3VuZG51bSIsIngiLCJ6IiwiY2h1bmt5VGhpbmciLCJDaHVua1lvdXJJbiIsInkiLCJ1bmRlZmluZWQiLCJjaHVuayIsImdlbmVyYXRlVGVycmFpbkNodW5rIiwiR2VuZXJhdGVUcmVlcyIsInRyZWVzIiwiZGVmYXVsdFgiLCJsb29raW5nQ2h1bmtYIiwibG9va2luZ0NodW5rWSIsImkiLCJrIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsIk1hdGgiLCJhYnMiLCJyZW1vdmUiLCJzdG9wTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsY0FBYyxHQUFHLENBQXJCO0FBRU8sU0FBU0MsMkJBQVQsQ0FBcUNDLElBQXJDLEVBQTJDQyxNQUEzQyxFQUFtREMsS0FBbkQsRUFBMEQ7QUFDN0QsTUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLElBQWQ7QUFFQSxNQUFJQyxZQUFZLEdBQUcsSUFBSUMsd0NBQUosRUFBbkI7QUFFQUwsT0FBSyxDQUFD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Vkw7QUFhQTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFUTs7QUFJQSxRQUFHN0IsT0FBSCxFQUFXO0FBQ1BBLGFBQU8sR0FBRyxLQUFWO0FBQ0FxQyxzRkFBVztBQUNkO0FBQ0osR0EvRVUsRUErRVIsSUEvRVEsQ0FBWDtBQWdGSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0LjFmMWIwMDYyOTQ3ZDMzNGI1YTllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcm91cCwgVmVjdG9yMiwgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyByb3VuZG51bSB9IGZyb20gXCIuLi8uLi9BbGdvcml0aG1zL01hdGhVdGlsc1wiO1xyXG5pbXBvcnQgeyBzdG9wTG9hZGluZyB9IGZyb20gXCIuLi8uLi9Db3JlLUFQSS8zZE1vZGVsSGFuZGxlcnMvR0xCTG9hZGVyXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlVGVycmFpbkNodW5rIH0gZnJvbSBcIi4uL1Byb2NlZHVsZVRlcnJhaW5cIjtcclxuaW1wb3J0IHsgR2VuZXJhdGVUcmVlcyB9IGZyb20gXCIuLi9zdGF0aWNBc3NldHMvdHJlZUJ1aWxkZXJcIjtcclxuaW1wb3J0IHsgY2hlY2tCaW9tZUxvY2F0aW9uIH0gZnJvbSBcIi4vdXRpbHMvR2VuZXJhdGVCaW9tZXNNYXAudHNcIjtcclxuXHJcbmxldCByZW5kZXJEaXN0YW5jZSA9IDU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUZXJyYWluQXJvdW5kUGxheWVyKHNlZWQsIGNhbWVyYSwgc2NlbmUpIHtcclxuICAgIGxldCBsb2FkZWRDaHVua3MgPSB7fTtcclxuICAgIGxldCBjaHVua3NJbk1lbSA9IHt9O1xyXG4gICAgbGV0IGxhb2RpbmcgPSB0cnVlXHJcblxyXG4gICAgbGV0IFRlcnJhaW5Hcm91cCA9IG5ldyBHcm91cCgpXHJcblxyXG4gICAgc2NlbmUuYWRkKFRlcnJhaW5Hcm91cClcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBsZXQgdmVjdG9yID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICBjYW1lcmEuZ2V0V29ybGRQb3NpdGlvbih2ZWN0b3IpO1xyXG4gICAgICAgIGxldCB5b3VyQ2h1bmsgPSBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgcm91bmRudW0odmVjdG9yLngsIDUwMCksXHJcbiAgICAgICAgICAgIHJvdW5kbnVtKHZlY3Rvci56LCA1MDApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IGNodW5reVRoaW5nID0gYXN5bmMgKENodW5rWW91ckluKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChDaHVua1lvdXJJbi54ID09PSAtMCkge1xyXG4gICAgICAgICAgICAgICAgQ2h1bmtZb3VySW4ueCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKENodW5rWW91ckluLnkgPT09IC0wKSB7XHJcbiAgICAgICAgICAgICAgICBDaHVua1lvdXJJbi55ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBsb2FkZWRDaHVua3NbYCR7Q2h1bmtZb3VySW4ueH06JHtDaHVua1lvdXJJbi55fWBdICE9PVxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgbG9hZGVkQ2h1bmtzW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSA9PT0gdHJ1ZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIC8vIEV4aXN0aW5nIHRlcnJhaW4sIGxlZnQgaGVhciBmb3IgYSBmdXR1cmUgQVBJXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBDaHVua1xyXG5cclxuICAgICAgICAgICAgICAgIGxvYWRlZENodW5rc1tgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNodW5rID0gZ2VuZXJhdGVUZXJyYWluQ2h1bmsoc2VlZCwgQ2h1bmtZb3VySW4sIDEyMCwgMC4xKTtcclxuICAgICAgICAgICAgICAgIGxldCB0cmVlcyA9IGF3YWl0IEdlbmVyYXRlVHJlZXMoNTAsIHNjZW5lLCBuZXcgVmVjdG9yMyhDaHVua1lvdXJJbi54LTI1MCwgMjUwLENodW5rWW91ckluLnktMjUwKSwgbmV3IFZlY3RvcjMoQ2h1bmtZb3VySW4ueCsyNTAsMjUwLENodW5rWW91ckluLnkrMjUwKSwgc2VlZCwgMTIwLCAwLjEsIENodW5rWW91ckluKVxyXG4gICAgICAgICAgICAgICAgY2h1bmtzSW5NZW1bYCR7Q2h1bmtZb3VySW4ueH06JHtDaHVua1lvdXJJbi55fWBdID0ge2NodW5rLCB0cmVlc307XHJcbiAgICAgICAgICAgICAgICBUZXJyYWluR3JvdXAuYWRkKGNodW5rKTtcclxuICAgICAgICAgICAgICAgIFRlcnJhaW5Hcm91cC5hZGQodHJlZXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjaHVua3lUaGluZyh5b3VyQ2h1bmspXHJcbiAgICAgICAgbGV0IGRlZmF1bHRYID0gKC0ocmVuZGVyRGlzdGFuY2UgKiA1MDApKSArIHlvdXJDaHVuay54XHJcbiAgICAgICAgbGV0IGxvb2tpbmdDaHVua1ggPSBkZWZhdWx0WFxyXG4gICAgICAgIGxldCBsb29raW5nQ2h1bmtZID0gKC0ocmVuZGVyRGlzdGFuY2UgKiA1MDApKSArIHlvdXJDaHVuay55XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxyZW5kZXJEaXN0YW5jZSAqIDI7aSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBrPTA7azxyZW5kZXJEaXN0YW5jZSAqIDI7aysrKXtcclxuICAgICAgICAgICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKGxvb2tpbmdDaHVua1gsIGxvb2tpbmdDaHVua1kpKVxyXG4gICAgICAgICAgICAgICAgbG9va2luZ0NodW5rWCArPSA1MDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb29raW5nQ2h1bmtYID0gZGVmYXVsdFhcclxuICAgICAgICAgICAgbG9va2luZ0NodW5rWSArPSA1MDBcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBVbmxvYWQgY2h1bmtzXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY2h1bmtzSW5NZW0pLmZvckVhY2goXHJcbiAgICAgICAgICAgIChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBbeCwgeV0gPSBrZXkuc3BsaXQoXCI6XCIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhNYXRoLmFicygoeW91ckNodW5rLnkpICsgKHJlbmRlckRpc3RhbmNlICogNTAwKSkpXHJcbiAgICAgICAgICAgICAgICBpZihNYXRoLmFicyh4KSA+IE1hdGguYWJzKCh5b3VyQ2h1bmsueCkgKyAocmVuZGVyRGlzdGFuY2UgKiA1MDApKSB8fCBNYXRoLmFicyh5KSA+IE1hdGguYWJzKCh5b3VyQ2h1bmsueSkgKyAocmVuZGVyRGlzdGFuY2UgKiA1MDApKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGNodW5rXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkQ2h1bmtzW2tleV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBUZXJyYWluR3JvdXAucmVtb3ZlKFt2YWx1ZS5jaHVuaywgdmFsdWUudHJlZXNdKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmVkICR7a2V5fSFgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCs1MDAsIHlvdXJDaHVuay55KSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCs1MDAsIHlvdXJDaHVuay55KzUwMCkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngsIHlvdXJDaHVuay55KzUwMCkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueSs1MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54LTUwMCwgeW91ckNodW5rLnkpKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54LTUwMCwgeW91ckNodW5rLnktNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCwgeW91ckNodW5rLnktNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCs1MDAsIHlvdXJDaHVuay55LTUwMCkpKi9cclxuXHJcbiAgICAgICAgLy8gTm93IHVubG9hZCBvbGQgY2h1bmtzXHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYobGFvZGluZyl7XHJcbiAgICAgICAgICAgIGxhb2RpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICBzdG9wTG9hZGluZygpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=