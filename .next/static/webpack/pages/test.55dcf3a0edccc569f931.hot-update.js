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
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Algorithms/degToRad */ "./components/Algorithms/degToRad.js");
/* harmony import */ var _Algorithms_meshMerger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Algorithms/meshMerger.js */ "./components/Algorithms/meshMerger.js");
/* harmony import */ var _Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Algorithms/VectorUtils */ "./components/Algorithms/VectorUtils.js");
/* harmony import */ var _Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Core-API/3dModelHandlers/GLBLoader */ "./components/Core-API/3dModelHandlers/GLBLoader.js");
/* harmony import */ var _Core_API_3dModelHandlers_MeshMerger_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Core-API/3dModelHandlers/MeshMerger.ts */ "./components/Core-API/3dModelHandlers/MeshMerger.ts");
/* module decorator */ module = __webpack_require__.hmd(module);









function placeTree(tree, intersects) {
  var newTree = tree.scene.clone();
  newTree.rotateY((0,_Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_2__.radiants)(Math.random() * 360));
  var point = intersects[0].point;
  newTree.position.set(point.x, point.y, point.z);
  return {
    newTree: newTree,
    vetor: new three__WEBPACK_IMPORTED_MODULE_7__.Vector3(point.x, point.y, point.z)
  };
}

function GenerateTrees(_x, _x2, _x3, _x4, _x5) {
  return _GenerateTrees.apply(this, arguments);
}
_c2 = GenerateTrees;

