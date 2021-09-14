self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/gameFundalmentals/planeHandler/MainPlane.ts":
/*!****************************************************************!*\
  !*** ./components/gameFundalmentals/planeHandler/MainPlane.ts ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakePlane": function() { return /* binding */ MakePlane; }
/* harmony export */ });
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Algorithms/degToRad */ "./components/Algorithms/degToRad.js");
/* harmony import */ var _Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Core-API/3dModelHandlers/GLBLoader */ "./components/Core-API/3dModelHandlers/GLBLoader.js");
/* harmony import */ var _Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Core-API/LightingManager */ "./components/Core-API/LightingManager.js");
/* harmony import */ var _Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Core-API/RenderingHandler */ "./components/Core-API/RenderingHandler.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../controls */ "./components/gameFundalmentals/controls.js");
/* harmony import */ var _DayNightCycle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../DayNightCycle */ "./components/gameFundalmentals/DayNightCycle.js");
/* harmony import */ var _planeCollisions_ts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./planeCollisions.ts */ "./components/gameFundalmentals/planeHandler/planeCollisions.ts");
/* module decorator */ module = __webpack_require__.hmd(module);











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var MakePlane = /*#__PURE__*/function (_CheckPlaneCollisions) {
  (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(MakePlane, _CheckPlaneCollisions);

  var _super = _createSuper(MakePlane);

  function MakePlane(SceneToGet) {
    var _this;

    (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, MakePlane);

    var mainGroup = new three__WEBPACK_IMPORTED_MODULE_17__.Group();
    _this = _super.call(this, mainGroup, SceneToGet);

    (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "SceneToGet", void 0);

    (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "speed", void 0);

    (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "elevatorPitch", void 0);

    (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "airelonePitch", void 0);

    (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "rudderPitch", void 0);

    (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "checker", void 0);

    (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "group", void 0);

    (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "UUID", void 0);

    (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "plane", void 0);

    (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "props", void 0);

    (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "leftAirelone", void 0);

    (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "rightAirelone", void 0);

    (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "rightControlSurface", void 0);

    (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "leftControlSurface", void 0);

    (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.default)(_this), "rudder", void 0);

    _this.SceneToGet = SceneToGet;
    _this.group = mainGroup;
    _this.speed = 0;
    _this.elevatorPitch = 0;
    _this.airelonePitch = 0;
    _this.rudderPitch = 0;
    _this.checker = -1;
    return _this;
  }

  (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(MakePlane, [{
    key: "loadFiles",
    value: function () {
      var _loadFiles = (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_11__.addGLBFile)("/Aircraft/BasicPlane/Plane.glb");

              case 2:
                this.plane = _context.sent;
                _context.next = 5;
                return (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_11__.addGLBFile)("/Aircraft/BasicPlane/Blades.glb");

              case 5:
                this.props = _context.sent;
                _context.next = 8;
                return (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_11__.addGLBFile)("/Aircraft/BasicPlane/LeftAirelone.glb");

              case 8:
                this.leftAirelone = _context.sent;
                _context.next = 11;
                return (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_11__.addGLBFile)("/Aircraft/BasicPlane/RightAirelone.glb");

              case 11:
                this.rightAirelone = _context.sent;
                _context.next = 14;
                return (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_11__.addGLBFile)("/Aircraft/BasicPlane/LeftWingControlsSurface.glb");

              case 14:
                this.leftControlSurface = _context.sent;
                _context.next = 17;
                return (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_11__.addGLBFile)("/Aircraft/BasicPlane/RightWingControlsSurface.glb");

              case 17:
                this.rightControlSurface = _context.sent;
                _context.next = 20;
                return (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_11__.addGLBFile)("/Aircraft/BasicPlane/Rudder.glb");

              case 20:
                this.rudder = _context.sent;

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadFiles() {
        return _loadFiles.apply(this, arguments);
      }

      return loadFiles;
    }()
  }, {
    key: "CreateGroupAndPos",
    value: function CreateGroupAndPos() {
      var _this2 = this;

      this.group.add(this.plane.scene);
      this.group.add(this.props.scene);
      this.group.add(this.leftAirelone.scene);
      this.group.add(this.rightAirelone.scene);
      this.group.add(this.rightControlSurface.scene);
      this.group.add(this.leftControlSurface.scene);
      this.group.add(this.rudder.scene);
      this.leftAirelone.scene.position.set(12.936, 15.994, -59.264);
      this.rightAirelone.scene.position.set(-12.495, 15.888, -59.294);
      this.leftControlSurface.scene.position.set(46.243, 22.536, -13.541);
      this.leftControlSurface.scene.rotateY((0,_Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_10__.radiants)(-7));
      this.rightControlSurface.scene.position.set(-46.2718, 22.5411, -13.5447);
      this.rightControlSurface.scene.rotateY((0,_Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_10__.radiants)(6.8));
      this.rightControlSurface.scene.rotateZ((0,_Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_10__.radiants)(-3.5)); //this.rightControlSurface.scene.rotateX(radiants(183.57))

      this.rudder.scene.position.set(-0.022, 24.67, -68.17);
      this.rudder.scene.rotateX((0,_Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_10__.radiants)(-22));
      this.props.scene.position.set(0, 15, 22);
      this.SceneToGet.add(this.group);
      this.group.scale.set(0.25, 0.25, 0.25);
      var _ref = [this.props.scene, this.leftAirelone.scene],
          props = _ref[0],
          leftAirelone = _ref[1]; // For testing \\

      var light = (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_12__.createPointLight)(0xff0000, 3, [60, 22.5, -10], 50);
      var light2 = (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_12__.createPointLight)(0x00ff00, 3, [-60, 22.5, -10], 2.5);
      var whiteLight = (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_12__.createPointLight)(0xffffff, 3, [0, 30, -60], 2.5);
      var day = true;
      this.group.add(light);
      this.group.add(light2);
      setInterval(function () {
        if ((0,_DayNightCycle__WEBPACK_IMPORTED_MODULE_15__.getDayState)() === false && day === true) {
          day = false;

          _this2.group.add(light);

          _this2.group.add(light2);
        } else if ((0,_DayNightCycle__WEBPACK_IMPORTED_MODULE_15__.getDayState)() === true && day === false) {
          day = true;

          _this2.group.remove(light);

          _this2.group.remove(light2);
        }
      }, 1000);
      var currentEvelatorPitch = 0;
      var airelonePitch = 0;
      var rudderPitch = 0;
      (0,_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_13__.addToRenderSequence)("Main", function () {
        var direction = new three__WEBPACK_IMPORTED_MODULE_17__.Vector3();

        _this2.group.getWorldDirection(direction);

        _this2.group.position.add(direction.multiplyScalar(_this2.speed)); //this.group.position.z += this.speed;


        props.rotateZ(_this2.speed);

        if (currentEvelatorPitch < _this2.elevatorPitch) {
          _this2.leftAirelone.scene.rotateX(-0.01);

          _this2.rightAirelone.scene.rotateX(-0.01);

          currentEvelatorPitch += 0.01; //if(this.speed < 0.4)return

          _this2.group.rotateX(currentEvelatorPitch / 50 * _this2.speed);
        } else if (currentEvelatorPitch > _this2.elevatorPitch) {
          _this2.leftAirelone.scene.rotateX(0.01);

          _this2.rightAirelone.scene.rotateX(0.01);

          currentEvelatorPitch -= 0.01; //if(this.speed < 0.4)return

          _this2.group.rotateX(currentEvelatorPitch / 50 * _this2.speed);
        }

        if (airelonePitch < _this2.airelonePitch) {
          _this2.leftControlSurface.scene.rotateX(0.01);

          _this2.rightControlSurface.scene.rotateX(-0.01);

          airelonePitch += 0.01; //if(this.speed < 0.4)return

          _this2.group.rotateZ(-airelonePitch / 50 * _this2.speed);
        } else if (airelonePitch > _this2.airelonePitch) {
          _this2.leftControlSurface.scene.rotateX(-0.01);

          _this2.rightControlSurface.scene.rotateX(0.01);

          airelonePitch -= 0.01; //if(this.speed < 0.4)return

          _this2.group.rotateZ(-airelonePitch / 50 * _this2.speed);
        }

        if (rudderPitch < _this2.rudderPitch) {
          _this2.rudder.scene.rotateY(-0.01);

          rudderPitch += 0.01; //if(this.speed < 0.4)return

          _this2.group.rotateY(rudderPitch / 50 * _this2.speed);
        } else if (rudderPitch > _this2.rudderPitch) {
          _this2.rudder.scene.rotateY(0.01);

          rudderPitch -= 0.01; //if(this.speed < 0.4)return

          _this2.group.rotateY(rudderPitch / 50 * _this2.speed);
        }
      }, false);
      return this.group;
    }
  }, {
    key: "attachCameraAndControl",
    value: function attachCameraAndControl(Camera) {
      var _this3 = this;

      this.UUID = (0,_controls__WEBPACK_IMPORTED_MODULE_14__.listenToConrols)(function (_ref2) {
        var wKey = _ref2.wKey,
            aKey = _ref2.aKey,
            sKey = _ref2.sKey,
            dKey = _ref2.dKey,
            upKey = _ref2.upKey,
            downKey = _ref2.downKey,
            eKey = _ref2.eKey,
            qKey = _ref2.qKey,
            shiftKey = _ref2.shiftKey,
            zKey = _ref2.zKey,
            xKey = _ref2.xKey;

        if (zKey) {
          if (_this3.speed < 3) {
            _this3.speed += 0.01;
          }
        }

        if (xKey) {
          if (_this3.speed > 0) {
            _this3.speed -= 0.01;
          }
        }

        if (wKey) {
          _this3.elevatorPitch = 0.5;
        } else if (sKey) {
          _this3.elevatorPitch = -0.5;
        } else {
          _this3.elevatorPitch = 0;
        }

        if (qKey) {
          _this3.rudderPitch = 0.3;
        } else if (eKey) {
          _this3.rudderPitch = -0.3;
        } else {
          _this3.rudderPitch = 0;
        }

        if (aKey) {
          _this3.airelonePitch = 0.5;
        } else if (dKey) {
          _this3.airelonePitch = -0.5;
        } else {
          _this3.airelonePitch = 0;
        }
      });
      this.group.add(Camera);
      Camera.position.set(0, 40, -100);
      Camera.rotateY((0,_Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_10__.radiants)(180));
      Camera.rotateX((0,_Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_10__.radiants)(-20));
    }
  }, {
    key: "cleanUp",
    value: function cleanUp() {
      if (this.UUID !== undefined) {
        (0,_controls__WEBPACK_IMPORTED_MODULE_14__.CleanUpListener)(this.UUID);
      }

      this.group.remove();

      if (this.checker !== -1) {
        (0,_DayNightCycle__WEBPACK_IMPORTED_MODULE_15__.removeFromDayTimeHook)(this.checker);
      }

      (0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__.default)((0,H_Desktop_code_Harvey_Randall_Alevel_Project_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(MakePlane.prototype), "stopUpdating", this).call(this);

      return {
        success: true
      };
    }
  }]);

  return MakePlane;
}(_planeCollisions_ts__WEBPACK_IMPORTED_MODULE_16__.CheckPlaneCollisions);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9wbGFuZUhhbmRsZXIvTWFpblBsYW5lLnRzIl0sIm5hbWVzIjpbIk1ha2VQbGFuZSIsIlNjZW5lVG9HZXQiLCJtYWluR3JvdXAiLCJHcm91cCIsImdyb3VwIiwic3BlZWQiLCJlbGV2YXRvclBpdGNoIiwiYWlyZWxvbmVQaXRjaCIsInJ1ZGRlclBpdGNoIiwiY2hlY2tlciIsImFkZEdMQkZpbGUiLCJwbGFuZSIsInByb3BzIiwibGVmdEFpcmVsb25lIiwicmlnaHRBaXJlbG9uZSIsImxlZnRDb250cm9sU3VyZmFjZSIsInJpZ2h0Q29udHJvbFN1cmZhY2UiLCJydWRkZXIiLCJhZGQiLCJzY2VuZSIsInBvc2l0aW9uIiwic2V0Iiwicm90YXRlWSIsInJhZGlhbnRzIiwicm90YXRlWiIsInJvdGF0ZVgiLCJzY2FsZSIsImxpZ2h0IiwiY3JlYXRlUG9pbnRMaWdodCIsImxpZ2h0MiIsIndoaXRlTGlnaHQiLCJkYXkiLCJzZXRJbnRlcnZhbCIsImdldERheVN0YXRlIiwicmVtb3ZlIiwiY3VycmVudEV2ZWxhdG9yUGl0Y2giLCJhZGRUb1JlbmRlclNlcXVlbmNlIiwiZGlyZWN0aW9uIiwiVmVjdG9yMyIsImdldFdvcmxkRGlyZWN0aW9uIiwibXVsdGlwbHlTY2FsYXIiLCJDYW1lcmEiLCJVVUlEIiwibGlzdGVuVG9Db25yb2xzIiwid0tleSIsImFLZXkiLCJzS2V5IiwiZEtleSIsInVwS2V5IiwiZG93bktleSIsImVLZXkiLCJxS2V5Iiwic2hpZnRLZXkiLCJ6S2V5IiwieEtleSIsInVuZGVmaW5lZCIsIkNsZWFuVXBMaXN0ZW5lciIsInJlbW92ZUZyb21EYXlUaW1lSG9vayIsInN1Y2Nlc3MiLCJDaGVja1BsYW5lQ29sbGlzaW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7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QUFFQSxhQUFPO0FBQUVpRCxlQUFPLEVBQUU7QUFBWCxPQUFQO0FBQ0g7QUFqUEw7O0FBQUE7QUFBQSxFQUErQkMsc0VBQS9CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QuN2QzZThjZDliZGFmNjcwYTViOGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyb3VwLCBTY2VuZSwgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyByYWRpYW50cyB9IGZyb20gXCIuLi8uLi9BbGdvcml0aG1zL2RlZ1RvUmFkXCI7XHJcbmltcG9ydCB7IGFkZEdMQkZpbGUgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL0dMQkxvYWRlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVQb2ludExpZ2h0IH0gZnJvbSBcIi4uLy4uL0NvcmUtQVBJL0xpZ2h0aW5nTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBhZGRUb1JlbmRlclNlcXVlbmNlIH0gZnJvbSBcIi4uLy4uL0NvcmUtQVBJL1JlbmRlcmluZ0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgQ2xlYW5VcExpc3RlbmVyLCBsaXN0ZW5Ub0NvbnJvbHMgfSBmcm9tIFwiLi4vY29udHJvbHNcIjtcclxuaW1wb3J0IHsgZ2V0RGF5U3RhdGUsIHJlbW92ZUZyb21EYXlUaW1lSG9vayB9IGZyb20gXCIuLi9EYXlOaWdodEN5Y2xlXCI7XHJcbmltcG9ydCB7IENoZWNrUGxhbmVDb2xsaXNpb25zIH0gZnJvbSBcIi4vcGxhbmVDb2xsaXNpb25zLnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFrZVBsYW5lIGV4dGVuZHMgQ2hlY2tQbGFuZUNvbGxpc2lvbnMge1xyXG4gICAgcHJpdmF0ZSBTY2VuZVRvR2V0OiBTY2VuZTtcclxuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZWxldmF0b3JQaXRjaDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBhaXJlbG9uZVBpdGNoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJ1ZGRlclBpdGNoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGNoZWNrZXI6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZ3JvdXA6IEdyb3VwO1xyXG5cclxuICAgIHByaXZhdGUgVVVJRDogdW5rbm93blxyXG5cclxuXHJcbiAgICBwcml2YXRlIHBsYW5lXHJcbiAgICBwcml2YXRlIHByb3BzXHJcbiAgICBwcml2YXRlIGxlZnRBaXJlbG9uZVxyXG4gICAgcHJpdmF0ZSByaWdodEFpcmVsb25lXHJcbiAgICBwcml2YXRlIHJpZ2h0Q29udHJvbFN1cmZhY2VcclxuICAgIHByaXZhdGUgbGVmdENvbnRyb2xTdXJmYWNlXHJcbiAgICBwcml2YXRlIHJ1ZGRlciBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihTY2VuZVRvR2V0KSB7XHJcbiAgICAgICAgbGV0IG1haW5Hcm91cCA9IG5ldyBHcm91cCgpXHJcbiAgICAgICAgc3VwZXIobWFpbkdyb3VwLCBTY2VuZVRvR2V0KVxyXG4gICAgICAgIHRoaXMuU2NlbmVUb0dldCA9IFNjZW5lVG9HZXQ7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IG1haW5Hcm91cDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgICAgICB0aGlzLmVsZXZhdG9yUGl0Y2ggPSAwO1xyXG4gICAgICAgIHRoaXMuYWlyZWxvbmVQaXRjaCA9IDA7XHJcbiAgICAgICAgdGhpcy5ydWRkZXJQaXRjaCA9IDA7XHJcbiAgICAgICAgdGhpcy5jaGVja2VyID0gLTE7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWRGaWxlcygpIHtcclxuICAgICAgICB0aGlzLnBsYW5lID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICAgICAgXCIvQWlyY3JhZnQvQmFzaWNQbGFuZS9QbGFuZS5nbGJcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgICAgICBcIi9BaXJjcmFmdC9CYXNpY1BsYW5lL0JsYWRlcy5nbGJcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubGVmdEFpcmVsb25lID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICAgICAgXCIvQWlyY3JhZnQvQmFzaWNQbGFuZS9MZWZ0QWlyZWxvbmUuZ2xiXCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnJpZ2h0QWlyZWxvbmUgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgICAgICBcIi9BaXJjcmFmdC9CYXNpY1BsYW5lL1JpZ2h0QWlyZWxvbmUuZ2xiXCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmxlZnRDb250cm9sU3VyZmFjZSA9IGF3YWl0IGFkZEdMQkZpbGUoXHJcbiAgICAgICAgICAgIFwiL0FpcmNyYWZ0L0Jhc2ljUGxhbmUvTGVmdFdpbmdDb250cm9sc1N1cmZhY2UuZ2xiXCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnJpZ2h0Q29udHJvbFN1cmZhY2UgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgICAgICBcIi9BaXJjcmFmdC9CYXNpY1BsYW5lL1JpZ2h0V2luZ0NvbnRyb2xzU3VyZmFjZS5nbGJcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucnVkZGVyID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICAgICAgXCIvQWlyY3JhZnQvQmFzaWNQbGFuZS9SdWRkZXIuZ2xiXCIsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBDcmVhdGVHcm91cEFuZFBvcygpIHtcclxuICAgICAgICB0aGlzLmdyb3VwLmFkZCh0aGlzLnBsYW5lLnNjZW5lKTtcclxuICAgICAgICB0aGlzLmdyb3VwLmFkZCh0aGlzLnByb3BzLnNjZW5lKTtcclxuICAgICAgICB0aGlzLmdyb3VwLmFkZCh0aGlzLmxlZnRBaXJlbG9uZS5zY2VuZSk7XHJcbiAgICAgICAgdGhpcy5ncm91cC5hZGQodGhpcy5yaWdodEFpcmVsb25lLnNjZW5lKTtcclxuICAgICAgICB0aGlzLmdyb3VwLmFkZCh0aGlzLnJpZ2h0Q29udHJvbFN1cmZhY2Uuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMubGVmdENvbnRyb2xTdXJmYWNlLnNjZW5lKTtcclxuICAgICAgICB0aGlzLmdyb3VwLmFkZCh0aGlzLnJ1ZGRlci5zY2VuZSk7XHJcblxyXG4gICAgICAgIHRoaXMubGVmdEFpcmVsb25lLnNjZW5lLnBvc2l0aW9uLnNldCgxMi45MzYsIDE1Ljk5NCwgLTU5LjI2NCk7XHJcbiAgICAgICAgdGhpcy5yaWdodEFpcmVsb25lLnNjZW5lLnBvc2l0aW9uLnNldCgtMTIuNDk1LCAxNS44ODgsIC01OS4yOTQpO1xyXG5cclxuICAgICAgICB0aGlzLmxlZnRDb250cm9sU3VyZmFjZS5zY2VuZS5wb3NpdGlvbi5zZXQoNDYuMjQzLCAyMi41MzYsIC0xMy41NDEpO1xyXG4gICAgICAgIHRoaXMubGVmdENvbnRyb2xTdXJmYWNlLnNjZW5lLnJvdGF0ZVkocmFkaWFudHMoLTcpKTtcclxuXHJcbiAgICAgICAgdGhpcy5yaWdodENvbnRyb2xTdXJmYWNlLnNjZW5lLnBvc2l0aW9uLnNldChcclxuICAgICAgICAgICAgLTQ2LjI3MTgsXHJcbiAgICAgICAgICAgIDIyLjU0MTEsXHJcbiAgICAgICAgICAgIC0xMy41NDQ3XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnJpZ2h0Q29udHJvbFN1cmZhY2Uuc2NlbmUucm90YXRlWShyYWRpYW50cyg2LjgpKTtcclxuICAgICAgICB0aGlzLnJpZ2h0Q29udHJvbFN1cmZhY2Uuc2NlbmUucm90YXRlWihyYWRpYW50cygtMy41KSk7XHJcbiAgICAgICAgLy90aGlzLnJpZ2h0Q29udHJvbFN1cmZhY2Uuc2NlbmUucm90YXRlWChyYWRpYW50cygxODMuNTcpKVxyXG5cclxuICAgICAgICB0aGlzLnJ1ZGRlci5zY2VuZS5wb3NpdGlvbi5zZXQoLTAuMDIyLCAyNC42NywgLTY4LjE3KTtcclxuICAgICAgICB0aGlzLnJ1ZGRlci5zY2VuZS5yb3RhdGVYKHJhZGlhbnRzKC0yMikpO1xyXG5cclxuICAgICAgICB0aGlzLnByb3BzLnNjZW5lLnBvc2l0aW9uLnNldCgwLCAxNSwgMjIpO1xyXG4gICAgICAgIHRoaXMuU2NlbmVUb0dldC5hZGQodGhpcy5ncm91cCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JvdXAuc2NhbGUuc2V0KDAuMjUsIDAuMjUsIDAuMjUpO1xyXG5cclxuICAgICAgICBsZXQgW3Byb3BzLCBsZWZ0QWlyZWxvbmVdID0gW3RoaXMucHJvcHMuc2NlbmUsIHRoaXMubGVmdEFpcmVsb25lLnNjZW5lXTtcclxuICAgICAgICAvLyBGb3IgdGVzdGluZyBcXFxcXHJcblxyXG4gICAgICAgIGxldCBsaWdodCA9IGNyZWF0ZVBvaW50TGlnaHQoMHhmZjAwMDAsIDMsIFs2MCwgMjIuNSwgLTEwXSwgNTApO1xyXG4gICAgICAgIGxldCBsaWdodDIgPSBjcmVhdGVQb2ludExpZ2h0KDB4MDBmZjAwLCAzLCBbLTYwLCAyMi41LCAtMTBdLCAyLjUpO1xyXG4gICAgICAgIGxldCB3aGl0ZUxpZ2h0ID0gY3JlYXRlUG9pbnRMaWdodCgweGZmZmZmZiwgMywgWzAsIDMwLCAtNjBdLCAyLjUpO1xyXG4gICAgICAgIGxldCBkYXkgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5ncm91cC5hZGQobGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cC5hZGQobGlnaHQyKTtcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihnZXREYXlTdGF0ZSgpID09PSBmYWxzZSAmJiBkYXkgPT09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgZGF5ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAuYWRkKGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAuYWRkKGxpZ2h0Mik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGdldERheVN0YXRlKCkgPT09IHRydWUgJiYgZGF5ID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICBkYXkgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnJlbW92ZShsaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnJlbW92ZShsaWdodDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMClcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRFdmVsYXRvclBpdGNoID0gMDtcclxuICAgICAgICBsZXQgYWlyZWxvbmVQaXRjaCA9IDA7XHJcbiAgICAgICAgbGV0IHJ1ZGRlclBpdGNoID0gMDtcclxuICAgICAgICBhZGRUb1JlbmRlclNlcXVlbmNlKFxyXG4gICAgICAgICAgICBcIk1haW5cIixcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLmdldFdvcmxkRGlyZWN0aW9uKGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnBvc2l0aW9uLmFkZChkaXJlY3Rpb24ubXVsdGlwbHlTY2FsYXIodGhpcy5zcGVlZCkpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmdyb3VwLnBvc2l0aW9uLnogKz0gdGhpcy5zcGVlZDtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5yb3RhdGVaKHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRFdmVsYXRvclBpdGNoIDwgdGhpcy5lbGV2YXRvclBpdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0QWlyZWxvbmUuc2NlbmUucm90YXRlWCgtMC4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodEFpcmVsb25lLnNjZW5lLnJvdGF0ZVgoLTAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFdmVsYXRvclBpdGNoICs9IDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZih0aGlzLnNwZWVkIDwgMC40KXJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAucm90YXRlWChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGN1cnJlbnRFdmVsYXRvclBpdGNoIC8gNTApICogdGhpcy5zcGVlZFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRFdmVsYXRvclBpdGNoID4gdGhpcy5lbGV2YXRvclBpdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0QWlyZWxvbmUuc2NlbmUucm90YXRlWCgwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0QWlyZWxvbmUuc2NlbmUucm90YXRlWCgwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RXZlbGF0b3JQaXRjaCAtPSAwLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYodGhpcy5zcGVlZCA8IDAuNClyZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnJvdGF0ZVgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50RXZlbGF0b3JQaXRjaCAvIDUwKSAqIHRoaXMuc3BlZWRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhaXJlbG9uZVBpdGNoIDwgdGhpcy5haXJlbG9uZVBpdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q29udHJvbFN1cmZhY2Uuc2NlbmUucm90YXRlWCgwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q29udHJvbFN1cmZhY2Uuc2NlbmUucm90YXRlWCgtMC4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWlyZWxvbmVQaXRjaCArPSAwLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYodGhpcy5zcGVlZCA8IDAuNClyZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnJvdGF0ZVooKC1haXJlbG9uZVBpdGNoIC8gNTApICogdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFpcmVsb25lUGl0Y2ggPiB0aGlzLmFpcmVsb25lUGl0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRDb250cm9sU3VyZmFjZS5zY2VuZS5yb3RhdGVYKC0wLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q29udHJvbFN1cmZhY2Uuc2NlbmUucm90YXRlWCgwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICBhaXJlbG9uZVBpdGNoIC09IDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZih0aGlzLnNwZWVkIDwgMC40KXJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAucm90YXRlWigoLWFpcmVsb25lUGl0Y2ggLyA1MCkgKiB0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocnVkZGVyUGl0Y2ggPCB0aGlzLnJ1ZGRlclBpdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydWRkZXIuc2NlbmUucm90YXRlWSgtMC4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVkZGVyUGl0Y2ggKz0gMC4wMTtcclxuICAgICAgICAgICAgICAgICAgICAvL2lmKHRoaXMuc3BlZWQgPCAwLjQpcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cC5yb3RhdGVZKChydWRkZXJQaXRjaCAvIDUwKSAqIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChydWRkZXJQaXRjaCA+IHRoaXMucnVkZGVyUGl0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1ZGRlci5zY2VuZS5yb3RhdGVZKDAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1ZGRlclBpdGNoIC09IDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZih0aGlzLnNwZWVkIDwgMC40KXJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAucm90YXRlWSgocnVkZGVyUGl0Y2ggLyA1MCkgKiB0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5ncm91cDtcclxuICAgIH1cclxuICAgIGF0dGFjaENhbWVyYUFuZENvbnRyb2woQ2FtZXJhKSB7XHJcbiAgICAgICAgdGhpcy5VVUlEID0gbGlzdGVuVG9Db25yb2xzKFxyXG4gICAgICAgICAgICAoe1xyXG4gICAgICAgICAgICAgICAgd0tleSxcclxuICAgICAgICAgICAgICAgIGFLZXksXHJcbiAgICAgICAgICAgICAgICBzS2V5LFxyXG4gICAgICAgICAgICAgICAgZEtleSxcclxuICAgICAgICAgICAgICAgIHVwS2V5LFxyXG4gICAgICAgICAgICAgICAgZG93bktleSxcclxuICAgICAgICAgICAgICAgIGVLZXksXHJcbiAgICAgICAgICAgICAgICBxS2V5LFxyXG4gICAgICAgICAgICAgICAgc2hpZnRLZXksXHJcbiAgICAgICAgICAgICAgICB6S2V5LFxyXG4gICAgICAgICAgICAgICAgeEtleSxcclxuICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHpLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZCA8IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCArPSAwLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh4S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLT0gMC4wMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAod0tleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxldmF0b3JQaXRjaCA9IDAuNTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc0tleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxldmF0b3JQaXRjaCA9IC0wLjU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxldmF0b3JQaXRjaCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVkZGVyUGl0Y2ggPSAwLjM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1ZGRlclBpdGNoID0gLTAuMztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydWRkZXJQaXRjaCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpcmVsb25lUGl0Y2ggPSAwLjU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpcmVsb25lUGl0Y2ggPSAtMC41O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpcmVsb25lUGl0Y2ggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmdyb3VwLmFkZChDYW1lcmEpO1xyXG4gICAgICAgIENhbWVyYS5wb3NpdGlvbi5zZXQoMCwgNDAsIC0xMDApO1xyXG4gICAgICAgIENhbWVyYS5yb3RhdGVZKHJhZGlhbnRzKDE4MCkpO1xyXG4gICAgICAgIENhbWVyYS5yb3RhdGVYKHJhZGlhbnRzKC0yMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFuVXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuVVVJRCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIENsZWFuVXBMaXN0ZW5lcih0aGlzLlVVSUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyb3VwLnJlbW92ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrZXIgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUZyb21EYXlUaW1lSG9vayh0aGlzLmNoZWNrZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBcclxuICAgICAgICBzdXBlci5zdG9wVXBkYXRpbmcoKVxyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==