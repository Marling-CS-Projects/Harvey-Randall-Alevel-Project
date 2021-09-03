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

  for (var i = 0, l = geometry.attributes.position.array.length / 3; i < l; i++) {
    // Get Data position
    const vertex = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
    vertex.fromBufferAttribute(positionAttribute, i);
    plane2.localToWorld(vertex); // Check Height from Perlin Noise Generator

    let height = fbm.get2(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2((vertex.x + Position.x) * divisor, (vertex.y - Position.y) * divisor)) * gain * 4;
    console.log("Terrain", new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(vertex.x + Position.x, vertex.y - Position.y), height); // Set the height accordingly

    geometry.attributes.position.array[i * 3 + 2] = height; // Update Vertice colours accordinly

    if (height > 100) {
      colours.push(1, 1, 1);
    } else if (height > 50) {
      colours.push(0.56, 0.54, 0.48);
    } else if (height < 2) {
      let heightSecondary = simplex.get2(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2((vertex.x + Position.x) * divisor, (vertex.y - Position.y) * divisor)) * 0.75;
      geometry.attributes.position.array[i * 3 + 2] = heightSecondary;
      colours.push(0, (0,_Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_1__.randomIntFromInterval)(400, 500) / 1000, (0,_Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_1__.randomIntFromInterval)(700, 800) / 1000);
    } else {
      colours.push(0.56, 0.68, 0.166);
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

  let height = fbm.get2(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(position.x * divisor, position.z * divisor)) * gain * 4;
  console.log("tree", new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(750, 750), fbm.get2(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(750 * divisor, 750 * divisor)) * gain * 4);
  /*let cube = debugCube()
  scene.add(cube)
  cube.position.set(position.x , height, position.z)
  cube.material.color = new Color(height*2)*/

  return height;
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
        (0,_staticAssets_treeBuilder__WEBPACK_IMPORTED_MODULE_3__.GenerateTrees)(1000, scene, new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(ChunkYourIn.x - 250, 250, ChunkYourIn.y - 250), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(ChunkYourIn.x + 250, 250, ChunkYourIn.y + 250), seed, 120, 0.1, ChunkYourIn);
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
  palmTree = palmTree.scene.children[0];
  palmTree.children[0].material = trunk;

  for (let i = 0; i < num; i++) {
    let randomVector = (0,_Algorithms_VectorUtils__WEBPACK_IMPORTED_MODULE_3__.randomVectorBetweenPoints2D)(start, bounds);
    randomVector.y = 50;
    let height = (0,_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_6__.getTerrainHeight)(randomVector, seed, gain, divisor, scene);

    if (height > 2 && height < 20) {
      let placeTreeOut = placeTree(tree, height, randomVector);
      scene.add(placeTreeOut.newTree);
    } else if (height < 2 && height > 0) {
      let placeTreeOut = placeTree(tree, height, randomVector);
      scene.add(placeTreeOut.newTree);
    } else if (height > 20) {//meshes.push(placeTree(palmTree, intersects))
      //group.add(placeTreeOut.newTree)
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
    let debubCube = (0,_components_Core_API_gemotryManager__WEBPACK_IMPORTED_MODULE_10__.debugCube)();
    SceneToGet.add(debubCube);

    var animate = async function () {
      stats.begin();
      requestAnimationFrame(animate);
      debubCube.position.set(Camera.position.x, (0,_components_gameFundalmentals_ProceduleTerrain__WEBPACK_IMPORTED_MODULE_11__.getTerrainHeight)(Camera.position, recievedSeed, 120, 0.1), Camera.position.z); // Update all moving parts

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
      lineNumber: 213,
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
      lineNumber: 221,
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
      lineNumber: 245,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: ref => setChild(ref)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 212,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9BbGdvcml0aG1zL01hdGhVdGlscy5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9BbGdvcml0aG1zL1ByaW9yaXR5UXVldWUuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvQWxnb3JpdGhtcy9WZWN0b3JNYXRocy50cyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9BbGdvcml0aG1zL1ZlY3RvclV0aWxzLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0FsZ29yaXRobXMvZGVnVG9SYWQuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvQWxnb3JpdGhtcy9tZXNoTWVyZ2VyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0NvbnRleHQvc29ja2V0aW9Db250ZXh0LmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9HTEJMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL01lc2hNZXJnZXIudHMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL2dsYkNvcmUuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL3V0aWxzLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0NvcmUtQVBJL0Nvbm5lY3RBUEkuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvQ29yZS1BUEkvTGlnaHRpbmdNYW5hZ2VyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0NvcmUtQVBJL1Blcmxpbk5vaXNlL1BlcmxpbmdOb2lzZS5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9Db3JlLUFQSS9SZW5kZXJpbmdIYW5kbGVyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0NvcmUtQVBJL1dvcmtlclNldHVwLnRzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL0NvcmUtQVBJL2dlbW90cnlNYW5hZ2VyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL1NjZW5lcy9NYWluU2NlbmVIYW5kbGVyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL0RheU5pZ2h0Q3ljbGUuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvUHJvY2VkdWxlVGVycmFpbi5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC90ZXJyYWluQ2h1bmtyaXNlci5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9UZXJyYWluTWFuYWdlbWVudC91dGlscy9HZW5lcmF0ZUJpb21lc01hcC50cyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9jbG91ZHMuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvbXVsdGlwbGF5ZXIvTWFpblBsYXllckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvbmFtZXRhZy5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9wbGFuZUhhbmRsZXIvTWFpblBsYW5lLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL3JvdGF0ZUFyb3VuZFBvaW50LmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL3N0YXJzLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9jb21wb25lbnRzL2dhbWVGdW5kYWxtZW50YWxzL3N0YXRpY0Fzc2V0cy90cmVlQnVpbGRlci5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vY29tcG9uZW50cy9nYW1lVUkvZ2FtZUZlZWQuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL3BhZ2VzL3Rlc3QuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9tYW5hZ2VyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9vbi5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvc29ja2V0LmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC90eXBlZC1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL3VybC5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9ub2RlLmpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L3dyYXBwZXIubWpzIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvZXh0ZXJuYWwgXCJiYWNrbzJcIiIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxL2V4dGVybmFsIFwiY29tcG9uZW50LWVtaXR0ZXJcIiIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxL2V4dGVybmFsIFwiZW5naW5lLmlvLWNsaWVudFwiIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvZXh0ZXJuYWwgXCJqb2lcIiIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxL2V4dGVybmFsIFwicGFyc2V1cmlcIiIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS9leHRlcm5hbCBcInNlZWRyYW5kb21cIiIsIndlYnBhY2s6Ly9hbGV2ZWxfMjAyMC0yMDIxL2V4dGVybmFsIFwic2ltcGxleC1ub2lzZVwiIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvZXh0ZXJuYWwgXCJzb2NrZXQuaW8tcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS9leHRlcm5hbCBcInN0YXRzLmpzXCIiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS9leHRlcm5hbCBcInN1cHBvcnRzLWNvbG9yXCIiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS9leHRlcm5hbCBcInRocmVlXCIiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS9leHRlcm5hbCBcInR0eVwiIiwid2VicGFjazovL2FsZXZlbF8yMDIwLTIwMjEvZXh0ZXJuYWwgXCJ1dGlsXCIiLCJ3ZWJwYWNrOi8vYWxldmVsXzIwMjAtMjAyMS9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6WyJyb3VuZG51bSIsIm51bSIsInRvTnVtIiwiTWF0aCIsInJvdW5kIiwid2FpdCIsInZhbCIsIlByb21pc2UiLCJyZXMiLCJyZWoiLCJzZXRUaW1lb3V0IiwidG9wIiwicGFyZW50IiwiaSIsImxlZnQiLCJyaWdodCIsIlByaW9yaXR5UXVldWUiLCJjb25zdHJ1Y3RvciIsImNvbXBhcmF0b3IiLCJhIiwiYiIsIl9oZWFwIiwiX2NvbXBhcmF0b3IiLCJzaXplIiwibGVuZ3RoIiwiaXNFbXB0eSIsInBlZWsiLCJwYXJzZUludCIsInB1c2giLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJfc2lmdFVwIiwicG9wIiwicG9wcGVkVmFsdWUiLCJib3R0b20iLCJfc3dhcCIsIl9zaWZ0RG93biIsInJlcGxhY2UiLCJyZXBsYWNlZFZhbHVlIiwiX2dyZWF0ZXIiLCJqIiwibm9kZSIsIm1heENoaWxkIiwiTXVsdGlwbHlWZWN0b3IyIiwidmVjdG9yIiwibXVsdGlwbGllciIsIlZlY3RvcjIiLCJ4IiwieSIsIk11bHRpcGx5VmVjdG9yMyIsIlZlY3RvcjMiLCJ6IiwicmFuZG9tSW50RnJvbUludGVydmFsIiwibWluIiwibWF4IiwibXlybmciLCJzZWVkcmFuZG9tIiwiZmxvb3IiLCJyYW5kb21WZWN0b3JCZXR3ZWVuUG9pbnRzMkQiLCJWZWN0b3IxIiwicmFkaWFudHMiLCJkZWdyZWVzIiwiUEkiLCJyYWRpYW5zIiwiX21lcmdlTWVzaGVzIiwibWVzaGVzIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCIsIm1hcCIsImUiLCJjaGlsZHJlbiIsImZsYXQiLCJpbnB1dEdlbyIsIkJ1ZmZlckdlb21ldHJ5VXRpbHMiLCJNZXNoIiwiTWVzaExhbWJlcnRNYXRlcmlhbCIsImNvbG9yIiwiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcHBXcmFwcGVyIiwic2hhcmVkU3RhdGUiLCJpbyIsInVzZUFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiYWRkR0xCRmlsZSIsIml0ZW0iLCJzY2VuZSIsInJlc29sdmUiLCJyZWplY3QiLCJsb2FkZXIiLCJHTFRGTG9hZGVyIiwibG9hZCIsImdsdGYiLCJhbmltYXRpb25zIiwic2NlbmVzIiwiY2FtZXJhcyIsImFzc2V0IiwieGhyIiwibG9hZGVkIiwidG90YWwiLCJlcnJvciIsIk1lcmdlTWVzaGVzIiwiaW5wdXQiLCJsb2NhdGlvbiIsImFwcGx5TWF0cml4NCIsIk1hdHJpeDQiLCJtYWtlVHJhbnNsYXRpb24iLCJidWZmZXJHZW9tIiwibWFuYWdlciIsIkxvYWRlciIsImRyYWNvTG9hZGVyIiwia3R4MkxvYWRlciIsIm1lc2hvcHREZWNvZGVyIiwicGx1Z2luQ2FsbGJhY2tzIiwicmVnaXN0ZXIiLCJwYXJzZXIiLCJHTFRGTWF0ZXJpYWxzQ2xlYXJjb2F0RXh0ZW5zaW9uIiwiR0xURlRleHR1cmVCYXNpc1VFeHRlbnNpb24iLCJHTFRGVGV4dHVyZVdlYlBFeHRlbnNpb24iLCJHTFRGTWF0ZXJpYWxzVHJhbnNtaXNzaW9uRXh0ZW5zaW9uIiwiR0xURkxpZ2h0c0V4dGVuc2lvbiIsIkdMVEZNZXNob3B0Q29tcHJlc3Npb24iLCJwcm90b3R5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJjcmVhdGUiLCJ1cmwiLCJvbkxvYWQiLCJvblByb2dyZXNzIiwib25FcnJvciIsInNjb3BlIiwicmVzb3VyY2VQYXRoIiwicGF0aCIsIkxvYWRlclV0aWxzIiwiaXRlbVN0YXJ0IiwiX29uRXJyb3IiLCJpdGVtRXJyb3IiLCJpdGVtRW5kIiwiRmlsZUxvYWRlciIsInNldFBhdGgiLCJzZXRSZXNwb25zZVR5cGUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVxdWVzdEhlYWRlciIsInNldFdpdGhDcmVkZW50aWFscyIsIndpdGhDcmVkZW50aWFscyIsImRhdGEiLCJwYXJzZSIsInNldERSQUNPTG9hZGVyIiwic2V0RERTTG9hZGVyIiwiRXJyb3IiLCJzZXRLVFgyTG9hZGVyIiwic2V0TWVzaG9wdERlY29kZXIiLCJjYWxsYmFjayIsImluZGV4T2YiLCJ1bnJlZ2lzdGVyIiwic3BsaWNlIiwiY29udGVudCIsImV4dGVuc2lvbnMiLCJwbHVnaW5zIiwibWFnaWMiLCJVaW50OEFycmF5IiwiQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTUFHSUMiLCJFWFRFTlNJT05TIiwiS0hSX0JJTkFSWV9HTFRGIiwiR0xURkJpbmFyeUV4dGVuc2lvbiIsImpzb24iLCJKU09OIiwidW5kZWZpbmVkIiwidmVyc2lvbiIsIkdMVEZQYXJzZXIiLCJjcm9zc09yaWdpbiIsImZpbGVMb2FkZXIiLCJwbHVnaW4iLCJuYW1lIiwiZXh0ZW5zaW9uc1VzZWQiLCJleHRlbnNpb25OYW1lIiwiZXh0ZW5zaW9uc1JlcXVpcmVkIiwiS0hSX01BVEVSSUFMU19VTkxJVCIsIkdMVEZNYXRlcmlhbHNVbmxpdEV4dGVuc2lvbiIsIktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1MiLCJHTFRGTWF0ZXJpYWxzUGJyU3BlY3VsYXJHbG9zc2luZXNzRXh0ZW5zaW9uIiwiS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT04iLCJHTFRGRHJhY29NZXNoQ29tcHJlc3Npb25FeHRlbnNpb24iLCJLSFJfVEVYVFVSRV9UUkFOU0ZPUk0iLCJHTFRGVGV4dHVyZVRyYW5zZm9ybUV4dGVuc2lvbiIsIktIUl9NRVNIX1FVQU5USVpBVElPTiIsIkdMVEZNZXNoUXVhbnRpemF0aW9uRXh0ZW5zaW9uIiwid2FybiIsInNldEV4dGVuc2lvbnMiLCJzZXRQbHVnaW5zIiwiR0xURlJlZ2lzdHJ5Iiwib2JqZWN0cyIsImdldCIsImtleSIsImFkZCIsIm9iamVjdCIsInJlbW92ZSIsInJlbW92ZUFsbCIsIktIUl9MSUdIVFNfUFVOQ1RVQUwiLCJLSFJfTUFURVJJQUxTX0NMRUFSQ09BVCIsIktIUl9NQVRFUklBTFNfVFJBTlNNSVNTSU9OIiwiS0hSX1RFWFRVUkVfQkFTSVNVIiwiRVhUX1RFWFRVUkVfV0VCUCIsIkVYVF9NRVNIT1BUX0NPTVBSRVNTSU9OIiwiY2FjaGUiLCJyZWZzIiwidXNlcyIsIl9tYXJrRGVmcyIsIm5vZGVEZWZzIiwibm9kZXMiLCJub2RlSW5kZXgiLCJub2RlTGVuZ3RoIiwibm9kZURlZiIsImxpZ2h0IiwiX2FkZE5vZGVSZWYiLCJfbG9hZExpZ2h0IiwibGlnaHRJbmRleCIsImNhY2hlS2V5IiwiZGVwZW5kZW5jeSIsImxpZ2h0RGVmcyIsImxpZ2h0cyIsImxpZ2h0RGVmIiwibGlnaHROb2RlIiwiQ29sb3IiLCJmcm9tQXJyYXkiLCJyYW5nZSIsInR5cGUiLCJEaXJlY3Rpb25hbExpZ2h0IiwidGFyZ2V0IiwicG9zaXRpb24iLCJzZXQiLCJQb2ludExpZ2h0IiwiZGlzdGFuY2UiLCJTcG90TGlnaHQiLCJzcG90IiwiaW5uZXJDb25lQW5nbGUiLCJvdXRlckNvbmVBbmdsZSIsImFuZ2xlIiwicGVudW1icmEiLCJkZWNheSIsImludGVuc2l0eSIsImNyZWF0ZVVuaXF1ZU5hbWUiLCJjcmVhdGVOb2RlQXR0YWNobWVudCIsInNlbGYiLCJ0aGVuIiwiX2dldE5vZGVSZWYiLCJnZXRNYXRlcmlhbFR5cGUiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImV4dGVuZFBhcmFtcyIsIm1hdGVyaWFsUGFyYW1zIiwibWF0ZXJpYWxEZWYiLCJwZW5kaW5nIiwib3BhY2l0eSIsIm1ldGFsbGljUm91Z2huZXNzIiwicGJyTWV0YWxsaWNSb3VnaG5lc3MiLCJBcnJheSIsImlzQXJyYXkiLCJiYXNlQ29sb3JGYWN0b3IiLCJhcnJheSIsImJhc2VDb2xvclRleHR1cmUiLCJhc3NpZ25UZXh0dXJlIiwiYWxsIiwibWF0ZXJpYWxJbmRleCIsIm1hdGVyaWFscyIsIk1lc2hQaHlzaWNhbE1hdGVyaWFsIiwiZXh0ZW5kTWF0ZXJpYWxQYXJhbXMiLCJleHRlbnNpb24iLCJjbGVhcmNvYXRGYWN0b3IiLCJjbGVhcmNvYXQiLCJjbGVhcmNvYXRUZXh0dXJlIiwiY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yIiwiY2xlYXJjb2F0Um91Z2huZXNzIiwiY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZSIsImNsZWFyY29hdE5vcm1hbFRleHR1cmUiLCJzY2FsZSIsImNsZWFyY29hdE5vcm1hbFNjYWxlIiwidHJhbnNtaXNzaW9uRmFjdG9yIiwidHJhbnNtaXNzaW9uIiwidHJhbnNtaXNzaW9uVGV4dHVyZSIsImxvYWRUZXh0dXJlIiwidGV4dHVyZUluZGV4IiwidGV4dHVyZURlZiIsInRleHR1cmVzIiwic291cmNlIiwiaW1hZ2VzIiwib3B0aW9ucyIsImxvYWRUZXh0dXJlSW1hZ2UiLCJpc1N1cHBvcnRlZCIsInRleHR1cmVMb2FkZXIiLCJ1cmkiLCJoYW5kbGVyIiwiZ2V0SGFuZGxlciIsImRldGVjdFN1cHBvcnQiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwib25sb2FkIiwib25lcnJvciIsImhlaWdodCIsImxvYWRCdWZmZXJWaWV3IiwiaW5kZXgiLCJidWZmZXJWaWV3IiwiYnVmZmVyVmlld3MiLCJleHRlbnNpb25EZWYiLCJidWZmZXIiLCJnZXREZXBlbmRlbmN5IiwiZGVjb2RlciIsInN1cHBvcnRlZCIsInJlYWR5IiwiYnl0ZU9mZnNldCIsImJ5dGVMZW5ndGgiLCJjb3VudCIsInN0cmlkZSIsImJ5dGVTdHJpZGUiLCJyZXN1bHQiLCJBcnJheUJ1ZmZlciIsImRlY29kZUdsdGZCdWZmZXIiLCJtb2RlIiwiZmlsdGVyIiwiQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIIiwiQklOQVJZX0VYVEVOU0lPTl9DSFVOS19UWVBFUyIsIkJJTiIsImJvZHkiLCJoZWFkZXJWaWV3IiwiRGF0YVZpZXciLCJoZWFkZXIiLCJzbGljZSIsImdldFVpbnQzMiIsImNodW5rQ29udGVudHNMZW5ndGgiLCJjaHVua1ZpZXciLCJjaHVua0luZGV4IiwiY2h1bmtMZW5ndGgiLCJjaHVua1R5cGUiLCJjb250ZW50QXJyYXkiLCJwcmVsb2FkIiwiZGVjb2RlUHJpbWl0aXZlIiwicHJpbWl0aXZlIiwiYnVmZmVyVmlld0luZGV4IiwiZ2x0ZkF0dHJpYnV0ZU1hcCIsImF0dHJpYnV0ZXMiLCJ0aHJlZUF0dHJpYnV0ZU1hcCIsImF0dHJpYnV0ZU5vcm1hbGl6ZWRNYXAiLCJhdHRyaWJ1dGVUeXBlTWFwIiwiYXR0cmlidXRlTmFtZSIsInRocmVlQXR0cmlidXRlTmFtZSIsIkFUVFJJQlVURVMiLCJ0b0xvd2VyQ2FzZSIsImFjY2Vzc29yRGVmIiwiYWNjZXNzb3JzIiwiY29tcG9uZW50VHlwZSIsIldFQkdMX0NPTVBPTkVOVF9UWVBFUyIsIm5vcm1hbGl6ZWQiLCJkZWNvZGVEcmFjb0ZpbGUiLCJnZW9tZXRyeSIsImF0dHJpYnV0ZSIsImV4dGVuZFRleHR1cmUiLCJ0ZXh0dXJlIiwidHJhbnNmb3JtIiwiY2xvbmUiLCJvZmZzZXQiLCJyb3RhdGlvbiIsInJlcGVhdCIsInRleENvb3JkIiwibmVlZHNVcGRhdGUiLCJHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbCIsInBhcmFtcyIsIk1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiaXNHTFRGU3BlY3VsYXJHbG9zc2luZXNzTWF0ZXJpYWwiLCJzcGVjdWxhck1hcFBhcnNGcmFnbWVudENodW5rIiwiam9pbiIsImdsb3NzaW5lc3NNYXBQYXJzRnJhZ21lbnRDaHVuayIsInNwZWN1bGFyTWFwRnJhZ21lbnRDaHVuayIsImdsb3NzaW5lc3NNYXBGcmFnbWVudENodW5rIiwibGlnaHRQaHlzaWNhbEZyYWdtZW50Q2h1bmsiLCJ1bmlmb3JtcyIsInNwZWN1bGFyIiwic2V0SGV4IiwiZ2xvc3NpbmVzcyIsInNwZWN1bGFyTWFwIiwiZ2xvc3NpbmVzc01hcCIsIl9leHRyYVVuaWZvcm1zIiwib25CZWZvcmVDb21waWxlIiwic2hhZGVyIiwidW5pZm9ybU5hbWUiLCJmcmFnbWVudFNoYWRlciIsImRlZmluZVByb3BlcnRpZXMiLCJ2IiwiZGVmaW5lcyIsIlVTRV9TUEVDVUxBUk1BUCIsIlVTRV9HTE9TU0lORVNTTUFQIiwiVVNFX1VWIiwibWV0YWxuZXNzIiwicm91Z2huZXNzIiwibWV0YWxuZXNzTWFwIiwicm91Z2huZXNzTWFwIiwic2V0VmFsdWVzIiwiY29weSIsInNwZWN1bGFyR2xvc3NpbmVzc1BhcmFtcyIsInBiclNwZWN1bGFyR2xvc3NpbmVzcyIsImRpZmZ1c2VGYWN0b3IiLCJkaWZmdXNlVGV4dHVyZSIsImVtaXNzaXZlIiwiZ2xvc3NpbmVzc0ZhY3RvciIsInNwZWN1bGFyRmFjdG9yIiwic3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSIsInNwZWNHbG9zc01hcERlZiIsImNyZWF0ZU1hdGVyaWFsIiwibWF0ZXJpYWwiLCJmb2ciLCJsaWdodE1hcCIsImxpZ2h0TWFwSW50ZW5zaXR5IiwiYW9NYXAiLCJhb01hcEludGVuc2l0eSIsImVtaXNzaXZlSW50ZW5zaXR5IiwiZW1pc3NpdmVNYXAiLCJidW1wTWFwIiwiYnVtcFNjYWxlIiwibm9ybWFsTWFwIiwibm9ybWFsTWFwVHlwZSIsIlRhbmdlbnRTcGFjZU5vcm1hbE1hcCIsIm5vcm1hbFNjYWxlIiwiZGlzcGxhY2VtZW50TWFwIiwiZGlzcGxhY2VtZW50U2NhbGUiLCJkaXNwbGFjZW1lbnRCaWFzIiwiYWxwaGFNYXAiLCJlbnZNYXAiLCJlbnZNYXBJbnRlbnNpdHkiLCJyZWZyYWN0aW9uUmF0aW8iLCJHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudCIsInBhcmFtZXRlclBvc2l0aW9ucyIsInNhbXBsZVZhbHVlcyIsInNhbXBsZVNpemUiLCJyZXN1bHRCdWZmZXIiLCJJbnRlcnBvbGFudCIsImNvcHlTYW1wbGVWYWx1ZV8iLCJ2YWx1ZVNpemUiLCJiZWZvcmVTdGFydF8iLCJhZnRlckVuZF8iLCJpbnRlcnBvbGF0ZV8iLCJpMSIsInQwIiwidCIsInQxIiwic3RyaWRlMiIsInN0cmlkZTMiLCJ0ZCIsInAiLCJwcCIsInBwcCIsIm9mZnNldDEiLCJvZmZzZXQwIiwiczIiLCJzMyIsInMwIiwiczEiLCJwMCIsIm0wIiwicDEiLCJtMSIsIldFQkdMX0NPTlNUQU5UUyIsIkZMT0FUIiwiRkxPQVRfTUFUMyIsIkZMT0FUX01BVDQiLCJGTE9BVF9WRUMyIiwiRkxPQVRfVkVDMyIsIkZMT0FUX1ZFQzQiLCJMSU5FQVIiLCJSRVBFQVQiLCJTQU1QTEVSXzJEIiwiUE9JTlRTIiwiTElORVMiLCJMSU5FX0xPT1AiLCJMSU5FX1NUUklQIiwiVFJJQU5HTEVTIiwiVFJJQU5HTEVfU1RSSVAiLCJUUklBTkdMRV9GQU4iLCJVTlNJR05FRF9CWVRFIiwiVU5TSUdORURfU0hPUlQiLCJJbnQ4QXJyYXkiLCJJbnQxNkFycmF5IiwiVWludDE2QXJyYXkiLCJVaW50MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsIldFQkdMX0ZJTFRFUlMiLCJOZWFyZXN0RmlsdGVyIiwiTGluZWFyRmlsdGVyIiwiTmVhcmVzdE1pcG1hcE5lYXJlc3RGaWx0ZXIiLCJMaW5lYXJNaXBtYXBOZWFyZXN0RmlsdGVyIiwiTmVhcmVzdE1pcG1hcExpbmVhckZpbHRlciIsIkxpbmVhck1pcG1hcExpbmVhckZpbHRlciIsIldFQkdMX1dSQVBQSU5HUyIsIkNsYW1wVG9FZGdlV3JhcHBpbmciLCJNaXJyb3JlZFJlcGVhdFdyYXBwaW5nIiwiUmVwZWF0V3JhcHBpbmciLCJXRUJHTF9UWVBFX1NJWkVTIiwiUE9TSVRJT04iLCJOT1JNQUwiLCJUQU5HRU5UIiwiVEVYQ09PUkRfMCIsIlRFWENPT1JEXzEiLCJDT0xPUl8wIiwiV0VJR0hUU18wIiwiSk9JTlRTXzAiLCJQQVRIX1BST1BFUlRJRVMiLCJ0cmFuc2xhdGlvbiIsIndlaWdodHMiLCJJTlRFUlBPTEFUSU9OIiwiQ1VCSUNTUExJTkUiLCJJbnRlcnBvbGF0ZUxpbmVhciIsIlNURVAiLCJJbnRlcnBvbGF0ZURpc2NyZXRlIiwiQUxQSEFfTU9ERVMiLCJPUEFRVUUiLCJNQVNLIiwiQkxFTkQiLCJyZXNvbHZlVVJMIiwidGVzdCIsImNyZWF0ZURlZmF1bHRNYXRlcmlhbCIsInRyYW5zcGFyZW50IiwiZGVwdGhUZXN0Iiwic2lkZSIsIkZyb250U2lkZSIsImFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSIsImtub3duRXh0ZW5zaW9ucyIsIm9iamVjdERlZiIsInVzZXJEYXRhIiwiZ2x0ZkV4dGVuc2lvbnMiLCJhc3NpZ25FeHRyYXNUb1VzZXJEYXRhIiwiZ2x0ZkRlZiIsImV4dHJhcyIsImFkZE1vcnBoVGFyZ2V0cyIsInRhcmdldHMiLCJoYXNNb3JwaFBvc2l0aW9uIiwiaGFzTW9ycGhOb3JtYWwiLCJpbCIsInBlbmRpbmdQb3NpdGlvbkFjY2Vzc29ycyIsInBlbmRpbmdOb3JtYWxBY2Nlc3NvcnMiLCJwZW5kaW5nQWNjZXNzb3IiLCJub3JtYWwiLCJtb3JwaFBvc2l0aW9ucyIsIm1vcnBoTm9ybWFscyIsIm1vcnBoQXR0cmlidXRlcyIsIm1vcnBoVGFyZ2V0c1JlbGF0aXZlIiwidXBkYXRlTW9ycGhUYXJnZXRzIiwibWVzaCIsIm1lc2hEZWYiLCJtb3JwaFRhcmdldEluZmx1ZW5jZXMiLCJ0YXJnZXROYW1lcyIsIm1vcnBoVGFyZ2V0RGljdGlvbmFyeSIsImNyZWF0ZVByaW1pdGl2ZUtleSIsInByaW1pdGl2ZURlZiIsImRyYWNvRXh0ZW5zaW9uIiwiZ2VvbWV0cnlLZXkiLCJpbmRpY2VzIiwiY3JlYXRlQXR0cmlidXRlc0tleSIsImF0dHJpYnV0ZXNLZXkiLCJrZXlzIiwic29ydCIsImFzc29jaWF0aW9ucyIsIk1hcCIsInByaW1pdGl2ZUNhY2hlIiwibWVzaENhY2hlIiwiY2FtZXJhQ2FjaGUiLCJsaWdodENhY2hlIiwibm9kZU5hbWVzVXNlZCIsImNyZWF0ZUltYWdlQml0bWFwIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSW1hZ2VCaXRtYXBMb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwic2V0Q3Jvc3NPcmlnaW4iLCJfaW52b2tlQWxsIiwiZXh0IiwiYmVmb3JlUm9vdCIsImdldERlcGVuZGVuY2llcyIsImRlcGVuZGVuY2llcyIsImFmdGVyUm9vdCIsImNhdGNoIiwic2tpbkRlZnMiLCJza2lucyIsIm1lc2hEZWZzIiwic2tpbkluZGV4Iiwic2tpbkxlbmd0aCIsImpvaW50cyIsImlzQm9uZSIsInNraW4iLCJpc1NraW5uZWRNZXNoIiwiY2FtZXJhIiwicmVmIiwiX2ludm9rZU9uZSIsImZ1bmMiLCJ1bnNoaWZ0IiwibG9hZFNjZW5lIiwibG9hZE5vZGUiLCJsb2FkTWVzaCIsImxvYWRBY2Nlc3NvciIsImxvYWRCdWZmZXIiLCJsb2FkTWF0ZXJpYWwiLCJsb2FkU2tpbiIsImxvYWRBbmltYXRpb24iLCJsb2FkQ2FtZXJhIiwiZGVmcyIsImRlZiIsImJ1ZmZlckluZGV4IiwiYnVmZmVyRGVmIiwiYnVmZmVycyIsImJ1ZmZlclZpZXdEZWYiLCJhY2Nlc3NvckluZGV4Iiwic3BhcnNlIiwicGVuZGluZ0J1ZmZlclZpZXdzIiwiaXRlbVNpemUiLCJUeXBlZEFycmF5IiwiZWxlbWVudEJ5dGVzIiwiQllURVNfUEVSX0VMRU1FTlQiLCJpdGVtQnl0ZXMiLCJidWZmZXJBdHRyaWJ1dGUiLCJpYlNsaWNlIiwiaWJDYWNoZUtleSIsImliIiwiSW50ZXJsZWF2ZWRCdWZmZXIiLCJJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSIsIkJ1ZmZlckF0dHJpYnV0ZSIsIml0ZW1TaXplSW5kaWNlcyIsIlNDQUxBUiIsIlR5cGVkQXJyYXlJbmRpY2VzIiwiYnl0ZU9mZnNldEluZGljZXMiLCJieXRlT2Zmc2V0VmFsdWVzIiwic3BhcnNlSW5kaWNlcyIsInNwYXJzZVZhbHVlcyIsInNldFgiLCJzZXRZIiwic2V0WiIsInNldFciLCJVUkwiLCJ3ZWJraXRVUkwiLCJzb3VyY2VVUkkiLCJpc09iamVjdFVSTCIsImhhc0FscGhhIiwibWltZVR5cGUiLCJjb2xvclR5cGUiLCJnZXRVaW50OCIsImJsb2IiLCJCbG9iIiwiY3JlYXRlT2JqZWN0VVJMIiwiaXNJbWFnZUJpdG1hcExvYWRlciIsImltYWdlQml0bWFwIiwiQ2FudmFzVGV4dHVyZSIsInJldm9rZU9iamVjdFVSTCIsImZsaXBZIiwiZm9ybWF0IiwiUkdCRm9ybWF0Iiwic2FtcGxlcnMiLCJzYW1wbGVyIiwibWFnRmlsdGVyIiwibWluRmlsdGVyIiwid3JhcFMiLCJ3cmFwVCIsIm1hcE5hbWUiLCJtYXBEZWYiLCJnbHRmUmVmZXJlbmNlIiwiYXNzaWduRmluYWxNYXRlcmlhbCIsInVzZVZlcnRleFRhbmdlbnRzIiwidGFuZ2VudCIsInVzZVZlcnRleENvbG9ycyIsInVzZUZsYXRTaGFkaW5nIiwidXNlU2tpbm5pbmciLCJ1c2VNb3JwaFRhcmdldHMiLCJ1c2VNb3JwaE5vcm1hbHMiLCJpc1BvaW50cyIsInV1aWQiLCJwb2ludHNNYXRlcmlhbCIsIlBvaW50c01hdGVyaWFsIiwiTWF0ZXJpYWwiLCJzaXplQXR0ZW51YXRpb24iLCJpc0xpbmUiLCJsaW5lTWF0ZXJpYWwiLCJMaW5lQmFzaWNNYXRlcmlhbCIsImNhY2hlZE1hdGVyaWFsIiwic2tpbm5pbmciLCJ2ZXJ0ZXhDb2xvcnMiLCJmbGF0U2hhZGluZyIsIm1vcnBoVGFyZ2V0cyIsInZlcnRleFRhbmdlbnRzIiwidXYyIiwidXYiLCJzZXRBdHRyaWJ1dGUiLCJtYXRlcmlhbFR5cGUiLCJtYXRlcmlhbEV4dGVuc2lvbnMiLCJzZ0V4dGVuc2lvbiIsImttdUV4dGVuc2lvbiIsIm1ldGFsbGljRmFjdG9yIiwicm91Z2huZXNzRmFjdG9yIiwibWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlIiwiZG91YmxlU2lkZWQiLCJEb3VibGVTaWRlIiwiYWxwaGFNb2RlIiwiZGVwdGhXcml0ZSIsImFscGhhVGVzdCIsImFscGhhQ3V0b2ZmIiwibm9ybWFsVGV4dHVyZSIsIm9jY2x1c2lvblRleHR1cmUiLCJzdHJlbmd0aCIsImVtaXNzaXZlRmFjdG9yIiwiZW1pc3NpdmVUZXh0dXJlIiwiZW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJvcmlnaW5hbE5hbWUiLCJzYW5pdGl6ZWROYW1lIiwiUHJvcGVydHlCaW5kaW5nIiwiY29tcHV0ZUJvdW5kcyIsImJveCIsIkJveDMiLCJhY2Nlc3NvciIsIm1heERpc3BsYWNlbWVudCIsImFicyIsImV4cGFuZEJ5VmVjdG9yIiwiYm91bmRpbmdCb3giLCJzcGhlcmUiLCJTcGhlcmUiLCJnZXRDZW50ZXIiLCJjZW50ZXIiLCJyYWRpdXMiLCJkaXN0YW5jZVRvIiwiYm91bmRpbmdTcGhlcmUiLCJhZGRQcmltaXRpdmVBdHRyaWJ1dGVzIiwiYXNzaWduQXR0cmlidXRlQWNjZXNzb3IiLCJnbHRmQXR0cmlidXRlTmFtZSIsInNldEluZGV4IiwidG9UcmlhbmdsZXNEcmF3TW9kZSIsImRyYXdNb2RlIiwiZ2V0SW5kZXgiLCJnZXRBdHRyaWJ1dGUiLCJudW1iZXJPZlRyaWFuZ2xlcyIsIm5ld0luZGljZXMiLCJUcmlhbmdsZUZhbkRyYXdNb2RlIiwiZ2V0WCIsIm5ld0dlb21ldHJ5IiwibG9hZEdlb21ldHJpZXMiLCJwcmltaXRpdmVzIiwiY3JlYXRlRHJhY29QcmltaXRpdmUiLCJjYWNoZWQiLCJwcm9taXNlIiwiZ2VvbWV0cnlQcm9taXNlIiwiQnVmZmVyR2VvbWV0cnkiLCJtZXNoSW5kZXgiLCJyZXN1bHRzIiwiZ2VvbWV0cmllcyIsIlNraW5uZWRNZXNoIiwic2tpbldlaWdodCIsIm5vcm1hbGl6ZVNraW5XZWlnaHRzIiwiVHJpYW5nbGVTdHJpcERyYXdNb2RlIiwiTGluZVNlZ21lbnRzIiwiTGluZSIsIkxpbmVMb29wIiwiUG9pbnRzIiwiZ3JvdXAiLCJHcm91cCIsImNhbWVyYUluZGV4IiwiY2FtZXJhRGVmIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJNYXRoVXRpbHMiLCJ5Zm92IiwiYXNwZWN0UmF0aW8iLCJ6bmVhciIsInpmYXIiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJ4bWFnIiwieW1hZyIsInNraW5EZWYiLCJza2luRW50cnkiLCJpbnZlcnNlQmluZE1hdHJpY2VzIiwiYW5pbWF0aW9uSW5kZXgiLCJhbmltYXRpb25EZWYiLCJwZW5kaW5nTm9kZXMiLCJwZW5kaW5nSW5wdXRBY2Nlc3NvcnMiLCJwZW5kaW5nT3V0cHV0QWNjZXNzb3JzIiwicGVuZGluZ1NhbXBsZXJzIiwicGVuZGluZ1RhcmdldHMiLCJjaGFubmVscyIsImNoYW5uZWwiLCJpZCIsInBhcmFtZXRlcnMiLCJvdXRwdXQiLCJpbnB1dEFjY2Vzc29ycyIsIm91dHB1dEFjY2Vzc29ycyIsInRyYWNrcyIsImlucHV0QWNjZXNzb3IiLCJvdXRwdXRBY2Nlc3NvciIsInVwZGF0ZU1hdHJpeCIsIm1hdHJpeEF1dG9VcGRhdGUiLCJUeXBlZEtleWZyYW1lVHJhY2siLCJOdW1iZXJLZXlmcmFtZVRyYWNrIiwiUXVhdGVybmlvbktleWZyYW1lVHJhY2siLCJWZWN0b3JLZXlmcmFtZVRyYWNrIiwidGFyZ2V0TmFtZSIsImludGVycG9sYXRpb24iLCJ0cmF2ZXJzZSIsImlzTWVzaCIsIm91dHB1dEFycmF5Iiwic2NhbGVkIiwiamwiLCJ0cmFjayIsImNyZWF0ZUludGVycG9sYW50IiwiSW50ZXJwb2xhbnRGYWN0b3J5TWV0aG9kR0xURkN1YmljU3BsaW5lIiwidGltZXMiLCJnZXRWYWx1ZVNpemUiLCJpc0ludGVycG9sYW50RmFjdG9yeU1ldGhvZEdMVEZDdWJpY1NwbGluZSIsIkFuaW1hdGlvbkNsaXAiLCJub2RlTmFtZSIsIm8iLCJCb25lIiwiT2JqZWN0M0QiLCJtYXRyaXgiLCJxdWF0ZXJuaW9uIiwiYnVpbGROb2RlSGllcmFjaHkiLCJub2RlSWQiLCJwYXJlbnRPYmplY3QiLCJwZW5kaW5nSm9pbnRzIiwiam9pbnROb2RlcyIsImJvbmVzIiwiYm9uZUludmVyc2VzIiwiam9pbnROb2RlIiwibWF0IiwiYmluZCIsIlNrZWxldG9uIiwibWF0cml4V29ybGQiLCJjaGlsZCIsInNjZW5lSW5kZXgiLCJzY2VuZURlZiIsIm5vZGVJZHMiLCJjb21wdXRlVGFuZ2VudHMiLCJtZXJnZUJ1ZmZlckdlb21ldHJpZXMiLCJ1c2VHcm91cHMiLCJpc0luZGV4ZWQiLCJhdHRyaWJ1dGVzVXNlZCIsIlNldCIsIm1vcnBoQXR0cmlidXRlc1VzZWQiLCJtZXJnZWRHZW9tZXRyeSIsImF0dHJpYnV0ZXNDb3VudCIsImhhcyIsIm1lcmdlZFVzZXJEYXRhIiwiYWRkR3JvdXAiLCJpbmRleE9mZnNldCIsIm1lcmdlZEluZGV4IiwibWVyZ2VkQXR0cmlidXRlIiwibWVyZ2VCdWZmZXJBdHRyaWJ1dGVzIiwibnVtTW9ycGhUYXJnZXRzIiwibW9ycGhBdHRyaWJ1dGVzVG9NZXJnZSIsIm1lcmdlZE1vcnBoQXR0cmlidXRlIiwiYXJyYXlMZW5ndGgiLCJpc0ludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlIiwiaW50ZXJsZWF2ZUF0dHJpYnV0ZXMiLCJsIiwiaW50ZXJsZWF2ZWRCdWZmZXIiLCJnZXR0ZXJzIiwic2V0dGVycyIsImliYSIsImMiLCJrIiwiZXN0aW1hdGVCeXRlc1VzZWQiLCJtZW0iLCJhdHRyIiwibWVyZ2VWZXJ0aWNlcyIsInRvbGVyYW5jZSIsIk51bWJlciIsIkVQU0lMT04iLCJoYXNoVG9JbmRleCIsInBvc2l0aW9ucyIsInZlcnRleENvdW50IiwibmV4dEluZGV4IiwiYXR0cmlidXRlTmFtZXMiLCJhdHRyQXJyYXlzIiwibW9ycGhBdHRyc0FycmF5cyIsIm1vcnBoQXR0ciIsImZpbGwiLCJkZWNpbWFsU2hpZnQiLCJsb2cxMCIsInNoaWZ0TXVsdGlwbGllciIsInBvdyIsImhhc2giLCJuZXdhcnJheSIsIm5ld01vcnBoQXJyYXlzIiwiZ2V0dGVyRnVuYyIsIm0iLCJtbCIsIm9sZEF0dHJpYnV0ZSIsIm9sZE1vcnBoQXR0cmlidXRlIiwibW9ycGhBdHRyaWJ1dGUiLCJUcmlhbmdsZXNEcmF3TW9kZSIsImNsZWFyR3JvdXBzIiwiY29tcHV0ZU1vcnBoZWRBdHRyaWJ1dGVzIiwiaXNCdWZmZXJHZW9tZXRyeSIsIl92QSIsIl92QiIsIl92QyIsIl90ZW1wQSIsIl90ZW1wQiIsIl90ZW1wQyIsIl9tb3JwaEEiLCJfbW9ycGhCIiwiX21vcnBoQyIsIl9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YSIsIm1vZGlmaWVkQXR0cmlidXRlQXJyYXkiLCJmcm9tQnVmZmVyQXR0cmlidXRlIiwibW9ycGhJbmZsdWVuY2VzIiwiaW5mbHVlbmNlIiwibW9ycGgiLCJhZGRTY2FsZWRWZWN0b3IiLCJzdWIiLCJib25lVHJhbnNmb3JtIiwicG9zaXRpb25BdHRyaWJ1dGUiLCJtb3JwaFBvc2l0aW9uIiwibm9ybWFsQXR0cmlidXRlIiwibW9ycGhOb3JtYWwiLCJncm91cHMiLCJkcmF3UmFuZ2UiLCJncm91cE1hdGVyaWFsIiwic3RhcnQiLCJlbmQiLCJtb2RpZmllZFBvc2l0aW9uIiwibW9kaWZpZWROb3JtYWwiLCJtb3JwaGVkUG9zaXRpb25BdHRyaWJ1dGUiLCJGbG9hdDMyQnVmZmVyQXR0cmlidXRlIiwibW9ycGhlZE5vcm1hbEF0dHJpYnV0ZSIsImNsaWVudCIsIlF1ZXVlIiwicHJvcml0eSIsInN0YXJ0U2V2ZXJDbGllbnRDb21tdW5pY2F0aW9uIiwic29ja2V0IiwiZW1pdCIsIkRhdGUiLCJub3ciLCJzZW5kRGF0YVdpdGhQcm9taXNlIiwiZXZlbnQiLCJEYXRhUHJvbWlzZSIsInJlc29sdmVkIiwib24iLCJhcmd1bWVudHMiLCJlcnIiLCJsaXN0ZW5Ub0V2ZW50IiwiYXR0YWNoVG9NYWluRXZlbnRTdHJlYW0iLCJvbkFueSIsImV2ZW50TmFtZSIsImFyZ3MiLCJsaXN0ZW5Gb3JFdmVudFdpdGhTY2hlbWFWYWxpZGF0aW9uIiwic2NlbWEiLCJ2YWxpZGF0ZSIsImFkZERhdGFUb1F1ZXVlIiwic2V0SW50ZXJ2YWwiLCJjYWxsQmFjayIsImNyZWF0ZURpcmVjdGlvbmFsTGlnaHQiLCJTY2VuZSIsImJyaWdodG5lc3MiLCJwb3MiLCJkaXJlY3Rpb25hbExpZ2h0IiwiY2FzdFNoYWRvdyIsImNyZWF0ZUFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImNyZWF0ZVBvaW50TGlnaHQiLCJQb2ludExpZ2h0TmV3IiwiZGVmaW5pdGlvbnNfcGVybGluIiwiUGVybGluIiwic2VlZCIsIl9ncmFkaWVudFZlY3MiLCJUSFJFRSIsInBlcm0iLCJncmFkUCIsIl9zZWVkIiwiX29mZnNldE1hdHJpeCIsInNoYWRlckNodW5rIiwibWFpbiIsInRocmVlX25vaXNlX3NlZWQiLCJfZmFkZSIsIl9sZXJwIiwiX2dyYWRpZW50IiwicG9zSW5DZWxsIiwiaW5fbWluIiwiaW5fbWF4Iiwib3V0X21pbiIsIm91dF9tYXgiLCJnZXQyIiwiY2VsbCIsImdyYWRpYW50RG90IiwicyIsImdyYWQzIiwiYWRkVmVjdG9ycyIsImdyYWQyIiwiZGlzdDIiLCJzdWJWZWN0b3JzIiwiZG90IiwidSIsImdldDMiLCJ3IiwiRkJNIiwicGVyc2lzdGFuY2UiLCJsYWN1bmFyaXR5Iiwib2N0YXZlcyIsInJlZGlzdHJpYnV0aW9uIiwiX25vaXNlIiwiX3NjYWxlIiwiX3BlcnNpc3RhbmNlIiwiX2xhY3VuYXJpdHkiLCJfb2N0YXZlcyIsIl9yZWRpc3RyaWJ1dGlvbiIsImFtcGxpdHVkZSIsImZyZXF1ZW5jeSIsIm5vaXNlRnVuY3Rpb24iLCJub2lzZVZhbCIsInJlZGlzdHJpYnV0ZWQiLCJyZW5kZXJpbmdMaXN0IiwiY2hlY2tUeXBlIiwiYWRkVG9SZW5kZXJTZXF1ZW5jZSIsIm5ld1R5cGUiLCJyZW5kZXJpbmdJbmZvIiwidXBkYXRlUmVuZGVyQ3ljbGUiLCJHZW5lcmF0ZVdlYldvcmtlciIsIndvcmtlciIsImdsb2JhbFZhcnMiLCJyZXR1cm5GdW5jIiwiY29kZSIsInRvU3RyaW5nIiwiaW5wdXRTdHVmZiIsIndvcmtlck91dCIsIldvcmtlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJUZXJtaW50ZVdvcmtlckV4dGVybmFsbHkiLCJ0ZXJtaW5hdGUiLCJHYW1lQ29yZVNoYWRvd3MiLCJjcmVhdGVHZW8iLCJyb3QiLCJzaGFkb3ciLCJnZW8iLCJ0aHJlZSIsInJlY2VpdmVTaGFkb3ciLCJkZWJ1Z0N1YmUiLCJCb3hHZW9tZXRyeSIsImN1YmUiLCJkZWJ1ZyIsImdlbmVyYXRlTWFpblNjZW5lIiwiU2NlbmVUb0dldCIsIlJlbmRlcnMiLCJkb2N1bWVudCIsImNoaWxkMiIsIkNhbWVyYSIsImNvbGxpc2lvbkhhbmRsZXIiLCJvbm1lc3NhZ2UiLCJvbm1lc3NhZ2VlcnJvciIsInBvc3RNZXNzYWdlIiwiQ29tbWFuZCIsIm9yaWdpbiIsIlBsYW5lQnVmZmVyR2VvbWV0cnkiLCJjbG91ZHMiLCJHZW5lcmF0ZUNsb3VkcyIsInJhbmRvbSIsImRheW5pZ2h0IiwiQ3JlYXRlRGF5TmlnaHRDeWNsZSIsImNvbnRyb2xIYW5kbGVySW5pdCIsInBsYW5lR2VvbWV0cnkiLCJQbGFuZUdlb21ldHJ5Iiwicm90YXRlWCIsInBsYW5lTWF0ZXJpYWwiLCJwbGFuZSIsImdyaWRIZWxwZXIiLCJHcmlkSGVscGVyIiwidXBkYXRlIiwibmV3UGxhbmUiLCJNYWtlUGxhbmUiLCJsb2FkRmlsZXMiLCJDcmVhdGVHcm91cEFuZFBvcyIsImFpcnBvcnQiLCJnZW5lcmF0ZVRlcnJhaW5Bcm91bmRQbGF5ZXIiLCJjb250cm9sSGFuZGxlclVwZGF0ZSIsInJlY2lldmVEYXl0aW1lVXBkYXRlIiwiZGF5IiwiYWRkdG9EYXlUaW1lQ2hlY2tlciIsImFyZyIsIlVVSUQiLCJ2NCIsInJlbW92ZUZyb21EYXlUaW1lSG9vayIsImdldERheVN0YXRlIiwiYW5ub3VuY2VkRGF5IiwiYW5ub3VuY2VkTmlnaHQiLCJzdW4iLCJTcGhlcmVCdWZmZXJHZW9tZXRyeSIsInN1bk1hdGVyaWFsIiwic3VubWVzaCIsInN1bkdyb3VwIiwibW9vbiIsIm1vb25NYXRlcmlhbCIsIm1vb25NZXNoIiwibW9vbkdyb3VwIiwidmlzaWJsZSIsImRUSW1lIiwiZGlyZWN0aW9uYWxMaWdodDIiLCJza3lCb3giLCJza3lCb3hNYXRlcmlhbCIsImdldFJhbmRvbVN0YXJGaWVsZCIsIkJhY2tTaWRlIiwic2t5IiwidGhldGEiLCJyb3RhdGVBYm91dFBvaW50Iiwic2V0Q2xlYXJDb2xvciIsImxlcnBDb2xvcnMiLCJyb3RhdGVPbkF4aXMiLCJTaW1wbGV4Tm9pc2UiLCJyZXF1aXJlIiwiY3VycmVudFRlcnJhaW4iLCJSZXR1cm5UZXJyYWluUG9pbnRlciIsImdlbmVyYXRlVGVycmFpbiIsInNpbXBsZXgiLCJjb2xvdXJzIiwidmVydGV4Iiwibm9pc2UyRCIsIk1lc2hQaG9uZ01hdGVyaWFsIiwicmVmbGVjdGl2aXR5IiwicGxhbmUyIiwiZ2VuZXJhdGVUZXJyYWluQ2h1bmsiLCJQb3NpdGlvbiIsImdhaW4iLCJkaXZpc29yIiwiZmJtIiwiYmxlbmRpbmciLCJsb2NhbFRvV29ybGQiLCJoZWlnaHRTZWNvbmRhcnkiLCJnZXRUZXJyYWluSGVpZ2h0IiwibG9hZGVkQ2h1bmtzIiwiY2h1bmtzSW5NZW0iLCJnZXRXb3JsZFBvc2l0aW9uIiwieW91ckNodW5rIiwiY2h1bmt5VGhpbmciLCJDaHVua1lvdXJJbiIsImNodW5rIiwiR2VuZXJhdGVUcmVlcyIsImNoZWNrQmlvbWVMb2NhdGlvbiIsIm1pbkhlaWdodCIsIm5vaXNlTWFwIiwiWFZhbHVlIiwic21pbiIsInNtYXgiLCJlbWluIiwiZW1heCIsImppdHRlciIsInBlciIsInNwZWVkIiwidHVmdDEiLCJTcGhlcmVHZW9tZXRyeSIsInRyYW5zbGF0ZSIsInR1ZnQzIiwidHVmdDIiLCJjb21wdXRlVmVydGV4Tm9ybWFscyIsImNsb3VkIiwiY2xvdWQxIiwiY2xvdWQyIiwiZ3Jhc3MiLCJnZW9zIiwiZCIsInVwIiwiZG93biIsInEiLCJzaGlmdCIsIm9uRG9jdW1lbnRLZXlEb3duIiwiYWN0aXZlRWxlbWVudCIsImtleUNvZGUiLCJ3aGljaCIsImRpcmVjdGlvbiIsImdldFdvcmxkRGlyZWN0aW9uIiwibXVsdGlwbHlTY2FsYXIiLCJyb3RhdGVZIiwicm90YXRlWiIsImxpc3RlbmluZ0hvb2tzIiwiQ29udHJvbEV2ZW50TGlzdGVuZXIiLCJvY3VtZW50Iiwid0tleSIsImFLZXkiLCJzS2V5IiwiZEtleSIsInVwS2V5IiwiZG93bktleSIsImVLZXkiLCJxS2V5Iiwic2hpZnRLZXkiLCJ6S2V5IiwieEtleSIsIm9uRG9jdW1lbnRLZXlEb3duRXZlbnQiLCJlbnRyaWVzIiwibGlzdGVuVG9Db25yb2xzIiwiQ2xlYW5VcExpc3RlbmVyIiwicGxheWVycyIsIk1ha2VOZXdDdWJlUGxheWVyIiwiY3ljbGluZGVyIiwiQ3lsaW5kZXJHZW9tZXRyeSIsIm1hdGVyaWFsMiIsImN5bGluZGVyQnVpbGQiLCJnZW5lcmF0ZUxhYmVsIiwiSW5pdE1haW5HYW1lSGFuZGxlciIsImNyZWF0ZVRhZyIsImJhc2VXaWR0aCIsImJvcmRlclNpemUiLCJjdHgiLCJjcmVhdGVFbGVtZW50IiwiZ2V0Q29udGV4dCIsImZvbnQiLCJ0ZXh0V2lkdGgiLCJtZWFzdXJlVGV4dCIsIndpZHRoIiwiZG91YmxlQm9yZGVyU2l6ZSIsImNhbnZhcyIsInRleHRCYXNlbGluZSIsInRleHRBbGlnbiIsInNjYWxlRmFjdG9yIiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJsYWJlbE1hdGVyaWFsIiwibGFiZWxCYXNlU2NhbGUiLCJsYWJlbCIsInNldHRpbmdzIiwiZWxldmF0b3JQaXRjaCIsImFpcmVsb25lUGl0Y2giLCJydWRkZXJQaXRjaCIsImNoZWNrZXIiLCJwcm9wcyIsImxlZnRBaXJlbG9uZSIsInJpZ2h0QWlyZWxvbmUiLCJsZWZ0Q29udHJvbFN1cmZhY2UiLCJyaWdodENvbnRyb2xTdXJmYWNlIiwicnVkZGVyIiwibGlnaHQyIiwid2hpdGVMaWdodCIsImN1cnJlbnRFdmVsYXRvclBpdGNoIiwiYXR0YWNoQ2FtZXJhQW5kQ29udHJvbCIsImNsZWFuVXAiLCJzdWNjZXNzIiwib2JqIiwicG9pbnQiLCJheGlzIiwicG9pbnRJc1dvcmxkIiwiYXBwbHlBeGlzQW5nbGUiLCJ3b3JsZFRvTG9jYWwiLCJudW1iZXJPZlN0YXJzIiwiZmlsbFJlY3QiLCJiZWdpblBhdGgiLCJhcmMiLCJwbGFjZVRyZWUiLCJ0cmVlIiwiaW50ZXJzZWN0cyIsInJhbmRvbVZlYyIsIm5ld1RyZWUiLCJ2ZXRvciIsImJvdW5kcyIsInNub3d5VHJlZSIsInBhbG1UcmVlIiwibGVhdmVzIiwidHJ1bmsiLCJyYW5kb21WZWN0b3IiLCJwbGFjZVRyZWVPdXQiLCJDcmVhdGVVSSIsImdhbWVmZWVkIiwic2V0R2FtZUZlZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlN0YXRzIiwicmVuZGVyIiwic2V0Q2hpbGQiLCJnYW1lRXZlbnREYXRhIiwic2V0R2FtZUV2ZW50RGF0YSIsInNldERheSIsInNldENoaWxkMiIsInJlY2lldmVkU2VlZCIsInNldFNlZWQiLCJyZW5kZXJlZCIsInNldFJlbmRlcmVkIiwiY2xpZW50cyIsInNldENsaWVudHMiLCJwZXJzb25EYXRhIiwic2V0UGVyc29uYWxEYXRhIiwib25jZSIsInN0YXRzIiwic2hvd1BhbmVsIiwiYXBwZW5kQ2hpbGQiLCJkb20iLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJvZ2FyaXRobWljRGVwdGhCdWZmZXIiLCJGb2ciLCJzZXRTaXplIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZG9tRWxlbWVudCIsIkN1cnJlbnRTY2VuZSIsIm9uV2luZG93UmVzaXplIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsInJlcXVlc3RQb2ludGVyTG9jayIsIm1ha2VDdWJlIiwicHJldkRhdGEiLCJhZGR0b0dhbWVGZWVkIiwiTmV3R2FtZUV2ZW50QXJyYXkiLCJob3ciLCJfeCIsIl95IiwiX3oiLCJ0ZXh0IiwiZGVidWJDdWJlIiwiYW5pbWF0ZSIsImJlZ2luIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2VuZENoYXQiLCJwcmV2ZW50RGVmYXVsdCIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sU0FBU0EsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUJDLEtBQXZCLEVBQThCO0FBQ2pDLFNBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxHQUFHLEdBQUdDLEtBQWpCLElBQTBCQSxLQUFqQztBQUNIO0FBRU0sZUFBZUcsSUFBZixDQUFvQkMsR0FBcEIsRUFBd0I7QUFDM0IsU0FBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDN0JDLGNBQVUsQ0FBQ0YsR0FBRCxFQUFNRixHQUFOLENBQVY7QUFDSCxHQUZNLENBQVA7QUFHSCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNSRCxNQUFNSyxHQUFHLEdBQUcsQ0FBWjs7QUFDQSxNQUFNQyxNQUFNLEdBQUlDLENBQUQsSUFBTztBQUNsQixHQUFFQSxDQUFDLEdBQUcsQ0FBTCxLQUFZLENBQWIsSUFBa0IsQ0FBbEI7QUFDSCxDQUZEOztBQUdBLE1BQU1DLElBQUksR0FBSUQsQ0FBRCxJQUFPO0FBQ2hCLEdBQUNBLENBQUMsSUFBSSxDQUFOLElBQVcsQ0FBWDtBQUNILENBRkQ7O0FBR0EsTUFBTUUsS0FBSyxHQUFJRixDQUFELElBQU87QUFDaEJBLEdBQUMsR0FBRyxDQUFMLElBQVcsQ0FBWDtBQUNILENBRkQ7O0FBSU8sTUFBTUcsYUFBTixDQUFvQjtBQUN2QkMsYUFBVyxDQUNQQyxVQUFVLEdBQUcsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVU7QUFDbkJELEtBQUMsR0FBR0MsQ0FBSjtBQUNILEdBSE0sRUFJVDtBQUNFLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0Es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LEVBcERNLEVBcUROLEdBckRNLEVBc0ROLEdBdERNLEVBdUROLEVBdkRNLEVBd0ROLEVBeERNLEVBeUROLEdBekRNLEVBMEROLEVBMURNLEVBMkROLEdBM0RNLEVBNEROLEdBNURNLEVBNkROLEdBN0RNLEVBOEROLEdBOURNLEVBK0ROLEVBL0RNLEVBZ0VOLEdBaEVNLEVBaUVOLEVBakVNLEVBa0VOLEdBbEVNLEVBbUVOLEVBbkVNLEVBb0VOLEdBcEVNLEVBcUVOLEdBckVNLEVBc0VOLEVBdEVNLEVBdUVOLEVBdkVNLEVBd0VOLEdBeEVNLEVBeUVOLEVBekVNLEVBMEVOLEdBMUVNLEVBMkVOLEdBM0VNLEVBNEVOLEdBNUVNLEVBNkVOLEVBN0VNLEVBOEVOLEdBOUVNLEVBK0VOLEdBL0VNLEVBZ0ZOLEdBaEZNLEVBaUZOLEVBakZNLEVBa0ZOLEdBbEZNLEVBbUZOLEdBbkZNLEVBb0ZOLEdBcEZNLEVBcUZOLEdBckZNLEVBc0ZOLEdBdEZNLEVBdUZOLEVBdkZNLEVBd0ZOLEVBeEZNLEVBeUZOLEVBekZNLEVBMEZOLEVBMUZNLEVBMkZOLEdBM0ZNLEVBNEZOLEVBNUZNLEVBNkZOLEdBN0ZNLEVBOEZOLEdBOUZNLEVBK0ZOLEdBL0ZNLEVBZ0dOLEVBaEdNLEVBaUdOLEVBakdNLEVBa0dOLEVBbEdNLEVBbUdOLEVBbkdNLEVBb0dOLEdBcEdNLEVBcUdOLENBckdNLEVBc0dOLEdBdEdNLEVBdUdOLEVBdkdNLEVBd0dOLEVBeEdNLEVBeUdOLEdBekdNLEVBMEdOLEVBMUdNLEVBMkdOLEdBM0dNLEVBNEdOLEdBNUdNLEVBNkdOLEdBN0dNLEVBOEdOLEVBOUdNLEVBK0dOLEVBL0dNLEVBZ0hOLEdBaEhNLEVBaUhOLEdBakhNLEVBa0hOLEdBbEhNLEVBbUhOLEdBbkhNLEVBb0hOLEdBcEhNLEVBcUhOLEdBckhNLEVBc0hOLEdBdEhNLEVBdUhOLEdBdkhNLEVBd0hOLEVBeEhNLEVBeUhOLEdBekhNLEVBMEhOLEdBMUhNLEVBMkhOLEdBM0hNLEVBNEhOLEdBNUhNLEVBNkhOLEdBN0hNLEVBOEhOLEdBOUhNLEVBK0hOLENBL0hNLEVBZ0lOLEVBaElNLEVBaUlOLEVBaklNLEVBa0lOLEdBbElNLEVBbUlOLEdBbklNLEVBb0lOLEdBcElNLEVBcUlOLEdBcklNLEVBc0lOLEdBdElNLEVBdUlOLENBdklNLEVBd0lOLEdBeElNLEVBeUlOLEVBeklNLEVBMElOLEdBMUlNLEVBMklOLEdBM0lNLEVBNElOLEdBNUlNLEVBNklOLEdBN0lNLEVBOElOLEVBOUlNLEVBK0lOLEVBL0lNLEVBZ0pOLEdBaEpNLEVBaUpOLEdBakpNLEVBa0pOLEdBbEpNLEVBbUpOLEVBbkpNLEVBb0pOLEdBcEpNLEVBcUpOLEVBckpNLEVBc0pOLEVBdEpNLEVBdUpOLEVBdkpNLEVBd0pOLEVBeEpNLEVBeUpOLEdBekpNLEVBMEpOLEdBMUpNLEVBMkpOLEVBM0pNLEVBNEpOLEVBNUpNLEVBNkpOLEdBN0pNLEVBOEpOLEdBOUpNLEVBK0pOLEdBL0pNLEVBZ0tOLEdBaEtNLEVBaUtOLEdBaktNLEVBa0tOLEdBbEtNLEVBbUtOLEdBbktNLEVBb0tOLENBcEtNLEVBcUtOLEVBcktNLEVBc0tOLEdBdEtNLEVBdUtOLEdBdktNLEVBd0tOLEVBeEtNLEVBeUtOLEdBektNLEVBMEtOLEdBMUtNLEVBMktOLEdBM0tNLEVBNEtOLEdBNUtNLEVBNktOLEdBN0tNLEVBOEtOLEVBOUtNLEVBK0tOLEdBL0tNLEVBZ0xOLENBaExNLEVBaUxOLEdBakxNLEVBa0xOLEVBbExNLEVBbUxOLEVBbkxNLEVBb0xOLEdBcExNLEVBcUxOLEVBckxNLEVBc0xOLEVBdExNLEVBdUxOLEdBdkxNLEVBd0xOLEdBeExNLEVBeUxOLEVBekxNLEVBMExOLEdBMUxNLEVBMkxOLEdBM0xNLEVBNExOLEdBNUxNLEVBNkxOLEdBN0xNLEVBOExOLEdBOUxNLEVBK0xOLEdBL0xNLEVBZ01OLEdBaE1NLEVBaU1OLEdBak1NLEVBa01OLEdBbE1NLEVBbU1OLEVBbk1NLEVBb01OLEdBcE1NLEVBcU1OLEdBck1NLEVBc01OLEVBdE1NLEVBdU1OLEdBdk1NLEVBd01OLEdBeE1NLEVBeU1OLEdBek1NLEVBME1O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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7Ozs7Ozs7Ozs7O0FDdFhGO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOzs7Ozs7Ozs7Ozs7QUNURztBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxjQUFjO0FBQ2QsMkJBQTJCLG1CQUFPLENBQUMsMENBQWtCO0FBQ3JELGFBQWEsbUJBQU8sQ0FBQyx5REFBTTtBQUMzQix1QkFBdUIsbUJBQU8sQ0FBQyw2RUFBZ0I7QUFDL0MsY0FBYyxtQkFBTyxDQUFDLDhFQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixvREFBb0Q7QUFDakYsYUFBYTtBQUNiO0FBQ0E7QUFDQSx5QkFBeUIsK0RBQStEO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBaUQ7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0JBQXNCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7Ozs7Ozs7Ozs7OztBQzNjRDtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCwwQkFBMEI7QUFDMUIsZ0JBQWdCLG1CQUFPLENBQUMsNENBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCOzs7Ozs7Ozs7Ozs7QUN2RWI7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsV0FBVztBQUNYLGlCQUFpQixtQkFBTyxDQUFDLDBCQUFVO0FBQ25DLGNBQWMsbUJBQU8sQ0FBQyw4RUFBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOzs7Ozs7Ozs7OztBQ2pFWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVB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LGdCQUFnQixvREFBVTtBQUNuQjtBQUNkLCtEQUFlLDRDQUFFLEVBQUM7Ozs7Ozs7Ozs7OztBQ0psQixvQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy90ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHJvdW5kbnVtKG51bSwgdG9OdW0pIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAvIHRvTnVtKSAqIHRvTnVtO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2FpdCh2YWwpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQocmVzLCB2YWwpXHJcbiAgICB9KVxyXG59IiwiY29uc3QgdG9wID0gMDtcclxuY29uc3QgcGFyZW50ID0gKGkpID0+IHtcclxuICAgICgoaSArIDEpID4+PiAxKSAtIDE7XHJcbn07XHJcbmNvbnN0IGxlZnQgPSAoaSkgPT4ge1xyXG4gICAgKGkgPDwgMSkgKyAxO1xyXG59O1xyXG5jb25zdCByaWdodCA9IChpKSA9PiB7XHJcbiAgICAoaSArIDEpIDw8IDE7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgUHJpb3JpdHlRdWV1ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBjb21wYXJhdG9yID0gKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgYSA+IGI7XHJcbiAgICAgICAgfVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5faGVhcCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2NvbXBhcmF0b3IgPSBjb21wYXJhdG9yO1xyXG4gICAgfVxyXG4gICAgc2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVhcC5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBpc0VtcHR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemUoKSA9PT0gMDtcclxuICAgIH1cclxuICAgIHBlZWsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYXBbcGFyc2VJbnQodG9wLDEwKV07XHJcbiAgICB9XHJcbiAgICBwdXNoKC4uLnZhbHVlcykge1xyXG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9oZWFwLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaWZ0VXAoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplKCk7XHJcbiAgICB9XHJcbiAgICBwb3AoKSB7XHJcbiAgICAgICAgY29uc3QgcG9wcGVkVmFsdWUgPSB0aGlzLnBlZWsoKTtcclxuICAgICAgICBjb25zdCBib3R0b20gPSB0aGlzLnNpemUoKSAtIDE7XHJcbiAgICAgICAgaWYgKGJvdHRvbSA+IHRvcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zd2FwKHRvcCwgYm90dG9tKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faGVhcC5wb3AoKTtcclxuICAgICAgICB0aGlzLl9zaWZ0RG93bigpO1xyXG4gICAgICAgIHJldHVybiBwb3BwZWRWYWx1ZTtcclxuICAgIH1cclxuICAgIHJlcGxhY2UodmFsdWUpIHtcclxuICAgICAgICBjb25zdCByZXBsYWNlZFZhbHVlID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgdGhpcy5faGVhcFtwYXJzZUludCh0b3AsMTApXSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3NpZnREb3duKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VkVmFsdWU7XHJcbiAgICB9XHJcbiAgICBfZ3JlYXRlcihpLCBqKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBhcmF0b3IodGhpcy5faGVhcFtwYXJzZUludChpLDEwKV0sIHRoaXMuX2hlYXBbcGFyc2VJbnQoaiwxMCldKTtcclxuICAgIH1cclxuICAgIF9zd2FwKGksIGopIHtcclxuICAgICAgICBbdGhpcy5faGVhcFtwYXJzZUludChpLDEwKV0sIHRoaXMuX2hlYXBbcGFyc2VJbnQoaiwxMCldXSA9IFt0aGlzLl9oZWFwW3BhcnNlSW50KGosMTApXSwgdGhpcy5faGVhcFtwYXJzZUludChpLDEwKV1dO1xyXG4gICAgfVxyXG4gICAgX3NpZnRVcCgpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc2l6ZSgpIC0gMTtcclxuICAgICAgICB3aGlsZSAobm9kZSA+IHRvcCAmJiB0aGlzLl9ncmVhdGVyKG5vZGUsIHBhcmVudChub2RlKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3dhcChub2RlLCBwYXJlbnQobm9kZSkpO1xyXG4gICAgICAgICAgICBub2RlID0gcGFyZW50KG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qZXNsaW50IGNvbXBsZXhpdHk6IFtcImVycm9yXCIsIDIwXSovXHJcbiAgICBfc2lmdERvd24oKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0b3A7XHJcbiAgICAgICAgd2hpbGUgKFxyXG4gICAgICAgICAgICAobGVmdChub2RlKSA8IHRoaXMuc2l6ZSgpICYmIHRoaXMuX2dyZWF0ZXIobGVmdChub2RlKSwgbm9kZSkpIHx8XHJcbiAgICAgICAgICAgIChyaWdodChub2RlKSA8IHRoaXMuc2l6ZSgpICYmIHRoaXMuX2dyZWF0ZXIocmlnaHQobm9kZSksIG5vZGUpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBsZXQgbWF4Q2hpbGQgPVxyXG4gICAgICAgICAgICAgICAgcmlnaHQobm9kZSkgPCB0aGlzLnNpemUoKSAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JlYXRlcihyaWdodChub2RlKSwgbGVmdChub2RlKSlcclxuICAgICAgICAgICAgICAgICAgICA/IHJpZ2h0KG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBsZWZ0KG5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9zd2FwKG5vZGUsIG1heENoaWxkKTtcclxuICAgICAgICAgICAgbm9kZSA9IG1heENoaWxkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyLCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTXVsdGlwbHlWZWN0b3IyKHZlY3RvcjpWZWN0b3IyLCBtdWx0aXBsaWVyOm51bWJlcik6VmVjdG9yMiB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIodmVjdG9yLnggKiBtdWx0aXBsaWVyLCB2ZWN0b3IueSAqIG11bHRpcGxpZXIpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIE11bHRpcGx5VmVjdG9yMyh2ZWN0b3I6VmVjdG9yMywgbXVsdGlwbGllcjpudW1iZXIpOlZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHZlY3Rvci54ICogbXVsdGlwbGllciwgdmVjdG9yLnkgKiBtdWx0aXBsaWVyLCB2ZWN0b3IueiAqIG11bHRpcGxpZXIpXHJcbn0iLCJpbXBvcnQgc2VlZHJhbmRvbSBmcm9tIFwic2VlZHJhbmRvbVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50RnJvbUludGVydmFsKCBtaW4sIG1heCkge1xyXG4gICAgbGV0IG15cm5nID0gbmV3IHNlZWRyYW5kb20oKTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKG15cm5nKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21WZWN0b3JCZXR3ZWVuUG9pbnRzMkQoVmVjdG9yMSwgVmVjdG9yMil7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMocmFuZG9tSW50RnJvbUludGVydmFsKCBWZWN0b3IxLngsIFZlY3RvcjIueCkscmFuZG9tSW50RnJvbUludGVydmFsKCBWZWN0b3IxLnksIFZlY3RvcjIueSkscmFuZG9tSW50RnJvbUludGVydmFsKCBWZWN0b3IxLnosIFZlY3RvcjIueikpXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gcmFkaWFudHMoZGVncmVlcykge1xyXG5cdHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZ3JlZXMocmFkaWFucykge1xyXG5cdHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcclxufSIsImltcG9ydCB7IEJ1ZmZlckdlb21ldHJ5LCBHcm91cCwgTWVzaCwgTWVzaExhbWJlcnRNYXRlcmlhbCB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBCdWZmZXJHZW9tZXRyeVV0aWxzIH0gZnJvbSBcIi4uL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9tZXJnZU1lc2hlcyhtZXNoZXMpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygoW10uY29uY2F0KG1lc2hlcy5tYXAoZSA9PiBlLmNoaWxkcmVuKSkpLmZsYXQoKSlcclxuXHJcbiAgICBsZXQgaW5wdXRHZW8gPSBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlQnVmZmVyR2VvbWV0cmllcygoW10uY29uY2F0KG1lc2hlcy5tYXAoZSA9PiBlLmNoaWxkcmVuKSkpLmZsYXQoKSwgdHJ1ZSlcclxuXHJcblxyXG4gICAgcmV0dXJuIG5ldyBNZXNoKGlucHV0R2VvLCBuZXcgTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6MHhmZjAwMDB9KSk7XHJcblxyXG59IiwiaW1wb3J0IFJlYWN0LHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcblxyXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFwcFdyYXBwZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgbGV0IHNoYXJlZFN0YXRlID0gaW8oKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NoYXJlZFN0YXRlfT57Y2hpbGRyZW59PC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcHBDb250ZXh0KCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi9nbGJDb3JlXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkR0xCRmlsZShpdGVtLCBzY2VuZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBsb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xyXG4gICAgICAgIGxvYWRlci5sb2FkKFxyXG4gICAgICAgICAgICAvLyByZXNvdXJjZSBVUkxcclxuICAgICAgICAgICAgaXRlbSxcclxuICAgICAgICAgICAgLy8gY2FsbGVkIHdoZW4gdGhlIHJlc291cmNlIGlzIGxvYWRlZFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZ2x0Zikge1xyXG4gICAgICAgICAgICAgICAgZ2x0Zi5hbmltYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgZ2x0Zi5zY2VuZTtcclxuICAgICAgICAgICAgICAgIGdsdGYuc2NlbmVzO1xyXG4gICAgICAgICAgICAgICAgZ2x0Zi5jYW1lcmFzO1xyXG4gICAgICAgICAgICAgICAgZ2x0Zi5hc3NldDtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZ2x0ZilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gY2FsbGVkIHdoaWxlIGxvYWRpbmcgaXMgcHJvZ3Jlc3NpbmdcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHhocikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coKHhoci5sb2FkZWQgLyB4aHIudG90YWwpICogMTAwICsgXCIlIGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gY2FsbGVkIHdoZW4gbG9hZGluZyBoYXMgZXJyb3JzXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbiBlcnJvciBoYXBwZW5lZFwiKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBCdWZmZXJHZW9tZXRyeSwgTWF0cml4NCwgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBCdWZmZXJHZW9tZXRyeVV0aWxzIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNZXJnZU1lc2hlcyhpbnB1dDogQnVmZmVyR2VvbWV0cnlbXSwgbG9jYXRpb246IFZlY3RvcjNbXSk6IEJ1ZmZlckdlb21ldHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKGlucHV0KTtcclxuXHJcbiAgICBpbnB1dC5mb3JFYWNoKChlLGkpID0+IHtcclxuICAgICAgICBpbnB1dFtpXSA9ICBlLmFwcGx5TWF0cml4NChuZXcgTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbihsb2NhdGlvbltpXS54LCBsb2NhdGlvbltpXS55LCBsb2NhdGlvbltpXS56KSlcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGJ1ZmZlckdlb20gPSBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlQnVmZmVyR2VvbWV0cmllcyhpbnB1dCwgZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIGJ1ZmZlckdlb21cclxufVxyXG4iLCIvLyBUSElTIEZJTEUgV0FTIE5PVCBXUklUVEVOIEJZIE1FXHJcblxyXG4vLyBUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggdGhlIGluYnVpbHQgb2JqIGxvYWRlcnMgc28gSSByZXdyb3RlIHBhcnRzIG9mIGl0LCBzbyBpdCB3b3JrcyBpbiBOZXh0anMgYW5kIFJlYWN0IFxyXG5cclxuLy8gLS0gSGFydmV5IFJhbmRhbGwgMjEvNS8yMVxyXG5pbXBvcnQge1xyXG5cdEFuaW1hdGlvbkNsaXAsXHJcblx0Qm9uZSxcclxuXHRCb3gzLFxyXG5cdEJ1ZmZlckF0dHJpYnV0ZSxcclxuXHRCdWZmZXJHZW9tZXRyeSxcclxuXHRDYW52YXNUZXh0dXJlLFxyXG5cdENsYW1wVG9FZGdlV3JhcHBpbmcsXHJcblx0Q29sb3IsXHJcblx0RGlyZWN0aW9uYWxMaWdodCxcclxuXHREb3VibGVTaWRlLFxyXG5cdEZpbGVMb2FkZXIsXHJcblx0RnJvbnRTaWRlLFxyXG5cdEdyb3VwLFxyXG5cdEltYWdlQml0bWFwTG9hZGVyLFxyXG5cdEludGVybGVhdmVkQnVmZmVyLFxyXG5cdEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlLFxyXG5cdEludGVycG9sYW50LFxyXG5cdEludGVycG9sYXRlRGlzY3JldGUsXHJcblx0SW50ZXJwb2xhdGVMaW5lYXIsXHJcblx0TGluZSxcclxuXHRMaW5lQmFzaWNNYXRlcmlhbCxcclxuXHRMaW5lTG9vcCxcclxuXHRMaW5lU2VnbWVudHMsXHJcblx0TGluZWFyRmlsdGVyLFxyXG5cdExpbmVhck1pcG1hcExpbmVhckZpbHRlcixcclxuXHRMaW5lYXJNaXBtYXBOZWFyZXN0RmlsdGVyLFxyXG5cdExvYWRlcixcclxuXHRMb2FkZXJVdGlscyxcclxuXHRNYXRlcmlhbCxcclxuXHRNYXRoVXRpbHMsXHJcblx0TWF0cml4NCxcclxuXHRNZXNoLFxyXG5cdE1lc2hCYXNpY01hdGVyaWFsLFxyXG5cdE1lc2hQaHlzaWNhbE1hdGVyaWFsLFxyXG5cdE1lc2hTdGFuZGFyZE1hdGVyaWFsLFxyXG5cdE1pcnJvcmVkUmVwZWF0V3JhcHBpbmcsXHJcblx0TmVhcmVzdEZpbHRlcixcclxuXHROZWFyZXN0TWlwbWFwTGluZWFyRmlsdGVyLFxyXG5cdE5lYXJlc3RNaXBtYXBOZWFyZXN0RmlsdGVyLFxyXG5cdE51bWJlcktleWZyYW1lVHJhY2ssXHJcblx0T2JqZWN0M0QsXHJcblx0T3J0aG9ncmFwaGljQ2FtZXJhLFxyXG5cdFBlcnNwZWN0aXZlQ2FtZXJhLFxyXG5cdFBvaW50TGlnaHQsXHJcblx0UG9pbnRzLFxyXG5cdFBvaW50c01hdGVyaWFsLFxyXG5cdFByb3BlcnR5QmluZGluZyxcclxuXHRRdWF0ZXJuaW9uS2V5ZnJhbWVUcmFjayxcclxuXHRSR0JGb3JtYXQsXHJcblx0UmVwZWF0V3JhcHBpbmcsXHJcblx0U2tlbGV0b24sXHJcblx0U2tpbm5lZE1lc2gsXHJcblx0U3BoZXJlLFxyXG5cdFNwb3RMaWdodCxcclxuXHRUYW5nZW50U3BhY2VOb3JtYWxNYXAsXHJcblx0VGV4dHVyZUxvYWRlcixcclxuXHRUcmlhbmdsZUZhbkRyYXdNb2RlLFxyXG5cdFRyaWFuZ2xlU3RyaXBEcmF3TW9kZSxcclxuXHRWZWN0b3IyLFxyXG5cdFZlY3RvcjMsXHJcblx0VmVjdG9yS2V5ZnJhbWVUcmFjayxcclxuXHRzUkdCRW5jb2RpbmdcclxufSBmcm9tICd0aHJlZSc7XHJcblxyXG52YXIgR0xURkxvYWRlciA9ICggZnVuY3Rpb24gKCkge1xyXG5cclxuXHRmdW5jdGlvbiBHTFRGTG9hZGVyKCBtYW5hZ2VyICkge1xyXG5cclxuXHRcdExvYWRlci5jYWxsKCB0aGlzLCBtYW5hZ2VyICk7XHJcblxyXG5cdFx0dGhpcy5kcmFjb0xvYWRlciA9IG51bGw7XHJcblx0XHR0aGlzLmt0eDJMb2FkZXIgPSBudWxsO1xyXG5cdFx0dGhpcy5tZXNob3B0RGVjb2RlciA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5wbHVnaW5DYWxsYmFja3MgPSBbXTtcclxuXHJcblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgR0xURk1hdGVyaWFsc0NsZWFyY29hdEV4dGVuc2lvbiggcGFyc2VyICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGVGV4dHVyZUJhc2lzVUV4dGVuc2lvbiggcGFyc2VyICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGVGV4dHVyZVdlYlBFeHRlbnNpb24oIHBhcnNlciApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgR0xURk1hdGVyaWFsc1RyYW5zbWlzc2lvbkV4dGVuc2lvbiggcGFyc2VyICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTGlnaHRzRXh0ZW5zaW9uKCBwYXJzZXIgKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNZXNob3B0Q29tcHJlc3Npb24oIHBhcnNlciApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fVxyXG5cclxuXHRHTFRGTG9hZGVyLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIExvYWRlci5wcm90b3R5cGUgKSwge1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yOiBHTFRGTG9hZGVyLFxyXG5cclxuXHRcdGxvYWQ6IGZ1bmN0aW9uICggdXJsLCBvbkxvYWQsIG9uUHJvZ3Jlc3MsIG9uRXJyb3IgKSB7XHJcblxyXG5cdFx0XHR2YXIgc2NvcGUgPSB0aGlzO1xyXG5cclxuXHRcdFx0dmFyIHJlc291cmNlUGF0aDtcclxuXHJcblx0XHRcdGlmICggdGhpcy5yZXNvdXJjZVBhdGggIT09ICcnICkge1xyXG5cclxuXHRcdFx0XHRyZXNvdXJjZVBhdGggPSB0aGlzLnJlc291cmNlUGF0aDtcclxuXHJcblx0XHRcdH0gZWxzZSBpZiAoIHRoaXMucGF0aCAhPT0gJycgKSB7XHJcblxyXG5cdFx0XHRcdHJlc291cmNlUGF0aCA9IHRoaXMucGF0aDtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdHJlc291cmNlUGF0aCA9IExvYWRlclV0aWxzLmV4dHJhY3RVcmxCYXNlKCB1cmwgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFRlbGxzIHRoZSBMb2FkaW5nTWFuYWdlciB0byB0cmFjayBhbiBleHRyYSBpdGVtLCB3aGljaCByZXNvbHZlcyBhZnRlclxyXG5cdFx0XHQvLyB0aGUgbW9kZWwgaXMgZnVsbHkgbG9hZGVkLiBUaGlzIG1lYW5zIHRoZSBjb3VudCBvZiBpdGVtcyBsb2FkZWQgd2lsbFxyXG5cdFx0XHQvLyBiZSBpbmNvcnJlY3QsIGJ1dCBlbnN1cmVzIG1hbmFnZXIub25Mb2FkKCkgZG9lcyBub3QgZmlyZSBlYXJseS5cclxuXHRcdFx0dGhpcy5tYW5hZ2VyLml0ZW1TdGFydCggdXJsICk7XHJcblxyXG5cdFx0XHR2YXIgX29uRXJyb3IgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG5cdFx0XHRcdGlmICggb25FcnJvciApIHtcclxuXHJcblx0XHRcdFx0XHRvbkVycm9yKCBlICk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvciggZSApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHNjb3BlLm1hbmFnZXIuaXRlbUVycm9yKCB1cmwgKTtcclxuXHRcdFx0XHRzY29wZS5tYW5hZ2VyLml0ZW1FbmQoIHVybCApO1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciBsb2FkZXIgPSBuZXcgRmlsZUxvYWRlciggdGhpcy5tYW5hZ2VyICk7XHJcblxyXG5cdFx0XHRsb2FkZXIuc2V0UGF0aCggdGhpcy5wYXRoICk7XHJcblx0XHRcdGxvYWRlci5zZXRSZXNwb25zZVR5cGUoICdhcnJheWJ1ZmZlcicgKTtcclxuXHRcdFx0bG9hZGVyLnNldFJlcXVlc3RIZWFkZXIoIHRoaXMucmVxdWVzdEhlYWRlciApO1xyXG5cdFx0XHRsb2FkZXIuc2V0V2l0aENyZWRlbnRpYWxzKCB0aGlzLndpdGhDcmVkZW50aWFscyApO1xyXG5cclxuXHRcdFx0bG9hZGVyLmxvYWQoIHVybCwgZnVuY3Rpb24gKCBkYXRhICkge1xyXG5cclxuXHRcdFx0XHR0cnkge1xyXG5cclxuXHRcdFx0XHRcdHNjb3BlLnBhcnNlKCBkYXRhLCByZXNvdXJjZVBhdGgsIGZ1bmN0aW9uICggZ2x0ZiApIHtcclxuXHJcblx0XHRcdFx0XHRcdG9uTG9hZCggZ2x0ZiApO1xyXG5cclxuXHRcdFx0XHRcdFx0c2NvcGUubWFuYWdlci5pdGVtRW5kKCB1cmwgKTtcclxuXHJcblx0XHRcdFx0XHR9LCBfb25FcnJvciApO1xyXG5cclxuXHRcdFx0XHR9IGNhdGNoICggZSApIHtcclxuXHJcblx0XHRcdFx0XHRfb25FcnJvciggZSApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9LCBvblByb2dyZXNzLCBfb25FcnJvciApO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RFJBQ09Mb2FkZXI6IGZ1bmN0aW9uICggZHJhY29Mb2FkZXIgKSB7XHJcblxyXG5cdFx0XHR0aGlzLmRyYWNvTG9hZGVyID0gZHJhY29Mb2FkZXI7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RERTTG9hZGVyOiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblxyXG5cdFx0XHRcdCdUSFJFRS5HTFRGTG9hZGVyOiBcIk1TRlRfdGV4dHVyZV9kZHNcIiBubyBsb25nZXIgc3VwcG9ydGVkLiBQbGVhc2UgdXBkYXRlIHRvIFwiS0hSX3RleHR1cmVfYmFzaXN1XCIuJ1xyXG5cclxuXHRcdFx0KTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHNldEtUWDJMb2FkZXI6IGZ1bmN0aW9uICgga3R4MkxvYWRlciApIHtcclxuXHJcblx0XHRcdHRoaXMua3R4MkxvYWRlciA9IGt0eDJMb2FkZXI7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0TWVzaG9wdERlY29kZXI6IGZ1bmN0aW9uICggbWVzaG9wdERlY29kZXIgKSB7XHJcblxyXG5cdFx0XHR0aGlzLm1lc2hvcHREZWNvZGVyID0gbWVzaG9wdERlY29kZXI7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0cmVnaXN0ZXI6IGZ1bmN0aW9uICggY2FsbGJhY2sgKSB7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMucGx1Z2luQ2FsbGJhY2tzLmluZGV4T2YoIGNhbGxiYWNrICkgPT09IC0gMSApIHtcclxuXHJcblx0XHRcdFx0dGhpcy5wbHVnaW5DYWxsYmFja3MucHVzaCggY2FsbGJhY2sgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0dW5yZWdpc3RlcjogZnVuY3Rpb24gKCBjYWxsYmFjayApIHtcclxuXHJcblx0XHRcdGlmICggdGhpcy5wbHVnaW5DYWxsYmFja3MuaW5kZXhPZiggY2FsbGJhY2sgKSAhPT0gLSAxICkge1xyXG5cclxuXHRcdFx0XHR0aGlzLnBsdWdpbkNhbGxiYWNrcy5zcGxpY2UoIHRoaXMucGx1Z2luQ2FsbGJhY2tzLmluZGV4T2YoIGNhbGxiYWNrICksIDEgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0cGFyc2U6IGZ1bmN0aW9uICggZGF0YSwgcGF0aCwgb25Mb2FkLCBvbkVycm9yICkge1xyXG5cclxuXHRcdFx0dmFyIGNvbnRlbnQ7XHJcblx0XHRcdHZhciBleHRlbnNpb25zID0ge307XHJcblx0XHRcdHZhciBwbHVnaW5zID0ge307XHJcblxyXG5cdFx0XHRpZiAoIHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyApIHtcclxuXHJcblx0XHRcdFx0Y29udGVudCA9IGRhdGE7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHR2YXIgbWFnaWMgPSBMb2FkZXJVdGlscy5kZWNvZGVUZXh0KCBuZXcgVWludDhBcnJheSggZGF0YSwgMCwgNCApICk7XHJcblxyXG5cdFx0XHRcdGlmICggbWFnaWMgPT09IEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX01BR0lDICkge1xyXG5cclxuXHRcdFx0XHRcdHRyeSB7XHJcblxyXG5cdFx0XHRcdFx0XHRleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9CSU5BUllfR0xURiBdID0gbmV3IEdMVEZCaW5hcnlFeHRlbnNpb24oIGRhdGEgKTtcclxuXHJcblx0XHRcdFx0XHR9IGNhdGNoICggZXJyb3IgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIG9uRXJyb3IgKSBvbkVycm9yKCBlcnJvciApO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGNvbnRlbnQgPSBleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9CSU5BUllfR0xURiBdLmNvbnRlbnQ7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0Y29udGVudCA9IExvYWRlclV0aWxzLmRlY29kZVRleHQoIG5ldyBVaW50OEFycmF5KCBkYXRhICkgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIGpzb24gPSBKU09OLnBhcnNlKCBjb250ZW50ICk7XHJcblxyXG5cdFx0XHRpZiAoIGpzb24uYXNzZXQgPT09IHVuZGVmaW5lZCB8fCBqc29uLmFzc2V0LnZlcnNpb25bIDAgXSA8IDIgKSB7XHJcblxyXG5cdFx0XHRcdGlmICggb25FcnJvciApIG9uRXJyb3IoIG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFVuc3VwcG9ydGVkIGFzc2V0LiBnbFRGIHZlcnNpb25zID49Mi4wIGFyZSBzdXBwb3J0ZWQuJyApICk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIHBhcnNlciA9IG5ldyBHTFRGUGFyc2VyKCBqc29uLCB7XHJcblxyXG5cdFx0XHRcdHBhdGg6IHBhdGggfHwgdGhpcy5yZXNvdXJjZVBhdGggfHwgJycsXHJcblx0XHRcdFx0Y3Jvc3NPcmlnaW46IHRoaXMuY3Jvc3NPcmlnaW4sXHJcblx0XHRcdFx0cmVxdWVzdEhlYWRlcjogdGhpcy5yZXF1ZXN0SGVhZGVyLFxyXG5cdFx0XHRcdG1hbmFnZXI6IHRoaXMubWFuYWdlcixcclxuXHRcdFx0XHRrdHgyTG9hZGVyOiB0aGlzLmt0eDJMb2FkZXIsXHJcblx0XHRcdFx0bWVzaG9wdERlY29kZXI6IHRoaXMubWVzaG9wdERlY29kZXJcclxuXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHRcdHBhcnNlci5maWxlTG9hZGVyLnNldFJlcXVlc3RIZWFkZXIoIHRoaXMucmVxdWVzdEhlYWRlciApO1xyXG5cclxuXHRcdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5wbHVnaW5DYWxsYmFja3MubGVuZ3RoOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHR2YXIgcGx1Z2luID0gdGhpcy5wbHVnaW5DYWxsYmFja3NbIGkgXSggcGFyc2VyICk7XHJcblx0XHRcdFx0cGx1Z2luc1sgcGx1Z2luLm5hbWUgXSA9IHBsdWdpbjtcclxuXHJcblx0XHRcdFx0Ly8gV29ya2Fyb3VuZCB0byBhdm9pZCBkZXRlcm1pbmluZyBhcyB1bmtub3duIGV4dGVuc2lvblxyXG5cdFx0XHRcdC8vIGluIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSgpLlxyXG5cdFx0XHRcdC8vIFJlbW92ZSB0aGlzIHdvcmthcm91bmQgaWYgd2UgbW92ZSBhbGwgdGhlIGV4aXN0aW5nXHJcblx0XHRcdFx0Ly8gZXh0ZW5zaW9uIGhhbmRsZXJzIHRvIHBsdWdpbiBzeXN0ZW1cclxuXHRcdFx0XHRleHRlbnNpb25zWyBwbHVnaW4ubmFtZSBdID0gdHJ1ZTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICgganNvbi5leHRlbnNpb25zVXNlZCApIHtcclxuXHJcblx0XHRcdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwganNvbi5leHRlbnNpb25zVXNlZC5sZW5ndGg7ICsrIGkgKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGV4dGVuc2lvbk5hbWUgPSBqc29uLmV4dGVuc2lvbnNVc2VkWyBpIF07XHJcblx0XHRcdFx0XHR2YXIgZXh0ZW5zaW9uc1JlcXVpcmVkID0ganNvbi5leHRlbnNpb25zUmVxdWlyZWQgfHwgW107XHJcblxyXG5cdFx0XHRcdFx0c3dpdGNoICggZXh0ZW5zaW9uTmFtZSApIHtcclxuXHJcblx0XHRcdFx0XHRcdGNhc2UgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1VOTElUOlxyXG5cdFx0XHRcdFx0XHRcdGV4dGVuc2lvbnNbIGV4dGVuc2lvbk5hbWUgXSA9IG5ldyBHTFRGTWF0ZXJpYWxzVW5saXRFeHRlbnNpb24oKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdGNhc2UgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTOlxyXG5cdFx0XHRcdFx0XHRcdGV4dGVuc2lvbnNbIGV4dGVuc2lvbk5hbWUgXSA9IG5ldyBHTFRGTWF0ZXJpYWxzUGJyU3BlY3VsYXJHbG9zc2luZXNzRXh0ZW5zaW9uKCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRjYXNlIEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT046XHJcblx0XHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgZXh0ZW5zaW9uTmFtZSBdID0gbmV3IEdMVEZEcmFjb01lc2hDb21wcmVzc2lvbkV4dGVuc2lvbigganNvbiwgdGhpcy5kcmFjb0xvYWRlciApO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9URVhUVVJFX1RSQU5TRk9STTpcclxuXHRcdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURlRleHR1cmVUcmFuc2Zvcm1FeHRlbnNpb24oKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdGNhc2UgRVhURU5TSU9OUy5LSFJfTUVTSF9RVUFOVElaQVRJT046XHJcblx0XHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgZXh0ZW5zaW9uTmFtZSBdID0gbmV3IEdMVEZNZXNoUXVhbnRpemF0aW9uRXh0ZW5zaW9uKCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoIGV4dGVuc2lvbnNSZXF1aXJlZC5pbmRleE9mKCBleHRlbnNpb25OYW1lICkgPj0gMCAmJiBwbHVnaW5zWyBleHRlbnNpb25OYW1lIF0gPT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBVbmtub3duIGV4dGVuc2lvbiBcIicgKyBleHRlbnNpb25OYW1lICsgJ1wiLicgKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cGFyc2VyLnNldEV4dGVuc2lvbnMoIGV4dGVuc2lvbnMgKTtcclxuXHRcdFx0cGFyc2VyLnNldFBsdWdpbnMoIHBsdWdpbnMgKTtcclxuXHRcdFx0cGFyc2VyLnBhcnNlKCBvbkxvYWQsIG9uRXJyb3IgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0gKTtcclxuXHJcblx0LyogR0xURlJFR0lTVFJZICovXHJcblxyXG5cdGZ1bmN0aW9uIEdMVEZSZWdpc3RyeSgpIHtcclxuXHJcblx0XHR2YXIgb2JqZWN0cyA9IHt9O1xyXG5cclxuXHRcdHJldHVyblx0e1xyXG5cclxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoIGtleSApIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuIG9iamVjdHNbIGtleSBdO1xyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGFkZDogZnVuY3Rpb24gKCBrZXksIG9iamVjdCApIHtcclxuXHJcblx0XHRcdFx0b2JqZWN0c1sga2V5IF0gPSBvYmplY3Q7XHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0cmVtb3ZlOiBmdW5jdGlvbiAoIGtleSApIHtcclxuXHJcblx0XHRcdFx0ZGVsZXRlIG9iamVjdHNbIGtleSBdO1xyXG5cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHJlbW92ZUFsbDogZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRvYmplY3RzID0ge307XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fTtcclxuXHJcblx0fVxyXG5cclxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdC8qKioqKioqKioqIEVYVEVOU0lPTlMgKioqKioqKioqKiovXHJcblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0dmFyIEVYVEVOU0lPTlMgPSB7XHJcblx0XHRLSFJfQklOQVJZX0dMVEY6ICdLSFJfYmluYXJ5X2dsVEYnLFxyXG5cdFx0S0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT046ICdLSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvbicsXHJcblx0XHRLSFJfTElHSFRTX1BVTkNUVUFMOiAnS0hSX2xpZ2h0c19wdW5jdHVhbCcsXHJcblx0XHRLSFJfTUFURVJJQUxTX0NMRUFSQ09BVDogJ0tIUl9tYXRlcmlhbHNfY2xlYXJjb2F0JyxcclxuXHRcdEtIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1M6ICdLSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzcycsXHJcblx0XHRLSFJfTUFURVJJQUxTX1RSQU5TTUlTU0lPTjogJ0tIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uJyxcclxuXHRcdEtIUl9NQVRFUklBTFNfVU5MSVQ6ICdLSFJfbWF0ZXJpYWxzX3VubGl0JyxcclxuXHRcdEtIUl9URVhUVVJFX0JBU0lTVTogJ0tIUl90ZXh0dXJlX2Jhc2lzdScsXHJcblx0XHRLSFJfVEVYVFVSRV9UUkFOU0ZPUk06ICdLSFJfdGV4dHVyZV90cmFuc2Zvcm0nLFxyXG5cdFx0S0hSX01FU0hfUVVBTlRJWkFUSU9OOiAnS0hSX21lc2hfcXVhbnRpemF0aW9uJyxcclxuXHRcdEVYVF9URVhUVVJFX1dFQlA6ICdFWFRfdGV4dHVyZV93ZWJwJyxcclxuXHRcdEVYVF9NRVNIT1BUX0NPTVBSRVNTSU9OOiAnRVhUX21lc2hvcHRfY29tcHJlc3Npb24nXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogUHVuY3R1YWwgTGlnaHRzIEV4dGVuc2lvblxyXG5cdCAqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX2xpZ2h0c19wdW5jdHVhbFxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIEdMVEZMaWdodHNFeHRlbnNpb24oIHBhcnNlciApIHtcclxuXHJcblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcclxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX0xJR0hUU19QVU5DVFVBTDtcclxuXHJcblx0XHQvLyBPYmplY3QzRCBpbnN0YW5jZSBjYWNoZXNcclxuXHRcdHRoaXMuY2FjaGUgPSB7IHJlZnM6IHt9LCB1c2VzOiB7fSB9O1xyXG5cclxuXHR9XHJcblxyXG5cdEdMVEZMaWdodHNFeHRlbnNpb24ucHJvdG90eXBlLl9tYXJrRGVmcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHR2YXIgcGFyc2VyID0gdGhpcy5wYXJzZXI7XHJcblx0XHR2YXIgbm9kZURlZnMgPSB0aGlzLnBhcnNlci5qc29uLm5vZGVzIHx8IFtdO1xyXG5cclxuXHRcdGZvciAoIHZhciBub2RlSW5kZXggPSAwLCBub2RlTGVuZ3RoID0gbm9kZURlZnMubGVuZ3RoOyBub2RlSW5kZXggPCBub2RlTGVuZ3RoOyBub2RlSW5kZXggKysgKSB7XHJcblxyXG5cdFx0XHR2YXIgbm9kZURlZiA9IG5vZGVEZWZzWyBub2RlSW5kZXggXTtcclxuXHJcblx0XHRcdGlmICggbm9kZURlZi5leHRlbnNpb25zXHJcblx0XHRcdFx0JiYgbm9kZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXVxyXG5cdFx0XHRcdCYmIG5vZGVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0ubGlnaHQgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0cGFyc2VyLl9hZGROb2RlUmVmKCB0aGlzLmNhY2hlLCBub2RlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdLmxpZ2h0ICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHRHTFRGTGlnaHRzRXh0ZW5zaW9uLnByb3RvdHlwZS5fbG9hZExpZ2h0ID0gZnVuY3Rpb24gKCBsaWdodEluZGV4ICkge1xyXG5cclxuXHRcdHZhciBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcclxuXHRcdHZhciBjYWNoZUtleSA9ICdsaWdodDonICsgbGlnaHRJbmRleDtcclxuXHRcdHZhciBkZXBlbmRlbmN5ID0gcGFyc2VyLmNhY2hlLmdldCggY2FjaGVLZXkgKTtcclxuXHJcblx0XHRpZiAoIGRlcGVuZGVuY3kgKSByZXR1cm4gZGVwZW5kZW5jeTtcclxuXHJcblx0XHR2YXIganNvbiA9IHBhcnNlci5qc29uO1xyXG5cdFx0dmFyIGV4dGVuc2lvbnMgPSAoIGpzb24uZXh0ZW5zaW9ucyAmJiBqc29uLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgfHwge307XHJcblx0XHR2YXIgbGlnaHREZWZzID0gZXh0ZW5zaW9ucy5saWdodHMgfHwgW107XHJcblx0XHR2YXIgbGlnaHREZWYgPSBsaWdodERlZnNbIGxpZ2h0SW5kZXggXTtcclxuXHRcdHZhciBsaWdodE5vZGU7XHJcblxyXG5cdFx0dmFyIGNvbG9yID0gbmV3IENvbG9yKCAweGZmZmZmZiApO1xyXG5cclxuXHRcdGlmICggbGlnaHREZWYuY29sb3IgIT09IHVuZGVmaW5lZCApIGNvbG9yLmZyb21BcnJheSggbGlnaHREZWYuY29sb3IgKTtcclxuXHJcblx0XHR2YXIgcmFuZ2UgPSBsaWdodERlZi5yYW5nZSAhPT0gdW5kZWZpbmVkID8gbGlnaHREZWYucmFuZ2UgOiAwO1xyXG5cclxuXHRcdHN3aXRjaCAoIGxpZ2h0RGVmLnR5cGUgKSB7XHJcblxyXG5cdFx0XHRjYXNlICdkaXJlY3Rpb25hbCc6XHJcblx0XHRcdFx0bGlnaHROb2RlID0gbmV3IERpcmVjdGlvbmFsTGlnaHQoIGNvbG9yICk7XHJcblx0XHRcdFx0bGlnaHROb2RlLnRhcmdldC5wb3NpdGlvbi5zZXQoIDAsIDAsIC0gMSApO1xyXG5cdFx0XHRcdGxpZ2h0Tm9kZS5hZGQoIGxpZ2h0Tm9kZS50YXJnZXQgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ3BvaW50JzpcclxuXHRcdFx0XHRsaWdodE5vZGUgPSBuZXcgUG9pbnRMaWdodCggY29sb3IgKTtcclxuXHRcdFx0XHRsaWdodE5vZGUuZGlzdGFuY2UgPSByYW5nZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ3Nwb3QnOlxyXG5cdFx0XHRcdGxpZ2h0Tm9kZSA9IG5ldyBTcG90TGlnaHQoIGNvbG9yICk7XHJcblx0XHRcdFx0bGlnaHROb2RlLmRpc3RhbmNlID0gcmFuZ2U7XHJcblx0XHRcdFx0Ly8gSGFuZGxlIHNwb3RsaWdodCBwcm9wZXJ0aWVzLlxyXG5cdFx0XHRcdGxpZ2h0RGVmLnNwb3QgPSBsaWdodERlZi5zcG90IHx8IHt9O1xyXG5cdFx0XHRcdGxpZ2h0RGVmLnNwb3QuaW5uZXJDb25lQW5nbGUgPSBsaWdodERlZi5zcG90LmlubmVyQ29uZUFuZ2xlICE9PSB1bmRlZmluZWQgPyBsaWdodERlZi5zcG90LmlubmVyQ29uZUFuZ2xlIDogMDtcclxuXHRcdFx0XHRsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlID0gbGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZSAhPT0gdW5kZWZpbmVkID8gbGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZSA6IE1hdGguUEkgLyA0LjA7XHJcblx0XHRcdFx0bGlnaHROb2RlLmFuZ2xlID0gbGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZTtcclxuXHRcdFx0XHRsaWdodE5vZGUucGVudW1icmEgPSAxLjAgLSBsaWdodERlZi5zcG90LmlubmVyQ29uZUFuZ2xlIC8gbGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZTtcclxuXHRcdFx0XHRsaWdodE5vZGUudGFyZ2V0LnBvc2l0aW9uLnNldCggMCwgMCwgLSAxICk7XHJcblx0XHRcdFx0bGlnaHROb2RlLmFkZCggbGlnaHROb2RlLnRhcmdldCApO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBVbmV4cGVjdGVkIGxpZ2h0IHR5cGU6ICcgKyBsaWdodERlZi50eXBlICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFNvbWUgbGlnaHRzIChlLmcuIHNwb3QpIGRlZmF1bHQgdG8gYSBwb3NpdGlvbiBvdGhlciB0aGFuIHRoZSBvcmlnaW4uIFJlc2V0IHRoZSBwb3NpdGlvblxyXG5cdFx0Ly8gaGVyZSwgYmVjYXVzZSBub2RlLWxldmVsIHBhcnNpbmcgd2lsbCBvbmx5IG92ZXJyaWRlIHBvc2l0aW9uIGlmIGV4cGxpY2l0bHkgc3BlY2lmaWVkLlxyXG5cdFx0bGlnaHROb2RlLnBvc2l0aW9uLnNldCggMCwgMCwgMCApO1xyXG5cclxuXHRcdGxpZ2h0Tm9kZS5kZWNheSA9IDI7XHJcblxyXG5cdFx0aWYgKCBsaWdodERlZi5pbnRlbnNpdHkgIT09IHVuZGVmaW5lZCApIGxpZ2h0Tm9kZS5pbnRlbnNpdHkgPSBsaWdodERlZi5pbnRlbnNpdHk7XHJcblxyXG5cdFx0bGlnaHROb2RlLm5hbWUgPSBwYXJzZXIuY3JlYXRlVW5pcXVlTmFtZSggbGlnaHREZWYubmFtZSB8fCAoICdsaWdodF8nICsgbGlnaHRJbmRleCApICk7XHJcblxyXG5cdFx0ZGVwZW5kZW5jeSA9IFByb21pc2UucmVzb2x2ZSggbGlnaHROb2RlICk7XHJcblxyXG5cdFx0cGFyc2VyLmNhY2hlLmFkZCggY2FjaGVLZXksIGRlcGVuZGVuY3kgKTtcclxuXHJcblx0XHRyZXR1cm4gZGVwZW5kZW5jeTtcclxuXHJcblx0fTtcclxuXHJcblx0R0xURkxpZ2h0c0V4dGVuc2lvbi5wcm90b3R5cGUuY3JlYXRlTm9kZUF0dGFjaG1lbnQgPSBmdW5jdGlvbiAoIG5vZGVJbmRleCApIHtcclxuXHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR2YXIgcGFyc2VyID0gdGhpcy5wYXJzZXI7XHJcblx0XHR2YXIganNvbiA9IHBhcnNlci5qc29uO1xyXG5cdFx0dmFyIG5vZGVEZWYgPSBqc29uLm5vZGVzWyBub2RlSW5kZXggXTtcclxuXHRcdHZhciBsaWdodERlZiA9ICggbm9kZURlZi5leHRlbnNpb25zICYmIG5vZGVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB8fCB7fTtcclxuXHRcdHZhciBsaWdodEluZGV4ID0gbGlnaHREZWYubGlnaHQ7XHJcblxyXG5cdFx0aWYgKCBsaWdodEluZGV4ID09PSB1bmRlZmluZWQgKSByZXR1cm4gbnVsbDtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5fbG9hZExpZ2h0KCBsaWdodEluZGV4ICkudGhlbiggZnVuY3Rpb24gKCBsaWdodCApIHtcclxuXHJcblx0XHRcdHJldHVybiBwYXJzZXIuX2dldE5vZGVSZWYoIHNlbGYuY2FjaGUsIGxpZ2h0SW5kZXgsIGxpZ2h0ICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBVbmxpdCBNYXRlcmlhbHMgRXh0ZW5zaW9uXHJcblx0ICpcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3VubGl0XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gR0xURk1hdGVyaWFsc1VubGl0RXh0ZW5zaW9uKCkge1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19VTkxJVDtcclxuXHJcblx0fVxyXG5cclxuXHRHTFRGTWF0ZXJpYWxzVW5saXRFeHRlbnNpb24ucHJvdG90eXBlLmdldE1hdGVyaWFsVHlwZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRyZXR1cm4gTWVzaEJhc2ljTWF0ZXJpYWw7XHJcblxyXG5cdH07XHJcblxyXG5cdEdMVEZNYXRlcmlhbHNVbmxpdEV4dGVuc2lvbi5wcm90b3R5cGUuZXh0ZW5kUGFyYW1zID0gZnVuY3Rpb24gKCBtYXRlcmlhbFBhcmFtcywgbWF0ZXJpYWxEZWYsIHBhcnNlciApIHtcclxuXHJcblx0XHR2YXIgcGVuZGluZyA9IFtdO1xyXG5cclxuXHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yID0gbmV3IENvbG9yKCAxLjAsIDEuMCwgMS4wICk7XHJcblx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gMS4wO1xyXG5cclxuXHRcdHZhciBtZXRhbGxpY1JvdWdobmVzcyA9IG1hdGVyaWFsRGVmLnBick1ldGFsbGljUm91Z2huZXNzO1xyXG5cclxuXHRcdGlmICggbWV0YWxsaWNSb3VnaG5lc3MgKSB7XHJcblxyXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvciApICkge1xyXG5cclxuXHRcdFx0XHR2YXIgYXJyYXkgPSBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3I7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yLmZyb21BcnJheSggYXJyYXkgKTtcclxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gYXJyYXlbIDMgXTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ21hcCcsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgKSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ2xlYXJjb2F0IE1hdGVyaWFscyBFeHRlbnNpb25cclxuXHQgKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfY2xlYXJjb2F0XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gR0xURk1hdGVyaWFsc0NsZWFyY29hdEV4dGVuc2lvbiggcGFyc2VyICkge1xyXG5cclxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xyXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX0NMRUFSQ09BVDtcclxuXHJcblx0fVxyXG5cclxuXHRHTFRGTWF0ZXJpYWxzQ2xlYXJjb2F0RXh0ZW5zaW9uLnByb3RvdHlwZS5nZXRNYXRlcmlhbFR5cGUgPSBmdW5jdGlvbiAoIG1hdGVyaWFsSW5kZXggKSB7XHJcblxyXG5cdFx0dmFyIHBhcnNlciA9IHRoaXMucGFyc2VyO1xyXG5cdFx0dmFyIG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XHJcblxyXG5cdFx0aWYgKCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwgISBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHJldHVybiBudWxsO1xyXG5cclxuXHRcdHJldHVybiBNZXNoUGh5c2ljYWxNYXRlcmlhbDtcclxuXHJcblx0fTtcclxuXHJcblx0R0xURk1hdGVyaWFsc0NsZWFyY29hdEV4dGVuc2lvbi5wcm90b3R5cGUuZXh0ZW5kTWF0ZXJpYWxQYXJhbXMgPSBmdW5jdGlvbiAoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICkge1xyXG5cclxuXHRcdHZhciBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcclxuXHRcdHZhciBtYXRlcmlhbERlZiA9IHBhcnNlci5qc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xyXG5cclxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBwZW5kaW5nID0gW107XHJcblxyXG5cdFx0dmFyIGV4dGVuc2lvbiA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xyXG5cclxuXHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdEZhY3RvciAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuY2xlYXJjb2F0ID0gZXh0ZW5zaW9uLmNsZWFyY29hdEZhY3RvcjtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0VGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdjbGVhcmNvYXRNYXAnLCBleHRlbnNpb24uY2xlYXJjb2F0VGV4dHVyZSApICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdFJvdWdobmVzc0ZhY3RvciAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuY2xlYXJjb2F0Um91Z2huZXNzID0gZXh0ZW5zaW9uLmNsZWFyY29hdFJvdWdobmVzc0ZhY3RvcjtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdjbGVhcmNvYXRSb3VnaG5lc3NNYXAnLCBleHRlbnNpb24uY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZSApICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdE5vcm1hbFRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnY2xlYXJjb2F0Tm9ybWFsTWFwJywgZXh0ZW5zaW9uLmNsZWFyY29hdE5vcm1hbFRleHR1cmUgKSApO1xyXG5cclxuXHRcdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZS5zY2FsZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHR2YXIgc2NhbGUgPSBleHRlbnNpb24uY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZS5zY2FsZTtcclxuXHJcblx0XHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTE0MzgjaXNzdWVjb21tZW50LTUwNzAwMzk5NVxyXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmNsZWFyY29hdE5vcm1hbFNjYWxlID0gbmV3IFZlY3RvcjIoIHNjYWxlLCAtIHNjYWxlICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBUcmFuc21pc3Npb24gTWF0ZXJpYWxzIEV4dGVuc2lvblxyXG5cdCAqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc190cmFuc21pc3Npb25cclxuXHQgKiBEcmFmdDogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3B1bGwvMTY5OFxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIEdMVEZNYXRlcmlhbHNUcmFuc21pc3Npb25FeHRlbnNpb24oIHBhcnNlciApIHtcclxuXHJcblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcclxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19UUkFOU01JU1NJT047XHJcblxyXG5cdH1cclxuXHJcblx0R0xURk1hdGVyaWFsc1RyYW5zbWlzc2lvbkV4dGVuc2lvbi5wcm90b3R5cGUuZ2V0TWF0ZXJpYWxUeXBlID0gZnVuY3Rpb24gKCBtYXRlcmlhbEluZGV4ICkge1xyXG5cclxuXHRcdHZhciBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcclxuXHRcdHZhciBtYXRlcmlhbERlZiA9IHBhcnNlci5qc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xyXG5cclxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSByZXR1cm4gbnVsbDtcclxuXHJcblx0XHRyZXR1cm4gTWVzaFBoeXNpY2FsTWF0ZXJpYWw7XHJcblxyXG5cdH07XHJcblxyXG5cdEdMVEZNYXRlcmlhbHNUcmFuc21pc3Npb25FeHRlbnNpb24ucHJvdG90eXBlLmV4dGVuZE1hdGVyaWFsUGFyYW1zID0gZnVuY3Rpb24gKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApIHtcclxuXHJcblx0XHR2YXIgcGFyc2VyID0gdGhpcy5wYXJzZXI7XHJcblx0XHR2YXIgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcclxuXHJcblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgcGVuZGluZyA9IFtdO1xyXG5cclxuXHRcdHZhciBleHRlbnNpb24gPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcclxuXHJcblx0XHRpZiAoIGV4dGVuc2lvbi50cmFuc21pc3Npb25GYWN0b3IgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdG1hdGVyaWFsUGFyYW1zLnRyYW5zbWlzc2lvbiA9IGV4dGVuc2lvbi50cmFuc21pc3Npb25GYWN0b3I7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggZXh0ZW5zaW9uLnRyYW5zbWlzc2lvblRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAndHJhbnNtaXNzaW9uTWFwJywgZXh0ZW5zaW9uLnRyYW5zbWlzc2lvblRleHR1cmUgKSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQmFzaXNVIFRleHR1cmUgRXh0ZW5zaW9uXHJcblx0ICpcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfdGV4dHVyZV9iYXNpc3VcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBHTFRGVGV4dHVyZUJhc2lzVUV4dGVuc2lvbiggcGFyc2VyICkge1xyXG5cclxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xyXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9CQVNJU1U7XHJcblxyXG5cdH1cclxuXHJcblx0R0xURlRleHR1cmVCYXNpc1VFeHRlbnNpb24ucHJvdG90eXBlLmxvYWRUZXh0dXJlID0gZnVuY3Rpb24gKCB0ZXh0dXJlSW5kZXggKSB7XHJcblxyXG5cdFx0dmFyIHBhcnNlciA9IHRoaXMucGFyc2VyO1xyXG5cdFx0dmFyIGpzb24gPSBwYXJzZXIuanNvbjtcclxuXHJcblx0XHR2YXIgdGV4dHVyZURlZiA9IGpzb24udGV4dHVyZXNbIHRleHR1cmVJbmRleCBdO1xyXG5cclxuXHRcdGlmICggISB0ZXh0dXJlRGVmLmV4dGVuc2lvbnMgfHwgISB0ZXh0dXJlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBleHRlbnNpb24gPSB0ZXh0dXJlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xyXG5cdFx0dmFyIHNvdXJjZSA9IGpzb24uaW1hZ2VzWyBleHRlbnNpb24uc291cmNlIF07XHJcblx0XHR2YXIgbG9hZGVyID0gcGFyc2VyLm9wdGlvbnMua3R4MkxvYWRlcjtcclxuXHJcblx0XHRpZiAoICEgbG9hZGVyICkge1xyXG5cclxuXHRcdFx0aWYgKCBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZCAmJiBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZC5pbmRleE9mKCB0aGlzLm5hbWUgKSA+PSAwICkge1xyXG5cclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBzZXRLVFgyTG9hZGVyIG11c3QgYmUgY2FsbGVkIGJlZm9yZSBsb2FkaW5nIEtUWDIgdGV4dHVyZXMnICk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHQvLyBBc3N1bWVzIHRoYXQgdGhlIGV4dGVuc2lvbiBpcyBvcHRpb25hbCBhbmQgdGhhdCBhIGZhbGxiYWNrIHRleHR1cmUgaXMgcHJlc2VudFxyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcGFyc2VyLmxvYWRUZXh0dXJlSW1hZ2UoIHRleHR1cmVJbmRleCwgc291cmNlLCBsb2FkZXIgKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogV2ViUCBUZXh0dXJlIEV4dGVuc2lvblxyXG5cdCAqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL1ZlbmRvci9FWFRfdGV4dHVyZV93ZWJwXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gR0xURlRleHR1cmVXZWJQRXh0ZW5zaW9uKCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XHJcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLkVYVF9URVhUVVJFX1dFQlA7XHJcblx0XHR0aGlzLmlzU3VwcG9ydGVkID0gbnVsbDtcclxuXHJcblx0fVxyXG5cclxuXHRHTFRGVGV4dHVyZVdlYlBFeHRlbnNpb24ucHJvdG90eXBlLmxvYWRUZXh0dXJlID0gZnVuY3Rpb24gKCB0ZXh0dXJlSW5kZXggKSB7XHJcblxyXG5cdFx0dmFyIG5hbWUgPSB0aGlzLm5hbWU7XHJcblx0XHR2YXIgcGFyc2VyID0gdGhpcy5wYXJzZXI7XHJcblx0XHR2YXIganNvbiA9IHBhcnNlci5qc29uO1xyXG5cclxuXHRcdHZhciB0ZXh0dXJlRGVmID0ganNvbi50ZXh0dXJlc1sgdGV4dHVyZUluZGV4IF07XHJcblxyXG5cdFx0aWYgKCAhIHRleHR1cmVEZWYuZXh0ZW5zaW9ucyB8fCAhIHRleHR1cmVEZWYuZXh0ZW5zaW9uc1sgbmFtZSBdICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBleHRlbnNpb24gPSB0ZXh0dXJlRGVmLmV4dGVuc2lvbnNbIG5hbWUgXTtcclxuXHRcdHZhciBzb3VyY2UgPSBqc29uLmltYWdlc1sgZXh0ZW5zaW9uLnNvdXJjZSBdO1xyXG5cclxuXHRcdHZhciBsb2FkZXIgPSBwYXJzZXIudGV4dHVyZUxvYWRlcjtcclxuXHRcdGlmICggc291cmNlLnVyaSApIHtcclxuXHJcblx0XHRcdHZhciBoYW5kbGVyID0gcGFyc2VyLm9wdGlvbnMubWFuYWdlci5nZXRIYW5kbGVyKCBzb3VyY2UudXJpICk7XHJcblx0XHRcdGlmICggaGFuZGxlciAhPT0gbnVsbCApIGxvYWRlciA9IGhhbmRsZXI7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmRldGVjdFN1cHBvcnQoKS50aGVuKCBmdW5jdGlvbiAoIGlzU3VwcG9ydGVkICkge1xyXG5cclxuXHRcdFx0aWYgKCBpc1N1cHBvcnRlZCApIHJldHVybiBwYXJzZXIubG9hZFRleHR1cmVJbWFnZSggdGV4dHVyZUluZGV4LCBzb3VyY2UsIGxvYWRlciApO1xyXG5cclxuXHRcdFx0aWYgKCBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZCAmJiBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZC5pbmRleE9mKCBuYW1lICkgPj0gMCApIHtcclxuXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogV2ViUCByZXF1aXJlZCBieSBhc3NldCBidXQgdW5zdXBwb3J0ZWQuJyApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gRmFsbCBiYWNrIHRvIFBORyBvciBKUEVHLlxyXG5cdFx0XHRyZXR1cm4gcGFyc2VyLmxvYWRUZXh0dXJlKCB0ZXh0dXJlSW5kZXggKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH07XHJcblxyXG5cdEdMVEZUZXh0dXJlV2ViUEV4dGVuc2lvbi5wcm90b3R5cGUuZGV0ZWN0U3VwcG9ydCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRpZiAoICEgdGhpcy5pc1N1cHBvcnRlZCApIHtcclxuXHJcblx0XHRcdHRoaXMuaXNTdXBwb3J0ZWQgPSBuZXcgUHJvbWlzZSggZnVuY3Rpb24gKCByZXNvbHZlICkge1xyXG5cclxuXHRcdFx0XHR2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHJcblx0XHRcdFx0Ly8gTG9zc3kgdGVzdCBpbWFnZS4gU3VwcG9ydCBmb3IgbG9zc3kgaW1hZ2VzIGRvZXNuJ3QgZ3VhcmFudGVlIHN1cHBvcnQgZm9yIGFsbFxyXG5cdFx0XHRcdC8vIFdlYlAgaW1hZ2VzLCB1bmZvcnR1bmF0ZWx5LlxyXG5cdFx0XHRcdGltYWdlLnNyYyA9ICdkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSaUlBQUFCWFJVSlFWbEE0SUJZQUFBQXdBUUNkQVNvQkFBRUFEc0QrSmFRQUEzQUFBQUFBJztcclxuXHJcblx0XHRcdFx0aW1hZ2Uub25sb2FkID0gaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0XHRyZXNvbHZlKCBpbWFnZS5oZWlnaHQgPT09IDEgKTtcclxuXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaXNTdXBwb3J0ZWQ7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCogbWVzaG9wdCBCdWZmZXJWaWV3IENvbXByZXNzaW9uIEV4dGVuc2lvblxyXG5cdCpcclxuXHQqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX21lc2hvcHRfY29tcHJlc3Npb25cclxuXHQqL1xyXG5cdGZ1bmN0aW9uIEdMVEZNZXNob3B0Q29tcHJlc3Npb24oIHBhcnNlciApIHtcclxuXHJcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLkVYVF9NRVNIT1BUX0NPTVBSRVNTSU9OO1xyXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XHJcblxyXG5cdH1cclxuXHJcblx0R0xURk1lc2hvcHRDb21wcmVzc2lvbi5wcm90b3R5cGUubG9hZEJ1ZmZlclZpZXcgPSBmdW5jdGlvbiAoIGluZGV4ICkge1xyXG5cclxuXHRcdHZhciBqc29uID0gdGhpcy5wYXJzZXIuanNvbjtcclxuXHRcdHZhciBidWZmZXJWaWV3ID0ganNvbi5idWZmZXJWaWV3c1sgaW5kZXggXTtcclxuXHJcblx0XHRpZiAoIGJ1ZmZlclZpZXcuZXh0ZW5zaW9ucyAmJiBidWZmZXJWaWV3LmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xyXG5cclxuXHRcdFx0dmFyIGV4dGVuc2lvbkRlZiA9IGJ1ZmZlclZpZXcuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XHJcblxyXG5cdFx0XHR2YXIgYnVmZmVyID0gdGhpcy5wYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlcicsIGV4dGVuc2lvbkRlZi5idWZmZXIgKTtcclxuXHRcdFx0dmFyIGRlY29kZXIgPSB0aGlzLnBhcnNlci5vcHRpb25zLm1lc2hvcHREZWNvZGVyO1xyXG5cclxuXHRcdFx0aWYgKCAhIGRlY29kZXIgfHwgISBkZWNvZGVyLnN1cHBvcnRlZCApIHtcclxuXHJcblx0XHRcdFx0aWYgKCBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZCAmJiBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZC5pbmRleE9mKCB0aGlzLm5hbWUgKSA+PSAwICkge1xyXG5cclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IHNldE1lc2hvcHREZWNvZGVyIG11c3QgYmUgY2FsbGVkIGJlZm9yZSBsb2FkaW5nIGNvbXByZXNzZWQgZmlsZXMnICk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8gQXNzdW1lcyB0aGF0IHRoZSBleHRlbnNpb24gaXMgb3B0aW9uYWwgYW5kIHRoYXQgZmFsbGJhY2sgYnVmZmVyIGRhdGEgaXMgcHJlc2VudFxyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggWyBidWZmZXIsIGRlY29kZXIucmVhZHkgXSApLnRoZW4oIGZ1bmN0aW9uICggcmVzICkge1xyXG5cclxuXHRcdFx0XHR2YXIgYnl0ZU9mZnNldCA9IGV4dGVuc2lvbkRlZi5ieXRlT2Zmc2V0IHx8IDA7XHJcblx0XHRcdFx0dmFyIGJ5dGVMZW5ndGggPSBleHRlbnNpb25EZWYuYnl0ZUxlbmd0aCB8fCAwO1xyXG5cclxuXHRcdFx0XHR2YXIgY291bnQgPSBleHRlbnNpb25EZWYuY291bnQ7XHJcblx0XHRcdFx0dmFyIHN0cmlkZSA9IGV4dGVuc2lvbkRlZi5ieXRlU3RyaWRlO1xyXG5cclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gbmV3IEFycmF5QnVmZmVyKCBjb3VudCAqIHN0cmlkZSApO1xyXG5cdFx0XHRcdHZhciBzb3VyY2UgPSBuZXcgVWludDhBcnJheSggcmVzWyAwIF0sIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGggKTtcclxuXHJcblx0XHRcdFx0ZGVjb2Rlci5kZWNvZGVHbHRmQnVmZmVyKCBuZXcgVWludDhBcnJheSggcmVzdWx0ICksIGNvdW50LCBzdHJpZGUsIHNvdXJjZSwgZXh0ZW5zaW9uRGVmLm1vZGUsIGV4dGVuc2lvbkRlZi5maWx0ZXIgKTtcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdC8qIEJJTkFSWSBFWFRFTlNJT04gKi9cclxuXHR2YXIgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTUFHSUMgPSAnZ2xURic7XHJcblx0dmFyIEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSCA9IDEyO1xyXG5cdHZhciBCSU5BUllfRVhURU5TSU9OX0NIVU5LX1RZUEVTID0geyBKU09OOiAweDRFNEY1MzRBLCBCSU46IDB4MDA0RTQ5NDIgfTtcclxuXHJcblx0ZnVuY3Rpb24gR0xURkJpbmFyeUV4dGVuc2lvbiggZGF0YSApIHtcclxuXHJcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9CSU5BUllfR0xURjtcclxuXHRcdHRoaXMuY29udGVudCA9IG51bGw7XHJcblx0XHR0aGlzLmJvZHkgPSBudWxsO1xyXG5cclxuXHRcdHZhciBoZWFkZXJWaWV3ID0gbmV3IERhdGFWaWV3KCBkYXRhLCAwLCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggKTtcclxuXHJcblx0XHR0aGlzLmhlYWRlciA9IHtcclxuXHRcdFx0bWFnaWM6IExvYWRlclV0aWxzLmRlY29kZVRleHQoIG5ldyBVaW50OEFycmF5KCBkYXRhLnNsaWNlKCAwLCA0ICkgKSApLFxyXG5cdFx0XHR2ZXJzaW9uOiBoZWFkZXJWaWV3LmdldFVpbnQzMiggNCwgdHJ1ZSApLFxyXG5cdFx0XHRsZW5ndGg6IGhlYWRlclZpZXcuZ2V0VWludDMyKCA4LCB0cnVlIClcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKCB0aGlzLmhlYWRlci5tYWdpYyAhPT0gQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTUFHSUMgKSB7XHJcblxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBVbnN1cHBvcnRlZCBnbFRGLUJpbmFyeSBoZWFkZXIuJyApO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoIHRoaXMuaGVhZGVyLnZlcnNpb24gPCAyLjAgKSB7XHJcblxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBMZWdhY3kgYmluYXJ5IGZpbGUgZGV0ZWN0ZWQuJyApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgY2h1bmtDb250ZW50c0xlbmd0aCA9IHRoaXMuaGVhZGVyLmxlbmd0aCAtIEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSDtcclxuXHRcdHZhciBjaHVua1ZpZXcgPSBuZXcgRGF0YVZpZXcoIGRhdGEsIEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSCApO1xyXG5cdFx0dmFyIGNodW5rSW5kZXggPSAwO1xyXG5cclxuXHRcdHdoaWxlICggY2h1bmtJbmRleCA8IGNodW5rQ29udGVudHNMZW5ndGggKSB7XHJcblxyXG5cdFx0XHR2YXIgY2h1bmtMZW5ndGggPSBjaHVua1ZpZXcuZ2V0VWludDMyKCBjaHVua0luZGV4LCB0cnVlICk7XHJcblx0XHRcdGNodW5rSW5kZXggKz0gNDtcclxuXHJcblx0XHRcdHZhciBjaHVua1R5cGUgPSBjaHVua1ZpZXcuZ2V0VWludDMyKCBjaHVua0luZGV4LCB0cnVlICk7XHJcblx0XHRcdGNodW5rSW5kZXggKz0gNDtcclxuXHJcblx0XHRcdGlmICggY2h1bmtUeXBlID09PSBCSU5BUllfRVhURU5TSU9OX0NIVU5LX1RZUEVTLkpTT04gKSB7XHJcblxyXG5cdFx0XHRcdHZhciBjb250ZW50QXJyYXkgPSBuZXcgVWludDhBcnJheSggZGF0YSwgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIICsgY2h1bmtJbmRleCwgY2h1bmtMZW5ndGggKTtcclxuXHRcdFx0XHR0aGlzLmNvbnRlbnQgPSBMb2FkZXJVdGlscy5kZWNvZGVUZXh0KCBjb250ZW50QXJyYXkgKTtcclxuXHJcblx0XHRcdH0gZWxzZSBpZiAoIGNodW5rVHlwZSA9PT0gQklOQVJZX0VYVEVOU0lPTl9DSFVOS19UWVBFUy5CSU4gKSB7XHJcblxyXG5cdFx0XHRcdHZhciBieXRlT2Zmc2V0ID0gQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIICsgY2h1bmtJbmRleDtcclxuXHRcdFx0XHR0aGlzLmJvZHkgPSBkYXRhLnNsaWNlKCBieXRlT2Zmc2V0LCBieXRlT2Zmc2V0ICsgY2h1bmtMZW5ndGggKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIENsaWVudHMgbXVzdCBpZ25vcmUgY2h1bmtzIHdpdGggdW5rbm93biB0eXBlcy5cclxuXHJcblx0XHRcdGNodW5rSW5kZXggKz0gY2h1bmtMZW5ndGg7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggdGhpcy5jb250ZW50ID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogSlNPTiBjb250ZW50IG5vdCBmb3VuZC4nICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERSQUNPIE1lc2ggQ29tcHJlc3Npb24gRXh0ZW5zaW9uXHJcblx0ICpcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvblxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIEdMVEZEcmFjb01lc2hDb21wcmVzc2lvbkV4dGVuc2lvbigganNvbiwgZHJhY29Mb2FkZXIgKSB7XHJcblxyXG5cdFx0aWYgKCAhIGRyYWNvTG9hZGVyICkge1xyXG5cclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogTm8gRFJBQ09Mb2FkZXIgaW5zdGFuY2UgcHJvdmlkZWQuJyApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OO1xyXG5cdFx0dGhpcy5qc29uID0ganNvbjtcclxuXHRcdHRoaXMuZHJhY29Mb2FkZXIgPSBkcmFjb0xvYWRlcjtcclxuXHRcdHRoaXMuZHJhY29Mb2FkZXIucHJlbG9hZCgpO1xyXG5cclxuXHR9XHJcblxyXG5cdEdMVEZEcmFjb01lc2hDb21wcmVzc2lvbkV4dGVuc2lvbi5wcm90b3R5cGUuZGVjb2RlUHJpbWl0aXZlID0gZnVuY3Rpb24gKCBwcmltaXRpdmUsIHBhcnNlciApIHtcclxuXHJcblx0XHR2YXIganNvbiA9IHRoaXMuanNvbjtcclxuXHRcdHZhciBkcmFjb0xvYWRlciA9IHRoaXMuZHJhY29Mb2FkZXI7XHJcblx0XHR2YXIgYnVmZmVyVmlld0luZGV4ID0gcHJpbWl0aXZlLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdLmJ1ZmZlclZpZXc7XHJcblx0XHR2YXIgZ2x0ZkF0dHJpYnV0ZU1hcCA9IHByaW1pdGl2ZS5leHRlbnNpb25zWyB0aGlzLm5hbWUgXS5hdHRyaWJ1dGVzO1xyXG5cdFx0dmFyIHRocmVlQXR0cmlidXRlTWFwID0ge307XHJcblx0XHR2YXIgYXR0cmlidXRlTm9ybWFsaXplZE1hcCA9IHt9O1xyXG5cdFx0dmFyIGF0dHJpYnV0ZVR5cGVNYXAgPSB7fTtcclxuXHJcblx0XHRmb3IgKCB2YXIgYXR0cmlidXRlTmFtZSBpbiBnbHRmQXR0cmlidXRlTWFwICkge1xyXG5cclxuXHRcdFx0dmFyIHRocmVlQXR0cmlidXRlTmFtZSA9IEFUVFJJQlVURVNbIGF0dHJpYnV0ZU5hbWUgXSB8fCBhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHR0aHJlZUF0dHJpYnV0ZU1hcFsgdGhyZWVBdHRyaWJ1dGVOYW1lIF0gPSBnbHRmQXR0cmlidXRlTWFwWyBhdHRyaWJ1dGVOYW1lIF07XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIGF0dHJpYnV0ZU5hbWUgaW4gcHJpbWl0aXZlLmF0dHJpYnV0ZXMgKSB7XHJcblxyXG5cdFx0XHR2YXIgdGhyZWVBdHRyaWJ1dGVOYW1lID0gQVRUUklCVVRFU1sgYXR0cmlidXRlTmFtZSBdIHx8IGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdGlmICggZ2x0ZkF0dHJpYnV0ZU1hcFsgYXR0cmlidXRlTmFtZSBdICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBhY2Nlc3NvckRlZiA9IGpzb24uYWNjZXNzb3JzWyBwcmltaXRpdmUuYXR0cmlidXRlc1sgYXR0cmlidXRlTmFtZSBdIF07XHJcblx0XHRcdFx0dmFyIGNvbXBvbmVudFR5cGUgPSBXRUJHTF9DT01QT05FTlRfVFlQRVNbIGFjY2Vzc29yRGVmLmNvbXBvbmVudFR5cGUgXTtcclxuXHJcblx0XHRcdFx0YXR0cmlidXRlVHlwZU1hcFsgdGhyZWVBdHRyaWJ1dGVOYW1lIF0gPSBjb21wb25lbnRUeXBlO1xyXG5cdFx0XHRcdGF0dHJpYnV0ZU5vcm1hbGl6ZWRNYXBbIHRocmVlQXR0cmlidXRlTmFtZSBdID0gYWNjZXNzb3JEZWYubm9ybWFsaXplZCA9PT0gdHJ1ZTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYnVmZmVyVmlldycsIGJ1ZmZlclZpZXdJbmRleCApLnRoZW4oIGZ1bmN0aW9uICggYnVmZmVyVmlldyApIHtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24gKCByZXNvbHZlICkge1xyXG5cclxuXHRcdFx0XHRkcmFjb0xvYWRlci5kZWNvZGVEcmFjb0ZpbGUoIGJ1ZmZlclZpZXcsIGZ1bmN0aW9uICggZ2VvbWV0cnkgKSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9yICggdmFyIGF0dHJpYnV0ZU5hbWUgaW4gZ2VvbWV0cnkuYXR0cmlidXRlcyApIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBhdHRyaWJ1dGUgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzWyBhdHRyaWJ1dGVOYW1lIF07XHJcblx0XHRcdFx0XHRcdHZhciBub3JtYWxpemVkID0gYXR0cmlidXRlTm9ybWFsaXplZE1hcFsgYXR0cmlidXRlTmFtZSBdO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCBub3JtYWxpemVkICE9PSB1bmRlZmluZWQgKSBhdHRyaWJ1dGUubm9ybWFsaXplZCA9IG5vcm1hbGl6ZWQ7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJlc29sdmUoIGdlb21ldHJ5ICk7XHJcblxyXG5cdFx0XHRcdH0sIHRocmVlQXR0cmlidXRlTWFwLCBhdHRyaWJ1dGVUeXBlTWFwICk7XHJcblxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBUZXh0dXJlIFRyYW5zZm9ybSBFeHRlbnNpb25cclxuXHQgKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIEdMVEZUZXh0dXJlVHJhbnNmb3JtRXh0ZW5zaW9uKCkge1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNO1xyXG5cclxuXHR9XHJcblxyXG5cdEdMVEZUZXh0dXJlVHJhbnNmb3JtRXh0ZW5zaW9uLnByb3RvdHlwZS5leHRlbmRUZXh0dXJlID0gZnVuY3Rpb24gKCB0ZXh0dXJlLCB0cmFuc2Zvcm0gKSB7XHJcblxyXG5cdFx0dGV4dHVyZSA9IHRleHR1cmUuY2xvbmUoKTtcclxuXHJcblx0XHRpZiAoIHRyYW5zZm9ybS5vZmZzZXQgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdHRleHR1cmUub2Zmc2V0LmZyb21BcnJheSggdHJhbnNmb3JtLm9mZnNldCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHRyYW5zZm9ybS5yb3RhdGlvbiAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0dGV4dHVyZS5yb3RhdGlvbiA9IHRyYW5zZm9ybS5yb3RhdGlvbjtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0cmFuc2Zvcm0uc2NhbGUgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdHRleHR1cmUucmVwZWF0LmZyb21BcnJheSggdHJhbnNmb3JtLnNjYWxlICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggdHJhbnNmb3JtLnRleENvb3JkICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBDdXN0b20gVVYgc2V0cyBpbiBcIicgKyB0aGlzLm5hbWUgKyAnXCIgZXh0ZW5zaW9uIG5vdCB5ZXQgc3VwcG9ydGVkLicgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0cmV0dXJuIHRleHR1cmU7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwZWN1bGFyLUdsb3NzaW5lc3MgRXh0ZW5zaW9uXHJcblx0ICpcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzc1xyXG5cdCAqL1xyXG5cclxuXHQvKipcclxuXHQgKiBBIHN1YiBjbGFzcyBvZiBTdGFuZGFyZE1hdGVyaWFsIHdpdGggc29tZSBvZiB0aGUgZnVuY3Rpb25hbGl0eVxyXG5cdCAqIGNoYW5nZWQgdmlhIHRoZSBgb25CZWZvcmVDb21waWxlYCBjYWxsYmFja1xyXG5cdCAqIEBwYWlsaGVhZFxyXG5cdCAqL1xyXG5cclxuXHRmdW5jdGlvbiBHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbCggcGFyYW1zICkge1xyXG5cclxuXHRcdE1lc2hTdGFuZGFyZE1hdGVyaWFsLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0XHR0aGlzLmlzR0xURlNwZWN1bGFyR2xvc3NpbmVzc01hdGVyaWFsID0gdHJ1ZTtcclxuXHJcblx0XHQvL3ZhcmlvdXMgY2h1bmtzIHRoYXQgbmVlZCByZXBsYWNpbmdcclxuXHRcdHZhciBzcGVjdWxhck1hcFBhcnNGcmFnbWVudENodW5rID0gW1xyXG5cdFx0XHQnI2lmZGVmIFVTRV9TUEVDVUxBUk1BUCcsXHJcblx0XHRcdCdcdHVuaWZvcm0gc2FtcGxlcjJEIHNwZWN1bGFyTWFwOycsXHJcblx0XHRcdCcjZW5kaWYnXHJcblx0XHRdLmpvaW4oICdcXG4nICk7XHJcblxyXG5cdFx0dmFyIGdsb3NzaW5lc3NNYXBQYXJzRnJhZ21lbnRDaHVuayA9IFtcclxuXHRcdFx0JyNpZmRlZiBVU0VfR0xPU1NJTkVTU01BUCcsXHJcblx0XHRcdCdcdHVuaWZvcm0gc2FtcGxlcjJEIGdsb3NzaW5lc3NNYXA7JyxcclxuXHRcdFx0JyNlbmRpZidcclxuXHRcdF0uam9pbiggJ1xcbicgKTtcclxuXHJcblx0XHR2YXIgc3BlY3VsYXJNYXBGcmFnbWVudENodW5rID0gW1xyXG5cdFx0XHQndmVjMyBzcGVjdWxhckZhY3RvciA9IHNwZWN1bGFyOycsXHJcblx0XHRcdCcjaWZkZWYgVVNFX1NQRUNVTEFSTUFQJyxcclxuXHRcdFx0J1x0dmVjNCB0ZXhlbFNwZWN1bGFyID0gdGV4dHVyZTJEKCBzcGVjdWxhck1hcCwgdlV2ICk7JyxcclxuXHRcdFx0J1x0dGV4ZWxTcGVjdWxhciA9IHNSR0JUb0xpbmVhciggdGV4ZWxTcGVjdWxhciApOycsXHJcblx0XHRcdCdcdC8vIHJlYWRzIGNoYW5uZWwgUkdCLCBjb21wYXRpYmxlIHdpdGggYSBnbFRGIFNwZWN1bGFyLUdsb3NzaW5lc3MgKFJHQkEpIHRleHR1cmUnLFxyXG5cdFx0XHQnXHRzcGVjdWxhckZhY3RvciAqPSB0ZXhlbFNwZWN1bGFyLnJnYjsnLFxyXG5cdFx0XHQnI2VuZGlmJ1xyXG5cdFx0XS5qb2luKCAnXFxuJyApO1xyXG5cclxuXHRcdHZhciBnbG9zc2luZXNzTWFwRnJhZ21lbnRDaHVuayA9IFtcclxuXHRcdFx0J2Zsb2F0IGdsb3NzaW5lc3NGYWN0b3IgPSBnbG9zc2luZXNzOycsXHJcblx0XHRcdCcjaWZkZWYgVVNFX0dMT1NTSU5FU1NNQVAnLFxyXG5cdFx0XHQnXHR2ZWM0IHRleGVsR2xvc3NpbmVzcyA9IHRleHR1cmUyRCggZ2xvc3NpbmVzc01hcCwgdlV2ICk7JyxcclxuXHRcdFx0J1x0Ly8gcmVhZHMgY2hhbm5lbCBBLCBjb21wYXRpYmxlIHdpdGggYSBnbFRGIFNwZWN1bGFyLUdsb3NzaW5lc3MgKFJHQkEpIHRleHR1cmUnLFxyXG5cdFx0XHQnXHRnbG9zc2luZXNzRmFjdG9yICo9IHRleGVsR2xvc3NpbmVzcy5hOycsXHJcblx0XHRcdCcjZW5kaWYnXHJcblx0XHRdLmpvaW4oICdcXG4nICk7XHJcblxyXG5cdFx0dmFyIGxpZ2h0UGh5c2ljYWxGcmFnbWVudENodW5rID0gW1xyXG5cdFx0XHQnUGh5c2ljYWxNYXRlcmlhbCBtYXRlcmlhbDsnLFxyXG5cdFx0XHQnbWF0ZXJpYWwuZGlmZnVzZUNvbG9yID0gZGlmZnVzZUNvbG9yLnJnYiAqICggMS4gLSBtYXgoIHNwZWN1bGFyRmFjdG9yLnIsIG1heCggc3BlY3VsYXJGYWN0b3IuZywgc3BlY3VsYXJGYWN0b3IuYiApICkgKTsnLFxyXG5cdFx0XHQndmVjMyBkeHkgPSBtYXgoIGFicyggZEZkeCggZ2VvbWV0cnlOb3JtYWwgKSApLCBhYnMoIGRGZHkoIGdlb21ldHJ5Tm9ybWFsICkgKSApOycsXHJcblx0XHRcdCdmbG9hdCBnZW9tZXRyeVJvdWdobmVzcyA9IG1heCggbWF4KCBkeHkueCwgZHh5LnkgKSwgZHh5LnogKTsnLFxyXG5cdFx0XHQnbWF0ZXJpYWwuc3BlY3VsYXJSb3VnaG5lc3MgPSBtYXgoIDEuMCAtIGdsb3NzaW5lc3NGYWN0b3IsIDAuMDUyNSApOyAvLyAwLjA1MjUgY29ycmVzcG9uZHMgdG8gdGhlIGJhc2UgbWlwIG9mIGEgMjU2IGN1YmVtYXAuJyxcclxuXHRcdFx0J21hdGVyaWFsLnNwZWN1bGFyUm91Z2huZXNzICs9IGdlb21ldHJ5Um91Z2huZXNzOycsXHJcblx0XHRcdCdtYXRlcmlhbC5zcGVjdWxhclJvdWdobmVzcyA9IG1pbiggbWF0ZXJpYWwuc3BlY3VsYXJSb3VnaG5lc3MsIDEuMCApOycsXHJcblx0XHRcdCdtYXRlcmlhbC5zcGVjdWxhckNvbG9yID0gc3BlY3VsYXJGYWN0b3I7JyxcclxuXHRcdF0uam9pbiggJ1xcbicgKTtcclxuXHJcblx0XHR2YXIgdW5pZm9ybXMgPSB7XHJcblx0XHRcdHNwZWN1bGFyOiB7IHZhbHVlOiBuZXcgQ29sb3IoKS5zZXRIZXgoIDB4ZmZmZmZmICkgfSxcclxuXHRcdFx0Z2xvc3NpbmVzczogeyB2YWx1ZTogMSB9LFxyXG5cdFx0XHRzcGVjdWxhck1hcDogeyB2YWx1ZTogbnVsbCB9LFxyXG5cdFx0XHRnbG9zc2luZXNzTWFwOiB7IHZhbHVlOiBudWxsIH1cclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5fZXh0cmFVbmlmb3JtcyA9IHVuaWZvcm1zO1xyXG5cclxuXHRcdHRoaXMub25CZWZvcmVDb21waWxlID0gZnVuY3Rpb24gKCBzaGFkZXIgKSB7XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgdW5pZm9ybU5hbWUgaW4gdW5pZm9ybXMgKSB7XHJcblxyXG5cdFx0XHRcdHNoYWRlci51bmlmb3Jtc1sgdW5pZm9ybU5hbWUgXSA9IHVuaWZvcm1zWyB1bmlmb3JtTmFtZSBdO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2hhZGVyLmZyYWdtZW50U2hhZGVyID0gc2hhZGVyLmZyYWdtZW50U2hhZGVyXHJcblx0XHRcdFx0LnJlcGxhY2UoICd1bmlmb3JtIGZsb2F0IHJvdWdobmVzczsnLCAndW5pZm9ybSB2ZWMzIHNwZWN1bGFyOycgKVxyXG5cdFx0XHRcdC5yZXBsYWNlKCAndW5pZm9ybSBmbG9hdCBtZXRhbG5lc3M7JywgJ3VuaWZvcm0gZmxvYXQgZ2xvc3NpbmVzczsnIClcclxuXHRcdFx0XHQucmVwbGFjZSggJyNpbmNsdWRlIDxyb3VnaG5lc3NtYXBfcGFyc19mcmFnbWVudD4nLCBzcGVjdWxhck1hcFBhcnNGcmFnbWVudENodW5rIClcclxuXHRcdFx0XHQucmVwbGFjZSggJyNpbmNsdWRlIDxtZXRhbG5lc3NtYXBfcGFyc19mcmFnbWVudD4nLCBnbG9zc2luZXNzTWFwUGFyc0ZyYWdtZW50Q2h1bmsgKVxyXG5cdFx0XHRcdC5yZXBsYWNlKCAnI2luY2x1ZGUgPHJvdWdobmVzc21hcF9mcmFnbWVudD4nLCBzcGVjdWxhck1hcEZyYWdtZW50Q2h1bmsgKVxyXG5cdFx0XHRcdC5yZXBsYWNlKCAnI2luY2x1ZGUgPG1ldGFsbmVzc21hcF9mcmFnbWVudD4nLCBnbG9zc2luZXNzTWFwRnJhZ21lbnRDaHVuayApXHJcblx0XHRcdFx0LnJlcGxhY2UoICcjaW5jbHVkZSA8bGlnaHRzX3BoeXNpY2FsX2ZyYWdtZW50PicsIGxpZ2h0UGh5c2ljYWxGcmFnbWVudENodW5rICk7XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyggdGhpcywge1xyXG5cclxuXHRcdFx0c3BlY3VsYXI6IHtcclxuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gdW5pZm9ybXMuc3BlY3VsYXIudmFsdWU7XHJcblxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0OiBmdW5jdGlvbiAoIHYgKSB7XHJcblxyXG5cdFx0XHRcdFx0dW5pZm9ybXMuc3BlY3VsYXIudmFsdWUgPSB2O1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzcGVjdWxhck1hcDoge1xyXG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiB1bmlmb3Jtcy5zcGVjdWxhck1hcC52YWx1ZTtcclxuXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uICggdiApIHtcclxuXHJcblx0XHRcdFx0XHR1bmlmb3Jtcy5zcGVjdWxhck1hcC52YWx1ZSA9IHY7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCB2ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy5kZWZpbmVzLlVTRV9TUEVDVUxBUk1BUCA9ICcnOyAvLyBVU0VfVVYgaXMgc2V0IGJ5IHRoZSByZW5kZXJlciBmb3Igc3BlY3VsYXIgbWFwc1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5kZWZpbmVzLlVTRV9TUEVDVUxBUk1BUDtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGdsb3NzaW5lc3M6IHtcclxuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gdW5pZm9ybXMuZ2xvc3NpbmVzcy52YWx1ZTtcclxuXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uICggdiApIHtcclxuXHJcblx0XHRcdFx0XHR1bmlmb3Jtcy5nbG9zc2luZXNzLnZhbHVlID0gdjtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Z2xvc3NpbmVzc01hcDoge1xyXG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiB1bmlmb3Jtcy5nbG9zc2luZXNzTWFwLnZhbHVlO1xyXG5cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldDogZnVuY3Rpb24gKCB2ICkge1xyXG5cclxuXHRcdFx0XHRcdHVuaWZvcm1zLmdsb3NzaW5lc3NNYXAudmFsdWUgPSB2O1xyXG5cclxuXHRcdFx0XHRcdGlmICggdiApIHtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuZGVmaW5lcy5VU0VfR0xPU1NJTkVTU01BUCA9ICcnO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRlZmluZXMuVVNFX1VWID0gJyc7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmRlZmluZXMuVVNFX0dMT1NTSU5FU1NNQVA7XHJcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmRlZmluZXMuVVNFX1VWO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHRcdGRlbGV0ZSB0aGlzLm1ldGFsbmVzcztcclxuXHRcdGRlbGV0ZSB0aGlzLnJvdWdobmVzcztcclxuXHRcdGRlbGV0ZSB0aGlzLm1ldGFsbmVzc01hcDtcclxuXHRcdGRlbGV0ZSB0aGlzLnJvdWdobmVzc01hcDtcclxuXHJcblx0XHR0aGlzLnNldFZhbHVlcyggcGFyYW1zICk7XHJcblxyXG5cdH1cclxuXHJcblx0R0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggTWVzaFN0YW5kYXJkTWF0ZXJpYWwucHJvdG90eXBlICk7XHJcblx0R0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWwucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWw7XHJcblxyXG5cdEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKCBzb3VyY2UgKSB7XHJcblxyXG5cdFx0TWVzaFN0YW5kYXJkTWF0ZXJpYWwucHJvdG90eXBlLmNvcHkuY2FsbCggdGhpcywgc291cmNlICk7XHJcblx0XHR0aGlzLnNwZWN1bGFyTWFwID0gc291cmNlLnNwZWN1bGFyTWFwO1xyXG5cdFx0dGhpcy5zcGVjdWxhci5jb3B5KCBzb3VyY2Uuc3BlY3VsYXIgKTtcclxuXHRcdHRoaXMuZ2xvc3NpbmVzc01hcCA9IHNvdXJjZS5nbG9zc2luZXNzTWFwO1xyXG5cdFx0dGhpcy5nbG9zc2luZXNzID0gc291cmNlLmdsb3NzaW5lc3M7XHJcblx0XHRkZWxldGUgdGhpcy5tZXRhbG5lc3M7XHJcblx0XHRkZWxldGUgdGhpcy5yb3VnaG5lc3M7XHJcblx0XHRkZWxldGUgdGhpcy5tZXRhbG5lc3NNYXA7XHJcblx0XHRkZWxldGUgdGhpcy5yb3VnaG5lc3NNYXA7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24gR0xURk1hdGVyaWFsc1BiclNwZWN1bGFyR2xvc3NpbmVzc0V4dGVuc2lvbigpIHtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cclxuXHRcdFx0bmFtZTogRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTLFxyXG5cclxuXHRcdFx0c3BlY3VsYXJHbG9zc2luZXNzUGFyYW1zOiBbXHJcblx0XHRcdFx0J2NvbG9yJyxcclxuXHRcdFx0XHQnbWFwJyxcclxuXHRcdFx0XHQnbGlnaHRNYXAnLFxyXG5cdFx0XHRcdCdsaWdodE1hcEludGVuc2l0eScsXHJcblx0XHRcdFx0J2FvTWFwJyxcclxuXHRcdFx0XHQnYW9NYXBJbnRlbnNpdHknLFxyXG5cdFx0XHRcdCdlbWlzc2l2ZScsXHJcblx0XHRcdFx0J2VtaXNzaXZlSW50ZW5zaXR5JyxcclxuXHRcdFx0XHQnZW1pc3NpdmVNYXAnLFxyXG5cdFx0XHRcdCdidW1wTWFwJyxcclxuXHRcdFx0XHQnYnVtcFNjYWxlJyxcclxuXHRcdFx0XHQnbm9ybWFsTWFwJyxcclxuXHRcdFx0XHQnbm9ybWFsTWFwVHlwZScsXHJcblx0XHRcdFx0J2Rpc3BsYWNlbWVudE1hcCcsXHJcblx0XHRcdFx0J2Rpc3BsYWNlbWVudFNjYWxlJyxcclxuXHRcdFx0XHQnZGlzcGxhY2VtZW50QmlhcycsXHJcblx0XHRcdFx0J3NwZWN1bGFyTWFwJyxcclxuXHRcdFx0XHQnc3BlY3VsYXInLFxyXG5cdFx0XHRcdCdnbG9zc2luZXNzTWFwJyxcclxuXHRcdFx0XHQnZ2xvc3NpbmVzcycsXHJcblx0XHRcdFx0J2FscGhhTWFwJyxcclxuXHRcdFx0XHQnZW52TWFwJyxcclxuXHRcdFx0XHQnZW52TWFwSW50ZW5zaXR5JyxcclxuXHRcdFx0XHQncmVmcmFjdGlvblJhdGlvJyxcclxuXHRcdFx0XSxcclxuXHJcblx0XHRcdGdldE1hdGVyaWFsVHlwZTogZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gR0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWw7XHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0ZXh0ZW5kUGFyYW1zOiBmdW5jdGlvbiAoIG1hdGVyaWFsUGFyYW1zLCBtYXRlcmlhbERlZiwgcGFyc2VyICkge1xyXG5cclxuXHRcdFx0XHR2YXIgcGJyU3BlY3VsYXJHbG9zc2luZXNzID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yID0gbmV3IENvbG9yKCAxLjAsIDEuMCwgMS4wICk7XHJcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IDEuMDtcclxuXHJcblx0XHRcdFx0dmFyIHBlbmRpbmcgPSBbXTtcclxuXHJcblx0XHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZUZhY3RvciApICkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBhcnJheSA9IHBiclNwZWN1bGFyR2xvc3NpbmVzcy5kaWZmdXNlRmFjdG9yO1xyXG5cclxuXHRcdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yLmZyb21BcnJheSggYXJyYXkgKTtcclxuXHRcdFx0XHRcdG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSBhcnJheVsgMyBdO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggcGJyU3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdtYXAnLCBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZVRleHR1cmUgKSApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlID0gbmV3IENvbG9yKCAwLjAsIDAuMCwgMC4wICk7XHJcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuZ2xvc3NpbmVzcyA9IHBiclNwZWN1bGFyR2xvc3NpbmVzcy5nbG9zc2luZXNzRmFjdG9yICE9PSB1bmRlZmluZWQgPyBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZ2xvc3NpbmVzc0ZhY3RvciA6IDEuMDtcclxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5zcGVjdWxhciA9IG5ldyBDb2xvciggMS4wLCAxLjAsIDEuMCApO1xyXG5cclxuXHRcdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHBiclNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckZhY3RvciApICkge1xyXG5cclxuXHRcdFx0XHRcdG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyLmZyb21BcnJheSggcGJyU3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyRmFjdG9yICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCBwYnJTcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBzcGVjR2xvc3NNYXBEZWYgPSBwYnJTcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZTtcclxuXHRcdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnZ2xvc3NpbmVzc01hcCcsIHNwZWNHbG9zc01hcERlZiApICk7XHJcblx0XHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3NwZWN1bGFyTWFwJywgc3BlY0dsb3NzTWFwRGVmICkgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRjcmVhdGVNYXRlcmlhbDogZnVuY3Rpb24gKCBtYXRlcmlhbFBhcmFtcyApIHtcclxuXHJcblx0XHRcdFx0dmFyIG1hdGVyaWFsID0gbmV3IEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsKCBtYXRlcmlhbFBhcmFtcyApO1xyXG5cdFx0XHRcdG1hdGVyaWFsLmZvZyA9IHRydWU7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsLmNvbG9yID0gbWF0ZXJpYWxQYXJhbXMuY29sb3I7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsLm1hcCA9IG1hdGVyaWFsUGFyYW1zLm1hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLm1hcDtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWwubGlnaHRNYXAgPSBudWxsO1xyXG5cdFx0XHRcdG1hdGVyaWFsLmxpZ2h0TWFwSW50ZW5zaXR5ID0gMS4wO1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbC5hb01hcCA9IG1hdGVyaWFsUGFyYW1zLmFvTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuYW9NYXA7XHJcblx0XHRcdFx0bWF0ZXJpYWwuYW9NYXBJbnRlbnNpdHkgPSAxLjA7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsLmVtaXNzaXZlID0gbWF0ZXJpYWxQYXJhbXMuZW1pc3NpdmU7XHJcblx0XHRcdFx0bWF0ZXJpYWwuZW1pc3NpdmVJbnRlbnNpdHkgPSAxLjA7XHJcblx0XHRcdFx0bWF0ZXJpYWwuZW1pc3NpdmVNYXAgPSBtYXRlcmlhbFBhcmFtcy5lbWlzc2l2ZU1hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlTWFwO1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbC5idW1wTWFwID0gbWF0ZXJpYWxQYXJhbXMuYnVtcE1hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLmJ1bXBNYXA7XHJcblx0XHRcdFx0bWF0ZXJpYWwuYnVtcFNjYWxlID0gMTtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWwubm9ybWFsTWFwID0gbWF0ZXJpYWxQYXJhbXMubm9ybWFsTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMubm9ybWFsTWFwO1xyXG5cdFx0XHRcdG1hdGVyaWFsLm5vcm1hbE1hcFR5cGUgPSBUYW5nZW50U3BhY2VOb3JtYWxNYXA7XHJcblxyXG5cdFx0XHRcdGlmICggbWF0ZXJpYWxQYXJhbXMubm9ybWFsU2NhbGUgKSBtYXRlcmlhbC5ub3JtYWxTY2FsZSA9IG1hdGVyaWFsUGFyYW1zLm5vcm1hbFNjYWxlO1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbC5kaXNwbGFjZW1lbnRNYXAgPSBudWxsO1xyXG5cdFx0XHRcdG1hdGVyaWFsLmRpc3BsYWNlbWVudFNjYWxlID0gMTtcclxuXHRcdFx0XHRtYXRlcmlhbC5kaXNwbGFjZW1lbnRCaWFzID0gMDtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWwuc3BlY3VsYXJNYXAgPSBtYXRlcmlhbFBhcmFtcy5zcGVjdWxhck1hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyTWFwO1xyXG5cdFx0XHRcdG1hdGVyaWFsLnNwZWN1bGFyID0gbWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXI7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsLmdsb3NzaW5lc3NNYXAgPSBtYXRlcmlhbFBhcmFtcy5nbG9zc2luZXNzTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuZ2xvc3NpbmVzc01hcDtcclxuXHRcdFx0XHRtYXRlcmlhbC5nbG9zc2luZXNzID0gbWF0ZXJpYWxQYXJhbXMuZ2xvc3NpbmVzcztcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWwuYWxwaGFNYXAgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbC5lbnZNYXAgPSBtYXRlcmlhbFBhcmFtcy5lbnZNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5lbnZNYXA7XHJcblx0XHRcdFx0bWF0ZXJpYWwuZW52TWFwSW50ZW5zaXR5ID0gMS4wO1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbC5yZWZyYWN0aW9uUmF0aW8gPSAwLjk4O1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gbWF0ZXJpYWw7XHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdH07XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTWVzaCBRdWFudGl6YXRpb24gRXh0ZW5zaW9uXHJcblx0ICpcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWVzaF9xdWFudGl6YXRpb25cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBHTFRGTWVzaFF1YW50aXphdGlvbkV4dGVuc2lvbigpIHtcclxuXHJcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NRVNIX1FVQU5USVpBVElPTjtcclxuXHJcblx0fVxyXG5cclxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdC8qKioqKioqKioqIElOVEVSUE9MQVRJT04gKioqKioqKiovXHJcblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0Ly8gU3BsaW5lIEludGVycG9sYXRpb25cclxuXHQvLyBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2FwcGVuZGl4LWMtc3BsaW5lLWludGVycG9sYXRpb25cclxuXHRmdW5jdGlvbiBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudCggcGFyYW1ldGVyUG9zaXRpb25zLCBzYW1wbGVWYWx1ZXMsIHNhbXBsZVNpemUsIHJlc3VsdEJ1ZmZlciApIHtcclxuXHJcblx0XHRJbnRlcnBvbGFudC5jYWxsKCB0aGlzLCBwYXJhbWV0ZXJQb3NpdGlvbnMsIHNhbXBsZVZhbHVlcywgc2FtcGxlU2l6ZSwgcmVzdWx0QnVmZmVyICk7XHJcblxyXG5cdH1cclxuXHJcblx0R0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW50ZXJwb2xhbnQucHJvdG90eXBlICk7XHJcblx0R0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQ7XHJcblxyXG5cdEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZS5jb3B5U2FtcGxlVmFsdWVfID0gZnVuY3Rpb24gKCBpbmRleCApIHtcclxuXHJcblx0XHQvLyBDb3BpZXMgYSBzYW1wbGUgdmFsdWUgdG8gdGhlIHJlc3VsdCBidWZmZXIuIFNlZSBkZXNjcmlwdGlvbiBvZiBnbFRGXHJcblx0XHQvLyBDVUJJQ1NQTElORSB2YWx1ZXMgbGF5b3V0IGluIGludGVycG9sYXRlXygpIGZ1bmN0aW9uIGJlbG93LlxyXG5cclxuXHRcdHZhciByZXN1bHQgPSB0aGlzLnJlc3VsdEJ1ZmZlcixcclxuXHRcdFx0dmFsdWVzID0gdGhpcy5zYW1wbGVWYWx1ZXMsXHJcblx0XHRcdHZhbHVlU2l6ZSA9IHRoaXMudmFsdWVTaXplLFxyXG5cdFx0XHRvZmZzZXQgPSBpbmRleCAqIHZhbHVlU2l6ZSAqIDMgKyB2YWx1ZVNpemU7XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpICE9PSB2YWx1ZVNpemU7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRyZXN1bHRbIGkgXSA9IHZhbHVlc1sgb2Zmc2V0ICsgaSBdO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cclxuXHR9O1xyXG5cclxuXHRHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuYmVmb3JlU3RhcnRfID0gR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmNvcHlTYW1wbGVWYWx1ZV87XHJcblxyXG5cdEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZS5hZnRlckVuZF8gPSBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuY29weVNhbXBsZVZhbHVlXztcclxuXHJcblx0R0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmludGVycG9sYXRlXyA9IGZ1bmN0aW9uICggaTEsIHQwLCB0LCB0MSApIHtcclxuXHJcblx0XHR2YXIgcmVzdWx0ID0gdGhpcy5yZXN1bHRCdWZmZXI7XHJcblx0XHR2YXIgdmFsdWVzID0gdGhpcy5zYW1wbGVWYWx1ZXM7XHJcblx0XHR2YXIgc3RyaWRlID0gdGhpcy52YWx1ZVNpemU7XHJcblxyXG5cdFx0dmFyIHN0cmlkZTIgPSBzdHJpZGUgKiAyO1xyXG5cdFx0dmFyIHN0cmlkZTMgPSBzdHJpZGUgKiAzO1xyXG5cclxuXHRcdHZhciB0ZCA9IHQxIC0gdDA7XHJcblxyXG5cdFx0dmFyIHAgPSAoIHQgLSB0MCApIC8gdGQ7XHJcblx0XHR2YXIgcHAgPSBwICogcDtcclxuXHRcdHZhciBwcHAgPSBwcCAqIHA7XHJcblxyXG5cdFx0dmFyIG9mZnNldDEgPSBpMSAqIHN0cmlkZTM7XHJcblx0XHR2YXIgb2Zmc2V0MCA9IG9mZnNldDEgLSBzdHJpZGUzO1xyXG5cclxuXHRcdHZhciBzMiA9IC0gMiAqIHBwcCArIDMgKiBwcDtcclxuXHRcdHZhciBzMyA9IHBwcCAtIHBwO1xyXG5cdFx0dmFyIHMwID0gMSAtIHMyO1xyXG5cdFx0dmFyIHMxID0gczMgLSBwcCArIHA7XHJcblxyXG5cdFx0Ly8gTGF5b3V0IG9mIGtleWZyYW1lIG91dHB1dCB2YWx1ZXMgZm9yIENVQklDU1BMSU5FIGFuaW1hdGlvbnM6XHJcblx0XHQvLyAgIFsgaW5UYW5nZW50XzEsIHNwbGluZVZlcnRleF8xLCBvdXRUYW5nZW50XzEsIGluVGFuZ2VudF8yLCBzcGxpbmVWZXJ0ZXhfMiwgLi4uIF1cclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSAhPT0gc3RyaWRlOyBpICsrICkge1xyXG5cclxuXHRcdFx0dmFyIHAwID0gdmFsdWVzWyBvZmZzZXQwICsgaSArIHN0cmlkZSBdOyAvLyBzcGxpbmVWZXJ0ZXhfa1xyXG5cdFx0XHR2YXIgbTAgPSB2YWx1ZXNbIG9mZnNldDAgKyBpICsgc3RyaWRlMiBdICogdGQ7IC8vIG91dFRhbmdlbnRfayAqICh0X2srMSAtIHRfaylcclxuXHRcdFx0dmFyIHAxID0gdmFsdWVzWyBvZmZzZXQxICsgaSArIHN0cmlkZSBdOyAvLyBzcGxpbmVWZXJ0ZXhfaysxXHJcblx0XHRcdHZhciBtMSA9IHZhbHVlc1sgb2Zmc2V0MSArIGkgXSAqIHRkOyAvLyBpblRhbmdlbnRfaysxICogKHRfaysxIC0gdF9rKVxyXG5cclxuXHRcdFx0cmVzdWx0WyBpIF0gPSBzMCAqIHAwICsgczEgKiBtMCArIHMyICogcDEgKyBzMyAqIG0xO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cdC8qKioqKioqKioqIElOVEVSTkFMUyAqKioqKioqKioqKiovXHJcblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0LyogQ09OU1RBTlRTICovXHJcblxyXG5cdHZhciBXRUJHTF9DT05TVEFOVFMgPSB7XHJcblx0XHRGTE9BVDogNTEyNixcclxuXHRcdC8vRkxPQVRfTUFUMjogMzU2NzQsXHJcblx0XHRGTE9BVF9NQVQzOiAzNTY3NSxcclxuXHRcdEZMT0FUX01BVDQ6IDM1Njc2LFxyXG5cdFx0RkxPQVRfVkVDMjogMzU2NjQsXHJcblx0XHRGTE9BVF9WRUMzOiAzNTY2NSxcclxuXHRcdEZMT0FUX1ZFQzQ6IDM1NjY2LFxyXG5cdFx0TElORUFSOiA5NzI5LFxyXG5cdFx0UkVQRUFUOiAxMDQ5NyxcclxuXHRcdFNBTVBMRVJfMkQ6IDM1Njc4LFxyXG5cdFx0UE9JTlRTOiAwLFxyXG5cdFx0TElORVM6IDEsXHJcblx0XHRMSU5FX0xPT1A6IDIsXHJcblx0XHRMSU5FX1NUUklQOiAzLFxyXG5cdFx0VFJJQU5HTEVTOiA0LFxyXG5cdFx0VFJJQU5HTEVfU1RSSVA6IDUsXHJcblx0XHRUUklBTkdMRV9GQU46IDYsXHJcblx0XHRVTlNJR05FRF9CWVRFOiA1MTIxLFxyXG5cdFx0VU5TSUdORURfU0hPUlQ6IDUxMjNcclxuXHR9O1xyXG5cclxuXHR2YXIgV0VCR0xfQ09NUE9ORU5UX1RZUEVTID0ge1xyXG5cdFx0NTEyMDogSW50OEFycmF5LFxyXG5cdFx0NTEyMTogVWludDhBcnJheSxcclxuXHRcdDUxMjI6IEludDE2QXJyYXksXHJcblx0XHQ1MTIzOiBVaW50MTZBcnJheSxcclxuXHRcdDUxMjU6IFVpbnQzMkFycmF5LFxyXG5cdFx0NTEyNjogRmxvYXQzMkFycmF5XHJcblx0fTtcclxuXHJcblx0dmFyIFdFQkdMX0ZJTFRFUlMgPSB7XHJcblx0XHQ5NzI4OiBOZWFyZXN0RmlsdGVyLFxyXG5cdFx0OTcyOTogTGluZWFyRmlsdGVyLFxyXG5cdFx0OTk4NDogTmVhcmVzdE1pcG1hcE5lYXJlc3RGaWx0ZXIsXHJcblx0XHQ5OTg1OiBMaW5lYXJNaXBtYXBOZWFyZXN0RmlsdGVyLFxyXG5cdFx0OTk4NjogTmVhcmVzdE1pcG1hcExpbmVhckZpbHRlcixcclxuXHRcdDk5ODc6IExpbmVhck1pcG1hcExpbmVhckZpbHRlclxyXG5cdH07XHJcblxyXG5cdHZhciBXRUJHTF9XUkFQUElOR1MgPSB7XHJcblx0XHQzMzA3MTogQ2xhbXBUb0VkZ2VXcmFwcGluZyxcclxuXHRcdDMzNjQ4OiBNaXJyb3JlZFJlcGVhdFdyYXBwaW5nLFxyXG5cdFx0MTA0OTc6IFJlcGVhdFdyYXBwaW5nXHJcblx0fTtcclxuXHJcblx0dmFyIFdFQkdMX1RZUEVfU0laRVMgPSB7XHJcblx0XHQnU0NBTEFSJzogMSxcclxuXHRcdCdWRUMyJzogMixcclxuXHRcdCdWRUMzJzogMyxcclxuXHRcdCdWRUM0JzogNCxcclxuXHRcdCdNQVQyJzogNCxcclxuXHRcdCdNQVQzJzogOSxcclxuXHRcdCdNQVQ0JzogMTZcclxuXHR9O1xyXG5cclxuXHR2YXIgQVRUUklCVVRFUyA9IHtcclxuXHRcdFBPU0lUSU9OOiAncG9zaXRpb24nLFxyXG5cdFx0Tk9STUFMOiAnbm9ybWFsJyxcclxuXHRcdFRBTkdFTlQ6ICd0YW5nZW50JyxcclxuXHRcdFRFWENPT1JEXzA6ICd1dicsXHJcblx0XHRURVhDT09SRF8xOiAndXYyJyxcclxuXHRcdENPTE9SXzA6ICdjb2xvcicsXHJcblx0XHRXRUlHSFRTXzA6ICdza2luV2VpZ2h0JyxcclxuXHRcdEpPSU5UU18wOiAnc2tpbkluZGV4JyxcclxuXHR9O1xyXG5cclxuXHR2YXIgUEFUSF9QUk9QRVJUSUVTID0ge1xyXG5cdFx0c2NhbGU6ICdzY2FsZScsXHJcblx0XHR0cmFuc2xhdGlvbjogJ3Bvc2l0aW9uJyxcclxuXHRcdHJvdGF0aW9uOiAncXVhdGVybmlvbicsXHJcblx0XHR3ZWlnaHRzOiAnbW9ycGhUYXJnZXRJbmZsdWVuY2VzJ1xyXG5cdH07XHJcblxyXG5cdHZhciBJTlRFUlBPTEFUSU9OID0ge1xyXG5cdFx0Q1VCSUNTUExJTkU6IHVuZGVmaW5lZCwgLy8gV2UgdXNlIGEgY3VzdG9tIGludGVycG9sYW50IChHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGF0aW9uKSBmb3IgQ1VCSUNTUExJTkUgdHJhY2tzLiBFYWNoXHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAvLyBrZXlmcmFtZSB0cmFjayB3aWxsIGJlIGluaXRpYWxpemVkIHdpdGggYSBkZWZhdWx0IGludGVycG9sYXRpb24gdHlwZSwgdGhlbiBtb2RpZmllZC5cclxuXHRcdExJTkVBUjogSW50ZXJwb2xhdGVMaW5lYXIsXHJcblx0XHRTVEVQOiBJbnRlcnBvbGF0ZURpc2NyZXRlXHJcblx0fTtcclxuXHJcblx0dmFyIEFMUEhBX01PREVTID0ge1xyXG5cdFx0T1BBUVVFOiAnT1BBUVVFJyxcclxuXHRcdE1BU0s6ICdNQVNLJyxcclxuXHRcdEJMRU5EOiAnQkxFTkQnXHJcblx0fTtcclxuXHJcblx0LyogVVRJTElUWSBGVU5DVElPTlMgKi9cclxuXHJcblx0ZnVuY3Rpb24gcmVzb2x2ZVVSTCggdXJsLCBwYXRoICkge1xyXG5cclxuXHRcdC8vIEludmFsaWQgVVJMXHJcblx0XHRpZiAoIHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnIHx8IHVybCA9PT0gJycgKSByZXR1cm4gJyc7XHJcblxyXG5cdFx0Ly8gSG9zdCBSZWxhdGl2ZSBVUkxcclxuXHRcdGlmICggL15odHRwcz86XFwvXFwvL2kudGVzdCggcGF0aCApICYmIC9eXFwvLy50ZXN0KCB1cmwgKSApIHtcclxuXHJcblx0XHRcdHBhdGggPSBwYXRoLnJlcGxhY2UoIC8oXmh0dHBzPzpcXC9cXC9bXlxcL10rKS4qL2ksICckMScgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQWJzb2x1dGUgVVJMIGh0dHA6Ly8saHR0cHM6Ly8sLy9cclxuXHRcdGlmICggL14oaHR0cHM/Oik/XFwvXFwvL2kudGVzdCggdXJsICkgKSByZXR1cm4gdXJsO1xyXG5cclxuXHRcdC8vIERhdGEgVVJJXHJcblx0XHRpZiAoIC9eZGF0YTouKiwuKiQvaS50ZXN0KCB1cmwgKSApIHJldHVybiB1cmw7XHJcblxyXG5cdFx0Ly8gQmxvYiBVUkxcclxuXHRcdGlmICggL15ibG9iOi4qJC9pLnRlc3QoIHVybCApICkgcmV0dXJuIHVybDtcclxuXHJcblx0XHQvLyBSZWxhdGl2ZSBVUkxcclxuXHRcdHJldHVybiBwYXRoICsgdXJsO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjZGVmYXVsdC1tYXRlcmlhbFxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRNYXRlcmlhbCggY2FjaGUgKSB7XHJcblxyXG5cdFx0aWYgKCBjYWNoZVsgJ0RlZmF1bHRNYXRlcmlhbCcgXSA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0Y2FjaGVbICdEZWZhdWx0TWF0ZXJpYWwnIF0gPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoIHtcclxuXHRcdFx0XHRjb2xvcjogMHhGRkZGRkYsXHJcblx0XHRcdFx0ZW1pc3NpdmU6IDB4MDAwMDAwLFxyXG5cdFx0XHRcdG1ldGFsbmVzczogMSxcclxuXHRcdFx0XHRyb3VnaG5lc3M6IDEsXHJcblx0XHRcdFx0dHJhbnNwYXJlbnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGRlcHRoVGVzdDogdHJ1ZSxcclxuXHRcdFx0XHRzaWRlOiBGcm9udFNpZGVcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY2FjaGVbICdEZWZhdWx0TWF0ZXJpYWwnIF07XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBrbm93bkV4dGVuc2lvbnMsIG9iamVjdCwgb2JqZWN0RGVmICkge1xyXG5cclxuXHRcdC8vIEFkZCB1bmtub3duIGdsVEYgZXh0ZW5zaW9ucyB0byBhbiBvYmplY3QncyB1c2VyRGF0YS5cclxuXHJcblx0XHRmb3IgKCB2YXIgbmFtZSBpbiBvYmplY3REZWYuZXh0ZW5zaW9ucyApIHtcclxuXHJcblx0XHRcdGlmICgga25vd25FeHRlbnNpb25zWyBuYW1lIF0gPT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0b2JqZWN0LnVzZXJEYXRhLmdsdGZFeHRlbnNpb25zID0gb2JqZWN0LnVzZXJEYXRhLmdsdGZFeHRlbnNpb25zIHx8IHt9O1xyXG5cdFx0XHRcdG9iamVjdC51c2VyRGF0YS5nbHRmRXh0ZW5zaW9uc1sgbmFtZSBdID0gb2JqZWN0RGVmLmV4dGVuc2lvbnNbIG5hbWUgXTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtPYmplY3QzRHxNYXRlcmlhbHxCdWZmZXJHZW9tZXRyeX0gb2JqZWN0XHJcblx0ICogQHBhcmFtIHtHTFRGLmRlZmluaXRpb259IGdsdGZEZWZcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBvYmplY3QsIGdsdGZEZWYgKSB7XHJcblxyXG5cdFx0aWYgKCBnbHRmRGVmLmV4dHJhcyAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0aWYgKCB0eXBlb2YgZ2x0ZkRlZi5leHRyYXMgPT09ICdvYmplY3QnICkge1xyXG5cclxuXHRcdFx0XHRPYmplY3QuYXNzaWduKCBvYmplY3QudXNlckRhdGEsIGdsdGZEZWYuZXh0cmFzICk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBJZ25vcmluZyBwcmltaXRpdmUgdHlwZSAuZXh0cmFzLCAnICsgZ2x0ZkRlZi5leHRyYXMgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNtb3JwaC10YXJnZXRzXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge0J1ZmZlckdlb21ldHJ5fSBnZW9tZXRyeVxyXG5cdCAqIEBwYXJhbSB7QXJyYXk8R0xURi5UYXJnZXQ+fSB0YXJnZXRzXHJcblx0ICogQHBhcmFtIHtHTFRGUGFyc2VyfSBwYXJzZXJcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEJ1ZmZlckdlb21ldHJ5Pn1cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBhZGRNb3JwaFRhcmdldHMoIGdlb21ldHJ5LCB0YXJnZXRzLCBwYXJzZXIgKSB7XHJcblxyXG5cdFx0dmFyIGhhc01vcnBoUG9zaXRpb24gPSBmYWxzZTtcclxuXHRcdHZhciBoYXNNb3JwaE5vcm1hbCA9IGZhbHNlO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSB0YXJnZXRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0dmFyIHRhcmdldCA9IHRhcmdldHNbIGkgXTtcclxuXHJcblx0XHRcdGlmICggdGFyZ2V0LlBPU0lUSU9OICE9PSB1bmRlZmluZWQgKSBoYXNNb3JwaFBvc2l0aW9uID0gdHJ1ZTtcclxuXHRcdFx0aWYgKCB0YXJnZXQuTk9STUFMICE9PSB1bmRlZmluZWQgKSBoYXNNb3JwaE5vcm1hbCA9IHRydWU7XHJcblxyXG5cdFx0XHRpZiAoIGhhc01vcnBoUG9zaXRpb24gJiYgaGFzTW9ycGhOb3JtYWwgKSBicmVhaztcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCAhIGhhc01vcnBoUG9zaXRpb24gJiYgISBoYXNNb3JwaE5vcm1hbCApIHJldHVybiBQcm9taXNlLnJlc29sdmUoIGdlb21ldHJ5ICk7XHJcblxyXG5cdFx0dmFyIHBlbmRpbmdQb3NpdGlvbkFjY2Vzc29ycyA9IFtdO1xyXG5cdFx0dmFyIHBlbmRpbmdOb3JtYWxBY2Nlc3NvcnMgPSBbXTtcclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gdGFyZ2V0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdHZhciB0YXJnZXQgPSB0YXJnZXRzWyBpIF07XHJcblxyXG5cdFx0XHRpZiAoIGhhc01vcnBoUG9zaXRpb24gKSB7XHJcblxyXG5cdFx0XHRcdHZhciBwZW5kaW5nQWNjZXNzb3IgPSB0YXJnZXQuUE9TSVRJT04gIT09IHVuZGVmaW5lZFxyXG5cdFx0XHRcdFx0PyBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgdGFyZ2V0LlBPU0lUSU9OIClcclxuXHRcdFx0XHRcdDogZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbjtcclxuXHJcblx0XHRcdFx0cGVuZGluZ1Bvc2l0aW9uQWNjZXNzb3JzLnB1c2goIHBlbmRpbmdBY2Nlc3NvciApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBoYXNNb3JwaE5vcm1hbCApIHtcclxuXHJcblx0XHRcdFx0dmFyIHBlbmRpbmdBY2Nlc3NvciA9IHRhcmdldC5OT1JNQUwgIT09IHVuZGVmaW5lZFxyXG5cdFx0XHRcdFx0PyBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgdGFyZ2V0Lk5PUk1BTCApXHJcblx0XHRcdFx0XHQ6IGdlb21ldHJ5LmF0dHJpYnV0ZXMubm9ybWFsO1xyXG5cclxuXHRcdFx0XHRwZW5kaW5nTm9ybWFsQWNjZXNzb3JzLnB1c2goIHBlbmRpbmdBY2Nlc3NvciApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFtcclxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdQb3NpdGlvbkFjY2Vzc29ycyApLFxyXG5cdFx0XHRQcm9taXNlLmFsbCggcGVuZGluZ05vcm1hbEFjY2Vzc29ycyApXHJcblx0XHRdICkudGhlbiggZnVuY3Rpb24gKCBhY2Nlc3NvcnMgKSB7XHJcblxyXG5cdFx0XHR2YXIgbW9ycGhQb3NpdGlvbnMgPSBhY2Nlc3NvcnNbIDAgXTtcclxuXHRcdFx0dmFyIG1vcnBoTm9ybWFscyA9IGFjY2Vzc29yc1sgMSBdO1xyXG5cclxuXHRcdFx0aWYgKCBoYXNNb3JwaFBvc2l0aW9uICkgZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLnBvc2l0aW9uID0gbW9ycGhQb3NpdGlvbnM7XHJcblx0XHRcdGlmICggaGFzTW9ycGhOb3JtYWwgKSBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMubm9ybWFsID0gbW9ycGhOb3JtYWxzO1xyXG5cdFx0XHRnZW9tZXRyeS5tb3JwaFRhcmdldHNSZWxhdGl2ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRyZXR1cm4gZ2VvbWV0cnk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7TWVzaH0gbWVzaFxyXG5cdCAqIEBwYXJhbSB7R0xURi5NZXNofSBtZXNoRGVmXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gdXBkYXRlTW9ycGhUYXJnZXRzKCBtZXNoLCBtZXNoRGVmICkge1xyXG5cclxuXHRcdG1lc2gudXBkYXRlTW9ycGhUYXJnZXRzKCk7XHJcblxyXG5cdFx0aWYgKCBtZXNoRGVmLndlaWdodHMgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSBtZXNoRGVmLndlaWdodHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdG1lc2gubW9ycGhUYXJnZXRJbmZsdWVuY2VzWyBpIF0gPSBtZXNoRGVmLndlaWdodHNbIGkgXTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gLmV4dHJhcyBoYXMgdXNlci1kZWZpbmVkIGRhdGEsIHNvIGNoZWNrIHRoYXQgLmV4dHJhcy50YXJnZXROYW1lcyBpcyBhbiBhcnJheS5cclxuXHRcdGlmICggbWVzaERlZi5leHRyYXMgJiYgQXJyYXkuaXNBcnJheSggbWVzaERlZi5leHRyYXMudGFyZ2V0TmFtZXMgKSApIHtcclxuXHJcblx0XHRcdHZhciB0YXJnZXROYW1lcyA9IG1lc2hEZWYuZXh0cmFzLnRhcmdldE5hbWVzO1xyXG5cclxuXHRcdFx0aWYgKCBtZXNoLm1vcnBoVGFyZ2V0SW5mbHVlbmNlcy5sZW5ndGggPT09IHRhcmdldE5hbWVzLmxlbmd0aCApIHtcclxuXHJcblx0XHRcdFx0bWVzaC5tb3JwaFRhcmdldERpY3Rpb25hcnkgPSB7fTtcclxuXHJcblx0XHRcdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IHRhcmdldE5hbWVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRcdG1lc2gubW9ycGhUYXJnZXREaWN0aW9uYXJ5WyB0YXJnZXROYW1lc1sgaSBdIF0gPSBpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBJbnZhbGlkIGV4dHJhcy50YXJnZXROYW1lcyBsZW5ndGguIElnbm9yaW5nIG5hbWVzLicgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlS2V5KCBwcmltaXRpdmVEZWYgKSB7XHJcblxyXG5cdFx0dmFyIGRyYWNvRXh0ZW5zaW9uID0gcHJpbWl0aXZlRGVmLmV4dGVuc2lvbnMgJiYgcHJpbWl0aXZlRGVmLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT04gXTtcclxuXHRcdHZhciBnZW9tZXRyeUtleTtcclxuXHJcblx0XHRpZiAoIGRyYWNvRXh0ZW5zaW9uICkge1xyXG5cclxuXHRcdFx0Z2VvbWV0cnlLZXkgPSAnZHJhY286JyArIGRyYWNvRXh0ZW5zaW9uLmJ1ZmZlclZpZXdcclxuXHRcdFx0XHQrICc6JyArIGRyYWNvRXh0ZW5zaW9uLmluZGljZXNcclxuXHRcdFx0XHQrICc6JyArIGNyZWF0ZUF0dHJpYnV0ZXNLZXkoIGRyYWNvRXh0ZW5zaW9uLmF0dHJpYnV0ZXMgKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0Z2VvbWV0cnlLZXkgPSBwcmltaXRpdmVEZWYuaW5kaWNlcyArICc6JyArIGNyZWF0ZUF0dHJpYnV0ZXNLZXkoIHByaW1pdGl2ZURlZi5hdHRyaWJ1dGVzICkgKyAnOicgKyBwcmltaXRpdmVEZWYubW9kZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGdlb21ldHJ5S2V5O1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnV0ZXNLZXkoIGF0dHJpYnV0ZXMgKSB7XHJcblxyXG5cdFx0dmFyIGF0dHJpYnV0ZXNLZXkgPSAnJztcclxuXHJcblx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKCBhdHRyaWJ1dGVzICkuc29ydCgpO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSBrZXlzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0YXR0cmlidXRlc0tleSArPSBrZXlzWyBpIF0gKyAnOicgKyBhdHRyaWJ1dGVzWyBrZXlzWyBpIF0gXSArICc7JztcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGF0dHJpYnV0ZXNLZXk7XHJcblxyXG5cdH1cclxuXHJcblx0LyogR0xURiBQQVJTRVIgKi9cclxuXHJcblx0ZnVuY3Rpb24gR0xURlBhcnNlcigganNvbiwgb3B0aW9ucyApIHtcclxuXHJcblx0XHR0aGlzLmpzb24gPSBqc29uIHx8IHt9O1xyXG5cdFx0dGhpcy5leHRlbnNpb25zID0ge307XHJcblx0XHR0aGlzLnBsdWdpbnMgPSB7fTtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG5cdFx0Ly8gbG9hZGVyIG9iamVjdCBjYWNoZVxyXG5cdFx0dGhpcy5jYWNoZSA9IG5ldyBHTFRGUmVnaXN0cnkoKTtcclxuXHJcblx0XHQvLyBhc3NvY2lhdGlvbnMgYmV0d2VlbiBUaHJlZS5qcyBvYmplY3RzIGFuZCBnbFRGIGVsZW1lbnRzXHJcblx0XHR0aGlzLmFzc29jaWF0aW9ucyA9IG5ldyBNYXAoKTtcclxuXHJcblx0XHQvLyBCdWZmZXJHZW9tZXRyeSBjYWNoaW5nXHJcblx0XHR0aGlzLnByaW1pdGl2ZUNhY2hlID0ge307XHJcblxyXG5cdFx0Ly8gT2JqZWN0M0QgaW5zdGFuY2UgY2FjaGVzXHJcblx0XHR0aGlzLm1lc2hDYWNoZSA9IHsgcmVmczoge30sIHVzZXM6IHt9IH07XHJcblx0XHR0aGlzLmNhbWVyYUNhY2hlID0geyByZWZzOiB7fSwgdXNlczoge30gfTtcclxuXHRcdHRoaXMubGlnaHRDYWNoZSA9IHsgcmVmczoge30sIHVzZXM6IHt9IH07XHJcblxyXG5cdFx0Ly8gVHJhY2sgbm9kZSBuYW1lcywgdG8gZW5zdXJlIG5vIGR1cGxpY2F0ZXNcclxuXHRcdHRoaXMubm9kZU5hbWVzVXNlZCA9IHt9O1xyXG5cclxuXHRcdC8vIFVzZSBhbiBJbWFnZUJpdG1hcExvYWRlciBpZiBpbWFnZUJpdG1hcHMgYXJlIHN1cHBvcnRlZC4gTW92ZXMgbXVjaCBvZiB0aGVcclxuXHRcdC8vIGV4cGVuc2l2ZSB3b3JrIG9mIHVwbG9hZGluZyBhIHRleHR1cmUgdG8gdGhlIEdQVSBvZmYgdGhlIG1haW4gdGhyZWFkLlxyXG5cdFx0aWYgKCB0eXBlb2YgY3JlYXRlSW1hZ2VCaXRtYXAgIT09ICd1bmRlZmluZWQnICYmIC9GaXJlZm94Ly50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50ICkgPT09IGZhbHNlICkge1xyXG5cclxuXHRcdFx0dGhpcy50ZXh0dXJlTG9hZGVyID0gbmV3IEltYWdlQml0bWFwTG9hZGVyKCB0aGlzLm9wdGlvbnMubWFuYWdlciApO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHR0aGlzLnRleHR1cmVMb2FkZXIgPSBuZXcgVGV4dHVyZUxvYWRlciggdGhpcy5vcHRpb25zLm1hbmFnZXIgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy50ZXh0dXJlTG9hZGVyLnNldENyb3NzT3JpZ2luKCB0aGlzLm9wdGlvbnMuY3Jvc3NPcmlnaW4gKTtcclxuXHRcdHRoaXMudGV4dHVyZUxvYWRlci5zZXRSZXF1ZXN0SGVhZGVyKCB0aGlzLm9wdGlvbnMucmVxdWVzdEhlYWRlciApO1xyXG5cclxuXHRcdHRoaXMuZmlsZUxvYWRlciA9IG5ldyBGaWxlTG9hZGVyKCB0aGlzLm9wdGlvbnMubWFuYWdlciApO1xyXG5cdFx0dGhpcy5maWxlTG9hZGVyLnNldFJlc3BvbnNlVHlwZSggJ2FycmF5YnVmZmVyJyApO1xyXG5cclxuXHRcdGlmICggdGhpcy5vcHRpb25zLmNyb3NzT3JpZ2luID09PSAndXNlLWNyZWRlbnRpYWxzJyApIHtcclxuXHJcblx0XHRcdHRoaXMuZmlsZUxvYWRlci5zZXRXaXRoQ3JlZGVudGlhbHMoIHRydWUgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUuc2V0RXh0ZW5zaW9ucyA9IGZ1bmN0aW9uICggZXh0ZW5zaW9ucyApIHtcclxuXHJcblx0XHR0aGlzLmV4dGVuc2lvbnMgPSBleHRlbnNpb25zO1xyXG5cclxuXHR9O1xyXG5cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5zZXRQbHVnaW5zID0gZnVuY3Rpb24gKCBwbHVnaW5zICkge1xyXG5cclxuXHRcdHRoaXMucGx1Z2lucyA9IHBsdWdpbnM7XHJcblxyXG5cdH07XHJcblxyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKCBvbkxvYWQsIG9uRXJyb3IgKSB7XHJcblxyXG5cdFx0dmFyIHBhcnNlciA9IHRoaXM7XHJcblx0XHR2YXIganNvbiA9IHRoaXMuanNvbjtcclxuXHRcdHZhciBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xyXG5cclxuXHRcdC8vIENsZWFyIHRoZSBsb2FkZXIgY2FjaGVcclxuXHRcdHRoaXMuY2FjaGUucmVtb3ZlQWxsKCk7XHJcblxyXG5cdFx0Ly8gTWFyayB0aGUgc3BlY2lhbCBub2Rlcy9tZXNoZXMgaW4ganNvbiBmb3IgZWZmaWNpZW50IHBhcnNlXHJcblx0XHR0aGlzLl9pbnZva2VBbGwoIGZ1bmN0aW9uICggZXh0ICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIGV4dC5fbWFya0RlZnMgJiYgZXh0Ll9tYXJrRGVmcygpO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHRQcm9taXNlLmFsbCggdGhpcy5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcclxuXHJcblx0XHRcdHJldHVybiBleHQuYmVmb3JlUm9vdCAmJiBleHQuYmVmb3JlUm9vdCgpO1xyXG5cclxuXHRcdH0gKSApLnRoZW4oIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggW1xyXG5cclxuXHRcdFx0XHRwYXJzZXIuZ2V0RGVwZW5kZW5jaWVzKCAnc2NlbmUnICksXHJcblx0XHRcdFx0cGFyc2VyLmdldERlcGVuZGVuY2llcyggJ2FuaW1hdGlvbicgKSxcclxuXHRcdFx0XHRwYXJzZXIuZ2V0RGVwZW5kZW5jaWVzKCAnY2FtZXJhJyApLFxyXG5cclxuXHRcdFx0XSApO1xyXG5cclxuXHRcdH0gKS50aGVuKCBmdW5jdGlvbiAoIGRlcGVuZGVuY2llcyApIHtcclxuXHJcblx0XHRcdHZhciByZXN1bHQgPSB7XHJcblx0XHRcdFx0c2NlbmU6IGRlcGVuZGVuY2llc1sgMCBdWyBqc29uLnNjZW5lIHx8IDAgXSxcclxuXHRcdFx0XHRzY2VuZXM6IGRlcGVuZGVuY2llc1sgMCBdLFxyXG5cdFx0XHRcdGFuaW1hdGlvbnM6IGRlcGVuZGVuY2llc1sgMSBdLFxyXG5cdFx0XHRcdGNhbWVyYXM6IGRlcGVuZGVuY2llc1sgMiBdLFxyXG5cdFx0XHRcdGFzc2V0OiBqc29uLmFzc2V0LFxyXG5cdFx0XHRcdHBhcnNlcjogcGFyc2VyLFxyXG5cdFx0XHRcdHVzZXJEYXRhOiB7fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0YWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBleHRlbnNpb25zLCByZXN1bHQsIGpzb24gKTtcclxuXHJcblx0XHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIHJlc3VsdCwganNvbiApO1xyXG5cclxuXHRcdFx0UHJvbWlzZS5hbGwoIHBhcnNlci5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGV4dC5hZnRlclJvb3QgJiYgZXh0LmFmdGVyUm9vdCggcmVzdWx0ICk7XHJcblxyXG5cdFx0XHR9ICkgKS50aGVuKCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdG9uTG9hZCggcmVzdWx0ICk7XHJcblxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0fSApLmNhdGNoKCBvbkVycm9yICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIE1hcmtzIHRoZSBzcGVjaWFsIG5vZGVzL21lc2hlcyBpbiBqc29uIGZvciBlZmZpY2llbnQgcGFyc2UuXHJcblx0ICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUuX21hcmtEZWZzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdHZhciBub2RlRGVmcyA9IHRoaXMuanNvbi5ub2RlcyB8fCBbXTtcclxuXHRcdHZhciBza2luRGVmcyA9IHRoaXMuanNvbi5za2lucyB8fCBbXTtcclxuXHRcdHZhciBtZXNoRGVmcyA9IHRoaXMuanNvbi5tZXNoZXMgfHwgW107XHJcblxyXG5cdFx0Ly8gTm90aGluZyBpbiB0aGUgbm9kZSBkZWZpbml0aW9uIGluZGljYXRlcyB3aGV0aGVyIGl0IGlzIGEgQm9uZSBvciBhblxyXG5cdFx0Ly8gT2JqZWN0M0QuIFVzZSB0aGUgc2tpbnMnIGpvaW50IHJlZmVyZW5jZXMgdG8gbWFyayBib25lcy5cclxuXHRcdGZvciAoIHZhciBza2luSW5kZXggPSAwLCBza2luTGVuZ3RoID0gc2tpbkRlZnMubGVuZ3RoOyBza2luSW5kZXggPCBza2luTGVuZ3RoOyBza2luSW5kZXggKysgKSB7XHJcblxyXG5cdFx0XHR2YXIgam9pbnRzID0gc2tpbkRlZnNbIHNraW5JbmRleCBdLmpvaW50cztcclxuXHJcblx0XHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSBqb2ludHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdG5vZGVEZWZzWyBqb2ludHNbIGkgXSBdLmlzQm9uZSA9IHRydWU7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEl0ZXJhdGUgb3ZlciBhbGwgbm9kZXMsIG1hcmtpbmcgcmVmZXJlbmNlcyB0byBzaGFyZWQgcmVzb3VyY2VzLFxyXG5cdFx0Ly8gYXMgd2VsbCBhcyBza2VsZXRvbiBqb2ludHMuXHJcblx0XHRmb3IgKCB2YXIgbm9kZUluZGV4ID0gMCwgbm9kZUxlbmd0aCA9IG5vZGVEZWZzLmxlbmd0aDsgbm9kZUluZGV4IDwgbm9kZUxlbmd0aDsgbm9kZUluZGV4ICsrICkge1xyXG5cclxuXHRcdFx0dmFyIG5vZGVEZWYgPSBub2RlRGVmc1sgbm9kZUluZGV4IF07XHJcblxyXG5cdFx0XHRpZiAoIG5vZGVEZWYubWVzaCAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHR0aGlzLl9hZGROb2RlUmVmKCB0aGlzLm1lc2hDYWNoZSwgbm9kZURlZi5tZXNoICk7XHJcblxyXG5cdFx0XHRcdC8vIE5vdGhpbmcgaW4gdGhlIG1lc2ggZGVmaW5pdGlvbiBpbmRpY2F0ZXMgd2hldGhlciBpdCBpc1xyXG5cdFx0XHRcdC8vIGEgU2tpbm5lZE1lc2ggb3IgTWVzaC4gVXNlIHRoZSBub2RlJ3MgbWVzaCByZWZlcmVuY2VcclxuXHRcdFx0XHQvLyB0byBtYXJrIFNraW5uZWRNZXNoIGlmIG5vZGUgaGFzIHNraW4uXHJcblx0XHRcdFx0aWYgKCBub2RlRGVmLnNraW4gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0XHRtZXNoRGVmc1sgbm9kZURlZi5tZXNoIF0uaXNTa2lubmVkTWVzaCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggbm9kZURlZi5jYW1lcmEgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0dGhpcy5fYWRkTm9kZVJlZiggdGhpcy5jYW1lcmFDYWNoZSwgbm9kZURlZi5jYW1lcmEgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIENvdW50cyByZWZlcmVuY2VzIHRvIHNoYXJlZCBub2RlIC8gT2JqZWN0M0QgcmVzb3VyY2VzLiBUaGVzZSByZXNvdXJjZXNcclxuXHQgKiBjYW4gYmUgcmV1c2VkLCBvciBcImluc3RhbnRpYXRlZFwiLCBhdCBtdWx0aXBsZSBub2RlcyBpbiB0aGUgc2NlbmVcclxuXHQgKiBoaWVyYXJjaHkuIE1lc2gsIENhbWVyYSwgYW5kIExpZ2h0IGluc3RhbmNlcyBhcmUgaW5zdGFudGlhdGVkIGFuZCBtdXN0XHJcblx0ICogYmUgbWFya2VkLiBOb24tc2NlbmVncmFwaCByZXNvdXJjZXMgKGxpa2UgTWF0ZXJpYWxzLCBHZW9tZXRyaWVzLCBhbmRcclxuXHQgKiBUZXh0dXJlcykgY2FuIGJlIHJldXNlZCBkaXJlY3RseSBhbmQgYXJlIG5vdCBtYXJrZWQgaGVyZS5cclxuXHQgKlxyXG5cdCAqIEV4YW1wbGU6IENlc2l1bU1pbGtUcnVjayBzYW1wbGUgbW9kZWwgcmV1c2VzIFwiV2hlZWxcIiBtZXNoZXMuXHJcblx0ICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUuX2FkZE5vZGVSZWYgPSBmdW5jdGlvbiAoIGNhY2hlLCBpbmRleCApIHtcclxuXHJcblx0XHRpZiAoIGluZGV4ID09PSB1bmRlZmluZWQgKSByZXR1cm47XHJcblxyXG5cdFx0aWYgKCBjYWNoZS5yZWZzWyBpbmRleCBdID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRjYWNoZS5yZWZzWyBpbmRleCBdID0gY2FjaGUudXNlc1sgaW5kZXggXSA9IDA7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGNhY2hlLnJlZnNbIGluZGV4IF0gKys7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIGEgc2hhcmVkIHJlc291cmNlLCBjbG9uaW5nIGl0IGlmIG5lY2Vzc2FyeS4gKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5fZ2V0Tm9kZVJlZiA9IGZ1bmN0aW9uICggY2FjaGUsIGluZGV4LCBvYmplY3QgKSB7XHJcblxyXG5cdFx0aWYgKCBjYWNoZS5yZWZzWyBpbmRleCBdIDw9IDEgKSByZXR1cm4gb2JqZWN0O1xyXG5cclxuXHRcdHZhciByZWYgPSBvYmplY3QuY2xvbmUoKTtcclxuXHJcblx0XHRyZWYubmFtZSArPSAnX2luc3RhbmNlXycgKyAoIGNhY2hlLnVzZXNbIGluZGV4IF0gKysgKTtcclxuXHJcblx0XHRyZXR1cm4gcmVmO1xyXG5cclxuXHR9O1xyXG5cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5faW52b2tlT25lID0gZnVuY3Rpb24gKCBmdW5jICkge1xyXG5cclxuXHRcdHZhciBleHRlbnNpb25zID0gT2JqZWN0LnZhbHVlcyggdGhpcy5wbHVnaW5zICk7XHJcblx0XHRleHRlbnNpb25zLnB1c2goIHRoaXMgKTtcclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgaSArKyApIHtcclxuXHJcblx0XHRcdHZhciByZXN1bHQgPSBmdW5jKCBleHRlbnNpb25zWyBpIF0gKTtcclxuXHJcblx0XHRcdGlmICggcmVzdWx0ICkgcmV0dXJuIHJlc3VsdDtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLl9pbnZva2VBbGwgPSBmdW5jdGlvbiAoIGZ1bmMgKSB7XHJcblxyXG5cdFx0dmFyIGV4dGVuc2lvbnMgPSBPYmplY3QudmFsdWVzKCB0aGlzLnBsdWdpbnMgKTtcclxuXHRcdGV4dGVuc2lvbnMudW5zaGlmdCggdGhpcyApO1xyXG5cclxuXHRcdHZhciBwZW5kaW5nID0gW107XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkgKysgKSB7XHJcblxyXG5cdFx0XHR2YXIgcmVzdWx0ID0gZnVuYyggZXh0ZW5zaW9uc1sgaSBdICk7XHJcblxyXG5cdFx0XHRpZiAoIHJlc3VsdCApIHBlbmRpbmcucHVzaCggcmVzdWx0ICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwZW5kaW5nO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXF1ZXN0cyB0aGUgc3BlY2lmaWVkIGRlcGVuZGVuY3kgYXN5bmNocm9ub3VzbHksIHdpdGggY2FjaGluZy5cclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0M0R8TWF0ZXJpYWx8VEhSRUUuVGV4dHVyZXxBbmltYXRpb25DbGlwfEFycmF5QnVmZmVyfE9iamVjdD59XHJcblx0ICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUuZ2V0RGVwZW5kZW5jeSA9IGZ1bmN0aW9uICggdHlwZSwgaW5kZXggKSB7XHJcblxyXG5cdFx0dmFyIGNhY2hlS2V5ID0gdHlwZSArICc6JyArIGluZGV4O1xyXG5cdFx0dmFyIGRlcGVuZGVuY3kgPSB0aGlzLmNhY2hlLmdldCggY2FjaGVLZXkgKTtcclxuXHJcblx0XHRpZiAoICEgZGVwZW5kZW5jeSApIHtcclxuXHJcblx0XHRcdHN3aXRjaCAoIHR5cGUgKSB7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ3NjZW5lJzpcclxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRTY2VuZSggaW5kZXggKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdub2RlJzpcclxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWROb2RlKCBpbmRleCApO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ21lc2gnOlxyXG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXh0LmxvYWRNZXNoICYmIGV4dC5sb2FkTWVzaCggaW5kZXggKTtcclxuXHJcblx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAnYWNjZXNzb3InOlxyXG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZEFjY2Vzc29yKCBpbmRleCApO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ2J1ZmZlclZpZXcnOlxyXG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXh0LmxvYWRCdWZmZXJWaWV3ICYmIGV4dC5sb2FkQnVmZmVyVmlldyggaW5kZXggKTtcclxuXHJcblx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAnYnVmZmVyJzpcclxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRCdWZmZXIoIGluZGV4ICk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAnbWF0ZXJpYWwnOlxyXG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXh0LmxvYWRNYXRlcmlhbCAmJiBleHQubG9hZE1hdGVyaWFsKCBpbmRleCApO1xyXG5cclxuXHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICd0ZXh0dXJlJzpcclxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIGV4dC5sb2FkVGV4dHVyZSAmJiBleHQubG9hZFRleHR1cmUoIGluZGV4ICk7XHJcblxyXG5cdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ3NraW4nOlxyXG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZFNraW4oIGluZGV4ICk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAnYW5pbWF0aW9uJzpcclxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRBbmltYXRpb24oIGluZGV4ICk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAnY2FtZXJhJzpcclxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRDYW1lcmEoIGluZGV4ICk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1Vua25vd24gdHlwZTogJyArIHR5cGUgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuY2FjaGUuYWRkKCBjYWNoZUtleSwgZGVwZW5kZW5jeSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZGVwZW5kZW5jeTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdHMgYWxsIGRlcGVuZGVuY2llcyBvZiB0aGUgc3BlY2lmaWVkIHR5cGUgYXN5bmNocm9ub3VzbHksIHdpdGggY2FjaGluZy5cclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk8T2JqZWN0Pj59XHJcblx0ICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUuZ2V0RGVwZW5kZW5jaWVzID0gZnVuY3Rpb24gKCB0eXBlICkge1xyXG5cclxuXHRcdHZhciBkZXBlbmRlbmNpZXMgPSB0aGlzLmNhY2hlLmdldCggdHlwZSApO1xyXG5cclxuXHRcdGlmICggISBkZXBlbmRlbmNpZXMgKSB7XHJcblxyXG5cdFx0XHR2YXIgcGFyc2VyID0gdGhpcztcclxuXHRcdFx0dmFyIGRlZnMgPSB0aGlzLmpzb25bIHR5cGUgKyAoIHR5cGUgPT09ICdtZXNoJyA/ICdlcycgOiAncycgKSBdIHx8IFtdO1xyXG5cclxuXHRcdFx0ZGVwZW5kZW5jaWVzID0gUHJvbWlzZS5hbGwoIGRlZnMubWFwKCBmdW5jdGlvbiAoIGRlZiwgaW5kZXggKSB7XHJcblxyXG5cdFx0XHRcdHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggdHlwZSwgaW5kZXggKTtcclxuXHJcblx0XHRcdH0gKSApO1xyXG5cclxuXHRcdFx0dGhpcy5jYWNoZS5hZGQoIHR5cGUsIGRlcGVuZGVuY2llcyApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZGVwZW5kZW5jaWVzO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2J1ZmZlcnMtYW5kLWJ1ZmZlci12aWV3c1xyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBidWZmZXJJbmRleFxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXlCdWZmZXI+fVxyXG5cdCAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmxvYWRCdWZmZXIgPSBmdW5jdGlvbiAoIGJ1ZmZlckluZGV4ICkge1xyXG5cclxuXHRcdHZhciBidWZmZXJEZWYgPSB0aGlzLmpzb24uYnVmZmVyc1sgYnVmZmVySW5kZXggXTtcclxuXHRcdHZhciBsb2FkZXIgPSB0aGlzLmZpbGVMb2FkZXI7XHJcblxyXG5cdFx0aWYgKCBidWZmZXJEZWYudHlwZSAmJiBidWZmZXJEZWYudHlwZSAhPT0gJ2FycmF5YnVmZmVyJyApIHtcclxuXHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6ICcgKyBidWZmZXJEZWYudHlwZSArICcgYnVmZmVyIHR5cGUgaXMgbm90IHN1cHBvcnRlZC4nICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIElmIHByZXNlbnQsIEdMQiBjb250YWluZXIgaXMgcmVxdWlyZWQgdG8gYmUgdGhlIGZpcnN0IGJ1ZmZlci5cclxuXHRcdGlmICggYnVmZmVyRGVmLnVyaSA9PT0gdW5kZWZpbmVkICYmIGJ1ZmZlckluZGV4ID09PSAwICkge1xyXG5cclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggdGhpcy5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9CSU5BUllfR0xURiBdLmJvZHkgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiAoIHJlc29sdmUsIHJlamVjdCApIHtcclxuXHJcblx0XHRcdGxvYWRlci5sb2FkKCByZXNvbHZlVVJMKCBidWZmZXJEZWYudXJpLCBvcHRpb25zLnBhdGggKSwgcmVzb2x2ZSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdHJlamVjdCggbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogRmFpbGVkIHRvIGxvYWQgYnVmZmVyIFwiJyArIGJ1ZmZlckRlZi51cmkgKyAnXCIuJyApICk7XHJcblxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2J1ZmZlcnMtYW5kLWJ1ZmZlci12aWV3c1xyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBidWZmZXJWaWV3SW5kZXhcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5QnVmZmVyPn1cclxuXHQgKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkQnVmZmVyVmlldyA9IGZ1bmN0aW9uICggYnVmZmVyVmlld0luZGV4ICkge1xyXG5cclxuXHRcdHZhciBidWZmZXJWaWV3RGVmID0gdGhpcy5qc29uLmJ1ZmZlclZpZXdzWyBidWZmZXJWaWV3SW5kZXggXTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5nZXREZXBlbmRlbmN5KCAnYnVmZmVyJywgYnVmZmVyVmlld0RlZi5idWZmZXIgKS50aGVuKCBmdW5jdGlvbiAoIGJ1ZmZlciApIHtcclxuXHJcblx0XHRcdHZhciBieXRlTGVuZ3RoID0gYnVmZmVyVmlld0RlZi5ieXRlTGVuZ3RoIHx8IDA7XHJcblx0XHRcdHZhciBieXRlT2Zmc2V0ID0gYnVmZmVyVmlld0RlZi5ieXRlT2Zmc2V0IHx8IDA7XHJcblx0XHRcdHJldHVybiBidWZmZXIuc2xpY2UoIGJ5dGVPZmZzZXQsIGJ5dGVPZmZzZXQgKyBieXRlTGVuZ3RoICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2FjY2Vzc29yc1xyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBhY2Nlc3NvckluZGV4XHJcblx0ICogQHJldHVybiB7UHJvbWlzZTxCdWZmZXJBdHRyaWJ1dGV8SW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGU+fVxyXG5cdCAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmxvYWRBY2Nlc3NvciA9IGZ1bmN0aW9uICggYWNjZXNzb3JJbmRleCApIHtcclxuXHJcblx0XHR2YXIgcGFyc2VyID0gdGhpcztcclxuXHRcdHZhciBqc29uID0gdGhpcy5qc29uO1xyXG5cclxuXHRcdHZhciBhY2Nlc3NvckRlZiA9IHRoaXMuanNvbi5hY2Nlc3NvcnNbIGFjY2Vzc29ySW5kZXggXTtcclxuXHJcblx0XHRpZiAoIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgPT09IHVuZGVmaW5lZCAmJiBhY2Nlc3NvckRlZi5zcGFyc2UgPT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdC8vIElnbm9yZSBlbXB0eSBhY2Nlc3NvcnMsIHdoaWNoIG1heSBiZSB1c2VkIHRvIGRlY2xhcmUgcnVudGltZVxyXG5cdFx0XHQvLyBpbmZvcm1hdGlvbiBhYm91dCBhdHRyaWJ1dGVzIGNvbWluZyBmcm9tIGFub3RoZXIgc291cmNlIChlLmcuIERyYWNvXHJcblx0XHRcdC8vIGNvbXByZXNzaW9uIGV4dGVuc2lvbikuXHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoIG51bGwgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHBlbmRpbmdCdWZmZXJWaWV3cyA9IFtdO1xyXG5cclxuXHRcdGlmICggYWNjZXNzb3JEZWYuYnVmZmVyVmlldyAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0cGVuZGluZ0J1ZmZlclZpZXdzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlclZpZXcnLCBhY2Nlc3NvckRlZi5idWZmZXJWaWV3ICkgKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0cGVuZGluZ0J1ZmZlclZpZXdzLnB1c2goIG51bGwgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBhY2Nlc3NvckRlZi5zcGFyc2UgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdHBlbmRpbmdCdWZmZXJWaWV3cy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3JywgYWNjZXNzb3JEZWYuc3BhcnNlLmluZGljZXMuYnVmZmVyVmlldyApICk7XHJcblx0XHRcdHBlbmRpbmdCdWZmZXJWaWV3cy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3JywgYWNjZXNzb3JEZWYuc3BhcnNlLnZhbHVlcy5idWZmZXJWaWV3ICkgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nQnVmZmVyVmlld3MgKS50aGVuKCBmdW5jdGlvbiAoIGJ1ZmZlclZpZXdzICkge1xyXG5cclxuXHRcdFx0dmFyIGJ1ZmZlclZpZXcgPSBidWZmZXJWaWV3c1sgMCBdO1xyXG5cclxuXHRcdFx0dmFyIGl0ZW1TaXplID0gV0VCR0xfVFlQRV9TSVpFU1sgYWNjZXNzb3JEZWYudHlwZSBdO1xyXG5cdFx0XHR2YXIgVHlwZWRBcnJheSA9IFdFQkdMX0NPTVBPTkVOVF9UWVBFU1sgYWNjZXNzb3JEZWYuY29tcG9uZW50VHlwZSBdO1xyXG5cclxuXHRcdFx0Ly8gRm9yIFZFQzM6IGl0ZW1TaXplIGlzIDMsIGVsZW1lbnRCeXRlcyBpcyA0LCBpdGVtQnl0ZXMgaXMgMTIuXHJcblx0XHRcdHZhciBlbGVtZW50Qnl0ZXMgPSBUeXBlZEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UO1xyXG5cdFx0XHR2YXIgaXRlbUJ5dGVzID0gZWxlbWVudEJ5dGVzICogaXRlbVNpemU7XHJcblx0XHRcdHZhciBieXRlT2Zmc2V0ID0gYWNjZXNzb3JEZWYuYnl0ZU9mZnNldCB8fCAwO1xyXG5cdFx0XHR2YXIgYnl0ZVN0cmlkZSA9IGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgIT09IHVuZGVmaW5lZCA/IGpzb24uYnVmZmVyVmlld3NbIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgXS5ieXRlU3RyaWRlIDogdW5kZWZpbmVkO1xyXG5cdFx0XHR2YXIgbm9ybWFsaXplZCA9IGFjY2Vzc29yRGVmLm5vcm1hbGl6ZWQgPT09IHRydWU7XHJcblx0XHRcdHZhciBhcnJheSwgYnVmZmVyQXR0cmlidXRlO1xyXG5cclxuXHRcdFx0Ly8gVGhlIGJ1ZmZlciBpcyBub3QgaW50ZXJsZWF2ZWQgaWYgdGhlIHN0cmlkZSBpcyB0aGUgaXRlbSBzaXplIGluIGJ5dGVzLlxyXG5cdFx0XHRpZiAoIGJ5dGVTdHJpZGUgJiYgYnl0ZVN0cmlkZSAhPT0gaXRlbUJ5dGVzICkge1xyXG5cclxuXHRcdFx0XHQvLyBFYWNoIFwic2xpY2VcIiBvZiB0aGUgYnVmZmVyLCBhcyBkZWZpbmVkIGJ5ICdjb3VudCcgZWxlbWVudHMgb2YgJ2J5dGVTdHJpZGUnIGJ5dGVzLCBnZXRzIGl0cyBvd24gSW50ZXJsZWF2ZWRCdWZmZXJcclxuXHRcdFx0XHQvLyBUaGlzIG1ha2VzIHN1cmUgdGhhdCBJQkEuY291bnQgcmVmbGVjdHMgYWNjZXNzb3IuY291bnQgcHJvcGVybHlcclxuXHRcdFx0XHR2YXIgaWJTbGljZSA9IE1hdGguZmxvb3IoIGJ5dGVPZmZzZXQgLyBieXRlU3RyaWRlICk7XHJcblx0XHRcdFx0dmFyIGliQ2FjaGVLZXkgPSAnSW50ZXJsZWF2ZWRCdWZmZXI6JyArIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgKyAnOicgKyBhY2Nlc3NvckRlZi5jb21wb25lbnRUeXBlICsgJzonICsgaWJTbGljZSArICc6JyArIGFjY2Vzc29yRGVmLmNvdW50O1xyXG5cdFx0XHRcdHZhciBpYiA9IHBhcnNlci5jYWNoZS5nZXQoIGliQ2FjaGVLZXkgKTtcclxuXHJcblx0XHRcdFx0aWYgKCAhIGliICkge1xyXG5cclxuXHRcdFx0XHRcdGFycmF5ID0gbmV3IFR5cGVkQXJyYXkoIGJ1ZmZlclZpZXcsIGliU2xpY2UgKiBieXRlU3RyaWRlLCBhY2Nlc3NvckRlZi5jb3VudCAqIGJ5dGVTdHJpZGUgLyBlbGVtZW50Qnl0ZXMgKTtcclxuXHJcblx0XHRcdFx0XHQvLyBJbnRlZ2VyIHBhcmFtZXRlcnMgdG8gSUIvSUJBIGFyZSBpbiBhcnJheSBlbGVtZW50cywgbm90IGJ5dGVzLlxyXG5cdFx0XHRcdFx0aWIgPSBuZXcgSW50ZXJsZWF2ZWRCdWZmZXIoIGFycmF5LCBieXRlU3RyaWRlIC8gZWxlbWVudEJ5dGVzICk7XHJcblxyXG5cdFx0XHRcdFx0cGFyc2VyLmNhY2hlLmFkZCggaWJDYWNoZUtleSwgaWIgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRidWZmZXJBdHRyaWJ1dGUgPSBuZXcgSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUoIGliLCBpdGVtU2l6ZSwgKCBieXRlT2Zmc2V0ICUgYnl0ZVN0cmlkZSApIC8gZWxlbWVudEJ5dGVzLCBub3JtYWxpemVkICk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRpZiAoIGJ1ZmZlclZpZXcgPT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHRcdFx0YXJyYXkgPSBuZXcgVHlwZWRBcnJheSggYWNjZXNzb3JEZWYuY291bnQgKiBpdGVtU2l6ZSApO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGFycmF5ID0gbmV3IFR5cGVkQXJyYXkoIGJ1ZmZlclZpZXcsIGJ5dGVPZmZzZXQsIGFjY2Vzc29yRGVmLmNvdW50ICogaXRlbVNpemUgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRidWZmZXJBdHRyaWJ1dGUgPSBuZXcgQnVmZmVyQXR0cmlidXRlKCBhcnJheSwgaXRlbVNpemUsIG5vcm1hbGl6ZWQgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjc3BhcnNlLWFjY2Vzc29yc1xyXG5cdFx0XHRpZiAoIGFjY2Vzc29yRGVmLnNwYXJzZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHR2YXIgaXRlbVNpemVJbmRpY2VzID0gV0VCR0xfVFlQRV9TSVpFUy5TQ0FMQVI7XHJcblx0XHRcdFx0dmFyIFR5cGVkQXJyYXlJbmRpY2VzID0gV0VCR0xfQ09NUE9ORU5UX1RZUEVTWyBhY2Nlc3NvckRlZi5zcGFyc2UuaW5kaWNlcy5jb21wb25lbnRUeXBlIF07XHJcblxyXG5cdFx0XHRcdHZhciBieXRlT2Zmc2V0SW5kaWNlcyA9IGFjY2Vzc29yRGVmLnNwYXJzZS5pbmRpY2VzLmJ5dGVPZmZzZXQgfHwgMDtcclxuXHRcdFx0XHR2YXIgYnl0ZU9mZnNldFZhbHVlcyA9IGFjY2Vzc29yRGVmLnNwYXJzZS52YWx1ZXMuYnl0ZU9mZnNldCB8fCAwO1xyXG5cclxuXHRcdFx0XHR2YXIgc3BhcnNlSW5kaWNlcyA9IG5ldyBUeXBlZEFycmF5SW5kaWNlcyggYnVmZmVyVmlld3NbIDEgXSwgYnl0ZU9mZnNldEluZGljZXMsIGFjY2Vzc29yRGVmLnNwYXJzZS5jb3VudCAqIGl0ZW1TaXplSW5kaWNlcyApO1xyXG5cdFx0XHRcdHZhciBzcGFyc2VWYWx1ZXMgPSBuZXcgVHlwZWRBcnJheSggYnVmZmVyVmlld3NbIDIgXSwgYnl0ZU9mZnNldFZhbHVlcywgYWNjZXNzb3JEZWYuc3BhcnNlLmNvdW50ICogaXRlbVNpemUgKTtcclxuXHJcblx0XHRcdFx0aWYgKCBidWZmZXJWaWV3ICE9PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHRcdC8vIEF2b2lkIG1vZGlmeWluZyB0aGUgb3JpZ2luYWwgQXJyYXlCdWZmZXIsIGlmIHRoZSBidWZmZXJWaWV3IHdhc24ndCBpbml0aWFsaXplZCB3aXRoIHplcm9lcy5cclxuXHRcdFx0XHRcdGJ1ZmZlckF0dHJpYnV0ZSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoIGJ1ZmZlckF0dHJpYnV0ZS5hcnJheS5zbGljZSgpLCBidWZmZXJBdHRyaWJ1dGUuaXRlbVNpemUsIGJ1ZmZlckF0dHJpYnV0ZS5ub3JtYWxpemVkICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IHNwYXJzZUluZGljZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGluZGV4ID0gc3BhcnNlSW5kaWNlc1sgaSBdO1xyXG5cclxuXHRcdFx0XHRcdGJ1ZmZlckF0dHJpYnV0ZS5zZXRYKCBpbmRleCwgc3BhcnNlVmFsdWVzWyBpICogaXRlbVNpemUgXSApO1xyXG5cdFx0XHRcdFx0aWYgKCBpdGVtU2l6ZSA+PSAyICkgYnVmZmVyQXR0cmlidXRlLnNldFkoIGluZGV4LCBzcGFyc2VWYWx1ZXNbIGkgKiBpdGVtU2l6ZSArIDEgXSApO1xyXG5cdFx0XHRcdFx0aWYgKCBpdGVtU2l6ZSA+PSAzICkgYnVmZmVyQXR0cmlidXRlLnNldFooIGluZGV4LCBzcGFyc2VWYWx1ZXNbIGkgKiBpdGVtU2l6ZSArIDIgXSApO1xyXG5cdFx0XHRcdFx0aWYgKCBpdGVtU2l6ZSA+PSA0ICkgYnVmZmVyQXR0cmlidXRlLnNldFcoIGluZGV4LCBzcGFyc2VWYWx1ZXNbIGkgKiBpdGVtU2l6ZSArIDMgXSApO1xyXG5cdFx0XHRcdFx0aWYgKCBpdGVtU2l6ZSA+PSA1ICkgdGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5zdXBwb3J0ZWQgaXRlbVNpemUgaW4gc3BhcnNlIEJ1ZmZlckF0dHJpYnV0ZS4nICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBidWZmZXJBdHRyaWJ1dGU7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjdGV4dHVyZXNcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGV4dHVyZUluZGV4XHJcblx0ICogQHJldHVybiB7UHJvbWlzZTxUSFJFRS5UZXh0dXJlPn1cclxuXHQgKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkVGV4dHVyZSA9IGZ1bmN0aW9uICggdGV4dHVyZUluZGV4ICkge1xyXG5cclxuXHRcdHZhciBqc29uID0gdGhpcy5qc29uO1xyXG5cdFx0dmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblx0XHR2YXIgdGV4dHVyZURlZiA9IGpzb24udGV4dHVyZXNbIHRleHR1cmVJbmRleCBdO1xyXG5cdFx0dmFyIHNvdXJjZSA9IGpzb24uaW1hZ2VzWyB0ZXh0dXJlRGVmLnNvdXJjZSBdO1xyXG5cclxuXHRcdHZhciBsb2FkZXIgPSB0aGlzLnRleHR1cmVMb2FkZXI7XHJcblxyXG5cdFx0aWYgKCBzb3VyY2UudXJpICkge1xyXG5cclxuXHRcdFx0dmFyIGhhbmRsZXIgPSBvcHRpb25zLm1hbmFnZXIuZ2V0SGFuZGxlciggc291cmNlLnVyaSApO1xyXG5cdFx0XHRpZiAoIGhhbmRsZXIgIT09IG51bGwgKSBsb2FkZXIgPSBoYW5kbGVyO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5sb2FkVGV4dHVyZUltYWdlKCB0ZXh0dXJlSW5kZXgsIHNvdXJjZSwgbG9hZGVyICk7XHJcblxyXG5cdH07XHJcblxyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmxvYWRUZXh0dXJlSW1hZ2UgPSBmdW5jdGlvbiAoIHRleHR1cmVJbmRleCwgc291cmNlLCBsb2FkZXIgKSB7XHJcblxyXG5cdFx0dmFyIHBhcnNlciA9IHRoaXM7XHJcblx0XHR2YXIganNvbiA9IHRoaXMuanNvbjtcclxuXHRcdHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cclxuXHRcdHZhciB0ZXh0dXJlRGVmID0ganNvbi50ZXh0dXJlc1sgdGV4dHVyZUluZGV4IF07XHJcblxyXG5cdFx0dmFyIFVSTCA9IHNlbGYuVVJMIHx8IHNlbGYud2Via2l0VVJMO1xyXG5cclxuXHRcdHZhciBzb3VyY2VVUkkgPSBzb3VyY2UudXJpO1xyXG5cdFx0dmFyIGlzT2JqZWN0VVJMID0gZmFsc2U7XHJcblx0XHR2YXIgaGFzQWxwaGEgPSB0cnVlO1xyXG5cclxuXHRcdGlmICggc291cmNlLm1pbWVUeXBlID09PSAnaW1hZ2UvanBlZycgKSBoYXNBbHBoYSA9IGZhbHNlO1xyXG5cclxuXHRcdGlmICggc291cmNlLmJ1ZmZlclZpZXcgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdC8vIExvYWQgYmluYXJ5IGltYWdlIGRhdGEgZnJvbSBidWZmZXJWaWV3LCBpZiBwcm92aWRlZC5cclxuXHJcblx0XHRcdHNvdXJjZVVSSSA9IHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYnVmZmVyVmlldycsIHNvdXJjZS5idWZmZXJWaWV3ICkudGhlbiggZnVuY3Rpb24gKCBidWZmZXJWaWV3ICkge1xyXG5cclxuXHRcdFx0XHRpZiAoIHNvdXJjZS5taW1lVHlwZSA9PT0gJ2ltYWdlL3BuZycgKSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8gSW5zcGVjdCB0aGUgUE5HICdJSERSJyBjaHVuayB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgaW1hZ2UgY291bGQgaGF2ZSBhblxyXG5cdFx0XHRcdFx0Ly8gYWxwaGEgY2hhbm5lbC4gVGhpcyBjaGVjayBpcyBjb25zZXJ2YXRpdmUg4oCUIHRoZSBpbWFnZSBjb3VsZCBoYXZlIGFuIGFscGhhXHJcblx0XHRcdFx0XHQvLyBjaGFubmVsIHdpdGggYWxsIHZhbHVlcyA9PSAxLCBhbmQgdGhlIGluZGV4ZWQgdHlwZSAoY29sb3JUeXBlID09IDMpIG9ubHlcclxuXHRcdFx0XHRcdC8vIHNvbWV0aW1lcyBjb250YWlucyBhbHBoYS5cclxuXHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHQvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Qb3J0YWJsZV9OZXR3b3JrX0dyYXBoaWNzI0ZpbGVfaGVhZGVyXHJcblx0XHRcdFx0XHR2YXIgY29sb3JUeXBlID0gbmV3IERhdGFWaWV3KCBidWZmZXJWaWV3LCAyNSwgMSApLmdldFVpbnQ4KCAwLCBmYWxzZSApO1xyXG5cdFx0XHRcdFx0aGFzQWxwaGEgPSBjb2xvclR5cGUgPT09IDYgfHwgY29sb3JUeXBlID09PSA0IHx8IGNvbG9yVHlwZSA9PT0gMztcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpc09iamVjdFVSTCA9IHRydWU7XHJcblx0XHRcdFx0dmFyIGJsb2IgPSBuZXcgQmxvYiggWyBidWZmZXJWaWV3IF0sIHsgdHlwZTogc291cmNlLm1pbWVUeXBlIH0gKTtcclxuXHRcdFx0XHRzb3VyY2VVUkkgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKCBibG9iICk7XHJcblx0XHRcdFx0cmV0dXJuIHNvdXJjZVVSSTtcclxuXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKCBzb3VyY2UudXJpID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBJbWFnZSAnICsgdGV4dHVyZUluZGV4ICsgJyBpcyBtaXNzaW5nIFVSSSBhbmQgYnVmZmVyVmlldycgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggc291cmNlVVJJICkudGhlbiggZnVuY3Rpb24gKCBzb3VyY2VVUkkgKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uICggcmVzb2x2ZSwgcmVqZWN0ICkge1xyXG5cclxuXHRcdFx0XHR2YXIgb25Mb2FkID0gcmVzb2x2ZTtcclxuXHJcblx0XHRcdFx0aWYgKCBsb2FkZXIuaXNJbWFnZUJpdG1hcExvYWRlciA9PT0gdHJ1ZSApIHtcclxuXHJcblx0XHRcdFx0XHRvbkxvYWQgPSBmdW5jdGlvbiAoIGltYWdlQml0bWFwICkge1xyXG5cclxuXHRcdFx0XHRcdFx0cmVzb2x2ZSggbmV3IENhbnZhc1RleHR1cmUoIGltYWdlQml0bWFwICkgKTtcclxuXHJcblx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGxvYWRlci5sb2FkKCByZXNvbHZlVVJMKCBzb3VyY2VVUkksIG9wdGlvbnMucGF0aCApLCBvbkxvYWQsIHVuZGVmaW5lZCwgcmVqZWN0ICk7XHJcblxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0fSApLnRoZW4oIGZ1bmN0aW9uICggdGV4dHVyZSApIHtcclxuXHJcblx0XHRcdC8vIENsZWFuIHVwIHJlc291cmNlcyBhbmQgY29uZmlndXJlIFRleHR1cmUuXHJcblxyXG5cdFx0XHRpZiAoIGlzT2JqZWN0VVJMID09PSB0cnVlICkge1xyXG5cclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKCBzb3VyY2VVUkkgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRleHR1cmUuZmxpcFkgPSBmYWxzZTtcclxuXHJcblx0XHRcdGlmICggdGV4dHVyZURlZi5uYW1lICkgdGV4dHVyZS5uYW1lID0gdGV4dHVyZURlZi5uYW1lO1xyXG5cclxuXHRcdFx0Ly8gV2hlbiB0aGVyZSBpcyBkZWZpbml0ZWx5IG5vIGFscGhhIGNoYW5uZWwgaW4gdGhlIHRleHR1cmUsIHNldCBSR0JGb3JtYXQgdG8gc2F2ZSBzcGFjZS5cclxuXHRcdFx0aWYgKCAhIGhhc0FscGhhICkgdGV4dHVyZS5mb3JtYXQgPSBSR0JGb3JtYXQ7XHJcblxyXG5cdFx0XHR2YXIgc2FtcGxlcnMgPSBqc29uLnNhbXBsZXJzIHx8IHt9O1xyXG5cdFx0XHR2YXIgc2FtcGxlciA9IHNhbXBsZXJzWyB0ZXh0dXJlRGVmLnNhbXBsZXIgXSB8fCB7fTtcclxuXHJcblx0XHRcdHRleHR1cmUubWFnRmlsdGVyID0gV0VCR0xfRklMVEVSU1sgc2FtcGxlci5tYWdGaWx0ZXIgXSB8fCBMaW5lYXJGaWx0ZXI7XHJcblx0XHRcdHRleHR1cmUubWluRmlsdGVyID0gV0VCR0xfRklMVEVSU1sgc2FtcGxlci5taW5GaWx0ZXIgXSB8fCBMaW5lYXJNaXBtYXBMaW5lYXJGaWx0ZXI7XHJcblx0XHRcdHRleHR1cmUud3JhcFMgPSBXRUJHTF9XUkFQUElOR1NbIHNhbXBsZXIud3JhcFMgXSB8fCBSZXBlYXRXcmFwcGluZztcclxuXHRcdFx0dGV4dHVyZS53cmFwVCA9IFdFQkdMX1dSQVBQSU5HU1sgc2FtcGxlci53cmFwVCBdIHx8IFJlcGVhdFdyYXBwaW5nO1xyXG5cclxuXHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucy5zZXQoIHRleHR1cmUsIHtcclxuXHRcdFx0XHR0eXBlOiAndGV4dHVyZXMnLFxyXG5cdFx0XHRcdGluZGV4OiB0ZXh0dXJlSW5kZXhcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRleHR1cmU7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBBc3luY2hyb25vdXNseSBhc3NpZ25zIGEgdGV4dHVyZSB0byB0aGUgZ2l2ZW4gbWF0ZXJpYWwgcGFyYW1ldGVycy5cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gbWF0ZXJpYWxQYXJhbXNcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWFwTmFtZVxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBtYXBEZWZcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlfVxyXG5cdCAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmFzc2lnblRleHR1cmUgPSBmdW5jdGlvbiAoIG1hdGVyaWFsUGFyYW1zLCBtYXBOYW1lLCBtYXBEZWYgKSB7XHJcblxyXG5cdFx0dmFyIHBhcnNlciA9IHRoaXM7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ3RleHR1cmUnLCBtYXBEZWYuaW5kZXggKS50aGVuKCBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XHJcblxyXG5cdFx0XHQvLyBNYXRlcmlhbHMgc2FtcGxlIGFvTWFwIGZyb20gVVYgc2V0IDEgYW5kIG90aGVyIG1hcHMgZnJvbSBVViBzZXQgMCAtIHRoaXMgY2FuJ3QgYmUgY29uZmlndXJlZFxyXG5cdFx0XHQvLyBIb3dldmVyLCB3ZSB3aWxsIGNvcHkgVVYgc2V0IDAgdG8gVVYgc2V0IDEgb24gZGVtYW5kIGZvciBhb01hcFxyXG5cdFx0XHRpZiAoIG1hcERlZi50ZXhDb29yZCAhPT0gdW5kZWZpbmVkICYmIG1hcERlZi50ZXhDb29yZCAhPSAwICYmICEgKCBtYXBOYW1lID09PSAnYW9NYXAnICYmIG1hcERlZi50ZXhDb29yZCA9PSAxICkgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IEN1c3RvbSBVViBzZXQgJyArIG1hcERlZi50ZXhDb29yZCArICcgZm9yIHRleHR1cmUgJyArIG1hcE5hbWUgKyAnIG5vdCB5ZXQgc3VwcG9ydGVkLicgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggcGFyc2VyLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNIF0gKSB7XHJcblxyXG5cdFx0XHRcdHZhciB0cmFuc2Zvcm0gPSBtYXBEZWYuZXh0ZW5zaW9ucyAhPT0gdW5kZWZpbmVkID8gbWFwRGVmLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNIF0gOiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0XHRcdGlmICggdHJhbnNmb3JtICkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBnbHRmUmVmZXJlbmNlID0gcGFyc2VyLmFzc29jaWF0aW9ucy5nZXQoIHRleHR1cmUgKTtcclxuXHRcdFx0XHRcdHRleHR1cmUgPSBwYXJzZXIuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk0gXS5leHRlbmRUZXh0dXJlKCB0ZXh0dXJlLCB0cmFuc2Zvcm0gKTtcclxuXHRcdFx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCB0ZXh0dXJlLCBnbHRmUmVmZXJlbmNlICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1hdGVyaWFsUGFyYW1zWyBtYXBOYW1lIF0gPSB0ZXh0dXJlO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQXNzaWducyBmaW5hbCBtYXRlcmlhbCB0byBhIE1lc2gsIExpbmUsIG9yIFBvaW50cyBpbnN0YW5jZS4gVGhlIGluc3RhbmNlXHJcblx0ICogYWxyZWFkeSBoYXMgYSBtYXRlcmlhbCAoZ2VuZXJhdGVkIGZyb20gdGhlIGdsVEYgbWF0ZXJpYWwgb3B0aW9ucyBhbG9uZSlcclxuXHQgKiBidXQgcmV1c2Ugb2YgdGhlIHNhbWUgZ2xURiBtYXRlcmlhbCBtYXkgcmVxdWlyZSBtdWx0aXBsZSB0aHJlZWpzIG1hdGVyaWFsc1xyXG5cdCAqIHRvIGFjY29tbW9kYXRlIGRpZmZlcmVudCBwcmltaXRpdmUgdHlwZXMsIGRlZmluZXMsIGV0Yy4gTmV3IG1hdGVyaWFscyB3aWxsXHJcblx0ICogYmUgY3JlYXRlZCBpZiBuZWNlc3NhcnksIGFuZCByZXVzZWQgZnJvbSBhIGNhY2hlLlxyXG5cdCAqIEBwYXJhbSAge09iamVjdDNEfSBtZXNoIE1lc2gsIExpbmUsIG9yIFBvaW50cyBpbnN0YW5jZS5cclxuXHQgKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5hc3NpZ25GaW5hbE1hdGVyaWFsID0gZnVuY3Rpb24gKCBtZXNoICkge1xyXG5cclxuXHRcdHZhciBnZW9tZXRyeSA9IG1lc2guZ2VvbWV0cnk7XHJcblx0XHR2YXIgbWF0ZXJpYWwgPSBtZXNoLm1hdGVyaWFsO1xyXG5cclxuXHRcdHZhciB1c2VWZXJ0ZXhUYW5nZW50cyA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMudGFuZ2VudCAhPT0gdW5kZWZpbmVkO1xyXG5cdFx0dmFyIHVzZVZlcnRleENvbG9ycyA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMuY29sb3IgIT09IHVuZGVmaW5lZDtcclxuXHRcdHZhciB1c2VGbGF0U2hhZGluZyA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMubm9ybWFsID09PSB1bmRlZmluZWQ7XHJcblx0XHR2YXIgdXNlU2tpbm5pbmcgPSBtZXNoLmlzU2tpbm5lZE1lc2ggPT09IHRydWU7XHJcblx0XHR2YXIgdXNlTW9ycGhUYXJnZXRzID0gT2JqZWN0LmtleXMoIGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcyApLmxlbmd0aCA+IDA7XHJcblx0XHR2YXIgdXNlTW9ycGhOb3JtYWxzID0gdXNlTW9ycGhUYXJnZXRzICYmIGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcy5ub3JtYWwgIT09IHVuZGVmaW5lZDtcclxuXHJcblx0XHRpZiAoIG1lc2guaXNQb2ludHMgKSB7XHJcblxyXG5cdFx0XHR2YXIgY2FjaGVLZXkgPSAnUG9pbnRzTWF0ZXJpYWw6JyArIG1hdGVyaWFsLnV1aWQ7XHJcblxyXG5cdFx0XHR2YXIgcG9pbnRzTWF0ZXJpYWwgPSB0aGlzLmNhY2hlLmdldCggY2FjaGVLZXkgKTtcclxuXHJcblx0XHRcdGlmICggISBwb2ludHNNYXRlcmlhbCApIHtcclxuXHJcblx0XHRcdFx0cG9pbnRzTWF0ZXJpYWwgPSBuZXcgUG9pbnRzTWF0ZXJpYWwoKTtcclxuXHRcdFx0XHRNYXRlcmlhbC5wcm90b3R5cGUuY29weS5jYWxsKCBwb2ludHNNYXRlcmlhbCwgbWF0ZXJpYWwgKTtcclxuXHRcdFx0XHRwb2ludHNNYXRlcmlhbC5jb2xvci5jb3B5KCBtYXRlcmlhbC5jb2xvciApO1xyXG5cdFx0XHRcdHBvaW50c01hdGVyaWFsLm1hcCA9IG1hdGVyaWFsLm1hcDtcclxuXHRcdFx0XHRwb2ludHNNYXRlcmlhbC5zaXplQXR0ZW51YXRpb24gPSBmYWxzZTsgLy8gZ2xURiBzcGVjIHNheXMgcG9pbnRzIHNob3VsZCBiZSAxcHhcclxuXHJcblx0XHRcdFx0dGhpcy5jYWNoZS5hZGQoIGNhY2hlS2V5LCBwb2ludHNNYXRlcmlhbCApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWF0ZXJpYWwgPSBwb2ludHNNYXRlcmlhbDtcclxuXHJcblx0XHR9IGVsc2UgaWYgKCBtZXNoLmlzTGluZSApIHtcclxuXHJcblx0XHRcdHZhciBjYWNoZUtleSA9ICdMaW5lQmFzaWNNYXRlcmlhbDonICsgbWF0ZXJpYWwudXVpZDtcclxuXHJcblx0XHRcdHZhciBsaW5lTWF0ZXJpYWwgPSB0aGlzLmNhY2hlLmdldCggY2FjaGVLZXkgKTtcclxuXHJcblx0XHRcdGlmICggISBsaW5lTWF0ZXJpYWwgKSB7XHJcblxyXG5cdFx0XHRcdGxpbmVNYXRlcmlhbCA9IG5ldyBMaW5lQmFzaWNNYXRlcmlhbCgpO1xyXG5cdFx0XHRcdE1hdGVyaWFsLnByb3RvdHlwZS5jb3B5LmNhbGwoIGxpbmVNYXRlcmlhbCwgbWF0ZXJpYWwgKTtcclxuXHRcdFx0XHRsaW5lTWF0ZXJpYWwuY29sb3IuY29weSggbWF0ZXJpYWwuY29sb3IgKTtcclxuXHJcblx0XHRcdFx0dGhpcy5jYWNoZS5hZGQoIGNhY2hlS2V5LCBsaW5lTWF0ZXJpYWwgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1hdGVyaWFsID0gbGluZU1hdGVyaWFsO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBDbG9uZSB0aGUgbWF0ZXJpYWwgaWYgaXQgd2lsbCBiZSBtb2RpZmllZFxyXG5cdFx0aWYgKCB1c2VWZXJ0ZXhUYW5nZW50cyB8fCB1c2VWZXJ0ZXhDb2xvcnMgfHwgdXNlRmxhdFNoYWRpbmcgfHwgdXNlU2tpbm5pbmcgfHwgdXNlTW9ycGhUYXJnZXRzICkge1xyXG5cclxuXHRcdFx0dmFyIGNhY2hlS2V5ID0gJ0Nsb25lZE1hdGVyaWFsOicgKyBtYXRlcmlhbC51dWlkICsgJzonO1xyXG5cclxuXHRcdFx0aWYgKCBtYXRlcmlhbC5pc0dMVEZTcGVjdWxhckdsb3NzaW5lc3NNYXRlcmlhbCApIGNhY2hlS2V5ICs9ICdzcGVjdWxhci1nbG9zc2luZXNzOic7XHJcblx0XHRcdGlmICggdXNlU2tpbm5pbmcgKSBjYWNoZUtleSArPSAnc2tpbm5pbmc6JztcclxuXHRcdFx0aWYgKCB1c2VWZXJ0ZXhUYW5nZW50cyApIGNhY2hlS2V5ICs9ICd2ZXJ0ZXgtdGFuZ2VudHM6JztcclxuXHRcdFx0aWYgKCB1c2VWZXJ0ZXhDb2xvcnMgKSBjYWNoZUtleSArPSAndmVydGV4LWNvbG9yczonO1xyXG5cdFx0XHRpZiAoIHVzZUZsYXRTaGFkaW5nICkgY2FjaGVLZXkgKz0gJ2ZsYXQtc2hhZGluZzonO1xyXG5cdFx0XHRpZiAoIHVzZU1vcnBoVGFyZ2V0cyApIGNhY2hlS2V5ICs9ICdtb3JwaC10YXJnZXRzOic7XHJcblx0XHRcdGlmICggdXNlTW9ycGhOb3JtYWxzICkgY2FjaGVLZXkgKz0gJ21vcnBoLW5vcm1hbHM6JztcclxuXHJcblx0XHRcdHZhciBjYWNoZWRNYXRlcmlhbCA9IHRoaXMuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xyXG5cclxuXHRcdFx0aWYgKCAhIGNhY2hlZE1hdGVyaWFsICkge1xyXG5cclxuXHRcdFx0XHRjYWNoZWRNYXRlcmlhbCA9IG1hdGVyaWFsLmNsb25lKCk7XHJcblxyXG5cdFx0XHRcdGlmICggdXNlU2tpbm5pbmcgKSBjYWNoZWRNYXRlcmlhbC5za2lubmluZyA9IHRydWU7XHJcblx0XHRcdFx0aWYgKCB1c2VWZXJ0ZXhDb2xvcnMgKSBjYWNoZWRNYXRlcmlhbC52ZXJ0ZXhDb2xvcnMgPSB0cnVlO1xyXG5cdFx0XHRcdGlmICggdXNlRmxhdFNoYWRpbmcgKSBjYWNoZWRNYXRlcmlhbC5mbGF0U2hhZGluZyA9IHRydWU7XHJcblx0XHRcdFx0aWYgKCB1c2VNb3JwaFRhcmdldHMgKSBjYWNoZWRNYXRlcmlhbC5tb3JwaFRhcmdldHMgPSB0cnVlO1xyXG5cdFx0XHRcdGlmICggdXNlTW9ycGhOb3JtYWxzICkgY2FjaGVkTWF0ZXJpYWwubW9ycGhOb3JtYWxzID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0aWYgKCB1c2VWZXJ0ZXhUYW5nZW50cyApIHtcclxuXHJcblx0XHRcdFx0XHRjYWNoZWRNYXRlcmlhbC52ZXJ0ZXhUYW5nZW50cyA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTE0MzgjaXNzdWVjb21tZW50LTUwNzAwMzk5NVxyXG5cdFx0XHRcdFx0aWYgKCBjYWNoZWRNYXRlcmlhbC5ub3JtYWxTY2FsZSApIGNhY2hlZE1hdGVyaWFsLm5vcm1hbFNjYWxlLnkgKj0gLSAxO1xyXG5cdFx0XHRcdFx0aWYgKCBjYWNoZWRNYXRlcmlhbC5jbGVhcmNvYXROb3JtYWxTY2FsZSApIGNhY2hlZE1hdGVyaWFsLmNsZWFyY29hdE5vcm1hbFNjYWxlLnkgKj0gLSAxO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuY2FjaGUuYWRkKCBjYWNoZUtleSwgY2FjaGVkTWF0ZXJpYWwgKTtcclxuXHJcblx0XHRcdFx0dGhpcy5hc3NvY2lhdGlvbnMuc2V0KCBjYWNoZWRNYXRlcmlhbCwgdGhpcy5hc3NvY2lhdGlvbnMuZ2V0KCBtYXRlcmlhbCApICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYXRlcmlhbCA9IGNhY2hlZE1hdGVyaWFsO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyB3b3JrYXJvdW5kcyBmb3IgbWVzaCBhbmQgZ2VvbWV0cnlcclxuXHJcblx0XHRpZiAoIG1hdGVyaWFsLmFvTWFwICYmIGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYyID09PSB1bmRlZmluZWQgJiYgZ2VvbWV0cnkuYXR0cmlidXRlcy51diAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0Z2VvbWV0cnkuc2V0QXR0cmlidXRlKCAndXYyJywgZ2VvbWV0cnkuYXR0cmlidXRlcy51diApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRtZXNoLm1hdGVyaWFsID0gbWF0ZXJpYWw7XHJcblxyXG5cdH07XHJcblxyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmdldE1hdGVyaWFsVHlwZSA9IGZ1bmN0aW9uICggLyogbWF0ZXJpYWxJbmRleCAqLyApIHtcclxuXHJcblx0XHRyZXR1cm4gTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjbWF0ZXJpYWxzXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IG1hdGVyaWFsSW5kZXhcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE1hdGVyaWFsPn1cclxuXHQgKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkTWF0ZXJpYWwgPSBmdW5jdGlvbiAoIG1hdGVyaWFsSW5kZXggKSB7XHJcblxyXG5cdFx0dmFyIHBhcnNlciA9IHRoaXM7XHJcblx0XHR2YXIganNvbiA9IHRoaXMuanNvbjtcclxuXHRcdHZhciBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xyXG5cdFx0dmFyIG1hdGVyaWFsRGVmID0ganNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcclxuXHJcblx0XHR2YXIgbWF0ZXJpYWxUeXBlO1xyXG5cdFx0dmFyIG1hdGVyaWFsUGFyYW1zID0ge307XHJcblx0XHR2YXIgbWF0ZXJpYWxFeHRlbnNpb25zID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCB7fTtcclxuXHJcblx0XHR2YXIgcGVuZGluZyA9IFtdO1xyXG5cclxuXHRcdGlmICggbWF0ZXJpYWxFeHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1MgXSApIHtcclxuXHJcblx0XHRcdHZhciBzZ0V4dGVuc2lvbiA9IGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19QQlJfU1BFQ1VMQVJfR0xPU1NJTkVTUyBdO1xyXG5cdFx0XHRtYXRlcmlhbFR5cGUgPSBzZ0V4dGVuc2lvbi5nZXRNYXRlcmlhbFR5cGUoKTtcclxuXHRcdFx0cGVuZGluZy5wdXNoKCBzZ0V4dGVuc2lvbi5leHRlbmRQYXJhbXMoIG1hdGVyaWFsUGFyYW1zLCBtYXRlcmlhbERlZiwgcGFyc2VyICkgKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKCBtYXRlcmlhbEV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19VTkxJVCBdICkge1xyXG5cclxuXHRcdFx0dmFyIGttdUV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19VTkxJVCBdO1xyXG5cdFx0XHRtYXRlcmlhbFR5cGUgPSBrbXVFeHRlbnNpb24uZ2V0TWF0ZXJpYWxUeXBlKCk7XHJcblx0XHRcdHBlbmRpbmcucHVzaCgga211RXh0ZW5zaW9uLmV4dGVuZFBhcmFtcyggbWF0ZXJpYWxQYXJhbXMsIG1hdGVyaWFsRGVmLCBwYXJzZXIgKSApO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHQvLyBTcGVjaWZpY2F0aW9uOlxyXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjbWV0YWxsaWMtcm91Z2huZXNzLW1hdGVyaWFsXHJcblxyXG5cdFx0XHR2YXIgbWV0YWxsaWNSb3VnaG5lc3MgPSBtYXRlcmlhbERlZi5wYnJNZXRhbGxpY1JvdWdobmVzcyB8fCB7fTtcclxuXHJcblx0XHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yID0gbmV3IENvbG9yKCAxLjAsIDEuMCwgMS4wICk7XHJcblx0XHRcdG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSAxLjA7XHJcblxyXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvciApICkge1xyXG5cclxuXHRcdFx0XHR2YXIgYXJyYXkgPSBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3I7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yLmZyb21BcnJheSggYXJyYXkgKTtcclxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gYXJyYXlbIDMgXTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ21hcCcsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgKSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMubWV0YWxuZXNzID0gbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNGYWN0b3IgIT09IHVuZGVmaW5lZCA/IG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljRmFjdG9yIDogMS4wO1xyXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5yb3VnaG5lc3MgPSBtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3NGYWN0b3IgIT09IHVuZGVmaW5lZCA/IG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzc0ZhY3RvciA6IDEuMDtcclxuXHJcblx0XHRcdGlmICggbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbWV0YWxuZXNzTWFwJywgbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlICkgKTtcclxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3JvdWdobmVzc01hcCcsIG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSApICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYXRlcmlhbFR5cGUgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZXh0LmdldE1hdGVyaWFsVHlwZSAmJiBleHQuZ2V0TWF0ZXJpYWxUeXBlKCBtYXRlcmlhbEluZGV4ICk7XHJcblxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRwZW5kaW5nLnB1c2goIFByb21pc2UuYWxsKCB0aGlzLl9pbnZva2VBbGwoIGZ1bmN0aW9uICggZXh0ICkge1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZXh0LmV4dGVuZE1hdGVyaWFsUGFyYW1zICYmIGV4dC5leHRlbmRNYXRlcmlhbFBhcmFtcyggbWF0ZXJpYWxJbmRleCwgbWF0ZXJpYWxQYXJhbXMgKTtcclxuXHJcblx0XHRcdH0gKSApICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggbWF0ZXJpYWxEZWYuZG91YmxlU2lkZWQgPT09IHRydWUgKSB7XHJcblxyXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5zaWRlID0gRG91YmxlU2lkZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGFscGhhTW9kZSA9IG1hdGVyaWFsRGVmLmFscGhhTW9kZSB8fCBBTFBIQV9NT0RFUy5PUEFRVUU7XHJcblxyXG5cdFx0aWYgKCBhbHBoYU1vZGUgPT09IEFMUEhBX01PREVTLkJMRU5EICkge1xyXG5cclxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMudHJhbnNwYXJlbnQgPSB0cnVlO1xyXG5cclxuXHRcdFx0Ly8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8xNzcwNlxyXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5kZXB0aFdyaXRlID0gZmFsc2U7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdG1hdGVyaWFsUGFyYW1zLnRyYW5zcGFyZW50ID0gZmFsc2U7XHJcblxyXG5cdFx0XHRpZiAoIGFscGhhTW9kZSA9PT0gQUxQSEFfTU9ERVMuTUFTSyApIHtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuYWxwaGFUZXN0ID0gbWF0ZXJpYWxEZWYuYWxwaGFDdXRvZmYgIT09IHVuZGVmaW5lZCA/IG1hdGVyaWFsRGVmLmFscGhhQ3V0b2ZmIDogMC41O1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUgIT09IHVuZGVmaW5lZCAmJiBtYXRlcmlhbFR5cGUgIT09IE1lc2hCYXNpY01hdGVyaWFsICkge1xyXG5cclxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdub3JtYWxNYXAnLCBtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlICkgKTtcclxuXHJcblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzExNDM4I2lzc3VlY29tbWVudC01MDcwMDM5OTVcclxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMubm9ybWFsU2NhbGUgPSBuZXcgVmVjdG9yMiggMSwgLSAxICk7XHJcblxyXG5cdFx0XHRpZiAoIG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUuc2NhbGUgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMubm9ybWFsU2NhbGUuc2V0KCBtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlLnNjYWxlLCAtIG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUuc2NhbGUgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5vY2NsdXNpb25UZXh0dXJlICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxUeXBlICE9PSBNZXNoQmFzaWNNYXRlcmlhbCApIHtcclxuXHJcblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnYW9NYXAnLCBtYXRlcmlhbERlZi5vY2NsdXNpb25UZXh0dXJlICkgKTtcclxuXHJcblx0XHRcdGlmICggbWF0ZXJpYWxEZWYub2NjbHVzaW9uVGV4dHVyZS5zdHJlbmd0aCAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5hb01hcEludGVuc2l0eSA9IG1hdGVyaWFsRGVmLm9jY2x1c2lvblRleHR1cmUuc3RyZW5ndGg7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggbWF0ZXJpYWxEZWYuZW1pc3NpdmVGYWN0b3IgIT09IHVuZGVmaW5lZCAmJiBtYXRlcmlhbFR5cGUgIT09IE1lc2hCYXNpY01hdGVyaWFsICkge1xyXG5cclxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuZW1pc3NpdmUgPSBuZXcgQ29sb3IoKS5mcm9tQXJyYXkoIG1hdGVyaWFsRGVmLmVtaXNzaXZlRmFjdG9yICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggbWF0ZXJpYWxEZWYuZW1pc3NpdmVUZXh0dXJlICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxUeXBlICE9PSBNZXNoQmFzaWNNYXRlcmlhbCApIHtcclxuXHJcblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnZW1pc3NpdmVNYXAnLCBtYXRlcmlhbERlZi5lbWlzc2l2ZVRleHR1cmUgKSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKS50aGVuKCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHR2YXIgbWF0ZXJpYWw7XHJcblxyXG5cdFx0XHRpZiAoIG1hdGVyaWFsVHlwZSA9PT0gR0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWwgKSB7XHJcblxyXG5cdFx0XHRcdG1hdGVyaWFsID0gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTIF0uY3JlYXRlTWF0ZXJpYWwoIG1hdGVyaWFsUGFyYW1zICk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRtYXRlcmlhbCA9IG5ldyBtYXRlcmlhbFR5cGUoIG1hdGVyaWFsUGFyYW1zICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIG1hdGVyaWFsRGVmLm5hbWUgKSBtYXRlcmlhbC5uYW1lID0gbWF0ZXJpYWxEZWYubmFtZTtcclxuXHJcblx0XHRcdC8vIGJhc2VDb2xvclRleHR1cmUsIGVtaXNzaXZlVGV4dHVyZSwgYW5kIHNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUgdXNlIHNSR0IgZW5jb2RpbmcuXHJcblx0XHRcdGlmICggbWF0ZXJpYWwubWFwICkgbWF0ZXJpYWwubWFwLmVuY29kaW5nID0gc1JHQkVuY29kaW5nO1xyXG5cdFx0XHRpZiAoIG1hdGVyaWFsLmVtaXNzaXZlTWFwICkgbWF0ZXJpYWwuZW1pc3NpdmVNYXAuZW5jb2RpbmcgPSBzUkdCRW5jb2Rpbmc7XHJcblxyXG5cdFx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBtYXRlcmlhbCwgbWF0ZXJpYWxEZWYgKTtcclxuXHJcblx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCBtYXRlcmlhbCwgeyB0eXBlOiAnbWF0ZXJpYWxzJywgaW5kZXg6IG1hdGVyaWFsSW5kZXggfSApO1xyXG5cclxuXHRcdFx0aWYgKCBtYXRlcmlhbERlZi5leHRlbnNpb25zICkgYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBleHRlbnNpb25zLCBtYXRlcmlhbCwgbWF0ZXJpYWxEZWYgKTtcclxuXHJcblx0XHRcdHJldHVybiBtYXRlcmlhbDtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKiBXaGVuIE9iamVjdDNEIGluc3RhbmNlcyBhcmUgdGFyZ2V0ZWQgYnkgYW5pbWF0aW9uLCB0aGV5IG5lZWQgdW5pcXVlIG5hbWVzLiAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmNyZWF0ZVVuaXF1ZU5hbWUgPSBmdW5jdGlvbiAoIG9yaWdpbmFsTmFtZSApIHtcclxuXHJcblx0XHR2YXIgc2FuaXRpemVkTmFtZSA9IFByb3BlcnR5QmluZGluZy5zYW5pdGl6ZU5vZGVOYW1lKCBvcmlnaW5hbE5hbWUgfHwgJycgKTtcclxuXHJcblx0XHR2YXIgbmFtZSA9IHNhbml0aXplZE5hbWU7XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAxOyB0aGlzLm5vZGVOYW1lc1VzZWRbIG5hbWUgXTsgKysgaSApIHtcclxuXHJcblx0XHRcdG5hbWUgPSBzYW5pdGl6ZWROYW1lICsgJ18nICsgaTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ub2RlTmFtZXNVc2VkWyBuYW1lIF0gPSB0cnVlO1xyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge0J1ZmZlckdlb21ldHJ5fSBnZW9tZXRyeVxyXG5cdCAqIEBwYXJhbSB7R0xURi5QcmltaXRpdmV9IHByaW1pdGl2ZURlZlxyXG5cdCAqIEBwYXJhbSB7R0xURlBhcnNlcn0gcGFyc2VyXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gY29tcHV0ZUJvdW5kcyggZ2VvbWV0cnksIHByaW1pdGl2ZURlZiwgcGFyc2VyICkge1xyXG5cclxuXHRcdHZhciBhdHRyaWJ1dGVzID0gcHJpbWl0aXZlRGVmLmF0dHJpYnV0ZXM7XHJcblxyXG5cdFx0dmFyIGJveCA9IG5ldyBCb3gzKCk7XHJcblxyXG5cdFx0aWYgKCBhdHRyaWJ1dGVzLlBPU0lUSU9OICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHR2YXIgYWNjZXNzb3IgPSBwYXJzZXIuanNvbi5hY2Nlc3NvcnNbIGF0dHJpYnV0ZXMuUE9TSVRJT04gXTtcclxuXHJcblx0XHRcdHZhciBtaW4gPSBhY2Nlc3Nvci5taW47XHJcblx0XHRcdHZhciBtYXggPSBhY2Nlc3Nvci5tYXg7XHJcblxyXG5cdFx0XHQvLyBnbFRGIHJlcXVpcmVzICdtaW4nIGFuZCAnbWF4JywgYnV0IFZSTSAod2hpY2ggZXh0ZW5kcyBnbFRGKSBjdXJyZW50bHkgaWdub3JlcyB0aGF0IHJlcXVpcmVtZW50LlxyXG5cclxuXHRcdFx0aWYgKCBtaW4gIT09IHVuZGVmaW5lZCAmJiBtYXggIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0Ym94LnNldChcclxuXHRcdFx0XHRcdG5ldyBWZWN0b3IzKCBtaW5bIDAgXSwgbWluWyAxIF0sIG1pblsgMiBdICksXHJcblx0XHRcdFx0XHRuZXcgVmVjdG9yMyggbWF4WyAwIF0sIG1heFsgMSBdLCBtYXhbIDIgXSApICk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBNaXNzaW5nIG1pbi9tYXggcHJvcGVydGllcyBmb3IgYWNjZXNzb3IgUE9TSVRJT04uJyApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHRhcmdldHMgPSBwcmltaXRpdmVEZWYudGFyZ2V0cztcclxuXHJcblx0XHRpZiAoIHRhcmdldHMgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdHZhciBtYXhEaXNwbGFjZW1lbnQgPSBuZXcgVmVjdG9yMygpO1xyXG5cdFx0XHR2YXIgdmVjdG9yID0gbmV3IFZlY3RvcjMoKTtcclxuXHJcblx0XHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSB0YXJnZXRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gdGFyZ2V0c1sgaSBdO1xyXG5cclxuXHRcdFx0XHRpZiAoIHRhcmdldC5QT1NJVElPTiAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBhY2Nlc3NvciA9IHBhcnNlci5qc29uLmFjY2Vzc29yc1sgdGFyZ2V0LlBPU0lUSU9OIF07XHJcblx0XHRcdFx0XHR2YXIgbWluID0gYWNjZXNzb3IubWluO1xyXG5cdFx0XHRcdFx0dmFyIG1heCA9IGFjY2Vzc29yLm1heDtcclxuXHJcblx0XHRcdFx0XHQvLyBnbFRGIHJlcXVpcmVzICdtaW4nIGFuZCAnbWF4JywgYnV0IFZSTSAod2hpY2ggZXh0ZW5kcyBnbFRGKSBjdXJyZW50bHkgaWdub3JlcyB0aGF0IHJlcXVpcmVtZW50LlxyXG5cclxuXHRcdFx0XHRcdGlmICggbWluICE9PSB1bmRlZmluZWQgJiYgbWF4ICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyB3ZSBuZWVkIHRvIGdldCBtYXggb2YgYWJzb2x1dGUgY29tcG9uZW50cyBiZWNhdXNlIHRhcmdldCB3ZWlnaHQgaXMgWy0xLDFdXHJcblx0XHRcdFx0XHRcdHZlY3Rvci5zZXRYKCBNYXRoLm1heCggTWF0aC5hYnMoIG1pblsgMCBdICksIE1hdGguYWJzKCBtYXhbIDAgXSApICkgKTtcclxuXHRcdFx0XHRcdFx0dmVjdG9yLnNldFkoIE1hdGgubWF4KCBNYXRoLmFicyggbWluWyAxIF0gKSwgTWF0aC5hYnMoIG1heFsgMSBdICkgKSApO1xyXG5cdFx0XHRcdFx0XHR2ZWN0b3Iuc2V0WiggTWF0aC5tYXgoIE1hdGguYWJzKCBtaW5bIDIgXSApLCBNYXRoLmFicyggbWF4WyAyIF0gKSApICk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBOb3RlOiB0aGlzIGFzc3VtZXMgdGhhdCB0aGUgc3VtIG9mIGFsbCB3ZWlnaHRzIGlzIGF0IG1vc3QgMS4gVGhpcyBpc24ndCBxdWl0ZSBjb3JyZWN0IC0gaXQncyBtb3JlIGNvbnNlcnZhdGl2ZVxyXG5cdFx0XHRcdFx0XHQvLyB0byBhc3N1bWUgdGhhdCBlYWNoIHRhcmdldCBjYW4gaGF2ZSBhIG1heCB3ZWlnaHQgb2YgMS4gSG93ZXZlciwgZm9yIHNvbWUgdXNlIGNhc2VzIC0gbm90YWJseSwgd2hlbiBtb3JwaCB0YXJnZXRzXHJcblx0XHRcdFx0XHRcdC8vIGFyZSB1c2VkIHRvIGltcGxlbWVudCBrZXktZnJhbWUgYW5pbWF0aW9ucyBhbmQgYXMgc3VjaCBvbmx5IHR3byBhcmUgYWN0aXZlIGF0IGEgdGltZSAtIHRoaXMgcmVzdWx0cyBpbiB2ZXJ5IGxhcmdlXHJcblx0XHRcdFx0XHRcdC8vIGJveGVzLiBTbyBmb3Igbm93IHdlIG1ha2UgYSBib3ggdGhhdCdzIHNvbWV0aW1lcyBhIHRvdWNoIHRvbyBzbWFsbCBidXQgaXMgaG9wZWZ1bGx5IG1vc3RseSBvZiByZWFzb25hYmxlIHNpemUuXHJcblx0XHRcdFx0XHRcdG1heERpc3BsYWNlbWVudC5tYXgoIHZlY3RvciApO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBNaXNzaW5nIG1pbi9tYXggcHJvcGVydGllcyBmb3IgYWNjZXNzb3IgUE9TSVRJT04uJyApO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gQXMgcGVyIGNvbW1lbnQgYWJvdmUgdGhpcyBib3ggaXNuJ3QgY29uc2VydmF0aXZlLCBidXQgaGFzIGEgcmVhc29uYWJsZSBzaXplIGZvciBhIHZlcnkgbGFyZ2UgbnVtYmVyIG9mIG1vcnBoIHRhcmdldHMuXHJcblx0XHRcdGJveC5leHBhbmRCeVZlY3RvciggbWF4RGlzcGxhY2VtZW50ICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGdlb21ldHJ5LmJvdW5kaW5nQm94ID0gYm94O1xyXG5cclxuXHRcdHZhciBzcGhlcmUgPSBuZXcgU3BoZXJlKCk7XHJcblxyXG5cdFx0Ym94LmdldENlbnRlciggc3BoZXJlLmNlbnRlciApO1xyXG5cdFx0c3BoZXJlLnJhZGl1cyA9IGJveC5taW4uZGlzdGFuY2VUbyggYm94Lm1heCApIC8gMjtcclxuXHJcblx0XHRnZW9tZXRyeS5ib3VuZGluZ1NwaGVyZSA9IHNwaGVyZTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge0J1ZmZlckdlb21ldHJ5fSBnZW9tZXRyeVxyXG5cdCAqIEBwYXJhbSB7R0xURi5QcmltaXRpdmV9IHByaW1pdGl2ZURlZlxyXG5cdCAqIEBwYXJhbSB7R0xURlBhcnNlcn0gcGFyc2VyXHJcblx0ICogQHJldHVybiB7UHJvbWlzZTxCdWZmZXJHZW9tZXRyeT59XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gYWRkUHJpbWl0aXZlQXR0cmlidXRlcyggZ2VvbWV0cnksIHByaW1pdGl2ZURlZiwgcGFyc2VyICkge1xyXG5cclxuXHRcdHZhciBhdHRyaWJ1dGVzID0gcHJpbWl0aXZlRGVmLmF0dHJpYnV0ZXM7XHJcblxyXG5cdFx0dmFyIHBlbmRpbmcgPSBbXTtcclxuXHJcblx0XHRmdW5jdGlvbiBhc3NpZ25BdHRyaWJ1dGVBY2Nlc3NvciggYWNjZXNzb3JJbmRleCwgYXR0cmlidXRlTmFtZSApIHtcclxuXHJcblx0XHRcdHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgYWNjZXNzb3JJbmRleCApXHJcblx0XHRcdFx0LnRoZW4oIGZ1bmN0aW9uICggYWNjZXNzb3IgKSB7XHJcblxyXG5cdFx0XHRcdFx0Z2VvbWV0cnkuc2V0QXR0cmlidXRlKCBhdHRyaWJ1dGVOYW1lLCBhY2Nlc3NvciApO1xyXG5cclxuXHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIHZhciBnbHRmQXR0cmlidXRlTmFtZSBpbiBhdHRyaWJ1dGVzICkge1xyXG5cclxuXHRcdFx0dmFyIHRocmVlQXR0cmlidXRlTmFtZSA9IEFUVFJJQlVURVNbIGdsdGZBdHRyaWJ1dGVOYW1lIF0gfHwgZ2x0ZkF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdC8vIFNraXAgYXR0cmlidXRlcyBhbHJlYWR5IHByb3ZpZGVkIGJ5IGUuZy4gRHJhY28gZXh0ZW5zaW9uLlxyXG5cdFx0XHRpZiAoIHRocmVlQXR0cmlidXRlTmFtZSBpbiBnZW9tZXRyeS5hdHRyaWJ1dGVzICkgY29udGludWU7XHJcblxyXG5cdFx0XHRwZW5kaW5nLnB1c2goIGFzc2lnbkF0dHJpYnV0ZUFjY2Vzc29yKCBhdHRyaWJ1dGVzWyBnbHRmQXR0cmlidXRlTmFtZSBdLCB0aHJlZUF0dHJpYnV0ZU5hbWUgKSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHByaW1pdGl2ZURlZi5pbmRpY2VzICE9PSB1bmRlZmluZWQgJiYgISBnZW9tZXRyeS5pbmRleCApIHtcclxuXHJcblx0XHRcdHZhciBhY2Nlc3NvciA9IHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCBwcmltaXRpdmVEZWYuaW5kaWNlcyApLnRoZW4oIGZ1bmN0aW9uICggYWNjZXNzb3IgKSB7XHJcblxyXG5cdFx0XHRcdGdlb21ldHJ5LnNldEluZGV4KCBhY2Nlc3NvciApO1xyXG5cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0cGVuZGluZy5wdXNoKCBhY2Nlc3NvciApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBnZW9tZXRyeSwgcHJpbWl0aXZlRGVmICk7XHJcblxyXG5cdFx0Y29tcHV0ZUJvdW5kcyggZ2VvbWV0cnksIHByaW1pdGl2ZURlZiwgcGFyc2VyICk7XHJcblxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICkudGhlbiggZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0cmV0dXJuIHByaW1pdGl2ZURlZi50YXJnZXRzICE9PSB1bmRlZmluZWRcclxuXHRcdFx0XHQ/IGFkZE1vcnBoVGFyZ2V0cyggZ2VvbWV0cnksIHByaW1pdGl2ZURlZi50YXJnZXRzLCBwYXJzZXIgKVxyXG5cdFx0XHRcdDogZ2VvbWV0cnk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7QnVmZmVyR2VvbWV0cnl9IGdlb21ldHJ5XHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGRyYXdNb2RlXHJcblx0ICogQHJldHVybiB7QnVmZmVyR2VvbWV0cnl9XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gdG9UcmlhbmdsZXNEcmF3TW9kZSggZ2VvbWV0cnksIGRyYXdNb2RlICkge1xyXG5cclxuXHRcdHZhciBpbmRleCA9IGdlb21ldHJ5LmdldEluZGV4KCk7XHJcblxyXG5cdFx0Ly8gZ2VuZXJhdGUgaW5kZXggaWYgbm90IHByZXNlbnRcclxuXHJcblx0XHRpZiAoIGluZGV4ID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0dmFyIGluZGljZXMgPSBbXTtcclxuXHJcblx0XHRcdHZhciBwb3NpdGlvbiA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSggJ3Bvc2l0aW9uJyApO1xyXG5cclxuXHRcdFx0aWYgKCBwb3NpdGlvbiAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBwb3NpdGlvbi5jb3VudDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0XHRpbmRpY2VzLnB1c2goIGkgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRnZW9tZXRyeS5zZXRJbmRleCggaW5kaWNlcyApO1xyXG5cdFx0XHRcdGluZGV4ID0gZ2VvbWV0cnkuZ2V0SW5kZXgoKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyLnRvVHJpYW5nbGVzRHJhd01vZGUoKTogVW5kZWZpbmVkIHBvc2l0aW9uIGF0dHJpYnV0ZS4gUHJvY2Vzc2luZyBub3QgcG9zc2libGUuJyApO1xyXG5cdFx0XHRcdHJldHVybiBnZW9tZXRyeTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly9cclxuXHJcblx0XHR2YXIgbnVtYmVyT2ZUcmlhbmdsZXMgPSBpbmRleC5jb3VudCAtIDI7XHJcblx0XHR2YXIgbmV3SW5kaWNlcyA9IFtdO1xyXG5cclxuXHRcdGlmICggZHJhd01vZGUgPT09IFRyaWFuZ2xlRmFuRHJhd01vZGUgKSB7XHJcblxyXG5cdFx0XHQvLyBnbC5UUklBTkdMRV9GQU5cclxuXHJcblx0XHRcdGZvciAoIHZhciBpID0gMTsgaSA8PSBudW1iZXJPZlRyaWFuZ2xlczsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCAwICkgKTtcclxuXHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKSApO1xyXG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDEgKSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHQvLyBnbC5UUklBTkdMRV9TVFJJUFxyXG5cclxuXHRcdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZUcmlhbmdsZXM7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdGlmICggaSAlIDIgPT09IDAgKSB7XHJcblxyXG5cdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICkgKTtcclxuXHRcdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDEgKSApO1xyXG5cdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMiApICk7XHJcblxyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDIgKSApO1xyXG5cdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMSApICk7XHJcblx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKSApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggKCBuZXdJbmRpY2VzLmxlbmd0aCAvIDMgKSAhPT0gbnVtYmVyT2ZUcmlhbmdsZXMgKSB7XHJcblxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuR0xURkxvYWRlci50b1RyaWFuZ2xlc0RyYXdNb2RlKCk6IFVuYWJsZSB0byBnZW5lcmF0ZSBjb3JyZWN0IGFtb3VudCBvZiB0cmlhbmdsZXMuJyApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBidWlsZCBmaW5hbCBnZW9tZXRyeVxyXG5cclxuXHRcdHZhciBuZXdHZW9tZXRyeSA9IGdlb21ldHJ5LmNsb25lKCk7XHJcblx0XHRuZXdHZW9tZXRyeS5zZXRJbmRleCggbmV3SW5kaWNlcyApO1xyXG5cclxuXHRcdHJldHVybiBuZXdHZW9tZXRyeTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2dlb21ldHJ5XHJcblx0ICpcclxuXHQgKiBDcmVhdGVzIEJ1ZmZlckdlb21ldHJpZXMgZnJvbSBwcmltaXRpdmVzLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtBcnJheTxHTFRGLlByaW1pdGl2ZT59IHByaW1pdGl2ZXNcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5PEJ1ZmZlckdlb21ldHJ5Pj59XHJcblx0ICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUubG9hZEdlb21ldHJpZXMgPSBmdW5jdGlvbiAoIHByaW1pdGl2ZXMgKSB7XHJcblxyXG5cdFx0dmFyIHBhcnNlciA9IHRoaXM7XHJcblx0XHR2YXIgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcclxuXHRcdHZhciBjYWNoZSA9IHRoaXMucHJpbWl0aXZlQ2FjaGU7XHJcblxyXG5cdFx0ZnVuY3Rpb24gY3JlYXRlRHJhY29QcmltaXRpdmUoIHByaW1pdGl2ZSApIHtcclxuXHJcblx0XHRcdHJldHVybiBleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OIF1cclxuXHRcdFx0XHQuZGVjb2RlUHJpbWl0aXZlKCBwcmltaXRpdmUsIHBhcnNlciApXHJcblx0XHRcdFx0LnRoZW4oIGZ1bmN0aW9uICggZ2VvbWV0cnkgKSB7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIGFkZFByaW1pdGl2ZUF0dHJpYnV0ZXMoIGdlb21ldHJ5LCBwcmltaXRpdmUsIHBhcnNlciApO1xyXG5cclxuXHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBwZW5kaW5nID0gW107XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IHByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHR2YXIgcHJpbWl0aXZlID0gcHJpbWl0aXZlc1sgaSBdO1xyXG5cdFx0XHR2YXIgY2FjaGVLZXkgPSBjcmVhdGVQcmltaXRpdmVLZXkoIHByaW1pdGl2ZSApO1xyXG5cclxuXHRcdFx0Ly8gU2VlIGlmIHdlJ3ZlIGFscmVhZHkgY3JlYXRlZCB0aGlzIGdlb21ldHJ5XHJcblx0XHRcdHZhciBjYWNoZWQgPSBjYWNoZVsgY2FjaGVLZXkgXTtcclxuXHJcblx0XHRcdGlmICggY2FjaGVkICkge1xyXG5cclxuXHRcdFx0XHQvLyBVc2UgdGhlIGNhY2hlZCBnZW9tZXRyeSBpZiBpdCBleGlzdHNcclxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIGNhY2hlZC5wcm9taXNlICk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHR2YXIgZ2VvbWV0cnlQcm9taXNlO1xyXG5cclxuXHRcdFx0XHRpZiAoIHByaW1pdGl2ZS5leHRlbnNpb25zICYmIHByaW1pdGl2ZS5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OIF0gKSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8gVXNlIERSQUNPIGdlb21ldHJ5IGlmIGF2YWlsYWJsZVxyXG5cdFx0XHRcdFx0Z2VvbWV0cnlQcm9taXNlID0gY3JlYXRlRHJhY29QcmltaXRpdmUoIHByaW1pdGl2ZSApO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdC8vIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZ2VvbWV0cnlcclxuXHRcdFx0XHRcdGdlb21ldHJ5UHJvbWlzZSA9IGFkZFByaW1pdGl2ZUF0dHJpYnV0ZXMoIG5ldyBCdWZmZXJHZW9tZXRyeSgpLCBwcmltaXRpdmUsIHBhcnNlciApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIENhY2hlIHRoaXMgZ2VvbWV0cnlcclxuXHRcdFx0XHRjYWNoZVsgY2FjaGVLZXkgXSA9IHsgcHJpbWl0aXZlOiBwcmltaXRpdmUsIHByb21pc2U6IGdlb21ldHJ5UHJvbWlzZSB9O1xyXG5cclxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIGdlb21ldHJ5UHJvbWlzZSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNtZXNoZXNcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gbWVzaEluZGV4XHJcblx0ICogQHJldHVybiB7UHJvbWlzZTxHcm91cHxNZXNofFNraW5uZWRNZXNoPn1cclxuXHQgKi9cclxuXHRHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkTWVzaCA9IGZ1bmN0aW9uICggbWVzaEluZGV4ICkge1xyXG5cclxuXHRcdHZhciBwYXJzZXIgPSB0aGlzO1xyXG5cdFx0dmFyIGpzb24gPSB0aGlzLmpzb247XHJcblx0XHR2YXIgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcclxuXHJcblx0XHR2YXIgbWVzaERlZiA9IGpzb24ubWVzaGVzWyBtZXNoSW5kZXggXTtcclxuXHRcdHZhciBwcmltaXRpdmVzID0gbWVzaERlZi5wcmltaXRpdmVzO1xyXG5cclxuXHRcdHZhciBwZW5kaW5nID0gW107XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IHByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHR2YXIgbWF0ZXJpYWwgPSBwcmltaXRpdmVzWyBpIF0ubWF0ZXJpYWwgPT09IHVuZGVmaW5lZFxyXG5cdFx0XHRcdD8gY3JlYXRlRGVmYXVsdE1hdGVyaWFsKCB0aGlzLmNhY2hlIClcclxuXHRcdFx0XHQ6IHRoaXMuZ2V0RGVwZW5kZW5jeSggJ21hdGVyaWFsJywgcHJpbWl0aXZlc1sgaSBdLm1hdGVyaWFsICk7XHJcblxyXG5cdFx0XHRwZW5kaW5nLnB1c2goIG1hdGVyaWFsICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmxvYWRHZW9tZXRyaWVzKCBwcmltaXRpdmVzICkgKTtcclxuXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKS50aGVuKCBmdW5jdGlvbiAoIHJlc3VsdHMgKSB7XHJcblxyXG5cdFx0XHR2YXIgbWF0ZXJpYWxzID0gcmVzdWx0cy5zbGljZSggMCwgcmVzdWx0cy5sZW5ndGggLSAxICk7XHJcblx0XHRcdHZhciBnZW9tZXRyaWVzID0gcmVzdWx0c1sgcmVzdWx0cy5sZW5ndGggLSAxIF07XHJcblxyXG5cdFx0XHR2YXIgbWVzaGVzID0gW107XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gZ2VvbWV0cmllcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0dmFyIGdlb21ldHJ5ID0gZ2VvbWV0cmllc1sgaSBdO1xyXG5cdFx0XHRcdHZhciBwcmltaXRpdmUgPSBwcmltaXRpdmVzWyBpIF07XHJcblxyXG5cdFx0XHRcdC8vIDEuIGNyZWF0ZSBNZXNoXHJcblxyXG5cdFx0XHRcdHZhciBtZXNoO1xyXG5cclxuXHRcdFx0XHR2YXIgbWF0ZXJpYWwgPSBtYXRlcmlhbHNbIGkgXTtcclxuXHJcblx0XHRcdFx0aWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFUyB8fFxyXG5cdFx0XHRcdFx0cHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRV9TVFJJUCB8fFxyXG5cdFx0XHRcdFx0cHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRV9GQU4gfHxcclxuXHRcdFx0XHRcdHByaW1pdGl2ZS5tb2RlID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8gLmlzU2tpbm5lZE1lc2ggaXNuJ3QgaW4gZ2xURiBzcGVjLiBTZWUgLl9tYXJrRGVmcygpXHJcblx0XHRcdFx0XHRtZXNoID0gbWVzaERlZi5pc1NraW5uZWRNZXNoID09PSB0cnVlXHJcblx0XHRcdFx0XHRcdD8gbmV3IFNraW5uZWRNZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKVxyXG5cdFx0XHRcdFx0XHQ6IG5ldyBNZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIG1lc2guaXNTa2lubmVkTWVzaCA9PT0gdHJ1ZSAmJiAhIG1lc2guZ2VvbWV0cnkuYXR0cmlidXRlcy5za2luV2VpZ2h0Lm5vcm1hbGl6ZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyB3ZSBub3JtYWxpemUgZmxvYXRpbmcgcG9pbnQgc2tpbiB3ZWlnaHQgYXJyYXkgdG8gZml4IG1hbGZvcm1lZCBhc3NldHMgKHNlZSAjMTUzMTkpXHJcblx0XHRcdFx0XHRcdC8vIGl0J3MgaW1wb3J0YW50IHRvIHNraXAgdGhpcyBmb3Igbm9uLWZsb2F0MzIgZGF0YSBzaW5jZSBub3JtYWxpemVTa2luV2VpZ2h0cyBhc3N1bWVzIG5vbi1ub3JtYWxpemVkIGlucHV0c1xyXG5cdFx0XHRcdFx0XHRtZXNoLm5vcm1hbGl6ZVNraW5XZWlnaHRzKCk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRV9TVFJJUCApIHtcclxuXHJcblx0XHRcdFx0XHRcdG1lc2guZ2VvbWV0cnkgPSB0b1RyaWFuZ2xlc0RyYXdNb2RlKCBtZXNoLmdlb21ldHJ5LCBUcmlhbmdsZVN0cmlwRHJhd01vZGUgKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFX0ZBTiApIHtcclxuXHJcblx0XHRcdFx0XHRcdG1lc2guZ2VvbWV0cnkgPSB0b1RyaWFuZ2xlc0RyYXdNb2RlKCBtZXNoLmdlb21ldHJ5LCBUcmlhbmdsZUZhbkRyYXdNb2RlICk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLkxJTkVTICkge1xyXG5cclxuXHRcdFx0XHRcdG1lc2ggPSBuZXcgTGluZVNlZ21lbnRzKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5MSU5FX1NUUklQICkge1xyXG5cclxuXHRcdFx0XHRcdG1lc2ggPSBuZXcgTGluZSggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuTElORV9MT09QICkge1xyXG5cclxuXHRcdFx0XHRcdG1lc2ggPSBuZXcgTGluZUxvb3AoIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlBPSU5UUyApIHtcclxuXHJcblx0XHRcdFx0XHRtZXNoID0gbmV3IFBvaW50cyggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogUHJpbWl0aXZlIG1vZGUgdW5zdXBwb3J0ZWQ6ICcgKyBwcmltaXRpdmUubW9kZSApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggT2JqZWN0LmtleXMoIG1lc2guZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzICkubGVuZ3RoID4gMCApIHtcclxuXHJcblx0XHRcdFx0XHR1cGRhdGVNb3JwaFRhcmdldHMoIG1lc2gsIG1lc2hEZWYgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRtZXNoLm5hbWUgPSBwYXJzZXIuY3JlYXRlVW5pcXVlTmFtZSggbWVzaERlZi5uYW1lIHx8ICggJ21lc2hfJyArIG1lc2hJbmRleCApICk7XHJcblxyXG5cdFx0XHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIG1lc2gsIG1lc2hEZWYgKTtcclxuXHJcblx0XHRcdFx0aWYgKCBwcmltaXRpdmUuZXh0ZW5zaW9ucyApIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSggZXh0ZW5zaW9ucywgbWVzaCwgcHJpbWl0aXZlICk7XHJcblxyXG5cdFx0XHRcdHBhcnNlci5hc3NpZ25GaW5hbE1hdGVyaWFsKCBtZXNoICk7XHJcblxyXG5cdFx0XHRcdG1lc2hlcy5wdXNoKCBtZXNoICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIG1lc2hlcy5sZW5ndGggPT09IDEgKSB7XHJcblxyXG5cdFx0XHRcdHJldHVybiBtZXNoZXNbIDAgXTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBncm91cCA9IG5ldyBHcm91cCgpO1xyXG5cclxuXHRcdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IG1lc2hlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0Z3JvdXAuYWRkKCBtZXNoZXNbIGkgXSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGdyb3VwO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI2NhbWVyYXNcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2FtZXJhSW5kZXhcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFRIUkVFLkNhbWVyYT59XHJcblx0ICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUubG9hZENhbWVyYSA9IGZ1bmN0aW9uICggY2FtZXJhSW5kZXggKSB7XHJcblxyXG5cdFx0dmFyIGNhbWVyYTtcclxuXHRcdHZhciBjYW1lcmFEZWYgPSB0aGlzLmpzb24uY2FtZXJhc1sgY2FtZXJhSW5kZXggXTtcclxuXHRcdHZhciBwYXJhbXMgPSBjYW1lcmFEZWZbIGNhbWVyYURlZi50eXBlIF07XHJcblxyXG5cdFx0aWYgKCAhIHBhcmFtcyApIHtcclxuXHJcblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IE1pc3NpbmcgY2FtZXJhIHBhcmFtZXRlcnMuJyApO1xyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggY2FtZXJhRGVmLnR5cGUgPT09ICdwZXJzcGVjdGl2ZScgKSB7XHJcblxyXG5cdFx0XHRjYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoIE1hdGhVdGlscy5yYWRUb0RlZyggcGFyYW1zLnlmb3YgKSwgcGFyYW1zLmFzcGVjdFJhdGlvIHx8IDEsIHBhcmFtcy56bmVhciB8fCAxLCBwYXJhbXMuemZhciB8fCAyZTYgKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKCBjYW1lcmFEZWYudHlwZSA9PT0gJ29ydGhvZ3JhcGhpYycgKSB7XHJcblxyXG5cdFx0XHRjYW1lcmEgPSBuZXcgT3J0aG9ncmFwaGljQ2FtZXJhKCAtIHBhcmFtcy54bWFnLCBwYXJhbXMueG1hZywgcGFyYW1zLnltYWcsIC0gcGFyYW1zLnltYWcsIHBhcmFtcy56bmVhciwgcGFyYW1zLnpmYXIgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBjYW1lcmFEZWYubmFtZSApIGNhbWVyYS5uYW1lID0gdGhpcy5jcmVhdGVVbmlxdWVOYW1lKCBjYW1lcmFEZWYubmFtZSApO1xyXG5cclxuXHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIGNhbWVyYSwgY2FtZXJhRGVmICk7XHJcblxyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggY2FtZXJhICk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNza2luc1xyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBza2luSW5kZXhcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XHJcblx0ICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUubG9hZFNraW4gPSBmdW5jdGlvbiAoIHNraW5JbmRleCApIHtcclxuXHJcblx0XHR2YXIgc2tpbkRlZiA9IHRoaXMuanNvbi5za2luc1sgc2tpbkluZGV4IF07XHJcblxyXG5cdFx0dmFyIHNraW5FbnRyeSA9IHsgam9pbnRzOiBza2luRGVmLmpvaW50cyB9O1xyXG5cclxuXHRcdGlmICggc2tpbkRlZi5pbnZlcnNlQmluZE1hdHJpY2VzID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCBza2luRW50cnkgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgc2tpbkRlZi5pbnZlcnNlQmluZE1hdHJpY2VzICkudGhlbiggZnVuY3Rpb24gKCBhY2Nlc3NvciApIHtcclxuXHJcblx0XHRcdHNraW5FbnRyeS5pbnZlcnNlQmluZE1hdHJpY2VzID0gYWNjZXNzb3I7XHJcblxyXG5cdFx0XHRyZXR1cm4gc2tpbkVudHJ5O1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI2FuaW1hdGlvbnNcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gYW5pbWF0aW9uSW5kZXhcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFuaW1hdGlvbkNsaXA+fVxyXG5cdCAqL1xyXG5cdEdMVEZQYXJzZXIucHJvdG90eXBlLmxvYWRBbmltYXRpb24gPSBmdW5jdGlvbiAoIGFuaW1hdGlvbkluZGV4ICkge1xyXG5cclxuXHRcdHZhciBqc29uID0gdGhpcy5qc29uO1xyXG5cclxuXHRcdHZhciBhbmltYXRpb25EZWYgPSBqc29uLmFuaW1hdGlvbnNbIGFuaW1hdGlvbkluZGV4IF07XHJcblxyXG5cdFx0dmFyIHBlbmRpbmdOb2RlcyA9IFtdO1xyXG5cdFx0dmFyIHBlbmRpbmdJbnB1dEFjY2Vzc29ycyA9IFtdO1xyXG5cdFx0dmFyIHBlbmRpbmdPdXRwdXRBY2Nlc3NvcnMgPSBbXTtcclxuXHRcdHZhciBwZW5kaW5nU2FtcGxlcnMgPSBbXTtcclxuXHRcdHZhciBwZW5kaW5nVGFyZ2V0cyA9IFtdO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSBhbmltYXRpb25EZWYuY2hhbm5lbHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHR2YXIgY2hhbm5lbCA9IGFuaW1hdGlvbkRlZi5jaGFubmVsc1sgaSBdO1xyXG5cdFx0XHR2YXIgc2FtcGxlciA9IGFuaW1hdGlvbkRlZi5zYW1wbGVyc1sgY2hhbm5lbC5zYW1wbGVyIF07XHJcblx0XHRcdHZhciB0YXJnZXQgPSBjaGFubmVsLnRhcmdldDtcclxuXHRcdFx0dmFyIG5hbWUgPSB0YXJnZXQubm9kZSAhPT0gdW5kZWZpbmVkID8gdGFyZ2V0Lm5vZGUgOiB0YXJnZXQuaWQ7IC8vIE5PVEU6IHRhcmdldC5pZCBpcyBkZXByZWNhdGVkLlxyXG5cdFx0XHR2YXIgaW5wdXQgPSBhbmltYXRpb25EZWYucGFyYW1ldGVycyAhPT0gdW5kZWZpbmVkID8gYW5pbWF0aW9uRGVmLnBhcmFtZXRlcnNbIHNhbXBsZXIuaW5wdXQgXSA6IHNhbXBsZXIuaW5wdXQ7XHJcblx0XHRcdHZhciBvdXRwdXQgPSBhbmltYXRpb25EZWYucGFyYW1ldGVycyAhPT0gdW5kZWZpbmVkID8gYW5pbWF0aW9uRGVmLnBhcmFtZXRlcnNbIHNhbXBsZXIub3V0cHV0IF0gOiBzYW1wbGVyLm91dHB1dDtcclxuXHJcblx0XHRcdHBlbmRpbmdOb2Rlcy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdub2RlJywgbmFtZSApICk7XHJcblx0XHRcdHBlbmRpbmdJbnB1dEFjY2Vzc29ycy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIGlucHV0ICkgKTtcclxuXHRcdFx0cGVuZGluZ091dHB1dEFjY2Vzc29ycy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIG91dHB1dCApICk7XHJcblx0XHRcdHBlbmRpbmdTYW1wbGVycy5wdXNoKCBzYW1wbGVyICk7XHJcblx0XHRcdHBlbmRpbmdUYXJnZXRzLnB1c2goIHRhcmdldCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFtcclxuXHJcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nTm9kZXMgKSxcclxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdJbnB1dEFjY2Vzc29ycyApLFxyXG5cdFx0XHRQcm9taXNlLmFsbCggcGVuZGluZ091dHB1dEFjY2Vzc29ycyApLFxyXG5cdFx0XHRQcm9taXNlLmFsbCggcGVuZGluZ1NhbXBsZXJzICksXHJcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nVGFyZ2V0cyApXHJcblxyXG5cdFx0XSApLnRoZW4oIGZ1bmN0aW9uICggZGVwZW5kZW5jaWVzICkge1xyXG5cclxuXHRcdFx0dmFyIG5vZGVzID0gZGVwZW5kZW5jaWVzWyAwIF07XHJcblx0XHRcdHZhciBpbnB1dEFjY2Vzc29ycyA9IGRlcGVuZGVuY2llc1sgMSBdO1xyXG5cdFx0XHR2YXIgb3V0cHV0QWNjZXNzb3JzID0gZGVwZW5kZW5jaWVzWyAyIF07XHJcblx0XHRcdHZhciBzYW1wbGVycyA9IGRlcGVuZGVuY2llc1sgMyBdO1xyXG5cdFx0XHR2YXIgdGFyZ2V0cyA9IGRlcGVuZGVuY2llc1sgNCBdO1xyXG5cclxuXHRcdFx0dmFyIHRyYWNrcyA9IFtdO1xyXG5cclxuXHRcdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IG5vZGVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHR2YXIgbm9kZSA9IG5vZGVzWyBpIF07XHJcblx0XHRcdFx0dmFyIGlucHV0QWNjZXNzb3IgPSBpbnB1dEFjY2Vzc29yc1sgaSBdO1xyXG5cdFx0XHRcdHZhciBvdXRwdXRBY2Nlc3NvciA9IG91dHB1dEFjY2Vzc29yc1sgaSBdO1xyXG5cdFx0XHRcdHZhciBzYW1wbGVyID0gc2FtcGxlcnNbIGkgXTtcclxuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gdGFyZ2V0c1sgaSBdO1xyXG5cclxuXHRcdFx0XHRpZiAoIG5vZGUgPT09IHVuZGVmaW5lZCApIGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRub2RlLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRcdG5vZGUubWF0cml4QXV0b1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdHZhciBUeXBlZEtleWZyYW1lVHJhY2s7XHJcblxyXG5cdFx0XHRcdHN3aXRjaCAoIFBBVEhfUFJPUEVSVElFU1sgdGFyZ2V0LnBhdGggXSApIHtcclxuXHJcblx0XHRcdFx0XHRjYXNlIFBBVEhfUFJPUEVSVElFUy53ZWlnaHRzOlxyXG5cclxuXHRcdFx0XHRcdFx0VHlwZWRLZXlmcmFtZVRyYWNrID0gTnVtYmVyS2V5ZnJhbWVUcmFjaztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSBQQVRIX1BST1BFUlRJRVMucm90YXRpb246XHJcblxyXG5cdFx0XHRcdFx0XHRUeXBlZEtleWZyYW1lVHJhY2sgPSBRdWF0ZXJuaW9uS2V5ZnJhbWVUcmFjaztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSBQQVRIX1BST1BFUlRJRVMucG9zaXRpb246XHJcblx0XHRcdFx0XHRjYXNlIFBBVEhfUFJPUEVSVElFUy5zY2FsZTpcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblxyXG5cdFx0XHRcdFx0XHRUeXBlZEtleWZyYW1lVHJhY2sgPSBWZWN0b3JLZXlmcmFtZVRyYWNrO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgdGFyZ2V0TmFtZSA9IG5vZGUubmFtZSA/IG5vZGUubmFtZSA6IG5vZGUudXVpZDtcclxuXHJcblx0XHRcdFx0dmFyIGludGVycG9sYXRpb24gPSBzYW1wbGVyLmludGVycG9sYXRpb24gIT09IHVuZGVmaW5lZCA/IElOVEVSUE9MQVRJT05bIHNhbXBsZXIuaW50ZXJwb2xhdGlvbiBdIDogSW50ZXJwb2xhdGVMaW5lYXI7XHJcblxyXG5cdFx0XHRcdHZhciB0YXJnZXROYW1lcyA9IFtdO1xyXG5cclxuXHRcdFx0XHRpZiAoIFBBVEhfUFJPUEVSVElFU1sgdGFyZ2V0LnBhdGggXSA9PT0gUEFUSF9QUk9QRVJUSUVTLndlaWdodHMgKSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8gTm9kZSBtYXkgYmUgYSBHcm91cCAoZ2xURiBtZXNoIHdpdGggc2V2ZXJhbCBwcmltaXRpdmVzKSBvciBhIE1lc2guXHJcblx0XHRcdFx0XHRub2RlLnRyYXZlcnNlKCBmdW5jdGlvbiAoIG9iamVjdCApIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICggb2JqZWN0LmlzTWVzaCA9PT0gdHJ1ZSAmJiBvYmplY3QubW9ycGhUYXJnZXRJbmZsdWVuY2VzICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR0YXJnZXROYW1lcy5wdXNoKCBvYmplY3QubmFtZSA/IG9iamVjdC5uYW1lIDogb2JqZWN0LnV1aWQgKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0dGFyZ2V0TmFtZXMucHVzaCggdGFyZ2V0TmFtZSApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciBvdXRwdXRBcnJheSA9IG91dHB1dEFjY2Vzc29yLmFycmF5O1xyXG5cclxuXHRcdFx0XHRpZiAoIG91dHB1dEFjY2Vzc29yLm5vcm1hbGl6ZWQgKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHNjYWxlO1xyXG5cclxuXHRcdFx0XHRcdGlmICggb3V0cHV0QXJyYXkuY29uc3RydWN0b3IgPT09IEludDhBcnJheSApIHtcclxuXHJcblx0XHRcdFx0XHRcdHNjYWxlID0gMSAvIDEyNztcclxuXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKCBvdXRwdXRBcnJheS5jb25zdHJ1Y3RvciA9PT0gVWludDhBcnJheSApIHtcclxuXHJcblx0XHRcdFx0XHRcdHNjYWxlID0gMSAvIDI1NTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKCBvdXRwdXRBcnJheS5jb25zdHJ1Y3RvciA9PSBJbnQxNkFycmF5ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0c2NhbGUgPSAxIC8gMzI3Njc7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICggb3V0cHV0QXJyYXkuY29uc3RydWN0b3IgPT09IFVpbnQxNkFycmF5ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0c2NhbGUgPSAxIC8gNjU1MzU7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFVuc3VwcG9ydGVkIG91dHB1dCBhY2Nlc3NvciBjb21wb25lbnQgdHlwZS4nICk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhciBzY2FsZWQgPSBuZXcgRmxvYXQzMkFycmF5KCBvdXRwdXRBcnJheS5sZW5ndGggKTtcclxuXHJcblx0XHRcdFx0XHRmb3IgKCB2YXIgaiA9IDAsIGpsID0gb3V0cHV0QXJyYXkubGVuZ3RoOyBqIDwgamw7IGogKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzY2FsZWRbIGogXSA9IG91dHB1dEFycmF5WyBqIF0gKiBzY2FsZTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0b3V0cHV0QXJyYXkgPSBzY2FsZWQ7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Zm9yICggdmFyIGogPSAwLCBqbCA9IHRhcmdldE5hbWVzLmxlbmd0aDsgaiA8IGpsOyBqICsrICkge1xyXG5cclxuXHRcdFx0XHRcdHZhciB0cmFjayA9IG5ldyBUeXBlZEtleWZyYW1lVHJhY2soXHJcblx0XHRcdFx0XHRcdHRhcmdldE5hbWVzWyBqIF0gKyAnLicgKyBQQVRIX1BST1BFUlRJRVNbIHRhcmdldC5wYXRoIF0sXHJcblx0XHRcdFx0XHRcdGlucHV0QWNjZXNzb3IuYXJyYXksXHJcblx0XHRcdFx0XHRcdG91dHB1dEFycmF5LFxyXG5cdFx0XHRcdFx0XHRpbnRlcnBvbGF0aW9uXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdC8vIE92ZXJyaWRlIGludGVycG9sYXRpb24gd2l0aCBjdXN0b20gZmFjdG9yeSBtZXRob2QuXHJcblx0XHRcdFx0XHRpZiAoIHNhbXBsZXIuaW50ZXJwb2xhdGlvbiA9PT0gJ0NVQklDU1BMSU5FJyApIHtcclxuXHJcblx0XHRcdFx0XHRcdHRyYWNrLmNyZWF0ZUludGVycG9sYW50ID0gZnVuY3Rpb24gSW50ZXJwb2xhbnRGYWN0b3J5TWV0aG9kR0xURkN1YmljU3BsaW5lKCByZXN1bHQgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIEEgQ1VCSUNTUExJTkUga2V5ZnJhbWUgaW4gZ2xURiBoYXMgdGhyZWUgb3V0cHV0IHZhbHVlcyBmb3IgZWFjaCBpbnB1dCB2YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHQvLyByZXByZXNlbnRpbmcgaW5UYW5nZW50LCBzcGxpbmVWZXJ0ZXgsIGFuZCBvdXRUYW5nZW50LiBBcyBhIHJlc3VsdCwgdHJhY2suZ2V0VmFsdWVTaXplKClcclxuXHRcdFx0XHRcdFx0XHQvLyBtdXN0IGJlIGRpdmlkZWQgYnkgdGhyZWUgdG8gZ2V0IHRoZSBpbnRlcnBvbGFudCdzIHNhbXBsZVNpemUgYXJndW1lbnQuXHJcblxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBuZXcgR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQoIHRoaXMudGltZXMsIHRoaXMudmFsdWVzLCB0aGlzLmdldFZhbHVlU2l6ZSgpIC8gMywgcmVzdWx0ICk7XHJcblxyXG5cdFx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gTWFyayBhcyBDVUJJQ1NQTElORS4gYHRyYWNrLmdldEludGVycG9sYXRpb24oKWAgZG9lc24ndCBzdXBwb3J0IGN1c3RvbSBpbnRlcnBvbGFudHMuXHJcblx0XHRcdFx0XHRcdHRyYWNrLmNyZWF0ZUludGVycG9sYW50LmlzSW50ZXJwb2xhbnRGYWN0b3J5TWV0aG9kR0xURkN1YmljU3BsaW5lID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dHJhY2tzLnB1c2goIHRyYWNrICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBuYW1lID0gYW5pbWF0aW9uRGVmLm5hbWUgPyBhbmltYXRpb25EZWYubmFtZSA6ICdhbmltYXRpb25fJyArIGFuaW1hdGlvbkluZGV4O1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBBbmltYXRpb25DbGlwKCBuYW1lLCB1bmRlZmluZWQsIHRyYWNrcyApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI25vZGVzLWFuZC1oaWVyYXJjaHlcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gbm9kZUluZGV4XHJcblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QzRD59XHJcblx0ICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUubG9hZE5vZGUgPSBmdW5jdGlvbiAoIG5vZGVJbmRleCApIHtcclxuXHJcblx0XHR2YXIganNvbiA9IHRoaXMuanNvbjtcclxuXHRcdHZhciBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xyXG5cdFx0dmFyIHBhcnNlciA9IHRoaXM7XHJcblxyXG5cdFx0dmFyIG5vZGVEZWYgPSBqc29uLm5vZGVzWyBub2RlSW5kZXggXTtcclxuXHJcblx0XHQvLyByZXNlcnZlIG5vZGUncyBuYW1lIGJlZm9yZSBpdHMgZGVwZW5kZW5jaWVzLCBzbyB0aGUgcm9vdCBoYXMgdGhlIGludGVuZGVkIG5hbWUuXHJcblx0XHR2YXIgbm9kZU5hbWUgPSBub2RlRGVmLm5hbWUgPyBwYXJzZXIuY3JlYXRlVW5pcXVlTmFtZSggbm9kZURlZi5uYW1lICkgOiAnJztcclxuXHJcblx0XHRyZXR1cm4gKCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHR2YXIgcGVuZGluZyA9IFtdO1xyXG5cclxuXHRcdFx0aWYgKCBub2RlRGVmLm1lc2ggIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ21lc2gnLCBub2RlRGVmLm1lc2ggKS50aGVuKCBmdW5jdGlvbiAoIG1lc2ggKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIG5vZGUgPSBwYXJzZXIuX2dldE5vZGVSZWYoIHBhcnNlci5tZXNoQ2FjaGUsIG5vZGVEZWYubWVzaCwgbWVzaCApO1xyXG5cclxuXHRcdFx0XHRcdC8vIGlmIHdlaWdodHMgYXJlIHByb3ZpZGVkIG9uIHRoZSBub2RlLCBvdmVycmlkZSB3ZWlnaHRzIG9uIHRoZSBtZXNoLlxyXG5cdFx0XHRcdFx0aWYgKCBub2RlRGVmLndlaWdodHMgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0XHRcdG5vZGUudHJhdmVyc2UoIGZ1bmN0aW9uICggbyApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKCAhIG8uaXNNZXNoICkgcmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gbm9kZURlZi53ZWlnaHRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdG8ubW9ycGhUYXJnZXRJbmZsdWVuY2VzWyBpIF0gPSBub2RlRGVmLndlaWdodHNbIGkgXTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gbm9kZTtcclxuXHJcblx0XHRcdFx0fSApICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIG5vZGVEZWYuY2FtZXJhICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmdldERlcGVuZGVuY3koICdjYW1lcmEnLCBub2RlRGVmLmNhbWVyYSApLnRoZW4oIGZ1bmN0aW9uICggY2FtZXJhICkge1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiBwYXJzZXIuX2dldE5vZGVSZWYoIHBhcnNlci5jYW1lcmFDYWNoZSwgbm9kZURlZi5jYW1lcmEsIGNhbWVyYSApO1xyXG5cclxuXHRcdFx0XHR9ICkgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHBhcnNlci5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGV4dC5jcmVhdGVOb2RlQXR0YWNobWVudCAmJiBleHQuY3JlYXRlTm9kZUF0dGFjaG1lbnQoIG5vZGVJbmRleCApO1xyXG5cclxuXHRcdFx0fSApLmZvckVhY2goIGZ1bmN0aW9uICggcHJvbWlzZSApIHtcclxuXHJcblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwcm9taXNlICk7XHJcblxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcclxuXHJcblx0XHR9KCkgKS50aGVuKCBmdW5jdGlvbiAoIG9iamVjdHMgKSB7XHJcblxyXG5cdFx0XHR2YXIgbm9kZTtcclxuXHJcblx0XHRcdC8vIC5pc0JvbmUgaXNuJ3QgaW4gZ2xURiBzcGVjLiBTZWUgLl9tYXJrRGVmc1xyXG5cdFx0XHRpZiAoIG5vZGVEZWYuaXNCb25lID09PSB0cnVlICkge1xyXG5cclxuXHRcdFx0XHRub2RlID0gbmV3IEJvbmUoKTtcclxuXHJcblx0XHRcdH0gZWxzZSBpZiAoIG9iamVjdHMubGVuZ3RoID4gMSApIHtcclxuXHJcblx0XHRcdFx0bm9kZSA9IG5ldyBHcm91cCgpO1xyXG5cclxuXHRcdFx0fSBlbHNlIGlmICggb2JqZWN0cy5sZW5ndGggPT09IDEgKSB7XHJcblxyXG5cdFx0XHRcdG5vZGUgPSBvYmplY3RzWyAwIF07XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRub2RlID0gbmV3IE9iamVjdDNEKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIG5vZGUgIT09IG9iamVjdHNbIDAgXSApIHtcclxuXHJcblx0XHRcdFx0Zm9yICggdmFyIGkgPSAwLCBpbCA9IG9iamVjdHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0bm9kZS5hZGQoIG9iamVjdHNbIGkgXSApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIG5vZGVEZWYubmFtZSApIHtcclxuXHJcblx0XHRcdFx0bm9kZS51c2VyRGF0YS5uYW1lID0gbm9kZURlZi5uYW1lO1xyXG5cdFx0XHRcdG5vZGUubmFtZSA9IG5vZGVOYW1lO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggbm9kZSwgbm9kZURlZiApO1xyXG5cclxuXHRcdFx0aWYgKCBub2RlRGVmLmV4dGVuc2lvbnMgKSBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIG5vZGUsIG5vZGVEZWYgKTtcclxuXHJcblx0XHRcdGlmICggbm9kZURlZi5tYXRyaXggIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0dmFyIG1hdHJpeCA9IG5ldyBNYXRyaXg0KCk7XHJcblx0XHRcdFx0bWF0cml4LmZyb21BcnJheSggbm9kZURlZi5tYXRyaXggKTtcclxuXHRcdFx0XHRub2RlLmFwcGx5TWF0cml4NCggbWF0cml4ICk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRpZiAoIG5vZGVEZWYudHJhbnNsYXRpb24gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0XHRub2RlLnBvc2l0aW9uLmZyb21BcnJheSggbm9kZURlZi50cmFuc2xhdGlvbiApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggbm9kZURlZi5yb3RhdGlvbiAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRcdG5vZGUucXVhdGVybmlvbi5mcm9tQXJyYXkoIG5vZGVEZWYucm90YXRpb24gKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIG5vZGVEZWYuc2NhbGUgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0XHRub2RlLnNjYWxlLmZyb21BcnJheSggbm9kZURlZi5zY2FsZSApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLnNldCggbm9kZSwgeyB0eXBlOiAnbm9kZXMnLCBpbmRleDogbm9kZUluZGV4IH0gKTtcclxuXHJcblx0XHRcdHJldHVybiBub2RlO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI3NjZW5lc1xyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzY2VuZUluZGV4XHJcblx0ICogQHJldHVybiB7UHJvbWlzZTxHcm91cD59XHJcblx0ICovXHJcblx0R0xURlBhcnNlci5wcm90b3R5cGUubG9hZFNjZW5lID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdC8vIHNjZW5lIG5vZGUgaGllcmFjaHkgYnVpbGRlclxyXG5cclxuXHRcdGZ1bmN0aW9uIGJ1aWxkTm9kZUhpZXJhY2h5KCBub2RlSWQsIHBhcmVudE9iamVjdCwganNvbiwgcGFyc2VyICkge1xyXG5cclxuXHRcdFx0dmFyIG5vZGVEZWYgPSBqc29uLm5vZGVzWyBub2RlSWQgXTtcclxuXHJcblx0XHRcdHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ25vZGUnLCBub2RlSWQgKS50aGVuKCBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblxyXG5cdFx0XHRcdGlmICggbm9kZURlZi5za2luID09PSB1bmRlZmluZWQgKSByZXR1cm4gbm9kZTtcclxuXHJcblx0XHRcdFx0Ly8gYnVpbGQgc2tlbGV0b24gaGVyZSBhcyB3ZWxsXHJcblxyXG5cdFx0XHRcdHZhciBza2luRW50cnk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ3NraW4nLCBub2RlRGVmLnNraW4gKS50aGVuKCBmdW5jdGlvbiAoIHNraW4gKSB7XHJcblxyXG5cdFx0XHRcdFx0c2tpbkVudHJ5ID0gc2tpbjtcclxuXHJcblx0XHRcdFx0XHR2YXIgcGVuZGluZ0pvaW50cyA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdGZvciAoIHZhciBpID0gMCwgaWwgPSBza2luRW50cnkuam9pbnRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRcdFx0cGVuZGluZ0pvaW50cy5wdXNoKCBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ25vZGUnLCBza2luRW50cnkuam9pbnRzWyBpIF0gKSApO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmdKb2ludHMgKTtcclxuXHJcblx0XHRcdFx0fSApLnRoZW4oIGZ1bmN0aW9uICggam9pbnROb2RlcyApIHtcclxuXHJcblx0XHRcdFx0XHRub2RlLnRyYXZlcnNlKCBmdW5jdGlvbiAoIG1lc2ggKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoICEgbWVzaC5pc01lc2ggKSByZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgYm9uZXMgPSBbXTtcclxuXHRcdFx0XHRcdFx0dmFyIGJvbmVJbnZlcnNlcyA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9yICggdmFyIGogPSAwLCBqbCA9IGpvaW50Tm9kZXMubGVuZ3RoOyBqIDwgamw7IGogKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBqb2ludE5vZGUgPSBqb2ludE5vZGVzWyBqIF07XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICggam9pbnROb2RlICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGJvbmVzLnB1c2goIGpvaW50Tm9kZSApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHZhciBtYXQgPSBuZXcgTWF0cml4NCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmICggc2tpbkVudHJ5LmludmVyc2VCaW5kTWF0cmljZXMgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdG1hdC5mcm9tQXJyYXkoIHNraW5FbnRyeS5pbnZlcnNlQmluZE1hdHJpY2VzLmFycmF5LCBqICogMTYgKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Ym9uZUludmVyc2VzLnB1c2goIG1hdCApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IEpvaW50IFwiJXNcIiBjb3VsZCBub3QgYmUgZm91bmQuJywgc2tpbkVudHJ5LmpvaW50c1sgaiBdICk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdG1lc2guYmluZCggbmV3IFNrZWxldG9uKCBib25lcywgYm9uZUludmVyc2VzICksIG1lc2gubWF0cml4V29ybGQgKTtcclxuXHJcblx0XHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIG5vZGU7XHJcblxyXG5cdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdH0gKS50aGVuKCBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblxyXG5cdFx0XHRcdC8vIGJ1aWxkIG5vZGUgaGllcmFjaHlcclxuXHJcblx0XHRcdFx0cGFyZW50T2JqZWN0LmFkZCggbm9kZSApO1xyXG5cclxuXHRcdFx0XHR2YXIgcGVuZGluZyA9IFtdO1xyXG5cclxuXHRcdFx0XHRpZiAoIG5vZGVEZWYuY2hpbGRyZW4gKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGNoaWxkcmVuID0gbm9kZURlZi5jaGlsZHJlbjtcclxuXHJcblx0XHRcdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgY2hpbGQgPSBjaGlsZHJlblsgaSBdO1xyXG5cdFx0XHRcdFx0XHRwZW5kaW5nLnB1c2goIGJ1aWxkTm9kZUhpZXJhY2h5KCBjaGlsZCwgbm9kZSwganNvbiwgcGFyc2VyICkgKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XHJcblxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmdW5jdGlvbiBsb2FkU2NlbmUoIHNjZW5lSW5kZXggKSB7XHJcblxyXG5cdFx0XHR2YXIganNvbiA9IHRoaXMuanNvbjtcclxuXHRcdFx0dmFyIGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XHJcblx0XHRcdHZhciBzY2VuZURlZiA9IHRoaXMuanNvbi5zY2VuZXNbIHNjZW5lSW5kZXggXTtcclxuXHRcdFx0dmFyIHBhcnNlciA9IHRoaXM7XHJcblxyXG5cdFx0XHQvLyBMb2FkZXIgcmV0dXJucyBHcm91cCwgbm90IFNjZW5lLlxyXG5cdFx0XHQvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzE4MzQyI2lzc3VlY29tbWVudC01Nzg5ODExNzJcclxuXHRcdFx0dmFyIHNjZW5lID0gbmV3IEdyb3VwKCk7XHJcblx0XHRcdGlmICggc2NlbmVEZWYubmFtZSApIHNjZW5lLm5hbWUgPSBwYXJzZXIuY3JlYXRlVW5pcXVlTmFtZSggc2NlbmVEZWYubmFtZSApO1xyXG5cclxuXHRcdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggc2NlbmUsIHNjZW5lRGVmICk7XHJcblxyXG5cdFx0XHRpZiAoIHNjZW5lRGVmLmV4dGVuc2lvbnMgKSBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIHNjZW5lLCBzY2VuZURlZiApO1xyXG5cclxuXHRcdFx0dmFyIG5vZGVJZHMgPSBzY2VuZURlZi5ub2RlcyB8fCBbXTtcclxuXHJcblx0XHRcdHZhciBwZW5kaW5nID0gW107XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gbm9kZUlkcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0cGVuZGluZy5wdXNoKCBidWlsZE5vZGVIaWVyYWNoeSggbm9kZUlkc1sgaSBdLCBzY2VuZSwganNvbiwgcGFyc2VyICkgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApLnRoZW4oIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHNjZW5lO1xyXG5cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdH0oKTtcclxuXHJcblx0cmV0dXJuIEdMVEZMb2FkZXI7XHJcblxyXG59ICkoKTtcclxuXHJcbmV4cG9ydCB7IEdMVEZMb2FkZXIgfTtcclxuIiwiLy8gVEhJUyBGSUxFIFdBUyBOT1QgV1JJVFRFTiBCWSBNRVxyXG5cclxuLy8gVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSBpbmJ1aWx0IG9iaiBsb2FkZXJzIHNvIEkgcmV3cm90ZSBwYXJ0cyBvZiBpdCwgc28gaXQgd29ya3MgaW4gTmV4dGpzIGFuZCBSZWFjdCBcclxuXHJcbi8vIC0tIEhhcnZleSBSYW5kYWxsIDUvNi8yMVxyXG5pbXBvcnQge1xyXG5cdEJ1ZmZlckF0dHJpYnV0ZSxcclxuXHRCdWZmZXJHZW9tZXRyeSxcclxuXHRGbG9hdDMyQnVmZmVyQXR0cmlidXRlLFxyXG5cdEludGVybGVhdmVkQnVmZmVyLFxyXG5cdEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlLFxyXG5cdFRyaWFuZ2xlRmFuRHJhd01vZGUsXHJcblx0VHJpYW5nbGVTdHJpcERyYXdNb2RlLFxyXG5cdFRyaWFuZ2xlc0RyYXdNb2RlLFxyXG5cdFZlY3RvcjNcclxufSBmcm9tICd0aHJlZSc7XHJcblxyXG52YXIgQnVmZmVyR2VvbWV0cnlVdGlscyA9IHtcclxuXHJcblx0Y29tcHV0ZVRhbmdlbnRzOiBmdW5jdGlvbiAoIGdlb21ldHJ5ICkge1xyXG5cclxuXHRcdGdlb21ldHJ5LmNvbXB1dGVUYW5nZW50cygpO1xyXG5cdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLmNvbXB1dGVUYW5nZW50cygpIGhhcyBiZWVuIHJlbW92ZWQuIFVzZSBCdWZmZXJHZW9tZXRyeS5jb21wdXRlVGFuZ2VudHMoKSBpbnN0ZWFkLicgKTtcclxuXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtICB7QXJyYXk8QnVmZmVyR2VvbWV0cnk+fSBnZW9tZXRyaWVzXHJcblx0ICogQHBhcmFtICB7Qm9vbGVhbn0gdXNlR3JvdXBzXHJcblx0ICogQHJldHVybiB7QnVmZmVyR2VvbWV0cnl9XHJcblx0ICovXHJcblx0bWVyZ2VCdWZmZXJHZW9tZXRyaWVzOiBmdW5jdGlvbiAoIGdlb21ldHJpZXMsIHVzZUdyb3VwcyApIHtcclxuXHJcblx0XHR2YXIgaXNJbmRleGVkID0gZ2VvbWV0cmllc1sgMCBdLmluZGV4ICE9PSBudWxsO1xyXG5cclxuXHRcdHZhciBhdHRyaWJ1dGVzVXNlZCA9IG5ldyBTZXQoIE9iamVjdC5rZXlzKCBnZW9tZXRyaWVzWyAwIF0uYXR0cmlidXRlcyApICk7XHJcblx0XHR2YXIgbW9ycGhBdHRyaWJ1dGVzVXNlZCA9IG5ldyBTZXQoIE9iamVjdC5rZXlzKCBnZW9tZXRyaWVzWyAwIF0ubW9ycGhBdHRyaWJ1dGVzICkgKTtcclxuXHJcblx0XHR2YXIgYXR0cmlidXRlcyA9IHt9O1xyXG5cdFx0dmFyIG1vcnBoQXR0cmlidXRlcyA9IHt9O1xyXG5cclxuXHRcdHZhciBtb3JwaFRhcmdldHNSZWxhdGl2ZSA9IGdlb21ldHJpZXNbIDAgXS5tb3JwaFRhcmdldHNSZWxhdGl2ZTtcclxuXHJcblx0XHR2YXIgbWVyZ2VkR2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcclxuXHJcblx0XHR2YXIgb2Zmc2V0ID0gMDtcclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBnZW9tZXRyaWVzLmxlbmd0aDsgKysgaSApIHtcclxuXHJcblx0XHRcdHZhciBnZW9tZXRyeSA9IGdlb21ldHJpZXNbIGkgXTtcclxuXHRcdFx0dmFyIGF0dHJpYnV0ZXNDb3VudCA9IDA7XHJcblxyXG5cdFx0XHQvLyBlbnN1cmUgdGhhdCBhbGwgZ2VvbWV0cmllcyBhcmUgaW5kZXhlZCwgb3Igbm9uZVxyXG5cclxuXHRcdFx0aWYgKCBpc0luZGV4ZWQgIT09ICggZ2VvbWV0cnkuaW5kZXggIT09IG51bGwgKSApIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUJ1ZmZlckdlb21ldHJpZXMoKSBmYWlsZWQgd2l0aCBnZW9tZXRyeSBhdCBpbmRleCAnICsgaSArICcuIEFsbCBnZW9tZXRyaWVzIG11c3QgaGF2ZSBjb21wYXRpYmxlIGF0dHJpYnV0ZXM7IG1ha2Ugc3VyZSBpbmRleCBhdHRyaWJ1dGUgZXhpc3RzIGFtb25nIGFsbCBnZW9tZXRyaWVzLCBvciBpbiBub25lIG9mIHRoZW0uJyApO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZ2F0aGVyIGF0dHJpYnV0ZXMsIGV4aXQgZWFybHkgaWYgdGhleSdyZSBkaWZmZXJlbnRcclxuXHJcblx0XHRcdGZvciAoIHZhciBuYW1lIGluIGdlb21ldHJ5LmF0dHJpYnV0ZXMgKSB7XHJcblxyXG5cdFx0XHRcdGlmICggISBhdHRyaWJ1dGVzVXNlZC5oYXMoIG5hbWUgKSApIHtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyR2VvbWV0cmllcygpIGZhaWxlZCB3aXRoIGdlb21ldHJ5IGF0IGluZGV4ICcgKyBpICsgJy4gQWxsIGdlb21ldHJpZXMgbXVzdCBoYXZlIGNvbXBhdGlibGUgYXR0cmlidXRlczsgbWFrZSBzdXJlIFwiJyArIG5hbWUgKyAnXCIgYXR0cmlidXRlIGV4aXN0cyBhbW9uZyBhbGwgZ2VvbWV0cmllcywgb3IgaW4gbm9uZSBvZiB0aGVtLicgKTtcclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggYXR0cmlidXRlc1sgbmFtZSBdID09PSB1bmRlZmluZWQgKSBhdHRyaWJ1dGVzWyBuYW1lIF0gPSBbXTtcclxuXHJcblx0XHRcdFx0YXR0cmlidXRlc1sgbmFtZSBdLnB1c2goIGdlb21ldHJ5LmF0dHJpYnV0ZXNbIG5hbWUgXSApO1xyXG5cclxuXHRcdFx0XHRhdHRyaWJ1dGVzQ291bnQgKys7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBlbnN1cmUgZ2VvbWV0cmllcyBoYXZlIHRoZSBzYW1lIG51bWJlciBvZiBhdHRyaWJ1dGVzXHJcblxyXG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXNDb3VudCAhPT0gYXR0cmlidXRlc1VzZWQuc2l6ZSApIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUJ1ZmZlckdlb21ldHJpZXMoKSBmYWlsZWQgd2l0aCBnZW9tZXRyeSBhdCBpbmRleCAnICsgaSArICcuIE1ha2Ugc3VyZSBhbGwgZ2VvbWV0cmllcyBoYXZlIHRoZSBzYW1lIG51bWJlciBvZiBhdHRyaWJ1dGVzLicgKTtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGdhdGhlciBtb3JwaCBhdHRyaWJ1dGVzLCBleGl0IGVhcmx5IGlmIHRoZXkncmUgZGlmZmVyZW50XHJcblxyXG5cdFx0XHRpZiAoIG1vcnBoVGFyZ2V0c1JlbGF0aXZlICE9PSBnZW9tZXRyeS5tb3JwaFRhcmdldHNSZWxhdGl2ZSApIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUJ1ZmZlckdlb21ldHJpZXMoKSBmYWlsZWQgd2l0aCBnZW9tZXRyeSBhdCBpbmRleCAnICsgaSArICcuIC5tb3JwaFRhcmdldHNSZWxhdGl2ZSBtdXN0IGJlIGNvbnNpc3RlbnQgdGhyb3VnaG91dCBhbGwgZ2VvbWV0cmllcy4nICk7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgbmFtZSBpbiBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMgKSB7XHJcblxyXG5cdFx0XHRcdGlmICggISBtb3JwaEF0dHJpYnV0ZXNVc2VkLmhhcyggbmFtZSApICkge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJHZW9tZXRyaWVzKCkgZmFpbGVkIHdpdGggZ2VvbWV0cnkgYXQgaW5kZXggJyArIGkgKyAnLiAgLm1vcnBoQXR0cmlidXRlcyBtdXN0IGJlIGNvbnNpc3RlbnQgdGhyb3VnaG91dCBhbGwgZ2VvbWV0cmllcy4nICk7XHJcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIG1vcnBoQXR0cmlidXRlc1sgbmFtZSBdID09PSB1bmRlZmluZWQgKSBtb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXSA9IFtdO1xyXG5cclxuXHRcdFx0XHRtb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXS5wdXNoKCBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZ2F0aGVyIC51c2VyRGF0YVxyXG5cclxuXHRcdFx0bWVyZ2VkR2VvbWV0cnkudXNlckRhdGEubWVyZ2VkVXNlckRhdGEgPSBtZXJnZWRHZW9tZXRyeS51c2VyRGF0YS5tZXJnZWRVc2VyRGF0YSB8fCBbXTtcclxuXHRcdFx0bWVyZ2VkR2VvbWV0cnkudXNlckRhdGEubWVyZ2VkVXNlckRhdGEucHVzaCggZ2VvbWV0cnkudXNlckRhdGEgKTtcclxuXHJcblx0XHRcdGlmICggdXNlR3JvdXBzICkge1xyXG5cclxuXHRcdFx0XHR2YXIgY291bnQ7XHJcblxyXG5cdFx0XHRcdGlmICggaXNJbmRleGVkICkge1xyXG5cclxuXHRcdFx0XHRcdGNvdW50ID0gZ2VvbWV0cnkuaW5kZXguY291bnQ7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0XHRjb3VudCA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uY291bnQ7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUJ1ZmZlckdlb21ldHJpZXMoKSBmYWlsZWQgd2l0aCBnZW9tZXRyeSBhdCBpbmRleCAnICsgaSArICcuIFRoZSBnZW9tZXRyeSBtdXN0IGhhdmUgZWl0aGVyIGFuIGluZGV4IG9yIGEgcG9zaXRpb24gYXR0cmlidXRlJyApO1xyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bWVyZ2VkR2VvbWV0cnkuYWRkR3JvdXAoIG9mZnNldCwgY291bnQsIGkgKTtcclxuXHJcblx0XHRcdFx0b2Zmc2V0ICs9IGNvdW50O1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBtZXJnZSBpbmRpY2VzXHJcblxyXG5cdFx0aWYgKCBpc0luZGV4ZWQgKSB7XHJcblxyXG5cdFx0XHR2YXIgaW5kZXhPZmZzZXQgPSAwO1xyXG5cdFx0XHR2YXIgbWVyZ2VkSW5kZXggPSBbXTtcclxuXHJcblx0XHRcdGZvciAoIHZhciBpID0gMDsgaSA8IGdlb21ldHJpZXMubGVuZ3RoOyArKyBpICkge1xyXG5cclxuXHRcdFx0XHR2YXIgaW5kZXggPSBnZW9tZXRyaWVzWyBpIF0uaW5kZXg7XHJcblxyXG5cdFx0XHRcdGZvciAoIHZhciBqID0gMDsgaiA8IGluZGV4LmNvdW50OyArKyBqICkge1xyXG5cclxuXHRcdFx0XHRcdG1lcmdlZEluZGV4LnB1c2goIGluZGV4LmdldFgoIGogKSArIGluZGV4T2Zmc2V0ICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aW5kZXhPZmZzZXQgKz0gZ2VvbWV0cmllc1sgaSBdLmF0dHJpYnV0ZXMucG9zaXRpb24uY291bnQ7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtZXJnZWRHZW9tZXRyeS5zZXRJbmRleCggbWVyZ2VkSW5kZXggKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbWVyZ2UgYXR0cmlidXRlc1xyXG5cclxuXHRcdGZvciAoIHZhciBuYW1lIGluIGF0dHJpYnV0ZXMgKSB7XHJcblxyXG5cdFx0XHR2YXIgbWVyZ2VkQXR0cmlidXRlID0gdGhpcy5tZXJnZUJ1ZmZlckF0dHJpYnV0ZXMoIGF0dHJpYnV0ZXNbIG5hbWUgXSApO1xyXG5cclxuXHRcdFx0aWYgKCAhIG1lcmdlZEF0dHJpYnV0ZSApIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUJ1ZmZlckdlb21ldHJpZXMoKSBmYWlsZWQgd2hpbGUgdHJ5aW5nIHRvIG1lcmdlIHRoZSAnICsgbmFtZSArICcgYXR0cmlidXRlLicgKTtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1lcmdlZEdlb21ldHJ5LnNldEF0dHJpYnV0ZSggbmFtZSwgbWVyZ2VkQXR0cmlidXRlICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG1lcmdlIG1vcnBoIGF0dHJpYnV0ZXNcclxuXHJcblx0XHRmb3IgKCB2YXIgbmFtZSBpbiBtb3JwaEF0dHJpYnV0ZXMgKSB7XHJcblxyXG5cdFx0XHR2YXIgbnVtTW9ycGhUYXJnZXRzID0gbW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF1bIDAgXS5sZW5ndGg7XHJcblxyXG5cdFx0XHRpZiAoIG51bU1vcnBoVGFyZ2V0cyA9PT0gMCApIGJyZWFrO1xyXG5cclxuXHRcdFx0bWVyZ2VkR2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzID0gbWVyZ2VkR2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzIHx8IHt9O1xyXG5cdFx0XHRtZXJnZWRHZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXSA9IFtdO1xyXG5cclxuXHRcdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgbnVtTW9ycGhUYXJnZXRzOyArKyBpICkge1xyXG5cclxuXHRcdFx0XHR2YXIgbW9ycGhBdHRyaWJ1dGVzVG9NZXJnZSA9IFtdO1xyXG5cclxuXHRcdFx0XHRmb3IgKCB2YXIgaiA9IDA7IGogPCBtb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXS5sZW5ndGg7ICsrIGogKSB7XHJcblxyXG5cdFx0XHRcdFx0bW9ycGhBdHRyaWJ1dGVzVG9NZXJnZS5wdXNoKCBtb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXVsgaiBdWyBpIF0gKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgbWVyZ2VkTW9ycGhBdHRyaWJ1dGUgPSB0aGlzLm1lcmdlQnVmZmVyQXR0cmlidXRlcyggbW9ycGhBdHRyaWJ1dGVzVG9NZXJnZSApO1xyXG5cclxuXHRcdFx0XHRpZiAoICEgbWVyZ2VkTW9ycGhBdHRyaWJ1dGUgKSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUJ1ZmZlckdlb21ldHJpZXMoKSBmYWlsZWQgd2hpbGUgdHJ5aW5nIHRvIG1lcmdlIHRoZSAnICsgbmFtZSArICcgbW9ycGhBdHRyaWJ1dGUuJyApO1xyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bWVyZ2VkR2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF0ucHVzaCggbWVyZ2VkTW9ycGhBdHRyaWJ1dGUgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG1lcmdlZEdlb21ldHJ5O1xyXG5cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge0FycmF5PEJ1ZmZlckF0dHJpYnV0ZT59IGF0dHJpYnV0ZXNcclxuXHQgKiBAcmV0dXJuIHtCdWZmZXJBdHRyaWJ1dGV9XHJcblx0ICovXHJcblx0bWVyZ2VCdWZmZXJBdHRyaWJ1dGVzOiBmdW5jdGlvbiAoIGF0dHJpYnV0ZXMgKSB7XHJcblxyXG5cdFx0dmFyIFR5cGVkQXJyYXk7XHJcblx0XHR2YXIgaXRlbVNpemU7XHJcblx0XHR2YXIgbm9ybWFsaXplZDtcclxuXHRcdHZhciBhcnJheUxlbmd0aCA9IDA7XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7ICsrIGkgKSB7XHJcblxyXG5cdFx0XHR2YXIgYXR0cmlidXRlID0gYXR0cmlidXRlc1sgaSBdO1xyXG5cclxuXHRcdFx0aWYgKCBhdHRyaWJ1dGUuaXNJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSApIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUJ1ZmZlckF0dHJpYnV0ZXMoKSBmYWlsZWQuIEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlcyBhcmUgbm90IHN1cHBvcnRlZC4nICk7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIFR5cGVkQXJyYXkgPT09IHVuZGVmaW5lZCApIFR5cGVkQXJyYXkgPSBhdHRyaWJ1dGUuYXJyYXkuY29uc3RydWN0b3I7XHJcblx0XHRcdGlmICggVHlwZWRBcnJheSAhPT0gYXR0cmlidXRlLmFycmF5LmNvbnN0cnVjdG9yICkge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyQXR0cmlidXRlcygpIGZhaWxlZC4gQnVmZmVyQXR0cmlidXRlLmFycmF5IG11c3QgYmUgb2YgY29uc2lzdGVudCBhcnJheSB0eXBlcyBhY3Jvc3MgbWF0Y2hpbmcgYXR0cmlidXRlcy4nICk7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGl0ZW1TaXplID09PSB1bmRlZmluZWQgKSBpdGVtU2l6ZSA9IGF0dHJpYnV0ZS5pdGVtU2l6ZTtcclxuXHRcdFx0aWYgKCBpdGVtU2l6ZSAhPT0gYXR0cmlidXRlLml0ZW1TaXplICkge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyQXR0cmlidXRlcygpIGZhaWxlZC4gQnVmZmVyQXR0cmlidXRlLml0ZW1TaXplIG11c3QgYmUgY29uc2lzdGVudCBhY3Jvc3MgbWF0Y2hpbmcgYXR0cmlidXRlcy4nICk7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIG5vcm1hbGl6ZWQgPT09IHVuZGVmaW5lZCApIG5vcm1hbGl6ZWQgPSBhdHRyaWJ1dGUubm9ybWFsaXplZDtcclxuXHRcdFx0aWYgKCBub3JtYWxpemVkICE9PSBhdHRyaWJ1dGUubm9ybWFsaXplZCApIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUJ1ZmZlckF0dHJpYnV0ZXMoKSBmYWlsZWQuIEJ1ZmZlckF0dHJpYnV0ZS5ub3JtYWxpemVkIG11c3QgYmUgY29uc2lzdGVudCBhY3Jvc3MgbWF0Y2hpbmcgYXR0cmlidXRlcy4nICk7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhcnJheUxlbmd0aCArPSBhdHRyaWJ1dGUuYXJyYXkubGVuZ3RoO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgYXJyYXkgPSBuZXcgVHlwZWRBcnJheSggYXJyYXlMZW5ndGggKTtcclxuXHRcdHZhciBvZmZzZXQgPSAwO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyArKyBpICkge1xyXG5cclxuXHRcdFx0YXJyYXkuc2V0KCBhdHRyaWJ1dGVzWyBpIF0uYXJyYXksIG9mZnNldCApO1xyXG5cclxuXHRcdFx0b2Zmc2V0ICs9IGF0dHJpYnV0ZXNbIGkgXS5hcnJheS5sZW5ndGg7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBuZXcgQnVmZmVyQXR0cmlidXRlKCBhcnJheSwgaXRlbVNpemUsIG5vcm1hbGl6ZWQgKTtcclxuXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtBcnJheTxCdWZmZXJBdHRyaWJ1dGU+fSBhdHRyaWJ1dGVzXHJcblx0ICogQHJldHVybiB7QXJyYXk8SW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGU+fVxyXG5cdCAqL1xyXG5cdGludGVybGVhdmVBdHRyaWJ1dGVzOiBmdW5jdGlvbiAoIGF0dHJpYnV0ZXMgKSB7XHJcblxyXG5cdFx0Ly8gSW50ZXJsZWF2ZXMgdGhlIHByb3ZpZGVkIGF0dHJpYnV0ZXMgaW50byBhbiBJbnRlcmxlYXZlZEJ1ZmZlciBhbmQgcmV0dXJuc1xyXG5cdFx0Ly8gYSBzZXQgb2YgSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGVzIGZvciBlYWNoIGF0dHJpYnV0ZVxyXG5cdFx0dmFyIFR5cGVkQXJyYXk7XHJcblx0XHR2YXIgYXJyYXlMZW5ndGggPSAwO1xyXG5cdFx0dmFyIHN0cmlkZSA9IDA7XHJcblxyXG5cdFx0Ly8gY2FsY3VsYXRlIHRoZSB0aGUgbGVuZ3RoIGFuZCB0eXBlIG9mIHRoZSBpbnRlcmxlYXZlZEJ1ZmZlclxyXG5cdFx0Zm9yICggdmFyIGkgPSAwLCBsID0gYXR0cmlidXRlcy5sZW5ndGg7IGkgPCBsOyArKyBpICkge1xyXG5cclxuXHRcdFx0dmFyIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNbIGkgXTtcclxuXHJcblx0XHRcdGlmICggVHlwZWRBcnJheSA9PT0gdW5kZWZpbmVkICkgVHlwZWRBcnJheSA9IGF0dHJpYnV0ZS5hcnJheS5jb25zdHJ1Y3RvcjtcclxuXHRcdFx0aWYgKCBUeXBlZEFycmF5ICE9PSBhdHRyaWJ1dGUuYXJyYXkuY29uc3RydWN0b3IgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdBdHRyaWJ1dGVCdWZmZXJzIG9mIGRpZmZlcmVudCB0eXBlcyBjYW5ub3QgYmUgaW50ZXJsZWF2ZWQnICk7XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhcnJheUxlbmd0aCArPSBhdHRyaWJ1dGUuYXJyYXkubGVuZ3RoO1xyXG5cdFx0XHRzdHJpZGUgKz0gYXR0cmlidXRlLml0ZW1TaXplO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBDcmVhdGUgdGhlIHNldCBvZiBidWZmZXIgYXR0cmlidXRlc1xyXG5cdFx0dmFyIGludGVybGVhdmVkQnVmZmVyID0gbmV3IEludGVybGVhdmVkQnVmZmVyKCBuZXcgVHlwZWRBcnJheSggYXJyYXlMZW5ndGggKSwgc3RyaWRlICk7XHJcblx0XHR2YXIgb2Zmc2V0ID0gMDtcclxuXHRcdHZhciByZXMgPSBbXTtcclxuXHRcdHZhciBnZXR0ZXJzID0gWyAnZ2V0WCcsICdnZXRZJywgJ2dldFonLCAnZ2V0VycgXTtcclxuXHRcdHZhciBzZXR0ZXJzID0gWyAnc2V0WCcsICdzZXRZJywgJ3NldFonLCAnc2V0VycgXTtcclxuXHJcblx0XHRmb3IgKCB2YXIgaiA9IDAsIGwgPSBhdHRyaWJ1dGVzLmxlbmd0aDsgaiA8IGw7IGogKysgKSB7XHJcblxyXG5cdFx0XHR2YXIgYXR0cmlidXRlID0gYXR0cmlidXRlc1sgaiBdO1xyXG5cdFx0XHR2YXIgaXRlbVNpemUgPSBhdHRyaWJ1dGUuaXRlbVNpemU7XHJcblx0XHRcdHZhciBjb3VudCA9IGF0dHJpYnV0ZS5jb3VudDtcclxuXHRcdFx0dmFyIGliYSA9IG5ldyBJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSggaW50ZXJsZWF2ZWRCdWZmZXIsIGl0ZW1TaXplLCBvZmZzZXQsIGF0dHJpYnV0ZS5ub3JtYWxpemVkICk7XHJcblx0XHRcdHJlcy5wdXNoKCBpYmEgKTtcclxuXHJcblx0XHRcdG9mZnNldCArPSBpdGVtU2l6ZTtcclxuXHJcblx0XHRcdC8vIE1vdmUgdGhlIGRhdGEgZm9yIGVhY2ggYXR0cmlidXRlIGludG8gdGhlIG5ldyBpbnRlcmxlYXZlZEJ1ZmZlclxyXG5cdFx0XHQvLyBhdCB0aGUgYXBwcm9wcmlhdGUgb2Zmc2V0XHJcblx0XHRcdGZvciAoIHZhciBjID0gMDsgYyA8IGNvdW50OyBjICsrICkge1xyXG5cclxuXHRcdFx0XHRmb3IgKCB2YXIgayA9IDA7IGsgPCBpdGVtU2l6ZTsgayArKyApIHtcclxuXHJcblx0XHRcdFx0XHRpYmFbIHNldHRlcnNbIGsgXSBdKCBjLCBhdHRyaWJ1dGVbIGdldHRlcnNbIGsgXSBdKCBjICkgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge0FycmF5PEJ1ZmZlckdlb21ldHJ5Pn0gZ2VvbWV0cnlcclxuXHQgKiBAcmV0dXJuIHtudW1iZXJ9XHJcblx0ICovXHJcblx0ZXN0aW1hdGVCeXRlc1VzZWQ6IGZ1bmN0aW9uICggZ2VvbWV0cnkgKSB7XHJcblxyXG5cdFx0Ly8gUmV0dXJuIHRoZSBlc3RpbWF0ZWQgbWVtb3J5IHVzZWQgYnkgdGhpcyBnZW9tZXRyeSBpbiBieXRlc1xyXG5cdFx0Ly8gQ2FsY3VsYXRlIHVzaW5nIGl0ZW1TaXplLCBjb3VudCwgYW5kIEJZVEVTX1BFUl9FTEVNRU5UIHRvIGFjY291bnRcclxuXHRcdC8vIGZvciBJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZXMuXHJcblx0XHR2YXIgbWVtID0gMDtcclxuXHRcdGZvciAoIHZhciBuYW1lIGluIGdlb21ldHJ5LmF0dHJpYnV0ZXMgKSB7XHJcblxyXG5cdFx0XHR2YXIgYXR0ciA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSggbmFtZSApO1xyXG5cdFx0XHRtZW0gKz0gYXR0ci5jb3VudCAqIGF0dHIuaXRlbVNpemUgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5UO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgaW5kaWNlcyA9IGdlb21ldHJ5LmdldEluZGV4KCk7XHJcblx0XHRtZW0gKz0gaW5kaWNlcyA/IGluZGljZXMuY291bnQgKiBpbmRpY2VzLml0ZW1TaXplICogaW5kaWNlcy5hcnJheS5CWVRFU19QRVJfRUxFTUVOVCA6IDA7XHJcblx0XHRyZXR1cm4gbWVtO1xyXG5cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge0J1ZmZlckdlb21ldHJ5fSBnZW9tZXRyeVxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0b2xlcmFuY2VcclxuXHQgKiBAcmV0dXJuIHtCdWZmZXJHZW9tZXRyeT59XHJcblx0ICovXHJcblx0bWVyZ2VWZXJ0aWNlczogZnVuY3Rpb24gKCBnZW9tZXRyeSwgdG9sZXJhbmNlID0gMWUtNCApIHtcclxuXHJcblx0XHR0b2xlcmFuY2UgPSBNYXRoLm1heCggdG9sZXJhbmNlLCBOdW1iZXIuRVBTSUxPTiApO1xyXG5cclxuXHRcdC8vIEdlbmVyYXRlIGFuIGluZGV4IGJ1ZmZlciBpZiB0aGUgZ2VvbWV0cnkgZG9lc24ndCBoYXZlIG9uZSwgb3Igb3B0aW1pemUgaXRcclxuXHRcdC8vIGlmIGl0J3MgYWxyZWFkeSBhdmFpbGFibGUuXHJcblx0XHR2YXIgaGFzaFRvSW5kZXggPSB7fTtcclxuXHRcdHZhciBpbmRpY2VzID0gZ2VvbWV0cnkuZ2V0SW5kZXgoKTtcclxuXHRcdHZhciBwb3NpdGlvbnMgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoICdwb3NpdGlvbicgKTtcclxuXHRcdHZhciB2ZXJ0ZXhDb3VudCA9IGluZGljZXMgPyBpbmRpY2VzLmNvdW50IDogcG9zaXRpb25zLmNvdW50O1xyXG5cclxuXHRcdC8vIG5leHQgdmFsdWUgZm9yIHRyaWFuZ2xlIGluZGljZXNcclxuXHRcdHZhciBuZXh0SW5kZXggPSAwO1xyXG5cclxuXHRcdC8vIGF0dHJpYnV0ZXMgYW5kIG5ldyBhdHRyaWJ1dGUgYXJyYXlzXHJcblx0XHR2YXIgYXR0cmlidXRlTmFtZXMgPSBPYmplY3Qua2V5cyggZ2VvbWV0cnkuYXR0cmlidXRlcyApO1xyXG5cdFx0dmFyIGF0dHJBcnJheXMgPSB7fTtcclxuXHRcdHZhciBtb3JwaEF0dHJzQXJyYXlzID0ge307XHJcblx0XHR2YXIgbmV3SW5kaWNlcyA9IFtdO1xyXG5cdFx0dmFyIGdldHRlcnMgPSBbICdnZXRYJywgJ2dldFknLCAnZ2V0WicsICdnZXRXJyBdO1xyXG5cclxuXHRcdC8vIGluaXRpYWxpemUgdGhlIGFycmF5c1xyXG5cdFx0Zm9yICggdmFyIGkgPSAwLCBsID0gYXR0cmlidXRlTmFtZXMubGVuZ3RoOyBpIDwgbDsgaSArKyApIHtcclxuXHJcblx0XHRcdHZhciBuYW1lID0gYXR0cmlidXRlTmFtZXNbIGkgXTtcclxuXHJcblx0XHRcdGF0dHJBcnJheXNbIG5hbWUgXSA9IFtdO1xyXG5cclxuXHRcdFx0dmFyIG1vcnBoQXR0ciA9IGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlc1sgbmFtZSBdO1xyXG5cdFx0XHRpZiAoIG1vcnBoQXR0ciApIHtcclxuXHJcblx0XHRcdFx0bW9ycGhBdHRyc0FycmF5c1sgbmFtZSBdID0gbmV3IEFycmF5KCBtb3JwaEF0dHIubGVuZ3RoICkuZmlsbCgpLm1hcCggKCkgPT4gW10gKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY29udmVydCB0aGUgZXJyb3IgdG9sZXJhbmNlIHRvIGFuIGFtb3VudCBvZiBkZWNpbWFsIHBsYWNlcyB0byB0cnVuY2F0ZSB0b1xyXG5cdFx0dmFyIGRlY2ltYWxTaGlmdCA9IE1hdGgubG9nMTAoIDEgLyB0b2xlcmFuY2UgKTtcclxuXHRcdHZhciBzaGlmdE11bHRpcGxpZXIgPSBNYXRoLnBvdyggMTAsIGRlY2ltYWxTaGlmdCApO1xyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkgKysgKSB7XHJcblxyXG5cdFx0XHR2YXIgaW5kZXggPSBpbmRpY2VzID8gaW5kaWNlcy5nZXRYKCBpICkgOiBpO1xyXG5cclxuXHRcdFx0Ly8gR2VuZXJhdGUgYSBoYXNoIGZvciB0aGUgdmVydGV4IGF0dHJpYnV0ZXMgYXQgdGhlIGN1cnJlbnQgaW5kZXggJ2knXHJcblx0XHRcdHZhciBoYXNoID0gJyc7XHJcblx0XHRcdGZvciAoIHZhciBqID0gMCwgbCA9IGF0dHJpYnV0ZU5hbWVzLmxlbmd0aDsgaiA8IGw7IGogKysgKSB7XHJcblxyXG5cdFx0XHRcdHZhciBuYW1lID0gYXR0cmlidXRlTmFtZXNbIGogXTtcclxuXHRcdFx0XHR2YXIgYXR0cmlidXRlID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCBuYW1lICk7XHJcblx0XHRcdFx0dmFyIGl0ZW1TaXplID0gYXR0cmlidXRlLml0ZW1TaXplO1xyXG5cclxuXHRcdFx0XHRmb3IgKCB2YXIgayA9IDA7IGsgPCBpdGVtU2l6ZTsgayArKyApIHtcclxuXHJcblx0XHRcdFx0XHQvLyBkb3VibGUgdGlsZGUgdHJ1bmNhdGVzIHRoZSBkZWNpbWFsIHZhbHVlXHJcblx0XHRcdFx0XHRoYXNoICs9IGAkeyB+IH4gKCBhdHRyaWJ1dGVbIGdldHRlcnNbIGsgXSBdKCBpbmRleCApICogc2hpZnRNdWx0aXBsaWVyICkgfSxgO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBBZGQgYW5vdGhlciByZWZlcmVuY2UgdG8gdGhlIHZlcnRleCBpZiBpdCdzIGFscmVhZHlcclxuXHRcdFx0Ly8gdXNlZCBieSBhbm90aGVyIGluZGV4XHJcblx0XHRcdGlmICggaGFzaCBpbiBoYXNoVG9JbmRleCApIHtcclxuXHJcblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBoYXNoVG9JbmRleFsgaGFzaCBdICk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHQvLyBjb3B5IGRhdGEgdG8gdGhlIG5ldyBpbmRleCBpbiB0aGUgYXR0cmlidXRlIGFycmF5c1xyXG5cdFx0XHRcdGZvciAoIHZhciBqID0gMCwgbCA9IGF0dHJpYnV0ZU5hbWVzLmxlbmd0aDsgaiA8IGw7IGogKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIG5hbWUgPSBhdHRyaWJ1dGVOYW1lc1sgaiBdO1xyXG5cdFx0XHRcdFx0dmFyIGF0dHJpYnV0ZSA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSggbmFtZSApO1xyXG5cdFx0XHRcdFx0dmFyIG1vcnBoQXR0ciA9IGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlc1sgbmFtZSBdO1xyXG5cdFx0XHRcdFx0dmFyIGl0ZW1TaXplID0gYXR0cmlidXRlLml0ZW1TaXplO1xyXG5cdFx0XHRcdFx0dmFyIG5ld2FycmF5ID0gYXR0ckFycmF5c1sgbmFtZSBdO1xyXG5cdFx0XHRcdFx0dmFyIG5ld01vcnBoQXJyYXlzID0gbW9ycGhBdHRyc0FycmF5c1sgbmFtZSBdO1xyXG5cclxuXHRcdFx0XHRcdGZvciAoIHZhciBrID0gMDsgayA8IGl0ZW1TaXplOyBrICsrICkge1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIGdldHRlckZ1bmMgPSBnZXR0ZXJzWyBrIF07XHJcblx0XHRcdFx0XHRcdG5ld2FycmF5LnB1c2goIGF0dHJpYnV0ZVsgZ2V0dGVyRnVuYyBdKCBpbmRleCApICk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIG1vcnBoQXR0ciApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Zm9yICggdmFyIG0gPSAwLCBtbCA9IG1vcnBoQXR0ci5sZW5ndGg7IG0gPCBtbDsgbSArKyApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRuZXdNb3JwaEFycmF5c1sgbSBdLnB1c2goIG1vcnBoQXR0clsgbSBdWyBnZXR0ZXJGdW5jIF0oIGluZGV4ICkgKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRoYXNoVG9JbmRleFsgaGFzaCBdID0gbmV4dEluZGV4O1xyXG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggbmV4dEluZGV4ICk7XHJcblx0XHRcdFx0bmV4dEluZGV4ICsrO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBHZW5lcmF0ZSB0eXBlZCBhcnJheXMgZnJvbSBuZXcgYXR0cmlidXRlIGFycmF5cyBhbmQgdXBkYXRlXHJcblx0XHQvLyB0aGUgYXR0cmlidXRlQnVmZmVyc1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gZ2VvbWV0cnkuY2xvbmUoKTtcclxuXHRcdGZvciAoIHZhciBpID0gMCwgbCA9IGF0dHJpYnV0ZU5hbWVzLmxlbmd0aDsgaSA8IGw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHR2YXIgbmFtZSA9IGF0dHJpYnV0ZU5hbWVzWyBpIF07XHJcblx0XHRcdHZhciBvbGRBdHRyaWJ1dGUgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoIG5hbWUgKTtcclxuXHJcblx0XHRcdHZhciBidWZmZXIgPSBuZXcgb2xkQXR0cmlidXRlLmFycmF5LmNvbnN0cnVjdG9yKCBhdHRyQXJyYXlzWyBuYW1lIF0gKTtcclxuXHRcdFx0dmFyIGF0dHJpYnV0ZSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoIGJ1ZmZlciwgb2xkQXR0cmlidXRlLml0ZW1TaXplLCBvbGRBdHRyaWJ1dGUubm9ybWFsaXplZCApO1xyXG5cclxuXHRcdFx0cmVzdWx0LnNldEF0dHJpYnV0ZSggbmFtZSwgYXR0cmlidXRlICk7XHJcblxyXG5cdFx0XHQvLyBVcGRhdGUgdGhlIGF0dHJpYnV0ZSBhcnJheXNcclxuXHRcdFx0aWYgKCBuYW1lIGluIG1vcnBoQXR0cnNBcnJheXMgKSB7XHJcblxyXG5cdFx0XHRcdGZvciAoIHZhciBqID0gMDsgaiA8IG1vcnBoQXR0cnNBcnJheXNbIG5hbWUgXS5sZW5ndGg7IGogKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIG9sZE1vcnBoQXR0cmlidXRlID0gZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF1bIGogXTtcclxuXHJcblx0XHRcdFx0XHR2YXIgYnVmZmVyID0gbmV3IG9sZE1vcnBoQXR0cmlidXRlLmFycmF5LmNvbnN0cnVjdG9yKCBtb3JwaEF0dHJzQXJyYXlzWyBuYW1lIF1bIGogXSApO1xyXG5cdFx0XHRcdFx0dmFyIG1vcnBoQXR0cmlidXRlID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZSggYnVmZmVyLCBvbGRNb3JwaEF0dHJpYnV0ZS5pdGVtU2l6ZSwgb2xkTW9ycGhBdHRyaWJ1dGUubm9ybWFsaXplZCApO1xyXG5cdFx0XHRcdFx0cmVzdWx0Lm1vcnBoQXR0cmlidXRlc1sgbmFtZSBdWyBqIF0gPSBtb3JwaEF0dHJpYnV0ZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBpbmRpY2VzXHJcblxyXG5cdFx0cmVzdWx0LnNldEluZGV4KCBuZXdJbmRpY2VzICk7XHJcblxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gZHJhd01vZGVcclxuXHQgKiBAcmV0dXJuIHtCdWZmZXJHZW9tZXRyeT59XHJcblx0ICovXHJcblx0dG9UcmlhbmdsZXNEcmF3TW9kZTogZnVuY3Rpb24gKCBnZW9tZXRyeSwgZHJhd01vZGUgKSB7XHJcblxyXG5cdFx0aWYgKCBkcmF3TW9kZSA9PT0gVHJpYW5nbGVzRHJhd01vZGUgKSB7XHJcblxyXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzLnRvVHJpYW5nbGVzRHJhd01vZGUoKTogR2VvbWV0cnkgYWxyZWFkeSBkZWZpbmVkIGFzIHRyaWFuZ2xlcy4nICk7XHJcblx0XHRcdHJldHVybiBnZW9tZXRyeTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBkcmF3TW9kZSA9PT0gVHJpYW5nbGVGYW5EcmF3TW9kZSB8fCBkcmF3TW9kZSA9PT0gVHJpYW5nbGVTdHJpcERyYXdNb2RlICkge1xyXG5cclxuXHRcdFx0dmFyIGluZGV4ID0gZ2VvbWV0cnkuZ2V0SW5kZXgoKTtcclxuXHJcblx0XHRcdC8vIGdlbmVyYXRlIGluZGV4IGlmIG5vdCBwcmVzZW50XHJcblxyXG5cdFx0XHRpZiAoIGluZGV4ID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHR2YXIgaW5kaWNlcyA9IFtdO1xyXG5cclxuXHRcdFx0XHR2YXIgcG9zaXRpb24gPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoICdwb3NpdGlvbicgKTtcclxuXHJcblx0XHRcdFx0aWYgKCBwb3NpdGlvbiAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHBvc2l0aW9uLmNvdW50OyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRcdFx0aW5kaWNlcy5wdXNoKCBpICk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGdlb21ldHJ5LnNldEluZGV4KCBpbmRpY2VzICk7XHJcblx0XHRcdFx0XHRpbmRleCA9IGdlb21ldHJ5LmdldEluZGV4KCk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHMudG9UcmlhbmdsZXNEcmF3TW9kZSgpOiBVbmRlZmluZWQgcG9zaXRpb24gYXR0cmlidXRlLiBQcm9jZXNzaW5nIG5vdCBwb3NzaWJsZS4nICk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZ2VvbWV0cnk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vXHJcblxyXG5cdFx0XHR2YXIgbnVtYmVyT2ZUcmlhbmdsZXMgPSBpbmRleC5jb3VudCAtIDI7XHJcblx0XHRcdHZhciBuZXdJbmRpY2VzID0gW107XHJcblxyXG5cdFx0XHRpZiAoIGRyYXdNb2RlID09PSBUcmlhbmdsZUZhbkRyYXdNb2RlICkge1xyXG5cclxuXHRcdFx0XHQvLyBnbC5UUklBTkdMRV9GQU5cclxuXHJcblx0XHRcdFx0Zm9yICggdmFyIGkgPSAxOyBpIDw9IG51bWJlck9mVHJpYW5nbGVzOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggMCApICk7XHJcblx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKSApO1xyXG5cdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMSApICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdC8vIGdsLlRSSUFOR0xFX1NUUklQXHJcblxyXG5cdFx0XHRcdGZvciAoIHZhciBpID0gMDsgaSA8IG51bWJlck9mVHJpYW5nbGVzOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRcdGlmICggaSAlIDIgPT09IDAgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKSApO1xyXG5cdFx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAxICkgKTtcclxuXHRcdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMiApICk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDIgKSApO1xyXG5cdFx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAxICkgKTtcclxuXHRcdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICkgKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggKCBuZXdJbmRpY2VzLmxlbmd0aCAvIDMgKSAhPT0gbnVtYmVyT2ZUcmlhbmdsZXMgKSB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzLnRvVHJpYW5nbGVzRHJhd01vZGUoKTogVW5hYmxlIHRvIGdlbmVyYXRlIGNvcnJlY3QgYW1vdW50IG9mIHRyaWFuZ2xlcy4nICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBidWlsZCBmaW5hbCBnZW9tZXRyeVxyXG5cclxuXHRcdFx0dmFyIG5ld0dlb21ldHJ5ID0gZ2VvbWV0cnkuY2xvbmUoKTtcclxuXHRcdFx0bmV3R2VvbWV0cnkuc2V0SW5kZXgoIG5ld0luZGljZXMgKTtcclxuXHRcdFx0bmV3R2VvbWV0cnkuY2xlYXJHcm91cHMoKTtcclxuXHJcblx0XHRcdHJldHVybiBuZXdHZW9tZXRyeTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHMudG9UcmlhbmdsZXNEcmF3TW9kZSgpOiBVbmtub3duIGRyYXcgbW9kZTonLCBkcmF3TW9kZSApO1xyXG5cdFx0XHRyZXR1cm4gZ2VvbWV0cnk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBDYWxjdWxhdGVzIHRoZSBtb3JwaGVkIGF0dHJpYnV0ZXMgb2YgYSBtb3JwaGVkL3NraW5uZWQgQnVmZmVyR2VvbWV0cnkuXHJcblx0ICogSGVscGZ1bCBmb3IgUmF5dHJhY2luZyBvciBEZWNhbHMuXHJcblx0ICogQHBhcmFtIHtNZXNoIHwgTGluZSB8IFBvaW50c30gb2JqZWN0IEFuIGluc3RhbmNlIG9mIE1lc2gsIExpbmUgb3IgUG9pbnRzLlxyXG5cdCAqIEByZXR1cm4ge09iamVjdH0gQW4gT2JqZWN0IHdpdGggb3JpZ2luYWwgcG9zaXRpb24vbm9ybWFsIGF0dHJpYnV0ZXMgYW5kIG1vcnBoZWQgb25lcy5cclxuXHQgKi9cclxuXHRjb21wdXRlTW9ycGhlZEF0dHJpYnV0ZXM6IGZ1bmN0aW9uICggb2JqZWN0ICkge1xyXG5cclxuXHRcdGlmICggb2JqZWN0Lmdlb21ldHJ5LmlzQnVmZmVyR2VvbWV0cnkgIT09IHRydWUgKSB7XHJcblxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogR2VvbWV0cnkgaXMgbm90IG9mIHR5cGUgQnVmZmVyR2VvbWV0cnkuJyApO1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIF92QSA9IG5ldyBWZWN0b3IzKCk7XHJcblx0XHR2YXIgX3ZCID0gbmV3IFZlY3RvcjMoKTtcclxuXHRcdHZhciBfdkMgPSBuZXcgVmVjdG9yMygpO1xyXG5cclxuXHRcdHZhciBfdGVtcEEgPSBuZXcgVmVjdG9yMygpO1xyXG5cdFx0dmFyIF90ZW1wQiA9IG5ldyBWZWN0b3IzKCk7XHJcblx0XHR2YXIgX3RlbXBDID0gbmV3IFZlY3RvcjMoKTtcclxuXHJcblx0XHR2YXIgX21vcnBoQSA9IG5ldyBWZWN0b3IzKCk7XHJcblx0XHR2YXIgX21vcnBoQiA9IG5ldyBWZWN0b3IzKCk7XHJcblx0XHR2YXIgX21vcnBoQyA9IG5ldyBWZWN0b3IzKCk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gX2NhbGN1bGF0ZU1vcnBoZWRBdHRyaWJ1dGVEYXRhKFxyXG5cdFx0XHRvYmplY3QsXHJcblx0XHRcdG1hdGVyaWFsLFxyXG5cdFx0XHRhdHRyaWJ1dGUsXHJcblx0XHRcdG1vcnBoQXR0cmlidXRlLFxyXG5cdFx0XHRtb3JwaFRhcmdldHNSZWxhdGl2ZSxcclxuXHRcdFx0YSxcclxuXHRcdFx0YixcclxuXHRcdFx0YyxcclxuXHRcdFx0bW9kaWZpZWRBdHRyaWJ1dGVBcnJheVxyXG5cdFx0KSB7XHJcblxyXG5cdFx0XHRfdkEuZnJvbUJ1ZmZlckF0dHJpYnV0ZSggYXR0cmlidXRlLCBhICk7XHJcblx0XHRcdF92Qi5mcm9tQnVmZmVyQXR0cmlidXRlKCBhdHRyaWJ1dGUsIGIgKTtcclxuXHRcdFx0X3ZDLmZyb21CdWZmZXJBdHRyaWJ1dGUoIGF0dHJpYnV0ZSwgYyApO1xyXG5cclxuXHRcdFx0dmFyIG1vcnBoSW5mbHVlbmNlcyA9IG9iamVjdC5tb3JwaFRhcmdldEluZmx1ZW5jZXM7XHJcblxyXG5cdFx0XHRpZiAoIG1hdGVyaWFsLm1vcnBoVGFyZ2V0cyAmJiBtb3JwaEF0dHJpYnV0ZSAmJiBtb3JwaEluZmx1ZW5jZXMgKSB7XHJcblxyXG5cdFx0XHRcdF9tb3JwaEEuc2V0KCAwLCAwLCAwICk7XHJcblx0XHRcdFx0X21vcnBoQi5zZXQoIDAsIDAsIDAgKTtcclxuXHRcdFx0XHRfbW9ycGhDLnNldCggMCwgMCwgMCApO1xyXG5cclxuXHRcdFx0XHRmb3IgKCB2YXIgaSA9IDAsIGlsID0gbW9ycGhBdHRyaWJ1dGUubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGluZmx1ZW5jZSA9IG1vcnBoSW5mbHVlbmNlc1sgaSBdO1xyXG5cdFx0XHRcdFx0dmFyIG1vcnBoID0gbW9ycGhBdHRyaWJ1dGVbIGkgXTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGluZmx1ZW5jZSA9PT0gMCApIGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRcdF90ZW1wQS5mcm9tQnVmZmVyQXR0cmlidXRlKCBtb3JwaCwgYSApO1xyXG5cdFx0XHRcdFx0X3RlbXBCLmZyb21CdWZmZXJBdHRyaWJ1dGUoIG1vcnBoLCBiICk7XHJcblx0XHRcdFx0XHRfdGVtcEMuZnJvbUJ1ZmZlckF0dHJpYnV0ZSggbW9ycGgsIGMgKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIG1vcnBoVGFyZ2V0c1JlbGF0aXZlICkge1xyXG5cclxuXHRcdFx0XHRcdFx0X21vcnBoQS5hZGRTY2FsZWRWZWN0b3IoIF90ZW1wQSwgaW5mbHVlbmNlICk7XHJcblx0XHRcdFx0XHRcdF9tb3JwaEIuYWRkU2NhbGVkVmVjdG9yKCBfdGVtcEIsIGluZmx1ZW5jZSApO1xyXG5cdFx0XHRcdFx0XHRfbW9ycGhDLmFkZFNjYWxlZFZlY3RvciggX3RlbXBDLCBpbmZsdWVuY2UgKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0X21vcnBoQS5hZGRTY2FsZWRWZWN0b3IoIF90ZW1wQS5zdWIoIF92QSApLCBpbmZsdWVuY2UgKTtcclxuXHRcdFx0XHRcdFx0X21vcnBoQi5hZGRTY2FsZWRWZWN0b3IoIF90ZW1wQi5zdWIoIF92QiApLCBpbmZsdWVuY2UgKTtcclxuXHRcdFx0XHRcdFx0X21vcnBoQy5hZGRTY2FsZWRWZWN0b3IoIF90ZW1wQy5zdWIoIF92QyApLCBpbmZsdWVuY2UgKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0X3ZBLmFkZCggX21vcnBoQSApO1xyXG5cdFx0XHRcdF92Qi5hZGQoIF9tb3JwaEIgKTtcclxuXHRcdFx0XHRfdkMuYWRkKCBfbW9ycGhDICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIG9iamVjdC5pc1NraW5uZWRNZXNoICkge1xyXG5cclxuXHRcdFx0XHRvYmplY3QuYm9uZVRyYW5zZm9ybSggYSwgX3ZBICk7XHJcblx0XHRcdFx0b2JqZWN0LmJvbmVUcmFuc2Zvcm0oIGIsIF92QiApO1xyXG5cdFx0XHRcdG9iamVjdC5ib25lVHJhbnNmb3JtKCBjLCBfdkMgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1vZGlmaWVkQXR0cmlidXRlQXJyYXlbIGEgKiAzICsgMCBdID0gX3ZBLng7XHJcblx0XHRcdG1vZGlmaWVkQXR0cmlidXRlQXJyYXlbIGEgKiAzICsgMSBdID0gX3ZBLnk7XHJcblx0XHRcdG1vZGlmaWVkQXR0cmlidXRlQXJyYXlbIGEgKiAzICsgMiBdID0gX3ZBLno7XHJcblx0XHRcdG1vZGlmaWVkQXR0cmlidXRlQXJyYXlbIGIgKiAzICsgMCBdID0gX3ZCLng7XHJcblx0XHRcdG1vZGlmaWVkQXR0cmlidXRlQXJyYXlbIGIgKiAzICsgMSBdID0gX3ZCLnk7XHJcblx0XHRcdG1vZGlmaWVkQXR0cmlidXRlQXJyYXlbIGIgKiAzICsgMiBdID0gX3ZCLno7XHJcblx0XHRcdG1vZGlmaWVkQXR0cmlidXRlQXJyYXlbIGMgKiAzICsgMCBdID0gX3ZDLng7XHJcblx0XHRcdG1vZGlmaWVkQXR0cmlidXRlQXJyYXlbIGMgKiAzICsgMSBdID0gX3ZDLnk7XHJcblx0XHRcdG1vZGlmaWVkQXR0cmlidXRlQXJyYXlbIGMgKiAzICsgMiBdID0gX3ZDLno7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBnZW9tZXRyeSA9IG9iamVjdC5nZW9tZXRyeTtcclxuXHRcdHZhciBtYXRlcmlhbCA9IG9iamVjdC5tYXRlcmlhbDtcclxuXHJcblx0XHR2YXIgYSwgYiwgYztcclxuXHRcdHZhciBpbmRleCA9IGdlb21ldHJ5LmluZGV4O1xyXG5cdFx0dmFyIHBvc2l0aW9uQXR0cmlidXRlID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbjtcclxuXHRcdHZhciBtb3JwaFBvc2l0aW9uID0gZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLnBvc2l0aW9uO1xyXG5cdFx0dmFyIG1vcnBoVGFyZ2V0c1JlbGF0aXZlID0gZ2VvbWV0cnkubW9ycGhUYXJnZXRzUmVsYXRpdmU7XHJcblx0XHR2YXIgbm9ybWFsQXR0cmlidXRlID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5ub3JtYWw7XHJcblx0XHR2YXIgbW9ycGhOb3JtYWwgPSBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMucG9zaXRpb247XHJcblxyXG5cdFx0dmFyIGdyb3VwcyA9IGdlb21ldHJ5Lmdyb3VwcztcclxuXHRcdHZhciBkcmF3UmFuZ2UgPSBnZW9tZXRyeS5kcmF3UmFuZ2U7XHJcblx0XHR2YXIgaSwgaiwgaWwsIGpsO1xyXG5cdFx0dmFyIGdyb3VwLCBncm91cE1hdGVyaWFsO1xyXG5cdFx0dmFyIHN0YXJ0LCBlbmQ7XHJcblxyXG5cdFx0dmFyIG1vZGlmaWVkUG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KCBwb3NpdGlvbkF0dHJpYnV0ZS5jb3VudCAqIHBvc2l0aW9uQXR0cmlidXRlLml0ZW1TaXplICk7XHJcblx0XHR2YXIgbW9kaWZpZWROb3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KCBub3JtYWxBdHRyaWJ1dGUuY291bnQgKiBub3JtYWxBdHRyaWJ1dGUuaXRlbVNpemUgKTtcclxuXHJcblx0XHRpZiAoIGluZGV4ICE9PSBudWxsICkge1xyXG5cclxuXHRcdFx0Ly8gaW5kZXhlZCBidWZmZXIgZ2VvbWV0cnlcclxuXHJcblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggbWF0ZXJpYWwgKSApIHtcclxuXHJcblx0XHRcdFx0Zm9yICggaSA9IDAsIGlsID0gZ3JvdXBzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRcdGdyb3VwID0gZ3JvdXBzWyBpIF07XHJcblx0XHRcdFx0XHRncm91cE1hdGVyaWFsID0gbWF0ZXJpYWxbIGdyb3VwLm1hdGVyaWFsSW5kZXggXTtcclxuXHJcblx0XHRcdFx0XHRzdGFydCA9IE1hdGgubWF4KCBncm91cC5zdGFydCwgZHJhd1JhbmdlLnN0YXJ0ICk7XHJcblx0XHRcdFx0XHRlbmQgPSBNYXRoLm1pbiggKCBncm91cC5zdGFydCArIGdyb3VwLmNvdW50ICksICggZHJhd1JhbmdlLnN0YXJ0ICsgZHJhd1JhbmdlLmNvdW50ICkgKTtcclxuXHJcblx0XHRcdFx0XHRmb3IgKCBqID0gc3RhcnQsIGpsID0gZW5kOyBqIDwgamw7IGogKz0gMyApIHtcclxuXHJcblx0XHRcdFx0XHRcdGEgPSBpbmRleC5nZXRYKCBqICk7XHJcblx0XHRcdFx0XHRcdGIgPSBpbmRleC5nZXRYKCBqICsgMSApO1xyXG5cdFx0XHRcdFx0XHRjID0gaW5kZXguZ2V0WCggaiArIDIgKTtcclxuXHJcblx0XHRcdFx0XHRcdF9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YShcclxuXHRcdFx0XHRcdFx0XHRvYmplY3QsXHJcblx0XHRcdFx0XHRcdFx0Z3JvdXBNYXRlcmlhbCxcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbkF0dHJpYnV0ZSxcclxuXHRcdFx0XHRcdFx0XHRtb3JwaFBvc2l0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdG1vcnBoVGFyZ2V0c1JlbGF0aXZlLFxyXG5cdFx0XHRcdFx0XHRcdGEsIGIsIGMsXHJcblx0XHRcdFx0XHRcdFx0bW9kaWZpZWRQb3NpdGlvblxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdFx0X2NhbGN1bGF0ZU1vcnBoZWRBdHRyaWJ1dGVEYXRhKFxyXG5cdFx0XHRcdFx0XHRcdG9iamVjdCxcclxuXHRcdFx0XHRcdFx0XHRncm91cE1hdGVyaWFsLFxyXG5cdFx0XHRcdFx0XHRcdG5vcm1hbEF0dHJpYnV0ZSxcclxuXHRcdFx0XHRcdFx0XHRtb3JwaE5vcm1hbCxcclxuXHRcdFx0XHRcdFx0XHRtb3JwaFRhcmdldHNSZWxhdGl2ZSxcclxuXHRcdFx0XHRcdFx0XHRhLCBiLCBjLFxyXG5cdFx0XHRcdFx0XHRcdG1vZGlmaWVkTm9ybWFsXHJcblx0XHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRzdGFydCA9IE1hdGgubWF4KCAwLCBkcmF3UmFuZ2Uuc3RhcnQgKTtcclxuXHRcdFx0XHRlbmQgPSBNYXRoLm1pbiggaW5kZXguY291bnQsICggZHJhd1JhbmdlLnN0YXJ0ICsgZHJhd1JhbmdlLmNvdW50ICkgKTtcclxuXHJcblx0XHRcdFx0Zm9yICggaSA9IHN0YXJ0LCBpbCA9IGVuZDsgaSA8IGlsOyBpICs9IDMgKSB7XHJcblxyXG5cdFx0XHRcdFx0YSA9IGluZGV4LmdldFgoIGkgKTtcclxuXHRcdFx0XHRcdGIgPSBpbmRleC5nZXRYKCBpICsgMSApO1xyXG5cdFx0XHRcdFx0YyA9IGluZGV4LmdldFgoIGkgKyAyICk7XHJcblxyXG5cdFx0XHRcdFx0X2NhbGN1bGF0ZU1vcnBoZWRBdHRyaWJ1dGVEYXRhKFxyXG5cdFx0XHRcdFx0XHRvYmplY3QsXHJcblx0XHRcdFx0XHRcdG1hdGVyaWFsLFxyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbkF0dHJpYnV0ZSxcclxuXHRcdFx0XHRcdFx0bW9ycGhQb3NpdGlvbixcclxuXHRcdFx0XHRcdFx0bW9ycGhUYXJnZXRzUmVsYXRpdmUsXHJcblx0XHRcdFx0XHRcdGEsIGIsIGMsXHJcblx0XHRcdFx0XHRcdG1vZGlmaWVkUG9zaXRpb25cclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0X2NhbGN1bGF0ZU1vcnBoZWRBdHRyaWJ1dGVEYXRhKFxyXG5cdFx0XHRcdFx0XHRvYmplY3QsXHJcblx0XHRcdFx0XHRcdG1hdGVyaWFsLFxyXG5cdFx0XHRcdFx0XHRub3JtYWxBdHRyaWJ1dGUsXHJcblx0XHRcdFx0XHRcdG1vcnBoTm9ybWFsLFxyXG5cdFx0XHRcdFx0XHRtb3JwaFRhcmdldHNSZWxhdGl2ZSxcclxuXHRcdFx0XHRcdFx0YSwgYiwgYyxcclxuXHRcdFx0XHRcdFx0bW9kaWZpZWROb3JtYWxcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9IGVsc2UgaWYgKCBwb3NpdGlvbkF0dHJpYnV0ZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0Ly8gbm9uLWluZGV4ZWQgYnVmZmVyIGdlb21ldHJ5XHJcblxyXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIG1hdGVyaWFsICkgKSB7XHJcblxyXG5cdFx0XHRcdGZvciAoIGkgPSAwLCBpbCA9IGdyb3Vwcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0XHRncm91cCA9IGdyb3Vwc1sgaSBdO1xyXG5cdFx0XHRcdFx0Z3JvdXBNYXRlcmlhbCA9IG1hdGVyaWFsWyBncm91cC5tYXRlcmlhbEluZGV4IF07XHJcblxyXG5cdFx0XHRcdFx0c3RhcnQgPSBNYXRoLm1heCggZ3JvdXAuc3RhcnQsIGRyYXdSYW5nZS5zdGFydCApO1xyXG5cdFx0XHRcdFx0ZW5kID0gTWF0aC5taW4oICggZ3JvdXAuc3RhcnQgKyBncm91cC5jb3VudCApLCAoIGRyYXdSYW5nZS5zdGFydCArIGRyYXdSYW5nZS5jb3VudCApICk7XHJcblxyXG5cdFx0XHRcdFx0Zm9yICggaiA9IHN0YXJ0LCBqbCA9IGVuZDsgaiA8IGpsOyBqICs9IDMgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRhID0gajtcclxuXHRcdFx0XHRcdFx0YiA9IGogKyAxO1xyXG5cdFx0XHRcdFx0XHRjID0gaiArIDI7XHJcblxyXG5cdFx0XHRcdFx0XHRfY2FsY3VsYXRlTW9ycGhlZEF0dHJpYnV0ZURhdGEoXHJcblx0XHRcdFx0XHRcdFx0b2JqZWN0LFxyXG5cdFx0XHRcdFx0XHRcdGdyb3VwTWF0ZXJpYWwsXHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb25BdHRyaWJ1dGUsXHJcblx0XHRcdFx0XHRcdFx0bW9ycGhQb3NpdGlvbixcclxuXHRcdFx0XHRcdFx0XHRtb3JwaFRhcmdldHNSZWxhdGl2ZSxcclxuXHRcdFx0XHRcdFx0XHRhLCBiLCBjLFxyXG5cdFx0XHRcdFx0XHRcdG1vZGlmaWVkUG9zaXRpb25cclxuXHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRcdF9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YShcclxuXHRcdFx0XHRcdFx0XHRvYmplY3QsXHJcblx0XHRcdFx0XHRcdFx0Z3JvdXBNYXRlcmlhbCxcclxuXHRcdFx0XHRcdFx0XHRub3JtYWxBdHRyaWJ1dGUsXHJcblx0XHRcdFx0XHRcdFx0bW9ycGhOb3JtYWwsXHJcblx0XHRcdFx0XHRcdFx0bW9ycGhUYXJnZXRzUmVsYXRpdmUsXHJcblx0XHRcdFx0XHRcdFx0YSwgYiwgYyxcclxuXHRcdFx0XHRcdFx0XHRtb2RpZmllZE5vcm1hbFxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0c3RhcnQgPSBNYXRoLm1heCggMCwgZHJhd1JhbmdlLnN0YXJ0ICk7XHJcblx0XHRcdFx0ZW5kID0gTWF0aC5taW4oIHBvc2l0aW9uQXR0cmlidXRlLmNvdW50LCAoIGRyYXdSYW5nZS5zdGFydCArIGRyYXdSYW5nZS5jb3VudCApICk7XHJcblxyXG5cdFx0XHRcdGZvciAoIGkgPSBzdGFydCwgaWwgPSBlbmQ7IGkgPCBpbDsgaSArPSAzICkge1xyXG5cclxuXHRcdFx0XHRcdGEgPSBpO1xyXG5cdFx0XHRcdFx0YiA9IGkgKyAxO1xyXG5cdFx0XHRcdFx0YyA9IGkgKyAyO1xyXG5cclxuXHRcdFx0XHRcdF9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YShcclxuXHRcdFx0XHRcdFx0b2JqZWN0LFxyXG5cdFx0XHRcdFx0XHRtYXRlcmlhbCxcclxuXHRcdFx0XHRcdFx0cG9zaXRpb25BdHRyaWJ1dGUsXHJcblx0XHRcdFx0XHRcdG1vcnBoUG9zaXRpb24sXHJcblx0XHRcdFx0XHRcdG1vcnBoVGFyZ2V0c1JlbGF0aXZlLFxyXG5cdFx0XHRcdFx0XHRhLCBiLCBjLFxyXG5cdFx0XHRcdFx0XHRtb2RpZmllZFBvc2l0aW9uXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdF9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YShcclxuXHRcdFx0XHRcdFx0b2JqZWN0LFxyXG5cdFx0XHRcdFx0XHRtYXRlcmlhbCxcclxuXHRcdFx0XHRcdFx0bm9ybWFsQXR0cmlidXRlLFxyXG5cdFx0XHRcdFx0XHRtb3JwaE5vcm1hbCxcclxuXHRcdFx0XHRcdFx0bW9ycGhUYXJnZXRzUmVsYXRpdmUsXHJcblx0XHRcdFx0XHRcdGEsIGIsIGMsXHJcblx0XHRcdFx0XHRcdG1vZGlmaWVkTm9ybWFsXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBtb3JwaGVkUG9zaXRpb25BdHRyaWJ1dGUgPSBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSggbW9kaWZpZWRQb3NpdGlvbiwgMyApO1xyXG5cdFx0dmFyIG1vcnBoZWROb3JtYWxBdHRyaWJ1dGUgPSBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSggbW9kaWZpZWROb3JtYWwsIDMgKTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cclxuXHRcdFx0cG9zaXRpb25BdHRyaWJ1dGU6IHBvc2l0aW9uQXR0cmlidXRlLFxyXG5cdFx0XHRub3JtYWxBdHRyaWJ1dGU6IG5vcm1hbEF0dHJpYnV0ZSxcclxuXHRcdFx0bW9ycGhlZFBvc2l0aW9uQXR0cmlidXRlOiBtb3JwaGVkUG9zaXRpb25BdHRyaWJ1dGUsXHJcblx0XHRcdG1vcnBoZWROb3JtYWxBdHRyaWJ1dGU6IG1vcnBoZWROb3JtYWxBdHRyaWJ1dGVcclxuXHJcblx0XHR9O1xyXG5cclxuXHR9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHsgQnVmZmVyR2VvbWV0cnlVdGlscyB9O1xyXG4iLCIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcclxuXHJcbi8vIFRoaXMgZmlsZSBhaW1zIHRvIG1ha2UgY29tbXVuaWNhdGlvbSBiZXR3ZWVuIGNsaWVudCBhbmQgc2VydmVyIGEgbG90IGVhc2llciwgdXNpbmcgcHJvbWlzZVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tWyAgIEltcG9ydHMgICBdLS0tLS0tLS0tLS0tLVxcXFxcclxuaW1wb3J0IHsgUHJpb3JpdHlRdWV1ZSB9IGZyb20gXCIuLi9BbGdvcml0aG1zL1ByaW9yaXR5UXVldWVcIjtcclxuaW1wb3J0ICogYXMgSm9pIGZyb20gXCJqb2lcIjtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLVtDb3JlIFZhcmlhYmxlc10tLS0tLS0tLS0tLS0tXFxcXFxyXG5sZXQgY2xpZW50O1xyXG5sZXQgUXVldWUgPSBuZXcgUHJpb3JpdHlRdWV1ZSgoYSwgYikgPT4gYS5wcm9yaXR5ID4gYi5wcm9yaXR5KTtcclxuXHJcbi8qKlxyXG4gKiAgQHBhcmFtIHtzdHJpbmd9IHNvY2tldCAtIFRoZSBzb2NrZXQgaW8gQ2xpZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24oc29ja2V0KSB7XHJcbiAgY2xpZW50ID0gc29ja2V0O1xyXG5cclxuICAvL0RhdGEgSGFuZHNoYWtlXHJcbiAgc29ja2V0LmVtaXQoXCJDb25uZWN0aW9uRXN0YWJsaXNlZFwiLCBEYXRlLm5vdygpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqICBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBUaGUgRXZlbnQgbmFtZVxyXG4gKiAgQHBhcmFtIHthcnJheX0gZGF0YSAgIC0gVGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgc2VydmVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VuZERhdGFXaXRoUHJvbWlzZShldmVudCwgZGF0YSkge1xyXG4gIC8vLS0tLS0tLS0tLS0tLVsgICBDcmVhdGUgYSBiYXNpYyBwcm9taXNlIHRvIHJldHVybiBkYXRhICAgXS0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgY29uc3QgRGF0YVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNsaWVudC5lbWl0KGV2ZW50LCAuLi5kYXRhKTtcclxuXHJcbiAgICAgIGNsaWVudC5vbihldmVudCArIFwiX0NhbGxiYWNrXCIsICgpID0+IHtcclxuICAgICAgICByZXNvbHZlZCA9IHRydWU7XHJcbiAgICAgICAgcmVzb2x2ZSguLi5hcmd1bWVudHMpO1xyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXNvbHZlZCA9IHRydWU7XHJcbiAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChyZXNvbHZlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICByZXNvbHZlZCA9IHRydWU7XHJcbiAgICAgICAgcmVqZWN0KFwiTm8gZGF0YSByZXR1cm5lZCB3aXRoaW4gMiBzZWNvbmRzLCBpcyB0aGVyZSBhIGRhdGEgY2FsbGJhY2s/XCIpO1xyXG4gICAgICB9XHJcbiAgICB9LCAyMDAwKTtcclxuICB9KTtcclxuICByZXR1cm4gRGF0YVByb21pc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgQHBhcmFtIHtzdHJpbmd9IGV2ZW50ICAgICAgICAtIFRoZSBFdmVudCBuYW1lXHJcbiAqICBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAgIC0gVGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgZGF0YSBiYWNrXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuVG9FdmVudChldmVudCwgY2FsbGJhY2spIHtcclxuICAvLyBBdHRhY2ggZXZlbnQgaGFuZGxlIHRvIGZ1bmN0aW9uc1xyXG4gIGNsaWVudC5vbihldmVudCwgY2FsbGJhY2spO1xyXG59XHJcblxyXG4vKipcclxuICogIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrICAgLSBUaGUgZnVuY3Rpb24gdGhhdCB3aWxsIGxpc3RlbiB0byBhbGwgZXZlbnRzIHNlbnQgdG8gdGhlIGNsaWVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGF0dGFjaFRvTWFpbkV2ZW50U3RyZWFtKGNhbGxiYWNrKSB7XHJcbiAgY2xpZW50Lm9uQW55KChldmVudE5hbWUsIC4uLmFyZ3MpID0+IHtcclxuICAgIGNhbGxiYWNrKGV2ZW50TmFtZSwgYXJncyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgQHBhcmFtIHtzdHJpbmd9IGV2ZW50ICAgICAgICAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byBsaXN0ZW4gdG9cclxuICogIEBwYXJhbSB7c2NlbWF9IHNjZW1hICAgICAgICAgLSBUaGUgZGF0YSBzY2hlbWUgdG8gZm9sb3dcclxuICogIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrICAgLSBUaGUgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBkYXRhXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlzdGVuRm9yRXZlbnRXaXRoU2NoZW1hVmFsaWRhdGlvbihcclxuICBldmVudCxcclxuICBzY2VtYSxcclxuICBjYWxsYmFja1xyXG4pIHtcclxuICBsaXN0ZW5Ub0V2ZW50KGV2ZW50LCAoYXJncykgPT4ge1xyXG4gICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IHNjZW1hLnZhbGlkYXRlKGFyZ3MpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlNjZWhtYSBDaGVjayBGYWlsZWRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYWxsYmFjayh2YWx1ZSk7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZERhdGFUb1F1ZXVlKGV2ZW50LCBkYXRhLCBjYWxsYmFjaywgcHJvcml0eSA9IDEpIHtcclxuICBRdWV1ZS5wdXNoKHsgcHJvcml0eSwgaW5wdXQ6IFtldmVudCwgZGF0YSwgY2FsbGJhY2tdIH0pO1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS1bICAgQWxsIE5vbiBlc3Nlc250aWFsIGNvbW11bmljYXRpb24gICBdLS0tLS0tLS0tLS0tLVxcXFxcclxuc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xyXG4gIGlmICghUXVldWUuaXNFbXB0eSgpKSB7XHJcbiAgICBsZXQgZnVuYyA9IFF1ZXVlLnBvcCgpO1xyXG4gICAgbGV0IGlucHV0ID0gZnVuYy5pbnB1dDtcclxuICAgIGxldCBjYWxsQmFjayA9IGlucHV0WzJdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy9EZXN0cnVjdHVyZSBhbmQgc2VuZCBkYXRhXHJcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgc2VuZERhdGFXaXRoUHJvbWlzZShpbnB1dFswXSwgLi4uaW5wdXRbMV0pO1xyXG4gICAgICBjYWxsQmFjayhmYWxzZSwgZGF0YSk7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgY2FsbEJhY2sodHJ1ZSwgW10pO1xyXG4gICAgfVxyXG4gIH1cclxufSwgNTAwKTtcclxuIiwiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG5pbXBvcnQgeyBBbWJpZW50TGlnaHQsIERpcmVjdGlvbmFsTGlnaHQsIFBvaW50TGlnaHQgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXJlY3Rpb25hbExpZ2h0KFNjZW5lLCBjb2xvciwgYnJpZ2h0bmVzcywgcG9zKSB7XHJcbiAgLy8gLS0tLS0tLS0tLSBbU2ltcGxlIERpcmVjdGlvbmFsIExpZ2h0IE1hbmFnZXJdIC0tLS0tLS0tLS0gXFxcXFxyXG4gIGNvbnN0IGRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgRGlyZWN0aW9uYWxMaWdodChjb2xvciwgYnJpZ2h0bmVzcywgMTAwKTtcclxuICBkaXJlY3Rpb25hbExpZ2h0LnBvc2l0aW9uLnNldCguLi5wb3MpOyAvLyBFUzYgT25seSB3YXkgdG8gZGVzdHJ1Y3R1cmUgUE9TIGFycmF5XHJcblxyXG4gIC8vU2hhZG93biBNYW5hZ2Vyc1xyXG4gIGRpcmVjdGlvbmFsTGlnaHQuY2FzdFNoYWRvdyA9IGZhbHNlO1xyXG5cclxuICAvL0FkZCB0byBTY2VuZVxyXG4gIFNjZW5lLmFkZChkaXJlY3Rpb25hbExpZ2h0KTtcclxuICByZXR1cm4gZGlyZWN0aW9uYWxMaWdodDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFtYmllbnRMaWdodChTY2VuZSwgY29sb3IsIGJyaWdodG5lc3MpIHtcclxuICBjb25zdCBsaWdodCA9IG5ldyBBbWJpZW50TGlnaHQoY29sb3IsIGJyaWdodG5lc3MpOyAvLyBzb2Z0IHdoaXRlIGxpZ2h0XHJcbiAgU2NlbmUuYWRkKGxpZ2h0KTtcclxuICByZXR1cm4gbGlnaHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb2ludExpZ2h0KGNvbG9yLCBicmlnaHRuZXNzLCBwb3MsIGludGVuc2l0eSl7XHJcbiAgY29uc3QgUG9pbnRMaWdodE5ldyA9IG5ldyBQb2ludExpZ2h0KGNvbG9yLCBicmlnaHRuZXNzLCBpbnRlbnNpdHkpXHJcbiAgUG9pbnRMaWdodE5ldy5wb3NpdGlvbi5zZXQoLi4ucG9zKVxyXG4gIHJldHVybiBQb2ludExpZ2h0TmV3XHJcbn0gXHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbnZhciBkZWZpbml0aW9uc19wZXJsaW4gPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxuLy8gRnJvbSBodHRwczovL2dpdGh1Yi5jb20vaHVnaHNrL2dsc2wtbm9pc2UvYmxvYi9tYXN0ZXIvcGVyaW9kaWMvMmQuZ2xzbFxcblxcbi8vXFxuLy8gR0xTTCB0ZXh0dXJlbGVzcyBjbGFzc2ljIDJEIG5vaXNlIFxcXCJjbm9pc2VcXFwiLFxcbi8vIHdpdGggYW4gUlNMLXN0eWxlIHBlcmlvZGljIHZhcmlhbnQgXFxcInBub2lzZVxcXCIuXFxuLy8gQXV0aG9yOiAgU3RlZmFuIEd1c3RhdnNvbiAoc3RlZmFuLmd1c3RhdnNvbkBsaXUuc2UpXFxuLy8gVmVyc2lvbjogMjAxMS0wOC0yMlxcbi8vXFxuLy8gTWFueSB0aGFua3MgdG8gSWFuIE1jRXdhbiBvZiBBc2hpbWEgQXJ0cyBmb3IgdGhlXFxuLy8gaWRlYXMgZm9yIHBlcm11dGF0aW9uIGFuZCBncmFkaWVudCBzZWxlY3Rpb24uXFxuLy9cXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTEgU3RlZmFuIEd1c3RhdnNvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUuXFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FzaGltYS93ZWJnbC1ub2lzZVxcbi8vXFxuXFxudmVjNCBtb2QyODkodmVjNCB4KSB7IHJldHVybiB4IC0gZmxvb3IoeCAqICgxLjAgLyAyODkuMCkpICogMjg5LjA7IH1cXG5cXG52ZWM0IHBlcm11dGUodmVjNCB4KSB7IHJldHVybiBtb2QyODkoKCh4ICogMzQuMCkgKyAxLjApICogeCk7IH1cXG5cXG52ZWM0IHRheWxvckludlNxcnQodmVjNCByKSB7IHJldHVybiAxLjc5Mjg0MjkxNDAwMTU5IC0gMC44NTM3MzQ3MjA5NTMxNCAqIHI7IH1cXG5cXG52ZWMyIGZhZGUodmVjMiB0KSB7IHJldHVybiB0ICogdCAqIHQgKiAodCAqICh0ICogNi4wIC0gMTUuMCkgKyAxMC4wKTsgfVxcblxcbmZsb2F0IG1hcChmbG9hdCB2YWx1ZSwgZmxvYXQgbWluMSwgZmxvYXQgbWF4MSwgZmxvYXQgbWluMiwgZmxvYXQgbWF4Mikge1xcbiAgcmV0dXJuIG1pbjIgKyAodmFsdWUgLSBtaW4xKSAqIChtYXgyIC0gbWluMikgLyAobWF4MSAtIG1pbjEpO1xcbn1cXG5cXG4vLyBDbGFzc2ljIFBlcmxpbiBub2lzZSwgcGVyaW9kaWMgdmFyaWFudFxcbmZsb2F0IHBlcmxpbih2ZWMyIFApIHtcXG5cXG4gIHZlYzIgcmVwID0gdmVjMigyNTUuMCwgMjU1LjApO1xcblxcbiAgdmVjNCBQaSA9IGZsb29yKFAueHl4eSkgKyB2ZWM0KDAuMCwgMC4wLCAxLjAsIDEuMCk7XFxuICB2ZWM0IFBmID0gZnJhY3QoUC54eXh5KSAtIHZlYzQoMC4wLCAwLjAsIDEuMCwgMS4wKTtcXG4gIFBpID0gbW9kKFBpLCByZXAueHl4eSk7IC8vIFRvIGNyZWF0ZSBub2lzZSB3aXRoIGV4cGxpY2l0IHBlcmlvZFxcbiAgUGkgPSBtb2QyODkoUGkpOyAgICAgICAgLy8gVG8gYXZvaWQgdHJ1bmNhdGlvbiBlZmZlY3RzIGluIHBlcm11dGF0aW9uXFxuICB2ZWM0IGl4ID0gUGkueHp4ejtcXG4gIHZlYzQgaXkgPSBQaS55eXd3O1xcbiAgdmVjNCBmeCA9IFBmLnh6eHo7XFxuICB2ZWM0IGZ5ID0gUGYueXl3dztcXG5cXG4gIHZlYzQgaSA9IHBlcm11dGUocGVybXV0ZShpeCkgKyBpeSk7XFxuXFxuICB2ZWM0IGd4ID0gZnJhY3QoaSAqICgxLjAgLyA0MS4wKSkgKiAyLjAgLSAxLjA7XFxuICB2ZWM0IGd5ID0gYWJzKGd4KSAtIDAuNTtcXG4gIHZlYzQgdHggPSBmbG9vcihneCArIDAuNSk7XFxuICBneCA9IGd4IC0gdHg7XFxuXFxuICB2ZWMyIGcwMCA9IHZlYzIoZ3gueCwgZ3kueCk7XFxuICB2ZWMyIGcxMCA9IHZlYzIoZ3gueSwgZ3kueSk7XFxuICB2ZWMyIGcwMSA9IHZlYzIoZ3gueiwgZ3kueik7XFxuICB2ZWMyIGcxMSA9IHZlYzIoZ3gudywgZ3kudyk7XFxuXFxuICB2ZWM0IG5vcm0gPSB0YXlsb3JJbnZTcXJ0KFxcbiAgICAgIHZlYzQoZG90KGcwMCwgZzAwKSwgZG90KGcwMSwgZzAxKSwgZG90KGcxMCwgZzEwKSwgZG90KGcxMSwgZzExKSkpO1xcbiAgZzAwICo9IG5vcm0ueDtcXG4gIGcwMSAqPSBub3JtLnk7XFxuICBnMTAgKj0gbm9ybS56O1xcbiAgZzExICo9IG5vcm0udztcXG5cXG4gIGZsb2F0IG4wMCA9IGRvdChnMDAsIHZlYzIoZngueCwgZnkueCkpO1xcbiAgZmxvYXQgbjEwID0gZG90KGcxMCwgdmVjMihmeC55LCBmeS55KSk7XFxuICBmbG9hdCBuMDEgPSBkb3QoZzAxLCB2ZWMyKGZ4LnosIGZ5LnopKTtcXG4gIGZsb2F0IG4xMSA9IGRvdChnMTEsIHZlYzIoZngudywgZnkudykpO1xcblxcbiAgdmVjMiBmYWRlX3h5ID0gZmFkZShQZi54eSk7XFxuICB2ZWMyIG5feCA9IG1peCh2ZWMyKG4wMCwgbjAxKSwgdmVjMihuMTAsIG4xMSksIGZhZGVfeHkueCk7XFxuICBmbG9hdCBuX3h5ID0gbWl4KG5feC54LCBuX3gueSwgZmFkZV94eS55KTtcXG4gIHJldHVybiBtYXAoMi4zICogbl94eSwgLTEuMCwgMS4wLCAwLjAsIDEuMCk7XFxufVxcblxcbmZsb2F0IGZibSh2ZWMyIHBvcywgdmVjNCBwcm9wcykge1xcbiAgZmxvYXQgcGVyc2lzdGFuY2UgPSBwcm9wcy54O1xcbiAgZmxvYXQgbGFjdW5hcml0eSA9IHByb3BzLnk7XFxuICBmbG9hdCByZWRpc3RyaWJ1dGlvbiA9IHByb3BzLno7XFxuICBpbnQgb2N0YXZlcyA9IGludChwcm9wcy53KTtcXG5cXG4gIGZsb2F0IHJlc3VsdCA9IDAuMDtcXG4gIGZsb2F0IGFtcGxpdHVkZSA9IDEuMDtcXG4gIGZsb2F0IGZyZXF1ZW5jeSA9IDEuMDtcXG4gIGZsb2F0IG1heGltdW0gPSBhbXBsaXR1ZGU7XFxuXFxuICBmb3IgKGludCBpID0gMDsgaSA8IDI7IGkrKykge1xcblxcbiAgICB2ZWMyIHAgPSBwb3MueHkgKiBmcmVxdWVuY3k7XFxuXFxuICAgIGZsb2F0IG5vaXNlVmFsID0gcGVybGluKHApO1xcbiAgICByZXN1bHQgKz0gbm9pc2VWYWwgKiBhbXBsaXR1ZGU7XFxuXFxuICAgIGZyZXF1ZW5jeSAqPSBsYWN1bmFyaXR5O1xcbiAgICBhbXBsaXR1ZGUgKj0gcGVyc2lzdGFuY2U7XFxuICAgIG1heGltdW0gKz0gYW1wbGl0dWRlO1xcbiAgfVxcblxcbiAgZmxvYXQgcmVkaXN0cmlidXRlZCA9IHBvdyhyZXN1bHQsIHJlZGlzdHJpYnV0aW9uKTtcXG4gIHJldHVybiByZWRpc3RyaWJ1dGVkIC8gbWF4aW11bTtcXG59XFxuXCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuXHJcbnZhciBwID0gW1xyXG4gIDE1MSxcclxuICAxNjAsXHJcbiAgMTM3LFxyXG4gIDkxLFxyXG4gIDkwLFxyXG4gIDE1LFxyXG4gIDEzMSxcclxuICAxMyxcclxuICAyMDEsXHJcbiAgOTUsXHJcbiAgOTYsXHJcbiAgNTMsXHJcbiAgMTk0LFxyXG4gIDIzMyxcclxuICA3LFxyXG4gIDIyNSxcclxuICAxNDAsXHJcbiAgMzYsXHJcbiAgMTAzLFxyXG4gIDMwLFxyXG4gIDY5LFxyXG4gIDE0MixcclxuICA4LFxyXG4gIDk5LFxyXG4gIDM3LFxyXG4gIDI0MCxcclxuICAyMSxcclxuICAxMCxcclxuICAyMyxcclxuICAxOTAsXHJcbiAgNixcclxuICAxNDgsXHJcbiAgMjQ3LFxyXG4gIDEyMCxcclxuICAyMzQsXHJcbiAgNzUsXHJcbiAgMCxcclxuICAyNixcclxuICAxOTcsXHJcbiAgNjIsXHJcbiAgOTQsXHJcbiAgMjUyLFxyXG4gIDIxOSxcclxuICAyMDMsXHJcbiAgMTE3LFxyXG4gIDM1LFxyXG4gIDExLFxyXG4gIDMyLFxyXG4gIDU3LFxyXG4gIDE3NyxcclxuICAzMyxcclxuICA4OCxcclxuICAyMzcsXHJcbiAgMTQ5LFxyXG4gIDU2LFxyXG4gIDg3LFxyXG4gIDE3NCxcclxuICAyMCxcclxuICAxMjUsXHJcbiAgMTM2LFxyXG4gIDE3MSxcclxuICAxNjgsXHJcbiAgNjgsXHJcbiAgMTc1LFxyXG4gIDc0LFxyXG4gIDE2NSxcclxuICA3MSxcclxuICAxMzQsXHJcbiAgMTM5LFxyXG4gIDQ4LFxyXG4gIDI3LFxyXG4gIDE2NixcclxuICA3NyxcclxuICAxNDYsXHJcbiAgMTU4LFxyXG4gIDIzMSxcclxuICA4MyxcclxuICAxMTEsXHJcbiAgMjI5LFxyXG4gIDEyMixcclxuICA2MCxcclxuICAyMTEsXHJcbiAgMTMzLFxyXG4gIDIzMCxcclxuICAyMjAsXHJcbiAgMTA1LFxyXG4gIDkyLFxyXG4gIDQxLFxyXG4gIDU1LFxyXG4gIDQ2LFxyXG4gIDI0NSxcclxuICA0MCxcclxuICAyNDQsXHJcbiAgMTAyLFxyXG4gIDE0MyxcclxuICA1NCxcclxuICA2NSxcclxuICAyNSxcclxuICA2MyxcclxuICAxNjEsXHJcbiAgMSxcclxuICAyMTYsXHJcbiAgODAsXHJcbiAgNzMsXHJcbiAgMjA5LFxyXG4gIDc2LFxyXG4gIDEzMixcclxuICAxODcsXHJcbiAgMjA4LFxyXG4gIDg5LFxyXG4gIDE4LFxyXG4gIDE2OSxcclxuICAyMDAsXHJcbiAgMTk2LFxyXG4gIDEzNSxcclxuICAxMzAsXHJcbiAgMTE2LFxyXG4gIDE4OCxcclxuICAxNTksXHJcbiAgODYsXHJcbiAgMTY0LFxyXG4gIDEwMCxcclxuICAxMDksXHJcbiAgMTk4LFxyXG4gIDE3MyxcclxuICAxODYsXHJcbiAgMyxcclxuICA2NCxcclxuICA1MixcclxuICAyMTcsXHJcbiAgMjI2LFxyXG4gIDI1MCxcclxuICAxMjQsXHJcbiAgMTIzLFxyXG4gIDUsXHJcbiAgMjAyLFxyXG4gIDM4LFxyXG4gIDE0NyxcclxuICAxMTgsXHJcbiAgMTI2LFxyXG4gIDI1NSxcclxuICA4MixcclxuICA4NSxcclxuICAyMTIsXHJcbiAgMjA3LFxyXG4gIDIwNixcclxuICA1OSxcclxuICAyMjcsXHJcbiAgNDcsXHJcbiAgMTYsXHJcbiAgNTgsXHJcbiAgMTcsXHJcbiAgMTgyLFxyXG4gIDE4OSxcclxuICAyOCxcclxuICA0MixcclxuICAyMjMsXHJcbiAgMTgzLFxyXG4gIDE3MCxcclxuICAyMTMsXHJcbiAgMTE5LFxyXG4gIDI0OCxcclxuICAxNTIsXHJcbiAgMixcclxuICA0NCxcclxuICAxNTQsXHJcbiAgMTYzLFxyXG4gIDcwLFxyXG4gIDIyMSxcclxuICAxNTMsXHJcbiAgMTAxLFxyXG4gIDE1NSxcclxuICAxNjcsXHJcbiAgNDMsXHJcbiAgMTcyLFxyXG4gIDksXHJcbiAgMTI5LFxyXG4gIDIyLFxyXG4gIDM5LFxyXG4gIDI1MyxcclxuICAxOSxcclxuICA5OCxcclxuICAxMDgsXHJcbiAgMTEwLFxyXG4gIDc5LFxyXG4gIDExMyxcclxuICAyMjQsXHJcbiAgMjMyLFxyXG4gIDE3OCxcclxuICAxODUsXHJcbiAgMTEyLFxyXG4gIDEwNCxcclxuICAyMTgsXHJcbiAgMjQ2LFxyXG4gIDk3LFxyXG4gIDIyOCxcclxuICAyNTEsXHJcbiAgMzQsXHJcbiAgMjQyLFxyXG4gIDE5MyxcclxuICAyMzgsXHJcbiAgMjEwLFxyXG4gIDE0NCxcclxuICAxMixcclxuICAxOTEsXHJcbiAgMTc5LFxyXG4gIDE2MixcclxuICAyNDEsXHJcbiAgODEsXHJcbiAgNTEsXHJcbiAgMTQ1LFxyXG4gIDIzNSxcclxuICAyNDksXHJcbiAgMTQsXHJcbiAgMjM5LFxyXG4gIDEwNyxcclxuICA0OSxcclxuICAxOTIsXHJcbiAgMjE0LFxyXG4gIDMxLFxyXG4gIDE4MSxcclxuICAxOTksXHJcbiAgMTA2LFxyXG4gIDE1NyxcclxuICAxODQsXHJcbiAgODQsXHJcbiAgMjA0LFxyXG4gIDE3NixcclxuICAxMTUsXHJcbiAgMTIxLFxyXG4gIDUwLFxyXG4gIDQ1LFxyXG4gIDEyNyxcclxuICA0LFxyXG4gIDE1MCxcclxuICAyNTQsXHJcbiAgMTM4LFxyXG4gIDIzNixcclxuICAyMDUsXHJcbiAgOTMsXHJcbiAgMjIyLFxyXG4gIDExNCxcclxuICA2NyxcclxuICAyOSxcclxuICAyNCxcclxuICA3MixcclxuICAyNDMsXHJcbiAgMTQxLFxyXG4gIDEyOCxcclxuICAxOTUsXHJcbiAgNzgsXHJcbiAgNjYsXHJcbiAgMjE1LFxyXG4gIDYxLFxyXG4gIDE1NixcclxuICAxODAsXHJcbl07XHJcblxyXG4vKipcclxuICogQW4gaW1wbGltZW50YXRpb24gb2YgUGVybGluIE5vaXNlIGJ5IEtlbiBQZXJsaW4uXHJcbiAqL1xyXG5jbGFzcyBQZXJsaW4ge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlZWQgU2VlZCBWYWx1ZSBmb3IgUFJORy5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihzZWVkKSB7XHJcbiAgICBjb25zdCBfZ3JhZGllbnRWZWNzID0gW1xyXG4gICAgICAvLyAyRCBWZWNzXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDApLFxyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMSwgMCksXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIC0xLCAwKSxcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoLTEsIC0xLCAwKSxcclxuICAgICAgLy8gKyAzRCBWZWNzXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDEpLFxyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMCwgMSksXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIC0xKSxcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoLTEsIDAsIC0xKSxcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMSksXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAxKSxcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgLTEpLFxyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMSwgLTEpLFxyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgcGVybSA9IG5ldyBBcnJheSg1MTIpO1xyXG4gICAgdmFyIGdyYWRQID0gbmV3IEFycmF5KDUxMik7XHJcblxyXG4gICAgaWYgKCFzZWVkKSBzZWVkID0gMTtcclxuICAgIHNlZWQgKj0gNjU1MzY7XHJcblxyXG4gICAgc2VlZCA9IE1hdGguZmxvb3Ioc2VlZCk7XHJcbiAgICBpZiAoc2VlZCA8IDI1Nikge1xyXG4gICAgICBzZWVkIHw9IHNlZWQgPDwgODtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XHJcbiAgICAgIHZhciB2O1xyXG4gICAgICBpZiAoaSAmIDEpIHtcclxuICAgICAgICB2ID0gcFtpXSBeIChzZWVkICYgMjU1KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2ID0gcFtpXSBeICgoc2VlZCA+PiA4KSAmIDI1NSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBlcm1baV0gPSBwZXJtW2kgKyAyNTZdID0gdjtcclxuICAgICAgZ3JhZFBbaV0gPSBncmFkUFtpICsgMjU2XSA9IF9ncmFkaWVudFZlY3NbdiAlIDEyXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9zZWVkID0gc2VlZDtcclxuXHJcbiAgICB0aGlzLl9vZmZzZXRNYXRyaXggPSBbXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApLFxyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKSxcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDEpLFxyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKSxcclxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMSksXHJcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDApLFxyXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSxcclxuICAgIF07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHTFNMIFNoYWRlciBDaHVuayBmb3IgMkQgUGVybGluIE5vaXNlLiBDYW4gYmUgdXNlZCB3aXRoXHJcbiAgICAgKiB0aHJlZS1DdXN0b21TaGFkZXJNYXRlcmlhbC5cclxuICAgICAqIFNlZTogPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9GYXJhenpTaGFpa2gvVEhSRUUtQ3VzdG9tU2hhZGVyTWF0ZXJpYWxcIj50aHJlZS1DdXN0b21TaGFkZXJNYXRlcmlhbDwvYT5cclxuICAgICAqL1xyXG4gICAgdGhpcy5zaGFkZXJDaHVuayA9IHtcclxuICAgICAgZGVmaW5lczogXCJcIixcclxuICAgICAgaGVhZGVyOiBkZWZpbml0aW9uc19wZXJsaW4sXHJcbiAgICAgIG1haW46IFwiXCIsXHJcbiAgICAgIHVuaWZvcm1zOiBbeyB0aHJlZV9ub2lzZV9zZWVkOiB0aGlzLl9zZWVkIH1dLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnBlcm0gPSBwZXJtO1xyXG4gICAgdGhpcy5ncmFkUCA9IGdyYWRQO1xyXG4gIH1cclxuXHJcbiAgX2ZhZGUodCkge1xyXG4gICAgcmV0dXJuIHQgKiB0ICogdCAqICh0ICogKHQgKiA2IC0gMTUpICsgMTApO1xyXG4gIH1cclxuXHJcbiAgX2xlcnAoYSwgYiwgdCkge1xyXG4gICAgcmV0dXJuICgxIC0gdCkgKiBhICsgdCAqIGI7XHJcbiAgfVxyXG5cclxuICBfZ3JhZGllbnQocG9zSW5DZWxsKSB7XHJcbiAgICBpZiAocG9zSW5DZWxsIGluc3RhbmNlb2YgVEhSRUUuVmVjdG9yMykge1xyXG4gICAgICByZXR1cm4gcG9zSW5DZWxsLnggKyB0aGlzLnBlcm1bcG9zSW5DZWxsLnkgKyB0aGlzLnBlcm1bcG9zSW5DZWxsLnpdXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBwb3NJbkNlbGwueCArIHRoaXMucGVybVtwb3NJbkNlbGwueV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXBzIGEgbnVtYmVyIGZyb20gb25lIHJhbmdlIHRvIGFub3RoZXIuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggICAgICAgSW5wdXQgTnVtYmVyXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluX21pbiAgQ3VycmVudCByYW5nZSBtaW5pbXVtXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluX21heCAgQ3VycmVudCByYW5nZSBtYXhpbXVtXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG91dF9taW4gTmV3IHJhbmdlIG1pbmltdW1cclxuICAgKiBAcGFyYW0ge251bWJlcn0gb3V0X21heCBOZXcgcmFuZ2UgbWF4aW11bVxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IElucHV0IE1hcHBlZCB0byByYW5nZSBbb3V0X21pbiwgb3V0X21heF1cclxuICAgKi9cclxuICBzdGF0aWMgbWFwKHgsIGluX21pbiwgaW5fbWF4LCBvdXRfbWluLCBvdXRfbWF4KSB7XHJcbiAgICByZXR1cm4gKCh4IC0gaW5fbWluKSAqIChvdXRfbWF4IC0gb3V0X21pbikpIC8gKGluX21heCAtIGluX21pbikgKyBvdXRfbWluO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2FtcGxlcyAyRCBQZXJsaW4gTm9zaWUgYXQgZ2l2ZW4gY29vcmRpbmF0ZXMuXHJcbiAgICogQHBhcmFtIHtUSFJFRS5WZWN0b3IyIHwgVEhSRUUuVmVjdG9yM30gaW5wdXQgQ29vcmRpbmNhdGVzIHRvIHNhbXBsZSBhdFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFZhbHVlIG9mIFBlcmxpbiBOb2lzZSBhdCB0aGF0IGNvb3JkaW5hdGUuXHJcbiAgICovXHJcbiAgZ2V0MihpbnB1dCkge1xyXG4gICAgaWYgKGlucHV0LnogIT09IHVuZGVmaW5lZCkgaW5wdXQgPSBuZXcgVEhSRUUuVmVjdG9yMihpbnB1dC54LCBpbnB1dC55KTtcclxuXHJcbiAgICBjb25zdCBjZWxsID0gbmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5mbG9vcihpbnB1dC54KSwgTWF0aC5mbG9vcihpbnB1dC55KSk7XHJcbiAgICBpbnB1dC5zdWIoY2VsbCk7XHJcblxyXG4gICAgY2VsbC54ICY9IDI1NTtcclxuICAgIGNlbGwueSAmPSAyNTU7XHJcblxyXG4gICAgY29uc3QgZ3JhZGlhbnREb3QgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHMzID0gdGhpcy5fb2Zmc2V0TWF0cml4W2kgKiAyXTtcclxuICAgICAgY29uc3QgcyA9IG5ldyBUSFJFRS5WZWN0b3IyKHMzLngsIHMzLnkpO1xyXG5cclxuICAgICAgY29uc3QgZ3JhZDMgPVxyXG4gICAgICAgIHRoaXMuZ3JhZFBbdGhpcy5fZ3JhZGllbnQobmV3IFRIUkVFLlZlY3RvcjIoKS5hZGRWZWN0b3JzKGNlbGwsIHMpKV07XHJcbiAgICAgIGNvbnN0IGdyYWQyID0gbmV3IFRIUkVFLlZlY3RvcjIoZ3JhZDMueCwgZ3JhZDMueSk7XHJcbiAgICAgIGNvbnN0IGRpc3QyID0gbmV3IFRIUkVFLlZlY3RvcjIoKS5zdWJWZWN0b3JzKGlucHV0LCBzKTtcclxuXHJcbiAgICAgIGdyYWRpYW50RG90LnB1c2goZ3JhZDIuZG90KGRpc3QyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdSA9IHRoaXMuX2ZhZGUoaW5wdXQueCk7XHJcbiAgICBjb25zdCB2ID0gdGhpcy5fZmFkZShpbnB1dC55KTtcclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2xlcnAoXHJcbiAgICAgIHRoaXMuX2xlcnAoZ3JhZGlhbnREb3RbMF0sIGdyYWRpYW50RG90WzJdLCB1KSxcclxuICAgICAgdGhpcy5fbGVycChncmFkaWFudERvdFsxXSwgZ3JhZGlhbnREb3RbM10sIHUpLFxyXG4gICAgICB2XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNhbXBsZXMgM0QgUGVybGluIE5vc2llIGF0IGdpdmVuIGNvb3JkaW5hdGVzLlxyXG4gICAqIEBwYXJhbSB7VEhSRUUuVmVjdG9yfTMgaW5wdXQgQ29vcmRpbmNhdGVzIHRvIHNhbXBsZSBhdFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFZhbHVlIG9mIFBlcmxpbiBOb2lzZSBhdCB0aGF0IGNvb3JkaW5hdGUuXHJcbiAgICovXHJcbiAgZ2V0MyhpbnB1dCkge1xyXG4gICAgaWYgKGlucHV0LnogPT09IHVuZGVmaW5lZClcclxuICAgICAgdGhyb3cgXCJJbnB1dCB0byBQZXJsaW46OmdldDMoKSBtdXN0IGJlIG9mIHR5cGUgVEhSRUUuVmVjdG9yM1wiO1xyXG5cclxuICAgIGNvbnN0IGNlbGwgPSBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgTWF0aC5mbG9vcihpbnB1dC54KSxcclxuICAgICAgTWF0aC5mbG9vcihpbnB1dC55KSxcclxuICAgICAgTWF0aC5mbG9vcihpbnB1dC56KVxyXG4gICAgKTtcclxuICAgIGlucHV0LnN1YihjZWxsKTtcclxuXHJcbiAgICBjZWxsLnggJj0gMjU1O1xyXG4gICAgY2VsbC55ICY9IDI1NTtcclxuICAgIGNlbGwueiAmPSAyNTU7XHJcblxyXG4gICAgY29uc3QgZ3JhZGlhbnREb3QgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHMgPSB0aGlzLl9vZmZzZXRNYXRyaXhbaV07XHJcblxyXG4gICAgICBjb25zdCBncmFkMyA9XHJcbiAgICAgICAgdGhpcy5ncmFkUFt0aGlzLl9ncmFkaWVudChuZXcgVEhSRUUuVmVjdG9yMygpLmFkZFZlY3RvcnMoY2VsbCwgcykpXTtcclxuICAgICAgY29uc3QgZGlzdDIgPSBuZXcgVEhSRUUuVmVjdG9yMygpLnN1YlZlY3RvcnMoaW5wdXQsIHMpO1xyXG5cclxuICAgICAgZ3JhZGlhbnREb3QucHVzaChncmFkMy5kb3QoZGlzdDIpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1ID0gdGhpcy5fZmFkZShpbnB1dC54KTtcclxuICAgIGNvbnN0IHYgPSB0aGlzLl9mYWRlKGlucHV0LnkpO1xyXG4gICAgY29uc3QgdyA9IHRoaXMuX2ZhZGUoaW5wdXQueik7XHJcblxyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9sZXJwKFxyXG4gICAgICB0aGlzLl9sZXJwKFxyXG4gICAgICAgIHRoaXMuX2xlcnAoZ3JhZGlhbnREb3RbMF0sIGdyYWRpYW50RG90WzRdLCB1KSxcclxuICAgICAgICB0aGlzLl9sZXJwKGdyYWRpYW50RG90WzFdLCBncmFkaWFudERvdFs1XSwgdSksXHJcbiAgICAgICAgd1xyXG4gICAgICApLFxyXG4gICAgICB0aGlzLl9sZXJwKFxyXG4gICAgICAgIHRoaXMuX2xlcnAoZ3JhZGlhbnREb3RbMl0sIGdyYWRpYW50RG90WzZdLCB1KSxcclxuICAgICAgICB0aGlzLl9sZXJwKGdyYWRpYW50RG90WzNdLCBncmFkaWFudERvdFs3XSwgdSksXHJcbiAgICAgICAgd1xyXG4gICAgICApLFxyXG4gICAgICB2XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGlzIGFuIGltcGxpbWVudGFpdG9uIG9mIGEgRnJhY3RhbCBCcm93bmlhbiBNb3Rpb25cclxuICogZnVuY3Rpb24gdXNpbmcgUGVybGluIE5vc2llLlxyXG4gKi9cclxuY2xhc3MgRkJNIHtcclxuICAvKipcclxuICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIEZCTSBjbGFzcy5cclxuICAgKiBVc2UgdGhpcyBpbnN0YW5jZSB0byBnZW5lcmF0ZSBmQm0gbm9pc2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIGZvciBmQm0gZ2VuZXJhaXRvbi5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5zZWVkIFNlZWQgZm9yIFBlcmxpbiBOb2lzZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLnNjYWxlIFdoYXQgZGlzdGFuY2UgdG8gdmlldyB0aGUgbm9pc2VtYXBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5wZXJzaXN0YW5jZSBIb3cgbXVjaCBlYWNoIG9jdGF2ZSBjb250cmlidXRlcyB0byB0aGUgb3ZlcmFsbCBzaGFwZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxhY3VuYXJpdHkgSG93IG11Y2ggZGV0YWlsIGlzIGFkZGVkIG9yIHJlbW92ZWQgYXQgZWFjaCBvY3RhdmVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5vY3RhdmVzIExldmVscyBvZiBkZXRhaWwgeW91IHdhbnQgeW91IHBlcmxpbiBub2lzZSB0byBoYXZlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMucmVkaXN0cmlidXRpb24gTGV2ZWwgb2YgZmxhdG5lc3Mgd2l0aGluIHRoZSB2YWxsZXlzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgY29uc3QgeyBzZWVkLCBzY2FsZSwgcGVyc2lzdGFuY2UsIGxhY3VuYXJpdHksIG9jdGF2ZXMsIHJlZGlzdHJpYnV0aW9uIH0gPVxyXG4gICAgICBvcHRpb25zO1xyXG4gICAgdGhpcy5fbm9pc2UgPSBuZXcgUGVybGluKHNlZWQpO1xyXG4gICAgdGhpcy5fc2NhbGUgPSBzY2FsZSB8fCAxO1xyXG4gICAgdGhpcy5fcGVyc2lzdGFuY2UgPSBwZXJzaXN0YW5jZSB8fCAwLjU7XHJcbiAgICB0aGlzLl9sYWN1bmFyaXR5ID0gbGFjdW5hcml0eSB8fCAyO1xyXG4gICAgdGhpcy5fb2N0YXZlcyA9IG9jdGF2ZXMgfHwgNjtcclxuICAgIHRoaXMuX3JlZGlzdHJpYnV0aW9uID0gcmVkaXN0cmlidXRpb24gfHwgMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNhbXBsZSAyRCBQZXJsaW4gTm9pc2Ugd2l0aCBmQm0gYXQgZ2l2ZW5cclxuICAgKiBjb29yZGluYXRlcy4gVGhlIGZ1bmN0aW9uIHdpbGwgdXNlIDxjb2RlPlBlcmxpbl9nZXQyPC9jb2RlPiBvciA8Y29kZT5QZXJsaW5fZ2V0MzwvY29kZT5cclxuICAgKiBkZXBlbmRpbmcgb24gdGhlIGlucHV0IHZlY3RvcidzIHR5cGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhUSFJFRS5WZWN0b3IyIHwgVEhSRUUuVmVjdG9yMyl9IGlucHV0IENvb3JkaW5hdGVzIHRvIHNhbXBsZSBub2lzZSBhdC5cclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBOb3JtYWxpemVkIG5vaXNlIGluIHRoZSByYW5nZSBbMCwgMV1cclxuICAgKi9cclxuICBnZXQyKGlucHV0KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgIGxldCBhbXBsaXR1ZGUgPSAxO1xyXG4gICAgbGV0IGZyZXF1ZW5jeSA9IDE7XHJcbiAgICBsZXQgbWF4ID0gYW1wbGl0dWRlO1xyXG5cclxuICAgIGxldCBub2lzZUZ1bmN0aW9uID0gdGhpcy5fbm9pc2UuZ2V0Mi5iaW5kKHRoaXMuX25vaXNlKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX29jdGF2ZXM7IGkrKykge1xyXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IyKFxyXG4gICAgICAgIGlucHV0LnggKiB0aGlzLl9zY2FsZSAqIGZyZXF1ZW5jeSxcclxuICAgICAgICBpbnB1dC55ICogdGhpcy5fc2NhbGUgKiBmcmVxdWVuY3lcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IG5vaXNlVmFsID0gbm9pc2VGdW5jdGlvbihwb3NpdGlvbik7XHJcbiAgICAgIHJlc3VsdCArPSBub2lzZVZhbCAqIGFtcGxpdHVkZTtcclxuXHJcbiAgICAgIGZyZXF1ZW5jeSAqPSB0aGlzLl9sYWN1bmFyaXR5O1xyXG4gICAgICBhbXBsaXR1ZGUgKj0gdGhpcy5fcGVyc2lzdGFuY2U7XHJcbiAgICAgIG1heCArPSBhbXBsaXR1ZGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVkaXN0cmlidXRlZCA9IE1hdGgucG93KHJlc3VsdCwgdGhpcy5fcmVkaXN0cmlidXRpb24pO1xyXG4gICAgcmV0dXJuIHJlZGlzdHJpYnV0ZWQgLyBtYXg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTYW1wbGUgM0QgUGVybGluIE5vaXNlIHdpdGggZkJtIGF0IGdpdmVuXHJcbiAgICogY29vcmRpbmF0ZXMuIFRoZSBmdW5jdGlvbiB3aWxsIHVzZSA8Y29kZT5QZXJsaW5fZ2V0MjwvY29kZT4gb3IgPGNvZGU+UGVybGluX2dldDM8L2NvZGU+XHJcbiAgICogZGVwZW5kaW5nIG9uIHRoZSBpbnB1dCB2ZWN0b3IncyB0eXBlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtUSFJFRS5WZWN0b3IzfSBpbnB1dCBDb29yZGluYXRlcyB0byBzYW1wbGUgbm9pc2UgYXQuXHJcbiAgICogQHJldHVybnMge251bWJlcn0gTm9ybWFsaXplZCBub2lzZSBpbiB0aGUgcmFuZ2UgWzAsIDFdXHJcbiAgICovXHJcbiAgZ2V0MyhpbnB1dCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICBsZXQgYW1wbGl0dWRlID0gMTtcclxuICAgIGxldCBmcmVxdWVuY3kgPSAxO1xyXG4gICAgbGV0IG1heCA9IGFtcGxpdHVkZTtcclxuXHJcbiAgICBsZXQgbm9pc2VGdW5jdGlvbiA9IHRoaXMuX25vaXNlLmdldDMuYmluZCh0aGlzLl9ub2lzZSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9vY3RhdmVzOyBpKyspIHtcclxuICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMihcclxuICAgICAgICBpbnB1dC54ICogdGhpcy5fc2NhbGUgKiBmcmVxdWVuY3ksXHJcbiAgICAgICAgaW5wdXQueSAqIHRoaXMuX3NjYWxlICogZnJlcXVlbmN5LFxyXG4gICAgICAgIGlucHV0LnogKiB0aGlzLl9zY2FsZSAqIGZyZXF1ZW5jeVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3Qgbm9pc2VWYWwgPSBub2lzZUZ1bmN0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgcmVzdWx0ICs9IG5vaXNlVmFsICogYW1wbGl0dWRlO1xyXG5cclxuICAgICAgZnJlcXVlbmN5ICo9IHRoaXMuX2xhY3VuYXJpdHk7XHJcbiAgICAgIGFtcGxpdHVkZSAqPSB0aGlzLl9wZXJzaXN0YW5jZTtcclxuICAgICAgbWF4ICs9IGFtcGxpdHVkZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWRpc3RyaWJ1dGVkID0gTWF0aC5wb3cocmVzdWx0LCB0aGlzLl9yZWRpc3RyaWJ1dGlvbik7XHJcbiAgICByZXR1cm4gcmVkaXN0cmlidXRlZCAvIG1heDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEZCTSwgUGVybGluIH07IiwiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcbmxldCByZW5kZXJpbmdMaXN0ID0ge307XHJcblxyXG5mdW5jdGlvbiBjaGVja1R5cGUodHlwZSkge1xyXG4gICAgaWYgKHR5cGVvZiByZW5kZXJpbmdMaXN0W2Ake3R5cGV9YF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICByZW5kZXJpbmdMaXN0W2Ake3R5cGV9YF0gPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvUmVuZGVyU2VxdWVuY2UodHlwZSwgY2FsbGJhY2ssIG5ld1R5cGUgPSBmYWxzZSwgdmFsKSB7XHJcbiAgICBpZiAobmV3VHlwZSkge1xyXG4gICAgICAgIHJlbmRlcmluZ0xpc3RbYCR7dHlwZX1gXSA9IFtdO1xyXG4gICAgfVxyXG4gICAgY2hlY2tUeXBlKHR5cGUpO1xyXG4gICAgcmVuZGVyaW5nTGlzdFtgJHt0eXBlfWBdLnB1c2goY2FsbGJhY2spO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyaW5nSW5mbyh0eXBlKSB7XHJcbiAgICBjaGVja1R5cGUodHlwZSk7XHJcbiAgICByZXR1cm4gcmVuZGVyaW5nTGlzdFtgJHt0eXBlfWBdLmxlbmd0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVJlbmRlckN5Y2xlKHR5cGUpIHtcclxuICAgIGNoZWNrVHlwZSh0eXBlKTtcclxuICAgIHJlbmRlcmluZ0xpc3RbYCR7dHlwZX1gXS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbSgpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8gQ3JlYXRlZCBieSBIYXJ2ZXkgUmFuZGFsbCB0byBBdXRvbWF0ZSB0aGUgY3JlYXRpb24gYW5kIGhhbmRsaW5nIG9mIHdlYiB3b3JrZXJzIFxcXFxcclxuXHJcbmltcG9ydCB7IEFycm93RnVuY3Rpb24gfSBmcm9tIFwidHlwZXNjcmlwdFwiO1xyXG5cclxuLy8gT0sgZmlyc3QgdGhpbmcgZmlyc3QsIHdlIG5lZWQgdG8gdHVybiB0aGUgZmlsZSBpbnRvIGEgZGF0YSBibG9iXHJcblxyXG4vKipcclxuKiBUdXJuIEpTIGZpbGUgaW50byBhIGRhdGFibG9iIGFuZCB0aGVuIGludG8gYSB3ZWIgd29ya2VyXHJcbiogQHBhcmFtIHt3b3JrZXJ9IHN0ciBUaGUgYWN0dWFsIGNvZGUgZm9yIHRoZSB3b3JrZXIgdG8gYmUgcGFyc2VkXHJcbiogQHJldHVybnMge1dvcmtlcn1cclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEdlbmVyYXRlV2ViV29ya2VyKHdvcmtlcjpzdHJpbmcsIGdsb2JhbFZhcnM6c3RyaW5nW10sIHJldHVybkZ1bmM6IEZ1bmN0aW9uKTpXb3JrZXJ7XHJcbiAgICAvLyBGaXJzdCB0aGluZyBpZiBpdHMgbm90IGEgc3RyaW5nIG1ha2UgaXQgYSBzdHJpbmdcclxuICAgIGNvbnN0IGNvZGUgPSB3b3JrZXIudG9TdHJpbmcoKTtcclxuXHJcbiAgICAvL1dlIG1heSBuZWVkIHRvIGFkZCB0aGUgY2FsbGluZyBjb250ZXh0IHNvIHdlIHNob3VsZCBhZGQgdGhlIGdsb2JhbCB2YXJzXHJcbiAgICBsZXQgaW5wdXRTdHVmZiA9IGBsZXQgZ2xvYmFsVmFycyA9ICR7Z2xvYmFsVmFyc307XFxuYFxyXG5cclxuICAgIC8vTmV4dCBDcmVhdGUgdGhlIGJsb2IgaW4gYSBzZWxmIHJ1bm5pbmcgZnVuY3Rpb25cclxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbaW5wdXRTdHVmZiArIFwiKFwiICsgY29kZSArIFwiKSgpXCJdLCB7IHR5cGU6ICd0ZXh0L2phdmFzY3JpcHQnIH0pO1xyXG5cclxuICAgIC8vVGhlbiByZXR1cm4gdGhlIHdlYiB3b3JrZXJcclxuICAgIGxldCB3b3JrZXJPdXQgPSBuZXcgV29ya2VyKHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpLCB7IHR5cGU6ICdtb2R1bGUnIH0pXHJcblxyXG4gICAgLy9DaGVjayBpZiB3ZWIgd29ya2VyIHdhbnRzIHRvIHRlcm1pbmF0ZSBpdHNlbGZcclxuICAgIHdvcmtlck91dC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGUpID0+IHJldHVybkZ1bmMoZSksIGZhbHNlKSAgXHJcblxyXG4gICAgcmV0dXJuIHdvcmtlck91dFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGVybWludGVXb3JrZXJFeHRlcm5hbGx5KHdvcmtlcjpXb3JrZXIpOmJvb2xlYW57XHJcbiAgICB0cnl7XHJcbiAgICAgICB3b3JrZXIudGVybWluYXRlKCkgXHJcbiAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfWNhdGNoKGUpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcclxuaW1wb3J0IHsgQm94R2VvbWV0cnksIE1lc2gsIE1lc2hCYXNpY01hdGVyaWFsIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCAqIGFzIHRocmVlIGZyb20gXCJ0aHJlZVwiO1xyXG5sZXQgR2FtZUNvcmVTaGFkb3dzID0gdHJ1ZTsgLy8gVE9ETyBhZGQgdG8gR1VJXHJcblxyXG4vKmVzbGludCBjb21wbGV4aXR5OiBbXCJlcnJvclwiLCAyMF0qL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2VvKHR5cGUsIGRhdGEsIHBvcywgcm90LCBtYXQsIHNoYWRvdykge1xyXG4gICAgLy9DcmVhdGUgdHlwZSwgdXNpbmcgZGVzdHJ1Y3R1cmluZyB0byBwYXNzIGluIHZhbHVlc1xyXG4gICAgbGV0IGdlbyA9IG5ldyB0aHJlZVtgJHt0eXBlfWBdKC4uLmRhdGEpO1xyXG5cclxuICAgIC8vU2V0IEdlbyBQb3NpdGlvbiBhbmQgUm90YXRpb25cclxuICAgIGdlby5wb3NpdGlvbi5zZXQocG9zKTtcclxuICAgIGdlby5yb3RhdGlvbi5zZXQocm90KTtcclxuXHJcbiAgICAvL0NyZWF0ZSB0aGUgTWVzaFxyXG4gICAgLyplc2xpbnQgbmV3LWNhcDogXCJlcnJvclwiKi9cclxuICAgIGxldCBtZXNoID0gbmV3IE1lc2goZ2VvLCBtYXQpO1xyXG5cclxuICAgIC8vSGFuZGxlIFJlY2l2aW5nIHNoYWRvd3MgYW5kIGNhc3RpbmdcclxuICAgIG1lc2guY2FzdFNoYWRvdyA9IHNoYWRvdyAmJiBHYW1lQ29yZVNoYWRvd3MgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBtZXNoLnJlY2VpdmVTaGFkb3cgPSBzaGFkb3cgJiYgR2FtZUNvcmVTaGFkb3dzID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgIC8vUmV0dXJuIE1lc2hcclxuICAgIHJldHVybiBtZXNoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdDdWJlKCl7XHJcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBCb3hHZW9tZXRyeSggMTAsIDEwLCAxMCApO1xyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgTWVzaEJhc2ljTWF0ZXJpYWwoIHtjb2xvcjogMHgwMGZmMDB9ICk7XHJcbiAgICBjb25zdCBjdWJlID0gbmV3IE1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG4gICAgcmV0dXJuIGN1YmVcclxufSIsIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxyXG5cclxuLy8gUmVuZGVyIEhhbmRsZXJcclxuaW1wb3J0IHsgYWRkVG9SZW5kZXJTZXF1ZW5jZSB9IGZyb20gXCIuLi9Db3JlLUFQSS9SZW5kZXJpbmdIYW5kbGVyXCI7XHJcblxyXG4vL0Z1bmN0aW9uYWwgRGVwZW5kZW5jaWVzXHJcbmltcG9ydCB7XHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIERvdWJsZVNpZGUsXHJcbiAgICBHcmlkSGVscGVyLFxyXG4gICAgTWVzaCxcclxuICAgIE1lc2hTdGFuZGFyZE1hdGVyaWFsLFxyXG4gICAgUGxhbmVCdWZmZXJHZW9tZXRyeSxcclxuICAgIFBsYW5lR2VvbWV0cnksXHJcbiAgICBWZWN0b3IzLFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBHZW5lcmF0ZUNsb3VkcyB9IGZyb20gXCIuLi9nYW1lRnVuZGFsbWVudGFscy9jbG91ZHNcIjtcclxuaW1wb3J0IHsgY29udHJvbEhhbmRsZXJJbml0LCBjb250cm9sSGFuZGxlclVwZGF0ZSB9IGZyb20gXCIuLi9nYW1lRnVuZGFsbWVudGFscy9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBDcmVhdGVEYXlOaWdodEN5Y2xlIH0gZnJvbSBcIi4uL2dhbWVGdW5kYWxtZW50YWxzL0RheU5pZ2h0Q3ljbGVcIjtcclxuaW1wb3J0IHsgTWFrZVBsYW5lIH0gZnJvbSBcIi4uL2dhbWVGdW5kYWxtZW50YWxzL3BsYW5lSGFuZGxlci9NYWluUGxhbmVcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVUZXJyYWluQXJvdW5kUGxheWVyIH0gZnJvbSBcIi4uL2dhbWVGdW5kYWxtZW50YWxzL1RlcnJhaW5NYW5hZ2VtZW50L3RlcnJhaW5DaHVua3Jpc2VyXCI7XHJcbmltcG9ydCB7IEdlbmVyYXRlV2ViV29ya2VyIH0gZnJvbSBcIi4uL0NvcmUtQVBJL1dvcmtlclNldHVwLnRzXCI7XHJcbmltcG9ydCB7IGRlYnVnQ3ViZSB9IGZyb20gXCIuLi9Db3JlLUFQSS9nZW1vdHJ5TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBhZGRHTEJGaWxlIH0gZnJvbSBcIi4uL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9HTEJMb2FkZXJcIjtcclxuXHJcbmxldCBkZWJ1ZyA9IHRydWU7XHJcbiBcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZU1haW5TY2VuZShcclxuICAgIFNjZW5lVG9HZXQsXHJcbiAgICBSZW5kZXJzLFxyXG4gICAgZG9jdW1lbnQsXHJcbiAgICBzZWVkLFxyXG4gICAgY2hpbGQyLFxyXG4gICAgQ2FtZXJhXHJcbikge1xyXG5cclxuXHJcbiAgICBsZXQgY29sbGlzaW9uSGFuZGxlciA9IG5ldyBXb3JrZXIoJ3dlYldvcmtlcnMvQ29sbGlzaW9uLmpzJyk7XHJcbiAgICBjb2xsaXNpb25IYW5kbGVyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIH1cclxuICAgIGNvbGxpc2lvbkhhbmRsZXIub25tZXNzYWdlZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICB9XHJcbiAgICBjb2xsaXNpb25IYW5kbGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgICBjb2xsaXNpb25IYW5kbGVyLnBvc3RNZXNzYWdlKHtDb21tYW5kOlwiU3RhcnRcIiwgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24ub3JpZ2lufSlcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb2xsaXNpb25IYW5kbGVyLnBvc3RNZXNzYWdlKHtDb21tYW5kOlwiQWRkU2hhcGVcIiwgZGF0YTogbmV3IFBsYW5lQnVmZmVyR2VvbWV0cnkoMiwgMiwgMiwgMil9KVxyXG4gICAgfSwxMDAwKTtcclxuXHJcbiAgICBsZXQgY2xvdWRzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQwOyBpKyspIHtcclxuICAgICAgICBjbG91ZHMucHVzaChcclxuICAgICAgICAgICAgbmV3IEdlbmVyYXRlQ2xvdWRzKFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlY3RvcjMoXHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDMwMCAtIDMwMCxcclxuICAgICAgICAgICAgICAgICAgICA4MCArIE1hdGgucmFuZG9tKCkgKiAyMCxcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogNjAwIC0gNDAwXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgU2NlbmVUb0dldCxcclxuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAwLjIsXHJcbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogNiArIDFcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRheW5pZ2h0ID0gbmV3IENyZWF0ZURheU5pZ2h0Q3ljbGUoU2NlbmVUb0dldCwgUmVuZGVycyk7XHJcbiAgICAvL2dlbmVyYXRlVGVycmFpbihzZWVkLCBTY2VuZVRvR2V0KTtcclxuICAgIGNvbnRyb2xIYW5kbGVySW5pdChkb2N1bWVudCwgY2hpbGQyKTtcclxuXHJcblxyXG5cclxuICAgIGlmIChkZWJ1Zykge1xyXG4gICAgICAgIGNvbnN0IHBsYW5lR2VvbWV0cnkgPSBuZXcgUGxhbmVHZW9tZXRyeSgyMCwgMjAsIDMyLCAzMik7XHJcbiAgICAgICAgcGxhbmVHZW9tZXRyeS5yb3RhdGVYKE1hdGguUEkgLyAyKTtcclxuICAgICAgICBjb25zdCBwbGFuZU1hdGVyaWFsID0gbmV3IE1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICAgICAgY29sb3I6IFwiIzU2N2Q0NlwiLFxyXG4gICAgICAgICAgICBzaWRlOiBEb3VibGVTaWRlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHBsYW5lID0gbmV3IE1lc2gocGxhbmVHZW9tZXRyeSwgcGxhbmVNYXRlcmlhbCk7XHJcbiAgICAgICAgcGxhbmUucG9zaXRpb24ueSA9IC0wLjU7XHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQocGxhbmUpO1xyXG4gICAgICAgIGNvbnN0IGdyaWRIZWxwZXIgPSBuZXcgR3JpZEhlbHBlcig1MCwgNTApO1xyXG4gICAgICAgIGdyaWRIZWxwZXIucG9zaXRpb24ueSA9IC0xO1xyXG4gICAgICAgIFNjZW5lVG9HZXQuYWRkKGdyaWRIZWxwZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBBZGQgYWxsIHVwZGF0aW5nIHBhcnRzIHRvIGEgZnVuY3Rpb25cclxuICAgIGFkZFRvUmVuZGVyU2VxdWVuY2UoXHJcbiAgICAgICAgXCJNYWluXCIsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbG91ZHMuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS51cGRhdGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0cnVlXHJcbiAgICApO1xyXG4gICAgbGV0IG5ld1BsYW5lID0gbmV3IE1ha2VQbGFuZShTY2VuZVRvR2V0KVxyXG4gICAgYXdhaXQgbmV3UGxhbmUubG9hZEZpbGVzKClcclxuICAgIG5ld1BsYW5lLkNyZWF0ZUdyb3VwQW5kUG9zKClcclxuICAgIC8vbmV3UGxhbmUuYXR0YWNoQ2FtZXJhQW5kQ29udHJvbChDYW1lcmEpXHJcblxyXG4gICAgbGV0IGFpcnBvcnQgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgIFwiL0Fzc2V0cy9BaXJwb3J0LmdsYlwiLFxyXG4gICAgICAgIFNjZW5lVG9HZXRcclxuICAgICk7XHJcbiAgICBTY2VuZVRvR2V0LmFkZChhaXJwb3J0LnNjZW5lKVxyXG5cclxuICAgIGdlbmVyYXRlVGVycmFpbkFyb3VuZFBsYXllcihzZWVkLCBDYW1lcmEsIFNjZW5lVG9HZXQpXHJcblxyXG4gICAgYWRkVG9SZW5kZXJTZXF1ZW5jZShcIk1haW5cIiwgKCkgPT4gY29udHJvbEhhbmRsZXJVcGRhdGUoQ2FtZXJhKSk7XHJcbiAgICBhZGRUb1JlbmRlclNlcXVlbmNlKFwiTWFpblwiLCAoKSA9PiBkYXluaWdodC51cGRhdGUoQ2FtZXJhKSk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhHZW5lcmF0ZVdlYldvcmtlcihgL3dlYldvcmtlcnMvYmFzaWNUZXN0LmpzYCwgW10sIChlKSA9PiB7Y29uc29sZS5sb2coZSl9ICkpXHJcbn1cclxuIiwiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcbmltcG9ydCB7XHJcbiAgICBCYWNrU2lkZSxcclxuICAgIEJveEdlb21ldHJ5LFxyXG4gICAgQ29sb3IsXHJcbiAgICBNYXRoVXRpbHMsXHJcbiAgICBNZXNoLFxyXG4gICAgTWVzaEJhc2ljTWF0ZXJpYWwsXHJcbiAgICBNZXNoTGFtYmVydE1hdGVyaWFsLFxyXG4gICAgU3BoZXJlQnVmZmVyR2VvbWV0cnksXHJcbiAgICBWZWN0b3IzLFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgY3JlYXRlQW1iaWVudExpZ2h0LFxyXG4gICAgY3JlYXRlRGlyZWN0aW9uYWxMaWdodCxcclxufSBmcm9tIFwiLi4vQ29yZS1BUEkvTGlnaHRpbmdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbVN0YXJGaWVsZCB9IGZyb20gXCIuL3N0YXJzXCI7XHJcbmltcG9ydCB7IHJvdGF0ZUFib3V0UG9pbnQgfSBmcm9tIFwiLi9yb3RhdGVBcm91bmRQb2ludFwiO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5sZXQgcmVjaWV2ZURheXRpbWVVcGRhdGUgPSB7fTtcclxuXHJcbmxldCBkYXkgPSB0cnVlXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGR0b0RheVRpbWVDaGVja2VyKGFyZykge1xyXG4gICAgbGV0IFVVSUQgPSB2NCgpO1xyXG4gICAgcmVjaWV2ZURheXRpbWVVcGRhdGVbVVVJRF0gPSBhcmc7XHJcbiAgICByZXR1cm4gVVVJRDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbURheVRpbWVIb29rKFVVSUQpIHtcclxuICAgIGRlbGV0ZSByZWNpZXZlRGF5dGltZVVwZGF0ZVtVVUlEXTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5U3RhdGUoKSB7XHJcbiAgICByZXR1cm4gZGF5XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVEYXlOaWdodEN5Y2xlIHtcclxuICAgIGNvbnN0cnVjdG9yKFNjZW5lVG9HZXQsIFJlbmRlcnMpIHtcclxuICAgICAgICAvLyAtLS0tLS0tLS0tIFtUd28gdG8gbGV2ZWwgZ2xvYmFsIHZhcmlhYmxlc10gLS0tLS0tLS0tLSBcXFxcXHJcbiAgICAgICAgdGhpcy5TY2VuZVRvR2V0ID0gU2NlbmVUb0dldDtcclxuICAgICAgICB0aGlzLlJlbmRlcnMgPSBSZW5kZXJzO1xyXG5cclxuICAgICAgICB0aGlzLmFubm91bmNlZERheSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYW5ub3VuY2VkTmlnaHQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLSBbQ3JlYXRlIFN1biBNZXNoXSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICBsZXQgc3VuID0gbmV3IFNwaGVyZUJ1ZmZlckdlb21ldHJ5KDIwLCAyMCwgMTAwLCAxMDApO1xyXG4gICAgICAgIGxldCBzdW5NYXRlcmlhbCA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtcclxuICAgICAgICAgICAgZW1pc3NpdmU6IFwiI2Y5ZDcxY1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBzdW5tZXNoID0gbmV3IE1lc2goc3VuLCBzdW5NYXRlcmlhbCk7XHJcbiAgICAgICAgc3VubWVzaC5wb3NpdGlvbi5zZXQoMSwgMzAwLCAzMDApO1xyXG4gICAgICAgIFNjZW5lVG9HZXQuYWRkKHN1bm1lc2gpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgZ3JvdXAgdG8gZWFzaWx5IG1vdmUgaXQgXFxcXFxyXG4gICAgICAgIGxldCBzdW5Hcm91cCA9IG5ldyBHcm91cCgpXHJcbiAgICAgICAgc3VuR3JvdXAuYWRkKHN1bm1lc2gpXHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQoc3VuR3JvdXApXHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW0NyZWF0ZSBNb29uIE1lc2hdIC0tLS0tLS0tLS0gXFxcXFxyXG4gICAgICAgIGxldCBtb29uID0gbmV3IFNwaGVyZUJ1ZmZlckdlb21ldHJ5KDEwLCAxMCwgMTAwLCAxMDApO1xyXG4gICAgICAgIGxldCBtb29uTWF0ZXJpYWwgPSBuZXcgTWVzaExhbWJlcnRNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgIGVtaXNzaXZlOiBcIiNmZmZmZmZcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgbW9vbk1lc2ggPSBuZXcgTWVzaChtb29uLCBtb29uTWF0ZXJpYWwpO1xyXG4gICAgICAgIG1vb25NZXNoLnBvc2l0aW9uLnNldCgtMSwgLTIwMCwgLTMwMCk7XHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQobW9vbk1lc2gpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgZ3JvdXAgdG8gZWFzaWx5IG1vdmUgaXQgXFxcXFxyXG4gICAgICAgIGxldCBtb29uR3JvdXAgPSBuZXcgR3JvdXAoKVxyXG4gICAgICAgIG1vb25Hcm91cC5hZGQobW9vbk1lc2gpXHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQobW9vbkdyb3VwKVxyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tIFtDcmVhdGUgQm94IEdvbWV0cnkgZm9yIGhhbmRsaW5nIHJvdGF0aW9uXSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICB2YXIgZ2VvbWV0cnkgPSBuZXcgQm94R2VvbWV0cnkoMSwgMSwgMSk7XHJcbiAgICAgICAgdmFyIGN1YmUgPSBuZXcgTWVzaChnZW9tZXRyeSk7XHJcbiAgICAgICAgY3ViZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgU2NlbmVUb0dldC5hZGQoY3ViZSk7XHJcbiAgICAgICAgLy8gXiBUaGlzIGlzIGEgdmVyeSBiYWQgd29yayBhcm91bmQgZml4IGxhdGVyXHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW0FsbCBkZWZpbnRpb25zIGZvciB0aGUgbW92aW5nIHBhcnRdIC0tLS0tLS0tLS0gXFxcXFxyXG4gICAgICAgIHRoaXMuY3ViZSA9IGN1YmU7XHJcbiAgICAgICAgdGhpcy5tb29uTWVzaCA9IG1vb25NZXNoO1xyXG4gICAgICAgIHRoaXMuc3VubWVzaCA9IHN1bm1lc2g7XHJcbiAgICAgICAgdGhpcy5zdW5Hcm91cCA9IHN1bkdyb3VwO1xyXG4gICAgICAgIHRoaXMubW9vbkdyb3VwID0gbW9vbkdyb3VwO1xyXG4gICAgICAgIHRoaXMudCA9IDA7XHJcbiAgICAgICAgdGhpcy5kVEltZSA9IDA7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW0FsbCBkZWZpbnRpb25zIGZvciBsaWdodHMgdG8gY3JlYXRlIHNoYWRvd3NdIC0tLS0tLS0tLS0gXFxcXFxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodCA9IGNyZWF0ZURpcmVjdGlvbmFsTGlnaHQoXHJcbiAgICAgICAgICAgIFNjZW5lVG9HZXQsXHJcbiAgICAgICAgICAgIFwiI2RkZmZlZVwiLFxyXG4gICAgICAgICAgICAwLjUsXHJcbiAgICAgICAgICAgIFsxLCAxMDAsIDEwMF1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodDIgPSBjcmVhdGVEaXJlY3Rpb25hbExpZ2h0KFxyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LFxyXG4gICAgICAgICAgICBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgMC4yLFxyXG4gICAgICAgICAgICBbMSwgLTEwMCwgLTEwMF1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubGlnaHQgPSBjcmVhdGVBbWJpZW50TGlnaHQoU2NlbmVUb0dldCwgXCIjYWFhYWFhXCIsIDAuNSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3VuR3JvdXAuYWRkKHRoaXMuZGlyZWN0aW9uYWxMaWdodClcclxuICAgICAgICB0aGlzLm1vb25Hcm91cC5hZGQodGhpcy5kaXJlY3Rpb25hbExpZ2h0MilcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLSBbQ3JlYXRlIFN0YXJ5IG5pZ2h0XSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICBsZXQgc2t5Qm94ID0gbmV3IEJveEdlb21ldHJ5KDEyMDAsIDEyMDAsIDEyMDApO1xyXG4gICAgICAgIGxldCBza3lCb3hNYXRlcmlhbCA9IG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgIG1hcDogZ2V0UmFuZG9tU3RhckZpZWxkKDYwMCwgMjA0OCwgMjA0OCksXHJcbiAgICAgICAgICAgIHNpZGU6IEJhY2tTaWRlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2t5ID0gbmV3IE1lc2goc2t5Qm94LCBza3lCb3hNYXRlcmlhbCk7XHJcbiAgICB9XHJcbiAgICAvKmVzbGludCBjb21wbGV4aXR5OiBbXCJlcnJvclwiLCAyMF0qL1xyXG4gICAgdXBkYXRlKENhbWVyYSkge1xyXG5cclxuICAgICAgICAvLyBUaGlzIHR3byBsaW5lcyBhcmUgIGltcG9ydGFudCBhcyBpdCBpcyBwYXJ0IG9mIHRoZSBoYWNreSB3b3JrIGFyb3VuZCB0byBnZXQgdGltZSBvZiBkYXkgb24gdmFyeWluZyBGUFNcclxuICAgICAgICBsZXQgdGhldGEgPSByb3RhdGVBYm91dFBvaW50KFxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbmFsTGlnaHQsXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKDAsIDAsIDApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMygxLCAwLCAwKSxcclxuICAgICAgICAgICAgMC4wMDEsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGhVdGlscy5yYWRUb0RlZyh0aGlzLmN1YmUucm90YXRpb24ueCk7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW1JvdGF0ZSBhbGwgdGhlIGxpZ2h0cyBhbmQgTWVzaGVzXSAtLS0tLS0tLS0tIFxcXFxcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3VuR3JvdXAucG9zaXRpb24uc2V0KENhbWVyYS5wb3NpdGlvbi54ICsgMTAwLCBDYW1lcmEucG9zaXRpb24ueSwgQ2FtZXJhLnBvc2l0aW9uLnopO1xyXG4gICAgICAgIHRoaXMubW9vbkdyb3VwLnBvc2l0aW9uLnNldChDYW1lcmEucG9zaXRpb24ueCArIDEwMCwgQ2FtZXJhLnBvc2l0aW9uLnksIENhbWVyYS5wb3NpdGlvbi56KTtcclxuXHJcbiAgICAgICAgdGhpcy5za3kucG9zaXRpb24uc2V0KENhbWVyYS5wb3NpdGlvbi54ICsgMTAwLCBDYW1lcmEucG9zaXRpb24ueSwgQ2FtZXJhLnBvc2l0aW9uLnopO1xyXG5cclxuXHJcbiAgICAgICAgcm90YXRlQWJvdXRQb2ludChcclxuICAgICAgICAgICAgdGhpcy5zdW5tZXNoLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMygxMDAsIDAsIDApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMygxLCAwLCAwKSxcclxuICAgICAgICAgICAgMC4wMDEsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICAgIHJvdGF0ZUFib3V0UG9pbnQoXHJcbiAgICAgICAgICAgIHRoaXMubW9vbk1lc2gsXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKDEwMCwgMCwgMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKDEsIDAsIDApLFxyXG4gICAgICAgICAgICAwLjAwMSxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcm90YXRlQWJvdXRQb2ludChcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0MixcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjMoMCwgMCwgMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKDEsIDAsIDApLFxyXG4gICAgICAgICAgICAwLjAwMSxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0gW0lmIGl0IGlzIGRheV0gLS0tLS0tLS0tLSBcXFxcXHJcbiAgICAgICAgaWYgKGFuZ2xlIDwgNDAgJiYgdGhpcy5kVEltZSA8IDEpIHtcclxuICAgICAgICAgICAgZGF5ID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgdGhpcy50ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0LmNvbG9yID0gbmV3IENvbG9yKFwiI2RkZmZlZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5kVEltZSArPSAwLjAwMztcclxuICAgICAgICAgICAgaWYgKHRoaXMuZFRJbWUgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kVEltZSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5SZW5kZXJzLnNldENsZWFyQ29sb3IoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ29sb3IoKS5sZXJwQ29sb3JzKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDb2xvcihcIiNmZGI4MTNcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvbG9yKFwiIzg3Y2VlYlwiKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRUSW1lXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0LmludGVuc2l0eSA9IDAuNTtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0Mi5jb2xvciA9IG5ldyBDb2xvcihcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodC5pbnRlbnNpdHkgPSAwLjU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodDIuaW50ZW5zaXR5ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5TY2VuZVRvR2V0LnJlbW92ZSh0aGlzLnNreSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghKGFuZ2xlIDwgNDApICYmIHRoaXMuc2t5LnBhcmVudCAhPT0gdGhpcy5TY2VuZVRvR2V0KSB7XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0gW0lmIGl0IGlzIG5pZ2h0XSAtLS0tLS0tLS0tIFxcXFxcclxuICAgICAgICAgICAgZGF5ID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZFRJbWUgPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50ICs9IDAuMDE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnQgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2NlbmVUb0dldC5hZGQodGhpcy5za3kpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodDIuY29sb3IgPSBuZXcgQ29sb3IoXCIjZmZmZmZmXCIpO1xyXG4gICAgICAgICAgICB0aGlzLlJlbmRlcnMuc2V0Q2xlYXJDb2xvcihcclxuICAgICAgICAgICAgICAgIG5ldyBDb2xvcigpLmxlcnBDb2xvcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvbG9yKFwiIzg3Y2VlYlwiKSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQ29sb3IoXCIjMDAwMDAwXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5saWdodC5pbnRlbnNpdHkgPSAwLjI7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodC5pbnRlbnNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbmFsTGlnaHQyLmludGVuc2l0eSA9IDAuMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2t5LnBhcmVudCA9PT0gdGhpcy5TY2VuZVRvR2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2t5LnJvdGF0aW9uLnggLT0gNCAvIDEwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1YmUucm90YXRlT25BeGlzKG5ldyBWZWN0b3IzKDEsIDAsIDApLCB0aGV0YSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gV3JpdHRlbiBCeSBIYXJ2ZXkgUmFuZGFsbCBcXFxcXHJcblxyXG5pbXBvcnQge1xyXG4gICAgQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgQ29sb3IsXHJcbiAgICBNZXNoLFxyXG4gICAgTWVzaFBob25nTWF0ZXJpYWwsXHJcbiAgICBQbGFuZUJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgVmVjdG9yMixcclxuICAgIFZlY3RvcjMsXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IHJhbmRvbUludEZyb21JbnRlcnZhbCB9IGZyb20gXCIuLi9BbGdvcml0aG1zL1ZlY3RvclV0aWxzXCI7XHJcbmltcG9ydCB7IGRlYnVnQ3ViZSB9IGZyb20gXCIuLi9Db3JlLUFQSS9nZW1vdHJ5TWFuYWdlclwiO1xyXG5cclxuaW1wb3J0IHsgUGVybGluLCBGQk0gfSBmcm9tIFwiLi4vQ29yZS1BUEkvUGVybGluTm9pc2UvUGVybGluZ05vaXNlXCI7XHJcbnZhciBTaW1wbGV4Tm9pc2UgPSByZXF1aXJlKFwic2ltcGxleC1ub2lzZVwiKTtcclxuXHJcbmxldCBjdXJyZW50VGVycmFpbjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXR1cm5UZXJyYWluUG9pbnRlcigpIHtcclxuICAgIHJldHVybiBjdXJyZW50VGVycmFpbjtcclxufVxyXG5cclxuLyplc2xpbnQgY29tcGxleGl0eTogW1wiZXJyb3JcIiwgMjBdKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVGVycmFpbihzZWVkLCBTY2VuZVRvR2V0KSB7XHJcbiAgICAvLy0tLS0tLS0tLS0tLVtNQUlOIEZVTkNUSU9OIFZBUklBQkxFU10tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBjb25zdCBzaW1wbGV4ID0gbmV3IFNpbXBsZXhOb2lzZShzZWVkKTtcclxuICAgIGxldCBnZW9tZXRyeSA9IG5ldyBQbGFuZUJ1ZmZlckdlb21ldHJ5KDUwMCwgNTAwLCAxMDAsIDEwMCk7XHJcbiAgICBsZXQgY29sb3VycyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uQXR0cmlidXRlID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIik7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bRWRpdCB0aGUgR2VvbXRyeSBBY2NvcmRpbmdseV0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uY291bnQ7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAvLyBHZXQgRGF0YSBwb3NpdGlvblxyXG4gICAgICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgdmVydGV4LmZyb21CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25BdHRyaWJ1dGUsIGkpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBIZWlnaHQgZnJvbSBQZXJsaW4gTm9pc2UgR2VuZXJhdG9yXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHNpbXBsZXgubm9pc2UyRCh2ZXJ0ZXgueCAvIDEyOCwgdmVydGV4LnkgLyAxMjgpICogMzA7XHJcbiAgICAgICAgLy8gU2V0IHRoZSBoZWlnaHQgYWNjb3JkaW5nbHlcclxuICAgICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5W2kgKiAzICsgMl0gPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBWZXJ0aWNlIGNvbG91cnMgYWNjb3JkaW5seVxyXG4gICAgICAgIGlmIChoZWlnaHQgPiAyMykge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMSwgMSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPiA1KSB7XHJcbiAgICAgICAgICAgIGNvbG91cnMucHVzaCgwLjU2LCAwLjU0LCAwLjQ4KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA8IDIpIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTAxLCAwLjc3MiwgMC44Nyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAuNTYsIDAuNjgsIDAuMTY2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bQ3JlYXRlIE1hdGVyaWFsXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIHZhciBtYXRlcmlhbCA9IG5ldyBNZXNoUGhvbmdNYXRlcmlhbCh7XHJcbiAgICAgICAgdmVydGV4Q29sb3JzOiBjb2xvdXJzLFxyXG4gICAgICAgIHJlZmxlY3Rpdml0eTogMCxcclxuICAgICAgICByb3VnaG5lc3M6IDEsXHJcbiAgICAgICAgZmxhdFNoYWRpbmc6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtDcmVhdGUgTWVzaF0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICB2YXIgcGxhbmUyID0gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgIHBsYW5lMi5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgIHBsYW5lMi5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgIHBsYW5lMi5wb3NpdGlvbi55ID0gLTM7XHJcbiAgICBwbGFuZTIucm90YXRlWChNYXRoLlBJIC8gMiArIE1hdGguUEkpO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0VkaXQgY29sb3VyIGF0dHJpYnV0ZV0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgXCJjb2xvclwiLFxyXG4gICAgICAgIG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2xvdXJzKSwgMylcclxuICAgICk7XHJcbiAgICAvL2dlb21ldHJ5LmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bQWRkIHRvIEJhc2UgU2NlbmVdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgY3VycmVudFRlcnJhaW4gPSBwbGFuZTI7XHJcbiAgICBwbGFuZTIubmFtZSA9IFwiTUFJTl9URVJSQUlOXCI7XHJcbiAgICBTY2VuZVRvR2V0LmFkZChwbGFuZTIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUZXJyYWluQ2h1bmsoc2VlZCwgUG9zaXRpb24sIGdhaW4sIGRpdmlzb3IpIHtcclxuICAgIC8vLS0tLS0tLS0tLS0tW01BSU4gRlVOQ1RJT04gVkFSSUFCTEVTXS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIC8vY29uc3Qgc2ltcGxleCA9IG5ldyBTaW1wbGV4Tm9pc2Uoc2VlZCk7XHJcbiAgICBsZXQgZ2VvbWV0cnkgPSBuZXcgUGxhbmVCdWZmZXJHZW9tZXRyeSg1MDAsIDUwMCwgMzAsIDMwKTtcclxuICAgIGxldCBjb2xvdXJzID0gW107XHJcbiAgICBjb25zdCBmYm0gPSBuZXcgRkJNKHtcclxuICAgICAgICBzZWVkOiBzZWVkLFxyXG4gICAgICAgIHNjYWxlOiAwLjAwNyxcclxuICAgICAgICBvY3RhdmVzOiA2LFxyXG4gICAgICAgIHBlcnNpc3RhbmNlOiAwLjUsXHJcbiAgICAgICAgbGFjdW5hcml0eTogMixcclxuICAgICAgICByZWRpc3RyaWJ1dGlvbjogMixcclxuICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2ltcGxleCA9IG5ldyBQZXJsaW4oc2VlZClcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLVtDcmVhdGUgTWF0ZXJpYWxdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgdmFyIG1hdGVyaWFsID0gbmV3IE1lc2hQaG9uZ01hdGVyaWFsKHtcclxuICAgICAgICB2ZXJ0ZXhDb2xvcnM6IGNvbG91cnMsXHJcbiAgICAgICAgcmVmbGVjdGl2aXR5OiAwLFxyXG4gICAgICAgIGZsYXRTaGFkaW5nOiB0cnVlLFxyXG4gICAgICAgIGJsZW5kaW5nOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bQ3JlYXRlIE1lc2hdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgdmFyIHBsYW5lMiA9IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICBwbGFuZTIucmVjZWl2ZVNoYWRvdyA9IHRydWU7XHJcbiAgICBwbGFuZTIuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICBwbGFuZTIucG9zaXRpb24uc2V0KFBvc2l0aW9uLngsIC0zLCBQb3NpdGlvbi55KTtcclxuICAgIHBsYW5lMi5yb3RhdGVYKE1hdGguUEkgLyAyICsgTWF0aC5QSSk7XHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uQXR0cmlidXRlID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIik7XHJcbiAgICAvLy0tLS0tLS0tLS0tLVtFZGl0IHRoZSBHZW9tdHJ5IEFjY29yZGluZ2x5XS0tLS0tLS0tLS0tLVxcXFxcclxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheS5sZW5ndGgvMzsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIC8vIEdldCBEYXRhIHBvc2l0aW9uXHJcbiAgICAgICAgY29uc3QgdmVydGV4ID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICB2ZXJ0ZXguZnJvbUJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbkF0dHJpYnV0ZSwgaSk7XHJcblxyXG4gICAgICAgIHBsYW5lMi5sb2NhbFRvV29ybGQodmVydGV4KVxyXG5cclxuICAgICAgICAvLyBDaGVjayBIZWlnaHQgZnJvbSBQZXJsaW4gTm9pc2UgR2VuZXJhdG9yXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGZibS5nZXQyKG5ldyBWZWN0b3IyKCh2ZXJ0ZXgueCArIChQb3NpdGlvbi54KSkgKiBkaXZpc29yLCAodmVydGV4LnkgLSAoUG9zaXRpb24ueSkpICogZGl2aXNvcikpICogZ2FpbiAqIDRcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRlcnJhaW5cIiwgbmV3IFZlY3RvcjIoKHZlcnRleC54ICsgKFBvc2l0aW9uLngpKSwgKHZlcnRleC55IC0gKFBvc2l0aW9uLnkpKSApLCBoZWlnaHQpXHJcbiAgICAgICAgLy8gU2V0IHRoZSBoZWlnaHQgYWNjb3JkaW5nbHlcclxuXHJcblxyXG4gICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlbaSAqIDMgKyAyXSA9IGhlaWdodDtcclxuXHJcbiAgICBcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIFZlcnRpY2UgY29sb3VycyBhY2NvcmRpbmx5XHJcbiAgICAgICAgaWYgKGhlaWdodCA+IDEwMCkge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMSwgMSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPiA1MCkge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMC41NiwgMC41NCwgMC40OCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPCAyKSB7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHRTZWNvbmRhcnkgPSBzaW1wbGV4LmdldDIobmV3IFZlY3RvcjIoKHZlcnRleC54ICsgKFBvc2l0aW9uLngpKSAqIGRpdmlzb3IsICh2ZXJ0ZXgueSAtIChQb3NpdGlvbi55KSkgKiBkaXZpc29yKSkgKiAwLjc1XHJcbiAgICAgICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlbaSAqIDMgKyAyXSA9IGhlaWdodFNlY29uZGFyeTtcclxuICAgICAgICAgICAgY29sb3Vycy5wdXNoKDAsIHJhbmRvbUludEZyb21JbnRlcnZhbCg0MDAsIDUwMCkgLyAxMDAwLCByYW5kb21JbnRGcm9tSW50ZXJ2YWwoNzAwLCA4MDApIC8gMTAwMClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xvdXJzLnB1c2goMC41NiwgMC42OCwgMC4xNjYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tW0VkaXQgY29sb3VyIGF0dHJpYnV0ZV0tLS0tLS0tLS0tLS1cXFxcXHJcbiAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgXCJjb2xvclwiLFxyXG4gICAgICAgIG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2xvdXJzKSwgMylcclxuICAgICk7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS1bQWRkIHRvIEJhc2UgU2NlbmVdLS0tLS0tLS0tLS0tXFxcXFxyXG4gICAgY3VycmVudFRlcnJhaW4gPSBwbGFuZTI7XHJcbiAgICBwbGFuZTIubmFtZSA9IGBUZXJyYWluX0NodW5rXyR7UG9zaXRpb24ueH06JHtQb3NpdGlvbi55fWA7XHJcbiAgICByZXR1cm4gcGxhbmUyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlcnJhaW5IZWlnaHQocG9zaXRpb24sIHNlZWQsIGdhaW4sIGRpdmlzb3IsIHNjZW5lKSB7XHJcbiAgICBjb25zdCBmYm0gPSBuZXcgRkJNKHtcclxuICAgICAgICBzZWVkOiBzZWVkLFxyXG4gICAgICAgIHNjYWxlOiAwLjAwNyxcclxuICAgICAgICBvY3RhdmVzOiA2LFxyXG4gICAgICAgIHBlcnNpc3RhbmNlOiAwLjUsXHJcbiAgICAgICAgbGFjdW5hcml0eTogMixcclxuICAgICAgICByZWRpc3RyaWJ1dGlvbjogMixcclxuICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgfSk7XHJcbiAgICAvL2NvbnNvbGUudGFibGUocG9zaXRpb24pXHJcbiAgICBsZXQgaGVpZ2h0ID0gZmJtLmdldDIobmV3IFZlY3RvcjIocG9zaXRpb24ueCAqIGRpdmlzb3IsIHBvc2l0aW9uLnogKiBkaXZpc29yKSkgKiBnYWluICogNFxyXG4gICAgY29uc29sZS5sb2coXCJ0cmVlXCIsIG5ldyBWZWN0b3IyKDc1MCw3NTApLCBmYm0uZ2V0MihuZXcgVmVjdG9yMig3NTAgICogZGl2aXNvciw3NTAgICogZGl2aXNvcikpICogZ2FpbiAqIDQpXHJcbiAgICAvKmxldCBjdWJlID0gZGVidWdDdWJlKClcclxuICAgIHNjZW5lLmFkZChjdWJlKVxyXG4gICAgY3ViZS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCAsIGhlaWdodCwgcG9zaXRpb24ueilcclxuICAgIGN1YmUubWF0ZXJpYWwuY29sb3IgPSBuZXcgQ29sb3IoaGVpZ2h0KjIpKi9cclxuICAgIHJldHVybiBoZWlnaHQgXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyLCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IHJvdW5kbnVtIH0gZnJvbSBcIi4uLy4uL0FsZ29yaXRobXMvTWF0aFV0aWxzXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlVGVycmFpbkNodW5rIH0gZnJvbSBcIi4uL1Byb2NlZHVsZVRlcnJhaW5cIjtcclxuaW1wb3J0IHsgR2VuZXJhdGVUcmVlcyB9IGZyb20gXCIuLi9zdGF0aWNBc3NldHMvdHJlZUJ1aWxkZXJcIjtcclxuaW1wb3J0IHsgY2hlY2tCaW9tZUxvY2F0aW9uIH0gZnJvbSBcIi4vdXRpbHMvR2VuZXJhdGVCaW9tZXNNYXAudHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVRlcnJhaW5Bcm91bmRQbGF5ZXIoc2VlZCwgY2FtZXJhLCBzY2VuZSkge1xyXG4gICAgbGV0IGxvYWRlZENodW5rcyA9IHt9O1xyXG4gICAgbGV0IGNodW5rc0luTWVtID0ge307XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHZlY3RvciA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgY2FtZXJhLmdldFdvcmxkUG9zaXRpb24odmVjdG9yKTtcclxuICAgICAgICBsZXQgeW91ckNodW5rID0gbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgIHJvdW5kbnVtKHZlY3Rvci54LCA1MDApLFxyXG4gICAgICAgICAgICByb3VuZG51bSh2ZWN0b3IueiwgNTAwKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBjaHVua3lUaGluZyA9IChDaHVua1lvdXJJbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoQ2h1bmtZb3VySW4ueCA9PT0gLTApIHtcclxuICAgICAgICAgICAgICAgIENodW5rWW91ckluLnggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChDaHVua1lvdXJJbi55ID09PSAtMCkge1xyXG4gICAgICAgICAgICAgICAgQ2h1bmtZb3VySW4ueSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgbG9hZGVkQ2h1bmtzW2Ake0NodW5rWW91ckluLnh9OiR7Q2h1bmtZb3VySW4ueX1gXSAhPT1cclxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIGxvYWRlZENodW5rc1tgJHtDaHVua1lvdXJJbi54fToke0NodW5rWW91ckluLnl9YF0gPT09IHRydWVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFeGlzdGluZyB0ZXJyYWluLCBsZWZ0IGhlYXIgZm9yIGEgZnV0dXJlIEFQSVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgQ2h1bmtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2FkZWRDaHVua3NbYCR7Q2h1bmtZb3VySW4ueH06JHtDaHVua1lvdXJJbi55fWBdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBjaHVuayA9IGdlbmVyYXRlVGVycmFpbkNodW5rKHNlZWQsIENodW5rWW91ckluLCAxMjAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICBHZW5lcmF0ZVRyZWVzKDEwMDAsIHNjZW5lLCBuZXcgVmVjdG9yMyhDaHVua1lvdXJJbi54LTI1MCwgMjUwLENodW5rWW91ckluLnktMjUwKSwgbmV3IFZlY3RvcjMoQ2h1bmtZb3VySW4ueCsyNTAsMjUwLENodW5rWW91ckluLnkrMjUwKSwgc2VlZCwgMTIwLCAwLjEsIENodW5rWW91ckluKVxyXG4gICAgICAgICAgICAgICAgY2h1bmtzSW5NZW1bYCR7Q2h1bmtZb3VySW4ueH06JHtDaHVua1lvdXJJbi55fWBdID0gY2h1bms7XHJcbiAgICAgICAgICAgICAgICBzY2VuZS5hZGQoY2h1bmspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2h1bmt5VGhpbmcoeW91ckNodW5rKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnkpKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnkrNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueCwgeW91ckNodW5rLnkrNTAwKSlcclxuICAgICAgICBjaHVua3lUaGluZyhuZXcgVmVjdG9yMih5b3VyQ2h1bmsueC01MDAsIHlvdXJDaHVuay55KzUwMCkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueSkpXHJcbiAgICAgICAgY2h1bmt5VGhpbmcobmV3IFZlY3RvcjIoeW91ckNodW5rLngtNTAwLCB5b3VyQ2h1bmsueS01MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54LCB5b3VyQ2h1bmsueS01MDApKVxyXG4gICAgICAgIGNodW5reVRoaW5nKG5ldyBWZWN0b3IyKHlvdXJDaHVuay54KzUwMCwgeW91ckNodW5rLnktNTAwKSlcclxuICAgIH0sIDEwMDApO1xyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgTXVsdGlwbHlWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL0FsZ29yaXRobXMvVmVjdG9yTWF0aHMudHNcIjtcclxuaW1wb3J0ICogYXMgU2ltcGxleE5vaXNlIGZyb20gJ3NpbXBsZXgtbm9pc2UnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQmlvbWVMb2NhdGlvbihwb3NpdGlvbjpWZWN0b3IyLCBzZWVkOm51bWJlciwgZ2FpbjpudW1iZXIgPSAxLCBtaW5IZWlnaHQ6bnVtYmVyID0gMCk6U3RyaW5ne1xyXG4gICAgLy8gQ3JlYXRlIG5ldyBub2lzZSBtYXAgXFxcXFxyXG4gICAgbGV0IG5vaXNlTWFwID0gbmV3IFNpbXBsZXhOb2lzZShgJHtzZWVkfWApXHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIFggdmFsdWUgXFxcXFxyXG4gICAgbGV0IHZlY3RvciA9IE11bHRpcGx5VmVjdG9yMihwb3NpdGlvbiwgMC4wNSlcclxuICAgIGxldCBYVmFsdWUgPSBub2lzZU1hcC5ub2lzZTJEKHZlY3Rvci54LCB2ZWN0b3IueSkgKyBtaW5IZWlnaHRcclxuICAgIGNvbnNvbGUubG9nKFhWYWx1ZSlcclxuXHJcbiAgICByZXR1cm4gWFZhbHVlID4gMCA/IFwiUGxhaW5zXCIgOiBcIlNlYVwiXHJcblxyXG59XHJcbiIsIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxyXG5cclxuaW1wb3J0IHtcclxuICAgIERvdWJsZVNpZGUsXHJcbiAgICBHcm91cCxcclxuICAgIE1lc2gsXHJcbiAgICBNZXNoUGhvbmdNYXRlcmlhbCxcclxuICAgIFNwaGVyZUdlb21ldHJ5LFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuLy8gUmFuZG9tbHkgZGVscGxhY2UgY2xvdWQgdmVydGljaWVzXHJcbmNvbnN0IG1hcCA9ICh2YWwsIHNtaW4sIHNtYXgsIGVtaW4sIGVtYXgpID0+XHJcbiAgICAoKGVtYXggLSBlbWluKSAqICh2YWwgLSBzbWluKSkgLyAoc21heCAtIHNtaW4pICsgZW1pbjtcclxuY29uc3Qgaml0dGVyID0gKGdlb21ldHJ5LCBwZXIpID0+IHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5jb3VudDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlbaSAqIDNdICs9IG1hcChcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgLXBlcixcclxuICAgICAgICAgICAgcGVyXHJcbiAgICAgICAgKTtcclxuICAgICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5W2kgKiAzICsgMV0gKz0gbWFwKFxyXG4gICAgICAgICAgICBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAtcGVyLFxyXG4gICAgICAgICAgICBwZXJcclxuICAgICAgICApO1xyXG4gICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlbaSAqIDMgKyAyXSArPSBtYXAoXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIC1wZXIsXHJcbiAgICAgICAgICAgIHBlclxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgR2VuZXJhdGVDbG91ZHMge1xyXG4gICAgY29uc3RydWN0b3IocG9zLCBzY2VuZSwgc3BlZWQsIHNjYWxlKSB7XHJcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdHVmdDEgPSBuZXcgU3BoZXJlR2VvbWV0cnkoMS41ICogc2NhbGUsIDcsIDExKTtcclxuICAgICAgICB0dWZ0MS50cmFuc2xhdGUoLTIgKiBzY2FsZSwgMCwgMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHR1ZnQzID0gbmV3IFNwaGVyZUdlb21ldHJ5KDEuNSAqIHNjYWxlLCA3LCAxMSk7XHJcbiAgICAgICAgdHVmdDMudHJhbnNsYXRlKDIgKiBzY2FsZSwgMCwgMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHR1ZnQyID0gbmV3IFNwaGVyZUdlb21ldHJ5KDIuMCAqIHNjYWxlLCA3LCAxMSk7XHJcbiAgICAgICAgdHVmdDIudHJhbnNsYXRlKDAsIDAsIDApO1xyXG5cclxuICAgICAgICBqaXR0ZXIodHVmdDEsIDAuMik7XHJcbiAgICAgICAgaml0dGVyKHR1ZnQyLCAwLjEpO1xyXG4gICAgICAgIGppdHRlcih0dWZ0MywgMC4xKTtcclxuXHJcbiAgICAgICAgdHVmdDEuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0ID0gbmV3IE1lc2hQaG9uZ01hdGVyaWFsKHtcclxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgZmxhdFNoYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIHNpZGU6IERvdWJsZVNpZGUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBjbG91ZCA9IG5ldyBNZXNoKHR1ZnQxLCBtYXQpO1xyXG4gICAgICAgIGxldCBjbG91ZDEgPSBuZXcgTWVzaCh0dWZ0MiwgbWF0KTtcclxuICAgICAgICBsZXQgY2xvdWQyID0gbmV3IE1lc2godHVmdDMsIG1hdCk7XHJcblxyXG4gICAgICAgIGdyb3VwLmFkZChjbG91ZCk7XHJcbiAgICAgICAgZ3JvdXAuYWRkKGNsb3VkMSk7XHJcbiAgICAgICAgZ3JvdXAuYWRkKGNsb3VkMik7XHJcblxyXG4gICAgICAgIHNjZW5lLmFkZChncm91cCk7XHJcbiAgICAgICAgZ3JvdXAuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgZ3JvdXAucmVjZWl2ZVNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgZ3JvdXAucG9zaXRpb24ueCA9IHBvcy54O1xyXG4gICAgICAgIGdyb3VwLnBvc2l0aW9uLnkgPSBwb3MueTtcclxuICAgICAgICBncm91cC5wb3NpdGlvbi56ID0gcG9zLno7XHJcblxyXG4gICAgICAgIHRoaXMuZ3Jhc3MgPSBncm91cDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGxldCBnZW9zID0gdGhpcy5ncmFzcztcclxuICAgICAgICBnZW9zLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICBpZiAoZ2Vvcy5wb3NpdGlvbi54ID4gNDAwKSB7XHJcbiAgICAgICAgICAgIGdlb3MucG9zaXRpb24ueCA9IHRoaXMucG9zLng7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxyXG5cclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XHJcbmxldCBbdywgYSwgcywgZCwgdXAsIGRvd24sIGUsIHEsIHNoaWZ0XSA9IFtcclxuICAgIGZhbHNlLFxyXG4gICAgZmFsc2UsXHJcbiAgICBmYWxzZSxcclxuICAgIGZhbHNlLFxyXG4gICAgZmFsc2UsXHJcbiAgICBmYWxzZSxcclxuICAgIGZhbHNlLFxyXG4gICAgZmFsc2UsXHJcbiAgICAxLFxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyb2xIYW5kbGVySW5pdChkb2N1bWVudCwgY2hpbGQyKSB7XHJcbiAgICAvKmVzbGludCBjb21wbGV4aXR5OiBbXCJlcnJvclwiLCAyMF0qL1xyXG4gICAgZnVuY3Rpb24gb25Eb2N1bWVudEtleURvd24oZXZlbnQsIHZhbCkge1xyXG4gICAgICAgIGlmIChjaGlsZDIgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIga2V5Q29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSA4Nykge1xyXG4gICAgICAgICAgICB3ID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gODMpIHtcclxuICAgICAgICAgICAgcyA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDY1KSB7XHJcbiAgICAgICAgICAgIGEgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSA2OCkge1xyXG4gICAgICAgICAgICBkID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gMzgpIHtcclxuICAgICAgICAgICAgdXAgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSA0MCkge1xyXG4gICAgICAgICAgICBkb3duID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gNjkpIHtcclxuICAgICAgICAgICAgZSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDgxKSB7XHJcbiAgICAgICAgICAgIHEgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSAxNikge1xyXG4gICAgICAgICAgICBzaGlmdCA9IHZhbCA/IDAuNSA6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJrZXlkb3duXCIsXHJcbiAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgb25Eb2N1bWVudEtleURvd24oZSwgdHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWxzZVxyXG4gICAgKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJrZXl1cFwiLFxyXG4gICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG9uRG9jdW1lbnRLZXlEb3duKGUsIGZhbHNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICApO1xyXG59XHJcblxyXG4vKmVzbGludCBjb21wbGV4aXR5OiBbXCJlcnJvclwiLCAyMF0qL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udHJvbEhhbmRsZXJVcGRhdGUoQ2FtZXJhKSB7XHJcbiAgICBpZiAodykge1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIENhbWVyYS5nZXRXb3JsZERpcmVjdGlvbihkaXJlY3Rpb24pO1xyXG4gICAgICAgIENhbWVyYS5wb3NpdGlvbi5hZGQoZGlyZWN0aW9uLm11bHRpcGx5U2NhbGFyKHNoaWZ0ID09PSAxID8gMSA6IDAuMjUpKTtcclxuICAgIH1cclxuICAgIGlmIChzKSB7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgQ2FtZXJhLmdldFdvcmxkRGlyZWN0aW9uKGRpcmVjdGlvbik7XHJcbiAgICAgICAgQ2FtZXJhLnBvc2l0aW9uLmFkZChcclxuICAgICAgICAgICAgZGlyZWN0aW9uLm11bHRpcGx5U2NhbGFyKC0oc2hpZnQgPT09IDEgPyAxIDogMC4yNSkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChhKSB7XHJcbiAgICAgICAgQ2FtZXJhLnJvdGF0ZVkoMC4wNCAqIHNoaWZ0KTtcclxuICAgIH1cclxuICAgIGlmIChkKSB7XHJcbiAgICAgICAgQ2FtZXJhLnJvdGF0ZVkoLTAuMDQgKiBzaGlmdCk7XHJcbiAgICB9XHJcbiAgICBpZiAodXApIHtcclxuICAgICAgICBDYW1lcmEucm90YXRlWCgwLjA0ICogc2hpZnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRvd24pIHtcclxuICAgICAgICBDYW1lcmEucm90YXRlWCgtMC4wNCAqIHNoaWZ0KTtcclxuICAgIH1cclxuICAgIGlmIChxKSB7XHJcbiAgICAgICAgQ2FtZXJhLnJvdGF0ZVooMC4wMiAqIHNoaWZ0KTtcclxuICAgIH1cclxuICAgIGlmIChlKSB7XHJcbiAgICAgICAgQ2FtZXJhLnJvdGF0ZVooLTAuMDIgKiBzaGlmdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5sZXQgbGlzdGVuaW5nSG9va3MgPSB7fTtcclxuZXhwb3J0IGZ1bmN0aW9uIENvbnRyb2xFdmVudExpc3RlbmVyKG9jdW1lbnQsIGNoaWxkMikge1xyXG4gICAgbGV0IFt3S2V5LCBhS2V5LCBzS2V5LCBkS2V5LCB1cEtleSwgZG93bktleSwgZUtleSwgcUtleSwgc2hpZnRLZXksIHpLZXksIHhLZXldID0gW1xyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgXTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkRvY3VtZW50S2V5RG93bkV2ZW50KGV2ZW50LCB2YWwpIHtcclxuICAgICAgICBpZiAoY2hpbGQyID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGtleUNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gODcpIHtcclxuICAgICAgICAgICAgd0tleSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDgzKSB7XHJcbiAgICAgICAgICAgIHNLZXkgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSA2NSkge1xyXG4gICAgICAgICAgICBhS2V5ID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gNjgpIHtcclxuICAgICAgICAgICAgZEtleSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDM4KSB7XHJcbiAgICAgICAgICAgIHVwS2V5ID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gNDApIHtcclxuICAgICAgICAgICAgZG93bktleSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDY5KSB7XHJcbiAgICAgICAgICAgIGVLZXkgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSA4MSkge1xyXG4gICAgICAgICAgICBxS2V5ID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gODgpIHtcclxuICAgICAgICAgICAgektleSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDkwKSB7XHJcbiAgICAgICAgICAgIHhLZXkgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSAxNikge1xyXG4gICAgICAgICAgICBzaGlmdEtleSA9IHZhbCA/IDAuNSA6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGxpc3RlbmluZ0hvb2tzKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSh7d0tleSwgYUtleSwgc0tleSwgZEtleSwgdXBLZXksIGRvd25LZXksIGVLZXksIHFLZXksIHNoaWZ0S2V5LCB6S2V5LCB4S2V5fSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcImtleWRvd25cIixcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBvbkRvY3VtZW50S2V5RG93bkV2ZW50KGUsIHRydWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFsc2VcclxuICAgICk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwia2V5dXBcIixcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBvbkRvY3VtZW50S2V5RG93bkV2ZW50KGUsIGZhbHNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuVG9Db25yb2xzKGFyZykge1xyXG4gICAgbGV0IHV1aWQgPSB2NCgpO1xyXG4gICAgbGlzdGVuaW5nSG9va3NbdXVpZF0gPSBhcmc7XHJcbiAgICByZXR1cm4gdXVpZDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQ2xlYW5VcExpc3RlbmVyKHV1aWQpIHtcclxuICAgIGRlbGV0ZSBsaXN0ZW5pbmdIb29rc1t1dWlkXTtcclxufVxyXG4iLCIvLyBXcml0dGVuIEJ5IEhhcnZleSBSYW5kYWxsIFxcXFxcclxuXHJcbmltcG9ydCB7XHJcbiAgQm94R2VvbWV0cnksXHJcbiAgQ29sb3IsXHJcbiAgQ3lsaW5kZXJHZW9tZXRyeSxcclxuICBHcm91cCxcclxuICBNZXNoLFxyXG4gIE1lc2hMYW1iZXJ0TWF0ZXJpYWwsXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IGxpc3RlblRvRXZlbnQgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvQ29ubmVjdEFQSVwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZUxhYmVsIH0gZnJvbSBcIi4uL25hbWV0YWdcIjtcclxubGV0IHBsYXllcnMgPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYWtlTmV3Q3ViZVBsYXllcihcclxuICBjb2xvciA9IFwicmdiKDAsMCwwKVwiLFxyXG4gIG5hbWUgPSBcInVua293blwiLFxyXG4gIFNjZW5lVG9HZXRcclxuKSB7XHJcbiAgY29uc3QgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcclxuICBjb25zdCBnZW9tZXRyeSA9IG5ldyBCb3hHZW9tZXRyeSgxLCAxLCAxKTtcclxuICBjb25zdCBtYXRlcmlhbCA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtcclxuICAgIGNvbG9yOiBuZXcgQ29sb3IoY29sb3IpLFxyXG4gICAgZW1pc3NpdmU6IG5ldyBDb2xvcihjb2xvciksXHJcbiAgfSk7XHJcbiAgY29uc3QgY3ViZSA9IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgZ3JvdXAuYWRkKGN1YmUpO1xyXG4gIGNvbnN0IGN5Y2xpbmRlciA9IG5ldyBDeWxpbmRlckdlb21ldHJ5KDAuMywgMC4zLCAwLjYsIDMwKTtcclxuICBjb25zdCBtYXRlcmlhbDIgPSBuZXcgTWVzaExhbWJlcnRNYXRlcmlhbCh7IGNvbG9yOiBcIiMwMDAwMDBcIiB9KTtcclxuICBjb25zdCBjeWxpbmRlckJ1aWxkID0gbmV3IE1lc2goY3ljbGluZGVyLCBtYXRlcmlhbDIpO1xyXG4gIGN5bGluZGVyQnVpbGQucm90YXRlWChNYXRoLlBJIC8gMiArIE1hdGguUEkpO1xyXG4gIGN5bGluZGVyQnVpbGQucG9zaXRpb24uc2V0KDAsIDAsIC0wLjYpO1xyXG4gIGdyb3VwLmFkZChjeWxpbmRlckJ1aWxkKTtcclxuXHJcbiAgZ2VuZXJhdGVMYWJlbChuYW1lLCBncm91cCk7XHJcbiAgU2NlbmVUb0dldC5hZGQoZ3JvdXApO1xyXG4gIGdyb3VwLm5hbWUgPSBuYW1lO1xyXG4gIHJldHVybiBncm91cDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEluaXRNYWluR2FtZUhhbmRsZXIoU2NlbmVUb0dldCkge1xyXG4gIGxpc3RlblRvRXZlbnQoXCJOZXdQbGF5ZXJcIiwgKGlkLCBkYXRhKSA9PiB7XHJcbiAgICAvL2xldCBjdWJlID0gbWFrZUN1YmUoZGF0YS5jb2xvciwgZGF0YS5uYW1lLCBTY2VuZVRvR2V0KTtcclxuICAgIC8vYWRkdG9HYW1lRmVlZChkYXRhPy5uYW1lLCBcIkpvaW5lZCB0aGUgZ2FtZSFcIik7XHJcblxyXG4gICAgLy9wbGF5ZXJzW2Ake2lkfWBdID0gY3ViZTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWcoYmFzZVdpZHRoLCBzaXplLCBuYW1lKSB7XHJcbiAgICBjb25zdCBib3JkZXJTaXplID0gMjtcclxuICAgIGNvbnN0IGN0eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIGNvbnN0IGZvbnQgPSBgJHtzaXplfXB4IFZlcmRhbmFgO1xyXG4gICAgY3R4LmZvbnQgPSBmb250O1xyXG4gICAgLy8gbWVhc3VyZSBob3cgbG9uZyB0aGUgbmFtZSB3aWxsIGJlXHJcbiAgICBjb25zdCB0ZXh0V2lkdGggPSBjdHgubWVhc3VyZVRleHQobmFtZSkud2lkdGg7XHJcblxyXG4gICAgY29uc3QgZG91YmxlQm9yZGVyU2l6ZSA9IGJvcmRlclNpemUgKiAyO1xyXG4gICAgY29uc3Qgd2lkdGggPSBiYXNlV2lkdGggKyBkb3VibGVCb3JkZXJTaXplO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gc2l6ZSArIGRvdWJsZUJvcmRlclNpemU7XHJcbiAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAvLyBuZWVkIHRvIHNldCBmb250IGFnYWluIGFmdGVyIHJlc2l6aW5nIGNhbnZhc1xyXG4gICAgY3R4LmZvbnQgPSBmb250O1xyXG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuXHJcbiAgICAvL2N0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XHJcbiAgICAvL2N0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAvLyBzY2FsZSB0byBmaXQgYnV0IGRvbid0IHN0cmV0Y2hcclxuICAgIGNvbnN0IHNjYWxlRmFjdG9yID0gTWF0aC5taW4oMSwgYmFzZVdpZHRoIC8gdGV4dFdpZHRoKTtcclxuICAgIGN0eC50cmFuc2xhdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcclxuICAgIGN0eC5zY2FsZShzY2FsZUZhY3RvciwgMSk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KG5hbWUsIDAsIDApO1xyXG5cclxuICAgIHJldHVybiBjdHguY2FudmFzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVMYWJlbChuYW1lLCBncm91cCkge1xyXG4gICAgY29uc3QgY2FudmFzID0gY3JlYXRlVGFnKDMwMCwgMzIsIG5hbWUpO1xyXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGNhbnZhcyk7XHJcbiAgICAvLyBiZWNhdXNlIG91ciBjYW52YXMgaXMgbGlrZWx5IG5vdCBhIHBvd2VyIG9mIDJcclxuICAgIC8vIGluIGJvdGggZGltZW5zaW9ucyBzZXQgdGhlIGZpbHRlcmluZyBhcHByb3ByaWF0ZWx5LlxyXG4gICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XHJcbiAgICB0ZXh0dXJlLndyYXBTID0gVEhSRUUuQ2xhbXBUb0VkZ2VXcmFwcGluZztcclxuICAgIHRleHR1cmUud3JhcFQgPSBUSFJFRS5DbGFtcFRvRWRnZVdyYXBwaW5nO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsTWF0ZXJpYWwgPSBuZXcgVEhSRUUuU3ByaXRlTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogdGV4dHVyZSxcclxuICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgLy8gaWYgdW5pdHMgYXJlIG1ldGVycyB0aGVuIDAuMDEgaGVyZSBtYWtlcyBzaXplXHJcbiAgICAvLyBvZiB0aGUgbGFiZWwgaW50byBjZW50aW1ldGVycy5cclxuICAgIGNvbnN0IGxhYmVsQmFzZVNjYWxlID0gMC4wMTtcclxuXHJcbiAgICBjb25zdCBsYWJlbCA9IG5ldyBUSFJFRS5TcHJpdGUobGFiZWxNYXRlcmlhbCk7XHJcbiAgICBncm91cC5hZGQobGFiZWwpO1xyXG4gICAgbGFiZWwucG9zaXRpb24ueSA9IDE7XHJcblxyXG4gICAgbGFiZWwuc2NhbGUueCA9IGNhbnZhcy53aWR0aCAqIGxhYmVsQmFzZVNjYWxlO1xyXG4gICAgbGFiZWwuc2NhbGUueSA9IGNhbnZhcy5oZWlnaHQgKiBsYWJlbEJhc2VTY2FsZTtcclxuICAgIHJldHVybiBncm91cDtcclxufVxyXG4iLCJpbXBvcnQgeyBHcm91cCwgTWVzaFBob25nTWF0ZXJpYWwsIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgcmFkaWFudHMgfSBmcm9tIFwiLi4vLi4vQWxnb3JpdGhtcy9kZWdUb1JhZFwiO1xyXG5pbXBvcnQgeyBhZGRHTEJGaWxlIH0gZnJvbSBcIi4uLy4uL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9HTEJMb2FkZXJcIjtcclxuaW1wb3J0IHsgZGVidWdDdWJlIH0gZnJvbSBcIi4uLy4uL0NvcmUtQVBJL2dlbW90cnlNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVBvaW50TGlnaHQgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvTGlnaHRpbmdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IGFkZFRvUmVuZGVyU2VxdWVuY2UgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvUmVuZGVyaW5nSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBsaXN0ZW5Ub0NvbnJvbHMgfSBmcm9tIFwiLi4vY29udHJvbHNcIjtcclxuaW1wb3J0IHsgZ2V0RGF5U3RhdGUsIHJlbW92ZUZyb21EYXlUaW1lSG9vayB9IGZyb20gXCIuLi9EYXlOaWdodEN5Y2xlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFrZVBsYW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKFNjZW5lVG9HZXQsIHNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5TY2VuZVRvR2V0ID0gU2NlbmVUb0dldDtcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IG5ldyBHcm91cCgpO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuZWxldmF0b3JQaXRjaCA9IDA7XHJcbiAgICAgICAgdGhpcy5haXJlbG9uZVBpdGNoID0gMDtcclxuICAgICAgICB0aGlzLnJ1ZGRlclBpdGNoID0gMDtcclxuICAgICAgICB0aGlzLmNoZWNrZXIgPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2FkRmlsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5wbGFuZSA9IGF3YWl0IGFkZEdMQkZpbGUoXHJcbiAgICAgICAgICAgIFwiL0FpcmNyYWZ0L0Jhc2ljUGxhbmUvUGxhbmUuZ2xiXCIsXHJcbiAgICAgICAgICAgIHRoaXMuU2NlbmVUb0dldFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IGF3YWl0IGFkZEdMQkZpbGUoXHJcbiAgICAgICAgICAgIFwiL0FpcmNyYWZ0L0Jhc2ljUGxhbmUvQmxhZGVzLmdsYlwiLFxyXG4gICAgICAgICAgICB0aGlzLlNjZW5lVG9HZXRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubGVmdEFpcmVsb25lID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICAgICAgXCIvQWlyY3JhZnQvQmFzaWNQbGFuZS9MZWZ0QWlyZWxvbmUuZ2xiXCIsXHJcbiAgICAgICAgICAgIHRoaXMuU2NlbmVUb0dldFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5yaWdodEFpcmVsb25lID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICAgICAgXCIvQWlyY3JhZnQvQmFzaWNQbGFuZS9SaWdodEFpcmVsb25lLmdsYlwiLFxyXG4gICAgICAgICAgICB0aGlzLlNjZW5lVG9HZXRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubGVmdENvbnRyb2xTdXJmYWNlID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICAgICAgXCIvQWlyY3JhZnQvQmFzaWNQbGFuZS9MZWZ0V2luZ0NvbnRyb2xzU3VyZmFjZS5nbGJcIixcclxuICAgICAgICAgICAgdGhpcy5TY2VuZVRvR2V0XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnJpZ2h0Q29udHJvbFN1cmZhY2UgPSBhd2FpdCBhZGRHTEJGaWxlKFxyXG4gICAgICAgICAgICBcIi9BaXJjcmFmdC9CYXNpY1BsYW5lL1JpZ2h0V2luZ0NvbnRyb2xzU3VyZmFjZS5nbGJcIixcclxuICAgICAgICAgICAgdGhpcy5TY2VuZVRvR2V0XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnJ1ZGRlciA9IGF3YWl0IGFkZEdMQkZpbGUoXHJcbiAgICAgICAgICAgIFwiL0FpcmNyYWZ0L0Jhc2ljUGxhbmUvUnVkZGVyLmdsYlwiLFxyXG4gICAgICAgICAgICB0aGlzLlNjZW5lVG9HZXRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIENyZWF0ZUdyb3VwQW5kUG9zKCkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMucGxhbmUuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMucHJvcHMuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMubGVmdEFpcmVsb25lLnNjZW5lKTtcclxuICAgICAgICB0aGlzLmdyb3VwLmFkZCh0aGlzLnJpZ2h0QWlyZWxvbmUuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMucmlnaHRDb250cm9sU3VyZmFjZS5zY2VuZSk7XHJcbiAgICAgICAgdGhpcy5ncm91cC5hZGQodGhpcy5sZWZ0Q29udHJvbFN1cmZhY2Uuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMucnVkZGVyLnNjZW5lKTtcclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0QWlyZWxvbmUuc2NlbmUucG9zaXRpb24uc2V0KDEyLjkzNiwgMTUuOTk0LCAtNTkuMjY0KTtcclxuICAgICAgICB0aGlzLnJpZ2h0QWlyZWxvbmUuc2NlbmUucG9zaXRpb24uc2V0KC0xMi40OTUsIDE1Ljg4OCwgLTU5LjI5NCk7XHJcblxyXG4gICAgICAgIHRoaXMubGVmdENvbnRyb2xTdXJmYWNlLnNjZW5lLnBvc2l0aW9uLnNldCg0Ni4yNDMsIDIyLjUzNiwgLTEzLjU0MSk7XHJcbiAgICAgICAgdGhpcy5sZWZ0Q29udHJvbFN1cmZhY2Uuc2NlbmUucm90YXRlWShyYWRpYW50cygtNykpO1xyXG5cclxuICAgICAgICB0aGlzLnJpZ2h0Q29udHJvbFN1cmZhY2Uuc2NlbmUucG9zaXRpb24uc2V0KFxyXG4gICAgICAgICAgICAtNDYuMjcxOCxcclxuICAgICAgICAgICAgMjIuNTQxMSxcclxuICAgICAgICAgICAgLTEzLjU0NDdcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucmlnaHRDb250cm9sU3VyZmFjZS5zY2VuZS5yb3RhdGVZKHJhZGlhbnRzKDYuOCkpO1xyXG4gICAgICAgIHRoaXMucmlnaHRDb250cm9sU3VyZmFjZS5zY2VuZS5yb3RhdGVaKHJhZGlhbnRzKC0zLjUpKTtcclxuICAgICAgICAvL3RoaXMucmlnaHRDb250cm9sU3VyZmFjZS5zY2VuZS5yb3RhdGVYKHJhZGlhbnRzKDE4My41NykpXHJcblxyXG4gICAgICAgIHRoaXMucnVkZGVyLnNjZW5lLnBvc2l0aW9uLnNldCgtMC4wMjIsIDI0LjY3LCAtNjguMTcpO1xyXG4gICAgICAgIHRoaXMucnVkZGVyLnNjZW5lLnJvdGF0ZVgocmFkaWFudHMoLTIyKSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuc2NlbmUucG9zaXRpb24uc2V0KDAsIDE1LCAyMik7XHJcbiAgICAgICAgdGhpcy5TY2VuZVRvR2V0LmFkZCh0aGlzLmdyb3VwKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncm91cC5zY2FsZS5zZXQoMC4wNSwgMC4wNSwgMC4wNSk7XHJcblxyXG4gICAgICAgIGxldCBbcHJvcHMsIGxlZnRBaXJlbG9uZV0gPSBbdGhpcy5wcm9wcy5zY2VuZSwgdGhpcy5sZWZ0QWlyZWxvbmUuc2NlbmVdO1xyXG4gICAgICAgIC8vIEZvciB0ZXN0aW5nIFxcXFxcclxuXHJcbiAgICAgICAgbGV0IGxpZ2h0ID0gY3JlYXRlUG9pbnRMaWdodCgweGZmMDAwMCwgMywgWzYwLCAyMi41LCAtMTBdLCAyLjUpO1xyXG4gICAgICAgIGxldCBsaWdodDIgPSBjcmVhdGVQb2ludExpZ2h0KDB4MDBmZjAwLCAzLCBbLTYwLCAyMi41LCAtMTBdLCAyLjUpO1xyXG4gICAgICAgIGxldCB3aGl0ZUxpZ2h0ID0gY3JlYXRlUG9pbnRMaWdodCgweGZmZmZmZiwgMywgWzAsIDMwLCAtNjBdLCAyLjUpO1xyXG4gICAgICAgIGxldCBkYXkgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5ncm91cC5hZGQobGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cC5hZGQobGlnaHQyKTtcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihnZXREYXlTdGF0ZSgpID09PSBmYWxzZSAmJiBkYXkgPT09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgZGF5ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAuYWRkKGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAuYWRkKGxpZ2h0Mik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGdldERheVN0YXRlKCkgPT09IHRydWUgJiYgZGF5ID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICBkYXkgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnJlbW92ZShsaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnJlbW92ZShsaWdodDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMClcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRFdmVsYXRvclBpdGNoID0gMDtcclxuICAgICAgICBsZXQgYWlyZWxvbmVQaXRjaCA9IDA7XHJcbiAgICAgICAgbGV0IHJ1ZGRlclBpdGNoID0gMDtcclxuICAgICAgICBhZGRUb1JlbmRlclNlcXVlbmNlKFxyXG4gICAgICAgICAgICBcIk1haW5cIixcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLmdldFdvcmxkRGlyZWN0aW9uKGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnBvc2l0aW9uLmFkZChkaXJlY3Rpb24ubXVsdGlwbHlTY2FsYXIodGhpcy5zcGVlZCkpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmdyb3VwLnBvc2l0aW9uLnogKz0gdGhpcy5zcGVlZDtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5yb3RhdGVaKHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRFdmVsYXRvclBpdGNoIDwgdGhpcy5lbGV2YXRvclBpdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0QWlyZWxvbmUuc2NlbmUucm90YXRlWCgtMC4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodEFpcmVsb25lLnNjZW5lLnJvdGF0ZVgoLTAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFdmVsYXRvclBpdGNoICs9IDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZih0aGlzLnNwZWVkIDwgMC40KXJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAucm90YXRlWChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGN1cnJlbnRFdmVsYXRvclBpdGNoIC8gNTApICogdGhpcy5zcGVlZFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRFdmVsYXRvclBpdGNoID4gdGhpcy5lbGV2YXRvclBpdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0QWlyZWxvbmUuc2NlbmUucm90YXRlWCgwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0QWlyZWxvbmUuc2NlbmUucm90YXRlWCgwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RXZlbGF0b3JQaXRjaCAtPSAwLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYodGhpcy5zcGVlZCA8IDAuNClyZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnJvdGF0ZVgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50RXZlbGF0b3JQaXRjaCAvIDUwKSAqIHRoaXMuc3BlZWRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhaXJlbG9uZVBpdGNoIDwgdGhpcy5haXJlbG9uZVBpdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q29udHJvbFN1cmZhY2Uuc2NlbmUucm90YXRlWCgwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q29udHJvbFN1cmZhY2Uuc2NlbmUucm90YXRlWCgtMC4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWlyZWxvbmVQaXRjaCArPSAwLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYodGhpcy5zcGVlZCA8IDAuNClyZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnJvdGF0ZVooKC1haXJlbG9uZVBpdGNoIC8gNTApICogdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFpcmVsb25lUGl0Y2ggPiB0aGlzLmFpcmVsb25lUGl0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRDb250cm9sU3VyZmFjZS5zY2VuZS5yb3RhdGVYKC0wLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q29udHJvbFN1cmZhY2Uuc2NlbmUucm90YXRlWCgwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICBhaXJlbG9uZVBpdGNoIC09IDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZih0aGlzLnNwZWVkIDwgMC40KXJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAucm90YXRlWigoLWFpcmVsb25lUGl0Y2ggLyA1MCkgKiB0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocnVkZGVyUGl0Y2ggPCB0aGlzLnJ1ZGRlclBpdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydWRkZXIuc2NlbmUucm90YXRlWSgtMC4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVkZGVyUGl0Y2ggKz0gMC4wMTtcclxuICAgICAgICAgICAgICAgICAgICAvL2lmKHRoaXMuc3BlZWQgPCAwLjQpcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cC5yb3RhdGVZKChydWRkZXJQaXRjaCAvIDUwKSAqIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChydWRkZXJQaXRjaCA+IHRoaXMucnVkZGVyUGl0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1ZGRlci5zY2VuZS5yb3RhdGVZKDAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1ZGRlclBpdGNoIC09IDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZih0aGlzLnNwZWVkIDwgMC40KXJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAucm90YXRlWSgocnVkZGVyUGl0Y2ggLyA1MCkgKiB0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5ncm91cDtcclxuICAgIH1cclxuICAgIGF0dGFjaENhbWVyYUFuZENvbnRyb2woQ2FtZXJhKSB7XHJcbiAgICAgICAgdGhpcy5VVUlEID0gbGlzdGVuVG9Db25yb2xzKFxyXG4gICAgICAgICAgICAoe1xyXG4gICAgICAgICAgICAgICAgd0tleSxcclxuICAgICAgICAgICAgICAgIGFLZXksXHJcbiAgICAgICAgICAgICAgICBzS2V5LFxyXG4gICAgICAgICAgICAgICAgZEtleSxcclxuICAgICAgICAgICAgICAgIHVwS2V5LFxyXG4gICAgICAgICAgICAgICAgZG93bktleSxcclxuICAgICAgICAgICAgICAgIGVLZXksXHJcbiAgICAgICAgICAgICAgICBxS2V5LFxyXG4gICAgICAgICAgICAgICAgc2hpZnRLZXksXHJcbiAgICAgICAgICAgICAgICB6S2V5LFxyXG4gICAgICAgICAgICAgICAgeEtleSxcclxuICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHpLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZCA8IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCArPSAwLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh4S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLT0gMC4wMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAod0tleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxldmF0b3JQaXRjaCA9IDAuNTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc0tleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxldmF0b3JQaXRjaCA9IC0wLjU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxldmF0b3JQaXRjaCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVkZGVyUGl0Y2ggPSAwLjM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1ZGRlclBpdGNoID0gLTAuMztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydWRkZXJQaXRjaCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpcmVsb25lUGl0Y2ggPSAwLjU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpcmVsb25lUGl0Y2ggPSAtMC41O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpcmVsb25lUGl0Y2ggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmdyb3VwLmFkZChDYW1lcmEpO1xyXG4gICAgICAgIENhbWVyYS5wb3NpdGlvbi5zZXQoMCwgNDAsIC0xMDApO1xyXG4gICAgICAgIENhbWVyYS5yb3RhdGVZKHJhZGlhbnRzKDE4MCkpO1xyXG4gICAgICAgIENhbWVyYS5yb3RhdGVYKHJhZGlhbnRzKC0yMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFuVXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuVVVJRCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIENsZWFuVXBMaXN0ZW5lcih0aGlzLlVVSUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyb3VwLnJlbW92ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrZXIgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUZyb21EYXlUaW1lSG9vayh0aGlzLmNoZWNrZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZUFib3V0UG9pbnQob2JqLCBwb2ludCwgYXhpcywgdGhldGEsIHBvaW50SXNXb3JsZCkge1xyXG4gICAgcG9pbnRJc1dvcmxkID0gcG9pbnRJc1dvcmxkID8gcG9pbnRJc1dvcmxkIDogZmFsc2UgO1xyXG5cclxuICAgIGlmIChwb2ludElzV29ybGQpIHtcclxuICAgICAgICBvYmoucGFyZW50LmxvY2FsVG9Xb3JsZChvYmoucG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIG9iai5wb3NpdGlvbi5zdWIocG9pbnQpO1xyXG4gICAgb2JqLnBvc2l0aW9uLmFwcGx5QXhpc0FuZ2xlKGF4aXMsIHRoZXRhKTtcclxuICAgIG9iai5wb3NpdGlvbi5hZGQocG9pbnQpO1xyXG5cclxuICAgIGlmIChwb2ludElzV29ybGQpIHtcclxuICAgICAgICBvYmoucGFyZW50LndvcmxkVG9Mb2NhbChvYmoucG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIG9iai5yb3RhdGVPbkF4aXMoYXhpcywgdGhldGEpO1xyXG4gICAgcmV0dXJuIHRoZXRhO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tU3RhckZpZWxkKG51bWJlck9mU3RhcnMsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQ0FOVkFTXCIpO1xyXG5cclxuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG5cclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mU3RhcnM7ICsraSkge1xyXG4gICAgICAgIHZhciByYWRpdXMgPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgICAgICB2YXIgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdpZHRoKTtcclxuICAgICAgICB2YXIgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguYXJjKHgsIHksIHJhZGl1cywgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZShjYW52YXMpO1xyXG4gICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICByZXR1cm4gdGV4dHVyZTtcclxufVxyXG4iLCJpbXBvcnQgeyBHcm91cCwgTWVzaCwgTWVzaExhbWJlcnRNYXRlcmlhbCwgUmF5Y2FzdGVyLCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IHJhZGlhbnRzIH0gZnJvbSBcIi4uLy4uL0FsZ29yaXRobXMvZGVnVG9SYWRcIjtcclxuaW1wb3J0IHsgX21lcmdlTWVzaGVzIH0gZnJvbSBcIi4uLy4uL0FsZ29yaXRobXMvbWVzaE1lcmdlci5qc1wiO1xyXG5pbXBvcnQgeyByYW5kb21WZWN0b3JCZXR3ZWVuUG9pbnRzMkQgfSBmcm9tIFwiLi4vLi4vQWxnb3JpdGhtcy9WZWN0b3JVdGlsc1wiO1xyXG5pbXBvcnQgeyBhZGRHTEJGaWxlIH0gZnJvbSBcIi4uLy4uL0NvcmUtQVBJLzNkTW9kZWxIYW5kbGVycy9HTEJMb2FkZXJcIjtcclxuaW1wb3J0IHsgTWVyZ2VNZXNoZXMgfSBmcm9tIFwiLi4vLi4vQ29yZS1BUEkvM2RNb2RlbEhhbmRsZXJzL01lc2hNZXJnZXIudHNcIjtcclxuaW1wb3J0IHsgZ2V0VGVycmFpbkhlaWdodCB9IGZyb20gXCIuLi9Qcm9jZWR1bGVUZXJyYWluXCI7XHJcblxyXG5mdW5jdGlvbiBwbGFjZVRyZWUodHJlZSwgaW50ZXJzZWN0cywgcmFuZG9tVmVjKXtcclxuICAgIGxldCBuZXdUcmVlID0gdHJlZS5zY2VuZS5jbG9uZSgpXHJcbiAgICBuZXdUcmVlLnJvdGF0ZVkocmFkaWFudHMoTWF0aC5yYW5kb20oKSozNjApKVxyXG4gICAgbGV0IHBvaW50ID0gaW50ZXJzZWN0c1xyXG4gICAgbmV3VHJlZS5wb3NpdGlvbi5zZXQocmFuZG9tVmVjLngsIHBvaW50LCByYW5kb21WZWMueilcclxuICAgIHJldHVybiB7bmV3VHJlZSwgdmV0b3I6IG5ldyBWZWN0b3IzKHJhbmRvbVZlYy54LCBwb2ludCwgcmFuZG9tVmVjLnopfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR2VuZXJhdGVUcmVlcyhudW0sIHNjZW5lLCBzdGFydCwgYm91bmRzLCBzZWVkLCBnYWluLCBkaXZpc29yKXtcclxuICAgIGxldCB0cmVlID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICBcIi9Bc3NldHMvUGluZVRyZWUuZ2xiXCIsXHJcbiAgICAgICAgc2NlbmVcclxuICAgICk7XHJcbiAgICBsZXQgc25vd3lUcmVlID0gYXdhaXQgYWRkR0xCRmlsZShcclxuICAgICAgICBcIi9Bc3NldHMvU25vd3lQaW5lVHJlZS5nbGJcIixcclxuICAgICAgICBzY2VuZVxyXG4gICAgKTtcclxuICAgIGxldCBwYWxtVHJlZSA9IGF3YWl0IGFkZEdMQkZpbGUoXHJcbiAgICAgICAgXCIvQXNzZXRzL1BhbG1fVHJlZS5nbGJcIixcclxuICAgICAgICBzY2VuZVxyXG4gICAgKVxyXG5cclxuICAgIGxldCBsZWF2ZXMgPSBuZXcgTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IDB4Njk0YjM3IH0pXHJcbiAgICBsZXQgdHJ1bmsgPSBuZXcgTWVzaExhbWJlcnRNYXRlcmlhbCh7Y29sb3I6IDB4MjE2NzM0IH0pXHJcbiAgICB0cmVlLnNjZW5lLmNoaWxkcmVuWzBdLm1hdGVyaWFsID0gbGVhdmVzXHJcbiAgICB0cmVlLnNjZW5lLmNoaWxkcmVuWzFdLm1hdGVyaWFsID0gdHJ1bmtcclxuICAgIHNub3d5VHJlZS5zY2VuZS5jaGlsZHJlblswXS5tYXRlcmlhbCA9IGxlYXZlc1xyXG4gICAgc25vd3lUcmVlLnNjZW5lLmNoaWxkcmVuWzFdLm1hdGVyaWFsID0gdHJ1bmtcclxuICAgIHNub3d5VHJlZS5zY2VuZS5jaGlsZHJlblsyXS5tYXRlcmlhbCA9IG5ldyBNZXNoTGFtYmVydE1hdGVyaWFsKHtjb2xvcjogMHhmZmZmZmYgfSlcclxuXHJcbiAgICBwYWxtVHJlZSA9IHBhbG1UcmVlLnNjZW5lLmNoaWxkcmVuWzBdXHJcblxyXG5cclxuICAgIHBhbG1UcmVlLmNoaWxkcmVuWzBdLm1hdGVyaWFsID0gdHJ1bmtcclxuXHJcblxyXG4gICAgXHJcbiAgICBmb3IobGV0IGk9MDtpPG51bTtpKyspe1xyXG4gICAgICAgIGxldCByYW5kb21WZWN0b3IgPSByYW5kb21WZWN0b3JCZXR3ZWVuUG9pbnRzMkQoIHN0YXJ0LCBib3VuZHMpXHJcbiAgICAgICAgcmFuZG9tVmVjdG9yLnkgPSA1MCAgIFxyXG5cclxuICAgICAgICBsZXQgaGVpZ2h0ID0gZ2V0VGVycmFpbkhlaWdodChyYW5kb21WZWN0b3IsIHNlZWQsIGdhaW4sIGRpdmlzb3IsIHNjZW5lKVxyXG4gICAgICAgIGlmKGhlaWdodCA+IDIgJiYgaGVpZ2h0IDwgMjApe1xyXG4gICAgICAgICAgICBsZXQgcGxhY2VUcmVlT3V0ID0gcGxhY2VUcmVlKHRyZWUsIGhlaWdodCwgcmFuZG9tVmVjdG9yKVxyXG4gICAgICAgICAgICBzY2VuZS5hZGQocGxhY2VUcmVlT3V0Lm5ld1RyZWUpXHJcbiAgICAgICAgfWVsc2UgaWYoaGVpZ2h0IDwgMiAmJiBoZWlnaHQgPiAwKXtcclxuICAgICAgICAgICAgbGV0IHBsYWNlVHJlZU91dCA9IHBsYWNlVHJlZSh0cmVlLCBoZWlnaHQsIHJhbmRvbVZlY3RvcilcclxuICAgICAgICAgICAgc2NlbmUuYWRkKHBsYWNlVHJlZU91dC5uZXdUcmVlKVxyXG4gICAgICAgIH1lbHNlIGlmKGhlaWdodCA+IDIwKXtcclxuICAgICAgICAgICAgLy9tZXNoZXMucHVzaChwbGFjZVRyZWUocGFsbVRyZWUsIGludGVyc2VjdHMpKVxyXG4gICAgICAgICAgICAvL2dyb3VwLmFkZChwbGFjZVRyZWVPdXQubmV3VHJlZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbGlzdGVuVG9FdmVudCB9IGZyb20gXCIuLi9Db3JlLUFQSS9Db25uZWN0QVBJXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZU5ld0N1YmVQbGF5ZXIgfSBmcm9tIFwiLi4vZ2FtZUZ1bmRhbG1lbnRhbHMvbXVsdGlwbGF5ZXIvTWFpblBsYXllckhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVVSSgpIHtcclxuICAgIGxldCBbZ2FtZWZlZWQsIHNldEdhbWVGZWVkXSA9IHVzZVN0YXRlKCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxpc3RlblRvRXZlbnQoXCJOZXdQbGF5ZXJcIiwgKGlkLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8vbGV0IGN1YmUgPSBNYWtlTmV3Q3ViZVBsYXllcihkYXRhLmNvbG9yLCBkYXRhLm5hbWUpXHJcbiAgICAgICAgICAgIC8vTWFrZU5ld0N1YmVQbGF5ZXIoZGF0YT8ubmFtZSwgXCJKb2luZWQgdGhlIGdhbWUhXCIpXHJcblxyXG4gICAgICAgICAgICAvL3BsYXllcnNbaWRdID0gY3ViZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIDxoMT5IZWxsbzwvaDE+O1xyXG59XHJcbiIsIi8vIFdyaXR0ZW4gQnkgSGFydmV5IFJhbmRhbGwgXFxcXFxyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb2csIFBlcnNwZWN0aXZlQ2FtZXJhLCBTY2VuZSwgVmVjdG9yMywgV2ViR0xSZW5kZXJlciB9IGZyb20gXCJ0aHJlZVwiO1xyXG52YXIgU3RhdHMgPSByZXF1aXJlKFwic3RhdHMuanNcIik7XHJcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250ZXh0L3NvY2tldGlvQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZUxhYmVsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvbmFtZXRhZ1wiO1xyXG5pbXBvcnQge1xyXG4gICAgc3RhcnRTZXZlckNsaWVudENvbW11bmljYXRpb24sXHJcbiAgICBsaXN0ZW5Ub0V2ZW50LFxyXG59IGZyb20gXCIuLi9jb21wb25lbnRzL0NvcmUtQVBJL0Nvbm5lY3RBUElcIjtcclxuaW1wb3J0IHsgdXBkYXRlUmVuZGVyQ3ljbGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3JlLUFQSS9SZW5kZXJpbmdIYW5kbGVyXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlTWFpblNjZW5lIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2NlbmVzL01haW5TY2VuZUhhbmRsZXJcIjtcclxuaW1wb3J0IHsgQ3JlYXRlVUkgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lVUkvZ2FtZUZlZWRcIjtcclxuaW1wb3J0IHsgQ29udHJvbEV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lRnVuZGFsbWVudGFscy9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBkZWJ1Z0N1YmUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3JlLUFQSS9nZW1vdHJ5TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBnZXRUZXJyYWluSGVpZ2h0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2FtZUZ1bmRhbG1lbnRhbHMvUHJvY2VkdWxlVGVycmFpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgY29uc3QgW2NoaWxkLCBzZXRDaGlsZF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2dhbWVFdmVudERhdGEsIHNldEdhbWVFdmVudERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFtkYXksIHNldERheV0gPSB1c2VTdGF0ZShcIm5vdCBkYXlcIik7XHJcbiAgICBjb25zdCBbY2hpbGQyLCBzZXRDaGlsZDJdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IHNvY2tldCA9IHVzZUFwcENvbnRleHQoKTs7XHJcbiAgICBjb25zdCBbcmVjaWV2ZWRTZWVkLCBzZXRTZWVkXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcmVuZGVyZWQsIHNldFJlbmRlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjbGllbnRzLCBzZXRDbGllbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwZXJzb25EYXRhLCBzZXRQZXJzb25hbERhdGFdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBzdGFydFNldmVyQ2xpZW50Q29tbXVuaWNhdGlvbihzb2NrZXQpO1xyXG5cclxuICAgIHNvY2tldC5vbmNlKFwid2VsY29tZVwiLCAoc2VlZCwgY2xpZW50LCBkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0U2VlZChzZWVkKTtcclxuICAgICAgICBzZXRDbGllbnRzKGNsaWVudCk7XHJcbiAgICAgICAgc2V0UGVyc29uYWxEYXRhKGRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHR5cGVvZiBjaGlsZCA9PT0gXCJ1bmRlZmluZWRcIiB8fFxyXG4gICAgICAgICAgICB0eXBlb2YgcmVjaWV2ZWRTZWVkID09PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgICAgIHJlbmRlcmVkID09PSB0cnVlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFJlbmRlcmVkKHRydWUpO1xyXG5cclxuICAgICAgICBsZXQgc3RhdHMgPSBuZXcgU3RhdHMoKTtcclxuICAgICAgICBzdGF0cy5zaG93UGFuZWwoMik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5kb20pO1xyXG5cclxuICAgICAgICBsZXQgU2NlbmVUb0dldCA9IG5ldyBTY2VuZSgpO1xyXG4gICAgICAgIGxldCBSZW5kZXJzID0gbmV3IFdlYkdMUmVuZGVyZXIoe1xyXG4gICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgICAgIGFscGhhOiB0cnVlLFxyXG4gICAgICAgICAgICBvZ2FyaXRobWljRGVwdGhCdWZmZXI6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFJlbmRlcnMuc2V0Q2xlYXJDb2xvcihcIiM4N2NlZWJcIiwgMSk7XHJcblxyXG4gICAgICAgIGxldCBmb2cgPSBuZXcgRm9nKDB4RENEQkRGLCAxMCwgMTAwMDAwKVxyXG4gICAgICAgIFNjZW5lVG9HZXQuZm9nID0gZm9nXHJcblxyXG4gICAgICAgIFJlbmRlcnMuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICBjaGlsZC5hcHBlbmRDaGlsZChSZW5kZXJzLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgIFxyXG5cclxuICAgICAgICBsZXQgQ3VycmVudFNjZW5lID0gXCJNYWluXCI7XHJcblxyXG4gICAgICAgIHZhciBDYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICAgICAgICAgIDc1LFxyXG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgMC4xLFxyXG4gICAgICAgICAgICAxMDAwMDAwMDBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25XaW5kb3dSZXNpemUsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XHJcblxyXG4gICAgICAgICAgICBDYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgIENhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG4gICAgICAgICAgICBSZW5kZXJzLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2VuZXJhdGVNYWluU2NlbmUoXHJcbiAgICAgICAgICAgIFNjZW5lVG9HZXQsXHJcbiAgICAgICAgICAgIFJlbmRlcnMsXHJcbiAgICAgICAgICAgIGRvY3VtZW50LFxyXG4gICAgICAgICAgICByZWNpZXZlZFNlZWQsXHJcbiAgICAgICAgICAgIGNoaWxkMixcclxuICAgICAgICAgICAgQ2FtZXJhXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgUmVuZGVycy5kb21FbGVtZW50LnJlcXVlc3RQb2ludGVyTG9jaygpO1xyXG4gICAgICAgIENvbnRyb2xFdmVudExpc3RlbmVyKGRvY3VtZW50LCBjaGlsZDIpXHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXJzID0gW107XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VDdWJlKGNvbG9yID0gXCJyZ2IoMCwwLDApXCIsIG5hbWUgPSBcInVua293blwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3IoY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgZW1pc3NpdmU6IG5ldyBUSFJFRS5Db2xvcihjb2xvciksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjdWJlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgICAgICAgICAgZ3JvdXAuYWRkKGN1YmUpO1xyXG4gICAgICAgICAgICBjb25zdCBjeWNsaW5kZXIgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjMsIDAuMywgMC42LCAzMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN5bGluZGVyQnVpbGQgPSBuZXcgVEhSRUUuTWVzaChjeWNsaW5kZXIsIG1hdGVyaWFsMik7XHJcbiAgICAgICAgICAgIGN5bGluZGVyQnVpbGQucm90YXRlWChNYXRoLlBJIC8gMiArIE1hdGguUEkpO1xyXG4gICAgICAgICAgICBjeWxpbmRlckJ1aWxkLnBvc2l0aW9uLnNldCgwLCAwLCAtMC42KTtcclxuICAgICAgICAgICAgZ3JvdXAuYWRkKGN5bGluZGVyQnVpbGQpO1xyXG5cclxuICAgICAgICAgICAgZ2VuZXJhdGVMYWJlbChuYW1lLCBncm91cCk7XHJcbiAgICAgICAgICAgIFNjZW5lVG9HZXQuYWRkKGdyb3VwKTtcclxuICAgICAgICAgICAgZ3JvdXAubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBncm91cDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcmV2RGF0YSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgYWRkdG9HYW1lRmVlZCA9IChuYW1lID0gXCJVbmtvd25cIiwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IE5ld0dhbWVFdmVudEFycmF5ID0gWy4uLmdhbWVFdmVudERhdGFdO1xyXG4gICAgICAgICAgICBOZXdHYW1lRXZlbnRBcnJheS51bnNoaWZ0KHsgbmFtZSwgZXZlbnQgfSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBOZXdHYW1lRXZlbnRBcnJheVsxMF07XHJcbiAgICAgICAgICAgIGRlbGV0ZSBOZXdHYW1lRXZlbnRBcnJheVsxMV07XHJcbiAgICAgICAgICAgIHNldEdhbWVFdmVudERhdGEoWy4uLk5ld0dhbWVFdmVudEFycmF5XSk7XHJcbiAgICAgICAgICAgIHByZXZEYXRhID0gTmV3R2FtZUV2ZW50QXJyYXk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2xpZW50cy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdWJlID0gbWFrZUN1YmUoZS5jb2xvciwgZS5uYW1lKTtcclxuICAgICAgICAgICAgcGxheWVyc1tgJHtlfWBdID0gY3ViZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKFwiTmV3UGxheWVyXCIsIChpZCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IG1ha2VDdWJlKGRhdGEuY29sb3IsIGRhdGEubmFtZSk7XHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoZGF0YT8ubmFtZSwgXCJKb2luZWQgdGhlIGdhbWUhXCIpO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyc1tgJHtpZH1gXSA9IGN1YmU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNvY2tldC5vbihcIkxvc3RQTGF5ZXJcIiwgKGlkLCBob3csIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGN1YmUgPSBwbGF5ZXJzW2Ake2lkfWBdO1xyXG4gICAgICAgICAgICBTY2VuZVRvR2V0LnJlbW92ZShjdWJlKTtcclxuICAgICAgICAgICAgZGVsZXRlIHBsYXllcnNbYCR7aWR9YF07XHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoXHJcbiAgICAgICAgICAgICAgICBkYXRhPy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaG93ID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIldhcyByZW1vdmVkIGZyb20gdGhlIGdhbWUgZm9yIGJlaW5nIGluYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiTGVmdCB0aGUgZ2FtZSFcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsaXN0ZW5Ub0V2ZW50KFwiUGxheWVyTG9jYXRpb25VcGRhdGVcIiwgKGlkLCBwb3MsIHJvdCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3ViZSA9IHBsYXllcnNbYCR7aWR9YF07XHJcbiAgICAgICAgICAgIGlmIChjdWJlKSB7XHJcbiAgICAgICAgICAgICAgICBjdWJlLnJvdGF0aW9uLnNldChyb3QuX3gsIHJvdC5feSwgcm90Ll96KTtcclxuICAgICAgICAgICAgICAgIGN1YmUucG9zaXRpb24uc2V0KHBvcy54LCBwb3MueSwgcG9zLnopO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1YmUgPSBtYWtlQ3ViZShkYXRhPy5jb2xvciwgZGF0YT8ubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcGxheWVyc1tgJHtpZH1gXSA9IGN1YmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzb2NrZXQub24oXCJOZXdDaGF0XCIsIChkYXRhLCB0ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIGFkZHRvR2FtZUZlZWQoZGF0YS5uYW1lLCB0ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpXHJcbiAgICAgICAgICAgIENhbWVyYS5nZXRXb3JsZFBvc2l0aW9uKHZlY3RvcilcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJMb2NhdGlvblVwZGF0ZVwiLCB2ZWN0b3IsIENhbWVyYS5yb3RhdGlvbik7XHJcbiAgICAgICAgfSwgMTApO1xyXG5cclxuICAgICAgICBsZXQgZGVidWJDdWJlID0gZGVidWdDdWJlKClcclxuICAgICAgICBTY2VuZVRvR2V0LmFkZChkZWJ1YkN1YmUpXHJcblxyXG4gICAgICAgIHZhciBhbmltYXRlID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdGF0cy5iZWdpbigpO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcblxyXG4gICAgICAgICAgICBkZWJ1YkN1YmUucG9zaXRpb24uc2V0KENhbWVyYS5wb3NpdGlvbi54LCBnZXRUZXJyYWluSGVpZ2h0KENhbWVyYS5wb3NpdGlvbiwgcmVjaWV2ZWRTZWVkLCAxMjAsIDAuMSksIENhbWVyYS5wb3NpdGlvbi56KVxyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIGFsbCBtb3ZpbmcgcGFydHNcclxuICAgICAgICAgICAgdXBkYXRlUmVuZGVyQ3ljbGUoQ3VycmVudFNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIFJlbmRlcnMucmVuZGVyKFNjZW5lVG9HZXQsIENhbWVyYSk7XHJcbiAgICAgICAgICAgIHN0YXRzLmVuZCgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFuaW1hdGUoKTtcclxuICAgIH0sIFtjaGlsZCwgY2xpZW50c10pO1xyXG5cclxuICAgIGxldCBzZW5kQ2hhdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNvY2tldC5lbWl0KFwic2VuZENoYXRcIiwgY2hpbGQyLnZhbHVlKTtcclxuICAgICAgICBjaGlsZDIudmFsdWUgPSBcIlwiO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHt0eXBlb2YgcGVyc29uRGF0YSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwiTE9BRElORy4uLlwiIDogcGVyc29uRGF0YS5uYW1lfVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiODBweFwiLFxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8Q3JlYXRlVUkgLz5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kQ2hhdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17KHJlZikgPT4gc2V0Q2hpbGQyKHJlZil9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJTdWJtaXRcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAge1suLi5nYW1lRXZlbnREYXRhXS5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlLm5hbWV9IC0ge2UuZXZlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3R5cGVvZiByZWNpZXZlZFNlZWQgPT09IFwidW5kZWZpbmVkXCIgPz8gPGgxPkxPQURJTkcgU0VFRCE8L2gxPn1cclxuICAgICAgICAgICAgPGRpdiByZWY9eyhyZWYpID0+IHNldENoaWxkKHJlZil9PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17KHJlZikgPT4gc2V0Q2hpbGQocmVmKX0+PC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU29ja2V0ID0gZXhwb3J0cy5pbyA9IGV4cG9ydHMuTWFuYWdlciA9IGV4cG9ydHMucHJvdG9jb2wgPSB2b2lkIDA7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCIuL3VybFwiKTtcbmNvbnN0IG1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL21hbmFnZXJcIik7XG5jb25zdCBzb2NrZXRfMSA9IHJlcXVpcmUoXCIuL3NvY2tldFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNvY2tldFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc29ja2V0XzEuU29ja2V0OyB9IH0pO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJzb2NrZXQuaW8tY2xpZW50XCIpO1xuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gbG9va3VwO1xuLyoqXG4gKiBNYW5hZ2VycyBjYWNoZS5cbiAqL1xuY29uc3QgY2FjaGUgPSAoZXhwb3J0cy5tYW5hZ2VycyA9IHt9KTtcbmZ1bmN0aW9uIGxvb2t1cCh1cmksIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIHVyaSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBvcHRzID0gdXJpO1xuICAgICAgICB1cmkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgIGNvbnN0IHBhcnNlZCA9IHVybF8xLnVybCh1cmksIG9wdHMucGF0aCk7XG4gICAgY29uc3Qgc291cmNlID0gcGFyc2VkLnNvdXJjZTtcbiAgICBjb25zdCBpZCA9IHBhcnNlZC5pZDtcbiAgICBjb25zdCBwYXRoID0gcGFyc2VkLnBhdGg7XG4gICAgY29uc3Qgc2FtZU5hbWVzcGFjZSA9IGNhY2hlW2lkXSAmJiBwYXRoIGluIGNhY2hlW2lkXVtcIm5zcHNcIl07XG4gICAgY29uc3QgbmV3Q29ubmVjdGlvbiA9IG9wdHMuZm9yY2VOZXcgfHxcbiAgICAgICAgb3B0c1tcImZvcmNlIG5ldyBjb25uZWN0aW9uXCJdIHx8XG4gICAgICAgIGZhbHNlID09PSBvcHRzLm11bHRpcGxleCB8fFxuICAgICAgICBzYW1lTmFtZXNwYWNlO1xuICAgIGxldCBpbztcbiAgICBpZiAobmV3Q29ubmVjdGlvbikge1xuICAgICAgICBkZWJ1ZyhcImlnbm9yaW5nIHNvY2tldCBjYWNoZSBmb3IgJXNcIiwgc291cmNlKTtcbiAgICAgICAgaW8gPSBuZXcgbWFuYWdlcl8xLk1hbmFnZXIoc291cmNlLCBvcHRzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghY2FjaGVbaWRdKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcIm5ldyBpbyBpbnN0YW5jZSBmb3IgJXNcIiwgc291cmNlKTtcbiAgICAgICAgICAgIGNhY2hlW2lkXSA9IG5ldyBtYW5hZ2VyXzEuTWFuYWdlcihzb3VyY2UsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGlvID0gY2FjaGVbaWRdO1xuICAgIH1cbiAgICBpZiAocGFyc2VkLnF1ZXJ5ICYmICFvcHRzLnF1ZXJ5KSB7XG4gICAgICAgIG9wdHMucXVlcnkgPSBwYXJzZWQucXVlcnlLZXk7XG4gICAgfVxuICAgIHJldHVybiBpby5zb2NrZXQocGFyc2VkLnBhdGgsIG9wdHMpO1xufVxuZXhwb3J0cy5pbyA9IGxvb2t1cDtcbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAcHVibGljXG4gKi9cbnZhciBzb2NrZXRfaW9fcGFyc2VyXzEgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInByb3RvY29sXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzb2NrZXRfaW9fcGFyc2VyXzEucHJvdG9jb2w7IH0gfSk7XG4vKipcbiAqIGBjb25uZWN0YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJpXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydHMuY29ubmVjdCA9IGxvb2t1cDtcbi8qKlxuICogRXhwb3NlIGNvbnN0cnVjdG9ycyBmb3Igc3RhbmRhbG9uZSBidWlsZC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbnZhciBtYW5hZ2VyXzIgPSByZXF1aXJlKFwiLi9tYW5hZ2VyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFuYWdlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWFuYWdlcl8yLk1hbmFnZXI7IH0gfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsb29rdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWFuYWdlciA9IHZvaWQgMDtcbmNvbnN0IGVpbyA9IHJlcXVpcmUoXCJlbmdpbmUuaW8tY2xpZW50XCIpO1xuY29uc3Qgc29ja2V0XzEgPSByZXF1aXJlKFwiLi9zb2NrZXRcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwic29ja2V0LmlvLXBhcnNlclwiKTtcbmNvbnN0IG9uXzEgPSByZXF1aXJlKFwiLi9vblwiKTtcbmNvbnN0IEJhY2tvZmYgPSByZXF1aXJlKFwiYmFja28yXCIpO1xuY29uc3QgdHlwZWRfZXZlbnRzXzEgPSByZXF1aXJlKFwiLi90eXBlZC1ldmVudHNcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1jbGllbnQ6bWFuYWdlclwiKTtcbmNsYXNzIE1hbmFnZXIgZXh0ZW5kcyB0eXBlZF9ldmVudHNfMS5TdHJpY3RFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHVyaSwgb3B0cykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5zcHMgPSB7fTtcbiAgICAgICAgdGhpcy5zdWJzID0gW107XG4gICAgICAgIGlmICh1cmkgJiYgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHVyaSkge1xuICAgICAgICAgICAgb3B0cyA9IHVyaTtcbiAgICAgICAgICAgIHVyaSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgICAgb3B0cy5wYXRoID0gb3B0cy5wYXRoIHx8IFwiL3NvY2tldC5pb1wiO1xuICAgICAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbihvcHRzLnJlY29ubmVjdGlvbiAhPT0gZmFsc2UpO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbkF0dGVtcHRzKG9wdHMucmVjb25uZWN0aW9uQXR0ZW1wdHMgfHwgSW5maW5pdHkpO1xuICAgICAgICB0aGlzLnJlY29ubmVjdGlvbkRlbGF5KG9wdHMucmVjb25uZWN0aW9uRGVsYXkgfHwgMTAwMCk7XG4gICAgICAgIHRoaXMucmVjb25uZWN0aW9uRGVsYXlNYXgob3B0cy5yZWNvbm5lY3Rpb25EZWxheU1heCB8fCA1MDAwKTtcbiAgICAgICAgdGhpcy5yYW5kb21pemF0aW9uRmFjdG9yKG9wdHMucmFuZG9taXphdGlvbkZhY3RvciB8fCAwLjUpO1xuICAgICAgICB0aGlzLmJhY2tvZmYgPSBuZXcgQmFja29mZih7XG4gICAgICAgICAgICBtaW46IHRoaXMucmVjb25uZWN0aW9uRGVsYXkoKSxcbiAgICAgICAgICAgIG1heDogdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heCgpLFxuICAgICAgICAgICAgaml0dGVyOiB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3IoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGltZW91dChudWxsID09IG9wdHMudGltZW91dCA/IDIwMDAwIDogb3B0cy50aW1lb3V0KTtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgIHRoaXMudXJpID0gdXJpO1xuICAgICAgICBjb25zdCBfcGFyc2VyID0gb3B0cy5wYXJzZXIgfHwgcGFyc2VyO1xuICAgICAgICB0aGlzLmVuY29kZXIgPSBuZXcgX3BhcnNlci5FbmNvZGVyKCk7XG4gICAgICAgIHRoaXMuZGVjb2RlciA9IG5ldyBfcGFyc2VyLkRlY29kZXIoKTtcbiAgICAgICAgdGhpcy5fYXV0b0Nvbm5lY3QgPSBvcHRzLmF1dG9Db25uZWN0ICE9PSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2F1dG9Db25uZWN0KVxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICAgIHJlY29ubmVjdGlvbih2KSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb247XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbiA9ICEhdjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlY29ubmVjdGlvbkF0dGVtcHRzKHYpIHtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cztcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMgPSB2O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uRGVsYXkodikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uRGVsYXk7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5ID0gdjtcbiAgICAgICAgKF9hID0gdGhpcy5iYWNrb2ZmKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0TWluKHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmFuZG9taXphdGlvbkZhY3Rvcih2KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yYW5kb21pemF0aW9uRmFjdG9yO1xuICAgICAgICB0aGlzLl9yYW5kb21pemF0aW9uRmFjdG9yID0gdjtcbiAgICAgICAgKF9hID0gdGhpcy5iYWNrb2ZmKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0Sml0dGVyKHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVjb25uZWN0aW9uRGVsYXlNYXgodikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXg7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5TWF4ID0gdjtcbiAgICAgICAgKF9hID0gdGhpcy5iYWNrb2ZmKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0TWF4KHYpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGltZW91dCh2KSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90aW1lb3V0O1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gdjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0cnlpbmcgdG8gcmVjb25uZWN0IGlmIHJlY29ubmVjdGlvbiBpcyBlbmFibGVkIGFuZCB3ZSBoYXZlIG5vdFxuICAgICAqIHN0YXJ0ZWQgcmVjb25uZWN0aW5nIHlldFxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBtYXliZVJlY29ubmVjdE9uT3BlbigpIHtcbiAgICAgICAgLy8gT25seSB0cnkgdG8gcmVjb25uZWN0IGlmIGl0J3MgdGhlIGZpcnN0IHRpbWUgd2UncmUgY29ubmVjdGluZ1xuICAgICAgICBpZiAoIXRoaXMuX3JlY29ubmVjdGluZyAmJlxuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW9uICYmXG4gICAgICAgICAgICB0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPT09IDApIHtcbiAgICAgICAgICAgIC8vIGtlZXBzIHJlY29ubmVjdGlvbiBmcm9tIGZpcmluZyB0d2ljZSBmb3IgdGhlIHNhbWUgcmVjb25uZWN0aW9uIGxvb3BcbiAgICAgICAgICAgIHRoaXMucmVjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCB0cmFuc3BvcnQgYHNvY2tldGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIG9wdGlvbmFsLCBjYWxsYmFja1xuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBvcGVuKGZuKSB7XG4gICAgICAgIGRlYnVnKFwicmVhZHlTdGF0ZSAlc1wiLCB0aGlzLl9yZWFkeVN0YXRlKTtcbiAgICAgICAgaWYgKH50aGlzLl9yZWFkeVN0YXRlLmluZGV4T2YoXCJvcGVuXCIpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIGRlYnVnKFwib3BlbmluZyAlc1wiLCB0aGlzLnVyaSk7XG4gICAgICAgIHRoaXMuZW5naW5lID0gZWlvKHRoaXMudXJpLCB0aGlzLm9wdHMpO1xuICAgICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcIm9wZW5pbmdcIjtcbiAgICAgICAgdGhpcy5za2lwUmVjb25uZWN0ID0gZmFsc2U7XG4gICAgICAgIC8vIGVtaXQgYG9wZW5gXG4gICAgICAgIGNvbnN0IG9wZW5TdWJEZXN0cm95ID0gb25fMS5vbihzb2NrZXQsIFwib3BlblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm9ub3BlbigpO1xuICAgICAgICAgICAgZm4gJiYgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGVtaXQgYGVycm9yYFxuICAgICAgICBjb25zdCBlcnJvclN1YiA9IG9uXzEub24oc29ja2V0LCBcImVycm9yXCIsIChlcnIpID0+IHtcbiAgICAgICAgICAgIGRlYnVnKFwiZXJyb3JcIik7XG4gICAgICAgICAgICBzZWxmLmNsZWFudXAoKTtcbiAgICAgICAgICAgIHNlbGYuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJlcnJvclwiLCBlcnIpO1xuICAgICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICAgICAgZm4oZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgZG8gdGhpcyBpZiB0aGVyZSBpcyBubyBmbiB0byBoYW5kbGUgdGhlIGVycm9yXG4gICAgICAgICAgICAgICAgc2VsZi5tYXliZVJlY29ubmVjdE9uT3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGZhbHNlICE9PSB0aGlzLl90aW1lb3V0KSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgICAgICAgICAgIGRlYnVnKFwiY29ubmVjdCBhdHRlbXB0IHdpbGwgdGltZW91dCBhZnRlciAlZFwiLCB0aW1lb3V0KTtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgb3BlblN1YkRlc3Ryb3koKTsgLy8gcHJldmVudHMgYSByYWNlIGNvbmRpdGlvbiB3aXRoIHRoZSAnb3BlbicgZXZlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNldCB0aW1lclxuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcImNvbm5lY3QgYXR0ZW1wdCB0aW1lZCBvdXQgYWZ0ZXIgJWRcIiwgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgb3BlblN1YkRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcInRpbWVvdXRcIikpO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRzLmF1dG9VbnJlZikge1xuICAgICAgICAgICAgICAgIHRpbWVyLnVucmVmKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaChmdW5jdGlvbiBzdWJEZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1YnMucHVzaChvcGVuU3ViRGVzdHJveSk7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKGVycm9yU3ViKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBvcGVuKClcbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25uZWN0KGZuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oZm4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgb3Blbi5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25vcGVuKCkge1xuICAgICAgICBkZWJ1ZyhcIm9wZW5cIik7XG4gICAgICAgIC8vIGNsZWFyIG9sZCBzdWJzXG4gICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICAvLyBtYXJrIGFzIG9wZW5cbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwib3BlblwiO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcIm9wZW5cIik7XG4gICAgICAgIC8vIGFkZCBuZXcgc3Vic1xuICAgICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2gob25fMS5vbihzb2NrZXQsIFwicGluZ1wiLCB0aGlzLm9ucGluZy5iaW5kKHRoaXMpKSwgb25fMS5vbihzb2NrZXQsIFwiZGF0YVwiLCB0aGlzLm9uZGF0YS5iaW5kKHRoaXMpKSwgb25fMS5vbihzb2NrZXQsIFwiZXJyb3JcIiwgdGhpcy5vbmVycm9yLmJpbmQodGhpcykpLCBvbl8xLm9uKHNvY2tldCwgXCJjbG9zZVwiLCB0aGlzLm9uY2xvc2UuYmluZCh0aGlzKSksIG9uXzEub24odGhpcy5kZWNvZGVyLCBcImRlY29kZWRcIiwgdGhpcy5vbmRlY29kZWQuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHBpbmcuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ucGluZygpIHtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJwaW5nXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2l0aCBkYXRhLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmRhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmRlY29kZXIuYWRkKGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBwYXJzZXIgZnVsbHkgZGVjb2RlcyBhIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25kZWNvZGVkKHBhY2tldCkge1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInBhY2tldFwiLCBwYWNrZXQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBzb2NrZXQgZXJyb3IuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uZXJyb3IoZXJyKSB7XG4gICAgICAgIGRlYnVnKFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJlcnJvclwiLCBlcnIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHNvY2tldCBmb3IgdGhlIGdpdmVuIGBuc3BgLlxuICAgICAqXG4gICAgICogQHJldHVybiB7U29ja2V0fVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzb2NrZXQobnNwLCBvcHRzKSB7XG4gICAgICAgIGxldCBzb2NrZXQgPSB0aGlzLm5zcHNbbnNwXTtcbiAgICAgICAgaWYgKCFzb2NrZXQpIHtcbiAgICAgICAgICAgIHNvY2tldCA9IG5ldyBzb2NrZXRfMS5Tb2NrZXQodGhpcywgbnNwLCBvcHRzKTtcbiAgICAgICAgICAgIHRoaXMubnNwc1tuc3BdID0gc29ja2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb2NrZXQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgc29ja2V0IGNsb3NlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNvY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2Rlc3Ryb3koc29ja2V0KSB7XG4gICAgICAgIGNvbnN0IG5zcHMgPSBPYmplY3Qua2V5cyh0aGlzLm5zcHMpO1xuICAgICAgICBmb3IgKGNvbnN0IG5zcCBvZiBuc3BzKSB7XG4gICAgICAgICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLm5zcHNbbnNwXTtcbiAgICAgICAgICAgIGlmIChzb2NrZXQuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJzb2NrZXQgJXMgaXMgc3RpbGwgYWN0aXZlLCBza2lwcGluZyBjbG9zZVwiLCBuc3ApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jbG9zZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSBwYWNrZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcGFja2V0KHBhY2tldCkge1xuICAgICAgICBkZWJ1ZyhcIndyaXRpbmcgcGFja2V0ICVqXCIsIHBhY2tldCk7XG4gICAgICAgIGNvbnN0IGVuY29kZWRQYWNrZXRzID0gdGhpcy5lbmNvZGVyLmVuY29kZShwYWNrZXQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWRQYWNrZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS53cml0ZShlbmNvZGVkUGFja2V0c1tpXSwgcGFja2V0Lm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFuIHVwIHRyYW5zcG9ydCBzdWJzY3JpcHRpb25zIGFuZCBwYWNrZXQgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICBkZWJ1ZyhcImNsZWFudXBcIik7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKChzdWJEZXN0cm95KSA9PiBzdWJEZXN0cm95KCkpO1xuICAgICAgICB0aGlzLnN1YnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5kZWNvZGVyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xvc2UgdGhlIGN1cnJlbnQgc29ja2V0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfY2xvc2UoKSB7XG4gICAgICAgIGRlYnVnKFwiZGlzY29ubmVjdFwiKTtcbiAgICAgICAgdGhpcy5za2lwUmVjb25uZWN0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChcIm9wZW5pbmdcIiA9PT0gdGhpcy5fcmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgLy8gYG9uY2xvc2VgIHdpbGwgbm90IGZpcmUgYmVjYXVzZVxuICAgICAgICAgICAgLy8gYW4gb3BlbiBldmVudCBuZXZlciBoYXBwZW5lZFxuICAgICAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICBpZiAodGhpcy5lbmdpbmUpXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5jbG9zZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgY2xvc2UoKVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xvc2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIGNsb3NlLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmNsb3NlKHJlYXNvbikge1xuICAgICAgICBkZWJ1ZyhcIm9uY2xvc2VcIik7XG4gICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFwiY2xvc2VkXCI7XG4gICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY2xvc2VcIiwgcmVhc29uKTtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdGlvbiAmJiAhdGhpcy5za2lwUmVjb25uZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF0dGVtcHQgYSByZWNvbm5lY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHJlY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29ubmVjdGluZyB8fCB0aGlzLnNraXBSZWNvbm5lY3QpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPj0gdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMpIHtcbiAgICAgICAgICAgIGRlYnVnKFwicmVjb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RfZmFpbGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkZWxheSA9IHRoaXMuYmFja29mZi5kdXJhdGlvbigpO1xuICAgICAgICAgICAgZGVidWcoXCJ3aWxsIHdhaXQgJWRtcyBiZWZvcmUgcmVjb25uZWN0IGF0dGVtcHRcIiwgZGVsYXkpO1xuICAgICAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2tpcFJlY29ubmVjdClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiYXR0ZW1wdGluZyByZWNvbm5lY3RcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RfYXR0ZW1wdFwiLCBzZWxmLmJhY2tvZmYuYXR0ZW1wdHMpO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFnYWluIGZvciB0aGUgY2FzZSBzb2NrZXQgY2xvc2VkIGluIGFib3ZlIGV2ZW50c1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNraXBSZWNvbm5lY3QpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBzZWxmLm9wZW4oKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcInJlY29ubmVjdCBhdHRlbXB0IGVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJyZWNvbm5lY3RfZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwicmVjb25uZWN0IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9ucmVjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdHMuYXV0b1VucmVmKSB7XG4gICAgICAgICAgICAgICAgdGltZXIudW5yZWYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKGZ1bmN0aW9uIHN1YkRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHN1Y2Nlc3NmdWwgcmVjb25uZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbnJlY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdCA9IHRoaXMuYmFja29mZi5hdHRlbXB0cztcbiAgICAgICAgdGhpcy5fcmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcInJlY29ubmVjdFwiLCBhdHRlbXB0KTtcbiAgICB9XG59XG5leHBvcnRzLk1hbmFnZXIgPSBNYW5hZ2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm9uID0gdm9pZCAwO1xuZnVuY3Rpb24gb24ob2JqLCBldiwgZm4pIHtcbiAgICBvYmoub24oZXYsIGZuKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gc3ViRGVzdHJveSgpIHtcbiAgICAgICAgb2JqLm9mZihldiwgZm4pO1xuICAgIH07XG59XG5leHBvcnRzLm9uID0gb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU29ja2V0ID0gdm9pZCAwO1xuY29uc3Qgc29ja2V0X2lvX3BhcnNlcl8xID0gcmVxdWlyZShcInNvY2tldC5pby1wYXJzZXJcIik7XG5jb25zdCBvbl8xID0gcmVxdWlyZShcIi4vb25cIik7XG5jb25zdCB0eXBlZF9ldmVudHNfMSA9IHJlcXVpcmUoXCIuL3R5cGVkLWV2ZW50c1wiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwic29ja2V0LmlvLWNsaWVudDpzb2NrZXRcIik7XG4vKipcbiAqIEludGVybmFsIGV2ZW50cy5cbiAqIFRoZXNlIGV2ZW50cyBjYW4ndCBiZSBlbWl0dGVkIGJ5IHRoZSB1c2VyLlxuICovXG5jb25zdCBSRVNFUlZFRF9FVkVOVFMgPSBPYmplY3QuZnJlZXplKHtcbiAgICBjb25uZWN0OiAxLFxuICAgIGNvbm5lY3RfZXJyb3I6IDEsXG4gICAgZGlzY29ubmVjdDogMSxcbiAgICBkaXNjb25uZWN0aW5nOiAxLFxuICAgIC8vIEV2ZW50RW1pdHRlciByZXNlcnZlZCBldmVudHM6IGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvZXZlbnRzLmh0bWwjZXZlbnRzX2V2ZW50X25ld2xpc3RlbmVyXG4gICAgbmV3TGlzdGVuZXI6IDEsXG4gICAgcmVtb3ZlTGlzdGVuZXI6IDEsXG59KTtcbmNsYXNzIFNvY2tldCBleHRlbmRzIHR5cGVkX2V2ZW50c18xLlN0cmljdEV2ZW50RW1pdHRlciB7XG4gICAgLyoqXG4gICAgICogYFNvY2tldGAgY29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaW8sIG5zcCwgb3B0cykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuaWRzID0gMDtcbiAgICAgICAgdGhpcy5hY2tzID0ge307XG4gICAgICAgIHRoaXMuZmxhZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5pbyA9IGlvO1xuICAgICAgICB0aGlzLm5zcCA9IG5zcDtcbiAgICAgICAgdGhpcy5pZHMgPSAwO1xuICAgICAgICB0aGlzLmFja3MgPSB7fTtcbiAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZmxhZ3MgPSB7fTtcbiAgICAgICAgaWYgKG9wdHMgJiYgb3B0cy5hdXRoKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGggPSBvcHRzLmF1dGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW8uX2F1dG9Db25uZWN0KVxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBvcGVuLCBjbG9zZSBhbmQgcGFja2V0IGV2ZW50c1xuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdWJFdmVudHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGlvID0gdGhpcy5pbztcbiAgICAgICAgdGhpcy5zdWJzID0gW1xuICAgICAgICAgICAgb25fMS5vbihpbywgXCJvcGVuXCIsIHRoaXMub25vcGVuLmJpbmQodGhpcykpLFxuICAgICAgICAgICAgb25fMS5vbihpbywgXCJwYWNrZXRcIiwgdGhpcy5vbnBhY2tldC5iaW5kKHRoaXMpKSxcbiAgICAgICAgICAgIG9uXzEub24oaW8sIFwiZXJyb3JcIiwgdGhpcy5vbmVycm9yLmJpbmQodGhpcykpLFxuICAgICAgICAgICAgb25fMS5vbihpbywgXCJjbG9zZVwiLCB0aGlzLm9uY2xvc2UuYmluZCh0aGlzKSksXG4gICAgICAgIF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIFNvY2tldCB3aWxsIHRyeSB0byByZWNvbm5lY3Qgd2hlbiBpdHMgTWFuYWdlciBjb25uZWN0cyBvciByZWNvbm5lY3RzXG4gICAgICovXG4gICAgZ2V0IGFjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5zdWJzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBcIk9wZW5zXCIgdGhlIHNvY2tldC5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgdGhpcy5zdWJFdmVudHMoKTtcbiAgICAgICAgaWYgKCF0aGlzLmlvW1wiX3JlY29ubmVjdGluZ1wiXSlcbiAgICAgICAgICAgIHRoaXMuaW8ub3BlbigpOyAvLyBlbnN1cmUgb3BlblxuICAgICAgICBpZiAoXCJvcGVuXCIgPT09IHRoaXMuaW8uX3JlYWR5U3RhdGUpXG4gICAgICAgICAgICB0aGlzLm9ub3BlbigpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGNvbm5lY3QoKVxuICAgICAqL1xuICAgIG9wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3QoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBgbWVzc2FnZWAgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHNlbGZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc2VuZCguLi5hcmdzKSB7XG4gICAgICAgIGFyZ3MudW5zaGlmdChcIm1lc3NhZ2VcIik7XG4gICAgICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIGBlbWl0YC5cbiAgICAgKiBJZiB0aGUgZXZlbnQgaXMgaW4gYGV2ZW50c2AsIGl0J3MgZW1pdHRlZCBub3JtYWxseS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBlbWl0KGV2LCAuLi5hcmdzKSB7XG4gICAgICAgIGlmIChSRVNFUlZFRF9FVkVOVFMuaGFzT3duUHJvcGVydHkoZXYpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGV2ICsgJ1wiIGlzIGEgcmVzZXJ2ZWQgZXZlbnQgbmFtZScpO1xuICAgICAgICB9XG4gICAgICAgIGFyZ3MudW5zaGlmdChldik7XG4gICAgICAgIGNvbnN0IHBhY2tldCA9IHtcbiAgICAgICAgICAgIHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkVWRU5ULFxuICAgICAgICAgICAgZGF0YTogYXJncyxcbiAgICAgICAgfTtcbiAgICAgICAgcGFja2V0Lm9wdGlvbnMgPSB7fTtcbiAgICAgICAgcGFja2V0Lm9wdGlvbnMuY29tcHJlc3MgPSB0aGlzLmZsYWdzLmNvbXByZXNzICE9PSBmYWxzZTtcbiAgICAgICAgLy8gZXZlbnQgYWNrIGNhbGxiYWNrXG4gICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIGRlYnVnKFwiZW1pdHRpbmcgcGFja2V0IHdpdGggYWNrIGlkICVkXCIsIHRoaXMuaWRzKTtcbiAgICAgICAgICAgIHRoaXMuYWNrc1t0aGlzLmlkc10gPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgcGFja2V0LmlkID0gdGhpcy5pZHMrKztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc1RyYW5zcG9ydFdyaXRhYmxlID0gdGhpcy5pby5lbmdpbmUgJiZcbiAgICAgICAgICAgIHRoaXMuaW8uZW5naW5lLnRyYW5zcG9ydCAmJlxuICAgICAgICAgICAgdGhpcy5pby5lbmdpbmUudHJhbnNwb3J0LndyaXRhYmxlO1xuICAgICAgICBjb25zdCBkaXNjYXJkUGFja2V0ID0gdGhpcy5mbGFncy52b2xhdGlsZSAmJiAoIWlzVHJhbnNwb3J0V3JpdGFibGUgfHwgIXRoaXMuY29ubmVjdGVkKTtcbiAgICAgICAgaWYgKGRpc2NhcmRQYWNrZXQpIHtcbiAgICAgICAgICAgIGRlYnVnKFwiZGlzY2FyZCBwYWNrZXQgYXMgdGhlIHRyYW5zcG9ydCBpcyBub3QgY3VycmVudGx5IHdyaXRhYmxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnBhY2tldChwYWNrZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZW5kQnVmZmVyLnB1c2gocGFja2V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZsYWdzID0ge307XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHBhY2tldChwYWNrZXQpIHtcbiAgICAgICAgcGFja2V0Lm5zcCA9IHRoaXMubnNwO1xuICAgICAgICB0aGlzLmlvLl9wYWNrZXQocGFja2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZW5naW5lIGBvcGVuYC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25vcGVuKCkge1xuICAgICAgICBkZWJ1ZyhcInRyYW5zcG9ydCBpcyBvcGVuIC0gY29ubmVjdGluZ1wiKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmF1dGggPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGgoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkNPTk5FQ1QsIGRhdGEgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFja2V0KHsgdHlwZTogc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQ09OTkVDVCwgZGF0YTogdGhpcy5hdXRoIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGVuZ2luZSBvciBtYW5hZ2VyIGBlcnJvcmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXJyXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmVycm9yKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImNvbm5lY3RfZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBlbmdpbmUgYGNsb3NlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZWFzb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uY2xvc2UocmVhc29uKSB7XG4gICAgICAgIGRlYnVnKFwiY2xvc2UgKCVzKVwiLCByZWFzb24pO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmlkO1xuICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZChcImRpc2Nvbm5lY3RcIiwgcmVhc29uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdpdGggc29ja2V0IHBhY2tldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ucGFja2V0KHBhY2tldCkge1xuICAgICAgICBjb25zdCBzYW1lTmFtZXNwYWNlID0gcGFja2V0Lm5zcCA9PT0gdGhpcy5uc3A7XG4gICAgICAgIGlmICghc2FtZU5hbWVzcGFjZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc3dpdGNoIChwYWNrZXQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNUOlxuICAgICAgICAgICAgICAgIGlmIChwYWNrZXQuZGF0YSAmJiBwYWNrZXQuZGF0YS5zaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBwYWNrZXQuZGF0YS5zaWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25jb25uZWN0KGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdF9lcnJvclwiLCBuZXcgRXJyb3IoXCJJdCBzZWVtcyB5b3UgYXJlIHRyeWluZyB0byByZWFjaCBhIFNvY2tldC5JTyBzZXJ2ZXIgaW4gdjIueCB3aXRoIGEgdjMueCBjbGllbnQsIGJ1dCB0aGV5IGFyZSBub3QgY29tcGF0aWJsZSAobW9yZSBpbmZvcm1hdGlvbiBoZXJlOiBodHRwczovL3NvY2tldC5pby9kb2NzL3YzL21pZ3JhdGluZy1mcm9tLTIteC10by0zLTAvKVwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5FVkVOVDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uZXZlbnQocGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuQklOQVJZX0VWRU5UOlxuICAgICAgICAgICAgICAgIHRoaXMub25ldmVudChwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5BQ0s6XG4gICAgICAgICAgICAgICAgdGhpcy5vbmFjayhwYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5CSU5BUllfQUNLOlxuICAgICAgICAgICAgICAgIHRoaXMub25hY2socGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc29ja2V0X2lvX3BhcnNlcl8xLlBhY2tldFR5cGUuRElTQ09OTkVDVDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5DT05ORUNUX0VSUk9SOlxuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihwYWNrZXQuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgZXJyLmRhdGEgPSBwYWNrZXQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKFwiY29ubmVjdF9lcnJvclwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIGEgc2VydmVyIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhY2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25ldmVudChwYWNrZXQpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IHBhY2tldC5kYXRhIHx8IFtdO1xuICAgICAgICBkZWJ1ZyhcImVtaXR0aW5nIGV2ZW50ICVqXCIsIGFyZ3MpO1xuICAgICAgICBpZiAobnVsbCAhPSBwYWNrZXQuaWQpIHtcbiAgICAgICAgICAgIGRlYnVnKFwiYXR0YWNoaW5nIGFjayBjYWxsYmFjayB0byBldmVudFwiKTtcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmFjayhwYWNrZXQuaWQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWNlaXZlQnVmZmVyLnB1c2goT2JqZWN0LmZyZWV6ZShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW1pdEV2ZW50KGFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FueUxpc3RlbmVycyAmJiB0aGlzLl9hbnlMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvZHVjZXMgYW4gYWNrIGNhbGxiYWNrIHRvIGVtaXQgd2l0aCBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWNrKGlkKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgc2VudCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgZG91YmxlIGNhbGxiYWNrc1xuICAgICAgICAgICAgaWYgKHNlbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgc2VudCA9IHRydWU7XG4gICAgICAgICAgICBkZWJ1ZyhcInNlbmRpbmcgYWNrICVqXCIsIGFyZ3MpO1xuICAgICAgICAgICAgc2VsZi5wYWNrZXQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IHNvY2tldF9pb19wYXJzZXJfMS5QYWNrZXRUeXBlLkFDSyxcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgZGF0YTogYXJncyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgdXBvbiBhIHNlcnZlciBhY2tub3dsZWdlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWNrZXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uYWNrKHBhY2tldCkge1xuICAgICAgICBjb25zdCBhY2sgPSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGFjaykge1xuICAgICAgICAgICAgZGVidWcoXCJjYWxsaW5nIGFjayAlcyB3aXRoICVqXCIsIHBhY2tldC5pZCwgcGFja2V0LmRhdGEpO1xuICAgICAgICAgICAgYWNrLmFwcGx5KHRoaXMsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlYnVnKFwiYmFkIGFjayAlc1wiLCBwYWNrZXQuaWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHNlcnZlciBjb25uZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmNvbm5lY3QoaWQpIHtcbiAgICAgICAgZGVidWcoXCJzb2NrZXQgY29ubmVjdGVkIHdpdGggaWQgJXNcIiwgaWQpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoXCJjb25uZWN0XCIpO1xuICAgICAgICB0aGlzLmVtaXRCdWZmZXJlZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0IGJ1ZmZlcmVkIGV2ZW50cyAocmVjZWl2ZWQgYW5kIGVtaXR0ZWQpLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBlbWl0QnVmZmVyZWQoKSB7XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlci5mb3JFYWNoKChhcmdzKSA9PiB0aGlzLmVtaXRFdmVudChhcmdzKSk7XG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnNlbmRCdWZmZXIuZm9yRWFjaCgocGFja2V0KSA9PiB0aGlzLnBhY2tldChwYWNrZXQpKTtcbiAgICAgICAgdGhpcy5zZW5kQnVmZmVyID0gW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB1cG9uIHNlcnZlciBkaXNjb25uZWN0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbmRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGRlYnVnKFwic2VydmVyIGRpc2Nvbm5lY3QgKCVzKVwiLCB0aGlzLm5zcCk7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLm9uY2xvc2UoXCJpbyBzZXJ2ZXIgZGlzY29ubmVjdFwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHVwb24gZm9yY2VkIGNsaWVudC9zZXJ2ZXIgc2lkZSBkaXNjb25uZWN0aW9ucyxcbiAgICAgKiB0aGlzIG1ldGhvZCBlbnN1cmVzIHRoZSBtYW5hZ2VyIHN0b3BzIHRyYWNraW5nIHVzIGFuZFxuICAgICAqIHRoYXQgcmVjb25uZWN0aW9ucyBkb24ndCBnZXQgdHJpZ2dlcmVkIGZvciB0aGlzLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWJzKSB7XG4gICAgICAgICAgICAvLyBjbGVhbiBzdWJzY3JpcHRpb25zIHRvIGF2b2lkIHJlY29ubmVjdGlvbnNcbiAgICAgICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKChzdWJEZXN0cm95KSA9PiBzdWJEZXN0cm95KCkpO1xuICAgICAgICAgICAgdGhpcy5zdWJzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW9bXCJfZGVzdHJveVwiXSh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzY29ubmVjdHMgdGhlIHNvY2tldCBtYW51YWxseS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIGRlYnVnKFwicGVyZm9ybWluZyBkaXNjb25uZWN0ICglcylcIiwgdGhpcy5uc3ApO1xuICAgICAgICAgICAgdGhpcy5wYWNrZXQoeyB0eXBlOiBzb2NrZXRfaW9fcGFyc2VyXzEuUGFja2V0VHlwZS5ESVNDT05ORUNUIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlbW92ZSBzb2NrZXQgZnJvbSBwb29sXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIGZpcmUgZXZlbnRzXG4gICAgICAgICAgICB0aGlzLm9uY2xvc2UoXCJpbyBjbGllbnQgZGlzY29ubmVjdFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGRpc2Nvbm5lY3QoKVxuICAgICAqXG4gICAgICogQHJldHVybiBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNsb3NlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNvbXByZXNzIGZsYWcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29tcHJlc3MgLSBpZiBgdHJ1ZWAsIGNvbXByZXNzZXMgdGhlIHNlbmRpbmcgZGF0YVxuICAgICAqIEByZXR1cm4gc2VsZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBjb21wcmVzcyhjb21wcmVzcykge1xuICAgICAgICB0aGlzLmZsYWdzLmNvbXByZXNzID0gY29tcHJlc3M7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgbW9kaWZpZXIgZm9yIGEgc3Vic2VxdWVudCBldmVudCBlbWlzc2lvbiB0aGF0IHRoZSBldmVudCBtZXNzYWdlIHdpbGwgYmUgZHJvcHBlZCB3aGVuIHRoaXMgc29ja2V0IGlzIG5vdFxuICAgICAqIHJlYWR5IHRvIHNlbmQgbWVzc2FnZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzZWxmXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGdldCB2b2xhdGlsZSgpIHtcbiAgICAgICAgdGhpcy5mbGFncy52b2xhdGlsZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gYW55IGV2ZW50IGlzIGVtaXR0ZWQuIFRoZSBldmVudCBuYW1lIGlzIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlXG4gICAgICogY2FsbGJhY2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgb25BbnkobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fYW55TGlzdGVuZXJzID0gdGhpcy5fYW55TGlzdGVuZXJzIHx8IFtdO1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGZpcmVkIHdoZW4gYW55IGV2ZW50IGlzIGVtaXR0ZWQuIFRoZSBldmVudCBuYW1lIGlzIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlXG4gICAgICogY2FsbGJhY2suIFRoZSBsaXN0ZW5lciBpcyBhZGRlZCB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0ZW5lcnMgYXJyYXkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgcHJlcGVuZEFueShsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9hbnlMaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMgfHwgW107XG4gICAgICAgIHRoaXMuX2FueUxpc3RlbmVycy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBmaXJlZCB3aGVuIGFueSBldmVudCBpcyBlbWl0dGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIG9mZkFueShsaXN0ZW5lcikge1xuICAgICAgICBpZiAoIXRoaXMuX2FueUxpc3RlbmVycykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnM7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lciA9PT0gbGlzdGVuZXJzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2FueUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGxpc3RlbmVycyB0aGF0IGFyZSBsaXN0ZW5pbmcgZm9yIGFueSBldmVudCB0aGF0IGlzIHNwZWNpZmllZC4gVGhpcyBhcnJheSBjYW4gYmUgbWFuaXB1bGF0ZWQsXG4gICAgICogZS5nLiB0byByZW1vdmUgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGxpc3RlbmVyc0FueSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FueUxpc3RlbmVycyB8fCBbXTtcbiAgICB9XG59XG5leHBvcnRzLlNvY2tldCA9IFNvY2tldDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdHJpY3RFdmVudEVtaXR0ZXIgPSB2b2lkIDA7XG5jb25zdCBFbWl0dGVyID0gcmVxdWlyZShcImNvbXBvbmVudC1lbWl0dGVyXCIpO1xuLyoqXG4gKiBTdHJpY3RseSB0eXBlZCB2ZXJzaW9uIG9mIGFuIGBFdmVudEVtaXR0ZXJgLiBBIGBUeXBlZEV2ZW50RW1pdHRlcmAgdGFrZXMgdHlwZVxuICogcGFyYW1ldGVycyBmb3IgbWFwcGluZ3Mgb2YgZXZlbnQgbmFtZXMgdG8gZXZlbnQgZGF0YSB0eXBlcywgYW5kIHN0cmljdGx5XG4gKiB0eXBlcyBtZXRob2QgY2FsbHMgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGFjY29yZGluZyB0byB0aGVzZSBldmVudCBtYXBzLlxuICpcbiAqIEB0eXBlUGFyYW0gTGlzdGVuRXZlbnRzIC0gYEV2ZW50c01hcGAgb2YgdXNlci1kZWZpbmVkIGV2ZW50cyB0aGF0IGNhbiBiZVxuICogbGlzdGVuZWQgdG8gd2l0aCBgb25gIG9yIGBvbmNlYFxuICogQHR5cGVQYXJhbSBFbWl0RXZlbnRzIC0gYEV2ZW50c01hcGAgb2YgdXNlci1kZWZpbmVkIGV2ZW50cyB0aGF0IGNhbiBiZVxuICogZW1pdHRlZCB3aXRoIGBlbWl0YFxuICogQHR5cGVQYXJhbSBSZXNlcnZlZEV2ZW50cyAtIGBFdmVudHNNYXBgIG9mIHJlc2VydmVkIGV2ZW50cywgdGhhdCBjYW4gYmVcbiAqIGVtaXR0ZWQgYnkgc29ja2V0LmlvIHdpdGggYGVtaXRSZXNlcnZlZGAsIGFuZCBjYW4gYmUgbGlzdGVuZWQgdG8gd2l0aFxuICogYGxpc3RlbmAuXG4gKi9cbmNsYXNzIFN0cmljdEV2ZW50RW1pdHRlciBleHRlbmRzIEVtaXR0ZXIge1xuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGBsaXN0ZW5lcmAgZnVuY3Rpb24gYXMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIGBldmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgQ2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvbihldiwgbGlzdGVuZXIpIHtcbiAgICAgICAgc3VwZXIub24oZXYsIGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBvbmUtdGltZSBgbGlzdGVuZXJgIGZ1bmN0aW9uIGFzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBgZXZgLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2IE5hbWUgb2YgdGhlIGV2ZW50XG4gICAgICogQHBhcmFtIGxpc3RlbmVyIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICovXG4gICAgb25jZShldiwgbGlzdGVuZXIpIHtcbiAgICAgICAgc3VwZXIub25jZShldiwgbGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXYgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0gYXJncyBWYWx1ZXMgdG8gc2VuZCB0byBsaXN0ZW5lcnMgb2YgdGhpcyBldmVudFxuICAgICAqL1xuICAgIGVtaXQoZXYsIC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIuZW1pdChldiwgLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhIHJlc2VydmVkIGV2ZW50LlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgYHByb3RlY3RlZGAsIHNvIHRoYXQgb25seSBhIGNsYXNzIGV4dGVuZGluZ1xuICAgICAqIGBTdHJpY3RFdmVudEVtaXR0ZXJgIGNhbiBlbWl0IGl0cyBvd24gcmVzZXJ2ZWQgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2IFJlc2VydmVkIGV2ZW50IG5hbWVcbiAgICAgKiBAcGFyYW0gYXJncyBBcmd1bWVudHMgdG8gZW1pdCBhbG9uZyB3aXRoIHRoZSBldmVudFxuICAgICAqL1xuICAgIGVtaXRSZXNlcnZlZChldiwgLi4uYXJncykge1xuICAgICAgICBzdXBlci5lbWl0KGV2LCAuLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3RlbmVycyBsaXN0ZW5pbmcgdG8gYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgRXZlbnQgbmFtZVxuICAgICAqIEByZXR1cm5zIEFycmF5IG9mIGxpc3RlbmVycyBzdWJzY3JpYmVkIHRvIGBldmVudGBcbiAgICAgKi9cbiAgICBsaXN0ZW5lcnMoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmxpc3RlbmVycyhldmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5TdHJpY3RFdmVudEVtaXR0ZXIgPSBTdHJpY3RFdmVudEVtaXR0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXJsID0gdm9pZCAwO1xuY29uc3QgcGFyc2V1cmkgPSByZXF1aXJlKFwicGFyc2V1cmlcIik7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKShcInNvY2tldC5pby1jbGllbnQ6dXJsXCIpO1xuLyoqXG4gKiBVUkwgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB1cmkgLSB1cmxcbiAqIEBwYXJhbSBwYXRoIC0gdGhlIHJlcXVlc3QgcGF0aCBvZiB0aGUgY29ubmVjdGlvblxuICogQHBhcmFtIGxvYyAtIEFuIG9iamVjdCBtZWFudCB0byBtaW1pYyB3aW5kb3cubG9jYXRpb24uXG4gKiAgICAgICAgRGVmYXVsdHMgdG8gd2luZG93LmxvY2F0aW9uLlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB1cmwodXJpLCBwYXRoID0gXCJcIiwgbG9jKSB7XG4gICAgbGV0IG9iaiA9IHVyaTtcbiAgICAvLyBkZWZhdWx0IHRvIHdpbmRvdy5sb2NhdGlvblxuICAgIGxvYyA9IGxvYyB8fCAodHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2F0aW9uKTtcbiAgICBpZiAobnVsbCA9PSB1cmkpXG4gICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIFwiLy9cIiArIGxvYy5ob3N0O1xuICAgIC8vIHJlbGF0aXZlIHBhdGggc3VwcG9ydFxuICAgIGlmICh0eXBlb2YgdXJpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmIChcIi9cIiA9PT0gdXJpLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgaWYgKFwiL1wiID09PSB1cmkuY2hhckF0KDEpKSB7XG4gICAgICAgICAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJpID0gbG9jLmhvc3QgKyB1cmk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEvXihodHRwcz98d3NzPyk6XFwvXFwvLy50ZXN0KHVyaSkpIHtcbiAgICAgICAgICAgIGRlYnVnKFwicHJvdG9jb2wtbGVzcyB1cmwgJXNcIiwgdXJpKTtcbiAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgbG9jKSB7XG4gICAgICAgICAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgXCIvL1wiICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJpID0gXCJodHRwczovL1wiICsgdXJpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHBhcnNlXG4gICAgICAgIGRlYnVnKFwicGFyc2UgJXNcIiwgdXJpKTtcbiAgICAgICAgb2JqID0gcGFyc2V1cmkodXJpKTtcbiAgICB9XG4gICAgLy8gbWFrZSBzdXJlIHdlIHRyZWF0IGBsb2NhbGhvc3Q6ODBgIGFuZCBgbG9jYWxob3N0YCBlcXVhbGx5XG4gICAgaWYgKCFvYmoucG9ydCkge1xuICAgICAgICBpZiAoL14oaHR0cHx3cykkLy50ZXN0KG9iai5wcm90b2NvbCkpIHtcbiAgICAgICAgICAgIG9iai5wb3J0ID0gXCI4MFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKC9eKGh0dHB8d3MpcyQvLnRlc3Qob2JqLnByb3RvY29sKSkge1xuICAgICAgICAgICAgb2JqLnBvcnQgPSBcIjQ0M1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9iai5wYXRoID0gb2JqLnBhdGggfHwgXCIvXCI7XG4gICAgY29uc3QgaXB2NiA9IG9iai5ob3N0LmluZGV4T2YoXCI6XCIpICE9PSAtMTtcbiAgICBjb25zdCBob3N0ID0gaXB2NiA/IFwiW1wiICsgb2JqLmhvc3QgKyBcIl1cIiA6IG9iai5ob3N0O1xuICAgIC8vIGRlZmluZSB1bmlxdWUgaWRcbiAgICBvYmouaWQgPSBvYmoucHJvdG9jb2wgKyBcIjovL1wiICsgaG9zdCArIFwiOlwiICsgb2JqLnBvcnQgKyBwYXRoO1xuICAgIC8vIGRlZmluZSBocmVmXG4gICAgb2JqLmhyZWYgPVxuICAgICAgICBvYmoucHJvdG9jb2wgK1xuICAgICAgICAgICAgXCI6Ly9cIiArXG4gICAgICAgICAgICBob3N0ICtcbiAgICAgICAgICAgIChsb2MgJiYgbG9jLnBvcnQgPT09IG9iai5wb3J0ID8gXCJcIiA6IFwiOlwiICsgb2JqLnBvcnQpO1xuICAgIHJldHVybiBvYmo7XG59XG5leHBvcnRzLnVybCA9IHVybDtcbiIsIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9IGxvY2Fsc3RvcmFnZSgpO1xuZXhwb3J0cy5kZXN0cm95ID0gKCgpID0+IHtcblx0bGV0IHdhcm5lZCA9IGZhbHNlO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0aWYgKCF3YXJuZWQpIHtcblx0XHRcdHdhcm5lZCA9IHRydWU7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nKTtcblx0XHR9XG5cdH07XG59KSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcblx0JyMwMDAwQ0MnLFxuXHQnIzAwMDBGRicsXG5cdCcjMDAzM0NDJyxcblx0JyMwMDMzRkYnLFxuXHQnIzAwNjZDQycsXG5cdCcjMDA2NkZGJyxcblx0JyMwMDk5Q0MnLFxuXHQnIzAwOTlGRicsXG5cdCcjMDBDQzAwJyxcblx0JyMwMENDMzMnLFxuXHQnIzAwQ0M2NicsXG5cdCcjMDBDQzk5Jyxcblx0JyMwMENDQ0MnLFxuXHQnIzAwQ0NGRicsXG5cdCcjMzMwMENDJyxcblx0JyMzMzAwRkYnLFxuXHQnIzMzMzNDQycsXG5cdCcjMzMzM0ZGJyxcblx0JyMzMzY2Q0MnLFxuXHQnIzMzNjZGRicsXG5cdCcjMzM5OUNDJyxcblx0JyMzMzk5RkYnLFxuXHQnIzMzQ0MwMCcsXG5cdCcjMzNDQzMzJyxcblx0JyMzM0NDNjYnLFxuXHQnIzMzQ0M5OScsXG5cdCcjMzNDQ0NDJyxcblx0JyMzM0NDRkYnLFxuXHQnIzY2MDBDQycsXG5cdCcjNjYwMEZGJyxcblx0JyM2NjMzQ0MnLFxuXHQnIzY2MzNGRicsXG5cdCcjNjZDQzAwJyxcblx0JyM2NkNDMzMnLFxuXHQnIzk5MDBDQycsXG5cdCcjOTkwMEZGJyxcblx0JyM5OTMzQ0MnLFxuXHQnIzk5MzNGRicsXG5cdCcjOTlDQzAwJyxcblx0JyM5OUNDMzMnLFxuXHQnI0NDMDAwMCcsXG5cdCcjQ0MwMDMzJyxcblx0JyNDQzAwNjYnLFxuXHQnI0NDMDA5OScsXG5cdCcjQ0MwMENDJyxcblx0JyNDQzAwRkYnLFxuXHQnI0NDMzMwMCcsXG5cdCcjQ0MzMzMzJyxcblx0JyNDQzMzNjYnLFxuXHQnI0NDMzM5OScsXG5cdCcjQ0MzM0NDJyxcblx0JyNDQzMzRkYnLFxuXHQnI0NDNjYwMCcsXG5cdCcjQ0M2NjMzJyxcblx0JyNDQzk5MDAnLFxuXHQnI0NDOTkzMycsXG5cdCcjQ0NDQzAwJyxcblx0JyNDQ0NDMzMnLFxuXHQnI0ZGMDAwMCcsXG5cdCcjRkYwMDMzJyxcblx0JyNGRjAwNjYnLFxuXHQnI0ZGMDA5OScsXG5cdCcjRkYwMENDJyxcblx0JyNGRjAwRkYnLFxuXHQnI0ZGMzMwMCcsXG5cdCcjRkYzMzMzJyxcblx0JyNGRjMzNjYnLFxuXHQnI0ZGMzM5OScsXG5cdCcjRkYzM0NDJyxcblx0JyNGRjMzRkYnLFxuXHQnI0ZGNjYwMCcsXG5cdCcjRkY2NjMzJyxcblx0JyNGRjk5MDAnLFxuXHQnI0ZGOTkzMycsXG5cdCcjRkZDQzAwJyxcblx0JyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcblx0Ly8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2Vcblx0Ly8gZXhwbGljaXRseVxuXHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgKHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgd2luZG93LnByb2Nlc3MuX19ud2pzKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBJcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuXHQvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuXHRyZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcblx0XHQvLyBJcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG5cdFx0KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcblx0XHQvLyBJcyBmaXJlZm94ID49IHYzMT9cblx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcblx0XHQvLyBEb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcblx0YXJnc1swXSA9ICh0aGlzLnVzZUNvbG9ycyA/ICclYycgOiAnJykgK1xuXHRcdHRoaXMubmFtZXNwYWNlICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnICVjJyA6ICcgJykgK1xuXHRcdGFyZ3NbMF0gK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICclYyAnIDogJyAnKSArXG5cdFx0JysnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuXHRpZiAoIXRoaXMudXNlQ29sb3JzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG5cdGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpO1xuXG5cdC8vIFRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG5cdC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cblx0Ly8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG5cdGxldCBpbmRleCA9IDA7XG5cdGxldCBsYXN0QyA9IDA7XG5cdGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBtYXRjaCA9PiB7XG5cdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluZGV4Kys7XG5cdFx0aWYgKG1hdGNoID09PSAnJWMnKSB7XG5cdFx0XHQvLyBXZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcblx0XHRcdC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG5cdFx0XHRsYXN0QyA9IGluZGV4O1xuXHRcdH1cblx0fSk7XG5cblx0YXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUuZGVidWcoKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKiBJZiBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGF2YWlsYWJsZSwgZmFsbHMgYmFja1xuICogdG8gYGNvbnNvbGUubG9nYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5leHBvcnRzLmxvZyA9IGNvbnNvbGUuZGVidWcgfHwgY29uc29sZS5sb2cgfHwgKCgpID0+IHt9KTtcblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuXHR0cnkge1xuXHRcdGlmIChuYW1lc3BhY2VzKSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2Uuc2V0SXRlbSgnZGVidWcnLCBuYW1lc3BhY2VzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRsZXQgcjtcblx0dHJ5IHtcblx0XHRyID0gZXhwb3J0cy5zdG9yYWdlLmdldEl0ZW0oJ2RlYnVnJyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG5cblx0Ly8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuXHRpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcblx0XHRyID0gcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cblxuXHRyZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG5cdHRyeSB7XG5cdFx0Ly8gVFZNTEtpdCAoQXBwbGUgVFYgSlMgUnVudGltZSkgZG9lcyBub3QgaGF2ZSBhIHdpbmRvdyBvYmplY3QsIGp1c3QgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dFxuXHRcdC8vIFRoZSBCcm93c2VyIGFsc28gaGFzIGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHQuXG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbW1vbicpKGV4cG9ydHMpO1xuXG5jb25zdCB7Zm9ybWF0dGVyc30gPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24gKHYpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVycm9yLm1lc3NhZ2U7XG5cdH1cbn07XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5mdW5jdGlvbiBzZXR1cChlbnYpIHtcblx0Y3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuZGVmYXVsdCA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5jb2VyY2UgPSBjb2VyY2U7XG5cdGNyZWF0ZURlYnVnLmRpc2FibGUgPSBkaXNhYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGUgPSBlbmFibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRjcmVhdGVEZWJ1Zy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cdGNyZWF0ZURlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXG5cdE9iamVjdC5rZXlzKGVudikuZm9yRWFjaChrZXkgPT4ge1xuXHRcdGNyZWF0ZURlYnVnW2tleV0gPSBlbnZba2V5XTtcblx0fSk7XG5cblx0LyoqXG5cdCogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG5cdCovXG5cblx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHQvKipcblx0KiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG5cdCpcblx0KiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmZvcm1hdHRlcnMgPSB7fTtcblxuXHQvKipcblx0KiBTZWxlY3RzIGEgY29sb3IgZm9yIGEgZGVidWcgbmFtZXNwYWNlXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSBUaGUgbmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIGZvciB0aGUgZGVidWcgaW5zdGFuY2UgdG8gYmUgY29sb3JlZFxuXHQqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9IEFuIEFOU0kgY29sb3IgY29kZSBmb3IgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcblx0XHRsZXQgaGFzaCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVEZWJ1Zy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBjcmVhdGVEZWJ1Zy5jb2xvcnMubGVuZ3RoXTtcblx0fVxuXHRjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuXG5cdC8qKlxuXHQqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXHRcdGxldCBwcmV2VGltZTtcblx0XHRsZXQgZW5hYmxlT3ZlcnJpZGUgPSBudWxsO1xuXG5cdFx0ZnVuY3Rpb24gZGVidWcoLi4uYXJncykge1xuXHRcdFx0Ly8gRGlzYWJsZWQ/XG5cdFx0XHRpZiAoIWRlYnVnLmVuYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzZWxmID0gZGVidWc7XG5cblx0XHRcdC8vIFNldCBgZGlmZmAgdGltZXN0YW1wXG5cdFx0XHRjb25zdCBjdXJyID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y29uc3QgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuXHRcdFx0c2VsZi5kaWZmID0gbXM7XG5cdFx0XHRzZWxmLnByZXYgPSBwcmV2VGltZTtcblx0XHRcdHNlbGYuY3VyciA9IGN1cnI7XG5cdFx0XHRwcmV2VGltZSA9IGN1cnI7XG5cblx0XHRcdGFyZ3NbMF0gPSBjcmVhdGVEZWJ1Zy5jb2VyY2UoYXJnc1swXSk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cblx0XHRcdFx0YXJncy51bnNoaWZ0KCclTycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblx0XHRcdGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCAobWF0Y2gsIGZvcm1hdCkgPT4ge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG5cdFx0XHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0XHRcdHJldHVybiAnJSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVyID0gY3JlYXRlRGVidWcuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXHRcdFx0XHRpZiAodHlwZW9mIGZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9IGFyZ3NbaW5kZXhdO1xuXHRcdFx0XHRcdG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuXHRcdFx0XHRcdC8vIE5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcblx0XHRcdFx0XHRhcmdzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0aW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcblx0XHRcdGNyZWF0ZURlYnVnLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuXHRcdFx0Y29uc3QgbG9nRm4gPSBzZWxmLmxvZyB8fCBjcmVhdGVEZWJ1Zy5sb2c7XG5cdFx0XHRsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHRkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cdFx0ZGVidWcudXNlQ29sb3JzID0gY3JlYXRlRGVidWcudXNlQ29sb3JzKCk7XG5cdFx0ZGVidWcuY29sb3IgPSBjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLmV4dGVuZCA9IGV4dGVuZDtcblx0XHRkZWJ1Zy5kZXN0cm95ID0gY3JlYXRlRGVidWcuZGVzdHJveTsgLy8gWFhYIFRlbXBvcmFyeS4gV2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVidWcsICdlbmFibGVkJywge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG5cdFx0XHRnZXQ6ICgpID0+IGVuYWJsZU92ZXJyaWRlID09PSBudWxsID8gY3JlYXRlRGVidWcuZW5hYmxlZChuYW1lc3BhY2UpIDogZW5hYmxlT3ZlcnJpZGUsXG5cdFx0XHRzZXQ6IHYgPT4ge1xuXHRcdFx0XHRlbmFibGVPdmVycmlkZSA9IHY7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBFbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuXHRcdGlmICh0eXBlb2YgY3JlYXRlRGVidWcuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5pdChkZWJ1Zyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlYnVnO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0ZW5kKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG5cdFx0Y29uc3QgbmV3RGVidWcgPSBjcmVhdGVEZWJ1Zyh0aGlzLm5hbWVzcGFjZSArICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICc6JyA6IGRlbGltaXRlcikgKyBuYW1lc3BhY2UpO1xuXHRcdG5ld0RlYnVnLmxvZyA9IHRoaXMubG9nO1xuXHRcdHJldHVybiBuZXdEZWJ1Zztcblx0fVxuXG5cdC8qKlxuXHQqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcblx0KiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuXHRcdGNyZWF0ZURlYnVnLnNhdmUobmFtZXNwYWNlcyk7XG5cblx0XHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRcdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0XHRsZXQgaTtcblx0XHRjb25zdCBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoIXNwbGl0W2ldKSB7XG5cdFx0XHRcdC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcblxuXHRcdFx0aWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG5cdCpcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBkaXNhYmxlKCkge1xuXHRcdGNvbnN0IG5hbWVzcGFjZXMgPSBbXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5uYW1lcy5tYXAodG9OYW1lc3BhY2UpLFxuXHRcdFx0Li4uY3JlYXRlRGVidWcuc2tpcHMubWFwKHRvTmFtZXNwYWNlKS5tYXAobmFtZXNwYWNlID0+ICctJyArIG5hbWVzcGFjZSlcblx0XHRdLmpvaW4oJywnKTtcblx0XHRjcmVhdGVEZWJ1Zy5lbmFibGUoJycpO1xuXHRcdHJldHVybiBuYW1lc3BhY2VzO1xuXHR9XG5cblx0LyoqXG5cdCogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVcblx0KiBAcmV0dXJuIHtCb29sZWFufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuXHRcdGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0bGV0IGk7XG5cdFx0bGV0IGxlbjtcblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQqIENvbnZlcnQgcmVnZXhwIHRvIG5hbWVzcGFjZVxuXHQqXG5cdCogQHBhcmFtIHtSZWdFeHB9IHJlZ3hlcFxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHRvTmFtZXNwYWNlKHJlZ2V4cCkge1xuXHRcdHJldHVybiByZWdleHAudG9TdHJpbmcoKVxuXHRcdFx0LnN1YnN0cmluZygyLCByZWdleHAudG9TdHJpbmcoKS5sZW5ndGggLSAyKVxuXHRcdFx0LnJlcGxhY2UoL1xcLlxcKlxcPyQvLCAnKicpO1xuXHR9XG5cblx0LyoqXG5cdCogQ29lcmNlIGB2YWxgLlxuXHQqXG5cdCogQHBhcmFtIHtNaXhlZH0gdmFsXG5cdCogQHJldHVybiB7TWl4ZWR9XG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcblx0XHRpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG5cdFx0fVxuXHRcdHJldHVybiB2YWw7XG5cdH1cblxuXHQvKipcblx0KiBYWFggRE8gTk9UIFVTRS4gVGhpcyBpcyBhIHRlbXBvcmFyeSBzdHViIGZ1bmN0aW9uLlxuXHQqIFhYWCBJdCBXSUxMIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5cblx0Ki9cblx0ZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0XHRjb25zb2xlLndhcm4oJ0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nKTtcblx0fVxuXG5cdGNyZWF0ZURlYnVnLmVuYWJsZShjcmVhdGVEZWJ1Zy5sb2FkKCkpO1xuXG5cdHJldHVybiBjcmVhdGVEZWJ1Zztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXR1cDtcbiIsIi8qKlxuICogRGV0ZWN0IEVsZWN0cm9uIHJlbmRlcmVyIC8gbndqcyBwcm9jZXNzLCB3aGljaCBpcyBub2RlLCBidXQgd2Ugc2hvdWxkXG4gKiB0cmVhdCBhcyBhIGJyb3dzZXIuXG4gKi9cblxuaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fCBwcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgcHJvY2Vzcy5icm93c2VyID09PSB0cnVlIHx8IHByb2Nlc3MuX19ud2pzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9icm93c2VyLmpzJyk7XG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbm9kZS5qcycpO1xufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbmNvbnN0IHR0eSA9IHJlcXVpcmUoJ3R0eScpO1xuY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBOb2RlLmpzIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5leHBvcnRzLmluaXQgPSBpbml0O1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuZGVzdHJveSA9IHV0aWwuZGVwcmVjYXRlKFxuXHQoKSA9PiB7fSxcblx0J0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nXG4pO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFs2LCAyLCAzLCA0LCA1LCAxXTtcblxudHJ5IHtcblx0Ly8gT3B0aW9uYWwgZGVwZW5kZW5jeSAoYXMgaW4sIGRvZXNuJ3QgbmVlZCB0byBiZSBpbnN0YWxsZWQsIE5PVCBsaWtlIG9wdGlvbmFsRGVwZW5kZW5jaWVzIGluIHBhY2thZ2UuanNvbilcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuXHRjb25zdCBzdXBwb3J0c0NvbG9yID0gcmVxdWlyZSgnc3VwcG9ydHMtY29sb3InKTtcblxuXHRpZiAoc3VwcG9ydHNDb2xvciAmJiAoc3VwcG9ydHNDb2xvci5zdGRlcnIgfHwgc3VwcG9ydHNDb2xvcikubGV2ZWwgPj0gMikge1xuXHRcdGV4cG9ydHMuY29sb3JzID0gW1xuXHRcdFx0MjAsXG5cdFx0XHQyMSxcblx0XHRcdDI2LFxuXHRcdFx0MjcsXG5cdFx0XHQzMixcblx0XHRcdDMzLFxuXHRcdFx0MzgsXG5cdFx0XHQzOSxcblx0XHRcdDQwLFxuXHRcdFx0NDEsXG5cdFx0XHQ0Mixcblx0XHRcdDQzLFxuXHRcdFx0NDQsXG5cdFx0XHQ0NSxcblx0XHRcdDU2LFxuXHRcdFx0NTcsXG5cdFx0XHQ2Mixcblx0XHRcdDYzLFxuXHRcdFx0NjgsXG5cdFx0XHQ2OSxcblx0XHRcdDc0LFxuXHRcdFx0NzUsXG5cdFx0XHQ3Nixcblx0XHRcdDc3LFxuXHRcdFx0NzgsXG5cdFx0XHQ3OSxcblx0XHRcdDgwLFxuXHRcdFx0ODEsXG5cdFx0XHQ5Mixcblx0XHRcdDkzLFxuXHRcdFx0OTgsXG5cdFx0XHQ5OSxcblx0XHRcdDExMixcblx0XHRcdDExMyxcblx0XHRcdDEyOCxcblx0XHRcdDEyOSxcblx0XHRcdDEzNCxcblx0XHRcdDEzNSxcblx0XHRcdDE0OCxcblx0XHRcdDE0OSxcblx0XHRcdDE2MCxcblx0XHRcdDE2MSxcblx0XHRcdDE2Mixcblx0XHRcdDE2Myxcblx0XHRcdDE2NCxcblx0XHRcdDE2NSxcblx0XHRcdDE2Nixcblx0XHRcdDE2Nyxcblx0XHRcdDE2OCxcblx0XHRcdDE2OSxcblx0XHRcdDE3MCxcblx0XHRcdDE3MSxcblx0XHRcdDE3Mixcblx0XHRcdDE3Myxcblx0XHRcdDE3OCxcblx0XHRcdDE3OSxcblx0XHRcdDE4NCxcblx0XHRcdDE4NSxcblx0XHRcdDE5Nixcblx0XHRcdDE5Nyxcblx0XHRcdDE5OCxcblx0XHRcdDE5OSxcblx0XHRcdDIwMCxcblx0XHRcdDIwMSxcblx0XHRcdDIwMixcblx0XHRcdDIwMyxcblx0XHRcdDIwNCxcblx0XHRcdDIwNSxcblx0XHRcdDIwNixcblx0XHRcdDIwNyxcblx0XHRcdDIwOCxcblx0XHRcdDIwOSxcblx0XHRcdDIxNCxcblx0XHRcdDIxNSxcblx0XHRcdDIyMCxcblx0XHRcdDIyMVxuXHRcdF07XG5cdH1cbn0gY2F0Y2ggKGVycm9yKSB7XG5cdC8vIFN3YWxsb3cgLSB3ZSBvbmx5IGNhcmUgaWYgYHN1cHBvcnRzLWNvbG9yYCBpcyBhdmFpbGFibGU7IGl0IGRvZXNuJ3QgaGF2ZSB0byBiZS5cbn1cblxuLyoqXG4gKiBCdWlsZCB1cCB0aGUgZGVmYXVsdCBgaW5zcGVjdE9wdHNgIG9iamVjdCBmcm9tIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG4gKlxuICogICAkIERFQlVHX0NPTE9SUz1ubyBERUJVR19ERVBUSD0xMCBERUJVR19TSE9XX0hJRERFTj1lbmFibGVkIG5vZGUgc2NyaXB0LmpzXG4gKi9cblxuZXhwb3J0cy5pbnNwZWN0T3B0cyA9IE9iamVjdC5rZXlzKHByb2Nlc3MuZW52KS5maWx0ZXIoa2V5ID0+IHtcblx0cmV0dXJuIC9eZGVidWdfL2kudGVzdChrZXkpO1xufSkucmVkdWNlKChvYmosIGtleSkgPT4ge1xuXHQvLyBDYW1lbC1jYXNlXG5cdGNvbnN0IHByb3AgPSBrZXlcblx0XHQuc3Vic3RyaW5nKDYpXG5cdFx0LnRvTG93ZXJDYXNlKClcblx0XHQucmVwbGFjZSgvXyhbYS16XSkvZywgKF8sIGspID0+IHtcblx0XHRcdHJldHVybiBrLnRvVXBwZXJDYXNlKCk7XG5cdFx0fSk7XG5cblx0Ly8gQ29lcmNlIHN0cmluZyB2YWx1ZSBpbnRvIEpTIHZhbHVlXG5cdGxldCB2YWwgPSBwcm9jZXNzLmVudltrZXldO1xuXHRpZiAoL14oeWVzfG9ufHRydWV8ZW5hYmxlZCkkL2kudGVzdCh2YWwpKSB7XG5cdFx0dmFsID0gdHJ1ZTtcblx0fSBlbHNlIGlmICgvXihub3xvZmZ8ZmFsc2V8ZGlzYWJsZWQpJC9pLnRlc3QodmFsKSkge1xuXHRcdHZhbCA9IGZhbHNlO1xuXHR9IGVsc2UgaWYgKHZhbCA9PT0gJ251bGwnKSB7XG5cdFx0dmFsID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHR2YWwgPSBOdW1iZXIodmFsKTtcblx0fVxuXG5cdG9ialtwcm9wXSA9IHZhbDtcblx0cmV0dXJuIG9iajtcbn0sIHt9KTtcblxuLyoqXG4gKiBJcyBzdGRvdXQgYSBUVFk/IENvbG9yZWQgb3V0cHV0IGlzIGVuYWJsZWQgd2hlbiBgdHJ1ZWAuXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHRyZXR1cm4gJ2NvbG9ycycgaW4gZXhwb3J0cy5pbnNwZWN0T3B0cyA/XG5cdFx0Qm9vbGVhbihleHBvcnRzLmluc3BlY3RPcHRzLmNvbG9ycykgOlxuXHRcdHR0eS5pc2F0dHkocHJvY2Vzcy5zdGRlcnIuZmQpO1xufVxuXG4vKipcbiAqIEFkZHMgQU5TSSBjb2xvciBlc2NhcGUgY29kZXMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuXHRjb25zdCB7bmFtZXNwYWNlOiBuYW1lLCB1c2VDb2xvcnN9ID0gdGhpcztcblxuXHRpZiAodXNlQ29sb3JzKSB7XG5cdFx0Y29uc3QgYyA9IHRoaXMuY29sb3I7XG5cdFx0Y29uc3QgY29sb3JDb2RlID0gJ1xcdTAwMUJbMycgKyAoYyA8IDggPyBjIDogJzg7NTsnICsgYyk7XG5cdFx0Y29uc3QgcHJlZml4ID0gYCAgJHtjb2xvckNvZGV9OzFtJHtuYW1lfSBcXHUwMDFCWzBtYDtcblxuXHRcdGFyZ3NbMF0gPSBwcmVmaXggKyBhcmdzWzBdLnNwbGl0KCdcXG4nKS5qb2luKCdcXG4nICsgcHJlZml4KTtcblx0XHRhcmdzLnB1c2goY29sb3JDb2RlICsgJ20rJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZikgKyAnXFx1MDAxQlswbScpO1xuXHR9IGVsc2Uge1xuXHRcdGFyZ3NbMF0gPSBnZXREYXRlKCkgKyBuYW1lICsgJyAnICsgYXJnc1swXTtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuXHRpZiAoZXhwb3J0cy5pbnNwZWN0T3B0cy5oaWRlRGF0ZSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHRyZXR1cm4gbmV3IERhdGUoKS50b0lTT1N0cmluZygpICsgJyAnO1xufVxuXG4vKipcbiAqIEludm9rZXMgYHV0aWwuZm9ybWF0KClgIHdpdGggdGhlIHNwZWNpZmllZCBhcmd1bWVudHMgYW5kIHdyaXRlcyB0byBzdGRlcnIuXG4gKi9cblxuZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcblx0cmV0dXJuIHByb2Nlc3Muc3RkZXJyLndyaXRlKHV0aWwuZm9ybWF0KC4uLmFyZ3MpICsgJ1xcbicpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG5cdGlmIChuYW1lc3BhY2VzKSB7XG5cdFx0cHJvY2Vzcy5lbnYuREVCVUcgPSBuYW1lc3BhY2VzO1xuXHR9IGVsc2Uge1xuXHRcdC8vIElmIHlvdSBzZXQgYSBwcm9jZXNzLmVudiBmaWVsZCB0byBudWxsIG9yIHVuZGVmaW5lZCwgaXQgZ2V0cyBjYXN0IHRvIHRoZVxuXHRcdC8vIHN0cmluZyAnbnVsbCcgb3IgJ3VuZGVmaW5lZCcuIEp1c3QgZGVsZXRlIGluc3RlYWQuXG5cdFx0ZGVsZXRlIHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcblx0cmV0dXJuIHByb2Nlc3MuZW52LkRFQlVHO1xufVxuXG4vKipcbiAqIEluaXQgbG9naWMgZm9yIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuICpcbiAqIENyZWF0ZSBhIG5ldyBgaW5zcGVjdE9wdHNgIG9iamVjdCBpbiBjYXNlIGB1c2VDb2xvcnNgIGlzIHNldFxuICogZGlmZmVyZW50bHkgZm9yIGEgcGFydGljdWxhciBgZGVidWdgIGluc3RhbmNlLlxuICovXG5cbmZ1bmN0aW9uIGluaXQoZGVidWcpIHtcblx0ZGVidWcuaW5zcGVjdE9wdHMgPSB7fTtcblxuXHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5pbnNwZWN0T3B0cyk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdGRlYnVnLmluc3BlY3RPcHRzW2tleXNbaV1dID0gZXhwb3J0cy5pbnNwZWN0T3B0c1trZXlzW2ldXTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlbyB0byBgdXRpbC5pbnNwZWN0KClgLCBhbGwgb24gYSBzaW5nbGUgbGluZS5cbiAqL1xuXG5mb3JtYXR0ZXJzLm8gPSBmdW5jdGlvbiAodikge1xuXHR0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXHRyZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpXG5cdFx0LnNwbGl0KCdcXG4nKVxuXHRcdC5tYXAoc3RyID0+IHN0ci50cmltKCkpXG5cdFx0LmpvaW4oJyAnKTtcbn07XG5cbi8qKlxuICogTWFwICVPIHRvIGB1dGlsLmluc3BlY3QoKWAsIGFsbG93aW5nIG11bHRpcGxlIGxpbmVzIGlmIG5lZWRlZC5cbiAqL1xuXG5mb3JtYXR0ZXJzLk8gPSBmdW5jdGlvbiAodikge1xuXHR0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXHRyZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpO1xufTtcbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgdyA9IGQgKiA3O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWwpKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigtPyg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8d2Vla3M/fHd8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoXG4gICAgc3RyXG4gICk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3lycyc6XG4gICAgY2FzZSAneXInOlxuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIG4gKiB5O1xuICAgIGNhc2UgJ3dlZWtzJzpcbiAgICBjYXNlICd3ZWVrJzpcbiAgICBjYXNlICd3JzpcbiAgICAgIHJldHVybiBuICogdztcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJztcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbSkgKyAnbSc7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICB9XG4gIHJldHVybiBtcyArICdtcyc7XG59XG5cbi8qKlxuICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRMb25nKG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgZCwgJ2RheScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGgsICdob3VyJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgbSwgJ21pbnV0ZScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIHMsICdzZWNvbmQnKTtcbiAgfVxuICByZXR1cm4gbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG1zQWJzLCBuLCBuYW1lKSB7XG4gIHZhciBpc1BsdXJhbCA9IG1zQWJzID49IG4gKiAxLjU7XG4gIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbikgKyAnICcgKyBuYW1lICsgKGlzUGx1cmFsID8gJ3MnIDogJycpO1xufVxuIiwiaW1wb3J0IGlvIGZyb20gXCIuL2J1aWxkL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBjb25zdCBNYW5hZ2VyID0gaW8uTWFuYWdlcjtcbmV4cG9ydCB7IGlvIH07XG5leHBvcnQgZGVmYXVsdCBpbztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhY2tvMlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVuZ2luZS5pby1jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpvaVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFyc2V1cmlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlZWRyYW5kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNpbXBsZXgtbm9pc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1wYXJzZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0YXRzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdXBwb3J0cy1jb2xvclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGhyZWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR0eVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==