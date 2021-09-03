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


/***/ }),

/***/ "./components/gameFundalmentals/staticAssets/treeBuilder.js":
/*!******************************************************************!*\
  !*** ./components/gameFundalmentals/staticAssets/treeBuilder.js ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateTrees": function() { return /* binding */ GenerateTrees; }
/* harmony export */ });
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Algorithms/degToRad */ "./components/Algorithms/degToRad.js");
/* harmony import */ var _Algorithms_meshMerger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Algorithms/meshMerger.js */ "./components/Algorithms/meshMerger.js");
/* harmony import */ var _Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Algorithms/VectorUtils */ "./components/Algorithms/VectorUtils.js");
/* harmony import */ var _Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Core-API/3dModelHandlers/GLBLoader */ "./components/Core-API/3dModelHandlers/GLBLoader.js");
/* harmony import */ var _Core_API_3dModelHandlers_MeshMerger_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Core-API/3dModelHandlers/MeshMerger.ts */ "./components/Core-API/3dModelHandlers/MeshMerger.ts");
/* harmony import */ var _ProceduleTerrain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ProceduleTerrain */ "./components/gameFundalmentals/ProceduleTerrain.js");
/* module decorator */ module = __webpack_require__.hmd(module);










function placeTree(tree, intersects, randomVec) {
  var newTree = tree.scene.clone();
  newTree.rotateY((0,_Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_2__.radiants)(Math.random() * 360));
  var point = intersects;
  newTree.position.set(randomVec.x, point, randomVec.z);
  return {
    newTree: newTree,
    vetor: new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(randomVec.x, point, randomVec.z)
  };
}

function GenerateTrees(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
  return _GenerateTrees.apply(this, arguments);
}
_c2 = GenerateTrees;

function _GenerateTrees() {
  _GenerateTrees = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(num, scene, start, bounds, seed, gain, divisor) {
    var tree, snowyTree, palmTree, leaves, trunk, i, randomVector, height, placeTreeOut, _placeTreeOut;

    return H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_5__.addGLBFile)("/Assets/PineTree.glb", scene);

          case 2:
            tree = _context.sent;
            _context.next = 5;
            return (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_5__.addGLBFile)("/Assets/SnowyPineTree.glb", scene);

          case 5:
            snowyTree = _context.sent;
            _context.next = 8;
            return (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_5__.addGLBFile)("/Assets/Palm_Tree.glb", scene);

          case 8:
            palmTree = _context.sent;
            leaves = new three__WEBPACK_IMPORTED_MODULE_8__.MeshLambertMaterial({
              color: 0x694b37
            });
            trunk = new three__WEBPACK_IMPORTED_MODULE_8__.MeshLambertMaterial({
              color: 0x216734
            });
            tree.scene.children[0].material = leaves;
            tree.scene.children[1].material = trunk;
            snowyTree.scene.children[0].material = leaves;
            snowyTree.scene.children[1].material = trunk;
            snowyTree.scene.children[2].material = new three__WEBPACK_IMPORTED_MODULE_8__.MeshLambertMaterial({
              color: 0xffffff
            });
            palmTree = palmTree.scene.children[0];
            palmTree.children[0].material = trunk;

            for (i = 0; i < num; i++) {
              randomVector = (0,_Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_4__.randomVectorBetweenPoints2D)(start, bounds);
              randomVector.y = 50;
              height = (0,_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_7__.getTerrainHeight)(randomVector, seed, gain, divisor, scene);

              if (height > 2 && height < 20) {
                placeTreeOut = placeTree(tree, height, randomVector);
                scene.add(placeTreeOut.newTree);
              } else if (height < 2 && height > 0) {
                _placeTreeOut = placeTree(tree, height, randomVector);
                scene.add(_placeTreeOut.newTree);
              } else if (height > 20) {//meshes.push(placeTree(palmTree, intersects))
                //group.add(placeTreeOut.newTree)
              }
            }

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _GenerateTrees.apply(this, arguments);
}

_c = GenerateTrees;

var _c, _c2;

