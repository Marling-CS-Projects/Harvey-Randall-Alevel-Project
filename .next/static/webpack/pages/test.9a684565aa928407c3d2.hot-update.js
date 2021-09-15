self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/Core-API/ConnectAPI.js":
/*!*******************************************!*\
  !*** ./components/Core-API/ConnectAPI.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startSeverClientCommunication": function() { return /* binding */ startSeverClientCommunication; },
/* harmony export */   "sendDataWithPromise": function() { return /* binding */ sendDataWithPromise; },
/* harmony export */   "listenToEvent": function() { return /* binding */ listenToEvent; },
/* harmony export */   "attachToMainEventStream": function() { return /* binding */ attachToMainEventStream; },
/* harmony export */   "listenForEventWithSchemaValidation": function() { return /* binding */ listenForEventWithSchemaValidation; },
/* harmony export */   "addDataToQueue": function() { return /* binding */ addDataToQueue; },
/* harmony export */   "joinGame": function() { return /* binding */ joinGame; }
/* harmony export */ });
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Algorithms_PriorityQueue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Algorithms/PriorityQueue */ "./components/Algorithms/PriorityQueue.js");
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! joi */ "./node_modules/joi/dist/joi-browser.min.js");
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);




// Written By Harvey Randall \\
// This file aims to make communicatiom between client and server a lot easier, using promise
//-------------[   Imports   ]-------------\\

 //-------------[Core Variables]-------------\\

var client;
var Queue = new _Algorithms_PriorityQueue__WEBPACK_IMPORTED_MODULE_4__.PriorityQueue(function (a, b) {
  return a.prority > b.prority;
});
/**
 *  @param {string} socket - The socket io Client
 */

function startSeverClientCommunication(socket) {
  client = socket; //Data Handshake

  socket.emit("ConnectionEstablised", Date.now());
}
/**
 *  @param {string} event - The Event name
 *  @param {array} data   - The data to send to the server
 */

function sendDataWithPromise(event, data) {
  //-------------[   Create a basic promise to return data   ]-------------\\
  var DataPromise = new Promise(function (resolve, reject) {
    var resolved = false;

    try {
      var _client;

      (_client = client).emit.apply(_client, [event].concat((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(data)));

      client.on(event + "_Callback", function () {
        resolved = true;
        resolve.apply(void 0, arguments);
      });
    } catch (err) {
      resolved = true;
      reject(err);
    }

    setTimeout(function () {
      if (resolved === false) {
        resolved = true;
        reject("No data returned within 2 seconds, is there a data callback?");
      }
    }, 2000);
  });
  return DataPromise;
}
/**
 *  @param {string} event        - The Event name
 *  @param {function} callback   - The function that will be called with the data back
 */

function listenToEvent(event, callback) {
  // Attach event handle to functions
  client.on(event, callback);
}
/**
 *  @param {function} callback   - The function that will listen to all events sent to the client
 */

function attachToMainEventStream(callback) {
  client.onAny(function (eventName) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    callback(eventName, args);
  });
}
/**
 *  @param {string} event        - The name of the event to listen to
 *  @param {scema} scema         - The data scheme to folow
 *  @param {function} callback   - The function that will be called with the data
 */

function listenForEventWithSchemaValidation(_x, _x2, _x3) {
  return _listenForEventWithSchemaValidation.apply(this, arguments);
}

