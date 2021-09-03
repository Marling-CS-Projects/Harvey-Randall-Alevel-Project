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

function GenerateTrees(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8) {
  return _GenerateTrees.apply(this, arguments);
}
_c2 = GenerateTrees;

function _GenerateTrees() {
  _GenerateTrees = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(num, scene, start, bounds, seed, gain, divisor, chunk) {
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
              height = (0,_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_7__.getTerrainHeight)(randomVector, seed, gain, divisor, chunk);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9zdGF0aWNBc3NldHMvdHJlZUJ1aWxkZXIuanMiXSwibmFtZXMiOlsicGxhY2VUcmVlIiwidHJlZSIsImludGVyc2VjdHMiLCJyYW5kb21WZWMiLCJuZXdUcmVlIiwic2NlbmUiLCJjbG9uZSIsInJvdGF0ZVkiLCJyYWRpYW50cyIsIk1hdGgiLCJyYW5kb20iLCJwb2ludCIsInBvc2l0aW9uIiwic2V0IiwieCIsInoiLCJ2ZXRvciIsIlZlY3RvcjMiLCJHZW5lcmF0ZVRyZWVzIiwibnVtIiwic3RhcnQiLCJib3VuZHMiLCJzZWVkIiwiZ2FpbiIsImRpdmlzb3IiLCJjaHVuayIsImFkZEdMQkZpbGUiLCJzbm93eVRyZWUiLCJwYWxtVHJlZSIsImxlYXZlcyIsIk1lc2hMYW1iZXJ0TWF0ZXJpYWwiLCJjb2xvciIsInRydW5rIiwiY2hpbGRyZW4iLCJtYXRlcmlhbCIsImkiLCJyYW5kb21WZWN0b3IiLCJyYW5kb21WZWN0b3JCZXR3ZWVuUG9pbnRzMkQiLCJ5IiwiaGVpZ2h0IiwiZ2V0VGVycmFpbkhlaWdodCIsInBsYWNlVHJlZU91dCIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxJQUFuQixFQUF5QkMsVUFBekIsRUFBcUNDLFNBQXJDLEVBQStDO0FBQzNDLE1BQUlDLE9BQU8sR0FBR0gsSUFBSSxDQUFDSSxLQUFMLENBQVdDLEtBQVgsRUFBZDtBQUNBRixTQUFPLENBQUNHLE9BQVIsQ0FBZ0JDLDhEQUFRLENBQUNDLElBQUksQ0FBQ0MsTUFBTCxLQUFjLEdBQWYsQ0FBeEI7QUFDQSxNQUFJQyxLQUFLLEdBQUdULFVBQVo7QUFDQUUsU0FBTyxDQUFDUSxRQUFSLENBQWlCQyxHQUFqQixDQUFxQlYsU0FBUyxDQUFDVyxDQUEvQixFQUFr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QWVILFlBQWYsQ0FERTtBQUU5Qi9CLHFCQUFLLENBQUNxQyxHQUFOLENBQVVELGFBQVksQ0FBQ3JDLE9BQXZCO0FBQ0gsZUFISyxNQUdBLElBQUdtQyxNQUFNLEdBQUcsRUFBWixFQUFlLENBQ2pCO0FBQ0E7QUFDSDtBQUVKOztBQTdDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0tBQWVyQixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QuNjYwYjQ4MmVjOWJmNjJiOGJiYjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyb3VwLCBNZXNoLCBNZXNoTGFtYmVydE1hdGVyaWFsLCBSYXljYXN0ZXIsIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgcmFkaWFudHMgfSBmcm9tIFwiLi4vLi4vQWxnb3JpdGhtcy9kZWdUb1JhZFwiO1xyXG5pbXBvcnQgeyBfbWVyZ2VNZXNoZXMgfSBmcm9tIFwiLi4vLi4vQWxnb3JpdGhtcy9tZXNoTWVyZ2VyLmpzXCI7XHJcbmltcG9ydCB7IHJhbmRvbVZlY3RvckJldHdlZW5Qb2ludHMyRCB9IGZyb20gXCIuLi8uLi9BbGdvcml0aG1zL1ZlY3RvclV0aWxzXCI7XHJcbmltcG9ydCB7IGFkZEdMQkZpbGUgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL0dMQkxvYWRlclwiO1xyXG5pbXBvcnQgeyBNZXJnZU1lc2hlcyB9IGZyb20gXCIuLi8uLi9Db3JlLUFQSS8zZE1vZGVsSGFuZGxlcnMvTWVzaE1lcmdlci50c1wiO1xyXG5pbXBvcnQgeyBnZXRUZXJyYWluSGVpZ2h0IH0gZnJvbSBcIi4uL1Byb2NlZHVsZVRlcnJhaW5cIjtcclxuXHJcbmZ1bmN0aW9uIHBsYWNlVHJlZSh0cmVlLCBpbnRlcnNlY3RzLCByYW5kb21WZWMpe1xyXG4gICAgbGV0IG5ld1RyZWUgPSB0cmVlLnNjZW5lLmNsb25lKClcclxuICAgIG5ld1RyZWUucm90YXRlWShyYWRpYW50cyhNYXRoLnJhbmRvbSgpKjM2MCkpXHJcbiAgICBsZXQgcG9pbnQgPSBpbnRlcnNlY3RzXHJcbiAgICBuZXdUcmVlLnBvc2l0aW9uLnNldChyYW5kb21WZWMueCwgcG9pbnQsIHJhbmRvbVZlYy56KVxyXG4gICAgcmV0dXJuIHtuZXdUcmVlLCB2ZXRvcjogbmV3IFZlY3RvcjMocmFuZG9tVmVjLngsIHBvaW50LCByYW5kb21WZWMueil9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHZW5lcmF0ZVRyZWVzKG51bSwgc2NlbmUsIHN0YXJ0LCBib3VuZHMsIHNlZWQsIGdhaW4sIGRpdmlzb3IsIGNodW5rKXtcclxuICAgIGxldCB0cmVlID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICBcIi9Bc3NldHMvUGluZVRyZWUuZ2xiXCIsXHJcbiAgICAgICAgc2NlbmVcclxuICAgICk7XHJcbiAgICBsZXQgc25vd3lUcmVlID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICBcIi9Bc3NldHMvU25vd3lQaW5lVHJlZS5nbGJcIixcclxuICAgICAgICBzY2VuZVxyXG4gICAgKTtcclxuICAgIGxldCBwYWxtVHJlZSA9IGF3YWl0IGFkZEdMQkZpbGUoXHJcbiAgICAgICAgXCIvQXNzZXRzL1BhbG1fVHJlZS5nbGJcIixcclxuICAgICAgICBzY2VuZVxyXG4gICAgKVxyXG5cclxuICAgIGxldCBsZWF2ZXMgPSBuZXcgTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IDB4Njk0YjM3IH0pXHJcbiAgICBsZXQgdHJ1bmsgPSBuZXcgTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IDB4MjE2NzM0IH0pXHJcbiAgICB0cmVlLnNjZW5lLmNoaWxkcmVuWzBdLm1hdGVyaWFsID0gbGVhdmVzXHJcbiAgICB0cmVlLnNjZW5lLmNoaWxkcmVuWzFdLm1hdGVyaWFsID0gdHJ1bmtcclxuICAgIHNub3d5VHJlZS5zY2VuZS5jaGlsZHJlblswXS5tYXRlcmlhbCA9IGxlYXZlc1xyXG4gICAgc25vd3lUcmVlLnNjZW5lLmNoaWxkcmVuWzFdLm1hdGVyaWFsID0gdHJ1bmtcclxuICAgIHNub3d5VHJlZS5zY2VuZS5jaGlsZHJlblsyXS5tYXRlcmlhbCA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogMHhmZmZmZmYgfSlcclxuXHJcbiAgICBwYWxtVHJlZSA9IHBhbG1UcmVlLnNjZW5lLmNoaWxkcmVuWzBdXHJcblxyXG5cclxuICAgIHBhbG1UcmVlLmNoaWxkcmVuWzBdLm1hdGVyaWFsID0gdHJ1bmtcclxuXHJcblxyXG4gICAgXHJcbiAgICBmb3IobGV0IGk9MDtpPG51bTtpKyspe1xyXG4gICAgICAgIGxldCByYW5kb21WZWN0b3IgPSByYW5kb21WZWN0b3JCZXR3ZWVuUG9pbnRzMkQoIHN0YXJ0LCBib3VuZHMpXHJcbiAgICAgICAgcmFuZG9tVmVjdG9yLnkgPSA1MCAgIFxyXG5cclxuICAgICAgICBsZXQgaGVpZ2h0ID0gZ2V0VGVycmFpbkhlaWdodChyYW5kb21WZWN0b3IsIHNlZWQsIGdhaW4sIGRpdmlzb3IsIGNodW5rKVxyXG4gICAgICAgIGlmKGhlaWdodCA+IDIgJiYgaGVpZ2h0IDwgMjApe1xyXG4gICAgICAgICAgICBsZXQgcGxhY2VUcmVlT3V0ID0gcGxhY2VUcmVlKHRyZWUsIGhlaWdodCwgcmFuZG9tVmVjdG9yKVxyXG4gICAgICAgICAgICBzY2VuZS5hZGQocGxhY2VUcmVlT3V0Lm5ld1RyZWUpXHJcbiAgICAgICAgfWVsc2UgaWYoaGVpZ2h0IDwgMiAmJiBoZWlnaHQgPiAwKXtcclxuICAgICAgICAgICAgbGV0IHBsYWNlVHJlZU91dCA9IHBsYWNlVHJlZSh0cmVlLCBoZWlnaHQsIHJhbmRvbVZlY3RvcilcclxuICAgICAgICAgICAgc2NlbmUuYWRkKHBsYWNlVHJlZU91dC5uZXdUcmVlKVxyXG4gICAgICAgIH1lbHNlIGlmKGhlaWdodCA+IDIwKXtcclxuICAgICAgICAgICAgLy9tZXNoZXMucHVzaChwbGFjZVRyZWUocGFsbVRyZWUsIGludGVyc2VjdHMpKVxyXG4gICAgICAgICAgICAvL2dyb3VwLmFkZChwbGFjZVRyZWVPdXQubmV3VHJlZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=