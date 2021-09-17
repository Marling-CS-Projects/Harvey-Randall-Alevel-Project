"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetupLogger = SetupLogger;
exports.setupLogger = setupLogger;
exports.fetchLogger = fetchLogger;

var winston = _interopRequireWildcard(require("winston"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SetupLogger() {
  var logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: {
      service: "user-service"
    },
    transports: [new winston.transports.File({
      filename: "error.log",
      level: "error"
    }), new winston.transports.File({
      filename: "combined.log"
    })]
  });

  if (process.env.NODE_ENV !== "production") {
    logger.add(new winston.transports.Console({
      format: winston.format.simple()
    }));
  }

  return logger;
}

;
var logger;

function setupLogger(newLogger) {
  logger = newLogger;
}

function fetchLogger() {
  return logger;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvc2V0dXBMb2dnZXIudHMiXSwibmFtZXMiOlsiU2V0dXBMb2dnZXIiLCJsb2dnZXIiLCJ3aW5zdG9uIiwiY3JlYXRlTG9nZ2VyIiwibGV2ZWwiLCJmb3JtYXQiLCJqc29uIiwiZGVmYXVsdE1ldGEiLCJzZXJ2aWNlIiwidHJhbnNwb3J0cyIsIkZpbGUiLCJmaWxlbmFtZSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImFkZCIsIkNvbnNvbGUiLCJzaW1wbGUiLCJzZXR1cExvZ2dlciIsIm5ld0xvZ2dlciIsImZldGNoTG9nZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFTyxTQUFTQSxXQUFULEdBQXFDO0FBQ3hDLE1BQU1DLE1BQU0sR0FBR0MsT0FBTyxDQUFDQyxZQUFSLENBQXFCO0FBQ2hDQyxJQUFBQSxLQUFLLEVBQUUsTUFEeUI7QUFFaENDLElBQUFBLE1BQU0sRUFBRUgsT0FBTyxDQUFDRyxNQUFSLENBQWVDLElBQWYsRUFGd0I7QUFHaENDLElBQUFBLFdBQVcsRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUhtQjtBQUloQ0MsSUFBQUEsVUFBVSxFQUFFLENBQ1IsSUFBSVAsT0FBTyxDQUFDTyxVQUFSLENBQW1CQyxJQUF2QixDQUE0QjtBQUN4QkMsTUFBQUEsUUFBUSxFQUFFLFdBRGM7QUFFeEJQLE1BQUFBLEtBQUssRUFBRTtBQUZpQixLQUE1QixDQURRLEVBS1IsSUFBSUYsT0FBTyxDQUFDTyxVQUFSLENBQW1CQyxJQUF2QixDQUE0QjtBQUFFQyxNQUFBQSxRQUFRLEVBQUU7QUFBWixLQUE1QixDQUxRO0FBSm9CLEdBQXJCLENBQWY7O0FBYUEsTUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDdkNiLElBQUFBLE1BQU0sQ0FBQ2MsR0FBUCxDQUNJLElBQUliLE9BQU8sQ0FBQ08sVUFBUixDQUFtQk8sT0FBdkIsQ0FBK0I7QUFDM0JYLE1BQUFBLE1BQU0sRUFBRUgsT0FBTyxDQUFDRyxNQUFSLENBQWVZLE1BQWY7QUFEbUIsS0FBL0IsQ0FESjtBQUtIOztBQUNELFNBQU9oQixNQUFQO0FBQ0g7O0FBQUE7QUFFRCxJQUFJQSxNQUFKOztBQUVPLFNBQVNpQixXQUFULENBQXFCQyxTQUFyQixFQUErQztBQUNsRGxCLEVBQUFBLE1BQU0sR0FBR2tCLFNBQVQ7QUFDSDs7QUFFTSxTQUFTQyxXQUFULEdBQXNDO0FBQ3pDLFNBQU9uQixNQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3aW5zdG9uIGZyb20gJ3dpbnN0b24nXG5cbmV4cG9ydCBmdW5jdGlvbiBTZXR1cExvZ2dlcigpOndpbnN0b24uTG9nZ2Vye1xuICAgIGNvbnN0IGxvZ2dlciA9IHdpbnN0b24uY3JlYXRlTG9nZ2VyKHtcbiAgICAgICAgbGV2ZWw6IFwiaW5mb1wiLFxuICAgICAgICBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0Lmpzb24oKSxcbiAgICAgICAgZGVmYXVsdE1ldGE6IHsgc2VydmljZTogXCJ1c2VyLXNlcnZpY2VcIiB9LFxuICAgICAgICB0cmFuc3BvcnRzOiBbXG4gICAgICAgICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkZpbGUoe1xuICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBcImVycm9yLmxvZ1wiLFxuICAgICAgICAgICAgICAgIGxldmVsOiBcImVycm9yXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuRmlsZSh7IGZpbGVuYW1lOiBcImNvbWJpbmVkLmxvZ1wiIH0pLFxuICAgICAgICBdLFxuICAgIH0pO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBsb2dnZXIuYWRkKFxuICAgICAgICAgICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5Db25zb2xlKHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0LnNpbXBsZSgpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvZ2dlcjtcbn07XG5cbmxldCBsb2dnZXI6IHdpbnN0b24uTG9nZ2VyXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cExvZ2dlcihuZXdMb2dnZXI6IHdpbnN0b24uTG9nZ2VyKXtcbiAgICBsb2dnZXIgPSBuZXdMb2dnZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTG9nZ2VyKCk6IHdpbnN0b24uTG9nZ2Vye1xuICAgIHJldHVybiBsb2dnZXJcbn0iXX0=