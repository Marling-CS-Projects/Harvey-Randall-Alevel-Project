"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _setupMultiplayer = require("./server/setupMultiplayer");

var _express = _interopRequireDefault(require("express"));

var _socket = require("socket.io");

var _setupLogger = require("./server/setupLogger");

var _connectionHook = require("./server/utils/connectionHook");

var _Game = require("./server/Game");

var _adminUi = require("@socket.io/admin-ui");

var next = require("next");

var dev = process.env.DevOn == "false" ? false : true;
var apps = next({
  dev: true,
  dir: "."
});
var handle = apps.getRequestHandler();

var http = require("http");

var seed = Math.random();

var rug = require("random-username-generator");

var _PORT = process.env.PORT || 8080;

var games = [{
  id: 1,
  connectedClients: [],
  timeOfDay: 0
}];
var connectedClients = [];
(0, _setupMultiplayer.TestApp)();
var logger = (0, _setupLogger.SetupLogger)();
(0, _setupLogger.setupLogger)(logger);
apps.prepare().then( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var app, server, io, mainGame;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          app = (0, _express["default"])();
          server = http.createServer(app);
          io = new _socket.Server(server, {
            cors: {
              origin: ["https://admin.socket.io"],
              credentials: true
            }
          });
          (0, _adminUi.instrument)(io, {
            auth: false
          });
          (0, _connectionHook.addConnectionToIo)(io);
          mainGame = new _Game.NewGame(io);
          /*
          io.on("connection", (socket) => {
                  let data = {
                  id: socket.id,
                  color: `rgb(${r()}, ${r()}, ${r()})`,
                  name: rug.generate(),
                  lastUpdate: Date.now(),
                  pos: { x: 0, y: 0, z: 0 },
                  rot: { _x: 0, _y: 0, _z: 0 },
              };
              connectedClients[Number(socket.id)] = data;
              io.emit("NewPlayer", socket.id, data);
              io.to(socket.id).emit("welcome", seed, connectedClients, data);
                socket.on("LocationUpdate", (pos:{}, rot:{}) => {
                  if (typeof connectedClients[Number(socket.id)] !== "undefined") {
                      connectedClients[Number(socket.id)].lastUpdate = Date.now();
                      socket.broadcast.emit(
                          "PlayerLocationUpdate",
                          socket.id,
                          pos,
                          rot,
                          connectedClients[Number(socket.id)]
                      );
                  }
              });
                socket.on("sendChat", (data:String) => {
                  io.emit("NewChat", connectedClients[Number(socket.id)], data);
              });
                socket.on("disconnect", () => {
                  io.emit(
                      "LostPLayer",
                      socket.id,
                      false,
                      connectedClients[Number(socket.id)]
                  );
                  delete connectedClients[Number(socket.id)];
              });
                let iid = setInterval(function () {
                  if (typeof connectedClients[Number(socket.id)] === "undefined") {
                      clearInterval(iid);
                      return;
                  }
                  if (
                      connectedClients[Number(socket.id)].lastUpdate <
                      Date.now() - 5000
                  ) {
                      io.emit(
                          "LostPLayer",
                          socket.id,
                          true,
                          connectedClients[Number(socket.id)]
                      );
                      logger.info(`Lost Player ${socket.id}`);
                      delete connectedClients[Number(socket.id)];
                      io.to(socket.id).emit("Disconencted", true);
                      clearInterval(iid);
                  }
              }, 2000);
              
            });
          */

          /*eslint complexity: ["error", 20]*/

          app.get("*", function (req, res) {
            if (!(req.url.includes("api") || req.url.includes("xml") || req.url.endsWith("login") || req.url.endsWith("logout"))) {
              return handle(req, res);
            }
          });
          server.listen(_PORT, function () {
            logger.info("listening on localhost:" + _PORT);
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})))["catch"](function (ex) {
  logger.info(ex.stack);
  logger.error("there was error");
  process.exit(1);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJuZXh0IiwicmVxdWlyZSIsImRldiIsInByb2Nlc3MiLCJlbnYiLCJEZXZPbiIsImFwcHMiLCJkaXIiLCJoYW5kbGUiLCJnZXRSZXF1ZXN0SGFuZGxlciIsImh0dHAiLCJzZWVkIiwiTWF0aCIsInJhbmRvbSIsInJ1ZyIsIl9QT1JUIiwiUE9SVCIsImdhbWVzIiwiaWQiLCJjb25uZWN0ZWRDbGllbnRzIiwidGltZU9mRGF5IiwibG9nZ2VyIiwicHJlcGFyZSIsInRoZW4iLCJhcHAiLCJzZXJ2ZXIiLCJjcmVhdGVTZXJ2ZXIiLCJpbyIsIlNlcnZlciIsImNvcnMiLCJvcmlnaW4iLCJjcmVkZW50aWFscyIsImF1dGgiLCJtYWluR2FtZSIsIk5ld0dhbWUiLCJnZXQiLCJyZXEiLCJyZXMiLCJ1cmwiLCJpbmNsdWRlcyIsImVuZHNXaXRoIiwibGlzdGVuIiwiaW5mbyIsImV4Iiwic3RhY2siLCJlcnJvciIsImV4aXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBTEEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFPQSxJQUFNQyxHQUFHLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaLElBQXFCLE9BQXJCLEdBQStCLEtBQS9CLEdBQXVDLElBQW5EO0FBQ0EsSUFBTUMsSUFBSSxHQUFHTixJQUFJLENBQUM7QUFBRUUsRUFBQUEsR0FBRyxFQUFFLElBQVA7QUFBYUssRUFBQUEsR0FBRyxFQUFFO0FBQWxCLENBQUQsQ0FBakI7QUFDQSxJQUFNQyxNQUFNLEdBQUdGLElBQUksQ0FBQ0csaUJBQUwsRUFBZjs7QUFFQSxJQUFNQyxJQUFJLEdBQUdULE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUNBLElBQU1VLElBQUksR0FBR0MsSUFBSSxDQUFDQyxNQUFMLEVBQWI7O0FBQ0EsSUFBSUMsR0FBRyxHQUFHYixPQUFPLENBQUMsMkJBQUQsQ0FBakI7O0FBRUEsSUFBSWMsS0FBSyxHQUFHWixPQUFPLENBQUNDLEdBQVIsQ0FBWVksSUFBWixJQUFvQixJQUFoQzs7QUFFQSxJQUFJQyxLQUFLLEdBQUcsQ0FDUjtBQUNJQyxFQUFBQSxFQUFFLEVBQUUsQ0FEUjtBQUVJQyxFQUFBQSxnQkFBZ0IsRUFBRSxFQUZ0QjtBQUdJQyxFQUFBQSxTQUFTLEVBQUU7QUFIZixDQURRLENBQVo7QUFPQSxJQUFJRCxnQkFPRCxHQUFHLEVBUE47QUFTQTtBQUNBLElBQUlFLE1BQU0sR0FBRywrQkFBYjtBQUVBLDhCQUFZQSxNQUFaO0FBR0FmLElBQUksQ0FBQ2dCLE9BQUwsR0FDS0MsSUFETCw2RkFDVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUMsVUFBQUEsR0FERixHQUNRLDBCQURSO0FBRUlDLFVBQUFBLE1BRkosR0FFYWYsSUFBSSxDQUFDZ0IsWUFBTCxDQUFrQkYsR0FBbEIsQ0FGYjtBQUlJRyxVQUFBQSxFQUpKLEdBSVMsSUFBSUMsY0FBSixDQUFXSCxNQUFYLEVBQW1CO0FBQzFCSSxZQUFBQSxJQUFJLEVBQUU7QUFDRkMsY0FBQUEsTUFBTSxFQUFFLENBQUMseUJBQUQsQ0FETjtBQUVGQyxjQUFBQSxXQUFXLEVBQUU7QUFGWDtBQURvQixXQUFuQixDQUpUO0FBV0YsbUNBQVdKLEVBQVgsRUFBZTtBQUNYSyxZQUFBQSxJQUFJLEVBQUU7QUFESyxXQUFmO0FBSUEsaURBQWtCTCxFQUFsQjtBQUVJTSxVQUFBQSxRQWpCRixHQWlCYSxJQUFJQyxhQUFKLENBQVlQLEVBQVosQ0FqQmI7QUFvQkY7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBU1E7O0FBQ0FILFVBQUFBLEdBQUcsQ0FBQ1csR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFVQyxHQUFWLEVBQWVDLEdBQWYsRUFBb0I7QUFDN0IsZ0JBQ0ksRUFDSUQsR0FBRyxDQUFDRSxHQUFKLENBQVFDLFFBQVIsQ0FBaUIsS0FBakIsS0FDQUgsR0FBRyxDQUFDRSxHQUFKLENBQVFDLFFBQVIsQ0FBaUIsS0FBakIsQ0FEQSxJQUVBSCxHQUFHLENBQUNFLEdBQUosQ0FBUUUsUUFBUixDQUFpQixPQUFqQixDQUZBLElBR0FKLEdBQUcsQ0FBQ0UsR0FBSixDQUFRRSxRQUFSLENBQWlCLFFBQWpCLENBSkosQ0FESixFQU9FO0FBQ0UscUJBQU9oQyxNQUFNLENBQUM0QixHQUFELEVBQU1DLEdBQU4sQ0FBYjtBQUNIO0FBQ0osV0FYRDtBQWFBWixVQUFBQSxNQUFNLENBQUNnQixNQUFQLENBQWMxQixLQUFkLEVBQXFCLFlBQU07QUFDdkJNLFlBQUFBLE1BQU0sQ0FBQ3FCLElBQVAsQ0FBWSw0QkFBNEIzQixLQUF4QztBQUNILFdBRkQ7O0FBdkdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBRFYsYUE0R1csVUFBQzRCLEVBQUQsRUFBMkI7QUFDOUJ0QixFQUFBQSxNQUFNLENBQUNxQixJQUFQLENBQVlDLEVBQUUsQ0FBQ0MsS0FBZjtBQUNBdkIsRUFBQUEsTUFBTSxDQUFDd0IsS0FBUCxDQUFhLGlCQUFiO0FBQ0ExQyxFQUFBQSxPQUFPLENBQUMyQyxJQUFSLENBQWEsQ0FBYjtBQUNILENBaEhMIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IFRlc3RBcHAgfSBmcm9tIFwiLi9zZXJ2ZXIvc2V0dXBNdWx0aXBsYXllclwiO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiXHJcblxyXG5jb25zdCBuZXh0ID0gcmVxdWlyZShcIm5leHRcIik7XHJcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gXCJzb2NrZXQuaW9cIlxyXG5pbXBvcnQgeyBzZXR1cExvZ2dlciwgU2V0dXBMb2dnZXIgfSBmcm9tIFwiLi9zZXJ2ZXIvc2V0dXBMb2dnZXJcIjtcclxuaW1wb3J0IHsgYWRkQ29ubmVjdGlvblRvSW8gfSBmcm9tIFwiLi9zZXJ2ZXIvdXRpbHMvY29ubmVjdGlvbkhvb2tcIjtcclxuaW1wb3J0IHsgTmV3R2FtZSB9IGZyb20gXCIuL3NlcnZlci9HYW1lXCI7XHJcbmltcG9ydCB7IGluc3RydW1lbnQgfSBmcm9tIFwiQHNvY2tldC5pby9hZG1pbi11aVwiO1xyXG5cclxuY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuRGV2T24gPT0gXCJmYWxzZVwiID8gZmFsc2UgOiB0cnVlO1xyXG5jb25zdCBhcHBzID0gbmV4dCh7IGRldjogdHJ1ZSwgZGlyOiBcIi5cIiB9KTtcclxuY29uc3QgaGFuZGxlID0gYXBwcy5nZXRSZXF1ZXN0SGFuZGxlcigpO1xyXG5cclxuY29uc3QgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG5jb25zdCBzZWVkID0gTWF0aC5yYW5kb20oKTtcclxudmFyIHJ1ZyA9IHJlcXVpcmUoXCJyYW5kb20tdXNlcm5hbWUtZ2VuZXJhdG9yXCIpO1xyXG5cclxubGV0IF9QT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwO1xyXG5cclxubGV0IGdhbWVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGNvbm5lY3RlZENsaWVudHM6IFtdLFxyXG4gICAgICAgIHRpbWVPZkRheTogMCxcclxuICAgIH0sXHJcbl07XHJcbmxldCBjb25uZWN0ZWRDbGllbnRzOiB7XHJcbiAgICBpZDogU3RyaW5nLFxyXG4gICAgY29sb3I6IFN0cmluZyxcclxuICAgIG5hbWU6IFN0cmluZyxcclxuICAgIGxhc3RVcGRhdGU6IE51bWJlcixcclxuICAgIHBvczogeyB4OiBOdW1iZXIsIHk6IE51bWJlciwgejogTnVtYmVyIH0sXHJcbiAgICByb3Q6IHsgX3g6IE51bWJlciwgX3k6IE51bWJlciwgX3o6IE51bWJlciB9LFxyXG59W10gPSBbXTtcclxuXHJcblRlc3RBcHAoKVxyXG5sZXQgbG9nZ2VyID0gU2V0dXBMb2dnZXIoKVxyXG5cclxuc2V0dXBMb2dnZXIobG9nZ2VyKVxyXG5cclxuXHJcbmFwcHMucHJlcGFyZSgpXHJcbiAgICAudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFwcCA9IGV4cHJlc3MoKTtcclxuICAgICAgICBjb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xyXG5cclxuICAgICAgICBjb25zdCBpbyA9IG5ldyBTZXJ2ZXIoc2VydmVyLCB7XHJcbiAgICAgICAgICAgIGNvcnM6IHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbjogW1wiaHR0cHM6Ly9hZG1pbi5zb2NrZXQuaW9cIl0sXHJcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGluc3RydW1lbnQoaW8sIHtcclxuICAgICAgICAgICAgYXV0aDogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWRkQ29ubmVjdGlvblRvSW8oaW8pXHJcblxyXG4gICAgICAgIGxldCBtYWluR2FtZSA9IG5ldyBOZXdHYW1lKGlvKVxyXG5cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICBpby5vbihcImNvbm5lY3Rpb25cIiwgKHNvY2tldCkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNvY2tldC5pZCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBgcmdiKCR7cigpfSwgJHtyKCl9LCAke3IoKX0pYCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHJ1Zy5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZTogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgIHBvczogeyB4OiAwLCB5OiAwLCB6OiAwIH0sXHJcbiAgICAgICAgICAgICAgICByb3Q6IHsgX3g6IDAsIF95OiAwLCBfejogMCB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25uZWN0ZWRDbGllbnRzW051bWJlcihzb2NrZXQuaWQpXSA9IGRhdGE7XHJcbiAgICAgICAgICAgIGlvLmVtaXQoXCJOZXdQbGF5ZXJcIiwgc29ja2V0LmlkLCBkYXRhKTtcclxuICAgICAgICAgICAgaW8udG8oc29ja2V0LmlkKS5lbWl0KFwid2VsY29tZVwiLCBzZWVkLCBjb25uZWN0ZWRDbGllbnRzLCBkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIHNvY2tldC5vbihcIkxvY2F0aW9uVXBkYXRlXCIsIChwb3M6e30sIHJvdDp7fSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25uZWN0ZWRDbGllbnRzW051bWJlcihzb2NrZXQuaWQpXSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZENsaWVudHNbTnVtYmVyKHNvY2tldC5pZCldLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNvY2tldC5icm9hZGNhc3QuZW1pdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQbGF5ZXJMb2NhdGlvblVwZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm90LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWRDbGllbnRzW051bWJlcihzb2NrZXQuaWQpXVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc29ja2V0Lm9uKFwic2VuZENoYXRcIiwgKGRhdGE6U3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpby5lbWl0KFwiTmV3Q2hhdFwiLCBjb25uZWN0ZWRDbGllbnRzW051bWJlcihzb2NrZXQuaWQpXSwgZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc29ja2V0Lm9uKFwiZGlzY29ubmVjdFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpby5lbWl0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTG9zdFBMYXllclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvY2tldC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWRDbGllbnRzW051bWJlcihzb2NrZXQuaWQpXVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25uZWN0ZWRDbGllbnRzW051bWJlcihzb2NrZXQuaWQpXTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaWlkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25uZWN0ZWRDbGllbnRzW051bWJlcihzb2NrZXQuaWQpXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWlkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkQ2xpZW50c1tOdW1iZXIoc29ja2V0LmlkKV0ubGFzdFVwZGF0ZSA8XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0ZS5ub3coKSAtIDUwMDBcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlvLmVtaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTG9zdFBMYXllclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZENsaWVudHNbTnVtYmVyKHNvY2tldC5pZCldXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbyhgTG9zdCBQbGF5ZXIgJHtzb2NrZXQuaWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNvbm5lY3RlZENsaWVudHNbTnVtYmVyKHNvY2tldC5pZCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlvLnRvKHNvY2tldC5pZCkuZW1pdChcIkRpc2NvbmVuY3RlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGlpZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgKi9cclxuXHJcbiAgICAgICAgLyplc2xpbnQgY29tcGxleGl0eTogW1wiZXJyb3JcIiwgMjBdKi9cclxuICAgICAgICBhcHAuZ2V0KFwiKlwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgIShcclxuICAgICAgICAgICAgICAgICAgICByZXEudXJsLmluY2x1ZGVzKFwiYXBpXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxLnVybC5pbmNsdWRlcyhcInhtbFwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcS51cmwuZW5kc1dpdGgoXCJsb2dpblwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcS51cmwuZW5kc1dpdGgoXCJsb2dvdXRcIilcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKHJlcSwgcmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXJ2ZXIubGlzdGVuKF9QT1JULCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKFwibGlzdGVuaW5nIG9uIGxvY2FsaG9zdDpcIiArIF9QT1JUKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGV4OiB7IHN0YWNrOiBTdHJpbmcgfSkgPT4ge1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKGV4LnN0YWNrKTtcclxuICAgICAgICBsb2dnZXIuZXJyb3IoXCJ0aGVyZSB3YXMgZXJyb3JcIilcclxuICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4iXX0=