$RefreshReg$(_c, "GenerateTrees");
$RefreshReg$(_c2, "GenerateTrees");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9Qcm9jZWR1bGVUZXJyYWluLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL3N0YXRpY0Fzc2V0cy90cmVlQnVpbGRlci5qcyJdLCJuYW1lcyI6WyJTaW1wbGV4Tm9pc2UiLCJyZXF1aXJlIiwiY3VycmVudFRlcnJhaW4iLCJSZXR1cm5UZXJyYWluUG9pbnRlciIsImdlbmVyYXRlVGVycmFpbiIsInNlZWQiLCJTY2VuZVRvR2V0Iiwic2ltcGxleCIsImdlb21ldHJ5IiwiUGxhbmVCdWZmZXJHZW9tZXRyeSIsImNvbG91cnMiLCJwb3NpdGlvbkF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsImkiLCJsIiwiYXR0cmlidXRlcyIsInBvc2l0aW9uIiwiY291bnQiLCJ2ZXJ0ZXgiLCJWZWN0b3IzIiwiZnJvbUJ1ZmZlckF0dHJpYnV0ZSIsImhlaWdodCIsIm5vaXNlMkQiLCJ4IiwieSIsImFycmF5IiwicHVzaCIsIm1hdGVyaWFsIiwiTWVzaFBob25nTWF0ZXJpYWwiLCJ2ZXJ0ZXhDb2xvcnMiLCJyZWZsZWN0aXZpdHkiLCJyb3VnaG5lc3MiLCJmbGF0U2hhZGluZyIsInBsYW5lMiIsIk1lc2giLCJyZWNlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsInJvdGF0ZVgiLCJNYXRoIiwiUEkiLCJzZXRBdHRyaWJ1dGUiLCJCdWZmZXJBdHRyaWJ1dGUiLCJGbG9hdDMyQXJyYXkiLCJuYW1lIiwiYWRkIiwiZ2VuZXJhdGVUZXJyYWluQ2h1bmsiLCJQb3NpdGlvbiIsImdhaW4iLCJkaXZpc29yIiwiZmJtIiwiRkJNIiwic2NhbGUiLCJvY3RhdmVzIiwicGVyc2lzdGFuY2UiLCJsYWN1bmFyaXR5IiwicmVkaXN0cmlidXRpb24iLCJQZXJsaW4iLCJnZXQyIiwiVmVjdG9yMiIsImhlaWdodFNlY29uZGFyeSIsInJhbmRvbUludEZyb21JbnRlcnZhbCIsImJsZW5kaW5nIiwic2V0IiwiZ2V0VGVycmFpbkhlaWdodCIsInNjZW5lIiwiY29uc29sZSIsInRhYmxlIiwieiIsImN1YmUiLCJkZWJ1Z0N1YmUiLCJwbGFjZVRyZWUiLCJ0cmVlIiwiaW50ZXJzZWN0cyIsInJhbmRvbVZlYyIsIm5ld1RyZWUiLCJjbG9uZSIsInJvdGF0ZVkiLCJyYWRpYW50cyIsInJhbmRvbSIsInBvaW50IiwidmV0b3IiLCJHZW5lcmF0ZVRyZWVzIiwibnVtIiwic3RhcnQiLCJib3VuZHMiLCJhZGRHTEJGaWxlIiwic25vd3lUcmVlIiwicGFsbVRyZWUiLCJsZWF2ZXMiLCJNZXNoTGFtYmVydE1hdGVyaWFsIiwiY29sb3IiLCJ0cnVuayIsImNoaWxkcmVuIiwicmFuZG9tVmVjdG9yIiwicmFuZG9tVmVjdG9yQmV0d2VlblBvaW50czJEIiwicGxhY2VUcmVlT3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBUUE7QUFDQTtBQUVBOztBQUNBLElBQUlBLFlBQVksR0FBR0MsbUJBQU8sQ0FBQyxvRUFBRCxDQUExQjs7QUFFQSxJQUFJQyxjQUFKO0FBRU8sU0FBU0Msb0JBQVQsR0FBZ0M7QUFDbkMsU0FBT0QsY0FBUDtBQUNIO0FBRUQ7O0tBSmdCQyxvQjtBQUtULFNBQVNDLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStCQyxVQUEvQixFQUEyQztBQUM5QztBQUNBLE1BQU1DLE9BQU8sR0FBRyxJQUFJUCxZQUFKLENBQWlCSyxJQUFqQixDQUFoQjtBQUNBLE1BQUlHLFFBQVEsR0FBRyxJQUFJQyxzREFBSixDQUF3QixHQUF4QixFQUE2QixHQUE3QixFQUFrQyxHQUFsQyxFQUF1QyxHQUF2QyxDQUFmO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFFQSxNQUFNQyxpQkFBaUIsR0FBR0gsUUFBUSxDQUFDSSxZQUFULENBQXNCLFVBQXRCLENBQTFCLENBTjhDLENBUTlDOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQVIsRUFBV0MsQ0FBQyxH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QTtBQUFBO0FBQUEsRzs7OztLQUFlNEQsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0Ljk4ZTdkNGZkYWRmNzQ0N2I1MjZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcclxuXHJcbmltcG9ydCB7XHJcbiAgICBCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBNZXNoLFxyXG4gICAgTWVzaFBob25nTWF0ZXJpYWwsXHJcbiAgICBQbGFuZUJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgVmVjdG9yMixcclxuICAgIFZlY3RvcjMsXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IHJhbmRvbUludEZyb21JbnRlcnZhbCB9IGZyb20gXCIuLi9BbGdvcml0aG1zL1ZlY3RvclV0aWxzXCI7XHJcbmltcG9ydCB7IGRlYnVnQ3ViZSB9IGZyb20gXCIuLi9Db3JlLUFQSS9nZW1vdHJ5TWFuYWdlclwiO1xyXG5cclxuaW1wb3J0IHsgUGVybGluLCBGQk0gfSBmcm9tIFwiLi4vQ29yZS1BUEkvUGVybGluTm9pc2UvUGVybGluZ05vaXNlXCI7XHJcbnZhciBTaW1wbGV4Tm9pc2UgPSByZXF1aXJlKFwic2ltcGxleC1ub2lzZVwiKTtcclxuXHJcbmxldCBjdXJyZW50VGVycmFpbjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXR1cm5UZXJyYWluUG9pbnRlcigpIHtcclxuICAgIHJldHVybiBjdXJyZW50VGVycmFpbjtcclxufVxyXG5cclxuLyplc2xpbnQgY29tcGxleGl0eTogW1wiZXJyb3JcIiwgMjBdKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGVycmFpbihzZWVkLCBTY2VuZVRvR2V0KSB7XHJcbiAgICAvLy0tLS0tLS0tLS0tLVtNQUlOIEZVTkNUSU9OIFZBUklBQkxFU10tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBjb25zdCBzaW1wbGV4ID0gbmV3IFNpbXBsZXhOb2lzZShzZWVkKTtcclxuICAgIGxldCBnZW9tZXRyeSA9IG5ldyBQbGFuZUJ1ZmZlckdlb21ldHJ5KDUwMCwgNTAwLCAxMDAsIDEwMCk7XHJcbiAgICBsZXQgY29sb3VycyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uQXR0cmlidXRlID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIik7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bRWRpdCB0aGUgR2VvbXRyeSBBY2NvcmRpbmdseV0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uY291bnQ7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAvLyBHZXQgRGF0YSBwb3NpdGlvblxyXG4gICAgICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgdmVydGV4LmZyb21CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25BdHRyaWJ1dGUsIGkpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBIZWlnaHQgZnJvbSBQZXJsaW4gTm9pc2UgR2VuZXJhdG9yXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHNpbXBsZXgubm9pc2UyRCh2ZXJ0ZXgueCAvIDEyOCwgdmVydGV4LnkgLyAxMjgpICogMzA7XHJcbiAgICAgICAgLy8gU2V0IHRoZSBoZWlnaHQgYWNjb3JkaW5nbHlcclxuICAgICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5W2kgKiAzICsgMl0gPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBWZXJ0aWNlIGNvbG91cnMgYWNjb3JkaW5seVxyXG4gICAgICAgIGlmIChoZWlnaHQgPiAyMykge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMSwgMSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPiA1KSB7XHJcbiAgICAgICAgICAgIGNvbG91cnMucHVzaCgwLjU2LCAwLjU0LCAwLjQ4KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA8IDIpIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTAxLCAwLjc3MiwgMC44Nyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTYsIDAuNjgsIDAuMTY2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bQ3JlYXRlIE1hdGVyaWFsXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIHZhciBtYXRlcmlhbCA9IG5ldyBNZXNoUGhvbmdNYXRlcmlhbCh7XHJcbiAgICAgICAgdmVydGV4Q29sb3JzOiBjb2xvdXJzLFxyXG4gICAgICAgIHJlZmxlY3Rpdml0eTogMCxcclxuICAgICAgICByb3VnaG5lc3M6IDEsXHJcbiAgICAgICAgZmxhdFNoYWRpbmc6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtDcmVhdGUgTWVzaF0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICB2YXIgcGxhbmUyID0gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgIHBsYW5lMi5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgIHBsYW5lMi5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgIHBsYW5lMi5wb3NpdGlvbi55ID0gLTM7XHJcbiAgICBwbGFuZTIucm90YXRlWChNYXRoLlBJIC8gMiArIE1hdGguUEkpO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0VkaXQgY29sb3VyIGF0dHJpYnV0ZV0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgXCJjb2xvclwiLFxyXG4gICAgICAgIG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2xvdXJzKSwgMylcclxuICAgICk7XHJcbiAgICAvL2dlb21ldHJ5LmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bQWRkIHRvIEJhc2UgU2NlbmVdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgY3VycmVudFRlcnJhaW4gPSBwbGFuZTI7XHJcbiAgICBwbGFuZTIubmFtZSA9IFwiTUFJTl9URVJSQUlOXCI7XHJcbiAgICBTY2VuZVRvR2V0LmFkZChwbGFuZTIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUZXJyYWluQ2h1bmsoc2VlZCwgUG9zaXRpb24sIGdhaW4sIGRpdmlzb3IpIHtcclxuICAgIC8vLS0tLS0tLS0tLS0tW01BSU4gRlVOQ1RJT04gVkFSSUFCTEVTXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIC8vY29uc3Qgc2ltcGxleCA9IG5ldyBTaW1wbGV4Tm9pc2Uoc2VlZCk7XHJcbiAgICBsZXQgZ2VvbWV0cnkgPSBuZXcgUGxhbmVCdWZmZXJHZW9tZXRyeSg1MDAsIDUwMCwgMzAsIDMwKTtcclxuICAgIGxldCBjb2xvdXJzID0gW107XHJcbiAgICBjb25zdCBmYm0gPSBuZXcgRkJNKHtcclxuICAgICAgICBzZWVkOiBzZWVkLFxyXG4gICAgICAgIHNjYWxlOiAwLjAwNyxcclxuICAgICAgICBvY3RhdmVzOiA2LFxyXG4gICAgICAgIHBlcnNpc3RhbmNlOiAwLjUsXHJcbiAgICAgICAgbGFjdW5hcml0eTogMixcclxuICAgICAgICByZWRpc3RyaWJ1dGlvbjogMixcclxuICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2ltcGxleCA9IG5ldyBQZXJsaW4oc2VlZClcclxuXHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25BdHRyaWJ1dGUgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKTtcclxuICAgIC8vLS0tLS0tLS0tLS0tW0VkaXQgdGhlIEdlb210cnkgQWNjb3JkaW5nbHldLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmNvdW50OyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgLy8gR2V0IERhdGEgcG9zaXRpb25cclxuICAgICAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIHZlcnRleC5mcm9tQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uQXR0cmlidXRlLCBpKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgSGVpZ2h0IGZyb20gUGVybGluIE5vaXNlIEdlbmVyYXRvclxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBoZWlnaHQgPSBmYm0uZ2V0MihuZXcgVmVjdG9yMigodmVydGV4LnggKyAoUG9zaXRpb24ueCkpICogZGl2aXNvciwgKHZlcnRleC55IC0gKFBvc2l0aW9uLnkpKSAqIGRpdmlzb3IpKSAqIGdhaW4gKiA0XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgaGVpZ2h0IGFjY29yZGluZ2x5XHJcbiAgICAgICAgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheVtpICogMyArIDJdID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgVmVydGljZSBjb2xvdXJzIGFjY29yZGlubHlcclxuICAgICAgICBpZiAoaGVpZ2h0ID4gMTAwKSB7XHJcbiAgICAgICAgICAgIGNvbG91cnMucHVzaCgxLCAxLCAxKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA+IDUwKSB7XHJcbiAgICAgICAgICAgIGNvbG91cnMucHVzaCgwLjU2LCAwLjU0LCAwLjQ4KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA8IDIpIHtcclxuICAgICAgICAgICAgbGV0IGhlaWdodFNlY29uZGFyeSA9IHNpbXBsZXguZ2V0MihuZXcgVmVjdG9yMigodmVydGV4LnggKyAoUG9zaXRpb24ueCkpICogZGl2aXNvciwgKHZlcnRleC55IC0gKFBvc2l0aW9uLnkpKSAqIGRpdmlzb3IpKSAqIDAuNzVcclxuICAgICAgICAgICAgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheVtpICogMyArIDJdID0gaGVpZ2h0U2Vjb25kYXJ5O1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMCwgcmFuZG9tSW50RnJvbUludGVydmFsKDQwMCwgNTAwKSAvIDEwMDAsIHJhbmRvbUludEZyb21JbnRlcnZhbCg3MDAsIDgwMCkgLyAxMDAwKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbG91cnMucHVzaCgwLjU2LCAwLjY4LCAwLjE2Nik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8tLS0tLS0tLS0tLS1bQ3JlYXRlIE1hdGVyaWFsXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIHZhciBtYXRlcmlhbCA9IG5ldyBNZXNoUGhvbmdNYXRlcmlhbCh7XHJcbiAgICAgICAgdmVydGV4Q29sb3JzOiBjb2xvdXJzLFxyXG4gICAgICAgIHJlZmxlY3Rpdml0eTogMCxcclxuICAgICAgICBmbGF0U2hhZGluZzogdHJ1ZSxcclxuICAgICAgICBibGVuZGluZzogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0NyZWF0ZSBNZXNoXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIHZhciBwbGFuZTIgPSBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG4gICAgcGxhbmUyLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xyXG4gICAgcGxhbmUyLmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgcGxhbmUyLnBvc2l0aW9uLnNldChQb3NpdGlvbi54LCAtMywgUG9zaXRpb24ueSk7XHJcbiAgICBwbGFuZTIucm90YXRlWChNYXRoLlBJIC8gMiArIE1hdGguUEkpO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0VkaXQgY29sb3VyIGF0dHJpYnV0ZV0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgXCJjb2xvclwiLFxyXG4gICAgICAgIG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2xvdXJzKSwgMylcclxuICAgICk7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bQWRkIHRvIEJhc2UgU2NlbmVdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgY3VycmVudFRlcnJhaW4gPSBwbGFuZTI7XHJcbiAgICBwbGFuZTIubmFtZSA9IGBUZXJyYWluX0NodW5rXyR7UG9zaXRpb24ueH06JHtQb3NpdGlvbi55fWA7XHJcbiAgICByZXR1cm4gcGxhbmUyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlcnJhaW5IZWlnaHQocG9zaXRpb24sIHNlZWQsIGdhaW4sIGRpdmlzb3IsIHNjZW5lKSB7XHJcbiAgICBjb25zdCBmYm0gPSBuZXcgRkJNKHtcclxuICAgICAgICBzZWVkOiBzZWVkLFxyXG4gICAgICAgIHNjYWxlOiAwLjAwNyxcclxuICAgICAgICBvY3RhdmVzOiA2LFxyXG4gICAgICAgIHBlcnNpc3RhbmNlOiAwLjUsXHJcbiAgICAgICAgbGFjdW5hcml0eTogMixcclxuICAgICAgICByZWRpc3RyaWJ1dGlvbjogMixcclxuICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLnRhYmxlKHBvc2l0aW9uKVxyXG4gICAgbGV0IGhlaWdodCA9IGZibS5nZXQyKG5ldyBWZWN0b3IyKHBvc2l0aW9uLnggKiBkaXZpc29yLCBwb3NpdGlvbi56ICogZGl2aXNvcikpICogZ2FpbiAqIDRcclxuICAgIGxldCBjdWJlID0gZGVidWdDdWJlKClcclxuICAgIHNjZW5lLmFkZChjdWJlKVxyXG4gICAgY3ViZS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCwgaGVpZ2h0LCBwb3NpdGlvbi56KVxyXG4gICAgcmV0dXJuIGhlaWdodCAtIDNcclxufSIsImltcG9ydCB7IEdyb3VwLCBNZXNoLCBNZXNoTGFtYmVydE1hdGVyaWFsLCBSYXljYXN0ZXIsIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgcmFkaWFudHMgfSBmcm9tIFwiLi4vLi4vQWxnb3JpdGhtcy9kZWdUb1JhZFwiO1xyXG5pbXBvcnQgeyBfbWVyZ2VNZXNoZXMgfSBmcm9tIFwiLi4vLi4vQWxnb3JpdGhtcy9tZXNoTWVyZ2VyLmpzXCI7XHJcbmltcG9ydCB7IHJhbmRvbVZlY3RvckJldHdlZW5Qb2ludHMyRCB9IGZyb20gXCIuLi8uLi9BbGdvcml0aG1zL1ZlY3RvclV0aWxzXCI7XHJcbmltcG9ydCB7IGFkZEdMQkZpbGUgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL0dMQkxvYWRlclwiO1xyXG5pbXBvcnQgeyBNZXJnZU1lc2hlcyB9IGZyb20gXCIuLi8uLi9Db3JlLUFQSS8zZE1vZGVsSGFuZGxlcnMvTWVzaE1lcmdlci50c1wiO1xyXG5pbXBvcnQgeyBnZXRUZXJyYWluSGVpZ2h0IH0gZnJvbSBcIi4uL1Byb2NlZHVsZVRlcnJhaW5cIjtcclxuXHJcbmZ1bmN0aW9uIHBsYWNlVHJlZSh0cmVlLCBpbnRlcnNlY3RzLCByYW5kb21WZWMpe1xyXG4gICAgbGV0IG5ld1RyZWUgPSB0cmVlLnNjZW5lLmNsb25lKClcclxuICAgIG5ld1RyZWUucm90YXRlWShyYWRpYW50cyhNYXRoLnJhbmRvbSgpKjM2MCkpXHJcbiAgICBsZXQgcG9pbnQgPSBpbnRlcnNlY3RzXHJcbiAgICBuZXdUcmVlLnBvc2l0aW9uLnNldChyYW5kb21WZWMueCwgcG9pbnQsIHJhbmRvbVZlYy56KVxyXG4gICAgcmV0dXJuIHtuZXdUcmVlLCB2ZXRvcjogbmV3IFZlY3RvcjMocmFuZG9tVmVjLngsIHBvaW50LCByYW5kb21WZWMueil9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHZW5lcmF0ZVRyZWVzKG51bSwgc2NlbmUsIHN0YXJ0LCBib3VuZHMsIHNlZWQsIGdhaW4sIGRpdmlzb3Ipe1xyXG4gICAgbGV0IHRyZWUgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgIFwiL0Fzc2V0cy9QaW5lVHJlZS5nbGJcIixcclxuICAgICAgICBzY2VuZVxyXG4gICAgKTtcclxuICAgIGxldCBzbm93eVRyZWUgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgIFwiL0Fzc2V0cy9Tbm93eVBpbmVUcmVlLmdsYlwiLFxyXG4gICAgICAgIHNjZW5lXHJcbiAgICApO1xyXG4gICAgbGV0IHBhbG1UcmVlID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICBcIi9Bc3NldHMvUGFsbV9UcmVlLmdsYlwiLFxyXG4gICAgICAgIHNjZW5lXHJcbiAgICApXHJcblxyXG4gICAgbGV0IGxlYXZlcyA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogMHg2OTRiMzcgfSlcclxuICAgIGxldCB0cnVuayA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogMHgyMTY3MzQgfSlcclxuICAgIHRyZWUuc2NlbmUuY2hpbGRyZW5bMF0ubWF0ZXJpYWwgPSBsZWF2ZXNcclxuICAgIHRyZWUuc2NlbmUuY2hpbGRyZW5bMV0ubWF0ZXJpYWwgPSB0cnVua1xyXG4gICAgc25vd3lUcmVlLnNjZW5lLmNoaWxkcmVuWzBdLm1hdGVyaWFsID0gbGVhdmVzXHJcbiAgICBzbm93eVRyZWUuc2NlbmUuY2hpbGRyZW5bMV0ubWF0ZXJpYWwgPSB0cnVua1xyXG4gICAgc25vd3lUcmVlLnNjZW5lLmNoaWxkcmVuWzJdLm1hdGVyaWFsID0gbmV3IE1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiAweGZmZmZmZiB9KVxyXG5cclxuICAgIHBhbG1UcmVlID0gcGFsbVRyZWUuc2NlbmUuY2hpbGRyZW5bMF1cclxuXHJcblxyXG4gICAgcGFsbVRyZWUuY2hpbGRyZW5bMF0ubWF0ZXJpYWwgPSB0cnVua1xyXG5cclxuXHJcbiAgICBcclxuICAgIGZvcihsZXQgaT0wO2k8bnVtO2krKyl7XHJcbiAgICAgICAgbGV0IHJhbmRvbVZlY3RvciA9IHJhbmRvbVZlY3RvckJldHdlZW5Qb2ludHMyRCggc3RhcnQsIGJvdW5kcylcclxuICAgICAgICByYW5kb21WZWN0b3IueSA9IDUwICAgXHJcblxyXG4gICAgICAgIGxldCBoZWlnaHQgPSBnZXRUZXJyYWluSGVpZ2h0KHJhbmRvbVZlY3Rvciwgc2VlZCwgZ2FpbiwgZGl2aXNvciwgc2NlbmUpXHJcbiAgICAgICAgaWYoaGVpZ2h0ID4gMiAmJiBoZWlnaHQgPCAyMCl7XHJcbiAgICAgICAgICAgIGxldCBwbGFjZVRyZWVPdXQgPSBwbGFjZVRyZWUodHJlZSwgaGVpZ2h0LCByYW5kb21WZWN0b3IpXHJcbiAgICAgICAgICAgIHNjZW5lLmFkZChwbGFjZVRyZWVPdXQubmV3VHJlZSlcclxuICAgICAgICB9ZWxzZSBpZihoZWlnaHQgPCAyICYmIGhlaWdodCA+IDApe1xyXG4gICAgICAgICAgICBsZXQgcGxhY2VUcmVlT3V0ID0gcGxhY2VUcmVlKHRyZWUsIGhlaWdodCwgcmFuZG9tVmVjdG9yKVxyXG4gICAgICAgICAgICBzY2VuZS5hZGQocGxhY2VUcmVlT3V0Lm5ld1RyZWUpXHJcbiAgICAgICAgfWVsc2UgaWYoaGVpZ2h0ID4gMjApe1xyXG4gICAgICAgICAgICAvL21lc2hlcy5wdXNoKHBsYWNlVHJlZShwYWxtVHJlZSwgaW50ZXJzZWN0cykpXHJcbiAgICAgICAgICAgIC8vZ3JvdXAuYWRkKHBsYWNlVHJlZU91dC5uZXdUcmVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==