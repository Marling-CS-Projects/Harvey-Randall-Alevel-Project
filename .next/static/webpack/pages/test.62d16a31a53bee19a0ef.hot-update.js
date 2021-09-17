/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/Core-API/ConnectAPI.js":
/*!*******************************************!*\
  !*** ./components/Core-API/ConnectAPI.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startSeverClientCommunication\": function() { return /* binding */ startSeverClientCommunication; },\n/* harmony export */   \"sendDataWithPromise\": function() { return /* binding */ sendDataWithPromise; },\n/* harmony export */   \"listenToEvent\": function() { return /* binding */ listenToEvent; },\n/* harmony export */   \"attachToMainEventStream\": function() { return /* binding */ attachToMainEventStream; },\n/* harmony export */   \"listenForEventWithSchemaValidation\": function() { return /* binding */ listenForEventWithSchemaValidation; },\n/* harmony export */   \"addDataToQueue\": function() { return /* binding */ addDataToQueue; },\n/* harmony export */   \"joinGame\": function() { return /* binding */ joinGame; }\n/* harmony export */ });\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Algorithms_PriorityQueue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Algorithms/PriorityQueue */ \"./components/Algorithms/PriorityQueue.js\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! joi */ \"./node_modules/joi/dist/joi-browser.min.js\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n// Written By Harvey Randall \\\\\n// This file aims to make communicatiom between client and server a lot easier, using promise\n//-------------[   Imports   ]-------------\\\\\n\n //-------------[Core Variables]-------------\\\\\n\nvar client;\nvar Queue = new _Algorithms_PriorityQueue__WEBPACK_IMPORTED_MODULE_4__.PriorityQueue(function (a, b) {\n  return a.prority > b.prority;\n});\n/**\n *  @param {string} socket - The socket io Client\n */\n\nfunction startSeverClientCommunication(socket) {\n  client = socket; //Data Handshake\n\n  socket.emit(\"ConnectionEstablised\", Date.now());\n}\n/**\n *  @param {string} event - The Event name\n *  @param {array} data   - The data to send to the server\n */\n\nfunction sendDataWithPromise(event, data) {\n  //-------------[   Create a basic promise to return data   ]-------------\\\\\n  var DataPromise = new Promise(function (resolve, reject) {\n    var resolved = false;\n\n    try {\n      var _client;\n\n      (_client = client).emit.apply(_client, [event].concat((0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(data)));\n\n      client.on(event + \"_Callback\", function () {\n        resolved = true;\n        resolve.apply(void 0, arguments);\n      });\n    } catch (err) {\n      resolved = true;\n      reject(err);\n    }\n\n    setTimeout(function () {\n      if (resolved === false) {\n        resolved = true;\n        reject(\"No data returned within 2 seconds, is there a data callback?\");\n      }\n    }, 2000);\n  });\n  return DataPromise;\n}\n/**\n *  @param {string} event        - The Event name\n *  @param {function} callback   - The function that will be called with the data back\n */\n\nfunction listenToEvent(event, callback) {\n  // Attach event handle to functions\n  client.on(event, callback);\n}\n/**\n *  @param {function} callback   - The function that will listen to all events sent to the client\n */\n\nfunction attachToMainEventStream(callback) {\n  client.onAny(function (eventName) {\n    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n\n    callback(eventName, args);\n  });\n}\n/**\n *  @param {string} event        - The name of the event to listen to\n *  @param {scema} scema         - The data scheme to folow\n *  @param {function} callback   - The function that will be called with the data\n */\n\nfunction listenForEventWithSchemaValidation(_x, _x2, _x3) {\n  return _listenForEventWithSchemaValidation.apply(this, arguments);\n}\n\nfunction _listenForEventWithSchemaValidation() {\n  _listenForEventWithSchemaValidation = (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(event, scema, callback) {\n    return _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            listenToEvent(event, function (args) {\n              var _scema$validate = scema.validate(args),\n                  error = _scema$validate.error,\n                  value = _scema$validate.value;\n\n              if (error) {\n                throw new Error(\"Scehma Check Failed\");\n              } else {\n                callback(value);\n                return value;\n              }\n            });\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _listenForEventWithSchemaValidation.apply(this, arguments);\n}\n\nfunction addDataToQueue(event, data, callback) {\n  var prority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;\n  Queue.push({\n    prority: prority,\n    input: [event, data, callback]\n  });\n}\nfunction joinGame(_x4, _x5) {\n  return _joinGame.apply(this, arguments);\n} //-------------[   All Non essesntial communication   ]-------------\\\\\n\nfunction _joinGame() {\n  _joinGame = (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(gameId, password) {\n    var _yield$sendDataWithPr, _yield$sendDataWithPr2, _seed, clients, userData;\n\n    return _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return sendDataWithPromise(\"GameConnect\", [gameId, password]);\n\n          case 3:\n            _yield$sendDataWithPr = _context3.sent;\n            _yield$sendDataWithPr2 = (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_yield$sendDataWithPr, 3);\n            _seed = _yield$sendDataWithPr2[0];\n            clients = _yield$sendDataWithPr2[1];\n            userData = _yield$sendDataWithPr2[2];\n            console.log({\n              seed: _seed,\n              clients: clients,\n              userData: userData\n            });\n            return _context3.abrupt(\"return\", {\n              seed: _seed,\n              clients: clients,\n              userData: userData\n            });\n\n          case 12:\n            _context3.prev = 12;\n            _context3.t0 = _context3[\"catch\"](0);\n            return _context3.abrupt(\"return\", seed);\n\n          case 15:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 12]]);\n  }));\n  return _joinGame.apply(this, arguments);\n}\n\nsetInterval( /*#__PURE__*/(0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n  var func, input, callBack, data;\n  return _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          if (Queue.isEmpty()) {\n            _context.next = 14;\n            break;\n          }\n\n          func = Queue.pop();\n          input = func.input;\n          callBack = input[2];\n          _context.prev = 4;\n          _context.next = 7;\n          return sendDataWithPromise.apply(void 0, [input[0]].concat((0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(input[1])));\n\n        case 7:\n          data = _context.sent;\n          callBack(false, data);\n          _context.next = 14;\n          break;\n\n        case 11:\n          _context.prev = 11;\n          _context.t0 = _context[\"catch\"](4);\n          callBack(true, []);\n\n        case 14:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee, null, [[4, 11]]);\n})), 500);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3JlLUFQSS9Db25uZWN0QVBJLmpzPzI5NmEiXSwibmFtZXMiOlsiY2xpZW50IiwiUXVldWUiLCJQcmlvcml0eVF1ZXVlIiwiYSIsImIiLCJwcm9yaXR5Iiwic3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24iLCJzb2NrZXQiLCJlbWl0IiwiRGF0ZSIsIm5vdyIsInNlbmREYXRhV2l0aFByb21pc2UiLCJldmVudCIsImRhdGEiLCJEYXRhUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzb2x2ZWQiLCJvbiIsImVyciIsInNldFRpbWVvdXQiLCJsaXN0ZW5Ub0V2ZW50IiwiY2FsbGJhY2siLCJhdHRhY2hUb01haW5FdmVudFN0cmVhbSIsIm9uQW55IiwiZXZlbnROYW1lIiwiYXJncyIsImxpc3RlbkZvckV2ZW50V2l0aFNjaGVtYVZhbGlkYXRpb24iLCJzY2VtYSIsInZhbGlkYXRlIiwiZXJyb3IiLCJ2YWx1ZSIsIkVycm9yIiwiYWRkRGF0YVRvUXVldWUiLCJwdXNoIiwiaW5wdXQiLCJqb2luR2FtZSIsImdhbWVJZCIsInBhc3N3b3JkIiwic2VlZCIsImNsaWVudHMiLCJ1c2VyRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJbnRlcnZhbCIsImlzRW1wdHkiLCJmdW5jIiwicG9wIiwiY2FsbEJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFJQSxNQUFKO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLElBQUlDLG9FQUFKLENBQWtCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVVELENBQUMsQ0FBQ0UsT0FBRixHQUFZRCxDQUFDLENBQUNDLE9BQXhCO0FBQUEsQ0FBbEIsQ0FBWjtBQUVBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTQyw2QkFBVCxDQUF1Q0MsTUFBdkMsRUFBK0M7QUFDcERQLFFB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InNvdXJjZXNDb250ZW50IjpbIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxuXG4vLyBUaGlzIGZpbGUgYWltcyB0byBtYWtlIGNvbW11bmljYXRpb20gYmV0d2VlbiBjbGllbnQgYW5kIHNlcnZlciBhIGxvdCBlYXNpZXIsIHVzaW5nIHByb21pc2VcblxuLy8tLS0tLS0tLS0tLS0tWyAgIEltcG9ydHMgICBdLS0tLS0tLS0tLS0tLVxcXFxcbmltcG9ydCB7IFByaW9yaXR5UXVldWUgfSBmcm9tIFwiLi4vQWxnb3JpdGhtcy9Qcmlvcml0eVF1ZXVlXCI7XG5pbXBvcnQgKiBhcyBKb2kgZnJvbSBcImpvaVwiO1xuXG4vLy0tLS0tLS0tLS0tLS1bQ29yZSBWYXJpYWJsZXNdLS0tLS0tLS0tLS0tLVxcXFxcbmxldCBjbGllbnQ7XG5sZXQgUXVldWUgPSBuZXcgUHJpb3JpdHlRdWV1ZSgoYSwgYikgPT4gYS5wcm9yaXR5ID4gYi5wcm9yaXR5KTtcblxuLyoqXG4gKiAgQHBhcmFtIHtzdHJpbmd9IHNvY2tldCAtIFRoZSBzb2NrZXQgaW8gQ2xpZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFNldmVyQ2xpZW50Q29tbXVuaWNhdGlvbihzb2NrZXQpIHtcbiAgY2xpZW50ID0gc29ja2V0O1xuXG4gIC8vRGF0YSBIYW5kc2hha2VcbiAgc29ja2V0LmVtaXQoXCJDb25uZWN0aW9uRXN0YWJsaXNlZFwiLCBEYXRlLm5vdygpKTtcbn1cblxuLyoqXG4gKiAgQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gVGhlIEV2ZW50IG5hbWVcbiAqICBAcGFyYW0ge2FycmF5fSBkYXRhICAgLSBUaGUgZGF0YSB0byBzZW5kIHRvIHRoZSBzZXJ2ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmREYXRhV2l0aFByb21pc2UoZXZlbnQsIGRhdGEpIHtcbiAgLy8tLS0tLS0tLS0tLS0tWyAgIENyZWF0ZSBhIGJhc2ljIHByb21pc2UgdG8gcmV0dXJuIGRhdGEgICBdLS0tLS0tLS0tLS0tLVxcXFxcbiAgY29uc3QgRGF0YVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGNsaWVudC5lbWl0KGV2ZW50LCAuLi5kYXRhKTtcblxuICAgICAgY2xpZW50Lm9uKGV2ZW50ICsgXCJfQ2FsbGJhY2tcIiwgKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICByZXNvbHZlKC4uLmFyZ3MpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAocmVzb2x2ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgcmVqZWN0KFwiTm8gZGF0YSByZXR1cm5lZCB3aXRoaW4gMiBzZWNvbmRzLCBpcyB0aGVyZSBhIGRhdGEgY2FsbGJhY2s/XCIpO1xuICAgICAgfVxuICAgIH0sIDIwMDApO1xuICB9KTtcbiAgcmV0dXJuIERhdGFQcm9taXNlO1xufVxuXG4vKipcbiAqICBAcGFyYW0ge3N0cmluZ30gZXZlbnQgICAgICAgIC0gVGhlIEV2ZW50IG5hbWVcbiAqICBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAgIC0gVGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgZGF0YSBiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5Ub0V2ZW50KGV2ZW50LCBjYWxsYmFjaykge1xuICAvLyBBdHRhY2ggZXZlbnQgaGFuZGxlIHRvIGZ1bmN0aW9uc1xuICBjbGllbnQub24oZXZlbnQsIGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiAgQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgICAtIFRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgbGlzdGVuIHRvIGFsbCBldmVudHMgc2VudCB0byB0aGUgY2xpZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hUb01haW5FdmVudFN0cmVhbShjYWxsYmFjaykge1xuICBjbGllbnQub25BbnkoKGV2ZW50TmFtZSwgLi4uYXJncykgPT4ge1xuICAgIGNhbGxiYWNrKGV2ZW50TmFtZSwgYXJncyk7XG4gIH0pO1xufVxuXG4vKipcbiAqICBAcGFyYW0ge3N0cmluZ30gZXZlbnQgICAgICAgIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIGxpc3RlbiB0b1xuICogIEBwYXJhbSB7c2NlbWF9IHNjZW1hICAgICAgICAgLSBUaGUgZGF0YSBzY2hlbWUgdG8gZm9sb3dcbiAqICBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAgIC0gVGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgZGF0YVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlzdGVuRm9yRXZlbnRXaXRoU2NoZW1hVmFsaWRhdGlvbihcbiAgZXZlbnQsXG4gIHNjZW1hLFxuICBjYWxsYmFja1xuKSB7XG4gIGxpc3RlblRvRXZlbnQoZXZlbnQsIChhcmdzKSA9PiB7XG4gICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IHNjZW1hLnZhbGlkYXRlKGFyZ3MpO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2NlaG1hIENoZWNrIEZhaWxlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2sodmFsdWUpO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXRhVG9RdWV1ZShldmVudCwgZGF0YSwgY2FsbGJhY2ssIHByb3JpdHkgPSAxKSB7XG4gIFF1ZXVlLnB1c2goeyBwcm9yaXR5LCBpbnB1dDogW2V2ZW50LCBkYXRhLCBjYWxsYmFja10gfSk7XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGpvaW5HYW1lKGdhbWVJZCwgcGFzc3dvcmQpIHtcbiAgdHJ5e1xuICAgIGxldCBbc2VlZCwgY2xpZW50cywgdXNlckRhdGFdID0gYXdhaXQgc2VuZERhdGFXaXRoUHJvbWlzZShcIkdhbWVDb25uZWN0XCIsIFtnYW1lSWQsIHBhc3N3b3JkXSlcbiAgICBjb25zb2xlLmxvZyh7IHNlZWQsIGNsaWVudHMsIHVzZXJEYXRhIH0pXG4gICAgcmV0dXJuIHsgc2VlZCwgY2xpZW50cywgdXNlckRhdGEgfVxuICB9Y2F0Y2h7XG4gICAgcmV0dXJuIHNlZWRcbiAgfVxuICBcbn1cblxuLy8tLS0tLS0tLS0tLS0tWyAgIEFsbCBOb24gZXNzZXNudGlhbCBjb21tdW5pY2F0aW9uICAgXS0tLS0tLS0tLS0tLS1cXFxcXG5zZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gIGlmICghUXVldWUuaXNFbXB0eSgpKSB7XG4gICAgbGV0IGZ1bmMgPSBRdWV1ZS5wb3AoKTtcbiAgICBsZXQgaW5wdXQgPSBmdW5jLmlucHV0O1xuICAgIGxldCBjYWxsQmFjayA9IGlucHV0WzJdO1xuICAgIHRyeSB7XG4gICAgICAvL0Rlc3RydWN0dXJlIGFuZCBzZW5kIGRhdGFcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgc2VuZERhdGFXaXRoUHJvbWlzZShpbnB1dFswXSwgLi4uaW5wdXRbMV0pO1xuICAgICAgY2FsbEJhY2soZmFsc2UsIGRhdGEpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgY2FsbEJhY2sodHJ1ZSwgW10pO1xuICAgIH1cbiAgfVxufSwgNTAwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Core-API/ConnectAPI.js\n");

/***/ })

});