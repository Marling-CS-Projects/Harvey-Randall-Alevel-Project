(function() {
var exports = {};
exports.id = "pages/test";
exports.ids = ["pages/test"];
exports.modules = {

/***/ "./components/Algorithms/MathUtils.js":
/*!********************************************!*\
  !*** ./components/Algorithms/MathUtils.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "roundnum": function() { return /* binding */ roundnum; },
/* harmony export */   "wait": function() { return /* binding */ wait; }
/* harmony export */ });
function roundnum(num, toNum) {
  return Math.round(num / toNum) * toNum;
}
async function wait(val) {
  return new Promise((res, rej) => {
    setTimeout(res, val);
  });
}

/***/ }),

/***/ "./components/Algorithms/PriorityQueue.js":
/*!************************************************!*\
  !*** ./components/Algorithms/PriorityQueue.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriorityQueue": function() { return /* binding */ PriorityQueue; }
/* harmony export */ });
const top = 0;

const parent = i => {
  (i + 1 >>> 1) - 1;
};

const left = i => {
  (i << 1) + 1;
};

const right = i => {
  i + 1 << 1;
};

class PriorityQueue {
  constructor(comparator = (a, b) => {
    a > b;
  }) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this._heap[parseInt(top, 10)];
  }

  push(...values) {
    values.forEach(value => {
      this._heap.push(value);

      this._siftUp();
    });
    return this.size();
  }

  pop() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;

    if (bottom > top) {
      this._swap(top, bottom);
    }

    this._heap.pop();

    this._siftDown();

    return poppedValue;
  }

  replace(value) {
    const replacedValue = this.peek();
    this._heap[parseInt(top, 10)] = value;

    this._siftDown();

    return replacedValue;
  }

  _greater(i, j) {
    return this._comparator(this._heap[parseInt(i, 10)], this._heap[parseInt(j, 10)]);
  }

  _swap(i, j) {
    [this._heap[parseInt(i, 10)], this._heap[parseInt(j, 10)]] = [this._heap[parseInt(j, 10)], this._heap[parseInt(i, 10)]];
  }

  _siftUp() {
    let node = this.size() - 1;

    while (node > top && this._greater(node, parent(node))) {
      this._swap(node, parent(node));

      node = parent(node);
    }
  }
  /*eslint complexity: ["error", 20]*/


  _siftDown() {
    let node = top;

    while (left(node) < this.size() && this._greater(left(node), node) || right(node) < this.size() && this._greater(right(node), node)) {
      let maxChild = right(node) < this.size() && this._greater(right(node), left(node)) ? right(node) : left(node);

      this._swap(node, maxChild);

      node = maxChild;
    }
  }

}

/***/ }),

/***/ "./components/Algorithms/VectorMaths.ts":
/*!**********************************************!*\
  !*** ./components/Algorithms/VectorMaths.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiplyVector2": function() { return /* binding */ MultiplyVector2; },
/* harmony export */   "MultiplyVector3": function() { return /* binding */ MultiplyVector3; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

function MultiplyVector2(vector, multiplier) {
  return new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(vector.x * multiplier, vector.y * multiplier);
}
function MultiplyVector3(vector, multiplier) {
  return new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(vector.x * multiplier, vector.y * multiplier, vector.z * multiplier);
}

/***/ }),

/***/ "./components/Algorithms/VectorUtils.js":
/*!**********************************************!*\
  !*** ./components/Algorithms/VectorUtils.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomIntFromInterval": function() { return /* binding */ randomIntFromInterval; },
/* harmony export */   "randomVectorBetweenPoints2D": function() { return /* binding */ randomVectorBetweenPoints2D; }
/* harmony export */ });
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! seedrandom */ "seedrandom");
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);


function randomIntFromInterval(min, max) {
  let myrng = new (seedrandom__WEBPACK_IMPORTED_MODULE_0___default())();
  return Math.floor(myrng() * (max - min + 1) + min);
}
function randomVectorBetweenPoints2D(Vector1, Vector2) {
  return new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(randomIntFromInterval(Vector1.x, Vector2.x), randomIntFromInterval(Vector1.y, Vector2.y), randomIntFromInterval(Vector1.z, Vector2.z));
}

/***/ }),

/***/ "./components/Algorithms/degToRad.js":
/*!*******************************************!*\
  !*** ./components/Algorithms/degToRad.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "radiants": function() { return /* binding */ radiants; },
/* harmony export */   "degrees": function() { return /* binding */ degrees; }
/* harmony export */ });
function radiants(degrees) {
  return degrees * Math.PI / 180;
}
function degrees(radians) {
  return radians * 180 / Math.PI;
}

/***/ }),

/***/ "./components/Algorithms/meshMerger.js":
/*!*********************************************!*\
  !*** ./components/Algorithms/meshMerger.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_mergeMeshes": function() { return /* binding */ _mergeMeshes; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Core_API_3dModelHandlers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core-API/3dModelHandlers/utils */ "./components/Core-API/3dModelHandlers/utils.js");


function _mergeMeshes(meshes) {
  console.log([].concat(meshes.map(e => e.children)).flat());
  let inputGeo = _Core_API_3dModelHandlers_utils__WEBPACK_IMPORTED_MODULE_1__.BufferGeometryUtils.mergeBufferGeometries([].concat(meshes.map(e => e.children)).flat(), true);
  return new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(inputGeo, new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
    color: 0xff0000
  }));
}

/***/ }),

/***/ "./components/Context/socketioContext.js":
/*!***********************************************!*\
  !*** ./components/Context/socketioContext.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppWrapper": function() { return /* binding */ AppWrapper; },
/* harmony export */   "useAppContext": function() { return /* binding */ useAppContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/wrapper.mjs");

var _jsxFileName = "H:\\Desktop\\code\\Harvey-Randall-Alevel-Project\\components\\Context\\socketioContext.js";


const AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function AppWrapper({
  children
}) {
  let sharedState = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {
    value: sharedState,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
function useAppContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);
}

/***/ }),

/***/ "./components/Core-API/3dModelHandlers/GLBLoader.js":
/*!**********************************************************!*\
  !*** ./components/Core-API/3dModelHandlers/GLBLoader.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addGLBFile": function() { return /* binding */ addGLBFile; }
/* harmony export */ });
/* harmony import */ var _glbCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glbCore */ "./components/Core-API/3dModelHandlers/glbCore.js");

async function addGLBFile(item, scene) {
  return new Promise((resolve, reject) => {
    const loader = new _glbCore__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader();
    loader.load( // resource URL
    item, // called when the resource is loaded
    function (gltf) {
      gltf.animations;
      gltf.scene;
      gltf.scenes;
      gltf.cameras;
      gltf.asset;
      resolve(gltf);
    }, // called while loading is progressing
    function (xhr) {
      console.log(xhr.loaded / xhr.total * 100 + "% loaded");
    }, // called when loading has errors
    function (error) {
      console.log("An error happened");
      reject(error);
    });
  });
}

/***/ }),

/***/ "./components/Core-API/3dModelHandlers/MeshMerger.ts":
/*!***********************************************************!*\
  !*** ./components/Core-API/3dModelHandlers/MeshMerger.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MergeMeshes": function() { return /* binding */ MergeMeshes; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./components/Core-API/3dModelHandlers/utils.js");


function MergeMeshes(input, location) {
  console.log(input);
  input.forEach((e, i) => {
    input[i] = e.applyMatrix4(new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().makeTranslation(location[i].x, location[i].y, location[i].z));
  });
  let bufferGeom = _utils__WEBPACK_IMPORTED_MODULE_1__.BufferGeometryUtils.mergeBufferGeometries(input, false);
  return bufferGeom;
}

/***/ }),

/***/ "./components/Core-API/3dModelHandlers/glbCore.js":
/*!********************************************************!*\
  !*** ./components/Core-API/3dModelHandlers/glbCore.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLTFLoader": function() { return /* binding */ GLTFLoader; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
// THIS FILE WAS NOT WRITTEN BY ME
// There was a problem with the inbuilt obj loaders so I rewrote parts of it, so it works in Nextjs and React 
// -- Harvey Randall 21/5/21


var GLTFLoader = function () {
  function GLTFLoader(manager) {
    three__WEBPACK_IMPORTED_MODULE_0__.Loader.call(this, manager);
    this.dracoLoader = null;
    this.ktx2Loader = null;
    this.meshoptDecoder = null;
    this.pluginCallbacks = [];
    this.register(function (parser) {
      return new GLTFMaterialsClearcoatExtension(parser);
    });
    this.register(function (parser) {
      return new GLTFTextureBasisUExtension(parser);
    });
    this.register(function (parser) {
      return new GLTFTextureWebPExtension(parser);
    });
    this.register(function (parser) {
      return new GLTFMaterialsTransmissionExtension(parser);
    });
    this.register(function (parser) {
      return new GLTFLightsExtension(parser);
    });
    this.register(function (parser) {
      return new GLTFMeshoptCompression(parser);
    });
  }

  GLTFLoader.prototype = Object.assign(Object.create(three__WEBPACK_IMPORTED_MODULE_0__.Loader.prototype), {
    constructor: GLTFLoader,
    load: function (url, onLoad, onProgress, onError) {
      var scope = this;
      var resourcePath;

      if (this.resourcePath !== '') {
        resourcePath = this.resourcePath;
      } else if (this.path !== '') {
        resourcePath = this.path;
      } else {
        resourcePath = three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.extractUrlBase(url);
      } // Tells the LoadingManager to track an extra item, which resolves after
      // the model is fully loaded. This means the count of items loaded will
      // be incorrect, but ensures manager.onLoad() does not fire early.


      this.manager.itemStart(url);

      var _onError = function (e) {
        if (onError) {
          onError(e);
        } else {
          console.error(e);
        }

        scope.manager.itemError(url);
        scope.manager.itemEnd(url);
      };

      var loader = new three__WEBPACK_IMPORTED_MODULE_0__.FileLoader(this.manager);
      loader.setPath(this.path);
      loader.setResponseType('arraybuffer');
      loader.setRequestHeader(this.requestHeader);
      loader.setWithCredentials(this.withCredentials);
      loader.load(url, function (data) {
        try {
          scope.parse(data, resourcePath, function (gltf) {
            onLoad(gltf);
            scope.manager.itemEnd(url);
          }, _onError);
        } catch (e) {
          _onError(e);
        }
      }, onProgress, _onError);
    },
    setDRACOLoader: function (dracoLoader) {
      this.dracoLoader = dracoLoader;
      return this;
    },
    setDDSLoader: function () {
      throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
    },
    setKTX2Loader: function (ktx2Loader) {
      this.ktx2Loader = ktx2Loader;
      return this;
    },
    setMeshoptDecoder: function (meshoptDecoder) {
      this.meshoptDecoder = meshoptDecoder;
      return this;
    },
    register: function (callback) {
      if (this.pluginCallbacks.indexOf(callback) === -1) {
        this.pluginCallbacks.push(callback);
      }

      return this;
    },
    unregister: function (callback) {
      if (this.pluginCallbacks.indexOf(callback) !== -1) {
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(callback), 1);
      }

      return this;
    },
    parse: function (data, path, onLoad, onError) {
      var content;
      var extensions = {};
      var plugins = {};

      if (typeof data === 'string') {
        content = data;
      } else {
        var magic = three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.decodeText(new Uint8Array(data, 0, 4));

        if (magic === BINARY_EXTENSION_HEADER_MAGIC) {
          try {
            extensions[EXTENSIONS.KHR_BINARY_GLTF] = new GLTFBinaryExtension(data);
          } catch (error) {
            if (onError) onError(error);
            return;
          }

          content = extensions[EXTENSIONS.KHR_BINARY_GLTF].content;
        } else {
          content = three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.decodeText(new Uint8Array(data));
        }
      }

      var json = JSON.parse(content);

      if (json.asset === undefined || json.asset.version[0] < 2) {
        if (onError) onError(new Error('THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.'));
        return;
      }

      var parser = new GLTFParser(json, {
        path: path || this.resourcePath || '',
        crossOrigin: this.crossOrigin,
        requestHeader: this.requestHeader,
        manager: this.manager,
        ktx2Loader: this.ktx2Loader,
        meshoptDecoder: this.meshoptDecoder
      });
      parser.fileLoader.setRequestHeader(this.requestHeader);

      for (var i = 0; i < this.pluginCallbacks.length; i++) {
        var plugin = this.pluginCallbacks[i](parser);
        plugins[plugin.name] = plugin; // Workaround to avoid determining as unknown extension
        // in addUnknownExtensionsToUserData().
        // Remove this workaround if we move all the existing
        // extension handlers to plugin system

        extensions[plugin.name] = true;
      }

      if (json.extensionsUsed) {
        for (var i = 0; i < json.extensionsUsed.length; ++i) {
          var extensionName = json.extensionsUsed[i];
          var extensionsRequired = json.extensionsRequired || [];

          switch (extensionName) {
            case EXTENSIONS.KHR_MATERIALS_UNLIT:
              extensions[extensionName] = new GLTFMaterialsUnlitExtension();
              break;

            case EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
              extensions[extensionName] = new GLTFMaterialsPbrSpecularGlossinessExtension();
              break;

            case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
              extensions[extensionName] = new GLTFDracoMeshCompressionExtension(json, this.dracoLoader);
              break;

            case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
              extensions[extensionName] = new GLTFTextureTransformExtension();
              break;

            case EXTENSIONS.KHR_MESH_QUANTIZATION:
              extensions[extensionName] = new GLTFMeshQuantizationExtension();
              break;

            default:
              if (extensionsRequired.indexOf(extensionName) >= 0 && plugins[extensionName] === undefined) {
                console.warn('THREE.GLTFLoader: Unknown extension "' + extensionName + '".');
              }

          }
        }
      }

      parser.setExtensions(extensions);
      parser.setPlugins(plugins);
      parser.parse(onLoad, onError);
    }
  });
  /* GLTFREGISTRY */

  function GLTFRegistry() {
    var objects = {};
    return {
      get: function (key) {
        return objects[key];
      },
      add: function (key, object) {
        objects[key] = object;
      },
      remove: function (key) {
        delete objects[key];
      },
      removeAll: function () {
        objects = {};
      }
    };
  }
  /*********************************/

  /********** EXTENSIONS ***********/

  /*********************************/


  var EXTENSIONS = {
    KHR_BINARY_GLTF: 'KHR_binary_glTF',
    KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
    KHR_LIGHTS_PUNCTUAL: 'KHR_lights_punctual',
    KHR_MATERIALS_CLEARCOAT: 'KHR_materials_clearcoat',
    KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: 'KHR_materials_pbrSpecularGlossiness',
    KHR_MATERIALS_TRANSMISSION: 'KHR_materials_transmission',
    KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
    KHR_TEXTURE_BASISU: 'KHR_texture_basisu',
    KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
    KHR_MESH_QUANTIZATION: 'KHR_mesh_quantization',
    EXT_TEXTURE_WEBP: 'EXT_texture_webp',
    EXT_MESHOPT_COMPRESSION: 'EXT_meshopt_compression'
  };
  /**
   * Punctual Lights Extension
   *
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual
   */

  function GLTFLightsExtension(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL; // Object3D instance caches

    this.cache = {
      refs: {},
      uses: {}
    };
  }

  GLTFLightsExtension.prototype._markDefs = function () {
    var parser = this.parser;
    var nodeDefs = this.parser.json.nodes || [];

    for (var nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {
      var nodeDef = nodeDefs[nodeIndex];

      if (nodeDef.extensions && nodeDef.extensions[this.name] && nodeDef.extensions[this.name].light !== undefined) {
        parser._addNodeRef(this.cache, nodeDef.extensions[this.name].light);
      }
    }
  };

  GLTFLightsExtension.prototype._loadLight = function (lightIndex) {
    var parser = this.parser;
    var cacheKey = 'light:' + lightIndex;
    var dependency = parser.cache.get(cacheKey);
    if (dependency) return dependency;
    var json = parser.json;
    var extensions = json.extensions && json.extensions[this.name] || {};
    var lightDefs = extensions.lights || [];
    var lightDef = lightDefs[lightIndex];
    var lightNode;
    var color = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xffffff);
    if (lightDef.color !== undefined) color.fromArray(lightDef.color);
    var range = lightDef.range !== undefined ? lightDef.range : 0;

    switch (lightDef.type) {
      case 'directional':
        lightNode = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(color);
        lightNode.target.position.set(0, 0, -1);
        lightNode.add(lightNode.target);
        break;

      case 'point':
        lightNode = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(color);
        lightNode.distance = range;
        break;

      case 'spot':
        lightNode = new three__WEBPACK_IMPORTED_MODULE_0__.SpotLight(color);
        lightNode.distance = range; // Handle spotlight properties.

        lightDef.spot = lightDef.spot || {};
        lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== undefined ? lightDef.spot.innerConeAngle : 0;
        lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== undefined ? lightDef.spot.outerConeAngle : Math.PI / 4.0;
        lightNode.angle = lightDef.spot.outerConeAngle;
        lightNode.penumbra = 1.0 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
        lightNode.target.position.set(0, 0, -1);
        lightNode.add(lightNode.target);
        break;

      default:
        throw new Error('THREE.GLTFLoader: Unexpected light type: ' + lightDef.type);
    } // Some lights (e.g. spot) default to a position other than the origin. Reset the position
    // here, because node-level parsing will only override position if explicitly specified.


    lightNode.position.set(0, 0, 0);
    lightNode.decay = 2;
    if (lightDef.intensity !== undefined) lightNode.intensity = lightDef.intensity;
    lightNode.name = parser.createUniqueName(lightDef.name || 'light_' + lightIndex);
    dependency = Promise.resolve(lightNode);
    parser.cache.add(cacheKey, dependency);
    return dependency;
  };

  GLTFLightsExtension.prototype.createNodeAttachment = function (nodeIndex) {
    var self = this;
    var parser = this.parser;
    var json = parser.json;
    var nodeDef = json.nodes[nodeIndex];
    var lightDef = nodeDef.extensions && nodeDef.extensions[this.name] || {};
    var lightIndex = lightDef.light;
    if (lightIndex === undefined) return null;
    return this._loadLight(lightIndex).then(function (light) {
      return parser._getNodeRef(self.cache, lightIndex, light);
    });
  };
  /**
   * Unlit Materials Extension
   *
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit
   */


  function GLTFMaterialsUnlitExtension() {
    this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;
  }

  GLTFMaterialsUnlitExtension.prototype.getMaterialType = function () {
    return three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial;
  };

  GLTFMaterialsUnlitExtension.prototype.extendParams = function (materialParams, materialDef, parser) {
    var pending = [];
    materialParams.color = new three__WEBPACK_IMPORTED_MODULE_0__.Color(1.0, 1.0, 1.0);
    materialParams.opacity = 1.0;
    var metallicRoughness = materialDef.pbrMetallicRoughness;

    if (metallicRoughness) {
      if (Array.isArray(metallicRoughness.baseColorFactor)) {
        var array = metallicRoughness.baseColorFactor;
        materialParams.color.fromArray(array);
        materialParams.opacity = array[3];
      }

      if (metallicRoughness.baseColorTexture !== undefined) {
        pending.push(parser.assignTexture(materialParams, 'map', metallicRoughness.baseColorTexture));
      }
    }

    return Promise.all(pending);
  };
  /**
   * Clearcoat Materials Extension
   *
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_clearcoat
   */


  function GLTFMaterialsClearcoatExtension(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;
  }

  GLTFMaterialsClearcoatExtension.prototype.getMaterialType = function (materialIndex) {
    var parser = this.parser;
    var materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
    return three__WEBPACK_IMPORTED_MODULE_0__.MeshPhysicalMaterial;
  };

  GLTFMaterialsClearcoatExtension.prototype.extendMaterialParams = function (materialIndex, materialParams) {
    var parser = this.parser;
    var materialDef = parser.json.materials[materialIndex];

    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }

    var pending = [];
    var extension = materialDef.extensions[this.name];

    if (extension.clearcoatFactor !== undefined) {
      materialParams.clearcoat = extension.clearcoatFactor;
    }

    if (extension.clearcoatTexture !== undefined) {
      pending.push(parser.assignTexture(materialParams, 'clearcoatMap', extension.clearcoatTexture));
    }

    if (extension.clearcoatRoughnessFactor !== undefined) {
      materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;
    }

    if (extension.clearcoatRoughnessTexture !== undefined) {
      pending.push(parser.assignTexture(materialParams, 'clearcoatRoughnessMap', extension.clearcoatRoughnessTexture));
    }

    if (extension.clearcoatNormalTexture !== undefined) {
      pending.push(parser.assignTexture(materialParams, 'clearcoatNormalMap', extension.clearcoatNormalTexture));

      if (extension.clearcoatNormalTexture.scale !== undefined) {
        var scale = extension.clearcoatNormalTexture.scale; // https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995

        materialParams.clearcoatNormalScale = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(scale, -scale);
      }
    }

    return Promise.all(pending);
  };
  /**
   * Transmission Materials Extension
   *
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_transmission
   * Draft: https://github.com/KhronosGroup/glTF/pull/1698
   */


  function GLTFMaterialsTransmissionExtension(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;
  }

  GLTFMaterialsTransmissionExtension.prototype.getMaterialType = function (materialIndex) {
    var parser = this.parser;
    var materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
    return three__WEBPACK_IMPORTED_MODULE_0__.MeshPhysicalMaterial;
  };

  GLTFMaterialsTransmissionExtension.prototype.extendMaterialParams = function (materialIndex, materialParams) {
    var parser = this.parser;
    var materialDef = parser.json.materials[materialIndex];

    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }

    var pending = [];
    var extension = materialDef.extensions[this.name];

    if (extension.transmissionFactor !== undefined) {
      materialParams.transmission = extension.transmissionFactor;
    }

    if (extension.transmissionTexture !== undefined) {
      pending.push(parser.assignTexture(materialParams, 'transmissionMap', extension.transmissionTexture));
    }

    return Promise.all(pending);
  };
  /**
   * BasisU Texture Extension
   *
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_basisu
   */


  function GLTFTextureBasisUExtension(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_TEXTURE_BASISU;
  }

  GLTFTextureBasisUExtension.prototype.loadTexture = function (textureIndex) {
    var parser = this.parser;
    var json = parser.json;
    var textureDef = json.textures[textureIndex];

    if (!textureDef.extensions || !textureDef.extensions[this.name]) {
      return null;
    }

    var extension = textureDef.extensions[this.name];
    var source = json.images[extension.source];
    var loader = parser.options.ktx2Loader;

    if (!loader) {
      if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) {
        throw new Error('THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures');
      } else {
        // Assumes that the extension is optional and that a fallback texture is present
        return null;
      }
    }

    return parser.loadTextureImage(textureIndex, source, loader);
  };
  /**
   * WebP Texture Extension
   *
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_texture_webp
   */


  function GLTFTextureWebPExtension(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.EXT_TEXTURE_WEBP;
    this.isSupported = null;
  }

  GLTFTextureWebPExtension.prototype.loadTexture = function (textureIndex) {
    var name = this.name;
    var parser = this.parser;
    var json = parser.json;
    var textureDef = json.textures[textureIndex];

    if (!textureDef.extensions || !textureDef.extensions[name]) {
      return null;
    }

    var extension = textureDef.extensions[name];
    var source = json.images[extension.source];
    var loader = parser.textureLoader;

    if (source.uri) {
      var handler = parser.options.manager.getHandler(source.uri);
      if (handler !== null) loader = handler;
    }

    return this.detectSupport().then(function (isSupported) {
      if (isSupported) return parser.loadTextureImage(textureIndex, source, loader);

      if (json.extensionsRequired && json.extensionsRequired.indexOf(name) >= 0) {
        throw new Error('THREE.GLTFLoader: WebP required by asset but unsupported.');
      } // Fall back to PNG or JPEG.


      return parser.loadTexture(textureIndex);
    });
  };

  GLTFTextureWebPExtension.prototype.detectSupport = function () {
    if (!this.isSupported) {
      this.isSupported = new Promise(function (resolve) {
        var image = new Image(); // Lossy test image. Support for lossy images doesn't guarantee support for all
        // WebP images, unfortunately.

        image.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';

        image.onload = image.onerror = function () {
          resolve(image.height === 1);
        };
      });
    }

    return this.isSupported;
  };
  /**
  * meshopt BufferView Compression Extension
  *
  * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_meshopt_compression
  */


  function GLTFMeshoptCompression(parser) {
    this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION;
    this.parser = parser;
  }

  GLTFMeshoptCompression.prototype.loadBufferView = function (index) {
    var json = this.parser.json;
    var bufferView = json.bufferViews[index];

    if (bufferView.extensions && bufferView.extensions[this.name]) {
      var extensionDef = bufferView.extensions[this.name];
      var buffer = this.parser.getDependency('buffer', extensionDef.buffer);
      var decoder = this.parser.options.meshoptDecoder;

      if (!decoder || !decoder.supported) {
        if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) {
          throw new Error('THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files');
        } else {
          // Assumes that the extension is optional and that fallback buffer data is present
          return null;
        }
      }

      return Promise.all([buffer, decoder.ready]).then(function (res) {
        var byteOffset = extensionDef.byteOffset || 0;
        var byteLength = extensionDef.byteLength || 0;
        var count = extensionDef.count;
        var stride = extensionDef.byteStride;
        var result = new ArrayBuffer(count * stride);
        var source = new Uint8Array(res[0], byteOffset, byteLength);
        decoder.decodeGltfBuffer(new Uint8Array(result), count, stride, source, extensionDef.mode, extensionDef.filter);
        return result;
      });
    } else {
      return null;
    }
  };
  /* BINARY EXTENSION */


  var BINARY_EXTENSION_HEADER_MAGIC = 'glTF';
  var BINARY_EXTENSION_HEADER_LENGTH = 12;
  var BINARY_EXTENSION_CHUNK_TYPES = {
    JSON: 0x4E4F534A,
    BIN: 0x004E4942
  };

  function GLTFBinaryExtension(data) {
    this.name = EXTENSIONS.KHR_BINARY_GLTF;
    this.content = null;
    this.body = null;
    var headerView = new DataView(data, 0, BINARY_EXTENSION_HEADER_LENGTH);
    this.header = {
      magic: three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.decodeText(new Uint8Array(data.slice(0, 4))),
      version: headerView.getUint32(4, true),
      length: headerView.getUint32(8, true)
    };

    if (this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC) {
      throw new Error('THREE.GLTFLoader: Unsupported glTF-Binary header.');
    } else if (this.header.version < 2.0) {
      throw new Error('THREE.GLTFLoader: Legacy binary file detected.');
    }

    var chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH;
    var chunkView = new DataView(data, BINARY_EXTENSION_HEADER_LENGTH);
    var chunkIndex = 0;

    while (chunkIndex < chunkContentsLength) {
      var chunkLength = chunkView.getUint32(chunkIndex, true);
      chunkIndex += 4;
      var chunkType = chunkView.getUint32(chunkIndex, true);
      chunkIndex += 4;

      if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON) {
        var contentArray = new Uint8Array(data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength);
        this.content = three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.decodeText(contentArray);
      } else if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN) {
        var byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
        this.body = data.slice(byteOffset, byteOffset + chunkLength);
      } // Clients must ignore chunks with unknown types.


      chunkIndex += chunkLength;
    }

    if (this.content === null) {
      throw new Error('THREE.GLTFLoader: JSON content not found.');
    }
  }
  /**
   * DRACO Mesh Compression Extension
   *
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression
   */


  function GLTFDracoMeshCompressionExtension(json, dracoLoader) {
    if (!dracoLoader) {
      throw new Error('THREE.GLTFLoader: No DRACOLoader instance provided.');
    }

    this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
    this.json = json;
    this.dracoLoader = dracoLoader;
    this.dracoLoader.preload();
  }

  GLTFDracoMeshCompressionExtension.prototype.decodePrimitive = function (primitive, parser) {
    var json = this.json;
    var dracoLoader = this.dracoLoader;
    var bufferViewIndex = primitive.extensions[this.name].bufferView;
    var gltfAttributeMap = primitive.extensions[this.name].attributes;
    var threeAttributeMap = {};
    var attributeNormalizedMap = {};
    var attributeTypeMap = {};

    for (var attributeName in gltfAttributeMap) {
      var threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
      threeAttributeMap[threeAttributeName] = gltfAttributeMap[attributeName];
    }

    for (attributeName in primitive.attributes) {
      var threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();

      if (gltfAttributeMap[attributeName] !== undefined) {
        var accessorDef = json.accessors[primitive.attributes[attributeName]];
        var componentType = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
        attributeTypeMap[threeAttributeName] = componentType;
        attributeNormalizedMap[threeAttributeName] = accessorDef.normalized === true;
      }
    }

    return parser.getDependency('bufferView', bufferViewIndex).then(function (bufferView) {
      return new Promise(function (resolve) {
        dracoLoader.decodeDracoFile(bufferView, function (geometry) {
          for (var attributeName in geometry.attributes) {
            var attribute = geometry.attributes[attributeName];
            var normalized = attributeNormalizedMap[attributeName];
            if (normalized !== undefined) attribute.normalized = normalized;
          }

          resolve(geometry);
        }, threeAttributeMap, attributeTypeMap);
      });
    });
  };
  /**
   * Texture Transform Extension
   *
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_transform
   */


  function GLTFTextureTransformExtension() {
    this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;
  }

  GLTFTextureTransformExtension.prototype.extendTexture = function (texture, transform) {
    texture = texture.clone();

    if (transform.offset !== undefined) {
      texture.offset.fromArray(transform.offset);
    }

    if (transform.rotation !== undefined) {
      texture.rotation = transform.rotation;
    }

    if (transform.scale !== undefined) {
      texture.repeat.fromArray(transform.scale);
    }

    if (transform.texCoord !== undefined) {
      console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.');
    }

    texture.needsUpdate = true;
    return texture;
  };
  /**
   * Specular-Glossiness Extension
   *
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness
   */

  /**
   * A sub class of StandardMaterial with some of the functionality
   * changed via the `onBeforeCompile` callback
   * @pailhead
   */


  function GLTFMeshStandardSGMaterial(params) {
    three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial.call(this);
    this.isGLTFSpecularGlossinessMaterial = true; //various chunks that need replacing

    var specularMapParsFragmentChunk = ['#ifdef USE_SPECULARMAP', '	uniform sampler2D specularMap;', '#endif'].join('\n');
    var glossinessMapParsFragmentChunk = ['#ifdef USE_GLOSSINESSMAP', '	uniform sampler2D glossinessMap;', '#endif'].join('\n');
    var specularMapFragmentChunk = ['vec3 specularFactor = specular;', '#ifdef USE_SPECULARMAP', '	vec4 texelSpecular = texture2D( specularMap, vUv );', '	texelSpecular = sRGBToLinear( texelSpecular );', '	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture', '	specularFactor *= texelSpecular.rgb;', '#endif'].join('\n');
    var glossinessMapFragmentChunk = ['float glossinessFactor = glossiness;', '#ifdef USE_GLOSSINESSMAP', '	vec4 texelGlossiness = texture2D( glossinessMap, vUv );', '	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture', '	glossinessFactor *= texelGlossiness.a;', '#endif'].join('\n');
    var lightPhysicalFragmentChunk = ['PhysicalMaterial material;', 'material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );', 'vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );', 'float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );', 'material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.', 'material.specularRoughness += geometryRoughness;', 'material.specularRoughness = min( material.specularRoughness, 1.0 );', 'material.specularColor = specularFactor;'].join('\n');
    var uniforms = {
      specular: {
        value: new three__WEBPACK_IMPORTED_MODULE_0__.Color().setHex(0xffffff)
      },
      glossiness: {
        value: 1
      },
      specularMap: {
        value: null
      },
      glossinessMap: {
        value: null
      }
    };
    this._extraUniforms = uniforms;

    this.onBeforeCompile = function (shader) {
      for (var uniformName in uniforms) {
        shader.uniforms[uniformName] = uniforms[uniformName];
      }

      shader.fragmentShader = shader.fragmentShader.replace('uniform float roughness;', 'uniform vec3 specular;').replace('uniform float metalness;', 'uniform float glossiness;').replace('#include <roughnessmap_pars_fragment>', specularMapParsFragmentChunk).replace('#include <metalnessmap_pars_fragment>', glossinessMapParsFragmentChunk).replace('#include <roughnessmap_fragment>', specularMapFragmentChunk).replace('#include <metalnessmap_fragment>', glossinessMapFragmentChunk).replace('#include <lights_physical_fragment>', lightPhysicalFragmentChunk);
    };

    Object.defineProperties(this, {
      specular: {
        get: function () {
          return uniforms.specular.value;
        },
        set: function (v) {
          uniforms.specular.value = v;
        }
      },
      specularMap: {
        get: function () {
          return uniforms.specularMap.value;
        },
        set: function (v) {
          uniforms.specularMap.value = v;

          if (v) {
            this.defines.USE_SPECULARMAP = ''; // USE_UV is set by the renderer for specular maps
          } else {
            delete this.defines.USE_SPECULARMAP;
          }
        }
      },
      glossiness: {
        get: function () {
          return uniforms.glossiness.value;
        },
        set: function (v) {
          uniforms.glossiness.value = v;
        }
      },
      glossinessMap: {
        get: function () {
          return uniforms.glossinessMap.value;
        },
        set: function (v) {
          uniforms.glossinessMap.value = v;

          if (v) {
            this.defines.USE_GLOSSINESSMAP = '';
            this.defines.USE_UV = '';
          } else {
            delete this.defines.USE_GLOSSINESSMAP;
            delete this.defines.USE_UV;
          }
        }
      }
    });
    delete this.metalness;
    delete this.roughness;
    delete this.metalnessMap;
    delete this.roughnessMap;
    this.setValues(params);
  }

  GLTFMeshStandardSGMaterial.prototype = Object.create(three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial.prototype);
  GLTFMeshStandardSGMaterial.prototype.constructor = GLTFMeshStandardSGMaterial;

  GLTFMeshStandardSGMaterial.prototype.copy = function (source) {
    three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial.prototype.copy.call(this, source);
    this.specularMap = source.specularMap;
    this.specular.copy(source.specular);
    this.glossinessMap = source.glossinessMap;
    this.glossiness = source.glossiness;
    delete this.metalness;
    delete this.roughness;
    delete this.metalnessMap;
    delete this.roughnessMap;
    return this;
  };

  function GLTFMaterialsPbrSpecularGlossinessExtension() {
    return {
      name: EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
      specularGlossinessParams: ['color', 'map', 'lightMap', 'lightMapIntensity', 'aoMap', 'aoMapIntensity', 'emissive', 'emissiveIntensity', 'emissiveMap', 'bumpMap', 'bumpScale', 'normalMap', 'normalMapType', 'displacementMap', 'displacementScale', 'displacementBias', 'specularMap', 'specular', 'glossinessMap', 'glossiness', 'alphaMap', 'envMap', 'envMapIntensity', 'refractionRatio'],
      getMaterialType: function () {
        return GLTFMeshStandardSGMaterial;
      },
      extendParams: function (materialParams, materialDef, parser) {
        var pbrSpecularGlossiness = materialDef.extensions[this.name];
        materialParams.color = new three__WEBPACK_IMPORTED_MODULE_0__.Color(1.0, 1.0, 1.0);
        materialParams.opacity = 1.0;
        var pending = [];

        if (Array.isArray(pbrSpecularGlossiness.diffuseFactor)) {
          var array = pbrSpecularGlossiness.diffuseFactor;
          materialParams.color.fromArray(array);
          materialParams.opacity = array[3];
        }

        if (pbrSpecularGlossiness.diffuseTexture !== undefined) {
          pending.push(parser.assignTexture(materialParams, 'map', pbrSpecularGlossiness.diffuseTexture));
        }

        materialParams.emissive = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0.0, 0.0, 0.0);
        materialParams.glossiness = pbrSpecularGlossiness.glossinessFactor !== undefined ? pbrSpecularGlossiness.glossinessFactor : 1.0;
        materialParams.specular = new three__WEBPACK_IMPORTED_MODULE_0__.Color(1.0, 1.0, 1.0);

        if (Array.isArray(pbrSpecularGlossiness.specularFactor)) {
          materialParams.specular.fromArray(pbrSpecularGlossiness.specularFactor);
        }

        if (pbrSpecularGlossiness.specularGlossinessTexture !== undefined) {
          var specGlossMapDef = pbrSpecularGlossiness.specularGlossinessTexture;
          pending.push(parser.assignTexture(materialParams, 'glossinessMap', specGlossMapDef));
          pending.push(parser.assignTexture(materialParams, 'specularMap', specGlossMapDef));
        }

        return Promise.all(pending);
      },
      createMaterial: function (materialParams) {
        var material = new GLTFMeshStandardSGMaterial(materialParams);
        material.fog = true;
        material.color = materialParams.color;
        material.map = materialParams.map === undefined ? null : materialParams.map;
        material.lightMap = null;
        material.lightMapIntensity = 1.0;
        material.aoMap = materialParams.aoMap === undefined ? null : materialParams.aoMap;
        material.aoMapIntensity = 1.0;
        material.emissive = materialParams.emissive;
        material.emissiveIntensity = 1.0;
        material.emissiveMap = materialParams.emissiveMap === undefined ? null : materialParams.emissiveMap;
        material.bumpMap = materialParams.bumpMap === undefined ? null : materialParams.bumpMap;
        material.bumpScale = 1;
        material.normalMap = materialParams.normalMap === undefined ? null : materialParams.normalMap;
        material.normalMapType = three__WEBPACK_IMPORTED_MODULE_0__.TangentSpaceNormalMap;
        if (materialParams.normalScale) material.normalScale = materialParams.normalScale;
        material.displacementMap = null;
        material.displacementScale = 1;
        material.displacementBias = 0;
        material.specularMap = materialParams.specularMap === undefined ? null : materialParams.specularMap;
        material.specular = materialParams.specular;
        material.glossinessMap = materialParams.glossinessMap === undefined ? null : materialParams.glossinessMap;
        material.glossiness = materialParams.glossiness;
        material.alphaMap = null;
        material.envMap = materialParams.envMap === undefined ? null : materialParams.envMap;
        material.envMapIntensity = 1.0;
        material.refractionRatio = 0.98;
        return material;
      }
    };
  }
  /**
   * Mesh Quantization Extension
   *
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization
   */


  function GLTFMeshQuantizationExtension() {
    this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;
  }
  /*********************************/

  /********** INTERPOLATION ********/

  /*********************************/
  // Spline Interpolation
  // Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#appendix-c-spline-interpolation


  function GLTFCubicSplineInterpolant(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    three__WEBPACK_IMPORTED_MODULE_0__.Interpolant.call(this, parameterPositions, sampleValues, sampleSize, resultBuffer);
  }

  GLTFCubicSplineInterpolant.prototype = Object.create(three__WEBPACK_IMPORTED_MODULE_0__.Interpolant.prototype);
  GLTFCubicSplineInterpolant.prototype.constructor = GLTFCubicSplineInterpolant;

  GLTFCubicSplineInterpolant.prototype.copySampleValue_ = function (index) {
    // Copies a sample value to the result buffer. See description of glTF
    // CUBICSPLINE values layout in interpolate_() function below.
    var result = this.resultBuffer,
        values = this.sampleValues,
        valueSize = this.valueSize,
        offset = index * valueSize * 3 + valueSize;

    for (var i = 0; i !== valueSize; i++) {
      result[i] = values[offset + i];
    }

    return result;
  };

  GLTFCubicSplineInterpolant.prototype.beforeStart_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_;
  GLTFCubicSplineInterpolant.prototype.afterEnd_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_;

  GLTFCubicSplineInterpolant.prototype.interpolate_ = function (i1, t0, t, t1) {
    var result = this.resultBuffer;
    var values = this.sampleValues;
    var stride = this.valueSize;
    var stride2 = stride * 2;
    var stride3 = stride * 3;
    var td = t1 - t0;
    var p = (t - t0) / td;
    var pp = p * p;
    var ppp = pp * p;
    var offset1 = i1 * stride3;
    var offset0 = offset1 - stride3;
    var s2 = -2 * ppp + 3 * pp;
    var s3 = ppp - pp;
    var s0 = 1 - s2;
    var s1 = s3 - pp + p; // Layout of keyframe output values for CUBICSPLINE animations:
    //   [ inTangent_1, splineVertex_1, outTangent_1, inTangent_2, splineVertex_2, ... ]

    for (var i = 0; i !== stride; i++) {
      var p0 = values[offset0 + i + stride]; // splineVertex_k

      var m0 = values[offset0 + i + stride2] * td; // outTangent_k * (t_k+1 - t_k)

      var p1 = values[offset1 + i + stride]; // splineVertex_k+1

      var m1 = values[offset1 + i] * td; // inTangent_k+1 * (t_k+1 - t_k)

      result[i] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;
    }

    return result;
  };
  /*********************************/

  /********** INTERNALS ************/

  /*********************************/

  /* CONSTANTS */


  var WEBGL_CONSTANTS = {
    FLOAT: 5126,
    //FLOAT_MAT2: 35674,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123
  };
  var WEBGL_COMPONENT_TYPES = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
  };
  var WEBGL_FILTERS = {
    9728: three__WEBPACK_IMPORTED_MODULE_0__.NearestFilter,
    9729: three__WEBPACK_IMPORTED_MODULE_0__.LinearFilter,
    9984: three__WEBPACK_IMPORTED_MODULE_0__.NearestMipmapNearestFilter,
    9985: three__WEBPACK_IMPORTED_MODULE_0__.LinearMipmapNearestFilter,
    9986: three__WEBPACK_IMPORTED_MODULE_0__.NearestMipmapLinearFilter,
    9987: three__WEBPACK_IMPORTED_MODULE_0__.LinearMipmapLinearFilter
  };
  var WEBGL_WRAPPINGS = {
    33071: three__WEBPACK_IMPORTED_MODULE_0__.ClampToEdgeWrapping,
    33648: three__WEBPACK_IMPORTED_MODULE_0__.MirroredRepeatWrapping,
    10497: three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping
  };
  var WEBGL_TYPE_SIZES = {
    'SCALAR': 1,
    'VEC2': 2,
    'VEC3': 3,
    'VEC4': 4,
    'MAT2': 4,
    'MAT3': 9,
    'MAT4': 16
  };
  var ATTRIBUTES = {
    POSITION: 'position',
    NORMAL: 'normal',
    TANGENT: 'tangent',
    TEXCOORD_0: 'uv',
    TEXCOORD_1: 'uv2',
    COLOR_0: 'color',
    WEIGHTS_0: 'skinWeight',
    JOINTS_0: 'skinIndex'
  };
  var PATH_PROPERTIES = {
    scale: 'scale',
    translation: 'position',
    rotation: 'quaternion',
    weights: 'morphTargetInfluences'
  };
  var INTERPOLATION = {
    CUBICSPLINE: undefined,
    // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
    // keyframe track will be initialized with a default interpolation type, then modified.
    LINEAR: three__WEBPACK_IMPORTED_MODULE_0__.InterpolateLinear,
    STEP: three__WEBPACK_IMPORTED_MODULE_0__.InterpolateDiscrete
  };
  var ALPHA_MODES = {
    OPAQUE: 'OPAQUE',
    MASK: 'MASK',
    BLEND: 'BLEND'
  };
  /* UTILITY FUNCTIONS */

  function resolveURL(url, path) {
    // Invalid URL
    if (typeof url !== 'string' || url === '') return ''; // Host Relative URL

    if (/^https?:\/\//i.test(path) && /^\//.test(url)) {
      path = path.replace(/(^https?:\/\/[^\/]+).*/i, '$1');
    } // Absolute URL http://,https://,//


    if (/^(https?:)?\/\//i.test(url)) return url; // Data URI

    if (/^data:.*,.*$/i.test(url)) return url; // Blob URL

    if (/^blob:.*$/i.test(url)) return url; // Relative URL

    return path + url;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#default-material
   */


  function createDefaultMaterial(cache) {
    if (cache['DefaultMaterial'] === undefined) {
      cache['DefaultMaterial'] = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({
        color: 0xFFFFFF,
        emissive: 0x000000,
        metalness: 1,
        roughness: 1,
        transparent: false,
        depthTest: true,
        side: three__WEBPACK_IMPORTED_MODULE_0__.FrontSide
      });
    }

    return cache['DefaultMaterial'];
  }

  function addUnknownExtensionsToUserData(knownExtensions, object, objectDef) {
    // Add unknown glTF extensions to an object's userData.
    for (var name in objectDef.extensions) {
      if (knownExtensions[name] === undefined) {
        object.userData.gltfExtensions = object.userData.gltfExtensions || {};
        object.userData.gltfExtensions[name] = objectDef.extensions[name];
      }
    }
  }
  /**
   * @param {Object3D|Material|BufferGeometry} object
   * @param {GLTF.definition} gltfDef
   */


  function assignExtrasToUserData(object, gltfDef) {
    if (gltfDef.extras !== undefined) {
      if (typeof gltfDef.extras === 'object') {
        Object.assign(object.userData, gltfDef.extras);
      } else {
        console.warn('THREE.GLTFLoader: Ignoring primitive type .extras, ' + gltfDef.extras);
      }
    }
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#morph-targets
   *
   * @param {BufferGeometry} geometry
   * @param {Array<GLTF.Target>} targets
   * @param {GLTFParser} parser
   * @return {Promise<BufferGeometry>}
   */


  function addMorphTargets(geometry, targets, parser) {
    var hasMorphPosition = false;
    var hasMorphNormal = false;

    for (var i = 0, il = targets.length; i < il; i++) {
      var target = targets[i];
      if (target.POSITION !== undefined) hasMorphPosition = true;
      if (target.NORMAL !== undefined) hasMorphNormal = true;
      if (hasMorphPosition && hasMorphNormal) break;
    }

    if (!hasMorphPosition && !hasMorphNormal) return Promise.resolve(geometry);
    var pendingPositionAccessors = [];
    var pendingNormalAccessors = [];

    for (var i = 0, il = targets.length; i < il; i++) {
      var target = targets[i];

      if (hasMorphPosition) {
        var pendingAccessor = target.POSITION !== undefined ? parser.getDependency('accessor', target.POSITION) : geometry.attributes.position;
        pendingPositionAccessors.push(pendingAccessor);
      }

      if (hasMorphNormal) {
        var pendingAccessor = target.NORMAL !== undefined ? parser.getDependency('accessor', target.NORMAL) : geometry.attributes.normal;
        pendingNormalAccessors.push(pendingAccessor);
      }
    }

    return Promise.all([Promise.all(pendingPositionAccessors), Promise.all(pendingNormalAccessors)]).then(function (accessors) {
      var morphPositions = accessors[0];
      var morphNormals = accessors[1];
      if (hasMorphPosition) geometry.morphAttributes.position = morphPositions;
      if (hasMorphNormal) geometry.morphAttributes.normal = morphNormals;
      geometry.morphTargetsRelative = true;
      return geometry;
    });
  }
  /**
   * @param {Mesh} mesh
   * @param {GLTF.Mesh} meshDef
   */


  function updateMorphTargets(mesh, meshDef) {
    mesh.updateMorphTargets();

    if (meshDef.weights !== undefined) {
      for (var i = 0, il = meshDef.weights.length; i < il; i++) {
        mesh.morphTargetInfluences[i] = meshDef.weights[i];
      }
    } // .extras has user-defined data, so check that .extras.targetNames is an array.


    if (meshDef.extras && Array.isArray(meshDef.extras.targetNames)) {
      var targetNames = meshDef.extras.targetNames;

      if (mesh.morphTargetInfluences.length === targetNames.length) {
        mesh.morphTargetDictionary = {};

        for (var i = 0, il = targetNames.length; i < il; i++) {
          mesh.morphTargetDictionary[targetNames[i]] = i;
        }
      } else {
        console.warn('THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.');
      }
    }
  }

  function createPrimitiveKey(primitiveDef) {
    var dracoExtension = primitiveDef.extensions && primitiveDef.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION];
    var geometryKey;

    if (dracoExtension) {
      geometryKey = 'draco:' + dracoExtension.bufferView + ':' + dracoExtension.indices + ':' + createAttributesKey(dracoExtension.attributes);
    } else {
      geometryKey = primitiveDef.indices + ':' + createAttributesKey(primitiveDef.attributes) + ':' + primitiveDef.mode;
    }

    return geometryKey;
  }

  function createAttributesKey(attributes) {
    var attributesKey = '';
    var keys = Object.keys(attributes).sort();

    for (var i = 0, il = keys.length; i < il; i++) {
      attributesKey += keys[i] + ':' + attributes[keys[i]] + ';';
    }

    return attributesKey;
  }
  /* GLTF PARSER */


  function GLTFParser(json, options) {
    this.json = json || {};
    this.extensions = {};
    this.plugins = {};
    this.options = options || {}; // loader object cache

    this.cache = new GLTFRegistry(); // associations between Three.js objects and glTF elements

    this.associations = new Map(); // BufferGeometry caching

    this.primitiveCache = {}; // Object3D instance caches

    this.meshCache = {
      refs: {},
      uses: {}
    };
    this.cameraCache = {
      refs: {},
      uses: {}
    };
    this.lightCache = {
      refs: {},
      uses: {}
    }; // Track node names, to ensure no duplicates

    this.nodeNamesUsed = {}; // Use an ImageBitmapLoader if imageBitmaps are supported. Moves much of the
    // expensive work of uploading a texture to the GPU off the main thread.

    if (typeof createImageBitmap !== 'undefined' && /Firefox/.test(navigator.userAgent) === false) {
      this.textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.ImageBitmapLoader(this.options.manager);
    } else {
      this.textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader(this.options.manager);
    }

    this.textureLoader.setCrossOrigin(this.options.crossOrigin);
    this.textureLoader.setRequestHeader(this.options.requestHeader);
    this.fileLoader = new three__WEBPACK_IMPORTED_MODULE_0__.FileLoader(this.options.manager);
    this.fileLoader.setResponseType('arraybuffer');

    if (this.options.crossOrigin === 'use-credentials') {
      this.fileLoader.setWithCredentials(true);
    }
  }

  GLTFParser.prototype.setExtensions = function (extensions) {
    this.extensions = extensions;
  };

  GLTFParser.prototype.setPlugins = function (plugins) {
    this.plugins = plugins;
  };

  GLTFParser.prototype.parse = function (onLoad, onError) {
    var parser = this;
    var json = this.json;
    var extensions = this.extensions; // Clear the loader cache

    this.cache.removeAll(); // Mark the special nodes/meshes in json for efficient parse

    this._invokeAll(function (ext) {
      return ext._markDefs && ext._markDefs();
    });

    Promise.all(this._invokeAll(function (ext) {
      return ext.beforeRoot && ext.beforeRoot();
    })).then(function () {
      return Promise.all([parser.getDependencies('scene'), parser.getDependencies('animation'), parser.getDependencies('camera')]);
    }).then(function (dependencies) {
      var result = {
        scene: dependencies[0][json.scene || 0],
        scenes: dependencies[0],
        animations: dependencies[1],
        cameras: dependencies[2],
        asset: json.asset,
        parser: parser,
        userData: {}
      };
      addUnknownExtensionsToUserData(extensions, result, json);
      assignExtrasToUserData(result, json);
      Promise.all(parser._invokeAll(function (ext) {
        return ext.afterRoot && ext.afterRoot(result);
      })).then(function () {
        onLoad(result);
      });
    }).catch(onError);
  };
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */


  GLTFParser.prototype._markDefs = function () {
    var nodeDefs = this.json.nodes || [];
    var skinDefs = this.json.skins || [];
    var meshDefs = this.json.meshes || []; // Nothing in the node definition indicates whether it is a Bone or an
    // Object3D. Use the skins' joint references to mark bones.

    for (var skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex++) {
      var joints = skinDefs[skinIndex].joints;

      for (var i = 0, il = joints.length; i < il; i++) {
        nodeDefs[joints[i]].isBone = true;
      }
    } // Iterate over all nodes, marking references to shared resources,
    // as well as skeleton joints.


    for (var nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {
      var nodeDef = nodeDefs[nodeIndex];

      if (nodeDef.mesh !== undefined) {
        this._addNodeRef(this.meshCache, nodeDef.mesh); // Nothing in the mesh definition indicates whether it is
        // a SkinnedMesh or Mesh. Use the node's mesh reference
        // to mark SkinnedMesh if node has skin.


        if (nodeDef.skin !== undefined) {
          meshDefs[nodeDef.mesh].isSkinnedMesh = true;
        }
      }

      if (nodeDef.camera !== undefined) {
        this._addNodeRef(this.cameraCache, nodeDef.camera);
      }
    }
  };
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */


  GLTFParser.prototype._addNodeRef = function (cache, index) {
    if (index === undefined) return;

    if (cache.refs[index] === undefined) {
      cache.refs[index] = cache.uses[index] = 0;
    }

    cache.refs[index]++;
  };
  /** Returns a reference to a shared resource, cloning it if necessary. */


  GLTFParser.prototype._getNodeRef = function (cache, index, object) {
    if (cache.refs[index] <= 1) return object;
    var ref = object.clone();
    ref.name += '_instance_' + cache.uses[index]++;
    return ref;
  };

  GLTFParser.prototype._invokeOne = function (func) {
    var extensions = Object.values(this.plugins);
    extensions.push(this);

    for (var i = 0; i < extensions.length; i++) {
      var result = func(extensions[i]);
      if (result) return result;
    }
  };

  GLTFParser.prototype._invokeAll = function (func) {
    var extensions = Object.values(this.plugins);
    extensions.unshift(this);
    var pending = [];

    for (var i = 0; i < extensions.length; i++) {
      var result = func(extensions[i]);
      if (result) pending.push(result);
    }

    return pending;
  };
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */


  GLTFParser.prototype.getDependency = function (type, index) {
    var cacheKey = type + ':' + index;
    var dependency = this.cache.get(cacheKey);

    if (!dependency) {
      switch (type) {
        case 'scene':
          dependency = this.loadScene(index);
          break;

        case 'node':
          dependency = this.loadNode(index);
          break;

        case 'mesh':
          dependency = this._invokeOne(function (ext) {
            return ext.loadMesh && ext.loadMesh(index);
          });
          break;

        case 'accessor':
          dependency = this.loadAccessor(index);
          break;

        case 'bufferView':
          dependency = this._invokeOne(function (ext) {
            return ext.loadBufferView && ext.loadBufferView(index);
          });
          break;

        case 'buffer':
          dependency = this.loadBuffer(index);
          break;

        case 'material':
          dependency = this._invokeOne(function (ext) {
            return ext.loadMaterial && ext.loadMaterial(index);
          });
          break;

        case 'texture':
          dependency = this._invokeOne(function (ext) {
            return ext.loadTexture && ext.loadTexture(index);
          });
          break;

        case 'skin':
          dependency = this.loadSkin(index);
          break;

        case 'animation':
          dependency = this.loadAnimation(index);
          break;

        case 'camera':
          dependency = this.loadCamera(index);
          break;

        default:
          throw new Error('Unknown type: ' + type);
      }

      this.cache.add(cacheKey, dependency);
    }

    return dependency;
  };
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */


  GLTFParser.prototype.getDependencies = function (type) {
    var dependencies = this.cache.get(type);

    if (!dependencies) {
      var parser = this;
      var defs = this.json[type + (type === 'mesh' ? 'es' : 's')] || [];
      dependencies = Promise.all(defs.map(function (def, index) {
        return parser.getDependency(type, index);
      }));
      this.cache.add(type, dependencies);
    }

    return dependencies;
  };
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */


  GLTFParser.prototype.loadBuffer = function (bufferIndex) {
    var bufferDef = this.json.buffers[bufferIndex];
    var loader = this.fileLoader;

    if (bufferDef.type && bufferDef.type !== 'arraybuffer') {
      throw new Error('THREE.GLTFLoader: ' + bufferDef.type + ' buffer type is not supported.');
    } // If present, GLB container is required to be the first buffer.


    if (bufferDef.uri === undefined && bufferIndex === 0) {
      return Promise.resolve(this.extensions[EXTENSIONS.KHR_BINARY_GLTF].body);
    }

    var options = this.options;
    return new Promise(function (resolve, reject) {
      loader.load(resolveURL(bufferDef.uri, options.path), resolve, undefined, function () {
        reject(new Error('THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".'));
      });
    });
  };
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */


  GLTFParser.prototype.loadBufferView = function (bufferViewIndex) {
    var bufferViewDef = this.json.bufferViews[bufferViewIndex];
    return this.getDependency('buffer', bufferViewDef.buffer).then(function (buffer) {
      var byteLength = bufferViewDef.byteLength || 0;
      var byteOffset = bufferViewDef.byteOffset || 0;
      return buffer.slice(byteOffset, byteOffset + byteLength);
    });
  };
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */


  GLTFParser.prototype.loadAccessor = function (accessorIndex) {
    var parser = this;
    var json = this.json;
    var accessorDef = this.json.accessors[accessorIndex];

    if (accessorDef.bufferView === undefined && accessorDef.sparse === undefined) {
      // Ignore empty accessors, which may be used to declare runtime
      // information about attributes coming from another source (e.g. Draco
      // compression extension).
      return Promise.resolve(null);
    }

    var pendingBufferViews = [];

    if (accessorDef.bufferView !== undefined) {
      pendingBufferViews.push(this.getDependency('bufferView', accessorDef.bufferView));
    } else {
      pendingBufferViews.push(null);
    }

    if (accessorDef.sparse !== undefined) {
      pendingBufferViews.push(this.getDependency('bufferView', accessorDef.sparse.indices.bufferView));
      pendingBufferViews.push(this.getDependency('bufferView', accessorDef.sparse.values.bufferView));
    }

    return Promise.all(pendingBufferViews).then(function (bufferViews) {
      var bufferView = bufferViews[0];
      var itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
      var TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType]; // For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.

      var elementBytes = TypedArray.BYTES_PER_ELEMENT;
      var itemBytes = elementBytes * itemSize;
      var byteOffset = accessorDef.byteOffset || 0;
      var byteStride = accessorDef.bufferView !== undefined ? json.bufferViews[accessorDef.bufferView].byteStride : undefined;
      var normalized = accessorDef.normalized === true;
      var array, bufferAttribute; // The buffer is not interleaved if the stride is the item size in bytes.

      if (byteStride && byteStride !== itemBytes) {
        // Each "slice" of the buffer, as defined by 'count' elements of 'byteStride' bytes, gets its own InterleavedBuffer
        // This makes sure that IBA.count reflects accessor.count properly
        var ibSlice = Math.floor(byteOffset / byteStride);
        var ibCacheKey = 'InterleavedBuffer:' + accessorDef.bufferView + ':' + accessorDef.componentType + ':' + ibSlice + ':' + accessorDef.count;
        var ib = parser.cache.get(ibCacheKey);

        if (!ib) {
          array = new TypedArray(bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes); // Integer parameters to IB/IBA are in array elements, not bytes.

          ib = new three__WEBPACK_IMPORTED_MODULE_0__.InterleavedBuffer(array, byteStride / elementBytes);
          parser.cache.add(ibCacheKey, ib);
        }

        bufferAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.InterleavedBufferAttribute(ib, itemSize, byteOffset % byteStride / elementBytes, normalized);
      } else {
        if (bufferView === null) {
          array = new TypedArray(accessorDef.count * itemSize);
        } else {
          array = new TypedArray(bufferView, byteOffset, accessorDef.count * itemSize);
        }

        bufferAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(array, itemSize, normalized);
      } // https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#sparse-accessors


      if (accessorDef.sparse !== undefined) {
        var itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
        var TypedArrayIndices = WEBGL_COMPONENT_TYPES[accessorDef.sparse.indices.componentType];
        var byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
        var byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;
        var sparseIndices = new TypedArrayIndices(bufferViews[1], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices);
        var sparseValues = new TypedArray(bufferViews[2], byteOffsetValues, accessorDef.sparse.count * itemSize);

        if (bufferView !== null) {
          // Avoid modifying the original ArrayBuffer, if the bufferView wasn't initialized with zeroes.
          bufferAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized);
        }

        for (var i = 0, il = sparseIndices.length; i < il; i++) {
          var index = sparseIndices[i];
          bufferAttribute.setX(index, sparseValues[i * itemSize]);
          if (itemSize >= 2) bufferAttribute.setY(index, sparseValues[i * itemSize + 1]);
          if (itemSize >= 3) bufferAttribute.setZ(index, sparseValues[i * itemSize + 2]);
          if (itemSize >= 4) bufferAttribute.setW(index, sparseValues[i * itemSize + 3]);
          if (itemSize >= 5) throw new Error('THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.');
        }
      }

      return bufferAttribute;
    });
  };
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture>}
   */


  GLTFParser.prototype.loadTexture = function (textureIndex) {
    var json = this.json;
    var options = this.options;
    var textureDef = json.textures[textureIndex];
    var source = json.images[textureDef.source];
    var loader = this.textureLoader;

    if (source.uri) {
      var handler = options.manager.getHandler(source.uri);
      if (handler !== null) loader = handler;
    }

    return this.loadTextureImage(textureIndex, source, loader);
  };

  GLTFParser.prototype.loadTextureImage = function (textureIndex, source, loader) {
    var parser = this;
    var json = this.json;
    var options = this.options;
    var textureDef = json.textures[textureIndex];
    var URL = self.URL || self.webkitURL;
    var sourceURI = source.uri;
    var isObjectURL = false;
    var hasAlpha = true;
    if (source.mimeType === 'image/jpeg') hasAlpha = false;

    if (source.bufferView !== undefined) {
      // Load binary image data from bufferView, if provided.
      sourceURI = parser.getDependency('bufferView', source.bufferView).then(function (bufferView) {
        if (source.mimeType === 'image/png') {
          // Inspect the PNG 'IHDR' chunk to determine whether the image could have an
          // alpha channel. This check is conservative — the image could have an alpha
          // channel with all values == 1, and the indexed type (colorType == 3) only
          // sometimes contains alpha.
          //
          // https://en.wikipedia.org/wiki/Portable_Network_Graphics#File_header
          var colorType = new DataView(bufferView, 25, 1).getUint8(0, false);
          hasAlpha = colorType === 6 || colorType === 4 || colorType === 3;
        }

        isObjectURL = true;
        var blob = new Blob([bufferView], {
          type: source.mimeType
        });
        sourceURI = URL.createObjectURL(blob);
        return sourceURI;
      });
    } else if (source.uri === undefined) {
      throw new Error('THREE.GLTFLoader: Image ' + textureIndex + ' is missing URI and bufferView');
    }

    return Promise.resolve(sourceURI).then(function (sourceURI) {
      return new Promise(function (resolve, reject) {
        var onLoad = resolve;

        if (loader.isImageBitmapLoader === true) {
          onLoad = function (imageBitmap) {
            resolve(new three__WEBPACK_IMPORTED_MODULE_0__.CanvasTexture(imageBitmap));
          };
        }

        loader.load(resolveURL(sourceURI, options.path), onLoad, undefined, reject);
      });
    }).then(function (texture) {
      // Clean up resources and configure Texture.
      if (isObjectURL === true) {
        URL.revokeObjectURL(sourceURI);
      }

      texture.flipY = false;
      if (textureDef.name) texture.name = textureDef.name; // When there is definitely no alpha channel in the texture, set RGBFormat to save space.

      if (!hasAlpha) texture.format = three__WEBPACK_IMPORTED_MODULE_0__.RGBFormat;
      var samplers = json.samplers || {};
      var sampler = samplers[textureDef.sampler] || {};
      texture.magFilter = WEBGL_FILTERS[sampler.magFilter] || three__WEBPACK_IMPORTED_MODULE_0__.LinearFilter;
      texture.minFilter = WEBGL_FILTERS[sampler.minFilter] || three__WEBPACK_IMPORTED_MODULE_0__.LinearMipmapLinearFilter;
      texture.wrapS = WEBGL_WRAPPINGS[sampler.wrapS] || three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping;
      texture.wrapT = WEBGL_WRAPPINGS[sampler.wrapT] || three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping;
      parser.associations.set(texture, {
        type: 'textures',
        index: textureIndex
      });
      return texture;
    });
  };
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise}
   */


  GLTFParser.prototype.assignTexture = function (materialParams, mapName, mapDef) {
    var parser = this;
    return this.getDependency('texture', mapDef.index).then(function (texture) {
      // Materials sample aoMap from UV set 1 and other maps from UV set 0 - this can't be configured
      // However, we will copy UV set 0 to UV set 1 on demand for aoMap
      if (mapDef.texCoord !== undefined && mapDef.texCoord != 0 && !(mapName === 'aoMap' && mapDef.texCoord == 1)) {
        console.warn('THREE.GLTFLoader: Custom UV set ' + mapDef.texCoord + ' for texture ' + mapName + ' not yet supported.');
      }

      if (parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM]) {
        var transform = mapDef.extensions !== undefined ? mapDef.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM] : undefined;

        if (transform) {
          var gltfReference = parser.associations.get(texture);
          texture = parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM].extendTexture(texture, transform);
          parser.associations.set(texture, gltfReference);
        }
      }

      materialParams[mapName] = texture;
    });
  };
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */


  GLTFParser.prototype.assignFinalMaterial = function (mesh) {
    var geometry = mesh.geometry;
    var material = mesh.material;
    var useVertexTangents = geometry.attributes.tangent !== undefined;
    var useVertexColors = geometry.attributes.color !== undefined;
    var useFlatShading = geometry.attributes.normal === undefined;
    var useSkinning = mesh.isSkinnedMesh === true;
    var useMorphTargets = Object.keys(geometry.morphAttributes).length > 0;
    var useMorphNormals = useMorphTargets && geometry.morphAttributes.normal !== undefined;

    if (mesh.isPoints) {
      var cacheKey = 'PointsMaterial:' + material.uuid;
      var pointsMaterial = this.cache.get(cacheKey);

      if (!pointsMaterial) {
        pointsMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial();
        three__WEBPACK_IMPORTED_MODULE_0__.Material.prototype.copy.call(pointsMaterial, material);
        pointsMaterial.color.copy(material.color);
        pointsMaterial.map = material.map;
        pointsMaterial.sizeAttenuation = false; // glTF spec says points should be 1px

        this.cache.add(cacheKey, pointsMaterial);
      }

      material = pointsMaterial;
    } else if (mesh.isLine) {
      var cacheKey = 'LineBasicMaterial:' + material.uuid;
      var lineMaterial = this.cache.get(cacheKey);

      if (!lineMaterial) {
        lineMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial();
        three__WEBPACK_IMPORTED_MODULE_0__.Material.prototype.copy.call(lineMaterial, material);
        lineMaterial.color.copy(material.color);
        this.cache.add(cacheKey, lineMaterial);
      }

      material = lineMaterial;
    } // Clone the material if it will be modified


    if (useVertexTangents || useVertexColors || useFlatShading || useSkinning || useMorphTargets) {
      var cacheKey = 'ClonedMaterial:' + material.uuid + ':';
      if (material.isGLTFSpecularGlossinessMaterial) cacheKey += 'specular-glossiness:';
      if (useSkinning) cacheKey += 'skinning:';
      if (useVertexTangents) cacheKey += 'vertex-tangents:';
      if (useVertexColors) cacheKey += 'vertex-colors:';
      if (useFlatShading) cacheKey += 'flat-shading:';
      if (useMorphTargets) cacheKey += 'morph-targets:';
      if (useMorphNormals) cacheKey += 'morph-normals:';
      var cachedMaterial = this.cache.get(cacheKey);

      if (!cachedMaterial) {
        cachedMaterial = material.clone();
        if (useSkinning) cachedMaterial.skinning = true;
        if (useVertexColors) cachedMaterial.vertexColors = true;
        if (useFlatShading) cachedMaterial.flatShading = true;
        if (useMorphTargets) cachedMaterial.morphTargets = true;
        if (useMorphNormals) cachedMaterial.morphNormals = true;

        if (useVertexTangents) {
          cachedMaterial.vertexTangents = true; // https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995

          if (cachedMaterial.normalScale) cachedMaterial.normalScale.y *= -1;
          if (cachedMaterial.clearcoatNormalScale) cachedMaterial.clearcoatNormalScale.y *= -1;
        }

        this.cache.add(cacheKey, cachedMaterial);
        this.associations.set(cachedMaterial, this.associations.get(material));
      }

      material = cachedMaterial;
    } // workarounds for mesh and geometry


    if (material.aoMap && geometry.attributes.uv2 === undefined && geometry.attributes.uv !== undefined) {
      geometry.setAttribute('uv2', geometry.attributes.uv);
    }

    mesh.material = material;
  };

  GLTFParser.prototype.getMaterialType = function ()
  /* materialIndex */
  {
    return three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial;
  };
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */


  GLTFParser.prototype.loadMaterial = function (materialIndex) {
    var parser = this;
    var json = this.json;
    var extensions = this.extensions;
    var materialDef = json.materials[materialIndex];
    var materialType;
    var materialParams = {};
    var materialExtensions = materialDef.extensions || {};
    var pending = [];

    if (materialExtensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
      var sgExtension = extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
      materialType = sgExtension.getMaterialType();
      pending.push(sgExtension.extendParams(materialParams, materialDef, parser));
    } else if (materialExtensions[EXTENSIONS.KHR_MATERIALS_UNLIT]) {
      var kmuExtension = extensions[EXTENSIONS.KHR_MATERIALS_UNLIT];
      materialType = kmuExtension.getMaterialType();
      pending.push(kmuExtension.extendParams(materialParams, materialDef, parser));
    } else {
      // Specification:
      // https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material
      var metallicRoughness = materialDef.pbrMetallicRoughness || {};
      materialParams.color = new three__WEBPACK_IMPORTED_MODULE_0__.Color(1.0, 1.0, 1.0);
      materialParams.opacity = 1.0;

      if (Array.isArray(metallicRoughness.baseColorFactor)) {
        var array = metallicRoughness.baseColorFactor;
        materialParams.color.fromArray(array);
        materialParams.opacity = array[3];
      }

      if (metallicRoughness.baseColorTexture !== undefined) {
        pending.push(parser.assignTexture(materialParams, 'map', metallicRoughness.baseColorTexture));
      }

      materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1.0;
      materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1.0;

      if (metallicRoughness.metallicRoughnessTexture !== undefined) {
        pending.push(parser.assignTexture(materialParams, 'metalnessMap', metallicRoughness.metallicRoughnessTexture));
        pending.push(parser.assignTexture(materialParams, 'roughnessMap', metallicRoughness.metallicRoughnessTexture));
      }

      materialType = this._invokeOne(function (ext) {
        return ext.getMaterialType && ext.getMaterialType(materialIndex);
      });
      pending.push(Promise.all(this._invokeAll(function (ext) {
        return ext.extendMaterialParams && ext.extendMaterialParams(materialIndex, materialParams);
      })));
    }

    if (materialDef.doubleSided === true) {
      materialParams.side = three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide;
    }

    var alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;

    if (alphaMode === ALPHA_MODES.BLEND) {
      materialParams.transparent = true; // See: https://github.com/mrdoob/three.js/issues/17706

      materialParams.depthWrite = false;
    } else {
      materialParams.transparent = false;

      if (alphaMode === ALPHA_MODES.MASK) {
        materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;
      }
    }

    if (materialDef.normalTexture !== undefined && materialType !== three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial) {
      pending.push(parser.assignTexture(materialParams, 'normalMap', materialDef.normalTexture)); // https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995

      materialParams.normalScale = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(1, -1);

      if (materialDef.normalTexture.scale !== undefined) {
        materialParams.normalScale.set(materialDef.normalTexture.scale, -materialDef.normalTexture.scale);
      }
    }

    if (materialDef.occlusionTexture !== undefined && materialType !== three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial) {
      pending.push(parser.assignTexture(materialParams, 'aoMap', materialDef.occlusionTexture));

      if (materialDef.occlusionTexture.strength !== undefined) {
        materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;
      }
    }

    if (materialDef.emissiveFactor !== undefined && materialType !== three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial) {
      materialParams.emissive = new three__WEBPACK_IMPORTED_MODULE_0__.Color().fromArray(materialDef.emissiveFactor);
    }

    if (materialDef.emissiveTexture !== undefined && materialType !== three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial) {
      pending.push(parser.assignTexture(materialParams, 'emissiveMap', materialDef.emissiveTexture));
    }

    return Promise.all(pending).then(function () {
      var material;

      if (materialType === GLTFMeshStandardSGMaterial) {
        material = extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(materialParams);
      } else {
        material = new materialType(materialParams);
      }

      if (materialDef.name) material.name = materialDef.name; // baseColorTexture, emissiveTexture, and specularGlossinessTexture use sRGB encoding.

      if (material.map) material.map.encoding = three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding;
      if (material.emissiveMap) material.emissiveMap.encoding = three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding;
      assignExtrasToUserData(material, materialDef);
      parser.associations.set(material, {
        type: 'materials',
        index: materialIndex
      });
      if (materialDef.extensions) addUnknownExtensionsToUserData(extensions, material, materialDef);
      return material;
    });
  };
  /** When Object3D instances are targeted by animation, they need unique names. */


  GLTFParser.prototype.createUniqueName = function (originalName) {
    var sanitizedName = three__WEBPACK_IMPORTED_MODULE_0__.PropertyBinding.sanitizeNodeName(originalName || '');
    var name = sanitizedName;

    for (var i = 1; this.nodeNamesUsed[name]; ++i) {
      name = sanitizedName + '_' + i;
    }

    this.nodeNamesUsed[name] = true;
    return name;
  };
  /**
   * @param {BufferGeometry} geometry
   * @param {GLTF.Primitive} primitiveDef
   * @param {GLTFParser} parser
   */


  function computeBounds(geometry, primitiveDef, parser) {
    var attributes = primitiveDef.attributes;
    var box = new three__WEBPACK_IMPORTED_MODULE_0__.Box3();

    if (attributes.POSITION !== undefined) {
      var accessor = parser.json.accessors[attributes.POSITION];
      var min = accessor.min;
      var max = accessor.max; // glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

      if (min !== undefined && max !== undefined) {
        box.set(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(min[0], min[1], min[2]), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(max[0], max[1], max[2]));
      } else {
        console.warn('THREE.GLTFLoader: Missing min/max properties for accessor POSITION.');
        return;
      }
    } else {
      return;
    }

    var targets = primitiveDef.targets;

    if (targets !== undefined) {
      var maxDisplacement = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
      var vector = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

      for (var i = 0, il = targets.length; i < il; i++) {
        var target = targets[i];

        if (target.POSITION !== undefined) {
          var accessor = parser.json.accessors[target.POSITION];
          var min = accessor.min;
          var max = accessor.max; // glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

          if (min !== undefined && max !== undefined) {
            // we need to get max of absolute components because target weight is [-1,1]
            vector.setX(Math.max(Math.abs(min[0]), Math.abs(max[0])));
            vector.setY(Math.max(Math.abs(min[1]), Math.abs(max[1])));
            vector.setZ(Math.max(Math.abs(min[2]), Math.abs(max[2]))); // Note: this assumes that the sum of all weights is at most 1. This isn't quite correct - it's more conservative
            // to assume that each target can have a max weight of 1. However, for some use cases - notably, when morph targets
            // are used to implement key-frame animations and as such only two are active at a time - this results in very large
            // boxes. So for now we make a box that's sometimes a touch too small but is hopefully mostly of reasonable size.

            maxDisplacement.max(vector);
          } else {
            console.warn('THREE.GLTFLoader: Missing min/max properties for accessor POSITION.');
          }
        }
      } // As per comment above this box isn't conservative, but has a reasonable size for a very large number of morph targets.


      box.expandByVector(maxDisplacement);
    }

    geometry.boundingBox = box;
    var sphere = new three__WEBPACK_IMPORTED_MODULE_0__.Sphere();
    box.getCenter(sphere.center);
    sphere.radius = box.min.distanceTo(box.max) / 2;
    geometry.boundingSphere = sphere;
  }
  /**
   * @param {BufferGeometry} geometry
   * @param {GLTF.Primitive} primitiveDef
   * @param {GLTFParser} parser
   * @return {Promise<BufferGeometry>}
   */


  function addPrimitiveAttributes(geometry, primitiveDef, parser) {
    var attributes = primitiveDef.attributes;
    var pending = [];

    function assignAttributeAccessor(accessorIndex, attributeName) {
      return parser.getDependency('accessor', accessorIndex).then(function (accessor) {
        geometry.setAttribute(attributeName, accessor);
      });
    }

    for (var gltfAttributeName in attributes) {
      var threeAttributeName = ATTRIBUTES[gltfAttributeName] || gltfAttributeName.toLowerCase(); // Skip attributes already provided by e.g. Draco extension.

      if (threeAttributeName in geometry.attributes) continue;
      pending.push(assignAttributeAccessor(attributes[gltfAttributeName], threeAttributeName));
    }

    if (primitiveDef.indices !== undefined && !geometry.index) {
      var accessor = parser.getDependency('accessor', primitiveDef.indices).then(function (accessor) {
        geometry.setIndex(accessor);
      });
      pending.push(accessor);
    }

    assignExtrasToUserData(geometry, primitiveDef);
    computeBounds(geometry, primitiveDef, parser);
    return Promise.all(pending).then(function () {
      return primitiveDef.targets !== undefined ? addMorphTargets(geometry, primitiveDef.targets, parser) : geometry;
    });
  }
  /**
   * @param {BufferGeometry} geometry
   * @param {Number} drawMode
   * @return {BufferGeometry}
   */


  function toTrianglesDrawMode(geometry, drawMode) {
    var index = geometry.getIndex(); // generate index if not present

    if (index === null) {
      var indices = [];
      var position = geometry.getAttribute('position');

      if (position !== undefined) {
        for (var i = 0; i < position.count; i++) {
          indices.push(i);
        }

        geometry.setIndex(indices);
        index = geometry.getIndex();
      } else {
        console.error('THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.');
        return geometry;
      }
    } //


    var numberOfTriangles = index.count - 2;
    var newIndices = [];

    if (drawMode === three__WEBPACK_IMPORTED_MODULE_0__.TriangleFanDrawMode) {
      // gl.TRIANGLE_FAN
      for (var i = 1; i <= numberOfTriangles; i++) {
        newIndices.push(index.getX(0));
        newIndices.push(index.getX(i));
        newIndices.push(index.getX(i + 1));
      }
    } else {
      // gl.TRIANGLE_STRIP
      for (var i = 0; i < numberOfTriangles; i++) {
        if (i % 2 === 0) {
          newIndices.push(index.getX(i));
          newIndices.push(index.getX(i + 1));
          newIndices.push(index.getX(i + 2));
        } else {
          newIndices.push(index.getX(i + 2));
          newIndices.push(index.getX(i + 1));
          newIndices.push(index.getX(i));
        }
      }
    }

    if (newIndices.length / 3 !== numberOfTriangles) {
      console.error('THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.');
    } // build final geometry


    var newGeometry = geometry.clone();
    newGeometry.setIndex(newIndices);
    return newGeometry;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */


  GLTFParser.prototype.loadGeometries = function (primitives) {
    var parser = this;
    var extensions = this.extensions;
    var cache = this.primitiveCache;

    function createDracoPrimitive(primitive) {
      return extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(primitive, parser).then(function (geometry) {
        return addPrimitiveAttributes(geometry, primitive, parser);
      });
    }

    var pending = [];

    for (var i = 0, il = primitives.length; i < il; i++) {
      var primitive = primitives[i];
      var cacheKey = createPrimitiveKey(primitive); // See if we've already created this geometry

      var cached = cache[cacheKey];

      if (cached) {
        // Use the cached geometry if it exists
        pending.push(cached.promise);
      } else {
        var geometryPromise;

        if (primitive.extensions && primitive.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION]) {
          // Use DRACO geometry if available
          geometryPromise = createDracoPrimitive(primitive);
        } else {
          // Otherwise create a new geometry
          geometryPromise = addPrimitiveAttributes(new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry(), primitive, parser);
        } // Cache this geometry


        cache[cacheKey] = {
          primitive: primitive,
          promise: geometryPromise
        };
        pending.push(geometryPromise);
      }
    }

    return Promise.all(pending);
  };
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */


  GLTFParser.prototype.loadMesh = function (meshIndex) {
    var parser = this;
    var json = this.json;
    var extensions = this.extensions;
    var meshDef = json.meshes[meshIndex];
    var primitives = meshDef.primitives;
    var pending = [];

    for (var i = 0, il = primitives.length; i < il; i++) {
      var material = primitives[i].material === undefined ? createDefaultMaterial(this.cache) : this.getDependency('material', primitives[i].material);
      pending.push(material);
    }

    pending.push(parser.loadGeometries(primitives));
    return Promise.all(pending).then(function (results) {
      var materials = results.slice(0, results.length - 1);
      var geometries = results[results.length - 1];
      var meshes = [];

      for (var i = 0, il = geometries.length; i < il; i++) {
        var geometry = geometries[i];
        var primitive = primitives[i]; // 1. create Mesh

        var mesh;
        var material = materials[i];

        if (primitive.mode === WEBGL_CONSTANTS.TRIANGLES || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN || primitive.mode === undefined) {
          // .isSkinnedMesh isn't in glTF spec. See ._markDefs()
          mesh = meshDef.isSkinnedMesh === true ? new three__WEBPACK_IMPORTED_MODULE_0__.SkinnedMesh(geometry, material) : new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);

          if (mesh.isSkinnedMesh === true && !mesh.geometry.attributes.skinWeight.normalized) {
            // we normalize floating point skin weight array to fix malformed assets (see #15319)
            // it's important to skip this for non-float32 data since normalizeSkinWeights assumes non-normalized inputs
            mesh.normalizeSkinWeights();
          }

          if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP) {
            mesh.geometry = toTrianglesDrawMode(mesh.geometry, three__WEBPACK_IMPORTED_MODULE_0__.TriangleStripDrawMode);
          } else if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN) {
            mesh.geometry = toTrianglesDrawMode(mesh.geometry, three__WEBPACK_IMPORTED_MODULE_0__.TriangleFanDrawMode);
          }
        } else if (primitive.mode === WEBGL_CONSTANTS.LINES) {
          mesh = new three__WEBPACK_IMPORTED_MODULE_0__.LineSegments(geometry, material);
        } else if (primitive.mode === WEBGL_CONSTANTS.LINE_STRIP) {
          mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Line(geometry, material);
        } else if (primitive.mode === WEBGL_CONSTANTS.LINE_LOOP) {
          mesh = new three__WEBPACK_IMPORTED_MODULE_0__.LineLoop(geometry, material);
        } else if (primitive.mode === WEBGL_CONSTANTS.POINTS) {
          mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Points(geometry, material);
        } else {
          throw new Error('THREE.GLTFLoader: Primitive mode unsupported: ' + primitive.mode);
        }

        if (Object.keys(mesh.geometry.morphAttributes).length > 0) {
          updateMorphTargets(mesh, meshDef);
        }

        mesh.name = parser.createUniqueName(meshDef.name || 'mesh_' + meshIndex);
        assignExtrasToUserData(mesh, meshDef);
        if (primitive.extensions) addUnknownExtensionsToUserData(extensions, mesh, primitive);
        parser.assignFinalMaterial(mesh);
        meshes.push(mesh);
      }

      if (meshes.length === 1) {
        return meshes[0];
      }

      var group = new three__WEBPACK_IMPORTED_MODULE_0__.Group();

      for (var i = 0, il = meshes.length; i < il; i++) {
        group.add(meshes[i]);
      }

      return group;
    });
  };
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */


  GLTFParser.prototype.loadCamera = function (cameraIndex) {
    var camera;
    var cameraDef = this.json.cameras[cameraIndex];
    var params = cameraDef[cameraDef.type];

    if (!params) {
      console.warn('THREE.GLTFLoader: Missing camera parameters.');
      return;
    }

    if (cameraDef.type === 'perspective') {
      camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.radToDeg(params.yfov), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6);
    } else if (cameraDef.type === 'orthographic') {
      camera = new three__WEBPACK_IMPORTED_MODULE_0__.OrthographicCamera(-params.xmag, params.xmag, params.ymag, -params.ymag, params.znear, params.zfar);
    }

    if (cameraDef.name) camera.name = this.createUniqueName(cameraDef.name);
    assignExtrasToUserData(camera, cameraDef);
    return Promise.resolve(camera);
  };
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Object>}
   */


  GLTFParser.prototype.loadSkin = function (skinIndex) {
    var skinDef = this.json.skins[skinIndex];
    var skinEntry = {
      joints: skinDef.joints
    };

    if (skinDef.inverseBindMatrices === undefined) {
      return Promise.resolve(skinEntry);
    }

    return this.getDependency('accessor', skinDef.inverseBindMatrices).then(function (accessor) {
      skinEntry.inverseBindMatrices = accessor;
      return skinEntry;
    });
  };
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */


  GLTFParser.prototype.loadAnimation = function (animationIndex) {
    var json = this.json;
    var animationDef = json.animations[animationIndex];
    var pendingNodes = [];
    var pendingInputAccessors = [];
    var pendingOutputAccessors = [];
    var pendingSamplers = [];
    var pendingTargets = [];

    for (var i = 0, il = animationDef.channels.length; i < il; i++) {
      var channel = animationDef.channels[i];
      var sampler = animationDef.samplers[channel.sampler];
      var target = channel.target;
      var name = target.node !== undefined ? target.node : target.id; // NOTE: target.id is deprecated.

      var input = animationDef.parameters !== undefined ? animationDef.parameters[sampler.input] : sampler.input;
      var output = animationDef.parameters !== undefined ? animationDef.parameters[sampler.output] : sampler.output;
      pendingNodes.push(this.getDependency('node', name));
      pendingInputAccessors.push(this.getDependency('accessor', input));
      pendingOutputAccessors.push(this.getDependency('accessor', output));
      pendingSamplers.push(sampler);
      pendingTargets.push(target);
    }

    return Promise.all([Promise.all(pendingNodes), Promise.all(pendingInputAccessors), Promise.all(pendingOutputAccessors), Promise.all(pendingSamplers), Promise.all(pendingTargets)]).then(function (dependencies) {
      var nodes = dependencies[0];
      var inputAccessors = dependencies[1];
      var outputAccessors = dependencies[2];
      var samplers = dependencies[3];
      var targets = dependencies[4];
      var tracks = [];

      for (var i = 0, il = nodes.length; i < il; i++) {
        var node = nodes[i];
        var inputAccessor = inputAccessors[i];
        var outputAccessor = outputAccessors[i];
        var sampler = samplers[i];
        var target = targets[i];
        if (node === undefined) continue;
        node.updateMatrix();
        node.matrixAutoUpdate = true;
        var TypedKeyframeTrack;

        switch (PATH_PROPERTIES[target.path]) {
          case PATH_PROPERTIES.weights:
            TypedKeyframeTrack = three__WEBPACK_IMPORTED_MODULE_0__.NumberKeyframeTrack;
            break;

          case PATH_PROPERTIES.rotation:
            TypedKeyframeTrack = three__WEBPACK_IMPORTED_MODULE_0__.QuaternionKeyframeTrack;
            break;

          case PATH_PROPERTIES.position:
          case PATH_PROPERTIES.scale:
          default:
            TypedKeyframeTrack = three__WEBPACK_IMPORTED_MODULE_0__.VectorKeyframeTrack;
            break;
        }

        var targetName = node.name ? node.name : node.uuid;
        var interpolation = sampler.interpolation !== undefined ? INTERPOLATION[sampler.interpolation] : three__WEBPACK_IMPORTED_MODULE_0__.InterpolateLinear;
        var targetNames = [];

        if (PATH_PROPERTIES[target.path] === PATH_PROPERTIES.weights) {
          // Node may be a Group (glTF mesh with several primitives) or a Mesh.
          node.traverse(function (object) {
            if (object.isMesh === true && object.morphTargetInfluences) {
              targetNames.push(object.name ? object.name : object.uuid);
            }
          });
        } else {
          targetNames.push(targetName);
        }

        var outputArray = outputAccessor.array;

        if (outputAccessor.normalized) {
          var scale;

          if (outputArray.constructor === Int8Array) {
            scale = 1 / 127;
          } else if (outputArray.constructor === Uint8Array) {
            scale = 1 / 255;
          } else if (outputArray.constructor == Int16Array) {
            scale = 1 / 32767;
          } else if (outputArray.constructor === Uint16Array) {
            scale = 1 / 65535;
          } else {
            throw new Error('THREE.GLTFLoader: Unsupported output accessor component type.');
          }

          var scaled = new Float32Array(outputArray.length);

          for (var j = 0, jl = outputArray.length; j < jl; j++) {
            scaled[j] = outputArray[j] * scale;
          }

          outputArray = scaled;
        }

        for (var j = 0, jl = targetNames.length; j < jl; j++) {
          var track = new TypedKeyframeTrack(targetNames[j] + '.' + PATH_PROPERTIES[target.path], inputAccessor.array, outputArray, interpolation); // Override interpolation with custom factory method.

          if (sampler.interpolation === 'CUBICSPLINE') {
            track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline(result) {
              // A CUBICSPLINE keyframe in glTF has three output values for each input value,
              // representing inTangent, splineVertex, and outTangent. As a result, track.getValueSize()
              // must be divided by three to get the interpolant's sampleSize argument.
              return new GLTFCubicSplineInterpolant(this.times, this.values, this.getValueSize() / 3, result);
            }; // Mark as CUBICSPLINE. `track.getInterpolation()` doesn't support custom interpolants.


            track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
          }

          tracks.push(track);
        }
      }

      var name = animationDef.name ? animationDef.name : 'animation_' + animationIndex;
      return new three__WEBPACK_IMPORTED_MODULE_0__.AnimationClip(name, undefined, tracks);
    });
  };
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */


  GLTFParser.prototype.loadNode = function (nodeIndex) {
    var json = this.json;
    var extensions = this.extensions;
    var parser = this;
    var nodeDef = json.nodes[nodeIndex]; // reserve node's name before its dependencies, so the root has the intended name.

    var nodeName = nodeDef.name ? parser.createUniqueName(nodeDef.name) : '';
    return function () {
      var pending = [];

      if (nodeDef.mesh !== undefined) {
        pending.push(parser.getDependency('mesh', nodeDef.mesh).then(function (mesh) {
          var node = parser._getNodeRef(parser.meshCache, nodeDef.mesh, mesh); // if weights are provided on the node, override weights on the mesh.


          if (nodeDef.weights !== undefined) {
            node.traverse(function (o) {
              if (!o.isMesh) return;

              for (var i = 0, il = nodeDef.weights.length; i < il; i++) {
                o.morphTargetInfluences[i] = nodeDef.weights[i];
              }
            });
          }

          return node;
        }));
      }

      if (nodeDef.camera !== undefined) {
        pending.push(parser.getDependency('camera', nodeDef.camera).then(function (camera) {
          return parser._getNodeRef(parser.cameraCache, nodeDef.camera, camera);
        }));
      }

      parser._invokeAll(function (ext) {
        return ext.createNodeAttachment && ext.createNodeAttachment(nodeIndex);
      }).forEach(function (promise) {
        pending.push(promise);
      });

      return Promise.all(pending);
    }().then(function (objects) {
      var node; // .isBone isn't in glTF spec. See ._markDefs

      if (nodeDef.isBone === true) {
        node = new three__WEBPACK_IMPORTED_MODULE_0__.Bone();
      } else if (objects.length > 1) {
        node = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
      } else if (objects.length === 1) {
        node = objects[0];
      } else {
        node = new three__WEBPACK_IMPORTED_MODULE_0__.Object3D();
      }

      if (node !== objects[0]) {
        for (var i = 0, il = objects.length; i < il; i++) {
          node.add(objects[i]);
        }
      }

      if (nodeDef.name) {
        node.userData.name = nodeDef.name;
        node.name = nodeName;
      }

      assignExtrasToUserData(node, nodeDef);
      if (nodeDef.extensions) addUnknownExtensionsToUserData(extensions, node, nodeDef);

      if (nodeDef.matrix !== undefined) {
        var matrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();
        matrix.fromArray(nodeDef.matrix);
        node.applyMatrix4(matrix);
      } else {
        if (nodeDef.translation !== undefined) {
          node.position.fromArray(nodeDef.translation);
        }

        if (nodeDef.rotation !== undefined) {
          node.quaternion.fromArray(nodeDef.rotation);
        }

        if (nodeDef.scale !== undefined) {
          node.scale.fromArray(nodeDef.scale);
        }
      }

      parser.associations.set(node, {
        type: 'nodes',
        index: nodeIndex
      });
      return node;
    });
  };
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */


  GLTFParser.prototype.loadScene = function () {
    // scene node hierachy builder
    function buildNodeHierachy(nodeId, parentObject, json, parser) {
      var nodeDef = json.nodes[nodeId];
      return parser.getDependency('node', nodeId).then(function (node) {
        if (nodeDef.skin === undefined) return node; // build skeleton here as well

        var skinEntry;
        return parser.getDependency('skin', nodeDef.skin).then(function (skin) {
          skinEntry = skin;
          var pendingJoints = [];

          for (var i = 0, il = skinEntry.joints.length; i < il; i++) {
            pendingJoints.push(parser.getDependency('node', skinEntry.joints[i]));
          }

          return Promise.all(pendingJoints);
        }).then(function (jointNodes) {
          node.traverse(function (mesh) {
            if (!mesh.isMesh) return;
            var bones = [];
            var boneInverses = [];

            for (var j = 0, jl = jointNodes.length; j < jl; j++) {
              var jointNode = jointNodes[j];

              if (jointNode) {
                bones.push(jointNode);
                var mat = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();

                if (skinEntry.inverseBindMatrices !== undefined) {
                  mat.fromArray(skinEntry.inverseBindMatrices.array, j * 16);
                }

                boneInverses.push(mat);
              } else {
                console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', skinEntry.joints[j]);
              }
            }

            mesh.bind(new three__WEBPACK_IMPORTED_MODULE_0__.Skeleton(bones, boneInverses), mesh.matrixWorld);
          });
          return node;
        });
      }).then(function (node) {
        // build node hierachy
        parentObject.add(node);
        var pending = [];

        if (nodeDef.children) {
          var children = nodeDef.children;

          for (var i = 0, il = children.length; i < il; i++) {
            var child = children[i];
            pending.push(buildNodeHierachy(child, node, json, parser));
          }
        }

        return Promise.all(pending);
      });
    }

    return function loadScene(sceneIndex) {
      var json = this.json;
      var extensions = this.extensions;
      var sceneDef = this.json.scenes[sceneIndex];
      var parser = this; // Loader returns Group, not Scene.
      // See: https://github.com/mrdoob/three.js/issues/18342#issuecomment-578981172

      var scene = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
      if (sceneDef.name) scene.name = parser.createUniqueName(sceneDef.name);
      assignExtrasToUserData(scene, sceneDef);
      if (sceneDef.extensions) addUnknownExtensionsToUserData(extensions, scene, sceneDef);
      var nodeIds = sceneDef.nodes || [];
      var pending = [];

      for (var i = 0, il = nodeIds.length; i < il; i++) {
        pending.push(buildNodeHierachy(nodeIds[i], scene, json, parser));
      }

      return Promise.all(pending).then(function () {
        return scene;
      });
    };
  }();

  return GLTFLoader;
}();



/***/ }),

/***/ "./components/Core-API/3dModelHandlers/utils.js":
/*!******************************************************!*\
  !*** ./components/Core-API/3dModelHandlers/utils.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BufferGeometryUtils": function() { return /* binding */ BufferGeometryUtils; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
// THIS FILE WAS NOT WRITTEN BY ME
// There was a problem with the inbuilt obj loaders so I rewrote parts of it, so it works in Nextjs and React 
// -- Harvey Randall 5/6/21

var BufferGeometryUtils = {
  computeTangents: function (geometry) {
    geometry.computeTangents();
    console.warn('THREE.BufferGeometryUtils: .computeTangents() has been removed. Use BufferGeometry.computeTangents() instead.');
  },

  /**
   * @param  {Array<BufferGeometry>} geometries
   * @param  {Boolean} useGroups
   * @return {BufferGeometry}
   */
  mergeBufferGeometries: function (geometries, useGroups) {
    var isIndexed = geometries[0].index !== null;
    var attributesUsed = new Set(Object.keys(geometries[0].attributes));
    var morphAttributesUsed = new Set(Object.keys(geometries[0].morphAttributes));
    var attributes = {};
    var morphAttributes = {};
    var morphTargetsRelative = geometries[0].morphTargetsRelative;
    var mergedGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
    var offset = 0;

    for (var i = 0; i < geometries.length; ++i) {
      var geometry = geometries[i];
      var attributesCount = 0; // ensure that all geometries are indexed, or none

      if (isIndexed !== (geometry.index !== null)) {
        console.error('THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.');
        return null;
      } // gather attributes, exit early if they're different


      for (var name in geometry.attributes) {
        if (!attributesUsed.has(name)) {
          console.error('THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. All geometries must have compatible attributes; make sure "' + name + '" attribute exists among all geometries, or in none of them.');
          return null;
        }

        if (attributes[name] === undefined) attributes[name] = [];
        attributes[name].push(geometry.attributes[name]);
        attributesCount++;
      } // ensure geometries have the same number of attributes


      if (attributesCount !== attributesUsed.size) {
        console.error('THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. Make sure all geometries have the same number of attributes.');
        return null;
      } // gather morph attributes, exit early if they're different


      if (morphTargetsRelative !== geometry.morphTargetsRelative) {
        console.error('THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. .morphTargetsRelative must be consistent throughout all geometries.');
        return null;
      }

      for (var name in geometry.morphAttributes) {
        if (!morphAttributesUsed.has(name)) {
          console.error('THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '.  .morphAttributes must be consistent throughout all geometries.');
          return null;
        }

        if (morphAttributes[name] === undefined) morphAttributes[name] = [];
        morphAttributes[name].push(geometry.morphAttributes[name]);
      } // gather .userData


      mergedGeometry.userData.mergedUserData = mergedGeometry.userData.mergedUserData || [];
      mergedGeometry.userData.mergedUserData.push(geometry.userData);

      if (useGroups) {
        var count;

        if (isIndexed) {
          count = geometry.index.count;
        } else if (geometry.attributes.position !== undefined) {
          count = geometry.attributes.position.count;
        } else {
          console.error('THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. The geometry must have either an index or a position attribute');
          return null;
        }

        mergedGeometry.addGroup(offset, count, i);
        offset += count;
      }
    } // merge indices


    if (isIndexed) {
      var indexOffset = 0;
      var mergedIndex = [];

      for (var i = 0; i < geometries.length; ++i) {
        var index = geometries[i].index;

        for (var j = 0; j < index.count; ++j) {
          mergedIndex.push(index.getX(j) + indexOffset);
        }

        indexOffset += geometries[i].attributes.position.count;
      }

      mergedGeometry.setIndex(mergedIndex);
    } // merge attributes


    for (var name in attributes) {
      var mergedAttribute = this.mergeBufferAttributes(attributes[name]);

      if (!mergedAttribute) {
        console.error('THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the ' + name + ' attribute.');
        return null;
      }

      mergedGeometry.setAttribute(name, mergedAttribute);
    } // merge morph attributes


    for (var name in morphAttributes) {
      var numMorphTargets = morphAttributes[name][0].length;
      if (numMorphTargets === 0) break;
      mergedGeometry.morphAttributes = mergedGeometry.morphAttributes || {};
      mergedGeometry.morphAttributes[name] = [];

      for (var i = 0; i < numMorphTargets; ++i) {
        var morphAttributesToMerge = [];

        for (var j = 0; j < morphAttributes[name].length; ++j) {
          morphAttributesToMerge.push(morphAttributes[name][j][i]);
        }

        var mergedMorphAttribute = this.mergeBufferAttributes(morphAttributesToMerge);

        if (!mergedMorphAttribute) {
          console.error('THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the ' + name + ' morphAttribute.');
          return null;
        }

        mergedGeometry.morphAttributes[name].push(mergedMorphAttribute);
      }
    }

    return mergedGeometry;
  },

  /**
   * @param {Array<BufferAttribute>} attributes
   * @return {BufferAttribute}
   */
  mergeBufferAttributes: function (attributes) {
    var TypedArray;
    var itemSize;
    var normalized;
    var arrayLength = 0;

    for (var i = 0; i < attributes.length; ++i) {
      var attribute = attributes[i];

      if (attribute.isInterleavedBufferAttribute) {
        console.error('THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported.');
        return null;
      }

      if (TypedArray === undefined) TypedArray = attribute.array.constructor;

      if (TypedArray !== attribute.array.constructor) {
        console.error('THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.');
        return null;
      }

      if (itemSize === undefined) itemSize = attribute.itemSize;

      if (itemSize !== attribute.itemSize) {
        console.error('THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.');
        return null;
      }

      if (normalized === undefined) normalized = attribute.normalized;

      if (normalized !== attribute.normalized) {
        console.error('THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.');
        return null;
      }

      arrayLength += attribute.array.length;
    }

    var array = new TypedArray(arrayLength);
    var offset = 0;

    for (var i = 0; i < attributes.length; ++i) {
      array.set(attributes[i].array, offset);
      offset += attributes[i].array.length;
    }

    return new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(array, itemSize, normalized);
  },

  /**
   * @param {Array<BufferAttribute>} attributes
   * @return {Array<InterleavedBufferAttribute>}
   */
  interleaveAttributes: function (attributes) {
    // Interleaves the provided attributes into an InterleavedBuffer and returns
    // a set of InterleavedBufferAttributes for each attribute
    var TypedArray;
    var arrayLength = 0;
    var stride = 0; // calculate the the length and type of the interleavedBuffer

    for (var i = 0, l = attributes.length; i < l; ++i) {
      var attribute = attributes[i];
      if (TypedArray === undefined) TypedArray = attribute.array.constructor;

      if (TypedArray !== attribute.array.constructor) {
        console.error('AttributeBuffers of different types cannot be interleaved');
        return null;
      }

      arrayLength += attribute.array.length;
      stride += attribute.itemSize;
    } // Create the set of buffer attributes


    var interleavedBuffer = new three__WEBPACK_IMPORTED_MODULE_0__.InterleavedBuffer(new TypedArray(arrayLength), stride);
    var offset = 0;
    var res = [];
    var getters = ['getX', 'getY', 'getZ', 'getW'];
    var setters = ['setX', 'setY', 'setZ', 'setW'];

    for (var j = 0, l = attributes.length; j < l; j++) {
      var attribute = attributes[j];
      var itemSize = attribute.itemSize;
      var count = attribute.count;
      var iba = new three__WEBPACK_IMPORTED_MODULE_0__.InterleavedBufferAttribute(interleavedBuffer, itemSize, offset, attribute.normalized);
      res.push(iba);
      offset += itemSize; // Move the data for each attribute into the new interleavedBuffer
      // at the appropriate offset

      for (var c = 0; c < count; c++) {
        for (var k = 0; k < itemSize; k++) {
          iba[setters[k]](c, attribute[getters[k]](c));
        }
      }
    }

    return res;
  },

  /**
   * @param {Array<BufferGeometry>} geometry
   * @return {number}
   */
  estimateBytesUsed: function (geometry) {
    // Return the estimated memory used by this geometry in bytes
    // Calculate using itemSize, count, and BYTES_PER_ELEMENT to account
    // for InterleavedBufferAttributes.
    var mem = 0;

    for (var name in geometry.attributes) {
      var attr = geometry.getAttribute(name);
      mem += attr.count * attr.itemSize * attr.array.BYTES_PER_ELEMENT;
    }

    var indices = geometry.getIndex();
    mem += indices ? indices.count * indices.itemSize * indices.array.BYTES_PER_ELEMENT : 0;
    return mem;
  },

  /**
   * @param {BufferGeometry} geometry
   * @param {number} tolerance
   * @return {BufferGeometry>}
   */
  mergeVertices: function (geometry, tolerance = 1e-4) {
    tolerance = Math.max(tolerance, Number.EPSILON); // Generate an index buffer if the geometry doesn't have one, or optimize it
    // if it's already available.

    var hashToIndex = {};
    var indices = geometry.getIndex();
    var positions = geometry.getAttribute('position');
    var vertexCount = indices ? indices.count : positions.count; // next value for triangle indices

    var nextIndex = 0; // attributes and new attribute arrays

    var attributeNames = Object.keys(geometry.attributes);
    var attrArrays = {};
    var morphAttrsArrays = {};
    var newIndices = [];
    var getters = ['getX', 'getY', 'getZ', 'getW']; // initialize the arrays

    for (var i = 0, l = attributeNames.length; i < l; i++) {
      var name = attributeNames[i];
      attrArrays[name] = [];
      var morphAttr = geometry.morphAttributes[name];

      if (morphAttr) {
        morphAttrsArrays[name] = new Array(morphAttr.length).fill().map(() => []);
      }
    } // convert the error tolerance to an amount of decimal places to truncate to


    var decimalShift = Math.log10(1 / tolerance);
    var shiftMultiplier = Math.pow(10, decimalShift);

    for (var i = 0; i < vertexCount; i++) {
      var index = indices ? indices.getX(i) : i; // Generate a hash for the vertex attributes at the current index 'i'

      var hash = '';

      for (var j = 0, l = attributeNames.length; j < l; j++) {
        var name = attributeNames[j];
        var attribute = geometry.getAttribute(name);
        var itemSize = attribute.itemSize;

        for (var k = 0; k < itemSize; k++) {
          // double tilde truncates the decimal value
          hash += `${~~(attribute[getters[k]](index) * shiftMultiplier)},`;
        }
      } // Add another reference to the vertex if it's already
      // used by another index


      if (hash in hashToIndex) {
        newIndices.push(hashToIndex[hash]);
      } else {
        // copy data to the new index in the attribute arrays
        for (var j = 0, l = attributeNames.length; j < l; j++) {
          var name = attributeNames[j];
          var attribute = geometry.getAttribute(name);
          var morphAttr = geometry.morphAttributes[name];
          var itemSize = attribute.itemSize;
          var newarray = attrArrays[name];
          var newMorphArrays = morphAttrsArrays[name];

          for (var k = 0; k < itemSize; k++) {
            var getterFunc = getters[k];
            newarray.push(attribute[getterFunc](index));

            if (morphAttr) {
              for (var m = 0, ml = morphAttr.length; m < ml; m++) {
                newMorphArrays[m].push(morphAttr[m][getterFunc](index));
              }
            }
          }
        }

        hashToIndex[hash] = nextIndex;
        newIndices.push(nextIndex);
        nextIndex++;
      }
    } // Generate typed arrays from new attribute arrays and update
    // the attributeBuffers


    const result = geometry.clone();

    for (var i = 0, l = attributeNames.length; i < l; i++) {
      var name = attributeNames[i];
      var oldAttribute = geometry.getAttribute(name);
      var buffer = new oldAttribute.array.constructor(attrArrays[name]);
      var attribute = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(buffer, oldAttribute.itemSize, oldAttribute.normalized);
      result.setAttribute(name, attribute); // Update the attribute arrays

      if (name in morphAttrsArrays) {
        for (var j = 0; j < morphAttrsArrays[name].length; j++) {
          var oldMorphAttribute = geometry.morphAttributes[name][j];
          var buffer = new oldMorphAttribute.array.constructor(morphAttrsArrays[name][j]);
          var morphAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(buffer, oldMorphAttribute.itemSize, oldMorphAttribute.normalized);
          result.morphAttributes[name][j] = morphAttribute;
        }
      }
    } // indices


    result.setIndex(newIndices);
    return result;
  },

  /**
   * @param {BufferGeometry} geometry
   * @param {number} drawMode
   * @return {BufferGeometry>}
   */
  toTrianglesDrawMode: function (geometry, drawMode) {
    if (drawMode === three__WEBPACK_IMPORTED_MODULE_0__.TrianglesDrawMode) {
      console.warn('THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.');
      return geometry;
    }

    if (drawMode === three__WEBPACK_IMPORTED_MODULE_0__.TriangleFanDrawMode || drawMode === three__WEBPACK_IMPORTED_MODULE_0__.TriangleStripDrawMode) {
      var index = geometry.getIndex(); // generate index if not present

      if (index === null) {
        var indices = [];
        var position = geometry.getAttribute('position');

        if (position !== undefined) {
          for (var i = 0; i < position.count; i++) {
            indices.push(i);
          }

          geometry.setIndex(indices);
          index = geometry.getIndex();
        } else {
          console.error('THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.');
          return geometry;
        }
      } //


      var numberOfTriangles = index.count - 2;
      var newIndices = [];

      if (drawMode === three__WEBPACK_IMPORTED_MODULE_0__.TriangleFanDrawMode) {
        // gl.TRIANGLE_FAN
        for (var i = 1; i <= numberOfTriangles; i++) {
          newIndices.push(index.getX(0));
          newIndices.push(index.getX(i));
          newIndices.push(index.getX(i + 1));
        }
      } else {
        // gl.TRIANGLE_STRIP
        for (var i = 0; i < numberOfTriangles; i++) {
          if (i % 2 === 0) {
            newIndices.push(index.getX(i));
            newIndices.push(index.getX(i + 1));
            newIndices.push(index.getX(i + 2));
          } else {
            newIndices.push(index.getX(i + 2));
            newIndices.push(index.getX(i + 1));
            newIndices.push(index.getX(i));
          }
        }
      }

      if (newIndices.length / 3 !== numberOfTriangles) {
        console.error('THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.');
      } // build final geometry


      var newGeometry = geometry.clone();
      newGeometry.setIndex(newIndices);
      newGeometry.clearGroups();
      return newGeometry;
    } else {
      console.error('THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:', drawMode);
      return geometry;
    }
  },

  /**
   * Calculates the morphed attributes of a morphed/skinned BufferGeometry.
   * Helpful for Raytracing or Decals.
   * @param {Mesh | Line | Points} object An instance of Mesh, Line or Points.
   * @return {Object} An Object with original position/normal attributes and morphed ones.
   */
  computeMorphedAttributes: function (object) {
    if (object.geometry.isBufferGeometry !== true) {
      console.error('THREE.BufferGeometryUtils: Geometry is not of type BufferGeometry.');
      return null;
    }

    var _vA = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

    var _vB = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

    var _vC = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

    var _tempA = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

    var _tempB = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

    var _tempC = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

    var _morphA = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

    var _morphB = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

    var _morphC = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

    function _calculateMorphedAttributeData(object, material, attribute, morphAttribute, morphTargetsRelative, a, b, c, modifiedAttributeArray) {
      _vA.fromBufferAttribute(attribute, a);

      _vB.fromBufferAttribute(attribute, b);

      _vC.fromBufferAttribute(attribute, c);

      var morphInfluences = object.morphTargetInfluences;

      if (material.morphTargets && morphAttribute && morphInfluences) {
        _morphA.set(0, 0, 0);

        _morphB.set(0, 0, 0);

        _morphC.set(0, 0, 0);

        for (var i = 0, il = morphAttribute.length; i < il; i++) {
          var influence = morphInfluences[i];
          var morph = morphAttribute[i];
          if (influence === 0) continue;

          _tempA.fromBufferAttribute(morph, a);

          _tempB.fromBufferAttribute(morph, b);

          _tempC.fromBufferAttribute(morph, c);

          if (morphTargetsRelative) {
            _morphA.addScaledVector(_tempA, influence);

            _morphB.addScaledVector(_tempB, influence);

            _morphC.addScaledVector(_tempC, influence);
          } else {
            _morphA.addScaledVector(_tempA.sub(_vA), influence);

            _morphB.addScaledVector(_tempB.sub(_vB), influence);

            _morphC.addScaledVector(_tempC.sub(_vC), influence);
          }
        }

        _vA.add(_morphA);

        _vB.add(_morphB);

        _vC.add(_morphC);
      }

      if (object.isSkinnedMesh) {
        object.boneTransform(a, _vA);
        object.boneTransform(b, _vB);
        object.boneTransform(c, _vC);
      }

      modifiedAttributeArray[a * 3 + 0] = _vA.x;
      modifiedAttributeArray[a * 3 + 1] = _vA.y;
      modifiedAttributeArray[a * 3 + 2] = _vA.z;
      modifiedAttributeArray[b * 3 + 0] = _vB.x;
      modifiedAttributeArray[b * 3 + 1] = _vB.y;
      modifiedAttributeArray[b * 3 + 2] = _vB.z;
      modifiedAttributeArray[c * 3 + 0] = _vC.x;
      modifiedAttributeArray[c * 3 + 1] = _vC.y;
      modifiedAttributeArray[c * 3 + 2] = _vC.z;
    }

    var geometry = object.geometry;
    var material = object.material;
    var a, b, c;
    var index = geometry.index;
    var positionAttribute = geometry.attributes.position;
    var morphPosition = geometry.morphAttributes.position;
    var morphTargetsRelative = geometry.morphTargetsRelative;
    var normalAttribute = geometry.attributes.normal;
    var morphNormal = geometry.morphAttributes.position;
    var groups = geometry.groups;
    var drawRange = geometry.drawRange;
    var i, j, il, jl;
    var group, groupMaterial;
    var start, end;
    var modifiedPosition = new Float32Array(positionAttribute.count * positionAttribute.itemSize);
    var modifiedNormal = new Float32Array(normalAttribute.count * normalAttribute.itemSize);

    if (index !== null) {
      // indexed buffer geometry
      if (Array.isArray(material)) {
        for (i = 0, il = groups.length; i < il; i++) {
          group = groups[i];
          groupMaterial = material[group.materialIndex];
          start = Math.max(group.start, drawRange.start);
          end = Math.min(group.start + group.count, drawRange.start + drawRange.count);

          for (j = start, jl = end; j < jl; j += 3) {
            a = index.getX(j);
            b = index.getX(j + 1);
            c = index.getX(j + 2);

            _calculateMorphedAttributeData(object, groupMaterial, positionAttribute, morphPosition, morphTargetsRelative, a, b, c, modifiedPosition);

            _calculateMorphedAttributeData(object, groupMaterial, normalAttribute, morphNormal, morphTargetsRelative, a, b, c, modifiedNormal);
          }
        }
      } else {
        start = Math.max(0, drawRange.start);
        end = Math.min(index.count, drawRange.start + drawRange.count);

        for (i = start, il = end; i < il; i += 3) {
          a = index.getX(i);
          b = index.getX(i + 1);
          c = index.getX(i + 2);

          _calculateMorphedAttributeData(object, material, positionAttribute, morphPosition, morphTargetsRelative, a, b, c, modifiedPosition);

          _calculateMorphedAttributeData(object, material, normalAttribute, morphNormal, morphTargetsRelative, a, b, c, modifiedNormal);
        }
      }
    } else if (positionAttribute !== undefined) {
      // non-indexed buffer geometry
      if (Array.isArray(material)) {
        for (i = 0, il = groups.length; i < il; i++) {
          group = groups[i];
          groupMaterial = material[group.materialIndex];
          start = Math.max(group.start, drawRange.start);
          end = Math.min(group.start + group.count, drawRange.start + drawRange.count);

          for (j = start, jl = end; j < jl; j += 3) {
            a = j;
            b = j + 1;
            c = j + 2;

            _calculateMorphedAttributeData(object, groupMaterial, positionAttribute, morphPosition, morphTargetsRelative, a, b, c, modifiedPosition);

            _calculateMorphedAttributeData(object, groupMaterial, normalAttribute, morphNormal, morphTargetsRelative, a, b, c, modifiedNormal);
          }
        }
      } else {
        start = Math.max(0, drawRange.start);
        end = Math.min(positionAttribute.count, drawRange.start + drawRange.count);

        for (i = start, il = end; i < il; i += 3) {
          a = i;
          b = i + 1;
          c = i + 2;

          _calculateMorphedAttributeData(object, material, positionAttribute, morphPosition, morphTargetsRelative, a, b, c, modifiedPosition);

          _calculateMorphedAttributeData(object, material, normalAttribute, morphNormal, morphTargetsRelative, a, b, c, modifiedNormal);
        }
      }
    }

    var morphedPositionAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(modifiedPosition, 3);
    var morphedNormalAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(modifiedNormal, 3);
    return {
      positionAttribute: positionAttribute,
      normalAttribute: normalAttribute,
      morphedPositionAttribute: morphedPositionAttribute,
      morphedNormalAttribute: morphedNormalAttribute
    };
  }
};


/***/ }),

/***/ "./components/Core-API/ConnectAPI.js":
/*!*******************************************!*\
  !*** ./components/Core-API/ConnectAPI.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startSeverClientCommunication": function() { return /* binding */ startSeverClientCommunication; },
/* harmony export */   "sendDataWithPromise": function() { return /* binding */ sendDataWithPromise; },
/* harmony export */   "listenToEvent": function() { return /* binding */ listenToEvent; },
/* harmony export */   "attachToMainEventStream": function() { return /* binding */ attachToMainEventStream; },
/* harmony export */   "listenForEventWithSchemaValidation": function() { return /* binding */ listenForEventWithSchemaValidation; },
/* harmony export */   "addDataToQueue": function() { return /* binding */ addDataToQueue; }
/* harmony export */ });
/* harmony import */ var _Algorithms_PriorityQueue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Algorithms/PriorityQueue */ "./components/Algorithms/PriorityQueue.js");
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! joi */ "joi");
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_1__);
// Written By Harvey Randall \\
// This file aims to make communicatiom between client and server a lot easier, using promise
//-------------[   Imports   ]-------------\\

 //-------------[Core Variables]-------------\\

let client;
let Queue = new _Algorithms_PriorityQueue__WEBPACK_IMPORTED_MODULE_0__.PriorityQueue((a, b) => a.prority > b.prority);
/**
 *  @param {string} socket - The socket io Client
 */

function startSeverClientCommunication(socket) {
  client = socket; //Data Handshake

  socket.emit("ConnectionEstablised", Date.now());
}
/**
 *  @param {string} event - The Event name
 *  @param {array} data   - The data to send to the server
 */

function sendDataWithPromise(event, data) {
  //-------------[   Create a basic promise to return data   ]-------------\\
  const DataPromise = new Promise((resolve, reject) => {
    let resolved = false;

    try {
      client.emit(event, ...data);
      client.on(event + "_Callback", () => {
        resolved = true;
        resolve(...arguments);
      });
    } catch (err) {
      resolved = true;
      reject(err);
    }

    setTimeout(() => {
      if (resolved === false) {
        resolved = true;
        reject("No data returned within 2 seconds, is there a data callback?");
      }
    }, 2000);
  });
  return DataPromise;
}
/**
 *  @param {string} event        - The Event name
 *  @param {function} callback   - The function that will be called with the data back
 */

function listenToEvent(event, callback) {
  // Attach event handle to functions
  client.on(event, callback);
}
/**
 *  @param {function} callback   - The function that will listen to all events sent to the client
 */

function attachToMainEventStream(callback) {
  client.onAny((eventName, ...args) => {
    callback(eventName, args);
  });
}
/**
 *  @param {string} event        - The name of the event to listen to
 *  @param {scema} scema         - The data scheme to folow
 *  @param {function} callback   - The function that will be called with the data
 */

async function listenForEventWithSchemaValidation(event, scema, callback) {
  listenToEvent(event, args => {
    const {
      error,
      value
    } = scema.validate(args);

    if (error) {
      throw new Error("Scehma Check Failed");
    } else {
      callback(value);
      return value;
    }
  });
}
function addDataToQueue(event, data, callback, prority = 1) {
  Queue.push({
    prority,
    input: [event, data, callback]
  });
} //-------------[   All Non essesntial communication   ]-------------\\

setInterval(async () => {
  if (!Queue.isEmpty()) {
    let func = Queue.pop();
    let input = func.input;
    let callBack = input[2];

    try {
      //Destructure and send data
      let data = await sendDataWithPromise(input[0], ...input[1]);
      callBack(false, data);
    } catch {
      callBack(true, []);
    }
  }
}, 500);

/***/ }),

/***/ "./components/Core-API/LightingManager.js":
/*!************************************************!*\
  !*** ./components/Core-API/LightingManager.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDirectionalLight": function() { return /* binding */ createDirectionalLight; },
/* harmony export */   "createAmbientLight": function() { return /* binding */ createAmbientLight; },
/* harmony export */   "createPointLight": function() { return /* binding */ createPointLight; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
// Written By Harvey Randall \\

function createDirectionalLight(Scene, color, brightness, pos) {
  // ---------- [Simple Directional Light Manager] ---------- \\
  const directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(color, brightness, 100);
  directionalLight.position.set(...pos); // ES6 Only way to destructure POS array
  //Shadown Managers

  directionalLight.castShadow = false; //Add to Scene

  Scene.add(directionalLight);
  return directionalLight;
}
function createAmbientLight(Scene, color, brightness) {
  const light = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(color, brightness); // soft white light

  Scene.add(light);
  return light;
}
function createPointLight(color, brightness, pos, intensity) {
  const PointLightNew = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(color, brightness, intensity);
  PointLightNew.position.set(...pos);
  return PointLightNew;
}

/***/ }),

/***/ "./components/Core-API/PerlinNoise/PerlingNoise.js":
/*!*********************************************************!*\
  !*** ./components/Core-API/PerlinNoise/PerlingNoise.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FBM": function() { return /* binding */ FBM; },
/* harmony export */   "Perlin": function() { return /* binding */ Perlin; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

var definitions_perlin = "#define GLSLIFY 1\n// From https://github.com/hughsk/glsl-noise/blob/master/periodic/2d.glsl\n\n//\n// GLSL textureless classic 2D noise \"cnoise\",\n// with an RSL-style periodic variant \"pnoise\".\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\n// Version: 2011-08-22\n//\n// Many thanks to Ian McEwan of Ashima Arts for the\n// ideas for permutation and gradient selection.\n//\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\n// Distributed under the MIT license. See LICENSE file.\n// https://github.com/ashima/webgl-noise\n//\n\nvec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nvec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }\n\nvec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }\n\nvec2 fade(vec2 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }\n\nfloat map(float value, float min1, float max1, float min2, float max2) {\n  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\n}\n\n// Classic Perlin noise, periodic variant\nfloat perlin(vec2 P) {\n\n  vec2 rep = vec2(255.0, 255.0);\n\n  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);\n  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);\n  Pi = mod(Pi, rep.xyxy); // To create noise with explicit period\n  Pi = mod289(Pi);        // To avoid truncation effects in permutation\n  vec4 ix = Pi.xzxz;\n  vec4 iy = Pi.yyww;\n  vec4 fx = Pf.xzxz;\n  vec4 fy = Pf.yyww;\n\n  vec4 i = permute(permute(ix) + iy);\n\n  vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0;\n  vec4 gy = abs(gx) - 0.5;\n  vec4 tx = floor(gx + 0.5);\n  gx = gx - tx;\n\n  vec2 g00 = vec2(gx.x, gy.x);\n  vec2 g10 = vec2(gx.y, gy.y);\n  vec2 g01 = vec2(gx.z, gy.z);\n  vec2 g11 = vec2(gx.w, gy.w);\n\n  vec4 norm = taylorInvSqrt(\n      vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));\n  g00 *= norm.x;\n  g01 *= norm.y;\n  g10 *= norm.z;\n  g11 *= norm.w;\n\n  float n00 = dot(g00, vec2(fx.x, fy.x));\n  float n10 = dot(g10, vec2(fx.y, fy.y));\n  float n01 = dot(g01, vec2(fx.z, fy.z));\n  float n11 = dot(g11, vec2(fx.w, fy.w));\n\n  vec2 fade_xy = fade(Pf.xy);\n  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);\n  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);\n  return map(2.3 * n_xy, -1.0, 1.0, 0.0, 1.0);\n}\n\nfloat fbm(vec2 pos, vec4 props) {\n  float persistance = props.x;\n  float lacunarity = props.y;\n  float redistribution = props.z;\n  int octaves = int(props.w);\n\n  float result = 0.0;\n  float amplitude = 1.0;\n  float frequency = 1.0;\n  float maximum = amplitude;\n\n  for (int i = 0; i < 2; i++) {\n\n    vec2 p = pos.xy * frequency;\n\n    float noiseVal = perlin(p);\n    result += noiseVal * amplitude;\n\n    frequency *= lacunarity;\n    amplitude *= persistance;\n    maximum += amplitude;\n  }\n\n  float redistributed = pow(result, redistribution);\n  return redistributed / maximum;\n}\n"; // eslint-disable-line

var p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
/**
 * An implimentation of Perlin Noise by Ken Perlin.
 */

class Perlin {
  /**
   *
   * @param {number} seed Seed Value for PRNG.
   */
  constructor(seed) {
    const _gradientVecs = [// 2D Vecs
    new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 1, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1, 1, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, -1, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1, -1, 0), // + 3D Vecs
    new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 0, 1), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1, 0, 1), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 0, -1), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1, 0, -1), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 1), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, -1, 1), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, -1), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, -1, -1)];
    var perm = new Array(512);
    var gradP = new Array(512);
    if (!seed) seed = 1;
    seed *= 65536;
    seed = Math.floor(seed);

    if (seed < 256) {
      seed |= seed << 8;
    }

    for (var i = 0; i < 256; i++) {
      var v;

      if (i & 1) {
        v = p[i] ^ seed & 255;
      } else {
        v = p[i] ^ seed >> 8 & 255;
      }

      perm[i] = perm[i + 256] = v;
      gradP[i] = gradP[i + 256] = _gradientVecs[v % 12];
    }

    this._seed = seed;
    this._offsetMatrix = [new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 1), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 1), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 0, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 0, 1), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 1, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 1, 1)];
    /**
     * GLSL Shader Chunk for 2D Perlin Noise. Can be used with
     * three-CustomShaderMaterial.
     * See: <a href="https://github.com/FarazzShaikh/THREE-CustomShaderMaterial">three-CustomShaderMaterial</a>
     */

    this.shaderChunk = {
      defines: "",
      header: definitions_perlin,
      main: "",
      uniforms: [{
        three_noise_seed: this._seed
      }]
    };
    this.perm = perm;
    this.gradP = gradP;
  }

  _fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  _lerp(a, b, t) {
    return (1 - t) * a + t * b;
  }

  _gradient(posInCell) {
    if (posInCell instanceof three__WEBPACK_IMPORTED_MODULE_0__.Vector3) {
      return posInCell.x + this.perm[posInCell.y + this.perm[posInCell.z]];
    } else {
      return posInCell.x + this.perm[posInCell.y];
    }
  }
  /**
   * Maps a number from one range to another.
   * @param {number} x       Input Number
   * @param {number} in_min  Current range minimum
   * @param {number} in_max  Current range maximum
   * @param {number} out_min New range minimum
   * @param {number} out_max New range maximum
   * @returns {number} Input Mapped to range [out_min, out_max]
   */


  static map(x, in_min, in_max, out_min, out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
  /**
   * Samples 2D Perlin Nosie at given coordinates.
   * @param {THREE.Vector2 | THREE.Vector3} input Coordincates to sample at
   * @returns {number} Value of Perlin Noise at that coordinate.
   */


  get2(input) {
    if (input.z !== undefined) input = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(input.x, input.y);
    const cell = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(Math.floor(input.x), Math.floor(input.y));
    input.sub(cell);
    cell.x &= 255;
    cell.y &= 255;
    const gradiantDot = [];

    for (let i = 0; i < 4; i++) {
      const s3 = this._offsetMatrix[i * 2];
      const s = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(s3.x, s3.y);

      const grad3 = this.gradP[this._gradient(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2().addVectors(cell, s))];

      const grad2 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(grad3.x, grad3.y);
      const dist2 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2().subVectors(input, s);
      gradiantDot.push(grad2.dot(dist2));
    }

    const u = this._fade(input.x);

    const v = this._fade(input.y);

    const value = this._lerp(this._lerp(gradiantDot[0], gradiantDot[2], u), this._lerp(gradiantDot[1], gradiantDot[3], u), v);

    return value;
  }
  /**
   * Samples 3D Perlin Nosie at given coordinates.
   * @param {THREE.Vector}3 input Coordincates to sample at
   * @returns {number} Value of Perlin Noise at that coordinate.
   */


  get3(input) {
    if (input.z === undefined) throw "Input to Perlin::get3() must be of type THREE.Vector3";
    const cell = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(Math.floor(input.x), Math.floor(input.y), Math.floor(input.z));
    input.sub(cell);
    cell.x &= 255;
    cell.y &= 255;
    cell.z &= 255;
    const gradiantDot = [];

    for (let i = 0; i < 8; i++) {
      const s = this._offsetMatrix[i];

      const grad3 = this.gradP[this._gradient(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().addVectors(cell, s))];

      const dist2 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().subVectors(input, s);
      gradiantDot.push(grad3.dot(dist2));
    }

    const u = this._fade(input.x);

    const v = this._fade(input.y);

    const w = this._fade(input.z);

    const value = this._lerp(this._lerp(this._lerp(gradiantDot[0], gradiantDot[4], u), this._lerp(gradiantDot[1], gradiantDot[5], u), w), this._lerp(this._lerp(gradiantDot[2], gradiantDot[6], u), this._lerp(gradiantDot[3], gradiantDot[7], u), w), v);

    return value;
  }

}
/**
 * This class is an implimentaiton of a Fractal Brownian Motion
 * function using Perlin Nosie.
 */


class FBM {
  /**
   * Create an instance of the FBM class.
   * Use this instance to generate fBm noise.
   *
   * @param {Object} options Options for fBm generaiton.
   * @param {number} options.seed Seed for Perlin Noise
   * @param {number} options.scale What distance to view the noisemap
   * @param {number} options.persistance How much each octave contributes to the overall shape
   * @param {number} options.lacunarity How much detail is added or removed at each octave
   * @param {number} options.octaves Levels of detail you want you perlin noise to have
   * @param {number} options.redistribution Level of flatness within the valleys
   */
  constructor(options) {
    const {
      seed,
      scale,
      persistance,
      lacunarity,
      octaves,
      redistribution
    } = options;
    this._noise = new Perlin(seed);
    this._scale = scale || 1;
    this._persistance = persistance || 0.5;
    this._lacunarity = lacunarity || 2;
    this._octaves = octaves || 6;
    this._redistribution = redistribution || 1;
  }
  /**
   * Sample 2D Perlin Noise with fBm at given
   * coordinates. The function will use <code>Perlin_get2</code> or <code>Perlin_get3</code>
   * depending on the input vector's type.
   *
   * @param {(THREE.Vector2 | THREE.Vector3)} input Coordinates to sample noise at.
   * @returns {number} Normalized noise in the range [0, 1]
   */


  get2(input) {
    let result = 0;
    let amplitude = 1;
    let frequency = 1;
    let max = amplitude;

    let noiseFunction = this._noise.get2.bind(this._noise);

    for (let i = 0; i < this._octaves; i++) {
      const position = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(input.x * this._scale * frequency, input.y * this._scale * frequency);
      const noiseVal = noiseFunction(position);
      result += noiseVal * amplitude;
      frequency *= this._lacunarity;
      amplitude *= this._persistance;
      max += amplitude;
    }

    const redistributed = Math.pow(result, this._redistribution);
    return redistributed / max;
  }
  /**
   * Sample 3D Perlin Noise with fBm at given
   * coordinates. The function will use <code>Perlin_get2</code> or <code>Perlin_get3</code>
   * depending on the input vector's type.
   *
   * @param {THREE.Vector3} input Coordinates to sample noise at.
   * @returns {number} Normalized noise in the range [0, 1]
   */


  get3(input) {
    let result = 0;
    let amplitude = 1;
    let frequency = 1;
    let max = amplitude;

    let noiseFunction = this._noise.get3.bind(this._noise);

    for (let i = 0; i < this._octaves; i++) {
      const position = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(input.x * this._scale * frequency, input.y * this._scale * frequency, input.z * this._scale * frequency);
      const noiseVal = noiseFunction(position);
      result += noiseVal * amplitude;
      frequency *= this._lacunarity;
      amplitude *= this._persistance;
      max += amplitude;
    }

    const redistributed = Math.pow(result, this._redistribution);
    return redistributed / max;
  }

}



/***/ }),

/***/ "./components/Core-API/RenderingHandler.js":
/*!*************************************************!*\
  !*** ./components/Core-API/RenderingHandler.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToRenderSequence": function() { return /* binding */ addToRenderSequence; },
/* harmony export */   "renderingInfo": function() { return /* binding */ renderingInfo; },
/* harmony export */   "updateRenderCycle": function() { return /* binding */ updateRenderCycle; }
/* harmony export */ });
// Written By Harvey Randall \\
let renderingList = {};

function checkType(type) {
  if (typeof renderingList[`${type}`] === "undefined") {
    renderingList[`${type}`] = [];
  }
}

function addToRenderSequence(type, callback, newType = false, val) {
  if (newType) {
    renderingList[`${type}`] = [];
  }

  checkType(type);
  renderingList[`${type}`].push(callback);
}
function renderingInfo(type) {
  checkType(type);
  return renderingList[`${type}`].length;
}
function updateRenderCycle(type) {
  checkType(type);
  renderingList[`${type}`].forEach(item => {
    item();
  });
}

/***/ }),

/***/ "./components/Core-API/WorkerSetup.ts":
/*!********************************************!*\
  !*** ./components/Core-API/WorkerSetup.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateWebWorker": function() { return /* binding */ GenerateWebWorker; },
/* harmony export */   "TerminteWorkerExternally": function() { return /* binding */ TerminteWorkerExternally; }
/* harmony export */ });
// Created by Harvey Randall to Automate the creation and handling of web workers \\
// OK first thing first, we need to turn the file into a data blob

/**
* Turn JS file into a datablob and then into a web worker
* @param {worker} str The actual code for the worker to be parsed
* @returns {Worker}
*/
function GenerateWebWorker(worker, globalVars, returnFunc) {
  // First thing if its not a string make it a string
  const code = worker.toString(); //We may need to add the calling context so we should add the global vars

  let inputStuff = `let globalVars = ${globalVars};\n`; //Next Create the blob in a self running function

  const blob = new Blob([inputStuff + "(" + code + ")()"], {
    type: 'text/javascript'
  }); //Then return the web worker

  let workerOut = new Worker(window.URL.createObjectURL(blob), {
    type: 'module'
  }); //Check if web worker wants to terminate itself

  workerOut.addEventListener('message', e => returnFunc(e), false);
  return workerOut;
}
function TerminteWorkerExternally(worker) {
  try {
    worker.terminate();
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./components/Core-API/gemotryManager.js":
/*!***********************************************!*\
  !*** ./components/Core-API/gemotryManager.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGeo": function() { return /* binding */ createGeo; },
/* harmony export */   "debugCube": function() { return /* binding */ debugCube; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
// Written By Harvey Randall \\


let GameCoreShadows = true; // TODO add to GUI

/*eslint complexity: ["error", 20]*/

function createGeo(type, data, pos, rot, mat, shadow) {
  //Create type, using destructuring to pass in values
  let geo = new three__WEBPACK_IMPORTED_MODULE_0__[`${type}`](...data); //Set Geo Position and Rotation

  geo.position.set(pos);
  geo.rotation.set(rot); //Create the Mesh

  /*eslint new-cap: "error"*/

  let mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geo, mat); //Handle Reciving shadows and casting

  mesh.castShadow = shadow && GameCoreShadows ? true : false;
  mesh.receiveShadow = shadow && GameCoreShadows ? true : false; //Return Mesh

  return mesh;
}
function debugCube() {
  const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(10, 10, 10);
  const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({
    color: 0x00ff00
  });
  const cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);
  return cube;
}

/***/ }),

/***/ "./components/Scenes/MainSceneHandler.js":
/*!***********************************************!*\
  !*** ./components/Scenes/MainSceneHandler.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateMainScene": function() { return /* binding */ generateMainScene; }
/* harmony export */ });
/* harmony import */ var _Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Core-API/RenderingHandler */ "./components/Core-API/RenderingHandler.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gameFundalmentals_clouds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gameFundalmentals/clouds */ "./components/gameFundalmentals/clouds.js");
/* harmony import */ var _gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gameFundalmentals/controls */ "./components/gameFundalmentals/controls.js");
/* harmony import */ var _gameFundalmentals_DayNightCycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gameFundalmentals/DayNightCycle */ "./components/gameFundalmentals/DayNightCycle.js");
/* harmony import */ var _gameFundalmentals_planeHandler_MainPlane__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gameFundalmentals/planeHandler/MainPlane */ "./components/gameFundalmentals/planeHandler/MainPlane.js");
/* harmony import */ var _gameFundalmentals_TerrainManagement_terrainChunkriser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gameFundalmentals/TerrainManagement/terrainChunkriser */ "./components/gameFundalmentals/TerrainManagement/terrainChunkriser.js");
/* harmony import */ var _Core_API_WorkerSetup_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Core-API/WorkerSetup.ts */ "./components/Core-API/WorkerSetup.ts");
/* harmony import */ var _Core_API_gemotryManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Core-API/gemotryManager */ "./components/Core-API/gemotryManager.js");
/* harmony import */ var _Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Core-API/3dModelHandlers/GLBLoader */ "./components/Core-API/3dModelHandlers/GLBLoader.js");
// Written By Harvey Randall \\
// Render Handler
 //Functional Dependencies










let debug = true;
async function generateMainScene(SceneToGet, Renders, document, seed, child2, Camera) {
  let collisionHandler = new Worker('webWorkers/Collision.js');

  collisionHandler.onmessage = function (event) {
    console.log(event);
  };

  collisionHandler.onmessageerror = function (event) {
    console.log(event);
  };

  collisionHandler.onerror = function (error) {
    console.log(error);
  };

  collisionHandler.postMessage({
    Command: "Start",
    origin: window.location.origin
  });
  setTimeout(() => {
    collisionHandler.postMessage({
      Command: "AddShape",
      data: new three__WEBPACK_IMPORTED_MODULE_1__.PlaneBufferGeometry(2, 2, 2, 2)
    });
  }, 1000);
  let clouds = [];

  for (let i = 0; i < 40; i++) {
    clouds.push(new _gameFundalmentals_clouds__WEBPACK_IMPORTED_MODULE_2__.GenerateClouds(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(Math.random() * 300 - 300, 80 + Math.random() * 20, Math.random() * 600 - 400), SceneToGet, Math.random() * 0.2, Math.random() * 6 + 1));
  }

  let daynight = new _gameFundalmentals_DayNightCycle__WEBPACK_IMPORTED_MODULE_4__.CreateDayNightCycle(SceneToGet, Renders); //generateTerrain(seed, SceneToGet);

  (0,_gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_3__.controlHandlerInit)(document, child2);

  if (debug) {
    const planeGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.PlaneGeometry(20, 20, 32, 32);
    planeGeometry.rotateX(Math.PI / 2);
    const planeMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({
      color: "#567d46",
      side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide
    });
    const plane = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(planeGeometry, planeMaterial);
    plane.position.y = -0.5;
    SceneToGet.add(plane);
    const gridHelper = new three__WEBPACK_IMPORTED_MODULE_1__.GridHelper(50, 50);
    gridHelper.position.y = -1;
    SceneToGet.add(gridHelper);
  } // Add all updating parts to a function


  (0,_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_0__.addToRenderSequence)("Main", () => {
    clouds.forEach((e, i) => {
      e.update();
    });
  }, true);
  let newPlane = new _gameFundalmentals_planeHandler_MainPlane__WEBPACK_IMPORTED_MODULE_5__.MakePlane(SceneToGet);
  await newPlane.loadFiles();
  newPlane.CreateGroupAndPos();
  newPlane.attachCameraAndControl(Camera);
  let airport = await (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_9__.addGLBFile)("/Assets/Airport.glb", SceneToGet);
  SceneToGet.add(airport.scene);
  (0,_gameFundalmentals_TerrainManagement_terrainChunkriser__WEBPACK_IMPORTED_MODULE_6__.generateTerrainAroundPlayer)(seed, Camera, SceneToGet); //addToRenderSequence("Main", () => controlHandlerUpdate(Camera));

  (0,_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_0__.addToRenderSequence)("Main", () => daynight.update(Camera)); //console.log(GenerateWebWorker(`/webWorkers/basicTest.js`, [], (e) => {console.log(e)} ))
}

/***/ }),

/***/ "./components/gameFundalmentals/DayNightCycle.js":
/*!*******************************************************!*\
  !*** ./components/gameFundalmentals/DayNightCycle.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addtoDayTimeChecker": function() { return /* binding */ addtoDayTimeChecker; },
/* harmony export */   "removeFromDayTimeHook": function() { return /* binding */ removeFromDayTimeHook; },
/* harmony export */   "getDayState": function() { return /* binding */ getDayState; },
/* harmony export */   "CreateDayNightCycle": function() { return /* binding */ CreateDayNightCycle; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core-API/LightingManager */ "./components/Core-API/LightingManager.js");
/* harmony import */ var _stars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stars */ "./components/gameFundalmentals/stars.js");
/* harmony import */ var _rotateAroundPoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rotateAroundPoint */ "./components/gameFundalmentals/rotateAroundPoint.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
// Written By Harvey Randall \\






let recieveDaytimeUpdate = {};
let day = true;
function addtoDayTimeChecker(arg) {
  let UUID = (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)();
  recieveDaytimeUpdate[UUID] = arg;
  return UUID;
}
function removeFromDayTimeHook(UUID) {
  delete recieveDaytimeUpdate[UUID];
}
function getDayState() {
  return day;
}
class CreateDayNightCycle {
  constructor(SceneToGet, Renders) {
    // ---------- [Two to level global variables] ---------- \\
    this.SceneToGet = SceneToGet;
    this.Renders = Renders;
    this.announcedDay = false;
    this.announcedNight = false; // ---------- [Create Sun Mesh] ---------- \\

    let sun = new three__WEBPACK_IMPORTED_MODULE_0__.SphereBufferGeometry(20, 20, 100, 100);
    let sunMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
      emissive: "#f9d71c"
    });
    let sunmesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(sun, sunMaterial);
    sunmesh.position.set(1, 300, 300);
    SceneToGet.add(sunmesh); // Create group to easily move it \\

    let sunGroup = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
    sunGroup.add(sunmesh);
    SceneToGet.add(sunGroup); // ---------- [Create Moon Mesh] ---------- \\

    let moon = new three__WEBPACK_IMPORTED_MODULE_0__.SphereBufferGeometry(10, 10, 100, 100);
    let moonMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
      emissive: "#ffffff"
    });
    let moonMesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(moon, moonMaterial);
    moonMesh.position.set(-1, -200, -300);
    SceneToGet.add(moonMesh); // Create group to easily move it \\

    let moonGroup = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
    moonGroup.add(moonMesh);
    SceneToGet.add(moonGroup); // ---------- [Create Box Gometry for handling rotation] ---------- \\

    var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1, 1, 1);
    var cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry);
    cube.visible = false;
    SceneToGet.add(cube); // ^ This is a very bad work around fix later
    // ---------- [All defintions for the moving part] ---------- \\

    this.cube = cube;
    this.moonMesh = moonMesh;
    this.sunmesh = sunmesh;
    this.sunGroup = sunGroup;
    this.moonGroup = moonGroup;
    this.t = 0;
    this.dTIme = 0; // ---------- [All defintions for lights to create shadows] ---------- \\

    this.directionalLight = (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_1__.createDirectionalLight)(SceneToGet, "#ddffee", 0.5, [1, 100, 100]);
    this.directionalLight2 = (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_1__.createDirectionalLight)(SceneToGet, "#ffffff", 0.2, [1, -100, -100]);
    this.light = (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_1__.createAmbientLight)(SceneToGet, "#aaaaaa", 0.5);
    this.sunGroup.add(this.directionalLight);
    this.moonGroup.add(this.directionalLight2); // ---------- [Create Stary night] ---------- \\

    let skyBox = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1200, 1200, 1200);
    let skyBoxMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({
      map: (0,_stars__WEBPACK_IMPORTED_MODULE_2__.getRandomStarField)(600, 2048, 2048),
      side: three__WEBPACK_IMPORTED_MODULE_0__.BackSide
    });
    this.sky = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(skyBox, skyBoxMaterial);
  }
  /*eslint complexity: ["error", 20]*/


  update(Camera) {
    // This two lines are  important as it is part of the hacky work around to get time of day on varying FPS
    let theta = (0,_rotateAroundPoint__WEBPACK_IMPORTED_MODULE_3__.rotateAboutPoint)(this.directionalLight, new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 0, 0), 0.001, true);
    let angle = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.radToDeg(this.cube.rotation.x); // ---------- [Rotate all the lights and Meshes] ---------- \\

    this.sunGroup.position.set(Camera.position.x + 100, Camera.position.y, Camera.position.z);
    this.moonGroup.position.set(Camera.position.x + 100, Camera.position.y, Camera.position.z);
    this.sky.position.set(Camera.position.x + 100, Camera.position.y, Camera.position.z);
    (0,_rotateAroundPoint__WEBPACK_IMPORTED_MODULE_3__.rotateAboutPoint)(this.sunmesh, new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(100, 0, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 0, 0), 0.001, true);
    (0,_rotateAroundPoint__WEBPACK_IMPORTED_MODULE_3__.rotateAboutPoint)(this.moonMesh, new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(100, 0, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 0, 0), 0.001, true);
    (0,_rotateAroundPoint__WEBPACK_IMPORTED_MODULE_3__.rotateAboutPoint)(this.directionalLight2, new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 0, 0), 0.001, true); // ---------- [If it is day] ---------- \\

    if (angle < 40 && this.dTIme < 1) {
      day = true;
      this.t = 0;
      this.directionalLight.color = new three__WEBPACK_IMPORTED_MODULE_0__.Color("#ddffee");
      this.dTIme += 0.003;

      if (this.dTIme >= 1) {
        this.dTIme = 1;
      }

      this.Renders.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__.Color().lerpColors(new three__WEBPACK_IMPORTED_MODULE_0__.Color("#fdb813"), new three__WEBPACK_IMPORTED_MODULE_0__.Color("#87ceeb"), this.dTIme), 1);
      this.light.intensity = 0.5;
      this.directionalLight2.color = new three__WEBPACK_IMPORTED_MODULE_0__.Color("#000000");
      this.directionalLight.intensity = 0.5;
      this.directionalLight2.intensity = 0;
      this.SceneToGet.remove(this.sky);
    } else if (!(angle < 40) && this.sky.parent !== this.SceneToGet) {
      // ---------- [If it is night] ---------- \\
      day = false;
      this.dTIme = 0;
      this.t += 0.01;

      if (this.t >= 1) {
        this.t = 1;
        this.SceneToGet.add(this.sky);
      }

      this.directionalLight2.color = new three__WEBPACK_IMPORTED_MODULE_0__.Color("#ffffff");
      this.Renders.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__.Color().lerpColors(new three__WEBPACK_IMPORTED_MODULE_0__.Color("#87ceeb"), new three__WEBPACK_IMPORTED_MODULE_0__.Color("#000000"), this.t), 1);
      this.light.intensity = 0.2;
      this.directionalLight.intensity = 0;
      this.directionalLight2.intensity = 0.2;
    }

    if (this.sky.parent === this.SceneToGet) {
      this.sky.rotation.x -= 4 / 10000;
    }

    this.cube.rotateOnAxis(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 0, 0), theta);
  }

}

/***/ }),

/***/ "./components/gameFundalmentals/ProceduleTerrain.js":
/*!**********************************************************!*\
  !*** ./components/gameFundalmentals/ProceduleTerrain.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReturnTerrainPointer": function() { return /* binding */ ReturnTerrainPointer; },
/* harmony export */   "generateTerrain": function() { return /* binding */ generateTerrain; },
/* harmony export */   "generateTerrainChunk": function() { return /* binding */ generateTerrainChunk; },
/* harmony export */   "getTerrainHeight": function() { return /* binding */ getTerrainHeight; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Algorithms/VectorUtils */ "./components/Algorithms/VectorUtils.js");
/* harmony import */ var _Core_API_gemotryManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core-API/gemotryManager */ "./components/Core-API/gemotryManager.js");
/* harmony import */ var _Core_API_PerlinNoise_PerlingNoise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core-API/PerlinNoise/PerlingNoise */ "./components/Core-API/PerlinNoise/PerlingNoise.js");
// Written By Harvey Randall \\





var SimplexNoise = __webpack_require__(/*! simplex-noise */ "simplex-noise");

let currentTerrain;
function ReturnTerrainPointer() {
  return currentTerrain;
}
/*eslint complexity: ["error", 20]*/

function generateTerrain(seed, SceneToGet) {
  //------------[MAIN FUNCTION VARIABLES]------------\\
  const simplex = new SimplexNoise(seed);
  let geometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneBufferGeometry(500, 500, 100, 100);
  let colours = [];
  const positionAttribute = geometry.getAttribute("position"); //------------[Edit the Geomtry Accordingly]------------\\

  for (var i = 0, l = geometry.attributes.position.count; i < l; i++) {
    // Get Data position
    const vertex = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
    vertex.fromBufferAttribute(positionAttribute, i); // Check Height from Perlin Noise Generator

    let height = simplex.noise2D(vertex.x / 128, vertex.y / 128) * 30; // Set the height accordingly

    geometry.attributes.position.array[i * 3 + 2] = height; // Update Vertice colours accordinly

    if (height > 23) {
      colours.push(1, 1, 1);
    } else if (height > 5) {
      colours.push(0.56, 0.54, 0.48);
    } else if (height < 2) {
      colours.push(0.501, 0.772, 0.87);
    } else {
      colours.push(0.56, 0.68, 0.166);
    }
  } //------------[Create Material]------------\\


  var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({
    vertexColors: colours,
    reflectivity: 0,
    roughness: 1,
    flatShading: true
  }); //------------[Create Mesh]------------\\

  var plane2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);
  plane2.receiveShadow = true;
  plane2.castShadow = true;
  plane2.position.y = -3;
  plane2.rotateX(Math.PI / 2 + Math.PI); //------------[Edit colour attribute]------------\\

  geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array(colours), 3)); //geometry.computeVertexNormals();
  //------------[Add to Base Scene]------------\\

  currentTerrain = plane2;
  plane2.name = "MAIN_TERRAIN";
  SceneToGet.add(plane2);
}
function generateTerrainChunk(seed, Position, gain, divisor) {
  //------------[MAIN FUNCTION VARIABLES]------------\\
  //const simplex = new SimplexNoise(seed);
  let geometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneBufferGeometry(500, 500, 30, 30);
  let colours = [];
  const fbm = new _Core_API_PerlinNoise_PerlingNoise__WEBPACK_IMPORTED_MODULE_3__.FBM({
    seed: seed,
    scale: 0.007,
    octaves: 6,
    persistance: 0.5,
    lacunarity: 2,
    redistribution: 2,
    height: 40
  });
  const simplex = new _Core_API_PerlinNoise_PerlingNoise__WEBPACK_IMPORTED_MODULE_3__.Perlin(seed); //------------[Create Material]------------\\

  var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({
    vertexColors: colours,
    reflectivity: 0,
    flatShading: true,
    blending: false
  }); //------------[Create Mesh]------------\\

  var plane2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);
  plane2.receiveShadow = true;
  plane2.castShadow = true;
  plane2.position.set(Position.x, -3, Position.y);
  plane2.rotateX(Math.PI / 2 + Math.PI);
  const positionAttribute = geometry.getAttribute("position"); //------------[Edit the Geomtry Accordingly]------------\\

  for (var i = 0; i < positionAttribute.count; i++) {
    // Get Data position
    const vertex = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
    vertex.fromBufferAttribute(positionAttribute, i);
    plane2.localToWorld(vertex); // Check Height from Perlin Noise Generator

    let location = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2((vertex.x + Position.x) * divisor, (vertex.y - Position.y) * divisor);
    let height = fbm.get2(location) * gain * 4; // Set the height accordingly

    if (location.x >= 25.0 && location.y <= -25.0 && location.x <= 25.3 && location.y >= -25.3) {
      console.log(location); //height = 500
    }

    positionAttribute.setZ(i, height); //geometry.attributes.position.array[i * 3 + 2] = height;
    // Update Vertice colours accordinly

    if (height > 100) {
      colours.push(1, 1, 1);
    } else if (height > 50) {
      colours.push(0.56, 0.54, 0.48);
    } else if (height > 8) {
      colours.push(0.56, 0.68, 0.166);
    } else if (height > 5) {
      colours.push(0.9922, 0.8745, 0.466);
    } else {
      let heightSecondary = simplex.get2(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2((vertex.x + Position.x) * divisor, (vertex.y - Position.y) * divisor)) * 0.75;
      geometry.attributes.position.array[i * 3 + 2] = heightSecondary;
      colours.push(0, (0,_Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_1__.randomIntFromInterval)(400, 500) / 1000, (0,_Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_1__.randomIntFromInterval)(700, 800) / 1000);
    }
  } //------------[Edit colour attribute]------------\\


  geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array(colours), 3)); //------------[Add to Base Scene]------------\\

  currentTerrain = plane2;
  plane2.name = `Terrain_Chunk_${Position.x}:${Position.y}`;
  return plane2;
}
function getTerrainHeight(position, seed, gain, divisor, scene) {
  const fbm = new _Core_API_PerlinNoise_PerlingNoise__WEBPACK_IMPORTED_MODULE_3__.FBM({
    seed: seed,
    scale: 0.007,
    octaves: 6,
    persistance: 0.5,
    lacunarity: 2,
    redistribution: 2,
    height: 40
  }); //console.table(position)

  let height = fbm.get2(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(position.x * divisor, -position.z * divisor)) * gain * 4;
  /*let cube = debugCube()
  scene.add(cube)
  cube.position.set(position.x , height, position.z)
  cube.material.color = new Color(height*2)*/

  return height - 3;
}

/***/ }),

/***/ "./components/gameFundalmentals/TerrainManagement/terrainChunkriser.js":
/*!*****************************************************************************!*\
  !*** ./components/gameFundalmentals/TerrainManagement/terrainChunkriser.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateTerrainAroundPlayer": function() { return /* binding */ generateTerrainAroundPlayer; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Algorithms_MathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Algorithms/MathUtils */ "./components/Algorithms/MathUtils.js");
/* harmony import */ var _ProceduleTerrain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProceduleTerrain */ "./components/gameFundalmentals/ProceduleTerrain.js");
/* harmony import */ var _staticAssets_treeBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../staticAssets/treeBuilder */ "./components/gameFundalmentals/staticAssets/treeBuilder.js");
/* harmony import */ var _utils_GenerateBiomesMap_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/GenerateBiomesMap.ts */ "./components/gameFundalmentals/TerrainManagement/utils/GenerateBiomesMap.ts");





function generateTerrainAroundPlayer(seed, camera, scene) {
  let loadedChunks = {};
  let chunksInMem = {};
  setInterval(() => {
    let vector = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
    camera.getWorldPosition(vector);
    let yourChunk = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2((0,_Algorithms_MathUtils__WEBPACK_IMPORTED_MODULE_1__.roundnum)(vector.x, 500), (0,_Algorithms_MathUtils__WEBPACK_IMPORTED_MODULE_1__.roundnum)(vector.z, 500));

    let chunkyThing = ChunkYourIn => {
      if (ChunkYourIn.x === -0) {
        ChunkYourIn.x = 0;
      }

      if (ChunkYourIn.y === -0) {
        ChunkYourIn.y = 0;
      }

      if (loadedChunks[`${ChunkYourIn.x}:${ChunkYourIn.y}`] !== undefined && loadedChunks[`${ChunkYourIn.x}:${ChunkYourIn.y}`] === true) {// Existing terrain, left hear for a future API
      } else {
        // Check Chunk
        loadedChunks[`${ChunkYourIn.x}:${ChunkYourIn.y}`] = true;
        let chunk = (0,_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_2__.generateTerrainChunk)(seed, ChunkYourIn, 120, 0.1);
        (0,_staticAssets_treeBuilder__WEBPACK_IMPORTED_MODULE_3__.GenerateTrees)(100, scene, new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(ChunkYourIn.x - 250, 250, ChunkYourIn.y - 250), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(ChunkYourIn.x + 250, 250, ChunkYourIn.y + 250), seed, 120, 0.1, ChunkYourIn);
        chunksInMem[`${ChunkYourIn.x}:${ChunkYourIn.y}`] = chunk;
        scene.add(chunk);
      }
    };

    chunkyThing(yourChunk);
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(yourChunk.x + 500, yourChunk.y));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(yourChunk.x + 500, yourChunk.y + 500));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(yourChunk.x, yourChunk.y + 500));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(yourChunk.x - 500, yourChunk.y + 500));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(yourChunk.x - 500, yourChunk.y));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(yourChunk.x - 500, yourChunk.y - 500));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(yourChunk.x, yourChunk.y - 500));
    chunkyThing(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(yourChunk.x + 500, yourChunk.y - 500));
  }, 1000);
}

/***/ }),

/***/ "./components/gameFundalmentals/TerrainManagement/utils/GenerateBiomesMap.ts":
/*!***********************************************************************************!*\
  !*** ./components/gameFundalmentals/TerrainManagement/utils/GenerateBiomesMap.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkBiomeLocation": function() { return /* binding */ checkBiomeLocation; }
/* harmony export */ });
/* harmony import */ var _Algorithms_VectorMaths_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Algorithms/VectorMaths.ts */ "./components/Algorithms/VectorMaths.ts");
/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simplex-noise */ "simplex-noise");
/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(simplex_noise__WEBPACK_IMPORTED_MODULE_1__);


function checkBiomeLocation(position, seed, gain = 1, minHeight = 0) {
  // Create new noise map \\
  let noiseMap = new simplex_noise__WEBPACK_IMPORTED_MODULE_1__(`${seed}`); // Calculate X value \\

  let vector = (0,_Algorithms_VectorMaths_ts__WEBPACK_IMPORTED_MODULE_0__.MultiplyVector2)(position, 0.05);
  let XValue = noiseMap.noise2D(vector.x, vector.y) + minHeight;
  console.log(XValue);
  return XValue > 0 ? "Plains" : "Sea";
}

/***/ }),

/***/ "./components/gameFundalmentals/clouds.js":
/*!************************************************!*\
  !*** ./components/gameFundalmentals/clouds.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateClouds": function() { return /* binding */ GenerateClouds; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
// Written By Harvey Randall \\
 // Randomly delplace cloud verticies

const map = (val, smin, smax, emin, emax) => (emax - emin) * (val - smin) / (smax - smin) + emin;

const jitter = (geometry, per) => {
  for (var i = 0, l = geometry.attributes.position.count; i < l; i++) {
    geometry.attributes.position.array[i * 3] += map(Math.random(), 0, 1, -per, per);
    geometry.attributes.position.array[i * 3 + 1] += map(Math.random(), 0, 1, -per, per);
    geometry.attributes.position.array[i * 3 + 2] += map(Math.random(), 0, 1, -per, per);
  }
};

class GenerateClouds {
  constructor(pos, scene, speed, scale) {
    const group = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
    const tuft1 = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(1.5 * scale, 7, 11);
    tuft1.translate(-2 * scale, 0, 0);
    const tuft3 = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(1.5 * scale, 7, 11);
    tuft3.translate(2 * scale, 0, 0);
    const tuft2 = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(2.0 * scale, 7, 11);
    tuft2.translate(0, 0, 0);
    jitter(tuft1, 0.2);
    jitter(tuft2, 0.1);
    jitter(tuft3, 0.1);
    tuft1.computeVertexNormals();
    const mat = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({
      color: "white",
      flatShading: true,
      side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide
    });
    let cloud = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(tuft1, mat);
    let cloud1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(tuft2, mat);
    let cloud2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(tuft3, mat);
    group.add(cloud);
    group.add(cloud1);
    group.add(cloud2);
    scene.add(group);
    group.castShadow = true;
    group.receiveShadow = true;
    group.position.x = pos.x;
    group.position.y = pos.y;
    group.position.z = pos.z;
    this.grass = group;
    this.speed = speed;
    this.pos = pos;
  }

  update() {
    let geos = this.grass;
    geos.position.x += this.speed;

    if (geos.position.x > 400) {
      geos.position.x = this.pos.x;
    }
  }

}

/***/ }),

/***/ "./components/gameFundalmentals/controls.js":
/*!**************************************************!*\
  !*** ./components/gameFundalmentals/controls.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controlHandlerInit": function() { return /* binding */ controlHandlerInit; },
/* harmony export */   "controlHandlerUpdate": function() { return /* binding */ controlHandlerUpdate; },
/* harmony export */   "ControlEventListener": function() { return /* binding */ ControlEventListener; },
/* harmony export */   "listenToConrols": function() { return /* binding */ listenToConrols; },
/* harmony export */   "CleanUpListener": function() { return /* binding */ CleanUpListener; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
// Written By Harvey Randall \\


let [w, a, s, d, up, down, e, q, shift] = [false, false, false, false, false, false, false, false, 1];
function controlHandlerInit(document, child2) {
  /*eslint complexity: ["error", 20]*/
  function onDocumentKeyDown(event, val) {
    if (child2 === document.activeElement) {
      return;
    }

    var keyCode = event.which;

    if (keyCode === 87) {
      w = val;
    }

    if (keyCode === 83) {
      s = val;
    }

    if (keyCode === 65) {
      a = val;
    }

    if (keyCode === 68) {
      d = val;
    }

    if (keyCode === 38) {
      up = val;
    }

    if (keyCode === 40) {
      down = val;
    }

    if (keyCode === 69) {
      e = val;
    }

    if (keyCode === 81) {
      q = val;
    }

    if (keyCode === 16) {
      shift = val ? 0.5 : 1;
    }
  }

  document.addEventListener("keydown", e => {
    onDocumentKeyDown(e, true);
  }, false);
  document.addEventListener("keyup", e => {
    onDocumentKeyDown(e, false);
  }, false);
}
/*eslint complexity: ["error", 20]*/

function controlHandlerUpdate(Camera) {
  if (w) {
    let direction = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
    Camera.getWorldDirection(direction);
    Camera.position.add(direction.multiplyScalar(shift === 1 ? 1 : 0.25));
  }

  if (s) {
    let direction = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
    Camera.getWorldDirection(direction);
    Camera.position.add(direction.multiplyScalar(-(shift === 1 ? 1 : 0.25)));
  }

  if (a) {
    Camera.rotateY(0.04 * shift);
  }

  if (d) {
    Camera.rotateY(-0.04 * shift);
  }

  if (up) {
    Camera.rotateX(0.04 * shift);
  }

  if (down) {
    Camera.rotateX(-0.04 * shift);
  }

  if (q) {
    Camera.rotateZ(0.02 * shift);
  }

  if (e) {
    Camera.rotateZ(-0.02 * shift);
  }
}
let listeningHooks = {};
function ControlEventListener(ocument, child2) {
  let [wKey, aKey, sKey, dKey, upKey, downKey, eKey, qKey, shiftKey, zKey, xKey] = [false, false, false, false, false, false, false, false, false, false, false];

  function onDocumentKeyDownEvent(event, val) {
    if (child2 === document.activeElement) {
      return;
    }

    var keyCode = event.which;

    if (keyCode === 87) {
      wKey = val;
    }

    if (keyCode === 83) {
      sKey = val;
    }

    if (keyCode === 65) {
      aKey = val;
    }

    if (keyCode === 68) {
      dKey = val;
    }

    if (keyCode === 38) {
      upKey = val;
    }

    if (keyCode === 40) {
      downKey = val;
    }

    if (keyCode === 69) {
      eKey = val;
    }

    if (keyCode === 81) {
      qKey = val;
    }

    if (keyCode === 88) {
      zKey = val;
    }

    if (keyCode === 90) {
      xKey = val;
    }

    if (keyCode === 16) {
      shiftKey = val ? 0.5 : 1;
    }

    for (const [key, value] of Object.entries(listeningHooks)) {
      value({
        wKey,
        aKey,
        sKey,
        dKey,
        upKey,
        downKey,
        eKey,
        qKey,
        shiftKey,
        zKey,
        xKey
      });
    }
  }

  document.addEventListener("keydown", e => {
    onDocumentKeyDownEvent(e, true);
  }, false);
  document.addEventListener("keyup", e => {
    onDocumentKeyDownEvent(e, false);
  }, false);
}
function listenToConrols(arg) {
  let uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)();
  listeningHooks[uuid] = arg;
  return uuid;
}
function CleanUpListener(uuid) {
  delete listeningHooks[uuid];
}

/***/ }),

/***/ "./components/gameFundalmentals/multiplayer/MainPlayerHandler.js":
/*!***********************************************************************!*\
  !*** ./components/gameFundalmentals/multiplayer/MainPlayerHandler.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeNewCubePlayer": function() { return /* binding */ MakeNewCubePlayer; },
/* harmony export */   "InitMainGameHandler": function() { return /* binding */ InitMainGameHandler; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core-API/ConnectAPI */ "./components/Core-API/ConnectAPI.js");
/* harmony import */ var _nametag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nametag */ "./components/gameFundalmentals/nametag.js");
// Written By Harvey Randall \\



let players = [];
function MakeNewCubePlayer(color = "rgb(0,0,0)", name = "unkown", SceneToGet) {
  const group = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
  const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1, 1, 1);
  const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
    color: new three__WEBPACK_IMPORTED_MODULE_0__.Color(color),
    emissive: new three__WEBPACK_IMPORTED_MODULE_0__.Color(color)
  });
  const cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);
  group.add(cube);
  const cyclinder = new three__WEBPACK_IMPORTED_MODULE_0__.CylinderGeometry(0.3, 0.3, 0.6, 30);
  const material2 = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
    color: "#000000"
  });
  const cylinderBuild = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(cyclinder, material2);
  cylinderBuild.rotateX(Math.PI / 2 + Math.PI);
  cylinderBuild.position.set(0, 0, -0.6);
  group.add(cylinderBuild);
  (0,_nametag__WEBPACK_IMPORTED_MODULE_2__.generateLabel)(name, group);
  SceneToGet.add(group);
  group.name = name;
  return group;
}
function InitMainGameHandler(SceneToGet) {
  (0,_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_1__.listenToEvent)("NewPlayer", (id, data) => {//let cube = makeCube(data.color, data.name, SceneToGet);
    //addtoGameFeed(data?.name, "Joined the game!");
    //players[`${id}`] = cube;
  });
}

/***/ }),

/***/ "./components/gameFundalmentals/nametag.js":
/*!*************************************************!*\
  !*** ./components/gameFundalmentals/nametag.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTag": function() { return /* binding */ createTag; },
/* harmony export */   "generateLabel": function() { return /* binding */ generateLabel; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

function createTag(baseWidth, size, name) {
  const borderSize = 2;
  const ctx = document.createElement("canvas").getContext("2d");
  const font = `${size}px Verdana`;
  ctx.font = font; // measure how long the name will be

  const textWidth = ctx.measureText(name).width;
  const doubleBorderSize = borderSize * 2;
  const width = baseWidth + doubleBorderSize;
  const height = size + doubleBorderSize;
  ctx.canvas.width = width;
  ctx.canvas.height = height; // need to set font again after resizing canvas

  ctx.font = font;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center"; //ctx.fillStyle = 'blue';
  //ctx.fillRect(0, 0, width, height);
  // scale to fit but don't stretch

  const scaleFactor = Math.min(1, baseWidth / textWidth);
  ctx.translate(width / 2, height / 2);
  ctx.scale(scaleFactor, 1);
  ctx.fillStyle = "white";
  ctx.fillText(name, 0, 0);
  return ctx.canvas;
}
function generateLabel(name, group) {
  const canvas = createTag(300, 32, name);
  const texture = new three__WEBPACK_IMPORTED_MODULE_0__.CanvasTexture(canvas); // because our canvas is likely not a power of 2
  // in both dimensions set the filtering appropriately.

  texture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__.LinearFilter;
  texture.wrapS = three__WEBPACK_IMPORTED_MODULE_0__.ClampToEdgeWrapping;
  texture.wrapT = three__WEBPACK_IMPORTED_MODULE_0__.ClampToEdgeWrapping;
  const labelMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.SpriteMaterial({
    map: texture,
    transparent: true
  }); // if units are meters then 0.01 here makes size
  // of the label into centimeters.

  const labelBaseScale = 0.01;
  const label = new three__WEBPACK_IMPORTED_MODULE_0__.Sprite(labelMaterial);
  group.add(label);
  label.position.y = 1;
  label.scale.x = canvas.width * labelBaseScale;
  label.scale.y = canvas.height * labelBaseScale;
  return group;
}

/***/ }),

/***/ "./components/gameFundalmentals/planeHandler/MainPlane.js":
/*!****************************************************************!*\
  !*** ./components/gameFundalmentals/planeHandler/MainPlane.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakePlane": function() { return /* binding */ MakePlane; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Algorithms/degToRad */ "./components/Algorithms/degToRad.js");
/* harmony import */ var _Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Core-API/3dModelHandlers/GLBLoader */ "./components/Core-API/3dModelHandlers/GLBLoader.js");
/* harmony import */ var _Core_API_gemotryManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Core-API/gemotryManager */ "./components/Core-API/gemotryManager.js");
/* harmony import */ var _Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Core-API/LightingManager */ "./components/Core-API/LightingManager.js");
/* harmony import */ var _Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Core-API/RenderingHandler */ "./components/Core-API/RenderingHandler.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controls */ "./components/gameFundalmentals/controls.js");
/* harmony import */ var _DayNightCycle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DayNightCycle */ "./components/gameFundalmentals/DayNightCycle.js");








class MakePlane {
  constructor(SceneToGet, settings) {
    this.SceneToGet = SceneToGet;
    this.settings = settings;
    this.group = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
    this.speed = 0;
    this.elevatorPitch = 0;
    this.airelonePitch = 0;
    this.rudderPitch = 0;
    this.checker = -1;
  }

  async loadFiles() {
    this.plane = await (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_2__.addGLBFile)("/Aircraft/BasicPlane/Plane.glb", this.SceneToGet);
    this.props = await (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_2__.addGLBFile)("/Aircraft/BasicPlane/Blades.glb", this.SceneToGet);
    this.leftAirelone = await (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_2__.addGLBFile)("/Aircraft/BasicPlane/LeftAirelone.glb", this.SceneToGet);
    this.rightAirelone = await (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_2__.addGLBFile)("/Aircraft/BasicPlane/RightAirelone.glb", this.SceneToGet);
    this.leftControlSurface = await (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_2__.addGLBFile)("/Aircraft/BasicPlane/LeftWingControlsSurface.glb", this.SceneToGet);
    this.rightControlSurface = await (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_2__.addGLBFile)("/Aircraft/BasicPlane/RightWingControlsSurface.glb", this.SceneToGet);
    this.rudder = await (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_2__.addGLBFile)("/Aircraft/BasicPlane/Rudder.glb", this.SceneToGet);
  }

  CreateGroupAndPos() {
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
    this.leftControlSurface.scene.rotateY((0,_Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_1__.radiants)(-7));
    this.rightControlSurface.scene.position.set(-46.2718, 22.5411, -13.5447);
    this.rightControlSurface.scene.rotateY((0,_Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_1__.radiants)(6.8));
    this.rightControlSurface.scene.rotateZ((0,_Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_1__.radiants)(-3.5)); //this.rightControlSurface.scene.rotateX(radiants(183.57))

    this.rudder.scene.position.set(-0.022, 24.67, -68.17);
    this.rudder.scene.rotateX((0,_Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_1__.radiants)(-22));
    this.props.scene.position.set(0, 15, 22);
    this.SceneToGet.add(this.group);
    this.group.scale.set(0.05, 0.05, 0.05);
    let [props, leftAirelone] = [this.props.scene, this.leftAirelone.scene]; // For testing \\

    let light = (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_4__.createPointLight)(0xff0000, 3, [60, 22.5, -10], 2.5);
    let light2 = (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_4__.createPointLight)(0x00ff00, 3, [-60, 22.5, -10], 2.5);
    let whiteLight = (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_4__.createPointLight)(0xffffff, 3, [0, 30, -60], 2.5);
    let day = true;
    this.group.add(light);
    this.group.add(light2);
    setInterval(() => {
      if ((0,_DayNightCycle__WEBPACK_IMPORTED_MODULE_7__.getDayState)() === false && day === true) {
        day = false;
        this.group.add(light);
        this.group.add(light2);
      } else if ((0,_DayNightCycle__WEBPACK_IMPORTED_MODULE_7__.getDayState)() === true && day === false) {
        day = true;
        this.group.remove(light);
        this.group.remove(light2);
      }
    }, 1000);
    let currentEvelatorPitch = 0;
    let airelonePitch = 0;
    let rudderPitch = 0;
    (0,_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_5__.addToRenderSequence)("Main", () => {
      let direction = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
      this.group.getWorldDirection(direction);
      this.group.position.add(direction.multiplyScalar(this.speed)); //this.group.position.z += this.speed;

      props.rotateZ(this.speed);

      if (currentEvelatorPitch < this.elevatorPitch) {
        this.leftAirelone.scene.rotateX(-0.01);
        this.rightAirelone.scene.rotateX(-0.01);
        currentEvelatorPitch += 0.01; //if(this.speed < 0.4)return

        this.group.rotateX(currentEvelatorPitch / 50 * this.speed);
      } else if (currentEvelatorPitch > this.elevatorPitch) {
        this.leftAirelone.scene.rotateX(0.01);
        this.rightAirelone.scene.rotateX(0.01);
        currentEvelatorPitch -= 0.01; //if(this.speed < 0.4)return

        this.group.rotateX(currentEvelatorPitch / 50 * this.speed);
      }

      if (airelonePitch < this.airelonePitch) {
        this.leftControlSurface.scene.rotateX(0.01);
        this.rightControlSurface.scene.rotateX(-0.01);
        airelonePitch += 0.01; //if(this.speed < 0.4)return

        this.group.rotateZ(-airelonePitch / 50 * this.speed);
      } else if (airelonePitch > this.airelonePitch) {
        this.leftControlSurface.scene.rotateX(-0.01);
        this.rightControlSurface.scene.rotateX(0.01);
        airelonePitch -= 0.01; //if(this.speed < 0.4)return

        this.group.rotateZ(-airelonePitch / 50 * this.speed);
      }

      if (rudderPitch < this.rudderPitch) {
        this.rudder.scene.rotateY(-0.01);
        rudderPitch += 0.01; //if(this.speed < 0.4)return

        this.group.rotateY(rudderPitch / 50 * this.speed);
      } else if (rudderPitch > this.rudderPitch) {
        this.rudder.scene.rotateY(0.01);
        rudderPitch -= 0.01; //if(this.speed < 0.4)return

        this.group.rotateY(rudderPitch / 50 * this.speed);
      }
    }, false);
    return this.group;
  }

  attachCameraAndControl(Camera) {
    this.UUID = (0,_controls__WEBPACK_IMPORTED_MODULE_6__.listenToConrols)(({
      wKey,
      aKey,
      sKey,
      dKey,
      upKey,
      downKey,
      eKey,
      qKey,
      shiftKey,
      zKey,
      xKey
    }) => {
      if (zKey) {
        if (this.speed < 3) {
          this.speed += 0.01;
        }
      }

      if (xKey) {
        if (this.speed > 0) {
          this.speed -= 0.01;
        }
      }

      if (wKey) {
        this.elevatorPitch = 0.5;
      } else if (sKey) {
        this.elevatorPitch = -0.5;
      } else {
        this.elevatorPitch = 0;
      }

      if (qKey) {
        this.rudderPitch = 0.3;
      } else if (eKey) {
        this.rudderPitch = -0.3;
      } else {
        this.rudderPitch = 0;
      }

      if (aKey) {
        this.airelonePitch = 0.5;
      } else if (dKey) {
        this.airelonePitch = -0.5;
      } else {
        this.airelonePitch = 0;
      }
    });
    this.group.add(Camera);
    Camera.position.set(0, 40, -100);
    Camera.rotateY((0,_Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_1__.radiants)(180));
    Camera.rotateX((0,_Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_1__.radiants)(-20));
  }

  cleanUp() {
    if (this.UUID !== undefined) {
      CleanUpListener(this.UUID);
    }

    this.group.remove();

    if (this.checker !== -1) {
      (0,_DayNightCycle__WEBPACK_IMPORTED_MODULE_7__.removeFromDayTimeHook)(this.checker);
    }

    return {
      success: true
    };
  }

}

/***/ }),

/***/ "./components/gameFundalmentals/rotateAroundPoint.js":
/*!***********************************************************!*\
  !*** ./components/gameFundalmentals/rotateAroundPoint.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rotateAboutPoint": function() { return /* binding */ rotateAboutPoint; }
/* harmony export */ });
function rotateAboutPoint(obj, point, axis, theta, pointIsWorld) {
  pointIsWorld = pointIsWorld ? pointIsWorld : false;

  if (pointIsWorld) {
    obj.parent.localToWorld(obj.position);
  }

  obj.position.sub(point);
  obj.position.applyAxisAngle(axis, theta);
  obj.position.add(point);

  if (pointIsWorld) {
    obj.parent.worldToLocal(obj.position);
  }

  obj.rotateOnAxis(axis, theta);
  return theta;
}

/***/ }),

/***/ "./components/gameFundalmentals/stars.js":
/*!***********************************************!*\
  !*** ./components/gameFundalmentals/stars.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomStarField": function() { return /* binding */ getRandomStarField; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

function getRandomStarField(numberOfStars, width, height) {
  var canvas = document.createElement("CANVAS");
  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  for (var i = 0; i < numberOfStars; ++i) {
    var radius = Math.random() * 2;
    var x = Math.floor(Math.random() * width);
    var y = Math.floor(Math.random() * height);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "white";
    ctx.fill();
  }

  var texture = new three__WEBPACK_IMPORTED_MODULE_0__.Texture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/***/ }),

/***/ "./components/gameFundalmentals/staticAssets/treeBuilder.js":
/*!******************************************************************!*\
  !*** ./components/gameFundalmentals/staticAssets/treeBuilder.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateTrees": function() { return /* binding */ GenerateTrees; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Algorithms/degToRad */ "./components/Algorithms/degToRad.js");
/* harmony import */ var _Algorithms_meshMerger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Algorithms/meshMerger.js */ "./components/Algorithms/meshMerger.js");
/* harmony import */ var _Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Algorithms/VectorUtils */ "./components/Algorithms/VectorUtils.js");
/* harmony import */ var _Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Core-API/3dModelHandlers/GLBLoader */ "./components/Core-API/3dModelHandlers/GLBLoader.js");
/* harmony import */ var _Core_API_3dModelHandlers_MeshMerger_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Core-API/3dModelHandlers/MeshMerger.ts */ "./components/Core-API/3dModelHandlers/MeshMerger.ts");
/* harmony import */ var _ProceduleTerrain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ProceduleTerrain */ "./components/gameFundalmentals/ProceduleTerrain.js");








function placeTree(tree, intersects, randomVec) {
  let newTree = tree.scene.clone();
  newTree.rotateY((0,_Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_1__.radiants)(Math.random() * 360));
  let point = intersects;
  newTree.position.set(randomVec.x, point, randomVec.z);
  return {
    newTree,
    vetor: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(randomVec.x, point, randomVec.z)
  };
}

async function GenerateTrees(num, scene, start, bounds, seed, gain, divisor) {
  let tree = await (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_4__.addGLBFile)("/Assets/PineTree.glb", scene);
  let snowyTree = await (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_4__.addGLBFile)("/Assets/SnowyPineTree.glb", scene);
  let palmTree = await (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_4__.addGLBFile)("/Assets/Palm_Tree.glb", scene);
  let leaves = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
    color: 0x694b37
  });
  let brighLeaves = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
    color: 0x6F9940
  });
  let trunk = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
    color: 0x216734
  });
  let snowy = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
    color: 0xffffff
  });
  tree.scene.children[0].material = leaves;
  tree.scene.children[1].material = trunk;
  snowyTree.scene.children[0].material = leaves;
  snowyTree.scene.children[1].material = trunk;
  snowyTree.scene.children[2].material = snowy;
  let newpalmTree = palmTree.scene.children[0];
  newpalmTree.children[0].material = trunk;
  newpalmTree.children[1].material = brighLeaves;
  newpalmTree.children[2].material = brighLeaves;
  tree.scene.scale.set(3, 3, 3);
  snowyTree.scene.scale.set(3, 3, 3);
  palmTree.scene.scale.set(4, 4, 4);

  for (let i = 0; i < num; i++) {
    let randomVector = (0,_Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_3__.randomVectorBetweenPoints2D)(start, bounds);
    randomVector.y = 50;
    let height = (0,_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_6__.getTerrainHeight)(randomVector, seed, gain, divisor, scene);

    if (height > 80 && height < 200) {
      let placeTreeOut = placeTree(snowyTree, height, randomVector);
      scene.add(placeTreeOut.newTree);
    } else if (height < 80 && height > 8) {
      let placeTreeOut = placeTree(tree, height, randomVector);
      scene.add(placeTreeOut.newTree);
    } else if (height > 5) {
      let placeTreeOut = placeTree(palmTree, height, randomVector);
      scene.add(placeTreeOut.newTree);
    }
  }
}

/***/ }),

/***/ "./components/gameUI/gameFeed.js":
/*!***************************************!*\
  !*** ./components/gameUI/gameFeed.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUI": function() { return /* binding */ CreateUI; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core-API/ConnectAPI */ "./components/Core-API/ConnectAPI.js");
/* harmony import */ var _gameFundalmentals_multiplayer_MainPlayerHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gameFundalmentals/multiplayer/MainPlayerHandler */ "./components/gameFundalmentals/multiplayer/MainPlayerHandler.js");

var _jsxFileName = "H:\\Desktop\\code\\Harvey-Randall-Alevel-Project\\components\\gameUI\\gameFeed.js";




function CreateUI() {
  let {
    0: gamefeed,
    1: setGameFeed
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_2__.listenToEvent)("NewPlayer", (id, data) => {});
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    children: "Hello"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 12
  }, this);
}

/***/ }),

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Context_socketioContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Context/socketioContext */ "./components/Context/socketioContext.js");
/* harmony import */ var _components_gameFundalmentals_nametag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/gameFundalmentals/nametag */ "./components/gameFundalmentals/nametag.js");
/* harmony import */ var _components_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Core-API/ConnectAPI */ "./components/Core-API/ConnectAPI.js");
/* harmony import */ var _components_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Core-API/RenderingHandler */ "./components/Core-API/RenderingHandler.js");
/* harmony import */ var _components_Scenes_MainSceneHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Scenes/MainSceneHandler */ "./components/Scenes/MainSceneHandler.js");
/* harmony import */ var _components_gameUI_gameFeed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/gameUI/gameFeed */ "./components/gameUI/gameFeed.js");
/* harmony import */ var _components_gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/gameFundalmentals/controls */ "./components/gameFundalmentals/controls.js");
/* harmony import */ var _components_Core_API_gemotryManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Core-API/gemotryManager */ "./components/Core-API/gemotryManager.js");
/* harmony import */ var _components_gameFundalmentals_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/gameFundalmentals/ProceduleTerrain */ "./components/gameFundalmentals/ProceduleTerrain.js");

var _jsxFileName = "H:\\Desktop\\code\\Harvey-Randall-Alevel-Project\\pages\\test.js";
// Written By Harvey Randall \\





var Stats = __webpack_require__(/*! stats.js */ "stats.js");










function render() {
  var _ref;

  const {
    0: child,
    1: setChild
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: gameEventData,
    1: setGameEventData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: day,
    1: setDay
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("not day");
  const {
    0: child2,
    1: setChild2
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const socket = (0,_components_Context_socketioContext__WEBPACK_IMPORTED_MODULE_3__.useAppContext)();
  ;
  const {
    0: recievedSeed,
    1: setSeed
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: rendered,
    1: setRendered
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: clients,
    1: setClients
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: personData,
    1: setPersonalData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: positon,
    1: setPosition
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_2__.Vector3().toArray());
  (0,_components_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_5__.startSeverClientCommunication)(socket);
  socket.once("welcome", (seed, client, data) => {
    setSeed(seed);
    setClients(client);
    setPersonalData(data);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof child === "undefined" || typeof recievedSeed === "undefined" || rendered === true) {
      return;
    }

    setRendered(true);
    let stats = new Stats();
    stats.showPanel(2);
    document.body.appendChild(stats.dom);
    let SceneToGet = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();
    let Renders = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({
      antialias: true,
      alpha: true,
      ogarithmicDepthBuffer: true
    });
    Renders.setClearColor("#87ceeb", 1);
    let fog = new three__WEBPACK_IMPORTED_MODULE_2__.Fog(0xDCDBDF, 10, 100000);
    SceneToGet.fog = fog;
    Renders.setSize(window.innerWidth, window.innerHeight);
    child.appendChild(Renders.domElement);
    let CurrentScene = "Main";
    var Camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000000);
    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {
      Camera.aspect = window.innerWidth / window.innerHeight;
      Camera.updateProjectionMatrix();
      Renders.setSize(window.innerWidth, window.innerHeight);
    }

    (0,_components_Scenes_MainSceneHandler__WEBPACK_IMPORTED_MODULE_7__.generateMainScene)(SceneToGet, Renders, document, recievedSeed, child2, Camera);
    Renders.domElement.requestPointerLock();
    (0,_components_gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_9__.ControlEventListener)(document, child2);
    let players = [];

    function makeCube(color = "rgb(0,0,0)", name = "unkown") {
      const group = new three__WEBPACK_IMPORTED_MODULE_2__.Group();
      const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(1, 1, 1);
      const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshLambertMaterial({
        color: new three__WEBPACK_IMPORTED_MODULE_2__.Color(color),
        emissive: new three__WEBPACK_IMPORTED_MODULE_2__.Color(color)
      });
      const cube = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);
      group.add(cube);
      const cyclinder = new three__WEBPACK_IMPORTED_MODULE_2__.CylinderGeometry(0.3, 0.3, 0.6, 30);
      const material2 = new three__WEBPACK_IMPORTED_MODULE_2__.MeshLambertMaterial({
        color: "#000000"
      });
      const cylinderBuild = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(cyclinder, material2);
      cylinderBuild.rotateX(Math.PI / 2 + Math.PI);
      cylinderBuild.position.set(0, 0, -0.6);
      group.add(cylinderBuild);
      (0,_components_gameFundalmentals_nametag__WEBPACK_IMPORTED_MODULE_4__.generateLabel)(name, group);
      SceneToGet.add(group);
      group.name = name;
      return group;
    }

    let prevData = [];

    let addtoGameFeed = (name = "Unkown", event) => {
      let NewGameEventArray = [...gameEventData];
      NewGameEventArray.unshift({
        name,
        event
      });
      delete NewGameEventArray[10];
      delete NewGameEventArray[11];
      setGameEventData([...NewGameEventArray]);
      prevData = NewGameEventArray;
    };

    clients.forEach(e => {
      let cube = makeCube(e.color, e.name);
      players[`${e}`] = cube;
    });
    socket.on("NewPlayer", (id, data) => {
      let cube = makeCube(data.color, data.name);
      addtoGameFeed(data === null || data === void 0 ? void 0 : data.name, "Joined the game!");
      players[`${id}`] = cube;
    });
    socket.on("LostPLayer", (id, how, data) => {
      let cube = players[`${id}`];
      SceneToGet.remove(cube);
      delete players[`${id}`];
      addtoGameFeed(data === null || data === void 0 ? void 0 : data.name, how === true ? "Was removed from the game for being inactive" : "Left the game!");
    });
    (0,_components_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_5__.listenToEvent)("PlayerLocationUpdate", (id, pos, rot, data) => {
      let cube = players[`${id}`];

      if (cube) {
        cube.rotation.set(rot._x, rot._y, rot._z);
        cube.position.set(pos.x, pos.y, pos.z);
      } else {
        let cube = makeCube(data === null || data === void 0 ? void 0 : data.color, data === null || data === void 0 ? void 0 : data.name);
        players[`${id}`] = cube;
      }
    });
    socket.on("NewChat", (data, text) => {
      addtoGameFeed(data.name, text);
    });
    setInterval(() => {
      let vector = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3();
      Camera.getWorldPosition(vector);
      socket.emit("LocationUpdate", vector, Camera.rotation);
    }, 10);

    var animate = async function () {
      stats.begin();
      requestAnimationFrame(animate); // Update all moving parts

      (0,_components_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_6__.updateRenderCycle)(CurrentScene);
      setPosition(`X: ${Math.round(Camera.position.x)}} Y: ${Math.round(Camera.position.y)}} Z: ${Math.round(Camera.position.z)}}`);
      Renders.render(SceneToGet, Camera);
      stats.end();
    };

    animate();
  }, [child, clients]);

  let sendChat = e => {
    e.preventDefault();
    socket.emit("sendChat", child2.value);
    child2.value = "";
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      style: {
        position: "fixed",
        marginTop: "40px",
        color: "white"
      },
      children: typeof personData === "undefined" ? "LOADING..." : personData.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: "100vw",
        height: "100vh",
        position: "fixed",
        marginTop: "80px"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gameUI_gameFeed__WEBPACK_IMPORTED_MODULE_8__.CreateUI, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: ["Pos: ", positon]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: sendChat,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          ref: ref => setChild2(ref)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 17
      }, this), [...gameEventData].map(e => {
        if (typeof e === "undefined") {
          return;
        }

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          style: {
            color: "white"
          },
          children: [e.name, " - ", e.event]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 25
        }, this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 13
    }, this), (_ref = typeof recievedSeed === "undefined") !== null && _ref !== void 0 ? _ref : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "LOADING SEED!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 53
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: ref => setChild(ref)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: ref => setChild(ref)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 211,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./node_modules/socket.io-client/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/socket.io-client/build/index.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Socket = exports.io = exports.Manager = exports.protocol = void 0;
const url_1 = __webpack_require__(/*! ./url */ "./node_modules/socket.io-client/build/url.js");
const manager_1 = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/build/manager.js");
const socket_1 = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/build/socket.js");
Object.defineProperty(exports, "Socket", ({ enumerable: true, get: function () { return socket_1.Socket; } }));
const debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/index.js")("socket.io-client");
/**
 * Module exports.
 */
module.exports = exports = lookup;
/**
 * Managers cache.
 */
const cache = (exports.managers = {});
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {};
    const parsed = url_1.url(uri, opts.path);
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew ||
        opts["force new connection"] ||
        false === opts.multiplex ||
        sameNamespace;
    let io;
    if (newConnection) {
        debug("ignoring socket cache for %s", source);
        io = new manager_1.Manager(source, opts);
    }
    else {
        if (!cache[id]) {
            debug("new io instance for %s", source);
            cache[id] = new manager_1.Manager(source, opts);
        }
        io = cache[id];
    }
    if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
}
exports.io = lookup;
/**
 * Protocol version.
 *
 * @public
 */
var socket_io_parser_1 = __webpack_require__(/*! socket.io-parser */ "socket.io-parser");
Object.defineProperty(exports, "protocol", ({ enumerable: true, get: function () { return socket_io_parser_1.protocol; } }));
/**
 * `connect`.
 *
 * @param {String} uri
 * @public
 */
exports.connect = lookup;
/**
 * Expose constructors for standalone build.
 *
 * @public
 */
var manager_2 = __webpack_require__(/*! ./manager */ "./node_modules/socket.io-client/build/manager.js");
Object.defineProperty(exports, "Manager", ({ enumerable: true, get: function () { return manager_2.Manager; } }));
exports.default = lookup;


/***/ }),

/***/ "./node_modules/socket.io-client/build/manager.js":
/*!********************************************************!*\
  !*** ./node_modules/socket.io-client/build/manager.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Manager = void 0;
const eio = __webpack_require__(/*! engine.io-client */ "engine.io-client");
const socket_1 = __webpack_require__(/*! ./socket */ "./node_modules/socket.io-client/build/socket.js");
const parser = __webpack_require__(/*! socket.io-parser */ "socket.io-parser");
const on_1 = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/build/on.js");
const Backoff = __webpack_require__(/*! backo2 */ "backo2");
const typed_events_1 = __webpack_require__(/*! ./typed-events */ "./node_modules/socket.io-client/build/typed-events.js");
const debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/index.js")("socket.io-client:manager");
class Manager extends typed_events_1.StrictEventEmitter {
    constructor(uri, opts) {
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor(opts.randomizationFactor || 0.5);
        this.backoff = new Backoff({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor(),
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || parser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect)
            this.open();
    }
    reconnection(v) {
        if (!arguments.length)
            return this._reconnection;
        this._reconnection = !!v;
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined)
            return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined)
            return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length)
            return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting &&
            this._reconnection &&
            this.backoff.attempts === 0) {
            // keeps reconnection from firing twice for the same reconnection loop
            this.reconnect();
        }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(fn) {
        debug("readyState %s", this._readyState);
        if (~this._readyState.indexOf("open"))
            return this;
        debug("opening %s", this.uri);
        this.engine = eio(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = on_1.on(socket, "open", function () {
            self.onopen();
            fn && fn();
        });
        // emit `error`
        const errorSub = on_1.on(socket, "error", (err) => {
            debug("error");
            self.cleanup();
            self._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) {
                fn(err);
            }
            else {
                // Only do this if there is no fn to handle the error
                self.maybeReconnectOnOpen();
            }
        });
        if (false !== this._timeout) {
            const timeout = this._timeout;
            debug("connect attempt will timeout after %d", timeout);
            if (timeout === 0) {
                openSubDestroy(); // prevents a race condition with the 'open' event
            }
            // set timer
            const timer = setTimeout(() => {
                debug("connect attempt timed out after %d", timeout);
                openSubDestroy();
                socket.close();
                socket.emit("error", new Error("timeout"));
            }, timeout);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
    onopen() {
        debug("open");
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push(on_1.on(socket, "ping", this.onping.bind(this)), on_1.on(socket, "data", this.ondata.bind(this)), on_1.on(socket, "error", this.onerror.bind(this)), on_1.on(socket, "close", this.onclose.bind(this)), on_1.on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
    onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
    ondata(data) {
        this.decoder.add(data);
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet) {
        this.emitReserved("packet", packet);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
    onerror(err) {
        debug("error", err);
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new socket_1.Socket(this, nsp, opts);
            this.nsps[nsp] = socket;
        }
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps) {
            const socket = this.nsps[nsp];
            if (socket.active) {
                debug("socket %s is still active, skipping close", nsp);
                return;
            }
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(packet) {
        debug("writing packet %j", packet);
        const encodedPackets = this.encoder.encode(packet);
        for (let i = 0; i < encodedPackets.length; i++) {
            this.engine.write(encodedPackets[i], packet.options);
        }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    cleanup() {
        debug("cleanup");
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
    _close() {
        debug("disconnect");
        this.skipReconnect = true;
        this._reconnecting = false;
        if ("opening" === this._readyState) {
            // `onclose` will not fire because
            // an open event never happened
            this.cleanup();
        }
        this.backoff.reset();
        this._readyState = "closed";
        if (this.engine)
            this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */
    disconnect() {
        return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */
    onclose(reason) {
        debug("onclose");
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason);
        if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
        }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            debug("reconnect failed");
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        }
        else {
            const delay = this.backoff.duration();
            debug("will wait %dms before reconnect attempt", delay);
            this._reconnecting = true;
            const timer = setTimeout(() => {
                if (self.skipReconnect)
                    return;
                debug("attempting reconnect");
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect)
                    return;
                self.open((err) => {
                    if (err) {
                        debug("reconnect attempt error");
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    }
                    else {
                        debug("reconnect success");
                        self.onreconnect();
                    }
                });
            }, delay);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}
exports.Manager = Manager;


/***/ }),

/***/ "./node_modules/socket.io-client/build/on.js":
/*!***************************************************!*\
  !*** ./node_modules/socket.io-client/build/on.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.on = void 0;
function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}
exports.on = on;


/***/ }),

/***/ "./node_modules/socket.io-client/build/socket.js":
/*!*******************************************************!*\
  !*** ./node_modules/socket.io-client/build/socket.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Socket = void 0;
const socket_io_parser_1 = __webpack_require__(/*! socket.io-parser */ "socket.io-parser");
const on_1 = __webpack_require__(/*! ./on */ "./node_modules/socket.io-client/build/on.js");
const typed_events_1 = __webpack_require__(/*! ./typed-events */ "./node_modules/socket.io-client/build/typed-events.js");
const debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/index.js")("socket.io-client:socket");
/**
 * Internal events.
 * These events can't be emitted by the user.
 */
const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1,
});
class Socket extends typed_events_1.StrictEventEmitter {
    /**
     * `Socket` constructor.
     *
     * @public
     */
    constructor(io, nsp, opts) {
        super();
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.ids = 0;
        this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        this.ids = 0;
        this.acks = {};
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.connected = false;
        this.disconnected = true;
        this.flags = {};
        if (opts && opts.auth) {
            this.auth = opts.auth;
        }
        if (this.io._autoConnect)
            this.open();
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    subEvents() {
        if (this.subs)
            return;
        const io = this.io;
        this.subs = [
            on_1.on(io, "open", this.onopen.bind(this)),
            on_1.on(io, "packet", this.onpacket.bind(this)),
            on_1.on(io, "error", this.onerror.bind(this)),
            on_1.on(io, "close", this.onclose.bind(this)),
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects
     */
    get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @public
     */
    connect() {
        if (this.connected)
            return this;
        this.subEvents();
        if (!this.io["_reconnecting"])
            this.io.open(); // ensure open
        if ("open" === this.io._readyState)
            this.onopen();
        return this;
    }
    /**
     * Alias for connect()
     */
    open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * @return self
     * @public
     */
    send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @return self
     * @public
     */
    emit(ev, ...args) {
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
            throw new Error('"' + ev + '" is a reserved event name');
        }
        args.unshift(ev);
        const packet = {
            type: socket_io_parser_1.PacketType.EVENT,
            data: args,
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            debug("emitting packet with ack id %d", this.ids);
            this.acks[this.ids] = args.pop();
            packet.id = this.ids++;
        }
        const isTransportWritable = this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
        const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
        if (discardPacket) {
            debug("discard packet as the transport is not currently writable");
        }
        else if (this.connected) {
            this.packet(packet);
        }
        else {
            this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    onopen() {
        debug("transport is open - connecting");
        if (typeof this.auth == "function") {
            this.auth((data) => {
                this.packet({ type: socket_io_parser_1.PacketType.CONNECT, data });
            });
        }
        else {
            this.packet({ type: socket_io_parser_1.PacketType.CONNECT, data: this.auth });
        }
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    onerror(err) {
        if (!this.connected) {
            this.emitReserved("connect_error", err);
        }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @private
     */
    onclose(reason) {
        debug("close (%s)", reason);
        this.connected = false;
        this.disconnected = true;
        delete this.id;
        this.emitReserved("disconnect", reason);
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace)
            return;
        switch (packet.type) {
            case socket_io_parser_1.PacketType.CONNECT:
                if (packet.data && packet.data.sid) {
                    const id = packet.data.sid;
                    this.onconnect(id);
                }
                else {
                    this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                }
                break;
            case socket_io_parser_1.PacketType.EVENT:
                this.onevent(packet);
                break;
            case socket_io_parser_1.PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;
            case socket_io_parser_1.PacketType.ACK:
                this.onack(packet);
                break;
            case socket_io_parser_1.PacketType.BINARY_ACK:
                this.onack(packet);
                break;
            case socket_io_parser_1.PacketType.DISCONNECT:
                this.ondisconnect();
                break;
            case socket_io_parser_1.PacketType.CONNECT_ERROR:
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    onevent(packet) {
        const args = packet.data || [];
        debug("emitting event %j", args);
        if (null != packet.id) {
            debug("attaching ack callback to event");
            args.push(this.ack(packet.id));
        }
        if (this.connected) {
            this.emitEvent(args);
        }
        else {
            this.receiveBuffer.push(Object.freeze(args));
        }
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, args);
            }
        }
        super.emit.apply(this, args);
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    ack(id) {
        const self = this;
        let sent = false;
        return function (...args) {
            // prevent double callbacks
            if (sent)
                return;
            sent = true;
            debug("sending ack %j", args);
            self.packet({
                type: socket_io_parser_1.PacketType.ACK,
                id: id,
                data: args,
            });
        };
    }
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */
    onack(packet) {
        const ack = this.acks[packet.id];
        if ("function" === typeof ack) {
            debug("calling ack %s with %j", packet.id, packet.data);
            ack.apply(this, packet.data);
            delete this.acks[packet.id];
        }
        else {
            debug("bad ack %s", packet.id);
        }
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
    onconnect(id) {
        debug("socket connected with id %s", id);
        this.id = id;
        this.connected = true;
        this.disconnected = false;
        this.emitReserved("connect");
        this.emitBuffered();
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    emitBuffered() {
        this.receiveBuffer.forEach((args) => this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet) => this.packet(packet));
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    ondisconnect() {
        debug("server disconnect (%s)", this.nsp);
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy) => subDestroy());
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually.
     *
     * @return self
     * @public
     */
    disconnect() {
        if (this.connected) {
            debug("performing disconnect (%s)", this.nsp);
            this.packet({ type: socket_io_parser_1.PacketType.DISCONNECT });
        }
        // remove socket from pool
        this.destroy();
        if (this.connected) {
            // fire events
            this.onclose("io client disconnect");
        }
        return this;
    }
    /**
     * Alias for disconnect()
     *
     * @return self
     * @public
     */
    close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     * @public
     */
    compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @returns self
     * @public
     */
    get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @param listener
     * @public
     */
    onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     * @public
     */
    prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param listener
     * @public
     */
    offAny(listener) {
        if (!this._anyListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     *
     * @public
     */
    listenersAny() {
        return this._anyListeners || [];
    }
}
exports.Socket = Socket;


/***/ }),

/***/ "./node_modules/socket.io-client/build/typed-events.js":
/*!*************************************************************!*\
  !*** ./node_modules/socket.io-client/build/typed-events.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StrictEventEmitter = void 0;
const Emitter = __webpack_require__(/*! component-emitter */ "component-emitter");
/**
 * Strictly typed version of an `EventEmitter`. A `TypedEventEmitter` takes type
 * parameters for mappings of event names to event data types, and strictly
 * types method calls to the `EventEmitter` according to these event maps.
 *
 * @typeParam ListenEvents - `EventsMap` of user-defined events that can be
 * listened to with `on` or `once`
 * @typeParam EmitEvents - `EventsMap` of user-defined events that can be
 * emitted with `emit`
 * @typeParam ReservedEvents - `EventsMap` of reserved events, that can be
 * emitted by socket.io with `emitReserved`, and can be listened to with
 * `listen`.
 */
class StrictEventEmitter extends Emitter {
    /**
     * Adds the `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */
    on(ev, listener) {
        super.on(ev, listener);
        return this;
    }
    /**
     * Adds a one-time `listener` function as an event listener for `ev`.
     *
     * @param ev Name of the event
     * @param listener Callback function
     */
    once(ev, listener) {
        super.once(ev, listener);
        return this;
    }
    /**
     * Emits an event.
     *
     * @param ev Name of the event
     * @param args Values to send to listeners of this event
     */
    emit(ev, ...args) {
        super.emit(ev, ...args);
        return this;
    }
    /**
     * Emits a reserved event.
     *
     * This method is `protected`, so that only a class extending
     * `StrictEventEmitter` can emit its own reserved events.
     *
     * @param ev Reserved event name
     * @param args Arguments to emit along with the event
     */
    emitReserved(ev, ...args) {
        super.emit(ev, ...args);
        return this;
    }
    /**
     * Returns the listeners listening to an event.
     *
     * @param event Event name
     * @returns Array of listeners subscribed to `event`
     */
    listeners(event) {
        return super.listeners(event);
    }
}
exports.StrictEventEmitter = StrictEventEmitter;


/***/ }),

/***/ "./node_modules/socket.io-client/build/url.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-client/build/url.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.url = void 0;
const parseuri = __webpack_require__(/*! parseuri */ "parseuri");
const debug = __webpack_require__(/*! debug */ "./node_modules/socket.io-client/node_modules/debug/src/index.js")("socket.io-client:url");
/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || (typeof location !== "undefined" && location);
    if (null == uri)
        uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
                uri = loc.protocol + uri;
            }
            else {
                uri = loc.host + uri;
            }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            debug("protocol-less url %s", uri);
            if ("undefined" !== typeof loc) {
                uri = loc.protocol + "//" + uri;
            }
            else {
                uri = "https://" + uri;
            }
        }
        // parse
        debug("parse %s", uri);
        obj = parseuri(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
        }
        else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
        }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href =
        obj.protocol +
            "://" +
            host +
            (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}
exports.url = url;


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/socket.io-client/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/debug/src/common.js":
/*!************************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/debug/src/common.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/socket.io-client/node_modules/ms/index.js");
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => enableOverride === null ? createDebug.enabled(namespace) : enableOverride,
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/debug/src/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/debug/src/index.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || false === true || process.__nwjs) {
	module.exports = __webpack_require__(/*! ./browser.js */ "./node_modules/socket.io-client/node_modules/debug/src/browser.js");
} else {
	module.exports = __webpack_require__(/*! ./node.js */ "./node_modules/socket.io-client/node_modules/debug/src/node.js");
}


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/debug/src/node.js":
/*!**********************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/debug/src/node.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

const tty = __webpack_require__(/*! tty */ "tty");
const util = __webpack_require__(/*! util */ "util");

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __webpack_require__(/*! supports-color */ "supports-color");

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/socket.io-client/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ "./node_modules/socket.io-client/node_modules/ms/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/socket.io-client/node_modules/ms/index.js ***!
  \****************************************************************/
/***/ (function(module) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/socket.io-client/wrapper.mjs":
/*!***************************************************!*\
  !*** ./node_modules/socket.io-client/wrapper.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Manager": function() { return /* binding */ Manager; },
/* harmony export */   "io": function() { return /* reexport default export from named module */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__; }
/* harmony export */ });
/* harmony import */ var _build_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build/index.js */ "./node_modules/socket.io-client/build/index.js");


const Manager = _build_index_js__WEBPACK_IMPORTED_MODULE_0__.Manager;

/* harmony default export */ __webpack_exports__["default"] = (_build_index_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "backo2":
/*!*************************!*\
  !*** external "backo2" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("backo2");;

/***/ }),

/***/ "component-emitter":
/*!************************************!*\
  !*** external "component-emitter" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("component-emitter");;

/***/ }),

/***/ "engine.io-client":
/*!***********************************!*\
  !*** external "engine.io-client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("engine.io-client");;

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("joi");;

/***/ }),

/***/ "parseuri":
/*!***************************!*\
  !*** external "parseuri" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("parseuri");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "seedrandom":
/*!*****************************!*\
  !*** external "seedrandom" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("seedrandom");;

/***/ }),

/***/ "simplex-noise":
/*!********************************!*\
  !*** external "simplex-noise" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("simplex-noise");;

/***/ }),

/***/ "socket.io-parser":
/*!***********************************!*\
  !*** external "socket.io-parser" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("socket.io-parser");;

/***/ }),

/***/ "stats.js":
/*!***************************!*\
  !*** external "stats.js" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("stats.js");;

/***/ }),

/***/ "supports-color":
/*!*********************************!*\
  !*** external "supports-color" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("supports-color");;

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("three");;

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("tty");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/test.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9BbGdvcml0aG1zL01hdGhVdGlscy5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9BbGdvcml0aG1zL1ByaW9yaXR5UXVldWUuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvQWxnb3JpdGhtcy9WZWN0b3JNYXRocy50cyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9BbGdvcml0aG1zL1ZlY3RvclV0aWxzLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0FsZ29yaXRobXMvZGVnVG9SYWQuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvQWxnb3JpdGhtcy9tZXNoTWVyZ2VyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0NvbnRleHQvc29ja2V0aW9Db250ZXh0LmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9HTEJMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL01lc2hNZXJnZXIudHMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL2dsYkNvcmUuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL3V0aWxzLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0NvcmUtQVBJL0Nvbm5lY3RBUEkuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvQ29yZS1BUEkvTGlnaHRpbmdNYW5hZ2VyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0NvcmUtQVBJL1Blcmxpbk5vaXNlL1BlcmxpbmdOb2lzZS5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9Db3JlLUFQSS9SZW5kZXJpbmdIYW5kbGVyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0NvcmUtQVBJL1dvcmtlclNldHVwLnRzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0NvcmUtQVBJL2dlbW90cnlNYW5hZ2VyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL1NjZW5lcy9NYWluU2NlbmVIYW5kbGVyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL0RheU5pZ2h0Q3ljbGUuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvUHJvY2VkdWxlVGVycmFpbi5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC90ZXJyYWluQ2h1bmtyaXNlci5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC91dGlscy9HZW5lcmF0ZUJpb21lc01hcC50cyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9jbG91ZHMuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvbXVsdGlwbGF5ZXIvTWFpblBsYXllckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvbmFtZXRhZy5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9wbGFuZUhhbmRsZXIvTWFpblBsYW5lLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL3JvdGF0ZUFyb3VuZFBvaW50LmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL3N0YXJzLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL3N0YXRpY0Fzc2V0cy90cmVlQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9nYW1lVUkvZ2FtZUZlZWQuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL3BhZ2VzL3Rlc3QuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9tYW5hZ2VyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9vbi5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvc29ja2V0LmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC90eXBlZC1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL3VybC5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9ub2RlLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L3dyYXBwZXIubWpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvZXh0ZXJuYWwgXCJiYWNrbzJcIiIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxL2V4dGVybmFsIFwiY29tcG9uZW50LWVtaXR0ZXJcIiIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxL2V4dGVybmFsIFwiZW5naW5lLmlvLWNsaWVudFwiIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvZXh0ZXJuYWwgXCJqb2lcIiIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxL2V4dGVybmFsIFwicGFyc2V1cmlcIiIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS9leHRlcm5hbCBcInNlZWRyYW5kb21cIiIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxL2V4dGVybmFsIFwic2ltcGxleC1ub2lzZVwiIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvZXh0ZXJuYWwgXCJzb2NrZXQuaW8tcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS9leHRlcm5hbCBcInN0YXRzLmpzXCIiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS9leHRlcm5hbCBcInN1cHBvcnRzLWNvbG9yXCIiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS9leHRlcm5hbCBcInRocmVlXCIiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS9leHRlcm5hbCBcInR0eVwiIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvZXh0ZXJuYWwgXCJ1dGlsXCIiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6WyJyb3VuZG51bSIsIm51bSIsInRvTnVtIiwiTWF0aCIsInJvdW5kIiwid2FpdCIsInZhbCIsIlByb21pc2UiLCJyZXMiLCJyZWoiLCJzZXRUaW1lb3V0IiwidG9wIiwicGFyZW50IiwiaSIsImxlZnQiLCJyaWdodCIsIlByaW9yaXR5UXVldWUiLCJjb25zdHJ1Y3RvciIsImNvbXBhcmF0b3IiLCJhIiwiYiIsIl9oZWFwIiwiX2NvbXBhcmF0b3IiLCJzaXplIiwibGVuZ3RoIiwiaXNFbXB0eSIsInBlZWsiLCJwYXJzZUludCIsInB1c2giLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJfc2lmdFVwIiwicG9wIiwicG9wcGVkVmFsdWUiLCJib3R0b20iLCJfc3dhcCIsIl9zaWZ0RG93biIsInJlcGxhY2UiLCJyZXBsYWNlZFZhbHVlIiwiX2dyZWF0ZXIiLCJqIiwibm9kZSIsIm1heENoaWxkIiwiTXVsdGlwbHlWZWN0b3IyIiwidmVjdG9yIiwibXVsdGlwbGllciIsIlZlY3RvcjIiLCJ4IiwieSIsIk11bHRpcGx5VmVjdG9yMyIsIlZlY3RvcjMiLCJ6IiwicmFuZG9tSW50RnJvbUludGVydmFsIiwibWluIiwibWF4IiwibXlybmciLCJzZWVkcmFuZG9tIiwiZmxvb3IiLCJyYW5kb21WZWN0b3JCZXR3ZWVuUG9pbnRzMkQiLCJWZWN0b3IxIiwicmFkaWFudHMiLCJkZWdyZWVzIiwiUEkiLCJyYWRpYW5zIiwiX21lcmdlTWVzaGVzIiwibWVzaGVzIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCIsIm1hcCIsImUiLCJjaGlsZHJlbiIsImZsYXQiLCJpbnB1dEdlbyIsIkJ1ZmZlckdlb21ldHJ5VXRpbHMiLCJNZXNoIiwiTWVzaExhbWJlcnRNYXRlcmlhbCIsImNvbG9yIiwiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcHBXcmFwcGVyIiwic2hhcmVkU3RhdGUiLCJpbyIsInVzZUFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiYWRkR0xCRmlsZSIsIml0ZW0iLCJzY2VuZSIsInJlc29sdmUiLCJyZWplY3QiLCJsb2FkZXIiLCJHTFRGTG9hZGVyIiwibG9hZCIsImdsdGYiLCJhbmltYXRpb25zIiwic2NlbmVzIiwiY2FtZXJhcyIsImFzc2V0IiwieGhyIiwibG9hZGVkIiwidG90YWwiLCJlcnJvciIsIk1lcmdlTWVzaGVzIiwiaW5wdXQiLCJsb2NhdGlvbiIsImFwcGx5TWF0cml4NCIsIk1hdHJpeDQiLCJtYWtlVHJhbnNsYXRpb24iLCJidWZmZXJHZW9tIiwibWFuYWdlciIsIkxvYWRlciIsImRyYWNvTG9hZGVyIiwia3R4MkxvYWRlciIsIm1lc2hvcHREZWNvZGVyIiwicGx1Z2luQ2FsbGJhY2tzIiwicmVnaXN0ZXIiLCJwYXJzZXIiLCJHTFRGTWF0ZXJpYWxzQ2xlYXJjb2F0RXh0ZW5zaW9uIiwiR0xURlRleHR1cmVCYXNpc1VFeHRlbnNpb24iLCJHTFRGVGV4dHVyZVdlYlBFeHRlbnNpb24iLCJHTFRGTWF0ZXJpYWxzVHJhbnNtaXNzaW9uRXh0ZW5zaW9uIiwiR0xURkxpZ2h0c0V4dGVuc2lvbiIsIkdMVEZNZXNob3B0Q29tcHJlc3Npb24iLCJwcm90b3R5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJjcmVhdGUiLCJ1cmwiLCJvbkxvYWQiLCJvblByb2dyZXNzIiwib25FcnJvciIsInNjb3BlIiwicmVzb3VyY2VQYXRoIiwicGF0aCIsIkxvYWRlclV0aWxzIiwiaXRlbVN0YXJ0IiwiX29uRXJyb3IiLCJpdGVtRXJyb3IiLCJpdGVtRW5kIiwiRmlsZUxvYWRlciIsInNldFBhdGgiLCJzZXRSZXNwb25zZVR5cGUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVxdWVzdEhlYWRlciIsInNldFdpdGhDcmVkZW50aWFscyIsIndpdGhDcmVkZW50aWFscyIsImRhdGEiLCJwYXJzZSIsInNldERSQUNPTG9hZGVyIiwic2V0RERTTG9hZGVyIiwiRXJyb3IiLCJzZXRLVFgyTG9hZGVyIiwic2V0TWVzaG9wdERlY29kZXIiLCJjYWxsYmFjayIsImluZGV4T2YiLCJ1bnJlZ2lzdGVyIiwic3BsaWNlIiwiY29udGVudCIsImV4dGVuc2lvbnMiLCJwbHVnaW5zIiwibWFnaWMiLCJVaW50OEFycmF5IiwiQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTUFHSUMiLCJFWFRFTlNJT05TIiwiS0hSX0JJTkFSWV9HTFRGIiwiR0xURkJpbmFyeUV4dGVuc2lvbiIsImpzb24iLCJKU09OIiwidW5kZWZpbmVkIiwidmVyc2lvbiIsIkdMVEZQYXJzZXIiLCJjcm9zc09yaWdpbiIsImZpbGVMb2FkZXIiLCJwbHVnaW4iLCJuYW1lIiwiZXh0ZW5zaW9uc1VzZWQiLCJleHRlbnNpb25OYW1lIiwiZXh0ZW5zaW9uc1JlcXVpcmVkIiwiS0hSX01BVEVSSUFMU19VTkxJVCIsIkdMVEZNYXRlcmlhbHNVbmxpdEV4dGVuc2lvbiIsIktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1MiLCJHTFRGTWF0ZXJpYWxzUGJyU3BlY3VsYXJHbG9zc2luZXNzRXh0ZW5zaW9uIiwiS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT04iLCJHTFRGRHJhY29NZXNoQ29tcHJlc3Npb25FeHRlbnNpb24iLCJLSFJfVEVYVFVSRV9UUkFOU0ZPUk0iLCJHTFRGVGV4dHVyZVRyYW5zZm9ybUV4dGVuc2lvbiIsIktIUl9NRVNIX1FVQU5USVpBVElPTiIsIkdMVEZNZXNoUXVhbnRpemF0aW9uRXh0ZW5zaW9uIiwid2FybiIsInNldEV4dGVuc2lvbnMiLCJzZXRQbHVnaW5zIiwiR0xURlJlZ2lzdHJ5Iiwib2JqZWN0cyIsImdldCIsImtleSIsImFkZCIsIm9iamVjdCIsInJlbW92ZSIsInJlbW92ZUFsbCIsIktIUl9MSUdIVFNfUFVOQ1RVQUwiLCJLSFJfTUFURVJJQUxTX0NMRUFSQ09BVCIsIktIUl9NQVRFUklBTFNfVFJBTlNNSVNTSU9OIiwiS0hSX1RFWFRVUkVfQkFTSVNVIiwiRVhUX1RFWFRVUkVfV0VCUCIsIkVYVF9NRVNIT1BUX0NPTVBSRVNTSU9OIiwiY2FjaGUiLCJyZWZzIiwidXNlcyIsIl9tYXJrRGVmcyIsIm5vZGVEZWZzIiwibm9kZXMiLCJub2RlSW5kZXgiLCJub2RlTGVuZ3RoIiwibm9kZURlZiIsImxpZ2h0IiwiX2FkZE5vZGVSZWYiLCJfbG9hZExpZ2h0IiwibGlnaHRJbmRleCIsImNhY2hlS2V5IiwiZGVwZW5kZW5jeSIsImxpZ2h0RGVmcyIsImxpZ2h0cyIsImxpZ2h0RGVmIiwibGlnaHROb2RlIiwiQ29sb3IiLCJmcm9tQXJyYXkiLCJyYW5nZSIsInR5cGUiLCJEaXJlY3Rpb25hbExpZ2h0IiwidGFyZ2V0IiwicG9zaXRpb24iLCJzZXQiLCJQb2ludExpZ2h0IiwiZGlzdGFuY2UiLCJTcG90TGlnaHQiLCJzcG90IiwiaW5uZXJDb25lQW5nbGUiLCJvdXRlckNvbmVBbmdsZSIsImFuZ2xlIiwicGVudW1icmEiLCJkZWNheSIsImludGVuc2l0eSIsImNyZWF0ZVVuaXF1ZU5hbWUiLCJjcmVhdGVOb2RlQXR0YWNobWVudCIsInNlbGYiLCJ0aGVuIiwiX2dldE5vZGVSZWYiLCJnZXRNYXRlcmlhbFR5cGUiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImV4dGVuZFBhcmFtcyIsIm1hdGVyaWFsUGFyYW1zIiwibWF0ZXJpYWxEZWYiLCJwZW5kaW5nIiwib3BhY2l0eSIsIm1ldGFsbGljUm91Z2huZXNzIiwicGJyTWV0YWxsaWNSb3VnaG5lc3MiLCJBcnJheSIsImlzQXJyYXkiLCJiYXNlQ29sb3JGYWN0b3IiLCJhcnJheSIsImJhc2VDb2xvclRleHR1cmUiLCJhc3NpZ25UZXh0dXJlIiwiYWxsIiwibWF0ZXJpYWxJbmRleCIsIm1hdGVyaWFscyIsIk1lc2hQaHlzaWNhbE1hdGVyaWFsIiwiZXh0ZW5kTWF0ZXJpYWxQYXJhbXMiLCJleHRlbnNpb24iLCJjbGVhcmNvYXRGYWN0b3IiLCJjbGVhcmNvYXQiLCJjbGVhcmNvYXRUZXh0dXJlIiwiY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yIiwiY2xlYXJjb2F0Um91Z2huZXNzIiwiY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZSIsImNsZWFyY29hdE5vcm1hbFRleHR1cmUiLCJzY2FsZSIsImNsZWFyY29hdE5vcm1hbFNjYWxlIiwidHJhbnNtaXNzaW9uRmFjdG9yIiwidHJhbnNtaXNzaW9uIiwidHJhbnNtaXNzaW9uVGV4dHVyZSIsImxvYWRUZXh0dXJlIiwidGV4dHVyZUluZGV4IiwidGV4dHVyZURlZiIsInRleHR1cmVzIiwic291cmNlIiwiaW1hZ2VzIiwib3B0aW9ucyIsImxvYWRUZXh0dXJlSW1hZ2UiLCJpc1N1cHBvcnRlZCIsInRleHR1cmVMb2FkZXIiLCJ1cmkiLCJoYW5kbGVyIiwiZ2V0SGFuZGxlciIsImRldGVjdFN1cHBvcnQiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwib25sb2FkIiwib25lcnJvciIsImhlaWdodCIsImxvYWRCdWZmZXJWaWV3IiwiaW5kZXgiLCJidWZmZXJWaWV3IiwiYnVmZmVyVmlld3MiLCJleHRlbnNpb25EZWYiLCJidWZmZXIiLCJnZXREZXBlbmRlbmN5IiwiZGVjb2RlciIsInN1cHBvcnRlZCIsInJlYWR5IiwiYnl0ZU9mZnNldCIsImJ5dGVMZW5ndGgiLCJjb3VudCIsInN0cmlkZSIsImJ5dGVTdHJpZGUiLCJyZXN1bHQiLCJBcnJheUJ1ZmZlciIsImRlY29kZUdsdGZCdWZmZXIiLCJtb2RlIiwiZmlsdGVyIiwiQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIIiwiQklOQVJZX0VYVEVOU0lPTl9DSFVOS19UWVBFUyIsIkJJTiIsImJvZHkiLCJoZWFkZXJWaWV3IiwiRGF0YVZpZXciLCJoZWFkZXIiLCJzbGljZSIsImdldFVpbnQzMiIsImNodW5rQ29udGVudHNMZW5ndGgiLCJjaHVua1ZpZXciLCJjaHVua0luZGV4IiwiY2h1bmtMZW5ndGgiLCJjaHVua1R5cGUiLCJjb250ZW50QXJyYXkiLCJwcmVsb2FkIiwiZGVjb2RlUHJpbWl0aXZlIiwicHJpbWl0aXZlIiwiYnVmZmVyVmlld0luZGV4IiwiZ2x0ZkF0dHJpYnV0ZU1hcCIsImF0dHJpYnV0ZXMiLCJ0aHJlZUF0dHJpYnV0ZU1hcCIsImF0dHJpYnV0ZU5vcm1hbGl6ZWRNYXAiLCJhdHRyaWJ1dGVUeXBlTWFwIiwiYXR0cmlidXRlTmFtZSIsInRocmVlQXR0cmlidXRlTmFtZSIsIkFUVFJJQlVURVMiLCJ0b0xvd2VyQ2FzZSIsImFjY2Vzc29yRGVmIiwiYWNjZXNzb3JzIiwiY29tcG9uZW50VHlwZSIsIldFQkdMX0NPTVBPTkVOVF9UWVBFUyIsIm5vcm1hbGl6ZWQiLCJkZWNvZGVEcmFjb0ZpbGUiLCJnZW9tZXRyeSIsImF0dHJpYnV0ZSIsImV4dGVuZFRleHR1cmUiLCJ0ZXh0dXJlIiwidHJhbnNmb3JtIiwiY2xvbmUiLCJvZmZzZXQiLCJyb3RhdGlvbiIsInJlcGVhdCIsInRleENvb3JkIiwibmVlZHNVcGRhdGUiLCJHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbCIsInBhcmFtcyIsIk1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiaXNHTFRGU3BlY3VsYXJHbG9zc2luZXNzTWF0ZXJpYWwiLCJzcGVjdWxhck1hcFBhcnNGcmFnbWVudENodW5rIiwiam9pbiIsImdsb3NzaW5lc3NNYXBQYXJzRnJhZ21lbnRDaHVuayIsInNwZWN1bGFyTWFwRnJhZ21lbnRDaHVuayIsImdsb3NzaW5lc3NNYXBGcmFnbWVudENodW5rIiwibGlnaHRQaHlzaWNhbEZyYWdtZW50Q2h1bmsiLCJ1bmlmb3JtcyIsInNwZWN1bGFyIiwic2V0SGV4IiwiZ2xvc3NpbmVzcyIsInNwZWN1bGFyTWFwIiwiZ2xvc3NpbmVzc01hcCIsIl9leHRyYVVuaWZvcm1zIiwib25CZWZvcmVDb21waWxlIiwic2hhZGVyIiwidW5pZm9ybU5hbWUiLCJmcmFnbWVudFNoYWRlciIsImRlZmluZVByb3BlcnRpZXMiLCJ2IiwiZGVmaW5lcyIsIlVTRV9TUEVDVUxBUk1BUCIsIlVTRV9HTE9TU0lORVNTTUFQIiwiVVNFX1VWIiwibWV0YWxuZXNzIiwicm91Z2huZXNzIiwibWV0YWxuZXNzTWFwIiwicm91Z2huZXNzTWFwIiwic2V0VmFsdWVzIiwiY29weSIsInNwZWN1bGFyR2xvc3NpbmVzc1BhcmFtcyIsInBiclNwZWN1bGFyR2xvc3NpbmVzcyIsImRpZmZ1c2VGYWN0b3IiLCJkaWZmdXNlVGV4dHVyZSIsImVtaXNzaXZlIiwiZ2xvc3NpbmVzc0ZhY3RvciIsInNwZWN1bGFyRmFjdG9yIiwic3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSIsInNwZWNHbG9zc01hcERlZiIsImNyZWF0ZU1hdGVyaWFsIiwibWF0ZXJpYWwiLCJmb2ciLCJsaWdodE1hcCIsImxpZ2h0TWFwSW50ZW5zaXR5IiwiYW9NYXAiLCJhb01hcEludGVuc2l0eSIsImVtaXNzaXZlSW50ZW5zaXR5IiwiZW1pc3NpdmVNYXAiLCJidW1wTWFwIiwiYnVtcFNjYWxlIiwibm9ybWFsTWFwIiwibm9ybWFsTWFwVHlwZSIsIlRhbmdlbnRTcGFjZU5vcm1hbE1hcCIsIm5vcm1hbFNjYWxlIiwiZGlzcGxhY2VtZW50TWFwIiwiZGlzcGxhY2VtZW50U2NhbGUiLCJkaXNwbGFjZW1lbnRCaWFzIiwiYWxwaGFNYXAiLCJlbnZNYXAiLCJlbnZNYXBJbnRlbnNpdHkiLCJyZWZyYWN0aW9uUmF0aW8iLCJHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudCIsInBhcmFtZXRlclBvc2l0aW9ucyIsInNhbXBsZVZhbHVlcyIsInNhbXBsZVNpemUiLCJyZXN1bHRCdWZmZXIiLCJJbnRlcnBvbGFudCIsImNvcHlTYW1wbGVWYWx1ZV8iLCJ2YWx1ZVNpemUiLCJiZWZvcmVTdGFydF8iLCJhZnRlckVuZF8iLCJpbnRlcnBvbGF0ZV8iLCJpMSIsInQwIiwidCIsInQxIiwic3RyaWRlMiIsInN0cmlkZTMiLCJ0ZCIsInAiLCJwcCIsInBwcCIsIm9mZnNldDEiLCJvZmZzZXQwIiwiczIiLCJzMyIsInMwIiwiczEiLCJwMCIsIm0wIiwicDEiLCJtMSIsIldFQkdMX0NPTlNUQU5UUyIsIkZMT0FUIiwiRkxPQVRfTUFUMyIsIkZMT0FUX01BVDQiLCJGTE9BVF9WRUMyIiwiRkxPQVRfVkVDMyIsIkZMT0FUX1ZFQzQiLCJMSU5FQVIiLCJSRVBFQVQiLCJTQU1QTEVSXzJEIiwiUE9JTlRTIiwiTElORVMiLCJMSU5FX0xPT1AiLCJMSU5FX1NUUklQIiwiVFJJQU5HTEVTIiwiVFJJQU5HTEVfU1RSSVAiLCJUUklBTkdMRV9GQU4iLCJVTlNJR05FRF9CWVRFIiwiVU5TSUdORURfU0hPUlQiLCJJbnQ4QXJyYXkiLCJJbnQxNkFycmF5IiwiVWludDE2QXJyYXkiLCJVaW50MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsIldFQkdMX0ZJTFRFUlMiLCJOZWFyZXN0RmlsdGVyIiwiTGluZWFyRmlsdGVyIiwiTmVhcmVzdE1pcG1hcE5lYXJlc3RGaWx0ZXIiLCJMaW5lYXJNaXBtYXBOZWFyZXN0RmlsdGVyIiwiTmVhcmVzdE1pcG1hcExpbmVhckZpbHRlciIsIkxpbmVhck1pcG1hcExpbmVhckZpbHRlciIsIldFQkdMX1dSQVBQSU5HUyIsIkNsYW1wVG9FZGdlV3JhcHBpbmciLCJNaXJyb3JlZFJlcGVhdFdyYXBwaW5nIiwiUmVwZWF0V3JhcHBpbmciLCJXRUJHTF9UWVBFX1NJWkVTIiwiUE9TSVRJT04iLCJOT1JNQUwiLCJUQU5HRU5UIiwiVEVYQ09PUkRfMCIsIlRFWENPT1JEXzEiLCJDT0xPUl8wIiwiV0VJR0hUU18wIiwiSk9JTlRTXzAiLCJQQVRIX1BST1BFUlRJRVMiLCJ0cmFuc2xhdGlvbiIsIndlaWdodHMiLCJJTlRFUlBPTEFUSU9OIiwiQ1VCSUNTUExJTkUiLCJJbnRlcnBvbGF0ZUxpbmVhciIsIlNURVAiLCJJbnRlcnBvbGF0ZURpc2NyZXRlIiwiQUxQSEFfTU9ERVMiLCJPUEFRVUUiLCJNQVNLIiwiQkxFTkQiLCJyZXNvbHZlVVJMIiwidGVzdCIsImNyZWF0ZURlZmF1bHRNYXRlcmlhbCIsInRyYW5zcGFyZW50IiwiZGVwdGhUZXN0Iiwic2lkZSIsIkZyb250U2lkZSIsImFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSIsImtub3duRXh0ZW5zaW9ucyIsIm9iamVjdERlZiIsInVzZXJEYXRhIiwiZ2x0ZkV4dGVuc2lvbnMiLCJhc3NpZ25FeHRyYXNUb1VzZXJEYXRhIiwiZ2x0ZkRlZiIsImV4dHJhcyIsImFkZE1vcnBoVGFyZ2V0cyIsInRhcmdldHMiLCJoYXNNb3JwaFBvc2l0aW9uIiwiaGFzTW9ycGhOb3JtYWwiLCJpbCIsInBlbmRpbmdQb3NpdGlvbkFjY2Vzc29ycyIsInBlbmRpbmdOb3JtYWxBY2Nlc3NvcnMiLCJwZW5kaW5nQWNjZXNzb3IiLCJub3JtYWwiLCJtb3JwaFBvc2l0aW9ucyIsIm1vcnBoTm9ybWFscyIsIm1vcnBoQXR0cmlidXRlcyIsIm1vcnBoVGFyZ2V0c1JlbGF0aXZlIiwidXBkYXRlTW9ycGhUYXJnZXRzIiwibWVzaCIsIm1lc2hEZWYiLCJtb3JwaFRhcmdldEluZmx1ZW5jZXMiLCJ0YXJnZXROYW1lcyIsIm1vcnBoVGFyZ2V0RGljdGlvbmFyeSIsImNyZWF0ZVByaW1pdGl2ZUtleSIsInByaW1pdGl2ZURlZiIsImRyYWNvRXh0ZW5zaW9uIiwiZ2VvbWV0cnlLZXkiLCJpbmRpY2VzIiwiY3JlYXRlQXR0cmlidXRlc0tleSIsImF0dHJpYnV0ZXNLZXkiLCJrZXlzIiwic29ydCIsImFzc29jaWF0aW9ucyIsIk1hcCIsInByaW1pdGl2ZUNhY2hlIiwibWVzaENhY2hlIiwiY2FtZXJhQ2FjaGUiLCJsaWdodENhY2hlIiwibm9kZU5hbWVzVXNlZCIsImNyZWF0ZUltYWdlQml0bWFwIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSW1hZ2VCaXRtYXBMb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwic2V0Q3Jvc3NPcmlnaW4iLCJfaW52b2tlQWxsIiwiZXh0IiwiYmVmb3JlUm9vdCIsImdldERlcGVuZGVuY2llcyIsImRlcGVuZGVuY2llcyIsImFmdGVyUm9vdCIsImNhdGNoIiwic2tpbkRlZnMiLCJza2lucyIsIm1lc2hEZWZzIiwic2tpbkluZGV4Iiwic2tpbkxlbmd0aCIsImpvaW50cyIsImlzQm9uZSIsInNraW4iLCJpc1NraW5uZWRNZXNoIiwiY2FtZXJhIiwicmVmIiwiX2ludm9rZU9uZSIsImZ1bmMiLCJ1bnNoaWZ0IiwibG9hZFNjZW5lIiwibG9hZE5vZGUiLCJsb2FkTWVzaCIsImxvYWRBY2Nlc3NvciIsImxvYWRCdWZmZXIiLCJsb2FkTWF0ZXJpYWwiLCJsb2FkU2tpbiIsImxvYWRBbmltYXRpb24iLCJsb2FkQ2FtZXJhIiwiZGVmcyIsImRlZiIsImJ1ZmZlckluZGV4IiwiYnVmZmVyRGVmIiwiYnVmZmVycyIsImJ1ZmZlclZpZXdEZWYiLCJhY2Nlc3NvckluZGV4Iiwic3BhcnNlIiwicGVuZGluZ0J1ZmZlclZpZXdzIiwiaXRlbVNpemUiLCJUeXBlZEFycmF5IiwiZWxlbWVudEJ5dGVzIiwiQllURVNfUEVSX0VMRU1FTlQiLCJpdGVtQnl0ZXMiLCJidWZmZXJBdHRyaWJ1dGUiLCJpYlNsaWNlIiwiaWJDYWNoZUtleSIsImliIiwiSW50ZXJsZWF2ZWRCdWZmZXIiLCJJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSIsIkJ1ZmZlckF0dHJpYnV0ZSIsIml0ZW1TaXplSW5kaWNlcyIsIlNDQUxBUiIsIlR5cGVkQXJyYXlJbmRpY2VzIiwiYnl0ZU9mZnNldEluZGljZXMiLCJieXRlT2Zmc2V0VmFsdWVzIiwic3BhcnNlSW5kaWNlcyIsInNwYXJzZVZhbHVlcyIsInNldFgiLCJzZXRZIiwic2V0WiIsInNldFciLCJVUkwiLCJ3ZWJraXRVUkwiLCJzb3VyY2VVUkkiLCJpc09iamVjdFVSTCIsImhhc0FscGhhIiwibWltZVR5cGUiLCJjb2xvclR5cGUiLCJnZXRVaW50OCIsImJsb2IiLCJCbG9iIiwiY3JlYXRlT2JqZWN0VVJMIiwiaXNJbWFnZUJpdG1hcExvYWRlciIsImltYWdlQml0bWFwIiwiQ2FudmFzVGV4dHVyZSIsInJldm9rZU9iamVjdFVSTCIsImZsaXBZIiwiZm9ybWF0IiwiUkdCRm9ybWF0Iiwic2FtcGxlcnMiLCJzYW1wbGVyIiwibWFnRmlsdGVyIiwibWluRmlsdGVyIiwid3JhcFMiLCJ3cmFwVCIsIm1hcE5hbWUiLCJtYXBEZWYiLCJnbHRmUmVmZXJlbmNlIiwiYXNzaWduRmluYWxNYXRlcmlhbCIsInVzZVZlcnRleFRhbmdlbnRzIiwidGFuZ2VudCIsInVzZVZlcnRleENvbG9ycyIsInVzZUZsYXRTaGFkaW5nIiwidXNlU2tpbm5pbmciLCJ1c2VNb3JwaFRhcmdldHMiLCJ1c2VNb3JwaE5vcm1hbHMiLCJpc1BvaW50cyIsInV1aWQiLCJwb2ludHNNYXRlcmlhbCIsIlBvaW50c01hdGVyaWFsIiwiTWF0ZXJpYWwiLCJzaXplQXR0ZW51YXRpb24iLCJpc0xpbmUiLCJsaW5lTWF0ZXJpYWwiLCJMaW5lQmFzaWNNYXRlcmlhbCIsImNhY2hlZE1hdGVyaWFsIiwic2tpbm5pbmciLCJ2ZXJ0ZXhDb2xvcnMiLCJmbGF0U2hhZGluZyIsIm1vcnBoVGFyZ2V0cyIsInZlcnRleFRhbmdlbnRzIiwidXYyIiwidXYiLCJzZXRBdHRyaWJ1dGUiLCJtYXRlcmlhbFR5cGUiLCJtYXRlcmlhbEV4dGVuc2lvbnMiLCJzZ0V4dGVuc2lvbiIsImttdUV4dGVuc2lvbiIsIm1ldGFsbGljRmFjdG9yIiwicm91Z2huZXNzRmFjdG9yIiwibWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlIiwiZG91YmxlU2lkZWQiLCJEb3VibGVTaWRlIiwiYWxwaGFNb2RlIiwiZGVwdGhXcml0ZSIsImFscGhhVGVzdCIsImFscGhhQ3V0b2ZmIiwibm9ybWFsVGV4dHVyZSIsIm9jY2x1c2lvblRleHR1cmUiLCJzdHJlbmd0aCIsImVtaXNzaXZlRmFjdG9yIiwiZW1pc3NpdmVUZXh0dXJlIiwiZW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJvcmlnaW5hbE5hbWUiLCJzYW5pdGl6ZWROYW1lIiwiUHJvcGVydHlCaW5kaW5nIiwiY29tcHV0ZUJvdW5kcyIsImJveCIsIkJveDMiLCJhY2Nlc3NvciIsIm1heERpc3BsYWNlbWVudCIsImFicyIsImV4cGFuZEJ5VmVjdG9yIiwiYm91bmRpbmdCb3giLCJzcGhlcmUiLCJTcGhlcmUiLCJnZXRDZW50ZXIiLCJjZW50ZXIiLCJyYWRpdXMiLCJkaXN0YW5jZVRvIiwiYm91bmRpbmdTcGhlcmUiLCJhZGRQcmltaXRpdmVBdHRyaWJ1dGVzIiwiYXNzaWduQXR0cmlidXRlQWNjZXNzb3IiLCJnbHRmQXR0cmlidXRlTmFtZSIsInNldEluZGV4IiwidG9UcmlhbmdsZXNEcmF3TW9kZSIsImRyYXdNb2RlIiwiZ2V0SW5kZXgiLCJnZXRBdHRyaWJ1dGUiLCJudW1iZXJPZlRyaWFuZ2xlcyIsIm5ld0luZGljZXMiLCJUcmlhbmdsZUZhbkRyYXdNb2RlIiwiZ2V0WCIsIm5ld0dlb21ldHJ5IiwibG9hZEdlb21ldHJpZXMiLCJwcmltaXRpdmVzIiwiY3JlYXRlRHJhY29QcmltaXRpdmUiLCJjYWNoZWQiLCJwcm9taXNlIiwiZ2VvbWV0cnlQcm9taXNlIiwiQnVmZmVyR2VvbWV0cnkiLCJtZXNoSW5kZXgiLCJyZXN1bHRzIiwiZ2VvbWV0cmllcyIsIlNraW5uZWRNZXNoIiwic2tpbldlaWdodCIsIm5vcm1hbGl6ZVNraW5XZWlnaHRzIiwiVHJpYW5nbGVTdHJpcERyYXdNb2RlIiwiTGluZVNlZ21lbnRzIiwiTGluZSIsIkxpbmVMb29wIiwiUG9pbnRzIiwiZ3JvdXAiLCJHcm91cCIsImNhbWVyYUluZGV4IiwiY2FtZXJhRGVmIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJNYXRoVXRpbHMiLCJ5Zm92IiwiYXNwZWN0UmF0aW8iLCJ6bmVhciIsInpmYXIiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJ4bWFnIiwieW1hZyIsInNraW5EZWYiLCJza2luRW50cnkiLCJpbnZlcnNlQmluZE1hdHJpY2VzIiwiYW5pbWF0aW9uSW5kZXgiLCJhbmltYXRpb25EZWYiLCJwZW5kaW5nTm9kZXMiLCJwZW5kaW5nSW5wdXRBY2Nlc3NvcnMiLCJwZW5kaW5nT3V0cHV0QWNjZXNzb3JzIiwicGVuZGluZ1NhbXBsZXJzIiwicGVuZGluZ1RhcmdldHMiLCJjaGFubmVscyIsImNoYW5uZWwiLCJpZCIsInBhcmFtZXRlcnMiLCJvdXRwdXQiLCJpbnB1dEFjY2Vzc29ycyIsIm91dHB1dEFjY2Vzc29ycyIsInRyYWNrcyIsImlucHV0QWNjZXNzb3IiLCJvdXRwdXRBY2Nlc3NvciIsInVwZGF0ZU1hdHJpeCIsIm1hdHJpeEF1dG9VcGRhdGUiLCJUeXBlZEtleWZyYW1lVHJhY2siLCJOdW1iZXJLZXlmcmFtZVRyYWNrIiwiUXVhdGVybmlvbktleWZyYW1lVHJhY2siLCJWZWN0b3JLZXlmcmFtZVRyYWNrIiwidGFyZ2V0TmFtZSIsImludGVycG9sYXRpb24iLCJ0cmF2ZXJzZSIsImlzTWVzaCIsIm91dHB1dEFycmF5Iiwic2NhbGVkIiwiamwiLCJ0cmFjayIsImNyZWF0ZUludGVycG9sYW50IiwiSW50ZXJwb2xhbnRGYWN0b3J5TWV0aG9kR0xURkN1YmljU3BsaW5lIiwidGltZXMiLCJnZXRWYWx1ZVNpemUiLCJpc0ludGVycG9sYW50RmFjdG9yeU1ldGhvZEdMVEZDdWJpY1NwbGluZSIsIkFuaW1hdGlvbkNsaXAiLCJub2RlTmFtZSIsIm8iLCJCb25lIiwiT2JqZWN0M0QiLCJtYXRyaXgiLCJxdWF0ZXJuaW9uIiwiYnVpbGROb2RlSGllcmFjaHkiLCJub2RlSWQiLCJwYXJlbnRPYmplY3QiLCJwZW5kaW5nSm9pbnRzIiwiam9pbnROb2RlcyIsImJvbmVzIiwiYm9uZUludmVyc2VzIiwiam9pbnROb2RlIiwibWF0IiwiYmluZCIsIlNrZWxldG9uIiwibWF0cml4V29ybGQiLCJjaGlsZCIsInNjZW5lSW5kZXgiLCJzY2VuZURlZiIsIm5vZGVJZHMiLCJjb21wdXRlVGFuZ2VudHMiLCJtZXJnZUJ1ZmZlckdlb21ldHJpZXMiLCJ1c2VHcm91cHMiLCJpc0luZGV4ZWQiLCJhdHRyaWJ1dGVzVXNlZCIsIlNldCIsIm1vcnBoQXR0cmlidXRlc1VzZWQiLCJtZXJnZWRHZW9tZXRyeSIsImF0dHJpYnV0ZXNDb3VudCIsImhhcyIsIm1lcmdlZFVzZXJEYXRhIiwiYWRkR3JvdXAiLCJpbmRleE9mZnNldCIsIm1lcmdlZEluZGV4IiwibWVyZ2VkQXR0cmlidXRlIiwibWVyZ2VCdWZmZXJBdHRyaWJ1dGVzIiwibnVtTW9ycGhUYXJnZXRzIiwibW9ycGhBdHRyaWJ1dGVzVG9NZXJnZSIsIm1lcmdlZE1vcnBoQXR0cmlidXRlIiwiYXJyYXlMZW5ndGgiLCJpc0ludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlIiwiaW50ZXJsZWF2ZUF0dHJpYnV0ZXMiLCJsIiwiaW50ZXJsZWF2ZWRCdWZmZXIiLCJnZXR0ZXJzIiwic2V0dGVycyIsImliYSIsImMiLCJrIiwiZXN0aW1hdGVCeXRlc1VzZWQiLCJtZW0iLCJhdHRyIiwibWVyZ2VWZXJ0aWNlcyIsInRvbGVyYW5jZSIsIk51bWJlciIsIkVQU0lMT04iLCJoYXNoVG9JbmRleCIsInBvc2l0aW9ucyIsInZlcnRleENvdW50IiwibmV4dEluZGV4IiwiYXR0cmlidXRlTmFtZXMiLCJhdHRyQXJyYXlzIiwibW9ycGhBdHRyc0FycmF5cyIsIm1vcnBoQXR0ciIsImZpbGwiLCJkZWNpbWFsU2hpZnQiLCJsb2cxMCIsInNoaWZ0TXVsdGlwbGllciIsInBvdyIsImhhc2giLCJuZXdhcnJheSIsIm5ld01vcnBoQXJyYXlzIiwiZ2V0dGVyRnVuYyIsIm0iLCJtbCIsIm9sZEF0dHJpYnV0ZSIsIm9sZE1vcnBoQXR0cmlidXRlIiwibW9ycGhBdHRyaWJ1dGUiLCJUcmlhbmdsZXNEcmF3TW9kZSIsImNsZWFyR3JvdXBzIiwiY29tcHV0ZU1vcnBoZWRBdHRyaWJ1dGVzIiwiaXNCdWZmZXJHZW9tZXRyeSIsIl92QSIsIl92QiIsIl92QyIsIl90ZW1wQSIsIl90ZW1wQiIsIl90ZW1wQyIsIl9tb3JwaEEiLCJfbW9ycGhCIiwiX21vcnBoQyIsIl9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YSIsIm1vZGlmaWVkQXR0cmlidXRlQXJyYXkiLCJmcm9tQnVmZmVyQXR0cmlidXRlIiwibW9ycGhJbmZsdWVuY2VzIiwiaW5mbHVlbmNlIiwibW9ycGgiLCJhZGRTY2FsZWRWZWN0b3IiLCJzdWIiLCJib25lVHJhbnNmb3JtIiwicG9zaXRpb25BdHRyaWJ1dGUiLCJtb3JwaFBvc2l0aW9uIiwibm9ybWFsQXR0cmlidXRlIiwibW9ycGhOb3JtYWwiLCJncm91cHMiLCJkcmF3UmFuZ2UiLCJncm91cE1hdGVyaWFsIiwic3RhcnQiLCJlbmQiLCJtb2RpZmllZFBvc2l0aW9uIiwibW9kaWZpZWROb3JtYWwiLCJtb3JwaGVkUG9zaXRpb25BdHRyaWJ1dGUiLCJGbG9hdDMyQnVmZmVyQXR0cmlidXRlIiwibW9ycGhlZE5vcm1hbEF0dHJpYnV0ZSIsImNsaWVudCIsIlF1ZXVlIiwicHJvcml0eSIsInN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uIiwic29ja2V0IiwiZW1pdCIsIkRhdGUiLCJub3ciLCJzZW5kRGF0YVdpdGhQcm9taXNlIiwiZXZlbnQiLCJEYXRhUHJvbWlzZSIsInJlc29sdmVkIiwib24iLCJhcmd1bWVudHMiLCJlcnIiLCJsaXN0ZW5Ub0V2ZW50IiwiYXR0YWNoVG9NYWluRXZlbnRTdHJlYW0iLCJvbkFueSIsImV2ZW50TmFtZSIsImFyZ3MiLCJsaXN0ZW5Gb3JFdmVudFdpdGhTY2hlbWFWYWxpZGF0aW9uIiwic2NlbWEiLCJ2YWxpZGF0ZSIsImFkZERhdGFUb1F1ZXVlIiwic2V0SW50ZXJ2YWwiLCJjYWxsQmFjayIsImNyZWF0ZURpcmVjdGlvbmFsTGlnaHQiLCJTY2VuZSIsImJyaWdodG5lc3MiLCJwb3MiLCJkaXJlY3Rpb25hbExpZ2h0IiwiY2FzdFNoYWRvdyIsImNyZWF0ZUFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImNyZWF0ZVBvaW50TGlnaHQiLCJQb2ludExpZ2h0TmV3IiwiZGVmaW5pdGlvbnNfcGVybGluIiwiUGVybGluIiwic2VlZCIsIl9ncmFkaWVudFZlY3MiLCJUSFJFRSIsInBlcm0iLCJncmFkUCIsIl9zZWVkIiwiX29mZnNldE1hdHJpeCIsInNoYWRlckNodW5rIiwibWFpbiIsInRocmVlX25vaXNlX3NlZWQiLCJfZmFkZSIsIl9sZXJwIiwiX2dyYWRpZW50IiwicG9zSW5DZWxsIiwiaW5fbWluIiwiaW5fbWF4Iiwib3V0X21pbiIsIm91dF9tYXgiLCJnZXQyIiwiY2VsbCIsImdyYWRpYW50RG90IiwicyIsImdyYWQzIiwiYWRkVmVjdG9ycyIsImdyYWQyIiwiZGlzdDIiLCJzdWJWZWN0b3JzIiwiZG90IiwidSIsImdldDMiLCJ3IiwiRkJNIiwicGVyc2lzdGFuY2UiLCJsYWN1bmFyaXR5Iiwib2N0YXZlcyIsInJlZGlzdHJpYnV0aW9uIiwiX25vaXNlIiwiX3NjYWxlIiwiX3BlcnNpc3RhbmNlIiwiX2xhY3VuYXJpdHkiLCJfb2N0YXZlcyIsIl9yZWRpc3RyaWJ1dGlvbiIsImFtcGxpdHVkZSIsImZyZXF1ZW5jeSIsIm5vaXNlRnVuY3Rpb24iLCJub2lzZVZhbCIsInJlZGlzdHJpYnV0ZWQiLCJyZW5kZXJpbmdMaXN0IiwiY2hlY2tUeXBlIiwiYWRkVG9SZW5kZXJTZXF1ZW5jZSIsIm5ld1R5cGUiLCJyZW5kZXJpbmdJbmZvIiwidXBkYXRlUmVuZGVyQ3ljbGUiLCJHZW5lcmF0ZVdlYldvcmtlciIsIndvcmtlciIsImdsb2JhbFZhcnMiLCJyZXR1cm5GdW5jIiwiY29kZSIsInRvU3RyaW5nIiwiaW5wdXRTdHVmZiIsIndvcmtlck91dCIsIldvcmtlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJUZXJtaW50ZVdvcmtlckV4dGVybmFsbHkiLCJ0ZXJtaW5hdGUiLCJHYW1lQ29yZVNoYWRvd3MiLCJjcmVhdGVHZW8iLCJyb3QiLCJzaGFkb3ciLCJnZW8iLCJ0aHJlZSIsInJlY2VpdmVTaGFkb3ciLCJkZWJ1Z0N1YmUiLCJCb3hHZW9tZXRyeSIsImN1YmUiLCJkZWJ1ZyIsImdlbmVyYXRlTWFpblNjZW5lIiwiU2NlbmVUb0dldCIsIlJlbmRlcnMiLCJkb2N1bWVudCIsImNoaWxkMiIsIkNhbWVyYSIsImNvbGxpc2lvbkhhbmRsZXIiLCJvbm1lc3NhZ2UiLCJvbm1lc3NhZ2VlcnJvciIsInBvc3RNZXNzYWdlIiwiQ29tbWFuZCIsIm9yaWdpbiIsIlBsYW5lQnVmZmVyR2VvbWV0cnkiLCJjbG91ZHMiLCJHZW5lcmF0ZUNsb3VkcyIsInJhbmRvbSIsImRheW5pZ2h0IiwiQ3JlYXRlRGF5TmlnaHRDeWNsZSIsImNvbnRyb2xIYW5kbGVySW5pdCIsInBsYW5lR2VvbWV0cnkiLCJQbGFuZUdlb21ldHJ5Iiwicm90YXRlWCIsInBsYW5lTWF0ZXJpYWwiLCJwbGFuZSIsImdyaWRIZWxwZXIiLCJHcmlkSGVscGVyIiwidXBkYXRlIiwibmV3UGxhbmUiLCJNYWtlUGxhbmUiLCJsb2FkRmlsZXMiLCJDcmVhdGVHcm91cEFuZFBvcyIsImF0dGFjaENhbWVyYUFuZENvbnRyb2wiLCJhaXJwb3J0IiwiZ2VuZXJhdGVUZXJyYWluQXJvdW5kUGxheWVyIiwicmVjaWV2ZURheXRpbWVVcGRhdGUiLCJkYXkiLCJhZGR0b0RheVRpbWVDaGVja2VyIiwiYXJnIiwiVVVJRCIsInY0IiwicmVtb3ZlRnJvbURheVRpbWVIb29rIiwiZ2V0RGF5U3RhdGUiLCJhbm5vdW5jZWREYXkiLCJhbm5vdW5jZWROaWdodCIsInN1biIsIlNwaGVyZUJ1ZmZlckdlb21ldHJ5Iiwic3VuTWF0ZXJpYWwiLCJzdW5tZXNoIiwic3VuR3JvdXAiLCJtb29uIiwibW9vbk1hdGVyaWFsIiwibW9vbk1lc2giLCJtb29uR3JvdXAiLCJ2aXNpYmxlIiwiZFRJbWUiLCJkaXJlY3Rpb25hbExpZ2h0MiIsInNreUJveCIsInNreUJveE1hdGVyaWFsIiwiZ2V0UmFuZG9tU3RhckZpZWxkIiwiQmFja1NpZGUiLCJza3kiLCJ0aGV0YSIsInJvdGF0ZUFib3V0UG9pbnQiLCJzZXRDbGVhckNvbG9yIiwibGVycENvbG9ycyIsInJvdGF0ZU9uQXhpcyIsIlNpbXBsZXhOb2lzZSIsInJlcXVpcmUiLCJjdXJyZW50VGVycmFpbiIsIlJldHVyblRlcnJhaW5Qb2ludGVyIiwiZ2VuZXJhdGVUZXJyYWluIiwic2ltcGxleCIsImNvbG91cnMiLCJ2ZXJ0ZXgiLCJub2lzZTJEIiwiTWVzaFBob25nTWF0ZXJpYWwiLCJyZWZsZWN0aXZpdHkiLCJwbGFuZTIiLCJnZW5lcmF0ZVRlcnJhaW5DaHVuayIsIlBvc2l0aW9uIiwiZ2FpbiIsImRpdmlzb3IiLCJmYm0iLCJibGVuZGluZyIsImxvY2FsVG9Xb3JsZCIsImhlaWdodFNlY29uZGFyeSIsImdldFRlcnJhaW5IZWlnaHQiLCJsb2FkZWRDaHVua3MiLCJjaHVua3NJbk1lbSIsImdldFdvcmxkUG9zaXRpb24iLCJ5b3VyQ2h1bmsiLCJjaHVua3lUaGluZyIsIkNodW5rWW91ckluIiwiY2h1bmsiLCJHZW5lcmF0ZVRyZWVzIiwiY2hlY2tCaW9tZUxvY2F0aW9uIiwibWluSGVpZ2h0Iiwibm9pc2VNYXAiLCJYVmFsdWUiLCJzbWluIiwic21heCIsImVtaW4iLCJlbWF4Iiwiaml0dGVyIiwicGVyIiwic3BlZWQiLCJ0dWZ0MSIsIlNwaGVyZUdlb21ldHJ5IiwidHJhbnNsYXRlIiwidHVmdDMiLCJ0dWZ0MiIsImNvbXB1dGVWZXJ0ZXhOb3JtYWxzIiwiY2xvdWQiLCJjbG91ZDEiLCJjbG91ZDIiLCJncmFzcyIsImdlb3MiLCJkIiwidXAiLCJkb3duIiwicSIsInNoaWZ0Iiwib25Eb2N1bWVudEtleURvd24iLCJhY3RpdmVFbGVtZW50Iiwia2V5Q29kZSIsIndoaWNoIiwiY29udHJvbEhhbmRsZXJVcGRhdGUiLCJkaXJlY3Rpb24iLCJnZXRXb3JsZERpcmVjdGlvbiIsIm11bHRpcGx5U2NhbGFyIiwicm90YXRlWSIsInJvdGF0ZVoiLCJsaXN0ZW5pbmdIb29rcyIsIkNvbnRyb2xFdmVudExpc3RlbmVyIiwib2N1bWVudCIsIndLZXkiLCJhS2V5Iiwic0tleSIsImRLZXkiLCJ1cEtleSIsImRvd25LZXkiLCJlS2V5IiwicUtleSIsInNoaWZ0S2V5IiwiektleSIsInhLZXkiLCJvbkRvY3VtZW50S2V5RG93bkV2ZW50IiwiZW50cmllcyIsImxpc3RlblRvQ29ucm9scyIsIkNsZWFuVXBMaXN0ZW5lciIsInBsYXllcnMiLCJNYWtlTmV3Q3ViZVBsYXllciIsImN5Y2xpbmRlciIsIkN5bGluZGVyR2VvbWV0cnkiLCJtYXRlcmlhbDIiLCJjeWxpbmRlckJ1aWxkIiwiZ2VuZXJhdGVMYWJlbCIsIkluaXRNYWluR2FtZUhhbmRsZXIiLCJjcmVhdGVUYWciLCJiYXNlV2lkdGgiLCJib3JkZXJTaXplIiwiY3R4IiwiY3JlYXRlRWxlbWVudCIsImdldENvbnRleHQiLCJmb250IiwidGV4dFdpZHRoIiwibWVhc3VyZVRleHQiLCJ3aWR0aCIsImRvdWJsZUJvcmRlclNpemUiLCJjYW52YXMiLCJ0ZXh0QmFzZWxpbmUiLCJ0ZXh0QWxpZ24iLCJzY2FsZUZhY3RvciIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwibGFiZWxNYXRlcmlhbCIsImxhYmVsQmFzZVNjYWxlIiwibGFiZWwiLCJzZXR0aW5ncyIsImVsZXZhdG9yUGl0Y2giLCJhaXJlbG9uZVBpdGNoIiwicnVkZGVyUGl0Y2giLCJjaGVja2VyIiwicHJvcHMiLCJsZWZ0QWlyZWxvbmUiLCJyaWdodEFpcmVsb25lIiwibGVmdENvbnRyb2xTdXJmYWNlIiwicmlnaHRDb250cm9sU3VyZmFjZSIsInJ1ZGRlciIsImxpZ2h0MiIsIndoaXRlTGlnaHQiLCJjdXJyZW50RXZlbGF0b3JQaXRjaCIsImNsZWFuVXAiLCJzdWNjZXNzIiwib2JqIiwicG9pbnQiLCJheGlzIiwicG9pbnRJc1dvcmxkIiwiYXBwbHlBeGlzQW5nbGUiLCJ3b3JsZFRvTG9jYWwiLCJudW1iZXJPZlN0YXJzIiwiZmlsbFJlY3QiLCJiZWdpblBhdGgiLCJhcmMiLCJwbGFjZVRyZWUiLCJ0cmVlIiwiaW50ZXJzZWN0cyIsInJhbmRvbVZlYyIsIm5ld1RyZWUiLCJ2ZXRvciIsImJvdW5kcyIsInNub3d5VHJlZSIsInBhbG1UcmVlIiwibGVhdmVzIiwiYnJpZ2hMZWF2ZXMiLCJ0cnVuayIsInNub3d5IiwibmV3cGFsbVRyZWUiLCJyYW5kb21WZWN0b3IiLCJwbGFjZVRyZWVPdXQiLCJDcmVhdGVVSSIsImdhbWVmZWVkIiwic2V0R2FtZUZlZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlN0YXRzIiwicmVuZGVyIiwic2V0Q2hpbGQiLCJnYW1lRXZlbnREYXRhIiwic2V0R2FtZUV2ZW50RGF0YSIsInNldERheSIsInNldENoaWxkMiIsInJlY2lldmVkU2VlZCIsInNldFNlZWQiLCJyZW5kZXJlZCIsInNldFJlbmRlcmVkIiwiY2xpZW50cyIsInNldENsaWVudHMiLCJwZXJzb25EYXRhIiwic2V0UGVyc29uYWxEYXRhIiwicG9zaXRvbiIsInNldFBvc2l0aW9uIiwidG9BcnJheSIsIm9uY2UiLCJzdGF0cyIsInNob3dQYW5lbCIsImFwcGVuZENoaWxkIiwiZG9tIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwib2dhcml0aG1pY0RlcHRoQnVmZmVyIiwiRm9nIiwic2V0U2l6ZSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRvbUVsZW1lbnQiLCJDdXJyZW50U2NlbmUiLCJvbldpbmRvd1Jlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJyZXF1ZXN0UG9pbnRlckxvY2siLCJtYWtlQ3ViZSIsInByZXZEYXRhIiwiYWRkdG9HYW1lRmVlZCIsIk5ld0dhbWVFdmVudEFycmF5IiwiaG93IiwiX3giLCJfeSIsIl96IiwidGV4dCIsImFuaW1hdGUiLCJiZWdpbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNlbmRDaGF0IiwicHJldmVudERlZmF1bHQiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLFNBQVNBLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQXVCQyxLQUF2QixFQUE4QjtBQUNqQyxTQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsR0FBRyxHQUFHQyxLQUFqQixJQUEwQkEsS0FBakM7QUFDSDtBQUVNLGVBQWVHLElBQWYsQ0FBb0JDLEdBQXBCLEVBQXdCO0FBQzNCLFNBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzdCQyxjQUFVLENBQUNGLEdBQUQsRUFBTUYsR0FBTixDQUFWO0FBQ0gsR0FGTSxDQUFQO0FBR0gsQzs7Ozs7Ozs7Ozs7Ozs7O0FDUkQsTUFBTUssR0FBRyxHQUFHLENBQVo7O0FBQ0EsTUFBTUMsTUFBTSxHQUFJQyxDQUFELElBQU87QUFDbEIsR0FBRUEsQ0FBQyxHQUFHLENBQUwsS0FBWSxDQUFiLElBQWtCLENBQWxCO0FBQ0gsQ0FGRDs7QUFHQSxNQUFNQyxJQUFJLEdBQUlELENBQUQsSUFBTztBQUNoQixHQUFDQSxDQUFDLElBQUksQ0FBTixJQUFXLENBQVg7QUFDSCxDQUZEOztBQUdBLE1BQU1FLEtBQUssR0FBSUYsQ0FBRCxJQUFPO0FBQ2hCQSxHQUFDLEdBQUcsQ0FBTCxJQUFXLENBQVg7QUFDSCxDQUZEOztBQUlPLE1BQU1HLGFBQU4sQ0FBb0I7QUFDdkJDLGFBQVcsQ0FDUEMsVUFBVSxHQUFHLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQ25CRCxLQUFD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QS9DTSxFQWdETixFQWhETSxFQWlETixFQWpETSxFQWtETixHQWxETSxFQW1ETixFQW5ETSxFQW9ETixFQXBETSxFQXFETixHQXJETSxFQXNETixHQXRETSxFQXVETixFQXZETSxFQXdETixFQXhETSxFQXlETixHQXpETSxFQTBETixFQTFETSxFQTJETixHQTNETSxFQTRETixHQTVETSxFQTZETixHQTdETSxFQThETixHQTlETSxFQStETixFQS9ETSxFQWdFTixHQWhFTSxFQWlFTixFQWpFTSxFQWtFTixHQWxFTSxFQW1FTixFQW5FTSxFQW9FTixHQXBFTSxFQXFFTixHQXJFTSxFQXNFTixFQXRFTSxFQXVFTixFQXZFTSxFQXdFTixHQXhFTSxFQXlFTixFQXpFTSxFQTBFTixHQTFFTSxFQTJFTixHQTNFTSxFQTRFTixHQTVFTSxFQTZFTixFQTdFTSxFQThFTixHQTlFTSxFQStFTixHQS9FTSxFQWdGTixHQWhGTSxFQWlGTixFQWpGTSxFQWtGTixHQWxGTSxFQW1GTixHQW5GTSxFQW9GTixHQXBGTSxFQXFGTixHQXJGTSxFQXNGTixHQXRGTSxFQXVGTixFQXZGTSxFQXdGTixFQXhGTSxFQXlGTixFQXpGTSxFQTBGTixFQTFGTSxFQTJGTixHQTNGTSxFQTRGTixFQTVGTSxFQTZGTixHQTdGTSxFQThGTixHQTlGTSxFQStGTixHQS9GTSxFQWdHTixFQWhHTSxFQWlHTixFQWpHTSxFQWtHTixFQWxHTSxFQW1HTixFQW5HTSxFQW9HTixHQXBHTSxFQXFHTixDQXJHTSxFQXNHTixHQXRHTSxFQXVHTixFQXZHTSxFQXdHTixFQXhHTSxFQXlHTixHQXpHTSxFQTBHTixFQTFHTSxFQTJHTixHQTNHTSxFQTRHTixHQTVHTSxFQTZHTixHQTdHTSxFQThHTixFQTlHTSxFQStHTixFQS9HTSxFQWdITixHQWhITSxFQWlITixHQWpITSxFQWtITixHQWxITSxFQW1ITixHQW5ITSxFQW9ITixHQXBITSxFQXFITixHQXJITSxFQXNITixHQXRITSxFQXVITixHQXZITSxFQXdITixFQXhITSxFQXlITixHQXpITSxFQTBITixHQTFITSxFQTJITixHQTNITSxFQTRITixHQTVITSxFQTZITixHQTdITSxFQThITixHQTlITSxFQStITixDQS9ITSxFQWdJTixFQWhJTSxFQWlJTixFQWpJTSxFQWtJTixHQWxJTSxFQW1JTixHQW5JTSxFQW9JTixHQXBJTSxFQXFJTixHQXJJTSxFQXNJTixHQXRJTSxFQXVJTixDQXZJTSxFQXdJTixHQXhJTSxFQXlJTixFQXpJTSxFQTBJTixHQTFJTSxFQTJJTixHQTNJTSxFQTRJTixHQTVJTSxFQTZJTixHQTdJTSxFQThJTixFQTlJTSxFQStJTixFQS9JTSxFQWdKTixHQWhKTSxFQWlKTixHQWpKTSxFQWtKTixHQWxKTSxFQW1KTixFQW5KTSxFQW9KTixHQXBKTSxFQXFKTixFQXJKTSxFQXNKTixFQXRKTSxFQXVKTixFQXZKTSxFQXdKTixFQXhKTSxFQXlKTixHQXpKTSxFQTBKTixHQTFKTSxFQTJKTixFQTNKTSxFQTRKTixFQTVKTSxFQTZKTixHQTdKTSxFQThKTixHQTlKTSxFQStKTixHQS9KTSxFQWdLTixHQWhLTSxFQWlLTixHQWpLTSxFQWtLTixHQWxLTSxFQW1LTixHQW5LTSxFQW9LTixDQXBLTSxFQXFLTixFQXJLTSxFQXNLTixHQXRLTSxFQXVLTixHQXZLTSxFQXdLTixFQXhLTSxFQXlLTixHQXpLTSxFQTBLTixHQTFLTSxFQTJLTixHQTNLTSxFQTRLTixHQTVLTSxFQTZLTixHQTdLTSxFQThLTixFQTlLTSxFQStLTixHQS9LTSxFQWdMTixDQWhMTSxFQWlMTixHQWpMTSxFQWtMTixFQWxMTSxFQW1MTixFQW5MTSxFQW9MTixHQXBMTSxFQXFMTixFQXJMTSxFQXNMTixFQXRMTSxFQXVMTixHQXZMTSxFQXdMTixHQXhMTSxFQXlMTixFQXpMTSxFQTBMTixHQTFMTSxFQTJMTixHQTNMTSxFQTRMTixHQTVMTSxFQTZMTixHQTdMTSxFQThMTixHQTlMTSxFQStMTixHQS9MTSxFQWdNTixHQWhNTSxFQWlNTixHQWpNTSxFQWtNTixHQWxNTSxFQW1NTixFQW5NTSxFQW9NTixHQXBNTSxFQXFNTixH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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOzs7Ozs7Ozs7Ozs7QUN0WEY7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7Ozs7Ozs7Ozs7OztBQ1RHO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELGNBQWM7QUFDZCwyQkFBMkIsbUJBQU8sQ0FBQywwQ0FBa0I7QUFDckQsYUFBYSxtQkFBTyxDQUFDLHlEQUFNO0FBQzNCLHVCQUF1QixtQkFBTyxDQUFDLDZFQUFnQjtBQUMvQyxjQUFjLG1CQUFPLENBQUMsOEVBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9EQUFvRDtBQUNqRixhQUFhO0FBQ2I7QUFDQTtBQUNBLHlCQUF5QiwrREFBK0Q7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFFQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNENBQTRDOztBQUV2RDtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNB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OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL3Rlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcm91bmRudW0obnVtLCB0b051bSkge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtIC8gdG9OdW0pICogdG9OdW07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3YWl0KHZhbCl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dChyZXMsIHZhbClcclxuICAgIH0pXHJcbn0iLCJjb25zdCB0b3AgPSAwO1xyXG5jb25zdCBwYXJlbnQgPSAoaSkgPT4ge1xyXG4gICAgKChpICsgMSkgPj4+IDEpIC0gMTtcclxufTtcclxuY29uc3QgbGVmdCA9IChpKSA9PiB7XHJcbiAgICAoaSA8PCAxKSArIDE7XHJcbn07XHJcbmNvbnN0IHJpZ2h0ID0gKGkpID0+IHtcclxuICAgIChpICsgMSkgPDwgMTtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcmlvcml0eVF1ZXVlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGNvbXBhcmF0b3IgPSAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBhID4gYjtcclxuICAgICAgICB9XHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9oZWFwID0gW107XHJcbiAgICAgICAgdGhpcy5fY29tcGFyYXRvciA9IGNvbXBhcmF0b3I7XHJcbiAgICB9XHJcbiAgICBzaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFwLmxlbmd0aDtcclxuICAgIH1cclxuICAgIGlzRW1wdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZSgpID09PSAwO1xyXG4gICAgfVxyXG4gICAgcGVlaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVhcFtwYXJzZUludCh0b3AsMTApXTtcclxuICAgIH1cclxuICAgIHB1c2goLi4udmFsdWVzKSB7XHJcbiAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hlYXAucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NpZnRVcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemUoKTtcclxuICAgIH1cclxuICAgIHBvcCgpIHtcclxuICAgICAgICBjb25zdCBwb3BwZWRWYWx1ZSA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuc2l6ZSgpIC0gMTtcclxuICAgICAgICBpZiAoYm90dG9tID4gdG9wKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N3YXAodG9wLCBib3R0b20pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9oZWFwLnBvcCgpO1xyXG4gICAgICAgIHRoaXMuX3NpZnREb3duKCk7XHJcbiAgICAgICAgcmV0dXJuIHBvcHBlZFZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmVwbGFjZSh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHJlcGxhY2VkVmFsdWUgPSB0aGlzLnBlZWsoKTtcclxuICAgICAgICB0aGlzLl9oZWFwW3BhcnNlSW50KHRvcCwxMCldID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fc2lmdERvd24oKTtcclxuICAgICAgICByZXR1cm4gcmVwbGFjZWRWYWx1ZTtcclxuICAgIH1cclxuICAgIF9ncmVhdGVyKGksIGopIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGFyYXRvcih0aGlzLl9oZWFwW3BhcnNlSW50KGksMTApXSwgdGhpcy5faGVhcFtwYXJzZUludChqLDEwKV0pO1xyXG4gICAgfVxyXG4gICAgX3N3YXAoaSwgaikge1xyXG4gICAgICAgIFt0aGlzLl9oZWFwW3BhcnNlSW50KGksMTApXSwgdGhpcy5faGVhcFtwYXJzZUludChqLDEwKV1dID0gW3RoaXMuX2hlYXBbcGFyc2VJbnQoaiwxMCldLCB0aGlzLl9oZWFwW3BhcnNlSW50KGksMTApXV07XHJcbiAgICB9XHJcbiAgICBfc2lmdFVwKCkge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zaXplKCkgLSAxO1xyXG4gICAgICAgIHdoaWxlIChub2RlID4gdG9wICYmIHRoaXMuX2dyZWF0ZXIobm9kZSwgcGFyZW50KG5vZGUpKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zd2FwKG5vZGUsIHBhcmVudChub2RlKSk7XHJcbiAgICAgICAgICAgIG5vZGUgPSBwYXJlbnQobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyplc2xpbnQgY29tcGxleGl0eTogW1wiZXJyb3JcIiwgMjBdKi9cclxuICAgIF9zaWZ0RG93bigpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRvcDtcclxuICAgICAgICB3aGlsZSAoXHJcbiAgICAgICAgICAgIChsZWZ0KG5vZGUpIDwgdGhpcy5zaXplKCkgJiYgdGhpcy5fZ3JlYXRlcihsZWZ0KG5vZGUpLCBub2RlKSkgfHxcclxuICAgICAgICAgICAgKHJpZ2h0KG5vZGUpIDwgdGhpcy5zaXplKCkgJiYgdGhpcy5fZ3JlYXRlcihyaWdodChub2RlKSwgbm9kZSkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGxldCBtYXhDaGlsZCA9XHJcbiAgICAgICAgICAgICAgICByaWdodChub2RlKSA8IHRoaXMuc2l6ZSgpICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmVhdGVyKHJpZ2h0KG5vZGUpLCBsZWZ0KG5vZGUpKVxyXG4gICAgICAgICAgICAgICAgICAgID8gcmlnaHQobm9kZSlcclxuICAgICAgICAgICAgICAgICAgICA6IGxlZnQobm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3N3YXAobm9kZSwgbWF4Q2hpbGQpO1xyXG4gICAgICAgICAgICBub2RlID0gbWF4Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIsIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNdWx0aXBseVZlY3RvcjIodmVjdG9yOlZlY3RvcjIsIG11bHRpcGxpZXI6bnVtYmVyKTpWZWN0b3IyIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWN0b3IueCAqIG11bHRpcGxpZXIsIHZlY3Rvci55ICogbXVsdGlwbGllcilcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gTXVsdGlwbHlWZWN0b3IzKHZlY3RvcjpWZWN0b3IzLCBtdWx0aXBsaWVyOm51bWJlcik6VmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModmVjdG9yLnggKiBtdWx0aXBsaWVyLCB2ZWN0b3IueSAqIG11bHRpcGxpZXIsIHZlY3Rvci56ICogbXVsdGlwbGllcilcclxufSIsImltcG9ydCBzZWVkcmFuZG9tIGZyb20gXCJzZWVkcmFuZG9tXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnRGcm9tSW50ZXJ2YWwoIG1pbiwgbWF4KSB7XHJcbiAgICBsZXQgbXlybmcgPSBuZXcgc2VlZHJhbmRvbSgpO1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IobXlybmcoKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVZlY3RvckJldHdlZW5Qb2ludHMyRChWZWN0b3IxLCBWZWN0b3IyKXtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyhyYW5kb21JbnRGcm9tSW50ZXJ2YWwoIFZlY3RvcjEueCwgVmVjdG9yMi54KSxyYW5kb21JbnRGcm9tSW50ZXJ2YWwoIFZlY3RvcjEueSwgVmVjdG9yMi55KSxyYW5kb21JbnRGcm9tSW50ZXJ2YWwoIFZlY3RvcjEueiwgVmVjdG9yMi56KSlcclxufSIsImV4cG9ydCBmdW5jdGlvbiByYWRpYW50cyhkZWdyZWVzKSB7XHJcblx0cmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVncmVlcyhyYWRpYW5zKSB7XHJcblx0cmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xyXG59IiwiaW1wb3J0IHsgQnVmZmVyR2VvbWV0cnksIEdyb3VwLCBNZXNoLCBNZXNoTGFtYmVydE1hdGVyaWFsIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IEJ1ZmZlckdlb21ldHJ5VXRpbHMgfSBmcm9tIFwiLi4vQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX21lcmdlTWVzaGVzKG1lc2hlcykge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKChbXS5jb25jYXQobWVzaGVzLm1hcChlID0+IGUuY2hpbGRyZW4pKSkuZmxhdCgpKVxyXG5cclxuICAgIGxldCBpbnB1dEdlbyA9IEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VCdWZmZXJHZW9tZXRyaWVzKChbXS5jb25jYXQobWVzaGVzLm1hcChlID0+IGUuY2hpbGRyZW4pKSkuZmxhdCgpLCB0cnVlKVxyXG5cclxuXHJcbiAgICByZXR1cm4gbmV3IE1lc2goaW5wdXRHZW8sIG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjoweGZmMDAwMH0pKTtcclxuXHJcbn0iLCJpbXBvcnQgUmVhY3QseyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuXHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXBwV3JhcHBlcih7IGNoaWxkcmVuIH0pIHtcclxuICBsZXQgc2hhcmVkU3RhdGUgPSBpbygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2hhcmVkU3RhdGV9PntjaGlsZHJlbn08L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuL2dsYkNvcmVcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRHTEJGaWxlKGl0ZW0sIHNjZW5lKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XHJcbiAgICAgICAgbG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICAgIC8vIHJlc291cmNlIFVSTFxyXG4gICAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgICAvLyBjYWxsZWQgd2hlbiB0aGUgcmVzb3VyY2UgaXMgbG9hZGVkXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChnbHRmKSB7XHJcbiAgICAgICAgICAgICAgICBnbHRmLmFuaW1hdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBnbHRmLnNjZW5lO1xyXG4gICAgICAgICAgICAgICAgZ2x0Zi5zY2VuZXM7XHJcbiAgICAgICAgICAgICAgICBnbHRmLmNhbWVyYXM7XHJcbiAgICAgICAgICAgICAgICBnbHRmLmFzc2V0O1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShnbHRmKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBjYWxsZWQgd2hpbGUgbG9hZGluZyBpcyBwcm9ncmVzc2luZ1xyXG4gICAgICAgICAgICBmdW5jdGlvbiAoeGhyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygoeGhyLmxvYWRlZCAvIHhoci50b3RhbCkgKiAxMDAgKyBcIiUgbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBjYWxsZWQgd2hlbiBsb2FkaW5nIGhhcyBlcnJvcnNcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFuIGVycm9yIGhhcHBlbmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IEJ1ZmZlckdlb21ldHJ5LCBNYXRyaXg0LCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IEJ1ZmZlckdlb21ldHJ5VXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1lcmdlTWVzaGVzKGlucHV0OiBCdWZmZXJHZW9tZXRyeVtdLCBsb2NhdGlvbjogVmVjdG9yM1tdKTogQnVmZmVyR2VvbWV0cnkge1xyXG4gICAgY29uc29sZS5sb2coaW5wdXQpO1xyXG5cclxuICAgIGlucHV0LmZvckVhY2goKGUsaSkgPT4ge1xyXG4gICAgICAgIGlucHV0W2ldID0gIGUuYXBwbHlNYXRyaXg0KG5ldyBNYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKGxvY2F0aW9uW2ldLngsIGxvY2F0aW9uW2ldLnksIGxvY2F0aW9uW2ldLnopKVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgYnVmZmVyR2VvbSA9IEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VCdWZmZXJHZW9tZXRyaWVzKGlucHV0LCBmYWxzZSlcclxuXHJcbiAgICByZXR1cm4gYnVmZmVyR2VvbVxyXG59XHJcbiIsIi8vIFRISVMgRklMRSBXQVMgTk9UIFdSSVRURU4gQlkgTUVcclxuXHJcbi8vIFRoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB0aGUgaW5idWlsdCBvYmogbG9hZGVycyBzbyBJIHJld3JvdGUgcGFydHMgb2YgaXQsIHNvIGl0IHdvcmtzIGluIE5leHRqcyBhbmQgUmVhY3QgXHJcblxyXG4vLyAtLSBIYXJ2ZXkgUmFuZGFsbCAyMS81LzIxXHJcbmltcG9ydCB7XHJcblx0QW5pbWF0aW9uQ2xpcCxcclxuXHRCb25lLFxyXG5cdEJveDMsXHJcblx0QnVmZmVyQXR0cmlidXRlLFxyXG5cdEJ1ZmZlckdlb21ldHJ5LFxyXG5cdENhbnZhc1RleHR1cmUsXHJcblx0Q2xhbXBUb0VkZ2VXcmFwcGluZyxcclxuXHRDb2xvcixcclxuXHREaXJlY3Rpb25hbExpZ2h0LFxyXG5cdERvdWJsZVNpZGUsXHJcblx0RmlsZUxvYWRlcixcclxuXHRGcm9udFNpZGUsXHJcblx0R3JvdXAsXHJcblx0SW1hZ2VCaXRtYXBMb2FkZXIsXHJcblx0SW50ZXJsZWF2ZWRCdWZmZXIsXHJcblx0SW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUsXHJcblx0SW50ZXJwb2xhbnQsXHJcblx0SW50ZXJwb2xhdGVEaXNjcmV0ZSxcclxuXHRJbnRlcnBvbGF0ZUxpbmVhcixcclxuXHRMaW5lLFxyXG5cdExpbmVCYXNpY01hdGVyaWFsLFxyXG5cdExpbmVMb29wLFxyXG5cdExpbmVTZWdtZW50cyxcclxuXHRMaW5lYXJGaWx0ZXIsXHJcblx0TGluZWFyTWlwbWFwTGluZWFyRmlsdGVyLFxyXG5cdExpbmVhck1pcG1hcE5lYXJlc3RGaWx0ZXIsXHJcblx0TG9hZGVyLFxyXG5cdExvYWRlclV0aWxzLFxyXG5cdE1hdGVyaWFsLFxyXG5cdE1hdGhVdGlscyxcclxuXHRNYXRyaXg0LFxyXG5cdE1lc2gsXHJcblx0TWVzaEJhc2ljTWF0ZXJpYWwsXHJcblx0TWVzaFBoeXNpY2FsTWF0ZXJpYWwsXHJcblx0TWVzaFN0YW5kYXJkTWF0ZXJpYWwsXHJcblx0TWlycm9yZWRSZXBlYXRXcmFwcGluZyxcclxuXHROZWFyZXN0RmlsdGVyLFxyXG5cdE5lYXJlc3RNaXBtYXBMaW5lYXJGaWx0ZXIsXHJcblx0TmVhcmVzdE1pcG1hcE5lYXJlc3RGaWx0ZXIsXHJcblx0TnVtYmVyS2V5ZnJhbWVUcmFjayxcclxuXHRPYmplY3QzRCxcclxuXHRPcnRob2dyYXBoaWNDYW1lcmEsXHJcblx0UGVyc3BlY3RpdmVDYW1lcmEsXHJcblx0UG9pbnRMaWdodCxcclxuXHRQb2ludHMsXHJcblx0UG9pbnRzTWF0ZXJpYWwsXHJcblx0UHJvcGVydHlCaW5kaW5nLFxyXG5cdFF1YXRlcm5pb25LZXlmcmFtZVRyYWNrLFxyXG5cdFJHQkZvcm1hdCxcclxuXHRSZXBlYXRXcmFwcGluZyxcclxuXHRTa2VsZXRvbixcclxuXHRTa2lubmVkTWVzaCxcclxuXHRTcGhlcmUsXHJcblx0U3BvdExpZ2h0LFxyXG5cdFRhbmdlbnRTcGFjZU5vcm1hbE1hcCxcclxuXHRUZXh0dXJlTG9hZGVyLFxyXG5cdFRyaWFuZ2xlRmFuRHJhd01vZGUsXHJcblx0VHJpYW5nbGVTdHJpcERyYXdNb2RlLFxyXG5cdFZlY3RvcjIsXHJcblx0VmVjdG9yMyxcclxuXHRWZWN0b3JLZXlmcmFtZVRyYWNrLFxyXG5cdHNSR0JFbmNvZGluZ1xyXG59IGZyb20gJ3RocmVlJztcclxuXHJcbnZhciBHTFRGTG9hZGVyID0gKCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdGZ1bmN0aW9uIEdMVEZMb2FkZXIoIG1hbmFnZXIgKSB7XHJcblxyXG5cdFx0TG9hZGVyLmNhbGwoIHRoaXMsIG1hbmFnZXIgKTtcclxuXHJcblx0XHR0aGlzLmRyYWNvTG9hZGVyID0gbnVsbDtcclxuXHRcdHRoaXMua3R4MkxvYWRlciA9IG51bGw7XHJcblx0XHR0aGlzLm1lc2hvcHREZWNvZGVyID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLnBsdWdpbkNhbGxiYWNrcyA9IFtdO1xyXG5cclxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTWF0ZXJpYWxzQ2xlYXJjb2F0RXh0ZW5zaW9uKCBwYXJzZXIgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZUZXh0dXJlQmFzaXNVRXh0ZW5zaW9uKCBwYXJzZXIgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZUZXh0dXJlV2ViUEV4dGVuc2lvbiggcGFyc2VyICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTWF0ZXJpYWxzVHJhbnNtaXNzaW9uRXh0ZW5zaW9uKCBwYXJzZXIgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZMaWdodHNFeHRlbnNpb24oIHBhcnNlciApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgR0xURk1lc2hvcHRDb21wcmVzc2lvbiggcGFyc2VyICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9XHJcblxyXG5cdEdMVEZMb2FkZXIucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggTG9hZGVyLnByb3RvdHlwZSApLCB7XHJcblxyXG5cdFx0Y29uc3RydWN0b3I6IEdMVEZMb2FkZXIsXHJcblxyXG5cdFx0bG9hZDogZnVuY3Rpb24gKCB1cmwsIG9uTG9hZCwgb25Qcm9ncmVzcywgb25FcnJvciApIHtcclxuXHJcblx0XHRcdHZhciBzY29wZSA9IHRoaXM7XHJcblxyXG5cdFx0XHR2YXIgcmVzb3VyY2VQYXRoO1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLnJlc291cmNlUGF0aCAhPT0gJycgKSB7XHJcblxyXG5cdFx0XHRcdHJlc291cmNlUGF0aCA9IHRoaXMucmVzb3VyY2VQYXRoO1xyXG5cclxuXHRcdFx0fSBlbHNlIGlmICggdGhpcy5wYXRoICE9PSAnJyApIHtcclxuXHJcblx0XHRcdFx0cmVzb3VyY2VQYXRoID0gdGhpcy5wYXRoO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0cmVzb3VyY2VQYXRoID0gTG9hZGVyVXRpbHMuZXh0cmFjdFVybEJhc2UoIHVybCApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gVGVsbHMgdGhlIExvYWRpbmdNYW5hZ2VyIHRvIHRyYWNrIGFuIGV4dHJhIGl0ZW0sIHdoaWNoIHJlc29sdmVzIGFmdGVyXHJcblx0XHRcdC8vIHRoZSBtb2RlbCBpcyBmdWxseSBsb2FkZWQuIFRoaXMgbWVhbnMgdGhlIGNvdW50IG9mIGl0ZW1zIGxvYWRlZCB3aWxsXHJcblx0XHRcdC8vIGJlIGluY29ycmVjdCwgYnV0IGVuc3VyZXMgbWFuYWdlci5vbkxvYWQoKSBkb2VzIG5vdCBmaXJlIGVhcmx5LlxyXG5cdFx0XHR0aGlzLm1hbmFnZXIuaXRlbVN0YXJ0KCB1cmwgKTtcclxuXHJcblx0XHRcdHZhciBfb25FcnJvciA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcblx0XHRcdFx0aWYgKCBvbkVycm9yICkge1xyXG5cclxuXHRcdFx0XHRcdG9uRXJyb3IoIGUgKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCBlICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c2NvcGUubWFuYWdlci5pdGVtRXJyb3IoIHVybCApO1xyXG5cdFx0XHRcdHNjb3BlLm1hbmFnZXIuaXRlbUVuZCggdXJsICk7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGxvYWRlciA9IG5ldyBGaWxlTG9hZGVyKCB0aGlzLm1hbmFnZXIgKTtcclxuXHJcblx0XHRcdGxvYWRlci5zZXRQYXRoKCB0aGlzLnBhdGggKTtcclxuXHRcdFx0bG9hZGVyLnNldFJlc3BvbnNlVHlwZSggJ2FycmF5YnVmZmVyJyApO1xyXG5cdFx0XHRsb2FkZXIuc2V0UmVxdWVzdEhlYWRlciggdGhpcy5yZXF1ZXN0SGVhZGVyICk7XHJcblx0XHRcdGxvYWRlci5zZXRXaXRoQ3JlZGVudGlhbHMoIHRoaXMud2l0aENyZWRlbnRpYWxzICk7XHJcblxyXG5cdFx0XHRsb2FkZXIubG9hZCggdXJsLCBmdW5jdGlvbiAoIGRhdGEgKSB7XHJcblxyXG5cdFx0XHRcdHRyeSB7XHJcblxyXG5cdFx0XHRcdFx0c2NvcGUucGFyc2UoIGRhdGEsIHJlc291cmNlUGF0aCwgZnVuY3Rpb24gKCBnbHRmICkge1xyXG5cclxuXHRcdFx0XHRcdFx0b25Mb2FkKCBnbHRmICk7XHJcblxyXG5cdFx0XHRcdFx0XHRzY29wZS5tYW5hZ2VyLml0ZW1FbmQoIHVybCApO1xyXG5cclxuXHRcdFx0XHRcdH0sIF9vbkVycm9yICk7XHJcblxyXG5cdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xyXG5cclxuXHRcdFx0XHRcdF9vbkVycm9yKCBlICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0sIG9uUHJvZ3Jlc3MsIF9vbkVycm9yICk7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREUkFDT0xvYWRlcjogZnVuY3Rpb24gKCBkcmFjb0xvYWRlciApIHtcclxuXHJcblx0XHRcdHRoaXMuZHJhY29Mb2FkZXIgPSBkcmFjb0xvYWRlcjtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRERFNMb2FkZXI6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHJcblx0XHRcdFx0J1RIUkVFLkdMVEZMb2FkZXI6IFwiTVNGVF90ZXh0dXJlX2Rkc1wiIG5vIGxvbmdlciBzdXBwb3J0ZWQuIFBsZWFzZSB1cGRhdGUgdG8gXCJLSFJfdGV4dHVyZV9iYXNpc3VcIi4nXHJcblxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0S1RYMkxvYWRlcjogZnVuY3Rpb24gKCBrdHgyTG9hZGVyICkge1xyXG5cclxuXHRcdFx0dGhpcy5rdHgyTG9hZGVyID0ga3R4MkxvYWRlcjtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRNZXNob3B0RGVjb2RlcjogZnVuY3Rpb24gKCBtZXNob3B0RGVjb2RlciApIHtcclxuXHJcblx0XHRcdHRoaXMubWVzaG9wdERlY29kZXIgPSBtZXNob3B0RGVjb2RlcjtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRyZWdpc3RlcjogZnVuY3Rpb24gKCBjYWxsYmFjayApIHtcclxuXHJcblx0XHRcdGlmICggdGhpcy5wbHVnaW5DYWxsYmFja3MuaW5kZXhPZiggY2FsbGJhY2sgKSA9PT0gLSAxICkge1xyXG5cclxuXHRcdFx0XHR0aGlzLnBsdWdpbkNhbGxiYWNrcy5wdXNoKCBjYWxsYmFjayApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHR1bnJlZ2lzdGVyOiBmdW5jdGlvbiAoIGNhbGxiYWNrICkge1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLnBsdWdpbkNhbGxiYWNrcy5pbmRleE9mKCBjYWxsYmFjayApICE9PSAtIDEgKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMucGx1Z2luQ2FsbGJhY2tzLnNwbGljZSggdGhpcy5wbHVnaW5DYWxsYmFja3MuaW5kZXhPZiggY2FsbGJhY2sgKSwgMSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRwYXJzZTogZnVuY3Rpb24gKCBkYXRhLCBwYXRoLCBvbkxvYWQsIG9uRXJyb3IgKSB7XHJcblxyXG5cdFx0XHR2YXIgY29udGVudDtcclxuXHRcdFx0dmFyIGV4dGVuc2lvbnMgPSB7fTtcclxuXHRcdFx0dmFyIHBsdWdpbnMgPSB7fTtcclxuXHJcblx0XHRcdGlmICggdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnICkge1xyXG5cclxuXHRcdFx0XHRjb250ZW50ID0gZGF0YTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdHZhciBtYWdpYyA9IExvYWRlclV0aWxzLmRlY29kZVRleHQoIG5ldyBVaW50OEFycmF5KCBkYXRhLCAwLCA0ICkgKTtcclxuXHJcblx0XHRcdFx0aWYgKCBtYWdpYyA9PT0gQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTUFHSUMgKSB7XHJcblxyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHJcblx0XHRcdFx0XHRcdGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0JJTkFSWV9HTFRGIF0gPSBuZXcgR0xURkJpbmFyeUV4dGVuc2lvbiggZGF0YSApO1xyXG5cclxuXHRcdFx0XHRcdH0gY2F0Y2ggKCBlcnJvciApIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICggb25FcnJvciApIG9uRXJyb3IoIGVycm9yICk7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Y29udGVudCA9IGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0JJTkFSWV9HTFRGIF0uY29udGVudDtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRjb250ZW50ID0gTG9hZGVyVXRpbHMuZGVjb2RlVGV4dCggbmV3IFVpbnQ4QXJyYXkoIGRhdGEgKSApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIganNvbiA9IEpTT04ucGFyc2UoIGNvbnRlbnQgKTtcclxuXHJcblx0XHRcdGlmICgganNvbi5hc3NldCA9PT0gdW5kZWZpbmVkIHx8IGpzb24uYXNzZXQudmVyc2lvblsgMCBdIDwgMiApIHtcclxuXHJcblx0XHRcdFx0aWYgKCBvbkVycm9yICkgb25FcnJvciggbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5zdXBwb3J0ZWQgYXNzZXQuIGdsVEYgdmVyc2lvbnMgPj0yLjAgYXJlIHN1cHBvcnRlZC4nICkgKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgcGFyc2VyID0gbmV3IEdMVEZQYXJzZXIoIGpzb24sIHtcclxuXHJcblx0XHRcdFx0cGF0aDogcGF0aCB8fCB0aGlzLnJlc291cmNlUGF0aCB8fCAnJyxcclxuXHRcdFx0XHRjcm9zc09yaWdpbjogdGhpcy5jcm9zc09yaWdpbixcclxuXHRcdFx0XHRyZXF1ZXN0SGVhZGVyOiB0aGlzLnJlcXVlc3RIZWFkZXIsXHJcblx0XHRcdFx0bWFuYWdlcjogdGhpcy5tYW5hZ2VyLFxyXG5cdFx0XHRcdGt0eDJMb2FkZXI6IHRoaXMua3R4MkxvYWRlcixcclxuXHRcdFx0XHRtZXNob3B0RGVjb2RlcjogdGhpcy5tZXNob3B0RGVjb2RlclxyXG5cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0cGFyc2VyLmZpbGVMb2FkZXIuc2V0UmVxdWVzdEhlYWRlciggdGhpcy5yZXF1ZXN0SGVhZGVyICk7XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLnBsdWdpbkNhbGxiYWNrcy5sZW5ndGg7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW4gPSB0aGlzLnBsdWdpbkNhbGxiYWNrc1sgaSBdKCBwYXJzZXIgKTtcclxuXHRcdFx0XHRwbHVnaW5zWyBwbHVnaW4ubmFtZSBdID0gcGx1Z2luO1xyXG5cclxuXHRcdFx0XHQvLyBXb3JrYXJvdW5kIHRvIGF2b2lkIGRldGVybWluaW5nIGFzIHVua25vd24gZXh0ZW5zaW9uXHJcblx0XHRcdFx0Ly8gaW4gYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCkuXHJcblx0XHRcdFx0Ly8gUmVtb3ZlIHRoaXMgd29ya2Fyb3VuZCBpZiB3ZSBtb3ZlIGFsbCB0aGUgZXhpc3RpbmdcclxuXHRcdFx0XHQvLyBleHRlbnNpb24gaGFuZGxlcnMgdG8gcGx1Z2luIHN5c3RlbVxyXG5cdFx0XHRcdGV4dGVuc2lvbnNbIHBsdWdpbi5uYW1lIF0gPSB0cnVlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBqc29uLmV4dGVuc2lvbnNVc2VkICkge1xyXG5cclxuXHRcdFx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBqc29uLmV4dGVuc2lvbnNVc2VkLmxlbmd0aDsgKysgaSApIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgZXh0ZW5zaW9uTmFtZSA9IGpzb24uZXh0ZW5zaW9uc1VzZWRbIGkgXTtcclxuXHRcdFx0XHRcdHZhciBleHRlbnNpb25zUmVxdWlyZWQgPSBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZCB8fCBbXTtcclxuXHJcblx0XHRcdFx0XHRzd2l0Y2ggKCBleHRlbnNpb25OYW1lICkge1xyXG5cclxuXHRcdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVU5MSVQ6XHJcblx0XHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgZXh0ZW5zaW9uTmFtZSBdID0gbmV3IEdMVEZNYXRlcmlhbHNVbmxpdEV4dGVuc2lvbigpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1M6XHJcblx0XHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgZXh0ZW5zaW9uTmFtZSBdID0gbmV3IEdMVEZNYXRlcmlhbHNQYnJTcGVjdWxhckdsb3NzaW5lc3NFeHRlbnNpb24oKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdGNhc2UgRVhURU5TSU9OUy5LSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTjpcclxuXHRcdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURkRyYWNvTWVzaENvbXByZXNzaW9uRXh0ZW5zaW9uKCBqc29uLCB0aGlzLmRyYWNvTG9hZGVyICk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRjYXNlIEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNOlxyXG5cdFx0XHRcdFx0XHRcdGV4dGVuc2lvbnNbIGV4dGVuc2lvbk5hbWUgXSA9IG5ldyBHTFRGVGV4dHVyZVRyYW5zZm9ybUV4dGVuc2lvbigpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9NRVNIX1FVQU5USVpBVElPTjpcclxuXHRcdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURk1lc2hRdWFudGl6YXRpb25FeHRlbnNpb24oKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICggZXh0ZW5zaW9uc1JlcXVpcmVkLmluZGV4T2YoIGV4dGVuc2lvbk5hbWUgKSA+PSAwICYmIHBsdWdpbnNbIGV4dGVuc2lvbk5hbWUgXSA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IFVua25vd24gZXh0ZW5zaW9uIFwiJyArIGV4dGVuc2lvbk5hbWUgKyAnXCIuJyApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwYXJzZXIuc2V0RXh0ZW5zaW9ucyggZXh0ZW5zaW9ucyApO1xyXG5cdFx0XHRwYXJzZXIuc2V0UGx1Z2lucyggcGx1Z2lucyApO1xyXG5cdFx0XHRwYXJzZXIucGFyc2UoIG9uTG9hZCwgb25FcnJvciApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSApO1xyXG5cclxuXHQvKiBHTFRGUkVHSVNUUlkgKi9cclxuXHJcblx0ZnVuY3Rpb24gR0xURlJlZ2lzdHJ5KCkge1xyXG5cclxuXHRcdHZhciBvYmplY3RzID0ge307XHJcblxyXG5cdFx0cmV0dXJuXHR7XHJcblxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgga2V5ICkge1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gb2JqZWN0c1sga2V5IF07XHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0YWRkOiBmdW5jdGlvbiAoIGtleSwgb2JqZWN0ICkge1xyXG5cclxuXHRcdFx0XHRvYmplY3RzWyBrZXkgXSA9IG9iamVjdDtcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRyZW1vdmU6IGZ1bmN0aW9uICgga2V5ICkge1xyXG5cclxuXHRcdFx0XHRkZWxldGUgb2JqZWN0c1sga2V5IF07XHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0cmVtb3ZlQWxsOiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdG9iamVjdHMgPSB7fTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9O1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblx0LyoqKioqKioqKiogRVhURU5TSU9OUyAqKioqKioqKioqKi9cclxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHR2YXIgRVhURU5TSU9OUyA9IHtcclxuXHRcdEtIUl9CSU5BUllfR0xURjogJ0tIUl9iaW5hcnlfZ2xURicsXHJcblx0XHRLSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTjogJ0tIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uJyxcclxuXHRcdEtIUl9MSUdIVFNfUFVOQ1RVQUw6ICdLSFJfbGlnaHRzX3B1bmN0dWFsJyxcclxuXHRcdEtIUl9NQVRFUklBTFNfQ0xFQVJDT0FUOiAnS0hSX21hdGVyaWFsc19jbGVhcmNvYXQnLFxyXG5cdFx0S0hSX01BVEVSSUFMU19QQlJfU1BFQ1VMQVJfR0xPU1NJTkVTUzogJ0tIUl9tYXRlcmlhbHNfcGJyU3BlY3VsYXJHbG9zc2luZXNzJyxcclxuXHRcdEtIUl9NQVRFUklBTFNfVFJBTlNNSVNTSU9OOiAnS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24nLFxyXG5cdFx0S0hSX01BVEVSSUFMU19VTkxJVDogJ0tIUl9tYXRlcmlhbHNfdW5saXQnLFxyXG5cdFx0S0hSX1RFWFRVUkVfQkFTSVNVOiAnS0hSX3RleHR1cmVfYmFzaXN1JyxcclxuXHRcdEtIUl9URVhUVVJFX1RSQU5TRk9STTogJ0tIUl90ZXh0dXJlX3RyYW5zZm9ybScsXHJcblx0XHRLSFJfTUVTSF9RVUFOVElaQVRJT046ICdLSFJfbWVzaF9xdWFudGl6YXRpb24nLFxyXG5cdFx0RVhUX1RFWFRVUkVfV0VCUDogJ0VYVF90ZXh0dXJlX3dlYnAnLFxyXG5cdFx0RVhUX01FU0hPUFRfQ09NUFJFU1NJT046ICdFWFRfbWVzaG9wdF9jb21wcmVzc2lvbidcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBQdW5jdHVhbCBMaWdodHMgRXh0ZW5zaW9uXHJcblx0ICpcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbGlnaHRzX3B1bmN0dWFsXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gR0xURkxpZ2h0c0V4dGVuc2lvbiggcGFyc2VyICkge1xyXG5cclxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xyXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTElHSFRTX1BVTkNUVUFMO1xyXG5cclxuXHRcdC8vIE9iamVjdDNEIGluc3RhbmNlIGNhY2hlc1xyXG5cdFx0dGhpcy5jYWNoZSA9IHsgcmVmczoge30sIHVzZXM6IHt9IH07XHJcblxyXG5cdH1cclxuXHJcblx0R0xURkxpZ2h0c0V4dGVuc2lvbi5wcm90b3R5cGUuX21hcmtEZWZzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdHZhciBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcclxuXHRcdHZhciBub2RlRGVmcyA9IHRoaXMucGFyc2VyLmpzb24ubm9kZXMgfHwgW107XHJcblxyXG5cdFx0Zm9yICggdmFyIG5vZGVJbmRleCA9IDAsIG5vZGVMZW5ndGggPSBub2RlRGVmcy5sZW5ndGg7IG5vZGVJbmRleCA8IG5vZGVMZW5ndGg7IG5vZGVJbmRleCArKyApIHtcclxuXHJcblx0XHRcdHZhciBub2RlRGVmID0gbm9kZURlZnNbIG5vZGVJbmRleCBdO1xyXG5cclxuXHRcdFx0aWYgKCBub2RlRGVmLmV4dGVuc2lvbnNcclxuXHRcdFx0XHQmJiBub2RlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdXHJcblx0XHRcdFx0JiYgbm9kZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXS5saWdodCAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRwYXJzZXIuX2FkZE5vZGVSZWYoIHRoaXMuY2FjaGUsIG5vZGVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0ubGlnaHQgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdEdMVEZMaWdodHNFeHRlbnNpb24ucHJvdG90eXBlLl9sb2FkTGlnaHQgPSBmdW5jdGlvbiAoIGxpZ2h0SW5kZXggKSB7XHJcblxyXG5cdFx0dmFyIHBhcnNlciA9IHRoaXMucGFyc2VyO1xyXG5cdFx0dmFyIGNhY2hlS2V5ID0gJ2xpZ2h0OicgKyBsaWdodEluZGV4O1xyXG5cdFx0dmFyIGRlcGVuZGVuY3kgPSBwYXJzZXIuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xyXG5cclxuXHRcdGlmICggZGVwZW5kZW5jeSApIHJldHVybiBkZXBlbmRlbmN5O1xyXG5cclxuXHRcdHZhciBqc29uID0gcGFyc2VyLmpzb247XHJcblx0XHR2YXIgZXh0ZW5zaW9ucyA9ICgganNvbi5leHRlbnNpb25zICYmIGpzb24uZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB8fCB7fTtcclxuXHRcdHZhciBsaWdodERlZnMgPSBleHRlbnNpb25zLmxpZ2h0cyB8fCBbXTtcclxuXHRcdHZhciBsaWdodERlZiA9IGxpZ2h0RGVmc1sgbGlnaHRJbmRleCBdO1xyXG5cdFx0dmFyIGxpZ2h0Tm9kZTtcclxuXHJcblx0XHR2YXIgY29sb3IgPSBuZXcgQ29sb3IoIDB4ZmZmZmZmICk7XHJcblxyXG5cdFx0aWYgKCBsaWdodERlZi5jb2xvciAhPT0gdW5kZWZpbmVkICkgY29sb3IuZnJvbUFycmF5KCBsaWdodERlZi5jb2xvciApO1xyXG5cclxuXHRcdHZhciByYW5nZSA9IGxpZ2h0RGVmLnJhbmdlICE9PSB1bmRlZmluZWQgPyBsaWdodERlZi5yYW5nZSA6IDA7XHJcblxyXG5cdFx0c3dpdGNoICggbGlnaHREZWYudHlwZSApIHtcclxuXHJcblx0XHRcdGNhc2UgJ2RpcmVjdGlvbmFsJzpcclxuXHRcdFx0XHRsaWdodE5vZGUgPSBuZXcgRGlyZWN0aW9uYWxMaWdodCggY29sb3IgKTtcclxuXHRcdFx0XHRsaWdodE5vZGUudGFyZ2V0LnBvc2l0aW9uLnNldCggMCwgMCwgLSAxICk7XHJcblx0XHRcdFx0bGlnaHROb2RlLmFkZCggbGlnaHROb2RlLnRhcmdldCApO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAncG9pbnQnOlxyXG5cdFx0XHRcdGxpZ2h0Tm9kZSA9IG5ldyBQb2ludExpZ2h0KCBjb2xvciApO1xyXG5cdFx0XHRcdGxpZ2h0Tm9kZS5kaXN0YW5jZSA9IHJhbmdlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnc3BvdCc6XHJcblx0XHRcdFx0bGlnaHROb2RlID0gbmV3IFNwb3RMaWdodCggY29sb3IgKTtcclxuXHRcdFx0XHRsaWdodE5vZGUuZGlzdGFuY2UgPSByYW5nZTtcclxuXHRcdFx0XHQvLyBIYW5kbGUgc3BvdGxpZ2h0IHByb3BlcnRpZXMuXHJcblx0XHRcdFx0bGlnaHREZWYuc3BvdCA9IGxpZ2h0RGVmLnNwb3QgfHwge307XHJcblx0XHRcdFx0bGlnaHREZWYuc3BvdC5pbm5lckNvbmVBbmdsZSA9IGxpZ2h0RGVmLnNwb3QuaW5uZXJDb25lQW5nbGUgIT09IHVuZGVmaW5lZCA/IGxpZ2h0RGVmLnNwb3QuaW5uZXJDb25lQW5nbGUgOiAwO1xyXG5cdFx0XHRcdGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGUgPSBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlICE9PSB1bmRlZmluZWQgPyBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlIDogTWF0aC5QSSAvIDQuMDtcclxuXHRcdFx0XHRsaWdodE5vZGUuYW5nbGUgPSBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlO1xyXG5cdFx0XHRcdGxpZ2h0Tm9kZS5wZW51bWJyYSA9IDEuMCAtIGxpZ2h0RGVmLnNwb3QuaW5uZXJDb25lQW5nbGUgLyBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlO1xyXG5cdFx0XHRcdGxpZ2h0Tm9kZS50YXJnZXQucG9zaXRpb24uc2V0KCAwLCAwLCAtIDEgKTtcclxuXHRcdFx0XHRsaWdodE5vZGUuYWRkKCBsaWdodE5vZGUudGFyZ2V0ICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFVuZXhwZWN0ZWQgbGlnaHQgdHlwZTogJyArIGxpZ2h0RGVmLnR5cGUgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gU29tZSBsaWdodHMgKGUuZy4gc3BvdCkgZGVmYXVsdCB0byBhIHBvc2l0aW9uIG90aGVyIHRoYW4gdGhlIG9yaWdpbi4gUmVzZXQgdGhlIHBvc2l0aW9uXHJcblx0XHQvLyBoZXJlLCBiZWNhdXNlIG5vZGUtbGV2ZWwgcGFyc2luZyB3aWxsIG9ubHkgb3ZlcnJpZGUgcG9zaXRpb24gaWYgZXhwbGljaXRseSBzcGVjaWZpZWQuXHJcblx0XHRsaWdodE5vZGUucG9zaXRpb24uc2V0KCAwLCAwLCAwICk7XHJcblxyXG5cdFx0bGlnaHROb2RlLmRlY2F5ID0gMjtcclxuXHJcblx0XHRpZiAoIGxpZ2h0RGVmLmludGVuc2l0eSAhPT0gdW5kZWZpbmVkICkgbGlnaHROb2RlLmludGVuc2l0eSA9IGxpZ2h0RGVmLmludGVuc2l0eTtcclxuXHJcblx0XHRsaWdodE5vZGUubmFtZSA9IHBhcnNlci5jcmVhdGVVbmlxdWVOYW1lKCBsaWdodERlZi5uYW1lIHx8ICggJ2xpZ2h0XycgKyBsaWdodEluZGV4ICkgKTtcclxuXHJcblx0XHRkZXBlbmRlbmN5ID0gUHJvbWlzZS5yZXNvbHZlKCBsaWdodE5vZGUgKTtcclxuXHJcblx0XHRwYXJzZXIuY2FjaGUuYWRkKCBjYWNoZUtleSwgZGVwZW5kZW5jeSApO1xyXG5cclxuXHRcdHJldHVybiBkZXBlbmRlbmN5O1xyXG5cclxuXHR9O1xyXG5cclxuXHRHTFRGTGlnaHRzRXh0ZW5zaW9uLnByb3RvdHlwZS5jcmVhdGVOb2RlQXR0YWNobWVudCA9IGZ1bmN0aW9uICggbm9kZUluZGV4ICkge1xyXG5cclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHZhciBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcclxuXHRcdHZhciBqc29uID0gcGFyc2VyLmpzb247XHJcblx0XHR2YXIgbm9kZURlZiA9IGpzb24ubm9kZXNbIG5vZGVJbmRleCBdO1xyXG5cdFx0dmFyIGxpZ2h0RGVmID0gKCBub2RlRGVmLmV4dGVuc2lvbnMgJiYgbm9kZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHx8IHt9O1xyXG5cdFx0dmFyIGxpZ2h0SW5kZXggPSBsaWdodERlZi5saWdodDtcclxuXHJcblx0XHRpZiAoIGxpZ2h0SW5kZXggPT09IHVuZGVmaW5lZCApIHJldHVybiBudWxsO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLl9sb2FkTGlnaHQoIGxpZ2h0SW5kZXggKS50aGVuKCBmdW5jdGlvbiAoIGxpZ2h0ICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIHBhcnNlci5fZ2V0Tm9kZVJlZiggc2VsZi5jYWNoZSwgbGlnaHRJbmRleCwgbGlnaHQgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVubGl0IE1hdGVyaWFscyBFeHRlbnNpb25cclxuXHQgKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfdW5saXRcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBHTFRGTWF0ZXJpYWxzVW5saXRFeHRlbnNpb24oKSB7XHJcblxyXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1VOTElUO1xyXG5cclxuXHR9XHJcblxyXG5cdEdMVEZNYXRlcmlhbHNVbmxpdEV4dGVuc2lvbi5wcm90b3R5cGUuZ2V0TWF0ZXJpYWxUeXBlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdHJldHVybiBNZXNoQmFzaWNNYXRlcmlhbDtcclxuXHJcblx0fTtcclxuXHJcblx0R0xURk1hdGVyaWFsc1VubGl0RXh0ZW5zaW9uLnByb3RvdHlwZS5leHRlbmRQYXJhbXMgPSBmdW5jdGlvbiAoIG1hdGVyaWFsUGFyYW1zLCBtYXRlcmlhbERlZiwgcGFyc2VyICkge1xyXG5cclxuXHRcdHZhciBwZW5kaW5nID0gW107XHJcblxyXG5cdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IgPSBuZXcgQ29sb3IoIDEuMCwgMS4wLCAxLjAgKTtcclxuXHRcdG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSAxLjA7XHJcblxyXG5cdFx0dmFyIG1ldGFsbGljUm91Z2huZXNzID0gbWF0ZXJpYWxEZWYucGJyTWV0YWxsaWNSb3VnaG5lc3M7XHJcblxyXG5cdFx0aWYgKCBtZXRhbGxpY1JvdWdobmVzcyApIHtcclxuXHJcblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yICkgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBhcnJheSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvcjtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IuZnJvbUFycmF5KCBhcnJheSApO1xyXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSBhcnJheVsgMyBdO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbWFwJywgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSApICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBDbGVhcmNvYXQgTWF0ZXJpYWxzIEV4dGVuc2lvblxyXG5cdCAqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19jbGVhcmNvYXRcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBHTFRGTWF0ZXJpYWxzQ2xlYXJjb2F0RXh0ZW5zaW9uKCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XHJcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfQ0xFQVJDT0FUO1xyXG5cclxuXHR9XHJcblxyXG5cdEdMVEZNYXRlcmlhbHNDbGVhcmNvYXRFeHRlbnNpb24ucHJvdG90eXBlLmdldE1hdGVyaWFsVHlwZSA9IGZ1bmN0aW9uICggbWF0ZXJpYWxJbmRleCApIHtcclxuXHJcblx0XHR2YXIgcGFyc2VyID0gdGhpcy5wYXJzZXI7XHJcblx0XHR2YXIgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcclxuXHJcblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgcmV0dXJuIG51bGw7XHJcblxyXG5cdFx0cmV0dXJuIE1lc2hQaHlzaWNhbE1hdGVyaWFsO1xyXG5cclxuXHR9O1xyXG5cclxuXHRHTFRGTWF0ZXJpYWxzQ2xlYXJjb2F0RXh0ZW5zaW9uLnByb3RvdHlwZS5leHRlbmRNYXRlcmlhbFBhcmFtcyA9IGZ1bmN0aW9uICggbWF0ZXJpYWxJbmRleCwgbWF0ZXJpYWxQYXJhbXMgKSB7XHJcblxyXG5cdFx0dmFyIHBhcnNlciA9IHRoaXMucGFyc2VyO1xyXG5cdFx0dmFyIG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XHJcblxyXG5cdFx0aWYgKCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwgISBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHtcclxuXHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHBlbmRpbmcgPSBbXTtcclxuXHJcblx0XHR2YXIgZXh0ZW5zaW9uID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XHJcblxyXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0RmFjdG9yICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5jbGVhcmNvYXQgPSBleHRlbnNpb24uY2xlYXJjb2F0RmFjdG9yO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXRUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2NsZWFyY29hdE1hcCcsIGV4dGVuc2lvbi5jbGVhcmNvYXRUZXh0dXJlICkgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5jbGVhcmNvYXRSb3VnaG5lc3MgPSBleHRlbnNpb24uY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2NsZWFyY29hdFJvdWdobmVzc01hcCcsIGV4dGVuc2lvbi5jbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlICkgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdjbGVhcmNvYXROb3JtYWxNYXAnLCBleHRlbnNpb24uY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZSApICk7XHJcblxyXG5cdFx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXROb3JtYWxUZXh0dXJlLnNjYWxlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzY2FsZSA9IGV4dGVuc2lvbi5jbGVhcmNvYXROb3JtYWxUZXh0dXJlLnNjYWxlO1xyXG5cclxuXHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8xMTQzOCNpc3N1ZWNvbW1lbnQtNTA3MDAzOTk1XHJcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuY2xlYXJjb2F0Tm9ybWFsU2NhbGUgPSBuZXcgVmVjdG9yMiggc2NhbGUsIC0gc2NhbGUgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRyYW5zbWlzc2lvbiBNYXRlcmlhbHMgRXh0ZW5zaW9uXHJcblx0ICpcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvblxyXG5cdCAqIERyYWZ0OiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvcHVsbC8xNjk4XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gR0xURk1hdGVyaWFsc1RyYW5zbWlzc2lvbkV4dGVuc2lvbiggcGFyc2VyICkge1xyXG5cclxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xyXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1RSQU5TTUlTU0lPTjtcclxuXHJcblx0fVxyXG5cclxuXHRHTFRGTWF0ZXJpYWxzVHJhbnNtaXNzaW9uRXh0ZW5zaW9uLnByb3RvdHlwZS5nZXRNYXRlcmlhbFR5cGUgPSBmdW5jdGlvbiAoIG1hdGVyaWFsSW5kZXggKSB7XHJcblxyXG5cdFx0dmFyIHBhcnNlciA9IHRoaXMucGFyc2VyO1xyXG5cdFx0dmFyIG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XHJcblxyXG5cdFx0aWYgKCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwgISBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHJldHVybiBudWxsO1xyXG5cclxuXHRcdHJldHVybiBNZXNoUGh5c2ljYWxNYXRlcmlhbDtcclxuXHJcblx0fTtcclxuXHJcblx0R0xURk1hdGVyaWFsc1RyYW5zbWlzc2lvbkV4dGVuc2lvbi5wcm90b3R5cGUuZXh0ZW5kTWF0ZXJpYWxQYXJhbXMgPSBmdW5jdGlvbiAoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICkge1xyXG5cclxuXHRcdHZhciBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcclxuXHRcdHZhciBtYXRlcmlhbERlZiA9IHBhcnNlci5qc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xyXG5cclxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBwZW5kaW5nID0gW107XHJcblxyXG5cdFx0dmFyIGV4dGVuc2lvbiA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xyXG5cclxuXHRcdGlmICggZXh0ZW5zaW9uLnRyYW5zbWlzc2lvbkZhY3RvciAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMudHJhbnNtaXNzaW9uID0gZXh0ZW5zaW9uLnRyYW5zbWlzc2lvbkZhY3RvcjtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBleHRlbnNpb24udHJhbnNtaXNzaW9uVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICd0cmFuc21pc3Npb25NYXAnLCBleHRlbnNpb24udHJhbnNtaXNzaW9uVGV4dHVyZSApICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBCYXNpc1UgVGV4dHVyZSBFeHRlbnNpb25cclxuXHQgKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl90ZXh0dXJlX2Jhc2lzdVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIEdMVEZUZXh0dXJlQmFzaXNVRXh0ZW5zaW9uKCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XHJcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9URVhUVVJFX0JBU0lTVTtcclxuXHJcblx0fVxyXG5cclxuXHRHTFRGVGV4dHVyZUJhc2lzVUV4dGVuc2lvbi5wcm90b3R5cGUubG9hZFRleHR1cmUgPSBmdW5jdGlvbiAoIHRleHR1cmVJbmRleCApIHtcclxuXHJcblx0XHR2YXIgcGFyc2VyID0gdGhpcy5wYXJzZXI7XHJcblx0XHR2YXIganNvbiA9IHBhcnNlci5qc29uO1xyXG5cclxuXHRcdHZhciB0ZXh0dXJlRGVmID0ganNvbi50ZXh0dXJlc1sgdGV4dHVyZUluZGV4IF07XHJcblxyXG5cdFx0aWYgKCAhIHRleHR1cmVEZWYuZXh0ZW5zaW9ucyB8fCAhIHRleHR1cmVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGV4dGVuc2lvbiA9IHRleHR1cmVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XHJcblx0XHR2YXIgc291cmNlID0ganNvbi5pbWFnZXNbIGV4dGVuc2lvbi5zb3VyY2UgXTtcclxuXHRcdHZhciBsb2FkZXIgPSBwYXJzZXIub3B0aW9ucy5rdHgyTG9hZGVyO1xyXG5cclxuXHRcdGlmICggISBsb2FkZXIgKSB7XHJcblxyXG5cdFx0XHRpZiAoIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkICYmIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkLmluZGV4T2YoIHRoaXMubmFtZSApID49IDAgKSB7XHJcblxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IHNldEtUWDJMb2FkZXIgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGxvYWRpbmcgS1RYMiB0ZXh0dXJlcycgKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdC8vIEFzc3VtZXMgdGhhdCB0aGUgZXh0ZW5zaW9uIGlzIG9wdGlvbmFsIGFuZCB0aGF0IGEgZmFsbGJhY2sgdGV4dHVyZSBpcyBwcmVzZW50XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwYXJzZXIubG9hZFRleHR1cmVJbWFnZSggdGV4dHVyZUluZGV4LCBzb3VyY2UsIGxvYWRlciApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBXZWJQIFRleHR1cmUgRXh0ZW5zaW9uXHJcblx0ICpcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvVmVuZG9yL0VYVF90ZXh0dXJlX3dlYnBcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBHTFRGVGV4dHVyZVdlYlBFeHRlbnNpb24oIHBhcnNlciApIHtcclxuXHJcblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcclxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuRVhUX1RFWFRVUkVfV0VCUDtcclxuXHRcdHRoaXMuaXNTdXBwb3J0ZWQgPSBudWxsO1xyXG5cclxuXHR9XHJcblxyXG5cdEdMVEZUZXh0dXJlV2ViUEV4dGVuc2lvbi5wcm90b3R5cGUubG9hZFRleHR1cmUgPSBmdW5jdGlvbiAoIHRleHR1cmVJbmRleCApIHtcclxuXHJcblx0XHR2YXIgbmFtZSA9IHRoaXMubmFtZTtcclxuXHRcdHZhciBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcclxuXHRcdHZhciBqc29uID0gcGFyc2VyLmpzb247XHJcblxyXG5cdFx0dmFyIHRleHR1cmVEZWYgPSBqc29uLnRleHR1cmVzWyB0ZXh0dXJlSW5kZXggXTtcclxuXHJcblx0XHRpZiAoICEgdGV4dHVyZURlZi5leHRlbnNpb25zIHx8ICEgdGV4dHVyZURlZi5leHRlbnNpb25zWyBuYW1lIF0gKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGV4dGVuc2lvbiA9IHRleHR1cmVEZWYuZXh0ZW5zaW9uc1sgbmFtZSBdO1xyXG5cdFx0dmFyIHNvdXJjZSA9IGpzb24uaW1hZ2VzWyBleHRlbnNpb24uc291cmNlIF07XHJcblxyXG5cdFx0dmFyIGxvYWRlciA9IHBhcnNlci50ZXh0dXJlTG9hZGVyO1xyXG5cdFx0aWYgKCBzb3VyY2UudXJpICkge1xyXG5cclxuXHRcdFx0dmFyIGhhbmRsZXIgPSBwYXJzZXIub3B0aW9ucy5tYW5hZ2VyLmdldEhhbmRsZXIoIHNvdXJjZS51cmkgKTtcclxuXHRcdFx0aWYgKCBoYW5kbGVyICE9PSBudWxsICkgbG9hZGVyID0gaGFuZGxlcjtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZGV0ZWN0U3VwcG9ydCgpLnRoZW4oIGZ1bmN0aW9uICggaXNTdXBwb3J0ZWQgKSB7XHJcblxyXG5cdFx0XHRpZiAoIGlzU3VwcG9ydGVkICkgcmV0dXJuIHBhcnNlci5sb2FkVGV4dHVyZUltYWdlKCB0ZXh0dXJlSW5kZXgsIHNvdXJjZSwgbG9hZGVyICk7XHJcblxyXG5cdFx0XHRpZiAoIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkICYmIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkLmluZGV4T2YoIG5hbWUgKSA+PSAwICkge1xyXG5cclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBXZWJQIHJlcXVpcmVkIGJ5IGFzc2V0IGJ1dCB1bnN1cHBvcnRlZC4nICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBGYWxsIGJhY2sgdG8gUE5HIG9yIEpQRUcuXHJcblx0XHRcdHJldHVybiBwYXJzZXIubG9hZFRleHR1cmUoIHRleHR1cmVJbmRleCApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fTtcclxuXHJcblx0R0xURlRleHR1cmVXZWJQRXh0ZW5zaW9uLnByb3RvdHlwZS5kZXRlY3RTdXBwb3J0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdGlmICggISB0aGlzLmlzU3VwcG9ydGVkICkge1xyXG5cclxuXHRcdFx0dGhpcy5pc1N1cHBvcnRlZCA9IG5ldyBQcm9taXNlKCBmdW5jdGlvbiAoIHJlc29sdmUgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuXHRcdFx0XHQvLyBMb3NzeSB0ZXN0IGltYWdlLiBTdXBwb3J0IGZvciBsb3NzeSBpbWFnZXMgZG9lc24ndCBndWFyYW50ZWUgc3VwcG9ydCBmb3IgYWxsXHJcblx0XHRcdFx0Ly8gV2ViUCBpbWFnZXMsIHVuZm9ydHVuYXRlbHkuXHJcblx0XHRcdFx0aW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsVWtsR1JpSUFBQUJYUlVKUVZsQTRJQllBQUFBd0FRQ2RBU29CQUFFQURzRCtKYVFBQTNBQUFBQUEnO1xyXG5cclxuXHRcdFx0XHRpbWFnZS5vbmxvYWQgPSBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRcdHJlc29sdmUoIGltYWdlLmhlaWdodCA9PT0gMSApO1xyXG5cclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5pc1N1cHBvcnRlZDtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0KiBtZXNob3B0IEJ1ZmZlclZpZXcgQ29tcHJlc3Npb24gRXh0ZW5zaW9uXHJcblx0KlxyXG5cdCogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL1ZlbmRvci9FWFRfbWVzaG9wdF9jb21wcmVzc2lvblxyXG5cdCovXHJcblx0ZnVuY3Rpb24gR0xURk1lc2hvcHRDb21wcmVzc2lvbiggcGFyc2VyICkge1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuRVhUX01FU0hPUFRfQ09NUFJFU1NJT047XHJcblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcclxuXHJcblx0fVxyXG5cclxuXHRHTFRGTWVzaG9wdENvbXByZXNzaW9uLnByb3RvdHlwZS5sb2FkQnVmZmVyVmlldyA9IGZ1bmN0aW9uICggaW5kZXggKSB7XHJcblxyXG5cdFx0dmFyIGpzb24gPSB0aGlzLnBhcnNlci5qc29uO1xyXG5cdFx0dmFyIGJ1ZmZlclZpZXcgPSBqc29uLmJ1ZmZlclZpZXdzWyBpbmRleCBdO1xyXG5cclxuXHRcdGlmICggYnVmZmVyVmlldy5leHRlbnNpb25zICYmIGJ1ZmZlclZpZXcuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XHJcblxyXG5cdFx0XHR2YXIgZXh0ZW5zaW9uRGVmID0gYnVmZmVyVmlldy5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcclxuXHJcblx0XHRcdHZhciBidWZmZXIgPSB0aGlzLnBhcnNlci5nZXREZXBlbmRlbmN5KCAnYnVmZmVyJywgZXh0ZW5zaW9uRGVmLmJ1ZmZlciApO1xyXG5cdFx0XHR2YXIgZGVjb2RlciA9IHRoaXMucGFyc2VyLm9wdGlvbnMubWVzaG9wdERlY29kZXI7XHJcblxyXG5cdFx0XHRpZiAoICEgZGVjb2RlciB8fCAhIGRlY29kZXIuc3VwcG9ydGVkICkge1xyXG5cclxuXHRcdFx0XHRpZiAoIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkICYmIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkLmluZGV4T2YoIHRoaXMubmFtZSApID49IDAgKSB7XHJcblxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogc2V0TWVzaG9wdERlY29kZXIgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGxvYWRpbmcgY29tcHJlc3NlZCBmaWxlcycgKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHQvLyBBc3N1bWVzIHRoYXQgdGhlIGV4dGVuc2lvbiBpcyBvcHRpb25hbCBhbmQgdGhhdCBmYWxsYmFjayBidWZmZXIgZGF0YSBpcyBwcmVzZW50XHJcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKCBbIGJ1ZmZlciwgZGVjb2Rlci5yZWFkeSBdICkudGhlbiggZnVuY3Rpb24gKCByZXMgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBieXRlT2Zmc2V0ID0gZXh0ZW5zaW9uRGVmLmJ5dGVPZmZzZXQgfHwgMDtcclxuXHRcdFx0XHR2YXIgYnl0ZUxlbmd0aCA9IGV4dGVuc2lvbkRlZi5ieXRlTGVuZ3RoIHx8IDA7XHJcblxyXG5cdFx0XHRcdHZhciBjb3VudCA9IGV4dGVuc2lvbkRlZi5jb3VudDtcclxuXHRcdFx0XHR2YXIgc3RyaWRlID0gZXh0ZW5zaW9uRGVmLmJ5dGVTdHJpZGU7XHJcblxyXG5cdFx0XHRcdHZhciByZXN1bHQgPSBuZXcgQXJyYXlCdWZmZXIoIGNvdW50ICogc3RyaWRlICk7XHJcblx0XHRcdFx0dmFyIHNvdXJjZSA9IG5ldyBVaW50OEFycmF5KCByZXNbIDAgXSwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCApO1xyXG5cclxuXHRcdFx0XHRkZWNvZGVyLmRlY29kZUdsdGZCdWZmZXIoIG5ldyBVaW50OEFycmF5KCByZXN1bHQgKSwgY291bnQsIHN0cmlkZSwgc291cmNlLCBleHRlbnNpb25EZWYubW9kZSwgZXh0ZW5zaW9uRGVmLmZpbHRlciApO1xyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0LyogQklOQVJZIEVYVEVOU0lPTiAqL1xyXG5cdHZhciBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9NQUdJQyA9ICdnbFRGJztcclxuXHR2YXIgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIID0gMTI7XHJcblx0dmFyIEJJTkFSWV9FWFRFTlNJT05fQ0hVTktfVFlQRVMgPSB7IEpTT046IDB4NEU0RjUzNEEsIEJJTjogMHgwMDRFNDk0MiB9O1xyXG5cclxuXHRmdW5jdGlvbiBHTFRGQmluYXJ5RXh0ZW5zaW9uKCBkYXRhICkge1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX0JJTkFSWV9HTFRGO1xyXG5cdFx0dGhpcy5jb250ZW50ID0gbnVsbDtcclxuXHRcdHRoaXMuYm9keSA9IG51bGw7XHJcblxyXG5cdFx0dmFyIGhlYWRlclZpZXcgPSBuZXcgRGF0YVZpZXcoIGRhdGEsIDAsIEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSCApO1xyXG5cclxuXHRcdHRoaXMuaGVhZGVyID0ge1xyXG5cdFx0XHRtYWdpYzogTG9hZGVyVXRpbHMuZGVjb2RlVGV4dCggbmV3IFVpbnQ4QXJyYXkoIGRhdGEuc2xpY2UoIDAsIDQgKSApICksXHJcblx0XHRcdHZlcnNpb246IGhlYWRlclZpZXcuZ2V0VWludDMyKCA0LCB0cnVlICksXHJcblx0XHRcdGxlbmd0aDogaGVhZGVyVmlldy5nZXRVaW50MzIoIDgsIHRydWUgKVxyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAoIHRoaXMuaGVhZGVyLm1hZ2ljICE9PSBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9NQUdJQyApIHtcclxuXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFVuc3VwcG9ydGVkIGdsVEYtQmluYXJ5IGhlYWRlci4nICk7XHJcblxyXG5cdFx0fSBlbHNlIGlmICggdGhpcy5oZWFkZXIudmVyc2lvbiA8IDIuMCApIHtcclxuXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IExlZ2FjeSBiaW5hcnkgZmlsZSBkZXRlY3RlZC4nICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBjaHVua0NvbnRlbnRzTGVuZ3RoID0gdGhpcy5oZWFkZXIubGVuZ3RoIC0gQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIO1xyXG5cdFx0dmFyIGNodW5rVmlldyA9IG5ldyBEYXRhVmlldyggZGF0YSwgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIICk7XHJcblx0XHR2YXIgY2h1bmtJbmRleCA9IDA7XHJcblxyXG5cdFx0d2hpbGUgKCBjaHVua0luZGV4IDwgY2h1bmtDb250ZW50c0xlbmd0aCApIHtcclxuXHJcblx0XHRcdHZhciBjaHVua0xlbmd0aCA9IGNodW5rVmlldy5nZXRVaW50MzIoIGNodW5rSW5kZXgsIHRydWUgKTtcclxuXHRcdFx0Y2h1bmtJbmRleCArPSA0O1xyXG5cclxuXHRcdFx0dmFyIGNodW5rVHlwZSA9IGNodW5rVmlldy5nZXRVaW50MzIoIGNodW5rSW5kZXgsIHRydWUgKTtcclxuXHRcdFx0Y2h1bmtJbmRleCArPSA0O1xyXG5cclxuXHRcdFx0aWYgKCBjaHVua1R5cGUgPT09IEJJTkFSWV9FWFRFTlNJT05fQ0hVTktfVFlQRVMuSlNPTiApIHtcclxuXHJcblx0XHRcdFx0dmFyIGNvbnRlbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KCBkYXRhLCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggKyBjaHVua0luZGV4LCBjaHVua0xlbmd0aCApO1xyXG5cdFx0XHRcdHRoaXMuY29udGVudCA9IExvYWRlclV0aWxzLmRlY29kZVRleHQoIGNvbnRlbnRBcnJheSApO1xyXG5cclxuXHRcdFx0fSBlbHNlIGlmICggY2h1bmtUeXBlID09PSBCSU5BUllfRVhURU5TSU9OX0NIVU5LX1RZUEVTLkJJTiApIHtcclxuXHJcblx0XHRcdFx0dmFyIGJ5dGVPZmZzZXQgPSBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggKyBjaHVua0luZGV4O1xyXG5cdFx0XHRcdHRoaXMuYm9keSA9IGRhdGEuc2xpY2UoIGJ5dGVPZmZzZXQsIGJ5dGVPZmZzZXQgKyBjaHVua0xlbmd0aCApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gQ2xpZW50cyBtdXN0IGlnbm9yZSBjaHVua3Mgd2l0aCB1bmtub3duIHR5cGVzLlxyXG5cclxuXHRcdFx0Y2h1bmtJbmRleCArPSBjaHVua0xlbmd0aDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0aGlzLmNvbnRlbnQgPT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBKU09OIGNvbnRlbnQgbm90IGZvdW5kLicgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRFJBQ08gTWVzaCBDb21wcmVzc2lvbiBFeHRlbnNpb25cclxuXHQgKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gR0xURkRyYWNvTWVzaENvbXByZXNzaW9uRXh0ZW5zaW9uKCBqc29uLCBkcmFjb0xvYWRlciApIHtcclxuXHJcblx0XHRpZiAoICEgZHJhY29Mb2FkZXIgKSB7XHJcblxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBObyBEUkFDT0xvYWRlciBpbnN0YW5jZSBwcm92aWRlZC4nICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT047XHJcblx0XHR0aGlzLmpzb24gPSBqc29uO1xyXG5cdFx0dGhpcy5kcmFjb0xvYWRlciA9IGRyYWNvTG9hZGVyO1xyXG5cdFx0dGhpcy5kcmFjb0xvYWRlci5wcmVsb2FkKCk7XHJcblxyXG5cdH1cclxuXHJcblx0R0xURkRyYWNvTWVzaENvbXByZXNzaW9uRXh0ZW5zaW9uLnByb3RvdHlwZS5kZWNvZGVQcmltaXRpdmUgPSBmdW5jdGlvbiAoIHByaW1pdGl2ZSwgcGFyc2VyICkge1xyXG5cclxuXHRcdHZhciBqc29uID0gdGhpcy5qc29uO1xyXG5cdFx0dmFyIGRyYWNvTG9hZGVyID0gdGhpcy5kcmFjb0xvYWRlcjtcclxuXHRcdHZhciBidWZmZXJWaWV3SW5kZXggPSBwcmltaXRpdmUuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0uYnVmZmVyVmlldztcclxuXHRcdHZhciBnbHRmQXR0cmlidXRlTWFwID0gcHJpbWl0aXZlLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdLmF0dHJpYnV0ZXM7XHJcblx0XHR2YXIgdGhyZWVBdHRyaWJ1dGVNYXAgPSB7fTtcclxuXHRcdHZhciBhdHRyaWJ1dGVOb3JtYWxpemVkTWFwID0ge307XHJcblx0XHR2YXIgYXR0cmlidXRlVHlwZU1hcCA9IHt9O1xyXG5cclxuXHRcdGZvciAoIHZhciBhdHRyaWJ1dGVOYW1lIGluIGdsdGZBdHRyaWJ1dGVNYXAgKSB7XHJcblxyXG5cdFx0XHR2YXIgdGhyZWVBdHRyaWJ1dGVOYW1lID0gQVRUUklCVVRFU1sgYXR0cmlidXRlTmFtZSBdIHx8IGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdHRocmVlQXR0cmlidXRlTWFwWyB0aHJlZUF0dHJpYnV0ZU5hbWUgXSA9IGdsdGZBdHRyaWJ1dGVNYXBbIGF0dHJpYnV0ZU5hbWUgXTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggYXR0cmlidXRlTmFtZSBpbiBwcmltaXRpdmUuYXR0cmlidXRlcyApIHtcclxuXHJcblx0XHRcdHZhciB0aHJlZUF0dHJpYnV0ZU5hbWUgPSBBVFRSSUJVVEVTWyBhdHRyaWJ1dGVOYW1lIF0gfHwgYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdFx0aWYgKCBnbHRmQXR0cmlidXRlTWFwWyBhdHRyaWJ1dGVOYW1lIF0gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0dmFyIGFjY2Vzc29yRGVmID0ganNvbi5hY2Nlc3NvcnNbIHByaW1pdGl2ZS5hdHRyaWJ1dGVzWyBhdHRyaWJ1dGVOYW1lIF0gXTtcclxuXHRcdFx0XHR2YXIgY29tcG9uZW50VHlwZSA9IFdFQkdMX0NPTVBPTkVOVF9UWVBFU1sgYWNjZXNzb3JEZWYuY29tcG9uZW50VHlwZSBdO1xyXG5cclxuXHRcdFx0XHRhdHRyaWJ1dGVUeXBlTWFwWyB0aHJlZUF0dHJpYnV0ZU5hbWUgXSA9IGNvbXBvbmVudFR5cGU7XHJcblx0XHRcdFx0YXR0cmlidXRlTm9ybWFsaXplZE1hcFsgdGhyZWVBdHRyaWJ1dGVOYW1lIF0gPSBhY2Nlc3NvckRlZi5ub3JtYWxpemVkID09PSB0cnVlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3JywgYnVmZmVyVmlld0luZGV4ICkudGhlbiggZnVuY3Rpb24gKCBidWZmZXJWaWV3ICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiAoIHJlc29sdmUgKSB7XHJcblxyXG5cdFx0XHRcdGRyYWNvTG9hZGVyLmRlY29kZURyYWNvRmlsZSggYnVmZmVyVmlldywgZnVuY3Rpb24gKCBnZW9tZXRyeSApIHtcclxuXHJcblx0XHRcdFx0XHRmb3IgKCB2YXIgYXR0cmlidXRlTmFtZSBpbiBnZW9tZXRyeS5hdHRyaWJ1dGVzICkge1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIGF0dHJpYnV0ZSA9IGdlb21ldHJ5LmF0dHJpYnV0ZXNbIGF0dHJpYnV0ZU5hbWUgXTtcclxuXHRcdFx0XHRcdFx0dmFyIG5vcm1hbGl6ZWQgPSBhdHRyaWJ1dGVOb3JtYWxpemVkTWFwWyBhdHRyaWJ1dGVOYW1lIF07XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIG5vcm1hbGl6ZWQgIT09IHVuZGVmaW5lZCApIGF0dHJpYnV0ZS5ub3JtYWxpemVkID0gbm9ybWFsaXplZDtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmVzb2x2ZSggZ2VvbWV0cnkgKTtcclxuXHJcblx0XHRcdFx0fSwgdGhyZWVBdHRyaWJ1dGVNYXAsIGF0dHJpYnV0ZVR5cGVNYXAgKTtcclxuXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRleHR1cmUgVHJhbnNmb3JtIEV4dGVuc2lvblxyXG5cdCAqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX3RleHR1cmVfdHJhbnNmb3JtXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gR0xURlRleHR1cmVUcmFuc2Zvcm1FeHRlbnNpb24oKSB7XHJcblxyXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk07XHJcblxyXG5cdH1cclxuXHJcblx0R0xURlRleHR1cmVUcmFuc2Zvcm1FeHRlbnNpb24ucHJvdG90eXBlLmV4dGVuZFRleHR1cmUgPSBmdW5jdGlvbiAoIHRleHR1cmUsIHRyYW5zZm9ybSApIHtcclxuXHJcblx0XHR0ZXh0dXJlID0gdGV4dHVyZS5jbG9uZSgpO1xyXG5cclxuXHRcdGlmICggdHJhbnNmb3JtLm9mZnNldCAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0dGV4dHVyZS5vZmZzZXQuZnJvbUFycmF5KCB0cmFuc2Zvcm0ub2Zmc2V0ICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggdHJhbnNmb3JtLnJvdGF0aW9uICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHR0ZXh0dXJlLnJvdGF0aW9uID0gdHJhbnNmb3JtLnJvdGF0aW9uO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHRyYW5zZm9ybS5zY2FsZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0dGV4dHVyZS5yZXBlYXQuZnJvbUFycmF5KCB0cmFuc2Zvcm0uc2NhbGUgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0cmFuc2Zvcm0udGV4Q29vcmQgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IEN1c3RvbSBVViBzZXRzIGluIFwiJyArIHRoaXMubmFtZSArICdcIiBleHRlbnNpb24gbm90IHlldCBzdXBwb3J0ZWQuJyApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHRyZXR1cm4gdGV4dHVyZTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU3BlY3VsYXItR2xvc3NpbmVzcyBFeHRlbnNpb25cclxuXHQgKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfcGJyU3BlY3VsYXJHbG9zc2luZXNzXHJcblx0ICovXHJcblxyXG5cdC8qKlxyXG5cdCAqIEEgc3ViIGNsYXNzIG9mIFN0YW5kYXJkTWF0ZXJpYWwgd2l0aCBzb21lIG9mIHRoZSBmdW5jdGlvbmFsaXR5XHJcblx0ICogY2hhbmdlZCB2aWEgdGhlIGBvbkJlZm9yZUNvbXBpbGVgIGNhbGxiYWNrXHJcblx0ICogQHBhaWxoZWFkXHJcblx0ICovXHJcblxyXG5cdGZ1bmN0aW9uIEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsKCBwYXJhbXMgKSB7XHJcblxyXG5cdFx0TWVzaFN0YW5kYXJkTWF0ZXJpYWwuY2FsbCggdGhpcyApO1xyXG5cclxuXHRcdHRoaXMuaXNHTFRGU3BlY3VsYXJHbG9zc2luZXNzTWF0ZXJpYWwgPSB0cnVlO1xyXG5cclxuXHRcdC8vdmFyaW91cyBjaHVua3MgdGhhdCBuZWVkIHJlcGxhY2luZ1xyXG5cdFx0dmFyIHNwZWN1bGFyTWFwUGFyc0ZyYWdtZW50Q2h1bmsgPSBbXHJcblx0XHRcdCcjaWZkZWYgVVNFX1NQRUNVTEFSTUFQJyxcclxuXHRcdFx0J1x0dW5pZm9ybSBzYW1wbGVyMkQgc3BlY3VsYXJNYXA7JyxcclxuXHRcdFx0JyNlbmRpZidcclxuXHRcdF0uam9pbiggJ1xcbicgKTtcclxuXHJcblx0XHR2YXIgZ2xvc3NpbmVzc01hcFBhcnNGcmFnbWVudENodW5rID0gW1xyXG5cdFx0XHQnI2lmZGVmIFVTRV9HTE9TU0lORVNTTUFQJyxcclxuXHRcdFx0J1x0dW5pZm9ybSBzYW1wbGVyMkQgZ2xvc3NpbmVzc01hcDsnLFxyXG5cdFx0XHQnI2VuZGlmJ1xyXG5cdFx0XS5qb2luKCAnXFxuJyApO1xyXG5cclxuXHRcdHZhciBzcGVjdWxhck1hcEZyYWdtZW50Q2h1bmsgPSBbXHJcblx0XHRcdCd2ZWMzIHNwZWN1bGFyRmFjdG9yID0gc3BlY3VsYXI7JyxcclxuXHRcdFx0JyNpZmRlZiBVU0VfU1BFQ1VMQVJNQVAnLFxyXG5cdFx0XHQnXHR2ZWM0IHRleGVsU3BlY3VsYXIgPSB0ZXh0dXJlMkQoIHNwZWN1bGFyTWFwLCB2VXYgKTsnLFxyXG5cdFx0XHQnXHR0ZXhlbFNwZWN1bGFyID0gc1JHQlRvTGluZWFyKCB0ZXhlbFNwZWN1bGFyICk7JyxcclxuXHRcdFx0J1x0Ly8gcmVhZHMgY2hhbm5lbCBSR0IsIGNvbXBhdGlibGUgd2l0aCBhIGdsVEYgU3BlY3VsYXItR2xvc3NpbmVzcyAoUkdCQSkgdGV4dHVyZScsXHJcblx0XHRcdCdcdHNwZWN1bGFyRmFjdG9yICo9IHRleGVsU3BlY3VsYXIucmdiOycsXHJcblx0XHRcdCcjZW5kaWYnXHJcblx0XHRdLmpvaW4oICdcXG4nICk7XHJcblxyXG5cdFx0dmFyIGdsb3NzaW5lc3NNYXBGcmFnbWVudENodW5rID0gW1xyXG5cdFx0XHQnZmxvYXQgZ2xvc3NpbmVzc0ZhY3RvciA9IGdsb3NzaW5lc3M7JyxcclxuXHRcdFx0JyNpZmRlZiBVU0VfR0xPU1NJTkVTU01BUCcsXHJcblx0XHRcdCdcdHZlYzQgdGV4ZWxHbG9zc2luZXNzID0gdGV4dHVyZTJEKCBnbG9zc2luZXNzTWFwLCB2VXYgKTsnLFxyXG5cdFx0XHQnXHQvLyByZWFkcyBjaGFubmVsIEEsIGNvbXBhdGlibGUgd2l0aCBhIGdsVEYgU3BlY3VsYXItR2xvc3NpbmVzcyAoUkdCQSkgdGV4dHVyZScsXHJcblx0XHRcdCdcdGdsb3NzaW5lc3NGYWN0b3IgKj0gdGV4ZWxHbG9zc2luZXNzLmE7JyxcclxuXHRcdFx0JyNlbmRpZidcclxuXHRcdF0uam9pbiggJ1xcbicgKTtcclxuXHJcblx0XHR2YXIgbGlnaHRQaHlzaWNhbEZyYWdtZW50Q2h1bmsgPSBbXHJcblx0XHRcdCdQaHlzaWNhbE1hdGVyaWFsIG1hdGVyaWFsOycsXHJcblx0XHRcdCdtYXRlcmlhbC5kaWZmdXNlQ29sb3IgPSBkaWZmdXNlQ29sb3IucmdiICogKCAxLiAtIG1heCggc3BlY3VsYXJGYWN0b3IuciwgbWF4KCBzcGVjdWxhckZhY3Rvci5nLCBzcGVjdWxhckZhY3Rvci5iICkgKSApOycsXHJcblx0XHRcdCd2ZWMzIGR4eSA9IG1heCggYWJzKCBkRmR4KCBnZW9tZXRyeU5vcm1hbCApICksIGFicyggZEZkeSggZ2VvbWV0cnlOb3JtYWwgKSApICk7JyxcclxuXHRcdFx0J2Zsb2F0IGdlb21ldHJ5Um91Z2huZXNzID0gbWF4KCBtYXgoIGR4eS54LCBkeHkueSApLCBkeHkueiApOycsXHJcblx0XHRcdCdtYXRlcmlhbC5zcGVjdWxhclJvdWdobmVzcyA9IG1heCggMS4wIC0gZ2xvc3NpbmVzc0ZhY3RvciwgMC4wNTI1ICk7IC8vIDAuMDUyNSBjb3JyZXNwb25kcyB0byB0aGUgYmFzZSBtaXAgb2YgYSAyNTYgY3ViZW1hcC4nLFxyXG5cdFx0XHQnbWF0ZXJpYWwuc3BlY3VsYXJSb3VnaG5lc3MgKz0gZ2VvbWV0cnlSb3VnaG5lc3M7JyxcclxuXHRcdFx0J21hdGVyaWFsLnNwZWN1bGFyUm91Z2huZXNzID0gbWluKCBtYXRlcmlhbC5zcGVjdWxhclJvdWdobmVzcywgMS4wICk7JyxcclxuXHRcdFx0J21hdGVyaWFsLnNwZWN1bGFyQ29sb3IgPSBzcGVjdWxhckZhY3RvcjsnLFxyXG5cdFx0XS5qb2luKCAnXFxuJyApO1xyXG5cclxuXHRcdHZhciB1bmlmb3JtcyA9IHtcclxuXHRcdFx0c3BlY3VsYXI6IHsgdmFsdWU6IG5ldyBDb2xvcigpLnNldEhleCggMHhmZmZmZmYgKSB9LFxyXG5cdFx0XHRnbG9zc2luZXNzOiB7IHZhbHVlOiAxIH0sXHJcblx0XHRcdHNwZWN1bGFyTWFwOiB7IHZhbHVlOiBudWxsIH0sXHJcblx0XHRcdGdsb3NzaW5lc3NNYXA6IHsgdmFsdWU6IG51bGwgfVxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLl9leHRyYVVuaWZvcm1zID0gdW5pZm9ybXM7XHJcblxyXG5cdFx0dGhpcy5vbkJlZm9yZUNvbXBpbGUgPSBmdW5jdGlvbiAoIHNoYWRlciApIHtcclxuXHJcblx0XHRcdGZvciAoIHZhciB1bmlmb3JtTmFtZSBpbiB1bmlmb3JtcyApIHtcclxuXHJcblx0XHRcdFx0c2hhZGVyLnVuaWZvcm1zWyB1bmlmb3JtTmFtZSBdID0gdW5pZm9ybXNbIHVuaWZvcm1OYW1lIF07XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzaGFkZXIuZnJhZ21lbnRTaGFkZXIgPSBzaGFkZXIuZnJhZ21lbnRTaGFkZXJcclxuXHRcdFx0XHQucmVwbGFjZSggJ3VuaWZvcm0gZmxvYXQgcm91Z2huZXNzOycsICd1bmlmb3JtIHZlYzMgc3BlY3VsYXI7JyApXHJcblx0XHRcdFx0LnJlcGxhY2UoICd1bmlmb3JtIGZsb2F0IG1ldGFsbmVzczsnLCAndW5pZm9ybSBmbG9hdCBnbG9zc2luZXNzOycgKVxyXG5cdFx0XHRcdC5yZXBsYWNlKCAnI2luY2x1ZGUgPHJvdWdobmVzc21hcF9wYXJzX2ZyYWdtZW50PicsIHNwZWN1bGFyTWFwUGFyc0ZyYWdtZW50Q2h1bmsgKVxyXG5cdFx0XHRcdC5yZXBsYWNlKCAnI2luY2x1ZGUgPG1ldGFsbmVzc21hcF9wYXJzX2ZyYWdtZW50PicsIGdsb3NzaW5lc3NNYXBQYXJzRnJhZ21lbnRDaHVuayApXHJcblx0XHRcdFx0LnJlcGxhY2UoICcjaW5jbHVkZSA8cm91Z2huZXNzbWFwX2ZyYWdtZW50PicsIHNwZWN1bGFyTWFwRnJhZ21lbnRDaHVuayApXHJcblx0XHRcdFx0LnJlcGxhY2UoICcjaW5jbHVkZSA8bWV0YWxuZXNzbWFwX2ZyYWdtZW50PicsIGdsb3NzaW5lc3NNYXBGcmFnbWVudENodW5rIClcclxuXHRcdFx0XHQucmVwbGFjZSggJyNpbmNsdWRlIDxsaWdodHNfcGh5c2ljYWxfZnJhZ21lbnQ+JywgbGlnaHRQaHlzaWNhbEZyYWdtZW50Q2h1bmsgKTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCB0aGlzLCB7XHJcblxyXG5cdFx0XHRzcGVjdWxhcjoge1xyXG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiB1bmlmb3Jtcy5zcGVjdWxhci52YWx1ZTtcclxuXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uICggdiApIHtcclxuXHJcblx0XHRcdFx0XHR1bmlmb3Jtcy5zcGVjdWxhci52YWx1ZSA9IHY7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHNwZWN1bGFyTWFwOiB7XHJcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLnNwZWN1bGFyTWFwLnZhbHVlO1xyXG5cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldDogZnVuY3Rpb24gKCB2ICkge1xyXG5cclxuXHRcdFx0XHRcdHVuaWZvcm1zLnNwZWN1bGFyTWFwLnZhbHVlID0gdjtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHYgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLmRlZmluZXMuVVNFX1NQRUNVTEFSTUFQID0gJyc7IC8vIFVTRV9VViBpcyBzZXQgYnkgdGhlIHJlbmRlcmVyIGZvciBzcGVjdWxhciBtYXBzXHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmRlZmluZXMuVVNFX1NQRUNVTEFSTUFQO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Z2xvc3NpbmVzczoge1xyXG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiB1bmlmb3Jtcy5nbG9zc2luZXNzLnZhbHVlO1xyXG5cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldDogZnVuY3Rpb24gKCB2ICkge1xyXG5cclxuXHRcdFx0XHRcdHVuaWZvcm1zLmdsb3NzaW5lc3MudmFsdWUgPSB2O1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRnbG9zc2luZXNzTWFwOiB7XHJcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLmdsb3NzaW5lc3NNYXAudmFsdWU7XHJcblxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0OiBmdW5jdGlvbiAoIHYgKSB7XHJcblxyXG5cdFx0XHRcdFx0dW5pZm9ybXMuZ2xvc3NpbmVzc01hcC52YWx1ZSA9IHY7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCB2ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy5kZWZpbmVzLlVTRV9HTE9TU0lORVNTTUFQID0gJyc7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGVmaW5lcy5VU0VfVVYgPSAnJztcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZGVmaW5lcy5VU0VfR0xPU1NJTkVTU01BUDtcclxuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZGVmaW5lcy5VU0VfVVY7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0ZGVsZXRlIHRoaXMubWV0YWxuZXNzO1xyXG5cdFx0ZGVsZXRlIHRoaXMucm91Z2huZXNzO1xyXG5cdFx0ZGVsZXRlIHRoaXMubWV0YWxuZXNzTWFwO1xyXG5cdFx0ZGVsZXRlIHRoaXMucm91Z2huZXNzTWFwO1xyXG5cclxuXHRcdHRoaXMuc2V0VmFsdWVzKCBwYXJhbXMgKTtcclxuXHJcblx0fVxyXG5cclxuXHRHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBNZXNoU3RhbmRhcmRNYXRlcmlhbC5wcm90b3R5cGUgKTtcclxuXHRHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbDtcclxuXHJcblx0R0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWwucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAoIHNvdXJjZSApIHtcclxuXHJcblx0XHRNZXNoU3RhbmRhcmRNYXRlcmlhbC5wcm90b3R5cGUuY29weS5jYWxsKCB0aGlzLCBzb3VyY2UgKTtcclxuXHRcdHRoaXMuc3BlY3VsYXJNYXAgPSBzb3VyY2Uuc3BlY3VsYXJNYXA7XHJcblx0XHR0aGlzLnNwZWN1bGFyLmNvcHkoIHNvdXJjZS5zcGVjdWxhciApO1xyXG5cdFx0dGhpcy5nbG9zc2luZXNzTWFwID0gc291cmNlLmdsb3NzaW5lc3NNYXA7XHJcblx0XHR0aGlzLmdsb3NzaW5lc3MgPSBzb3VyY2UuZ2xvc3NpbmVzcztcclxuXHRcdGRlbGV0ZSB0aGlzLm1ldGFsbmVzcztcclxuXHRcdGRlbGV0ZSB0aGlzLnJvdWdobmVzcztcclxuXHRcdGRlbGV0ZSB0aGlzLm1ldGFsbmVzc01hcDtcclxuXHRcdGRlbGV0ZSB0aGlzLnJvdWdobmVzc01hcDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHR9O1xyXG5cclxuXHRmdW5jdGlvbiBHTFRGTWF0ZXJpYWxzUGJyU3BlY3VsYXJHbG9zc2luZXNzRXh0ZW5zaW9uKCkge1xyXG5cclxuXHRcdHJldHVybiB7XHJcblxyXG5cdFx0XHRuYW1lOiBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1MsXHJcblxyXG5cdFx0XHRzcGVjdWxhckdsb3NzaW5lc3NQYXJhbXM6IFtcclxuXHRcdFx0XHQnY29sb3InLFxyXG5cdFx0XHRcdCdtYXAnLFxyXG5cdFx0XHRcdCdsaWdodE1hcCcsXHJcblx0XHRcdFx0J2xpZ2h0TWFwSW50ZW5zaXR5JyxcclxuXHRcdFx0XHQnYW9NYXAnLFxyXG5cdFx0XHRcdCdhb01hcEludGVuc2l0eScsXHJcblx0XHRcdFx0J2VtaXNzaXZlJyxcclxuXHRcdFx0XHQnZW1pc3NpdmVJbnRlbnNpdHknLFxyXG5cdFx0XHRcdCdlbWlzc2l2ZU1hcCcsXHJcblx0XHRcdFx0J2J1bXBNYXAnLFxyXG5cdFx0XHRcdCdidW1wU2NhbGUnLFxyXG5cdFx0XHRcdCdub3JtYWxNYXAnLFxyXG5cdFx0XHRcdCdub3JtYWxNYXBUeXBlJyxcclxuXHRcdFx0XHQnZGlzcGxhY2VtZW50TWFwJyxcclxuXHRcdFx0XHQnZGlzcGxhY2VtZW50U2NhbGUnLFxyXG5cdFx0XHRcdCdkaXNwbGFjZW1lbnRCaWFzJyxcclxuXHRcdFx0XHQnc3BlY3VsYXJNYXAnLFxyXG5cdFx0XHRcdCdzcGVjdWxhcicsXHJcblx0XHRcdFx0J2dsb3NzaW5lc3NNYXAnLFxyXG5cdFx0XHRcdCdnbG9zc2luZXNzJyxcclxuXHRcdFx0XHQnYWxwaGFNYXAnLFxyXG5cdFx0XHRcdCdlbnZNYXAnLFxyXG5cdFx0XHRcdCdlbnZNYXBJbnRlbnNpdHknLFxyXG5cdFx0XHRcdCdyZWZyYWN0aW9uUmF0aW8nLFxyXG5cdFx0XHRdLFxyXG5cclxuXHRcdFx0Z2V0TWF0ZXJpYWxUeXBlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdHJldHVybiBHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbDtcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRleHRlbmRQYXJhbXM6IGZ1bmN0aW9uICggbWF0ZXJpYWxQYXJhbXMsIG1hdGVyaWFsRGVmLCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBwYnJTcGVjdWxhckdsb3NzaW5lc3MgPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IgPSBuZXcgQ29sb3IoIDEuMCwgMS4wLCAxLjAgKTtcclxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gMS4wO1xyXG5cclxuXHRcdFx0XHR2YXIgcGVuZGluZyA9IFtdO1xyXG5cclxuXHRcdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHBiclNwZWN1bGFyR2xvc3NpbmVzcy5kaWZmdXNlRmFjdG9yICkgKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGFycmF5ID0gcGJyU3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VGYWN0b3I7XHJcblxyXG5cdFx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IuZnJvbUFycmF5KCBhcnJheSApO1xyXG5cdFx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IGFycmF5WyAzIF07XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZVRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ21hcCcsIHBiclNwZWN1bGFyR2xvc3NpbmVzcy5kaWZmdXNlVGV4dHVyZSApICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuZW1pc3NpdmUgPSBuZXcgQ29sb3IoIDAuMCwgMC4wLCAwLjAgKTtcclxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5nbG9zc2luZXNzID0gcGJyU3BlY3VsYXJHbG9zc2luZXNzLmdsb3NzaW5lc3NGYWN0b3IgIT09IHVuZGVmaW5lZCA/IHBiclNwZWN1bGFyR2xvc3NpbmVzcy5nbG9zc2luZXNzRmFjdG9yIDogMS4wO1xyXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyID0gbmV3IENvbG9yKCAxLjAsIDEuMCwgMS4wICk7XHJcblxyXG5cdFx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggcGJyU3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyRmFjdG9yICkgKSB7XHJcblxyXG5cdFx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXIuZnJvbUFycmF5KCBwYnJTcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJGYWN0b3IgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIHBiclNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHNwZWNHbG9zc01hcERlZiA9IHBiclNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlO1xyXG5cdFx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdnbG9zc2luZXNzTWFwJywgc3BlY0dsb3NzTWFwRGVmICkgKTtcclxuXHRcdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnc3BlY3VsYXJNYXAnLCBzcGVjR2xvc3NNYXBEZWYgKSApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGNyZWF0ZU1hdGVyaWFsOiBmdW5jdGlvbiAoIG1hdGVyaWFsUGFyYW1zICkge1xyXG5cclxuXHRcdFx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgR0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWwoIG1hdGVyaWFsUGFyYW1zICk7XHJcblx0XHRcdFx0bWF0ZXJpYWwuZm9nID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWwuY29sb3IgPSBtYXRlcmlhbFBhcmFtcy5jb2xvcjtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWwubWFwID0gbWF0ZXJpYWxQYXJhbXMubWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMubWFwO1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbC5saWdodE1hcCA9IG51bGw7XHJcblx0XHRcdFx0bWF0ZXJpYWwubGlnaHRNYXBJbnRlbnNpdHkgPSAxLjA7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsLmFvTWFwID0gbWF0ZXJpYWxQYXJhbXMuYW9NYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5hb01hcDtcclxuXHRcdFx0XHRtYXRlcmlhbC5hb01hcEludGVuc2l0eSA9IDEuMDtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWwuZW1pc3NpdmUgPSBtYXRlcmlhbFBhcmFtcy5lbWlzc2l2ZTtcclxuXHRcdFx0XHRtYXRlcmlhbC5lbWlzc2l2ZUludGVuc2l0eSA9IDEuMDtcclxuXHRcdFx0XHRtYXRlcmlhbC5lbWlzc2l2ZU1hcCA9IG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuZW1pc3NpdmVNYXA7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsLmJ1bXBNYXAgPSBtYXRlcmlhbFBhcmFtcy5idW1wTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuYnVtcE1hcDtcclxuXHRcdFx0XHRtYXRlcmlhbC5idW1wU2NhbGUgPSAxO1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbC5ub3JtYWxNYXAgPSBtYXRlcmlhbFBhcmFtcy5ub3JtYWxNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5ub3JtYWxNYXA7XHJcblx0XHRcdFx0bWF0ZXJpYWwubm9ybWFsTWFwVHlwZSA9IFRhbmdlbnRTcGFjZU5vcm1hbE1hcDtcclxuXHJcblx0XHRcdFx0aWYgKCBtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZSApIG1hdGVyaWFsLm5vcm1hbFNjYWxlID0gbWF0ZXJpYWxQYXJhbXMubm9ybWFsU2NhbGU7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsLmRpc3BsYWNlbWVudE1hcCA9IG51bGw7XHJcblx0XHRcdFx0bWF0ZXJpYWwuZGlzcGxhY2VtZW50U2NhbGUgPSAxO1xyXG5cdFx0XHRcdG1hdGVyaWFsLmRpc3BsYWNlbWVudEJpYXMgPSAwO1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbC5zcGVjdWxhck1hcCA9IG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXJNYXA7XHJcblx0XHRcdFx0bWF0ZXJpYWwuc3BlY3VsYXIgPSBtYXRlcmlhbFBhcmFtcy5zcGVjdWxhcjtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWwuZ2xvc3NpbmVzc01hcCA9IG1hdGVyaWFsUGFyYW1zLmdsb3NzaW5lc3NNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5nbG9zc2luZXNzTWFwO1xyXG5cdFx0XHRcdG1hdGVyaWFsLmdsb3NzaW5lc3MgPSBtYXRlcmlhbFBhcmFtcy5nbG9zc2luZXNzO1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbC5hbHBoYU1hcCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsLmVudk1hcCA9IG1hdGVyaWFsUGFyYW1zLmVudk1hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLmVudk1hcDtcclxuXHRcdFx0XHRtYXRlcmlhbC5lbnZNYXBJbnRlbnNpdHkgPSAxLjA7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsLnJlZnJhY3Rpb25SYXRpbyA9IDAuOTg7XHJcblxyXG5cdFx0XHRcdHJldHVybiBtYXRlcmlhbDtcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0fTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBNZXNoIFF1YW50aXphdGlvbiBFeHRlbnNpb25cclxuXHQgKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tZXNoX3F1YW50aXphdGlvblxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIEdMVEZNZXNoUXVhbnRpemF0aW9uRXh0ZW5zaW9uKCkge1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01FU0hfUVVBTlRJWkFUSU9OO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblx0LyoqKioqKioqKiogSU5URVJQT0xBVElPTiAqKioqKioqKi9cclxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHQvLyBTcGxpbmUgSW50ZXJwb2xhdGlvblxyXG5cdC8vIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjYXBwZW5kaXgtYy1zcGxpbmUtaW50ZXJwb2xhdGlvblxyXG5cdGZ1bmN0aW9uIEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50KCBwYXJhbWV0ZXJQb3NpdGlvbnMsIHNhbXBsZVZhbHVlcywgc2FtcGxlU2l6ZSwgcmVzdWx0QnVmZmVyICkge1xyXG5cclxuXHRcdEludGVycG9sYW50LmNhbGwoIHRoaXMsIHBhcmFtZXRlclBvc2l0aW9ucywgc2FtcGxlVmFsdWVzLCBzYW1wbGVTaXplLCByZXN1bHRCdWZmZXIgKTtcclxuXHJcblx0fVxyXG5cclxuXHRHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnRlcnBvbGFudC5wcm90b3R5cGUgKTtcclxuXHRHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudDtcclxuXHJcblx0R0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmNvcHlTYW1wbGVWYWx1ZV8gPSBmdW5jdGlvbiAoIGluZGV4ICkge1xyXG5cclxuXHRcdC8vIENvcGllcyBhIHNhbXBsZSB2YWx1ZSB0byB0aGUgcmVzdWx0IGJ1ZmZlci4gU2VlIGRlc2NyaXB0aW9uIG9mIGdsVEZcclxuXHRcdC8vIENVQklDU1BMSU5FIHZhbHVlcyBsYXlvdXQgaW4gaW50ZXJwb2xhdGVfKCkgZnVuY3Rpb24gYmVsb3cuXHJcblxyXG5cdFx0dmFyIHJlc3VsdCA9IHRoaXMucmVzdWx0QnVmZmVyLFxyXG5cdFx0XHR2YWx1ZXMgPSB0aGlzLnNhbXBsZVZhbHVlcyxcclxuXHRcdFx0dmFsdWVTaXplID0gdGhpcy52YWx1ZVNpemUsXHJcblx0XHRcdG9mZnNldCA9IGluZGV4ICogdmFsdWVTaXplICogMyArIHZhbHVlU2l6ZTtcclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgIT09IHZhbHVlU2l6ZTsgaSArKyApIHtcclxuXHJcblx0XHRcdHJlc3VsdFsgaSBdID0gdmFsdWVzWyBvZmZzZXQgKyBpIF07XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblxyXG5cdH07XHJcblxyXG5cdEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZS5iZWZvcmVTdGFydF8gPSBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuY29weVNhbXBsZVZhbHVlXztcclxuXHJcblx0R0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmFmdGVyRW5kXyA9IEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZS5jb3B5U2FtcGxlVmFsdWVfO1xyXG5cclxuXHRHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuaW50ZXJwb2xhdGVfID0gZnVuY3Rpb24gKCBpMSwgdDAsIHQsIHQxICkge1xyXG5cclxuXHRcdHZhciByZXN1bHQgPSB0aGlzLnJlc3VsdEJ1ZmZlcjtcclxuXHRcdHZhciB2YWx1ZXMgPSB0aGlzLnNhbXBsZVZhbHVlcztcclxuXHRcdHZhciBzdHJpZGUgPSB0aGlzLnZhbHVlU2l6ZTtcclxuXHJcblx0XHR2YXIgc3RyaWRlMiA9IHN0cmlkZSAqIDI7XHJcblx0XHR2YXIgc3RyaWRlMyA9IHN0cmlkZSAqIDM7XHJcblxyXG5cdFx0dmFyIHRkID0gdDEgLSB0MDtcclxuXHJcblx0XHR2YXIgcCA9ICggdCAtIHQwICkgLyB0ZDtcclxuXHRcdHZhciBwcCA9IHAgKiBwO1xyXG5cdFx0dmFyIHBwcCA9IHBwICogcDtcclxuXHJcblx0XHR2YXIgb2Zmc2V0MSA9IGkxICogc3RyaWRlMztcclxuXHRcdHZhciBvZmZzZXQwID0gb2Zmc2V0MSAtIHN0cmlkZTM7XHJcblxyXG5cdFx0dmFyIHMyID0gLSAyICogcHBwICsgMyAqIHBwO1xyXG5cdFx0dmFyIHMzID0gcHBwIC0gcHA7XHJcblx0XHR2YXIgczAgPSAxIC0gczI7XHJcblx0XHR2YXIgczEgPSBzMyAtIHBwICsgcDtcclxuXHJcblx0XHQvLyBMYXlvdXQgb2Yga2V5ZnJhbWUgb3V0cHV0IHZhbHVlcyBmb3IgQ1VCSUNTUExJTkUgYW5pbWF0aW9uczpcclxuXHRcdC8vICAgWyBpblRhbmdlbnRfMSwgc3BsaW5lVmVydGV4XzEsIG91dFRhbmdlbnRfMSwgaW5UYW5nZW50XzIsIHNwbGluZVZlcnRleF8yLCAuLi4gXVxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpICE9PSBzdHJpZGU7IGkgKysgKSB7XHJcblxyXG5cdFx0XHR2YXIgcDAgPSB2YWx1ZXNbIG9mZnNldDAgKyBpICsgc3RyaWRlIF07IC8vIHNwbGluZVZlcnRleF9rXHJcblx0XHRcdHZhciBtMCA9IHZhbHVlc1sgb2Zmc2V0MCArIGkgKyBzdHJpZGUyIF0gKiB0ZDsgLy8gb3V0VGFuZ2VudF9rICogKHRfaysxIC0gdF9rKVxyXG5cdFx0XHR2YXIgcDEgPSB2YWx1ZXNbIG9mZnNldDEgKyBpICsgc3RyaWRlIF07IC8vIHNwbGluZVZlcnRleF9rKzFcclxuXHRcdFx0dmFyIG0xID0gdmFsdWVzWyBvZmZzZXQxICsgaSBdICogdGQ7IC8vIGluVGFuZ2VudF9rKzEgKiAodF9rKzEgLSB0X2spXHJcblxyXG5cdFx0XHRyZXN1bHRbIGkgXSA9IHMwICogcDAgKyBzMSAqIG0wICsgczIgKiBwMSArIHMzICogbTE7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblx0LyoqKioqKioqKiogSU5URVJOQUxTICoqKioqKioqKioqKi9cclxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHQvKiBDT05TVEFOVFMgKi9cclxuXHJcblx0dmFyIFdFQkdMX0NPTlNUQU5UUyA9IHtcclxuXHRcdEZMT0FUOiA1MTI2LFxyXG5cdFx0Ly9GTE9BVF9NQVQyOiAzNTY3NCxcclxuXHRcdEZMT0FUX01BVDM6IDM1Njc1LFxyXG5cdFx0RkxPQVRfTUFUNDogMzU2NzYsXHJcblx0XHRGTE9BVF9WRUMyOiAzNTY2NCxcclxuXHRcdEZMT0FUX1ZFQzM6IDM1NjY1LFxyXG5cdFx0RkxPQVRfVkVDNDogMzU2NjYsXHJcblx0XHRMSU5FQVI6IDk3MjksXHJcblx0XHRSRVBFQVQ6IDEwNDk3LFxyXG5cdFx0U0FNUExFUl8yRDogMzU2NzgsXHJcblx0XHRQT0lOVFM6IDAsXHJcblx0XHRMSU5FUzogMSxcclxuXHRcdExJTkVfTE9PUDogMixcclxuXHRcdExJTkVfU1RSSVA6IDMsXHJcblx0XHRUUklBTkdMRVM6IDQsXHJcblx0XHRUUklBTkdMRV9TVFJJUDogNSxcclxuXHRcdFRSSUFOR0xFX0ZBTjogNixcclxuXHRcdFVOU0lHTkVEX0JZVEU6IDUxMjEsXHJcblx0XHRVTlNJR05FRF9TSE9SVDogNTEyM1xyXG5cdH07XHJcblxyXG5cdHZhciBXRUJHTF9DT01QT05FTlRfVFlQRVMgPSB7XHJcblx0XHQ1MTIwOiBJbnQ4QXJyYXksXHJcblx0XHQ1MTIxOiBVaW50OEFycmF5LFxyXG5cdFx0NTEyMjogSW50MTZBcnJheSxcclxuXHRcdDUxMjM6IFVpbnQxNkFycmF5LFxyXG5cdFx0NTEyNTogVWludDMyQXJyYXksXHJcblx0XHQ1MTI2OiBGbG9hdDMyQXJyYXlcclxuXHR9O1xyXG5cclxuXHR2YXIgV0VCR0xfRklMVEVSUyA9IHtcclxuXHRcdDk3Mjg6IE5lYXJlc3RGaWx0ZXIsXHJcblx0XHQ5NzI5OiBMaW5lYXJGaWx0ZXIsXHJcblx0XHQ5OTg0OiBOZWFyZXN0TWlwbWFwTmVhcmVzdEZpbHRlcixcclxuXHRcdDk5ODU6IExpbmVhck1pcG1hcE5lYXJlc3RGaWx0ZXIsXHJcblx0XHQ5OTg2OiBOZWFyZXN0TWlwbWFwTGluZWFyRmlsdGVyLFxyXG5cdFx0OTk4NzogTGluZWFyTWlwbWFwTGluZWFyRmlsdGVyXHJcblx0fTtcclxuXHJcblx0dmFyIFdFQkdMX1dSQVBQSU5HUyA9IHtcclxuXHRcdDMzMDcxOiBDbGFtcFRvRWRnZVdyYXBwaW5nLFxyXG5cdFx0MzM2NDg6IE1pcnJvcmVkUmVwZWF0V3JhcHBpbmcsXHJcblx0XHQxMDQ5NzogUmVwZWF0V3JhcHBpbmdcclxuXHR9O1xyXG5cclxuXHR2YXIgV0VCR0xfVFlQRV9TSVpFUyA9IHtcclxuXHRcdCdTQ0FMQVInOiAxLFxyXG5cdFx0J1ZFQzInOiAyLFxyXG5cdFx0J1ZFQzMnOiAzLFxyXG5cdFx0J1ZFQzQnOiA0LFxyXG5cdFx0J01BVDInOiA0LFxyXG5cdFx0J01BVDMnOiA5LFxyXG5cdFx0J01BVDQnOiAxNlxyXG5cdH07XHJcblxyXG5cdHZhciBBVFRSSUJVVEVTID0ge1xyXG5cdFx0UE9TSVRJT046ICdwb3NpdGlvbicsXHJcblx0XHROT1JNQUw6ICdub3JtYWwnLFxyXG5cdFx0VEFOR0VOVDogJ3RhbmdlbnQnLFxyXG5cdFx0VEVYQ09PUkRfMDogJ3V2JyxcclxuXHRcdFRFWENPT1JEXzE6ICd1djInLFxyXG5cdFx0Q09MT1JfMDogJ2NvbG9yJyxcclxuXHRcdFdFSUdIVFNfMDogJ3NraW5XZWlnaHQnLFxyXG5cdFx0Sk9JTlRTXzA6ICdza2luSW5kZXgnLFxyXG5cdH07XHJcblxyXG5cdHZhciBQQVRIX1BST1BFUlRJRVMgPSB7XHJcblx0XHRzY2FsZTogJ3NjYWxlJyxcclxuXHRcdHRyYW5zbGF0aW9uOiAncG9zaXRpb24nLFxyXG5cdFx0cm90YXRpb246ICdxdWF0ZXJuaW9uJyxcclxuXHRcdHdlaWdodHM6ICdtb3JwaFRhcmdldEluZmx1ZW5jZXMnXHJcblx0fTtcclxuXHJcblx0dmFyIElOVEVSUE9MQVRJT04gPSB7XHJcblx0XHRDVUJJQ1NQTElORTogdW5kZWZpbmVkLCAvLyBXZSB1c2UgYSBjdXN0b20gaW50ZXJwb2xhbnQgKEdMVEZDdWJpY1NwbGluZUludGVycG9sYXRpb24pIGZvciBDVUJJQ1NQTElORSB0cmFja3MuIEVhY2hcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtleWZyYW1lIHRyYWNrIHdpbGwgYmUgaW5pdGlhbGl6ZWQgd2l0aCBhIGRlZmF1bHQgaW50ZXJwb2xhdGlvbiB0eXBlLCB0aGVuIG1vZGlmaWVkLlxyXG5cdFx0TElORUFSOiBJbnRlcnBvbGF0ZUxpbmVhcixcclxuXHRcdFNURVA6IEludGVycG9sYXRlRGlzY3JldGVcclxuXHR9O1xyXG5cclxuXHR2YXIgQUxQSEFfTU9ERVMgPSB7XHJcblx0XHRPUEFRVUU6ICdPUEFRVUUnLFxyXG5cdFx0TUFTSzogJ01BU0snLFxyXG5cdFx0QkxFTkQ6ICdCTEVORCdcclxuXHR9O1xyXG5cclxuXHQvKiBVVElMSVRZIEZVTkNUSU9OUyAqL1xyXG5cclxuXHRmdW5jdGlvbiByZXNvbHZlVVJMKCB1cmwsIHBhdGggKSB7XHJcblxyXG5cdFx0Ly8gSW52YWxpZCBVUkxcclxuXHRcdGlmICggdHlwZW9mIHVybCAhPT0gJ3N0cmluZycgfHwgdXJsID09PSAnJyApIHJldHVybiAnJztcclxuXHJcblx0XHQvLyBIb3N0IFJlbGF0aXZlIFVSTFxyXG5cdFx0aWYgKCAvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KCBwYXRoICkgJiYgL15cXC8vLnRlc3QoIHVybCApICkge1xyXG5cclxuXHRcdFx0cGF0aCA9IHBhdGgucmVwbGFjZSggLyheaHR0cHM/OlxcL1xcL1teXFwvXSspLiovaSwgJyQxJyApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBBYnNvbHV0ZSBVUkwgaHR0cDovLyxodHRwczovLywvL1xyXG5cdFx0aWYgKCAvXihodHRwcz86KT9cXC9cXC8vaS50ZXN0KCB1cmwgKSApIHJldHVybiB1cmw7XHJcblxyXG5cdFx0Ly8gRGF0YSBVUklcclxuXHRcdGlmICggL15kYXRhOi4qLC4qJC9pLnRlc3QoIHVybCApICkgcmV0dXJuIHVybDtcclxuXHJcblx0XHQvLyBCbG9iIFVSTFxyXG5cdFx0aWYgKCAvXmJsb2I6LiokL2kudGVzdCggdXJsICkgKSByZXR1cm4gdXJsO1xyXG5cclxuXHRcdC8vIFJlbGF0aXZlIFVSTFxyXG5cdFx0cmV0dXJuIHBhdGggKyB1cmw7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNkZWZhdWx0LW1hdGVyaWFsXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gY3JlYXRlRGVmYXVsdE1hdGVyaWFsKCBjYWNoZSApIHtcclxuXHJcblx0XHRpZiAoIGNhY2hlWyAnRGVmYXVsdE1hdGVyaWFsJyBdID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRjYWNoZVsgJ0RlZmF1bHRNYXRlcmlhbCcgXSA9IG5ldyBNZXNoU3RhbmRhcmRNYXRlcmlhbCgge1xyXG5cdFx0XHRcdGNvbG9yOiAweEZGRkZGRixcclxuXHRcdFx0XHRlbWlzc2l2ZTogMHgwMDAwMDAsXHJcblx0XHRcdFx0bWV0YWxuZXNzOiAxLFxyXG5cdFx0XHRcdHJvdWdobmVzczogMSxcclxuXHRcdFx0XHR0cmFuc3BhcmVudDogZmFsc2UsXHJcblx0XHRcdFx0ZGVwdGhUZXN0OiB0cnVlLFxyXG5cdFx0XHRcdHNpZGU6IEZyb250U2lkZVxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjYWNoZVsgJ0RlZmF1bHRNYXRlcmlhbCcgXTtcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGtub3duRXh0ZW5zaW9ucywgb2JqZWN0LCBvYmplY3REZWYgKSB7XHJcblxyXG5cdFx0Ly8gQWRkIHVua25vd24gZ2xURiBleHRlbnNpb25zIHRvIGFuIG9iamVjdCdzIHVzZXJEYXRhLlxyXG5cclxuXHRcdGZvciAoIHZhciBuYW1lIGluIG9iamVjdERlZi5leHRlbnNpb25zICkge1xyXG5cclxuXHRcdFx0aWYgKCBrbm93bkV4dGVuc2lvbnNbIG5hbWUgXSA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRvYmplY3QudXNlckRhdGEuZ2x0ZkV4dGVuc2lvbnMgPSBvYmplY3QudXNlckRhdGEuZ2x0ZkV4dGVuc2lvbnMgfHwge307XHJcblx0XHRcdFx0b2JqZWN0LnVzZXJEYXRhLmdsdGZFeHRlbnNpb25zWyBuYW1lIF0gPSBvYmplY3REZWYuZXh0ZW5zaW9uc1sgbmFtZSBdO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge09iamVjdDNEfE1hdGVyaWFsfEJ1ZmZlckdlb21ldHJ5fSBvYmplY3RcclxuXHQgKiBAcGFyYW0ge0dMVEYuZGVmaW5pdGlvbn0gZ2x0ZkRlZlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIG9iamVjdCwgZ2x0ZkRlZiApIHtcclxuXHJcblx0XHRpZiAoIGdsdGZEZWYuZXh0cmFzICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRpZiAoIHR5cGVvZiBnbHRmRGVmLmV4dHJhcyA9PT0gJ29iamVjdCcgKSB7XHJcblxyXG5cdFx0XHRcdE9iamVjdC5hc3NpZ24oIG9iamVjdC51c2VyRGF0YSwgZ2x0ZkRlZi5leHRyYXMgKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IElnbm9yaW5nIHByaW1pdGl2ZSB0eXBlIC5leHRyYXMsICcgKyBnbHRmRGVmLmV4dHJhcyApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI21vcnBoLXRhcmdldHNcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7QnVmZmVyR2VvbWV0cnl9IGdlb21ldHJ5XHJcblx0ICogQHBhcmFtIHtBcnJheTxHTFRGLlRhcmdldD59IHRhcmdldHNcclxuXHQgKiBAcGFyYW0ge0dMVEZQYXJzZXJ9IHBhcnNlclxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QnVmZmVyR2VvbWV0cnk+fVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGFkZE1vcnBoVGFyZ2V0cyggZ2VvbWV0cnksIHRhcmdldHMsIHBhcnNlciApIHtcclxuXHJcblx0XHR2YXIgaGFzTW9ycGhQb3NpdGlvbiA9IGZhbHNlO1xyXG5cdFx0dmFyIGhhc01vcnBoTm9ybWFsID0gZmFsc2U7XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IHRhcmdldHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHR2YXIgdGFyZ2V0ID0gdGFyZ2V0c1sgaSBdO1xyXG5cclxuXHRcdFx0aWYgKCB0YXJnZXQuUE9TSVRJT04gIT09IHVuZGVmaW5lZCApIGhhc01vcnBoUG9zaXRpb24gPSB0cnVlO1xyXG5cdFx0XHRpZiAoIHRhcmdldC5OT1JNQUwgIT09IHVuZGVmaW5lZCApIGhhc01vcnBoTm9ybWFsID0gdHJ1ZTtcclxuXHJcblx0XHRcdGlmICggaGFzTW9ycGhQb3NpdGlvbiAmJiBoYXNNb3JwaE5vcm1hbCApIGJyZWFrO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoICEgaGFzTW9ycGhQb3NpdGlvbiAmJiAhIGhhc01vcnBoTm9ybWFsICkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSggZ2VvbWV0cnkgKTtcclxuXHJcblx0XHR2YXIgcGVuZGluZ1Bvc2l0aW9uQWNjZXNzb3JzID0gW107XHJcblx0XHR2YXIgcGVuZGluZ05vcm1hbEFjY2Vzc29ycyA9IFtdO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSB0YXJnZXRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0dmFyIHRhcmdldCA9IHRhcmdldHNbIGkgXTtcclxuXHJcblx0XHRcdGlmICggaGFzTW9ycGhQb3NpdGlvbiApIHtcclxuXHJcblx0XHRcdFx0dmFyIHBlbmRpbmdBY2Nlc3NvciA9IHRhcmdldC5QT1NJVElPTiAhPT0gdW5kZWZpbmVkXHJcblx0XHRcdFx0XHQ/IHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCB0YXJnZXQuUE9TSVRJT04gKVxyXG5cdFx0XHRcdFx0OiBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uO1xyXG5cclxuXHRcdFx0XHRwZW5kaW5nUG9zaXRpb25BY2Nlc3NvcnMucHVzaCggcGVuZGluZ0FjY2Vzc29yICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGhhc01vcnBoTm9ybWFsICkge1xyXG5cclxuXHRcdFx0XHR2YXIgcGVuZGluZ0FjY2Vzc29yID0gdGFyZ2V0Lk5PUk1BTCAhPT0gdW5kZWZpbmVkXHJcblx0XHRcdFx0XHQ/IHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCB0YXJnZXQuTk9STUFMIClcclxuXHRcdFx0XHRcdDogZ2VvbWV0cnkuYXR0cmlidXRlcy5ub3JtYWw7XHJcblxyXG5cdFx0XHRcdHBlbmRpbmdOb3JtYWxBY2Nlc3NvcnMucHVzaCggcGVuZGluZ0FjY2Vzc29yICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggW1xyXG5cdFx0XHRQcm9taXNlLmFsbCggcGVuZGluZ1Bvc2l0aW9uQWNjZXNzb3JzICksXHJcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nTm9ybWFsQWNjZXNzb3JzIClcclxuXHRcdF0gKS50aGVuKCBmdW5jdGlvbiAoIGFjY2Vzc29ycyApIHtcclxuXHJcblx0XHRcdHZhciBtb3JwaFBvc2l0aW9ucyA9IGFjY2Vzc29yc1sgMCBdO1xyXG5cdFx0XHR2YXIgbW9ycGhOb3JtYWxzID0gYWNjZXNzb3JzWyAxIF07XHJcblxyXG5cdFx0XHRpZiAoIGhhc01vcnBoUG9zaXRpb24gKSBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMucG9zaXRpb24gPSBtb3JwaFBvc2l0aW9ucztcclxuXHRcdFx0aWYgKCBoYXNNb3JwaE5vcm1hbCApIGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcy5ub3JtYWwgPSBtb3JwaE5vcm1hbHM7XHJcblx0XHRcdGdlb21ldHJ5Lm1vcnBoVGFyZ2V0c1JlbGF0aXZlID0gdHJ1ZTtcclxuXHJcblx0XHRcdHJldHVybiBnZW9tZXRyeTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtNZXNofSBtZXNoXHJcblx0ICogQHBhcmFtIHtHTFRGLk1lc2h9IG1lc2hEZWZcclxuXHQgKi9cclxuXHRmdW5jdGlvbiB1cGRhdGVNb3JwaFRhcmdldHMoIG1lc2gsIG1lc2hEZWYgKSB7XHJcblxyXG5cdFx0bWVzaC51cGRhdGVNb3JwaFRhcmdldHMoKTtcclxuXHJcblx0XHRpZiAoIG1lc2hEZWYud2VpZ2h0cyAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IG1lc2hEZWYud2VpZ2h0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0bWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXNbIGkgXSA9IG1lc2hEZWYud2VpZ2h0c1sgaSBdO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyAuZXh0cmFzIGhhcyB1c2VyLWRlZmluZWQgZGF0YSwgc28gY2hlY2sgdGhhdCAuZXh0cmFzLnRhcmdldE5hbWVzIGlzIGFuIGFycmF5LlxyXG5cdFx0aWYgKCBtZXNoRGVmLmV4dHJhcyAmJiBBcnJheS5pc0FycmF5KCBtZXNoRGVmLmV4dHJhcy50YXJnZXROYW1lcyApICkge1xyXG5cclxuXHRcdFx0dmFyIHRhcmdldE5hbWVzID0gbWVzaERlZi5leHRyYXMudGFyZ2V0TmFtZXM7XHJcblxyXG5cdFx0XHRpZiAoIG1lc2gubW9ycGhUYXJnZXRJbmZsdWVuY2VzLmxlbmd0aCA9PT0gdGFyZ2V0TmFtZXMubGVuZ3RoICkge1xyXG5cclxuXHRcdFx0XHRtZXNoLm1vcnBoVGFyZ2V0RGljdGlvbmFyeSA9IHt9O1xyXG5cclxuXHRcdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gdGFyZ2V0TmFtZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0bWVzaC5tb3JwaFRhcmdldERpY3Rpb25hcnlbIHRhcmdldE5hbWVzWyBpIF0gXSA9IGk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IEludmFsaWQgZXh0cmFzLnRhcmdldE5hbWVzIGxlbmd0aC4gSWdub3JpbmcgbmFtZXMuJyApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVLZXkoIHByaW1pdGl2ZURlZiApIHtcclxuXHJcblx0XHR2YXIgZHJhY29FeHRlbnNpb24gPSBwcmltaXRpdmVEZWYuZXh0ZW5zaW9ucyAmJiBwcmltaXRpdmVEZWYuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTiBdO1xyXG5cdFx0dmFyIGdlb21ldHJ5S2V5O1xyXG5cclxuXHRcdGlmICggZHJhY29FeHRlbnNpb24gKSB7XHJcblxyXG5cdFx0XHRnZW9tZXRyeUtleSA9ICdkcmFjbzonICsgZHJhY29FeHRlbnNpb24uYnVmZmVyVmlld1xyXG5cdFx0XHRcdCsgJzonICsgZHJhY29FeHRlbnNpb24uaW5kaWNlc1xyXG5cdFx0XHRcdCsgJzonICsgY3JlYXRlQXR0cmlidXRlc0tleSggZHJhY29FeHRlbnNpb24uYXR0cmlidXRlcyApO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRnZW9tZXRyeUtleSA9IHByaW1pdGl2ZURlZi5pbmRpY2VzICsgJzonICsgY3JlYXRlQXR0cmlidXRlc0tleSggcHJpbWl0aXZlRGVmLmF0dHJpYnV0ZXMgKSArICc6JyArIHByaW1pdGl2ZURlZi5tb2RlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZ2VvbWV0cnlLZXk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY3JlYXRlQXR0cmlidXRlc0tleSggYXR0cmlidXRlcyApIHtcclxuXHJcblx0XHR2YXIgYXR0cmlidXRlc0tleSA9ICcnO1xyXG5cclxuXHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXMoIGF0dHJpYnV0ZXMgKS5zb3J0KCk7XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IGtleXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRhdHRyaWJ1dGVzS2V5ICs9IGtleXNbIGkgXSArICc6JyArIGF0dHJpYnV0ZXNbIGtleXNbIGkgXSBdICsgJzsnO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gYXR0cmlidXRlc0tleTtcclxuXHJcblx0fVxyXG5cclxuXHQvKiBHTFRGIFBBUlNFUiAqL1xyXG5cclxuXHRmdW5jdGlvbiBHTFRGUGFyc2VyKCBqc29uLCBvcHRpb25zICkge1xyXG5cclxuXHRcdHRoaXMuanNvbiA9IGpzb24gfHwge307XHJcblx0XHR0aGlzLmV4dGVuc2lvbnMgPSB7fTtcclxuXHRcdHRoaXMucGx1Z2lucyA9IHt9O1xyXG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcblx0XHQvLyBsb2FkZXIgb2JqZWN0IGNhY2hlXHJcblx0XHR0aGlzLmNhY2hlID0gbmV3IEdMVEZSZWdpc3RyeSgpO1xyXG5cclxuXHRcdC8vIGFzc29jaWF0aW9ucyBiZXR3ZWVuIFRocmVlLmpzIG9iamVjdHMgYW5kIGdsVEYgZWxlbWVudHNcclxuXHRcdHRoaXMuYXNzb2NpYXRpb25zID0gbmV3IE1hcCgpO1xyXG5cclxuXHRcdC8vIEJ1ZmZlckdlb21ldHJ5IGNhY2hpbmdcclxuXHRcdHRoaXMucHJpbWl0aXZlQ2FjaGUgPSB7fTtcclxuXHJcblx0XHQvLyBPYmplY3QzRCBpbnN0YW5jZSBjYWNoZXNcclxuXHRcdHRoaXMubWVzaENhY2hlID0geyByZWZzOiB7fSwgdXNlczoge30gfTtcclxuXHRcdHRoaXMuY2FtZXJhQ2FjaGUgPSB7IHJlZnM6IHt9LCB1c2VzOiB7fSB9O1xyXG5cdFx0dGhpcy5saWdodENhY2hlID0geyByZWZzOiB7fSwgdXNlczoge30gfTtcclxuXHJcblx0XHQvLyBUcmFjayBub2RlIG5hbWVzLCB0byBlbnN1cmUgbm8gZHVwbGljYXRlc1xyXG5cdFx0dGhpcy5ub2RlTmFtZXNVc2VkID0ge307XHJcblxyXG5cdFx0Ly8gVXNlIGFuIEltYWdlQml0bWFwTG9hZGVyIGlmIGltYWdlQml0bWFwcyBhcmUgc3VwcG9ydGVkLiBNb3ZlcyBtdWNoIG9mIHRoZVxyXG5cdFx0Ly8gZXhwZW5zaXZlIHdvcmsgb2YgdXBsb2FkaW5nIGEgdGV4dHVyZSB0byB0aGUgR1BVIG9mZiB0aGUgbWFpbiB0aHJlYWQuXHJcblx0XHRpZiAoIHR5cGVvZiBjcmVhdGVJbWFnZUJpdG1hcCAhPT0gJ3VuZGVmaW5lZCcgJiYgL0ZpcmVmb3gvLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKSA9PT0gZmFsc2UgKSB7XHJcblxyXG5cdFx0XHR0aGlzLnRleHR1cmVMb2FkZXIgPSBuZXcgSW1hZ2VCaXRtYXBMb2FkZXIoIHRoaXMub3B0aW9ucy5tYW5hZ2VyICk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdHRoaXMudGV4dHVyZUxvYWRlciA9IG5ldyBUZXh0dXJlTG9hZGVyKCB0aGlzLm9wdGlvbnMubWFuYWdlciApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnRleHR1cmVMb2FkZXIuc2V0Q3Jvc3NPcmlnaW4oIHRoaXMub3B0aW9ucy5jcm9zc09yaWdpbiApO1xyXG5cdFx0dGhpcy50ZXh0dXJlTG9hZGVyLnNldFJlcXVlc3RIZWFkZXIoIHRoaXMub3B0aW9ucy5yZXF1ZXN0SGVhZGVyICk7XHJcblxyXG5cdFx0dGhpcy5maWxlTG9hZGVyID0gbmV3IEZpbGVMb2FkZXIoIHRoaXMub3B0aW9ucy5tYW5hZ2VyICk7XHJcblx0XHR0aGlzLmZpbGVMb2FkZXIuc2V0UmVzcG9uc2VUeXBlKCAnYXJyYXlidWZmZXInICk7XHJcblxyXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuY3Jvc3NPcmlnaW4gPT09ICd1c2UtY3JlZGVudGlhbHMnICkge1xyXG5cclxuXHRcdFx0dGhpcy5maWxlTG9hZGVyLnNldFdpdGhDcmVkZW50aWFscyggdHJ1ZSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5zZXRFeHRlbnNpb25zID0gZnVuY3Rpb24gKCBleHRlbnNpb25zICkge1xyXG5cclxuXHRcdHRoaXMuZXh0ZW5zaW9ucyA9IGV4dGVuc2lvbnM7XHJcblxyXG5cdH07XHJcblxyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLnNldFBsdWdpbnMgPSBmdW5jdGlvbiAoIHBsdWdpbnMgKSB7XHJcblxyXG5cdFx0dGhpcy5wbHVnaW5zID0gcGx1Z2lucztcclxuXHJcblx0fTtcclxuXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoIG9uTG9hZCwgb25FcnJvciApIHtcclxuXHJcblx0XHR2YXIgcGFyc2VyID0gdGhpcztcclxuXHRcdHZhciBqc29uID0gdGhpcy5qc29uO1xyXG5cdFx0dmFyIGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XHJcblxyXG5cdFx0Ly8gQ2xlYXIgdGhlIGxvYWRlciBjYWNoZVxyXG5cdFx0dGhpcy5jYWNoZS5yZW1vdmVBbGwoKTtcclxuXHJcblx0XHQvLyBNYXJrIHRoZSBzcGVjaWFsIG5vZGVzL21lc2hlcyBpbiBqc29uIGZvciBlZmZpY2llbnQgcGFyc2VcclxuXHRcdHRoaXMuX2ludm9rZUFsbCggZnVuY3Rpb24gKCBleHQgKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gZXh0Ll9tYXJrRGVmcyAmJiBleHQuX21hcmtEZWZzKCk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHRcdFByb21pc2UuYWxsKCB0aGlzLl9pbnZva2VBbGwoIGZ1bmN0aW9uICggZXh0ICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIGV4dC5iZWZvcmVSb290ICYmIGV4dC5iZWZvcmVSb290KCk7XHJcblxyXG5cdFx0fSApICkudGhlbiggZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKCBbXHJcblxyXG5cdFx0XHRcdHBhcnNlci5nZXREZXBlbmRlbmNpZXMoICdzY2VuZScgKSxcclxuXHRcdFx0XHRwYXJzZXIuZ2V0RGVwZW5kZW5jaWVzKCAnYW5pbWF0aW9uJyApLFxyXG5cdFx0XHRcdHBhcnNlci5nZXREZXBlbmRlbmNpZXMoICdjYW1lcmEnICksXHJcblxyXG5cdFx0XHRdICk7XHJcblxyXG5cdFx0fSApLnRoZW4oIGZ1bmN0aW9uICggZGVwZW5kZW5jaWVzICkge1xyXG5cclxuXHRcdFx0dmFyIHJlc3VsdCA9IHtcclxuXHRcdFx0XHRzY2VuZTogZGVwZW5kZW5jaWVzWyAwIF1bIGpzb24uc2NlbmUgfHwgMCBdLFxyXG5cdFx0XHRcdHNjZW5lczogZGVwZW5kZW5jaWVzWyAwIF0sXHJcblx0XHRcdFx0YW5pbWF0aW9uczogZGVwZW5kZW5jaWVzWyAxIF0sXHJcblx0XHRcdFx0Y2FtZXJhczogZGVwZW5kZW5jaWVzWyAyIF0sXHJcblx0XHRcdFx0YXNzZXQ6IGpzb24uYXNzZXQsXHJcblx0XHRcdFx0cGFyc2VyOiBwYXJzZXIsXHJcblx0XHRcdFx0dXNlckRhdGE6IHt9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIHJlc3VsdCwganNvbiApO1xyXG5cclxuXHRcdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggcmVzdWx0LCBqc29uICk7XHJcblxyXG5cdFx0XHRQcm9taXNlLmFsbCggcGFyc2VyLl9pbnZva2VBbGwoIGZ1bmN0aW9uICggZXh0ICkge1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZXh0LmFmdGVyUm9vdCAmJiBleHQuYWZ0ZXJSb290KCByZXN1bHQgKTtcclxuXHJcblx0XHRcdH0gKSApLnRoZW4oIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0b25Mb2FkKCByZXN1bHQgKTtcclxuXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHR9ICkuY2F0Y2goIG9uRXJyb3IgKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogTWFya3MgdGhlIHNwZWNpYWwgbm9kZXMvbWVzaGVzIGluIGpzb24gZm9yIGVmZmljaWVudCBwYXJzZS5cclxuXHQgKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5fbWFya0RlZnMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0dmFyIG5vZGVEZWZzID0gdGhpcy5qc29uLm5vZGVzIHx8IFtdO1xyXG5cdFx0dmFyIHNraW5EZWZzID0gdGhpcy5qc29uLnNraW5zIHx8IFtdO1xyXG5cdFx0dmFyIG1lc2hEZWZzID0gdGhpcy5qc29uLm1lc2hlcyB8fCBbXTtcclxuXHJcblx0XHQvLyBOb3RoaW5nIGluIHRoZSBub2RlIGRlZmluaXRpb24gaW5kaWNhdGVzIHdoZXRoZXIgaXQgaXMgYSBCb25lIG9yIGFuXHJcblx0XHQvLyBPYmplY3QzRC4gVXNlIHRoZSBza2lucycgam9pbnQgcmVmZXJlbmNlcyB0byBtYXJrIGJvbmVzLlxyXG5cdFx0Zm9yICggdmFyIHNraW5JbmRleCA9IDAsIHNraW5MZW5ndGggPSBza2luRGVmcy5sZW5ndGg7IHNraW5JbmRleCA8IHNraW5MZW5ndGg7IHNraW5JbmRleCArKyApIHtcclxuXHJcblx0XHRcdHZhciBqb2ludHMgPSBza2luRGVmc1sgc2tpbkluZGV4IF0uam9pbnRzO1xyXG5cclxuXHRcdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IGpvaW50cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0bm9kZURlZnNbIGpvaW50c1sgaSBdIF0uaXNCb25lID0gdHJ1ZTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gSXRlcmF0ZSBvdmVyIGFsbCBub2RlcywgbWFya2luZyByZWZlcmVuY2VzIHRvIHNoYXJlZCByZXNvdXJjZXMsXHJcblx0XHQvLyBhcyB3ZWxsIGFzIHNrZWxldG9uIGpvaW50cy5cclxuXHRcdGZvciAoIHZhciBub2RlSW5kZXggPSAwLCBub2RlTGVuZ3RoID0gbm9kZURlZnMubGVuZ3RoOyBub2RlSW5kZXggPCBub2RlTGVuZ3RoOyBub2RlSW5kZXggKysgKSB7XHJcblxyXG5cdFx0XHR2YXIgbm9kZURlZiA9IG5vZGVEZWZzWyBub2RlSW5kZXggXTtcclxuXHJcblx0XHRcdGlmICggbm9kZURlZi5tZXNoICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuX2FkZE5vZGVSZWYoIHRoaXMubWVzaENhY2hlLCBub2RlRGVmLm1lc2ggKTtcclxuXHJcblx0XHRcdFx0Ly8gTm90aGluZyBpbiB0aGUgbWVzaCBkZWZpbml0aW9uIGluZGljYXRlcyB3aGV0aGVyIGl0IGlzXHJcblx0XHRcdFx0Ly8gYSBTa2lubmVkTWVzaCBvciBNZXNoLiBVc2UgdGhlIG5vZGUncyBtZXNoIHJlZmVyZW5jZVxyXG5cdFx0XHRcdC8vIHRvIG1hcmsgU2tpbm5lZE1lc2ggaWYgbm9kZSBoYXMgc2tpbi5cclxuXHRcdFx0XHRpZiAoIG5vZGVEZWYuc2tpbiAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRcdG1lc2hEZWZzWyBub2RlRGVmLm1lc2ggXS5pc1NraW5uZWRNZXNoID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBub2RlRGVmLmNhbWVyYSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHR0aGlzLl9hZGROb2RlUmVmKCB0aGlzLmNhbWVyYUNhY2hlLCBub2RlRGVmLmNhbWVyYSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ291bnRzIHJlZmVyZW5jZXMgdG8gc2hhcmVkIG5vZGUgLyBPYmplY3QzRCByZXNvdXJjZXMuIFRoZXNlIHJlc291cmNlc1xyXG5cdCAqIGNhbiBiZSByZXVzZWQsIG9yIFwiaW5zdGFudGlhdGVkXCIsIGF0IG11bHRpcGxlIG5vZGVzIGluIHRoZSBzY2VuZVxyXG5cdCAqIGhpZXJhcmNoeS4gTWVzaCwgQ2FtZXJhLCBhbmQgTGlnaHQgaW5zdGFuY2VzIGFyZSBpbnN0YW50aWF0ZWQgYW5kIG11c3RcclxuXHQgKiBiZSBtYXJrZWQuIE5vbi1zY2VuZWdyYXBoIHJlc291cmNlcyAobGlrZSBNYXRlcmlhbHMsIEdlb21ldHJpZXMsIGFuZFxyXG5cdCAqIFRleHR1cmVzKSBjYW4gYmUgcmV1c2VkIGRpcmVjdGx5IGFuZCBhcmUgbm90IG1hcmtlZCBoZXJlLlxyXG5cdCAqXHJcblx0ICogRXhhbXBsZTogQ2VzaXVtTWlsa1RydWNrIHNhbXBsZSBtb2RlbCByZXVzZXMgXCJXaGVlbFwiIG1lc2hlcy5cclxuXHQgKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5fYWRkTm9kZVJlZiA9IGZ1bmN0aW9uICggY2FjaGUsIGluZGV4ICkge1xyXG5cclxuXHRcdGlmICggaW5kZXggPT09IHVuZGVmaW5lZCApIHJldHVybjtcclxuXHJcblx0XHRpZiAoIGNhY2hlLnJlZnNbIGluZGV4IF0gPT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdGNhY2hlLnJlZnNbIGluZGV4IF0gPSBjYWNoZS51c2VzWyBpbmRleCBdID0gMDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Y2FjaGUucmVmc1sgaW5kZXggXSArKztcclxuXHJcblx0fTtcclxuXHJcblx0LyoqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gYSBzaGFyZWQgcmVzb3VyY2UsIGNsb25pbmcgaXQgaWYgbmVjZXNzYXJ5LiAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLl9nZXROb2RlUmVmID0gZnVuY3Rpb24gKCBjYWNoZSwgaW5kZXgsIG9iamVjdCApIHtcclxuXHJcblx0XHRpZiAoIGNhY2hlLnJlZnNbIGluZGV4IF0gPD0gMSApIHJldHVybiBvYmplY3Q7XHJcblxyXG5cdFx0dmFyIHJlZiA9IG9iamVjdC5jbG9uZSgpO1xyXG5cclxuXHRcdHJlZi5uYW1lICs9ICdfaW5zdGFuY2VfJyArICggY2FjaGUudXNlc1sgaW5kZXggXSArKyApO1xyXG5cclxuXHRcdHJldHVybiByZWY7XHJcblxyXG5cdH07XHJcblxyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLl9pbnZva2VPbmUgPSBmdW5jdGlvbiAoIGZ1bmMgKSB7XHJcblxyXG5cdFx0dmFyIGV4dGVuc2lvbnMgPSBPYmplY3QudmFsdWVzKCB0aGlzLnBsdWdpbnMgKTtcclxuXHRcdGV4dGVuc2lvbnMucHVzaCggdGhpcyApO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpICsrICkge1xyXG5cclxuXHRcdFx0dmFyIHJlc3VsdCA9IGZ1bmMoIGV4dGVuc2lvbnNbIGkgXSApO1xyXG5cclxuXHRcdFx0aWYgKCByZXN1bHQgKSByZXR1cm4gcmVzdWx0O1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUuX2ludm9rZUFsbCA9IGZ1bmN0aW9uICggZnVuYyApIHtcclxuXHJcblx0XHR2YXIgZXh0ZW5zaW9ucyA9IE9iamVjdC52YWx1ZXMoIHRoaXMucGx1Z2lucyApO1xyXG5cdFx0ZXh0ZW5zaW9ucy51bnNoaWZ0KCB0aGlzICk7XHJcblxyXG5cdFx0dmFyIHBlbmRpbmcgPSBbXTtcclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgaSArKyApIHtcclxuXHJcblx0XHRcdHZhciByZXN1bHQgPSBmdW5jKCBleHRlbnNpb25zWyBpIF0gKTtcclxuXHJcblx0XHRcdGlmICggcmVzdWx0ICkgcGVuZGluZy5wdXNoKCByZXN1bHQgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBlbmRpbmc7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlcXVlc3RzIHRoZSBzcGVjaWZpZWQgZGVwZW5kZW5jeSBhc3luY2hyb25vdXNseSwgd2l0aCBjYWNoaW5nLlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QzRHxNYXRlcmlhbHxUSFJFRS5UZXh0dXJlfEFuaW1hdGlvbkNsaXB8QXJyYXlCdWZmZXJ8T2JqZWN0Pn1cclxuXHQgKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5nZXREZXBlbmRlbmN5ID0gZnVuY3Rpb24gKCB0eXBlLCBpbmRleCApIHtcclxuXHJcblx0XHR2YXIgY2FjaGVLZXkgPSB0eXBlICsgJzonICsgaW5kZXg7XHJcblx0XHR2YXIgZGVwZW5kZW5jeSA9IHRoaXMuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xyXG5cclxuXHRcdGlmICggISBkZXBlbmRlbmN5ICkge1xyXG5cclxuXHRcdFx0c3dpdGNoICggdHlwZSApIHtcclxuXHJcblx0XHRcdFx0Y2FzZSAnc2NlbmUnOlxyXG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZFNjZW5lKCBpbmRleCApO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ25vZGUnOlxyXG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZE5vZGUoIGluZGV4ICk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAnbWVzaCc6XHJcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiBleHQubG9hZE1lc2ggJiYgZXh0LmxvYWRNZXNoKCBpbmRleCApO1xyXG5cclxuXHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdhY2Nlc3Nvcic6XHJcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkQWNjZXNzb3IoIGluZGV4ICk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAnYnVmZmVyVmlldyc6XHJcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiBleHQubG9hZEJ1ZmZlclZpZXcgJiYgZXh0LmxvYWRCdWZmZXJWaWV3KCBpbmRleCApO1xyXG5cclxuXHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdidWZmZXInOlxyXG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZEJ1ZmZlciggaW5kZXggKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdtYXRlcmlhbCc6XHJcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiBleHQubG9hZE1hdGVyaWFsICYmIGV4dC5sb2FkTWF0ZXJpYWwoIGluZGV4ICk7XHJcblxyXG5cdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ3RleHR1cmUnOlxyXG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXh0LmxvYWRUZXh0dXJlICYmIGV4dC5sb2FkVGV4dHVyZSggaW5kZXggKTtcclxuXHJcblx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAnc2tpbic6XHJcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkU2tpbiggaW5kZXggKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdhbmltYXRpb24nOlxyXG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZEFuaW1hdGlvbiggaW5kZXggKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdjYW1lcmEnOlxyXG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZENhbWVyYSggaW5kZXggKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVW5rbm93biB0eXBlOiAnICsgdHlwZSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5jYWNoZS5hZGQoIGNhY2hlS2V5LCBkZXBlbmRlbmN5ICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBkZXBlbmRlbmN5O1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXF1ZXN0cyBhbGwgZGVwZW5kZW5jaWVzIG9mIHRoZSBzcGVjaWZpZWQgdHlwZSBhc3luY2hyb25vdXNseSwgd2l0aCBjYWNoaW5nLlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXHJcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheTxPYmplY3Q+Pn1cclxuXHQgKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5nZXREZXBlbmRlbmNpZXMgPSBmdW5jdGlvbiAoIHR5cGUgKSB7XHJcblxyXG5cdFx0dmFyIGRlcGVuZGVuY2llcyA9IHRoaXMuY2FjaGUuZ2V0KCB0eXBlICk7XHJcblxyXG5cdFx0aWYgKCAhIGRlcGVuZGVuY2llcyApIHtcclxuXHJcblx0XHRcdHZhciBwYXJzZXIgPSB0aGlzO1xyXG5cdFx0XHR2YXIgZGVmcyA9IHRoaXMuanNvblsgdHlwZSArICggdHlwZSA9PT0gJ21lc2gnID8gJ2VzJyA6ICdzJyApIF0gfHwgW107XHJcblxyXG5cdFx0XHRkZXBlbmRlbmNpZXMgPSBQcm9taXNlLmFsbCggZGVmcy5tYXAoIGZ1bmN0aW9uICggZGVmLCBpbmRleCApIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCB0eXBlLCBpbmRleCApO1xyXG5cclxuXHRcdFx0fSApICk7XHJcblxyXG5cdFx0XHR0aGlzLmNhY2hlLmFkZCggdHlwZSwgZGVwZW5kZW5jaWVzICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBkZXBlbmRlbmNpZXM7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjYnVmZmVycy1hbmQtYnVmZmVyLXZpZXdzXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IGJ1ZmZlckluZGV4XHJcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheUJ1ZmZlcj59XHJcblx0ICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUubG9hZEJ1ZmZlciA9IGZ1bmN0aW9uICggYnVmZmVySW5kZXggKSB7XHJcblxyXG5cdFx0dmFyIGJ1ZmZlckRlZiA9IHRoaXMuanNvbi5idWZmZXJzWyBidWZmZXJJbmRleCBdO1xyXG5cdFx0dmFyIGxvYWRlciA9IHRoaXMuZmlsZUxvYWRlcjtcclxuXHJcblx0XHRpZiAoIGJ1ZmZlckRlZi50eXBlICYmIGJ1ZmZlckRlZi50eXBlICE9PSAnYXJyYXlidWZmZXInICkge1xyXG5cclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogJyArIGJ1ZmZlckRlZi50eXBlICsgJyBidWZmZXIgdHlwZSBpcyBub3Qgc3VwcG9ydGVkLicgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gSWYgcHJlc2VudCwgR0xCIGNvbnRhaW5lciBpcyByZXF1aXJlZCB0byBiZSB0aGUgZmlyc3QgYnVmZmVyLlxyXG5cdFx0aWYgKCBidWZmZXJEZWYudXJpID09PSB1bmRlZmluZWQgJiYgYnVmZmVySW5kZXggPT09IDAgKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCB0aGlzLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0JJTkFSWV9HTFRGIF0uYm9keSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uICggcmVzb2x2ZSwgcmVqZWN0ICkge1xyXG5cclxuXHRcdFx0bG9hZGVyLmxvYWQoIHJlc29sdmVVUkwoIGJ1ZmZlckRlZi51cmksIG9wdGlvbnMucGF0aCApLCByZXNvbHZlLCB1bmRlZmluZWQsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0cmVqZWN0KCBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBGYWlsZWQgdG8gbG9hZCBidWZmZXIgXCInICsgYnVmZmVyRGVmLnVyaSArICdcIi4nICkgKTtcclxuXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjYnVmZmVycy1hbmQtYnVmZmVyLXZpZXdzXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IGJ1ZmZlclZpZXdJbmRleFxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXlCdWZmZXI+fVxyXG5cdCAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmxvYWRCdWZmZXJWaWV3ID0gZnVuY3Rpb24gKCBidWZmZXJWaWV3SW5kZXggKSB7XHJcblxyXG5cdFx0dmFyIGJ1ZmZlclZpZXdEZWYgPSB0aGlzLmpzb24uYnVmZmVyVmlld3NbIGJ1ZmZlclZpZXdJbmRleCBdO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmdldERlcGVuZGVuY3koICdidWZmZXInLCBidWZmZXJWaWV3RGVmLmJ1ZmZlciApLnRoZW4oIGZ1bmN0aW9uICggYnVmZmVyICkge1xyXG5cclxuXHRcdFx0dmFyIGJ5dGVMZW5ndGggPSBidWZmZXJWaWV3RGVmLmJ5dGVMZW5ndGggfHwgMDtcclxuXHRcdFx0dmFyIGJ5dGVPZmZzZXQgPSBidWZmZXJWaWV3RGVmLmJ5dGVPZmZzZXQgfHwgMDtcclxuXHRcdFx0cmV0dXJuIGJ1ZmZlci5zbGljZSggYnl0ZU9mZnNldCwgYnl0ZU9mZnNldCArIGJ5dGVMZW5ndGggKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjYWNjZXNzb3JzXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IGFjY2Vzc29ySW5kZXhcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEJ1ZmZlckF0dHJpYnV0ZXxJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZT59XHJcblx0ICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUubG9hZEFjY2Vzc29yID0gZnVuY3Rpb24gKCBhY2Nlc3NvckluZGV4ICkge1xyXG5cclxuXHRcdHZhciBwYXJzZXIgPSB0aGlzO1xyXG5cdFx0dmFyIGpzb24gPSB0aGlzLmpzb247XHJcblxyXG5cdFx0dmFyIGFjY2Vzc29yRGVmID0gdGhpcy5qc29uLmFjY2Vzc29yc1sgYWNjZXNzb3JJbmRleCBdO1xyXG5cclxuXHRcdGlmICggYWNjZXNzb3JEZWYuYnVmZmVyVmlldyA9PT0gdW5kZWZpbmVkICYmIGFjY2Vzc29yRGVmLnNwYXJzZSA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0Ly8gSWdub3JlIGVtcHR5IGFjY2Vzc29ycywgd2hpY2ggbWF5IGJlIHVzZWQgdG8gZGVjbGFyZSBydW50aW1lXHJcblx0XHRcdC8vIGluZm9ybWF0aW9uIGFib3V0IGF0dHJpYnV0ZXMgY29taW5nIGZyb20gYW5vdGhlciBzb3VyY2UgKGUuZy4gRHJhY29cclxuXHRcdFx0Ly8gY29tcHJlc3Npb24gZXh0ZW5zaW9uKS5cclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggbnVsbCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgcGVuZGluZ0J1ZmZlclZpZXdzID0gW107XHJcblxyXG5cdFx0aWYgKCBhY2Nlc3NvckRlZi5idWZmZXJWaWV3ICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRwZW5kaW5nQnVmZmVyVmlld3MucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnYnVmZmVyVmlldycsIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgKSApO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRwZW5kaW5nQnVmZmVyVmlld3MucHVzaCggbnVsbCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGFjY2Vzc29yRGVmLnNwYXJzZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0cGVuZGluZ0J1ZmZlclZpZXdzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlclZpZXcnLCBhY2Nlc3NvckRlZi5zcGFyc2UuaW5kaWNlcy5idWZmZXJWaWV3ICkgKTtcclxuXHRcdFx0cGVuZGluZ0J1ZmZlclZpZXdzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlclZpZXcnLCBhY2Nlc3NvckRlZi5zcGFyc2UudmFsdWVzLmJ1ZmZlclZpZXcgKSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmdCdWZmZXJWaWV3cyApLnRoZW4oIGZ1bmN0aW9uICggYnVmZmVyVmlld3MgKSB7XHJcblxyXG5cdFx0XHR2YXIgYnVmZmVyVmlldyA9IGJ1ZmZlclZpZXdzWyAwIF07XHJcblxyXG5cdFx0XHR2YXIgaXRlbVNpemUgPSBXRUJHTF9UWVBFX1NJWkVTWyBhY2Nlc3NvckRlZi50eXBlIF07XHJcblx0XHRcdHZhciBUeXBlZEFycmF5ID0gV0VCR0xfQ09NUE9ORU5UX1RZUEVTWyBhY2Nlc3NvckRlZi5jb21wb25lbnRUeXBlIF07XHJcblxyXG5cdFx0XHQvLyBGb3IgVkVDMzogaXRlbVNpemUgaXMgMywgZWxlbWVudEJ5dGVzIGlzIDQsIGl0ZW1CeXRlcyBpcyAxMi5cclxuXHRcdFx0dmFyIGVsZW1lbnRCeXRlcyA9IFR5cGVkQXJyYXkuQllURVNfUEVSX0VMRU1FTlQ7XHJcblx0XHRcdHZhciBpdGVtQnl0ZXMgPSBlbGVtZW50Qnl0ZXMgKiBpdGVtU2l6ZTtcclxuXHRcdFx0dmFyIGJ5dGVPZmZzZXQgPSBhY2Nlc3NvckRlZi5ieXRlT2Zmc2V0IHx8IDA7XHJcblx0XHRcdHZhciBieXRlU3RyaWRlID0gYWNjZXNzb3JEZWYuYnVmZmVyVmlldyAhPT0gdW5kZWZpbmVkID8ganNvbi5idWZmZXJWaWV3c1sgYWNjZXNzb3JEZWYuYnVmZmVyVmlldyBdLmJ5dGVTdHJpZGUgOiB1bmRlZmluZWQ7XHJcblx0XHRcdHZhciBub3JtYWxpemVkID0gYWNjZXNzb3JEZWYubm9ybWFsaXplZCA9PT0gdHJ1ZTtcclxuXHRcdFx0dmFyIGFycmF5LCBidWZmZXJBdHRyaWJ1dGU7XHJcblxyXG5cdFx0XHQvLyBUaGUgYnVmZmVyIGlzIG5vdCBpbnRlcmxlYXZlZCBpZiB0aGUgc3RyaWRlIGlzIHRoZSBpdGVtIHNpemUgaW4gYnl0ZXMuXHJcblx0XHRcdGlmICggYnl0ZVN0cmlkZSAmJiBieXRlU3RyaWRlICE9PSBpdGVtQnl0ZXMgKSB7XHJcblxyXG5cdFx0XHRcdC8vIEVhY2ggXCJzbGljZVwiIG9mIHRoZSBidWZmZXIsIGFzIGRlZmluZWQgYnkgJ2NvdW50JyBlbGVtZW50cyBvZiAnYnl0ZVN0cmlkZScgYnl0ZXMsIGdldHMgaXRzIG93biBJbnRlcmxlYXZlZEJ1ZmZlclxyXG5cdFx0XHRcdC8vIFRoaXMgbWFrZXMgc3VyZSB0aGF0IElCQS5jb3VudCByZWZsZWN0cyBhY2Nlc3Nvci5jb3VudCBwcm9wZXJseVxyXG5cdFx0XHRcdHZhciBpYlNsaWNlID0gTWF0aC5mbG9vciggYnl0ZU9mZnNldCAvIGJ5dGVTdHJpZGUgKTtcclxuXHRcdFx0XHR2YXIgaWJDYWNoZUtleSA9ICdJbnRlcmxlYXZlZEJ1ZmZlcjonICsgYWNjZXNzb3JEZWYuYnVmZmVyVmlldyArICc6JyArIGFjY2Vzc29yRGVmLmNvbXBvbmVudFR5cGUgKyAnOicgKyBpYlNsaWNlICsgJzonICsgYWNjZXNzb3JEZWYuY291bnQ7XHJcblx0XHRcdFx0dmFyIGliID0gcGFyc2VyLmNhY2hlLmdldCggaWJDYWNoZUtleSApO1xyXG5cclxuXHRcdFx0XHRpZiAoICEgaWIgKSB7XHJcblxyXG5cdFx0XHRcdFx0YXJyYXkgPSBuZXcgVHlwZWRBcnJheSggYnVmZmVyVmlldywgaWJTbGljZSAqIGJ5dGVTdHJpZGUsIGFjY2Vzc29yRGVmLmNvdW50ICogYnl0ZVN0cmlkZSAvIGVsZW1lbnRCeXRlcyApO1xyXG5cclxuXHRcdFx0XHRcdC8vIEludGVnZXIgcGFyYW1ldGVycyB0byBJQi9JQkEgYXJlIGluIGFycmF5IGVsZW1lbnRzLCBub3QgYnl0ZXMuXHJcblx0XHRcdFx0XHRpYiA9IG5ldyBJbnRlcmxlYXZlZEJ1ZmZlciggYXJyYXksIGJ5dGVTdHJpZGUgLyBlbGVtZW50Qnl0ZXMgKTtcclxuXHJcblx0XHRcdFx0XHRwYXJzZXIuY2FjaGUuYWRkKCBpYkNhY2hlS2V5LCBpYiApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGJ1ZmZlckF0dHJpYnV0ZSA9IG5ldyBJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSggaWIsIGl0ZW1TaXplLCAoIGJ5dGVPZmZzZXQgJSBieXRlU3RyaWRlICkgLyBlbGVtZW50Qnl0ZXMsIG5vcm1hbGl6ZWQgKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGlmICggYnVmZmVyVmlldyA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRcdFx0XHRhcnJheSA9IG5ldyBUeXBlZEFycmF5KCBhY2Nlc3NvckRlZi5jb3VudCAqIGl0ZW1TaXplICk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0YXJyYXkgPSBuZXcgVHlwZWRBcnJheSggYnVmZmVyVmlldywgYnl0ZU9mZnNldCwgYWNjZXNzb3JEZWYuY291bnQgKiBpdGVtU2l6ZSApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGJ1ZmZlckF0dHJpYnV0ZSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoIGFycmF5LCBpdGVtU2l6ZSwgbm9ybWFsaXplZCApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNzcGFyc2UtYWNjZXNzb3JzXHJcblx0XHRcdGlmICggYWNjZXNzb3JEZWYuc3BhcnNlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBpdGVtU2l6ZUluZGljZXMgPSBXRUJHTF9UWVBFX1NJWkVTLlNDQUxBUjtcclxuXHRcdFx0XHR2YXIgVHlwZWRBcnJheUluZGljZXMgPSBXRUJHTF9DT01QT05FTlRfVFlQRVNbIGFjY2Vzc29yRGVmLnNwYXJzZS5pbmRpY2VzLmNvbXBvbmVudFR5cGUgXTtcclxuXHJcblx0XHRcdFx0dmFyIGJ5dGVPZmZzZXRJbmRpY2VzID0gYWNjZXNzb3JEZWYuc3BhcnNlLmluZGljZXMuYnl0ZU9mZnNldCB8fCAwO1xyXG5cdFx0XHRcdHZhciBieXRlT2Zmc2V0VmFsdWVzID0gYWNjZXNzb3JEZWYuc3BhcnNlLnZhbHVlcy5ieXRlT2Zmc2V0IHx8IDA7XHJcblxyXG5cdFx0XHRcdHZhciBzcGFyc2VJbmRpY2VzID0gbmV3IFR5cGVkQXJyYXlJbmRpY2VzKCBidWZmZXJWaWV3c1sgMSBdLCBieXRlT2Zmc2V0SW5kaWNlcywgYWNjZXNzb3JEZWYuc3BhcnNlLmNvdW50ICogaXRlbVNpemVJbmRpY2VzICk7XHJcblx0XHRcdFx0dmFyIHNwYXJzZVZhbHVlcyA9IG5ldyBUeXBlZEFycmF5KCBidWZmZXJWaWV3c1sgMiBdLCBieXRlT2Zmc2V0VmFsdWVzLCBhY2Nlc3NvckRlZi5zcGFyc2UuY291bnQgKiBpdGVtU2l6ZSApO1xyXG5cclxuXHRcdFx0XHRpZiAoIGJ1ZmZlclZpZXcgIT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8gQXZvaWQgbW9kaWZ5aW5nIHRoZSBvcmlnaW5hbCBBcnJheUJ1ZmZlciwgaWYgdGhlIGJ1ZmZlclZpZXcgd2Fzbid0IGluaXRpYWxpemVkIHdpdGggemVyb2VzLlxyXG5cdFx0XHRcdFx0YnVmZmVyQXR0cmlidXRlID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZSggYnVmZmVyQXR0cmlidXRlLmFycmF5LnNsaWNlKCksIGJ1ZmZlckF0dHJpYnV0ZS5pdGVtU2l6ZSwgYnVmZmVyQXR0cmlidXRlLm5vcm1hbGl6ZWQgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gc3BhcnNlSW5kaWNlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgaW5kZXggPSBzcGFyc2VJbmRpY2VzWyBpIF07XHJcblxyXG5cdFx0XHRcdFx0YnVmZmVyQXR0cmlidXRlLnNldFgoIGluZGV4LCBzcGFyc2VWYWx1ZXNbIGkgKiBpdGVtU2l6ZSBdICk7XHJcblx0XHRcdFx0XHRpZiAoIGl0ZW1TaXplID49IDIgKSBidWZmZXJBdHRyaWJ1dGUuc2V0WSggaW5kZXgsIHNwYXJzZVZhbHVlc1sgaSAqIGl0ZW1TaXplICsgMSBdICk7XHJcblx0XHRcdFx0XHRpZiAoIGl0ZW1TaXplID49IDMgKSBidWZmZXJBdHRyaWJ1dGUuc2V0WiggaW5kZXgsIHNwYXJzZVZhbHVlc1sgaSAqIGl0ZW1TaXplICsgMiBdICk7XHJcblx0XHRcdFx0XHRpZiAoIGl0ZW1TaXplID49IDQgKSBidWZmZXJBdHRyaWJ1dGUuc2V0VyggaW5kZXgsIHNwYXJzZVZhbHVlc1sgaSAqIGl0ZW1TaXplICsgMyBdICk7XHJcblx0XHRcdFx0XHRpZiAoIGl0ZW1TaXplID49IDUgKSB0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBVbnN1cHBvcnRlZCBpdGVtU2l6ZSBpbiBzcGFyc2UgQnVmZmVyQXR0cmlidXRlLicgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGJ1ZmZlckF0dHJpYnV0ZTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCN0ZXh0dXJlc1xyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0ZXh0dXJlSW5kZXhcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFRIUkVFLlRleHR1cmU+fVxyXG5cdCAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmxvYWRUZXh0dXJlID0gZnVuY3Rpb24gKCB0ZXh0dXJlSW5kZXggKSB7XHJcblxyXG5cdFx0dmFyIGpzb24gPSB0aGlzLmpzb247XHJcblx0XHR2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHRcdHZhciB0ZXh0dXJlRGVmID0ganNvbi50ZXh0dXJlc1sgdGV4dHVyZUluZGV4IF07XHJcblx0XHR2YXIgc291cmNlID0ganNvbi5pbWFnZXNbIHRleHR1cmVEZWYuc291cmNlIF07XHJcblxyXG5cdFx0dmFyIGxvYWRlciA9IHRoaXMudGV4dHVyZUxvYWRlcjtcclxuXHJcblx0XHRpZiAoIHNvdXJjZS51cmkgKSB7XHJcblxyXG5cdFx0XHR2YXIgaGFuZGxlciA9IG9wdGlvbnMubWFuYWdlci5nZXRIYW5kbGVyKCBzb3VyY2UudXJpICk7XHJcblx0XHRcdGlmICggaGFuZGxlciAhPT0gbnVsbCApIGxvYWRlciA9IGhhbmRsZXI7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmxvYWRUZXh0dXJlSW1hZ2UoIHRleHR1cmVJbmRleCwgc291cmNlLCBsb2FkZXIgKTtcclxuXHJcblx0fTtcclxuXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUubG9hZFRleHR1cmVJbWFnZSA9IGZ1bmN0aW9uICggdGV4dHVyZUluZGV4LCBzb3VyY2UsIGxvYWRlciApIHtcclxuXHJcblx0XHR2YXIgcGFyc2VyID0gdGhpcztcclxuXHRcdHZhciBqc29uID0gdGhpcy5qc29uO1xyXG5cdFx0dmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblxyXG5cdFx0dmFyIHRleHR1cmVEZWYgPSBqc29uLnRleHR1cmVzWyB0ZXh0dXJlSW5kZXggXTtcclxuXHJcblx0XHR2YXIgVVJMID0gc2VsZi5VUkwgfHwgc2VsZi53ZWJraXRVUkw7XHJcblxyXG5cdFx0dmFyIHNvdXJjZVVSSSA9IHNvdXJjZS51cmk7XHJcblx0XHR2YXIgaXNPYmplY3RVUkwgPSBmYWxzZTtcclxuXHRcdHZhciBoYXNBbHBoYSA9IHRydWU7XHJcblxyXG5cdFx0aWYgKCBzb3VyY2UubWltZVR5cGUgPT09ICdpbWFnZS9qcGVnJyApIGhhc0FscGhhID0gZmFsc2U7XHJcblxyXG5cdFx0aWYgKCBzb3VyY2UuYnVmZmVyVmlldyAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0Ly8gTG9hZCBiaW5hcnkgaW1hZ2UgZGF0YSBmcm9tIGJ1ZmZlclZpZXcsIGlmIHByb3ZpZGVkLlxyXG5cclxuXHRcdFx0c291cmNlVVJJID0gcGFyc2VyLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3Jywgc291cmNlLmJ1ZmZlclZpZXcgKS50aGVuKCBmdW5jdGlvbiAoIGJ1ZmZlclZpZXcgKSB7XHJcblxyXG5cdFx0XHRcdGlmICggc291cmNlLm1pbWVUeXBlID09PSAnaW1hZ2UvcG5nJyApIHtcclxuXHJcblx0XHRcdFx0XHQvLyBJbnNwZWN0IHRoZSBQTkcgJ0lIRFInIGNodW5rIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBpbWFnZSBjb3VsZCBoYXZlIGFuXHJcblx0XHRcdFx0XHQvLyBhbHBoYSBjaGFubmVsLiBUaGlzIGNoZWNrIGlzIGNvbnNlcnZhdGl2ZSDigJQgdGhlIGltYWdlIGNvdWxkIGhhdmUgYW4gYWxwaGFcclxuXHRcdFx0XHRcdC8vIGNoYW5uZWwgd2l0aCBhbGwgdmFsdWVzID09IDEsIGFuZCB0aGUgaW5kZXhlZCB0eXBlIChjb2xvclR5cGUgPT0gMykgb25seVxyXG5cdFx0XHRcdFx0Ly8gc29tZXRpbWVzIGNvbnRhaW5zIGFscGhhLlxyXG5cdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1BvcnRhYmxlX05ldHdvcmtfR3JhcGhpY3MjRmlsZV9oZWFkZXJcclxuXHRcdFx0XHRcdHZhciBjb2xvclR5cGUgPSBuZXcgRGF0YVZpZXcoIGJ1ZmZlclZpZXcsIDI1LCAxICkuZ2V0VWludDgoIDAsIGZhbHNlICk7XHJcblx0XHRcdFx0XHRoYXNBbHBoYSA9IGNvbG9yVHlwZSA9PT0gNiB8fCBjb2xvclR5cGUgPT09IDQgfHwgY29sb3JUeXBlID09PSAzO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlzT2JqZWN0VVJMID0gdHJ1ZTtcclxuXHRcdFx0XHR2YXIgYmxvYiA9IG5ldyBCbG9iKCBbIGJ1ZmZlclZpZXcgXSwgeyB0eXBlOiBzb3VyY2UubWltZVR5cGUgfSApO1xyXG5cdFx0XHRcdHNvdXJjZVVSSSA9IFVSTC5jcmVhdGVPYmplY3RVUkwoIGJsb2IgKTtcclxuXHRcdFx0XHRyZXR1cm4gc291cmNlVVJJO1xyXG5cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoIHNvdXJjZS51cmkgPT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IEltYWdlICcgKyB0ZXh0dXJlSW5kZXggKyAnIGlzIG1pc3NpbmcgVVJJIGFuZCBidWZmZXJWaWV3JyApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCBzb3VyY2VVUkkgKS50aGVuKCBmdW5jdGlvbiAoIHNvdXJjZVVSSSApIHtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24gKCByZXNvbHZlLCByZWplY3QgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBvbkxvYWQgPSByZXNvbHZlO1xyXG5cclxuXHRcdFx0XHRpZiAoIGxvYWRlci5pc0ltYWdlQml0bWFwTG9hZGVyID09PSB0cnVlICkge1xyXG5cclxuXHRcdFx0XHRcdG9uTG9hZCA9IGZ1bmN0aW9uICggaW1hZ2VCaXRtYXAgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKCBuZXcgQ2FudmFzVGV4dHVyZSggaW1hZ2VCaXRtYXAgKSApO1xyXG5cclxuXHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bG9hZGVyLmxvYWQoIHJlc29sdmVVUkwoIHNvdXJjZVVSSSwgb3B0aW9ucy5wYXRoICksIG9uTG9hZCwgdW5kZWZpbmVkLCByZWplY3QgKTtcclxuXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHR9ICkudGhlbiggZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xyXG5cclxuXHRcdFx0Ly8gQ2xlYW4gdXAgcmVzb3VyY2VzIGFuZCBjb25maWd1cmUgVGV4dHVyZS5cclxuXHJcblx0XHRcdGlmICggaXNPYmplY3RVUkwgPT09IHRydWUgKSB7XHJcblxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoIHNvdXJjZVVSSSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGV4dHVyZS5mbGlwWSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0aWYgKCB0ZXh0dXJlRGVmLm5hbWUgKSB0ZXh0dXJlLm5hbWUgPSB0ZXh0dXJlRGVmLm5hbWU7XHJcblxyXG5cdFx0XHQvLyBXaGVuIHRoZXJlIGlzIGRlZmluaXRlbHkgbm8gYWxwaGEgY2hhbm5lbCBpbiB0aGUgdGV4dHVyZSwgc2V0IFJHQkZvcm1hdCB0byBzYXZlIHNwYWNlLlxyXG5cdFx0XHRpZiAoICEgaGFzQWxwaGEgKSB0ZXh0dXJlLmZvcm1hdCA9IFJHQkZvcm1hdDtcclxuXHJcblx0XHRcdHZhciBzYW1wbGVycyA9IGpzb24uc2FtcGxlcnMgfHwge307XHJcblx0XHRcdHZhciBzYW1wbGVyID0gc2FtcGxlcnNbIHRleHR1cmVEZWYuc2FtcGxlciBdIHx8IHt9O1xyXG5cclxuXHRcdFx0dGV4dHVyZS5tYWdGaWx0ZXIgPSBXRUJHTF9GSUxURVJTWyBzYW1wbGVyLm1hZ0ZpbHRlciBdIHx8IExpbmVhckZpbHRlcjtcclxuXHRcdFx0dGV4dHVyZS5taW5GaWx0ZXIgPSBXRUJHTF9GSUxURVJTWyBzYW1wbGVyLm1pbkZpbHRlciBdIHx8IExpbmVhck1pcG1hcExpbmVhckZpbHRlcjtcclxuXHRcdFx0dGV4dHVyZS53cmFwUyA9IFdFQkdMX1dSQVBQSU5HU1sgc2FtcGxlci53cmFwUyBdIHx8IFJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0XHR0ZXh0dXJlLndyYXBUID0gV0VCR0xfV1JBUFBJTkdTWyBzYW1wbGVyLndyYXBUIF0gfHwgUmVwZWF0V3JhcHBpbmc7XHJcblxyXG5cdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLnNldCggdGV4dHVyZSwge1xyXG5cdFx0XHRcdHR5cGU6ICd0ZXh0dXJlcycsXHJcblx0XHRcdFx0aW5kZXg6IHRleHR1cmVJbmRleFxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGV4dHVyZTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFzeW5jaHJvbm91c2x5IGFzc2lnbnMgYSB0ZXh0dXJlIHRvIHRoZSBnaXZlbiBtYXRlcmlhbCBwYXJhbWV0ZXJzLlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBtYXRlcmlhbFBhcmFtc1xyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtYXBOYW1lXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG1hcERlZlxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2V9XHJcblx0ICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUuYXNzaWduVGV4dHVyZSA9IGZ1bmN0aW9uICggbWF0ZXJpYWxQYXJhbXMsIG1hcE5hbWUsIG1hcERlZiApIHtcclxuXHJcblx0XHR2YXIgcGFyc2VyID0gdGhpcztcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5nZXREZXBlbmRlbmN5KCAndGV4dHVyZScsIG1hcERlZi5pbmRleCApLnRoZW4oIGZ1bmN0aW9uICggdGV4dHVyZSApIHtcclxuXHJcblx0XHRcdC8vIE1hdGVyaWFscyBzYW1wbGUgYW9NYXAgZnJvbSBVViBzZXQgMSBhbmQgb3RoZXIgbWFwcyBmcm9tIFVWIHNldCAwIC0gdGhpcyBjYW4ndCBiZSBjb25maWd1cmVkXHJcblx0XHRcdC8vIEhvd2V2ZXIsIHdlIHdpbGwgY29weSBVViBzZXQgMCB0byBVViBzZXQgMSBvbiBkZW1hbmQgZm9yIGFvTWFwXHJcblx0XHRcdGlmICggbWFwRGVmLnRleENvb3JkICE9PSB1bmRlZmluZWQgJiYgbWFwRGVmLnRleENvb3JkICE9IDAgJiYgISAoIG1hcE5hbWUgPT09ICdhb01hcCcgJiYgbWFwRGVmLnRleENvb3JkID09IDEgKSApIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogQ3VzdG9tIFVWIHNldCAnICsgbWFwRGVmLnRleENvb3JkICsgJyBmb3IgdGV4dHVyZSAnICsgbWFwTmFtZSArICcgbm90IHlldCBzdXBwb3J0ZWQuJyApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBwYXJzZXIuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk0gXSApIHtcclxuXHJcblx0XHRcdFx0dmFyIHRyYW5zZm9ybSA9IG1hcERlZi5leHRlbnNpb25zICE9PSB1bmRlZmluZWQgPyBtYXBEZWYuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk0gXSA6IHVuZGVmaW5lZDtcclxuXHJcblx0XHRcdFx0aWYgKCB0cmFuc2Zvcm0gKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGdsdGZSZWZlcmVuY2UgPSBwYXJzZXIuYXNzb2NpYXRpb25zLmdldCggdGV4dHVyZSApO1xyXG5cdFx0XHRcdFx0dGV4dHVyZSA9IHBhcnNlci5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9URVhUVVJFX1RSQU5TRk9STSBdLmV4dGVuZFRleHR1cmUoIHRleHR1cmUsIHRyYW5zZm9ybSApO1xyXG5cdFx0XHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucy5zZXQoIHRleHR1cmUsIGdsdGZSZWZlcmVuY2UgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWF0ZXJpYWxQYXJhbXNbIG1hcE5hbWUgXSA9IHRleHR1cmU7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBBc3NpZ25zIGZpbmFsIG1hdGVyaWFsIHRvIGEgTWVzaCwgTGluZSwgb3IgUG9pbnRzIGluc3RhbmNlLiBUaGUgaW5zdGFuY2VcclxuXHQgKiBhbHJlYWR5IGhhcyBhIG1hdGVyaWFsIChnZW5lcmF0ZWQgZnJvbSB0aGUgZ2xURiBtYXRlcmlhbCBvcHRpb25zIGFsb25lKVxyXG5cdCAqIGJ1dCByZXVzZSBvZiB0aGUgc2FtZSBnbFRGIG1hdGVyaWFsIG1heSByZXF1aXJlIG11bHRpcGxlIHRocmVlanMgbWF0ZXJpYWxzXHJcblx0ICogdG8gYWNjb21tb2RhdGUgZGlmZmVyZW50IHByaW1pdGl2ZSB0eXBlcywgZGVmaW5lcywgZXRjLiBOZXcgbWF0ZXJpYWxzIHdpbGxcclxuXHQgKiBiZSBjcmVhdGVkIGlmIG5lY2Vzc2FyeSwgYW5kIHJldXNlZCBmcm9tIGEgY2FjaGUuXHJcblx0ICogQHBhcmFtICB7T2JqZWN0M0R9IG1lc2ggTWVzaCwgTGluZSwgb3IgUG9pbnRzIGluc3RhbmNlLlxyXG5cdCAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmFzc2lnbkZpbmFsTWF0ZXJpYWwgPSBmdW5jdGlvbiAoIG1lc2ggKSB7XHJcblxyXG5cdFx0dmFyIGdlb21ldHJ5ID0gbWVzaC5nZW9tZXRyeTtcclxuXHRcdHZhciBtYXRlcmlhbCA9IG1lc2gubWF0ZXJpYWw7XHJcblxyXG5cdFx0dmFyIHVzZVZlcnRleFRhbmdlbnRzID0gZ2VvbWV0cnkuYXR0cmlidXRlcy50YW5nZW50ICE9PSB1bmRlZmluZWQ7XHJcblx0XHR2YXIgdXNlVmVydGV4Q29sb3JzID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5jb2xvciAhPT0gdW5kZWZpbmVkO1xyXG5cdFx0dmFyIHVzZUZsYXRTaGFkaW5nID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5ub3JtYWwgPT09IHVuZGVmaW5lZDtcclxuXHRcdHZhciB1c2VTa2lubmluZyA9IG1lc2guaXNTa2lubmVkTWVzaCA9PT0gdHJ1ZTtcclxuXHRcdHZhciB1c2VNb3JwaFRhcmdldHMgPSBPYmplY3Qua2V5cyggZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzICkubGVuZ3RoID4gMDtcclxuXHRcdHZhciB1c2VNb3JwaE5vcm1hbHMgPSB1c2VNb3JwaFRhcmdldHMgJiYgZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLm5vcm1hbCAhPT0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdGlmICggbWVzaC5pc1BvaW50cyApIHtcclxuXHJcblx0XHRcdHZhciBjYWNoZUtleSA9ICdQb2ludHNNYXRlcmlhbDonICsgbWF0ZXJpYWwudXVpZDtcclxuXHJcblx0XHRcdHZhciBwb2ludHNNYXRlcmlhbCA9IHRoaXMuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xyXG5cclxuXHRcdFx0aWYgKCAhIHBvaW50c01hdGVyaWFsICkge1xyXG5cclxuXHRcdFx0XHRwb2ludHNNYXRlcmlhbCA9IG5ldyBQb2ludHNNYXRlcmlhbCgpO1xyXG5cdFx0XHRcdE1hdGVyaWFsLnByb3RvdHlwZS5jb3B5LmNhbGwoIHBvaW50c01hdGVyaWFsLCBtYXRlcmlhbCApO1xyXG5cdFx0XHRcdHBvaW50c01hdGVyaWFsLmNvbG9yLmNvcHkoIG1hdGVyaWFsLmNvbG9yICk7XHJcblx0XHRcdFx0cG9pbnRzTWF0ZXJpYWwubWFwID0gbWF0ZXJpYWwubWFwO1xyXG5cdFx0XHRcdHBvaW50c01hdGVyaWFsLnNpemVBdHRlbnVhdGlvbiA9IGZhbHNlOyAvLyBnbFRGIHNwZWMgc2F5cyBwb2ludHMgc2hvdWxkIGJlIDFweFxyXG5cclxuXHRcdFx0XHR0aGlzLmNhY2hlLmFkZCggY2FjaGVLZXksIHBvaW50c01hdGVyaWFsICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYXRlcmlhbCA9IHBvaW50c01hdGVyaWFsO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoIG1lc2guaXNMaW5lICkge1xyXG5cclxuXHRcdFx0dmFyIGNhY2hlS2V5ID0gJ0xpbmVCYXNpY01hdGVyaWFsOicgKyBtYXRlcmlhbC51dWlkO1xyXG5cclxuXHRcdFx0dmFyIGxpbmVNYXRlcmlhbCA9IHRoaXMuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xyXG5cclxuXHRcdFx0aWYgKCAhIGxpbmVNYXRlcmlhbCApIHtcclxuXHJcblx0XHRcdFx0bGluZU1hdGVyaWFsID0gbmV3IExpbmVCYXNpY01hdGVyaWFsKCk7XHJcblx0XHRcdFx0TWF0ZXJpYWwucHJvdG90eXBlLmNvcHkuY2FsbCggbGluZU1hdGVyaWFsLCBtYXRlcmlhbCApO1xyXG5cdFx0XHRcdGxpbmVNYXRlcmlhbC5jb2xvci5jb3B5KCBtYXRlcmlhbC5jb2xvciApO1xyXG5cclxuXHRcdFx0XHR0aGlzLmNhY2hlLmFkZCggY2FjaGVLZXksIGxpbmVNYXRlcmlhbCApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWF0ZXJpYWwgPSBsaW5lTWF0ZXJpYWw7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENsb25lIHRoZSBtYXRlcmlhbCBpZiBpdCB3aWxsIGJlIG1vZGlmaWVkXHJcblx0XHRpZiAoIHVzZVZlcnRleFRhbmdlbnRzIHx8IHVzZVZlcnRleENvbG9ycyB8fCB1c2VGbGF0U2hhZGluZyB8fCB1c2VTa2lubmluZyB8fCB1c2VNb3JwaFRhcmdldHMgKSB7XHJcblxyXG5cdFx0XHR2YXIgY2FjaGVLZXkgPSAnQ2xvbmVkTWF0ZXJpYWw6JyArIG1hdGVyaWFsLnV1aWQgKyAnOic7XHJcblxyXG5cdFx0XHRpZiAoIG1hdGVyaWFsLmlzR0xURlNwZWN1bGFyR2xvc3NpbmVzc01hdGVyaWFsICkgY2FjaGVLZXkgKz0gJ3NwZWN1bGFyLWdsb3NzaW5lc3M6JztcclxuXHRcdFx0aWYgKCB1c2VTa2lubmluZyApIGNhY2hlS2V5ICs9ICdza2lubmluZzonO1xyXG5cdFx0XHRpZiAoIHVzZVZlcnRleFRhbmdlbnRzICkgY2FjaGVLZXkgKz0gJ3ZlcnRleC10YW5nZW50czonO1xyXG5cdFx0XHRpZiAoIHVzZVZlcnRleENvbG9ycyApIGNhY2hlS2V5ICs9ICd2ZXJ0ZXgtY29sb3JzOic7XHJcblx0XHRcdGlmICggdXNlRmxhdFNoYWRpbmcgKSBjYWNoZUtleSArPSAnZmxhdC1zaGFkaW5nOic7XHJcblx0XHRcdGlmICggdXNlTW9ycGhUYXJnZXRzICkgY2FjaGVLZXkgKz0gJ21vcnBoLXRhcmdldHM6JztcclxuXHRcdFx0aWYgKCB1c2VNb3JwaE5vcm1hbHMgKSBjYWNoZUtleSArPSAnbW9ycGgtbm9ybWFsczonO1xyXG5cclxuXHRcdFx0dmFyIGNhY2hlZE1hdGVyaWFsID0gdGhpcy5jYWNoZS5nZXQoIGNhY2hlS2V5ICk7XHJcblxyXG5cdFx0XHRpZiAoICEgY2FjaGVkTWF0ZXJpYWwgKSB7XHJcblxyXG5cdFx0XHRcdGNhY2hlZE1hdGVyaWFsID0gbWF0ZXJpYWwuY2xvbmUoKTtcclxuXHJcblx0XHRcdFx0aWYgKCB1c2VTa2lubmluZyApIGNhY2hlZE1hdGVyaWFsLnNraW5uaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRpZiAoIHVzZVZlcnRleENvbG9ycyApIGNhY2hlZE1hdGVyaWFsLnZlcnRleENvbG9ycyA9IHRydWU7XHJcblx0XHRcdFx0aWYgKCB1c2VGbGF0U2hhZGluZyApIGNhY2hlZE1hdGVyaWFsLmZsYXRTaGFkaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRpZiAoIHVzZU1vcnBoVGFyZ2V0cyApIGNhY2hlZE1hdGVyaWFsLm1vcnBoVGFyZ2V0cyA9IHRydWU7XHJcblx0XHRcdFx0aWYgKCB1c2VNb3JwaE5vcm1hbHMgKSBjYWNoZWRNYXRlcmlhbC5tb3JwaE5vcm1hbHMgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRpZiAoIHVzZVZlcnRleFRhbmdlbnRzICkge1xyXG5cclxuXHRcdFx0XHRcdGNhY2hlZE1hdGVyaWFsLnZlcnRleFRhbmdlbnRzID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8xMTQzOCNpc3N1ZWNvbW1lbnQtNTA3MDAzOTk1XHJcblx0XHRcdFx0XHRpZiAoIGNhY2hlZE1hdGVyaWFsLm5vcm1hbFNjYWxlICkgY2FjaGVkTWF0ZXJpYWwubm9ybWFsU2NhbGUueSAqPSAtIDE7XHJcblx0XHRcdFx0XHRpZiAoIGNhY2hlZE1hdGVyaWFsLmNsZWFyY29hdE5vcm1hbFNjYWxlICkgY2FjaGVkTWF0ZXJpYWwuY2xlYXJjb2F0Tm9ybWFsU2NhbGUueSAqPSAtIDE7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5jYWNoZS5hZGQoIGNhY2hlS2V5LCBjYWNoZWRNYXRlcmlhbCApO1xyXG5cclxuXHRcdFx0XHR0aGlzLmFzc29jaWF0aW9ucy5zZXQoIGNhY2hlZE1hdGVyaWFsLCB0aGlzLmFzc29jaWF0aW9ucy5nZXQoIG1hdGVyaWFsICkgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1hdGVyaWFsID0gY2FjaGVkTWF0ZXJpYWw7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHdvcmthcm91bmRzIGZvciBtZXNoIGFuZCBnZW9tZXRyeVxyXG5cclxuXHRcdGlmICggbWF0ZXJpYWwuYW9NYXAgJiYgZ2VvbWV0cnkuYXR0cmlidXRlcy51djIgPT09IHVuZGVmaW5lZCAmJiBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2ICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoICd1djInLCBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2ICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdG1lc2gubWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuXHJcblx0fTtcclxuXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUuZ2V0TWF0ZXJpYWxUeXBlID0gZnVuY3Rpb24gKCAvKiBtYXRlcmlhbEluZGV4ICovICkge1xyXG5cclxuXHRcdHJldHVybiBNZXNoU3RhbmRhcmRNYXRlcmlhbDtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNtYXRlcmlhbHNcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gbWF0ZXJpYWxJbmRleFxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8TWF0ZXJpYWw+fVxyXG5cdCAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmxvYWRNYXRlcmlhbCA9IGZ1bmN0aW9uICggbWF0ZXJpYWxJbmRleCApIHtcclxuXHJcblx0XHR2YXIgcGFyc2VyID0gdGhpcztcclxuXHRcdHZhciBqc29uID0gdGhpcy5qc29uO1xyXG5cdFx0dmFyIGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XHJcblx0XHR2YXIgbWF0ZXJpYWxEZWYgPSBqc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xyXG5cclxuXHRcdHZhciBtYXRlcmlhbFR5cGU7XHJcblx0XHR2YXIgbWF0ZXJpYWxQYXJhbXMgPSB7fTtcclxuXHRcdHZhciBtYXRlcmlhbEV4dGVuc2lvbnMgPSBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8IHt9O1xyXG5cclxuXHRcdHZhciBwZW5kaW5nID0gW107XHJcblxyXG5cdFx0aWYgKCBtYXRlcmlhbEV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19QQlJfU1BFQ1VMQVJfR0xPU1NJTkVTUyBdICkge1xyXG5cclxuXHRcdFx0dmFyIHNnRXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTIF07XHJcblx0XHRcdG1hdGVyaWFsVHlwZSA9IHNnRXh0ZW5zaW9uLmdldE1hdGVyaWFsVHlwZSgpO1xyXG5cdFx0XHRwZW5kaW5nLnB1c2goIHNnRXh0ZW5zaW9uLmV4dGVuZFBhcmFtcyggbWF0ZXJpYWxQYXJhbXMsIG1hdGVyaWFsRGVmLCBwYXJzZXIgKSApO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoIG1hdGVyaWFsRXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1VOTElUIF0gKSB7XHJcblxyXG5cdFx0XHR2YXIga211RXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1VOTElUIF07XHJcblx0XHRcdG1hdGVyaWFsVHlwZSA9IGttdUV4dGVuc2lvbi5nZXRNYXRlcmlhbFR5cGUoKTtcclxuXHRcdFx0cGVuZGluZy5wdXNoKCBrbXVFeHRlbnNpb24uZXh0ZW5kUGFyYW1zKCBtYXRlcmlhbFBhcmFtcywgbWF0ZXJpYWxEZWYsIHBhcnNlciApICk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdC8vIFNwZWNpZmljYXRpb246XHJcblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNtZXRhbGxpYy1yb3VnaG5lc3MtbWF0ZXJpYWxcclxuXHJcblx0XHRcdHZhciBtZXRhbGxpY1JvdWdobmVzcyA9IG1hdGVyaWFsRGVmLnBick1ldGFsbGljUm91Z2huZXNzIHx8IHt9O1xyXG5cclxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IgPSBuZXcgQ29sb3IoIDEuMCwgMS4wLCAxLjAgKTtcclxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IDEuMDtcclxuXHJcblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yICkgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBhcnJheSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvcjtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IuZnJvbUFycmF5KCBhcnJheSApO1xyXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSBhcnJheVsgMyBdO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbWFwJywgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSApICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5tZXRhbG5lc3MgPSBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY0ZhY3RvciAhPT0gdW5kZWZpbmVkID8gbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNGYWN0b3IgOiAxLjA7XHJcblx0XHRcdG1hdGVyaWFsUGFyYW1zLnJvdWdobmVzcyA9IG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzc0ZhY3RvciAhPT0gdW5kZWZpbmVkID8gbWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzRmFjdG9yIDogMS4wO1xyXG5cclxuXHRcdFx0aWYgKCBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdtZXRhbG5lc3NNYXAnLCBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgKSApO1xyXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAncm91Z2huZXNzTWFwJywgbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlICkgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1hdGVyaWFsVHlwZSA9IHRoaXMuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XHJcblxyXG5cdFx0XHRcdHJldHVybiBleHQuZ2V0TWF0ZXJpYWxUeXBlICYmIGV4dC5nZXRNYXRlcmlhbFR5cGUoIG1hdGVyaWFsSW5kZXggKTtcclxuXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHRcdHBlbmRpbmcucHVzaCggUHJvbWlzZS5hbGwoIHRoaXMuX2ludm9rZUFsbCggZnVuY3Rpb24gKCBleHQgKSB7XHJcblxyXG5cdFx0XHRcdHJldHVybiBleHQuZXh0ZW5kTWF0ZXJpYWxQYXJhbXMgJiYgZXh0LmV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApO1xyXG5cclxuXHRcdFx0fSApICkgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5kb3VibGVTaWRlZCA9PT0gdHJ1ZSApIHtcclxuXHJcblx0XHRcdG1hdGVyaWFsUGFyYW1zLnNpZGUgPSBEb3VibGVTaWRlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgYWxwaGFNb2RlID0gbWF0ZXJpYWxEZWYuYWxwaGFNb2RlIHx8IEFMUEhBX01PREVTLk9QQVFVRTtcclxuXHJcblx0XHRpZiAoIGFscGhhTW9kZSA9PT0gQUxQSEFfTU9ERVMuQkxFTkQgKSB7XHJcblxyXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy50cmFuc3BhcmVudCA9IHRydWU7XHJcblxyXG5cdFx0XHQvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzE3NzA2XHJcblx0XHRcdG1hdGVyaWFsUGFyYW1zLmRlcHRoV3JpdGUgPSBmYWxzZTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMudHJhbnNwYXJlbnQgPSBmYWxzZTtcclxuXHJcblx0XHRcdGlmICggYWxwaGFNb2RlID09PSBBTFBIQV9NT0RFUy5NQVNLICkge1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5hbHBoYVRlc3QgPSBtYXRlcmlhbERlZi5hbHBoYUN1dG9mZiAhPT0gdW5kZWZpbmVkID8gbWF0ZXJpYWxEZWYuYWxwaGFDdXRvZmYgOiAwLjU7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggbWF0ZXJpYWxEZWYubm9ybWFsVGV4dHVyZSAhPT0gdW5kZWZpbmVkICYmIG1hdGVyaWFsVHlwZSAhPT0gTWVzaEJhc2ljTWF0ZXJpYWwgKSB7XHJcblxyXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ25vcm1hbE1hcCcsIG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUgKSApO1xyXG5cclxuXHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTE0MzgjaXNzdWVjb21tZW50LTUwNzAwMzk5NVxyXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZSA9IG5ldyBWZWN0b3IyKCAxLCAtIDEgKTtcclxuXHJcblx0XHRcdGlmICggbWF0ZXJpYWxEZWYubm9ybWFsVGV4dHVyZS5zY2FsZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZS5zZXQoIG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUuc2NhbGUsIC0gbWF0ZXJpYWxEZWYubm9ybWFsVGV4dHVyZS5zY2FsZSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIG1hdGVyaWFsRGVmLm9jY2x1c2lvblRleHR1cmUgIT09IHVuZGVmaW5lZCAmJiBtYXRlcmlhbFR5cGUgIT09IE1lc2hCYXNpY01hdGVyaWFsICkge1xyXG5cclxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdhb01hcCcsIG1hdGVyaWFsRGVmLm9jY2x1c2lvblRleHR1cmUgKSApO1xyXG5cclxuXHRcdFx0aWYgKCBtYXRlcmlhbERlZi5vY2NsdXNpb25UZXh0dXJlLnN0cmVuZ3RoICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmFvTWFwSW50ZW5zaXR5ID0gbWF0ZXJpYWxEZWYub2NjbHVzaW9uVGV4dHVyZS5zdHJlbmd0aDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5lbWlzc2l2ZUZhY3RvciAhPT0gdW5kZWZpbmVkICYmIG1hdGVyaWFsVHlwZSAhPT0gTWVzaEJhc2ljTWF0ZXJpYWwgKSB7XHJcblxyXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5lbWlzc2l2ZSA9IG5ldyBDb2xvcigpLmZyb21BcnJheSggbWF0ZXJpYWxEZWYuZW1pc3NpdmVGYWN0b3IgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5lbWlzc2l2ZVRleHR1cmUgIT09IHVuZGVmaW5lZCAmJiBtYXRlcmlhbFR5cGUgIT09IE1lc2hCYXNpY01hdGVyaWFsICkge1xyXG5cclxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdlbWlzc2l2ZU1hcCcsIG1hdGVyaWFsRGVmLmVtaXNzaXZlVGV4dHVyZSApICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApLnRoZW4oIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdHZhciBtYXRlcmlhbDtcclxuXHJcblx0XHRcdGlmICggbWF0ZXJpYWxUeXBlID09PSBHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbCApIHtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWwgPSBleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1MgXS5jcmVhdGVNYXRlcmlhbCggbWF0ZXJpYWxQYXJhbXMgKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsID0gbmV3IG1hdGVyaWFsVHlwZSggbWF0ZXJpYWxQYXJhbXMgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggbWF0ZXJpYWxEZWYubmFtZSApIG1hdGVyaWFsLm5hbWUgPSBtYXRlcmlhbERlZi5uYW1lO1xyXG5cclxuXHRcdFx0Ly8gYmFzZUNvbG9yVGV4dHVyZSwgZW1pc3NpdmVUZXh0dXJlLCBhbmQgc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSB1c2Ugc1JHQiBlbmNvZGluZy5cclxuXHRcdFx0aWYgKCBtYXRlcmlhbC5tYXAgKSBtYXRlcmlhbC5tYXAuZW5jb2RpbmcgPSBzUkdCRW5jb2Rpbmc7XHJcblx0XHRcdGlmICggbWF0ZXJpYWwuZW1pc3NpdmVNYXAgKSBtYXRlcmlhbC5lbWlzc2l2ZU1hcC5lbmNvZGluZyA9IHNSR0JFbmNvZGluZztcclxuXHJcblx0XHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIG1hdGVyaWFsLCBtYXRlcmlhbERlZiApO1xyXG5cclxuXHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucy5zZXQoIG1hdGVyaWFsLCB7IHR5cGU6ICdtYXRlcmlhbHMnLCBpbmRleDogbWF0ZXJpYWxJbmRleCB9ICk7XHJcblxyXG5cdFx0XHRpZiAoIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgKSBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIG1hdGVyaWFsLCBtYXRlcmlhbERlZiApO1xyXG5cclxuXHRcdFx0cmV0dXJuIG1hdGVyaWFsO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqIFdoZW4gT2JqZWN0M0QgaW5zdGFuY2VzIGFyZSB0YXJnZXRlZCBieSBhbmltYXRpb24sIHRoZXkgbmVlZCB1bmlxdWUgbmFtZXMuICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUuY3JlYXRlVW5pcXVlTmFtZSA9IGZ1bmN0aW9uICggb3JpZ2luYWxOYW1lICkge1xyXG5cclxuXHRcdHZhciBzYW5pdGl6ZWROYW1lID0gUHJvcGVydHlCaW5kaW5nLnNhbml0aXplTm9kZU5hbWUoIG9yaWdpbmFsTmFtZSB8fCAnJyApO1xyXG5cclxuXHRcdHZhciBuYW1lID0gc2FuaXRpemVkTmFtZTtcclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDE7IHRoaXMubm9kZU5hbWVzVXNlZFsgbmFtZSBdOyArKyBpICkge1xyXG5cclxuXHRcdFx0bmFtZSA9IHNhbml0aXplZE5hbWUgKyAnXycgKyBpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm5vZGVOYW1lc1VzZWRbIG5hbWUgXSA9IHRydWU7XHJcblxyXG5cdFx0cmV0dXJuIG5hbWU7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7QnVmZmVyR2VvbWV0cnl9IGdlb21ldHJ5XHJcblx0ICogQHBhcmFtIHtHTFRGLlByaW1pdGl2ZX0gcHJpbWl0aXZlRGVmXHJcblx0ICogQHBhcmFtIHtHTFRGUGFyc2VyfSBwYXJzZXJcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBjb21wdXRlQm91bmRzKCBnZW9tZXRyeSwgcHJpbWl0aXZlRGVmLCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBwcmltaXRpdmVEZWYuYXR0cmlidXRlcztcclxuXHJcblx0XHR2YXIgYm94ID0gbmV3IEJveDMoKTtcclxuXHJcblx0XHRpZiAoIGF0dHJpYnV0ZXMuUE9TSVRJT04gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdHZhciBhY2Nlc3NvciA9IHBhcnNlci5qc29uLmFjY2Vzc29yc1sgYXR0cmlidXRlcy5QT1NJVElPTiBdO1xyXG5cclxuXHRcdFx0dmFyIG1pbiA9IGFjY2Vzc29yLm1pbjtcclxuXHRcdFx0dmFyIG1heCA9IGFjY2Vzc29yLm1heDtcclxuXHJcblx0XHRcdC8vIGdsVEYgcmVxdWlyZXMgJ21pbicgYW5kICdtYXgnLCBidXQgVlJNICh3aGljaCBleHRlbmRzIGdsVEYpIGN1cnJlbnRseSBpZ25vcmVzIHRoYXQgcmVxdWlyZW1lbnQuXHJcblxyXG5cdFx0XHRpZiAoIG1pbiAhPT0gdW5kZWZpbmVkICYmIG1heCAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRib3guc2V0KFxyXG5cdFx0XHRcdFx0bmV3IFZlY3RvcjMoIG1pblsgMCBdLCBtaW5bIDEgXSwgbWluWyAyIF0gKSxcclxuXHRcdFx0XHRcdG5ldyBWZWN0b3IzKCBtYXhbIDAgXSwgbWF4WyAxIF0sIG1heFsgMiBdICkgKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IE1pc3NpbmcgbWluL21heCBwcm9wZXJ0aWVzIGZvciBhY2Nlc3NvciBQT1NJVElPTi4nICk7XHJcblxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgdGFyZ2V0cyA9IHByaW1pdGl2ZURlZi50YXJnZXRzO1xyXG5cclxuXHRcdGlmICggdGFyZ2V0cyAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0dmFyIG1heERpc3BsYWNlbWVudCA9IG5ldyBWZWN0b3IzKCk7XHJcblx0XHRcdHZhciB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpO1xyXG5cclxuXHRcdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IHRhcmdldHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdHZhciB0YXJnZXQgPSB0YXJnZXRzWyBpIF07XHJcblxyXG5cdFx0XHRcdGlmICggdGFyZ2V0LlBPU0lUSU9OICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGFjY2Vzc29yID0gcGFyc2VyLmpzb24uYWNjZXNzb3JzWyB0YXJnZXQuUE9TSVRJT04gXTtcclxuXHRcdFx0XHRcdHZhciBtaW4gPSBhY2Nlc3Nvci5taW47XHJcblx0XHRcdFx0XHR2YXIgbWF4ID0gYWNjZXNzb3IubWF4O1xyXG5cclxuXHRcdFx0XHRcdC8vIGdsVEYgcmVxdWlyZXMgJ21pbicgYW5kICdtYXgnLCBidXQgVlJNICh3aGljaCBleHRlbmRzIGdsVEYpIGN1cnJlbnRseSBpZ25vcmVzIHRoYXQgcmVxdWlyZW1lbnQuXHJcblxyXG5cdFx0XHRcdFx0aWYgKCBtaW4gIT09IHVuZGVmaW5lZCAmJiBtYXggIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0XHRcdC8vIHdlIG5lZWQgdG8gZ2V0IG1heCBvZiBhYnNvbHV0ZSBjb21wb25lbnRzIGJlY2F1c2UgdGFyZ2V0IHdlaWdodCBpcyBbLTEsMV1cclxuXHRcdFx0XHRcdFx0dmVjdG9yLnNldFgoIE1hdGgubWF4KCBNYXRoLmFicyggbWluWyAwIF0gKSwgTWF0aC5hYnMoIG1heFsgMCBdICkgKSApO1xyXG5cdFx0XHRcdFx0XHR2ZWN0b3Iuc2V0WSggTWF0aC5tYXgoIE1hdGguYWJzKCBtaW5bIDEgXSApLCBNYXRoLmFicyggbWF4WyAxIF0gKSApICk7XHJcblx0XHRcdFx0XHRcdHZlY3Rvci5zZXRaKCBNYXRoLm1heCggTWF0aC5hYnMoIG1pblsgMiBdICksIE1hdGguYWJzKCBtYXhbIDIgXSApICkgKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIE5vdGU6IHRoaXMgYXNzdW1lcyB0aGF0IHRoZSBzdW0gb2YgYWxsIHdlaWdodHMgaXMgYXQgbW9zdCAxLiBUaGlzIGlzbid0IHF1aXRlIGNvcnJlY3QgLSBpdCdzIG1vcmUgY29uc2VydmF0aXZlXHJcblx0XHRcdFx0XHRcdC8vIHRvIGFzc3VtZSB0aGF0IGVhY2ggdGFyZ2V0IGNhbiBoYXZlIGEgbWF4IHdlaWdodCBvZiAxLiBIb3dldmVyLCBmb3Igc29tZSB1c2UgY2FzZXMgLSBub3RhYmx5LCB3aGVuIG1vcnBoIHRhcmdldHNcclxuXHRcdFx0XHRcdFx0Ly8gYXJlIHVzZWQgdG8gaW1wbGVtZW50IGtleS1mcmFtZSBhbmltYXRpb25zIGFuZCBhcyBzdWNoIG9ubHkgdHdvIGFyZSBhY3RpdmUgYXQgYSB0aW1lIC0gdGhpcyByZXN1bHRzIGluIHZlcnkgbGFyZ2VcclxuXHRcdFx0XHRcdFx0Ly8gYm94ZXMuIFNvIGZvciBub3cgd2UgbWFrZSBhIGJveCB0aGF0J3Mgc29tZXRpbWVzIGEgdG91Y2ggdG9vIHNtYWxsIGJ1dCBpcyBob3BlZnVsbHkgbW9zdGx5IG9mIHJlYXNvbmFibGUgc2l6ZS5cclxuXHRcdFx0XHRcdFx0bWF4RGlzcGxhY2VtZW50Lm1heCggdmVjdG9yICk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IE1pc3NpbmcgbWluL21heCBwcm9wZXJ0aWVzIGZvciBhY2Nlc3NvciBQT1NJVElPTi4nICk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBBcyBwZXIgY29tbWVudCBhYm92ZSB0aGlzIGJveCBpc24ndCBjb25zZXJ2YXRpdmUsIGJ1dCBoYXMgYSByZWFzb25hYmxlIHNpemUgZm9yIGEgdmVyeSBsYXJnZSBudW1iZXIgb2YgbW9ycGggdGFyZ2V0cy5cclxuXHRcdFx0Ym94LmV4cGFuZEJ5VmVjdG9yKCBtYXhEaXNwbGFjZW1lbnQgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Z2VvbWV0cnkuYm91bmRpbmdCb3ggPSBib3g7XHJcblxyXG5cdFx0dmFyIHNwaGVyZSA9IG5ldyBTcGhlcmUoKTtcclxuXHJcblx0XHRib3guZ2V0Q2VudGVyKCBzcGhlcmUuY2VudGVyICk7XHJcblx0XHRzcGhlcmUucmFkaXVzID0gYm94Lm1pbi5kaXN0YW5jZVRvKCBib3gubWF4ICkgLyAyO1xyXG5cclxuXHRcdGdlb21ldHJ5LmJvdW5kaW5nU3BoZXJlID0gc3BoZXJlO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7QnVmZmVyR2VvbWV0cnl9IGdlb21ldHJ5XHJcblx0ICogQHBhcmFtIHtHTFRGLlByaW1pdGl2ZX0gcHJpbWl0aXZlRGVmXHJcblx0ICogQHBhcmFtIHtHTFRGUGFyc2VyfSBwYXJzZXJcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEJ1ZmZlckdlb21ldHJ5Pn1cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBhZGRQcmltaXRpdmVBdHRyaWJ1dGVzKCBnZW9tZXRyeSwgcHJpbWl0aXZlRGVmLCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBwcmltaXRpdmVEZWYuYXR0cmlidXRlcztcclxuXHJcblx0XHR2YXIgcGVuZGluZyA9IFtdO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGFzc2lnbkF0dHJpYnV0ZUFjY2Vzc29yKCBhY2Nlc3NvckluZGV4LCBhdHRyaWJ1dGVOYW1lICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCBhY2Nlc3NvckluZGV4IClcclxuXHRcdFx0XHQudGhlbiggZnVuY3Rpb24gKCBhY2Nlc3NvciApIHtcclxuXHJcblx0XHRcdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoIGF0dHJpYnV0ZU5hbWUsIGFjY2Vzc29yICk7XHJcblxyXG5cdFx0XHRcdH0gKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggdmFyIGdsdGZBdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMgKSB7XHJcblxyXG5cdFx0XHR2YXIgdGhyZWVBdHRyaWJ1dGVOYW1lID0gQVRUUklCVVRFU1sgZ2x0ZkF0dHJpYnV0ZU5hbWUgXSB8fCBnbHRmQXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdFx0Ly8gU2tpcCBhdHRyaWJ1dGVzIGFscmVhZHkgcHJvdmlkZWQgYnkgZS5nLiBEcmFjbyBleHRlbnNpb24uXHJcblx0XHRcdGlmICggdGhyZWVBdHRyaWJ1dGVOYW1lIGluIGdlb21ldHJ5LmF0dHJpYnV0ZXMgKSBjb250aW51ZTtcclxuXHJcblx0XHRcdHBlbmRpbmcucHVzaCggYXNzaWduQXR0cmlidXRlQWNjZXNzb3IoIGF0dHJpYnV0ZXNbIGdsdGZBdHRyaWJ1dGVOYW1lIF0sIHRocmVlQXR0cmlidXRlTmFtZSApICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggcHJpbWl0aXZlRGVmLmluZGljZXMgIT09IHVuZGVmaW5lZCAmJiAhIGdlb21ldHJ5LmluZGV4ICkge1xyXG5cclxuXHRcdFx0dmFyIGFjY2Vzc29yID0gcGFyc2VyLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIHByaW1pdGl2ZURlZi5pbmRpY2VzICkudGhlbiggZnVuY3Rpb24gKCBhY2Nlc3NvciApIHtcclxuXHJcblx0XHRcdFx0Z2VvbWV0cnkuc2V0SW5kZXgoIGFjY2Vzc29yICk7XHJcblxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRwZW5kaW5nLnB1c2goIGFjY2Vzc29yICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIGdlb21ldHJ5LCBwcmltaXRpdmVEZWYgKTtcclxuXHJcblx0XHRjb21wdXRlQm91bmRzKCBnZW9tZXRyeSwgcHJpbWl0aXZlRGVmLCBwYXJzZXIgKTtcclxuXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKS50aGVuKCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gcHJpbWl0aXZlRGVmLnRhcmdldHMgIT09IHVuZGVmaW5lZFxyXG5cdFx0XHRcdD8gYWRkTW9ycGhUYXJnZXRzKCBnZW9tZXRyeSwgcHJpbWl0aXZlRGVmLnRhcmdldHMsIHBhcnNlciApXHJcblx0XHRcdFx0OiBnZW9tZXRyeTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gZHJhd01vZGVcclxuXHQgKiBAcmV0dXJuIHtCdWZmZXJHZW9tZXRyeX1cclxuXHQgKi9cclxuXHRmdW5jdGlvbiB0b1RyaWFuZ2xlc0RyYXdNb2RlKCBnZW9tZXRyeSwgZHJhd01vZGUgKSB7XHJcblxyXG5cdFx0dmFyIGluZGV4ID0gZ2VvbWV0cnkuZ2V0SW5kZXgoKTtcclxuXHJcblx0XHQvLyBnZW5lcmF0ZSBpbmRleCBpZiBub3QgcHJlc2VudFxyXG5cclxuXHRcdGlmICggaW5kZXggPT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHR2YXIgaW5kaWNlcyA9IFtdO1xyXG5cclxuXHRcdFx0dmFyIHBvc2l0aW9uID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCAncG9zaXRpb24nICk7XHJcblxyXG5cdFx0XHRpZiAoIHBvc2l0aW9uICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHBvc2l0aW9uLmNvdW50OyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRcdGluZGljZXMucHVzaCggaSApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGdlb21ldHJ5LnNldEluZGV4KCBpbmRpY2VzICk7XHJcblx0XHRcdFx0aW5kZXggPSBnZW9tZXRyeS5nZXRJbmRleCgpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkdMVEZMb2FkZXIudG9UcmlhbmdsZXNEcmF3TW9kZSgpOiBVbmRlZmluZWQgcG9zaXRpb24gYXR0cmlidXRlLiBQcm9jZXNzaW5nIG5vdCBwb3NzaWJsZS4nICk7XHJcblx0XHRcdFx0cmV0dXJuIGdlb21ldHJ5O1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvL1xyXG5cclxuXHRcdHZhciBudW1iZXJPZlRyaWFuZ2xlcyA9IGluZGV4LmNvdW50IC0gMjtcclxuXHRcdHZhciBuZXdJbmRpY2VzID0gW107XHJcblxyXG5cdFx0aWYgKCBkcmF3TW9kZSA9PT0gVHJpYW5nbGVGYW5EcmF3TW9kZSApIHtcclxuXHJcblx0XHRcdC8vIGdsLlRSSUFOR0xFX0ZBTlxyXG5cclxuXHRcdFx0Zm9yICggdmFyIGkgPSAxOyBpIDw9IG51bWJlck9mVHJpYW5nbGVzOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIDAgKSApO1xyXG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSApICk7XHJcblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMSApICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdC8vIGdsLlRSSUFOR0xFX1NUUklQXHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBudW1iZXJPZlRyaWFuZ2xlczsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0aWYgKCBpICUgMiA9PT0gMCApIHtcclxuXHJcblx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKSApO1xyXG5cdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMSApICk7XHJcblx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAyICkgKTtcclxuXHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMiApICk7XHJcblx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAxICkgKTtcclxuXHRcdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSApICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCAoIG5ld0luZGljZXMubGVuZ3RoIC8gMyApICE9PSBudW1iZXJPZlRyaWFuZ2xlcyApIHtcclxuXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyLnRvVHJpYW5nbGVzRHJhd01vZGUoKTogVW5hYmxlIHRvIGdlbmVyYXRlIGNvcnJlY3QgYW1vdW50IG9mIHRyaWFuZ2xlcy4nICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGJ1aWxkIGZpbmFsIGdlb21ldHJ5XHJcblxyXG5cdFx0dmFyIG5ld0dlb21ldHJ5ID0gZ2VvbWV0cnkuY2xvbmUoKTtcclxuXHRcdG5ld0dlb21ldHJ5LnNldEluZGV4KCBuZXdJbmRpY2VzICk7XHJcblxyXG5cdFx0cmV0dXJuIG5ld0dlb21ldHJ5O1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjZ2VvbWV0cnlcclxuXHQgKlxyXG5cdCAqIENyZWF0ZXMgQnVmZmVyR2VvbWV0cmllcyBmcm9tIHByaW1pdGl2ZXMuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge0FycmF5PEdMVEYuUHJpbWl0aXZlPn0gcHJpbWl0aXZlc1xyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk8QnVmZmVyR2VvbWV0cnk+Pn1cclxuXHQgKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkR2VvbWV0cmllcyA9IGZ1bmN0aW9uICggcHJpbWl0aXZlcyApIHtcclxuXHJcblx0XHR2YXIgcGFyc2VyID0gdGhpcztcclxuXHRcdHZhciBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xyXG5cdFx0dmFyIGNhY2hlID0gdGhpcy5wcmltaXRpdmVDYWNoZTtcclxuXHJcblx0XHRmdW5jdGlvbiBjcmVhdGVEcmFjb1ByaW1pdGl2ZSggcHJpbWl0aXZlICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT04gXVxyXG5cdFx0XHRcdC5kZWNvZGVQcmltaXRpdmUoIHByaW1pdGl2ZSwgcGFyc2VyIClcclxuXHRcdFx0XHQudGhlbiggZnVuY3Rpb24gKCBnZW9tZXRyeSApIHtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gYWRkUHJpbWl0aXZlQXR0cmlidXRlcyggZ2VvbWV0cnksIHByaW1pdGl2ZSwgcGFyc2VyICk7XHJcblxyXG5cdFx0XHRcdH0gKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHBlbmRpbmcgPSBbXTtcclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gcHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdHZhciBwcmltaXRpdmUgPSBwcmltaXRpdmVzWyBpIF07XHJcblx0XHRcdHZhciBjYWNoZUtleSA9IGNyZWF0ZVByaW1pdGl2ZUtleSggcHJpbWl0aXZlICk7XHJcblxyXG5cdFx0XHQvLyBTZWUgaWYgd2UndmUgYWxyZWFkeSBjcmVhdGVkIHRoaXMgZ2VvbWV0cnlcclxuXHRcdFx0dmFyIGNhY2hlZCA9IGNhY2hlWyBjYWNoZUtleSBdO1xyXG5cclxuXHRcdFx0aWYgKCBjYWNoZWQgKSB7XHJcblxyXG5cdFx0XHRcdC8vIFVzZSB0aGUgY2FjaGVkIGdlb21ldHJ5IGlmIGl0IGV4aXN0c1xyXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggY2FjaGVkLnByb21pc2UgKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdHZhciBnZW9tZXRyeVByb21pc2U7XHJcblxyXG5cdFx0XHRcdGlmICggcHJpbWl0aXZlLmV4dGVuc2lvbnMgJiYgcHJpbWl0aXZlLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT04gXSApIHtcclxuXHJcblx0XHRcdFx0XHQvLyBVc2UgRFJBQ08gZ2VvbWV0cnkgaWYgYXZhaWxhYmxlXHJcblx0XHRcdFx0XHRnZW9tZXRyeVByb21pc2UgPSBjcmVhdGVEcmFjb1ByaW1pdGl2ZSggcHJpbWl0aXZlICk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBnZW9tZXRyeVxyXG5cdFx0XHRcdFx0Z2VvbWV0cnlQcm9taXNlID0gYWRkUHJpbWl0aXZlQXR0cmlidXRlcyggbmV3IEJ1ZmZlckdlb21ldHJ5KCksIHByaW1pdGl2ZSwgcGFyc2VyICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gQ2FjaGUgdGhpcyBnZW9tZXRyeVxyXG5cdFx0XHRcdGNhY2hlWyBjYWNoZUtleSBdID0geyBwcmltaXRpdmU6IHByaW1pdGl2ZSwgcHJvbWlzZTogZ2VvbWV0cnlQcm9taXNlIH07XHJcblxyXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggZ2VvbWV0cnlQcm9taXNlICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI21lc2hlc1xyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtZXNoSW5kZXhcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEdyb3VwfE1lc2h8U2tpbm5lZE1lc2g+fVxyXG5cdCAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmxvYWRNZXNoID0gZnVuY3Rpb24gKCBtZXNoSW5kZXggKSB7XHJcblxyXG5cdFx0dmFyIHBhcnNlciA9IHRoaXM7XHJcblx0XHR2YXIganNvbiA9IHRoaXMuanNvbjtcclxuXHRcdHZhciBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xyXG5cclxuXHRcdHZhciBtZXNoRGVmID0ganNvbi5tZXNoZXNbIG1lc2hJbmRleCBdO1xyXG5cdFx0dmFyIHByaW1pdGl2ZXMgPSBtZXNoRGVmLnByaW1pdGl2ZXM7XHJcblxyXG5cdFx0dmFyIHBlbmRpbmcgPSBbXTtcclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gcHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdHZhciBtYXRlcmlhbCA9IHByaW1pdGl2ZXNbIGkgXS5tYXRlcmlhbCA9PT0gdW5kZWZpbmVkXHJcblx0XHRcdFx0PyBjcmVhdGVEZWZhdWx0TWF0ZXJpYWwoIHRoaXMuY2FjaGUgKVxyXG5cdFx0XHRcdDogdGhpcy5nZXREZXBlbmRlbmN5KCAnbWF0ZXJpYWwnLCBwcmltaXRpdmVzWyBpIF0ubWF0ZXJpYWwgKTtcclxuXHJcblx0XHRcdHBlbmRpbmcucHVzaCggbWF0ZXJpYWwgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIubG9hZEdlb21ldHJpZXMoIHByaW1pdGl2ZXMgKSApO1xyXG5cclxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApLnRoZW4oIGZ1bmN0aW9uICggcmVzdWx0cyApIHtcclxuXHJcblx0XHRcdHZhciBtYXRlcmlhbHMgPSByZXN1bHRzLnNsaWNlKCAwLCByZXN1bHRzLmxlbmd0aCAtIDEgKTtcclxuXHRcdFx0dmFyIGdlb21ldHJpZXMgPSByZXN1bHRzWyByZXN1bHRzLmxlbmd0aCAtIDEgXTtcclxuXHJcblx0XHRcdHZhciBtZXNoZXMgPSBbXTtcclxuXHJcblx0XHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSBnZW9tZXRyaWVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHR2YXIgZ2VvbWV0cnkgPSBnZW9tZXRyaWVzWyBpIF07XHJcblx0XHRcdFx0dmFyIHByaW1pdGl2ZSA9IHByaW1pdGl2ZXNbIGkgXTtcclxuXHJcblx0XHRcdFx0Ly8gMS4gY3JlYXRlIE1lc2hcclxuXHJcblx0XHRcdFx0dmFyIG1lc2g7XHJcblxyXG5cdFx0XHRcdHZhciBtYXRlcmlhbCA9IG1hdGVyaWFsc1sgaSBdO1xyXG5cclxuXHRcdFx0XHRpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVTIHx8XHJcblx0XHRcdFx0XHRwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFX1NUUklQIHx8XHJcblx0XHRcdFx0XHRwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFX0ZBTiB8fFxyXG5cdFx0XHRcdFx0cHJpbWl0aXZlLm1vZGUgPT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0XHQvLyAuaXNTa2lubmVkTWVzaCBpc24ndCBpbiBnbFRGIHNwZWMuIFNlZSAuX21hcmtEZWZzKClcclxuXHRcdFx0XHRcdG1lc2ggPSBtZXNoRGVmLmlzU2tpbm5lZE1lc2ggPT09IHRydWVcclxuXHRcdFx0XHRcdFx0PyBuZXcgU2tpbm5lZE1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApXHJcblx0XHRcdFx0XHRcdDogbmV3IE1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuXHRcdFx0XHRcdGlmICggbWVzaC5pc1NraW5uZWRNZXNoID09PSB0cnVlICYmICEgbWVzaC5nZW9tZXRyeS5hdHRyaWJ1dGVzLnNraW5XZWlnaHQubm9ybWFsaXplZCApIHtcclxuXHJcblx0XHRcdFx0XHRcdC8vIHdlIG5vcm1hbGl6ZSBmbG9hdGluZyBwb2ludCBza2luIHdlaWdodCBhcnJheSB0byBmaXggbWFsZm9ybWVkIGFzc2V0cyAoc2VlICMxNTMxOSlcclxuXHRcdFx0XHRcdFx0Ly8gaXQncyBpbXBvcnRhbnQgdG8gc2tpcCB0aGlzIGZvciBub24tZmxvYXQzMiBkYXRhIHNpbmNlIG5vcm1hbGl6ZVNraW5XZWlnaHRzIGFzc3VtZXMgbm9uLW5vcm1hbGl6ZWQgaW5wdXRzXHJcblx0XHRcdFx0XHRcdG1lc2gubm9ybWFsaXplU2tpbldlaWdodHMoKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFX1NUUklQICkge1xyXG5cclxuXHRcdFx0XHRcdFx0bWVzaC5nZW9tZXRyeSA9IHRvVHJpYW5nbGVzRHJhd01vZGUoIG1lc2guZ2VvbWV0cnksIFRyaWFuZ2xlU3RyaXBEcmF3TW9kZSApO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVfRkFOICkge1xyXG5cclxuXHRcdFx0XHRcdFx0bWVzaC5nZW9tZXRyeSA9IHRvVHJpYW5nbGVzRHJhd01vZGUoIG1lc2guZ2VvbWV0cnksIFRyaWFuZ2xlRmFuRHJhd01vZGUgKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuTElORVMgKSB7XHJcblxyXG5cdFx0XHRcdFx0bWVzaCA9IG5ldyBMaW5lU2VnbWVudHMoIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLkxJTkVfU1RSSVAgKSB7XHJcblxyXG5cdFx0XHRcdFx0bWVzaCA9IG5ldyBMaW5lKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5MSU5FX0xPT1AgKSB7XHJcblxyXG5cdFx0XHRcdFx0bWVzaCA9IG5ldyBMaW5lTG9vcCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuUE9JTlRTICkge1xyXG5cclxuXHRcdFx0XHRcdG1lc2ggPSBuZXcgUG9pbnRzKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBQcmltaXRpdmUgbW9kZSB1bnN1cHBvcnRlZDogJyArIHByaW1pdGl2ZS5tb2RlICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCBPYmplY3Qua2V5cyggbWVzaC5nZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMgKS5sZW5ndGggPiAwICkge1xyXG5cclxuXHRcdFx0XHRcdHVwZGF0ZU1vcnBoVGFyZ2V0cyggbWVzaCwgbWVzaERlZiApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG1lc2gubmFtZSA9IHBhcnNlci5jcmVhdGVVbmlxdWVOYW1lKCBtZXNoRGVmLm5hbWUgfHwgKCAnbWVzaF8nICsgbWVzaEluZGV4ICkgKTtcclxuXHJcblx0XHRcdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggbWVzaCwgbWVzaERlZiApO1xyXG5cclxuXHRcdFx0XHRpZiAoIHByaW1pdGl2ZS5leHRlbnNpb25zICkgYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBleHRlbnNpb25zLCBtZXNoLCBwcmltaXRpdmUgKTtcclxuXHJcblx0XHRcdFx0cGFyc2VyLmFzc2lnbkZpbmFsTWF0ZXJpYWwoIG1lc2ggKTtcclxuXHJcblx0XHRcdFx0bWVzaGVzLnB1c2goIG1lc2ggKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggbWVzaGVzLmxlbmd0aCA9PT0gMSApIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuIG1lc2hlc1sgMCBdO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIGdyb3VwID0gbmV3IEdyb3VwKCk7XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gbWVzaGVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRncm91cC5hZGQoIG1lc2hlc1sgaSBdICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gZ3JvdXA7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjY2FtZXJhc1xyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjYW1lcmFJbmRleFxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8VEhSRUUuQ2FtZXJhPn1cclxuXHQgKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkQ2FtZXJhID0gZnVuY3Rpb24gKCBjYW1lcmFJbmRleCApIHtcclxuXHJcblx0XHR2YXIgY2FtZXJhO1xyXG5cdFx0dmFyIGNhbWVyYURlZiA9IHRoaXMuanNvbi5jYW1lcmFzWyBjYW1lcmFJbmRleCBdO1xyXG5cdFx0dmFyIHBhcmFtcyA9IGNhbWVyYURlZlsgY2FtZXJhRGVmLnR5cGUgXTtcclxuXHJcblx0XHRpZiAoICEgcGFyYW1zICkge1xyXG5cclxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogTWlzc2luZyBjYW1lcmEgcGFyYW1ldGVycy4nICk7XHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBjYW1lcmFEZWYudHlwZSA9PT0gJ3BlcnNwZWN0aXZlJyApIHtcclxuXHJcblx0XHRcdGNhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYSggTWF0aFV0aWxzLnJhZFRvRGVnKCBwYXJhbXMueWZvdiApLCBwYXJhbXMuYXNwZWN0UmF0aW8gfHwgMSwgcGFyYW1zLnpuZWFyIHx8IDEsIHBhcmFtcy56ZmFyIHx8IDJlNiApO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoIGNhbWVyYURlZi50eXBlID09PSAnb3J0aG9ncmFwaGljJyApIHtcclxuXHJcblx0XHRcdGNhbWVyYSA9IG5ldyBPcnRob2dyYXBoaWNDYW1lcmEoIC0gcGFyYW1zLnhtYWcsIHBhcmFtcy54bWFnLCBwYXJhbXMueW1hZywgLSBwYXJhbXMueW1hZywgcGFyYW1zLnpuZWFyLCBwYXJhbXMuemZhciApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGNhbWVyYURlZi5uYW1lICkgY2FtZXJhLm5hbWUgPSB0aGlzLmNyZWF0ZVVuaXF1ZU5hbWUoIGNhbWVyYURlZi5uYW1lICk7XHJcblxyXG5cdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggY2FtZXJhLCBjYW1lcmFEZWYgKTtcclxuXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCBjYW1lcmEgKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI3NraW5zXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNraW5JbmRleFxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn1cclxuXHQgKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkU2tpbiA9IGZ1bmN0aW9uICggc2tpbkluZGV4ICkge1xyXG5cclxuXHRcdHZhciBza2luRGVmID0gdGhpcy5qc29uLnNraW5zWyBza2luSW5kZXggXTtcclxuXHJcblx0XHR2YXIgc2tpbkVudHJ5ID0geyBqb2ludHM6IHNraW5EZWYuam9pbnRzIH07XHJcblxyXG5cdFx0aWYgKCBza2luRGVmLmludmVyc2VCaW5kTWF0cmljZXMgPT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoIHNraW5FbnRyeSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCBza2luRGVmLmludmVyc2VCaW5kTWF0cmljZXMgKS50aGVuKCBmdW5jdGlvbiAoIGFjY2Vzc29yICkge1xyXG5cclxuXHRcdFx0c2tpbkVudHJ5LmludmVyc2VCaW5kTWF0cmljZXMgPSBhY2Nlc3NvcjtcclxuXHJcblx0XHRcdHJldHVybiBza2luRW50cnk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjYW5pbWF0aW9uc1xyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBhbmltYXRpb25JbmRleFxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QW5pbWF0aW9uQ2xpcD59XHJcblx0ICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUubG9hZEFuaW1hdGlvbiA9IGZ1bmN0aW9uICggYW5pbWF0aW9uSW5kZXggKSB7XHJcblxyXG5cdFx0dmFyIGpzb24gPSB0aGlzLmpzb247XHJcblxyXG5cdFx0dmFyIGFuaW1hdGlvbkRlZiA9IGpzb24uYW5pbWF0aW9uc1sgYW5pbWF0aW9uSW5kZXggXTtcclxuXHJcblx0XHR2YXIgcGVuZGluZ05vZGVzID0gW107XHJcblx0XHR2YXIgcGVuZGluZ0lucHV0QWNjZXNzb3JzID0gW107XHJcblx0XHR2YXIgcGVuZGluZ091dHB1dEFjY2Vzc29ycyA9IFtdO1xyXG5cdFx0dmFyIHBlbmRpbmdTYW1wbGVycyA9IFtdO1xyXG5cdFx0dmFyIHBlbmRpbmdUYXJnZXRzID0gW107XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IGFuaW1hdGlvbkRlZi5jaGFubmVscy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdHZhciBjaGFubmVsID0gYW5pbWF0aW9uRGVmLmNoYW5uZWxzWyBpIF07XHJcblx0XHRcdHZhciBzYW1wbGVyID0gYW5pbWF0aW9uRGVmLnNhbXBsZXJzWyBjaGFubmVsLnNhbXBsZXIgXTtcclxuXHRcdFx0dmFyIHRhcmdldCA9IGNoYW5uZWwudGFyZ2V0O1xyXG5cdFx0XHR2YXIgbmFtZSA9IHRhcmdldC5ub2RlICE9PSB1bmRlZmluZWQgPyB0YXJnZXQubm9kZSA6IHRhcmdldC5pZDsgLy8gTk9URTogdGFyZ2V0LmlkIGlzIGRlcHJlY2F0ZWQuXHJcblx0XHRcdHZhciBpbnB1dCA9IGFuaW1hdGlvbkRlZi5wYXJhbWV0ZXJzICE9PSB1bmRlZmluZWQgPyBhbmltYXRpb25EZWYucGFyYW1ldGVyc1sgc2FtcGxlci5pbnB1dCBdIDogc2FtcGxlci5pbnB1dDtcclxuXHRcdFx0dmFyIG91dHB1dCA9IGFuaW1hdGlvbkRlZi5wYXJhbWV0ZXJzICE9PSB1bmRlZmluZWQgPyBhbmltYXRpb25EZWYucGFyYW1ldGVyc1sgc2FtcGxlci5vdXRwdXQgXSA6IHNhbXBsZXIub3V0cHV0O1xyXG5cclxuXHRcdFx0cGVuZGluZ05vZGVzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ25vZGUnLCBuYW1lICkgKTtcclxuXHRcdFx0cGVuZGluZ0lucHV0QWNjZXNzb3JzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgaW5wdXQgKSApO1xyXG5cdFx0XHRwZW5kaW5nT3V0cHV0QWNjZXNzb3JzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgb3V0cHV0ICkgKTtcclxuXHRcdFx0cGVuZGluZ1NhbXBsZXJzLnB1c2goIHNhbXBsZXIgKTtcclxuXHRcdFx0cGVuZGluZ1RhcmdldHMucHVzaCggdGFyZ2V0ICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggW1xyXG5cclxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdOb2RlcyApLFxyXG5cdFx0XHRQcm9taXNlLmFsbCggcGVuZGluZ0lucHV0QWNjZXNzb3JzICksXHJcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nT3V0cHV0QWNjZXNzb3JzICksXHJcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nU2FtcGxlcnMgKSxcclxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdUYXJnZXRzIClcclxuXHJcblx0XHRdICkudGhlbiggZnVuY3Rpb24gKCBkZXBlbmRlbmNpZXMgKSB7XHJcblxyXG5cdFx0XHR2YXIgbm9kZXMgPSBkZXBlbmRlbmNpZXNbIDAgXTtcclxuXHRcdFx0dmFyIGlucHV0QWNjZXNzb3JzID0gZGVwZW5kZW5jaWVzWyAxIF07XHJcblx0XHRcdHZhciBvdXRwdXRBY2Nlc3NvcnMgPSBkZXBlbmRlbmNpZXNbIDIgXTtcclxuXHRcdFx0dmFyIHNhbXBsZXJzID0gZGVwZW5kZW5jaWVzWyAzIF07XHJcblx0XHRcdHZhciB0YXJnZXRzID0gZGVwZW5kZW5jaWVzWyA0IF07XHJcblxyXG5cdFx0XHR2YXIgdHJhY2tzID0gW107XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gbm9kZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBub2RlID0gbm9kZXNbIGkgXTtcclxuXHRcdFx0XHR2YXIgaW5wdXRBY2Nlc3NvciA9IGlucHV0QWNjZXNzb3JzWyBpIF07XHJcblx0XHRcdFx0dmFyIG91dHB1dEFjY2Vzc29yID0gb3V0cHV0QWNjZXNzb3JzWyBpIF07XHJcblx0XHRcdFx0dmFyIHNhbXBsZXIgPSBzYW1wbGVyc1sgaSBdO1xyXG5cdFx0XHRcdHZhciB0YXJnZXQgPSB0YXJnZXRzWyBpIF07XHJcblxyXG5cdFx0XHRcdGlmICggbm9kZSA9PT0gdW5kZWZpbmVkICkgY29udGludWU7XHJcblxyXG5cdFx0XHRcdG5vZGUudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0bm9kZS5tYXRyaXhBdXRvVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0dmFyIFR5cGVkS2V5ZnJhbWVUcmFjaztcclxuXHJcblx0XHRcdFx0c3dpdGNoICggUEFUSF9QUk9QRVJUSUVTWyB0YXJnZXQucGF0aCBdICkge1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgUEFUSF9QUk9QRVJUSUVTLndlaWdodHM6XHJcblxyXG5cdFx0XHRcdFx0XHRUeXBlZEtleWZyYW1lVHJhY2sgPSBOdW1iZXJLZXlmcmFtZVRyYWNrO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIFBBVEhfUFJPUEVSVElFUy5yb3RhdGlvbjpcclxuXHJcblx0XHRcdFx0XHRcdFR5cGVkS2V5ZnJhbWVUcmFjayA9IFF1YXRlcm5pb25LZXlmcmFtZVRyYWNrO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIFBBVEhfUFJPUEVSVElFUy5wb3NpdGlvbjpcclxuXHRcdFx0XHRcdGNhc2UgUEFUSF9QUk9QRVJUSUVTLnNjYWxlOlxyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHJcblx0XHRcdFx0XHRcdFR5cGVkS2V5ZnJhbWVUcmFjayA9IFZlY3RvcktleWZyYW1lVHJhY2s7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciB0YXJnZXROYW1lID0gbm9kZS5uYW1lID8gbm9kZS5uYW1lIDogbm9kZS51dWlkO1xyXG5cclxuXHRcdFx0XHR2YXIgaW50ZXJwb2xhdGlvbiA9IHNhbXBsZXIuaW50ZXJwb2xhdGlvbiAhPT0gdW5kZWZpbmVkID8gSU5URVJQT0xBVElPTlsgc2FtcGxlci5pbnRlcnBvbGF0aW9uIF0gOiBJbnRlcnBvbGF0ZUxpbmVhcjtcclxuXHJcblx0XHRcdFx0dmFyIHRhcmdldE5hbWVzID0gW107XHJcblxyXG5cdFx0XHRcdGlmICggUEFUSF9QUk9QRVJUSUVTWyB0YXJnZXQucGF0aCBdID09PSBQQVRIX1BST1BFUlRJRVMud2VpZ2h0cyApIHtcclxuXHJcblx0XHRcdFx0XHQvLyBOb2RlIG1heSBiZSBhIEdyb3VwIChnbFRGIG1lc2ggd2l0aCBzZXZlcmFsIHByaW1pdGl2ZXMpIG9yIGEgTWVzaC5cclxuXHRcdFx0XHRcdG5vZGUudHJhdmVyc2UoIGZ1bmN0aW9uICggb2JqZWN0ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCBvYmplY3QuaXNNZXNoID09PSB0cnVlICYmIG9iamVjdC5tb3JwaFRhcmdldEluZmx1ZW5jZXMgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHRhcmdldE5hbWVzLnB1c2goIG9iamVjdC5uYW1lID8gb2JqZWN0Lm5hbWUgOiBvYmplY3QudXVpZCApO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHR0YXJnZXROYW1lcy5wdXNoKCB0YXJnZXROYW1lICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIG91dHB1dEFycmF5ID0gb3V0cHV0QWNjZXNzb3IuYXJyYXk7XHJcblxyXG5cdFx0XHRcdGlmICggb3V0cHV0QWNjZXNzb3Iubm9ybWFsaXplZCApIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgc2NhbGU7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBvdXRwdXRBcnJheS5jb25zdHJ1Y3RvciA9PT0gSW50OEFycmF5ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0c2NhbGUgPSAxIC8gMTI3O1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIG91dHB1dEFycmF5LmNvbnN0cnVjdG9yID09PSBVaW50OEFycmF5ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0c2NhbGUgPSAxIC8gMjU1O1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIG91dHB1dEFycmF5LmNvbnN0cnVjdG9yID09IEludDE2QXJyYXkgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzY2FsZSA9IDEgLyAzMjc2NztcclxuXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKCBvdXRwdXRBcnJheS5jb25zdHJ1Y3RvciA9PT0gVWludDE2QXJyYXkgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzY2FsZSA9IDEgLyA2NTUzNTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5zdXBwb3J0ZWQgb3V0cHV0IGFjY2Vzc29yIGNvbXBvbmVudCB0eXBlLicgKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dmFyIHNjYWxlZCA9IG5ldyBGbG9hdDMyQXJyYXkoIG91dHB1dEFycmF5Lmxlbmd0aCApO1xyXG5cclxuXHRcdFx0XHRcdGZvciAoIHZhciBqID0gMCwgamwgPSBvdXRwdXRBcnJheS5sZW5ndGg7IGogPCBqbDsgaiArKyApIHtcclxuXHJcblx0XHRcdFx0XHRcdHNjYWxlZFsgaiBdID0gb3V0cHV0QXJyYXlbIGogXSAqIHNjYWxlO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRvdXRwdXRBcnJheSA9IHNjYWxlZDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRmb3IgKCB2YXIgaiA9IDAsIGpsID0gdGFyZ2V0TmFtZXMubGVuZ3RoOyBqIDwgamw7IGogKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHRyYWNrID0gbmV3IFR5cGVkS2V5ZnJhbWVUcmFjayhcclxuXHRcdFx0XHRcdFx0dGFyZ2V0TmFtZXNbIGogXSArICcuJyArIFBBVEhfUFJPUEVSVElFU1sgdGFyZ2V0LnBhdGggXSxcclxuXHRcdFx0XHRcdFx0aW5wdXRBY2Nlc3Nvci5hcnJheSxcclxuXHRcdFx0XHRcdFx0b3V0cHV0QXJyYXksXHJcblx0XHRcdFx0XHRcdGludGVycG9sYXRpb25cclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gT3ZlcnJpZGUgaW50ZXJwb2xhdGlvbiB3aXRoIGN1c3RvbSBmYWN0b3J5IG1ldGhvZC5cclxuXHRcdFx0XHRcdGlmICggc2FtcGxlci5pbnRlcnBvbGF0aW9uID09PSAnQ1VCSUNTUExJTkUnICkge1xyXG5cclxuXHRcdFx0XHRcdFx0dHJhY2suY3JlYXRlSW50ZXJwb2xhbnQgPSBmdW5jdGlvbiBJbnRlcnBvbGFudEZhY3RvcnlNZXRob2RHTFRGQ3ViaWNTcGxpbmUoIHJlc3VsdCApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gQSBDVUJJQ1NQTElORSBrZXlmcmFtZSBpbiBnbFRGIGhhcyB0aHJlZSBvdXRwdXQgdmFsdWVzIGZvciBlYWNoIGlucHV0IHZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdC8vIHJlcHJlc2VudGluZyBpblRhbmdlbnQsIHNwbGluZVZlcnRleCwgYW5kIG91dFRhbmdlbnQuIEFzIGEgcmVzdWx0LCB0cmFjay5nZXRWYWx1ZVNpemUoKVxyXG5cdFx0XHRcdFx0XHRcdC8vIG11c3QgYmUgZGl2aWRlZCBieSB0aHJlZSB0byBnZXQgdGhlIGludGVycG9sYW50J3Mgc2FtcGxlU2l6ZSBhcmd1bWVudC5cclxuXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudCggdGhpcy50aW1lcywgdGhpcy52YWx1ZXMsIHRoaXMuZ2V0VmFsdWVTaXplKCkgLyAzLCByZXN1bHQgKTtcclxuXHJcblx0XHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBNYXJrIGFzIENVQklDU1BMSU5FLiBgdHJhY2suZ2V0SW50ZXJwb2xhdGlvbigpYCBkb2Vzbid0IHN1cHBvcnQgY3VzdG9tIGludGVycG9sYW50cy5cclxuXHRcdFx0XHRcdFx0dHJhY2suY3JlYXRlSW50ZXJwb2xhbnQuaXNJbnRlcnBvbGFudEZhY3RvcnlNZXRob2RHTFRGQ3ViaWNTcGxpbmUgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0cmFja3MucHVzaCggdHJhY2sgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIG5hbWUgPSBhbmltYXRpb25EZWYubmFtZSA/IGFuaW1hdGlvbkRlZi5uYW1lIDogJ2FuaW1hdGlvbl8nICsgYW5pbWF0aW9uSW5kZXg7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IEFuaW1hdGlvbkNsaXAoIG5hbWUsIHVuZGVmaW5lZCwgdHJhY2tzICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjbm9kZXMtYW5kLWhpZXJhcmNoeVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBub2RlSW5kZXhcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdDNEPn1cclxuXHQgKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkTm9kZSA9IGZ1bmN0aW9uICggbm9kZUluZGV4ICkge1xyXG5cclxuXHRcdHZhciBqc29uID0gdGhpcy5qc29uO1xyXG5cdFx0dmFyIGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XHJcblx0XHR2YXIgcGFyc2VyID0gdGhpcztcclxuXHJcblx0XHR2YXIgbm9kZURlZiA9IGpzb24ubm9kZXNbIG5vZGVJbmRleCBdO1xyXG5cclxuXHRcdC8vIHJlc2VydmUgbm9kZSdzIG5hbWUgYmVmb3JlIGl0cyBkZXBlbmRlbmNpZXMsIHNvIHRoZSByb290IGhhcyB0aGUgaW50ZW5kZWQgbmFtZS5cclxuXHRcdHZhciBub2RlTmFtZSA9IG5vZGVEZWYubmFtZSA/IHBhcnNlci5jcmVhdGVVbmlxdWVOYW1lKCBub2RlRGVmLm5hbWUgKSA6ICcnO1xyXG5cclxuXHRcdHJldHVybiAoIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdHZhciBwZW5kaW5nID0gW107XHJcblxyXG5cdFx0XHRpZiAoIG5vZGVEZWYubWVzaCAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnbWVzaCcsIG5vZGVEZWYubWVzaCApLnRoZW4oIGZ1bmN0aW9uICggbWVzaCApIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgbm9kZSA9IHBhcnNlci5fZ2V0Tm9kZVJlZiggcGFyc2VyLm1lc2hDYWNoZSwgbm9kZURlZi5tZXNoLCBtZXNoICk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gaWYgd2VpZ2h0cyBhcmUgcHJvdmlkZWQgb24gdGhlIG5vZGUsIG92ZXJyaWRlIHdlaWdodHMgb24gdGhlIG1lc2guXHJcblx0XHRcdFx0XHRpZiAoIG5vZGVEZWYud2VpZ2h0cyAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRcdFx0bm9kZS50cmF2ZXJzZSggZnVuY3Rpb24gKCBvICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoICEgby5pc01lc2ggKSByZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0XHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSBub2RlRGVmLndlaWdodHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0by5tb3JwaFRhcmdldEluZmx1ZW5jZXNbIGkgXSA9IG5vZGVEZWYud2VpZ2h0c1sgaSBdO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJldHVybiBub2RlO1xyXG5cclxuXHRcdFx0XHR9ICkgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggbm9kZURlZi5jYW1lcmEgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2NhbWVyYScsIG5vZGVEZWYuY2FtZXJhICkudGhlbiggZnVuY3Rpb24gKCBjYW1lcmEgKSB7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHBhcnNlci5fZ2V0Tm9kZVJlZiggcGFyc2VyLmNhbWVyYUNhY2hlLCBub2RlRGVmLmNhbWVyYSwgY2FtZXJhICk7XHJcblxyXG5cdFx0XHRcdH0gKSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cGFyc2VyLl9pbnZva2VBbGwoIGZ1bmN0aW9uICggZXh0ICkge1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZXh0LmNyZWF0ZU5vZGVBdHRhY2htZW50ICYmIGV4dC5jcmVhdGVOb2RlQXR0YWNobWVudCggbm9kZUluZGV4ICk7XHJcblxyXG5cdFx0XHR9ICkuZm9yRWFjaCggZnVuY3Rpb24gKCBwcm9taXNlICkge1xyXG5cclxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHByb21pc2UgKTtcclxuXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xyXG5cclxuXHRcdH0oKSApLnRoZW4oIGZ1bmN0aW9uICggb2JqZWN0cyApIHtcclxuXHJcblx0XHRcdHZhciBub2RlO1xyXG5cclxuXHRcdFx0Ly8gLmlzQm9uZSBpc24ndCBpbiBnbFRGIHNwZWMuIFNlZSAuX21hcmtEZWZzXHJcblx0XHRcdGlmICggbm9kZURlZi5pc0JvbmUgPT09IHRydWUgKSB7XHJcblxyXG5cdFx0XHRcdG5vZGUgPSBuZXcgQm9uZSgpO1xyXG5cclxuXHRcdFx0fSBlbHNlIGlmICggb2JqZWN0cy5sZW5ndGggPiAxICkge1xyXG5cclxuXHRcdFx0XHRub2RlID0gbmV3IEdyb3VwKCk7XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYgKCBvYmplY3RzLmxlbmd0aCA9PT0gMSApIHtcclxuXHJcblx0XHRcdFx0bm9kZSA9IG9iamVjdHNbIDAgXTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdG5vZGUgPSBuZXcgT2JqZWN0M0QoKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggbm9kZSAhPT0gb2JqZWN0c1sgMCBdICkge1xyXG5cclxuXHRcdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gb2JqZWN0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0XHRub2RlLmFkZCggb2JqZWN0c1sgaSBdICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggbm9kZURlZi5uYW1lICkge1xyXG5cclxuXHRcdFx0XHRub2RlLnVzZXJEYXRhLm5hbWUgPSBub2RlRGVmLm5hbWU7XHJcblx0XHRcdFx0bm9kZS5uYW1lID0gbm9kZU5hbWU7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBub2RlLCBub2RlRGVmICk7XHJcblxyXG5cdFx0XHRpZiAoIG5vZGVEZWYuZXh0ZW5zaW9ucyApIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSggZXh0ZW5zaW9ucywgbm9kZSwgbm9kZURlZiApO1xyXG5cclxuXHRcdFx0aWYgKCBub2RlRGVmLm1hdHJpeCAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHR2YXIgbWF0cml4ID0gbmV3IE1hdHJpeDQoKTtcclxuXHRcdFx0XHRtYXRyaXguZnJvbUFycmF5KCBub2RlRGVmLm1hdHJpeCApO1xyXG5cdFx0XHRcdG5vZGUuYXBwbHlNYXRyaXg0KCBtYXRyaXggKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGlmICggbm9kZURlZi50cmFuc2xhdGlvbiAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRcdG5vZGUucG9zaXRpb24uZnJvbUFycmF5KCBub2RlRGVmLnRyYW5zbGF0aW9uICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCBub2RlRGVmLnJvdGF0aW9uICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0bm9kZS5xdWF0ZXJuaW9uLmZyb21BcnJheSggbm9kZURlZi5yb3RhdGlvbiApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggbm9kZURlZi5zY2FsZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRcdG5vZGUuc2NhbGUuZnJvbUFycmF5KCBub2RlRGVmLnNjYWxlICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCBub2RlLCB7IHR5cGU6ICdub2RlcycsIGluZGV4OiBub2RlSW5kZXggfSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIG5vZGU7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjc2NlbmVzXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNjZW5lSW5kZXhcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEdyb3VwPn1cclxuXHQgKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkU2NlbmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0Ly8gc2NlbmUgbm9kZSBoaWVyYWNoeSBidWlsZGVyXHJcblxyXG5cdFx0ZnVuY3Rpb24gYnVpbGROb2RlSGllcmFjaHkoIG5vZGVJZCwgcGFyZW50T2JqZWN0LCBqc29uLCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0XHR2YXIgbm9kZURlZiA9IGpzb24ubm9kZXNbIG5vZGVJZCBdO1xyXG5cclxuXHRcdFx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnbm9kZScsIG5vZGVJZCApLnRoZW4oIGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHJcblx0XHRcdFx0aWYgKCBub2RlRGVmLnNraW4gPT09IHVuZGVmaW5lZCApIHJldHVybiBub2RlO1xyXG5cclxuXHRcdFx0XHQvLyBidWlsZCBza2VsZXRvbiBoZXJlIGFzIHdlbGxcclxuXHJcblx0XHRcdFx0dmFyIHNraW5FbnRyeTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnc2tpbicsIG5vZGVEZWYuc2tpbiApLnRoZW4oIGZ1bmN0aW9uICggc2tpbiApIHtcclxuXHJcblx0XHRcdFx0XHRza2luRW50cnkgPSBza2luO1xyXG5cclxuXHRcdFx0XHRcdHZhciBwZW5kaW5nSm9pbnRzID0gW107XHJcblxyXG5cdFx0XHRcdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IHNraW5FbnRyeS5qb2ludHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRwZW5kaW5nSm9pbnRzLnB1c2goIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnbm9kZScsIHNraW5FbnRyeS5qb2ludHNbIGkgXSApICk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZ0pvaW50cyApO1xyXG5cclxuXHRcdFx0XHR9ICkudGhlbiggZnVuY3Rpb24gKCBqb2ludE5vZGVzICkge1xyXG5cclxuXHRcdFx0XHRcdG5vZGUudHJhdmVyc2UoIGZ1bmN0aW9uICggbWVzaCApIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICggISBtZXNoLmlzTWVzaCApIHJldHVybjtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBib25lcyA9IFtdO1xyXG5cdFx0XHRcdFx0XHR2YXIgYm9uZUludmVyc2VzID0gW107XHJcblxyXG5cdFx0XHRcdFx0XHRmb3IgKCB2YXIgaiA9IDAsIGpsID0gam9pbnROb2Rlcy5sZW5ndGg7IGogPCBqbDsgaiArKyApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIGpvaW50Tm9kZSA9IGpvaW50Tm9kZXNbIGogXTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKCBqb2ludE5vZGUgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Ym9uZXMucHVzaCggam9pbnROb2RlICk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIG1hdCA9IG5ldyBNYXRyaXg0KCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBza2luRW50cnkuaW52ZXJzZUJpbmRNYXRyaWNlcyAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0bWF0LmZyb21BcnJheSggc2tpbkVudHJ5LmludmVyc2VCaW5kTWF0cmljZXMuYXJyYXksIGogKiAxNiApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRib25lSW52ZXJzZXMucHVzaCggbWF0ICk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogSm9pbnQgXCIlc1wiIGNvdWxkIG5vdCBiZSBmb3VuZC4nLCBza2luRW50cnkuam9pbnRzWyBqIF0gKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0bWVzaC5iaW5kKCBuZXcgU2tlbGV0b24oIGJvbmVzLCBib25lSW52ZXJzZXMgKSwgbWVzaC5tYXRyaXhXb3JsZCApO1xyXG5cclxuXHRcdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gbm9kZTtcclxuXHJcblx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0fSApLnRoZW4oIGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHJcblx0XHRcdFx0Ly8gYnVpbGQgbm9kZSBoaWVyYWNoeVxyXG5cclxuXHRcdFx0XHRwYXJlbnRPYmplY3QuYWRkKCBub2RlICk7XHJcblxyXG5cdFx0XHRcdHZhciBwZW5kaW5nID0gW107XHJcblxyXG5cdFx0XHRcdGlmICggbm9kZURlZi5jaGlsZHJlbiApIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgY2hpbGRyZW4gPSBub2RlRGVmLmNoaWxkcmVuO1xyXG5cclxuXHRcdFx0XHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBjaGlsZCA9IGNoaWxkcmVuWyBpIF07XHJcblx0XHRcdFx0XHRcdHBlbmRpbmcucHVzaCggYnVpbGROb2RlSGllcmFjaHkoIGNoaWxkLCBub2RlLCBqc29uLCBwYXJzZXIgKSApO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcclxuXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIGxvYWRTY2VuZSggc2NlbmVJbmRleCApIHtcclxuXHJcblx0XHRcdHZhciBqc29uID0gdGhpcy5qc29uO1xyXG5cdFx0XHR2YXIgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcclxuXHRcdFx0dmFyIHNjZW5lRGVmID0gdGhpcy5qc29uLnNjZW5lc1sgc2NlbmVJbmRleCBdO1xyXG5cdFx0XHR2YXIgcGFyc2VyID0gdGhpcztcclxuXHJcblx0XHRcdC8vIExvYWRlciByZXR1cm5zIEdyb3VwLCBub3QgU2NlbmUuXHJcblx0XHRcdC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTgzNDIjaXNzdWVjb21tZW50LTU3ODk4MTE3MlxyXG5cdFx0XHR2YXIgc2NlbmUgPSBuZXcgR3JvdXAoKTtcclxuXHRcdFx0aWYgKCBzY2VuZURlZi5uYW1lICkgc2NlbmUubmFtZSA9IHBhcnNlci5jcmVhdGVVbmlxdWVOYW1lKCBzY2VuZURlZi5uYW1lICk7XHJcblxyXG5cdFx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBzY2VuZSwgc2NlbmVEZWYgKTtcclxuXHJcblx0XHRcdGlmICggc2NlbmVEZWYuZXh0ZW5zaW9ucyApIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSggZXh0ZW5zaW9ucywgc2NlbmUsIHNjZW5lRGVmICk7XHJcblxyXG5cdFx0XHR2YXIgbm9kZUlkcyA9IHNjZW5lRGVmLm5vZGVzIHx8IFtdO1xyXG5cclxuXHRcdFx0dmFyIHBlbmRpbmcgPSBbXTtcclxuXHJcblx0XHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSBub2RlSWRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIGJ1aWxkTm9kZUhpZXJhY2h5KCBub2RlSWRzWyBpIF0sIHNjZW5lLCBqc29uLCBwYXJzZXIgKSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICkudGhlbiggZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gc2NlbmU7XHJcblxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0fTtcclxuXHJcblx0fSgpO1xyXG5cclxuXHRyZXR1cm4gR0xURkxvYWRlcjtcclxuXHJcbn0gKSgpO1xyXG5cclxuZXhwb3J0IHsgR0xURkxvYWRlciB9O1xyXG4iLCIvLyBUSElTIEZJTEUgV0FTIE5PVCBXUklUVEVOIEJZIE1FXHJcblxyXG4vLyBUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggdGhlIGluYnVpbHQgb2JqIGxvYWRlcnMgc28gSSByZXdyb3RlIHBhcnRzIG9mIGl0LCBzbyBpdCB3b3JrcyBpbiBOZXh0anMgYW5kIFJlYWN0IFxyXG5cclxuLy8gLS0gSGFydmV5IFJhbmRhbGwgNS82LzIxXHJcbmltcG9ydCB7XHJcblx0QnVmZmVyQXR0cmlidXRlLFxyXG5cdEJ1ZmZlckdlb21ldHJ5LFxyXG5cdEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUsXHJcblx0SW50ZXJsZWF2ZWRCdWZmZXIsXHJcblx0SW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUsXHJcblx0VHJpYW5nbGVGYW5EcmF3TW9kZSxcclxuXHRUcmlhbmdsZVN0cmlwRHJhd01vZGUsXHJcblx0VHJpYW5nbGVzRHJhd01vZGUsXHJcblx0VmVjdG9yM1xyXG59IGZyb20gJ3RocmVlJztcclxuXHJcbnZhciBCdWZmZXJHZW9tZXRyeVV0aWxzID0ge1xyXG5cclxuXHRjb21wdXRlVGFuZ2VudHM6IGZ1bmN0aW9uICggZ2VvbWV0cnkgKSB7XHJcblxyXG5cdFx0Z2VvbWV0cnkuY29tcHV0ZVRhbmdlbnRzKCk7XHJcblx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAuY29tcHV0ZVRhbmdlbnRzKCkgaGFzIGJlZW4gcmVtb3ZlZC4gVXNlIEJ1ZmZlckdlb21ldHJ5LmNvbXB1dGVUYW5nZW50cygpIGluc3RlYWQuJyApO1xyXG5cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0gIHtBcnJheTxCdWZmZXJHZW9tZXRyeT59IGdlb21ldHJpZXNcclxuXHQgKiBAcGFyYW0gIHtCb29sZWFufSB1c2VHcm91cHNcclxuXHQgKiBAcmV0dXJuIHtCdWZmZXJHZW9tZXRyeX1cclxuXHQgKi9cclxuXHRtZXJnZUJ1ZmZlckdlb21ldHJpZXM6IGZ1bmN0aW9uICggZ2VvbWV0cmllcywgdXNlR3JvdXBzICkge1xyXG5cclxuXHRcdHZhciBpc0luZGV4ZWQgPSBnZW9tZXRyaWVzWyAwIF0uaW5kZXggIT09IG51bGw7XHJcblxyXG5cdFx0dmFyIGF0dHJpYnV0ZXNVc2VkID0gbmV3IFNldCggT2JqZWN0LmtleXMoIGdlb21ldHJpZXNbIDAgXS5hdHRyaWJ1dGVzICkgKTtcclxuXHRcdHZhciBtb3JwaEF0dHJpYnV0ZXNVc2VkID0gbmV3IFNldCggT2JqZWN0LmtleXMoIGdlb21ldHJpZXNbIDAgXS5tb3JwaEF0dHJpYnV0ZXMgKSApO1xyXG5cclxuXHRcdHZhciBhdHRyaWJ1dGVzID0ge307XHJcblx0XHR2YXIgbW9ycGhBdHRyaWJ1dGVzID0ge307XHJcblxyXG5cdFx0dmFyIG1vcnBoVGFyZ2V0c1JlbGF0aXZlID0gZ2VvbWV0cmllc1sgMCBdLm1vcnBoVGFyZ2V0c1JlbGF0aXZlO1xyXG5cclxuXHRcdHZhciBtZXJnZWRHZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG5cclxuXHRcdHZhciBvZmZzZXQgPSAwO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IGdlb21ldHJpZXMubGVuZ3RoOyArKyBpICkge1xyXG5cclxuXHRcdFx0dmFyIGdlb21ldHJ5ID0gZ2VvbWV0cmllc1sgaSBdO1xyXG5cdFx0XHR2YXIgYXR0cmlidXRlc0NvdW50ID0gMDtcclxuXHJcblx0XHRcdC8vIGVuc3VyZSB0aGF0IGFsbCBnZW9tZXRyaWVzIGFyZSBpbmRleGVkLCBvciBub25lXHJcblxyXG5cdFx0XHRpZiAoIGlzSW5kZXhlZCAhPT0gKCBnZW9tZXRyeS5pbmRleCAhPT0gbnVsbCApICkge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyR2VvbWV0cmllcygpIGZhaWxlZCB3aXRoIGdlb21ldHJ5IGF0IGluZGV4ICcgKyBpICsgJy4gQWxsIGdlb21ldHJpZXMgbXVzdCBoYXZlIGNvbXBhdGlibGUgYXR0cmlidXRlczsgbWFrZSBzdXJlIGluZGV4IGF0dHJpYnV0ZSBleGlzdHMgYW1vbmcgYWxsIGdlb21ldHJpZXMsIG9yIGluIG5vbmUgb2YgdGhlbS4nICk7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBnYXRoZXIgYXR0cmlidXRlcywgZXhpdCBlYXJseSBpZiB0aGV5J3JlIGRpZmZlcmVudFxyXG5cclxuXHRcdFx0Zm9yICggdmFyIG5hbWUgaW4gZ2VvbWV0cnkuYXR0cmlidXRlcyApIHtcclxuXHJcblx0XHRcdFx0aWYgKCAhIGF0dHJpYnV0ZXNVc2VkLmhhcyggbmFtZSApICkge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJHZW9tZXRyaWVzKCkgZmFpbGVkIHdpdGggZ2VvbWV0cnkgYXQgaW5kZXggJyArIGkgKyAnLiBBbGwgZ2VvbWV0cmllcyBtdXN0IGhhdmUgY29tcGF0aWJsZSBhdHRyaWJ1dGVzOyBtYWtlIHN1cmUgXCInICsgbmFtZSArICdcIiBhdHRyaWJ1dGUgZXhpc3RzIGFtb25nIGFsbCBnZW9tZXRyaWVzLCBvciBpbiBub25lIG9mIHRoZW0uJyApO1xyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCBhdHRyaWJ1dGVzWyBuYW1lIF0gPT09IHVuZGVmaW5lZCApIGF0dHJpYnV0ZXNbIG5hbWUgXSA9IFtdO1xyXG5cclxuXHRcdFx0XHRhdHRyaWJ1dGVzWyBuYW1lIF0ucHVzaCggZ2VvbWV0cnkuYXR0cmlidXRlc1sgbmFtZSBdICk7XHJcblxyXG5cdFx0XHRcdGF0dHJpYnV0ZXNDb3VudCArKztcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGVuc3VyZSBnZW9tZXRyaWVzIGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIGF0dHJpYnV0ZXNcclxuXHJcblx0XHRcdGlmICggYXR0cmlidXRlc0NvdW50ICE9PSBhdHRyaWJ1dGVzVXNlZC5zaXplICkge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyR2VvbWV0cmllcygpIGZhaWxlZCB3aXRoIGdlb21ldHJ5IGF0IGluZGV4ICcgKyBpICsgJy4gTWFrZSBzdXJlIGFsbCBnZW9tZXRyaWVzIGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIGF0dHJpYnV0ZXMuJyApO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZ2F0aGVyIG1vcnBoIGF0dHJpYnV0ZXMsIGV4aXQgZWFybHkgaWYgdGhleSdyZSBkaWZmZXJlbnRcclxuXHJcblx0XHRcdGlmICggbW9ycGhUYXJnZXRzUmVsYXRpdmUgIT09IGdlb21ldHJ5Lm1vcnBoVGFyZ2V0c1JlbGF0aXZlICkge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyR2VvbWV0cmllcygpIGZhaWxlZCB3aXRoIGdlb21ldHJ5IGF0IGluZGV4ICcgKyBpICsgJy4gLm1vcnBoVGFyZ2V0c1JlbGF0aXZlIG11c3QgYmUgY29uc2lzdGVudCB0aHJvdWdob3V0IGFsbCBnZW9tZXRyaWVzLicgKTtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvciAoIHZhciBuYW1lIGluIGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcyApIHtcclxuXHJcblx0XHRcdFx0aWYgKCAhIG1vcnBoQXR0cmlidXRlc1VzZWQuaGFzKCBuYW1lICkgKSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUJ1ZmZlckdlb21ldHJpZXMoKSBmYWlsZWQgd2l0aCBnZW9tZXRyeSBhdCBpbmRleCAnICsgaSArICcuICAubW9ycGhBdHRyaWJ1dGVzIG11c3QgYmUgY29uc2lzdGVudCB0aHJvdWdob3V0IGFsbCBnZW9tZXRyaWVzLicgKTtcclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggbW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF0gPT09IHVuZGVmaW5lZCApIG1vcnBoQXR0cmlidXRlc1sgbmFtZSBdID0gW107XHJcblxyXG5cdFx0XHRcdG1vcnBoQXR0cmlidXRlc1sgbmFtZSBdLnB1c2goIGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlc1sgbmFtZSBdICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBnYXRoZXIgLnVzZXJEYXRhXHJcblxyXG5cdFx0XHRtZXJnZWRHZW9tZXRyeS51c2VyRGF0YS5tZXJnZWRVc2VyRGF0YSA9IG1lcmdlZEdlb21ldHJ5LnVzZXJEYXRhLm1lcmdlZFVzZXJEYXRhIHx8IFtdO1xyXG5cdFx0XHRtZXJnZWRHZW9tZXRyeS51c2VyRGF0YS5tZXJnZWRVc2VyRGF0YS5wdXNoKCBnZW9tZXRyeS51c2VyRGF0YSApO1xyXG5cclxuXHRcdFx0aWYgKCB1c2VHcm91cHMgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBjb3VudDtcclxuXHJcblx0XHRcdFx0aWYgKCBpc0luZGV4ZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0Y291bnQgPSBnZW9tZXRyeS5pbmRleC5jb3VudDtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmICggZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRcdGNvdW50ID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5jb3VudDtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyR2VvbWV0cmllcygpIGZhaWxlZCB3aXRoIGdlb21ldHJ5IGF0IGluZGV4ICcgKyBpICsgJy4gVGhlIGdlb21ldHJ5IG11c3QgaGF2ZSBlaXRoZXIgYW4gaW5kZXggb3IgYSBwb3NpdGlvbiBhdHRyaWJ1dGUnICk7XHJcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRtZXJnZWRHZW9tZXRyeS5hZGRHcm91cCggb2Zmc2V0LCBjb3VudCwgaSApO1xyXG5cclxuXHRcdFx0XHRvZmZzZXQgKz0gY291bnQ7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG1lcmdlIGluZGljZXNcclxuXHJcblx0XHRpZiAoIGlzSW5kZXhlZCApIHtcclxuXHJcblx0XHRcdHZhciBpbmRleE9mZnNldCA9IDA7XHJcblx0XHRcdHZhciBtZXJnZWRJbmRleCA9IFtdO1xyXG5cclxuXHRcdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgZ2VvbWV0cmllcy5sZW5ndGg7ICsrIGkgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBpbmRleCA9IGdlb21ldHJpZXNbIGkgXS5pbmRleDtcclxuXHJcblx0XHRcdFx0Zm9yICggdmFyIGogPSAwOyBqIDwgaW5kZXguY291bnQ7ICsrIGogKSB7XHJcblxyXG5cdFx0XHRcdFx0bWVyZ2VkSW5kZXgucHVzaCggaW5kZXguZ2V0WCggaiApICsgaW5kZXhPZmZzZXQgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpbmRleE9mZnNldCArPSBnZW9tZXRyaWVzWyBpIF0uYXR0cmlidXRlcy5wb3NpdGlvbi5jb3VudDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1lcmdlZEdlb21ldHJ5LnNldEluZGV4KCBtZXJnZWRJbmRleCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBtZXJnZSBhdHRyaWJ1dGVzXHJcblxyXG5cdFx0Zm9yICggdmFyIG5hbWUgaW4gYXR0cmlidXRlcyApIHtcclxuXHJcblx0XHRcdHZhciBtZXJnZWRBdHRyaWJ1dGUgPSB0aGlzLm1lcmdlQnVmZmVyQXR0cmlidXRlcyggYXR0cmlidXRlc1sgbmFtZSBdICk7XHJcblxyXG5cdFx0XHRpZiAoICEgbWVyZ2VkQXR0cmlidXRlICkge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyR2VvbWV0cmllcygpIGZhaWxlZCB3aGlsZSB0cnlpbmcgdG8gbWVyZ2UgdGhlICcgKyBuYW1lICsgJyBhdHRyaWJ1dGUuJyApO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWVyZ2VkR2VvbWV0cnkuc2V0QXR0cmlidXRlKCBuYW1lLCBtZXJnZWRBdHRyaWJ1dGUgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbWVyZ2UgbW9ycGggYXR0cmlidXRlc1xyXG5cclxuXHRcdGZvciAoIHZhciBuYW1lIGluIG1vcnBoQXR0cmlidXRlcyApIHtcclxuXHJcblx0XHRcdHZhciBudW1Nb3JwaFRhcmdldHMgPSBtb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXVsgMCBdLmxlbmd0aDtcclxuXHJcblx0XHRcdGlmICggbnVtTW9ycGhUYXJnZXRzID09PSAwICkgYnJlYWs7XHJcblxyXG5cdFx0XHRtZXJnZWRHZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMgPSBtZXJnZWRHZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMgfHwge307XHJcblx0XHRcdG1lcmdlZEdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlc1sgbmFtZSBdID0gW107XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBudW1Nb3JwaFRhcmdldHM7ICsrIGkgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBtb3JwaEF0dHJpYnV0ZXNUb01lcmdlID0gW107XHJcblxyXG5cdFx0XHRcdGZvciAoIHZhciBqID0gMDsgaiA8IG1vcnBoQXR0cmlidXRlc1sgbmFtZSBdLmxlbmd0aDsgKysgaiApIHtcclxuXHJcblx0XHRcdFx0XHRtb3JwaEF0dHJpYnV0ZXNUb01lcmdlLnB1c2goIG1vcnBoQXR0cmlidXRlc1sgbmFtZSBdWyBqIF1bIGkgXSApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciBtZXJnZWRNb3JwaEF0dHJpYnV0ZSA9IHRoaXMubWVyZ2VCdWZmZXJBdHRyaWJ1dGVzKCBtb3JwaEF0dHJpYnV0ZXNUb01lcmdlICk7XHJcblxyXG5cdFx0XHRcdGlmICggISBtZXJnZWRNb3JwaEF0dHJpYnV0ZSApIHtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyR2VvbWV0cmllcygpIGZhaWxlZCB3aGlsZSB0cnlpbmcgdG8gbWVyZ2UgdGhlICcgKyBuYW1lICsgJyBtb3JwaEF0dHJpYnV0ZS4nICk7XHJcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRtZXJnZWRHZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXS5wdXNoKCBtZXJnZWRNb3JwaEF0dHJpYnV0ZSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbWVyZ2VkR2VvbWV0cnk7XHJcblxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7QXJyYXk8QnVmZmVyQXR0cmlidXRlPn0gYXR0cmlidXRlc1xyXG5cdCAqIEByZXR1cm4ge0J1ZmZlckF0dHJpYnV0ZX1cclxuXHQgKi9cclxuXHRtZXJnZUJ1ZmZlckF0dHJpYnV0ZXM6IGZ1bmN0aW9uICggYXR0cmlidXRlcyApIHtcclxuXHJcblx0XHR2YXIgVHlwZWRBcnJheTtcclxuXHRcdHZhciBpdGVtU2l6ZTtcclxuXHRcdHZhciBub3JtYWxpemVkO1xyXG5cdFx0dmFyIGFycmF5TGVuZ3RoID0gMDtcclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgKysgaSApIHtcclxuXHJcblx0XHRcdHZhciBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzWyBpIF07XHJcblxyXG5cdFx0XHRpZiAoIGF0dHJpYnV0ZS5pc0ludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlICkge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyQXR0cmlidXRlcygpIGZhaWxlZC4gSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGVzIGFyZSBub3Qgc3VwcG9ydGVkLicgKTtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggVHlwZWRBcnJheSA9PT0gdW5kZWZpbmVkICkgVHlwZWRBcnJheSA9IGF0dHJpYnV0ZS5hcnJheS5jb25zdHJ1Y3RvcjtcclxuXHRcdFx0aWYgKCBUeXBlZEFycmF5ICE9PSBhdHRyaWJ1dGUuYXJyYXkuY29uc3RydWN0b3IgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJBdHRyaWJ1dGVzKCkgZmFpbGVkLiBCdWZmZXJBdHRyaWJ1dGUuYXJyYXkgbXVzdCBiZSBvZiBjb25zaXN0ZW50IGFycmF5IHR5cGVzIGFjcm9zcyBtYXRjaGluZyBhdHRyaWJ1dGVzLicgKTtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggaXRlbVNpemUgPT09IHVuZGVmaW5lZCApIGl0ZW1TaXplID0gYXR0cmlidXRlLml0ZW1TaXplO1xyXG5cdFx0XHRpZiAoIGl0ZW1TaXplICE9PSBhdHRyaWJ1dGUuaXRlbVNpemUgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJBdHRyaWJ1dGVzKCkgZmFpbGVkLiBCdWZmZXJBdHRyaWJ1dGUuaXRlbVNpemUgbXVzdCBiZSBjb25zaXN0ZW50IGFjcm9zcyBtYXRjaGluZyBhdHRyaWJ1dGVzLicgKTtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggbm9ybWFsaXplZCA9PT0gdW5kZWZpbmVkICkgbm9ybWFsaXplZCA9IGF0dHJpYnV0ZS5ub3JtYWxpemVkO1xyXG5cdFx0XHRpZiAoIG5vcm1hbGl6ZWQgIT09IGF0dHJpYnV0ZS5ub3JtYWxpemVkICkge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyQXR0cmlidXRlcygpIGZhaWxlZC4gQnVmZmVyQXR0cmlidXRlLm5vcm1hbGl6ZWQgbXVzdCBiZSBjb25zaXN0ZW50IGFjcm9zcyBtYXRjaGluZyBhdHRyaWJ1dGVzLicgKTtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGFycmF5TGVuZ3RoICs9IGF0dHJpYnV0ZS5hcnJheS5sZW5ndGg7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBhcnJheSA9IG5ldyBUeXBlZEFycmF5KCBhcnJheUxlbmd0aCApO1xyXG5cdFx0dmFyIG9mZnNldCA9IDA7XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7ICsrIGkgKSB7XHJcblxyXG5cdFx0XHRhcnJheS5zZXQoIGF0dHJpYnV0ZXNbIGkgXS5hcnJheSwgb2Zmc2V0ICk7XHJcblxyXG5cdFx0XHRvZmZzZXQgKz0gYXR0cmlidXRlc1sgaSBdLmFycmF5Lmxlbmd0aDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBCdWZmZXJBdHRyaWJ1dGUoIGFycmF5LCBpdGVtU2l6ZSwgbm9ybWFsaXplZCApO1xyXG5cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge0FycmF5PEJ1ZmZlckF0dHJpYnV0ZT59IGF0dHJpYnV0ZXNcclxuXHQgKiBAcmV0dXJuIHtBcnJheTxJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZT59XHJcblx0ICovXHJcblx0aW50ZXJsZWF2ZUF0dHJpYnV0ZXM6IGZ1bmN0aW9uICggYXR0cmlidXRlcyApIHtcclxuXHJcblx0XHQvLyBJbnRlcmxlYXZlcyB0aGUgcHJvdmlkZWQgYXR0cmlidXRlcyBpbnRvIGFuIEludGVybGVhdmVkQnVmZmVyIGFuZCByZXR1cm5zXHJcblx0XHQvLyBhIHNldCBvZiBJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZXMgZm9yIGVhY2ggYXR0cmlidXRlXHJcblx0XHR2YXIgVHlwZWRBcnJheTtcclxuXHRcdHZhciBhcnJheUxlbmd0aCA9IDA7XHJcblx0XHR2YXIgc3RyaWRlID0gMDtcclxuXHJcblx0XHQvLyBjYWxjdWxhdGUgdGhlIHRoZSBsZW5ndGggYW5kIHR5cGUgb2YgdGhlIGludGVybGVhdmVkQnVmZmVyXHJcblx0XHRmb3IgKCB2YXIgaSA9IDAsIGwgPSBhdHRyaWJ1dGVzLmxlbmd0aDsgaSA8IGw7ICsrIGkgKSB7XHJcblxyXG5cdFx0XHR2YXIgYXR0cmlidXRlID0gYXR0cmlidXRlc1sgaSBdO1xyXG5cclxuXHRcdFx0aWYgKCBUeXBlZEFycmF5ID09PSB1bmRlZmluZWQgKSBUeXBlZEFycmF5ID0gYXR0cmlidXRlLmFycmF5LmNvbnN0cnVjdG9yO1xyXG5cdFx0XHRpZiAoIFR5cGVkQXJyYXkgIT09IGF0dHJpYnV0ZS5hcnJheS5jb25zdHJ1Y3RvciApIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggJ0F0dHJpYnV0ZUJ1ZmZlcnMgb2YgZGlmZmVyZW50IHR5cGVzIGNhbm5vdCBiZSBpbnRlcmxlYXZlZCcgKTtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGFycmF5TGVuZ3RoICs9IGF0dHJpYnV0ZS5hcnJheS5sZW5ndGg7XHJcblx0XHRcdHN0cmlkZSArPSBhdHRyaWJ1dGUuaXRlbVNpemU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENyZWF0ZSB0aGUgc2V0IG9mIGJ1ZmZlciBhdHRyaWJ1dGVzXHJcblx0XHR2YXIgaW50ZXJsZWF2ZWRCdWZmZXIgPSBuZXcgSW50ZXJsZWF2ZWRCdWZmZXIoIG5ldyBUeXBlZEFycmF5KCBhcnJheUxlbmd0aCApLCBzdHJpZGUgKTtcclxuXHRcdHZhciBvZmZzZXQgPSAwO1xyXG5cdFx0dmFyIHJlcyA9IFtdO1xyXG5cdFx0dmFyIGdldHRlcnMgPSBbICdnZXRYJywgJ2dldFknLCAnZ2V0WicsICdnZXRXJyBdO1xyXG5cdFx0dmFyIHNldHRlcnMgPSBbICdzZXRYJywgJ3NldFknLCAnc2V0WicsICdzZXRXJyBdO1xyXG5cclxuXHRcdGZvciAoIHZhciBqID0gMCwgbCA9IGF0dHJpYnV0ZXMubGVuZ3RoOyBqIDwgbDsgaiArKyApIHtcclxuXHJcblx0XHRcdHZhciBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzWyBqIF07XHJcblx0XHRcdHZhciBpdGVtU2l6ZSA9IGF0dHJpYnV0ZS5pdGVtU2l6ZTtcclxuXHRcdFx0dmFyIGNvdW50ID0gYXR0cmlidXRlLmNvdW50O1xyXG5cdFx0XHR2YXIgaWJhID0gbmV3IEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlKCBpbnRlcmxlYXZlZEJ1ZmZlciwgaXRlbVNpemUsIG9mZnNldCwgYXR0cmlidXRlLm5vcm1hbGl6ZWQgKTtcclxuXHRcdFx0cmVzLnB1c2goIGliYSApO1xyXG5cclxuXHRcdFx0b2Zmc2V0ICs9IGl0ZW1TaXplO1xyXG5cclxuXHRcdFx0Ly8gTW92ZSB0aGUgZGF0YSBmb3IgZWFjaCBhdHRyaWJ1dGUgaW50byB0aGUgbmV3IGludGVybGVhdmVkQnVmZmVyXHJcblx0XHRcdC8vIGF0IHRoZSBhcHByb3ByaWF0ZSBvZmZzZXRcclxuXHRcdFx0Zm9yICggdmFyIGMgPSAwOyBjIDwgY291bnQ7IGMgKysgKSB7XHJcblxyXG5cdFx0XHRcdGZvciAoIHZhciBrID0gMDsgayA8IGl0ZW1TaXplOyBrICsrICkge1xyXG5cclxuXHRcdFx0XHRcdGliYVsgc2V0dGVyc1sgayBdIF0oIGMsIGF0dHJpYnV0ZVsgZ2V0dGVyc1sgayBdIF0oIGMgKSApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByZXM7XHJcblxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7QXJyYXk8QnVmZmVyR2VvbWV0cnk+fSBnZW9tZXRyeVxyXG5cdCAqIEByZXR1cm4ge251bWJlcn1cclxuXHQgKi9cclxuXHRlc3RpbWF0ZUJ5dGVzVXNlZDogZnVuY3Rpb24gKCBnZW9tZXRyeSApIHtcclxuXHJcblx0XHQvLyBSZXR1cm4gdGhlIGVzdGltYXRlZCBtZW1vcnkgdXNlZCBieSB0aGlzIGdlb21ldHJ5IGluIGJ5dGVzXHJcblx0XHQvLyBDYWxjdWxhdGUgdXNpbmcgaXRlbVNpemUsIGNvdW50LCBhbmQgQllURVNfUEVSX0VMRU1FTlQgdG8gYWNjb3VudFxyXG5cdFx0Ly8gZm9yIEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlcy5cclxuXHRcdHZhciBtZW0gPSAwO1xyXG5cdFx0Zm9yICggdmFyIG5hbWUgaW4gZ2VvbWV0cnkuYXR0cmlidXRlcyApIHtcclxuXHJcblx0XHRcdHZhciBhdHRyID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCBuYW1lICk7XHJcblx0XHRcdG1lbSArPSBhdHRyLmNvdW50ICogYXR0ci5pdGVtU2l6ZSAqIGF0dHIuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQ7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBpbmRpY2VzID0gZ2VvbWV0cnkuZ2V0SW5kZXgoKTtcclxuXHRcdG1lbSArPSBpbmRpY2VzID8gaW5kaWNlcy5jb3VudCAqIGluZGljZXMuaXRlbVNpemUgKiBpbmRpY2VzLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5UIDogMDtcclxuXHRcdHJldHVybiBtZW07XHJcblxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7QnVmZmVyR2VvbWV0cnl9IGdlb21ldHJ5XHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRvbGVyYW5jZVxyXG5cdCAqIEByZXR1cm4ge0J1ZmZlckdlb21ldHJ5Pn1cclxuXHQgKi9cclxuXHRtZXJnZVZlcnRpY2VzOiBmdW5jdGlvbiAoIGdlb21ldHJ5LCB0b2xlcmFuY2UgPSAxZS00ICkge1xyXG5cclxuXHRcdHRvbGVyYW5jZSA9IE1hdGgubWF4KCB0b2xlcmFuY2UsIE51bWJlci5FUFNJTE9OICk7XHJcblxyXG5cdFx0Ly8gR2VuZXJhdGUgYW4gaW5kZXggYnVmZmVyIGlmIHRoZSBnZW9tZXRyeSBkb2Vzbid0IGhhdmUgb25lLCBvciBvcHRpbWl6ZSBpdFxyXG5cdFx0Ly8gaWYgaXQncyBhbHJlYWR5IGF2YWlsYWJsZS5cclxuXHRcdHZhciBoYXNoVG9JbmRleCA9IHt9O1xyXG5cdFx0dmFyIGluZGljZXMgPSBnZW9tZXRyeS5nZXRJbmRleCgpO1xyXG5cdFx0dmFyIHBvc2l0aW9ucyA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSggJ3Bvc2l0aW9uJyApO1xyXG5cdFx0dmFyIHZlcnRleENvdW50ID0gaW5kaWNlcyA/IGluZGljZXMuY291bnQgOiBwb3NpdGlvbnMuY291bnQ7XHJcblxyXG5cdFx0Ly8gbmV4dCB2YWx1ZSBmb3IgdHJpYW5nbGUgaW5kaWNlc1xyXG5cdFx0dmFyIG5leHRJbmRleCA9IDA7XHJcblxyXG5cdFx0Ly8gYXR0cmlidXRlcyBhbmQgbmV3IGF0dHJpYnV0ZSBhcnJheXNcclxuXHRcdHZhciBhdHRyaWJ1dGVOYW1lcyA9IE9iamVjdC5rZXlzKCBnZW9tZXRyeS5hdHRyaWJ1dGVzICk7XHJcblx0XHR2YXIgYXR0ckFycmF5cyA9IHt9O1xyXG5cdFx0dmFyIG1vcnBoQXR0cnNBcnJheXMgPSB7fTtcclxuXHRcdHZhciBuZXdJbmRpY2VzID0gW107XHJcblx0XHR2YXIgZ2V0dGVycyA9IFsgJ2dldFgnLCAnZ2V0WScsICdnZXRaJywgJ2dldFcnIF07XHJcblxyXG5cdFx0Ly8gaW5pdGlhbGl6ZSB0aGUgYXJyYXlzXHJcblx0XHRmb3IgKCB2YXIgaSA9IDAsIGwgPSBhdHRyaWJ1dGVOYW1lcy5sZW5ndGg7IGkgPCBsOyBpICsrICkge1xyXG5cclxuXHRcdFx0dmFyIG5hbWUgPSBhdHRyaWJ1dGVOYW1lc1sgaSBdO1xyXG5cclxuXHRcdFx0YXR0ckFycmF5c1sgbmFtZSBdID0gW107XHJcblxyXG5cdFx0XHR2YXIgbW9ycGhBdHRyID0gZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF07XHJcblx0XHRcdGlmICggbW9ycGhBdHRyICkge1xyXG5cclxuXHRcdFx0XHRtb3JwaEF0dHJzQXJyYXlzWyBuYW1lIF0gPSBuZXcgQXJyYXkoIG1vcnBoQXR0ci5sZW5ndGggKS5maWxsKCkubWFwKCAoKSA9PiBbXSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBjb252ZXJ0IHRoZSBlcnJvciB0b2xlcmFuY2UgdG8gYW4gYW1vdW50IG9mIGRlY2ltYWwgcGxhY2VzIHRvIHRydW5jYXRlIHRvXHJcblx0XHR2YXIgZGVjaW1hbFNoaWZ0ID0gTWF0aC5sb2cxMCggMSAvIHRvbGVyYW5jZSApO1xyXG5cdFx0dmFyIHNoaWZ0TXVsdGlwbGllciA9IE1hdGgucG93KCAxMCwgZGVjaW1hbFNoaWZ0ICk7XHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSArKyApIHtcclxuXHJcblx0XHRcdHZhciBpbmRleCA9IGluZGljZXMgPyBpbmRpY2VzLmdldFgoIGkgKSA6IGk7XHJcblxyXG5cdFx0XHQvLyBHZW5lcmF0ZSBhIGhhc2ggZm9yIHRoZSB2ZXJ0ZXggYXR0cmlidXRlcyBhdCB0aGUgY3VycmVudCBpbmRleCAnaSdcclxuXHRcdFx0dmFyIGhhc2ggPSAnJztcclxuXHRcdFx0Zm9yICggdmFyIGogPSAwLCBsID0gYXR0cmlidXRlTmFtZXMubGVuZ3RoOyBqIDwgbDsgaiArKyApIHtcclxuXHJcblx0XHRcdFx0dmFyIG5hbWUgPSBhdHRyaWJ1dGVOYW1lc1sgaiBdO1xyXG5cdFx0XHRcdHZhciBhdHRyaWJ1dGUgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoIG5hbWUgKTtcclxuXHRcdFx0XHR2YXIgaXRlbVNpemUgPSBhdHRyaWJ1dGUuaXRlbVNpemU7XHJcblxyXG5cdFx0XHRcdGZvciAoIHZhciBrID0gMDsgayA8IGl0ZW1TaXplOyBrICsrICkge1xyXG5cclxuXHRcdFx0XHRcdC8vIGRvdWJsZSB0aWxkZSB0cnVuY2F0ZXMgdGhlIGRlY2ltYWwgdmFsdWVcclxuXHRcdFx0XHRcdGhhc2ggKz0gYCR7IH4gfiAoIGF0dHJpYnV0ZVsgZ2V0dGVyc1sgayBdIF0oIGluZGV4ICkgKiBzaGlmdE11bHRpcGxpZXIgKSB9LGA7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEFkZCBhbm90aGVyIHJlZmVyZW5jZSB0byB0aGUgdmVydGV4IGlmIGl0J3MgYWxyZWFkeVxyXG5cdFx0XHQvLyB1c2VkIGJ5IGFub3RoZXIgaW5kZXhcclxuXHRcdFx0aWYgKCBoYXNoIGluIGhhc2hUb0luZGV4ICkge1xyXG5cclxuXHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGhhc2hUb0luZGV4WyBoYXNoIF0gKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdC8vIGNvcHkgZGF0YSB0byB0aGUgbmV3IGluZGV4IGluIHRoZSBhdHRyaWJ1dGUgYXJyYXlzXHJcblx0XHRcdFx0Zm9yICggdmFyIGogPSAwLCBsID0gYXR0cmlidXRlTmFtZXMubGVuZ3RoOyBqIDwgbDsgaiArKyApIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgbmFtZSA9IGF0dHJpYnV0ZU5hbWVzWyBqIF07XHJcblx0XHRcdFx0XHR2YXIgYXR0cmlidXRlID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCBuYW1lICk7XHJcblx0XHRcdFx0XHR2YXIgbW9ycGhBdHRyID0gZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF07XHJcblx0XHRcdFx0XHR2YXIgaXRlbVNpemUgPSBhdHRyaWJ1dGUuaXRlbVNpemU7XHJcblx0XHRcdFx0XHR2YXIgbmV3YXJyYXkgPSBhdHRyQXJyYXlzWyBuYW1lIF07XHJcblx0XHRcdFx0XHR2YXIgbmV3TW9ycGhBcnJheXMgPSBtb3JwaEF0dHJzQXJyYXlzWyBuYW1lIF07XHJcblxyXG5cdFx0XHRcdFx0Zm9yICggdmFyIGsgPSAwOyBrIDwgaXRlbVNpemU7IGsgKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgZ2V0dGVyRnVuYyA9IGdldHRlcnNbIGsgXTtcclxuXHRcdFx0XHRcdFx0bmV3YXJyYXkucHVzaCggYXR0cmlidXRlWyBnZXR0ZXJGdW5jIF0oIGluZGV4ICkgKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmICggbW9ycGhBdHRyICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRmb3IgKCB2YXIgbSA9IDAsIG1sID0gbW9ycGhBdHRyLmxlbmd0aDsgbSA8IG1sOyBtICsrICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdG5ld01vcnBoQXJyYXlzWyBtIF0ucHVzaCggbW9ycGhBdHRyWyBtIF1bIGdldHRlckZ1bmMgXSggaW5kZXggKSApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGhhc2hUb0luZGV4WyBoYXNoIF0gPSBuZXh0SW5kZXg7XHJcblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBuZXh0SW5kZXggKTtcclxuXHRcdFx0XHRuZXh0SW5kZXggKys7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEdlbmVyYXRlIHR5cGVkIGFycmF5cyBmcm9tIG5ldyBhdHRyaWJ1dGUgYXJyYXlzIGFuZCB1cGRhdGVcclxuXHRcdC8vIHRoZSBhdHRyaWJ1dGVCdWZmZXJzXHJcblx0XHRjb25zdCByZXN1bHQgPSBnZW9tZXRyeS5jbG9uZSgpO1xyXG5cdFx0Zm9yICggdmFyIGkgPSAwLCBsID0gYXR0cmlidXRlTmFtZXMubGVuZ3RoOyBpIDwgbDsgaSArKyApIHtcclxuXHJcblx0XHRcdHZhciBuYW1lID0gYXR0cmlidXRlTmFtZXNbIGkgXTtcclxuXHRcdFx0dmFyIG9sZEF0dHJpYnV0ZSA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSggbmFtZSApO1xyXG5cclxuXHRcdFx0dmFyIGJ1ZmZlciA9IG5ldyBvbGRBdHRyaWJ1dGUuYXJyYXkuY29uc3RydWN0b3IoIGF0dHJBcnJheXNbIG5hbWUgXSApO1xyXG5cdFx0XHR2YXIgYXR0cmlidXRlID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZSggYnVmZmVyLCBvbGRBdHRyaWJ1dGUuaXRlbVNpemUsIG9sZEF0dHJpYnV0ZS5ub3JtYWxpemVkICk7XHJcblxyXG5cdFx0XHRyZXN1bHQuc2V0QXR0cmlidXRlKCBuYW1lLCBhdHRyaWJ1dGUgKTtcclxuXHJcblx0XHRcdC8vIFVwZGF0ZSB0aGUgYXR0cmlidXRlIGFycmF5c1xyXG5cdFx0XHRpZiAoIG5hbWUgaW4gbW9ycGhBdHRyc0FycmF5cyApIHtcclxuXHJcblx0XHRcdFx0Zm9yICggdmFyIGogPSAwOyBqIDwgbW9ycGhBdHRyc0FycmF5c1sgbmFtZSBdLmxlbmd0aDsgaiArKyApIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgb2xkTW9ycGhBdHRyaWJ1dGUgPSBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXVsgaiBdO1xyXG5cclxuXHRcdFx0XHRcdHZhciBidWZmZXIgPSBuZXcgb2xkTW9ycGhBdHRyaWJ1dGUuYXJyYXkuY29uc3RydWN0b3IoIG1vcnBoQXR0cnNBcnJheXNbIG5hbWUgXVsgaiBdICk7XHJcblx0XHRcdFx0XHR2YXIgbW9ycGhBdHRyaWJ1dGUgPSBuZXcgQnVmZmVyQXR0cmlidXRlKCBidWZmZXIsIG9sZE1vcnBoQXR0cmlidXRlLml0ZW1TaXplLCBvbGRNb3JwaEF0dHJpYnV0ZS5ub3JtYWxpemVkICk7XHJcblx0XHRcdFx0XHRyZXN1bHQubW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF1bIGogXSA9IG1vcnBoQXR0cmlidXRlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGluZGljZXNcclxuXHJcblx0XHRyZXN1bHQuc2V0SW5kZXgoIG5ld0luZGljZXMgKTtcclxuXHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge0J1ZmZlckdlb21ldHJ5fSBnZW9tZXRyeVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkcmF3TW9kZVxyXG5cdCAqIEByZXR1cm4ge0J1ZmZlckdlb21ldHJ5Pn1cclxuXHQgKi9cclxuXHR0b1RyaWFuZ2xlc0RyYXdNb2RlOiBmdW5jdGlvbiAoIGdlb21ldHJ5LCBkcmF3TW9kZSApIHtcclxuXHJcblx0XHRpZiAoIGRyYXdNb2RlID09PSBUcmlhbmdsZXNEcmF3TW9kZSApIHtcclxuXHJcblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHMudG9UcmlhbmdsZXNEcmF3TW9kZSgpOiBHZW9tZXRyeSBhbHJlYWR5IGRlZmluZWQgYXMgdHJpYW5nbGVzLicgKTtcclxuXHRcdFx0cmV0dXJuIGdlb21ldHJ5O1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGRyYXdNb2RlID09PSBUcmlhbmdsZUZhbkRyYXdNb2RlIHx8IGRyYXdNb2RlID09PSBUcmlhbmdsZVN0cmlwRHJhd01vZGUgKSB7XHJcblxyXG5cdFx0XHR2YXIgaW5kZXggPSBnZW9tZXRyeS5nZXRJbmRleCgpO1xyXG5cclxuXHRcdFx0Ly8gZ2VuZXJhdGUgaW5kZXggaWYgbm90IHByZXNlbnRcclxuXHJcblx0XHRcdGlmICggaW5kZXggPT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBpbmRpY2VzID0gW107XHJcblxyXG5cdFx0XHRcdHZhciBwb3NpdGlvbiA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSggJ3Bvc2l0aW9uJyApO1xyXG5cclxuXHRcdFx0XHRpZiAoIHBvc2l0aW9uICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgcG9zaXRpb24uY291bnQ7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpbmRpY2VzLnB1c2goIGkgKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Z2VvbWV0cnkuc2V0SW5kZXgoIGluZGljZXMgKTtcclxuXHRcdFx0XHRcdGluZGV4ID0gZ2VvbWV0cnkuZ2V0SW5kZXgoKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlscy50b1RyaWFuZ2xlc0RyYXdNb2RlKCk6IFVuZGVmaW5lZCBwb3NpdGlvbiBhdHRyaWJ1dGUuIFByb2Nlc3Npbmcgbm90IHBvc3NpYmxlLicgKTtcclxuXHRcdFx0XHRcdHJldHVybiBnZW9tZXRyeTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly9cclxuXHJcblx0XHRcdHZhciBudW1iZXJPZlRyaWFuZ2xlcyA9IGluZGV4LmNvdW50IC0gMjtcclxuXHRcdFx0dmFyIG5ld0luZGljZXMgPSBbXTtcclxuXHJcblx0XHRcdGlmICggZHJhd01vZGUgPT09IFRyaWFuZ2xlRmFuRHJhd01vZGUgKSB7XHJcblxyXG5cdFx0XHRcdC8vIGdsLlRSSUFOR0xFX0ZBTlxyXG5cclxuXHRcdFx0XHRmb3IgKCB2YXIgaSA9IDE7IGkgPD0gbnVtYmVyT2ZUcmlhbmdsZXM7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCAwICkgKTtcclxuXHRcdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSApICk7XHJcblx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAxICkgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0Ly8gZ2wuVFJJQU5HTEVfU1RSSVBcclxuXHJcblx0XHRcdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZUcmlhbmdsZXM7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBpICUgMiA9PT0gMCApIHtcclxuXHJcblx0XHRcdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSApICk7XHJcblx0XHRcdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDEgKSApO1xyXG5cdFx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAyICkgKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMiApICk7XHJcblx0XHRcdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDEgKSApO1xyXG5cdFx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKSApO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCAoIG5ld0luZGljZXMubGVuZ3RoIC8gMyApICE9PSBudW1iZXJPZlRyaWFuZ2xlcyApIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHMudG9UcmlhbmdsZXNEcmF3TW9kZSgpOiBVbmFibGUgdG8gZ2VuZXJhdGUgY29ycmVjdCBhbW91bnQgb2YgdHJpYW5nbGVzLicgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGJ1aWxkIGZpbmFsIGdlb21ldHJ5XHJcblxyXG5cdFx0XHR2YXIgbmV3R2VvbWV0cnkgPSBnZW9tZXRyeS5jbG9uZSgpO1xyXG5cdFx0XHRuZXdHZW9tZXRyeS5zZXRJbmRleCggbmV3SW5kaWNlcyApO1xyXG5cdFx0XHRuZXdHZW9tZXRyeS5jbGVhckdyb3VwcygpO1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ld0dlb21ldHJ5O1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlscy50b1RyaWFuZ2xlc0RyYXdNb2RlKCk6IFVua25vd24gZHJhdyBtb2RlOicsIGRyYXdNb2RlICk7XHJcblx0XHRcdHJldHVybiBnZW9tZXRyeTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGN1bGF0ZXMgdGhlIG1vcnBoZWQgYXR0cmlidXRlcyBvZiBhIG1vcnBoZWQvc2tpbm5lZCBCdWZmZXJHZW9tZXRyeS5cclxuXHQgKiBIZWxwZnVsIGZvciBSYXl0cmFjaW5nIG9yIERlY2Fscy5cclxuXHQgKiBAcGFyYW0ge01lc2ggfCBMaW5lIHwgUG9pbnRzfSBvYmplY3QgQW4gaW5zdGFuY2Ugb2YgTWVzaCwgTGluZSBvciBQb2ludHMuXHJcblx0ICogQHJldHVybiB7T2JqZWN0fSBBbiBPYmplY3Qgd2l0aCBvcmlnaW5hbCBwb3NpdGlvbi9ub3JtYWwgYXR0cmlidXRlcyBhbmQgbW9ycGhlZCBvbmVzLlxyXG5cdCAqL1xyXG5cdGNvbXB1dGVNb3JwaGVkQXR0cmlidXRlczogZnVuY3Rpb24gKCBvYmplY3QgKSB7XHJcblxyXG5cdFx0aWYgKCBvYmplY3QuZ2VvbWV0cnkuaXNCdWZmZXJHZW9tZXRyeSAhPT0gdHJ1ZSApIHtcclxuXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiBHZW9tZXRyeSBpcyBub3Qgb2YgdHlwZSBCdWZmZXJHZW9tZXRyeS4nICk7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgX3ZBID0gbmV3IFZlY3RvcjMoKTtcclxuXHRcdHZhciBfdkIgPSBuZXcgVmVjdG9yMygpO1xyXG5cdFx0dmFyIF92QyA9IG5ldyBWZWN0b3IzKCk7XHJcblxyXG5cdFx0dmFyIF90ZW1wQSA9IG5ldyBWZWN0b3IzKCk7XHJcblx0XHR2YXIgX3RlbXBCID0gbmV3IFZlY3RvcjMoKTtcclxuXHRcdHZhciBfdGVtcEMgPSBuZXcgVmVjdG9yMygpO1xyXG5cclxuXHRcdHZhciBfbW9ycGhBID0gbmV3IFZlY3RvcjMoKTtcclxuXHRcdHZhciBfbW9ycGhCID0gbmV3IFZlY3RvcjMoKTtcclxuXHRcdHZhciBfbW9ycGhDID0gbmV3IFZlY3RvcjMoKTtcclxuXHJcblx0XHRmdW5jdGlvbiBfY2FsY3VsYXRlTW9ycGhlZEF0dHJpYnV0ZURhdGEoXHJcblx0XHRcdG9iamVjdCxcclxuXHRcdFx0bWF0ZXJpYWwsXHJcblx0XHRcdGF0dHJpYnV0ZSxcclxuXHRcdFx0bW9ycGhBdHRyaWJ1dGUsXHJcblx0XHRcdG1vcnBoVGFyZ2V0c1JlbGF0aXZlLFxyXG5cdFx0XHRhLFxyXG5cdFx0XHRiLFxyXG5cdFx0XHRjLFxyXG5cdFx0XHRtb2RpZmllZEF0dHJpYnV0ZUFycmF5XHJcblx0XHQpIHtcclxuXHJcblx0XHRcdF92QS5mcm9tQnVmZmVyQXR0cmlidXRlKCBhdHRyaWJ1dGUsIGEgKTtcclxuXHRcdFx0X3ZCLmZyb21CdWZmZXJBdHRyaWJ1dGUoIGF0dHJpYnV0ZSwgYiApO1xyXG5cdFx0XHRfdkMuZnJvbUJ1ZmZlckF0dHJpYnV0ZSggYXR0cmlidXRlLCBjICk7XHJcblxyXG5cdFx0XHR2YXIgbW9ycGhJbmZsdWVuY2VzID0gb2JqZWN0Lm1vcnBoVGFyZ2V0SW5mbHVlbmNlcztcclxuXHJcblx0XHRcdGlmICggbWF0ZXJpYWwubW9ycGhUYXJnZXRzICYmIG1vcnBoQXR0cmlidXRlICYmIG1vcnBoSW5mbHVlbmNlcyApIHtcclxuXHJcblx0XHRcdFx0X21vcnBoQS5zZXQoIDAsIDAsIDAgKTtcclxuXHRcdFx0XHRfbW9ycGhCLnNldCggMCwgMCwgMCApO1xyXG5cdFx0XHRcdF9tb3JwaEMuc2V0KCAwLCAwLCAwICk7XHJcblxyXG5cdFx0XHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSBtb3JwaEF0dHJpYnV0ZS5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgaW5mbHVlbmNlID0gbW9ycGhJbmZsdWVuY2VzWyBpIF07XHJcblx0XHRcdFx0XHR2YXIgbW9ycGggPSBtb3JwaEF0dHJpYnV0ZVsgaSBdO1xyXG5cclxuXHRcdFx0XHRcdGlmICggaW5mbHVlbmNlID09PSAwICkgY29udGludWU7XHJcblxyXG5cdFx0XHRcdFx0X3RlbXBBLmZyb21CdWZmZXJBdHRyaWJ1dGUoIG1vcnBoLCBhICk7XHJcblx0XHRcdFx0XHRfdGVtcEIuZnJvbUJ1ZmZlckF0dHJpYnV0ZSggbW9ycGgsIGIgKTtcclxuXHRcdFx0XHRcdF90ZW1wQy5mcm9tQnVmZmVyQXR0cmlidXRlKCBtb3JwaCwgYyApO1xyXG5cclxuXHRcdFx0XHRcdGlmICggbW9ycGhUYXJnZXRzUmVsYXRpdmUgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRfbW9ycGhBLmFkZFNjYWxlZFZlY3RvciggX3RlbXBBLCBpbmZsdWVuY2UgKTtcclxuXHRcdFx0XHRcdFx0X21vcnBoQi5hZGRTY2FsZWRWZWN0b3IoIF90ZW1wQiwgaW5mbHVlbmNlICk7XHJcblx0XHRcdFx0XHRcdF9tb3JwaEMuYWRkU2NhbGVkVmVjdG9yKCBfdGVtcEMsIGluZmx1ZW5jZSApO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRfbW9ycGhBLmFkZFNjYWxlZFZlY3RvciggX3RlbXBBLnN1YiggX3ZBICksIGluZmx1ZW5jZSApO1xyXG5cdFx0XHRcdFx0XHRfbW9ycGhCLmFkZFNjYWxlZFZlY3RvciggX3RlbXBCLnN1YiggX3ZCICksIGluZmx1ZW5jZSApO1xyXG5cdFx0XHRcdFx0XHRfbW9ycGhDLmFkZFNjYWxlZFZlY3RvciggX3RlbXBDLnN1YiggX3ZDICksIGluZmx1ZW5jZSApO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRfdkEuYWRkKCBfbW9ycGhBICk7XHJcblx0XHRcdFx0X3ZCLmFkZCggX21vcnBoQiApO1xyXG5cdFx0XHRcdF92Qy5hZGQoIF9tb3JwaEMgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggb2JqZWN0LmlzU2tpbm5lZE1lc2ggKSB7XHJcblxyXG5cdFx0XHRcdG9iamVjdC5ib25lVHJhbnNmb3JtKCBhLCBfdkEgKTtcclxuXHRcdFx0XHRvYmplY3QuYm9uZVRyYW5zZm9ybSggYiwgX3ZCICk7XHJcblx0XHRcdFx0b2JqZWN0LmJvbmVUcmFuc2Zvcm0oIGMsIF92QyApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bW9kaWZpZWRBdHRyaWJ1dGVBcnJheVsgYSAqIDMgKyAwIF0gPSBfdkEueDtcclxuXHRcdFx0bW9kaWZpZWRBdHRyaWJ1dGVBcnJheVsgYSAqIDMgKyAxIF0gPSBfdkEueTtcclxuXHRcdFx0bW9kaWZpZWRBdHRyaWJ1dGVBcnJheVsgYSAqIDMgKyAyIF0gPSBfdkEuejtcclxuXHRcdFx0bW9kaWZpZWRBdHRyaWJ1dGVBcnJheVsgYiAqIDMgKyAwIF0gPSBfdkIueDtcclxuXHRcdFx0bW9kaWZpZWRBdHRyaWJ1dGVBcnJheVsgYiAqIDMgKyAxIF0gPSBfdkIueTtcclxuXHRcdFx0bW9kaWZpZWRBdHRyaWJ1dGVBcnJheVsgYiAqIDMgKyAyIF0gPSBfdkIuejtcclxuXHRcdFx0bW9kaWZpZWRBdHRyaWJ1dGVBcnJheVsgYyAqIDMgKyAwIF0gPSBfdkMueDtcclxuXHRcdFx0bW9kaWZpZWRBdHRyaWJ1dGVBcnJheVsgYyAqIDMgKyAxIF0gPSBfdkMueTtcclxuXHRcdFx0bW9kaWZpZWRBdHRyaWJ1dGVBcnJheVsgYyAqIDMgKyAyIF0gPSBfdkMuejtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGdlb21ldHJ5ID0gb2JqZWN0Lmdlb21ldHJ5O1xyXG5cdFx0dmFyIG1hdGVyaWFsID0gb2JqZWN0Lm1hdGVyaWFsO1xyXG5cclxuXHRcdHZhciBhLCBiLCBjO1xyXG5cdFx0dmFyIGluZGV4ID0gZ2VvbWV0cnkuaW5kZXg7XHJcblx0XHR2YXIgcG9zaXRpb25BdHRyaWJ1dGUgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uO1xyXG5cdFx0dmFyIG1vcnBoUG9zaXRpb24gPSBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMucG9zaXRpb247XHJcblx0XHR2YXIgbW9ycGhUYXJnZXRzUmVsYXRpdmUgPSBnZW9tZXRyeS5tb3JwaFRhcmdldHNSZWxhdGl2ZTtcclxuXHRcdHZhciBub3JtYWxBdHRyaWJ1dGUgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLm5vcm1hbDtcclxuXHRcdHZhciBtb3JwaE5vcm1hbCA9IGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcy5wb3NpdGlvbjtcclxuXHJcblx0XHR2YXIgZ3JvdXBzID0gZ2VvbWV0cnkuZ3JvdXBzO1xyXG5cdFx0dmFyIGRyYXdSYW5nZSA9IGdlb21ldHJ5LmRyYXdSYW5nZTtcclxuXHRcdHZhciBpLCBqLCBpbCwgamw7XHJcblx0XHR2YXIgZ3JvdXAsIGdyb3VwTWF0ZXJpYWw7XHJcblx0XHR2YXIgc3RhcnQsIGVuZDtcclxuXHJcblx0XHR2YXIgbW9kaWZpZWRQb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkoIHBvc2l0aW9uQXR0cmlidXRlLmNvdW50ICogcG9zaXRpb25BdHRyaWJ1dGUuaXRlbVNpemUgKTtcclxuXHRcdHZhciBtb2RpZmllZE5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkoIG5vcm1hbEF0dHJpYnV0ZS5jb3VudCAqIG5vcm1hbEF0dHJpYnV0ZS5pdGVtU2l6ZSApO1xyXG5cclxuXHRcdGlmICggaW5kZXggIT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHQvLyBpbmRleGVkIGJ1ZmZlciBnZW9tZXRyeVxyXG5cclxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBtYXRlcmlhbCApICkge1xyXG5cclxuXHRcdFx0XHRmb3IgKCBpID0gMCwgaWwgPSBncm91cHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0Z3JvdXAgPSBncm91cHNbIGkgXTtcclxuXHRcdFx0XHRcdGdyb3VwTWF0ZXJpYWwgPSBtYXRlcmlhbFsgZ3JvdXAubWF0ZXJpYWxJbmRleCBdO1xyXG5cclxuXHRcdFx0XHRcdHN0YXJ0ID0gTWF0aC5tYXgoIGdyb3VwLnN0YXJ0LCBkcmF3UmFuZ2Uuc3RhcnQgKTtcclxuXHRcdFx0XHRcdGVuZCA9IE1hdGgubWluKCAoIGdyb3VwLnN0YXJ0ICsgZ3JvdXAuY291bnQgKSwgKCBkcmF3UmFuZ2Uuc3RhcnQgKyBkcmF3UmFuZ2UuY291bnQgKSApO1xyXG5cclxuXHRcdFx0XHRcdGZvciAoIGogPSBzdGFydCwgamwgPSBlbmQ7IGogPCBqbDsgaiArPSAzICkge1xyXG5cclxuXHRcdFx0XHRcdFx0YSA9IGluZGV4LmdldFgoIGogKTtcclxuXHRcdFx0XHRcdFx0YiA9IGluZGV4LmdldFgoIGogKyAxICk7XHJcblx0XHRcdFx0XHRcdGMgPSBpbmRleC5nZXRYKCBqICsgMiApO1xyXG5cclxuXHRcdFx0XHRcdFx0X2NhbGN1bGF0ZU1vcnBoZWRBdHRyaWJ1dGVEYXRhKFxyXG5cdFx0XHRcdFx0XHRcdG9iamVjdCxcclxuXHRcdFx0XHRcdFx0XHRncm91cE1hdGVyaWFsLFxyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uQXR0cmlidXRlLFxyXG5cdFx0XHRcdFx0XHRcdG1vcnBoUG9zaXRpb24sXHJcblx0XHRcdFx0XHRcdFx0bW9ycGhUYXJnZXRzUmVsYXRpdmUsXHJcblx0XHRcdFx0XHRcdFx0YSwgYiwgYyxcclxuXHRcdFx0XHRcdFx0XHRtb2RpZmllZFBvc2l0aW9uXHJcblx0XHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0XHRfY2FsY3VsYXRlTW9ycGhlZEF0dHJpYnV0ZURhdGEoXHJcblx0XHRcdFx0XHRcdFx0b2JqZWN0LFxyXG5cdFx0XHRcdFx0XHRcdGdyb3VwTWF0ZXJpYWwsXHJcblx0XHRcdFx0XHRcdFx0bm9ybWFsQXR0cmlidXRlLFxyXG5cdFx0XHRcdFx0XHRcdG1vcnBoTm9ybWFsLFxyXG5cdFx0XHRcdFx0XHRcdG1vcnBoVGFyZ2V0c1JlbGF0aXZlLFxyXG5cdFx0XHRcdFx0XHRcdGEsIGIsIGMsXHJcblx0XHRcdFx0XHRcdFx0bW9kaWZpZWROb3JtYWxcclxuXHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdHN0YXJ0ID0gTWF0aC5tYXgoIDAsIGRyYXdSYW5nZS5zdGFydCApO1xyXG5cdFx0XHRcdGVuZCA9IE1hdGgubWluKCBpbmRleC5jb3VudCwgKCBkcmF3UmFuZ2Uuc3RhcnQgKyBkcmF3UmFuZ2UuY291bnQgKSApO1xyXG5cclxuXHRcdFx0XHRmb3IgKCBpID0gc3RhcnQsIGlsID0gZW5kOyBpIDwgaWw7IGkgKz0gMyApIHtcclxuXHJcblx0XHRcdFx0XHRhID0gaW5kZXguZ2V0WCggaSApO1xyXG5cdFx0XHRcdFx0YiA9IGluZGV4LmdldFgoIGkgKyAxICk7XHJcblx0XHRcdFx0XHRjID0gaW5kZXguZ2V0WCggaSArIDIgKTtcclxuXHJcblx0XHRcdFx0XHRfY2FsY3VsYXRlTW9ycGhlZEF0dHJpYnV0ZURhdGEoXHJcblx0XHRcdFx0XHRcdG9iamVjdCxcclxuXHRcdFx0XHRcdFx0bWF0ZXJpYWwsXHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uQXR0cmlidXRlLFxyXG5cdFx0XHRcdFx0XHRtb3JwaFBvc2l0aW9uLFxyXG5cdFx0XHRcdFx0XHRtb3JwaFRhcmdldHNSZWxhdGl2ZSxcclxuXHRcdFx0XHRcdFx0YSwgYiwgYyxcclxuXHRcdFx0XHRcdFx0bW9kaWZpZWRQb3NpdGlvblxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRfY2FsY3VsYXRlTW9ycGhlZEF0dHJpYnV0ZURhdGEoXHJcblx0XHRcdFx0XHRcdG9iamVjdCxcclxuXHRcdFx0XHRcdFx0bWF0ZXJpYWwsXHJcblx0XHRcdFx0XHRcdG5vcm1hbEF0dHJpYnV0ZSxcclxuXHRcdFx0XHRcdFx0bW9ycGhOb3JtYWwsXHJcblx0XHRcdFx0XHRcdG1vcnBoVGFyZ2V0c1JlbGF0aXZlLFxyXG5cdFx0XHRcdFx0XHRhLCBiLCBjLFxyXG5cdFx0XHRcdFx0XHRtb2RpZmllZE5vcm1hbFxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0gZWxzZSBpZiAoIHBvc2l0aW9uQXR0cmlidXRlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHQvLyBub24taW5kZXhlZCBidWZmZXIgZ2VvbWV0cnlcclxuXHJcblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggbWF0ZXJpYWwgKSApIHtcclxuXHJcblx0XHRcdFx0Zm9yICggaSA9IDAsIGlsID0gZ3JvdXBzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRcdGdyb3VwID0gZ3JvdXBzWyBpIF07XHJcblx0XHRcdFx0XHRncm91cE1hdGVyaWFsID0gbWF0ZXJpYWxbIGdyb3VwLm1hdGVyaWFsSW5kZXggXTtcclxuXHJcblx0XHRcdFx0XHRzdGFydCA9IE1hdGgubWF4KCBncm91cC5zdGFydCwgZHJhd1JhbmdlLnN0YXJ0ICk7XHJcblx0XHRcdFx0XHRlbmQgPSBNYXRoLm1pbiggKCBncm91cC5zdGFydCArIGdyb3VwLmNvdW50ICksICggZHJhd1JhbmdlLnN0YXJ0ICsgZHJhd1JhbmdlLmNvdW50ICkgKTtcclxuXHJcblx0XHRcdFx0XHRmb3IgKCBqID0gc3RhcnQsIGpsID0gZW5kOyBqIDwgamw7IGogKz0gMyApIHtcclxuXHJcblx0XHRcdFx0XHRcdGEgPSBqO1xyXG5cdFx0XHRcdFx0XHRiID0gaiArIDE7XHJcblx0XHRcdFx0XHRcdGMgPSBqICsgMjtcclxuXHJcblx0XHRcdFx0XHRcdF9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YShcclxuXHRcdFx0XHRcdFx0XHRvYmplY3QsXHJcblx0XHRcdFx0XHRcdFx0Z3JvdXBNYXRlcmlhbCxcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbkF0dHJpYnV0ZSxcclxuXHRcdFx0XHRcdFx0XHRtb3JwaFBvc2l0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdG1vcnBoVGFyZ2V0c1JlbGF0aXZlLFxyXG5cdFx0XHRcdFx0XHRcdGEsIGIsIGMsXHJcblx0XHRcdFx0XHRcdFx0bW9kaWZpZWRQb3NpdGlvblxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdFx0X2NhbGN1bGF0ZU1vcnBoZWRBdHRyaWJ1dGVEYXRhKFxyXG5cdFx0XHRcdFx0XHRcdG9iamVjdCxcclxuXHRcdFx0XHRcdFx0XHRncm91cE1hdGVyaWFsLFxyXG5cdFx0XHRcdFx0XHRcdG5vcm1hbEF0dHJpYnV0ZSxcclxuXHRcdFx0XHRcdFx0XHRtb3JwaE5vcm1hbCxcclxuXHRcdFx0XHRcdFx0XHRtb3JwaFRhcmdldHNSZWxhdGl2ZSxcclxuXHRcdFx0XHRcdFx0XHRhLCBiLCBjLFxyXG5cdFx0XHRcdFx0XHRcdG1vZGlmaWVkTm9ybWFsXHJcblx0XHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRzdGFydCA9IE1hdGgubWF4KCAwLCBkcmF3UmFuZ2Uuc3RhcnQgKTtcclxuXHRcdFx0XHRlbmQgPSBNYXRoLm1pbiggcG9zaXRpb25BdHRyaWJ1dGUuY291bnQsICggZHJhd1JhbmdlLnN0YXJ0ICsgZHJhd1JhbmdlLmNvdW50ICkgKTtcclxuXHJcblx0XHRcdFx0Zm9yICggaSA9IHN0YXJ0LCBpbCA9IGVuZDsgaSA8IGlsOyBpICs9IDMgKSB7XHJcblxyXG5cdFx0XHRcdFx0YSA9IGk7XHJcblx0XHRcdFx0XHRiID0gaSArIDE7XHJcblx0XHRcdFx0XHRjID0gaSArIDI7XHJcblxyXG5cdFx0XHRcdFx0X2NhbGN1bGF0ZU1vcnBoZWRBdHRyaWJ1dGVEYXRhKFxyXG5cdFx0XHRcdFx0XHRvYmplY3QsXHJcblx0XHRcdFx0XHRcdG1hdGVyaWFsLFxyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbkF0dHJpYnV0ZSxcclxuXHRcdFx0XHRcdFx0bW9ycGhQb3NpdGlvbixcclxuXHRcdFx0XHRcdFx0bW9ycGhUYXJnZXRzUmVsYXRpdmUsXHJcblx0XHRcdFx0XHRcdGEsIGIsIGMsXHJcblx0XHRcdFx0XHRcdG1vZGlmaWVkUG9zaXRpb25cclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0X2NhbGN1bGF0ZU1vcnBoZWRBdHRyaWJ1dGVEYXRhKFxyXG5cdFx0XHRcdFx0XHRvYmplY3QsXHJcblx0XHRcdFx0XHRcdG1hdGVyaWFsLFxyXG5cdFx0XHRcdFx0XHRub3JtYWxBdHRyaWJ1dGUsXHJcblx0XHRcdFx0XHRcdG1vcnBoTm9ybWFsLFxyXG5cdFx0XHRcdFx0XHRtb3JwaFRhcmdldHNSZWxhdGl2ZSxcclxuXHRcdFx0XHRcdFx0YSwgYiwgYyxcclxuXHRcdFx0XHRcdFx0bW9kaWZpZWROb3JtYWxcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIG1vcnBoZWRQb3NpdGlvbkF0dHJpYnV0ZSA9IG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKCBtb2RpZmllZFBvc2l0aW9uLCAzICk7XHJcblx0XHR2YXIgbW9ycGhlZE5vcm1hbEF0dHJpYnV0ZSA9IG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKCBtb2RpZmllZE5vcm1hbCwgMyApO1xyXG5cclxuXHRcdHJldHVybiB7XHJcblxyXG5cdFx0XHRwb3NpdGlvbkF0dHJpYnV0ZTogcG9zaXRpb25BdHRyaWJ1dGUsXHJcblx0XHRcdG5vcm1hbEF0dHJpYnV0ZTogbm9ybWFsQXR0cmlidXRlLFxyXG5cdFx0XHRtb3JwaGVkUG9zaXRpb25BdHRyaWJ1dGU6IG1vcnBoZWRQb3NpdGlvbkF0dHJpYnV0ZSxcclxuXHRcdFx0bW9ycGhlZE5vcm1hbEF0dHJpYnV0ZTogbW9ycGhlZE5vcm1hbEF0dHJpYnV0ZVxyXG5cclxuXHRcdH07XHJcblxyXG5cdH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgeyBCdWZmZXJHZW9tZXRyeVV0aWxzIH07XHJcbiIsIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxyXG5cclxuLy8gVGhpcyBmaWxlIGFpbXMgdG8gbWFrZSBjb21tdW5pY2F0aW9tIGJldHdlZW4gY2xpZW50IGFuZCBzZXJ2ZXIgYSBsb3QgZWFzaWVyLCB1c2luZyBwcm9taXNlXHJcblxyXG4vLy0tLS0tLS0tLS0tLS1bICAgSW1wb3J0cyAgIF0tLS0tLS0tLS0tLS0tXFxcXFxyXG5pbXBvcnQgeyBQcmlvcml0eVF1ZXVlIH0gZnJvbSBcIi4uL0FsZ29yaXRobXMvUHJpb3JpdHlRdWV1ZVwiO1xyXG5pbXBvcnQgKiBhcyBKb2kgZnJvbSBcImpvaVwiO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tW0NvcmUgVmFyaWFibGVzXS0tLS0tLS0tLS0tLS1cXFxcXHJcbmxldCBjbGllbnQ7XHJcbmxldCBRdWV1ZSA9IG5ldyBQcmlvcml0eVF1ZXVlKChhLCBiKSA9PiBhLnByb3JpdHkgPiBiLnByb3JpdHkpO1xyXG5cclxuLyoqXHJcbiAqICBAcGFyYW0ge3N0cmluZ30gc29ja2V0IC0gVGhlIHNvY2tldCBpbyBDbGllbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydFNldmVyQ2xpZW50Q29tbXVuaWNhdGlvbihzb2NrZXQpIHtcclxuICBjbGllbnQgPSBzb2NrZXQ7XHJcblxyXG4gIC8vRGF0YSBIYW5kc2hha2VcclxuICBzb2NrZXQuZW1pdChcIkNvbm5lY3Rpb25Fc3RhYmxpc2VkXCIsIERhdGUubm93KCkpO1xyXG59XHJcblxyXG4vKipcclxuICogIEBwYXJhbSB7c3RyaW5nfSBldmVudCAtIFRoZSBFdmVudCBuYW1lXHJcbiAqICBAcGFyYW0ge2FycmF5fSBkYXRhICAgLSBUaGUgZGF0YSB0byBzZW5kIHRvIHRoZSBzZXJ2ZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kRGF0YVdpdGhQcm9taXNlKGV2ZW50LCBkYXRhKSB7XHJcbiAgLy8tLS0tLS0tLS0tLS0tWyAgIENyZWF0ZSBhIGJhc2ljIHByb21pc2UgdG8gcmV0dXJuIGRhdGEgICBdLS0tLS0tLS0tLS0tLVxcXFxcclxuICBjb25zdCBEYXRhUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGxldCByZXNvbHZlZCA9IGZhbHNlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY2xpZW50LmVtaXQoZXZlbnQsIC4uLmRhdGEpO1xyXG5cclxuICAgICAgY2xpZW50Lm9uKGV2ZW50ICsgXCJfQ2FsbGJhY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcclxuICAgICAgICByZXNvbHZlKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJlc29sdmVkID0gdHJ1ZTtcclxuICAgICAgcmVqZWN0KGVycik7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHJlc29sdmVkID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcclxuICAgICAgICByZWplY3QoXCJObyBkYXRhIHJldHVybmVkIHdpdGhpbiAyIHNlY29uZHMsIGlzIHRoZXJlIGEgZGF0YSBjYWxsYmFjaz9cIik7XHJcbiAgICAgIH1cclxuICAgIH0sIDIwMDApO1xyXG4gIH0pO1xyXG4gIHJldHVybiBEYXRhUHJvbWlzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqICBAcGFyYW0ge3N0cmluZ30gZXZlbnQgICAgICAgIC0gVGhlIEV2ZW50IG5hbWVcclxuICogIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrICAgLSBUaGUgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBkYXRhIGJhY2tcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5Ub0V2ZW50KGV2ZW50LCBjYWxsYmFjaykge1xyXG4gIC8vIEF0dGFjaCBldmVudCBoYW5kbGUgdG8gZnVuY3Rpb25zXHJcbiAgY2xpZW50Lm9uKGV2ZW50LCBjYWxsYmFjayk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgICAtIFRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgbGlzdGVuIHRvIGFsbCBldmVudHMgc2VudCB0byB0aGUgY2xpZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoVG9NYWluRXZlbnRTdHJlYW0oY2FsbGJhY2spIHtcclxuICBjbGllbnQub25BbnkoKGV2ZW50TmFtZSwgLi4uYXJncykgPT4ge1xyXG4gICAgY2FsbGJhY2soZXZlbnROYW1lLCBhcmdzKTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqICBAcGFyYW0ge3N0cmluZ30gZXZlbnQgICAgICAgIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIGxpc3RlbiB0b1xyXG4gKiAgQHBhcmFtIHtzY2VtYX0gc2NlbWEgICAgICAgICAtIFRoZSBkYXRhIHNjaGVtZSB0byBmb2xvd1xyXG4gKiAgQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgICAtIFRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGRhdGFcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0ZW5Gb3JFdmVudFdpdGhTY2hlbWFWYWxpZGF0aW9uKFxyXG4gIGV2ZW50LFxyXG4gIHNjZW1hLFxyXG4gIGNhbGxiYWNrXHJcbikge1xyXG4gIGxpc3RlblRvRXZlbnQoZXZlbnQsIChhcmdzKSA9PiB7XHJcbiAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gc2NlbWEudmFsaWRhdGUoYXJncyk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2NlaG1hIENoZWNrIEZhaWxlZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhbGxiYWNrKHZhbHVlKTtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF0YVRvUXVldWUoZXZlbnQsIGRhdGEsIGNhbGxiYWNrLCBwcm9yaXR5ID0gMSkge1xyXG4gIFF1ZXVlLnB1c2goeyBwcm9yaXR5LCBpbnB1dDogW2V2ZW50LCBkYXRhLCBjYWxsYmFja10gfSk7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLVsgICBBbGwgTm9uIGVzc2VzbnRpYWwgY29tbXVuaWNhdGlvbiAgIF0tLS0tLS0tLS0tLS0tXFxcXFxyXG5zZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XHJcbiAgaWYgKCFRdWV1ZS5pc0VtcHR5KCkpIHtcclxuICAgIGxldCBmdW5jID0gUXVldWUucG9wKCk7XHJcbiAgICBsZXQgaW5wdXQgPSBmdW5jLmlucHV0O1xyXG4gICAgbGV0IGNhbGxCYWNrID0gaW5wdXRbMl07XHJcbiAgICB0cnkge1xyXG4gICAgICAvL0Rlc3RydWN0dXJlIGFuZCBzZW5kIGRhdGFcclxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCBzZW5kRGF0YVdpdGhQcm9taXNlKGlucHV0WzBdLCAuLi5pbnB1dFsxXSk7XHJcbiAgICAgIGNhbGxCYWNrKGZhbHNlLCBkYXRhKTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICBjYWxsQmFjayh0cnVlLCBbXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59LCA1MDApO1xyXG4iLCIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcclxuXHJcbmltcG9ydCB7IEFtYmllbnRMaWdodCwgRGlyZWN0aW9uYWxMaWdodCwgUG9pbnRMaWdodCB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpcmVjdGlvbmFsTGlnaHQoU2NlbmUsIGNvbG9yLCBicmlnaHRuZXNzLCBwb3MpIHtcclxuICAvLyAtLS0tLS0tLS0tIFtTaW1wbGUgRGlyZWN0aW9uYWwgTGlnaHQgTWFuYWdlcl0gLS0tLS0tLS0tLSBcXFxcXHJcbiAgY29uc3QgZGlyZWN0aW9uYWxMaWdodCA9IG5ldyBEaXJlY3Rpb25hbExpZ2h0KGNvbG9yLCBicmlnaHRuZXNzLCAxMDApO1xyXG4gIGRpcmVjdGlvbmFsTGlnaHQucG9zaXRpb24uc2V0KC4uLnBvcyk7IC8vIEVTNiBPbmx5IHdheSB0byBkZXN0cnVjdHVyZSBQT1MgYXJyYXlcclxuXHJcbiAgLy9TaGFkb3duIE1hbmFnZXJzXHJcbiAgZGlyZWN0aW9uYWxMaWdodC5jYXN0U2hhZG93ID0gZmFsc2U7XHJcblxyXG4gIC8vQWRkIHRvIFNjZW5lXHJcbiAgU2NlbmUuYWRkKGRpcmVjdGlvbmFsTGlnaHQpO1xyXG4gIHJldHVybiBkaXJlY3Rpb25hbExpZ2h0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW1iaWVudExpZ2h0KFNjZW5lLCBjb2xvciwgYnJpZ2h0bmVzcykge1xyXG4gIGNvbnN0IGxpZ2h0ID0gbmV3IEFtYmllbnRMaWdodChjb2xvciwgYnJpZ2h0bmVzcyk7IC8vIHNvZnQgd2hpdGUgbGlnaHRcclxuICBTY2VuZS5hZGQobGlnaHQpO1xyXG4gIHJldHVybiBsaWdodDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvaW50TGlnaHQoY29sb3IsIGJyaWdodG5lc3MsIHBvcywgaW50ZW5zaXR5KXtcclxuICBjb25zdCBQb2ludExpZ2h0TmV3ID0gbmV3IFBvaW50TGlnaHQoY29sb3IsIGJyaWdodG5lc3MsIGludGVuc2l0eSlcclxuICBQb2ludExpZ2h0TmV3LnBvc2l0aW9uLnNldCguLi5wb3MpXHJcbiAgcmV0dXJuIFBvaW50TGlnaHROZXdcclxufSBcclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxudmFyIGRlZmluaXRpb25zX3BlcmxpbiA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG4vLyBGcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9odWdoc2svZ2xzbC1ub2lzZS9ibG9iL21hc3Rlci9wZXJpb2RpYy8yZC5nbHNsXFxuXFxuLy9cXG4vLyBHTFNMIHRleHR1cmVsZXNzIGNsYXNzaWMgMkQgbm9pc2UgXFxcImNub2lzZVxcXCIsXFxuLy8gd2l0aCBhbiBSU0wtc3R5bGUgcGVyaW9kaWMgdmFyaWFudCBcXFwicG5vaXNlXFxcIi5cXG4vLyBBdXRob3I6ICBTdGVmYW4gR3VzdGF2c29uIChzdGVmYW4uZ3VzdGF2c29uQGxpdS5zZSlcXG4vLyBWZXJzaW9uOiAyMDExLTA4LTIyXFxuLy9cXG4vLyBNYW55IHRoYW5rcyB0byBJYW4gTWNFd2FuIG9mIEFzaGltYSBBcnRzIGZvciB0aGVcXG4vLyBpZGVhcyBmb3IgcGVybXV0YXRpb24gYW5kIGdyYWRpZW50IHNlbGVjdGlvbi5cXG4vL1xcbi8vIENvcHlyaWdodCAoYykgMjAxMSBTdGVmYW4gR3VzdGF2c29uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZS5cXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYXNoaW1hL3dlYmdsLW5vaXNlXFxuLy9cXG5cXG52ZWM0IG1vZDI4OSh2ZWM0IHgpIHsgcmV0dXJuIHggLSBmbG9vcih4ICogKDEuMCAvIDI4OS4wKSkgKiAyODkuMDsgfVxcblxcbnZlYzQgcGVybXV0ZSh2ZWM0IHgpIHsgcmV0dXJuIG1vZDI4OSgoKHggKiAzNC4wKSArIDEuMCkgKiB4KTsgfVxcblxcbnZlYzQgdGF5bG9ySW52U3FydCh2ZWM0IHIpIHsgcmV0dXJuIDEuNzkyODQyOTE0MDAxNTkgLSAwLjg1MzczNDcyMDk1MzE0ICogcjsgfVxcblxcbnZlYzIgZmFkZSh2ZWMyIHQpIHsgcmV0dXJuIHQgKiB0ICogdCAqICh0ICogKHQgKiA2LjAgLSAxNS4wKSArIDEwLjApOyB9XFxuXFxuZmxvYXQgbWFwKGZsb2F0IHZhbHVlLCBmbG9hdCBtaW4xLCBmbG9hdCBtYXgxLCBmbG9hdCBtaW4yLCBmbG9hdCBtYXgyKSB7XFxuICByZXR1cm4gbWluMiArICh2YWx1ZSAtIG1pbjEpICogKG1heDIgLSBtaW4yKSAvIChtYXgxIC0gbWluMSk7XFxufVxcblxcbi8vIENsYXNzaWMgUGVybGluIG5vaXNlLCBwZXJpb2RpYyB2YXJpYW50XFxuZmxvYXQgcGVybGluKHZlYzIgUCkge1xcblxcbiAgdmVjMiByZXAgPSB2ZWMyKDI1NS4wLCAyNTUuMCk7XFxuXFxuICB2ZWM0IFBpID0gZmxvb3IoUC54eXh5KSArIHZlYzQoMC4wLCAwLjAsIDEuMCwgMS4wKTtcXG4gIHZlYzQgUGYgPSBmcmFjdChQLnh5eHkpIC0gdmVjNCgwLjAsIDAuMCwgMS4wLCAxLjApO1xcbiAgUGkgPSBtb2QoUGksIHJlcC54eXh5KTsgLy8gVG8gY3JlYXRlIG5vaXNlIHdpdGggZXhwbGljaXQgcGVyaW9kXFxuICBQaSA9IG1vZDI4OShQaSk7ICAgICAgICAvLyBUbyBhdm9pZCB0cnVuY2F0aW9uIGVmZmVjdHMgaW4gcGVybXV0YXRpb25cXG4gIHZlYzQgaXggPSBQaS54enh6O1xcbiAgdmVjNCBpeSA9IFBpLnl5d3c7XFxuICB2ZWM0IGZ4ID0gUGYueHp4ejtcXG4gIHZlYzQgZnkgPSBQZi55eXd3O1xcblxcbiAgdmVjNCBpID0gcGVybXV0ZShwZXJtdXRlKGl4KSArIGl5KTtcXG5cXG4gIHZlYzQgZ3ggPSBmcmFjdChpICogKDEuMCAvIDQxLjApKSAqIDIuMCAtIDEuMDtcXG4gIHZlYzQgZ3kgPSBhYnMoZ3gpIC0gMC41O1xcbiAgdmVjNCB0eCA9IGZsb29yKGd4ICsgMC41KTtcXG4gIGd4ID0gZ3ggLSB0eDtcXG5cXG4gIHZlYzIgZzAwID0gdmVjMihneC54LCBneS54KTtcXG4gIHZlYzIgZzEwID0gdmVjMihneC55LCBneS55KTtcXG4gIHZlYzIgZzAxID0gdmVjMihneC56LCBneS56KTtcXG4gIHZlYzIgZzExID0gdmVjMihneC53LCBneS53KTtcXG5cXG4gIHZlYzQgbm9ybSA9IHRheWxvckludlNxcnQoXFxuICAgICAgdmVjNChkb3QoZzAwLCBnMDApLCBkb3QoZzAxLCBnMDEpLCBkb3QoZzEwLCBnMTApLCBkb3QoZzExLCBnMTEpKSk7XFxuICBnMDAgKj0gbm9ybS54O1xcbiAgZzAxICo9IG5vcm0ueTtcXG4gIGcxMCAqPSBub3JtLno7XFxuICBnMTEgKj0gbm9ybS53O1xcblxcbiAgZmxvYXQgbjAwID0gZG90KGcwMCwgdmVjMihmeC54LCBmeS54KSk7XFxuICBmbG9hdCBuMTAgPSBkb3QoZzEwLCB2ZWMyKGZ4LnksIGZ5LnkpKTtcXG4gIGZsb2F0IG4wMSA9IGRvdChnMDEsIHZlYzIoZngueiwgZnkueikpO1xcbiAgZmxvYXQgbjExID0gZG90KGcxMSwgdmVjMihmeC53LCBmeS53KSk7XFxuXFxuICB2ZWMyIGZhZGVfeHkgPSBmYWRlKFBmLnh5KTtcXG4gIHZlYzIgbl94ID0gbWl4KHZlYzIobjAwLCBuMDEpLCB2ZWMyKG4xMCwgbjExKSwgZmFkZV94eS54KTtcXG4gIGZsb2F0IG5feHkgPSBtaXgobl94LngsIG5feC55LCBmYWRlX3h5LnkpO1xcbiAgcmV0dXJuIG1hcCgyLjMgKiBuX3h5LCAtMS4wLCAxLjAsIDAuMCwgMS4wKTtcXG59XFxuXFxuZmxvYXQgZmJtKHZlYzIgcG9zLCB2ZWM0IHByb3BzKSB7XFxuICBmbG9hdCBwZXJzaXN0YW5jZSA9IHByb3BzLng7XFxuICBmbG9hdCBsYWN1bmFyaXR5ID0gcHJvcHMueTtcXG4gIGZsb2F0IHJlZGlzdHJpYnV0aW9uID0gcHJvcHMuejtcXG4gIGludCBvY3RhdmVzID0gaW50KHByb3BzLncpO1xcblxcbiAgZmxvYXQgcmVzdWx0ID0gMC4wO1xcbiAgZmxvYXQgYW1wbGl0dWRlID0gMS4wO1xcbiAgZmxvYXQgZnJlcXVlbmN5ID0gMS4wO1xcbiAgZmxvYXQgbWF4aW11bSA9IGFtcGxpdHVkZTtcXG5cXG4gIGZvciAoaW50IGkgPSAwOyBpIDwgMjsgaSsrKSB7XFxuXFxuICAgIHZlYzIgcCA9IHBvcy54eSAqIGZyZXF1ZW5jeTtcXG5cXG4gICAgZmxvYXQgbm9pc2VWYWwgPSBwZXJsaW4ocCk7XFxuICAgIHJlc3VsdCArPSBub2lzZVZhbCAqIGFtcGxpdHVkZTtcXG5cXG4gICAgZnJlcXVlbmN5ICo9IGxhY3VuYXJpdHk7XFxuICAgIGFtcGxpdHVkZSAqPSBwZXJzaXN0YW5jZTtcXG4gICAgbWF4aW11bSArPSBhbXBsaXR1ZGU7XFxuICB9XFxuXFxuICBmbG9hdCByZWRpc3RyaWJ1dGVkID0gcG93KHJlc3VsdCwgcmVkaXN0cmlidXRpb24pO1xcbiAgcmV0dXJuIHJlZGlzdHJpYnV0ZWQgLyBtYXhpbXVtO1xcbn1cXG5cIjsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG5cclxudmFyIHAgPSBbXHJcbiAgMTUxLFxyXG4gIDE2MCxcclxuICAxMzcsXHJcbiAgOTEsXHJcbiAgOTAsXHJcbiAgMTUsXHJcbiAgMTMxLFxyXG4gIDEzLFxyXG4gIDIwMSxcclxuICA5NSxcclxuICA5NixcclxuICA1MyxcclxuICAxOTQsXHJcbiAgMjMzLFxyXG4gIDcsXHJcbiAgMjI1LFxyXG4gIDE0MCxcclxuICAzNixcclxuICAxMDMsXHJcbiAgMzAsXHJcbiAgNjksXHJcbiAgMTQyLFxyXG4gIDgsXHJcbiAgOTksXHJcbiAgMzcsXHJcbiAgMjQwLFxyXG4gIDIxLFxyXG4gIDEwLFxyXG4gIDIzLFxyXG4gIDE5MCxcclxuICA2LFxyXG4gIDE0OCxcclxuICAyNDcsXHJcbiAgMTIwLFxyXG4gIDIzNCxcclxuICA3NSxcclxuICAwLFxyXG4gIDI2LFxyXG4gIDE5NyxcclxuICA2MixcclxuICA5NCxcclxuICAyNTIsXHJcbiAgMjE5LFxyXG4gIDIwMyxcclxuICAxMTcsXHJcbiAgMzUsXHJcbiAgMTEsXHJcbiAgMzIsXHJcbiAgNTcsXHJcbiAgMTc3LFxyXG4gIDMzLFxyXG4gIDg4LFxyXG4gIDIzNyxcclxuICAxNDksXHJcbiAgNTYsXHJcbiAgODcsXHJcbiAgMTc0LFxyXG4gIDIwLFxyXG4gIDEyNSxcclxuICAxMzYsXHJcbiAgMTcxLFxyXG4gIDE2OCxcclxuICA2OCxcclxuICAxNzUsXHJcbiAgNzQsXHJcbiAgMTY1LFxyXG4gIDcxLFxyXG4gIDEzNCxcclxuICAxMzksXHJcbiAgNDgsXHJcbiAgMjcsXHJcbiAgMTY2LFxyXG4gIDc3LFxyXG4gIDE0NixcclxuICAxNTgsXHJcbiAgMjMxLFxyXG4gIDgzLFxyXG4gIDExMSxcclxuICAyMjksXHJcbiAgMTIyLFxyXG4gIDYwLFxyXG4gIDIxMSxcclxuICAxMzMsXHJcbiAgMjMwLFxyXG4gIDIyMCxcclxuICAxMDUsXHJcbiAgOTIsXHJcbiAgNDEsXHJcbiAgNTUsXHJcbiAgNDYsXHJcbiAgMjQ1LFxyXG4gIDQwLFxyXG4gIDI0NCxcclxuICAxMDIsXHJcbiAgMTQzLFxyXG4gIDU0LFxyXG4gIDY1LFxyXG4gIDI1LFxyXG4gIDYzLFxyXG4gIDE2MSxcclxuICAxLFxyXG4gIDIxNixcclxuICA4MCxcclxuICA3MyxcclxuICAyMDksXHJcbiAgNzYsXHJcbiAgMTMyLFxyXG4gIDE4NyxcclxuICAyMDgsXHJcbiAgODksXHJcbiAgMTgsXHJcbiAgMTY5LFxyXG4gIDIwMCxcclxuICAxOTYsXHJcbiAgMTM1LFxyXG4gIDEzMCxcclxuICAxMTYsXHJcbiAgMTg4LFxyXG4gIDE1OSxcclxuICA4NixcclxuICAxNjQsXHJcbiAgMTAwLFxyXG4gIDEwOSxcclxuICAxOTgsXHJcbiAgMTczLFxyXG4gIDE4NixcclxuICAzLFxyXG4gIDY0LFxyXG4gIDUyLFxyXG4gIDIxNyxcclxuICAyMjYsXHJcbiAgMjUwLFxyXG4gIDEyNCxcclxuICAxMjMsXHJcbiAgNSxcclxuICAyMDIsXHJcbiAgMzgsXHJcbiAgMTQ3LFxyXG4gIDExOCxcclxuICAxMjYsXHJcbiAgMjU1LFxyXG4gIDgyLFxyXG4gIDg1LFxyXG4gIDIxMixcclxuICAyMDcsXHJcbiAgMjA2LFxyXG4gIDU5LFxyXG4gIDIyNyxcclxuICA0NyxcclxuICAxNixcclxuICA1OCxcclxuICAxNyxcclxuICAxODIsXHJcbiAgMTg5LFxyXG4gIDI4LFxyXG4gIDQyLFxyXG4gIDIyMyxcclxuICAxODMsXHJcbiAgMTcwLFxyXG4gIDIxMyxcclxuICAxMTksXHJcbiAgMjQ4LFxyXG4gIDE1MixcclxuICAyLFxyXG4gIDQ0LFxyXG4gIDE1NCxcclxuICAxNjMsXHJcbiAgNzAsXHJcbiAgMjIxLFxyXG4gIDE1MyxcclxuICAxMDEsXHJcbiAgMTU1LFxyXG4gIDE2NyxcclxuICA0MyxcclxuICAxNzIsXHJcbiAgOSxcclxuICAxMjksXHJcbiAgMjIsXHJcbiAgMzksXHJcbiAgMjUzLFxyXG4gIDE5LFxyXG4gIDk4LFxyXG4gIDEwOCxcclxuICAxMTAsXHJcbiAgNzksXHJcbiAgMTEzLFxyXG4gIDIyNCxcclxuICAyMzIsXHJcbiAgMTc4LFxyXG4gIDE4NSxcclxuICAxMTIsXHJcbiAgMTA0LFxyXG4gIDIxOCxcclxuICAyNDYsXHJcbiAgOTcsXHJcbiAgMjI4LFxyXG4gIDI1MSxcclxuICAzNCxcclxuICAyNDIsXHJcbiAgMTkzLFxyXG4gIDIzOCxcclxuICAyMTAsXHJcbiAgMTQ0LFxyXG4gIDEyLFxyXG4gIDE5MSxcclxuICAxNzksXHJcbiAgMTYyLFxyXG4gIDI0MSxcclxuICA4MSxcclxuICA1MSxcclxuICAxNDUsXHJcbiAgMjM1LFxyXG4gIDI0OSxcclxuICAxNCxcclxuICAyMzksXHJcbiAgMTA3LFxyXG4gIDQ5LFxyXG4gIDE5MixcclxuICAyMTQsXHJcbiAgMzEsXHJcbiAgMTgxLFxyXG4gIDE5OSxcclxuICAxMDYsXHJcbiAgMTU3LFxyXG4gIDE4NCxcclxuICA4NCxcclxuICAyMDQsXHJcbiAgMTc2LFxyXG4gIDExNSxcclxuICAxMjEsXHJcbiAgNTAsXHJcbiAgNDUsXHJcbiAgMTI3LFxyXG4gIDQsXHJcbiAgMTUwLFxyXG4gIDI1NCxcclxuICAxMzgsXHJcbiAgMjM2LFxyXG4gIDIwNSxcclxuICA5MyxcclxuICAyMjIsXHJcbiAgMTE0LFxyXG4gIDY3LFxyXG4gIDI5LFxyXG4gIDI0LFxyXG4gIDcyLFxyXG4gIDI0MyxcclxuICAxNDEsXHJcbiAgMTI4LFxyXG4gIDE5NSxcclxuICA3OCxcclxuICA2NixcclxuICAyMTUsXHJcbiAgNjEsXHJcbiAgMTU2LFxyXG4gIDE4MCxcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBBbiBpbXBsaW1lbnRhdGlvbiBvZiBQZXJsaW4gTm9pc2UgYnkgS2VuIFBlcmxpbi5cclxuICovXHJcbmNsYXNzIFBlcmxpbiB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc2VlZCBTZWVkIFZhbHVlIGZvciBQUk5HLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNlZWQpIHtcclxuICAgIGNvbnN0IF9ncmFkaWVudFZlY3MgPSBbXHJcbiAgICAgIC8vIDJEIFZlY3NcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMCksXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAxLCAwKSxcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgLTEsIDApLFxyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygtMSwgLTEsIDApLFxyXG4gICAgICAvLyArIDNEIFZlY3NcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMSksXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAwLCAxKSxcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgLTEpLFxyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMCwgLTEpLFxyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAxKSxcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTEsIDEpLFxyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAtMSksXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAtMSksXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBwZXJtID0gbmV3IEFycmF5KDUxMik7XHJcbiAgICB2YXIgZ3JhZFAgPSBuZXcgQXJyYXkoNTEyKTtcclxuXHJcbiAgICBpZiAoIXNlZWQpIHNlZWQgPSAxO1xyXG4gICAgc2VlZCAqPSA2NTUzNjtcclxuXHJcbiAgICBzZWVkID0gTWF0aC5mbG9vcihzZWVkKTtcclxuICAgIGlmIChzZWVkIDwgMjU2KSB7XHJcbiAgICAgIHNlZWQgfD0gc2VlZCA8PCA4O1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcclxuICAgICAgdmFyIHY7XHJcbiAgICAgIGlmIChpICYgMSkge1xyXG4gICAgICAgIHYgPSBwW2ldIF4gKHNlZWQgJiAyNTUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHYgPSBwW2ldIF4gKChzZWVkID4+IDgpICYgMjU1KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcGVybVtpXSA9IHBlcm1baSArIDI1Nl0gPSB2O1xyXG4gICAgICBncmFkUFtpXSA9IGdyYWRQW2kgKyAyNTZdID0gX2dyYWRpZW50VmVjc1t2ICUgMTJdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3NlZWQgPSBzZWVkO1xyXG5cclxuICAgIHRoaXMuX29mZnNldE1hdHJpeCA9IFtcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCksXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEpLFxyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSxcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMSksXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApLFxyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAxKSxcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMCksXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpLFxyXG4gICAgXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdMU0wgU2hhZGVyIENodW5rIGZvciAyRCBQZXJsaW4gTm9pc2UuIENhbiBiZSB1c2VkIHdpdGhcclxuICAgICAqIHRocmVlLUN1c3RvbVNoYWRlck1hdGVyaWFsLlxyXG4gICAgICogU2VlOiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0ZhcmF6elNoYWlraC9USFJFRS1DdXN0b21TaGFkZXJNYXRlcmlhbFwiPnRocmVlLUN1c3RvbVNoYWRlck1hdGVyaWFsPC9hPlxyXG4gICAgICovXHJcbiAgICB0aGlzLnNoYWRlckNodW5rID0ge1xyXG4gICAgICBkZWZpbmVzOiBcIlwiLFxyXG4gICAgICBoZWFkZXI6IGRlZmluaXRpb25zX3BlcmxpbixcclxuICAgICAgbWFpbjogXCJcIixcclxuICAgICAgdW5pZm9ybXM6IFt7IHRocmVlX25vaXNlX3NlZWQ6IHRoaXMuX3NlZWQgfV0sXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucGVybSA9IHBlcm07XHJcbiAgICB0aGlzLmdyYWRQID0gZ3JhZFA7XHJcbiAgfVxyXG5cclxuICBfZmFkZSh0KSB7XHJcbiAgICByZXR1cm4gdCAqIHQgKiB0ICogKHQgKiAodCAqIDYgLSAxNSkgKyAxMCk7XHJcbiAgfVxyXG5cclxuICBfbGVycChhLCBiLCB0KSB7XHJcbiAgICByZXR1cm4gKDEgLSB0KSAqIGEgKyB0ICogYjtcclxuICB9XHJcblxyXG4gIF9ncmFkaWVudChwb3NJbkNlbGwpIHtcclxuICAgIGlmIChwb3NJbkNlbGwgaW5zdGFuY2VvZiBUSFJFRS5WZWN0b3IzKSB7XHJcbiAgICAgIHJldHVybiBwb3NJbkNlbGwueCArIHRoaXMucGVybVtwb3NJbkNlbGwueSArIHRoaXMucGVybVtwb3NJbkNlbGwuel1dO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHBvc0luQ2VsbC54ICsgdGhpcy5wZXJtW3Bvc0luQ2VsbC55XTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcHMgYSBudW1iZXIgZnJvbSBvbmUgcmFuZ2UgdG8gYW5vdGhlci5cclxuICAgKiBAcGFyYW0ge251bWJlcn0geCAgICAgICBJbnB1dCBOdW1iZXJcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5fbWluICBDdXJyZW50IHJhbmdlIG1pbmltdW1cclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5fbWF4ICBDdXJyZW50IHJhbmdlIG1heGltdW1cclxuICAgKiBAcGFyYW0ge251bWJlcn0gb3V0X21pbiBOZXcgcmFuZ2UgbWluaW11bVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvdXRfbWF4IE5ldyByYW5nZSBtYXhpbXVtXHJcbiAgICogQHJldHVybnMge251bWJlcn0gSW5wdXQgTWFwcGVkIHRvIHJhbmdlIFtvdXRfbWluLCBvdXRfbWF4XVxyXG4gICAqL1xyXG4gIHN0YXRpYyBtYXAoeCwgaW5fbWluLCBpbl9tYXgsIG91dF9taW4sIG91dF9tYXgpIHtcclxuICAgIHJldHVybiAoKHggLSBpbl9taW4pICogKG91dF9tYXggLSBvdXRfbWluKSkgLyAoaW5fbWF4IC0gaW5fbWluKSArIG91dF9taW47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTYW1wbGVzIDJEIFBlcmxpbiBOb3NpZSBhdCBnaXZlbiBjb29yZGluYXRlcy5cclxuICAgKiBAcGFyYW0ge1RIUkVFLlZlY3RvcjIgfCBUSFJFRS5WZWN0b3IzfSBpbnB1dCBDb29yZGluY2F0ZXMgdG8gc2FtcGxlIGF0XHJcbiAgICogQHJldHVybnMge251bWJlcn0gVmFsdWUgb2YgUGVybGluIE5vaXNlIGF0IHRoYXQgY29vcmRpbmF0ZS5cclxuICAgKi9cclxuICBnZXQyKGlucHV0KSB7XHJcbiAgICBpZiAoaW5wdXQueiAhPT0gdW5kZWZpbmVkKSBpbnB1dCA9IG5ldyBUSFJFRS5WZWN0b3IyKGlucHV0LngsIGlucHV0LnkpO1xyXG5cclxuICAgIGNvbnN0IGNlbGwgPSBuZXcgVEhSRUUuVmVjdG9yMihNYXRoLmZsb29yKGlucHV0LngpLCBNYXRoLmZsb29yKGlucHV0LnkpKTtcclxuICAgIGlucHV0LnN1YihjZWxsKTtcclxuXHJcbiAgICBjZWxsLnggJj0gMjU1O1xyXG4gICAgY2VsbC55ICY9IDI1NTtcclxuXHJcbiAgICBjb25zdCBncmFkaWFudERvdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgY29uc3QgczMgPSB0aGlzLl9vZmZzZXRNYXRyaXhbaSAqIDJdO1xyXG4gICAgICBjb25zdCBzID0gbmV3IFRIUkVFLlZlY3RvcjIoczMueCwgczMueSk7XHJcblxyXG4gICAgICBjb25zdCBncmFkMyA9XHJcbiAgICAgICAgdGhpcy5ncmFkUFt0aGlzLl9ncmFkaWVudChuZXcgVEhSRUUuVmVjdG9yMigpLmFkZFZlY3RvcnMoY2VsbCwgcykpXTtcclxuICAgICAgY29uc3QgZ3JhZDIgPSBuZXcgVEhSRUUuVmVjdG9yMihncmFkMy54LCBncmFkMy55KTtcclxuICAgICAgY29uc3QgZGlzdDIgPSBuZXcgVEhSRUUuVmVjdG9yMigpLnN1YlZlY3RvcnMoaW5wdXQsIHMpO1xyXG5cclxuICAgICAgZ3JhZGlhbnREb3QucHVzaChncmFkMi5kb3QoZGlzdDIpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1ID0gdGhpcy5fZmFkZShpbnB1dC54KTtcclxuICAgIGNvbnN0IHYgPSB0aGlzLl9mYWRlKGlucHV0LnkpO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fbGVycChcclxuICAgICAgdGhpcy5fbGVycChncmFkaWFudERvdFswXSwgZ3JhZGlhbnREb3RbMl0sIHUpLFxyXG4gICAgICB0aGlzLl9sZXJwKGdyYWRpYW50RG90WzFdLCBncmFkaWFudERvdFszXSwgdSksXHJcbiAgICAgIHZcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2FtcGxlcyAzRCBQZXJsaW4gTm9zaWUgYXQgZ2l2ZW4gY29vcmRpbmF0ZXMuXHJcbiAgICogQHBhcmFtIHtUSFJFRS5WZWN0b3J9MyBpbnB1dCBDb29yZGluY2F0ZXMgdG8gc2FtcGxlIGF0XHJcbiAgICogQHJldHVybnMge251bWJlcn0gVmFsdWUgb2YgUGVybGluIE5vaXNlIGF0IHRoYXQgY29vcmRpbmF0ZS5cclxuICAgKi9cclxuICBnZXQzKGlucHV0KSB7XHJcbiAgICBpZiAoaW5wdXQueiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICB0aHJvdyBcIklucHV0IHRvIFBlcmxpbjo6Z2V0MygpIG11c3QgYmUgb2YgdHlwZSBUSFJFRS5WZWN0b3IzXCI7XHJcblxyXG4gICAgY29uc3QgY2VsbCA9IG5ldyBUSFJFRS5WZWN0b3IzKFxyXG4gICAgICBNYXRoLmZsb29yKGlucHV0LngpLFxyXG4gICAgICBNYXRoLmZsb29yKGlucHV0LnkpLFxyXG4gICAgICBNYXRoLmZsb29yKGlucHV0LnopXHJcbiAgICApO1xyXG4gICAgaW5wdXQuc3ViKGNlbGwpO1xyXG5cclxuICAgIGNlbGwueCAmPSAyNTU7XHJcbiAgICBjZWxsLnkgJj0gMjU1O1xyXG4gICAgY2VsbC56ICY9IDI1NTtcclxuXHJcbiAgICBjb25zdCBncmFkaWFudERvdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgY29uc3QgcyA9IHRoaXMuX29mZnNldE1hdHJpeFtpXTtcclxuXHJcbiAgICAgIGNvbnN0IGdyYWQzID1cclxuICAgICAgICB0aGlzLmdyYWRQW3RoaXMuX2dyYWRpZW50KG5ldyBUSFJFRS5WZWN0b3IzKCkuYWRkVmVjdG9ycyhjZWxsLCBzKSldO1xyXG4gICAgICBjb25zdCBkaXN0MiA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuc3ViVmVjdG9ycyhpbnB1dCwgcyk7XHJcblxyXG4gICAgICBncmFkaWFudERvdC5wdXNoKGdyYWQzLmRvdChkaXN0MikpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHUgPSB0aGlzLl9mYWRlKGlucHV0LngpO1xyXG4gICAgY29uc3QgdiA9IHRoaXMuX2ZhZGUoaW5wdXQueSk7XHJcbiAgICBjb25zdCB3ID0gdGhpcy5fZmFkZShpbnB1dC56KTtcclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2xlcnAoXHJcbiAgICAgIHRoaXMuX2xlcnAoXHJcbiAgICAgICAgdGhpcy5fbGVycChncmFkaWFudERvdFswXSwgZ3JhZGlhbnREb3RbNF0sIHUpLFxyXG4gICAgICAgIHRoaXMuX2xlcnAoZ3JhZGlhbnREb3RbMV0sIGdyYWRpYW50RG90WzVdLCB1KSxcclxuICAgICAgICB3XHJcbiAgICAgICksXHJcbiAgICAgIHRoaXMuX2xlcnAoXHJcbiAgICAgICAgdGhpcy5fbGVycChncmFkaWFudERvdFsyXSwgZ3JhZGlhbnREb3RbNl0sIHUpLFxyXG4gICAgICAgIHRoaXMuX2xlcnAoZ3JhZGlhbnREb3RbM10sIGdyYWRpYW50RG90WzddLCB1KSxcclxuICAgICAgICB3XHJcbiAgICAgICksXHJcbiAgICAgIHZcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaXMgYW4gaW1wbGltZW50YWl0b24gb2YgYSBGcmFjdGFsIEJyb3duaWFuIE1vdGlvblxyXG4gKiBmdW5jdGlvbiB1c2luZyBQZXJsaW4gTm9zaWUuXHJcbiAqL1xyXG5jbGFzcyBGQk0ge1xyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgRkJNIGNsYXNzLlxyXG4gICAqIFVzZSB0aGlzIGluc3RhbmNlIHRvIGdlbmVyYXRlIGZCbSBub2lzZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgZm9yIGZCbSBnZW5lcmFpdG9uLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLnNlZWQgU2VlZCBmb3IgUGVybGluIE5vaXNlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMuc2NhbGUgV2hhdCBkaXN0YW5jZSB0byB2aWV3IHRoZSBub2lzZW1hcFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLnBlcnNpc3RhbmNlIEhvdyBtdWNoIGVhY2ggb2N0YXZlIGNvbnRyaWJ1dGVzIHRvIHRoZSBvdmVyYWxsIHNoYXBlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubGFjdW5hcml0eSBIb3cgbXVjaCBkZXRhaWwgaXMgYWRkZWQgb3IgcmVtb3ZlZCBhdCBlYWNoIG9jdGF2ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLm9jdGF2ZXMgTGV2ZWxzIG9mIGRldGFpbCB5b3Ugd2FudCB5b3UgcGVybGluIG5vaXNlIHRvIGhhdmVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5yZWRpc3RyaWJ1dGlvbiBMZXZlbCBvZiBmbGF0bmVzcyB3aXRoaW4gdGhlIHZhbGxleXNcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBjb25zdCB7IHNlZWQsIHNjYWxlLCBwZXJzaXN0YW5jZSwgbGFjdW5hcml0eSwgb2N0YXZlcywgcmVkaXN0cmlidXRpb24gfSA9XHJcbiAgICAgIG9wdGlvbnM7XHJcbiAgICB0aGlzLl9ub2lzZSA9IG5ldyBQZXJsaW4oc2VlZCk7XHJcbiAgICB0aGlzLl9zY2FsZSA9IHNjYWxlIHx8IDE7XHJcbiAgICB0aGlzLl9wZXJzaXN0YW5jZSA9IHBlcnNpc3RhbmNlIHx8IDAuNTtcclxuICAgIHRoaXMuX2xhY3VuYXJpdHkgPSBsYWN1bmFyaXR5IHx8IDI7XHJcbiAgICB0aGlzLl9vY3RhdmVzID0gb2N0YXZlcyB8fCA2O1xyXG4gICAgdGhpcy5fcmVkaXN0cmlidXRpb24gPSByZWRpc3RyaWJ1dGlvbiB8fCAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2FtcGxlIDJEIFBlcmxpbiBOb2lzZSB3aXRoIGZCbSBhdCBnaXZlblxyXG4gICAqIGNvb3JkaW5hdGVzLiBUaGUgZnVuY3Rpb24gd2lsbCB1c2UgPGNvZGU+UGVybGluX2dldDI8L2NvZGU+IG9yIDxjb2RlPlBlcmxpbl9nZXQzPC9jb2RlPlxyXG4gICAqIGRlcGVuZGluZyBvbiB0aGUgaW5wdXQgdmVjdG9yJ3MgdHlwZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KFRIUkVFLlZlY3RvcjIgfCBUSFJFRS5WZWN0b3IzKX0gaW5wdXQgQ29vcmRpbmF0ZXMgdG8gc2FtcGxlIG5vaXNlIGF0LlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IE5vcm1hbGl6ZWQgbm9pc2UgaW4gdGhlIHJhbmdlIFswLCAxXVxyXG4gICAqL1xyXG4gIGdldDIoaW5wdXQpIHtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgbGV0IGFtcGxpdHVkZSA9IDE7XHJcbiAgICBsZXQgZnJlcXVlbmN5ID0gMTtcclxuICAgIGxldCBtYXggPSBhbXBsaXR1ZGU7XHJcblxyXG4gICAgbGV0IG5vaXNlRnVuY3Rpb24gPSB0aGlzLl9ub2lzZS5nZXQyLmJpbmQodGhpcy5fbm9pc2UpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fb2N0YXZlczsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjIoXHJcbiAgICAgICAgaW5wdXQueCAqIHRoaXMuX3NjYWxlICogZnJlcXVlbmN5LFxyXG4gICAgICAgIGlucHV0LnkgKiB0aGlzLl9zY2FsZSAqIGZyZXF1ZW5jeVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3Qgbm9pc2VWYWwgPSBub2lzZUZ1bmN0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgcmVzdWx0ICs9IG5vaXNlVmFsICogYW1wbGl0dWRlO1xyXG5cclxuICAgICAgZnJlcXVlbmN5ICo9IHRoaXMuX2xhY3VuYXJpdHk7XHJcbiAgICAgIGFtcGxpdHVkZSAqPSB0aGlzLl9wZXJzaXN0YW5jZTtcclxuICAgICAgbWF4ICs9IGFtcGxpdHVkZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWRpc3RyaWJ1dGVkID0gTWF0aC5wb3cocmVzdWx0LCB0aGlzLl9yZWRpc3RyaWJ1dGlvbik7XHJcbiAgICByZXR1cm4gcmVkaXN0cmlidXRlZCAvIG1heDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNhbXBsZSAzRCBQZXJsaW4gTm9pc2Ugd2l0aCBmQm0gYXQgZ2l2ZW5cclxuICAgKiBjb29yZGluYXRlcy4gVGhlIGZ1bmN0aW9uIHdpbGwgdXNlIDxjb2RlPlBlcmxpbl9nZXQyPC9jb2RlPiBvciA8Y29kZT5QZXJsaW5fZ2V0MzwvY29kZT5cclxuICAgKiBkZXBlbmRpbmcgb24gdGhlIGlucHV0IHZlY3RvcidzIHR5cGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1RIUkVFLlZlY3RvcjN9IGlucHV0IENvb3JkaW5hdGVzIHRvIHNhbXBsZSBub2lzZSBhdC5cclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBOb3JtYWxpemVkIG5vaXNlIGluIHRoZSByYW5nZSBbMCwgMV1cclxuICAgKi9cclxuICBnZXQzKGlucHV0KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgIGxldCBhbXBsaXR1ZGUgPSAxO1xyXG4gICAgbGV0IGZyZXF1ZW5jeSA9IDE7XHJcbiAgICBsZXQgbWF4ID0gYW1wbGl0dWRlO1xyXG5cclxuICAgIGxldCBub2lzZUZ1bmN0aW9uID0gdGhpcy5fbm9pc2UuZ2V0My5iaW5kKHRoaXMuX25vaXNlKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX29jdGF2ZXM7IGkrKykge1xyXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IyKFxyXG4gICAgICAgIGlucHV0LnggKiB0aGlzLl9zY2FsZSAqIGZyZXF1ZW5jeSxcclxuICAgICAgICBpbnB1dC55ICogdGhpcy5fc2NhbGUgKiBmcmVxdWVuY3ksXHJcbiAgICAgICAgaW5wdXQueiAqIHRoaXMuX3NjYWxlICogZnJlcXVlbmN5XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBub2lzZVZhbCA9IG5vaXNlRnVuY3Rpb24ocG9zaXRpb24pO1xyXG4gICAgICByZXN1bHQgKz0gbm9pc2VWYWwgKiBhbXBsaXR1ZGU7XHJcblxyXG4gICAgICBmcmVxdWVuY3kgKj0gdGhpcy5fbGFjdW5hcml0eTtcclxuICAgICAgYW1wbGl0dWRlICo9IHRoaXMuX3BlcnNpc3RhbmNlO1xyXG4gICAgICBtYXggKz0gYW1wbGl0dWRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlZGlzdHJpYnV0ZWQgPSBNYXRoLnBvdyhyZXN1bHQsIHRoaXMuX3JlZGlzdHJpYnV0aW9uKTtcclxuICAgIHJldHVybiByZWRpc3RyaWJ1dGVkIC8gbWF4O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRkJNLCBQZXJsaW4gfTsiLCIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcclxubGV0IHJlbmRlcmluZ0xpc3QgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrVHlwZSh0eXBlKSB7XHJcbiAgICBpZiAodHlwZW9mIHJlbmRlcmluZ0xpc3RbYCR7dHlwZX1gXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJlbmRlcmluZ0xpc3RbYCR7dHlwZX1gXSA9IFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9SZW5kZXJTZXF1ZW5jZSh0eXBlLCBjYWxsYmFjaywgbmV3VHlwZSA9IGZhbHNlLCB2YWwpIHtcclxuICAgIGlmIChuZXdUeXBlKSB7XHJcbiAgICAgICAgcmVuZGVyaW5nTGlzdFtgJHt0eXBlfWBdID0gW107XHJcbiAgICB9XHJcbiAgICBjaGVja1R5cGUodHlwZSk7XHJcbiAgICByZW5kZXJpbmdMaXN0W2Ake3R5cGV9YF0ucHVzaChjYWxsYmFjayk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJpbmdJbmZvKHR5cGUpIHtcclxuICAgIGNoZWNrVHlwZSh0eXBlKTtcclxuICAgIHJldHVybiByZW5kZXJpbmdMaXN0W2Ake3R5cGV9YF0ubGVuZ3RoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUmVuZGVyQ3ljbGUodHlwZSkge1xyXG4gICAgY2hlY2tUeXBlKHR5cGUpO1xyXG4gICAgcmVuZGVyaW5nTGlzdFtgJHt0eXBlfWBdLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtKCk7XHJcbiAgICB9KTtcclxufVxyXG4iLCIvLyBDcmVhdGVkIGJ5IEhhcnZleSBSYW5kYWxsIHRvIEF1dG9tYXRlIHRoZSBjcmVhdGlvbiBhbmQgaGFuZGxpbmcgb2Ygd2ViIHdvcmtlcnMgXFxcXFxyXG5cclxuaW1wb3J0IHsgQXJyb3dGdW5jdGlvbiB9IGZyb20gXCJ0eXBlc2NyaXB0XCI7XHJcblxyXG4vLyBPSyBmaXJzdCB0aGluZyBmaXJzdCwgd2UgbmVlZCB0byB0dXJuIHRoZSBmaWxlIGludG8gYSBkYXRhIGJsb2JcclxuXHJcbi8qKlxyXG4qIFR1cm4gSlMgZmlsZSBpbnRvIGEgZGF0YWJsb2IgYW5kIHRoZW4gaW50byBhIHdlYiB3b3JrZXJcclxuKiBAcGFyYW0ge3dvcmtlcn0gc3RyIFRoZSBhY3R1YWwgY29kZSBmb3IgdGhlIHdvcmtlciB0byBiZSBwYXJzZWRcclxuKiBAcmV0dXJucyB7V29ya2VyfVxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gR2VuZXJhdGVXZWJXb3JrZXIod29ya2VyOnN0cmluZywgZ2xvYmFsVmFyczpzdHJpbmdbXSwgcmV0dXJuRnVuYzogRnVuY3Rpb24pOldvcmtlcntcclxuICAgIC8vIEZpcnN0IHRoaW5nIGlmIGl0cyBub3QgYSBzdHJpbmcgbWFrZSBpdCBhIHN0cmluZ1xyXG4gICAgY29uc3QgY29kZSA9IHdvcmtlci50b1N0cmluZygpO1xyXG5cclxuICAgIC8vV2UgbWF5IG5lZWQgdG8gYWRkIHRoZSBjYWxsaW5nIGNvbnRleHQgc28gd2Ugc2hvdWxkIGFkZCB0aGUgZ2xvYmFsIHZhcnNcclxuICAgIGxldCBpbnB1dFN0dWZmID0gYGxldCBnbG9iYWxWYXJzID0gJHtnbG9iYWxWYXJzfTtcXG5gXHJcblxyXG4gICAgLy9OZXh0IENyZWF0ZSB0aGUgYmxvYiBpbiBhIHNlbGYgcnVubmluZyBmdW5jdGlvblxyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtpbnB1dFN0dWZmICsgXCIoXCIgKyBjb2RlICsgXCIpKClcIl0sIHsgdHlwZTogJ3RleHQvamF2YXNjcmlwdCcgfSk7XHJcblxyXG4gICAgLy9UaGVuIHJldHVybiB0aGUgd2ViIHdvcmtlclxyXG4gICAgbGV0IHdvcmtlck91dCA9IG5ldyBXb3JrZXIod2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYiksIHsgdHlwZTogJ21vZHVsZScgfSlcclxuXHJcbiAgICAvL0NoZWNrIGlmIHdlYiB3b3JrZXIgd2FudHMgdG8gdGVybWluYXRlIGl0c2VsZlxyXG4gICAgd29ya2VyT3V0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZSkgPT4gcmV0dXJuRnVuYyhlKSwgZmFsc2UpICBcclxuXHJcbiAgICByZXR1cm4gd29ya2VyT3V0XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXJtaW50ZVdvcmtlckV4dGVybmFsbHkod29ya2VyOldvcmtlcik6Ym9vbGVhbntcclxuICAgIHRyeXtcclxuICAgICAgIHdvcmtlci50ZXJtaW5hdGUoKSBcclxuICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBcclxufSIsIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxyXG5pbXBvcnQgeyBCb3hHZW9tZXRyeSwgTWVzaCwgTWVzaEJhc2ljTWF0ZXJpYWwgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0ICogYXMgdGhyZWUgZnJvbSBcInRocmVlXCI7XHJcbmxldCBHYW1lQ29yZVNoYWRvd3MgPSB0cnVlOyAvLyBUT0RPIGFkZCB0byBHVUlcclxuXHJcbi8qZXNsaW50IGNvbXBsZXhpdHk6IFtcImVycm9yXCIsIDIwXSovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHZW8odHlwZSwgZGF0YSwgcG9zLCByb3QsIG1hdCwgc2hhZG93KSB7XHJcbiAgICAvL0NyZWF0ZSB0eXBlLCB1c2luZyBkZXN0cnVjdHVyaW5nIHRvIHBhc3MgaW4gdmFsdWVzXHJcbiAgICBsZXQgZ2VvID0gbmV3IHRocmVlW2Ake3R5cGV9YF0oLi4uZGF0YSk7XHJcblxyXG4gICAgLy9TZXQgR2VvIFBvc2l0aW9uIGFuZCBSb3RhdGlvblxyXG4gICAgZ2VvLnBvc2l0aW9uLnNldChwb3MpO1xyXG4gICAgZ2VvLnJvdGF0aW9uLnNldChyb3QpO1xyXG5cclxuICAgIC8vQ3JlYXRlIHRoZSBNZXNoXHJcbiAgICAvKmVzbGludCBuZXctY2FwOiBcImVycm9yXCIqL1xyXG4gICAgbGV0IG1lc2ggPSBuZXcgTWVzaChnZW8sIG1hdCk7XHJcblxyXG4gICAgLy9IYW5kbGUgUmVjaXZpbmcgc2hhZG93cyBhbmQgY2FzdGluZ1xyXG4gICAgbWVzaC5jYXN0U2hhZG93ID0gc2hhZG93ICYmIEdhbWVDb3JlU2hhZG93cyA/IHRydWUgOiBmYWxzZTtcclxuICAgIG1lc2gucmVjZWl2ZVNoYWRvdyA9IHNoYWRvdyAmJiBHYW1lQ29yZVNoYWRvd3MgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgLy9SZXR1cm4gTWVzaFxyXG4gICAgcmV0dXJuIG1lc2g7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z0N1YmUoKXtcclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IEJveEdlb21ldHJ5KCAxMCwgMTAsIDEwICk7XHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBNZXNoQmFzaWNNYXRlcmlhbCgge2NvbG9yOiAweDAwZmYwMH0gKTtcclxuICAgIGNvbnN0IGN1YmUgPSBuZXcgTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcbiAgICByZXR1cm4gY3ViZVxyXG59IiwiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG4vLyBSZW5kZXIgSGFuZGxlclxyXG5pbXBvcnQgeyBhZGRUb1JlbmRlclNlcXVlbmNlIH0gZnJvbSBcIi4uL0NvcmUtQVBJL1JlbmRlcmluZ0hhbmRsZXJcIjtcclxuXHJcbi8vRnVuY3Rpb25hbCBEZXBlbmRlbmNpZXNcclxuaW1wb3J0IHtcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgRG91YmxlU2lkZSxcclxuICAgIEdyaWRIZWxwZXIsXHJcbiAgICBNZXNoLFxyXG4gICAgTWVzaFN0YW5kYXJkTWF0ZXJpYWwsXHJcbiAgICBQbGFuZUJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgUGxhbmVHZW9tZXRyeSxcclxuICAgIFZlY3RvcjMsXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IEdlbmVyYXRlQ2xvdWRzIH0gZnJvbSBcIi4uL2dhbWVGdW5kYWxtZW50YWxzL2Nsb3Vkc1wiO1xyXG5pbXBvcnQgeyBjb250cm9sSGFuZGxlckluaXQsIGNvbnRyb2xIYW5kbGVyVXBkYXRlIH0gZnJvbSBcIi4uL2dhbWVGdW5kYWxtZW50YWxzL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IENyZWF0ZURheU5pZ2h0Q3ljbGUgfSBmcm9tIFwiLi4vZ2FtZUZ1bmRhbG1lbnRhbHMvRGF5TmlnaHRDeWNsZVwiO1xyXG5pbXBvcnQgeyBNYWtlUGxhbmUgfSBmcm9tIFwiLi4vZ2FtZUZ1bmRhbG1lbnRhbHMvcGxhbmVIYW5kbGVyL01haW5QbGFuZVwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVRlcnJhaW5Bcm91bmRQbGF5ZXIgfSBmcm9tIFwiLi4vZ2FtZUZ1bmRhbG1lbnRhbHMvVGVycmFpbk1hbmFnZW1lbnQvdGVycmFpbkNodW5rcmlzZXJcIjtcclxuaW1wb3J0IHsgR2VuZXJhdGVXZWJXb3JrZXIgfSBmcm9tIFwiLi4vQ29yZS1BUEkvV29ya2VyU2V0dXAudHNcIjtcclxuaW1wb3J0IHsgZGVidWdDdWJlIH0gZnJvbSBcIi4uL0NvcmUtQVBJL2dlbW90cnlNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGFkZEdMQkZpbGUgfSBmcm9tIFwiLi4vQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL0dMQkxvYWRlclwiO1xyXG5cclxubGV0IGRlYnVnID0gdHJ1ZTtcclxuIFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlTWFpblNjZW5lKFxyXG4gICAgU2NlbmVUb0dldCxcclxuICAgIFJlbmRlcnMsXHJcbiAgICBkb2N1bWVudCxcclxuICAgIHNlZWQsXHJcbiAgICBjaGlsZDIsXHJcbiAgICBDYW1lcmFcclxuKSB7XHJcblxyXG5cclxuICAgIGxldCBjb2xsaXNpb25IYW5kbGVyID0gbmV3IFdvcmtlcignd2ViV29ya2Vycy9Db2xsaXNpb24uanMnKTtcclxuICAgIGNvbGxpc2lvbkhhbmRsZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgY29sbGlzaW9uSGFuZGxlci5vbm1lc3NhZ2VlcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIH1cclxuICAgIGNvbGxpc2lvbkhhbmRsZXIub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICAgIGNvbGxpc2lvbkhhbmRsZXIucG9zdE1lc3NhZ2Uoe0NvbW1hbmQ6XCJTdGFydFwiLCBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW59KVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbGxpc2lvbkhhbmRsZXIucG9zdE1lc3NhZ2Uoe0NvbW1hbmQ6XCJBZGRTaGFwZVwiLCBkYXRhOiBuZXcgUGxhbmVCdWZmZXJHZW9tZXRyeSgyLCAyLCAyLCAyKX0pXHJcbiAgICB9LDEwMDApO1xyXG5cclxuICAgIGxldCBjbG91ZHMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xyXG4gICAgICAgIGNsb3Vkcy5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgR2VuZXJhdGVDbG91ZHMoXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMyhcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMzAwIC0gMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDgwICsgTWF0aC5yYW5kb20oKSAqIDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiA2MDAgLSA0MDBcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBTY2VuZVRvR2V0LFxyXG4gICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDAuMixcclxuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiA2ICsgMVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGF5bmlnaHQgPSBuZXcgQ3JlYXRlRGF5TmlnaHRDeWNsZShTY2VuZVRvR2V0LCBSZW5kZXJzKTtcclxuICAgIC8vZ2VuZXJhdGVUZXJyYWluKHNlZWQsIFNjZW5lVG9HZXQpO1xyXG4gICAgY29udHJvbEhhbmRsZXJJbml0KGRvY3VtZW50LCBjaGlsZDIpO1xyXG5cclxuXHJcblxyXG4gICAgaWYgKGRlYnVnKSB7XHJcbiAgICAgICAgY29uc3QgcGxhbmVHZW9tZXRyeSA9IG5ldyBQbGFuZUdlb21ldHJ5KDIwLCAyMCwgMzIsIDMyKTtcclxuICAgICAgICBwbGFuZUdlb21ldHJ5LnJvdGF0ZVgoTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgIGNvbnN0IHBsYW5lTWF0ZXJpYWwgPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICBjb2xvcjogXCIjNTY3ZDQ2XCIsXHJcbiAgICAgICAgICAgIHNpZGU6IERvdWJsZVNpZGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcGxhbmUgPSBuZXcgTWVzaChwbGFuZUdlb21ldHJ5LCBwbGFuZU1hdGVyaWFsKTtcclxuICAgICAgICBwbGFuZS5wb3NpdGlvbi55ID0gLTAuNTtcclxuICAgICAgICBTY2VuZVRvR2V0LmFkZChwbGFuZSk7XHJcbiAgICAgICAgY29uc3QgZ3JpZEhlbHBlciA9IG5ldyBHcmlkSGVscGVyKDUwLCA1MCk7XHJcbiAgICAgICAgZ3JpZEhlbHBlci5wb3NpdGlvbi55ID0gLTE7XHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQoZ3JpZEhlbHBlcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIEFkZCBhbGwgdXBkYXRpbmcgcGFydHMgdG8gYSBmdW5jdGlvblxyXG4gICAgYWRkVG9SZW5kZXJTZXF1ZW5jZShcclxuICAgICAgICBcIk1haW5cIixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsb3Vkcy5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRydWVcclxuICAgICk7XHJcbiAgICBsZXQgbmV3UGxhbmUgPSBuZXcgTWFrZVBsYW5lKFNjZW5lVG9HZXQpXHJcbiAgICBhd2FpdCBuZXdQbGFuZS5sb2FkRmlsZXMoKVxyXG4gICAgbmV3UGxhbmUuQ3JlYXRlR3JvdXBBbmRQb3MoKVxyXG4gICAgbmV3UGxhbmUuYXR0YWNoQ2FtZXJhQW5kQ29udHJvbChDYW1lcmEpXHJcblxyXG4gICAgbGV0IGFpcnBvcnQgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgIFwiL0Fzc2V0cy9BaXJwb3J0LmdsYlwiLFxyXG4gICAgICAgIFNjZW5lVG9HZXRcclxuICAgICk7XHJcbiAgICBTY2VuZVRvR2V0LmFkZChhaXJwb3J0LnNjZW5lKVxyXG5cclxuXHJcbiAgICBnZW5lcmF0ZVRlcnJhaW5Bcm91bmRQbGF5ZXIoc2VlZCwgQ2FtZXJhLCBTY2VuZVRvR2V0KVxyXG5cclxuICAgIC8vYWRkVG9SZW5kZXJTZXF1ZW5jZShcIk1haW5cIiwgKCkgPT4gY29udHJvbEhhbmRsZXJVcGRhdGUoQ2FtZXJhKSk7XHJcbiAgICBhZGRUb1JlbmRlclNlcXVlbmNlKFwiTWFpblwiLCAoKSA9PiBkYXluaWdodC51cGRhdGUoQ2FtZXJhKSk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhHZW5lcmF0ZVdlYldvcmtlcihgL3dlYldvcmtlcnMvYmFzaWNUZXN0LmpzYCwgW10sIChlKSA9PiB7Y29uc29sZS5sb2coZSl9ICkpXHJcbn1cclxuIiwiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcbmltcG9ydCB7XHJcbiAgICBCYWNrU2lkZSxcclxuICAgIEJveEdlb21ldHJ5LFxyXG4gICAgQ29sb3IsXHJcbiAgICBNYXRoVXRpbHMsXHJcbiAgICBNZXNoLFxyXG4gICAgTWVzaEJhc2ljTWF0ZXJpYWwsXHJcbiAgICBNZXNoTGFtYmVydE1hdGVyaWFsLFxyXG4gICAgU3BoZXJlQnVmZmVyR2VvbWV0cnksXHJcbiAgICBWZWN0b3IzLFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgY3JlYXRlQW1iaWVudExpZ2h0LFxyXG4gICAgY3JlYXRlRGlyZWN0aW9uYWxMaWdodCxcclxufSBmcm9tIFwiLi4vQ29yZS1BUEkvTGlnaHRpbmdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbVN0YXJGaWVsZCB9IGZyb20gXCIuL3N0YXJzXCI7XHJcbmltcG9ydCB7IHJvdGF0ZUFib3V0UG9pbnQgfSBmcm9tIFwiLi9yb3RhdGVBcm91bmRQb2ludFwiO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5sZXQgcmVjaWV2ZURheXRpbWVVcGRhdGUgPSB7fTtcclxuXHJcbmxldCBkYXkgPSB0cnVlXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGR0b0RheVRpbWVDaGVja2VyKGFyZykge1xyXG4gICAgbGV0IFVVSUQgPSB2NCgpO1xyXG4gICAgcmVjaWV2ZURheXRpbWVVcGRhdGVbVVVJRF0gPSBhcmc7XHJcbiAgICByZXR1cm4gVVVJRDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbURheVRpbWVIb29rKFVVSUQpIHtcclxuICAgIGRlbGV0ZSByZWNpZXZlRGF5dGltZVVwZGF0ZVtVVUlEXTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5U3RhdGUoKSB7XHJcbiAgICByZXR1cm4gZGF5XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVEYXlOaWdodEN5Y2xlIHtcclxuICAgIGNvbnN0cnVjdG9yKFNjZW5lVG9HZXQsIFJlbmRlcnMpIHtcclxuICAgICAgICAvLyAtLS0tLS0tLS0tIFtUd28gdG8gbGV2ZWwgZ2xvYmFsIHZhcmlhYmxlc10gLS0tLS0tLS0tLSBcXFxcXHJcbiAgICAgICAgdGhpcy5TY2VuZVRvR2V0ID0gU2NlbmVUb0dldDtcclxuICAgICAgICB0aGlzLlJlbmRlcnMgPSBSZW5kZXJzO1xyXG5cclxuICAgICAgICB0aGlzLmFubm91bmNlZERheSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYW5ub3VuY2VkTmlnaHQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLSBbQ3JlYXRlIFN1biBNZXNoXSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICBsZXQgc3VuID0gbmV3IFNwaGVyZUJ1ZmZlckdlb21ldHJ5KDIwLCAyMCwgMTAwLCAxMDApO1xyXG4gICAgICAgIGxldCBzdW5NYXRlcmlhbCA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtcclxuICAgICAgICAgICAgZW1pc3NpdmU6IFwiI2Y5ZDcxY1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBzdW5tZXNoID0gbmV3IE1lc2goc3VuLCBzdW5NYXRlcmlhbCk7XHJcbiAgICAgICAgc3VubWVzaC5wb3NpdGlvbi5zZXQoMSwgMzAwLCAzMDApO1xyXG4gICAgICAgIFNjZW5lVG9HZXQuYWRkKHN1bm1lc2gpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgZ3JvdXAgdG8gZWFzaWx5IG1vdmUgaXQgXFxcXFxyXG4gICAgICAgIGxldCBzdW5Hcm91cCA9IG5ldyBHcm91cCgpXHJcbiAgICAgICAgc3VuR3JvdXAuYWRkKHN1bm1lc2gpXHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQoc3VuR3JvdXApXHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW0NyZWF0ZSBNb29uIE1lc2hdIC0tLS0tLS0tLS0gXFxcXFxyXG4gICAgICAgIGxldCBtb29uID0gbmV3IFNwaGVyZUJ1ZmZlckdlb21ldHJ5KDEwLCAxMCwgMTAwLCAxMDApO1xyXG4gICAgICAgIGxldCBtb29uTWF0ZXJpYWwgPSBuZXcgTWVzaExhbWJlcnRNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgIGVtaXNzaXZlOiBcIiNmZmZmZmZcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgbW9vbk1lc2ggPSBuZXcgTWVzaChtb29uLCBtb29uTWF0ZXJpYWwpO1xyXG4gICAgICAgIG1vb25NZXNoLnBvc2l0aW9uLnNldCgtMSwgLTIwMCwgLTMwMCk7XHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQobW9vbk1lc2gpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgZ3JvdXAgdG8gZWFzaWx5IG1vdmUgaXQgXFxcXFxyXG4gICAgICAgIGxldCBtb29uR3JvdXAgPSBuZXcgR3JvdXAoKVxyXG4gICAgICAgIG1vb25Hcm91cC5hZGQobW9vbk1lc2gpXHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQobW9vbkdyb3VwKVxyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tIFtDcmVhdGUgQm94IEdvbWV0cnkgZm9yIGhhbmRsaW5nIHJvdGF0aW9uXSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICB2YXIgZ2VvbWV0cnkgPSBuZXcgQm94R2VvbWV0cnkoMSwgMSwgMSk7XHJcbiAgICAgICAgdmFyIGN1YmUgPSBuZXcgTWVzaChnZW9tZXRyeSk7XHJcbiAgICAgICAgY3ViZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQoY3ViZSk7XHJcbiAgICAgICAgLy8gXiBUaGlzIGlzIGEgdmVyeSBiYWQgd29yayBhcm91bmQgZml4IGxhdGVyXHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW0FsbCBkZWZpbnRpb25zIGZvciB0aGUgbW92aW5nIHBhcnRdIC0tLS0tLS0tLS0gXFxcXFxyXG4gICAgICAgIHRoaXMuY3ViZSA9IGN1YmU7XHJcbiAgICAgICAgdGhpcy5tb29uTWVzaCA9IG1vb25NZXNoO1xyXG4gICAgICAgIHRoaXMuc3VubWVzaCA9IHN1bm1lc2g7XHJcbiAgICAgICAgdGhpcy5zdW5Hcm91cCA9IHN1bkdyb3VwO1xyXG4gICAgICAgIHRoaXMubW9vbkdyb3VwID0gbW9vbkdyb3VwO1xyXG4gICAgICAgIHRoaXMudCA9IDA7XHJcbiAgICAgICAgdGhpcy5kVEltZSA9IDA7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW0FsbCBkZWZpbnRpb25zIGZvciBsaWdodHMgdG8gY3JlYXRlIHNoYWRvd3NdIC0tLS0tLS0tLS0gXFxcXFxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodCA9IGNyZWF0ZURpcmVjdGlvbmFsTGlnaHQoXHJcbiAgICAgICAgICAgIFNjZW5lVG9HZXQsXHJcbiAgICAgICAgICAgIFwiI2RkZmZlZVwiLFxyXG4gICAgICAgICAgICAwLjUsXHJcbiAgICAgICAgICAgIFsxLCAxMDAsIDEwMF1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodDIgPSBjcmVhdGVEaXJlY3Rpb25hbExpZ2h0KFxyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LFxyXG4gICAgICAgICAgICBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgMC4yLFxyXG4gICAgICAgICAgICBbMSwgLTEwMCwgLTEwMF1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubGlnaHQgPSBjcmVhdGVBbWJpZW50TGlnaHQoU2NlbmVUb0dldCwgXCIjYWFhYWFhXCIsIDAuNSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3VuR3JvdXAuYWRkKHRoaXMuZGlyZWN0aW9uYWxMaWdodClcclxuICAgICAgICB0aGlzLm1vb25Hcm91cC5hZGQodGhpcy5kaXJlY3Rpb25hbExpZ2h0MilcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLSBbQ3JlYXRlIFN0YXJ5IG5pZ2h0XSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICBsZXQgc2t5Qm94ID0gbmV3IEJveEdlb21ldHJ5KDEyMDAsIDEyMDAsIDEyMDApO1xyXG4gICAgICAgIGxldCBza3lCb3hNYXRlcmlhbCA9IG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgIG1hcDogZ2V0UmFuZG9tU3RhckZpZWxkKDYwMCwgMjA0OCwgMjA0OCksXHJcbiAgICAgICAgICAgIHNpZGU6IEJhY2tTaWRlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2t5ID0gbmV3IE1lc2goc2t5Qm94LCBza3lCb3hNYXRlcmlhbCk7XHJcbiAgICB9XHJcbiAgICAvKmVzbGludCBjb21wbGV4aXR5OiBbXCJlcnJvclwiLCAyMF0qL1xyXG4gICAgdXBkYXRlKENhbWVyYSkge1xyXG5cclxuICAgICAgICAvLyBUaGlzIHR3byBsaW5lcyBhcmUgIGltcG9ydGFudCBhcyBpdCBpcyBwYXJ0IG9mIHRoZSBoYWNreSB3b3JrIGFyb3VuZCB0byBnZXQgdGltZSBvZiBkYXkgb24gdmFyeWluZyBGUFNcclxuICAgICAgICBsZXQgdGhldGEgPSByb3RhdGVBYm91dFBvaW50KFxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbmFsTGlnaHQsXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKDAsIDAsIDApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMygxLCAwLCAwKSxcclxuICAgICAgICAgICAgMC4wMDEsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGhVdGlscy5yYWRUb0RlZyh0aGlzLmN1YmUucm90YXRpb24ueCk7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW1JvdGF0ZSBhbGwgdGhlIGxpZ2h0cyBhbmQgTWVzaGVzXSAtLS0tLS0tLS0tIFxcXFxcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3VuR3JvdXAucG9zaXRpb24uc2V0KENhbWVyYS5wb3NpdGlvbi54ICsgMTAwLCBDYW1lcmEucG9zaXRpb24ueSwgQ2FtZXJhLnBvc2l0aW9uLnopO1xyXG4gICAgICAgIHRoaXMubW9vbkdyb3VwLnBvc2l0aW9uLnNldChDYW1lcmEucG9zaXRpb24ueCArIDEwMCwgQ2FtZXJhLnBvc2l0aW9uLnksIENhbWVyYS5wb3NpdGlvbi56KTtcclxuXHJcbiAgICAgICAgdGhpcy5za3kucG9zaXRpb24uc2V0KENhbWVyYS5wb3NpdGlvbi54ICsgMTAwLCBDYW1lcmEucG9zaXRpb24ueSwgQ2FtZXJhLnBvc2l0aW9uLnopO1xyXG5cclxuXHJcbiAgICAgICAgcm90YXRlQWJvdXRQb2ludChcclxuICAgICAgICAgICAgdGhpcy5zdW5tZXNoLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMygxMDAsIDAsIDApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMygxLCAwLCAwKSxcclxuICAgICAgICAgICAgMC4wMDEsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICAgIHJvdGF0ZUFib3V0UG9pbnQoXHJcbiAgICAgICAgICAgIHRoaXMubW9vbk1lc2gsXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKDEwMCwgMCwgMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKDEsIDAsIDApLFxyXG4gICAgICAgICAgICAwLjAwMSxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcm90YXRlQWJvdXRQb2ludChcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0MixcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjMoMCwgMCwgMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKDEsIDAsIDApLFxyXG4gICAgICAgICAgICAwLjAwMSxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW0lmIGl0IGlzIGRheV0gLS0tLS0tLS0tLSBcXFxcXHJcbiAgICAgICAgaWYgKGFuZ2xlIDwgNDAgJiYgdGhpcy5kVEltZSA8IDEpIHtcclxuICAgICAgICAgICAgZGF5ID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgdGhpcy50ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0LmNvbG9yID0gbmV3IENvbG9yKFwiI2RkZmZlZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5kVEltZSArPSAwLjAwMztcclxuICAgICAgICAgICAgaWYgKHRoaXMuZFRJbWUgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kVEltZSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5SZW5kZXJzLnNldENsZWFyQ29sb3IoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ29sb3IoKS5sZXJwQ29sb3JzKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDb2xvcihcIiNmZGI4MTNcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvbG9yKFwiIzg3Y2VlYlwiKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRUSW1lXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0LmludGVuc2l0eSA9IDAuNTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0Mi5jb2xvciA9IG5ldyBDb2xvcihcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodC5pbnRlbnNpdHkgPSAwLjU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodDIuaW50ZW5zaXR5ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5TY2VuZVRvR2V0LnJlbW92ZSh0aGlzLnNreSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghKGFuZ2xlIDwgNDApICYmIHRoaXMuc2t5LnBhcmVudCAhPT0gdGhpcy5TY2VuZVRvR2V0KSB7XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0gW0lmIGl0IGlzIG5pZ2h0XSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICAgICAgZGF5ID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZFRJbWUgPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50ICs9IDAuMDE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnQgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2NlbmVUb0dldC5hZGQodGhpcy5za3kpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodDIuY29sb3IgPSBuZXcgQ29sb3IoXCIjZmZmZmZmXCIpO1xyXG4gICAgICAgICAgICB0aGlzLlJlbmRlcnMuc2V0Q2xlYXJDb2xvcihcclxuICAgICAgICAgICAgICAgIG5ldyBDb2xvcigpLmxlcnBDb2xvcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvbG9yKFwiIzg3Y2VlYlwiKSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQ29sb3IoXCIjMDAwMDAwXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5saWdodC5pbnRlbnNpdHkgPSAwLjI7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodC5pbnRlbnNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbmFsTGlnaHQyLmludGVuc2l0eSA9IDAuMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2t5LnBhcmVudCA9PT0gdGhpcy5TY2VuZVRvR2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2t5LnJvdGF0aW9uLnggLT0gNCAvIDEwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1YmUucm90YXRlT25BeGlzKG5ldyBWZWN0b3IzKDEsIDAsIDApLCB0aGV0YSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgQ29sb3IsXHJcbiAgICBNZXNoLFxyXG4gICAgTWVzaFBob25nTWF0ZXJpYWwsXHJcbiAgICBQbGFuZUJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgVmVjdG9yMixcclxuICAgIFZlY3RvcjMsXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IHJhbmRvbUludEZyb21JbnRlcnZhbCB9IGZyb20gXCIuLi9BbGdvcml0aG1zL1ZlY3RvclV0aWxzXCI7XHJcbmltcG9ydCB7IGRlYnVnQ3ViZSB9IGZyb20gXCIuLi9Db3JlLUFQSS9nZW1vdHJ5TWFuYWdlclwiO1xyXG5cclxuaW1wb3J0IHsgUGVybGluLCBGQk0gfSBmcm9tIFwiLi4vQ29yZS1BUEkvUGVybGluTm9pc2UvUGVybGluZ05vaXNlXCI7XHJcbnZhciBTaW1wbGV4Tm9pc2UgPSByZXF1aXJlKFwic2ltcGxleC1ub2lzZVwiKTtcclxuXHJcbmxldCBjdXJyZW50VGVycmFpbjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXR1cm5UZXJyYWluUG9pbnRlcigpIHtcclxuICAgIHJldHVybiBjdXJyZW50VGVycmFpbjtcclxufVxyXG5cclxuLyplc2xpbnQgY29tcGxleGl0eTogW1wiZXJyb3JcIiwgMjBdKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGVycmFpbihzZWVkLCBTY2VuZVRvR2V0KSB7XHJcbiAgICAvLy0tLS0tLS0tLS0tLVtNQUlOIEZVTkNUSU9OIFZBUklBQkxFU10tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBjb25zdCBzaW1wbGV4ID0gbmV3IFNpbXBsZXhOb2lzZShzZWVkKTtcclxuICAgIGxldCBnZW9tZXRyeSA9IG5ldyBQbGFuZUJ1ZmZlckdlb21ldHJ5KDUwMCwgNTAwLCAxMDAsIDEwMCk7XHJcbiAgICBsZXQgY29sb3VycyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uQXR0cmlidXRlID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIik7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bRWRpdCB0aGUgR2VvbXRyeSBBY2NvcmRpbmdseV0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uY291bnQ7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAvLyBHZXQgRGF0YSBwb3NpdGlvblxyXG4gICAgICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgdmVydGV4LmZyb21CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25BdHRyaWJ1dGUsIGkpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBIZWlnaHQgZnJvbSBQZXJsaW4gTm9pc2UgR2VuZXJhdG9yXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHNpbXBsZXgubm9pc2UyRCh2ZXJ0ZXgueCAvIDEyOCwgdmVydGV4LnkgLyAxMjgpICogMzA7XHJcbiAgICAgICAgLy8gU2V0IHRoZSBoZWlnaHQgYWNjb3JkaW5nbHlcclxuICAgICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5W2kgKiAzICsgMl0gPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBWZXJ0aWNlIGNvbG91cnMgYWNjb3JkaW5seVxyXG4gICAgICAgIGlmIChoZWlnaHQgPiAyMykge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMSwgMSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPiA1KSB7XHJcbiAgICAgICAgICAgIGNvbG91cnMucHVzaCgwLjU2LCAwLjU0LCAwLjQ4KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA8IDIpIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTAxLCAwLjc3MiwgMC44Nyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTYsIDAuNjgsIDAuMTY2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bQ3JlYXRlIE1hdGVyaWFsXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIHZhciBtYXRlcmlhbCA9IG5ldyBNZXNoUGhvbmdNYXRlcmlhbCh7XHJcbiAgICAgICAgdmVydGV4Q29sb3JzOiBjb2xvdXJzLFxyXG4gICAgICAgIHJlZmxlY3Rpdml0eTogMCxcclxuICAgICAgICByb3VnaG5lc3M6IDEsXHJcbiAgICAgICAgZmxhdFNoYWRpbmc6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtDcmVhdGUgTWVzaF0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICB2YXIgcGxhbmUyID0gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgIHBsYW5lMi5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgIHBsYW5lMi5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgIHBsYW5lMi5wb3NpdGlvbi55ID0gLTM7XHJcbiAgICBwbGFuZTIucm90YXRlWChNYXRoLlBJIC8gMiArIE1hdGguUEkpO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0VkaXQgY29sb3VyIGF0dHJpYnV0ZV0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgXCJjb2xvclwiLFxyXG4gICAgICAgIG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2xvdXJzKSwgMylcclxuICAgICk7XHJcbiAgICAvL2dlb21ldHJ5LmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bQWRkIHRvIEJhc2UgU2NlbmVdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgY3VycmVudFRlcnJhaW4gPSBwbGFuZTI7XHJcbiAgICBwbGFuZTIubmFtZSA9IFwiTUFJTl9URVJSQUlOXCI7XHJcbiAgICBTY2VuZVRvR2V0LmFkZChwbGFuZTIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUZXJyYWluQ2h1bmsoc2VlZCwgUG9zaXRpb24sIGdhaW4sIGRpdmlzb3IpIHtcclxuICAgIC8vLS0tLS0tLS0tLS0tW01BSU4gRlVOQ1RJT04gVkFSSUFCTEVTXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIC8vY29uc3Qgc2ltcGxleCA9IG5ldyBTaW1wbGV4Tm9pc2Uoc2VlZCk7XHJcbiAgICBsZXQgZ2VvbWV0cnkgPSBuZXcgUGxhbmVCdWZmZXJHZW9tZXRyeSg1MDAsIDUwMCwgMzAsIDMwKTtcclxuICAgIGxldCBjb2xvdXJzID0gW107XHJcbiAgICBjb25zdCBmYm0gPSBuZXcgRkJNKHtcclxuICAgICAgICBzZWVkOiBzZWVkLFxyXG4gICAgICAgIHNjYWxlOiAwLjAwNyxcclxuICAgICAgICBvY3RhdmVzOiA2LFxyXG4gICAgICAgIHBlcnNpc3RhbmNlOiAwLjUsXHJcbiAgICAgICAgbGFjdW5hcml0eTogMixcclxuICAgICAgICByZWRpc3RyaWJ1dGlvbjogMixcclxuICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2ltcGxleCA9IG5ldyBQZXJsaW4oc2VlZClcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtDcmVhdGUgTWF0ZXJpYWxdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgdmFyIG1hdGVyaWFsID0gbmV3IE1lc2hQaG9uZ01hdGVyaWFsKHtcclxuICAgICAgICB2ZXJ0ZXhDb2xvcnM6IGNvbG91cnMsXHJcbiAgICAgICAgcmVmbGVjdGl2aXR5OiAwLFxyXG4gICAgICAgIGZsYXRTaGFkaW5nOiB0cnVlLFxyXG4gICAgICAgIGJsZW5kaW5nOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bQ3JlYXRlIE1lc2hdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgdmFyIHBsYW5lMiA9IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICBwbGFuZTIucmVjZWl2ZVNoYWRvdyA9IHRydWU7XHJcbiAgICBwbGFuZTIuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICBwbGFuZTIucG9zaXRpb24uc2V0KFBvc2l0aW9uLngsIC0zLCBQb3NpdGlvbi55KTtcclxuICAgIHBsYW5lMi5yb3RhdGVYKE1hdGguUEkgLyAyICsgTWF0aC5QSSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25BdHRyaWJ1dGUgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKTtcclxuICAgIC8vLS0tLS0tLS0tLS0tW0VkaXQgdGhlIEdlb210cnkgQWNjb3JkaW5nbHldLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgZm9yICh2YXIgaSA9IDA7ICBpIDwgcG9zaXRpb25BdHRyaWJ1dGUuY291bnQgO2krKykge1xyXG4gICAgICAgIC8vIEdldCBEYXRhIHBvc2l0aW9uXHJcbiAgICAgICAgY29uc3QgdmVydGV4ID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICB2ZXJ0ZXguZnJvbUJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbkF0dHJpYnV0ZSwgaSk7XHJcblxyXG4gICAgICAgIHBsYW5lMi5sb2NhbFRvV29ybGQodmVydGV4KVxyXG5cclxuICAgICAgICAvLyBDaGVjayBIZWlnaHQgZnJvbSBQZXJsaW4gTm9pc2UgR2VuZXJhdG9yXHJcblxyXG4gICAgICAgIGxldCBsb2NhdGlvbiA9IG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICAodmVydGV4LnggKyAoUG9zaXRpb24ueCkpICogZGl2aXNvciwgIFxyXG4gICAgICAgICAgICAodmVydGV4LnkgLSAoUG9zaXRpb24ueSkpICogZGl2aXNvclxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGZibS5nZXQyKGxvY2F0aW9uKSAqIGdhaW4gKiA0XHJcbiAgICAgICAgLy8gU2V0IHRoZSBoZWlnaHQgYWNjb3JkaW5nbHlcclxuICAgICAgICBpZiAobG9jYXRpb24ueCA+PSAyNS4wICYmIGxvY2F0aW9uLnkgPD0gLTI1LjAgJiYgbG9jYXRpb24ueCA8PSAyNS4zICYmIGxvY2F0aW9uLnkgPj0gLTI1LjMgKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxyXG4gICAgICAgICAgICAvL2hlaWdodCA9IDUwMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9zaXRpb25BdHRyaWJ1dGUuc2V0WihpLCBoZWlnaHQpXHJcbiAgICAgICAgLy9nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5W2kgKiAzICsgMl0gPSBoZWlnaHQ7XHJcblxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgVmVydGljZSBjb2xvdXJzIGFjY29yZGlubHlcclxuICAgICAgICBpZiAoaGVpZ2h0ID4gMTAwKSB7XHJcbiAgICAgICAgICAgIGNvbG91cnMucHVzaCgxLCAxLCAxKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA+IDUwKSB7XHJcbiAgICAgICAgICAgIGNvbG91cnMucHVzaCgwLjU2LCAwLjU0LCAwLjQ4KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA+IDgpIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTYsIDAuNjgsIDAuMTY2KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA+IDUpe1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMC45OTIyLCAwLjg3NDUsIDAuNDY2KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGhlaWdodFNlY29uZGFyeSA9IHNpbXBsZXguZ2V0MihuZXcgVmVjdG9yMigodmVydGV4LnggKyAoUG9zaXRpb24ueCkpICogZGl2aXNvciwgKHZlcnRleC55IC0gKFBvc2l0aW9uLnkpKSAqIGRpdmlzb3IpKSAqIDAuNzVcclxuICAgICAgICAgICAgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheVtpICogMyArIDJdID0gaGVpZ2h0U2Vjb25kYXJ5O1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMCwgcmFuZG9tSW50RnJvbUludGVydmFsKDQwMCwgNTAwKSAvIDEwMDAsIHJhbmRvbUludEZyb21JbnRlcnZhbCg3MDAsIDgwMCkgLyAxMDAwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bRWRpdCBjb2xvdXIgYXR0cmlidXRlXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcclxuICAgICAgICBcImNvbG9yXCIsXHJcbiAgICAgICAgbmV3IEJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbG91cnMpLCAzKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtBZGQgdG8gQmFzZSBTY2VuZV0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBjdXJyZW50VGVycmFpbiA9IHBsYW5lMjtcclxuICAgIHBsYW5lMi5uYW1lID0gYFRlcnJhaW5fQ2h1bmtfJHtQb3NpdGlvbi54fToke1Bvc2l0aW9uLnl9YDtcclxuICAgIHJldHVybiBwbGFuZTI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVycmFpbkhlaWdodChwb3NpdGlvbiwgc2VlZCwgZ2FpbiwgZGl2aXNvciwgc2NlbmUpIHtcclxuICAgIGNvbnN0IGZibSA9IG5ldyBGQk0oe1xyXG4gICAgICAgIHNlZWQ6IHNlZWQsXHJcbiAgICAgICAgc2NhbGU6IDAuMDA3LFxyXG4gICAgICAgIG9jdGF2ZXM6IDYsXHJcbiAgICAgICAgcGVyc2lzdGFuY2U6IDAuNSxcclxuICAgICAgICBsYWN1bmFyaXR5OiAyLFxyXG4gICAgICAgIHJlZGlzdHJpYnV0aW9uOiAyLFxyXG4gICAgICAgIGhlaWdodDogNDAsXHJcbiAgICB9KTtcclxuICAgIC8vY29uc29sZS50YWJsZShwb3NpdGlvbilcclxuICAgIGxldCBoZWlnaHQgPSBmYm0uZ2V0MihuZXcgVmVjdG9yMigocG9zaXRpb24ueCkgKiBkaXZpc29yLCAoLXBvc2l0aW9uLnogKSAqIGRpdmlzb3IpKSAqIGdhaW4gKiA0XHJcbiAgICAvKmxldCBjdWJlID0gZGVidWdDdWJlKClcclxuICAgIHNjZW5lLmFkZChjdWJlKVxyXG4gICAgY3ViZS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCAsIGhlaWdodCwgcG9zaXRpb24ueilcclxuICAgIGN1YmUubWF0ZXJpYWwuY29sb3IgPSBuZXcgQ29sb3IoaGVpZ2h0KjIpKi9cclxuICAgIHJldHVybiBoZWlnaHQgLSAzXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyLCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IHJvdW5kbnVtIH0gZnJvbSBcIi4uLy4uL0FsZ29yaXRobXMvTWF0aFV0aWxzXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlVGVycmFpbkNodW5rIH0gZnJvbSBcIi4uL1Byb2NlZHVsZVRlcnJhaW5cIjtcclxuaW1wb3J0IHsgR2VuZXJhdGVUcmVlcyB9IGZyb20gXCIuLi9zdGF0aWNBc3NldHMvdHJlZUJ1aWxkZXJcIjtcclxuaW1wb3J0IHsgY2hlY2tCaW9tZUxvY2F0aW9uIH0gZnJvbSBcIi4vdXRpbHMvR2VuZXJhdGVCaW9tZXNNYXAudHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRlcnJhaW5Bcm91bmRQbGF5ZXIoc2VlZCwgY2FtZXJhLCBzY2VuZSkge1xyXG4gICAgbGV0IGxvYWRlZENodW5rcyA9IHt9O1xyXG4gICAgbGV0IGNodW5rc0luTWVtID0ge307XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHZlY3RvciA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgY2FtZXJhLmdldFdvcmxkUG9zaXRpb24odmVjdG9yKTtcclxuICAgICAgICBsZXQgeW91ckNodW5rID0gbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgIHJvdW5kbnVtKHZlY3Rvci54LCA1MDApLFxyXG4gICAgICAgICAgICByb3VuZG51bSh2ZWN0b3IueiwgNTAwKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBjaHVua3lUaGluZyA9IChDaHVua1lvdXJJbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoQ2h1bmtZb3VySW4ueCA9PT0gLTApIHtcclxuICAgICAgICAgICAgICAgIENodW5rWW91ckluLnggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChDaHVua1lvdXJJbi55ID09PSAtMCkge1xyXG4gICAgICAgICAgICAgICAgQ2h1bmtZb3VySW4ueSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgbG9hZGVkQ2h1bmtzW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSAhPT1cclxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIGxvYWRlZENodW5rc1tgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gPT09IHRydWVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFeGlzdGluZyB0ZXJyYWluLCBsZWZ0IGhlYXIgZm9yIGEgZnV0dXJlIEFQSVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgQ2h1bmtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2FkZWRDaHVua3NbYCR7Q2h1bmtZb3VySW4ueH06JHtDaHVua1lvdXJJbi55fWBdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBjaHVuayA9IGdlbmVyYXRlVGVycmFpbkNodW5rKHNlZWQsIENodW5rWW91ckluLCAxMjAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICBHZW5lcmF0ZVRyZWVzKDEwMCwgc2NlbmUsIG5ldyBWZWN0b3IzKENodW5rWW91ckluLngtMjUwLCAyNTAsQ2h1bmtZb3VySW4ueS0yNTApLCBuZXcgVmVjdG9yMyhDaHVua1lvdXJJbi54KzI1MCwyNTAsQ2h1bmtZb3VySW4ueSsyNTApLCBzZWVkLCAxMjAsIDAuMSwgQ2h1bmtZb3VySW4pXHJcbiAgICAgICAgICAgICAgICBjaHVua3NJbk1lbVtgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gPSBjaHVuaztcclxuICAgICAgICAgICAgICAgIHNjZW5lLmFkZChjaHVuayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjaHVua3lUaGluZyh5b3VyQ2h1bmspXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngrNTAwLCB5b3VyQ2h1bmsueSkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngrNTAwLCB5b3VyQ2h1bmsueSs1MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54LCB5b3VyQ2h1bmsueSs1MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54LTUwMCwgeW91ckNodW5rLnkrNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueC01MDAsIHlvdXJDaHVuay55KSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueC01MDAsIHlvdXJDaHVuay55LTUwMCkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngsIHlvdXJDaHVuay55LTUwMCkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngrNTAwLCB5b3VyQ2h1bmsueS01MDApKVxyXG4gICAgfSwgMTAwMCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBNdWx0aXBseVZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vQWxnb3JpdGhtcy9WZWN0b3JNYXRocy50c1wiO1xyXG5pbXBvcnQgKiBhcyBTaW1wbGV4Tm9pc2UgZnJvbSAnc2ltcGxleC1ub2lzZSdcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tCaW9tZUxvY2F0aW9uKHBvc2l0aW9uOlZlY3RvcjIsIHNlZWQ6bnVtYmVyLCBnYWluOm51bWJlciA9IDEsIG1pbkhlaWdodDpudW1iZXIgPSAwKTpTdHJpbmd7XHJcbiAgICAvLyBDcmVhdGUgbmV3IG5vaXNlIG1hcCBcXFxcXHJcbiAgICBsZXQgbm9pc2VNYXAgPSBuZXcgU2ltcGxleE5vaXNlKGAke3NlZWR9YClcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgWCB2YWx1ZSBcXFxcXHJcbiAgICBsZXQgdmVjdG9yID0gTXVsdGlwbHlWZWN0b3IyKHBvc2l0aW9uLCAwLjA1KVxyXG4gICAgbGV0IFhWYWx1ZSA9IG5vaXNlTWFwLm5vaXNlMkQodmVjdG9yLngsIHZlY3Rvci55KSArIG1pbkhlaWdodFxyXG4gICAgY29uc29sZS5sb2coWFZhbHVlKVxyXG5cclxuICAgIHJldHVybiBYVmFsdWUgPiAwID8gXCJQbGFpbnNcIiA6IFwiU2VhXCJcclxuXHJcbn1cclxuIiwiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG5pbXBvcnQge1xyXG4gICAgRG91YmxlU2lkZSxcclxuICAgIEdyb3VwLFxyXG4gICAgTWVzaCxcclxuICAgIE1lc2hQaG9uZ01hdGVyaWFsLFxyXG4gICAgU3BoZXJlR2VvbWV0cnksXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcblxyXG4vLyBSYW5kb21seSBkZWxwbGFjZSBjbG91ZCB2ZXJ0aWNpZXNcclxuY29uc3QgbWFwID0gKHZhbCwgc21pbiwgc21heCwgZW1pbiwgZW1heCkgPT5cclxuICAgICgoZW1heCAtIGVtaW4pICogKHZhbCAtIHNtaW4pKSAvIChzbWF4IC0gc21pbikgKyBlbWluO1xyXG5jb25zdCBqaXR0ZXIgPSAoZ2VvbWV0cnksIHBlcikgPT4ge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmNvdW50OyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheVtpICogM10gKz0gbWFwKFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAtcGVyLFxyXG4gICAgICAgICAgICBwZXJcclxuICAgICAgICApO1xyXG4gICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlbaSAqIDMgKyAxXSArPSBtYXAoXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIC1wZXIsXHJcbiAgICAgICAgICAgIHBlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheVtpICogMyArIDJdICs9IG1hcChcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgLXBlcixcclxuICAgICAgICAgICAgcGVyXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBHZW5lcmF0ZUNsb3VkcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3MsIHNjZW5lLCBzcGVlZCwgc2NhbGUpIHtcclxuICAgICAgICBjb25zdCBncm91cCA9IG5ldyBHcm91cCgpO1xyXG5cclxuICAgICAgICBjb25zdCB0dWZ0MSA9IG5ldyBTcGhlcmVHZW9tZXRyeSgxLjUgKiBzY2FsZSwgNywgMTEpO1xyXG4gICAgICAgIHR1ZnQxLnRyYW5zbGF0ZSgtMiAqIHNjYWxlLCAwLCAwKTtcclxuXHJcbiAgICAgICAgY29uc3QgdHVmdDMgPSBuZXcgU3BoZXJlR2VvbWV0cnkoMS41ICogc2NhbGUsIDcsIDExKTtcclxuICAgICAgICB0dWZ0My50cmFuc2xhdGUoMiAqIHNjYWxlLCAwLCAwKTtcclxuXHJcbiAgICAgICAgY29uc3QgdHVmdDIgPSBuZXcgU3BoZXJlR2VvbWV0cnkoMi4wICogc2NhbGUsIDcsIDExKTtcclxuICAgICAgICB0dWZ0Mi50cmFuc2xhdGUoMCwgMCwgMCk7XHJcblxyXG4gICAgICAgIGppdHRlcih0dWZ0MSwgMC4yKTtcclxuICAgICAgICBqaXR0ZXIodHVmdDIsIDAuMSk7XHJcbiAgICAgICAgaml0dGVyKHR1ZnQzLCAwLjEpO1xyXG5cclxuICAgICAgICB0dWZ0MS5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXQgPSBuZXcgTWVzaFBob25nTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBmbGF0U2hhZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgc2lkZTogRG91YmxlU2lkZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGNsb3VkID0gbmV3IE1lc2godHVmdDEsIG1hdCk7XHJcbiAgICAgICAgbGV0IGNsb3VkMSA9IG5ldyBNZXNoKHR1ZnQyLCBtYXQpO1xyXG4gICAgICAgIGxldCBjbG91ZDIgPSBuZXcgTWVzaCh0dWZ0MywgbWF0KTtcclxuXHJcbiAgICAgICAgZ3JvdXAuYWRkKGNsb3VkKTtcclxuICAgICAgICBncm91cC5hZGQoY2xvdWQxKTtcclxuICAgICAgICBncm91cC5hZGQoY2xvdWQyKTtcclxuXHJcbiAgICAgICAgc2NlbmUuYWRkKGdyb3VwKTtcclxuICAgICAgICBncm91cC5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgICAgICBncm91cC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgICAgICBncm91cC5wb3NpdGlvbi54ID0gcG9zLng7XHJcbiAgICAgICAgZ3JvdXAucG9zaXRpb24ueSA9IHBvcy55O1xyXG4gICAgICAgIGdyb3VwLnBvc2l0aW9uLnogPSBwb3MuejtcclxuXHJcbiAgICAgICAgdGhpcy5ncmFzcyA9IGdyb3VwO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgbGV0IGdlb3MgPSB0aGlzLmdyYXNzO1xyXG4gICAgICAgIGdlb3MucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgIGlmIChnZW9zLnBvc2l0aW9uLnggPiA0MDApIHtcclxuICAgICAgICAgICAgZ2Vvcy5wb3NpdGlvbi54ID0gdGhpcy5wb3MueDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcclxubGV0IFt3LCBhLCBzLCBkLCB1cCwgZG93biwgZSwgcSwgc2hpZnRdID0gW1xyXG4gICAgZmFsc2UsXHJcbiAgICBmYWxzZSxcclxuICAgIGZhbHNlLFxyXG4gICAgZmFsc2UsXHJcbiAgICBmYWxzZSxcclxuICAgIGZhbHNlLFxyXG4gICAgZmFsc2UsXHJcbiAgICBmYWxzZSxcclxuICAgIDEsXHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udHJvbEhhbmRsZXJJbml0KGRvY3VtZW50LCBjaGlsZDIpIHtcclxuICAgIC8qZXNsaW50IGNvbXBsZXhpdHk6IFtcImVycm9yXCIsIDIwXSovXHJcbiAgICBmdW5jdGlvbiBvbkRvY3VtZW50S2V5RG93bihldmVudCwgdmFsKSB7XHJcbiAgICAgICAgaWYgKGNoaWxkMiA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBrZXlDb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDg3KSB7XHJcbiAgICAgICAgICAgIHcgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSA4Mykge1xyXG4gICAgICAgICAgICBzID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gNjUpIHtcclxuICAgICAgICAgICAgYSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDY4KSB7XHJcbiAgICAgICAgICAgIGQgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSAzOCkge1xyXG4gICAgICAgICAgICB1cCA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDQwKSB7XHJcbiAgICAgICAgICAgIGRvd24gPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSA2OSkge1xyXG4gICAgICAgICAgICBlID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gODEpIHtcclxuICAgICAgICAgICAgcSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDE2KSB7XHJcbiAgICAgICAgICAgIHNoaWZ0ID0gdmFsID8gMC41IDogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcImtleWRvd25cIixcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBvbkRvY3VtZW50S2V5RG93bihlLCB0cnVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcImtleXVwXCIsXHJcbiAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgb25Eb2N1bWVudEtleURvd24oZSwgZmFsc2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFsc2VcclxuICAgICk7XHJcbn1cclxuXHJcbi8qZXNsaW50IGNvbXBsZXhpdHk6IFtcImVycm9yXCIsIDIwXSovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250cm9sSGFuZGxlclVwZGF0ZShDYW1lcmEpIHtcclxuICAgIGlmICh3KSB7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgQ2FtZXJhLmdldFdvcmxkRGlyZWN0aW9uKGRpcmVjdGlvbik7XHJcbiAgICAgICAgQ2FtZXJhLnBvc2l0aW9uLmFkZChkaXJlY3Rpb24ubXVsdGlwbHlTY2FsYXIoc2hpZnQgPT09IDEgPyAxIDogMC4yNSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHMpIHtcclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICBDYW1lcmEuZ2V0V29ybGREaXJlY3Rpb24oZGlyZWN0aW9uKTtcclxuICAgICAgICBDYW1lcmEucG9zaXRpb24uYWRkKFxyXG4gICAgICAgICAgICBkaXJlY3Rpb24ubXVsdGlwbHlTY2FsYXIoLShzaGlmdCA9PT0gMSA/IDEgOiAwLjI1KSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKGEpIHtcclxuICAgICAgICBDYW1lcmEucm90YXRlWSgwLjA0ICogc2hpZnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGQpIHtcclxuICAgICAgICBDYW1lcmEucm90YXRlWSgtMC4wNCAqIHNoaWZ0KTtcclxuICAgIH1cclxuICAgIGlmICh1cCkge1xyXG4gICAgICAgIENhbWVyYS5yb3RhdGVYKDAuMDQgKiBzaGlmdCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZG93bikge1xyXG4gICAgICAgIENhbWVyYS5yb3RhdGVYKC0wLjA0ICogc2hpZnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHEpIHtcclxuICAgICAgICBDYW1lcmEucm90YXRlWigwLjAyICogc2hpZnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGUpIHtcclxuICAgICAgICBDYW1lcmEucm90YXRlWigtMC4wMiAqIHNoaWZ0KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmxldCBsaXN0ZW5pbmdIb29rcyA9IHt9O1xyXG5leHBvcnQgZnVuY3Rpb24gQ29udHJvbEV2ZW50TGlzdGVuZXIob2N1bWVudCwgY2hpbGQyKSB7XHJcbiAgICBsZXQgW3dLZXksIGFLZXksIHNLZXksIGRLZXksIHVwS2V5LCBkb3duS2V5LCBlS2V5LCBxS2V5LCBzaGlmdEtleSwgektleSwgeEtleV0gPSBbXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICBdO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uRG9jdW1lbnRLZXlEb3duRXZlbnQoZXZlbnQsIHZhbCkge1xyXG4gICAgICAgIGlmIChjaGlsZDIgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIga2V5Q29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSA4Nykge1xyXG4gICAgICAgICAgICB3S2V5ID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gODMpIHtcclxuICAgICAgICAgICAgc0tleSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDY1KSB7XHJcbiAgICAgICAgICAgIGFLZXkgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSA2OCkge1xyXG4gICAgICAgICAgICBkS2V5ID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gMzgpIHtcclxuICAgICAgICAgICAgdXBLZXkgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSA0MCkge1xyXG4gICAgICAgICAgICBkb3duS2V5ID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gNjkpIHtcclxuICAgICAgICAgICAgZUtleSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDgxKSB7XHJcbiAgICAgICAgICAgIHFLZXkgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSA4OCkge1xyXG4gICAgICAgICAgICB6S2V5ID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gOTApIHtcclxuICAgICAgICAgICAgeEtleSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDE2KSB7XHJcbiAgICAgICAgICAgIHNoaWZ0S2V5ID0gdmFsID8gMC41IDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobGlzdGVuaW5nSG9va3MpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlKHt3S2V5LCBhS2V5LCBzS2V5LCBkS2V5LCB1cEtleSwgZG93bktleSwgZUtleSwgcUtleSwgc2hpZnRLZXksIHpLZXksIHhLZXl9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwia2V5ZG93blwiLFxyXG4gICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG9uRG9jdW1lbnRLZXlEb3duRXZlbnQoZSwgdHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWxzZVxyXG4gICAgKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJrZXl1cFwiLFxyXG4gICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG9uRG9jdW1lbnRLZXlEb3duRXZlbnQoZSwgZmFsc2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFsc2VcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5Ub0NvbnJvbHMoYXJnKSB7XHJcbiAgICBsZXQgdXVpZCA9IHY0KCk7XHJcbiAgICBsaXN0ZW5pbmdIb29rc1t1dWlkXSA9IGFyZztcclxuICAgIHJldHVybiB1dWlkO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBDbGVhblVwTGlzdGVuZXIodXVpZCkge1xyXG4gICAgZGVsZXRlIGxpc3RlbmluZ0hvb2tzW3V1aWRdO1xyXG59XHJcbiIsIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxyXG5cclxuaW1wb3J0IHtcclxuICBCb3hHZW9tZXRyeSxcclxuICBDb2xvcixcclxuICBDeWxpbmRlckdlb21ldHJ5LFxyXG4gIEdyb3VwLFxyXG4gIE1lc2gsXHJcbiAgTWVzaExhbWJlcnRNYXRlcmlhbCxcclxufSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgbGlzdGVuVG9FdmVudCB9IGZyb20gXCIuLi8uLi9Db3JlLUFQSS9Db25uZWN0QVBJXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlTGFiZWwgfSBmcm9tIFwiLi4vbmFtZXRhZ1wiO1xyXG5sZXQgcGxheWVycyA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1ha2VOZXdDdWJlUGxheWVyKFxyXG4gIGNvbG9yID0gXCJyZ2IoMCwwLDApXCIsXHJcbiAgbmFtZSA9IFwidW5rb3duXCIsXHJcbiAgU2NlbmVUb0dldFxyXG4pIHtcclxuICBjb25zdCBncm91cCA9IG5ldyBHcm91cCgpO1xyXG4gIGNvbnN0IGdlb21ldHJ5ID0gbmV3IEJveEdlb21ldHJ5KDEsIDEsIDEpO1xyXG4gIGNvbnN0IG1hdGVyaWFsID0gbmV3IE1lc2hMYW1iZXJ0TWF0ZXJpYWwoe1xyXG4gICAgY29sb3I6IG5ldyBDb2xvcihjb2xvciksXHJcbiAgICBlbWlzc2l2ZTogbmV3IENvbG9yKGNvbG9yKSxcclxuICB9KTtcclxuICBjb25zdCBjdWJlID0gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICBncm91cC5hZGQoY3ViZSk7XHJcbiAgY29uc3QgY3ljbGluZGVyID0gbmV3IEN5bGluZGVyR2VvbWV0cnkoMC4zLCAwLjMsIDAuNiwgMzApO1xyXG4gIGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHsgY29sb3I6IFwiIzAwMDAwMFwiIH0pO1xyXG4gIGNvbnN0IGN5bGluZGVyQnVpbGQgPSBuZXcgTWVzaChjeWNsaW5kZXIsIG1hdGVyaWFsMik7XHJcbiAgY3lsaW5kZXJCdWlsZC5yb3RhdGVYKE1hdGguUEkgLyAyICsgTWF0aC5QSSk7XHJcbiAgY3lsaW5kZXJCdWlsZC5wb3NpdGlvbi5zZXQoMCwgMCwgLTAuNik7XHJcbiAgZ3JvdXAuYWRkKGN5bGluZGVyQnVpbGQpO1xyXG5cclxuICBnZW5lcmF0ZUxhYmVsKG5hbWUsIGdyb3VwKTtcclxuICBTY2VuZVRvR2V0LmFkZChncm91cCk7XHJcbiAgZ3JvdXAubmFtZSA9IG5hbWU7XHJcbiAgcmV0dXJuIGdyb3VwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW5pdE1haW5HYW1lSGFuZGxlcihTY2VuZVRvR2V0KSB7XHJcbiAgbGlzdGVuVG9FdmVudChcIk5ld1BsYXllclwiLCAoaWQsIGRhdGEpID0+IHtcclxuICAgIC8vbGV0IGN1YmUgPSBtYWtlQ3ViZShkYXRhLmNvbG9yLCBkYXRhLm5hbWUsIFNjZW5lVG9HZXQpO1xyXG4gICAgLy9hZGR0b0dhbWVGZWVkKGRhdGE/Lm5hbWUsIFwiSm9pbmVkIHRoZSBnYW1lIVwiKTtcclxuXHJcbiAgICAvL3BsYXllcnNbYCR7aWR9YF0gPSBjdWJlO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhZyhiYXNlV2lkdGgsIHNpemUsIG5hbWUpIHtcclxuICAgIGNvbnN0IGJvcmRlclNpemUgPSAyO1xyXG4gICAgY29uc3QgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgY29uc3QgZm9udCA9IGAke3NpemV9cHggVmVyZGFuYWA7XHJcbiAgICBjdHguZm9udCA9IGZvbnQ7XHJcbiAgICAvLyBtZWFzdXJlIGhvdyBsb25nIHRoZSBuYW1lIHdpbGwgYmVcclxuICAgIGNvbnN0IHRleHRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dChuYW1lKS53aWR0aDtcclxuXHJcbiAgICBjb25zdCBkb3VibGVCb3JkZXJTaXplID0gYm9yZGVyU2l6ZSAqIDI7XHJcbiAgICBjb25zdCB3aWR0aCA9IGJhc2VXaWR0aCArIGRvdWJsZUJvcmRlclNpemU7XHJcbiAgICBjb25zdCBoZWlnaHQgPSBzaXplICsgZG91YmxlQm9yZGVyU2l6ZTtcclxuICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgIC8vIG5lZWQgdG8gc2V0IGZvbnQgYWdhaW4gYWZ0ZXIgcmVzaXppbmcgY2FudmFzXHJcbiAgICBjdHguZm9udCA9IGZvbnQ7XHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG5cclxuICAgIC8vY3R4LmZpbGxTdHlsZSA9ICdibHVlJztcclxuICAgIC8vY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIC8vIHNjYWxlIHRvIGZpdCBidXQgZG9uJ3Qgc3RyZXRjaFxyXG4gICAgY29uc3Qgc2NhbGVGYWN0b3IgPSBNYXRoLm1pbigxLCBiYXNlV2lkdGggLyB0ZXh0V2lkdGgpO1xyXG4gICAgY3R4LnRyYW5zbGF0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xyXG4gICAgY3R4LnNjYWxlKHNjYWxlRmFjdG9yLCAxKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICBjdHguZmlsbFRleHQobmFtZSwgMCwgMCk7XHJcblxyXG4gICAgcmV0dXJuIGN0eC5jYW52YXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUxhYmVsKG5hbWUsIGdyb3VwKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBjcmVhdGVUYWcoMzAwLCAzMiwgbmFtZSk7XHJcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY2FudmFzKTtcclxuICAgIC8vIGJlY2F1c2Ugb3VyIGNhbnZhcyBpcyBsaWtlbHkgbm90IGEgcG93ZXIgb2YgMlxyXG4gICAgLy8gaW4gYm90aCBkaW1lbnNpb25zIHNldCB0aGUgZmlsdGVyaW5nIGFwcHJvcHJpYXRlbHkuXHJcbiAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuICAgIHRleHR1cmUud3JhcFMgPSBUSFJFRS5DbGFtcFRvRWRnZVdyYXBwaW5nO1xyXG4gICAgdGV4dHVyZS53cmFwVCA9IFRIUkVFLkNsYW1wVG9FZGdlV3JhcHBpbmc7XHJcblxyXG4gICAgY29uc3QgbGFiZWxNYXRlcmlhbCA9IG5ldyBUSFJFRS5TcHJpdGVNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiB0ZXh0dXJlLFxyXG4gICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICAvLyBpZiB1bml0cyBhcmUgbWV0ZXJzIHRoZW4gMC4wMSBoZXJlIG1ha2VzIHNpemVcclxuICAgIC8vIG9mIHRoZSBsYWJlbCBpbnRvIGNlbnRpbWV0ZXJzLlxyXG4gICAgY29uc3QgbGFiZWxCYXNlU2NhbGUgPSAwLjAxO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsID0gbmV3IFRIUkVFLlNwcml0ZShsYWJlbE1hdGVyaWFsKTtcclxuICAgIGdyb3VwLmFkZChsYWJlbCk7XHJcbiAgICBsYWJlbC5wb3NpdGlvbi55ID0gMTtcclxuXHJcbiAgICBsYWJlbC5zY2FsZS54ID0gY2FudmFzLndpZHRoICogbGFiZWxCYXNlU2NhbGU7XHJcbiAgICBsYWJlbC5zY2FsZS55ID0gY2FudmFzLmhlaWdodCAqIGxhYmVsQmFzZVNjYWxlO1xyXG4gICAgcmV0dXJuIGdyb3VwO1xyXG59XHJcbiIsImltcG9ydCB7IEdyb3VwLCBNZXNoUGhvbmdNYXRlcmlhbCwgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyByYWRpYW50cyB9IGZyb20gXCIuLi8uLi9BbGdvcml0aG1zL2RlZ1RvUmFkXCI7XHJcbmltcG9ydCB7IGFkZEdMQkZpbGUgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL0dMQkxvYWRlclwiO1xyXG5pbXBvcnQgeyBkZWJ1Z0N1YmUgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvZ2Vtb3RyeU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlUG9pbnRMaWdodCB9IGZyb20gXCIuLi8uLi9Db3JlLUFQSS9MaWdodGluZ01hbmFnZXJcIjtcclxuaW1wb3J0IHsgYWRkVG9SZW5kZXJTZXF1ZW5jZSB9IGZyb20gXCIuLi8uLi9Db3JlLUFQSS9SZW5kZXJpbmdIYW5kbGVyXCI7XHJcbmltcG9ydCB7IGxpc3RlblRvQ29ucm9scyB9IGZyb20gXCIuLi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBnZXREYXlTdGF0ZSwgcmVtb3ZlRnJvbURheVRpbWVIb29rIH0gZnJvbSBcIi4uL0RheU5pZ2h0Q3ljbGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWtlUGxhbmUge1xyXG4gICAgY29uc3RydWN0b3IoU2NlbmVUb0dldCwgc2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLlNjZW5lVG9HZXQgPSBTY2VuZVRvR2V0O1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB0aGlzLmdyb3VwID0gbmV3IEdyb3VwKCk7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5lbGV2YXRvclBpdGNoID0gMDtcclxuICAgICAgICB0aGlzLmFpcmVsb25lUGl0Y2ggPSAwO1xyXG4gICAgICAgIHRoaXMucnVkZGVyUGl0Y2ggPSAwO1xyXG4gICAgICAgIHRoaXMuY2hlY2tlciA9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWRGaWxlcygpIHtcclxuICAgICAgICB0aGlzLnBsYW5lID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICAgICAgXCIvQWlyY3JhZnQvQmFzaWNQbGFuZS9QbGFuZS5nbGJcIixcclxuICAgICAgICAgICAgdGhpcy5TY2VuZVRvR2V0XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnByb3BzID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICAgICAgXCIvQWlyY3JhZnQvQmFzaWNQbGFuZS9CbGFkZXMuZ2xiXCIsXHJcbiAgICAgICAgICAgIHRoaXMuU2NlbmVUb0dldFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5sZWZ0QWlyZWxvbmUgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgICAgICBcIi9BaXJjcmFmdC9CYXNpY1BsYW5lL0xlZnRBaXJlbG9uZS5nbGJcIixcclxuICAgICAgICAgICAgdGhpcy5TY2VuZVRvR2V0XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnJpZ2h0QWlyZWxvbmUgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgICAgICBcIi9BaXJjcmFmdC9CYXNpY1BsYW5lL1JpZ2h0QWlyZWxvbmUuZ2xiXCIsXHJcbiAgICAgICAgICAgIHRoaXMuU2NlbmVUb0dldFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5sZWZ0Q29udHJvbFN1cmZhY2UgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgICAgICBcIi9BaXJjcmFmdC9CYXNpY1BsYW5lL0xlZnRXaW5nQ29udHJvbHNTdXJmYWNlLmdsYlwiLFxyXG4gICAgICAgICAgICB0aGlzLlNjZW5lVG9HZXRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucmlnaHRDb250cm9sU3VyZmFjZSA9IGF3YWl0IGFkZEdMQkZpbGUoXHJcbiAgICAgICAgICAgIFwiL0FpcmNyYWZ0L0Jhc2ljUGxhbmUvUmlnaHRXaW5nQ29udHJvbHNTdXJmYWNlLmdsYlwiLFxyXG4gICAgICAgICAgICB0aGlzLlNjZW5lVG9HZXRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucnVkZGVyID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICAgICAgXCIvQWlyY3JhZnQvQmFzaWNQbGFuZS9SdWRkZXIuZ2xiXCIsXHJcbiAgICAgICAgICAgIHRoaXMuU2NlbmVUb0dldFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgQ3JlYXRlR3JvdXBBbmRQb3MoKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cC5hZGQodGhpcy5wbGFuZS5zY2VuZSk7XHJcbiAgICAgICAgdGhpcy5ncm91cC5hZGQodGhpcy5wcm9wcy5zY2VuZSk7XHJcbiAgICAgICAgdGhpcy5ncm91cC5hZGQodGhpcy5sZWZ0QWlyZWxvbmUuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMucmlnaHRBaXJlbG9uZS5zY2VuZSk7XHJcbiAgICAgICAgdGhpcy5ncm91cC5hZGQodGhpcy5yaWdodENvbnRyb2xTdXJmYWNlLnNjZW5lKTtcclxuICAgICAgICB0aGlzLmdyb3VwLmFkZCh0aGlzLmxlZnRDb250cm9sU3VyZmFjZS5zY2VuZSk7XHJcbiAgICAgICAgdGhpcy5ncm91cC5hZGQodGhpcy5ydWRkZXIuc2NlbmUpO1xyXG5cclxuICAgICAgICB0aGlzLmxlZnRBaXJlbG9uZS5zY2VuZS5wb3NpdGlvbi5zZXQoMTIuOTM2LCAxNS45OTQsIC01OS4yNjQpO1xyXG4gICAgICAgIHRoaXMucmlnaHRBaXJlbG9uZS5zY2VuZS5wb3NpdGlvbi5zZXQoLTEyLjQ5NSwgMTUuODg4LCAtNTkuMjk0KTtcclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0Q29udHJvbFN1cmZhY2Uuc2NlbmUucG9zaXRpb24uc2V0KDQ2LjI0MywgMjIuNTM2LCAtMTMuNTQxKTtcclxuICAgICAgICB0aGlzLmxlZnRDb250cm9sU3VyZmFjZS5zY2VuZS5yb3RhdGVZKHJhZGlhbnRzKC03KSk7XHJcblxyXG4gICAgICAgIHRoaXMucmlnaHRDb250cm9sU3VyZmFjZS5zY2VuZS5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgICAgIC00Ni4yNzE4LFxyXG4gICAgICAgICAgICAyMi41NDExLFxyXG4gICAgICAgICAgICAtMTMuNTQ0N1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5yaWdodENvbnRyb2xTdXJmYWNlLnNjZW5lLnJvdGF0ZVkocmFkaWFudHMoNi44KSk7XHJcbiAgICAgICAgdGhpcy5yaWdodENvbnRyb2xTdXJmYWNlLnNjZW5lLnJvdGF0ZVoocmFkaWFudHMoLTMuNSkpO1xyXG4gICAgICAgIC8vdGhpcy5yaWdodENvbnRyb2xTdXJmYWNlLnNjZW5lLnJvdGF0ZVgocmFkaWFudHMoMTgzLjU3KSlcclxuXHJcbiAgICAgICAgdGhpcy5ydWRkZXIuc2NlbmUucG9zaXRpb24uc2V0KC0wLjAyMiwgMjQuNjcsIC02OC4xNyk7XHJcbiAgICAgICAgdGhpcy5ydWRkZXIuc2NlbmUucm90YXRlWChyYWRpYW50cygtMjIpKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zY2VuZS5wb3NpdGlvbi5zZXQoMCwgMTUsIDIyKTtcclxuICAgICAgICB0aGlzLlNjZW5lVG9HZXQuYWRkKHRoaXMuZ3JvdXApO1xyXG5cclxuICAgICAgICB0aGlzLmdyb3VwLnNjYWxlLnNldCgwLjA1LCAwLjA1LCAwLjA1KTtcclxuXHJcbiAgICAgICAgbGV0IFtwcm9wcywgbGVmdEFpcmVsb25lXSA9IFt0aGlzLnByb3BzLnNjZW5lLCB0aGlzLmxlZnRBaXJlbG9uZS5zY2VuZV07XHJcbiAgICAgICAgLy8gRm9yIHRlc3RpbmcgXFxcXFxyXG5cclxuICAgICAgICBsZXQgbGlnaHQgPSBjcmVhdGVQb2ludExpZ2h0KDB4ZmYwMDAwLCAzLCBbNjAsIDIyLjUsIC0xMF0sIDIuNSk7XHJcbiAgICAgICAgbGV0IGxpZ2h0MiA9IGNyZWF0ZVBvaW50TGlnaHQoMHgwMGZmMDAsIDMsIFstNjAsIDIyLjUsIC0xMF0sIDIuNSk7XHJcbiAgICAgICAgbGV0IHdoaXRlTGlnaHQgPSBjcmVhdGVQb2ludExpZ2h0KDB4ZmZmZmZmLCAzLCBbMCwgMzAsIC02MF0sIDIuNSk7XHJcbiAgICAgICAgbGV0IGRheSA9IHRydWVcclxuICAgICAgICB0aGlzLmdyb3VwLmFkZChsaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLmFkZChsaWdodDIpO1xyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGdldERheVN0YXRlKCkgPT09IGZhbHNlICYmIGRheSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICBkYXkgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cC5hZGQobGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cC5hZGQobGlnaHQyKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoZ2V0RGF5U3RhdGUoKSA9PT0gdHJ1ZSAmJiBkYXkgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgIGRheSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAucmVtb3ZlKGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAucmVtb3ZlKGxpZ2h0Mik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKVxyXG5cclxuICAgICAgICBsZXQgY3VycmVudEV2ZWxhdG9yUGl0Y2ggPSAwO1xyXG4gICAgICAgIGxldCBhaXJlbG9uZVBpdGNoID0gMDtcclxuICAgICAgICBsZXQgcnVkZGVyUGl0Y2ggPSAwO1xyXG4gICAgICAgIGFkZFRvUmVuZGVyU2VxdWVuY2UoXHJcbiAgICAgICAgICAgIFwiTWFpblwiLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAuZ2V0V29ybGREaXJlY3Rpb24oZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAucG9zaXRpb24uYWRkKGRpcmVjdGlvbi5tdWx0aXBseVNjYWxhcih0aGlzLnNwZWVkKSk7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuZ3JvdXAucG9zaXRpb24ueiArPSB0aGlzLnNwZWVkO1xyXG5cclxuICAgICAgICAgICAgICAgIHByb3BzLnJvdGF0ZVoodGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEV2ZWxhdG9yUGl0Y2ggPCB0aGlzLmVsZXZhdG9yUGl0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRBaXJlbG9uZS5zY2VuZS5yb3RhdGVYKC0wLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0QWlyZWxvbmUuc2NlbmUucm90YXRlWCgtMC4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEV2ZWxhdG9yUGl0Y2ggKz0gMC4wMTtcclxuICAgICAgICAgICAgICAgICAgICAvL2lmKHRoaXMuc3BlZWQgPCAwLjQpcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cC5yb3RhdGVYKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY3VycmVudEV2ZWxhdG9yUGl0Y2ggLyA1MCkgKiB0aGlzLnNwZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEV2ZWxhdG9yUGl0Y2ggPiB0aGlzLmVsZXZhdG9yUGl0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRBaXJlbG9uZS5zY2VuZS5yb3RhdGVYKDAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRBaXJlbG9uZS5zY2VuZS5yb3RhdGVYKDAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFdmVsYXRvclBpdGNoIC09IDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZih0aGlzLnNwZWVkIDwgMC40KXJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAucm90YXRlWChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGN1cnJlbnRFdmVsYXRvclBpdGNoIC8gNTApICogdGhpcy5zcGVlZFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFpcmVsb25lUGl0Y2ggPCB0aGlzLmFpcmVsb25lUGl0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRDb250cm9sU3VyZmFjZS5zY2VuZS5yb3RhdGVYKDAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDb250cm9sU3VyZmFjZS5zY2VuZS5yb3RhdGVYKC0wLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICBhaXJlbG9uZVBpdGNoICs9IDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZih0aGlzLnNwZWVkIDwgMC40KXJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAucm90YXRlWigoLWFpcmVsb25lUGl0Y2ggLyA1MCkgKiB0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWlyZWxvbmVQaXRjaCA+IHRoaXMuYWlyZWxvbmVQaXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdENvbnRyb2xTdXJmYWNlLnNjZW5lLnJvdGF0ZVgoLTAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDb250cm9sU3VyZmFjZS5zY2VuZS5yb3RhdGVYKDAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFpcmVsb25lUGl0Y2ggLT0gMC4wMTtcclxuICAgICAgICAgICAgICAgICAgICAvL2lmKHRoaXMuc3BlZWQgPCAwLjQpcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cC5yb3RhdGVaKCgtYWlyZWxvbmVQaXRjaCAvIDUwKSAqIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChydWRkZXJQaXRjaCA8IHRoaXMucnVkZGVyUGl0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1ZGRlci5zY2VuZS5yb3RhdGVZKC0wLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICBydWRkZXJQaXRjaCArPSAwLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYodGhpcy5zcGVlZCA8IDAuNClyZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnJvdGF0ZVkoKHJ1ZGRlclBpdGNoIC8gNTApICogdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJ1ZGRlclBpdGNoID4gdGhpcy5ydWRkZXJQaXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVkZGVyLnNjZW5lLnJvdGF0ZVkoMC4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVkZGVyUGl0Y2ggLT0gMC4wMTtcclxuICAgICAgICAgICAgICAgICAgICAvL2lmKHRoaXMuc3BlZWQgPCAwLjQpcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cC5yb3RhdGVZKChydWRkZXJQaXRjaCAvIDUwKSAqIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VwO1xyXG4gICAgfVxyXG4gICAgYXR0YWNoQ2FtZXJhQW5kQ29udHJvbChDYW1lcmEpIHtcclxuICAgICAgICB0aGlzLlVVSUQgPSBsaXN0ZW5Ub0NvbnJvbHMoXHJcbiAgICAgICAgICAgICh7XHJcbiAgICAgICAgICAgICAgICB3S2V5LFxyXG4gICAgICAgICAgICAgICAgYUtleSxcclxuICAgICAgICAgICAgICAgIHNLZXksXHJcbiAgICAgICAgICAgICAgICBkS2V5LFxyXG4gICAgICAgICAgICAgICAgdXBLZXksXHJcbiAgICAgICAgICAgICAgICBkb3duS2V5LFxyXG4gICAgICAgICAgICAgICAgZUtleSxcclxuICAgICAgICAgICAgICAgIHFLZXksXHJcbiAgICAgICAgICAgICAgICBzaGlmdEtleSxcclxuICAgICAgICAgICAgICAgIHpLZXksXHJcbiAgICAgICAgICAgICAgICB4S2V5LFxyXG4gICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoektleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkIDwgMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkICs9IDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHhLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAtPSAwLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh3S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGV2YXRvclBpdGNoID0gMC41O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGV2YXRvclBpdGNoID0gLTAuNTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGV2YXRvclBpdGNoID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChxS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydWRkZXJQaXRjaCA9IDAuMztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVkZGVyUGl0Y2ggPSAtMC4zO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1ZGRlclBpdGNoID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWlyZWxvbmVQaXRjaCA9IDAuNTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZEtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWlyZWxvbmVQaXRjaCA9IC0wLjU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWlyZWxvbmVQaXRjaCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKENhbWVyYSk7XHJcbiAgICAgICAgQ2FtZXJhLnBvc2l0aW9uLnNldCgwLCA0MCwgLTEwMCk7XHJcbiAgICAgICAgQ2FtZXJhLnJvdGF0ZVkocmFkaWFudHMoMTgwKSk7XHJcbiAgICAgICAgQ2FtZXJhLnJvdGF0ZVgocmFkaWFudHMoLTIwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYW5VcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5VVUlEICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgQ2xlYW5VcExpc3RlbmVyKHRoaXMuVVVJRCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ3JvdXAucmVtb3ZlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlciAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmVtb3ZlRnJvbURheVRpbWVIb29rKHRoaXMuY2hlY2tlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcm90YXRlQWJvdXRQb2ludChvYmosIHBvaW50LCBheGlzLCB0aGV0YSwgcG9pbnRJc1dvcmxkKSB7XHJcbiAgICBwb2ludElzV29ybGQgPSBwb2ludElzV29ybGQgPyBwb2ludElzV29ybGQgOiBmYWxzZSA7XHJcblxyXG4gICAgaWYgKHBvaW50SXNXb3JsZCkge1xyXG4gICAgICAgIG9iai5wYXJlbnQubG9jYWxUb1dvcmxkKG9iai5wb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgb2JqLnBvc2l0aW9uLnN1Yihwb2ludCk7XHJcbiAgICBvYmoucG9zaXRpb24uYXBwbHlBeGlzQW5nbGUoYXhpcywgdGhldGEpO1xyXG4gICAgb2JqLnBvc2l0aW9uLmFkZChwb2ludCk7XHJcblxyXG4gICAgaWYgKHBvaW50SXNXb3JsZCkge1xyXG4gICAgICAgIG9iai5wYXJlbnQud29ybGRUb0xvY2FsKG9iai5wb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgb2JqLnJvdGF0ZU9uQXhpcyhheGlzLCB0aGV0YSk7XHJcbiAgICByZXR1cm4gdGhldGE7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21TdGFyRmllbGQobnVtYmVyT2ZTdGFycywgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJDQU5WQVNcIik7XHJcblxyXG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcblxyXG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZTdGFyczsgKytpKSB7XHJcbiAgICAgICAgdmFyIHJhZGl1cyA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgICAgIHZhciB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2lkdGgpO1xyXG4gICAgICAgIHZhciB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5hcmMoeCwgeSwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKGNhbnZhcyk7XHJcbiAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgIHJldHVybiB0ZXh0dXJlO1xyXG59XHJcbiIsImltcG9ydCB7IEdyb3VwLCBNZXNoLCBNZXNoTGFtYmVydE1hdGVyaWFsLCBSYXljYXN0ZXIsIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgcmFkaWFudHMgfSBmcm9tIFwiLi4vLi4vQWxnb3JpdGhtcy9kZWdUb1JhZFwiO1xyXG5pbXBvcnQgeyBfbWVyZ2VNZXNoZXMgfSBmcm9tIFwiLi4vLi4vQWxnb3JpdGhtcy9tZXNoTWVyZ2VyLmpzXCI7XHJcbmltcG9ydCB7IHJhbmRvbVZlY3RvckJldHdlZW5Qb2ludHMyRCB9IGZyb20gXCIuLi8uLi9BbGdvcml0aG1zL1ZlY3RvclV0aWxzXCI7XHJcbmltcG9ydCB7IGFkZEdMQkZpbGUgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL0dMQkxvYWRlclwiO1xyXG5pbXBvcnQgeyBNZXJnZU1lc2hlcyB9IGZyb20gXCIuLi8uLi9Db3JlLUFQSS8zZE1vZGVsSGFuZGxlcnMvTWVzaE1lcmdlci50c1wiO1xyXG5pbXBvcnQgeyBnZXRUZXJyYWluSGVpZ2h0IH0gZnJvbSBcIi4uL1Byb2NlZHVsZVRlcnJhaW5cIjtcclxuXHJcbmZ1bmN0aW9uIHBsYWNlVHJlZSh0cmVlLCBpbnRlcnNlY3RzLCByYW5kb21WZWMpe1xyXG4gICAgbGV0IG5ld1RyZWUgPSB0cmVlLnNjZW5lLmNsb25lKClcclxuICAgIG5ld1RyZWUucm90YXRlWShyYWRpYW50cyhNYXRoLnJhbmRvbSgpKjM2MCkpXHJcbiAgICBsZXQgcG9pbnQgPSBpbnRlcnNlY3RzXHJcbiAgICBuZXdUcmVlLnBvc2l0aW9uLnNldChyYW5kb21WZWMueCwgcG9pbnQsIHJhbmRvbVZlYy56KVxyXG4gICAgcmV0dXJuIHtuZXdUcmVlLCB2ZXRvcjogbmV3IFZlY3RvcjMocmFuZG9tVmVjLngsIHBvaW50LCByYW5kb21WZWMueil9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHZW5lcmF0ZVRyZWVzKG51bSwgc2NlbmUsIHN0YXJ0LCBib3VuZHMsIHNlZWQsIGdhaW4sIGRpdmlzb3Ipe1xyXG4gICAgbGV0IHRyZWUgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgIFwiL0Fzc2V0cy9QaW5lVHJlZS5nbGJcIixcclxuICAgICAgICBzY2VuZVxyXG4gICAgKTtcclxuICAgIGxldCBzbm93eVRyZWUgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgIFwiL0Fzc2V0cy9Tbm93eVBpbmVUcmVlLmdsYlwiLFxyXG4gICAgICAgIHNjZW5lXHJcbiAgICApO1xyXG4gICAgbGV0IHBhbG1UcmVlID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICBcIi9Bc3NldHMvUGFsbV9UcmVlLmdsYlwiLFxyXG4gICAgICAgIHNjZW5lXHJcbiAgICApXHJcblxyXG4gICAgbGV0IGxlYXZlcyA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogMHg2OTRiMzcgfSlcclxuICAgIGxldCBicmlnaExlYXZlcyA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogMHg2Rjk5NDAgfSlcclxuICAgIGxldCB0cnVuayA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogMHgyMTY3MzQgfSlcclxuICAgIGxldCBzbm93eSA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogMHhmZmZmZmYgfSlcclxuICAgIHRyZWUuc2NlbmUuY2hpbGRyZW5bMF0ubWF0ZXJpYWwgPSBsZWF2ZXNcclxuICAgIHRyZWUuc2NlbmUuY2hpbGRyZW5bMV0ubWF0ZXJpYWwgPSB0cnVua1xyXG4gICAgc25vd3lUcmVlLnNjZW5lLmNoaWxkcmVuWzBdLm1hdGVyaWFsID0gbGVhdmVzXHJcbiAgICBzbm93eVRyZWUuc2NlbmUuY2hpbGRyZW5bMV0ubWF0ZXJpYWwgPSB0cnVua1xyXG4gICAgc25vd3lUcmVlLnNjZW5lLmNoaWxkcmVuWzJdLm1hdGVyaWFsID0gc25vd3lcclxuXHJcbiAgICBsZXQgbmV3cGFsbVRyZWUgPSBwYWxtVHJlZS5zY2VuZS5jaGlsZHJlblswXVxyXG5cclxuXHJcbiAgICBuZXdwYWxtVHJlZS5jaGlsZHJlblswXS5tYXRlcmlhbCA9IHRydW5rXHJcbiAgICBuZXdwYWxtVHJlZS5jaGlsZHJlblsxXS5tYXRlcmlhbCA9IGJyaWdoTGVhdmVzXHJcbiAgICBuZXdwYWxtVHJlZS5jaGlsZHJlblsyXS5tYXRlcmlhbCA9IGJyaWdoTGVhdmVzXHJcblxyXG4gICAgdHJlZS5zY2VuZS5zY2FsZS5zZXQoMywzLDMpO1xyXG4gICAgc25vd3lUcmVlLnNjZW5lLnNjYWxlLnNldCgzLDMsMyk7XHJcbiAgICBwYWxtVHJlZS5zY2VuZS5zY2FsZS5zZXQoNCw0LDQpO1xyXG4gICAgXHJcbiAgICBmb3IobGV0IGk9MDtpPG51bTtpKyspe1xyXG4gICAgICAgIGxldCByYW5kb21WZWN0b3IgPSByYW5kb21WZWN0b3JCZXR3ZWVuUG9pbnRzMkQoIHN0YXJ0LCBib3VuZHMpXHJcbiAgICAgICAgcmFuZG9tVmVjdG9yLnkgPSA1MCAgIFxyXG5cclxuICAgICAgICBsZXQgaGVpZ2h0ID0gZ2V0VGVycmFpbkhlaWdodChyYW5kb21WZWN0b3IsIHNlZWQsIGdhaW4sIGRpdmlzb3IsIHNjZW5lKVxyXG4gICAgICAgIGlmKGhlaWdodCA+IDgwICYmIGhlaWdodCA8IDIwMCl7XHJcbiAgICAgICAgICAgIGxldCBwbGFjZVRyZWVPdXQgPSBwbGFjZVRyZWUoc25vd3lUcmVlLCBoZWlnaHQsIHJhbmRvbVZlY3RvcilcclxuICAgICAgICAgICAgc2NlbmUuYWRkKHBsYWNlVHJlZU91dC5uZXdUcmVlKVxyXG4gICAgICAgIH1lbHNlIGlmKGhlaWdodCA8IDgwICYmIGhlaWdodCA+IDgpe1xyXG4gICAgICAgICAgICBsZXQgcGxhY2VUcmVlT3V0ID0gcGxhY2VUcmVlKHRyZWUsIGhlaWdodCwgcmFuZG9tVmVjdG9yKVxyXG4gICAgICAgICAgICBzY2VuZS5hZGQocGxhY2VUcmVlT3V0Lm5ld1RyZWUpXHJcbiAgICAgICAgfWVsc2UgaWYoaGVpZ2h0ID4gNSApe1xyXG4gICAgICAgICAgICBsZXQgcGxhY2VUcmVlT3V0ID0gcGxhY2VUcmVlKHBhbG1UcmVlLCBoZWlnaHQsIHJhbmRvbVZlY3RvcilcclxuICAgICAgICAgICAgc2NlbmUuYWRkKHBsYWNlVHJlZU91dC5uZXdUcmVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBsaXN0ZW5Ub0V2ZW50IH0gZnJvbSBcIi4uL0NvcmUtQVBJL0Nvbm5lY3RBUElcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlTmV3Q3ViZVBsYXllciB9IGZyb20gXCIuLi9nYW1lRnVuZGFsbWVudGFscy9tdWx0aXBsYXllci9NYWluUGxheWVySGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVVJKCkge1xyXG4gICAgbGV0IFtnYW1lZmVlZCwgc2V0R2FtZUZlZWRdID0gdXNlU3RhdGUoKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGlzdGVuVG9FdmVudChcIk5ld1BsYXllclwiLCAoaWQsIGRhdGEpID0+IHtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gPGgxPkhlbGxvPC9oMT47XHJcbn1cclxuIiwiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZvZywgUGVyc3BlY3RpdmVDYW1lcmEsIFNjZW5lLCBWZWN0b3IzLCBXZWJHTFJlbmRlcmVyIH0gZnJvbSBcInRocmVlXCI7XHJcbnZhciBTdGF0cyA9IHJlcXVpcmUoXCJzdGF0cy5qc1wiKTtcclxuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRleHQvc29ja2V0aW9Db250ZXh0XCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlTGFiZWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9uYW1ldGFnXCI7XHJcbmltcG9ydCB7XHJcbiAgICBzdGFydFNldmVyQ2xpZW50Q29tbXVuaWNhdGlvbixcclxuICAgIGxpc3RlblRvRXZlbnQsXHJcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29yZS1BUEkvQ29ubmVjdEFQSVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVSZW5kZXJDeWNsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvcmUtQVBJL1JlbmRlcmluZ0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVNYWluU2NlbmUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TY2VuZXMvTWFpblNjZW5lSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBDcmVhdGVVSSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVVSS9nYW1lRmVlZFwiO1xyXG5pbXBvcnQgeyBDb250cm9sRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IGRlYnVnQ3ViZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvcmUtQVBJL2dlbW90cnlNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGdldFRlcnJhaW5IZWlnaHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9Qcm9jZWR1bGVUZXJyYWluXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBbY2hpbGQsIHNldENoaWxkXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZ2FtZUV2ZW50RGF0YSwgc2V0R2FtZUV2ZW50RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2RheSwgc2V0RGF5XSA9IHVzZVN0YXRlKFwibm90IGRheVwiKTtcclxuICAgIGNvbnN0IFtjaGlsZDIsIHNldENoaWxkMl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3Qgc29ja2V0ID0gdXNlQXBwQ29udGV4dCgpOztcclxuICAgIGNvbnN0IFtyZWNpZXZlZFNlZWQsIHNldFNlZWRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtyZW5kZXJlZCwgc2V0UmVuZGVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NsaWVudHMsIHNldENsaWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3BlcnNvbkRhdGEsIHNldFBlcnNvbmFsRGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IFtwb3NpdG9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZShuZXcgVmVjdG9yMygpLnRvQXJyYXkoKSlcclxuXHJcbiAgICBzdGFydFNldmVyQ2xpZW50Q29tbXVuaWNhdGlvbihzb2NrZXQpO1xyXG5cclxuICAgIHNvY2tldC5vbmNlKFwid2VsY29tZVwiLCAoc2VlZCwgY2xpZW50LCBkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0U2VlZChzZWVkKTtcclxuICAgICAgICBzZXRDbGllbnRzKGNsaWVudCk7XHJcbiAgICAgICAgc2V0UGVyc29uYWxEYXRhKGRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHR5cGVvZiBjaGlsZCA9PT0gXCJ1bmRlZmluZWRcIiB8fFxyXG4gICAgICAgICAgICB0eXBlb2YgcmVjaWV2ZWRTZWVkID09PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgICAgIHJlbmRlcmVkID09PSB0cnVlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFJlbmRlcmVkKHRydWUpO1xyXG5cclxuICAgICAgICBsZXQgc3RhdHMgPSBuZXcgU3RhdHMoKTtcclxuICAgICAgICBzdGF0cy5zaG93UGFuZWwoMik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5kb20pO1xyXG5cclxuICAgICAgICBsZXQgU2NlbmVUb0dldCA9IG5ldyBTY2VuZSgpO1xyXG4gICAgICAgIGxldCBSZW5kZXJzID0gbmV3IFdlYkdMUmVuZGVyZXIoe1xyXG4gICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgICAgIGFscGhhOiB0cnVlLFxyXG4gICAgICAgICAgICBvZ2FyaXRobWljRGVwdGhCdWZmZXI6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFJlbmRlcnMuc2V0Q2xlYXJDb2xvcihcIiM4N2NlZWJcIiwgMSk7XHJcblxyXG4gICAgICAgIGxldCBmb2cgPSBuZXcgRm9nKDB4RENEQkRGLCAxMCwgMTAwMDAwKVxyXG4gICAgICAgIFNjZW5lVG9HZXQuZm9nID0gZm9nXHJcblxyXG4gICAgICAgIFJlbmRlcnMuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICBjaGlsZC5hcHBlbmRDaGlsZChSZW5kZXJzLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgIFxyXG5cclxuICAgICAgICBsZXQgQ3VycmVudFNjZW5lID0gXCJNYWluXCI7XHJcblxyXG4gICAgICAgIHZhciBDYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICAgICAgICAgIDc1LFxyXG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgMC4xLFxyXG4gICAgICAgICAgICAxMDAwMDAwMDBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25XaW5kb3dSZXNpemUsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XHJcblxyXG4gICAgICAgICAgICBDYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgIENhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG4gICAgICAgICAgICBSZW5kZXJzLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2VuZXJhdGVNYWluU2NlbmUoXHJcbiAgICAgICAgICAgIFNjZW5lVG9HZXQsXHJcbiAgICAgICAgICAgIFJlbmRlcnMsXHJcbiAgICAgICAgICAgIGRvY3VtZW50LFxyXG4gICAgICAgICAgICByZWNpZXZlZFNlZWQsXHJcbiAgICAgICAgICAgIGNoaWxkMixcclxuICAgICAgICAgICAgQ2FtZXJhXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgUmVuZGVycy5kb21FbGVtZW50LnJlcXVlc3RQb2ludGVyTG9jaygpO1xyXG4gICAgICAgIENvbnRyb2xFdmVudExpc3RlbmVyKGRvY3VtZW50LCBjaGlsZDIpXHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXJzID0gW107XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VDdWJlKGNvbG9yID0gXCJyZ2IoMCwwLDApXCIsIG5hbWUgPSBcInVua293blwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3IoY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgZW1pc3NpdmU6IG5ldyBUSFJFRS5Db2xvcihjb2xvciksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjdWJlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgICAgICAgICAgZ3JvdXAuYWRkKGN1YmUpO1xyXG4gICAgICAgICAgICBjb25zdCBjeWNsaW5kZXIgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjMsIDAuMywgMC42LCAzMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN5bGluZGVyQnVpbGQgPSBuZXcgVEhSRUUuTWVzaChjeWNsaW5kZXIsIG1hdGVyaWFsMik7XHJcbiAgICAgICAgICAgIGN5bGluZGVyQnVpbGQucm90YXRlWChNYXRoLlBJIC8gMiArIE1hdGguUEkpO1xyXG4gICAgICAgICAgICBjeWxpbmRlckJ1aWxkLnBvc2l0aW9uLnNldCgwLCAwLCAtMC42KTtcclxuICAgICAgICAgICAgZ3JvdXAuYWRkKGN5bGluZGVyQnVpbGQpO1xyXG5cclxuICAgICAgICAgICAgZ2VuZXJhdGVMYWJlbChuYW1lLCBncm91cCk7XHJcbiAgICAgICAgICAgIFNjZW5lVG9HZXQuYWRkKGdyb3VwKTtcclxuICAgICAgICAgICAgZ3JvdXAubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBncm91cDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcmV2RGF0YSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgYWRkdG9HYW1lRmVlZCA9IChuYW1lID0gXCJVbmtvd25cIiwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IE5ld0dhbWVFdmVudEFycmF5ID0gWy4uLmdhbWVFdmVudERhdGFdO1xyXG4gICAgICAgICAgICBOZXdHYW1lRXZlbnRBcnJheS51bnNoaWZ0KHsgbmFtZSwgZXZlbnQgfSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBOZXdHYW1lRXZlbnRBcnJheVsxMF07XHJcbiAgICAgICAgICAgIGRlbGV0ZSBOZXdHYW1lRXZlbnRBcnJheVsxMV07XHJcbiAgICAgICAgICAgIHNldEdhbWVFdmVudERhdGEoWy4uLk5ld0dhbWVFdmVudEFycmF5XSk7XHJcbiAgICAgICAgICAgIHByZXZEYXRhID0gTmV3R2FtZUV2ZW50QXJyYXk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2xpZW50cy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdWJlID0gbWFrZUN1YmUoZS5jb2xvciwgZS5uYW1lKTtcclxuICAgICAgICAgICAgcGxheWVyc1tgJHtlfWBdID0gY3ViZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiTmV3UGxheWVyXCIsIChpZCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IG1ha2VDdWJlKGRhdGEuY29sb3IsIGRhdGEubmFtZSk7XHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoZGF0YT8ubmFtZSwgXCJKb2luZWQgdGhlIGdhbWUhXCIpO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyc1tgJHtpZH1gXSA9IGN1YmU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNvY2tldC5vbihcIkxvc3RQTGF5ZXJcIiwgKGlkLCBob3csIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBwbGF5ZXJzW2Ake2lkfWBdO1xyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LnJlbW92ZShjdWJlKTtcclxuICAgICAgICAgICAgZGVsZXRlIHBsYXllcnNbYCR7aWR9YF07XHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoXHJcbiAgICAgICAgICAgICAgICBkYXRhPy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaG93ID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIldhcyByZW1vdmVkIGZyb20gdGhlIGdhbWUgZm9yIGJlaW5nIGluYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiTGVmdCB0aGUgZ2FtZSFcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsaXN0ZW5Ub0V2ZW50KFwiUGxheWVyTG9jYXRpb25VcGRhdGVcIiwgKGlkLCBwb3MsIHJvdCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IHBsYXllcnNbYCR7aWR9YF07XHJcbiAgICAgICAgICAgIGlmIChjdWJlKSB7XHJcbiAgICAgICAgICAgICAgICBjdWJlLnJvdGF0aW9uLnNldChyb3QuX3gsIHJvdC5feSwgcm90Ll96KTtcclxuICAgICAgICAgICAgICAgIGN1YmUucG9zaXRpb24uc2V0KHBvcy54LCBwb3MueSwgcG9zLnopO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1YmUgPSBtYWtlQ3ViZShkYXRhPy5jb2xvciwgZGF0YT8ubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcGxheWVyc1tgJHtpZH1gXSA9IGN1YmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzb2NrZXQub24oXCJOZXdDaGF0XCIsIChkYXRhLCB0ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoZGF0YS5uYW1lLCB0ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpXHJcbiAgICAgICAgICAgIENhbWVyYS5nZXRXb3JsZFBvc2l0aW9uKHZlY3RvcilcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJMb2NhdGlvblVwZGF0ZVwiLCB2ZWN0b3IsIENhbWVyYS5yb3RhdGlvbik7XHJcbiAgICAgICAgfSwgMTApO1xyXG5cclxuICAgICAgICB2YXIgYW5pbWF0ZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3RhdHMuYmVnaW4oKTtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIGFsbCBtb3ZpbmcgcGFydHNcclxuICAgICAgICAgICAgdXBkYXRlUmVuZGVyQ3ljbGUoQ3VycmVudFNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uKGBYOiAke01hdGgucm91bmQoQ2FtZXJhLnBvc2l0aW9uLngpfX0gWTogJHtNYXRoLnJvdW5kKENhbWVyYS5wb3NpdGlvbi55KX19IFo6ICR7TWF0aC5yb3VuZChDYW1lcmEucG9zaXRpb24ueil9fWApXHJcblxyXG4gICAgICAgICAgICBSZW5kZXJzLnJlbmRlcihTY2VuZVRvR2V0LCBDYW1lcmEpO1xyXG4gICAgICAgICAgICBzdGF0cy5lbmQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhbmltYXRlKCk7XHJcbiAgICB9LCBbY2hpbGQsIGNsaWVudHNdKTtcclxuXHJcbiAgICBsZXQgc2VuZENoYXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzb2NrZXQuZW1pdChcInNlbmRDaGF0XCIsIGNoaWxkMi52YWx1ZSk7XHJcbiAgICAgICAgY2hpbGQyLnZhbHVlID0gXCJcIjtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7dHlwZW9mIHBlcnNvbkRhdGEgPT09IFwidW5kZWZpbmVkXCIgPyBcIkxPQURJTkcuLi5cIiA6IHBlcnNvbkRhdGEubmFtZX1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjgwcHhcIixcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZVVJIC8+XHJcbiAgICAgICAgICAgICAgICA8aDE+UG9zOiB7cG9zaXRvbn08L2gxPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRDaGF0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXsocmVmKSA9PiBzZXRDaGlsZDIocmVmKX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIlN1Ym1pdFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICB7Wy4uLmdhbWVFdmVudERhdGFdLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2UubmFtZX0gLSB7ZS5ldmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7dHlwZW9mIHJlY2lldmVkU2VlZCA9PT0gXCJ1bmRlZmluZWRcIiA/PyA8aDE+TE9BRElORyBTRUVEITwvaDE+fVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiByZWY9eyhyZWYpID0+IHNldENoaWxkKHJlZil9PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17KHJlZikgPT4gc2V0Q2hpbGQocmVmKX0+PC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU29ja2V0ID0gZXhwb3J0cy5pbyA9IGV4cG9ydHMuTWFuYWdlciA9IGV4cG9ydHMucHJvdG9jb2wgPSB2b2lkIDA7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCIuL3VybFwiKTtcbmNvbnN0IG1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL21hbmFnZXJcIik7XG5jb25zdCBzb2NrZXRfMSA9IHJlcXVpcmUoXCIuL3NvY2tldFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNvY2tldFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc29ja2V0XzEuU29ja2V0OyB9IH0pO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50XCIpO1xuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gbG9va3VwO1xuLyoqXG4gKiBNYW5hZ2VycyBjYWNoZS5cbiAqL1xuY29uc3QgY2FjaGUgPSAoZXhwb3J0cy5tYW5hZ2VycyA9IHt9KTtcbmZ1bmN0aW9uIGxvb2t1cCh1cmksIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBvcHRzID0gdXJpO1xuICAgICAgICB1cmkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgIGNvbnN0IHBhcnNlZCA9IHVybF8xLnVybCh1cmksIG9wdHMucGF0aCk7XG4gICAgY29uc3Qgc291cmNlID0gcGFyc2VkLnNvdXJjZTtcbiAgICBjb25zdCBpZCA9IHBhcnNlZC5pZDtcbiAgICBjb25zdCBwYXRoID0gcGFyc2VkLnBhdGg7XG4gICAgY29uc3Qgc2FtZU5hbWVzcGFjZSA9IGNhY2hlW2lkXSAmJiBwYXRoIGluIGNhY2hlW2lkXVtcIm5zcHNcIl07XG4gICAgY29uc3QgbmV3Q29ubmVjdGlvbiA9IG9wdHMuZm9yY2VOZXcgfHxcbiAgICAgICAgb3B0c1tcImZvcmNlIG5ldyBjb25uZWN0aW9uXCJdIHx8XG4gICAgICAgIGZhbHNlID09PSBvcHRzLm11bHRpcGxleCB8fFxuICAgICAgICBzYW1lTmFtZXNwYWNlO1xuICAgIGxldCBpbztcbiAgICBpZiAobmV3Q29ubmVjdGlvbikge1xuICAgICAgICBkZWJ1ZyhcImlnbm9yaW5nIHNvY2tldCBjYWNoZSBmb3IgJXNcIiwgc291cmNlKTtcbiAgICAgICAgaW8gPSBuZXcgbWFuYWdlcl8xLk1hbmFnZXIoc291cmNlLCBvcHRzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghY2FjaGVbaWRdKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcIm5ldyBpbyBpbnN0YW5jZSBmb3IgJXNcIiwgc291cmNlKTtcbiAgICAgICAgICAgIGNhY2hlW2lkXSA9IG5ldyBtYW5hZ2VyXzEuTWFuYWdlcihzb3VyY2UsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGlvID0gY2FjaGVbaWRdO1xuICAgIH1cbiAgICBpZiAocGFyc2VkLnF1ZXJ5ICYmICFvcHRzLnF1ZXJ5KSB7XG4gICAgICAgIG9wdHMucXVlcnkgPSBwYXJzZWQucXVlcnlLZXk7XG4gICAgfVxuICAgIHJldHVybiBpby5zb2NrZXQocGFyc2VkLnBhdGgsIG9wdHMpO1xufVxuZXhwb3J0cy5pbyA9IGxvb2t1cDtcbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAcHVibGljXG4gKi9cbnZhciBzb2NrZXRfaW9fcGFyc2VyXzEgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInByb3RvY29sXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzb2NrZXRfaW9fcGFyc2VyXzEucHJvdG9jb2w7IH0gfSk7XG4vKipcbiAqIGBjb25uZWN0YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJpXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydHMuY29ubmVjdCA9IGxvb2t1cDtcbi8qKlxuICogRXhwb3NlIGNvbnN0cnVjdG9ycyBmb3Igc3RhbmRhbG9uZSBidWlsZC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbnZhciBtYW5hZ2VyXzIgPSByZXF1aXJlKFwiLi9tYW5hZ2VyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFuYWdlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWFuYWdlcl8yLk1hbmFnZXI7IH0gfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsb29rdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWFuYWdlciA9IHZvaWQgMDtcbmNvbnN0IGVpbyA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tY2xpZW50XCIpO1xuY29uc3Qgc29ja2V0XzEgPSByZXF1aXJlKFwiLi9zb2NrZXRcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbmNvbnN0IG9uXzEgPSByZXF1aXJlKFwiLi9vblwiKTtcbmNvbnN0IEJhY2tvZmYgPSByZXF1aXJlKFwiYmFja28yXCIpO1xuY29uc3QgdHlwZWRfZXZlbnRzXzEgPSByZXF1aXJlKFwiLi90eXBlZC1ldmVudHNcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1jbGllbnQ6bWFuYWdlclwiKTtcbmNsYXNzIE1hbmFnZXIgZXh0ZW5kcyB0eXBlZF9ldmVudHNfMS5TdHJpY3RFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHVyaSwgb3B0cykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5zcHMgPSB7fTtcbiAgICAgICAgdGhpcy5zdWJzID0gW107XG4gICAgICAgIGlmICh1cmkgJiYgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHVyaSkge1xuICAgICAgICAgICAgb3B0cyA9IHVyaTtcbiAgICAgICAgICAgIHVyaSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgICAgb3B0cy5wYXRoID0gb3B0cy5wYXRoIHx8IFwiL3NvY2tldC5pb1wiO1xuICAgICAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbihvcHRzLnJlY29ubmVjdGlvbiAhPT0gZmFsc2UpO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbkF0dGVtcHRzKG9wdHMucmVjb25uZWN0aW9uQXR0ZW1wdHMgfHwgSW5maW5pdHkpO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbkRlbGF5KG9wdHMucmVjb25uZWN0aW9uRGVsYXkgfHwgMTAwMCk7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uRGVsYXlNYXgob3B0cy5yZWNvbm5lY3Rpb25EZWxheU1heCB8fCA1MDAwKTtcbiAgICAgICAgdGhpcy5yYW5kb21pemF0aW9uRmFjdG9yKG9wdHMucmFuZG9taXphdGlvbkZhY3RvciB8fCAwLjUpO1xuICAgICAgICB0aGlzLmJhY2tvZmYgPSBuZXcgQmFja29mZih7XG4gICAgICAgICAgICBtaW46IHRoaXMucmVjb25uZWN0aW9uRGVsYXkoKSxcbiAgICAgICAgICAgIG1heDogdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heCgpLFxuICAgICAgICAgICAgaml0dGVyOiB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3IoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGltZW91dChudWxsID09IG9wdHMudGltZW91dCA/IDIwMDAwIDogb3B0cy50aW1lb3V0KTtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgIHRoaXMudXJpID0gdXJpO1xuICAgICAgICBjb25zdCBfcGFyc2VyID0gb3B0cy5wYXJzZXIgfHwgcGFyc2VyO1xuICAgICAgICB0aGlzLmVuY29kZXIgPSBuZXcgX3BhcnNlci5FbmNvZGVyKCk7XG4gICAgICAgIHRoaXMuZGVjb2RlciA9IG5ldyBfcGFyc2VyLkRlY29kZXIoKTtcbiAgICAgICAgdGhpcy5fYXV0b0Nvbm5lY3QgPSBvcHRzLmF1dG9Db25uZWN0ICE9PSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2F1dG9Db25uZWN0KVxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICAgIHJlY29ubmVjdGlvbih2KSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb247XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbiA9ICEhdjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlY29ubmVjdGlvbkF0dGVtcHRzKHYpIHtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cztcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMgPSB2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uRGVsYXkodikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uRGVsYXk7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5ID0gdjtcbiAgICAgICAgKF9hID0gdGhpcy5iYWNrb2ZmKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0TWluKHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmFuZG9taXphdGlvbkZhY3Rvcih2KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yYW5kb21pemF0aW9uRmFjdG9yO1xuICAgICAgICB0aGlzLl9yYW5kb21pemF0aW9uRmFjdG9yID0gdjtcbiAgICAgICAgKF9hID0gdGhpcy5iYWNrb2ZmKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0Sml0dGVyKHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uRGVsYXlNYXgodikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXg7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5TWF4ID0gdjtcbiAgICAgICAgKF9hID0gdGhpcy5iYWNrb2ZmKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0TWF4KHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGltZW91dCh2KSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90aW1lb3V0O1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gdjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0cnlpbmcgdG8gcmVjb25uZWN0IGlmIHJlY29ubmVjdGlvbiBpcyBlbmFibGVkIGFuZCB3ZSBoYXZlIG5vdFxuICAgICAqIHN0YXJ0ZWQgcmVjb25uZWN0aW5nIHlldFxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBtYXliZVJlY29ubmVjdE9uT3BlbigpIHtcbiAgICAgICAgLy8gT25seSB0cnkgdG8gcmVjb25uZWN0IGlmIGl0J3MgdGhlIGZpcnN0IHRpbWUgd2UncmUgY29ubmVjdGluZ1xuICAgICAgICBpZiAoIXRoaXMuX3JlY29ubmVjdGluZyAmJlxuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uICYmXG4gICAgICAgICAgICB0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPT09IDApIHtcbiAgICAgICAgICAgIC8vIGtlZXBzIHJlY29ubmVjdGlvbiBmcm9tIGZpcmluZyB0d2ljZSBmb3IgdGhlIHNhbWUgcmVjb25uZWN0aW9uIGxvb3BcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCB0cmFuc3BvcnQgYHNvY2tldGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIG9wdGlvbmFsLCBjYWxsYmFja1xuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBvcGVuKGZuKSB7XG4gICAgICAgIGRlYnVnKFwicmVhZHlTdGF0ZSAlc1wiLCB0aGlzLl9yZWFkeVN0YXRlKTtcbiAgICAgICAgaWYgKH50aGlzLl9yZWFkeVN0YXRlLmluZGV4T2YoXCJvcGVuXCIpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIGRlYnVnKFwib3BlbmluZyAlc1wiLCB0aGlzLnVyaSk7XG4gICAgICAgIHRoaXMuZW5naW5lID0gZWlvKHRoaXMudXJpLCB0aGlzLm9wdHMpO1xuICAgICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcIm9wZW5pbmdcIjtcbiAgICAgICAgdGhpcy5za2lwUmVjb25uZWN0ID0gZmFsc2U7XG4gICAgICAgIC8vIGVtaXQgYG9wZW5gXG4gICAgICAgIGNvbnN0IG9wZW5TdWJEZXN0cm95ID0gb25fMS5vbihzb2NrZXQsIFwib3BlblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm9ub3BlbigpO1xuICAgICAgICAgICAgZm4gJiYgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGVtaXQgYGVycm9yYFxuICAgICAgICBjb25zdCBlcnJvclN1YiA9IG9uXzEub24oc29ja2V0LCBcImVycm9yXCIsIChlcnIpID0+IHtcbiAgICAgICAgICAgIGRlYnVnKFwiZXJyb3JcIik7XG4gICAgICAgICAgICBzZWxmLmNsZWFudXAoKTtcbiAgICAgICAgICAgIHNlbGYuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJlcnJvclwiLCBlcnIpO1xuICAgICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICAgICAgZm4oZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgZG8gdGhpcyBpZiB0aGVyZSBpcyBubyBmbiB0byBoYW5kbGUgdGhlIGVycm9yXG4gICAgICAgICAgICAgICAgc2VsZi5tYXliZVJlY29ubmVjdE9uT3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGZhbHNlICE9PSB0aGlzLl90aW1lb3V0KSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgICAgICAgICAgIGRlYnVnKFwiY29ubmVjdCBhdHRlbXB0IHdpbGwgdGltZW91dCBhZnRlciAlZFwiLCB0aW1lb3V0KTtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgb3BlblN1YkRlc3Ryb3koKTsgLy8gcHJldmVudHMgYSByYWNlIGNvbmRpdGlvbiB3aXRoIHRoZSAnb3BlbicgZXZlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNldCB0aW1lclxuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcImNvbm5lY3QgYXR0ZW1wdCB0aW1lZCBvdXQgYWZ0ZXIgJWRcIiwgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgb3BlblN1YkRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcInRpbWVvdXRcIikpO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRzLmF1dG9VbnJlZikge1xuICAgICAgICAgICAgICAgIHRpbWVyLnVucmVmKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaChmdW5jdGlvbiBzdWJEZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1YnMucHVzaChvcGVuU3ViRGVzdHJveSk7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKGVycm9yU3ViKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBvcGVuKClcbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25uZWN0KGZuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oZm4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgb3Blbi5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25vcGVuKCkge1xuICAgICAgICBkZWJ1ZyhcIm9wZW5cIik7XG4gICAgICAgIC8vIGNsZWFyIG9sZCBzdWJzXG4gICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICAvLyBtYXJrIGFzIG9wZW5cbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwib3BlblwiO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcIm9wZW5cIik7XG4gICAgICAgIC8vIGFkZCBuZXcgc3Vic1xuICAgICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2gob25fMS5vbihzb2NrZXQsIFwicGluZ1wiLCB0aGlzLm9ucGluZy5iaW5kKHRoaXMpKSwgb25fMS5vbihzb2NrZXQsIFwiZGF0YVwiLCB0aGlzLm9uZGF0YS5iaW5kKHRoaXMpKSwgb25fMS5vbihzb2NrZXQsIFwiZXJyb3JcIiwgdGhpcy5vbmVycm9yLmJpbmQodGhpcykpLCBvbl8xLm9uKHNvY2tldCwgXCJjbG9zZVwiLCB0aGlzLm9uY2xvc2UuYmluZCh0aGlzKSksIG9uXzEub24odGhpcy5kZWNvZGVyLCBcImRlY29kZWRcIiwgdGhpcy5vbmRlY29kZWQuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHBpbmcuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ucGluZygpIHtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJwaW5nXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2l0aCBkYXRhLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmRhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmRlY29kZXIuYWRkKGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBwYXJzZXIgZnVsbHkgZGVjb2RlcyBhIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25kZWNvZGVkKHBhY2tldCkge1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInBhY2tldFwiLCBwYWNrZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBzb2NrZXQgZXJyb3IuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZXJyb3IoZXJyKSB7XG4gICAgICAgIGRlYnVnKFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJlcnJvclwiLCBlcnIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHNvY2tldCBmb3IgdGhlIGdpdmVuIGBuc3BgLlxuICAgICAqXG4gICAgICogQHJldHVybiB7U29ja2V0fVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzb2NrZXQobnNwLCBvcHRzKSB7XG4gICAgICAgIGxldCBzb2NrZXQgPSB0aGlzLm5zcHNbbnNwXTtcbiAgICAgICAgaWYgKCFzb2NrZXQpIHtcbiAgICAgICAgICAgIHNvY2tldCA9IG5ldyBzb2NrZXRfMS5Tb2NrZXQodGhpcywgbnNwLCBvcHRzKTtcbiAgICAgICAgICAgIHRoaXMubnNwc1tuc3BdID0gc29ja2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb2NrZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgc29ja2V0IGNsb3NlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNvY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2Rlc3Ryb3koc29ja2V0KSB7XG4gICAgICAgIGNvbnN0IG5zcHMgPSBPYmplY3Qua2V5cyh0aGlzLm5zcHMpO1xuICAgICAgICBmb3IgKGNvbnN0IG5zcCBvZiBuc3BzKSB7XG4gICAgICAgICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLm5zcHNbbnNwXTtcbiAgICAgICAgICAgIGlmIChzb2NrZXQuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJzb2NrZXQgJXMgaXMgc3RpbGwgYWN0aXZlLCBza2lwcGluZyBjbG9zZVwiLCBuc3ApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jbG9zZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcGFja2V0KHBhY2tldCkge1xuICAgICAgICBkZWJ1ZyhcIndyaXRpbmcgcGFja2V0ICVqXCIsIHBhY2tldCk7XG4gICAgICAgIGNvbnN0IGVuY29kZWRQYWNrZXRzID0gdGhpcy5lbmNvZGVyLmVuY29kZShwYWNrZXQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWRQYWNrZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS53cml0ZShlbmNvZGVkUGFja2V0c1tpXSwgcGFja2V0Lm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFuIHVwIHRyYW5zcG9ydCBzdWJzY3JpcHRpb25zIGFuZCBwYWNrZXQgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICBkZWJ1ZyhcImNsZWFudXBcIik7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKChzdWJEZXN0cm95KSA9PiBzdWJEZXN0cm95KCkpO1xuICAgICAgICB0aGlzLnN1YnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5kZWNvZGVyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xvc2UgdGhlIGN1cnJlbnQgc29ja2V0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfY2xvc2UoKSB7XG4gICAgICAgIGRlYnVnKFwiZGlzY29ubmVjdFwiKTtcbiAgICAgICAgdGhpcy5za2lwUmVjb25uZWN0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChcIm9wZW5pbmdcIiA9PT0gdGhpcy5fcmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgLy8gYG9uY2xvc2VgIHdpbGwgbm90IGZpcmUgYmVjYXVzZVxuICAgICAgICAgICAgLy8gYW4gb3BlbiBldmVudCBuZXZlciBoYXBwZW5lZFxuICAgICAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICBpZiAodGhpcy5lbmdpbmUpXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5jbG9zZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgY2xvc2UoKVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xvc2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIGNsb3NlLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmNsb3NlKHJlYXNvbikge1xuICAgICAgICBkZWJ1ZyhcIm9uY2xvc2VcIik7XG4gICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY2xvc2VcIiwgcmVhc29uKTtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdGlvbiAmJiAhdGhpcy5za2lwUmVjb25uZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF0dGVtcHQgYSByZWNvbm5lY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHJlY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdGluZyB8fCB0aGlzLnNraXBSZWNvbm5lY3QpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPj0gdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMpIHtcbiAgICAgICAgICAgIGRlYnVnKFwicmVjb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RfZmFpbGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkZWxheSA9IHRoaXMuYmFja29mZi5kdXJhdGlvbigpO1xuICAgICAgICAgICAgZGVidWcoXCJ3aWxsIHdhaXQgJWRtcyBiZWZvcmUgcmVjb25uZWN0IGF0dGVtcHRcIiwgZGVsYXkpO1xuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2tpcFJlY29ubmVjdClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiYXR0ZW1wdGluZyByZWNvbm5lY3RcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RfYXR0ZW1wdFwiLCBzZWxmLmJhY2tvZmYuYXR0ZW1wdHMpO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFnYWluIGZvciB0aGUgY2FzZSBzb2NrZXQgY2xvc2VkIGluIGFib3ZlIGV2ZW50c1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNraXBSZWNvbm5lY3QpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBzZWxmLm9wZW4oKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcInJlY29ubmVjdCBhdHRlbXB0IGVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RfZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwicmVjb25uZWN0IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9ucmVjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdHMuYXV0b1VucmVmKSB7XG4gICAgICAgICAgICAgICAgdGltZXIudW5yZWYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKGZ1bmN0aW9uIHN1YkRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHN1Y2Nlc3NmdWwgcmVjb25uZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbnJlY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdCA9IHRoaXMuYmFja29mZi5hdHRlbXB0cztcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdFwiLCBhdHRlbXB0KTtcbiAgICB9XG59XG5leHBvcnRzLk1hbmFnZXIgPSBNYW5hZ2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm9uID0gdm9pZCAwO1xuZnVuY3Rpb24gb24ob2JqLCBldiwgZm4pIHtcbiAgICBvYmoub24oZXYsIGZuKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gc3ViRGVzdHJveSgpIHtcbiAgICAgICAgb2JqLm9mZihldiwgZm4pO1xuICAgIH07XG59XG5leHBvcnRzLm9uID0gb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU29ja2V0ID0gdm9pZCAwO1xuY29uc3Qgc29ja2V0X2lvX3BhcnNlcl8xID0gcmVxdWlyZShcInNvY2tldC5pby1wYXJzZXJcIik7XG5jb25zdCBvbl8xID0gcmVxdWlyZShcIi4vb25cIik7XG5jb25zdCB0eXBlZF9ldmVudHNfMSA9IHJlcXVpcmUoXCIuL3R5cGVkLWV2ZW50c1wiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudDpzb2NrZXRcIik7XG4vKipcbiAqIEludGVybmFsIGV2ZW50cy5cbiAqIFRoZXNlIGV2ZW50cyBjYW4ndCBiZSBlbWl0dGVkIGJ5IHRoZSB1c2VyLlxuICovXG5jb25zdCBSRVNFUlZFRF9FVkVOVFMgPSBPYmplY3QuZnJlZXplKHtcbiAgICBjb25uZWN0OiAxLFxuICAgIGNvbm5lY3RfZXJyb3I6IDEsXG4gICAgZGlzY29ubmVjdDogMSxcbiAgICBkaXNjb25uZWN0aW5nOiAxLFxuICAgIC8vIEV2ZW50RW1pdHRlciByZXNlcnZlZCBldmVudHM6IGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvZXZlbnRzLmh0bWwjZXZlbnRzX2V2ZW50X25ld2xpc3RlbmVyXG4gICAgbmV3TGlzdGVuZXI6IDEsXG4gICAgcmVtb3ZlTGlzdGVuZXI6IDEsXG59KTtcbmNsYXNzIFNvY2tldCBleHRlbmRzIHR5cGVkX2V2ZW50c18xLlN0cmljdEV2ZW50RW1pdHRlciB7XG4gICAgLyoqXG4gICAgICogYFNvY2tldGAgY29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaW8sIG5zcCwgb3B0cykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuaWRzID0gMDtcbiAgICAgICAgdGhpcy5hY2tzID0ge307XG4gICAgICAgIHRoaXMuZmxhZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5pbyA9IGlvO1xuICAgICAgICB0aGlzLm5zcCA9IG5zcDtcbiAgICAgICAgdGhpcy5pZHMgPSAwO1xuICAgICAgICB0aGlzLmFja3MgPSB7fTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZmxhZ3MgPSB7fTtcbiAgICAgICAgaWYgKG9wdHMgJiYgb3B0cy5hdXRoKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGggPSBvcHRzLmF1dGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW8uX2F1dG9Db25uZWN0KVxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBvcGVuLCBjbG9zZSBhbmQgcGFja2V0IGV2ZW50c1xuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdWJFdmVudHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGlvID0gdGhpcy5pbztcbiAgICAgICAgdGhpcy5zdWJzID0gW1xuICAgICAgICAgICAgb25fMS5vbihpbywgXCJvcGVuXCIsIHRoaXMub25vcGVuLmJpbmQodGhpcykpLFxuICAgICAgICAgICAgb25fMS5vbihpbywgXCJwYWNrZXRcIiwgdGhpcy5vbnBhY2tldC5iaW5kKHRoaXMpKSxcbiAgICAgICAgICAgIG9uXzEub24oaW8sIFwiZXJyb3JcIiwgdGhpcy5vbmVycm9yLmJpbmQodGhpcykpLFxuICAgICAgICAgICAgb25fMS5vbihpbywgXCJjbG9zZVwiLCB0aGlzLm9uY2xvc2UuYmluZCh0aGlzKSksXG4gICAgICAgIF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIFNvY2tldCB3aWxsIHRyeSB0byByZWNvbm5lY3Qgd2hlbiBpdHMgTWFuYWdlciBjb25uZWN0cyBvciByZWNvbm5lY3RzXG4gICAgICovXG4gICAgZ2V0IGFjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5zdWJzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBcIk9wZW5zXCIgdGhlIHNvY2tldC5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgdGhpcy5zdWJFdmVudHMoKTtcbiAgICAgICAgaWYgKCF0aGlzLmlvW1wiX3JlY29ubmVjdGluZ1wiXSlcbiAgICAgICAgICAgIHRoaXMuaW8ub3BlbigpOyAvLyBlbnN1cmUgb3BlblxuICAgICAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMuaW8uX3JlYWR5U3RhdGUpXG4gICAgICAgICAgICB0aGlzLm9ub3BlbigpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGNvbm5lY3QoKVxuICAgICAqL1xuICAgIG9wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3QoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBgbWVzc2FnZWAgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc2VuZCguLi5hcmdzKSB7XG4gICAgICAgIGFyZ3MudW5zaGlmdChcIm1lc3NhZ2VcIik7XG4gICAgICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIGBlbWl0YC5cbiAgICAgKiBJZiB0aGUgZXZlbnQgaXMgaW4gYGV2ZW50c2AsIGl0J3MgZW1pdHRlZCBub3JtYWxseS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBlbWl0KGV2LCAuLi5hcmdzKSB7XG4gICAgICAgIGlmIChSRVNFUlZFRF9FVkVOVFMuaGFzT3duUHJvcGVydHkoZXYpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGV2ICsgJ1wiIGlzIGEgcmVzZXJ2ZWQgZXZlbnQgbmFtZScpO1xuICAgICAgICB9XG4gICAgICAgIGFyZ3MudW5zaGlmdChldik7XG4gICAgICAgIGNvbnN0IHBhY2tldCA9IHtcbiAgICAgICAgICAgIHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkVWRU5ULFxuICAgICAgICAgICAgZGF0YTogYXJncyxcbiAgICAgICAgfTtcbiAgICAgICAgcGFja2V0Lm9wdGlvbnMgPSB7fTtcbiAgICAgICAgcGFja2V0Lm9wdGlvbnMuY29tcHJlc3MgPSB0aGlzLmZsYWdzLmNvbXByZXNzICE9PSBmYWxzZTtcbiAgICAgICAgLy8gZXZlbnQgYWNrIGNhbGxiYWNrXG4gICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIGRlYnVnKFwiZW1pdHRpbmcgcGFja2V0IHdpdGggYWNrIGlkICVkXCIsIHRoaXMuaWRzKTtcbiAgICAgICAgICAgIHRoaXMuYWNrc1t0aGlzLmlkc10gPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgcGFja2V0LmlkID0gdGhpcy5pZHMrKztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc1RyYW5zcG9ydFdyaXRhYmxlID0gdGhpcy5pby5lbmdpbmUgJiZcbiAgICAgICAgICAgIHRoaXMuaW8uZW5naW5lLnRyYW5zcG9ydCAmJlxuICAgICAgICAgICAgdGhpcy5pby5lbmdpbmUudHJhbnNwb3J0LndyaXRhYmxlO1xuICAgICAgICBjb25zdCBkaXNjYXJkUGFja2V0ID0gdGhpcy5mbGFncy52b2xhdGlsZSAmJiAoIWlzVHJhbnNwb3J0V3JpdGFibGUgfHwgIXRoaXMuY29ubmVjdGVkKTtcbiAgICAgICAgaWYgKGRpc2NhcmRQYWNrZXQpIHtcbiAgICAgICAgICAgIGRlYnVnKFwiZGlzY2FyZCBwYWNrZXQgYXMgdGhlIHRyYW5zcG9ydCBpcyBub3QgY3VycmVudGx5IHdyaXRhYmxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnBhY2tldChwYWNrZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZW5kQnVmZmVyLnB1c2gocGFja2V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZsYWdzID0ge307XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHBhY2tldChwYWNrZXQpIHtcbiAgICAgICAgcGFja2V0Lm5zcCA9IHRoaXMubnNwO1xuICAgICAgICB0aGlzLmlvLl9wYWNrZXQocGFja2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIGBvcGVuYC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25vcGVuKCkge1xuICAgICAgICBkZWJ1ZyhcInRyYW5zcG9ydCBpcyBvcGVuIC0gY29ubmVjdGluZ1wiKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmF1dGggPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGgoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1QsIGRhdGEgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFja2V0KHsgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVCwgZGF0YTogdGhpcy5hdXRoIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBvciBtYW5hZ2VyIGBlcnJvcmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXJyXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmVycm9yKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNvbm5lY3RfZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgYGNsb3NlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZWFzb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uY2xvc2UocmVhc29uKSB7XG4gICAgICAgIGRlYnVnKFwiY2xvc2UgKCVzKVwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmlkO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImRpc2Nvbm5lY3RcIiwgcmVhc29uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdpdGggc29ja2V0IHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ucGFja2V0KHBhY2tldCkge1xuICAgICAgICBjb25zdCBzYW1lTmFtZXNwYWNlID0gcGFja2V0Lm5zcCA9PT0gdGhpcy5uc3A7XG4gICAgICAgIGlmICghc2FtZU5hbWVzcGFjZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc3dpdGNoIChwYWNrZXQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNUOlxuICAgICAgICAgICAgICAgIGlmIChwYWNrZXQuZGF0YSAmJiBwYWNrZXQuZGF0YS5zaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBwYWNrZXQuZGF0YS5zaWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25jb25uZWN0KGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdF9lcnJvclwiLCBuZXcgRXJyb3IoXCJJdCBzZWVtcyB5b3UgYXJlIHRyeWluZyB0byByZWFjaCBhIFNvY2tldC5JTyBzZXJ2ZXIgaW4gdjIueCB3aXRoIGEgdjMueCBjbGllbnQsIGJ1dCB0aGV5IGFyZSBub3QgY29tcGF0aWJsZSAobW9yZSBpbmZvcm1hdGlvbiBoZXJlOiBodHRwczovL3NvY2tldC5pby9kb2NzL3YzL21pZ3JhdGluZy1mcm9tLTIteC10by0zLTAvKVwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5FVkVOVDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uZXZlbnQocGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQklOQVJZX0VWRU5UOlxuICAgICAgICAgICAgICAgIHRoaXMub25ldmVudChwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5BQ0s6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmFjayhwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5CSU5BUllfQUNLOlxuICAgICAgICAgICAgICAgIHRoaXMub25hY2socGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRElTQ09OTkVDVDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNUX0VSUk9SOlxuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihwYWNrZXQuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgZXJyLmRhdGEgPSBwYWNrZXQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdF9lcnJvclwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgc2VydmVyIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25ldmVudChwYWNrZXQpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IHBhY2tldC5kYXRhIHx8IFtdO1xuICAgICAgICBkZWJ1ZyhcImVtaXR0aW5nIGV2ZW50ICVqXCIsIGFyZ3MpO1xuICAgICAgICBpZiAobnVsbCAhPSBwYWNrZXQuaWQpIHtcbiAgICAgICAgICAgIGRlYnVnKFwiYXR0YWNoaW5nIGFjayBjYWxsYmFjayB0byBldmVudFwiKTtcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmFjayhwYWNrZXQuaWQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyLnB1c2goT2JqZWN0LmZyZWV6ZShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW1pdEV2ZW50KGFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FueUxpc3RlbmVycyAmJiB0aGlzLl9hbnlMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvZHVjZXMgYW4gYWNrIGNhbGxiYWNrIHRvIGVtaXQgd2l0aCBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWNrKGlkKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgc2VudCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgZG91YmxlIGNhbGxiYWNrc1xuICAgICAgICAgICAgaWYgKHNlbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc2VudCA9IHRydWU7XG4gICAgICAgICAgICBkZWJ1ZyhcInNlbmRpbmcgYWNrICVqXCIsIGFyZ3MpO1xuICAgICAgICAgICAgc2VsZi5wYWNrZXQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkFDSyxcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgZGF0YTogYXJncyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHNlcnZlciBhY2tub3dsZWdlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uYWNrKHBhY2tldCkge1xuICAgICAgICBjb25zdCBhY2sgPSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGFjaykge1xuICAgICAgICAgICAgZGVidWcoXCJjYWxsaW5nIGFjayAlcyB3aXRoICVqXCIsIHBhY2tldC5pZCwgcGFja2V0LmRhdGEpO1xuICAgICAgICAgICAgYWNrLmFwcGx5KHRoaXMsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlYnVnKFwiYmFkIGFjayAlc1wiLCBwYWNrZXQuaWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHNlcnZlciBjb25uZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmNvbm5lY3QoaWQpIHtcbiAgICAgICAgZGVidWcoXCJzb2NrZXQgY29ubmVjdGVkIHdpdGggaWQgJXNcIiwgaWQpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0XCIpO1xuICAgICAgICB0aGlzLmVtaXRCdWZmZXJlZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0IGJ1ZmZlcmVkIGV2ZW50cyAocmVjZWl2ZWQgYW5kIGVtaXR0ZWQpLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBlbWl0QnVmZmVyZWQoKSB7XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlci5mb3JFYWNoKChhcmdzKSA9PiB0aGlzLmVtaXRFdmVudChhcmdzKSk7XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIuZm9yRWFjaCgocGFja2V0KSA9PiB0aGlzLnBhY2tldChwYWNrZXQpKTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHNlcnZlciBkaXNjb25uZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGRlYnVnKFwic2VydmVyIGRpc2Nvbm5lY3QgKCVzKVwiLCB0aGlzLm5zcCk7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLm9uY2xvc2UoXCJpbyBzZXJ2ZXIgZGlzY29ubmVjdFwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZm9yY2VkIGNsaWVudC9zZXJ2ZXIgc2lkZSBkaXNjb25uZWN0aW9ucyxcbiAgICAgKiB0aGlzIG1ldGhvZCBlbnN1cmVzIHRoZSBtYW5hZ2VyIHN0b3BzIHRyYWNraW5nIHVzIGFuZFxuICAgICAqIHRoYXQgcmVjb25uZWN0aW9ucyBkb24ndCBnZXQgdHJpZ2dlcmVkIGZvciB0aGlzLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWJzKSB7XG4gICAgICAgICAgICAvLyBjbGVhbiBzdWJzY3JpcHRpb25zIHRvIGF2b2lkIHJlY29ubmVjdGlvbnNcbiAgICAgICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKChzdWJEZXN0cm95KSA9PiBzdWJEZXN0cm95KCkpO1xuICAgICAgICAgICAgdGhpcy5zdWJzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW9bXCJfZGVzdHJveVwiXSh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzY29ubmVjdHMgdGhlIHNvY2tldCBtYW51YWxseS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIGRlYnVnKFwicGVyZm9ybWluZyBkaXNjb25uZWN0ICglcylcIiwgdGhpcy5uc3ApO1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5ESVNDT05ORUNUIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlbW92ZSBzb2NrZXQgZnJvbSBwb29sXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIGZpcmUgZXZlbnRzXG4gICAgICAgICAgICB0aGlzLm9uY2xvc2UoXCJpbyBjbGllbnQgZGlzY29ubmVjdFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGRpc2Nvbm5lY3QoKVxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNsb3NlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNvbXByZXNzIGZsYWcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29tcHJlc3MgLSBpZiBgdHJ1ZWAsIGNvbXByZXNzZXMgdGhlIHNlbmRpbmcgZGF0YVxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb21wcmVzcyhjb21wcmVzcykge1xuICAgICAgICB0aGlzLmZsYWdzLmNvbXByZXNzID0gY29tcHJlc3M7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgbW9kaWZpZXIgZm9yIGEgc3Vic2VxdWVudCBldmVudCBlbWlzc2lvbiB0aGF0IHRoZSBldmVudCBtZXNzYWdlIHdpbGwgYmUgZHJvcHBlZCB3aGVuIHRoaXMgc29ja2V0IGlzIG5vdFxuICAgICAqIHJlYWR5IHRvIHNlbmQgbWVzc2FnZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGdldCB2b2xhdGlsZSgpIHtcbiAgICAgICAgdGhpcy5mbGFncy52b2xhdGlsZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gYW55IGV2ZW50IGlzIGVtaXR0ZWQuIFRoZSBldmVudCBuYW1lIGlzIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlXG4gICAgICogY2FsbGJhY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgb25BbnkobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzID0gdGhpcy5fYW55TGlzdGVuZXJzIHx8IFtdO1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gYW55IGV2ZW50IGlzIGVtaXR0ZWQuIFRoZSBldmVudCBuYW1lIGlzIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlXG4gICAgICogY2FsbGJhY2suIFRoZSBsaXN0ZW5lciBpcyBhZGRlZCB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0ZW5lcnMgYXJyYXkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgcHJlcGVuZEFueShsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMgfHwgW107XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBmaXJlZCB3aGVuIGFueSBldmVudCBpcyBlbWl0dGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIG9mZkFueShsaXN0ZW5lcikge1xuICAgICAgICBpZiAoIXRoaXMuX2FueUxpc3RlbmVycykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnM7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lciA9PT0gbGlzdGVuZXJzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2FueUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGxpc3RlbmVycyB0aGF0IGFyZSBsaXN0ZW5pbmcgZm9yIGFueSBldmVudCB0aGF0IGlzIHNwZWNpZmllZC4gVGhpcyBhcnJheSBjYW4gYmUgbWFuaXB1bGF0ZWQsXG4gICAgICogZS5nLiB0byByZW1vdmUgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGxpc3RlbmVyc0FueSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FueUxpc3RlbmVycyB8fCBbXTtcbiAgICB9XG59XG5leHBvcnRzLlNvY2tldCA9IFNvY2tldDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdHJpY3RFdmVudEVtaXR0ZXIgPSB2b2lkIDA7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuLyoqXG4gKiBTdHJpY3RseSB0eXBlZCB2ZXJzaW9uIG9mIGFuIGBFdmVudEVtaXR0ZXJgLiBBIGBUeXBlZEV2ZW50RW1pdHRlcmAgdGFrZXMgdHlwZVxuICogcGFyYW1ldGVycyBmb3IgbWFwcGluZ3Mgb2YgZXZlbnQgbmFtZXMgdG8gZXZlbnQgZGF0YSB0eXBlcywgYW5kIHN0cmljdGx5XG4gKiB0eXBlcyBtZXRob2QgY2FsbHMgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGFjY29yZGluZyB0byB0aGVzZSBldmVudCBtYXBzLlxuICpcbiAqIEB0eXBlUGFyYW0gTGlzdGVuRXZlbnRzIC0gYEV2ZW50c01hcGAgb2YgdXNlci1kZWZpbmVkIGV2ZW50cyB0aGF0IGNhbiBiZVxuICogbGlzdGVuZWQgdG8gd2l0aCBgb25gIG9yIGBvbmNlYFxuICogQHR5cGVQYXJhbSBFbWl0RXZlbnRzIC0gYEV2ZW50c01hcGAgb2YgdXNlci1kZWZpbmVkIGV2ZW50cyB0aGF0IGNhbiBiZVxuICogZW1pdHRlZCB3aXRoIGBlbWl0YFxuICogQHR5cGVQYXJhbSBSZXNlcnZlZEV2ZW50cyAtIGBFdmVudHNNYXBgIG9mIHJlc2VydmVkIGV2ZW50cywgdGhhdCBjYW4gYmVcbiAqIGVtaXR0ZWQgYnkgc29ja2V0LmlvIHdpdGggYGVtaXRSZXNlcnZlZGAsIGFuZCBjYW4gYmUgbGlzdGVuZWQgdG8gd2l0aFxuICogYGxpc3RlbmAuXG4gKi9cbmNsYXNzIFN0cmljdEV2ZW50RW1pdHRlciBleHRlbmRzIEVtaXR0ZXIge1xuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGBsaXN0ZW5lcmAgZnVuY3Rpb24gYXMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIGBldmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgQ2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvbihldiwgbGlzdGVuZXIpIHtcbiAgICAgICAgc3VwZXIub24oZXYsIGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBvbmUtdGltZSBgbGlzdGVuZXJgIGZ1bmN0aW9uIGFzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBgZXZgLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2IE5hbWUgb2YgdGhlIGV2ZW50XG4gICAgICogQHBhcmFtIGxpc3RlbmVyIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICovXG4gICAgb25jZShldiwgbGlzdGVuZXIpIHtcbiAgICAgICAgc3VwZXIub25jZShldiwgbGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0gYXJncyBWYWx1ZXMgdG8gc2VuZCB0byBsaXN0ZW5lcnMgb2YgdGhpcyBldmVudFxuICAgICAqL1xuICAgIGVtaXQoZXYsIC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIuZW1pdChldiwgLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhIHJlc2VydmVkIGV2ZW50LlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgYHByb3RlY3RlZGAsIHNvIHRoYXQgb25seSBhIGNsYXNzIGV4dGVuZGluZ1xuICAgICAqIGBTdHJpY3RFdmVudEVtaXR0ZXJgIGNhbiBlbWl0IGl0cyBvd24gcmVzZXJ2ZWQgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2IFJlc2VydmVkIGV2ZW50IG5hbWVcbiAgICAgKiBAcGFyYW0gYXJncyBBcmd1bWVudHMgdG8gZW1pdCBhbG9uZyB3aXRoIHRoZSBldmVudFxuICAgICAqL1xuICAgIGVtaXRSZXNlcnZlZChldiwgLi4uYXJncykge1xuICAgICAgICBzdXBlci5lbWl0KGV2LCAuLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3RlbmVycyBsaXN0ZW5pbmcgdG8gYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgRXZlbnQgbmFtZVxuICAgICAqIEByZXR1cm5zIEFycmF5IG9mIGxpc3RlbmVycyBzdWJzY3JpYmVkIHRvIGBldmVudGBcbiAgICAgKi9cbiAgICBsaXN0ZW5lcnMoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmxpc3RlbmVycyhldmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5TdHJpY3RFdmVudEVtaXR0ZXIgPSBTdHJpY3RFdmVudEVtaXR0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXJsID0gdm9pZCAwO1xuY29uc3QgcGFyc2V1cmkgPSByZXF1aXJlKFwicGFyc2V1cmlcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1jbGllbnQ6dXJsXCIpO1xuLyoqXG4gKiBVUkwgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB1cmkgLSB1cmxcbiAqIEBwYXJhbSBwYXRoIC0gdGhlIHJlcXVlc3QgcGF0aCBvZiB0aGUgY29ubmVjdGlvblxuICogQHBhcmFtIGxvYyAtIEFuIG9iamVjdCBtZWFudCB0byBtaW1pYyB3aW5kb3cubG9jYXRpb24uXG4gKiAgICAgICAgRGVmYXVsdHMgdG8gd2luZG93LmxvY2F0aW9uLlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB1cmwodXJpLCBwYXRoID0gXCJcIiwgbG9jKSB7XG4gICAgbGV0IG9iaiA9IHVyaTtcbiAgICAvLyBkZWZhdWx0IHRvIHdpbmRvdy5sb2NhdGlvblxuICAgIGxvYyA9IGxvYyB8fCAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2F0aW9uKTtcbiAgICBpZiAobnVsbCA9PSB1cmkpXG4gICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIFwiLy9cIiArIGxvYy5ob3N0O1xuICAgIC8vIHJlbGF0aXZlIHBhdGggc3VwcG9ydFxuICAgIGlmICh0eXBlb2YgdXJpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmIChcIi9cIiA9PT0gdXJpLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgaWYgKFwiL1wiID09PSB1cmkuY2hhckF0KDEpKSB7XG4gICAgICAgICAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJpID0gbG9jLmhvc3QgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEvXihodHRwcz98d3NzPyk6XFwvXFwvLy50ZXN0KHVyaSkpIHtcbiAgICAgICAgICAgIGRlYnVnKFwicHJvdG9jb2wtbGVzcyB1cmwgJXNcIiwgdXJpKTtcbiAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgbG9jKSB7XG4gICAgICAgICAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgXCIvL1wiICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJpID0gXCJodHRwczovL1wiICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHBhcnNlXG4gICAgICAgIGRlYnVnKFwicGFyc2UgJXNcIiwgdXJpKTtcbiAgICAgICAgb2JqID0gcGFyc2V1cmkodXJpKTtcbiAgICB9XG4gICAgLy8gbWFrZSBzdXJlIHdlIHRyZWF0IGBsb2NhbGhvc3Q6ODBgIGFuZCBgbG9jYWxob3N0YCBlcXVhbGx5XG4gICAgaWYgKCFvYmoucG9ydCkge1xuICAgICAgICBpZiAoL14oaHR0cHx3cykkLy50ZXN0KG9iai5wcm90b2NvbCkpIHtcbiAgICAgICAgICAgIG9iai5wb3J0ID0gXCI4MFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKC9eKGh0dHB8d3MpcyQvLnRlc3Qob2JqLnByb3RvY29sKSkge1xuICAgICAgICAgICAgb2JqLnBvcnQgPSBcIjQ0M1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9iai5wYXRoID0gb2JqLnBhdGggfHwgXCIvXCI7XG4gICAgY29uc3QgaXB2NiA9IG9iai5ob3N0LmluZGV4T2YoXCI6XCIpICE9PSAtMTtcbiAgICBjb25zdCBob3N0ID0gaXB2NiA/IFwiW1wiICsgb2JqLmhvc3QgKyBcIl1cIiA6IG9iai5ob3N0O1xuICAgIC8vIGRlZmluZSB1bmlxdWUgaWRcbiAgICBvYmouaWQgPSBvYmoucHJvdG9jb2wgKyBcIjovL1wiICsgaG9zdCArIFwiOlwiICsgb2JqLnBvcnQgKyBwYXRoO1xuICAgIC8vIGRlZmluZSBocmVmXG4gICAgb2JqLmhyZWYgPVxuICAgICAgICBvYmoucHJvdG9jb2wgK1xuICAgICAgICAgICAgXCI6Ly9cIiArXG4gICAgICAgICAgICBob3N0ICtcbiAgICAgICAgICAgIChsb2MgJiYgbG9jLnBvcnQgPT09IG9iai5wb3J0ID8gXCJcIiA6IFwiOlwiICsgb2JqLnBvcnQpO1xuICAgIHJldHVybiBvYmo7XG59XG5leHBvcnRzLnVybCA9IHVybDtcbiIsIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9IGxvY2Fsc3RvcmFnZSgpO1xuZXhwb3J0cy5kZXN0cm95ID0gKCgpID0+IHtcblx0bGV0IHdhcm5lZCA9IGZhbHNlO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0aWYgKCF3YXJuZWQpIHtcblx0XHRcdHdhcm5lZCA9IHRydWU7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nKTtcblx0XHR9XG5cdH07XG59KSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcblx0JyMwMDAwQ0MnLFxuXHQnIzAwMDBGRicsXG5cdCcjMDAzM0NDJyxcblx0JyMwMDMzRkYnLFxuXHQnIzAwNjZDQycsXG5cdCcjMDA2NkZGJyxcblx0JyMwMDk5Q0MnLFxuXHQnIzAwOTlGRicsXG5cdCcjMDBDQzAwJyxcblx0JyMwMENDMzMnLFxuXHQnIzAwQ0M2NicsXG5cdCcjMDBDQzk5Jyxcblx0JyMwMENDQ0MnLFxuXHQnIzAwQ0NGRicsXG5cdCcjMzMwMENDJyxcblx0JyMzMzAwRkYnLFxuXHQnIzMzMzNDQycsXG5cdCcjMzMzM0ZGJyxcblx0JyMzMzY2Q0MnLFxuXHQnIzMzNjZGRicsXG5cdCcjMzM5OUNDJyxcblx0JyMzMzk5RkYnLFxuXHQnIzMzQ0MwMCcsXG5cdCcjMzNDQzMzJyxcblx0JyMzM0NDNjYnLFxuXHQnIzMzQ0M5OScsXG5cdCcjMzNDQ0NDJyxcblx0JyMzM0NDRkYnLFxuXHQnIzY2MDBDQycsXG5cdCcjNjYwMEZGJyxcblx0JyM2NjMzQ0MnLFxuXHQnIzY2MzNGRicsXG5cdCcjNjZDQzAwJyxcblx0JyM2NkNDMzMnLFxuXHQnIzk5MDBDQycsXG5cdCcjOTkwMEZGJyxcblx0JyM5OTMzQ0MnLFxuXHQnIzk5MzNGRicsXG5cdCcjOTlDQzAwJyxcblx0JyM5OUNDMzMnLFxuXHQnI0NDMDAwMCcsXG5cdCcjQ0MwMDMzJyxcblx0JyNDQzAwNjYnLFxuXHQnI0NDMDA5OScsXG5cdCcjQ0MwMENDJyxcblx0JyNDQzAwRkYnLFxuXHQnI0NDMzMwMCcsXG5cdCcjQ0MzMzMzJyxcblx0JyNDQzMzNjYnLFxuXHQnI0NDMzM5OScsXG5cdCcjQ0MzM0NDJyxcblx0JyNDQzMzRkYnLFxuXHQnI0NDNjYwMCcsXG5cdCcjQ0M2NjMzJyxcblx0JyNDQzk5MDAnLFxuXHQnI0NDOTkzMycsXG5cdCcjQ0NDQzAwJyxcblx0JyNDQ0NDMzMnLFxuXHQnI0ZGMDAwMCcsXG5cdCcjRkYwMDMzJyxcblx0JyNGRjAwNjYnLFxuXHQnI0ZGMDA5OScsXG5cdCcjRkYwMENDJyxcblx0JyNGRjAwRkYnLFxuXHQnI0ZGMzMwMCcsXG5cdCcjRkYzMzMzJyxcblx0JyNGRjMzNjYnLFxuXHQnI0ZGMzM5OScsXG5cdCcjRkYzM0NDJyxcblx0JyNGRjMzRkYnLFxuXHQnI0ZGNjYwMCcsXG5cdCcjRkY2NjMzJyxcblx0JyNGRjk5MDAnLFxuXHQnI0ZGOTkzMycsXG5cdCcjRkZDQzAwJyxcblx0JyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcblx0Ly8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2Vcblx0Ly8gZXhwbGljaXRseVxuXHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgKHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgd2luZG93LnByb2Nlc3MuX19ud2pzKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBJcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuXHQvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuXHRyZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcblx0XHQvLyBJcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG5cdFx0KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcblx0XHQvLyBJcyBmaXJlZm94ID49IHYzMT9cblx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcblx0XHQvLyBEb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcblx0YXJnc1swXSA9ICh0aGlzLnVzZUNvbG9ycyA/ICclYycgOiAnJykgK1xuXHRcdHRoaXMubmFtZXNwYWNlICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnICVjJyA6ICcgJykgK1xuXHRcdGFyZ3NbMF0gK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICclYyAnIDogJyAnKSArXG5cdFx0JysnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuXHRpZiAoIXRoaXMudXNlQ29sb3JzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG5cdGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpO1xuXG5cdC8vIFRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG5cdC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cblx0Ly8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG5cdGxldCBpbmRleCA9IDA7XG5cdGxldCBsYXN0QyA9IDA7XG5cdGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBtYXRjaCA9PiB7XG5cdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluZGV4Kys7XG5cdFx0aWYgKG1hdGNoID09PSAnJWMnKSB7XG5cdFx0XHQvLyBXZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcblx0XHRcdC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG5cdFx0XHRsYXN0QyA9IGluZGV4O1xuXHRcdH1cblx0fSk7XG5cblx0YXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUuZGVidWcoKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKiBJZiBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGF2YWlsYWJsZSwgZmFsbHMgYmFja1xuICogdG8gYGNvbnNvbGUubG9nYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5leHBvcnRzLmxvZyA9IGNvbnNvbGUuZGVidWcgfHwgY29uc29sZS5sb2cgfHwgKCgpID0+IHt9KTtcblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuXHR0cnkge1xuXHRcdGlmIChuYW1lc3BhY2VzKSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2Uuc2V0SXRlbSgnZGVidWcnLCBuYW1lc3BhY2VzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRsZXQgcjtcblx0dHJ5IHtcblx0XHRyID0gZXhwb3J0cy5zdG9yYWdlLmdldEl0ZW0oJ2RlYnVnJyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG5cblx0Ly8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuXHRpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcblx0XHRyID0gcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cblxuXHRyZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG5cdHRyeSB7XG5cdFx0Ly8gVFZNTEtpdCAoQXBwbGUgVFYgSlMgUnVudGltZSkgZG9lcyBub3QgaGF2ZSBhIHdpbmRvdyBvYmplY3QsIGp1c3QgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dFxuXHRcdC8vIFRoZSBCcm93c2VyIGFsc28gaGFzIGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHQuXG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbW1vbicpKGV4cG9ydHMpO1xuXG5jb25zdCB7Zm9ybWF0dGVyc30gPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24gKHYpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVycm9yLm1lc3NhZ2U7XG5cdH1cbn07XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5mdW5jdGlvbiBzZXR1cChlbnYpIHtcblx0Y3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuZGVmYXVsdCA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5jb2VyY2UgPSBjb2VyY2U7XG5cdGNyZWF0ZURlYnVnLmRpc2FibGUgPSBkaXNhYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGUgPSBlbmFibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRjcmVhdGVEZWJ1Zy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cdGNyZWF0ZURlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXG5cdE9iamVjdC5rZXlzKGVudikuZm9yRWFjaChrZXkgPT4ge1xuXHRcdGNyZWF0ZURlYnVnW2tleV0gPSBlbnZba2V5XTtcblx0fSk7XG5cblx0LyoqXG5cdCogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG5cdCovXG5cblx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHQvKipcblx0KiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG5cdCpcblx0KiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmZvcm1hdHRlcnMgPSB7fTtcblxuXHQvKipcblx0KiBTZWxlY3RzIGEgY29sb3IgZm9yIGEgZGVidWcgbmFtZXNwYWNlXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSBUaGUgbmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIGZvciB0aGUgZGVidWcgaW5zdGFuY2UgdG8gYmUgY29sb3JlZFxuXHQqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9IEFuIEFOU0kgY29sb3IgY29kZSBmb3IgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcblx0XHRsZXQgaGFzaCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVEZWJ1Zy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBjcmVhdGVEZWJ1Zy5jb2xvcnMubGVuZ3RoXTtcblx0fVxuXHRjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuXG5cdC8qKlxuXHQqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXHRcdGxldCBwcmV2VGltZTtcblx0XHRsZXQgZW5hYmxlT3ZlcnJpZGUgPSBudWxsO1xuXG5cdFx0ZnVuY3Rpb24gZGVidWcoLi4uYXJncykge1xuXHRcdFx0Ly8gRGlzYWJsZWQ/XG5cdFx0XHRpZiAoIWRlYnVnLmVuYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzZWxmID0gZGVidWc7XG5cblx0XHRcdC8vIFNldCBgZGlmZmAgdGltZXN0YW1wXG5cdFx0XHRjb25zdCBjdXJyID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y29uc3QgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuXHRcdFx0c2VsZi5kaWZmID0gbXM7XG5cdFx0XHRzZWxmLnByZXYgPSBwcmV2VGltZTtcblx0XHRcdHNlbGYuY3VyciA9IGN1cnI7XG5cdFx0XHRwcmV2VGltZSA9IGN1cnI7XG5cblx0XHRcdGFyZ3NbMF0gPSBjcmVhdGVEZWJ1Zy5jb2VyY2UoYXJnc1swXSk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cblx0XHRcdFx0YXJncy51bnNoaWZ0KCclTycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblx0XHRcdGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCAobWF0Y2gsIGZvcm1hdCkgPT4ge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG5cdFx0XHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0XHRcdHJldHVybiAnJSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVyID0gY3JlYXRlRGVidWcuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXHRcdFx0XHRpZiAodHlwZW9mIGZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9IGFyZ3NbaW5kZXhdO1xuXHRcdFx0XHRcdG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuXHRcdFx0XHRcdC8vIE5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcblx0XHRcdFx0XHRhcmdzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0aW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcblx0XHRcdGNyZWF0ZURlYnVnLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuXHRcdFx0Y29uc3QgbG9nRm4gPSBzZWxmLmxvZyB8fCBjcmVhdGVEZWJ1Zy5sb2c7XG5cdFx0XHRsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHRkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cdFx0ZGVidWcudXNlQ29sb3JzID0gY3JlYXRlRGVidWcudXNlQ29sb3JzKCk7XG5cdFx0ZGVidWcuY29sb3IgPSBjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLmV4dGVuZCA9IGV4dGVuZDtcblx0XHRkZWJ1Zy5kZXN0cm95ID0gY3JlYXRlRGVidWcuZGVzdHJveTsgLy8gWFhYIFRlbXBvcmFyeS4gV2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVidWcsICdlbmFibGVkJywge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG5cdFx0XHRnZXQ6ICgpID0+IGVuYWJsZU92ZXJyaWRlID09PSBudWxsID8gY3JlYXRlRGVidWcuZW5hYmxlZChuYW1lc3BhY2UpIDogZW5hYmxlT3ZlcnJpZGUsXG5cdFx0XHRzZXQ6IHYgPT4ge1xuXHRcdFx0XHRlbmFibGVPdmVycmlkZSA9IHY7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBFbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuXHRcdGlmICh0eXBlb2YgY3JlYXRlRGVidWcuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5pdChkZWJ1Zyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlYnVnO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0ZW5kKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG5cdFx0Y29uc3QgbmV3RGVidWcgPSBjcmVhdGVEZWJ1Zyh0aGlzLm5hbWVzcGFjZSArICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICc6JyA6IGRlbGltaXRlcikgKyBuYW1lc3BhY2UpO1xuXHRcdG5ld0RlYnVnLmxvZyA9IHRoaXMubG9nO1xuXHRcdHJldHVybiBuZXdEZWJ1Zztcblx0fVxuXG5cdC8qKlxuXHQqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcblx0KiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuXHRcdGNyZWF0ZURlYnVnLnNhdmUobmFtZXNwYWNlcyk7XG5cblx0XHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRcdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0XHRsZXQgaTtcblx0XHRjb25zdCBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoIXNwbGl0W2ldKSB7XG5cdFx0XHRcdC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcblxuXHRcdFx0aWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG5cdCpcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBkaXNhYmxlKCkge1xuXHRcdGNvbnN0IG5hbWVzcGFjZXMgPSBbXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5uYW1lcy5tYXAodG9OYW1lc3BhY2UpLFxuXHRcdFx0Li4uY3JlYXRlRGVidWcuc2tpcHMubWFwKHRvTmFtZXNwYWNlKS5tYXAobmFtZXNwYWNlID0+ICctJyArIG5hbWVzcGFjZSlcblx0XHRdLmpvaW4oJywnKTtcblx0XHRjcmVhdGVEZWJ1Zy5lbmFibGUoJycpO1xuXHRcdHJldHVybiBuYW1lc3BhY2VzO1xuXHR9XG5cblx0LyoqXG5cdCogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVcblx0KiBAcmV0dXJuIHtCb29sZWFufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuXHRcdGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0bGV0IGk7XG5cdFx0bGV0IGxlbjtcblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQqIENvbnZlcnQgcmVnZXhwIHRvIG5hbWVzcGFjZVxuXHQqXG5cdCogQHBhcmFtIHtSZWdFeHB9IHJlZ3hlcFxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHRvTmFtZXNwYWNlKHJlZ2V4cCkge1xuXHRcdHJldHVybiByZWdleHAudG9TdHJpbmcoKVxuXHRcdFx0LnN1YnN0cmluZygyLCByZWdleHAudG9TdHJpbmcoKS5sZW5ndGggLSAyKVxuXHRcdFx0LnJlcGxhY2UoL1xcLlxcKlxcPyQvLCAnKicpO1xuXHR9XG5cblx0LyoqXG5cdCogQ29lcmNlIGB2YWxgLlxuXHQqXG5cdCogQHBhcmFtIHtNaXhlZH0gdmFsXG5cdCogQHJldHVybiB7TWl4ZWR9XG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcblx0XHRpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG5cdFx0fVxuXHRcdHJldHVybiB2YWw7XG5cdH1cblxuXHQvKipcblx0KiBYWFggRE8gTk9UIFVTRS4gVGhpcyBpcyBhIHRlbXBvcmFyeSBzdHViIGZ1bmN0aW9uLlxuXHQqIFhYWCBJdCBXSUxMIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cblx0Ki9cblx0ZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0XHRjb25zb2xlLndhcm4oJ0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nKTtcblx0fVxuXG5cdGNyZWF0ZURlYnVnLmVuYWJsZShjcmVhdGVEZWJ1Zy5sb2FkKCkpO1xuXG5cdHJldHVybiBjcmVhdGVEZWJ1Zztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXR1cDtcbiIsIi8qKlxuICogRGV0ZWN0IEVsZWN0cm9uIHJlbmRlcmVyIC8gbndqcyBwcm9jZXNzLCB3aGljaCBpcyBub2RlLCBidXQgd2Ugc2hvdWxkXG4gKiB0cmVhdCBhcyBhIGJyb3dzZXIuXG4gKi9cblxuaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fCBwcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgcHJvY2Vzcy5icm93c2VyID09PSB0cnVlIHx8IHByb2Nlc3MuX19ud2pzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9icm93c2VyLmpzJyk7XG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbm9kZS5qcycpO1xufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbmNvbnN0IHR0eSA9IHJlcXVpcmUoJ3R0eScpO1xuY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBOb2RlLmpzIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5leHBvcnRzLmluaXQgPSBpbml0O1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuZGVzdHJveSA9IHV0aWwuZGVwcmVjYXRlKFxuXHQoKSA9PiB7fSxcblx0J0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nXG4pO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFs2LCAyLCAzLCA0LCA1LCAxXTtcblxudHJ5IHtcblx0Ly8gT3B0aW9uYWwgZGVwZW5kZW5jeSAoYXMgaW4sIGRvZXNuJ3QgbmVlZCB0byBiZSBpbnN0YWxsZWQsIE5PVCBsaWtlIG9wdGlvbmFsRGVwZW5kZW5jaWVzIGluIHBhY2thZ2UuanNvbilcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuXHRjb25zdCBzdXBwb3J0c0NvbG9yID0gcmVxdWlyZSgnc3VwcG9ydHMtY29sb3InKTtcblxuXHRpZiAoc3VwcG9ydHNDb2xvciAmJiAoc3VwcG9ydHNDb2xvci5zdGRlcnIgfHwgc3VwcG9ydHNDb2xvcikubGV2ZWwgPj0gMikge1xuXHRcdGV4cG9ydHMuY29sb3JzID0gW1xuXHRcdFx0MjAsXG5cdFx0XHQyMSxcblx0XHRcdDI2LFxuXHRcdFx0MjcsXG5cdFx0XHQzMixcblx0XHRcdDMzLFxuXHRcdFx0MzgsXG5cdFx0XHQzOSxcblx0XHRcdDQwLFxuXHRcdFx0NDEsXG5cdFx0XHQ0Mixcblx0XHRcdDQzLFxuXHRcdFx0NDQsXG5cdFx0XHQ0NSxcblx0XHRcdDU2LFxuXHRcdFx0NTcsXG5cdFx0XHQ2Mixcblx0XHRcdDYzLFxuXHRcdFx0NjgsXG5cdFx0XHQ2OSxcblx0XHRcdDc0LFxuXHRcdFx0NzUsXG5cdFx0XHQ3Nixcblx0XHRcdDc3LFxuXHRcdFx0NzgsXG5cdFx0XHQ3OSxcblx0XHRcdDgwLFxuXHRcdFx0ODEsXG5cdFx0XHQ5Mixcblx0XHRcdDkzLFxuXHRcdFx0OTgsXG5cdFx0XHQ5OSxcblx0XHRcdDExMixcblx0XHRcdDExMyxcblx0XHRcdDEyOCxcblx0XHRcdDEyOSxcblx0XHRcdDEzNCxcblx0XHRcdDEzNSxcblx0XHRcdDE0OCxcblx0XHRcdDE0OSxcblx0XHRcdDE2MCxcblx0XHRcdDE2MSxcblx0XHRcdDE2Mixcblx0XHRcdDE2Myxcblx0XHRcdDE2NCxcblx0XHRcdDE2NSxcblx0XHRcdDE2Nixcblx0XHRcdDE2Nyxcblx0XHRcdDE2OCxcblx0XHRcdDE2OSxcblx0XHRcdDE3MCxcblx0XHRcdDE3MSxcblx0XHRcdDE3Mixcblx0XHRcdDE3Myxcblx0XHRcdDE3OCxcblx0XHRcdDE3OSxcblx0XHRcdDE4NCxcblx0XHRcdDE4NSxcblx0XHRcdDE5Nixcblx0XHRcdDE5Nyxcblx0XHRcdDE5OCxcblx0XHRcdDE5OSxcblx0XHRcdDIwMCxcblx0XHRcdDIwMSxcblx0XHRcdDIwMixcblx0XHRcdDIwMyxcblx0XHRcdDIwNCxcblx0XHRcdDIwNSxcblx0XHRcdDIwNixcblx0XHRcdDIwNyxcblx0XHRcdDIwOCxcblx0XHRcdDIwOSxcblx0XHRcdDIxNCxcblx0XHRcdDIxNSxcblx0XHRcdDIyMCxcblx0XHRcdDIyMVxuXHRcdF07XG5cdH1cbn0gY2F0Y2ggKGVycm9yKSB7XG5cdC8vIFN3YWxsb3cgLSB3ZSBvbmx5IGNhcmUgaWYgYHN1cHBvcnRzLWNvbG9yYCBpcyBhdmFpbGFibGU7IGl0IGRvZXNuJ3QgaGF2ZSB0byBiZS5cbn1cblxuLyoqXG4gKiBCdWlsZCB1cCB0aGUgZGVmYXVsdCBgaW5zcGVjdE9wdHNgIG9iamVjdCBmcm9tIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG4gKlxuICogICAkIERFQlVHX0NPTE9SUz1ubyBERUJVR19ERVBUSD0xMCBERUJVR19TSE9XX0hJRERFTj1lbmFibGVkIG5vZGUgc2NyaXB0LmpzXG4gKi9cblxuZXhwb3J0cy5pbnNwZWN0T3B0cyA9IE9iamVjdC5rZXlzKHByb2Nlc3MuZW52KS5maWx0ZXIoa2V5ID0+IHtcblx0cmV0dXJuIC9eZGVidWdfL2kudGVzdChrZXkpO1xufSkucmVkdWNlKChvYmosIGtleSkgPT4ge1xuXHQvLyBDYW1lbC1jYXNlXG5cdGNvbnN0IHByb3AgPSBrZXlcblx0XHQuc3Vic3RyaW5nKDYpXG5cdFx0LnRvTG93ZXJDYXNlKClcblx0XHQucmVwbGFjZSgvXyhbYS16XSkvZywgKF8sIGspID0+IHtcblx0XHRcdHJldHVybiBrLnRvVXBwZXJDYXNlKCk7XG5cdFx0fSk7XG5cblx0Ly8gQ29lcmNlIHN0cmluZyB2YWx1ZSBpbnRvIEpTIHZhbHVlXG5cdGxldCB2YWwgPSBwcm9jZXNzLmVudltrZXldO1xuXHRpZiAoL14oeWVzfG9ufHRydWV8ZW5hYmxlZCkkL2kudGVzdCh2YWwpKSB7XG5cdFx0dmFsID0gdHJ1ZTtcblx0fSBlbHNlIGlmICgvXihub3xvZmZ8ZmFsc2V8ZGlzYWJsZWQpJC9pLnRlc3QodmFsKSkge1xuXHRcdHZhbCA9IGZhbHNlO1xuXHR9IGVsc2UgaWYgKHZhbCA9PT0gJ251bGwnKSB7XG5cdFx0dmFsID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHR2YWwgPSBOdW1iZXIodmFsKTtcblx0fVxuXG5cdG9ialtwcm9wXSA9IHZhbDtcblx0cmV0dXJuIG9iajtcbn0sIHt9KTtcblxuLyoqXG4gKiBJcyBzdGRvdXQgYSBUVFk/IENvbG9yZWQgb3V0cHV0IGlzIGVuYWJsZWQgd2hlbiBgdHJ1ZWAuXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHRyZXR1cm4gJ2NvbG9ycycgaW4gZXhwb3J0cy5pbnNwZWN0T3B0cyA/XG5cdFx0Qm9vbGVhbihleHBvcnRzLmluc3BlY3RPcHRzLmNvbG9ycykgOlxuXHRcdHR0eS5pc2F0dHkocHJvY2Vzcy5zdGRlcnIuZmQpO1xufVxuXG4vKipcbiAqIEFkZHMgQU5TSSBjb2xvciBlc2NhcGUgY29kZXMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuXHRjb25zdCB7bmFtZXNwYWNlOiBuYW1lLCB1c2VDb2xvcnN9ID0gdGhpcztcblxuXHRpZiAodXNlQ29sb3JzKSB7XG5cdFx0Y29uc3QgYyA9IHRoaXMuY29sb3I7XG5cdFx0Y29uc3QgY29sb3JDb2RlID0gJ1xcdTAwMUJbMycgKyAoYyA8IDggPyBjIDogJzg7NTsnICsgYyk7XG5cdFx0Y29uc3QgcHJlZml4ID0gYCAgJHtjb2xvckNvZGV9OzFtJHtuYW1lfSBcXHUwMDFCWzBtYDtcblxuXHRcdGFyZ3NbMF0gPSBwcmVmaXggKyBhcmdzWzBdLnNwbGl0KCdcXG4nKS5qb2luKCdcXG4nICsgcHJlZml4KTtcblx0XHRhcmdzLnB1c2goY29sb3JDb2RlICsgJ20rJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZikgKyAnXFx1MDAxQlswbScpO1xuXHR9IGVsc2Uge1xuXHRcdGFyZ3NbMF0gPSBnZXREYXRlKCkgKyBuYW1lICsgJyAnICsgYXJnc1swXTtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuXHRpZiAoZXhwb3J0cy5pbnNwZWN0T3B0cy5oaWRlRGF0ZSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHRyZXR1cm4gbmV3IERhdGUoKS50b0lTT1N0cmluZygpICsgJyAnO1xufVxuXG4vKipcbiAqIEludm9rZXMgYHV0aWwuZm9ybWF0KClgIHdpdGggdGhlIHNwZWNpZmllZCBhcmd1bWVudHMgYW5kIHdyaXRlcyB0byBzdGRlcnIuXG4gKi9cblxuZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcblx0cmV0dXJuIHByb2Nlc3Muc3RkZXJyLndyaXRlKHV0aWwuZm9ybWF0KC4uLmFyZ3MpICsgJ1xcbicpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG5cdGlmIChuYW1lc3BhY2VzKSB7XG5cdFx0cHJvY2Vzcy5lbnYuREVCVUcgPSBuYW1lc3BhY2VzO1xuXHR9IGVsc2Uge1xuXHRcdC8vIElmIHlvdSBzZXQgYSBwcm9jZXNzLmVudiBmaWVsZCB0byBudWxsIG9yIHVuZGVmaW5lZCwgaXQgZ2V0cyBjYXN0IHRvIHRoZVxuXHRcdC8vIHN0cmluZyAnbnVsbCcgb3IgJ3VuZGVmaW5lZCcuIEp1c3QgZGVsZXRlIGluc3RlYWQuXG5cdFx0ZGVsZXRlIHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcblx0cmV0dXJuIHByb2Nlc3MuZW52LkRFQlVHO1xufVxuXG4vKipcbiAqIEluaXQgbG9naWMgZm9yIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuICpcbiAqIENyZWF0ZSBhIG5ldyBgaW5zcGVjdE9wdHNgIG9iamVjdCBpbiBjYXNlIGB1c2VDb2xvcnNgIGlzIHNldFxuICogZGlmZmVyZW50bHkgZm9yIGEgcGFydGljdWxhciBgZGVidWdgIGluc3RhbmNlLlxuICovXG5cbmZ1bmN0aW9uIGluaXQoZGVidWcpIHtcblx0ZGVidWcuaW5zcGVjdE9wdHMgPSB7fTtcblxuXHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5pbnNwZWN0T3B0cyk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdGRlYnVnLmluc3BlY3RPcHRzW2tleXNbaV1dID0gZXhwb3J0cy5pbnNwZWN0T3B0c1trZXlzW2ldXTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlbyB0byBgdXRpbC5pbnNwZWN0KClgLCBhbGwgb24gYSBzaW5nbGUgbGluZS5cbiAqL1xuXG5mb3JtYXR0ZXJzLm8gPSBmdW5jdGlvbiAodikge1xuXHR0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXHRyZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpXG5cdFx0LnNwbGl0KCdcXG4nKVxuXHRcdC5tYXAoc3RyID0+IHN0ci50cmltKCkpXG5cdFx0LmpvaW4oJyAnKTtcbn07XG5cbi8qKlxuICogTWFwICVPIHRvIGB1dGlsLmluc3BlY3QoKWAsIGFsbG93aW5nIG11bHRpcGxlIGxpbmVzIGlmIG5lZWRlZC5cbiAqL1xuXG5mb3JtYXR0ZXJzLk8gPSBmdW5jdGlvbiAodikge1xuXHR0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXHRyZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpO1xufTtcbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgdyA9IGQgKiA3O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWwpKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigtPyg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8d2Vla3M/fHd8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoXG4gICAgc3RyXG4gICk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3lycyc6XG4gICAgY2FzZSAneXInOlxuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIG4gKiB5O1xuICAgIGNhc2UgJ3dlZWtzJzpcbiAgICBjYXNlICd3ZWVrJzpcbiAgICBjYXNlICd3JzpcbiAgICAgIHJldHVybiBuICogdztcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJztcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbSkgKyAnbSc7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICB9XG4gIHJldHVybiBtcyArICdtcyc7XG59XG5cbi8qKlxuICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRMb25nKG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgZCwgJ2RheScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGgsICdob3VyJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgbSwgJ21pbnV0ZScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIHMsICdzZWNvbmQnKTtcbiAgfVxuICByZXR1cm4gbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG1zQWJzLCBuLCBuYW1lKSB7XG4gIHZhciBpc1BsdXJhbCA9IG1zQWJzID49IG4gKiAxLjU7XG4gIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbikgKyAnICcgKyBuYW1lICsgKGlzUGx1cmFsID8gJ3MnIDogJycpO1xufVxuIiwiaW1wb3J0IGlvIGZyb20gXCIuL2J1aWxkL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBjb25zdCBNYW5hZ2VyID0gaW8uTWFuYWdlcjtcbmV4cG9ydCB7IGlvIH07XG5leHBvcnQgZGVmYXVsdCBpbztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhY2tvMlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVuZ2luZS5pby1jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpvaVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFyc2V1cmlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlZWRyYW5kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNpbXBsZXgtbm9pc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1wYXJzZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0YXRzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdXBwb3J0cy1jb2xvclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGhyZWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR0eVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==