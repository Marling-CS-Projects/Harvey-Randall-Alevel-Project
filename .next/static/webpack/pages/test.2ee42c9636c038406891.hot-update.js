self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/gameFundalmentals/ProceduleTerrain.js":
/*!**********************************************************!*\
  !*** ./components/gameFundalmentals/ProceduleTerrain.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReturnTerrainPointer": function() { return /* binding */ ReturnTerrainPointer; },
/* harmony export */   "generateTerrain": function() { return /* binding */ generateTerrain; },
/* harmony export */   "generateTerrainChunk": function() { return /* binding */ generateTerrainChunk; },
/* harmony export */   "getTerrainHeight": function() { return /* binding */ getTerrainHeight; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Algorithms/VectorUtils */ "./components/Algorithms/VectorUtils.js");
/* harmony import */ var _Core_API_gemotryManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core-API/gemotryManager */ "./components/Core-API/gemotryManager.js");
/* harmony import */ var _Core_API_PerlinNoise_PerlingNoise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core-API/PerlinNoise/PerlingNoise */ "./components/Core-API/PerlinNoise/PerlingNoise.js");
/* module decorator */ module = __webpack_require__.hmd(module);
// Written By Harvey Randall \\





var SimplexNoise = __webpack_require__(/*! simplex-noise */ "./node_modules/simplex-noise/simplex-noise.js");

var currentTerrain;
function ReturnTerrainPointer() {
  return currentTerrain;
}
/*eslint complexity: ["error", 20]*/

_c = ReturnTerrainPointer;
function generateTerrain(seed, SceneToGet) {
  //------------[MAIN FUNCTION VARIABLES]------------\\
  var simplex = new SimplexNoise(seed);
  var geometry = new three__WEBPACK_IMPORTED_MODULE_3__.PlaneBufferGeometry(500, 500, 100, 100);
  var colours = [];
  var positionAttribute = geometry.getAttribute("position"); //------------[Edit the Geomtry Accordingly]------------\\

  for (var i = 0, l = geometry.attributes.position.count; i < l; i++) {
    // Get Data position
    var vertex = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();
    vertex.fromBufferAttribute(positionAttribute, i); // Check Height from Perlin Noise Generator

    var height = simplex.noise2D(vertex.x / 128, vertex.y / 128) * 30; // Set the height accordingly

    geometry.attributes.position.array[i * 3 + 2] = height; // Update Vertice colours accordinly

    if (height > 23) {
      colours.push(1, 1, 1);
    } else if (height > 5) {
      colours.push(0.56, 0.54, 0.48);
    } else if (height < 2) {
      colours.push(0.501, 0.772, 0.87);
    } else {
      colours.push(0.56, 0.68, 0.166);
    }
  } //------------[Create Material]------------\\


  var material = new three__WEBPACK_IMPORTED_MODULE_3__.MeshPhongMaterial({
    vertexColors: colours,
    reflectivity: 0,
    roughness: 1,
    flatShading: true
  }); //------------[Create Mesh]------------\\

  var plane2 = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, material);
  plane2.receiveShadow = true;
  plane2.castShadow = true;
  plane2.position.y = -3;
  plane2.rotateX(Math.PI / 2 + Math.PI); //------------[Edit colour attribute]------------\\

  geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_3__.BufferAttribute(new Float32Array(colours), 3)); //geometry.computeVertexNormals();
  //------------[Add to Base Scene]------------\\

  currentTerrain = plane2;
  plane2.name = "MAIN_TERRAIN";
  SceneToGet.add(plane2);
}
function generateTerrainChunk(seed, Position, gain, divisor) {
  //------------[MAIN FUNCTION VARIABLES]------------\\
  //const simplex = new SimplexNoise(seed);
  var geometry = new three__WEBPACK_IMPORTED_MODULE_3__.PlaneBufferGeometry(500, 500, 30, 30);
  var colours = [];
  var fbm = new _Core_API_PerlinNoise_PerlingNoise__WEBPACK_IMPORTED_MODULE_2__.FBM({
    seed: seed,
    scale: 0.007,
    octaves: 6,
    persistance: 0.5,
    lacunarity: 2,
    redistribution: 2,
    height: 40
  });
  var simplex = new _Core_API_PerlinNoise_PerlingNoise__WEBPACK_IMPORTED_MODULE_2__.Perlin(seed);
  var positionAttribute = geometry.getAttribute("position"); //------------[Edit the Geomtry Accordingly]------------\\

  for (var i = 0, l = geometry.attributes.position.count; i < l; i++) {
    // Get Data position
    var vertex = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();
    vertex.fromBufferAttribute(positionAttribute, i); // Check Height from Perlin Noise Generator

    var height = fbm.get2(new three__WEBPACK_IMPORTED_MODULE_3__.Vector2((vertex.x + Position.x) * divisor, (vertex.y - Position.y) * divisor)) * gain * 4; // Set the height accordingly

    geometry.attributes.position.array[i * 3 + 2] = height; // Update Vertice colours accordinly

    if (height > 100) {
      colours.push(1, 1, 1);
    } else if (height > 50) {
      colours.push(0.56, 0.54, 0.48);
    } else if (height < 2) {
      var heightSecondary = simplex.get2(new three__WEBPACK_IMPORTED_MODULE_3__.Vector2((vertex.x + Position.x) * divisor, (vertex.y - Position.y) * divisor)) * 0.75;
      geometry.attributes.position.array[i * 3 + 2] = heightSecondary;
      colours.push(0, (0,_Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromInterval)(400, 500) / 1000, (0,_Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromInterval)(700, 800) / 1000);
    } else {
      colours.push(0.56, 0.68, 0.166);
    }
  } //------------[Create Material]------------\\


  var material = new three__WEBPACK_IMPORTED_MODULE_3__.MeshPhongMaterial({
    vertexColors: colours,
    reflectivity: 0,
    flatShading: true,
    blending: false
  }); //------------[Create Mesh]------------\\

  var plane2 = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, material);
  plane2.receiveShadow = true;
  plane2.castShadow = true;
  plane2.position.set(Position.x, -3, Position.y);
  plane2.rotateX(Math.PI / 2 + Math.PI); //------------[Edit colour attribute]------------\\

  geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_3__.BufferAttribute(new Float32Array(colours), 3)); //------------[Add to Base Scene]------------\\

  currentTerrain = plane2;
  plane2.name = "Terrain_Chunk_".concat(Position.x, ":").concat(Position.y);
  return plane2;
}
function getTerrainHeight(position, seed, gain, divisor, scene) {
  var fbm = new _Core_API_PerlinNoise_PerlingNoise__WEBPACK_IMPORTED_MODULE_2__.FBM({
    seed: seed,
    scale: 0.007,
    octaves: 6,
    persistance: 0.5,
    lacunarity: 2,
    redistribution: 2,
    height: 40
  });
  console.table(position);
  var height = fbm.get2(new three__WEBPACK_IMPORTED_MODULE_3__.Vector2(position.x * divisor, position.z * divisor)) * gain * 4;
  var cube = (0,_Core_API_gemotryManager__WEBPACK_IMPORTED_MODULE_1__.debugCube)();
  scene.add(cube);
  cube.position.set(position.x, height, position.z);
  return height - 3;
}

