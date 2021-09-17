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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvdXRpbHMvY29ubmVjdGlvbkhvb2sudHMiXSwibmFtZXMiOlsiaW8iLCJob29rcyIsImFkZENvbm5lY3Rpb25Ub0lvIiwiaW9JbnB1dCIsIm9uIiwic29ja2V0IiwiT2JqZWN0IiwiZW50cmllcyIsImtleSIsInZhbHVlIiwiaWQiLCJwYXNzd29yZCIsIkxpc3RlblRvQ29ubmVjdGlvbiIsImNhbGxCYWNrIiwiVVVJRCIsInN0b3BMaXN0ZW5pbmciLCJGZXRjaElvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBOztBQU1BLElBQUlBLEVBQUo7QUFDQSxJQUFJQyxLQUFxQixHQUFHLEVBQTVCOztBQUVPLFNBQVNDLGlCQUFULENBQTJCQyxPQUEzQixFQUFzRjtBQUN6RkgsRUFBQUEsRUFBRSxHQUFHRyxPQUFMO0FBRUFILEVBQUFBLEVBQUUsQ0FBQ0ksRUFBSCxDQUFNLFlBQU4sRUFBb0IsVUFBQ0MsTUFBRCxFQUFZO0FBQzVCLHVDQUEyQkMsTUFBTSxDQUFDQyxPQUFQLENBQWVOLEtBQWYsQ0FBM0IscUNBQWtEO0FBQUE7QUFBQSxVQUF0Q08sSUFBc0M7QUFBQSxVQUFqQ0MsS0FBaUM7O0FBQzlDQSxNQUFBQSxLQUFLLENBQUNKLE1BQUQsRUFBUyxZQUFULENBQUw7QUFDSDs7QUFFREEsSUFBQUEsTUFBTSxDQUFDRCxFQUFQLENBQVUsYUFBVixFQUF5QixVQUFDTSxFQUFELEVBQUtDLFFBQUwsRUFBa0I7QUFDdkMsMkNBQTJCTCxNQUFNLENBQUNDLE9BQVAsQ0FBZU4sS0FBZixDQUEzQix3Q0FBa0Q7QUFBQTtBQUFBLFlBQXRDTyxLQUFzQztBQUFBLFlBQWpDQyxNQUFpQzs7QUFDOUNBLFFBQUFBLE1BQUssQ0FBQ0osTUFBRCxFQUFTLGFBQVQsRUFBd0JLLEVBQXhCLEVBQTRCQyxRQUE1QixDQUFMO0FBQ0g7QUFDSixLQUpEO0FBS0gsR0FWRDtBQWFIOztBQUVNLFNBQVNDLGtCQUFULENBQTRCQyxRQUE1QixFQUFnRTtBQUNuRSxNQUFJQyxJQUFJLEdBQUcsZUFBWDtBQUNBYixFQUFBQSxLQUFLLENBQUNhLElBQUQsQ0FBTCxHQUFjRCxRQUFkO0FBQ0EsU0FBT0MsSUFBUDtBQUNIOztBQUVNLFNBQVNDLGFBQVQsQ0FBdUJMLEVBQXZCLEVBQWlDO0FBQ3BDLFNBQU9ULEtBQUssQ0FBQ1MsRUFBRCxDQUFaO0FBQ0g7O0FBRU0sU0FBU00sT0FBVCxHQUFtQjtBQUN0QixTQUFPaEIsRUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmVyIH0gZnJvbSBcInNvY2tldC5pb1wiO1xuaW1wb3J0IHsgRGVmYXVsdEV2ZW50c01hcCB9IGZyb20gXCJzb2NrZXQuaW8vZGlzdC90eXBlZC1ldmVudHNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5pbnRlcmZhY2UgaG9va3NJbnRlcmZhY2Uge1xuICAgIFtrZXk6IHN0cmluZ106IENhbGxhYmxlRnVuY3Rpb25cbn1cblxubGV0IGlvOiBTZXJ2ZXI8RGVmYXVsdEV2ZW50c01hcCwgRGVmYXVsdEV2ZW50c01hcD4gfCB1bmRlZmluZWRcbmxldCBob29rczogaG9va3NJbnRlcmZhY2UgPSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ29ubmVjdGlvblRvSW8oaW9JbnB1dDogU2VydmVyPERlZmF1bHRFdmVudHNNYXAsIERlZmF1bHRFdmVudHNNYXA+KTogdm9pZCB7XG4gICAgaW8gPSBpb0lucHV0XG5cbiAgICBpby5vbihcImNvbm5lY3Rpb25cIiwgKHNvY2tldCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhob29rcykpIHtcbiAgICAgICAgICAgIHZhbHVlKHNvY2tldCwgXCJDb25uZWN0aW9uXCIpXG4gICAgICAgIH1cblxuICAgICAgICBzb2NrZXQub24oXCJHYW1lQ29ubmVjdFwiLCAoaWQsIHBhc3N3b3JkKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhob29rcykpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZShzb2NrZXQsIFwiR2FtZUNvbm5lY3RcIiwgaWQsIHBhc3N3b3JkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG5cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gTGlzdGVuVG9Db25uZWN0aW9uKGNhbGxCYWNrOiBDYWxsYWJsZUZ1bmN0aW9uKTogc3RyaW5nIHtcbiAgICBsZXQgVVVJRCA9IHV1aWR2NCgpXG4gICAgaG9va3NbVVVJRF0gPSBjYWxsQmFja1xuICAgIHJldHVybiBVVUlEXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nKGlkOnN0cmluZyl7XG4gICAgZGVsZXRlIGhvb2tzW2lkXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRmV0Y2hJbygpIHtcbiAgICByZXR1cm4gaW9cbn0iXX0=