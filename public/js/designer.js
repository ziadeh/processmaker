webpackJsonp([2],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export flatten */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return find; });
/* unused harmony export findIndex */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return forEach; });
/* unused harmony export without */
/* unused harmony export reduce */
/* unused harmony export every */
/* unused harmony export some */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return map; });
/* unused harmony export keys */
/* unused harmony export size */
/* unused harmony export values */
/* unused harmony export groupBy */
/* unused harmony export uniqueBy */
/* unused harmony export unionBy */
/* unused harmony export sortBy */
/* unused harmony export matchPattern */
/* unused harmony export debounce */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return bind; });
/* unused harmony export isUndefined */
/* unused harmony export isDefined */
/* unused harmony export isArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isObject; });
/* unused harmony export isNumber */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isString; });
/* unused harmony export ensureArray */
/* unused harmony export has */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return pick; });
/* unused harmony export omit */
/* unused harmony export merge */
/**
 * Flatten array, one level deep.
 *
 * @param {Array<?>} arr
 *
 * @return {Array<?>}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

var nativeToString = Object.prototype.toString;
var nativeHasOwnProperty = Object.prototype.hasOwnProperty;

function isUndefined(obj) {
  return obj === null || obj === undefined;
}

function isDefined(obj) {
  return obj !== null || obj !== undefined;
}

function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}

function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}

function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}

function isFunction(obj) {
  return nativeToString.call(obj) === '[object Function]';
}

function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}

/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */
function ensureArray(obj) {

  if (isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}

/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */
function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}

/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function|Object} matcher
 *
 * @return {Object}
 */
function find(collection, matcher) {

  matcher = toMatcher(matcher);

  var match;

  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      match = val;

      return false;
    }
  });

  return match;
}

/**
 * Find element index in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Object}
 */
function findIndex(collection, matcher) {

  matcher = toMatcher(matcher);

  var idx = isArray(collection) ? -1 : undefined;

  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      idx = key;

      return false;
    }
  });

  return idx;
}

/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Array} result
 */
function filter(collection, matcher) {

  var result = [];

  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      result.push(val);
    }
  });

  return result;
}

/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */
function forEach(collection, iterator) {

  if (isUndefined(collection)) {
    return;
  }

  var convertKey = isArray(collection) ? toNum : identity;

  for (var key in collection) {

    if (has(collection, key)) {
      var val = collection[key];

      var result = iterator(val, convertKey(key));

      if (result === false) {
        return;
      }
    }
  }
}

/**
 * Return collection without element.
 *
 * @param  {Array} arr
 * @param  {Function} matcher
 *
 * @return {Array}
 */
function without(arr, matcher) {

  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);

  matcher = toMatcher(matcher);

  return arr.filter(function (el, idx) {
    return !matcher(el, idx);
  });
}

/**
 * Reduce collection, returning a single result.
 *
 * @param  {Object|Array} collection
 * @param  {Function} iterator
 * @param  {Any} result
 *
 * @return {Any} result returned from last iterator
 */
function reduce(collection, iterator, result) {

  forEach(collection, function (value, idx) {
    result = iterator(result, value, idx);
  });

  return result;
}

/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */
function every(collection, matcher) {

  return reduce(collection, function (matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}

/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */
function some(collection, matcher) {

  return !!find(collection, matcher);
}

/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */
function map(collection, fn) {

  var result = [];

  forEach(collection, function (val, key) {
    result.push(fn(val, key));
  });

  return result;
}

/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */
function keys(collection) {
  return collection && Object.keys(collection) || [];
}

/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */
function size(collection) {
  return keys(collection).length;
}

/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */
function values(collection) {
  return map(collection, function (val) {
    return val;
  });
}

/**
 * Group collection members by attribute.
 *
 * @param  {Object|Array} collection
 * @param  {Function} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */
function groupBy(collection, extractor) {
  var grouped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


  extractor = toExtractor(extractor);

  forEach(collection, function (val) {
    var discriminator = extractor(val) || '_';

    var group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });

  return grouped;
}

function uniqueBy(extractor) {

  extractor = toExtractor(extractor);

  var grouped = {};

  for (var _len = arguments.length, collections = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    collections[_key - 1] = arguments[_key];
  }

  forEach(collections, function (c) {
    return groupBy(c, extractor, grouped);
  });

  var result = map(grouped, function (val, key) {
    return val[0];
  });

  return result;
}

var unionBy = uniqueBy;

/**
 * Sort collection by criteria.
 *
 * @param  {Object|Array} collection
 * @param  {String|Function} extractor
 *
 * @return {Array}
 */
function sortBy(collection, extractor) {

  extractor = toExtractor(extractor);

  var sorted = [];

  forEach(collection, function (value, key) {
    var disc = extractor(value, key);

    var entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      var d = sorted[idx].d;


      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    }

    // not inserted, append (!)
    sorted.push(entry);
  });

  return map(sorted, function (e) {
    return e.v;
  });
}

/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * const matcher = matchPattern({ id: 1 });
 *
 * var element = find(elements, matcher);
 *
 * @param  {Object} pattern
 *
 * @return {Function} matcherFn
 */
function matchPattern(pattern) {

  return function (el) {

    return every(pattern, function (val, key) {
      return el[key] === val;
    });
  };
}

function toExtractor(extractor) {
  return isFunction(extractor) ? extractor : function (e) {
    return e[extractor];
  };
}

function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : function (e) {
    return e === matcher;
  };
}

function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var slice = Array.prototype.slice;

/**
 * Debounce fn, calling it only once if
 * the given time elapsed between calls.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {Function} debounced function
 */
function debounce(fn, timeout) {

  var timer;

  return function () {

    var args = slice.call(arguments);

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      fn.apply(undefined, _toConsumableArray(args));
    }, timeout);
  };
}

/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */
function bind(fn, target) {
  return fn.bind(target);
}

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */
function assign(target) {
  for (var _len = arguments.length, others = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    others[_key - 1] = arguments[_key];
  }

  return _extends.apply(undefined, [target].concat(others));
}

/**
 * Pick given properties from the target object.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */
function pick(target, properties) {

  var result = {};

  var obj = Object(target);

  forEach(properties, function (prop) {

    if (prop in obj) {
      result[prop] = target[prop];
    }
  });

  return result;
}

/**
 * Pick all target properties, excluding the given ones.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */
function omit(target, properties) {

  var result = {};

  var obj = Object(target);

  forEach(obj, function (prop, key) {

    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });

  return result;
}

/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */
function merge(target) {
  for (var _len2 = arguments.length, sources = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  if (!sources.length) {
    return target;
  }

  forEach(sources, function (source) {

    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function (sourceVal, key) {

      var targetVal = target[key];

      if (isObject(sourceVal)) {

        if (!isObject(targetVal)) {
          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }
    });
  });

  return target;
}




/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(195)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 195:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrow_connector_marker__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__round_connector_marker__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line_shape__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manhathan_route__ = __webpack_require__(204);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectorShape; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * Flow
 */
var ConnectorShape = function (_ManhathanRouter) {
    _inherits(ConnectorShape, _ManhathanRouter);

    function ConnectorShape(canvas, svgLoader) {
        _classCallCheck(this, ConnectorShape);

        var _this = _possibleConstructorReturn(this, (ConnectorShape.__proto__ || Object.getPrototypeOf(ConnectorShape)).call(this));

        _this.canvas = canvas;
        _this.svgLoader = svgLoader;
        _this.shape = canvas.g();
        _this.method = "manhathan";
        _this.line = new __WEBPACK_IMPORTED_MODULE_2__line_shape__["a" /* LineShape */](_this.canvas);
        _this.inputDirection = "LEFT";
        _this.outputDirection = "RIGHT";
        return _this;
    }

    _createClass(ConnectorShape, [{
        key: "config",
        value: function config(options) {
            this.options = options;
            if (this.options.label && this.options.label.bounds) {
                this.width = this.options.label.bounds.width || 0;
                this.height = this.options.label.bounds.height || 0;
            } else {
                this.width = 0;
                this.height = 0;
            }
            this.method = options.method;
        }
    }, {
        key: "redraw",
        value: function redraw(posx1, posy1, posx2, posy2) {
            this.options.linePoints = [];
            this.router = this.createRoute(posx1, posy1, posx2, posy2);
            // console.log(this.router);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.router[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var data = _step.value;

                    this.options.linePoints.push(data.x);
                    this.options.linePoints.push(data.y);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.line.config(this.options);
            if (this.options.arrowType !== "none") {
                this.line.addMarkerEnd(new __WEBPACK_IMPORTED_MODULE_0__arrow_connector_marker__["a" /* ArrowConnectorMarker */](this.canvas).config({
                    type: this.options.arrowType
                }).getMarker());
            }

            if (this.options.originConnector === "round") {
                this.line.addMarkerStart(new __WEBPACK_IMPORTED_MODULE_1__round_connector_marker__["a" /* RoundConnectorMarker */](this.canvas).config(this.options).getMarker());
            }
            if (this.options.label.bounds) {
                var textDecorator = this.getDecorator("TEXT", {
                    text: this.options.name,
                    x: this.options.label.bounds.x,
                    y: this.options.label.bounds.y
                });
            }
            this.line.redraw();
            this.shape.add(this.line.getShape());
        }

        /**
         * ,ahathan renderer
         * @param posx1
         * @param posy1
         * @param posx2
         * @param posy2
         */

    }, {
        key: "renderManhathan",
        value: function renderManhathan(posx1, posy1, posx2, posy2) {
            this.options.linePoints = [];
            this.router = this.createRoute(posx1, posy1, posx2, posy2);

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.router[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var data = _step2.value;

                    this.options.linePoints.push(data.x);
                    this.options.linePoints.push(data.y);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            this.line.config(this.options);
            if (this.options.arrowType !== "none") {
                this.line.addMarkerEnd(new __WEBPACK_IMPORTED_MODULE_0__arrow_connector_marker__["a" /* ArrowConnectorMarker */](this.canvas).config({
                    type: this.options.arrowType
                }).getMarker());
            }

            if (this.options.originConnector === "round") {
                this.line.addMarkerStart(new __WEBPACK_IMPORTED_MODULE_1__round_connector_marker__["a" /* RoundConnectorMarker */](this.canvas).config(this.options).getMarker());
            }

            var textDecorator = this.getDecorator("TEXT", {
                text: this.options.name,
                x: this.options.label.bounds.x,
                y: this.options.label.bounds.y
            });

            this.shape.add(this.line.getShape(), textDecorator);
        }
    }, {
        key: "render",
        value: function render() {
            this.options.linePoints = [];
            this.router = this.options.waypoint;

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.router[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var data = _step3.value;

                    this.options.linePoints.push(data.x);
                    this.options.linePoints.push(data.y);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            this.line.config(this.options);
            if (this.options.arrowType !== "none") {
                this.line.addMarkerEnd(new __WEBPACK_IMPORTED_MODULE_0__arrow_connector_marker__["a" /* ArrowConnectorMarker */](this.canvas).config({
                    type: this.options.arrowType
                }).getMarker());
            }

            if (this.options.originConnector === "round") {
                this.line.addMarkerStart(new __WEBPACK_IMPORTED_MODULE_1__round_connector_marker__["a" /* RoundConnectorMarker */](this.canvas).config(this.options).getMarker());
            }

            if (this.options.label && this.options.label.bounds) {
                var textDecorator = this.getDecorator("TEXT", {
                    text: this.options.name,
                    x: this.options.label.bounds.x,
                    y: this.options.label.bounds.y
                });
                this.shape.add(this.line.getShape(), textDecorator);
            } else {
                this.shape.add(this.line.getShape());
            }
        }
    }, {
        key: "getDecorator",
        value: function getDecorator(type, options) {
            var decorator = void 0;
            switch (type) {
                case "TEXT":
                    decorator = this.canvas.text(+options.x, +options.y, options.text).attr({ "font-size": "13px", "font-family": "Arial, Helvetica, sans-serif" });
                    var tx = (+this.options.flo_x1 - +this.options.flo_x2) / -2 - decorator.getBBox().width / 2;
                    var ty = (+this.options.flo_y1 - +this.options.flo_y2) / -2 + decorator.getBBox().height;
                    decorator.transform("t " + tx + ", " + ty);
                    break;
                default:
                    decorator = this.canvas.group();
                    break;
            }
            return decorator;
        }
    }, {
        key: "getNativeShape",
        value: function getNativeShape() {
            return this.shape;
        }
    }, {
        key: "setMethod",
        value: function setMethod(method) {
            return this.method = method;
        }
    }]);

    return ConnectorShape;
}(__WEBPACK_IMPORTED_MODULE_3__manhathan_route__["a" /* ManhathanRouter */]);

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__(205);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManhathanRouter; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ManhathanRouter = function () {
    function ManhathanRouter() {
        _classCallCheck(this, ManhathanRouter);

        this.mindist = 20;
    }

    _createClass(ManhathanRouter, [{
        key: "createRoute",
        value: function createRoute(posx1, posy1, posx2, posy2) {
            // fake  example values
            /*********************/
            var points = [];
            var fromPt = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](posx1, posy1);
            var fromDir = 1;

            var toPt = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](posx2, posy2);
            var toDir = 3;

            var connection = null;
            // fake  example values
            /*********************/
            this.route(connection, toPt, toDir, fromPt, fromDir, points);
            return points;
        }
    }, {
        key: "route",
        value: function route(conn, fromPt, fromDir, toPt, toDir, points) {
            var TOL = void 0,
                TOLxTOL = void 0,
                UP = void 0,
                RIGHT = void 0,
                DOWN = void 0,
                LEFT = void 0,
                xDiff = void 0,
                yDiff = void 0,
                nPoint = void 0,
                dir = void 0,
                pos = void 0;

            TOL = 0.1;
            TOLxTOL = 0.01;

            // fromPt is an x,y to start from.
            // fromDir is an angle that the first link must
            UP = 0;
            RIGHT = 1;
            DOWN = 2;
            LEFT = 3;

            xDiff = fromPt.x - toPt.x;
            yDiff = fromPt.y - toPt.y;

            if (xDiff * xDiff < TOLxTOL && yDiff * yDiff < TOLxTOL) {
                points.push(toPt);
                return;
            }

            if (fromDir === LEFT) {
                if (xDiff > 0 && yDiff * yDiff < TOL && toDir === RIGHT) {
                    nPoint = toPt;
                    dir = toDir;
                } else {
                    if (xDiff < 0) {
                        nPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](fromPt.x - this.mindist, fromPt.y);
                    } else if (yDiff > 0 && toDir === DOWN || yDiff < 0 && toDir === UP) {
                        nPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](toPt.x, fromPt.y);
                    } else if (fromDir === toDir) {
                        pos = Math.min(fromPt.x, toPt.x) - this.mindist;
                        nPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](pos, fromPt.y);
                    } else {
                        nPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](fromPt.x - xDiff / 2, fromPt.y);
                    }

                    if (yDiff > 0) {
                        dir = UP;
                    } else {
                        dir = DOWN;
                    }
                }
            } else if (fromDir === RIGHT) {
                if (xDiff < 0 && yDiff * yDiff < TOL && toDir === LEFT) {
                    nPoint = toPt;
                    dir = toDir;
                } else {
                    if (xDiff > 0) {
                        nPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](fromPt.x + this.mindist, fromPt.y);
                    } else if (yDiff > 0 && toDir === DOWN || yDiff < 0 && toDir === UP) {
                        nPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](toPt.x, fromPt.y);
                    } else if (fromDir === toDir) {
                        pos = Math.max(fromPt.x, toPt.x) + this.mindist;
                        nPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](pos, fromPt.y);
                    } else {
                        nPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](fromPt.x - xDiff / 2, fromPt.y);
                    }

                    if (yDiff > 0) {
                        dir = UP;
                    } else {
                        dir = DOWN;
                    }
                }
            } else if (fromDir === DOWN) {
                if (xDiff * xDiff < TOL && yDiff < 0 && toDir === UP) {
                    nPoint = toPt;
                    dir = toDir;
                } else {
                    if (yDiff > 0) {
                        nPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](fromPt.x, fromPt.y + this.mindist);
                    } else if (xDiff > 0 && toDir === RIGHT || xDiff < 0 && toDir === LEFT) {
                        nPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](fromPt.x, toPt.y);
                    } else if (fromDir === toDir) {
                        pos = Math.max(fromPt.y, toPt.y) + this.mindist;
                        nPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](fromPt.x, pos);
                    } else {
                        nPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](fromPt.x, fromPt.y - yDiff / 2);
                    }

                    if (xDiff > 0) {
                        dir = LEFT;
                    } else {
                        dir = RIGHT;
                    }
                }
            } else if (fromDir === UP) {
                if (xDiff * xDiff < TOL && yDiff > 0 && toDir === DOWN) {
                    nPoint = toPt;
                    dir = toDir;
                } else {
                    if (yDiff < 0) {
                        nPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](fromPt.x, fromPt.y - this.mindist);
                    } else if (xDiff > 0 && toDir === RIGHT || xDiff < 0 && toDir === LEFT) {
                        nPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](fromPt.x, toPt.y);
                    } else if (fromDir === toDir) {
                        pos = Math.min(fromPt.y, toPt.y) - this.mindist;
                        nPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](fromPt.x, pos);
                    } else {
                        nPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](fromPt.x, fromPt.y - yDiff / 2);
                    }

                    if (xDiff > 0) {
                        dir = LEFT;
                    } else {
                        dir = RIGHT;
                    }
                }
            }

            this.route(conn, nPoint, dir, toPt, toDir, points);
            points.push(fromPt);
        }
    }]);

    return ManhathanRouter;
}();

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
    function Point(xCoordinate, yCoordinate) {
        _classCallCheck(this, Point);

        this.x = xCoordinate;
        this.y = yCoordinate;
        this.type = "Point";
    }

    _createClass(Point, [{
        key: "getX",
        value: function getX() {
            return this.x;
        }
    }, {
        key: "getY",
        value: function getY() {
            return this.y;
        }
    }]);

    return Point;
}();

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hasLowerCaseAlias;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DEFAULT_NS_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return XSI_TYPE; });
/* harmony export (immutable) */ __webpack_exports__["c"] = serializeAsType;
/* harmony export (immutable) */ __webpack_exports__["d"] = serializeAsProperty;
function hasLowerCaseAlias(pkg) {
  return pkg.xml && pkg.xml.tagAlias === 'lowerCase';
}

var DEFAULT_NS_MAP = {
  'xsi': 'http://www.w3.org/2001/XMLSchema-instance'
};

var XSI_TYPE = 'xsi:type';

function serializeFormat(element) {
  return element.xml && element.xml.serialize;
}

function serializeAsType(element) {
  return serializeFormat(element) === XSI_TYPE;
}

function serializeAsProperty(element) {
  return serializeFormat(element) === 'property';
}

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_moddle__ = __webpack_require__(491);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__lib_moddle__["a"]; });


/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return null !== obj && 'object' === typeof obj;
}

module.exports = isObject;


/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

window.Snap = __webpack_require__(480);
__webpack_require__(537);
window.bpmnModdle = __webpack_require__(432);

window.moddle = new window.bpmnModdle.default();
window.Event = new Vue();

Vue.component("designer", __webpack_require__(519));
Vue.component("toolbar", __webpack_require__(520));
Vue.component("uploader-file", __webpack_require__(521));
Vue.component("actions", __webpack_require__(518));

new Vue({
    el: "#appDesigner",
    methods: {
        exportPMIO: function exportPMIO() {
            Event.$emit("uploadPMIO", {});
        }
    }
});

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {
        zoomIn: function zoomIn() {
            Event.$emit('zoomIn', {});
        },
        zoomReset: function zoomReset() {
            Event.$emit('zoomReset', {});
        },
        zoomOut: function zoomOut() {
            Event.$emit('zoomOut', {});
        }
    }
});

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__diagram_moddle_svg__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__diagram_svgLoader__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__diagram_snap_plugins_multitext_plugin__ = __webpack_require__(545);
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    diagramSvg: {},
    diagramCoordinates: {},
    components: {},
    svgCanvas: {},
    data: function data() {
        return {
            xmlData: '<?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">  <bpmn:process id="Process_1" isExecutable="false">    <bpmn:startEvent id="StartEvent_1">      <bpmn:outgoing>SequenceFlow_036ay68</bpmn:outgoing>    </bpmn:startEvent>    <bpmn:task id="Task_0myplzs">      <bpmn:incoming>SequenceFlow_036ay68</bpmn:incoming>      <bpmn:outgoing>SequenceFlow_1jvkln4</bpmn:outgoing>    </bpmn:task>    <bpmn:sequenceFlow id="SequenceFlow_036ay68" sourceRef="StartEvent_1" targetRef="Task_0myplzs" />    <bpmn:task id="Task_0uw4l5w">      <bpmn:incoming>SequenceFlow_1jvkln4</bpmn:incoming>      <bpmn:outgoing>SequenceFlow_1p9jnkt</bpmn:outgoing>    </bpmn:task>    <bpmn:sequenceFlow id="SequenceFlow_1jvkln4" sourceRef="Task_0myplzs" targetRef="Task_0uw4l5w" />    <bpmn:exclusiveGateway id="ExclusiveGateway_15798xt">      <bpmn:incoming>SequenceFlow_1p9jnkt</bpmn:incoming>      <bpmn:outgoing>SequenceFlow_173mgt4</bpmn:outgoing>      <bpmn:outgoing>SequenceFlow_0d81nou</bpmn:outgoing>    </bpmn:exclusiveGateway>    <bpmn:sequenceFlow id="SequenceFlow_1p9jnkt" sourceRef="Task_0uw4l5w" targetRef="ExclusiveGateway_15798xt" />    <bpmn:task id="Task_1j0nzd8">      <bpmn:incoming>SequenceFlow_173mgt4</bpmn:incoming>      <bpmn:outgoing>SequenceFlow_1bvyywa</bpmn:outgoing>    </bpmn:task>    <bpmn:sequenceFlow id="SequenceFlow_173mgt4" sourceRef="ExclusiveGateway_15798xt" targetRef="Task_1j0nzd8" />    <bpmn:endEvent id="EndEvent_0ovfy2l">      <bpmn:incoming>SequenceFlow_0d81nou</bpmn:incoming>    </bpmn:endEvent>    <bpmn:sequenceFlow id="SequenceFlow_0d81nou" sourceRef="ExclusiveGateway_15798xt" targetRef="EndEvent_0ovfy2l" />    <bpmn:endEvent id="EndEvent_06tw9c9">      <bpmn:incoming>SequenceFlow_1bvyywa</bpmn:incoming>    </bpmn:endEvent>    <bpmn:sequenceFlow id="SequenceFlow_1bvyywa" sourceRef="Task_1j0nzd8" targetRef="EndEvent_06tw9c9" />  </bpmn:process>  <bpmndi:BPMNDiagram id="BPMNDiagram_1">    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1"><dc:Bounds x="173" y="102" width="36" height="36" />      </bpmndi:BPMNShape>      <bpmndi:BPMNShape id="Task_0myplzs_di" bpmnElement="Task_0myplzs"><dc:Bounds x="286" y="72" width="100" height="80" />      </bpmndi:BPMNShape>      <bpmndi:BPMNEdge id="SequenceFlow_036ay68_di" bpmnElement="SequenceFlow_036ay68"><di:waypoint xsi:type="dc:Point" x="209" y="120" /><di:waypoint xsi:type="dc:Point" x="248" y="120" /><di:waypoint xsi:type="dc:Point" x="248" y="112" /><di:waypoint xsi:type="dc:Point" x="286" y="112" /><bpmndi:BPMNLabel>  <dc:Bounds x="263" y="110" width="0" height="12" /></bpmndi:BPMNLabel>      </bpmndi:BPMNEdge>      <bpmndi:BPMNShape id="Task_0uw4l5w_di" bpmnElement="Task_0uw4l5w"><dc:Bounds x="501" y="57" width="100" height="80" />      </bpmndi:BPMNShape>      <bpmndi:BPMNEdge id="SequenceFlow_1jvkln4_di" bpmnElement="SequenceFlow_1jvkln4"><di:waypoint xsi:type="dc:Point" x="386" y="112" /><di:waypoint xsi:type="dc:Point" x="444" y="112" /><di:waypoint xsi:type="dc:Point" x="444" y="97" /><di:waypoint xsi:type="dc:Point" x="501" y="97" /><bpmndi:BPMNLabel>  <dc:Bounds x="459" y="98.5" width="0" height="12" /></bpmndi:BPMNLabel>      </bpmndi:BPMNEdge>      <bpmndi:BPMNShape id="ExclusiveGateway_15798xt_di" bpmnElement="ExclusiveGateway_15798xt" isMarkerVisible="true"><dc:Bounds x="654" y="72" width="50" height="50" /><bpmndi:BPMNLabel>  <dc:Bounds x="679" y="126" width="0" height="12" /></bpmndi:BPMNLabel>      </bpmndi:BPMNShape>      <bpmndi:BPMNEdge id="SequenceFlow_1p9jnkt_di" bpmnElement="SequenceFlow_1p9jnkt"><di:waypoint xsi:type="dc:Point" x="601" y="97" /><di:waypoint xsi:type="dc:Point" x="654" y="97" /><bpmndi:BPMNLabel>  <dc:Bounds x="627.5" y="76" width="0" height="12" /></bpmndi:BPMNLabel>      </bpmndi:BPMNEdge>      <bpmndi:BPMNShape id="Task_1j0nzd8_di" bpmnElement="Task_1j0nzd8"><dc:Bounds x="717" y="2" width="100" height="80" />      </bpmndi:BPMNShape>      <bpmndi:BPMNEdge id="SequenceFlow_173mgt4_di" bpmnElement="SequenceFlow_173mgt4"><di:waypoint xsi:type="dc:Point" x="679" y="72" /><di:waypoint xsi:type="dc:Point" x="679" y="42" /><di:waypoint xsi:type="dc:Point" x="717" y="42" /><bpmndi:BPMNLabel>  <dc:Bounds x="694" y="51" width="0" height="12" /></bpmndi:BPMNLabel>      </bpmndi:BPMNEdge>      <bpmndi:BPMNShape id="EndEvent_0ovfy2l_di" bpmnElement="EndEvent_0ovfy2l"><dc:Bounds x="749" y="148" width="36" height="36" /><bpmndi:BPMNLabel>  <dc:Bounds x="767" y="188" width="0" height="12" /></bpmndi:BPMNLabel>      </bpmndi:BPMNShape>      <bpmndi:BPMNEdge id="SequenceFlow_0d81nou_di" bpmnElement="SequenceFlow_0d81nou"><di:waypoint xsi:type="dc:Point" x="679" y="122" /><di:waypoint xsi:type="dc:Point" x="679" y="166" /><di:waypoint xsi:type="dc:Point" x="749" y="166" /><bpmndi:BPMNLabel>  <dc:Bounds x="694" y="138" width="0" height="12" /></bpmndi:BPMNLabel>      </bpmndi:BPMNEdge>      <bpmndi:BPMNShape id="EndEvent_06tw9c9_di" bpmnElement="EndEvent_06tw9c9"><dc:Bounds x="871" y="24" width="36" height="36" /><bpmndi:BPMNLabel>  <dc:Bounds x="889" y="64" width="0" height="12" /></bpmndi:BPMNLabel>      </bpmndi:BPMNShape>      <bpmndi:BPMNEdge id="SequenceFlow_1bvyywa_di" bpmnElement="SequenceFlow_1bvyywa"><di:waypoint xsi:type="dc:Point" x="817" y="42" /><di:waypoint xsi:type="dc:Point" x="871" y="42" /><bpmndi:BPMNLabel>  <dc:Bounds x="844" y="21" width="0" height="12" /></bpmndi:BPMNLabel>      </bpmndi:BPMNEdge>    </bpmndi:BPMNPlane>  </bpmndi:BPMNDiagram></bpmn:definitions>',
            //xmlData: '<?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">  <bpmn:collaboration id="Collaboration_0g96llt">    <bpmn:participant id="Participant_0sc70pi" name="fgfsdgfds" processRef="Process_0o8o82m" />  </bpmn:collaboration>  <bpmn:process id="Process_0o8o82m">    <bpmn:intermediateThrowEvent id="IntermediateThrowEvent_0h8xaea" />    <bpmn:dataObjectReference id="DataObjectReference_0ago5jo" dataObjectRef="DataObject_027n7ys" />    <bpmn:dataObject id="DataObject_027n7ys" />    <bpmn:dataStoreReference id="DataStoreReference_0op13vj" />  </bpmn:process>  <bpmndi:BPMNDiagram id="BPMNDiagram_1">    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_0g96llt">      <bpmndi:BPMNShape id="Participant_0sc70pi_di" bpmnElement="Participant_0sc70pi">        <dc:Bounds x="13.839160839160797" y="31" width="600" height="250" />      </bpmndi:BPMNShape>      <bpmndi:BPMNShape id="IntermediateThrowEvent_0h8xaea_di" bpmnElement="IntermediateThrowEvent_0h8xaea">        <dc:Bounds x="63.8391608391608" y="57.51248751248751" width="36" height="36" />        <bpmndi:BPMNLabel>          <dc:Bounds x="81.8391608391608" y="97.51248751248751" width="0" height="12" />        </bpmndi:BPMNLabel>      </bpmndi:BPMNShape>      <bpmndi:BPMNShape id="DataObjectReference_0ago5jo_di" bpmnElement="DataObjectReference_0ago5jo">        <dc:Bounds x="151.8391608391608" y="51" width="36" height="50" />        <bpmndi:BPMNLabel>          <dc:Bounds x="169.8391608391608" y="105" width="0" height="12" />        </bpmndi:BPMNLabel>      </bpmndi:BPMNShape>      <bpmndi:BPMNShape id="DataStoreReference_0op13vj_di" bpmnElement="DataStoreReference_0op13vj">        <dc:Bounds x="229.8391608391608" y="51" width="50" height="50" />        <bpmndi:BPMNLabel>          <dc:Bounds x="254.8391608391608" y="105" width="0" height="12" />        </bpmndi:BPMNLabel>      </bpmndi:BPMNShape>    </bpmndi:BPMNPlane>  </bpmndi:BPMNDiagram></bpmn:definitions>',
            //xmlData: '<?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">  <bpmn:process id="Process_1" isExecutable="false">    <bpmn:startEvent id="StartEvent_1">      <bpmn:outgoing>SequenceFlow_0od9xnl</bpmn:outgoing>    </bpmn:startEvent>    <bpmn:task id="Task_1fwbo70">      <bpmn:incoming>SequenceFlow_0od9xnl</bpmn:incoming>      <bpmn:outgoing>SequenceFlow_1mss75q</bpmn:outgoing>    </bpmn:task>    <bpmn:sequenceFlow id="SequenceFlow_0od9xnl" name="test" sourceRef="StartEvent_1" targetRef="Task_1fwbo70" />    <bpmn:endEvent id="EndEvent_07eowtv">      <bpmn:incoming>SequenceFlow_1mss75q</bpmn:incoming>    </bpmn:endEvent>    <bpmn:sequenceFlow id="SequenceFlow_1mss75q" sourceRef="Task_1fwbo70" targetRef="EndEvent_07eowtv" />  </bpmn:process>  <bpmndi:BPMNDiagram id="BPMNDiagram_1">    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">        <dc:Bounds x="173" y="102" width="36" height="36" />      </bpmndi:BPMNShape>      <bpmndi:BPMNShape id="Task_1fwbo70_di" bpmnElement="Task_1fwbo70">        <dc:Bounds x="338" y="80" width="100" height="80" />      </bpmndi:BPMNShape>      <bpmndi:BPMNEdge id="SequenceFlow_0od9xnl_di" bpmnElement="SequenceFlow_0od9xnl">        <di:waypoint xsi:type="dc:Point" x="209" y="120" />        <di:waypoint xsi:type="dc:Point" x="338" y="120" />        <bpmndi:BPMNLabel>          <dc:Bounds x="263" y="99" width="21" height="12" />        </bpmndi:BPMNLabel>      </bpmndi:BPMNEdge>      <bpmndi:BPMNShape id="EndEvent_07eowtv_di" bpmnElement="EndEvent_07eowtv">        <dc:Bounds x="549" y="102" width="36" height="36" />        <bpmndi:BPMNLabel>          <dc:Bounds x="567" y="142" width="0" height="12" />        </bpmndi:BPMNLabel>      </bpmndi:BPMNShape>      <bpmndi:BPMNEdge id="SequenceFlow_1mss75q_di" bpmnElement="SequenceFlow_1mss75q">        <di:waypoint xsi:type="dc:Point" x="438" y="120" />        <di:waypoint xsi:type="dc:Point" x="549" y="120" />        <bpmndi:BPMNLabel>          <dc:Bounds x="493.5" y="99" width="0" height="12" />        </bpmndi:BPMNLabel>      </bpmndi:BPMNEdge>    </bpmndi:BPMNPlane>  </bpmndi:BPMNDiagram></bpmn:definitions>',
            definitions: {}
        };
    },
    created: function created() {
        var _this = this;

        Event.$on('dragend', function (value) {
            return _this.createElement(value);
        });
        Event.$on('zoomIn', function (value) {
            return _this.diagramSvg.processAction('zoom-in');
        });
        Event.$on('zoomOut', function (value) {
            return _this.diagramSvg.processAction('zoom-out');
        });
        Event.$on('zoomReset', function (value) {
            return _this.diagramSvg.processAction('zoom-reset');
        });
        Event.$on('uploadPMIO', function (value) {
            return _this.exportPMIO();
        });
        Event.$on('change', function (xml) {
            return _this.loadXML(xml);
        });
    },

    methods: {
        loadXML: function loadXML() {
            var xml = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var that = this;
            if (xml) this.xmlData = xml;
            moddle.fromXML(that.xmlData, function (err, def) {
                that.diagramSvg.processAction('clear-canvas');
                that.definitions = def;
                that.diagramSvg.draw(def);
            });
            this.exportPMIO();
        },
        exportXML: function exportXML() {
            var that = this;
            moddle.toXML(that.definitions, function (err, xmlStrUpdated) {
                console.log(xmlStrUpdated);
            });
        },
        startEvent: function startEvent(event) {
            console.log(event);
        },
        createElement: function createElement(event) {
            event.target.style.opacity = "";
            var name = event.target.id.split(':');
            var defaultOptions = {
                id: name[1] + '_' + Math.floor(Math.random() * 100 + 1),
                x: event.x - this.diagramCoordinates.x,
                y: event.y - this.diagramCoordinates.y
            };

            var created = this.diagramSvg.createShape(event.target.id, defaultOptions);
            var shape = created.getShape();
            var element = moddle.create(event.target.id, {
                id: defaultOptions.id,
                x: shape.x,
                y: shape.y,
                width: shape.scaleX || shape.scale,
                height: shape.scaleY || shape.scale
            });
            this.diagramSvg.sendMessageChannel({
                sessionId: $('#sessionId').val(),
                id: defaultOptions.id,
                $type: event.target.id,
                x: event.x - this.diagramCoordinates.x,
                y: event.y - this.diagramCoordinates.y
            });
            this.definitions.get('diagrams').push(element);
            console.log(this.definitions);
        },
        moveShadowStop: function moveShadowStop(event) {
            this.style.backgroundColor = "green";
        },
        task: function task() {
            var task = moddle.create('bpmn:Task', {
                id: 'Task_1',
                default: null
            });
            console.log(task);
            this.definitions.get('diagrams').push(task);
        },
        getCanvas: function getCanvas() {
            return this.diagramSvg;
        },
        exportPMIO: function exportPMIO() {
            var request = __webpack_require__(503);
            var data = {};
            data.attributes = {
                bpmn: this.xmlData
            };
            data.type = "process";
            request.post('https://xbfhnicr.api.processmaker.io/api/v1/processes/import').send({ data: data }).set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjExNjhhY2I1Y2JiNmQ4NjZmNWZmYjg2NTllYzAwZGVjOWQwZDYwZDRjNjI5MDk4MTAwYTRmNGUwN2IwM2FmNDhiOTY0NWMyNmEwYTc2ZDc4In0.eyJhdWQiOiIxIiwianRpIjoiMTE2OGFjYjVjYmI2ZDg2NmY1ZmZiODY1OWVjMDBkZWM5ZDBkNjBkNGM2MjkwOTgxMDBhNGY0ZTA3YjAzYWY0OGI5NjQ1YzI2YTBhNzZkNzgiLCJpYXQiOjE0OTY4NDE5MTQsIm5iZiI6MTQ5Njg0MTkxNCwiZXhwIjoxNTI4Mzc3OTE0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.wHp7TBWglSyQtKk-ywZHRm2VVVFBlg5jN9WYAuCNaNSamsLfJdeS8gusZ5-OOjON_p-4TL76aAJfvqDlyAWYmpg1-_Op2Oa5DvleVnNxoOGfe_YWt-FBFERO9OyJzb2g9RHvJ6eK59RwTMh-fluV9QfXI4bBdigLDWo-tnvNe6O0FD5UPUsI19_qqTIUb15DhEoXd0WhwPPQua21V9biUB77i6ysn5mTpg0Yvm7ECYUnEAst18c5w1i-hMn80QhnLgOI8_yf8-pLQ8Op0B4K9LWmBOt-mqMhXzWybbY3wM9UQfOdSc3Qzy4e-hRztutecIpANW5lgoXAPfx8yaQpdE0JVebBx5wcU5FgKRK9XEJJjCvetbRDA4lNmt3Hy83pDlcMU5kZplGJZ0RBazNPdeewngCxhVGGhmiWOLnARml8nEH_a26aOTAEz_ToCHUsHVTKKivfN7f8TfEOMGnvLDnpFwZREfpRCD4xShznN-R5Bu_YQx6SGkWEGds9OP97mg15_Dj7HLI_VcFH_KRGG6gDCxsv9y1fLakAQyCRVZBwlSEKRE3UmgWzN6bV8_AB8AbSA0b7W8JtbBlndaLS9SsIOs2NtdhMmqPOcHN4v93D8AbeqISwyW3k5VXL3eww_XTMeqLeT0_SICQLLhADdfmnEfkCK77J96ttumoacCI').set('Accept', 'application/json').end(function (err, res) {
                console.log("Data Saved: ", res);
            });
        }
    },

    mounted: function mounted() {
        Snap.plugin(__WEBPACK_IMPORTED_MODULE_2__diagram_snap_plugins_multitext_plugin__["a" /* multitext */]);
        this.svgCanvas = Snap('#svg').attr({
            width: '5000px',
            height: '5000px'
        });
        this.diagramSvg = new __WEBPACK_IMPORTED_MODULE_0__diagram_moddle_svg__["a" /* DiagramSvg */](this.svgCanvas, new __WEBPACK_IMPORTED_MODULE_1__diagram_svgLoader__["a" /* SVGLoader */](this.svgCanvas));
        this.diagramCoordinates = {
            x: document.getElementById('svg').getBoundingClientRect().left,
            y: document.getElementById('svg').getBoundingClientRect().top
        };
        this.loadXML();

        /*
         let data = {
         "prj_uid": "372080569592c404f5dde57093455423",
         "prj_name": "Test",
         "prj_description": "",
         "prj_target_namespace": null,
         "prj_expresion_language": null,
         "prj_type_language": null,
         "prj_exporter": null,
         "prj_exporter_version": null,
         "prj_create_date": "2017-05-29 15:37:52",
         "prj_update_date": "2017-05-29 11:38:19",
         "prj_author": "00000000000000000000000000000001",
         "prj_author_version": null,
         "prj_original_source": null,
         "diagrams": [{
         "dia_uid": "269518920592c4050246b49040344066",
         "prj_uid": "372080569592c404f5dde57093455423",
         "dia_name": "Test",
         "dia_is_closable": 0,
         "pro_uid": "946953380592c405071cbf1027927851",
         "activities": [{
         "act_uid": "124698833592c406c4b0cc1026408625",
         "act_name": "Task 2",
         "act_type": "TASK",
         "act_is_for_compensation": "0",
         "act_start_quantity": "1",
         "act_completion_quantity": "0",
         "act_task_type": "EMPTY",
         "act_implementation": "",
         "act_instantiate": "0",
         "act_script_type": "",
         "act_script": "",
         "act_loop_type": "EMPTY",
         "act_test_before": "0",
         "act_loop_maximum": "0",
         "act_loop_condition": "0",
         "act_loop_cardinality": "0",
         "act_loop_behavior": "0",
         "act_is_adhoc": "0",
         "act_is_collapsed": "0",
         "act_completion_condition": "0",
         "act_ordering": "0",
         "act_cancel_remaining_instances": "1",
         "act_protocol": "0",
         "act_method": "0",
         "act_is_global": "0",
         "act_referer": "0",
         "act_default_flow": "0",
         "act_master_diagram": "0",
         "bou_element": "638724345592c405abe1058017041790",
         "bou_x": "363",
         "bou_y": "70",
         "bou_width": "150",
         "bou_height": "75",
         "bou_container": "bpmnDiagram"
         }, {
         "act_uid": "720497925592c406b9448a5055485729",
         "act_name": "Task 1",
         "act_type": "TASK",
         "act_is_for_compensation": "0",
         "act_start_quantity": "1",
         "act_completion_quantity": "0",
         "act_task_type": "EMPTY",
         "act_implementation": "",
         "act_instantiate": "0",
         "act_script_type": "",
         "act_script": "",
         "act_loop_type": "EMPTY",
         "act_test_before": "0",
         "act_loop_maximum": "0",
         "act_loop_condition": "0",
         "act_loop_cardinality": "0",
         "act_loop_behavior": "0",
         "act_is_adhoc": "0",
         "act_is_collapsed": "0",
         "act_completion_condition": "0",
         "act_ordering": "0",
         "act_cancel_remaining_instances": "1",
         "act_protocol": "0",
         "act_method": "0",
         "act_is_global": "0",
         "act_referer": "0",
         "act_default_flow": "0",
         "act_master_diagram": "0",
         "bou_element": "638724345592c405abe1058017041790",
         "bou_x": "166",
         "bou_y": "70",
         "bou_width": "150",
         "bou_height": "75",
         "bou_container": "bpmnDiagram"
         }],
         "events": [{
         "evn_uid": "256381233592c406cae2026029888464",
         "evn_name": "",
         "evn_type": "START",
         "evn_marker": "EMPTY",
         "evn_is_interrupting": "1",
         "evn_cancel_activity": "0",
         "evn_activity_ref": null,
         "evn_wait_for_completion": "0",
         "evn_error_name": null,
         "evn_error_code": null,
         "evn_escalation_name": null,
         "evn_escalation_code": null,
         "evn_message": "LEAD",
         "evn_operation_name": null,
         "evn_operation_implementation_ref": null,
         "evn_time_date": null,
         "evn_time_cycle": null,
         "evn_time_duration": null,
         "evn_behavior": "CATCH",
         "bou_element": "638724345592c405abe1058017041790",
         "bou_x": "88",
         "bou_y": "91",
         "bou_width": "33",
         "bou_height": "33",
         "bou_container": "bpmnDiagram"
         }, {
         "evn_uid": "632067129592c406cc59362027725874",
         "evn_name": "",
         "evn_type": "END",
         "evn_marker": "EMPTY",
         "evn_is_interrupting": "1",
         "evn_cancel_activity": "0",
         "evn_activity_ref": null,
         "evn_wait_for_completion": "0",
         "evn_error_name": null,
         "evn_error_code": null,
         "evn_escalation_name": null,
         "evn_escalation_code": null,
         "evn_message": "",
         "evn_operation_name": null,
         "evn_operation_implementation_ref": null,
         "evn_time_date": null,
         "evn_time_cycle": null,
         "evn_time_duration": null,
         "evn_behavior": "THROW",
         "bou_element": "638724345592c405abe1058017041790",
         "bou_x": "557",
         "bou_y": "91",
         "bou_width": "33",
         "bou_height": "33",
         "bou_container": "bpmnDiagram"
         }],
         "gateways": [],
         "flows": [{
         "flo_uid": "180462119592c406d2f3d38004898877",
         "flo_type": "SEQUENCE",
         "flo_name": " ",
         "flo_element_origin": "720497925592c406b9448a5055485729",
         "flo_element_origin_type": "bpmnActivity",
         "flo_element_dest": "124698833592c406c4b0cc1026408625",
         "flo_element_dest_type": "bpmnActivity",
         "flo_is_inmediate": "1",
         "flo_condition": "",
         "flo_x1": "317",
         "flo_y1": "108",
         "flo_x2": "363",
         "flo_y2": "108",
         "flo_state": [{"x": 317, "y": 108}, {"x": 363, "y": 108}],
         "flo_position": "1"
         }, {
         "flo_uid": "205528518592c406d2f5635096221855",
         "flo_type": "SEQUENCE",
         "flo_name": " ",
         "flo_element_origin": "124698833592c406c4b0cc1026408625",
         "flo_element_origin_type": "bpmnActivity",
         "flo_element_dest": "632067129592c406cc59362027725874",
         "flo_element_dest_type": "bpmnEvent",
         "flo_is_inmediate": "1",
         "flo_condition": "",
         "flo_x1": "514",
         "flo_y1": "108",
         "flo_x2": "557",
         "flo_y2": "108",
         "flo_state": [{"x": 514, "y": 108}, {"x": 557, "y": 108}],
         "flo_position": "1"
         }, {
         "flo_uid": "427596475592c406d2f2196069782540",
         "flo_type": "SEQUENCE",
         "flo_name": " ",
         "flo_element_origin": "256381233592c406cae2026029888464",
         "flo_element_origin_type": "bpmnEvent",
         "flo_element_dest": "720497925592c406b9448a5055485729",
         "flo_element_dest_type": "bpmnActivity",
         "flo_is_inmediate": "1",
         "flo_condition": "",
         "flo_x1": "121",
         "flo_y1": "108",
         "flo_x2": "166",
         "flo_y2": "108",
         "flo_state": [{"x": 121, "y": 108}, {"x": 166, "y": 108}],
         "flo_position": "1"
         }],
         "artifacts": [],
         "laneset": [],
         "lanes": [],
         "data": [],
         "participants": []
         }],
         "usr_setting_designer": {"enabled_grid": false}
         };
         this.diagramSvg.draw(data.diagrams[0]);
         console.log(this.diagramSvg.elementRegistry); // 124698833592c406c4b0cc1026408625
         const element = this.diagramSvg.getElementById('124698833592c406c4b0cc1026408625').getShape().getNativeShape();
         element.drag();*/
    }
});

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {
        createElement: function createElement(value) {
            Event.$emit("dragend", value);
        }
    }
});

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['help'],

    data: function data() {
        return {
            image: ''
        };
    },


    methods: {
        onFileChange: function onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            var file = files[0];

            var reader = new FileReader();

            reader.onload = function (e) {

                var xml = e.target.result;

                Event.$emit('change', xml);
            };

            reader.readAsText(file);
        }
    }

});

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* eslint-disable import/prefer-default-export */
var create = {
    create: {
        task: function task(x) {
            return x;
        },
        event: function event(x) {
            return x;
        }
    }
};

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_createActions__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create__ = __webpack_require__(287);



/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__base_createActions__["a" /* default */])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_1__create__["a" /* create */])));

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony export (immutable) */ __webpack_exports__["a"] = createActions;


function createActions(actionMap) {
    var actionNeo = {};
    debugger;
    console.log("jonas");
    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(actionMap, function (value, key, object) {
        mappingValues(value, key, object, actionNeo, key);
    });
    debugger;
}

//pwd vendra del tipo action/sub1/sub2
function mappingValues(value, key, object, nObject, pwd) {
    var root = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.split(pwd, '/');
    var partialObject = {};
    if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isFunction(value)) {
        creationObject(pwd, value, nObject);
        debugger;
    } else {
        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(value, function (val, k, obj) {
            mappingValues(val, k, obj, nObject, key + "/" + k);
        });
    }
}

function creationObject(pwd, value, nObject) {
    var nObjectF = nObject;
    var root = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.split(pwd, '/');
    var first = void 0;
    while (root.length > 0) {
        first = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.head(root);
        if (!nObjectF[first]) {
            nObjectF[first] = {};
        }
        root = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.drop(root);
        if (root.length == 0) {
            nObjectF[first] = function (payload) {
                return {
                    type: pwd,
                    payload: value(payload)
                };
            };
        }
        nObjectF = nObjectF[first];
    }

    return nObject;
}

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagramService; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var DiagramService = function () {
    function DiagramService() {
        _classCallCheck(this, DiagramService);
    }

    _createClass(DiagramService, [{
        key: "getData",
        value: function getData() {
            return this.diagram;
        }
    }, {
        key: "cnn",
        value: function cnn(method, uri, form, successCallback, errorCallback) {
            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.http[method](uri, form).then(function (response) {
                if (successCallback) {
                    successCallback(response);
                }
            }).catch(function (response) {
                if (errorCallback) {
                    errorCallback(response);
                }
            });
        }
    }]);

    return DiagramService;
}();

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrowConnectorMarker; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ArrowMarker
 */
var ArrowConnectorMarker = function () {
    function ArrowConnectorMarker(canvas) {
        _classCallCheck(this, ArrowConnectorMarker);

        this.canvas = canvas;
        this.shape = false;
        this.marker = false;
    }

    _createClass(ArrowConnectorMarker, [{
        key: "config",
        value: function config(options) {
            this.options = Object.assign({}, options);
            this.options.attr = {
                fill: "#000",
                stroke: "#000",
                strokeWidth: 1
            };
            this.options.line = [5, 0, 17, 5, 5, 10];
            this.options.marker = [0, 0, 100, 100, 18, 5];
            return this;
        }
    }, {
        key: "createShape",
        value: function createShape() {
            this.generateMarkerOptions();
            if (!this.shape) {
                this.shape = this.canvas.polyline(this.options.line).attr(this.options.attr);
            }
            return this.shape;
        }
    }, {
        key: "generateMarkerOptions",
        value: function generateMarkerOptions() {
            switch (this.options.type) {
                case "simple":
                    this.options.attr.fill = "none";
                    break;
                case "filled":
                    this.options.attr.fill = "#000";
                    break;
                case "filled-white":
                    this.options.attr.fill = "#FFF";
                    this.options.line = [5, 0, 17, 5, 5, 10, 5, 0];
                    break;
            }
        }
    }, {
        key: "getMarker",
        value: function getMarker() {
            if (!this.marker) {
                var _createShape;

                this.marker = (_createShape = this.createShape()).marker.apply(_createShape, _toConsumableArray(this.options.marker));
            }
            return this.marker;
        }
    }]);

    return ArrowConnectorMarker;
}();

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Association; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Flow
 */
var Association = function () {
    function Association(options, shape) {
        _classCallCheck(this, Association);

        this.shape = shape;
        options.lineType = "dotted";
        options.arrowType = "none";
        this.shape.config(options);
    }

    _createClass(Association, [{
        key: "render",
        value: function render() {
            this.shape.render();
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.shape;
        }
    }]);

    return Association;
}();

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlackboxPool; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * StartEvent
 */
var BlackboxPool = function () {
    function BlackboxPool(options, shape) {
        _classCallCheck(this, BlackboxPool);

        this.type = options.evn_type;
        this.name = options.evn_name;
        this.options = options;
        this.shape = shape;
        this.shape.config(options);
    }

    _createClass(BlackboxPool, [{
        key: "render",
        value: function render() {
            this.shape.render();
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.shape;
        }
    }]);

    return BlackboxPool;
}();

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlackboxPoolShape; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Task Shape class
 */
var BlackboxPoolShape = function () {
    function BlackboxPoolShape(canvas, svgLoader) {
        _classCallCheck(this, BlackboxPoolShape);

        this.canvas = canvas;
        this.svgLoader = svgLoader;
        this.rounded = 5;
        this.attr = {
            fill: "#FFF",
            stroke: "#000",
            strokeWidth: 2
        };
        this.shape = this.canvas.group();
    }

    _createClass(BlackboxPoolShape, [{
        key: "config",
        value: function config(options) {
            this.options = options;
            this.id = options.act_uid;
            this.x = +options.bou_x;
            this.y = +options.bou_y;
            this.scaleX = +options.bou_width;
            this.scaleY = +options.bou_height;
            this.rounded = +options.rounded || this.rounded;
            this.attr = options.attr || this.attr;
        }
    }, {
        key: "render",
        value: function render() {
            this.shape.add(this.canvas.rect(this.x, this.y, this.scaleX, this.scaleY, this.rounded).attr(this.attr));

            this.addDecorators();
            this.shape.drag();
        }
    }, {
        key: "addDecorators",
        value: function addDecorators() {
            this.addLineDecorator();
            this.addTextDecorator();
        }
    }, {
        key: "addLineDecorator",
        value: function addLineDecorator() {
            this.shape.add(this.canvas.polyline(this.x + 42 + " " + this.y + " " + (this.x + 42) + " " + (this.y + this.scaleY)).attr({
                fill: "none",
                stroke: "#000",
                strokeWidth: 2
            }));
        }
    }, {
        key: "addTextDecorator",
        value: function addTextDecorator() {
            this.shape.add(this.canvas.multitext(this.x - 30, this.y + this.scaleY / 2, this.options.par_name, this.scaleY, { "font-size": "13px", "font-family": "Arial, Helvetica, sans-serif" }).transform("r270"));
        }
    }, {
        key: "getNativeShape",
        value: function getNativeShape() {
            return this.shape;
        }
    }]);

    return BlackboxPoolShape;
}();

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataAssociation; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Flow
 */
var DataAssociation = function () {
    function DataAssociation(options, shape) {
        _classCallCheck(this, DataAssociation);

        this.shape = shape;
        options.lineType = "dotted";
        options.arrowType = "simple";
        this.shape.config(options);
    }

    _createClass(DataAssociation, [{
        key: "render",
        value: function render() {
            this.shape.render();
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.shape;
        }
    }]);

    return DataAssociation;
}();

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataObject; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataObject = function () {
    function DataObject(options, shape) {
        _classCallCheck(this, DataObject);

        this.options = options;
        this.shape = shape;
        this.shape.config(options);
    }

    _createClass(DataObject, [{
        key: "render",
        value: function render() {
            this.shape.render();
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.shape;
        }
    }]);

    return DataObject;
}();

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataObjectShape; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * StartEventShape
 */
var DataObjectShape = function () {
    function DataObjectShape(canvas, svgLoader) {
        _classCallCheck(this, DataObjectShape);

        this.canvas = canvas;
        this.shape = this.canvas.group();
        this.svgLoader = svgLoader;
        this.x = 100;
        this.y = 100;
        this.scale = 40;
        this.attr = {
            fill: "#B4DCCB",
            stroke: "#018A4F",
            strokeWidth: 2
        };
        this.animateOptions = { r: this.scale };
        this.animationTime = 10;
        this.inputConnectors = new Map();
        this.outputConnectors = new Map();
    }

    _createClass(DataObjectShape, [{
        key: "config",
        value: function config(options) {
            this.x = +options.x - 4;
            this.y = +options.y - 3;
            this.scale = options.width || this.scale;
            this.options = options;
            this.attr = options.attr || this.attr;
            this.animateOptions.r = +options.width / 2 || this.scale;
            this.animateOptions = options.animateOptions || this.animateOptions;
            this.animationTime = options.animationTime || this.animationTime;
        }
    }, {
        key: "getBase",
        value: function getBase(type, marker) {
            var x = this.x;
            var y = this.y;
            var baseConfig = {
                path: "m250 174l0 2c0 1 0 1 0 1l0 649 500 0 0-486c0 0 0 0 0 0l0-1 0-1c-1 0-1 0-1 0l-166-162 0-2-2 0-236 0-92 0z m5 5l323 0 0 163 167 0 0 479-490 0z m328 4l158 154-158 0z",
                options: {
                    x: x,
                    y: y,
                    scale: "s0.07",
                    attr: {
                        stroke: "#000",
                        strokeWidth: 0
                    }
                }
            };

            var base = this.svgLoader.loadElement(baseConfig.path, baseConfig.options);
            var offsetX = Math.round(x - base.getBBox().x);
            var offsetY = Math.round(y - base.getBBox().y);
            base.transform("s0.07, " + (x + offsetX + 4) + ", " + (y + offsetY + 2));

            this.shape.add(base);
        }
    }, {
        key: "getDecorator",
        value: function getDecorator(type, options) {
            var decorator = void 0;
            switch (type) {
                case "TEXT":
                    decorator = this.canvas.text(options.x, options.y, options.text).attr({ "font-size": "13px", "font-family": "Arial, Helvetica, sans-serif" });
                    var tx = (+this.options.bou_width - decorator.getBBox().width) / 2 + 2;
                    var ty = +this.options.bou_height + 20;
                    decorator.transform("t " + tx + ", " + ty);
                    break;
                default:
                    decorator = this.canvas.group();
                    break;
            }
            return decorator;
        }
    }, {
        key: "render",
        value: function render() {
            this.shape.add(this.canvas.rect(this.x, this.y, this.scale, this.scale).attr({ fill: "#FFF" }));
            this.getBase(this.options.type, this.options.marker);
            var textDecorator = this.getDecorator("TEXT", {
                text: this.options.dat_name,
                x: this.x,
                y: this.y
            });
            this.shape.add(textDecorator);
            this.shape.drag();
        }
    }, {
        key: "getNativeShape",
        value: function getNativeShape() {
            return this.shape;
        }
        /**
         * Refresh all shapes connectors
         * @param posx
         * @param posy
         */

    }, {
        key: "refreshAllConnections",
        value: function refreshAllConnections(nativeShape) {
            var conn = void 0,
                dX = void 0,
                dY = void 0;
            var shapeBox = nativeShape.getBBox();

            this.outputConnectors.forEach(function (value, key) {
                conn = value;

                if (conn.shape.outputDirection === "RIGHT") {
                    dX = shapeBox.width;
                    dY = shapeBox.height / 2;
                }

                var linesArray = conn.shape.router;
                var n = linesArray.length;

                conn.shape.options.method = "manhathan";
                conn.shape.config(conn.shape.options);

                conn.shape.redraw(shapeBox.x + dX, shapeBox.y + dY, linesArray[n - 1].x, linesArray[n - 1].y);
            });

            this.inputConnectors.forEach(function (value, key) {
                conn = value;
                if (conn.shape.inputDirection === "LEFT") {
                    dX = 0;
                    dY = shapeBox.height / 2;
                }

                var linesArray = conn.shape.router;
                var n = linesArray.length;

                conn.shape.options.method = "manhathan";
                conn.shape.config(conn.shape.options);

                conn.shape.redraw(linesArray[0].x, linesArray[0].y, shapeBox.x + dX, shapeBox.y + dY);
            });
        }
    }, {
        key: "registerInputConn",
        value: function registerInputConn(id, conn) {
            this.inputConnectors.set(id, conn);
            this.setDirections(conn);
        }
    }, {
        key: "setDirections",
        value: function setDirections(conn) {
            conn.getShape().inputDirection = "LEFT";
            conn.getShape().outputDirection = "RIGHT";
        }
    }, {
        key: "registerOutputConn",
        value: function registerOutputConn(id, conn) {
            this.outputConnectors.set(id, conn);
            this.setDirections(conn);
        }
    }]);

    return DataObjectShape;
}();

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStore; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataStore = function () {
    function DataStore(options, shape) {
        _classCallCheck(this, DataStore);

        this.options = options;
        this.shape = shape;
        this.shape.config(options);
    }

    _createClass(DataStore, [{
        key: "render",
        value: function render() {
            this.shape.render();
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.shape;
        }
    }]);

    return DataStore;
}();

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStoreShape; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * StartEventShape
 */
var DataStoreShape = function () {
    function DataStoreShape(canvas, svgLoader) {
        _classCallCheck(this, DataStoreShape);

        this.canvas = canvas;
        this.shape = this.canvas.group();
        this.svgLoader = svgLoader;
        this.x = 100;
        this.y = 100;
        this.scale = 40;
        this.attr = {
            fill: "#B4DCCB",
            stroke: "#018A4F",
            strokeWidth: 2
        };
        this.animateOptions = { r: this.scale };
        this.animationTime = 10;
    }

    _createClass(DataStoreShape, [{
        key: "config",
        value: function config(options) {
            this.x = +options.x - 4;
            this.y = +options.y - 3;
            this.scale = options.width || this.scale;
            this.options = options;
            this.attr = options.attr || this.attr;
            this.animateOptions.r = +options.width / 2 || this.scale;
            this.animateOptions = options.animateOptions || this.animateOptions;
            this.animationTime = options.animationTime || this.animationTime;
        }
    }, {
        key: "getBase",
        value: function getBase(type, marker) {
            var x = this.x;
            var y = this.y;
            var baseConfig = {
                path: "m500 184c-78 0-156 7-216 20-30 7-56 15-75 25-18 10-31 21-34 35 0 0 0 1 0 1l0 0 0 0 0 73c0 0 0 0 0 0l0 73c0 0 0 0 0 0l0 324 0 0c3 14 16 26 34 36 19 10 45 18 75 25 60 13 138 19 216 19 78 0 156-6 216-19 30-7 56-15 75-25 19-10 31-22 34-36l0 0 0-324c0 0 0 0 0 0l0-73c0 0 0 0 0 0l0-73c0 0 0 0 0 0l0 0 0 0c0 0 0-1 0-1-3-14-16-25-34-35-19-10-45-18-75-25-60-13-138-20-216-20z m0 5c78 0 156 7 215 20 30 6 55 15 73 24 18 10 29 21 32 32-3 12-14 23-32 32-18 10-43 18-73 24-59 13-137 20-215 20-78 0-156-7-215-20-30-6-55-14-73-24-18-9-29-20-32-32 3-11 14-22 32-32 18-9 43-18 73-24 39-8 86-14 135-17 26-2 53-3 80-3z m-320 88c6 10 16 18 29 25 19 10 45 18 75 24 60 13 138 20 216 20 78 0 156-7 216-20 30-6 56-14 75-24 13-7 23-15 29-25l0 61c-2 12-13 23-32 32-18 10-43 18-73 24-59 13-137 20-215 20-78 0-156-7-215-20-30-6-55-14-73-24-18-9-29-20-32-32z m0 73c6 10 16 18 29 25 19 10 45 18 75 24 60 13 138 20 216 20 78 0 156-7 216-20 30-6 56-14 75-24 13-7 23-15 29-25l0 61c-2 12-13 23-32 32-18 10-43 18-73 25-59 12-137 19-215 19-78 0-156-7-215-19-30-7-55-15-73-25-18-9-29-20-32-32z m0 73c6 10 16 18 29 25 19 10 45 18 75 24 60 14 138 20 216 20 78 0 156-6 216-20 30-6 56-14 75-24 13-7 23-15 29-25l0 311c-2 12-13 23-32 33-18 9-43 17-73 24-59 13-137 19-215 19-78 0-156-6-215-19-30-7-55-15-73-24-18-10-29-21-32-33z",
                options: {
                    x: x,
                    y: y,
                    scale: "s0.07",
                    attr: {
                        stroke: "#000",
                        strokeWidth: 0
                    }
                }
            };
            var base = this.svgLoader.loadElement(baseConfig.path, baseConfig.options);
            var offsetX = Math.round(x - base.getBBox().x);
            var offsetY = Math.round(y - base.getBBox().y);
            base.transform("S0.07, " + (x + offsetX + 4) + ", " + (y + offsetY + 2));

            this.shape.add(base);
        }
    }, {
        key: "getDecorator",
        value: function getDecorator(type, options) {
            var decorator = void 0;
            switch (type) {
                case "TEXT":
                    decorator = this.canvas.text(options.x, options.y, options.text).attr({ "font-size": "13px", "font-family": "Arial, Helvetica, sans-serif" });
                    var tx = (+this.options.width - decorator.getBBox().width) / 2 + 2;
                    var ty = +this.options.height + 20;
                    decorator.transform("t " + tx + ", " + ty);
                    break;
                default:
                    decorator = this.canvas.group();
                    break;
            }
            return decorator;
        }
    }, {
        key: "render",
        value: function render() {
            this.shape.add(this.canvas.rect(this.x, this.y, this.scale, this.scale).attr({ fill: "#FFF" }));
            this.getBase(this.options.type, this.options.marker);
            var textDecorator = this.getDecorator("TEXT", {
                text: this.options.name,
                x: this.x,
                y: this.y
            });
            this.shape.add(textDecorator);
            this.shape.drag();
        }
    }, {
        key: "getNativeShape",
        value: function getNativeShape() {
            return this.shape;
        }
    }]);

    return DataStoreShape;
}();

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Diagram; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * EndEvent
 */
var Diagram = function () {
    function Diagram(options, shape) {
        _classCallCheck(this, Diagram);

        this.type = "diagram";
        this.options = options;
        this.shape = shape;
        this.shape.config(options);
    }

    _createClass(Diagram, [{
        key: "zoomIn",
        value: function zoomIn() {
            this.shape.zoomIn();
        }
    }, {
        key: "zoomOut",
        value: function zoomOut() {
            this.shape.zoomOut();
        }
    }, {
        key: "zoomReset",
        value: function zoomReset() {
            this.shape.zoomReset();
        }
    }, {
        key: "add",
        value: function add(element) {
            this.shape.add(element.getShape());
        }
    }, {
        key: "render",
        value: function render() {
            this.shape.render();
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.shape;
        }
    }]);

    return Diagram;
}();

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagramShape; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * StartEventShape
 */
var DiagramShape = function () {
    function DiagramShape(canvas, svgLoader) {
        _classCallCheck(this, DiagramShape);

        this.canvas = canvas;
        this.shape = this.canvas.g();
        this.zoomToolbar = this.canvas.g();
        this.svgLoader = svgLoader;
        this.scale = 1;
    }

    _createClass(DiagramShape, [{
        key: "config",
        value: function config(options) {
            this.options = options;
        }
    }, {
        key: "add",
        value: function add(shape) {
            this.shape.add(shape.getNativeShape());
        }
    }, {
        key: "render",
        value: function render() {
            return this;
        }
    }, {
        key: "getNativeShape",
        value: function getNativeShape() {
            return this.shape;
        }
    }, {
        key: "zoomReset",
        value: function zoomReset() {
            this.scale = 1;
            this.shape.transform("s" + this.scale + " 0 0");
        }
    }, {
        key: "zoomIn",
        value: function zoomIn() {
            this.scale += 0.1;
            this.shape.transform("s" + this.scale + " 0 0");
        }
    }, {
        key: "zoomOut",
        value: function zoomOut() {
            this.scale -= 0.1;
            this.shape.transform("s" + this.scale + " 0 0");
        }
    }]);

    return DiagramShape;
}();

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndEvent; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * EndEvent
 */
var EndEvent = function () {
    function EndEvent(options, shape) {
        _classCallCheck(this, EndEvent);

        this.type = options.type;
        this.name = options.name || "";
        options.attr = {
            fill: "#EEC0C0",
            stroke: "#C62D2D",
            strokeWidth: 3
        };
        options.marker = "EMPTY";
        this.options = options;
        this.shape = shape;
        this.shape.config(options);
        this.inputConnectors = new Map();
        this.outputConnectors = new Map();
    }

    _createClass(EndEvent, [{
        key: "render",
        value: function render() {
            this.shape.render();
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.shape;
        }
    }, {
        key: "registerInputConn",
        value: function registerInputConn(id, conn) {
            this.inputConnectors.set(id, conn);
        }
    }, {
        key: "registerOutputConn",
        value: function registerOutputConn(id, conn) {
            this.outputConnectors.set(id, conn);
        }
    }]);

    return EndEvent;
}();

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventShape; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * StartEventShape
 */
var EventShape = function () {
    function EventShape(canvas, svgLoader) {
        _classCallCheck(this, EventShape);

        this.canvas = canvas;
        this.shape = this.canvas.group();
        this.svgLoader = svgLoader;
        this.x = 100;
        this.y = 100;
        this.scale = 40;
        this.attr = {
            fill: "#B4DCCB",
            stroke: "#018A4F",
            strokeWidth: 2
        };
        this.animateOptions = { r: this.scale };
        this.animationTime = 10;
        this.inputConnectors = new Map();
        this.outputConnectors = new Map();
    }

    _createClass(EventShape, [{
        key: "config",
        value: function config(options) {
            this.x = +options.x - 4;
            this.y = +options.y - 4;
            this.scale = options.width || this.scale;
            this.options = options;
            this.attr = options.attr || this.attr;
            this.attr.id = options.id;
            this.animateOptions.r = +options.width / 2 || this.scale;
            this.animateOptions = options.animateOptions || this.animateOptions;
            this.animationTime = options.animationTime || this.animationTime;
        }
    }, {
        key: "getBase",
        value: function getBase(type, marker) {
            var x = this.x + this.x * 0.043;
            var y = this.y + this.y * 0.043;
            var bases = {
                "bpmn:StartEvent": {
                    EMPTY: {
                        path: "m496 48c-176 0-345 113-412 276-70 161-34 362 89 487 119 128 314 175 477 115 169-58 294-224 301-403 12-176-92-351-250-428-62-31-132-47-201-47-1 0-3 0-4 0z m12 49c173 1 335 126 380 293 47 159-17 344-155 439-143 105-354 97-489-18-136-109-185-309-115-468 60-147 212-248 371-246 3 0 6 0 8 0z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                                // id: this.options.id
                            }
                        }
                    },
                    "bpmn:MessageEventDefinition": {
                        path: "m500 48c-178-2-349 112-416 276-70 161-34 362 89 487 119 128 314 175 477 115 169-58 294-224 301-403 12-176-92-351-250-428-62-31-132-47-201-47z m0 49c175-3 342 123 388 293 47 159-17 344-155 439-143 105-354 97-489-18-136-109-185-309-115-468 60-147 212-248 371-246z m-205 247c0 104 0 208 0 312 137 0 273 0 410 0 0-104 0-208 0-312-137 0-273 0-410 0z m91 49c76 0 152 0 228 0-40 24-81 79-121 85-36-29-71-57-107-85z m270 28c0 62 0 124 0 186-104 0-208 0-312 0 0-62 0-124 0-186 52 42 104 83 156 125 52-42 104-83 156-125z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    SIGNALCATCH: {
                        path: "m500 48c-178-2-349 112-416 276-70 161-34 362 89 487 119 128 314 175 477 115 169-58 294-224 301-403 12-176-92-351-250-428-62-31-132-47-201-47z m0 49c175-3 342 123 388 293 47 159-17 344-155 439-143 105-354 97-489-18-136-109-185-309-115-468 60-147 212-248 371-246z m0 191c-64 115-128 230-192 345 128 0 256 0 384 0-64-115-128-230-192-345z m0 51c50 90 100 180 151 270-101 0-201 0-302 0 51-90 101-180 151-270z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    CONDITIONAL: {
                        path: "m500 48c-249 0-452 203-452 452 0 249 203 452 452 452 249 0 452-203 452-452 0-249-203-452-452-452z m0 49c223 0 403 180 403 403 0 223-180 403-403 403-223 0-403-180-403-403 0-223 180-403 403-403z m-151 213l0 12 0 368 50 0 202 0 50 0 0-380-302 0z m24 24l254 0 0 332-26 0-202 0-26 0 0-332z m26 37l0 25 202 0 0-25-202 0z m0 74l0 24 202 0 0-24-202 0z m0 85l0 24 202 0 0-24-202 0z m0 77l0 24 202 0 0-24-202 0z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    TIMER: {
                        path: "m500 48c-249 0-452 203-452 452 0 249 203 452 452 452 249 0 452-203 452-452 0-249-203-452-452-452z m0 49c223 0 403 180 403 403 0 223-180 403-403 403-223 0-403-180-403-403 0-223 180-403 403-403z m-4 189c-84 0-164 55-194 133-33 76-15 170 43 229 56 60 149 82 226 54 81-28 141-108 143-194 5-83-46-166-121-201-29-14-61-21-93-21-1 0-3 0-4 0z m8 39c76 0 148 57 166 131 20 73-14 156-79 194-67 42-160 31-215-26-58-56-68-152-24-219 32-49 89-81 148-80 1 0 2 0 4 0z m51 49c-19 36-39 71-58 107-18 2-23 29-6 36 11 8 20-5 30-4l89 0 0-25-89 0c18-34 37-68 56-102-7-4-14-8-22-12z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    }
                },
                "bpmn:EndEvent": {
                    EMPTY: {
                        path: "m496 48c-203-1-394 153-437 351-41 174 33 368 181 470 143 103 348 111 497 15 150-91 238-275 210-449-26-181-170-339-350-376-33-7-67-11-101-11z m10 142c150-1 287 123 302 271 19 142-72 291-210 334-134 45-296-13-366-138-77-129-45-313 78-403 56-43 126-66 196-64z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                                // id: this.options.id
                            }
                        }
                    },
                    EMAIL: {
                        path: "m491 48c-219 0-420 183-440 400-22 186 82 380 253 459 158 77 361 53 492-67 134-115 192-312 133-480-55-172-220-303-401-311-13-1-25-1-37-1z m9 142c161-5 308 137 310 298 7 147-103 292-250 317-142 28-300-54-350-192-53-136 2-309 132-380 47-28 103-43 158-43z m-167 154c57 46 114 92 171 138 56-46 113-92 170-138-114 0-227 0-341 0z m-38 32c0 93 0 187 0 280 137 0 273 0 410 0 0-91 0-183 0-274-67 54-134 109-201 163-70-56-139-113-209-169z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    MESSAGETHROW: {
                        path: "m491 48c-219 0-420 183-440 400-22 186 82 380 253 459 158 77 361 53 492-67 134-115 192-312 133-480-55-172-220-303-401-311-13-1-25-1-37-1z m9 142c161-5 308 137 310 298 7 147-103 292-250 317-142 28-300-54-350-192-53-136 2-309 132-380 47-28 103-43 158-43z m-167 154c57 46 114 92 171 138 56-46 113-92 170-138-114 0-227 0-341 0z m-38 32c0 93 0 187 0 280 137 0 273 0 410 0 0-91 0-183 0-274-67 54-134 109-201 163-70-56-139-113-209-169z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    ERRORTHROW: {
                        path: "m491 48c-219 0-420 183-440 400-22 186 82 380 253 459 158 77 361 53 492-67 134-115 192-312 133-480-55-172-220-303-401-311-13-1-25-1-37-1z m9 142c161-5 308 137 310 298 7 147-103 292-250 317-142 28-300-54-350-192-53-136 2-309 132-380 47-28 103-43 158-43z m173 117c-34 70-68 139-102 209-43-56-86-111-128-166-39 114-77 228-116 342 43-55 87-111 130-167 45 51 89 103 134 154 27-124 55-248 82-372z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    "bpmn:TerminateEventDefinition": {
                        path: "m491 48c-219 0-420 183-440 400-22 186 82 380 253 459 158 77 361 53 492-67 134-115 192-312 133-480-55-172-220-303-401-311-13-1-25-1-37-1z m9 142c161-5 308 137 310 298 7 147-103 292-250 317-142 28-300-54-350-192-53-136 2-309 132-380 47-28 103-43 158-43z m0 81c-149-6-268 156-219 297 38 143 229 210 349 121 126-79 133-281 13-369-40-32-92-50-143-49z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    SIGNALTHROW: {
                        path: "m491 48c-219 0-420 183-440 400-22 186 82 380 253 459 158 77 361 53 492-67 134-115 192-312 133-480-55-172-220-303-401-311-13-1-25-1-37-1z m9 142c161-5 308 137 310 298 7 147-103 292-250 317-142 28-300-54-350-192-53-136 2-309 132-380 47-28 103-43 158-43z m0 98c-64 115-128 230-192 345 128 0 256 0 384 0-64-115-128-230-192-345z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    }
                },
                "bpmn:IntermediateThrowEvent": {
                    "bpmn:MessageEventDefinition": {
                        path: "m499 48c-220-4-425 177-448 396-24 185 78 380 247 461 160 80 368 56 501-66 134-118 190-318 128-486-57-167-217-293-393-303-12-1-23-2-35-2z m-5 49c202-7 391 161 407 362 19 178-92 361-262 420-166 61-368 2-468-145-103-144-99-356 18-490 74-90 188-146 305-147z m8 44c-186-6-358 158-361 344-9 169 116 334 283 367 155 33 328-46 397-190 71-140 39-327-83-430-64-57-150-91-236-91z m-2 48c164-4 314 144 311 308 3 152-119 297-272 312-143 19-295-73-336-213-43-134 14-295 138-364 48-28 103-43 159-43z m-167 155c57 46 114 92 171 138 56-46 113-92 170-138-114 0-227 0-341 0z m-38 32c0 93 0 187 0 280 137 0 273 0 410 0 0-91 0-183 0-274-67 54-134 109-201 163-70-56-139-113-209-169z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    EMAIL: {
                        path: "m499 48c-220-4-425 177-448 396-24 185 78 380 247 461 160 80 368 56 501-66 134-118 190-318 128-486-57-167-217-293-393-303-12-1-23-2-35-2z m-5 49c202-7 391 161 407 362 19 178-92 361-262 420-166 61-368 2-468-145-103-144-99-356 18-490 74-90 188-146 305-147z m8 44c-186-6-358 158-361 344-9 169 116 334 283 367 155 33 328-46 397-190 71-140 39-327-83-430-64-57-150-91-236-91z m-2 48c164-4 314 144 311 308 3 152-119 297-272 312-143 19-295-73-336-213-43-134 14-295 138-364 48-28 103-43 159-43z m-167 155c57 46 114 92 171 138 56-46 113-92 170-138-114 0-227 0-341 0z m-38 32c0 93 0 187 0 280 137 0 273 0 410 0 0-91 0-183 0-274-67 54-134 109-201 163-70-56-139-113-209-169z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    TIMER: {
                        path: "m499 48c-1 0-2 0-3 0-202-1-391 150-436 346-42 173 28 368 174 471 145 107 354 116 506 18 149-93 235-276 207-450-26-176-164-330-338-371-36-9-73-14-110-14z m-5 49c3 0 7 0 10 0 187-2 362 146 392 331 32 167-54 348-205 427-154 85-363 54-483-77-124-127-147-338-53-488 71-116 203-192 339-193z m8 44c-3 0-7 0-10 0-172 0-330 143-349 314-22 161 79 328 233 382 145 55 322 3 413-124 98-129 92-326-17-447-67-77-167-125-270-125z m-2 48c2 0 4 0 6 0 153 0 292 129 304 281 16 145-84 293-225 330-137 40-296-27-361-154-69-129-33-305 86-392 54-42 122-65 190-65z m-4 97c-84 0-164 55-194 133-33 76-15 170 43 229 56 60 149 82 226 54 81-28 141-108 143-194 5-83-46-166-121-201-29-14-61-21-93-21-1 0-3 0-4 0z m8 39c76 0 148 57 166 131 20 73-14 156-79 194-67 42-160 31-215-26-58-56-68-152-24-219 32-49 89-81 148-80 1 0 2 0 4 0z m51 49c-19 36-39 71-58 107-18 2-23 29-6 36 11 8 20-5 30-4l89 0 0-25-89 0c18-34 37-68 56-102-7-4-14-8-22-12z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    SIGNALCATCH: {
                        path: "m499 48c-220-4-425 177-448 396-24 185 78 380 247 461 160 80 368 56 501-66 134-118 190-318 128-486-57-167-217-293-393-303-12-1-23-2-35-2z m-5 49c202-7 391 161 407 362 19 178-92 361-262 420-166 61-368 2-468-145-103-144-99-356 18-490 74-90 188-146 305-147z m8 44c-186-6-358 158-361 344-9 169 116 334 283 367 155 33 328-46 397-190 71-140 39-327-83-430-64-57-150-91-236-91z m-2 48c164-4 314 144 311 308 3 152-119 297-272 312-143 19-295-73-336-213-43-134 14-295 138-364 48-28 103-43 159-43z m0 99c-64 115-128 230-192 345 128 0 256 0 384 0-64-115-128-230-192-345z m0 51c50 90 100 180 151 270-101 0-201 0-302 0 51-90 101-180 151-270z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    MESSAGECATCH: {
                        path: "m499 48c-220-4-425 177-448 396-24 185 78 380 247 461 160 80 368 56 501-66 134-118 190-318 128-486-57-167-217-293-393-303-12-1-23-2-35-2z m-5 49c202-7 391 161 407 362 19 178-92 361-262 420-166 61-368 2-468-145-103-144-99-356 18-490 74-90 188-146 305-147z m8 44c-186-6-358 158-361 344-9 169 116 334 283 367 155 33 328-46 397-190 71-140 39-327-83-430-64-57-150-91-236-91z m-2 48c164-4 314 144 311 308 3 152-119 297-272 312-143 19-295-73-336-213-43-134 14-295 138-364 48-28 103-43 159-43z m-205 155c0 104 0 208 0 312 137 0 273 0 410 0 0-104 0-208 0-312-137 0-273 0-410 0z m91 49c76 0 152 0 228 0-40 24-81 79-121 85-36-29-71-57-107-85z m270 28c0 62 0 124 0 186-104 0-208 0-312 0 0-62 0-124 0-186 52 42 104 83 156 125 52-42 104-83 156-125z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    CONDITIONAL: {
                        path: "m499 48c-1 0-2 0-3 0-202-1-391 150-436 346-42 173 28 368 174 471 145 107 354 116 506 18 149-93 235-276 207-450-26-176-164-330-338-371-36-9-73-14-110-14z m-5 49c3 0 7 0 10 0 187-2 362 146 392 331 32 167-54 348-205 427-154 85-363 54-483-77-124-127-147-338-53-488 71-116 203-192 339-193z m8 44c-3 0-7 0-10 0-172 0-330 143-349 314-22 161 79 328 233 382 145 55 322 3 413-124 98-129 92-326-17-447-67-77-167-125-270-125z m-2 48c2 0 4 0 6 0 153 0 292 129 304 281 16 145-84 293-225 330-137 40-296-27-361-154-69-129-33-305 86-392 54-42 122-65 190-65z m-151 121l0 12 0 368 50 0 202 0 50 0 0-380-302 0z m24 24l254 0 0 332-26 0-202 0-26 0 0-332z m26 37l0 25 202 0 0-25-202 0z m0 74l0 24 202 0 0-24-202 0z m0 85l0 24 202 0 0-24-202 0z m0 77l0 24 202 0 0-24-202 0z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    SIGNALTHROW: {
                        path: "m499 48c-220-4-425 177-448 396-24 185 78 380 247 461 160 80 368 56 501-66 134-118 190-318 128-486-57-167-217-293-393-303-12-1-23-2-35-2z m-5 49c202-7 391 161 407 362 19 178-92 361-262 420-166 61-368 2-468-145-103-144-99-356 18-490 74-90 188-146 305-147z m8 44c-186-6-358 158-361 344-9 169 116 334 283 367 155 33 328-46 397-190 71-140 39-327-83-430-64-57-150-91-236-91z m-2 48c164-4 314 144 311 308 3 152-119 297-272 312-143 19-295-73-336-213-43-134 14-295 138-364 48-28 103-43 159-43z m0 99c-64 115-128 230-192 345 128 0 256 0 384 0-64-115-128-230-192-345z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    }
                },
                "bpmn:IntermediateCatchEvent": {
                    EMPTY: {
                        path: "m499 48c-220-4-425 177-448 396-24 185 78 380 247 461 160 80 368 56 501-66 134-118 190-318 128-486-57-167-217-293-393-303-12-1-23-2-35-2z m-5 49c202-7 391 161 407 362 19 178-92 361-262 420-166 61-368 2-468-145-103-144-99-356 18-490 74-90 188-146 305-147z m8 44c-186-6-358 158-361 344-9 169 116 334 283 367 155 33 328-46 397-190 71-140 39-327-83-430-64-57-150-91-236-91z m-2 48c164-4 314 144 311 308 3 152-119 297-272 312-143 19-295-73-336-213-43-134 14-295 138-364 48-28 103-43 159-43z m-167 155c57 46 114 92 171 138 56-46 113-92 170-138-114 0-227 0-341 0z m-38 32c0 93 0 187 0 280 137 0 273 0 410 0 0-91 0-183 0-274-67 54-134 109-201 163-70-56-139-113-209-169z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    EMAIL: {
                        path: "m499 48c-220-4-425 177-448 396-24 185 78 380 247 461 160 80 368 56 501-66 134-118 190-318 128-486-57-167-217-293-393-303-12-1-23-2-35-2z m-5 49c202-7 391 161 407 362 19 178-92 361-262 420-166 61-368 2-468-145-103-144-99-356 18-490 74-90 188-146 305-147z m8 44c-186-6-358 158-361 344-9 169 116 334 283 367 155 33 328-46 397-190 71-140 39-327-83-430-64-57-150-91-236-91z m-2 48c164-4 314 144 311 308 3 152-119 297-272 312-143 19-295-73-336-213-43-134 14-295 138-364 48-28 103-43 159-43z m-167 155c57 46 114 92 171 138 56-46 113-92 170-138-114 0-227 0-341 0z m-38 32c0 93 0 187 0 280 137 0 273 0 410 0 0-91 0-183 0-274-67 54-134 109-201 163-70-56-139-113-209-169z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    "bpmn:TimerEventDefinition": {
                        path: "m499 48c-1 0-2 0-3 0-202-1-391 150-436 346-42 173 28 368 174 471 145 107 354 116 506 18 149-93 235-276 207-450-26-176-164-330-338-371-36-9-73-14-110-14z m-5 49c3 0 7 0 10 0 187-2 362 146 392 331 32 167-54 348-205 427-154 85-363 54-483-77-124-127-147-338-53-488 71-116 203-192 339-193z m8 44c-3 0-7 0-10 0-172 0-330 143-349 314-22 161 79 328 233 382 145 55 322 3 413-124 98-129 92-326-17-447-67-77-167-125-270-125z m-2 48c2 0 4 0 6 0 153 0 292 129 304 281 16 145-84 293-225 330-137 40-296-27-361-154-69-129-33-305 86-392 54-42 122-65 190-65z m-4 97c-84 0-164 55-194 133-33 76-15 170 43 229 56 60 149 82 226 54 81-28 141-108 143-194 5-83-46-166-121-201-29-14-61-21-93-21-1 0-3 0-4 0z m8 39c76 0 148 57 166 131 20 73-14 156-79 194-67 42-160 31-215-26-58-56-68-152-24-219 32-49 89-81 148-80 1 0 2 0 4 0z m51 49c-19 36-39 71-58 107-18 2-23 29-6 36 11 8 20-5 30-4l89 0 0-25-89 0c18-34 37-68 56-102-7-4-14-8-22-12z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    SIGNALCATCH: {
                        path: "m499 48c-220-4-425 177-448 396-24 185 78 380 247 461 160 80 368 56 501-66 134-118 190-318 128-486-57-167-217-293-393-303-12-1-23-2-35-2z m-5 49c202-7 391 161 407 362 19 178-92 361-262 420-166 61-368 2-468-145-103-144-99-356 18-490 74-90 188-146 305-147z m8 44c-186-6-358 158-361 344-9 169 116 334 283 367 155 33 328-46 397-190 71-140 39-327-83-430-64-57-150-91-236-91z m-2 48c164-4 314 144 311 308 3 152-119 297-272 312-143 19-295-73-336-213-43-134 14-295 138-364 48-28 103-43 159-43z m0 99c-64 115-128 230-192 345 128 0 256 0 384 0-64-115-128-230-192-345z m0 51c50 90 100 180 151 270-101 0-201 0-302 0 51-90 101-180 151-270z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    "bpmn:MessageEventDefinition": {
                        path: "m499 48c-220-4-425 177-448 396-24 185 78 380 247 461 160 80 368 56 501-66 134-118 190-318 128-486-57-167-217-293-393-303-12-1-23-2-35-2z m-5 49c202-7 391 161 407 362 19 178-92 361-262 420-166 61-368 2-468-145-103-144-99-356 18-490 74-90 188-146 305-147z m8 44c-186-6-358 158-361 344-9 169 116 334 283 367 155 33 328-46 397-190 71-140 39-327-83-430-64-57-150-91-236-91z m-2 48c164-4 314 144 311 308 3 152-119 297-272 312-143 19-295-73-336-213-43-134 14-295 138-364 48-28 103-43 159-43z m-205 155c0 104 0 208 0 312 137 0 273 0 410 0 0-104 0-208 0-312-137 0-273 0-410 0z m91 49c76 0 152 0 228 0-40 24-81 79-121 85-36-29-71-57-107-85z m270 28c0 62 0 124 0 186-104 0-208 0-312 0 0-62 0-124 0-186 52 42 104 83 156 125 52-42 104-83 156-125z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    CONDITIONAL: {
                        path: "m499 48c-1 0-2 0-3 0-202-1-391 150-436 346-42 173 28 368 174 471 145 107 354 116 506 18 149-93 235-276 207-450-26-176-164-330-338-371-36-9-73-14-110-14z m-5 49c3 0 7 0 10 0 187-2 362 146 392 331 32 167-54 348-205 427-154 85-363 54-483-77-124-127-147-338-53-488 71-116 203-192 339-193z m8 44c-3 0-7 0-10 0-172 0-330 143-349 314-22 161 79 328 233 382 145 55 322 3 413-124 98-129 92-326-17-447-67-77-167-125-270-125z m-2 48c2 0 4 0 6 0 153 0 292 129 304 281 16 145-84 293-225 330-137 40-296-27-361-154-69-129-33-305 86-392 54-42 122-65 190-65z m-151 121l0 12 0 368 50 0 202 0 50 0 0-380-302 0z m24 24l254 0 0 332-26 0-202 0-26 0 0-332z m26 37l0 25 202 0 0-25-202 0z m0 74l0 24 202 0 0-24-202 0z m0 85l0 24 202 0 0-24-202 0z m0 77l0 24 202 0 0-24-202 0z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    SIGNALTHROW: {
                        path: "m499 48c-220-4-425 177-448 396-24 185 78 380 247 461 160 80 368 56 501-66 134-118 190-318 128-486-57-167-217-293-393-303-12-1-23-2-35-2z m-5 49c202-7 391 161 407 362 19 178-92 361-262 420-166 61-368 2-468-145-103-144-99-356 18-490 74-90 188-146 305-147z m8 44c-186-6-358 158-361 344-9 169 116 334 283 367 155 33 328-46 397-190 71-140 39-327-83-430-64-57-150-91-236-91z m-2 48c164-4 314 144 311 308 3 152-119 297-272 312-143 19-295-73-336-213-43-134 14-295 138-364 48-28 103-43 159-43z m0 99c-64 115-128 230-192 345 128 0 256 0 384 0-64-115-128-230-192-345z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    }
                },
                "bpmn:BoundaryEvent": {
                    "bpmn:MessageEventDefinition": {
                        path: "m499 48c-220-4-425 177-448 396-24 185 78 380 247 461 160 80 368 56 501-66 134-118 190-318 128-486-57-167-217-293-393-303-12-1-23-2-35-2z m-5 49c202-7 391 161 407 362 19 178-92 361-262 420-166 61-368 2-468-145-103-144-99-356 18-490 74-90 188-146 305-147z m8 44c-186-6-358 158-361 344-9 169 116 334 283 367 155 33 328-46 397-190 71-140 39-327-83-430-64-57-150-91-236-91z m-2 48c164-4 314 144 311 308 3 152-119 297-272 312-143 19-295-73-336-213-43-134 14-295 138-364 48-28 103-43 159-43z m-167 155c57 46 114 92 171 138 56-46 113-92 170-138-114 0-227 0-341 0z m-38 32c0 93 0 187 0 280 137 0 273 0 410 0 0-91 0-183 0-274-67 54-134 109-201 163-70-56-139-113-209-169z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    EMAIL: {
                        path: "m499 48c-220-4-425 177-448 396-24 185 78 380 247 461 160 80 368 56 501-66 134-118 190-318 128-486-57-167-217-293-393-303-12-1-23-2-35-2z m-5 49c202-7 391 161 407 362 19 178-92 361-262 420-166 61-368 2-468-145-103-144-99-356 18-490 74-90 188-146 305-147z m8 44c-186-6-358 158-361 344-9 169 116 334 283 367 155 33 328-46 397-190 71-140 39-327-83-430-64-57-150-91-236-91z m-2 48c164-4 314 144 311 308 3 152-119 297-272 312-143 19-295-73-336-213-43-134 14-295 138-364 48-28 103-43 159-43z m-167 155c57 46 114 92 171 138 56-46 113-92 170-138-114 0-227 0-341 0z m-38 32c0 93 0 187 0 280 137 0 273 0 410 0 0-91 0-183 0-274-67 54-134 109-201 163-70-56-139-113-209-169z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    "bpmn:TimerEventDefinition": {
                        path: "m499 48c-1 0-2 0-3 0-202-1-391 150-436 346-42 173 28 368 174 471 145 107 354 116 506 18 149-93 235-276 207-450-26-176-164-330-338-371-36-9-73-14-110-14z m-5 49c3 0 7 0 10 0 187-2 362 146 392 331 32 167-54 348-205 427-154 85-363 54-483-77-124-127-147-338-53-488 71-116 203-192 339-193z m8 44c-3 0-7 0-10 0-172 0-330 143-349 314-22 161 79 328 233 382 145 55 322 3 413-124 98-129 92-326-17-447-67-77-167-125-270-125z m-2 48c2 0 4 0 6 0 153 0 292 129 304 281 16 145-84 293-225 330-137 40-296-27-361-154-69-129-33-305 86-392 54-42 122-65 190-65z m-4 97c-84 0-164 55-194 133-33 76-15 170 43 229 56 60 149 82 226 54 81-28 141-108 143-194 5-83-46-166-121-201-29-14-61-21-93-21-1 0-3 0-4 0z m8 39c76 0 148 57 166 131 20 73-14 156-79 194-67 42-160 31-215-26-58-56-68-152-24-219 32-49 89-81 148-80 1 0 2 0 4 0z m51 49c-19 36-39 71-58 107-18 2-23 29-6 36 11 8 20-5 30-4l89 0 0-25-89 0c18-34 37-68 56-102-7-4-14-8-22-12z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    SIGNALCATCH: {
                        path: "m499 48c-220-4-425 177-448 396-24 185 78 380 247 461 160 80 368 56 501-66 134-118 190-318 128-486-57-167-217-293-393-303-12-1-23-2-35-2z m-5 49c202-7 391 161 407 362 19 178-92 361-262 420-166 61-368 2-468-145-103-144-99-356 18-490 74-90 188-146 305-147z m8 44c-186-6-358 158-361 344-9 169 116 334 283 367 155 33 328-46 397-190 71-140 39-327-83-430-64-57-150-91-236-91z m-2 48c164-4 314 144 311 308 3 152-119 297-272 312-143 19-295-73-336-213-43-134 14-295 138-364 48-28 103-43 159-43z m0 99c-64 115-128 230-192 345 128 0 256 0 384 0-64-115-128-230-192-345z m0 51c50 90 100 180 151 270-101 0-201 0-302 0 51-90 101-180 151-270z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    MESSAGECATCH: {
                        path: "m499 48c-220-4-425 177-448 396-24 185 78 380 247 461 160 80 368 56 501-66 134-118 190-318 128-486-57-167-217-293-393-303-12-1-23-2-35-2z m-5 49c202-7 391 161 407 362 19 178-92 361-262 420-166 61-368 2-468-145-103-144-99-356 18-490 74-90 188-146 305-147z m8 44c-186-6-358 158-361 344-9 169 116 334 283 367 155 33 328-46 397-190 71-140 39-327-83-430-64-57-150-91-236-91z m-2 48c164-4 314 144 311 308 3 152-119 297-272 312-143 19-295-73-336-213-43-134 14-295 138-364 48-28 103-43 159-43z m-205 155c0 104 0 208 0 312 137 0 273 0 410 0 0-104 0-208 0-312-137 0-273 0-410 0z m91 49c76 0 152 0 228 0-40 24-81 79-121 85-36-29-71-57-107-85z m270 28c0 62 0 124 0 186-104 0-208 0-312 0 0-62 0-124 0-186 52 42 104 83 156 125 52-42 104-83 156-125z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    CONDITIONAL: {
                        path: "m499 48c-1 0-2 0-3 0-202-1-391 150-436 346-42 173 28 368 174 471 145 107 354 116 506 18 149-93 235-276 207-450-26-176-164-330-338-371-36-9-73-14-110-14z m-5 49c3 0 7 0 10 0 187-2 362 146 392 331 32 167-54 348-205 427-154 85-363 54-483-77-124-127-147-338-53-488 71-116 203-192 339-193z m8 44c-3 0-7 0-10 0-172 0-330 143-349 314-22 161 79 328 233 382 145 55 322 3 413-124 98-129 92-326-17-447-67-77-167-125-270-125z m-2 48c2 0 4 0 6 0 153 0 292 129 304 281 16 145-84 293-225 330-137 40-296-27-361-154-69-129-33-305 86-392 54-42 122-65 190-65z m-151 121l0 12 0 368 50 0 202 0 50 0 0-380-302 0z m24 24l254 0 0 332-26 0-202 0-26 0 0-332z m26 37l0 25 202 0 0-25-202 0z m0 74l0 24 202 0 0-24-202 0z m0 85l0 24 202 0 0-24-202 0z m0 77l0 24 202 0 0-24-202 0z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    SIGNALTHROW: {
                        path: "m499 48c-220-4-425 177-448 396-24 185 78 380 247 461 160 80 368 56 501-66 134-118 190-318 128-486-57-167-217-293-393-303-12-1-23-2-35-2z m-5 49c202-7 391 161 407 362 19 178-92 361-262 420-166 61-368 2-468-145-103-144-99-356 18-490 74-90 188-146 305-147z m8 44c-186-6-358 158-361 344-9 169 116 334 283 367 155 33 328-46 397-190 71-140 39-327-83-430-64-57-150-91-236-91z m-2 48c164-4 314 144 311 308 3 152-119 297-272 312-143 19-295-73-336-213-43-134 14-295 138-364 48-28 103-43 159-43z m0 99c-64 115-128 230-192 345 128 0 256 0 384 0-64-115-128-230-192-345z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.04",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    }
                }
            };
            var rec = this.canvas.rect(this.x, this.y, this.scale, this.scale).attr({ fill: "#fff" });
            var border = this.svgLoader.loadElement(bases[type][marker].path, bases[type][marker].options);

            var group = this.canvas.group(rec, border);
            group.attr({
                id: this.options.id
            });
            this.shape.add(group);

            // this.shape.add(
            //     this.canvas.rect(this.x, this.y, this.scale, this.scale).attr({'fill': '#FFF', id: this.options.id})
            // );
            // this.shape.add(
            //     this.svgLoader.loadElement(
            //         bases[type][marker].path,
            //         bases[type][marker].options
            //     )
            // );
        }
    }, {
        key: "render",
        value: function render() {
            this.getBase(this.options.type, this.options.eventDefinitions ? this.options.eventDefinitions[0].$type : this.options.marker);
            var textDecorator = this.getDecorator("TEXT", {
                text: this.options.name,
                x: this.x,
                y: this.y
            });
            this.shape.add(textDecorator);

            this.shape.drag();
        }
    }, {
        key: "getDecorator",
        value: function getDecorator(type, options) {
            var decorator = void 0;
            switch (type) {
                case "TEXT":
                    decorator = this.canvas.multitext(options.x, options.y, options.text, 70, {});
                    var tx = +(this.options.width - decorator.getBBox().width) / 2;
                    var ty = +this.options.width;
                    decorator.transform("t " + tx + ", " + ty);
                    break;
                default:
                    decorator = this.canvas.group();
                    break;
            }
            return decorator;
        }
    }, {
        key: "getNativeShape",
        value: function getNativeShape() {
            return this.shape;
        }
    }, {
        key: "registerInputConn",
        value: function registerInputConn(id, conn) {
            this.inputConnectors.set(id, conn);
            this.setDirections(conn);
        }
    }, {
        key: "setDirections",
        value: function setDirections(conn) {
            conn.getShape().inputDirection = "LEFT";
            conn.getShape().outputDirection = "RIGHT";
        }
    }, {
        key: "registerOutputConn",
        value: function registerOutputConn(id, conn) {
            this.outputConnectors.set(id, conn);
            this.setDirections(conn);
        }
        /**
         * Refresh all shapes connectors
         * @param posx
         * @param posy
         */

    }, {
        key: "refreshAllConnections",
        value: function refreshAllConnections(nativeShape) {
            var conn = void 0,
                dX = void 0,
                dY = void 0;
            var shapeBox = nativeShape.getBBox();

            this.outputConnectors.forEach(function (value, key) {
                conn = value;

                if (conn.shape.outputDirection === "RIGHT") {
                    dX = shapeBox.width;
                    dY = shapeBox.height / 2;
                }

                var linesArray = conn.shape.router;
                var n = linesArray.length;

                conn.shape.options.method = "manhathan";
                conn.shape.config(conn.shape.options);

                conn.shape.redraw(shapeBox.x + dX, shapeBox.y + dY, linesArray[n - 1].x, linesArray[n - 1].y);
            });

            this.inputConnectors.forEach(function (value, key) {
                conn = value;
                if (conn.shape.inputDirection === "LEFT") {
                    dX = 0;
                    dY = shapeBox.height / 2;
                }

                var linesArray = conn.shape.router;
                var n = linesArray.length;

                conn.shape.options.method = "manhathan";
                conn.shape.config(conn.shape.options);

                conn.shape.redraw(linesArray[0].x, linesArray[0].y, shapeBox.x + dX, shapeBox.y + dY);
            });
        }
    }]);

    return EventShape;
}();

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flow; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Flow
 */
var Flow = function () {
    function Flow(options, shape) {
        _classCallCheck(this, Flow);

        this.shape = shape;
        options.lineType = "solid";
        options.arrowType = "filled";
        this.shape.config(options);
    }

    _createClass(Flow, [{
        key: "render",
        value: function render() {
            this.shape.render();
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.shape;
        }
    }, {
        key: "redraw",
        value: function redraw(posx1, posy1, posx2, posy2) {
            this.shape.redraw(posx1, posy1, posx2, posy2);
        }
    }]);

    return Flow;
}();

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gateway; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Gateway
 */
var Gateway = function () {
    function Gateway(options, shape) {
        _classCallCheck(this, Gateway);

        this.type = options.type;
        this.name = options.name;
        this.options = options;
        options.attr = {
            fill: "#B4DCCB",
            stroke: "#018A4F",
            strokeWidth: 2
        };
        this.shape = shape;
        this.shape.config(options);
    }

    _createClass(Gateway, [{
        key: "render",
        value: function render() {
            this.shape.render();
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.shape;
        }
    }]);

    return Gateway;
}();

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GatewayShape; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Gateway
 */
var GatewayShape = function () {
    function GatewayShape(canvas, svgLoader) {
        _classCallCheck(this, GatewayShape);

        this.canvas = canvas;
        this.scaleX = 40;
        this.scaleY = 40;
        this.svgLoader = svgLoader;
        this.attr = {
            fill: "#FFF",
            stroke: "#000",
            strokeWidth: 2
        };
        this.inputConnectors = new Map();
        this.outputConnectors = new Map();
    }

    _createClass(GatewayShape, [{
        key: "config",
        value: function config(options) {
            this.options = options;
            this.x = +options.x + 6;
            this.y = +options.y + 6;
            this.scaleX = options.width || this.scaleX;
            this.scaleY = options.height || this.scaleY;
            this.edgeLength = Math.sqrt(Math.pow(this.scaleX / 2, 2) + Math.pow(this.scaleY / 2, 2));
        }
    }, {
        key: "render",
        value: function render() {
            var mx = +this.x + this.edgeLength / 2,
                my = +this.y + this.edgeLength / 2;

            var typeDecorator = this.getDecorator(this.options.type, {
                x: mx,
                y: my
            });

            var textDecorator = this.getDecorator("TEXT", {
                gat_name: this.options.gat_name,
                x: this.x,
                y: this.y
            });

            var base = this.canvas.rect(this.x, this.y, this.edgeLength, this.edgeLength).attr(this.attr).transform("r45," + mx + "," + my);

            this.shape = this.canvas.group(base, textDecorator, typeDecorator);
            this.shape.drag();
        }
    }, {
        key: "getDecorator",
        value: function getDecorator(type, options) {
            var decorator = void 0;
            switch (type) {
                case "bpmn:InclusiveGateway":
                    decorator = this.canvas.circle(+options.x, +options.y, 8).attr(this.attr);
                    break;
                case "bpmn:EventBasedGateway":
                    decorator = this.canvas.group(this.canvas.circle(+options.x, +options.y, 13).attr(this.attr), this.canvas.circle(+options.x, +options.y, 10).attr(this.attr), this.canvas.path("m " + (options.x - 6) + "," + (options.y - 3) + " 6.1854545454545455,-4.123636363636363 6.1854545454545455,4.123636363636363 -2.0618181818181816,8.247272727272726 -8.247272727272726,0 z")).attr(this.attr);
                    break;
                case "bpmn:ExclusiveGateway":
                    decorator = this.canvas.group(this.canvas.polyline([+options.x - 8, +options.y - 8, +options.x + 8, +options.y + 8]), this.canvas.polyline([+options.x - 8, +options.y + 8, +options.x + 8, +options.y - 8])).attr(this.attr);
                    break;
                case "bpmn:ParallelGateway":
                    decorator = this.canvas.group(this.canvas.polyline([+options.x - 12, +options.y, +options.x + 12, +options.y]), this.canvas.polyline([+options.x, +options.y - 12, +options.x, +options.y + 12])).attr(this.attr);
                    break;
                case "TEXT":
                    decorator = this.canvas.text(options.x, options.y, options.gat_name);
                    var tx = (this.scaleX - decorator.getBBox().width) / 2 - 6;
                    var ty = +this.scaleY + 15;
                    decorator.transform("t " + tx + ", " + ty);
                    break;
                default:
                    decorator = this.canvas.group();
                    break;
            }
            return decorator;
        }
    }, {
        key: "getNativeShape",
        value: function getNativeShape() {
            return this.shape;
        }
    }, {
        key: "registerInputConn",
        value: function registerInputConn(id, conn) {
            this.inputConnectors.set(id, conn);
            this.setDirections(conn);
        }
    }, {
        key: "setDirections",
        value: function setDirections(conn) {
            conn.getShape().inputDirection = "LEFT";
            conn.getShape().outputDirection = "RIGHT";
        }
    }, {
        key: "registerOutputConn",
        value: function registerOutputConn(id, conn) {
            this.outputConnectors.set(id, conn);
            this.setDirections(conn);
        }
        /**
         * Refresh all shapes connectors
         * @param posx
         * @param posy
         */

    }, {
        key: "refreshAllConnections",
        value: function refreshAllConnections(nativeShape) {
            var conn = void 0,
                dX = void 0,
                dY = void 0;
            var shapeBox = nativeShape.getBBox();

            this.outputConnectors.forEach(function (value, key) {
                conn = value;

                if (conn.shape.outputDirection === "RIGHT") {
                    dX = shapeBox.width;
                    dY = shapeBox.height / 2;
                }

                var linesArray = conn.shape.router;
                var n = linesArray.length;

                conn.shape.options.method = "manhathan";
                conn.shape.config(conn.shape.options);

                conn.shape.redraw(shapeBox.x + dX, shapeBox.y + dY, linesArray[n - 1].x, linesArray[n - 1].y);
            });

            this.inputConnectors.forEach(function (value, key) {
                conn = value;
                if (conn.shape.inputDirection === "LEFT") {
                    dX = 0;
                    dY = shapeBox.height / 2;
                }

                var linesArray = conn.shape.router;
                var n = linesArray.length;

                conn.shape.options.method = "manhathan";
                conn.shape.config(conn.shape.options);

                conn.shape.redraw(linesArray[0].x, linesArray[0].y, shapeBox.x + dX, shapeBox.y + dY);
            });
        }
    }]);

    return GatewayShape;
}();

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Group; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * StartEvent
 */
var Group = function () {
    function Group(options, shape) {
        _classCallCheck(this, Group);

        this.type = options.evn_type;
        this.name = options.evn_name;
        this.options = options;
        this.shape = shape;
        this.shape.config(options);
    }

    _createClass(Group, [{
        key: "render",
        value: function render() {
            this.shape.render();
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.shape;
        }
    }]);

    return Group;
}();

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupShape; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Task Shape class
 */
var GroupShape = function () {
    function GroupShape(canvas, svgLoader) {
        _classCallCheck(this, GroupShape);

        this.canvas = canvas;
        this.svgLoader = svgLoader;
        this.attr = {
            fill: "none",
            stroke: "#000",
            strokeWidth: 2,
            strokeDasharray: "3px,7px",
            strokeLinecap: "square"
        };
        this.shape = this.canvas.group();
        this.shape.drag();
        this.inputConnectors = new Map();
        this.outputConnectors = new Map();
    }

    _createClass(GroupShape, [{
        key: "config",
        value: function config(options) {
            this.options = options;
            this.id = options.act_uid;
            this.x = +options.bou_x;
            this.y = +options.bou_y;
            this.scaleX = +options.bou_width;
            this.scaleY = +options.bou_height;
            this.rounded = +options.rounded || this.rounded;
            this.attr = options.attr || this.attr;
        }
    }, {
        key: "render",
        value: function render() {
            this.shape.add(this.canvas.rect(this.x, this.y, this.scaleX, this.scaleY, this.rounded).attr(this.attr));

            this.addDecorators();
        }
    }, {
        key: "addDecorators",
        value: function addDecorators() {
            this.addTextDecorator();
        }
    }, {
        key: "addTextDecorator",
        value: function addTextDecorator() {
            this.shape.add(this.canvas.multitext(this.x + this.scaleX / 2, this.y + 20, this.options.art_name, this.scaleY, { "font-size": "13px", "text-align": "center" }));
        }
    }, {
        key: "getNativeShape",
        value: function getNativeShape() {
            return this.shape;
        }
    }, {
        key: "setDirections",
        value: function setDirections(conn) {
            conn.getShape().inputDirection = "LEFT";
            conn.getShape().outputDirection = "RIGHT";
        }
    }, {
        key: "registerOutputConn",
        value: function registerOutputConn(id, conn) {
            this.outputConnectors.set(id, conn);
            this.setDirections(conn);
        }
        /**
         * Refresh all shapes connectors
         * @param posx
         * @param posy
         */

    }, {
        key: "refreshAllConnections",
        value: function refreshAllConnections(nativeShape) {
            var conn = void 0,
                dX = void 0,
                dY = void 0;
            var shapeBox = nativeShape.getBBox();

            this.outputConnectors.forEach(function (value, key) {
                conn = value;

                if (conn.shape.outputDirection === "RIGHT") {
                    dX = shapeBox.width;
                    dY = shapeBox.height / 2;
                }

                var linesArray = conn.shape.router;
                var n = linesArray.length;

                conn.shape.options.method = "manhathan";
                conn.shape.config(conn.shape.options);

                conn.shape.redraw(shapeBox.x + dX, shapeBox.y + dY, linesArray[n - 1].x, linesArray[n - 1].y);
            });

            this.inputConnectors.forEach(function (value, key) {
                conn = value;
                if (conn.shape.inputDirection === "LEFT") {
                    dX = 0;
                    dY = shapeBox.height / 2;
                }

                var linesArray = conn.shape.router;
                var n = linesArray.length;

                conn.shape.options.method = "manhathan";
                conn.shape.config(conn.shape.options);

                conn.shape.redraw(linesArray[0].x, linesArray[0].y, shapeBox.x + dX, shapeBox.y + dY);
            });
        }
    }]);

    return GroupShape;
}();

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__start_event__ = __webpack_require__(318);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__start_event__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__end_event__ = __webpack_require__(302);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__end_event__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intermediate_event__ = __webpack_require__(310);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__intermediate_event__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_shape__ = __webpack_require__(303);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__event_shape__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flow__ = __webpack_require__(304);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_4__flow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__association__ = __webpack_require__(292);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__association__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_association__ = __webpack_require__(295);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_6__data_association__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message__ = __webpack_require__(314);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_7__message__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__connector_point__ = __webpack_require__(205);
/* unused harmony reexport Point */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__connector_manhathan_route__ = __webpack_require__(204);
/* unused harmony reexport ManhathanRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__connector_connector_shape__ = __webpack_require__(203);
/* unused harmony reexport ConnectorShape */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gateway__ = __webpack_require__(305);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_11__gateway__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gateway_shape__ = __webpack_require__(306);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_12__gateway_shape__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sub_process__ = __webpack_require__(319);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_13__sub_process__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__task__ = __webpack_require__(320);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_14__task__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__task_shape__ = __webpack_require__(321);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_15__task_shape__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__text_annotation__ = __webpack_require__(322);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_16__text_annotation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__text_annotation_shape__ = __webpack_require__(323);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_17__text_annotation_shape__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__data_store__ = __webpack_require__(298);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_18__data_store__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__data_store_shape__ = __webpack_require__(299);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_19__data_store_shape__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__data_object__ = __webpack_require__(296);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_20__data_object__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__data_object_shape__ = __webpack_require__(297);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_21__data_object_shape__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pool__ = __webpack_require__(315);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_22__pool__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pool_shape__ = __webpack_require__(316);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_23__pool_shape__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__blackbox_pool__ = __webpack_require__(293);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_24__blackbox_pool__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__blackbox_pool_shape__ = __webpack_require__(294);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_25__blackbox_pool_shape__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__lane__ = __webpack_require__(311);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_26__lane__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__lane_shape__ = __webpack_require__(312);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_27__lane_shape__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__group__ = __webpack_require__(307);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_28__group__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__group_shape__ = __webpack_require__(308);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_29__group_shape__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__diagram__ = __webpack_require__(300);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_30__diagram__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__diagram_shape__ = __webpack_require__(301);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_31__diagram_shape__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__diagram_service__ = __webpack_require__(290);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_32__diagram_service__["a"]; });


































/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntermediateEvent; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * IntermediateEvent
 */
var IntermediateEvent = function () {
    function IntermediateEvent(options, shape) {
        _classCallCheck(this, IntermediateEvent);

        this.type = options.type;
        this.name = options.name;
        this.options = options;
        options.attr = {
            fill: "#B4DCCB",
            stroke: "#018A4F",
            strokeWidth: 2
        };
        options.marker = "MESSAGETHROW";
        this.shape = shape;
        this.shape.config(options);
    }

    _createClass(IntermediateEvent, [{
        key: "render",
        value: function render() {
            this.shape.render();
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.shape;
        }
    }]);

    return IntermediateEvent;
}();

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lane; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * StartEvent
 */
var Lane = function () {
    function Lane(options, shape) {
        _classCallCheck(this, Lane);

        this.type = "bpmn:Lane";
        this.name = options.name;
        this.options = options;
        this.shape = shape;
        this.shape.config(options);
    }

    _createClass(Lane, [{
        key: "render",
        value: function render() {
            this.shape.render();
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.shape;
        }
    }]);

    return Lane;
}();

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaneShape; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Lane Shape class
 */
var LaneShape = function () {
    function LaneShape(canvas, svgLoader) {
        _classCallCheck(this, LaneShape);

        this.canvas = canvas;
        this.svgLoader = svgLoader;
        this.attr = {
            fill: "#FFF",
            stroke: "#000",
            strokeWidth: 2
        };
        this.shape = this.canvas.group();
        this.shape.drag();
    }

    _createClass(LaneShape, [{
        key: "config",
        value: function config(options) {
            this.options = options;
            this.id = options.id;
            this.x = options.x + 13;
            this.y = options.y + 3;
            this.scaleX = options.width - 15;
            this.scaleY = options.height - 1;
            this.attr = options.attr || this.attr;
            this.isFirst = options.isFirst || false;
        }
    }, {
        key: "render",
        value: function render() {
            this.shape.add(this.canvas.rect(this.x, this.y, this.scaleX, this.scaleY).attr({ fill: "#fff" }));
            this.addDecorators();
        }
    }, {
        key: "addDecorators",
        value: function addDecorators() {
            this.addLineDecorator();
            this.addTextDecorator();
        }
    }, {
        key: "addLineDecorator",
        value: function addLineDecorator() {
            var strokeWidth = 2;
            if (this.isFirst) {
                strokeWidth = 0;
            }
            this.shape.add(this.canvas.polyline(this.x + " " + (this.y + this.scaleY - 2) + " " + (this.x + this.scaleX) + " " + (this.y + this.scaleY - 2)).attr({
                fill: "none",
                stroke: "#000",
                strokeWidth: strokeWidth
            }));
        }
    }, {
        key: "addTextDecorator",
        value: function addTextDecorator() {
            var text = this.canvas.text(this.x, this.y, this.options.name, { "font-size": "13px", "font-family": "Arial, Helvetica, sans-serif" });
            var textBox = text.getBBox();
            var tx = textBox.height + (42 - textBox.height) / 2;
            var ty = textBox.width + (this.scaleY - textBox.width) / 2;
            text.transform("r270 " + this.x + ", " + this.y + " t" + -ty + ", " + tx);
            this.shape.add(text);
        }
    }, {
        key: "getNativeShape",
        value: function getNativeShape() {
            return this.shape;
        }
    }]);

    return LaneShape;
}();

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineShape; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * LineShape
 */
var LineShape = function () {
    function LineShape(canvas) {
        _classCallCheck(this, LineShape);

        this.canvas = canvas;
        this.shape = false;
    }

    _createClass(LineShape, [{
        key: "config",
        value: function config(options) {
            this.options = Object.assign({}, options);
            this.options.attr = {
                fill: "none",
                stroke: "#000",
                strokeWidth: 1
            };

            if (this.options.markerEnd) {
                this.options.attr.markerEnd = this.options.markerEnd;
            }

            if (this.options.markerStart) {
                this.options.attr.markerStart = this.options.markerStart;
            }

            this.processLineType();
            return this;
        }
    }, {
        key: "processLineType",
        value: function processLineType() {
            if (this.options.lineType === "dotted") {
                this.options.attr.strokeDasharray = "1px,2px";
                this.options.attr.strokeLinecap = "round";
            }
            if (this.options.lineType === "dashed") {
                this.options.attr.strokeDasharray = "3px,5px";
                this.options.attr.strokeLinecap = "round";
            }
        }
    }, {
        key: "addMarkerStart",
        value: function addMarkerStart(marker) {
            this.options.attr.markerStart = marker;
            return this;
        }
    }, {
        key: "addMarkerEnd",
        value: function addMarkerEnd(marker) {
            this.options.attr.markerEnd = marker;
            return this;
        }
    }, {
        key: "createShape",
        value: function createShape() {
            if (!this.shape) {
                this.shape = this.canvas.polyline(this.options.linePoints).attr(this.options.attr);
            }
            return this.shape;
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.createShape();
        }
    }, {
        key: "redraw",
        value: function redraw() {
            this.shape.remove();
            this.shape = this.canvas.polyline(this.options.linePoints).attr(this.options.attr);
            return this.shape;
        }
    }]);

    return LineShape;
}();

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Message
 */
var Message = function () {
    function Message(options, shape) {
        _classCallCheck(this, Message);

        this.shape = shape;
        options.lineType = "dashed";
        options.arrowType = "filled-white";
        options.originConnector = "round";
        this.shape.config(options);
    }

    _createClass(Message, [{
        key: "render",
        value: function render() {
            this.shape.render();
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.shape;
        }
    }]);

    return Message;
}();

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pool; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * StartEvent
 */
var Pool = function () {
    function Pool(options, shape) {
        _classCallCheck(this, Pool);

        this.type = "POOL";
        this.name = options.name;
        this.options = options;
        this.shape = shape;
        this.shape.config(options);
    }

    _createClass(Pool, [{
        key: "render",
        value: function render() {
            this.shape.render();
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.shape;
        }
    }]);

    return Pool;
}();

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoolShape; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Task Shape class
 */
var PoolShape = function () {
    function PoolShape(canvas, svgLoader) {
        _classCallCheck(this, PoolShape);

        this.canvas = canvas;
        this.svgLoader = svgLoader;
        this.rounded = 5;
        this.attr = {
            fill: "#FFF",
            stroke: "#000",
            strokeWidth: 2
        };
        this.shape = this.canvas.group();
    }

    _createClass(PoolShape, [{
        key: "config",
        value: function config(options) {
            this.options = options;
            this.id = options.act_uid;
            this.x = +options.x;
            this.y = +options.y;
            this.scaleX = +options.width;
            this.scaleY = +options.height;
            this.rounded = +options.rounded || this.rounded;
            this.attr = options.attr || this.attr;
        }
    }, {
        key: "render",
        value: function render() {
            this.shape.add(this.canvas.rect(this.x, this.y, this.scaleX, this.scaleY, this.rounded).attr(this.attr));

            this.addDecorators();
            this.shape.drag();
        }
    }, {
        key: "addDecorators",
        value: function addDecorators() {
            this.addLineDecorator();
            this.addTextDecorator();
        }
    }, {
        key: "addLineDecorator",
        value: function addLineDecorator() {
            this.shape.add(this.canvas.polyline(this.x + 42 + " " + this.y + " " + (this.x + 42) + " " + (this.y + this.scaleY)).attr({
                fill: "none",
                stroke: "#000",
                strokeWidth: 2
            }));
        }
    }, {
        key: "addTextDecorator",
        value: function addTextDecorator() {
            var text = this.canvas.text(this.x, this.y, this.options.name, { "font-size": "13px", "font-family": "Arial, Helvetica, sans-serif" });
            var textBox = text.getBBox();
            var tx = textBox.height + (42 - textBox.height) / 2;
            var ty = textBox.width + (this.scaleY - textBox.width) / 2;
            text.transform("r270 " + this.x + ", " + this.y + " t" + -ty + ", " + tx);
            this.shape.add(text);
        }
    }, {
        key: "getNativeShape",
        value: function getNativeShape() {
            return this.shape;
        }
    }]);

    return PoolShape;
}();

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundConnectorMarker; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ArrowMarker
 */
var RoundConnectorMarker = function () {
    function RoundConnectorMarker(canvas) {
        _classCallCheck(this, RoundConnectorMarker);

        this.canvas = canvas;
        this.shape = false;
        this.marker = false;
    }

    _createClass(RoundConnectorMarker, [{
        key: "config",
        value: function config(options) {
            this.options = Object.assign({}, options);
            return this;
        }
    }, {
        key: "getMarker",
        value: function getMarker() {
            return this.canvas.circle(5, 5, 5).attr({
                fill: "#FFF",
                stroke: "#000",
                strokeWidth: 1
            }).marker(0, 0, 100, 100, 1, 5);
        }
    }]);

    return RoundConnectorMarker;
}();

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartEvent; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * StartEvent
 */
var StartEvent = function () {
    function StartEvent(options, shape) {
        _classCallCheck(this, StartEvent);

        this.type = options.type;
        this.name = options.name || "";
        this.options = options;
        options.attr = {
            fill: "#B4DCCB",
            stroke: "#018A4F",
            strokeWidth: 2
        };
        options.marker = "EMPTY";
        this.shape = shape;
        this.shape.config(options);
    }

    _createClass(StartEvent, [{
        key: "render",
        value: function render() {
            this.shape.render();
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.shape;
        }
    }]);

    return StartEvent;
}();

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubProcess; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * SubProcess
 */
var SubProcess = function () {
    function SubProcess(options, shape) {
        _classCallCheck(this, SubProcess);

        this.options = options;
        this.options.attr = {
            fill: "#FFF",
            stroke: "#000",
            strokeWidth: 3
        };
        this.options.act_loop_type = "COLLAPSED";
        this.options.act_task_type = "EMPTY";
        this.shape = shape;
        this.shape.config(options);
    }

    _createClass(SubProcess, [{
        key: "render",
        value: function render() {
            this.shape.render();
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.shape;
        }
    }]);

    return SubProcess;
}();

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseName;
/**
 * Parses a namespaced attribute name of the form (ns:)localName to an object,
 * given a default prefix to assume in case no explicit namespace is given.
 *
 * @param {String} name
 * @param {String} [defaultPrefix] the default prefix to take, if none is present.
 *
 * @return {Object} the parsed name
 */
function parseName(name, defaultPrefix) {
  var parts = name.split(/:/),
      localName, prefix;

  // no prefix (i.e. only local name)
  if (parts.length === 1) {
    localName = name;
    prefix = defaultPrefix;
  } else
  // prefix + local name
  if (parts.length === 2) {
    localName = parts[1];
    prefix = parts[0];
  } else {
    throw new Error('expected <prefix:localName> or <localName>, got ' + name);
  }

  name = (prefix ? prefix + ':' : '') + localName;

  return {
    name: name,
    prefix: prefix,
    localName: localName
  };
}

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Activity class
 */
var Task = function () {
    function Task(options, shape) {
        _classCallCheck(this, Task);

        this.options = options;
        this.shape = shape;
        this.shape.config(options);
    }

    _createClass(Task, [{
        key: "render",
        value: function render() {
            this.shape.render();
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.shape;
        }
    }]);

    return Task;
}();

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskShape; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Task Shape class
 */
var TaskShape = function () {
    function TaskShape(canvas, svgLoader) {
        _classCallCheck(this, TaskShape);

        this.canvas = canvas;
        this.scaleX = 100;
        this.scaleY = 80;
        this.svgLoader = svgLoader;
        this.rounded = 10;
        this.attr = {
            fill: "#FFF",
            stroke: "#000",
            strokeWidth: 2
        };
        this.shape = this.canvas.group();
        this.inputConnectors = new Map();
        this.outputConnectors = new Map();
    }

    _createClass(TaskShape, [{
        key: "config",
        value: function config(options) {
            this.options = options;
            this.id = options.id;
            this.x = +options.x;
            this.y = +options.y;
            this.scaleX = +options.width || this.scaleX;
            this.scaleY = +options.height || this.scaleY;
            this.rounded = +options.rounded || this.rounded;
            this.attr = options.attr || this.attr;
            this.attr.id = options.id;
        }
    }, {
        key: "render",
        value: function render() {
            this.shape.add(this.canvas.rect(this.x, this.y, this.scaleX, this.scaleY, this.rounded).attr(this.attr));

            var text = this.canvas.multitext(this.x, this.y, this.options.name, this.scaleX, { "font-size": "13px", "font-family": "Arial, Helvetica, sans-serif" });
            var textBox = text.getBBox();
            text.attr({
                x: this.x + (this.scaleX - textBox.w) / 2,
                y: this.y + (this.scaleY - textBox.h) / 2 - 5
            });
            this.shape.add(text);
            this.addDecorators();
            this.shape.drag();
        }
    }, {
        key: "addDecorators",
        value: function addDecorators() {
            this.addTypeDecorator(this.options.$type || "EMPTY"); // (this.options.act_task_type);
            this.addMarkerDecorator(this.options.act_loop_type || "EMPTY"); // (this.options.act_loop_type);
        }
    }, {
        key: "addTypeDecorator",
        value: function addTypeDecorator(type) {
            var x = this.x + this.x * 0.037;
            var y = this.y + this.y * 0.037;
            if (type !== "bpmn:Task") {
                var types = {
                    "bpmn:UserTask": {
                        path: "m492 206l-5 1c-84 0-140 60-140 139 0 39 29 74 58 100-16 5-54 19-93 41-23 12-45 27-62 44-16 17-28 37-29 58l0 0 0 204 98 0c1 1 2 1 3 0l457 0 0-204c0-19-12-37-29-53-18-17-41-32-64-45-42-24-83-40-99-46 28-26 48-60 48-99 0-79-58-140-143-140z m-38 82c13 0 27 3 40 10 59 31 121 43 132 34 1 4 1 9 1 14 0 38-21 73-50 97l-6 5 7 2c6 2 35 13 69 29-2 70-70 127-154 127-84 0-151-55-153-125 35-17 67-28 74-30l7-2-6-5c-29-25-60-60-60-98 0-5 0-10 1-15 10-8 52-42 98-43z m198 194c10 5 20 10 30 16 23 13 46 28 62 43 17 16 27 33 27 48l0 196-90 0 0-144-8 0 0 144-349 0 0-144c0-6-8-6-8 0l0 144-87 0 0-196c1-18 11-36 27-52 16-16 38-31 60-43 6-4 12-7 19-10 3 72 73 127 158 127 86 0 156-57 159-129z",
                        options: {
                            x: x - 4,
                            y: y - 4,
                            scale: "s0.035",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 30
                            }
                        }
                    },
                    SENDTASK: {
                        path: "m112 206l388 214 388-214-776 0z m0 105l0 483 776 0 0-483-388 193-388-193z",
                        options: {
                            x: x,
                            y: y - 3,
                            scale: "s0.035",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 30
                            }
                        }
                    },
                    RECEIVETASK: {
                        path: "m115 206c0 0 0 0-1 0 0 0 0 0 0 0-1 1-2 2-2 3l0 582c0 1 1 2 3 2l771 0c1 0 2-1 2-2l0-582c0-1-1-2-2-3 0 0 0 0 0 0 0 0 0 0 0 0l-481 0z m9 5l753 0-377 228z m-7 2l382 231c1 0 2 0 2 0l382-231 0 575-766 0z",
                        options: {
                            x: x,
                            y: y - 3,
                            scale: "s0.035",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 30
                            }
                        }
                    },
                    "bpmn:ServiceTask": {
                        path: "m396 204l0 3 0 49c-11 3-21 6-32 10l0 0 0 0c-10 5-20 10-29 16l-38-37-53 53 38 37c-12 19-21 40-25 61l-53 0 0 76 53 0c2 10 6 21 10 31 4 11 10 20 16 29l-39 38 54 53 37-36 0 15 33-1c8 3 15 6 23 8 1 7 4 14 7 22l0 33 2 0c4 0 8 1 12 1l-36 35 54 53 38-38c19 12 40 20 62 25l0 54 2 0c24 0 71 0 71 0l0 0 2 0 0-2 0-52c11-3 22-6 32-10l0 0 0 0c10-5 20-10 29-16l39 38 53-54-38-37c12-19 20-40 25-62l52 0 0-75-53 0c-2-10-5-21-10-31l0 0c-4-11-10-20-16-29l37-37-54-53-36 36 0-16-3 0-29 0c-8-3-15-5-22-7-2-7-5-14-7-22l0-31-17 0c0 0 0 0 0 0l36-37-54-53-36 37c-19-12-40-21-61-25l0-52-76 0z m5 5l66 0 0 51 2 0c22 5 44 13 63 26l2 1 35-36 47 46-36 36 1 1-53 0 0 0 0 33c-31-42-87-60-137-39-59 24-86 91-61 149l0 0c8 21 22 37 39 49l-34 0 0 0 0 54-37 36-47-46 38-37-1-2c-6-9-12-19-16-30l0 0c-5-11-8-22-10-32l-1-2-52 0 0-66 52 0 0-2c5-22 13-44 26-63l1-1-37-37 47-46 36 36 2-1c9-6 19-12 30-16l0 0c11-5 22-8 33-10l2-1 0-51z m32 115c38 0 74 19 95 52l0 10c-11 2-22 6-32 10l0 0 0 0c-11 4-20 10-29 16l-38-37-53 53 37 37c-12 19-20 39-25 61l-9 0c-20-11-36-29-45-51l0 0c-23-55 3-119 58-142l0 0c14-6 28-8 41-9z m100 15l57 0 9 0 0 27 0 0-1 24 2 0c3 1 6 1 8 2l1 0c8 2 15 4 22 7l0 0c11 4 21 9 30 15l1 1c1 0 1 0 2 1l1 1 36-36 47 46-36 36 1 2c7 9 12 19 17 30l0 0c4 10 7 21 10 32l0 2 52 0 0 65-51 1-1 2c-4 22-13 43-26 63l-1 1 38 37-46 47-38-37-2 1c-9 6-19 12-30 16-11 5-22 8-33 10l-2 1 0 53c-4 0-43 0-65 0l0-53-2 0c-23-5-45-14-64-26l-1-1-38 37-47-46 36-35 3 0-1-2 0 0-1-1-1-1c-1-2-2-4-3-6-3-4-5-8-7-12-1-1-1-2-1-2 0-1-1-2-1-2 0-1-1-1-1-2 0-1-1-1-1-2 0-1 0-1-1-2 0-1 0-1-1-2l0 0 0 0c0-1 0-1 0-2l-1-1 0 0c-3-7-5-14-7-21l0-1 0 0c0 0 0 0 0 0-1-3-1-5-2-7l0-3 0 0 0 0-2 0-12 0-10 0-29 1 0-9 0-57 52 0 1-2c4-22 13-44 26-63l1-2-37-36 46-46 37 36 2-1c9-6 19-12 30-16l0 0c11-5 22-8 33-11l2 0 0-6 0-2 0-43z m70 41c1 2 2 4 2 6 0 0-1 0-2 0l0 0 0-6z m57 19l0 9c-5-3-11-6-16-9l16 0z m-93 50c-1 0-2 0-3 0l0 0c0 0 0 0 0 0l0 0 0 0c-1 0-1 0-1 0l0 0c-2 0-3 0-5 0l0 0c0 0 0 1 0 1l0 0c-12 0-24 3-36 8-39 16-64 52-69 91l0 0c0 0 0 0 0 0 0 1 0 1 0 1 0 0 0 0 0 0l0 0c0 0 0 0 0 0l0 0c0 1 0 2 0 3l0 0c0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0l0 0c-1 2-1 5-1 8l0 0c0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0l0 0c0 3 0 5 0 8l0 0c0 0 0 0 0 0 0 0 0 0 0 0l0 0c1 3 1 5 1 8l0 0c0 0 0 0 0 1l0 0c1 1 1 2 1 3l0 0c0 0 0 0 0 0l0 0c0 0 0 0 0 0 0 1 0 1 0 1l0 0c0 0 0 0 0 0l0 0c0 1 0 2 1 3l0 0c0 0 0 0 0 0 0 0 0 1 0 1l0 0c0 1 0 2 1 4l0 0c0 0 0 0 0 0 0 0 0 0 0 0l0 0c0 1 0 2 1 3l0 0 0 0c0 1 0 1 0 1l0 0c1 3 1 5 2 7 1 1 1 1 1 2l0 0c0 0 0 0 0 0l0 0c1 1 1 2 1 3l0 0c1 1 1 2 2 3 0 0 0 0 0 0 0 1 0 1 0 1 1 3 2 5 4 7 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 28 49 90 71 144 49 58-25 85-92 61-149-11-25-29-44-51-56l0 0c0 0 0 0 0 0l0 0 0 0c-1-1-2-1-3-1l0 0c0-1 0-1 0-1l0 0c-2 0-3-1-4-1l0 0c0 0 0 0 0 0l0 0c-1-1-2-1-3-2l0 0c0 0 0 0 0 0l0 0 0 0c-1 0-2-1-3-1l0 0c0 0-1 0-1 0l0 0c-1-1-2-1-3-1l0 0c0-1 0-1-1-1l0 0c-1 0-1 0-2 0l0 0c-1-1-1-1-1-1l0 0c-2 0-5-1-7-2l0 0c0 0 0 0 0 0l0 0 0 0c-1 0-2 0-3 0l0 0c0 0-1 0-1-1l0 0c-1 0-2 0-3 0l0 0c-1 0-1 0-1 0l0 0 0 0c-1 0-2-1-3-1l0 0c0 0 0 0-1 0l0 0c-1 0-2 0-3 0l0 0c0 0 0 0 0 0l0 0c-1 0-2 0-3-1l0 0c-1 0-1 0-1 0l0 0c-1 0-3 0-4 0 0 0 0 0 0 0l0 0 0 0c-1 0-2 0-3 0z m0 5l0 0c1 0 2 0 3 0l0 0c0 0 0 0 1 0l0 0c1 0 1 0 2 0l0 0c1 0 1 0 1 0l0 0c1 1 2 1 3 1l0 0c1 0 1 0 1 0l0 0c1 0 2 0 3 0l0 0c0 0 0 0 1 0l0 0c0 0 1 1 2 1l0 0c1 0 1 0 1 0l0 0c1 0 2 0 3 0l0 0c0 0 0 0 1 1l0 0c1 0 2 0 2 0l0 0c1 0 1 0 1 0l0 0c2 1 4 1 6 2l0 0c1 0 1 0 1 0l0 0c1 1 2 1 3 1l0 0c0 0 0 0 0 0l0 0c1 1 2 1 4 1l0 0c0 0 0 1 0 1l0 0 0 0c1 0 2 0 3 1l0 0c0 0 0 0 0 0l0 0c1 0 2 1 3 1l0 0c0 0 0 0 0 0l0 0c1 1 2 1 3 2l0 0c0 0 1 0 1 0l0 0c1 0 2 1 2 1l0 0c1 0 1 1 1 1l0 0c21 11 38 29 48 53 23 55-3 119-58 142l0 0c-52 22-111 1-138-47 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0l0 0c-1-2-2-5-3-7 0 0 0 0 0 0 0 0 0 0 0 0-1 0-1-1-1-1 0 0 0 0 0 0 0-1-1-2-1-3 0 0 0 0 0 0-1-1-1-2-1-3-1 0-1-1-1-1 0 0 0 0 0 0-1-3-2-5-2-7l0 0c0-1 0-1 0-1 0 0 0 0 0 0-1-1-1-2-1-3l0 0c0 0 0 0 0 0 0 0 0-1 0-1 0 0 0 0 0 0 0 0 0 0 0 0l0 0c-1-1-1-2-1-3l0 0c0 0 0-1 0-1-1-1-1-2-1-3l0 0c0 0 0 0 0 0 0 0 0 0 0-1 0 0 0 0 0 0l0 0c0-1-1-2-1-3l0 0c0 0 0 0 0 0 0 0 0-1 0-1l0 0c0-2 0-5-1-7l0 0c0 0 0 0 0 0 0 0 0 0 0-1l0 0c0-2 0-5 0-7l0 0c0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0l0 0c0-3 0-5 1-8l0 0c0 0 0 0 0 0l0 0c0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0l0 0c0-1 0-3 0-4l0 0c0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0l0 0c5-37 29-72 66-87l0 0c11-5 23-8 34-8l0 0c0-1 0-1 1-1l0 0c1 0 2 0 4 0l0 0c0 0 1 0 1 0l0 0c1 0 2 0 3 0z m-178 147l0 0c0 1 0 1 0 2-2-1-3-1-5-2l5 0z m14 41c3 6 6 12 10 18-4 0-7-1-10-1l0-17z",
                        options: {
                            x: x - 3,
                            y: y - 3,
                            scale: "s0.035",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 20
                            }
                        }
                    },
                    "bpmn:ScriptTask": {
                        path: "m385 206l-2 1c-57 34-96 65-121 94-24 29-35 56-35 81-1 51 39 93 78 133 39 40 78 78 82 119 2 21-4 43-23 67-20 25-53 52-104 82l-19 10 389 0 2 0c52-31 86-58 107-85 21-26 28-51 26-75-5-47-47-86-86-126-39-40-75-80-74-125 0-22 9-46 32-74 24-27 62-57 118-91l18-11-388 0z m3 12l344 0c-48 30-81 57-103 83-25 29-36 56-36 81-1 51 39 93 78 133 39 40 78 78 82 119 2 21-4 43-23 67-19 24-52 51-103 81l-344 0c43-26 71-51 90-74 21-26 28-51 25-75-5-47-46-86-85-126-39-40-75-80-75-125 1-22 10-46 33-74 23-27 61-57 117-90z m-50 102c-8 0-8 11 0 11l205 0c8 0 8-11 0-11l-46 0-159 0z m20 115c-7 0-7 12 0 12l188 0c7 0 7-12 0-12l-188 0z m63 116c-8 0-8 11 0 11l208 0c8 0 8-11 0-11l-208 0z m41 115c-7 0-7 12 0 12l208 0c8 0 8-12 0-12l-208 0z",
                        options: {
                            x: x - 3,
                            y: y - 3,
                            scale: "s0.035",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 20
                            }
                        }
                    },
                    MANUALTASK: {
                        path: "m460 206c-7 0-15 3-22 8l0 0 0 0c-47 30-209 143-245 167-29 20-49 50-61 87l0 0 0 0c-12 38-10 82-10 120l0 0 0 0c0 28 1 51 8 79 0 0 0 0 0 0 0 0 0 0 0 0 10 42 28 73 54 94 25 21 59 32 97 32 147 1 293 1 439 0l0 0 0 0c12 0 22-3 29-10 7-7 11-18 11-33l0 0c0-15-3-26-11-32-7-6-17-9-29-9l0 0c-55 0-184 0-189 0l0-21 252 0c13 0 23-2 31-6 8-5 14-14 16-25 4-18 1-32-7-41-8-10-21-14-38-14l0 0c-77 0-249 0-254 0l0-19c5 0 271 0 302 0 16 0 28-5 35-13 7-9 10-21 10-37 0-15-4-27-11-34-8-8-20-11-34-11l0 0c-93 0-298 0-302 0l0-19c5 0 159 0 226 0l0 0 0 0c15 0 26-5 34-13 8-9 12-21 12-37l0 0 0 0c0-15-4-27-12-36-8-8-20-13-34-13l0 0c-55 0-141 0-214 1-36 0-70 0-94 0-13 0-23 0-30-1-4 0-7 0-9 0-1 0-2 0-2 0-1 0-1 0-1 0 0 0 0 0-1-1 0 0 1-1 0 0 6-7 22-23 38-39 16-16 32-32 39-40l0 0c15-20 17-48 5-66l0 0c-7-11-15-16-24-17-1 0-2-1-4-1z m0 5c1 0 2 1 3 1 7 1 14 5 21 15l0 0 0 0c10 16 9 41-5 60l0 0 0 0c-6 7-22 23-39 39-16 17-32 32-38 39-1 2-1 5 0 6 1 2 2 3 4 4 0 0 1 0 2 0 0 0 1 0 2 0 2 0 5 0 9 0 7 1 17 1 30 1 24 0 58 0 94 0 73-1 159-1 214-1l0 0 0 0c13 0 23 4 30 12 7 7 11 18 11 33 0 14-4 25-11 33-6 7-16 11-30 11-68 0-228 0-228 0l-3 0 0 29 3 0c0 0 210 0 304 0 14 0 24 3 30 9 7 7 10 17 10 31 0 15-3 26-9 34-6 7-16 11-31 11-31 0-304 0-304 0l-3 0 0 29 3 0c0 0 178 0 256 0l0 0 0 0c16 0 27 4 34 12 7 8 10 20 6 37l0 0 0 0c-2 11-6 17-13 21-7 4-17 6-29 6l-257 0 0 3 0 28 3 0c0 0 135 0 191 0l0 0c12 0 20 3 26 8 6 5 9 14 9 28l0 0 0 0c0 14-4 23-9 29-6 6-15 9-26 9-146 1-292 1-439 0l0 0 0 0c-38 0-69-10-94-31-25-20-43-50-53-91l0 0 0 0c-6-28-7-50-7-78l0 0c0-38-1-82 10-118 12-36 31-65 59-85 36-24 198-137 244-167l0 0c7-4 14-7 20-7z",
                        options: {
                            x: x,
                            y: y - 3,
                            scale: "s0.035",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 20
                            }
                        }
                    },
                    BUSINESSRULE: {
                        path: "m104 206l0 294 0 32 0 5 0 256 194 0 5 0 593 0 0-293 0-294-792 0z m5 194l189 0 0 132-189 0 0-32 0-100z m194 0l588 0 0 100 0 32-588 0 0-132z m-194 137l189 0 0 251-189 0 0-251z m194 0l588 0 0 251-588 0 0-251z",
                        options: {
                            x: x,
                            y: y - 3,
                            scale: "s0.035",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 20
                            }
                        }
                    }
                };

                this.shape.add(this.svgLoader.loadElement(types[type].path, types[type].options));
            }
        }
    }, {
        key: "addMarkerDecorator",
        value: function addMarkerDecorator(marker) {
            var x = this.x + this.x * 0.031 + this.scaleX / 2 - 15;
            var y = this.y + this.y * 0.031 + this.scaleY - 27;

            if (marker !== "EMPTY") {
                var markers = {
                    LOOP: {
                        path: "m500 178c-175 0-317 141-317 314 0 87 36 165 93 222 27 27 60 49 96 65l-184 32-5 1 2 10 5-1 190-33 5-1 0-3 0 1-37-200 0-5-10 2 1 4 33 182c-33-15-63-36-89-61-56-55-90-131-90-215 0-168 137-304 307-304 170 0 307 136 307 304 0 168-137 304-307 304l-5 0 0 10 5 0c175 0 317-141 317-314 0-173-142-314-317-314z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.03",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 30
                            }
                        }
                    },
                    SEQUENTIAL: {
                        path: "m150 178l0 130 700 0 0-130-700 0z m0 257l0 130 700 0 0-130-700 0z m0 257l0 130 700 0 0-130-700 0z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.03",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    PARALLEL: {
                        path: "m178 150l0 700 130 0 0-700-130 0z m257 0l0 700 130 0 0-700-130 0z m257 0l0 700 130 0 0-700-130 0z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.03",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 0
                            }
                        }
                    },
                    COLLAPSED: {
                        path: "m115 115l0 5 0 765 770 0 0-770-770 0z m10 10l750 0 0 750-750 0 0-750z m355 75l0 280-280 0 0 40 280 0 0 280 40 0 0-280 280 0 0-40-280 0 0-280-40 0z",
                        options: {
                            x: x,
                            y: y,
                            scale: "s0.03",
                            attr: {
                                stroke: "#000",
                                strokeWidth: 20
                            }
                        }
                    }
                };

                this.shape.add(this.svgLoader.loadElement(markers[marker].path, markers[marker].options));
            }
        }
    }, {
        key: "getNativeShape",
        value: function getNativeShape() {
            return this.shape;
        }
    }, {
        key: "registerInputConn",
        value: function registerInputConn(id, conn) {
            this.inputConnectors.set(id, conn);
            this.setDirections(conn);
        }
    }, {
        key: "registerOutputConn",
        value: function registerOutputConn(id, conn) {
            this.outputConnectors.set(id, conn);
            this.setDirections(conn);
        }
    }, {
        key: "setDirections",
        value: function setDirections(conn) {
            conn.getShape().inputDirection = "LEFT";
            conn.getShape().outputDirection = "RIGHT";
        }

        /**
         * Refresh all shapes connectors
         * @param posx
         * @param posy
         */

    }, {
        key: "refreshAllConnections",
        value: function refreshAllConnections(nativeShape) {
            var conn = void 0,
                dX = void 0,
                dY = void 0;
            var shapeBox = nativeShape.getBBox();

            this.outputConnectors.forEach(function (value, key) {
                conn = value;

                if (conn.shape.outputDirection === "RIGHT") {
                    dX = shapeBox.width;
                    dY = shapeBox.height / 2;
                }

                var linesArray = conn.shape.router;
                var n = linesArray.length;

                conn.shape.options.method = "manhathan";
                conn.shape.config(conn.shape.options);

                conn.shape.redraw(shapeBox.x + dX, shapeBox.y + dY, linesArray[n - 1].x, linesArray[n - 1].y);
            });

            this.inputConnectors.forEach(function (value, key) {
                conn = value;
                if (conn.shape.inputDirection === "LEFT") {
                    dX = 0;
                    dY = shapeBox.height / 2;
                }

                var linesArray = conn.shape.router;
                var n = linesArray.length;

                conn.shape.options.method = "manhathan";
                conn.shape.config(conn.shape.options);

                conn.shape.redraw(linesArray[0].x, linesArray[0].y, shapeBox.x + dX, shapeBox.y + dY);
            });
        }
    }]);

    return TaskShape;
}();

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAnnotation; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextAnnotation = function () {
    function TextAnnotation(options, shape) {
        _classCallCheck(this, TextAnnotation);

        this.options = options;
        this.shape = shape;
        this.shape.config(options);
    }

    _createClass(TextAnnotation, [{
        key: "render",
        value: function render() {
            this.shape.render();
        }
    }, {
        key: "getShape",
        value: function getShape() {
            return this.shape;
        }
    }]);

    return TextAnnotation;
}();

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAnnotationShape; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextAnnotationShape = function () {
    function TextAnnotationShape(canvas, svgLoader) {
        _classCallCheck(this, TextAnnotationShape);

        this.canvas = canvas;
        this.svgLoader = svgLoader;
        this.shape = canvas.g();
        this.inputConnectors = new Map();
        this.outputConnectors = new Map();
    }

    _createClass(TextAnnotationShape, [{
        key: "config",
        value: function config(options) {
            this.options = options;
        }
    }, {
        key: "render",
        value: function render() {
            var x = +this.options.bou_x,
                y = +this.options.bou_y,
                width = +this.options.bou_width,
                height = +this.options.bou_height;

            var boxX = x + 15,
                boxY = y,
                boxWidth = 30,
                boxHeight = height;

            var sampleText = this.canvas.multitext(x, y, this.options.art_name, width + 20, { "font-size": "13px", "font-family": "Arial, Helvetica, sans-serif" });
            this.shape.add(sampleText);

            var box = this.canvas.polyline(boxX, boxY, boxX - boxWidth, boxY, boxX - boxWidth, boxY + boxHeight, boxX, boxY + boxHeight);

            box.attr({
                fill: "none",
                stroke: "#000",
                strokeWidth: 1
            });
            var offset = y - sampleText.getBBox().y + (height - sampleText.getBBox().height) / 2;
            this.shape.add(box);
            box.transform("t0 " + Math.floor(-offset).toString());
            this.shape.transform("t0 " + Math.floor(+offset).toString());
            this.shape.drag();
        }
    }, {
        key: "getNativeShape",
        value: function getNativeShape() {
            return this.shape;
        }
    }, {
        key: "registerInputConn",
        value: function registerInputConn(id, conn) {
            this.inputConnectors.set(id, conn);
            this.setDirections(conn);
        }
    }, {
        key: "setDirections",
        value: function setDirections(conn) {
            conn.getShape().inputDirection = "LEFT";
            conn.getShape().outputDirection = "RIGHT";
        }
    }, {
        key: "registerOutputConn",
        value: function registerOutputConn(id, conn) {
            this.outputConnectors.set(id, conn);
            this.setDirections(conn);
        }

        /**
         * Refresh all shapes connectors
         * @param posx
         * @param posy
         */

    }, {
        key: "refreshAllConnections",
        value: function refreshAllConnections(nativeShape) {
            var conn = void 0,
                dX = void 0,
                dY = void 0;
            var shapeBox = nativeShape.getBBox();

            this.outputConnectors.forEach(function (value, key) {
                conn = value;

                if (conn.shape.outputDirection === "RIGHT") {
                    dX = shapeBox.width;
                    dY = shapeBox.height / 2;
                }

                var linesArray = conn.shape.router;
                var n = linesArray.length;

                conn.shape.options.method = "manhathan";
                conn.shape.config(conn.shape.options);

                conn.shape.redraw(shapeBox.x + dX, shapeBox.y + dY, linesArray[n - 1].x, linesArray[n - 1].y);
            });

            this.inputConnectors.forEach(function (value, key) {
                conn = value;
                if (conn.shape.inputDirection === "LEFT") {
                    dX = 0;
                    dY = shapeBox.height / 2;
                }

                var linesArray = conn.shape.router;
                var n = linesArray.length;

                conn.shape.options.method = "manhathan";
                conn.shape.config(conn.shape.options);

                conn.shape.redraw(linesArray[0].x, linesArray[0].y, shapeBox.x + dX, shapeBox.y + dY);
            });
        }
    }]);

    return TextAnnotationShape;
}();

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elements__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_index__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements_connector_connector_shape__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagramSvg; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }









var DiagramSvg = function () {
    function DiagramSvg(canvas, svgLoader) {
        var _this = this;

        _classCallCheck(this, DiagramSvg);

        this.canvas = canvas;
        this.svgLoader = svgLoader;
        this.elementRegistry = new Map();
        this.diagram = new __WEBPACK_IMPORTED_MODULE_0__elements__["a" /* Diagram */]({}, new __WEBPACK_IMPORTED_MODULE_0__elements__["b" /* DiagramShape */](this.canvas, this.svgLoader));

        this.canvas.click(function () {
            if (_this.selection && !_this.shapeSelected) {
                _this.selection.remove();
            } else {
                _this.shapeSelected = false;
            }
        });
        this.diagram.render();
        this.$http = new __WEBPACK_IMPORTED_MODULE_0__elements__["c" /* DiagramService */]();
    }

    /**
     *
     * @param first
     * @param second
     */


    _createClass(DiagramSvg, [{
        key: "extend",
        value: function extend(first, second) {
            var result = {};
            for (var id in first) {
                if (id) {
                    result[id] = first[id];
                }
            }
            for (var _id in second) {
                if (!result.hasOwnProperty(_id)) {
                    result[_id] = second[_id];
                }
            }
            return result;
        }
    }, {
        key: "createShape",
        value: function createShape(type, options) {
            var _this2 = this;

            var shape = void 0,
                defaultOptions = {
                $type: type,
                id: options.id,
                name: options.bpmnElement && options.bpmnElement.name ? options.bpmnElement.name : options.name ? options.name : "",
                uid: null,
                type: null,
                moddleElement: options
            };
            defaultOptions = this.extend(defaultOptions, options);
            debugger;
            console.log("actions");
            console.log(__WEBPACK_IMPORTED_MODULE_1__actions_index__["a" /* default */]);
            //dispatch("jonas");
            // TODO Improve uid selector, too much duplicated or multiplicated lines... (ø_ø)!
            switch (type) {
                case "bpmn:StartEvent":
                    defaultOptions.type = type;
                    defaultOptions.id = options.id;
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["d" /* StartEvent */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_0__elements__["e" /* EventShape */](this.canvas, this.svgLoader));
                    shape.render();
                    break;
                case "bpmn:EndEvent":
                    defaultOptions.type = type;
                    defaultOptions.id = options.id;
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["f" /* EndEvent */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_0__elements__["e" /* EventShape */](this.canvas, this.svgLoader));
                    shape.render();
                    break;
                case "bpmn:BoundaryEvent":
                    defaultOptions.type = type;
                    defaultOptions.id = options.id;
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["f" /* EndEvent */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_0__elements__["e" /* EventShape */](this.canvas, this.svgLoader));
                    shape.render();
                    break;
                case "bpmn:IntermediateThrowEvent":
                    defaultOptions.type = type;
                    defaultOptions.id = options.id;
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["g" /* IntermediateEvent */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_0__elements__["e" /* EventShape */](this.canvas, this.svgLoader));
                    shape.render();
                    break;

                case "bpmn:IntermediateCatchEvent":
                    defaultOptions.type = type;
                    defaultOptions.id = options.id;
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["g" /* IntermediateEvent */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_0__elements__["e" /* EventShape */](this.canvas, this.svgLoader));
                    shape.render();
                    break;

                case "bpmn:ScriptTask":
                case "bpmn:ServiceTask":
                case "bpmn:UserTask":
                case "bpmn:Task":
                    defaultOptions.type = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(options.act_task_type) && options.act_task_type !== "" ? options.act_task_type : type;
                    defaultOptions.id = options.id;
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["h" /* Task */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_0__elements__["i" /* TaskShape */](this.canvas, this.svgLoader));
                    shape.render();
                    break;
                case "bpmn:SubProcess":
                    defaultOptions.type = type;
                    defaultOptions.uid = options.act_uid;
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["j" /* SubProcess */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_0__elements__["i" /* TaskShape */](this.canvas, this.svgLoader));
                    shape.render();
                    break;
                case "bpmn:SequenceFlow":
                    defaultOptions.type = type;
                    defaultOptions.uid = options.flo_uid;
                    defaultOptions.method = "user";
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["k" /* Flow */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_2__elements_connector_connector_shape__["a" /* ConnectorShape */](this.canvas, this.svgLoader));
                    var sourceId = defaultOptions.moddleElement.bpmnElement.sourceRef.id;
                    var targetId = defaultOptions.moddleElement.bpmnElement.targetRef.id;
                    this.elementRegistry.get(sourceId).getShape().registerOutputConn(shape.getShape().options.id, shape);
                    this.elementRegistry.get(targetId).getShape().registerInputConn(shape.getShape().options.id, shape);
                    shape.render();
                    break;
                case "bpmn:MessageFlow":
                    defaultOptions.type = type;
                    defaultOptions.id = options.id;
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["l" /* Message */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_2__elements_connector_connector_shape__["a" /* ConnectorShape */](this.canvas, this.svgLoader));
                    sourceId = defaultOptions.moddleElement.bpmnElement.sourceRef.id;
                    targetId = defaultOptions.moddleElement.bpmnElement.targetRef.id;
                    this.elementRegistry.get(sourceId).getShape().registerOutputConn(shape.getShape().options.id, shape);
                    this.elementRegistry.get(targetId).getShape().registerInputConn(shape.getShape().options.id, shape);
                    shape.render();
                    break;
                case "ASSOCIATION":
                    defaultOptions.type = type;
                    defaultOptions.uid = options.flo_uid;
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["m" /* Association */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_2__elements_connector_connector_shape__["a" /* ConnectorShape */](this.canvas, this.svgLoader));
                    shape.render();
                    break;
                case "DATAASSOCIATION":
                    defaultOptions.type = type;
                    defaultOptions.uid = options.flo_uid;
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["n" /* DataAssociation */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_2__elements_connector_connector_shape__["a" /* ConnectorShape */](this.canvas, this.svgLoader));
                    shape.render();
                    break; // bpmn:ExclusiveGateway
                case "bpmn:ExclusiveGateway":
                case "bpmn:EventBasedGateway":
                case "bpmn:InclusiveGateway":
                case "bpmn:ParallelGateway":
                    defaultOptions.type = type;
                    defaultOptions.id = options.id;
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["o" /* Gateway */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_0__elements__["p" /* GatewayShape */](this.canvas, this.svgLoader));
                    shape.render();
                    break;
                case "TEXT_ANNOTATION":
                    defaultOptions.type = type;
                    defaultOptions.uid = options.art_uid;
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["q" /* TextAnnotation */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_0__elements__["r" /* TextAnnotationShape */](this.canvas, this.svgLoader));

                    shape.render();
                    break;
                case "bpmn:DataStoreReference":
                    defaultOptions.type = type;
                    defaultOptions.uid = options.dat_uid;
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["s" /* DataStore */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_0__elements__["t" /* DataStoreShape */](this.canvas, this.svgLoader));

                    shape.render();
                    break;
                case "bpmn:DataObjectReference":
                    defaultOptions.type = type;
                    defaultOptions.uid = options.dat_uid;
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["u" /* DataObject */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_0__elements__["v" /* DataObjectShape */](this.canvas, this.svgLoader));

                    shape.render();
                    break;

                case "bpmn:Participant":
                    defaultOptions.type = type;
                    defaultOptions.uid = options.lns_uid;
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["w" /* Pool */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_0__elements__["x" /* PoolShape */](this.canvas, this.svgLoader));

                    shape.render();
                    break;

                case "GROUP":
                    defaultOptions.type = type;
                    defaultOptions.uid = options.art_uid;
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["y" /* Group */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_0__elements__["z" /* GroupShape */](this.canvas, this.svgLoader));

                    shape.render();
                    break;
                case "BLACKBOX_POOL":
                    defaultOptions.type = type;
                    defaultOptions.uid = options.par_uid;
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["A" /* BlackboxPool */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_0__elements__["B" /* BlackboxPoolShape */](this.canvas, this.svgLoader));

                    shape.render();
                    break;
                case "bpmn:Lane":
                    defaultOptions.type = type;
                    defaultOptions.id = options.id;
                    shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["C" /* Lane */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_0__elements__["D" /* LaneShape */](this.canvas, this.svgLoader));
                    shape.render();
                    break;
                default:
                    // shape = this.UnknownShape(defaultOptions, this.canvas);
                    break;
            }
            if (shape) {
                // Event Handling
                var nativeShape = shape.getShape().getNativeShape();

                var shapeCanvas = this.canvas;
                nativeShape.click(function (event) {
                    _this2.shapeSelected = true;
                    var shapeBox = nativeShape.getBBox();
                    console.log("shapeBox:", shapeBox);
                    event.bpmn_element = {
                        id: defaultOptions.id,
                        type: defaultOptions.type
                    };
                    console.log("Type: " + defaultOptions.type + " Id: " + defaultOptions.id);
                    if (_this2.selection) {
                        _this2.selection.remove();
                    }

                    _this2.selection = shapeCanvas.rect(shapeBox.x - 5, shapeBox.y - 5, shapeBox.width + 10, shapeBox.height + 10, 5).attr({
                        fill: "none",
                        stroke: "#1fb64b",
                        strokeWidth: 2,
                        strokeDasharray: "3px,7px",
                        strokeLinecap: "square"
                    });
                    _this2.diagram.getShape().getNativeShape().add(_this2.selection);
                });
                nativeShape.dblclick(function (event) {
                    console.log("dblclick handler for connect purposes");
                    // save pre connect shape
                    if (shapeCanvas.preConnectionShape) {
                        console.log(shapeCanvas.preConnectionShape);
                        console.log(shape);
                        _this2.connect(shapeCanvas.preConnectionShape, shape);
                        shapeCanvas.preConnectionShape = false;
                        shapeCanvas.preConnectionShape = null;
                        console.log("-----------------");
                    } else {
                        shapeCanvas.preConnectionShape = shape;
                    }
                });
                var positions = {};
                nativeShape.drag(function (dx, dy, posx, posy) {
                    // console.log(shape);
                    nativeShape.attr({ cx: posx, cy: posy });

                    shape.getShape().refreshAllConnections(nativeShape);

                    positions = {
                        sessionId: $("#sessionId").val(),
                        id: defaultOptions.id,
                        type: defaultOptions.type,
                        x: dx,
                        y: dy,
                        transform: nativeShape.data("origTransform") + (nativeShape.data("origTransform") ? "T" : "t") + [dx, dy]
                    };
                }, function () {
                    console.log("on drag start");
                    nativeShape.data("origTransform", nativeShape.transform().local);
                }, function () {
                    console.log("on drag end");
                    _this2.sendMessageChannel(positions);
                });

                this.registerElement(defaultOptions.id, shape);
                return shape;
            }
        }

        /**
         * Create a connector
         * @constructor
         */

    }, {
        key: "CreateConnectors",
        value: function CreateConnectors() {
            // Todo create connector
        }
    }, {
        key: "UnknownShape",
        value: function UnknownShape(options, canvas) {
            var shape = {
                shape: canvas.group()
            };
            return shape;
        }
    }, {
        key: "draw",
        value: function draw(data) {
            var _this3 = this;

            var jw = __webpack_require__(481);
            var diagrams = new Promise(function (resolve, reject) {
                jw.findArraysByKey("diagrams", data, function (err, results) {
                    resolve(results);
                });
            });
            diagrams.then(function (res) {
                var planeElement = new Promise(function (resolve, reject) {
                    jw.findArraysByKey("planeElement", res[0], function (err, modified) {
                        resolve(modified);
                        console.log("finished");
                    });
                });
                planeElement.then(function (res) {
                    for (var item in res) {
                        for (var element in res[item]) {
                            var moddleElement = res[item][element];
                            var flows = ["bpmn:SequenceFlow", "bpmn:MessageFlow"];
                            if (flows.indexOf(moddleElement.bpmnElement.$type) < 0) {
                                console.log(moddleElement);
                                _this3.createShape(moddleElement.bpmnElement.$type, _this3.extend(moddleElement.bpmnElement, moddleElement.bounds));
                            }
                        }
                        for (var _element in res[item]) {
                            var _moddleElement = res[item][_element];
                            var _flows = ["bpmn:SequenceFlow", "bpmn:MessageFlow"];
                            if (_flows.indexOf(_moddleElement.bpmnElement.$type) >= 0) {
                                console.log(_moddleElement);
                                _this3.createShape(_moddleElement.bpmnElement.$type, _moddleElement);
                            }
                        }
                    }
                });
                // jw.findArraysByKey('planeElement', res[0], function(err, results){
                //     console.log(results);
                // });
            });

            // const rootElements = new Promise((resolve, reject) => {
            //     jw.findArraysByKey('rootElements', data, function(err, results){
            //         resolve(results);
            //     });
            // });
            // rootElements.then((res) => {
            //     const flowElements = new Promise((resolve, reject) => {
            //         jw.findArraysByKey('flowElements', res[0], function(err, modified){
            //             resolve(modified);
            //         });
            //     });
            //     flowElements.then((res) => {
            //         for (let item in res) {
            //             for (let element in res[item]) {
            //                 let moddleElement = res[item][element];
            //                 console.log(moddleElement);
            //                 this.createShape(
            //                     moddleElement.$type,
            //                     moddleElement
            //                 );
            //             }
            //         }
            //     });
            // });
        }
    }, {
        key: "normalizeData",
        value: function normalizeData(diagram, elementData) {
            var data = Object.assign({}, elementData);
            var fixedData = this.getOffset(diagram, data);
            data.bou_x = fixedData.x;
            data.bou_y = fixedData.y;
            return data;
        }
    }, {
        key: "getOffset",
        value: function getOffset(diagram, elementData) {
            var aliases = {
                bpmnLane: { type: "lanes", id_field: "lan_uid" },
                bpmnPool: { type: "laneset", id_field: "lns_uid" }
            };
            var offset = {};
            if (elementData.bou_container !== "bpmnDiagram") {
                var data = this.getOffset(diagram, this.searchElement(diagram, aliases[elementData.bou_container].type, aliases[elementData.bou_container].id_field, elementData.bou_element));
                offset.x = +elementData.bou_x + data.x + 1;
                offset.y = +elementData.bou_y + data.y + 1;
            } else {
                offset.x = parseInt(elementData.bou_x, 10);
                offset.y = parseInt(elementData.bou_y, 10);
            }
            return offset;
        }
    }, {
        key: "searchElement",
        value: function searchElement(diagram, type, idField, id) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = diagram[type][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var element = _step.value;

                    if (element[idField] === id) {
                        return element;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "processAction",
        value: function processAction(action) {
            switch (action) {
                case "zoom-in":
                    this.diagram.zoomIn();
                    break;
                case "zoom-out":
                    this.diagram.zoomOut();
                    break;
                case "zoom-reset":
                    this.diagram.zoomReset();
                    break;
                case "clear-canvas":
                    this.clearCanvas();
                    break;
                default:
                    console.log("unknown action");
                    break;
            }
        }
    }, {
        key: "getDiagramDataURL",
        value: function getDiagramDataURL() {
            return this.canvas.toDataURL();
        }
    }, {
        key: "getDiagramBBox",
        value: function getDiagramBBox() {
            return this.canvas.getBBox();
        }
    }, {
        key: "getDiagramShape",
        value: function getDiagramShape() {
            return this.diagram;
        }
    }, {
        key: "registerElement",
        value: function registerElement(id, shape) {
            this.diagram.add(shape);
            this.elementRegistry.set(id, shape);
        }
    }, {
        key: "getElementById",
        value: function getElementById(id) {
            return this.elementRegistry.get(id);
        }
    }, {
        key: "sendMessageChannel",
        value: function sendMessageChannel(dataElement) {
            // let element = dataElement.bpmn_element;
            // element.x = dataElement.x;
            // element.y = dataElement.y;
            console.log(dataElement);
            // let vue = require('vue');
            this.$http.cnn("post", "/element-designer", dataElement, function (response) {
                console.log(response);
            });
            // vue.http.post('/element-designer', element).then(response => {
            //         console.log(response);
            // });
        }
    }, {
        key: "connect",
        value: function connect(srcShape, destShape) {
            var defaultOptions = {};
            defaultOptions.type = "bpmn:SequenceFlow";
            defaultOptions.id = "SequenceFlow_" + Math.floor(Math.random() * 100 + 1);
            defaultOptions.method = "manhathan";
            defaultOptions.label = {
                bounds: {
                    width: 0,
                    height: 0,
                    x: 0,
                    y: 0
                }
            };
            var shape = new __WEBPACK_IMPORTED_MODULE_0__elements__["k" /* Flow */](defaultOptions, new __WEBPACK_IMPORTED_MODULE_2__elements_connector_connector_shape__["a" /* ConnectorShape */](this.canvas, this.svgLoader));
            var shapeBox = srcShape.getShape().shape.getBBox();
            var x1 = shapeBox.x + shapeBox.width;
            var y1 = shapeBox.y + shapeBox.height / 2;

            shapeBox = destShape.getShape().shape.getBBox();
            var x2 = shapeBox.x;
            var y2 = shapeBox.y + shapeBox.height / 2;

            srcShape.getShape().registerOutputConn(defaultOptions.uid, shape);
            destShape.getShape().registerInputConn(defaultOptions.uid, shape);
            shape.getShape().renderManhathan(x1, y1, x2, y2);
            this.diagram.add(shape);
        }
    }, {
        key: "clearCanvas",
        value: function clearCanvas() {
            this.canvas.clear();
            this.elementRegistry = new Map();
            this.diagram = new __WEBPACK_IMPORTED_MODULE_0__elements__["a" /* Diagram */]({}, new __WEBPACK_IMPORTED_MODULE_0__elements__["b" /* DiagramShape */](this.canvas, this.svgLoader));
        }
    }]);

    return DiagramSvg;
}();

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SVGLoader; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * SVGLoader
 */
var SVGLoader = function () {
  /**
   * Constructor of this class
   * @param canvas
   */
  function SVGLoader(canvas) {
    _classCallCheck(this, SVGLoader);

    this.canvas = canvas;
  }

  /**
   * Load element in canvas
   * @param path
   * @param options
   */


  _createClass(SVGLoader, [{
    key: "loadElement",
    value: function loadElement(path, options) {
      return this.canvas.path(path).transform(options.scale + ", " + options.x + ", " + options.y).attr(options.attr);
    }
  }]);

  return SVGLoader;
}();

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_simple__ = __webpack_require__(434);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__lib_simple__["a"]; });


/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_min_dash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moddle__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moddle_xml__ = __webpack_require__(485);
/* harmony export (immutable) */ __webpack_exports__["a"] = BpmnModdle;







/**
 * A sub class of {@link Moddle} with support for import and export of BPMN 2.0 xml files.
 *
 * @class BpmnModdle
 * @extends Moddle
 *
 * @param {Object|Array} packages to use for instantiating the model
 * @param {Object} [options] additional options to pass over
 */
function BpmnModdle(packages, options) {
  __WEBPACK_IMPORTED_MODULE_1_moddle__["a" /* default */].call(this, packages, options);
}

BpmnModdle.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_1_moddle__["a" /* default */].prototype);


/**
 * Instantiates a BPMN model tree from a given xml string.
 *
 * @param {String}   xmlStr
 * @param {String}   [typeName='bpmn:Definitions'] name of the root element
 * @param {Object}   [options]  options to pass to the underlying reader
 * @param {Function} done       callback that is invoked with (err, result, parseContext)
 *                              once the import completes
 */
BpmnModdle.prototype.fromXML = function(xmlStr, typeName, options, done) {

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["b" /* isString */])(typeName)) {
    done = options;
    options = typeName;
    typeName = 'bpmn:Definitions';
  }

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["c" /* isFunction */])(options)) {
    done = options;
    options = {};
  }

  var reader = new __WEBPACK_IMPORTED_MODULE_2_moddle_xml__["a" /* Reader */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])({ model: this, lax: true }, options));
  var rootHandler = reader.handler(typeName);

  reader.fromXML(xmlStr, rootHandler, done);
};


/**
 * Serializes a BPMN 2.0 object tree to XML.
 *
 * @param {String}   element    the root element, typically an instance of `bpmn:Definitions`
 * @param {Object}   [options]  to pass to the underlying writer
 * @param {Function} done       callback invoked with (err, xmlStr) once the import completes
 */
BpmnModdle.prototype.toXML = function(element, options, done) {

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["c" /* isFunction */])(options)) {
    done = options;
    options = {};
  }

  var writer = new __WEBPACK_IMPORTED_MODULE_2_moddle_xml__["b" /* Writer */](options);

  var result;
  var err;

  try {
    result = writer.toXML(element);
  } catch (e) {
    err = e;
  }

  return done(err, result);
};


/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_min_dash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bpmn_moddle__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resources_bpmn_json_bpmn_json__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resources_bpmn_json_bpmn_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__resources_bpmn_json_bpmn_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resources_bpmn_json_bpmndi_json__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resources_bpmn_json_bpmndi_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__resources_bpmn_json_bpmndi_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resources_bpmn_json_dc_json__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resources_bpmn_json_dc_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__resources_bpmn_json_dc_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resources_bpmn_json_di_json__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resources_bpmn_json_di_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__resources_bpmn_json_di_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resources_bpmn_io_json_bioc_json__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resources_bpmn_io_json_bioc_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__resources_bpmn_io_json_bioc_json__);










var packages = {
  bpmn: __WEBPACK_IMPORTED_MODULE_2__resources_bpmn_json_bpmn_json___default.a,
  bpmndi: __WEBPACK_IMPORTED_MODULE_3__resources_bpmn_json_bpmndi_json___default.a,
  dc: __WEBPACK_IMPORTED_MODULE_4__resources_bpmn_json_dc_json___default.a,
  di: __WEBPACK_IMPORTED_MODULE_5__resources_bpmn_json_di_json___default.a,
  bioc: __WEBPACK_IMPORTED_MODULE_6__resources_bpmn_io_json_bioc_json___default.a
};

/* harmony default export */ __webpack_exports__["a"] = (function(additionalPackages, options) {
  var pks = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])({}, packages, additionalPackages);

  return new __WEBPACK_IMPORTED_MODULE_1__bpmn_moddle__["a" /* default */](pks, options);
});


/***/ }),

/***/ 435:
/***/ (function(module, exports) {

module.exports = {"name":"bpmn.io colors for BPMN","uri":"http://bpmn.io/schema/bpmn/biocolor/1.0","prefix":"bioc","types":[{"name":"ColoredShape","extends":["bpmndi:BPMNShape"],"properties":[{"name":"stroke","isAttr":true,"type":"String"},{"name":"fill","isAttr":true,"type":"String"}]},{"name":"ColoredEdge","extends":["bpmndi:BPMNEdge"],"properties":[{"name":"stroke","isAttr":true,"type":"String"},{"name":"fill","isAttr":true,"type":"String"}]}],"enumerations":[],"associations":[]}

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

module.exports = {"name":"BPMN20","uri":"http://www.omg.org/spec/BPMN/20100524/MODEL","associations":[],"types":[{"name":"Interface","superClass":["RootElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"operations","type":"Operation","isMany":true},{"name":"implementationRef","type":"String","isAttr":true}]},{"name":"Operation","superClass":["BaseElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"inMessageRef","type":"Message","isReference":true},{"name":"outMessageRef","type":"Message","isReference":true},{"name":"errorRef","type":"Error","isMany":true,"isReference":true},{"name":"implementationRef","type":"String","isAttr":true}]},{"name":"EndPoint","superClass":["RootElement"]},{"name":"Auditing","superClass":["BaseElement"]},{"name":"GlobalTask","superClass":["CallableElement"],"properties":[{"name":"resources","type":"ResourceRole","isMany":true}]},{"name":"Monitoring","superClass":["BaseElement"]},{"name":"Performer","superClass":["ResourceRole"]},{"name":"Process","superClass":["FlowElementsContainer","CallableElement"],"properties":[{"name":"processType","type":"ProcessType","isAttr":true},{"name":"isClosed","isAttr":true,"type":"Boolean"},{"name":"auditing","type":"Auditing"},{"name":"monitoring","type":"Monitoring"},{"name":"properties","type":"Property","isMany":true},{"name":"laneSets","type":"LaneSet","isMany":true,"replaces":"FlowElementsContainer#laneSets"},{"name":"flowElements","type":"FlowElement","isMany":true,"replaces":"FlowElementsContainer#flowElements"},{"name":"artifacts","type":"Artifact","isMany":true},{"name":"resources","type":"ResourceRole","isMany":true},{"name":"correlationSubscriptions","type":"CorrelationSubscription","isMany":true},{"name":"supports","type":"Process","isMany":true,"isReference":true},{"name":"definitionalCollaborationRef","type":"Collaboration","isAttr":true,"isReference":true},{"name":"isExecutable","isAttr":true,"type":"Boolean"}]},{"name":"LaneSet","superClass":["BaseElement"],"properties":[{"name":"lanes","type":"Lane","isMany":true},{"name":"name","isAttr":true,"type":"String"}]},{"name":"Lane","superClass":["BaseElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"partitionElementRef","type":"BaseElement","isAttr":true,"isReference":true},{"name":"partitionElement","type":"BaseElement"},{"name":"flowNodeRef","type":"FlowNode","isMany":true,"isReference":true},{"name":"childLaneSet","type":"LaneSet","xml":{"serialize":"xsi:type"}}]},{"name":"GlobalManualTask","superClass":["GlobalTask"]},{"name":"ManualTask","superClass":["Task"]},{"name":"UserTask","superClass":["Task"],"properties":[{"name":"renderings","type":"Rendering","isMany":true},{"name":"implementation","isAttr":true,"type":"String"}]},{"name":"Rendering","superClass":["BaseElement"]},{"name":"HumanPerformer","superClass":["Performer"]},{"name":"PotentialOwner","superClass":["HumanPerformer"]},{"name":"GlobalUserTask","superClass":["GlobalTask"],"properties":[{"name":"implementation","isAttr":true,"type":"String"},{"name":"renderings","type":"Rendering","isMany":true}]},{"name":"Gateway","isAbstract":true,"superClass":["FlowNode"],"properties":[{"name":"gatewayDirection","type":"GatewayDirection","default":"Unspecified","isAttr":true}]},{"name":"EventBasedGateway","superClass":["Gateway"],"properties":[{"name":"instantiate","default":false,"isAttr":true,"type":"Boolean"},{"name":"eventGatewayType","type":"EventBasedGatewayType","isAttr":true,"default":"Exclusive"}]},{"name":"ComplexGateway","superClass":["Gateway"],"properties":[{"name":"activationCondition","type":"Expression","xml":{"serialize":"xsi:type"}},{"name":"default","type":"SequenceFlow","isAttr":true,"isReference":true}]},{"name":"ExclusiveGateway","superClass":["Gateway"],"properties":[{"name":"default","type":"SequenceFlow","isAttr":true,"isReference":true}]},{"name":"InclusiveGateway","superClass":["Gateway"],"properties":[{"name":"default","type":"SequenceFlow","isAttr":true,"isReference":true}]},{"name":"ParallelGateway","superClass":["Gateway"]},{"name":"RootElement","isAbstract":true,"superClass":["BaseElement"]},{"name":"Relationship","superClass":["BaseElement"],"properties":[{"name":"type","isAttr":true,"type":"String"},{"name":"direction","type":"RelationshipDirection","isAttr":true},{"name":"source","isMany":true,"isReference":true,"type":"Element"},{"name":"target","isMany":true,"isReference":true,"type":"Element"}]},{"name":"BaseElement","isAbstract":true,"properties":[{"name":"id","isAttr":true,"type":"String","isId":true},{"name":"documentation","type":"Documentation","isMany":true},{"name":"extensionDefinitions","type":"ExtensionDefinition","isMany":true,"isReference":true},{"name":"extensionElements","type":"ExtensionElements"}]},{"name":"Extension","properties":[{"name":"mustUnderstand","default":false,"isAttr":true,"type":"Boolean"},{"name":"definition","type":"ExtensionDefinition","isAttr":true,"isReference":true}]},{"name":"ExtensionDefinition","properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"extensionAttributeDefinitions","type":"ExtensionAttributeDefinition","isMany":true}]},{"name":"ExtensionAttributeDefinition","properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"type","isAttr":true,"type":"String"},{"name":"isReference","default":false,"isAttr":true,"type":"Boolean"},{"name":"extensionDefinition","type":"ExtensionDefinition","isAttr":true,"isReference":true}]},{"name":"ExtensionElements","properties":[{"name":"valueRef","isAttr":true,"isReference":true,"type":"Element"},{"name":"values","type":"Element","isMany":true},{"name":"extensionAttributeDefinition","type":"ExtensionAttributeDefinition","isAttr":true,"isReference":true}]},{"name":"Documentation","superClass":["BaseElement"],"properties":[{"name":"text","type":"String","isBody":true},{"name":"textFormat","default":"text/plain","isAttr":true,"type":"String"}]},{"name":"Event","isAbstract":true,"superClass":["FlowNode","InteractionNode"],"properties":[{"name":"properties","type":"Property","isMany":true}]},{"name":"IntermediateCatchEvent","superClass":["CatchEvent"]},{"name":"IntermediateThrowEvent","superClass":["ThrowEvent"]},{"name":"EndEvent","superClass":["ThrowEvent"]},{"name":"StartEvent","superClass":["CatchEvent"],"properties":[{"name":"isInterrupting","default":true,"isAttr":true,"type":"Boolean"}]},{"name":"ThrowEvent","isAbstract":true,"superClass":["Event"],"properties":[{"name":"dataInputs","type":"DataInput","isMany":true},{"name":"dataInputAssociations","type":"DataInputAssociation","isMany":true},{"name":"inputSet","type":"InputSet"},{"name":"eventDefinitions","type":"EventDefinition","isMany":true},{"name":"eventDefinitionRef","type":"EventDefinition","isMany":true,"isReference":true}]},{"name":"CatchEvent","isAbstract":true,"superClass":["Event"],"properties":[{"name":"parallelMultiple","isAttr":true,"type":"Boolean","default":false},{"name":"dataOutputs","type":"DataOutput","isMany":true},{"name":"dataOutputAssociations","type":"DataOutputAssociation","isMany":true},{"name":"outputSet","type":"OutputSet"},{"name":"eventDefinitions","type":"EventDefinition","isMany":true},{"name":"eventDefinitionRef","type":"EventDefinition","isMany":true,"isReference":true}]},{"name":"BoundaryEvent","superClass":["CatchEvent"],"properties":[{"name":"cancelActivity","default":true,"isAttr":true,"type":"Boolean"},{"name":"attachedToRef","type":"Activity","isAttr":true,"isReference":true}]},{"name":"EventDefinition","isAbstract":true,"superClass":["RootElement"]},{"name":"CancelEventDefinition","superClass":["EventDefinition"]},{"name":"ErrorEventDefinition","superClass":["EventDefinition"],"properties":[{"name":"errorRef","type":"Error","isAttr":true,"isReference":true}]},{"name":"TerminateEventDefinition","superClass":["EventDefinition"]},{"name":"EscalationEventDefinition","superClass":["EventDefinition"],"properties":[{"name":"escalationRef","type":"Escalation","isAttr":true,"isReference":true}]},{"name":"Escalation","properties":[{"name":"structureRef","type":"ItemDefinition","isAttr":true,"isReference":true},{"name":"name","isAttr":true,"type":"String"},{"name":"escalationCode","isAttr":true,"type":"String"}],"superClass":["RootElement"]},{"name":"CompensateEventDefinition","superClass":["EventDefinition"],"properties":[{"name":"waitForCompletion","isAttr":true,"type":"Boolean","default":true},{"name":"activityRef","type":"Activity","isAttr":true,"isReference":true}]},{"name":"TimerEventDefinition","superClass":["EventDefinition"],"properties":[{"name":"timeDate","type":"Expression","xml":{"serialize":"xsi:type"}},{"name":"timeCycle","type":"Expression","xml":{"serialize":"xsi:type"}},{"name":"timeDuration","type":"Expression","xml":{"serialize":"xsi:type"}}]},{"name":"LinkEventDefinition","superClass":["EventDefinition"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"target","type":"LinkEventDefinition","isAttr":true,"isReference":true},{"name":"source","type":"LinkEventDefinition","isMany":true,"isReference":true}]},{"name":"MessageEventDefinition","superClass":["EventDefinition"],"properties":[{"name":"messageRef","type":"Message","isAttr":true,"isReference":true},{"name":"operationRef","type":"Operation","isAttr":true,"isReference":true}]},{"name":"ConditionalEventDefinition","superClass":["EventDefinition"],"properties":[{"name":"condition","type":"Expression","xml":{"serialize":"xsi:type"}}]},{"name":"SignalEventDefinition","superClass":["EventDefinition"],"properties":[{"name":"signalRef","type":"Signal","isAttr":true,"isReference":true}]},{"name":"Signal","superClass":["RootElement"],"properties":[{"name":"structureRef","type":"ItemDefinition","isAttr":true,"isReference":true},{"name":"name","isAttr":true,"type":"String"}]},{"name":"ImplicitThrowEvent","superClass":["ThrowEvent"]},{"name":"DataState","superClass":["BaseElement"],"properties":[{"name":"name","isAttr":true,"type":"String"}]},{"name":"ItemAwareElement","superClass":["BaseElement"],"properties":[{"name":"itemSubjectRef","type":"ItemDefinition","isAttr":true,"isReference":true},{"name":"dataState","type":"DataState"}]},{"name":"DataAssociation","superClass":["BaseElement"],"properties":[{"name":"assignment","type":"Assignment","isMany":true},{"name":"sourceRef","type":"ItemAwareElement","isMany":true,"isReference":true},{"name":"targetRef","type":"ItemAwareElement","isReference":true},{"name":"transformation","type":"FormalExpression","xml":{"serialize":"property"}}]},{"name":"DataInput","superClass":["ItemAwareElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"isCollection","default":false,"isAttr":true,"type":"Boolean"},{"name":"inputSetRef","type":"InputSet","isVirtual":true,"isMany":true,"isReference":true},{"name":"inputSetWithOptional","type":"InputSet","isVirtual":true,"isMany":true,"isReference":true},{"name":"inputSetWithWhileExecuting","type":"InputSet","isVirtual":true,"isMany":true,"isReference":true}]},{"name":"DataOutput","superClass":["ItemAwareElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"isCollection","default":false,"isAttr":true,"type":"Boolean"},{"name":"outputSetRef","type":"OutputSet","isVirtual":true,"isMany":true,"isReference":true},{"name":"outputSetWithOptional","type":"OutputSet","isVirtual":true,"isMany":true,"isReference":true},{"name":"outputSetWithWhileExecuting","type":"OutputSet","isVirtual":true,"isMany":true,"isReference":true}]},{"name":"InputSet","superClass":["BaseElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"dataInputRefs","type":"DataInput","isMany":true,"isReference":true},{"name":"optionalInputRefs","type":"DataInput","isMany":true,"isReference":true},{"name":"whileExecutingInputRefs","type":"DataInput","isMany":true,"isReference":true},{"name":"outputSetRefs","type":"OutputSet","isMany":true,"isReference":true}]},{"name":"OutputSet","superClass":["BaseElement"],"properties":[{"name":"dataOutputRefs","type":"DataOutput","isMany":true,"isReference":true},{"name":"name","isAttr":true,"type":"String"},{"name":"inputSetRefs","type":"InputSet","isMany":true,"isReference":true},{"name":"optionalOutputRefs","type":"DataOutput","isMany":true,"isReference":true},{"name":"whileExecutingOutputRefs","type":"DataOutput","isMany":true,"isReference":true}]},{"name":"Property","superClass":["ItemAwareElement"],"properties":[{"name":"name","isAttr":true,"type":"String"}]},{"name":"DataInputAssociation","superClass":["DataAssociation"]},{"name":"DataOutputAssociation","superClass":["DataAssociation"]},{"name":"InputOutputSpecification","superClass":["BaseElement"],"properties":[{"name":"dataInputs","type":"DataInput","isMany":true},{"name":"dataOutputs","type":"DataOutput","isMany":true},{"name":"inputSets","type":"InputSet","isMany":true},{"name":"outputSets","type":"OutputSet","isMany":true}]},{"name":"DataObject","superClass":["FlowElement","ItemAwareElement"],"properties":[{"name":"isCollection","default":false,"isAttr":true,"type":"Boolean"}]},{"name":"InputOutputBinding","properties":[{"name":"inputDataRef","type":"InputSet","isAttr":true,"isReference":true},{"name":"outputDataRef","type":"OutputSet","isAttr":true,"isReference":true},{"name":"operationRef","type":"Operation","isAttr":true,"isReference":true}]},{"name":"Assignment","superClass":["BaseElement"],"properties":[{"name":"from","type":"Expression","xml":{"serialize":"xsi:type"}},{"name":"to","type":"Expression","xml":{"serialize":"xsi:type"}}]},{"name":"DataStore","superClass":["RootElement","ItemAwareElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"capacity","isAttr":true,"type":"Integer"},{"name":"isUnlimited","default":true,"isAttr":true,"type":"Boolean"}]},{"name":"DataStoreReference","superClass":["ItemAwareElement","FlowElement"],"properties":[{"name":"dataStoreRef","type":"DataStore","isAttr":true,"isReference":true}]},{"name":"DataObjectReference","superClass":["ItemAwareElement","FlowElement"],"properties":[{"name":"dataObjectRef","type":"DataObject","isAttr":true,"isReference":true}]},{"name":"ConversationLink","superClass":["BaseElement"],"properties":[{"name":"sourceRef","type":"InteractionNode","isAttr":true,"isReference":true},{"name":"targetRef","type":"InteractionNode","isAttr":true,"isReference":true},{"name":"name","isAttr":true,"type":"String"}]},{"name":"ConversationAssociation","superClass":["BaseElement"],"properties":[{"name":"innerConversationNodeRef","type":"ConversationNode","isAttr":true,"isReference":true},{"name":"outerConversationNodeRef","type":"ConversationNode","isAttr":true,"isReference":true}]},{"name":"CallConversation","superClass":["ConversationNode"],"properties":[{"name":"calledCollaborationRef","type":"Collaboration","isAttr":true,"isReference":true},{"name":"participantAssociations","type":"ParticipantAssociation","isMany":true}]},{"name":"Conversation","superClass":["ConversationNode"]},{"name":"SubConversation","superClass":["ConversationNode"],"properties":[{"name":"conversationNodes","type":"ConversationNode","isMany":true}]},{"name":"ConversationNode","isAbstract":true,"superClass":["InteractionNode","BaseElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"participantRefs","type":"Participant","isMany":true,"isReference":true},{"name":"messageFlowRefs","type":"MessageFlow","isMany":true,"isReference":true},{"name":"correlationKeys","type":"CorrelationKey","isMany":true}]},{"name":"GlobalConversation","superClass":["Collaboration"]},{"name":"PartnerEntity","superClass":["RootElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"participantRef","type":"Participant","isMany":true,"isReference":true}]},{"name":"PartnerRole","superClass":["RootElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"participantRef","type":"Participant","isMany":true,"isReference":true}]},{"name":"CorrelationProperty","superClass":["RootElement"],"properties":[{"name":"correlationPropertyRetrievalExpression","type":"CorrelationPropertyRetrievalExpression","isMany":true},{"name":"name","isAttr":true,"type":"String"},{"name":"type","type":"ItemDefinition","isAttr":true,"isReference":true}]},{"name":"Error","superClass":["RootElement"],"properties":[{"name":"structureRef","type":"ItemDefinition","isAttr":true,"isReference":true},{"name":"name","isAttr":true,"type":"String"},{"name":"errorCode","isAttr":true,"type":"String"}]},{"name":"CorrelationKey","superClass":["BaseElement"],"properties":[{"name":"correlationPropertyRef","type":"CorrelationProperty","isMany":true,"isReference":true},{"name":"name","isAttr":true,"type":"String"}]},{"name":"Expression","superClass":["BaseElement"],"isAbstract":false,"properties":[{"name":"body","type":"String","isBody":true}]},{"name":"FormalExpression","superClass":["Expression"],"properties":[{"name":"language","isAttr":true,"type":"String"},{"name":"evaluatesToTypeRef","type":"ItemDefinition","isAttr":true,"isReference":true}]},{"name":"Message","superClass":["RootElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"itemRef","type":"ItemDefinition","isAttr":true,"isReference":true}]},{"name":"ItemDefinition","superClass":["RootElement"],"properties":[{"name":"itemKind","type":"ItemKind","isAttr":true},{"name":"structureRef","type":"String","isAttr":true},{"name":"isCollection","default":false,"isAttr":true,"type":"Boolean"},{"name":"import","type":"Import","isAttr":true,"isReference":true}]},{"name":"FlowElement","isAbstract":true,"superClass":["BaseElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"auditing","type":"Auditing"},{"name":"monitoring","type":"Monitoring"},{"name":"categoryValueRef","type":"CategoryValue","isMany":true,"isReference":true}]},{"name":"SequenceFlow","superClass":["FlowElement"],"properties":[{"name":"isImmediate","isAttr":true,"type":"Boolean"},{"name":"conditionExpression","type":"Expression","xml":{"serialize":"xsi:type"}},{"name":"sourceRef","type":"FlowNode","isAttr":true,"isReference":true},{"name":"targetRef","type":"FlowNode","isAttr":true,"isReference":true}]},{"name":"FlowElementsContainer","isAbstract":true,"superClass":["BaseElement"],"properties":[{"name":"laneSets","type":"LaneSet","isMany":true},{"name":"flowElements","type":"FlowElement","isMany":true}]},{"name":"CallableElement","isAbstract":true,"superClass":["RootElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"ioSpecification","type":"InputOutputSpecification","xml":{"serialize":"property"}},{"name":"supportedInterfaceRef","type":"Interface","isMany":true,"isReference":true},{"name":"ioBinding","type":"InputOutputBinding","isMany":true,"xml":{"serialize":"property"}}]},{"name":"FlowNode","isAbstract":true,"superClass":["FlowElement"],"properties":[{"name":"incoming","type":"SequenceFlow","isMany":true,"isReference":true},{"name":"outgoing","type":"SequenceFlow","isMany":true,"isReference":true},{"name":"lanes","type":"Lane","isVirtual":true,"isMany":true,"isReference":true}]},{"name":"CorrelationPropertyRetrievalExpression","superClass":["BaseElement"],"properties":[{"name":"messagePath","type":"FormalExpression"},{"name":"messageRef","type":"Message","isAttr":true,"isReference":true}]},{"name":"CorrelationPropertyBinding","superClass":["BaseElement"],"properties":[{"name":"dataPath","type":"FormalExpression"},{"name":"correlationPropertyRef","type":"CorrelationProperty","isAttr":true,"isReference":true}]},{"name":"Resource","superClass":["RootElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"resourceParameters","type":"ResourceParameter","isMany":true}]},{"name":"ResourceParameter","superClass":["BaseElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"isRequired","isAttr":true,"type":"Boolean"},{"name":"type","type":"ItemDefinition","isAttr":true,"isReference":true}]},{"name":"CorrelationSubscription","superClass":["BaseElement"],"properties":[{"name":"correlationKeyRef","type":"CorrelationKey","isAttr":true,"isReference":true},{"name":"correlationPropertyBinding","type":"CorrelationPropertyBinding","isMany":true}]},{"name":"MessageFlow","superClass":["BaseElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"sourceRef","type":"InteractionNode","isAttr":true,"isReference":true},{"name":"targetRef","type":"InteractionNode","isAttr":true,"isReference":true},{"name":"messageRef","type":"Message","isAttr":true,"isReference":true}]},{"name":"MessageFlowAssociation","superClass":["BaseElement"],"properties":[{"name":"innerMessageFlowRef","type":"MessageFlow","isAttr":true,"isReference":true},{"name":"outerMessageFlowRef","type":"MessageFlow","isAttr":true,"isReference":true}]},{"name":"InteractionNode","isAbstract":true,"properties":[{"name":"incomingConversationLinks","type":"ConversationLink","isVirtual":true,"isMany":true,"isReference":true},{"name":"outgoingConversationLinks","type":"ConversationLink","isVirtual":true,"isMany":true,"isReference":true}]},{"name":"Participant","superClass":["InteractionNode","BaseElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"interfaceRef","type":"Interface","isMany":true,"isReference":true},{"name":"participantMultiplicity","type":"ParticipantMultiplicity"},{"name":"endPointRefs","type":"EndPoint","isMany":true,"isReference":true},{"name":"processRef","type":"Process","isAttr":true,"isReference":true}]},{"name":"ParticipantAssociation","superClass":["BaseElement"],"properties":[{"name":"innerParticipantRef","type":"Participant","isAttr":true,"isReference":true},{"name":"outerParticipantRef","type":"Participant","isAttr":true,"isReference":true}]},{"name":"ParticipantMultiplicity","properties":[{"name":"minimum","default":0,"isAttr":true,"type":"Integer"},{"name":"maximum","default":1,"isAttr":true,"type":"Integer"}],"superClass":["BaseElement"]},{"name":"Collaboration","superClass":["RootElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"isClosed","isAttr":true,"type":"Boolean"},{"name":"participants","type":"Participant","isMany":true},{"name":"messageFlows","type":"MessageFlow","isMany":true},{"name":"artifacts","type":"Artifact","isMany":true},{"name":"conversations","type":"ConversationNode","isMany":true},{"name":"conversationAssociations","type":"ConversationAssociation"},{"name":"participantAssociations","type":"ParticipantAssociation","isMany":true},{"name":"messageFlowAssociations","type":"MessageFlowAssociation","isMany":true},{"name":"correlationKeys","type":"CorrelationKey","isMany":true},{"name":"choreographyRef","type":"Choreography","isMany":true,"isReference":true},{"name":"conversationLinks","type":"ConversationLink","isMany":true}]},{"name":"ChoreographyActivity","isAbstract":true,"superClass":["FlowNode"],"properties":[{"name":"participantRefs","type":"Participant","isMany":true,"isReference":true},{"name":"initiatingParticipantRef","type":"Participant","isAttr":true,"isReference":true},{"name":"correlationKeys","type":"CorrelationKey","isMany":true},{"name":"loopType","type":"ChoreographyLoopType","default":"None","isAttr":true}]},{"name":"CallChoreography","superClass":["ChoreographyActivity"],"properties":[{"name":"calledChoreographyRef","type":"Choreography","isAttr":true,"isReference":true},{"name":"participantAssociations","type":"ParticipantAssociation","isMany":true}]},{"name":"SubChoreography","superClass":["ChoreographyActivity","FlowElementsContainer"],"properties":[{"name":"artifacts","type":"Artifact","isMany":true}]},{"name":"ChoreographyTask","superClass":["ChoreographyActivity"],"properties":[{"name":"messageFlowRef","type":"MessageFlow","isMany":true,"isReference":true}]},{"name":"Choreography","superClass":["FlowElementsContainer","Collaboration"]},{"name":"GlobalChoreographyTask","superClass":["Choreography"],"properties":[{"name":"initiatingParticipantRef","type":"Participant","isAttr":true,"isReference":true}]},{"name":"TextAnnotation","superClass":["Artifact"],"properties":[{"name":"text","type":"String"},{"name":"textFormat","default":"text/plain","isAttr":true,"type":"String"}]},{"name":"Group","superClass":["Artifact"],"properties":[{"name":"categoryValueRef","type":"CategoryValue","isAttr":true,"isReference":true}]},{"name":"Association","superClass":["Artifact"],"properties":[{"name":"associationDirection","type":"AssociationDirection","isAttr":true},{"name":"sourceRef","type":"BaseElement","isAttr":true,"isReference":true},{"name":"targetRef","type":"BaseElement","isAttr":true,"isReference":true}]},{"name":"Category","superClass":["RootElement"],"properties":[{"name":"categoryValue","type":"CategoryValue","isMany":true},{"name":"name","isAttr":true,"type":"String"}]},{"name":"Artifact","isAbstract":true,"superClass":["BaseElement"]},{"name":"CategoryValue","superClass":["BaseElement"],"properties":[{"name":"categorizedFlowElements","type":"FlowElement","isVirtual":true,"isMany":true,"isReference":true},{"name":"value","isAttr":true,"type":"String"}]},{"name":"Activity","isAbstract":true,"superClass":["FlowNode"],"properties":[{"name":"isForCompensation","default":false,"isAttr":true,"type":"Boolean"},{"name":"default","type":"SequenceFlow","isAttr":true,"isReference":true},{"name":"ioSpecification","type":"InputOutputSpecification","xml":{"serialize":"property"}},{"name":"boundaryEventRefs","type":"BoundaryEvent","isMany":true,"isReference":true},{"name":"properties","type":"Property","isMany":true},{"name":"dataInputAssociations","type":"DataInputAssociation","isMany":true},{"name":"dataOutputAssociations","type":"DataOutputAssociation","isMany":true},{"name":"startQuantity","default":1,"isAttr":true,"type":"Integer"},{"name":"resources","type":"ResourceRole","isMany":true},{"name":"completionQuantity","default":1,"isAttr":true,"type":"Integer"},{"name":"loopCharacteristics","type":"LoopCharacteristics"}]},{"name":"ServiceTask","superClass":["Task"],"properties":[{"name":"implementation","isAttr":true,"type":"String"},{"name":"operationRef","type":"Operation","isAttr":true,"isReference":true}]},{"name":"SubProcess","superClass":["Activity","FlowElementsContainer","InteractionNode"],"properties":[{"name":"triggeredByEvent","default":false,"isAttr":true,"type":"Boolean"},{"name":"artifacts","type":"Artifact","isMany":true}]},{"name":"LoopCharacteristics","isAbstract":true,"superClass":["BaseElement"]},{"name":"MultiInstanceLoopCharacteristics","superClass":["LoopCharacteristics"],"properties":[{"name":"isSequential","default":false,"isAttr":true,"type":"Boolean"},{"name":"behavior","type":"MultiInstanceBehavior","default":"All","isAttr":true},{"name":"loopCardinality","type":"Expression","xml":{"serialize":"xsi:type"}},{"name":"loopDataInputRef","type":"ItemAwareElement","isReference":true},{"name":"loopDataOutputRef","type":"ItemAwareElement","isReference":true},{"name":"inputDataItem","type":"DataInput","xml":{"serialize":"property"}},{"name":"outputDataItem","type":"DataOutput","xml":{"serialize":"property"}},{"name":"complexBehaviorDefinition","type":"ComplexBehaviorDefinition","isMany":true},{"name":"completionCondition","type":"Expression","xml":{"serialize":"xsi:type"}},{"name":"oneBehaviorEventRef","type":"EventDefinition","isAttr":true,"isReference":true},{"name":"noneBehaviorEventRef","type":"EventDefinition","isAttr":true,"isReference":true}]},{"name":"StandardLoopCharacteristics","superClass":["LoopCharacteristics"],"properties":[{"name":"testBefore","default":false,"isAttr":true,"type":"Boolean"},{"name":"loopCondition","type":"Expression","xml":{"serialize":"xsi:type"}},{"name":"loopMaximum","type":"Expression","xml":{"serialize":"xsi:type"}}]},{"name":"CallActivity","superClass":["Activity"],"properties":[{"name":"calledElement","type":"String","isAttr":true}]},{"name":"Task","superClass":["Activity","InteractionNode"]},{"name":"SendTask","superClass":["Task"],"properties":[{"name":"implementation","isAttr":true,"type":"String"},{"name":"operationRef","type":"Operation","isAttr":true,"isReference":true},{"name":"messageRef","type":"Message","isAttr":true,"isReference":true}]},{"name":"ReceiveTask","superClass":["Task"],"properties":[{"name":"implementation","isAttr":true,"type":"String"},{"name":"instantiate","default":false,"isAttr":true,"type":"Boolean"},{"name":"operationRef","type":"Operation","isAttr":true,"isReference":true},{"name":"messageRef","type":"Message","isAttr":true,"isReference":true}]},{"name":"ScriptTask","superClass":["Task"],"properties":[{"name":"scriptFormat","isAttr":true,"type":"String"},{"name":"script","type":"String"}]},{"name":"BusinessRuleTask","superClass":["Task"],"properties":[{"name":"implementation","isAttr":true,"type":"String"}]},{"name":"AdHocSubProcess","superClass":["SubProcess"],"properties":[{"name":"completionCondition","type":"Expression","xml":{"serialize":"xsi:type"}},{"name":"ordering","type":"AdHocOrdering","isAttr":true},{"name":"cancelRemainingInstances","default":true,"isAttr":true,"type":"Boolean"}]},{"name":"Transaction","superClass":["SubProcess"],"properties":[{"name":"protocol","isAttr":true,"type":"String"},{"name":"method","isAttr":true,"type":"String"}]},{"name":"GlobalScriptTask","superClass":["GlobalTask"],"properties":[{"name":"scriptLanguage","isAttr":true,"type":"String"},{"name":"script","isAttr":true,"type":"String"}]},{"name":"GlobalBusinessRuleTask","superClass":["GlobalTask"],"properties":[{"name":"implementation","isAttr":true,"type":"String"}]},{"name":"ComplexBehaviorDefinition","superClass":["BaseElement"],"properties":[{"name":"condition","type":"FormalExpression"},{"name":"event","type":"ImplicitThrowEvent"}]},{"name":"ResourceRole","superClass":["BaseElement"],"properties":[{"name":"resourceRef","type":"Resource","isReference":true},{"name":"resourceParameterBindings","type":"ResourceParameterBinding","isMany":true},{"name":"resourceAssignmentExpression","type":"ResourceAssignmentExpression"},{"name":"name","isAttr":true,"type":"String"}]},{"name":"ResourceParameterBinding","properties":[{"name":"expression","type":"Expression","xml":{"serialize":"xsi:type"}},{"name":"parameterRef","type":"ResourceParameter","isAttr":true,"isReference":true}],"superClass":["BaseElement"]},{"name":"ResourceAssignmentExpression","properties":[{"name":"expression","type":"Expression","xml":{"serialize":"xsi:type"}}],"superClass":["BaseElement"]},{"name":"Import","properties":[{"name":"importType","isAttr":true,"type":"String"},{"name":"location","isAttr":true,"type":"String"},{"name":"namespace","isAttr":true,"type":"String"}]},{"name":"Definitions","superClass":["BaseElement"],"properties":[{"name":"name","isAttr":true,"type":"String"},{"name":"targetNamespace","isAttr":true,"type":"String"},{"name":"expressionLanguage","default":"http://www.w3.org/1999/XPath","isAttr":true,"type":"String"},{"name":"typeLanguage","default":"http://www.w3.org/2001/XMLSchema","isAttr":true,"type":"String"},{"name":"imports","type":"Import","isMany":true},{"name":"extensions","type":"Extension","isMany":true},{"name":"rootElements","type":"RootElement","isMany":true},{"name":"diagrams","isMany":true,"type":"bpmndi:BPMNDiagram"},{"name":"exporter","isAttr":true,"type":"String"},{"name":"relationships","type":"Relationship","isMany":true},{"name":"exporterVersion","isAttr":true,"type":"String"}]}],"enumerations":[{"name":"ProcessType","literalValues":[{"name":"None"},{"name":"Public"},{"name":"Private"}]},{"name":"GatewayDirection","literalValues":[{"name":"Unspecified"},{"name":"Converging"},{"name":"Diverging"},{"name":"Mixed"}]},{"name":"EventBasedGatewayType","literalValues":[{"name":"Parallel"},{"name":"Exclusive"}]},{"name":"RelationshipDirection","literalValues":[{"name":"None"},{"name":"Forward"},{"name":"Backward"},{"name":"Both"}]},{"name":"ItemKind","literalValues":[{"name":"Physical"},{"name":"Information"}]},{"name":"ChoreographyLoopType","literalValues":[{"name":"None"},{"name":"Standard"},{"name":"MultiInstanceSequential"},{"name":"MultiInstanceParallel"}]},{"name":"AssociationDirection","literalValues":[{"name":"None"},{"name":"One"},{"name":"Both"}]},{"name":"MultiInstanceBehavior","literalValues":[{"name":"None"},{"name":"One"},{"name":"All"},{"name":"Complex"}]},{"name":"AdHocOrdering","literalValues":[{"name":"Parallel"},{"name":"Sequential"}]}],"prefix":"bpmn","xml":{"tagAlias":"lowerCase","typePrefix":"t"}}

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

module.exports = {"name":"BPMNDI","uri":"http://www.omg.org/spec/BPMN/20100524/DI","types":[{"name":"BPMNDiagram","properties":[{"name":"plane","type":"BPMNPlane","redefines":"di:Diagram#rootElement"},{"name":"labelStyle","type":"BPMNLabelStyle","isMany":true}],"superClass":["di:Diagram"]},{"name":"BPMNPlane","properties":[{"name":"bpmnElement","isAttr":true,"isReference":true,"type":"bpmn:BaseElement","redefines":"di:DiagramElement#modelElement"}],"superClass":["di:Plane"]},{"name":"BPMNShape","properties":[{"name":"bpmnElement","isAttr":true,"isReference":true,"type":"bpmn:BaseElement","redefines":"di:DiagramElement#modelElement"},{"name":"isHorizontal","isAttr":true,"type":"Boolean"},{"name":"isExpanded","isAttr":true,"type":"Boolean"},{"name":"isMarkerVisible","isAttr":true,"type":"Boolean"},{"name":"label","type":"BPMNLabel"},{"name":"isMessageVisible","isAttr":true,"type":"Boolean"},{"name":"participantBandKind","type":"ParticipantBandKind","isAttr":true},{"name":"choreographyActivityShape","type":"BPMNShape","isAttr":true,"isReference":true}],"superClass":["di:LabeledShape"]},{"name":"BPMNEdge","properties":[{"name":"label","type":"BPMNLabel"},{"name":"bpmnElement","isAttr":true,"isReference":true,"type":"bpmn:BaseElement","redefines":"di:DiagramElement#modelElement"},{"name":"sourceElement","isAttr":true,"isReference":true,"type":"di:DiagramElement","redefines":"di:Edge#source"},{"name":"targetElement","isAttr":true,"isReference":true,"type":"di:DiagramElement","redefines":"di:Edge#target"},{"name":"messageVisibleKind","type":"MessageVisibleKind","isAttr":true,"default":"initiating"}],"superClass":["di:LabeledEdge"]},{"name":"BPMNLabel","properties":[{"name":"labelStyle","type":"BPMNLabelStyle","isAttr":true,"isReference":true,"redefines":"di:DiagramElement#style"}],"superClass":["di:Label"]},{"name":"BPMNLabelStyle","properties":[{"name":"font","type":"dc:Font"}],"superClass":["di:Style"]}],"enumerations":[{"name":"ParticipantBandKind","literalValues":[{"name":"top_initiating"},{"name":"middle_initiating"},{"name":"bottom_initiating"},{"name":"top_non_initiating"},{"name":"middle_non_initiating"},{"name":"bottom_non_initiating"}]},{"name":"MessageVisibleKind","literalValues":[{"name":"initiating"},{"name":"non_initiating"}]}],"associations":[],"prefix":"bpmndi"}

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

module.exports = {"name":"DC","uri":"http://www.omg.org/spec/DD/20100524/DC","types":[{"name":"Boolean"},{"name":"Integer"},{"name":"Real"},{"name":"String"},{"name":"Font","properties":[{"name":"name","type":"String","isAttr":true},{"name":"size","type":"Real","isAttr":true},{"name":"isBold","type":"Boolean","isAttr":true},{"name":"isItalic","type":"Boolean","isAttr":true},{"name":"isUnderline","type":"Boolean","isAttr":true},{"name":"isStrikeThrough","type":"Boolean","isAttr":true}]},{"name":"Point","properties":[{"name":"x","type":"Real","default":"0","isAttr":true},{"name":"y","type":"Real","default":"0","isAttr":true}]},{"name":"Bounds","properties":[{"name":"x","type":"Real","default":"0","isAttr":true},{"name":"y","type":"Real","default":"0","isAttr":true},{"name":"width","type":"Real","isAttr":true},{"name":"height","type":"Real","isAttr":true}]}],"prefix":"dc","associations":[]}

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

module.exports = {"name":"DI","uri":"http://www.omg.org/spec/DD/20100524/DI","types":[{"name":"DiagramElement","isAbstract":true,"properties":[{"name":"id","type":"String","isAttr":true,"isId":true},{"name":"extension","type":"Extension"},{"name":"owningDiagram","type":"Diagram","isReadOnly":true,"isVirtual":true,"isReference":true},{"name":"owningElement","type":"DiagramElement","isReadOnly":true,"isVirtual":true,"isReference":true},{"name":"modelElement","isReadOnly":true,"isVirtual":true,"isReference":true,"type":"Element"},{"name":"style","type":"Style","isReadOnly":true,"isVirtual":true,"isReference":true},{"name":"ownedElement","type":"DiagramElement","isReadOnly":true,"isVirtual":true,"isMany":true}]},{"name":"Node","isAbstract":true,"superClass":["DiagramElement"]},{"name":"Edge","isAbstract":true,"superClass":["DiagramElement"],"properties":[{"name":"source","type":"DiagramElement","isReadOnly":true,"isVirtual":true,"isReference":true},{"name":"target","type":"DiagramElement","isReadOnly":true,"isVirtual":true,"isReference":true},{"name":"waypoint","isUnique":false,"isMany":true,"type":"dc:Point","xml":{"serialize":"xsi:type"}}]},{"name":"Diagram","isAbstract":true,"properties":[{"name":"id","type":"String","isAttr":true,"isId":true},{"name":"rootElement","type":"DiagramElement","isReadOnly":true,"isVirtual":true},{"name":"name","isAttr":true,"type":"String"},{"name":"documentation","isAttr":true,"type":"String"},{"name":"resolution","isAttr":true,"type":"Real"},{"name":"ownedStyle","type":"Style","isReadOnly":true,"isVirtual":true,"isMany":true}]},{"name":"Shape","isAbstract":true,"superClass":["Node"],"properties":[{"name":"bounds","type":"dc:Bounds"}]},{"name":"Plane","isAbstract":true,"superClass":["Node"],"properties":[{"name":"planeElement","type":"DiagramElement","subsettedProperty":"DiagramElement-ownedElement","isMany":true}]},{"name":"LabeledEdge","isAbstract":true,"superClass":["Edge"],"properties":[{"name":"ownedLabel","type":"Label","isReadOnly":true,"subsettedProperty":"DiagramElement-ownedElement","isVirtual":true,"isMany":true}]},{"name":"LabeledShape","isAbstract":true,"superClass":["Shape"],"properties":[{"name":"ownedLabel","type":"Label","isReadOnly":true,"subsettedProperty":"DiagramElement-ownedElement","isVirtual":true,"isMany":true}]},{"name":"Label","isAbstract":true,"superClass":["Node"],"properties":[{"name":"bounds","type":"dc:Bounds"}]},{"name":"Style","isAbstract":true,"properties":[{"name":"id","type":"String","isAttr":true,"isId":true}]},{"name":"Extension","properties":[{"name":"values","type":"Element","isMany":true}]}],"associations":[],"prefix":"di","xml":{"tagAlias":"lowerCase"}}

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
exports.push([module.i, "\n.svg_canvas {\n    background: #FFFFFF;\n}\n", ""]);

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
exports.push([module.i, "\n.dropzone-area { width: 80%; height: 200px; position: relative; border: 2px dashed #CBCBCB;\n}\n.dropzone-area:hover { border: 2px dashed #2E94C4;\n}\n.dropzone-area:hover .dropzone-title { color: #1975A0;\n}\n.dropzone-area input { position: absolute; cursor: pointer; top: 0px; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; opacity: 0;\n}\n.dropzone-text { position: absolute; top: 50%; text-align: center; transform: translate(0, -50%); width: 100%;\n}\n.dropzone-text span { display: block; font-family: Arial, Helvetica; line-height: 1.9;\n}\n.dropzone-title { font-size: 13px; color: #787878; letter-spacing: 0.4px;\n}\n.dropzone-info { font-size: 13px; font-size: 0.8125rem; color: #A8A8A8; letter-spacing: 0.4px;\n}\n.dropzone-button { position: absolute; top: 10px; right: 10px; display: none;\n}\n.dropzone-preview { width: 80%; position: relative;\n}\n.dropzone-preview:hover .dropzone-button { display: block;\n}\n.dropzone-preview img { display: block; height: auto; max-width: 100%;\n}\n", ""]);

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
exports.push([module.i, "\n.actions-toolbar {\n    position: absolute;\n    top: 80px;\n    left: 100px;\n    z-index: 100;\n}\n", ""]);

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*** IMPORTS FROM imports-loader ***/
(function() {
var fix = module.exports=0;

// Snap.svg 0.5.0
//
// Copyright (c) 2013 – 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2017-02-06

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ┌────────────────────────────────────────────────────────────┐ \\
// │ Eve 0.5.0 - JavaScript Events Library                      │ \\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
// └────────────────────────────────────────────────────────────┘ \\

(function (glob) {
    var version = "0.5.0",
        has = "hasOwnProperty",
        separator = /[\.\/]/,
        comaseparator = /\s*,\s*/,
        wildcard = "*",
        fun = function () {},
        numsort = function (a, b) {
            return a - b;
        },
        current_event,
        stop,
        events = {n: {}},
        firstDefined = function () {
            for (var i = 0, ii = this.length; i < ii; i++) {
                if (typeof this[i] != "undefined") {
                    return this[i];
                }
            }
        },
        lastDefined = function () {
            var i = this.length;
            while (--i) {
                if (typeof this[i] != "undefined") {
                    return this[i];
                }
            }
        },
        objtos = Object.prototype.toString,
        Str = String,
        isArray = Array.isArray || function (ar) {
            return ar instanceof Array || objtos.call(ar) == "[object Array]";
        };
    /*\
     * eve
     [ method ]

     * Fires event with given `name`, given scope and other parameters.

     > Arguments

     - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
     - scope (object) context for the event handlers
     - varargs (...) the rest of arguments will be sent to event handlers

     = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
    \*/
        eve = function (name, scope) {
            var e = events,
                oldstop = stop,
                args = Array.prototype.slice.call(arguments, 2),
                listeners = eve.listeners(name),
                z = 0,
                f = false,
                l,
                indexed = [],
                queue = {},
                out = [],
                ce = current_event,
                errors = [];
            out.firstDefined = firstDefined;
            out.lastDefined = lastDefined;
            current_event = name;
            stop = 0;
            for (var i = 0, ii = listeners.length; i < ii; i++) if ("zIndex" in listeners[i]) {
                indexed.push(listeners[i].zIndex);
                if (listeners[i].zIndex < 0) {
                    queue[listeners[i].zIndex] = listeners[i];
                }
            }
            indexed.sort(numsort);
            while (indexed[z] < 0) {
                l = queue[indexed[z++]];
                out.push(l.apply(scope, args));
                if (stop) {
                    stop = oldstop;
                    return out;
                }
            }
            for (i = 0; i < ii; i++) {
                l = listeners[i];
                if ("zIndex" in l) {
                    if (l.zIndex == indexed[z]) {
                        out.push(l.apply(scope, args));
                        if (stop) {
                            break;
                        }
                        do {
                            z++;
                            l = queue[indexed[z]];
                            l && out.push(l.apply(scope, args));
                            if (stop) {
                                break;
                            }
                        } while (l)
                    } else {
                        queue[l.zIndex] = l;
                    }
                } else {
                    out.push(l.apply(scope, args));
                    if (stop) {
                        break;
                    }
                }
            }
            stop = oldstop;
            current_event = ce;
            return out;
        };
        // Undocumented. Debug only.
        eve._events = events;
    /*\
     * eve.listeners
     [ method ]

     * Internal method which gives you array of all event handlers that will be triggered by the given `name`.

     > Arguments

     - name (string) name of the event, dot (`.`) or slash (`/`) separated

     = (array) array of event handlers
    \*/
    eve.listeners = function (name) {
        var names = isArray(name) ? name : name.split(separator),
            e = events,
            item,
            items,
            k,
            i,
            ii,
            j,
            jj,
            nes,
            es = [e],
            out = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            nes = [];
            for (j = 0, jj = es.length; j < jj; j++) {
                e = es[j].n;
                items = [e[names[i]], e[wildcard]];
                k = 2;
                while (k--) {
                    item = items[k];
                    if (item) {
                        nes.push(item);
                        out = out.concat(item.f || []);
                    }
                }
            }
            es = nes;
        }
        return out;
    };
    /*\
     * eve.separator
     [ method ]

     * If for some reasons you don’t like default separators (`.` or `/`) you can specify yours
     * here. Be aware that if you pass a string longer than one character it will be treated as
     * a list of characters.

     - separator (string) new separator. Empty string resets to default: `.` or `/`.
    \*/
    eve.separator = function (sep) {
        if (sep) {
            sep = Str(sep).replace(/(?=[\.\^\]\[\-])/g, "\\");
            sep = "[" + sep + "]";
            separator = new RegExp(sep);
        } else {
            separator = /[\.\/]/;
        }
    };
    /*\
     * eve.on
     [ method ]
     **
     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
     | eve.on("*.under.*", f);
     | eve("mouse.under.floor"); // triggers f
     * Use @eve to trigger the listener.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     - name (array) if you don’t want to use separators, you can use array of strings
     - f (function) event handler function
     **
     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment. 
     > Example:
     | eve.on("mouse", eatIt)(2);
     | eve.on("mouse", scream);
     | eve.on("mouse", catchIt)(1);
     * This will ensure that `catchIt` function will be called before `eatIt`.
     *
     * If you want to put your handler before non-indexed handlers, specify a negative value.
     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
    \*/
    eve.on = function (name, f) {
        if (typeof f != "function") {
            return function () {};
        }
        var names = isArray(name) ? (isArray(name[0]) ? name : [name]) : Str(name).split(comaseparator);
        for (var i = 0, ii = names.length; i < ii; i++) {
            (function (name) {
                var names = isArray(name) ? name : Str(name).split(separator),
                    e = events,
                    exist;
                for (var i = 0, ii = names.length; i < ii; i++) {
                    e = e.n;
                    e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {n: {}});
                }
                e.f = e.f || [];
                for (i = 0, ii = e.f.length; i < ii; i++) if (e.f[i] == f) {
                    exist = true;
                    break;
                }
                !exist && e.f.push(f);
            }(names[i]));
        }
        return function (zIndex) {
            if (+zIndex == +zIndex) {
                f.zIndex = +zIndex;
            }
        };
    };
    /*\
     * eve.f
     [ method ]
     **
     * Returns function that will fire given event with optional arguments.
     * Arguments that will be passed to the result function will be also
     * concated to the list of final arguments.
     | el.onclick = eve.f("click", 1, 2);
     | eve.on("click", function (a, b, c) {
     |     console.log(a, b, c); // 1, 2, [event object]
     | });
     > Arguments
     - event (string) event name
     - varargs (…) and any other arguments
     = (function) possible event handler function
    \*/
    eve.f = function (event) {
        var attrs = [].slice.call(arguments, 1);
        return function () {
            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
        };
    };
    /*\
     * eve.stop
     [ method ]
     **
     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
    \*/
    eve.stop = function () {
        stop = 1;
    };
    /*\
     * eve.nt
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     > Arguments
     **
     - subname (string) #optional subname of the event
     **
     = (string) name of the event, if `subname` is not specified
     * or
     = (boolean) `true`, if current event’s name contains `subname`
    \*/
    eve.nt = function (subname) {
        var cur = isArray(current_event) ? current_event.join(".") : current_event;
        if (subname) {
            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(cur);
        }
        return cur;
    };
    /*\
     * eve.nts
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     **
     = (array) names of the event
    \*/
    eve.nts = function () {
        return isArray(current_event) ? current_event : current_event.split(separator);
    };
    /*\
     * eve.off
     [ method ]
     **
     * Removes given function from the list of event listeners assigned to given name.
     * If no arguments specified all the events will be cleared.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
    \*/
    /*\
     * eve.unbind
     [ method ]
     **
     * See @eve.off
    \*/
    eve.off = eve.unbind = function (name, f) {
        if (!name) {
            eve._events = events = {n: {}};
            return;
        }
        var names = isArray(name) ? (isArray(name[0]) ? name : [name]) : Str(name).split(comaseparator);
        if (names.length > 1) {
            for (var i = 0, ii = names.length; i < ii; i++) {
                eve.off(names[i], f);
            }
            return;
        }
        names = isArray(name) ? name : Str(name).split(separator);
        var e,
            key,
            splice,
            i, ii, j, jj,
            cur = [events],
            inodes = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            for (j = 0; j < cur.length; j += splice.length - 2) {
                splice = [j, 1];
                e = cur[j].n;
                if (names[i] != wildcard) {
                    if (e[names[i]]) {
                        splice.push(e[names[i]]);
                        inodes.unshift({
                            n: e,
                            name: names[i]
                        });
                    }
                } else {
                    for (key in e) if (e[has](key)) {
                        splice.push(e[key]);
                        inodes.unshift({
                            n: e,
                            name: key
                        });
                    }
                }
                cur.splice.apply(cur, splice);
            }
        }
        for (i = 0, ii = cur.length; i < ii; i++) {
            e = cur[i];
            while (e.n) {
                if (f) {
                    if (e.f) {
                        for (j = 0, jj = e.f.length; j < jj; j++) if (e.f[j] == f) {
                            e.f.splice(j, 1);
                            break;
                        }
                        !e.f.length && delete e.f;
                    }
                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                        var funcs = e.n[key].f;
                        for (j = 0, jj = funcs.length; j < jj; j++) if (funcs[j] == f) {
                            funcs.splice(j, 1);
                            break;
                        }
                        !funcs.length && delete e.n[key].f;
                    }
                } else {
                    delete e.f;
                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                        delete e.n[key].f;
                    }
                }
                e = e.n;
            }
        }
        // prune inner nodes in path
        prune: for (i = 0, ii = inodes.length; i < ii; i++) {
            e = inodes[i];
            for (key in e.n[e.name].f) {
                // not empty (has listeners)
                continue prune;
            }
            for (key in e.n[e.name].n) {
                // not empty (has children)
                continue prune;
            }
            // is empty
            delete e.n[e.name];
        }
    };
    /*\
     * eve.once
     [ method ]
     **
     * Binds given event handler with a given name to only run once then unbind itself.
     | eve.once("login", f);
     | eve("login"); // triggers f
     | eve("login"); // no listeners
     * Use @eve to trigger the listener.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) same return function as @eve.on
    \*/
    eve.once = function (name, f) {
        var f2 = function () {
            eve.off(name, f2);
            return f.apply(this, arguments);
        };
        return eve.on(name, f2);
    };
    /*\
     * eve.version
     [ property (string) ]
     **
     * Current version of the library.
    \*/
    eve.version = version;
    eve.toString = function () {
        return "You are running Eve " + version;
    };
    (typeof module != "undefined" && module.exports) ? (module.exports = eve) : ( true ? (!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_0__ = (function() { return eve; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)))) : (glob.eve = eve));
})(this);

(function (glob, factory) {
    // AMD support
    if (true) {
        // Define as an anonymous module
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_RESULT__ = function (eve) {
            return factory(glob, eve);
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports != "undefined") {
        // Next for Node.js or CommonJS
        var eve = require("eve");
        module.exports = factory(glob, eve);
    } else {
        // Browser globals (glob is window)
        // Snap adds itself to window
        factory(glob, glob.eve);
    }
}(window || this, function (window, eve) {

// Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var mina = (function (eve) {
    var animations = {},
    requestAnimFrame = window.requestAnimationFrame       ||
                       window.webkitRequestAnimationFrame ||
                       window.mozRequestAnimationFrame    ||
                       window.oRequestAnimationFrame      ||
                       window.msRequestAnimationFrame     ||
                       function (callback) {
                           setTimeout(callback, 16, new Date().getTime());
                           return true;
                       },
    requestID,
    isArray = Array.isArray || function (a) {
        return a instanceof Array ||
            Object.prototype.toString.call(a) == "[object Array]";
    },
    idgen = 0,
    idprefix = "M" + (+new Date).toString(36),
    ID = function () {
        return idprefix + (idgen++).toString(36);
    },
    diff = function (a, b, A, B) {
        if (isArray(a)) {
            res = [];
            for (var i = 0, ii = a.length; i < ii; i++) {
                res[i] = diff(a[i], b, A[i], B);
            }
            return res;
        }
        var dif = (A - a) / (B - b);
        return function (bb) {
            return a + dif * (bb - b);
        };
    },
    timer = Date.now || function () {
        return +new Date;
    },
    sta = function (val) {
        var a = this;
        if (val == null) {
            return a.s;
        }
        var ds = a.s - val;
        a.b += a.dur * ds;
        a.B += a.dur * ds;
        a.s = val;
    },
    speed = function (val) {
        var a = this;
        if (val == null) {
            return a.spd;
        }
        a.spd = val;
    },
    duration = function (val) {
        var a = this;
        if (val == null) {
            return a.dur;
        }
        a.s = a.s * val / a.dur;
        a.dur = val;
    },
    stopit = function () {
        var a = this;
        delete animations[a.id];
        a.update();
        eve("mina.stop." + a.id, a);
    },
    pause = function () {
        var a = this;
        if (a.pdif) {
            return;
        }
        delete animations[a.id];
        a.update();
        a.pdif = a.get() - a.b;
    },
    resume = function () {
        var a = this;
        if (!a.pdif) {
            return;
        }
        a.b = a.get() - a.pdif;
        delete a.pdif;
        animations[a.id] = a;
        frame();
    },
    update = function () {
        var a = this,
            res;
        if (isArray(a.start)) {
            res = [];
            for (var j = 0, jj = a.start.length; j < jj; j++) {
                res[j] = +a.start[j] +
                    (a.end[j] - a.start[j]) * a.easing(a.s);
            }
        } else {
            res = +a.start + (a.end - a.start) * a.easing(a.s);
        }
        a.set(res);
    },
    frame = function (timeStamp) {
        // Manual invokation?
        if (!timeStamp) {
            // Frame loop stopped?
            if (!requestID) {
                // Start frame loop...
                requestID = requestAnimFrame(frame);
            }
            return;
        }
        var len = 0;
        for (var i in animations) if (animations.hasOwnProperty(i)) {
            var a = animations[i],
                b = a.get(),
                res;
            len++;
            a.s = (b - a.b) / (a.dur / a.spd);
            if (a.s >= 1) {
                delete animations[i];
                a.s = 1;
                len--;
                (function (a) {
                    setTimeout(function () {
                        eve("mina.finish." + a.id, a);
                    });
                }(a));
            }
            a.update();
        }
        requestID = len ? requestAnimFrame(frame) : false;
    },
    /*\
     * mina
     [ method ]
     **
     * Generic animation of numbers
     **
     - a (number) start _slave_ number
     - A (number) end _slave_ number
     - b (number) start _master_ number (start time in general case)
     - B (number) end _master_ number (end time in general case)
     - get (function) getter of _master_ number (see @mina.time)
     - set (function) setter of _slave_ number
     - easing (function) #optional easing function, default is @mina.linear
     = (object) animation descriptor
     o {
     o         id (string) animation id,
     o         start (number) start _slave_ number,
     o         end (number) end _slave_ number,
     o         b (number) start _master_ number,
     o         s (number) animation status (0..1),
     o         dur (number) animation duration,
     o         spd (number) animation speed,
     o         get (function) getter of _master_ number (see @mina.time),
     o         set (function) setter of _slave_ number,
     o         easing (function) easing function, default is @mina.linear,
     o         status (function) status getter/setter,
     o         speed (function) speed getter/setter,
     o         duration (function) duration getter/setter,
     o         stop (function) animation stopper
     o         pause (function) pauses the animation
     o         resume (function) resumes the animation
     o         update (function) calles setter with the right value of the animation
     o }
    \*/
    mina = function (a, A, b, B, get, set, easing) {
        var anim = {
            id: ID(),
            start: a,
            end: A,
            b: b,
            s: 0,
            dur: B - b,
            spd: 1,
            get: get,
            set: set,
            easing: easing || mina.linear,
            status: sta,
            speed: speed,
            duration: duration,
            stop: stopit,
            pause: pause,
            resume: resume,
            update: update
        };
        animations[anim.id] = anim;
        var len = 0, i;
        for (i in animations) if (animations.hasOwnProperty(i)) {
            len++;
            if (len == 2) {
                break;
            }
        }
        len == 1 && frame();
        return anim;
    };
    /*\
     * mina.time
     [ method ]
     **
     * Returns the current time. Equivalent to:
     | function () {
     |     return (new Date).getTime();
     | }
    \*/
    mina.time = timer;
    /*\
     * mina.getById
     [ method ]
     **
     * Returns an animation by its id
     - id (string) animation's id
     = (object) See @mina
    \*/
    mina.getById = function (id) {
        return animations[id] || null;
    };

    /*\
     * mina.linear
     [ method ]
     **
     * Default linear easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.linear = function (n) {
        return n;
    };
    /*\
     * mina.easeout
     [ method ]
     **
     * Easeout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easeout = function (n) {
        return Math.pow(n, 1.7);
    };
    /*\
     * mina.easein
     [ method ]
     **
     * Easein easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easein = function (n) {
        return Math.pow(n, .48);
    };
    /*\
     * mina.easeinout
     [ method ]
     **
     * Easeinout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easeinout = function (n) {
        if (n == 1) {
            return 1;
        }
        if (n == 0) {
            return 0;
        }
        var q = .48 - n / 1.04,
            Q = Math.sqrt(.1734 + q * q),
            x = Q - q,
            X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1),
            y = -Q - q,
            Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1),
            t = X + Y + .5;
        return (1 - t) * 3 * t * t + t * t * t;
    };
    /*\
     * mina.backin
     [ method ]
     **
     * Backin easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.backin = function (n) {
        if (n == 1) {
            return 1;
        }
        var s = 1.70158;
        return n * n * ((s + 1) * n - s);
    };
    /*\
     * mina.backout
     [ method ]
     **
     * Backout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.backout = function (n) {
        if (n == 0) {
            return 0;
        }
        n = n - 1;
        var s = 1.70158;
        return n * n * ((s + 1) * n + s) + 1;
    };
    /*\
     * mina.elastic
     [ method ]
     **
     * Elastic easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.elastic = function (n) {
        if (n == !!n) {
            return n;
        }
        return Math.pow(2, -10 * n) * Math.sin((n - .075) *
            (2 * Math.PI) / .3) + 1;
    };
    /*\
     * mina.bounce
     [ method ]
     **
     * Bounce easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.bounce = function (n) {
        var s = 7.5625,
            p = 2.75,
            l;
        if (n < 1 / p) {
            l = s * n * n;
        } else {
            if (n < 2 / p) {
                n -= 1.5 / p;
                l = s * n * n + .75;
            } else {
                if (n < 2.5 / p) {
                    n -= 2.25 / p;
                    l = s * n * n + .9375;
                } else {
                    n -= 2.625 / p;
                    l = s * n * n + .984375;
                }
            }
        }
        return l;
    };
    window.mina = mina;
    return mina;
})(typeof eve == "undefined" ? function () {} : eve);

// Copyright (c) 2013 - 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var Snap = (function(root) {
Snap.version = "0.5.1";
/*\
 * Snap
 [ method ]
 **
 * Creates a drawing surface or wraps existing SVG element.
 **
 - width (number|string) width of surface
 - height (number|string) height of surface
 * or
 - DOM (SVGElement) element to be wrapped into Snap structure
 * or
 - array (array) array of elements (will return set of elements)
 * or
 - query (string) CSS query selector
 = (object) @Element
\*/
function Snap(w, h) {
    if (w) {
        if (w.nodeType) {
            return wrap(w);
        }
        if (is(w, "array") && Snap.set) {
            return Snap.set.apply(Snap, w);
        }
        if (w instanceof Element) {
            return w;
        }
        if (h == null) {
            // try {
                w = glob.doc.querySelector(String(w));
                return wrap(w);
            // } catch (e) {
                // return null;
            // }
        }
    }
    w = w == null ? "100%" : w;
    h = h == null ? "100%" : h;
    return new Paper(w, h);
}
Snap.toString = function () {
    return "Snap v" + this.version;
};
Snap._ = {};
var glob = {
    win: root.window,
    doc: root.window.document
};
Snap._.glob = glob;
var has = "hasOwnProperty",
    Str = String,
    toFloat = parseFloat,
    toInt = parseInt,
    math = Math,
    mmax = math.max,
    mmin = math.min,
    abs = math.abs,
    pow = math.pow,
    PI = math.PI,
    round = math.round,
    E = "",
    S = " ",
    objectToString = Object.prototype.toString,
    ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
    colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
    bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
    separator = Snap._.separator = /[,\s]+/,
    whitespace = /[\s]/g,
    commaSpaces = /[\s]*,[\s]*/,
    hsrg = {hs: 1, rg: 1},
    pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
    tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
    pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/ig,
    idgen = 0,
    idprefix = "S" + (+new Date).toString(36),
    ID = function (el) {
        return (el && el.type ? el.type : E) + idprefix + (idgen++).toString(36);
    },
    xlink = "http://www.w3.org/1999/xlink",
    xmlns = "http://www.w3.org/2000/svg",
    hub = {},
    /*\
     * Snap.url
     [ method ]
     **
     * Wraps path into `"url('<path>')"`.
     - value (string) path
     = (string) wrapped path
    \*/
    URL = Snap.url = function (url) {
        return "url('#" + url + "')";
    };

function $(el, attr) {
    if (attr) {
        if (el == "#text") {
            el = glob.doc.createTextNode(attr.text || attr["#text"] || "");
        }
        if (el == "#comment") {
            el = glob.doc.createComment(attr.text || attr["#text"] || "");
        }
        if (typeof el == "string") {
            el = $(el);
        }
        if (typeof attr == "string") {
            if (el.nodeType == 1) {
                if (attr.substring(0, 6) == "xlink:") {
                    return el.getAttributeNS(xlink, attr.substring(6));
                }
                if (attr.substring(0, 4) == "xml:") {
                    return el.getAttributeNS(xmlns, attr.substring(4));
                }
                return el.getAttribute(attr);
            } else if (attr == "text") {
                return el.nodeValue;
            } else {
                return null;
            }
        }
        if (el.nodeType == 1) {
            for (var key in attr) if (attr[has](key)) {
                var val = Str(attr[key]);
                if (val) {
                    if (key.substring(0, 6) == "xlink:") {
                        el.setAttributeNS(xlink, key.substring(6), val);
                    } else if (key.substring(0, 4) == "xml:") {
                        el.setAttributeNS(xmlns, key.substring(4), val);
                    } else {
                        el.setAttribute(key, val);
                    }
                } else {
                    el.removeAttribute(key);
                }
            }
        } else if ("text" in attr) {
            el.nodeValue = attr.text;
        }
    } else {
        el = glob.doc.createElementNS(xmlns, el);
    }
    return el;
}
Snap._.$ = $;
Snap._.id = ID;
function getAttrs(el) {
    var attrs = el.attributes,
        name,
        out = {};
    for (var i = 0; i < attrs.length; i++) {
        if (attrs[i].namespaceURI == xlink) {
            name = "xlink:";
        } else {
            name = "";
        }
        name += attrs[i].name;
        out[name] = attrs[i].textContent;
    }
    return out;
}
function is(o, type) {
    type = Str.prototype.toLowerCase.call(type);
    if (type == "finite") {
        return isFinite(o);
    }
    if (type == "array" &&
        (o instanceof Array || Array.isArray && Array.isArray(o))) {
        return true;
    }
    return  type == "null" && o === null ||
            type == typeof o && o !== null ||
            type == "object" && o === Object(o) ||
            objectToString.call(o).slice(8, -1).toLowerCase() == type;
}
/*\
 * Snap.format
 [ method ]
 **
 * Replaces construction of type `{<name>}` to the corresponding argument
 **
 - token (string) string to format
 - json (object) object which properties are used as a replacement
 = (string) formatted string
 > Usage
 | // this draws a rectangular shape equivalent to "M10,20h40v50h-40z"
 | paper.path(Snap.format("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
 |     x: 10,
 |     y: 20,
 |     dim: {
 |         width: 40,
 |         height: 50,
 |         "negative width": -40
 |     }
 | }));
\*/
Snap.format = (function () {
    var tokenRegex = /\{([^\}]+)\}/g,
        objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, // matches .xxxxx or ["xxxxx"] to run over object properties
        replacer = function (all, key, obj) {
            var res = obj;
            key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
                name = name || quotedName;
                if (res) {
                    if (name in res) {
                        res = res[name];
                    }
                    typeof res == "function" && isFunc && (res = res());
                }
            });
            res = (res == null || res == obj ? all : res) + "";
            return res;
        };
    return function (str, obj) {
        return Str(str).replace(tokenRegex, function (all, key) {
            return replacer(all, key, obj);
        });
    };
})();
function clone(obj) {
    if (typeof obj == "function" || Object(obj) !== obj) {
        return obj;
    }
    var res = new obj.constructor;
    for (var key in obj) if (obj[has](key)) {
        res[key] = clone(obj[key]);
    }
    return res;
}
Snap._.clone = clone;
function repush(array, item) {
    for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
        return array.push(array.splice(i, 1)[0]);
    }
}
function cacher(f, scope, postprocessor) {
    function newf() {
        var arg = Array.prototype.slice.call(arguments, 0),
            args = arg.join("\u2400"),
            cache = newf.cache = newf.cache || {},
            count = newf.count = newf.count || [];
        if (cache[has](args)) {
            repush(count, args);
            return postprocessor ? postprocessor(cache[args]) : cache[args];
        }
        count.length >= 1e3 && delete cache[count.shift()];
        count.push(args);
        cache[args] = f.apply(scope, arg);
        return postprocessor ? postprocessor(cache[args]) : cache[args];
    }
    return newf;
}
Snap._.cacher = cacher;
function angle(x1, y1, x2, y2, x3, y3) {
    if (x3 == null) {
        var x = x1 - x2,
            y = y1 - y2;
        if (!x && !y) {
            return 0;
        }
        return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
    } else {
        return angle(x1, y1, x3, y3) - angle(x2, y2, x3, y3);
    }
}
function rad(deg) {
    return deg % 360 * PI / 180;
}
function deg(rad) {
    return rad * 180 / PI % 360;
}
function x_y() {
    return this.x + S + this.y;
}
function x_y_w_h() {
    return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
}

/*\
 * Snap.rad
 [ method ]
 **
 * Transform angle to radians
 - deg (number) angle in degrees
 = (number) angle in radians
\*/
Snap.rad = rad;
/*\
 * Snap.deg
 [ method ]
 **
 * Transform angle to degrees
 - rad (number) angle in radians
 = (number) angle in degrees
\*/
Snap.deg = deg;
/*\
 * Snap.sin
 [ method ]
 **
 * Equivalent to `Math.sin()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) sin
\*/
Snap.sin = function (angle) {
    return math.sin(Snap.rad(angle));
};
/*\
 * Snap.tan
 [ method ]
 **
 * Equivalent to `Math.tan()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) tan
\*/
Snap.tan = function (angle) {
    return math.tan(Snap.rad(angle));
};
/*\
 * Snap.cos
 [ method ]
 **
 * Equivalent to `Math.cos()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) cos
\*/
Snap.cos = function (angle) {
    return math.cos(Snap.rad(angle));
};
/*\
 * Snap.asin
 [ method ]
 **
 * Equivalent to `Math.asin()` only works with degrees, not radians.
 - num (number) value
 = (number) asin in degrees
\*/
Snap.asin = function (num) {
    return Snap.deg(math.asin(num));
};
/*\
 * Snap.acos
 [ method ]
 **
 * Equivalent to `Math.acos()` only works with degrees, not radians.
 - num (number) value
 = (number) acos in degrees
\*/
Snap.acos = function (num) {
    return Snap.deg(math.acos(num));
};
/*\
 * Snap.atan
 [ method ]
 **
 * Equivalent to `Math.atan()` only works with degrees, not radians.
 - num (number) value
 = (number) atan in degrees
\*/
Snap.atan = function (num) {
    return Snap.deg(math.atan(num));
};
/*\
 * Snap.atan2
 [ method ]
 **
 * Equivalent to `Math.atan2()` only works with degrees, not radians.
 - num (number) value
 = (number) atan2 in degrees
\*/
Snap.atan2 = function (num) {
    return Snap.deg(math.atan2(num));
};
/*\
 * Snap.angle
 [ method ]
 **
 * Returns an angle between two or three points
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 - x3 (number) #optional x coord of third point
 - y3 (number) #optional y coord of third point
 = (number) angle in degrees
\*/
Snap.angle = angle;
/*\
 * Snap.len
 [ method ]
 **
 * Returns distance between two points
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 = (number) distance
\*/
Snap.len = function (x1, y1, x2, y2) {
    return Math.sqrt(Snap.len2(x1, y1, x2, y2));
};
/*\
 * Snap.len2
 [ method ]
 **
 * Returns squared distance between two points
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 = (number) distance
\*/
Snap.len2 = function (x1, y1, x2, y2) {
    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
};
/*\
 * Snap.closestPoint
 [ method ]
 **
 * Returns closest point to a given one on a given path.
 - path (Element) path element
 - x (number) x coord of a point
 - y (number) y coord of a point
 = (object) in format
 {
    x (number) x coord of the point on the path
    y (number) y coord of the point on the path
    length (number) length of the path to the point
    distance (number) distance from the given point to the path
 }
\*/
// Copied from http://bl.ocks.org/mbostock/8027637
Snap.closestPoint = function (path, x, y) {
    function distance2(p) {
        var dx = p.x - x,
            dy = p.y - y;
        return dx * dx + dy * dy;
    }
    var pathNode = path.node,
        pathLength = pathNode.getTotalLength(),
        precision = pathLength / pathNode.pathSegList.numberOfItems * .125,
        best,
        bestLength,
        bestDistance = Infinity;

    // linear scan for coarse approximation
    for (var scan, scanLength = 0, scanDistance; scanLength <= pathLength; scanLength += precision) {
        if ((scanDistance = distance2(scan = pathNode.getPointAtLength(scanLength))) < bestDistance) {
            best = scan;
            bestLength = scanLength;
            bestDistance = scanDistance;
        }
    }

    // binary search for precise estimate
    precision *= .5;
    while (precision > .5) {
        var before,
            after,
            beforeLength,
            afterLength,
            beforeDistance,
            afterDistance;
        if ((beforeLength = bestLength - precision) >= 0 && (beforeDistance = distance2(before = pathNode.getPointAtLength(beforeLength))) < bestDistance) {
            best = before;
            bestLength = beforeLength;
            bestDistance = beforeDistance;
        } else if ((afterLength = bestLength + precision) <= pathLength && (afterDistance = distance2(after = pathNode.getPointAtLength(afterLength))) < bestDistance) {
            best = after;
            bestLength = afterLength;
            bestDistance = afterDistance;
        } else {
            precision *= .5;
        }
    }

    best = {
        x: best.x,
        y: best.y,
        length: bestLength,
        distance: Math.sqrt(bestDistance)
    };
    return best;
}
/*\
 * Snap.is
 [ method ]
 **
 * Handy replacement for the `typeof` operator
 - o (…) any object or primitive
 - type (string) name of the type, e.g., `string`, `function`, `number`, etc.
 = (boolean) `true` if given value is of given type
\*/
Snap.is = is;
/*\
 * Snap.snapTo
 [ method ]
 **
 * Snaps given value to given grid
 - values (array|number) given array of values or step of the grid
 - value (number) value to adjust
 - tolerance (number) #optional maximum distance to the target value that would trigger the snap. Default is `10`.
 = (number) adjusted value
\*/
Snap.snapTo = function (values, value, tolerance) {
    tolerance = is(tolerance, "finite") ? tolerance : 10;
    if (is(values, "array")) {
        var i = values.length;
        while (i--) if (abs(values[i] - value) <= tolerance) {
            return values[i];
        }
    } else {
        values = +values;
        var rem = value % values;
        if (rem < tolerance) {
            return value - rem;
        }
        if (rem > values - tolerance) {
            return value - rem + values;
        }
    }
    return value;
};
// Colour
/*\
 * Snap.getRGB
 [ method ]
 **
 * Parses color string as RGB object
 - color (string) color string in one of the following formats:
 # <ul>
 #     <li>Color name (<code>red</code>, <code>green</code>, <code>cornflowerblue</code>, etc)</li>
 #     <li>#••• — shortened HTML color: (<code>#000</code>, <code>#fc0</code>, etc.)</li>
 #     <li>#•••••• — full length HTML color: (<code>#000000</code>, <code>#bd2300</code>)</li>
 #     <li>rgb(•••, •••, •••) — red, green and blue channels values: (<code>rgb(200,&nbsp;100,&nbsp;0)</code>)</li>
 #     <li>rgba(•••, •••, •••, •••) — also with opacity</li>
 #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>)</li>
 #     <li>rgba(•••%, •••%, •••%, •••%) — also with opacity</li>
 #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>)</li>
 #     <li>hsba(•••, •••, •••, •••) — also with opacity</li>
 #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsba(•••%, •••%, •••%, •••%) — also with opacity</li>
 #     <li>hsl(•••, •••, •••) — hue, saturation and luminosity values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;0.5)</code>)</li>
 #     <li>hsla(•••, •••, •••, •••) — also with opacity</li>
 #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsla(•••%, •••%, •••%, •••%) — also with opacity</li>
 # </ul>
 * Note that `%` can be used any time: `rgb(20%, 255, 50%)`.
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) true if string can't be parsed
 o }
\*/
Snap.getRGB = cacher(function (colour) {
    if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
    }
    if (colour == "none") {
        return {r: -1, g: -1, b: -1, hex: "none", toString: rgbtoString};
    }
    !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
    if (!colour) {
        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
    }
    var res,
        red,
        green,
        blue,
        opacity,
        t,
        values,
        rgb = colour.match(colourRegExp);
    if (rgb) {
        if (rgb[2]) {
            blue = toInt(rgb[2].substring(5), 16);
            green = toInt(rgb[2].substring(3, 5), 16);
            red = toInt(rgb[2].substring(1, 3), 16);
        }
        if (rgb[3]) {
            blue = toInt((t = rgb[3].charAt(3)) + t, 16);
            green = toInt((t = rgb[3].charAt(2)) + t, 16);
            red = toInt((t = rgb[3].charAt(1)) + t, 16);
        }
        if (rgb[4]) {
            values = rgb[4].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red *= 2.55);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green *= 2.55);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue *= 2.55);
            rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
        }
        if (rgb[5]) {
            values = rgb[5].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red /= 100);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green /= 100);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue /= 100);
            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
            rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            return Snap.hsb2rgb(red, green, blue, opacity);
        }
        if (rgb[6]) {
            values = rgb[6].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red /= 100);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green /= 100);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue /= 100);
            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
            rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            return Snap.hsl2rgb(red, green, blue, opacity);
        }
        red = mmin(math.round(red), 255);
        green = mmin(math.round(green), 255);
        blue = mmin(math.round(blue), 255);
        opacity = mmin(mmax(opacity, 0), 1);
        rgb = {r: red, g: green, b: blue, toString: rgbtoString};
        rgb.hex = "#" + (16777216 | blue | green << 8 | red << 16).toString(16).slice(1);
        rgb.opacity = is(opacity, "finite") ? opacity : 1;
        return rgb;
    }
    return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
}, Snap);
/*\
 * Snap.hsb
 [ method ]
 **
 * Converts HSB values to a hex representation of the color
 - h (number) hue
 - s (number) saturation
 - b (number) value or brightness
 = (string) hex representation of the color
\*/
Snap.hsb = cacher(function (h, s, b) {
    return Snap.hsb2rgb(h, s, b).hex;
});
/*\
 * Snap.hsl
 [ method ]
 **
 * Converts HSL values to a hex representation of the color
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (string) hex representation of the color
\*/
Snap.hsl = cacher(function (h, s, l) {
    return Snap.hsl2rgb(h, s, l).hex;
});
/*\
 * Snap.rgb
 [ method ]
 **
 * Converts RGB values to a hex representation of the color
 - r (number) red
 - g (number) green
 - b (number) blue
 = (string) hex representation of the color
\*/
Snap.rgb = cacher(function (r, g, b, o) {
    if (is(o, "finite")) {
        var round = math.round;
        return "rgba(" + [round(r), round(g), round(b), +o.toFixed(2)] + ")";
    }
    return "#" + (16777216 | b | g << 8 | r << 16).toString(16).slice(1);
});
var toHex = function (color) {
    var i = glob.doc.getElementsByTagName("head")[0] || glob.doc.getElementsByTagName("svg")[0],
        red = "rgb(255, 0, 0)";
    toHex = cacher(function (color) {
        if (color.toLowerCase() == "red") {
            return red;
        }
        i.style.color = red;
        i.style.color = color;
        var out = glob.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
        return out == red ? null : out;
    });
    return toHex(color);
},
hsbtoString = function () {
    return "hsb(" + [this.h, this.s, this.b] + ")";
},
hsltoString = function () {
    return "hsl(" + [this.h, this.s, this.l] + ")";
},
rgbtoString = function () {
    return this.opacity == 1 || this.opacity == null ?
            this.hex :
            "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
},
prepareRGB = function (r, g, b) {
    if (g == null && is(r, "object") && "r" in r && "g" in r && "b" in r) {
        b = r.b;
        g = r.g;
        r = r.r;
    }
    if (g == null && is(r, string)) {
        var clr = Snap.getRGB(r);
        r = clr.r;
        g = clr.g;
        b = clr.b;
    }
    if (r > 1 || g > 1 || b > 1) {
        r /= 255;
        g /= 255;
        b /= 255;
    }

    return [r, g, b];
},
packageRGB = function (r, g, b, o) {
    r = math.round(r * 255);
    g = math.round(g * 255);
    b = math.round(b * 255);
    var rgb = {
        r: r,
        g: g,
        b: b,
        opacity: is(o, "finite") ? o : 1,
        hex: Snap.rgb(r, g, b),
        toString: rgbtoString
    };
    is(o, "finite") && (rgb.opacity = o);
    return rgb;
};
/*\
 * Snap.color
 [ method ]
 **
 * Parses the color string and returns an object featuring the color's component values
 - clr (string) color string in one of the supported formats (see @Snap.getRGB)
 = (object) Combined RGB/HSB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) `true` if string can't be parsed,
 o     h (number) hue,
 o     s (number) saturation,
 o     v (number) value (brightness),
 o     l (number) lightness
 o }
\*/
Snap.color = function (clr) {
    var rgb;
    if (is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
        rgb = Snap.hsb2rgb(clr);
        clr.r = rgb.r;
        clr.g = rgb.g;
        clr.b = rgb.b;
        clr.opacity = 1;
        clr.hex = rgb.hex;
    } else if (is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
        rgb = Snap.hsl2rgb(clr);
        clr.r = rgb.r;
        clr.g = rgb.g;
        clr.b = rgb.b;
        clr.opacity = 1;
        clr.hex = rgb.hex;
    } else {
        if (is(clr, "string")) {
            clr = Snap.getRGB(clr);
        }
        if (is(clr, "object") && "r" in clr && "g" in clr && "b" in clr && !("error" in clr)) {
            rgb = Snap.rgb2hsl(clr);
            clr.h = rgb.h;
            clr.s = rgb.s;
            clr.l = rgb.l;
            rgb = Snap.rgb2hsb(clr);
            clr.v = rgb.b;
        } else {
            clr = {hex: "none"};
            clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
            clr.error = 1;
        }
    }
    clr.toString = rgbtoString;
    return clr;
};
/*\
 * Snap.hsb2rgb
 [ method ]
 **
 * Converts HSB values to an RGB object
 - h (number) hue
 - s (number) saturation
 - v (number) value or brightness
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/
Snap.hsb2rgb = function (h, s, v, o) {
    if (is(h, "object") && "h" in h && "s" in h && "b" in h) {
        v = h.b;
        s = h.s;
        o = h.o;
        h = h.h;
    }
    h *= 360;
    var R, G, B, X, C;
    h = h % 360 / 60;
    C = v * s;
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = v - C;

    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    return packageRGB(R, G, B, o);
};
/*\
 * Snap.hsl2rgb
 [ method ]
 **
 * Converts HSL values to an RGB object
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/
Snap.hsl2rgb = function (h, s, l, o) {
    if (is(h, "object") && "h" in h && "s" in h && "l" in h) {
        l = h.l;
        s = h.s;
        h = h.h;
    }
    if (h > 1 || s > 1 || l > 1) {
        h /= 360;
        s /= 100;
        l /= 100;
    }
    h *= 360;
    var R, G, B, X, C;
    h = h % 360 / 60;
    C = 2 * s * (l < .5 ? l : 1 - l);
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = l - C / 2;

    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    return packageRGB(R, G, B, o);
};
/*\
 * Snap.rgb2hsb
 [ method ]
 **
 * Converts RGB values to an HSB object
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSB object in the following format:
 o {
 o     h (number) hue,
 o     s (number) saturation,
 o     b (number) brightness
 o }
\*/
Snap.rgb2hsb = function (r, g, b) {
    b = prepareRGB(r, g, b);
    r = b[0];
    g = b[1];
    b = b[2];

    var H, S, V, C;
    V = mmax(r, g, b);
    C = V - mmin(r, g, b);
    H = C == 0 ? null :
        V == r ? (g - b) / C :
        V == g ? (b - r) / C + 2 :
                 (r - g) / C + 4;
    H = (H + 360) % 6 * 60 / 360;
    S = C == 0 ? 0 : C / V;
    return {h: H, s: S, b: V, toString: hsbtoString};
};
/*\
 * Snap.rgb2hsl
 [ method ]
 **
 * Converts RGB values to an HSL object
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSL object in the following format:
 o {
 o     h (number) hue,
 o     s (number) saturation,
 o     l (number) luminosity
 o }
\*/
Snap.rgb2hsl = function (r, g, b) {
    b = prepareRGB(r, g, b);
    r = b[0];
    g = b[1];
    b = b[2];

    var H, S, L, M, m, C;
    M = mmax(r, g, b);
    m = mmin(r, g, b);
    C = M - m;
    H = C == 0 ? null :
        M == r ? (g - b) / C :
        M == g ? (b - r) / C + 2 :
                 (r - g) / C + 4;
    H = (H + 360) % 6 * 60 / 360;
    L = (M + m) / 2;
    S = C == 0 ? 0 :
         L < .5 ? C / (2 * L) :
                  C / (2 - 2 * L);
    return {h: H, s: S, l: L, toString: hsltoString};
};

// Transformations
/*\
 * Snap.parsePathString
 [ method ]
 **
 * Utility method
 **
 * Parses given path string into an array of arrays of path segments
 - pathString (string|array) path string or array of segments (in the last case it is returned straight away)
 = (array) array of segments
\*/
Snap.parsePathString = function (pathString) {
    if (!pathString) {
        return null;
    }
    var pth = Snap.path(pathString);
    if (pth.arr) {
        return Snap.path.clone(pth.arr);
    }

    var paramCounts = {a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0},
        data = [];
    if (is(pathString, "array") && is(pathString[0], "array")) { // rough assumption
        data = Snap.path.clone(pathString);
    }
    if (!data.length) {
        Str(pathString).replace(pathCommand, function (a, b, c) {
            var params = [],
                name = b.toLowerCase();
            c.replace(pathValues, function (a, b) {
                b && params.push(+b);
            });
            if (name == "m" && params.length > 2) {
                data.push([b].concat(params.splice(0, 2)));
                name = "l";
                b = b == "m" ? "l" : "L";
            }
            if (name == "o" && params.length == 1) {
                data.push([b, params[0]]);
            }
            if (name == "r") {
                data.push([b].concat(params));
            } else while (params.length >= paramCounts[name]) {
                data.push([b].concat(params.splice(0, paramCounts[name])));
                if (!paramCounts[name]) {
                    break;
                }
            }
        });
    }
    data.toString = Snap.path.toString;
    pth.arr = Snap.path.clone(data);
    return data;
};
/*\
 * Snap.parseTransformString
 [ method ]
 **
 * Utility method
 **
 * Parses given transform string into an array of transformations
 - TString (string|array) transform string or array of transformations (in the last case it is returned straight away)
 = (array) array of transformations
\*/
var parseTransformString = Snap.parseTransformString = function (TString) {
    if (!TString) {
        return null;
    }
    var paramCounts = {r: 3, s: 4, t: 2, m: 6},
        data = [];
    if (is(TString, "array") && is(TString[0], "array")) { // rough assumption
        data = Snap.path.clone(TString);
    }
    if (!data.length) {
        Str(TString).replace(tCommand, function (a, b, c) {
            var params = [],
                name = b.toLowerCase();
            c.replace(pathValues, function (a, b) {
                b && params.push(+b);
            });
            data.push([b].concat(params));
        });
    }
    data.toString = Snap.path.toString;
    return data;
};
function svgTransform2string(tstr) {
    var res = [];
    tstr = tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (all, name, params) {
        params = params.split(/\s*,\s*|\s+/);
        if (name == "rotate" && params.length == 1) {
            params.push(0, 0);
        }
        if (name == "scale") {
            if (params.length > 2) {
                params = params.slice(0, 2);
            } else if (params.length == 2) {
                params.push(0, 0);
            }
            if (params.length == 1) {
                params.push(params[0], 0, 0);
            }
        }
        if (name == "skewX") {
            res.push(["m", 1, 0, math.tan(rad(params[0])), 1, 0, 0]);
        } else if (name == "skewY") {
            res.push(["m", 1, math.tan(rad(params[0])), 0, 1, 0, 0]);
        } else {
            res.push([name.charAt(0)].concat(params));
        }
        return all;
    });
    return res;
}
Snap._.svgTransform2string = svgTransform2string;
Snap._.rgTransform = /^[a-z][\s]*-?\.?\d/i;
function transform2matrix(tstr, bbox) {
    var tdata = parseTransformString(tstr),
        m = new Snap.Matrix;
    if (tdata) {
        for (var i = 0, ii = tdata.length; i < ii; i++) {
            var t = tdata[i],
                tlen = t.length,
                command = Str(t[0]).toLowerCase(),
                absolute = t[0] != command,
                inver = absolute ? m.invert() : 0,
                x1,
                y1,
                x2,
                y2,
                bb;
            if (command == "t" && tlen == 2){
                m.translate(t[1], 0);
            } else if (command == "t" && tlen == 3) {
                if (absolute) {
                    x1 = inver.x(0, 0);
                    y1 = inver.y(0, 0);
                    x2 = inver.x(t[1], t[2]);
                    y2 = inver.y(t[1], t[2]);
                    m.translate(x2 - x1, y2 - y1);
                } else {
                    m.translate(t[1], t[2]);
                }
            } else if (command == "r") {
                if (tlen == 2) {
                    bb = bb || bbox;
                    m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                } else if (tlen == 4) {
                    if (absolute) {
                        x2 = inver.x(t[2], t[3]);
                        y2 = inver.y(t[2], t[3]);
                        m.rotate(t[1], x2, y2);
                    } else {
                        m.rotate(t[1], t[2], t[3]);
                    }
                }
            } else if (command == "s") {
                if (tlen == 2 || tlen == 3) {
                    bb = bb || bbox;
                    m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                } else if (tlen == 4) {
                    if (absolute) {
                        x2 = inver.x(t[2], t[3]);
                        y2 = inver.y(t[2], t[3]);
                        m.scale(t[1], t[1], x2, y2);
                    } else {
                        m.scale(t[1], t[1], t[2], t[3]);
                    }
                } else if (tlen == 5) {
                    if (absolute) {
                        x2 = inver.x(t[3], t[4]);
                        y2 = inver.y(t[3], t[4]);
                        m.scale(t[1], t[2], x2, y2);
                    } else {
                        m.scale(t[1], t[2], t[3], t[4]);
                    }
                }
            } else if (command == "m" && tlen == 7) {
                m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
            }
        }
    }
    return m;
}
Snap._.transform2matrix = transform2matrix;
Snap._unit2px = unit2px;
var contains = glob.doc.contains || glob.doc.compareDocumentPosition ?
    function (a, b) {
        var adown = a.nodeType == 9 ? a.documentElement : a,
            bup = b && b.parentNode;
            return a == bup || !!(bup && bup.nodeType == 1 && (
                adown.contains ?
                    adown.contains(bup) :
                    a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
            ));
    } :
    function (a, b) {
        if (b) {
            while (b) {
                b = b.parentNode;
                if (b == a) {
                    return true;
                }
            }
        }
        return false;
    };
function getSomeDefs(el) {
    var p = el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) ||
            el.node.parentNode && wrap(el.node.parentNode) ||
            Snap.select("svg") ||
            Snap(0, 0),
        pdefs = p.select("defs"),
        defs  = pdefs == null ? false : pdefs.node;
    if (!defs) {
        defs = make("defs", p.node).node;
    }
    return defs;
}
function getSomeSVG(el) {
    return el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || Snap.select("svg");
}
Snap._.getSomeDefs = getSomeDefs;
Snap._.getSomeSVG = getSomeSVG;
function unit2px(el, name, value) {
    var svg = getSomeSVG(el).node,
        out = {},
        mgr = svg.querySelector(".svg---mgr");
    if (!mgr) {
        mgr = $("rect");
        $(mgr, {x: -9e9, y: -9e9, width: 10, height: 10, "class": "svg---mgr", fill: "none"});
        svg.appendChild(mgr);
    }
    function getW(val) {
        if (val == null) {
            return E;
        }
        if (val == +val) {
            return val;
        }
        $(mgr, {width: val});
        try {
            return mgr.getBBox().width;
        } catch (e) {
            return 0;
        }
    }
    function getH(val) {
        if (val == null) {
            return E;
        }
        if (val == +val) {
            return val;
        }
        $(mgr, {height: val});
        try {
            return mgr.getBBox().height;
        } catch (e) {
            return 0;
        }
    }
    function set(nam, f) {
        if (name == null) {
            out[nam] = f(el.attr(nam) || 0);
        } else if (nam == name) {
            out = f(value == null ? el.attr(nam) || 0 : value);
        }
    }
    switch (el.type) {
        case "rect":
            set("rx", getW);
            set("ry", getH);
        case "image":
            set("width", getW);
            set("height", getH);
        case "text":
            set("x", getW);
            set("y", getH);
        break;
        case "circle":
            set("cx", getW);
            set("cy", getH);
            set("r", getW);
        break;
        case "ellipse":
            set("cx", getW);
            set("cy", getH);
            set("rx", getW);
            set("ry", getH);
        break;
        case "line":
            set("x1", getW);
            set("x2", getW);
            set("y1", getH);
            set("y2", getH);
        break;
        case "marker":
            set("refX", getW);
            set("markerWidth", getW);
            set("refY", getH);
            set("markerHeight", getH);
        break;
        case "radialGradient":
            set("fx", getW);
            set("fy", getH);
        break;
        case "tspan":
            set("dx", getW);
            set("dy", getH);
        break;
        default:
            set(name, getW);
    }
    svg.removeChild(mgr);
    return out;
}
/*\
 * Snap.select
 [ method ]
 **
 * Wraps a DOM element specified by CSS selector as @Element
 - query (string) CSS selector of the element
 = (Element) the current element
\*/
Snap.select = function (query) {
    query = Str(query).replace(/([^\\]):/g, "$1\\:");
    return wrap(glob.doc.querySelector(query));
};
/*\
 * Snap.selectAll
 [ method ]
 **
 * Wraps DOM elements specified by CSS selector as set or array of @Element
 - query (string) CSS selector of the element
 = (Element) the current element
\*/
Snap.selectAll = function (query) {
    var nodelist = glob.doc.querySelectorAll(query),
        set = (Snap.set || Array)();
    for (var i = 0; i < nodelist.length; i++) {
        set.push(wrap(nodelist[i]));
    }
    return set;
};

function add2group(list) {
    if (!is(list, "array")) {
        list = Array.prototype.slice.call(arguments, 0);
    }
    var i = 0,
        j = 0,
        node = this.node;
    while (this[i]) delete this[i++];
    for (i = 0; i < list.length; i++) {
        if (list[i].type == "set") {
            list[i].forEach(function (el) {
                node.appendChild(el.node);
            });
        } else {
            node.appendChild(list[i].node);
        }
    }
    var children = node.childNodes;
    for (i = 0; i < children.length; i++) {
        this[j++] = wrap(children[i]);
    }
    return this;
}
// Hub garbage collector every 10s
setInterval(function () {
    for (var key in hub) if (hub[has](key)) {
        var el = hub[key],
            node = el.node;
        if (el.type != "svg" && !node.ownerSVGElement || el.type == "svg" && (!node.parentNode || "ownerSVGElement" in node.parentNode && !node.ownerSVGElement)) {
            delete hub[key];
        }
    }
}, 1e4);
function Element(el) {
    if (el.snap in hub) {
        return hub[el.snap];
    }
    var svg;
    try {
        svg = el.ownerSVGElement;
    } catch(e) {}
    /*\
     * Element.node
     [ property (object) ]
     **
     * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
     > Usage
     | // draw a circle at coordinate 10,10 with radius of 10
     | var c = paper.circle(10, 10, 10);
     | c.node.onclick = function () {
     |     c.attr("fill", "red");
     | };
    \*/
    this.node = el;
    if (svg) {
        this.paper = new Paper(svg);
    }
    /*\
     * Element.type
     [ property (string) ]
     **
     * SVG tag name of the given element.
    \*/
    this.type = el.tagName || el.nodeName;
    var id = this.id = ID(this);
    this.anims = {};
    this._ = {
        transform: []
    };
    el.snap = id;
    hub[id] = this;
    if (this.type == "g") {
        this.add = add2group;
    }
    if (this.type in {g: 1, mask: 1, pattern: 1, symbol: 1}) {
        for (var method in Paper.prototype) if (Paper.prototype[has](method)) {
            this[method] = Paper.prototype[method];
        }
    }
}
   /*\
     * Element.attr
     [ method ]
     **
     * Gets or sets given attributes of the element.
     **
     - params (object) contains key-value pairs of attributes you want to set
     * or
     - param (string) name of the attribute
     = (Element) the current element
     * or
     = (string) value of attribute
     > Usage
     | el.attr({
     |     fill: "#fc0",
     |     stroke: "#000",
     |     strokeWidth: 2, // CamelCase...
     |     "fill-opacity": 0.5, // or dash-separated names
     |     width: "*=2" // prefixed values
     | });
     | console.log(el.attr("fill")); // #fc0
     * Prefixed values in format `"+=10"` supported. All four operations
     * (`+`, `-`, `*` and `/`) could be used. Optionally you can use units for `+`
     * and `-`: `"+=2em"`.
    \*/
    Element.prototype.attr = function (params, value) {
        var el = this,
            node = el.node;
        if (!params) {
            if (node.nodeType != 1) {
                return {
                    text: node.nodeValue
                };
            }
            var attr = node.attributes,
                out = {};
            for (var i = 0, ii = attr.length; i < ii; i++) {
                out[attr[i].nodeName] = attr[i].nodeValue;
            }
            return out;
        }
        if (is(params, "string")) {
            if (arguments.length > 1) {
                var json = {};
                json[params] = value;
                params = json;
            } else {
                return eve("snap.util.getattr." + params, el).firstDefined();
            }
        }
        for (var att in params) {
            if (params[has](att)) {
                eve("snap.util.attr." + att, el, params[att]);
            }
        }
        return el;
    };
/*\
 * Snap.parse
 [ method ]
 **
 * Parses SVG fragment and converts it into a @Fragment
 **
 - svg (string) SVG string
 = (Fragment) the @Fragment
\*/
Snap.parse = function (svg) {
    var f = glob.doc.createDocumentFragment(),
        full = true,
        div = glob.doc.createElement("div");
    svg = Str(svg);
    if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
        svg = "<svg>" + svg + "</svg>";
        full = false;
    }
    div.innerHTML = svg;
    svg = div.getElementsByTagName("svg")[0];
    if (svg) {
        if (full) {
            f = svg;
        } else {
            while (svg.firstChild) {
                f.appendChild(svg.firstChild);
            }
        }
    }
    return new Fragment(f);
};
function Fragment(frag) {
    this.node = frag;
}
/*\
 * Snap.fragment
 [ method ]
 **
 * Creates a DOM fragment from a given list of elements or strings
 **
 - varargs (…) SVG string
 = (Fragment) the @Fragment
\*/
Snap.fragment = function () {
    var args = Array.prototype.slice.call(arguments, 0),
        f = glob.doc.createDocumentFragment();
    for (var i = 0, ii = args.length; i < ii; i++) {
        var item = args[i];
        if (item.node && item.node.nodeType) {
            f.appendChild(item.node);
        }
        if (item.nodeType) {
            f.appendChild(item);
        }
        if (typeof item == "string") {
            f.appendChild(Snap.parse(item).node);
        }
    }
    return new Fragment(f);
};

function make(name, parent) {
    var res = $(name);
    parent.appendChild(res);
    var el = wrap(res);
    return el;
}
function Paper(w, h) {
    var res,
        desc,
        defs,
        proto = Paper.prototype;
    if (w && w.tagName && w.tagName.toLowerCase() == "svg") {
        if (w.snap in hub) {
            return hub[w.snap];
        }
        var doc = w.ownerDocument;
        res = new Element(w);
        desc = w.getElementsByTagName("desc")[0];
        defs = w.getElementsByTagName("defs")[0];
        if (!desc) {
            desc = $("desc");
            desc.appendChild(doc.createTextNode("Created with Snap"));
            res.node.appendChild(desc);
        }
        if (!defs) {
            defs = $("defs");
            res.node.appendChild(defs);
        }
        res.defs = defs;
        for (var key in proto) if (proto[has](key)) {
            res[key] = proto[key];
        }
        res.paper = res.root = res;
    } else {
        res = make("svg", glob.doc.body);
        $(res.node, {
            height: h,
            version: 1.1,
            width: w,
            xmlns: xmlns
        });
    }
    return res;
}
function wrap(dom) {
    if (!dom) {
        return dom;
    }
    if (dom instanceof Element || dom instanceof Fragment) {
        return dom;
    }
    if (dom.tagName && dom.tagName.toLowerCase() == "svg") {
        return new Paper(dom);
    }
    if (dom.tagName && dom.tagName.toLowerCase() == "object" && dom.type == "image/svg+xml") {
        return new Paper(dom.contentDocument.getElementsByTagName("svg")[0]);
    }
    return new Element(dom);
}

Snap._.make = make;
Snap._.wrap = wrap;
/*\
 * Paper.el
 [ method ]
 **
 * Creates an element on paper with a given name and no attributes
 **
 - name (string) tag name
 - attr (object) attributes
 = (Element) the current element
 > Usage
 | var c = paper.circle(10, 10, 10); // is the same as...
 | var c = paper.el("circle").attr({
 |     cx: 10,
 |     cy: 10,
 |     r: 10
 | });
 | // and the same as
 | var c = paper.el("circle", {
 |     cx: 10,
 |     cy: 10,
 |     r: 10
 | });
\*/
Paper.prototype.el = function (name, attr) {
    var el = make(name, this.node);
    attr && el.attr(attr);
    return el;
};
/*\
 * Element.children
 [ method ]
 **
 * Returns array of all the children of the element.
 = (array) array of Elements
\*/
Element.prototype.children = function () {
    var out = [],
        ch = this.node.childNodes;
    for (var i = 0, ii = ch.length; i < ii; i++) {
        out[i] = Snap(ch[i]);
    }
    return out;
};
function jsonFiller(root, o) {
    for (var i = 0, ii = root.length; i < ii; i++) {
        var item = {
                type: root[i].type,
                attr: root[i].attr()
            },
            children = root[i].children();
        o.push(item);
        if (children.length) {
            jsonFiller(children, item.childNodes = []);
        }
    }
}
/*\
 * Element.toJSON
 [ method ]
 **
 * Returns object representation of the given element and all its children.
 = (object) in format
 o {
 o     type (string) this.type,
 o     attr (object) attributes map,
 o     childNodes (array) optional array of children in the same format
 o }
\*/
Element.prototype.toJSON = function () {
    var out = [];
    jsonFiller([this], out);
    return out[0];
};
// default
eve.on("snap.util.getattr", function () {
    var att = eve.nt();
    att = att.substring(att.lastIndexOf(".") + 1);
    var css = att.replace(/[A-Z]/g, function (letter) {
        return "-" + letter.toLowerCase();
    });
    if (cssAttr[has](css)) {
        return this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(css);
    } else {
        return $(this.node, att);
    }
});
var cssAttr = {
    "alignment-baseline": 0,
    "baseline-shift": 0,
    "clip": 0,
    "clip-path": 0,
    "clip-rule": 0,
    "color": 0,
    "color-interpolation": 0,
    "color-interpolation-filters": 0,
    "color-profile": 0,
    "color-rendering": 0,
    "cursor": 0,
    "direction": 0,
    "display": 0,
    "dominant-baseline": 0,
    "enable-background": 0,
    "fill": 0,
    "fill-opacity": 0,
    "fill-rule": 0,
    "filter": 0,
    "flood-color": 0,
    "flood-opacity": 0,
    "font": 0,
    "font-family": 0,
    "font-size": 0,
    "font-size-adjust": 0,
    "font-stretch": 0,
    "font-style": 0,
    "font-variant": 0,
    "font-weight": 0,
    "glyph-orientation-horizontal": 0,
    "glyph-orientation-vertical": 0,
    "image-rendering": 0,
    "kerning": 0,
    "letter-spacing": 0,
    "lighting-color": 0,
    "marker": 0,
    "marker-end": 0,
    "marker-mid": 0,
    "marker-start": 0,
    "mask": 0,
    "opacity": 0,
    "overflow": 0,
    "pointer-events": 0,
    "shape-rendering": 0,
    "stop-color": 0,
    "stop-opacity": 0,
    "stroke": 0,
    "stroke-dasharray": 0,
    "stroke-dashoffset": 0,
    "stroke-linecap": 0,
    "stroke-linejoin": 0,
    "stroke-miterlimit": 0,
    "stroke-opacity": 0,
    "stroke-width": 0,
    "text-anchor": 0,
    "text-decoration": 0,
    "text-rendering": 0,
    "unicode-bidi": 0,
    "visibility": 0,
    "word-spacing": 0,
    "writing-mode": 0
};

eve.on("snap.util.attr", function (value) {
    var att = eve.nt(),
        attr = {};
    att = att.substring(att.lastIndexOf(".") + 1);
    attr[att] = value;
    var style = att.replace(/-(\w)/gi, function (all, letter) {
            return letter.toUpperCase();
        }),
        css = att.replace(/[A-Z]/g, function (letter) {
            return "-" + letter.toLowerCase();
        });
    if (cssAttr[has](css)) {
        this.node.style[style] = value == null ? E : value;
    } else {
        $(this.node, attr);
    }
});
(function (proto) {}(Paper.prototype));

// simple ajax
/*\
 * Snap.ajax
 [ method ]
 **
 * Simple implementation of Ajax
 **
 - url (string) URL
 - postData (object|string) data for post request
 - callback (function) callback
 - scope (object) #optional scope of callback
 * or
 - url (string) URL
 - callback (function) callback
 - scope (object) #optional scope of callback
 = (XMLHttpRequest) the XMLHttpRequest object, just in case
\*/
Snap.ajax = function (url, postData, callback, scope){
    var req = new XMLHttpRequest,
        id = ID();
    if (req) {
        if (is(postData, "function")) {
            scope = callback;
            callback = postData;
            postData = null;
        } else if (is(postData, "object")) {
            var pd = [];
            for (var key in postData) if (postData.hasOwnProperty(key)) {
                pd.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
            }
            postData = pd.join("&");
        }
        req.open(postData ? "POST" : "GET", url, true);
        if (postData) {
            req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }
        if (callback) {
            eve.once("snap.ajax." + id + ".0", callback);
            eve.once("snap.ajax." + id + ".200", callback);
            eve.once("snap.ajax." + id + ".304", callback);
        }
        req.onreadystatechange = function() {
            if (req.readyState != 4) return;
            eve("snap.ajax." + id + "." + req.status, scope, req);
        };
        if (req.readyState == 4) {
            return req;
        }
        req.send(postData);
        return req;
    }
};
/*\
 * Snap.load
 [ method ]
 **
 * Loads external SVG file as a @Fragment (see @Snap.ajax for more advanced AJAX)
 **
 - url (string) URL
 - callback (function) callback
 - scope (object) #optional scope of callback
\*/
Snap.load = function (url, callback, scope) {
    Snap.ajax(url, function (req) {
        var f = Snap.parse(req.responseText);
        scope ? callback.call(scope, f) : callback(f);
    });
};
var getOffset = function (elem) {
    var box = elem.getBoundingClientRect(),
        doc = elem.ownerDocument,
        body = doc.body,
        docElem = doc.documentElement,
        clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
        top  = box.top  + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop ) - clientTop,
        left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
    return {
        y: top,
        x: left
    };
};
/*\
 * Snap.getElementByPoint
 [ method ]
 **
 * Returns you topmost element under given point.
 **
 = (object) Snap element object
 - x (number) x coordinate from the top left corner of the window
 - y (number) y coordinate from the top left corner of the window
 > Usage
 | Snap.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
\*/
Snap.getElementByPoint = function (x, y) {
    var paper = this,
        svg = paper.canvas,
        target = glob.doc.elementFromPoint(x, y);
    if (glob.win.opera && target.tagName == "svg") {
        var so = getOffset(target),
            sr = target.createSVGRect();
        sr.x = x - so.x;
        sr.y = y - so.y;
        sr.width = sr.height = 1;
        var hits = target.getIntersectionList(sr, null);
        if (hits.length) {
            target = hits[hits.length - 1];
        }
    }
    if (!target) {
        return null;
    }
    return wrap(target);
};
/*\
 * Snap.plugin
 [ method ]
 **
 * Let you write plugins. You pass in a function with five arguments, like this:
 | Snap.plugin(function (Snap, Element, Paper, global, Fragment) {
 |     Snap.newmethod = function () {};
 |     Element.prototype.newmethod = function () {};
 |     Paper.prototype.newmethod = function () {};
 | });
 * Inside the function you have access to all main objects (and their
 * prototypes). This allow you to extend anything you want.
 **
 - f (function) your plugin body
\*/
Snap.plugin = function (f) {
    f(Snap, Element, Paper, glob, Fragment);
};
glob.win.Snap = Snap;
return Snap;
}(window || this));

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var elproto = Element.prototype,
        is = Snap.is,
        Str = String,
        unit2px = Snap._unit2px,
        $ = Snap._.$,
        make = Snap._.make,
        getSomeDefs = Snap._.getSomeDefs,
        has = "hasOwnProperty",
        wrap = Snap._.wrap;
    /*\
     * Element.getBBox
     [ method ]
     **
     * Returns the bounding box descriptor for the given element
     **
     = (object) bounding box descriptor:
     o {
     o     cx: (number) x of the center,
     o     cy: (number) x of the center,
     o     h: (number) height,
     o     height: (number) height,
     o     path: (string) path command for the box,
     o     r0: (number) radius of a circle that fully encloses the box,
     o     r1: (number) radius of the smallest circle that can be enclosed,
     o     r2: (number) radius of the largest circle that can be enclosed,
     o     vb: (string) box as a viewbox command,
     o     w: (number) width,
     o     width: (number) width,
     o     x2: (number) x of the right side,
     o     x: (number) x of the left side,
     o     y2: (number) y of the bottom edge,
     o     y: (number) y of the top edge
     o }
    \*/
    elproto.getBBox = function (isWithoutTransform) {
        if (this.type == "tspan") {
            return Snap._.box(this.node.getClientRects().item(0));
        }
        if (!Snap.Matrix || !Snap.path) {
            return this.node.getBBox();
        }
        var el = this,
            m = new Snap.Matrix;
        if (el.removed) {
            return Snap._.box();
        }
        while (el.type == "use") {
            if (!isWithoutTransform) {
                m = m.add(el.transform().localMatrix.translate(el.attr("x") || 0, el.attr("y") || 0));
            }
            if (el.original) {
                el = el.original;
            } else {
                var href = el.attr("xlink:href");
                el = el.original = el.node.ownerDocument.getElementById(href.substring(href.indexOf("#") + 1));
            }
        }
        var _ = el._,
            pathfinder = Snap.path.get[el.type] || Snap.path.get.deflt;
        try {
            if (isWithoutTransform) {
                _.bboxwt = pathfinder ? Snap.path.getBBox(el.realPath = pathfinder(el)) : Snap._.box(el.node.getBBox());
                return Snap._.box(_.bboxwt);
            } else {
                el.realPath = pathfinder(el);
                el.matrix = el.transform().localMatrix;
                _.bbox = Snap.path.getBBox(Snap.path.map(el.realPath, m.add(el.matrix)));
                return Snap._.box(_.bbox);
            }
        } catch (e) {
            // Firefox doesn’t give you bbox of hidden element
            return Snap._.box();
        }
    };
    var propString = function () {
        return this.string;
    };
    function extractTransform(el, tstr) {
        if (tstr == null) {
            var doReturn = true;
            if (el.type == "linearGradient" || el.type == "radialGradient") {
                tstr = el.node.getAttribute("gradientTransform");
            } else if (el.type == "pattern") {
                tstr = el.node.getAttribute("patternTransform");
            } else {
                tstr = el.node.getAttribute("transform");
            }
            if (!tstr) {
                return new Snap.Matrix;
            }
            tstr = Snap._.svgTransform2string(tstr);
        } else {
            if (!Snap._.rgTransform.test(tstr)) {
                tstr = Snap._.svgTransform2string(tstr);
            } else {
                tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || "");
            }
            if (is(tstr, "array")) {
                tstr = Snap.path ? Snap.path.toString.call(tstr) : Str(tstr);
            }
            el._.transform = tstr;
        }
        var m = Snap._.transform2matrix(tstr, el.getBBox(1));
        if (doReturn) {
            return m;
        } else {
            el.matrix = m;
        }
    }
    /*\
     * Element.transform
     [ method ]
     **
     * Gets or sets transformation of the element
     **
     - tstr (string) transform string in Snap or SVG format
     = (Element) the current element
     * or
     = (object) transformation descriptor:
     o {
     o     string (string) transform string,
     o     globalMatrix (Matrix) matrix of all transformations applied to element or its parents,
     o     localMatrix (Matrix) matrix of transformations applied only to the element,
     o     diffMatrix (Matrix) matrix of difference between global and local transformations,
     o     global (string) global transformation as string,
     o     local (string) local transformation as string,
     o     toString (function) returns `string` property
     o }
    \*/
    elproto.transform = function (tstr) {
        var _ = this._;
        if (tstr == null) {
            var papa = this,
                global = new Snap.Matrix(this.node.getCTM()),
                local = extractTransform(this),
                ms = [local],
                m = new Snap.Matrix,
                i,
                localString = local.toTransformString(),
                string = Str(local) == Str(this.matrix) ?
                            Str(_.transform) : localString;
            while (papa.type != "svg" && (papa = papa.parent())) {
                ms.push(extractTransform(papa));
            }
            i = ms.length;
            while (i--) {
                m.add(ms[i]);
            }
            return {
                string: string,
                globalMatrix: global,
                totalMatrix: m,
                localMatrix: local,
                diffMatrix: global.clone().add(local.invert()),
                global: global.toTransformString(),
                total: m.toTransformString(),
                local: localString,
                toString: propString
            };
        }
        if (tstr instanceof Snap.Matrix) {
            this.matrix = tstr;
            this._.transform = tstr.toTransformString();
        } else {
            extractTransform(this, tstr);
        }

        if (this.node) {
            if (this.type == "linearGradient" || this.type == "radialGradient") {
                $(this.node, {gradientTransform: this.matrix});
            } else if (this.type == "pattern") {
                $(this.node, {patternTransform: this.matrix});
            } else {
                $(this.node, {transform: this.matrix});
            }
        }

        return this;
    };
    /*\
     * Element.parent
     [ method ]
     **
     * Returns the element's parent
     **
     = (Element) the parent element
    \*/
    elproto.parent = function () {
        return wrap(this.node.parentNode);
    };
    /*\
     * Element.append
     [ method ]
     **
     * Appends the given element to current one
     **
     - el (Element|Set) element to append
     = (Element) the parent element
    \*/
    /*\
     * Element.add
     [ method ]
     **
     * See @Element.append
    \*/
    elproto.append = elproto.add = function (el) {
        if (el) {
            if (el.type == "set") {
                var it = this;
                el.forEach(function (el) {
                    it.add(el);
                });
                return this;
            }
            el = wrap(el);
            this.node.appendChild(el.node);
            el.paper = this.paper;
        }
        return this;
    };
    /*\
     * Element.appendTo
     [ method ]
     **
     * Appends the current element to the given one
     **
     - el (Element) parent element to append to
     = (Element) the child element
    \*/
    elproto.appendTo = function (el) {
        if (el) {
            el = wrap(el);
            el.append(this);
        }
        return this;
    };
    /*\
     * Element.prepend
     [ method ]
     **
     * Prepends the given element to the current one
     **
     - el (Element) element to prepend
     = (Element) the parent element
    \*/
    elproto.prepend = function (el) {
        if (el) {
            if (el.type == "set") {
                var it = this,
                    first;
                el.forEach(function (el) {
                    if (first) {
                        first.after(el);
                    } else {
                        it.prepend(el);
                    }
                    first = el;
                });
                return this;
            }
            el = wrap(el);
            var parent = el.parent();
            this.node.insertBefore(el.node, this.node.firstChild);
            this.add && this.add();
            el.paper = this.paper;
            this.parent() && this.parent().add();
            parent && parent.add();
        }
        return this;
    };
    /*\
     * Element.prependTo
     [ method ]
     **
     * Prepends the current element to the given one
     **
     - el (Element) parent element to prepend to
     = (Element) the child element
    \*/
    elproto.prependTo = function (el) {
        el = wrap(el);
        el.prepend(this);
        return this;
    };
    /*\
     * Element.before
     [ method ]
     **
     * Inserts given element before the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/
    elproto.before = function (el) {
        if (el.type == "set") {
            var it = this;
            el.forEach(function (el) {
                var parent = el.parent();
                it.node.parentNode.insertBefore(el.node, it.node);
                parent && parent.add();
            });
            this.parent().add();
            return this;
        }
        el = wrap(el);
        var parent = el.parent();
        this.node.parentNode.insertBefore(el.node, this.node);
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.after
     [ method ]
     **
     * Inserts given element after the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/
    elproto.after = function (el) {
        el = wrap(el);
        var parent = el.parent();
        if (this.node.nextSibling) {
            this.node.parentNode.insertBefore(el.node, this.node.nextSibling);
        } else {
            this.node.parentNode.appendChild(el.node);
        }
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.insertBefore
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/
    elproto.insertBefore = function (el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.insertAfter
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/
    elproto.insertAfter = function (el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node.nextSibling);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.remove
     [ method ]
     **
     * Removes element from the DOM
     = (Element) the detached element
    \*/
    elproto.remove = function () {
        var parent = this.parent();
        this.node.parentNode && this.node.parentNode.removeChild(this.node);
        delete this.paper;
        this.removed = true;
        parent && parent.add();
        return this;
    };
    /*\
     * Element.select
     [ method ]
     **
     * Gathers the nested @Element matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Element) result of query selection
    \*/
    elproto.select = function (query) {
        return wrap(this.node.querySelector(query));
    };
    /*\
     * Element.selectAll
     [ method ]
     **
     * Gathers nested @Element objects matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Set|array) result of query selection
    \*/
    elproto.selectAll = function (query) {
        var nodelist = this.node.querySelectorAll(query),
            set = (Snap.set || Array)();
        for (var i = 0; i < nodelist.length; i++) {
            set.push(wrap(nodelist[i]));
        }
        return set;
    };
    /*\
     * Element.asPX
     [ method ]
     **
     * Returns given attribute of the element as a `px` value (not %, em, etc.)
     **
     - attr (string) attribute name
     - value (string) #optional attribute value
     = (Element) result of query selection
    \*/
    elproto.asPX = function (attr, value) {
        if (value == null) {
            value = this.attr(attr);
        }
        return +unit2px(this, attr, value);
    };
    // SIERRA Element.use(): I suggest adding a note about how to access the original element the returned <use> instantiates. It's a part of SVG with which ordinary web developers may be least familiar.
    /*\
     * Element.use
     [ method ]
     **
     * Creates a `<use>` element linked to the current element
     **
     = (Element) the `<use>` element
    \*/
    elproto.use = function () {
        var use,
            id = this.node.id;
        if (!id) {
            id = this.id;
            $(this.node, {
                id: id
            });
        }
        if (this.type == "linearGradient" || this.type == "radialGradient" ||
            this.type == "pattern") {
            use = make(this.type, this.node.parentNode);
        } else {
            use = make("use", this.node.parentNode);
        }
        $(use.node, {
            "xlink:href": "#" + id
        });
        use.original = this;
        return use;
    };
    function fixids(el) {
        var els = el.selectAll("*"),
            it,
            url = /^\s*url\(("|'|)(.*)\1\)\s*$/,
            ids = [],
            uses = {};
        function urltest(it, name) {
            var val = $(it.node, name);
            val = val && val.match(url);
            val = val && val[2];
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function (id) {
                    var attr = {};
                    attr[name] = Snap.url(id);
                    $(it.node, attr);
                });
            }
        }
        function linktest(it) {
            var val = $(it.node, "xlink:href");
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function (id) {
                    it.attr("xlink:href", "#" + id);
                });
            }
        }
        for (var i = 0, ii = els.length; i < ii; i++) {
            it = els[i];
            urltest(it, "fill");
            urltest(it, "stroke");
            urltest(it, "filter");
            urltest(it, "mask");
            urltest(it, "clip-path");
            linktest(it);
            var oldid = $(it.node, "id");
            if (oldid) {
                $(it.node, {id: it.id});
                ids.push({
                    old: oldid,
                    id: it.id
                });
            }
        }
        for (i = 0, ii = ids.length; i < ii; i++) {
            var fs = uses[ids[i].old];
            if (fs) {
                for (var j = 0, jj = fs.length; j < jj; j++) {
                    fs[j](ids[i].id);
                }
            }
        }
    }
    /*\
     * Element.clone
     [ method ]
     **
     * Creates a clone of the element and inserts it after the element
     **
     = (Element) the clone
    \*/
    elproto.clone = function () {
        var clone = wrap(this.node.cloneNode(true));
        if ($(clone.node, "id")) {
            $(clone.node, {id: clone.id});
        }
        fixids(clone);
        clone.insertAfter(this);
        return clone;
    };
    /*\
     * Element.toDefs
     [ method ]
     **
     * Moves element to the shared `<defs>` area
     **
     = (Element) the element
    \*/
    elproto.toDefs = function () {
        var defs = getSomeDefs(this);
        defs.appendChild(this.node);
        return this;
    };
    /*\
     * Element.toPattern
     [ method ]
     **
     * Creates a `<pattern>` element from the current element
     **
     * To create a pattern you have to specify the pattern rect:
     - x (string|number)
     - y (string|number)
     - width (string|number)
     - height (string|number)
     = (Element) the `<pattern>` element
     * You can use pattern later on as an argument for `fill` attribute:
     | var p = paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
     |         fill: "none",
     |         stroke: "#bada55",
     |         strokeWidth: 5
     |     }).pattern(0, 0, 10, 10),
     |     c = paper.circle(200, 200, 100);
     | c.attr({
     |     fill: p
     | });
    \*/
    elproto.pattern = elproto.toPattern = function (x, y, width, height) {
        var p = make("pattern", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        $(p.node, {
            x: x,
            y: y,
            width: width,
            height: height,
            patternUnits: "userSpaceOnUse",
            id: p.id,
            viewBox: [x, y, width, height].join(" ")
        });
        p.node.appendChild(this.node);
        return p;
    };
// SIERRA Element.marker(): clarify what a reference point is. E.g., helps you offset the object from its edge such as when centering it over a path.
// SIERRA Element.marker(): I suggest the method should accept default reference point values.  Perhaps centered with (refX = width/2) and (refY = height/2)? Also, couldn't it assume the element's current _width_ and _height_? And please specify what _x_ and _y_ mean: offsets? If so, from where?  Couldn't they also be assigned default values?
    /*\
     * Element.marker
     [ method ]
     **
     * Creates a `<marker>` element from the current element
     **
     * To create a marker you have to specify the bounding rect and reference point:
     - x (number)
     - y (number)
     - width (number)
     - height (number)
     - refX (number)
     - refY (number)
     = (Element) the `<marker>` element
     * You can specify the marker later as an argument for `marker-start`, `marker-end`, `marker-mid`, and `marker` attributes. The `marker` attribute places the marker at every point along the path, and `marker-mid` places them at every point except the start and end.
    \*/
    // TODO add usage for markers
    elproto.marker = function (x, y, width, height, refX, refY) {
        var p = make("marker", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            refX = x.refX || x.cx;
            refY = x.refY || x.cy;
            x = x.x;
        }
        $(p.node, {
            viewBox: [x, y, width, height].join(" "),
            markerWidth: width,
            markerHeight: height,
            orient: "auto",
            refX: refX || 0,
            refY: refY || 0,
            id: p.id
        });
        p.node.appendChild(this.node);
        return p;
    };
    var eldata = {};
    /*\
     * Element.data
     [ method ]
     **
     * Adds or retrieves given value associated with given key. (Don’t confuse
     * with `data-` attributes)
     *
     * See also @Element.removeData
     - key (string) key to store data
     - value (any) #optional value to store
     = (object) @Element
     * or, if value is not specified:
     = (any) value
     > Usage
     | for (var i = 0, i < 5, i++) {
     |     paper.circle(10 + 15 * i, 10, 10)
     |          .attr({fill: "#000"})
     |          .data("i", i)
     |          .click(function () {
     |             alert(this.data("i"));
     |          });
     | }
    \*/
    elproto.data = function (key, value) {
        var data = eldata[this.id] = eldata[this.id] || {};
        if (arguments.length == 0){
            eve("snap.data.get." + this.id, this, data, null);
            return data;
        }
        if (arguments.length == 1) {
            if (Snap.is(key, "object")) {
                for (var i in key) if (key[has](i)) {
                    this.data(i, key[i]);
                }
                return this;
            }
            eve("snap.data.get." + this.id, this, data[key], key);
            return data[key];
        }
        data[key] = value;
        eve("snap.data.set." + this.id, this, value, key);
        return this;
    };
    /*\
     * Element.removeData
     [ method ]
     **
     * Removes value associated with an element by given key.
     * If key is not provided, removes all the data of the element.
     - key (string) #optional key
     = (object) @Element
    \*/
    elproto.removeData = function (key) {
        if (key == null) {
            eldata[this.id] = {};
        } else {
            eldata[this.id] && delete eldata[this.id][key];
        }
        return this;
    };
    /*\
     * Element.outerSVG
     [ method ]
     **
     * Returns SVG code for the element, equivalent to HTML's `outerHTML`.
     *
     * See also @Element.innerSVG
     = (string) SVG code for the element
    \*/
    /*\
     * Element.toString
     [ method ]
     **
     * See @Element.outerSVG
    \*/
    elproto.outerSVG = elproto.toString = toString(1);
    /*\
     * Element.innerSVG
     [ method ]
     **
     * Returns SVG code for the element's contents, equivalent to HTML's `innerHTML`
     = (string) SVG code for the element
    \*/
    elproto.innerSVG = toString();
    function toString(type) {
        return function () {
            var res = type ? "<" + this.type : "",
                attr = this.node.attributes,
                chld = this.node.childNodes;
            if (type) {
                for (var i = 0, ii = attr.length; i < ii; i++) {
                    res += " " + attr[i].name + '="' +
                            attr[i].value.replace(/"/g, '\\"') + '"';
                }
            }
            if (chld.length) {
                type && (res += ">");
                for (i = 0, ii = chld.length; i < ii; i++) {
                    if (chld[i].nodeType == 3) {
                        res += chld[i].nodeValue;
                    } else if (chld[i].nodeType == 1) {
                        res += wrap(chld[i]).toString();
                    }
                }
                type && (res += "</" + this.type + ">");
            } else {
                type && (res += "/>");
            }
            return res;
        };
    }
    elproto.toDataURL = function () {
        if (window && window.btoa) {
            var bb = this.getBBox(),
                svg = Snap.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                x: +bb.x.toFixed(3),
                y: +bb.y.toFixed(3),
                width: +bb.width.toFixed(3),
                height: +bb.height.toFixed(3),
                contents: this.outerSVG()
            });
            return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
        }
    };
    /*\
     * Fragment.select
     [ method ]
     **
     * See @Element.select
    \*/
    Fragment.prototype.select = elproto.select;
    /*\
     * Fragment.selectAll
     [ method ]
     **
     * See @Element.selectAll
    \*/
    Fragment.prototype.selectAll = elproto.selectAll;
});

// Copyright (c) 2016 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var elproto = Element.prototype,
        is = Snap.is,
        Str = String,
        has = "hasOwnProperty";
    function slice(from, to, f) {
        return function (arr) {
            var res = arr.slice(from, to);
            if (res.length == 1) {
                res = res[0];
            }
            return f ? f(res) : res;
        };
    }
    var Animation = function (attr, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        this.attr = attr;
        this.dur = ms;
        easing && (this.easing = easing);
        callback && (this.callback = callback);
    };
    Snap._.Animation = Animation;
    /*\
     * Snap.animation
     [ method ]
     **
     * Creates an animation object
     **
     - attr (object) attributes of final destination
     - duration (number) duration of the animation, in milliseconds
     - easing (function) #optional one of easing functions of @mina or custom one
     - callback (function) #optional callback function that fires when animation ends
     = (object) animation object
    \*/
    Snap.animation = function (attr, ms, easing, callback) {
        return new Animation(attr, ms, easing, callback);
    };
    /*\
     * Element.inAnim
     [ method ]
     **
     * Returns a set of animations that may be able to manipulate the current element
     **
     = (object) in format:
     o {
     o     anim (object) animation object,
     o     mina (object) @mina object,
     o     curStatus (number) 0..1 — status of the animation: 0 — just started, 1 — just finished,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
    \*/
    elproto.inAnim = function () {
        var el = this,
            res = [];
        for (var id in el.anims) if (el.anims[has](id)) {
            (function (a) {
                res.push({
                    anim: new Animation(a._attrs, a.dur, a.easing, a._callback),
                    mina: a,
                    curStatus: a.status(),
                    status: function (val) {
                        return a.status(val);
                    },
                    stop: function () {
                        a.stop();
                    }
                });
            }(el.anims[id]));
        }
        return res;
    };
    /*\
     * Snap.animate
     [ method ]
     **
     * Runs generic animation of one number into another with a caring function
     **
     - from (number|array) number or array of numbers
     - to (number|array) number or array of numbers
     - setter (function) caring function that accepts one number argument
     - duration (number) duration, in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function to execute when animation ends
     = (object) animation object in @mina format
     o {
     o     id (string) animation id, consider it read-only,
     o     duration (function) gets or sets the duration of the animation,
     o     easing (function) easing,
     o     speed (function) gets or sets the speed of the animation,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
     | var rect = Snap().rect(0, 0, 10, 10);
     | Snap.animate(0, 10, function (val) {
     |     rect.attr({
     |         x: val
     |     });
     | }, 1000);
     | // in given context is equivalent to
     | rect.animate({x: 10}, 1000);
    \*/
    Snap.animate = function (from, to, setter, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        var now = mina.time(),
            anim = mina(from, to, now, now + ms, mina.time, setter, easing);
        callback && eve.once("mina.finish." + anim.id, callback);
        return anim;
    };
    /*\
     * Element.stop
     [ method ]
     **
     * Stops all the animations for the current element
     **
     = (Element) the current element
    \*/
    elproto.stop = function () {
        var anims = this.inAnim();
        for (var i = 0, ii = anims.length; i < ii; i++) {
            anims[i].stop();
        }
        return this;
    };
    /*\
     * Element.animate
     [ method ]
     **
     * Animates the given attributes of the element
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     = (Element) the current element
    \*/
    elproto.animate = function (attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = attrs.dur;
            attrs = attrs.attr;
        }
        var fkeys = [], tkeys = [], keys = {}, from, to, f, eq,
            el = this;
        for (var key in attrs) if (attrs[has](key)) {
            if (el.equal) {
                eq = el.equal(key, Str(attrs[key]));
                from = eq.from;
                to = eq.to;
                f = eq.f;
            } else {
                from = +el.attr(key);
                to = +attrs[key];
            }
            var len = is(from, "array") ? from.length : 1;
            keys[key] = slice(fkeys.length, fkeys.length + len, f);
            fkeys = fkeys.concat(from);
            tkeys = tkeys.concat(to);
        }
        var now = mina.time(),
            anim = mina(fkeys, tkeys, now, now + ms, mina.time, function (val) {
                var attr = {};
                for (var key in keys) if (keys[has](key)) {
                    attr[key] = keys[key](val);
                }
                el.attr(attr);
            }, easing);
        el.anims[anim.id] = anim;
        anim._attrs = attrs;
        anim._callback = callback;
        eve("snap.animcreated." + el.id, anim);
        eve.once("mina.finish." + anim.id, function () {
            eve.off("mina.*." + anim.id);
            delete el.anims[anim.id];
            callback && callback.call(el);
        });
        eve.once("mina.stop." + anim.id, function () {
            eve.off("mina.*." + anim.id);
            delete el.anims[anim.id];
        });
        return el;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var objectToString = Object.prototype.toString,
        Str = String,
        math = Math,
        E = "";
    function Matrix(a, b, c, d, e, f) {
        if (b == null && objectToString.call(a) == "[object SVGMatrix]") {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.d = a.d;
            this.e = a.e;
            this.f = a.f;
            return;
        }
        if (a != null) {
            this.a = +a;
            this.b = +b;
            this.c = +c;
            this.d = +d;
            this.e = +e;
            this.f = +f;
        } else {
            this.a = 1;
            this.b = 0;
            this.c = 0;
            this.d = 1;
            this.e = 0;
            this.f = 0;
        }
    }
    (function (matrixproto) {
        /*\
         * Matrix.add
         [ method ]
         **
         * Adds the given matrix to existing one
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         * or
         - matrix (object) @Matrix
        \*/
        matrixproto.add = function (a, b, c, d, e, f) {
            if (a && a instanceof Matrix) {
                return this.add(a.a, a.b, a.c, a.d, a.e, a.f);
            }
            var aNew = a * this.a + b * this.c,
                bNew = a * this.b + b * this.d;
            this.e += e * this.a + f * this.c;
            this.f += e * this.b + f * this.d;
            this.c = c * this.a + d * this.c;
            this.d = c * this.b + d * this.d;

            this.a = aNew;
            this.b = bNew;
            return this;
        };
        /*\
         * Matrix.multLeft
         [ method ]
         **
         * Multiplies a passed affine transform to the left: M * this.
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         * or
         - matrix (object) @Matrix
        \*/
        Matrix.prototype.multLeft = function (a, b, c, d, e, f) {
            if (a && a instanceof Matrix) {
                return this.multLeft(a.a, a.b, a.c, a.d, a.e, a.f);
            }
            var aNew = a * this.a + c * this.b,
                cNew = a * this.c + c * this.d,
                eNew = a * this.e + c * this.f + e;
            this.b = b * this.a + d * this.b;
            this.d = b * this.c + d * this.d;
            this.f = b * this.e + d * this.f + f;

            this.a = aNew;
            this.c = cNew;
            this.e = eNew;
            return this;
        };
        /*\
         * Matrix.invert
         [ method ]
         **
         * Returns an inverted version of the matrix
         = (object) @Matrix
        \*/
        matrixproto.invert = function () {
            var me = this,
                x = me.a * me.d - me.b * me.c;
            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
        };
        /*\
         * Matrix.clone
         [ method ]
         **
         * Returns a copy of the matrix
         = (object) @Matrix
        \*/
        matrixproto.clone = function () {
            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
        };
        /*\
         * Matrix.translate
         [ method ]
         **
         * Translate the matrix
         - x (number) horizontal offset distance
         - y (number) vertical offset distance
        \*/
        matrixproto.translate = function (x, y) {
            this.e += x * this.a + y * this.c;
            this.f += x * this.b + y * this.d;
            return this;
        };
        /*\
         * Matrix.scale
         [ method ]
         **
         * Scales the matrix
         - x (number) amount to be scaled, with `1` resulting in no change
         - y (number) #optional amount to scale along the vertical axis. (Otherwise `x` applies to both axes.)
         - cx (number) #optional horizontal origin point from which to scale
         - cy (number) #optional vertical origin point from which to scale
         * Default cx, cy is the middle point of the element.
        \*/
        matrixproto.scale = function (x, y, cx, cy) {
            y == null && (y = x);
            (cx || cy) && this.translate(cx, cy);
            this.a *= x;
            this.b *= x;
            this.c *= y;
            this.d *= y;
            (cx || cy) && this.translate(-cx, -cy);
            return this;
        };
        /*\
         * Matrix.rotate
         [ method ]
         **
         * Rotates the matrix
         - a (number) angle of rotation, in degrees
         - x (number) horizontal origin point from which to rotate
         - y (number) vertical origin point from which to rotate
        \*/
        matrixproto.rotate = function (a, x, y) {
            a = Snap.rad(a);
            x = x || 0;
            y = y || 0;
            var cos = +math.cos(a).toFixed(9),
                sin = +math.sin(a).toFixed(9);
            this.add(cos, sin, -sin, cos, x, y);
            return this.add(1, 0, 0, 1, -x, -y);
        };
        /*\
         * Matrix.skewX
         [ method ]
         **
         * Skews the matrix along the x-axis
         - x (number) Angle to skew along the x-axis (in degrees).
        \*/
        matrixproto.skewX = function (x) {
            return this.skew(x, 0);
        };
        /*\
         * Matrix.skewY
         [ method ]
         **
         * Skews the matrix along the y-axis
         - y (number) Angle to skew along the y-axis (in degrees).
        \*/
        matrixproto.skewY = function (y) {
            return this.skew(0, y);
        };
        /*\
         * Matrix.skew
         [ method ]
         **
         * Skews the matrix
         - y (number) Angle to skew along the y-axis (in degrees).
         - x (number) Angle to skew along the x-axis (in degrees).
        \*/
        matrixproto.skew = function (x, y) {
            x = x || 0;
            y = y || 0;
            x = Snap.rad(x);
            y = Snap.rad(y);
            var c = math.tan(x).toFixed(9);
            var b = math.tan(y).toFixed(9);
            return this.add(1, b, c, 1, 0, 0);
        };
        /*\
         * Matrix.x
         [ method ]
         **
         * Returns x coordinate for given point after transformation described by the matrix. See also @Matrix.y
         - x (number)
         - y (number)
         = (number) x
        \*/
        matrixproto.x = function (x, y) {
            return x * this.a + y * this.c + this.e;
        };
        /*\
         * Matrix.y
         [ method ]
         **
         * Returns y coordinate for given point after transformation described by the matrix. See also @Matrix.x
         - x (number)
         - y (number)
         = (number) y
        \*/
        matrixproto.y = function (x, y) {
            return x * this.b + y * this.d + this.f;
        };
        matrixproto.get = function (i) {
            return +this[Str.fromCharCode(97 + i)].toFixed(4);
        };
        matrixproto.toString = function () {
            return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
        };
        matrixproto.offset = function () {
            return [this.e.toFixed(4), this.f.toFixed(4)];
        };
        function norm(a) {
            return a[0] * a[0] + a[1] * a[1];
        }
        function normalize(a) {
            var mag = math.sqrt(norm(a));
            a[0] && (a[0] /= mag);
            a[1] && (a[1] /= mag);
        }
        /*\
         * Matrix.determinant
         [ method ]
         **
         * Finds determinant of the given matrix.
         = (number) determinant
        \*/
        matrixproto.determinant = function () {
            return this.a * this.d - this.b * this.c;
        };
        /*\
         * Matrix.split
         [ method ]
         **
         * Splits matrix into primitive transformations
         = (object) in format:
         o dx (number) translation by x
         o dy (number) translation by y
         o scalex (number) scale by x
         o scaley (number) scale by y
         o shear (number) shear
         o rotate (number) rotation in deg
         o isSimple (boolean) could it be represented via simple transformations
        \*/
        matrixproto.split = function () {
            var out = {};
            // translation
            out.dx = this.e;
            out.dy = this.f;

            // scale and shear
            var row = [[this.a, this.b], [this.c, this.d]];
            out.scalex = math.sqrt(norm(row[0]));
            normalize(row[0]);

            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

            out.scaley = math.sqrt(norm(row[1]));
            normalize(row[1]);
            out.shear /= out.scaley;

            if (this.determinant() < 0) {
                out.scalex = -out.scalex;
            }

            // rotation
            var sin = row[0][1],
                cos = row[1][1];
            if (cos < 0) {
                out.rotate = Snap.deg(math.acos(cos));
                if (sin < 0) {
                    out.rotate = 360 - out.rotate;
                }
            } else {
                out.rotate = Snap.deg(math.asin(sin));
            }

            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
            return out;
        };
        /*\
         * Matrix.toTransformString
         [ method ]
         **
         * Returns transform string that represents given matrix
         = (string) transform string
        \*/
        matrixproto.toTransformString = function (shorter) {
            var s = shorter || this.split();
            if (!+s.shear.toFixed(9)) {
                s.scalex = +s.scalex.toFixed(4);
                s.scaley = +s.scaley.toFixed(4);
                s.rotate = +s.rotate.toFixed(4);
                return  (s.dx || s.dy ? "t" + [+s.dx.toFixed(4), +s.dy.toFixed(4)] : E) +
                        (s.rotate ? "r" + [+s.rotate.toFixed(4), 0, 0] : E) +
                        (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E);
            } else {
                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
            }
        };
    })(Matrix.prototype);
    /*\
     * Snap.Matrix
     [ method ]
     **
     * Matrix constructor, extend on your own risk.
     * To create matrices use @Snap.matrix.
    \*/
    Snap.Matrix = Matrix;
    /*\
     * Snap.matrix
     [ method ]
     **
     * Utility method
     **
     * Returns a matrix based on the given parameters
     - a (number)
     - b (number)
     - c (number)
     - d (number)
     - e (number)
     - f (number)
     * or
     - svgMatrix (SVGMatrix)
     = (object) @Matrix
    \*/
    Snap.matrix = function (a, b, c, d, e, f) {
        return new Matrix(a, b, c, d, e, f);
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var has = "hasOwnProperty",
        make = Snap._.make,
        wrap = Snap._.wrap,
        is = Snap.is,
        getSomeDefs = Snap._.getSomeDefs,
        reURLValue = /^url\((['"]?)([^)]+)\1\)$/,
        $ = Snap._.$,
        URL = Snap.url,
        Str = String,
        separator = Snap._.separator,
        E = "";
    /*\
     * Snap.deurl
     [ method ]
     **
     * Unwraps path from `"url(<path>)"`.
     - value (string) url path
     = (string) unwrapped path
    \*/
    Snap.deurl = function (value) {
        var res = String(value).match(reURLValue);
        return res ? res[2] : value;
    }
    // Attributes event handlers
    eve.on("snap.util.attr.mask", function (value) {
        if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1) {
                value = value.node.firstChild;
                getSomeDefs(this).appendChild(value);
                value = wrap(value);
            }
            if (value.type == "mask") {
                var mask = value;
            } else {
                mask = make("mask", getSomeDefs(this));
                mask.node.appendChild(value.node);
            }
            !mask.node.id && $(mask.node, {
                id: mask.id
            });
            $(this.node, {
                mask: URL(mask.id)
            });
        }
    });
    (function (clipIt) {
        eve.on("snap.util.attr.clip", clipIt);
        eve.on("snap.util.attr.clip-path", clipIt);
        eve.on("snap.util.attr.clipPath", clipIt);
    }(function (value) {
        if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            var clip,
                node = value.node;
            while (node) {
                if (node.nodeName === "clipPath") {
                    clip = new Element(node);
                    break;
                }
                if (node.nodeName === "svg") {
                    clip = undefined;
                    break;
                }
                node = node.parentNode;
            }
            if (!clip) {
                clip = make("clipPath", getSomeDefs(this));
                clip.node.appendChild(value.node);
                !clip.node.id && $(clip.node, {
                    id: clip.id
                });
            }
            $(this.node, {
                "clip-path": URL(clip.node.id || clip.id)
            });
        }
    }));
    function fillStroke(name) {
        return function (value) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1 &&
                (value.node.firstChild.tagName == "radialGradient" ||
                value.node.firstChild.tagName == "linearGradient" ||
                value.node.firstChild.tagName == "pattern")) {
                value = value.node.firstChild;
                getSomeDefs(this).appendChild(value);
                value = wrap(value);
            }
            if (value instanceof Element) {
                if (value.type == "radialGradient" || value.type == "linearGradient"
                   || value.type == "pattern") {
                    if (!value.node.id) {
                        $(value.node, {
                            id: value.id
                        });
                    }
                    var fill = URL(value.node.id);
                } else {
                    fill = value.attr(name);
                }
            } else {
                fill = Snap.color(value);
                if (fill.error) {
                    var grad = Snap(getSomeDefs(this).ownerSVGElement).gradient(value);
                    if (grad) {
                        if (!grad.node.id) {
                            $(grad.node, {
                                id: grad.id
                            });
                        }
                        fill = URL(grad.node.id);
                    } else {
                        fill = value;
                    }
                } else {
                    fill = Str(fill);
                }
            }
            var attrs = {};
            attrs[name] = fill;
            $(this.node, attrs);
            this.node.style[name] = E;
        };
    }
    eve.on("snap.util.attr.fill", fillStroke("fill"));
    eve.on("snap.util.attr.stroke", fillStroke("stroke"));
    var gradrg = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
    eve.on("snap.util.grad.parse", function parseGrad(string) {
        string = Str(string);
        var tokens = string.match(gradrg);
        if (!tokens) {
            return null;
        }
        var type = tokens[1],
            params = tokens[2],
            stops = tokens[3];
        params = params.split(/\s*,\s*/).map(function (el) {
            return +el == el ? +el : el;
        });
        if (params.length == 1 && params[0] == 0) {
            params = [];
        }
        stops = stops.split("-");
        stops = stops.map(function (el) {
            el = el.split(":");
            var out = {
                color: el[0]
            };
            if (el[1]) {
                out.offset = parseFloat(el[1]);
            }
            return out;
        });
        var len = stops.length,
            start = 0,
            j = 0;
        function seed(i, end) {
            var step = (end - start) / (i - j);
            for (var k = j; k < i; k++) {
                stops[k].offset = +(+start + step * (k - j)).toFixed(2);
            }
            j = i;
            start = end;
        }
        len--;
        for (var i = 0; i < len; i++) if ("offset" in stops[i]) {
            seed(i, stops[i].offset);
        }
        stops[len].offset = stops[len].offset || 100;
        seed(len, stops[len].offset);
        return {
            type: type,
            params: params,
            stops: stops
        };
    });

    eve.on("snap.util.attr.d", function (value) {
        eve.stop();
        if (is(value, "array") && is(value[0], "array")) {
            value = Snap.path.toString.call(value);
        }
        value = Str(value);
        if (value.match(/[ruo]/i)) {
            value = Snap.path.toAbsolute(value);
        }
        $(this.node, {d: value});
    })(-1);
    eve.on("snap.util.attr.#text", function (value) {
        eve.stop();
        value = Str(value);
        var txt = glob.doc.createTextNode(value);
        while (this.node.firstChild) {
            this.node.removeChild(this.node.firstChild);
        }
        this.node.appendChild(txt);
    })(-1);
    eve.on("snap.util.attr.path", function (value) {
        eve.stop();
        this.attr({d: value});
    })(-1);
    eve.on("snap.util.attr.class", function (value) {
        eve.stop();
        this.node.className.baseVal = value;
    })(-1);
    eve.on("snap.util.attr.viewBox", function (value) {
        var vb;
        if (is(value, "object") && "x" in value) {
            vb = [value.x, value.y, value.width, value.height].join(" ");
        } else if (is(value, "array")) {
            vb = value.join(" ");
        } else {
            vb = value;
        }
        $(this.node, {
            viewBox: vb
        });
        eve.stop();
    })(-1);
    eve.on("snap.util.attr.transform", function (value) {
        this.transform(value);
        eve.stop();
    })(-1);
    eve.on("snap.util.attr.r", function (value) {
        if (this.type == "rect") {
            eve.stop();
            $(this.node, {
                rx: value,
                ry: value
            });
        }
    })(-1);
    eve.on("snap.util.attr.textpath", function (value) {
        eve.stop();
        if (this.type == "text") {
            var id, tp, node;
            if (!value && this.textPath) {
                tp = this.textPath;
                while (tp.node.firstChild) {
                    this.node.appendChild(tp.node.firstChild);
                }
                tp.remove();
                delete this.textPath;
                return;
            }
            if (is(value, "string")) {
                var defs = getSomeDefs(this),
                    path = wrap(defs.parentNode).path(value);
                defs.appendChild(path.node);
                id = path.id;
                path.attr({id: id});
            } else {
                value = wrap(value);
                if (value instanceof Element) {
                    id = value.attr("id");
                    if (!id) {
                        id = value.id;
                        value.attr({id: id});
                    }
                }
            }
            if (id) {
                tp = this.textPath;
                node = this.node;
                if (tp) {
                    tp.attr({"xlink:href": "#" + id});
                } else {
                    tp = $("textPath", {
                        "xlink:href": "#" + id
                    });
                    while (node.firstChild) {
                        tp.appendChild(node.firstChild);
                    }
                    node.appendChild(tp);
                    this.textPath = wrap(tp);
                }
            }
        }
    })(-1);
    eve.on("snap.util.attr.text", function (value) {
        if (this.type == "text") {
            var i = 0,
                node = this.node,
                tuner = function (chunk) {
                    var out = $("tspan");
                    if (is(chunk, "array")) {
                        for (var i = 0; i < chunk.length; i++) {
                            out.appendChild(tuner(chunk[i]));
                        }
                    } else {
                        out.appendChild(glob.doc.createTextNode(chunk));
                    }
                    out.normalize && out.normalize();
                    return out;
                };
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
            var tuned = tuner(value);
            while (tuned.firstChild) {
                node.appendChild(tuned.firstChild);
            }
        }
        eve.stop();
    })(-1);
    function setFontSize(value) {
        eve.stop();
        if (value == +value) {
            value += "px";
        }
        this.node.style.fontSize = value;
    }
    eve.on("snap.util.attr.fontSize", setFontSize)(-1);
    eve.on("snap.util.attr.font-size", setFontSize)(-1);


    eve.on("snap.util.getattr.transform", function () {
        eve.stop();
        return this.transform();
    })(-1);
    eve.on("snap.util.getattr.textpath", function () {
        eve.stop();
        return this.textPath;
    })(-1);
    // Markers
    (function () {
        function getter(end) {
            return function () {
                eve.stop();
                var style = glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + end);
                if (style == "none") {
                    return style;
                } else {
                    return Snap(glob.doc.getElementById(style.match(reURLValue)[1]));
                }
            };
        }
        function setter(end) {
            return function (value) {
                eve.stop();
                var name = "marker" + end.charAt(0).toUpperCase() + end.substring(1);
                if (value == "" || !value) {
                    this.node.style[name] = "none";
                    return;
                }
                if (value.type == "marker") {
                    var id = value.node.id;
                    if (!id) {
                        $(value.node, {id: value.id});
                    }
                    this.node.style[name] = URL(id);
                    return;
                }
            };
        }
        eve.on("snap.util.getattr.marker-end", getter("end"))(-1);
        eve.on("snap.util.getattr.markerEnd", getter("end"))(-1);
        eve.on("snap.util.getattr.marker-start", getter("start"))(-1);
        eve.on("snap.util.getattr.markerStart", getter("start"))(-1);
        eve.on("snap.util.getattr.marker-mid", getter("mid"))(-1);
        eve.on("snap.util.getattr.markerMid", getter("mid"))(-1);
        eve.on("snap.util.attr.marker-end", setter("end"))(-1);
        eve.on("snap.util.attr.markerEnd", setter("end"))(-1);
        eve.on("snap.util.attr.marker-start", setter("start"))(-1);
        eve.on("snap.util.attr.markerStart", setter("start"))(-1);
        eve.on("snap.util.attr.marker-mid", setter("mid"))(-1);
        eve.on("snap.util.attr.markerMid", setter("mid"))(-1);
    }());
    eve.on("snap.util.getattr.r", function () {
        if (this.type == "rect" && $(this.node, "rx") == $(this.node, "ry")) {
            eve.stop();
            return $(this.node, "rx");
        }
    })(-1);
    function textExtract(node) {
        var out = [];
        var children = node.childNodes;
        for (var i = 0, ii = children.length; i < ii; i++) {
            var chi = children[i];
            if (chi.nodeType == 3) {
                out.push(chi.nodeValue);
            }
            if (chi.tagName == "tspan") {
                if (chi.childNodes.length == 1 && chi.firstChild.nodeType == 3) {
                    out.push(chi.firstChild.nodeValue);
                } else {
                    out.push(textExtract(chi));
                }
            }
        }
        return out;
    }
    eve.on("snap.util.getattr.text", function () {
        if (this.type == "text" || this.type == "tspan") {
            eve.stop();
            var out = textExtract(this.node);
            return out.length == 1 ? out[0] : out;
        }
    })(-1);
    eve.on("snap.util.getattr.#text", function () {
        return this.node.textContent;
    })(-1);
    eve.on("snap.util.getattr.fill", function (internal) {
        if (internal) {
            return;
        }
        eve.stop();
        var value = eve("snap.util.getattr.fill", this, true).firstDefined();
        return Snap(Snap.deurl(value)) || value;
    })(-1);
    eve.on("snap.util.getattr.stroke", function (internal) {
        if (internal) {
            return;
        }
        eve.stop();
        var value = eve("snap.util.getattr.stroke", this, true).firstDefined();
        return Snap(Snap.deurl(value)) || value;
    })(-1);
    eve.on("snap.util.getattr.viewBox", function () {
        eve.stop();
        var vb = $(this.node, "viewBox");
        if (vb) {
            vb = vb.split(separator);
            return Snap._.box(+vb[0], +vb[1], +vb[2], +vb[3]);
        } else {
            return;
        }
    })(-1);
    eve.on("snap.util.getattr.points", function () {
        var p = $(this.node, "points");
        eve.stop();
        if (p) {
            return p.split(separator);
        } else {
            return;
        }
    })(-1);
    eve.on("snap.util.getattr.path", function () {
        var p = $(this.node, "d");
        eve.stop();
        return p;
    })(-1);
    eve.on("snap.util.getattr.class", function () {
        return this.node.className.baseVal;
    })(-1);
    function getFontSize() {
        eve.stop();
        return this.node.style.fontSize;
    }
    eve.on("snap.util.getattr.fontSize", getFontSize)(-1);
    eve.on("snap.util.getattr.font-size", getFontSize)(-1);
});

// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var rgNotSpace = /\S+/g,
        rgBadSpace = /[\t\r\n\f]/g,
        rgTrim = /(^\s+|\s+$)/g,
        Str = String,
        elproto = Element.prototype;
    /*\
     * Element.addClass
     [ method ]
     **
     * Adds given class name or list of class names to the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/
    elproto.addClass = function (value) {
        var classes = Str(value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;

        if (classes.length) {
            j = 0;
            while (clazz = classes[j++]) {
                pos = curClasses.indexOf(clazz);
                if (!~pos) {
                    curClasses.push(clazz);
                }
            }

            finalValue = curClasses.join(" ");
            if (className != finalValue) {
                elem.className.baseVal = finalValue;
            }
        }
        return this;
    };
    /*\
     * Element.removeClass
     [ method ]
     **
     * Removes given class name or list of class names from the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/
    elproto.removeClass = function (value) {
        var classes = Str(value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;
        if (curClasses.length) {
            j = 0;
            while (clazz = classes[j++]) {
                pos = curClasses.indexOf(clazz);
                if (~pos) {
                    curClasses.splice(pos, 1);
                }
            }

            finalValue = curClasses.join(" ");
            if (className != finalValue) {
                elem.className.baseVal = finalValue;
            }
        }
        return this;
    };
    /*\
     * Element.hasClass
     [ method ]
     **
     * Checks if the element has a given class name in the list of class names applied to it.
     - value (string) class name
     **
     = (boolean) `true` if the element has given class
    \*/
    elproto.hasClass = function (value) {
        var elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [];
        return !!~curClasses.indexOf(value);
    };
    /*\
     * Element.toggleClass
     [ method ]
     **
     * Add or remove one or more classes from the element, depending on either
     * the class’s presence or the value of the `flag` argument.
     - value (string) class name or space separated list of class names
     - flag (boolean) value to determine whether the class should be added or removed
     **
     = (Element) original element.
    \*/
    elproto.toggleClass = function (value, flag) {
        if (flag != null) {
            if (flag) {
                return this.addClass(value);
            } else {
                return this.removeClass(value);
            }
        }
        var classes = (value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;
        j = 0;
        while (clazz = classes[j++]) {
            pos = curClasses.indexOf(clazz);
            if (~pos) {
                curClasses.splice(pos, 1);
            } else {
                curClasses.push(clazz);
            }
        }

        finalValue = curClasses.join(" ");
        if (className != finalValue) {
            elem.className.baseVal = finalValue;
        }
        return this;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var operators = {
            "+": function (x, y) {
                    return x + y;
                },
            "-": function (x, y) {
                    return x - y;
                },
            "/": function (x, y) {
                    return x / y;
                },
            "*": function (x, y) {
                    return x * y;
                }
        },
        Str = String,
        reUnit = /[a-z]+$/i,
        reAddon = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function (val) {
            return +val.toFixed(3) + unit;
        };
    }
    eve.on("snap.util.attr", function (val) {
        var plus = Str(val).match(reAddon);
        if (plus) {
            var evnt = eve.nt(),
                name = evnt.substring(evnt.lastIndexOf(".") + 1),
                a = this.attr(name),
                atr = {};
            eve.stop();
            var unit = plus[3] || "",
                aUnit = a.match(reUnit),
                op = operators[plus[1]];
            if (aUnit && aUnit == unit) {
                val = op(parseFloat(a), +plus[2]);
            } else {
                a = this.asPX(name);
                val = op(this.asPX(name), this.asPX(name, plus[2] + unit));
            }
            if (isNaN(a) || isNaN(val)) {
                return;
            }
            atr[name] = val;
            this.attr(atr);
        }
    })(-10);
    eve.on("snap.util.equal", function (name, b) {
        var A, B, a = Str(this.attr(name) || ""),
            el = this,
            bplus = Str(b).match(reAddon);
        if (bplus) {
            eve.stop();
            var unit = bplus[3] || "",
                aUnit = a.match(reUnit),
                op = operators[bplus[1]];
            if (aUnit && aUnit == unit) {
                return {
                    from: parseFloat(a),
                    to: op(parseFloat(a), +bplus[2]),
                    f: getUnit(aUnit)
                };
            } else {
                a = this.asPX(name);
                return {
                    from: a,
                    to: op(a, this.asPX(name, bplus[2] + unit)),
                    f: getNumber
                };
            }
        }
    })(-10);
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var proto = Paper.prototype,
        is = Snap.is;
    /*\
     * Paper.rect
     [ method ]
     *
     * Draws a rectangle
     **
     - x (number) x coordinate of the top left corner
     - y (number) y coordinate of the top left corner
     - width (number) width
     - height (number) height
     - rx (number) #optional horizontal radius for rounded corners, default is 0
     - ry (number) #optional vertical radius for rounded corners, default is rx or 0
     = (object) the `rect` element
     **
     > Usage
     | // regular rectangle
     | var c = paper.rect(10, 10, 50, 50);
     | // rectangle with rounded corners
     | var c = paper.rect(40, 40, 50, 50, 10);
    \*/
    proto.rect = function (x, y, w, h, rx, ry) {
        var attr;
        if (ry == null) {
            ry = rx;
        }
        if (is(x, "object") && x == "[object Object]") {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                width: w,
                height: h
            };
            if (rx != null) {
                attr.rx = rx;
                attr.ry = ry;
            }
        }
        return this.el("rect", attr);
    };
    /*\
     * Paper.circle
     [ method ]
     **
     * Draws a circle
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - r (number) radius
     = (object) the `circle` element
     **
     > Usage
     | var c = paper.circle(50, 50, 40);
    \*/
    proto.circle = function (cx, cy, r) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
        } else if (cx != null) {
            attr = {
                cx: cx,
                cy: cy,
                r: r
            };
        }
        return this.el("circle", attr);
    };

    var preload = (function () {
        function onerror() {
            this.parentNode.removeChild(this);
        }
        return function (src, f) {
            var img = glob.doc.createElement("img"),
                body = glob.doc.body;
            img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
            img.onload = function () {
                f.call(img);
                img.onload = img.onerror = null;
                body.removeChild(img);
            };
            img.onerror = onerror;
            body.appendChild(img);
            img.src = src;
        };
    }());

    /*\
     * Paper.image
     [ method ]
     **
     * Places an image on the surface
     **
     - src (string) URI of the source image
     - x (number) x offset position
     - y (number) y offset position
     - width (number) width of the image
     - height (number) height of the image
     = (object) the `image` element
     * or
     = (object) Snap element object with type `image`
     **
     > Usage
     | var c = paper.image("apple.png", 10, 10, 80, 80);
    \*/
    proto.image = function (src, x, y, width, height) {
        var el = this.el("image");
        if (is(src, "object") && "src" in src) {
            el.attr(src);
        } else if (src != null) {
            var set = {
                "xlink:href": src,
                preserveAspectRatio: "none"
            };
            if (x != null && y != null) {
                set.x = x;
                set.y = y;
            }
            if (width != null && height != null) {
                set.width = width;
                set.height = height;
            } else {
                preload(src, function () {
                    Snap._.$(el.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                    });
                });
            }
            Snap._.$(el.node, set);
        }
        return el;
    };
    /*\
     * Paper.ellipse
     [ method ]
     **
     * Draws an ellipse
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - rx (number) horizontal radius
     - ry (number) vertical radius
     = (object) the `ellipse` element
     **
     > Usage
     | var c = paper.ellipse(50, 50, 40, 20);
    \*/
    proto.ellipse = function (cx, cy, rx, ry) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
        } else if (cx != null) {
            attr ={
                cx: cx,
                cy: cy,
                rx: rx,
                ry: ry
            };
        }
        return this.el("ellipse", attr);
    };
    // SIERRA Paper.path(): Unclear from the link what a Catmull-Rom curveto is, and why it would make life any easier.
    /*\
     * Paper.path
     [ method ]
     **
     * Creates a `<path>` element using the given string as the path's definition
     - pathString (string) #optional path string in SVG format
     * Path string consists of one-letter commands, followed by comma seprarated arguments in numerical form. Example:
     | "M10,20L30,40"
     * This example features two commands: `M`, with arguments `(10, 20)` and `L` with arguments `(30, 40)`. Uppercase letter commands express coordinates in absolute terms, while lowercase commands express them in relative terms from the most recently declared coordinates.
     *
     # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a> or <a href="https://developer.mozilla.org/en/SVG/Tutorial/Paths">article about path strings at MDN</a>.</p>
     # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
     # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
     # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
     # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
     # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
     # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
     # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
     # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
     # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
     # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
     # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
     # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
     * * _Catmull-Rom curveto_ is a not standard SVG command and added to make life easier.
     * Note: there is a special case when a path consists of only three commands: `M10,10R…z`. In this case the path connects back to its starting point.
     > Usage
     | var c = paper.path("M10 10L90 90");
     | // draw a diagonal line:
     | // move to 10,10, line to 90,90
    \*/
    proto.path = function (d) {
        var attr;
        if (is(d, "object") && !is(d, "array")) {
            attr = d;
        } else if (d) {
            attr = {d: d};
        }
        return this.el("path", attr);
    };
    /*\
     * Paper.g
     [ method ]
     **
     * Creates a group element
     **
     - varargs (…) #optional elements to nest within the group
     = (object) the `g` element
     **
     > Usage
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g(c2, c1); // note that the order of elements is different
     * or
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g();
     | g.add(c2, c1);
    \*/
    /*\
     * Paper.group
     [ method ]
     **
     * See @Paper.g
    \*/
    proto.group = proto.g = function (first) {
        var attr,
            el = this.el("g");
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.svg
     [ method ]
     **
     * Creates a nested SVG element.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `svg` element
     **
    \*/
    proto.svg = function (x, y, width, height, vbx, vby, vbw, vbh) {
        var attrs = {};
        if (is(x, "object") && y == null) {
            attrs = x;
        } else {
            if (x != null) {
                attrs.x = x;
            }
            if (y != null) {
                attrs.y = y;
            }
            if (width != null) {
                attrs.width = width;
            }
            if (height != null) {
                attrs.height = height;
            }
            if (vbx != null && vby != null && vbw != null && vbh != null) {
                attrs.viewBox = [vbx, vby, vbw, vbh];
            }
        }
        return this.el("svg", attrs);
    };
    /*\
     * Paper.mask
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a mask.
     **
     = (object) the `mask` element
     **
    \*/
    proto.mask = function (first) {
        var attr,
            el = this.el("mask");
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.ptrn
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a pattern.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `pattern` element
     **
    \*/
    proto.ptrn = function (x, y, width, height, vx, vy, vw, vh) {
        if (is(x, "object")) {
            var attr = x;
        } else {
            attr = {patternUnits: "userSpaceOnUse"};
            if (x) {
                attr.x = x;
            }
            if (y) {
                attr.y = y;
            }
            if (width != null) {
                attr.width = width;
            }
            if (height != null) {
                attr.height = height;
            }
            if (vx != null && vy != null && vw != null && vh != null) {
                attr.viewBox = [vx, vy, vw, vh];
            } else {
                attr.viewBox = [x || 0, y || 0, width || 0, height || 0];
            }
        }
        return this.el("pattern", attr);
    };
    /*\
     * Paper.use
     [ method ]
     **
     * Creates a <use> element.
     - id (string) @optional id of element to link
     * or
     - id (Element) @optional element to link
     **
     = (object) the `use` element
     **
    \*/
    proto.use = function (id) {
        if (id != null) {
            if (id instanceof Element) {
                if (!id.attr("id")) {
                    id.attr({id: Snap._.id(id)});
                }
                id = id.attr("id");
            }
            if (String(id).charAt() == "#") {
                id = id.substring(1);
            }
            return this.el("use", {"xlink:href": "#" + id});
        } else {
            return Element.prototype.use.call(this);
        }
    };
    /*\
     * Paper.symbol
     [ method ]
     **
     * Creates a <symbol> element.
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     = (object) the `symbol` element
     **
    \*/
    proto.symbol = function (vx, vy, vw, vh) {
        var attr = {};
        if (vx != null && vy != null && vw != null && vh != null) {
            attr.viewBox = [vx, vy, vw, vh];
        }

        return this.el("symbol", attr);
    };
    /*\
     * Paper.text
     [ method ]
     **
     * Draws a text string
     **
     - x (number) x coordinate position
     - y (number) y coordinate position
     - text (string|array) The text string to draw or array of strings to nest within separate `<tspan>` elements
     = (object) the `text` element
     **
     > Usage
     | var t1 = paper.text(50, 50, "Snap");
     | var t2 = paper.text(50, 50, ["S","n","a","p"]);
     | // Text path usage
     | t1.attr({textpath: "M10,10L100,100"});
     | // or
     | var pth = paper.path("M10,10L100,100");
     | t1.attr({textpath: pth});
    \*/
    proto.text = function (x, y, text) {
        var attr = {};
        if (is(x, "object")) {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                text: text || ""
            };
        }
        return this.el("text", attr);
    };
    /*\
     * Paper.line
     [ method ]
     **
     * Draws a line
     **
     - x1 (number) x coordinate position of the start
     - y1 (number) y coordinate position of the start
     - x2 (number) x coordinate position of the end
     - y2 (number) y coordinate position of the end
     = (object) the `line` element
     **
     > Usage
     | var t1 = paper.line(50, 50, 100, 100);
    \*/
    proto.line = function (x1, y1, x2, y2) {
        var attr = {};
        if (is(x1, "object")) {
            attr = x1;
        } else if (x1 != null) {
            attr = {
                x1: x1,
                x2: x2,
                y1: y1,
                y2: y2
            };
        }
        return this.el("line", attr);
    };
    /*\
     * Paper.polyline
     [ method ]
     **
     * Draws a polyline
     **
     - points (array) array of points
     * or
     - varargs (…) points
     = (object) the `polyline` element
     **
     > Usage
     | var p1 = paper.polyline([10, 10, 100, 100]);
     | var p2 = paper.polyline(10, 10, 100, 100);
    \*/
    proto.polyline = function (points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
            attr = points;
        } else if (points != null) {
            attr = {points: points};
        }
        return this.el("polyline", attr);
    };
    /*\
     * Paper.polygon
     [ method ]
     **
     * Draws a polygon. See @Paper.polyline
    \*/
    proto.polygon = function (points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
            attr = points;
        } else if (points != null) {
            attr = {points: points};
        }
        return this.el("polygon", attr);
    };
    // gradients
    (function () {
        var $ = Snap._.$;
        // gradients' helpers
        /*\
         * Element.stops
         [ method ]
         **
         * Only for gradients!
         * Returns array of gradient stops elements.
         = (array) the stops array.
        \*/
        function Gstops() {
            return this.selectAll("stop");
        }
        /*\
         * Element.addStop
         [ method ]
         **
         * Only for gradients!
         * Adds another stop to the gradient.
         - color (string) stops color
         - offset (number) stops offset 0..100
         = (object) gradient element
        \*/
        function GaddStop(color, offset) {
            var stop = $("stop"),
                attr = {
                    offset: +offset + "%"
                };
            color = Snap.color(color);
            attr["stop-color"] = color.hex;
            if (color.opacity < 1) {
                attr["stop-opacity"] = color.opacity;
            }
            $(stop, attr);
            var stops = this.stops(),
                inserted;
            for (var i = 0; i < stops.length; i++) {
                var stopOffset = parseFloat(stops[i].attr("offset"));
                if (stopOffset > offset) {
                    this.node.insertBefore(stop, stops[i].node);
                    inserted = true;
                    break;
                }
            }
            if (!inserted) {
                this.node.appendChild(stop);
            }
            return this;
        }
        function GgetBBox() {
            if (this.type == "linearGradient") {
                var x1 = $(this.node, "x1") || 0,
                    x2 = $(this.node, "x2") || 1,
                    y1 = $(this.node, "y1") || 0,
                    y2 = $(this.node, "y2") || 0;
                return Snap._.box(x1, y1, math.abs(x2 - x1), math.abs(y2 - y1));
            } else {
                var cx = this.node.cx || .5,
                    cy = this.node.cy || .5,
                    r = this.node.r || 0;
                return Snap._.box(cx - r, cy - r, r * 2, r * 2);
            }
        }
        /*\
         * Element.setStops
         [ method ]
         **
         * Only for gradients!
         * Updates stops of the gradient based on passed gradient descriptor. See @Ppaer.gradient
         - str (string) gradient descriptor part after `()`.
         = (object) gradient element
         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
         | g.setStops("#fff-#000-#f00-#fc0");
        \*/
        function GsetStops(str) {
            var grad = str,
                stops = this.stops();
            if (typeof str == "string") {
                grad = eve("snap.util.grad.parse", null, "l(0,0,0,1)" + str).firstDefined().stops;
            }
            if (!Snap.is(grad, "array")) {
                return;
            }
            for (var i = 0; i < stops.length; i++) {
                if (grad[i]) {
                    var color = Snap.color(grad[i].color),
                        attr = {"offset": grad[i].offset + "%"};
                    attr["stop-color"] = color.hex;
                    if (color.opacity < 1) {
                        attr["stop-opacity"] = color.opacity;
                    }
                    stops[i].attr(attr);
                } else {
                    stops[i].remove();
                }
            }
            for (i = stops.length; i < grad.length; i++) {
                this.addStop(grad[i].color, grad[i].offset);
            }
            return this;
        }
        function gradient(defs, str) {
            var grad = eve("snap.util.grad.parse", null, str).firstDefined(),
                el;
            if (!grad) {
                return null;
            }
            grad.params.unshift(defs);
            if (grad.type.toLowerCase() == "l") {
                el = gradientLinear.apply(0, grad.params);
            } else {
                el = gradientRadial.apply(0, grad.params);
            }
            if (grad.type != grad.type.toLowerCase()) {
                $(el.node, {
                    gradientUnits: "userSpaceOnUse"
                });
            }
            var stops = grad.stops,
                len = stops.length;
            for (var i = 0; i < len; i++) {
                var stop = stops[i];
                el.addStop(stop.color, stop.offset);
            }
            return el;
        }
        function gradientLinear(defs, x1, y1, x2, y2) {
            var el = Snap._.make("linearGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            el.setStops = GsetStops;
            if (x1 != null) {
                $(el.node, {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2
                });
            }
            return el;
        }
        function gradientRadial(defs, cx, cy, r, fx, fy) {
            var el = Snap._.make("radialGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            if (cx != null) {
                $(el.node, {
                    cx: cx,
                    cy: cy,
                    r: r
                });
            }
            if (fx != null && fy != null) {
                $(el.node, {
                    fx: fx,
                    fy: fy
                });
            }
            return el;
        }
        /*\
         * Paper.gradient
         [ method ]
         **
         * Creates a gradient element
         **
         - gradient (string) gradient descriptor
         > Gradient Descriptor
         * The gradient descriptor is an expression formatted as
         * follows: `<type>(<coords>)<colors>`.  The `<type>` can be
         * either linear or radial.  The uppercase `L` or `R` letters
         * indicate absolute coordinates offset from the SVG surface.
         * Lowercase `l` or `r` letters indicate coordinates
         * calculated relative to the element to which the gradient is
         * applied.  Coordinates specify a linear gradient vector as
         * `x1`, `y1`, `x2`, `y2`, or a radial gradient as `cx`, `cy`,
         * `r` and optional `fx`, `fy` specifying a focal point away
         * from the center of the circle. Specify `<colors>` as a list
         * of dash-separated CSS color values.  Each color may be
         * followed by a custom offset value, separated with a colon
         * character.
         > Examples
         * Linear gradient, relative from top-left corner to bottom-right
         * corner, from black through red to white:
         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
         * Linear gradient, absolute from (0, 0) to (100, 100), from black
         * through red at 25% to white:
         | var g = paper.gradient("L(0, 0, 100, 100)#000-#f00:25-#fff");
         * Radial gradient, relative from the center of the element with radius
         * half the width, from black to white:
         | var g = paper.gradient("r(0.5, 0.5, 0.5)#000-#fff");
         * To apply the gradient:
         | paper.circle(50, 50, 40).attr({
         |     fill: g
         | });
         = (object) the `gradient` element
        \*/
        proto.gradient = function (str) {
            return gradient(this.defs, str);
        };
        proto.gradientLinear = function (x1, y1, x2, y2) {
            return gradientLinear(this.defs, x1, y1, x2, y2);
        };
        proto.gradientRadial = function (cx, cy, r, fx, fy) {
            return gradientRadial(this.defs, cx, cy, r, fx, fy);
        };
        /*\
         * Paper.toString
         [ method ]
         **
         * Returns SVG code for the @Paper
         = (string) SVG code for the @Paper
        \*/
        proto.toString = function () {
            var doc = this.node.ownerDocument,
                f = doc.createDocumentFragment(),
                d = doc.createElement("div"),
                svg = this.node.cloneNode(true),
                res;
            f.appendChild(d);
            d.appendChild(svg);
            Snap._.$(svg, {xmlns: "http://www.w3.org/2000/svg"});
            res = d.innerHTML;
            f.removeChild(f.firstChild);
            return res;
        };
        /*\
         * Paper.toDataURL
         [ method ]
         **
         * Returns SVG code for the @Paper as Data URI string.
         = (string) Data URI string
        \*/
        proto.toDataURL = function () {
            if (window && window.btoa) {
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)));
            }
        };
        /*\
         * Paper.clear
         [ method ]
         **
         * Removes all child nodes of the paper, except <defs>.
        \*/
        proto.clear = function () {
            var node = this.node.firstChild,
                next;
            while (node) {
                next = node.nextSibling;
                if (node.tagName != "defs") {
                    node.parentNode.removeChild(node);
                } else {
                    proto.clear.call({node: node});
                }
                node = next;
            }
        };
    }());
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        is = Snap.is,
        clone = Snap._.clone,
        has = "hasOwnProperty",
        p2s = /,?([a-z]),?/gi,
        toFloat = parseFloat,
        math = Math,
        PI = math.PI,
        mmin = math.min,
        mmax = math.max,
        pow = math.pow,
        abs = math.abs;
    function paths(ps) {
        var p = paths.ps = paths.ps || {};
        if (p[ps]) {
            p[ps].sleep = 100;
        } else {
            p[ps] = {
                sleep: 100
            };
        }
        setTimeout(function () {
            for (var key in p) if (p[has](key) && key != ps) {
                p[key].sleep--;
                !p[key].sleep && delete p[key];
            }
        });
        return p[ps];
    }
    function box(x, y, width, height) {
        if (x == null) {
            x = y = width = height = 0;
        }
        if (y == null) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        return {
            x: x,
            y: y,
            width: width,
            w: width,
            height: height,
            h: height,
            x2: x + width,
            y2: y + height,
            cx: x + width / 2,
            cy: y + height / 2,
            r1: math.min(width, height) / 2,
            r2: math.max(width, height) / 2,
            r0: math.sqrt(width * width + height * height) / 2,
            path: rectPath(x, y, width, height),
            vb: [x, y, width, height].join(" ")
        };
    }
    function toString() {
        return this.join(",").replace(p2s, "$1");
    }
    function pathClone(pathArray) {
        var res = clone(pathArray);
        res.toString = toString;
        return res;
    }
    function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
        if (length == null) {
            return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
        } else {
            return findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y,
                getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
        }
    }
    function getLengthFactory(istotal, subpath) {
        function O(val) {
            return +(+val).toFixed(3);
        }
        return Snap._.cacher(function (path, length, onlystart) {
            if (path instanceof Element) {
                path = path.attr("d");
            }
            path = path2curve(path);
            var x, y, p, l, sp = "", subpaths = {}, point,
                len = 0;
            for (var i = 0, ii = path.length; i < ii; i++) {
                p = path[i];
                if (p[0] == "M") {
                    x = +p[1];
                    y = +p[2];
                } else {
                    l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                    if (len + l > length) {
                        if (subpath && !subpaths.start) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            sp += [
                                "C" + O(point.start.x),
                                O(point.start.y),
                                O(point.m.x),
                                O(point.m.y),
                                O(point.x),
                                O(point.y)
                            ];
                            if (onlystart) {return sp;}
                            subpaths.start = sp;
                            sp = [
                                "M" + O(point.x),
                                O(point.y) + "C" + O(point.n.x),
                                O(point.n.y),
                                O(point.end.x),
                                O(point.end.y),
                                O(p[5]),
                                O(p[6])
                            ].join();
                            len += l;
                            x = +p[5];
                            y = +p[6];
                            continue;
                        }
                        if (!istotal && !subpath) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            return point;
                        }
                    }
                    len += l;
                    x = +p[5];
                    y = +p[6];
                }
                sp += p.shift() + p;
            }
            subpaths.end = sp;
            point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
            return point;
        }, null, Snap._.clone);
    }
    var getTotalLength = getLengthFactory(1),
        getPointAtLength = getLengthFactory(),
        getSubpathsAtLength = getLengthFactory(0, 1);
    function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t,
            t13 = pow(t1, 3),
            t12 = pow(t1, 2),
            t2 = t * t,
            t3 = t2 * t,
            x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
            y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
            mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
            my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
            nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
            ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
            ax = t1 * p1x + t * c1x,
            ay = t1 * p1y + t * c1y,
            cx = t1 * c2x + t * p2x,
            cy = t1 * c2y + t * p2y,
            alpha = 90 - math.atan2(mx - nx, my - ny) * 180 / PI;
        // (mx > nx || my < ny) && (alpha += 180);
        return {
            x: x,
            y: y,
            m: {x: mx, y: my},
            n: {x: nx, y: ny},
            start: {x: ax, y: ay},
            end: {x: cx, y: cy},
            alpha: alpha
        };
    }
    function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
        if (!Snap.is(p1x, "array")) {
            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
        }
        var bbox = curveDim.apply(null, p1x);
        return box(
            bbox.min.x,
            bbox.min.y,
            bbox.max.x - bbox.min.x,
            bbox.max.y - bbox.min.y
        );
    }
    function isPointInsideBBox(bbox, x, y) {
        return  x >= bbox.x &&
                x <= bbox.x + bbox.width &&
                y >= bbox.y &&
                y <= bbox.y + bbox.height;
    }
    function isBBoxIntersect(bbox1, bbox2) {
        bbox1 = box(bbox1);
        bbox2 = box(bbox2);
        return isPointInsideBBox(bbox2, bbox1.x, bbox1.y)
            || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y)
            || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2)
            || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2)
            || isPointInsideBBox(bbox1, bbox2.x, bbox2.y)
            || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y)
            || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2)
            || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2)
            || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x
                || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)
            && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y
                || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
    }
    function base3(t, p1, p2, p3, p4) {
        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
            t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
        return t * t2 - 3 * p1 + 3 * p2;
    }
    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
        if (z == null) {
            z = 1;
        }
        z = z > 1 ? 1 : z < 0 ? 0 : z;
        var z2 = z / 2,
            n = 12,
            Tvalues = [-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],
            Cvalues = [0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],
            sum = 0;
        for (var i = 0; i < n; i++) {
            var ct = z2 * Tvalues[i] + z2,
                xbase = base3(ct, x1, x2, x3, x4),
                ybase = base3(ct, y1, y2, y3, y4),
                comb = xbase * xbase + ybase * ybase;
            sum += Cvalues[i] * math.sqrt(comb);
        }
        return z2 * sum;
    }
    function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
            return;
        }
        var t = 1,
            step = t / 2,
            t2 = t - step,
            l,
            e = .01;
        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        while (abs(l - ll) > e) {
            step /= 2;
            t2 += (l < ll ? 1 : -1) * step;
            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        }
        return t2;
    }
    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        if (
            mmax(x1, x2) < mmin(x3, x4) ||
            mmin(x1, x2) > mmax(x3, x4) ||
            mmax(y1, y2) < mmin(y3, y4) ||
            mmin(y1, y2) > mmax(y3, y4)
        ) {
            return;
        }
        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
            ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
            denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (!denominator) {
            return;
        }
        var px = nx / denominator,
            py = ny / denominator,
            px2 = +px.toFixed(2),
            py2 = +py.toFixed(2);
        if (
            px2 < +mmin(x1, x2).toFixed(2) ||
            px2 > +mmax(x1, x2).toFixed(2) ||
            px2 < +mmin(x3, x4).toFixed(2) ||
            px2 > +mmax(x3, x4).toFixed(2) ||
            py2 < +mmin(y1, y2).toFixed(2) ||
            py2 > +mmax(y1, y2).toFixed(2) ||
            py2 < +mmin(y3, y4).toFixed(2) ||
            py2 > +mmax(y3, y4).toFixed(2)
        ) {
            return;
        }
        return {x: px, y: py};
    }
    function inter(bez1, bez2) {
        return interHelper(bez1, bez2);
    }
    function interCount(bez1, bez2) {
        return interHelper(bez1, bez2, 1);
    }
    function interHelper(bez1, bez2, justCount) {
        var bbox1 = bezierBBox(bez1),
            bbox2 = bezierBBox(bez2);
        if (!isBBoxIntersect(bbox1, bbox2)) {
            return justCount ? 0 : [];
        }
        var l1 = bezlen.apply(0, bez1),
            l2 = bezlen.apply(0, bez2),
            n1 = ~~(l1 / 8),
            n2 = ~~(l2 / 8),
            dots1 = [],
            dots2 = [],
            xy = {},
            res = justCount ? 0 : [];
        for (var i = 0; i < n1 + 1; i++) {
            var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
            dots1.push({x: p.x, y: p.y, t: i / n1});
        }
        for (i = 0; i < n2 + 1; i++) {
            p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
            dots2.push({x: p.x, y: p.y, t: i / n2});
        }
        for (i = 0; i < n1; i++) {
            for (var j = 0; j < n2; j++) {
                var di = dots1[i],
                    di1 = dots1[i + 1],
                    dj = dots2[j],
                    dj1 = dots2[j + 1],
                    ci = abs(di1.x - di.x) < .001 ? "y" : "x",
                    cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
                    is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
                if (is) {
                    if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
                        continue;
                    }
                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
                        t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                    if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
                        if (justCount) {
                            res++;
                        } else {
                            res.push({
                                x: is.x,
                                y: is.y,
                                t1: t1,
                                t2: t2
                            });
                        }
                    }
                }
            }
        }
        return res;
    }
    function pathIntersection(path1, path2) {
        return interPathHelper(path1, path2);
    }
    function pathIntersectionNumber(path1, path2) {
        return interPathHelper(path1, path2, 1);
    }
    function interPathHelper(path1, path2, justCount) {
        path1 = path2curve(path1);
        path2 = path2curve(path2);
        var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2,
            res = justCount ? 0 : [];
        for (var i = 0, ii = path1.length; i < ii; i++) {
            var pi = path1[i];
            if (pi[0] == "M") {
                x1 = x1m = pi[1];
                y1 = y1m = pi[2];
            } else {
                if (pi[0] == "C") {
                    bez1 = [x1, y1].concat(pi.slice(1));
                    x1 = bez1[6];
                    y1 = bez1[7];
                } else {
                    bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
                    x1 = x1m;
                    y1 = y1m;
                }
                for (var j = 0, jj = path2.length; j < jj; j++) {
                    var pj = path2[j];
                    if (pj[0] == "M") {
                        x2 = x2m = pj[1];
                        y2 = y2m = pj[2];
                    } else {
                        if (pj[0] == "C") {
                            bez2 = [x2, y2].concat(pj.slice(1));
                            x2 = bez2[6];
                            y2 = bez2[7];
                        } else {
                            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                            x2 = x2m;
                            y2 = y2m;
                        }
                        var intr = interHelper(bez1, bez2, justCount);
                        if (justCount) {
                            res += intr;
                        } else {
                            for (var k = 0, kk = intr.length; k < kk; k++) {
                                intr[k].segment1 = i;
                                intr[k].segment2 = j;
                                intr[k].bez1 = bez1;
                                intr[k].bez2 = bez2;
                            }
                            res = res.concat(intr);
                        }
                    }
                }
            }
        }
        return res;
    }
    function isPointInsidePath(path, x, y) {
        var bbox = pathBBox(path);
        return isPointInsideBBox(bbox, x, y) &&
               interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
    }
    function pathBBox(path) {
        var pth = paths(path);
        if (pth.bbox) {
            return clone(pth.bbox);
        }
        if (!path) {
            return box();
        }
        path = path2curve(path);
        var x = 0,
            y = 0,
            X = [],
            Y = [],
            p;
        for (var i = 0, ii = path.length; i < ii; i++) {
            p = path[i];
            if (p[0] == "M") {
                x = p[1];
                y = p[2];
                X.push(x);
                Y.push(y);
            } else {
                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                X = X.concat(dim.min.x, dim.max.x);
                Y = Y.concat(dim.min.y, dim.max.y);
                x = p[5];
                y = p[6];
            }
        }
        var xmin = mmin.apply(0, X),
            ymin = mmin.apply(0, Y),
            xmax = mmax.apply(0, X),
            ymax = mmax.apply(0, Y),
            bb = box(xmin, ymin, xmax - xmin, ymax - ymin);
        pth.bbox = clone(bb);
        return bb;
    }
    function rectPath(x, y, w, h, r) {
        if (r) {
            return [
                ["M", +x + +r, y],
                ["l", w - r * 2, 0],
                ["a", r, r, 0, 0, 1, r, r],
                ["l", 0, h - r * 2],
                ["a", r, r, 0, 0, 1, -r, r],
                ["l", r * 2 - w, 0],
                ["a", r, r, 0, 0, 1, -r, -r],
                ["l", 0, r * 2 - h],
                ["a", r, r, 0, 0, 1, r, -r],
                ["z"]
            ];
        }
        var res = [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
        res.toString = toString;
        return res;
    }
    function ellipsePath(x, y, rx, ry, a) {
        if (a == null && ry == null) {
            ry = rx;
        }
        x = +x;
        y = +y;
        rx = +rx;
        ry = +ry;
        if (a != null) {
            var rad = Math.PI / 180,
                x1 = x + rx * Math.cos(-ry * rad),
                x2 = x + rx * Math.cos(-a * rad),
                y1 = y + rx * Math.sin(-ry * rad),
                y2 = y + rx * Math.sin(-a * rad),
                res = [["M", x1, y1], ["A", rx, rx, 0, +(a - ry > 180), 0, x2, y2]];
        } else {
            res = [
                ["M", x, y],
                ["m", 0, -ry],
                ["a", rx, ry, 0, 1, 1, 0, 2 * ry],
                ["a", rx, ry, 0, 1, 1, 0, -2 * ry],
                ["z"]
            ];
        }
        res.toString = toString;
        return res;
    }
    var unit2px = Snap._unit2px,
        getPath = {
        path: function (el) {
            return el.attr("path");
        },
        circle: function (el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx, attr.cy, attr.r);
        },
        ellipse: function (el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx || 0, attr.cy || 0, attr.rx, attr.ry);
        },
        rect: function (el) {
            var attr = unit2px(el);
            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height, attr.rx, attr.ry);
        },
        image: function (el) {
            var attr = unit2px(el);
            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height);
        },
        line: function (el) {
            return "M" + [el.attr("x1") || 0, el.attr("y1") || 0, el.attr("x2"), el.attr("y2")];
        },
        polyline: function (el) {
            return "M" + el.attr("points");
        },
        polygon: function (el) {
            return "M" + el.attr("points") + "z";
        },
        deflt: function (el) {
            var bbox = el.node.getBBox();
            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
        }
    };
    function pathToRelative(pathArray) {
        var pth = paths(pathArray),
            lowerCase = String.prototype.toLowerCase;
        if (pth.rel) {
            return pathClone(pth.rel);
        }
        if (!Snap.is(pathArray, "array") || !Snap.is(pathArray && pathArray[0], "array")) {
            pathArray = Snap.parsePathString(pathArray);
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0;
        if (pathArray[0][0] == "M") {
            x = pathArray[0][1];
            y = pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res.push(["M", x, y]);
        }
        for (var i = start, ii = pathArray.length; i < ii; i++) {
            var r = res[i] = [],
                pa = pathArray[i];
            if (pa[0] != lowerCase.call(pa[0])) {
                r[0] = lowerCase.call(pa[0]);
                switch (r[0]) {
                    case "a":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +(pa[6] - x).toFixed(3);
                        r[7] = +(pa[7] - y).toFixed(3);
                        break;
                    case "v":
                        r[1] = +(pa[1] - y).toFixed(3);
                        break;
                    case "m":
                        mx = pa[1];
                        my = pa[2];
                    default:
                        for (var j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +(pa[j] - (j % 2 ? x : y)).toFixed(3);
                        }
                }
            } else {
                r = res[i] = [];
                if (pa[0] == "m") {
                    mx = pa[1] + x;
                    my = pa[2] + y;
                }
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    res[i][k] = pa[k];
                }
            }
            var len = res[i].length;
            switch (res[i][0]) {
                case "z":
                    x = mx;
                    y = my;
                    break;
                case "h":
                    x += +res[i][len - 1];
                    break;
                case "v":
                    y += +res[i][len - 1];
                    break;
                default:
                    x += +res[i][len - 2];
                    y += +res[i][len - 1];
            }
        }
        res.toString = toString;
        pth.rel = pathClone(res);
        return res;
    }
    function pathToAbsolute(pathArray) {
        var pth = paths(pathArray);
        if (pth.abs) {
            return pathClone(pth.abs);
        }
        if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) { // rough assumption
            pathArray = Snap.parsePathString(pathArray);
        }
        if (!pathArray || !pathArray.length) {
            return [["M", 0, 0]];
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0,
            pa0;
        if (pathArray[0][0] == "M") {
            x = +pathArray[0][1];
            y = +pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res[0] = ["M", x, y];
        }
        var crz = pathArray.length == 3 &&
            pathArray[0][0] == "M" &&
            pathArray[1][0].toUpperCase() == "R" &&
            pathArray[2][0].toUpperCase() == "Z";
        for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
            res.push(r = []);
            pa = pathArray[i];
            pa0 = pa[0];
            if (pa0 != pa0.toUpperCase()) {
                r[0] = pa0.toUpperCase();
                switch (r[0]) {
                    case "A":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +pa[6] + x;
                        r[7] = +pa[7] + y;
                        break;
                    case "V":
                        r[1] = +pa[1] + y;
                        break;
                    case "H":
                        r[1] = +pa[1] + x;
                        break;
                    case "R":
                        var dots = [x, y].concat(pa.slice(1));
                        for (var j = 2, jj = dots.length; j < jj; j++) {
                            dots[j] = +dots[j] + x;
                            dots[++j] = +dots[j] + y;
                        }
                        res.pop();
                        res = res.concat(catmullRom2bezier(dots, crz));
                        break;
                    case "O":
                        res.pop();
                        dots = ellipsePath(x, y, pa[1], pa[2]);
                        dots.push(dots[0]);
                        res = res.concat(dots);
                        break;
                    case "U":
                        res.pop();
                        res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                        r = ["U"].concat(res[res.length - 1].slice(-2));
                        break;
                    case "M":
                        mx = +pa[1] + x;
                        my = +pa[2] + y;
                    default:
                        for (j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +pa[j] + (j % 2 ? x : y);
                        }
                }
            } else if (pa0 == "R") {
                dots = [x, y].concat(pa.slice(1));
                res.pop();
                res = res.concat(catmullRom2bezier(dots, crz));
                r = ["R"].concat(pa.slice(-2));
            } else if (pa0 == "O") {
                res.pop();
                dots = ellipsePath(x, y, pa[1], pa[2]);
                dots.push(dots[0]);
                res = res.concat(dots);
            } else if (pa0 == "U") {
                res.pop();
                res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                r = ["U"].concat(res[res.length - 1].slice(-2));
            } else {
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    r[k] = pa[k];
                }
            }
            pa0 = pa0.toUpperCase();
            if (pa0 != "O") {
                switch (r[0]) {
                    case "Z":
                        x = +mx;
                        y = +my;
                        break;
                    case "H":
                        x = r[1];
                        break;
                    case "V":
                        y = r[1];
                        break;
                    case "M":
                        mx = r[r.length - 2];
                        my = r[r.length - 1];
                    default:
                        x = r[r.length - 2];
                        y = r[r.length - 1];
                }
            }
        }
        res.toString = toString;
        pth.abs = pathClone(res);
        return res;
    }
    function l2c(x1, y1, x2, y2) {
        return [x1, y1, x2, y2, x2, y2];
    }
    function q2c(x1, y1, ax, ay, x2, y2) {
        var _13 = 1 / 3,
            _23 = 2 / 3;
        return [
                _13 * x1 + _23 * ax,
                _13 * y1 + _23 * ay,
                _13 * x2 + _23 * ax,
                _13 * y2 + _23 * ay,
                x2,
                y2
            ];
    }
    function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
        // for more information of where this math came from visit:
        // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
        var _120 = PI * 120 / 180,
            rad = PI / 180 * (+angle || 0),
            res = [],
            xy,
            rotate = Snap._.cacher(function (x, y, rad) {
                var X = x * math.cos(rad) - y * math.sin(rad),
                    Y = x * math.sin(rad) + y * math.cos(rad);
                return {x: X, y: Y};
            });
        if (!rx || !ry) {
            return [x1, y1, x2, y2, x2, y2];
        }
        if (!recursive) {
            xy = rotate(x1, y1, -rad);
            x1 = xy.x;
            y1 = xy.y;
            xy = rotate(x2, y2, -rad);
            x2 = xy.x;
            y2 = xy.y;
            var cos = math.cos(PI / 180 * angle),
                sin = math.sin(PI / 180 * angle),
                x = (x1 - x2) / 2,
                y = (y1 - y2) / 2;
            var h = x * x / (rx * rx) + y * y / (ry * ry);
            if (h > 1) {
                h = math.sqrt(h);
                rx = h * rx;
                ry = h * ry;
            }
            var rx2 = rx * rx,
                ry2 = ry * ry,
                k = (large_arc_flag == sweep_flag ? -1 : 1) *
                    math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
                cx = k * rx * y / ry + (x1 + x2) / 2,
                cy = k * -ry * x / rx + (y1 + y2) / 2,
                f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
                f2 = math.asin(((y2 - cy) / ry).toFixed(9));

            f1 = x1 < cx ? PI - f1 : f1;
            f2 = x2 < cx ? PI - f2 : f2;
            f1 < 0 && (f1 = PI * 2 + f1);
            f2 < 0 && (f2 = PI * 2 + f2);
            if (sweep_flag && f1 > f2) {
                f1 = f1 - PI * 2;
            }
            if (!sweep_flag && f2 > f1) {
                f2 = f2 - PI * 2;
            }
        } else {
            f1 = recursive[0];
            f2 = recursive[1];
            cx = recursive[2];
            cy = recursive[3];
        }
        var df = f2 - f1;
        if (abs(df) > _120) {
            var f2old = f2,
                x2old = x2,
                y2old = y2;
            f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
            x2 = cx + rx * math.cos(f2);
            y2 = cy + ry * math.sin(f2);
            res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
        }
        df = f2 - f1;
        var c1 = math.cos(f1),
            s1 = math.sin(f1),
            c2 = math.cos(f2),
            s2 = math.sin(f2),
            t = math.tan(df / 4),
            hx = 4 / 3 * rx * t,
            hy = 4 / 3 * ry * t,
            m1 = [x1, y1],
            m2 = [x1 + hx * s1, y1 - hy * c1],
            m3 = [x2 + hx * s2, y2 - hy * c2],
            m4 = [x2, y2];
        m2[0] = 2 * m1[0] - m2[0];
        m2[1] = 2 * m1[1] - m2[1];
        if (recursive) {
            return [m2, m3, m4].concat(res);
        } else {
            res = [m2, m3, m4].concat(res).join().split(",");
            var newres = [];
            for (var i = 0, ii = res.length; i < ii; i++) {
                newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
            }
            return newres;
        }
    }
    function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t;
        return {
            x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
            y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
        };
    }

    // Returns bounding box of cubic bezier curve.
    // Source: http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
    // Original version: NISHIO Hirokazu
    // Modifications: https://github.com/timo22345
    function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
        var tvalues = [],
            bounds = [[], []],
            a, b, c, t, t1, t2, b2ac, sqrtb2ac;
        for (var i = 0; i < 2; ++i) {
            if (i == 0) {
                b = 6 * x0 - 12 * x1 + 6 * x2;
                a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
                c = 3 * x1 - 3 * x0;
            } else {
                b = 6 * y0 - 12 * y1 + 6 * y2;
                a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
                c = 3 * y1 - 3 * y0;
            }
            if (abs(a) < 1e-12) {
                if (abs(b) < 1e-12) {
                    continue;
                }
                t = -c / b;
                if (0 < t && t < 1) {
                    tvalues.push(t);
                }
                continue;
            }
            b2ac = b * b - 4 * c * a;
            sqrtb2ac = math.sqrt(b2ac);
            if (b2ac < 0) {
                continue;
            }
            t1 = (-b + sqrtb2ac) / (2 * a);
            if (0 < t1 && t1 < 1) {
                tvalues.push(t1);
            }
            t2 = (-b - sqrtb2ac) / (2 * a);
            if (0 < t2 && t2 < 1) {
                tvalues.push(t2);
            }
        }

        var x, y, j = tvalues.length,
            jlen = j,
            mt;
        while (j--) {
            t = tvalues[j];
            mt = 1 - t;
            bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
            bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
        }

        bounds[0][jlen] = x0;
        bounds[1][jlen] = y0;
        bounds[0][jlen + 1] = x3;
        bounds[1][jlen + 1] = y3;
        bounds[0].length = bounds[1].length = jlen + 2;


        return {
          min: {x: mmin.apply(0, bounds[0]), y: mmin.apply(0, bounds[1])},
          max: {x: mmax.apply(0, bounds[0]), y: mmax.apply(0, bounds[1])}
        };
    }

    function path2curve(path, path2) {
        var pth = !path2 && paths(path);
        if (!path2 && pth.curve) {
            return pathClone(pth.curve);
        }
        var p = pathToAbsolute(path),
            p2 = path2 && pathToAbsolute(path2),
            attrs = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
            attrs2 = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
            processPath = function (path, d, pcom) {
                var nx, ny;
                if (!path) {
                    return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
                }
                !(path[0] in {T: 1, Q: 1}) && (d.qx = d.qy = null);
                switch (path[0]) {
                    case "M":
                        d.X = path[1];
                        d.Y = path[2];
                        break;
                    case "A":
                        path = ["C"].concat(a2c.apply(0, [d.x, d.y].concat(path.slice(1))));
                        break;
                    case "S":
                        if (pcom == "C" || pcom == "S") { // In "S" case we have to take into account, if the previous command is C/S.
                            nx = d.x * 2 - d.bx;          // And reflect the previous
                            ny = d.y * 2 - d.by;          // command's control point relative to the current point.
                        }
                        else {                            // or some else or nothing
                            nx = d.x;
                            ny = d.y;
                        }
                        path = ["C", nx, ny].concat(path.slice(1));
                        break;
                    case "T":
                        if (pcom == "Q" || pcom == "T") { // In "T" case we have to take into account, if the previous command is Q/T.
                            d.qx = d.x * 2 - d.qx;        // And make a reflection similar
                            d.qy = d.y * 2 - d.qy;        // to case "S".
                        }
                        else {                            // or something else or nothing
                            d.qx = d.x;
                            d.qy = d.y;
                        }
                        path = ["C"].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                        break;
                    case "Q":
                        d.qx = path[1];
                        d.qy = path[2];
                        path = ["C"].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                        break;
                    case "L":
                        path = ["C"].concat(l2c(d.x, d.y, path[1], path[2]));
                        break;
                    case "H":
                        path = ["C"].concat(l2c(d.x, d.y, path[1], d.y));
                        break;
                    case "V":
                        path = ["C"].concat(l2c(d.x, d.y, d.x, path[1]));
                        break;
                    case "Z":
                        path = ["C"].concat(l2c(d.x, d.y, d.X, d.Y));
                        break;
                }
                return path;
            },
            fixArc = function (pp, i) {
                if (pp[i].length > 7) {
                    pp[i].shift();
                    var pi = pp[i];
                    while (pi.length) {
                        pcoms1[i] = "A"; // if created multiple C:s, their original seg is saved
                        p2 && (pcoms2[i] = "A"); // the same as above
                        pp.splice(i++, 0, ["C"].concat(pi.splice(0, 6)));
                    }
                    pp.splice(i, 1);
                    ii = mmax(p.length, p2 && p2.length || 0);
                }
            },
            fixM = function (path1, path2, a1, a2, i) {
                if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
                    path2.splice(i, 0, ["M", a2.x, a2.y]);
                    a1.bx = 0;
                    a1.by = 0;
                    a1.x = path1[i][1];
                    a1.y = path1[i][2];
                    ii = mmax(p.length, p2 && p2.length || 0);
                }
            },
            pcoms1 = [], // path commands of original path p
            pcoms2 = [], // path commands of original path p2
            pfirst = "", // temporary holder for original path command
            pcom = ""; // holder for previous path command of original path
        for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
            p[i] && (pfirst = p[i][0]); // save current path command

            if (pfirst != "C") // C is not saved yet, because it may be result of conversion
            {
                pcoms1[i] = pfirst; // Save current path command
                i && ( pcom = pcoms1[i - 1]); // Get previous path command pcom
            }
            p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

            if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
            // which may produce multiple C:s
            // so we have to make sure that C is also C in original path

            fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

            if (p2) { // the same procedures is done to p2
                p2[i] && (pfirst = p2[i][0]);
                if (pfirst != "C") {
                    pcoms2[i] = pfirst;
                    i && (pcom = pcoms2[i - 1]);
                }
                p2[i] = processPath(p2[i], attrs2, pcom);

                if (pcoms2[i] != "A" && pfirst == "C") {
                    pcoms2[i] = "C";
                }

                fixArc(p2, i);
            }
            fixM(p, p2, attrs, attrs2, i);
            fixM(p2, p, attrs2, attrs, i);
            var seg = p[i],
                seg2 = p2 && p2[i],
                seglen = seg.length,
                seg2len = p2 && seg2.length;
            attrs.x = seg[seglen - 2];
            attrs.y = seg[seglen - 1];
            attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
            attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
            attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
            attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
            attrs2.x = p2 && seg2[seg2len - 2];
            attrs2.y = p2 && seg2[seg2len - 1];
        }
        if (!p2) {
            pth.curve = pathClone(p);
        }
        return p2 ? [p, p2] : p;
    }
    function mapPath(path, matrix) {
        if (!matrix) {
            return path;
        }
        var x, y, i, j, ii, jj, pathi;
        path = path2curve(path);
        for (i = 0, ii = path.length; i < ii; i++) {
            pathi = path[i];
            for (j = 1, jj = pathi.length; j < jj; j += 2) {
                x = matrix.x(pathi[j], pathi[j + 1]);
                y = matrix.y(pathi[j], pathi[j + 1]);
                pathi[j] = x;
                pathi[j + 1] = y;
            }
        }
        return path;
    }

    // http://schepers.cc/getting-to-the-point
    function catmullRom2bezier(crp, z) {
        var d = [];
        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
            var p = [
                        {x: +crp[i - 2], y: +crp[i - 1]},
                        {x: +crp[i],     y: +crp[i + 1]},
                        {x: +crp[i + 2], y: +crp[i + 3]},
                        {x: +crp[i + 4], y: +crp[i + 5]}
                    ];
            if (z) {
                if (!i) {
                    p[0] = {x: +crp[iLen - 2], y: +crp[iLen - 1]};
                } else if (iLen - 4 == i) {
                    p[3] = {x: +crp[0], y: +crp[1]};
                } else if (iLen - 2 == i) {
                    p[2] = {x: +crp[0], y: +crp[1]};
                    p[3] = {x: +crp[2], y: +crp[3]};
                }
            } else {
                if (iLen - 4 == i) {
                    p[3] = p[2];
                } else if (!i) {
                    p[0] = {x: +crp[i], y: +crp[i + 1]};
                }
            }
            d.push(["C",
                  (-p[0].x + 6 * p[1].x + p[2].x) / 6,
                  (-p[0].y + 6 * p[1].y + p[2].y) / 6,
                  (p[1].x + 6 * p[2].x - p[3].x) / 6,
                  (p[1].y + 6*p[2].y - p[3].y) / 6,
                  p[2].x,
                  p[2].y
            ]);
        }

        return d;
    }

    // export
    Snap.path = paths;

    /*\
     * Snap.path.getTotalLength
     [ method ]
     **
     * Returns the length of the given path in pixels
     **
     - path (string) SVG path string
     **
     = (number) length
    \*/
    Snap.path.getTotalLength = getTotalLength;
    /*\
     * Snap.path.getPointAtLength
     [ method ]
     **
     * Returns the coordinates of the point located at the given length along the given path
     **
     - path (string) SVG path string
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/
    Snap.path.getPointAtLength = getPointAtLength;
    /*\
     * Snap.path.getSubpath
     [ method ]
     **
     * Returns the subpath of a given path between given start and end lengths
     **
     - path (string) SVG path string
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/
    Snap.path.getSubpath = function (path, from, to) {
        if (this.getTotalLength(path) - to < 1e-6) {
            return getSubpathsAtLength(path, from).end;
        }
        var a = getSubpathsAtLength(path, to, 1);
        return from ? getSubpathsAtLength(a, from).end : a;
    };
    /*\
     * Element.getTotalLength
     [ method ]
     **
     * Returns the length of the path in pixels (only works for `path` elements)
     = (number) length
    \*/
    elproto.getTotalLength = function () {
        if (this.node.getTotalLength) {
            return this.node.getTotalLength();
        }
    };
    // SIERRA Element.getPointAtLength()/Element.getTotalLength(): If a <path> is broken into different segments, is the jump distance to the new coordinates set by the _M_ or _m_ commands calculated as part of the path's total length?
    /*\
     * Element.getPointAtLength
     [ method ]
     **
     * Returns coordinates of the point located at the given length on the given path (only works for `path` elements)
     **
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/
    elproto.getPointAtLength = function (length) {
        return getPointAtLength(this.attr("d"), length);
    };
    // SIERRA Element.getSubpath(): Similar to the problem for Element.getPointAtLength(). Unclear how this would work for a segmented path. Overall, the concept of _subpath_ and what I'm calling a _segment_ (series of non-_M_ or _Z_ commands) is unclear.
    /*\
     * Element.getSubpath
     [ method ]
     **
     * Returns subpath of a given element from given start and end lengths (only works for `path` elements)
     **
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/
    elproto.getSubpath = function (from, to) {
        return Snap.path.getSubpath(this.attr("d"), from, to);
    };
    Snap._.box = box;
    /*\
     * Snap.path.findDotsAtSegment
     [ method ]
     **
     * Utility method
     **
     * Finds dot coordinates on the given cubic beziér curve at the given t
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     - t (number) position on the curve (0..1)
     = (object) point information in format:
     o {
     o     x: (number) x coordinate of the point,
     o     y: (number) y coordinate of the point,
     o     m: {
     o         x: (number) x coordinate of the left anchor,
     o         y: (number) y coordinate of the left anchor
     o     },
     o     n: {
     o         x: (number) x coordinate of the right anchor,
     o         y: (number) y coordinate of the right anchor
     o     },
     o     start: {
     o         x: (number) x coordinate of the start of the curve,
     o         y: (number) y coordinate of the start of the curve
     o     },
     o     end: {
     o         x: (number) x coordinate of the end of the curve,
     o         y: (number) y coordinate of the end of the curve
     o     },
     o     alpha: (number) angle of the curve derivative at the point
     o }
    \*/
    Snap.path.findDotsAtSegment = findDotsAtSegment;
    /*\
     * Snap.path.bezierBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given cubic beziér curve
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     * or
     - bez (array) array of six points for beziér curve
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/
    Snap.path.bezierBBox = bezierBBox;
    /*\
     * Snap.path.isPointInsideBBox
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside bounding box
     - bbox (string) bounding box
     - x (string) x coordinate of the point
     - y (string) y coordinate of the point
     = (boolean) `true` if point is inside
    \*/
    Snap.path.isPointInsideBBox = isPointInsideBBox;
    Snap.closest = function (x, y, X, Y) {
        var r = 100,
            b = box(x - r / 2, y - r / 2, r, r),
            inside = [],
            getter = X[0].hasOwnProperty("x") ? function (i) {
                return {
                    x: X[i].x,
                    y: X[i].y
                };
            } : function (i) {
                return {
                    x: X[i],
                    y: Y[i]
                };
            },
            found = 0;
        while (r <= 1e6 && !found) {
            for (var i = 0, ii = X.length; i < ii; i++) {
                var xy = getter(i);
                if (isPointInsideBBox(b, xy.x, xy.y)) {
                    found++;
                    inside.push(xy);
                    break;
                }
            }
            if (!found) {
                r *= 2;
                b = box(x - r / 2, y - r / 2, r, r)
            }
        }
        if (r == 1e6) {
            return;
        }
        var len = Infinity,
            res;
        for (i = 0, ii = inside.length; i < ii; i++) {
            var l = Snap.len(x, y, inside[i].x, inside[i].y);
            if (len > l) {
                len = l;
                inside[i].len = l;
                res = inside[i];
            }
        }
        return res;
    };
    /*\
     * Snap.path.isBBoxIntersect
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if two bounding boxes intersect
     - bbox1 (string) first bounding box
     - bbox2 (string) second bounding box
     = (boolean) `true` if bounding boxes intersect
    \*/
    Snap.path.isBBoxIntersect = isBBoxIntersect;
    /*\
     * Snap.path.intersection
     [ method ]
     **
     * Utility method
     **
     * Finds intersections of two paths
     - path1 (string) path string
     - path2 (string) path string
     = (array) dots of intersection
     o [
     o     {
     o         x: (number) x coordinate of the point,
     o         y: (number) y coordinate of the point,
     o         t1: (number) t value for segment of path1,
     o         t2: (number) t value for segment of path2,
     o         segment1: (number) order number for segment of path1,
     o         segment2: (number) order number for segment of path2,
     o         bez1: (array) eight coordinates representing beziér curve for the segment of path1,
     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
     o     }
     o ]
    \*/
    Snap.path.intersection = pathIntersection;
    Snap.path.intersectionNumber = pathIntersectionNumber;
    /*\
     * Snap.path.isPointInside
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside a given closed path.
     *
     * Note: fill mode doesn’t affect the result of this method.
     - path (string) path string
     - x (number) x of the point
     - y (number) y of the point
     = (boolean) `true` if point is inside the path
    \*/
    Snap.path.isPointInside = isPointInsidePath;
    /*\
     * Snap.path.getBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given path
     - path (string) path string
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/
    Snap.path.getBBox = pathBBox;
    Snap.path.get = getPath;
    /*\
     * Snap.path.toRelative
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into relative values
     - path (string) path string
     = (array) path string
    \*/
    Snap.path.toRelative = pathToRelative;
    /*\
     * Snap.path.toAbsolute
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into absolute values
     - path (string) path string
     = (array) path string
    \*/
    Snap.path.toAbsolute = pathToAbsolute;
    /*\
     * Snap.path.toCubic
     [ method ]
     **
     * Utility method
     **
     * Converts path to a new path where all segments are cubic beziér curves
     - pathString (string|array) path string or array of segments
     = (array) array of segments
    \*/
    Snap.path.toCubic = path2curve;
    /*\
     * Snap.path.map
     [ method ]
     **
     * Transform the path string with the given matrix
     - path (string) path string
     - matrix (object) see @Matrix
     = (string) transformed path string
    \*/
    Snap.path.map = mapPath;
    Snap.path.toString = toString;
    Snap.path.clone = pathClone;
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var mmax = Math.max,
        mmin = Math.min;

    // Set
    var Set = function (items) {
        this.items = [];
	this.bindings = {};
        this.length = 0;
        this.type = "set";
        if (items) {
            for (var i = 0, ii = items.length; i < ii; i++) {
                if (items[i]) {
                    this[this.items.length] = this.items[this.items.length] = items[i];
                    this.length++;
                }
            }
        }
    },
    setproto = Set.prototype;
    /*\
     * Set.push
     [ method ]
     **
     * Adds each argument to the current set
     = (object) original element
    \*/
    setproto.push = function () {
        var item,
            len;
        for (var i = 0, ii = arguments.length; i < ii; i++) {
            item = arguments[i];
            if (item) {
                len = this.items.length;
                this[len] = this.items[len] = item;
                this.length++;
            }
        }
        return this;
    };
    /*\
     * Set.pop
     [ method ]
     **
     * Removes last element and returns it
     = (object) element
    \*/
    setproto.pop = function () {
        this.length && delete this[this.length--];
        return this.items.pop();
    };
    /*\
     * Set.forEach
     [ method ]
     **
     * Executes given function for each element in the set
     *
     * If the function returns `false`, the loop stops running.
     **
     - callback (function) function to run
     - thisArg (object) context object for the callback
     = (object) Set object
    \*/
    setproto.forEach = function (callback, thisArg) {
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            if (callback.call(thisArg, this.items[i], i) === false) {
                return this;
            }
        }
        return this;
    };
    /*\
     * Set.animate
     [ method ]
     **
     * Animates each element in set in sync.
     *
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     * or
     - animation (array) array of animation parameter for each element in set in format `[attrs, duration, easing, callback]`
     > Usage
     | // animate all elements in set to radius 10
     | set.animate({r: 10}, 500, mina.easein);
     | // or
     | // animate first element to radius 10, but second to radius 20 and in different time
     | set.animate([{r: 10}, 500, mina.easein], [{r: 20}, 1500, mina.easein]);
     = (Element) the current element
    \*/
    setproto.animate = function (attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Snap._.Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = easing.dur;
            attrs = attrs.attr;
        }
        var args = arguments;
        if (Snap.is(attrs, "array") && Snap.is(args[args.length - 1], "array")) {
            var each = true;
        }
        var begin,
            handler = function () {
                if (begin) {
                    this.b = begin;
                } else {
                    begin = this.b;
                }
            },
            cb = 0,
            set = this,
            callbacker = callback && function () {
                if (++cb == set.length) {
                    callback.call(this);
                }
            };
        return this.forEach(function (el, i) {
            eve.once("snap.animcreated." + el.id, handler);
            if (each) {
                args[i] && el.animate.apply(el, args[i]);
            } else {
                el.animate(attrs, ms, easing, callbacker);
            }
        });
    };
    /*\
     * Set.remove
     [ method ]
     **
     * Removes all children of the set.
     *
     = (object) Set object
    \*/
    setproto.remove = function () {
        while (this.length) {
            this.pop().remove();
        }
        return this;
    };
    /*\
     * Set.bind
     [ method ]
     **
     * Specifies how to handle a specific attribute when applied
     * to a set.
     *
     **
     - attr (string) attribute name
     - callback (function) function to run
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     - eattr (string) attribute on the element to bind the attribute to
     = (object) Set object
    \*/
    setproto.bind = function (attr, a, b) {
        var data = {};
        if (typeof a == "function") {
            this.bindings[attr] = a;
        } else {
            var aname = b || attr;
            this.bindings[attr] = function (v) {
                data[aname] = v;
                a.attr(data);
            };
        }
        return this;
    };
    /*\
     * Set.attr
     [ method ]
     **
     * Equivalent of @Element.attr.
     = (object) Set object
    \*/
    setproto.attr = function (value) {
        var unbound = {};
        for (var k in value) {
            if (this.bindings[k]) {
                this.bindings[k](value[k]);
            } else {
                unbound[k] = value[k];
            }
        }
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            this.items[i].attr(unbound);
        }
        return this;
    };
    /*\
     * Set.clear
     [ method ]
     **
     * Removes all elements from the set
    \*/
    setproto.clear = function () {
        while (this.length) {
            this.pop();
        }
    };
    /*\
     * Set.splice
     [ method ]
     **
     * Removes range of elements from the set
     **
     - index (number) position of the deletion
     - count (number) number of element to remove
     - insertion… (object) #optional elements to insert
     = (object) set elements that were deleted
    \*/
    setproto.splice = function (index, count, insertion) {
        index = index < 0 ? mmax(this.length + index, 0) : index;
        count = mmax(0, mmin(this.length - index, count));
        var tail = [],
            todel = [],
            args = [],
            i;
        for (i = 2; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        for (i = 0; i < count; i++) {
            todel.push(this[index + i]);
        }
        for (; i < this.length - index; i++) {
            tail.push(this[index + i]);
        }
        var arglen = args.length;
        for (i = 0; i < arglen + tail.length; i++) {
            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
        }
        i = this.items.length = this.length -= count - arglen;
        while (this[i]) {
            delete this[i++];
        }
        return new Set(todel);
    };
    /*\
     * Set.exclude
     [ method ]
     **
     * Removes given element from the set
     **
     - element (object) element to remove
     = (boolean) `true` if object was found and removed from the set
    \*/
    setproto.exclude = function (el) {
        for (var i = 0, ii = this.length; i < ii; i++) if (this[i] == el) {
            this.splice(i, 1);
            return true;
        }
        return false;
    };
    /*\
     * Set.insertAfter
     [ method ]
     **
     * Inserts set elements after given element.
     **
     - element (object) set will be inserted after this element
     = (object) Set object
    \*/
    setproto.insertAfter = function (el) {
        var i = this.items.length;
        while (i--) {
            this.items[i].insertAfter(el);
        }
        return this;
    };
    /*\
     * Set.getBBox
     [ method ]
     **
     * Union of all bboxes of the set. See @Element.getBBox.
     = (object) bounding box descriptor. See @Element.getBBox.
    \*/
    setproto.getBBox = function () {
        var x = [],
            y = [],
            x2 = [],
            y2 = [];
        for (var i = this.items.length; i--;) if (!this.items[i].removed) {
            var box = this.items[i].getBBox();
            x.push(box.x);
            y.push(box.y);
            x2.push(box.x + box.width);
            y2.push(box.y + box.height);
        }
        x = mmin.apply(0, x);
        y = mmin.apply(0, y);
        x2 = mmax.apply(0, x2);
        y2 = mmax.apply(0, y2);
        return {
            x: x,
            y: y,
            x2: x2,
            y2: y2,
            width: x2 - x,
            height: y2 - y,
            cx: x + (x2 - x) / 2,
            cy: y + (y2 - y) / 2
        };
    };
    /*\
     * Set.insertAfter
     [ method ]
     **
     * Creates a clone of the set.
     **
     = (object) New Set object
    \*/
    setproto.clone = function (s) {
        s = new Set;
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            s.push(this.items[i].clone());
        }
        return s;
    };
    setproto.toString = function () {
        return "Snap\u2018s set";
    };
    setproto.type = "set";
    // export
    /*\
     * Snap.Set
     [ property ]
     **
     * Set constructor.
    \*/
    Snap.Set = Set;
    /*\
     * Snap.set
     [ method ]
     **
     * Creates a set and fills it with list of arguments.
     **
     = (object) New Set object
     | var r = paper.rect(0, 0, 10, 10),
     |     s1 = Snap.set(), // empty set
     |     s2 = Snap.set(r, paper.circle(100, 100, 20)); // prefilled set
    \*/
    Snap.set = function () {
        var set = new Set;
        if (arguments.length) {
            set.push.apply(set, Array.prototype.slice.call(arguments, 0));
        }
        return set;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var names = {},
        reUnit = /[%a-z]+$/i,
        Str = String;
    names.stroke = names.fill = "colour";
    function getEmpty(item) {
        var l = item[0];
        switch (l.toLowerCase()) {
            case "t": return [l, 0, 0];
            case "m": return [l, 1, 0, 0, 1, 0, 0];
            case "r": if (item.length == 4) {
                return [l, 0, item[2], item[3]];
            } else {
                return [l, 0];
            }
            case "s": if (item.length == 5) {
                return [l, 1, 1, item[3], item[4]];
            } else if (item.length == 3) {
                return [l, 1, 1];
            } else {
                return [l, 1];
            }
        }
    }
    function equaliseTransform(t1, t2, getBBox) {
        t1 = t1 || new Snap.Matrix;
        t2 = t2 || new Snap.Matrix;
        t1 = Snap.parseTransformString(t1.toTransformString()) || [];
        t2 = Snap.parseTransformString(t2.toTransformString()) || [];
        var maxlength = Math.max(t1.length, t2.length),
            from = [],
            to = [],
            i = 0, j, jj,
            tt1, tt2;
        for (; i < maxlength; i++) {
            tt1 = t1[i] || getEmpty(t2[i]);
            tt2 = t2[i] || getEmpty(tt1);
            if (tt1[0] != tt2[0] ||
                tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3]) ||
                tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4])
                ) {
                    t1 = Snap._.transform2matrix(t1, getBBox());
                    t2 = Snap._.transform2matrix(t2, getBBox());
                    from = [["m", t1.a, t1.b, t1.c, t1.d, t1.e, t1.f]];
                    to = [["m", t2.a, t2.b, t2.c, t2.d, t2.e, t2.f]];
                    break;
            }
            from[i] = [];
            to[i] = [];
            for (j = 0, jj = Math.max(tt1.length, tt2.length); j < jj; j++) {
                j in tt1 && (from[i][j] = tt1[j]);
                j in tt2 && (to[i][j] = tt2[j]);
            }
        }
        return {
            from: path2array(from),
            to: path2array(to),
            f: getPath(from)
        };
    }
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function (val) {
            return +val.toFixed(3) + unit;
        };
    }
    function getViewBox(val) {
        return val.join(" ");
    }
    function getColour(clr) {
        return Snap.rgb(clr[0], clr[1], clr[2], clr[3]);
    }
    function getPath(path) {
        var k = 0, i, ii, j, jj, out, a, b = [];
        for (i = 0, ii = path.length; i < ii; i++) {
            out = "[";
            a = ['"' + path[i][0] + '"'];
            for (j = 1, jj = path[i].length; j < jj; j++) {
                a[j] = "val[" + k++ + "]";
            }
            out += a + "]";
            b[i] = out;
        }
        return Function("val", "return Snap.path.toString.call([" + b + "])");
    }
    function path2array(path) {
        var out = [];
        for (var i = 0, ii = path.length; i < ii; i++) {
            for (var j = 1, jj = path[i].length; j < jj; j++) {
                out.push(path[i][j]);
            }
        }
        return out;
    }
    function isNumeric(obj) {
        return isFinite(obj);
    }
    function arrayEqual(arr1, arr2) {
        if (!Snap.is(arr1, "array") || !Snap.is(arr2, "array")) {
            return false;
        }
        return arr1.toString() == arr2.toString();
    }
    Element.prototype.equal = function (name, b) {
        return eve("snap.util.equal", this, name, b).firstDefined();
    };
    eve.on("snap.util.equal", function (name, b) {
        var A, B, a = Str(this.attr(name) || ""),
            el = this;
        if (names[name] == "colour") {
            A = Snap.color(a);
            B = Snap.color(b);
            return {
                from: [A.r, A.g, A.b, A.opacity],
                to: [B.r, B.g, B.b, B.opacity],
                f: getColour
            };
        }
        if (name == "viewBox") {
            A = this.attr(name).vb.split(" ").map(Number);
            B = b.split(" ").map(Number);
            return {
                from: A,
                to: B,
                f: getViewBox
            };
        }
        if (name == "transform" || name == "gradientTransform" || name == "patternTransform") {
            if (typeof b == "string") {
                b = Str(b).replace(/\.{3}|\u2026/g, a);
            }
            a = this.matrix;
            if (!Snap._.rgTransform.test(b)) {
                b = Snap._.transform2matrix(Snap._.svgTransform2string(b), this.getBBox());
            } else {
                b = Snap._.transform2matrix(b, this.getBBox());
            }
            return equaliseTransform(a, b, function () {
                return el.getBBox(1);
            });
        }
        if (name == "d" || name == "path") {
            A = Snap.path.toCubic(a, b);
            return {
                from: path2array(A[0]),
                to: path2array(A[1]),
                f: getPath(A[0])
            };
        }
        if (name == "points") {
            A = Str(a).split(Snap._.separator);
            B = Str(b).split(Snap._.separator);
            return {
                from: A,
                to: B,
                f: function (val) { return val; }
            };
        }
        if (isNumeric(a) && isNumeric(b)) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getNumber
            };
        }
        var aUnit = a.match(reUnit),
            bUnit = Str(b).match(reUnit);
        if (aUnit && arrayEqual(aUnit, bUnit)) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getUnit(aUnit)
            };
        } else {
            return {
                from: this.asPX(name),
                to: this.asPX(name, b),
                f: getNumber
            };
        }
    });
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
    has = "hasOwnProperty",
    supportsTouch = "createTouch" in glob.doc,
    events = [
        "click", "dblclick", "mousedown", "mousemove", "mouseout",
        "mouseover", "mouseup", "touchstart", "touchmove", "touchend",
        "touchcancel"
    ],
    touchMap = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    },
    getScroll = function (xy, el) {
        var name = xy == "y" ? "scrollTop" : "scrollLeft",
            doc = el && el.node ? el.node.ownerDocument : glob.doc;
        return doc[name in doc.documentElement ? "documentElement" : "body"][name];
    },
    preventDefault = function () {
        this.returnValue = false;
    },
    preventTouch = function () {
        return this.originalEvent.preventDefault();
    },
    stopPropagation = function () {
        this.cancelBubble = true;
    },
    stopTouch = function () {
        return this.originalEvent.stopPropagation();
    },
    addEvent = function (obj, type, fn, element) {
        var realName = supportsTouch && touchMap[type] ? touchMap[type] : type,
            f = function (e) {
                var scrollY = getScroll("y", element),
                    scrollX = getScroll("x", element);
                if (supportsTouch && touchMap[has](type)) {
                    for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
                        if (e.targetTouches[i].target == obj || obj.contains(e.targetTouches[i].target)) {
                            var olde = e;
                            e = e.targetTouches[i];
                            e.originalEvent = olde;
                            e.preventDefault = preventTouch;
                            e.stopPropagation = stopTouch;
                            break;
                        }
                    }
                }
                var x = e.clientX + scrollX,
                    y = e.clientY + scrollY;
                return fn.call(element, e, x, y);
            };

        if (type !== realName) {
            obj.addEventListener(type, f, false);
        }

        obj.addEventListener(realName, f, false);

        return function () {
            if (type !== realName) {
                obj.removeEventListener(type, f, false);
            }

            obj.removeEventListener(realName, f, false);
            return true;
        };
    },
    drag = [],
    dragMove = function (e) {
        var x = e.clientX,
            y = e.clientY,
            scrollY = getScroll("y"),
            scrollX = getScroll("x"),
            dragi,
            j = drag.length;
        while (j--) {
            dragi = drag[j];
            if (supportsTouch) {
                var i = e.touches && e.touches.length,
                    touch;
                while (i--) {
                    touch = e.touches[i];
                    if (touch.identifier == dragi.el._drag.id || dragi.el.node.contains(touch.target)) {
                        x = touch.clientX;
                        y = touch.clientY;
                        (e.originalEvent ? e.originalEvent : e).preventDefault();
                        break;
                    }
                }
            } else {
                e.preventDefault();
            }
            var node = dragi.el.node,
                o,
                next = node.nextSibling,
                parent = node.parentNode,
                display = node.style.display;
            // glob.win.opera && parent.removeChild(node);
            // node.style.display = "none";
            // o = dragi.el.paper.getElementByPoint(x, y);
            // node.style.display = display;
            // glob.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
            // o && eve("snap.drag.over." + dragi.el.id, dragi.el, o);
            x += scrollX;
            y += scrollY;
            eve("snap.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
        }
    },
    dragUp = function (e) {
        Snap.unmousemove(dragMove).unmouseup(dragUp);
        var i = drag.length,
            dragi;
        while (i--) {
            dragi = drag[i];
            dragi.el._drag = {};
            eve("snap.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
            eve.off("snap.drag.*." + dragi.el.id);
        }
        drag = [];
    };
    /*\
     * Element.click
     [ method ]
     **
     * Adds a click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unclick
     [ method ]
     **
     * Removes a click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.dblclick
     [ method ]
     **
     * Adds a double click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.undblclick
     [ method ]
     **
     * Removes a double click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mousedown
     [ method ]
     **
     * Adds a mousedown event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousedown
     [ method ]
     **
     * Removes a mousedown event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mousemove
     [ method ]
     **
     * Adds a mousemove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousemove
     [ method ]
     **
     * Removes a mousemove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mouseout
     [ method ]
     **
     * Adds a mouseout event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseout
     [ method ]
     **
     * Removes a mouseout event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mouseover
     [ method ]
     **
     * Adds a mouseover event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseover
     [ method ]
     **
     * Removes a mouseover event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mouseup
     [ method ]
     **
     * Adds a mouseup event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseup
     [ method ]
     **
     * Removes a mouseup event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchstart
     [ method ]
     **
     * Adds a touchstart event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchstart
     [ method ]
     **
     * Removes a touchstart event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchmove
     [ method ]
     **
     * Adds a touchmove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchmove
     [ method ]
     **
     * Removes a touchmove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchend
     [ method ]
     **
     * Adds a touchend event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchend
     [ method ]
     **
     * Removes a touchend event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchcancel
     [ method ]
     **
     * Adds a touchcancel event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchcancel
     [ method ]
     **
     * Removes a touchcancel event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    for (var i = events.length; i--;) {
        (function (eventName) {
            Snap[eventName] = elproto[eventName] = function (fn, scope) {
                if (Snap.is(fn, "function")) {
                    this.events = this.events || [];
                    this.events.push({
                        name: eventName,
                        f: fn,
                        unbind: addEvent(this.node || document, eventName, fn, scope || this)
                    });
                } else {
                    for (var i = 0, ii = this.events.length; i < ii; i++) if (this.events[i].name == eventName) {
                        try {
                            this.events[i].f.call(this);
                        } catch (e) {}
                    }
                }
                return this;
            };
            Snap["un" + eventName] =
            elproto["un" + eventName] = function (fn) {
                var events = this.events || [],
                    l = events.length;
                while (l--) if (events[l].name == eventName &&
                               (events[l].f == fn || !fn)) {
                    events[l].unbind();
                    events.splice(l, 1);
                    !events.length && delete this.events;
                    return this;
                }
                return this;
            };
        })(events[i]);
    }
    /*\
     * Element.hover
     [ method ]
     **
     * Adds hover event handlers to the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     - icontext (object) #optional context for hover in handler
     - ocontext (object) #optional context for hover out handler
     = (object) @Element
    \*/
    elproto.hover = function (f_in, f_out, scope_in, scope_out) {
        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
    };
    /*\
     * Element.unhover
     [ method ]
     **
     * Removes hover event handlers from the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     = (object) @Element
    \*/
    elproto.unhover = function (f_in, f_out) {
        return this.unmouseover(f_in).unmouseout(f_out);
    };
    var draggable = [];
    // SIERRA unclear what _context_ refers to for starting, ending, moving the drag gesture.
    // SIERRA Element.drag(): _x position of the mouse_: Where are the x/y values offset from?
    // SIERRA Element.drag(): much of this member's doc appears to be duplicated for some reason.
    // SIERRA Unclear about this sentence: _Additionally following drag events will be triggered: drag.start.<id> on start, drag.end.<id> on end and drag.move.<id> on every move._ Is there a global _drag_ object to which you can assign handlers keyed by an element's ID?
    /*\
     * Element.drag
     [ method ]
     **
     * Adds event handlers for an element's drag gesture
     **
     - onmove (function) handler for moving
     - onstart (function) handler for drag start
     - onend (function) handler for drag end
     - mcontext (object) #optional context for moving handler
     - scontext (object) #optional context for drag start handler
     - econtext (object) #optional context for drag end handler
     * Additionaly following `drag` events are triggered: `drag.start.<id>` on start, 
     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element is dragged over another element 
     * `drag.over.<id>` fires as well.
     *
     * Start event and start handler are called in specified context or in context of the element with following parameters:
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * Move event and move handler are called in specified context or in context of the element with following parameters:
     o dx (number) shift by x from the start point
     o dy (number) shift by y from the start point
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * End event and end handler are called in specified context or in context of the element with following parameters:
     o event (object) DOM event object
     = (object) @Element
    \*/
    elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
        var el = this;
        if (!arguments.length) {
            var origTransform;
            return el.drag(function (dx, dy) {
                this.attr({
                    transform: origTransform + (origTransform ? "T" : "t") + [dx, dy]
                });
            }, function () {
                origTransform = this.transform().local;
            });
        }
        function start(e, x, y) {
            (e.originalEvent || e).preventDefault();
            el._drag.x = x;
            el._drag.y = y;
            el._drag.id = e.identifier;
            !drag.length && Snap.mousemove(dragMove).mouseup(dragUp);
            drag.push({el: el, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope});
            onstart && eve.on("snap.drag.start." + el.id, onstart);
            onmove && eve.on("snap.drag.move." + el.id, onmove);
            onend && eve.on("snap.drag.end." + el.id, onend);
            eve("snap.drag.start." + el.id, start_scope || move_scope || el, x, y, e);
        }
        function init(e, x, y) {
            eve("snap.draginit." + el.id, el, e, x, y);
        }
        eve.on("snap.draginit." + el.id, start);
        el._drag = {};
        draggable.push({el: el, start: start, init: init});
        el.mousedown(init);
        return el;
    };
    /*
     * Element.onDragOver
     [ method ]
     **
     * Shortcut to assign event handler for `drag.over.<id>` event, where `id` is the element's `id` (see @Element.id)
     - f (function) handler for event, first argument would be the element you are dragging over
    \*/
    // elproto.onDragOver = function (f) {
    //     f ? eve.on("snap.drag.over." + this.id, f) : eve.unbind("snap.drag.over." + this.id);
    // };
    /*\
     * Element.undrag
     [ method ]
     **
     * Removes all drag event handlers from the given element
    \*/
    elproto.undrag = function () {
        var i = draggable.length;
        while (i--) if (draggable[i].el == this) {
            this.unmousedown(draggable[i].init);
            draggable.splice(i, 1);
            eve.unbind("snap.drag.*." + this.id);
            eve.unbind("snap.draginit." + this.id);
        }
        !draggable.length && Snap.unmousemove(dragMove).unmouseup(dragUp);
        return this;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        pproto = Paper.prototype,
        rgurl = /^\s*url\((.+)\)/,
        Str = String,
        $ = Snap._.$;
    Snap.filter = {};
    /*\
     * Paper.filter
     [ method ]
     **
     * Creates a `<filter>` element
     **
     - filstr (string) SVG fragment of filter provided as a string
     = (object) @Element
     * Note: It is recommended to use filters embedded into the page inside an empty SVG element.
     > Usage
     | var f = paper.filter('<feGaussianBlur stdDeviation="2"/>'),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    pproto.filter = function (filstr) {
        var paper = this;
        if (paper.type != "svg") {
            paper = paper.paper;
        }
        var f = Snap.parse(Str(filstr)),
            id = Snap._.id(),
            width = paper.node.offsetWidth,
            height = paper.node.offsetHeight,
            filter = $("filter");
        $(filter, {
            id: id,
            filterUnits: "userSpaceOnUse"
        });
        filter.appendChild(f.node);
        paper.defs.appendChild(filter);
        return new Element(filter);
    };

    eve.on("snap.util.getattr.filter", function () {
        eve.stop();
        var p = $(this.node, "filter");
        if (p) {
            var match = Str(p).match(rgurl);
            return match && Snap.select(match[1]);
        }
    });
    eve.on("snap.util.attr.filter", function (value) {
        if (value instanceof Element && value.type == "filter") {
            eve.stop();
            var id = value.node.id;
            if (!id) {
                $(value.node, {id: value.id});
                id = value.id;
            }
            $(this.node, {
                filter: Snap.url(id)
            });
        }
        if (!value || value == "none") {
            eve.stop();
            this.node.removeAttribute("filter");
        }
    });
    /*\
     * Snap.filter.blur
     [ method ]
     **
     * Returns an SVG markup string for the blur filter
     **
     - x (number) amount of horizontal blur, in pixels
     - y (number) #optional amount of vertical blur, in pixels
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.blur(5, 10)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    Snap.filter.blur = function (x, y) {
        if (x == null) {
            x = 2;
        }
        var def = y == null ? x : [x, y];
        return Snap.format('\<feGaussianBlur stdDeviation="{def}"/>', {
            def: def
        });
    };
    Snap.filter.blur.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.shadow
     [ method ]
     **
     * Returns an SVG markup string for the shadow filter
     **
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - blur (number) #optional amount of blur
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * which makes blur default to `4`. Or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - opacity (number) #optional `0..1` opacity of the shadow
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.shadow(0, 2, .3)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    Snap.filter.shadow = function (dx, dy, blur, color, opacity) {
        if (opacity == null) {
            if (color == null) {
                opacity = blur;
                blur = 4;
                color = "#000";
            } else {
                opacity = color;
                color = blur;
                blur = 4;
            }
        }
        if (blur == null) {
            blur = 4;
        }
        if (opacity == null) {
            opacity = 1;
        }
        if (dx == null) {
            dx = 0;
            dy = 2;
        }
        if (dy == null) {
            dy = dx;
        }
        color = Snap.color(color);
        return Snap.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
            color: color,
            dx: dx,
            dy: dy,
            blur: blur,
            opacity: opacity
        });
    };
    Snap.filter.shadow.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.grayscale
     [ method ]
     **
     * Returns an SVG markup string for the grayscale filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.grayscale = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
            a: 0.2126 + 0.7874 * (1 - amount),
            b: 0.7152 - 0.7152 * (1 - amount),
            c: 0.0722 - 0.0722 * (1 - amount),
            d: 0.2126 - 0.2126 * (1 - amount),
            e: 0.7152 + 0.2848 * (1 - amount),
            f: 0.0722 - 0.0722 * (1 - amount),
            g: 0.2126 - 0.2126 * (1 - amount),
            h: 0.0722 + 0.9278 * (1 - amount)
        });
    };
    Snap.filter.grayscale.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.sepia
     [ method ]
     **
     * Returns an SVG markup string for the sepia filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.sepia = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
            a: 0.393 + 0.607 * (1 - amount),
            b: 0.769 - 0.769 * (1 - amount),
            c: 0.189 - 0.189 * (1 - amount),
            d: 0.349 - 0.349 * (1 - amount),
            e: 0.686 + 0.314 * (1 - amount),
            f: 0.168 - 0.168 * (1 - amount),
            g: 0.272 - 0.272 * (1 - amount),
            h: 0.534 - 0.534 * (1 - amount),
            i: 0.131 + 0.869 * (1 - amount)
        });
    };
    Snap.filter.sepia.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.saturate
     [ method ]
     **
     * Returns an SVG markup string for the saturate filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.saturate = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="saturate" values="{amount}"/>', {
            amount: 1 - amount
        });
    };
    Snap.filter.saturate.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.hueRotate
     [ method ]
     **
     * Returns an SVG markup string for the hue-rotate filter
     **
     - angle (number) angle of rotation
     = (string) filter representation
    \*/
    Snap.filter.hueRotate = function (angle) {
        angle = angle || 0;
        return Snap.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
            angle: angle
        });
    };
    Snap.filter.hueRotate.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.invert
     [ method ]
     **
     * Returns an SVG markup string for the invert filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.invert = function (amount) {
        if (amount == null) {
            amount = 1;
        }
//        <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" color-interpolation-filters="sRGB"/>
        return Snap.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: 1 - amount
        });
    };
    Snap.filter.invert.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.brightness
     [ method ]
     **
     * Returns an SVG markup string for the brightness filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.brightness = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
            amount: amount
        });
    };
    Snap.filter.brightness.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.contrast
     [ method ]
     **
     * Returns an SVG markup string for the contrast filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.contrast = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: .5 - amount / 2
        });
    };
    Snap.filter.contrast.toString = function () {
        return this();
    };
});

// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var box = Snap._.box,
        is = Snap.is,
        firstLetter = /^[^a-z]*([tbmlrc])/i,
        toString = function () {
            return "T" + this.dx + "," + this.dy;
        };
    /*\
     * Element.getAlign
     [ method ]
     **
     * Returns shift needed to align the element relatively to given element.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object|string) Object in format `{dx: , dy: }` also has a string representation as a transformation string
     > Usage
     | el.transform(el.getAlign(el2, "top"));
     * or
     | var dy = el.getAlign(el2, "top").dy;
    \*/
    Element.prototype.getAlign = function (el, way) {
        if (way == null && is(el, "string")) {
            way = el;
            el = null;
        }
        el = el || this.paper;
        var bx = el.getBBox ? el.getBBox() : box(el),
            bb = this.getBBox(),
            out = {};
        way = way && way.match(firstLetter);
        way = way ? way[1].toLowerCase() : "c";
        switch (way) {
            case "t":
                out.dx = 0;
                out.dy = bx.y - bb.y;
            break;
            case "b":
                out.dx = 0;
                out.dy = bx.y2 - bb.y2;
            break;
            case "m":
                out.dx = 0;
                out.dy = bx.cy - bb.cy;
            break;
            case "l":
                out.dx = bx.x - bb.x;
                out.dy = 0;
            break;
            case "r":
                out.dx = bx.x2 - bb.x2;
                out.dy = 0;
            break;
            default:
                out.dx = bx.cx - bb.cx;
                out.dy = 0;
            break;
        }
        out.toString = toString;
        return out;
    };
    /*\
     * Element.align
     [ method ]
     **
     * Aligns the element relatively to given one via transformation.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object) this element
     > Usage
     | el.align(el2, "top");
     * or
     | el.align("middle");
    \*/
    Element.prototype.align = function (el, way) {
        return this.transform("..." + this.getAlign(el, way));
    };
});

// Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    // Colours are from https://www.materialui.co
    var red         = "#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000",
        pink        = "#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162",
        purple      = "#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF",
        deeppurple  = "#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA",
        indigo      = "#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE",
        blue        = "#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF",
        lightblue   = "#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA",
        cyan        = "#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4",
        teal        = "#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5",
        green       = "#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853",
        lightgreen  = "#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17",
        lime        = "#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00",
        yellow      = "#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600",
        amber       = "#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00",
        orange      = "#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00",
        deeporange  = "#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00",
        brown       = "#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723",
        grey        = "#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121",
        bluegrey    = "#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238";
    /*\
     * Snap.mui
     [ property ]
     **
     * Contain Material UI colours.
     | Snap().rect(0, 0, 10, 10).attr({fill: Snap.mui.deeppurple, stroke: Snap.mui.amber[600]});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/
    Snap.mui = {};
    /*\
     * Snap.flat
     [ property ]
     **
     * Contain Flat UI colours.
     | Snap().rect(0, 0, 10, 10).attr({fill: Snap.flat.carrot, stroke: Snap.flat.wetasphalt});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/
    Snap.flat = {};
    function saveColor(colors) {
        colors = colors.split(/(?=#)/);
        var color = new String(colors[5]);
        color[50] = colors[0];
        color[100] = colors[1];
        color[200] = colors[2];
        color[300] = colors[3];
        color[400] = colors[4];
        color[500] = colors[5];
        color[600] = colors[6];
        color[700] = colors[7];
        color[800] = colors[8];
        color[900] = colors[9];
        if (colors[10]) {
            color.A100 = colors[10];
            color.A200 = colors[11];
            color.A400 = colors[12];
            color.A700 = colors[13];
        }
        return color;
    }
    Snap.mui.red = saveColor(red);
    Snap.mui.pink = saveColor(pink);
    Snap.mui.purple = saveColor(purple);
    Snap.mui.deeppurple = saveColor(deeppurple);
    Snap.mui.indigo = saveColor(indigo);
    Snap.mui.blue = saveColor(blue);
    Snap.mui.lightblue = saveColor(lightblue);
    Snap.mui.cyan = saveColor(cyan);
    Snap.mui.teal = saveColor(teal);
    Snap.mui.green = saveColor(green);
    Snap.mui.lightgreen = saveColor(lightgreen);
    Snap.mui.lime = saveColor(lime);
    Snap.mui.yellow = saveColor(yellow);
    Snap.mui.amber = saveColor(amber);
    Snap.mui.orange = saveColor(orange);
    Snap.mui.deeporange = saveColor(deeporange);
    Snap.mui.brown = saveColor(brown);
    Snap.mui.grey = saveColor(grey);
    Snap.mui.bluegrey = saveColor(bluegrey);
    Snap.flat.turquoise = "#1abc9c";
    Snap.flat.greensea = "#16a085";
    Snap.flat.sunflower = "#f1c40f";
    Snap.flat.orange = "#f39c12";
    Snap.flat.emerland = "#2ecc71";
    Snap.flat.nephritis = "#27ae60";
    Snap.flat.carrot = "#e67e22";
    Snap.flat.pumpkin = "#d35400";
    Snap.flat.peterriver = "#3498db";
    Snap.flat.belizehole = "#2980b9";
    Snap.flat.alizarin = "#e74c3c";
    Snap.flat.pomegranate = "#c0392b";
    Snap.flat.amethyst = "#9b59b6";
    Snap.flat.wisteria = "#8e44ad";
    Snap.flat.clouds = "#ecf0f1";
    Snap.flat.silver = "#bdc3c7";
    Snap.flat.wetasphalt = "#34495e";
    Snap.flat.midnightblue = "#2c3e50";
    Snap.flat.concrete = "#95a5a6";
    Snap.flat.asbestos = "#7f8c8d";
    /*\
     * Snap.importMUIColors
     [ method ]
     **
     * Imports Material UI colours into global object.
     | Snap.importMUIColors();
     | Snap().rect(0, 0, 10, 10).attr({fill: deeppurple, stroke: amber[600]});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/
    Snap.importMUIColors = function () {
        for (var color in Snap.mui) {
            if (Snap.mui.hasOwnProperty(color)) {
                window[color] = Snap.mui[color];
            }
        }
    };
});

return Snap;
}));
}.call(window));

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let permitted = function (tag) {
    if(typeof tag !== 'string'){
        return false;
    }
    return true;
};

module.exports.findObjectsByKey =  function(tag, json, done, results) {
    results = results || [];
    if(!permitted(tag)){
        return done(new Error('First argument must be a string'), null);
    }
    let keys,
        type = typeof json;
    try {
        if(type === 'string' || type === 'number' || type === 'function'){
            throw new Error('Second argument must be an Array or Object');
        }
        keys = Object.keys(json);
    } catch (err) {
        return done(err, null);
    }
    for (let i = 0; i < keys.length; i++) {
        if (typeof json[keys[i]] === 'object') {
            if (!(json[keys[i]] instanceof Array) && keys[i] === tag) {
                results.push(json[keys[i]])
            }
            this.findObjectsByKey(tag, json[keys[i]], function (err, res) {}, results)
        }
    }
    done(null, results);

};

module.exports.findArraysByKey = function(tag, json, done, results) {
    results = results || [];
    if(!permitted(tag)){
        return done(new Error('First argument must be a string'), null);
    }
    let keys,
        type = typeof json;
    try {
        if(type === 'string' || type === 'number' || type === 'function'){
            throw new Error('Second argument must be an Array or Object');
        }
        keys = Object.keys(json);
    } catch (err) {
        return done(err, null);
    }
    for (let i = 0; i < keys.length; i++) {
        if (typeof json[keys[i]] === 'object') {
            if (json[keys[i]] instanceof Array && keys[i] === tag) {
                results.push(json[keys[i]])
            }
            this.findArraysByKey(tag, json[keys[i]], function (err, res) {}, results)
        }
    }
    done(null, results);
};

module.exports.findStringsByKey = function (tag, json, done, results) {
    results = results || [];
    if(!permitted(tag)){
        return done(new Error('First argument must be a string'), null);
    }
    let keys,
        type = typeof json;
    try {
        if(type === 'string' || type === 'number' || type === 'function'){
            throw new Error('Second argument must be an Array or Object');
        }
        keys = Object.keys(json);
    } catch (err){
        return done(err, null);
    }
    for (let i = 0; i < keys.length; i++) {
        let temp = json[keys[i]];
        if (typeof temp === 'object') {
            this.findStringsByKey(tag, json[keys[i]], function (err, res) {}, results)
        } else if((typeof temp === 'string') && keys[i] === tag){
            results.push(json[keys[i]]);
        }
    }
    done(null, results);
};

module.exports.findNumbersByKey = function (tag, json, done, results) {
    results = results || [];
    if(!permitted(tag)){
        return done(new Error('First argument must be a string'), null);
    }
    let keys,
        type = typeof json;
    try {
        if(type === 'string' || type === 'number' || type === 'function'){
            throw new Error('Second argument must be an Array or Object');
        }
        keys = Object.keys(json);
    } catch (err){
        return done(err, null);
    }
    for (let i = 0; i < keys.length; i++) {
        let temp = json[keys[i]];
        if (typeof temp === 'object') {
            this.findNumbersByKey(tag, json[keys[i]], function (err, res) {}, results)
        } else if((typeof temp === 'number') && keys[i] === tag){
            results.push(json[keys[i]]);
        }
    }
    done(null, results);
};

module.exports.findBooleansByKey = function (tag, json, done, results) {
    results = results || [];
    if(!permitted(tag)){
        return done(new Error('First argument must be a string'), null);
    }
    let keys,
        type = typeof json;
    try {
        if(type === 'string' || type === 'number' || type === 'function'){
            throw new Error('Second argument must be an Array or Object');
        }
        keys = Object.keys(json);
    } catch (err){
        return done(err, null);
    }
    for (let i = 0; i < keys.length; i++) {
        let temp = json[keys[i]];
        if (typeof temp === 'object') {
            this.findBooleansByKey(tag, json[keys[i]], function (err, res) {}, results)
        } else if((typeof temp === 'boolean') && keys[i] === tag){
            results.push(json[keys[i]]);
        }
    }
    done(null, results);
};

module.exports.findAllByKey = function(tag, json, done, results) {
    results = results || [];
    if(!permitted(tag)){
        return done(new Error('First argument must be a string'), null);
    }
    let keys,
        type = typeof json;
    try {
        if(type === 'string' || type === 'number' || type === 'function'){
            throw new Error('Second argument must be an Array or Object');
        }
        keys = Object.keys(json);
    } catch (err){
        return done(err, null);
    }
    for (let i = 0; i < keys.length; i++) {
        if(keys[i] === tag){
            results.push(json[keys[i]])
        }
        let temp = json[keys[i]];
        if (typeof temp === 'object') {
            this.findAllByKey(tag, json[keys[i]], function (err, res) {}, results)
        }
    }
    done(null, results);
};

module.exports.setBooleansByKey = function (tag, json, newval, done) {
    if(!permitted(tag)) return done(new Error('First argument must be a string'), null);
    if(typeof newval !== 'boolean') return done(new Error('Third argument must match same type - Boolean'));

    let keys,
        type = typeof json;
    try {
        if(type === 'string' || type === 'number' || type === 'function'){
            throw new Error('Second argument must be an Array or Object');
        }
        keys = Object.keys(json);
    } catch (err){
        return done(err, null);
    }
    for (let i = 0; i < keys.length; i++) {
        let temp = json[keys[i]];
        if (typeof temp === 'object') {
            this.setBooleansByKey(tag, json[keys[i]], newval, function (err, res) {})
        } else if((typeof temp === 'boolean') && keys[i] === tag){
            json[keys[i]] = newval;
        }
    }
    done(null, json);
};

module.exports.setObjectsByKey= function(tag, json, newval, done){
    if(!permitted(tag)) return done(new Error('First argument must be a string'), null);
    if(typeof newval !== 'object' || newval instanceof Array) return done(new Error('Third argument must match same type - Object'));
    let keys,
        type = typeof json;
    try {
        if(type === 'string' || type === 'number' || type === 'function'){
            throw new Error('Second argument must be an Array or Object');
        }
        keys = Object.keys(json);
    } catch (err) {
        return done(err, null);
    }
    for (let i = 0; i < keys.length; i++) {
        if (typeof json[keys[i]] === 'object') {
            if (!(json[keys[i]] instanceof Array) && keys[i] === tag) {
                json[keys[i]] = newval;
            }
            this.setObjectsByKey(tag, json[keys[i]], newval, function (err, res) {})
        }
    }
    done(null, json);
};

module.exports.setArraysByKey = function (tag, json, newval, done) {
    if(!permitted(tag)) return done(new Error('First argument must be a string'), null);
    if(!(newval instanceof Array)) return done(new Error('Third argument must match same type - Array'));

    let keys,
        type = typeof json;
    try {
        if(type === 'string' || type === 'number' || type === 'function'){
            throw new Error('Second argument must be an Array or Object');
        }
        keys = Object.keys(json);
    } catch (err) {
        return done(err, null);
    }
    for (let i = 0; i < keys.length; i++) {
        if (typeof json[keys[i]] === 'object') {
            if (json[keys[i]] instanceof Array && keys[i] === tag) {
                json[keys[i]] = newval;
            }
            this.setArraysByKey(tag, json[keys[i]], newval, function (err, res) {})
        }
    }
    done(null, json);
};

module.exports.setStringsByKey = function (tag, json, newval, done) {
    if(!permitted(tag)) return done(new Error('First argument must be a string'), null);
    if(typeof newval !== 'string') return done(new Error('Third argument must match same type - String'));

    let keys,
        type = typeof json;
    try {
        if(type === 'string' || type === 'number' || type === 'function'){
            throw new Error('Second argument must be an Array or Object');
        }
        keys = Object.keys(json);
    } catch (err){
        return done(err, null);
    }
    for (let i = 0; i < keys.length; i++) {
        let temp = json[keys[i]];
        if (typeof temp === 'object') {
            this.setStringsByKey(tag, json[keys[i]], newval, function (err, res) {})
        } else if((typeof temp === 'string') && keys[i] === tag){
            json[keys[i]] = newval;
        }
    }
    done(null, json);
};

module.exports.setNumbersByKey = function (tag, json, newval, done) {
    if(!permitted(tag)) return done(new Error('First argument must be a string'), null);
    if(typeof newval !== 'number') return done(new Error('Third argument must match same type - String'));

    let keys,
        type = typeof json;
    try {
        if(type === 'string' || type === 'number' || type === 'function'){
            throw new Error('Second argument must be an Array or Object');
        }
        keys = Object.keys(json);
    } catch (err){
        return done(err, null);
    }
    for (let i = 0; i < keys.length; i++) {
        let temp = json[keys[i]];
        if (typeof temp === 'object') {
            this.setNumbersByKey(tag, json[keys[i]], newval, function (err, res) {})
        } else if((typeof temp === 'number') && keys[i] === tag){
            json[keys[i]] = newval;
        }
    }
    done(null, json);
};

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_read__ = __webpack_require__(486);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__lib_read__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_write__ = __webpack_require__(487);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__lib_write__["a"]; });




/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_min_dash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tiny_stack__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tiny_stack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tiny_stack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_saxen__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moddle__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moddle_lib_ns__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moddle_lib_types__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common__ = __webpack_require__(247);
/* unused harmony export Context */
/* unused harmony export ElementHandler */
/* harmony export (immutable) */ __webpack_exports__["a"] = Reader;














function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function aliasToName(aliasNs, pkg) {

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common__["a" /* hasLowerCaseAlias */])(pkg)) {
    return aliasNs.name;
  }

  return aliasNs.prefix + ':' + capitalize(aliasNs.localName);
}

function prefixedToName(nameNs, pkg) {

  var name = nameNs.name,
      localName = nameNs.localName;

  var typePrefix = pkg.xml && pkg.xml.typePrefix;

  if (typePrefix && localName.indexOf(typePrefix) === 0) {
    return nameNs.prefix + ':' + localName.slice(typePrefix.length);
  } else {
    return name;
  }
}

function normalizeXsiTypeName(name, model) {

  var nameNs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_moddle_lib_ns__["a" /* parseName */])(name);
  var pkg = model.getPackage(nameNs.prefix);

  return prefixedToName(nameNs, pkg);
}

function error(message) {
  return new Error(message);
}

/**
 * Get the moddle descriptor for a given instance or type.
 *
 * @param  {ModdleElement|Function} element
 *
 * @return {Object} the moddle descriptor
 */
function getModdleDescriptor(element) {
  return element.$descriptor;
}

function defer(fn) {
  setTimeout(fn, 0);
}

/**
 * A parse context.
 *
 * @class
 *
 * @param {Object} options
 * @param {ElementHandler} options.rootHandler the root handler for parsing a document
 * @param {boolean} [options.lax=false] whether or not to ignore invalid elements
 */
function Context(options) {

  /**
   * @property {ElementHandler} rootHandler
   */

  /**
   * @property {Boolean} lax
   */

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])(this, options);

  this.elementsById = {};
  this.references = [];
  this.warnings = [];

  /**
   * Add an unresolved reference.
   *
   * @param {Object} reference
   */
  this.addReference = function(reference) {
    this.references.push(reference);
  };

  /**
   * Add a processed element.
   *
   * @param {ModdleElement} element
   */
  this.addElement = function(element) {

    if (!element) {
      throw error('expected element');
    }

    var elementsById = this.elementsById;

    var descriptor = getModdleDescriptor(element);

    var idProperty = descriptor.idProperty,
        id;

    if (idProperty) {
      id = element.get(idProperty.name);

      if (id) {

        if (elementsById[id]) {
          throw error('duplicate ID <' + id + '>');
        }

        elementsById[id] = element;
      }
    }
  };

  /**
   * Add an import warning.
   *
   * @param {Object} warning
   * @param {String} warning.message
   * @param {Error} [warning.error]
   */
  this.addWarning = function(warning) {
    this.warnings.push(warning);
  };
}

function BaseHandler() {}

BaseHandler.prototype.handleEnd = function() {};
BaseHandler.prototype.handleText = function() {};
BaseHandler.prototype.handleNode = function() {};


/**
 * A simple pass through handler that does nothing except for
 * ignoring all input it receives.
 *
 * This is used to ignore unknown elements and
 * attributes.
 */
function NoopHandler() { }

NoopHandler.prototype = Object.create(BaseHandler.prototype);

NoopHandler.prototype.handleNode = function() {
  return this;
};

function BodyHandler() {}

BodyHandler.prototype = Object.create(BaseHandler.prototype);

BodyHandler.prototype.handleText = function(text) {
  this.body = (this.body || '') + text;
};

function ReferenceHandler(property, context) {
  this.property = property;
  this.context = context;
}

ReferenceHandler.prototype = Object.create(BodyHandler.prototype);

ReferenceHandler.prototype.handleNode = function(node) {

  if (this.element) {
    throw error('expected no sub nodes');
  } else {
    this.element = this.createReference(node);
  }

  return this;
};

ReferenceHandler.prototype.handleEnd = function() {
  this.element.id = this.body;
};

ReferenceHandler.prototype.createReference = function(node) {
  return {
    property: this.property.ns.name,
    id: ''
  };
};

function ValueHandler(propertyDesc, element) {
  this.element = element;
  this.propertyDesc = propertyDesc;
}

ValueHandler.prototype = Object.create(BodyHandler.prototype);

ValueHandler.prototype.handleEnd = function() {

  var value = this.body || '',
      element = this.element,
      propertyDesc = this.propertyDesc;

  value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_moddle_lib_types__["b" /* coerceType */])(propertyDesc.type, value);

  if (propertyDesc.isMany) {
    element.get(propertyDesc.name).push(value);
  } else {
    element.set(propertyDesc.name, value);
  }
};


function BaseElementHandler() {}

BaseElementHandler.prototype = Object.create(BodyHandler.prototype);

BaseElementHandler.prototype.handleNode = function(node) {
  var parser = this,
      element = this.element;

  if (!element) {
    element = this.element = this.createElement(node);

    this.context.addElement(element);
  } else {
    parser = this.handleChild(node);
  }

  return parser;
};

/**
 * @class Reader.ElementHandler
 *
 */
function ElementHandler(model, typeName, context) {
  this.model = model;
  this.type = model.getType(typeName);
  this.context = context;
}

ElementHandler.prototype = Object.create(BaseElementHandler.prototype);

ElementHandler.prototype.addReference = function(reference) {
  this.context.addReference(reference);
};

ElementHandler.prototype.handleEnd = function() {

  var value = this.body,
      element = this.element,
      descriptor = getModdleDescriptor(element),
      bodyProperty = descriptor.bodyProperty;

  if (bodyProperty && value !== undefined) {
    value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_moddle_lib_types__["b" /* coerceType */])(bodyProperty.type, value);
    element.set(bodyProperty.name, value);
  }
};

/**
 * Create an instance of the model from the given node.
 *
 * @param  {Element} node the xml node
 */
ElementHandler.prototype.createElement = function(node) {
  var attributes = node.attributes,
      Type = this.type,
      descriptor = getModdleDescriptor(Type),
      context = this.context,
      instance = new Type({}),
      model = this.model,
      propNameNs;

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(attributes, function(value, name) {

    var prop = descriptor.propertiesByName[name],
        values;

    if (prop && prop.isReference) {

      if (!prop.isMany) {
        context.addReference({
          element: instance,
          property: prop.ns.name,
          id: value
        });
      } else {
        // IDREFS: parse references as whitespace-separated list
        values = value.split(' ');

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(values, function(v) {
          context.addReference({
            element: instance,
            property: prop.ns.name,
            id: v
          });
        });
      }

    } else {
      if (prop) {
        value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_moddle_lib_types__["b" /* coerceType */])(prop.type, value);
      } else
      if (name !== 'xmlns') {
        propNameNs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_moddle_lib_ns__["a" /* parseName */])(name, descriptor.ns.prefix);

        // check whether attribute is defined in a well-known namespace
        // if that is the case we emit a warning to indicate potential misuse
        if (model.getPackage(propNameNs.prefix)) {

          context.addWarning({
            message: 'unknown attribute <' + name + '>',
            element: instance,
            property: name,
            value: value
          });
        }
      }

      instance.set(name, value);
    }
  });

  return instance;
};

ElementHandler.prototype.getPropertyForNode = function(node) {

  var name = node.name;
  var nameNs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_moddle_lib_ns__["a" /* parseName */])(name);

  var type = this.type,
      model = this.model,
      descriptor = getModdleDescriptor(type);

  var propertyName = nameNs.name,
      property = descriptor.propertiesByName[propertyName],
      elementTypeName,
      elementType;

  // search for properties by name first

  if (property) {

    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common__["c" /* serializeAsType */])(property)) {
      elementTypeName = node.attributes[__WEBPACK_IMPORTED_MODULE_6__common__["b" /* XSI_TYPE */]];

      // xsi type is optional, if it does not exists the
      // default type is assumed
      if (elementTypeName) {

        // take possible type prefixes from XML
        // into account, i.e.: xsi:type="t{ActualType}"
        elementTypeName = normalizeXsiTypeName(elementTypeName, model);

        elementType = model.getType(elementTypeName);

        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])({}, property, {
          effectiveType: getModdleDescriptor(elementType).name
        });
      }
    }

    // search for properties by name first
    return property;
  }

  var pkg = model.getPackage(nameNs.prefix);

  if (pkg) {
    elementTypeName = aliasToName(nameNs, pkg);
    elementType = model.getType(elementTypeName);

    // search for collection members later
    property = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["g" /* find */])(descriptor.properties, function(p) {
      return !p.isVirtual && !p.isReference && !p.isAttribute && elementType.hasType(p.type);
    });

    if (property) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])({}, property, {
        effectiveType: getModdleDescriptor(elementType).name
      });
    }
  } else {
    // parse unknown element (maybe extension)
    property = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["g" /* find */])(descriptor.properties, function(p) {
      return !p.isReference && !p.isAttribute && p.type === 'Element';
    });

    if (property) {
      return property;
    }
  }

  throw error('unrecognized element <' + nameNs.name + '>');
};

ElementHandler.prototype.toString = function() {
  return 'ElementDescriptor[' + getModdleDescriptor(this.type).name + ']';
};

ElementHandler.prototype.valueHandler = function(propertyDesc, element) {
  return new ValueHandler(propertyDesc, element);
};

ElementHandler.prototype.referenceHandler = function(propertyDesc) {
  return new ReferenceHandler(propertyDesc, this.context);
};

ElementHandler.prototype.handler = function(type) {
  if (type === 'Element') {
    return new GenericElementHandler(this.model, type, this.context);
  } else {
    return new ElementHandler(this.model, type, this.context);
  }
};

/**
 * Handle the child element parsing
 *
 * @param  {Element} node the xml node
 */
ElementHandler.prototype.handleChild = function(node) {
  var propertyDesc, type, element, childHandler;

  propertyDesc = this.getPropertyForNode(node);
  element = this.element;

  type = propertyDesc.effectiveType || propertyDesc.type;

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_moddle_lib_types__["a" /* isSimple */])(type)) {
    return this.valueHandler(propertyDesc, element);
  }

  if (propertyDesc.isReference) {
    childHandler = this.referenceHandler(propertyDesc).handleNode(node);
  } else {
    childHandler = this.handler(type).handleNode(node);
  }

  var newElement = childHandler.element;

  // child handles may decide to skip elements
  // by not returning anything
  if (newElement !== undefined) {

    if (propertyDesc.isMany) {
      element.get(propertyDesc.name).push(newElement);
    } else {
      element.set(propertyDesc.name, newElement);
    }

    if (propertyDesc.isReference) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])(newElement, {
        element: element
      });

      this.context.addReference(newElement);
    } else {
      // establish child -> parent relationship
      newElement.$parent = element;
    }
  }

  return childHandler;
};

/**
 * An element handler that performs special validation
 * to ensure the node it gets initialized with matches
 * the handlers type (namespace wise).
 *
 * @param {Moddle} model
 * @param {String} typeName
 * @param {Context} context
 */
function RootElementHandler(model, typeName, context) {
  ElementHandler.call(this, model, typeName, context);
}

RootElementHandler.prototype = Object.create(ElementHandler.prototype);

RootElementHandler.prototype.createElement = function(node) {

  var name = node.name,
      nameNs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_moddle_lib_ns__["a" /* parseName */])(name),
      model = this.model,
      type = this.type,
      pkg = model.getPackage(nameNs.prefix),
      typeName = pkg && aliasToName(nameNs, pkg) || name;

  // verify the correct namespace if we parse
  // the first element in the handler tree
  //
  // this ensures we don't mistakenly import wrong namespace elements
  if (!type.hasType(typeName)) {
    throw error('unexpected element <' + node.originalName + '>');
  }

  return ElementHandler.prototype.createElement.call(this, node);
};


function GenericElementHandler(model, typeName, context) {
  this.model = model;
  this.context = context;
}

GenericElementHandler.prototype = Object.create(BaseElementHandler.prototype);

GenericElementHandler.prototype.createElement = function(node) {

  var name = node.name,
      ns = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_moddle_lib_ns__["a" /* parseName */])(name),
      prefix = ns.prefix,
      uri = node.ns[prefix + '$uri'],
      attributes = node.attributes;

  return this.model.createAny(name, uri, attributes);
};

GenericElementHandler.prototype.handleChild = function(node) {

  var handler = new GenericElementHandler(this.model, 'Element', this.context).handleNode(node),
      element = this.element;

  var newElement = handler.element,
      children;

  if (newElement !== undefined) {
    children = element.$children = element.$children || [];
    children.push(newElement);

    // establish child -> parent relationship
    newElement.$parent = element;
  }

  return handler;
};

GenericElementHandler.prototype.handleText = function(text) {
  this.body = this.body || '' + text;
};

GenericElementHandler.prototype.handleEnd = function() {
  if (this.body) {
    this.element.$body = this.body;
  }
};

/**
 * A reader for a meta-model
 *
 * @param {Object} options
 * @param {Model} options.model used to read xml files
 * @param {Boolean} options.lax whether to make parse errors warnings
 */
function Reader(options) {

  if (options instanceof __WEBPACK_IMPORTED_MODULE_3_moddle__["a" /* default */]) {
    options = {
      model: options
    };
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])(this, { lax: false }, options);
}


/**
 * Parse the given XML into a moddle document tree.
 *
 * @param {String} xml
 * @param {ElementHandler|Object} options or rootHandler
 * @param  {Function} done
 */
Reader.prototype.fromXML = function(xml, options, done) {

  var rootHandler = options.rootHandler;

  if (options instanceof ElementHandler) {
    // root handler passed via (xml, { rootHandler: ElementHandler }, ...)
    rootHandler = options;
    options = {};
  } else {
    if (typeof options === 'string') {
      // rootHandler passed via (xml, 'someString', ...)
      rootHandler = this.handler(options);
      options = {};
    } else if (typeof rootHandler === 'string') {
      // rootHandler passed via (xml, { rootHandler: 'someString' }, ...)
      rootHandler = this.handler(rootHandler);
    }
  }

  var model = this.model,
      lax = this.lax;

  var context = new Context(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])({}, options, { rootHandler: rootHandler })),
      parser = new __WEBPACK_IMPORTED_MODULE_2_saxen__["a" /* Parser */]({ proxy: true }),
      stack = new __WEBPACK_IMPORTED_MODULE_1_tiny_stack___default.a();

  rootHandler.context = context;

  // push root handler
  stack.push(rootHandler);


  /**
   * Handle error.
   *
   * @param  {Error} err
   * @param  {Function} getContext
   * @param  {boolean} lax
   *
   * @return {boolean} true if handled
   */
  function handleError(err, getContext, lax) {

    var ctx = getContext();

    var line = ctx.line,
        column = ctx.column,
        data = ctx.data;

    // we receive the full context data here,
    // for elements trim down the information
    // to the tag name, only
    if (data.charAt(0) === '<' && data.indexOf(' ') !== -1) {
      data = data.slice(0, data.indexOf(' ')) + '>';
    }

    var message =
      'unparsable content ' + (data ? data + ' ' : '') + 'detected\n\t' +
        'line: ' + line + '\n\t' +
        'column: ' + column + '\n\t' +
        'nested error: ' + err.message;

    if (lax) {
      context.addWarning({
        message: message,
        error: err
      });

      console.warn('could not parse node');
      console.warn(err);

      return true;
    } else {
      console.error('could not parse document');
      console.error(err);

      throw error(message);
    }
  }

  function handleWarning(err, getContext) {
    // just like handling errors in <lax=true> mode
    return handleError(err, getContext, true);
  }

  /**
   * Resolve collected references on parse end.
   */
  function resolveReferences() {

    var elementsById = context.elementsById;
    var references = context.references;

    var i, r;

    for (i = 0; (r = references[i]); i++) {
      var element = r.element;
      var reference = elementsById[r.id];
      var property = getModdleDescriptor(element).propertiesByName[r.property];

      if (!reference) {
        context.addWarning({
          message: 'unresolved reference <' + r.id + '>',
          element: r.element,
          property: r.property,
          value: r.id
        });
      }

      if (property.isMany) {
        var collection = element.get(property.name),
            idx = collection.indexOf(r);

        // we replace an existing place holder (idx != -1) or
        // append to the collection instead
        if (idx === -1) {
          idx = collection.length;
        }

        if (!reference) {
          // remove unresolvable reference
          collection.splice(idx, 1);
        } else {
          // add or update reference in collection
          collection[idx] = reference;
        }
      } else {
        element.set(property.name, reference);
      }
    }
  }

  function handleClose() {
    stack.pop().handleEnd();
  }

  var PREAMBLE_START_PATTERN = /^<\?xml /i;

  var ENCODING_PATTERN = / encoding="([^"]+)"/i;

  var UTF_8_PATTERN = /^utf-8$/i;

  function handleQuestion(question) {

    if (!PREAMBLE_START_PATTERN.test(question)) {
      return;
    }

    var match = ENCODING_PATTERN.exec(question);
    var encoding = match && match[1];

    if (!encoding || UTF_8_PATTERN.test(encoding)) {
      return;
    }

    context.addWarning({
      message:
        'unsupported document encoding <' + encoding + '>, ' +
        'falling back to UTF-8'
    });
  }

  function handleOpen(node, getContext) {
    var handler = stack.peek();

    try {
      stack.push(handler.handleNode(node));
    } catch (err) {

      if (handleError(err, getContext, lax)) {
        stack.push(new NoopHandler());
      }
    }
  }

  function handleCData(text) {
    stack.peek().handleText(text);
  }

  function handleText(text) {
    // strip whitespace only nodes, i.e. before
    // <!CDATA[ ... ]> sections and in between tags
    text = text.trim();

    if (!text) {
      return;
    }

    stack.peek().handleText(text);
  }

  var uriMap = model.getPackages().reduce(function(uriMap, p) {
    uriMap[p.uri] = p.prefix;

    return uriMap;
  }, {});

  parser
    .ns(uriMap)
    .on('openTag', function(obj, decodeStr, selfClosing, getContext) {

      // gracefully handle unparsable attributes (attrs=false)
      var attrs = obj.attrs || {};

      var decodedAttrs = Object.keys(attrs).reduce(function(d, key) {
        var value = decodeStr(attrs[key]);

        d[key] = value;

        return d;
      }, {});

      var node = {
        name: obj.name,
        originalName: obj.originalName,
        attributes: decodedAttrs,
        ns: obj.ns
      };

      handleOpen(node, getContext);
    })
    .on('question', handleQuestion)
    .on('closeTag', handleClose)
    .on('cdata', handleCData)
    .on('text', function(text, decodeEntities) {
      handleText(decodeEntities(text));
    })
    .on('error', handleError)
    .on('warn', handleWarning);

  // deferred parse XML to make loading really ascnchronous
  // this ensures the execution environment (node or browser)
  // is kept responsive and that certain optimization strategies
  // can kick in
  defer(function() {
    var err;

    try {
      parser.parse(xml);

      resolveReferences();
    } catch (e) {
      err = e;
    }

    var element = rootHandler.element;

    // handle the situation that we could not extract
    // the desired root element from the document
    if (!err && !element) {
      err = error('failed to parse document as <' + rootHandler.type.$descriptor.name + '>');
    }

    done(err, err ? undefined : element, context);
  });
};

Reader.prototype.handler = function(name) {
  return new RootElementHandler(this.model, name);
};

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_min_dash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moddle_lib_types__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moddle_lib_ns__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__(247);
/* unused harmony export Namespaces */
/* harmony export (immutable) */ __webpack_exports__["a"] = Writer;








var XML_PREAMBLE = '<?xml version="1.0" encoding="UTF-8"?>\n';

var ESCAPE_ATTR_CHARS = /<|>|'|"|&|\n\r|\n/g;
var ESCAPE_CHARS =  /<|>|&/g;


function Namespaces(parent) {

  var prefixMap = {};
  var uriMap = {};
  var used = {};

  var wellknown = [];
  var custom = [];

  // API

  this.byUri = function(uri) {
    return uriMap[uri] || (
      parent && parent.byUri(uri)
    );
  };

  this.add = function(ns, isWellknown) {

    uriMap[ns.uri] = ns;

    if (isWellknown) {
      wellknown.push(ns);
    } else {
      custom.push(ns);
    }

    this.mapPrefix(ns.prefix, ns.uri);
  };

  this.uriByPrefix = function(prefix) {
    return prefixMap[prefix || 'xmlns'];
  };

  this.mapPrefix = function(prefix, uri) {
    prefixMap[prefix || 'xmlns'] = uri;
  };

  this.logUsed = function(ns) {
    var uri = ns.uri;

    used[uri] = this.byUri(uri);
  };

  this.getUsed = function(ns) {

    function isUsed(ns) {
      return used[ns.uri];
    }

    var allNs = [].concat(wellknown, custom);

    return allNs.filter(isUsed);
  };

}

function lower(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function nameToAlias(name, pkg) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common__["a" /* hasLowerCaseAlias */])(pkg)) {
    return lower(name);
  } else {
    return name;
  }
}

function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
}

function nsName(ns) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["b" /* isString */])(ns)) {
    return ns;
  } else {
    return (ns.prefix ? ns.prefix + ':' : '') + ns.localName;
  }
}

function getNsAttrs(namespaces) {

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["d" /* map */])(namespaces.getUsed(), function(ns) {
    var name = 'xmlns' + (ns.prefix ? ':' + ns.prefix : '');
    return { name: name, value: ns.uri };
  });

}

function getElementNs(ns, descriptor) {
  if (descriptor.isGeneric) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])({ localName: descriptor.ns.localName }, ns);
  } else {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])({ localName: nameToAlias(descriptor.ns.localName, descriptor.$pkg) }, ns);
  }
}

function getPropertyNs(ns, descriptor) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])({ localName: descriptor.ns.localName }, ns);
}

function getSerializableProperties(element) {
  var descriptor = element.$descriptor;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["e" /* filter */])(descriptor.properties, function(p) {
    var name = p.name;

    if (p.isVirtual) {
      return false;
    }

    // do not serialize defaults
    if (!element.hasOwnProperty(name)) {
      return false;
    }

    var value = element[name];

    // do not serialize default equals
    if (value === p.default) {
      return false;
    }

    // do not serialize null properties
    if (value === null) {
      return false;
    }

    return p.isMany ? value.length : true;
  });
}

var ESCAPE_ATTR_MAP = {
  '\n': '#10',
  '\n\r': '#10',
  '"': '#34',
  '\'': '#39',
  '<': '#60',
  '>': '#62',
  '&': '#38'
};

var ESCAPE_MAP = {
  '<': 'lt',
  '>': 'gt',
  '&': 'amp'
};

function escape(str, charPattern, replaceMap) {

  // ensure we are handling strings here
  str = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["b" /* isString */])(str) ? str : '' + str;

  return str.replace(charPattern, function(s) {
    return '&' + replaceMap[s] + ';';
  });
}

/**
 * Escape a string attribute to not contain any bad values (line breaks, '"', ...)
 *
 * @param {String} str the string to escape
 * @return {String} the escaped string
 */
function escapeAttr(str) {
  return escape(str, ESCAPE_ATTR_CHARS, ESCAPE_ATTR_MAP);
}

function escapeBody(str) {
  return escape(str, ESCAPE_CHARS, ESCAPE_MAP);
}

function filterAttributes(props) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["e" /* filter */])(props, function(p) { return p.isAttr; });
}

function filterContained(props) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["e" /* filter */])(props, function(p) { return !p.isAttr; });
}


function ReferenceSerializer(tagName) {
  this.tagName = tagName;
}

ReferenceSerializer.prototype.build = function(element) {
  this.element = element;
  return this;
};

ReferenceSerializer.prototype.serializeTo = function(writer) {
  writer
    .appendIndent()
    .append('<' + this.tagName + '>' + this.element.id + '</' + this.tagName + '>')
    .appendNewLine();
};

function BodySerializer() {}

BodySerializer.prototype.serializeValue =
BodySerializer.prototype.serializeTo = function(writer) {
  writer.append(
    this.escape
      ? escapeBody(this.value)
      : this.value
  );
};

BodySerializer.prototype.build = function(prop, value) {
  this.value = value;

  if (prop.type === 'String' && value.search(ESCAPE_CHARS) !== -1) {
    this.escape = true;
  }

  return this;
};

function ValueSerializer(tagName) {
  this.tagName = tagName;
}

inherits(ValueSerializer, BodySerializer);

ValueSerializer.prototype.serializeTo = function(writer) {

  writer
    .appendIndent()
    .append('<' + this.tagName + '>');

  this.serializeValue(writer);

  writer
    .append('</' + this.tagName + '>')
    .appendNewLine();
};

function ElementSerializer(parent, propertyDescriptor) {
  this.body = [];
  this.attrs = [];

  this.parent = parent;
  this.propertyDescriptor = propertyDescriptor;
}

ElementSerializer.prototype.build = function(element) {
  this.element = element;

  var elementDescriptor = element.$descriptor,
      propertyDescriptor = this.propertyDescriptor;

  var otherAttrs,
      properties;

  var isGeneric = elementDescriptor.isGeneric;

  if (isGeneric) {
    otherAttrs = this.parseGeneric(element);
  } else {
    otherAttrs = this.parseNsAttributes(element);
  }

  if (propertyDescriptor) {
    this.ns = this.nsPropertyTagName(propertyDescriptor);
  } else {
    this.ns = this.nsTagName(elementDescriptor);
  }

  // compute tag name
  this.tagName = this.addTagName(this.ns);

  if (!isGeneric) {
    properties = getSerializableProperties(element);

    this.parseAttributes(filterAttributes(properties));
    this.parseContainments(filterContained(properties));
  }

  this.parseGenericAttributes(element, otherAttrs);

  return this;
};

ElementSerializer.prototype.nsTagName = function(descriptor) {
  var effectiveNs = this.logNamespaceUsed(descriptor.ns);
  return getElementNs(effectiveNs, descriptor);
};

ElementSerializer.prototype.nsPropertyTagName = function(descriptor) {
  var effectiveNs = this.logNamespaceUsed(descriptor.ns);
  return getPropertyNs(effectiveNs, descriptor);
};

ElementSerializer.prototype.isLocalNs = function(ns) {
  return ns.uri === this.ns.uri;
};

/**
 * Get the actual ns attribute name for the given element.
 *
 * @param {Object} element
 * @param {Boolean} [element.inherited=false]
 *
 * @return {Object} nsName
 */
ElementSerializer.prototype.nsAttributeName = function(element) {

  var ns;

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["b" /* isString */])(element)) {
    ns = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_moddle_lib_ns__["a" /* parseName */])(element);
  } else {
    ns = element.ns;
  }

  // return just local name for inherited attributes
  if (element.inherited) {
    return { localName: ns.localName };
  }

  // parse + log effective ns
  var effectiveNs = this.logNamespaceUsed(ns);

  // LOG ACTUAL namespace use
  this.getNamespaces().logUsed(effectiveNs);

  // strip prefix if same namespace like parent
  if (this.isLocalNs(effectiveNs)) {
    return { localName: ns.localName };
  } else {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])({ localName: ns.localName }, effectiveNs);
  }
};

ElementSerializer.prototype.parseGeneric = function(element) {

  var self = this,
      body = this.body;

  var attributes = [];

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(element, function(val, key) {

    var nonNsAttr;

    if (key === '$body') {
      body.push(new BodySerializer().build({ type: 'String' }, val));
    } else
    if (key === '$children') {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(val, function(child) {
        body.push(new ElementSerializer(self).build(child));
      });
    } else
    if (key.indexOf('$') !== 0) {
      nonNsAttr = self.parseNsAttribute(element, key, val);

      if (nonNsAttr) {
        attributes.push({ name: key, value: val });
      }
    }
  });

  return attributes;
};

ElementSerializer.prototype.parseNsAttribute = function(element, name, value) {
  var model = element.$model;

  var nameNs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_moddle_lib_ns__["a" /* parseName */])(name);

  var ns;

  // parse xmlns:foo="http://foo.bar"
  if (nameNs.prefix === 'xmlns') {
    ns = { prefix: nameNs.localName, uri: value };
  }

  // parse xmlns="http://foo.bar"
  if (!nameNs.prefix && nameNs.localName === 'xmlns') {
    ns = { uri: value };
  }

  if (!ns) {
    return {
      name: name,
      value: value
    };
  }

  if (model && model.getPackage(value)) {
    // register well known namespace
    this.logNamespace(ns, true, true);
  } else {
    // log custom namespace directly as used
    var actualNs = this.logNamespaceUsed(ns, true);

    this.getNamespaces().logUsed(actualNs);
  }
};


/**
 * Parse namespaces and return a list of left over generic attributes
 *
 * @param  {Object} element
 * @return {Array<Object>}
 */
ElementSerializer.prototype.parseNsAttributes = function(element, attrs) {
  var self = this;

  var genericAttrs = element.$attrs;

  var attributes = [];

  // parse namespace attributes first
  // and log them. push non namespace attributes to a list
  // and process them later
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(genericAttrs, function(value, name) {

    var nonNsAttr = self.parseNsAttribute(element, name, value);

    if (nonNsAttr) {
      attributes.push(nonNsAttr);
    }
  });

  return attributes;
};

ElementSerializer.prototype.parseGenericAttributes = function(element, attributes) {

  var self = this;

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(attributes, function(attr) {

    // do not serialize xsi:type attribute
    // it is set manually based on the actual implementation type
    if (attr.name === __WEBPACK_IMPORTED_MODULE_3__common__["b" /* XSI_TYPE */]) {
      return;
    }

    try {
      self.addAttribute(self.nsAttributeName(attr.name), attr.value);
    } catch (e) {
      console.warn(
        'missing namespace information for ',
        attr.name, '=', attr.value, 'on', element,
        e);
    }
  });
};

ElementSerializer.prototype.parseContainments = function(properties) {

  var self = this,
      body = this.body,
      element = this.element;

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(properties, function(p) {
    var value = element.get(p.name),
        isReference = p.isReference,
        isMany = p.isMany;

    if (!isMany) {
      value = [ value ];
    }

    if (p.isBody) {
      body.push(new BodySerializer().build(p, value[0]));
    } else
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_moddle_lib_types__["a" /* isSimple */])(p.type)) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(value, function(v) {
        body.push(new ValueSerializer(self.addTagName(self.nsPropertyTagName(p))).build(p, v));
      });
    } else
    if (isReference) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(value, function(v) {
        body.push(new ReferenceSerializer(self.addTagName(self.nsPropertyTagName(p))).build(v));
      });
    } else {
      // allow serialization via type
      // rather than element name
      var asType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common__["c" /* serializeAsType */])(p),
          asProperty = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common__["d" /* serializeAsProperty */])(p);

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(value, function(v) {
        var serializer;

        if (asType) {
          serializer = new TypeSerializer(self, p);
        } else
        if (asProperty) {
          serializer = new ElementSerializer(self, p);
        } else {
          serializer = new ElementSerializer(self);
        }

        body.push(serializer.build(v));
      });
    }
  });
};

ElementSerializer.prototype.getNamespaces = function(local) {

  var namespaces = this.namespaces,
      parent = this.parent,
      parentNamespaces;

  if (!namespaces) {
    parentNamespaces = parent && parent.getNamespaces();

    if (local || !parentNamespaces) {
      this.namespaces = namespaces = new Namespaces(parentNamespaces);
    } else {
      namespaces = parentNamespaces;
    }
  }

  return namespaces;
};

ElementSerializer.prototype.logNamespace = function(ns, wellknown, local) {
  var namespaces = this.getNamespaces(local);

  var nsUri = ns.uri,
      nsPrefix = ns.prefix;

  var existing = namespaces.byUri(nsUri);

  if (!existing) {
    namespaces.add(ns, wellknown);
  }

  namespaces.mapPrefix(nsPrefix, nsUri);

  return ns;
};

ElementSerializer.prototype.logNamespaceUsed = function(ns, local) {
  var element = this.element,
      model = element.$model,
      namespaces = this.getNamespaces(local);

  // ns may be
  //
  //   * prefix only
  //   * prefix:uri
  //   * localName only

  var prefix = ns.prefix,
      uri = ns.uri,
      newPrefix, idx,
      wellknownUri;

  // handle anonymous namespaces (elementForm=unqualified), cf. #23
  if (!prefix && !uri) {
    return { localName: ns.localName };
  }

  wellknownUri = __WEBPACK_IMPORTED_MODULE_3__common__["e" /* DEFAULT_NS_MAP */][prefix] || model && (model.getPackage(prefix) || {}).uri;

  uri = uri || wellknownUri || namespaces.uriByPrefix(prefix);

  if (!uri) {
    throw new Error('no namespace uri given for prefix <' + prefix + '>');
  }

  ns = namespaces.byUri(uri);

  if (!ns) {
    newPrefix = prefix;
    idx = 1;

    // find a prefix that is not mapped yet
    while (namespaces.uriByPrefix(newPrefix)) {
      newPrefix = prefix + '_' + idx++;
    }

    ns = this.logNamespace({ prefix: newPrefix, uri: uri }, wellknownUri === uri);
  }

  if (prefix) {
    namespaces.mapPrefix(prefix, uri);
  }

  return ns;
};

ElementSerializer.prototype.parseAttributes = function(properties) {
  var self = this,
      element = this.element;

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(properties, function(p) {

    var value = element.get(p.name);

    if (p.isReference) {

      if (!p.isMany) {
        value = value.id;
      }
      else {
        var values = [];
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(value, function(v) {
          values.push(v.id);
        });
        // IDREFS is a whitespace-separated list of references.
        value = values.join(' ');
      }

    }

    self.addAttribute(self.nsAttributeName(p), value);
  });
};

ElementSerializer.prototype.addTagName = function(nsTagName) {
  var actualNs = this.logNamespaceUsed(nsTagName);

  this.getNamespaces().logUsed(actualNs);

  return nsName(nsTagName);
};

ElementSerializer.prototype.addAttribute = function(name, value) {
  var attrs = this.attrs;

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["b" /* isString */])(value)) {
    value = escapeAttr(value);
  }

  attrs.push({ name: name, value: value });
};

ElementSerializer.prototype.serializeAttributes = function(writer) {
  var attrs = this.attrs,
      namespaces = this.namespaces;

  if (namespaces) {
    attrs = getNsAttrs(namespaces).concat(attrs);
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(attrs, function(a) {
    writer
      .append(' ')
      .append(nsName(a.name)).append('="').append(a.value).append('"');
  });
};

ElementSerializer.prototype.serializeTo = function(writer) {
  var firstBody = this.body[0],
      indent = firstBody && firstBody.constructor !== BodySerializer;

  writer
    .appendIndent()
    .append('<' + this.tagName);

  this.serializeAttributes(writer);

  writer.append(firstBody ? '>' : ' />');

  if (firstBody) {

    if (indent) {
      writer
        .appendNewLine()
        .indent();
    }

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(this.body, function(b) {
      b.serializeTo(writer);
    });

    if (indent) {
      writer
        .unindent()
        .appendIndent();
    }

    writer.append('</' + this.tagName + '>');
  }

  writer.appendNewLine();
};

/**
 * A serializer for types that handles serialization of data types
 */
function TypeSerializer(parent, propertyDescriptor) {
  ElementSerializer.call(this, parent, propertyDescriptor);
}

inherits(TypeSerializer, ElementSerializer);

TypeSerializer.prototype.parseNsAttributes = function(element) {

  // extracted attributes
  var attributes = ElementSerializer.prototype.parseNsAttributes.call(this, element);

  var descriptor = element.$descriptor;

  // only serialize xsi:type if necessary
  if (descriptor.name === this.propertyDescriptor.type) {
    return attributes;
  }

  var typeNs = this.typeNs = this.nsTagName(descriptor);
  this.getNamespaces().logUsed(this.typeNs);

  // add xsi:type attribute to represent the elements
  // actual type

  var pkg = element.$model.getPackage(typeNs.uri),
      typePrefix = (pkg.xml && pkg.xml.typePrefix) || '';

  this.addAttribute(
    this.nsAttributeName(__WEBPACK_IMPORTED_MODULE_3__common__["b" /* XSI_TYPE */]),
    (typeNs.prefix ? typeNs.prefix + ':' : '') + typePrefix + descriptor.ns.localName
  );

  return attributes;
};

TypeSerializer.prototype.isLocalNs = function(ns) {
  return ns.uri === this.typeNs.uri;
};

function SavingWriter() {
  this.value = '';

  this.write = function(str) {
    this.value += str;
  };
}

function FormatingWriter(out, format) {

  var indent = [''];

  this.append = function(str) {
    out.write(str);

    return this;
  };

  this.appendNewLine = function() {
    if (format) {
      out.write('\n');
    }

    return this;
  };

  this.appendIndent = function() {
    if (format) {
      out.write(indent.join('  '));
    }

    return this;
  };

  this.indent = function() {
    indent.push('');
    return this;
  };

  this.unindent = function() {
    indent.pop();
    return this;
  };
}

/**
 * A writer for meta-model backed document trees
 *
 * @param {Object} options output options to pass into the writer
 */
function Writer(options) {

  options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])({ format: false, preamble: true }, options || {});

  function toXML(tree, writer) {
    var internalWriter = writer || new SavingWriter();
    var formatingWriter = new FormatingWriter(internalWriter, options.format);

    if (options.preamble) {
      formatingWriter.append(XML_PREAMBLE);
    }

    new ElementSerializer().build(tree).serializeTo(formatingWriter);

    if (!writer) {
      return internalWriter.value;
    }
  }

  return {
    toXML: toXML
  };
}

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Base;
/**
 * Moddle base element.
 */
function Base() { }

Base.prototype.get = function(name) {
  return this.$model.properties.get(this, name);
};

Base.prototype.set = function(name, value) {
  this.$model.properties.set(this, name, value);
};

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_min_dash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ns__ = __webpack_require__(32);
/* harmony export (immutable) */ __webpack_exports__["a"] = DescriptorBuilder;





/**
 * A utility to build element descriptors.
 */
function DescriptorBuilder(nameNs) {
  this.ns = nameNs;
  this.name = nameNs.name;
  this.allTypes = [];
  this.allTypesByName = {};
  this.properties = [];
  this.propertiesByName = {};
}


DescriptorBuilder.prototype.build = function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["j" /* pick */])(this, [
    'ns',
    'name',
    'allTypes',
    'allTypesByName',
    'properties',
    'propertiesByName',
    'bodyProperty',
    'idProperty'
  ]);
};

/**
 * Add property at given index.
 *
 * @param {Object} p
 * @param {Number} [idx]
 * @param {Boolean} [validate=true]
 */
DescriptorBuilder.prototype.addProperty = function(p, idx, validate) {

  if (typeof idx === 'boolean') {
    validate = idx;
    idx = undefined;
  }

  this.addNamedProperty(p, validate !== false);

  var properties = this.properties;

  if (idx !== undefined) {
    properties.splice(idx, 0, p);
  } else {
    properties.push(p);
  }
};


DescriptorBuilder.prototype.replaceProperty = function(oldProperty, newProperty, replace) {
  var oldNameNs = oldProperty.ns;

  var props = this.properties,
      propertiesByName = this.propertiesByName,
      rename = oldProperty.name !== newProperty.name;

  if (oldProperty.isId) {
    if (!newProperty.isId) {
      throw new Error(
        'property <' + newProperty.ns.name + '> must be id property ' +
        'to refine <' + oldProperty.ns.name + '>');
    }

    this.setIdProperty(newProperty, false);
  }

  if (oldProperty.isBody) {

    if (!newProperty.isBody) {
      throw new Error(
        'property <' + newProperty.ns.name + '> must be body property ' +
        'to refine <' + oldProperty.ns.name + '>');
    }

    // TODO: Check compatibility
    this.setBodyProperty(newProperty, false);
  }

  // validate existence and get location of old property
  var idx = props.indexOf(oldProperty);
  if (idx === -1) {
    throw new Error('property <' + oldNameNs.name + '> not found in property list');
  }

  // remove old property
  props.splice(idx, 1);

  // replacing the named property is intentional
  //
  //  * validate only if this is a "rename" operation
  //  * add at specific index unless we "replace"
  //
  this.addProperty(newProperty, replace ? undefined : idx, rename);

  // make new property available under old name
  propertiesByName[oldNameNs.name] = propertiesByName[oldNameNs.localName] = newProperty;
};


DescriptorBuilder.prototype.redefineProperty = function(p, targetPropertyName, replace) {

  var nsPrefix = p.ns.prefix;
  var parts = targetPropertyName.split('#');

  var name = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ns__["a" /* parseName */])(parts[0], nsPrefix);
  var attrName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ns__["a" /* parseName */])(parts[1], name.prefix).name;

  var redefinedProperty = this.propertiesByName[attrName];
  if (!redefinedProperty) {
    throw new Error('refined property <' + attrName + '> not found');
  } else {
    this.replaceProperty(redefinedProperty, p, replace);
  }

  delete p.redefines;
};

DescriptorBuilder.prototype.addNamedProperty = function(p, validate) {
  var ns = p.ns,
      propsByName = this.propertiesByName;

  if (validate) {
    this.assertNotDefined(p, ns.name);
    this.assertNotDefined(p, ns.localName);
  }

  propsByName[ns.name] = propsByName[ns.localName] = p;
};

DescriptorBuilder.prototype.removeNamedProperty = function(p) {
  var ns = p.ns,
      propsByName = this.propertiesByName;

  delete propsByName[ns.name];
  delete propsByName[ns.localName];
};

DescriptorBuilder.prototype.setBodyProperty = function(p, validate) {

  if (validate && this.bodyProperty) {
    throw new Error(
      'body property defined multiple times ' +
      '(<' + this.bodyProperty.ns.name + '>, <' + p.ns.name + '>)');
  }

  this.bodyProperty = p;
};

DescriptorBuilder.prototype.setIdProperty = function(p, validate) {

  if (validate && this.idProperty) {
    throw new Error(
      'id property defined multiple times ' +
      '(<' + this.idProperty.ns.name + '>, <' + p.ns.name + '>)');
  }

  this.idProperty = p;
};

DescriptorBuilder.prototype.assertNotDefined = function(p, name) {
  var propertyName = p.name,
      definedProperty = this.propertiesByName[propertyName];

  if (definedProperty) {
    throw new Error(
      'property <' + propertyName + '> already defined; ' +
      'override of <' + definedProperty.definedBy.ns.name + '#' + definedProperty.ns.name + '> by ' +
      '<' + p.definedBy.ns.name + '#' + p.ns.name + '> not allowed without redefines');
  }
};

DescriptorBuilder.prototype.hasProperty = function(name) {
  return this.propertiesByName[name];
};

DescriptorBuilder.prototype.addTrait = function(t, inherited) {

  var typesByName = this.allTypesByName,
      types = this.allTypes;

  var typeName = t.name;

  if (typeName in typesByName) {
    return;
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(t.properties, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["i" /* bind */])(function(p) {

    // clone property to allow extensions
    p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])({}, p, {
      name: p.ns.localName,
      inherited: inherited
    });

    Object.defineProperty(p, 'definedBy', {
      value: t
    });

    var replaces = p.replaces,
        redefines = p.redefines;

    // add replace/redefine support
    if (replaces || redefines) {
      this.redefineProperty(p, replaces || redefines, replaces);
    } else {
      if (p.isBody) {
        this.setBodyProperty(p);
      }
      if (p.isId) {
        this.setIdProperty(p);
      }
      this.addProperty(p);
    }
  }, this));

  types.push(t);
  typesByName[typeName] = t;
};

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_min_dash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(488);
/* harmony export (immutable) */ __webpack_exports__["a"] = Factory;




/**
 * A model element factory.
 *
 * @param {Moddle} model
 * @param {Properties} properties
 */
function Factory(model, properties) {
  this.model = model;
  this.properties = properties;
}


Factory.prototype.createType = function(descriptor) {

  var model = this.model;

  var props = this.properties,
      prototype = Object.create(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* default */].prototype);

  // initialize default values
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(descriptor.properties, function(p) {
    if (!p.isMany && p.default !== undefined) {
      prototype[p.name] = p.default;
    }
  });

  props.defineModel(prototype, model);
  props.defineDescriptor(prototype, descriptor);

  var name = descriptor.ns.name;

  /**
   * The new type constructor
   */
  function ModdleElement(attrs) {
    props.define(this, '$type', { value: name, enumerable: true });
    props.define(this, '$attrs', { value: {} });
    props.define(this, '$parent', { writable: true });

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(attrs, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["i" /* bind */])(function(val, key) {
      this.set(key, val);
    }, this));
  }

  ModdleElement.prototype = prototype;

  ModdleElement.hasType = prototype.$instanceOf = this.model.hasType;

  // static links
  props.defineModel(ModdleElement, model);
  props.defineDescriptor(ModdleElement, descriptor);

  return ModdleElement;
};

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_min_dash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__factory__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registry__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__properties__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ns__ = __webpack_require__(32);
/* harmony export (immutable) */ __webpack_exports__["a"] = Moddle;









//// Moddle implementation /////////////////////////////////////////////////

/**
 * @class Moddle
 *
 * A model that can be used to create elements of a specific type.
 *
 * @example
 *
 * var Moddle = require('moddle');
 *
 * var pkg = {
 *   name: 'mypackage',
 *   prefix: 'my',
 *   types: [
 *     { name: 'Root' }
 *   ]
 * };
 *
 * var moddle = new Moddle([pkg]);
 *
 * @param {Array<Package>} packages the packages to contain
 */
function Moddle(packages) {

  this.properties = new __WEBPACK_IMPORTED_MODULE_3__properties__["a" /* default */](this);

  this.factory = new __WEBPACK_IMPORTED_MODULE_1__factory__["a" /* default */](this, this.properties);
  this.registry = new __WEBPACK_IMPORTED_MODULE_2__registry__["a" /* default */](packages, this.properties);

  this.typeCache = {};
}


/**
 * Create an instance of the specified type.
 *
 * @method Moddle#create
 *
 * @example
 *
 * var foo = moddle.create('my:Foo');
 * var bar = moddle.create('my:Bar', { id: 'BAR_1' });
 *
 * @param  {String|Object} descriptor the type descriptor or name know to the model
 * @param  {Object} attrs   a number of attributes to initialize the model instance with
 * @return {Object}         model instance
 */
Moddle.prototype.create = function(descriptor, attrs) {
  var Type = this.getType(descriptor);

  if (!Type) {
    throw new Error('unknown type <' + descriptor + '>');
  }

  return new Type(attrs);
};


/**
 * Returns the type representing a given descriptor
 *
 * @method Moddle#getType
 *
 * @example
 *
 * var Foo = moddle.getType('my:Foo');
 * var foo = new Foo({ 'id' : 'FOO_1' });
 *
 * @param  {String|Object} descriptor the type descriptor or name know to the model
 * @return {Object}         the type representing the descriptor
 */
Moddle.prototype.getType = function(descriptor) {

  var cache = this.typeCache;

  var name = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["b" /* isString */])(descriptor) ? descriptor : descriptor.ns.name;

  var type = cache[name];

  if (!type) {
    descriptor = this.registry.getEffectiveDescriptor(name);
    type = cache[name] = this.factory.createType(descriptor);
  }

  return type;
};


/**
 * Creates an any-element type to be used within model instances.
 *
 * This can be used to create custom elements that lie outside the meta-model.
 * The created element contains all the meta-data required to serialize it
 * as part of meta-model elements.
 *
 * @method Moddle#createAny
 *
 * @example
 *
 * var foo = moddle.createAny('vendor:Foo', 'http://vendor', {
 *   value: 'bar'
 * });
 *
 * var container = moddle.create('my:Container', 'http://my', {
 *   any: [ foo ]
 * });
 *
 * // go ahead and serialize the stuff
 *
 *
 * @param  {String} name  the name of the element
 * @param  {String} nsUri the namespace uri of the element
 * @param  {Object} [properties] a map of properties to initialize the instance with
 * @return {Object} the any type instance
 */
Moddle.prototype.createAny = function(name, nsUri, properties) {

  var nameNs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ns__["a" /* parseName */])(name);

  var element = {
    $type: name,
    $instanceOf: function(type) {
      return type === this.$type;
    }
  };

  var descriptor = {
    name: name,
    isGeneric: true,
    ns: {
      prefix: nameNs.prefix,
      localName: nameNs.localName,
      uri: nsUri
    }
  };

  this.properties.defineDescriptor(element, descriptor);
  this.properties.defineModel(element, this);
  this.properties.define(element, '$parent', { enumerable: false, writable: true });

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(properties, function(a, key) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["h" /* isObject */])(a) && a.value !== undefined) {
      element[a.name] = a.value;
    } else {
      element[key] = a;
    }
  });

  return element;
};

/**
 * Returns a registered package by uri or prefix
 *
 * @return {Object} the package
 */
Moddle.prototype.getPackage = function(uriOrPrefix) {
  return this.registry.getPackage(uriOrPrefix);
};

/**
 * Returns a snapshot of all known packages
 *
 * @return {Object} the package
 */
Moddle.prototype.getPackages = function() {
  return this.registry.getPackages();
};

/**
 * Returns the descriptor for an element
 */
Moddle.prototype.getElementDescriptor = function(element) {
  return element.$descriptor;
};

/**
 * Returns true if the given descriptor or instance
 * represents the given type.
 *
 * May be applied to this, if element is omitted.
 */
Moddle.prototype.hasType = function(element, type) {
  if (type === undefined) {
    type = element;
    element = this;
  }

  var descriptor = element.$model.getElementDescriptor(element);

  return (type in descriptor.allTypesByName);
};

/**
 * Returns the descriptor of an elements named property
 */
Moddle.prototype.getPropertyDescriptor = function(element, property) {
  return this.getElementDescriptor(element).propertiesByName[property];
};

/**
 * Returns a mapped type's descriptor
 */
Moddle.prototype.getTypeDescriptor = function(type) {
  return this.registry.typeMap[type];
};

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Properties;
/**
 * A utility that gets and sets properties of model elements.
 *
 * @param {Model} model
 */
function Properties(model) {
  this.model = model;
}


/**
 * Sets a named property on the target element.
 * If the value is undefined, the property gets deleted.
 *
 * @param {Object} target
 * @param {String} name
 * @param {Object} value
 */
Properties.prototype.set = function(target, name, value) {

  var property = this.model.getPropertyDescriptor(target, name);

  var propertyName = property && property.name;

  if (isUndefined(value)) {
    // unset the property, if the specified value is undefined;
    // delete from $attrs (for extensions) or the target itself
    if (property) {
      delete target[propertyName];
    } else {
      delete target.$attrs[name];
    }
  } else {
    // set the property, defining well defined properties on the fly
    // or simply updating them in target.$attrs (for extensions)
    if (property) {
      if (propertyName in target) {
        target[propertyName] = value;
      } else {
        defineProperty(target, property, value);
      }
    } else {
      target.$attrs[name] = value;
    }
  }
};

/**
 * Returns the named property of the given element
 *
 * @param  {Object} target
 * @param  {String} name
 *
 * @return {Object}
 */
Properties.prototype.get = function(target, name) {

  var property = this.model.getPropertyDescriptor(target, name);

  if (!property) {
    return target.$attrs[name];
  }

  var propertyName = property.name;

  // check if access to collection property and lazily initialize it
  if (!target[propertyName] && property.isMany) {
    defineProperty(target, property, []);
  }

  return target[propertyName];
};


/**
 * Define a property on the target element
 *
 * @param  {Object} target
 * @param  {String} name
 * @param  {Object} options
 */
Properties.prototype.define = function(target, name, options) {
  Object.defineProperty(target, name, options);
};


/**
 * Define the descriptor for an element
 */
Properties.prototype.defineDescriptor = function(target, descriptor) {
  this.define(target, '$descriptor', { value: descriptor });
};

/**
 * Define the model for an element
 */
Properties.prototype.defineModel = function(target, model) {
  this.define(target, '$model', { value: model });
};


function isUndefined(val) {
  return typeof val === 'undefined';
}

function defineProperty(target, property, value) {
  Object.defineProperty(target, property.name, {
    enumerable: !property.isReference,
    writable: true,
    value: value,
    configurable: true
  });
}

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_min_dash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__descriptor_builder__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ns__ = __webpack_require__(32);
/* harmony export (immutable) */ __webpack_exports__["a"] = Registry;









/**
 * A registry of Moddle packages.
 *
 * @param {Array<Package>} packages
 * @param {Properties} properties
 */
function Registry(packages, properties) {
  this.packageMap = {};
  this.typeMap = {};

  this.packages = [];

  this.properties = properties;

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(packages, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["i" /* bind */])(this.registerPackage, this));
}


Registry.prototype.getPackage = function(uriOrPrefix) {
  return this.packageMap[uriOrPrefix];
};

Registry.prototype.getPackages = function() {
  return this.packages;
};


Registry.prototype.registerPackage = function(pkg) {

  // copy package
  pkg = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])({}, pkg);

  var pkgMap = this.packageMap;

  ensureAvailable(pkgMap, pkg, 'prefix');
  ensureAvailable(pkgMap, pkg, 'uri');

  // register types
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(pkg.types, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["i" /* bind */])(function(descriptor) {
    this.registerType(descriptor, pkg);
  }, this));

  pkgMap[pkg.uri] = pkgMap[pkg.prefix] = pkg;
  this.packages.push(pkg);
};


/**
 * Register a type from a specific package with us
 */
Registry.prototype.registerType = function(type, pkg) {

  type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])({}, type, {
    superClass: (type.superClass || []).slice(),
    extends: (type.extends || []).slice(),
    properties: (type.properties || []).slice(),
    meta: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])(({}, type.meta || {}))
  });

  var ns = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ns__["a" /* parseName */])(type.name, pkg.prefix),
      name = ns.name,
      propertiesByName = {};

  // parse properties
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(type.properties, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["i" /* bind */])(function(p) {

    // namespace property names
    var propertyNs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ns__["a" /* parseName */])(p.name, ns.prefix),
        propertyName = propertyNs.name;

    // namespace property types
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__types__["c" /* isBuiltIn */])(p.type)) {
      p.type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ns__["a" /* parseName */])(p.type, propertyNs.prefix).name;
    }

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])(p, {
      ns: propertyNs,
      name: propertyName
    });

    propertiesByName[propertyName] = p;
  }, this));

  // update ns + name
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["a" /* assign */])(type, {
    ns: ns,
    name: name,
    propertiesByName: propertiesByName
  });

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(type.extends, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["i" /* bind */])(function(extendsName) {
    var extended = this.typeMap[extendsName];

    extended.traits = extended.traits || [];
    extended.traits.push(name);
  }, this));

  // link to package
  this.definePackage(type, pkg);

  // register
  this.typeMap[name] = type;
};


/**
 * Traverse the type hierarchy from bottom to top,
 * calling iterator with (type, inherited) for all elements in
 * the inheritance chain.
 *
 * @param {Object} nsName
 * @param {Function} iterator
 * @param {Boolean} [trait=false]
 */
Registry.prototype.mapTypes = function(nsName, iterator, trait) {

  var type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__types__["c" /* isBuiltIn */])(nsName.name) ? { name: nsName.name } : this.typeMap[nsName.name];

  var self = this;

  /**
   * Traverse the selected trait.
   *
   * @param {String} cls
   */
  function traverseTrait(cls) {
    return traverseSuper(cls, true);
  }

  /**
   * Traverse the selected super type or trait
   *
   * @param {String} cls
   * @param {Boolean} [trait=false]
   */
  function traverseSuper(cls, trait) {
    var parentNs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ns__["a" /* parseName */])(cls, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__types__["c" /* isBuiltIn */])(cls) ? '' : nsName.prefix);
    self.mapTypes(parentNs, iterator, trait);
  }

  if (!type) {
    throw new Error('unknown type <' + nsName.name + '>');
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(type.superClass, trait ? traverseTrait : traverseSuper);

  // call iterator with (type, inherited=!trait)
  iterator(type, !trait);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_min_dash__["f" /* forEach */])(type.traits, traverseTrait);
};


/**
 * Returns the effective descriptor for a type.
 *
 * @param  {String} type the namespaced name (ns:localName) of the type
 *
 * @return {Descriptor} the resulting effective descriptor
 */
Registry.prototype.getEffectiveDescriptor = function(name) {

  var nsName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ns__["a" /* parseName */])(name);

  var builder = new __WEBPACK_IMPORTED_MODULE_2__descriptor_builder__["a" /* default */](nsName);

  this.mapTypes(nsName, function(type, inherited) {
    builder.addTrait(type, inherited);
  });

  var descriptor = builder.build();

  // define package link
  this.definePackage(descriptor, descriptor.allTypes[descriptor.allTypes.length - 1].$pkg);

  return descriptor;
};


Registry.prototype.definePackage = function(target, pkg) {
  this.properties.define(target, '$pkg', { value: pkg });
};



///////// helpers ////////////////////////////

function ensureAvailable(packageMap, pkg, identifierKey) {

  var value = pkg[identifierKey];

  if (value in packageMap) {
    throw new Error('package with ' + identifierKey + ' <' + value + '> already defined');
  }
}


/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parser; });
/* unused harmony export decode */
var fromCharCode = String.fromCharCode;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var ENTITY_PATTERN = /&#(\d+);|&#x([0-9a-f]+);|&(\w+);/ig;

var ENTITY_MAPPING = {
  'amp': '&',
  'apos': '\'',
  'gt': '>',
  'lt': '<',
  'quot': '"'
};

// map UPPERCASE variants of supported special chars
Object.keys(ENTITY_MAPPING).forEach(function(k) {
  ENTITY_MAPPING[k.toUpperCase()] = ENTITY_MAPPING[k];
});


function replaceEntities(_, d, x, z) {

  // reserved names, i.e. &nbsp;
  if (z) {
    if (hasOwnProperty.call(ENTITY_MAPPING, z)) {
      return ENTITY_MAPPING[z];
    } else {
      // fall back to original value
      return '&' + z + ';';
    }
  }

  // decimal encoded char
  if (d) {
    return fromCharCode(d);
  }

  // hex encoded char
  return fromCharCode(parseInt(x, 16));
}


/**
 * A basic entity decoder that can decode a minimal
 * sub-set of reserved names (&amp;) as well as
 * hex (&#xaaf;) and decimal (&#1231;) encoded characters.
 *
 * @param {string} str
 *
 * @return {string} decoded string
 */
function decodeEntities(s) {
  if (s.length > 3 && s.indexOf('&') !== -1) {
    return s.replace(ENTITY_PATTERN, replaceEntities);
  }

  return s;
}

var XSI_URI = 'http://www.w3.org/2001/XMLSchema-instance';
var XSI_PREFIX = 'xsi';
var XSI_TYPE = 'xsi:type';

function error(msg) {
  return new Error(msg);
}

function missingNamespaceForPrefix(prefix) {
  return 'missing namespace for prefix <' + prefix + '>';
}

function getter(getFn) {
  return {
    'get': getFn,
    'enumerable': true
  };
}

function cloneNsMatrix(nsMatrix) {
  var clone = {}, key;
  for (key in nsMatrix) {
    clone[key] = nsMatrix[key];
  }
  return clone;
}

function uriPrefix(prefix) {
  return prefix + '$uri';
}

function buildNsMatrix(nsUriToPrefix) {
  var nsMatrix = {},
      uri,
      prefix;

  for (uri in nsUriToPrefix) {
    prefix = nsUriToPrefix[uri];
    nsMatrix[prefix] = prefix;
    nsMatrix[uriPrefix(prefix)] = uri;
  }

  return nsMatrix;
}

function noopGetContext() {
  return { 'line': 0, 'column': 0 };
}

function throwFunc(err) {
  throw err;
}

/**
 * Creates a new parser with the given options.
 *
 * @constructor
 *
 * @param  {!Object<string, ?>=} options
 */
function Parser(options) {

  if (!this) {
    return new Parser(options);
  }

  var proxy = options && options['proxy'];

  var onText,
      onOpenTag,
      onCloseTag,
      onCDATA,
      onError = throwFunc,
      onWarning,
      onComment,
      onQuestion,
      onAttention;

  var getContext = noopGetContext;

  /**
   * Do we need to parse the current elements attributes for namespaces?
   *
   * @type {boolean}
   */
  var maybeNS = false;

  /**
   * Do we process namespaces at all?
   *
   * @type {boolean}
   */
  var isNamespace = false;

  /**
   * The caught error returned on parse end
   *
   * @type {Error}
   */
  var returnError = null;

  /**
   * Should we stop parsing?
   *
   * @type {boolean}
   */
  var parseStop = false;

  /**
   * A map of { uri: prefix } used by the parser.
   *
   * This map will ensure we can normalize prefixes during processing;
   * for each uri, only one prefix will be exposed to the handlers.
   *
   * @type {!Object<string, string>}}
   */
  var nsUriToPrefix;

  /**
   * Handle parse error.
   *
   * @param  {string|Error} err
   */
  function handleError(err) {
    if (!(err instanceof Error)) {
      err = error(err);
    }

    returnError = err;

    onError(err, getContext);
  }

  /**
   * Handle parse error.
   *
   * @param  {string|Error} err
   */
  function handleWarning(err) {

    if (!onWarning) {
      return;
    }

    if (!(err instanceof Error)) {
      err = error(err);
    }

    onWarning(err, getContext);
  }

  /**
   * Register parse listener.
   *
   * @param  {string}   name
   * @param  {Function} cb
   *
   * @return {Parser}
   */
  this['on'] = function(name, cb) {

    if (typeof cb !== 'function') {
      throw error('required args <name, cb>');
    }

    switch (name) {
    case 'openTag': onOpenTag = cb; break;
    case 'text': onText = cb; break;
    case 'closeTag': onCloseTag = cb; break;
    case 'error': onError = cb; break;
    case 'warn': onWarning = cb; break;
    case 'cdata': onCDATA = cb; break;
    case 'attention': onAttention = cb; break; // <!XXXXX zzzz="eeee">
    case 'question': onQuestion = cb; break; // <? ....  ?>
    case 'comment': onComment = cb; break;
    default:
      throw error('unsupported event: ' + name);
    }

    return this;
  };

  /**
   * Set the namespace to prefix mapping.
   *
   * @example
   *
   * parser.ns({
   *   'http://foo': 'foo',
   *   'http://bar': 'bar'
   * });
   *
   * @param  {!Object<string, string>} nsMap
   *
   * @return {Parser}
   */
  this['ns'] = function(nsMap) {

    if (typeof nsMap === 'undefined') {
      nsMap = {};
    }

    if (typeof nsMap !== 'object') {
      throw error('required args <nsMap={}>');
    }

    var _nsUriToPrefix = {}, k;

    for (k in nsMap) {
      _nsUriToPrefix[k] = nsMap[k];
    }

    // FORCE default mapping for schema instance
    _nsUriToPrefix[XSI_URI] = XSI_PREFIX;

    isNamespace = true;
    nsUriToPrefix = _nsUriToPrefix;

    return this;
  };

  /**
   * Parse xml string.
   *
   * @param  {string} xml
   *
   * @return {Error} returnError, if not thrown
   */
  this['parse'] = function(xml) {
    if (typeof xml !== 'string') {
      throw error('required args <xml=string>');
    }

    returnError = null;

    parse(xml);

    getContext = noopGetContext;
    parseStop = false;

    return returnError;
  };

  /**
   * Stop parsing.
   */
  this['stop'] = function() {
    parseStop = true;
  };

  /**
   * Parse string, invoking configured listeners on element.
   *
   * @param  {string} xml
   */
  function parse(xml) {
    var nsMatrixStack = isNamespace ? [] : null,
        nsMatrix = isNamespace ? buildNsMatrix(nsUriToPrefix) : null,
        _nsMatrix,
        nodeStack = [],
        anonymousNsCount = 0,
        tagStart = false,
        tagEnd = false,
        i = 0, j = 0,
        x, y, q, w,
        xmlns,
        elementName,
        _elementName,
        elementProxy
        ;

    var attrsString = '',
        attrsStart = 0,
        cachedAttrs // false = parsed with errors, null = needs parsing
        ;

    /**
     * Parse attributes on demand and returns the parsed attributes.
     *
     * Return semantics: (1) `false` on attribute parse error,
     * (2) object hash on extracted attrs.
     *
     * @return {boolean|Object}
     */
    function getAttrs() {
      if (cachedAttrs !== null) {
        return cachedAttrs;
      }

      var nsUri,
          nsUriPrefix,
          nsName,
          defaultAlias = isNamespace && nsMatrix['xmlns'],
          attrList = isNamespace && maybeNS ? [] : null,
          i = attrsStart,
          s = attrsString,
          l = s.length,
          hasNewMatrix,
          newalias,
          value,
          alias,
          name,
          attrs = {},
          seenAttrs = {},
          skipAttr,
          w,
          j;

      parseAttr:
      for (; i < l; i++) {
        skipAttr = false;
        w = s.charCodeAt(i);

        if (w === 32 || (w < 14 && w > 8)) { // WHITESPACE={ \f\n\r\t\v}
          continue;
        }

        // wait for non whitespace character
        if (w < 65 || w > 122 || (w > 90 && w < 97)) {
          if (w !== 95 && w !== 58) { // char 95"_" 58":"
            handleWarning('illegal first char attribute name');
            skipAttr = true;
          }
        }

        // parse attribute name
        for (j = i + 1; j < l; j++) {
          w = s.charCodeAt(j);

          if (
            w > 96 && w < 123 ||
            w > 64 && w < 91 ||
            w > 47 && w < 59 ||
            w === 46 || // '.'
            w === 45 || // '-'
            w === 95 // '_'
          ) {
            continue;
          }

          // unexpected whitespace
          if (w === 32 || (w < 14 && w > 8)) { // WHITESPACE
            handleWarning('missing attribute value');
            i = j;

            continue parseAttr;
          }

          // expected "="
          if (w === 61) { // "=" == 61
            break;
          }

          handleWarning('illegal attribute name char');
          skipAttr = true;
        }

        name = s.substring(i, j);

        if (name === 'xmlns:xmlns') {
          handleWarning('illegal declaration of xmlns');
          skipAttr = true;
        }

        w = s.charCodeAt(j + 1);

        if (w === 34) { // '"'
          j = s.indexOf('"', i = j + 2);

          if (j === -1) {
            j = s.indexOf('\'', i);

            if (j !== -1) {
              handleWarning('attribute value quote missmatch');
              skipAttr = true;
            }
          }

        } else if (w === 39) { // "'"
          j = s.indexOf('\'', i = j + 2);

          if (j === -1) {
            j = s.indexOf('"', i);

            if (j !== -1) {
              handleWarning('attribute value quote missmatch');
              skipAttr = true;
            }
          }

        } else {
          handleWarning('missing attribute value quotes');
          skipAttr = true;

          // skip to next space
          for (j = j + 1; j < l; j++) {
            w = s.charCodeAt(j + 1);

            if (w === 32 || (w < 14 && w > 8)) { // WHITESPACE
              break;
            }
          }

        }

        if (j === -1) {
          handleWarning('missing closing quotes');

          j = l;
          skipAttr = true;
        }

        if (!skipAttr) {
          value = s.substring(i, j);
        }

        i = j;

        // ensure SPACE follows attribute
        // skip illegal content otherwise
        // example a="b"c
        for (; j + 1 < l; j++) {
          w = s.charCodeAt(j + 1);

          if (w === 32 || (w < 14 && w > 8)) { // WHITESPACE
            break;
          }

          // FIRST ILLEGAL CHAR
          if (i === j) {
            handleWarning('illegal character after attribute end');
            skipAttr = true;
          }
        }

        // advance cursor to next attribute
        i = j + 1;

        if (skipAttr) {
          continue parseAttr;
        }

        // check attribute re-declaration
        if (name in seenAttrs) {
          handleWarning('attribute <' + name + '> already defined');
          continue;
        }

        seenAttrs[name] = true;

        if (!isNamespace) {
          attrs[name] = value;
          continue;
        }

        // try to extract namespace information
        if (maybeNS) {
          newalias = (
            name === 'xmlns'
              ? 'xmlns'
              : (name.charCodeAt(0) === 120 && name.substr(0, 6) === 'xmlns:')
                ? name.substr(6)
                : null
          );

          // handle xmlns(:alias) assignment
          if (newalias !== null) {
            nsUri = decodeEntities(value);
            nsUriPrefix = uriPrefix(newalias);

            alias = nsUriToPrefix[nsUri];

            if (!alias) {
              // no prefix defined or prefix collision
              if (
                (newalias === 'xmlns') ||
                (nsUriPrefix in nsMatrix && nsMatrix[nsUriPrefix] !== nsUri)
              ) {
                // alocate free ns prefix
                do {
                  alias = 'ns' + (anonymousNsCount++);
                } while (typeof nsMatrix[alias] !== 'undefined');
              } else {
                alias = newalias;
              }

              nsUriToPrefix[nsUri] = alias;
            }

            if (nsMatrix[newalias] !== alias) {
              if (!hasNewMatrix) {
                nsMatrix = cloneNsMatrix(nsMatrix);
                hasNewMatrix = true;
              }

              nsMatrix[newalias] = alias;
              if (newalias === 'xmlns') {
                nsMatrix[uriPrefix(alias)] = nsUri;
                defaultAlias = alias;
              }

              nsMatrix[nsUriPrefix] = nsUri;
            }

            // expose xmlns(:asd)="..." in attributes
            attrs[name] = value;
            continue;
          }

          // collect attributes until all namespace
          // declarations are processed
          attrList.push(name, value);
          continue;

        } /** end if (maybeNs) */

        // handle attributes on element without
        // namespace declarations
        w = name.indexOf(':');
        if (w === -1) {
          attrs[name] = value;
          continue;
        }

        // normalize ns attribute name
        if (!(nsName = nsMatrix[name.substring(0, w)])) {
          handleWarning(missingNamespaceForPrefix(name.substring(0, w)));
          continue;
        }

        name = defaultAlias === nsName
          ? name.substr(w + 1)
          : nsName + name.substr(w);
        // end: normalize ns attribute name

        // normalize xsi:type ns attribute value
        if (name === XSI_TYPE) {
          w = value.indexOf(':');

          if (w !== -1) {
            nsName = value.substring(0, w);
            // handle default prefixes, i.e. xs:String gracefully
            nsName = nsMatrix[nsName] || nsName;
            value = nsName + value.substring(w);
          } else {
            value = defaultAlias + ':' + value;
          }
        }
        // end: normalize xsi:type ns attribute value

        attrs[name] = value;
      }


      // handle deferred, possibly namespaced attributes
      if (maybeNS) {

        // normalize captured attributes
        for (i = 0, l = attrList.length; i < l; i++) {

          name = attrList[i++];
          value = attrList[i];

          w = name.indexOf(':');

          if (w !== -1) {
            // normalize ns attribute name
            if (!(nsName = nsMatrix[name.substring(0, w)])) {
              handleWarning(missingNamespaceForPrefix(name.substring(0, w)));
              continue;
            }

            name = defaultAlias === nsName
              ? name.substr(w + 1)
              : nsName + name.substr(w);
            // end: normalize ns attribute name

            // normalize xsi:type ns attribute value
            if (name === XSI_TYPE) {
              w = value.indexOf(':');

              if (w !== -1) {
                nsName = value.substring(0, w);
                // handle default prefixes, i.e. xs:String gracefully
                nsName = nsMatrix[nsName] || nsName;
                value = nsName + value.substring(w);
              } else {
                value = defaultAlias + ':' + value;
              }
            }
            // end: normalize xsi:type ns attribute value
          }

          attrs[name] = value;
        }
        // end: normalize captured attributes
      }

      return cachedAttrs = attrs;
    }

    /**
     * Extract the parse context { line, column, part }
     * from the current parser position.
     *
     * @return {Object} parse context
     */
    function getParseContext() {
      var splitsRe = /(\r\n|\r|\n)/g;

      var line = 0;
      var column = 0;
      var startOfLine = 0;
      var endOfLine = j;
      var match;
      var data;

      while (i >= startOfLine) {

        match = splitsRe.exec(xml);

        if (!match) {
          break;
        }

        // end of line = (break idx + break chars)
        endOfLine = match[0].length + match.index;

        if (endOfLine > i) {
          break;
        }

        // advance to next line
        line += 1;

        startOfLine = endOfLine;
      }

      // EOF errors
      if (i == -1) {
        column = endOfLine;
        data = '';
      } else {
        column = i - startOfLine;
        data = (j == -1 ? xml.substring(i) : xml.substring(i, j + 1));
      }

      return {
        'data': data,
        'line': line,
        'column': column
      };
    }

    getContext = getParseContext;


    if (proxy) {
      elementProxy = Object.create({}, {
        'name': getter(function() {
          return elementName;
        }),
        'originalName': getter(function() {
          return _elementName;
        }),
        'attrs': getter(getAttrs),
        'ns': getter(function() {
          return nsMatrix;
        })
      });
    }

    // actual parse logic
    while (j !== -1) {

      if (xml.charCodeAt(j) === 60) { // "<"
        i = j;
      } else {
        i = xml.indexOf('<', j);
      }

      // parse end
      if (i === -1) {
        if (nodeStack.length) {
          return handleError('unexpected end of file');
        }

        if (j === 0) {
          return handleError('missing start tag');
        }

        return;
      }

      if (j !== i) {
        if (onText) {
          onText(xml.substring(j, i), decodeEntities, getContext);
          if (parseStop) {
            return;
          }
        }
      }

      w = xml.charCodeAt(i+1);

      // parse comments + CDATA
      if (w === 33) { // "!"
        w = xml.charCodeAt(i+2);
        if (w === 91 && xml.substr(i + 3, 6) === 'CDATA[') { // 91 == "["
          j = xml.indexOf(']]>', i);
          if (j === -1) {
            return handleError('unclosed cdata');
          }

          if (onCDATA) {
            onCDATA(xml.substring(i + 9, j), getContext);
            if (parseStop) {
              return;
            }
          }

          j += 3;
          continue;
        }


        if (w === 45 && xml.charCodeAt(i + 3) === 45) { // 45 == "-"
          j = xml.indexOf('-->', i);
          if (j === -1) {
            return handleError('unclosed comment');
          }


          if (onComment) {
            onComment(xml.substring(i + 4, j), decodeEntities, getContext);
            if (parseStop) {
              return;
            }
          }

          j += 3;
          continue;
        }

        j = xml.indexOf('>', i + 1);
        if (j === -1) {
          return handleError('unclosed tag');
        }

        if (onAttention) {
          onAttention(xml.substring(i, j + 1), decodeEntities, getContext);
          if (parseStop) {
            return;
          }
        }

        j += 1;
        continue;
      }

      if (w === 63) { // "?"
        j = xml.indexOf('?>', i);
        if (j === -1) {
          return handleError('unclosed question');
        }

        if (onQuestion) {
          onQuestion(xml.substring(i, j + 2), getContext);
          if (parseStop) {
            return;
          }
        }

        j += 2;
        continue;
      }

      j = xml.indexOf('>', i + 1);

      if (j == -1) {
        return handleError('unclosed tag');
      }

      // don't process attributes;
      // there are none
      cachedAttrs = {};

      // if (xml.charCodeAt(i+1) === 47) { // </...
      if (w === 47) { // </...
        tagStart = false;
        tagEnd = true;

        if (!nodeStack.length) {
          return handleError('missing open tag');
        }

        // verify open <-> close tag match
        x = elementName = nodeStack.pop();
        q = i + 2 + x.length;

        if (xml.substring(i + 2, q) !== x) {
          return handleError('closing tag mismatch');
        }

        // verify chars in close tag
        for (; q < j; q++) {
          w = xml.charCodeAt(q);

          if (w === 32 || (w > 8 && w < 14)) { // \f\n\r\t\v space
            continue;
          }

          return handleError('close tag');
        }

      } else {
        if (xml.charCodeAt(j - 1) === 47) { // .../>
          x = elementName = xml.substring(i + 1, j - 1);

          tagStart = true;
          tagEnd = true;

        } else {
          x = elementName = xml.substring(i + 1, j);

          tagStart = true;
          tagEnd = false;
        }

        if (!(w > 96 && w < 123 || w > 64 && w < 91 || w === 95 || w === 58)) { // char 95"_" 58":"
          return handleError('illegal first char nodeName');
        }

        for (q = 1, y = x.length; q < y; q++) {
          w = x.charCodeAt(q);

          if (w > 96 && w < 123 || w > 64 && w < 91 || w > 47 && w < 59 || w === 45 || w === 95) {
            continue;
          }

          if (w === 32 || (w < 14 && w > 8)) { // \f\n\r\t\v space
            elementName = x.substring(0, q);
            // maybe there are attributes
            cachedAttrs = null;
            break;
          }

          return handleError('invalid nodeName');
        }

        if (!tagEnd) {
          nodeStack.push(elementName);
        }
      }

      if (isNamespace) {

        _nsMatrix = nsMatrix;

        if (tagStart) {
          // remember old namespace
          // unless we're self-closing
          if (!tagEnd) {
            nsMatrixStack.push(_nsMatrix);
          }

          if (cachedAttrs === null) {
            // quick check, whether there may be namespace
            // declarations on the node; if that is the case
            // we need to eagerly parse the node attributes
            if ((maybeNS = x.indexOf('xmlns', q) !== -1)) {
              attrsStart = q;
              attrsString = x;

              getAttrs();

              maybeNS = false;
            }
          }
        }

        _elementName = elementName;

        w = elementName.indexOf(':');
        if (w !== -1) {
          xmlns = nsMatrix[elementName.substring(0, w)];

          // prefix given; namespace must exist
          if (!xmlns) {
            return handleError('missing namespace on <' + _elementName + '>');
          }

          elementName = elementName.substr(w + 1);
        } else {
          xmlns = nsMatrix['xmlns'];

          // if no default namespace is defined,
          // we'll import the element as anonymous.
          //
          // it is up to users to correct that to the document defined
          // targetNamespace, or whatever their undersanding of the
          // XML spec mandates.
        }

        // adjust namespace prefixs as configured
        if (xmlns) {
          elementName = xmlns + ':' + elementName;
        }

      }

      if (tagStart) {
        attrsStart = q;
        attrsString = x;

        if (onOpenTag) {
          if (proxy) {
            onOpenTag(elementProxy, decodeEntities, tagEnd, getContext);
          } else {
            onOpenTag(elementName, getAttrs, decodeEntities, tagEnd, getContext);
          }

          if (parseStop) {
            return;
          }
        }

      }

      if (tagEnd) {

        if (onCloseTag) {
          onCloseTag(proxy ? elementProxy : elementName, decodeEntities, tagStart, getContext);

          if (parseStop) {
            return;
          }
        }

        // restore old namespace
        if (isNamespace) {
          if (!tagStart) {
            nsMatrix = nsMatrixStack.pop();
          } else {
            nsMatrix = _nsMatrix;
          }
        }
      }

      j += 1;
    }
  } /** end parse */

}




/***/ }),

/***/ 502:
/***/ (function(module, exports) {

function Agent() {
  this._defaults = [];
}

["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects",
 "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(fn) {
  /** Default setting for all requests from this agent */
  Agent.prototype[fn] = function(/*varargs*/) {
    this._defaults.push({fn:fn, arguments:arguments});
    return this;
  }
});

Agent.prototype._setDefaults = function(req) {
    this._defaults.forEach(function(def) {
      req[def.fn].apply(req, def.arguments);
    });
};

module.exports = Agent;


/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = this;
}

var Emitter = __webpack_require__(440);
var RequestBase = __webpack_require__(504);
var isObject = __webpack_require__(249);
var ResponseBase = __webpack_require__(505);
var Agent = __webpack_require__(502);

/**
 * Noop.
 */

function noop(){};

/**
 * Expose `request`.
 */

var request = exports = module.exports = function(method, url) {
  // callback
  if ('function' == typeof url) {
    return new exports.Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
}

exports.Request = Request;

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  throw Error("Browser-only version of superagent could not find XHR");
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function(v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject(val)) {
      for(var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}

/**
 * Expose serialization method.
 */

request.serializeObject = serialize;

/**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');
    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] =
        decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': JSON.stringify,
};

/**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse,
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    if (index === -1) { // could be empty line, just skip it
      continue;
    }
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return /[\/+]json($|[^-\w])/.test(mime);
}

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status;
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }
  this._setStatusProperties(status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this._setHeaderProperties(this.header);

  if (null === this.text && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method != 'HEAD'
      ? this._parseBody(this.text ? this.text : this.xhr.response)
      : null;
  }
}

ResponseBase(Response.prototype);

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function(str) {
  var parse = request.parse[this.type];
  if (this.req._parser) {
    return this.req._parser(this, str);
  }
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
        // issue #876: return the http status code if the response parsing fails
        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);

    var new_err;
    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
      }
    } catch(custom_err) {
      new_err = custom_err; // ok() callback can throw
    }

    // #1000 don't catch errors from the callback to avoid double calling it
    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}

/**
 * Mixin `Emitter` and `RequestBase`.
 */

Emitter(Request.prototype);
RequestBase(Request.prototype);

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass, options){
  if (1 === arguments.length) pass = '';
  if (typeof pass === 'object' && pass !== null) { // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }
  if (!options) {
    options = {
      type: 'function' === typeof btoa ? 'basic' : 'auto',
    };
  }

  var encoder = function(string) {
    if ('function' === typeof btoa) {
      return btoa(string);
    }
    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};

/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, options){
  if (file) {
    if (this._data) {
      throw Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }
  return this;
};

Request.prototype._getFormData = function(){
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

// This only warns, because the request is still likely to work
Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function(){
  console.warn("This is not supported in browser version of superagent");
  return this;
};

// This throws, because it can't send/receive data as expected
Request.prototype.pipe = Request.prototype.write = function(){
  throw Error("Streaming is not supported in browser version of superagent");
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
Request.prototype._isHost = function _isHost(obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
}

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  if (this._endCalled) {
    console.warn("Warning: .end() was called twice. This is not supported in superagent");
  }
  this._endCalled = true;

  // store callback
  this._callback = fn || noop;

  // querystring
  this._finalizeQueryString();

  return this._end();
};

Request.prototype._end = function() {
  var self = this;
  var xhr = (this.xhr = request.getXHR());
  var data = this._formData || this._data;

  this._setTimeouts();

  // state change
  xhr.onreadystatechange = function(){
    var readyState = xhr.readyState;
    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }
    if (4 != readyState) {
      return;
    }

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = direction;
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');
      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch(e) {
      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  // initiate request
  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) {
      serialize = request.serialize['application/json'];
    }
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;

    if (this.header.hasOwnProperty(field))
      xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

request.agent = function() {
  return new Agent();
};

["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(method) {
  Agent.prototype[method.toLowerCase()] = function(url, fn) {
    var req = new request.Request(method, url);
    this._setDefaults(req);
    if (fn) {
      req.end(fn);
    }
    return req;
  };
});

Agent.prototype.del = Agent.prototype['delete'];

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn) {
  var req = request('GET', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn) {
  var req = request('HEAD', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options = function(url, data, fn) {
  var req = request('OPTIONS', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url, data, fn) {
  var req = request('DELETE', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn) {
  var req = request('PATCH', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn) {
  var req = request('POST', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn) {
  var req = request('PUT', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};


/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = __webpack_require__(249);

/**
 * Expose `RequestBase`.
 */

module.exports = RequestBase;

/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in RequestBase.prototype) {
    obj[key] = RequestBase.prototype[key];
  }
  return obj;
}

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout = function _clearTimeout(){
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.parse = function parse(fn){
  this._parser = fn;
  return this;
};

/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.responseType = function(val){
  this._responseType = val;
  return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.serialize = function serialize(fn){
  this._serializer = fn;
  return this;
};

/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout = function timeout(options){
  if (!options || 'object' !== typeof options) {
    this._timeout = options;
    this._responseTimeout = 0;
    return this;
  }

  for(var option in options) {
    switch(option) {
      case 'deadline':
        this._timeout = options.deadline;
        break;
      case 'response':
        this._responseTimeout = options.response;
        break;
      default:
        console.warn("Unknown timeout option", option);
    }
  }
  return this;
};

/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.retry = function retry(count, fn){
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
};

var ERROR_CODES = [
  'ECONNRESET',
  'ETIMEDOUT',
  'EADDRINFO',
  'ESOCKETTIMEDOUT'
];

/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */
RequestBase.prototype._shouldRetry = function(err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }
  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);
      if (override === true) return true;
      if (override === false) return false;
      // undefined falls back to defaults
    } catch(e) {
      console.error(e);
    }
  }
  if (res && res.status && res.status >= 500 && res.status != 501) return true;
  if (err) {
    if (err.code && ~ERROR_CODES.indexOf(err.code)) return true;
    // Superagent timeout
    if (err.timeout && err.code == 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }
  return false;
};

/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

RequestBase.prototype._retry = function() {

  this.clearTimeout();

  // node
  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;

  return this._end();
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

RequestBase.prototype.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    if (this._endCalled) {
      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
    }
    this._fullfilledPromise = new Promise(function(innerResolve, innerReject) {
      self.end(function(err, res) {
        if (err) innerReject(err);
        else innerResolve(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype.catch = function(cb) {
  return this.then(undefined, cb);
};

/**
 * Allow for extension
 */

RequestBase.prototype.use = function use(fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function(cb) {
  if ('function' !== typeof cb) throw Error("Callback required");
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function(res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};

/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

RequestBase.prototype.get = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

RequestBase.prototype.getHeader = RequestBase.prototype.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
RequestBase.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
RequestBase.prototype.field = function(name, val) {
  // name should be either a string or an object.
  if (null === name || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }
    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this.field(name, val[i]);
    }
    return this;
  }

  // val should be defined now
  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }
  if ('boolean' === typeof val) {
    val = '' + val;
  }
  this._getFormData().append(name, val);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
RequestBase.prototype.abort = function(){
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser
  this.req && this.req.abort(); // node
  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function(user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer': // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', 'Bearer ' + user);
      break;
  }
  return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

RequestBase.prototype.withCredentials = function(on) {
  // This is browser-only functionality. Node side is no-op.
  if (on == undefined) on = true;
  this._withCredentials = on;
  return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.redirects = function(n){
  this._maxRedirects = n;
  return this;
};

/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n
 * @return {Request} for chaining
 */
RequestBase.prototype.maxResponseSize = function(n){
  if ('number' !== typeof n) {
    throw TypeError("Invalid argument");
  }
  this._maxResponseSize = n;
  return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

RequestBase.prototype.toJSON = function() {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header,
  };
};

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.send = function(data){
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw Error("Can't merge these send calls");
  }

  // merge
  if (isObj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  }

  // default to json
  if (!type) this.type('json');
  return this;
};

/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.sortQuery = function(sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */
RequestBase.prototype._finalizeQueryString = function(){
  var query = this._query.join('&');
  if (query) {
    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
  }
  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');
    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split('&');
      if ('function' === typeof this._sort) {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }
      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
    }
  }
};

// For backwards compat only
RequestBase.prototype._appendQueryString = function() {console.trace("Unsupported");}

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

RequestBase.prototype._timeoutError = function(reason, timeout, errno){
  if (this._aborted) {
    return;
  }
  var err = new Error(reason + timeout + 'ms exceeded');
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function() {
  var self = this;

  // deadline
  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  }
  // response timeout
  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function(){
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};


/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var utils = __webpack_require__(506);

/**
 * Expose `ResponseBase`.
 */

module.exports = ResponseBase;

/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    obj[key] = ResponseBase.prototype[key];
  }
  return obj;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

ResponseBase.prototype.get = function(field) {
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

ResponseBase.prototype._setHeaderProperties = function(header){
    // TODO: moar!
    // TODO: make this a util

    // content-type
    var ct = header['content-type'] || '';
    this.type = utils.type(ct);

    // params
    var params = utils.params(ct);
    for (var key in params) this[key] = params[key];

    this.links = {};

    // links
    try {
        if (header.link) {
            this.links = utils.parseLinks(header.link);
        }
    } catch (err) {
        // ignore
    }
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

ResponseBase.prototype._setStatusProperties = function(status){
    var type = status / 100 | 0;

    // status / class
    this.status = this.statusCode = status;
    this.statusType = type;

    // basics
    this.info = 1 == type;
    this.ok = 2 == type;
    this.redirect = 3 == type;
    this.clientError = 4 == type;
    this.serverError = 5 == type;
    this.error = (4 == type || 5 == type)
        ? this.toError()
        : false;

    // sugar
    this.accepted = 202 == status;
    this.noContent = 204 == status;
    this.badRequest = 400 == status;
    this.unauthorized = 401 == status;
    this.notAcceptable = 406 == status;
    this.forbidden = 403 == status;
    this.notFound = 404 == status;
};


/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type = function(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.params = function(str){
  return str.split(/ *; */).reduce(function(obj, str){
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.parseLinks = function(str){
  return str.split(/ *, */).reduce(function(obj, str){
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};

/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

exports.cleanHeader = function(header, changesOrigin){
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header['host'];
  // secuirty
  if (changesOrigin) {
    delete header['authorization'];
    delete header['cookie'];
  }
  return header;
};


/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Tiny stack for browser or server
 *
 * @copyright 2015 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 1.0.0
 */

( function ( global ) {

"use strict";

/**
 * TinyStack
 *
 * @constructor
 */
function TinyStack () {
	this.data = [null];
	this.top  = 0;
}

/**
 * Clears the stack
 *
 * @method clear
 * @memberOf TinyStack
 * @return {Object} {@link TinyStack}
 */
TinyStack.prototype.clear = function clear () {
	this.data = [null];
	this.top  = 0;

	return this;
};

/**
 * Gets the size of the stack
 *
 * @method length
 * @memberOf TinyStack
 * @return {Number} Size of stack
 */
TinyStack.prototype.length = function length () {
	return this.top;
};

/**
 * Tests if this stack is empty
 *
 * @method empty
 * @memberOf TinyStack
 * @return {Boolean} Stack is empty
 */
TinyStack.prototype.empty = function empty () {
	return this.top === 0;
};

/**
 * Gets the item at the top of the stack
 *
 * @method peek
 * @memberOf TinyStack
 * @return {Mixed} Item at the top of the stack
 */
TinyStack.prototype.peek = function peek () {
	return this.data[this.top];
};

/**
 * Gets & removes the item at the top of the stack
 *
 * @method pop
 * @memberOf TinyStack
 * @return {Mixed} Item at the top of the stack
 */
TinyStack.prototype.pop = function pop () {
	if ( this.top > 0 ) {
		this.top--;

		return this.data.pop();
	}
	else {
		return undefined;
	}
};

/**
 * Pushes an item onto the stack
 *
 * @method push
 * @memberOf TinyStack
 * @return {Object} {@link TinyStack}
 */
TinyStack.prototype.push = function push ( arg ) {
	this.data[++this.top] = arg;

	return this;
};

/**
 * Returns the 1-based position where an object is on this stack
 *
 * If the object o occurs as an item in this stack, this method returns the
 * distance from the top of the stack of the occurrence nearest the top of
 * the stack; the topmost item on the stack is considered to be at distance 1.
 * The equals method is used to compare o to the items in this stack.
 *
 * @method push
 * @memberOf TinyStack
 * @return {Number} 1-based position
 */
TinyStack.prototype.search = function search ( arg ) {
	var index = this.data.indexOf(arg);

	return index === -1 ? -1 : this.data.length - index;
};

/**
 * TinyStack factory
 *
 * @method factory
 * @return {Object} {@link TinyStack}
 */
function factory () {
	return new TinyStack();
}

// Node, AMD & window supported
if ( true ) {
	module.exports = factory;
}
else if ( typeof define == "function" ) {
	define( function () {
		return factory;
	} );
}
else {
	global.stack = factory;
}
} )( this );


/***/ }),

/***/ 509:
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ 510:
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = __webpack_require__.i({"NODE_ENV":"development"}).NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(510);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(509);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17), __webpack_require__(194)))

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(544)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(279),
  /* template */
  __webpack_require__(535),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/opt/processmaker/resources/assets/designer/js/components/ActionsToolbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ActionsToolbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-98746e22", Component.options)
  } else {
    hotAPI.reload("data-v-98746e22", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(538)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(280),
  /* template */
  __webpack_require__(526),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/opt/processmaker/resources/assets/designer/js/components/Designer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Designer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13e1f45c", Component.options)
  } else {
    hotAPI.reload("data-v-13e1f45c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(281),
  /* template */
  __webpack_require__(536),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/opt/processmaker/resources/assets/designer/js/components/Toolbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Toolbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bb6a7dcc", Component.options)
  } else {
    hotAPI.reload("data-v-bb6a7dcc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(540)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(282),
  /* template */
  __webpack_require__(528),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/opt/processmaker/resources/assets/designer/js/components/UploaderFile.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UploaderFile.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21f67b0a", Component.options)
  } else {
    hotAPI.reload("data-v-21f67b0a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "svg_container"
  }, [_c('svg', {
    staticClass: "svg_canvas",
    attrs: {
      "id": "svg"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-13e1f45c", module.exports)
  }
}

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "dropzone-area",
    attrs: {
      "drag-over": "handleDragOver"
    }
  }, [_c('div', {
    staticClass: "dropzone-text"
  }, [_c('span', {
    staticClass: "dropzone-title"
  }, [_vm._v("Drop image here or click to select")]), _vm._v(" "), (_vm.help) ? _c('span', {
    staticClass: "dropzone-info"
  }, [_vm._v(_vm._s(_vm.help))]) : _vm._e()]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file"
    },
    on: {
      "change": _vm.onFileChange
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-21f67b0a", module.exports)
  }
}

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "btn-group-vertical actions-toolbar"
  }, [_c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button",
      "id": "zoomIn"
    },
    on: {
      "click": function($event) {
        _vm.zoomIn()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-plus",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button",
      "id": "zoomReset"
    },
    on: {
      "click": function($event) {
        _vm.zoomReset()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-circle-o",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button",
      "id": "zoomOut"
    },
    on: {
      "click": function($event) {
        _vm.zoomOut()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-minus",
    attrs: {
      "aria-hidden": "true"
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-98746e22", module.exports)
  }
}

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "menu_section"
  }, [_c('ul', {
    staticClass: "nav side-menu"
  }, [_c('li', [_c('img', {
    attrs: {
      "id": "bpmn:StartEvent",
      "src": "images/start-event-none.svg",
      "height": "35",
      "draggable": "true"
    },
    on: {
      "dragend": function($event) {
        _vm.createElement($event)
      }
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "id": "bpmn:IntermediateThrowEvent",
      "src": "images/intermediate-event-throw-message.svg",
      "height": "35",
      "draggable": "true"
    },
    on: {
      "dragend": function($event) {
        _vm.createElement($event)
      }
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "id": "bpmn:EndEvent",
      "src": "images/end-event-none.svg",
      "height": "35",
      "draggable": "true"
    },
    on: {
      "dragend": function($event) {
        _vm.createElement($event)
      }
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "id": "bpmn:ExclusiveGateway",
      "src": "images/gateway-xor.svg",
      "height": "35",
      "draggable": "true"
    },
    on: {
      "dragend": function($event) {
        _vm.createElement($event)
      }
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "id": "bpmn:Task",
      "src": "images/task.svg",
      "height": "40",
      "draggable": "true"
    },
    on: {
      "dragend": function($event) {
        _vm.createElement($event)
      }
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "id": "bpmn:SubProcess",
      "src": "images/subprocess-collapsed.svg",
      "height": "40",
      "draggable": "true"
    },
    on: {
      "dragend": function($event) {
        _vm.createElement($event)
      }
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "id": "bpmn:DataObjectReference",
      "src": "images/data-object.svg",
      "height": "40",
      "draggable": "true"
    },
    on: {
      "dragend": function($event) {
        _vm.createElement($event)
      }
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "id": "bpmn:DataStoreReference",
      "src": "images/data-store.svg",
      "height": "40",
      "draggable": "true"
    },
    on: {
      "dragend": function($event) {
        _vm.createElement($event)
      }
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bb6a7dcc", module.exports)
  }
}

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return Resource; });
/*!
 * vue-resource v1.5.0
 * https://github.com/pagekit/vue-resource
 * Released under the MIT License.
 */

/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING = 2;

function Promise$1(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

Promise$1.reject = function (r) {
    return new Promise$1(function (resolve, reject) {
        reject(r);
    });
};

Promise$1.resolve = function (x) {
    return new Promise$1(function (resolve, reject) {
        resolve(x);
    });
};

Promise$1.all = function all(iterable) {
    return new Promise$1(function (resolve, reject) {
        var count = 0, result = [];

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

Promise$1.race = function race(iterable) {
    return new Promise$1(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p = Promise$1.prototype;

p.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x['then'];

            if (x !== null && typeof x === 'object' && typeof then === 'function') {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;

                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p.notify = function notify() {
    var promise = this;

    nextTick(function () {
        if (promise.state !== PENDING) {
            while (promise.deferred.length) {
                var deferred = promise.deferred.shift(),
                    onResolved = deferred[0],
                    onRejected = deferred[1],
                    resolve = deferred[2],
                    reject = deferred[3];

                try {
                    if (promise.state === RESOLVED) {
                        if (typeof onResolved === 'function') {
                            resolve(onResolved.call(undefined, promise.value));
                        } else {
                            resolve(promise.value);
                        }
                    } else if (promise.state === REJECTED) {
                        if (typeof onRejected === 'function') {
                            resolve(onRejected.call(undefined, promise.value));
                        } else {
                            reject(promise.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p.then = function then(onResolved, onRejected) {
    var promise = this;

    return new Promise$1(function (resolve, reject) {
        promise.deferred.push([onResolved, onRejected, resolve, reject]);
        promise.notify();
    });
};

p.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

/**
 * Promise adapter.
 */

if (typeof Promise === 'undefined') {
    window.Promise = Promise$1;
}

function PromiseObj(executor, context) {

    if (executor instanceof Promise) {
        this.promise = executor;
    } else {
        this.promise = new Promise(executor.bind(context));
    }

    this.context = context;
}

PromiseObj.all = function (iterable, context) {
    return new PromiseObj(Promise.all(iterable), context);
};

PromiseObj.resolve = function (value, context) {
    return new PromiseObj(Promise.resolve(value), context);
};

PromiseObj.reject = function (reason, context) {
    return new PromiseObj(Promise.reject(reason), context);
};

PromiseObj.race = function (iterable, context) {
    return new PromiseObj(Promise.race(iterable), context);
};

var p$1 = PromiseObj.prototype;

p$1.bind = function (context) {
    this.context = context;
    return this;
};

p$1.then = function (fulfilled, rejected) {

    if (fulfilled && fulfilled.bind && this.context) {
        fulfilled = fulfilled.bind(this.context);
    }

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
};

p$1.catch = function (rejected) {

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.catch(rejected), this.context);
};

p$1.finally = function (callback) {

    return this.then(function (value) {
        callback.call(this);
        return value;
    }, function (reason) {
        callback.call(this);
        return Promise.reject(reason);
    }
    );
};

/**
 * Utility functions.
 */

var ref = {};
var hasOwnProperty = ref.hasOwnProperty;
var ref$1 = [];
var slice = ref$1.slice;
var debug = false, ntick;

var inBrowser = typeof window !== 'undefined';

function Util (ref) {
    var config = ref.config;
    var nextTick = ref.nextTick;

    ntick = nextTick;
    debug = config.debug || !config.silent;
}

function warn(msg) {
    if (typeof console !== 'undefined' && debug) {
        console.warn('[VueResource warn]: ' + msg);
    }
}

function error(msg) {
    if (typeof console !== 'undefined') {
        console.error(msg);
    }
}

function nextTick(cb, ctx) {
    return ntick(cb, ctx);
}

function trim(str) {
    return str ? str.replace(/^\s*|\s*$/g, '') : '';
}

function trimEnd(str, chars) {

    if (str && chars === undefined) {
        return str.replace(/\s+$/, '');
    }

    if (!str || !chars) {
        return str;
    }

    return str.replace(new RegExp(("[" + chars + "]+$")), '');
}

function toLower(str) {
    return str ? str.toLowerCase() : '';
}

function toUpper(str) {
    return str ? str.toUpperCase() : '';
}

var isArray = Array.isArray;

function isString(val) {
    return typeof val === 'string';
}

function isFunction(val) {
    return typeof val === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
}

function isBlob(obj) {
    return typeof Blob !== 'undefined' && obj instanceof Blob;
}

function isFormData(obj) {
    return typeof FormData !== 'undefined' && obj instanceof FormData;
}

function when(value, fulfilled, rejected) {

    var promise = PromiseObj.resolve(value);

    if (arguments.length < 2) {
        return promise;
    }

    return promise.then(fulfilled, rejected);
}

function options(fn, obj, opts) {

    opts = opts || {};

    if (isFunction(opts)) {
        opts = opts.call(obj);
    }

    return merge(fn.bind({$vm: obj, $options: opts}), fn, {$options: opts});
}

function each(obj, iterator) {

    var i, key;

    if (isArray(obj)) {
        for (i = 0; i < obj.length; i++) {
            iterator.call(obj[i], obj[i], i);
        }
    } else if (isObject(obj)) {
        for (key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                iterator.call(obj[key], obj[key], key);
            }
        }
    }

    return obj;
}

var assign = Object.assign || _assign;

function merge(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source, true);
    });

    return target;
}

function defaults(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {

        for (var key in source) {
            if (target[key] === undefined) {
                target[key] = source[key];
            }
        }

    });

    return target;
}

function _assign(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source);
    });

    return target;
}

function _merge(target, source, deep) {
    for (var key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                target[key] = {};
            }
            if (isArray(source[key]) && !isArray(target[key])) {
                target[key] = [];
            }
            _merge(target[key], source[key], deep);
        } else if (source[key] !== undefined) {
            target[key] = source[key];
        }
    }
}

/**
 * Root Prefix Transform.
 */

function root (options$$1, next) {

    var url = next(options$$1);

    if (isString(options$$1.root) && !/^(https?:)?\//.test(url)) {
        url = trimEnd(options$$1.root, '/') + '/' + url;
    }

    return url;
}

/**
 * Query Parameter Transform.
 */

function query (options$$1, next) {

    var urlParams = Object.keys(Url.options.params), query = {}, url = next(options$$1);

    each(options$$1.params, function (value, key) {
        if (urlParams.indexOf(key) === -1) {
            query[key] = value;
        }
    });

    query = Url.params(query);

    if (query) {
        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
    }

    return url;
}

/**
 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
 */

function expand(url, params, variables) {

    var tmpl = parse(url), expanded = tmpl.expand(params);

    if (variables) {
        variables.push.apply(variables, tmpl.vars);
    }

    return expanded;
}

function parse(template) {

    var operators = ['+', '#', '.', '/', ';', '?', '&'], variables = [];

    return {
        vars: variables,
        expand: function expand(context) {
            return template.replace(/\{([^{}]+)\}|([^{}]+)/g, function (_, expression, literal) {
                if (expression) {

                    var operator = null, values = [];

                    if (operators.indexOf(expression.charAt(0)) !== -1) {
                        operator = expression.charAt(0);
                        expression = expression.substr(1);
                    }

                    expression.split(/,/g).forEach(function (variable) {
                        var tmp = /([^:*]*)(?::(\d+)|(\*))?/.exec(variable);
                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                        variables.push(tmp[1]);
                    });

                    if (operator && operator !== '+') {

                        var separator = ',';

                        if (operator === '?') {
                            separator = '&';
                        } else if (operator !== '#') {
                            separator = operator;
                        }

                        return (values.length !== 0 ? operator : '') + values.join(separator);
                    } else {
                        return values.join(',');
                    }

                } else {
                    return encodeReserved(literal);
                }
            });
        }
    };
}

function getValues(context, operator, key, modifier) {

    var value = context[key], result = [];

    if (isDefined(value) && value !== '') {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            value = value.toString();

            if (modifier && modifier !== '*') {
                value = value.substring(0, parseInt(modifier, 10));
            }

            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
        } else {
            if (modifier === '*') {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            } else {
                var tmp = [];

                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeURIComponent(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }

                if (isKeyOperator(operator)) {
                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                } else if (tmp.length !== 0) {
                    result.push(tmp.join(','));
                }
            }
        }
    } else {
        if (operator === ';') {
            result.push(encodeURIComponent(key));
        } else if (value === '' && (operator === '&' || operator === '?')) {
            result.push(encodeURIComponent(key) + '=');
        } else if (value === '') {
            result.push('');
        }
    }

    return result;
}

function isDefined(value) {
    return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
    return operator === ';' || operator === '&' || operator === '?';
}

function encodeValue(operator, value, key) {

    value = (operator === '+' || operator === '#') ? encodeReserved(value) : encodeURIComponent(value);

    if (key) {
        return encodeURIComponent(key) + '=' + value;
    } else {
        return value;
    }
}

function encodeReserved(str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part);
        }
        return part;
    }).join('');
}

/**
 * URL Template (RFC 6570) Transform.
 */

function template (options) {

    var variables = [], url = expand(options.url, options.params, variables);

    variables.forEach(function (key) {
        delete options.params[key];
    });

    return url;
}

/**
 * Service for URL templating.
 */

function Url(url, params) {

    var self = this || {}, options$$1 = url, transform;

    if (isString(url)) {
        options$$1 = {url: url, params: params};
    }

    options$$1 = merge({}, Url.options, self.$options, options$$1);

    Url.transforms.forEach(function (handler) {

        if (isString(handler)) {
            handler = Url.transform[handler];
        }

        if (isFunction(handler)) {
            transform = factory(handler, transform, self.$vm);
        }

    });

    return transform(options$$1);
}

/**
 * Url options.
 */

Url.options = {
    url: '',
    root: null,
    params: {}
};

/**
 * Url transforms.
 */

Url.transform = {template: template, query: query, root: root};
Url.transforms = ['template', 'query', 'root'];

/**
 * Encodes a Url parameter string.
 *
 * @param {Object} obj
 */

Url.params = function (obj) {

    var params = [], escape = encodeURIComponent;

    params.add = function (key, value) {

        if (isFunction(value)) {
            value = value();
        }

        if (value === null) {
            value = '';
        }

        this.push(escape(key) + '=' + escape(value));
    };

    serialize(params, obj);

    return params.join('&').replace(/%20/g, '+');
};

/**
 * Parse a URL and return its components.
 *
 * @param {String} url
 */

Url.parse = function (url) {

    var el = document.createElement('a');

    if (document.documentMode) {
        el.href = url;
        url = el.href;
    }

    el.href = url;

    return {
        href: el.href,
        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
        port: el.port,
        host: el.host,
        hostname: el.hostname,
        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
        search: el.search ? el.search.replace(/^\?/, '') : '',
        hash: el.hash ? el.hash.replace(/^#/, '') : ''
    };
};

function factory(handler, next, vm) {
    return function (options$$1) {
        return handler.call(vm, options$$1, next);
    };
}

function serialize(params, obj, scope) {

    var array = isArray(obj), plain = isPlainObject(obj), hash;

    each(obj, function (value, key) {

        hash = isObject(value) || isArray(value);

        if (scope) {
            key = scope + '[' + (plain || hash ? key : '') + ']';
        }

        if (!scope && array) {
            params.add(value.name, value.value);
        } else if (hash) {
            serialize(params, value, key);
        } else {
            params.add(key, value);
        }
    });
}

/**
 * XDomain client (Internet Explorer).
 */

function xdrClient (request) {
    return new PromiseObj(function (resolve) {

        var xdr = new XDomainRequest(), handler = function (ref) {
                var type = ref.type;


                var status = 0;

                if (type === 'load') {
                    status = 200;
                } else if (type === 'error') {
                    status = 500;
                }

                resolve(request.respondWith(xdr.responseText, {status: status}));
            };

        request.abort = function () { return xdr.abort(); };

        xdr.open(request.method, request.getUrl());

        if (request.timeout) {
            xdr.timeout = request.timeout;
        }

        xdr.onload = handler;
        xdr.onabort = handler;
        xdr.onerror = handler;
        xdr.ontimeout = handler;
        xdr.onprogress = function () {};
        xdr.send(request.getBody());
    });
}

/**
 * CORS Interceptor.
 */

var SUPPORTS_CORS = inBrowser && 'withCredentials' in new XMLHttpRequest();

function cors (request) {

    if (inBrowser) {

        var orgUrl = Url.parse(location.href);
        var reqUrl = Url.parse(request.getUrl());

        if (reqUrl.protocol !== orgUrl.protocol || reqUrl.host !== orgUrl.host) {

            request.crossOrigin = true;
            request.emulateHTTP = false;

            if (!SUPPORTS_CORS) {
                request.client = xdrClient;
            }
        }
    }

}

/**
 * Form data Interceptor.
 */

function form (request) {

    if (isFormData(request.body)) {
        request.headers.delete('Content-Type');
    } else if (isObject(request.body) && request.emulateJSON) {
        request.body = Url.params(request.body);
        request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    }

}

/**
 * JSON Interceptor.
 */

function json (request) {

    var type = request.headers.get('Content-Type') || '';

    if (isObject(request.body) && type.indexOf('application/json') === 0) {
        request.body = JSON.stringify(request.body);
    }

    return function (response) {

        return response.bodyText ? when(response.text(), function (text) {

            var type = response.headers.get('Content-Type') || '';

            if (type.indexOf('application/json') === 0 || isJson(text)) {

                try {
                    response.body = JSON.parse(text);
                } catch (e) {
                    response.body = null;
                }

            } else {
                response.body = text;
            }

            return response;

        }) : response;

    };
}

function isJson(str) {

    var start = str.match(/^\s*(\[|\{)/);
    var end = {'[': /]\s*$/, '{': /}\s*$/};

    return start && end[start[1]].test(str);
}

/**
 * JSONP client (Browser).
 */

function jsonpClient (request) {
    return new PromiseObj(function (resolve) {

        var name = request.jsonp || 'callback', callback = request.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2), body = null, handler, script;

        handler = function (ref) {
            var type = ref.type;


            var status = 0;

            if (type === 'load' && body !== null) {
                status = 200;
            } else if (type === 'error') {
                status = 500;
            }

            if (status && window[callback]) {
                delete window[callback];
                document.body.removeChild(script);
            }

            resolve(request.respondWith(body, {status: status}));
        };

        window[callback] = function (result) {
            body = JSON.stringify(result);
        };

        request.abort = function () {
            handler({type: 'abort'});
        };

        request.params[name] = callback;

        if (request.timeout) {
            setTimeout(request.abort, request.timeout);
        }

        script = document.createElement('script');
        script.src = request.getUrl();
        script.type = 'text/javascript';
        script.async = true;
        script.onload = handler;
        script.onerror = handler;

        document.body.appendChild(script);
    });
}

/**
 * JSONP Interceptor.
 */

function jsonp (request) {

    if (request.method == 'JSONP') {
        request.client = jsonpClient;
    }

}

/**
 * Before Interceptor.
 */

function before (request) {

    if (isFunction(request.before)) {
        request.before.call(this, request);
    }

}

/**
 * HTTP method override Interceptor.
 */

function method (request) {

    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
        request.headers.set('X-HTTP-Method-Override', request.method);
        request.method = 'POST';
    }

}

/**
 * Header Interceptor.
 */

function header (request) {

    var headers = assign({}, Http.headers.common,
        !request.crossOrigin ? Http.headers.custom : {},
        Http.headers[toLower(request.method)]
    );

    each(headers, function (value, name) {
        if (!request.headers.has(name)) {
            request.headers.set(name, value);
        }
    });

}

/**
 * XMLHttp client (Browser).
 */

function xhrClient (request) {
    return new PromiseObj(function (resolve) {

        var xhr = new XMLHttpRequest(), handler = function (event) {

                var response = request.respondWith(
                'response' in xhr ? xhr.response : xhr.responseText, {
                    status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
                    statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
                });

                each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
                    response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
                });

                resolve(response);
            };

        request.abort = function () { return xhr.abort(); };

        xhr.open(request.method, request.getUrl(), true);

        if (request.timeout) {
            xhr.timeout = request.timeout;
        }

        if (request.responseType && 'responseType' in xhr) {
            xhr.responseType = request.responseType;
        }

        if (request.withCredentials || request.credentials) {
            xhr.withCredentials = true;
        }

        if (!request.crossOrigin) {
            request.headers.set('X-Requested-With', 'XMLHttpRequest');
        }

        // deprecated use downloadProgress
        if (isFunction(request.progress) && request.method === 'GET') {
            xhr.addEventListener('progress', request.progress);
        }

        if (isFunction(request.downloadProgress)) {
            xhr.addEventListener('progress', request.downloadProgress);
        }

        // deprecated use uploadProgress
        if (isFunction(request.progress) && /^(POST|PUT)$/i.test(request.method)) {
            xhr.upload.addEventListener('progress', request.progress);
        }

        if (isFunction(request.uploadProgress) && xhr.upload) {
            xhr.upload.addEventListener('progress', request.uploadProgress);
        }

        request.headers.forEach(function (value, name) {
            xhr.setRequestHeader(name, value);
        });

        xhr.onload = handler;
        xhr.onabort = handler;
        xhr.onerror = handler;
        xhr.ontimeout = handler;
        xhr.send(request.getBody());
    });
}

/**
 * Http client (Node).
 */

function nodeClient (request) {

    var client = __webpack_require__(546);

    return new PromiseObj(function (resolve) {

        var url = request.getUrl();
        var body = request.getBody();
        var method = request.method;
        var headers = {}, handler;

        request.headers.forEach(function (value, name) {
            headers[name] = value;
        });

        client(url, {body: body, method: method, headers: headers}).then(handler = function (resp) {

            var response = request.respondWith(resp.body, {
                status: resp.statusCode,
                statusText: trim(resp.statusMessage)
            });

            each(resp.headers, function (value, name) {
                response.headers.set(name, value);
            });

            resolve(response);

        }, function (error$$1) { return handler(error$$1.response); });
    });
}

/**
 * Base client.
 */

function Client (context) {

    var reqHandlers = [sendRequest], resHandlers = [];

    if (!isObject(context)) {
        context = null;
    }

    function Client(request) {
        while (reqHandlers.length) {

            var handler = reqHandlers.pop();

            if (isFunction(handler)) {

                var response = (void 0), next = (void 0);

                response = handler.call(context, request, function (val) { return next = val; }) || next;

                if (isObject(response)) {
                    return new PromiseObj(function (resolve, reject) {

                        resHandlers.forEach(function (handler) {
                            response = when(response, function (response) {
                                return handler.call(context, response) || response;
                            }, reject);
                        });

                        when(response, resolve, reject);

                    }, context);
                }

                if (isFunction(response)) {
                    resHandlers.unshift(response);
                }

            } else {
                warn(("Invalid interceptor of type " + (typeof handler) + ", must be a function"));
            }
        }
    }

    Client.use = function (handler) {
        reqHandlers.push(handler);
    };

    return Client;
}

function sendRequest(request) {

    var client = request.client || (inBrowser ? xhrClient : nodeClient);

    return client(request);
}

/**
 * HTTP Headers.
 */

var Headers = function Headers(headers) {
    var this$1 = this;


    this.map = {};

    each(headers, function (value, name) { return this$1.append(name, value); });
};

Headers.prototype.has = function has (name) {
    return getName(this.map, name) !== null;
};

Headers.prototype.get = function get (name) {

    var list = this.map[getName(this.map, name)];

    return list ? list.join() : null;
};

Headers.prototype.getAll = function getAll (name) {
    return this.map[getName(this.map, name)] || [];
};

Headers.prototype.set = function set (name, value) {
    this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
};

Headers.prototype.append = function append (name, value) {

    var list = this.map[getName(this.map, name)];

    if (list) {
        list.push(trim(value));
    } else {
        this.set(name, value);
    }
};

Headers.prototype.delete = function delete$1 (name) {
    delete this.map[getName(this.map, name)];
};

Headers.prototype.deleteAll = function deleteAll () {
    this.map = {};
};

Headers.prototype.forEach = function forEach (callback, thisArg) {
        var this$1 = this;

    each(this.map, function (list, name) {
        each(list, function (value) { return callback.call(thisArg, value, name, this$1); });
    });
};

function getName(map, name) {
    return Object.keys(map).reduce(function (prev, curr) {
        return toLower(name) === toLower(curr) ? curr : prev;
    }, null);
}

function normalizeName(name) {

    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
    }

    return trim(name);
}

/**
 * HTTP Response.
 */

var Response = function Response(body, ref) {
    var url = ref.url;
    var headers = ref.headers;
    var status = ref.status;
    var statusText = ref.statusText;


    this.url = url;
    this.ok = status >= 200 && status < 300;
    this.status = status || 0;
    this.statusText = statusText || '';
    this.headers = new Headers(headers);
    this.body = body;

    if (isString(body)) {

        this.bodyText = body;

    } else if (isBlob(body)) {

        this.bodyBlob = body;

        if (isBlobText(body)) {
            this.bodyText = blobText(body);
        }
    }
};

Response.prototype.blob = function blob () {
    return when(this.bodyBlob);
};

Response.prototype.text = function text () {
    return when(this.bodyText);
};

Response.prototype.json = function json () {
    return when(this.text(), function (text) { return JSON.parse(text); });
};

Object.defineProperty(Response.prototype, 'data', {

    get: function get() {
        return this.body;
    },

    set: function set(body) {
        this.body = body;
    }

});

function blobText(body) {
    return new PromiseObj(function (resolve) {

        var reader = new FileReader();

        reader.readAsText(body);
        reader.onload = function () {
            resolve(reader.result);
        };

    });
}

function isBlobText(body) {
    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
}

/**
 * HTTP Request.
 */

var Request = function Request(options$$1) {

    this.body = null;
    this.params = {};

    assign(this, options$$1, {
        method: toUpper(options$$1.method || 'GET')
    });

    if (!(this.headers instanceof Headers)) {
        this.headers = new Headers(this.headers);
    }
};

Request.prototype.getUrl = function getUrl () {
    return Url(this);
};

Request.prototype.getBody = function getBody () {
    return this.body;
};

Request.prototype.respondWith = function respondWith (body, options$$1) {
    return new Response(body, assign(options$$1 || {}, {url: this.getUrl()}));
};

/**
 * Service for sending network requests.
 */

var COMMON_HEADERS = {'Accept': 'application/json, text/plain, */*'};
var JSON_CONTENT_TYPE = {'Content-Type': 'application/json;charset=utf-8'};

function Http(options$$1) {

    var self = this || {}, client = Client(self.$vm);

    defaults(options$$1 || {}, self.$options, Http.options);

    Http.interceptors.forEach(function (handler) {

        if (isString(handler)) {
            handler = Http.interceptor[handler];
        }

        if (isFunction(handler)) {
            client.use(handler);
        }

    });

    return client(new Request(options$$1)).then(function (response) {

        return response.ok ? response : PromiseObj.reject(response);

    }, function (response) {

        if (response instanceof Error) {
            error(response);
        }

        return PromiseObj.reject(response);
    });
}

Http.options = {};

Http.headers = {
    put: JSON_CONTENT_TYPE,
    post: JSON_CONTENT_TYPE,
    patch: JSON_CONTENT_TYPE,
    delete: JSON_CONTENT_TYPE,
    common: COMMON_HEADERS,
    custom: {}
};

Http.interceptor = {before: before, method: method, jsonp: jsonp, json: json, form: form, header: header, cors: cors};
Http.interceptors = ['before', 'method', 'jsonp', 'json', 'form', 'header', 'cors'];

['get', 'delete', 'head', 'jsonp'].forEach(function (method$$1) {

    Http[method$$1] = function (url, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1}));
    };

});

['post', 'put', 'patch'].forEach(function (method$$1) {

    Http[method$$1] = function (url, body, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1, body: body}));
    };

});

/**
 * Service for interacting with RESTful services.
 */

function Resource(url, params, actions, options$$1) {

    var self = this || {}, resource = {};

    actions = assign({},
        Resource.actions,
        actions
    );

    each(actions, function (action, name) {

        action = merge({url: url, params: assign({}, params)}, options$$1, action);

        resource[name] = function () {
            return (self.$http || Http)(opts(action, arguments));
        };
    });

    return resource;
}

function opts(action, args) {

    var options$$1 = assign({}, action), params = {}, body;

    switch (args.length) {

        case 2:

            params = args[0];
            body = args[1];

            break;

        case 1:

            if (/^(POST|PUT|PATCH)$/i.test(options$$1.method)) {
                body = args[0];
            } else {
                params = args[0];
            }

            break;

        case 0:

            break;

        default:

            throw 'Expected up to 2 arguments [params, body], got ' + args.length + ' arguments';
    }

    options$$1.body = body;
    options$$1.params = assign({}, options$$1.params, params);

    return options$$1;
}

Resource.actions = {

    get: {method: 'GET'},
    save: {method: 'POST'},
    query: {method: 'GET'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'},
    delete: {method: 'DELETE'}

};

/**
 * Install plugin.
 */

function plugin(Vue) {

    if (plugin.installed) {
        return;
    }

    Util(Vue);

    Vue.url = Url;
    Vue.http = Http;
    Vue.resource = Resource;
    Vue.Promise = PromiseObj;

    Object.defineProperties(Vue.prototype, {

        $url: {
            get: function get() {
                return options(Vue.url, this, this.$options.url);
            }
        },

        $http: {
            get: function get() {
                return options(Vue.http, this, this.$options.http);
            }
        },

        $resource: {
            get: function get() {
                return Vue.resource.bind(this);
            }
        },

        $promise: {
            get: function get() {
                var this$1 = this;

                return function (executor) { return new Vue.Promise(executor, this$1); };
            }
        }

    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);



/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(473);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(16)("28c93628", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-13e1f45c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Designer.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-13e1f45c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Designer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(475);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(16)("8e729d64", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-21f67b0a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UploaderFile.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-21f67b0a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UploaderFile.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(479);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(16)("a9b1b18c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-98746e22\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ActionsToolbar.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-98746e22\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ActionsToolbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = multitext;
function multitext(Snap, Element, Paper, glob) {
    Paper.prototype.multitext = function (x, y, txt, maxWidth, attributes) {
        const svg = Snap();
        const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const temp = svg.text(0, 0, abc);
        const letterWidth = temp.getBBox().width / abc.length;
        temp.attr(attributes);
        svg.remove();

        const words = txt.split(' '),
            lines = [''],
            linesWidth = [];
        let widthSoFar = 0,
            currentLine = 0;

        for (let i = 0; i < words.length; i++) {
            const l = words[i].length;
            if (widthSoFar + (l * letterWidth) > maxWidth) {
                lines.push('');
                lines[currentLine] = lines[currentLine].trim();
                currentLine++;
                linesWidth.push(widthSoFar);
                widthSoFar = 0;
            }
            widthSoFar += l * letterWidth;
            lines[currentLine] += words[i] + ' ';
        }
        // this last push is required to capture the last line width, improvement required.
        linesWidth.push(widthSoFar);

        const t = this.text(x, y, lines).attr(attributes);
        let lineCounter = 0;
        t.selectAll('tspan:nth-child(n+1)').forEach((element) => {
            const width = linesWidth[lineCounter];
            const elX = x + (maxWidth - width) / 2;
            element.attr({
                dy: '1.2em',
                x: elX
            });
            lineCounter++;
        });
        return t;
    };
}


/***/ }),

/***/ 546:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(251);


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = coerceType;
/* harmony export (immutable) */ __webpack_exports__["c"] = isBuiltIn;
/* harmony export (immutable) */ __webpack_exports__["a"] = isSimple;
/**
 * Built-in moddle types
 */
var BUILTINS = {
  String: true,
  Boolean: true,
  Integer: true,
  Real: true,
  Element: true
};

/**
 * Converters for built in types from string representations
 */
var TYPE_CONVERTERS = {
  String: function(s) { return s; },
  Boolean: function(s) { return s === 'true'; },
  Integer: function(s) { return parseInt(s, 10); },
  Real: function(s) { return parseFloat(s, 10); }
};

/**
 * Convert a type to its real representation
 */
function coerceType(type, value) {

  var converter = TYPE_CONVERTERS[type];

  if (converter) {
    return converter(value);
  } else {
    return value;
  }
}

/**
 * Return whether the given type is built-in
 */
function isBuiltIn(type) {
  return !!BUILTINS[type];
}

/**
 * Return whether the given type is simple
 */
function isSimple(type) {
  return !!TYPE_CONVERTERS[type];
}

/***/ })

},[547]);