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
function createPointLight(color, brightness, pos, intensity) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3JlLUFQSS9MaWdodGluZ01hbmFnZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlRGlyZWN0aW9uYWxMaWdodCIsIlNjZW5lIiwiY29sb3IiLCJicmlnaHRuZXNzIiwicG9zIiwiZGlyZWN0aW9uYWxMaWdodCIsIkRpcmVjdGlvbmFsTGlnaHQiLCJwb3NpdGlvbiIsInNldCIsImNhc3RTaGFkb3ciLCJhZGQiLCJjcmVhdGVBbWJpZW50TGlnaHQiLCJsaWdodCIsIkFtYmllbnRMaWdodCIsImNyZWF0ZVBvaW50TGlnaHQiLCJpbnRlbnNpdHkiLCJQb2ludExpZ2h0TmV3IiwiUG9pbnRMaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFTyxTQUFTQSxzQkFBVCxDQUFnQ0MsS0FBaEMsRUFBdUNDLEtBQXZDLEVBQThDQyxVQUE5QyxFQUEwREMsR0FBMUQsRUFBK0Q7QUFBQTs7QUFDcEU7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxJQUFJQyxtREFBSixDQUFxQkosS0FBckIsRUFBNEJDLFVBQTVCLEVBQXdDLEdBQXhDLENBQXpCOztBQUNBLDJCQUFBRSxnQkFBZ0IsQ0FBQ0UsUUFBakIsRUFBMEJDLEdBQTFCLDZLQUFpQ0osR0FBakMsR0FIb0UsQ0FHN0I7QUFFdkM7OztBQUNBQyxrQkFBZ0IsQ0FBQ0ksVUFBakIsR0FBOEIsS0FBOUIsQ0FOb0UsQ0FRcEU7O0FBQ0FSLE9BQUssQ0FBQ1MsR0FBTixDQUFVTCxnQkFBVjtBQUNBLFNBQU9BLGdCQUFQO0FBQ0Q7QUFFTSxTQUFTTSxrQkFBVCxDQUE0QlYsS0FBNUIsRUFBbUNDLEtBQW5DLEVBQTBDQyxVQUExQyxFQUFzRDtBQUMzRCxNQUFNUyxLQUFLLEdBQUcsSUFBSUMsK0NBQUosQ0FBaUJYLEtBQWpCLEVBQXdCQyxVQUF4QixDQUFkLENBRDJELENBQ1I7O0FBQ25ERixPQUFLLENBQUNTLEdBQU4sQ0FBVUUsS0FBVjtBQUNBLFNBQU9BLEtBQVA7QUFDRDtBQUVNLFNBQVNFLGdCQUFULENBQTBCWixLQUExQixFQUFpQ0MsVUFBakMsRUFBNkNDLEdBQTdDLEVBQWtEVyxTQUFsRCxFQUE0RDtBQUFBOztBQUNqRSxNQUFNQyxhQUFhLEdBQUcsSUFBSUMsNkNBQUosQ0FBZWYsS0FBZixFQUFzQkMsVUFBdEIsRUFBa0NZLFNBQWxDLEVBQTZDLEdBQTdDLENBQXRCOztBQUNBLDJCQUFBQyxhQUFhLENBQUNULFFBQWQsRUFBdUJDLEdBQXZCLDZLQUE4QkosR0FBOUI7O0FBQ0EsU0FBT1ksYUFBUDtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QuMWEyNjI2YTA0YzQxMWVhYWYwYzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxyXG5cclxuaW1wb3J0IHsgQW1iaWVudExpZ2h0LCBEaXJlY3Rpb25hbExpZ2h0LCBQb2ludExpZ2h0IH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGlyZWN0aW9uYWxMaWdodChTY2VuZSwgY29sb3IsIGJyaWdodG5lc3MsIHBvcykge1xyXG4gIC8vIC0tLS0tLS0tLS0gW1NpbXBsZSBEaXJlY3Rpb25hbCBMaWdodCBNYW5hZ2VyXSAtLS0tLS0tLS0tIFxcXFxcclxuICBjb25zdCBkaXJlY3Rpb25hbExpZ2h0ID0gbmV3IERpcmVjdGlvbmFsTGlnaHQoY29sb3IsIGJyaWdodG5lc3MsIDEwMCk7XHJcbiAgZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5zZXQoLi4ucG9zKTsgLy8gRVM2IE9ubHkgd2F5IHRvIGRlc3RydWN0dXJlIFBPUyBhcnJheVxyXG5cclxuICAvL1NoYWRvd24gTWFuYWdlcnNcclxuICBkaXJlY3Rpb25hbExpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcclxuXHJcbiAgLy9BZGQgdG8gU2NlbmVcclxuICBTY2VuZS5hZGQoZGlyZWN0aW9uYWxMaWdodCk7XHJcbiAgcmV0dXJuIGRpcmVjdGlvbmFsTGlnaHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbWJpZW50TGlnaHQoU2NlbmUsIGNvbG9yLCBicmlnaHRuZXNzKSB7XHJcbiAgY29uc3QgbGlnaHQgPSBuZXcgQW1iaWVudExpZ2h0KGNvbG9yLCBicmlnaHRuZXNzKTsgLy8gc29mdCB3aGl0ZSBsaWdodFxyXG4gIFNjZW5lLmFkZChsaWdodCk7XHJcbiAgcmV0dXJuIGxpZ2h0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUG9pbnRMaWdodChjb2xvciwgYnJpZ2h0bmVzcywgcG9zLCBpbnRlbnNpdHkpe1xyXG4gIGNvbnN0IFBvaW50TGlnaHROZXcgPSBuZXcgUG9pbnRMaWdodChjb2xvciwgYnJpZ2h0bmVzcywgaW50ZW5zaXR5LCAxMDApXHJcbiAgUG9pbnRMaWdodE5ldy5wb3NpdGlvbi5zZXQoLi4ucG9zKVxyXG4gIHJldHVybiBQb2ludExpZ2h0TmV3XHJcbn0gXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=