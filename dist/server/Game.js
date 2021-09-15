"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewGame = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _setupLogger = require("./setupLogger");

var _connectionHook = require("./utils/connectionHook");

var rug = require("random-username-generator");

;

var NewGame = /*#__PURE__*/function () {
  // Important one \\
  function NewGame(io) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, NewGame);
    (0, _defineProperty2["default"])(this, "io", void 0);
    (0, _defineProperty2["default"])(this, "Running", true);
    (0, _defineProperty2["default"])(this, "GameID", "Test");
    (0, _defineProperty2["default"])(this, "GamePassword", "Test");
    (0, _defineProperty2["default"])(this, "connectedClients", []);
    (0, _defineProperty2["default"])(this, "timeOfDay", 0);
    (0, _defineProperty2["default"])(this, "seed", Math.random());
    this.io = io;
    (0, _connectionHook.ListenToConnection)(function (socket, event, gameId, password) {
      console.log({
        gameId: gameId,
        password: password,
        event: event
      });
      if (event !== "GameConnect" || _this.GameID !== gameId || password !== _this.GamePassword) return;

      _this.NewConnection(socket);
    });
  }

  (0, _createClass2["default"])(NewGame, [{
    key: "IncomingConnectionRouter",
    value: function IncomingConnectionRouter(socket, eventName, args) {
      if (!this.Running) {
        this.io.to(socket.id).emit(eventName + "_Callback", "Server is dead RIP, Harvey was here");
      }

      switch (eventName) {
        case "LocationUpdate":
          this.informClientsOfMovements(socket, args[0], args[1]);
          break;

        case "sendChat":
          this.ChatHandler(socket, args[0]);
          break;
      }
    }
  }, {
    key: "NewConnection",
    value: function NewConnection(socket) {
      var _this2 = this;

      var r = function r() {
        return Math.random() * 256 >> 0;
      };

      var data = {
        id: socket.id,
        color: "rgb(".concat(r(), ", ").concat(r(), ", ").concat(r(), ")"),
        name: rug.generate(),
        lastUpdate: Date.now(),
        pos: {
          x: 0,
          y: 0,
          z: 0
        },
        rot: {
          _x: 0,
          _y: 0,
          _z: 0
        }
      };
      (0, _setupLogger.fetchLogger)().info("New Player ", data.name);
      this.connectedClients[Number(socket.id)] = data;
      this.io.to(this.GameID).emit("NewPlayer", socket.id, data);
      socket.emit("GameConnect_Callback", [this.seed, this.connectedClients, data]);
      socket.join(this.GameID);
      socket.onAny(function (eventName) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        _this2.IncomingConnectionRouter(socket, eventName, args);
      });
    }
  }, {
    key: "ChatHandler",
    value: function ChatHandler(socket, data) {
      this.io.to(this.GameID).emit("NewChat", this.connectedClients[Number(socket.id)], data);
    }
  }, {
    key: "informClientsOfMovements",
    value: function informClientsOfMovements(socket, pos, rot) {
      if (typeof this.connectedClients[Number(socket.id)] !== "undefined") {
        this.connectedClients[Number(socket.id)].lastUpdate = Date.now();
        this.io.to(this.GameID).emit("PlayerLocationUpdate", socket.id, pos, rot, this.connectedClients[Number(socket.id)]);
      }
    }
  }, {
    key: "terminateServer",
    value: function terminateServer() {
      this.Running = false;
    }
  }]);
  return NewGame;
}();