function _GenerateTrees() {
  _GenerateTrees = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(num, scene, start, bounds, terrain) {
    var tree, snowyTree, palmTree, leaves, trunk, group, raycaster, meshes, location, i, _intersects$, _intersects$2, _intersects$3, _intersects$4, _intersects$5, randomVector, intersects, _placeTreeOut, _placeTreeOut2, meshesToSend, locationToSend, geo;

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
            leaves = new three__WEBPACK_IMPORTED_MODULE_7__.MeshLambertMaterial({
              color: 0x694b37
            });
            trunk = new three__WEBPACK_IMPORTED_MODULE_7__.MeshLambertMaterial({
              color: 0x216734
            });
            tree.scene.children[0].material = leaves;
            tree.scene.children[1].material = trunk;
            snowyTree.scene.children[0].material = leaves;
            snowyTree.scene.children[1].material = trunk;
            snowyTree.scene.children[2].material = new three__WEBPACK_IMPORTED_MODULE_7__.MeshLambertMaterial({
              color: 0xffffff
            });
            console.log(palmTree);
            palmTree = palmTree.scene.children[0];
            console.log(palmTree);
            console.log(snowyTree);
            palmTree.children[0].material = trunk;
            group = new three__WEBPACK_IMPORTED_MODULE_7__.Group();
            raycaster = new three__WEBPACK_IMPORTED_MODULE_7__.Raycaster();
            meshes = [];
            location = [];

            for (i = 0; i < num; i++) {
              randomVector = (0,_Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_4__.randomVectorBetweenPoints2D)(start, bounds);
              randomVector.y = 50;
              raycaster.set(randomVector, new three__WEBPACK_IMPORTED_MODULE_7__.Vector3(0, -1, 0));
              intersects = raycaster.intersectObjects([terrain]);

              if (intersects[0] !== undefined && ((_intersects$ = intersects[0]) === null || _intersects$ === void 0 ? void 0 : _intersects$.point.y) > 2 && ((_intersects$2 = intersects[0]) === null || _intersects$2 === void 0 ? void 0 : _intersects$2.point.y) < 20) {
                _placeTreeOut = placeTree(tree, intersects);
                meshes.push(_placeTreeOut.newTree);
                location.push(_placeTreeOut.vetor);
                group.push(_placeTreeOut.newTree);
              } else if (intersects[0] !== undefined && ((_intersects$3 = intersects[0]) === null || _intersects$3 === void 0 ? void 0 : _intersects$3.point.y) < 2 && ((_intersects$4 = intersects[0]) === null || _intersects$4 === void 0 ? void 0 : _intersects$4.point.y) > 0) {
                _placeTreeOut2 = placeTree(tree, intersects);
                meshes.push(_placeTreeOut2.newTree);
                location.push(_placeTreeOut2.vetor);
                group.push(_placeTreeOut2.newTree);
              } else if (intersects[0] !== undefined && ((_intersects$5 = intersects[0]) === null || _intersects$5 === void 0 ? void 0 : _intersects$5.point.y) > 20) {
                meshes.push(placeTree(palmTree, intersects));
                group.push(placeTreeOut.newTree);
              }
            } //let geo = _mergeMeshes(meshes, true)
            //scene.add(geo)


            meshesToSend = [];
            locationToSend = [];
            meshes.forEach(function (e, k) {
              e.children.forEach(function (i) {
                meshesToSend.push(i.geometry);
                locationToSend.push(location[k]);
                group;
              });
            });
            geo = (0,_Core_API_3dModelHandlers_MeshMerger_ts__WEBPACK_IMPORTED_MODULE_6__.MergeMeshes)(meshesToSend, locationToSend);
            scene.add(group);

          case 31:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9zdGF0aWNBc3NldHMvdHJlZUJ1aWxkZXIuanMiXSwibmFtZXMiOlsicGxhY2VUcmVlIiwidHJlZSIsImludGVyc2VjdHMiLCJuZXdUcmVlIiwic2NlbmUiLCJjbG9uZSIsInJvdGF0ZVkiLCJyYWRpYW50cyIsIk1hdGgiLCJyYW5kb20iLCJwb2ludCIsInBvc2l0aW9uIiwic2V0IiwieCIsInkiLCJ6IiwidmV0b3IiLCJWZWN0b3IzIiwiR2VuZXJhdGVUcmVlcyIsIm51bSIsInN0YXJ0IiwiYm91bmRzIiwidGVycmFpbiIsImFkZEdMQkZpbGUiLCJzbm93eVRyZWUiLCJwYWxtVHJlZSIsImxlYXZlcyIsIk1lc2hMYW1iZXJ0TWF0ZXJpYWwiLCJjb2xvciIsInRydW5rIiwiY2hpbGRyZW4iLCJtYXRlcmlhbCIsImNvbnNvbGUiLCJsb2ciLCJncm91cCIsIkdyb3VwIiwicmF5Y2FzdGVyIiwiUmF5Y2FzdGVyIiwibWVzaGVzIiwibG9jYXRpb24iLCJpIiwicmFuZG9tVmVjdG9yIiwicmFuZG9tVmVjdG9yQmV0d2VlblBvaW50czJEIiwiaW50ZXJzZWN0T2JqZWN0cyIsInVuZGVmaW5lZCIsInBsYWNlVHJlZU91dCIsInB1c2giLCJtZXNoZXNUb1NlbmQiLCJsb2NhdGlvblRvU2VuZCIsImZvckVhY2giLCJlIiwiayIsImdlb21ldHJ5IiwiZ2VvIiwiTWVyZ2VNZXNoZXMiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUJDLFVBQXpCLEVBQW9DO0FBQ2hDLE1BQUlDLE9BQU8sR0FBR0YsSUFBSSxDQUFDRyxLQUFMLENBQVdDLEtBQVgsRUFBZDtBQUNBRixTQUFPLENBQUNHLE9BQVIsQ0FBZ0JDLDhEQUFRLENBQUNDLElBQUksQ0FB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LHFCQUFLLENBQUNZLElBQU4sQ0FBV0QsY0FBWSxDQUFDMUMsT0FBeEI7QUFDSCxlQUxLLE1BS0EsSUFBR0QsVUFBVSxDQUFDLENBQUQsQ0FBVixLQUFrQjBDLFNBQWxCLElBQStCLGtCQUFBMUMsVUFBVSxDQUFDLENBQUQsQ0FBVixnRUFBZVEsS0FBZixDQUFxQkksQ0FBckIsSUFBeUIsRUFBM0QsRUFBOEQ7QUFDaEV3QixzQkFBTSxDQUFDUSxJQUFQLENBQVk5QyxTQUFTLENBQUN5QixRQUFELEVBQVd2QixVQUFYLENBQXJCO0FBQ0FnQyxxQkFBSyxDQUFDWSxJQUFOLENBQVdELFlBQVksQ0FBQzFDLE9BQXhCO0FBQ0g7QUFFSixhQTdERSxDQThESDtBQUNBOzs7QUFDSTRDLHdCQWhFRCxHQWdFZ0IsRUFoRWhCO0FBaUVDQywwQkFqRUQsR0FpRWtCLEVBakVsQjtBQWtFSFYsa0JBQU0sQ0FBQ1csT0FBUCxDQUFlLFVBQUNDLENBQUQsRUFBR0MsQ0FBSCxFQUFTO0FBQ3BCRCxlQUFDLENBQUNwQixRQUFGLENBQVdtQixPQUFYLENBQW1CLFVBQUNULENBQUQsRUFBTztBQUN0Qk8sNEJBQVksQ0FBQ0QsSUFBYixDQUFrQk4sQ0FBQyxDQUFDWSxRQUFwQjtBQUNBSiw4QkFBYyxDQUFDRixJQUFmLENBQW9CUCxRQUFRLENBQUNZLENBQUQsQ0FBNUI7QUFDQWpCLHFCQUFLO0FBQ1IsZUFKRDtBQUtILGFBTkQ7QUFPSW1CLGVBekVELEdBeUVPQyxvRkFBVyxDQUFDUCxZQUFELEVBQWVDLGNBQWYsQ0F6RWxCO0FBMEVINUMsaUJBQUssQ0FBQ21ELEdBQU4sQ0FBVXJCLEtBQVY7O0FBMUVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7S0FBZWhCLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC41NWRjZjNhMGVkY2NjNTY5ZjkzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JvdXAsIE1lc2gsIE1lc2hMYW1iZXJ0TWF0ZXJpYWwsIFJheWNhc3RlciwgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyByYWRpYW50cyB9IGZyb20gXCIuLi8uLi9BbGdvcml0aG1zL2RlZ1RvUmFkXCI7XHJcbmltcG9ydCB7IF9tZXJnZU1lc2hlcyB9IGZyb20gXCIuLi8uLi9BbGdvcml0aG1zL21lc2hNZXJnZXIuanNcIjtcclxuaW1wb3J0IHsgcmFuZG9tVmVjdG9yQmV0d2VlblBvaW50czJEIH0gZnJvbSBcIi4uLy4uL0FsZ29yaXRobXMvVmVjdG9yVXRpbHNcIjtcclxuaW1wb3J0IHsgYWRkR0xCRmlsZSB9IGZyb20gXCIuLi8uLi9Db3JlLUFQSS8zZE1vZGVsSGFuZGxlcnMvR0xCTG9hZGVyXCI7XHJcbmltcG9ydCB7IE1lcmdlTWVzaGVzIH0gZnJvbSBcIi4uLy4uL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9NZXNoTWVyZ2VyLnRzXCI7XHJcblxyXG5mdW5jdGlvbiBwbGFjZVRyZWUodHJlZSwgaW50ZXJzZWN0cyl7XHJcbiAgICBsZXQgbmV3VHJlZSA9IHRyZWUuc2NlbmUuY2xvbmUoKVxyXG4gICAgbmV3VHJlZS5yb3RhdGVZKHJhZGlhbnRzKE1hdGgucmFuZG9tKCkqMzYwKSlcclxuICAgIGxldCBwb2ludCA9IGludGVyc2VjdHNbMF0ucG9pbnRcclxuICAgIG5ld1RyZWUucG9zaXRpb24uc2V0KHBvaW50LngsIHBvaW50LnksIHBvaW50LnopXHJcbiAgICByZXR1cm4ge25ld1RyZWUsIHZldG9yOiBuZXcgVmVjdG9yMyhwb2ludC54LCBwb2ludC55LCBwb2ludC56KX1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdlbmVyYXRlVHJlZXMobnVtLCBzY2VuZSwgc3RhcnQsIGJvdW5kcywgdGVycmFpbil7XHJcbiAgICBsZXQgdHJlZSA9IGF3YWl0IGFkZEdMQkZpbGUoXHJcbiAgICAgICAgXCIvQXNzZXRzL1BpbmVUcmVlLmdsYlwiLFxyXG4gICAgICAgIHNjZW5lXHJcbiAgICApO1xyXG4gICAgbGV0IHNub3d5VHJlZSA9IGF3YWl0IGFkZEdMQkZpbGUoXHJcbiAgICAgICAgXCIvQXNzZXRzL1Nub3d5UGluZVRyZWUuZ2xiXCIsXHJcbiAgICAgICAgc2NlbmVcclxuICAgICk7XHJcbiAgICBsZXQgcGFsbVRyZWUgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgIFwiL0Fzc2V0cy9QYWxtX1RyZWUuZ2xiXCIsXHJcbiAgICAgICAgc2NlbmVcclxuICAgIClcclxuXHJcbiAgICBsZXQgbGVhdmVzID0gbmV3IE1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiAweDY5NGIzNyB9KVxyXG4gICAgbGV0IHRydW5rID0gbmV3IE1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOiAweDIxNjczNCB9KVxyXG4gICAgdHJlZS5zY2VuZS5jaGlsZHJlblswXS5tYXRlcmlhbCA9IGxlYXZlc1xyXG4gICAgdHJlZS5zY2VuZS5jaGlsZHJlblsxXS5tYXRlcmlhbCA9IHRydW5rXHJcbiAgICBzbm93eVRyZWUuc2NlbmUuY2hpbGRyZW5bMF0ubWF0ZXJpYWwgPSBsZWF2ZXNcclxuICAgIHNub3d5VHJlZS5zY2VuZS5jaGlsZHJlblsxXS5tYXRlcmlhbCA9IHRydW5rXHJcbiAgICBzbm93eVRyZWUuc2NlbmUuY2hpbGRyZW5bMl0ubWF0ZXJpYWwgPSBuZXcgTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IDB4ZmZmZmZmIH0pXHJcblxyXG4gICAgY29uc29sZS5sb2cocGFsbVRyZWUpXHJcbiAgICBwYWxtVHJlZSA9IHBhbG1UcmVlLnNjZW5lLmNoaWxkcmVuWzBdXHJcbiAgICBjb25zb2xlLmxvZyhwYWxtVHJlZSlcclxuICAgIGNvbnNvbGUubG9nKHNub3d5VHJlZSlcclxuXHJcbiAgICBwYWxtVHJlZS5jaGlsZHJlblswXS5tYXRlcmlhbCA9IHRydW5rXHJcblxyXG5cclxuICAgIFxyXG4gICAgbGV0IGdyb3VwID0gbmV3IEdyb3VwKClcclxuICAgIGxldCByYXljYXN0ZXIgPSBuZXcgUmF5Y2FzdGVyKClcclxuICAgIGxldCBtZXNoZXMgPSBbXVxyXG4gICAgbGV0IGxvY2F0aW9uID0gW11cclxuICAgIGZvcihsZXQgaT0wO2k8bnVtO2krKyl7XHJcbiAgICAgICAgbGV0IHJhbmRvbVZlY3RvciA9IHJhbmRvbVZlY3RvckJldHdlZW5Qb2ludHMyRCggc3RhcnQsIGJvdW5kcylcclxuICAgICAgICByYW5kb21WZWN0b3IueSA9IDUwXHJcblxyXG4gICAgICAgIHJheWNhc3Rlci5zZXQocmFuZG9tVmVjdG9yLCBuZXcgVmVjdG9yMygwLC0xLDApKVxyXG4gICAgICAgIGNvbnN0IGludGVyc2VjdHMgPSByYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyggW3RlcnJhaW5dICk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBpZihpbnRlcnNlY3RzWzBdICE9PSB1bmRlZmluZWQgJiYgaW50ZXJzZWN0c1swXT8ucG9pbnQueSA+IDIgJiYgaW50ZXJzZWN0c1swXT8ucG9pbnQueSA8IDIwKXtcclxuICAgICAgICAgICAgbGV0IHBsYWNlVHJlZU91dCA9IHBsYWNlVHJlZSh0cmVlLCBpbnRlcnNlY3RzKVxyXG4gICAgICAgICAgICBtZXNoZXMucHVzaChwbGFjZVRyZWVPdXQubmV3VHJlZSlcclxuICAgICAgICAgICAgbG9jYXRpb24ucHVzaChwbGFjZVRyZWVPdXQudmV0b3IpXHJcbiAgICAgICAgICAgIGdyb3VwLnB1c2gocGxhY2VUcmVlT3V0Lm5ld1RyZWUpXHJcbiAgICAgICAgfWVsc2UgaWYoaW50ZXJzZWN0c1swXSAhPT0gdW5kZWZpbmVkICYmIGludGVyc2VjdHNbMF0/LnBvaW50LnkgPCAyICYmIGludGVyc2VjdHNbMF0/LnBvaW50LnkgPiAwKXtcclxuICAgICAgICAgICAgbGV0IHBsYWNlVHJlZU91dCA9IHBsYWNlVHJlZSh0cmVlLCBpbnRlcnNlY3RzKVxyXG4gICAgICAgICAgICBtZXNoZXMucHVzaChwbGFjZVRyZWVPdXQubmV3VHJlZSlcclxuICAgICAgICAgICAgbG9jYXRpb24ucHVzaChwbGFjZVRyZWVPdXQudmV0b3IpXHJcbiAgICAgICAgICAgIGdyb3VwLnB1c2gocGxhY2VUcmVlT3V0Lm5ld1RyZWUpXHJcbiAgICAgICAgfWVsc2UgaWYoaW50ZXJzZWN0c1swXSAhPT0gdW5kZWZpbmVkICYmIGludGVyc2VjdHNbMF0/LnBvaW50LnkgPiAyMCl7XHJcbiAgICAgICAgICAgIG1lc2hlcy5wdXNoKHBsYWNlVHJlZShwYWxtVHJlZSwgaW50ZXJzZWN0cykpXHJcbiAgICAgICAgICAgIGdyb3VwLnB1c2gocGxhY2VUcmVlT3V0Lm5ld1RyZWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy9sZXQgZ2VvID0gX21lcmdlTWVzaGVzKG1lc2hlcywgdHJ1ZSlcclxuICAgIC8vc2NlbmUuYWRkKGdlbylcclxuICAgIGxldCBtZXNoZXNUb1NlbmQgPSBbXVxyXG4gICAgbGV0IGxvY2F0aW9uVG9TZW5kID0gW11cclxuICAgIG1lc2hlcy5mb3JFYWNoKChlLGspID0+IHtcclxuICAgICAgICBlLmNoaWxkcmVuLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgICAgICAgbWVzaGVzVG9TZW5kLnB1c2goaS5nZW9tZXRyeSlcclxuICAgICAgICAgICAgbG9jYXRpb25Ub1NlbmQucHVzaChsb2NhdGlvbltrXSlcclxuICAgICAgICAgICAgZ3JvdXBcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIGxldCBnZW8gPSBNZXJnZU1lc2hlcyhtZXNoZXNUb1NlbmQsIGxvY2F0aW9uVG9TZW5kKVxyXG4gICAgc2NlbmUuYWRkKGdyb3VwKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==