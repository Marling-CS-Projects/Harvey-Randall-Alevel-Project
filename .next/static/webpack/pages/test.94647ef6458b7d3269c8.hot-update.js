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
              height = (0,_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_7__.getTerrainHeight)(randomVector, seed, gain, divisor);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9zdGF0aWNBc3NldHMvdHJlZUJ1aWxkZXIuanMiXSwibmFtZXMiOlsicGxhY2VUcmVlIiwidHJlZSIsImludGVyc2VjdHMiLCJyYW5kb21WZWMiLCJuZXdUcmVlIiwic2NlbmUiLCJjbG9uZSIsInJvdGF0ZVkiLCJyYWRpYW50cyIsIk1hdGgiLCJyYW5kb20iLCJwb2ludCIsInBvc2l0aW9uIiwic2V0IiwieCIsInoiLCJ2ZXRvciIsIlZlY3RvcjMiLCJHZW5lcmF0ZVRyZWVzIiwibnVtIiwic3RhcnQiLCJib3VuZHMiLCJzZWVkIiwiZ2FpbiIsImRpdmlzb3IiLCJjaHVuayIsImFkZEdMQkZpbGUiLCJzbm93eVRyZWUiLCJwYWxtVHJlZSIsImxlYXZlcyIsIk1lc2hMYW1iZXJ0TWF0ZXJpYWwiLCJjb2xvciIsInRydW5rIiwiY2hpbGRyZW4iLCJtYXRlcmlhbCIsImkiLCJyYW5kb21WZWN0b3IiLCJyYW5kb21WZWN0b3JCZXR3ZWVuUG9pbnRzMkQiLCJ5IiwiaGVpZ2h0IiwiZ2V0VGVycmFpbkhlaWdodCIsInBsYWNlVHJlZU91dCIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxJQUFuQixFQUF5QkMsVUFBekIsRUFBcUNDLFNBQXJDLEVBQStDO0FBQzNDLE1BQUlDLE9BQU8sR0FBR0gsSUFBSSxDQUFDSSxLQUFMLENBQVdDLEtBQVgsRUFBZDtBQUNBRixTQUFPLENBQUNHLE9BQVIsQ0FBZ0JDLDhEQUFRLENBQUNDLElBQUksQ0FBQ0MsTUFBTCxLQUFjLEdBQWYsQ0FBeEI7QUFDQSxNQUFJQyxLQUFLLEdBQUdULFVBQVo7QUFDQUUsU0FBTyxDQUFDUSxRQUFSLENBQWlCQyxHQUFqQixDQUFxQlYsU0FBUyxDQUFDVyxDQUEvQixFQUFr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O0FBRTlCL0IscUJBQUssQ0FBQ3FDLEdBQU4sQ0FBVUQsYUFBWSxDQUFDckMsT0FBdkI7QUFDSCxlQUhLLE1BR0EsSUFBR21DLE1BQU0sR0FBRyxFQUFaLEVBQWUsQ0FDakI7QUFDQTtBQUNIO0FBRUo7O0FBN0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7S0FBZXJCLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC45NDY0N2VmNjQ1OGI3ZDMyNjljOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JvdXAsIE1lc2gsIE1lc2hMYW1iZXJ0TWF0ZXJpYWwsIFJheWNhc3RlciwgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyByYWRpYW50cyB9IGZyb20gXCIuLi8uLi9BbGdvcml0aG1zL2RlZ1RvUmFkXCI7XHJcbmltcG9ydCB7IF9tZXJnZU1lc2hlcyB9IGZyb20gXCIuLi8uLi9BbGdvcml0aG1zL21lc2hNZXJnZXIuanNcIjtcclxuaW1wb3J0IHsgcmFuZG9tVmVjdG9yQmV0d2VlblBvaW50czJEIH0gZnJvbSBcIi4uLy4uL0FsZ29yaXRobXMvVmVjdG9yVXRpbHNcIjtcclxuaW1wb3J0IHsgYWRkR0xCRmlsZSB9IGZyb20gXCIuLi8uLi9Db3JlLUFQSS8zZE1vZGVsSGFuZGxlcnMvR0xCTG9hZGVyXCI7XHJcbmltcG9ydCB7IE1lcmdlTWVzaGVzIH0gZnJvbSBcIi4uLy4uL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9NZXNoTWVyZ2VyLnRzXCI7XHJcbmltcG9ydCB7IGdldFRlcnJhaW5IZWlnaHQgfSBmcm9tIFwiLi4vUHJvY2VkdWxlVGVycmFpblwiO1xyXG5cclxuZnVuY3Rpb24gcGxhY2VUcmVlKHRyZWUsIGludGVyc2VjdHMsIHJhbmRvbVZlYyl7XHJcbiAgICBsZXQgbmV3VHJlZSA9IHRyZWUuc2NlbmUuY2xvbmUoKVxyXG4gICAgbmV3VHJlZS5yb3RhdGVZKHJhZGlhbnRzKE1hdGgucmFuZG9tKCkqMzYwKSlcclxuICAgIGxldCBwb2ludCA9IGludGVyc2VjdHNcclxuICAgIG5ld1RyZWUucG9zaXRpb24uc2V0KHJhbmRvbVZlYy54LCBwb2ludCwgcmFuZG9tVmVjLnopXHJcbiAgICByZXR1cm4ge25ld1RyZWUsIHZldG9yOiBuZXcgVmVjdG9yMyhyYW5kb21WZWMueCwgcG9pbnQsIHJhbmRvbVZlYy56KX1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdlbmVyYXRlVHJlZXMobnVtLCBzY2VuZSwgc3RhcnQsIGJvdW5kcywgc2VlZCwgZ2FpbiwgZGl2aXNvciwgY2h1bmspe1xyXG4gICAgbGV0IHRyZWUgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgIFwiL0Fzc2V0cy9QaW5lVHJlZS5nbGJcIixcclxuICAgICAgICBzY2VuZVxyXG4gICAgKTtcclxuICAgIGxldCBzbm93eVRyZWUgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgIFwiL0Fzc2V0cy9Tbm93eVBpbmVUcmVlLmdsYlwiLFxyXG4gICAgICAgIHNjZW5lXHJcbiAgICApO1xyXG4gICAgbGV0IHBhbG1UcmVlID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICBcIi9Bc3NldHMvUGFsbV9UcmVlLmdsYlwiLFxyXG4gICAgICAgIHNjZW5lXHJcbiAgICApXHJcblxyXG4gICAgbGV0IGxlYXZlcyA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogMHg2OTRiMzcgfSlcclxuICAgIGxldCB0cnVuayA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogMHgyMTY3MzQgfSlcclxuICAgIHRyZWUuc2NlbmUuY2hpbGRyZW5bMF0ubWF0ZXJpYWwgPSBsZWF2ZXNcclxuICAgIHRyZWUuc2NlbmUuY2hpbGRyZW5bMV0ubWF0ZXJpYWwgPSB0cnVua1xyXG4gICAgc25vd3lUcmVlLnNjZW5lLmNoaWxkcmVuWzBdLm1hdGVyaWFsID0gbGVhdmVzXHJcbiAgICBzbm93eVRyZWUuc2NlbmUuY2hpbGRyZW5bMV0ubWF0ZXJpYWwgPSB0cnVua1xyXG4gICAgc25vd3lUcmVlLnNjZW5lLmNoaWxkcmVuWzJdLm1hdGVyaWFsID0gbmV3IE1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiAweGZmZmZmZiB9KVxyXG5cclxuICAgIHBhbG1UcmVlID0gcGFsbVRyZWUuc2NlbmUuY2hpbGRyZW5bMF1cclxuXHJcblxyXG4gICAgcGFsbVRyZWUuY2hpbGRyZW5bMF0ubWF0ZXJpYWwgPSB0cnVua1xyXG5cclxuXHJcbiAgICBcclxuICAgIGZvcihsZXQgaT0wO2k8bnVtO2krKyl7XHJcbiAgICAgICAgbGV0IHJhbmRvbVZlY3RvciA9IHJhbmRvbVZlY3RvckJldHdlZW5Qb2ludHMyRCggc3RhcnQsIGJvdW5kcylcclxuICAgICAgICByYW5kb21WZWN0b3IueSA9IDUwICAgXHJcblxyXG4gICAgICAgIGxldCBoZWlnaHQgPSBnZXRUZXJyYWluSGVpZ2h0KHJhbmRvbVZlY3Rvciwgc2VlZCwgZ2FpbiwgZGl2aXNvcilcclxuICAgICAgICBpZihoZWlnaHQgPiAyICYmIGhlaWdodCA8IDIwKXtcclxuICAgICAgICAgICAgbGV0IHBsYWNlVHJlZU91dCA9IHBsYWNlVHJlZSh0cmVlLCBoZWlnaHQsIHJhbmRvbVZlY3RvcilcclxuICAgICAgICAgICAgc2NlbmUuYWRkKHBsYWNlVHJlZU91dC5uZXdUcmVlKVxyXG4gICAgICAgIH1lbHNlIGlmKGhlaWdodCA8IDIgJiYgaGVpZ2h0ID4gMCl7XHJcbiAgICAgICAgICAgIGxldCBwbGFjZVRyZWVPdXQgPSBwbGFjZVRyZWUodHJlZSwgaGVpZ2h0LCByYW5kb21WZWN0b3IpXHJcbiAgICAgICAgICAgIHNjZW5lLmFkZChwbGFjZVRyZWVPdXQubmV3VHJlZSlcclxuICAgICAgICB9ZWxzZSBpZihoZWlnaHQgPiAyMCl7XHJcbiAgICAgICAgICAgIC8vbWVzaGVzLnB1c2gocGxhY2VUcmVlKHBhbG1UcmVlLCBpbnRlcnNlY3RzKSlcclxuICAgICAgICAgICAgLy9ncm91cC5hZGQocGxhY2VUcmVlT3V0Lm5ld1RyZWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9