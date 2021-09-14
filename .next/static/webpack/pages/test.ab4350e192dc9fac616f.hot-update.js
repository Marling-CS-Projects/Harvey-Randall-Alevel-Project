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
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Algorithms_MathUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Algorithms/MathUtils */ "./components/Algorithms/MathUtils.js");
/* harmony import */ var _Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Core-API/3dModelHandlers/GLBLoader */ "./components/Core-API/3dModelHandlers/GLBLoader.js");
/* harmony import */ var _ProceduleTerrain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ProceduleTerrain */ "./components/gameFundalmentals/ProceduleTerrain.js");
/* harmony import */ var _staticAssets_treeBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../staticAssets/treeBuilder */ "./components/gameFundalmentals/staticAssets/treeBuilder.js");
/* harmony import */ var _utils_GenerateBiomesMap_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/GenerateBiomesMap.ts */ "./components/gameFundalmentals/TerrainManagement/utils/GenerateBiomesMap.ts");
/* module decorator */ module = __webpack_require__.hmd(module);








var renderDistance = 15;
function generateTerrainAroundPlayer(seed, camera, scene) {
  var loadedChunks = {};
  var chunksInMem = {};
  var laoding = true;
  var TerrainGroup = new three__WEBPACK_IMPORTED_MODULE_7__.Group();
  scene.add(TerrainGroup);
  setInterval(function () {
    var vector = new three__WEBPACK_IMPORTED_MODULE_7__.Vector3();
    camera.getWorldPosition(vector);
    var yourChunk = new three__WEBPACK_IMPORTED_MODULE_7__.Vector2((0,_Algorithms_MathUtils__WEBPACK_IMPORTED_MODULE_2__.roundnum)(vector.x, 500), (0,_Algorithms_MathUtils__WEBPACK_IMPORTED_MODULE_2__.roundnum)(vector.z, 500));

    var chunkyThing = /*#__PURE__*/function () {
      var _ref = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ChunkYourIn) {
        var chunk, trees;
        return H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
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
                chunk = (0,_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_4__.generateTerrainChunk)(seed, ChunkYourIn, 120, 0.1);
                _context.next = 9;
                return (0,_staticAssets_treeBuilder__WEBPACK_IMPORTED_MODULE_5__.GenerateTrees)(50, scene, new three__WEBPACK_IMPORTED_MODULE_7__.Vector3(ChunkYourIn.x - 250, 250, ChunkYourIn.y - 250), new three__WEBPACK_IMPORTED_MODULE_7__.Vector3(ChunkYourIn.x + 250, 250, ChunkYourIn.y + 250), seed, 120, 0.1, ChunkYourIn);

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
        chunkyThing(new three__WEBPACK_IMPORTED_MODULE_7__.Vector2(lookingChunkX, lookingChunkY));
        lookingChunkX += 500;
      }

      lookingChunkX = defaultX;
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
      (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_3__.stopLoading)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC90ZXJyYWluQ2h1bmtyaXNlci5qcyJdLCJuYW1lcyI6WyJyZW5kZXJEaXN0YW5jZSIsImdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllciIsInNlZWQiLCJjYW1lcmEiLCJzY2VuZSIsImxvYWRlZENodW5rcyIsImNodW5rc0luTWVtIiwibGFvZGluZyIsIlRlcnJhaW5Hcm91cCIsIkdyb3VwIiwiYWRkIiwic2V0SW50ZXJ2YWwiLCJ2ZWN0b3IiLCJWZWN0b3IzIiwiZ2V0V29ybGRQb3NpdGlvbiIsInlvdXJDaHVuayIsIlZlY3RvcjIiLCJyb3VuZG51bSIsIngiLCJ6IiwiY2h1bmt5VGhpbmciLCJDaHVua1lvdXJJbiIsInkiLCJ1bmRlZmluZWQiLCJjaHVuayIsImdlbmVyYXRlVGVycmFpbkNodW5rIiwiR2VuZXJhdGVUcmVlcyIsInRyZWVzIiwiZGVmYXVsdFgiLCJsb29raW5nQ2h1bmtYIiwibG9va2luZ0NodW5rWSIsImkiLCJrIiwic3RvcExvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxjQUFjLEdBQUcsRUFBckI7QUFFTyxTQUFTQywyQkFBVCxDQUFxQ0MsSUFBckMsRUFBMkNDLE1BQTNDLEVBQW1EQyxLQUFuRCxFQUEwRDtBQUM3RCxNQUFJQyxZQUFZLEdBQUcsRUFBbkI7QUFDQSxNQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUVBLE1BQUlDLFlBQVksR0FBRyxJQUFJQyx3Q0FBSixFQUFuQjtBQUVBTCxPQUFLLENBQUNNLEdBQU4sQ0FBVUYsWUFBVjtBQUNBRyxhQUFXLENBQUMsWUFBTTtBQUNkLFFBQUlDLE1BQU0sR0FBRyxJQUFJQywwQ0FBSixFQUFiO0FBQ0FWLFVBQU0sQ0FB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LEVBQTJCQyxhQUEzQixDQUFELENBQVg7QUFDQUQscUJBQWEsSUFBSSxHQUFqQjtBQUNIOztBQUNEQSxtQkFBYSxHQUFHRCxRQUFoQjtBQUNBRSxtQkFBYSxJQUFJLEdBQWpCO0FBQ0g7QUFDRDtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFUTs7O0FBSUEsUUFBR3ZCLE9BQUgsRUFBVztBQUNQQSxhQUFPLEdBQUcsS0FBVjtBQUNBMEIsc0ZBQVc7QUFDZDtBQUNKLEdBL0RVLEVBK0RSLElBL0RRLENBQVg7QUFnRUgiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC5hYjQzNTBlMTkyZGM5ZmFjNjE2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JvdXAsIFZlY3RvcjIsIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgcm91bmRudW0gfSBmcm9tIFwiLi4vLi4vQWxnb3JpdGhtcy9NYXRoVXRpbHNcIjtcclxuaW1wb3J0IHsgc3RvcExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL0dMQkxvYWRlclwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVRlcnJhaW5DaHVuayB9IGZyb20gXCIuLi9Qcm9jZWR1bGVUZXJyYWluXCI7XHJcbmltcG9ydCB7IEdlbmVyYXRlVHJlZXMgfSBmcm9tIFwiLi4vc3RhdGljQXNzZXRzL3RyZWVCdWlsZGVyXCI7XHJcbmltcG9ydCB7IGNoZWNrQmlvbWVMb2NhdGlvbiB9IGZyb20gXCIuL3V0aWxzL0dlbmVyYXRlQmlvbWVzTWFwLnRzXCI7XHJcblxyXG5sZXQgcmVuZGVyRGlzdGFuY2UgPSAxNTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRlcnJhaW5Bcm91bmRQbGF5ZXIoc2VlZCwgY2FtZXJhLCBzY2VuZSkge1xyXG4gICAgbGV0IGxvYWRlZENodW5rcyA9IHt9O1xyXG4gICAgbGV0IGNodW5rc0luTWVtID0ge307XHJcbiAgICBsZXQgbGFvZGluZyA9IHRydWVcclxuXHJcbiAgICBsZXQgVGVycmFpbkdyb3VwID0gbmV3IEdyb3VwKClcclxuXHJcbiAgICBzY2VuZS5hZGQoVGVycmFpbkdyb3VwKVxyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGxldCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIGNhbWVyYS5nZXRXb3JsZFBvc2l0aW9uKHZlY3Rvcik7XHJcbiAgICAgICAgbGV0IHlvdXJDaHVuayA9IG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICByb3VuZG51bSh2ZWN0b3IueCwgNTAwKSxcclxuICAgICAgICAgICAgcm91bmRudW0odmVjdG9yLnosIDUwMClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgY2h1bmt5VGhpbmcgPSBhc3luYyAoQ2h1bmtZb3VySW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKENodW5rWW91ckluLnggPT09IC0wKSB7XHJcbiAgICAgICAgICAgICAgICBDaHVua1lvdXJJbi54ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoQ2h1bmtZb3VySW4ueSA9PT0gLTApIHtcclxuICAgICAgICAgICAgICAgIENodW5rWW91ckluLnkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGxvYWRlZENodW5rc1tgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gIT09XHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICBsb2FkZWRDaHVua3NbYCR7Q2h1bmtZb3VySW4ueH06JHtDaHVua1lvdXJJbi55fWBdID09PSB0cnVlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgLy8gRXhpc3RpbmcgdGVycmFpbiwgbGVmdCBoZWFyIGZvciBhIGZ1dHVyZSBBUElcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIENodW5rXHJcblxyXG4gICAgICAgICAgICAgICAgbG9hZGVkQ2h1bmtzW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmsgPSBnZW5lcmF0ZVRlcnJhaW5DaHVuayhzZWVkLCBDaHVua1lvdXJJbiwgMTIwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRyZWVzID0gYXdhaXQgR2VuZXJhdGVUcmVlcyg1MCwgc2NlbmUsIG5ldyBWZWN0b3IzKENodW5rWW91ckluLngtMjUwLCAyNTAsQ2h1bmtZb3VySW4ueS0yNTApLCBuZXcgVmVjdG9yMyhDaHVua1lvdXJJbi54KzI1MCwyNTAsQ2h1bmtZb3VySW4ueSsyNTApLCBzZWVkLCAxMjAsIDAuMSwgQ2h1bmtZb3VySW4pXHJcbiAgICAgICAgICAgICAgICBjaHVua3NJbk1lbVtgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gPSB7Y2h1bmssIHRyZWVzfTtcclxuICAgICAgICAgICAgICAgIFRlcnJhaW5Hcm91cC5hZGQoY2h1bmspO1xyXG4gICAgICAgICAgICAgICAgVGVycmFpbkdyb3VwLmFkZCh0cmVlcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNodW5reVRoaW5nKHlvdXJDaHVuaylcclxuICAgICAgICBsZXQgZGVmYXVsdFggPSAoLShyZW5kZXJEaXN0YW5jZSAqIDUwMCkpICsgeW91ckNodW5rLnhcclxuICAgICAgICBsZXQgbG9va2luZ0NodW5rWCA9IGRlZmF1bHRYXHJcbiAgICAgICAgbGV0IGxvb2tpbmdDaHVua1kgPSAoLShyZW5kZXJEaXN0YW5jZSAqIDUwMCkpICsgeW91ckNodW5rLnlcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHJlbmRlckRpc3RhbmNlICogMjtpKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGs9MDtrPHJlbmRlckRpc3RhbmNlICogMjtrKyspe1xyXG4gICAgICAgICAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIobG9va2luZ0NodW5rWCwgbG9va2luZ0NodW5rWSkpXHJcbiAgICAgICAgICAgICAgICBsb29raW5nQ2h1bmtYICs9IDUwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvb2tpbmdDaHVua1ggPSBkZWZhdWx0WFxyXG4gICAgICAgICAgICBsb29raW5nQ2h1bmtZICs9IDUwMFxyXG4gICAgICAgIH1cclxuICAgICAgICAvKlxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnkpKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnkrNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCwgeW91ckNodW5rLnkrNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueC01MDAsIHlvdXJDaHVuay55KzUwMCkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueSkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueS01MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54LCB5b3VyQ2h1bmsueS01MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnktNTAwKSkqL1xyXG5cclxuICAgICAgICAvLyBOb3cgdW5sb2FkIG9sZCBjaHVua3NcclxuXHJcblxyXG5cclxuICAgICAgICBpZihsYW9kaW5nKXtcclxuICAgICAgICAgICAgbGFvZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHN0b3BMb2FkaW5nKClcclxuICAgICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==