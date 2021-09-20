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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startSeverClientCommunication\": function() { return /* binding */ startSeverClientCommunication; },\n/* harmony export */   \"sendDataWithPromise\": function() { return /* binding */ sendDataWithPromise; },\n/* harmony export */   \"listenToEvent\": function() { return /* binding */ listenToEvent; },\n/* harmony export */   \"sendDataToServer\": function() { return /* binding */ sendDataToServer; },\n/* harmony export */   \"attachToMainEventStream\": function() { return /* binding */ attachToMainEventStream; },\n/* harmony export */   \"listenForEventWithSchemaValidation\": function() { return /* binding */ listenForEventWithSchemaValidation; },\n/* harmony export */   \"addDataToQueue\": function() { return /* binding */ addDataToQueue; },\n/* harmony export */   \"joinGame\": function() { return /* binding */ joinGame; }\n/* harmony export */ });\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Algorithms_PriorityQueue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Algorithms/PriorityQueue */ \"./components/Algorithms/PriorityQueue.js\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! joi */ \"./node_modules/joi/dist/joi-browser.min.js\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n// Written By Harvey Randall \\\\\n// This file aims to make communicatiom between client and server a lot easier, using promise\n//-------------[   Imports   ]-------------\\\\\n\n //-------------[Core Variables]-------------\\\\\n\nvar client;\nvar Queue = new _Algorithms_PriorityQueue__WEBPACK_IMPORTED_MODULE_4__.PriorityQueue(function (a, b) {\n  return a.prority > b.prority;\n});\n/**\n *  @param {string} socket - The socket io Client\n */\n\nfunction startSeverClientCommunication(socket) {\n  client = socket; //Data Handshake\n\n  socket.emit(\"ConnectionEstablised\", Date.now());\n}\n/**\n *  @param {string} event - The Event name\n *  @param {array} data   - The data to send to the server\n */\n\nfunction sendDataWithPromise(event, data) {\n  //-------------[   Create a basic promise to return data   ]-------------\\\\\n  var DataPromise = new Promise(function (resolve, reject) {\n    var resolved = false;\n\n    try {\n      var _client;\n\n      (_client = client).emit.apply(_client, [event].concat((0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(data)));\n\n      client.on(event + \"_Callback\", function () {\n        resolved = true;\n        resolve.apply(void 0, arguments);\n      });\n    } catch (err) {\n      resolved = true;\n      reject(err);\n    }\n\n    setTimeout(function () {\n      if (resolved === false) {\n        resolved = true;\n        reject(\"No data returned within 2 seconds, is there a data callback?\");\n      }\n    }, 2000);\n  });\n  return DataPromise;\n}\n/**\n *  @param {string} event        - The Event name\n *  @param {function} callback   - The function that will be called with the data back\n */\n\nfunction listenToEvent(event, callback) {\n  // Attach event handle to functions\n  client.on(event, callback);\n}\nfunction sendDataToServer(event, data) {\n  var _client2;\n\n  (_client2 = client).emit.apply(_client2, [event].concat((0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(data)));\n}\n/**\n *  @param {function} callback   - The function that will listen to all events sent to the client\n */\n\nfunction attachToMainEventStream(callback) {\n  client.onAny(function (eventName) {\n    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n\n    callback(eventName, args);\n  });\n}\n/**\n *  @param {string} event        - The name of the event to listen to\n *  @param {scema} scema         - The data scheme to folow\n *  @param {function} callback   - The function that will be called with the data\n */\n\nfunction listenForEventWithSchemaValidation(_x, _x2, _x3) {\n  return _listenForEventWithSchemaValidation.apply(this, arguments);\n}\n\nfunction _listenForEventWithSchemaValidation() {\n  _listenForEventWithSchemaValidation = (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(event, scema, callback) {\n    return _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            listenToEvent(event, function (args) {\n              var _scema$validate = scema.validate(args),\n                  error = _scema$validate.error,\n                  value = _scema$validate.value;\n\n              if (error) {\n                throw new Error(\"Scehma Check Failed\");\n              } else {\n                callback(value);\n                return value;\n              }\n            });\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _listenForEventWithSchemaValidation.apply(this, arguments);\n}\n\nfunction addDataToQueue(event, data, callback) {\n  var prority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;\n  Queue.push({\n    prority: prority,\n    input: [event, data, callback]\n  });\n}\nfunction joinGame(_x4, _x5) {\n  return _joinGame.apply(this, arguments);\n} //-------------[   All Non essesntial communication   ]-------------\\\\\n\nfunction _joinGame() {\n  _joinGame = (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(gameId, password) {\n    var _yield$sendDataWithPr, _yield$sendDataWithPr2, seed, clients, userData;\n\n    return _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return sendDataWithPromise(\"GameConnect\", [gameId, password]);\n\n          case 3:\n            _yield$sendDataWithPr = _context3.sent;\n            _yield$sendDataWithPr2 = (0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_yield$sendDataWithPr, 3);\n            seed = _yield$sendDataWithPr2[0];\n            clients = _yield$sendDataWithPr2[1];\n            userData = _yield$sendDataWithPr2[2];\n\n            if (!(seed === false)) {\n              _context3.next = 10;\n              break;\n            }\n\n            return _context3.abrupt(\"return\", false);\n\n          case 10:\n            return _context3.abrupt(\"return\", {\n              seed: seed,\n              clients: clients,\n              userData: userData\n            });\n\n          case 13:\n            _context3.prev = 13;\n            _context3.t0 = _context3[\"catch\"](0);\n            return _context3.abrupt(\"return\", true);\n\n          case 16:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 13]]);\n  }));\n  return _joinGame.apply(this, arguments);\n}\n\nsetInterval( /*#__PURE__*/(0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n  var func, input, callBack, data;\n  return _Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          if (Queue.isEmpty()) {\n            _context.next = 14;\n            break;\n          }\n\n          func = Queue.pop();\n          input = func.input;\n          callBack = input[2];\n          _context.prev = 4;\n          _context.next = 7;\n          return sendDataWithPromise.apply(void 0, [input[0]].concat((0,_Users_year12_Desktop_Harvey_alevel_2020_2021_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(input[1])));\n\n        case 7:\n          data = _context.sent;\n          callBack(false, data);\n          _context.next = 14;\n          break;\n\n        case 11:\n          _context.prev = 11;\n          _context.t0 = _context[\"catch\"](4);\n          callBack(true, []);\n\n        case 14:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee, null, [[4, 11]]);\n})), 500);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3JlLUFQSS9Db25uZWN0QVBJLmpzPzI5NmEiXSwibmFtZXMiOlsiY2xpZW50IiwiUXVldWUiLCJQcmlvcml0eVF1ZXVlIiwiYSIsImIiLCJwcm9yaXR5Iiwic3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24iLCJzb2NrZXQiLCJlbWl0IiwiRGF0ZSIsIm5vdyIsInNlbmREYXRhV2l0aFByb21pc2UiLCJldmVudCIsImRhdGEiLCJEYXRhUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzb2x2ZWQiLCJvbiIsImVyciIsInNldFRpbWVvdXQiLCJsaXN0ZW5Ub0V2ZW50IiwiY2FsbGJhY2siLCJzZW5kRGF0YVRvU2VydmVyIiwiYXR0YWNoVG9NYWluRXZlbnRTdHJlYW0iLCJvbkFueSIsImV2ZW50TmFtZSIsImFyZ3MiLCJsaXN0ZW5Gb3JFdmVudFdpdGhTY2hlbWFWYWxpZGF0aW9uIiwic2NlbWEiLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiLCJFcnJvciIsImFkZERhdGFUb1F1ZXVlIiwicHVzaCIsImlucHV0Iiwiam9pbkdhbWUiLCJnYW1lSWQiLCJwYXNzd29yZCIsInNlZWQiLCJjbGllbnRzIiwidXNlckRhdGEiLCJzZXRJbnRlcnZhbCIsImlzRW1wdHkiLCJmdW5jIiwicG9wIiwiY2FsbEJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0NBR0E7O0FBQ0EsSUFBSUEsTUFBSjtBQUNBLElBQUlDLEtBQUssR0FBRyxJQUFJQyxvRUFBSixDQUFrQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxTQUFVRCxDQUFDLENBQUNFLE9BQUYsR0FBWUQsQ0FBQyxDQUFDQyxPQUF4QjtBQUFBLENBQWxCLENBQVo7QUFFQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0MsNkJBQVQsQ0FBdUNDLE1BQXZDLEVBQStDO0FBQ3BEUCxRQUFNLEdBQUdPLE1BQVQsQ0FEb0QsQ0FHcEQ7O0FBQ0FBLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZLHNCQUFaLEVBQW9DQyxJQUFJLENBQUNDLEdBQUwsRUFBcEM7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNDLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQ0MsSUFBcEMsRUFBMEM7QUFDL0M7QUFDQSxNQUFNQyxXQUFXLEdBQUcsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNuRCxRQUFJQyxRQUFRLEdBQUcsS0FBZjs7QUFDQSxRQUFJO0FBQUE7O0FBQ0YsaUJBQUFsQixNQUFNLEVBQUNRLElBQVAsaUJBQVlJLEtBQVoseUpBQXNCQyxJQUF0Qjs7QUFFQWIsWUFBTSxDQUFDbUIsRUFBUCxDQUFVUCxLQUFLLEdBQUcsV0FBbEIsRUFBK0IsWUFBYTtBQUMxQ00sZ0JBQVEsR0FBRyxJQUFYO0FBQ0FGLGVBQU8sTUFBUDtBQUNELE9BSEQ7QUFJRCxLQVBELENBT0UsT0FBT0ksR0FBUCxFQUFZO0FBQ1pGLGNBQVEsR0FBRyxJQUFYO0FBQ0FELFlBQU0sQ0FBQ0csR0FBRCxDQUFOO0FBQ0Q7O0FBQ0RDLGNBQVUsQ0FBQyxZQUFNO0FBQ2YsVUFBSUgsUUFBUSxLQUFLLEtBQWpCLEVBQXdCO0FBQ3RCQSxnQkFBUSxHQUFHLElBQVg7QUFDQUQsY0FBTSxDQUFDLDhEQUFELENBQU47QUFDRDtBQUNGLEtBTFMsRUFLUCxJQUxPLENBQVY7QUFNRCxHQW5CbUIsQ0FBcEI7QUFvQkEsU0FBT0gsV0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU1EsYUFBVCxDQUF1QlYsS0FBdkIsRUFBOEJXLFFBQTlCLEVBQXdDO0FBQzdDO0FBQ0F2QixRQUFNLENBQUNtQixFQUFQLENBQVVQLEtBQVYsRUFBaUJXLFFBQWpCO0FBQ0Q7QUFFTSxTQUFTQyxnQkFBVCxDQUEwQlosS0FBMUIsRUFBaUNDLElBQWpDLEVBQXNDO0FBQUE7O0FBQzNDLGNBQUFiLE1BQU0sRUFBQ1EsSUFBUCxrQkFBWUksS0FBWix5SkFBc0JDLElBQXRCO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7O0FBQ08sU0FBU1ksdUJBQVQsQ0FBaUNGLFFBQWpDLEVBQTJDO0FBQ2hEdkIsUUFBTSxDQUFDMEIsS0FBUCxDQUFhLFVBQUNDLFNBQUQsRUFBd0I7QUFBQSxzQ0FBVEMsSUFBUztBQUFUQSxVQUFTO0FBQUE7O0FBQ25DTCxZQUFRLENBQUNJLFNBQUQsRUFBWUMsSUFBWixDQUFSO0FBQ0QsR0FGRDtBQUdEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFlQyxrQ0FBdEI7QUFBQTtBQUFBOzs7c1VBQU8sa0JBQ0xqQixLQURLLEVBRUxrQixLQUZLLEVBR0xQLFFBSEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtMRCx5QkFBYSxDQUFDVixLQUFELEVBQVEsVUFBQ2dCLElBQUQsRUFBVTtBQUFBLG9DQUNKRSxLQUFLLENBQUNDLFFBQU4sQ0FBZUgsSUFBZixDQURJO0FBQUEsa0JBQ3JCSSxLQURxQixtQkFDckJBLEtBRHFCO0FBQUEsa0JBQ2RDLEtBRGMsbUJBQ2RBLEtBRGM7O0FBRTdCLGtCQUFJRCxLQUFKLEVBQVc7QUFDVCxzQkFBTSxJQUFJRSxLQUFKLENBQVUscUJBQVYsQ0FBTjtBQUNELGVBRkQsTUFFTztBQUNMWCx3QkFBUSxDQUFDVSxLQUFELENBQVI7QUFDQSx1QkFBT0EsS0FBUDtBQUNEO0FBQ0YsYUFSWSxDQUFiOztBQUxLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFnQkEsU0FBU0UsY0FBVCxDQUF3QnZCLEtBQXhCLEVBQStCQyxJQUEvQixFQUFxQ1UsUUFBckMsRUFBNEQ7QUFBQSxNQUFibEIsT0FBYSx1RUFBSCxDQUFHO0FBQ2pFSixPQUFLLENBQUNtQyxJQUFOLENBQVc7QUFBRS9CLFdBQU8sRUFBUEEsT0FBRjtBQUFXZ0MsU0FBSyxFQUFFLENBQUN6QixLQUFELEVBQVFDLElBQVIsRUFBY1UsUUFBZDtBQUFsQixHQUFYO0FBQ0Q7QUFHTSxTQUFlZSxRQUF0QjtBQUFBO0FBQUEsQyxDQWFBOzs7NFNBYk8sa0JBQXdCQyxNQUF4QixFQUFnQ0MsUUFBaEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFbUM3QixtQkFBbUIsQ0FBQyxhQUFELEVBQWdCLENBQUM0QixNQUFELEVBQVNDLFFBQVQsQ0FBaEIsQ0FGdEQ7O0FBQUE7QUFBQTtBQUFBO0FBRUVDLGdCQUZGO0FBRVFDLG1CQUZSO0FBRWlCQyxvQkFGakI7O0FBQUEsa0JBR0FGLElBQUksS0FBSyxLQUhUO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhDQUlNLEtBSk47O0FBQUE7QUFBQSw4Q0FNSTtBQUFFQSxrQkFBSSxFQUFKQSxJQUFGO0FBQVFDLHFCQUFPLEVBQVBBLE9BQVI7QUFBaUJDLHNCQUFRLEVBQVJBO0FBQWpCLGFBTko7O0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBUUksSUFSSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBY1BDLFdBQVcsNlNBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FDTDNDLEtBQUssQ0FBQzRDLE9BQU4sRUFESztBQUFBO0FBQUE7QUFBQTs7QUFFSkMsY0FGSSxHQUVHN0MsS0FBSyxDQUFDOEMsR0FBTixFQUZIO0FBR0pWLGVBSEksR0FHSVMsSUFBSSxDQUFDVCxLQUhUO0FBSUpXLGtCQUpJLEdBSU9YLEtBQUssQ0FBQyxDQUFELENBSlo7QUFBQTtBQUFBO0FBQUEsaUJBT1cxQixtQkFBbUIsTUFBbkIsVUFBb0IwQixLQUFLLENBQUMsQ0FBRCxDQUF6Qix5SkFBaUNBLEtBQUssQ0FBQyxDQUFELENBQXRDLEdBUFg7O0FBQUE7QUFPRnhCLGNBUEU7QUFRTm1DLGtCQUFRLENBQUMsS0FBRCxFQUFRbkMsSUFBUixDQUFSO0FBUk07QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFVTm1DLGtCQUFRLENBQUMsSUFBRCxFQUFPLEVBQVAsQ0FBUjs7QUFWTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFELElBYVIsR0FiUSxDQUFYIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db3JlLUFQSS9Db25uZWN0QVBJLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXG5cbi8vIFRoaXMgZmlsZSBhaW1zIHRvIG1ha2UgY29tbXVuaWNhdGlvbSBiZXR3ZWVuIGNsaWVudCBhbmQgc2VydmVyIGEgbG90IGVhc2llciwgdXNpbmcgcHJvbWlzZVxuXG4vLy0tLS0tLS0tLS0tLS1bICAgSW1wb3J0cyAgIF0tLS0tLS0tLS0tLS0tXFxcXFxuaW1wb3J0IHsgUHJpb3JpdHlRdWV1ZSB9IGZyb20gXCIuLi9BbGdvcml0aG1zL1ByaW9yaXR5UXVldWVcIjtcbmltcG9ydCAqIGFzIEpvaSBmcm9tIFwiam9pXCI7XG5cbi8vLS0tLS0tLS0tLS0tLVtDb3JlIFZhcmlhYmxlc10tLS0tLS0tLS0tLS0tXFxcXFxubGV0IGNsaWVudDtcbmxldCBRdWV1ZSA9IG5ldyBQcmlvcml0eVF1ZXVlKChhLCBiKSA9PiBhLnByb3JpdHkgPiBiLnByb3JpdHkpO1xuXG4vKipcbiAqICBAcGFyYW0ge3N0cmluZ30gc29ja2V0IC0gVGhlIHNvY2tldCBpbyBDbGllbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uKHNvY2tldCkge1xuICBjbGllbnQgPSBzb2NrZXQ7XG5cbiAgLy9EYXRhIEhhbmRzaGFrZVxuICBzb2NrZXQuZW1pdChcIkNvbm5lY3Rpb25Fc3RhYmxpc2VkXCIsIERhdGUubm93KCkpO1xufVxuXG4vKipcbiAqICBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBUaGUgRXZlbnQgbmFtZVxuICogIEBwYXJhbSB7YXJyYXl9IGRhdGEgICAtIFRoZSBkYXRhIHRvIHNlbmQgdG8gdGhlIHNlcnZlclxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VuZERhdGFXaXRoUHJvbWlzZShldmVudCwgZGF0YSkge1xuICAvLy0tLS0tLS0tLS0tLS1bICAgQ3JlYXRlIGEgYmFzaWMgcHJvbWlzZSB0byByZXR1cm4gZGF0YSAgIF0tLS0tLS0tLS0tLS0tXFxcXFxuICBjb25zdCBEYXRhUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgY2xpZW50LmVtaXQoZXZlbnQsIC4uLmRhdGEpO1xuXG4gICAgICBjbGllbnQub24oZXZlbnQgKyBcIl9DYWxsYmFja1wiLCAoLi4uYXJncykgPT4ge1xuICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgIHJlc29sdmUoLi4uYXJncyk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChyZXNvbHZlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICByZWplY3QoXCJObyBkYXRhIHJldHVybmVkIHdpdGhpbiAyIHNlY29uZHMsIGlzIHRoZXJlIGEgZGF0YSBjYWxsYmFjaz9cIik7XG4gICAgICB9XG4gICAgfSwgMjAwMCk7XG4gIH0pO1xuICByZXR1cm4gRGF0YVByb21pc2U7XG59XG5cbi8qKlxuICogIEBwYXJhbSB7c3RyaW5nfSBldmVudCAgICAgICAgLSBUaGUgRXZlbnQgbmFtZVxuICogIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrICAgLSBUaGUgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBkYXRhIGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlblRvRXZlbnQoZXZlbnQsIGNhbGxiYWNrKSB7XG4gIC8vIEF0dGFjaCBldmVudCBoYW5kbGUgdG8gZnVuY3Rpb25zXG4gIGNsaWVudC5vbihldmVudCwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VuZERhdGFUb1NlcnZlcihldmVudCwgZGF0YSl7XG4gIGNsaWVudC5lbWl0KGV2ZW50LCAuLi5kYXRhKVxufVxuXG4vKipcbiAqICBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAgIC0gVGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBsaXN0ZW4gdG8gYWxsIGV2ZW50cyBzZW50IHRvIHRoZSBjbGllbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF0dGFjaFRvTWFpbkV2ZW50U3RyZWFtKGNhbGxiYWNrKSB7XG4gIGNsaWVudC5vbkFueSgoZXZlbnROYW1lLCAuLi5hcmdzKSA9PiB7XG4gICAgY2FsbGJhY2soZXZlbnROYW1lLCBhcmdzKTtcbiAgfSk7XG59XG5cbi8qKlxuICogIEBwYXJhbSB7c3RyaW5nfSBldmVudCAgICAgICAgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gbGlzdGVuIHRvXG4gKiAgQHBhcmFtIHtzY2VtYX0gc2NlbWEgICAgICAgICAtIFRoZSBkYXRhIHNjaGVtZSB0byBmb2xvd1xuICogIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrICAgLSBUaGUgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBkYXRhXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0ZW5Gb3JFdmVudFdpdGhTY2hlbWFWYWxpZGF0aW9uKFxuICBldmVudCxcbiAgc2NlbWEsXG4gIGNhbGxiYWNrXG4pIHtcbiAgbGlzdGVuVG9FdmVudChldmVudCwgKGFyZ3MpID0+IHtcbiAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gc2NlbWEudmFsaWRhdGUoYXJncyk7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTY2VobWEgQ2hlY2sgRmFpbGVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayh2YWx1ZSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERhdGFUb1F1ZXVlKGV2ZW50LCBkYXRhLCBjYWxsYmFjaywgcHJvcml0eSA9IDEpIHtcbiAgUXVldWUucHVzaCh7IHByb3JpdHksIGlucHV0OiBbZXZlbnQsIGRhdGEsIGNhbGxiYWNrXSB9KTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gam9pbkdhbWUoZ2FtZUlkLCBwYXNzd29yZCkge1xuICB0cnl7XG4gICAgbGV0IFtzZWVkLCBjbGllbnRzLCB1c2VyRGF0YV0gPSBhd2FpdCBzZW5kRGF0YVdpdGhQcm9taXNlKFwiR2FtZUNvbm5lY3RcIiwgW2dhbWVJZCwgcGFzc3dvcmRdKVxuICAgIGlmKHNlZWQgPT09IGZhbHNlKXtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4geyBzZWVkLCBjbGllbnRzLCB1c2VyRGF0YSB9XG4gIH1jYXRjaHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIFxufVxuXG4vLy0tLS0tLS0tLS0tLS1bICAgQWxsIE5vbiBlc3Nlc250aWFsIGNvbW11bmljYXRpb24gICBdLS0tLS0tLS0tLS0tLVxcXFxcbnNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgaWYgKCFRdWV1ZS5pc0VtcHR5KCkpIHtcbiAgICBsZXQgZnVuYyA9IFF1ZXVlLnBvcCgpO1xuICAgIGxldCBpbnB1dCA9IGZ1bmMuaW5wdXQ7XG4gICAgbGV0IGNhbGxCYWNrID0gaW5wdXRbMl07XG4gICAgdHJ5IHtcbiAgICAgIC8vRGVzdHJ1Y3R1cmUgYW5kIHNlbmQgZGF0YVxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCBzZW5kRGF0YVdpdGhQcm9taXNlKGlucHV0WzBdLCAuLi5pbnB1dFsxXSk7XG4gICAgICBjYWxsQmFjayhmYWxzZSwgZGF0YSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBjYWxsQmFjayh0cnVlLCBbXSk7XG4gICAgfVxuICB9XG59LCA1MDApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Core-API/ConnectAPI.js\n");

/***/ })

});