exports.NewGame = NewGame;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvR2FtZS50cyJdLCJuYW1lcyI6WyJydWciLCJyZXF1aXJlIiwiTmV3R2FtZSIsImlvIiwiTWF0aCIsInJhbmRvbSIsInNvY2tldCIsImV2ZW50IiwiZ2FtZUlkIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiR2FtZUlEIiwiR2FtZVBhc3N3b3JkIiwiTmV3Q29ubmVjdGlvbiIsImV2ZW50TmFtZSIsImFyZ3MiLCJSdW5uaW5nIiwidG8iLCJpZCIsImVtaXQiLCJpbmZvcm1DbGllbnRzT2ZNb3ZlbWVudHMiLCJDaGF0SGFuZGxlciIsInIiLCJkYXRhIiwiY29sb3IiLCJuYW1lIiwiZ2VuZXJhdGUiLCJsYXN0VXBkYXRlIiwiRGF0ZSIsIm5vdyIsInBvcyIsIngiLCJ5IiwieiIsInJvdCIsIl94IiwiX3kiLCJfeiIsImluZm8iLCJjb25uZWN0ZWRDbGllbnRzIiwiTnVtYmVyIiwic2VlZCIsImpvaW4iLCJvbkFueSIsIkluY29taW5nQ29ubmVjdGlvblJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBQ0E7O0FBQ0EsSUFBSUEsR0FBRyxHQUFHQyxPQUFPLENBQUMsMkJBQUQsQ0FBakI7O0FBU0M7O0lBRVlDLE87QUFHVDtBQVVBLG1CQUFZQyxFQUFaLEVBQTZEO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHNEQVQ1QyxJQVM0QztBQUFBO0FBQUE7QUFBQSwrREFKZixFQUllO0FBQUEsd0RBSDFDLENBRzBDO0FBQUEsbURBRi9DQyxJQUFJLENBQUNDLE1BQUwsRUFFK0M7QUFDekQsU0FBS0YsRUFBTCxHQUFVQSxFQUFWO0FBR0EsNENBQW1CLFVBQUNHLE1BQUQsRUFBaUJDLEtBQWpCLEVBQWdDQyxNQUFoQyxFQUFnREMsUUFBaEQsRUFBcUU7QUFDcEZDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNILFFBQUFBLE1BQU0sRUFBTkEsTUFBRDtBQUFTQyxRQUFBQSxRQUFRLEVBQVJBLFFBQVQ7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QTdCLEVBQXdDLEtBQUtvQixnQkFBTCxDQUFzQkMsTUFBTSxDQUFDbkMsTUFBTSxDQUFDYSxFQUFSLENBQTVCLENBQXhDLEVBQWtGSyxJQUFsRjtBQUNIOzs7NkNBS2dDbEIsTSxFQUFvRHlCLEcsRUFBU0ksRyxFQUFTO0FBQ25HLFVBQUksT0FBTyxLQUFLSyxnQkFBTCxDQUFzQkMsTUFBTSxDQUFDbkMsTUFBTSxDQUFDYSxFQUFSLENBQTVCLENBQVAsS0FBb0QsV0FBeEQsRUFBcUU7QUFDakUsYUFBS3FCLGdCQUFMLENBQXNCQyxNQUFNLENBQUNuQyxNQUFNLENBQUNhLEVBQVIsQ0FBNUIsRUFBeUNTLFVBQXpDLEdBQXNEQyxJQUFJLENBQUNDLEdBQUwsRUFBdEQ7QUFDQSxhQUFLM0IsRUFBTCxDQUFRZSxFQUFSLENBQVcsS0FBS04sTUFBaEIsRUFBd0JRLElBQXhCLENBQTZCLHNCQUE3QixFQUNJZCxNQUFNLENBQUNhLEVBRFgsRUFFSVksR0FGSixFQUdJSSxHQUhKLEVBSUksS0FBS0ssZ0JBQUwsQ0FBc0JDLE1BQU0sQ0FBQ25DLE1BQU0sQ0FBQ2EsRUFBUixDQUE1QixDQUpKO0FBT0g7QUFDSjs7O3NDQUVpQjtBQUNkLFdBQUtGLE9BQUwsR0FBZSxLQUFmO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYW1lc3BhY2UsIFNlcnZlciwgU29ja2V0IH0gZnJvbSBcInNvY2tldC5pb1wiO1xyXG5pbXBvcnQgeyBEZWZhdWx0RXZlbnRzTWFwIH0gZnJvbSBcInNvY2tldC5pby9kaXN0L3R5cGVkLWV2ZW50c1wiO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XHJcbmltcG9ydCB7IGZldGNoTG9nZ2VyIH0gZnJvbSBcIi4vc2V0dXBMb2dnZXJcIjtcclxuaW1wb3J0IHsgTGlzdGVuVG9Db25uZWN0aW9uIH0gZnJvbSBcIi4vdXRpbHMvY29ubmVjdGlvbkhvb2tcIjtcclxudmFyIHJ1ZyA9IHJlcXVpcmUoXCJyYW5kb20tdXNlcm5hbWUtZ2VuZXJhdG9yXCIpO1xyXG5cclxuaW50ZXJmYWNlIGNvbm5lY3RlZENsaWVudHMge1xyXG4gICAgaWQ6IFN0cmluZyxcclxuICAgIGNvbG9yOiBTdHJpbmcsXHJcbiAgICBuYW1lOiBTdHJpbmcsXHJcbiAgICBsYXN0VXBkYXRlOiBOdW1iZXIsXHJcbiAgICBwb3M6IHsgeDogTnVtYmVyLCB5OiBOdW1iZXIsIHo6IE51bWJlciB9LFxyXG4gICAgcm90OiB7IF94OiBOdW1iZXIsIF95OiBOdW1iZXIsIF96OiBOdW1iZXIgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdHYW1lIHtcclxuICAgIHByaXZhdGUgaW86IFNlcnZlcjxEZWZhdWx0RXZlbnRzTWFwLCBEZWZhdWx0RXZlbnRzTWFwPlxyXG5cclxuICAgIC8vIEltcG9ydGFudCBvbmUgXFxcXFxyXG4gICAgcHVibGljIFJ1bm5pbmcgPSB0cnVlXHJcblxyXG4gICAgcHVibGljIEdhbWVJRCA9IGBUZXN0YFxyXG4gICAgcHVibGljIEdhbWVQYXNzd29yZCA9IGBUZXN0YFxyXG5cclxuICAgIHB1YmxpYyBjb25uZWN0ZWRDbGllbnRzOiBjb25uZWN0ZWRDbGllbnRzW10gPSBbXVxyXG4gICAgcHVibGljIHRpbWVPZkRheSA9IDBcclxuICAgIHB1YmxpYyBzZWVkID0gTWF0aC5yYW5kb20oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpbzogU2VydmVyPERlZmF1bHRFdmVudHNNYXAsIERlZmF1bHRFdmVudHNNYXA+LCkge1xyXG4gICAgICAgIHRoaXMuaW8gPSBpb1xyXG5cclxuXHJcbiAgICAgICAgTGlzdGVuVG9Db25uZWN0aW9uKChzb2NrZXQ6IFNvY2tldCwgZXZlbnQ6IHN0cmluZywgZ2FtZUlkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coe2dhbWVJZCwgcGFzc3dvcmQsIGV2ZW50fSlcclxuICAgICAgICAgICAgaWYgKGV2ZW50ICE9PSBcIkdhbWVDb25uZWN0XCIgfHwgdGhpcy5HYW1lSUQgIT09IGdhbWVJZCB8fCBwYXNzd29yZCAhPT0gdGhpcy5HYW1lUGFzc3dvcmQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuTmV3Q29ubmVjdGlvbihzb2NrZXQpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEluY29taW5nQ29ubmVjdGlvblJvdXRlcihzb2NrZXQ6IFNvY2tldDxEZWZhdWx0RXZlbnRzTWFwLCBEZWZhdWx0RXZlbnRzTWFwPiwgZXZlbnROYW1lOiBzdHJpbmcsIGFyZ3M6IHVua25vd25bXSkge1xyXG4gICAgICAgIGlmICghdGhpcy5SdW5uaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW8udG8oc29ja2V0LmlkKS5lbWl0KGV2ZW50TmFtZSArIFwiX0NhbGxiYWNrXCIsIFwiU2VydmVyIGlzIGRlYWQgUklQLCBIYXJ2ZXkgd2FzIGhlcmVcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChldmVudE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkxvY2F0aW9uVXBkYXRlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9ybUNsaWVudHNPZk1vdmVtZW50cyhzb2NrZXQsIGFyZ3NbMF0gYXMge30sIGFyZ3NbMV0gYXMge30pXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIFwic2VuZENoYXRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuQ2hhdEhhbmRsZXIoc29ja2V0LCBhcmdzWzBdIGFzIHN0cmluZylcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgTmV3Q29ubmVjdGlvbihzb2NrZXQ6IFNvY2tldDxEZWZhdWx0RXZlbnRzTWFwLCBEZWZhdWx0RXZlbnRzTWFwPikge1xyXG4gICAgICAgIHZhciByID0gKCkgPT4gKE1hdGgucmFuZG9tKCkgKiAyNTYpID4+IDA7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBzb2NrZXQuaWQsXHJcbiAgICAgICAgICAgIGNvbG9yOiBgcmdiKCR7cigpfSwgJHtyKCl9LCAke3IoKX0pYCxcclxuICAgICAgICAgICAgbmFtZTogcnVnLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIGxhc3RVcGRhdGU6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIHBvczogeyB4OiAwLCB5OiAwLCB6OiAwIH0sXHJcbiAgICAgICAgICAgIHJvdDogeyBfeDogMCwgX3k6IDAsIF96OiAwIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmZXRjaExvZ2dlcigpLmluZm8oXCJOZXcgUGxheWVyIFwiLCBkYXRhLm5hbWUpXHJcblxyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkQ2xpZW50c1tOdW1iZXIoc29ja2V0LmlkKV0gPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuaW8udG8odGhpcy5HYW1lSUQpLmVtaXQoXCJOZXdQbGF5ZXJcIiwgc29ja2V0LmlkLCBkYXRhKVxyXG5cclxuICAgICAgICBzb2NrZXQuZW1pdChcIkdhbWVDb25uZWN0X0NhbGxiYWNrXCIsIFt0aGlzLnNlZWQsIHRoaXMuY29ubmVjdGVkQ2xpZW50cywgZGF0YV0pXHJcblxyXG4gICAgICAgIHNvY2tldC5qb2luKHRoaXMuR2FtZUlEKVxyXG5cclxuICAgICAgICBzb2NrZXQub25BbnkoKGV2ZW50TmFtZSwgLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkluY29taW5nQ29ubmVjdGlvblJvdXRlcihzb2NrZXQsIGV2ZW50TmFtZSwgYXJncylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgQ2hhdEhhbmRsZXIoc29ja2V0OiBTb2NrZXQsIGRhdGE6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaW8udG8odGhpcy5HYW1lSUQpLmVtaXQoXCJOZXdDaGF0XCIsIHRoaXMuY29ubmVjdGVkQ2xpZW50c1tOdW1iZXIoc29ja2V0LmlkKV0sIGRhdGEpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBpbmZvcm1DbGllbnRzT2ZNb3ZlbWVudHMoc29ja2V0OiBTb2NrZXQ8RGVmYXVsdEV2ZW50c01hcCwgRGVmYXVsdEV2ZW50c01hcD4sIHBvczoge30sIHJvdDoge30pIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29ubmVjdGVkQ2xpZW50c1tOdW1iZXIoc29ja2V0LmlkKV0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWRDbGllbnRzW051bWJlcihzb2NrZXQuaWQpXS5sYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy5pby50byh0aGlzLkdhbWVJRCkuZW1pdChcIlBsYXllckxvY2F0aW9uVXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuaWQsXHJcbiAgICAgICAgICAgICAgICBwb3MsXHJcbiAgICAgICAgICAgICAgICByb3QsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RlZENsaWVudHNbTnVtYmVyKHNvY2tldC5pZCldXHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRlcm1pbmF0ZVNlcnZlcigpIHtcclxuICAgICAgICB0aGlzLlJ1bm5pbmcgPSBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19