"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addConnectionToIo = addConnectionToIo;
exports.ListenToConnection = ListenToConnection;
exports.stopListening = stopListening;
exports.FetchIo = FetchIo;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _uuid = require("uuid");

var io;
var hooks = {};

function addConnectionToIo(ioInput) {
  io = ioInput;
  io.on("connection", function (socket) {
    for (var _i = 0, _Object$entries = Object.entries(hooks); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
          _key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      value(socket, "Connection");
    }

    socket.on("GameConnect", function (id, password) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(hooks); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = (0, _slicedToArray2["default"])(_Object$entries2[_i2], 2),
            _key2 = _Object$entries2$_i[0],
            _value = _Object$entries2$_i[1];

        _value(socket, "GameConnect", id, password);
      }
    });
  });
}

function ListenToConnection(callBack) {
  var UUID = (0, _uuid.v4)();
  hooks[UUID] = callBack;
  return UUID;
}

function stopListening(id) {
  delete hooks[id];
}

function FetchIo() {
  return io;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvdXRpbHMvY29ubmVjdGlvbkhvb2sudHMiXSwibmFtZXMiOlsiaW8iLCJob29rcyIsImFkZENvbm5lY3Rpb25Ub0lvIiwiaW9JbnB1dCIsIm9uIiwic29ja2V0IiwiT2JqZWN0IiwiZW50cmllcyIsImtleSIsInZhbHVlIiwiaWQiLCJwYXNzd29yZCIsIkxpc3RlblRvQ29ubmVjdGlvbiIsImNhbGxCYWNrIiwiVVVJRCIsInN0b3BMaXN0ZW5pbmciLCJGZXRjaElvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBOztBQU1BLElBQUlBLEVBQUo7QUFDQSxJQUFJQyxLQUFxQixHQUFHLEVBQTVCOztBQUVPLFNBQVNDLGlCQUFULENBQTJCQyxPQUEzQixFQUFzRjtBQUN6RkgsRUFBQUEsRUFBRSxHQUFHRyxPQUFMO0FBRUFILEVBQUFBLEVBQUUsQ0FBQ0ksRUFBSCxDQUFNLFlBQU4sRUFBb0IsVUFBQ0MsTUFBRCxFQUFZO0FBQzVCLHVDQUEyQkMsTUFBTSxDQUFDQyxPQUFQLENBQWVOLEtBQWYsQ0FBM0IscUNBQWtEO0FBQUE7QUFBQSxVQUF0Q08sSUFBc0M7QUFBQSxVQUFqQ0MsS0FBaUM7O0FBQzlDQSxNQUFBQSxLQUFLLENBQUNKLE1BQUQsRUFBUyxZQUFULENBQUw7QUFDSDs7QUFFREEsSUFBQUEsTUFBTSxDQUFDRCxFQUFQLENBQVUsYUFBVixFQUF5QixVQUFDTSxFQUFELEVBQUtDLFFBQUwsRUFBa0I7QUFDdkMsMkNBQTJCTCxNQUFNLENBQUNDLE9BQVAsQ0FBZU4sS0FBZixDQUEzQix3Q0FBa0Q7QUFBQTtBQUFBLFlBQXRDTyxLQUFzQztBQUFBLFlBQWpDQyxNQUFpQzs7QUFDOUNBLFFBQUFBLE1BQUssQ0FBQ0osTUFBRCxFQUFTLGFBQVQsRUFBd0JLLEVBQXhCLEVBQTRCQyxRQUE1QixDQUFMO0FBQ0g7QUFDSixLQUpEO0FBS0gsR0FWRDtBQWFIOztBQUVNLFNBQVNDLGtCQUFULENBQTRCQyxRQUE1QixFQUFnRTtBQUNuRSxNQUFJQyxJQUFJLEdBQUcsZUFBWDtBQUNBYixFQUFBQSxLQUFLLENBQUNhLElBQUQsQ0FBTCxHQUFjRCxRQUFkO0FBQ0EsU0FBT0MsSUFBUDtBQUNIOztBQUVNLFNBQVNDLGFBQVQsQ0FBdUJMLEVBQXZCLEVBQWlDO0FBQ3BDLFNBQU9ULEtBQUssQ0FBQ1MsRUFBRCxDQUFaO0FBQ0g7O0FBRU0sU0FBU00sT0FBVCxHQUFtQjtBQUN0QixTQUFPaEIsRUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmVyIH0gZnJvbSBcInNvY2tldC5pb1wiO1xyXG5pbXBvcnQgeyBEZWZhdWx0RXZlbnRzTWFwIH0gZnJvbSBcInNvY2tldC5pby9kaXN0L3R5cGVkLWV2ZW50c1wiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmludGVyZmFjZSBob29rc0ludGVyZmFjZSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBDYWxsYWJsZUZ1bmN0aW9uXHJcbn1cclxuXHJcbmxldCBpbzogU2VydmVyPERlZmF1bHRFdmVudHNNYXAsIERlZmF1bHRFdmVudHNNYXA+IHwgdW5kZWZpbmVkXHJcbmxldCBob29rczogaG9va3NJbnRlcmZhY2UgPSB7fVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbm5lY3Rpb25Ub0lvKGlvSW5wdXQ6IFNlcnZlcjxEZWZhdWx0RXZlbnRzTWFwLCBEZWZhdWx0RXZlbnRzTWFwPik6IHZvaWQge1xyXG4gICAgaW8gPSBpb0lucHV0XHJcblxyXG4gICAgaW8ub24oXCJjb25uZWN0aW9uXCIsIChzb2NrZXQpID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhob29rcykpIHtcclxuICAgICAgICAgICAgdmFsdWUoc29ja2V0LCBcIkNvbm5lY3Rpb25cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNvY2tldC5vbihcIkdhbWVDb25uZWN0XCIsIChpZCwgcGFzc3dvcmQpID0+IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoaG9va3MpKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZShzb2NrZXQsIFwiR2FtZUNvbm5lY3RcIiwgaWQsIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExpc3RlblRvQ29ubmVjdGlvbihjYWxsQmFjazogQ2FsbGFibGVGdW5jdGlvbik6IHN0cmluZyB7XHJcbiAgICBsZXQgVVVJRCA9IHV1aWR2NCgpXHJcbiAgICBob29rc1tVVUlEXSA9IGNhbGxCYWNrXHJcbiAgICByZXR1cm4gVVVJRFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcExpc3RlbmluZyhpZDpzdHJpbmcpe1xyXG4gICAgZGVsZXRlIGhvb2tzW2lkXVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRmV0Y2hJbygpIHtcclxuICAgIHJldHVybiBpb1xyXG59Il19