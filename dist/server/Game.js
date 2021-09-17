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
  function NewGame(io, gamePassword) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, NewGame);
    (0, _defineProperty2["default"])(this, "io", void 0);
    (0, _defineProperty2["default"])(this, "Running", true);
    (0, _defineProperty2["default"])(this, "GameID", void 0);
    (0, _defineProperty2["default"])(this, "GamePassword", void 0);
    (0, _defineProperty2["default"])(this, "connectedClients", []);
    (0, _defineProperty2["default"])(this, "timeOfDay", 0);
    (0, _defineProperty2["default"])(this, "seed", Math.random());
    this.io = io;
    this.GameID = "".concat(Math.floor(100000 + Math.random() * 900000));
    this.GamePassword = gamePassword;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvR2FtZS50cyJdLCJuYW1lcyI6WyJydWciLCJyZXF1aXJlIiwiTmV3R2FtZSIsImlvIiwiZ2FtZVBhc3N3b3JkIiwiTWF0aCIsInJhbmRvbSIsIkdhbWVJRCIsImZsb29yIiwiR2FtZVBhc3N3b3JkIiwic29ja2V0IiwiZXZlbnQiLCJnYW1lSWQiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJOZXdDb25uZWN0aW9uIiwiZXZlbnROYW1lIiwiYXJncyIsIlJ1bm5pbmciLCJ0byIsImlkIiwiZW1pdCIsImluZm9ybUNsaWVudHNPZk1vdmVtZW50cyIsIkNoYXRIYW5kbGVyIiwiciIsImRhdGEiLCJjb2xvciIsIm5hbWUiLCJnZW5lcmF0ZSIsImxhc3RVcGRhdGUiLCJEYXRlIiwibm93IiwicG9zIiwieCIsInkiLCJ6Iiwicm90IiwiX3giLCJfeSIsIl96IiwiaW5mbyIsImNvbm5lY3RlZENsaWVudHMiLCJOdW1iZXIiLCJzZWVkIiwiam9pbiIsIm9uQW55IiwiSW5jb21pbmdDb25uZWN0aW9uUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFDQSxJQUFJQSxHQUFHLEdBQUdDLE9BQU8sQ0FBQywyQkFBRCxDQUFqQjs7QUFTQzs7SUFFWUMsTztBQUdUO0FBV0EsbUJBQVlDLEVBQVosRUFBNERDLFlBQTVELEVBQStGO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHNEQVY5RSxJQVU4RTtBQUFBO0FBQUE7QUFBQSwrREFMakQsRUFLaUQ7QUFBQSx3REFKNUUsQ0FJNEU7QUFBQSxtREFIakZDLElBQUksQ0FBQ0MsTUFBTCxFQUdpRjtBQUMzRixTQUFLSCxFQUFMLEdBQVVBLEVBQVY7QUFFQSxTQUFLSSxNQUFMLGFBQWlCRixJQUFJLENBQUNHLEtBQUwsQ0FBVyxTQUFTSCxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsTUFBcEMsQ0FBakI7QUFDQSxTQUFLRyxZQUFMLEdBQW9CTCxZQUFwQjtBQUdBLDRD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QUwsQ0FBOEJyQyxNQUE5QixFQUFzQ08sU0FBdEMsRUFBaURDLElBQWpEO0FBQ0gsT0FGRDtBQUdIOzs7Z0NBRW1CUixNLEVBQWdCZ0IsSSxFQUFjO0FBQzlDLFdBQUt2QixFQUFMLENBQVFpQixFQUFSLENBQVcsS0FBS2IsTUFBaEIsRUFBd0JlLElBQXhCLENBQTZCLFNBQTdCLEVBQXdDLEtBQUtvQixnQkFBTCxDQUFzQkMsTUFBTSxDQUFDakMsTUFBTSxDQUFDVyxFQUFSLENBQTVCLENBQXhDLEVBQWtGSyxJQUFsRjtBQUNIOzs7NkNBS2dDaEIsTSxFQUFvRHVCLEcsRUFBU0ksRyxFQUFTO0FBQ25HLFVBQUksT0FBTyxLQUFLSyxnQkFBTCxDQUFzQkMsTUFBTSxDQUFDakMsTUFBTSxDQUFDVyxFQUFSLENBQTVCLENBQVAsS0FBb0QsV0FBeEQsRUFBcUU7QUFDakUsYUFBS3FCLGdCQUFMLENBQXNCQyxNQUFNLENBQUNqQyxNQUFNLENBQUNXLEVBQVIsQ0FBNUIsRUFBeUNTLFVBQXpDLEdBQXNEQyxJQUFJLENBQUNDLEdBQUwsRUFBdEQ7QUFDQSxhQUFLN0IsRUFBTCxDQUFRaUIsRUFBUixDQUFXLEtBQUtiLE1BQWhCLEVBQXdCZSxJQUF4QixDQUE2QixzQkFBN0IsRUFDSVosTUFBTSxDQUFDVyxFQURYLEVBRUlZLEdBRkosRUFHSUksR0FISixFQUlJLEtBQUtLLGdCQUFMLENBQXNCQyxNQUFNLENBQUNqQyxNQUFNLENBQUNXLEVBQVIsQ0FBNUIsQ0FKSjtBQU9IO0FBQ0o7OztzQ0FFaUI7QUFDZCxXQUFLRixPQUFMLEdBQWUsS0FBZjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmFtZXNwYWNlLCBTZXJ2ZXIsIFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW9cIjtcbmltcG9ydCB7IERlZmF1bHRFdmVudHNNYXAgfSBmcm9tIFwic29ja2V0LmlvL2Rpc3QvdHlwZWQtZXZlbnRzXCI7XG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBmZXRjaExvZ2dlciB9IGZyb20gXCIuL3NldHVwTG9nZ2VyXCI7XG5pbXBvcnQgeyBMaXN0ZW5Ub0Nvbm5lY3Rpb24gfSBmcm9tIFwiLi91dGlscy9jb25uZWN0aW9uSG9va1wiO1xudmFyIHJ1ZyA9IHJlcXVpcmUoXCJyYW5kb20tdXNlcm5hbWUtZ2VuZXJhdG9yXCIpO1xuXG5pbnRlcmZhY2UgY29ubmVjdGVkQ2xpZW50cyB7XG4gICAgaWQ6IFN0cmluZyxcbiAgICBjb2xvcjogU3RyaW5nLFxuICAgIG5hbWU6IFN0cmluZyxcbiAgICBsYXN0VXBkYXRlOiBOdW1iZXIsXG4gICAgcG9zOiB7IHg6IE51bWJlciwgeTogTnVtYmVyLCB6OiBOdW1iZXIgfSxcbiAgICByb3Q6IHsgX3g6IE51bWJlciwgX3k6IE51bWJlciwgX3o6IE51bWJlciB9LFxufTtcblxuZXhwb3J0IGNsYXNzIE5ld0dhbWUge1xuICAgIHByaXZhdGUgaW86IFNlcnZlcjxEZWZhdWx0RXZlbnRzTWFwLCBEZWZhdWx0RXZlbnRzTWFwPlxuXG4gICAgLy8gSW1wb3J0YW50IG9uZSBcXFxcXG4gICAgcHVibGljIFJ1bm5pbmcgPSB0cnVlXG5cbiAgICBwdWJsaWMgR2FtZUlEOiBzdHJpbmdcbiAgICBwdWJsaWMgR2FtZVBhc3N3b3JkOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgIHB1YmxpYyBjb25uZWN0ZWRDbGllbnRzOiBjb25uZWN0ZWRDbGllbnRzW10gPSBbXVxuICAgIHB1YmxpYyB0aW1lT2ZEYXkgPSAwXG4gICAgcHVibGljIHNlZWQgPSBNYXRoLnJhbmRvbSgpO1xuICAgIFxuXG4gICAgY29uc3RydWN0b3IoaW86IFNlcnZlcjxEZWZhdWx0RXZlbnRzTWFwLCBEZWZhdWx0RXZlbnRzTWFwPiwgZ2FtZVBhc3N3b3JkOiBzdHJpbmcgfCB1bmRlZmluZWQgKSB7XG4gICAgICAgIHRoaXMuaW8gPSBpb1xuXG4gICAgICAgIHRoaXMuR2FtZUlEID0gYCR7TWF0aC5mbG9vcigxMDAwMDAgKyBNYXRoLnJhbmRvbSgpICogOTAwMDAwKX1gXG4gICAgICAgIHRoaXMuR2FtZVBhc3N3b3JkID0gZ2FtZVBhc3N3b3JkXG5cblxuICAgICAgICBMaXN0ZW5Ub0Nvbm5lY3Rpb24oKHNvY2tldDogU29ja2V0LCBldmVudDogc3RyaW5nLCBnYW1lSWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coe2dhbWVJZCwgcGFzc3dvcmQsIGV2ZW50fSlcbiAgICAgICAgICAgIGlmIChldmVudCAhPT0gXCJHYW1lQ29ubmVjdFwiIHx8IHRoaXMuR2FtZUlEICE9PSBnYW1lSWQgfHwgcGFzc3dvcmQgIT09IHRoaXMuR2FtZVBhc3N3b3JkKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuTmV3Q29ubmVjdGlvbihzb2NrZXQpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBJbmNvbWluZ0Nvbm5lY3Rpb25Sb3V0ZXIoc29ja2V0OiBTb2NrZXQ8RGVmYXVsdEV2ZW50c01hcCwgRGVmYXVsdEV2ZW50c01hcD4sIGV2ZW50TmFtZTogc3RyaW5nLCBhcmdzOiB1bmtub3duW10pIHtcbiAgICAgICAgaWYgKCF0aGlzLlJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMuaW8udG8oc29ja2V0LmlkKS5lbWl0KGV2ZW50TmFtZSArIFwiX0NhbGxiYWNrXCIsIFwiU2VydmVyIGlzIGRlYWQgUklQLCBIYXJ2ZXkgd2FzIGhlcmVcIilcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIkxvY2F0aW9uVXBkYXRlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvcm1DbGllbnRzT2ZNb3ZlbWVudHMoc29ja2V0LCBhcmdzWzBdIGFzIHt9LCBhcmdzWzFdIGFzIHt9KVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwic2VuZENoYXRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkNoYXRIYW5kbGVyKHNvY2tldCwgYXJnc1swXSBhcyBzdHJpbmcpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBOZXdDb25uZWN0aW9uKHNvY2tldDogU29ja2V0PERlZmF1bHRFdmVudHNNYXAsIERlZmF1bHRFdmVudHNNYXA+KSB7XG4gICAgICAgIHZhciByID0gKCkgPT4gKE1hdGgucmFuZG9tKCkgKiAyNTYpID4+IDA7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgaWQ6IHNvY2tldC5pZCxcbiAgICAgICAgICAgIGNvbG9yOiBgcmdiKCR7cigpfSwgJHtyKCl9LCAke3IoKX0pYCxcbiAgICAgICAgICAgIG5hbWU6IHJ1Zy5nZW5lcmF0ZSgpLFxuICAgICAgICAgICAgbGFzdFVwZGF0ZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIHBvczogeyB4OiAwLCB5OiAwLCB6OiAwIH0sXG4gICAgICAgICAgICByb3Q6IHsgX3g6IDAsIF95OiAwLCBfejogMCB9LFxuICAgICAgICB9O1xuICAgICAgICBmZXRjaExvZ2dlcigpLmluZm8oXCJOZXcgUGxheWVyIFwiLCBkYXRhLm5hbWUpXG5cbiAgICAgICAgdGhpcy5jb25uZWN0ZWRDbGllbnRzW051bWJlcihzb2NrZXQuaWQpXSA9IGRhdGE7XG4gICAgICAgIHRoaXMuaW8udG8odGhpcy5HYW1lSUQpLmVtaXQoXCJOZXdQbGF5ZXJcIiwgc29ja2V0LmlkLCBkYXRhKVxuXG4gICAgICAgIHNvY2tldC5lbWl0KFwiR2FtZUNvbm5lY3RfQ2FsbGJhY2tcIiwgW3RoaXMuc2VlZCwgdGhpcy5jb25uZWN0ZWRDbGllbnRzLCBkYXRhXSlcblxuICAgICAgICBzb2NrZXQuam9pbih0aGlzLkdhbWVJRClcblxuICAgICAgICBzb2NrZXQub25BbnkoKGV2ZW50TmFtZSwgLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgdGhpcy5JbmNvbWluZ0Nvbm5lY3Rpb25Sb3V0ZXIoc29ja2V0LCBldmVudE5hbWUsIGFyZ3MpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBDaGF0SGFuZGxlcihzb2NrZXQ6IFNvY2tldCwgZGF0YTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaW8udG8odGhpcy5HYW1lSUQpLmVtaXQoXCJOZXdDaGF0XCIsIHRoaXMuY29ubmVjdGVkQ2xpZW50c1tOdW1iZXIoc29ja2V0LmlkKV0sIGRhdGEpXG4gICAgfVxuXG5cblxuXG4gICAgcHJpdmF0ZSBpbmZvcm1DbGllbnRzT2ZNb3ZlbWVudHMoc29ja2V0OiBTb2NrZXQ8RGVmYXVsdEV2ZW50c01hcCwgRGVmYXVsdEV2ZW50c01hcD4sIHBvczoge30sIHJvdDoge30pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbm5lY3RlZENsaWVudHNbTnVtYmVyKHNvY2tldC5pZCldICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RlZENsaWVudHNbTnVtYmVyKHNvY2tldC5pZCldLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgdGhpcy5pby50byh0aGlzLkdhbWVJRCkuZW1pdChcIlBsYXllckxvY2F0aW9uVXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgc29ja2V0LmlkLFxuICAgICAgICAgICAgICAgIHBvcyxcbiAgICAgICAgICAgICAgICByb3QsXG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWRDbGllbnRzW051bWJlcihzb2NrZXQuaWQpXVxuICAgICAgICAgICAgKVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0ZXJtaW5hdGVTZXJ2ZXIoKSB7XG4gICAgICAgIHRoaXMuUnVubmluZyA9IGZhbHNlXG4gICAgfVxufVxuXG5cbiJdfQ==