function _listenForEventWithSchemaValidation() {
  _listenForEventWithSchemaValidation = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(event, scema, callback) {
    return H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            listenToEvent(event, function (args) {
              var _scema$validate = scema.validate(args),
                  error = _scema$validate.error,
                  value = _scema$validate.value;

              if (error) {
                throw new Error("Scehma Check Failed");
              } else {
                callback(value);
                return value;
              }
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _listenForEventWithSchemaValidation.apply(this, arguments);
}

function addDataToQueue(event, data, callback) {
  var prority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  Queue.push({
    prority: prority,
    input: [event, data, callback]
  });
}
function joinGame(_x4, _x5) {
  return _joinGame.apply(this, arguments);
} //-------------[   All Non essesntial communication   ]-------------\\

function _joinGame() {
  _joinGame = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(gameId, password) {
    var _yield$sendDataWithPr, _yield$sendDataWithPr2, seed, clients, userData;

    return H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return sendDataWithPromise("GameConnect", [gameId, password]);

          case 2:
            _yield$sendDataWithPr = _context3.sent;
            _yield$sendDataWithPr2 = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_yield$sendDataWithPr, 3);
            seed = _yield$sendDataWithPr2[0];
            clients = _yield$sendDataWithPr2[1];
            userData = _yield$sendDataWithPr2[2];
            console.log({
              seed: seed,
              clients: clients,
              userData: userData
            });
            return _context3.abrupt("return", {
              seed: seed,
              clients: clients,
              userData: userData
            });

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _joinGame.apply(this, arguments);
}

setInterval( /*#__PURE__*/(0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
  var func, input, callBack, data;
  return H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (Queue.isEmpty()) {
            _context.next = 14;
            break;
          }

          func = Queue.pop();
          input = func.input;
          callBack = input[2];
          _context.prev = 4;
          _context.next = 7;
          return sendDataWithPromise.apply(void 0, [input[0]].concat((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(input[1])));

        case 7:
          data = _context.sent;
          callBack(false, data);
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](4);
          callBack(true, []);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[4, 11]]);
})), 500);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3JlLUFQSS9Db25uZWN0QVBJLmpzIl0sIm5hbWVzIjpbImNsaWVudCIsIlF1ZXVlIiwiUHJpb3JpdHlRdWV1ZSIsImEiLCJiIiwicHJvcml0eSIsInN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uIiwic29ja2V0IiwiZW1pdCIsIkRhdGUiLCJub3ciLCJzZW5kRGF0YVdpdGhQcm9taXNlIiwiZXZlbnQiLCJkYXRhIiwiRGF0YVByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc29sdmVkIiwib24iLCJlcnIiLCJzZXRUaW1lb3V0IiwibGlzdGVuVG9FdmVudCIsImNhbGxiYWNrIiwiYXR0YWNoVG9NYWluRXZlbnRTdHJlYW0iLCJvbkFueSIsImV2ZW50TmFtZSIsImFyZ3MiLCJsaXN0ZW5Gb3JFdmVudFdpdGhTY2hlbWFWYWxpZGF0aW9uIiwic2NlbWEiLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiLCJFcnJvciIsImFkZERhdGFUb1F1ZXVlIiwicHVzaCIsImlucHV0Iiwiam9pbkdhbWUiLCJnYW1lSWQiLCJwYXNzd29yZCIsInNlZWQiLCJjbGllbnRzIiwidXNlckRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0SW50ZXJ2YWwiLCJpc0VtcHR5IiwiZnVuYyIsInBvcCIsImNhbGxCYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0NBR0E7O0FBQ0EsSUFBSUEsTUFBSjtBQUNBLElBQUlDLEtBQUssR0FBRyxJQUFJQyxvRUFBSixDQUFrQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxTQUFVRCxDQUFDLENBQUNFLE9BQUYsR0FBWUQsQ0FBQyxDQUFDQyxPQUF4QjtBQUFBLENBQWxCLENBQVo7QUFFQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0MsNkJBQVQsQ0FBdUNDLE1BQXZDLEVBQStDO0FBQ3BE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Q0FBQyxhQUFELEVBQWdCLENBQUMyQixNQUFELEVBQVNDLFFBQVQsQ0FBaEIsQ0FEcEQ7O0FBQUE7QUFBQTtBQUFBO0FBQ0FDLGdCQURBO0FBQ01DLG1CQUROO0FBQ2VDLG9CQURmO0FBRUxDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFSixrQkFBSSxFQUFKQSxJQUFGO0FBQVFDLHFCQUFPLEVBQVBBLE9BQVI7QUFBaUJDLHNCQUFRLEVBQVJBO0FBQWpCLGFBQVo7QUFGSyw4Q0FHRTtBQUFFRixrQkFBSSxFQUFKQSxJQUFGO0FBQVFDLHFCQUFPLEVBQVBBLE9BQVI7QUFBaUJDLHNCQUFRLEVBQVJBO0FBQWpCLGFBSEY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQU9QRyxXQUFXLDJTQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQ0w1QyxLQUFLLENBQUM2QyxPQUFOLEVBREs7QUFBQTtBQUFBO0FBQUE7O0FBRUpDLGNBRkksR0FFRzlDLEtBQUssQ0FBQytDLEdBQU4sRUFGSDtBQUdKWixlQUhJLEdBR0lXLElBQUksQ0FBQ1gsS0FIVDtBQUlKYSxrQkFKSSxHQUlPYixLQUFLLENBQUMsQ0FBRCxDQUpaO0FBQUE7QUFBQTtBQUFBLGlCQU9XekIsbUJBQW1CLE1BQW5CLFVBQW9CeUIsS0FBSyxDQUFDLENBQUQsQ0FBekIsd0pBQWlDQSxLQUFLLENBQUMsQ0FBRCxDQUF0QyxHQVBYOztBQUFBO0FBT0Z2QixjQVBFO0FBUU5vQyxrQkFBUSxDQUFDLEtBQUQsRUFBUXBDLElBQVIsQ0FBUjtBQVJNO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVU5vQyxrQkFBUSxDQUFDLElBQUQsRUFBTyxFQUFQLENBQVI7O0FBVk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBRCxJQWFSLEdBYlEsQ0FBWCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0LjlhNjg0NTY1YWE5Mjg0MDdjM2QyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcclxuXHJcbi8vIFRoaXMgZmlsZSBhaW1zIHRvIG1ha2UgY29tbXVuaWNhdGlvbSBiZXR3ZWVuIGNsaWVudCBhbmQgc2VydmVyIGEgbG90IGVhc2llciwgdXNpbmcgcHJvbWlzZVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tWyAgIEltcG9ydHMgICBdLS0tLS0tLS0tLS0tLVxcXFxcclxuaW1wb3J0IHsgUHJpb3JpdHlRdWV1ZSB9IGZyb20gXCIuLi9BbGdvcml0aG1zL1ByaW9yaXR5UXVldWVcIjtcclxuaW1wb3J0ICogYXMgSm9pIGZyb20gXCJqb2lcIjtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLVtDb3JlIFZhcmlhYmxlc10tLS0tLS0tLS0tLS0tXFxcXFxyXG5sZXQgY2xpZW50O1xyXG5sZXQgUXVldWUgPSBuZXcgUHJpb3JpdHlRdWV1ZSgoYSwgYikgPT4gYS5wcm9yaXR5ID4gYi5wcm9yaXR5KTtcclxuXHJcbi8qKlxyXG4gKiAgQHBhcmFtIHtzdHJpbmd9IHNvY2tldCAtIFRoZSBzb2NrZXQgaW8gQ2xpZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24oc29ja2V0KSB7XHJcbiAgY2xpZW50ID0gc29ja2V0O1xyXG5cclxuICAvL0RhdGEgSGFuZHNoYWtlXHJcbiAgc29ja2V0LmVtaXQoXCJDb25uZWN0aW9uRXN0YWJsaXNlZFwiLCBEYXRlLm5vdygpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqICBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBUaGUgRXZlbnQgbmFtZVxyXG4gKiAgQHBhcmFtIHthcnJheX0gZGF0YSAgIC0gVGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgc2VydmVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VuZERhdGFXaXRoUHJvbWlzZShldmVudCwgZGF0YSkge1xyXG4gIC8vLS0tLS0tLS0tLS0tLVsgICBDcmVhdGUgYSBiYXNpYyBwcm9taXNlIHRvIHJldHVybiBkYXRhICAgXS0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgY29uc3QgRGF0YVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNsaWVudC5lbWl0KGV2ZW50LCAuLi5kYXRhKTtcclxuXHJcbiAgICAgIGNsaWVudC5vbihldmVudCArIFwiX0NhbGxiYWNrXCIsICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xyXG4gICAgICAgIHJlc29sdmUoLi4uYXJncyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJlc29sdmVkID0gdHJ1ZTtcclxuICAgICAgcmVqZWN0KGVycik7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHJlc29sdmVkID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcclxuICAgICAgICByZWplY3QoXCJObyBkYXRhIHJldHVybmVkIHdpdGhpbiAyIHNlY29uZHMsIGlzIHRoZXJlIGEgZGF0YSBjYWxsYmFjaz9cIik7XHJcbiAgICAgIH1cclxuICAgIH0sIDIwMDApO1xyXG4gIH0pO1xyXG4gIHJldHVybiBEYXRhUHJvbWlzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqICBAcGFyYW0ge3N0cmluZ30gZXZlbnQgICAgICAgIC0gVGhlIEV2ZW50IG5hbWVcclxuICogIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrICAgLSBUaGUgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBkYXRhIGJhY2tcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5Ub0V2ZW50KGV2ZW50LCBjYWxsYmFjaykge1xyXG4gIC8vIEF0dGFjaCBldmVudCBoYW5kbGUgdG8gZnVuY3Rpb25zXHJcbiAgY2xpZW50Lm9uKGV2ZW50LCBjYWxsYmFjayk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgICAtIFRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgbGlzdGVuIHRvIGFsbCBldmVudHMgc2VudCB0byB0aGUgY2xpZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoVG9NYWluRXZlbnRTdHJlYW0oY2FsbGJhY2spIHtcclxuICBjbGllbnQub25BbnkoKGV2ZW50TmFtZSwgLi4uYXJncykgPT4ge1xyXG4gICAgY2FsbGJhY2soZXZlbnROYW1lLCBhcmdzKTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqICBAcGFyYW0ge3N0cmluZ30gZXZlbnQgICAgICAgIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIGxpc3RlbiB0b1xyXG4gKiAgQHBhcmFtIHtzY2VtYX0gc2NlbWEgICAgICAgICAtIFRoZSBkYXRhIHNjaGVtZSB0byBmb2xvd1xyXG4gKiAgQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgICAtIFRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGRhdGFcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0ZW5Gb3JFdmVudFdpdGhTY2hlbWFWYWxpZGF0aW9uKFxyXG4gIGV2ZW50LFxyXG4gIHNjZW1hLFxyXG4gIGNhbGxiYWNrXHJcbikge1xyXG4gIGxpc3RlblRvRXZlbnQoZXZlbnQsIChhcmdzKSA9PiB7XHJcbiAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gc2NlbWEudmFsaWRhdGUoYXJncyk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2NlaG1hIENoZWNrIEZhaWxlZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhbGxiYWNrKHZhbHVlKTtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF0YVRvUXVldWUoZXZlbnQsIGRhdGEsIGNhbGxiYWNrLCBwcm9yaXR5ID0gMSkge1xyXG4gIFF1ZXVlLnB1c2goeyBwcm9yaXR5LCBpbnB1dDogW2V2ZW50LCBkYXRhLCBjYWxsYmFja10gfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gam9pbkdhbWUoZ2FtZUlkLCBwYXNzd29yZCkge1xyXG4gIGxldCBbc2VlZCwgY2xpZW50cywgdXNlckRhdGFdID0gYXdhaXQgc2VuZERhdGFXaXRoUHJvbWlzZShcIkdhbWVDb25uZWN0XCIsIFtnYW1lSWQsIHBhc3N3b3JkXSlcclxuICBjb25zb2xlLmxvZyh7IHNlZWQsIGNsaWVudHMsIHVzZXJEYXRhIH0pXHJcbiAgcmV0dXJuIHsgc2VlZCwgY2xpZW50cywgdXNlckRhdGEgfVxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS1bICAgQWxsIE5vbiBlc3Nlc250aWFsIGNvbW11bmljYXRpb24gICBdLS0tLS0tLS0tLS0tLVxcXFxcclxuc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xyXG4gIGlmICghUXVldWUuaXNFbXB0eSgpKSB7XHJcbiAgICBsZXQgZnVuYyA9IFF1ZXVlLnBvcCgpO1xyXG4gICAgbGV0IGlucHV0ID0gZnVuYy5pbnB1dDtcclxuICAgIGxldCBjYWxsQmFjayA9IGlucHV0WzJdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy9EZXN0cnVjdHVyZSBhbmQgc2VuZCBkYXRhXHJcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgc2VuZERhdGFXaXRoUHJvbWlzZShpbnB1dFswXSwgLi4uaW5wdXRbMV0pO1xyXG4gICAgICBjYWxsQmFjayhmYWxzZSwgZGF0YSk7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgY2FsbEJhY2sodHJ1ZSwgW10pO1xyXG4gICAgfVxyXG4gIH1cclxufSwgNTAwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==