var _c;

$RefreshReg$(_c, "ReturnTerrainPointer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9Qcm9jZWR1bGVUZXJyYWluLmpzIl0sIm5hbWVzIjpbIlNpbXBsZXhOb2lzZSIsInJlcXVpcmUiLCJjdXJyZW50VGVycmFpbiIsIlJldHVyblRlcnJhaW5Qb2ludGVyIiwiZ2VuZXJhdGVUZXJyYWluIiwic2VlZCIsIlNjZW5lVG9HZXQiLCJzaW1wbGV4IiwiZ2VvbWV0cnkiLCJQbGFuZUJ1ZmZlckdlb21ldHJ5IiwiY29sb3VycyIsInBvc2l0aW9uQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiaSIsImwiLCJhdHRyaWJ1dGVzIiwicG9zaXRpb24iLCJjb3VudCIsInZlcnRleCIsIlZlY3RvcjMiLCJmcm9tQnVmZmVyQXR0cmlidXRlIiwiaGVpZ2h0Iiwibm9pc2UyRCIsIngiLCJ5IiwiYXJyYXkiLCJwdXNoIiwibWF0ZXJpYWwiLCJNZXNoUGhvbmdNYXRlcmlhbCIsInZlcnRleENvbG9ycyIsInJlZmxlY3Rpdml0eSIsInJvdWdobmVzcyIsImZsYXRTaGFkaW5nIiwicGxhbmUyIiwiTWVzaCIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93Iiwicm90YXRlWCIsIk1hdGgiLCJQSSIsInNldEF0dHJpYnV0ZSIsIkJ1ZmZlckF0dHJpYnV0ZSIsIkZsb2F0MzJBcnJheSIsIm5hbWUiLCJhZGQiLCJnZW5lcmF0ZVRlcnJhaW5DaHVuayIsIlBvc2l0aW9uIiwiZ2FpbiIsImRpdmlzb3IiLCJmYm0iLCJGQk0iLCJzY2FsZSIsIm9jdGF2ZXMiLCJwZXJzaXN0YW5jZSIsImxhY3VuYXJpdHkiLCJyZWRpc3RyaWJ1dGlvbiIsIlBlcmxpbiIsImdldDIiLCJWZWN0b3IyIiwiaGVpZ2h0U2Vjb25kYXJ5IiwicmFuZG9tSW50RnJvbUludGVydmFsIiwiYmxlbmRpbmciLCJzZXQiLCJnZXRUZXJyYWluSGVpZ2h0Iiwic2NlbmUiLCJjb25zb2xlIiwidGFibGUiLCJ6IiwiY3ViZSIsImRl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dXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgTWVzaCxcclxuICAgIE1lc2hQaG9uZ01hdGVyaWFsLFxyXG4gICAgUGxhbmVCdWZmZXJHZW9tZXRyeSxcclxuICAgIFZlY3RvcjIsXHJcbiAgICBWZWN0b3IzLFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyByYW5kb21JbnRGcm9tSW50ZXJ2YWwgfSBmcm9tIFwiLi4vQWxnb3JpdGhtcy9WZWN0b3JVdGlsc1wiO1xyXG5pbXBvcnQgeyBkZWJ1Z0N1YmUgfSBmcm9tIFwiLi4vQ29yZS1BUEkvZ2Vtb3RyeU1hbmFnZXJcIjtcclxuXHJcbmltcG9ydCB7IFBlcmxpbiwgRkJNIH0gZnJvbSBcIi4uL0NvcmUtQVBJL1Blcmxpbk5vaXNlL1BlcmxpbmdOb2lzZVwiO1xyXG52YXIgU2ltcGxleE5vaXNlID0gcmVxdWlyZShcInNpbXBsZXgtbm9pc2VcIik7XHJcblxyXG5sZXQgY3VycmVudFRlcnJhaW47XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmV0dXJuVGVycmFpblBvaW50ZXIoKSB7XHJcbiAgICByZXR1cm4gY3VycmVudFRlcnJhaW47XHJcbn1cclxuXHJcbi8qZXNsaW50IGNvbXBsZXhpdHk6IFtcImVycm9yXCIsIDIwXSovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRlcnJhaW4oc2VlZCwgU2NlbmVUb0dldCkge1xyXG4gICAgLy8tLS0tLS0tLS0tLS1bTUFJTiBGVU5DVElPTiBWQVJJQUJMRVNdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgY29uc3Qgc2ltcGxleCA9IG5ldyBTaW1wbGV4Tm9pc2Uoc2VlZCk7XHJcbiAgICBsZXQgZ2VvbWV0cnkgPSBuZXcgUGxhbmVCdWZmZXJHZW9tZXRyeSg1MDAsIDUwMCwgMTAwLCAxMDApO1xyXG4gICAgbGV0IGNvbG91cnMgPSBbXTtcclxuXHJcbiAgICBjb25zdCBwb3NpdGlvbkF0dHJpYnV0ZSA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0VkaXQgdGhlIEdlb210cnkgQWNjb3JkaW5nbHldLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmNvdW50OyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgLy8gR2V0IERhdGEgcG9zaXRpb25cclxuICAgICAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIHZlcnRleC5mcm9tQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uQXR0cmlidXRlLCBpKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgSGVpZ2h0IGZyb20gUGVybGluIE5vaXNlIEdlbmVyYXRvclxyXG4gICAgICAgIGxldCBoZWlnaHQgPSBzaW1wbGV4Lm5vaXNlMkQodmVydGV4LnggLyAxMjgsIHZlcnRleC55IC8gMTI4KSAqIDMwO1xyXG4gICAgICAgIC8vIFNldCB0aGUgaGVpZ2h0IGFjY29yZGluZ2x5XHJcbiAgICAgICAgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheVtpICogMyArIDJdID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgVmVydGljZSBjb2xvdXJzIGFjY29yZGlubHlcclxuICAgICAgICBpZiAoaGVpZ2h0ID4gMjMpIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDEsIDEsIDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0ID4gNSkge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMC41NiwgMC41NCwgMC40OCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPCAyKSB7XHJcbiAgICAgICAgICAgIGNvbG91cnMucHVzaCgwLjUwMSwgMC43NzIsIDAuODcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbG91cnMucHVzaCgwLjU2LCAwLjY4LCAwLjE2Nik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0NyZWF0ZSBNYXRlcmlhbF0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICB2YXIgbWF0ZXJpYWwgPSBuZXcgTWVzaFBob25nTWF0ZXJpYWwoe1xyXG4gICAgICAgIHZlcnRleENvbG9yczogY29sb3VycyxcclxuICAgICAgICByZWZsZWN0aXZpdHk6IDAsXHJcbiAgICAgICAgcm91Z2huZXNzOiAxLFxyXG4gICAgICAgIGZsYXRTaGFkaW5nOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bQ3JlYXRlIE1lc2hdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgdmFyIHBsYW5lMiA9IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICBwbGFuZTIucmVjZWl2ZVNoYWRvdyA9IHRydWU7XHJcbiAgICBwbGFuZTIuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICBwbGFuZTIucG9zaXRpb24ueSA9IC0zO1xyXG4gICAgcGxhbmUyLnJvdGF0ZVgoTWF0aC5QSSAvIDIgKyBNYXRoLlBJKTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtFZGl0IGNvbG91ciBhdHRyaWJ1dGVdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgIFwiY29sb3JcIixcclxuICAgICAgICBuZXcgQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sb3VycyksIDMpXHJcbiAgICApO1xyXG4gICAgLy9nZW9tZXRyeS5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0FkZCB0byBCYXNlIFNjZW5lXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIGN1cnJlbnRUZXJyYWluID0gcGxhbmUyO1xyXG4gICAgcGxhbmUyLm5hbWUgPSBcIk1BSU5fVEVSUkFJTlwiO1xyXG4gICAgU2NlbmVUb0dldC5hZGQocGxhbmUyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGVycmFpbkNodW5rKHNlZWQsIFBvc2l0aW9uLCBnYWluLCBkaXZpc29yKSB7XHJcbiAgICAvLy0tLS0tLS0tLS0tLVtNQUlOIEZVTkNUSU9OIFZBUklBQkxFU10tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICAvL2NvbnN0IHNpbXBsZXggPSBuZXcgU2ltcGxleE5vaXNlKHNlZWQpO1xyXG4gICAgbGV0IGdlb21ldHJ5ID0gbmV3IFBsYW5lQnVmZmVyR2VvbWV0cnkoNTAwLCA1MDAsIDMwLCAzMCk7XHJcbiAgICBsZXQgY29sb3VycyA9IFtdO1xyXG4gICAgY29uc3QgZmJtID0gbmV3IEZCTSh7XHJcbiAgICAgICAgc2VlZDogc2VlZCxcclxuICAgICAgICBzY2FsZTogMC4wMDcsXHJcbiAgICAgICAgb2N0YXZlczogNixcclxuICAgICAgICBwZXJzaXN0YW5jZTogMC41LFxyXG4gICAgICAgIGxhY3VuYXJpdHk6IDIsXHJcbiAgICAgICAgcmVkaXN0cmlidXRpb246IDIsXHJcbiAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNpbXBsZXggPSBuZXcgUGVybGluKHNlZWQpXHJcblxyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uQXR0cmlidXRlID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIik7XHJcbiAgICAvLy0tLS0tLS0tLS0tLVtFZGl0IHRoZSBHZW9tdHJ5IEFjY29yZGluZ2x5XS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5jb3VudDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIC8vIEdldCBEYXRhIHBvc2l0aW9uXHJcbiAgICAgICAgY29uc3QgdmVydGV4ID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICB2ZXJ0ZXguZnJvbUJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbkF0dHJpYnV0ZSwgaSk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIEhlaWdodCBmcm9tIFBlcmxpbiBOb2lzZSBHZW5lcmF0b3JcclxuICAgICAgICBcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gZmJtLmdldDIobmV3IFZlY3RvcjIoKHZlcnRleC54ICsgKFBvc2l0aW9uLngpKSAqIGRpdmlzb3IsICh2ZXJ0ZXgueSAtIChQb3NpdGlvbi55KSkgKiBkaXZpc29yKSkgKiBnYWluICogNFxyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIGhlaWdodCBhY2NvcmRpbmdseVxyXG4gICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlbaSAqIDMgKyAyXSA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIFZlcnRpY2UgY29sb3VycyBhY2NvcmRpbmx5XHJcbiAgICAgICAgaWYgKGhlaWdodCA+IDEwMCkge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMSwgMSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPiA1MCkge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMC41NiwgMC41NCwgMC40OCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPCAyKSB7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHRTZWNvbmRhcnkgPSBzaW1wbGV4LmdldDIobmV3IFZlY3RvcjIoKHZlcnRleC54ICsgKFBvc2l0aW9uLngpKSAqIGRpdmlzb3IsICh2ZXJ0ZXgueSAtIChQb3NpdGlvbi55KSkgKiBkaXZpc29yKSkgKiAwLjc1XHJcbiAgICAgICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlbaSAqIDMgKyAyXSA9IGhlaWdodFNlY29uZGFyeTtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAsIHJhbmRvbUludEZyb21JbnRlcnZhbCg0MDAsIDUwMCkgLyAxMDAwLCByYW5kb21JbnRGcm9tSW50ZXJ2YWwoNzAwLCA4MDApIC8gMTAwMClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMC41NiwgMC42OCwgMC4xNjYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vLS0tLS0tLS0tLS0tW0NyZWF0ZSBNYXRlcmlhbF0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICB2YXIgbWF0ZXJpYWwgPSBuZXcgTWVzaFBob25nTWF0ZXJpYWwoe1xyXG4gICAgICAgIHZlcnRleENvbG9yczogY29sb3VycyxcclxuICAgICAgICByZWZsZWN0aXZpdHk6IDAsXHJcbiAgICAgICAgZmxhdFNoYWRpbmc6IHRydWUsXHJcbiAgICAgICAgYmxlbmRpbmc6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtDcmVhdGUgTWVzaF0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICB2YXIgcGxhbmUyID0gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgIHBsYW5lMi5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgIHBsYW5lMi5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgIHBsYW5lMi5wb3NpdGlvbi5zZXQoUG9zaXRpb24ueCwgLTMsIFBvc2l0aW9uLnkpO1xyXG4gICAgcGxhbmUyLnJvdGF0ZVgoTWF0aC5QSSAvIDIgKyBNYXRoLlBJKTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtFZGl0IGNvbG91ciBhdHRyaWJ1dGVdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgIFwiY29sb3JcIixcclxuICAgICAgICBuZXcgQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sb3VycyksIDMpXHJcbiAgICApO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0FkZCB0byBCYXNlIFNjZW5lXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIGN1cnJlbnRUZXJyYWluID0gcGxhbmUyO1xyXG4gICAgcGxhbmUyLm5hbWUgPSBgVGVycmFpbl9DaHVua18ke1Bvc2l0aW9uLnh9OiR7UG9zaXRpb24ueX1gO1xyXG4gICAgcmV0dXJuIHBsYW5lMjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXJyYWluSGVpZ2h0KHBvc2l0aW9uLCBzZWVkLCBnYWluLCBkaXZpc29yLCBzY2VuZSkge1xyXG4gICAgY29uc3QgZmJtID0gbmV3IEZCTSh7XHJcbiAgICAgICAgc2VlZDogc2VlZCxcclxuICAgICAgICBzY2FsZTogMC4wMDcsXHJcbiAgICAgICAgb2N0YXZlczogNixcclxuICAgICAgICBwZXJzaXN0YW5jZTogMC41LFxyXG4gICAgICAgIGxhY3VuYXJpdHk6IDIsXHJcbiAgICAgICAgcmVkaXN0cmlidXRpb246IDIsXHJcbiAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS50YWJsZShwb3NpdGlvbilcclxuICAgIGxldCBoZWlnaHQgPSBmYm0uZ2V0MihuZXcgVmVjdG9yMihwb3NpdGlvbi54ICogZGl2aXNvciwgcG9zaXRpb24ueiAqIGRpdmlzb3IpKSAqIGdhaW4gKiA0XHJcbiAgICBsZXQgY3ViZSA9IGRlYnVnQ3ViZSgpXHJcbiAgICBzY2VuZS5hZGQoY3ViZSlcclxuICAgIGN1YmUucG9zaXRpb24uc2V0KHBvc2l0aW9uLnggLCBoZWlnaHQsIHBvc2l0aW9uLnopXHJcbiAgICByZXR1cm4gaGVpZ2h0IC0gM1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==