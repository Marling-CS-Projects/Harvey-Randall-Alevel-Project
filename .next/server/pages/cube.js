/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/cube";
exports.ids = ["pages/cube"];
exports.modules = {

/***/ "./pages/cube.js":
/*!***********************!*\
  !*** ./pages/cube.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"three\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/year12/Desktop/Harvey/alevel_2020-2021/pages/cube.js\";\n// Written By Harvey Randall \\\\\n\n\nfunction render() {\n  const {\n    0: child,\n    1: setChild\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (typeof child === \"undefined\") {\n      return;\n    }\n\n    const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    child.appendChild(renderer.domElement);\n    const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry();\n    const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({\n      color: \"#0000ff\"\n    });\n    const cube = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);\n    scene.add(cube);\n    camera.position.z = 5;\n\n    const animate = function () {\n      requestAnimationFrame(animate);\n      cube.rotation.x += 0.01;\n      cube.rotation.y += 0.01;\n      renderer.render(scene, camera);\n    };\n\n    animate();\n  }, [child]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      ref: ref => setChild(ref)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vcGFnZXMvY3ViZS5qcz9mNTkzIl0sIm5hbWVzIjpbInJlbmRlciIsImNoaWxkIiwic2V0Q2hpbGQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInNjZW5lIiwiU2NlbmUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInNldFNpemUiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJnZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwibWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwiY3ViZSIsIk1lc2giLCJhZGQiLCJwb3NpdGlvbiIsInoiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicm90YXRpb24iLCJ4IiwieSIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQVNlLFNBQVNBLE1BQVQsR0FBa0I7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxFQUFsQztBQUVBQyxrREFBUyxDQUFDLE1BQU07QUFDWixRQUFJLE9BQU9ILEtBQVAsS0FBaUIsV0FBckIsRUFBa0M7QUFDOUI7QUFDSDs7QUFFRCxVQUFNSSxLQUFLLEdBQUcsSUFBSUMsd0NBQUosRUFBZDtBQUNBLFVBQU1DLE1BQU0sR0FBRyxJQUFJQyxvREFBSixDQUNYLEVBRFcsRUFFWEMsTUFBTSxDQUFDQyxVQUFQLEdBQW9CRCxNQUFNLENBQUNFLFdBRmhCLEVBR1gsR0FIVyxFQUlYLElBSlcsQ0FBZjtBQU9BLFVBQU1DLFFBQVEsR0FBRyxJQUFJQyxnREFBSixFQUFqQjtBQUNBRCxZQUFRLENBQUNFLE9BQVQsQ0FBaUJMLE1BQU0sQ0FBQ0MsVUFBeEIsRUFBb0NELE1BQU0sQ0FBQ0UsV0FBM0M7QUFDQVYsU0FBSyxDQUFDYyxXQUFOLENBQWtCSCxRQUFRLENBQUNJLFVBQTNCO0FBRUEsVUFBTUMsUUFBUSxHQUFHLElBQUlDLDhDQUFKLEVBQWpCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLElBQUlDLG9EQUFKLENBQXNCO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQXRCLENBQWpCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLElBQUlDLHVDQUFKLENBQVNOLFFBQVQsRUFBbUJFLFFBQW5CLENBQWI7QUFDQWQsU0FBSyxDQUFDbUIsR0FBTixDQUFVRixJQUFWO0FBRUFmLFVBQU0sQ0FBQ2tCLFFBQVAsQ0FBZ0JDLENBQWhCLEdBQW9CLENBQXBCOztBQUVBLFVBQU1DLE9BQU8sR0FBRyxZQUFZO0FBQ3hCQywyQkFBcUIsQ0FBQ0QsT0FBRCxDQUFyQjtBQUVBTCxVQUFJLENBQUNPLFFBQUwsQ0FBY0MsQ0FBZCxJQUFtQixJQUFuQjtBQUNBUixVQUFJLENBQUNPLFFBQUwsQ0FBY0UsQ0FBZCxJQUFtQixJQUFuQjtBQUVBbkIsY0FBUSxDQUFDWixNQUFULENBQWdCSyxLQUFoQixFQUF1QkUsTUFBdkI7QUFDSCxLQVBEOztBQVNBb0IsV0FBTztBQUNWLEdBbENRLEVBa0NOLENBQUMxQixLQUFELENBbENNLENBQVQ7QUFvQ0Esc0JBQ0k7QUFBQSwyQkFDSTtBQUFLLFNBQUcsRUFBRytCLEdBQUQsSUFBUzlCLFFBQVEsQ0FBQzhCLEdBQUQ7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBS0giLCJmaWxlIjoiLi9wYWdlcy9jdWJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gICAgQm94R2VvbWV0cnksXG4gICAgTWVzaCxcbiAgICBNZXNoQmFzaWNNYXRlcmlhbCxcbiAgICBQZXJzcGVjdGl2ZUNhbWVyYSxcbiAgICBTY2VuZSxcbiAgICBXZWJHTFJlbmRlcmVyLFxufSBmcm9tIFwidGhyZWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGNvbnN0IFtjaGlsZCwgc2V0Q2hpbGRdID0gdXNlU3RhdGUoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjZW5lID0gbmV3IFNjZW5lKCk7XG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgICAgICAgIDc1LFxuICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAwLjEsXG4gICAgICAgICAgICAxMDAwXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgV2ViR0xSZW5kZXJlcigpO1xuICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICBjaGlsZC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBCb3hHZW9tZXRyeSgpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiBcIiMwMDAwZmZcIiB9KTtcbiAgICAgICAgY29uc3QgY3ViZSA9IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICAgIHNjZW5lLmFkZChjdWJlKTtcblxuICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9IDU7XG5cbiAgICAgICAgY29uc3QgYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcblxuICAgICAgICAgICAgY3ViZS5yb3RhdGlvbi54ICs9IDAuMDE7XG4gICAgICAgICAgICBjdWJlLnJvdGF0aW9uLnkgKz0gMC4wMTtcblxuICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGFuaW1hdGUoKTtcbiAgICB9LCBbY2hpbGRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IHJlZj17KHJlZikgPT4gc2V0Q2hpbGQocmVmKX0gLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cube.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("three");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/cube.js"));
module.exports = __webpack_exports__;

})();