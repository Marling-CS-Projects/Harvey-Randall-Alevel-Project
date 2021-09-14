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

          _this2.group.add(whiteLight);
        } else if ((0,_DayNightCycle__WEBPACK_IMPORTED_MODULE_15__.getDayState)() === true && day === false) {
          day = true;

          _this2.group.remove(light);

          _this2.group.remove(light2);

          _this2.group.remove(whiteLight);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9wbGFuZUhhbmRsZXIvTWFpblBsYW5lLnRzIl0sIm5hbWVzIjpbIk1ha2VQbGFuZSIsIlNjZW5lVG9HZXQiLCJtYWluR3JvdXAiLCJHcm91cCIsImdyb3VwIiwic3BlZWQiLCJlbGV2YXRvclBpdGNoIiwiYWlyZWxvbmVQaXRjaCIsInJ1ZGRlclBpdGNoIiwiY2hlY2tlciIsImFkZEdMQkZpbGUiLCJwbGFuZSIsInByb3BzIiwibGVmdEFpcmVsb25lIiwicmlnaHRBaXJlbG9uZSIsImxlZnRDb250cm9sU3VyZmFjZSIsInJpZ2h0Q29udHJvbFN1cmZhY2UiLCJydWRkZXIiLCJhZGQiLCJzY2VuZSIsInBvc2l0aW9uIiwic2V0Iiwicm90YXRlWSIsInJhZGlhbnRzIiwicm90YXRlWiIsInJvdGF0ZVgiLCJzY2FsZSIsImxpZ2h0IiwiY3JlYXRlUG9pbnRMaWdodCIsImxpZ2h0MiIsIndoaXRlTGlnaHQiLCJkYXkiLCJzZXRJbnRlcnZhbCIsImdldERheVN0YXRlIiwicmVtb3ZlIiwiY3VycmVudEV2ZWxhdG9yUGl0Y2giLCJhZGRUb1JlbmRlclNlcXVlbmNlIiwiZGlyZWN0aW9uIiwiVmVjdG9yMyIsImdldFdvcmxkRGlyZWN0aW9uIiwibXVsdGlwbHlTY2FsYXIiLCJDYW1lcmEiLCJVVUlEIiwibGlzdGVuVG9Db25yb2xzIiwid0tleSIsImFLZXkiLCJzS2V5IiwiZEtleSIsInVwS2V5IiwiZG93bktleSIsImVLZXkiLCJxS2V5Iiwic2hpZnRLZXkiLCJ6S2V5IiwieEtleSIsInVuZGVmaW5lZCIsIkNsZWFuVXBMaXN0ZW5lciIsInJlbW92ZUZyb21EYXlUaW1lSG9vayIsInN1Y2Nlc3MiLCJDaGVja1BsYW5lQ29sbGlzaW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFNBQWI7QUFBQTs7QUFBQTs7QUFvQkkscUJBQVlDLFVBQVosRUFBd0I7QUFBQTs7QUFBQTs7QUFDcEIsUUFBSUMsU0FBUyxHQUFHLElBQUlDLHlDQUFKLEVBQWhCO0FBQ0EsOEJBQU1ELFNBQU4sRUFBaUJELFVBQWpCOztBQUZvQjs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFHcEIsVUFBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxVQUFLRyxLQUFMLEdBQWFGLFNBQWI7QUFDQSxVQUFLRyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsQ0FBckI7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLENBQXJCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixDQUFuQjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxDQUFDLENBQWhCO0FBVG9CO0FBWXZCOztBQWhDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFtQzJCQyxnRkFBVSxDQUN6QixnQ0FEeUIsQ0FuQ3JDOztBQUFBO0FBbUNRLHFCQUFLQyxLQW5DYjtBQUFBO0FBQUEsdUJBc0MyQkQsZ0ZBQVUsQ0FDekIsaUNBRHlCLENBdENyQzs7QUFBQTtBQXNDUSxxQkFBS0UsS0F0Q2I7QUFBQTtBQUFBLHVCQXlDa0NGLGdGQUFVLENBQ2hDLHVDQURnQyxDQXpDNUM7O0FBQUE7QUF5Q1EscUJBQUtHLFlBekNiO0FBQUE7QUFBQSx1QkE0Q21DSCxnRkFBVSxDQUNqQyx3Q0FEaUMsQ0E1QzdDOztBQUFBO0FBNENRLHFCQUFLSSxhQTVDYjtBQUFBO0FBQUEsdUJBK0N3Q0osZ0ZBQVUsQ0FDdEMsa0RBRHNDLENBL0NsRDs7QUFBQTtBQStDUSxxQkFBS0ssa0JBL0NiO0FBQUE7QUFBQSx1QkFrRHlDTCxnRkFBVSxDQUN2QyxtREFEdUMsQ0FsRG5EOztBQUFBO0FBa0RRLHFCQUFLTSxtQkFsRGI7QUFBQTtBQUFBLHVCQXFENEJOLGdGQUFVLENBQzFCLGlDQUQwQixDQXJEdEM7O0FBQUE7QUFxRFEscUJBQUtPLE1BckRiOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQTBEd0I7QUFBQTs7QUFDaEIsV0FBS2IsS0FBTCxDQUFXYyxHQUFYLENBQWUsS0FBS1AsS0FBTCxDQUFXUSxLQUExQjtBQUNBLFdBQUtmLEtBQUwsQ0FBV2MsR0FBWCxDQUFlLEtBQUtOLEtBQUwsQ0FBV08sS0FBMUI7QUFDQSxXQUFLZixLQUFMLENBQVdjLEdBQVgsQ0FBZSxLQUFLTCxZQUFMLENBQWtCTSxLQUFqQztBQUNBLFdBQUtmLEtBQUwsQ0FBV2MsR0FBWCxDQUFlLEtBQUtKLGFBQUwsQ0FBbUJLLEtBQWxDO0FBQ0EsV0FBS2YsS0FBTCxDQUFXYyxHQUFYLENBQWUsS0FBS0YsbUJBQUwsQ0FBeUJHLEtBQXhDO0FBQ0EsV0FBS2YsS0FBTCxDQUFXYyxHQUFYLENBQWUsS0FBS0gsa0JBQUwsQ0FBd0JJLEtBQXZDO0FBQ0EsV0FBS2YsS0FBTCxDQUFXYyxHQUFYLENBQWUsS0FBS0QsTUFBTCxDQUFZRSxLQUEzQjtBQUVBLFdBQUtOLFlBQUwsQ0FBa0JNLEtBQWxCLENBQXdCQyxRQUF4QixDQUFpQ0MsR0FBakMsQ0FBcUMsTUFBckMsRUFBNkMsTUFBN0MsRUFBcUQsQ0FBQyxNQUF0RDtBQUNBLFdBQUtQLGFBQUwsQ0FBbUJLLEtBQW5CLENBQXlCQyxRQUF6QixDQUFrQ0MsR0FBbEMsQ0FBc0MsQ0FBQyxNQUF2QyxFQUErQyxNQUEvQyxFQUF1RCxDQUFDLE1BQXhEO0FBRUEsV0FBS04sa0JBQUwsQ0FBd0JJLEtBQXhCLENBQThCQyxRQUE5QixDQUF1Q0MsR0FBdkMsQ0FBMkMsTUFBM0MsRUFBbUQsTUFBbkQsRUFBMkQsQ0FBQyxNQUE1RDtBQUNBLFdBQUtOLGtCQUFMLENBQXdCSSxLQUF4QixDQUE4QkcsT0FBOUIsQ0FBc0NDLCtEQUFRLENBQUMsQ0FBQyxDQUFGLENBQTlDO0FBRUEsV0FBS1AsbUJBQUwsQ0FBeUJHLEtBQXpCLENBQStCQyxRQUEvQixDQUF3Q0MsR0FBeEMsQ0FDSSxDQUFDLE9BREwsRUFFSSxPQUZKLEVBR0ksQ0FBQyxPQUhMO0FBS0EsV0FBS0wsbUJBQUwsQ0FBeUJHLEtBQXpCLENBQStCRyxPQUEvQixDQUF1Q0MsK0RBQVEsQ0FBQyxHQUFELENBQS9DO0FBQ0EsV0FBS1AsbUJBQUwsQ0FBeUJHLEtBQXpCLENBQStCSyxPQUEvQixDQUF1Q0QsK0RBQVEsQ0FBQyxDQUFDLEdBQUYsQ0FBL0MsRUFyQmdCLENBc0JoQjs7QUFFQSxXQUFLTixNQUFMLENBQVlFLEtBQVosQ0FBa0JDLFFBQWxCLENBQTJCQyxHQUEzQixDQUErQixDQUFDLEtBQWhDLEVBQXVDLEtBQXZDLEVBQThDLENBQUMsS0FBL0M7QUFDQSxXQUFLSixNQUFMLENBQVlFLEtBQVosQ0FBa0JNLE9BQWxCLENBQTBCRiwrREFBUSxDQUFDLENBQUMsRUFBRixDQUFsQztBQUVBLFdBQUtYLEtBQUwsQ0FBV08sS0FBWCxDQUFpQkMsUUFBakIsQ0FBMEJDLEdBQTFCLENBQThCLENBQTlCLEVBQWlDLEVBQWpDLEVBQXFDLEVBQXJDO0FBQ0EsV0FBS3BCLFVBQUwsQ0FBZ0JpQixHQUFoQixDQUFvQixLQUFLZCxLQUF6QjtBQUVBLFdBQUtBLEtBQUwsQ0FBV3NCLEtBQVgsQ0FBaUJMLEdBQWpCLENBQXFCLElBQXJCLEVBQTJCLElBQTNCLEVBQWlDLElBQWpDO0FBOUJnQixpQkFnQ1ksQ0FBQyxLQUFLVCxLQUFMLENBQVdPLEtBQVosRUFBbUIsS0FBS04sWUFBTCxDQUFrQk0sS0FBckMsQ0FoQ1o7QUFBQSxVQWdDWFAsS0FoQ1c7QUFBQSxVQWdDSkMsWUFoQ0ksWUFpQ2hCOztBQUVBLFVBQUljLEtBQUssR0FBR0MsNEVBQWdCLENBQUMsUUFBRCxFQUFXLENBQVgsRUFBYyxDQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsQ0FBQyxFQUFaLENBQWQsRUFBK0IsRUFBL0IsQ0FBNUI7QUFDQSxVQUFJQyxNQUFNLEdBQUdELDRFQUFnQixDQUFDLFFBQUQsRUFBVyxDQUFYLEVBQWMsQ0FBQyxDQUFDLEVBQUYsRUFBTSxJQUFOLEVBQVksQ0FBQyxFQUFiLENBQWQsRUFBZ0MsR0FBaEMsQ0FBN0I7QUFDQSxVQUFJRSxVQUFVLEdBQUdGLDRFQUFnQixDQUFDLFFBQUQsRUFBVyxDQUFYLEVBQWMsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLENBQUMsRUFBVCxDQUFkLEVBQTRCLEdBQTVCLENBQWpDO0FBQ0EsVUFBSUcsR0FBRyxHQUFHLElBQVY7QUFDQSxXQUFLM0IsS0FBTCxDQUFXYyxHQUFYLENBQWVTLEtBQWY7QUFDUSxXQUFLdkIsS0FBTCxDQUFXYyxHQUFYLENBQWVXLE1BQWY7QUFFUkcsaUJBQVcsQ0FBQyxZQUFNO0FBQ2QsWUFBR0MsNERBQVcsT0FBTyxLQUFsQixJQUEyQkYsR0FBRyxLQUFLLElBQXRDLEVBQTJDO0FBQ3ZDQSxhQUFHLEdBQUcsS0FBTjs7QUFDQSxnQkFBSSxDQUFDM0IsS0FBTCxDQUFXYyxHQUFYLENBQWVTLEtBQWY7O0FBQ0EsZ0JBQUksQ0FBQ3ZCLEtBQUwsQ0FBV2MsR0FBWCxDQUFlVyxNQUFmOztBQUNBLGdCQUFJLENBQUN6QixLQUFMLENBQVdjLEdBQVgsQ0FBZVksVUFBZjtBQUNILFNBTEQsTUFLTSxJQUFHRyw0REFBVyxPQUFPLElBQWxCLElBQTBCRixHQUFHLEtBQUssS0FBckMsRUFBMkM7QUFDN0NBLGFBQUcsR0FBRyxJQUFOOztBQUNBLGdCQUFJLENBQUMzQixLQUFMLENBQVc4QixNQUFYLENBQWtCUCxLQUFsQjs7QUFDQSxnQkFBSSxDQUFDdkIsS0FBTCxDQUFXOEIsTUFBWCxDQUFrQkwsTUFBbEI7O0FBQ0EsZ0JBQUksQ0FBQ3pCLEtBQUwsQ0FBVzhCLE1BQVgsQ0FBa0JKLFVBQWxCO0FBQ0g7QUFDSixPQVpVLEVBWVIsSUFaUSxDQUFYO0FBY0EsVUFBSUssb0JBQW9CLEdBQUcsQ0FBM0I7QUFDQSxVQUFJNUIsYUFBYSxHQUFHLENBQXBCO0FBQ0EsVUFBSUMsV0FBVyxHQUFHLENBQWxCO0FBQ0E0QixzRkFBbUIsQ0FDZixNQURlLEVBRWYsWUFBTTtBQUNGLFlBQUlDLFNBQVMsR0FBRyxJQUFJQywyQ0FBSixFQUFoQjs7QUFDQSxjQUFJLENBQUNsQyxLQUFMLENBQVdtQyxpQkFBWCxDQUE2QkYsU0FBN0I7O0FBQ0EsY0FBSSxDQUFDakMsS0FBTCxDQUFXZ0IsUUFBWCxDQUFvQkYsR0FBcEIsQ0FBd0JtQixTQUFTLENBQUNHLGNBQVYsQ0FBeUIsTUFBSSxDQUFDbkMsS0FBOUIsQ0FBeEIsRUFIRSxDQUlGOzs7QUFFQU8sYUFBSyxDQUFDWSxPQUFOLENBQWMsTUFBSSxDQUFDbkIsS0FBbkI7O0FBQ0EsWUFBSThCLG9CQUFvQixHQUFHLE1BQUksQ0FBQzdCLGFBQWhDLEVBQStDO0FBQzNDLGdCQUFJLENBQUNPLFlBQUwsQ0FBa0JNLEtBQWxCLENBQXdCTSxPQUF4QixDQUFnQyxDQUFDLElBQWpDOztBQUNBLGdCQUFJLENBQUNYLGFBQUwsQ0FBbUJLLEtBQW5CLENBQXlCTSxPQUF6QixDQUFpQyxDQUFDLElBQWxDOztBQUNBVSw4QkFBb0IsSUFBSSxJQUF4QixDQUgyQyxDQUkzQzs7QUFDQSxnQkFBSSxDQUFDL0IsS0FBTCxDQUFXcUIsT0FBWCxDQUNLVSxvQkFBb0IsR0FBRyxFQUF4QixHQUE4QixNQUFJLENBQUM5QixLQUR2QztBQUdILFNBUkQsTUFRTyxJQUFJOEIsb0JBQW9CLEdBQUcsTUFBSSxDQUFDN0IsYUFBaEMsRUFBK0M7QUFDbEQsZ0JBQUksQ0FBQ08sWUFBTCxDQUFrQk0sS0FBbEIsQ0FBd0JNLE9BQXhCLENBQWdDLElBQWhDOztBQUNBLGdCQUFJLENBQUNYLGFBQUwsQ0FBbUJLLEtBQW5CLENBQXlCTSxPQUF6QixDQUFpQyxJQUFqQzs7QUFDQVUsOEJBQW9CLElBQUksSUFBeEIsQ0FIa0QsQ0FJbEQ7O0FBQ0EsZ0JBQUksQ0FBQy9CLEtBQUwsQ0FBV3FCLE9BQVgsQ0FDS1Usb0JBQW9CLEdBQUcsRUFBeEIsR0FBOEIsTUFBSSxDQUFDOUIsS0FEdkM7QUFHSDs7QUFFRCxZQUFJRSxhQUFhLEdBQUcsTUFBSSxDQUFDQSxhQUF6QixFQUF3QztBQUNwQyxnQkFBSSxDQUFDUSxrQkFBTCxDQUF3QkksS0FBeEIsQ0FBOEJNLE9BQTlCLENBQXNDLElBQXRDOztBQUNBLGdCQUFJLENBQUNULG1CQUFMLENBQXlCRyxLQUF6QixDQUErQk0sT0FBL0IsQ0FBdUMsQ0FBQyxJQUF4Qzs7QUFDQWxCLHVCQUFhLElBQUksSUFBakIsQ0FIb0MsQ0FJcEM7O0FBQ0EsZ0JBQUksQ0FBQ0gsS0FBTCxDQUFXb0IsT0FBWCxDQUFvQixDQUFDakIsYUFBRCxHQUFpQixFQUFsQixHQUF3QixNQUFJLENBQUNGLEtBQWhEO0FBQ0gsU0FORCxNQU1PLElBQUlFLGFBQWEsR0FBRyxNQUFJLENBQUNBLGFBQXpCLEVBQXdDO0FBQzNDLGdCQUFJLENBQUNRLGtCQUFMLENBQXdCSSxLQUF4QixDQUE4Qk0sT0FBOUIsQ0FBc0MsQ0FBQyxJQUF2Qzs7QUFDQSxnQkFBSSxDQUFDVCxtQkFBTCxDQUF5QkcsS0FBekIsQ0FBK0JNLE9BQS9CLENBQXVDLElBQXZDOztBQUNBbEIsdUJBQWEsSUFBSSxJQUFqQixDQUgyQyxDQUkzQzs7QUFDQSxnQkFBSSxDQUFDSCxLQUFMLENBQVdvQixPQUFYLENBQW9CLENBQUNqQixhQUFELEdBQWlCLEVBQWxCLEdBQXdCLE1BQUksQ0FBQ0YsS0FBaEQ7QUFDSDs7QUFFRCxZQUFJRyxXQUFXLEdBQUcsTUFBSSxDQUFDQSxXQUF2QixFQUFvQztBQUNoQyxnQkFBSSxDQUFDUyxNQUFMLENBQVlFLEtBQVosQ0FBa0JHLE9BQWxCLENBQTBCLENBQUMsSUFBM0I7O0FBQ0FkLHFCQUFXLElBQUksSUFBZixDQUZnQyxDQUdoQzs7QUFDQSxnQkFBSSxDQUFDSixLQUFMLENBQVdrQixPQUFYLENBQW9CZCxXQUFXLEdBQUcsRUFBZixHQUFxQixNQUFJLENBQUNILEtBQTdDO0FBQ0gsU0FMRCxNQUtPLElBQUlHLFdBQVcsR0FBRyxNQUFJLENBQUNBLFdBQXZCLEVBQW9DO0FBQ3ZDLGdCQUFJLENBQUNTLE1BQUwsQ0FBWUUsS0FBWixDQUFrQkcsT0FBbEIsQ0FBMEIsSUFBMUI7O0FBQ0FkLHFCQUFXLElBQUksSUFBZixDQUZ1QyxDQUd2Qzs7QUFDQSxnQkFBSSxDQUFDSixLQUFMLENBQVdrQixPQUFYLENBQW9CZCxXQUFXLEdBQUcsRUFBZixHQUFxQixNQUFJLENBQUNILEtBQTdDO0FBQ0g7QUFDSixPQXBEYyxFQXFEZixLQXJEZSxDQUFuQjtBQXdEQSxhQUFPLEtBQUtELEtBQVo7QUFDSDtBQTlLTDtBQUFBO0FBQUEsMkNBK0syQnFDLE1BL0szQixFQStLbUM7QUFBQTs7QUFDM0IsV0FBS0MsSUFBTCxHQUFZQywyREFBZSxDQUN2QixpQkFZTTtBQUFBLFlBWEZDLElBV0UsU0FYRkEsSUFXRTtBQUFBLFlBVkZDLElBVUUsU0FWRkEsSUFVRTtBQUFBLFlBVEZDLElBU0UsU0FURkEsSUFTRTtBQUFBLFlBUkZDLElBUUUsU0FSRkEsSUFRRTtBQUFBLFlBUEZDLEtBT0UsU0FQRkEsS0FPRTtBQUFBLFlBTkZDLE9BTUUsU0FORkEsT0FNRTtBQUFBLFlBTEZDLElBS0UsU0FMRkEsSUFLRTtBQUFBLFlBSkZDLElBSUUsU0FKRkEsSUFJRTtBQUFBLFlBSEZDLFFBR0UsU0FIRkEsUUFHRTtBQUFBLFlBRkZDLElBRUUsU0FGRkEsSUFFRTtBQUFBLFlBREZDLElBQ0UsU0FERkEsSUFDRTs7QUFDRixZQUFJRCxJQUFKLEVBQVU7QUFDTixjQUFJLE1BQUksQ0FBQ2hELEtBQUwsR0FBYSxDQUFqQixFQUFvQjtBQUNoQixrQkFBSSxDQUFDQSxLQUFMLElBQWMsSUFBZDtBQUNIO0FBQ0o7O0FBQ0QsWUFBSWlELElBQUosRUFBVTtBQUNOLGNBQUksTUFBSSxDQUFDakQsS0FBTCxHQUFhLENBQWpCLEVBQW9CO0FBQ2hCLGtCQUFJLENBQUNBLEtBQUwsSUFBYyxJQUFkO0FBQ0g7QUFDSjs7QUFDRCxZQUFJdUMsSUFBSixFQUFVO0FBQ04sZ0JBQUksQ0FBQ3RDLGFBQUwsR0FBcUIsR0FBckI7QUFDSCxTQUZELE1BRU8sSUFBSXdDLElBQUosRUFBVTtBQUNiLGdCQUFJLENBQUN4QyxhQUFMLEdBQXFCLENBQUMsR0FBdEI7QUFDSCxTQUZNLE1BRUE7QUFDSCxnQkFBSSxDQUFDQSxhQUFMLEdBQXFCLENBQXJCO0FBQ0g7O0FBQ0QsWUFBSTZDLElBQUosRUFBVTtBQUNOLGdCQUFJLENBQUMzQyxXQUFMLEdBQW1CLEdBQW5CO0FBQ0gsU0FGRCxNQUVPLElBQUkwQyxJQUFKLEVBQVU7QUFDYixnQkFBSSxDQUFDMUMsV0FBTCxHQUFtQixDQUFDLEdBQXBCO0FBQ0gsU0FGTSxNQUVBO0FBQ0gsZ0JBQUksQ0FBQ0EsV0FBTCxHQUFtQixDQUFuQjtBQUNIOztBQUVELFlBQUlxQyxJQUFKLEVBQVU7QUFDTixnQkFBSSxDQUFDdEMsYUFBTCxHQUFxQixHQUFyQjtBQUNILFNBRkQsTUFFTyxJQUFJd0MsSUFBSixFQUFVO0FBQ2IsZ0JBQUksQ0FBQ3hDLGFBQUwsR0FBcUIsQ0FBQyxHQUF0QjtBQUNILFNBRk0sTUFFQTtBQUNILGdCQUFJLENBQUNBLGFBQUwsR0FBcUIsQ0FBckI7QUFDSDtBQUNKLE9BOUNzQixDQUEzQjtBQWdEQSxXQUFLSCxLQUFMLENBQVdjLEdBQVgsQ0FBZXVCLE1BQWY7QUFDQUEsWUFBTSxDQUFDckIsUUFBUCxDQUFnQkMsR0FBaEIsQ0FBb0IsQ0FBcEIsRUFBdUIsRUFBdkIsRUFBMkIsQ0FBQyxHQUE1QjtBQUNBb0IsWUFBTSxDQUFDbkIsT0FBUCxDQUFlQywrREFBUSxDQUFDLEdBQUQsQ0FBdkI7QUFDQWtCLFlBQU0sQ0FBQ2hCLE9BQVAsQ0FBZUYsK0RBQVEsQ0FBQyxDQUFDLEVBQUYsQ0FBdkI7QUFDSDtBQXBPTDtBQUFBO0FBQUEsOEJBc09jO0FBQ04sVUFBSSxLQUFLbUIsSUFBTCxLQUFjYSxTQUFsQixFQUE2QjtBQUN6QkMsbUVBQWUsQ0FBQyxLQUFLZCxJQUFOLENBQWY7QUFDSDs7QUFDRCxXQUFLdEMsS0FBTCxDQUFXOEIsTUFBWDs7QUFDQSxVQUFJLEtBQUt6QixPQUFMLEtBQWlCLENBQUMsQ0FBdEIsRUFBeUI7QUFDckJnRCw4RUFBcUIsQ0FBQyxLQUFLaEQsT0FBTixDQUFyQjtBQUNIOztBQUdEOztBQUVBLGFBQU87QUFBRWlELGVBQU8sRUFBRTtBQUFYLE9BQVA7QUFDSDtBQW5QTDs7QUFBQTtBQUFBLEVBQStCQyxzRUFBL0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC43NWEwZWNmZTE0YjNmYjJjMTNhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JvdXAsIFNjZW5lLCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IHJhZGlhbnRzIH0gZnJvbSBcIi4uLy4uL0FsZ29yaXRobXMvZGVnVG9SYWRcIjtcclxuaW1wb3J0IHsgYWRkR0xCRmlsZSB9IGZyb20gXCIuLi8uLi9Db3JlLUFQSS8zZE1vZGVsSGFuZGxlcnMvR0xCTG9hZGVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVBvaW50TGlnaHQgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvTGlnaHRpbmdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGFkZFRvUmVuZGVyU2VxdWVuY2UgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvUmVuZGVyaW5nSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBDbGVhblVwTGlzdGVuZXIsIGxpc3RlblRvQ29ucm9scyB9IGZyb20gXCIuLi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBnZXREYXlTdGF0ZSwgcmVtb3ZlRnJvbURheVRpbWVIb29rIH0gZnJvbSBcIi4uL0RheU5pZ2h0Q3ljbGVcIjtcclxuaW1wb3J0IHsgQ2hlY2tQbGFuZUNvbGxpc2lvbnMgfSBmcm9tIFwiLi9wbGFuZUNvbGxpc2lvbnMudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWtlUGxhbmUgZXh0ZW5kcyBDaGVja1BsYW5lQ29sbGlzaW9ucyB7XHJcbiAgICBwcml2YXRlIFNjZW5lVG9HZXQ6IFNjZW5lO1xyXG4gICAgcHJpdmF0ZSBzcGVlZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBlbGV2YXRvclBpdGNoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGFpcmVsb25lUGl0Y2g6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcnVkZGVyUGl0Y2g6IG51bWJlcjtcclxuICAgIHByaXZhdGUgY2hlY2tlcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBncm91cDogR3JvdXA7XHJcblxyXG4gICAgcHJpdmF0ZSBVVUlEOiB1bmtub3duXHJcblxyXG5cclxuICAgIHByaXZhdGUgcGxhbmVcclxuICAgIHByaXZhdGUgcHJvcHNcclxuICAgIHByaXZhdGUgbGVmdEFpcmVsb25lXHJcbiAgICBwcml2YXRlIHJpZ2h0QWlyZWxvbmVcclxuICAgIHByaXZhdGUgcmlnaHRDb250cm9sU3VyZmFjZVxyXG4gICAgcHJpdmF0ZSBsZWZ0Q29udHJvbFN1cmZhY2VcclxuICAgIHByaXZhdGUgcnVkZGVyIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFNjZW5lVG9HZXQpIHtcclxuICAgICAgICBsZXQgbWFpbkdyb3VwID0gbmV3IEdyb3VwKClcclxuICAgICAgICBzdXBlcihtYWluR3JvdXAsIFNjZW5lVG9HZXQpXHJcbiAgICAgICAgdGhpcy5TY2VuZVRvR2V0ID0gU2NlbmVUb0dldDtcclxuICAgICAgICB0aGlzLmdyb3VwID0gbWFpbkdyb3VwO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuZWxldmF0b3JQaXRjaCA9IDA7XHJcbiAgICAgICAgdGhpcy5haXJlbG9uZVBpdGNoID0gMDtcclxuICAgICAgICB0aGlzLnJ1ZGRlclBpdGNoID0gMDtcclxuICAgICAgICB0aGlzLmNoZWNrZXIgPSAtMTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9hZEZpbGVzKCkge1xyXG4gICAgICAgIHRoaXMucGxhbmUgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgICAgICBcIi9BaXJjcmFmdC9CYXNpY1BsYW5lL1BsYW5lLmdsYlwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IGF3YWl0IGFkZEdMQkZpbGUoXHJcbiAgICAgICAgICAgIFwiL0FpcmNyYWZ0L0Jhc2ljUGxhbmUvQmxhZGVzLmdsYlwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5sZWZ0QWlyZWxvbmUgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgICAgICBcIi9BaXJjcmFmdC9CYXNpY1BsYW5lL0xlZnRBaXJlbG9uZS5nbGJcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucmlnaHRBaXJlbG9uZSA9IGF3YWl0IGFkZEdMQkZpbGUoXHJcbiAgICAgICAgICAgIFwiL0FpcmNyYWZ0L0Jhc2ljUGxhbmUvUmlnaHRBaXJlbG9uZS5nbGJcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubGVmdENvbnRyb2xTdXJmYWNlID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICAgICAgXCIvQWlyY3JhZnQvQmFzaWNQbGFuZS9MZWZ0V2luZ0NvbnRyb2xzU3VyZmFjZS5nbGJcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucmlnaHRDb250cm9sU3VyZmFjZSA9IGF3YWl0IGFkZEdMQkZpbGUoXHJcbiAgICAgICAgICAgIFwiL0FpcmNyYWZ0L0Jhc2ljUGxhbmUvUmlnaHRXaW5nQ29udHJvbHNTdXJmYWNlLmdsYlwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5ydWRkZXIgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgICAgICBcIi9BaXJjcmFmdC9CYXNpY1BsYW5lL1J1ZGRlci5nbGJcIixcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIENyZWF0ZUdyb3VwQW5kUG9zKCkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMucGxhbmUuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMucHJvcHMuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMubGVmdEFpcmVsb25lLnNjZW5lKTtcclxuICAgICAgICB0aGlzLmdyb3VwLmFkZCh0aGlzLnJpZ2h0QWlyZWxvbmUuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMucmlnaHRDb250cm9sU3VyZmFjZS5zY2VuZSk7XHJcbiAgICAgICAgdGhpcy5ncm91cC5hZGQodGhpcy5sZWZ0Q29udHJvbFN1cmZhY2Uuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMucnVkZGVyLnNjZW5lKTtcclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0QWlyZWxvbmUuc2NlbmUucG9zaXRpb24uc2V0KDEyLjkzNiwgMTUuOTk0LCAtNTkuMjY0KTtcclxuICAgICAgICB0aGlzLnJpZ2h0QWlyZWxvbmUuc2NlbmUucG9zaXRpb24uc2V0KC0xMi40OTUsIDE1Ljg4OCwgLTU5LjI5NCk7XHJcblxyXG4gICAgICAgIHRoaXMubGVmdENvbnRyb2xTdXJmYWNlLnNjZW5lLnBvc2l0aW9uLnNldCg0Ni4yNDMsIDIyLjUzNiwgLTEzLjU0MSk7XHJcbiAgICAgICAgdGhpcy5sZWZ0Q29udHJvbFN1cmZhY2Uuc2NlbmUucm90YXRlWShyYWRpYW50cygtNykpO1xyXG5cclxuICAgICAgICB0aGlzLnJpZ2h0Q29udHJvbFN1cmZhY2Uuc2NlbmUucG9zaXRpb24uc2V0KFxyXG4gICAgICAgICAgICAtNDYuMjcxOCxcclxuICAgICAgICAgICAgMjIuNTQxMSxcclxuICAgICAgICAgICAgLTEzLjU0NDdcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucmlnaHRDb250cm9sU3VyZmFjZS5zY2VuZS5yb3RhdGVZKHJhZGlhbnRzKDYuOCkpO1xyXG4gICAgICAgIHRoaXMucmlnaHRDb250cm9sU3VyZmFjZS5zY2VuZS5yb3RhdGVaKHJhZGlhbnRzKC0zLjUpKTtcclxuICAgICAgICAvL3RoaXMucmlnaHRDb250cm9sU3VyZmFjZS5zY2VuZS5yb3RhdGVYKHJhZGlhbnRzKDE4My41NykpXHJcblxyXG4gICAgICAgIHRoaXMucnVkZGVyLnNjZW5lLnBvc2l0aW9uLnNldCgtMC4wMjIsIDI0LjY3LCAtNjguMTcpO1xyXG4gICAgICAgIHRoaXMucnVkZGVyLnNjZW5lLnJvdGF0ZVgocmFkaWFudHMoLTIyKSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuc2NlbmUucG9zaXRpb24uc2V0KDAsIDE1LCAyMik7XHJcbiAgICAgICAgdGhpcy5TY2VuZVRvR2V0LmFkZCh0aGlzLmdyb3VwKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncm91cC5zY2FsZS5zZXQoMC4yNSwgMC4yNSwgMC4yNSk7XHJcblxyXG4gICAgICAgIGxldCBbcHJvcHMsIGxlZnRBaXJlbG9uZV0gPSBbdGhpcy5wcm9wcy5zY2VuZSwgdGhpcy5sZWZ0QWlyZWxvbmUuc2NlbmVdO1xyXG4gICAgICAgIC8vIEZvciB0ZXN0aW5nIFxcXFxcclxuXHJcbiAgICAgICAgbGV0IGxpZ2h0ID0gY3JlYXRlUG9pbnRMaWdodCgweGZmMDAwMCwgMywgWzYwLCAyMi41LCAtMTBdLCA1MCk7XHJcbiAgICAgICAgbGV0IGxpZ2h0MiA9IGNyZWF0ZVBvaW50TGlnaHQoMHgwMGZmMDAsIDMsIFstNjAsIDIyLjUsIC0xMF0sIDIuNSk7XHJcbiAgICAgICAgbGV0IHdoaXRlTGlnaHQgPSBjcmVhdGVQb2ludExpZ2h0KDB4ZmZmZmZmLCAzLCBbMCwgMzAsIC02MF0sIDIuNSk7XHJcbiAgICAgICAgbGV0IGRheSA9IHRydWVcclxuICAgICAgICB0aGlzLmdyb3VwLmFkZChsaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLmFkZChsaWdodDIpO1xyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGdldERheVN0YXRlKCkgPT09IGZhbHNlICYmIGRheSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICBkYXkgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cC5hZGQobGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cC5hZGQobGlnaHQyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAuYWRkKHdoaXRlTGlnaHQpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihnZXREYXlTdGF0ZSgpID09PSB0cnVlICYmIGRheSA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgZGF5ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cC5yZW1vdmUobGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cC5yZW1vdmUobGlnaHQyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAucmVtb3ZlKHdoaXRlTGlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMClcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRFdmVsYXRvclBpdGNoID0gMDtcclxuICAgICAgICBsZXQgYWlyZWxvbmVQaXRjaCA9IDA7XHJcbiAgICAgICAgbGV0IHJ1ZGRlclBpdGNoID0gMDtcclxuICAgICAgICBhZGRUb1JlbmRlclNlcXVlbmNlKFxyXG4gICAgICAgICAgICBcIk1haW5cIixcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLmdldFdvcmxkRGlyZWN0aW9uKGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnBvc2l0aW9uLmFkZChkaXJlY3Rpb24ubXVsdGlwbHlTY2FsYXIodGhpcy5zcGVlZCkpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmdyb3VwLnBvc2l0aW9uLnogKz0gdGhpcy5zcGVlZDtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5yb3RhdGVaKHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRFdmVsYXRvclBpdGNoIDwgdGhpcy5lbGV2YXRvclBpdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0QWlyZWxvbmUuc2NlbmUucm90YXRlWCgtMC4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodEFpcmVsb25lLnNjZW5lLnJvdGF0ZVgoLTAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFdmVsYXRvclBpdGNoICs9IDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZih0aGlzLnNwZWVkIDwgMC40KXJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAucm90YXRlWChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGN1cnJlbnRFdmVsYXRvclBpdGNoIC8gNTApICogdGhpcy5zcGVlZFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRFdmVsYXRvclBpdGNoID4gdGhpcy5lbGV2YXRvclBpdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0QWlyZWxvbmUuc2NlbmUucm90YXRlWCgwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0QWlyZWxvbmUuc2NlbmUucm90YXRlWCgwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RXZlbGF0b3JQaXRjaCAtPSAwLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYodGhpcy5zcGVlZCA8IDAuNClyZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnJvdGF0ZVgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50RXZlbGF0b3JQaXRjaCAvIDUwKSAqIHRoaXMuc3BlZWRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhaXJlbG9uZVBpdGNoIDwgdGhpcy5haXJlbG9uZVBpdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q29udHJvbFN1cmZhY2Uuc2NlbmUucm90YXRlWCgwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q29udHJvbFN1cmZhY2Uuc2NlbmUucm90YXRlWCgtMC4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWlyZWxvbmVQaXRjaCArPSAwLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYodGhpcy5zcGVlZCA8IDAuNClyZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnJvdGF0ZVooKC1haXJlbG9uZVBpdGNoIC8gNTApICogdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFpcmVsb25lUGl0Y2ggPiB0aGlzLmFpcmVsb25lUGl0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRDb250cm9sU3VyZmFjZS5zY2VuZS5yb3RhdGVYKC0wLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q29udHJvbFN1cmZhY2Uuc2NlbmUucm90YXRlWCgwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICBhaXJlbG9uZVBpdGNoIC09IDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZih0aGlzLnNwZWVkIDwgMC40KXJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAucm90YXRlWigoLWFpcmVsb25lUGl0Y2ggLyA1MCkgKiB0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocnVkZGVyUGl0Y2ggPCB0aGlzLnJ1ZGRlclBpdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydWRkZXIuc2NlbmUucm90YXRlWSgtMC4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVkZGVyUGl0Y2ggKz0gMC4wMTtcclxuICAgICAgICAgICAgICAgICAgICAvL2lmKHRoaXMuc3BlZWQgPCAwLjQpcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cC5yb3RhdGVZKChydWRkZXJQaXRjaCAvIDUwKSAqIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChydWRkZXJQaXRjaCA+IHRoaXMucnVkZGVyUGl0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1ZGRlci5zY2VuZS5yb3RhdGVZKDAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1ZGRlclBpdGNoIC09IDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZih0aGlzLnNwZWVkIDwgMC40KXJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAucm90YXRlWSgocnVkZGVyUGl0Y2ggLyA1MCkgKiB0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5ncm91cDtcclxuICAgIH1cclxuICAgIGF0dGFjaENhbWVyYUFuZENvbnRyb2woQ2FtZXJhKSB7XHJcbiAgICAgICAgdGhpcy5VVUlEID0gbGlzdGVuVG9Db25yb2xzKFxyXG4gICAgICAgICAgICAoe1xyXG4gICAgICAgICAgICAgICAgd0tleSxcclxuICAgICAgICAgICAgICAgIGFLZXksXHJcbiAgICAgICAgICAgICAgICBzS2V5LFxyXG4gICAgICAgICAgICAgICAgZEtleSxcclxuICAgICAgICAgICAgICAgIHVwS2V5LFxyXG4gICAgICAgICAgICAgICAgZG93bktleSxcclxuICAgICAgICAgICAgICAgIGVLZXksXHJcbiAgICAgICAgICAgICAgICBxS2V5LFxyXG4gICAgICAgICAgICAgICAgc2hpZnRLZXksXHJcbiAgICAgICAgICAgICAgICB6S2V5LFxyXG4gICAgICAgICAgICAgICAgeEtleSxcclxuICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHpLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZCA8IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCArPSAwLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh4S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLT0gMC4wMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAod0tleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxldmF0b3JQaXRjaCA9IDAuNTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc0tleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxldmF0b3JQaXRjaCA9IC0wLjU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxldmF0b3JQaXRjaCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVkZGVyUGl0Y2ggPSAwLjM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1ZGRlclBpdGNoID0gLTAuMztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydWRkZXJQaXRjaCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpcmVsb25lUGl0Y2ggPSAwLjU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpcmVsb25lUGl0Y2ggPSAtMC41O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpcmVsb25lUGl0Y2ggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmdyb3VwLmFkZChDYW1lcmEpO1xyXG4gICAgICAgIENhbWVyYS5wb3NpdGlvbi5zZXQoMCwgNDAsIC0xMDApO1xyXG4gICAgICAgIENhbWVyYS5yb3RhdGVZKHJhZGlhbnRzKDE4MCkpO1xyXG4gICAgICAgIENhbWVyYS5yb3RhdGVYKHJhZGlhbnRzKC0yMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFuVXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuVVVJRCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIENsZWFuVXBMaXN0ZW5lcih0aGlzLlVVSUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyb3VwLnJlbW92ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrZXIgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUZyb21EYXlUaW1lSG9vayh0aGlzLmNoZWNrZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBcclxuICAgICAgICBzdXBlci5zdG9wVXBkYXRpbmcoKVxyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==