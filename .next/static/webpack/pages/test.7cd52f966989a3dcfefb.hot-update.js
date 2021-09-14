self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/Core-API/LightingManager.js":
/*!************************************************!*\
  !*** ./components/Core-API/LightingManager.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDirectionalLight": function() { return /* binding */ createDirectionalLight; },
/* harmony export */   "createAmbientLight": function() { return /* binding */ createAmbientLight; },
/* harmony export */   "createPointLight": function() { return /* binding */ createPointLight; }
/* harmony export */ });
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* module decorator */ module = __webpack_require__.hmd(module);

// Written By Harvey Randall \\

function createDirectionalLight(Scene, color, brightness, pos) {
  var _directionalLight$pos;

  // ---------- [Simple Directional Light Manager] ---------- \\
  var directionalLight = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(color, brightness, 100);

  (_directionalLight$pos = directionalLight.position).set.apply(_directionalLight$pos, (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(pos)); // ES6 Only way to destructure POS array
  //Shadown Managers


  directionalLight.castShadow = false; //Add to Scene

  Scene.add(directionalLight);
  return directionalLight;
}
function createAmbientLight(Scene, color, brightness) {
  var light = new three__WEBPACK_IMPORTED_MODULE_1__.AmbientLight(color, brightness); // soft white light

  Scene.add(light);
  return light;
}
function createPointLight(color, brightness, pos, intensity, Scene) {
  var _PointLightNew$positi;

  var PointLightNew = new three__WEBPACK_IMPORTED_MODULE_1__.PointLight(color, brightness, intensity, 100);

  (_PointLightNew$positi = PointLightNew.position).set.apply(_PointLightNew$positi, (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(pos));

  return PointLightNew;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3JlLUFQSS9MaWdodGluZ01hbmFnZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlRGlyZWN0aW9uYWxMaWdodCIsIlNjZW5lIiwiY29sb3IiLCJicmlnaHRuZXNzIiwicG9zIiwiZGlyZWN0aW9uYWxMaWdodCIsIkRpcmVjdGlvbmFsTGlnaHQiLCJwb3NpdGlvbiIsInNldCIsImNhc3RTaGFkb3ciLCJhZGQiLCJjcmVhdGVBbWJpZW50TGlnaHQiLCJsaWdodCIsIkFtYmllbnRMaWdodCIsImNyZWF0ZVBvaW50TGlnaHQiLCJpbnRlbnNpdHkiLCJQb2ludExpZ2h0TmV3IiwiUG9pbnRMaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFTyxTQUFTQSxzQkFBVCxDQUFnQ0MsS0FBaEMsRUFBdUNDLEtBQXZDLEVBQThDQyxVQUE5QyxFQUEwREMsR0FBMUQsRUFBK0Q7QUFBQTs7QUFDcEU7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxJQUFJQyxtREFBSixDQUFxQkosS0FBckIsRUFBNEJDLFVBQTVCLEVBQXdDLEdBQXhDLENBQXpCOztBQUNBLDJCQUFBRSxnQkFBZ0IsQ0FBQ0UsUUFBakIsRUFBMEJDLEdBQTFCLDZLQUFpQ0osR0FBakMsR0FIb0UsQ0FHN0I7QUFFdkM7OztBQUNBQyxrQkFBZ0IsQ0FBQ0ksVUFBakIsR0FBOEIsS0FBOUIsQ0FOb0UsQ0FRcEU7O0FBQ0FSLE9BQUssQ0FBQ1MsR0FBTixDQUFVTCxnQkFBVjtBQUNBLFNBQU9BLGdCQUFQO0FBQ0Q7QUFFTSxTQUFTTSxrQkFBVCxDQUE0QlYsS0FBNUIsRUFBbUNDLEtBQW5DLEVBQTBDQyxVQUExQyxFQUFzRDtBQUMzRCxNQUFNUyxLQUFLLEdBQUcsSUFBSUMsK0NBQUosQ0FBaUJYLEtBQWpCLEVBQXdCQyxVQUF4QixDQUFkLENBRDJELENBQ1I7O0FBQ25ERixPQUFLLENBQUNTLEdBQU4sQ0FBVUUsS0FBVjtBQUNBLFNBQU9BLEtBQVA7QUFDRDtBQUVNLFNBQVNFLGdCQUFULENBQTBCWixLQUExQixFQUFpQ0MsVUFBakMsRUFBNkNDLEdBQTdDLEVBQWtEVyxTQUFsRCxFQUE2RGQsS0FBN0QsRUFBbUU7QUFBQTs7QUFDeEUsTUFBTWUsYUFBYSxHQUFHLElBQUlDLDZDQUFKLENBQWVmLEtBQWYsRUFBc0JDLFVBQXRCLEVBQWtDWSxTQUFsQyxFQUE2QyxHQUE3QyxDQUF0Qjs7QUFDQSwyQkFBQUMsYUFBYSxDQUFDVCxRQUFkLEVBQXVCQyxHQUF2Qiw2S0FBOEJKLEdBQTlCOztBQUdBLFNBQU9ZLGFBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0LjdjZDUyZjk2Njk4OWEzZGNmZWZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcclxuXHJcbmltcG9ydCB7IEFtYmllbnRMaWdodCwgRGlyZWN0aW9uYWxMaWdodCwgUG9pbnRMaWdodCB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpcmVjdGlvbmFsTGlnaHQoU2NlbmUsIGNvbG9yLCBicmlnaHRuZXNzLCBwb3MpIHtcclxuICAvLyAtLS0tLS0tLS0tIFtTaW1wbGUgRGlyZWN0aW9uYWwgTGlnaHQgTWFuYWdlcl0gLS0tLS0tLS0tLSBcXFxcXHJcbiAgY29uc3QgZGlyZWN0aW9uYWxMaWdodCA9IG5ldyBEaXJlY3Rpb25hbExpZ2h0KGNvbG9yLCBicmlnaHRuZXNzLCAxMDApO1xyXG4gIGRpcmVjdGlvbmFsTGlnaHQucG9zaXRpb24uc2V0KC4uLnBvcyk7IC8vIEVTNiBPbmx5IHdheSB0byBkZXN0cnVjdHVyZSBQT1MgYXJyYXlcclxuXHJcbiAgLy9TaGFkb3duIE1hbmFnZXJzXHJcbiAgZGlyZWN0aW9uYWxMaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XHJcblxyXG4gIC8vQWRkIHRvIFNjZW5lXHJcbiAgU2NlbmUuYWRkKGRpcmVjdGlvbmFsTGlnaHQpO1xyXG4gIHJldHVybiBkaXJlY3Rpb25hbExpZ2h0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW1iaWVudExpZ2h0KFNjZW5lLCBjb2xvciwgYnJpZ2h0bmVzcykge1xyXG4gIGNvbnN0IGxpZ2h0ID0gbmV3IEFtYmllbnRMaWdodChjb2xvciwgYnJpZ2h0bmVzcyk7IC8vIHNvZnQgd2hpdGUgbGlnaHRcclxuICBTY2VuZS5hZGQobGlnaHQpO1xyXG4gIHJldHVybiBsaWdodDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvaW50TGlnaHQoY29sb3IsIGJyaWdodG5lc3MsIHBvcywgaW50ZW5zaXR5LCBTY2VuZSl7XHJcbiAgY29uc3QgUG9pbnRMaWdodE5ldyA9IG5ldyBQb2ludExpZ2h0KGNvbG9yLCBicmlnaHRuZXNzLCBpbnRlbnNpdHksIDEwMClcclxuICBQb2ludExpZ2h0TmV3LnBvc2l0aW9uLnNldCguLi5wb3MpXHJcblxyXG4gIFxyXG4gIHJldHVybiBQb2ludExpZ2h0TmV3XHJcbn0gXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=