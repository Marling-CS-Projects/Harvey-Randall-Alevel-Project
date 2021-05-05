webpackHotUpdate_N_E("pages/test",{

/***/ "./components/gameFundalmentals/ProceduleTerrain.js":
/*!**********************************************************!*\
  !*** ./components/gameFundalmentals/ProceduleTerrain.js ***!
  \**********************************************************/
/*! exports provided: GenerateTerrain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GenerateTerrain\", function() { return GenerateTerrain; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n// Written By Harvey Randall \\\\\n\n\nvar SimplexNoise = __webpack_require__(/*! simplex-noise */ \"./node_modules/simplex-noise/simplex-noise.js\");\n\nfunction GenerateTerrain(seed, SceneToGet) {\n  //------------[MAIN FUNCTION VARIABLES]------------\\\\\n  var simplex = new SimplexNoise(seed);\n  var geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"PlaneBufferGeometry\"](500, 500, 1000, 1000);\n  var colours = []; //------------[Edit the Geomtry Accordingly]------------\\\\\n\n  for (var i = 0, l = geometry.attributes.position.count; i < l; i++) {\n    // Get Data position\n    var x = geometry.attributes.position.array[i * 3] / 128;\n    var y = geometry.attributes.position.array[i * 3 + 1] / 128; // Check Height from Perlin Noise Generator\n\n    var height = simplex.noise2D(x, y) * 30; // Set the height accordingly\n\n    geometry.attributes.position.array[i * 3 + 2] = height; // Update Vertice colours accordinly\n\n    if (height > 23) {\n      colours.push(1, 1, 1);\n    } else if (height > 5) {\n      colours.push(0.56, 0.54, 0.48);\n    } else if (height < -20) {\n      colours.push(0.501, 0.772, 0.87);\n    } else {\n      colours.push(0.56, 0.68, 0.166);\n    }\n  } //------------[Create Material]------------\\\\\n\n\n  var material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshPhongMaterial\"]({\n    vertexColors: colours,\n    reflectivity: 0,\n    roughness: 2,\n    flatShading: true\n  }); //------------[Create MEsh]------------\\\\\n\n  var plane2 = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geometry, material);\n  plane2.receiveShadow = true;\n  plane2.castShadow = true;\n  plane2.position.y = -3;\n  plane2.rotateX(Math.PI / 2 + Math.PI); //------------[Edit colour attribute]------------\\\\\n\n  geometry.setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_0__[\"BufferAttribute\"](new Float32Array(colours), 3));\n  geometry.computeVertexNormals(); //------------[Add to Base Scene]------------\\\\\n\n  SceneToGet.add(plane2);\n}\n_c = GenerateTerrain;\n\nvar _c;\n\n$RefreshReg$(_c, \"GenerateTerrain\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9Qcm9jZWR1bGVUZXJyYWluLmpzPzU1N2IiXSwibmFtZXMiOlsiU2ltcGxleE5vaXNlIiwicmVxdWlyZSIsIkdlbmVyYXRlVGVycmFpbiIsInNlZWQiLCJTY2VuZVRvR2V0Iiwic2ltcGxleCIsImdlb21ldHJ5IiwiUGxhbmVCdWZmZXJHZW9tZXRyeSIsImNvbG91cnMiLCJpIiwibCIsImF0dHJpYnV0ZXMiLCJwb3NpdGlvbiIsImNvdW50IiwieCIsImFycmF5IiwieSIsImhlaWdodCIsIm5vaXNlMkQiLCJwdXNoIiwibWF0ZXJpYWwiLCJNZXNoUGhvbmdNYXRlcmlhbCIsInZlcnRleENvbG9ycyIsInJlZmxlY3Rpdml0eSIsInJvdWdobmVzcyIsImZsYXRTaGFkaW5nIiwicGxhbmUyIiwiTWVzaCIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93Iiwicm90YXRlWCIsIk1hdGgiLCJQSSIsInNldEF0dHJpYnV0ZSIsIkJ1ZmZlckF0dHJpYnV0ZSIsIkZsb2F0MzJBcnJheSIsImNvbXB1dGVWZXJ0ZXhOb3JtYWxzIiwiYWRkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUNBLElBQUlBLFlBQVksR0FBR0MsbUJBQU8sQ0FBQyxvRUFBRCxDQUExQjs7QUFFTyxTQUFTQyxlQUFULENBQXlCQyxJQUF6QixFQUErQkMsVUFBL0IsRUFBMkM7QUFFOUM7QUFDQSxNQUFNQyxPQUFPLEdBQUcsSUFBSUwsWUFBSixDQUFpQkcsSUFBakIsQ0FBaEI7QUFDQSxNQUFJRyxRQUFRLEdBQUcsSUFBSUMseURBQUosQ0FBd0IsR0FBeEIsRUFBNkIsR0FBN0IsRUFBa0MsSUFBbEMsRUFBd0MsSUFBeEMsQ0FBZjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxFQUFkLENBTDhDLENBTzlDOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQVIsRUFBV0MsQ0FBQyxHQUFHSixRQUFRLENBQUNLLFVBQVQsQ0FBb0JDLFFBQXBCLENBQTZCQyxLQUFqRCxFQUF3REosQ0FBQyxHQUFHQyxDQUE1RCxFQUErREQsQ0FBQyxFQUFoRSxFQUFvRTtBQUNoRTtBQUNBLFFBQUlLLENBQUMsR0FBR1IsUUFBUSxDQUFDSyxVQUFULENBQW9CQyxRQUFwQixDQUE2QkcsS0FBN0IsQ0FBb0NOLENBQUMsR0FBRyxDQUF4QyxJQUE4QyxHQUF0RDtBQUNBLFFBQUlPLENBQUMsR0FBR1YsUUFBUSxDQUFDSyxVQUFULENBQW9CQyxRQUFwQixDQUE2QkcsS0FBN0IsQ0FBb0NOLENBQUMsR0FBRyxDQUFMLEdBQVUsQ0FBN0MsSUFBa0QsR0FBMUQsQ0FIZ0UsQ0FLaEU7O0FBQ0EsUUFBSVEsTUFBTSxHQUFHWixPQUFPLENBQUNhLE9BQVIsQ0FBZ0JKLENBQWhCLEVBQW1CRSxDQUFuQixJQUF3QixFQUFyQyxDQU5nRSxDQU9oRTs7QUFDQVYsWUFBUSxDQUFDSyxVQUFULENBQW9CQyxRQUFwQixDQUE2QkcsS0FBN0IsQ0FBb0NOLENBQUMsR0FBRyxDQUFMLEdBQVUsQ0FBN0MsSUFBa0RRLE1BQWxELENBUmdFLENBVWhFOztBQUNBLFFBQUlBLE1BQU0sR0FBRyxFQUFiLEVBQWlCO0FBQ2JULGFBQU8sQ0FBQ1csSUFBUixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDSCxLQUZELE1BR0ssSUFBSUYsTUFBTSxHQUFHLENBQWIsRUFBZ0I7QUFDakJULGFBQU8sQ0FBQ1csSUFBUixDQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekI7QUFDSCxLQUZJLE1BR0EsSUFBSUYsTUFBTSxHQUFHLENBQUMsRUFBZCxFQUFrQjtBQUNuQlQsYUFBTyxDQUFDVyxJQUFSLENBQWEsS0FBYixFQUFvQixLQUFwQixFQUEyQixJQUEzQjtBQUNILEtBRkksTUFHQTtBQUNEWCxhQUFPLENBQUNXLElBQVIsQ0FBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLEtBQXpCO0FBQ0g7QUFDSixHQS9CNkMsQ0FpQzlDOzs7QUFDQSxNQUFJQyxRQUFRLEdBQUcsSUFBSUMsdURBQUosQ0FBc0I7QUFDakNDLGdCQUFZLEVBQUVkLE9BRG1CO0FBRWpDZSxnQkFBWSxFQUFFLENBRm1CO0FBR2pDQyxhQUFTLEVBQUUsQ0FIc0I7QUFJakNDLGVBQVcsRUFBRTtBQUpvQixHQUF0QixDQUFmLENBbEM4QyxDQXlDOUM7O0FBQ0EsTUFBSUMsTUFBTSxHQUFHLElBQUlDLDBDQUFKLENBQVNyQixRQUFULEVBQW1CYyxRQUFuQixDQUFiO0FBQ0FNLFFBQU0sQ0FBQ0UsYUFBUCxHQUF1QixJQUF2QjtBQUNBRixRQUFNLENBQUNHLFVBQVAsR0FBb0IsSUFBcEI7QUFDQUgsUUFBTSxDQUFDZCxRQUFQLENBQWdCSSxDQUFoQixHQUFvQixDQUFDLENBQXJCO0FBQ0FVLFFBQU0sQ0FBQ0ksT0FBUCxDQUFnQkMsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBWCxHQUFnQkQsSUFBSSxDQUFDQyxFQUFwQyxFQTlDOEMsQ0FnRDlDOztBQUNBMUIsVUFBUSxDQUFDMkIsWUFBVCxDQUFzQixPQUF0QixFQUErQixJQUFJQyxxREFBSixDQUFvQixJQUFJQyxZQUFKLENBQWlCM0IsT0FBakIsQ0FBcEIsRUFBK0MsQ0FBL0MsQ0FBL0I7QUFDQUYsVUFBUSxDQUFDOEIsb0JBQVQsR0FsRDhDLENBcUQ5Qzs7QUFDQWhDLFlBQVUsQ0FBQ2lDLEdBQVgsQ0FBZVgsTUFBZjtBQUNIO0tBdkRleEIsZSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvUHJvY2VkdWxlVGVycmFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxuXG5pbXBvcnQgeyBCdWZmZXJBdHRyaWJ1dGUsIE1lc2gsIE1lc2hQaG9uZ01hdGVyaWFsLCBQbGFuZUJ1ZmZlckdlb21ldHJ5LCB9IGZyb20gXCJ0aHJlZVwiXG52YXIgU2ltcGxleE5vaXNlID0gcmVxdWlyZSgnc2ltcGxleC1ub2lzZScpO1xuXG5leHBvcnQgZnVuY3Rpb24gR2VuZXJhdGVUZXJyYWluKHNlZWQsIFNjZW5lVG9HZXQpIHtcblxuICAgIC8vLS0tLS0tLS0tLS0tW01BSU4gRlVOQ1RJT04gVkFSSUFCTEVTXS0tLS0tLS0tLS0tLVxcXFxcbiAgICBjb25zdCBzaW1wbGV4ID0gbmV3IFNpbXBsZXhOb2lzZShzZWVkKVxuICAgIGxldCBnZW9tZXRyeSA9IG5ldyBQbGFuZUJ1ZmZlckdlb21ldHJ5KDUwMCwgNTAwLCAxMDAwLCAxMDAwKVxuICAgIGxldCBjb2xvdXJzID0gW11cblxuICAgIC8vLS0tLS0tLS0tLS0tW0VkaXQgdGhlIEdlb210cnkgQWNjb3JkaW5nbHldLS0tLS0tLS0tLS0tXFxcXFxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5jb3VudDsgaSA8IGw7IGkrKykge1xuICAgICAgICAvLyBHZXQgRGF0YSBwb3NpdGlvblxuICAgICAgICBsZXQgeCA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlbKGkgKiAzKV0gLyAxMjhcbiAgICAgICAgbGV0IHkgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5WyhpICogMykgKyAxXSAvIDEyOFxuXG4gICAgICAgIC8vIENoZWNrIEhlaWdodCBmcm9tIFBlcmxpbiBOb2lzZSBHZW5lcmF0b3JcbiAgICAgICAgbGV0IGhlaWdodCA9IHNpbXBsZXgubm9pc2UyRCh4LCB5KSAqIDMwXG4gICAgICAgIC8vIFNldCB0aGUgaGVpZ2h0IGFjY29yZGluZ2x5XG4gICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlbKGkgKiAzKSArIDJdID0gaGVpZ2h0XG5cbiAgICAgICAgLy8gVXBkYXRlIFZlcnRpY2UgY29sb3VycyBhY2NvcmRpbmx5XG4gICAgICAgIGlmIChoZWlnaHQgPiAyMykge1xuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDEsIDEsIDEpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaGVpZ2h0ID4gNSkge1xuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTYsIDAuNTQsIDAuNDgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaGVpZ2h0IDwgLTIwKSB7XG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMC41MDEsIDAuNzcyLCAwLjg3KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTYsIDAuNjgsIDAuMTY2KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8tLS0tLS0tLS0tLS1bQ3JlYXRlIE1hdGVyaWFsXS0tLS0tLS0tLS0tLVxcXFxcbiAgICB2YXIgbWF0ZXJpYWwgPSBuZXcgTWVzaFBob25nTWF0ZXJpYWwoe1xuICAgICAgICB2ZXJ0ZXhDb2xvcnM6IGNvbG91cnMsXG4gICAgICAgIHJlZmxlY3Rpdml0eTogMCxcbiAgICAgICAgcm91Z2huZXNzOiAyLFxuICAgICAgICBmbGF0U2hhZGluZzogdHJ1ZSxcbiAgICB9KTtcblxuICAgIC8vLS0tLS0tLS0tLS0tW0NyZWF0ZSBNRXNoXS0tLS0tLS0tLS0tLVxcXFxcbiAgICB2YXIgcGxhbmUyID0gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICBwbGFuZTIucmVjZWl2ZVNoYWRvdyA9IHRydWVcbiAgICBwbGFuZTIuY2FzdFNoYWRvdyA9IHRydWVcbiAgICBwbGFuZTIucG9zaXRpb24ueSA9IC0zXG4gICAgcGxhbmUyLnJvdGF0ZVgoKE1hdGguUEkgLyAyKSArIE1hdGguUEkpXG5cbiAgICAvLy0tLS0tLS0tLS0tLVtFZGl0IGNvbG91ciBhdHRyaWJ1dGVdLS0tLS0tLS0tLS0tXFxcXFxuICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sb3VycyksIDMpKTtcbiAgICBnZW9tZXRyeS5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICAgIFxuICAgIFxuICAgIC8vLS0tLS0tLS0tLS0tW0FkZCB0byBCYXNlIFNjZW5lXS0tLS0tLS0tLS0tLVxcXFxcbiAgICBTY2VuZVRvR2V0LmFkZChwbGFuZTIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/gameFundalmentals/ProceduleTerrain.js\n");

/***/ })

})