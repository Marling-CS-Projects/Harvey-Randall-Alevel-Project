/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/gameFundalmentals/TerrainManagement/terrainChunkriser.js":
/*!*****************************************************************************!*\
  !*** ./components/gameFundalmentals/TerrainManagement/terrainChunkriser.js ***!
  \*****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateTerrainAroundPlayer\": function() { return /* binding */ generateTerrainAroundPlayer; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Algorithms_MathUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Algorithms/MathUtils */ \"./components/Algorithms/MathUtils.js\");\n/* harmony import */ var _Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core-API/3dModelHandlers/GLBLoader */ \"./components/Core-API/3dModelHandlers/GLBLoader.js\");\n/* harmony import */ var _ProceduleTerrain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProceduleTerrain */ \"./components/gameFundalmentals/ProceduleTerrain.js\");\n/* harmony import */ var _staticAssets_treeBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../staticAssets/treeBuilder */ \"./components/gameFundalmentals/staticAssets/treeBuilder.js\");\n/* harmony import */ var _utils_GenerateBiomesMap_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/GenerateBiomesMap.ts */ \"./components/gameFundalmentals/TerrainManagement/utils/GenerateBiomesMap.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction generateTerrainAroundPlayer(seed, camera, scene) {\n  var loadedChunks = {};\n  var chunksInMem = {};\n  var laoding = true;\n  setInterval(function () {\n    var vector = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3();\n    camera.getWorldPosition(vector);\n    var yourChunk = new three__WEBPACK_IMPORTED_MODULE_5__.Vector2((0,_Algorithms_MathUtils__WEBPACK_IMPORTED_MODULE_0__.roundnum)(vector.x, 500), (0,_Algorithms_MathUtils__WEBPACK_IMPORTED_MODULE_0__.roundnum)(vector.z, 500));\n\n    var chunkyThing = function chunkyThing(ChunkYourIn) {\n      if (ChunkYourIn.x === -0) {\n        ChunkYourIn.x = 0;\n      }\n\n      if (ChunkYourIn.y === -0) {\n        ChunkYourIn.y = 0;\n      }\n\n      if (loadedChunks[\"\".concat(ChunkYourIn.x, \":\").concat(ChunkYourIn.y)] !== undefined && loadedChunks[\"\".concat(ChunkYourIn.x, \":\").concat(ChunkYourIn.y)] === true) {// Existing terrain, left hear for a future API\n      } else {\n        // Check Chunk\n        loadedChunks[\"\".concat(ChunkYourIn.x, \":\").concat(ChunkYourIn.y)] = true;\n        var chunk = (0,_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_2__.generateTerrainChunk)(seed, ChunkYourIn, 120, 0.1);\n        (0,_staticAssets_treeBuilder__WEBPACK_IMPORTED_MODULE_3__.GenerateTrees)(50, scene, new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(ChunkYourIn.x - 250, 250, ChunkYourIn.y - 250), new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(ChunkYourIn.x + 250, 250, ChunkYourIn.y + 250), seed, 120, 0.1, ChunkYourIn);\n        chunksInMem[\"\".concat(ChunkYourIn.x, \":\").concat(ChunkYourIn.y)] = chunk;\n        scene.add(chunk);\n      }\n    };\n\n    chunkyThing(yourChunk);\n    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x + 500, yourChunk.y));\n    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x + 500, yourChunk.y + 500));\n    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x, yourChunk.y + 500));\n    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x - 500, yourChunk.y + 500));\n    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x - 500, yourChunk.y));\n    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x - 500, yourChunk.y - 500));\n    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x, yourChunk.y - 500));\n    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_5__.Vector2(yourChunk.x + 500, yourChunk.y - 500));\n\n    if (laoding) {\n      laoding = false;\n      (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_1__.stopLoading)();\n    }\n  }, 1000);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC90ZXJyYWluQ2h1bmtyaXNlci5qcz9jMzI4Il0sIm5hbWVzIjpbImdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllciIsInNlZWQiLCJjYW1lcmEiLCJzY2VuZSIsImxvYWRlZENodW5rcyIsImNodW5rc0luTWVtIiwibGFvZGluZyIsInNldEludGVydmFsIiwidmVjdG9yIiwiVmVjdG9yMyIsImdldFdvcmxkUG9zaXRpb24iLCJ5b3VyQ2h1bmsiLCJWZWN0b3IyIiwicm91bmRudW0iLCJ4IiwieiIsImNodW5reVRoaW5nIiwiQ2h1bmtZb3VySW4iLCJ5IiwidW5kZWZpbmVkIiwiY2h1bmsiLCJnZW5lcmF0ZVRlcnJhaW5DaHVuayIsIkdlbmVyYXRlVHJlZXMiLCJhZGQiLCJzdG9wTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSwyQkFBVCxDQUFxQ0MsSUFBckMsRUFBMkNDLE1BQTNDLEVBQW1EQyxLQUFuRCxFQUEwRDtBQUM3RCxNQUFJQyxZQUFZLEdBQUcsRUFBbkI7QUFDQSxNQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUNBQyxhQUFXLENBQUMsWUFBTTtBQUNkLFFBQUlDLE1BQU0sR0FBRyxJQUFJQywwQ0FBSixFQUFiO0FBQ0FQLFVBQU0sQ0FBQ1EsZ0JBQVAsQ0FBd0JGLE1BQXhCO0FBQ0EsUUFBSUcsU0FBUyxHQUFHLElBQUlDLDBDQUFKLENBQ1pDLCtEQUFRLENBQUNMLE1BQU0sQ0FBQ00sQ0FBUixFQUFXLEdBQVgsQ0FESSxFQUVaRCwrREFBUSxDQUFDTCxNQUFNLENBQUNPLENBQVIsRUFBVyxHQUFYLENBRkksQ0FBaEI7O0FBS0EsUUFBSUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsV0FBRCxFQUFp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QUFXO0FBQ1BBLGFBQU8sR0FBRyxLQUFWO0FBQ0FrQixzRkFBVztBQUNkO0FBQ0osR0EvQ1UsRUErQ1IsSUEvQ1EsQ0FBWDtBQWdESCIsImZpbGUiOiIuL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvVGVycmFpbk1hbmFnZW1lbnQvdGVycmFpbkNodW5rcmlzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZWN0b3IyLCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyByb3VuZG51bSB9IGZyb20gXCIuLi8uLi9BbGdvcml0aG1zL01hdGhVdGlsc1wiO1xuaW1wb3J0IHsgc3RvcExvYWRpbmcgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL0dMQkxvYWRlclwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVUZXJyYWluQ2h1bmsgfSBmcm9tIFwiLi4vUHJvY2VkdWxlVGVycmFpblwiO1xuaW1wb3J0IHsgR2VuZXJhdGVUcmVlcyB9IGZyb20gXCIuLi9zdGF0aWNBc3NldHMvdHJlZUJ1aWxkZXJcIjtcbmltcG9ydCB7IGNoZWNrQmlvbWVMb2NhdGlvbiB9IGZyb20gXCIuL3V0aWxzL0dlbmVyYXRlQmlvbWVzTWFwLnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRlcnJhaW5Bcm91bmRQbGF5ZXIoc2VlZCwgY2FtZXJhLCBzY2VuZSkge1xuICAgIGxldCBsb2FkZWRDaHVua3MgPSB7fTtcbiAgICBsZXQgY2h1bmtzSW5NZW0gPSB7fTtcbiAgICBsZXQgbGFvZGluZyA9IHRydWVcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGxldCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpO1xuICAgICAgICBjYW1lcmEuZ2V0V29ybGRQb3NpdGlvbih2ZWN0b3IpO1xuICAgICAgICBsZXQgeW91ckNodW5rID0gbmV3IFZlY3RvcjIoXG4gICAgICAgICAgICByb3VuZG51bSh2ZWN0b3IueCwgNTAwKSxcbiAgICAgICAgICAgIHJvdW5kbnVtKHZlY3Rvci56LCA1MDApXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGNodW5reVRoaW5nID0gKENodW5rWW91ckluKSA9PiB7XG4gICAgICAgICAgICBpZiAoQ2h1bmtZb3VySW4ueCA9PT0gLTApIHtcbiAgICAgICAgICAgICAgICBDaHVua1lvdXJJbi54ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChDaHVua1lvdXJJbi55ID09PSAtMCkge1xuICAgICAgICAgICAgICAgIENodW5rWW91ckluLnkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGxvYWRlZENodW5rc1tgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gIT09XG4gICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIGxvYWRlZENodW5rc1tgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gPT09IHRydWVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIEV4aXN0aW5nIHRlcnJhaW4sIGxlZnQgaGVhciBmb3IgYSBmdXR1cmUgQVBJXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIENodW5rXG5cbiAgICAgICAgICAgICAgICBsb2FkZWRDaHVua3NbYCR7Q2h1bmtZb3VySW4ueH06JHtDaHVua1lvdXJJbi55fWBdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmsgPSBnZW5lcmF0ZVRlcnJhaW5DaHVuayhzZWVkLCBDaHVua1lvdXJJbiwgMTIwLCAwLjEpO1xuICAgICAgICAgICAgICAgIEdlbmVyYXRlVHJlZXMoNTAsIHNjZW5lLCBuZXcgVmVjdG9yMyhDaHVua1lvdXJJbi54LTI1MCwgMjUwLENodW5rWW91ckluLnktMjUwKSwgbmV3IFZlY3RvcjMoQ2h1bmtZb3VySW4ueCsyNTAsMjUwLENodW5rWW91ckluLnkrMjUwKSwgc2VlZCwgMTIwLCAwLjEsIENodW5rWW91ckluKVxuICAgICAgICAgICAgICAgIGNodW5rc0luTWVtW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSA9IGNodW5rO1xuICAgICAgICAgICAgICAgIHNjZW5lLmFkZChjaHVuayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY2h1bmt5VGhpbmcoeW91ckNodW5rKVxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCs1MDAsIHlvdXJDaHVuay55KSlcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngrNTAwLCB5b3VyQ2h1bmsueSs1MDApKVxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCwgeW91ckNodW5rLnkrNTAwKSlcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueSs1MDApKVxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueC01MDAsIHlvdXJDaHVuay55KSlcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueS01MDApKVxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCwgeW91ckNodW5rLnktNTAwKSlcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngrNTAwLCB5b3VyQ2h1bmsueS01MDApKVxuXG5cbiAgICAgICAgaWYobGFvZGluZyl7XG4gICAgICAgICAgICBsYW9kaW5nID0gZmFsc2VcbiAgICAgICAgICAgIHN0b3BMb2FkaW5nKClcbiAgICAgICAgfVxuICAgIH0sIDEwMDApO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/gameFundalmentals/TerrainManagement/terrainChunkriser.js\n");

/***/ })

});