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
  newPlane.CreateGroupAndPos(); //newPlane.attachCameraAndControl(Camera)

  let airport = await (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_9__.addGLBFile)("/Assets/Airport.glb", SceneToGet);
  SceneToGet.add(airport.scene);
  (0,_gameFundalmentals_TerrainManagement_terrainChunkriser__WEBPACK_IMPORTED_MODULE_6__.generateTerrainAroundPlayer)(seed, Camera, SceneToGet);
  (0,_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_0__.addToRenderSequence)("Main", () => (0,_gameFundalmentals_controls__WEBPACK_IMPORTED_MODULE_3__.controlHandlerUpdate)(Camera));
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
/* harmony import */ var _Core_API_gemotryManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Core-API/gemotryManager */ "./components/Core-API/gemotryManager.js");
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
    SceneToGet.add(sunmesh); // ---------- [Create Moon Mesh] ---------- \\

    let moon = new three__WEBPACK_IMPORTED_MODULE_0__.SphereBufferGeometry(10, 10, 100, 100);
    let moonMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
      emissive: "#ffffff"
    });
    let moonMesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(moon, moonMaterial);
    moonMesh.position.set(-1, -200, -300);
    SceneToGet.add(moonMesh); // ---------- [Create Box Gometry for handling rotation] ---------- \\

    var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1, 1, 1);
    var cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry);
    cube.visible = false;
    SceneToGet.add(cube); // ^ This is a very bad work around fix later
    // ---------- [All defintions for the moving part] ---------- \\

    this.cube = cube;
    this.moonMesh = moonMesh;
    this.sunmesh = sunmesh;
    this.t = 0;
    this.dTIme = 0; // ---------- [All defintions for lights to create shadows] ---------- \\

    this.directionalLight = (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_1__.createDirectionalLight)(SceneToGet, "#ddffee", 0.5, [1, 100, 100]);
    this.directionalLight2 = (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_1__.createDirectionalLight)(SceneToGet, "#ffffff", 0.2, [1, -100, -100]);
    this.light = (0,_Core_API_LightingManager__WEBPACK_IMPORTED_MODULE_1__.createAmbientLight)(SceneToGet, "#aaaaaa", 0.5); // ---------- [Create Stary night] ---------- \\

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
/* harmony export */   "generateTerrainChunk": function() { return /* binding */ generateTerrainChunk; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Algorithms/VectorUtils */ "./components/Algorithms/VectorUtils.js");
/* harmony import */ var _Core_API_PerlinNoise_PerlingNoise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core-API/PerlinNoise/PerlingNoise */ "./components/Core-API/PerlinNoise/PerlingNoise.js");
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
  const simplex = new SimplexNoise(seed);
  let geometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneBufferGeometry(500, 500, 30, 30);
  let colours = [];
  const fbm = new _Core_API_PerlinNoise_PerlingNoise__WEBPACK_IMPORTED_MODULE_2__.FBM({
    seed: seed,
    scale: 0.007,
    octaves: 6,
    persistance: 0.5,
    lacunarity: 2,
    redistribution: 2,
    height: 40
  });
  const positionAttribute = geometry.getAttribute("position"); //------------[Edit the Geomtry Accordingly]------------\\

  for (var i = 0, l = geometry.attributes.position.count; i < l; i++) {
    // Get Data position
    const vertex = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
    vertex.fromBufferAttribute(positionAttribute, i); // Check Height from Perlin Noise Generator

    let height = fbm.get2(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2((vertex.x + Position.x) * divisor, (vertex.y - Position.y) * divisor)) * gain * 4; // Set the height accordingly

    geometry.attributes.position.array[i * 3 + 2] = height; // Update Vertice colours accordinly

    if (height > 100) {
      colours.push(1, 1, 1);
    } else if (height > 50) {
      colours.push(0.56, 0.54, 0.48);
    } else if (height < 2) {
      let heightSecondary = simplex.noise2D((vertex.x + Position.x) / 10, (vertex.y + Position.y) / 10) * 0.75;
      geometry.attributes.position.array[i * 3 + 2] = heightSecondary;
      colours.push(0, (0,_Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_1__.randomIntFromInterval)(400, 500) / 1000, (0,_Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_1__.randomIntFromInterval)(700, 800) / 1000);
    } else {
      colours.push(0.56, 0.68, 0.166);
    }
  } //------------[Create Material]------------\\


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
  plane2.rotateX(Math.PI / 2 + Math.PI); //------------[Edit colour attribute]------------\\

  geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array(colours), 3)); //------------[Add to Base Scene]------------\\

  currentTerrain = plane2;
  plane2.name = `Terrain_Chunk_${Position.x}:${Position.y}`;
  return plane2;
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
        let chunk = (0,_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_2__.generateTerrainChunk)(seed, ChunkYourIn, 120, 0.1); //GenerateTrees(3000, scene, new Vector3(ChunkYourIn.x-250, 250,ChunkYourIn.y-250), new Vector3(ChunkYourIn.x+250,250,ChunkYourIn.y+250), chunk)

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







function placeTree(tree, intersects) {
  let newTree = tree.scene.clone();
  newTree.rotateY((0,_Algorithms_degToRad__WEBPACK_IMPORTED_MODULE_1__.radiants)(Math.random() * 360));
  let point = intersects[0].point;
  newTree.position.set(point.x, point.y, point.z);
  return {
    newTree,
    vetor: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(point.x, point.y, point.z)
  };
}

async function GenerateTrees(num, scene, start, bounds, terrain) {
  let tree = await (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_4__.addGLBFile)("/Assets/PineTree.glb", scene);
  let snowyTree = await (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_4__.addGLBFile)("/Assets/SnowyPineTree.glb", scene);
  let palmTree = await (0,_Core_API_3dModelHandlers_GLBLoader__WEBPACK_IMPORTED_MODULE_4__.addGLBFile)("/Assets/Palm_Tree.glb", scene);
  let leaves = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
    color: 0x694b37
  });
  let trunk = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
    color: 0x216734
  });
  tree.scene.children[0].material = leaves;
  tree.scene.children[1].material = trunk;
  snowyTree.scene.children[0].material = leaves;
  snowyTree.scene.children[1].material = trunk;
  snowyTree.scene.children[2].material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
    color: 0xffffff
  });
  console.log(palmTree);
  palmTree = palmTree.scene.children[0];
  console.log(palmTree);
  console.log(snowyTree);
  palmTree.children[0].material = trunk;
  let group = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
  let raycaster = new three__WEBPACK_IMPORTED_MODULE_0__.Raycaster();
  let meshes = [];
  let location = [];

  for (let i = 0; i < num; i++) {
    var _intersects$, _intersects$2, _intersects$3, _intersects$4, _intersects$5;

    let randomVector = (0,_Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_3__.randomVectorBetweenPoints2D)(start, bounds);
    randomVector.y = 50;
    raycaster.set(randomVector, new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, -1, 0));
    const intersects = raycaster.intersectObjects([terrain]);

    if (intersects[0] !== undefined && ((_intersects$ = intersects[0]) === null || _intersects$ === void 0 ? void 0 : _intersects$.point.y) > 2 && ((_intersects$2 = intersects[0]) === null || _intersects$2 === void 0 ? void 0 : _intersects$2.point.y) < 20) {
      let placeTreeOut = placeTree(tree, intersects);
      meshes.push(placeTreeOut.newTree);
      location.push(placeTreeOut.vetor);
      group.add(placeTreeOut.newTree);
    } else if (intersects[0] !== undefined && ((_intersects$3 = intersects[0]) === null || _intersects$3 === void 0 ? void 0 : _intersects$3.point.y) < 2 && ((_intersects$4 = intersects[0]) === null || _intersects$4 === void 0 ? void 0 : _intersects$4.point.y) > 0) {
      let placeTreeOut = placeTree(tree, intersects);
      meshes.push(placeTreeOut.newTree);
      location.push(placeTreeOut.vetor);
      group.add(placeTreeOut.newTree);
    } else if (intersects[0] !== undefined && ((_intersects$5 = intersects[0]) === null || _intersects$5 === void 0 ? void 0 : _intersects$5.point.y) > 20) {//meshes.push(placeTree(palmTree, intersects))
      //group.add(placeTreeOut.newTree)
    }
  } //let geo = _mergeMeshes(meshes, true)
  //scene.add(geo)


  let meshesToSend = [];
  let locationToSend = [];
  meshes.forEach((e, k) => {
    e.children.forEach(i => {
      meshesToSend.push(i.geometry);
      locationToSend.push(location[k]);
      group;
    });
  });
  let geo = (0,_Core_API_3dModelHandlers_MeshMerger_ts__WEBPACK_IMPORTED_MODULE_5__.MergeMeshes)(meshesToSend, locationToSend);
  scene.add(group);
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
    (0,_Core_API_ConnectAPI__WEBPACK_IMPORTED_MODULE_2__.listenToEvent)("NewPlayer", (id, data) => {//let cube = MakeNewCubePlayer(data.color, data.name)
      //MakeNewCubePlayer(data?.name, "Joined the game!")
      //players[id] = cube
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    children: "Hello"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
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
    stats.showPanel(1);
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

    var animate = function () {
      stats.begin();
      requestAnimationFrame(animate); // Update all moving parts

      (0,_components_Core_API_RenderingHandler__WEBPACK_IMPORTED_MODULE_6__.updateRenderCycle)(CurrentScene);
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
      lineNumber: 192,
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
        lineNumber: 207,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: sendChat,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          ref: ref => setChild2(ref)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 208,
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
          lineNumber: 217,
          columnNumber: 25
        }, this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }, this), (_ref = typeof recievedSeed === "undefined") !== null && _ref !== void 0 ? _ref : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "LOADING SEED!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 53
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: ref => setChild(ref)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: ref => setChild(ref)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 191,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9BbGdvcml0aG1zL01hdGhVdGlscy5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9BbGdvcml0aG1zL1ByaW9yaXR5UXVldWUuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvQWxnb3JpdGhtcy9WZWN0b3JNYXRocy50cyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9BbGdvcml0aG1zL1ZlY3RvclV0aWxzLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0FsZ29yaXRobXMvZGVnVG9SYWQuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvQWxnb3JpdGhtcy9tZXNoTWVyZ2VyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0NvbnRleHQvc29ja2V0aW9Db250ZXh0LmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9HTEJMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL01lc2hNZXJnZXIudHMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL2dsYkNvcmUuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL3V0aWxzLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0NvcmUtQVBJL0Nvbm5lY3RBUEkuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvQ29yZS1BUEkvTGlnaHRpbmdNYW5hZ2VyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0NvcmUtQVBJL1Blcmxpbk5vaXNlL1BlcmxpbmdOb2lzZS5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9Db3JlLUFQSS9SZW5kZXJpbmdIYW5kbGVyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0NvcmUtQVBJL1dvcmtlclNldHVwLnRzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0NvcmUtQVBJL2dlbW90cnlNYW5hZ2VyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL1NjZW5lcy9NYWluU2NlbmVIYW5kbGVyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL0RheU5pZ2h0Q3ljbGUuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvUHJvY2VkdWxlVGVycmFpbi5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC90ZXJyYWluQ2h1bmtyaXNlci5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC91dGlscy9HZW5lcmF0ZUJpb21lc01hcC50cyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9jbG91ZHMuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvbXVsdGlwbGF5ZXIvTWFpblBsYXllckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvbmFtZXRhZy5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9wbGFuZUhhbmRsZXIvTWFpblBsYW5lLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL3JvdGF0ZUFyb3VuZFBvaW50LmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL3N0YXJzLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL3N0YXRpY0Fzc2V0cy90cmVlQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9nYW1lVUkvZ2FtZUZlZWQuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL3BhZ2VzL3Rlc3QuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9tYW5hZ2VyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9vbi5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvc29ja2V0LmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC90eXBlZC1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL3VybC5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9ub2RlLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L3dyYXBwZXIubWpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvZXh0ZXJuYWwgXCJiYWNrbzJcIiIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxL2V4dGVybmFsIFwiY29tcG9uZW50LWVtaXR0ZXJcIiIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxL2V4dGVybmFsIFwiZW5naW5lLmlvLWNsaWVudFwiIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvZXh0ZXJuYWwgXCJqb2lcIiIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxL2V4dGVybmFsIFwicGFyc2V1cmlcIiIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS9leHRlcm5hbCBcInNlZWRyYW5kb21cIiIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxL2V4dGVybmFsIFwic2ltcGxleC1ub2lzZVwiIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvZXh0ZXJuYWwgXCJzb2NrZXQuaW8tcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS9leHRlcm5hbCBcInN0YXRzLmpzXCIiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS9leHRlcm5hbCBcInN1cHBvcnRzLWNvbG9yXCIiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS9leHRlcm5hbCBcInRocmVlXCIiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS9leHRlcm5hbCBcInR0eVwiIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvZXh0ZXJuYWwgXCJ1dGlsXCIiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6WyJyb3VuZG51bSIsIm51bSIsInRvTnVtIiwiTWF0aCIsInJvdW5kIiwid2FpdCIsInZhbCIsIlByb21pc2UiLCJyZXMiLCJyZWoiLCJzZXRUaW1lb3V0IiwidG9wIiwicGFyZW50IiwiaSIsImxlZnQiLCJyaWdodCIsIlByaW9yaXR5UXVldWUiLCJjb25zdHJ1Y3RvciIsImNvbXBhcmF0b3IiLCJhIiwiYiIsIl9oZWFwIiwiX2NvbXBhcmF0b3IiLCJzaXplIiwibGVuZ3RoIiwiaXNFbXB0eSIsInBlZWsiLCJwYXJzZUludCIsInB1c2giLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJfc2lmdFVwIiwicG9wIiwicG9wcGVkVmFsdWUiLCJib3R0b20iLCJfc3dhcCIsIl9zaWZ0RG93biIsInJlcGxhY2UiLCJyZXBsYWNlZFZhbHVlIiwiX2dyZWF0ZXIiLCJqIiwibm9kZSIsIm1heENoaWxkIiwiTXVsdGlwbHlWZWN0b3IyIiwidmVjdG9yIiwibXVsdGlwbGllciIsIlZlY3RvcjIiLCJ4IiwieSIsIk11bHRpcGx5VmVjdG9yMyIsIlZlY3RvcjMiLCJ6IiwicmFuZG9tSW50RnJvbUludGVydmFsIiwibWluIiwibWF4IiwibXlybmciLCJzZWVkcmFuZG9tIiwiZmxvb3IiLCJyYW5kb21WZWN0b3JCZXR3ZWVuUG9pbnRzMkQiLCJWZWN0b3IxIiwicmFkaWFudHMiLCJkZWdyZWVzIiwiUEkiLCJyYWRpYW5zIiwiX21lcmdlTWVzaGVzIiwibWVzaGVzIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCIsIm1hcCIsImUiLCJjaGlsZHJlbiIsImZsYXQiLCJpbnB1dEdlbyIsIkJ1ZmZlckdlb21ldHJ5VXRpbHMiLCJNZXNoIiwiTWVzaExhbWJlcnRNYXRlcmlhbCIsImNvbG9yIiwiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcHBXcmFwcGVyIiwic2hhcmVkU3RhdGUiLCJpbyIsInVzZUFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiYWRkR0xCRmlsZSIsIml0ZW0iLCJzY2VuZSIsInJlc29sdmUiLCJyZWplY3QiLCJsb2FkZXIiLCJHTFRGTG9hZGVyIiwibG9hZCIsImdsdGYiLCJhbmltYXRpb25zIiwic2NlbmVzIiwiY2FtZXJhcyIsImFzc2V0IiwieGhyIiwibG9hZGVkIiwidG90YWwiLCJlcnJvciIsIk1lcmdlTWVzaGVzIiwiaW5wdXQiLCJsb2NhdGlvbiIsImFwcGx5TWF0cml4NCIsIk1hdHJpeDQiLCJtYWtlVHJhbnNsYXRpb24iLCJidWZmZXJHZW9tIiwibWFuYWdlciIsIkxvYWRlciIsImRyYWNvTG9hZGVyIiwia3R4MkxvYWRlciIsIm1lc2hvcHREZWNvZGVyIiwicGx1Z2luQ2FsbGJhY2tzIiwicmVnaXN0ZXIiLCJwYXJzZXIiLCJHTFRGTWF0ZXJpYWxzQ2xlYXJjb2F0RXh0ZW5zaW9uIiwiR0xURlRleHR1cmVCYXNpc1VFeHRlbnNpb24iLCJHTFRGVGV4dHVyZVdlYlBFeHRlbnNpb24iLCJHTFRGTWF0ZXJpYWxzVHJhbnNtaXNzaW9uRXh0ZW5zaW9uIiwiR0xURkxpZ2h0c0V4dGVuc2lvbiIsIkdMVEZNZXNob3B0Q29tcHJlc3Npb24iLCJwcm90b3R5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJjcmVhdGUiLCJ1cmwiLCJvbkxvYWQiLCJvblByb2dyZXNzIiwib25FcnJvciIsInNjb3BlIiwicmVzb3VyY2VQYXRoIiwicGF0aCIsIkxvYWRlclV0aWxzIiwiaXRlbVN0YXJ0IiwiX29uRXJyb3IiLCJpdGVtRXJyb3IiLCJpdGVtRW5kIiwiRmlsZUxvYWRlciIsInNldFBhdGgiLCJzZXRSZXNwb25zZVR5cGUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVxdWVzdEhlYWRlciIsInNldFdpdGhDcmVkZW50aWFscyIsIndpdGhDcmVkZW50aWFscyIsImRhdGEiLCJwYXJzZSIsInNldERSQUNPTG9hZGVyIiwic2V0RERTTG9hZGVyIiwiRXJyb3IiLCJzZXRLVFgyTG9hZGVyIiwic2V0TWVzaG9wdERlY29kZXIiLCJjYWxsYmFjayIsImluZGV4T2YiLCJ1bnJlZ2lzdGVyIiwic3BsaWNlIiwiY29udGVudCIsImV4dGVuc2lvbnMiLCJwbHVnaW5zIiwibWFnaWMiLCJVaW50OEFycmF5IiwiQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTUFHSUMiLCJFWFRFTlNJT05TIiwiS0hSX0JJTkFSWV9HTFRGIiwiR0xURkJpbmFyeUV4dGVuc2lvbiIsImpzb24iLCJKU09OIiwidW5kZWZpbmVkIiwidmVyc2lvbiIsIkdMVEZQYXJzZXIiLCJjcm9zc09yaWdpbiIsImZpbGVMb2FkZXIiLCJwbHVnaW4iLCJuYW1lIiwiZXh0ZW5zaW9uc1VzZWQiLCJleHRlbnNpb25OYW1lIiwiZXh0ZW5zaW9uc1JlcXVpcmVkIiwiS0hSX01BVEVSSUFMU19VTkxJVCIsIkdMVEZNYXRlcmlhbHNVbmxpdEV4dGVuc2lvbiIsIktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1MiLCJHTFRGTWF0ZXJpYWxzUGJyU3BlY3VsYXJHbG9zc2luZXNzRXh0ZW5zaW9uIiwiS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT04iLCJHTFRGRHJhY29NZXNoQ29tcHJlc3Npb25FeHRlbnNpb24iLCJLSFJfVEVYVFVSRV9UUkFOU0ZPUk0iLCJHTFRGVGV4dHVyZVRyYW5zZm9ybUV4dGVuc2lvbiIsIktIUl9NRVNIX1FVQU5USVpBVElPTiIsIkdMVEZNZXNoUXVhbnRpemF0aW9uRXh0ZW5zaW9uIiwid2FybiIsInNldEV4dGVuc2lvbnMiLCJzZXRQbHVnaW5zIiwiR0xURlJlZ2lzdHJ5Iiwib2JqZWN0cyIsImdldCIsImtleSIsImFkZCIsIm9iamVjdCIsInJlbW92ZSIsInJlbW92ZUFsbCIsIktIUl9MSUdIVFNfUFVOQ1RVQUwiLCJLSFJfTUFURVJJQUxTX0NMRUFSQ09BVCIsIktIUl9NQVRFUklBTFNfVFJBTlNNSVNTSU9OIiwiS0hSX1RFWFRVUkVfQkFTSVNVIiwiRVhUX1RFWFRVUkVfV0VCUCIsIkVYVF9NRVNIT1BUX0NPTVBSRVNTSU9OIiwiY2FjaGUiLCJyZWZzIiwidXNlcyIsIl9tYXJrRGVmcyIsIm5vZGVEZWZzIiwibm9kZXMiLCJub2RlSW5kZXgiLCJub2RlTGVuZ3RoIiwibm9kZURlZiIsImxpZ2h0IiwiX2FkZE5vZGVSZWYiLCJfbG9hZExpZ2h0IiwibGlnaHRJbmRleCIsImNhY2hlS2V5IiwiZGVwZW5kZW5jeSIsImxpZ2h0RGVmcyIsImxpZ2h0cyIsImxpZ2h0RGVmIiwibGlnaHROb2RlIiwiQ29sb3IiLCJmcm9tQXJyYXkiLCJyYW5nZSIsInR5cGUiLCJEaXJlY3Rpb25hbExpZ2h0IiwidGFyZ2V0IiwicG9zaXRpb24iLCJzZXQiLCJQb2ludExpZ2h0IiwiZGlzdGFuY2UiLCJTcG90TGlnaHQiLCJzcG90IiwiaW5uZXJDb25lQW5nbGUiLCJvdXRlckNvbmVBbmdsZSIsImFuZ2xlIiwicGVudW1icmEiLCJkZWNheSIsImludGVuc2l0eSIsImNyZWF0ZVVuaXF1ZU5hbWUiLCJjcmVhdGVOb2RlQXR0YWNobWVudCIsInNlbGYiLCJ0aGVuIiwiX2dldE5vZGVSZWYiLCJnZXRNYXRlcmlhbFR5cGUiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImV4dGVuZFBhcmFtcyIsIm1hdGVyaWFsUGFyYW1zIiwibWF0ZXJpYWxEZWYiLCJwZW5kaW5nIiwib3BhY2l0eSIsIm1ldGFsbGljUm91Z2huZXNzIiwicGJyTWV0YWxsaWNSb3VnaG5lc3MiLCJBcnJheSIsImlzQXJyYXkiLCJiYXNlQ29sb3JGYWN0b3IiLCJhcnJheSIsImJhc2VDb2xvclRleHR1cmUiLCJhc3NpZ25UZXh0dXJlIiwiYWxsIiwibWF0ZXJpYWxJbmRleCIsIm1hdGVyaWFscyIsIk1lc2hQaHlzaWNhbE1hdGVyaWFsIiwiZXh0ZW5kTWF0ZXJpYWxQYXJhbXMiLCJleHRlbnNpb24iLCJjbGVhcmNvYXRGYWN0b3IiLCJjbGVhcmNvYXQiLCJjbGVhcmNvYXRUZXh0dXJlIiwiY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yIiwiY2xlYXJjb2F0Um91Z2huZXNzIiwiY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZSIsImNsZWFyY29hdE5vcm1hbFRleHR1cmUiLCJzY2FsZSIsImNsZWFyY29hdE5vcm1hbFNjYWxlIiwidHJhbnNtaXNzaW9uRmFjdG9yIiwidHJhbnNtaXNzaW9uIiwidHJhbnNtaXNzaW9uVGV4dHVyZSIsImxvYWRUZXh0dXJlIiwidGV4dHVyZUluZGV4IiwidGV4dHVyZURlZiIsInRleHR1cmVzIiwic291cmNlIiwiaW1hZ2VzIiwib3B0aW9ucyIsImxvYWRUZXh0dXJlSW1hZ2UiLCJpc1N1cHBvcnRlZCIsInRleHR1cmVMb2FkZXIiLCJ1cmkiLCJoYW5kbGVyIiwiZ2V0SGFuZGxlciIsImRldGVjdFN1cHBvcnQiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwib25sb2FkIiwib25lcnJvciIsImhlaWdodCIsImxvYWRCdWZmZXJWaWV3IiwiaW5kZXgiLCJidWZmZXJWaWV3IiwiYnVmZmVyVmlld3MiLCJleHRlbnNpb25EZWYiLCJidWZmZXIiLCJnZXREZXBlbmRlbmN5IiwiZGVjb2RlciIsInN1cHBvcnRlZCIsInJlYWR5IiwiYnl0ZU9mZnNldCIsImJ5dGVMZW5ndGgiLCJjb3VudCIsInN0cmlkZSIsImJ5dGVTdHJpZGUiLCJyZXN1bHQiLCJBcnJheUJ1ZmZlciIsImRlY29kZUdsdGZCdWZmZXIiLCJtb2RlIiwiZmlsdGVyIiwiQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIIiwiQklOQVJZX0VYVEVOU0lPTl9DSFVOS19UWVBFUyIsIkJJTiIsImJvZHkiLCJoZWFkZXJWaWV3IiwiRGF0YVZpZXciLCJoZWFkZXIiLCJzbGljZSIsImdldFVpbnQzMiIsImNodW5rQ29udGVudHNMZW5ndGgiLCJjaHVua1ZpZXciLCJjaHVua0luZGV4IiwiY2h1bmtMZW5ndGgiLCJjaHVua1R5cGUiLCJjb250ZW50QXJyYXkiLCJwcmVsb2FkIiwiZGVjb2RlUHJpbWl0aXZlIiwicHJpbWl0aXZlIiwiYnVmZmVyVmlld0luZGV4IiwiZ2x0ZkF0dHJpYnV0ZU1hcCIsImF0dHJpYnV0ZXMiLCJ0aHJlZUF0dHJpYnV0ZU1hcCIsImF0dHJpYnV0ZU5vcm1hbGl6ZWRNYXAiLCJhdHRyaWJ1dGVUeXBlTWFwIiwiYXR0cmlidXRlTmFtZSIsInRocmVlQXR0cmlidXRlTmFtZSIsIkFUVFJJQlVURVMiLCJ0b0xvd2VyQ2FzZSIsImFjY2Vzc29yRGVmIiwiYWNjZXNzb3JzIiwiY29tcG9uZW50VHlwZSIsIldFQkdMX0NPTVBPTkVOVF9UWVBFUyIsIm5vcm1hbGl6ZWQiLCJkZWNvZGVEcmFjb0ZpbGUiLCJnZW9tZXRyeSIsImF0dHJpYnV0ZSIsImV4dGVuZFRleHR1cmUiLCJ0ZXh0dXJlIiwidHJhbnNmb3JtIiwiY2xvbmUiLCJvZmZzZXQiLCJyb3RhdGlvbiIsInJlcGVhdCIsInRleENvb3JkIiwibmVlZHNVcGRhdGUiLCJHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbCIsInBhcmFtcyIsIk1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiaXNHTFRGU3BlY3VsYXJHbG9zc2luZXNzTWF0ZXJpYWwiLCJzcGVjdWxhck1hcFBhcnNGcmFnbWVudENodW5rIiwiam9pbiIsImdsb3NzaW5lc3NNYXBQYXJzRnJhZ21lbnRDaHVuayIsInNwZWN1bGFyTWFwRnJhZ21lbnRDaHVuayIsImdsb3NzaW5lc3NNYXBGcmFnbWVudENodW5rIiwibGlnaHRQaHlzaWNhbEZyYWdtZW50Q2h1bmsiLCJ1bmlmb3JtcyIsInNwZWN1bGFyIiwic2V0SGV4IiwiZ2xvc3NpbmVzcyIsInNwZWN1bGFyTWFwIiwiZ2xvc3NpbmVzc01hcCIsIl9leHRyYVVuaWZvcm1zIiwib25CZWZvcmVDb21waWxlIiwic2hhZGVyIiwidW5pZm9ybU5hbWUiLCJmcmFnbWVudFNoYWRlciIsImRlZmluZVByb3BlcnRpZXMiLCJ2IiwiZGVmaW5lcyIsIlVTRV9TUEVDVUxBUk1BUCIsIlVTRV9HTE9TU0lORVNTTUFQIiwiVVNFX1VWIiwibWV0YWxuZXNzIiwicm91Z2huZXNzIiwibWV0YWxuZXNzTWFwIiwicm91Z2huZXNzTWFwIiwic2V0VmFsdWVzIiwiY29weSIsInNwZWN1bGFyR2xvc3NpbmVzc1BhcmFtcyIsInBiclNwZWN1bGFyR2xvc3NpbmVzcyIsImRpZmZ1c2VGYWN0b3IiLCJkaWZmdXNlVGV4dHVyZSIsImVtaXNzaXZlIiwiZ2xvc3NpbmVzc0ZhY3RvciIsInNwZWN1bGFyRmFjdG9yIiwic3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSIsInNwZWNHbG9zc01hcERlZiIsImNyZWF0ZU1hdGVyaWFsIiwibWF0ZXJpYWwiLCJmb2ciLCJsaWdodE1hcCIsImxpZ2h0TWFwSW50ZW5zaXR5IiwiYW9NYXAiLCJhb01hcEludGVuc2l0eSIsImVtaXNzaXZlSW50ZW5zaXR5IiwiZW1pc3NpdmVNYXAiLCJidW1wTWFwIiwiYnVtcFNjYWxlIiwibm9ybWFsTWFwIiwibm9ybWFsTWFwVHlwZSIsIlRhbmdlbnRTcGFjZU5vcm1hbE1hcCIsIm5vcm1hbFNjYWxlIiwiZGlzcGxhY2VtZW50TWFwIiwiZGlzcGxhY2VtZW50U2NhbGUiLCJkaXNwbGFjZW1lbnRCaWFzIiwiYWxwaGFNYXAiLCJlbnZNYXAiLCJlbnZNYXBJbnRlbnNpdHkiLCJyZWZyYWN0aW9uUmF0aW8iLCJHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudCIsInBhcmFtZXRlclBvc2l0aW9ucyIsInNhbXBsZVZhbHVlcyIsInNhbXBsZVNpemUiLCJyZXN1bHRCdWZmZXIiLCJJbnRlcnBvbGFudCIsImNvcHlTYW1wbGVWYWx1ZV8iLCJ2YWx1ZVNpemUiLCJiZWZvcmVTdGFydF8iLCJhZnRlckVuZF8iLCJpbnRlcnBvbGF0ZV8iLCJpMSIsInQwIiwidCIsInQxIiwic3RyaWRlMiIsInN0cmlkZTMiLCJ0ZCIsInAiLCJwcCIsInBwcCIsIm9mZnNldDEiLCJvZmZzZXQwIiwiczIiLCJzMyIsInMwIiwiczEiLCJwMCIsIm0wIiwicDEiLCJtMSIsIldFQkdMX0NPTlNUQU5UUyIsIkZMT0FUIiwiRkxPQVRfTUFUMyIsIkZMT0FUX01BVDQiLCJGTE9BVF9WRUMyIiwiRkxPQVRfVkVDMyIsIkZMT0FUX1ZFQzQiLCJMSU5FQVIiLCJSRVBFQVQiLCJTQU1QTEVSXzJEIiwiUE9JTlRTIiwiTElORVMiLCJMSU5FX0xPT1AiLCJMSU5FX1NUUklQIiwiVFJJQU5HTEVTIiwiVFJJQU5HTEVfU1RSSVAiLCJUUklBTkdMRV9GQU4iLCJVTlNJR05FRF9CWVRFIiwiVU5TSUdORURfU0hPUlQiLCJJbnQ4QXJyYXkiLCJJbnQxNkFycmF5IiwiVWludDE2QXJyYXkiLCJVaW50MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsIldFQkdMX0ZJTFRFUlMiLCJOZWFyZXN0RmlsdGVyIiwiTGluZWFyRmlsdGVyIiwiTmVhcmVzdE1pcG1hcE5lYXJlc3RGaWx0ZXIiLCJMaW5lYXJNaXBtYXBOZWFyZXN0RmlsdGVyIiwiTmVhcmVzdE1pcG1hcExpbmVhckZpbHRlciIsIkxpbmVhck1pcG1hcExpbmVhckZpbHRlciIsIldFQkdMX1dSQVBQSU5HUyIsIkNsYW1wVG9FZGdlV3JhcHBpbmciLCJNaXJyb3JlZFJlcGVhdFdyYXBwaW5nIiwiUmVwZWF0V3JhcHBpbmciLCJXRUJHTF9UWVBFX1NJWkVTIiwiUE9TSVRJT04iLCJOT1JNQUwiLCJUQU5HRU5UIiwiVEVYQ09PUkRfMCIsIlRFWENPT1JEXzEiLCJDT0xPUl8wIiwiV0VJR0hUU18wIiwiSk9JTlRTXzAiLCJQQVRIX1BST1BFUlRJRVMiLCJ0cmFuc2xhdGlvbiIsIndlaWdodHMiLCJJTlRFUlBPTEFUSU9OIiwiQ1VCSUNTUExJTkUiLCJJbnRlcnBvbGF0ZUxpbmVhciIsIlNURVAiLCJJbnRlcnBvbGF0ZURpc2NyZXRlIiwiQUxQSEFfTU9ERVMiLCJPUEFRVUUiLCJNQVNLIiwiQkxFTkQiLCJyZXNvbHZlVVJMIiwidGVzdCIsImNyZWF0ZURlZmF1bHRNYXRlcmlhbCIsInRyYW5zcGFyZW50IiwiZGVwdGhUZXN0Iiwic2lkZSIsIkZyb250U2lkZSIsImFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSIsImtub3duRXh0ZW5zaW9ucyIsIm9iamVjdERlZiIsInVzZXJEYXRhIiwiZ2x0ZkV4dGVuc2lvbnMiLCJhc3NpZ25FeHRyYXNUb1VzZXJEYXRhIiwiZ2x0ZkRlZiIsImV4dHJhcyIsImFkZE1vcnBoVGFyZ2V0cyIsInRhcmdldHMiLCJoYXNNb3JwaFBvc2l0aW9uIiwiaGFzTW9ycGhOb3JtYWwiLCJpbCIsInBlbmRpbmdQb3NpdGlvbkFjY2Vzc29ycyIsInBlbmRpbmdOb3JtYWxBY2Nlc3NvcnMiLCJwZW5kaW5nQWNjZXNzb3IiLCJub3JtYWwiLCJtb3JwaFBvc2l0aW9ucyIsIm1vcnBoTm9ybWFscyIsIm1vcnBoQXR0cmlidXRlcyIsIm1vcnBoVGFyZ2V0c1JlbGF0aXZlIiwidXBkYXRlTW9ycGhUYXJnZXRzIiwibWVzaCIsIm1lc2hEZWYiLCJtb3JwaFRhcmdldEluZmx1ZW5jZXMiLCJ0YXJnZXROYW1lcyIsIm1vcnBoVGFyZ2V0RGljdGlvbmFyeSIsImNyZWF0ZVByaW1pdGl2ZUtleSIsInByaW1pdGl2ZURlZiIsImRyYWNvRXh0ZW5zaW9uIiwiZ2VvbWV0cnlLZXkiLCJpbmRpY2VzIiwiY3JlYXRlQXR0cmlidXRlc0tleSIsImF0dHJpYnV0ZXNLZXkiLCJrZXlzIiwic29ydCIsImFzc29jaWF0aW9ucyIsIk1hcCIsInByaW1pdGl2ZUNhY2hlIiwibWVzaENhY2hlIiwiY2FtZXJhQ2FjaGUiLCJsaWdodENhY2hlIiwibm9kZU5hbWVzVXNlZCIsImNyZWF0ZUltYWdlQml0bWFwIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSW1hZ2VCaXRtYXBMb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwic2V0Q3Jvc3NPcmlnaW4iLCJfaW52b2tlQWxsIiwiZXh0IiwiYmVmb3JlUm9vdCIsImdldERlcGVuZGVuY2llcyIsImRlcGVuZGVuY2llcyIsImFmdGVyUm9vdCIsImNhdGNoIiwic2tpbkRlZnMiLCJza2lucyIsIm1lc2hEZWZzIiwic2tpbkluZGV4Iiwic2tpbkxlbmd0aCIsImpvaW50cyIsImlzQm9uZSIsInNraW4iLCJpc1NraW5uZWRNZXNoIiwiY2FtZXJhIiwicmVmIiwiX2ludm9rZU9uZSIsImZ1bmMiLCJ1bnNoaWZ0IiwibG9hZFNjZW5lIiwibG9hZE5vZGUiLCJsb2FkTWVzaCIsImxvYWRBY2Nlc3NvciIsImxvYWRCdWZmZXIiLCJsb2FkTWF0ZXJpYWwiLCJsb2FkU2tpbiIsImxvYWRBbmltYXRpb24iLCJsb2FkQ2FtZXJhIiwiZGVmcyIsImRlZiIsImJ1ZmZlckluZGV4IiwiYnVmZmVyRGVmIiwiYnVmZmVycyIsImJ1ZmZlclZpZXdEZWYiLCJhY2Nlc3NvckluZGV4Iiwic3BhcnNlIiwicGVuZGluZ0J1ZmZlclZpZXdzIiwiaXRlbVNpemUiLCJUeXBlZEFycmF5IiwiZWxlbWVudEJ5dGVzIiwiQllURVNfUEVSX0VMRU1FTlQiLCJpdGVtQnl0ZXMiLCJidWZmZXJBdHRyaWJ1dGUiLCJpYlNsaWNlIiwiaWJDYWNoZUtleSIsImliIiwiSW50ZXJsZWF2ZWRCdWZmZXIiLCJJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSIsIkJ1ZmZlckF0dHJpYnV0ZSIsIml0ZW1TaXplSW5kaWNlcyIsIlNDQUxBUiIsIlR5cGVkQXJyYXlJbmRpY2VzIiwiYnl0ZU9mZnNldEluZGljZXMiLCJieXRlT2Zmc2V0VmFsdWVzIiwic3BhcnNlSW5kaWNlcyIsInNwYXJzZVZhbHVlcyIsInNldFgiLCJzZXRZIiwic2V0WiIsInNldFciLCJVUkwiLCJ3ZWJraXRVUkwiLCJzb3VyY2VVUkkiLCJpc09iamVjdFVSTCIsImhhc0FscGhhIiwibWltZVR5cGUiLCJjb2xvclR5cGUiLCJnZXRVaW50OCIsImJsb2IiLCJCbG9iIiwiY3JlYXRlT2JqZWN0VVJMIiwiaXNJbWFnZUJpdG1hcExvYWRlciIsImltYWdlQml0bWFwIiwiQ2FudmFzVGV4dHVyZSIsInJldm9rZU9iamVjdFVSTCIsImZsaXBZIiwiZm9ybWF0IiwiUkdCRm9ybWF0Iiwic2FtcGxlcnMiLCJzYW1wbGVyIiwibWFnRmlsdGVyIiwibWluRmlsdGVyIiwid3JhcFMiLCJ3cmFwVCIsIm1hcE5hbWUiLCJtYXBEZWYiLCJnbHRmUmVmZXJlbmNlIiwiYXNzaWduRmluYWxNYXRlcmlhbCIsInVzZVZlcnRleFRhbmdlbnRzIiwidGFuZ2VudCIsInVzZVZlcnRleENvbG9ycyIsInVzZUZsYXRTaGFkaW5nIiwidXNlU2tpbm5pbmciLCJ1c2VNb3JwaFRhcmdldHMiLCJ1c2VNb3JwaE5vcm1hbHMiLCJpc1BvaW50cyIsInV1aWQiLCJwb2ludHNNYXRlcmlhbCIsIlBvaW50c01hdGVyaWFsIiwiTWF0ZXJpYWwiLCJzaXplQXR0ZW51YXRpb24iLCJpc0xpbmUiLCJsaW5lTWF0ZXJpYWwiLCJMaW5lQmFzaWNNYXRlcmlhbCIsImNhY2hlZE1hdGVyaWFsIiwic2tpbm5pbmciLCJ2ZXJ0ZXhDb2xvcnMiLCJmbGF0U2hhZGluZyIsIm1vcnBoVGFyZ2V0cyIsInZlcnRleFRhbmdlbnRzIiwidXYyIiwidXYiLCJzZXRBdHRyaWJ1dGUiLCJtYXRlcmlhbFR5cGUiLCJtYXRlcmlhbEV4dGVuc2lvbnMiLCJzZ0V4dGVuc2lvbiIsImttdUV4dGVuc2lvbiIsIm1ldGFsbGljRmFjdG9yIiwicm91Z2huZXNzRmFjdG9yIiwibWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlIiwiZG91YmxlU2lkZWQiLCJEb3VibGVTaWRlIiwiYWxwaGFNb2RlIiwiZGVwdGhXcml0ZSIsImFscGhhVGVzdCIsImFscGhhQ3V0b2ZmIiwibm9ybWFsVGV4dHVyZSIsIm9jY2x1c2lvblRleHR1cmUiLCJzdHJlbmd0aCIsImVtaXNzaXZlRmFjdG9yIiwiZW1pc3NpdmVUZXh0dXJlIiwiZW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJvcmlnaW5hbE5hbWUiLCJzYW5pdGl6ZWROYW1lIiwiUHJvcGVydHlCaW5kaW5nIiwiY29tcHV0ZUJvdW5kcyIsImJveCIsIkJveDMiLCJhY2Nlc3NvciIsIm1heERpc3BsYWNlbWVudCIsImFicyIsImV4cGFuZEJ5VmVjdG9yIiwiYm91bmRpbmdCb3giLCJzcGhlcmUiLCJTcGhlcmUiLCJnZXRDZW50ZXIiLCJjZW50ZXIiLCJyYWRpdXMiLCJkaXN0YW5jZVRvIiwiYm91bmRpbmdTcGhlcmUiLCJhZGRQcmltaXRpdmVBdHRyaWJ1dGVzIiwiYXNzaWduQXR0cmlidXRlQWNjZXNzb3IiLCJnbHRmQXR0cmlidXRlTmFtZSIsInNldEluZGV4IiwidG9UcmlhbmdsZXNEcmF3TW9kZSIsImRyYXdNb2RlIiwiZ2V0SW5kZXgiLCJnZXRBdHRyaWJ1dGUiLCJudW1iZXJPZlRyaWFuZ2xlcyIsIm5ld0luZGljZXMiLCJUcmlhbmdsZUZhbkRyYXdNb2RlIiwiZ2V0WCIsIm5ld0dlb21ldHJ5IiwibG9hZEdlb21ldHJpZXMiLCJwcmltaXRpdmVzIiwiY3JlYXRlRHJhY29QcmltaXRpdmUiLCJjYWNoZWQiLCJwcm9taXNlIiwiZ2VvbWV0cnlQcm9taXNlIiwiQnVmZmVyR2VvbWV0cnkiLCJtZXNoSW5kZXgiLCJyZXN1bHRzIiwiZ2VvbWV0cmllcyIsIlNraW5uZWRNZXNoIiwic2tpbldlaWdodCIsIm5vcm1hbGl6ZVNraW5XZWlnaHRzIiwiVHJpYW5nbGVTdHJpcERyYXdNb2RlIiwiTGluZVNlZ21lbnRzIiwiTGluZSIsIkxpbmVMb29wIiwiUG9pbnRzIiwiZ3JvdXAiLCJHcm91cCIsImNhbWVyYUluZGV4IiwiY2FtZXJhRGVmIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJNYXRoVXRpbHMiLCJ5Zm92IiwiYXNwZWN0UmF0aW8iLCJ6bmVhciIsInpmYXIiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJ4bWFnIiwieW1hZyIsInNraW5EZWYiLCJza2luRW50cnkiLCJpbnZlcnNlQmluZE1hdHJpY2VzIiwiYW5pbWF0aW9uSW5kZXgiLCJhbmltYXRpb25EZWYiLCJwZW5kaW5nTm9kZXMiLCJwZW5kaW5nSW5wdXRBY2Nlc3NvcnMiLCJwZW5kaW5nT3V0cHV0QWNjZXNzb3JzIiwicGVuZGluZ1NhbXBsZXJzIiwicGVuZGluZ1RhcmdldHMiLCJjaGFubmVscyIsImNoYW5uZWwiLCJpZCIsInBhcmFtZXRlcnMiLCJvdXRwdXQiLCJpbnB1dEFjY2Vzc29ycyIsIm91dHB1dEFjY2Vzc29ycyIsInRyYWNrcyIsImlucHV0QWNjZXNzb3IiLCJvdXRwdXRBY2Nlc3NvciIsInVwZGF0ZU1hdHJpeCIsIm1hdHJpeEF1dG9VcGRhdGUiLCJUeXBlZEtleWZyYW1lVHJhY2siLCJOdW1iZXJLZXlmcmFtZVRyYWNrIiwiUXVhdGVybmlvbktleWZyYW1lVHJhY2siLCJWZWN0b3JLZXlmcmFtZVRyYWNrIiwidGFyZ2V0TmFtZSIsImludGVycG9sYXRpb24iLCJ0cmF2ZXJzZSIsImlzTWVzaCIsIm91dHB1dEFycmF5Iiwic2NhbGVkIiwiamwiLCJ0cmFjayIsImNyZWF0ZUludGVycG9sYW50IiwiSW50ZXJwb2xhbnRGYWN0b3J5TWV0aG9kR0xURkN1YmljU3BsaW5lIiwidGltZXMiLCJnZXRWYWx1ZVNpemUiLCJpc0ludGVycG9sYW50RmFjdG9yeU1ldGhvZEdMVEZDdWJpY1NwbGluZSIsIkFuaW1hdGlvbkNsaXAiLCJub2RlTmFtZSIsIm8iLCJCb25lIiwiT2JqZWN0M0QiLCJtYXRyaXgiLCJxdWF0ZXJuaW9uIiwiYnVpbGROb2RlSGllcmFjaHkiLCJub2RlSWQiLCJwYXJlbnRPYmplY3QiLCJwZW5kaW5nSm9pbnRzIiwiam9pbnROb2RlcyIsImJvbmVzIiwiYm9uZUludmVyc2VzIiwiam9pbnROb2RlIiwibWF0IiwiYmluZCIsIlNrZWxldG9uIiwibWF0cml4V29ybGQiLCJjaGlsZCIsInNjZW5lSW5kZXgiLCJzY2VuZURlZiIsIm5vZGVJZHMiLCJjb21wdXRlVGFuZ2VudHMiLCJtZXJnZUJ1ZmZlckdlb21ldHJpZXMiLCJ1c2VHcm91cHMiLCJpc0luZGV4ZWQiLCJhdHRyaWJ1dGVzVXNlZCIsIlNldCIsIm1vcnBoQXR0cmlidXRlc1VzZWQiLCJtZXJnZWRHZW9tZXRyeSIsImF0dHJpYnV0ZXNDb3VudCIsImhhcyIsIm1lcmdlZFVzZXJEYXRhIiwiYWRkR3JvdXAiLCJpbmRleE9mZnNldCIsIm1lcmdlZEluZGV4IiwibWVyZ2VkQXR0cmlidXRlIiwibWVyZ2VCdWZmZXJBdHRyaWJ1dGVzIiwibnVtTW9ycGhUYXJnZXRzIiwibW9ycGhBdHRyaWJ1dGVzVG9NZXJnZSIsIm1lcmdlZE1vcnBoQXR0cmlidXRlIiwiYXJyYXlMZW5ndGgiLCJpc0ludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlIiwiaW50ZXJsZWF2ZUF0dHJpYnV0ZXMiLCJsIiwiaW50ZXJsZWF2ZWRCdWZmZXIiLCJnZXR0ZXJzIiwic2V0dGVycyIsImliYSIsImMiLCJrIiwiZXN0aW1hdGVCeXRlc1VzZWQiLCJtZW0iLCJhdHRyIiwibWVyZ2VWZXJ0aWNlcyIsInRvbGVyYW5jZSIsIk51bWJlciIsIkVQU0lMT04iLCJoYXNoVG9JbmRleCIsInBvc2l0aW9ucyIsInZlcnRleENvdW50IiwibmV4dEluZGV4IiwiYXR0cmlidXRlTmFtZXMiLCJhdHRyQXJyYXlzIiwibW9ycGhBdHRyc0FycmF5cyIsIm1vcnBoQXR0ciIsImZpbGwiLCJkZWNpbWFsU2hpZnQiLCJsb2cxMCIsInNoaWZ0TXVsdGlwbGllciIsInBvdyIsImhhc2giLCJuZXdhcnJheSIsIm5ld01vcnBoQXJyYXlzIiwiZ2V0dGVyRnVuYyIsIm0iLCJtbCIsIm9sZEF0dHJpYnV0ZSIsIm9sZE1vcnBoQXR0cmlidXRlIiwibW9ycGhBdHRyaWJ1dGUiLCJUcmlhbmdsZXNEcmF3TW9kZSIsImNsZWFyR3JvdXBzIiwiY29tcHV0ZU1vcnBoZWRBdHRyaWJ1dGVzIiwiaXNCdWZmZXJHZW9tZXRyeSIsIl92QSIsIl92QiIsIl92QyIsIl90ZW1wQSIsIl90ZW1wQiIsIl90ZW1wQyIsIl9tb3JwaEEiLCJfbW9ycGhCIiwiX21vcnBoQyIsIl9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YSIsIm1vZGlmaWVkQXR0cmlidXRlQXJyYXkiLCJmcm9tQnVmZmVyQXR0cmlidXRlIiwibW9ycGhJbmZsdWVuY2VzIiwiaW5mbHVlbmNlIiwibW9ycGgiLCJhZGRTY2FsZWRWZWN0b3IiLCJzdWIiLCJib25lVHJhbnNmb3JtIiwicG9zaXRpb25BdHRyaWJ1dGUiLCJtb3JwaFBvc2l0aW9uIiwibm9ybWFsQXR0cmlidXRlIiwibW9ycGhOb3JtYWwiLCJncm91cHMiLCJkcmF3UmFuZ2UiLCJncm91cE1hdGVyaWFsIiwic3RhcnQiLCJlbmQiLCJtb2RpZmllZFBvc2l0aW9uIiwibW9kaWZpZWROb3JtYWwiLCJtb3JwaGVkUG9zaXRpb25BdHRyaWJ1dGUiLCJGbG9hdDMyQnVmZmVyQXR0cmlidXRlIiwibW9ycGhlZE5vcm1hbEF0dHJpYnV0ZSIsImNsaWVudCIsIlF1ZXVlIiwicHJvcml0eSIsInN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uIiwic29ja2V0IiwiZW1pdCIsIkRhdGUiLCJub3ciLCJzZW5kRGF0YVdpdGhQcm9taXNlIiwiZXZlbnQiLCJEYXRhUHJvbWlzZSIsInJlc29sdmVkIiwib24iLCJhcmd1bWVudHMiLCJlcnIiLCJsaXN0ZW5Ub0V2ZW50IiwiYXR0YWNoVG9NYWluRXZlbnRTdHJlYW0iLCJvbkFueSIsImV2ZW50TmFtZSIsImFyZ3MiLCJsaXN0ZW5Gb3JFdmVudFdpdGhTY2hlbWFWYWxpZGF0aW9uIiwic2NlbWEiLCJ2YWxpZGF0ZSIsImFkZERhdGFUb1F1ZXVlIiwic2V0SW50ZXJ2YWwiLCJjYWxsQmFjayIsImNyZWF0ZURpcmVjdGlvbmFsTGlnaHQiLCJTY2VuZSIsImJyaWdodG5lc3MiLCJwb3MiLCJkaXJlY3Rpb25hbExpZ2h0IiwiY2FzdFNoYWRvdyIsImNyZWF0ZUFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImNyZWF0ZVBvaW50TGlnaHQiLCJQb2ludExpZ2h0TmV3IiwiZGVmaW5pdGlvbnNfcGVybGluIiwiUGVybGluIiwic2VlZCIsIl9ncmFkaWVudFZlY3MiLCJUSFJFRSIsInBlcm0iLCJncmFkUCIsIl9zZWVkIiwiX29mZnNldE1hdHJpeCIsInNoYWRlckNodW5rIiwibWFpbiIsInRocmVlX25vaXNlX3NlZWQiLCJfZmFkZSIsIl9sZXJwIiwiX2dyYWRpZW50IiwicG9zSW5DZWxsIiwiaW5fbWluIiwiaW5fbWF4Iiwib3V0X21pbiIsIm91dF9tYXgiLCJnZXQyIiwiY2VsbCIsImdyYWRpYW50RG90IiwicyIsImdyYWQzIiwiYWRkVmVjdG9ycyIsImdyYWQyIiwiZGlzdDIiLCJzdWJWZWN0b3JzIiwiZG90IiwidSIsImdldDMiLCJ3IiwiRkJNIiwicGVyc2lzdGFuY2UiLCJsYWN1bmFyaXR5Iiwib2N0YXZlcyIsInJlZGlzdHJpYnV0aW9uIiwiX25vaXNlIiwiX3NjYWxlIiwiX3BlcnNpc3RhbmNlIiwiX2xhY3VuYXJpdHkiLCJfb2N0YXZlcyIsIl9yZWRpc3RyaWJ1dGlvbiIsImFtcGxpdHVkZSIsImZyZXF1ZW5jeSIsIm5vaXNlRnVuY3Rpb24iLCJub2lzZVZhbCIsInJlZGlzdHJpYnV0ZWQiLCJyZW5kZXJpbmdMaXN0IiwiY2hlY2tUeXBlIiwiYWRkVG9SZW5kZXJTZXF1ZW5jZSIsIm5ld1R5cGUiLCJyZW5kZXJpbmdJbmZvIiwidXBkYXRlUmVuZGVyQ3ljbGUiLCJHZW5lcmF0ZVdlYldvcmtlciIsIndvcmtlciIsImdsb2JhbFZhcnMiLCJyZXR1cm5GdW5jIiwiY29kZSIsInRvU3RyaW5nIiwiaW5wdXRTdHVmZiIsIndvcmtlck91dCIsIldvcmtlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJUZXJtaW50ZVdvcmtlckV4dGVybmFsbHkiLCJ0ZXJtaW5hdGUiLCJHYW1lQ29yZVNoYWRvd3MiLCJjcmVhdGVHZW8iLCJyb3QiLCJzaGFkb3ciLCJnZW8iLCJ0aHJlZSIsInJlY2VpdmVTaGFkb3ciLCJkZWJ1Z0N1YmUiLCJCb3hHZW9tZXRyeSIsImN1YmUiLCJkZWJ1ZyIsImdlbmVyYXRlTWFpblNjZW5lIiwiU2NlbmVUb0dldCIsIlJlbmRlcnMiLCJkb2N1bWVudCIsImNoaWxkMiIsIkNhbWVyYSIsImNvbGxpc2lvbkhhbmRsZXIiLCJvbm1lc3NhZ2UiLCJvbm1lc3NhZ2VlcnJvciIsInBvc3RNZXNzYWdlIiwiQ29tbWFuZCIsIm9yaWdpbiIsIlBsYW5lQnVmZmVyR2VvbWV0cnkiLCJjbG91ZHMiLCJHZW5lcmF0ZUNsb3VkcyIsInJhbmRvbSIsImRheW5pZ2h0IiwiQ3JlYXRlRGF5TmlnaHRDeWNsZSIsImNvbnRyb2xIYW5kbGVySW5pdCIsInBsYW5lR2VvbWV0cnkiLCJQbGFuZUdlb21ldHJ5Iiwicm90YXRlWCIsInBsYW5lTWF0ZXJpYWwiLCJwbGFuZSIsImdyaWRIZWxwZXIiLCJHcmlkSGVscGVyIiwidXBkYXRlIiwibmV3UGxhbmUiLCJNYWtlUGxhbmUiLCJsb2FkRmlsZXMiLCJDcmVhdGVHcm91cEFuZFBvcyIsImFpcnBvcnQiLCJnZW5lcmF0ZVRlcnJhaW5Bcm91bmRQbGF5ZXIiLCJjb250cm9sSGFuZGxlclVwZGF0ZSIsInJlY2lldmVEYXl0aW1lVXBkYXRlIiwiZGF5IiwiYWRkdG9EYXlUaW1lQ2hlY2tlciIsImFyZyIsIlVVSUQiLCJ2NCIsInJlbW92ZUZyb21EYXlUaW1lSG9vayIsImdldERheVN0YXRlIiwiYW5ub3VuY2VkRGF5IiwiYW5ub3VuY2VkTmlnaHQiLCJzdW4iLCJTcGhlcmVCdWZmZXJHZW9tZXRyeSIsInN1bk1hdGVyaWFsIiwic3VubWVzaCIsIm1vb24iLCJtb29uTWF0ZXJpYWwiLCJtb29uTWVzaCIsInZpc2libGUiLCJkVEltZSIsImRpcmVjdGlvbmFsTGlnaHQyIiwic2t5Qm94Iiwic2t5Qm94TWF0ZXJpYWwiLCJnZXRSYW5kb21TdGFyRmllbGQiLCJCYWNrU2lkZSIsInNreSIsInRoZXRhIiwicm90YXRlQWJvdXRQb2ludCIsInNldENsZWFyQ29sb3IiLCJsZXJwQ29sb3JzIiwicm90YXRlT25BeGlzIiwiU2ltcGxleE5vaXNlIiwicmVxdWlyZSIsImN1cnJlbnRUZXJyYWluIiwiUmV0dXJuVGVycmFpblBvaW50ZXIiLCJnZW5lcmF0ZVRlcnJhaW4iLCJzaW1wbGV4IiwiY29sb3VycyIsInZlcnRleCIsIm5vaXNlMkQiLCJNZXNoUGhvbmdNYXRlcmlhbCIsInJlZmxlY3Rpdml0eSIsInBsYW5lMiIsImdlbmVyYXRlVGVycmFpbkNodW5rIiwiUG9zaXRpb24iLCJnYWluIiwiZGl2aXNvciIsImZibSIsImhlaWdodFNlY29uZGFyeSIsImJsZW5kaW5nIiwibG9hZGVkQ2h1bmtzIiwiY2h1bmtzSW5NZW0iLCJnZXRXb3JsZFBvc2l0aW9uIiwieW91ckNodW5rIiwiY2h1bmt5VGhpbmciLCJDaHVua1lvdXJJbiIsImNodW5rIiwiY2hlY2tCaW9tZUxvY2F0aW9uIiwibWluSGVpZ2h0Iiwibm9pc2VNYXAiLCJYVmFsdWUiLCJzbWluIiwic21heCIsImVtaW4iLCJlbWF4Iiwiaml0dGVyIiwicGVyIiwic3BlZWQiLCJ0dWZ0MSIsIlNwaGVyZUdlb21ldHJ5IiwidHJhbnNsYXRlIiwidHVmdDMiLCJ0dWZ0MiIsImNvbXB1dGVWZXJ0ZXhOb3JtYWxzIiwiY2xvdWQiLCJjbG91ZDEiLCJjbG91ZDIiLCJncmFzcyIsImdlb3MiLCJkIiwidXAiLCJkb3duIiwicSIsInNoaWZ0Iiwib25Eb2N1bWVudEtleURvd24iLCJhY3RpdmVFbGVtZW50Iiwia2V5Q29kZSIsIndoaWNoIiwiZGlyZWN0aW9uIiwiZ2V0V29ybGREaXJlY3Rpb24iLCJtdWx0aXBseVNjYWxhciIsInJvdGF0ZVkiLCJyb3RhdGVaIiwibGlzdGVuaW5nSG9va3MiLCJDb250cm9sRXZlbnRMaXN0ZW5lciIsIm9jdW1lbnQiLCJ3S2V5IiwiYUtleSIsInNLZXkiLCJkS2V5IiwidXBLZXkiLCJkb3duS2V5IiwiZUtleSIsInFLZXkiLCJzaGlmdEtleSIsInpLZXkiLCJ4S2V5Iiwib25Eb2N1bWVudEtleURvd25FdmVudCIsImVudHJpZXMiLCJsaXN0ZW5Ub0NvbnJvbHMiLCJDbGVhblVwTGlzdGVuZXIiLCJwbGF5ZXJzIiwiTWFrZU5ld0N1YmVQbGF5ZXIiLCJjeWNsaW5kZXIiLCJDeWxpbmRlckdlb21ldHJ5IiwibWF0ZXJpYWwyIiwiY3lsaW5kZXJCdWlsZCIsImdlbmVyYXRlTGFiZWwiLCJJbml0TWFpbkdhbWVIYW5kbGVyIiwiY3JlYXRlVGFnIiwiYmFzZVdpZHRoIiwiYm9yZGVyU2l6ZSIsImN0eCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRDb250ZXh0IiwiZm9udCIsInRleHRXaWR0aCIsIm1lYXN1cmVUZXh0Iiwid2lkdGgiLCJkb3VibGVCb3JkZXJTaXplIiwiY2FudmFzIiwidGV4dEJhc2VsaW5lIiwidGV4dEFsaWduIiwic2NhbGVGYWN0b3IiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsImxhYmVsTWF0ZXJpYWwiLCJsYWJlbEJhc2VTY2FsZSIsImxhYmVsIiwic2V0dGluZ3MiLCJlbGV2YXRvclBpdGNoIiwiYWlyZWxvbmVQaXRjaCIsInJ1ZGRlclBpdGNoIiwiY2hlY2tlciIsInByb3BzIiwibGVmdEFpcmVsb25lIiwicmlnaHRBaXJlbG9uZSIsImxlZnRDb250cm9sU3VyZmFjZSIsInJpZ2h0Q29udHJvbFN1cmZhY2UiLCJydWRkZXIiLCJsaWdodDIiLCJ3aGl0ZUxpZ2h0IiwiY3VycmVudEV2ZWxhdG9yUGl0Y2giLCJhdHRhY2hDYW1lcmFBbmRDb250cm9sIiwiY2xlYW5VcCIsInN1Y2Nlc3MiLCJvYmoiLCJwb2ludCIsImF4aXMiLCJwb2ludElzV29ybGQiLCJsb2NhbFRvV29ybGQiLCJhcHBseUF4aXNBbmdsZSIsIndvcmxkVG9Mb2NhbCIsIm51bWJlck9mU3RhcnMiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsImFyYyIsInBsYWNlVHJlZSIsInRyZWUiLCJpbnRlcnNlY3RzIiwibmV3VHJlZSIsInZldG9yIiwiR2VuZXJhdGVUcmVlcyIsImJvdW5kcyIsInRlcnJhaW4iLCJzbm93eVRyZWUiLCJwYWxtVHJlZSIsImxlYXZlcyIsInRydW5rIiwicmF5Y2FzdGVyIiwiUmF5Y2FzdGVyIiwicmFuZG9tVmVjdG9yIiwiaW50ZXJzZWN0T2JqZWN0cyIsInBsYWNlVHJlZU91dCIsIm1lc2hlc1RvU2VuZCIsImxvY2F0aW9uVG9TZW5kIiwiQ3JlYXRlVUkiLCJnYW1lZmVlZCIsInNldEdhbWVGZWVkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTdGF0cyIsInJlbmRlciIsInNldENoaWxkIiwiZ2FtZUV2ZW50RGF0YSIsInNldEdhbWVFdmVudERhdGEiLCJzZXREYXkiLCJzZXRDaGlsZDIiLCJyZWNpZXZlZFNlZWQiLCJzZXRTZWVkIiwicmVuZGVyZWQiLCJzZXRSZW5kZXJlZCIsImNsaWVudHMiLCJzZXRDbGllbnRzIiwicGVyc29uRGF0YSIsInNldFBlcnNvbmFsRGF0YSIsIm9uY2UiLCJzdGF0cyIsInNob3dQYW5lbCIsImFwcGVuZENoaWxkIiwiZG9tIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwib2dhcml0aG1pY0RlcHRoQnVmZmVyIiwiRm9nIiwic2V0U2l6ZSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRvbUVsZW1lbnQiLCJDdXJyZW50U2NlbmUiLCJyZXF1ZXN0UG9pbnRlckxvY2siLCJtYWtlQ3ViZSIsInByZXZEYXRhIiwiYWRkdG9HYW1lRmVlZCIsIk5ld0dhbWVFdmVudEFycmF5IiwiaG93IiwiX3giLCJfeSIsIl96IiwidGV4dCIsImFuaW1hdGUiLCJiZWdpbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNlbmRDaGF0IiwicHJldmVudERlZmF1bHQiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLFNBQVNBLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQXVCQyxLQUF2QixFQUE4QjtBQUNqQyxTQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsR0FBRyxHQUFHQyxLQUFqQixJQUEwQkEsS0FBakM7QUFDSDtBQUVNLGVBQWVHLElBQWYsQ0FBb0JDLEdBQXBCLEVBQXdCO0FBQzNCLFNBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzdCQyxjQUFVLENBQUNGLEdBQUQsRUFBTUYsR0FBTixDQUFWO0FBQ0gsR0FGTSxDQUFQO0FBR0gsQzs7Ozs7Ozs7Ozs7Ozs7O0FDUkQsTUFBTUssR0FBRyxHQUFHLENBQVo7O0FBQ0EsTUFBTUMsTUFBTSxHQUFJQyxDQUFELElBQU87QUFDbEIsR0FBRUEsQ0FBQyxHQUFHLENBQUwsS0FBWSxDQUFiLElBQWtCLENBQWxCO0FBQ0gsQ0FGRDs7QUFHQSxNQUFNQyxJQUFJLEdBQUlELENBQUQsSUFBTztBQUNoQixHQUFDQSxDQUFDLElBQUksQ0FBTixJQUFXLENBQVg7QUFDSCxDQUZEOztBQUdBLE1BQU1FLEtBQUssR0FBSUYsQ0FBRCxJQUFPO0FBQ2hCQSxHQUFDLEdBQUcsQ0FBTCxJQUFXLENBQVg7QUFDSCxDQUZEOztBQUlPLE1BQU1HLGFBQU4sQ0FBb0I7QUFDdkJDLGFBQVcsQ0FDUEMsVUFBVSxHQUFHLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQ25CRCxLQUFDLEdBQUdDLENBQUo7QUFDSCxHQUhNLEVBSVQ7QUFDRSxTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJKLFVBQW5CO0FBQ0g7O0FB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QXVETixFQXZETSxFQXdETixFQXhETSxFQXlETixHQXpETSxFQTBETixFQTFETSxFQTJETixHQTNETSxFQTRETixHQTVETSxFQTZETixHQTdETSxFQThETixHQTlETSxFQStETixFQS9ETSxFQWdFTixHQWhFTSxFQWlFTixFQWpFTSxFQWtFTixHQWxFTSxFQW1FTixFQW5FTSxFQW9FTixHQXBFTSxFQXFFTixHQXJFTSxFQXNFTixFQXRFTSxFQXVFTixFQXZFTSxFQXdFTixHQXhFTSxFQXlFTixFQXpFTSxFQTBFTixHQTFFTSxFQTJFTixHQTNFTSxFQTRFTixHQTVFTSxFQTZFTixFQTdFTSxFQThFTixHQTlFTSxFQStFTixHQS9FTSxFQWdGTixHQWhGTSxFQWlGTixFQWpGTSxFQWtGTixHQWxGTSxFQW1GTixHQW5GTSxFQW9GTixHQXBGTSxFQXFGTixHQXJGTSxFQXNGTixHQXRGTSxFQXVGTixFQXZGTSxFQXdGTixFQXhGTSxFQXlGTixFQXpGTSxFQTBGTixFQTFGTSxFQTJGTixHQTNGTSxFQTRGTixFQTVGTSxFQTZGTixHQTdGTSxFQThGTixHQTlGTSxFQStGTixHQS9GTSxFQWdHTixFQWhHTSxFQWlHTixFQWpHTSxFQWtHTixFQWxHTSxFQW1HTixFQW5HTSxFQW9HTixHQXBHTSxFQXFHTixDQXJHTSxFQXNHTixHQXRHTSxFQXVHTixFQXZHTSxFQXdHTixFQXhHTSxFQXlHTixHQXpHTSxFQTBHTixFQTFHTSxFQTJHTixHQTNHTSxFQTRHTixHQTVHTSxFQTZHTixHQTdHTSxFQThHTixFQTlHTSxFQStHTixFQS9HTSxFQWdITixHQWhITSxFQWlITixHQWpITSxFQWtITixHQWxITSxFQW1ITixHQW5ITSxFQW9ITixHQXBITSxFQXFITixHQXJITSxFQXNITixHQXRITSxFQXVITixHQXZITSxFQXdITixFQXhITSxFQXlITixHQXpITSxFQTBITixHQTFITSxFQTJITixHQTNITSxFQTRITixHQTVITSxFQTZITixHQTdITSxFQThITixHQTlITSxFQStITixDQS9ITSxFQWdJTixFQWhJTSxFQWlJTixFQWpJTSxFQWtJTixHQWxJTSxFQW1JTixHQW5JTSxFQW9JTixHQXBJTSxFQXFJTixHQXJJTSxFQXNJTixHQXRJTSxFQXVJTixDQXZJTSxFQXdJTixHQXhJTSxFQXlJTixFQXpJTSxFQTBJTixHQTFJTSxFQTJJTixHQTNJTSxFQTRJTixHQTVJTSxFQTZJTixHQTdJTSxFQThJTixFQTlJTSxFQStJTixFQS9JTSxFQWdKTixHQWhKTSxFQWlKTixHQWpKTSxFQWtKTixHQWxKTSxFQW1KTixFQW5KTSxFQW9KTixHQXBKTSxFQXFKTixFQXJKTSxFQXNKTixFQXRKTSxFQXVKTixFQXZKTSxFQXdKTixFQXhKTSxFQXlKTixHQXpKTSxFQTBKTixHQTFKTSxFQTJKTixFQTNKTSxFQTRKTixFQTVKTSxFQTZKTixHQTdKTSxFQThKTixHQTlKTSxFQStKTixHQS9KTSxFQWdLTixHQWhLTSxFQWlLTixHQWpLTSxFQWtLTixHQWxLTSxFQW1LTixHQW5LTSxFQW9LTixDQXBLTSxFQXFLTixFQXJLTSxFQXNLTixHQXRLTSxFQXVLTixHQXZLTSxFQXdLTixFQXhLTSxFQXlLTixHQXpLTSxFQTBLTixHQTFLTSxFQTJLTixHQTNLTSxFQTRLTixHQTVLTSxFQTZLTixHQTdLTSxFQThLTixFQTlLTSxFQStLTixHQS9LTSxFQWdMTixDQWhMTSxFQWlMTixHQWpMTSxFQWtMTixFQWxMTSxFQW1MTixFQW5MTSxFQW9MTixHQXBMTSxFQXFMTixFQXJMTSxFQXNMTixFQXRMTSxFQXVMTixHQXZMTSxFQXdMTixHQXhMTSxFQXlMTixFQXpMTSxFQTBMTixHQTFMTSxFQTJMTixHQTNMTSxFQTRMTixHQTVMTSxFQTZMTixHQTdMTSxFQThMTixHQTlMTSxFQStMTixHQS9MTSxFQWdNTixHQWhNTSxFQWlNTixHQWpNTSxFQWtNTixHQWxNTSxFQW1NTixFQW5NTSxFQW9NTixHQXBNTSxFQXFNTixHQXJNTSxFQXNNTixFQXRNTSxFQXVNTixHQXZNTSxFQXdNTixHQXhNTSxFQXlNTixHQXpNTSxFQTBNTixHQTFNTSxFQTJNTixHQTNNTSxFQTRNTixFQTVNTSxF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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7Ozs7Ozs7Ozs7OztBQ3RYRjtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7Ozs7Ozs7Ozs7O0FDVEc7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsY0FBYztBQUNkLDJCQUEyQixtQkFBTyxDQUFDLDBDQUFrQjtBQUNyRCxhQUFhLG1CQUFPLENBQUMseURBQU07QUFDM0IsdUJBQXVCLG1CQUFPLENBQUMsNkVBQWdCO0FBQy9DLGNBQWMsbUJBQU8sQ0FBQyw4RUFBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0RBQW9EO0FBQ2pGLGFBQWE7QUFDYjtBQUNBO0FBQ0EseUJBQXlCLCtEQUErRDtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaURBQWlEO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCw0REFBNEQ7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLElBQUk7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsMkJBQTJCOztBQUVuQztBQUNBO0FBQ0EsaURBQWlELEVBQUU7QUFDbkQsc0JBQXNCLFdBQVcsSUFBSSxLQUFLOztBQUUxQztBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLGtGQUFVOztBQUVuQyxPQUFPLFdBQVc7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdFFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksTUFBTTtBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqS2tDOztBQUUzQixnQkFBZ0Isb0RBQVU7QUFDbkI7QUFDZCwrREFBZSw0Q0FBRSxFQUFDOzs7Ozs7Ozs7Ozs7QUNKbEIsb0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvdGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByb3VuZG51bShudW0sIHRvTnVtKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gLyB0b051bSkgKiB0b051bTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdhaXQodmFsKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KHJlcywgdmFsKVxyXG4gICAgfSlcclxufSIsImNvbnN0IHRvcCA9IDA7XHJcbmNvbnN0IHBhcmVudCA9IChpKSA9PiB7XHJcbiAgICAoKGkgKyAxKSA+Pj4gMSkgLSAxO1xyXG59O1xyXG5jb25zdCBsZWZ0ID0gKGkpID0+IHtcclxuICAgIChpIDw8IDEpICsgMTtcclxufTtcclxuY29uc3QgcmlnaHQgPSAoaSkgPT4ge1xyXG4gICAgKGkgKyAxKSA8PCAxO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFByaW9yaXR5UXVldWUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgY29tcGFyYXRvciA9IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGEgPiBiO1xyXG4gICAgICAgIH1cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX2hlYXAgPSBbXTtcclxuICAgICAgICB0aGlzLl9jb21wYXJhdG9yID0gY29tcGFyYXRvcjtcclxuICAgIH1cclxuICAgIHNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYXAubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgaXNFbXB0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplKCkgPT09IDA7XHJcbiAgICB9XHJcbiAgICBwZWVrKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFwW3BhcnNlSW50KHRvcCwxMCldO1xyXG4gICAgfVxyXG4gICAgcHVzaCguLi52YWx1ZXMpIHtcclxuICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faGVhcC5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5fc2lmdFVwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZSgpO1xyXG4gICAgfVxyXG4gICAgcG9wKCkge1xyXG4gICAgICAgIGNvbnN0IHBvcHBlZFZhbHVlID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgY29uc3QgYm90dG9tID0gdGhpcy5zaXplKCkgLSAxO1xyXG4gICAgICAgIGlmIChib3R0b20gPiB0b3ApIHtcclxuICAgICAgICAgICAgdGhpcy5fc3dhcCh0b3AsIGJvdHRvbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2hlYXAucG9wKCk7XHJcbiAgICAgICAgdGhpcy5fc2lmdERvd24oKTtcclxuICAgICAgICByZXR1cm4gcG9wcGVkVmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXBsYWNlKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgcmVwbGFjZWRWYWx1ZSA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgIHRoaXMuX2hlYXBbcGFyc2VJbnQodG9wLDEwKV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9zaWZ0RG93bigpO1xyXG4gICAgICAgIHJldHVybiByZXBsYWNlZFZhbHVlO1xyXG4gICAgfVxyXG4gICAgX2dyZWF0ZXIoaSwgaikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wYXJhdG9yKHRoaXMuX2hlYXBbcGFyc2VJbnQoaSwxMCldLCB0aGlzLl9oZWFwW3BhcnNlSW50KGosMTApXSk7XHJcbiAgICB9XHJcbiAgICBfc3dhcChpLCBqKSB7XHJcbiAgICAgICAgW3RoaXMuX2hlYXBbcGFyc2VJbnQoaSwxMCldLCB0aGlzLl9oZWFwW3BhcnNlSW50KGosMTApXV0gPSBbdGhpcy5faGVhcFtwYXJzZUludChqLDEwKV0sIHRoaXMuX2hlYXBbcGFyc2VJbnQoaSwxMCldXTtcclxuICAgIH1cclxuICAgIF9zaWZ0VXAoKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnNpemUoKSAtIDE7XHJcbiAgICAgICAgd2hpbGUgKG5vZGUgPiB0b3AgJiYgdGhpcy5fZ3JlYXRlcihub2RlLCBwYXJlbnQobm9kZSkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N3YXAobm9kZSwgcGFyZW50KG5vZGUpKTtcclxuICAgICAgICAgICAgbm9kZSA9IHBhcmVudChub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKmVzbGludCBjb21wbGV4aXR5OiBbXCJlcnJvclwiLCAyMF0qL1xyXG4gICAgX3NpZnREb3duKCkge1xyXG4gICAgICAgIGxldCBub2RlID0gdG9wO1xyXG4gICAgICAgIHdoaWxlIChcclxuICAgICAgICAgICAgKGxlZnQobm9kZSkgPCB0aGlzLnNpemUoKSAmJiB0aGlzLl9ncmVhdGVyKGxlZnQobm9kZSksIG5vZGUpKSB8fFxyXG4gICAgICAgICAgICAocmlnaHQobm9kZSkgPCB0aGlzLnNpemUoKSAmJiB0aGlzLl9ncmVhdGVyKHJpZ2h0KG5vZGUpLCBub2RlKSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgbGV0IG1heENoaWxkID1cclxuICAgICAgICAgICAgICAgIHJpZ2h0KG5vZGUpIDwgdGhpcy5zaXplKCkgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dyZWF0ZXIocmlnaHQobm9kZSksIGxlZnQobm9kZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgPyByaWdodChub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIDogbGVmdChub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5fc3dhcChub2RlLCBtYXhDaGlsZCk7XHJcbiAgICAgICAgICAgIG5vZGUgPSBtYXhDaGlsZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiwgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE11bHRpcGx5VmVjdG9yMih2ZWN0b3I6VmVjdG9yMiwgbXVsdGlwbGllcjpudW1iZXIpOlZlY3RvcjIge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY3Rvci54ICogbXVsdGlwbGllciwgdmVjdG9yLnkgKiBtdWx0aXBsaWVyKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBNdWx0aXBseVZlY3RvcjModmVjdG9yOlZlY3RvcjMsIG11bHRpcGxpZXI6bnVtYmVyKTpWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh2ZWN0b3IueCAqIG11bHRpcGxpZXIsIHZlY3Rvci55ICogbXVsdGlwbGllciwgdmVjdG9yLnogKiBtdWx0aXBsaWVyKVxyXG59IiwiaW1wb3J0IHNlZWRyYW5kb20gZnJvbSBcInNlZWRyYW5kb21cIjtcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludEZyb21JbnRlcnZhbCggbWluLCBtYXgpIHtcclxuICAgIGxldCBteXJuZyA9IG5ldyBzZWVkcmFuZG9tKCk7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihteXJuZygpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tVmVjdG9yQmV0d2VlblBvaW50czJEKFZlY3RvcjEsIFZlY3RvcjIpe1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHJhbmRvbUludEZyb21JbnRlcnZhbCggVmVjdG9yMS54LCBWZWN0b3IyLngpLHJhbmRvbUludEZyb21JbnRlcnZhbCggVmVjdG9yMS55LCBWZWN0b3IyLnkpLHJhbmRvbUludEZyb21JbnRlcnZhbCggVmVjdG9yMS56LCBWZWN0b3IyLnopKVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJhZGlhbnRzKGRlZ3JlZXMpIHtcclxuXHRyZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWdyZWVzKHJhZGlhbnMpIHtcclxuXHRyZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XHJcbn0iLCJpbXBvcnQgeyBCdWZmZXJHZW9tZXRyeSwgR3JvdXAsIE1lc2gsIE1lc2hMYW1iZXJ0TWF0ZXJpYWwgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgQnVmZmVyR2VvbWV0cnlVdGlscyB9IGZyb20gXCIuLi9Db3JlLUFQSS8zZE1vZGVsSGFuZGxlcnMvdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfbWVyZ2VNZXNoZXMobWVzaGVzKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coKFtdLmNvbmNhdChtZXNoZXMubWFwKGUgPT4gZS5jaGlsZHJlbikpKS5mbGF0KCkpXHJcblxyXG4gICAgbGV0IGlucHV0R2VvID0gQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUJ1ZmZlckdlb21ldHJpZXMoKFtdLmNvbmNhdChtZXNoZXMubWFwKGUgPT4gZS5jaGlsZHJlbikpKS5mbGF0KCksIHRydWUpXHJcblxyXG5cclxuICAgIHJldHVybiBuZXcgTWVzaChpbnB1dEdlbywgbmV3IE1lc2hMYW1iZXJ0TWF0ZXJpYWwoe2NvbG9yOjB4ZmYwMDAwfSkpO1xyXG5cclxufSIsImltcG9ydCBSZWFjdCx7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5cclxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcHBXcmFwcGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGxldCBzaGFyZWRTdGF0ZSA9IGlvKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzaGFyZWRTdGF0ZX0+e2NoaWxkcmVufTwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcIi4vZ2xiQ29yZVwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEdMQkZpbGUoaXRlbSwgc2NlbmUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKTtcclxuICAgICAgICBsb2FkZXIubG9hZChcclxuICAgICAgICAgICAgLy8gcmVzb3VyY2UgVVJMXHJcbiAgICAgICAgICAgIGl0ZW0sXHJcbiAgICAgICAgICAgIC8vIGNhbGxlZCB3aGVuIHRoZSByZXNvdXJjZSBpcyBsb2FkZWRcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGdsdGYpIHtcclxuICAgICAgICAgICAgICAgIGdsdGYuYW5pbWF0aW9ucztcclxuICAgICAgICAgICAgICAgIGdsdGYuc2NlbmU7XHJcbiAgICAgICAgICAgICAgICBnbHRmLnNjZW5lcztcclxuICAgICAgICAgICAgICAgIGdsdGYuY2FtZXJhcztcclxuICAgICAgICAgICAgICAgIGdsdGYuYXNzZXQ7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGdsdGYpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGNhbGxlZCB3aGlsZSBsb2FkaW5nIGlzIHByb2dyZXNzaW5nXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICh4aHIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCh4aHIubG9hZGVkIC8geGhyLnRvdGFsKSAqIDEwMCArIFwiJSBsb2FkZWRcIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGNhbGxlZCB3aGVuIGxvYWRpbmcgaGFzIGVycm9yc1xyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQW4gZXJyb3IgaGFwcGVuZWRcIik7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQnVmZmVyR2VvbWV0cnksIE1hdHJpeDQsIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgQnVmZmVyR2VvbWV0cnlVdGlscyB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWVyZ2VNZXNoZXMoaW5wdXQ6IEJ1ZmZlckdlb21ldHJ5W10sIGxvY2F0aW9uOiBWZWN0b3IzW10pOiBCdWZmZXJHZW9tZXRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhpbnB1dCk7XHJcblxyXG4gICAgaW5wdXQuZm9yRWFjaCgoZSxpKSA9PiB7XHJcbiAgICAgICAgaW5wdXRbaV0gPSAgZS5hcHBseU1hdHJpeDQobmV3IE1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24obG9jYXRpb25baV0ueCwgbG9jYXRpb25baV0ueSwgbG9jYXRpb25baV0ueikpXHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBidWZmZXJHZW9tID0gQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUJ1ZmZlckdlb21ldHJpZXMoaW5wdXQsIGZhbHNlKVxyXG5cclxuICAgIHJldHVybiBidWZmZXJHZW9tXHJcbn1cclxuIiwiLy8gVEhJUyBGSUxFIFdBUyBOT1QgV1JJVFRFTiBCWSBNRVxyXG5cclxuLy8gVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSBpbmJ1aWx0IG9iaiBsb2FkZXJzIHNvIEkgcmV3cm90ZSBwYXJ0cyBvZiBpdCwgc28gaXQgd29ya3MgaW4gTmV4dGpzIGFuZCBSZWFjdCBcclxuXHJcbi8vIC0tIEhhcnZleSBSYW5kYWxsIDIxLzUvMjFcclxuaW1wb3J0IHtcclxuXHRBbmltYXRpb25DbGlwLFxyXG5cdEJvbmUsXHJcblx0Qm94MyxcclxuXHRCdWZmZXJBdHRyaWJ1dGUsXHJcblx0QnVmZmVyR2VvbWV0cnksXHJcblx0Q2FudmFzVGV4dHVyZSxcclxuXHRDbGFtcFRvRWRnZVdyYXBwaW5nLFxyXG5cdENvbG9yLFxyXG5cdERpcmVjdGlvbmFsTGlnaHQsXHJcblx0RG91YmxlU2lkZSxcclxuXHRGaWxlTG9hZGVyLFxyXG5cdEZyb250U2lkZSxcclxuXHRHcm91cCxcclxuXHRJbWFnZUJpdG1hcExvYWRlcixcclxuXHRJbnRlcmxlYXZlZEJ1ZmZlcixcclxuXHRJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSxcclxuXHRJbnRlcnBvbGFudCxcclxuXHRJbnRlcnBvbGF0ZURpc2NyZXRlLFxyXG5cdEludGVycG9sYXRlTGluZWFyLFxyXG5cdExpbmUsXHJcblx0TGluZUJhc2ljTWF0ZXJpYWwsXHJcblx0TGluZUxvb3AsXHJcblx0TGluZVNlZ21lbnRzLFxyXG5cdExpbmVhckZpbHRlcixcclxuXHRMaW5lYXJNaXBtYXBMaW5lYXJGaWx0ZXIsXHJcblx0TGluZWFyTWlwbWFwTmVhcmVzdEZpbHRlcixcclxuXHRMb2FkZXIsXHJcblx0TG9hZGVyVXRpbHMsXHJcblx0TWF0ZXJpYWwsXHJcblx0TWF0aFV0aWxzLFxyXG5cdE1hdHJpeDQsXHJcblx0TWVzaCxcclxuXHRNZXNoQmFzaWNNYXRlcmlhbCxcclxuXHRNZXNoUGh5c2ljYWxNYXRlcmlhbCxcclxuXHRNZXNoU3RhbmRhcmRNYXRlcmlhbCxcclxuXHRNaXJyb3JlZFJlcGVhdFdyYXBwaW5nLFxyXG5cdE5lYXJlc3RGaWx0ZXIsXHJcblx0TmVhcmVzdE1pcG1hcExpbmVhckZpbHRlcixcclxuXHROZWFyZXN0TWlwbWFwTmVhcmVzdEZpbHRlcixcclxuXHROdW1iZXJLZXlmcmFtZVRyYWNrLFxyXG5cdE9iamVjdDNELFxyXG5cdE9ydGhvZ3JhcGhpY0NhbWVyYSxcclxuXHRQZXJzcGVjdGl2ZUNhbWVyYSxcclxuXHRQb2ludExpZ2h0LFxyXG5cdFBvaW50cyxcclxuXHRQb2ludHNNYXRlcmlhbCxcclxuXHRQcm9wZXJ0eUJpbmRpbmcsXHJcblx0UXVhdGVybmlvbktleWZyYW1lVHJhY2ssXHJcblx0UkdCRm9ybWF0LFxyXG5cdFJlcGVhdFdyYXBwaW5nLFxyXG5cdFNrZWxldG9uLFxyXG5cdFNraW5uZWRNZXNoLFxyXG5cdFNwaGVyZSxcclxuXHRTcG90TGlnaHQsXHJcblx0VGFuZ2VudFNwYWNlTm9ybWFsTWFwLFxyXG5cdFRleHR1cmVMb2FkZXIsXHJcblx0VHJpYW5nbGVGYW5EcmF3TW9kZSxcclxuXHRUcmlhbmdsZVN0cmlwRHJhd01vZGUsXHJcblx0VmVjdG9yMixcclxuXHRWZWN0b3IzLFxyXG5cdFZlY3RvcktleWZyYW1lVHJhY2ssXHJcblx0c1JHQkVuY29kaW5nXHJcbn0gZnJvbSAndGhyZWUnO1xyXG5cclxudmFyIEdMVEZMb2FkZXIgPSAoIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0ZnVuY3Rpb24gR0xURkxvYWRlciggbWFuYWdlciApIHtcclxuXHJcblx0XHRMb2FkZXIuY2FsbCggdGhpcywgbWFuYWdlciApO1xyXG5cclxuXHRcdHRoaXMuZHJhY29Mb2FkZXIgPSBudWxsO1xyXG5cdFx0dGhpcy5rdHgyTG9hZGVyID0gbnVsbDtcclxuXHRcdHRoaXMubWVzaG9wdERlY29kZXIgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMucGx1Z2luQ2FsbGJhY2tzID0gW107XHJcblxyXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNYXRlcmlhbHNDbGVhcmNvYXRFeHRlbnNpb24oIHBhcnNlciApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgR0xURlRleHR1cmVCYXNpc1VFeHRlbnNpb24oIHBhcnNlciApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgR0xURlRleHR1cmVXZWJQRXh0ZW5zaW9uKCBwYXJzZXIgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNYXRlcmlhbHNUcmFuc21pc3Npb25FeHRlbnNpb24oIHBhcnNlciApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgR0xURkxpZ2h0c0V4dGVuc2lvbiggcGFyc2VyICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTWVzaG9wdENvbXByZXNzaW9uKCBwYXJzZXIgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH1cclxuXHJcblx0R0xURkxvYWRlci5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBMb2FkZXIucHJvdG90eXBlICksIHtcclxuXHJcblx0XHRjb25zdHJ1Y3RvcjogR0xURkxvYWRlcixcclxuXHJcblx0XHRsb2FkOiBmdW5jdGlvbiAoIHVybCwgb25Mb2FkLCBvblByb2dyZXNzLCBvbkVycm9yICkge1xyXG5cclxuXHRcdFx0dmFyIHNjb3BlID0gdGhpcztcclxuXHJcblx0XHRcdHZhciByZXNvdXJjZVBhdGg7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMucmVzb3VyY2VQYXRoICE9PSAnJyApIHtcclxuXHJcblx0XHRcdFx0cmVzb3VyY2VQYXRoID0gdGhpcy5yZXNvdXJjZVBhdGg7XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYgKCB0aGlzLnBhdGggIT09ICcnICkge1xyXG5cclxuXHRcdFx0XHRyZXNvdXJjZVBhdGggPSB0aGlzLnBhdGg7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRyZXNvdXJjZVBhdGggPSBMb2FkZXJVdGlscy5leHRyYWN0VXJsQmFzZSggdXJsICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBUZWxscyB0aGUgTG9hZGluZ01hbmFnZXIgdG8gdHJhY2sgYW4gZXh0cmEgaXRlbSwgd2hpY2ggcmVzb2x2ZXMgYWZ0ZXJcclxuXHRcdFx0Ly8gdGhlIG1vZGVsIGlzIGZ1bGx5IGxvYWRlZC4gVGhpcyBtZWFucyB0aGUgY291bnQgb2YgaXRlbXMgbG9hZGVkIHdpbGxcclxuXHRcdFx0Ly8gYmUgaW5jb3JyZWN0LCBidXQgZW5zdXJlcyBtYW5hZ2VyLm9uTG9hZCgpIGRvZXMgbm90IGZpcmUgZWFybHkuXHJcblx0XHRcdHRoaXMubWFuYWdlci5pdGVtU3RhcnQoIHVybCApO1xyXG5cclxuXHRcdFx0dmFyIF9vbkVycm9yID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuXHRcdFx0XHRpZiAoIG9uRXJyb3IgKSB7XHJcblxyXG5cdFx0XHRcdFx0b25FcnJvciggZSApO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGUgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzY29wZS5tYW5hZ2VyLml0ZW1FcnJvciggdXJsICk7XHJcblx0XHRcdFx0c2NvcGUubWFuYWdlci5pdGVtRW5kKCB1cmwgKTtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgbG9hZGVyID0gbmV3IEZpbGVMb2FkZXIoIHRoaXMubWFuYWdlciApO1xyXG5cclxuXHRcdFx0bG9hZGVyLnNldFBhdGgoIHRoaXMucGF0aCApO1xyXG5cdFx0XHRsb2FkZXIuc2V0UmVzcG9uc2VUeXBlKCAnYXJyYXlidWZmZXInICk7XHJcblx0XHRcdGxvYWRlci5zZXRSZXF1ZXN0SGVhZGVyKCB0aGlzLnJlcXVlc3RIZWFkZXIgKTtcclxuXHRcdFx0bG9hZGVyLnNldFdpdGhDcmVkZW50aWFscyggdGhpcy53aXRoQ3JlZGVudGlhbHMgKTtcclxuXHJcblx0XHRcdGxvYWRlci5sb2FkKCB1cmwsIGZ1bmN0aW9uICggZGF0YSApIHtcclxuXHJcblx0XHRcdFx0dHJ5IHtcclxuXHJcblx0XHRcdFx0XHRzY29wZS5wYXJzZSggZGF0YSwgcmVzb3VyY2VQYXRoLCBmdW5jdGlvbiAoIGdsdGYgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRvbkxvYWQoIGdsdGYgKTtcclxuXHJcblx0XHRcdFx0XHRcdHNjb3BlLm1hbmFnZXIuaXRlbUVuZCggdXJsICk7XHJcblxyXG5cdFx0XHRcdFx0fSwgX29uRXJyb3IgKTtcclxuXHJcblx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7XHJcblxyXG5cdFx0XHRcdFx0X29uRXJyb3IoIGUgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSwgb25Qcm9ncmVzcywgX29uRXJyb3IgKTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERSQUNPTG9hZGVyOiBmdW5jdGlvbiAoIGRyYWNvTG9hZGVyICkge1xyXG5cclxuXHRcdFx0dGhpcy5kcmFjb0xvYWRlciA9IGRyYWNvTG9hZGVyO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHNldEREU0xvYWRlcjogZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cclxuXHRcdFx0XHQnVEhSRUUuR0xURkxvYWRlcjogXCJNU0ZUX3RleHR1cmVfZGRzXCIgbm8gbG9uZ2VyIHN1cHBvcnRlZC4gUGxlYXNlIHVwZGF0ZSB0byBcIktIUl90ZXh0dXJlX2Jhc2lzdVwiLidcclxuXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRLVFgyTG9hZGVyOiBmdW5jdGlvbiAoIGt0eDJMb2FkZXIgKSB7XHJcblxyXG5cdFx0XHR0aGlzLmt0eDJMb2FkZXIgPSBrdHgyTG9hZGVyO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE1lc2hvcHREZWNvZGVyOiBmdW5jdGlvbiAoIG1lc2hvcHREZWNvZGVyICkge1xyXG5cclxuXHRcdFx0dGhpcy5tZXNob3B0RGVjb2RlciA9IG1lc2hvcHREZWNvZGVyO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHJlZ2lzdGVyOiBmdW5jdGlvbiAoIGNhbGxiYWNrICkge1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLnBsdWdpbkNhbGxiYWNrcy5pbmRleE9mKCBjYWxsYmFjayApID09PSAtIDEgKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMucGx1Z2luQ2FsbGJhY2tzLnB1c2goIGNhbGxiYWNrICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHVucmVnaXN0ZXI6IGZ1bmN0aW9uICggY2FsbGJhY2sgKSB7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMucGx1Z2luQ2FsbGJhY2tzLmluZGV4T2YoIGNhbGxiYWNrICkgIT09IC0gMSApIHtcclxuXHJcblx0XHRcdFx0dGhpcy5wbHVnaW5DYWxsYmFja3Muc3BsaWNlKCB0aGlzLnBsdWdpbkNhbGxiYWNrcy5pbmRleE9mKCBjYWxsYmFjayApLCAxICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHBhcnNlOiBmdW5jdGlvbiAoIGRhdGEsIHBhdGgsIG9uTG9hZCwgb25FcnJvciApIHtcclxuXHJcblx0XHRcdHZhciBjb250ZW50O1xyXG5cdFx0XHR2YXIgZXh0ZW5zaW9ucyA9IHt9O1xyXG5cdFx0XHR2YXIgcGx1Z2lucyA9IHt9O1xyXG5cclxuXHRcdFx0aWYgKCB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnRlbnQgPSBkYXRhO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0dmFyIG1hZ2ljID0gTG9hZGVyVXRpbHMuZGVjb2RlVGV4dCggbmV3IFVpbnQ4QXJyYXkoIGRhdGEsIDAsIDQgKSApO1xyXG5cclxuXHRcdFx0XHRpZiAoIG1hZ2ljID09PSBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9NQUdJQyApIHtcclxuXHJcblx0XHRcdFx0XHR0cnkge1xyXG5cclxuXHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfQklOQVJZX0dMVEYgXSA9IG5ldyBHTFRGQmluYXJ5RXh0ZW5zaW9uKCBkYXRhICk7XHJcblxyXG5cdFx0XHRcdFx0fSBjYXRjaCAoIGVycm9yICkge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCBvbkVycm9yICkgb25FcnJvciggZXJyb3IgKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRjb250ZW50ID0gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfQklOQVJZX0dMVEYgXS5jb250ZW50O1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGNvbnRlbnQgPSBMb2FkZXJVdGlscy5kZWNvZGVUZXh0KCBuZXcgVWludDhBcnJheSggZGF0YSApICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBqc29uID0gSlNPTi5wYXJzZSggY29udGVudCApO1xyXG5cclxuXHRcdFx0aWYgKCBqc29uLmFzc2V0ID09PSB1bmRlZmluZWQgfHwganNvbi5hc3NldC52ZXJzaW9uWyAwIF0gPCAyICkge1xyXG5cclxuXHRcdFx0XHRpZiAoIG9uRXJyb3IgKSBvbkVycm9yKCBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBVbnN1cHBvcnRlZCBhc3NldC4gZ2xURiB2ZXJzaW9ucyA+PTIuMCBhcmUgc3VwcG9ydGVkLicgKSApO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBwYXJzZXIgPSBuZXcgR0xURlBhcnNlcigganNvbiwge1xyXG5cclxuXHRcdFx0XHRwYXRoOiBwYXRoIHx8IHRoaXMucmVzb3VyY2VQYXRoIHx8ICcnLFxyXG5cdFx0XHRcdGNyb3NzT3JpZ2luOiB0aGlzLmNyb3NzT3JpZ2luLFxyXG5cdFx0XHRcdHJlcXVlc3RIZWFkZXI6IHRoaXMucmVxdWVzdEhlYWRlcixcclxuXHRcdFx0XHRtYW5hZ2VyOiB0aGlzLm1hbmFnZXIsXHJcblx0XHRcdFx0a3R4MkxvYWRlcjogdGhpcy5rdHgyTG9hZGVyLFxyXG5cdFx0XHRcdG1lc2hvcHREZWNvZGVyOiB0aGlzLm1lc2hvcHREZWNvZGVyXHJcblxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRwYXJzZXIuZmlsZUxvYWRlci5zZXRSZXF1ZXN0SGVhZGVyKCB0aGlzLnJlcXVlc3RIZWFkZXIgKTtcclxuXHJcblx0XHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMucGx1Z2luQ2FsbGJhY2tzLmxlbmd0aDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0dmFyIHBsdWdpbiA9IHRoaXMucGx1Z2luQ2FsbGJhY2tzWyBpIF0oIHBhcnNlciApO1xyXG5cdFx0XHRcdHBsdWdpbnNbIHBsdWdpbi5uYW1lIF0gPSBwbHVnaW47XHJcblxyXG5cdFx0XHRcdC8vIFdvcmthcm91bmQgdG8gYXZvaWQgZGV0ZXJtaW5pbmcgYXMgdW5rbm93biBleHRlbnNpb25cclxuXHRcdFx0XHQvLyBpbiBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoKS5cclxuXHRcdFx0XHQvLyBSZW1vdmUgdGhpcyB3b3JrYXJvdW5kIGlmIHdlIG1vdmUgYWxsIHRoZSBleGlzdGluZ1xyXG5cdFx0XHRcdC8vIGV4dGVuc2lvbiBoYW5kbGVycyB0byBwbHVnaW4gc3lzdGVtXHJcblx0XHRcdFx0ZXh0ZW5zaW9uc1sgcGx1Z2luLm5hbWUgXSA9IHRydWU7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGpzb24uZXh0ZW5zaW9uc1VzZWQgKSB7XHJcblxyXG5cdFx0XHRcdGZvciAoIHZhciBpID0gMDsgaSA8IGpzb24uZXh0ZW5zaW9uc1VzZWQubGVuZ3RoOyArKyBpICkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBleHRlbnNpb25OYW1lID0ganNvbi5leHRlbnNpb25zVXNlZFsgaSBdO1xyXG5cdFx0XHRcdFx0dmFyIGV4dGVuc2lvbnNSZXF1aXJlZCA9IGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkIHx8IFtdO1xyXG5cclxuXHRcdFx0XHRcdHN3aXRjaCAoIGV4dGVuc2lvbk5hbWUgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRjYXNlIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19VTkxJVDpcclxuXHRcdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURk1hdGVyaWFsc1VubGl0RXh0ZW5zaW9uKCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRjYXNlIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19QQlJfU1BFQ1VMQVJfR0xPU1NJTkVTUzpcclxuXHRcdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURk1hdGVyaWFsc1BiclNwZWN1bGFyR2xvc3NpbmVzc0V4dGVuc2lvbigpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OOlxyXG5cdFx0XHRcdFx0XHRcdGV4dGVuc2lvbnNbIGV4dGVuc2lvbk5hbWUgXSA9IG5ldyBHTFRGRHJhY29NZXNoQ29tcHJlc3Npb25FeHRlbnNpb24oIGpzb24sIHRoaXMuZHJhY29Mb2FkZXIgKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdGNhc2UgRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk06XHJcblx0XHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgZXh0ZW5zaW9uTmFtZSBdID0gbmV3IEdMVEZUZXh0dXJlVHJhbnNmb3JtRXh0ZW5zaW9uKCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRjYXNlIEVYVEVOU0lPTlMuS0hSX01FU0hfUVVBTlRJWkFUSU9OOlxyXG5cdFx0XHRcdFx0XHRcdGV4dGVuc2lvbnNbIGV4dGVuc2lvbk5hbWUgXSA9IG5ldyBHTFRGTWVzaFF1YW50aXphdGlvbkV4dGVuc2lvbigpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKCBleHRlbnNpb25zUmVxdWlyZWQuaW5kZXhPZiggZXh0ZW5zaW9uTmFtZSApID49IDAgJiYgcGx1Z2luc1sgZXh0ZW5zaW9uTmFtZSBdID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogVW5rbm93biBleHRlbnNpb24gXCInICsgZXh0ZW5zaW9uTmFtZSArICdcIi4nICk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHBhcnNlci5zZXRFeHRlbnNpb25zKCBleHRlbnNpb25zICk7XHJcblx0XHRcdHBhcnNlci5zZXRQbHVnaW5zKCBwbHVnaW5zICk7XHJcblx0XHRcdHBhcnNlci5wYXJzZSggb25Mb2FkLCBvbkVycm9yICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9ICk7XHJcblxyXG5cdC8qIEdMVEZSRUdJU1RSWSAqL1xyXG5cclxuXHRmdW5jdGlvbiBHTFRGUmVnaXN0cnkoKSB7XHJcblxyXG5cdFx0dmFyIG9iamVjdHMgPSB7fTtcclxuXHJcblx0XHRyZXR1cm5cdHtcclxuXHJcblx0XHRcdGdldDogZnVuY3Rpb24gKCBrZXkgKSB7XHJcblxyXG5cdFx0XHRcdHJldHVybiBvYmplY3RzWyBrZXkgXTtcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRhZGQ6IGZ1bmN0aW9uICgga2V5LCBvYmplY3QgKSB7XHJcblxyXG5cdFx0XHRcdG9iamVjdHNbIGtleSBdID0gb2JqZWN0O1xyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHJlbW92ZTogZnVuY3Rpb24gKCBrZXkgKSB7XHJcblxyXG5cdFx0XHRcdGRlbGV0ZSBvYmplY3RzWyBrZXkgXTtcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRyZW1vdmVBbGw6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0b2JqZWN0cyA9IHt9O1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH07XHJcblxyXG5cdH1cclxuXHJcblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHQvKioqKioqKioqKiBFWFRFTlNJT05TICoqKioqKioqKioqL1xyXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdHZhciBFWFRFTlNJT05TID0ge1xyXG5cdFx0S0hSX0JJTkFSWV9HTFRGOiAnS0hSX2JpbmFyeV9nbFRGJyxcclxuXHRcdEtIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OOiAnS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb24nLFxyXG5cdFx0S0hSX0xJR0hUU19QVU5DVFVBTDogJ0tIUl9saWdodHNfcHVuY3R1YWwnLFxyXG5cdFx0S0hSX01BVEVSSUFMU19DTEVBUkNPQVQ6ICdLSFJfbWF0ZXJpYWxzX2NsZWFyY29hdCcsXHJcblx0XHRLSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTOiAnS0hSX21hdGVyaWFsc19wYnJTcGVjdWxhckdsb3NzaW5lc3MnLFxyXG5cdFx0S0hSX01BVEVSSUFMU19UUkFOU01JU1NJT046ICdLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbicsXHJcblx0XHRLSFJfTUFURVJJQUxTX1VOTElUOiAnS0hSX21hdGVyaWFsc191bmxpdCcsXHJcblx0XHRLSFJfVEVYVFVSRV9CQVNJU1U6ICdLSFJfdGV4dHVyZV9iYXNpc3UnLFxyXG5cdFx0S0hSX1RFWFRVUkVfVFJBTlNGT1JNOiAnS0hSX3RleHR1cmVfdHJhbnNmb3JtJyxcclxuXHRcdEtIUl9NRVNIX1FVQU5USVpBVElPTjogJ0tIUl9tZXNoX3F1YW50aXphdGlvbicsXHJcblx0XHRFWFRfVEVYVFVSRV9XRUJQOiAnRVhUX3RleHR1cmVfd2VicCcsXHJcblx0XHRFWFRfTUVTSE9QVF9DT01QUkVTU0lPTjogJ0VYVF9tZXNob3B0X2NvbXByZXNzaW9uJ1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFB1bmN0dWFsIExpZ2h0cyBFeHRlbnNpb25cclxuXHQgKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9saWdodHNfcHVuY3R1YWxcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBHTFRGTGlnaHRzRXh0ZW5zaW9uKCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XHJcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9MSUdIVFNfUFVOQ1RVQUw7XHJcblxyXG5cdFx0Ly8gT2JqZWN0M0QgaW5zdGFuY2UgY2FjaGVzXHJcblx0XHR0aGlzLmNhY2hlID0geyByZWZzOiB7fSwgdXNlczoge30gfTtcclxuXHJcblx0fVxyXG5cclxuXHRHTFRGTGlnaHRzRXh0ZW5zaW9uLnByb3RvdHlwZS5fbWFya0RlZnMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0dmFyIHBhcnNlciA9IHRoaXMucGFyc2VyO1xyXG5cdFx0dmFyIG5vZGVEZWZzID0gdGhpcy5wYXJzZXIuanNvbi5ub2RlcyB8fCBbXTtcclxuXHJcblx0XHRmb3IgKCB2YXIgbm9kZUluZGV4ID0gMCwgbm9kZUxlbmd0aCA9IG5vZGVEZWZzLmxlbmd0aDsgbm9kZUluZGV4IDwgbm9kZUxlbmd0aDsgbm9kZUluZGV4ICsrICkge1xyXG5cclxuXHRcdFx0dmFyIG5vZGVEZWYgPSBub2RlRGVmc1sgbm9kZUluZGV4IF07XHJcblxyXG5cdFx0XHRpZiAoIG5vZGVEZWYuZXh0ZW5zaW9uc1xyXG5cdFx0XHRcdCYmIG5vZGVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF1cclxuXHRcdFx0XHQmJiBub2RlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdLmxpZ2h0ICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdHBhcnNlci5fYWRkTm9kZVJlZiggdGhpcy5jYWNoZSwgbm9kZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXS5saWdodCApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0R0xURkxpZ2h0c0V4dGVuc2lvbi5wcm90b3R5cGUuX2xvYWRMaWdodCA9IGZ1bmN0aW9uICggbGlnaHRJbmRleCApIHtcclxuXHJcblx0XHR2YXIgcGFyc2VyID0gdGhpcy5wYXJzZXI7XHJcblx0XHR2YXIgY2FjaGVLZXkgPSAnbGlnaHQ6JyArIGxpZ2h0SW5kZXg7XHJcblx0XHR2YXIgZGVwZW5kZW5jeSA9IHBhcnNlci5jYWNoZS5nZXQoIGNhY2hlS2V5ICk7XHJcblxyXG5cdFx0aWYgKCBkZXBlbmRlbmN5ICkgcmV0dXJuIGRlcGVuZGVuY3k7XHJcblxyXG5cdFx0dmFyIGpzb24gPSBwYXJzZXIuanNvbjtcclxuXHRcdHZhciBleHRlbnNpb25zID0gKCBqc29uLmV4dGVuc2lvbnMgJiYganNvbi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHx8IHt9O1xyXG5cdFx0dmFyIGxpZ2h0RGVmcyA9IGV4dGVuc2lvbnMubGlnaHRzIHx8IFtdO1xyXG5cdFx0dmFyIGxpZ2h0RGVmID0gbGlnaHREZWZzWyBsaWdodEluZGV4IF07XHJcblx0XHR2YXIgbGlnaHROb2RlO1xyXG5cclxuXHRcdHZhciBjb2xvciA9IG5ldyBDb2xvciggMHhmZmZmZmYgKTtcclxuXHJcblx0XHRpZiAoIGxpZ2h0RGVmLmNvbG9yICE9PSB1bmRlZmluZWQgKSBjb2xvci5mcm9tQXJyYXkoIGxpZ2h0RGVmLmNvbG9yICk7XHJcblxyXG5cdFx0dmFyIHJhbmdlID0gbGlnaHREZWYucmFuZ2UgIT09IHVuZGVmaW5lZCA/IGxpZ2h0RGVmLnJhbmdlIDogMDtcclxuXHJcblx0XHRzd2l0Y2ggKCBsaWdodERlZi50eXBlICkge1xyXG5cclxuXHRcdFx0Y2FzZSAnZGlyZWN0aW9uYWwnOlxyXG5cdFx0XHRcdGxpZ2h0Tm9kZSA9IG5ldyBEaXJlY3Rpb25hbExpZ2h0KCBjb2xvciApO1xyXG5cdFx0XHRcdGxpZ2h0Tm9kZS50YXJnZXQucG9zaXRpb24uc2V0KCAwLCAwLCAtIDEgKTtcclxuXHRcdFx0XHRsaWdodE5vZGUuYWRkKCBsaWdodE5vZGUudGFyZ2V0ICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdwb2ludCc6XHJcblx0XHRcdFx0bGlnaHROb2RlID0gbmV3IFBvaW50TGlnaHQoIGNvbG9yICk7XHJcblx0XHRcdFx0bGlnaHROb2RlLmRpc3RhbmNlID0gcmFuZ2U7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdzcG90JzpcclxuXHRcdFx0XHRsaWdodE5vZGUgPSBuZXcgU3BvdExpZ2h0KCBjb2xvciApO1xyXG5cdFx0XHRcdGxpZ2h0Tm9kZS5kaXN0YW5jZSA9IHJhbmdlO1xyXG5cdFx0XHRcdC8vIEhhbmRsZSBzcG90bGlnaHQgcHJvcGVydGllcy5cclxuXHRcdFx0XHRsaWdodERlZi5zcG90ID0gbGlnaHREZWYuc3BvdCB8fCB7fTtcclxuXHRcdFx0XHRsaWdodERlZi5zcG90LmlubmVyQ29uZUFuZ2xlID0gbGlnaHREZWYuc3BvdC5pbm5lckNvbmVBbmdsZSAhPT0gdW5kZWZpbmVkID8gbGlnaHREZWYuc3BvdC5pbm5lckNvbmVBbmdsZSA6IDA7XHJcblx0XHRcdFx0bGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZSA9IGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGUgIT09IHVuZGVmaW5lZCA/IGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGUgOiBNYXRoLlBJIC8gNC4wO1xyXG5cdFx0XHRcdGxpZ2h0Tm9kZS5hbmdsZSA9IGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGU7XHJcblx0XHRcdFx0bGlnaHROb2RlLnBlbnVtYnJhID0gMS4wIC0gbGlnaHREZWYuc3BvdC5pbm5lckNvbmVBbmdsZSAvIGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGU7XHJcblx0XHRcdFx0bGlnaHROb2RlLnRhcmdldC5wb3NpdGlvbi5zZXQoIDAsIDAsIC0gMSApO1xyXG5cdFx0XHRcdGxpZ2h0Tm9kZS5hZGQoIGxpZ2h0Tm9kZS50YXJnZXQgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5leHBlY3RlZCBsaWdodCB0eXBlOiAnICsgbGlnaHREZWYudHlwZSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBTb21lIGxpZ2h0cyAoZS5nLiBzcG90KSBkZWZhdWx0IHRvIGEgcG9zaXRpb24gb3RoZXIgdGhhbiB0aGUgb3JpZ2luLiBSZXNldCB0aGUgcG9zaXRpb25cclxuXHRcdC8vIGhlcmUsIGJlY2F1c2Ugbm9kZS1sZXZlbCBwYXJzaW5nIHdpbGwgb25seSBvdmVycmlkZSBwb3NpdGlvbiBpZiBleHBsaWNpdGx5IHNwZWNpZmllZC5cclxuXHRcdGxpZ2h0Tm9kZS5wb3NpdGlvbi5zZXQoIDAsIDAsIDAgKTtcclxuXHJcblx0XHRsaWdodE5vZGUuZGVjYXkgPSAyO1xyXG5cclxuXHRcdGlmICggbGlnaHREZWYuaW50ZW5zaXR5ICE9PSB1bmRlZmluZWQgKSBsaWdodE5vZGUuaW50ZW5zaXR5ID0gbGlnaHREZWYuaW50ZW5zaXR5O1xyXG5cclxuXHRcdGxpZ2h0Tm9kZS5uYW1lID0gcGFyc2VyLmNyZWF0ZVVuaXF1ZU5hbWUoIGxpZ2h0RGVmLm5hbWUgfHwgKCAnbGlnaHRfJyArIGxpZ2h0SW5kZXggKSApO1xyXG5cclxuXHRcdGRlcGVuZGVuY3kgPSBQcm9taXNlLnJlc29sdmUoIGxpZ2h0Tm9kZSApO1xyXG5cclxuXHRcdHBhcnNlci5jYWNoZS5hZGQoIGNhY2hlS2V5LCBkZXBlbmRlbmN5ICk7XHJcblxyXG5cdFx0cmV0dXJuIGRlcGVuZGVuY3k7XHJcblxyXG5cdH07XHJcblxyXG5cdEdMVEZMaWdodHNFeHRlbnNpb24ucHJvdG90eXBlLmNyZWF0ZU5vZGVBdHRhY2htZW50ID0gZnVuY3Rpb24gKCBub2RlSW5kZXggKSB7XHJcblxyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dmFyIHBhcnNlciA9IHRoaXMucGFyc2VyO1xyXG5cdFx0dmFyIGpzb24gPSBwYXJzZXIuanNvbjtcclxuXHRcdHZhciBub2RlRGVmID0ganNvbi5ub2Rlc1sgbm9kZUluZGV4IF07XHJcblx0XHR2YXIgbGlnaHREZWYgPSAoIG5vZGVEZWYuZXh0ZW5zaW9ucyAmJiBub2RlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgfHwge307XHJcblx0XHR2YXIgbGlnaHRJbmRleCA9IGxpZ2h0RGVmLmxpZ2h0O1xyXG5cclxuXHRcdGlmICggbGlnaHRJbmRleCA9PT0gdW5kZWZpbmVkICkgcmV0dXJuIG51bGw7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuX2xvYWRMaWdodCggbGlnaHRJbmRleCApLnRoZW4oIGZ1bmN0aW9uICggbGlnaHQgKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gcGFyc2VyLl9nZXROb2RlUmVmKCBzZWxmLmNhY2hlLCBsaWdodEluZGV4LCBsaWdodCApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogVW5saXQgTWF0ZXJpYWxzIEV4dGVuc2lvblxyXG5cdCAqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc191bmxpdFxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIEdMVEZNYXRlcmlhbHNVbmxpdEV4dGVuc2lvbigpIHtcclxuXHJcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVU5MSVQ7XHJcblxyXG5cdH1cclxuXHJcblx0R0xURk1hdGVyaWFsc1VubGl0RXh0ZW5zaW9uLnByb3RvdHlwZS5nZXRNYXRlcmlhbFR5cGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0cmV0dXJuIE1lc2hCYXNpY01hdGVyaWFsO1xyXG5cclxuXHR9O1xyXG5cclxuXHRHTFRGTWF0ZXJpYWxzVW5saXRFeHRlbnNpb24ucHJvdG90eXBlLmV4dGVuZFBhcmFtcyA9IGZ1bmN0aW9uICggbWF0ZXJpYWxQYXJhbXMsIG1hdGVyaWFsRGVmLCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0dmFyIHBlbmRpbmcgPSBbXTtcclxuXHJcblx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvciA9IG5ldyBDb2xvciggMS4wLCAxLjAsIDEuMCApO1xyXG5cdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IDEuMDtcclxuXHJcblx0XHR2YXIgbWV0YWxsaWNSb3VnaG5lc3MgPSBtYXRlcmlhbERlZi5wYnJNZXRhbGxpY1JvdWdobmVzcztcclxuXHJcblx0XHRpZiAoIG1ldGFsbGljUm91Z2huZXNzICkge1xyXG5cclxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3IgKSApIHtcclxuXHJcblx0XHRcdFx0dmFyIGFycmF5ID0gbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yO1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvci5mcm9tQXJyYXkoIGFycmF5ICk7XHJcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IGFycmF5WyAzIF07XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdtYXAnLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlICkgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIENsZWFyY29hdCBNYXRlcmlhbHMgRXh0ZW5zaW9uXHJcblx0ICpcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX2NsZWFyY29hdFxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIEdMVEZNYXRlcmlhbHNDbGVhcmNvYXRFeHRlbnNpb24oIHBhcnNlciApIHtcclxuXHJcblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcclxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19DTEVBUkNPQVQ7XHJcblxyXG5cdH1cclxuXHJcblx0R0xURk1hdGVyaWFsc0NsZWFyY29hdEV4dGVuc2lvbi5wcm90b3R5cGUuZ2V0TWF0ZXJpYWxUeXBlID0gZnVuY3Rpb24gKCBtYXRlcmlhbEluZGV4ICkge1xyXG5cclxuXHRcdHZhciBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcclxuXHRcdHZhciBtYXRlcmlhbERlZiA9IHBhcnNlci5qc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xyXG5cclxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSByZXR1cm4gbnVsbDtcclxuXHJcblx0XHRyZXR1cm4gTWVzaFBoeXNpY2FsTWF0ZXJpYWw7XHJcblxyXG5cdH07XHJcblxyXG5cdEdMVEZNYXRlcmlhbHNDbGVhcmNvYXRFeHRlbnNpb24ucHJvdG90eXBlLmV4dGVuZE1hdGVyaWFsUGFyYW1zID0gZnVuY3Rpb24gKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApIHtcclxuXHJcblx0XHR2YXIgcGFyc2VyID0gdGhpcy5wYXJzZXI7XHJcblx0XHR2YXIgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcclxuXHJcblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgcGVuZGluZyA9IFtdO1xyXG5cclxuXHRcdHZhciBleHRlbnNpb24gPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcclxuXHJcblx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXRGYWN0b3IgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdG1hdGVyaWFsUGFyYW1zLmNsZWFyY29hdCA9IGV4dGVuc2lvbi5jbGVhcmNvYXRGYWN0b3I7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdFRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnY2xlYXJjb2F0TWFwJywgZXh0ZW5zaW9uLmNsZWFyY29hdFRleHR1cmUgKSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXRSb3VnaG5lc3NGYWN0b3IgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdG1hdGVyaWFsUGFyYW1zLmNsZWFyY29hdFJvdWdobmVzcyA9IGV4dGVuc2lvbi5jbGVhcmNvYXRSb3VnaG5lc3NGYWN0b3I7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdFJvdWdobmVzc1RleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnY2xlYXJjb2F0Um91Z2huZXNzTWFwJywgZXh0ZW5zaW9uLmNsZWFyY29hdFJvdWdobmVzc1RleHR1cmUgKSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXROb3JtYWxUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2NsZWFyY29hdE5vcm1hbE1hcCcsIGV4dGVuc2lvbi5jbGVhcmNvYXROb3JtYWxUZXh0dXJlICkgKTtcclxuXHJcblx0XHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdE5vcm1hbFRleHR1cmUuc2NhbGUgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0dmFyIHNjYWxlID0gZXh0ZW5zaW9uLmNsZWFyY29hdE5vcm1hbFRleHR1cmUuc2NhbGU7XHJcblxyXG5cdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzExNDM4I2lzc3VlY29tbWVudC01MDcwMDM5OTVcclxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5jbGVhcmNvYXROb3JtYWxTY2FsZSA9IG5ldyBWZWN0b3IyKCBzY2FsZSwgLSBzY2FsZSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogVHJhbnNtaXNzaW9uIE1hdGVyaWFscyBFeHRlbnNpb25cclxuXHQgKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uXHJcblx0ICogRHJhZnQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9wdWxsLzE2OThcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBHTFRGTWF0ZXJpYWxzVHJhbnNtaXNzaW9uRXh0ZW5zaW9uKCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XHJcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVFJBTlNNSVNTSU9OO1xyXG5cclxuXHR9XHJcblxyXG5cdEdMVEZNYXRlcmlhbHNUcmFuc21pc3Npb25FeHRlbnNpb24ucHJvdG90eXBlLmdldE1hdGVyaWFsVHlwZSA9IGZ1bmN0aW9uICggbWF0ZXJpYWxJbmRleCApIHtcclxuXHJcblx0XHR2YXIgcGFyc2VyID0gdGhpcy5wYXJzZXI7XHJcblx0XHR2YXIgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcclxuXHJcblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgcmV0dXJuIG51bGw7XHJcblxyXG5cdFx0cmV0dXJuIE1lc2hQaHlzaWNhbE1hdGVyaWFsO1xyXG5cclxuXHR9O1xyXG5cclxuXHRHTFRGTWF0ZXJpYWxzVHJhbnNtaXNzaW9uRXh0ZW5zaW9uLnByb3RvdHlwZS5leHRlbmRNYXRlcmlhbFBhcmFtcyA9IGZ1bmN0aW9uICggbWF0ZXJpYWxJbmRleCwgbWF0ZXJpYWxQYXJhbXMgKSB7XHJcblxyXG5cdFx0dmFyIHBhcnNlciA9IHRoaXMucGFyc2VyO1xyXG5cdFx0dmFyIG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XHJcblxyXG5cdFx0aWYgKCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwgISBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHtcclxuXHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHBlbmRpbmcgPSBbXTtcclxuXHJcblx0XHR2YXIgZXh0ZW5zaW9uID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XHJcblxyXG5cdFx0aWYgKCBleHRlbnNpb24udHJhbnNtaXNzaW9uRmFjdG9yICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy50cmFuc21pc3Npb24gPSBleHRlbnNpb24udHJhbnNtaXNzaW9uRmFjdG9yO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGV4dGVuc2lvbi50cmFuc21pc3Npb25UZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3RyYW5zbWlzc2lvbk1hcCcsIGV4dGVuc2lvbi50cmFuc21pc3Npb25UZXh0dXJlICkgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEJhc2lzVSBUZXh0dXJlIEV4dGVuc2lvblxyXG5cdCAqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX3RleHR1cmVfYmFzaXN1XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gR0xURlRleHR1cmVCYXNpc1VFeHRlbnNpb24oIHBhcnNlciApIHtcclxuXHJcblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcclxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfQkFTSVNVO1xyXG5cclxuXHR9XHJcblxyXG5cdEdMVEZUZXh0dXJlQmFzaXNVRXh0ZW5zaW9uLnByb3RvdHlwZS5sb2FkVGV4dHVyZSA9IGZ1bmN0aW9uICggdGV4dHVyZUluZGV4ICkge1xyXG5cclxuXHRcdHZhciBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcclxuXHRcdHZhciBqc29uID0gcGFyc2VyLmpzb247XHJcblxyXG5cdFx0dmFyIHRleHR1cmVEZWYgPSBqc29uLnRleHR1cmVzWyB0ZXh0dXJlSW5kZXggXTtcclxuXHJcblx0XHRpZiAoICEgdGV4dHVyZURlZi5leHRlbnNpb25zIHx8ICEgdGV4dHVyZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHtcclxuXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgZXh0ZW5zaW9uID0gdGV4dHVyZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcclxuXHRcdHZhciBzb3VyY2UgPSBqc29uLmltYWdlc1sgZXh0ZW5zaW9uLnNvdXJjZSBdO1xyXG5cdFx0dmFyIGxvYWRlciA9IHBhcnNlci5vcHRpb25zLmt0eDJMb2FkZXI7XHJcblxyXG5cdFx0aWYgKCAhIGxvYWRlciApIHtcclxuXHJcblx0XHRcdGlmICgganNvbi5leHRlbnNpb25zUmVxdWlyZWQgJiYganNvbi5leHRlbnNpb25zUmVxdWlyZWQuaW5kZXhPZiggdGhpcy5uYW1lICkgPj0gMCApIHtcclxuXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogc2V0S1RYMkxvYWRlciBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgbG9hZGluZyBLVFgyIHRleHR1cmVzJyApO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0Ly8gQXNzdW1lcyB0aGF0IHRoZSBleHRlbnNpb24gaXMgb3B0aW9uYWwgYW5kIHRoYXQgYSBmYWxsYmFjayB0ZXh0dXJlIGlzIHByZXNlbnRcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBhcnNlci5sb2FkVGV4dHVyZUltYWdlKCB0ZXh0dXJlSW5kZXgsIHNvdXJjZSwgbG9hZGVyICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFdlYlAgVGV4dHVyZSBFeHRlbnNpb25cclxuXHQgKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX3RleHR1cmVfd2VicFxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIEdMVEZUZXh0dXJlV2ViUEV4dGVuc2lvbiggcGFyc2VyICkge1xyXG5cclxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xyXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5FWFRfVEVYVFVSRV9XRUJQO1xyXG5cdFx0dGhpcy5pc1N1cHBvcnRlZCA9IG51bGw7XHJcblxyXG5cdH1cclxuXHJcblx0R0xURlRleHR1cmVXZWJQRXh0ZW5zaW9uLnByb3RvdHlwZS5sb2FkVGV4dHVyZSA9IGZ1bmN0aW9uICggdGV4dHVyZUluZGV4ICkge1xyXG5cclxuXHRcdHZhciBuYW1lID0gdGhpcy5uYW1lO1xyXG5cdFx0dmFyIHBhcnNlciA9IHRoaXMucGFyc2VyO1xyXG5cdFx0dmFyIGpzb24gPSBwYXJzZXIuanNvbjtcclxuXHJcblx0XHR2YXIgdGV4dHVyZURlZiA9IGpzb24udGV4dHVyZXNbIHRleHR1cmVJbmRleCBdO1xyXG5cclxuXHRcdGlmICggISB0ZXh0dXJlRGVmLmV4dGVuc2lvbnMgfHwgISB0ZXh0dXJlRGVmLmV4dGVuc2lvbnNbIG5hbWUgXSApIHtcclxuXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgZXh0ZW5zaW9uID0gdGV4dHVyZURlZi5leHRlbnNpb25zWyBuYW1lIF07XHJcblx0XHR2YXIgc291cmNlID0ganNvbi5pbWFnZXNbIGV4dGVuc2lvbi5zb3VyY2UgXTtcclxuXHJcblx0XHR2YXIgbG9hZGVyID0gcGFyc2VyLnRleHR1cmVMb2FkZXI7XHJcblx0XHRpZiAoIHNvdXJjZS51cmkgKSB7XHJcblxyXG5cdFx0XHR2YXIgaGFuZGxlciA9IHBhcnNlci5vcHRpb25zLm1hbmFnZXIuZ2V0SGFuZGxlciggc291cmNlLnVyaSApO1xyXG5cdFx0XHRpZiAoIGhhbmRsZXIgIT09IG51bGwgKSBsb2FkZXIgPSBoYW5kbGVyO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5kZXRlY3RTdXBwb3J0KCkudGhlbiggZnVuY3Rpb24gKCBpc1N1cHBvcnRlZCApIHtcclxuXHJcblx0XHRcdGlmICggaXNTdXBwb3J0ZWQgKSByZXR1cm4gcGFyc2VyLmxvYWRUZXh0dXJlSW1hZ2UoIHRleHR1cmVJbmRleCwgc291cmNlLCBsb2FkZXIgKTtcclxuXHJcblx0XHRcdGlmICgganNvbi5leHRlbnNpb25zUmVxdWlyZWQgJiYganNvbi5leHRlbnNpb25zUmVxdWlyZWQuaW5kZXhPZiggbmFtZSApID49IDAgKSB7XHJcblxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFdlYlAgcmVxdWlyZWQgYnkgYXNzZXQgYnV0IHVuc3VwcG9ydGVkLicgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEZhbGwgYmFjayB0byBQTkcgb3IgSlBFRy5cclxuXHRcdFx0cmV0dXJuIHBhcnNlci5sb2FkVGV4dHVyZSggdGV4dHVyZUluZGV4ICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9O1xyXG5cclxuXHRHTFRGVGV4dHVyZVdlYlBFeHRlbnNpb24ucHJvdG90eXBlLmRldGVjdFN1cHBvcnQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0aWYgKCAhIHRoaXMuaXNTdXBwb3J0ZWQgKSB7XHJcblxyXG5cdFx0XHR0aGlzLmlzU3VwcG9ydGVkID0gbmV3IFByb21pc2UoIGZ1bmN0aW9uICggcmVzb2x2ZSApIHtcclxuXHJcblx0XHRcdFx0dmFyIGltYWdlID0gbmV3IEltYWdlKCk7XHJcblxyXG5cdFx0XHRcdC8vIExvc3N5IHRlc3QgaW1hZ2UuIFN1cHBvcnQgZm9yIGxvc3N5IGltYWdlcyBkb2Vzbid0IGd1YXJhbnRlZSBzdXBwb3J0IGZvciBhbGxcclxuXHRcdFx0XHQvLyBXZWJQIGltYWdlcywgdW5mb3J0dW5hdGVseS5cclxuXHRcdFx0XHRpbWFnZS5zcmMgPSAnZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmlJQUFBQlhSVUpRVmxBNElCWUFBQUF3QVFDZEFTb0JBQUVBRHNEK0phUUFBM0FBQUFBQSc7XHJcblxyXG5cdFx0XHRcdGltYWdlLm9ubG9hZCA9IGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdFx0cmVzb2x2ZSggaW1hZ2UuaGVpZ2h0ID09PSAxICk7XHJcblxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmlzU3VwcG9ydGVkO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQqIG1lc2hvcHQgQnVmZmVyVmlldyBDb21wcmVzc2lvbiBFeHRlbnNpb25cclxuXHQqXHJcblx0KiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvVmVuZG9yL0VYVF9tZXNob3B0X2NvbXByZXNzaW9uXHJcblx0Ki9cclxuXHRmdW5jdGlvbiBHTFRGTWVzaG9wdENvbXByZXNzaW9uKCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5FWFRfTUVTSE9QVF9DT01QUkVTU0lPTjtcclxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xyXG5cclxuXHR9XHJcblxyXG5cdEdMVEZNZXNob3B0Q29tcHJlc3Npb24ucHJvdG90eXBlLmxvYWRCdWZmZXJWaWV3ID0gZnVuY3Rpb24gKCBpbmRleCApIHtcclxuXHJcblx0XHR2YXIganNvbiA9IHRoaXMucGFyc2VyLmpzb247XHJcblx0XHR2YXIgYnVmZmVyVmlldyA9IGpzb24uYnVmZmVyVmlld3NbIGluZGV4IF07XHJcblxyXG5cdFx0aWYgKCBidWZmZXJWaWV3LmV4dGVuc2lvbnMgJiYgYnVmZmVyVmlldy5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHtcclxuXHJcblx0XHRcdHZhciBleHRlbnNpb25EZWYgPSBidWZmZXJWaWV3LmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xyXG5cclxuXHRcdFx0dmFyIGJ1ZmZlciA9IHRoaXMucGFyc2VyLmdldERlcGVuZGVuY3koICdidWZmZXInLCBleHRlbnNpb25EZWYuYnVmZmVyICk7XHJcblx0XHRcdHZhciBkZWNvZGVyID0gdGhpcy5wYXJzZXIub3B0aW9ucy5tZXNob3B0RGVjb2RlcjtcclxuXHJcblx0XHRcdGlmICggISBkZWNvZGVyIHx8ICEgZGVjb2Rlci5zdXBwb3J0ZWQgKSB7XHJcblxyXG5cdFx0XHRcdGlmICgganNvbi5leHRlbnNpb25zUmVxdWlyZWQgJiYganNvbi5leHRlbnNpb25zUmVxdWlyZWQuaW5kZXhPZiggdGhpcy5uYW1lICkgPj0gMCApIHtcclxuXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBzZXRNZXNob3B0RGVjb2RlciBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgbG9hZGluZyBjb21wcmVzc2VkIGZpbGVzJyApO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdC8vIEFzc3VtZXMgdGhhdCB0aGUgZXh0ZW5zaW9uIGlzIG9wdGlvbmFsIGFuZCB0aGF0IGZhbGxiYWNrIGJ1ZmZlciBkYXRhIGlzIHByZXNlbnRcclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFsgYnVmZmVyLCBkZWNvZGVyLnJlYWR5IF0gKS50aGVuKCBmdW5jdGlvbiAoIHJlcyApIHtcclxuXHJcblx0XHRcdFx0dmFyIGJ5dGVPZmZzZXQgPSBleHRlbnNpb25EZWYuYnl0ZU9mZnNldCB8fCAwO1xyXG5cdFx0XHRcdHZhciBieXRlTGVuZ3RoID0gZXh0ZW5zaW9uRGVmLmJ5dGVMZW5ndGggfHwgMDtcclxuXHJcblx0XHRcdFx0dmFyIGNvdW50ID0gZXh0ZW5zaW9uRGVmLmNvdW50O1xyXG5cdFx0XHRcdHZhciBzdHJpZGUgPSBleHRlbnNpb25EZWYuYnl0ZVN0cmlkZTtcclxuXHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IG5ldyBBcnJheUJ1ZmZlciggY291bnQgKiBzdHJpZGUgKTtcclxuXHRcdFx0XHR2YXIgc291cmNlID0gbmV3IFVpbnQ4QXJyYXkoIHJlc1sgMCBdLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoICk7XHJcblxyXG5cdFx0XHRcdGRlY29kZXIuZGVjb2RlR2x0ZkJ1ZmZlciggbmV3IFVpbnQ4QXJyYXkoIHJlc3VsdCApLCBjb3VudCwgc3RyaWRlLCBzb3VyY2UsIGV4dGVuc2lvbkRlZi5tb2RlLCBleHRlbnNpb25EZWYuZmlsdGVyICk7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHQvKiBCSU5BUlkgRVhURU5TSU9OICovXHJcblx0dmFyIEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX01BR0lDID0gJ2dsVEYnO1xyXG5cdHZhciBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggPSAxMjtcclxuXHR2YXIgQklOQVJZX0VYVEVOU0lPTl9DSFVOS19UWVBFUyA9IHsgSlNPTjogMHg0RTRGNTM0QSwgQklOOiAweDAwNEU0OTQyIH07XHJcblxyXG5cdGZ1bmN0aW9uIEdMVEZCaW5hcnlFeHRlbnNpb24oIGRhdGEgKSB7XHJcblxyXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfQklOQVJZX0dMVEY7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG5cdFx0dGhpcy5ib2R5ID0gbnVsbDtcclxuXHJcblx0XHR2YXIgaGVhZGVyVmlldyA9IG5ldyBEYXRhVmlldyggZGF0YSwgMCwgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIICk7XHJcblxyXG5cdFx0dGhpcy5oZWFkZXIgPSB7XHJcblx0XHRcdG1hZ2ljOiBMb2FkZXJVdGlscy5kZWNvZGVUZXh0KCBuZXcgVWludDhBcnJheSggZGF0YS5zbGljZSggMCwgNCApICkgKSxcclxuXHRcdFx0dmVyc2lvbjogaGVhZGVyVmlldy5nZXRVaW50MzIoIDQsIHRydWUgKSxcclxuXHRcdFx0bGVuZ3RoOiBoZWFkZXJWaWV3LmdldFVpbnQzMiggOCwgdHJ1ZSApXHJcblx0XHR9O1xyXG5cclxuXHRcdGlmICggdGhpcy5oZWFkZXIubWFnaWMgIT09IEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX01BR0lDICkge1xyXG5cclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5zdXBwb3J0ZWQgZ2xURi1CaW5hcnkgaGVhZGVyLicgKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKCB0aGlzLmhlYWRlci52ZXJzaW9uIDwgMi4wICkge1xyXG5cclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogTGVnYWN5IGJpbmFyeSBmaWxlIGRldGVjdGVkLicgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGNodW5rQ29udGVudHNMZW5ndGggPSB0aGlzLmhlYWRlci5sZW5ndGggLSBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEg7XHJcblx0XHR2YXIgY2h1bmtWaWV3ID0gbmV3IERhdGFWaWV3KCBkYXRhLCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggKTtcclxuXHRcdHZhciBjaHVua0luZGV4ID0gMDtcclxuXHJcblx0XHR3aGlsZSAoIGNodW5rSW5kZXggPCBjaHVua0NvbnRlbnRzTGVuZ3RoICkge1xyXG5cclxuXHRcdFx0dmFyIGNodW5rTGVuZ3RoID0gY2h1bmtWaWV3LmdldFVpbnQzMiggY2h1bmtJbmRleCwgdHJ1ZSApO1xyXG5cdFx0XHRjaHVua0luZGV4ICs9IDQ7XHJcblxyXG5cdFx0XHR2YXIgY2h1bmtUeXBlID0gY2h1bmtWaWV3LmdldFVpbnQzMiggY2h1bmtJbmRleCwgdHJ1ZSApO1xyXG5cdFx0XHRjaHVua0luZGV4ICs9IDQ7XHJcblxyXG5cdFx0XHRpZiAoIGNodW5rVHlwZSA9PT0gQklOQVJZX0VYVEVOU0lPTl9DSFVOS19UWVBFUy5KU09OICkge1xyXG5cclxuXHRcdFx0XHR2YXIgY29udGVudEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoIGRhdGEsIEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSCArIGNodW5rSW5kZXgsIGNodW5rTGVuZ3RoICk7XHJcblx0XHRcdFx0dGhpcy5jb250ZW50ID0gTG9hZGVyVXRpbHMuZGVjb2RlVGV4dCggY29udGVudEFycmF5ICk7XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYgKCBjaHVua1R5cGUgPT09IEJJTkFSWV9FWFRFTlNJT05fQ0hVTktfVFlQRVMuQklOICkge1xyXG5cclxuXHRcdFx0XHR2YXIgYnl0ZU9mZnNldCA9IEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSCArIGNodW5rSW5kZXg7XHJcblx0XHRcdFx0dGhpcy5ib2R5ID0gZGF0YS5zbGljZSggYnl0ZU9mZnNldCwgYnl0ZU9mZnNldCArIGNodW5rTGVuZ3RoICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBDbGllbnRzIG11c3QgaWdub3JlIGNodW5rcyB3aXRoIHVua25vd24gdHlwZXMuXHJcblxyXG5cdFx0XHRjaHVua0luZGV4ICs9IGNodW5rTGVuZ3RoO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHRoaXMuY29udGVudCA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IEpTT04gY29udGVudCBub3QgZm91bmQuJyApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBEUkFDTyBNZXNoIENvbXByZXNzaW9uIEV4dGVuc2lvblxyXG5cdCAqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb25cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBHTFRGRHJhY29NZXNoQ29tcHJlc3Npb25FeHRlbnNpb24oIGpzb24sIGRyYWNvTG9hZGVyICkge1xyXG5cclxuXHRcdGlmICggISBkcmFjb0xvYWRlciApIHtcclxuXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IE5vIERSQUNPTG9hZGVyIGluc3RhbmNlIHByb3ZpZGVkLicgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTjtcclxuXHRcdHRoaXMuanNvbiA9IGpzb247XHJcblx0XHR0aGlzLmRyYWNvTG9hZGVyID0gZHJhY29Mb2FkZXI7XHJcblx0XHR0aGlzLmRyYWNvTG9hZGVyLnByZWxvYWQoKTtcclxuXHJcblx0fVxyXG5cclxuXHRHTFRGRHJhY29NZXNoQ29tcHJlc3Npb25FeHRlbnNpb24ucHJvdG90eXBlLmRlY29kZVByaW1pdGl2ZSA9IGZ1bmN0aW9uICggcHJpbWl0aXZlLCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0dmFyIGpzb24gPSB0aGlzLmpzb247XHJcblx0XHR2YXIgZHJhY29Mb2FkZXIgPSB0aGlzLmRyYWNvTG9hZGVyO1xyXG5cdFx0dmFyIGJ1ZmZlclZpZXdJbmRleCA9IHByaW1pdGl2ZS5leHRlbnNpb25zWyB0aGlzLm5hbWUgXS5idWZmZXJWaWV3O1xyXG5cdFx0dmFyIGdsdGZBdHRyaWJ1dGVNYXAgPSBwcmltaXRpdmUuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0uYXR0cmlidXRlcztcclxuXHRcdHZhciB0aHJlZUF0dHJpYnV0ZU1hcCA9IHt9O1xyXG5cdFx0dmFyIGF0dHJpYnV0ZU5vcm1hbGl6ZWRNYXAgPSB7fTtcclxuXHRcdHZhciBhdHRyaWJ1dGVUeXBlTWFwID0ge307XHJcblxyXG5cdFx0Zm9yICggdmFyIGF0dHJpYnV0ZU5hbWUgaW4gZ2x0ZkF0dHJpYnV0ZU1hcCApIHtcclxuXHJcblx0XHRcdHZhciB0aHJlZUF0dHJpYnV0ZU5hbWUgPSBBVFRSSUJVVEVTWyBhdHRyaWJ1dGVOYW1lIF0gfHwgYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdFx0dGhyZWVBdHRyaWJ1dGVNYXBbIHRocmVlQXR0cmlidXRlTmFtZSBdID0gZ2x0ZkF0dHJpYnV0ZU1hcFsgYXR0cmlidXRlTmFtZSBdO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCBhdHRyaWJ1dGVOYW1lIGluIHByaW1pdGl2ZS5hdHRyaWJ1dGVzICkge1xyXG5cclxuXHRcdFx0dmFyIHRocmVlQXR0cmlidXRlTmFtZSA9IEFUVFJJQlVURVNbIGF0dHJpYnV0ZU5hbWUgXSB8fCBhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRpZiAoIGdsdGZBdHRyaWJ1dGVNYXBbIGF0dHJpYnV0ZU5hbWUgXSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHR2YXIgYWNjZXNzb3JEZWYgPSBqc29uLmFjY2Vzc29yc1sgcHJpbWl0aXZlLmF0dHJpYnV0ZXNbIGF0dHJpYnV0ZU5hbWUgXSBdO1xyXG5cdFx0XHRcdHZhciBjb21wb25lbnRUeXBlID0gV0VCR0xfQ09NUE9ORU5UX1RZUEVTWyBhY2Nlc3NvckRlZi5jb21wb25lbnRUeXBlIF07XHJcblxyXG5cdFx0XHRcdGF0dHJpYnV0ZVR5cGVNYXBbIHRocmVlQXR0cmlidXRlTmFtZSBdID0gY29tcG9uZW50VHlwZTtcclxuXHRcdFx0XHRhdHRyaWJ1dGVOb3JtYWxpemVkTWFwWyB0aHJlZUF0dHJpYnV0ZU5hbWUgXSA9IGFjY2Vzc29yRGVmLm5vcm1hbGl6ZWQgPT09IHRydWU7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlclZpZXcnLCBidWZmZXJWaWV3SW5kZXggKS50aGVuKCBmdW5jdGlvbiAoIGJ1ZmZlclZpZXcgKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uICggcmVzb2x2ZSApIHtcclxuXHJcblx0XHRcdFx0ZHJhY29Mb2FkZXIuZGVjb2RlRHJhY29GaWxlKCBidWZmZXJWaWV3LCBmdW5jdGlvbiAoIGdlb21ldHJ5ICkge1xyXG5cclxuXHRcdFx0XHRcdGZvciAoIHZhciBhdHRyaWJ1dGVOYW1lIGluIGdlb21ldHJ5LmF0dHJpYnV0ZXMgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgYXR0cmlidXRlID0gZ2VvbWV0cnkuYXR0cmlidXRlc1sgYXR0cmlidXRlTmFtZSBdO1xyXG5cdFx0XHRcdFx0XHR2YXIgbm9ybWFsaXplZCA9IGF0dHJpYnV0ZU5vcm1hbGl6ZWRNYXBbIGF0dHJpYnV0ZU5hbWUgXTtcclxuXHJcblx0XHRcdFx0XHRcdGlmICggbm9ybWFsaXplZCAhPT0gdW5kZWZpbmVkICkgYXR0cmlidXRlLm5vcm1hbGl6ZWQgPSBub3JtYWxpemVkO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRyZXNvbHZlKCBnZW9tZXRyeSApO1xyXG5cclxuXHRcdFx0XHR9LCB0aHJlZUF0dHJpYnV0ZU1hcCwgYXR0cmlidXRlVHlwZU1hcCApO1xyXG5cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogVGV4dHVyZSBUcmFuc2Zvcm0gRXh0ZW5zaW9uXHJcblx0ICpcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfdGV4dHVyZV90cmFuc2Zvcm1cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBHTFRGVGV4dHVyZVRyYW5zZm9ybUV4dGVuc2lvbigpIHtcclxuXHJcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9URVhUVVJFX1RSQU5TRk9STTtcclxuXHJcblx0fVxyXG5cclxuXHRHTFRGVGV4dHVyZVRyYW5zZm9ybUV4dGVuc2lvbi5wcm90b3R5cGUuZXh0ZW5kVGV4dHVyZSA9IGZ1bmN0aW9uICggdGV4dHVyZSwgdHJhbnNmb3JtICkge1xyXG5cclxuXHRcdHRleHR1cmUgPSB0ZXh0dXJlLmNsb25lKCk7XHJcblxyXG5cdFx0aWYgKCB0cmFuc2Zvcm0ub2Zmc2V0ICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHR0ZXh0dXJlLm9mZnNldC5mcm9tQXJyYXkoIHRyYW5zZm9ybS5vZmZzZXQgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0cmFuc2Zvcm0ucm90YXRpb24gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdHRleHR1cmUucm90YXRpb24gPSB0cmFuc2Zvcm0ucm90YXRpb247XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggdHJhbnNmb3JtLnNjYWxlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHR0ZXh0dXJlLnJlcGVhdC5mcm9tQXJyYXkoIHRyYW5zZm9ybS5zY2FsZSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHRyYW5zZm9ybS50ZXhDb29yZCAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogQ3VzdG9tIFVWIHNldHMgaW4gXCInICsgdGhpcy5uYW1lICsgJ1wiIGV4dGVuc2lvbiBub3QgeWV0IHN1cHBvcnRlZC4nICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdHJldHVybiB0ZXh0dXJlO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTcGVjdWxhci1HbG9zc2luZXNzIEV4dGVuc2lvblxyXG5cdCAqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19wYnJTcGVjdWxhckdsb3NzaW5lc3NcclxuXHQgKi9cclxuXHJcblx0LyoqXHJcblx0ICogQSBzdWIgY2xhc3Mgb2YgU3RhbmRhcmRNYXRlcmlhbCB3aXRoIHNvbWUgb2YgdGhlIGZ1bmN0aW9uYWxpdHlcclxuXHQgKiBjaGFuZ2VkIHZpYSB0aGUgYG9uQmVmb3JlQ29tcGlsZWAgY2FsbGJhY2tcclxuXHQgKiBAcGFpbGhlYWRcclxuXHQgKi9cclxuXHJcblx0ZnVuY3Rpb24gR0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWwoIHBhcmFtcyApIHtcclxuXHJcblx0XHRNZXNoU3RhbmRhcmRNYXRlcmlhbC5jYWxsKCB0aGlzICk7XHJcblxyXG5cdFx0dGhpcy5pc0dMVEZTcGVjdWxhckdsb3NzaW5lc3NNYXRlcmlhbCA9IHRydWU7XHJcblxyXG5cdFx0Ly92YXJpb3VzIGNodW5rcyB0aGF0IG5lZWQgcmVwbGFjaW5nXHJcblx0XHR2YXIgc3BlY3VsYXJNYXBQYXJzRnJhZ21lbnRDaHVuayA9IFtcclxuXHRcdFx0JyNpZmRlZiBVU0VfU1BFQ1VMQVJNQVAnLFxyXG5cdFx0XHQnXHR1bmlmb3JtIHNhbXBsZXIyRCBzcGVjdWxhck1hcDsnLFxyXG5cdFx0XHQnI2VuZGlmJ1xyXG5cdFx0XS5qb2luKCAnXFxuJyApO1xyXG5cclxuXHRcdHZhciBnbG9zc2luZXNzTWFwUGFyc0ZyYWdtZW50Q2h1bmsgPSBbXHJcblx0XHRcdCcjaWZkZWYgVVNFX0dMT1NTSU5FU1NNQVAnLFxyXG5cdFx0XHQnXHR1bmlmb3JtIHNhbXBsZXIyRCBnbG9zc2luZXNzTWFwOycsXHJcblx0XHRcdCcjZW5kaWYnXHJcblx0XHRdLmpvaW4oICdcXG4nICk7XHJcblxyXG5cdFx0dmFyIHNwZWN1bGFyTWFwRnJhZ21lbnRDaHVuayA9IFtcclxuXHRcdFx0J3ZlYzMgc3BlY3VsYXJGYWN0b3IgPSBzcGVjdWxhcjsnLFxyXG5cdFx0XHQnI2lmZGVmIFVTRV9TUEVDVUxBUk1BUCcsXHJcblx0XHRcdCdcdHZlYzQgdGV4ZWxTcGVjdWxhciA9IHRleHR1cmUyRCggc3BlY3VsYXJNYXAsIHZVdiApOycsXHJcblx0XHRcdCdcdHRleGVsU3BlY3VsYXIgPSBzUkdCVG9MaW5lYXIoIHRleGVsU3BlY3VsYXIgKTsnLFxyXG5cdFx0XHQnXHQvLyByZWFkcyBjaGFubmVsIFJHQiwgY29tcGF0aWJsZSB3aXRoIGEgZ2xURiBTcGVjdWxhci1HbG9zc2luZXNzIChSR0JBKSB0ZXh0dXJlJyxcclxuXHRcdFx0J1x0c3BlY3VsYXJGYWN0b3IgKj0gdGV4ZWxTcGVjdWxhci5yZ2I7JyxcclxuXHRcdFx0JyNlbmRpZidcclxuXHRcdF0uam9pbiggJ1xcbicgKTtcclxuXHJcblx0XHR2YXIgZ2xvc3NpbmVzc01hcEZyYWdtZW50Q2h1bmsgPSBbXHJcblx0XHRcdCdmbG9hdCBnbG9zc2luZXNzRmFjdG9yID0gZ2xvc3NpbmVzczsnLFxyXG5cdFx0XHQnI2lmZGVmIFVTRV9HTE9TU0lORVNTTUFQJyxcclxuXHRcdFx0J1x0dmVjNCB0ZXhlbEdsb3NzaW5lc3MgPSB0ZXh0dXJlMkQoIGdsb3NzaW5lc3NNYXAsIHZVdiApOycsXHJcblx0XHRcdCdcdC8vIHJlYWRzIGNoYW5uZWwgQSwgY29tcGF0aWJsZSB3aXRoIGEgZ2xURiBTcGVjdWxhci1HbG9zc2luZXNzIChSR0JBKSB0ZXh0dXJlJyxcclxuXHRcdFx0J1x0Z2xvc3NpbmVzc0ZhY3RvciAqPSB0ZXhlbEdsb3NzaW5lc3MuYTsnLFxyXG5cdFx0XHQnI2VuZGlmJ1xyXG5cdFx0XS5qb2luKCAnXFxuJyApO1xyXG5cclxuXHRcdHZhciBsaWdodFBoeXNpY2FsRnJhZ21lbnRDaHVuayA9IFtcclxuXHRcdFx0J1BoeXNpY2FsTWF0ZXJpYWwgbWF0ZXJpYWw7JyxcclxuXHRcdFx0J21hdGVyaWFsLmRpZmZ1c2VDb2xvciA9IGRpZmZ1c2VDb2xvci5yZ2IgKiAoIDEuIC0gbWF4KCBzcGVjdWxhckZhY3Rvci5yLCBtYXgoIHNwZWN1bGFyRmFjdG9yLmcsIHNwZWN1bGFyRmFjdG9yLmIgKSApICk7JyxcclxuXHRcdFx0J3ZlYzMgZHh5ID0gbWF4KCBhYnMoIGRGZHgoIGdlb21ldHJ5Tm9ybWFsICkgKSwgYWJzKCBkRmR5KCBnZW9tZXRyeU5vcm1hbCApICkgKTsnLFxyXG5cdFx0XHQnZmxvYXQgZ2VvbWV0cnlSb3VnaG5lc3MgPSBtYXgoIG1heCggZHh5LngsIGR4eS55ICksIGR4eS56ICk7JyxcclxuXHRcdFx0J21hdGVyaWFsLnNwZWN1bGFyUm91Z2huZXNzID0gbWF4KCAxLjAgLSBnbG9zc2luZXNzRmFjdG9yLCAwLjA1MjUgKTsgLy8gMC4wNTI1IGNvcnJlc3BvbmRzIHRvIHRoZSBiYXNlIG1pcCBvZiBhIDI1NiBjdWJlbWFwLicsXHJcblx0XHRcdCdtYXRlcmlhbC5zcGVjdWxhclJvdWdobmVzcyArPSBnZW9tZXRyeVJvdWdobmVzczsnLFxyXG5cdFx0XHQnbWF0ZXJpYWwuc3BlY3VsYXJSb3VnaG5lc3MgPSBtaW4oIG1hdGVyaWFsLnNwZWN1bGFyUm91Z2huZXNzLCAxLjAgKTsnLFxyXG5cdFx0XHQnbWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IHNwZWN1bGFyRmFjdG9yOycsXHJcblx0XHRdLmpvaW4oICdcXG4nICk7XHJcblxyXG5cdFx0dmFyIHVuaWZvcm1zID0ge1xyXG5cdFx0XHRzcGVjdWxhcjogeyB2YWx1ZTogbmV3IENvbG9yKCkuc2V0SGV4KCAweGZmZmZmZiApIH0sXHJcblx0XHRcdGdsb3NzaW5lc3M6IHsgdmFsdWU6IDEgfSxcclxuXHRcdFx0c3BlY3VsYXJNYXA6IHsgdmFsdWU6IG51bGwgfSxcclxuXHRcdFx0Z2xvc3NpbmVzc01hcDogeyB2YWx1ZTogbnVsbCB9XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuX2V4dHJhVW5pZm9ybXMgPSB1bmlmb3JtcztcclxuXHJcblx0XHR0aGlzLm9uQmVmb3JlQ29tcGlsZSA9IGZ1bmN0aW9uICggc2hhZGVyICkge1xyXG5cclxuXHRcdFx0Zm9yICggdmFyIHVuaWZvcm1OYW1lIGluIHVuaWZvcm1zICkge1xyXG5cclxuXHRcdFx0XHRzaGFkZXIudW5pZm9ybXNbIHVuaWZvcm1OYW1lIF0gPSB1bmlmb3Jtc1sgdW5pZm9ybU5hbWUgXTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNoYWRlci5mcmFnbWVudFNoYWRlciA9IHNoYWRlci5mcmFnbWVudFNoYWRlclxyXG5cdFx0XHRcdC5yZXBsYWNlKCAndW5pZm9ybSBmbG9hdCByb3VnaG5lc3M7JywgJ3VuaWZvcm0gdmVjMyBzcGVjdWxhcjsnIClcclxuXHRcdFx0XHQucmVwbGFjZSggJ3VuaWZvcm0gZmxvYXQgbWV0YWxuZXNzOycsICd1bmlmb3JtIGZsb2F0IGdsb3NzaW5lc3M7JyApXHJcblx0XHRcdFx0LnJlcGxhY2UoICcjaW5jbHVkZSA8cm91Z2huZXNzbWFwX3BhcnNfZnJhZ21lbnQ+Jywgc3BlY3VsYXJNYXBQYXJzRnJhZ21lbnRDaHVuayApXHJcblx0XHRcdFx0LnJlcGxhY2UoICcjaW5jbHVkZSA8bWV0YWxuZXNzbWFwX3BhcnNfZnJhZ21lbnQ+JywgZ2xvc3NpbmVzc01hcFBhcnNGcmFnbWVudENodW5rIClcclxuXHRcdFx0XHQucmVwbGFjZSggJyNpbmNsdWRlIDxyb3VnaG5lc3NtYXBfZnJhZ21lbnQ+Jywgc3BlY3VsYXJNYXBGcmFnbWVudENodW5rIClcclxuXHRcdFx0XHQucmVwbGFjZSggJyNpbmNsdWRlIDxtZXRhbG5lc3NtYXBfZnJhZ21lbnQ+JywgZ2xvc3NpbmVzc01hcEZyYWdtZW50Q2h1bmsgKVxyXG5cdFx0XHRcdC5yZXBsYWNlKCAnI2luY2x1ZGUgPGxpZ2h0c19waHlzaWNhbF9mcmFnbWVudD4nLCBsaWdodFBoeXNpY2FsRnJhZ21lbnRDaHVuayApO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIHRoaXMsIHtcclxuXHJcblx0XHRcdHNwZWN1bGFyOiB7XHJcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLnNwZWN1bGFyLnZhbHVlO1xyXG5cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldDogZnVuY3Rpb24gKCB2ICkge1xyXG5cclxuXHRcdFx0XHRcdHVuaWZvcm1zLnNwZWN1bGFyLnZhbHVlID0gdjtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0c3BlY3VsYXJNYXA6IHtcclxuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gdW5pZm9ybXMuc3BlY3VsYXJNYXAudmFsdWU7XHJcblxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0OiBmdW5jdGlvbiAoIHYgKSB7XHJcblxyXG5cdFx0XHRcdFx0dW5pZm9ybXMuc3BlY3VsYXJNYXAudmFsdWUgPSB2O1xyXG5cclxuXHRcdFx0XHRcdGlmICggdiApIHtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuZGVmaW5lcy5VU0VfU1BFQ1VMQVJNQVAgPSAnJzsgLy8gVVNFX1VWIGlzIHNldCBieSB0aGUgcmVuZGVyZXIgZm9yIHNwZWN1bGFyIG1hcHNcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZGVmaW5lcy5VU0VfU1BFQ1VMQVJNQVA7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRnbG9zc2luZXNzOiB7XHJcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLmdsb3NzaW5lc3MudmFsdWU7XHJcblxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0OiBmdW5jdGlvbiAoIHYgKSB7XHJcblxyXG5cdFx0XHRcdFx0dW5pZm9ybXMuZ2xvc3NpbmVzcy52YWx1ZSA9IHY7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGdsb3NzaW5lc3NNYXA6IHtcclxuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gdW5pZm9ybXMuZ2xvc3NpbmVzc01hcC52YWx1ZTtcclxuXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uICggdiApIHtcclxuXHJcblx0XHRcdFx0XHR1bmlmb3Jtcy5nbG9zc2luZXNzTWFwLnZhbHVlID0gdjtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHYgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLmRlZmluZXMuVVNFX0dMT1NTSU5FU1NNQVAgPSAnJztcclxuXHRcdFx0XHRcdFx0dGhpcy5kZWZpbmVzLlVTRV9VViA9ICcnO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5kZWZpbmVzLlVTRV9HTE9TU0lORVNTTUFQO1xyXG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5kZWZpbmVzLlVTRV9VVjtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHRkZWxldGUgdGhpcy5tZXRhbG5lc3M7XHJcblx0XHRkZWxldGUgdGhpcy5yb3VnaG5lc3M7XHJcblx0XHRkZWxldGUgdGhpcy5tZXRhbG5lc3NNYXA7XHJcblx0XHRkZWxldGUgdGhpcy5yb3VnaG5lc3NNYXA7XHJcblxyXG5cdFx0dGhpcy5zZXRWYWx1ZXMoIHBhcmFtcyApO1xyXG5cclxuXHR9XHJcblxyXG5cdEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIE1lc2hTdGFuZGFyZE1hdGVyaWFsLnByb3RvdHlwZSApO1xyXG5cdEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsO1xyXG5cclxuXHRHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbC5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICggc291cmNlICkge1xyXG5cclxuXHRcdE1lc2hTdGFuZGFyZE1hdGVyaWFsLnByb3RvdHlwZS5jb3B5LmNhbGwoIHRoaXMsIHNvdXJjZSApO1xyXG5cdFx0dGhpcy5zcGVjdWxhck1hcCA9IHNvdXJjZS5zcGVjdWxhck1hcDtcclxuXHRcdHRoaXMuc3BlY3VsYXIuY29weSggc291cmNlLnNwZWN1bGFyICk7XHJcblx0XHR0aGlzLmdsb3NzaW5lc3NNYXAgPSBzb3VyY2UuZ2xvc3NpbmVzc01hcDtcclxuXHRcdHRoaXMuZ2xvc3NpbmVzcyA9IHNvdXJjZS5nbG9zc2luZXNzO1xyXG5cdFx0ZGVsZXRlIHRoaXMubWV0YWxuZXNzO1xyXG5cdFx0ZGVsZXRlIHRoaXMucm91Z2huZXNzO1xyXG5cdFx0ZGVsZXRlIHRoaXMubWV0YWxuZXNzTWFwO1xyXG5cdFx0ZGVsZXRlIHRoaXMucm91Z2huZXNzTWFwO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdH07XHJcblxyXG5cdGZ1bmN0aW9uIEdMVEZNYXRlcmlhbHNQYnJTcGVjdWxhckdsb3NzaW5lc3NFeHRlbnNpb24oKSB7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHJcblx0XHRcdG5hbWU6IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19QQlJfU1BFQ1VMQVJfR0xPU1NJTkVTUyxcclxuXHJcblx0XHRcdHNwZWN1bGFyR2xvc3NpbmVzc1BhcmFtczogW1xyXG5cdFx0XHRcdCdjb2xvcicsXHJcblx0XHRcdFx0J21hcCcsXHJcblx0XHRcdFx0J2xpZ2h0TWFwJyxcclxuXHRcdFx0XHQnbGlnaHRNYXBJbnRlbnNpdHknLFxyXG5cdFx0XHRcdCdhb01hcCcsXHJcblx0XHRcdFx0J2FvTWFwSW50ZW5zaXR5JyxcclxuXHRcdFx0XHQnZW1pc3NpdmUnLFxyXG5cdFx0XHRcdCdlbWlzc2l2ZUludGVuc2l0eScsXHJcblx0XHRcdFx0J2VtaXNzaXZlTWFwJyxcclxuXHRcdFx0XHQnYnVtcE1hcCcsXHJcblx0XHRcdFx0J2J1bXBTY2FsZScsXHJcblx0XHRcdFx0J25vcm1hbE1hcCcsXHJcblx0XHRcdFx0J25vcm1hbE1hcFR5cGUnLFxyXG5cdFx0XHRcdCdkaXNwbGFjZW1lbnRNYXAnLFxyXG5cdFx0XHRcdCdkaXNwbGFjZW1lbnRTY2FsZScsXHJcblx0XHRcdFx0J2Rpc3BsYWNlbWVudEJpYXMnLFxyXG5cdFx0XHRcdCdzcGVjdWxhck1hcCcsXHJcblx0XHRcdFx0J3NwZWN1bGFyJyxcclxuXHRcdFx0XHQnZ2xvc3NpbmVzc01hcCcsXHJcblx0XHRcdFx0J2dsb3NzaW5lc3MnLFxyXG5cdFx0XHRcdCdhbHBoYU1hcCcsXHJcblx0XHRcdFx0J2Vudk1hcCcsXHJcblx0XHRcdFx0J2Vudk1hcEludGVuc2l0eScsXHJcblx0XHRcdFx0J3JlZnJhY3Rpb25SYXRpbycsXHJcblx0XHRcdF0sXHJcblxyXG5cdFx0XHRnZXRNYXRlcmlhbFR5cGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuIEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsO1xyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGV4dGVuZFBhcmFtczogZnVuY3Rpb24gKCBtYXRlcmlhbFBhcmFtcywgbWF0ZXJpYWxEZWYsIHBhcnNlciApIHtcclxuXHJcblx0XHRcdFx0dmFyIHBiclNwZWN1bGFyR2xvc3NpbmVzcyA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvciA9IG5ldyBDb2xvciggMS4wLCAxLjAsIDEuMCApO1xyXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSAxLjA7XHJcblxyXG5cdFx0XHRcdHZhciBwZW5kaW5nID0gW107XHJcblxyXG5cdFx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggcGJyU3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VGYWN0b3IgKSApIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgYXJyYXkgPSBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZUZhY3RvcjtcclxuXHJcblx0XHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvci5mcm9tQXJyYXkoIGFycmF5ICk7XHJcblx0XHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gYXJyYXlbIDMgXTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIHBiclNwZWN1bGFyR2xvc3NpbmVzcy5kaWZmdXNlVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbWFwJywgcGJyU3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VUZXh0dXJlICkgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5lbWlzc2l2ZSA9IG5ldyBDb2xvciggMC4wLCAwLjAsIDAuMCApO1xyXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmdsb3NzaW5lc3MgPSBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZ2xvc3NpbmVzc0ZhY3RvciAhPT0gdW5kZWZpbmVkID8gcGJyU3BlY3VsYXJHbG9zc2luZXNzLmdsb3NzaW5lc3NGYWN0b3IgOiAxLjA7XHJcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXIgPSBuZXcgQ29sb3IoIDEuMCwgMS4wLCAxLjAgKTtcclxuXHJcblx0XHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBwYnJTcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJGYWN0b3IgKSApIHtcclxuXHJcblx0XHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5zcGVjdWxhci5mcm9tQXJyYXkoIHBiclNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckZhY3RvciApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggcGJyU3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgc3BlY0dsb3NzTWFwRGVmID0gcGJyU3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmU7XHJcblx0XHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2dsb3NzaW5lc3NNYXAnLCBzcGVjR2xvc3NNYXBEZWYgKSApO1xyXG5cdFx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdzcGVjdWxhck1hcCcsIHNwZWNHbG9zc01hcERlZiApICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Y3JlYXRlTWF0ZXJpYWw6IGZ1bmN0aW9uICggbWF0ZXJpYWxQYXJhbXMgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBtYXRlcmlhbCA9IG5ldyBHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbCggbWF0ZXJpYWxQYXJhbXMgKTtcclxuXHRcdFx0XHRtYXRlcmlhbC5mb2cgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbC5jb2xvciA9IG1hdGVyaWFsUGFyYW1zLmNvbG9yO1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbC5tYXAgPSBtYXRlcmlhbFBhcmFtcy5tYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5tYXA7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsLmxpZ2h0TWFwID0gbnVsbDtcclxuXHRcdFx0XHRtYXRlcmlhbC5saWdodE1hcEludGVuc2l0eSA9IDEuMDtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWwuYW9NYXAgPSBtYXRlcmlhbFBhcmFtcy5hb01hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLmFvTWFwO1xyXG5cdFx0XHRcdG1hdGVyaWFsLmFvTWFwSW50ZW5zaXR5ID0gMS4wO1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbC5lbWlzc2l2ZSA9IG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlO1xyXG5cdFx0XHRcdG1hdGVyaWFsLmVtaXNzaXZlSW50ZW5zaXR5ID0gMS4wO1xyXG5cdFx0XHRcdG1hdGVyaWFsLmVtaXNzaXZlTWFwID0gbWF0ZXJpYWxQYXJhbXMuZW1pc3NpdmVNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5lbWlzc2l2ZU1hcDtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWwuYnVtcE1hcCA9IG1hdGVyaWFsUGFyYW1zLmJ1bXBNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5idW1wTWFwO1xyXG5cdFx0XHRcdG1hdGVyaWFsLmJ1bXBTY2FsZSA9IDE7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsLm5vcm1hbE1hcCA9IG1hdGVyaWFsUGFyYW1zLm5vcm1hbE1hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLm5vcm1hbE1hcDtcclxuXHRcdFx0XHRtYXRlcmlhbC5ub3JtYWxNYXBUeXBlID0gVGFuZ2VudFNwYWNlTm9ybWFsTWFwO1xyXG5cclxuXHRcdFx0XHRpZiAoIG1hdGVyaWFsUGFyYW1zLm5vcm1hbFNjYWxlICkgbWF0ZXJpYWwubm9ybWFsU2NhbGUgPSBtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZTtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWwuZGlzcGxhY2VtZW50TWFwID0gbnVsbDtcclxuXHRcdFx0XHRtYXRlcmlhbC5kaXNwbGFjZW1lbnRTY2FsZSA9IDE7XHJcblx0XHRcdFx0bWF0ZXJpYWwuZGlzcGxhY2VtZW50QmlhcyA9IDA7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsLnNwZWN1bGFyTWFwID0gbWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXJNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5zcGVjdWxhck1hcDtcclxuXHRcdFx0XHRtYXRlcmlhbC5zcGVjdWxhciA9IG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyO1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbC5nbG9zc2luZXNzTWFwID0gbWF0ZXJpYWxQYXJhbXMuZ2xvc3NpbmVzc01hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLmdsb3NzaW5lc3NNYXA7XHJcblx0XHRcdFx0bWF0ZXJpYWwuZ2xvc3NpbmVzcyA9IG1hdGVyaWFsUGFyYW1zLmdsb3NzaW5lc3M7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsLmFscGhhTWFwID0gbnVsbDtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWwuZW52TWFwID0gbWF0ZXJpYWxQYXJhbXMuZW52TWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuZW52TWFwO1xyXG5cdFx0XHRcdG1hdGVyaWFsLmVudk1hcEludGVuc2l0eSA9IDEuMDtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWwucmVmcmFjdGlvblJhdGlvID0gMC45ODtcclxuXHJcblx0XHRcdFx0cmV0dXJuIG1hdGVyaWFsO1xyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHR9O1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE1lc2ggUXVhbnRpemF0aW9uIEV4dGVuc2lvblxyXG5cdCAqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21lc2hfcXVhbnRpemF0aW9uXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gR0xURk1lc2hRdWFudGl6YXRpb25FeHRlbnNpb24oKSB7XHJcblxyXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUVTSF9RVUFOVElaQVRJT047XHJcblxyXG5cdH1cclxuXHJcblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHQvKioqKioqKioqKiBJTlRFUlBPTEFUSU9OICoqKioqKioqL1xyXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdC8vIFNwbGluZSBJbnRlcnBvbGF0aW9uXHJcblx0Ly8gU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNhcHBlbmRpeC1jLXNwbGluZS1pbnRlcnBvbGF0aW9uXHJcblx0ZnVuY3Rpb24gR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQoIHBhcmFtZXRlclBvc2l0aW9ucywgc2FtcGxlVmFsdWVzLCBzYW1wbGVTaXplLCByZXN1bHRCdWZmZXIgKSB7XHJcblxyXG5cdFx0SW50ZXJwb2xhbnQuY2FsbCggdGhpcywgcGFyYW1ldGVyUG9zaXRpb25zLCBzYW1wbGVWYWx1ZXMsIHNhbXBsZVNpemUsIHJlc3VsdEJ1ZmZlciApO1xyXG5cclxuXHR9XHJcblxyXG5cdEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEludGVycG9sYW50LnByb3RvdHlwZSApO1xyXG5cdEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50O1xyXG5cclxuXHRHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuY29weVNhbXBsZVZhbHVlXyA9IGZ1bmN0aW9uICggaW5kZXggKSB7XHJcblxyXG5cdFx0Ly8gQ29waWVzIGEgc2FtcGxlIHZhbHVlIHRvIHRoZSByZXN1bHQgYnVmZmVyLiBTZWUgZGVzY3JpcHRpb24gb2YgZ2xURlxyXG5cdFx0Ly8gQ1VCSUNTUExJTkUgdmFsdWVzIGxheW91dCBpbiBpbnRlcnBvbGF0ZV8oKSBmdW5jdGlvbiBiZWxvdy5cclxuXHJcblx0XHR2YXIgcmVzdWx0ID0gdGhpcy5yZXN1bHRCdWZmZXIsXHJcblx0XHRcdHZhbHVlcyA9IHRoaXMuc2FtcGxlVmFsdWVzLFxyXG5cdFx0XHR2YWx1ZVNpemUgPSB0aGlzLnZhbHVlU2l6ZSxcclxuXHRcdFx0b2Zmc2V0ID0gaW5kZXggKiB2YWx1ZVNpemUgKiAzICsgdmFsdWVTaXplO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSAhPT0gdmFsdWVTaXplOyBpICsrICkge1xyXG5cclxuXHRcdFx0cmVzdWx0WyBpIF0gPSB2YWx1ZXNbIG9mZnNldCArIGkgXTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHJcblx0fTtcclxuXHJcblx0R0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmJlZm9yZVN0YXJ0XyA9IEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZS5jb3B5U2FtcGxlVmFsdWVfO1xyXG5cclxuXHRHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuYWZ0ZXJFbmRfID0gR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmNvcHlTYW1wbGVWYWx1ZV87XHJcblxyXG5cdEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZS5pbnRlcnBvbGF0ZV8gPSBmdW5jdGlvbiAoIGkxLCB0MCwgdCwgdDEgKSB7XHJcblxyXG5cdFx0dmFyIHJlc3VsdCA9IHRoaXMucmVzdWx0QnVmZmVyO1xyXG5cdFx0dmFyIHZhbHVlcyA9IHRoaXMuc2FtcGxlVmFsdWVzO1xyXG5cdFx0dmFyIHN0cmlkZSA9IHRoaXMudmFsdWVTaXplO1xyXG5cclxuXHRcdHZhciBzdHJpZGUyID0gc3RyaWRlICogMjtcclxuXHRcdHZhciBzdHJpZGUzID0gc3RyaWRlICogMztcclxuXHJcblx0XHR2YXIgdGQgPSB0MSAtIHQwO1xyXG5cclxuXHRcdHZhciBwID0gKCB0IC0gdDAgKSAvIHRkO1xyXG5cdFx0dmFyIHBwID0gcCAqIHA7XHJcblx0XHR2YXIgcHBwID0gcHAgKiBwO1xyXG5cclxuXHRcdHZhciBvZmZzZXQxID0gaTEgKiBzdHJpZGUzO1xyXG5cdFx0dmFyIG9mZnNldDAgPSBvZmZzZXQxIC0gc3RyaWRlMztcclxuXHJcblx0XHR2YXIgczIgPSAtIDIgKiBwcHAgKyAzICogcHA7XHJcblx0XHR2YXIgczMgPSBwcHAgLSBwcDtcclxuXHRcdHZhciBzMCA9IDEgLSBzMjtcclxuXHRcdHZhciBzMSA9IHMzIC0gcHAgKyBwO1xyXG5cclxuXHRcdC8vIExheW91dCBvZiBrZXlmcmFtZSBvdXRwdXQgdmFsdWVzIGZvciBDVUJJQ1NQTElORSBhbmltYXRpb25zOlxyXG5cdFx0Ly8gICBbIGluVGFuZ2VudF8xLCBzcGxpbmVWZXJ0ZXhfMSwgb3V0VGFuZ2VudF8xLCBpblRhbmdlbnRfMiwgc3BsaW5lVmVydGV4XzIsIC4uLiBdXHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgIT09IHN0cmlkZTsgaSArKyApIHtcclxuXHJcblx0XHRcdHZhciBwMCA9IHZhbHVlc1sgb2Zmc2V0MCArIGkgKyBzdHJpZGUgXTsgLy8gc3BsaW5lVmVydGV4X2tcclxuXHRcdFx0dmFyIG0wID0gdmFsdWVzWyBvZmZzZXQwICsgaSArIHN0cmlkZTIgXSAqIHRkOyAvLyBvdXRUYW5nZW50X2sgKiAodF9rKzEgLSB0X2spXHJcblx0XHRcdHZhciBwMSA9IHZhbHVlc1sgb2Zmc2V0MSArIGkgKyBzdHJpZGUgXTsgLy8gc3BsaW5lVmVydGV4X2srMVxyXG5cdFx0XHR2YXIgbTEgPSB2YWx1ZXNbIG9mZnNldDEgKyBpIF0gKiB0ZDsgLy8gaW5UYW5nZW50X2srMSAqICh0X2srMSAtIHRfaylcclxuXHJcblx0XHRcdHJlc3VsdFsgaSBdID0gczAgKiBwMCArIHMxICogbTAgKyBzMiAqIHAxICsgczMgKiBtMTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHQvKioqKioqKioqKiBJTlRFUk5BTFMgKioqKioqKioqKioqL1xyXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdC8qIENPTlNUQU5UUyAqL1xyXG5cclxuXHR2YXIgV0VCR0xfQ09OU1RBTlRTID0ge1xyXG5cdFx0RkxPQVQ6IDUxMjYsXHJcblx0XHQvL0ZMT0FUX01BVDI6IDM1Njc0LFxyXG5cdFx0RkxPQVRfTUFUMzogMzU2NzUsXHJcblx0XHRGTE9BVF9NQVQ0OiAzNTY3NixcclxuXHRcdEZMT0FUX1ZFQzI6IDM1NjY0LFxyXG5cdFx0RkxPQVRfVkVDMzogMzU2NjUsXHJcblx0XHRGTE9BVF9WRUM0OiAzNTY2NixcclxuXHRcdExJTkVBUjogOTcyOSxcclxuXHRcdFJFUEVBVDogMTA0OTcsXHJcblx0XHRTQU1QTEVSXzJEOiAzNTY3OCxcclxuXHRcdFBPSU5UUzogMCxcclxuXHRcdExJTkVTOiAxLFxyXG5cdFx0TElORV9MT09QOiAyLFxyXG5cdFx0TElORV9TVFJJUDogMyxcclxuXHRcdFRSSUFOR0xFUzogNCxcclxuXHRcdFRSSUFOR0xFX1NUUklQOiA1LFxyXG5cdFx0VFJJQU5HTEVfRkFOOiA2LFxyXG5cdFx0VU5TSUdORURfQllURTogNTEyMSxcclxuXHRcdFVOU0lHTkVEX1NIT1JUOiA1MTIzXHJcblx0fTtcclxuXHJcblx0dmFyIFdFQkdMX0NPTVBPTkVOVF9UWVBFUyA9IHtcclxuXHRcdDUxMjA6IEludDhBcnJheSxcclxuXHRcdDUxMjE6IFVpbnQ4QXJyYXksXHJcblx0XHQ1MTIyOiBJbnQxNkFycmF5LFxyXG5cdFx0NTEyMzogVWludDE2QXJyYXksXHJcblx0XHQ1MTI1OiBVaW50MzJBcnJheSxcclxuXHRcdDUxMjY6IEZsb2F0MzJBcnJheVxyXG5cdH07XHJcblxyXG5cdHZhciBXRUJHTF9GSUxURVJTID0ge1xyXG5cdFx0OTcyODogTmVhcmVzdEZpbHRlcixcclxuXHRcdDk3Mjk6IExpbmVhckZpbHRlcixcclxuXHRcdDk5ODQ6IE5lYXJlc3RNaXBtYXBOZWFyZXN0RmlsdGVyLFxyXG5cdFx0OTk4NTogTGluZWFyTWlwbWFwTmVhcmVzdEZpbHRlcixcclxuXHRcdDk5ODY6IE5lYXJlc3RNaXBtYXBMaW5lYXJGaWx0ZXIsXHJcblx0XHQ5OTg3OiBMaW5lYXJNaXBtYXBMaW5lYXJGaWx0ZXJcclxuXHR9O1xyXG5cclxuXHR2YXIgV0VCR0xfV1JBUFBJTkdTID0ge1xyXG5cdFx0MzMwNzE6IENsYW1wVG9FZGdlV3JhcHBpbmcsXHJcblx0XHQzMzY0ODogTWlycm9yZWRSZXBlYXRXcmFwcGluZyxcclxuXHRcdDEwNDk3OiBSZXBlYXRXcmFwcGluZ1xyXG5cdH07XHJcblxyXG5cdHZhciBXRUJHTF9UWVBFX1NJWkVTID0ge1xyXG5cdFx0J1NDQUxBUic6IDEsXHJcblx0XHQnVkVDMic6IDIsXHJcblx0XHQnVkVDMyc6IDMsXHJcblx0XHQnVkVDNCc6IDQsXHJcblx0XHQnTUFUMic6IDQsXHJcblx0XHQnTUFUMyc6IDksXHJcblx0XHQnTUFUNCc6IDE2XHJcblx0fTtcclxuXHJcblx0dmFyIEFUVFJJQlVURVMgPSB7XHJcblx0XHRQT1NJVElPTjogJ3Bvc2l0aW9uJyxcclxuXHRcdE5PUk1BTDogJ25vcm1hbCcsXHJcblx0XHRUQU5HRU5UOiAndGFuZ2VudCcsXHJcblx0XHRURVhDT09SRF8wOiAndXYnLFxyXG5cdFx0VEVYQ09PUkRfMTogJ3V2MicsXHJcblx0XHRDT0xPUl8wOiAnY29sb3InLFxyXG5cdFx0V0VJR0hUU18wOiAnc2tpbldlaWdodCcsXHJcblx0XHRKT0lOVFNfMDogJ3NraW5JbmRleCcsXHJcblx0fTtcclxuXHJcblx0dmFyIFBBVEhfUFJPUEVSVElFUyA9IHtcclxuXHRcdHNjYWxlOiAnc2NhbGUnLFxyXG5cdFx0dHJhbnNsYXRpb246ICdwb3NpdGlvbicsXHJcblx0XHRyb3RhdGlvbjogJ3F1YXRlcm5pb24nLFxyXG5cdFx0d2VpZ2h0czogJ21vcnBoVGFyZ2V0SW5mbHVlbmNlcydcclxuXHR9O1xyXG5cclxuXHR2YXIgSU5URVJQT0xBVElPTiA9IHtcclxuXHRcdENVQklDU1BMSU5FOiB1bmRlZmluZWQsIC8vIFdlIHVzZSBhIGN1c3RvbSBpbnRlcnBvbGFudCAoR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhdGlvbikgZm9yIENVQklDU1BMSU5FIHRyYWNrcy4gRWFjaFxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2V5ZnJhbWUgdHJhY2sgd2lsbCBiZSBpbml0aWFsaXplZCB3aXRoIGEgZGVmYXVsdCBpbnRlcnBvbGF0aW9uIHR5cGUsIHRoZW4gbW9kaWZpZWQuXHJcblx0XHRMSU5FQVI6IEludGVycG9sYXRlTGluZWFyLFxyXG5cdFx0U1RFUDogSW50ZXJwb2xhdGVEaXNjcmV0ZVxyXG5cdH07XHJcblxyXG5cdHZhciBBTFBIQV9NT0RFUyA9IHtcclxuXHRcdE9QQVFVRTogJ09QQVFVRScsXHJcblx0XHRNQVNLOiAnTUFTSycsXHJcblx0XHRCTEVORDogJ0JMRU5EJ1xyXG5cdH07XHJcblxyXG5cdC8qIFVUSUxJVFkgRlVOQ1RJT05TICovXHJcblxyXG5cdGZ1bmN0aW9uIHJlc29sdmVVUkwoIHVybCwgcGF0aCApIHtcclxuXHJcblx0XHQvLyBJbnZhbGlkIFVSTFxyXG5cdFx0aWYgKCB0eXBlb2YgdXJsICE9PSAnc3RyaW5nJyB8fCB1cmwgPT09ICcnICkgcmV0dXJuICcnO1xyXG5cclxuXHRcdC8vIEhvc3QgUmVsYXRpdmUgVVJMXHJcblx0XHRpZiAoIC9eaHR0cHM/OlxcL1xcLy9pLnRlc3QoIHBhdGggKSAmJiAvXlxcLy8udGVzdCggdXJsICkgKSB7XHJcblxyXG5cdFx0XHRwYXRoID0gcGF0aC5yZXBsYWNlKCAvKF5odHRwcz86XFwvXFwvW15cXC9dKykuKi9pLCAnJDEnICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEFic29sdXRlIFVSTCBodHRwOi8vLGh0dHBzOi8vLC8vXHJcblx0XHRpZiAoIC9eKGh0dHBzPzopP1xcL1xcLy9pLnRlc3QoIHVybCApICkgcmV0dXJuIHVybDtcclxuXHJcblx0XHQvLyBEYXRhIFVSSVxyXG5cdFx0aWYgKCAvXmRhdGE6LiosLiokL2kudGVzdCggdXJsICkgKSByZXR1cm4gdXJsO1xyXG5cclxuXHRcdC8vIEJsb2IgVVJMXHJcblx0XHRpZiAoIC9eYmxvYjouKiQvaS50ZXN0KCB1cmwgKSApIHJldHVybiB1cmw7XHJcblxyXG5cdFx0Ly8gUmVsYXRpdmUgVVJMXHJcblx0XHRyZXR1cm4gcGF0aCArIHVybDtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2RlZmF1bHQtbWF0ZXJpYWxcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBjcmVhdGVEZWZhdWx0TWF0ZXJpYWwoIGNhY2hlICkge1xyXG5cclxuXHRcdGlmICggY2FjaGVbICdEZWZhdWx0TWF0ZXJpYWwnIF0gPT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdGNhY2hlWyAnRGVmYXVsdE1hdGVyaWFsJyBdID0gbmV3IE1lc2hTdGFuZGFyZE1hdGVyaWFsKCB7XHJcblx0XHRcdFx0Y29sb3I6IDB4RkZGRkZGLFxyXG5cdFx0XHRcdGVtaXNzaXZlOiAweDAwMDAwMCxcclxuXHRcdFx0XHRtZXRhbG5lc3M6IDEsXHJcblx0XHRcdFx0cm91Z2huZXNzOiAxLFxyXG5cdFx0XHRcdHRyYW5zcGFyZW50OiBmYWxzZSxcclxuXHRcdFx0XHRkZXB0aFRlc3Q6IHRydWUsXHJcblx0XHRcdFx0c2lkZTogRnJvbnRTaWRlXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNhY2hlWyAnRGVmYXVsdE1hdGVyaWFsJyBdO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSgga25vd25FeHRlbnNpb25zLCBvYmplY3QsIG9iamVjdERlZiApIHtcclxuXHJcblx0XHQvLyBBZGQgdW5rbm93biBnbFRGIGV4dGVuc2lvbnMgdG8gYW4gb2JqZWN0J3MgdXNlckRhdGEuXHJcblxyXG5cdFx0Zm9yICggdmFyIG5hbWUgaW4gb2JqZWN0RGVmLmV4dGVuc2lvbnMgKSB7XHJcblxyXG5cdFx0XHRpZiAoIGtub3duRXh0ZW5zaW9uc1sgbmFtZSBdID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdG9iamVjdC51c2VyRGF0YS5nbHRmRXh0ZW5zaW9ucyA9IG9iamVjdC51c2VyRGF0YS5nbHRmRXh0ZW5zaW9ucyB8fCB7fTtcclxuXHRcdFx0XHRvYmplY3QudXNlckRhdGEuZ2x0ZkV4dGVuc2lvbnNbIG5hbWUgXSA9IG9iamVjdERlZi5leHRlbnNpb25zWyBuYW1lIF07XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0M0R8TWF0ZXJpYWx8QnVmZmVyR2VvbWV0cnl9IG9iamVjdFxyXG5cdCAqIEBwYXJhbSB7R0xURi5kZWZpbml0aW9ufSBnbHRmRGVmXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gYXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggb2JqZWN0LCBnbHRmRGVmICkge1xyXG5cclxuXHRcdGlmICggZ2x0ZkRlZi5leHRyYXMgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdGlmICggdHlwZW9mIGdsdGZEZWYuZXh0cmFzID09PSAnb2JqZWN0JyApIHtcclxuXHJcblx0XHRcdFx0T2JqZWN0LmFzc2lnbiggb2JqZWN0LnVzZXJEYXRhLCBnbHRmRGVmLmV4dHJhcyApO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogSWdub3JpbmcgcHJpbWl0aXZlIHR5cGUgLmV4dHJhcywgJyArIGdsdGZEZWYuZXh0cmFzICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjbW9ycGgtdGFyZ2V0c1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcclxuXHQgKiBAcGFyYW0ge0FycmF5PEdMVEYuVGFyZ2V0Pn0gdGFyZ2V0c1xyXG5cdCAqIEBwYXJhbSB7R0xURlBhcnNlcn0gcGFyc2VyXHJcblx0ICogQHJldHVybiB7UHJvbWlzZTxCdWZmZXJHZW9tZXRyeT59XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gYWRkTW9ycGhUYXJnZXRzKCBnZW9tZXRyeSwgdGFyZ2V0cywgcGFyc2VyICkge1xyXG5cclxuXHRcdHZhciBoYXNNb3JwaFBvc2l0aW9uID0gZmFsc2U7XHJcblx0XHR2YXIgaGFzTW9ycGhOb3JtYWwgPSBmYWxzZTtcclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gdGFyZ2V0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdHZhciB0YXJnZXQgPSB0YXJnZXRzWyBpIF07XHJcblxyXG5cdFx0XHRpZiAoIHRhcmdldC5QT1NJVElPTiAhPT0gdW5kZWZpbmVkICkgaGFzTW9ycGhQb3NpdGlvbiA9IHRydWU7XHJcblx0XHRcdGlmICggdGFyZ2V0Lk5PUk1BTCAhPT0gdW5kZWZpbmVkICkgaGFzTW9ycGhOb3JtYWwgPSB0cnVlO1xyXG5cclxuXHRcdFx0aWYgKCBoYXNNb3JwaFBvc2l0aW9uICYmIGhhc01vcnBoTm9ybWFsICkgYnJlYWs7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggISBoYXNNb3JwaFBvc2l0aW9uICYmICEgaGFzTW9ycGhOb3JtYWwgKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCBnZW9tZXRyeSApO1xyXG5cclxuXHRcdHZhciBwZW5kaW5nUG9zaXRpb25BY2Nlc3NvcnMgPSBbXTtcclxuXHRcdHZhciBwZW5kaW5nTm9ybWFsQWNjZXNzb3JzID0gW107XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IHRhcmdldHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHR2YXIgdGFyZ2V0ID0gdGFyZ2V0c1sgaSBdO1xyXG5cclxuXHRcdFx0aWYgKCBoYXNNb3JwaFBvc2l0aW9uICkge1xyXG5cclxuXHRcdFx0XHR2YXIgcGVuZGluZ0FjY2Vzc29yID0gdGFyZ2V0LlBPU0lUSU9OICE9PSB1bmRlZmluZWRcclxuXHRcdFx0XHRcdD8gcGFyc2VyLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIHRhcmdldC5QT1NJVElPTiApXHJcblx0XHRcdFx0XHQ6IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb247XHJcblxyXG5cdFx0XHRcdHBlbmRpbmdQb3NpdGlvbkFjY2Vzc29ycy5wdXNoKCBwZW5kaW5nQWNjZXNzb3IgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggaGFzTW9ycGhOb3JtYWwgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBwZW5kaW5nQWNjZXNzb3IgPSB0YXJnZXQuTk9STUFMICE9PSB1bmRlZmluZWRcclxuXHRcdFx0XHRcdD8gcGFyc2VyLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIHRhcmdldC5OT1JNQUwgKVxyXG5cdFx0XHRcdFx0OiBnZW9tZXRyeS5hdHRyaWJ1dGVzLm5vcm1hbDtcclxuXHJcblx0XHRcdFx0cGVuZGluZ05vcm1hbEFjY2Vzc29ycy5wdXNoKCBwZW5kaW5nQWNjZXNzb3IgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBbXHJcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nUG9zaXRpb25BY2Nlc3NvcnMgKSxcclxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdOb3JtYWxBY2Nlc3NvcnMgKVxyXG5cdFx0XSApLnRoZW4oIGZ1bmN0aW9uICggYWNjZXNzb3JzICkge1xyXG5cclxuXHRcdFx0dmFyIG1vcnBoUG9zaXRpb25zID0gYWNjZXNzb3JzWyAwIF07XHJcblx0XHRcdHZhciBtb3JwaE5vcm1hbHMgPSBhY2Nlc3NvcnNbIDEgXTtcclxuXHJcblx0XHRcdGlmICggaGFzTW9ycGhQb3NpdGlvbiApIGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcy5wb3NpdGlvbiA9IG1vcnBoUG9zaXRpb25zO1xyXG5cdFx0XHRpZiAoIGhhc01vcnBoTm9ybWFsICkgZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLm5vcm1hbCA9IG1vcnBoTm9ybWFscztcclxuXHRcdFx0Z2VvbWV0cnkubW9ycGhUYXJnZXRzUmVsYXRpdmUgPSB0cnVlO1xyXG5cclxuXHRcdFx0cmV0dXJuIGdlb21ldHJ5O1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge01lc2h9IG1lc2hcclxuXHQgKiBAcGFyYW0ge0dMVEYuTWVzaH0gbWVzaERlZlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHVwZGF0ZU1vcnBoVGFyZ2V0cyggbWVzaCwgbWVzaERlZiApIHtcclxuXHJcblx0XHRtZXNoLnVwZGF0ZU1vcnBoVGFyZ2V0cygpO1xyXG5cclxuXHRcdGlmICggbWVzaERlZi53ZWlnaHRzICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gbWVzaERlZi53ZWlnaHRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRtZXNoLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1sgaSBdID0gbWVzaERlZi53ZWlnaHRzWyBpIF07XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIC5leHRyYXMgaGFzIHVzZXItZGVmaW5lZCBkYXRhLCBzbyBjaGVjayB0aGF0IC5leHRyYXMudGFyZ2V0TmFtZXMgaXMgYW4gYXJyYXkuXHJcblx0XHRpZiAoIG1lc2hEZWYuZXh0cmFzICYmIEFycmF5LmlzQXJyYXkoIG1lc2hEZWYuZXh0cmFzLnRhcmdldE5hbWVzICkgKSB7XHJcblxyXG5cdFx0XHR2YXIgdGFyZ2V0TmFtZXMgPSBtZXNoRGVmLmV4dHJhcy50YXJnZXROYW1lcztcclxuXHJcblx0XHRcdGlmICggbWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXMubGVuZ3RoID09PSB0YXJnZXROYW1lcy5sZW5ndGggKSB7XHJcblxyXG5cdFx0XHRcdG1lc2gubW9ycGhUYXJnZXREaWN0aW9uYXJ5ID0ge307XHJcblxyXG5cdFx0XHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSB0YXJnZXROYW1lcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0XHRtZXNoLm1vcnBoVGFyZ2V0RGljdGlvbmFyeVsgdGFyZ2V0TmFtZXNbIGkgXSBdID0gaTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogSW52YWxpZCBleHRyYXMudGFyZ2V0TmFtZXMgbGVuZ3RoLiBJZ25vcmluZyBuYW1lcy4nICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZUtleSggcHJpbWl0aXZlRGVmICkge1xyXG5cclxuXHRcdHZhciBkcmFjb0V4dGVuc2lvbiA9IHByaW1pdGl2ZURlZi5leHRlbnNpb25zICYmIHByaW1pdGl2ZURlZi5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OIF07XHJcblx0XHR2YXIgZ2VvbWV0cnlLZXk7XHJcblxyXG5cdFx0aWYgKCBkcmFjb0V4dGVuc2lvbiApIHtcclxuXHJcblx0XHRcdGdlb21ldHJ5S2V5ID0gJ2RyYWNvOicgKyBkcmFjb0V4dGVuc2lvbi5idWZmZXJWaWV3XHJcblx0XHRcdFx0KyAnOicgKyBkcmFjb0V4dGVuc2lvbi5pbmRpY2VzXHJcblx0XHRcdFx0KyAnOicgKyBjcmVhdGVBdHRyaWJ1dGVzS2V5KCBkcmFjb0V4dGVuc2lvbi5hdHRyaWJ1dGVzICk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdGdlb21ldHJ5S2V5ID0gcHJpbWl0aXZlRGVmLmluZGljZXMgKyAnOicgKyBjcmVhdGVBdHRyaWJ1dGVzS2V5KCBwcmltaXRpdmVEZWYuYXR0cmlidXRlcyApICsgJzonICsgcHJpbWl0aXZlRGVmLm1vZGU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBnZW9tZXRyeUtleTtcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVzS2V5KCBhdHRyaWJ1dGVzICkge1xyXG5cclxuXHRcdHZhciBhdHRyaWJ1dGVzS2V5ID0gJyc7XHJcblxyXG5cdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyggYXR0cmlidXRlcyApLnNvcnQoKTtcclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0ga2V5cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdGF0dHJpYnV0ZXNLZXkgKz0ga2V5c1sgaSBdICsgJzonICsgYXR0cmlidXRlc1sga2V5c1sgaSBdIF0gKyAnOyc7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBhdHRyaWJ1dGVzS2V5O1xyXG5cclxuXHR9XHJcblxyXG5cdC8qIEdMVEYgUEFSU0VSICovXHJcblxyXG5cdGZ1bmN0aW9uIEdMVEZQYXJzZXIoIGpzb24sIG9wdGlvbnMgKSB7XHJcblxyXG5cdFx0dGhpcy5qc29uID0ganNvbiB8fCB7fTtcclxuXHRcdHRoaXMuZXh0ZW5zaW9ucyA9IHt9O1xyXG5cdFx0dGhpcy5wbHVnaW5zID0ge307XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuXHRcdC8vIGxvYWRlciBvYmplY3QgY2FjaGVcclxuXHRcdHRoaXMuY2FjaGUgPSBuZXcgR0xURlJlZ2lzdHJ5KCk7XHJcblxyXG5cdFx0Ly8gYXNzb2NpYXRpb25zIGJldHdlZW4gVGhyZWUuanMgb2JqZWN0cyBhbmQgZ2xURiBlbGVtZW50c1xyXG5cdFx0dGhpcy5hc3NvY2lhdGlvbnMgPSBuZXcgTWFwKCk7XHJcblxyXG5cdFx0Ly8gQnVmZmVyR2VvbWV0cnkgY2FjaGluZ1xyXG5cdFx0dGhpcy5wcmltaXRpdmVDYWNoZSA9IHt9O1xyXG5cclxuXHRcdC8vIE9iamVjdDNEIGluc3RhbmNlIGNhY2hlc1xyXG5cdFx0dGhpcy5tZXNoQ2FjaGUgPSB7IHJlZnM6IHt9LCB1c2VzOiB7fSB9O1xyXG5cdFx0dGhpcy5jYW1lcmFDYWNoZSA9IHsgcmVmczoge30sIHVzZXM6IHt9IH07XHJcblx0XHR0aGlzLmxpZ2h0Q2FjaGUgPSB7IHJlZnM6IHt9LCB1c2VzOiB7fSB9O1xyXG5cclxuXHRcdC8vIFRyYWNrIG5vZGUgbmFtZXMsIHRvIGVuc3VyZSBubyBkdXBsaWNhdGVzXHJcblx0XHR0aGlzLm5vZGVOYW1lc1VzZWQgPSB7fTtcclxuXHJcblx0XHQvLyBVc2UgYW4gSW1hZ2VCaXRtYXBMb2FkZXIgaWYgaW1hZ2VCaXRtYXBzIGFyZSBzdXBwb3J0ZWQuIE1vdmVzIG11Y2ggb2YgdGhlXHJcblx0XHQvLyBleHBlbnNpdmUgd29yayBvZiB1cGxvYWRpbmcgYSB0ZXh0dXJlIHRvIHRoZSBHUFUgb2ZmIHRoZSBtYWluIHRocmVhZC5cclxuXHRcdGlmICggdHlwZW9mIGNyZWF0ZUltYWdlQml0bWFwICE9PSAndW5kZWZpbmVkJyAmJiAvRmlyZWZveC8udGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApID09PSBmYWxzZSApIHtcclxuXHJcblx0XHRcdHRoaXMudGV4dHVyZUxvYWRlciA9IG5ldyBJbWFnZUJpdG1hcExvYWRlciggdGhpcy5vcHRpb25zLm1hbmFnZXIgKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0dGhpcy50ZXh0dXJlTG9hZGVyID0gbmV3IFRleHR1cmVMb2FkZXIoIHRoaXMub3B0aW9ucy5tYW5hZ2VyICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudGV4dHVyZUxvYWRlci5zZXRDcm9zc09yaWdpbiggdGhpcy5vcHRpb25zLmNyb3NzT3JpZ2luICk7XHJcblx0XHR0aGlzLnRleHR1cmVMb2FkZXIuc2V0UmVxdWVzdEhlYWRlciggdGhpcy5vcHRpb25zLnJlcXVlc3RIZWFkZXIgKTtcclxuXHJcblx0XHR0aGlzLmZpbGVMb2FkZXIgPSBuZXcgRmlsZUxvYWRlciggdGhpcy5vcHRpb25zLm1hbmFnZXIgKTtcclxuXHRcdHRoaXMuZmlsZUxvYWRlci5zZXRSZXNwb25zZVR5cGUoICdhcnJheWJ1ZmZlcicgKTtcclxuXHJcblx0XHRpZiAoIHRoaXMub3B0aW9ucy5jcm9zc09yaWdpbiA9PT0gJ3VzZS1jcmVkZW50aWFscycgKSB7XHJcblxyXG5cdFx0XHR0aGlzLmZpbGVMb2FkZXIuc2V0V2l0aENyZWRlbnRpYWxzKCB0cnVlICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLnNldEV4dGVuc2lvbnMgPSBmdW5jdGlvbiAoIGV4dGVuc2lvbnMgKSB7XHJcblxyXG5cdFx0dGhpcy5leHRlbnNpb25zID0gZXh0ZW5zaW9ucztcclxuXHJcblx0fTtcclxuXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUuc2V0UGx1Z2lucyA9IGZ1bmN0aW9uICggcGx1Z2lucyApIHtcclxuXHJcblx0XHR0aGlzLnBsdWdpbnMgPSBwbHVnaW5zO1xyXG5cclxuXHR9O1xyXG5cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uICggb25Mb2FkLCBvbkVycm9yICkge1xyXG5cclxuXHRcdHZhciBwYXJzZXIgPSB0aGlzO1xyXG5cdFx0dmFyIGpzb24gPSB0aGlzLmpzb247XHJcblx0XHR2YXIgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcclxuXHJcblx0XHQvLyBDbGVhciB0aGUgbG9hZGVyIGNhY2hlXHJcblx0XHR0aGlzLmNhY2hlLnJlbW92ZUFsbCgpO1xyXG5cclxuXHRcdC8vIE1hcmsgdGhlIHNwZWNpYWwgbm9kZXMvbWVzaGVzIGluIGpzb24gZm9yIGVmZmljaWVudCBwYXJzZVxyXG5cdFx0dGhpcy5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcclxuXHJcblx0XHRcdHJldHVybiBleHQuX21hcmtEZWZzICYmIGV4dC5fbWFya0RlZnMoKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0UHJvbWlzZS5hbGwoIHRoaXMuX2ludm9rZUFsbCggZnVuY3Rpb24gKCBleHQgKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gZXh0LmJlZm9yZVJvb3QgJiYgZXh0LmJlZm9yZVJvb3QoKTtcclxuXHJcblx0XHR9ICkgKS50aGVuKCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFtcclxuXHJcblx0XHRcdFx0cGFyc2VyLmdldERlcGVuZGVuY2llcyggJ3NjZW5lJyApLFxyXG5cdFx0XHRcdHBhcnNlci5nZXREZXBlbmRlbmNpZXMoICdhbmltYXRpb24nICksXHJcblx0XHRcdFx0cGFyc2VyLmdldERlcGVuZGVuY2llcyggJ2NhbWVyYScgKSxcclxuXHJcblx0XHRcdF0gKTtcclxuXHJcblx0XHR9ICkudGhlbiggZnVuY3Rpb24gKCBkZXBlbmRlbmNpZXMgKSB7XHJcblxyXG5cdFx0XHR2YXIgcmVzdWx0ID0ge1xyXG5cdFx0XHRcdHNjZW5lOiBkZXBlbmRlbmNpZXNbIDAgXVsganNvbi5zY2VuZSB8fCAwIF0sXHJcblx0XHRcdFx0c2NlbmVzOiBkZXBlbmRlbmNpZXNbIDAgXSxcclxuXHRcdFx0XHRhbmltYXRpb25zOiBkZXBlbmRlbmNpZXNbIDEgXSxcclxuXHRcdFx0XHRjYW1lcmFzOiBkZXBlbmRlbmNpZXNbIDIgXSxcclxuXHRcdFx0XHRhc3NldDoganNvbi5hc3NldCxcclxuXHRcdFx0XHRwYXJzZXI6IHBhcnNlcixcclxuXHRcdFx0XHR1c2VyRGF0YToge31cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSggZXh0ZW5zaW9ucywgcmVzdWx0LCBqc29uICk7XHJcblxyXG5cdFx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCByZXN1bHQsIGpzb24gKTtcclxuXHJcblx0XHRcdFByb21pc2UuYWxsKCBwYXJzZXIuX2ludm9rZUFsbCggZnVuY3Rpb24gKCBleHQgKSB7XHJcblxyXG5cdFx0XHRcdHJldHVybiBleHQuYWZ0ZXJSb290ICYmIGV4dC5hZnRlclJvb3QoIHJlc3VsdCApO1xyXG5cclxuXHRcdFx0fSApICkudGhlbiggZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRvbkxvYWQoIHJlc3VsdCApO1xyXG5cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH0gKS5jYXRjaCggb25FcnJvciApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBNYXJrcyB0aGUgc3BlY2lhbCBub2Rlcy9tZXNoZXMgaW4ganNvbiBmb3IgZWZmaWNpZW50IHBhcnNlLlxyXG5cdCAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLl9tYXJrRGVmcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHR2YXIgbm9kZURlZnMgPSB0aGlzLmpzb24ubm9kZXMgfHwgW107XHJcblx0XHR2YXIgc2tpbkRlZnMgPSB0aGlzLmpzb24uc2tpbnMgfHwgW107XHJcblx0XHR2YXIgbWVzaERlZnMgPSB0aGlzLmpzb24ubWVzaGVzIHx8IFtdO1xyXG5cclxuXHRcdC8vIE5vdGhpbmcgaW4gdGhlIG5vZGUgZGVmaW5pdGlvbiBpbmRpY2F0ZXMgd2hldGhlciBpdCBpcyBhIEJvbmUgb3IgYW5cclxuXHRcdC8vIE9iamVjdDNELiBVc2UgdGhlIHNraW5zJyBqb2ludCByZWZlcmVuY2VzIHRvIG1hcmsgYm9uZXMuXHJcblx0XHRmb3IgKCB2YXIgc2tpbkluZGV4ID0gMCwgc2tpbkxlbmd0aCA9IHNraW5EZWZzLmxlbmd0aDsgc2tpbkluZGV4IDwgc2tpbkxlbmd0aDsgc2tpbkluZGV4ICsrICkge1xyXG5cclxuXHRcdFx0dmFyIGpvaW50cyA9IHNraW5EZWZzWyBza2luSW5kZXggXS5qb2ludHM7XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gam9pbnRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRub2RlRGVmc1sgam9pbnRzWyBpIF0gXS5pc0JvbmUgPSB0cnVlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBJdGVyYXRlIG92ZXIgYWxsIG5vZGVzLCBtYXJraW5nIHJlZmVyZW5jZXMgdG8gc2hhcmVkIHJlc291cmNlcyxcclxuXHRcdC8vIGFzIHdlbGwgYXMgc2tlbGV0b24gam9pbnRzLlxyXG5cdFx0Zm9yICggdmFyIG5vZGVJbmRleCA9IDAsIG5vZGVMZW5ndGggPSBub2RlRGVmcy5sZW5ndGg7IG5vZGVJbmRleCA8IG5vZGVMZW5ndGg7IG5vZGVJbmRleCArKyApIHtcclxuXHJcblx0XHRcdHZhciBub2RlRGVmID0gbm9kZURlZnNbIG5vZGVJbmRleCBdO1xyXG5cclxuXHRcdFx0aWYgKCBub2RlRGVmLm1lc2ggIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0dGhpcy5fYWRkTm9kZVJlZiggdGhpcy5tZXNoQ2FjaGUsIG5vZGVEZWYubWVzaCApO1xyXG5cclxuXHRcdFx0XHQvLyBOb3RoaW5nIGluIHRoZSBtZXNoIGRlZmluaXRpb24gaW5kaWNhdGVzIHdoZXRoZXIgaXQgaXNcclxuXHRcdFx0XHQvLyBhIFNraW5uZWRNZXNoIG9yIE1lc2guIFVzZSB0aGUgbm9kZSdzIG1lc2ggcmVmZXJlbmNlXHJcblx0XHRcdFx0Ly8gdG8gbWFyayBTa2lubmVkTWVzaCBpZiBub2RlIGhhcyBza2luLlxyXG5cdFx0XHRcdGlmICggbm9kZURlZi5za2luICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0bWVzaERlZnNbIG5vZGVEZWYubWVzaCBdLmlzU2tpbm5lZE1lc2ggPSB0cnVlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIG5vZGVEZWYuY2FtZXJhICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuX2FkZE5vZGVSZWYoIHRoaXMuY2FtZXJhQ2FjaGUsIG5vZGVEZWYuY2FtZXJhICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBDb3VudHMgcmVmZXJlbmNlcyB0byBzaGFyZWQgbm9kZSAvIE9iamVjdDNEIHJlc291cmNlcy4gVGhlc2UgcmVzb3VyY2VzXHJcblx0ICogY2FuIGJlIHJldXNlZCwgb3IgXCJpbnN0YW50aWF0ZWRcIiwgYXQgbXVsdGlwbGUgbm9kZXMgaW4gdGhlIHNjZW5lXHJcblx0ICogaGllcmFyY2h5LiBNZXNoLCBDYW1lcmEsIGFuZCBMaWdodCBpbnN0YW5jZXMgYXJlIGluc3RhbnRpYXRlZCBhbmQgbXVzdFxyXG5cdCAqIGJlIG1hcmtlZC4gTm9uLXNjZW5lZ3JhcGggcmVzb3VyY2VzIChsaWtlIE1hdGVyaWFscywgR2VvbWV0cmllcywgYW5kXHJcblx0ICogVGV4dHVyZXMpIGNhbiBiZSByZXVzZWQgZGlyZWN0bHkgYW5kIGFyZSBub3QgbWFya2VkIGhlcmUuXHJcblx0ICpcclxuXHQgKiBFeGFtcGxlOiBDZXNpdW1NaWxrVHJ1Y2sgc2FtcGxlIG1vZGVsIHJldXNlcyBcIldoZWVsXCIgbWVzaGVzLlxyXG5cdCAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLl9hZGROb2RlUmVmID0gZnVuY3Rpb24gKCBjYWNoZSwgaW5kZXggKSB7XHJcblxyXG5cdFx0aWYgKCBpbmRleCA9PT0gdW5kZWZpbmVkICkgcmV0dXJuO1xyXG5cclxuXHRcdGlmICggY2FjaGUucmVmc1sgaW5kZXggXSA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0Y2FjaGUucmVmc1sgaW5kZXggXSA9IGNhY2hlLnVzZXNbIGluZGV4IF0gPSAwO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRjYWNoZS5yZWZzWyBpbmRleCBdICsrO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKiogUmV0dXJucyBhIHJlZmVyZW5jZSB0byBhIHNoYXJlZCByZXNvdXJjZSwgY2xvbmluZyBpdCBpZiBuZWNlc3NhcnkuICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUuX2dldE5vZGVSZWYgPSBmdW5jdGlvbiAoIGNhY2hlLCBpbmRleCwgb2JqZWN0ICkge1xyXG5cclxuXHRcdGlmICggY2FjaGUucmVmc1sgaW5kZXggXSA8PSAxICkgcmV0dXJuIG9iamVjdDtcclxuXHJcblx0XHR2YXIgcmVmID0gb2JqZWN0LmNsb25lKCk7XHJcblxyXG5cdFx0cmVmLm5hbWUgKz0gJ19pbnN0YW5jZV8nICsgKCBjYWNoZS51c2VzWyBpbmRleCBdICsrICk7XHJcblxyXG5cdFx0cmV0dXJuIHJlZjtcclxuXHJcblx0fTtcclxuXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUuX2ludm9rZU9uZSA9IGZ1bmN0aW9uICggZnVuYyApIHtcclxuXHJcblx0XHR2YXIgZXh0ZW5zaW9ucyA9IE9iamVjdC52YWx1ZXMoIHRoaXMucGx1Z2lucyApO1xyXG5cdFx0ZXh0ZW5zaW9ucy5wdXNoKCB0aGlzICk7XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkgKysgKSB7XHJcblxyXG5cdFx0XHR2YXIgcmVzdWx0ID0gZnVuYyggZXh0ZW5zaW9uc1sgaSBdICk7XHJcblxyXG5cdFx0XHRpZiAoIHJlc3VsdCApIHJldHVybiByZXN1bHQ7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5faW52b2tlQWxsID0gZnVuY3Rpb24gKCBmdW5jICkge1xyXG5cclxuXHRcdHZhciBleHRlbnNpb25zID0gT2JqZWN0LnZhbHVlcyggdGhpcy5wbHVnaW5zICk7XHJcblx0XHRleHRlbnNpb25zLnVuc2hpZnQoIHRoaXMgKTtcclxuXHJcblx0XHR2YXIgcGVuZGluZyA9IFtdO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpICsrICkge1xyXG5cclxuXHRcdFx0dmFyIHJlc3VsdCA9IGZ1bmMoIGV4dGVuc2lvbnNbIGkgXSApO1xyXG5cclxuXHRcdFx0aWYgKCByZXN1bHQgKSBwZW5kaW5nLnB1c2goIHJlc3VsdCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcGVuZGluZztcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdHMgdGhlIHNwZWNpZmllZCBkZXBlbmRlbmN5IGFzeW5jaHJvbm91c2x5LCB3aXRoIGNhY2hpbmcuXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdDNEfE1hdGVyaWFsfFRIUkVFLlRleHR1cmV8QW5pbWF0aW9uQ2xpcHxBcnJheUJ1ZmZlcnxPYmplY3Q+fVxyXG5cdCAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmdldERlcGVuZGVuY3kgPSBmdW5jdGlvbiAoIHR5cGUsIGluZGV4ICkge1xyXG5cclxuXHRcdHZhciBjYWNoZUtleSA9IHR5cGUgKyAnOicgKyBpbmRleDtcclxuXHRcdHZhciBkZXBlbmRlbmN5ID0gdGhpcy5jYWNoZS5nZXQoIGNhY2hlS2V5ICk7XHJcblxyXG5cdFx0aWYgKCAhIGRlcGVuZGVuY3kgKSB7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKCB0eXBlICkge1xyXG5cclxuXHRcdFx0XHRjYXNlICdzY2VuZSc6XHJcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkU2NlbmUoIGluZGV4ICk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAnbm9kZSc6XHJcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkTm9kZSggaW5kZXggKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdtZXNoJzpcclxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIGV4dC5sb2FkTWVzaCAmJiBleHQubG9hZE1lc2goIGluZGV4ICk7XHJcblxyXG5cdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ2FjY2Vzc29yJzpcclxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRBY2Nlc3NvciggaW5kZXggKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdidWZmZXJWaWV3JzpcclxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIGV4dC5sb2FkQnVmZmVyVmlldyAmJiBleHQubG9hZEJ1ZmZlclZpZXcoIGluZGV4ICk7XHJcblxyXG5cdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ2J1ZmZlcic6XHJcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkQnVmZmVyKCBpbmRleCApO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ21hdGVyaWFsJzpcclxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIGV4dC5sb2FkTWF0ZXJpYWwgJiYgZXh0LmxvYWRNYXRlcmlhbCggaW5kZXggKTtcclxuXHJcblx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAndGV4dHVyZSc6XHJcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiBleHQubG9hZFRleHR1cmUgJiYgZXh0LmxvYWRUZXh0dXJlKCBpbmRleCApO1xyXG5cclxuXHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdza2luJzpcclxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRTa2luKCBpbmRleCApO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ2FuaW1hdGlvbic6XHJcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkQW5pbWF0aW9uKCBpbmRleCApO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ2NhbWVyYSc6XHJcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkQ2FtZXJhKCBpbmRleCApO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdVbmtub3duIHR5cGU6ICcgKyB0eXBlICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmNhY2hlLmFkZCggY2FjaGVLZXksIGRlcGVuZGVuY3kgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRlcGVuZGVuY3k7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlcXVlc3RzIGFsbCBkZXBlbmRlbmNpZXMgb2YgdGhlIHNwZWNpZmllZCB0eXBlIGFzeW5jaHJvbm91c2x5LCB3aXRoIGNhY2hpbmcuXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5PE9iamVjdD4+fVxyXG5cdCAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmdldERlcGVuZGVuY2llcyA9IGZ1bmN0aW9uICggdHlwZSApIHtcclxuXHJcblx0XHR2YXIgZGVwZW5kZW5jaWVzID0gdGhpcy5jYWNoZS5nZXQoIHR5cGUgKTtcclxuXHJcblx0XHRpZiAoICEgZGVwZW5kZW5jaWVzICkge1xyXG5cclxuXHRcdFx0dmFyIHBhcnNlciA9IHRoaXM7XHJcblx0XHRcdHZhciBkZWZzID0gdGhpcy5qc29uWyB0eXBlICsgKCB0eXBlID09PSAnbWVzaCcgPyAnZXMnIDogJ3MnICkgXSB8fCBbXTtcclxuXHJcblx0XHRcdGRlcGVuZGVuY2llcyA9IFByb21pc2UuYWxsKCBkZWZzLm1hcCggZnVuY3Rpb24gKCBkZWYsIGluZGV4ICkge1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koIHR5cGUsIGluZGV4ICk7XHJcblxyXG5cdFx0XHR9ICkgKTtcclxuXHJcblx0XHRcdHRoaXMuY2FjaGUuYWRkKCB0eXBlLCBkZXBlbmRlbmNpZXMgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRlcGVuZGVuY2llcztcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNidWZmZXJzLWFuZC1idWZmZXItdmlld3NcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gYnVmZmVySW5kZXhcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5QnVmZmVyPn1cclxuXHQgKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkQnVmZmVyID0gZnVuY3Rpb24gKCBidWZmZXJJbmRleCApIHtcclxuXHJcblx0XHR2YXIgYnVmZmVyRGVmID0gdGhpcy5qc29uLmJ1ZmZlcnNbIGJ1ZmZlckluZGV4IF07XHJcblx0XHR2YXIgbG9hZGVyID0gdGhpcy5maWxlTG9hZGVyO1xyXG5cclxuXHRcdGlmICggYnVmZmVyRGVmLnR5cGUgJiYgYnVmZmVyRGVmLnR5cGUgIT09ICdhcnJheWJ1ZmZlcicgKSB7XHJcblxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiAnICsgYnVmZmVyRGVmLnR5cGUgKyAnIGJ1ZmZlciB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQuJyApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBJZiBwcmVzZW50LCBHTEIgY29udGFpbmVyIGlzIHJlcXVpcmVkIHRvIGJlIHRoZSBmaXJzdCBidWZmZXIuXHJcblx0XHRpZiAoIGJ1ZmZlckRlZi51cmkgPT09IHVuZGVmaW5lZCAmJiBidWZmZXJJbmRleCA9PT0gMCApIHtcclxuXHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoIHRoaXMuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfQklOQVJZX0dMVEYgXS5ib2R5ICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24gKCByZXNvbHZlLCByZWplY3QgKSB7XHJcblxyXG5cdFx0XHRsb2FkZXIubG9hZCggcmVzb2x2ZVVSTCggYnVmZmVyRGVmLnVyaSwgb3B0aW9ucy5wYXRoICksIHJlc29sdmUsIHVuZGVmaW5lZCwgZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRyZWplY3QoIG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IEZhaWxlZCB0byBsb2FkIGJ1ZmZlciBcIicgKyBidWZmZXJEZWYudXJpICsgJ1wiLicgKSApO1xyXG5cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNidWZmZXJzLWFuZC1idWZmZXItdmlld3NcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gYnVmZmVyVmlld0luZGV4XHJcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheUJ1ZmZlcj59XHJcblx0ICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUubG9hZEJ1ZmZlclZpZXcgPSBmdW5jdGlvbiAoIGJ1ZmZlclZpZXdJbmRleCApIHtcclxuXHJcblx0XHR2YXIgYnVmZmVyVmlld0RlZiA9IHRoaXMuanNvbi5idWZmZXJWaWV3c1sgYnVmZmVyVmlld0luZGV4IF07XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlcicsIGJ1ZmZlclZpZXdEZWYuYnVmZmVyICkudGhlbiggZnVuY3Rpb24gKCBidWZmZXIgKSB7XHJcblxyXG5cdFx0XHR2YXIgYnl0ZUxlbmd0aCA9IGJ1ZmZlclZpZXdEZWYuYnl0ZUxlbmd0aCB8fCAwO1xyXG5cdFx0XHR2YXIgYnl0ZU9mZnNldCA9IGJ1ZmZlclZpZXdEZWYuYnl0ZU9mZnNldCB8fCAwO1xyXG5cdFx0XHRyZXR1cm4gYnVmZmVyLnNsaWNlKCBieXRlT2Zmc2V0LCBieXRlT2Zmc2V0ICsgYnl0ZUxlbmd0aCApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNhY2Nlc3NvcnNcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gYWNjZXNzb3JJbmRleFxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QnVmZmVyQXR0cmlidXRlfEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlPn1cclxuXHQgKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkQWNjZXNzb3IgPSBmdW5jdGlvbiAoIGFjY2Vzc29ySW5kZXggKSB7XHJcblxyXG5cdFx0dmFyIHBhcnNlciA9IHRoaXM7XHJcblx0XHR2YXIganNvbiA9IHRoaXMuanNvbjtcclxuXHJcblx0XHR2YXIgYWNjZXNzb3JEZWYgPSB0aGlzLmpzb24uYWNjZXNzb3JzWyBhY2Nlc3NvckluZGV4IF07XHJcblxyXG5cdFx0aWYgKCBhY2Nlc3NvckRlZi5idWZmZXJWaWV3ID09PSB1bmRlZmluZWQgJiYgYWNjZXNzb3JEZWYuc3BhcnNlID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHQvLyBJZ25vcmUgZW1wdHkgYWNjZXNzb3JzLCB3aGljaCBtYXkgYmUgdXNlZCB0byBkZWNsYXJlIHJ1bnRpbWVcclxuXHRcdFx0Ly8gaW5mb3JtYXRpb24gYWJvdXQgYXR0cmlidXRlcyBjb21pbmcgZnJvbSBhbm90aGVyIHNvdXJjZSAoZS5nLiBEcmFjb1xyXG5cdFx0XHQvLyBjb21wcmVzc2lvbiBleHRlbnNpb24pLlxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCBudWxsICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBwZW5kaW5nQnVmZmVyVmlld3MgPSBbXTtcclxuXHJcblx0XHRpZiAoIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdHBlbmRpbmdCdWZmZXJWaWV3cy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3JywgYWNjZXNzb3JEZWYuYnVmZmVyVmlldyApICk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdHBlbmRpbmdCdWZmZXJWaWV3cy5wdXNoKCBudWxsICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggYWNjZXNzb3JEZWYuc3BhcnNlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRwZW5kaW5nQnVmZmVyVmlld3MucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnYnVmZmVyVmlldycsIGFjY2Vzc29yRGVmLnNwYXJzZS5pbmRpY2VzLmJ1ZmZlclZpZXcgKSApO1xyXG5cdFx0XHRwZW5kaW5nQnVmZmVyVmlld3MucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnYnVmZmVyVmlldycsIGFjY2Vzc29yRGVmLnNwYXJzZS52YWx1ZXMuYnVmZmVyVmlldyApICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZ0J1ZmZlclZpZXdzICkudGhlbiggZnVuY3Rpb24gKCBidWZmZXJWaWV3cyApIHtcclxuXHJcblx0XHRcdHZhciBidWZmZXJWaWV3ID0gYnVmZmVyVmlld3NbIDAgXTtcclxuXHJcblx0XHRcdHZhciBpdGVtU2l6ZSA9IFdFQkdMX1RZUEVfU0laRVNbIGFjY2Vzc29yRGVmLnR5cGUgXTtcclxuXHRcdFx0dmFyIFR5cGVkQXJyYXkgPSBXRUJHTF9DT01QT05FTlRfVFlQRVNbIGFjY2Vzc29yRGVmLmNvbXBvbmVudFR5cGUgXTtcclxuXHJcblx0XHRcdC8vIEZvciBWRUMzOiBpdGVtU2l6ZSBpcyAzLCBlbGVtZW50Qnl0ZXMgaXMgNCwgaXRlbUJ5dGVzIGlzIDEyLlxyXG5cdFx0XHR2YXIgZWxlbWVudEJ5dGVzID0gVHlwZWRBcnJheS5CWVRFU19QRVJfRUxFTUVOVDtcclxuXHRcdFx0dmFyIGl0ZW1CeXRlcyA9IGVsZW1lbnRCeXRlcyAqIGl0ZW1TaXplO1xyXG5cdFx0XHR2YXIgYnl0ZU9mZnNldCA9IGFjY2Vzc29yRGVmLmJ5dGVPZmZzZXQgfHwgMDtcclxuXHRcdFx0dmFyIGJ5dGVTdHJpZGUgPSBhY2Nlc3NvckRlZi5idWZmZXJWaWV3ICE9PSB1bmRlZmluZWQgPyBqc29uLmJ1ZmZlclZpZXdzWyBhY2Nlc3NvckRlZi5idWZmZXJWaWV3IF0uYnl0ZVN0cmlkZSA6IHVuZGVmaW5lZDtcclxuXHRcdFx0dmFyIG5vcm1hbGl6ZWQgPSBhY2Nlc3NvckRlZi5ub3JtYWxpemVkID09PSB0cnVlO1xyXG5cdFx0XHR2YXIgYXJyYXksIGJ1ZmZlckF0dHJpYnV0ZTtcclxuXHJcblx0XHRcdC8vIFRoZSBidWZmZXIgaXMgbm90IGludGVybGVhdmVkIGlmIHRoZSBzdHJpZGUgaXMgdGhlIGl0ZW0gc2l6ZSBpbiBieXRlcy5cclxuXHRcdFx0aWYgKCBieXRlU3RyaWRlICYmIGJ5dGVTdHJpZGUgIT09IGl0ZW1CeXRlcyApIHtcclxuXHJcblx0XHRcdFx0Ly8gRWFjaCBcInNsaWNlXCIgb2YgdGhlIGJ1ZmZlciwgYXMgZGVmaW5lZCBieSAnY291bnQnIGVsZW1lbnRzIG9mICdieXRlU3RyaWRlJyBieXRlcywgZ2V0cyBpdHMgb3duIEludGVybGVhdmVkQnVmZmVyXHJcblx0XHRcdFx0Ly8gVGhpcyBtYWtlcyBzdXJlIHRoYXQgSUJBLmNvdW50IHJlZmxlY3RzIGFjY2Vzc29yLmNvdW50IHByb3Blcmx5XHJcblx0XHRcdFx0dmFyIGliU2xpY2UgPSBNYXRoLmZsb29yKCBieXRlT2Zmc2V0IC8gYnl0ZVN0cmlkZSApO1xyXG5cdFx0XHRcdHZhciBpYkNhY2hlS2V5ID0gJ0ludGVybGVhdmVkQnVmZmVyOicgKyBhY2Nlc3NvckRlZi5idWZmZXJWaWV3ICsgJzonICsgYWNjZXNzb3JEZWYuY29tcG9uZW50VHlwZSArICc6JyArIGliU2xpY2UgKyAnOicgKyBhY2Nlc3NvckRlZi5jb3VudDtcclxuXHRcdFx0XHR2YXIgaWIgPSBwYXJzZXIuY2FjaGUuZ2V0KCBpYkNhY2hlS2V5ICk7XHJcblxyXG5cdFx0XHRcdGlmICggISBpYiApIHtcclxuXHJcblx0XHRcdFx0XHRhcnJheSA9IG5ldyBUeXBlZEFycmF5KCBidWZmZXJWaWV3LCBpYlNsaWNlICogYnl0ZVN0cmlkZSwgYWNjZXNzb3JEZWYuY291bnQgKiBieXRlU3RyaWRlIC8gZWxlbWVudEJ5dGVzICk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gSW50ZWdlciBwYXJhbWV0ZXJzIHRvIElCL0lCQSBhcmUgaW4gYXJyYXkgZWxlbWVudHMsIG5vdCBieXRlcy5cclxuXHRcdFx0XHRcdGliID0gbmV3IEludGVybGVhdmVkQnVmZmVyKCBhcnJheSwgYnl0ZVN0cmlkZSAvIGVsZW1lbnRCeXRlcyApO1xyXG5cclxuXHRcdFx0XHRcdHBhcnNlci5jYWNoZS5hZGQoIGliQ2FjaGVLZXksIGliICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0YnVmZmVyQXR0cmlidXRlID0gbmV3IEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlKCBpYiwgaXRlbVNpemUsICggYnl0ZU9mZnNldCAlIGJ5dGVTdHJpZGUgKSAvIGVsZW1lbnRCeXRlcywgbm9ybWFsaXplZCApO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0aWYgKCBidWZmZXJWaWV3ID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHRcdGFycmF5ID0gbmV3IFR5cGVkQXJyYXkoIGFjY2Vzc29yRGVmLmNvdW50ICogaXRlbVNpemUgKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRhcnJheSA9IG5ldyBUeXBlZEFycmF5KCBidWZmZXJWaWV3LCBieXRlT2Zmc2V0LCBhY2Nlc3NvckRlZi5jb3VudCAqIGl0ZW1TaXplICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0YnVmZmVyQXR0cmlidXRlID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZSggYXJyYXksIGl0ZW1TaXplLCBub3JtYWxpemVkICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI3NwYXJzZS1hY2Nlc3NvcnNcclxuXHRcdFx0aWYgKCBhY2Nlc3NvckRlZi5zcGFyc2UgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0dmFyIGl0ZW1TaXplSW5kaWNlcyA9IFdFQkdMX1RZUEVfU0laRVMuU0NBTEFSO1xyXG5cdFx0XHRcdHZhciBUeXBlZEFycmF5SW5kaWNlcyA9IFdFQkdMX0NPTVBPTkVOVF9UWVBFU1sgYWNjZXNzb3JEZWYuc3BhcnNlLmluZGljZXMuY29tcG9uZW50VHlwZSBdO1xyXG5cclxuXHRcdFx0XHR2YXIgYnl0ZU9mZnNldEluZGljZXMgPSBhY2Nlc3NvckRlZi5zcGFyc2UuaW5kaWNlcy5ieXRlT2Zmc2V0IHx8IDA7XHJcblx0XHRcdFx0dmFyIGJ5dGVPZmZzZXRWYWx1ZXMgPSBhY2Nlc3NvckRlZi5zcGFyc2UudmFsdWVzLmJ5dGVPZmZzZXQgfHwgMDtcclxuXHJcblx0XHRcdFx0dmFyIHNwYXJzZUluZGljZXMgPSBuZXcgVHlwZWRBcnJheUluZGljZXMoIGJ1ZmZlclZpZXdzWyAxIF0sIGJ5dGVPZmZzZXRJbmRpY2VzLCBhY2Nlc3NvckRlZi5zcGFyc2UuY291bnQgKiBpdGVtU2l6ZUluZGljZXMgKTtcclxuXHRcdFx0XHR2YXIgc3BhcnNlVmFsdWVzID0gbmV3IFR5cGVkQXJyYXkoIGJ1ZmZlclZpZXdzWyAyIF0sIGJ5dGVPZmZzZXRWYWx1ZXMsIGFjY2Vzc29yRGVmLnNwYXJzZS5jb3VudCAqIGl0ZW1TaXplICk7XHJcblxyXG5cdFx0XHRcdGlmICggYnVmZmVyVmlldyAhPT0gbnVsbCApIHtcclxuXHJcblx0XHRcdFx0XHQvLyBBdm9pZCBtb2RpZnlpbmcgdGhlIG9yaWdpbmFsIEFycmF5QnVmZmVyLCBpZiB0aGUgYnVmZmVyVmlldyB3YXNuJ3QgaW5pdGlhbGl6ZWQgd2l0aCB6ZXJvZXMuXHJcblx0XHRcdFx0XHRidWZmZXJBdHRyaWJ1dGUgPSBuZXcgQnVmZmVyQXR0cmlidXRlKCBidWZmZXJBdHRyaWJ1dGUuYXJyYXkuc2xpY2UoKSwgYnVmZmVyQXR0cmlidXRlLml0ZW1TaXplLCBidWZmZXJBdHRyaWJ1dGUubm9ybWFsaXplZCApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSBzcGFyc2VJbmRpY2VzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBpbmRleCA9IHNwYXJzZUluZGljZXNbIGkgXTtcclxuXHJcblx0XHRcdFx0XHRidWZmZXJBdHRyaWJ1dGUuc2V0WCggaW5kZXgsIHNwYXJzZVZhbHVlc1sgaSAqIGl0ZW1TaXplIF0gKTtcclxuXHRcdFx0XHRcdGlmICggaXRlbVNpemUgPj0gMiApIGJ1ZmZlckF0dHJpYnV0ZS5zZXRZKCBpbmRleCwgc3BhcnNlVmFsdWVzWyBpICogaXRlbVNpemUgKyAxIF0gKTtcclxuXHRcdFx0XHRcdGlmICggaXRlbVNpemUgPj0gMyApIGJ1ZmZlckF0dHJpYnV0ZS5zZXRaKCBpbmRleCwgc3BhcnNlVmFsdWVzWyBpICogaXRlbVNpemUgKyAyIF0gKTtcclxuXHRcdFx0XHRcdGlmICggaXRlbVNpemUgPj0gNCApIGJ1ZmZlckF0dHJpYnV0ZS5zZXRXKCBpbmRleCwgc3BhcnNlVmFsdWVzWyBpICogaXRlbVNpemUgKyAzIF0gKTtcclxuXHRcdFx0XHRcdGlmICggaXRlbVNpemUgPj0gNSApIHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFVuc3VwcG9ydGVkIGl0ZW1TaXplIGluIHNwYXJzZSBCdWZmZXJBdHRyaWJ1dGUuJyApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gYnVmZmVyQXR0cmlidXRlO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI3RleHR1cmVzXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRleHR1cmVJbmRleFxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8VEhSRUUuVGV4dHVyZT59XHJcblx0ICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUubG9hZFRleHR1cmUgPSBmdW5jdGlvbiAoIHRleHR1cmVJbmRleCApIHtcclxuXHJcblx0XHR2YXIganNvbiA9IHRoaXMuanNvbjtcclxuXHRcdHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cdFx0dmFyIHRleHR1cmVEZWYgPSBqc29uLnRleHR1cmVzWyB0ZXh0dXJlSW5kZXggXTtcclxuXHRcdHZhciBzb3VyY2UgPSBqc29uLmltYWdlc1sgdGV4dHVyZURlZi5zb3VyY2UgXTtcclxuXHJcblx0XHR2YXIgbG9hZGVyID0gdGhpcy50ZXh0dXJlTG9hZGVyO1xyXG5cclxuXHRcdGlmICggc291cmNlLnVyaSApIHtcclxuXHJcblx0XHRcdHZhciBoYW5kbGVyID0gb3B0aW9ucy5tYW5hZ2VyLmdldEhhbmRsZXIoIHNvdXJjZS51cmkgKTtcclxuXHRcdFx0aWYgKCBoYW5kbGVyICE9PSBudWxsICkgbG9hZGVyID0gaGFuZGxlcjtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMubG9hZFRleHR1cmVJbWFnZSggdGV4dHVyZUluZGV4LCBzb3VyY2UsIGxvYWRlciApO1xyXG5cclxuXHR9O1xyXG5cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkVGV4dHVyZUltYWdlID0gZnVuY3Rpb24gKCB0ZXh0dXJlSW5kZXgsIHNvdXJjZSwgbG9hZGVyICkge1xyXG5cclxuXHRcdHZhciBwYXJzZXIgPSB0aGlzO1xyXG5cdFx0dmFyIGpzb24gPSB0aGlzLmpzb247XHJcblx0XHR2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHJcblx0XHR2YXIgdGV4dHVyZURlZiA9IGpzb24udGV4dHVyZXNbIHRleHR1cmVJbmRleCBdO1xyXG5cclxuXHRcdHZhciBVUkwgPSBzZWxmLlVSTCB8fCBzZWxmLndlYmtpdFVSTDtcclxuXHJcblx0XHR2YXIgc291cmNlVVJJID0gc291cmNlLnVyaTtcclxuXHRcdHZhciBpc09iamVjdFVSTCA9IGZhbHNlO1xyXG5cdFx0dmFyIGhhc0FscGhhID0gdHJ1ZTtcclxuXHJcblx0XHRpZiAoIHNvdXJjZS5taW1lVHlwZSA9PT0gJ2ltYWdlL2pwZWcnICkgaGFzQWxwaGEgPSBmYWxzZTtcclxuXHJcblx0XHRpZiAoIHNvdXJjZS5idWZmZXJWaWV3ICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHQvLyBMb2FkIGJpbmFyeSBpbWFnZSBkYXRhIGZyb20gYnVmZmVyVmlldywgaWYgcHJvdmlkZWQuXHJcblxyXG5cdFx0XHRzb3VyY2VVUkkgPSBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlclZpZXcnLCBzb3VyY2UuYnVmZmVyVmlldyApLnRoZW4oIGZ1bmN0aW9uICggYnVmZmVyVmlldyApIHtcclxuXHJcblx0XHRcdFx0aWYgKCBzb3VyY2UubWltZVR5cGUgPT09ICdpbWFnZS9wbmcnICkge1xyXG5cclxuXHRcdFx0XHRcdC8vIEluc3BlY3QgdGhlIFBORyAnSUhEUicgY2h1bmsgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGltYWdlIGNvdWxkIGhhdmUgYW5cclxuXHRcdFx0XHRcdC8vIGFscGhhIGNoYW5uZWwuIFRoaXMgY2hlY2sgaXMgY29uc2VydmF0aXZlIOKAlCB0aGUgaW1hZ2UgY291bGQgaGF2ZSBhbiBhbHBoYVxyXG5cdFx0XHRcdFx0Ly8gY2hhbm5lbCB3aXRoIGFsbCB2YWx1ZXMgPT0gMSwgYW5kIHRoZSBpbmRleGVkIHR5cGUgKGNvbG9yVHlwZSA9PSAzKSBvbmx5XHJcblx0XHRcdFx0XHQvLyBzb21ldGltZXMgY29udGFpbnMgYWxwaGEuXHJcblx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0Ly8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUG9ydGFibGVfTmV0d29ya19HcmFwaGljcyNGaWxlX2hlYWRlclxyXG5cdFx0XHRcdFx0dmFyIGNvbG9yVHlwZSA9IG5ldyBEYXRhVmlldyggYnVmZmVyVmlldywgMjUsIDEgKS5nZXRVaW50OCggMCwgZmFsc2UgKTtcclxuXHRcdFx0XHRcdGhhc0FscGhhID0gY29sb3JUeXBlID09PSA2IHx8IGNvbG9yVHlwZSA9PT0gNCB8fCBjb2xvclR5cGUgPT09IDM7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aXNPYmplY3RVUkwgPSB0cnVlO1xyXG5cdFx0XHRcdHZhciBibG9iID0gbmV3IEJsb2IoIFsgYnVmZmVyVmlldyBdLCB7IHR5cGU6IHNvdXJjZS5taW1lVHlwZSB9ICk7XHJcblx0XHRcdFx0c291cmNlVVJJID0gVVJMLmNyZWF0ZU9iamVjdFVSTCggYmxvYiApO1xyXG5cdFx0XHRcdHJldHVybiBzb3VyY2VVUkk7XHJcblxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0fSBlbHNlIGlmICggc291cmNlLnVyaSA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogSW1hZ2UgJyArIHRleHR1cmVJbmRleCArICcgaXMgbWlzc2luZyBVUkkgYW5kIGJ1ZmZlclZpZXcnICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoIHNvdXJjZVVSSSApLnRoZW4oIGZ1bmN0aW9uICggc291cmNlVVJJICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiAoIHJlc29sdmUsIHJlamVjdCApIHtcclxuXHJcblx0XHRcdFx0dmFyIG9uTG9hZCA9IHJlc29sdmU7XHJcblxyXG5cdFx0XHRcdGlmICggbG9hZGVyLmlzSW1hZ2VCaXRtYXBMb2FkZXIgPT09IHRydWUgKSB7XHJcblxyXG5cdFx0XHRcdFx0b25Mb2FkID0gZnVuY3Rpb24gKCBpbWFnZUJpdG1hcCApIHtcclxuXHJcblx0XHRcdFx0XHRcdHJlc29sdmUoIG5ldyBDYW52YXNUZXh0dXJlKCBpbWFnZUJpdG1hcCApICk7XHJcblxyXG5cdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRsb2FkZXIubG9hZCggcmVzb2x2ZVVSTCggc291cmNlVVJJLCBvcHRpb25zLnBhdGggKSwgb25Mb2FkLCB1bmRlZmluZWQsIHJlamVjdCApO1xyXG5cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH0gKS50aGVuKCBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XHJcblxyXG5cdFx0XHQvLyBDbGVhbiB1cCByZXNvdXJjZXMgYW5kIGNvbmZpZ3VyZSBUZXh0dXJlLlxyXG5cclxuXHRcdFx0aWYgKCBpc09iamVjdFVSTCA9PT0gdHJ1ZSApIHtcclxuXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTCggc291cmNlVVJJICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0ZXh0dXJlLmZsaXBZID0gZmFsc2U7XHJcblxyXG5cdFx0XHRpZiAoIHRleHR1cmVEZWYubmFtZSApIHRleHR1cmUubmFtZSA9IHRleHR1cmVEZWYubmFtZTtcclxuXHJcblx0XHRcdC8vIFdoZW4gdGhlcmUgaXMgZGVmaW5pdGVseSBubyBhbHBoYSBjaGFubmVsIGluIHRoZSB0ZXh0dXJlLCBzZXQgUkdCRm9ybWF0IHRvIHNhdmUgc3BhY2UuXHJcblx0XHRcdGlmICggISBoYXNBbHBoYSApIHRleHR1cmUuZm9ybWF0ID0gUkdCRm9ybWF0O1xyXG5cclxuXHRcdFx0dmFyIHNhbXBsZXJzID0ganNvbi5zYW1wbGVycyB8fCB7fTtcclxuXHRcdFx0dmFyIHNhbXBsZXIgPSBzYW1wbGVyc1sgdGV4dHVyZURlZi5zYW1wbGVyIF0gfHwge307XHJcblxyXG5cdFx0XHR0ZXh0dXJlLm1hZ0ZpbHRlciA9IFdFQkdMX0ZJTFRFUlNbIHNhbXBsZXIubWFnRmlsdGVyIF0gfHwgTGluZWFyRmlsdGVyO1xyXG5cdFx0XHR0ZXh0dXJlLm1pbkZpbHRlciA9IFdFQkdMX0ZJTFRFUlNbIHNhbXBsZXIubWluRmlsdGVyIF0gfHwgTGluZWFyTWlwbWFwTGluZWFyRmlsdGVyO1xyXG5cdFx0XHR0ZXh0dXJlLndyYXBTID0gV0VCR0xfV1JBUFBJTkdTWyBzYW1wbGVyLndyYXBTIF0gfHwgUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRcdHRleHR1cmUud3JhcFQgPSBXRUJHTF9XUkFQUElOR1NbIHNhbXBsZXIud3JhcFQgXSB8fCBSZXBlYXRXcmFwcGluZztcclxuXHJcblx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCB0ZXh0dXJlLCB7XHJcblx0XHRcdFx0dHlwZTogJ3RleHR1cmVzJyxcclxuXHRcdFx0XHRpbmRleDogdGV4dHVyZUluZGV4XHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHRcdHJldHVybiB0ZXh0dXJlO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQXN5bmNocm9ub3VzbHkgYXNzaWducyBhIHRleHR1cmUgdG8gdGhlIGdpdmVuIG1hdGVyaWFsIHBhcmFtZXRlcnMuXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG1hdGVyaWFsUGFyYW1zXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1hcE5hbWVcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gbWFwRGVmXHJcblx0ICogQHJldHVybiB7UHJvbWlzZX1cclxuXHQgKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5hc3NpZ25UZXh0dXJlID0gZnVuY3Rpb24gKCBtYXRlcmlhbFBhcmFtcywgbWFwTmFtZSwgbWFwRGVmICkge1xyXG5cclxuXHRcdHZhciBwYXJzZXIgPSB0aGlzO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmdldERlcGVuZGVuY3koICd0ZXh0dXJlJywgbWFwRGVmLmluZGV4ICkudGhlbiggZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xyXG5cclxuXHRcdFx0Ly8gTWF0ZXJpYWxzIHNhbXBsZSBhb01hcCBmcm9tIFVWIHNldCAxIGFuZCBvdGhlciBtYXBzIGZyb20gVVYgc2V0IDAgLSB0aGlzIGNhbid0IGJlIGNvbmZpZ3VyZWRcclxuXHRcdFx0Ly8gSG93ZXZlciwgd2Ugd2lsbCBjb3B5IFVWIHNldCAwIHRvIFVWIHNldCAxIG9uIGRlbWFuZCBmb3IgYW9NYXBcclxuXHRcdFx0aWYgKCBtYXBEZWYudGV4Q29vcmQgIT09IHVuZGVmaW5lZCAmJiBtYXBEZWYudGV4Q29vcmQgIT0gMCAmJiAhICggbWFwTmFtZSA9PT0gJ2FvTWFwJyAmJiBtYXBEZWYudGV4Q29vcmQgPT0gMSApICkge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBDdXN0b20gVVYgc2V0ICcgKyBtYXBEZWYudGV4Q29vcmQgKyAnIGZvciB0ZXh0dXJlICcgKyBtYXBOYW1lICsgJyBub3QgeWV0IHN1cHBvcnRlZC4nICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIHBhcnNlci5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9URVhUVVJFX1RSQU5TRk9STSBdICkge1xyXG5cclxuXHRcdFx0XHR2YXIgdHJhbnNmb3JtID0gbWFwRGVmLmV4dGVuc2lvbnMgIT09IHVuZGVmaW5lZCA/IG1hcERlZi5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9URVhUVVJFX1RSQU5TRk9STSBdIDogdW5kZWZpbmVkO1xyXG5cclxuXHRcdFx0XHRpZiAoIHRyYW5zZm9ybSApIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgZ2x0ZlJlZmVyZW5jZSA9IHBhcnNlci5hc3NvY2lhdGlvbnMuZ2V0KCB0ZXh0dXJlICk7XHJcblx0XHRcdFx0XHR0ZXh0dXJlID0gcGFyc2VyLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNIF0uZXh0ZW5kVGV4dHVyZSggdGV4dHVyZSwgdHJhbnNmb3JtICk7XHJcblx0XHRcdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLnNldCggdGV4dHVyZSwgZ2x0ZlJlZmVyZW5jZSApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYXRlcmlhbFBhcmFtc1sgbWFwTmFtZSBdID0gdGV4dHVyZTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFzc2lnbnMgZmluYWwgbWF0ZXJpYWwgdG8gYSBNZXNoLCBMaW5lLCBvciBQb2ludHMgaW5zdGFuY2UuIFRoZSBpbnN0YW5jZVxyXG5cdCAqIGFscmVhZHkgaGFzIGEgbWF0ZXJpYWwgKGdlbmVyYXRlZCBmcm9tIHRoZSBnbFRGIG1hdGVyaWFsIG9wdGlvbnMgYWxvbmUpXHJcblx0ICogYnV0IHJldXNlIG9mIHRoZSBzYW1lIGdsVEYgbWF0ZXJpYWwgbWF5IHJlcXVpcmUgbXVsdGlwbGUgdGhyZWVqcyBtYXRlcmlhbHNcclxuXHQgKiB0byBhY2NvbW1vZGF0ZSBkaWZmZXJlbnQgcHJpbWl0aXZlIHR5cGVzLCBkZWZpbmVzLCBldGMuIE5ldyBtYXRlcmlhbHMgd2lsbFxyXG5cdCAqIGJlIGNyZWF0ZWQgaWYgbmVjZXNzYXJ5LCBhbmQgcmV1c2VkIGZyb20gYSBjYWNoZS5cclxuXHQgKiBAcGFyYW0gIHtPYmplY3QzRH0gbWVzaCBNZXNoLCBMaW5lLCBvciBQb2ludHMgaW5zdGFuY2UuXHJcblx0ICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUuYXNzaWduRmluYWxNYXRlcmlhbCA9IGZ1bmN0aW9uICggbWVzaCApIHtcclxuXHJcblx0XHR2YXIgZ2VvbWV0cnkgPSBtZXNoLmdlb21ldHJ5O1xyXG5cdFx0dmFyIG1hdGVyaWFsID0gbWVzaC5tYXRlcmlhbDtcclxuXHJcblx0XHR2YXIgdXNlVmVydGV4VGFuZ2VudHMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnRhbmdlbnQgIT09IHVuZGVmaW5lZDtcclxuXHRcdHZhciB1c2VWZXJ0ZXhDb2xvcnMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLmNvbG9yICE9PSB1bmRlZmluZWQ7XHJcblx0XHR2YXIgdXNlRmxhdFNoYWRpbmcgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLm5vcm1hbCA9PT0gdW5kZWZpbmVkO1xyXG5cdFx0dmFyIHVzZVNraW5uaW5nID0gbWVzaC5pc1NraW5uZWRNZXNoID09PSB0cnVlO1xyXG5cdFx0dmFyIHVzZU1vcnBoVGFyZ2V0cyA9IE9iamVjdC5rZXlzKCBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMgKS5sZW5ndGggPiAwO1xyXG5cdFx0dmFyIHVzZU1vcnBoTm9ybWFscyA9IHVzZU1vcnBoVGFyZ2V0cyAmJiBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMubm9ybWFsICE9PSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0aWYgKCBtZXNoLmlzUG9pbnRzICkge1xyXG5cclxuXHRcdFx0dmFyIGNhY2hlS2V5ID0gJ1BvaW50c01hdGVyaWFsOicgKyBtYXRlcmlhbC51dWlkO1xyXG5cclxuXHRcdFx0dmFyIHBvaW50c01hdGVyaWFsID0gdGhpcy5jYWNoZS5nZXQoIGNhY2hlS2V5ICk7XHJcblxyXG5cdFx0XHRpZiAoICEgcG9pbnRzTWF0ZXJpYWwgKSB7XHJcblxyXG5cdFx0XHRcdHBvaW50c01hdGVyaWFsID0gbmV3IFBvaW50c01hdGVyaWFsKCk7XHJcblx0XHRcdFx0TWF0ZXJpYWwucHJvdG90eXBlLmNvcHkuY2FsbCggcG9pbnRzTWF0ZXJpYWwsIG1hdGVyaWFsICk7XHJcblx0XHRcdFx0cG9pbnRzTWF0ZXJpYWwuY29sb3IuY29weSggbWF0ZXJpYWwuY29sb3IgKTtcclxuXHRcdFx0XHRwb2ludHNNYXRlcmlhbC5tYXAgPSBtYXRlcmlhbC5tYXA7XHJcblx0XHRcdFx0cG9pbnRzTWF0ZXJpYWwuc2l6ZUF0dGVudWF0aW9uID0gZmFsc2U7IC8vIGdsVEYgc3BlYyBzYXlzIHBvaW50cyBzaG91bGQgYmUgMXB4XHJcblxyXG5cdFx0XHRcdHRoaXMuY2FjaGUuYWRkKCBjYWNoZUtleSwgcG9pbnRzTWF0ZXJpYWwgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1hdGVyaWFsID0gcG9pbnRzTWF0ZXJpYWw7XHJcblxyXG5cdFx0fSBlbHNlIGlmICggbWVzaC5pc0xpbmUgKSB7XHJcblxyXG5cdFx0XHR2YXIgY2FjaGVLZXkgPSAnTGluZUJhc2ljTWF0ZXJpYWw6JyArIG1hdGVyaWFsLnV1aWQ7XHJcblxyXG5cdFx0XHR2YXIgbGluZU1hdGVyaWFsID0gdGhpcy5jYWNoZS5nZXQoIGNhY2hlS2V5ICk7XHJcblxyXG5cdFx0XHRpZiAoICEgbGluZU1hdGVyaWFsICkge1xyXG5cclxuXHRcdFx0XHRsaW5lTWF0ZXJpYWwgPSBuZXcgTGluZUJhc2ljTWF0ZXJpYWwoKTtcclxuXHRcdFx0XHRNYXRlcmlhbC5wcm90b3R5cGUuY29weS5jYWxsKCBsaW5lTWF0ZXJpYWwsIG1hdGVyaWFsICk7XHJcblx0XHRcdFx0bGluZU1hdGVyaWFsLmNvbG9yLmNvcHkoIG1hdGVyaWFsLmNvbG9yICk7XHJcblxyXG5cdFx0XHRcdHRoaXMuY2FjaGUuYWRkKCBjYWNoZUtleSwgbGluZU1hdGVyaWFsICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYXRlcmlhbCA9IGxpbmVNYXRlcmlhbDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQ2xvbmUgdGhlIG1hdGVyaWFsIGlmIGl0IHdpbGwgYmUgbW9kaWZpZWRcclxuXHRcdGlmICggdXNlVmVydGV4VGFuZ2VudHMgfHwgdXNlVmVydGV4Q29sb3JzIHx8IHVzZUZsYXRTaGFkaW5nIHx8IHVzZVNraW5uaW5nIHx8IHVzZU1vcnBoVGFyZ2V0cyApIHtcclxuXHJcblx0XHRcdHZhciBjYWNoZUtleSA9ICdDbG9uZWRNYXRlcmlhbDonICsgbWF0ZXJpYWwudXVpZCArICc6JztcclxuXHJcblx0XHRcdGlmICggbWF0ZXJpYWwuaXNHTFRGU3BlY3VsYXJHbG9zc2luZXNzTWF0ZXJpYWwgKSBjYWNoZUtleSArPSAnc3BlY3VsYXItZ2xvc3NpbmVzczonO1xyXG5cdFx0XHRpZiAoIHVzZVNraW5uaW5nICkgY2FjaGVLZXkgKz0gJ3NraW5uaW5nOic7XHJcblx0XHRcdGlmICggdXNlVmVydGV4VGFuZ2VudHMgKSBjYWNoZUtleSArPSAndmVydGV4LXRhbmdlbnRzOic7XHJcblx0XHRcdGlmICggdXNlVmVydGV4Q29sb3JzICkgY2FjaGVLZXkgKz0gJ3ZlcnRleC1jb2xvcnM6JztcclxuXHRcdFx0aWYgKCB1c2VGbGF0U2hhZGluZyApIGNhY2hlS2V5ICs9ICdmbGF0LXNoYWRpbmc6JztcclxuXHRcdFx0aWYgKCB1c2VNb3JwaFRhcmdldHMgKSBjYWNoZUtleSArPSAnbW9ycGgtdGFyZ2V0czonO1xyXG5cdFx0XHRpZiAoIHVzZU1vcnBoTm9ybWFscyApIGNhY2hlS2V5ICs9ICdtb3JwaC1ub3JtYWxzOic7XHJcblxyXG5cdFx0XHR2YXIgY2FjaGVkTWF0ZXJpYWwgPSB0aGlzLmNhY2hlLmdldCggY2FjaGVLZXkgKTtcclxuXHJcblx0XHRcdGlmICggISBjYWNoZWRNYXRlcmlhbCApIHtcclxuXHJcblx0XHRcdFx0Y2FjaGVkTWF0ZXJpYWwgPSBtYXRlcmlhbC5jbG9uZSgpO1xyXG5cclxuXHRcdFx0XHRpZiAoIHVzZVNraW5uaW5nICkgY2FjaGVkTWF0ZXJpYWwuc2tpbm5pbmcgPSB0cnVlO1xyXG5cdFx0XHRcdGlmICggdXNlVmVydGV4Q29sb3JzICkgY2FjaGVkTWF0ZXJpYWwudmVydGV4Q29sb3JzID0gdHJ1ZTtcclxuXHRcdFx0XHRpZiAoIHVzZUZsYXRTaGFkaW5nICkgY2FjaGVkTWF0ZXJpYWwuZmxhdFNoYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdGlmICggdXNlTW9ycGhUYXJnZXRzICkgY2FjaGVkTWF0ZXJpYWwubW9ycGhUYXJnZXRzID0gdHJ1ZTtcclxuXHRcdFx0XHRpZiAoIHVzZU1vcnBoTm9ybWFscyApIGNhY2hlZE1hdGVyaWFsLm1vcnBoTm9ybWFscyA9IHRydWU7XHJcblxyXG5cdFx0XHRcdGlmICggdXNlVmVydGV4VGFuZ2VudHMgKSB7XHJcblxyXG5cdFx0XHRcdFx0Y2FjaGVkTWF0ZXJpYWwudmVydGV4VGFuZ2VudHMgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzExNDM4I2lzc3VlY29tbWVudC01MDcwMDM5OTVcclxuXHRcdFx0XHRcdGlmICggY2FjaGVkTWF0ZXJpYWwubm9ybWFsU2NhbGUgKSBjYWNoZWRNYXRlcmlhbC5ub3JtYWxTY2FsZS55ICo9IC0gMTtcclxuXHRcdFx0XHRcdGlmICggY2FjaGVkTWF0ZXJpYWwuY2xlYXJjb2F0Tm9ybWFsU2NhbGUgKSBjYWNoZWRNYXRlcmlhbC5jbGVhcmNvYXROb3JtYWxTY2FsZS55ICo9IC0gMTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLmNhY2hlLmFkZCggY2FjaGVLZXksIGNhY2hlZE1hdGVyaWFsICk7XHJcblxyXG5cdFx0XHRcdHRoaXMuYXNzb2NpYXRpb25zLnNldCggY2FjaGVkTWF0ZXJpYWwsIHRoaXMuYXNzb2NpYXRpb25zLmdldCggbWF0ZXJpYWwgKSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWF0ZXJpYWwgPSBjYWNoZWRNYXRlcmlhbDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gd29ya2Fyb3VuZHMgZm9yIG1lc2ggYW5kIGdlb21ldHJ5XHJcblxyXG5cdFx0aWYgKCBtYXRlcmlhbC5hb01hcCAmJiBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2MiA9PT0gdW5kZWZpbmVkICYmIGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdGdlb21ldHJ5LnNldEF0dHJpYnV0ZSggJ3V2MicsIGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bWVzaC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG5cclxuXHR9O1xyXG5cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5nZXRNYXRlcmlhbFR5cGUgPSBmdW5jdGlvbiAoIC8qIG1hdGVyaWFsSW5kZXggKi8gKSB7XHJcblxyXG5cdFx0cmV0dXJuIE1lc2hTdGFuZGFyZE1hdGVyaWFsO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI21hdGVyaWFsc1xyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtYXRlcmlhbEluZGV4XHJcblx0ICogQHJldHVybiB7UHJvbWlzZTxNYXRlcmlhbD59XHJcblx0ICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUubG9hZE1hdGVyaWFsID0gZnVuY3Rpb24gKCBtYXRlcmlhbEluZGV4ICkge1xyXG5cclxuXHRcdHZhciBwYXJzZXIgPSB0aGlzO1xyXG5cdFx0dmFyIGpzb24gPSB0aGlzLmpzb247XHJcblx0XHR2YXIgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcclxuXHRcdHZhciBtYXRlcmlhbERlZiA9IGpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XHJcblxyXG5cdFx0dmFyIG1hdGVyaWFsVHlwZTtcclxuXHRcdHZhciBtYXRlcmlhbFBhcmFtcyA9IHt9O1xyXG5cdFx0dmFyIG1hdGVyaWFsRXh0ZW5zaW9ucyA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwge307XHJcblxyXG5cdFx0dmFyIHBlbmRpbmcgPSBbXTtcclxuXHJcblx0XHRpZiAoIG1hdGVyaWFsRXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTIF0gKSB7XHJcblxyXG5cdFx0XHR2YXIgc2dFeHRlbnNpb24gPSBleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1MgXTtcclxuXHRcdFx0bWF0ZXJpYWxUeXBlID0gc2dFeHRlbnNpb24uZ2V0TWF0ZXJpYWxUeXBlKCk7XHJcblx0XHRcdHBlbmRpbmcucHVzaCggc2dFeHRlbnNpb24uZXh0ZW5kUGFyYW1zKCBtYXRlcmlhbFBhcmFtcywgbWF0ZXJpYWxEZWYsIHBhcnNlciApICk7XHJcblxyXG5cdFx0fSBlbHNlIGlmICggbWF0ZXJpYWxFeHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVU5MSVQgXSApIHtcclxuXHJcblx0XHRcdHZhciBrbXVFeHRlbnNpb24gPSBleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVU5MSVQgXTtcclxuXHRcdFx0bWF0ZXJpYWxUeXBlID0ga211RXh0ZW5zaW9uLmdldE1hdGVyaWFsVHlwZSgpO1xyXG5cdFx0XHRwZW5kaW5nLnB1c2goIGttdUV4dGVuc2lvbi5leHRlbmRQYXJhbXMoIG1hdGVyaWFsUGFyYW1zLCBtYXRlcmlhbERlZiwgcGFyc2VyICkgKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0Ly8gU3BlY2lmaWNhdGlvbjpcclxuXHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI21ldGFsbGljLXJvdWdobmVzcy1tYXRlcmlhbFxyXG5cclxuXHRcdFx0dmFyIG1ldGFsbGljUm91Z2huZXNzID0gbWF0ZXJpYWxEZWYucGJyTWV0YWxsaWNSb3VnaG5lc3MgfHwge307XHJcblxyXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvciA9IG5ldyBDb2xvciggMS4wLCAxLjAsIDEuMCApO1xyXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gMS4wO1xyXG5cclxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3IgKSApIHtcclxuXHJcblx0XHRcdFx0dmFyIGFycmF5ID0gbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yO1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvci5mcm9tQXJyYXkoIGFycmF5ICk7XHJcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IGFycmF5WyAzIF07XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdtYXAnLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlICkgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1hdGVyaWFsUGFyYW1zLm1ldGFsbmVzcyA9IG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljRmFjdG9yICE9PSB1bmRlZmluZWQgPyBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY0ZhY3RvciA6IDEuMDtcclxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMucm91Z2huZXNzID0gbWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzRmFjdG9yICE9PSB1bmRlZmluZWQgPyBtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3NGYWN0b3IgOiAxLjA7XHJcblxyXG5cdFx0XHRpZiAoIG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ21ldGFsbmVzc01hcCcsIG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSApICk7XHJcblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdyb3VnaG5lc3NNYXAnLCBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgKSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWF0ZXJpYWxUeXBlID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGV4dC5nZXRNYXRlcmlhbFR5cGUgJiYgZXh0LmdldE1hdGVyaWFsVHlwZSggbWF0ZXJpYWxJbmRleCApO1xyXG5cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0cGVuZGluZy5wdXNoKCBQcm9taXNlLmFsbCggdGhpcy5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGV4dC5leHRlbmRNYXRlcmlhbFBhcmFtcyAmJiBleHQuZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICk7XHJcblxyXG5cdFx0XHR9ICkgKSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIG1hdGVyaWFsRGVmLmRvdWJsZVNpZGVkID09PSB0cnVlICkge1xyXG5cclxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuc2lkZSA9IERvdWJsZVNpZGU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBhbHBoYU1vZGUgPSBtYXRlcmlhbERlZi5hbHBoYU1vZGUgfHwgQUxQSEFfTU9ERVMuT1BBUVVFO1xyXG5cclxuXHRcdGlmICggYWxwaGFNb2RlID09PSBBTFBIQV9NT0RFUy5CTEVORCApIHtcclxuXHJcblx0XHRcdG1hdGVyaWFsUGFyYW1zLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuXHJcblx0XHRcdC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTc3MDZcclxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuZGVwdGhXcml0ZSA9IGZhbHNlO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy50cmFuc3BhcmVudCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0aWYgKCBhbHBoYU1vZGUgPT09IEFMUEhBX01PREVTLk1BU0sgKSB7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmFscGhhVGVzdCA9IG1hdGVyaWFsRGVmLmFscGhhQ3V0b2ZmICE9PSB1bmRlZmluZWQgPyBtYXRlcmlhbERlZi5hbHBoYUN1dG9mZiA6IDAuNTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxUeXBlICE9PSBNZXNoQmFzaWNNYXRlcmlhbCApIHtcclxuXHJcblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbm9ybWFsTWFwJywgbWF0ZXJpYWxEZWYubm9ybWFsVGV4dHVyZSApICk7XHJcblxyXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8xMTQzOCNpc3N1ZWNvbW1lbnQtNTA3MDAzOTk1XHJcblx0XHRcdG1hdGVyaWFsUGFyYW1zLm5vcm1hbFNjYWxlID0gbmV3IFZlY3RvcjIoIDEsIC0gMSApO1xyXG5cclxuXHRcdFx0aWYgKCBtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlLnNjYWxlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLm5vcm1hbFNjYWxlLnNldCggbWF0ZXJpYWxEZWYubm9ybWFsVGV4dHVyZS5zY2FsZSwgLSBtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlLnNjYWxlICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggbWF0ZXJpYWxEZWYub2NjbHVzaW9uVGV4dHVyZSAhPT0gdW5kZWZpbmVkICYmIG1hdGVyaWFsVHlwZSAhPT0gTWVzaEJhc2ljTWF0ZXJpYWwgKSB7XHJcblxyXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2FvTWFwJywgbWF0ZXJpYWxEZWYub2NjbHVzaW9uVGV4dHVyZSApICk7XHJcblxyXG5cdFx0XHRpZiAoIG1hdGVyaWFsRGVmLm9jY2x1c2lvblRleHR1cmUuc3RyZW5ndGggIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuYW9NYXBJbnRlbnNpdHkgPSBtYXRlcmlhbERlZi5vY2NsdXNpb25UZXh0dXJlLnN0cmVuZ3RoO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIG1hdGVyaWFsRGVmLmVtaXNzaXZlRmFjdG9yICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxUeXBlICE9PSBNZXNoQmFzaWNNYXRlcmlhbCApIHtcclxuXHJcblx0XHRcdG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlID0gbmV3IENvbG9yKCkuZnJvbUFycmF5KCBtYXRlcmlhbERlZi5lbWlzc2l2ZUZhY3RvciApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIG1hdGVyaWFsRGVmLmVtaXNzaXZlVGV4dHVyZSAhPT0gdW5kZWZpbmVkICYmIG1hdGVyaWFsVHlwZSAhPT0gTWVzaEJhc2ljTWF0ZXJpYWwgKSB7XHJcblxyXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2VtaXNzaXZlTWFwJywgbWF0ZXJpYWxEZWYuZW1pc3NpdmVUZXh0dXJlICkgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICkudGhlbiggZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0dmFyIG1hdGVyaWFsO1xyXG5cclxuXHRcdFx0aWYgKCBtYXRlcmlhbFR5cGUgPT09IEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsICkge1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbCA9IGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19QQlJfU1BFQ1VMQVJfR0xPU1NJTkVTUyBdLmNyZWF0ZU1hdGVyaWFsKCBtYXRlcmlhbFBhcmFtcyApO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWwgPSBuZXcgbWF0ZXJpYWxUeXBlKCBtYXRlcmlhbFBhcmFtcyApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBtYXRlcmlhbERlZi5uYW1lICkgbWF0ZXJpYWwubmFtZSA9IG1hdGVyaWFsRGVmLm5hbWU7XHJcblxyXG5cdFx0XHQvLyBiYXNlQ29sb3JUZXh0dXJlLCBlbWlzc2l2ZVRleHR1cmUsIGFuZCBzcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlIHVzZSBzUkdCIGVuY29kaW5nLlxyXG5cdFx0XHRpZiAoIG1hdGVyaWFsLm1hcCApIG1hdGVyaWFsLm1hcC5lbmNvZGluZyA9IHNSR0JFbmNvZGluZztcclxuXHRcdFx0aWYgKCBtYXRlcmlhbC5lbWlzc2l2ZU1hcCApIG1hdGVyaWFsLmVtaXNzaXZlTWFwLmVuY29kaW5nID0gc1JHQkVuY29kaW5nO1xyXG5cclxuXHRcdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggbWF0ZXJpYWwsIG1hdGVyaWFsRGVmICk7XHJcblxyXG5cdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLnNldCggbWF0ZXJpYWwsIHsgdHlwZTogJ21hdGVyaWFscycsIGluZGV4OiBtYXRlcmlhbEluZGV4IH0gKTtcclxuXHJcblx0XHRcdGlmICggbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyApIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSggZXh0ZW5zaW9ucywgbWF0ZXJpYWwsIG1hdGVyaWFsRGVmICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gbWF0ZXJpYWw7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKiogV2hlbiBPYmplY3QzRCBpbnN0YW5jZXMgYXJlIHRhcmdldGVkIGJ5IGFuaW1hdGlvbiwgdGhleSBuZWVkIHVuaXF1ZSBuYW1lcy4gKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5jcmVhdGVVbmlxdWVOYW1lID0gZnVuY3Rpb24gKCBvcmlnaW5hbE5hbWUgKSB7XHJcblxyXG5cdFx0dmFyIHNhbml0aXplZE5hbWUgPSBQcm9wZXJ0eUJpbmRpbmcuc2FuaXRpemVOb2RlTmFtZSggb3JpZ2luYWxOYW1lIHx8ICcnICk7XHJcblxyXG5cdFx0dmFyIG5hbWUgPSBzYW5pdGl6ZWROYW1lO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMTsgdGhpcy5ub2RlTmFtZXNVc2VkWyBuYW1lIF07ICsrIGkgKSB7XHJcblxyXG5cdFx0XHRuYW1lID0gc2FuaXRpemVkTmFtZSArICdfJyArIGk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubm9kZU5hbWVzVXNlZFsgbmFtZSBdID0gdHJ1ZTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcclxuXHQgKiBAcGFyYW0ge0dMVEYuUHJpbWl0aXZlfSBwcmltaXRpdmVEZWZcclxuXHQgKiBAcGFyYW0ge0dMVEZQYXJzZXJ9IHBhcnNlclxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGNvbXB1dGVCb3VuZHMoIGdlb21ldHJ5LCBwcmltaXRpdmVEZWYsIHBhcnNlciApIHtcclxuXHJcblx0XHR2YXIgYXR0cmlidXRlcyA9IHByaW1pdGl2ZURlZi5hdHRyaWJ1dGVzO1xyXG5cclxuXHRcdHZhciBib3ggPSBuZXcgQm94MygpO1xyXG5cclxuXHRcdGlmICggYXR0cmlidXRlcy5QT1NJVElPTiAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0dmFyIGFjY2Vzc29yID0gcGFyc2VyLmpzb24uYWNjZXNzb3JzWyBhdHRyaWJ1dGVzLlBPU0lUSU9OIF07XHJcblxyXG5cdFx0XHR2YXIgbWluID0gYWNjZXNzb3IubWluO1xyXG5cdFx0XHR2YXIgbWF4ID0gYWNjZXNzb3IubWF4O1xyXG5cclxuXHRcdFx0Ly8gZ2xURiByZXF1aXJlcyAnbWluJyBhbmQgJ21heCcsIGJ1dCBWUk0gKHdoaWNoIGV4dGVuZHMgZ2xURikgY3VycmVudGx5IGlnbm9yZXMgdGhhdCByZXF1aXJlbWVudC5cclxuXHJcblx0XHRcdGlmICggbWluICE9PSB1bmRlZmluZWQgJiYgbWF4ICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdGJveC5zZXQoXHJcblx0XHRcdFx0XHRuZXcgVmVjdG9yMyggbWluWyAwIF0sIG1pblsgMSBdLCBtaW5bIDIgXSApLFxyXG5cdFx0XHRcdFx0bmV3IFZlY3RvcjMoIG1heFsgMCBdLCBtYXhbIDEgXSwgbWF4WyAyIF0gKSApO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogTWlzc2luZyBtaW4vbWF4IHByb3BlcnRpZXMgZm9yIGFjY2Vzc29yIFBPU0lUSU9OLicgKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciB0YXJnZXRzID0gcHJpbWl0aXZlRGVmLnRhcmdldHM7XHJcblxyXG5cdFx0aWYgKCB0YXJnZXRzICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHR2YXIgbWF4RGlzcGxhY2VtZW50ID0gbmV3IFZlY3RvcjMoKTtcclxuXHRcdFx0dmFyIHZlY3RvciA9IG5ldyBWZWN0b3IzKCk7XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gdGFyZ2V0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0dmFyIHRhcmdldCA9IHRhcmdldHNbIGkgXTtcclxuXHJcblx0XHRcdFx0aWYgKCB0YXJnZXQuUE9TSVRJT04gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgYWNjZXNzb3IgPSBwYXJzZXIuanNvbi5hY2Nlc3NvcnNbIHRhcmdldC5QT1NJVElPTiBdO1xyXG5cdFx0XHRcdFx0dmFyIG1pbiA9IGFjY2Vzc29yLm1pbjtcclxuXHRcdFx0XHRcdHZhciBtYXggPSBhY2Nlc3Nvci5tYXg7XHJcblxyXG5cdFx0XHRcdFx0Ly8gZ2xURiByZXF1aXJlcyAnbWluJyBhbmQgJ21heCcsIGJ1dCBWUk0gKHdoaWNoIGV4dGVuZHMgZ2xURikgY3VycmVudGx5IGlnbm9yZXMgdGhhdCByZXF1aXJlbWVudC5cclxuXHJcblx0XHRcdFx0XHRpZiAoIG1pbiAhPT0gdW5kZWZpbmVkICYmIG1heCAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gd2UgbmVlZCB0byBnZXQgbWF4IG9mIGFic29sdXRlIGNvbXBvbmVudHMgYmVjYXVzZSB0YXJnZXQgd2VpZ2h0IGlzIFstMSwxXVxyXG5cdFx0XHRcdFx0XHR2ZWN0b3Iuc2V0WCggTWF0aC5tYXgoIE1hdGguYWJzKCBtaW5bIDAgXSApLCBNYXRoLmFicyggbWF4WyAwIF0gKSApICk7XHJcblx0XHRcdFx0XHRcdHZlY3Rvci5zZXRZKCBNYXRoLm1heCggTWF0aC5hYnMoIG1pblsgMSBdICksIE1hdGguYWJzKCBtYXhbIDEgXSApICkgKTtcclxuXHRcdFx0XHRcdFx0dmVjdG9yLnNldFooIE1hdGgubWF4KCBNYXRoLmFicyggbWluWyAyIF0gKSwgTWF0aC5hYnMoIG1heFsgMiBdICkgKSApO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gTm90ZTogdGhpcyBhc3N1bWVzIHRoYXQgdGhlIHN1bSBvZiBhbGwgd2VpZ2h0cyBpcyBhdCBtb3N0IDEuIFRoaXMgaXNuJ3QgcXVpdGUgY29ycmVjdCAtIGl0J3MgbW9yZSBjb25zZXJ2YXRpdmVcclxuXHRcdFx0XHRcdFx0Ly8gdG8gYXNzdW1lIHRoYXQgZWFjaCB0YXJnZXQgY2FuIGhhdmUgYSBtYXggd2VpZ2h0IG9mIDEuIEhvd2V2ZXIsIGZvciBzb21lIHVzZSBjYXNlcyAtIG5vdGFibHksIHdoZW4gbW9ycGggdGFyZ2V0c1xyXG5cdFx0XHRcdFx0XHQvLyBhcmUgdXNlZCB0byBpbXBsZW1lbnQga2V5LWZyYW1lIGFuaW1hdGlvbnMgYW5kIGFzIHN1Y2ggb25seSB0d28gYXJlIGFjdGl2ZSBhdCBhIHRpbWUgLSB0aGlzIHJlc3VsdHMgaW4gdmVyeSBsYXJnZVxyXG5cdFx0XHRcdFx0XHQvLyBib3hlcy4gU28gZm9yIG5vdyB3ZSBtYWtlIGEgYm94IHRoYXQncyBzb21ldGltZXMgYSB0b3VjaCB0b28gc21hbGwgYnV0IGlzIGhvcGVmdWxseSBtb3N0bHkgb2YgcmVhc29uYWJsZSBzaXplLlxyXG5cdFx0XHRcdFx0XHRtYXhEaXNwbGFjZW1lbnQubWF4KCB2ZWN0b3IgKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogTWlzc2luZyBtaW4vbWF4IHByb3BlcnRpZXMgZm9yIGFjY2Vzc29yIFBPU0lUSU9OLicgKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEFzIHBlciBjb21tZW50IGFib3ZlIHRoaXMgYm94IGlzbid0IGNvbnNlcnZhdGl2ZSwgYnV0IGhhcyBhIHJlYXNvbmFibGUgc2l6ZSBmb3IgYSB2ZXJ5IGxhcmdlIG51bWJlciBvZiBtb3JwaCB0YXJnZXRzLlxyXG5cdFx0XHRib3guZXhwYW5kQnlWZWN0b3IoIG1heERpc3BsYWNlbWVudCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRnZW9tZXRyeS5ib3VuZGluZ0JveCA9IGJveDtcclxuXHJcblx0XHR2YXIgc3BoZXJlID0gbmV3IFNwaGVyZSgpO1xyXG5cclxuXHRcdGJveC5nZXRDZW50ZXIoIHNwaGVyZS5jZW50ZXIgKTtcclxuXHRcdHNwaGVyZS5yYWRpdXMgPSBib3gubWluLmRpc3RhbmNlVG8oIGJveC5tYXggKSAvIDI7XHJcblxyXG5cdFx0Z2VvbWV0cnkuYm91bmRpbmdTcGhlcmUgPSBzcGhlcmU7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcclxuXHQgKiBAcGFyYW0ge0dMVEYuUHJpbWl0aXZlfSBwcmltaXRpdmVEZWZcclxuXHQgKiBAcGFyYW0ge0dMVEZQYXJzZXJ9IHBhcnNlclxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QnVmZmVyR2VvbWV0cnk+fVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGFkZFByaW1pdGl2ZUF0dHJpYnV0ZXMoIGdlb21ldHJ5LCBwcmltaXRpdmVEZWYsIHBhcnNlciApIHtcclxuXHJcblx0XHR2YXIgYXR0cmlidXRlcyA9IHByaW1pdGl2ZURlZi5hdHRyaWJ1dGVzO1xyXG5cclxuXHRcdHZhciBwZW5kaW5nID0gW107XHJcblxyXG5cdFx0ZnVuY3Rpb24gYXNzaWduQXR0cmlidXRlQWNjZXNzb3IoIGFjY2Vzc29ySW5kZXgsIGF0dHJpYnV0ZU5hbWUgKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIGFjY2Vzc29ySW5kZXggKVxyXG5cdFx0XHRcdC50aGVuKCBmdW5jdGlvbiAoIGFjY2Vzc29yICkge1xyXG5cclxuXHRcdFx0XHRcdGdlb21ldHJ5LnNldEF0dHJpYnV0ZSggYXR0cmlidXRlTmFtZSwgYWNjZXNzb3IgKTtcclxuXHJcblx0XHRcdFx0fSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCB2YXIgZ2x0ZkF0dHJpYnV0ZU5hbWUgaW4gYXR0cmlidXRlcyApIHtcclxuXHJcblx0XHRcdHZhciB0aHJlZUF0dHJpYnV0ZU5hbWUgPSBBVFRSSUJVVEVTWyBnbHRmQXR0cmlidXRlTmFtZSBdIHx8IGdsdGZBdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHQvLyBTa2lwIGF0dHJpYnV0ZXMgYWxyZWFkeSBwcm92aWRlZCBieSBlLmcuIERyYWNvIGV4dGVuc2lvbi5cclxuXHRcdFx0aWYgKCB0aHJlZUF0dHJpYnV0ZU5hbWUgaW4gZ2VvbWV0cnkuYXR0cmlidXRlcyApIGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0cGVuZGluZy5wdXNoKCBhc3NpZ25BdHRyaWJ1dGVBY2Nlc3NvciggYXR0cmlidXRlc1sgZ2x0ZkF0dHJpYnV0ZU5hbWUgXSwgdGhyZWVBdHRyaWJ1dGVOYW1lICkgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBwcmltaXRpdmVEZWYuaW5kaWNlcyAhPT0gdW5kZWZpbmVkICYmICEgZ2VvbWV0cnkuaW5kZXggKSB7XHJcblxyXG5cdFx0XHR2YXIgYWNjZXNzb3IgPSBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgcHJpbWl0aXZlRGVmLmluZGljZXMgKS50aGVuKCBmdW5jdGlvbiAoIGFjY2Vzc29yICkge1xyXG5cclxuXHRcdFx0XHRnZW9tZXRyeS5zZXRJbmRleCggYWNjZXNzb3IgKTtcclxuXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHRcdHBlbmRpbmcucHVzaCggYWNjZXNzb3IgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggZ2VvbWV0cnksIHByaW1pdGl2ZURlZiApO1xyXG5cclxuXHRcdGNvbXB1dGVCb3VuZHMoIGdlb21ldHJ5LCBwcmltaXRpdmVEZWYsIHBhcnNlciApO1xyXG5cclxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApLnRoZW4oIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdHJldHVybiBwcmltaXRpdmVEZWYudGFyZ2V0cyAhPT0gdW5kZWZpbmVkXHJcblx0XHRcdFx0PyBhZGRNb3JwaFRhcmdldHMoIGdlb21ldHJ5LCBwcmltaXRpdmVEZWYudGFyZ2V0cywgcGFyc2VyIClcclxuXHRcdFx0XHQ6IGdlb21ldHJ5O1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge0J1ZmZlckdlb21ldHJ5fSBnZW9tZXRyeVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBkcmF3TW9kZVxyXG5cdCAqIEByZXR1cm4ge0J1ZmZlckdlb21ldHJ5fVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHRvVHJpYW5nbGVzRHJhd01vZGUoIGdlb21ldHJ5LCBkcmF3TW9kZSApIHtcclxuXHJcblx0XHR2YXIgaW5kZXggPSBnZW9tZXRyeS5nZXRJbmRleCgpO1xyXG5cclxuXHRcdC8vIGdlbmVyYXRlIGluZGV4IGlmIG5vdCBwcmVzZW50XHJcblxyXG5cdFx0aWYgKCBpbmRleCA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRcdHZhciBpbmRpY2VzID0gW107XHJcblxyXG5cdFx0XHR2YXIgcG9zaXRpb24gPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoICdwb3NpdGlvbicgKTtcclxuXHJcblx0XHRcdGlmICggcG9zaXRpb24gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgcG9zaXRpb24uY291bnQ7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0aW5kaWNlcy5wdXNoKCBpICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Z2VvbWV0cnkuc2V0SW5kZXgoIGluZGljZXMgKTtcclxuXHRcdFx0XHRpbmRleCA9IGdlb21ldHJ5LmdldEluZGV4KCk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuR0xURkxvYWRlci50b1RyaWFuZ2xlc0RyYXdNb2RlKCk6IFVuZGVmaW5lZCBwb3NpdGlvbiBhdHRyaWJ1dGUuIFByb2Nlc3Npbmcgbm90IHBvc3NpYmxlLicgKTtcclxuXHRcdFx0XHRyZXR1cm4gZ2VvbWV0cnk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vXHJcblxyXG5cdFx0dmFyIG51bWJlck9mVHJpYW5nbGVzID0gaW5kZXguY291bnQgLSAyO1xyXG5cdFx0dmFyIG5ld0luZGljZXMgPSBbXTtcclxuXHJcblx0XHRpZiAoIGRyYXdNb2RlID09PSBUcmlhbmdsZUZhbkRyYXdNb2RlICkge1xyXG5cclxuXHRcdFx0Ly8gZ2wuVFJJQU5HTEVfRkFOXHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDE7IGkgPD0gbnVtYmVyT2ZUcmlhbmdsZXM7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggMCApICk7XHJcblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICkgKTtcclxuXHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAxICkgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0Ly8gZ2wuVFJJQU5HTEVfU1RSSVBcclxuXHJcblx0XHRcdGZvciAoIHZhciBpID0gMDsgaSA8IG51bWJlck9mVHJpYW5nbGVzOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRpZiAoIGkgJSAyID09PSAwICkge1xyXG5cclxuXHRcdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSApICk7XHJcblx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAxICkgKTtcclxuXHRcdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDIgKSApO1xyXG5cclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAyICkgKTtcclxuXHRcdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDEgKSApO1xyXG5cdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICkgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoICggbmV3SW5kaWNlcy5sZW5ndGggLyAzICkgIT09IG51bWJlck9mVHJpYW5nbGVzICkge1xyXG5cclxuXHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkdMVEZMb2FkZXIudG9UcmlhbmdsZXNEcmF3TW9kZSgpOiBVbmFibGUgdG8gZ2VuZXJhdGUgY29ycmVjdCBhbW91bnQgb2YgdHJpYW5nbGVzLicgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYnVpbGQgZmluYWwgZ2VvbWV0cnlcclxuXHJcblx0XHR2YXIgbmV3R2VvbWV0cnkgPSBnZW9tZXRyeS5jbG9uZSgpO1xyXG5cdFx0bmV3R2VvbWV0cnkuc2V0SW5kZXgoIG5ld0luZGljZXMgKTtcclxuXHJcblx0XHRyZXR1cm4gbmV3R2VvbWV0cnk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNnZW9tZXRyeVxyXG5cdCAqXHJcblx0ICogQ3JlYXRlcyBCdWZmZXJHZW9tZXRyaWVzIGZyb20gcHJpbWl0aXZlcy5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7QXJyYXk8R0xURi5QcmltaXRpdmU+fSBwcmltaXRpdmVzXHJcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheTxCdWZmZXJHZW9tZXRyeT4+fVxyXG5cdCAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmxvYWRHZW9tZXRyaWVzID0gZnVuY3Rpb24gKCBwcmltaXRpdmVzICkge1xyXG5cclxuXHRcdHZhciBwYXJzZXIgPSB0aGlzO1xyXG5cdFx0dmFyIGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XHJcblx0XHR2YXIgY2FjaGUgPSB0aGlzLnByaW1pdGl2ZUNhY2hlO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGNyZWF0ZURyYWNvUHJpbWl0aXZlKCBwcmltaXRpdmUgKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTiBdXHJcblx0XHRcdFx0LmRlY29kZVByaW1pdGl2ZSggcHJpbWl0aXZlLCBwYXJzZXIgKVxyXG5cdFx0XHRcdC50aGVuKCBmdW5jdGlvbiAoIGdlb21ldHJ5ICkge1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiBhZGRQcmltaXRpdmVBdHRyaWJ1dGVzKCBnZW9tZXRyeSwgcHJpbWl0aXZlLCBwYXJzZXIgKTtcclxuXHJcblx0XHRcdFx0fSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgcGVuZGluZyA9IFtdO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSBwcmltaXRpdmVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0dmFyIHByaW1pdGl2ZSA9IHByaW1pdGl2ZXNbIGkgXTtcclxuXHRcdFx0dmFyIGNhY2hlS2V5ID0gY3JlYXRlUHJpbWl0aXZlS2V5KCBwcmltaXRpdmUgKTtcclxuXHJcblx0XHRcdC8vIFNlZSBpZiB3ZSd2ZSBhbHJlYWR5IGNyZWF0ZWQgdGhpcyBnZW9tZXRyeVxyXG5cdFx0XHR2YXIgY2FjaGVkID0gY2FjaGVbIGNhY2hlS2V5IF07XHJcblxyXG5cdFx0XHRpZiAoIGNhY2hlZCApIHtcclxuXHJcblx0XHRcdFx0Ly8gVXNlIHRoZSBjYWNoZWQgZ2VvbWV0cnkgaWYgaXQgZXhpc3RzXHJcblx0XHRcdFx0cGVuZGluZy5wdXNoKCBjYWNoZWQucHJvbWlzZSApO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0dmFyIGdlb21ldHJ5UHJvbWlzZTtcclxuXHJcblx0XHRcdFx0aWYgKCBwcmltaXRpdmUuZXh0ZW5zaW9ucyAmJiBwcmltaXRpdmUuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTiBdICkge1xyXG5cclxuXHRcdFx0XHRcdC8vIFVzZSBEUkFDTyBnZW9tZXRyeSBpZiBhdmFpbGFibGVcclxuXHRcdFx0XHRcdGdlb21ldHJ5UHJvbWlzZSA9IGNyZWF0ZURyYWNvUHJpbWl0aXZlKCBwcmltaXRpdmUgKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHQvLyBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGdlb21ldHJ5XHJcblx0XHRcdFx0XHRnZW9tZXRyeVByb21pc2UgPSBhZGRQcmltaXRpdmVBdHRyaWJ1dGVzKCBuZXcgQnVmZmVyR2VvbWV0cnkoKSwgcHJpbWl0aXZlLCBwYXJzZXIgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBDYWNoZSB0aGlzIGdlb21ldHJ5XHJcblx0XHRcdFx0Y2FjaGVbIGNhY2hlS2V5IF0gPSB7IHByaW1pdGl2ZTogcHJpbWl0aXZlLCBwcm9taXNlOiBnZW9tZXRyeVByb21pc2UgfTtcclxuXHJcblx0XHRcdFx0cGVuZGluZy5wdXNoKCBnZW9tZXRyeVByb21pc2UgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjbWVzaGVzXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IG1lc2hJbmRleFxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8R3JvdXB8TWVzaHxTa2lubmVkTWVzaD59XHJcblx0ICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUubG9hZE1lc2ggPSBmdW5jdGlvbiAoIG1lc2hJbmRleCApIHtcclxuXHJcblx0XHR2YXIgcGFyc2VyID0gdGhpcztcclxuXHRcdHZhciBqc29uID0gdGhpcy5qc29uO1xyXG5cdFx0dmFyIGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XHJcblxyXG5cdFx0dmFyIG1lc2hEZWYgPSBqc29uLm1lc2hlc1sgbWVzaEluZGV4IF07XHJcblx0XHR2YXIgcHJpbWl0aXZlcyA9IG1lc2hEZWYucHJpbWl0aXZlcztcclxuXHJcblx0XHR2YXIgcGVuZGluZyA9IFtdO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSBwcmltaXRpdmVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0dmFyIG1hdGVyaWFsID0gcHJpbWl0aXZlc1sgaSBdLm1hdGVyaWFsID09PSB1bmRlZmluZWRcclxuXHRcdFx0XHQ/IGNyZWF0ZURlZmF1bHRNYXRlcmlhbCggdGhpcy5jYWNoZSApXHJcblx0XHRcdFx0OiB0aGlzLmdldERlcGVuZGVuY3koICdtYXRlcmlhbCcsIHByaW1pdGl2ZXNbIGkgXS5tYXRlcmlhbCApO1xyXG5cclxuXHRcdFx0cGVuZGluZy5wdXNoKCBtYXRlcmlhbCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5sb2FkR2VvbWV0cmllcyggcHJpbWl0aXZlcyApICk7XHJcblxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICkudGhlbiggZnVuY3Rpb24gKCByZXN1bHRzICkge1xyXG5cclxuXHRcdFx0dmFyIG1hdGVyaWFscyA9IHJlc3VsdHMuc2xpY2UoIDAsIHJlc3VsdHMubGVuZ3RoIC0gMSApO1xyXG5cdFx0XHR2YXIgZ2VvbWV0cmllcyA9IHJlc3VsdHNbIHJlc3VsdHMubGVuZ3RoIC0gMSBdO1xyXG5cclxuXHRcdFx0dmFyIG1lc2hlcyA9IFtdO1xyXG5cclxuXHRcdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IGdlb21ldHJpZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBnZW9tZXRyeSA9IGdlb21ldHJpZXNbIGkgXTtcclxuXHRcdFx0XHR2YXIgcHJpbWl0aXZlID0gcHJpbWl0aXZlc1sgaSBdO1xyXG5cclxuXHRcdFx0XHQvLyAxLiBjcmVhdGUgTWVzaFxyXG5cclxuXHRcdFx0XHR2YXIgbWVzaDtcclxuXHJcblx0XHRcdFx0dmFyIG1hdGVyaWFsID0gbWF0ZXJpYWxzWyBpIF07XHJcblxyXG5cdFx0XHRcdGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRVMgfHxcclxuXHRcdFx0XHRcdHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVfU1RSSVAgfHxcclxuXHRcdFx0XHRcdHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVfRkFOIHx8XHJcblx0XHRcdFx0XHRwcmltaXRpdmUubW9kZSA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRcdC8vIC5pc1NraW5uZWRNZXNoIGlzbid0IGluIGdsVEYgc3BlYy4gU2VlIC5fbWFya0RlZnMoKVxyXG5cdFx0XHRcdFx0bWVzaCA9IG1lc2hEZWYuaXNTa2lubmVkTWVzaCA9PT0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHQ/IG5ldyBTa2lubmVkTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsIClcclxuXHRcdFx0XHRcdFx0OiBuZXcgTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBtZXNoLmlzU2tpbm5lZE1lc2ggPT09IHRydWUgJiYgISBtZXNoLmdlb21ldHJ5LmF0dHJpYnV0ZXMuc2tpbldlaWdodC5ub3JtYWxpemVkICkge1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gd2Ugbm9ybWFsaXplIGZsb2F0aW5nIHBvaW50IHNraW4gd2VpZ2h0IGFycmF5IHRvIGZpeCBtYWxmb3JtZWQgYXNzZXRzIChzZWUgIzE1MzE5KVxyXG5cdFx0XHRcdFx0XHQvLyBpdCdzIGltcG9ydGFudCB0byBza2lwIHRoaXMgZm9yIG5vbi1mbG9hdDMyIGRhdGEgc2luY2Ugbm9ybWFsaXplU2tpbldlaWdodHMgYXNzdW1lcyBub24tbm9ybWFsaXplZCBpbnB1dHNcclxuXHRcdFx0XHRcdFx0bWVzaC5ub3JtYWxpemVTa2luV2VpZ2h0cygpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVfU1RSSVAgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRtZXNoLmdlb21ldHJ5ID0gdG9UcmlhbmdsZXNEcmF3TW9kZSggbWVzaC5nZW9tZXRyeSwgVHJpYW5nbGVTdHJpcERyYXdNb2RlICk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRV9GQU4gKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRtZXNoLmdlb21ldHJ5ID0gdG9UcmlhbmdsZXNEcmF3TW9kZSggbWVzaC5nZW9tZXRyeSwgVHJpYW5nbGVGYW5EcmF3TW9kZSApO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5MSU5FUyApIHtcclxuXHJcblx0XHRcdFx0XHRtZXNoID0gbmV3IExpbmVTZWdtZW50cyggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuTElORV9TVFJJUCApIHtcclxuXHJcblx0XHRcdFx0XHRtZXNoID0gbmV3IExpbmUoIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLkxJTkVfTE9PUCApIHtcclxuXHJcblx0XHRcdFx0XHRtZXNoID0gbmV3IExpbmVMb29wKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5QT0lOVFMgKSB7XHJcblxyXG5cdFx0XHRcdFx0bWVzaCA9IG5ldyBQb2ludHMoIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFByaW1pdGl2ZSBtb2RlIHVuc3VwcG9ydGVkOiAnICsgcHJpbWl0aXZlLm1vZGUgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIE9iamVjdC5rZXlzKCBtZXNoLmdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcyApLmxlbmd0aCA+IDAgKSB7XHJcblxyXG5cdFx0XHRcdFx0dXBkYXRlTW9ycGhUYXJnZXRzKCBtZXNoLCBtZXNoRGVmICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bWVzaC5uYW1lID0gcGFyc2VyLmNyZWF0ZVVuaXF1ZU5hbWUoIG1lc2hEZWYubmFtZSB8fCAoICdtZXNoXycgKyBtZXNoSW5kZXggKSApO1xyXG5cclxuXHRcdFx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBtZXNoLCBtZXNoRGVmICk7XHJcblxyXG5cdFx0XHRcdGlmICggcHJpbWl0aXZlLmV4dGVuc2lvbnMgKSBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIG1lc2gsIHByaW1pdGl2ZSApO1xyXG5cclxuXHRcdFx0XHRwYXJzZXIuYXNzaWduRmluYWxNYXRlcmlhbCggbWVzaCApO1xyXG5cclxuXHRcdFx0XHRtZXNoZXMucHVzaCggbWVzaCApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBtZXNoZXMubGVuZ3RoID09PSAxICkge1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gbWVzaGVzWyAwIF07XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcclxuXHJcblx0XHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSBtZXNoZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdGdyb3VwLmFkZCggbWVzaGVzWyBpIF0gKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBncm91cDtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNjYW1lcmFzXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNhbWVyYUluZGV4XHJcblx0ICogQHJldHVybiB7UHJvbWlzZTxUSFJFRS5DYW1lcmE+fVxyXG5cdCAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmxvYWRDYW1lcmEgPSBmdW5jdGlvbiAoIGNhbWVyYUluZGV4ICkge1xyXG5cclxuXHRcdHZhciBjYW1lcmE7XHJcblx0XHR2YXIgY2FtZXJhRGVmID0gdGhpcy5qc29uLmNhbWVyYXNbIGNhbWVyYUluZGV4IF07XHJcblx0XHR2YXIgcGFyYW1zID0gY2FtZXJhRGVmWyBjYW1lcmFEZWYudHlwZSBdO1xyXG5cclxuXHRcdGlmICggISBwYXJhbXMgKSB7XHJcblxyXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBNaXNzaW5nIGNhbWVyYSBwYXJhbWV0ZXJzLicgKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGNhbWVyYURlZi50eXBlID09PSAncGVyc3BlY3RpdmUnICkge1xyXG5cclxuXHRcdFx0Y2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKCBNYXRoVXRpbHMucmFkVG9EZWcoIHBhcmFtcy55Zm92ICksIHBhcmFtcy5hc3BlY3RSYXRpbyB8fCAxLCBwYXJhbXMuem5lYXIgfHwgMSwgcGFyYW1zLnpmYXIgfHwgMmU2ICk7XHJcblxyXG5cdFx0fSBlbHNlIGlmICggY2FtZXJhRGVmLnR5cGUgPT09ICdvcnRob2dyYXBoaWMnICkge1xyXG5cclxuXHRcdFx0Y2FtZXJhID0gbmV3IE9ydGhvZ3JhcGhpY0NhbWVyYSggLSBwYXJhbXMueG1hZywgcGFyYW1zLnhtYWcsIHBhcmFtcy55bWFnLCAtIHBhcmFtcy55bWFnLCBwYXJhbXMuem5lYXIsIHBhcmFtcy56ZmFyICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggY2FtZXJhRGVmLm5hbWUgKSBjYW1lcmEubmFtZSA9IHRoaXMuY3JlYXRlVW5pcXVlTmFtZSggY2FtZXJhRGVmLm5hbWUgKTtcclxuXHJcblx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBjYW1lcmEsIGNhbWVyYURlZiApO1xyXG5cclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoIGNhbWVyYSApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjc2tpbnNcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2tpbkluZGV4XHJcblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxyXG5cdCAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmxvYWRTa2luID0gZnVuY3Rpb24gKCBza2luSW5kZXggKSB7XHJcblxyXG5cdFx0dmFyIHNraW5EZWYgPSB0aGlzLmpzb24uc2tpbnNbIHNraW5JbmRleCBdO1xyXG5cclxuXHRcdHZhciBza2luRW50cnkgPSB7IGpvaW50czogc2tpbkRlZi5qb2ludHMgfTtcclxuXHJcblx0XHRpZiAoIHNraW5EZWYuaW52ZXJzZUJpbmRNYXRyaWNlcyA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggc2tpbkVudHJ5ICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIHNraW5EZWYuaW52ZXJzZUJpbmRNYXRyaWNlcyApLnRoZW4oIGZ1bmN0aW9uICggYWNjZXNzb3IgKSB7XHJcblxyXG5cdFx0XHRza2luRW50cnkuaW52ZXJzZUJpbmRNYXRyaWNlcyA9IGFjY2Vzc29yO1xyXG5cclxuXHRcdFx0cmV0dXJuIHNraW5FbnRyeTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNhbmltYXRpb25zXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IGFuaW1hdGlvbkluZGV4XHJcblx0ICogQHJldHVybiB7UHJvbWlzZTxBbmltYXRpb25DbGlwPn1cclxuXHQgKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkQW5pbWF0aW9uID0gZnVuY3Rpb24gKCBhbmltYXRpb25JbmRleCApIHtcclxuXHJcblx0XHR2YXIganNvbiA9IHRoaXMuanNvbjtcclxuXHJcblx0XHR2YXIgYW5pbWF0aW9uRGVmID0ganNvbi5hbmltYXRpb25zWyBhbmltYXRpb25JbmRleCBdO1xyXG5cclxuXHRcdHZhciBwZW5kaW5nTm9kZXMgPSBbXTtcclxuXHRcdHZhciBwZW5kaW5nSW5wdXRBY2Nlc3NvcnMgPSBbXTtcclxuXHRcdHZhciBwZW5kaW5nT3V0cHV0QWNjZXNzb3JzID0gW107XHJcblx0XHR2YXIgcGVuZGluZ1NhbXBsZXJzID0gW107XHJcblx0XHR2YXIgcGVuZGluZ1RhcmdldHMgPSBbXTtcclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gYW5pbWF0aW9uRGVmLmNoYW5uZWxzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0dmFyIGNoYW5uZWwgPSBhbmltYXRpb25EZWYuY2hhbm5lbHNbIGkgXTtcclxuXHRcdFx0dmFyIHNhbXBsZXIgPSBhbmltYXRpb25EZWYuc2FtcGxlcnNbIGNoYW5uZWwuc2FtcGxlciBdO1xyXG5cdFx0XHR2YXIgdGFyZ2V0ID0gY2hhbm5lbC50YXJnZXQ7XHJcblx0XHRcdHZhciBuYW1lID0gdGFyZ2V0Lm5vZGUgIT09IHVuZGVmaW5lZCA/IHRhcmdldC5ub2RlIDogdGFyZ2V0LmlkOyAvLyBOT1RFOiB0YXJnZXQuaWQgaXMgZGVwcmVjYXRlZC5cclxuXHRcdFx0dmFyIGlucHV0ID0gYW5pbWF0aW9uRGVmLnBhcmFtZXRlcnMgIT09IHVuZGVmaW5lZCA/IGFuaW1hdGlvbkRlZi5wYXJhbWV0ZXJzWyBzYW1wbGVyLmlucHV0IF0gOiBzYW1wbGVyLmlucHV0O1xyXG5cdFx0XHR2YXIgb3V0cHV0ID0gYW5pbWF0aW9uRGVmLnBhcmFtZXRlcnMgIT09IHVuZGVmaW5lZCA/IGFuaW1hdGlvbkRlZi5wYXJhbWV0ZXJzWyBzYW1wbGVyLm91dHB1dCBdIDogc2FtcGxlci5vdXRwdXQ7XHJcblxyXG5cdFx0XHRwZW5kaW5nTm9kZXMucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnbm9kZScsIG5hbWUgKSApO1xyXG5cdFx0XHRwZW5kaW5nSW5wdXRBY2Nlc3NvcnMucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCBpbnB1dCApICk7XHJcblx0XHRcdHBlbmRpbmdPdXRwdXRBY2Nlc3NvcnMucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCBvdXRwdXQgKSApO1xyXG5cdFx0XHRwZW5kaW5nU2FtcGxlcnMucHVzaCggc2FtcGxlciApO1xyXG5cdFx0XHRwZW5kaW5nVGFyZ2V0cy5wdXNoKCB0YXJnZXQgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBbXHJcblxyXG5cdFx0XHRQcm9taXNlLmFsbCggcGVuZGluZ05vZGVzICksXHJcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nSW5wdXRBY2Nlc3NvcnMgKSxcclxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdPdXRwdXRBY2Nlc3NvcnMgKSxcclxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdTYW1wbGVycyApLFxyXG5cdFx0XHRQcm9taXNlLmFsbCggcGVuZGluZ1RhcmdldHMgKVxyXG5cclxuXHRcdF0gKS50aGVuKCBmdW5jdGlvbiAoIGRlcGVuZGVuY2llcyApIHtcclxuXHJcblx0XHRcdHZhciBub2RlcyA9IGRlcGVuZGVuY2llc1sgMCBdO1xyXG5cdFx0XHR2YXIgaW5wdXRBY2Nlc3NvcnMgPSBkZXBlbmRlbmNpZXNbIDEgXTtcclxuXHRcdFx0dmFyIG91dHB1dEFjY2Vzc29ycyA9IGRlcGVuZGVuY2llc1sgMiBdO1xyXG5cdFx0XHR2YXIgc2FtcGxlcnMgPSBkZXBlbmRlbmNpZXNbIDMgXTtcclxuXHRcdFx0dmFyIHRhcmdldHMgPSBkZXBlbmRlbmNpZXNbIDQgXTtcclxuXHJcblx0XHRcdHZhciB0cmFja3MgPSBbXTtcclxuXHJcblx0XHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSBub2Rlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0dmFyIG5vZGUgPSBub2Rlc1sgaSBdO1xyXG5cdFx0XHRcdHZhciBpbnB1dEFjY2Vzc29yID0gaW5wdXRBY2Nlc3NvcnNbIGkgXTtcclxuXHRcdFx0XHR2YXIgb3V0cHV0QWNjZXNzb3IgPSBvdXRwdXRBY2Nlc3NvcnNbIGkgXTtcclxuXHRcdFx0XHR2YXIgc2FtcGxlciA9IHNhbXBsZXJzWyBpIF07XHJcblx0XHRcdFx0dmFyIHRhcmdldCA9IHRhcmdldHNbIGkgXTtcclxuXHJcblx0XHRcdFx0aWYgKCBub2RlID09PSB1bmRlZmluZWQgKSBjb250aW51ZTtcclxuXHJcblx0XHRcdFx0bm9kZS51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRub2RlLm1hdHJpeEF1dG9VcGRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHR2YXIgVHlwZWRLZXlmcmFtZVRyYWNrO1xyXG5cclxuXHRcdFx0XHRzd2l0Y2ggKCBQQVRIX1BST1BFUlRJRVNbIHRhcmdldC5wYXRoIF0gKSB7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSBQQVRIX1BST1BFUlRJRVMud2VpZ2h0czpcclxuXHJcblx0XHRcdFx0XHRcdFR5cGVkS2V5ZnJhbWVUcmFjayA9IE51bWJlcktleWZyYW1lVHJhY2s7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgUEFUSF9QUk9QRVJUSUVTLnJvdGF0aW9uOlxyXG5cclxuXHRcdFx0XHRcdFx0VHlwZWRLZXlmcmFtZVRyYWNrID0gUXVhdGVybmlvbktleWZyYW1lVHJhY2s7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgUEFUSF9QUk9QRVJUSUVTLnBvc2l0aW9uOlxyXG5cdFx0XHRcdFx0Y2FzZSBQQVRIX1BST1BFUlRJRVMuc2NhbGU6XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cclxuXHRcdFx0XHRcdFx0VHlwZWRLZXlmcmFtZVRyYWNrID0gVmVjdG9yS2V5ZnJhbWVUcmFjaztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIHRhcmdldE5hbWUgPSBub2RlLm5hbWUgPyBub2RlLm5hbWUgOiBub2RlLnV1aWQ7XHJcblxyXG5cdFx0XHRcdHZhciBpbnRlcnBvbGF0aW9uID0gc2FtcGxlci5pbnRlcnBvbGF0aW9uICE9PSB1bmRlZmluZWQgPyBJTlRFUlBPTEFUSU9OWyBzYW1wbGVyLmludGVycG9sYXRpb24gXSA6IEludGVycG9sYXRlTGluZWFyO1xyXG5cclxuXHRcdFx0XHR2YXIgdGFyZ2V0TmFtZXMgPSBbXTtcclxuXHJcblx0XHRcdFx0aWYgKCBQQVRIX1BST1BFUlRJRVNbIHRhcmdldC5wYXRoIF0gPT09IFBBVEhfUFJPUEVSVElFUy53ZWlnaHRzICkge1xyXG5cclxuXHRcdFx0XHRcdC8vIE5vZGUgbWF5IGJlIGEgR3JvdXAgKGdsVEYgbWVzaCB3aXRoIHNldmVyYWwgcHJpbWl0aXZlcykgb3IgYSBNZXNoLlxyXG5cdFx0XHRcdFx0bm9kZS50cmF2ZXJzZSggZnVuY3Rpb24gKCBvYmplY3QgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIG9iamVjdC5pc01lc2ggPT09IHRydWUgJiYgb2JqZWN0Lm1vcnBoVGFyZ2V0SW5mbHVlbmNlcyApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dGFyZ2V0TmFtZXMucHVzaCggb2JqZWN0Lm5hbWUgPyBvYmplY3QubmFtZSA6IG9iamVjdC51dWlkICk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdHRhcmdldE5hbWVzLnB1c2goIHRhcmdldE5hbWUgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgb3V0cHV0QXJyYXkgPSBvdXRwdXRBY2Nlc3Nvci5hcnJheTtcclxuXHJcblx0XHRcdFx0aWYgKCBvdXRwdXRBY2Nlc3Nvci5ub3JtYWxpemVkICkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBzY2FsZTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIG91dHB1dEFycmF5LmNvbnN0cnVjdG9yID09PSBJbnQ4QXJyYXkgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzY2FsZSA9IDEgLyAxMjc7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICggb3V0cHV0QXJyYXkuY29uc3RydWN0b3IgPT09IFVpbnQ4QXJyYXkgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzY2FsZSA9IDEgLyAyNTU7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICggb3V0cHV0QXJyYXkuY29uc3RydWN0b3IgPT0gSW50MTZBcnJheSApIHtcclxuXHJcblx0XHRcdFx0XHRcdHNjYWxlID0gMSAvIDMyNzY3O1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIG91dHB1dEFycmF5LmNvbnN0cnVjdG9yID09PSBVaW50MTZBcnJheSApIHtcclxuXHJcblx0XHRcdFx0XHRcdHNjYWxlID0gMSAvIDY1NTM1O1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBVbnN1cHBvcnRlZCBvdXRwdXQgYWNjZXNzb3IgY29tcG9uZW50IHR5cGUuJyApO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR2YXIgc2NhbGVkID0gbmV3IEZsb2F0MzJBcnJheSggb3V0cHV0QXJyYXkubGVuZ3RoICk7XHJcblxyXG5cdFx0XHRcdFx0Zm9yICggdmFyIGogPSAwLCBqbCA9IG91dHB1dEFycmF5Lmxlbmd0aDsgaiA8IGpsOyBqICsrICkge1xyXG5cclxuXHRcdFx0XHRcdFx0c2NhbGVkWyBqIF0gPSBvdXRwdXRBcnJheVsgaiBdICogc2NhbGU7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdG91dHB1dEFycmF5ID0gc2NhbGVkO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGZvciAoIHZhciBqID0gMCwgamwgPSB0YXJnZXROYW1lcy5sZW5ndGg7IGogPCBqbDsgaiArKyApIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgdHJhY2sgPSBuZXcgVHlwZWRLZXlmcmFtZVRyYWNrKFxyXG5cdFx0XHRcdFx0XHR0YXJnZXROYW1lc1sgaiBdICsgJy4nICsgUEFUSF9QUk9QRVJUSUVTWyB0YXJnZXQucGF0aCBdLFxyXG5cdFx0XHRcdFx0XHRpbnB1dEFjY2Vzc29yLmFycmF5LFxyXG5cdFx0XHRcdFx0XHRvdXRwdXRBcnJheSxcclxuXHRcdFx0XHRcdFx0aW50ZXJwb2xhdGlvblxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHQvLyBPdmVycmlkZSBpbnRlcnBvbGF0aW9uIHdpdGggY3VzdG9tIGZhY3RvcnkgbWV0aG9kLlxyXG5cdFx0XHRcdFx0aWYgKCBzYW1wbGVyLmludGVycG9sYXRpb24gPT09ICdDVUJJQ1NQTElORScgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR0cmFjay5jcmVhdGVJbnRlcnBvbGFudCA9IGZ1bmN0aW9uIEludGVycG9sYW50RmFjdG9yeU1ldGhvZEdMVEZDdWJpY1NwbGluZSggcmVzdWx0ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBBIENVQklDU1BMSU5FIGtleWZyYW1lIGluIGdsVEYgaGFzIHRocmVlIG91dHB1dCB2YWx1ZXMgZm9yIGVhY2ggaW5wdXQgdmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0Ly8gcmVwcmVzZW50aW5nIGluVGFuZ2VudCwgc3BsaW5lVmVydGV4LCBhbmQgb3V0VGFuZ2VudC4gQXMgYSByZXN1bHQsIHRyYWNrLmdldFZhbHVlU2l6ZSgpXHJcblx0XHRcdFx0XHRcdFx0Ly8gbXVzdCBiZSBkaXZpZGVkIGJ5IHRocmVlIHRvIGdldCB0aGUgaW50ZXJwb2xhbnQncyBzYW1wbGVTaXplIGFyZ3VtZW50LlxyXG5cclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbmV3IEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50KCB0aGlzLnRpbWVzLCB0aGlzLnZhbHVlcywgdGhpcy5nZXRWYWx1ZVNpemUoKSAvIDMsIHJlc3VsdCApO1xyXG5cclxuXHRcdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIE1hcmsgYXMgQ1VCSUNTUExJTkUuIGB0cmFjay5nZXRJbnRlcnBvbGF0aW9uKClgIGRvZXNuJ3Qgc3VwcG9ydCBjdXN0b20gaW50ZXJwb2xhbnRzLlxyXG5cdFx0XHRcdFx0XHR0cmFjay5jcmVhdGVJbnRlcnBvbGFudC5pc0ludGVycG9sYW50RmFjdG9yeU1ldGhvZEdMVEZDdWJpY1NwbGluZSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRyYWNrcy5wdXNoKCB0cmFjayApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgbmFtZSA9IGFuaW1hdGlvbkRlZi5uYW1lID8gYW5pbWF0aW9uRGVmLm5hbWUgOiAnYW5pbWF0aW9uXycgKyBhbmltYXRpb25JbmRleDtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgQW5pbWF0aW9uQ2xpcCggbmFtZSwgdW5kZWZpbmVkLCB0cmFja3MgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNub2Rlcy1hbmQtaGllcmFyY2h5XHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IG5vZGVJbmRleFxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0M0Q+fVxyXG5cdCAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmxvYWROb2RlID0gZnVuY3Rpb24gKCBub2RlSW5kZXggKSB7XHJcblxyXG5cdFx0dmFyIGpzb24gPSB0aGlzLmpzb247XHJcblx0XHR2YXIgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcclxuXHRcdHZhciBwYXJzZXIgPSB0aGlzO1xyXG5cclxuXHRcdHZhciBub2RlRGVmID0ganNvbi5ub2Rlc1sgbm9kZUluZGV4IF07XHJcblxyXG5cdFx0Ly8gcmVzZXJ2ZSBub2RlJ3MgbmFtZSBiZWZvcmUgaXRzIGRlcGVuZGVuY2llcywgc28gdGhlIHJvb3QgaGFzIHRoZSBpbnRlbmRlZCBuYW1lLlxyXG5cdFx0dmFyIG5vZGVOYW1lID0gbm9kZURlZi5uYW1lID8gcGFyc2VyLmNyZWF0ZVVuaXF1ZU5hbWUoIG5vZGVEZWYubmFtZSApIDogJyc7XHJcblxyXG5cdFx0cmV0dXJuICggZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0dmFyIHBlbmRpbmcgPSBbXTtcclxuXHJcblx0XHRcdGlmICggbm9kZURlZi5tZXNoICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmdldERlcGVuZGVuY3koICdtZXNoJywgbm9kZURlZi5tZXNoICkudGhlbiggZnVuY3Rpb24gKCBtZXNoICkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBub2RlID0gcGFyc2VyLl9nZXROb2RlUmVmKCBwYXJzZXIubWVzaENhY2hlLCBub2RlRGVmLm1lc2gsIG1lc2ggKTtcclxuXHJcblx0XHRcdFx0XHQvLyBpZiB3ZWlnaHRzIGFyZSBwcm92aWRlZCBvbiB0aGUgbm9kZSwgb3ZlcnJpZGUgd2VpZ2h0cyBvbiB0aGUgbWVzaC5cclxuXHRcdFx0XHRcdGlmICggbm9kZURlZi53ZWlnaHRzICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRub2RlLnRyYXZlcnNlKCBmdW5jdGlvbiAoIG8gKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICggISBvLmlzTWVzaCApIHJldHVybjtcclxuXHJcblx0XHRcdFx0XHRcdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IG5vZGVEZWYud2VpZ2h0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRvLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1sgaSBdID0gbm9kZURlZi53ZWlnaHRzWyBpIF07XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIG5vZGU7XHJcblxyXG5cdFx0XHRcdH0gKSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBub2RlRGVmLmNhbWVyYSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnY2FtZXJhJywgbm9kZURlZi5jYW1lcmEgKS50aGVuKCBmdW5jdGlvbiAoIGNhbWVyYSApIHtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gcGFyc2VyLl9nZXROb2RlUmVmKCBwYXJzZXIuY2FtZXJhQ2FjaGUsIG5vZGVEZWYuY2FtZXJhLCBjYW1lcmEgKTtcclxuXHJcblx0XHRcdFx0fSApICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwYXJzZXIuX2ludm9rZUFsbCggZnVuY3Rpb24gKCBleHQgKSB7XHJcblxyXG5cdFx0XHRcdHJldHVybiBleHQuY3JlYXRlTm9kZUF0dGFjaG1lbnQgJiYgZXh0LmNyZWF0ZU5vZGVBdHRhY2htZW50KCBub2RlSW5kZXggKTtcclxuXHJcblx0XHRcdH0gKS5mb3JFYWNoKCBmdW5jdGlvbiAoIHByb21pc2UgKSB7XHJcblxyXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcHJvbWlzZSApO1xyXG5cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XHJcblxyXG5cdFx0fSgpICkudGhlbiggZnVuY3Rpb24gKCBvYmplY3RzICkge1xyXG5cclxuXHRcdFx0dmFyIG5vZGU7XHJcblxyXG5cdFx0XHQvLyAuaXNCb25lIGlzbid0IGluIGdsVEYgc3BlYy4gU2VlIC5fbWFya0RlZnNcclxuXHRcdFx0aWYgKCBub2RlRGVmLmlzQm9uZSA9PT0gdHJ1ZSApIHtcclxuXHJcblx0XHRcdFx0bm9kZSA9IG5ldyBCb25lKCk7XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYgKCBvYmplY3RzLmxlbmd0aCA+IDEgKSB7XHJcblxyXG5cdFx0XHRcdG5vZGUgPSBuZXcgR3JvdXAoKTtcclxuXHJcblx0XHRcdH0gZWxzZSBpZiAoIG9iamVjdHMubGVuZ3RoID09PSAxICkge1xyXG5cclxuXHRcdFx0XHRub2RlID0gb2JqZWN0c1sgMCBdO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0bm9kZSA9IG5ldyBPYmplY3QzRCgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBub2RlICE9PSBvYmplY3RzWyAwIF0gKSB7XHJcblxyXG5cdFx0XHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSBvYmplY3RzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRcdG5vZGUuYWRkKCBvYmplY3RzWyBpIF0gKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBub2RlRGVmLm5hbWUgKSB7XHJcblxyXG5cdFx0XHRcdG5vZGUudXNlckRhdGEubmFtZSA9IG5vZGVEZWYubmFtZTtcclxuXHRcdFx0XHRub2RlLm5hbWUgPSBub2RlTmFtZTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIG5vZGUsIG5vZGVEZWYgKTtcclxuXHJcblx0XHRcdGlmICggbm9kZURlZi5leHRlbnNpb25zICkgYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBleHRlbnNpb25zLCBub2RlLCBub2RlRGVmICk7XHJcblxyXG5cdFx0XHRpZiAoIG5vZGVEZWYubWF0cml4ICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBtYXRyaXggPSBuZXcgTWF0cml4NCgpO1xyXG5cdFx0XHRcdG1hdHJpeC5mcm9tQXJyYXkoIG5vZGVEZWYubWF0cml4ICk7XHJcblx0XHRcdFx0bm9kZS5hcHBseU1hdHJpeDQoIG1hdHJpeCApO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0aWYgKCBub2RlRGVmLnRyYW5zbGF0aW9uICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0bm9kZS5wb3NpdGlvbi5mcm9tQXJyYXkoIG5vZGVEZWYudHJhbnNsYXRpb24gKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIG5vZGVEZWYucm90YXRpb24gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0XHRub2RlLnF1YXRlcm5pb24uZnJvbUFycmF5KCBub2RlRGVmLnJvdGF0aW9uICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCBub2RlRGVmLnNjYWxlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0bm9kZS5zY2FsZS5mcm9tQXJyYXkoIG5vZGVEZWYuc2NhbGUgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucy5zZXQoIG5vZGUsIHsgdHlwZTogJ25vZGVzJywgaW5kZXg6IG5vZGVJbmRleCB9ICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gbm9kZTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNzY2VuZXNcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gc2NlbmVJbmRleFxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8R3JvdXA+fVxyXG5cdCAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmxvYWRTY2VuZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHQvLyBzY2VuZSBub2RlIGhpZXJhY2h5IGJ1aWxkZXJcclxuXHJcblx0XHRmdW5jdGlvbiBidWlsZE5vZGVIaWVyYWNoeSggbm9kZUlkLCBwYXJlbnRPYmplY3QsIGpzb24sIHBhcnNlciApIHtcclxuXHJcblx0XHRcdHZhciBub2RlRGVmID0ganNvbi5ub2Rlc1sgbm9kZUlkIF07XHJcblxyXG5cdFx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koICdub2RlJywgbm9kZUlkICkudGhlbiggZnVuY3Rpb24gKCBub2RlICkge1xyXG5cclxuXHRcdFx0XHRpZiAoIG5vZGVEZWYuc2tpbiA9PT0gdW5kZWZpbmVkICkgcmV0dXJuIG5vZGU7XHJcblxyXG5cdFx0XHRcdC8vIGJ1aWxkIHNrZWxldG9uIGhlcmUgYXMgd2VsbFxyXG5cclxuXHRcdFx0XHR2YXIgc2tpbkVudHJ5O1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koICdza2luJywgbm9kZURlZi5za2luICkudGhlbiggZnVuY3Rpb24gKCBza2luICkge1xyXG5cclxuXHRcdFx0XHRcdHNraW5FbnRyeSA9IHNraW47XHJcblxyXG5cdFx0XHRcdFx0dmFyIHBlbmRpbmdKb2ludHMgPSBbXTtcclxuXHJcblx0XHRcdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gc2tpbkVudHJ5LmpvaW50cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0XHRcdHBlbmRpbmdKb2ludHMucHVzaCggcGFyc2VyLmdldERlcGVuZGVuY3koICdub2RlJywgc2tpbkVudHJ5LmpvaW50c1sgaSBdICkgKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nSm9pbnRzICk7XHJcblxyXG5cdFx0XHRcdH0gKS50aGVuKCBmdW5jdGlvbiAoIGpvaW50Tm9kZXMgKSB7XHJcblxyXG5cdFx0XHRcdFx0bm9kZS50cmF2ZXJzZSggZnVuY3Rpb24gKCBtZXNoICkge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCAhIG1lc2guaXNNZXNoICkgcmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIGJvbmVzID0gW107XHJcblx0XHRcdFx0XHRcdHZhciBib25lSW52ZXJzZXMgPSBbXTtcclxuXHJcblx0XHRcdFx0XHRcdGZvciAoIHZhciBqID0gMCwgamwgPSBqb2ludE5vZGVzLmxlbmd0aDsgaiA8IGpsOyBqICsrICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgam9pbnROb2RlID0gam9pbnROb2Rlc1sgaiBdO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoIGpvaW50Tm9kZSApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRib25lcy5wdXNoKCBqb2ludE5vZGUgKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgbWF0ID0gbmV3IE1hdHJpeDQoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIHNraW5FbnRyeS5pbnZlcnNlQmluZE1hdHJpY2VzICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXQuZnJvbUFycmF5KCBza2luRW50cnkuaW52ZXJzZUJpbmRNYXRyaWNlcy5hcnJheSwgaiAqIDE2ICk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGJvbmVJbnZlcnNlcy5wdXNoKCBtYXQgKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBKb2ludCBcIiVzXCIgY291bGQgbm90IGJlIGZvdW5kLicsIHNraW5FbnRyeS5qb2ludHNbIGogXSApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRtZXNoLmJpbmQoIG5ldyBTa2VsZXRvbiggYm9uZXMsIGJvbmVJbnZlcnNlcyApLCBtZXNoLm1hdHJpeFdvcmxkICk7XHJcblxyXG5cdFx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiBub2RlO1xyXG5cclxuXHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHR9ICkudGhlbiggZnVuY3Rpb24gKCBub2RlICkge1xyXG5cclxuXHRcdFx0XHQvLyBidWlsZCBub2RlIGhpZXJhY2h5XHJcblxyXG5cdFx0XHRcdHBhcmVudE9iamVjdC5hZGQoIG5vZGUgKTtcclxuXHJcblx0XHRcdFx0dmFyIHBlbmRpbmcgPSBbXTtcclxuXHJcblx0XHRcdFx0aWYgKCBub2RlRGVmLmNoaWxkcmVuICkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBjaGlsZHJlbiA9IG5vZGVEZWYuY2hpbGRyZW47XHJcblxyXG5cdFx0XHRcdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIGNoaWxkID0gY2hpbGRyZW5bIGkgXTtcclxuXHRcdFx0XHRcdFx0cGVuZGluZy5wdXNoKCBidWlsZE5vZGVIaWVyYWNoeSggY2hpbGQsIG5vZGUsIGpzb24sIHBhcnNlciApICk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xyXG5cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gbG9hZFNjZW5lKCBzY2VuZUluZGV4ICkge1xyXG5cclxuXHRcdFx0dmFyIGpzb24gPSB0aGlzLmpzb247XHJcblx0XHRcdHZhciBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xyXG5cdFx0XHR2YXIgc2NlbmVEZWYgPSB0aGlzLmpzb24uc2NlbmVzWyBzY2VuZUluZGV4IF07XHJcblx0XHRcdHZhciBwYXJzZXIgPSB0aGlzO1xyXG5cclxuXHRcdFx0Ly8gTG9hZGVyIHJldHVybnMgR3JvdXAsIG5vdCBTY2VuZS5cclxuXHRcdFx0Ly8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8xODM0MiNpc3N1ZWNvbW1lbnQtNTc4OTgxMTcyXHJcblx0XHRcdHZhciBzY2VuZSA9IG5ldyBHcm91cCgpO1xyXG5cdFx0XHRpZiAoIHNjZW5lRGVmLm5hbWUgKSBzY2VuZS5uYW1lID0gcGFyc2VyLmNyZWF0ZVVuaXF1ZU5hbWUoIHNjZW5lRGVmLm5hbWUgKTtcclxuXHJcblx0XHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIHNjZW5lLCBzY2VuZURlZiApO1xyXG5cclxuXHRcdFx0aWYgKCBzY2VuZURlZi5leHRlbnNpb25zICkgYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBleHRlbnNpb25zLCBzY2VuZSwgc2NlbmVEZWYgKTtcclxuXHJcblx0XHRcdHZhciBub2RlSWRzID0gc2NlbmVEZWYubm9kZXMgfHwgW107XHJcblxyXG5cdFx0XHR2YXIgcGVuZGluZyA9IFtdO1xyXG5cclxuXHRcdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IG5vZGVJZHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggYnVpbGROb2RlSGllcmFjaHkoIG5vZGVJZHNbIGkgXSwgc2NlbmUsIGpzb24sIHBhcnNlciApICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKS50aGVuKCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdHJldHVybiBzY2VuZTtcclxuXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHR9KCk7XHJcblxyXG5cdHJldHVybiBHTFRGTG9hZGVyO1xyXG5cclxufSApKCk7XHJcblxyXG5leHBvcnQgeyBHTFRGTG9hZGVyIH07XHJcbiIsIi8vIFRISVMgRklMRSBXQVMgTk9UIFdSSVRURU4gQlkgTUVcclxuXHJcbi8vIFRoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB0aGUgaW5idWlsdCBvYmogbG9hZGVycyBzbyBJIHJld3JvdGUgcGFydHMgb2YgaXQsIHNvIGl0IHdvcmtzIGluIE5leHRqcyBhbmQgUmVhY3QgXHJcblxyXG4vLyAtLSBIYXJ2ZXkgUmFuZGFsbCA1LzYvMjFcclxuaW1wb3J0IHtcclxuXHRCdWZmZXJBdHRyaWJ1dGUsXHJcblx0QnVmZmVyR2VvbWV0cnksXHJcblx0RmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSxcclxuXHRJbnRlcmxlYXZlZEJ1ZmZlcixcclxuXHRJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSxcclxuXHRUcmlhbmdsZUZhbkRyYXdNb2RlLFxyXG5cdFRyaWFuZ2xlU3RyaXBEcmF3TW9kZSxcclxuXHRUcmlhbmdsZXNEcmF3TW9kZSxcclxuXHRWZWN0b3IzXHJcbn0gZnJvbSAndGhyZWUnO1xyXG5cclxudmFyIEJ1ZmZlckdlb21ldHJ5VXRpbHMgPSB7XHJcblxyXG5cdGNvbXB1dGVUYW5nZW50czogZnVuY3Rpb24gKCBnZW9tZXRyeSApIHtcclxuXHJcblx0XHRnZW9tZXRyeS5jb21wdXRlVGFuZ2VudHMoKTtcclxuXHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5jb21wdXRlVGFuZ2VudHMoKSBoYXMgYmVlbiByZW1vdmVkLiBVc2UgQnVmZmVyR2VvbWV0cnkuY29tcHV0ZVRhbmdlbnRzKCkgaW5zdGVhZC4nICk7XHJcblxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSAge0FycmF5PEJ1ZmZlckdlb21ldHJ5Pn0gZ2VvbWV0cmllc1xyXG5cdCAqIEBwYXJhbSAge0Jvb2xlYW59IHVzZUdyb3Vwc1xyXG5cdCAqIEByZXR1cm4ge0J1ZmZlckdlb21ldHJ5fVxyXG5cdCAqL1xyXG5cdG1lcmdlQnVmZmVyR2VvbWV0cmllczogZnVuY3Rpb24gKCBnZW9tZXRyaWVzLCB1c2VHcm91cHMgKSB7XHJcblxyXG5cdFx0dmFyIGlzSW5kZXhlZCA9IGdlb21ldHJpZXNbIDAgXS5pbmRleCAhPT0gbnVsbDtcclxuXHJcblx0XHR2YXIgYXR0cmlidXRlc1VzZWQgPSBuZXcgU2V0KCBPYmplY3Qua2V5cyggZ2VvbWV0cmllc1sgMCBdLmF0dHJpYnV0ZXMgKSApO1xyXG5cdFx0dmFyIG1vcnBoQXR0cmlidXRlc1VzZWQgPSBuZXcgU2V0KCBPYmplY3Qua2V5cyggZ2VvbWV0cmllc1sgMCBdLm1vcnBoQXR0cmlidXRlcyApICk7XHJcblxyXG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSB7fTtcclxuXHRcdHZhciBtb3JwaEF0dHJpYnV0ZXMgPSB7fTtcclxuXHJcblx0XHR2YXIgbW9ycGhUYXJnZXRzUmVsYXRpdmUgPSBnZW9tZXRyaWVzWyAwIF0ubW9ycGhUYXJnZXRzUmVsYXRpdmU7XHJcblxyXG5cdFx0dmFyIG1lcmdlZEdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcblxyXG5cdFx0dmFyIG9mZnNldCA9IDA7XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgZ2VvbWV0cmllcy5sZW5ndGg7ICsrIGkgKSB7XHJcblxyXG5cdFx0XHR2YXIgZ2VvbWV0cnkgPSBnZW9tZXRyaWVzWyBpIF07XHJcblx0XHRcdHZhciBhdHRyaWJ1dGVzQ291bnQgPSAwO1xyXG5cclxuXHRcdFx0Ly8gZW5zdXJlIHRoYXQgYWxsIGdlb21ldHJpZXMgYXJlIGluZGV4ZWQsIG9yIG5vbmVcclxuXHJcblx0XHRcdGlmICggaXNJbmRleGVkICE9PSAoIGdlb21ldHJ5LmluZGV4ICE9PSBudWxsICkgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJHZW9tZXRyaWVzKCkgZmFpbGVkIHdpdGggZ2VvbWV0cnkgYXQgaW5kZXggJyArIGkgKyAnLiBBbGwgZ2VvbWV0cmllcyBtdXN0IGhhdmUgY29tcGF0aWJsZSBhdHRyaWJ1dGVzOyBtYWtlIHN1cmUgaW5kZXggYXR0cmlidXRlIGV4aXN0cyBhbW9uZyBhbGwgZ2VvbWV0cmllcywgb3IgaW4gbm9uZSBvZiB0aGVtLicgKTtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGdhdGhlciBhdHRyaWJ1dGVzLCBleGl0IGVhcmx5IGlmIHRoZXkncmUgZGlmZmVyZW50XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgbmFtZSBpbiBnZW9tZXRyeS5hdHRyaWJ1dGVzICkge1xyXG5cclxuXHRcdFx0XHRpZiAoICEgYXR0cmlidXRlc1VzZWQuaGFzKCBuYW1lICkgKSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUJ1ZmZlckdlb21ldHJpZXMoKSBmYWlsZWQgd2l0aCBnZW9tZXRyeSBhdCBpbmRleCAnICsgaSArICcuIEFsbCBnZW9tZXRyaWVzIG11c3QgaGF2ZSBjb21wYXRpYmxlIGF0dHJpYnV0ZXM7IG1ha2Ugc3VyZSBcIicgKyBuYW1lICsgJ1wiIGF0dHJpYnV0ZSBleGlzdHMgYW1vbmcgYWxsIGdlb21ldHJpZXMsIG9yIGluIG5vbmUgb2YgdGhlbS4nICk7XHJcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIGF0dHJpYnV0ZXNbIG5hbWUgXSA9PT0gdW5kZWZpbmVkICkgYXR0cmlidXRlc1sgbmFtZSBdID0gW107XHJcblxyXG5cdFx0XHRcdGF0dHJpYnV0ZXNbIG5hbWUgXS5wdXNoKCBnZW9tZXRyeS5hdHRyaWJ1dGVzWyBuYW1lIF0gKTtcclxuXHJcblx0XHRcdFx0YXR0cmlidXRlc0NvdW50ICsrO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZW5zdXJlIGdlb21ldHJpZXMgaGF2ZSB0aGUgc2FtZSBudW1iZXIgb2YgYXR0cmlidXRlc1xyXG5cclxuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzQ291bnQgIT09IGF0dHJpYnV0ZXNVc2VkLnNpemUgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJHZW9tZXRyaWVzKCkgZmFpbGVkIHdpdGggZ2VvbWV0cnkgYXQgaW5kZXggJyArIGkgKyAnLiBNYWtlIHN1cmUgYWxsIGdlb21ldHJpZXMgaGF2ZSB0aGUgc2FtZSBudW1iZXIgb2YgYXR0cmlidXRlcy4nICk7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBnYXRoZXIgbW9ycGggYXR0cmlidXRlcywgZXhpdCBlYXJseSBpZiB0aGV5J3JlIGRpZmZlcmVudFxyXG5cclxuXHRcdFx0aWYgKCBtb3JwaFRhcmdldHNSZWxhdGl2ZSAhPT0gZ2VvbWV0cnkubW9ycGhUYXJnZXRzUmVsYXRpdmUgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJHZW9tZXRyaWVzKCkgZmFpbGVkIHdpdGggZ2VvbWV0cnkgYXQgaW5kZXggJyArIGkgKyAnLiAubW9ycGhUYXJnZXRzUmVsYXRpdmUgbXVzdCBiZSBjb25zaXN0ZW50IHRocm91Z2hvdXQgYWxsIGdlb21ldHJpZXMuJyApO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Zm9yICggdmFyIG5hbWUgaW4gZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzICkge1xyXG5cclxuXHRcdFx0XHRpZiAoICEgbW9ycGhBdHRyaWJ1dGVzVXNlZC5oYXMoIG5hbWUgKSApIHtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyR2VvbWV0cmllcygpIGZhaWxlZCB3aXRoIGdlb21ldHJ5IGF0IGluZGV4ICcgKyBpICsgJy4gIC5tb3JwaEF0dHJpYnV0ZXMgbXVzdCBiZSBjb25zaXN0ZW50IHRocm91Z2hvdXQgYWxsIGdlb21ldHJpZXMuJyApO1xyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCBtb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXSA9PT0gdW5kZWZpbmVkICkgbW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF0gPSBbXTtcclxuXHJcblx0XHRcdFx0bW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF0ucHVzaCggZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF0gKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGdhdGhlciAudXNlckRhdGFcclxuXHJcblx0XHRcdG1lcmdlZEdlb21ldHJ5LnVzZXJEYXRhLm1lcmdlZFVzZXJEYXRhID0gbWVyZ2VkR2VvbWV0cnkudXNlckRhdGEubWVyZ2VkVXNlckRhdGEgfHwgW107XHJcblx0XHRcdG1lcmdlZEdlb21ldHJ5LnVzZXJEYXRhLm1lcmdlZFVzZXJEYXRhLnB1c2goIGdlb21ldHJ5LnVzZXJEYXRhICk7XHJcblxyXG5cdFx0XHRpZiAoIHVzZUdyb3VwcyApIHtcclxuXHJcblx0XHRcdFx0dmFyIGNvdW50O1xyXG5cclxuXHRcdFx0XHRpZiAoIGlzSW5kZXhlZCApIHtcclxuXHJcblx0XHRcdFx0XHRjb3VudCA9IGdlb21ldHJ5LmluZGV4LmNvdW50O1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKCBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0Y291bnQgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmNvdW50O1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJHZW9tZXRyaWVzKCkgZmFpbGVkIHdpdGggZ2VvbWV0cnkgYXQgaW5kZXggJyArIGkgKyAnLiBUaGUgZ2VvbWV0cnkgbXVzdCBoYXZlIGVpdGhlciBhbiBpbmRleCBvciBhIHBvc2l0aW9uIGF0dHJpYnV0ZScgKTtcclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG1lcmdlZEdlb21ldHJ5LmFkZEdyb3VwKCBvZmZzZXQsIGNvdW50LCBpICk7XHJcblxyXG5cdFx0XHRcdG9mZnNldCArPSBjb3VudDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbWVyZ2UgaW5kaWNlc1xyXG5cclxuXHRcdGlmICggaXNJbmRleGVkICkge1xyXG5cclxuXHRcdFx0dmFyIGluZGV4T2Zmc2V0ID0gMDtcclxuXHRcdFx0dmFyIG1lcmdlZEluZGV4ID0gW107XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBnZW9tZXRyaWVzLmxlbmd0aDsgKysgaSApIHtcclxuXHJcblx0XHRcdFx0dmFyIGluZGV4ID0gZ2VvbWV0cmllc1sgaSBdLmluZGV4O1xyXG5cclxuXHRcdFx0XHRmb3IgKCB2YXIgaiA9IDA7IGogPCBpbmRleC5jb3VudDsgKysgaiApIHtcclxuXHJcblx0XHRcdFx0XHRtZXJnZWRJbmRleC5wdXNoKCBpbmRleC5nZXRYKCBqICkgKyBpbmRleE9mZnNldCApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGluZGV4T2Zmc2V0ICs9IGdlb21ldHJpZXNbIGkgXS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmNvdW50O1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWVyZ2VkR2VvbWV0cnkuc2V0SW5kZXgoIG1lcmdlZEluZGV4ICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG1lcmdlIGF0dHJpYnV0ZXNcclxuXHJcblx0XHRmb3IgKCB2YXIgbmFtZSBpbiBhdHRyaWJ1dGVzICkge1xyXG5cclxuXHRcdFx0dmFyIG1lcmdlZEF0dHJpYnV0ZSA9IHRoaXMubWVyZ2VCdWZmZXJBdHRyaWJ1dGVzKCBhdHRyaWJ1dGVzWyBuYW1lIF0gKTtcclxuXHJcblx0XHRcdGlmICggISBtZXJnZWRBdHRyaWJ1dGUgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJHZW9tZXRyaWVzKCkgZmFpbGVkIHdoaWxlIHRyeWluZyB0byBtZXJnZSB0aGUgJyArIG5hbWUgKyAnIGF0dHJpYnV0ZS4nICk7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtZXJnZWRHZW9tZXRyeS5zZXRBdHRyaWJ1dGUoIG5hbWUsIG1lcmdlZEF0dHJpYnV0ZSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBtZXJnZSBtb3JwaCBhdHRyaWJ1dGVzXHJcblxyXG5cdFx0Zm9yICggdmFyIG5hbWUgaW4gbW9ycGhBdHRyaWJ1dGVzICkge1xyXG5cclxuXHRcdFx0dmFyIG51bU1vcnBoVGFyZ2V0cyA9IG1vcnBoQXR0cmlidXRlc1sgbmFtZSBdWyAwIF0ubGVuZ3RoO1xyXG5cclxuXHRcdFx0aWYgKCBudW1Nb3JwaFRhcmdldHMgPT09IDAgKSBicmVhaztcclxuXHJcblx0XHRcdG1lcmdlZEdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcyA9IG1lcmdlZEdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcyB8fCB7fTtcclxuXHRcdFx0bWVyZ2VkR2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF0gPSBbXTtcclxuXHJcblx0XHRcdGZvciAoIHZhciBpID0gMDsgaSA8IG51bU1vcnBoVGFyZ2V0czsgKysgaSApIHtcclxuXHJcblx0XHRcdFx0dmFyIG1vcnBoQXR0cmlidXRlc1RvTWVyZ2UgPSBbXTtcclxuXHJcblx0XHRcdFx0Zm9yICggdmFyIGogPSAwOyBqIDwgbW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF0ubGVuZ3RoOyArKyBqICkge1xyXG5cclxuXHRcdFx0XHRcdG1vcnBoQXR0cmlidXRlc1RvTWVyZ2UucHVzaCggbW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF1bIGogXVsgaSBdICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIG1lcmdlZE1vcnBoQXR0cmlidXRlID0gdGhpcy5tZXJnZUJ1ZmZlckF0dHJpYnV0ZXMoIG1vcnBoQXR0cmlidXRlc1RvTWVyZ2UgKTtcclxuXHJcblx0XHRcdFx0aWYgKCAhIG1lcmdlZE1vcnBoQXR0cmlidXRlICkge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJHZW9tZXRyaWVzKCkgZmFpbGVkIHdoaWxlIHRyeWluZyB0byBtZXJnZSB0aGUgJyArIG5hbWUgKyAnIG1vcnBoQXR0cmlidXRlLicgKTtcclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG1lcmdlZEdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlc1sgbmFtZSBdLnB1c2goIG1lcmdlZE1vcnBoQXR0cmlidXRlICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBtZXJnZWRHZW9tZXRyeTtcclxuXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtBcnJheTxCdWZmZXJBdHRyaWJ1dGU+fSBhdHRyaWJ1dGVzXHJcblx0ICogQHJldHVybiB7QnVmZmVyQXR0cmlidXRlfVxyXG5cdCAqL1xyXG5cdG1lcmdlQnVmZmVyQXR0cmlidXRlczogZnVuY3Rpb24gKCBhdHRyaWJ1dGVzICkge1xyXG5cclxuXHRcdHZhciBUeXBlZEFycmF5O1xyXG5cdFx0dmFyIGl0ZW1TaXplO1xyXG5cdFx0dmFyIG5vcm1hbGl6ZWQ7XHJcblx0XHR2YXIgYXJyYXlMZW5ndGggPSAwO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyArKyBpICkge1xyXG5cclxuXHRcdFx0dmFyIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNbIGkgXTtcclxuXHJcblx0XHRcdGlmICggYXR0cmlidXRlLmlzSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJBdHRyaWJ1dGVzKCkgZmFpbGVkLiBJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZXMgYXJlIG5vdCBzdXBwb3J0ZWQuJyApO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBUeXBlZEFycmF5ID09PSB1bmRlZmluZWQgKSBUeXBlZEFycmF5ID0gYXR0cmlidXRlLmFycmF5LmNvbnN0cnVjdG9yO1xyXG5cdFx0XHRpZiAoIFR5cGVkQXJyYXkgIT09IGF0dHJpYnV0ZS5hcnJheS5jb25zdHJ1Y3RvciApIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUJ1ZmZlckF0dHJpYnV0ZXMoKSBmYWlsZWQuIEJ1ZmZlckF0dHJpYnV0ZS5hcnJheSBtdXN0IGJlIG9mIGNvbnNpc3RlbnQgYXJyYXkgdHlwZXMgYWNyb3NzIG1hdGNoaW5nIGF0dHJpYnV0ZXMuJyApO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBpdGVtU2l6ZSA9PT0gdW5kZWZpbmVkICkgaXRlbVNpemUgPSBhdHRyaWJ1dGUuaXRlbVNpemU7XHJcblx0XHRcdGlmICggaXRlbVNpemUgIT09IGF0dHJpYnV0ZS5pdGVtU2l6ZSApIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUJ1ZmZlckF0dHJpYnV0ZXMoKSBmYWlsZWQuIEJ1ZmZlckF0dHJpYnV0ZS5pdGVtU2l6ZSBtdXN0IGJlIGNvbnNpc3RlbnQgYWNyb3NzIG1hdGNoaW5nIGF0dHJpYnV0ZXMuJyApO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBub3JtYWxpemVkID09PSB1bmRlZmluZWQgKSBub3JtYWxpemVkID0gYXR0cmlidXRlLm5vcm1hbGl6ZWQ7XHJcblx0XHRcdGlmICggbm9ybWFsaXplZCAhPT0gYXR0cmlidXRlLm5vcm1hbGl6ZWQgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJBdHRyaWJ1dGVzKCkgZmFpbGVkLiBCdWZmZXJBdHRyaWJ1dGUubm9ybWFsaXplZCBtdXN0IGJlIGNvbnNpc3RlbnQgYWNyb3NzIG1hdGNoaW5nIGF0dHJpYnV0ZXMuJyApO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YXJyYXlMZW5ndGggKz0gYXR0cmlidXRlLmFycmF5Lmxlbmd0aDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGFycmF5ID0gbmV3IFR5cGVkQXJyYXkoIGFycmF5TGVuZ3RoICk7XHJcblx0XHR2YXIgb2Zmc2V0ID0gMDtcclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgKysgaSApIHtcclxuXHJcblx0XHRcdGFycmF5LnNldCggYXR0cmlidXRlc1sgaSBdLmFycmF5LCBvZmZzZXQgKTtcclxuXHJcblx0XHRcdG9mZnNldCArPSBhdHRyaWJ1dGVzWyBpIF0uYXJyYXkubGVuZ3RoO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbmV3IEJ1ZmZlckF0dHJpYnV0ZSggYXJyYXksIGl0ZW1TaXplLCBub3JtYWxpemVkICk7XHJcblxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7QXJyYXk8QnVmZmVyQXR0cmlidXRlPn0gYXR0cmlidXRlc1xyXG5cdCAqIEByZXR1cm4ge0FycmF5PEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlPn1cclxuXHQgKi9cclxuXHRpbnRlcmxlYXZlQXR0cmlidXRlczogZnVuY3Rpb24gKCBhdHRyaWJ1dGVzICkge1xyXG5cclxuXHRcdC8vIEludGVybGVhdmVzIHRoZSBwcm92aWRlZCBhdHRyaWJ1dGVzIGludG8gYW4gSW50ZXJsZWF2ZWRCdWZmZXIgYW5kIHJldHVybnNcclxuXHRcdC8vIGEgc2V0IG9mIEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlcyBmb3IgZWFjaCBhdHRyaWJ1dGVcclxuXHRcdHZhciBUeXBlZEFycmF5O1xyXG5cdFx0dmFyIGFycmF5TGVuZ3RoID0gMDtcclxuXHRcdHZhciBzdHJpZGUgPSAwO1xyXG5cclxuXHRcdC8vIGNhbGN1bGF0ZSB0aGUgdGhlIGxlbmd0aCBhbmQgdHlwZSBvZiB0aGUgaW50ZXJsZWF2ZWRCdWZmZXJcclxuXHRcdGZvciAoIHZhciBpID0gMCwgbCA9IGF0dHJpYnV0ZXMubGVuZ3RoOyBpIDwgbDsgKysgaSApIHtcclxuXHJcblx0XHRcdHZhciBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzWyBpIF07XHJcblxyXG5cdFx0XHRpZiAoIFR5cGVkQXJyYXkgPT09IHVuZGVmaW5lZCApIFR5cGVkQXJyYXkgPSBhdHRyaWJ1dGUuYXJyYXkuY29uc3RydWN0b3I7XHJcblx0XHRcdGlmICggVHlwZWRBcnJheSAhPT0gYXR0cmlidXRlLmFycmF5LmNvbnN0cnVjdG9yICkge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCAnQXR0cmlidXRlQnVmZmVycyBvZiBkaWZmZXJlbnQgdHlwZXMgY2Fubm90IGJlIGludGVybGVhdmVkJyApO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YXJyYXlMZW5ndGggKz0gYXR0cmlidXRlLmFycmF5Lmxlbmd0aDtcclxuXHRcdFx0c3RyaWRlICs9IGF0dHJpYnV0ZS5pdGVtU2l6ZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQ3JlYXRlIHRoZSBzZXQgb2YgYnVmZmVyIGF0dHJpYnV0ZXNcclxuXHRcdHZhciBpbnRlcmxlYXZlZEJ1ZmZlciA9IG5ldyBJbnRlcmxlYXZlZEJ1ZmZlciggbmV3IFR5cGVkQXJyYXkoIGFycmF5TGVuZ3RoICksIHN0cmlkZSApO1xyXG5cdFx0dmFyIG9mZnNldCA9IDA7XHJcblx0XHR2YXIgcmVzID0gW107XHJcblx0XHR2YXIgZ2V0dGVycyA9IFsgJ2dldFgnLCAnZ2V0WScsICdnZXRaJywgJ2dldFcnIF07XHJcblx0XHR2YXIgc2V0dGVycyA9IFsgJ3NldFgnLCAnc2V0WScsICdzZXRaJywgJ3NldFcnIF07XHJcblxyXG5cdFx0Zm9yICggdmFyIGogPSAwLCBsID0gYXR0cmlidXRlcy5sZW5ndGg7IGogPCBsOyBqICsrICkge1xyXG5cclxuXHRcdFx0dmFyIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNbIGogXTtcclxuXHRcdFx0dmFyIGl0ZW1TaXplID0gYXR0cmlidXRlLml0ZW1TaXplO1xyXG5cdFx0XHR2YXIgY291bnQgPSBhdHRyaWJ1dGUuY291bnQ7XHJcblx0XHRcdHZhciBpYmEgPSBuZXcgSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUoIGludGVybGVhdmVkQnVmZmVyLCBpdGVtU2l6ZSwgb2Zmc2V0LCBhdHRyaWJ1dGUubm9ybWFsaXplZCApO1xyXG5cdFx0XHRyZXMucHVzaCggaWJhICk7XHJcblxyXG5cdFx0XHRvZmZzZXQgKz0gaXRlbVNpemU7XHJcblxyXG5cdFx0XHQvLyBNb3ZlIHRoZSBkYXRhIGZvciBlYWNoIGF0dHJpYnV0ZSBpbnRvIHRoZSBuZXcgaW50ZXJsZWF2ZWRCdWZmZXJcclxuXHRcdFx0Ly8gYXQgdGhlIGFwcHJvcHJpYXRlIG9mZnNldFxyXG5cdFx0XHRmb3IgKCB2YXIgYyA9IDA7IGMgPCBjb3VudDsgYyArKyApIHtcclxuXHJcblx0XHRcdFx0Zm9yICggdmFyIGsgPSAwOyBrIDwgaXRlbVNpemU7IGsgKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0aWJhWyBzZXR0ZXJzWyBrIF0gXSggYywgYXR0cmlidXRlWyBnZXR0ZXJzWyBrIF0gXSggYyApICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtBcnJheTxCdWZmZXJHZW9tZXRyeT59IGdlb21ldHJ5XHJcblx0ICogQHJldHVybiB7bnVtYmVyfVxyXG5cdCAqL1xyXG5cdGVzdGltYXRlQnl0ZXNVc2VkOiBmdW5jdGlvbiAoIGdlb21ldHJ5ICkge1xyXG5cclxuXHRcdC8vIFJldHVybiB0aGUgZXN0aW1hdGVkIG1lbW9yeSB1c2VkIGJ5IHRoaXMgZ2VvbWV0cnkgaW4gYnl0ZXNcclxuXHRcdC8vIENhbGN1bGF0ZSB1c2luZyBpdGVtU2l6ZSwgY291bnQsIGFuZCBCWVRFU19QRVJfRUxFTUVOVCB0byBhY2NvdW50XHJcblx0XHQvLyBmb3IgSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGVzLlxyXG5cdFx0dmFyIG1lbSA9IDA7XHJcblx0XHRmb3IgKCB2YXIgbmFtZSBpbiBnZW9tZXRyeS5hdHRyaWJ1dGVzICkge1xyXG5cclxuXHRcdFx0dmFyIGF0dHIgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoIG5hbWUgKTtcclxuXHRcdFx0bWVtICs9IGF0dHIuY291bnQgKiBhdHRyLml0ZW1TaXplICogYXR0ci5hcnJheS5CWVRFU19QRVJfRUxFTUVOVDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGluZGljZXMgPSBnZW9tZXRyeS5nZXRJbmRleCgpO1xyXG5cdFx0bWVtICs9IGluZGljZXMgPyBpbmRpY2VzLmNvdW50ICogaW5kaWNlcy5pdGVtU2l6ZSAqIGluZGljZXMuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQgOiAwO1xyXG5cdFx0cmV0dXJuIG1lbTtcclxuXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gdG9sZXJhbmNlXHJcblx0ICogQHJldHVybiB7QnVmZmVyR2VvbWV0cnk+fVxyXG5cdCAqL1xyXG5cdG1lcmdlVmVydGljZXM6IGZ1bmN0aW9uICggZ2VvbWV0cnksIHRvbGVyYW5jZSA9IDFlLTQgKSB7XHJcblxyXG5cdFx0dG9sZXJhbmNlID0gTWF0aC5tYXgoIHRvbGVyYW5jZSwgTnVtYmVyLkVQU0lMT04gKTtcclxuXHJcblx0XHQvLyBHZW5lcmF0ZSBhbiBpbmRleCBidWZmZXIgaWYgdGhlIGdlb21ldHJ5IGRvZXNuJ3QgaGF2ZSBvbmUsIG9yIG9wdGltaXplIGl0XHJcblx0XHQvLyBpZiBpdCdzIGFscmVhZHkgYXZhaWxhYmxlLlxyXG5cdFx0dmFyIGhhc2hUb0luZGV4ID0ge307XHJcblx0XHR2YXIgaW5kaWNlcyA9IGdlb21ldHJ5LmdldEluZGV4KCk7XHJcblx0XHR2YXIgcG9zaXRpb25zID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCAncG9zaXRpb24nICk7XHJcblx0XHR2YXIgdmVydGV4Q291bnQgPSBpbmRpY2VzID8gaW5kaWNlcy5jb3VudCA6IHBvc2l0aW9ucy5jb3VudDtcclxuXHJcblx0XHQvLyBuZXh0IHZhbHVlIGZvciB0cmlhbmdsZSBpbmRpY2VzXHJcblx0XHR2YXIgbmV4dEluZGV4ID0gMDtcclxuXHJcblx0XHQvLyBhdHRyaWJ1dGVzIGFuZCBuZXcgYXR0cmlidXRlIGFycmF5c1xyXG5cdFx0dmFyIGF0dHJpYnV0ZU5hbWVzID0gT2JqZWN0LmtleXMoIGdlb21ldHJ5LmF0dHJpYnV0ZXMgKTtcclxuXHRcdHZhciBhdHRyQXJyYXlzID0ge307XHJcblx0XHR2YXIgbW9ycGhBdHRyc0FycmF5cyA9IHt9O1xyXG5cdFx0dmFyIG5ld0luZGljZXMgPSBbXTtcclxuXHRcdHZhciBnZXR0ZXJzID0gWyAnZ2V0WCcsICdnZXRZJywgJ2dldFonLCAnZ2V0VycgXTtcclxuXHJcblx0XHQvLyBpbml0aWFsaXplIHRoZSBhcnJheXNcclxuXHRcdGZvciAoIHZhciBpID0gMCwgbCA9IGF0dHJpYnV0ZU5hbWVzLmxlbmd0aDsgaSA8IGw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHR2YXIgbmFtZSA9IGF0dHJpYnV0ZU5hbWVzWyBpIF07XHJcblxyXG5cdFx0XHRhdHRyQXJyYXlzWyBuYW1lIF0gPSBbXTtcclxuXHJcblx0XHRcdHZhciBtb3JwaEF0dHIgPSBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXTtcclxuXHRcdFx0aWYgKCBtb3JwaEF0dHIgKSB7XHJcblxyXG5cdFx0XHRcdG1vcnBoQXR0cnNBcnJheXNbIG5hbWUgXSA9IG5ldyBBcnJheSggbW9ycGhBdHRyLmxlbmd0aCApLmZpbGwoKS5tYXAoICgpID0+IFtdICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNvbnZlcnQgdGhlIGVycm9yIHRvbGVyYW5jZSB0byBhbiBhbW91bnQgb2YgZGVjaW1hbCBwbGFjZXMgdG8gdHJ1bmNhdGUgdG9cclxuXHRcdHZhciBkZWNpbWFsU2hpZnQgPSBNYXRoLmxvZzEwKCAxIC8gdG9sZXJhbmNlICk7XHJcblx0XHR2YXIgc2hpZnRNdWx0aXBsaWVyID0gTWF0aC5wb3coIDEwLCBkZWNpbWFsU2hpZnQgKTtcclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpICsrICkge1xyXG5cclxuXHRcdFx0dmFyIGluZGV4ID0gaW5kaWNlcyA/IGluZGljZXMuZ2V0WCggaSApIDogaTtcclxuXHJcblx0XHRcdC8vIEdlbmVyYXRlIGEgaGFzaCBmb3IgdGhlIHZlcnRleCBhdHRyaWJ1dGVzIGF0IHRoZSBjdXJyZW50IGluZGV4ICdpJ1xyXG5cdFx0XHR2YXIgaGFzaCA9ICcnO1xyXG5cdFx0XHRmb3IgKCB2YXIgaiA9IDAsIGwgPSBhdHRyaWJ1dGVOYW1lcy5sZW5ndGg7IGogPCBsOyBqICsrICkge1xyXG5cclxuXHRcdFx0XHR2YXIgbmFtZSA9IGF0dHJpYnV0ZU5hbWVzWyBqIF07XHJcblx0XHRcdFx0dmFyIGF0dHJpYnV0ZSA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSggbmFtZSApO1xyXG5cdFx0XHRcdHZhciBpdGVtU2l6ZSA9IGF0dHJpYnV0ZS5pdGVtU2l6ZTtcclxuXHJcblx0XHRcdFx0Zm9yICggdmFyIGsgPSAwOyBrIDwgaXRlbVNpemU7IGsgKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8gZG91YmxlIHRpbGRlIHRydW5jYXRlcyB0aGUgZGVjaW1hbCB2YWx1ZVxyXG5cdFx0XHRcdFx0aGFzaCArPSBgJHsgfiB+ICggYXR0cmlidXRlWyBnZXR0ZXJzWyBrIF0gXSggaW5kZXggKSAqIHNoaWZ0TXVsdGlwbGllciApIH0sYDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gQWRkIGFub3RoZXIgcmVmZXJlbmNlIHRvIHRoZSB2ZXJ0ZXggaWYgaXQncyBhbHJlYWR5XHJcblx0XHRcdC8vIHVzZWQgYnkgYW5vdGhlciBpbmRleFxyXG5cdFx0XHRpZiAoIGhhc2ggaW4gaGFzaFRvSW5kZXggKSB7XHJcblxyXG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaGFzaFRvSW5kZXhbIGhhc2ggXSApO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0Ly8gY29weSBkYXRhIHRvIHRoZSBuZXcgaW5kZXggaW4gdGhlIGF0dHJpYnV0ZSBhcnJheXNcclxuXHRcdFx0XHRmb3IgKCB2YXIgaiA9IDAsIGwgPSBhdHRyaWJ1dGVOYW1lcy5sZW5ndGg7IGogPCBsOyBqICsrICkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBuYW1lID0gYXR0cmlidXRlTmFtZXNbIGogXTtcclxuXHRcdFx0XHRcdHZhciBhdHRyaWJ1dGUgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoIG5hbWUgKTtcclxuXHRcdFx0XHRcdHZhciBtb3JwaEF0dHIgPSBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXTtcclxuXHRcdFx0XHRcdHZhciBpdGVtU2l6ZSA9IGF0dHJpYnV0ZS5pdGVtU2l6ZTtcclxuXHRcdFx0XHRcdHZhciBuZXdhcnJheSA9IGF0dHJBcnJheXNbIG5hbWUgXTtcclxuXHRcdFx0XHRcdHZhciBuZXdNb3JwaEFycmF5cyA9IG1vcnBoQXR0cnNBcnJheXNbIG5hbWUgXTtcclxuXHJcblx0XHRcdFx0XHRmb3IgKCB2YXIgayA9IDA7IGsgPCBpdGVtU2l6ZTsgayArKyApIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBnZXR0ZXJGdW5jID0gZ2V0dGVyc1sgayBdO1xyXG5cdFx0XHRcdFx0XHRuZXdhcnJheS5wdXNoKCBhdHRyaWJ1dGVbIGdldHRlckZ1bmMgXSggaW5kZXggKSApO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCBtb3JwaEF0dHIgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGZvciAoIHZhciBtID0gMCwgbWwgPSBtb3JwaEF0dHIubGVuZ3RoOyBtIDwgbWw7IG0gKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0bmV3TW9ycGhBcnJheXNbIG0gXS5wdXNoKCBtb3JwaEF0dHJbIG0gXVsgZ2V0dGVyRnVuYyBdKCBpbmRleCApICk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aGFzaFRvSW5kZXhbIGhhc2ggXSA9IG5leHRJbmRleDtcclxuXHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIG5leHRJbmRleCApO1xyXG5cdFx0XHRcdG5leHRJbmRleCArKztcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gR2VuZXJhdGUgdHlwZWQgYXJyYXlzIGZyb20gbmV3IGF0dHJpYnV0ZSBhcnJheXMgYW5kIHVwZGF0ZVxyXG5cdFx0Ly8gdGhlIGF0dHJpYnV0ZUJ1ZmZlcnNcclxuXHRcdGNvbnN0IHJlc3VsdCA9IGdlb21ldHJ5LmNsb25lKCk7XHJcblx0XHRmb3IgKCB2YXIgaSA9IDAsIGwgPSBhdHRyaWJ1dGVOYW1lcy5sZW5ndGg7IGkgPCBsOyBpICsrICkge1xyXG5cclxuXHRcdFx0dmFyIG5hbWUgPSBhdHRyaWJ1dGVOYW1lc1sgaSBdO1xyXG5cdFx0XHR2YXIgb2xkQXR0cmlidXRlID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCBuYW1lICk7XHJcblxyXG5cdFx0XHR2YXIgYnVmZmVyID0gbmV3IG9sZEF0dHJpYnV0ZS5hcnJheS5jb25zdHJ1Y3RvciggYXR0ckFycmF5c1sgbmFtZSBdICk7XHJcblx0XHRcdHZhciBhdHRyaWJ1dGUgPSBuZXcgQnVmZmVyQXR0cmlidXRlKCBidWZmZXIsIG9sZEF0dHJpYnV0ZS5pdGVtU2l6ZSwgb2xkQXR0cmlidXRlLm5vcm1hbGl6ZWQgKTtcclxuXHJcblx0XHRcdHJlc3VsdC5zZXRBdHRyaWJ1dGUoIG5hbWUsIGF0dHJpYnV0ZSApO1xyXG5cclxuXHRcdFx0Ly8gVXBkYXRlIHRoZSBhdHRyaWJ1dGUgYXJyYXlzXHJcblx0XHRcdGlmICggbmFtZSBpbiBtb3JwaEF0dHJzQXJyYXlzICkge1xyXG5cclxuXHRcdFx0XHRmb3IgKCB2YXIgaiA9IDA7IGogPCBtb3JwaEF0dHJzQXJyYXlzWyBuYW1lIF0ubGVuZ3RoOyBqICsrICkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBvbGRNb3JwaEF0dHJpYnV0ZSA9IGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlc1sgbmFtZSBdWyBqIF07XHJcblxyXG5cdFx0XHRcdFx0dmFyIGJ1ZmZlciA9IG5ldyBvbGRNb3JwaEF0dHJpYnV0ZS5hcnJheS5jb25zdHJ1Y3RvciggbW9ycGhBdHRyc0FycmF5c1sgbmFtZSBdWyBqIF0gKTtcclxuXHRcdFx0XHRcdHZhciBtb3JwaEF0dHJpYnV0ZSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoIGJ1ZmZlciwgb2xkTW9ycGhBdHRyaWJ1dGUuaXRlbVNpemUsIG9sZE1vcnBoQXR0cmlidXRlLm5vcm1hbGl6ZWQgKTtcclxuXHRcdFx0XHRcdHJlc3VsdC5tb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXVsgaiBdID0gbW9ycGhBdHRyaWJ1dGU7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaW5kaWNlc1xyXG5cclxuXHRcdHJlc3VsdC5zZXRJbmRleCggbmV3SW5kaWNlcyApO1xyXG5cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7QnVmZmVyR2VvbWV0cnl9IGdlb21ldHJ5XHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IGRyYXdNb2RlXHJcblx0ICogQHJldHVybiB7QnVmZmVyR2VvbWV0cnk+fVxyXG5cdCAqL1xyXG5cdHRvVHJpYW5nbGVzRHJhd01vZGU6IGZ1bmN0aW9uICggZ2VvbWV0cnksIGRyYXdNb2RlICkge1xyXG5cclxuXHRcdGlmICggZHJhd01vZGUgPT09IFRyaWFuZ2xlc0RyYXdNb2RlICkge1xyXG5cclxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlscy50b1RyaWFuZ2xlc0RyYXdNb2RlKCk6IEdlb21ldHJ5IGFscmVhZHkgZGVmaW5lZCBhcyB0cmlhbmdsZXMuJyApO1xyXG5cdFx0XHRyZXR1cm4gZ2VvbWV0cnk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggZHJhd01vZGUgPT09IFRyaWFuZ2xlRmFuRHJhd01vZGUgfHwgZHJhd01vZGUgPT09IFRyaWFuZ2xlU3RyaXBEcmF3TW9kZSApIHtcclxuXHJcblx0XHRcdHZhciBpbmRleCA9IGdlb21ldHJ5LmdldEluZGV4KCk7XHJcblxyXG5cdFx0XHQvLyBnZW5lcmF0ZSBpbmRleCBpZiBub3QgcHJlc2VudFxyXG5cclxuXHRcdFx0aWYgKCBpbmRleCA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRcdFx0dmFyIGluZGljZXMgPSBbXTtcclxuXHJcblx0XHRcdFx0dmFyIHBvc2l0aW9uID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCAncG9zaXRpb24nICk7XHJcblxyXG5cdFx0XHRcdGlmICggcG9zaXRpb24gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBwb3NpdGlvbi5jb3VudDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0XHRcdGluZGljZXMucHVzaCggaSApO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRnZW9tZXRyeS5zZXRJbmRleCggaW5kaWNlcyApO1xyXG5cdFx0XHRcdFx0aW5kZXggPSBnZW9tZXRyeS5nZXRJbmRleCgpO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzLnRvVHJpYW5nbGVzRHJhd01vZGUoKTogVW5kZWZpbmVkIHBvc2l0aW9uIGF0dHJpYnV0ZS4gUHJvY2Vzc2luZyBub3QgcG9zc2libGUuJyApO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGdlb21ldHJ5O1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvL1xyXG5cclxuXHRcdFx0dmFyIG51bWJlck9mVHJpYW5nbGVzID0gaW5kZXguY291bnQgLSAyO1xyXG5cdFx0XHR2YXIgbmV3SW5kaWNlcyA9IFtdO1xyXG5cclxuXHRcdFx0aWYgKCBkcmF3TW9kZSA9PT0gVHJpYW5nbGVGYW5EcmF3TW9kZSApIHtcclxuXHJcblx0XHRcdFx0Ly8gZ2wuVFJJQU5HTEVfRkFOXHJcblxyXG5cdFx0XHRcdGZvciAoIHZhciBpID0gMTsgaSA8PSBudW1iZXJPZlRyaWFuZ2xlczsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIDAgKSApO1xyXG5cdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICkgKTtcclxuXHRcdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDEgKSApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHQvLyBnbC5UUklBTkdMRV9TVFJJUFxyXG5cclxuXHRcdFx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBudW1iZXJPZlRyaWFuZ2xlczsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGkgJSAyID09PSAwICkge1xyXG5cclxuXHRcdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICkgKTtcclxuXHRcdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMSApICk7XHJcblx0XHRcdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDIgKSApO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAyICkgKTtcclxuXHRcdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMSApICk7XHJcblx0XHRcdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSApICk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoICggbmV3SW5kaWNlcy5sZW5ndGggLyAzICkgIT09IG51bWJlck9mVHJpYW5nbGVzICkge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlscy50b1RyaWFuZ2xlc0RyYXdNb2RlKCk6IFVuYWJsZSB0byBnZW5lcmF0ZSBjb3JyZWN0IGFtb3VudCBvZiB0cmlhbmdsZXMuJyApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gYnVpbGQgZmluYWwgZ2VvbWV0cnlcclxuXHJcblx0XHRcdHZhciBuZXdHZW9tZXRyeSA9IGdlb21ldHJ5LmNsb25lKCk7XHJcblx0XHRcdG5ld0dlb21ldHJ5LnNldEluZGV4KCBuZXdJbmRpY2VzICk7XHJcblx0XHRcdG5ld0dlb21ldHJ5LmNsZWFyR3JvdXBzKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3R2VvbWV0cnk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzLnRvVHJpYW5nbGVzRHJhd01vZGUoKTogVW5rbm93biBkcmF3IG1vZGU6JywgZHJhd01vZGUgKTtcclxuXHRcdFx0cmV0dXJuIGdlb21ldHJ5O1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQ2FsY3VsYXRlcyB0aGUgbW9ycGhlZCBhdHRyaWJ1dGVzIG9mIGEgbW9ycGhlZC9za2lubmVkIEJ1ZmZlckdlb21ldHJ5LlxyXG5cdCAqIEhlbHBmdWwgZm9yIFJheXRyYWNpbmcgb3IgRGVjYWxzLlxyXG5cdCAqIEBwYXJhbSB7TWVzaCB8IExpbmUgfCBQb2ludHN9IG9iamVjdCBBbiBpbnN0YW5jZSBvZiBNZXNoLCBMaW5lIG9yIFBvaW50cy5cclxuXHQgKiBAcmV0dXJuIHtPYmplY3R9IEFuIE9iamVjdCB3aXRoIG9yaWdpbmFsIHBvc2l0aW9uL25vcm1hbCBhdHRyaWJ1dGVzIGFuZCBtb3JwaGVkIG9uZXMuXHJcblx0ICovXHJcblx0Y29tcHV0ZU1vcnBoZWRBdHRyaWJ1dGVzOiBmdW5jdGlvbiAoIG9iamVjdCApIHtcclxuXHJcblx0XHRpZiAoIG9iamVjdC5nZW9tZXRyeS5pc0J1ZmZlckdlb21ldHJ5ICE9PSB0cnVlICkge1xyXG5cclxuXHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IEdlb21ldHJ5IGlzIG5vdCBvZiB0eXBlIEJ1ZmZlckdlb21ldHJ5LicgKTtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBfdkEgPSBuZXcgVmVjdG9yMygpO1xyXG5cdFx0dmFyIF92QiA9IG5ldyBWZWN0b3IzKCk7XHJcblx0XHR2YXIgX3ZDID0gbmV3IFZlY3RvcjMoKTtcclxuXHJcblx0XHR2YXIgX3RlbXBBID0gbmV3IFZlY3RvcjMoKTtcclxuXHRcdHZhciBfdGVtcEIgPSBuZXcgVmVjdG9yMygpO1xyXG5cdFx0dmFyIF90ZW1wQyA9IG5ldyBWZWN0b3IzKCk7XHJcblxyXG5cdFx0dmFyIF9tb3JwaEEgPSBuZXcgVmVjdG9yMygpO1xyXG5cdFx0dmFyIF9tb3JwaEIgPSBuZXcgVmVjdG9yMygpO1xyXG5cdFx0dmFyIF9tb3JwaEMgPSBuZXcgVmVjdG9yMygpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIF9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YShcclxuXHRcdFx0b2JqZWN0LFxyXG5cdFx0XHRtYXRlcmlhbCxcclxuXHRcdFx0YXR0cmlidXRlLFxyXG5cdFx0XHRtb3JwaEF0dHJpYnV0ZSxcclxuXHRcdFx0bW9ycGhUYXJnZXRzUmVsYXRpdmUsXHJcblx0XHRcdGEsXHJcblx0XHRcdGIsXHJcblx0XHRcdGMsXHJcblx0XHRcdG1vZGlmaWVkQXR0cmlidXRlQXJyYXlcclxuXHRcdCkge1xyXG5cclxuXHRcdFx0X3ZBLmZyb21CdWZmZXJBdHRyaWJ1dGUoIGF0dHJpYnV0ZSwgYSApO1xyXG5cdFx0XHRfdkIuZnJvbUJ1ZmZlckF0dHJpYnV0ZSggYXR0cmlidXRlLCBiICk7XHJcblx0XHRcdF92Qy5mcm9tQnVmZmVyQXR0cmlidXRlKCBhdHRyaWJ1dGUsIGMgKTtcclxuXHJcblx0XHRcdHZhciBtb3JwaEluZmx1ZW5jZXMgPSBvYmplY3QubW9ycGhUYXJnZXRJbmZsdWVuY2VzO1xyXG5cclxuXHRcdFx0aWYgKCBtYXRlcmlhbC5tb3JwaFRhcmdldHMgJiYgbW9ycGhBdHRyaWJ1dGUgJiYgbW9ycGhJbmZsdWVuY2VzICkge1xyXG5cclxuXHRcdFx0XHRfbW9ycGhBLnNldCggMCwgMCwgMCApO1xyXG5cdFx0XHRcdF9tb3JwaEIuc2V0KCAwLCAwLCAwICk7XHJcblx0XHRcdFx0X21vcnBoQy5zZXQoIDAsIDAsIDAgKTtcclxuXHJcblx0XHRcdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IG1vcnBoQXR0cmlidXRlLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBpbmZsdWVuY2UgPSBtb3JwaEluZmx1ZW5jZXNbIGkgXTtcclxuXHRcdFx0XHRcdHZhciBtb3JwaCA9IG1vcnBoQXR0cmlidXRlWyBpIF07XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBpbmZsdWVuY2UgPT09IDAgKSBjb250aW51ZTtcclxuXHJcblx0XHRcdFx0XHRfdGVtcEEuZnJvbUJ1ZmZlckF0dHJpYnV0ZSggbW9ycGgsIGEgKTtcclxuXHRcdFx0XHRcdF90ZW1wQi5mcm9tQnVmZmVyQXR0cmlidXRlKCBtb3JwaCwgYiApO1xyXG5cdFx0XHRcdFx0X3RlbXBDLmZyb21CdWZmZXJBdHRyaWJ1dGUoIG1vcnBoLCBjICk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBtb3JwaFRhcmdldHNSZWxhdGl2ZSApIHtcclxuXHJcblx0XHRcdFx0XHRcdF9tb3JwaEEuYWRkU2NhbGVkVmVjdG9yKCBfdGVtcEEsIGluZmx1ZW5jZSApO1xyXG5cdFx0XHRcdFx0XHRfbW9ycGhCLmFkZFNjYWxlZFZlY3RvciggX3RlbXBCLCBpbmZsdWVuY2UgKTtcclxuXHRcdFx0XHRcdFx0X21vcnBoQy5hZGRTY2FsZWRWZWN0b3IoIF90ZW1wQywgaW5mbHVlbmNlICk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdF9tb3JwaEEuYWRkU2NhbGVkVmVjdG9yKCBfdGVtcEEuc3ViKCBfdkEgKSwgaW5mbHVlbmNlICk7XHJcblx0XHRcdFx0XHRcdF9tb3JwaEIuYWRkU2NhbGVkVmVjdG9yKCBfdGVtcEIuc3ViKCBfdkIgKSwgaW5mbHVlbmNlICk7XHJcblx0XHRcdFx0XHRcdF9tb3JwaEMuYWRkU2NhbGVkVmVjdG9yKCBfdGVtcEMuc3ViKCBfdkMgKSwgaW5mbHVlbmNlICk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdF92QS5hZGQoIF9tb3JwaEEgKTtcclxuXHRcdFx0XHRfdkIuYWRkKCBfbW9ycGhCICk7XHJcblx0XHRcdFx0X3ZDLmFkZCggX21vcnBoQyApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBvYmplY3QuaXNTa2lubmVkTWVzaCApIHtcclxuXHJcblx0XHRcdFx0b2JqZWN0LmJvbmVUcmFuc2Zvcm0oIGEsIF92QSApO1xyXG5cdFx0XHRcdG9iamVjdC5ib25lVHJhbnNmb3JtKCBiLCBfdkIgKTtcclxuXHRcdFx0XHRvYmplY3QuYm9uZVRyYW5zZm9ybSggYywgX3ZDICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtb2RpZmllZEF0dHJpYnV0ZUFycmF5WyBhICogMyArIDAgXSA9IF92QS54O1xyXG5cdFx0XHRtb2RpZmllZEF0dHJpYnV0ZUFycmF5WyBhICogMyArIDEgXSA9IF92QS55O1xyXG5cdFx0XHRtb2RpZmllZEF0dHJpYnV0ZUFycmF5WyBhICogMyArIDIgXSA9IF92QS56O1xyXG5cdFx0XHRtb2RpZmllZEF0dHJpYnV0ZUFycmF5WyBiICogMyArIDAgXSA9IF92Qi54O1xyXG5cdFx0XHRtb2RpZmllZEF0dHJpYnV0ZUFycmF5WyBiICogMyArIDEgXSA9IF92Qi55O1xyXG5cdFx0XHRtb2RpZmllZEF0dHJpYnV0ZUFycmF5WyBiICogMyArIDIgXSA9IF92Qi56O1xyXG5cdFx0XHRtb2RpZmllZEF0dHJpYnV0ZUFycmF5WyBjICogMyArIDAgXSA9IF92Qy54O1xyXG5cdFx0XHRtb2RpZmllZEF0dHJpYnV0ZUFycmF5WyBjICogMyArIDEgXSA9IF92Qy55O1xyXG5cdFx0XHRtb2RpZmllZEF0dHJpYnV0ZUFycmF5WyBjICogMyArIDIgXSA9IF92Qy56O1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgZ2VvbWV0cnkgPSBvYmplY3QuZ2VvbWV0cnk7XHJcblx0XHR2YXIgbWF0ZXJpYWwgPSBvYmplY3QubWF0ZXJpYWw7XHJcblxyXG5cdFx0dmFyIGEsIGIsIGM7XHJcblx0XHR2YXIgaW5kZXggPSBnZW9tZXRyeS5pbmRleDtcclxuXHRcdHZhciBwb3NpdGlvbkF0dHJpYnV0ZSA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb247XHJcblx0XHR2YXIgbW9ycGhQb3NpdGlvbiA9IGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcy5wb3NpdGlvbjtcclxuXHRcdHZhciBtb3JwaFRhcmdldHNSZWxhdGl2ZSA9IGdlb21ldHJ5Lm1vcnBoVGFyZ2V0c1JlbGF0aXZlO1xyXG5cdFx0dmFyIG5vcm1hbEF0dHJpYnV0ZSA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMubm9ybWFsO1xyXG5cdFx0dmFyIG1vcnBoTm9ybWFsID0gZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLnBvc2l0aW9uO1xyXG5cclxuXHRcdHZhciBncm91cHMgPSBnZW9tZXRyeS5ncm91cHM7XHJcblx0XHR2YXIgZHJhd1JhbmdlID0gZ2VvbWV0cnkuZHJhd1JhbmdlO1xyXG5cdFx0dmFyIGksIGosIGlsLCBqbDtcclxuXHRcdHZhciBncm91cCwgZ3JvdXBNYXRlcmlhbDtcclxuXHRcdHZhciBzdGFydCwgZW5kO1xyXG5cclxuXHRcdHZhciBtb2RpZmllZFBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSggcG9zaXRpb25BdHRyaWJ1dGUuY291bnQgKiBwb3NpdGlvbkF0dHJpYnV0ZS5pdGVtU2l6ZSApO1xyXG5cdFx0dmFyIG1vZGlmaWVkTm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSggbm9ybWFsQXR0cmlidXRlLmNvdW50ICogbm9ybWFsQXR0cmlidXRlLml0ZW1TaXplICk7XHJcblxyXG5cdFx0aWYgKCBpbmRleCAhPT0gbnVsbCApIHtcclxuXHJcblx0XHRcdC8vIGluZGV4ZWQgYnVmZmVyIGdlb21ldHJ5XHJcblxyXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIG1hdGVyaWFsICkgKSB7XHJcblxyXG5cdFx0XHRcdGZvciAoIGkgPSAwLCBpbCA9IGdyb3Vwcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0XHRncm91cCA9IGdyb3Vwc1sgaSBdO1xyXG5cdFx0XHRcdFx0Z3JvdXBNYXRlcmlhbCA9IG1hdGVyaWFsWyBncm91cC5tYXRlcmlhbEluZGV4IF07XHJcblxyXG5cdFx0XHRcdFx0c3RhcnQgPSBNYXRoLm1heCggZ3JvdXAuc3RhcnQsIGRyYXdSYW5nZS5zdGFydCApO1xyXG5cdFx0XHRcdFx0ZW5kID0gTWF0aC5taW4oICggZ3JvdXAuc3RhcnQgKyBncm91cC5jb3VudCApLCAoIGRyYXdSYW5nZS5zdGFydCArIGRyYXdSYW5nZS5jb3VudCApICk7XHJcblxyXG5cdFx0XHRcdFx0Zm9yICggaiA9IHN0YXJ0LCBqbCA9IGVuZDsgaiA8IGpsOyBqICs9IDMgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRhID0gaW5kZXguZ2V0WCggaiApO1xyXG5cdFx0XHRcdFx0XHRiID0gaW5kZXguZ2V0WCggaiArIDEgKTtcclxuXHRcdFx0XHRcdFx0YyA9IGluZGV4LmdldFgoIGogKyAyICk7XHJcblxyXG5cdFx0XHRcdFx0XHRfY2FsY3VsYXRlTW9ycGhlZEF0dHJpYnV0ZURhdGEoXHJcblx0XHRcdFx0XHRcdFx0b2JqZWN0LFxyXG5cdFx0XHRcdFx0XHRcdGdyb3VwTWF0ZXJpYWwsXHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb25BdHRyaWJ1dGUsXHJcblx0XHRcdFx0XHRcdFx0bW9ycGhQb3NpdGlvbixcclxuXHRcdFx0XHRcdFx0XHRtb3JwaFRhcmdldHNSZWxhdGl2ZSxcclxuXHRcdFx0XHRcdFx0XHRhLCBiLCBjLFxyXG5cdFx0XHRcdFx0XHRcdG1vZGlmaWVkUG9zaXRpb25cclxuXHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRcdF9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YShcclxuXHRcdFx0XHRcdFx0XHRvYmplY3QsXHJcblx0XHRcdFx0XHRcdFx0Z3JvdXBNYXRlcmlhbCxcclxuXHRcdFx0XHRcdFx0XHRub3JtYWxBdHRyaWJ1dGUsXHJcblx0XHRcdFx0XHRcdFx0bW9ycGhOb3JtYWwsXHJcblx0XHRcdFx0XHRcdFx0bW9ycGhUYXJnZXRzUmVsYXRpdmUsXHJcblx0XHRcdFx0XHRcdFx0YSwgYiwgYyxcclxuXHRcdFx0XHRcdFx0XHRtb2RpZmllZE5vcm1hbFxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0c3RhcnQgPSBNYXRoLm1heCggMCwgZHJhd1JhbmdlLnN0YXJ0ICk7XHJcblx0XHRcdFx0ZW5kID0gTWF0aC5taW4oIGluZGV4LmNvdW50LCAoIGRyYXdSYW5nZS5zdGFydCArIGRyYXdSYW5nZS5jb3VudCApICk7XHJcblxyXG5cdFx0XHRcdGZvciAoIGkgPSBzdGFydCwgaWwgPSBlbmQ7IGkgPCBpbDsgaSArPSAzICkge1xyXG5cclxuXHRcdFx0XHRcdGEgPSBpbmRleC5nZXRYKCBpICk7XHJcblx0XHRcdFx0XHRiID0gaW5kZXguZ2V0WCggaSArIDEgKTtcclxuXHRcdFx0XHRcdGMgPSBpbmRleC5nZXRYKCBpICsgMiApO1xyXG5cclxuXHRcdFx0XHRcdF9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YShcclxuXHRcdFx0XHRcdFx0b2JqZWN0LFxyXG5cdFx0XHRcdFx0XHRtYXRlcmlhbCxcclxuXHRcdFx0XHRcdFx0cG9zaXRpb25BdHRyaWJ1dGUsXHJcblx0XHRcdFx0XHRcdG1vcnBoUG9zaXRpb24sXHJcblx0XHRcdFx0XHRcdG1vcnBoVGFyZ2V0c1JlbGF0aXZlLFxyXG5cdFx0XHRcdFx0XHRhLCBiLCBjLFxyXG5cdFx0XHRcdFx0XHRtb2RpZmllZFBvc2l0aW9uXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdF9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YShcclxuXHRcdFx0XHRcdFx0b2JqZWN0LFxyXG5cdFx0XHRcdFx0XHRtYXRlcmlhbCxcclxuXHRcdFx0XHRcdFx0bm9ybWFsQXR0cmlidXRlLFxyXG5cdFx0XHRcdFx0XHRtb3JwaE5vcm1hbCxcclxuXHRcdFx0XHRcdFx0bW9ycGhUYXJnZXRzUmVsYXRpdmUsXHJcblx0XHRcdFx0XHRcdGEsIGIsIGMsXHJcblx0XHRcdFx0XHRcdG1vZGlmaWVkTm9ybWFsXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIGlmICggcG9zaXRpb25BdHRyaWJ1dGUgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdC8vIG5vbi1pbmRleGVkIGJ1ZmZlciBnZW9tZXRyeVxyXG5cclxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBtYXRlcmlhbCApICkge1xyXG5cclxuXHRcdFx0XHRmb3IgKCBpID0gMCwgaWwgPSBncm91cHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0Z3JvdXAgPSBncm91cHNbIGkgXTtcclxuXHRcdFx0XHRcdGdyb3VwTWF0ZXJpYWwgPSBtYXRlcmlhbFsgZ3JvdXAubWF0ZXJpYWxJbmRleCBdO1xyXG5cclxuXHRcdFx0XHRcdHN0YXJ0ID0gTWF0aC5tYXgoIGdyb3VwLnN0YXJ0LCBkcmF3UmFuZ2Uuc3RhcnQgKTtcclxuXHRcdFx0XHRcdGVuZCA9IE1hdGgubWluKCAoIGdyb3VwLnN0YXJ0ICsgZ3JvdXAuY291bnQgKSwgKCBkcmF3UmFuZ2Uuc3RhcnQgKyBkcmF3UmFuZ2UuY291bnQgKSApO1xyXG5cclxuXHRcdFx0XHRcdGZvciAoIGogPSBzdGFydCwgamwgPSBlbmQ7IGogPCBqbDsgaiArPSAzICkge1xyXG5cclxuXHRcdFx0XHRcdFx0YSA9IGo7XHJcblx0XHRcdFx0XHRcdGIgPSBqICsgMTtcclxuXHRcdFx0XHRcdFx0YyA9IGogKyAyO1xyXG5cclxuXHRcdFx0XHRcdFx0X2NhbGN1bGF0ZU1vcnBoZWRBdHRyaWJ1dGVEYXRhKFxyXG5cdFx0XHRcdFx0XHRcdG9iamVjdCxcclxuXHRcdFx0XHRcdFx0XHRncm91cE1hdGVyaWFsLFxyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uQXR0cmlidXRlLFxyXG5cdFx0XHRcdFx0XHRcdG1vcnBoUG9zaXRpb24sXHJcblx0XHRcdFx0XHRcdFx0bW9ycGhUYXJnZXRzUmVsYXRpdmUsXHJcblx0XHRcdFx0XHRcdFx0YSwgYiwgYyxcclxuXHRcdFx0XHRcdFx0XHRtb2RpZmllZFBvc2l0aW9uXHJcblx0XHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0XHRfY2FsY3VsYXRlTW9ycGhlZEF0dHJpYnV0ZURhdGEoXHJcblx0XHRcdFx0XHRcdFx0b2JqZWN0LFxyXG5cdFx0XHRcdFx0XHRcdGdyb3VwTWF0ZXJpYWwsXHJcblx0XHRcdFx0XHRcdFx0bm9ybWFsQXR0cmlidXRlLFxyXG5cdFx0XHRcdFx0XHRcdG1vcnBoTm9ybWFsLFxyXG5cdFx0XHRcdFx0XHRcdG1vcnBoVGFyZ2V0c1JlbGF0aXZlLFxyXG5cdFx0XHRcdFx0XHRcdGEsIGIsIGMsXHJcblx0XHRcdFx0XHRcdFx0bW9kaWZpZWROb3JtYWxcclxuXHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdHN0YXJ0ID0gTWF0aC5tYXgoIDAsIGRyYXdSYW5nZS5zdGFydCApO1xyXG5cdFx0XHRcdGVuZCA9IE1hdGgubWluKCBwb3NpdGlvbkF0dHJpYnV0ZS5jb3VudCwgKCBkcmF3UmFuZ2Uuc3RhcnQgKyBkcmF3UmFuZ2UuY291bnQgKSApO1xyXG5cclxuXHRcdFx0XHRmb3IgKCBpID0gc3RhcnQsIGlsID0gZW5kOyBpIDwgaWw7IGkgKz0gMyApIHtcclxuXHJcblx0XHRcdFx0XHRhID0gaTtcclxuXHRcdFx0XHRcdGIgPSBpICsgMTtcclxuXHRcdFx0XHRcdGMgPSBpICsgMjtcclxuXHJcblx0XHRcdFx0XHRfY2FsY3VsYXRlTW9ycGhlZEF0dHJpYnV0ZURhdGEoXHJcblx0XHRcdFx0XHRcdG9iamVjdCxcclxuXHRcdFx0XHRcdFx0bWF0ZXJpYWwsXHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uQXR0cmlidXRlLFxyXG5cdFx0XHRcdFx0XHRtb3JwaFBvc2l0aW9uLFxyXG5cdFx0XHRcdFx0XHRtb3JwaFRhcmdldHNSZWxhdGl2ZSxcclxuXHRcdFx0XHRcdFx0YSwgYiwgYyxcclxuXHRcdFx0XHRcdFx0bW9kaWZpZWRQb3NpdGlvblxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRfY2FsY3VsYXRlTW9ycGhlZEF0dHJpYnV0ZURhdGEoXHJcblx0XHRcdFx0XHRcdG9iamVjdCxcclxuXHRcdFx0XHRcdFx0bWF0ZXJpYWwsXHJcblx0XHRcdFx0XHRcdG5vcm1hbEF0dHJpYnV0ZSxcclxuXHRcdFx0XHRcdFx0bW9ycGhOb3JtYWwsXHJcblx0XHRcdFx0XHRcdG1vcnBoVGFyZ2V0c1JlbGF0aXZlLFxyXG5cdFx0XHRcdFx0XHRhLCBiLCBjLFxyXG5cdFx0XHRcdFx0XHRtb2RpZmllZE5vcm1hbFxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgbW9ycGhlZFBvc2l0aW9uQXR0cmlidXRlID0gbmV3IEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoIG1vZGlmaWVkUG9zaXRpb24sIDMgKTtcclxuXHRcdHZhciBtb3JwaGVkTm9ybWFsQXR0cmlidXRlID0gbmV3IEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoIG1vZGlmaWVkTm9ybWFsLCAzICk7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHJcblx0XHRcdHBvc2l0aW9uQXR0cmlidXRlOiBwb3NpdGlvbkF0dHJpYnV0ZSxcclxuXHRcdFx0bm9ybWFsQXR0cmlidXRlOiBub3JtYWxBdHRyaWJ1dGUsXHJcblx0XHRcdG1vcnBoZWRQb3NpdGlvbkF0dHJpYnV0ZTogbW9ycGhlZFBvc2l0aW9uQXR0cmlidXRlLFxyXG5cdFx0XHRtb3JwaGVkTm9ybWFsQXR0cmlidXRlOiBtb3JwaGVkTm9ybWFsQXR0cmlidXRlXHJcblxyXG5cdFx0fTtcclxuXHJcblx0fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7IEJ1ZmZlckdlb21ldHJ5VXRpbHMgfTtcclxuIiwiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG4vLyBUaGlzIGZpbGUgYWltcyB0byBtYWtlIGNvbW11bmljYXRpb20gYmV0d2VlbiBjbGllbnQgYW5kIHNlcnZlciBhIGxvdCBlYXNpZXIsIHVzaW5nIHByb21pc2VcclxuXHJcbi8vLS0tLS0tLS0tLS0tLVsgICBJbXBvcnRzICAgXS0tLS0tLS0tLS0tLS1cXFxcXHJcbmltcG9ydCB7IFByaW9yaXR5UXVldWUgfSBmcm9tIFwiLi4vQWxnb3JpdGhtcy9Qcmlvcml0eVF1ZXVlXCI7XHJcbmltcG9ydCAqIGFzIEpvaSBmcm9tIFwiam9pXCI7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS1bQ29yZSBWYXJpYWJsZXNdLS0tLS0tLS0tLS0tLVxcXFxcclxubGV0IGNsaWVudDtcclxubGV0IFF1ZXVlID0gbmV3IFByaW9yaXR5UXVldWUoKGEsIGIpID0+IGEucHJvcml0eSA+IGIucHJvcml0eSk7XHJcblxyXG4vKipcclxuICogIEBwYXJhbSB7c3RyaW5nfSBzb2NrZXQgLSBUaGUgc29ja2V0IGlvIENsaWVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uKHNvY2tldCkge1xyXG4gIGNsaWVudCA9IHNvY2tldDtcclxuXHJcbiAgLy9EYXRhIEhhbmRzaGFrZVxyXG4gIHNvY2tldC5lbWl0KFwiQ29ubmVjdGlvbkVzdGFibGlzZWRcIiwgRGF0ZS5ub3coKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gVGhlIEV2ZW50IG5hbWVcclxuICogIEBwYXJhbSB7YXJyYXl9IGRhdGEgICAtIFRoZSBkYXRhIHRvIHNlbmQgdG8gdGhlIHNlcnZlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmREYXRhV2l0aFByb21pc2UoZXZlbnQsIGRhdGEpIHtcclxuICAvLy0tLS0tLS0tLS0tLS1bICAgQ3JlYXRlIGEgYmFzaWMgcHJvbWlzZSB0byByZXR1cm4gZGF0YSAgIF0tLS0tLS0tLS0tLS0tXFxcXFxyXG4gIGNvbnN0IERhdGFQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XHJcbiAgICB0cnkge1xyXG4gICAgICBjbGllbnQuZW1pdChldmVudCwgLi4uZGF0YSk7XHJcblxyXG4gICAgICBjbGllbnQub24oZXZlbnQgKyBcIl9DYWxsYmFja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xyXG4gICAgICAgIHJlc29sdmUoLi4uYXJndW1lbnRzKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xyXG4gICAgICByZWplY3QoZXJyKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAocmVzb2x2ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xyXG4gICAgICAgIHJlamVjdChcIk5vIGRhdGEgcmV0dXJuZWQgd2l0aGluIDIgc2Vjb25kcywgaXMgdGhlcmUgYSBkYXRhIGNhbGxiYWNrP1wiKTtcclxuICAgICAgfVxyXG4gICAgfSwgMjAwMCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIERhdGFQcm9taXNlO1xyXG59XHJcblxyXG4vKipcclxuICogIEBwYXJhbSB7c3RyaW5nfSBldmVudCAgICAgICAgLSBUaGUgRXZlbnQgbmFtZVxyXG4gKiAgQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgICAtIFRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGRhdGEgYmFja1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlblRvRXZlbnQoZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgLy8gQXR0YWNoIGV2ZW50IGhhbmRsZSB0byBmdW5jdGlvbnNcclxuICBjbGllbnQub24oZXZlbnQsIGNhbGxiYWNrKTtcclxufVxyXG5cclxuLyoqXHJcbiAqICBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAgIC0gVGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBsaXN0ZW4gdG8gYWxsIGV2ZW50cyBzZW50IHRvIHRoZSBjbGllbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hUb01haW5FdmVudFN0cmVhbShjYWxsYmFjaykge1xyXG4gIGNsaWVudC5vbkFueSgoZXZlbnROYW1lLCAuLi5hcmdzKSA9PiB7XHJcbiAgICBjYWxsYmFjayhldmVudE5hbWUsIGFyZ3MpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogIEBwYXJhbSB7c3RyaW5nfSBldmVudCAgICAgICAgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gbGlzdGVuIHRvXHJcbiAqICBAcGFyYW0ge3NjZW1hfSBzY2VtYSAgICAgICAgIC0gVGhlIGRhdGEgc2NoZW1lIHRvIGZvbG93XHJcbiAqICBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAgIC0gVGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgZGF0YVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RlbkZvckV2ZW50V2l0aFNjaGVtYVZhbGlkYXRpb24oXHJcbiAgZXZlbnQsXHJcbiAgc2NlbWEsXHJcbiAgY2FsbGJhY2tcclxuKSB7XHJcbiAgbGlzdGVuVG9FdmVudChldmVudCwgKGFyZ3MpID0+IHtcclxuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBzY2VtYS52YWxpZGF0ZShhcmdzKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTY2VobWEgQ2hlY2sgRmFpbGVkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FsbGJhY2sodmFsdWUpO1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGREYXRhVG9RdWV1ZShldmVudCwgZGF0YSwgY2FsbGJhY2ssIHByb3JpdHkgPSAxKSB7XHJcbiAgUXVldWUucHVzaCh7IHByb3JpdHksIGlucHV0OiBbZXZlbnQsIGRhdGEsIGNhbGxiYWNrXSB9KTtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tWyAgIEFsbCBOb24gZXNzZXNudGlhbCBjb21tdW5pY2F0aW9uICAgXS0tLS0tLS0tLS0tLS1cXFxcXHJcbnNldEludGVydmFsKGFzeW5jICgpID0+IHtcclxuICBpZiAoIVF1ZXVlLmlzRW1wdHkoKSkge1xyXG4gICAgbGV0IGZ1bmMgPSBRdWV1ZS5wb3AoKTtcclxuICAgIGxldCBpbnB1dCA9IGZ1bmMuaW5wdXQ7XHJcbiAgICBsZXQgY2FsbEJhY2sgPSBpbnB1dFsyXTtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vRGVzdHJ1Y3R1cmUgYW5kIHNlbmQgZGF0YVxyXG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IHNlbmREYXRhV2l0aFByb21pc2UoaW5wdXRbMF0sIC4uLmlucHV0WzFdKTtcclxuICAgICAgY2FsbEJhY2soZmFsc2UsIGRhdGEpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIGNhbGxCYWNrKHRydWUsIFtdKTtcclxuICAgIH1cclxuICB9XHJcbn0sIDUwMCk7XHJcbiIsIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxyXG5cclxuaW1wb3J0IHsgQW1iaWVudExpZ2h0LCBEaXJlY3Rpb25hbExpZ2h0LCBQb2ludExpZ2h0IH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGlyZWN0aW9uYWxMaWdodChTY2VuZSwgY29sb3IsIGJyaWdodG5lc3MsIHBvcykge1xyXG4gIC8vIC0tLS0tLS0tLS0gW1NpbXBsZSBEaXJlY3Rpb25hbCBMaWdodCBNYW5hZ2VyXSAtLS0tLS0tLS0tIFxcXFxcclxuICBjb25zdCBkaXJlY3Rpb25hbExpZ2h0ID0gbmV3IERpcmVjdGlvbmFsTGlnaHQoY29sb3IsIGJyaWdodG5lc3MsIDEwMCk7XHJcbiAgZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5zZXQoLi4ucG9zKTsgLy8gRVM2IE9ubHkgd2F5IHRvIGRlc3RydWN0dXJlIFBPUyBhcnJheVxyXG5cclxuICAvL1NoYWRvd24gTWFuYWdlcnNcclxuICBkaXJlY3Rpb25hbExpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcclxuXHJcbiAgLy9BZGQgdG8gU2NlbmVcclxuICBTY2VuZS5hZGQoZGlyZWN0aW9uYWxMaWdodCk7XHJcbiAgcmV0dXJuIGRpcmVjdGlvbmFsTGlnaHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbWJpZW50TGlnaHQoU2NlbmUsIGNvbG9yLCBicmlnaHRuZXNzKSB7XHJcbiAgY29uc3QgbGlnaHQgPSBuZXcgQW1iaWVudExpZ2h0KGNvbG9yLCBicmlnaHRuZXNzKTsgLy8gc29mdCB3aGl0ZSBsaWdodFxyXG4gIFNjZW5lLmFkZChsaWdodCk7XHJcbiAgcmV0dXJuIGxpZ2h0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUG9pbnRMaWdodChjb2xvciwgYnJpZ2h0bmVzcywgcG9zLCBpbnRlbnNpdHkpe1xyXG4gIGNvbnN0IFBvaW50TGlnaHROZXcgPSBuZXcgUG9pbnRMaWdodChjb2xvciwgYnJpZ2h0bmVzcywgaW50ZW5zaXR5KVxyXG4gIFBvaW50TGlnaHROZXcucG9zaXRpb24uc2V0KC4uLnBvcylcclxuICByZXR1cm4gUG9pbnRMaWdodE5ld1xyXG59IFxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG52YXIgZGVmaW5pdGlvbnNfcGVybGluID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbi8vIEZyb20gaHR0cHM6Ly9naXRodWIuY29tL2h1Z2hzay9nbHNsLW5vaXNlL2Jsb2IvbWFzdGVyL3BlcmlvZGljLzJkLmdsc2xcXG5cXG4vL1xcbi8vIEdMU0wgdGV4dHVyZWxlc3MgY2xhc3NpYyAyRCBub2lzZSBcXFwiY25vaXNlXFxcIixcXG4vLyB3aXRoIGFuIFJTTC1zdHlsZSBwZXJpb2RpYyB2YXJpYW50IFxcXCJwbm9pc2VcXFwiLlxcbi8vIEF1dGhvcjogIFN0ZWZhbiBHdXN0YXZzb24gKHN0ZWZhbi5ndXN0YXZzb25AbGl1LnNlKVxcbi8vIFZlcnNpb246IDIwMTEtMDgtMjJcXG4vL1xcbi8vIE1hbnkgdGhhbmtzIHRvIElhbiBNY0V3YW4gb2YgQXNoaW1hIEFydHMgZm9yIHRoZVxcbi8vIGlkZWFzIGZvciBwZXJtdXRhdGlvbiBhbmQgZ3JhZGllbnQgc2VsZWN0aW9uLlxcbi8vXFxuLy8gQ29weXJpZ2h0IChjKSAyMDExIFN0ZWZhbiBHdXN0YXZzb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlLlxcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hc2hpbWEvd2ViZ2wtbm9pc2VcXG4vL1xcblxcbnZlYzQgbW9kMjg5KHZlYzQgeCkgeyByZXR1cm4geCAtIGZsb29yKHggKiAoMS4wIC8gMjg5LjApKSAqIDI4OS4wOyB9XFxuXFxudmVjNCBwZXJtdXRlKHZlYzQgeCkgeyByZXR1cm4gbW9kMjg5KCgoeCAqIDM0LjApICsgMS4wKSAqIHgpOyB9XFxuXFxudmVjNCB0YXlsb3JJbnZTcXJ0KHZlYzQgcikgeyByZXR1cm4gMS43OTI4NDI5MTQwMDE1OSAtIDAuODUzNzM0NzIwOTUzMTQgKiByOyB9XFxuXFxudmVjMiBmYWRlKHZlYzIgdCkgeyByZXR1cm4gdCAqIHQgKiB0ICogKHQgKiAodCAqIDYuMCAtIDE1LjApICsgMTAuMCk7IH1cXG5cXG5mbG9hdCBtYXAoZmxvYXQgdmFsdWUsIGZsb2F0IG1pbjEsIGZsb2F0IG1heDEsIGZsb2F0IG1pbjIsIGZsb2F0IG1heDIpIHtcXG4gIHJldHVybiBtaW4yICsgKHZhbHVlIC0gbWluMSkgKiAobWF4MiAtIG1pbjIpIC8gKG1heDEgLSBtaW4xKTtcXG59XFxuXFxuLy8gQ2xhc3NpYyBQZXJsaW4gbm9pc2UsIHBlcmlvZGljIHZhcmlhbnRcXG5mbG9hdCBwZXJsaW4odmVjMiBQKSB7XFxuXFxuICB2ZWMyIHJlcCA9IHZlYzIoMjU1LjAsIDI1NS4wKTtcXG5cXG4gIHZlYzQgUGkgPSBmbG9vcihQLnh5eHkpICsgdmVjNCgwLjAsIDAuMCwgMS4wLCAxLjApO1xcbiAgdmVjNCBQZiA9IGZyYWN0KFAueHl4eSkgLSB2ZWM0KDAuMCwgMC4wLCAxLjAsIDEuMCk7XFxuICBQaSA9IG1vZChQaSwgcmVwLnh5eHkpOyAvLyBUbyBjcmVhdGUgbm9pc2Ugd2l0aCBleHBsaWNpdCBwZXJpb2RcXG4gIFBpID0gbW9kMjg5KFBpKTsgICAgICAgIC8vIFRvIGF2b2lkIHRydW5jYXRpb24gZWZmZWN0cyBpbiBwZXJtdXRhdGlvblxcbiAgdmVjNCBpeCA9IFBpLnh6eHo7XFxuICB2ZWM0IGl5ID0gUGkueXl3dztcXG4gIHZlYzQgZnggPSBQZi54enh6O1xcbiAgdmVjNCBmeSA9IFBmLnl5d3c7XFxuXFxuICB2ZWM0IGkgPSBwZXJtdXRlKHBlcm11dGUoaXgpICsgaXkpO1xcblxcbiAgdmVjNCBneCA9IGZyYWN0KGkgKiAoMS4wIC8gNDEuMCkpICogMi4wIC0gMS4wO1xcbiAgdmVjNCBneSA9IGFicyhneCkgLSAwLjU7XFxuICB2ZWM0IHR4ID0gZmxvb3IoZ3ggKyAwLjUpO1xcbiAgZ3ggPSBneCAtIHR4O1xcblxcbiAgdmVjMiBnMDAgPSB2ZWMyKGd4LngsIGd5LngpO1xcbiAgdmVjMiBnMTAgPSB2ZWMyKGd4LnksIGd5LnkpO1xcbiAgdmVjMiBnMDEgPSB2ZWMyKGd4LnosIGd5LnopO1xcbiAgdmVjMiBnMTEgPSB2ZWMyKGd4LncsIGd5LncpO1xcblxcbiAgdmVjNCBub3JtID0gdGF5bG9ySW52U3FydChcXG4gICAgICB2ZWM0KGRvdChnMDAsIGcwMCksIGRvdChnMDEsIGcwMSksIGRvdChnMTAsIGcxMCksIGRvdChnMTEsIGcxMSkpKTtcXG4gIGcwMCAqPSBub3JtLng7XFxuICBnMDEgKj0gbm9ybS55O1xcbiAgZzEwICo9IG5vcm0uejtcXG4gIGcxMSAqPSBub3JtLnc7XFxuXFxuICBmbG9hdCBuMDAgPSBkb3QoZzAwLCB2ZWMyKGZ4LngsIGZ5LngpKTtcXG4gIGZsb2F0IG4xMCA9IGRvdChnMTAsIHZlYzIoZngueSwgZnkueSkpO1xcbiAgZmxvYXQgbjAxID0gZG90KGcwMSwgdmVjMihmeC56LCBmeS56KSk7XFxuICBmbG9hdCBuMTEgPSBkb3QoZzExLCB2ZWMyKGZ4LncsIGZ5LncpKTtcXG5cXG4gIHZlYzIgZmFkZV94eSA9IGZhZGUoUGYueHkpO1xcbiAgdmVjMiBuX3ggPSBtaXgodmVjMihuMDAsIG4wMSksIHZlYzIobjEwLCBuMTEpLCBmYWRlX3h5LngpO1xcbiAgZmxvYXQgbl94eSA9IG1peChuX3gueCwgbl94LnksIGZhZGVfeHkueSk7XFxuICByZXR1cm4gbWFwKDIuMyAqIG5feHksIC0xLjAsIDEuMCwgMC4wLCAxLjApO1xcbn1cXG5cXG5mbG9hdCBmYm0odmVjMiBwb3MsIHZlYzQgcHJvcHMpIHtcXG4gIGZsb2F0IHBlcnNpc3RhbmNlID0gcHJvcHMueDtcXG4gIGZsb2F0IGxhY3VuYXJpdHkgPSBwcm9wcy55O1xcbiAgZmxvYXQgcmVkaXN0cmlidXRpb24gPSBwcm9wcy56O1xcbiAgaW50IG9jdGF2ZXMgPSBpbnQocHJvcHMudyk7XFxuXFxuICBmbG9hdCByZXN1bHQgPSAwLjA7XFxuICBmbG9hdCBhbXBsaXR1ZGUgPSAxLjA7XFxuICBmbG9hdCBmcmVxdWVuY3kgPSAxLjA7XFxuICBmbG9hdCBtYXhpbXVtID0gYW1wbGl0dWRlO1xcblxcbiAgZm9yIChpbnQgaSA9IDA7IGkgPCAyOyBpKyspIHtcXG5cXG4gICAgdmVjMiBwID0gcG9zLnh5ICogZnJlcXVlbmN5O1xcblxcbiAgICBmbG9hdCBub2lzZVZhbCA9IHBlcmxpbihwKTtcXG4gICAgcmVzdWx0ICs9IG5vaXNlVmFsICogYW1wbGl0dWRlO1xcblxcbiAgICBmcmVxdWVuY3kgKj0gbGFjdW5hcml0eTtcXG4gICAgYW1wbGl0dWRlICo9IHBlcnNpc3RhbmNlO1xcbiAgICBtYXhpbXVtICs9IGFtcGxpdHVkZTtcXG4gIH1cXG5cXG4gIGZsb2F0IHJlZGlzdHJpYnV0ZWQgPSBwb3cocmVzdWx0LCByZWRpc3RyaWJ1dGlvbik7XFxuICByZXR1cm4gcmVkaXN0cmlidXRlZCAvIG1heGltdW07XFxufVxcblwiOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcblxyXG52YXIgcCA9IFtcclxuICAxNTEsXHJcbiAgMTYwLFxyXG4gIDEzNyxcclxuICA5MSxcclxuICA5MCxcclxuICAxNSxcclxuICAxMzEsXHJcbiAgMTMsXHJcbiAgMjAxLFxyXG4gIDk1LFxyXG4gIDk2LFxyXG4gIDUzLFxyXG4gIDE5NCxcclxuICAyMzMsXHJcbiAgNyxcclxuICAyMjUsXHJcbiAgMTQwLFxyXG4gIDM2LFxyXG4gIDEwMyxcclxuICAzMCxcclxuICA2OSxcclxuICAxNDIsXHJcbiAgOCxcclxuICA5OSxcclxuICAzNyxcclxuICAyNDAsXHJcbiAgMjEsXHJcbiAgMTAsXHJcbiAgMjMsXHJcbiAgMTkwLFxyXG4gIDYsXHJcbiAgMTQ4LFxyXG4gIDI0NyxcclxuICAxMjAsXHJcbiAgMjM0LFxyXG4gIDc1LFxyXG4gIDAsXHJcbiAgMjYsXHJcbiAgMTk3LFxyXG4gIDYyLFxyXG4gIDk0LFxyXG4gIDI1MixcclxuICAyMTksXHJcbiAgMjAzLFxyXG4gIDExNyxcclxuICAzNSxcclxuICAxMSxcclxuICAzMixcclxuICA1NyxcclxuICAxNzcsXHJcbiAgMzMsXHJcbiAgODgsXHJcbiAgMjM3LFxyXG4gIDE0OSxcclxuICA1NixcclxuICA4NyxcclxuICAxNzQsXHJcbiAgMjAsXHJcbiAgMTI1LFxyXG4gIDEzNixcclxuICAxNzEsXHJcbiAgMTY4LFxyXG4gIDY4LFxyXG4gIDE3NSxcclxuICA3NCxcclxuICAxNjUsXHJcbiAgNzEsXHJcbiAgMTM0LFxyXG4gIDEzOSxcclxuICA0OCxcclxuICAyNyxcclxuICAxNjYsXHJcbiAgNzcsXHJcbiAgMTQ2LFxyXG4gIDE1OCxcclxuICAyMzEsXHJcbiAgODMsXHJcbiAgMTExLFxyXG4gIDIyOSxcclxuICAxMjIsXHJcbiAgNjAsXHJcbiAgMjExLFxyXG4gIDEzMyxcclxuICAyMzAsXHJcbiAgMjIwLFxyXG4gIDEwNSxcclxuICA5MixcclxuICA0MSxcclxuICA1NSxcclxuICA0NixcclxuICAyNDUsXHJcbiAgNDAsXHJcbiAgMjQ0LFxyXG4gIDEwMixcclxuICAxNDMsXHJcbiAgNTQsXHJcbiAgNjUsXHJcbiAgMjUsXHJcbiAgNjMsXHJcbiAgMTYxLFxyXG4gIDEsXHJcbiAgMjE2LFxyXG4gIDgwLFxyXG4gIDczLFxyXG4gIDIwOSxcclxuICA3NixcclxuICAxMzIsXHJcbiAgMTg3LFxyXG4gIDIwOCxcclxuICA4OSxcclxuICAxOCxcclxuICAxNjksXHJcbiAgMjAwLFxyXG4gIDE5NixcclxuICAxMzUsXHJcbiAgMTMwLFxyXG4gIDExNixcclxuICAxODgsXHJcbiAgMTU5LFxyXG4gIDg2LFxyXG4gIDE2NCxcclxuICAxMDAsXHJcbiAgMTA5LFxyXG4gIDE5OCxcclxuICAxNzMsXHJcbiAgMTg2LFxyXG4gIDMsXHJcbiAgNjQsXHJcbiAgNTIsXHJcbiAgMjE3LFxyXG4gIDIyNixcclxuICAyNTAsXHJcbiAgMTI0LFxyXG4gIDEyMyxcclxuICA1LFxyXG4gIDIwMixcclxuICAzOCxcclxuICAxNDcsXHJcbiAgMTE4LFxyXG4gIDEyNixcclxuICAyNTUsXHJcbiAgODIsXHJcbiAgODUsXHJcbiAgMjEyLFxyXG4gIDIwNyxcclxuICAyMDYsXHJcbiAgNTksXHJcbiAgMjI3LFxyXG4gIDQ3LFxyXG4gIDE2LFxyXG4gIDU4LFxyXG4gIDE3LFxyXG4gIDE4MixcclxuICAxODksXHJcbiAgMjgsXHJcbiAgNDIsXHJcbiAgMjIzLFxyXG4gIDE4MyxcclxuICAxNzAsXHJcbiAgMjEzLFxyXG4gIDExOSxcclxuICAyNDgsXHJcbiAgMTUyLFxyXG4gIDIsXHJcbiAgNDQsXHJcbiAgMTU0LFxyXG4gIDE2MyxcclxuICA3MCxcclxuICAyMjEsXHJcbiAgMTUzLFxyXG4gIDEwMSxcclxuICAxNTUsXHJcbiAgMTY3LFxyXG4gIDQzLFxyXG4gIDE3MixcclxuICA5LFxyXG4gIDEyOSxcclxuICAyMixcclxuICAzOSxcclxuICAyNTMsXHJcbiAgMTksXHJcbiAgOTgsXHJcbiAgMTA4LFxyXG4gIDExMCxcclxuICA3OSxcclxuICAxMTMsXHJcbiAgMjI0LFxyXG4gIDIzMixcclxuICAxNzgsXHJcbiAgMTg1LFxyXG4gIDExMixcclxuICAxMDQsXHJcbiAgMjE4LFxyXG4gIDI0NixcclxuICA5NyxcclxuICAyMjgsXHJcbiAgMjUxLFxyXG4gIDM0LFxyXG4gIDI0MixcclxuICAxOTMsXHJcbiAgMjM4LFxyXG4gIDIxMCxcclxuICAxNDQsXHJcbiAgMTIsXHJcbiAgMTkxLFxyXG4gIDE3OSxcclxuICAxNjIsXHJcbiAgMjQxLFxyXG4gIDgxLFxyXG4gIDUxLFxyXG4gIDE0NSxcclxuICAyMzUsXHJcbiAgMjQ5LFxyXG4gIDE0LFxyXG4gIDIzOSxcclxuICAxMDcsXHJcbiAgNDksXHJcbiAgMTkyLFxyXG4gIDIxNCxcclxuICAzMSxcclxuICAxODEsXHJcbiAgMTk5LFxyXG4gIDEwNixcclxuICAxNTcsXHJcbiAgMTg0LFxyXG4gIDg0LFxyXG4gIDIwNCxcclxuICAxNzYsXHJcbiAgMTE1LFxyXG4gIDEyMSxcclxuICA1MCxcclxuICA0NSxcclxuICAxMjcsXHJcbiAgNCxcclxuICAxNTAsXHJcbiAgMjU0LFxyXG4gIDEzOCxcclxuICAyMzYsXHJcbiAgMjA1LFxyXG4gIDkzLFxyXG4gIDIyMixcclxuICAxMTQsXHJcbiAgNjcsXHJcbiAgMjksXHJcbiAgMjQsXHJcbiAgNzIsXHJcbiAgMjQzLFxyXG4gIDE0MSxcclxuICAxMjgsXHJcbiAgMTk1LFxyXG4gIDc4LFxyXG4gIDY2LFxyXG4gIDIxNSxcclxuICA2MSxcclxuICAxNTYsXHJcbiAgMTgwLFxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIEFuIGltcGxpbWVudGF0aW9uIG9mIFBlcmxpbiBOb2lzZSBieSBLZW4gUGVybGluLlxyXG4gKi9cclxuY2xhc3MgUGVybGluIHtcclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWVkIFNlZWQgVmFsdWUgZm9yIFBSTkcuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc2VlZCkge1xyXG4gICAgY29uc3QgX2dyYWRpZW50VmVjcyA9IFtcclxuICAgICAgLy8gMkQgVmVjc1xyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAwKSxcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoLTEsIDEsIDApLFxyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAtMSwgMCksXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAtMSwgMCksXHJcbiAgICAgIC8vICsgM0QgVmVjc1xyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAxKSxcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoLTEsIDAsIDEpLFxyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAtMSksXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKC0xLCAwLCAtMSksXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDEpLFxyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMSwgMSksXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIC0xKSxcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTEsIC0xKSxcclxuICAgIF07XHJcblxyXG4gICAgdmFyIHBlcm0gPSBuZXcgQXJyYXkoNTEyKTtcclxuICAgIHZhciBncmFkUCA9IG5ldyBBcnJheSg1MTIpO1xyXG5cclxuICAgIGlmICghc2VlZCkgc2VlZCA9IDE7XHJcbiAgICBzZWVkICo9IDY1NTM2O1xyXG5cclxuICAgIHNlZWQgPSBNYXRoLmZsb29yKHNlZWQpO1xyXG4gICAgaWYgKHNlZWQgPCAyNTYpIHtcclxuICAgICAgc2VlZCB8PSBzZWVkIDw8IDg7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xyXG4gICAgICB2YXIgdjtcclxuICAgICAgaWYgKGkgJiAxKSB7XHJcbiAgICAgICAgdiA9IHBbaV0gXiAoc2VlZCAmIDI1NSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdiA9IHBbaV0gXiAoKHNlZWQgPj4gOCkgJiAyNTUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwZXJtW2ldID0gcGVybVtpICsgMjU2XSA9IHY7XHJcbiAgICAgIGdyYWRQW2ldID0gZ3JhZFBbaSArIDI1Nl0gPSBfZ3JhZGllbnRWZWNzW3YgJSAxMl07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fc2VlZCA9IHNlZWQ7XHJcblxyXG4gICAgdGhpcy5fb2Zmc2V0TWF0cml4ID0gW1xyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKSxcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSksXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLFxyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAxKSxcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMCksXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDEpLFxyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAwKSxcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSksXHJcbiAgICBdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR0xTTCBTaGFkZXIgQ2h1bmsgZm9yIDJEIFBlcmxpbiBOb2lzZS4gQ2FuIGJlIHVzZWQgd2l0aFxyXG4gICAgICogdGhyZWUtQ3VzdG9tU2hhZGVyTWF0ZXJpYWwuXHJcbiAgICAgKiBTZWU6IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRmFyYXp6U2hhaWtoL1RIUkVFLUN1c3RvbVNoYWRlck1hdGVyaWFsXCI+dGhyZWUtQ3VzdG9tU2hhZGVyTWF0ZXJpYWw8L2E+XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc2hhZGVyQ2h1bmsgPSB7XHJcbiAgICAgIGRlZmluZXM6IFwiXCIsXHJcbiAgICAgIGhlYWRlcjogZGVmaW5pdGlvbnNfcGVybGluLFxyXG4gICAgICBtYWluOiBcIlwiLFxyXG4gICAgICB1bmlmb3JtczogW3sgdGhyZWVfbm9pc2Vfc2VlZDogdGhpcy5fc2VlZCB9XSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wZXJtID0gcGVybTtcclxuICAgIHRoaXMuZ3JhZFAgPSBncmFkUDtcclxuICB9XHJcblxyXG4gIF9mYWRlKHQpIHtcclxuICAgIHJldHVybiB0ICogdCAqIHQgKiAodCAqICh0ICogNiAtIDE1KSArIDEwKTtcclxuICB9XHJcblxyXG4gIF9sZXJwKGEsIGIsIHQpIHtcclxuICAgIHJldHVybiAoMSAtIHQpICogYSArIHQgKiBiO1xyXG4gIH1cclxuXHJcbiAgX2dyYWRpZW50KHBvc0luQ2VsbCkge1xyXG4gICAgaWYgKHBvc0luQ2VsbCBpbnN0YW5jZW9mIFRIUkVFLlZlY3RvcjMpIHtcclxuICAgICAgcmV0dXJuIHBvc0luQ2VsbC54ICsgdGhpcy5wZXJtW3Bvc0luQ2VsbC55ICsgdGhpcy5wZXJtW3Bvc0luQ2VsbC56XV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcG9zSW5DZWxsLnggKyB0aGlzLnBlcm1bcG9zSW5DZWxsLnldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFwcyBhIG51bWJlciBmcm9tIG9uZSByYW5nZSB0byBhbm90aGVyLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4ICAgICAgIElucHV0IE51bWJlclxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbl9taW4gIEN1cnJlbnQgcmFuZ2UgbWluaW11bVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbl9tYXggIEN1cnJlbnQgcmFuZ2UgbWF4aW11bVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvdXRfbWluIE5ldyByYW5nZSBtaW5pbXVtXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG91dF9tYXggTmV3IHJhbmdlIG1heGltdW1cclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBJbnB1dCBNYXBwZWQgdG8gcmFuZ2UgW291dF9taW4sIG91dF9tYXhdXHJcbiAgICovXHJcbiAgc3RhdGljIG1hcCh4LCBpbl9taW4sIGluX21heCwgb3V0X21pbiwgb3V0X21heCkge1xyXG4gICAgcmV0dXJuICgoeCAtIGluX21pbikgKiAob3V0X21heCAtIG91dF9taW4pKSAvIChpbl9tYXggLSBpbl9taW4pICsgb3V0X21pbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNhbXBsZXMgMkQgUGVybGluIE5vc2llIGF0IGdpdmVuIGNvb3JkaW5hdGVzLlxyXG4gICAqIEBwYXJhbSB7VEhSRUUuVmVjdG9yMiB8IFRIUkVFLlZlY3RvcjN9IGlucHV0IENvb3JkaW5jYXRlcyB0byBzYW1wbGUgYXRcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBWYWx1ZSBvZiBQZXJsaW4gTm9pc2UgYXQgdGhhdCBjb29yZGluYXRlLlxyXG4gICAqL1xyXG4gIGdldDIoaW5wdXQpIHtcclxuICAgIGlmIChpbnB1dC56ICE9PSB1bmRlZmluZWQpIGlucHV0ID0gbmV3IFRIUkVFLlZlY3RvcjIoaW5wdXQueCwgaW5wdXQueSk7XHJcblxyXG4gICAgY29uc3QgY2VsbCA9IG5ldyBUSFJFRS5WZWN0b3IyKE1hdGguZmxvb3IoaW5wdXQueCksIE1hdGguZmxvb3IoaW5wdXQueSkpO1xyXG4gICAgaW5wdXQuc3ViKGNlbGwpO1xyXG5cclxuICAgIGNlbGwueCAmPSAyNTU7XHJcbiAgICBjZWxsLnkgJj0gMjU1O1xyXG5cclxuICAgIGNvbnN0IGdyYWRpYW50RG90ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICBjb25zdCBzMyA9IHRoaXMuX29mZnNldE1hdHJpeFtpICogMl07XHJcbiAgICAgIGNvbnN0IHMgPSBuZXcgVEhSRUUuVmVjdG9yMihzMy54LCBzMy55KTtcclxuXHJcbiAgICAgIGNvbnN0IGdyYWQzID1cclxuICAgICAgICB0aGlzLmdyYWRQW3RoaXMuX2dyYWRpZW50KG5ldyBUSFJFRS5WZWN0b3IyKCkuYWRkVmVjdG9ycyhjZWxsLCBzKSldO1xyXG4gICAgICBjb25zdCBncmFkMiA9IG5ldyBUSFJFRS5WZWN0b3IyKGdyYWQzLngsIGdyYWQzLnkpO1xyXG4gICAgICBjb25zdCBkaXN0MiA9IG5ldyBUSFJFRS5WZWN0b3IyKCkuc3ViVmVjdG9ycyhpbnB1dCwgcyk7XHJcblxyXG4gICAgICBncmFkaWFudERvdC5wdXNoKGdyYWQyLmRvdChkaXN0MikpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHUgPSB0aGlzLl9mYWRlKGlucHV0LngpO1xyXG4gICAgY29uc3QgdiA9IHRoaXMuX2ZhZGUoaW5wdXQueSk7XHJcblxyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9sZXJwKFxyXG4gICAgICB0aGlzLl9sZXJwKGdyYWRpYW50RG90WzBdLCBncmFkaWFudERvdFsyXSwgdSksXHJcbiAgICAgIHRoaXMuX2xlcnAoZ3JhZGlhbnREb3RbMV0sIGdyYWRpYW50RG90WzNdLCB1KSxcclxuICAgICAgdlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTYW1wbGVzIDNEIFBlcmxpbiBOb3NpZSBhdCBnaXZlbiBjb29yZGluYXRlcy5cclxuICAgKiBAcGFyYW0ge1RIUkVFLlZlY3Rvcn0zIGlucHV0IENvb3JkaW5jYXRlcyB0byBzYW1wbGUgYXRcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBWYWx1ZSBvZiBQZXJsaW4gTm9pc2UgYXQgdGhhdCBjb29yZGluYXRlLlxyXG4gICAqL1xyXG4gIGdldDMoaW5wdXQpIHtcclxuICAgIGlmIChpbnB1dC56ID09PSB1bmRlZmluZWQpXHJcbiAgICAgIHRocm93IFwiSW5wdXQgdG8gUGVybGluOjpnZXQzKCkgbXVzdCBiZSBvZiB0eXBlIFRIUkVFLlZlY3RvcjNcIjtcclxuXHJcbiAgICBjb25zdCBjZWxsID0gbmV3IFRIUkVFLlZlY3RvcjMoXHJcbiAgICAgIE1hdGguZmxvb3IoaW5wdXQueCksXHJcbiAgICAgIE1hdGguZmxvb3IoaW5wdXQueSksXHJcbiAgICAgIE1hdGguZmxvb3IoaW5wdXQueilcclxuICAgICk7XHJcbiAgICBpbnB1dC5zdWIoY2VsbCk7XHJcblxyXG4gICAgY2VsbC54ICY9IDI1NTtcclxuICAgIGNlbGwueSAmPSAyNTU7XHJcbiAgICBjZWxsLnogJj0gMjU1O1xyXG5cclxuICAgIGNvbnN0IGdyYWRpYW50RG90ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICBjb25zdCBzID0gdGhpcy5fb2Zmc2V0TWF0cml4W2ldO1xyXG5cclxuICAgICAgY29uc3QgZ3JhZDMgPVxyXG4gICAgICAgIHRoaXMuZ3JhZFBbdGhpcy5fZ3JhZGllbnQobmV3IFRIUkVFLlZlY3RvcjMoKS5hZGRWZWN0b3JzKGNlbGwsIHMpKV07XHJcbiAgICAgIGNvbnN0IGRpc3QyID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5zdWJWZWN0b3JzKGlucHV0LCBzKTtcclxuXHJcbiAgICAgIGdyYWRpYW50RG90LnB1c2goZ3JhZDMuZG90KGRpc3QyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdSA9IHRoaXMuX2ZhZGUoaW5wdXQueCk7XHJcbiAgICBjb25zdCB2ID0gdGhpcy5fZmFkZShpbnB1dC55KTtcclxuICAgIGNvbnN0IHcgPSB0aGlzLl9mYWRlKGlucHV0LnopO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fbGVycChcclxuICAgICAgdGhpcy5fbGVycChcclxuICAgICAgICB0aGlzLl9sZXJwKGdyYWRpYW50RG90WzBdLCBncmFkaWFudERvdFs0XSwgdSksXHJcbiAgICAgICAgdGhpcy5fbGVycChncmFkaWFudERvdFsxXSwgZ3JhZGlhbnREb3RbNV0sIHUpLFxyXG4gICAgICAgIHdcclxuICAgICAgKSxcclxuICAgICAgdGhpcy5fbGVycChcclxuICAgICAgICB0aGlzLl9sZXJwKGdyYWRpYW50RG90WzJdLCBncmFkaWFudERvdFs2XSwgdSksXHJcbiAgICAgICAgdGhpcy5fbGVycChncmFkaWFudERvdFszXSwgZ3JhZGlhbnREb3RbN10sIHUpLFxyXG4gICAgICAgIHdcclxuICAgICAgKSxcclxuICAgICAgdlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBpcyBhbiBpbXBsaW1lbnRhaXRvbiBvZiBhIEZyYWN0YWwgQnJvd25pYW4gTW90aW9uXHJcbiAqIGZ1bmN0aW9uIHVzaW5nIFBlcmxpbiBOb3NpZS5cclxuICovXHJcbmNsYXNzIEZCTSB7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBGQk0gY2xhc3MuXHJcbiAgICogVXNlIHRoaXMgaW5zdGFuY2UgdG8gZ2VuZXJhdGUgZkJtIG5vaXNlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBmb3IgZkJtIGdlbmVyYWl0b24uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMuc2VlZCBTZWVkIGZvciBQZXJsaW4gTm9pc2VcclxuICAgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5zY2FsZSBXaGF0IGRpc3RhbmNlIHRvIHZpZXcgdGhlIG5vaXNlbWFwXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMucGVyc2lzdGFuY2UgSG93IG11Y2ggZWFjaCBvY3RhdmUgY29udHJpYnV0ZXMgdG8gdGhlIG92ZXJhbGwgc2hhcGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sYWN1bmFyaXR5IEhvdyBtdWNoIGRldGFpbCBpcyBhZGRlZCBvciByZW1vdmVkIGF0IGVhY2ggb2N0YXZlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMub2N0YXZlcyBMZXZlbHMgb2YgZGV0YWlsIHlvdSB3YW50IHlvdSBwZXJsaW4gbm9pc2UgdG8gaGF2ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLnJlZGlzdHJpYnV0aW9uIExldmVsIG9mIGZsYXRuZXNzIHdpdGhpbiB0aGUgdmFsbGV5c1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHsgc2VlZCwgc2NhbGUsIHBlcnNpc3RhbmNlLCBsYWN1bmFyaXR5LCBvY3RhdmVzLCByZWRpc3RyaWJ1dGlvbiB9ID1cclxuICAgICAgb3B0aW9ucztcclxuICAgIHRoaXMuX25vaXNlID0gbmV3IFBlcmxpbihzZWVkKTtcclxuICAgIHRoaXMuX3NjYWxlID0gc2NhbGUgfHwgMTtcclxuICAgIHRoaXMuX3BlcnNpc3RhbmNlID0gcGVyc2lzdGFuY2UgfHwgMC41O1xyXG4gICAgdGhpcy5fbGFjdW5hcml0eSA9IGxhY3VuYXJpdHkgfHwgMjtcclxuICAgIHRoaXMuX29jdGF2ZXMgPSBvY3RhdmVzIHx8IDY7XHJcbiAgICB0aGlzLl9yZWRpc3RyaWJ1dGlvbiA9IHJlZGlzdHJpYnV0aW9uIHx8IDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTYW1wbGUgMkQgUGVybGluIE5vaXNlIHdpdGggZkJtIGF0IGdpdmVuXHJcbiAgICogY29vcmRpbmF0ZXMuIFRoZSBmdW5jdGlvbiB3aWxsIHVzZSA8Y29kZT5QZXJsaW5fZ2V0MjwvY29kZT4gb3IgPGNvZGU+UGVybGluX2dldDM8L2NvZGU+XHJcbiAgICogZGVwZW5kaW5nIG9uIHRoZSBpbnB1dCB2ZWN0b3IncyB0eXBlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoVEhSRUUuVmVjdG9yMiB8IFRIUkVFLlZlY3RvcjMpfSBpbnB1dCBDb29yZGluYXRlcyB0byBzYW1wbGUgbm9pc2UgYXQuXHJcbiAgICogQHJldHVybnMge251bWJlcn0gTm9ybWFsaXplZCBub2lzZSBpbiB0aGUgcmFuZ2UgWzAsIDFdXHJcbiAgICovXHJcbiAgZ2V0MihpbnB1dCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICBsZXQgYW1wbGl0dWRlID0gMTtcclxuICAgIGxldCBmcmVxdWVuY3kgPSAxO1xyXG4gICAgbGV0IG1heCA9IGFtcGxpdHVkZTtcclxuXHJcbiAgICBsZXQgbm9pc2VGdW5jdGlvbiA9IHRoaXMuX25vaXNlLmdldDIuYmluZCh0aGlzLl9ub2lzZSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9vY3RhdmVzOyBpKyspIHtcclxuICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMihcclxuICAgICAgICBpbnB1dC54ICogdGhpcy5fc2NhbGUgKiBmcmVxdWVuY3ksXHJcbiAgICAgICAgaW5wdXQueSAqIHRoaXMuX3NjYWxlICogZnJlcXVlbmN5XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBub2lzZVZhbCA9IG5vaXNlRnVuY3Rpb24ocG9zaXRpb24pO1xyXG4gICAgICByZXN1bHQgKz0gbm9pc2VWYWwgKiBhbXBsaXR1ZGU7XHJcblxyXG4gICAgICBmcmVxdWVuY3kgKj0gdGhpcy5fbGFjdW5hcml0eTtcclxuICAgICAgYW1wbGl0dWRlICo9IHRoaXMuX3BlcnNpc3RhbmNlO1xyXG4gICAgICBtYXggKz0gYW1wbGl0dWRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlZGlzdHJpYnV0ZWQgPSBNYXRoLnBvdyhyZXN1bHQsIHRoaXMuX3JlZGlzdHJpYnV0aW9uKTtcclxuICAgIHJldHVybiByZWRpc3RyaWJ1dGVkIC8gbWF4O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2FtcGxlIDNEIFBlcmxpbiBOb2lzZSB3aXRoIGZCbSBhdCBnaXZlblxyXG4gICAqIGNvb3JkaW5hdGVzLiBUaGUgZnVuY3Rpb24gd2lsbCB1c2UgPGNvZGU+UGVybGluX2dldDI8L2NvZGU+IG9yIDxjb2RlPlBlcmxpbl9nZXQzPC9jb2RlPlxyXG4gICAqIGRlcGVuZGluZyBvbiB0aGUgaW5wdXQgdmVjdG9yJ3MgdHlwZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VEhSRUUuVmVjdG9yM30gaW5wdXQgQ29vcmRpbmF0ZXMgdG8gc2FtcGxlIG5vaXNlIGF0LlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IE5vcm1hbGl6ZWQgbm9pc2UgaW4gdGhlIHJhbmdlIFswLCAxXVxyXG4gICAqL1xyXG4gIGdldDMoaW5wdXQpIHtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgbGV0IGFtcGxpdHVkZSA9IDE7XHJcbiAgICBsZXQgZnJlcXVlbmN5ID0gMTtcclxuICAgIGxldCBtYXggPSBhbXBsaXR1ZGU7XHJcblxyXG4gICAgbGV0IG5vaXNlRnVuY3Rpb24gPSB0aGlzLl9ub2lzZS5nZXQzLmJpbmQodGhpcy5fbm9pc2UpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fb2N0YXZlczsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjIoXHJcbiAgICAgICAgaW5wdXQueCAqIHRoaXMuX3NjYWxlICogZnJlcXVlbmN5LFxyXG4gICAgICAgIGlucHV0LnkgKiB0aGlzLl9zY2FsZSAqIGZyZXF1ZW5jeSxcclxuICAgICAgICBpbnB1dC56ICogdGhpcy5fc2NhbGUgKiBmcmVxdWVuY3lcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IG5vaXNlVmFsID0gbm9pc2VGdW5jdGlvbihwb3NpdGlvbik7XHJcbiAgICAgIHJlc3VsdCArPSBub2lzZVZhbCAqIGFtcGxpdHVkZTtcclxuXHJcbiAgICAgIGZyZXF1ZW5jeSAqPSB0aGlzLl9sYWN1bmFyaXR5O1xyXG4gICAgICBhbXBsaXR1ZGUgKj0gdGhpcy5fcGVyc2lzdGFuY2U7XHJcbiAgICAgIG1heCArPSBhbXBsaXR1ZGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVkaXN0cmlidXRlZCA9IE1hdGgucG93KHJlc3VsdCwgdGhpcy5fcmVkaXN0cmlidXRpb24pO1xyXG4gICAgcmV0dXJuIHJlZGlzdHJpYnV0ZWQgLyBtYXg7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBGQk0sIFBlcmxpbiB9OyIsIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxyXG5sZXQgcmVuZGVyaW5nTGlzdCA9IHt9O1xyXG5cclxuZnVuY3Rpb24gY2hlY2tUeXBlKHR5cGUpIHtcclxuICAgIGlmICh0eXBlb2YgcmVuZGVyaW5nTGlzdFtgJHt0eXBlfWBdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmVuZGVyaW5nTGlzdFtgJHt0eXBlfWBdID0gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUb1JlbmRlclNlcXVlbmNlKHR5cGUsIGNhbGxiYWNrLCBuZXdUeXBlID0gZmFsc2UsIHZhbCkge1xyXG4gICAgaWYgKG5ld1R5cGUpIHtcclxuICAgICAgICByZW5kZXJpbmdMaXN0W2Ake3R5cGV9YF0gPSBbXTtcclxuICAgIH1cclxuICAgIGNoZWNrVHlwZSh0eXBlKTtcclxuICAgIHJlbmRlcmluZ0xpc3RbYCR7dHlwZX1gXS5wdXNoKGNhbGxiYWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcmluZ0luZm8odHlwZSkge1xyXG4gICAgY2hlY2tUeXBlKHR5cGUpO1xyXG4gICAgcmV0dXJuIHJlbmRlcmluZ0xpc3RbYCR7dHlwZX1gXS5sZW5ndGg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSZW5kZXJDeWNsZSh0eXBlKSB7XHJcbiAgICBjaGVja1R5cGUodHlwZSk7XHJcbiAgICByZW5kZXJpbmdMaXN0W2Ake3R5cGV9YF0uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0oKTtcclxuICAgIH0pO1xyXG59XHJcbiIsIi8vIENyZWF0ZWQgYnkgSGFydmV5IFJhbmRhbGwgdG8gQXV0b21hdGUgdGhlIGNyZWF0aW9uIGFuZCBoYW5kbGluZyBvZiB3ZWIgd29ya2VycyBcXFxcXHJcblxyXG5pbXBvcnQgeyBBcnJvd0Z1bmN0aW9uIH0gZnJvbSBcInR5cGVzY3JpcHRcIjtcclxuXHJcbi8vIE9LIGZpcnN0IHRoaW5nIGZpcnN0LCB3ZSBuZWVkIHRvIHR1cm4gdGhlIGZpbGUgaW50byBhIGRhdGEgYmxvYlxyXG5cclxuLyoqXHJcbiogVHVybiBKUyBmaWxlIGludG8gYSBkYXRhYmxvYiBhbmQgdGhlbiBpbnRvIGEgd2ViIHdvcmtlclxyXG4qIEBwYXJhbSB7d29ya2VyfSBzdHIgVGhlIGFjdHVhbCBjb2RlIGZvciB0aGUgd29ya2VyIHRvIGJlIHBhcnNlZFxyXG4qIEByZXR1cm5zIHtXb3JrZXJ9XHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBHZW5lcmF0ZVdlYldvcmtlcih3b3JrZXI6c3RyaW5nLCBnbG9iYWxWYXJzOnN0cmluZ1tdLCByZXR1cm5GdW5jOiBGdW5jdGlvbik6V29ya2Vye1xyXG4gICAgLy8gRmlyc3QgdGhpbmcgaWYgaXRzIG5vdCBhIHN0cmluZyBtYWtlIGl0IGEgc3RyaW5nXHJcbiAgICBjb25zdCBjb2RlID0gd29ya2VyLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgLy9XZSBtYXkgbmVlZCB0byBhZGQgdGhlIGNhbGxpbmcgY29udGV4dCBzbyB3ZSBzaG91bGQgYWRkIHRoZSBnbG9iYWwgdmFyc1xyXG4gICAgbGV0IGlucHV0U3R1ZmYgPSBgbGV0IGdsb2JhbFZhcnMgPSAke2dsb2JhbFZhcnN9O1xcbmBcclxuXHJcbiAgICAvL05leHQgQ3JlYXRlIHRoZSBibG9iIGluIGEgc2VsZiBydW5uaW5nIGZ1bmN0aW9uXHJcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2lucHV0U3R1ZmYgKyBcIihcIiArIGNvZGUgKyBcIikoKVwiXSwgeyB0eXBlOiAndGV4dC9qYXZhc2NyaXB0JyB9KTtcclxuXHJcbiAgICAvL1RoZW4gcmV0dXJuIHRoZSB3ZWIgd29ya2VyXHJcbiAgICBsZXQgd29ya2VyT3V0ID0gbmV3IFdvcmtlcih3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSwgeyB0eXBlOiAnbW9kdWxlJyB9KVxyXG5cclxuICAgIC8vQ2hlY2sgaWYgd2ViIHdvcmtlciB3YW50cyB0byB0ZXJtaW5hdGUgaXRzZWxmXHJcbiAgICB3b3JrZXJPdXQuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChlKSA9PiByZXR1cm5GdW5jKGUpLCBmYWxzZSkgIFxyXG5cclxuICAgIHJldHVybiB3b3JrZXJPdXRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRlcm1pbnRlV29ya2VyRXh0ZXJuYWxseSh3b3JrZXI6V29ya2VyKTpib29sZWFue1xyXG4gICAgdHJ5e1xyXG4gICAgICAgd29ya2VyLnRlcm1pbmF0ZSgpIFxyXG4gICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIFxyXG59IiwiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcbmltcG9ydCB7IEJveEdlb21ldHJ5LCBNZXNoLCBNZXNoQmFzaWNNYXRlcmlhbCB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgKiBhcyB0aHJlZSBmcm9tIFwidGhyZWVcIjtcclxubGV0IEdhbWVDb3JlU2hhZG93cyA9IHRydWU7IC8vIFRPRE8gYWRkIHRvIEdVSVxyXG5cclxuLyplc2xpbnQgY29tcGxleGl0eTogW1wiZXJyb3JcIiwgMjBdKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdlbyh0eXBlLCBkYXRhLCBwb3MsIHJvdCwgbWF0LCBzaGFkb3cpIHtcclxuICAgIC8vQ3JlYXRlIHR5cGUsIHVzaW5nIGRlc3RydWN0dXJpbmcgdG8gcGFzcyBpbiB2YWx1ZXNcclxuICAgIGxldCBnZW8gPSBuZXcgdGhyZWVbYCR7dHlwZX1gXSguLi5kYXRhKTtcclxuXHJcbiAgICAvL1NldCBHZW8gUG9zaXRpb24gYW5kIFJvdGF0aW9uXHJcbiAgICBnZW8ucG9zaXRpb24uc2V0KHBvcyk7XHJcbiAgICBnZW8ucm90YXRpb24uc2V0KHJvdCk7XHJcblxyXG4gICAgLy9DcmVhdGUgdGhlIE1lc2hcclxuICAgIC8qZXNsaW50IG5ldy1jYXA6IFwiZXJyb3JcIiovXHJcbiAgICBsZXQgbWVzaCA9IG5ldyBNZXNoKGdlbywgbWF0KTtcclxuXHJcbiAgICAvL0hhbmRsZSBSZWNpdmluZyBzaGFkb3dzIGFuZCBjYXN0aW5nXHJcbiAgICBtZXNoLmNhc3RTaGFkb3cgPSBzaGFkb3cgJiYgR2FtZUNvcmVTaGFkb3dzID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgbWVzaC5yZWNlaXZlU2hhZG93ID0gc2hhZG93ICYmIEdhbWVDb3JlU2hhZG93cyA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAvL1JldHVybiBNZXNoXHJcbiAgICByZXR1cm4gbWVzaDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnQ3ViZSgpe1xyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgQm94R2VvbWV0cnkoIDEwLCAxMCwgMTAgKTtcclxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IE1lc2hCYXNpY01hdGVyaWFsKCB7Y29sb3I6IDB4MDBmZjAwfSApO1xyXG4gICAgY29uc3QgY3ViZSA9IG5ldyBNZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuICAgIHJldHVybiBjdWJlXHJcbn0iLCIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcclxuXHJcbi8vIFJlbmRlciBIYW5kbGVyXHJcbmltcG9ydCB7IGFkZFRvUmVuZGVyU2VxdWVuY2UgfSBmcm9tIFwiLi4vQ29yZS1BUEkvUmVuZGVyaW5nSGFuZGxlclwiO1xyXG5cclxuLy9GdW5jdGlvbmFsIERlcGVuZGVuY2llc1xyXG5pbXBvcnQge1xyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBEb3VibGVTaWRlLFxyXG4gICAgR3JpZEhlbHBlcixcclxuICAgIE1lc2gsXHJcbiAgICBNZXNoU3RhbmRhcmRNYXRlcmlhbCxcclxuICAgIFBsYW5lQnVmZmVyR2VvbWV0cnksXHJcbiAgICBQbGFuZUdlb21ldHJ5LFxyXG4gICAgVmVjdG9yMyxcclxufSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgR2VuZXJhdGVDbG91ZHMgfSBmcm9tIFwiLi4vZ2FtZUZ1bmRhbG1lbnRhbHMvY2xvdWRzXCI7XHJcbmltcG9ydCB7IGNvbnRyb2xIYW5kbGVySW5pdCwgY29udHJvbEhhbmRsZXJVcGRhdGUgfSBmcm9tIFwiLi4vZ2FtZUZ1bmRhbG1lbnRhbHMvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgQ3JlYXRlRGF5TmlnaHRDeWNsZSB9IGZyb20gXCIuLi9nYW1lRnVuZGFsbWVudGFscy9EYXlOaWdodEN5Y2xlXCI7XHJcbmltcG9ydCB7IE1ha2VQbGFuZSB9IGZyb20gXCIuLi9nYW1lRnVuZGFsbWVudGFscy9wbGFuZUhhbmRsZXIvTWFpblBsYW5lXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllciB9IGZyb20gXCIuLi9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC90ZXJyYWluQ2h1bmtyaXNlclwiO1xyXG5pbXBvcnQgeyBHZW5lcmF0ZVdlYldvcmtlciB9IGZyb20gXCIuLi9Db3JlLUFQSS9Xb3JrZXJTZXR1cC50c1wiO1xyXG5pbXBvcnQgeyBkZWJ1Z0N1YmUgfSBmcm9tIFwiLi4vQ29yZS1BUEkvZ2Vtb3RyeU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgYWRkR0xCRmlsZSB9IGZyb20gXCIuLi9Db3JlLUFQSS8zZE1vZGVsSGFuZGxlcnMvR0xCTG9hZGVyXCI7XHJcblxyXG5sZXQgZGVidWcgPSB0cnVlO1xyXG4gXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVNYWluU2NlbmUoXHJcbiAgICBTY2VuZVRvR2V0LFxyXG4gICAgUmVuZGVycyxcclxuICAgIGRvY3VtZW50LFxyXG4gICAgc2VlZCxcclxuICAgIGNoaWxkMixcclxuICAgIENhbWVyYVxyXG4pIHtcclxuXHJcblxyXG4gICAgbGV0IGNvbGxpc2lvbkhhbmRsZXIgPSBuZXcgV29ya2VyKCd3ZWJXb3JrZXJzL0NvbGxpc2lvbi5qcycpO1xyXG4gICAgY29sbGlzaW9uSGFuZGxlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICB9XHJcbiAgICBjb2xsaXNpb25IYW5kbGVyLm9ubWVzc2FnZWVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgY29sbGlzaW9uSGFuZGxlci5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgY29sbGlzaW9uSGFuZGxlci5wb3N0TWVzc2FnZSh7Q29tbWFuZDpcIlN0YXJ0XCIsIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLm9yaWdpbn0pXHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29sbGlzaW9uSGFuZGxlci5wb3N0TWVzc2FnZSh7Q29tbWFuZDpcIkFkZFNoYXBlXCIsIGRhdGE6IG5ldyBQbGFuZUJ1ZmZlckdlb21ldHJ5KDIsIDIsIDIsIDIpfSlcclxuICAgIH0sMTAwMCk7XHJcblxyXG4gICAgbGV0IGNsb3VkcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XHJcbiAgICAgICAgY2xvdWRzLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBHZW5lcmF0ZUNsb3VkcyhcclxuICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IzKFxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAzMDAgLSAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgODAgKyBNYXRoLnJhbmRvbSgpICogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDYwMCAtIDQwMFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIFNjZW5lVG9HZXQsXHJcbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMC4yLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDYgKyAxXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkYXluaWdodCA9IG5ldyBDcmVhdGVEYXlOaWdodEN5Y2xlKFNjZW5lVG9HZXQsIFJlbmRlcnMpO1xyXG4gICAgLy9nZW5lcmF0ZVRlcnJhaW4oc2VlZCwgU2NlbmVUb0dldCk7XHJcbiAgICBjb250cm9sSGFuZGxlckluaXQoZG9jdW1lbnQsIGNoaWxkMik7XHJcblxyXG4gICAgaWYgKGRlYnVnKSB7XHJcbiAgICAgICAgY29uc3QgcGxhbmVHZW9tZXRyeSA9IG5ldyBQbGFuZUdlb21ldHJ5KDIwLCAyMCwgMzIsIDMyKTtcclxuICAgICAgICBwbGFuZUdlb21ldHJ5LnJvdGF0ZVgoTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgIGNvbnN0IHBsYW5lTWF0ZXJpYWwgPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICBjb2xvcjogXCIjNTY3ZDQ2XCIsXHJcbiAgICAgICAgICAgIHNpZGU6IERvdWJsZVNpZGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcGxhbmUgPSBuZXcgTWVzaChwbGFuZUdlb21ldHJ5LCBwbGFuZU1hdGVyaWFsKTtcclxuICAgICAgICBwbGFuZS5wb3NpdGlvbi55ID0gLTAuNTtcclxuICAgICAgICBTY2VuZVRvR2V0LmFkZChwbGFuZSk7XHJcbiAgICAgICAgY29uc3QgZ3JpZEhlbHBlciA9IG5ldyBHcmlkSGVscGVyKDUwLCA1MCk7XHJcbiAgICAgICAgZ3JpZEhlbHBlci5wb3NpdGlvbi55ID0gLTE7XHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQoZ3JpZEhlbHBlcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIEFkZCBhbGwgdXBkYXRpbmcgcGFydHMgdG8gYSBmdW5jdGlvblxyXG4gICAgYWRkVG9SZW5kZXJTZXF1ZW5jZShcclxuICAgICAgICBcIk1haW5cIixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsb3Vkcy5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRydWVcclxuICAgICk7XHJcbiAgICBsZXQgbmV3UGxhbmUgPSBuZXcgTWFrZVBsYW5lKFNjZW5lVG9HZXQpXHJcbiAgICBhd2FpdCBuZXdQbGFuZS5sb2FkRmlsZXMoKVxyXG4gICAgbmV3UGxhbmUuQ3JlYXRlR3JvdXBBbmRQb3MoKVxyXG4gICAgLy9uZXdQbGFuZS5hdHRhY2hDYW1lcmFBbmRDb250cm9sKENhbWVyYSlcclxuXHJcbiAgICBsZXQgYWlycG9ydCA9IGF3YWl0IGFkZEdMQkZpbGUoXHJcbiAgICAgICAgXCIvQXNzZXRzL0FpcnBvcnQuZ2xiXCIsXHJcbiAgICAgICAgU2NlbmVUb0dldFxyXG4gICAgKTtcclxuICAgIFNjZW5lVG9HZXQuYWRkKGFpcnBvcnQuc2NlbmUpXHJcblxyXG4gICAgZ2VuZXJhdGVUZXJyYWluQXJvdW5kUGxheWVyKHNlZWQsIENhbWVyYSwgU2NlbmVUb0dldClcclxuXHJcbiAgICBhZGRUb1JlbmRlclNlcXVlbmNlKFwiTWFpblwiLCAoKSA9PiBjb250cm9sSGFuZGxlclVwZGF0ZShDYW1lcmEpKTtcclxuICAgIGFkZFRvUmVuZGVyU2VxdWVuY2UoXCJNYWluXCIsICgpID0+IGRheW5pZ2h0LnVwZGF0ZShDYW1lcmEpKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKEdlbmVyYXRlV2ViV29ya2VyKGAvd2ViV29ya2Vycy9iYXNpY1Rlc3QuanNgLCBbXSwgKGUpID0+IHtjb25zb2xlLmxvZyhlKX0gKSlcclxufVxyXG4iLCIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcclxuaW1wb3J0IHtcclxuICAgIEJhY2tTaWRlLFxyXG4gICAgQm94R2VvbWV0cnksXHJcbiAgICBDb2xvcixcclxuICAgIE1hdGhVdGlscyxcclxuICAgIE1lc2gsXHJcbiAgICBNZXNoQmFzaWNNYXRlcmlhbCxcclxuICAgIE1lc2hMYW1iZXJ0TWF0ZXJpYWwsXHJcbiAgICBTcGhlcmVCdWZmZXJHZW9tZXRyeSxcclxuICAgIFZlY3RvcjMsXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBjcmVhdGVBbWJpZW50TGlnaHQsXHJcbiAgICBjcmVhdGVEaXJlY3Rpb25hbExpZ2h0LFxyXG59IGZyb20gXCIuLi9Db3JlLUFQSS9MaWdodGluZ01hbmFnZXJcIjtcclxuaW1wb3J0IHsgZ2V0UmFuZG9tU3RhckZpZWxkIH0gZnJvbSBcIi4vc3RhcnNcIjtcclxuaW1wb3J0IHsgcm90YXRlQWJvdXRQb2ludCB9IGZyb20gXCIuL3JvdGF0ZUFyb3VuZFBvaW50XCI7XHJcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IHsgZGVidWdDdWJlIH0gZnJvbSBcIi4uL0NvcmUtQVBJL2dlbW90cnlNYW5hZ2VyXCI7XHJcblxyXG5sZXQgcmVjaWV2ZURheXRpbWVVcGRhdGUgPSB7fTtcclxuXHJcbmxldCBkYXkgPSB0cnVlXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGR0b0RheVRpbWVDaGVja2VyKGFyZykge1xyXG4gICAgbGV0IFVVSUQgPSB2NCgpO1xyXG4gICAgcmVjaWV2ZURheXRpbWVVcGRhdGVbVVVJRF0gPSBhcmc7XHJcbiAgICByZXR1cm4gVVVJRDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbURheVRpbWVIb29rKFVVSUQpIHtcclxuICAgIGRlbGV0ZSByZWNpZXZlRGF5dGltZVVwZGF0ZVtVVUlEXTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5U3RhdGUoKXtcclxuICAgIHJldHVybiBkYXlcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENyZWF0ZURheU5pZ2h0Q3ljbGUge1xyXG4gICAgY29uc3RydWN0b3IoU2NlbmVUb0dldCwgUmVuZGVycykge1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW1R3byB0byBsZXZlbCBnbG9iYWwgdmFyaWFibGVzXSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICB0aGlzLlNjZW5lVG9HZXQgPSBTY2VuZVRvR2V0O1xyXG4gICAgICAgIHRoaXMuUmVuZGVycyA9IFJlbmRlcnM7XHJcblxyXG4gICAgICAgIHRoaXMuYW5ub3VuY2VkRGF5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hbm5vdW5jZWROaWdodCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tIFtDcmVhdGUgU3VuIE1lc2hdIC0tLS0tLS0tLS0gXFxcXFxyXG4gICAgICAgIGxldCBzdW4gPSBuZXcgU3BoZXJlQnVmZmVyR2VvbWV0cnkoMjAsIDIwLCAxMDAsIDEwMCk7XHJcbiAgICAgICAgbGV0IHN1bk1hdGVyaWFsID0gbmV3IE1lc2hMYW1iZXJ0TWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICBlbWlzc2l2ZTogXCIjZjlkNzFjXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHN1bm1lc2ggPSBuZXcgTWVzaChzdW4sIHN1bk1hdGVyaWFsKTtcclxuICAgICAgICBzdW5tZXNoLnBvc2l0aW9uLnNldCgxLCAzMDAsIDMwMCk7XHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQoc3VubWVzaCk7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW0NyZWF0ZSBNb29uIE1lc2hdIC0tLS0tLS0tLS0gXFxcXFxyXG4gICAgICAgIGxldCBtb29uID0gbmV3IFNwaGVyZUJ1ZmZlckdlb21ldHJ5KDEwLCAxMCwgMTAwLCAxMDApO1xyXG4gICAgICAgIGxldCBtb29uTWF0ZXJpYWwgPSBuZXcgTWVzaExhbWJlcnRNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgIGVtaXNzaXZlOiBcIiNmZmZmZmZcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgbW9vbk1lc2ggPSBuZXcgTWVzaChtb29uLCBtb29uTWF0ZXJpYWwpO1xyXG4gICAgICAgIG1vb25NZXNoLnBvc2l0aW9uLnNldCgtMSwgLTIwMCwgLTMwMCk7XHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQobW9vbk1lc2gpO1xyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tIFtDcmVhdGUgQm94IEdvbWV0cnkgZm9yIGhhbmRsaW5nIHJvdGF0aW9uXSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICB2YXIgZ2VvbWV0cnkgPSBuZXcgQm94R2VvbWV0cnkoMSwgMSwgMSk7XHJcbiAgICAgICAgdmFyIGN1YmUgPSBuZXcgTWVzaChnZW9tZXRyeSk7XHJcbiAgICAgICAgY3ViZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQoY3ViZSk7XHJcbiAgICAgICAgLy8gXiBUaGlzIGlzIGEgdmVyeSBiYWQgd29yayBhcm91bmQgZml4IGxhdGVyXHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW0FsbCBkZWZpbnRpb25zIGZvciB0aGUgbW92aW5nIHBhcnRdIC0tLS0tLS0tLS0gXFxcXFxyXG4gICAgICAgIHRoaXMuY3ViZSA9IGN1YmU7XHJcbiAgICAgICAgdGhpcy5tb29uTWVzaCA9IG1vb25NZXNoO1xyXG4gICAgICAgIHRoaXMuc3VubWVzaCA9IHN1bm1lc2g7XHJcbiAgICAgICAgdGhpcy50ID0gMDtcclxuICAgICAgICB0aGlzLmRUSW1lID0gMDtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLSBbQWxsIGRlZmludGlvbnMgZm9yIGxpZ2h0cyB0byBjcmVhdGUgc2hhZG93c10gLS0tLS0tLS0tLSBcXFxcXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0ID0gY3JlYXRlRGlyZWN0aW9uYWxMaWdodChcclxuICAgICAgICAgICAgU2NlbmVUb0dldCxcclxuICAgICAgICAgICAgXCIjZGRmZmVlXCIsXHJcbiAgICAgICAgICAgIDAuNSxcclxuICAgICAgICAgICAgWzEsIDEwMCwgMTAwXVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0MiA9IGNyZWF0ZURpcmVjdGlvbmFsTGlnaHQoXHJcbiAgICAgICAgICAgIFNjZW5lVG9HZXQsXHJcbiAgICAgICAgICAgIFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAwLjIsXHJcbiAgICAgICAgICAgIFsxLCAtMTAwLCAtMTAwXVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5saWdodCA9IGNyZWF0ZUFtYmllbnRMaWdodChTY2VuZVRvR2V0LCBcIiNhYWFhYWFcIiwgMC41KTtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLSBbQ3JlYXRlIFN0YXJ5IG5pZ2h0XSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICBsZXQgc2t5Qm94ID0gbmV3IEJveEdlb21ldHJ5KDEyMDAsIDEyMDAsIDEyMDApO1xyXG4gICAgICAgIGxldCBza3lCb3hNYXRlcmlhbCA9IG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgIG1hcDogZ2V0UmFuZG9tU3RhckZpZWxkKDYwMCwgMjA0OCwgMjA0OCksXHJcbiAgICAgICAgICAgIHNpZGU6IEJhY2tTaWRlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2t5ID0gbmV3IE1lc2goc2t5Qm94LCBza3lCb3hNYXRlcmlhbCk7XHJcbiAgICB9XHJcbiAgICAvKmVzbGludCBjb21wbGV4aXR5OiBbXCJlcnJvclwiLCAyMF0qL1xyXG4gICAgdXBkYXRlKENhbWVyYSkge1xyXG5cclxuICAgICAgICAvLyBUaGlzIHR3byBsaW5lcyBhcmUgIGltcG9ydGFudCBhcyBpdCBpcyBwYXJ0IG9mIHRoZSBoYWNreSB3b3JrIGFyb3VuZCB0byBnZXQgdGltZSBvZiBkYXkgb24gdmFyeWluZyBGUFNcclxuICAgICAgICBsZXQgdGhldGEgPSByb3RhdGVBYm91dFBvaW50KFxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbmFsTGlnaHQsXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKDAsIDAsIDApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMygxLCAwLCAwKSxcclxuICAgICAgICAgICAgMC4wMDEsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGhVdGlscy5yYWRUb0RlZyh0aGlzLmN1YmUucm90YXRpb24ueCk7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW1JvdGF0ZSBhbGwgdGhlIGxpZ2h0cyBhbmQgTWVzaGVzXSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICByb3RhdGVBYm91dFBvaW50KFxyXG4gICAgICAgICAgICB0aGlzLnN1bm1lc2gsXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKDEwMCwgMCwgMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKDEsIDAsIDApLFxyXG4gICAgICAgICAgICAwLjAwMSxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcm90YXRlQWJvdXRQb2ludChcclxuICAgICAgICAgICAgdGhpcy5tb29uTWVzaCxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjMoMTAwLCAwLCAwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjMoMSwgMCwgMCksXHJcbiAgICAgICAgICAgIDAuMDAxLFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICByb3RhdGVBYm91dFBvaW50KFxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbmFsTGlnaHQyLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMygwLCAwLCAwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjMoMSwgMCwgMCksXHJcbiAgICAgICAgICAgIDAuMDAxLFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLSBbSWYgaXQgaXMgZGF5XSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICBpZiAoYW5nbGUgPCA0MCAmJiB0aGlzLmRUSW1lIDwgMSkge1xyXG4gICAgICAgICAgICBkYXkgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB0aGlzLnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbmFsTGlnaHQuY29sb3IgPSBuZXcgQ29sb3IoXCIjZGRmZmVlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmRUSW1lICs9IDAuMDAzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kVEltZSA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRUSW1lID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLlJlbmRlcnMuc2V0Q2xlYXJDb2xvcihcclxuICAgICAgICAgICAgICAgIG5ldyBDb2xvcigpLmxlcnBDb2xvcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvbG9yKFwiI2ZkYjgxM1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQ29sb3IoXCIjODdjZWViXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZFRJbWVcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMubGlnaHQuaW50ZW5zaXR5ID0gMC41O1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbmFsTGlnaHQyLmNvbG9yID0gbmV3IENvbG9yKFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0LmludGVuc2l0eSA9IDAuNTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0Mi5pbnRlbnNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLlNjZW5lVG9HZXQucmVtb3ZlKHRoaXMuc2t5KTtcclxuICAgICAgICB9IGVsc2UgaWYgKCEoYW5nbGUgPCA0MCkgJiYgdGhpcy5za3kucGFyZW50ICE9PSB0aGlzLlNjZW5lVG9HZXQpIHtcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLSBbSWYgaXQgaXMgbmlnaHRdIC0tLS0tLS0tLS0gXFxcXFxyXG4gICAgICAgICAgICBkYXkgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kVEltZSA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnQgKz0gMC4wMTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TY2VuZVRvR2V0LmFkZCh0aGlzLnNreSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0Mi5jb2xvciA9IG5ldyBDb2xvcihcIiNmZmZmZmZcIik7XHJcbiAgICAgICAgICAgIHRoaXMuUmVuZGVycy5zZXRDbGVhckNvbG9yKFxyXG4gICAgICAgICAgICAgICAgbmV3IENvbG9yKCkubGVycENvbG9ycyhcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQ29sb3IoXCIjODdjZWViXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDb2xvcihcIiMwMDAwMDBcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0LmludGVuc2l0eSA9IDAuMjtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0LmludGVuc2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodDIuaW50ZW5zaXR5ID0gMC4yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5za3kucGFyZW50ID09PSB0aGlzLlNjZW5lVG9HZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5za3kucm90YXRpb24ueCAtPSA0IC8gMTAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3ViZS5yb3RhdGVPbkF4aXMobmV3IFZlY3RvcjMoMSwgMCwgMCksIHRoZXRhKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcclxuXHJcbmltcG9ydCB7XHJcbiAgICBCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBNZXNoLFxyXG4gICAgTWVzaFBob25nTWF0ZXJpYWwsXHJcbiAgICBQbGFuZUJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgVmVjdG9yMixcclxuICAgIFZlY3RvcjMsXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IHJhbmRvbUludEZyb21JbnRlcnZhbCB9IGZyb20gXCIuLi9BbGdvcml0aG1zL1ZlY3RvclV0aWxzXCI7XHJcblxyXG5pbXBvcnQgeyBQZXJsaW4sIEZCTSB9IGZyb20gXCIuLi9Db3JlLUFQSS9QZXJsaW5Ob2lzZS9QZXJsaW5nTm9pc2VcIjtcclxudmFyIFNpbXBsZXhOb2lzZSA9IHJlcXVpcmUoXCJzaW1wbGV4LW5vaXNlXCIpO1xyXG5cclxubGV0IGN1cnJlbnRUZXJyYWluO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJldHVyblRlcnJhaW5Qb2ludGVyKCkge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRUZXJyYWluO1xyXG59XHJcblxyXG4vKmVzbGludCBjb21wbGV4aXR5OiBbXCJlcnJvclwiLCAyMF0qL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUZXJyYWluKHNlZWQsIFNjZW5lVG9HZXQpIHtcclxuICAgIC8vLS0tLS0tLS0tLS0tW01BSU4gRlVOQ1RJT04gVkFSSUFCTEVTXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIGNvbnN0IHNpbXBsZXggPSBuZXcgU2ltcGxleE5vaXNlKHNlZWQpO1xyXG4gICAgbGV0IGdlb21ldHJ5ID0gbmV3IFBsYW5lQnVmZmVyR2VvbWV0cnkoNTAwLCA1MDAsIDEwMCwgMTAwKTtcclxuICAgIGxldCBjb2xvdXJzID0gW107XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25BdHRyaWJ1dGUgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtFZGl0IHRoZSBHZW9tdHJ5IEFjY29yZGluZ2x5XS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5jb3VudDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIC8vIEdldCBEYXRhIHBvc2l0aW9uXHJcbiAgICAgICAgY29uc3QgdmVydGV4ID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICB2ZXJ0ZXguZnJvbUJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbkF0dHJpYnV0ZSwgaSk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIEhlaWdodCBmcm9tIFBlcmxpbiBOb2lzZSBHZW5lcmF0b3JcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gc2ltcGxleC5ub2lzZTJEKHZlcnRleC54IC8gMTI4LCB2ZXJ0ZXgueSAvIDEyOCkgKiAzMDtcclxuICAgICAgICAvLyBTZXQgdGhlIGhlaWdodCBhY2NvcmRpbmdseVxyXG4gICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlbaSAqIDMgKyAyXSA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIFZlcnRpY2UgY29sb3VycyBhY2NvcmRpbmx5XHJcbiAgICAgICAgaWYgKGhlaWdodCA+IDIzKSB7XHJcbiAgICAgICAgICAgIGNvbG91cnMucHVzaCgxLCAxLCAxKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA+IDUpIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTYsIDAuNTQsIDAuNDgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0IDwgMikge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMC41MDEsIDAuNzcyLCAwLjg3KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMC41NiwgMC42OCwgMC4xNjYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtDcmVhdGUgTWF0ZXJpYWxdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgdmFyIG1hdGVyaWFsID0gbmV3IE1lc2hQaG9uZ01hdGVyaWFsKHtcclxuICAgICAgICB2ZXJ0ZXhDb2xvcnM6IGNvbG91cnMsXHJcbiAgICAgICAgcmVmbGVjdGl2aXR5OiAwLFxyXG4gICAgICAgIHJvdWdobmVzczogMSxcclxuICAgICAgICBmbGF0U2hhZGluZzogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0NyZWF0ZSBNZXNoXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIHZhciBwbGFuZTIgPSBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG4gICAgcGxhbmUyLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xyXG4gICAgcGxhbmUyLmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgcGxhbmUyLnBvc2l0aW9uLnkgPSAtMztcclxuICAgIHBsYW5lMi5yb3RhdGVYKE1hdGguUEkgLyAyICsgTWF0aC5QSSk7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bRWRpdCBjb2xvdXIgYXR0cmlidXRlXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcclxuICAgICAgICBcImNvbG9yXCIsXHJcbiAgICAgICAgbmV3IEJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbG91cnMpLCAzKVxyXG4gICAgKTtcclxuICAgIC8vZ2VvbWV0cnkuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtBZGQgdG8gQmFzZSBTY2VuZV0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBjdXJyZW50VGVycmFpbiA9IHBsYW5lMjtcclxuICAgIHBsYW5lMi5uYW1lID0gXCJNQUlOX1RFUlJBSU5cIjtcclxuICAgIFNjZW5lVG9HZXQuYWRkKHBsYW5lMik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRlcnJhaW5DaHVuayhzZWVkLCBQb3NpdGlvbiwgZ2FpbiwgZGl2aXNvcikge1xyXG4gICAgLy8tLS0tLS0tLS0tLS1bTUFJTiBGVU5DVElPTiBWQVJJQUJMRVNdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgY29uc3Qgc2ltcGxleCA9IG5ldyBTaW1wbGV4Tm9pc2Uoc2VlZCk7XHJcbiAgICBsZXQgZ2VvbWV0cnkgPSBuZXcgUGxhbmVCdWZmZXJHZW9tZXRyeSg1MDAsIDUwMCwgMzAsIDMwKTtcclxuICAgIGxldCBjb2xvdXJzID0gW107XHJcbiAgICBjb25zdCBmYm0gPSBuZXcgRkJNKHtcclxuICAgICAgICBzZWVkOiBzZWVkLFxyXG4gICAgICAgIHNjYWxlOiAwLjAwNyxcclxuICAgICAgICBvY3RhdmVzOiA2LFxyXG4gICAgICAgIHBlcnNpc3RhbmNlOiAwLjUsXHJcbiAgICAgICAgbGFjdW5hcml0eTogMixcclxuICAgICAgICByZWRpc3RyaWJ1dGlvbjogMixcclxuICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25BdHRyaWJ1dGUgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKTtcclxuICAgIC8vLS0tLS0tLS0tLS0tW0VkaXQgdGhlIEdlb210cnkgQWNjb3JkaW5nbHldLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmNvdW50OyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgLy8gR2V0IERhdGEgcG9zaXRpb25cclxuICAgICAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIHZlcnRleC5mcm9tQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uQXR0cmlidXRlLCBpKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgSGVpZ2h0IGZyb20gUGVybGluIE5vaXNlIEdlbmVyYXRvclxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBoZWlnaHQgPSBmYm0uZ2V0MihuZXcgVmVjdG9yMigodmVydGV4LngrKFBvc2l0aW9uLngpKSpkaXZpc29yLCAodmVydGV4LnktKFBvc2l0aW9uLnkpKSpkaXZpc29yKSkgKmdhaW4gKiA0XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2V0IHRoZSBoZWlnaHQgYWNjb3JkaW5nbHlcclxuICAgICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5W2kgKiAzICsgMl0gPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBWZXJ0aWNlIGNvbG91cnMgYWNjb3JkaW5seVxyXG4gICAgICAgIGlmIChoZWlnaHQgPiAxMDApIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDEsIDEsIDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0ID4gNTApIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTYsIDAuNTQsIDAuNDgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0IDwgMikge1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0U2Vjb25kYXJ5ID0gc2ltcGxleC5ub2lzZTJEKCh2ZXJ0ZXgueCsoUG9zaXRpb24ueCkpLzEwLCAodmVydGV4LnkrKFBvc2l0aW9uLnkpKS8xMCkgKiAwLjc1XHJcbiAgICAgICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlbaSAqIDMgKyAyXSA9IGhlaWdodFNlY29uZGFyeTtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAscmFuZG9tSW50RnJvbUludGVydmFsKDQwMCwgNTAwKS8xMDAwLHJhbmRvbUludEZyb21JbnRlcnZhbCg3MDAsIDgwMCkvMTAwMClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMC41NiwgMC42OCwgMC4xNjYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vLS0tLS0tLS0tLS0tW0NyZWF0ZSBNYXRlcmlhbF0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICB2YXIgbWF0ZXJpYWwgPSBuZXcgTWVzaFBob25nTWF0ZXJpYWwoe1xyXG4gICAgICAgIHZlcnRleENvbG9yczogY29sb3VycyxcclxuICAgICAgICByZWZsZWN0aXZpdHk6IDAsXHJcbiAgICAgICAgZmxhdFNoYWRpbmc6IHRydWUsXHJcbiAgICAgICAgYmxlbmRpbmc6ZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0NyZWF0ZSBNZXNoXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIHZhciBwbGFuZTIgPSBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG4gICAgcGxhbmUyLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xyXG4gICAgcGxhbmUyLmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgcGxhbmUyLnBvc2l0aW9uLnNldChQb3NpdGlvbi54LCAtMywgUG9zaXRpb24ueSk7XHJcbiAgICBwbGFuZTIucm90YXRlWChNYXRoLlBJIC8gMiArIE1hdGguUEkpO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0VkaXQgY29sb3VyIGF0dHJpYnV0ZV0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgXCJjb2xvclwiLFxyXG4gICAgICAgIG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2xvdXJzKSwgMylcclxuICAgICk7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bQWRkIHRvIEJhc2UgU2NlbmVdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgY3VycmVudFRlcnJhaW4gPSBwbGFuZTI7XHJcbiAgICBwbGFuZTIubmFtZSA9IGBUZXJyYWluX0NodW5rXyR7UG9zaXRpb24ueH06JHtQb3NpdGlvbi55fWA7XHJcbiAgICByZXR1cm4gcGxhbmUyO1xyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIsIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgcm91bmRudW0gfSBmcm9tIFwiLi4vLi4vQWxnb3JpdGhtcy9NYXRoVXRpbHNcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVUZXJyYWluQ2h1bmsgfSBmcm9tIFwiLi4vUHJvY2VkdWxlVGVycmFpblwiO1xyXG5pbXBvcnQgeyBHZW5lcmF0ZVRyZWVzIH0gZnJvbSBcIi4uL3N0YXRpY0Fzc2V0cy90cmVlQnVpbGRlclwiO1xyXG5pbXBvcnQgeyBjaGVja0Jpb21lTG9jYXRpb24gfSBmcm9tIFwiLi91dGlscy9HZW5lcmF0ZUJpb21lc01hcC50c1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllcihzZWVkLCBjYW1lcmEsIHNjZW5lKSB7XHJcbiAgICBsZXQgbG9hZGVkQ2h1bmtzID0ge307XHJcbiAgICBsZXQgY2h1bmtzSW5NZW0gPSB7fTtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBsZXQgdmVjdG9yID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICBjYW1lcmEuZ2V0V29ybGRQb3NpdGlvbih2ZWN0b3IpO1xyXG4gICAgICAgIGxldCB5b3VyQ2h1bmsgPSBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgcm91bmRudW0odmVjdG9yLngsIDUwMCksXHJcbiAgICAgICAgICAgIHJvdW5kbnVtKHZlY3Rvci56LCA1MDApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IGNodW5reVRoaW5nID0gKENodW5rWW91ckluKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChDaHVua1lvdXJJbi54ID09PSAtMCkge1xyXG4gICAgICAgICAgICAgICAgQ2h1bmtZb3VySW4ueCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKENodW5rWW91ckluLnkgPT09IC0wKSB7XHJcbiAgICAgICAgICAgICAgICBDaHVua1lvdXJJbi55ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBsb2FkZWRDaHVua3NbYCR7Q2h1bmtZb3VySW4ueH06JHtDaHVua1lvdXJJbi55fWBdICE9PVxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgbG9hZGVkQ2h1bmtzW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSA9PT0gdHJ1ZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIC8vIEV4aXN0aW5nIHRlcnJhaW4sIGxlZnQgaGVhciBmb3IgYSBmdXR1cmUgQVBJXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBDaHVua1xyXG5cclxuICAgICAgICAgICAgICAgIGxvYWRlZENodW5rc1tgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNodW5rID0gZ2VuZXJhdGVUZXJyYWluQ2h1bmsoc2VlZCwgQ2h1bmtZb3VySW4sIDEyMCwgMC4xKTtcclxuICAgICAgICAgICAgICAgIC8vR2VuZXJhdGVUcmVlcygzMDAwLCBzY2VuZSwgbmV3IFZlY3RvcjMoQ2h1bmtZb3VySW4ueC0yNTAsIDI1MCxDaHVua1lvdXJJbi55LTI1MCksIG5ldyBWZWN0b3IzKENodW5rWW91ckluLngrMjUwLDI1MCxDaHVua1lvdXJJbi55KzI1MCksIGNodW5rKVxyXG4gICAgICAgICAgICAgICAgY2h1bmtzSW5NZW1bYCR7Q2h1bmtZb3VySW4ueH06JHtDaHVua1lvdXJJbi55fWBdID0gY2h1bms7XHJcbiAgICAgICAgICAgICAgICBzY2VuZS5hZGQoY2h1bmspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2h1bmt5VGhpbmcoeW91ckNodW5rKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnkpKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnkrNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCwgeW91ckNodW5rLnkrNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueC01MDAsIHlvdXJDaHVuay55KzUwMCkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueSkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueS01MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54LCB5b3VyQ2h1bmsueS01MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnktNTAwKSlcclxuICAgIH0sIDEwMDApO1xyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgTXVsdGlwbHlWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL0FsZ29yaXRobXMvVmVjdG9yTWF0aHMudHNcIjtcclxuaW1wb3J0ICogYXMgU2ltcGxleE5vaXNlIGZyb20gJ3NpbXBsZXgtbm9pc2UnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQmlvbWVMb2NhdGlvbihwb3NpdGlvbjpWZWN0b3IyLCBzZWVkOm51bWJlciwgZ2FpbjpudW1iZXIgPSAxLCBtaW5IZWlnaHQ6bnVtYmVyID0gMCk6U3RyaW5ne1xyXG4gICAgLy8gQ3JlYXRlIG5ldyBub2lzZSBtYXAgXFxcXFxyXG4gICAgbGV0IG5vaXNlTWFwID0gbmV3IFNpbXBsZXhOb2lzZShgJHtzZWVkfWApXHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIFggdmFsdWUgXFxcXFxyXG4gICAgbGV0IHZlY3RvciA9IE11bHRpcGx5VmVjdG9yMihwb3NpdGlvbiwgMC4wNSlcclxuICAgIGxldCBYVmFsdWUgPSBub2lzZU1hcC5ub2lzZTJEKHZlY3Rvci54LCB2ZWN0b3IueSkgKyBtaW5IZWlnaHRcclxuICAgIGNvbnNvbGUubG9nKFhWYWx1ZSlcclxuXHJcbiAgICByZXR1cm4gWFZhbHVlID4gMCA/IFwiUGxhaW5zXCIgOiBcIlNlYVwiXHJcblxyXG59XHJcbiIsIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxyXG5cclxuaW1wb3J0IHtcclxuICAgIERvdWJsZVNpZGUsXHJcbiAgICBHcm91cCxcclxuICAgIE1lc2gsXHJcbiAgICBNZXNoUGhvbmdNYXRlcmlhbCxcclxuICAgIFNwaGVyZUdlb21ldHJ5LFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuLy8gUmFuZG9tbHkgZGVscGxhY2UgY2xvdWQgdmVydGljaWVzXHJcbmNvbnN0IG1hcCA9ICh2YWwsIHNtaW4sIHNtYXgsIGVtaW4sIGVtYXgpID0+XHJcbiAgICAoKGVtYXggLSBlbWluKSAqICh2YWwgLSBzbWluKSkgLyAoc21heCAtIHNtaW4pICsgZW1pbjtcclxuY29uc3Qgaml0dGVyID0gKGdlb21ldHJ5LCBwZXIpID0+IHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5jb3VudDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlbaSAqIDNdICs9IG1hcChcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgLXBlcixcclxuICAgICAgICAgICAgcGVyXHJcbiAgICAgICAgKTtcclxuICAgICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5W2kgKiAzICsgMV0gKz0gbWFwKFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAtcGVyLFxyXG4gICAgICAgICAgICBwZXJcclxuICAgICAgICApO1xyXG4gICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlbaSAqIDMgKyAyXSArPSBtYXAoXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIC1wZXIsXHJcbiAgICAgICAgICAgIHBlclxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgR2VuZXJhdGVDbG91ZHMge1xyXG4gICAgY29uc3RydWN0b3IocG9zLCBzY2VuZSwgc3BlZWQsIHNjYWxlKSB7XHJcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdHVmdDEgPSBuZXcgU3BoZXJlR2VvbWV0cnkoMS41ICogc2NhbGUsIDcsIDExKTtcclxuICAgICAgICB0dWZ0MS50cmFuc2xhdGUoLTIgKiBzY2FsZSwgMCwgMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHR1ZnQzID0gbmV3IFNwaGVyZUdlb21ldHJ5KDEuNSAqIHNjYWxlLCA3LCAxMSk7XHJcbiAgICAgICAgdHVmdDMudHJhbnNsYXRlKDIgKiBzY2FsZSwgMCwgMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHR1ZnQyID0gbmV3IFNwaGVyZUdlb21ldHJ5KDIuMCAqIHNjYWxlLCA3LCAxMSk7XHJcbiAgICAgICAgdHVmdDIudHJhbnNsYXRlKDAsIDAsIDApO1xyXG5cclxuICAgICAgICBqaXR0ZXIodHVmdDEsIDAuMik7XHJcbiAgICAgICAgaml0dGVyKHR1ZnQyLCAwLjEpO1xyXG4gICAgICAgIGppdHRlcih0dWZ0MywgMC4xKTtcclxuXHJcbiAgICAgICAgdHVmdDEuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0ID0gbmV3IE1lc2hQaG9uZ01hdGVyaWFsKHtcclxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgZmxhdFNoYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIHNpZGU6IERvdWJsZVNpZGUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBjbG91ZCA9IG5ldyBNZXNoKHR1ZnQxLCBtYXQpO1xyXG4gICAgICAgIGxldCBjbG91ZDEgPSBuZXcgTWVzaCh0dWZ0MiwgbWF0KTtcclxuICAgICAgICBsZXQgY2xvdWQyID0gbmV3IE1lc2godHVmdDMsIG1hdCk7XHJcblxyXG4gICAgICAgIGdyb3VwLmFkZChjbG91ZCk7XHJcbiAgICAgICAgZ3JvdXAuYWRkKGNsb3VkMSk7XHJcbiAgICAgICAgZ3JvdXAuYWRkKGNsb3VkMik7XHJcblxyXG4gICAgICAgIHNjZW5lLmFkZChncm91cCk7XHJcbiAgICAgICAgZ3JvdXAuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgZ3JvdXAucmVjZWl2ZVNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgZ3JvdXAucG9zaXRpb24ueCA9IHBvcy54O1xyXG4gICAgICAgIGdyb3VwLnBvc2l0aW9uLnkgPSBwb3MueTtcclxuICAgICAgICBncm91cC5wb3NpdGlvbi56ID0gcG9zLno7XHJcblxyXG4gICAgICAgIHRoaXMuZ3Jhc3MgPSBncm91cDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGxldCBnZW9zID0gdGhpcy5ncmFzcztcclxuICAgICAgICBnZW9zLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICBpZiAoZ2Vvcy5wb3NpdGlvbi54ID4gNDAwKSB7XHJcbiAgICAgICAgICAgIGdlb3MucG9zaXRpb24ueCA9IHRoaXMucG9zLng7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxyXG5cclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XHJcbmxldCBbdywgYSwgcywgZCwgdXAsIGRvd24sIGUsIHEsIHNoaWZ0XSA9IFtcclxuICAgIGZhbHNlLFxyXG4gICAgZmFsc2UsXHJcbiAgICBmYWxzZSxcclxuICAgIGZhbHNlLFxyXG4gICAgZmFsc2UsXHJcbiAgICBmYWxzZSxcclxuICAgIGZhbHNlLFxyXG4gICAgZmFsc2UsXHJcbiAgICAxLFxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyb2xIYW5kbGVySW5pdChkb2N1bWVudCwgY2hpbGQyKSB7XHJcbiAgICAvKmVzbGludCBjb21wbGV4aXR5OiBbXCJlcnJvclwiLCAyMF0qL1xyXG4gICAgZnVuY3Rpb24gb25Eb2N1bWVudEtleURvd24oZXZlbnQsIHZhbCkge1xyXG4gICAgICAgIGlmIChjaGlsZDIgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIga2V5Q29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSA4Nykge1xyXG4gICAgICAgICAgICB3ID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gODMpIHtcclxuICAgICAgICAgICAgcyA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDY1KSB7XHJcbiAgICAgICAgICAgIGEgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSA2OCkge1xyXG4gICAgICAgICAgICBkID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gMzgpIHtcclxuICAgICAgICAgICAgdXAgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSA0MCkge1xyXG4gICAgICAgICAgICBkb3duID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gNjkpIHtcclxuICAgICAgICAgICAgZSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDgxKSB7XHJcbiAgICAgICAgICAgIHEgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSAxNikge1xyXG4gICAgICAgICAgICBzaGlmdCA9IHZhbCA/IDAuNSA6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJrZXlkb3duXCIsXHJcbiAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgb25Eb2N1bWVudEtleURvd24oZSwgdHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWxzZVxyXG4gICAgKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJrZXl1cFwiLFxyXG4gICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG9uRG9jdW1lbnRLZXlEb3duKGUsIGZhbHNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICApO1xyXG59XHJcblxyXG4vKmVzbGludCBjb21wbGV4aXR5OiBbXCJlcnJvclwiLCAyMF0qL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udHJvbEhhbmRsZXJVcGRhdGUoQ2FtZXJhKSB7XHJcbiAgICBpZiAodykge1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIENhbWVyYS5nZXRXb3JsZERpcmVjdGlvbihkaXJlY3Rpb24pO1xyXG4gICAgICAgIENhbWVyYS5wb3NpdGlvbi5hZGQoZGlyZWN0aW9uLm11bHRpcGx5U2NhbGFyKHNoaWZ0ID09PSAxID8gMSA6IDAuMjUpKTtcclxuICAgIH1cclxuICAgIGlmIChzKSB7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgQ2FtZXJhLmdldFdvcmxkRGlyZWN0aW9uKGRpcmVjdGlvbik7XHJcbiAgICAgICAgQ2FtZXJhLnBvc2l0aW9uLmFkZChcclxuICAgICAgICAgICAgZGlyZWN0aW9uLm11bHRpcGx5U2NhbGFyKC0oc2hpZnQgPT09IDEgPyAxIDogMC4yNSkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChhKSB7XHJcbiAgICAgICAgQ2FtZXJhLnJvdGF0ZVkoMC4wNCAqIHNoaWZ0KTtcclxuICAgIH1cclxuICAgIGlmIChkKSB7XHJcbiAgICAgICAgQ2FtZXJhLnJvdGF0ZVkoLTAuMDQgKiBzaGlmdCk7XHJcbiAgICB9XHJcbiAgICBpZiAodXApIHtcclxuICAgICAgICBDYW1lcmEucm90YXRlWCgwLjA0ICogc2hpZnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRvd24pIHtcclxuICAgICAgICBDYW1lcmEucm90YXRlWCgtMC4wNCAqIHNoaWZ0KTtcclxuICAgIH1cclxuICAgIGlmIChxKSB7XHJcbiAgICAgICAgQ2FtZXJhLnJvdGF0ZVooMC4wMiAqIHNoaWZ0KTtcclxuICAgIH1cclxuICAgIGlmIChlKSB7XHJcbiAgICAgICAgQ2FtZXJhLnJvdGF0ZVooLTAuMDIgKiBzaGlmdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5sZXQgbGlzdGVuaW5nSG9va3MgPSB7fTtcclxuZXhwb3J0IGZ1bmN0aW9uIENvbnRyb2xFdmVudExpc3RlbmVyKG9jdW1lbnQsIGNoaWxkMikge1xyXG4gICAgbGV0IFt3S2V5LCBhS2V5LCBzS2V5LCBkS2V5LCB1cEtleSwgZG93bktleSwgZUtleSwgcUtleSwgc2hpZnRLZXksIHpLZXksIHhLZXldID0gW1xyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgXTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkRvY3VtZW50S2V5RG93bkV2ZW50KGV2ZW50LCB2YWwpIHtcclxuICAgICAgICBpZiAoY2hpbGQyID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGtleUNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gODcpIHtcclxuICAgICAgICAgICAgd0tleSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDgzKSB7XHJcbiAgICAgICAgICAgIHNLZXkgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSA2NSkge1xyXG4gICAgICAgICAgICBhS2V5ID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gNjgpIHtcclxuICAgICAgICAgICAgZEtleSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDM4KSB7XHJcbiAgICAgICAgICAgIHVwS2V5ID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gNDApIHtcclxuICAgICAgICAgICAgZG93bktleSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDY5KSB7XHJcbiAgICAgICAgICAgIGVLZXkgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSA4MSkge1xyXG4gICAgICAgICAgICBxS2V5ID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gODgpIHtcclxuICAgICAgICAgICAgektleSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDkwKSB7XHJcbiAgICAgICAgICAgIHhLZXkgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSAxNikge1xyXG4gICAgICAgICAgICBzaGlmdEtleSA9IHZhbCA/IDAuNSA6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGxpc3RlbmluZ0hvb2tzKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSh7d0tleSwgYUtleSwgc0tleSwgZEtleSwgdXBLZXksIGRvd25LZXksIGVLZXksIHFLZXksIHNoaWZ0S2V5LCB6S2V5LCB4S2V5fSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcImtleWRvd25cIixcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBvbkRvY3VtZW50S2V5RG93bkV2ZW50KGUsIHRydWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFsc2VcclxuICAgICk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwia2V5dXBcIixcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBvbkRvY3VtZW50S2V5RG93bkV2ZW50KGUsIGZhbHNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuVG9Db25yb2xzKGFyZykge1xyXG4gICAgbGV0IHV1aWQgPSB2NCgpO1xyXG4gICAgbGlzdGVuaW5nSG9va3NbdXVpZF0gPSBhcmc7XHJcbiAgICByZXR1cm4gdXVpZDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQ2xlYW5VcExpc3RlbmVyKHV1aWQpIHtcclxuICAgIGRlbGV0ZSBsaXN0ZW5pbmdIb29rc1t1dWlkXTtcclxufVxyXG4iLCIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcclxuXHJcbmltcG9ydCB7XHJcbiAgQm94R2VvbWV0cnksXHJcbiAgQ29sb3IsXHJcbiAgQ3lsaW5kZXJHZW9tZXRyeSxcclxuICBHcm91cCxcclxuICBNZXNoLFxyXG4gIE1lc2hMYW1iZXJ0TWF0ZXJpYWwsXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IGxpc3RlblRvRXZlbnQgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvQ29ubmVjdEFQSVwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZUxhYmVsIH0gZnJvbSBcIi4uL25hbWV0YWdcIjtcclxubGV0IHBsYXllcnMgPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYWtlTmV3Q3ViZVBsYXllcihcclxuICBjb2xvciA9IFwicmdiKDAsMCwwKVwiLFxyXG4gIG5hbWUgPSBcInVua293blwiLFxyXG4gIFNjZW5lVG9HZXRcclxuKSB7XHJcbiAgY29uc3QgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcclxuICBjb25zdCBnZW9tZXRyeSA9IG5ldyBCb3hHZW9tZXRyeSgxLCAxLCAxKTtcclxuICBjb25zdCBtYXRlcmlhbCA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtcclxuICAgIGNvbG9yOiBuZXcgQ29sb3IoY29sb3IpLFxyXG4gICAgZW1pc3NpdmU6IG5ldyBDb2xvcihjb2xvciksXHJcbiAgfSk7XHJcbiAgY29uc3QgY3ViZSA9IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgZ3JvdXAuYWRkKGN1YmUpO1xyXG4gIGNvbnN0IGN5Y2xpbmRlciA9IG5ldyBDeWxpbmRlckdlb21ldHJ5KDAuMywgMC4zLCAwLjYsIDMwKTtcclxuICBjb25zdCBtYXRlcmlhbDIgPSBuZXcgTWVzaExhbWJlcnRNYXRlcmlhbCh7IGNvbG9yOiBcIiMwMDAwMDBcIiB9KTtcclxuICBjb25zdCBjeWxpbmRlckJ1aWxkID0gbmV3IE1lc2goY3ljbGluZGVyLCBtYXRlcmlhbDIpO1xyXG4gIGN5bGluZGVyQnVpbGQucm90YXRlWChNYXRoLlBJIC8gMiArIE1hdGguUEkpO1xyXG4gIGN5bGluZGVyQnVpbGQucG9zaXRpb24uc2V0KDAsIDAsIC0wLjYpO1xyXG4gIGdyb3VwLmFkZChjeWxpbmRlckJ1aWxkKTtcclxuXHJcbiAgZ2VuZXJhdGVMYWJlbChuYW1lLCBncm91cCk7XHJcbiAgU2NlbmVUb0dldC5hZGQoZ3JvdXApO1xyXG4gIGdyb3VwLm5hbWUgPSBuYW1lO1xyXG4gIHJldHVybiBncm91cDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEluaXRNYWluR2FtZUhhbmRsZXIoU2NlbmVUb0dldCkge1xyXG4gIGxpc3RlblRvRXZlbnQoXCJOZXdQbGF5ZXJcIiwgKGlkLCBkYXRhKSA9PiB7XHJcbiAgICAvL2xldCBjdWJlID0gbWFrZUN1YmUoZGF0YS5jb2xvciwgZGF0YS5uYW1lLCBTY2VuZVRvR2V0KTtcclxuICAgIC8vYWRkdG9HYW1lRmVlZChkYXRhPy5uYW1lLCBcIkpvaW5lZCB0aGUgZ2FtZSFcIik7XHJcblxyXG4gICAgLy9wbGF5ZXJzW2Ake2lkfWBdID0gY3ViZTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWcoYmFzZVdpZHRoLCBzaXplLCBuYW1lKSB7XHJcbiAgICBjb25zdCBib3JkZXJTaXplID0gMjtcclxuICAgIGNvbnN0IGN0eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIGNvbnN0IGZvbnQgPSBgJHtzaXplfXB4IFZlcmRhbmFgO1xyXG4gICAgY3R4LmZvbnQgPSBmb250O1xyXG4gICAgLy8gbWVhc3VyZSBob3cgbG9uZyB0aGUgbmFtZSB3aWxsIGJlXHJcbiAgICBjb25zdCB0ZXh0V2lkdGggPSBjdHgubWVhc3VyZVRleHQobmFtZSkud2lkdGg7XHJcblxyXG4gICAgY29uc3QgZG91YmxlQm9yZGVyU2l6ZSA9IGJvcmRlclNpemUgKiAyO1xyXG4gICAgY29uc3Qgd2lkdGggPSBiYXNlV2lkdGggKyBkb3VibGVCb3JkZXJTaXplO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gc2l6ZSArIGRvdWJsZUJvcmRlclNpemU7XHJcbiAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAvLyBuZWVkIHRvIHNldCBmb250IGFnYWluIGFmdGVyIHJlc2l6aW5nIGNhbnZhc1xyXG4gICAgY3R4LmZvbnQgPSBmb250O1xyXG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuXHJcbiAgICAvL2N0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XHJcbiAgICAvL2N0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAvLyBzY2FsZSB0byBmaXQgYnV0IGRvbid0IHN0cmV0Y2hcclxuICAgIGNvbnN0IHNjYWxlRmFjdG9yID0gTWF0aC5taW4oMSwgYmFzZVdpZHRoIC8gdGV4dFdpZHRoKTtcclxuICAgIGN0eC50cmFuc2xhdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcclxuICAgIGN0eC5zY2FsZShzY2FsZUZhY3RvciwgMSk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KG5hbWUsIDAsIDApO1xyXG5cclxuICAgIHJldHVybiBjdHguY2FudmFzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVMYWJlbChuYW1lLCBncm91cCkge1xyXG4gICAgY29uc3QgY2FudmFzID0gY3JlYXRlVGFnKDMwMCwgMzIsIG5hbWUpO1xyXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGNhbnZhcyk7XHJcbiAgICAvLyBiZWNhdXNlIG91ciBjYW52YXMgaXMgbGlrZWx5IG5vdCBhIHBvd2VyIG9mIDJcclxuICAgIC8vIGluIGJvdGggZGltZW5zaW9ucyBzZXQgdGhlIGZpbHRlcmluZyBhcHByb3ByaWF0ZWx5LlxyXG4gICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XHJcbiAgICB0ZXh0dXJlLndyYXBTID0gVEhSRUUuQ2xhbXBUb0VkZ2VXcmFwcGluZztcclxuICAgIHRleHR1cmUud3JhcFQgPSBUSFJFRS5DbGFtcFRvRWRnZVdyYXBwaW5nO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsTWF0ZXJpYWwgPSBuZXcgVEhSRUUuU3ByaXRlTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogdGV4dHVyZSxcclxuICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgLy8gaWYgdW5pdHMgYXJlIG1ldGVycyB0aGVuIDAuMDEgaGVyZSBtYWtlcyBzaXplXHJcbiAgICAvLyBvZiB0aGUgbGFiZWwgaW50byBjZW50aW1ldGVycy5cclxuICAgIGNvbnN0IGxhYmVsQmFzZVNjYWxlID0gMC4wMTtcclxuXHJcbiAgICBjb25zdCBsYWJlbCA9IG5ldyBUSFJFRS5TcHJpdGUobGFiZWxNYXRlcmlhbCk7XHJcbiAgICBncm91cC5hZGQobGFiZWwpO1xyXG4gICAgbGFiZWwucG9zaXRpb24ueSA9IDE7XHJcblxyXG4gICAgbGFiZWwuc2NhbGUueCA9IGNhbnZhcy53aWR0aCAqIGxhYmVsQmFzZVNjYWxlO1xyXG4gICAgbGFiZWwuc2NhbGUueSA9IGNhbnZhcy5oZWlnaHQgKiBsYWJlbEJhc2VTY2FsZTtcclxuICAgIHJldHVybiBncm91cDtcclxufVxyXG4iLCJpbXBvcnQgeyBHcm91cCwgTWVzaFBob25nTWF0ZXJpYWwsIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgcmFkaWFudHMgfSBmcm9tIFwiLi4vLi4vQWxnb3JpdGhtcy9kZWdUb1JhZFwiO1xyXG5pbXBvcnQgeyBhZGRHTEJGaWxlIH0gZnJvbSBcIi4uLy4uL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9HTEJMb2FkZXJcIjtcclxuaW1wb3J0IHsgZGVidWdDdWJlIH0gZnJvbSBcIi4uLy4uL0NvcmUtQVBJL2dlbW90cnlNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVBvaW50TGlnaHQgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvTGlnaHRpbmdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGFkZFRvUmVuZGVyU2VxdWVuY2UgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvUmVuZGVyaW5nSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBsaXN0ZW5Ub0NvbnJvbHMgfSBmcm9tIFwiLi4vY29udHJvbHNcIjtcclxuaW1wb3J0IHsgZ2V0RGF5U3RhdGUsIHJlbW92ZUZyb21EYXlUaW1lSG9vayB9IGZyb20gXCIuLi9EYXlOaWdodEN5Y2xlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFrZVBsYW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKFNjZW5lVG9HZXQsIHNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5TY2VuZVRvR2V0ID0gU2NlbmVUb0dldDtcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IG5ldyBHcm91cCgpO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuZWxldmF0b3JQaXRjaCA9IDA7XHJcbiAgICAgICAgdGhpcy5haXJlbG9uZVBpdGNoID0gMDtcclxuICAgICAgICB0aGlzLnJ1ZGRlclBpdGNoID0gMDtcclxuICAgICAgICB0aGlzLmNoZWNrZXIgPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2FkRmlsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5wbGFuZSA9IGF3YWl0IGFkZEdMQkZpbGUoXHJcbiAgICAgICAgICAgIFwiL0FpcmNyYWZ0L0Jhc2ljUGxhbmUvUGxhbmUuZ2xiXCIsXHJcbiAgICAgICAgICAgIHRoaXMuU2NlbmVUb0dldFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IGF3YWl0IGFkZEdMQkZpbGUoXHJcbiAgICAgICAgICAgIFwiL0FpcmNyYWZ0L0Jhc2ljUGxhbmUvQmxhZGVzLmdsYlwiLFxyXG4gICAgICAgICAgICB0aGlzLlNjZW5lVG9HZXRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubGVmdEFpcmVsb25lID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICAgICAgXCIvQWlyY3JhZnQvQmFzaWNQbGFuZS9MZWZ0QWlyZWxvbmUuZ2xiXCIsXHJcbiAgICAgICAgICAgIHRoaXMuU2NlbmVUb0dldFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5yaWdodEFpcmVsb25lID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICAgICAgXCIvQWlyY3JhZnQvQmFzaWNQbGFuZS9SaWdodEFpcmVsb25lLmdsYlwiLFxyXG4gICAgICAgICAgICB0aGlzLlNjZW5lVG9HZXRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubGVmdENvbnRyb2xTdXJmYWNlID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICAgICAgXCIvQWlyY3JhZnQvQmFzaWNQbGFuZS9MZWZ0V2luZ0NvbnRyb2xzU3VyZmFjZS5nbGJcIixcclxuICAgICAgICAgICAgdGhpcy5TY2VuZVRvR2V0XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnJpZ2h0Q29udHJvbFN1cmZhY2UgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgICAgICBcIi9BaXJjcmFmdC9CYXNpY1BsYW5lL1JpZ2h0V2luZ0NvbnRyb2xzU3VyZmFjZS5nbGJcIixcclxuICAgICAgICAgICAgdGhpcy5TY2VuZVRvR2V0XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnJ1ZGRlciA9IGF3YWl0IGFkZEdMQkZpbGUoXHJcbiAgICAgICAgICAgIFwiL0FpcmNyYWZ0L0Jhc2ljUGxhbmUvUnVkZGVyLmdsYlwiLFxyXG4gICAgICAgICAgICB0aGlzLlNjZW5lVG9HZXRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIENyZWF0ZUdyb3VwQW5kUG9zKCkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMucGxhbmUuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMucHJvcHMuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMubGVmdEFpcmVsb25lLnNjZW5lKTtcclxuICAgICAgICB0aGlzLmdyb3VwLmFkZCh0aGlzLnJpZ2h0QWlyZWxvbmUuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMucmlnaHRDb250cm9sU3VyZmFjZS5zY2VuZSk7XHJcbiAgICAgICAgdGhpcy5ncm91cC5hZGQodGhpcy5sZWZ0Q29udHJvbFN1cmZhY2Uuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMucnVkZGVyLnNjZW5lKTtcclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0QWlyZWxvbmUuc2NlbmUucG9zaXRpb24uc2V0KDEyLjkzNiwgMTUuOTk0LCAtNTkuMjY0KTtcclxuICAgICAgICB0aGlzLnJpZ2h0QWlyZWxvbmUuc2NlbmUucG9zaXRpb24uc2V0KC0xMi40OTUsIDE1Ljg4OCwgLTU5LjI5NCk7XHJcblxyXG4gICAgICAgIHRoaXMubGVmdENvbnRyb2xTdXJmYWNlLnNjZW5lLnBvc2l0aW9uLnNldCg0Ni4yNDMsIDIyLjUzNiwgLTEzLjU0MSk7XHJcbiAgICAgICAgdGhpcy5sZWZ0Q29udHJvbFN1cmZhY2Uuc2NlbmUucm90YXRlWShyYWRpYW50cygtNykpO1xyXG5cclxuICAgICAgICB0aGlzLnJpZ2h0Q29udHJvbFN1cmZhY2Uuc2NlbmUucG9zaXRpb24uc2V0KFxyXG4gICAgICAgICAgICAtNDYuMjcxOCxcclxuICAgICAgICAgICAgMjIuNTQxMSxcclxuICAgICAgICAgICAgLTEzLjU0NDdcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucmlnaHRDb250cm9sU3VyZmFjZS5zY2VuZS5yb3RhdGVZKHJhZGlhbnRzKDYuOCkpO1xyXG4gICAgICAgIHRoaXMucmlnaHRDb250cm9sU3VyZmFjZS5zY2VuZS5yb3RhdGVaKHJhZGlhbnRzKC0zLjUpKTtcclxuICAgICAgICAvL3RoaXMucmlnaHRDb250cm9sU3VyZmFjZS5zY2VuZS5yb3RhdGVYKHJhZGlhbnRzKDE4My41NykpXHJcblxyXG4gICAgICAgIHRoaXMucnVkZGVyLnNjZW5lLnBvc2l0aW9uLnNldCgtMC4wMjIsIDI0LjY3LCAtNjguMTcpO1xyXG4gICAgICAgIHRoaXMucnVkZGVyLnNjZW5lLnJvdGF0ZVgocmFkaWFudHMoLTIyKSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuc2NlbmUucG9zaXRpb24uc2V0KDAsIDE1LCAyMik7XHJcbiAgICAgICAgdGhpcy5TY2VuZVRvR2V0LmFkZCh0aGlzLmdyb3VwKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncm91cC5zY2FsZS5zZXQoMC4wNSwgMC4wNSwgMC4wNSk7XHJcblxyXG4gICAgICAgIGxldCBbcHJvcHMsIGxlZnRBaXJlbG9uZV0gPSBbdGhpcy5wcm9wcy5zY2VuZSwgdGhpcy5sZWZ0QWlyZWxvbmUuc2NlbmVdO1xyXG4gICAgICAgIC8vIEZvciB0ZXN0aW5nIFxcXFxcclxuXHJcbiAgICAgICAgbGV0IGxpZ2h0ID0gY3JlYXRlUG9pbnRMaWdodCgweGZmMDAwMCwgMywgWzYwLCAyMi41LCAtMTBdLCAyLjUpO1xyXG4gICAgICAgIGxldCBsaWdodDIgPSBjcmVhdGVQb2ludExpZ2h0KDB4MDBmZjAwLCAzLCBbLTYwLCAyMi41LCAtMTBdLCAyLjUpO1xyXG4gICAgICAgIGxldCB3aGl0ZUxpZ2h0ID0gY3JlYXRlUG9pbnRMaWdodCgweGZmZmZmZiwgMywgWzAsIDMwLCAtNjBdLCAyLjUpO1xyXG4gICAgICAgIGxldCBkYXkgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5ncm91cC5hZGQobGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cC5hZGQobGlnaHQyKTtcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihnZXREYXlTdGF0ZSgpID09PSBmYWxzZSAmJiBkYXkgPT09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgZGF5ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAuYWRkKGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAuYWRkKGxpZ2h0Mik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGdldERheVN0YXRlKCkgPT09IHRydWUgJiYgZGF5ID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICBkYXkgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnJlbW92ZShsaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnJlbW92ZShsaWdodDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMClcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRFdmVsYXRvclBpdGNoID0gMDtcclxuICAgICAgICBsZXQgYWlyZWxvbmVQaXRjaCA9IDA7XHJcbiAgICAgICAgbGV0IHJ1ZGRlclBpdGNoID0gMDtcclxuICAgICAgICBhZGRUb1JlbmRlclNlcXVlbmNlKFxyXG4gICAgICAgICAgICBcIk1haW5cIixcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLmdldFdvcmxkRGlyZWN0aW9uKGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnBvc2l0aW9uLmFkZChkaXJlY3Rpb24ubXVsdGlwbHlTY2FsYXIodGhpcy5zcGVlZCkpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmdyb3VwLnBvc2l0aW9uLnogKz0gdGhpcy5zcGVlZDtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5yb3RhdGVaKHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRFdmVsYXRvclBpdGNoIDwgdGhpcy5lbGV2YXRvclBpdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0QWlyZWxvbmUuc2NlbmUucm90YXRlWCgtMC4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodEFpcmVsb25lLnNjZW5lLnJvdGF0ZVgoLTAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFdmVsYXRvclBpdGNoICs9IDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZih0aGlzLnNwZWVkIDwgMC40KXJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAucm90YXRlWChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGN1cnJlbnRFdmVsYXRvclBpdGNoIC8gNTApICogdGhpcy5zcGVlZFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRFdmVsYXRvclBpdGNoID4gdGhpcy5lbGV2YXRvclBpdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0QWlyZWxvbmUuc2NlbmUucm90YXRlWCgwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0QWlyZWxvbmUuc2NlbmUucm90YXRlWCgwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RXZlbGF0b3JQaXRjaCAtPSAwLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYodGhpcy5zcGVlZCA8IDAuNClyZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnJvdGF0ZVgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50RXZlbGF0b3JQaXRjaCAvIDUwKSAqIHRoaXMuc3BlZWRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhaXJlbG9uZVBpdGNoIDwgdGhpcy5haXJlbG9uZVBpdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q29udHJvbFN1cmZhY2Uuc2NlbmUucm90YXRlWCgwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q29udHJvbFN1cmZhY2Uuc2NlbmUucm90YXRlWCgtMC4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWlyZWxvbmVQaXRjaCArPSAwLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYodGhpcy5zcGVlZCA8IDAuNClyZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnJvdGF0ZVooKC1haXJlbG9uZVBpdGNoIC8gNTApICogdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFpcmVsb25lUGl0Y2ggPiB0aGlzLmFpcmVsb25lUGl0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRDb250cm9sU3VyZmFjZS5zY2VuZS5yb3RhdGVYKC0wLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q29udHJvbFN1cmZhY2Uuc2NlbmUucm90YXRlWCgwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICBhaXJlbG9uZVBpdGNoIC09IDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZih0aGlzLnNwZWVkIDwgMC40KXJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAucm90YXRlWigoLWFpcmVsb25lUGl0Y2ggLyA1MCkgKiB0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocnVkZGVyUGl0Y2ggPCB0aGlzLnJ1ZGRlclBpdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydWRkZXIuc2NlbmUucm90YXRlWSgtMC4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVkZGVyUGl0Y2ggKz0gMC4wMTtcclxuICAgICAgICAgICAgICAgICAgICAvL2lmKHRoaXMuc3BlZWQgPCAwLjQpcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cC5yb3RhdGVZKChydWRkZXJQaXRjaCAvIDUwKSAqIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChydWRkZXJQaXRjaCA+IHRoaXMucnVkZGVyUGl0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1ZGRlci5zY2VuZS5yb3RhdGVZKDAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1ZGRlclBpdGNoIC09IDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZih0aGlzLnNwZWVkIDwgMC40KXJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAucm90YXRlWSgocnVkZGVyUGl0Y2ggLyA1MCkgKiB0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5ncm91cDtcclxuICAgIH1cclxuICAgIGF0dGFjaENhbWVyYUFuZENvbnRyb2woQ2FtZXJhKSB7XHJcbiAgICAgICAgdGhpcy5VVUlEID0gbGlzdGVuVG9Db25yb2xzKFxyXG4gICAgICAgICAgICAoe1xyXG4gICAgICAgICAgICAgICAgd0tleSxcclxuICAgICAgICAgICAgICAgIGFLZXksXHJcbiAgICAgICAgICAgICAgICBzS2V5LFxyXG4gICAgICAgICAgICAgICAgZEtleSxcclxuICAgICAgICAgICAgICAgIHVwS2V5LFxyXG4gICAgICAgICAgICAgICAgZG93bktleSxcclxuICAgICAgICAgICAgICAgIGVLZXksXHJcbiAgICAgICAgICAgICAgICBxS2V5LFxyXG4gICAgICAgICAgICAgICAgc2hpZnRLZXksXHJcbiAgICAgICAgICAgICAgICB6S2V5LFxyXG4gICAgICAgICAgICAgICAgeEtleSxcclxuICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHpLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZCA8IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCArPSAwLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh4S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLT0gMC4wMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAod0tleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxldmF0b3JQaXRjaCA9IDAuNTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc0tleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxldmF0b3JQaXRjaCA9IC0wLjU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxldmF0b3JQaXRjaCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVkZGVyUGl0Y2ggPSAwLjM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1ZGRlclBpdGNoID0gLTAuMztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydWRkZXJQaXRjaCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpcmVsb25lUGl0Y2ggPSAwLjU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpcmVsb25lUGl0Y2ggPSAtMC41O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpcmVsb25lUGl0Y2ggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmdyb3VwLmFkZChDYW1lcmEpO1xyXG4gICAgICAgIENhbWVyYS5wb3NpdGlvbi5zZXQoMCwgNDAsIC0xMDApO1xyXG4gICAgICAgIENhbWVyYS5yb3RhdGVZKHJhZGlhbnRzKDE4MCkpO1xyXG4gICAgICAgIENhbWVyYS5yb3RhdGVYKHJhZGlhbnRzKC0yMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFuVXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuVVVJRCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIENsZWFuVXBMaXN0ZW5lcih0aGlzLlVVSUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyb3VwLnJlbW92ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrZXIgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUZyb21EYXlUaW1lSG9vayh0aGlzLmNoZWNrZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZUFib3V0UG9pbnQob2JqLCBwb2ludCwgYXhpcywgdGhldGEsIHBvaW50SXNXb3JsZCkge1xyXG4gICAgcG9pbnRJc1dvcmxkID0gcG9pbnRJc1dvcmxkID8gcG9pbnRJc1dvcmxkIDogZmFsc2UgO1xyXG5cclxuICAgIGlmIChwb2ludElzV29ybGQpIHtcclxuICAgICAgICBvYmoucGFyZW50LmxvY2FsVG9Xb3JsZChvYmoucG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIG9iai5wb3NpdGlvbi5zdWIocG9pbnQpO1xyXG4gICAgb2JqLnBvc2l0aW9uLmFwcGx5QXhpc0FuZ2xlKGF4aXMsIHRoZXRhKTtcclxuICAgIG9iai5wb3NpdGlvbi5hZGQocG9pbnQpO1xyXG5cclxuICAgIGlmIChwb2ludElzV29ybGQpIHtcclxuICAgICAgICBvYmoucGFyZW50LndvcmxkVG9Mb2NhbChvYmoucG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIG9iai5yb3RhdGVPbkF4aXMoYXhpcywgdGhldGEpO1xyXG4gICAgcmV0dXJuIHRoZXRhO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tU3RhckZpZWxkKG51bWJlck9mU3RhcnMsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQ0FOVkFTXCIpO1xyXG5cclxuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG5cclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mU3RhcnM7ICsraSkge1xyXG4gICAgICAgIHZhciByYWRpdXMgPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgICAgICB2YXIgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdpZHRoKTtcclxuICAgICAgICB2YXIgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguYXJjKHgsIHksIHJhZGl1cywgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZShjYW52YXMpO1xyXG4gICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICByZXR1cm4gdGV4dHVyZTtcclxufVxyXG4iLCJpbXBvcnQgeyBHcm91cCwgTWVzaCwgTWVzaExhbWJlcnRNYXRlcmlhbCwgUmF5Y2FzdGVyLCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IHJhZGlhbnRzIH0gZnJvbSBcIi4uLy4uL0FsZ29yaXRobXMvZGVnVG9SYWRcIjtcclxuaW1wb3J0IHsgX21lcmdlTWVzaGVzIH0gZnJvbSBcIi4uLy4uL0FsZ29yaXRobXMvbWVzaE1lcmdlci5qc1wiO1xyXG5pbXBvcnQgeyByYW5kb21WZWN0b3JCZXR3ZWVuUG9pbnRzMkQgfSBmcm9tIFwiLi4vLi4vQWxnb3JpdGhtcy9WZWN0b3JVdGlsc1wiO1xyXG5pbXBvcnQgeyBhZGRHTEJGaWxlIH0gZnJvbSBcIi4uLy4uL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9HTEJMb2FkZXJcIjtcclxuaW1wb3J0IHsgTWVyZ2VNZXNoZXMgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL01lc2hNZXJnZXIudHNcIjtcclxuXHJcbmZ1bmN0aW9uIHBsYWNlVHJlZSh0cmVlLCBpbnRlcnNlY3RzKXtcclxuICAgIGxldCBuZXdUcmVlID0gdHJlZS5zY2VuZS5jbG9uZSgpXHJcbiAgICBuZXdUcmVlLnJvdGF0ZVkocmFkaWFudHMoTWF0aC5yYW5kb20oKSozNjApKVxyXG4gICAgbGV0IHBvaW50ID0gaW50ZXJzZWN0c1swXS5wb2ludFxyXG4gICAgbmV3VHJlZS5wb3NpdGlvbi5zZXQocG9pbnQueCwgcG9pbnQueSwgcG9pbnQueilcclxuICAgIHJldHVybiB7bmV3VHJlZSwgdmV0b3I6IG5ldyBWZWN0b3IzKHBvaW50LngsIHBvaW50LnksIHBvaW50LnopfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR2VuZXJhdGVUcmVlcyhudW0sIHNjZW5lLCBzdGFydCwgYm91bmRzLCB0ZXJyYWluKXtcclxuICAgIGxldCB0cmVlID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICBcIi9Bc3NldHMvUGluZVRyZWUuZ2xiXCIsXHJcbiAgICAgICAgc2NlbmVcclxuICAgICk7XHJcbiAgICBsZXQgc25vd3lUcmVlID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICBcIi9Bc3NldHMvU25vd3lQaW5lVHJlZS5nbGJcIixcclxuICAgICAgICBzY2VuZVxyXG4gICAgKTtcclxuICAgIGxldCBwYWxtVHJlZSA9IGF3YWl0IGFkZEdMQkZpbGUoXHJcbiAgICAgICAgXCIvQXNzZXRzL1BhbG1fVHJlZS5nbGJcIixcclxuICAgICAgICBzY2VuZVxyXG4gICAgKVxyXG5cclxuICAgIGxldCBsZWF2ZXMgPSBuZXcgTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IDB4Njk0YjM3IH0pXHJcbiAgICBsZXQgdHJ1bmsgPSBuZXcgTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IDB4MjE2NzM0IH0pXHJcbiAgICB0cmVlLnNjZW5lLmNoaWxkcmVuWzBdLm1hdGVyaWFsID0gbGVhdmVzXHJcbiAgICB0cmVlLnNjZW5lLmNoaWxkcmVuWzFdLm1hdGVyaWFsID0gdHJ1bmtcclxuICAgIHNub3d5VHJlZS5zY2VuZS5jaGlsZHJlblswXS5tYXRlcmlhbCA9IGxlYXZlc1xyXG4gICAgc25vd3lUcmVlLnNjZW5lLmNoaWxkcmVuWzFdLm1hdGVyaWFsID0gdHJ1bmtcclxuICAgIHNub3d5VHJlZS5zY2VuZS5jaGlsZHJlblsyXS5tYXRlcmlhbCA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogMHhmZmZmZmYgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwYWxtVHJlZSlcclxuICAgIHBhbG1UcmVlID0gcGFsbVRyZWUuc2NlbmUuY2hpbGRyZW5bMF1cclxuICAgIGNvbnNvbGUubG9nKHBhbG1UcmVlKVxyXG4gICAgY29uc29sZS5sb2coc25vd3lUcmVlKVxyXG5cclxuICAgIHBhbG1UcmVlLmNoaWxkcmVuWzBdLm1hdGVyaWFsID0gdHJ1bmtcclxuXHJcblxyXG4gICAgXHJcbiAgICBsZXQgZ3JvdXAgPSBuZXcgR3JvdXAoKVxyXG4gICAgbGV0IHJheWNhc3RlciA9IG5ldyBSYXljYXN0ZXIoKVxyXG4gICAgbGV0IG1lc2hlcyA9IFtdXHJcbiAgICBsZXQgbG9jYXRpb24gPSBbXVxyXG4gICAgZm9yKGxldCBpPTA7aTxudW07aSsrKXtcclxuICAgICAgICBsZXQgcmFuZG9tVmVjdG9yID0gcmFuZG9tVmVjdG9yQmV0d2VlblBvaW50czJEKCBzdGFydCwgYm91bmRzKVxyXG4gICAgICAgIHJhbmRvbVZlY3Rvci55ID0gNTBcclxuXHJcbiAgICAgICAgcmF5Y2FzdGVyLnNldChyYW5kb21WZWN0b3IsIG5ldyBWZWN0b3IzKDAsLTEsMCkpXHJcbiAgICAgICAgY29uc3QgaW50ZXJzZWN0cyA9IHJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKCBbdGVycmFpbl0gKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGlmKGludGVyc2VjdHNbMF0gIT09IHVuZGVmaW5lZCAmJiBpbnRlcnNlY3RzWzBdPy5wb2ludC55ID4gMiAmJiBpbnRlcnNlY3RzWzBdPy5wb2ludC55IDwgMjApe1xyXG4gICAgICAgICAgICBsZXQgcGxhY2VUcmVlT3V0ID0gcGxhY2VUcmVlKHRyZWUsIGludGVyc2VjdHMpXHJcbiAgICAgICAgICAgIG1lc2hlcy5wdXNoKHBsYWNlVHJlZU91dC5uZXdUcmVlKVxyXG4gICAgICAgICAgICBsb2NhdGlvbi5wdXNoKHBsYWNlVHJlZU91dC52ZXRvcilcclxuICAgICAgICAgICAgZ3JvdXAuYWRkKHBsYWNlVHJlZU91dC5uZXdUcmVlKVxyXG4gICAgICAgIH1lbHNlIGlmKGludGVyc2VjdHNbMF0gIT09IHVuZGVmaW5lZCAmJiBpbnRlcnNlY3RzWzBdPy5wb2ludC55IDwgMiAmJiBpbnRlcnNlY3RzWzBdPy5wb2ludC55ID4gMCl7XHJcbiAgICAgICAgICAgIGxldCBwbGFjZVRyZWVPdXQgPSBwbGFjZVRyZWUodHJlZSwgaW50ZXJzZWN0cylcclxuICAgICAgICAgICAgbWVzaGVzLnB1c2gocGxhY2VUcmVlT3V0Lm5ld1RyZWUpXHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnB1c2gocGxhY2VUcmVlT3V0LnZldG9yKVxyXG4gICAgICAgICAgICBncm91cC5hZGQocGxhY2VUcmVlT3V0Lm5ld1RyZWUpXHJcbiAgICAgICAgfWVsc2UgaWYoaW50ZXJzZWN0c1swXSAhPT0gdW5kZWZpbmVkICYmIGludGVyc2VjdHNbMF0/LnBvaW50LnkgPiAyMCl7XHJcbiAgICAgICAgICAgIC8vbWVzaGVzLnB1c2gocGxhY2VUcmVlKHBhbG1UcmVlLCBpbnRlcnNlY3RzKSlcclxuICAgICAgICAgICAgLy9ncm91cC5hZGQocGxhY2VUcmVlT3V0Lm5ld1RyZWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy9sZXQgZ2VvID0gX21lcmdlTWVzaGVzKG1lc2hlcywgdHJ1ZSlcclxuICAgIC8vc2NlbmUuYWRkKGdlbylcclxuICAgIGxldCBtZXNoZXNUb1NlbmQgPSBbXVxyXG4gICAgbGV0IGxvY2F0aW9uVG9TZW5kID0gW11cclxuICAgIG1lc2hlcy5mb3JFYWNoKChlLGspID0+IHtcclxuICAgICAgICBlLmNoaWxkcmVuLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgICAgICAgbWVzaGVzVG9TZW5kLnB1c2goaS5nZW9tZXRyeSlcclxuICAgICAgICAgICAgbG9jYXRpb25Ub1NlbmQucHVzaChsb2NhdGlvbltrXSlcclxuICAgICAgICAgICAgZ3JvdXBcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIGxldCBnZW8gPSBNZXJnZU1lc2hlcyhtZXNoZXNUb1NlbmQsIGxvY2F0aW9uVG9TZW5kKVxyXG4gICAgc2NlbmUuYWRkKGdyb3VwKVxyXG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBsaXN0ZW5Ub0V2ZW50IH0gZnJvbSBcIi4uL0NvcmUtQVBJL0Nvbm5lY3RBUElcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlTmV3Q3ViZVBsYXllciB9IGZyb20gXCIuLi9nYW1lRnVuZGFsbWVudGFscy9tdWx0aXBsYXllci9NYWluUGxheWVySGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVVJKCkge1xyXG4gICAgbGV0IFtnYW1lZmVlZCwgc2V0R2FtZUZlZWRdID0gdXNlU3RhdGUoKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGlzdGVuVG9FdmVudChcIk5ld1BsYXllclwiLCAoaWQsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgLy9sZXQgY3ViZSA9IE1ha2VOZXdDdWJlUGxheWVyKGRhdGEuY29sb3IsIGRhdGEubmFtZSlcclxuICAgICAgICAgICAgLy9NYWtlTmV3Q3ViZVBsYXllcihkYXRhPy5uYW1lLCBcIkpvaW5lZCB0aGUgZ2FtZSFcIilcclxuXHJcbiAgICAgICAgICAgIC8vcGxheWVyc1tpZF0gPSBjdWJlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gPGgxPkhlbGxvPC9oMT47XHJcbn1cclxuIiwiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZvZywgUGVyc3BlY3RpdmVDYW1lcmEsIFNjZW5lLCBWZWN0b3IzLCBXZWJHTFJlbmRlcmVyIH0gZnJvbSBcInRocmVlXCI7XHJcbnZhciBTdGF0cyA9IHJlcXVpcmUoXCJzdGF0cy5qc1wiKTtcclxuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRleHQvc29ja2V0aW9Db250ZXh0XCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlTGFiZWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9uYW1ldGFnXCI7XHJcbmltcG9ydCB7XHJcbiAgICBzdGFydFNldmVyQ2xpZW50Q29tbXVuaWNhdGlvbixcclxuICAgIGxpc3RlblRvRXZlbnQsXHJcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29yZS1BUEkvQ29ubmVjdEFQSVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVSZW5kZXJDeWNsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvcmUtQVBJL1JlbmRlcmluZ0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVNYWluU2NlbmUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TY2VuZXMvTWFpblNjZW5lSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBDcmVhdGVVSSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVVSS9nYW1lRmVlZFwiO1xyXG5pbXBvcnQgeyBDb250cm9sRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL2NvbnRyb2xzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBbY2hpbGQsIHNldENoaWxkXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZ2FtZUV2ZW50RGF0YSwgc2V0R2FtZUV2ZW50RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgW2RheSwgc2V0RGF5XSA9IHVzZVN0YXRlKFwibm90IGRheVwiKTtcclxuICAgIGNvbnN0IFtjaGlsZDIsIHNldENoaWxkMl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3Qgc29ja2V0ID0gdXNlQXBwQ29udGV4dCgpOztcclxuICAgIGNvbnN0IFtyZWNpZXZlZFNlZWQsIHNldFNlZWRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtyZW5kZXJlZCwgc2V0UmVuZGVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NsaWVudHMsIHNldENsaWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3BlcnNvbkRhdGEsIHNldFBlcnNvbmFsRGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIHN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uKHNvY2tldCk7XHJcblxyXG4gICAgc29ja2V0Lm9uY2UoXCJ3ZWxjb21lXCIsIChzZWVkLCBjbGllbnQsIGRhdGEpID0+IHtcclxuICAgICAgICBzZXRTZWVkKHNlZWQpO1xyXG4gICAgICAgIHNldENsaWVudHMoY2xpZW50KTtcclxuICAgICAgICBzZXRQZXJzb25hbERhdGEoZGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdHlwZW9mIGNoaWxkID09PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgICAgIHR5cGVvZiByZWNpZXZlZFNlZWQgPT09IFwidW5kZWZpbmVkXCIgfHxcclxuICAgICAgICAgICAgcmVuZGVyZWQgPT09IHRydWVcclxuICAgICAgICApe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBzZXRSZW5kZXJlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRzID0gbmV3IFN0YXRzKCk7XHJcbiAgICAgICAgc3RhdHMuc2hvd1BhbmVsKDEpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhdHMuZG9tKTtcclxuXHJcbiAgICAgICAgbGV0IFNjZW5lVG9HZXQgPSBuZXcgU2NlbmUoKTtcclxuICAgICAgICBsZXQgUmVuZGVycyA9IG5ldyBXZWJHTFJlbmRlcmVyKHtcclxuICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgICAgICAgICBhbHBoYTogdHJ1ZSxcclxuICAgICAgICAgICAgb2dhcml0aG1pY0RlcHRoQnVmZmVyOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBSZW5kZXJzLnNldENsZWFyQ29sb3IoXCIjODdjZWViXCIsIDEpO1xyXG5cclxuICAgICAgICBsZXQgZm9nID0gbmV3IEZvZygweERDREJERiwgMTAsMTAwMDAwKVxyXG4gICAgICAgIFNjZW5lVG9HZXQuZm9nID0gZm9nXHJcblxyXG4gICAgICAgIFJlbmRlcnMuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICBjaGlsZC5hcHBlbmRDaGlsZChSZW5kZXJzLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgICAgICBsZXQgQ3VycmVudFNjZW5lID0gXCJNYWluXCI7XHJcblxyXG4gICAgICAgIHZhciBDYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICAgICAgICAgIDc1LFxyXG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgMC4xLFxyXG4gICAgICAgICAgICAxMDAwMDAwMDBcclxuICAgICAgICApO1xyXG4gICAgICAgIGdlbmVyYXRlTWFpblNjZW5lKFxyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LFxyXG4gICAgICAgICAgICBSZW5kZXJzLFxyXG4gICAgICAgICAgICBkb2N1bWVudCxcclxuICAgICAgICAgICAgcmVjaWV2ZWRTZWVkLFxyXG4gICAgICAgICAgICBjaGlsZDIsXHJcbiAgICAgICAgICAgIENhbWVyYVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIFJlbmRlcnMuZG9tRWxlbWVudC5yZXF1ZXN0UG9pbnRlckxvY2soKTtcclxuICAgICAgICBDb250cm9sRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgY2hpbGQyKVxyXG5cclxuICAgICAgICBsZXQgcGxheWVycyA9IFtdO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBtYWtlQ3ViZShjb2xvciA9IFwicmdiKDAsMCwwKVwiLCBuYW1lID0gXCJ1bmtvd25cIikge1xyXG4gICAgICAgICAgICBjb25zdCBncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xyXG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAxLCAxKTtcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKGNvbG9yKSxcclxuICAgICAgICAgICAgICAgIGVtaXNzaXZlOiBuZXcgVEhSRUUuQ29sb3IoY29sb3IpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIGdyb3VwLmFkZChjdWJlKTtcclxuICAgICAgICAgICAgY29uc3QgY3ljbGluZGVyID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC4zLCAwLjMsIDAuNiwgMzApO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbDIgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjeWxpbmRlckJ1aWxkID0gbmV3IFRIUkVFLk1lc2goY3ljbGluZGVyLCBtYXRlcmlhbDIpO1xyXG4gICAgICAgICAgICBjeWxpbmRlckJ1aWxkLnJvdGF0ZVgoTWF0aC5QSSAvIDIgKyBNYXRoLlBJKTtcclxuICAgICAgICAgICAgY3lsaW5kZXJCdWlsZC5wb3NpdGlvbi5zZXQoMCwgMCwgLTAuNik7XHJcbiAgICAgICAgICAgIGdyb3VwLmFkZChjeWxpbmRlckJ1aWxkKTtcclxuXHJcbiAgICAgICAgICAgIGdlbmVyYXRlTGFiZWwobmFtZSwgZ3JvdXApO1xyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LmFkZChncm91cCk7XHJcbiAgICAgICAgICAgIGdyb3VwLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcHJldkRhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGFkZHRvR2FtZUZlZWQgPSAobmFtZSA9IFwiVW5rb3duXCIsIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBOZXdHYW1lRXZlbnRBcnJheSA9IFsuLi5nYW1lRXZlbnREYXRhXTtcclxuICAgICAgICAgICAgTmV3R2FtZUV2ZW50QXJyYXkudW5zaGlmdCh7IG5hbWUsIGV2ZW50IH0pO1xyXG4gICAgICAgICAgICBkZWxldGUgTmV3R2FtZUV2ZW50QXJyYXlbMTBdO1xyXG4gICAgICAgICAgICBkZWxldGUgTmV3R2FtZUV2ZW50QXJyYXlbMTFdO1xyXG4gICAgICAgICAgICBzZXRHYW1lRXZlbnREYXRhKFsuLi5OZXdHYW1lRXZlbnRBcnJheV0pO1xyXG4gICAgICAgICAgICBwcmV2RGF0YSA9IE5ld0dhbWVFdmVudEFycmF5O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNsaWVudHMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IG1ha2VDdWJlKGUuY29sb3IsIGUubmFtZSk7XHJcbiAgICAgICAgICAgIHBsYXllcnNbYCR7ZX1gXSA9IGN1YmU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNvY2tldC5vbihcIk5ld1BsYXllclwiLCAoaWQsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBtYWtlQ3ViZShkYXRhLmNvbG9yLCBkYXRhLm5hbWUpO1xyXG4gICAgICAgICAgICBhZGR0b0dhbWVGZWVkKGRhdGE/Lm5hbWUsIFwiSm9pbmVkIHRoZSBnYW1lIVwiKTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllcnNbYCR7aWR9YF0gPSBjdWJlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oXCJMb3N0UExheWVyXCIsIChpZCwgaG93LCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdWJlID0gcGxheWVyc1tgJHtpZH1gXTtcclxuICAgICAgICAgICAgU2NlbmVUb0dldC5yZW1vdmUoY3ViZSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBwbGF5ZXJzW2Ake2lkfWBdO1xyXG4gICAgICAgICAgICBhZGR0b0dhbWVGZWVkKFxyXG4gICAgICAgICAgICAgICAgZGF0YT8ubmFtZSxcclxuICAgICAgICAgICAgICAgIGhvdyA9PT0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJXYXMgcmVtb3ZlZCBmcm9tIHRoZSBnYW1lIGZvciBiZWluZyBpbmFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkxlZnQgdGhlIGdhbWUhXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGlzdGVuVG9FdmVudChcIlBsYXllckxvY2F0aW9uVXBkYXRlXCIsIChpZCwgcG9zLCByb3QsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBwbGF5ZXJzW2Ake2lkfWBdO1xyXG4gICAgICAgICAgICBpZiAoY3ViZSkge1xyXG4gICAgICAgICAgICAgICAgY3ViZS5yb3RhdGlvbi5zZXQocm90Ll94LCByb3QuX3ksIHJvdC5feik7XHJcbiAgICAgICAgICAgICAgICBjdWJlLnBvc2l0aW9uLnNldChwb3MueCwgcG9zLnksIHBvcy56KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdWJlID0gbWFrZUN1YmUoZGF0YT8uY29sb3IsIGRhdGE/Lm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHBsYXllcnNbYCR7aWR9YF0gPSBjdWJlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc29ja2V0Lm9uKFwiTmV3Q2hhdFwiLCAoZGF0YSwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICBhZGR0b0dhbWVGZWVkKGRhdGEubmFtZSwgdGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmVjdG9yID0gbmV3IFZlY3RvcjMoKVxyXG4gICAgICAgICAgICBDYW1lcmEuZ2V0V29ybGRQb3NpdGlvbih2ZWN0b3IpXHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiTG9jYXRpb25VcGRhdGVcIiwgdmVjdG9yLCBDYW1lcmEucm90YXRpb24pO1xyXG4gICAgICAgIH0sIDEwKTtcclxuXHJcbiAgICAgICAgdmFyIGFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0YXRzLmJlZ2luKCk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBhbGwgbW92aW5nIHBhcnRzXHJcbiAgICAgICAgICAgIHVwZGF0ZVJlbmRlckN5Y2xlKEN1cnJlbnRTY2VuZSk7XHJcblxyXG4gICAgICAgICAgICBSZW5kZXJzLnJlbmRlcihTY2VuZVRvR2V0LCBDYW1lcmEpO1xyXG4gICAgICAgICAgICBzdGF0cy5lbmQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhbmltYXRlKCk7XHJcbiAgICB9LCBbY2hpbGQsIGNsaWVudHNdKTtcclxuXHJcbiAgICBsZXQgc2VuZENoYXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzb2NrZXQuZW1pdChcInNlbmRDaGF0XCIsIGNoaWxkMi52YWx1ZSk7XHJcbiAgICAgICAgY2hpbGQyLnZhbHVlID0gXCJcIjtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7dHlwZW9mIHBlcnNvbkRhdGEgPT09IFwidW5kZWZpbmVkXCIgPyBcIkxPQURJTkcuLi5cIiA6IHBlcnNvbkRhdGEubmFtZX1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjgwcHhcIixcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZVVJIC8+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZENoYXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9eyhyZWYpID0+IHNldENoaWxkMihyZWYpfT48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiU3VibWl0XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIHtbLi4uZ2FtZUV2ZW50RGF0YV0ubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZS5uYW1lfSAtIHtlLmV2ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHt0eXBlb2YgcmVjaWV2ZWRTZWVkID09PSBcInVuZGVmaW5lZFwiID8/IDxoMT5MT0FESU5HIFNFRUQhPC9oMT59XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXsocmVmKSA9PiBzZXRDaGlsZChyZWYpfT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiByZWY9eyhyZWYpID0+IHNldENoaWxkKHJlZil9PjwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNvY2tldCA9IGV4cG9ydHMuaW8gPSBleHBvcnRzLk1hbmFnZXIgPSBleHBvcnRzLnByb3RvY29sID0gdm9pZCAwO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwiLi91cmxcIik7XG5jb25zdCBtYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9tYW5hZ2VyXCIpO1xuY29uc3Qgc29ja2V0XzEgPSByZXF1aXJlKFwiLi9zb2NrZXRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTb2NrZXRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNvY2tldF8xLlNvY2tldDsgfSB9KTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudFwiKTtcbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGxvb2t1cDtcbi8qKlxuICogTWFuYWdlcnMgY2FjaGUuXG4gKi9cbmNvbnN0IGNhY2hlID0gKGV4cG9ydHMubWFuYWdlcnMgPSB7fSk7XG5mdW5jdGlvbiBsb29rdXAodXJpLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiB1cmkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgb3B0cyA9IHVyaTtcbiAgICAgICAgdXJpID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICBjb25zdCBwYXJzZWQgPSB1cmxfMS51cmwodXJpLCBvcHRzLnBhdGgpO1xuICAgIGNvbnN0IHNvdXJjZSA9IHBhcnNlZC5zb3VyY2U7XG4gICAgY29uc3QgaWQgPSBwYXJzZWQuaWQ7XG4gICAgY29uc3QgcGF0aCA9IHBhcnNlZC5wYXRoO1xuICAgIGNvbnN0IHNhbWVOYW1lc3BhY2UgPSBjYWNoZVtpZF0gJiYgcGF0aCBpbiBjYWNoZVtpZF1bXCJuc3BzXCJdO1xuICAgIGNvbnN0IG5ld0Nvbm5lY3Rpb24gPSBvcHRzLmZvcmNlTmV3IHx8XG4gICAgICAgIG9wdHNbXCJmb3JjZSBuZXcgY29ubmVjdGlvblwiXSB8fFxuICAgICAgICBmYWxzZSA9PT0gb3B0cy5tdWx0aXBsZXggfHxcbiAgICAgICAgc2FtZU5hbWVzcGFjZTtcbiAgICBsZXQgaW87XG4gICAgaWYgKG5ld0Nvbm5lY3Rpb24pIHtcbiAgICAgICAgZGVidWcoXCJpZ25vcmluZyBzb2NrZXQgY2FjaGUgZm9yICVzXCIsIHNvdXJjZSk7XG4gICAgICAgIGlvID0gbmV3IG1hbmFnZXJfMS5NYW5hZ2VyKHNvdXJjZSwgb3B0cyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoIWNhY2hlW2lkXSkge1xuICAgICAgICAgICAgZGVidWcoXCJuZXcgaW8gaW5zdGFuY2UgZm9yICVzXCIsIHNvdXJjZSk7XG4gICAgICAgICAgICBjYWNoZVtpZF0gPSBuZXcgbWFuYWdlcl8xLk1hbmFnZXIoc291cmNlLCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgICBpbyA9IGNhY2hlW2lkXTtcbiAgICB9XG4gICAgaWYgKHBhcnNlZC5xdWVyeSAmJiAhb3B0cy5xdWVyeSkge1xuICAgICAgICBvcHRzLnF1ZXJ5ID0gcGFyc2VkLnF1ZXJ5S2V5O1xuICAgIH1cbiAgICByZXR1cm4gaW8uc29ja2V0KHBhcnNlZC5wYXRoLCBvcHRzKTtcbn1cbmV4cG9ydHMuaW8gPSBsb29rdXA7XG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQHB1YmxpY1xuICovXG52YXIgc29ja2V0X2lvX3BhcnNlcl8xID0gcmVxdWlyZShcInNvY2tldC5pby1wYXJzZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwcm90b2NvbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc29ja2V0X2lvX3BhcnNlcl8xLnByb3RvY29sOyB9IH0pO1xuLyoqXG4gKiBgY29ubmVjdGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVyaVxuICogQHB1YmxpY1xuICovXG5leHBvcnRzLmNvbm5lY3QgPSBsb29rdXA7XG4vKipcbiAqIEV4cG9zZSBjb25zdHJ1Y3RvcnMgZm9yIHN0YW5kYWxvbmUgYnVpbGQuXG4gKlxuICogQHB1YmxpY1xuICovXG52YXIgbWFuYWdlcl8yID0gcmVxdWlyZShcIi4vbWFuYWdlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk1hbmFnZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1hbmFnZXJfMi5NYW5hZ2VyOyB9IH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbG9va3VwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hbmFnZXIgPSB2b2lkIDA7XG5jb25zdCBlaW8gPSByZXF1aXJlKFwiZW5naW5lLmlvLWNsaWVudFwiKTtcbmNvbnN0IHNvY2tldF8xID0gcmVxdWlyZShcIi4vc29ja2V0XCIpO1xuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcInNvY2tldC5pby1wYXJzZXJcIik7XG5jb25zdCBvbl8xID0gcmVxdWlyZShcIi4vb25cIik7XG5jb25zdCBCYWNrb2ZmID0gcmVxdWlyZShcImJhY2tvMlwiKTtcbmNvbnN0IHR5cGVkX2V2ZW50c18xID0gcmVxdWlyZShcIi4vdHlwZWQtZXZlbnRzXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50Om1hbmFnZXJcIik7XG5jbGFzcyBNYW5hZ2VyIGV4dGVuZHMgdHlwZWRfZXZlbnRzXzEuU3RyaWN0RXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih1cmksIG9wdHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uc3BzID0ge307XG4gICAgICAgIHRoaXMuc3VicyA9IFtdO1xuICAgICAgICBpZiAodXJpICYmIFwib2JqZWN0XCIgPT09IHR5cGVvZiB1cmkpIHtcbiAgICAgICAgICAgIG9wdHMgPSB1cmk7XG4gICAgICAgICAgICB1cmkgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAgIG9wdHMucGF0aCA9IG9wdHMucGF0aCB8fCBcIi9zb2NrZXQuaW9cIjtcbiAgICAgICAgdGhpcy5vcHRzID0gb3B0cztcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb24ob3B0cy5yZWNvbm5lY3Rpb24gIT09IGZhbHNlKTtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb25BdHRlbXB0cyhvcHRzLnJlY29ubmVjdGlvbkF0dGVtcHRzIHx8IEluZmluaXR5KTtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3Rpb25EZWxheShvcHRzLnJlY29ubmVjdGlvbkRlbGF5IHx8IDEwMDApO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbkRlbGF5TWF4KG9wdHMucmVjb25uZWN0aW9uRGVsYXlNYXggfHwgNTAwMCk7XG4gICAgICAgIHRoaXMucmFuZG9taXphdGlvbkZhY3RvcihvcHRzLnJhbmRvbWl6YXRpb25GYWN0b3IgfHwgMC41KTtcbiAgICAgICAgdGhpcy5iYWNrb2ZmID0gbmV3IEJhY2tvZmYoe1xuICAgICAgICAgICAgbWluOiB0aGlzLnJlY29ubmVjdGlvbkRlbGF5KCksXG4gICAgICAgICAgICBtYXg6IHRoaXMucmVjb25uZWN0aW9uRGVsYXlNYXgoKSxcbiAgICAgICAgICAgIGppdHRlcjogdGhpcy5yYW5kb21pemF0aW9uRmFjdG9yKCksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRpbWVvdXQobnVsbCA9PSBvcHRzLnRpbWVvdXQgPyAyMDAwMCA6IG9wdHMudGltZW91dCk7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICB0aGlzLnVyaSA9IHVyaTtcbiAgICAgICAgY29uc3QgX3BhcnNlciA9IG9wdHMucGFyc2VyIHx8IHBhcnNlcjtcbiAgICAgICAgdGhpcy5lbmNvZGVyID0gbmV3IF9wYXJzZXIuRW5jb2RlcigpO1xuICAgICAgICB0aGlzLmRlY29kZXIgPSBuZXcgX3BhcnNlci5EZWNvZGVyKCk7XG4gICAgICAgIHRoaXMuX2F1dG9Db25uZWN0ID0gb3B0cy5hdXRvQ29ubmVjdCAhPT0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9hdXRvQ29ubmVjdClcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb24odikge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uO1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb24gPSAhIXY7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZWNvbm5lY3Rpb25BdHRlbXB0cyh2KSB7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHM7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzID0gdjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlY29ubmVjdGlvbkRlbGF5KHYpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5O1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheSA9IHY7XG4gICAgICAgIChfYSA9IHRoaXMuYmFja29mZikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldE1pbih2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJhbmRvbWl6YXRpb25GYWN0b3Iodikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmFuZG9taXphdGlvbkZhY3RvcjtcbiAgICAgICAgdGhpcy5fcmFuZG9taXphdGlvbkZhY3RvciA9IHY7XG4gICAgICAgIChfYSA9IHRoaXMuYmFja29mZikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldEppdHRlcih2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlY29ubmVjdGlvbkRlbGF5TWF4KHYpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5TWF4O1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheU1heCA9IHY7XG4gICAgICAgIChfYSA9IHRoaXMuYmFja29mZikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldE1heCh2KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRpbWVvdXQodikge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGltZW91dDtcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IHY7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdHJ5aW5nIHRvIHJlY29ubmVjdCBpZiByZWNvbm5lY3Rpb24gaXMgZW5hYmxlZCBhbmQgd2UgaGF2ZSBub3RcbiAgICAgKiBzdGFydGVkIHJlY29ubmVjdGluZyB5ZXRcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgbWF5YmVSZWNvbm5lY3RPbk9wZW4oKSB7XG4gICAgICAgIC8vIE9ubHkgdHJ5IHRvIHJlY29ubmVjdCBpZiBpdCdzIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIGNvbm5lY3RpbmdcbiAgICAgICAgaWYgKCF0aGlzLl9yZWNvbm5lY3RpbmcgJiZcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbiAmJlxuICAgICAgICAgICAgdGhpcy5iYWNrb2ZmLmF0dGVtcHRzID09PSAwKSB7XG4gICAgICAgICAgICAvLyBrZWVwcyByZWNvbm5lY3Rpb24gZnJvbSBmaXJpbmcgdHdpY2UgZm9yIHRoZSBzYW1lIHJlY29ubmVjdGlvbiBsb29wXG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgdHJhbnNwb3J0IGBzb2NrZXRgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSBvcHRpb25hbCwgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgb3Blbihmbikge1xuICAgICAgICBkZWJ1ZyhcInJlYWR5U3RhdGUgJXNcIiwgdGhpcy5fcmVhZHlTdGF0ZSk7XG4gICAgICAgIGlmICh+dGhpcy5fcmVhZHlTdGF0ZS5pbmRleE9mKFwib3BlblwiKSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBkZWJ1ZyhcIm9wZW5pbmcgJXNcIiwgdGhpcy51cmkpO1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVpbyh0aGlzLnVyaSwgdGhpcy5vcHRzKTtcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJvcGVuaW5nXCI7XG4gICAgICAgIHRoaXMuc2tpcFJlY29ubmVjdCA9IGZhbHNlO1xuICAgICAgICAvLyBlbWl0IGBvcGVuYFxuICAgICAgICBjb25zdCBvcGVuU3ViRGVzdHJveSA9IG9uXzEub24oc29ja2V0LCBcIm9wZW5cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5vbm9wZW4oKTtcbiAgICAgICAgICAgIGZuICYmIGZuKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBlbWl0IGBlcnJvcmBcbiAgICAgICAgY29uc3QgZXJyb3JTdWIgPSBvbl8xLm9uKHNvY2tldCwgXCJlcnJvclwiLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBkZWJ1ZyhcImVycm9yXCIpO1xuICAgICAgICAgICAgc2VsZi5jbGVhbnVwKCk7XG4gICAgICAgICAgICBzZWxmLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgICAgIGZuKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IGRvIHRoaXMgaWYgdGhlcmUgaXMgbm8gZm4gdG8gaGFuZGxlIHRoZSBlcnJvclxuICAgICAgICAgICAgICAgIHNlbGYubWF5YmVSZWNvbm5lY3RPbk9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChmYWxzZSAhPT0gdGhpcy5fdGltZW91dCkge1xuICAgICAgICAgICAgY29uc3QgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gICAgICAgICAgICBkZWJ1ZyhcImNvbm5lY3QgYXR0ZW1wdCB3aWxsIHRpbWVvdXQgYWZ0ZXIgJWRcIiwgdGltZW91dCk7XG4gICAgICAgICAgICBpZiAodGltZW91dCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG9wZW5TdWJEZXN0cm95KCk7IC8vIHByZXZlbnRzIGEgcmFjZSBjb25kaXRpb24gd2l0aCB0aGUgJ29wZW4nIGV2ZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzZXQgdGltZXJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJjb25uZWN0IGF0dGVtcHQgdGltZWQgb3V0IGFmdGVyICVkXCIsIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIG9wZW5TdWJEZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJlcnJvclwiLCBuZXcgRXJyb3IoXCJ0aW1lb3V0XCIpKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5hdXRvVW5yZWYpIHtcbiAgICAgICAgICAgICAgICB0aW1lci51bnJlZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goZnVuY3Rpb24gc3ViRGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdWJzLnB1c2gob3BlblN1YkRlc3Ryb3kpO1xuICAgICAgICB0aGlzLnN1YnMucHVzaChlcnJvclN1Yik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3Igb3BlbigpXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY29ubmVjdChmbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKGZuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IG9wZW4uXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ub3BlbigpIHtcbiAgICAgICAgZGVidWcoXCJvcGVuXCIpO1xuICAgICAgICAvLyBjbGVhciBvbGQgc3Vic1xuICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgLy8gbWFyayBhcyBvcGVuXG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcIm9wZW5cIjtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJvcGVuXCIpO1xuICAgICAgICAvLyBhZGQgbmV3IHN1YnNcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5lbmdpbmU7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKG9uXzEub24oc29ja2V0LCBcInBpbmdcIiwgdGhpcy5vbnBpbmcuYmluZCh0aGlzKSksIG9uXzEub24oc29ja2V0LCBcImRhdGFcIiwgdGhpcy5vbmRhdGEuYmluZCh0aGlzKSksIG9uXzEub24oc29ja2V0LCBcImVycm9yXCIsIHRoaXMub25lcnJvci5iaW5kKHRoaXMpKSwgb25fMS5vbihzb2NrZXQsIFwiY2xvc2VcIiwgdGhpcy5vbmNsb3NlLmJpbmQodGhpcykpLCBvbl8xLm9uKHRoaXMuZGVjb2RlciwgXCJkZWNvZGVkXCIsIHRoaXMub25kZWNvZGVkLmJpbmQodGhpcykpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gYSBwaW5nLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbnBpbmcoKSB7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicGluZ1wiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdpdGggZGF0YS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25kYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kZWNvZGVyLmFkZChkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gcGFyc2VyIGZ1bGx5IGRlY29kZXMgYSBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZGVjb2RlZChwYWNrZXQpIHtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJwYWNrZXRcIiwgcGFja2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gc29ja2V0IGVycm9yLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmVycm9yKGVycikge1xuICAgICAgICBkZWJ1ZyhcImVycm9yXCIsIGVycik7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiZXJyb3JcIiwgZXJyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBzb2NrZXQgZm9yIHRoZSBnaXZlbiBgbnNwYC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1NvY2tldH1cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc29ja2V0KG5zcCwgb3B0cykge1xuICAgICAgICBsZXQgc29ja2V0ID0gdGhpcy5uc3BzW25zcF07XG4gICAgICAgIGlmICghc29ja2V0KSB7XG4gICAgICAgICAgICBzb2NrZXQgPSBuZXcgc29ja2V0XzEuU29ja2V0KHRoaXMsIG5zcCwgb3B0cyk7XG4gICAgICAgICAgICB0aGlzLm5zcHNbbnNwXSA9IHNvY2tldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc29ja2V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHNvY2tldCBjbG9zZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzb2NrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9kZXN0cm95KHNvY2tldCkge1xuICAgICAgICBjb25zdCBuc3BzID0gT2JqZWN0LmtleXModGhpcy5uc3BzKTtcbiAgICAgICAgZm9yIChjb25zdCBuc3Agb2YgbnNwcykge1xuICAgICAgICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5uc3BzW25zcF07XG4gICAgICAgICAgICBpZiAoc29ja2V0LmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwic29ja2V0ICVzIGlzIHN0aWxsIGFjdGl2ZSwgc2tpcHBpbmcgY2xvc2VcIiwgbnNwKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xvc2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV3JpdGVzIGEgcGFja2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3BhY2tldChwYWNrZXQpIHtcbiAgICAgICAgZGVidWcoXCJ3cml0aW5nIHBhY2tldCAlalwiLCBwYWNrZXQpO1xuICAgICAgICBjb25zdCBlbmNvZGVkUGFja2V0cyA9IHRoaXMuZW5jb2Rlci5lbmNvZGUocGFja2V0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkUGFja2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUud3JpdGUoZW5jb2RlZFBhY2tldHNbaV0sIHBhY2tldC5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhbiB1cCB0cmFuc3BvcnQgc3Vic2NyaXB0aW9ucyBhbmQgcGFja2V0IGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY2xlYW51cCgpIHtcbiAgICAgICAgZGVidWcoXCJjbGVhbnVwXCIpO1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaCgoc3ViRGVzdHJveSkgPT4gc3ViRGVzdHJveSgpKTtcbiAgICAgICAgdGhpcy5zdWJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZGVjb2Rlci5kZXN0cm95KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsb3NlIHRoZSBjdXJyZW50IHNvY2tldC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2Nsb3NlKCkge1xuICAgICAgICBkZWJ1ZyhcImRpc2Nvbm5lY3RcIik7XG4gICAgICAgIHRoaXMuc2tpcFJlY29ubmVjdCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoXCJvcGVuaW5nXCIgPT09IHRoaXMuX3JlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgIC8vIGBvbmNsb3NlYCB3aWxsIG5vdCBmaXJlIGJlY2F1c2VcbiAgICAgICAgICAgIC8vIGFuIG9wZW4gZXZlbnQgbmV2ZXIgaGFwcGVuZWRcbiAgICAgICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICAgICAgaWYgKHRoaXMuZW5naW5lKVxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuY2xvc2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGNsb3NlKClcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb3NlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBjbG9zZS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25jbG9zZShyZWFzb24pIHtcbiAgICAgICAgZGVidWcoXCJvbmNsb3NlXCIpO1xuICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNsb3NlXCIsIHJlYXNvbik7XG4gICAgICAgIGlmICh0aGlzLl9yZWNvbm5lY3Rpb24gJiYgIXRoaXMuc2tpcFJlY29ubmVjdCkge1xuICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0IGEgcmVjb25uZWN0aW9uLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICByZWNvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLl9yZWNvbm5lY3RpbmcgfHwgdGhpcy5za2lwUmVjb25uZWN0KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5iYWNrb2ZmLmF0dGVtcHRzID49IHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcInJlY29ubmVjdCBmYWlsZWRcIik7XG4gICAgICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicmVjb25uZWN0X2ZhaWxlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGVsYXkgPSB0aGlzLmJhY2tvZmYuZHVyYXRpb24oKTtcbiAgICAgICAgICAgIGRlYnVnKFwid2lsbCB3YWl0ICVkbXMgYmVmb3JlIHJlY29ubmVjdCBhdHRlbXB0XCIsIGRlbGF5KTtcbiAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNraXBSZWNvbm5lY3QpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcImF0dGVtcHRpbmcgcmVjb25uZWN0XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicmVjb25uZWN0X2F0dGVtcHRcIiwgc2VsZi5iYWNrb2ZmLmF0dGVtcHRzKTtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBhZ2FpbiBmb3IgdGhlIGNhc2Ugc29ja2V0IGNsb3NlZCBpbiBhYm92ZSBldmVudHNcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5za2lwUmVjb25uZWN0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgc2VsZi5vcGVuKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJyZWNvbm5lY3QgYXR0ZW1wdCBlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3JlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwicmVjb25uZWN0X2Vycm9yXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcInJlY29ubmVjdCBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vbnJlY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRzLmF1dG9VbnJlZikge1xuICAgICAgICAgICAgICAgIHRpbWVyLnVucmVmKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaChmdW5jdGlvbiBzdWJEZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBzdWNjZXNzZnVsIHJlY29ubmVjdC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25yZWNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHQgPSB0aGlzLmJhY2tvZmYuYXR0ZW1wdHM7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RcIiwgYXR0ZW1wdCk7XG4gICAgfVxufVxuZXhwb3J0cy5NYW5hZ2VyID0gTWFuYWdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5vbiA9IHZvaWQgMDtcbmZ1bmN0aW9uIG9uKG9iaiwgZXYsIGZuKSB7XG4gICAgb2JqLm9uKGV2LCBmbik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHN1YkRlc3Ryb3koKSB7XG4gICAgICAgIG9iai5vZmYoZXYsIGZuKTtcbiAgICB9O1xufVxuZXhwb3J0cy5vbiA9IG9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNvY2tldCA9IHZvaWQgMDtcbmNvbnN0IHNvY2tldF9pb19wYXJzZXJfMSA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tcGFyc2VyXCIpO1xuY29uc3Qgb25fMSA9IHJlcXVpcmUoXCIuL29uXCIpO1xuY29uc3QgdHlwZWRfZXZlbnRzXzEgPSByZXF1aXJlKFwiLi90eXBlZC1ldmVudHNcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1jbGllbnQ6c29ja2V0XCIpO1xuLyoqXG4gKiBJbnRlcm5hbCBldmVudHMuXG4gKiBUaGVzZSBldmVudHMgY2FuJ3QgYmUgZW1pdHRlZCBieSB0aGUgdXNlci5cbiAqL1xuY29uc3QgUkVTRVJWRURfRVZFTlRTID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgY29ubmVjdDogMSxcbiAgICBjb25uZWN0X2Vycm9yOiAxLFxuICAgIGRpc2Nvbm5lY3Q6IDEsXG4gICAgZGlzY29ubmVjdGluZzogMSxcbiAgICAvLyBFdmVudEVtaXR0ZXIgcmVzZXJ2ZWQgZXZlbnRzOiBodHRwczovL25vZGVqcy5vcmcvYXBpL2V2ZW50cy5odG1sI2V2ZW50c19ldmVudF9uZXdsaXN0ZW5lclxuICAgIG5ld0xpc3RlbmVyOiAxLFxuICAgIHJlbW92ZUxpc3RlbmVyOiAxLFxufSk7XG5jbGFzcyBTb2NrZXQgZXh0ZW5kcyB0eXBlZF9ldmVudHNfMS5TdHJpY3RFdmVudEVtaXR0ZXIge1xuICAgIC8qKlxuICAgICAqIGBTb2NrZXRgIGNvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGlvLCBuc3AsIG9wdHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLmlkcyA9IDA7XG4gICAgICAgIHRoaXMuYWNrcyA9IHt9O1xuICAgICAgICB0aGlzLmZsYWdzID0ge307XG4gICAgICAgIHRoaXMuaW8gPSBpbztcbiAgICAgICAgdGhpcy5uc3AgPSBuc3A7XG4gICAgICAgIHRoaXMuaWRzID0gMDtcbiAgICAgICAgdGhpcy5hY2tzID0ge307XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZsYWdzID0ge307XG4gICAgICAgIGlmIChvcHRzICYmIG9wdHMuYXV0aCkge1xuICAgICAgICAgICAgdGhpcy5hdXRoID0gb3B0cy5hdXRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlvLl9hdXRvQ29ubmVjdClcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmUgdG8gb3BlbiwgY2xvc2UgYW5kIHBhY2tldCBldmVudHNcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc3ViRXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5zdWJzKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBpbyA9IHRoaXMuaW87XG4gICAgICAgIHRoaXMuc3VicyA9IFtcbiAgICAgICAgICAgIG9uXzEub24oaW8sIFwib3BlblwiLCB0aGlzLm9ub3Blbi5iaW5kKHRoaXMpKSxcbiAgICAgICAgICAgIG9uXzEub24oaW8sIFwicGFja2V0XCIsIHRoaXMub25wYWNrZXQuYmluZCh0aGlzKSksXG4gICAgICAgICAgICBvbl8xLm9uKGlvLCBcImVycm9yXCIsIHRoaXMub25lcnJvci5iaW5kKHRoaXMpKSxcbiAgICAgICAgICAgIG9uXzEub24oaW8sIFwiY2xvc2VcIiwgdGhpcy5vbmNsb3NlLmJpbmQodGhpcykpLFxuICAgICAgICBdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBTb2NrZXQgd2lsbCB0cnkgdG8gcmVjb25uZWN0IHdoZW4gaXRzIE1hbmFnZXIgY29ubmVjdHMgb3IgcmVjb25uZWN0c1xuICAgICAqL1xuICAgIGdldCBhY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuc3VicztcbiAgICB9XG4gICAgLyoqXG4gICAgICogXCJPcGVuc1wiIHRoZSBzb2NrZXQuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIHRoaXMuc3ViRXZlbnRzKCk7XG4gICAgICAgIGlmICghdGhpcy5pb1tcIl9yZWNvbm5lY3RpbmdcIl0pXG4gICAgICAgICAgICB0aGlzLmlvLm9wZW4oKTsgLy8gZW5zdXJlIG9wZW5cbiAgICAgICAgaWYgKFwib3BlblwiID09PSB0aGlzLmlvLl9yZWFkeVN0YXRlKVxuICAgICAgICAgICAgdGhpcy5vbm9wZW4oKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBjb25uZWN0KClcbiAgICAgKi9cbiAgICBvcGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgYG1lc3NhZ2VgIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHNlbmQoLi4uYXJncykge1xuICAgICAgICBhcmdzLnVuc2hpZnQoXCJtZXNzYWdlXCIpO1xuICAgICAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBgZW1pdGAuXG4gICAgICogSWYgdGhlIGV2ZW50IGlzIGluIGBldmVudHNgLCBpdCdzIGVtaXR0ZWQgbm9ybWFsbHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgZW1pdChldiwgLi4uYXJncykge1xuICAgICAgICBpZiAoUkVTRVJWRURfRVZFTlRTLmhhc093blByb3BlcnR5KGV2KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBldiArICdcIiBpcyBhIHJlc2VydmVkIGV2ZW50IG5hbWUnKTtcbiAgICAgICAgfVxuICAgICAgICBhcmdzLnVuc2hpZnQoZXYpO1xuICAgICAgICBjb25zdCBwYWNrZXQgPSB7XG4gICAgICAgICAgICB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5FVkVOVCxcbiAgICAgICAgICAgIGRhdGE6IGFyZ3MsXG4gICAgICAgIH07XG4gICAgICAgIHBhY2tldC5vcHRpb25zID0ge307XG4gICAgICAgIHBhY2tldC5vcHRpb25zLmNvbXByZXNzID0gdGhpcy5mbGFncy5jb21wcmVzcyAhPT0gZmFsc2U7XG4gICAgICAgIC8vIGV2ZW50IGFjayBjYWxsYmFja1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImVtaXR0aW5nIHBhY2tldCB3aXRoIGFjayBpZCAlZFwiLCB0aGlzLmlkcyk7XG4gICAgICAgICAgICB0aGlzLmFja3NbdGhpcy5pZHNdID0gYXJncy5wb3AoKTtcbiAgICAgICAgICAgIHBhY2tldC5pZCA9IHRoaXMuaWRzKys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNUcmFuc3BvcnRXcml0YWJsZSA9IHRoaXMuaW8uZW5naW5lICYmXG4gICAgICAgICAgICB0aGlzLmlvLmVuZ2luZS50cmFuc3BvcnQgJiZcbiAgICAgICAgICAgIHRoaXMuaW8uZW5naW5lLnRyYW5zcG9ydC53cml0YWJsZTtcbiAgICAgICAgY29uc3QgZGlzY2FyZFBhY2tldCA9IHRoaXMuZmxhZ3Mudm9sYXRpbGUgJiYgKCFpc1RyYW5zcG9ydFdyaXRhYmxlIHx8ICF0aGlzLmNvbm5lY3RlZCk7XG4gICAgICAgIGlmIChkaXNjYXJkUGFja2V0KSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImRpc2NhcmQgcGFja2V0IGFzIHRoZSB0cmFuc3BvcnQgaXMgbm90IGN1cnJlbnRseSB3cml0YWJsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQocGFja2V0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZEJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mbGFncyA9IHt9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwYWNrZXQocGFja2V0KSB7XG4gICAgICAgIHBhY2tldC5uc3AgPSB0aGlzLm5zcDtcbiAgICAgICAgdGhpcy5pby5fcGFja2V0KHBhY2tldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBgb3BlbmAuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ub3BlbigpIHtcbiAgICAgICAgZGVidWcoXCJ0cmFuc3BvcnQgaXMgb3BlbiAtIGNvbm5lY3RpbmdcIik7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hdXRoID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5hdXRoKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNULCBkYXRhIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1QsIGRhdGE6IHRoaXMuYXV0aCB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgb3IgbWFuYWdlciBgZXJyb3JgLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVyclxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25lcnJvcihlcnIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0X2Vycm9yXCIsIGVycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIGBjbG9zZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVhc29uXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmNsb3NlKHJlYXNvbikge1xuICAgICAgICBkZWJ1ZyhcImNsb3NlICglcylcIiwgcmVhc29uKTtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICBkZWxldGUgdGhpcy5pZDtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJkaXNjb25uZWN0XCIsIHJlYXNvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aXRoIHNvY2tldCBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbnBhY2tldChwYWNrZXQpIHtcbiAgICAgICAgY29uc3Qgc2FtZU5hbWVzcGFjZSA9IHBhY2tldC5uc3AgPT09IHRoaXMubnNwO1xuICAgICAgICBpZiAoIXNhbWVOYW1lc3BhY2UpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHN3aXRjaCAocGFja2V0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVDpcbiAgICAgICAgICAgICAgICBpZiAocGFja2V0LmRhdGEgJiYgcGFja2V0LmRhdGEuc2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gcGFja2V0LmRhdGEuc2lkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uY29ubmVjdChpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNvbm5lY3RfZXJyb3JcIiwgbmV3IEVycm9yKFwiSXQgc2VlbXMgeW91IGFyZSB0cnlpbmcgdG8gcmVhY2ggYSBTb2NrZXQuSU8gc2VydmVyIGluIHYyLnggd2l0aCBhIHYzLnggY2xpZW50LCBidXQgdGhleSBhcmUgbm90IGNvbXBhdGlibGUgKG1vcmUgaW5mb3JtYXRpb24gaGVyZTogaHR0cHM6Ly9zb2NrZXQuaW8vZG9jcy92My9taWdyYXRpbmctZnJvbS0yLXgtdG8tMy0wLylcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRVZFTlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmV2ZW50KHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkJJTkFSWV9FVkVOVDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uZXZlbnQocGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQUNLOlxuICAgICAgICAgICAgICAgIHRoaXMub25hY2socGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQklOQVJZX0FDSzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkRJU0NPTk5FQ1Q6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVF9FUlJPUjpcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IocGFja2V0LmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGVyci5kYXRhID0gcGFja2V0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNvbm5lY3RfZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHNlcnZlciBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZXZlbnQocGFja2V0KSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBwYWNrZXQuZGF0YSB8fCBbXTtcbiAgICAgICAgZGVidWcoXCJlbWl0dGluZyBldmVudCAlalwiLCBhcmdzKTtcbiAgICAgICAgaWYgKG51bGwgIT0gcGFja2V0LmlkKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImF0dGFjaGluZyBhY2sgY2FsbGJhY2sgdG8gZXZlbnRcIik7XG4gICAgICAgICAgICBhcmdzLnB1c2godGhpcy5hY2socGFja2V0LmlkKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRFdmVudChhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlci5wdXNoKE9iamVjdC5mcmVlemUoYXJncykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVtaXRFdmVudChhcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLl9hbnlMaXN0ZW5lcnMgJiYgdGhpcy5fYW55TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fYW55TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIGxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1cGVyLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByb2R1Y2VzIGFuIGFjayBjYWxsYmFjayB0byBlbWl0IHdpdGggYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFjayhpZCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHNlbnQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAvLyBwcmV2ZW50IGRvdWJsZSBjYWxsYmFja3NcbiAgICAgICAgICAgIGlmIChzZW50KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHNlbnQgPSB0cnVlO1xuICAgICAgICAgICAgZGVidWcoXCJzZW5kaW5nIGFjayAlalwiLCBhcmdzKTtcbiAgICAgICAgICAgIHNlbGYucGFja2V0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5BQ0ssXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIGRhdGE6IGFyZ3MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gYSBzZXJ2ZXIgYWNrbm93bGVnZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmFjayhwYWNrZXQpIHtcbiAgICAgICAgY29uc3QgYWNrID0gdGhpcy5hY2tzW3BhY2tldC5pZF07XG4gICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBhY2spIHtcbiAgICAgICAgICAgIGRlYnVnKFwiY2FsbGluZyBhY2sgJXMgd2l0aCAlalwiLCBwYWNrZXQuaWQsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICAgIGFjay5hcHBseSh0aGlzLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5hY2tzW3BhY2tldC5pZF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImJhZCBhY2sgJXNcIiwgcGFja2V0LmlkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBzZXJ2ZXIgY29ubmVjdC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25jb25uZWN0KGlkKSB7XG4gICAgICAgIGRlYnVnKFwic29ja2V0IGNvbm5lY3RlZCB3aXRoIGlkICVzXCIsIGlkKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdFwiKTtcbiAgICAgICAgdGhpcy5lbWl0QnVmZmVyZWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdCBidWZmZXJlZCBldmVudHMgKHJlY2VpdmVkIGFuZCBlbWl0dGVkKS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZW1pdEJ1ZmZlcmVkKCkge1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIuZm9yRWFjaCgoYXJncykgPT4gdGhpcy5lbWl0RXZlbnQoYXJncykpO1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyLmZvckVhY2goKHBhY2tldCkgPT4gdGhpcy5wYWNrZXQocGFja2V0KSk7XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBzZXJ2ZXIgZGlzY29ubmVjdC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25kaXNjb25uZWN0KCkge1xuICAgICAgICBkZWJ1ZyhcInNlcnZlciBkaXNjb25uZWN0ICglcylcIiwgdGhpcy5uc3ApO1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5vbmNsb3NlKFwiaW8gc2VydmVyIGRpc2Nvbm5lY3RcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGZvcmNlZCBjbGllbnQvc2VydmVyIHNpZGUgZGlzY29ubmVjdGlvbnMsXG4gICAgICogdGhpcyBtZXRob2QgZW5zdXJlcyB0aGUgbWFuYWdlciBzdG9wcyB0cmFja2luZyB1cyBhbmRcbiAgICAgKiB0aGF0IHJlY29ubmVjdGlvbnMgZG9uJ3QgZ2V0IHRyaWdnZXJlZCBmb3IgdGhpcy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vicykge1xuICAgICAgICAgICAgLy8gY2xlYW4gc3Vic2NyaXB0aW9ucyB0byBhdm9pZCByZWNvbm5lY3Rpb25zXG4gICAgICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaCgoc3ViRGVzdHJveSkgPT4gc3ViRGVzdHJveSgpKTtcbiAgICAgICAgICAgIHRoaXMuc3VicyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlvW1wiX2Rlc3Ryb3lcIl0odGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc2Nvbm5lY3RzIHRoZSBzb2NrZXQgbWFudWFsbHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcInBlcmZvcm1pbmcgZGlzY29ubmVjdCAoJXMpXCIsIHRoaXMubnNwKTtcbiAgICAgICAgICAgIHRoaXMucGFja2V0KHsgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRElTQ09OTkVDVCB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZW1vdmUgc29ja2V0IGZyb20gcG9vbFxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAvLyBmaXJlIGV2ZW50c1xuICAgICAgICAgICAgdGhpcy5vbmNsb3NlKFwiaW8gY2xpZW50IGRpc2Nvbm5lY3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBkaXNjb25uZWN0KClcbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb21wcmVzcyBmbGFnLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbXByZXNzIC0gaWYgYHRydWVgLCBjb21wcmVzc2VzIHRoZSBzZW5kaW5nIGRhdGFcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY29tcHJlc3MoY29tcHJlc3MpIHtcbiAgICAgICAgdGhpcy5mbGFncy5jb21wcmVzcyA9IGNvbXByZXNzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBhIG1vZGlmaWVyIGZvciBhIHN1YnNlcXVlbnQgZXZlbnQgZW1pc3Npb24gdGhhdCB0aGUgZXZlbnQgbWVzc2FnZSB3aWxsIGJlIGRyb3BwZWQgd2hlbiB0aGlzIHNvY2tldCBpcyBub3RcbiAgICAgKiByZWFkeSB0byBzZW5kIG1lc3NhZ2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBnZXQgdm9sYXRpbGUoKSB7XG4gICAgICAgIHRoaXMuZmxhZ3Mudm9sYXRpbGUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBmaXJlZCB3aGVuIGFueSBldmVudCBpcyBlbWl0dGVkLiBUaGUgZXZlbnQgbmFtZSBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZVxuICAgICAqIGNhbGxiYWNrLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIG9uQW55KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycyA9IHRoaXMuX2FueUxpc3RlbmVycyB8fCBbXTtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBmaXJlZCB3aGVuIGFueSBldmVudCBpcyBlbWl0dGVkLiBUaGUgZXZlbnQgbmFtZSBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZVxuICAgICAqIGNhbGxiYWNrLiBUaGUgbGlzdGVuZXIgaXMgYWRkZWQgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdGVuZXJzIGFycmF5LlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHByZXBlbmRBbnkobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzID0gdGhpcy5fYW55TGlzdGVuZXJzIHx8IFtdO1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgZmlyZWQgd2hlbiBhbnkgZXZlbnQgaXMgZW1pdHRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBvZmZBbnkobGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hbnlMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fYW55TGlzdGVuZXJzO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIgPT09IGxpc3RlbmVyc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBsaXN0ZW5lcnMgdGhhdCBhcmUgbGlzdGVuaW5nIGZvciBhbnkgZXZlbnQgdGhhdCBpcyBzcGVjaWZpZWQuIFRoaXMgYXJyYXkgY2FuIGJlIG1hbmlwdWxhdGVkLFxuICAgICAqIGUuZy4gdG8gcmVtb3ZlIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBsaXN0ZW5lcnNBbnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbnlMaXN0ZW5lcnMgfHwgW107XG4gICAgfVxufVxuZXhwb3J0cy5Tb2NrZXQgPSBTb2NrZXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3RyaWN0RXZlbnRFbWl0dGVyID0gdm9pZCAwO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbi8qKlxuICogU3RyaWN0bHkgdHlwZWQgdmVyc2lvbiBvZiBhbiBgRXZlbnRFbWl0dGVyYC4gQSBgVHlwZWRFdmVudEVtaXR0ZXJgIHRha2VzIHR5cGVcbiAqIHBhcmFtZXRlcnMgZm9yIG1hcHBpbmdzIG9mIGV2ZW50IG5hbWVzIHRvIGV2ZW50IGRhdGEgdHlwZXMsIGFuZCBzdHJpY3RseVxuICogdHlwZXMgbWV0aG9kIGNhbGxzIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBhY2NvcmRpbmcgdG8gdGhlc2UgZXZlbnQgbWFwcy5cbiAqXG4gKiBAdHlwZVBhcmFtIExpc3RlbkV2ZW50cyAtIGBFdmVudHNNYXBgIG9mIHVzZXItZGVmaW5lZCBldmVudHMgdGhhdCBjYW4gYmVcbiAqIGxpc3RlbmVkIHRvIHdpdGggYG9uYCBvciBgb25jZWBcbiAqIEB0eXBlUGFyYW0gRW1pdEV2ZW50cyAtIGBFdmVudHNNYXBgIG9mIHVzZXItZGVmaW5lZCBldmVudHMgdGhhdCBjYW4gYmVcbiAqIGVtaXR0ZWQgd2l0aCBgZW1pdGBcbiAqIEB0eXBlUGFyYW0gUmVzZXJ2ZWRFdmVudHMgLSBgRXZlbnRzTWFwYCBvZiByZXNlcnZlZCBldmVudHMsIHRoYXQgY2FuIGJlXG4gKiBlbWl0dGVkIGJ5IHNvY2tldC5pbyB3aXRoIGBlbWl0UmVzZXJ2ZWRgLCBhbmQgY2FuIGJlIGxpc3RlbmVkIHRvIHdpdGhcbiAqIGBsaXN0ZW5gLlxuICovXG5jbGFzcyBTdHJpY3RFdmVudEVtaXR0ZXIgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBgbGlzdGVuZXJgIGZ1bmN0aW9uIGFzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBgZXZgLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2IE5hbWUgb2YgdGhlIGV2ZW50XG4gICAgICogQHBhcmFtIGxpc3RlbmVyIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICovXG4gICAgb24oZXYsIGxpc3RlbmVyKSB7XG4gICAgICAgIHN1cGVyLm9uKGV2LCBsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgb25lLXRpbWUgYGxpc3RlbmVyYCBmdW5jdGlvbiBhcyBhbiBldmVudCBsaXN0ZW5lciBmb3IgYGV2YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiBOYW1lIG9mIHRoZSBldmVudFxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBDYWxsYmFjayBmdW5jdGlvblxuICAgICAqL1xuICAgIG9uY2UoZXYsIGxpc3RlbmVyKSB7XG4gICAgICAgIHN1cGVyLm9uY2UoZXYsIGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2IE5hbWUgb2YgdGhlIGV2ZW50XG4gICAgICogQHBhcmFtIGFyZ3MgVmFsdWVzIHRvIHNlbmQgdG8gbGlzdGVuZXJzIG9mIHRoaXMgZXZlbnRcbiAgICAgKi9cbiAgICBlbWl0KGV2LCAuLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyLmVtaXQoZXYsIC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdHMgYSByZXNlcnZlZCBldmVudC5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGBwcm90ZWN0ZWRgLCBzbyB0aGF0IG9ubHkgYSBjbGFzcyBleHRlbmRpbmdcbiAgICAgKiBgU3RyaWN0RXZlbnRFbWl0dGVyYCBjYW4gZW1pdCBpdHMgb3duIHJlc2VydmVkIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldiBSZXNlcnZlZCBldmVudCBuYW1lXG4gICAgICogQHBhcmFtIGFyZ3MgQXJndW1lbnRzIHRvIGVtaXQgYWxvbmcgd2l0aCB0aGUgZXZlbnRcbiAgICAgKi9cbiAgICBlbWl0UmVzZXJ2ZWQoZXYsIC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIuZW1pdChldiwgLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsaXN0ZW5lcnMgbGlzdGVuaW5nIHRvIGFuIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50IEV2ZW50IG5hbWVcbiAgICAgKiBAcmV0dXJucyBBcnJheSBvZiBsaXN0ZW5lcnMgc3Vic2NyaWJlZCB0byBgZXZlbnRgXG4gICAgICovXG4gICAgbGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBzdXBlci5saXN0ZW5lcnMoZXZlbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuU3RyaWN0RXZlbnRFbWl0dGVyID0gU3RyaWN0RXZlbnRFbWl0dGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVybCA9IHZvaWQgMDtcbmNvbnN0IHBhcnNldXJpID0gcmVxdWlyZShcInBhcnNldXJpXCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50OnVybFwiKTtcbi8qKlxuICogVVJMIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0gdXJpIC0gdXJsXG4gKiBAcGFyYW0gcGF0aCAtIHRoZSByZXF1ZXN0IHBhdGggb2YgdGhlIGNvbm5lY3Rpb25cbiAqIEBwYXJhbSBsb2MgLSBBbiBvYmplY3QgbWVhbnQgdG8gbWltaWMgd2luZG93LmxvY2F0aW9uLlxuICogICAgICAgIERlZmF1bHRzIHRvIHdpbmRvdy5sb2NhdGlvbi5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdXJsKHVyaSwgcGF0aCA9IFwiXCIsIGxvYykge1xuICAgIGxldCBvYmogPSB1cmk7XG4gICAgLy8gZGVmYXVsdCB0byB3aW5kb3cubG9jYXRpb25cbiAgICBsb2MgPSBsb2MgfHwgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhdGlvbik7XG4gICAgaWYgKG51bGwgPT0gdXJpKVxuICAgICAgICB1cmkgPSBsb2MucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2MuaG9zdDtcbiAgICAvLyByZWxhdGl2ZSBwYXRoIHN1cHBvcnRcbiAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAoXCIvXCIgPT09IHVyaS5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgIGlmIChcIi9cIiA9PT0gdXJpLmNoYXJBdCgxKSkge1xuICAgICAgICAgICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVyaSA9IGxvYy5ob3N0ICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghL14oaHR0cHM/fHdzcz8pOlxcL1xcLy8udGVzdCh1cmkpKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcInByb3RvY29sLWxlc3MgdXJsICVzXCIsIHVyaSk7XG4gICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGxvYykge1xuICAgICAgICAgICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIFwiLy9cIiArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVyaSA9IFwiaHR0cHM6Ly9cIiArIHVyaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBwYXJzZVxuICAgICAgICBkZWJ1ZyhcInBhcnNlICVzXCIsIHVyaSk7XG4gICAgICAgIG9iaiA9IHBhcnNldXJpKHVyaSk7XG4gICAgfVxuICAgIC8vIG1ha2Ugc3VyZSB3ZSB0cmVhdCBgbG9jYWxob3N0OjgwYCBhbmQgYGxvY2FsaG9zdGAgZXF1YWxseVxuICAgIGlmICghb2JqLnBvcnQpIHtcbiAgICAgICAgaWYgKC9eKGh0dHB8d3MpJC8udGVzdChvYmoucHJvdG9jb2wpKSB7XG4gICAgICAgICAgICBvYmoucG9ydCA9IFwiODBcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgvXihodHRwfHdzKXMkLy50ZXN0KG9iai5wcm90b2NvbCkpIHtcbiAgICAgICAgICAgIG9iai5wb3J0ID0gXCI0NDNcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvYmoucGF0aCA9IG9iai5wYXRoIHx8IFwiL1wiO1xuICAgIGNvbnN0IGlwdjYgPSBvYmouaG9zdC5pbmRleE9mKFwiOlwiKSAhPT0gLTE7XG4gICAgY29uc3QgaG9zdCA9IGlwdjYgPyBcIltcIiArIG9iai5ob3N0ICsgXCJdXCIgOiBvYmouaG9zdDtcbiAgICAvLyBkZWZpbmUgdW5pcXVlIGlkXG4gICAgb2JqLmlkID0gb2JqLnByb3RvY29sICsgXCI6Ly9cIiArIGhvc3QgKyBcIjpcIiArIG9iai5wb3J0ICsgcGF0aDtcbiAgICAvLyBkZWZpbmUgaHJlZlxuICAgIG9iai5ocmVmID1cbiAgICAgICAgb2JqLnByb3RvY29sICtcbiAgICAgICAgICAgIFwiOi8vXCIgK1xuICAgICAgICAgICAgaG9zdCArXG4gICAgICAgICAgICAobG9jICYmIGxvYy5wb3J0ID09PSBvYmoucG9ydCA/IFwiXCIgOiBcIjpcIiArIG9iai5wb3J0KTtcbiAgICByZXR1cm4gb2JqO1xufVxuZXhwb3J0cy51cmwgPSB1cmw7XG4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2UoKTtcbmV4cG9ydHMuZGVzdHJveSA9ICgoKSA9PiB7XG5cdGxldCB3YXJuZWQgPSBmYWxzZTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGlmICghd2FybmVkKSB7XG5cdFx0XHR3YXJuZWQgPSB0cnVlO1xuXHRcdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdFx0fVxuXHR9O1xufSkoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG5cdCcjMDAwMENDJyxcblx0JyMwMDAwRkYnLFxuXHQnIzAwMzNDQycsXG5cdCcjMDAzM0ZGJyxcblx0JyMwMDY2Q0MnLFxuXHQnIzAwNjZGRicsXG5cdCcjMDA5OUNDJyxcblx0JyMwMDk5RkYnLFxuXHQnIzAwQ0MwMCcsXG5cdCcjMDBDQzMzJyxcblx0JyMwMENDNjYnLFxuXHQnIzAwQ0M5OScsXG5cdCcjMDBDQ0NDJyxcblx0JyMwMENDRkYnLFxuXHQnIzMzMDBDQycsXG5cdCcjMzMwMEZGJyxcblx0JyMzMzMzQ0MnLFxuXHQnIzMzMzNGRicsXG5cdCcjMzM2NkNDJyxcblx0JyMzMzY2RkYnLFxuXHQnIzMzOTlDQycsXG5cdCcjMzM5OUZGJyxcblx0JyMzM0NDMDAnLFxuXHQnIzMzQ0MzMycsXG5cdCcjMzNDQzY2Jyxcblx0JyMzM0NDOTknLFxuXHQnIzMzQ0NDQycsXG5cdCcjMzNDQ0ZGJyxcblx0JyM2NjAwQ0MnLFxuXHQnIzY2MDBGRicsXG5cdCcjNjYzM0NDJyxcblx0JyM2NjMzRkYnLFxuXHQnIzY2Q0MwMCcsXG5cdCcjNjZDQzMzJyxcblx0JyM5OTAwQ0MnLFxuXHQnIzk5MDBGRicsXG5cdCcjOTkzM0NDJyxcblx0JyM5OTMzRkYnLFxuXHQnIzk5Q0MwMCcsXG5cdCcjOTlDQzMzJyxcblx0JyNDQzAwMDAnLFxuXHQnI0NDMDAzMycsXG5cdCcjQ0MwMDY2Jyxcblx0JyNDQzAwOTknLFxuXHQnI0NDMDBDQycsXG5cdCcjQ0MwMEZGJyxcblx0JyNDQzMzMDAnLFxuXHQnI0NDMzMzMycsXG5cdCcjQ0MzMzY2Jyxcblx0JyNDQzMzOTknLFxuXHQnI0NDMzNDQycsXG5cdCcjQ0MzM0ZGJyxcblx0JyNDQzY2MDAnLFxuXHQnI0NDNjYzMycsXG5cdCcjQ0M5OTAwJyxcblx0JyNDQzk5MzMnLFxuXHQnI0NDQ0MwMCcsXG5cdCcjQ0NDQzMzJyxcblx0JyNGRjAwMDAnLFxuXHQnI0ZGMDAzMycsXG5cdCcjRkYwMDY2Jyxcblx0JyNGRjAwOTknLFxuXHQnI0ZGMDBDQycsXG5cdCcjRkYwMEZGJyxcblx0JyNGRjMzMDAnLFxuXHQnI0ZGMzMzMycsXG5cdCcjRkYzMzY2Jyxcblx0JyNGRjMzOTknLFxuXHQnI0ZGMzNDQycsXG5cdCcjRkYzM0ZGJyxcblx0JyNGRjY2MDAnLFxuXHQnI0ZGNjYzMycsXG5cdCcjRkY5OTAwJyxcblx0JyNGRjk5MzMnLFxuXHQnI0ZGQ0MwMCcsXG5cdCcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHQvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG5cdC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG5cdC8vIGV4cGxpY2l0bHlcblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmICh3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHdpbmRvdy5wcm9jZXNzLl9fbndqcykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcblx0Ly8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcblx0cmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG5cdFx0Ly8gSXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuXHRcdCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG5cdFx0Ly8gSXMgZmlyZWZveCA+PSB2MzE/XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG5cdFx0Ly8gRG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGFyZ3NbMF0gPSAodGhpcy51c2VDb2xvcnMgPyAnJWMnIDogJycpICtcblx0XHR0aGlzLm5hbWVzcGFjZSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyAlYycgOiAnICcpICtcblx0XHRhcmdzWzBdICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnJWMgJyA6ICcgJykgK1xuXHRcdCcrJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cblx0aWYgKCF0aGlzLnVzZUNvbG9ycykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuXHRhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTtcblxuXHQvLyBUaGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuXHQvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG5cdC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuXHRsZXQgaW5kZXggPSAwO1xuXHRsZXQgbGFzdEMgPSAwO1xuXHRhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgbWF0Y2ggPT4ge1xuXHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbmRleCsrO1xuXHRcdGlmIChtYXRjaCA9PT0gJyVjJykge1xuXHRcdFx0Ly8gV2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG5cdFx0XHQvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuXHRcdFx0bGFzdEMgPSBpbmRleDtcblx0XHR9XG5cdH0pO1xuXG5cdGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmRlYnVnKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICogSWYgYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhdmFpbGFibGUsIGZhbGxzIGJhY2tcbiAqIHRvIGBjb25zb2xlLmxvZ2AuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZXhwb3J0cy5sb2cgPSBjb25zb2xlLmRlYnVnIHx8IGNvbnNvbGUubG9nIHx8ICgoKSA9PiB7fSk7XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0dHJ5IHtcblx0XHRpZiAobmFtZXNwYWNlcykge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnNldEl0ZW0oJ2RlYnVnJywgbmFtZXNwYWNlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHI7XG5cdHRyeSB7XG5cdFx0ciA9IGV4cG9ydHMuc3RvcmFnZS5nZXRJdGVtKCdkZWJ1ZycpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxuXG5cdC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcblx0aWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG5cdFx0ciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG5cblx0cmV0dXJuIHI7XG59XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuXHR0cnkge1xuXHRcdC8vIFRWTUxLaXQgKEFwcGxlIFRWIEpTIFJ1bnRpbWUpIGRvZXMgbm90IGhhdmUgYSB3aW5kb3cgb2JqZWN0LCBqdXN0IGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHRcblx0XHQvLyBUaGUgQnJvd3NlciBhbHNvIGhhcyBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0LlxuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uICh2KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnJvci5tZXNzYWdlO1xuXHR9XG59O1xuIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKi9cblxuZnVuY3Rpb24gc2V0dXAoZW52KSB7XG5cdGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmRlZmF1bHQgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuY29lcmNlID0gY29lcmNlO1xuXHRjcmVhdGVEZWJ1Zy5kaXNhYmxlID0gZGlzYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlID0gZW5hYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGVkID0gZW5hYmxlZDtcblx0Y3JlYXRlRGVidWcuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXHRjcmVhdGVEZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblxuXHRPYmplY3Qua2V5cyhlbnYpLmZvckVhY2goa2V5ID0+IHtcblx0XHRjcmVhdGVEZWJ1Z1trZXldID0gZW52W2tleV07XG5cdH0pO1xuXG5cdC8qKlxuXHQqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuXHQqL1xuXG5cdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0LyoqXG5cdCogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuXHQqXG5cdCogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuXHQqL1xuXHRjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzID0ge307XG5cblx0LyoqXG5cdCogU2VsZWN0cyBhIGNvbG9yIGZvciBhIGRlYnVnIG5hbWVzcGFjZVxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgVGhlIG5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBmb3IgdGhlIGRlYnVnIGluc3RhbmNlIHRvIGJlIGNvbG9yZWRcblx0KiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfSBBbiBBTlNJIGNvbG9yIGNvZGUgZm9yIHRoZSBnaXZlbiBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG5cdFx0bGV0IGhhc2ggPSAwO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0aGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcblx0XHR9XG5cblx0XHRyZXR1cm4gY3JlYXRlRGVidWcuY29sb3JzW01hdGguYWJzKGhhc2gpICUgY3JlYXRlRGVidWcuY29sb3JzLmxlbmd0aF07XG5cdH1cblx0Y3JlYXRlRGVidWcuc2VsZWN0Q29sb3IgPSBzZWxlY3RDb2xvcjtcblxuXHQvKipcblx0KiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAcmV0dXJuIHtGdW5jdGlvbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblx0XHRsZXQgcHJldlRpbWU7XG5cdFx0bGV0IGVuYWJsZU92ZXJyaWRlID0gbnVsbDtcblxuXHRcdGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHtcblx0XHRcdC8vIERpc2FibGVkP1xuXHRcdFx0aWYgKCFkZWJ1Zy5lbmFibGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc2VsZiA9IGRlYnVnO1xuXG5cdFx0XHQvLyBTZXQgYGRpZmZgIHRpbWVzdGFtcFxuXHRcdFx0Y29uc3QgY3VyciA9IE51bWJlcihuZXcgRGF0ZSgpKTtcblx0XHRcdGNvbnN0IG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcblx0XHRcdHNlbGYuZGlmZiA9IG1zO1xuXHRcdFx0c2VsZi5wcmV2ID0gcHJldlRpbWU7XG5cdFx0XHRzZWxmLmN1cnIgPSBjdXJyO1xuXHRcdFx0cHJldlRpbWUgPSBjdXJyO1xuXG5cdFx0XHRhcmdzWzBdID0gY3JlYXRlRGVidWcuY29lcmNlKGFyZ3NbMF0pO1xuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIEFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG5cdFx0XHRcdGFyZ3MudW5zaGlmdCgnJU8nKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcblx0XHRcdGxldCBpbmRleCA9IDA7XG5cdFx0XHRhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgKG1hdGNoLCBmb3JtYXQpID0+IHtcblx0XHRcdFx0Ly8gSWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuXHRcdFx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZURlYnVnLmZvcm1hdHRlcnNbZm9ybWF0XTtcblx0XHRcdFx0aWYgKHR5cGVvZiBmb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjb25zdCB2YWwgPSBhcmdzW2luZGV4XTtcblx0XHRcdFx0XHRtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cblx0XHRcdFx0XHQvLyBOb3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG5cdFx0XHRcdFx0YXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdGluZGV4LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG5cdFx0XHRjcmVhdGVEZWJ1Zy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cblx0XHRcdGNvbnN0IGxvZ0ZuID0gc2VsZi5sb2cgfHwgY3JlYXRlRGVidWcubG9nO1xuXHRcdFx0bG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0ZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXHRcdGRlYnVnLnVzZUNvbG9ycyA9IGNyZWF0ZURlYnVnLnVzZUNvbG9ycygpO1xuXHRcdGRlYnVnLmNvbG9yID0gY3JlYXRlRGVidWcuc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy5leHRlbmQgPSBleHRlbmQ7XG5cdFx0ZGVidWcuZGVzdHJveSA9IGNyZWF0ZURlYnVnLmRlc3Ryb3k7IC8vIFhYWCBUZW1wb3JhcnkuIFdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGRlYnVnLCAnZW5hYmxlZCcsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuXHRcdFx0Z2V0OiAoKSA9PiBlbmFibGVPdmVycmlkZSA9PT0gbnVsbCA/IGNyZWF0ZURlYnVnLmVuYWJsZWQobmFtZXNwYWNlKSA6IGVuYWJsZU92ZXJyaWRlLFxuXHRcdFx0c2V0OiB2ID0+IHtcblx0XHRcdFx0ZW5hYmxlT3ZlcnJpZGUgPSB2O1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gRW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcblx0XHRpZiAodHlwZW9mIGNyZWF0ZURlYnVnLmluaXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluaXQoZGVidWcpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWJ1Zztcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dGVuZChuYW1lc3BhY2UsIGRlbGltaXRlcikge1xuXHRcdGNvbnN0IG5ld0RlYnVnID0gY3JlYXRlRGVidWcodGhpcy5uYW1lc3BhY2UgKyAodHlwZW9mIGRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnOicgOiBkZWxpbWl0ZXIpICsgbmFtZXNwYWNlKTtcblx0XHRuZXdEZWJ1Zy5sb2cgPSB0aGlzLmxvZztcblx0XHRyZXR1cm4gbmV3RGVidWc7XG5cdH1cblxuXHQvKipcblx0KiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG5cdCogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcblx0XHRjcmVhdGVEZWJ1Zy5zYXZlKG5hbWVzcGFjZXMpO1xuXG5cdFx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0XHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdFx0bGV0IGk7XG5cdFx0Y29uc3Qgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuXHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKCFzcGxpdFtpXSkge1xuXHRcdFx0XHQvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0bmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG5cblx0XHRcdGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuXHQqXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRjb25zdCBuYW1lc3BhY2VzID0gW1xuXHRcdFx0Li4uY3JlYXRlRGVidWcubmFtZXMubWFwKHRvTmFtZXNwYWNlKSxcblx0XHRcdC4uLmNyZWF0ZURlYnVnLnNraXBzLm1hcCh0b05hbWVzcGFjZSkubWFwKG5hbWVzcGFjZSA9PiAnLScgKyBuYW1lc3BhY2UpXG5cdFx0XS5qb2luKCcsJyk7XG5cdFx0Y3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcblx0XHRyZXR1cm4gbmFtZXNwYWNlcztcblx0fVxuXG5cdC8qKlxuXHQqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7Qm9vbGVhbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcblx0XHRpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBpO1xuXHRcdGxldCBsZW47XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBDb252ZXJ0IHJlZ2V4cCB0byBuYW1lc3BhY2Vcblx0KlxuXHQqIEBwYXJhbSB7UmVnRXhwfSByZWd4ZXBcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiB0b05hbWVzcGFjZShyZWdleHApIHtcblx0XHRyZXR1cm4gcmVnZXhwLnRvU3RyaW5nKClcblx0XHRcdC5zdWJzdHJpbmcoMiwgcmVnZXhwLnRvU3RyaW5nKCkubGVuZ3RoIC0gMilcblx0XHRcdC5yZXBsYWNlKC9cXC5cXCpcXD8kLywgJyonKTtcblx0fVxuXG5cdC8qKlxuXHQqIENvZXJjZSBgdmFsYC5cblx0KlxuXHQqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuXHQqIEByZXR1cm4ge01peGVkfVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG5cdFx0aWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0LyoqXG5cdCogWFhYIERPIE5PVCBVU0UuIFRoaXMgaXMgYSB0ZW1wb3Jhcnkgc3R1YiBmdW5jdGlvbi5cblx0KiBYWFggSXQgV0lMTCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cdCovXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0Y29uc29sZS53YXJuKCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJyk7XG5cdH1cblxuXHRjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcblxuXHRyZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG4iLCIvKipcbiAqIERldGVjdCBFbGVjdHJvbiByZW5kZXJlciAvIG53anMgcHJvY2Vzcywgd2hpY2ggaXMgbm9kZSwgYnV0IHdlIHNob3VsZFxuICogdHJlYXQgYXMgYSBicm93c2VyLlxuICovXG5cbmlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHByb2Nlc3MuYnJvd3NlciA9PT0gdHJ1ZSB8fCBwcm9jZXNzLl9fbndqcykge1xuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vYnJvd3Nlci5qcycpO1xufSBlbHNlIHtcblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL25vZGUuanMnKTtcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG5jb25zdCB0dHkgPSByZXF1aXJlKCd0dHknKTtcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgTm9kZS5qcyBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cblxuZXhwb3J0cy5pbml0ID0gaW5pdDtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLmRlc3Ryb3kgPSB1dGlsLmRlcHJlY2F0ZShcblx0KCkgPT4ge30sXG5cdCdJbnN0YW5jZSBtZXRob2QgYGRlYnVnLmRlc3Ryb3koKWAgaXMgZGVwcmVjYXRlZCBhbmQgbm8gbG9uZ2VyIGRvZXMgYW55dGhpbmcuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIGBkZWJ1Z2AuJ1xuKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbNiwgMiwgMywgNCwgNSwgMV07XG5cbnRyeSB7XG5cdC8vIE9wdGlvbmFsIGRlcGVuZGVuY3kgKGFzIGluLCBkb2Vzbid0IG5lZWQgdG8gYmUgaW5zdGFsbGVkLCBOT1QgbGlrZSBvcHRpb25hbERlcGVuZGVuY2llcyBpbiBwYWNrYWdlLmpzb24pXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcblx0Y29uc3Qgc3VwcG9ydHNDb2xvciA9IHJlcXVpcmUoJ3N1cHBvcnRzLWNvbG9yJyk7XG5cblx0aWYgKHN1cHBvcnRzQ29sb3IgJiYgKHN1cHBvcnRzQ29sb3Iuc3RkZXJyIHx8IHN1cHBvcnRzQ29sb3IpLmxldmVsID49IDIpIHtcblx0XHRleHBvcnRzLmNvbG9ycyA9IFtcblx0XHRcdDIwLFxuXHRcdFx0MjEsXG5cdFx0XHQyNixcblx0XHRcdDI3LFxuXHRcdFx0MzIsXG5cdFx0XHQzMyxcblx0XHRcdDM4LFxuXHRcdFx0MzksXG5cdFx0XHQ0MCxcblx0XHRcdDQxLFxuXHRcdFx0NDIsXG5cdFx0XHQ0Myxcblx0XHRcdDQ0LFxuXHRcdFx0NDUsXG5cdFx0XHQ1Nixcblx0XHRcdDU3LFxuXHRcdFx0NjIsXG5cdFx0XHQ2Myxcblx0XHRcdDY4LFxuXHRcdFx0NjksXG5cdFx0XHQ3NCxcblx0XHRcdDc1LFxuXHRcdFx0NzYsXG5cdFx0XHQ3Nyxcblx0XHRcdDc4LFxuXHRcdFx0NzksXG5cdFx0XHQ4MCxcblx0XHRcdDgxLFxuXHRcdFx0OTIsXG5cdFx0XHQ5Myxcblx0XHRcdDk4LFxuXHRcdFx0OTksXG5cdFx0XHQxMTIsXG5cdFx0XHQxMTMsXG5cdFx0XHQxMjgsXG5cdFx0XHQxMjksXG5cdFx0XHQxMzQsXG5cdFx0XHQxMzUsXG5cdFx0XHQxNDgsXG5cdFx0XHQxNDksXG5cdFx0XHQxNjAsXG5cdFx0XHQxNjEsXG5cdFx0XHQxNjIsXG5cdFx0XHQxNjMsXG5cdFx0XHQxNjQsXG5cdFx0XHQxNjUsXG5cdFx0XHQxNjYsXG5cdFx0XHQxNjcsXG5cdFx0XHQxNjgsXG5cdFx0XHQxNjksXG5cdFx0XHQxNzAsXG5cdFx0XHQxNzEsXG5cdFx0XHQxNzIsXG5cdFx0XHQxNzMsXG5cdFx0XHQxNzgsXG5cdFx0XHQxNzksXG5cdFx0XHQxODQsXG5cdFx0XHQxODUsXG5cdFx0XHQxOTYsXG5cdFx0XHQxOTcsXG5cdFx0XHQxOTgsXG5cdFx0XHQxOTksXG5cdFx0XHQyMDAsXG5cdFx0XHQyMDEsXG5cdFx0XHQyMDIsXG5cdFx0XHQyMDMsXG5cdFx0XHQyMDQsXG5cdFx0XHQyMDUsXG5cdFx0XHQyMDYsXG5cdFx0XHQyMDcsXG5cdFx0XHQyMDgsXG5cdFx0XHQyMDksXG5cdFx0XHQyMTQsXG5cdFx0XHQyMTUsXG5cdFx0XHQyMjAsXG5cdFx0XHQyMjFcblx0XHRdO1xuXHR9XG59IGNhdGNoIChlcnJvcikge1xuXHQvLyBTd2FsbG93IC0gd2Ugb25seSBjYXJlIGlmIGBzdXBwb3J0cy1jb2xvcmAgaXMgYXZhaWxhYmxlOyBpdCBkb2Vzbid0IGhhdmUgdG8gYmUuXG59XG5cbi8qKlxuICogQnVpbGQgdXAgdGhlIGRlZmF1bHQgYGluc3BlY3RPcHRzYCBvYmplY3QgZnJvbSB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGVzLlxuICpcbiAqICAgJCBERUJVR19DT0xPUlM9bm8gREVCVUdfREVQVEg9MTAgREVCVUdfU0hPV19ISURERU49ZW5hYmxlZCBub2RlIHNjcmlwdC5qc1xuICovXG5cbmV4cG9ydHMuaW5zcGVjdE9wdHMgPSBPYmplY3Qua2V5cyhwcm9jZXNzLmVudikuZmlsdGVyKGtleSA9PiB7XG5cdHJldHVybiAvXmRlYnVnXy9pLnRlc3Qoa2V5KTtcbn0pLnJlZHVjZSgob2JqLCBrZXkpID0+IHtcblx0Ly8gQ2FtZWwtY2FzZVxuXHRjb25zdCBwcm9wID0ga2V5XG5cdFx0LnN1YnN0cmluZyg2KVxuXHRcdC50b0xvd2VyQ2FzZSgpXG5cdFx0LnJlcGxhY2UoL18oW2Etel0pL2csIChfLCBrKSA9PiB7XG5cdFx0XHRyZXR1cm4gay50b1VwcGVyQ2FzZSgpO1xuXHRcdH0pO1xuXG5cdC8vIENvZXJjZSBzdHJpbmcgdmFsdWUgaW50byBKUyB2YWx1ZVxuXHRsZXQgdmFsID0gcHJvY2Vzcy5lbnZba2V5XTtcblx0aWYgKC9eKHllc3xvbnx0cnVlfGVuYWJsZWQpJC9pLnRlc3QodmFsKSkge1xuXHRcdHZhbCA9IHRydWU7XG5cdH0gZWxzZSBpZiAoL14obm98b2ZmfGZhbHNlfGRpc2FibGVkKSQvaS50ZXN0KHZhbCkpIHtcblx0XHR2YWwgPSBmYWxzZTtcblx0fSBlbHNlIGlmICh2YWwgPT09ICdudWxsJykge1xuXHRcdHZhbCA9IG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0dmFsID0gTnVtYmVyKHZhbCk7XG5cdH1cblxuXHRvYmpbcHJvcF0gPSB2YWw7XG5cdHJldHVybiBvYmo7XG59LCB7fSk7XG5cbi8qKlxuICogSXMgc3Rkb3V0IGEgVFRZPyBDb2xvcmVkIG91dHB1dCBpcyBlbmFibGVkIHdoZW4gYHRydWVgLlxuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcblx0cmV0dXJuICdjb2xvcnMnIGluIGV4cG9ydHMuaW5zcGVjdE9wdHMgP1xuXHRcdEJvb2xlYW4oZXhwb3J0cy5pbnNwZWN0T3B0cy5jb2xvcnMpIDpcblx0XHR0dHkuaXNhdHR5KHByb2Nlc3Muc3RkZXJyLmZkKTtcbn1cblxuLyoqXG4gKiBBZGRzIEFOU0kgY29sb3IgZXNjYXBlIGNvZGVzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcblx0Y29uc3Qge25hbWVzcGFjZTogbmFtZSwgdXNlQ29sb3JzfSA9IHRoaXM7XG5cblx0aWYgKHVzZUNvbG9ycykge1xuXHRcdGNvbnN0IGMgPSB0aGlzLmNvbG9yO1xuXHRcdGNvbnN0IGNvbG9yQ29kZSA9ICdcXHUwMDFCWzMnICsgKGMgPCA4ID8gYyA6ICc4OzU7JyArIGMpO1xuXHRcdGNvbnN0IHByZWZpeCA9IGAgICR7Y29sb3JDb2RlfTsxbSR7bmFtZX0gXFx1MDAxQlswbWA7XG5cblx0XHRhcmdzWzBdID0gcHJlZml4ICsgYXJnc1swXS5zcGxpdCgnXFxuJykuam9pbignXFxuJyArIHByZWZpeCk7XG5cdFx0YXJncy5wdXNoKGNvbG9yQ29kZSArICdtKycgKyBtb2R1bGUuZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpICsgJ1xcdTAwMUJbMG0nKTtcblx0fSBlbHNlIHtcblx0XHRhcmdzWzBdID0gZ2V0RGF0ZSgpICsgbmFtZSArICcgJyArIGFyZ3NbMF07XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcblx0aWYgKGV4cG9ydHMuaW5zcGVjdE9wdHMuaGlkZURhdGUpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0cmV0dXJuIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSArICcgJztcbn1cblxuLyoqXG4gKiBJbnZva2VzIGB1dGlsLmZvcm1hdCgpYCB3aXRoIHRoZSBzcGVjaWZpZWQgYXJndW1lbnRzIGFuZCB3cml0ZXMgdG8gc3RkZXJyLlxuICovXG5cbmZ1bmN0aW9uIGxvZyguLi5hcmdzKSB7XG5cdHJldHVybiBwcm9jZXNzLnN0ZGVyci53cml0ZSh1dGlsLmZvcm1hdCguLi5hcmdzKSArICdcXG4nKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuXHRpZiAobmFtZXNwYWNlcykge1xuXHRcdHByb2Nlc3MuZW52LkRFQlVHID0gbmFtZXNwYWNlcztcblx0fSBlbHNlIHtcblx0XHQvLyBJZiB5b3Ugc2V0IGEgcHJvY2Vzcy5lbnYgZmllbGQgdG8gbnVsbCBvciB1bmRlZmluZWQsIGl0IGdldHMgY2FzdCB0byB0aGVcblx0XHQvLyBzdHJpbmcgJ251bGwnIG9yICd1bmRlZmluZWQnLiBKdXN0IGRlbGV0ZSBpbnN0ZWFkLlxuXHRcdGRlbGV0ZSBwcm9jZXNzLmVudi5ERUJVRztcblx0fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG5cdHJldHVybiBwcm9jZXNzLmVudi5ERUJVRztcbn1cblxuLyoqXG4gKiBJbml0IGxvZ2ljIGZvciBgZGVidWdgIGluc3RhbmNlcy5cbiAqXG4gKiBDcmVhdGUgYSBuZXcgYGluc3BlY3RPcHRzYCBvYmplY3QgaW4gY2FzZSBgdXNlQ29sb3JzYCBpcyBzZXRcbiAqIGRpZmZlcmVudGx5IGZvciBhIHBhcnRpY3VsYXIgYGRlYnVnYCBpbnN0YW5jZS5cbiAqL1xuXG5mdW5jdGlvbiBpbml0KGRlYnVnKSB7XG5cdGRlYnVnLmluc3BlY3RPcHRzID0ge307XG5cblx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuaW5zcGVjdE9wdHMpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRkZWJ1Zy5pbnNwZWN0T3B0c1trZXlzW2ldXSA9IGV4cG9ydHMuaW5zcGVjdE9wdHNba2V5c1tpXV07XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbW1vbicpKGV4cG9ydHMpO1xuXG5jb25zdCB7Zm9ybWF0dGVyc30gPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBNYXAgJW8gdG8gYHV0aWwuaW5zcGVjdCgpYCwgYWxsIG9uIGEgc2luZ2xlIGxpbmUuXG4gKi9cblxuZm9ybWF0dGVycy5vID0gZnVuY3Rpb24gKHYpIHtcblx0dGhpcy5pbnNwZWN0T3B0cy5jb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblx0cmV0dXJuIHV0aWwuaW5zcGVjdCh2LCB0aGlzLmluc3BlY3RPcHRzKVxuXHRcdC5zcGxpdCgnXFxuJylcblx0XHQubWFwKHN0ciA9PiBzdHIudHJpbSgpKVxuXHRcdC5qb2luKCcgJyk7XG59O1xuXG4vKipcbiAqIE1hcCAlTyB0byBgdXRpbC5pbnNwZWN0KClgLCBhbGxvd2luZyBtdWx0aXBsZSBsaW5lcyBpZiBuZWVkZWQuXG4gKi9cblxuZm9ybWF0dGVycy5PID0gZnVuY3Rpb24gKHYpIHtcblx0dGhpcy5pbnNwZWN0T3B0cy5jb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblx0cmV0dXJuIHV0aWwuaW5zcGVjdCh2LCB0aGlzLmluc3BlY3RPcHRzKTtcbn07XG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsKSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oLT8oPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsImltcG9ydCBpbyBmcm9tIFwiLi9idWlsZC9pbmRleC5qc1wiO1xuXG5leHBvcnQgY29uc3QgTWFuYWdlciA9IGlvLk1hbmFnZXI7XG5leHBvcnQgeyBpbyB9O1xuZXhwb3J0IGRlZmF1bHQgaW87XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWNrbzJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqb2lcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhcnNldXJpXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZWVkcmFuZG9tXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaW1wbGV4LW5vaXNlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tcGFyc2VyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdGF0cy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3VwcG9ydHMtY29sb3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRocmVlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0dHlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=