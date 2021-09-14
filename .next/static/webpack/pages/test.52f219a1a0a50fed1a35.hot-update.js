self["webpackHotUpdate_N_E"]("pages/test",{

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
    var tree, snowyTree, palmTree, leaves, brighLeaves, trunk, snowy, newpalmTree, trees, i, randomVector, height, placeTreeOut, _placeTreeOut, _placeTreeOut2;

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
            brighLeaves = new three__WEBPACK_IMPORTED_MODULE_8__.MeshLambertMaterial({
              color: 0x6F9940
            });
            trunk = new three__WEBPACK_IMPORTED_MODULE_8__.MeshLambertMaterial({
              color: 0x216734
            });
            snowy = new three__WEBPACK_IMPORTED_MODULE_8__.MeshLambertMaterial({
              color: 0xffffff
            });
            tree.scene.children[0].material = leaves;
            tree.scene.children[1].material = trunk;
            snowyTree.scene.children[0].material = leaves;
            snowyTree.scene.children[1].material = trunk;
            snowyTree.scene.children[2].material = snowy;
            newpalmTree = palmTree.scene.children[0];
            newpalmTree.children[0].material = trunk;
            newpalmTree.children[1].material = brighLeaves;
            newpalmTree.children[2].material = brighLeaves;
            tree.scene.scale.set(3, 3, 3);
            snowyTree.scene.scale.set(3, 3, 3);
            palmTree.scene.scale.set(4, 4, 4);
            trees = new three__WEBPACK_IMPORTED_MODULE_8__.Group();

            for (i = 0; i < num; i++) {
              randomVector = (0,_Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_4__.randomVectorBetweenPoints2D)(start, bounds);
              randomVector.y = 50;
              height = (0,_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_7__.getTerrainHeight)(randomVector, seed, gain, divisor, scene);

              if (height > 80 && height < 200) {
                placeTreeOut = placeTree(snowyTree, height, randomVector);
                trees.add(placeTreeOut.newTree);
              } else if (height < 80 && height > 8) {
                _placeTreeOut = placeTree(tree, height, randomVector);
                trees.add(_placeTreeOut.newTree);
              } else if (height > 5) {
                _placeTreeOut2 = placeTree(palmTree, height, randomVector);
                trees.add(_placeTreeOut2.newTree);
              }
            }

            return _context.abrupt("return", trees);

          case 28:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9zdGF0aWNBc3NldHMvdHJlZUJ1aWxkZXIuanMiXSwibmFtZXMiOlsicGxhY2VUcmVlIiwidHJlZSIsImludGVyc2VjdHMiLCJyYW5kb21WZWMiLCJuZXdUcmVlIiwic2NlbmUiLCJjbG9uZSIsInJvdGF0ZVkiLCJyYWRpYW50cyIsIk1hdGgiLCJyYW5kb20iLCJwb2ludCIsInBvc2l0aW9uIiwic2V0IiwieCIsInoiLCJ2ZXRvciIsIlZlY3RvcjMiLCJHZW5lcmF0ZVRyZWVzIiwibnVtIiwic3RhcnQiLCJib3VuZHMiLCJzZWVkIiwiZ2FpbiIsImRpdmlzb3IiLCJhZGRHTEJGaWxlIiwic25vd3lUcmVlIiwicGFsbVRyZWUiLCJsZWF2ZXMiLCJNZXNoTGFtYmVydE1hdGVyaWFsIiwiY29sb3IiLCJicmlnaExlYXZlcyIsInRydW5rIiwic25vd3kiLCJjaGlsZHJlbiIsIm1hdGVyaWFsIiwibmV3cGFsbVRyZWUiLCJzY2FsZSIsInRyZWVzIiwiR3JvdXAiLCJpIiwicmFuZG9tVmVjdG9yIiwicmFuZG9tVmVjdG9yQmV0d2VlblBvaW50czJEIiwieSIsImhlaWdodCIsImdldFRlcnJhaW5IZWlnaHQiLCJwbGFjZVRyZWVPdXQiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUJDLFVBQXpCLEVBQXFDQyxTQUFyQyxFQUErQztBQUMzQyxNQUFJQyxPQUFPLEdBQUdILElBQUksQ0FBQ0ksS0FBTCxDQUFXQyxLQUFYLEVBQWQ7QUFDQUYsU0FBTyxDQUFDRyxPQUFSLENBQWdCQyw4REFBUSxDQUFDQyxJQUFJLENBQUNDLE1BQUwsS0FBYyxHQUFmLENBQXhCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHVCxVQUFaO0FBQ0FFLFNBQU8s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c3QuNTJmMjE5YTFhMGE1MGZlZDFhMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyb3VwLCBNZXNoLCBNZXNoTGFtYmVydE1hdGVyaWFsLCBSYXljYXN0ZXIsIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgcmFkaWFudHMgfSBmcm9tIFwiLi4vLi4vQWxnb3JpdGhtcy9kZWdUb1JhZFwiO1xyXG5pbXBvcnQgeyBfbWVyZ2VNZXNoZXMgfSBmcm9tIFwiLi4vLi4vQWxnb3JpdGhtcy9tZXNoTWVyZ2VyLmpzXCI7XHJcbmltcG9ydCB7IHJhbmRvbVZlY3RvckJldHdlZW5Qb2ludHMyRCB9IGZyb20gXCIuLi8uLi9BbGdvcml0aG1zL1ZlY3RvclV0aWxzXCI7XHJcbmltcG9ydCB7IGFkZEdMQkZpbGUgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL0dMQkxvYWRlclwiO1xyXG5pbXBvcnQgeyBNZXJnZU1lc2hlcyB9IGZyb20gXCIuLi8uLi9Db3JlLUFQSS8zZE1vZGVsSGFuZGxlcnMvTWVzaE1lcmdlci50c1wiO1xyXG5pbXBvcnQgeyBnZXRUZXJyYWluSGVpZ2h0IH0gZnJvbSBcIi4uL1Byb2NlZHVsZVRlcnJhaW5cIjtcclxuXHJcbmZ1bmN0aW9uIHBsYWNlVHJlZSh0cmVlLCBpbnRlcnNlY3RzLCByYW5kb21WZWMpe1xyXG4gICAgbGV0IG5ld1RyZWUgPSB0cmVlLnNjZW5lLmNsb25lKClcclxuICAgIG5ld1RyZWUucm90YXRlWShyYWRpYW50cyhNYXRoLnJhbmRvbSgpKjM2MCkpXHJcbiAgICBsZXQgcG9pbnQgPSBpbnRlcnNlY3RzXHJcbiAgICBuZXdUcmVlLnBvc2l0aW9uLnNldChyYW5kb21WZWMueCwgcG9pbnQsIHJhbmRvbVZlYy56KVxyXG4gICAgcmV0dXJuIHtuZXdUcmVlLCB2ZXRvcjogbmV3IFZlY3RvcjMocmFuZG9tVmVjLngsIHBvaW50LCByYW5kb21WZWMueil9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHZW5lcmF0ZVRyZWVzKG51bSwgc2NlbmUsIHN0YXJ0LCBib3VuZHMsIHNlZWQsIGdhaW4sIGRpdmlzb3Ipe1xyXG4gICAgbGV0IHRyZWUgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgIFwiL0Fzc2V0cy9QaW5lVHJlZS5nbGJcIixcclxuICAgICAgICBzY2VuZVxyXG4gICAgKTtcclxuICAgIGxldCBzbm93eVRyZWUgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgIFwiL0Fzc2V0cy9Tbm93eVBpbmVUcmVlLmdsYlwiLFxyXG4gICAgICAgIHNjZW5lXHJcbiAgICApO1xyXG4gICAgbGV0IHBhbG1UcmVlID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICBcIi9Bc3NldHMvUGFsbV9UcmVlLmdsYlwiLFxyXG4gICAgICAgIHNjZW5lXHJcbiAgICApXHJcblxyXG4gICAgbGV0IGxlYXZlcyA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogMHg2OTRiMzcgfSlcclxuICAgIGxldCBicmlnaExlYXZlcyA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogMHg2Rjk5NDAgfSlcclxuICAgIGxldCB0cnVuayA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogMHgyMTY3MzQgfSlcclxuICAgIGxldCBzbm93eSA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogMHhmZmZmZmYgfSlcclxuICAgIHRyZWUuc2NlbmUuY2hpbGRyZW5bMF0ubWF0ZXJpYWwgPSBsZWF2ZXNcclxuICAgIHRyZWUuc2NlbmUuY2hpbGRyZW5bMV0ubWF0ZXJpYWwgPSB0cnVua1xyXG4gICAgc25vd3lUcmVlLnNjZW5lLmNoaWxkcmVuWzBdLm1hdGVyaWFsID0gbGVhdmVzXHJcbiAgICBzbm93eVRyZWUuc2NlbmUuY2hpbGRyZW5bMV0ubWF0ZXJpYWwgPSB0cnVua1xyXG4gICAgc25vd3lUcmVlLnNjZW5lLmNoaWxkcmVuWzJdLm1hdGVyaWFsID0gc25vd3lcclxuXHJcbiAgICBsZXQgbmV3cGFsbVRyZWUgPSBwYWxtVHJlZS5zY2VuZS5jaGlsZHJlblswXVxyXG5cclxuXHJcbiAgICBuZXdwYWxtVHJlZS5jaGlsZHJlblswXS5tYXRlcmlhbCA9IHRydW5rXHJcbiAgICBuZXdwYWxtVHJlZS5jaGlsZHJlblsxXS5tYXRlcmlhbCA9IGJyaWdoTGVhdmVzXHJcbiAgICBuZXdwYWxtVHJlZS5jaGlsZHJlblsyXS5tYXRlcmlhbCA9IGJyaWdoTGVhdmVzXHJcblxyXG4gICAgdHJlZS5zY2VuZS5zY2FsZS5zZXQoMywzLDMpO1xyXG4gICAgc25vd3lUcmVlLnNjZW5lLnNjYWxlLnNldCgzLDMsMyk7XHJcbiAgICBwYWxtVHJlZS5zY2VuZS5zY2FsZS5zZXQoNCw0LDQpO1xyXG5cclxuICAgIGxldCB0cmVlcyA9IG5ldyBHcm91cCgpXHJcbiAgICBcclxuICAgIGZvcihsZXQgaT0wO2k8bnVtO2krKyl7XHJcbiAgICAgICAgbGV0IHJhbmRvbVZlY3RvciA9IHJhbmRvbVZlY3RvckJldHdlZW5Qb2ludHMyRCggc3RhcnQsIGJvdW5kcylcclxuICAgICAgICByYW5kb21WZWN0b3IueSA9IDUwICAgXHJcblxyXG4gICAgICAgIGxldCBoZWlnaHQgPSBnZXRUZXJyYWluSGVpZ2h0KHJhbmRvbVZlY3Rvciwgc2VlZCwgZ2FpbiwgZGl2aXNvciwgc2NlbmUpXHJcbiAgICAgICAgaWYoaGVpZ2h0ID4gODAgJiYgaGVpZ2h0IDwgMjAwKXtcclxuICAgICAgICAgICAgbGV0IHBsYWNlVHJlZU91dCA9IHBsYWNlVHJlZShzbm93eVRyZWUsIGhlaWdodCwgcmFuZG9tVmVjdG9yKVxyXG4gICAgICAgICAgICB0cmVlcy5hZGQocGxhY2VUcmVlT3V0Lm5ld1RyZWUpXHJcbiAgICAgICAgfWVsc2UgaWYoaGVpZ2h0IDwgODAgJiYgaGVpZ2h0ID4gOCl7XHJcbiAgICAgICAgICAgIGxldCBwbGFjZVRyZWVPdXQgPSBwbGFjZVRyZWUodHJlZSwgaGVpZ2h0LCByYW5kb21WZWN0b3IpXHJcbiAgICAgICAgICAgIHRyZWVzLmFkZChwbGFjZVRyZWVPdXQubmV3VHJlZSlcclxuICAgICAgICB9ZWxzZSBpZihoZWlnaHQgPiA1ICl7XHJcbiAgICAgICAgICAgIGxldCBwbGFjZVRyZWVPdXQgPSBwbGFjZVRyZWUocGFsbVRyZWUsIGhlaWdodCwgcmFuZG9tVmVjdG9yKVxyXG4gICAgICAgICAgICB0cmVlcy5hZGQocGxhY2VUcmVlT3V0Lm5ld1RyZWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cmVlc1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=