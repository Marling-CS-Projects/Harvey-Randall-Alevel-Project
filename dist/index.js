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
          mainGame = new _Game.NewGame(io, "Test");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJuZXh0IiwicmVxdWlyZSIsImRldiIsInByb2Nlc3MiLCJlbnYiLCJEZXZPbiIsImFwcHMiLCJkaXIiLCJoYW5kbGUiLCJnZXRSZXF1ZXN0SGFuZGxlciIsImh0dHAiLCJzZWVkIiwiTWF0aCIsInJhbmRvbSIsInJ1ZyIsIl9QT1JUIiwiUE9SVCIsImdhbWVzIiwiaWQiLCJjb25uZWN0ZWRDbGllbnRzIiwidGltZU9mRGF5IiwibG9nZ2VyIiwicHJlcGFyZSIsInRoZW4iLCJhcHAiLCJzZXJ2ZXIiLCJjcmVhdGVTZXJ2ZXIiLCJpbyIsIlNlcnZlciIsImNvcnMiLCJvcmlnaW4iLCJjcmVkZW50aWFscyIsImF1dGgiLCJtYWluR2FtZSIsIk5ld0dhbWUiLCJnZXQiLCJyZXEiLCJyZXMiLCJ1cmwiLCJpbmNsdWRlcyIsImVuZHNXaXRoIiwibGlzdGVuIiwiaW5mbyIsImV4Iiwic3RhY2siLCJlcnJvciIsImV4aXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBTEEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFPQSxJQUFNQyxHQUFHLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaLElBQXFCLE9BQXJCLEdBQStCLEtBQS9CLEdBQXVDLElBQW5EO0FBQ0EsSUFBTUMsSUFBSSxHQUFHTixJQUFJLENBQUM7QUFBRUUsRUFBQUEsR0FBRyxFQUFFLElBQVA7QUFBYUssRUFBQUEsR0FBRyxFQUFFO0FBQWxCLENBQUQsQ0FBakI7QUFDQSxJQUFNQyxNQUFNLEdBQUdGLElBQUksQ0FBQ0csaUJBQUwsRUFBZjs7QUFFQSxJQUFNQyxJQUFJLEdBQUdULE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUNBLElBQU1VLElBQUksR0FBR0MsSUFBSSxDQUFDQyxNQUFMLEVBQWI7O0FBQ0EsSUFBSUMsR0FBRyxHQUFHYixPQUFPLENBQUMsMkJBQUQsQ0FBakI7O0FBRUEsSUFBSWMsS0FBSyxHQUFHWixPQUFPLENBQUNDLEdBQVIsQ0FBWVksSUFBWixJQUFvQixJQUFoQzs7QUFFQSxJQUFJQyxLQUFLLEdBQUcsQ0FDUjtBQUNJQyxFQUFBQSxFQUFFLEVBQUUsQ0FEUjtBQUVJQyxFQUFBQSxnQkFBZ0IsRUFBRSxFQUZ0QjtBQUdJQyxFQUFBQSxTQUFTLEVBQUU7QUFIZixDQURRLENBQVo7QUFPQSxJQUFJRCxnQkFPRCxHQUFHLEVBUE47QUFTQTtBQUNBLElBQUlFLE1BQU0sR0FBRywrQkFBYjtBQUVBLDhCQUFZQSxNQUFaO0FBR0FmLElBQUksQ0FBQ2dCLE9BQUwsR0FDS0MsSUFETCw2RkFDVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUMsVUFBQUEsR0FERixHQUNRLDBCQURSO0FBRUlDLFVBQUFBLE1BRkosR0FFYWYsSUFBSSxDQUFDZ0IsWUFBTCxDQUFrQkYsR0FBbEIsQ0FGYjtBQUlJRyxVQUFBQSxFQUpKLEdBSVMsSUFBSUMsY0FBSixDQUFXSCxNQUFYLEVBQW1CO0FBQzFCSSxZQUFBQSxJQUFJLEVBQUU7QUFDRkMsY0FBQUEsTUFBTSxFQUFFLENBQUMseUJBQUQsQ0FETjtBQUVGQyxjQUFBQSxXQUFXLEVBQUU7QUFGWDtBQURvQixXQUFuQixDQUpUO0FBV0YsbUNBQVdKLEVBQVgsRUFBZTtBQUNYSyxZQUFBQSxJQUFJLEVBQUU7QUFESyxXQUFmO0FBSUEsaURBQWtCTCxFQUFsQjtBQUVJTSxVQUFBQSxRQWpCRixHQWlCYSxJQUFJQyxhQUFKLENBQVlQLEVBQVosRUFBZ0IsTUFBaEIsQ0FqQmI7QUFvQkY7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBU1E7O0FBQ0FILFVBQUFBLEdBQUcsQ0FBQ1csR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFVQyxHQUFWLEVBQWVDLEdBQWYsRUFBb0I7QUFDN0IsZ0JBQ0ksRUFDSUQsR0FBRyxDQUFDRSxHQUFKLENBQVFDLFFBQVIsQ0FBaUIsS0FBakIsS0FDQUgsR0FBRyxDQUFDRSxHQUFKLENBQVFDLFFBQVIsQ0FBaUIsS0FBakIsQ0FEQSxJQUVBSCxHQUFHLENBQUNFLEdBQUosQ0FBUUUsUUFBUixDQUFpQixPQUFqQixDQUZBLElBR0FKLEdBQUcsQ0FBQ0UsR0FBSixDQUFRRSxRQUFSLENBQWlCLFFBQWpCLENBSkosQ0FESixFQU9FO0FBQ0UscUJBQU9oQyxNQUFNLENBQUM0QixHQUFELEVBQU1DLEdBQU4sQ0FBYjtBQUNIO0FBQ0osV0FYRDtBQWFBWixVQUFBQSxNQUFNLENBQUNnQixNQUFQLENBQWMxQixLQUFkLEVBQXFCLFlBQU07QUFDdkJNLFlBQUFBLE1BQU0sQ0FBQ3FCLElBQVAsQ0FBWSw0QkFBNEIzQixLQUF4QztBQUNILFdBRkQ7O0FBdkdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBRFYsYUE0R1csVUFBQzRCLEVBQUQsRUFBMkI7QUFDOUJ0QixFQUFBQSxNQUFNLENBQUNxQixJQUFQLENBQVlDLEVBQUUsQ0FBQ0MsS0FBZjtBQUNBdkIsRUFBQUEsTUFBTSxDQUFDd0IsS0FBUCxDQUFhLGlCQUFiO0FBQ0ExQyxFQUFBQSxPQUFPLENBQUMyQyxJQUFSLENBQWEsQ0FBYjtBQUNILENBaEhMIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBUZXN0QXBwIH0gZnJvbSBcIi4vc2VydmVyL3NldHVwTXVsdGlwbGF5ZXJcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCJcblxuY29uc3QgbmV4dCA9IHJlcXVpcmUoXCJuZXh0XCIpO1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSBcInNvY2tldC5pb1wiXG5pbXBvcnQgeyBzZXR1cExvZ2dlciwgU2V0dXBMb2dnZXIgfSBmcm9tIFwiLi9zZXJ2ZXIvc2V0dXBMb2dnZXJcIjtcbmltcG9ydCB7IGFkZENvbm5lY3Rpb25Ub0lvIH0gZnJvbSBcIi4vc2VydmVyL3V0aWxzL2Nvbm5lY3Rpb25Ib29rXCI7XG5pbXBvcnQgeyBOZXdHYW1lIH0gZnJvbSBcIi4vc2VydmVyL0dhbWVcIjtcbmltcG9ydCB7IGluc3RydW1lbnQgfSBmcm9tIFwiQHNvY2tldC5pby9hZG1pbi11aVwiO1xuXG5jb25zdCBkZXYgPSBwcm9jZXNzLmVudi5EZXZPbiA9PSBcImZhbHNlXCIgPyBmYWxzZSA6IHRydWU7XG5jb25zdCBhcHBzID0gbmV4dCh7IGRldjogdHJ1ZSwgZGlyOiBcIi5cIiB9KTtcbmNvbnN0IGhhbmRsZSA9IGFwcHMuZ2V0UmVxdWVzdEhhbmRsZXIoKTtcblxuY29uc3QgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xuY29uc3Qgc2VlZCA9IE1hdGgucmFuZG9tKCk7XG52YXIgcnVnID0gcmVxdWlyZShcInJhbmRvbS11c2VybmFtZS1nZW5lcmF0b3JcIik7XG5cbmxldCBfUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MDtcblxubGV0IGdhbWVzID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGNvbm5lY3RlZENsaWVudHM6IFtdLFxuICAgICAgICB0aW1lT2ZEYXk6IDAsXG4gICAgfSxcbl07XG5sZXQgY29ubmVjdGVkQ2xpZW50czoge1xuICAgIGlkOiBTdHJpbmcsXG4gICAgY29sb3I6IFN0cmluZyxcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgbGFzdFVwZGF0ZTogTnVtYmVyLFxuICAgIHBvczogeyB4OiBOdW1iZXIsIHk6IE51bWJlciwgejogTnVtYmVyIH0sXG4gICAgcm90OiB7IF94OiBOdW1iZXIsIF95OiBOdW1iZXIsIF96OiBOdW1iZXIgfSxcbn1bXSA9IFtdO1xuXG5UZXN0QXBwKClcbmxldCBsb2dnZXIgPSBTZXR1cExvZ2dlcigpXG5cbnNldHVwTG9nZ2VyKGxvZ2dlcilcblxuXG5hcHBzLnByZXBhcmUoKVxuICAgIC50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGFwcCA9IGV4cHJlc3MoKTtcbiAgICAgICAgY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcblxuICAgICAgICBjb25zdCBpbyA9IG5ldyBTZXJ2ZXIoc2VydmVyLCB7XG4gICAgICAgICAgICBjb3JzOiB7XG4gICAgICAgICAgICAgICAgb3JpZ2luOiBbXCJodHRwczovL2FkbWluLnNvY2tldC5pb1wiXSxcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpbnN0cnVtZW50KGlvLCB7XG4gICAgICAgICAgICBhdXRoOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICBhZGRDb25uZWN0aW9uVG9JbyhpbylcblxuICAgICAgICBsZXQgbWFpbkdhbWUgPSBuZXcgTmV3R2FtZShpbywgXCJUZXN0XCIpXG5cblxuICAgICAgICAvKlxuICAgICAgICBpby5vbihcImNvbm5lY3Rpb25cIiwgKHNvY2tldCkgPT4ge1xuXG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGlkOiBzb2NrZXQuaWQsXG4gICAgICAgICAgICAgICAgY29sb3I6IGByZ2IoJHtyKCl9LCAke3IoKX0sICR7cigpfSlgLFxuICAgICAgICAgICAgICAgIG5hbWU6IHJ1Zy5nZW5lcmF0ZSgpLFxuICAgICAgICAgICAgICAgIGxhc3RVcGRhdGU6IERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgcG9zOiB7IHg6IDAsIHk6IDAsIHo6IDAgfSxcbiAgICAgICAgICAgICAgICByb3Q6IHsgX3g6IDAsIF95OiAwLCBfejogMCB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbm5lY3RlZENsaWVudHNbTnVtYmVyKHNvY2tldC5pZCldID0gZGF0YTtcbiAgICAgICAgICAgIGlvLmVtaXQoXCJOZXdQbGF5ZXJcIiwgc29ja2V0LmlkLCBkYXRhKTtcbiAgICAgICAgICAgIGlvLnRvKHNvY2tldC5pZCkuZW1pdChcIndlbGNvbWVcIiwgc2VlZCwgY29ubmVjdGVkQ2xpZW50cywgZGF0YSk7XG5cbiAgICAgICAgICAgIHNvY2tldC5vbihcIkxvY2F0aW9uVXBkYXRlXCIsIChwb3M6e30sIHJvdDp7fSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29ubmVjdGVkQ2xpZW50c1tOdW1iZXIoc29ja2V0LmlkKV0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkQ2xpZW50c1tOdW1iZXIoc29ja2V0LmlkKV0ubGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIHNvY2tldC5icm9hZGNhc3QuZW1pdChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUGxheWVyTG9jYXRpb25VcGRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZENsaWVudHNbTnVtYmVyKHNvY2tldC5pZCldXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNvY2tldC5vbihcInNlbmRDaGF0XCIsIChkYXRhOlN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIGlvLmVtaXQoXCJOZXdDaGF0XCIsIGNvbm5lY3RlZENsaWVudHNbTnVtYmVyKHNvY2tldC5pZCldLCBkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzb2NrZXQub24oXCJkaXNjb25uZWN0XCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpby5lbWl0KFxuICAgICAgICAgICAgICAgICAgICBcIkxvc3RQTGF5ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LmlkLFxuICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkQ2xpZW50c1tOdW1iZXIoc29ja2V0LmlkKV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25uZWN0ZWRDbGllbnRzW051bWJlcihzb2NrZXQuaWQpXTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgaWlkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29ubmVjdGVkQ2xpZW50c1tOdW1iZXIoc29ja2V0LmlkKV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpaWQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkQ2xpZW50c1tOdW1iZXIoc29ja2V0LmlkKV0ubGFzdFVwZGF0ZSA8XG4gICAgICAgICAgICAgICAgICAgIERhdGUubm93KCkgLSA1MDAwXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlvLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkxvc3RQTGF5ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWRDbGllbnRzW051bWJlcihzb2NrZXQuaWQpXVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbyhgTG9zdCBQbGF5ZXIgJHtzb2NrZXQuaWR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25uZWN0ZWRDbGllbnRzW051bWJlcihzb2NrZXQuaWQpXTtcbiAgICAgICAgICAgICAgICAgICAgaW8udG8oc29ja2V0LmlkKS5lbWl0KFwiRGlzY29uZW5jdGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGlpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICBcblxuICAgICAgICB9KTtcbiAgICAgICAgKi9cblxuICAgICAgICAvKmVzbGludCBjb21wbGV4aXR5OiBbXCJlcnJvclwiLCAyMF0qL1xuICAgICAgICBhcHAuZ2V0KFwiKlwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgICAgICByZXEudXJsLmluY2x1ZGVzKFwiYXBpXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgIHJlcS51cmwuaW5jbHVkZXMoXCJ4bWxcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgcmVxLnVybC5lbmRzV2l0aChcImxvZ2luXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgIHJlcS51cmwuZW5kc1dpdGgoXCJsb2dvdXRcIilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKHJlcSwgcmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VydmVyLmxpc3RlbihfUE9SVCwgKCkgPT4ge1xuICAgICAgICAgICAgbG9nZ2VyLmluZm8oXCJsaXN0ZW5pbmcgb24gbG9jYWxob3N0OlwiICsgX1BPUlQpO1xuICAgICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXg6IHsgc3RhY2s6IFN0cmluZyB9KSA9PiB7XG4gICAgICAgIGxvZ2dlci5pbmZvKGV4LnN0YWNrKTtcbiAgICAgICAgbG9nZ2VyLmVycm9yKFwidGhlcmUgd2FzIGVycm9yXCIpXG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICB9KTtcblxuXG4iXX0=