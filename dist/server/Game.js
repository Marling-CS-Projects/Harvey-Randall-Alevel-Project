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
    console.log(this.GameID);
    (0, _connectionHook.ListenToConnection)(function (socket, event, gameId, password) {
      console.log({
        gameId: gameId,
        password: password,
        event: event
      });
      if (event !== "GameConnect" || _this.GameID !== gameId) return;

      if (password !== _this.GamePassword) {
        socket.emit("GameConnect_Callback", [false]);
      }

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
      this.io.to(this.GameID).emit("ServerTerminated");
      this.connectedClients = [];
    }
  }]);
  return NewGame;
}();

exports.NewGame = NewGame;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvR2FtZS50cyJdLCJuYW1lcyI6WyJydWciLCJyZXF1aXJlIiwiTmV3R2FtZSIsImlvIiwiZ2FtZVBhc3N3b3JkIiwiTWF0aCIsInJhbmRvbSIsIkdhbWVJRCIsImZsb29yIiwiR2FtZVBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsInNvY2tldCIsImV2ZW50IiwiZ2FtZUlkIiwicGFzc3dvcmQiLCJlbWl0IiwiTmV3Q29ubmVjdGlvbiIsImV2ZW50TmFtZSIsImFyZ3MiLCJSdW5uaW5nIiwidG8iLCJpZCIsImluZm9ybUNsaWVudHNPZk1vdmVtZW50cyIsIkNoYXRIYW5kbGVyIiwiciIsImRhdGEiLCJjb2xvciIsIm5hbWUiLCJnZW5lcmF0ZSIsImxhc3RVcGRhdGUiLCJEYXRlIiwibm93IiwicG9zIiwieCIsInkiLCJ6Iiwicm90IiwiX3giLCJfeSIsIl96IiwiaW5mbyIsImNvbm5lY3RlZENsaWVudHMiLCJOdW1iZXIiLCJzZWVkIiwiam9pbiIsIm9uQW55IiwiSW5jb21pbmdDb25uZWN0aW9uUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFDQSxJQUFJQSxHQUFHLEdBQUdDLE9BQU8sQ0FBQywyQkFBRCxDQUFqQjs7QUFTQzs7SUFFWUMsTztBQUdUO0FBV0EsbUJBQVlDLEVBQVosRUFBNERDLFlBQTVELEVBQStGO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHNEQVY5RSxJQVU4RTtBQUFBO0FBQUE7QUFBQSwrREFMakQsRUFLaUQ7QUFBQSx3REFKNUUsQ0FJNEU7QUFBQSxtREFIakZDLElBQUksQ0FBQ0MsTUFBTCxFQUdpRjtBQUMzRixTQUFLSCxFQUFMLEdBQVVBLEVBQVY7QUFFQSxTQUFLSSxNQUFMLGFBQWlCRixJQUFJLENBQUNHLEtBQUwsQ0FBVyxTQUFTSCxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsTUFBcEMsQ0FBakI7QUFDQSxTQUFLRyxZQUFMLEdBQW9CTCxZQUFwQjtBQUVBTSxJ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QUFMLEdBQXdCLEVBQXhCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYW1lc3BhY2UsIFNlcnZlciwgU29ja2V0IH0gZnJvbSBcInNvY2tldC5pb1wiO1xuaW1wb3J0IHsgRGVmYXVsdEV2ZW50c01hcCB9IGZyb20gXCJzb2NrZXQuaW8vZGlzdC90eXBlZC1ldmVudHNcIjtcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IGZldGNoTG9nZ2VyIH0gZnJvbSBcIi4vc2V0dXBMb2dnZXJcIjtcbmltcG9ydCB7IExpc3RlblRvQ29ubmVjdGlvbiB9IGZyb20gXCIuL3V0aWxzL2Nvbm5lY3Rpb25Ib29rXCI7XG52YXIgcnVnID0gcmVxdWlyZShcInJhbmRvbS11c2VybmFtZS1nZW5lcmF0b3JcIik7XG5cbmludGVyZmFjZSBjb25uZWN0ZWRDbGllbnRzIHtcbiAgICBpZDogU3RyaW5nLFxuICAgIGNvbG9yOiBTdHJpbmcsXG4gICAgbmFtZTogU3RyaW5nLFxuICAgIGxhc3RVcGRhdGU6IE51bWJlcixcbiAgICBwb3M6IHsgeDogTnVtYmVyLCB5OiBOdW1iZXIsIHo6IE51bWJlciB9LFxuICAgIHJvdDogeyBfeDogTnVtYmVyLCBfeTogTnVtYmVyLCBfejogTnVtYmVyIH0sXG59O1xuXG5leHBvcnQgY2xhc3MgTmV3R2FtZSB7XG4gICAgcHJpdmF0ZSBpbzogU2VydmVyPERlZmF1bHRFdmVudHNNYXAsIERlZmF1bHRFdmVudHNNYXA+XG5cbiAgICAvLyBJbXBvcnRhbnQgb25lIFxcXFxcbiAgICBwdWJsaWMgUnVubmluZyA9IHRydWVcblxuICAgIHB1YmxpYyBHYW1lSUQ6IHN0cmluZ1xuICAgIHB1YmxpYyBHYW1lUGFzc3dvcmQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgcHVibGljIGNvbm5lY3RlZENsaWVudHM6IGNvbm5lY3RlZENsaWVudHNbXSA9IFtdXG4gICAgcHVibGljIHRpbWVPZkRheSA9IDBcbiAgICBwdWJsaWMgc2VlZCA9IE1hdGgucmFuZG9tKCk7XG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihpbzogU2VydmVyPERlZmF1bHRFdmVudHNNYXAsIERlZmF1bHRFdmVudHNNYXA+LCBnYW1lUGFzc3dvcmQ6IHN0cmluZyB8IHVuZGVmaW5lZCApIHtcbiAgICAgICAgdGhpcy5pbyA9IGlvXG5cbiAgICAgICAgdGhpcy5HYW1lSUQgPSBgJHtNYXRoLmZsb29yKDEwMDAwMCArIE1hdGgucmFuZG9tKCkgKiA5MDAwMDApfWBcbiAgICAgICAgdGhpcy5HYW1lUGFzc3dvcmQgPSBnYW1lUGFzc3dvcmRcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkdhbWVJRClcblxuXG4gICAgICAgIExpc3RlblRvQ29ubmVjdGlvbigoc29ja2V0OiBTb2NrZXQsIGV2ZW50OiBzdHJpbmcsIGdhbWVJZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7Z2FtZUlkLCBwYXNzd29yZCwgZXZlbnR9KVxuICAgICAgICAgICAgaWYgKGV2ZW50ICE9PSBcIkdhbWVDb25uZWN0XCIgfHwgdGhpcy5HYW1lSUQgIT09IGdhbWVJZCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZihwYXNzd29yZCAhPT0gdGhpcy5HYW1lUGFzc3dvcmQpe1xuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiR2FtZUNvbm5lY3RfQ2FsbGJhY2tcIiwgW2ZhbHNlXSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5OZXdDb25uZWN0aW9uKHNvY2tldClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIEluY29taW5nQ29ubmVjdGlvblJvdXRlcihzb2NrZXQ6IFNvY2tldDxEZWZhdWx0RXZlbnRzTWFwLCBEZWZhdWx0RXZlbnRzTWFwPiwgZXZlbnROYW1lOiBzdHJpbmcsIGFyZ3M6IHVua25vd25bXSkge1xuICAgICAgICBpZiAoIXRoaXMuUnVubmluZykge1xuICAgICAgICAgICAgdGhpcy5pby50byhzb2NrZXQuaWQpLmVtaXQoZXZlbnROYW1lICsgXCJfQ2FsbGJhY2tcIiwgXCJTZXJ2ZXIgaXMgZGVhZCBSSVAsIEhhcnZleSB3YXMgaGVyZVwiKVxuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiTG9jYXRpb25VcGRhdGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9ybUNsaWVudHNPZk1vdmVtZW50cyhzb2NrZXQsIGFyZ3NbMF0gYXMge30sIGFyZ3NbMV0gYXMge30pXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJzZW5kQ2hhdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQ2hhdEhhbmRsZXIoc29ja2V0LCBhcmdzWzBdIGFzIHN0cmluZylcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIE5ld0Nvbm5lY3Rpb24oc29ja2V0OiBTb2NrZXQ8RGVmYXVsdEV2ZW50c01hcCwgRGVmYXVsdEV2ZW50c01hcD4pIHtcbiAgICAgICAgdmFyIHIgPSAoKSA9PiAoTWF0aC5yYW5kb20oKSAqIDI1NikgPj4gMDtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBpZDogc29ja2V0LmlkLFxuICAgICAgICAgICAgY29sb3I6IGByZ2IoJHtyKCl9LCAke3IoKX0sICR7cigpfSlgLFxuICAgICAgICAgICAgbmFtZTogcnVnLmdlbmVyYXRlKCksXG4gICAgICAgICAgICBsYXN0VXBkYXRlOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgcG9zOiB7IHg6IDAsIHk6IDAsIHo6IDAgfSxcbiAgICAgICAgICAgIHJvdDogeyBfeDogMCwgX3k6IDAsIF96OiAwIH0sXG4gICAgICAgIH07XG4gICAgICAgIGZldGNoTG9nZ2VyKCkuaW5mbyhcIk5ldyBQbGF5ZXIgXCIsIGRhdGEubmFtZSlcblxuICAgICAgICB0aGlzLmNvbm5lY3RlZENsaWVudHNbTnVtYmVyKHNvY2tldC5pZCldID0gZGF0YTtcbiAgICAgICAgdGhpcy5pby50byh0aGlzLkdhbWVJRCkuZW1pdChcIk5ld1BsYXllclwiLCBzb2NrZXQuaWQsIGRhdGEpXG5cbiAgICAgICAgc29ja2V0LmVtaXQoXCJHYW1lQ29ubmVjdF9DYWxsYmFja1wiLCBbdGhpcy5zZWVkLCB0aGlzLmNvbm5lY3RlZENsaWVudHMsIGRhdGFdKVxuXG4gICAgICAgIHNvY2tldC5qb2luKHRoaXMuR2FtZUlEKVxuXG4gICAgICAgIHNvY2tldC5vbkFueSgoZXZlbnROYW1lLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLkluY29taW5nQ29ubmVjdGlvblJvdXRlcihzb2NrZXQsIGV2ZW50TmFtZSwgYXJncylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIENoYXRIYW5kbGVyKHNvY2tldDogU29ja2V0LCBkYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pby50byh0aGlzLkdhbWVJRCkuZW1pdChcIk5ld0NoYXRcIiwgdGhpcy5jb25uZWN0ZWRDbGllbnRzW051bWJlcihzb2NrZXQuaWQpXSwgZGF0YSlcbiAgICB9XG5cblxuXG5cbiAgICBwcml2YXRlIGluZm9ybUNsaWVudHNPZk1vdmVtZW50cyhzb2NrZXQ6IFNvY2tldDxEZWZhdWx0RXZlbnRzTWFwLCBEZWZhdWx0RXZlbnRzTWFwPiwgcG9zOiB7fSwgcm90OiB7fSkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29ubmVjdGVkQ2xpZW50c1tOdW1iZXIoc29ja2V0LmlkKV0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGVkQ2xpZW50c1tOdW1iZXIoc29ja2V0LmlkKV0ubGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB0aGlzLmlvLnRvKHRoaXMuR2FtZUlEKS5lbWl0KFwiUGxheWVyTG9jYXRpb25VcGRhdGVcIixcbiAgICAgICAgICAgICAgICBzb2NrZXQuaWQsXG4gICAgICAgICAgICAgICAgcG9zLFxuICAgICAgICAgICAgICAgIHJvdCxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RlZENsaWVudHNbTnVtYmVyKHNvY2tldC5pZCldXG4gICAgICAgICAgICApXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRlcm1pbmF0ZVNlcnZlcigpIHtcbiAgICAgICAgdGhpcy5SdW5uaW5nID0gZmFsc2VcbiAgICAgICAgdGhpcy5pby50byh0aGlzLkdhbWVJRCkuZW1pdChcIlNlcnZlclRlcm1pbmF0ZWRcIilcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRDbGllbnRzID0gW11cbiAgICB9XG59XG5cblxuIl19