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

    var height = fbm.get2(new three__WEBPACK_IMPORTED_MODULE_3__.Vector2((vertex.x + Position.x) * divisor, (vertex.y - Position.y) * divisor)) * gain * 4;
    console.log("height", fbm.get2(new three__WEBPACK_IMPORTED_MODULE_3__.Vector2(57.900000000000006, -49.6)) * gain * 4);
    console.log("Terrain", new three__WEBPACK_IMPORTED_MODULE_3__.Vector2((vertex.x + Position.x) * divisor, (vertex.y - Position.y) * divisor), height); // Set the height accordingly

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
  }); //console.table(position)

  var height = fbm.get2(new three__WEBPACK_IMPORTED_MODULE_3__.Vector2(position.x * divisor, position.z * divisor)) * gain * 4;
  console.log("tree", new three__WEBPACK_IMPORTED_MODULE_3__.Vector2(position.x * divisor, position.z * divisor), height);
  var cube = (0,_Core_API_gemotryManager__WEBPACK_IMPORTED_MODULE_1__.debugCube)();
  scene.add(cube);
  cube.position.set(position.x, height, position.z);
  cube.material.color = new three__WEBPACK_IMPORTED_MODULE_3__.Color(height * 2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9Qcm9jZWR1bGVUZXJyYWluLmpzIl0sIm5hbWVzIjpbIlNpbXBsZXhOb2lzZSIsInJlcXVpcmUiLCJjdXJyZW50VGVycmFpbiIsIlJldHVyblRlcnJhaW5Qb2ludGVyIiwiZ2VuZXJhdGVUZXJyYWluIiwic2VlZCIsIlNjZW5lVG9HZXQiLCJzaW1wbGV4IiwiZ2VvbWV0cnkiLCJQbGFuZUJ1ZmZlckdlb21ldHJ5IiwiY29sb3VycyIsInBvc2l0aW9uQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiaSIsImwiLCJhdHRyaWJ1dGVzIiwicG9zaXRpb24iLCJjb3VudCIsInZlcnRleCIsIlZlY3RvcjMiLCJmcm9tQnVmZmVyQXR0cmlidXRlIiwiaGVpZ2h0Iiwibm9pc2UyRCIsIngiLCJ5IiwiYXJyYXkiLCJwdXNoIiwibWF0ZXJpYWwiLCJNZXNoUGhvbmdNYXRlcmlhbCIsInZlcnRleENvbG9ycyIsInJlZmxlY3Rpdml0eSIsInJvdWdobmVzcyIsImZsYXRTaGFkaW5nIiwicGxhbmUyIiwiTWVzaCIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93Iiwicm90YXRlWCIsIk1hdGgiLCJQSSIsInNldEF0dHJpYnV0ZSIsIkJ1ZmZlckF0dHJpYnV0ZSIsIkZsb2F0MzJBcnJheSIsIm5hbWUiLCJhZGQiLCJnZW5lcmF0ZVRlcnJhaW5DaHVuayIsIlBvc2l0aW9uIiwiZ2FpbiIsImRpdmlzb3IiLCJmYm0iLCJGQk0iLCJzY2FsZSIsIm9jdGF2ZXMiLCJwZXJzaXN0YW5jZSIsImxhY3VuYXJpdHkiLCJyZWRpc3RyaWJ1dGlvbiIsIlBlcmxpbiIsImdldDIiLCJWZWN0b3IyIiwiY29uc29sZSIsImxvZyIsImhlaWdodFNlY29uZGFyeSIsInJhbmRvbUludEZyb21JbnRlcnZhbCIsImJsZW5kaW5nIiwic2V0IiwiZ2V0VGVycmFpbkhlaWdodCIsInNjZW5lIiwieiIsImN1YmUiLCJkZWJ1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QWtDaEMsUUFBUSxDQUFDbUQsQ0FBVCxHQUFhbkIsT0FBL0MsQ0FBVCxJQUFvRUQsSUFBcEUsR0FBMkUsQ0FBeEY7QUFDQVksU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQixJQUFJRiwwQ0FBSixDQUFZMUMsUUFBUSxDQUFDTyxDQUFULEdBQWF5QixPQUF6QixFQUFrQ2hDLFFBQVEsQ0FBQ21ELENBQVQsR0FBYW5CLE9BQS9DLENBQXBCLEVBQTZFM0IsTUFBN0U7QUFDQSxNQUFJK0MsSUFBSSxHQUFHQyxtRUFBUyxFQUFwQjtBQUNBSCxPQUFLLENBQUN0QixHQUFOLENBQVV3QixJQUFWO0FBQ0FBLE1BQUksQ0FBQ3BELFFBQUwsQ0FBY2dELEdBQWQsQ0FBa0JoRCxRQUFRLENBQUNPLENBQTNCLEVBQStCRixNQUEvQixFQUF1Q0wsUUFBUSxDQUFDbUQsQ0FBaEQ7QUFDQUMsTUFBSSxDQUFDekMsUUFBTCxDQUFjMkMsS0FBZCxHQUFzQixJQUFJQyx3Q0FBSixDQUFVbEQsTUFBTSxHQUFDLENBQWpCLENBQXRCO0FBQ0EsU0FBT0EsTUFBTSxHQUFHLENBQWhCO0FBQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC4wOWQ1YzkyNDVjZTE1NGQ4OGNiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgQ29sb3IsXHJcbiAgICBNZXNoLFxyXG4gICAgTWVzaFBob25nTWF0ZXJpYWwsXHJcbiAgICBQbGFuZUJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgVmVjdG9yMixcclxuICAgIFZlY3RvcjMsXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IHJhbmRvbUludEZyb21JbnRlcnZhbCB9IGZyb20gXCIuLi9BbGdvcml0aG1zL1ZlY3RvclV0aWxzXCI7XHJcbmltcG9ydCB7IGRlYnVnQ3ViZSB9IGZyb20gXCIuLi9Db3JlLUFQSS9nZW1vdHJ5TWFuYWdlclwiO1xyXG5cclxuaW1wb3J0IHsgUGVybGluLCBGQk0gfSBmcm9tIFwiLi4vQ29yZS1BUEkvUGVybGluTm9pc2UvUGVybGluZ05vaXNlXCI7XHJcbnZhciBTaW1wbGV4Tm9pc2UgPSByZXF1aXJlKFwic2ltcGxleC1ub2lzZVwiKTtcclxuXHJcbmxldCBjdXJyZW50VGVycmFpbjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXR1cm5UZXJyYWluUG9pbnRlcigpIHtcclxuICAgIHJldHVybiBjdXJyZW50VGVycmFpbjtcclxufVxyXG5cclxuLyplc2xpbnQgY29tcGxleGl0eTogW1wiZXJyb3JcIiwgMjBdKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGVycmFpbihzZWVkLCBTY2VuZVRvR2V0KSB7XHJcbiAgICAvLy0tLS0tLS0tLS0tLVtNQUlOIEZVTkNUSU9OIFZBUklBQkxFU10tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBjb25zdCBzaW1wbGV4ID0gbmV3IFNpbXBsZXhOb2lzZShzZWVkKTtcclxuICAgIGxldCBnZW9tZXRyeSA9IG5ldyBQbGFuZUJ1ZmZlckdlb21ldHJ5KDUwMCwgNTAwLCAxMDAsIDEwMCk7XHJcbiAgICBsZXQgY29sb3VycyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uQXR0cmlidXRlID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIik7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bRWRpdCB0aGUgR2VvbXRyeSBBY2NvcmRpbmdseV0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uY291bnQ7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAvLyBHZXQgRGF0YSBwb3NpdGlvblxyXG4gICAgICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgdmVydGV4LmZyb21CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25BdHRyaWJ1dGUsIGkpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBIZWlnaHQgZnJvbSBQZXJsaW4gTm9pc2UgR2VuZXJhdG9yXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHNpbXBsZXgubm9pc2UyRCh2ZXJ0ZXgueCAvIDEyOCwgdmVydGV4LnkgLyAxMjgpICogMzA7XHJcbiAgICAgICAgLy8gU2V0IHRoZSBoZWlnaHQgYWNjb3JkaW5nbHlcclxuICAgICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5W2kgKiAzICsgMl0gPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBWZXJ0aWNlIGNvbG91cnMgYWNjb3JkaW5seVxyXG4gICAgICAgIGlmIChoZWlnaHQgPiAyMykge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMSwgMSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPiA1KSB7XHJcbiAgICAgICAgICAgIGNvbG91cnMucHVzaCgwLjU2LCAwLjU0LCAwLjQ4KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA8IDIpIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTAxLCAwLjc3MiwgMC44Nyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTYsIDAuNjgsIDAuMTY2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bQ3JlYXRlIE1hdGVyaWFsXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIHZhciBtYXRlcmlhbCA9IG5ldyBNZXNoUGhvbmdNYXRlcmlhbCh7XHJcbiAgICAgICAgdmVydGV4Q29sb3JzOiBjb2xvdXJzLFxyXG4gICAgICAgIHJlZmxlY3Rpdml0eTogMCxcclxuICAgICAgICByb3VnaG5lc3M6IDEsXHJcbiAgICAgICAgZmxhdFNoYWRpbmc6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtDcmVhdGUgTWVzaF0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICB2YXIgcGxhbmUyID0gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgIHBsYW5lMi5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgIHBsYW5lMi5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgIHBsYW5lMi5wb3NpdGlvbi55ID0gLTM7XHJcbiAgICBwbGFuZTIucm90YXRlWChNYXRoLlBJIC8gMiArIE1hdGguUEkpO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0VkaXQgY29sb3VyIGF0dHJpYnV0ZV0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgXCJjb2xvclwiLFxyXG4gICAgICAgIG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2xvdXJzKSwgMylcclxuICAgICk7XHJcbiAgICAvL2dlb21ldHJ5LmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bQWRkIHRvIEJhc2UgU2NlbmVdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgY3VycmVudFRlcnJhaW4gPSBwbGFuZTI7XHJcbiAgICBwbGFuZTIubmFtZSA9IFwiTUFJTl9URVJSQUlOXCI7XHJcbiAgICBTY2VuZVRvR2V0LmFkZChwbGFuZTIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUZXJyYWluQ2h1bmsoc2VlZCwgUG9zaXRpb24sIGdhaW4sIGRpdmlzb3IpIHtcclxuICAgIC8vLS0tLS0tLS0tLS0tW01BSU4gRlVOQ1RJT04gVkFSSUFCTEVTXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIC8vY29uc3Qgc2ltcGxleCA9IG5ldyBTaW1wbGV4Tm9pc2Uoc2VlZCk7XHJcbiAgICBsZXQgZ2VvbWV0cnkgPSBuZXcgUGxhbmVCdWZmZXJHZW9tZXRyeSg1MDAsIDUwMCwgMzAsIDMwKTtcclxuICAgIGxldCBjb2xvdXJzID0gW107XHJcbiAgICBjb25zdCBmYm0gPSBuZXcgRkJNKHtcclxuICAgICAgICBzZWVkOiBzZWVkLFxyXG4gICAgICAgIHNjYWxlOiAwLjAwNyxcclxuICAgICAgICBvY3RhdmVzOiA2LFxyXG4gICAgICAgIHBlcnNpc3RhbmNlOiAwLjUsXHJcbiAgICAgICAgbGFjdW5hcml0eTogMixcclxuICAgICAgICByZWRpc3RyaWJ1dGlvbjogMixcclxuICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2ltcGxleCA9IG5ldyBQZXJsaW4oc2VlZClcclxuXHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25BdHRyaWJ1dGUgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKTtcclxuICAgIC8vLS0tLS0tLS0tLS0tW0VkaXQgdGhlIEdlb210cnkgQWNjb3JkaW5nbHldLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmNvdW50OyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgLy8gR2V0IERhdGEgcG9zaXRpb25cclxuICAgICAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIHZlcnRleC5mcm9tQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uQXR0cmlidXRlLCBpKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgSGVpZ2h0IGZyb20gUGVybGluIE5vaXNlIEdlbmVyYXRvclxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBoZWlnaHQgPSBmYm0uZ2V0MihuZXcgVmVjdG9yMigodmVydGV4LnggKyAoUG9zaXRpb24ueCkpICogZGl2aXNvciwgKHZlcnRleC55IC0gKFBvc2l0aW9uLnkpKSAqIGRpdmlzb3IpKSAqIGdhaW4gKiA0XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWlnaHRcIiwgIGZibS5nZXQyKG5ldyBWZWN0b3IyKCA1Ny45MDAwMDAwMDAwMDAwMDYsIC00OS42KSkgKiBnYWluICogNCApXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUZXJyYWluXCIsIG5ldyBWZWN0b3IyKCh2ZXJ0ZXgueCArIChQb3NpdGlvbi54KSkgKiBkaXZpc29yLCAodmVydGV4LnkgLSAoUG9zaXRpb24ueSkpICogZGl2aXNvciksIGhlaWdodClcclxuICAgICAgICAvLyBTZXQgdGhlIGhlaWdodCBhY2NvcmRpbmdseVxyXG4gICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlbaSAqIDMgKyAyXSA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIFZlcnRpY2UgY29sb3VycyBhY2NvcmRpbmx5XHJcbiAgICAgICAgaWYgKGhlaWdodCA+IDEwMCkge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMSwgMSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPiA1MCkge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMC41NiwgMC41NCwgMC40OCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPCAyKSB7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHRTZWNvbmRhcnkgPSBzaW1wbGV4LmdldDIobmV3IFZlY3RvcjIoKHZlcnRleC54ICsgKFBvc2l0aW9uLngpKSAqIGRpdmlzb3IsICh2ZXJ0ZXgueSAtIChQb3NpdGlvbi55KSkgKiBkaXZpc29yKSkgKiAwLjc1XHJcbiAgICAgICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlbaSAqIDMgKyAyXSA9IGhlaWdodFNlY29uZGFyeTtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAsIHJhbmRvbUludEZyb21JbnRlcnZhbCg0MDAsIDUwMCkgLyAxMDAwLCByYW5kb21JbnRGcm9tSW50ZXJ2YWwoNzAwLCA4MDApIC8gMTAwMClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMC41NiwgMC42OCwgMC4xNjYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vLS0tLS0tLS0tLS0tW0NyZWF0ZSBNYXRlcmlhbF0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICB2YXIgbWF0ZXJpYWwgPSBuZXcgTWVzaFBob25nTWF0ZXJpYWwoe1xyXG4gICAgICAgIHZlcnRleENvbG9yczogY29sb3VycyxcclxuICAgICAgICByZWZsZWN0aXZpdHk6IDAsXHJcbiAgICAgICAgZmxhdFNoYWRpbmc6IHRydWUsXHJcbiAgICAgICAgYmxlbmRpbmc6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtDcmVhdGUgTWVzaF0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICB2YXIgcGxhbmUyID0gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgIHBsYW5lMi5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgIHBsYW5lMi5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgIHBsYW5lMi5wb3NpdGlvbi5zZXQoUG9zaXRpb24ueCwgLTMsIFBvc2l0aW9uLnkpO1xyXG4gICAgcGxhbmUyLnJvdGF0ZVgoTWF0aC5QSSAvIDIgKyBNYXRoLlBJKTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtFZGl0IGNvbG91ciBhdHRyaWJ1dGVdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgIFwiY29sb3JcIixcclxuICAgICAgICBuZXcgQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sb3VycyksIDMpXHJcbiAgICApO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0FkZCB0byBCYXNlIFNjZW5lXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIGN1cnJlbnRUZXJyYWluID0gcGxhbmUyO1xyXG4gICAgcGxhbmUyLm5hbWUgPSBgVGVycmFpbl9DaHVua18ke1Bvc2l0aW9uLnh9OiR7UG9zaXRpb24ueX1gO1xyXG4gICAgcmV0dXJuIHBsYW5lMjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXJyYWluSGVpZ2h0KHBvc2l0aW9uLCBzZWVkLCBnYWluLCBkaXZpc29yLCBzY2VuZSkge1xyXG4gICAgY29uc3QgZmJtID0gbmV3IEZCTSh7XHJcbiAgICAgICAgc2VlZDogc2VlZCxcclxuICAgICAgICBzY2FsZTogMC4wMDcsXHJcbiAgICAgICAgb2N0YXZlczogNixcclxuICAgICAgICBwZXJzaXN0YW5jZTogMC41LFxyXG4gICAgICAgIGxhY3VuYXJpdHk6IDIsXHJcbiAgICAgICAgcmVkaXN0cmlidXRpb246IDIsXHJcbiAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgIH0pO1xyXG4gICAgLy9jb25zb2xlLnRhYmxlKHBvc2l0aW9uKVxyXG4gICAgbGV0IGhlaWdodCA9IGZibS5nZXQyKG5ldyBWZWN0b3IyKHBvc2l0aW9uLnggKiBkaXZpc29yLCBwb3NpdGlvbi56ICogZGl2aXNvcikpICogZ2FpbiAqIDRcclxuICAgIGNvbnNvbGUubG9nKFwidHJlZVwiLCBuZXcgVmVjdG9yMihwb3NpdGlvbi54ICogZGl2aXNvciwgcG9zaXRpb24ueiAqIGRpdmlzb3IpLCBoZWlnaHQpXHJcbiAgICBsZXQgY3ViZSA9IGRlYnVnQ3ViZSgpXHJcbiAgICBzY2VuZS5hZGQoY3ViZSlcclxuICAgIGN1YmUucG9zaXRpb24uc2V0KHBvc2l0aW9uLnggLCBoZWlnaHQsIHBvc2l0aW9uLnopXHJcbiAgICBjdWJlLm1hdGVyaWFsLmNvbG9yID0gbmV3IENvbG9yKGhlaWdodCoyKVxyXG4gICAgcmV0dXJuIGhlaWdodCAtIDNcclxufSJdLCJzb3VyY2VSb290IjoiIn0=