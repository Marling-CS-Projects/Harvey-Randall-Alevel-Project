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
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Algorithms/VectorUtils */ "./components/Algorithms/VectorUtils.js");
/* harmony import */ var _Core_API_PerlinNoise_PerlingNoise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core-API/PerlinNoise/PerlingNoise */ "./components/Core-API/PerlinNoise/PerlingNoise.js");
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
  var geometry = new three__WEBPACK_IMPORTED_MODULE_2__.PlaneBufferGeometry(500, 500, 100, 100);
  var colours = [];
  var positionAttribute = geometry.getAttribute("position"); //------------[Edit the Geomtry Accordingly]------------\\

  for (var i = 0, l = geometry.attributes.position.count; i < l; i++) {
    // Get Data position
    var vertex = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3();
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


  var material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshPhongMaterial({
    vertexColors: colours,
    reflectivity: 0,
    roughness: 1,
    flatShading: true
  }); //------------[Create Mesh]------------\\

  var plane2 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);
  plane2.receiveShadow = true;
  plane2.castShadow = true;
  plane2.position.y = -3;
  plane2.rotateX(Math.PI / 2 + Math.PI); //------------[Edit colour attribute]------------\\

  geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_2__.BufferAttribute(new Float32Array(colours), 3)); //geometry.computeVertexNormals();
  //------------[Add to Base Scene]------------\\

  currentTerrain = plane2;
  plane2.name = "MAIN_TERRAIN";
  SceneToGet.add(plane2);
}
function generateTerrainChunk(seed, Position, gain, divisor) {
  //------------[MAIN FUNCTION VARIABLES]------------\\
  //const simplex = new SimplexNoise(seed);
  var geometry = new three__WEBPACK_IMPORTED_MODULE_2__.PlaneBufferGeometry(500, 500, 30, 30);
  var colours = [];
  var fbm = new _Core_API_PerlinNoise_PerlingNoise__WEBPACK_IMPORTED_MODULE_1__.FBM({
    seed: seed,
    scale: 0.007,
    octaves: 6,
    persistance: 0.5,
    lacunarity: 2,
    redistribution: 2,
    height: 40
  });
  var simplex = new _Core_API_PerlinNoise_PerlingNoise__WEBPACK_IMPORTED_MODULE_1__.Perlin(seed);
  var positionAttribute = geometry.getAttribute("position"); //------------[Edit the Geomtry Accordingly]------------\\

  for (var i = 0, l = geometry.attributes.position.count; i < l; i++) {
    // Get Data position
    var vertex = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3();
    vertex.fromBufferAttribute(positionAttribute, i); //console.log(vertex)
    // Check Height from Perlin Noise Generator
    //console.log("terrain mesher",new Vector2((vertex.x + (Position.x)) * divisor, (vertex.y - (Position.y)) * divisor))

    var height = fbm.get2(new three__WEBPACK_IMPORTED_MODULE_2__.Vector2((vertex.x + Position.x) * divisor, (vertex.y - Position.y) * divisor)) * gain * 4; // Set the height accordingly

    geometry.attributes.position.array[i * 3 + 2] = height; // Update Vertice colours accordinly

    if (height > 100) {
      colours.push(1, 1, 1);
    } else if (height > 50) {
      colours.push(0.56, 0.54, 0.48);
    } else if (height < 2) {
      var heightSecondary = simplex.get2(new three__WEBPACK_IMPORTED_MODULE_2__.Vector2((vertex.x + Position.x) * divisor, (vertex.y - Position.y) * divisor)) * 0.75;
      geometry.attributes.position.array[i * 3 + 2] = heightSecondary;
      colours.push(0, (0,_Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromInterval)(400, 500) / 1000, (0,_Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_0__.randomIntFromInterval)(700, 800) / 1000);
    } else {
      colours.push(0.56, 0.68, 0.166);
    }
  } //------------[Create Material]------------\\


  var material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshPhongMaterial({
    vertexColors: colours,
    reflectivity: 0,
    flatShading: true,
    blending: false
  }); //------------[Create Mesh]------------\\

  var plane2 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);
  plane2.receiveShadow = true;
  plane2.castShadow = true;
  plane2.position.set(Position.x, -3, Position.y);
  plane2.rotateX(Math.PI / 2 + Math.PI); //------------[Edit colour attribute]------------\\

  geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_2__.BufferAttribute(new Float32Array(colours), 3)); //------------[Add to Base Scene]------------\\

  currentTerrain = plane2;
  plane2.name = "Terrain_Chunk_".concat(Position.x, ":").concat(Position.y);
  return plane2;
}
function getTerrainHeight(position, seed, gain, divisor) {
  var fbm = new _Core_API_PerlinNoise_PerlingNoise__WEBPACK_IMPORTED_MODULE_1__.FBM({
    seed: seed,
    scale: 0.007,
    octaves: 6,
    persistance: 0.5,
    lacunarity: 2,
    redistribution: 2,
    height: 40
  });
  console.log({
    seed: seed,
    gain: gain,
    divisor: divisor
  });
  var height = fbm.get2(new three__WEBPACK_IMPORTED_MODULE_2__.Vector2(position.x * divisor, position.z * divisor)) * gain * 4; //console.log(new Vector2(position.x * divisor, position.z * divisor))

  return height;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9Qcm9jZWR1bGVUZXJyYWluLmpzIl0sIm5hbWVzIjpbIlNpbXBsZXhOb2lzZSIsInJlcXVpcmUiLCJjdXJyZW50VGVycmFpbiIsIlJldHVyblRlcnJhaW5Qb2ludGVyIiwiZ2VuZXJhdGVUZXJyYWluIiwic2VlZCIsIlNjZW5lVG9HZXQiLCJzaW1wbGV4IiwiZ2VvbWV0cnkiLCJQbGFuZUJ1ZmZlckdlb21ldHJ5IiwiY29sb3VycyIsInBvc2l0aW9uQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiaSIsImwiLCJhdHRyaWJ1dGVzIiwicG9zaXRpb24iLCJjb3VudCIsInZlcnRleCIsIlZlY3RvcjMiLCJmcm9tQnVmZmVyQXR0cmlidXRlIiwiaGVpZ2h0Iiwibm9pc2UyRCIsIngiLCJ5IiwiYXJyYXkiLCJwdXNoIiwibWF0ZXJpYWwiLCJNZXNoUGhvbmdNYXRlcmlhbCIsInZlcnRleENvbG9ycyIsInJlZmxlY3Rpdml0eSIsInJvdWdobmVzcyIsImZsYXRTaGFkaW5nIiwicGxhbmUyIiwiTWVzaCIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93Iiwicm90YXRlWCIsIk1hdGgiLCJQSSIsInNldEF0dHJpYnV0ZSIsIkJ1ZmZlckF0dHJpYnV0ZSIsIkZsb2F0MzJBcnJheSIsIm5hbWUiLCJhZGQiLCJnZW5lcmF0ZVRlcnJhaW5DaHVuayIsIlBvc2l0aW9uIiwiZ2FpbiIsImRpdmlzb3IiLCJmYm0iLCJGQk0iLCJzY2FsZSIsIm9jdGF2ZXMiLCJwZXJzaXN0YW5jZSIsImxhY3VuYXJpdHkiLCJyZWRpc3RyaWJ1dGlvbiIsIlBlcmxpbiIsImdldDIiLCJWZWN0b3IyIiwiaGVpZ2h0U2Vjb25kYXJ5IiwicmFuZG9tSW50RnJvbUludGVydmFsIiwiYmxlbmRpbmciLCJzZXQiLCJnZXRUZXJyYWluSGVpZ2h0IiwiY29uc29sZSIsImxvZyIsInoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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QUNBUixnQkFBYyxHQUFHK0IsTUFBakI7QUFDQUEsUUFBTSxDQUFDVSxJQUFQLDJCQUErQkcsUUFBUSxDQUFDdkIsQ0FBeEMsY0FBNkN1QixRQUFRLENBQUN0QixDQUF0RDtBQUNBLFNBQU9TLE1BQVA7QUFDSDtBQUdNLFNBQVM4QixnQkFBVCxDQUEwQi9DLFFBQTFCLEVBQW9DWCxJQUFwQyxFQUEwQzBDLElBQTFDLEVBQWdEQyxPQUFoRCxFQUF5RDtBQUM1RCxNQUFNQyxHQUFHLEdBQUcsSUFBSUMsbUVBQUosQ0FBUTtBQUNoQjdDLFFBQUksRUFBRUEsSUFEVTtBQUVoQjhDLFNBQUssRUFBRSxLQUZTO0FBR2hCQyxXQUFPLEVBQUUsQ0FITztBQUloQkMsZUFBVyxFQUFFLEdBSkc7QUFLaEJDLGNBQVUsRUFBRSxDQUxJO0FBTWhCQyxrQkFBYyxFQUFFLENBTkE7QUFPaEJsQyxVQUFNLEVBQUU7QUFQUSxHQUFSLENBQVo7QUFTQTJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUM1RCxRQUFJLEVBQUpBLElBQUQ7QUFBTzBDLFFBQUksRUFBSkEsSUFBUDtBQUFhQyxXQUFPLEVBQVBBO0FBQWIsR0FBWjtBQUNBLE1BQUkzQixNQUFNLEdBQUc0QixHQUFHLENBQUNRLElBQUosQ0FBUyxJQUFJQywwQ0FBSixDQUFZMUMsUUFBUSxDQUFDTyxDQUFULEdBQWF5QixPQUF6QixFQUFrQ2hDLFFBQVEsQ0FBQ2tELENBQVQsR0FBYWxCLE9BQS9DLENBQVQsSUFBb0VELElBQXBFLEdBQTJFLENBQXhGLENBWDRELENBWTVEOztBQUNBLFNBQU8xQixNQUFQO0FBQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC40MWVjZGUyMDQzMGQxYWJkOWFhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgTWVzaCxcclxuICAgIE1lc2hQaG9uZ01hdGVyaWFsLFxyXG4gICAgUGxhbmVCdWZmZXJHZW9tZXRyeSxcclxuICAgIFZlY3RvcjIsXHJcbiAgICBWZWN0b3IzLFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyByYW5kb21JbnRGcm9tSW50ZXJ2YWwgfSBmcm9tIFwiLi4vQWxnb3JpdGhtcy9WZWN0b3JVdGlsc1wiO1xyXG5cclxuaW1wb3J0IHsgUGVybGluLCBGQk0gfSBmcm9tIFwiLi4vQ29yZS1BUEkvUGVybGluTm9pc2UvUGVybGluZ05vaXNlXCI7XHJcbnZhciBTaW1wbGV4Tm9pc2UgPSByZXF1aXJlKFwic2ltcGxleC1ub2lzZVwiKTtcclxuXHJcbmxldCBjdXJyZW50VGVycmFpbjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXR1cm5UZXJyYWluUG9pbnRlcigpIHtcclxuICAgIHJldHVybiBjdXJyZW50VGVycmFpbjtcclxufVxyXG5cclxuLyplc2xpbnQgY29tcGxleGl0eTogW1wiZXJyb3JcIiwgMjBdKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGVycmFpbihzZWVkLCBTY2VuZVRvR2V0KSB7XHJcbiAgICAvLy0tLS0tLS0tLS0tLVtNQUlOIEZVTkNUSU9OIFZBUklBQkxFU10tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBjb25zdCBzaW1wbGV4ID0gbmV3IFNpbXBsZXhOb2lzZShzZWVkKTtcclxuICAgIGxldCBnZW9tZXRyeSA9IG5ldyBQbGFuZUJ1ZmZlckdlb21ldHJ5KDUwMCwgNTAwLCAxMDAsIDEwMCk7XHJcbiAgICBsZXQgY29sb3VycyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uQXR0cmlidXRlID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIik7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bRWRpdCB0aGUgR2VvbXRyeSBBY2NvcmRpbmdseV0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uY291bnQ7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAvLyBHZXQgRGF0YSBwb3NpdGlvblxyXG4gICAgICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgdmVydGV4LmZyb21CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25BdHRyaWJ1dGUsIGkpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBIZWlnaHQgZnJvbSBQZXJsaW4gTm9pc2UgR2VuZXJhdG9yXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHNpbXBsZXgubm9pc2UyRCh2ZXJ0ZXgueCAvIDEyOCwgdmVydGV4LnkgLyAxMjgpICogMzA7XHJcbiAgICAgICAgLy8gU2V0IHRoZSBoZWlnaHQgYWNjb3JkaW5nbHlcclxuICAgICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5W2kgKiAzICsgMl0gPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBWZXJ0aWNlIGNvbG91cnMgYWNjb3JkaW5seVxyXG4gICAgICAgIGlmIChoZWlnaHQgPiAyMykge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMSwgMSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPiA1KSB7XHJcbiAgICAgICAgICAgIGNvbG91cnMucHVzaCgwLjU2LCAwLjU0LCAwLjQ4KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA8IDIpIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTAxLCAwLjc3MiwgMC44Nyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTYsIDAuNjgsIDAuMTY2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bQ3JlYXRlIE1hdGVyaWFsXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIHZhciBtYXRlcmlhbCA9IG5ldyBNZXNoUGhvbmdNYXRlcmlhbCh7XHJcbiAgICAgICAgdmVydGV4Q29sb3JzOiBjb2xvdXJzLFxyXG4gICAgICAgIHJlZmxlY3Rpdml0eTogMCxcclxuICAgICAgICByb3VnaG5lc3M6IDEsXHJcbiAgICAgICAgZmxhdFNoYWRpbmc6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtDcmVhdGUgTWVzaF0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICB2YXIgcGxhbmUyID0gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgIHBsYW5lMi5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgIHBsYW5lMi5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgIHBsYW5lMi5wb3NpdGlvbi55ID0gLTM7XHJcbiAgICBwbGFuZTIucm90YXRlWChNYXRoLlBJIC8gMiArIE1hdGguUEkpO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0VkaXQgY29sb3VyIGF0dHJpYnV0ZV0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgXCJjb2xvclwiLFxyXG4gICAgICAgIG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2xvdXJzKSwgMylcclxuICAgICk7XHJcbiAgICAvL2dlb21ldHJ5LmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bQWRkIHRvIEJhc2UgU2NlbmVdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgY3VycmVudFRlcnJhaW4gPSBwbGFuZTI7XHJcbiAgICBwbGFuZTIubmFtZSA9IFwiTUFJTl9URVJSQUlOXCI7XHJcbiAgICBTY2VuZVRvR2V0LmFkZChwbGFuZTIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUZXJyYWluQ2h1bmsoc2VlZCwgUG9zaXRpb24sIGdhaW4sIGRpdmlzb3IpIHtcclxuICAgIC8vLS0tLS0tLS0tLS0tW01BSU4gRlVOQ1RJT04gVkFSSUFCTEVTXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIC8vY29uc3Qgc2ltcGxleCA9IG5ldyBTaW1wbGV4Tm9pc2Uoc2VlZCk7XHJcbiAgICBsZXQgZ2VvbWV0cnkgPSBuZXcgUGxhbmVCdWZmZXJHZW9tZXRyeSg1MDAsIDUwMCwgMzAsIDMwKTtcclxuICAgIGxldCBjb2xvdXJzID0gW107XHJcbiAgICBjb25zdCBmYm0gPSBuZXcgRkJNKHtcclxuICAgICAgICBzZWVkOiBzZWVkLFxyXG4gICAgICAgIHNjYWxlOiAwLjAwNyxcclxuICAgICAgICBvY3RhdmVzOiA2LFxyXG4gICAgICAgIHBlcnNpc3RhbmNlOiAwLjUsXHJcbiAgICAgICAgbGFjdW5hcml0eTogMixcclxuICAgICAgICByZWRpc3RyaWJ1dGlvbjogMixcclxuICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2ltcGxleCA9IG5ldyBQZXJsaW4oc2VlZClcclxuXHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25BdHRyaWJ1dGUgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKTtcclxuICAgIC8vLS0tLS0tLS0tLS0tW0VkaXQgdGhlIEdlb210cnkgQWNjb3JkaW5nbHldLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmNvdW50OyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgLy8gR2V0IERhdGEgcG9zaXRpb25cclxuICAgICAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIHZlcnRleC5mcm9tQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uQXR0cmlidXRlLCBpKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHZlcnRleClcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgSGVpZ2h0IGZyb20gUGVybGluIE5vaXNlIEdlbmVyYXRvclxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ0ZXJyYWluIG1lc2hlclwiLG5ldyBWZWN0b3IyKCh2ZXJ0ZXgueCArIChQb3NpdGlvbi54KSkgKiBkaXZpc29yLCAodmVydGV4LnkgLSAoUG9zaXRpb24ueSkpICogZGl2aXNvcikpXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGZibS5nZXQyKG5ldyBWZWN0b3IyKCh2ZXJ0ZXgueCArIChQb3NpdGlvbi54KSkgKiBkaXZpc29yLCAodmVydGV4LnkgLSAoUG9zaXRpb24ueSkpICogZGl2aXNvcikpICogZ2FpbiAqIDRcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSBoZWlnaHQgYWNjb3JkaW5nbHlcclxuICAgICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5W2kgKiAzICsgMl0gPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBWZXJ0aWNlIGNvbG91cnMgYWNjb3JkaW5seVxyXG4gICAgICAgIGlmIChoZWlnaHQgPiAxMDApIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDEsIDEsIDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0ID4gNTApIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTYsIDAuNTQsIDAuNDgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0IDwgMikge1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0U2Vjb25kYXJ5ID0gc2ltcGxleC5nZXQyKG5ldyBWZWN0b3IyKCh2ZXJ0ZXgueCArIChQb3NpdGlvbi54KSkgKiBkaXZpc29yLCAodmVydGV4LnkgLSAoUG9zaXRpb24ueSkpICogZGl2aXNvcikpICogMC43NVxyXG4gICAgICAgICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5W2kgKiAzICsgMl0gPSBoZWlnaHRTZWNvbmRhcnk7XHJcbiAgICAgICAgICAgIGNvbG91cnMucHVzaCgwLCByYW5kb21JbnRGcm9tSW50ZXJ2YWwoNDAwLCA1MDApIC8gMTAwMCwgcmFuZG9tSW50RnJvbUludGVydmFsKDcwMCwgODAwKSAvIDEwMDApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTYsIDAuNjgsIDAuMTY2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLy0tLS0tLS0tLS0tLVtDcmVhdGUgTWF0ZXJpYWxdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgdmFyIG1hdGVyaWFsID0gbmV3IE1lc2hQaG9uZ01hdGVyaWFsKHtcclxuICAgICAgICB2ZXJ0ZXhDb2xvcnM6IGNvbG91cnMsXHJcbiAgICAgICAgcmVmbGVjdGl2aXR5OiAwLFxyXG4gICAgICAgIGZsYXRTaGFkaW5nOiB0cnVlLFxyXG4gICAgICAgIGJsZW5kaW5nOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bQ3JlYXRlIE1lc2hdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgdmFyIHBsYW5lMiA9IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICBwbGFuZTIucmVjZWl2ZVNoYWRvdyA9IHRydWU7XHJcbiAgICBwbGFuZTIuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICBwbGFuZTIucG9zaXRpb24uc2V0KFBvc2l0aW9uLngsIC0zLCBQb3NpdGlvbi55KTtcclxuICAgIHBsYW5lMi5yb3RhdGVYKE1hdGguUEkgLyAyICsgTWF0aC5QSSk7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bRWRpdCBjb2xvdXIgYXR0cmlidXRlXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcclxuICAgICAgICBcImNvbG9yXCIsXHJcbiAgICAgICAgbmV3IEJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbG91cnMpLCAzKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtBZGQgdG8gQmFzZSBTY2VuZV0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBjdXJyZW50VGVycmFpbiA9IHBsYW5lMjtcclxuICAgIHBsYW5lMi5uYW1lID0gYFRlcnJhaW5fQ2h1bmtfJHtQb3NpdGlvbi54fToke1Bvc2l0aW9uLnl9YDtcclxuICAgIHJldHVybiBwbGFuZTI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVycmFpbkhlaWdodChwb3NpdGlvbiwgc2VlZCwgZ2FpbiwgZGl2aXNvcikge1xyXG4gICAgY29uc3QgZmJtID0gbmV3IEZCTSh7XHJcbiAgICAgICAgc2VlZDogc2VlZCxcclxuICAgICAgICBzY2FsZTogMC4wMDcsXHJcbiAgICAgICAgb2N0YXZlczogNixcclxuICAgICAgICBwZXJzaXN0YW5jZTogMC41LFxyXG4gICAgICAgIGxhY3VuYXJpdHk6IDIsXHJcbiAgICAgICAgcmVkaXN0cmlidXRpb246IDIsXHJcbiAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coe3NlZWQsIGdhaW4sIGRpdmlzb3J9KVxyXG4gICAgbGV0IGhlaWdodCA9IGZibS5nZXQyKG5ldyBWZWN0b3IyKHBvc2l0aW9uLnggKiBkaXZpc29yLCBwb3NpdGlvbi56ICogZGl2aXNvcikpICogZ2FpbiAqIDRcclxuICAgIC8vY29uc29sZS5sb2cobmV3IFZlY3RvcjIocG9zaXRpb24ueCAqIGRpdmlzb3IsIHBvc2l0aW9uLnogKiBkaXZpc29yKSlcclxuICAgIHJldHVybiBoZWlnaHRcclxufSJdLCJzb3VyY2VSb290IjoiIn0=