module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("querier");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return sym; });
/* unused harmony export TASK */
/* unused harmony export HELPER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MATCH; });
/* unused harmony export CANCEL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SAGA_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SELF_CANCELLATION; });
/* unused harmony export konst */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return kTrue; });
/* unused harmony export kFalse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ident; });
/* harmony export (immutable) */ __webpack_exports__["d"] = check;
/* unused harmony export hasOwn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return is; });
/* unused harmony export object */
/* harmony export (immutable) */ __webpack_exports__["n"] = remove;
/* unused harmony export array */
/* unused harmony export deferred */
/* unused harmony export arrayOfDeffered */
/* harmony export (immutable) */ __webpack_exports__["f"] = delay;
/* unused harmony export createMockTask */
/* unused harmony export autoInc */
/* unused harmony export uid */
/* harmony export (immutable) */ __webpack_exports__["l"] = makeIterator;
/* unused harmony export log */
/* harmony export (immutable) */ __webpack_exports__["g"] = deprecate;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return updateIncentive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return internalErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createSetContextWarning; });
/* unused harmony export wrapSagaDispatch */
/* unused harmony export cloneableGenerator */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var sym = function sym(id) {
  return '@@redux-saga/' + id;
};

var TASK = /*#__PURE__*/sym('TASK');
var HELPER = /*#__PURE__*/sym('HELPER');
var MATCH = /*#__PURE__*/sym('MATCH');
var CANCEL = /*#__PURE__*/sym('CANCEL_PROMISE');
var SAGA_ACTION = /*#__PURE__*/sym('SAGA_ACTION');
var SELF_CANCELLATION = /*#__PURE__*/sym('SELF_CANCELLATION');
var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue = /*#__PURE__*/konst(true);
var kFalse = /*#__PURE__*/konst(false);
var noop = function noop() {};
var ident = function ident(v) {
  return v;
};

function check(value, predicate, error) {
  if (!predicate(value)) {
    log('error', 'uncaught at check', error);
    throw new Error(error);
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(object, property) {
  return is.notUndef(object) && hasOwnProperty.call(object, property);
}

var is = {
  undef: function undef(v) {
    return v === null || v === undefined;
  },
  notUndef: function notUndef(v) {
    return v !== null && v !== undefined;
  },
  func: function func(f) {
    return typeof f === 'function';
  },
  number: function number(n) {
    return typeof n === 'number';
  },
  string: function string(s) {
    return typeof s === 'string';
  },
  array: Array.isArray,
  object: function object(obj) {
    return obj && !is.array(obj) && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  },
  promise: function promise(p) {
    return p && is.func(p.then);
  },
  iterator: function iterator(it) {
    return it && is.func(it.next) && is.func(it.throw);
  },
  iterable: function iterable(it) {
    return it && is.func(Symbol) ? is.func(it[Symbol.iterator]) : is.array(it);
  },
  task: function task(t) {
    return t && t[TASK];
  },
  observable: function observable(ob) {
    return ob && is.func(ob.subscribe);
  },
  buffer: function buffer(buf) {
    return buf && is.func(buf.isEmpty) && is.func(buf.take) && is.func(buf.put);
  },
  pattern: function pattern(pat) {
    return pat && (is.string(pat) || (typeof pat === 'undefined' ? 'undefined' : _typeof(pat)) === 'symbol' || is.func(pat) || is.array(pat));
  },
  channel: function channel(ch) {
    return ch && is.func(ch.take) && is.func(ch.close);
  },
  helper: function helper(it) {
    return it && it[HELPER];
  },
  stringableFunc: function stringableFunc(f) {
    return is.func(f) && hasOwn(f, 'toString');
  }
};

var object = {
  assign: function assign(target, source) {
    for (var i in source) {
      if (hasOwn(source, i)) {
        target[i] = source[i];
      }
    }
  }
};

function remove(array, item) {
  var index = array.indexOf(item);
  if (index >= 0) {
    array.splice(index, 1);
  }
}

var array = {
  from: function from(obj) {
    var arr = Array(obj.length);
    for (var i in obj) {
      if (hasOwn(obj, i)) {
        arr[i] = obj[i];
      }
    }
    return arr;
  }
};

function deferred() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var def = _extends({}, props);
  var promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  def.promise = promise;
  return def;
}

function arrayOfDeffered(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }
  return arr;
}

function delay(ms) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var timeoutId = void 0;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(function () {
      return resolve(val);
    }, ms);
  });

  promise[CANCEL] = function () {
    return clearTimeout(timeoutId);
  };

  return promise;
}

function createMockTask() {
  var _ref;

  var running = true;
  var _result = void 0,
      _error = void 0;

  return _ref = {}, _ref[TASK] = true, _ref.isRunning = function isRunning() {
    return running;
  }, _ref.result = function result() {
    return _result;
  }, _ref.error = function error() {
    return _error;
  }, _ref.setRunning = function setRunning(b) {
    return running = b;
  }, _ref.setResult = function setResult(r) {
    return _result = r;
  }, _ref.setError = function setError(e) {
    return _error = e;
  }, _ref;
}

function autoInc() {
  var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return function () {
    return ++seed;
  };
}

var uid = /*#__PURE__*/autoInc();

var kThrow = function kThrow(err) {
  throw err;
};
var kReturn = function kReturn(value) {
  return { value: value, done: true };
};
function makeIterator(next) {
  var thro = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kThrow;
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var isHelper = arguments[3];

  var iterator = { name: name, next: next, throw: thro, return: kReturn };

  if (isHelper) {
    iterator[HELPER] = true;
  }
  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }
  return iterator;
}

/**
  Print error in a useful way whether in a browser environment
  (with expandable error stack traces), or in a node.js environment
  (text-only log output)
 **/
function log(level, message) {
  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  /*eslint-disable no-console*/
  if (typeof window === 'undefined') {
    console.log('redux-saga ' + level + ': ' + message + '\n' + (error && error.stack || error));
  } else {
    console[level](message, error);
  }
}

function deprecate(fn, deprecationWarning) {
  return function () {
    if (true) log('warn', deprecationWarning);
    return fn.apply(undefined, arguments);
  };
}

var updateIncentive = function updateIncentive(deprecated, preferred) {
  return deprecated + ' has been deprecated in favor of ' + preferred + ', please update your code';
};

var internalErr = function internalErr(err) {
  return new Error('\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project\'s github repo.\n  Error: ' + err + '\n');
};

var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + 'setContext(props): argument ' + props + ' is not a plain object';
};

var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    return dispatch(Object.defineProperty(action, SAGA_ACTION, { value: true }));
  };
};

var cloneableGenerator = function cloneableGenerator(generatorFunc) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var history = [];
    var gen = generatorFunc.apply(undefined, args);
    return {
      next: function next(arg) {
        history.push(arg);
        return gen.next(arg);
      },
      clone: function clone() {
        var clonedGen = cloneableGenerator(generatorFunc).apply(undefined, args);
        history.forEach(function (arg) {
          return clonedGen.next(arg);
        });
        return clonedGen;
      },
      return: function _return(value) {
        return gen.return(value);
      },
      throw: function _throw(exception) {
        return gen.throw(exception);
      }
    };
  };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(44);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(24),
    getRawTag = __webpack_require__(84),
    objectToString = __webpack_require__(85);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = getPageLinks

function getPageLinks (link) {
  link = link.link || link.meta.link || ''

  const links = {}

  // link format:
  // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
  link.replace(/<([^>]*)>;\s*rel="([\w]*)"/g, (m, uri, type) => {
    links[type] = uri
  })

  return links
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export detach */
/* harmony export (immutable) */ __webpack_exports__["f"] = take;
/* unused harmony export takem */
/* unused harmony export put */
/* harmony export (immutable) */ __webpack_exports__["b"] = all;
/* unused harmony export race */
/* harmony export (immutable) */ __webpack_exports__["c"] = call;
/* unused harmony export apply */
/* unused harmony export cps */
/* harmony export (immutable) */ __webpack_exports__["e"] = fork;
/* unused harmony export spawn */
/* unused harmony export join */
/* harmony export (immutable) */ __webpack_exports__["d"] = cancel;
/* unused harmony export select */
/* harmony export (immutable) */ __webpack_exports__["a"] = actionChannel;
/* unused harmony export cancelled */
/* unused harmony export flush */
/* unused harmony export getContext */
/* unused harmony export setContext */
/* unused harmony export takeEvery */
/* unused harmony export takeLatest */
/* unused harmony export throttle */
/* unused harmony export asEffect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sagaHelpers__ = __webpack_require__(70);



var IO = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__utils__["o" /* sym */])('IO');
var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';

var TEST_HINT = '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)';

var effect = function effect(type, payload) {
  var _ref;

  return _ref = {}, _ref[IO] = true, _ref[type] = payload, _ref;
};

var detach = function detach(eff) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(asEffect.fork(eff), __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].object, 'detach(eff): argument must be a fork effect');
  eff[FORK].detached = true;
  return eff;
};

function take() {
  var patternOrChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

  if (arguments.length) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(arguments[0], __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
  }
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].pattern(patternOrChannel)) {
    return effect(TAKE, { pattern: patternOrChannel });
  }
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].channel(patternOrChannel)) {
    return effect(TAKE, { channel: patternOrChannel });
  }
  throw new Error('take(patternOrChannel): argument ' + String(patternOrChannel) + ' is not valid channel or a valid pattern');
}

take.maybe = function () {
  var eff = take.apply(undefined, arguments);
  eff[TAKE].maybe = true;
  return eff;
};

var takem = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__utils__["g" /* deprecate */])(take.maybe, /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__utils__["p" /* updateIncentive */])('takem', 'take.maybe'));

function put(channel, action) {
  if (arguments.length > 1) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(channel, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'put(channel, action): argument channel is undefined');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(channel, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].channel, 'put(channel, action): argument ' + channel + ' is not a valid channel');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(action, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'put(channel, action): argument action is undefined');
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(channel, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'put(action): argument action is undefined');
    action = channel;
    channel = null;
  }
  return effect(PUT, { channel: channel, action: action });
}

put.resolve = function () {
  var eff = put.apply(undefined, arguments);
  eff[PUT].resolve = true;
  return eff;
};

put.sync = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__utils__["g" /* deprecate */])(put.resolve, /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__utils__["p" /* updateIncentive */])('put.sync', 'put.resolve'));

function all(effects) {
  return effect(ALL, effects);
}

function race(effects) {
  return effect(RACE, effects);
}

function getFnCallDesc(meth, fn, args) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(fn, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, meth + ': argument fn is undefined');

  var context = null;
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].array(fn)) {
    var _fn = fn;
    context = _fn[0];
    fn = _fn[1];
  } else if (fn.fn) {
    var _fn2 = fn;
    context = _fn2.context;
    fn = _fn2.fn;
  }
  if (context && __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].string(fn) && __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func(context[fn])) {
    fn = context[fn];
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(fn, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func, meth + ': argument ' + fn + ' is not a function');

  return { context: context, fn: fn, args: args };
}

function call(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return effect(CALL, getFnCallDesc('call', fn, args));
}

function apply(context, fn) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  return effect(CALL, getFnCallDesc('apply', { context: context, fn: fn }, args));
}

function cps(fn) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return effect(CPS, getFnCallDesc('cps', fn, args));
}

function fork(fn) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return effect(FORK, getFnCallDesc('fork', fn, args));
}

function spawn(fn) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return detach(fork.apply(undefined, [fn].concat(args)));
}

function join() {
  for (var _len5 = arguments.length, tasks = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    tasks[_key5] = arguments[_key5];
  }

  if (tasks.length > 1) {
    return all(tasks.map(function (t) {
      return join(t);
    }));
  }
  var task = tasks[0];
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(task, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'join(task): argument task is undefined');
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(task, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].task, 'join(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  return effect(JOIN, task);
}

function cancel() {
  for (var _len6 = arguments.length, tasks = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    tasks[_key6] = arguments[_key6];
  }

  if (tasks.length > 1) {
    return all(tasks.map(function (t) {
      return cancel(t);
    }));
  }
  var task = tasks[0];
  if (tasks.length === 1) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(task, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'cancel(task): argument task is undefined');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(task, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].task, 'cancel(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  }
  return effect(CANCEL, task || __WEBPACK_IMPORTED_MODULE_0__utils__["c" /* SELF_CANCELLATION */]);
}

function select(selector) {
  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  if (arguments.length === 0) {
    selector = __WEBPACK_IMPORTED_MODULE_0__utils__["h" /* ident */];
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(selector, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'select(selector,[...]): argument selector is undefined');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(selector, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func, 'select(selector,[...]): argument ' + selector + ' is not a function');
  }
  return effect(SELECT, { selector: selector, args: args });
}

/**
  channel(pattern, [buffer])    => creates an event channel for store actions
**/
function actionChannel(pattern, buffer) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(pattern, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'actionChannel(pattern,...): argument pattern is undefined');
  if (arguments.length > 1) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(buffer, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(buffer, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].buffer, 'actionChannel(pattern, buffer): argument ' + buffer + ' is not a valid buffer');
  }
  return effect(ACTION_CHANNEL, { pattern: pattern, buffer: buffer });
}

function cancelled() {
  return effect(CANCELLED, {});
}

function flush(channel) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(channel, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].channel, 'flush(channel): argument ' + channel + ' is not valid channel');
  return effect(FLUSH, channel);
}

function getContext(prop) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(prop, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].string, 'getContext(prop): argument ' + prop + ' is not a string');
  return effect(GET_CONTEXT, prop);
}

function setContext(props) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(props, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].object, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* createSetContextWarning */])(null, props));
  return effect(SET_CONTEXT, props);
}

function takeEvery(patternOrChannel, worker) {
  for (var _len8 = arguments.length, args = Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
    args[_key8 - 2] = arguments[_key8];
  }

  return fork.apply(undefined, [__WEBPACK_IMPORTED_MODULE_1__sagaHelpers__["a" /* takeEveryHelper */], patternOrChannel, worker].concat(args));
}

function takeLatest(patternOrChannel, worker) {
  for (var _len9 = arguments.length, args = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
    args[_key9 - 2] = arguments[_key9];
  }

  return fork.apply(undefined, [__WEBPACK_IMPORTED_MODULE_1__sagaHelpers__["b" /* takeLatestHelper */], patternOrChannel, worker].concat(args));
}

function throttle(ms, pattern, worker) {
  for (var _len10 = arguments.length, args = Array(_len10 > 3 ? _len10 - 3 : 0), _key10 = 3; _key10 < _len10; _key10++) {
    args[_key10 - 3] = arguments[_key10];
  }

  return fork.apply(undefined, [__WEBPACK_IMPORTED_MODULE_1__sagaHelpers__["c" /* throttleHelper */], ms, pattern, worker].concat(args));
}

var createAsEffectType = function createAsEffectType(type) {
  return function (effect) {
    return effect && effect[IO] && effect[type];
  };
};

var asEffect = {
  take: /*#__PURE__*/createAsEffectType(TAKE),
  put: /*#__PURE__*/createAsEffectType(PUT),
  all: /*#__PURE__*/createAsEffectType(ALL),
  race: /*#__PURE__*/createAsEffectType(RACE),
  call: /*#__PURE__*/createAsEffectType(CALL),
  cps: /*#__PURE__*/createAsEffectType(CPS),
  fork: /*#__PURE__*/createAsEffectType(FORK),
  join: /*#__PURE__*/createAsEffectType(JOIN),
  cancel: /*#__PURE__*/createAsEffectType(CANCEL),
  select: /*#__PURE__*/createAsEffectType(SELECT),
  actionChannel: /*#__PURE__*/createAsEffectType(ACTION_CHANNEL),
  cancelled: /*#__PURE__*/createAsEffectType(CANCELLED),
  flush: /*#__PURE__*/createAsEffectType(FLUSH),
  getContext: /*#__PURE__*/createAsEffectType(GET_CONTEXT),
  setContext: /*#__PURE__*/createAsEffectType(SET_CONTEXT)
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__octokit_rest__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__octokit_rest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__octokit_rest__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const octokit = new __WEBPACK_IMPORTED_MODULE_0__octokit_rest__();
const auth = () => __awaiter(this, void 0, void 0, function* () {
    yield octokit.authenticate({
        username: 'dprokop',
        password: 'h6g.HG.G9=tddXJyW@j8}cD8',
        type: 'basic',
    });
});
const searchOrganisation = (orgName) => __awaiter(this, void 0, void 0, function* () {
    yield auth();
    const results = yield octokit.search.users({
        q: orgName,
    });
    return results.data;
});
/* harmony export (immutable) */ __webpack_exports__["e"] = searchOrganisation;

const getOrganisationDetails = ({ orgName }) => __awaiter(this, void 0, void 0, function* () {
    yield auth();
    const results = yield octokit.orgs.get({
        org: orgName
    });
    return results.data;
});
/* harmony export (immutable) */ __webpack_exports__["a"] = getOrganisationDetails;

const getOrganisationRepositories = ({ orgName }) => __awaiter(this, void 0, void 0, function* () {
    yield auth();
    const results = yield octokit.repos.getForOrg({
        org: orgName
    });
    return results.data;
});
/* harmony export (immutable) */ __webpack_exports__["b"] = getOrganisationRepositories;

const getRepository = ({ id }) => __awaiter(this, void 0, void 0, function* () {
    yield auth();
    const result = yield octokit.repos.getById({
        id: id.toString()
    });
    return result.data;
});
/* harmony export (immutable) */ __webpack_exports__["c"] = getRepository;

const getRepositoryContributors = ({ owner, repo }) => __awaiter(this, void 0, void 0, function* () {
    yield auth();
    const result = yield octokit.repos.getContributors({
        owner,
        repo
    });
    return result.data;
});
/* harmony export (immutable) */ __webpack_exports__["d"] = getRepositoryContributors;



/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(93),
    listCacheDelete = __webpack_require__(94),
    listCacheGet = __webpack_require__(95),
    listCacheHas = __webpack_require__(96),
    listCacheSet = __webpack_require__(97);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(15);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(22);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(111);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = getPage

const HttpError = __webpack_require__(28)
const getPageLinks = __webpack_require__(10)

function getPage (octokit, link, which, headers, callback) {
  if (typeof headers === 'function') {
    callback = headers
    headers = null
  }

  const url = getPageLinks(link)[which]

  if (!url) {
    const urlError = new HttpError(`No ${which} page found`, 404)
    if (callback) {
      return callback(urlError)
    }
    return Promise.reject(urlError)
  }

  const requestOptions = {
    url,
    headers: applyAcceptHeader(link, headers)
  }

  const promise = octokit.request(requestOptions)

  if (callback) {
    promise.then(callback.bind(null, null), callback)
    return
  }

  return promise
}

function applyAcceptHeader (res, headers) {
  const previous = res.meta && res.meta['x-github-media-type']

  if (!previous || (headers && headers.accept)) {
    return headers
  }
  headers = headers || {}
  headers.accept = `application/vnd.${previous.replace('; format=', '+')}`
  return headers
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return qEnd; });
/* harmony export (immutable) */ __webpack_exports__["c"] = safeName;
/* harmony export (immutable) */ __webpack_exports__["a"] = fsmIterator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);


var done = { done: true, value: undefined };
var qEnd = {};

function safeName(patternOrChannel) {
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].channel(patternOrChannel)) {
    return 'channel';
  } else if (Array.isArray(patternOrChannel)) {
    return String(patternOrChannel.map(function (entry) {
      return String(entry);
    }));
  } else {
    return String(patternOrChannel);
  }
}

function fsmIterator(fsm, q0) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iterator';

  var updateState = void 0,
      qNext = q0;

  function next(arg, error) {
    if (qNext === qEnd) {
      return done;
    }

    if (error) {
      qNext = qEnd;
      throw error;
    } else {
      updateState && updateState(arg);

      var _fsm$qNext = fsm[qNext](),
          q = _fsm$qNext[0],
          output = _fsm$qNext[1],
          _updateState = _fsm$qNext[2];

      qNext = q;
      updateState = _updateState;
      return qNext === qEnd ? done : output;
    }
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* makeIterator */])(next, function (error) {
    return next(null, error);
  }, name, true);
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return END; });
/* unused harmony export isEnd */
/* unused harmony export emitter */
/* unused harmony export INVALID_BUFFER */
/* unused harmony export UNDEFINED_INPUT_ERROR */
/* unused harmony export channel */
/* unused harmony export eventChannel */
/* unused harmony export stdChannel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffers__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduler__ = __webpack_require__(72);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
var END = { type: CHANNEL_END_TYPE };
var isEnd = function isEnd(a) {
  return a && a.type === CHANNEL_END_TYPE;
};

function emitter() {
  var subscribers = [];

  function subscribe(sub) {
    subscribers.push(sub);
    return function () {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["n" /* remove */])(subscribers, sub);
    };
  }

  function emit(item) {
    var arr = subscribers.slice();
    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i](item);
    }
  }

  return {
    subscribe: subscribe,
    emit: emit
  };
}

var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action';

if (true) {
  UNDEFINED_INPUT_ERROR += '\nHints:\n    - check that your Action Creator returns a non-undefined value\n    - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners\n  ';
}

function channel() {
  var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_1__buffers__["a" /* buffers */].fixed();

  var closed = false;
  var takers = [];

  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(buffer, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].buffer, INVALID_BUFFER);

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw Object(__WEBPACK_IMPORTED_MODULE_0__utils__["i" /* internalErr */])('Cannot have a closed channel with pending takers');
    }
    if (takers.length && !buffer.isEmpty()) {
      throw Object(__WEBPACK_IMPORTED_MODULE_0__utils__["i" /* internalErr */])('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    checkForbiddenStates();
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(input, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, UNDEFINED_INPUT_ERROR);
    if (closed) {
      return;
    }
    if (!takers.length) {
      return buffer.put(input);
    }
    for (var i = 0; i < takers.length; i++) {
      var cb = takers[i];
      if (!cb[__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* MATCH */]] || cb[__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* MATCH */]](input)) {
        takers.splice(i, 1);
        return cb(input);
      }
    }
  }

  function take(cb) {
    checkForbiddenStates();
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(cb, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func, "channel.take's callback must be a function");

    if (closed && buffer.isEmpty()) {
      cb(END);
    } else if (!buffer.isEmpty()) {
      cb(buffer.take());
    } else {
      takers.push(cb);
      cb.cancel = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["n" /* remove */])(takers, cb);
      };
    }
  }

  function flush(cb) {
    checkForbiddenStates(); // TODO: check if some new state should be forbidden now
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(cb, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func, "channel.flush' callback must be a function");
    if (closed && buffer.isEmpty()) {
      cb(END);
      return;
    }
    cb(buffer.flush());
  }

  function close() {
    checkForbiddenStates();
    if (!closed) {
      closed = true;
      if (takers.length) {
        var arr = takers;
        takers = [];
        for (var i = 0, len = arr.length; i < len; i++) {
          arr[i](END);
        }
      }
    }
  }

  return {
    take: take,
    put: put,
    flush: flush,
    close: close,
    get __takers__() {
      return takers;
    },
    get __closed__() {
      return closed;
    }
  };
}

function eventChannel(subscribe) {
  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_1__buffers__["a" /* buffers */].none();
  var matcher = arguments[2];

  /**
    should be if(typeof matcher !== undefined) instead?
    see PR #273 for a background discussion
  **/
  if (arguments.length > 2) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(matcher, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func, 'Invalid match function passed to eventChannel');
  }

  var chan = channel(buffer);
  var close = function close() {
    if (!chan.__closed__) {
      if (unsubscribe) {
        unsubscribe();
      }
      chan.close();
    }
  };
  var unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      close();
      return;
    }
    if (matcher && !matcher(input)) {
      return;
    }
    chan.put(input);
  });
  if (chan.__closed__) {
    unsubscribe();
  }

  if (!__WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func(unsubscribe)) {
    throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: close
  };
}

function stdChannel(subscribe) {
  var chan = eventChannel(function (cb) {
    return subscribe(function (input) {
      if (input[__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* SAGA_ACTION */]]) {
        cb(input);
        return;
      }
      Object(__WEBPACK_IMPORTED_MODULE_2__scheduler__["a" /* asap */])(function () {
        return cb(input);
      });
    });
  });

  return _extends({}, chan, {
    take: function take(cb, matcher) {
      if (arguments.length > 1) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(matcher, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func, "channel.take's matcher argument must be a function");
        cb[__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* MATCH */]] = matcher;
      }
      chan.take(cb);
    }
  });
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(83),
    getValue = __webpack_require__(89);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObject = __webpack_require__(2);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(43);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(23),
    isLength = __webpack_require__(52);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const STATUS_CODES = {
  304: 'Not Modified', // See PR #673 (https://github.com/octokit/rest.js/pull/673)
  400: 'Bad Request',
  404: 'Not Found',
  500: 'Internal Server Error',
  504: 'Gateway Timeout'
}

module.exports = class HttpError extends Error {
  constructor (message, code, headers) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.name = 'HttpError'
    this.code = code
    this.status = STATUS_CODES[code]
    this.headers = headers
  }

  toString () {
    return this.message
  }

  toJSON () {
    return {
      code: this.code,
      status: this.status,
      message: this.message
    }
  }
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};


const css = __webpack_require__(206);
const TextLabel = ({ className, children }) => {
    const classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(css.TextLabel, className);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: classes }, children));
};
/* harmony export (immutable) */ __webpack_exports__["a"] = TextLabel;

const TextLabelSmall = (_a) => {
    var { children } = _a, otherProps = __rest(_a, ["children"]);
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](TextLabel, Object.assign({}, otherProps),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", null, children));
};
/* unused harmony export TextLabelSmall */

const TextLabelSmallMediumGrey = (_a) => {
    var { className } = _a, otherProps = __rest(_a, ["className"]);
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](TextLabelSmall, Object.assign({ className: css.mediumGrey }, otherProps));
};
/* harmony export (immutable) */ __webpack_exports__["b"] = TextLabelSmallMediumGrey;



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ui_kit_Typography_HeaderLevel2__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querier__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querier___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_querier__);



const Feedback = ({ states, text }) => {
    const combinedState = Object(__WEBPACK_IMPORTED_MODULE_2_querier__["combineStates"])(states);
    if (combinedState.state === __WEBPACK_IMPORTED_MODULE_2_querier__["QuerierState"].Error) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_app_ui_kit_Typography_HeaderLevel2__["a" /* default */], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                "Shit went wrong ",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("pre", null, "\u00AF\\_(\u30C4)_/\u00AF")));
    }
    if (combinedState.state === __WEBPACK_IMPORTED_MODULE_2_querier__["QuerierState"].Active) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_app_ui_kit_Typography_HeaderLevel2__["a" /* default */], null, text || `Loading data...`);
    }
    return null;
};
/* harmony default export */ __webpack_exports__["a"] = (Feedback);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(235);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export rootSaga */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_utils_redux_reducersRegistry__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_utils_env__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_devtools_extension__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_saga__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_saga_effects__ = __webpack_require__(36);






let store;
const sagaMiddleware = __WEBPACK_IMPORTED_MODULE_4_redux_saga___default()();
/* harmony export (immutable) */ __webpack_exports__["b"] = sagaMiddleware;

const getStore = (isServer) => {
    return store;
};
/* unused harmony export getStore */

const getState = () => {
    return getStore().getState();
};
/* unused harmony export getState */

function* rootSaga() {
    yield Object(__WEBPACK_IMPORTED_MODULE_5_redux_saga_effects__["a" /* all */])([]);
}
const configureStore = (isServer) => {
    if (!isServer) {
        // Initial store injected server side
        const preloadedState = window.__PRELOADED_STATE__;
        delete window.__PRELOADED_STATE__;
        store = Object(__WEBPACK_IMPORTED_MODULE_2_redux__["createStore"])((state, action) => state, preloadedState, Object(__WEBPACK_IMPORTED_MODULE_3_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_2_redux__["applyMiddleware"])(sagaMiddleware)));
        sagaMiddleware.run(rootSaga);
        // For dev purposes we are giving access to store on window
        if (Object(__WEBPACK_IMPORTED_MODULE_1_lib_utils_env__["a" /* isDev */])()) {
            window.__APP__ = {
                store
            };
        }
    }
    else {
        store = Object(__WEBPACK_IMPORTED_MODULE_2_redux__["createStore"])((state, action) => state, {
            configurator: {},
        }, Object(__WEBPACK_IMPORTED_MODULE_2_redux__["applyMiddleware"])(sagaMiddleware));
        sagaMiddleware.run(rootSaga);
    }
    Object(__WEBPACK_IMPORTED_MODULE_0_app_utils_redux_reducersRegistry__["a" /* initReducersRegistry */])(store);
    // registerReducer(STORE_CONTEXT_STORE_KEY, storeContextReducer);
    // registerReducer(PRODUCTS_STORE_KEY, productsReducer);
    // registerReducer(CONFIGURATOR_STORE_KEY, configuratorReducer);
    // registerReducer(CART_STORE_KEY, cartReducer);
    return store;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;

/**
 * For testing purposes - allows temporarily override store with mocked one.
 * Use redux-mock-store package for mocking store of your needs
 */
const overrideStoreInstance = (storeMock) => {
    store = storeMock;
};
/* unused harmony export overrideStoreInstance */



/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const NODE_ENV_DEVELOPMENT = 'development';
const isDev = () => "development" === NODE_ENV_DEVELOPMENT;
/* harmony export (immutable) */ __webpack_exports__["a"] = isDev;



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_io__ = __webpack_require__(11);
/* unused harmony reexport take */
/* unused harmony reexport takem */
/* unused harmony reexport put */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["b"]; });
/* unused harmony reexport race */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["c"]; });
/* unused harmony reexport apply */
/* unused harmony reexport cps */
/* unused harmony reexport fork */
/* unused harmony reexport spawn */
/* unused harmony reexport join */
/* unused harmony reexport cancel */
/* unused harmony reexport select */
/* unused harmony reexport actionChannel */
/* unused harmony reexport cancelled */
/* unused harmony reexport flush */
/* unused harmony reexport getContext */
/* unused harmony reexport setContext */
/* unused harmony reexport takeEvery */
/* unused harmony reexport takeLatest */
/* unused harmony reexport throttle */


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BUFFER_OVERFLOW */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buffers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);


var BUFFER_OVERFLOW = "Channel's Buffer overflow!";

var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;

var zeroBuffer = { isEmpty: __WEBPACK_IMPORTED_MODULE_0__utils__["k" /* kTrue */], put: __WEBPACK_IMPORTED_MODULE_0__utils__["m" /* noop */], take: __WEBPACK_IMPORTED_MODULE_0__utils__["m" /* noop */] };

function ringBuffer() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var overflowAction = arguments[1];

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];
    while (length) {
      items.push(take());
    }
    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit = void 0;
        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);
          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;
          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;

            arr = flush();

            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;

            arr.length = doubledLimit;
            limit = doubledLimit;

            push(it);
            break;
          default:
          // DROP
        }
      }
    },
    take: take,
    flush: flush
  };
}

var buffers = {
  none: function none() {
    return zeroBuffer;
  },
  fixed: function fixed(limit) {
    return ringBuffer(limit, ON_OVERFLOW_THROW);
  },
  dropping: function dropping(limit) {
    return ringBuffer(limit, ON_OVERFLOW_DROP);
  },
  sliding: function sliding(limit) {
    return ringBuffer(limit, ON_OVERFLOW_SLIDE);
  },
  expanding: function expanding(initialSize) {
    return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
  }
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_components_HomePage__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_components_OrganisationPage__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_error_ErrorPage__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_error_NotFoundPage__ = __webpack_require__(229);




const routes = [
    {
        component: __WEBPACK_IMPORTED_MODULE_0_app_components_HomePage__["a" /* default */],
        path: '/',
        exact: true,
        initialData: __WEBPACK_IMPORTED_MODULE_0_app_components_HomePage__["b" /* homePageQueries */]
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_1_app_components_OrganisationPage__["a" /* default */],
        path: '/organisation/:orgName',
        exact: true,
        initialData: __WEBPACK_IMPORTED_MODULE_1_app_components_OrganisationPage__["b" /* organisationPageQueries */],
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_2_components_error_ErrorPage__["a" /* default */],
        path: '/error',
        exact: true
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_3_components_error_NotFoundPage__["a" /* default */],
        path: '/404',
        exact: true
    }
];
/* harmony default export */ __webpack_exports__["a"] = (routes);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(40),
    baseRest = __webpack_require__(41),
    customDefaultsMerge = __webpack_require__(91),
    mergeWith = __webpack_require__(139);

/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaults
 * @example
 *
 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = baseRest(function(args) {
  args.push(undefined, customDefaultsMerge);
  return apply(mergeWith, undefined, args);
});

module.exports = defaultsDeep;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(42),
    overRest = __webpack_require__(79),
    setToString = __webpack_require__(80);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(22);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(92),
    assignMergeValue = __webpack_require__(48),
    baseFor = __webpack_require__(115),
    baseMergeDeep = __webpack_require__(117),
    isObject = __webpack_require__(2),
    keysIn = __webpack_require__(57),
    safeGet = __webpack_require__(55);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(22),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(103),
    mapCacheDelete = __webpack_require__(110),
    mapCacheGet = __webpack_require__(112),
    mapCacheHas = __webpack_require__(113),
    mapCacheSet = __webpack_require__(114);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(25),
    eq = __webpack_require__(15);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(125);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(126),
    isObjectLike = __webpack_require__(6);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(5),
    stubFalse = __webpack_require__(128);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(130),
    baseUnary = __webpack_require__(131),
    nodeUtil = __webpack_require__(132);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  return key == '__proto__'
    ? undefined
    : object[key];
}

module.exports = safeGet;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(25),
    eq = __webpack_require__(15);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(135),
    baseKeysIn = __webpack_require__(137),
    isArrayLike = __webpack_require__(26);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = restEndpoint

const _ = __webpack_require__(9)
const urlTemplate = __webpack_require__(146)

const addQueryParameters = __webpack_require__(147)
const extractUrlVariableNames = __webpack_require__(148)

const DEFAULTS = module.exports.DEFAULTS = __webpack_require__(149)
const NON_PARAMETERS = [
  'request',
  'baseUrl'
]

function restEndpoint (options) {
  options = _.defaultsDeep({}, options, DEFAULTS)
  let method = options.method
  let baseUrl = options.baseUrl
  let url = options.url
  let body = options.body
  let headers = options.headers
  let remainingOptions = _.omit(options, ['method', 'baseUrl', 'url', 'headers'])

  method = method.toLowerCase()
  headers = _.mapKeys(headers, (value, key) => key.toLowerCase())

  // replace :varname with {varname} to make it RFC 6570 compatible
  url = url.replace(/:(\w+)/g, '{+$1}')

  // extract variable names from URL to calculate remaining variables later
  const urlVariableNames = extractUrlVariableNames(url)

  url = urlTemplate.parse(url).expand(remainingOptions)

  if (!/^http/.test(url)) {
    url = (baseUrl) + url
  }

  const requestOptions = remainingOptions.request
  remainingOptions = _.omit(remainingOptions, _.intersection(Object.keys(options), urlVariableNames).concat(NON_PARAMETERS))

  if (method === 'get' || method === 'head') {
    url = addQueryParameters(url, remainingOptions)
  } else {
    if ('input' in remainingOptions) {
      body = remainingOptions.input
    } else {
      body = Object.keys(remainingOptions).length ? remainingOptions : undefined
    }
  }

  return Object.assign(requestOptions, {
    method,
    url,
    headers,
    body
  })
}


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("warning");

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);

const css = __webpack_require__(203);

const List = (props) => {
    const { className, items, itemRenderer } = props;
    const classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(css.List, className);
    const itemsComponent = items.map((item, key) => {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: css.listItem, key: key }, itemRenderer(item)));
    });
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: classes }, itemsComponent));
};
/* harmony default export */ __webpack_exports__["a"] = (List);


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);


const css = __webpack_require__(211);
const HeaderLevel2 = ({ className, children }) => {
    const classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(css.HeaderLevel2, className);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: classes }, children));
};
/* harmony default export */ __webpack_exports__["a"] = (HeaderLevel2);


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65);
module.exports = __webpack_require__(66);


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_data_store__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_renderApp__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_resolveInitialData__ = __webpack_require__(241);



const serverRenderer = ({ clientStats }) => (req, res) => {
    const store = Object(__WEBPACK_IMPORTED_MODULE_0_app_data_store__["a" /* configureStore */])(true);
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_resolveInitialData__["a" /* default */])(req.url, store).then((querierStore) => {
        res.send(Object(__WEBPACK_IMPORTED_MODULE_1__utils_renderApp__["a" /* default */])(req.url, store, querierStore, clientStats));
    }, (err) => {
        if (err.status === 404) {
            res.redirect('/404');
        }
        else {
            res.redirect('/error');
        }
    });
};
/* harmony default export */ __webpack_exports__["default"] = (serverRenderer);


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_utils_env__ = __webpack_require__(35);
/**
 * Reducers Registry - util to allow dynamic reducers addition. *
 */


class ReducersRegistry {
    constructor(_store) {
        this.reducers = {};
        this.store = null;
        this.store = _store;
    }
    // tslint:disable-next-line
    registerReducer(key, reducer) {
        this.reducers[key] = reducer;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_lib_utils_env__["a" /* isDev */])()) {
            // tslint:disable-next-line
            console.info(`ReducersRegistry: new reducer registered under ${key}`);
        }
        if (this.store) {
            this.store.replaceReducer(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(this.reducers));
        }
    }
}
let reducersRegistry;
/**
 * Creates ReducersRegistry instance
 *
 * @param _store: Store<any>
 */
const initReducersRegistry = (_store) => reducersRegistry = new ReducersRegistry(_store);
/* harmony export (immutable) */ __webpack_exports__["a"] = initReducersRegistry;

/**
 * Registers new reducer under a defined key
 *
 * @param key - store key
 * @param reducer - reducer function
 */
const registerReducer = (key, reducer) => {
    if (!reducersRegistry) {
        throw new Error('Reducers registry not initialized');
    }
    reducersRegistry.registerReducer(key, reducer);
};
/* unused harmony export registerReducer */



/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export takeEvery */
/* unused harmony export takeLatest */
/* unused harmony export throttle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__takeEvery__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__takeLatest__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__throttle__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__takeEvery__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__takeLatest__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__throttle__["a"]; });






var deprecationWarning = function deprecationWarning(helperName) {
  return 'import { ' + helperName + ' } from \'redux-saga\' has been deprecated in favor of import { ' + helperName + ' } from \'redux-saga/effects\'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ' + helperName + ' will return task descriptor to your saga and execute next lines of code.';
};

var takeEvery = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__utils__["g" /* deprecate */])(__WEBPACK_IMPORTED_MODULE_0__takeEvery__["a" /* default */], /*#__PURE__*/deprecationWarning('takeEvery'));
var takeLatest = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__utils__["g" /* deprecate */])(__WEBPACK_IMPORTED_MODULE_1__takeLatest__["a" /* default */], /*#__PURE__*/deprecationWarning('takeLatest'));
var throttle = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__utils__["g" /* deprecate */])(__WEBPACK_IMPORTED_MODULE_2__throttle__["a" /* default */], /*#__PURE__*/deprecationWarning('throttle'));



/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeEvery;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fsmIterator__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(21);




function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["f" /* take */])(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: __WEBPACK_IMPORTED_MODULE_1__io__["e" /* fork */].apply(undefined, [worker].concat(args, [ac])) };
  };

  var action = void 0,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["a" /* default */])({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === __WEBPACK_IMPORTED_MODULE_2__channel__["a" /* END */] ? [__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["b" /* qEnd */]] : ['q1', yFork(action)];
    }
  }, 'q1', 'takeEvery(' + Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["c" /* safeName */])(patternOrChannel) + ', ' + worker.name + ')');
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = asap;
/* unused harmony export suspend */
/* unused harmony export flush */
var queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/
var semaphore = 0;

/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/
function exec(task) {
  try {
    suspend();
    task();
  } finally {
    release();
  }
}

/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/
function asap(task) {
  queue.push(task);

  if (!semaphore) {
    suspend();
    flush();
  }
}

/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/
function suspend() {
  semaphore++;
}

/**
  Puts the scheduler in a `released` state.
**/
function release() {
  semaphore--;
}

/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/
function flush() {
  release();

  var task = void 0;
  while (!semaphore && (task = queue.shift()) !== undefined) {
    exec(task);
  }
}

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeLatest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fsmIterator__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(21);




function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["f" /* take */])(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: __WEBPACK_IMPORTED_MODULE_1__io__["e" /* fork */].apply(undefined, [worker].concat(args, [ac])) };
  };
  var yCancel = function yCancel(task) {
    return { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["d" /* cancel */])(task) };
  };

  var task = void 0,
      action = void 0;
  var setTask = function setTask(t) {
    return task = t;
  };
  var setAction = function setAction(ac) {
    return action = ac;
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["a" /* default */])({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === __WEBPACK_IMPORTED_MODULE_2__channel__["a" /* END */] ? [__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["b" /* qEnd */]] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
    },
    q3: function q3() {
      return ['q1', yFork(action), setTask];
    }
  }, 'q1', 'takeLatest(' + Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["c" /* safeName */])(patternOrChannel) + ', ' + worker.name + ')');
}

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throttle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fsmIterator__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buffers__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(4);






function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action = void 0,
      channel = void 0;

  var yActionChannel = { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["a" /* actionChannel */])(pattern, __WEBPACK_IMPORTED_MODULE_3__buffers__["a" /* buffers */].sliding(1)) };
  var yTake = function yTake() {
    return { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["f" /* take */])(channel) };
  };
  var yFork = function yFork(ac) {
    return { done: false, value: __WEBPACK_IMPORTED_MODULE_1__io__["e" /* fork */].apply(undefined, [worker].concat(args, [ac])) };
  };
  var yDelay = { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["c" /* call */])(__WEBPACK_IMPORTED_MODULE_4__utils__["f" /* delay */], delayLength) };

  var setAction = function setAction(ac) {
    return action = ac;
  };
  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["a" /* default */])({
    q1: function q1() {
      return ['q2', yActionChannel, setChannel];
    },
    q2: function q2() {
      return ['q3', yTake(), setAction];
    },
    q3: function q3() {
      return action === __WEBPACK_IMPORTED_MODULE_2__channel__["a" /* END */] ? [__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["b" /* qEnd */]] : ['q4', yFork(action)];
    },
    q4: function q4() {
      return ['q2', yDelay];
    }
  }, 'q1', 'throttle(' + Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["c" /* safeName */])(pattern) + ', ' + worker.name + ')');
}

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_App__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_universal_component_server__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_universal_component_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_universal_component_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_webpack_flush_chunks__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_webpack_flush_chunks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_webpack_flush_chunks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_querier__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_querier___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_querier__);








const renderApp = (url, store, querier, clientStats) => {
    try {
        const app = __WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"](__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_querier__["QuerierProvider"], { querier: querier },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_redux__["Provider"], { store: store },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_router__["StaticRouter"], { location: url, context: {} },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_components_App__["a" /* default */], null)))));
        const chunkNames = Object(__WEBPACK_IMPORTED_MODULE_5_react_universal_component_server__["flushChunkNames"])();
        const { js, styles, cssHash } = __WEBPACK_IMPORTED_MODULE_6_webpack_flush_chunks___default()(clientStats, { chunkNames });
        return (`<!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Querier demo</title>
            ${styles}
          </head>
          <body>
            <div id="root">${app}</div>
            ${cssHash}
            <script>
              window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}
              window.__PRELOADED_DATA__ = ${JSON.stringify(querier.getStore()).replace(/</g, '\\u003c')}
            </script>
            ${js}
          </body>
      </html>`);
    }
    catch (e) {
        // tslint:disable-next-line
        console.log(e);
        throw e;
    }
};
/* harmony default export */ __webpack_exports__["a"] = (renderApp);


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_routes__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_config__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_config__);



const css = __webpack_require__(230);
class App extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: css.App }, Object(__WEBPACK_IMPORTED_MODULE_2_react_router_config__["renderRoutes"])(__WEBPACK_IMPORTED_MODULE_0_app_routes__["a" /* default */]))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_services_octokit__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ui_kit_SearchBox_SearchBox__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_ui_kit_SearchResults_SearchResults__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_json_tree__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_json_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_json_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_querier__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_querier___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_querier__);






class HomePage extends __WEBPACK_IMPORTED_MODULE_3_react__["Component"] {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(query) {
        if (this.props.actionQueries && this.props.actionQueries.searchOrganisation) {
            this.props.actionQueries.searchOrganisation(query);
        }
    }
    renderResults() {
        if (this.props.states.searchOrganisation && this.props.states.searchOrganisation.error) {
            return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_json_tree___default.a, { data: this.props.states.searchOrganisation.error });
        }
        if (this.props.results.searchOrganisation) {
            return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_app_ui_kit_SearchResults_SearchResults__["a" /* default */], { results: this.props.results.searchOrganisation.items.filter((o) => o.type !== 'User') }));
        }
        return undefined;
    }
    render() {
        const status = this.props.states.searchOrganisation && this.props.states.searchOrganisation.state;
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_app_ui_kit_SearchBox_SearchBox__["a" /* default */], { onSubmit: this.handleSubmit, status: status }),
            this.renderResults()));
    }
}
const homePageQueries = {
    actionQueries: {
        searchOrganisation: {
            query: __WEBPACK_IMPORTED_MODULE_0_app_services_octokit__["e" /* searchOrganisation */],
            hot: false
        }
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = homePageQueries;

const HomePageWithData = Object(__WEBPACK_IMPORTED_MODULE_5_querier__["withData"])(homePageQueries)(HomePage);
const HomePageRoute = () => __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](HomePageWithData, null);
/* harmony default export */ __webpack_exports__["a"] = (HomePageRoute);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = GitHubApi

const defaultsDeep = __webpack_require__(39)
const Hook = __webpack_require__(142)

const parseClientOptions = __webpack_require__(143)
const request = __webpack_require__(145)
const ENDPOINT_DEFAULTS = __webpack_require__(58).DEFAULTS

const PLUGINS = [
  __webpack_require__(158),
  __webpack_require__(161),
  __webpack_require__(177)
]

function GitHubApi (options) {
  const defaults = defaultsDeep(parseClientOptions(options), ENDPOINT_DEFAULTS)

  const hook = new Hook()
  const api = {
    // NOTE: github.hook, github.plugin and github.request are experimental APIs
    //       at this point and can change at any time
    hook,
    plugin: (pluginFunction) => pluginFunction(api),
    request: (options) => api.hook('request', defaultsDeep(options, defaults), request)
  }

  PLUGINS.forEach(api.plugin)

  return api
}


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(40);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(81),
    shortOut = __webpack_require__(90);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(82),
    defineProperty = __webpack_require__(43),
    identity = __webpack_require__(42);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(23),
    isMasked = __webpack_require__(86),
    isObject = __webpack_require__(2),
    toSource = __webpack_require__(88);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(24);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(87);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 88 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(45),
    isObject = __webpack_require__(2);

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}

module.exports = customDefaultsMerge;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(13),
    stackClear = __webpack_require__(98),
    stackDelete = __webpack_require__(99),
    stackGet = __webpack_require__(100),
    stackHas = __webpack_require__(101),
    stackSet = __webpack_require__(102);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(14);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(14);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(14);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(14);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(13);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(13),
    Map = __webpack_require__(46),
    MapCache = __webpack_require__(47);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(104),
    ListCache = __webpack_require__(13),
    Map = __webpack_require__(46);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(105),
    hashDelete = __webpack_require__(106),
    hashGet = __webpack_require__(107),
    hashHas = __webpack_require__(108),
    hashSet = __webpack_require__(109);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(16);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(16);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(16);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(16);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(17);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(17);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(17);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(17);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(116);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(48),
    cloneBuffer = __webpack_require__(118),
    cloneTypedArray = __webpack_require__(119),
    copyArray = __webpack_require__(122),
    initCloneObject = __webpack_require__(123),
    isArguments = __webpack_require__(51),
    isArray = __webpack_require__(8),
    isArrayLikeObject = __webpack_require__(127),
    isBuffer = __webpack_require__(53),
    isFunction = __webpack_require__(23),
    isObject = __webpack_require__(2),
    isPlainObject = __webpack_require__(129),
    isTypedArray = __webpack_require__(54),
    safeGet = __webpack_require__(55),
    toPlainObject = __webpack_require__(133);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(5);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module)))

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(120);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(121);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 122 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(124),
    getPrototype = __webpack_require__(49),
    isPrototype = __webpack_require__(50);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(26),
    isObjectLike = __webpack_require__(6);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    getPrototype = __webpack_require__(49),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isLength = __webpack_require__(52),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(44);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module)))

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(134),
    keysIn = __webpack_require__(57);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(56),
    baseAssignValue = __webpack_require__(25);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(136),
    isArguments = __webpack_require__(51),
    isArray = __webpack_require__(8),
    isBuffer = __webpack_require__(53),
    isIndex = __webpack_require__(27),
    isTypedArray = __webpack_require__(54);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 136 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2),
    isPrototype = __webpack_require__(50),
    nativeKeysIn = __webpack_require__(138);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 138 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(45),
    createAssigner = __webpack_require__(140);

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

module.exports = mergeWith;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(41),
    isIterateeCall = __webpack_require__(141);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(15),
    isArrayLike = __webpack_require__(26),
    isIndex = __webpack_require__(27),
    isObject = __webpack_require__(2);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = require("before-after-hook");

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = parseOptions

const _ = __webpack_require__(9)

const DEFAULTS = __webpack_require__(144)
const OPTION_NAMES = [
  'timeout',
  'host',
  'pathPrefix',
  'protocol',
  'port',
  'proxy',
  'ca',
  'headers',
  'requestMedia',
  'rejectUnauthorized',
  'family'
]

function parseOptions (options) {
  if (!options) {
    options = {}
  }

  if ('followRedirects' in options) {
    console.warn('DEPRECATED: followRedirects option is no longer supported. All redirects are followed correctly')
  }

  if ('Promise' in options) {
    console.warn('DEPRECATED: Promise option is no longer supported. The native Promise API is used')
  }

  options = _.defaults(_.pick(options, OPTION_NAMES), DEFAULTS)

  const defaults = {
    headers: options.headers,
    request: {
      ca: options.ca,
      family: options.family,
      proxy: options.proxy,
      rejectUnauthorized: options.rejectUnauthorized,
      timeout: options.timeout
    }
  }

  defaults.baseUrl = `${options.protocol}://${options.host}`

  if (options.port) {
    defaults.baseUrl += `:${options.port}`
  }

  // Check if a prefix is passed in the options and strip any leading or trailing slashes from it.
  if (options.pathPrefix) {
    defaults.baseUrl += '/' + options.pathPrefix.replace(/(^[/]+|[/]+$)/g, '')
  }

  return defaults
}


/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = {
  ca: undefined,
  family: undefined, // 4 for v4, 6 for v6
  headers: {},
  host: 'api.github.com',
  pathPrefix: '', // for GitHub Enterprise
  port: undefined,
  protocol: 'https',
  proxy: undefined,
  rejectUnauthorized: true,
  requestMedia: 'application/vnd.github.v3+json',
  timeout: 0
}


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = restRequest

const restEndpoint = __webpack_require__(58)
const request = __webpack_require__(151)

function restRequest (endpointOptions) {
  const requestOptions = restEndpoint(endpointOptions)
  return request(requestOptions)
}


/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = require("url-template");

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = addQueryParameters

function addQueryParameters (url, parameters) {
  const separator = /\?/.test(url) ? '&' : '?'
  const names = Object.keys(parameters)

  if (names.length === 0) {
    return url
  }

  return url + separator + names
    .map(name => {
      if (name === 'q') {
        return 'q=' + parameters.q.split('+')
          .map(encodeURIComponent)
          .join('+')
      }

      return `${name}=${encodeURIComponent(parameters[name])}`
    })
    .join('&')
}


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = extractUrlVariableName

const _ = __webpack_require__(9)

const urlVariableRegex = /\{[^}]+\}/g
function extractUrlVariableName (url) {
  const matches = url.match(urlVariableRegex)

  if (!matches) {
    return []
  }

  return _.flatten(matches.map(removeNonChars))
}

function removeNonChars (variableName) {
  return variableName.replace(/^\W+|\W+$/g, '').split(/,/)
}


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

const pkg = __webpack_require__(150)

module.exports = {
  method: 'get',
  baseUrl: 'https://api.github.com',
  headers: {
    accept: 'application/vnd.github.v3+json',
    'user-agent': `octokit/rest.js v${pkg.version}`
  },
  request: {}
}


/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = {"_args":[["@octokit/rest@14.0.9","/Users/dominik/Projects/research/querier-ssr"]],"_from":"@octokit/rest@14.0.9","_id":"@octokit/rest@14.0.9","_inBundle":false,"_integrity":"sha512-irP9phKfTXEZIcW2R+VNCtGHZJrXMWmSYp6RRfFn4BtAqtDRXF5z9JxCEQlAhNBf6X1koNi5k49tIAAAEJNlVQ==","_location":"/@octokit/rest","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"@octokit/rest@14.0.9","name":"@octokit/rest","escapedName":"@octokit%2frest","scope":"@octokit","rawSpec":"14.0.9","saveSpec":null,"fetchSpec":"14.0.9"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/@octokit/rest/-/rest-14.0.9.tgz","_spec":"14.0.9","_where":"/Users/dominik/Projects/research/querier-ssr","apidoc":{"template":{"withCompare":false}},"author":{"name":"Gregor Martynus","url":"https://github.com/gr2m"},"bugs":{"url":"https://github.com/octokit/rest.js/issues"},"contributors":[{"name":"Mike de Boer","email":"info@mikedeboer.nl"},{"name":"Fabian Jakobs","email":"fabian@c9.io"},{"name":"Joe Gallo","email":"joe@brassafrax.com"},{"name":"Gregor Martynus","url":"https://github.com/gr2m"}],"dependencies":{"before-after-hook":"^1.1.0","debug":"^3.1.0","is-array-buffer":"^1.0.0","is-stream":"^1.1.0","lodash":"^4.17.4","url-template":"^2.0.8"},"description":"GitHub REST API client for Node.js","devDependencies":{"@octokit/fixtures":"^6.0.0","apidoc":"^0.17.6","chai":"^4.1.2","coveralls":"^3.0.0","dotenv":"^5.0.0","gh-pages-with-token":"^1.0.0","glob":"^7.1.2","mkdirp":"^0.5.1","mocha":"^5.0.0","mustache":"^2.2.1","nock":"^9.1.0","npm-run-all":"^4.1.1","nyc":"^11.2.1","proxyquire":"^1.8.0","semantic-release":"^12.2.2","simple-mock":"^0.8.0","standard":"^10.0.3","standard-markdown":"^4.0.2","string-to-arraybuffer":"^1.0.0","typescript":"^2.6.2"},"engines":{"node":">=4"},"files":["index.js","index.d.ts","index.js.flow","lib"],"homepage":"https://github.com/octokit/rest.js#readme","keywords":["octokit","github","rest","api-client"],"license":"MIT","name":"@octokit/rest","nyc":{"ignore":["examples","test"]},"publishConfig":{"access":"public"},"repository":{"type":"git","url":"git+https://github.com/octokit/rest.js.git"},"scripts":{"build":"npm-run-all build:*","build:docs":"node scripts/generate-api-docs","build:flow":"node scripts/generate-flow-types","build:ts":"node scripts/generate-typescript-types","coverage":"nyc report --reporter=html && open coverage/index.html","coverage:upload":"nyc report --reporter=text-lcov | coveralls","deploy-docs":"gh-pages-with-token -d doc","postbuild:docs":"apidoc -i doc/ -o doc/","prebuild:docs":"mkdirp doc/","pretest":"standard && standard-markdown","prevalidate:ts":"npm run -s build:ts","semantic-release":"semantic-release","test":"nyc mocha 'test/**/*-test.js'","test:examples":"node test/examples.js","validate:ts":"tsc --target es6 index.d.ts"},"types":"index.d.ts","version":"14.0.9"}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = httpRequest

const url = __webpack_require__(152)
const http = __webpack_require__(153)
const https = __webpack_require__(154)

const _ = __webpack_require__(9)
const debug = __webpack_require__(155)('octokit:rest')
const isArrayBuffer = __webpack_require__(156)
const isStream = __webpack_require__(157)

const HttpError = __webpack_require__(28)

function httpRequest (requestOptions) {
  requestOptions = Object.assign(
    url.parse(requestOptions.url),
    _.pick(requestOptions, 'method', 'body', 'headers', 'ca', 'family', 'proxy', 'rejectUnauthorized', 'timeout')
  )
  debug('REQUEST:', requestOptions)

  // calculate content length unless body is a stream, in which case the
  // content length is already set per option
  if (requestOptions.body && !isStream(requestOptions.body)) {
    // stringify body unless it’s an ArrayBuffer
    if (!isArrayBuffer(requestOptions.body) && !Buffer.isBuffer(requestOptions.body) && typeof requestOptions.body !== 'string') {
      requestOptions.body = JSON.stringify(requestOptions.body)
    }

    _.defaults(requestOptions.headers, {
      'content-type': 'application/json; charset=utf-8',
      'content-length': Buffer.byteLength(requestOptions.body, 'utf8')
    })
  }

  // GitHub expects "content-length: 0" header for PUT/PATCH requests without body
  if (['patch', 'put'].indexOf(requestOptions.method) >= 0 &&
      !requestOptions.headers['content-length']) {
    requestOptions.headers['content-length'] = 0
  }

  if ('content-length' in requestOptions.headers) {
    requestOptions.headers['content-length'] = parseInt(requestOptions.headers['content-length'], 10)
  }

  const reqModule = requestOptions.protocol === 'http:' ? http : https
  delete requestOptions.protocol

  return new Promise((resolve, reject) => {
    const request = reqModule.request(requestOptions, (response) => {
      debug('STATUS: ' + response.statusCode)
      debug('HEADERS: ' + JSON.stringify(response.headers))

      response.setEncoding('utf8')
      let data = ''
      response.on('data', (chunk) => {
        data += chunk
      })

      /* istanbul ignore next */
      response.on('error', (error) => {
        reject(new HttpError(error.message, 500))
      })
      response.on('end', () => {
        if (response.statusCode !== 304 && response.statusCode >= 301 && response.statusCode <= 307) {
          requestOptions.url = response.headers.location
          httpRequest(requestOptions).then(resolve, reject)
          return
        }

        if (response.statusCode === 304 || response.statusCode >= 400 || response.statusCode < 10) {
          reject(new HttpError(data, response.statusCode, response.headers))
          return
        }

        const contentType = response.headers['content-type']
        if (contentType && contentType.indexOf('application/json') !== -1) {
          data = data && JSON.parse(data)
        }

        resolve({
          meta: response.headers,
          data
        })
      })
    })

    let aborted
    request.on('error', (error) => {
      if (aborted) return
      debug('REQUEST ERROR: ' + error.message)
      reject(new HttpError(error.message, 500))
    })

    if (requestOptions.timeout) {
      request.setTimeout(requestOptions.timeout)
    }
    request.on('timeout', () => {
      debug('REQUEST ERROR: timed out')
      request.abort()
      aborted = true
      reject(new HttpError('Request timeout', 504))
    })

    if (requestOptions.body) {
      if (isStream(requestOptions.body)) {
        return requestOptions.body.pipe(request)
      }

      request.write(Buffer.from(requestOptions.body))
    }

    request.end()
  })
}


/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = require("is-array-buffer");

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = require("is-stream");

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = authenticationPlugin

const authenticate = __webpack_require__(159)
const beforeRequest = __webpack_require__(160)

function authenticationPlugin (octokit) {
  const state = {
    auth: false
  }
  octokit.authenticate = authenticate.bind(null, state)
  octokit.hook.before('request', beforeRequest.bind(null, state))
}


/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = authenticate

function authenticate (state, options) {
  if (!options) {
    state.auth = false
    return
  }

  switch (options.type) {
    case 'basic':
      if (!options.username || !options.password) {
        throw new Error('Basic authentication requires both a username and password to be set')
      }
      break

    case 'oauth':
      if (!options.token && !(options.key && options.secret)) {
        throw new Error('OAuth2 authentication requires a token or key & secret to be set')
      }
      break

    case 'token':
    case 'integration':
      if (!options.token) {
        throw new Error('Token authentication requires a token to be set')
      }
      break

    default:
      throw new Error("Invalid authentication type, must be 'basic', 'integration', or 'oauth'")
  }

  state.auth = options
}


/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = authenticationBeforeRequest

function authenticationBeforeRequest (state, options) {
  if (!state.auth.type) {
    return
  }

  if (state.auth.type === 'basic') {
    const hash = Buffer.from(
      `${state.auth.username}:${state.auth.password}`, 'ascii'
    ).toString('base64')
    options.headers['authorization'] = `Basic ${hash}`
    return
  }

  if (state.auth.type === 'token') {
    options.headers['authorization'] = `token ${state.auth.token}`
    return
  }

  if (state.auth.type === 'integration') {
    options.headers['authorization'] = `Bearer ${state.auth.token}`
    options.headers['accept'] = 'application/vnd.github.machine-man-preview+json'
    return
  }

  options.url += options.url.indexOf('?') === -1 ? '?' : '&'

  if (state.auth.token) {
    options.url += `access_token=${encodeURIComponent(state.auth.token)}`
    return
  }

  const key = encodeURIComponent(state.auth.key)
  const secret = encodeURIComponent(state.auth.secret)
  options.url += `client_id=${key}&client_secret=${secret}`
}


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = apiPlugin

const _ = __webpack_require__(9)

const method = __webpack_require__(162)
const deprecate = __webpack_require__(175)

const ENDPOINT_DEFAULTS = __webpack_require__(176)

function apiPlugin (octokit) {
  Object.keys(ENDPOINT_DEFAULTS).forEach(namespaceName => {
    octokit[namespaceName] = {}

    Object.keys(ENDPOINT_DEFAULTS[namespaceName]).forEach(apiName => {
      const apiOptions = ENDPOINT_DEFAULTS[namespaceName][apiName]
      const endpointDefaults = _.pick(apiOptions, ['method', 'url', 'headers', 'request'])

      octokit[namespaceName][apiName] = method.bind(null, octokit, endpointDefaults, apiOptions.params)

      // log deprecation warning for APIs flagged as deprecated
      if (apiOptions.deprecated) {
        octokit[namespaceName][apiName] = deprecate(
          octokit[namespaceName][apiName],
          apiOptions.deprecated
        )
      }
    })
  })
}


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = apiMethod

const defaultsDeep = __webpack_require__(39)

const validate = __webpack_require__(163)

function apiMethod (octokit, endpointDefaults, endpointParams, options, callback) {
  const endpointOptions = defaultsDeep(options, endpointDefaults)

  const promise = Promise.resolve(endpointOptions)
    .then(validate.bind(null, endpointParams))
    .then(octokit.request)

  if (callback) {
    promise.then(callback.bind(null, null), callback)
    return
  }

  return promise
}


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = validate

const set = __webpack_require__(164)
const HttpError = __webpack_require__(28)

function validate (endpointParams, options) {
  Object.keys(endpointParams).forEach(parameterName => {
    const parameter = endpointParams[parameterName]
    const expectedType = parameter.type
    let value = options[parameterName]

    const paramIsPresent = parameterName in options
    const paramIsNull = value === null

    if (!parameter.required && !paramIsPresent) {
      return
    }

    if (parameter['allow-null'] === true && paramIsNull) {
      return
    }

    if ((parameter.required && !paramIsPresent) ||
        (parameter['allow-null'] === false && paramIsNull)) {
      throw new HttpError(`Empty value for parameter '${parameterName}': ${value}`, 400)
    }

    if (parameter.enum) {
      if (parameter.enum.indexOf(value) === -1) {
        throw new HttpError(`Invalid value for parameter '${parameterName}': ${value}`, 400)
      }
    }

    if (parameter.validation) {
      const regex = new RegExp(parameter.validation)
      if (!regex.test(value)) {
        throw new HttpError(`Invalid value for parameter '${parameterName}': ${value}`, 400)
      }
    }

    if (expectedType === 'number') {
      value = parseInt(value, 10)
      if (isNaN(value)) {
        throw new HttpError(`Invalid value for parameter '${parameterName}': ${options[parameterName]} is NaN`, 400)
      }
    }

    if (expectedType === 'json' && typeof value === 'string') {
      try {
        value = JSON.parse(value)
      } catch (exception) {
        throw new HttpError(`JSON parse error of value for parameter '${parameterName}': ${value}`, 400)
      }
    }

    set(options, parameter.mapTo || parameterName, value)
  })

  return options
}


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(165);

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(56),
    castPath = __webpack_require__(166),
    isIndex = __webpack_require__(27),
    isObject = __webpack_require__(2),
    toKey = __webpack_require__(174);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(8),
    isKey = __webpack_require__(167),
    stringToPath = __webpack_require__(168),
    toString = __webpack_require__(171);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(8),
    isSymbol = __webpack_require__(29);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(169);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(170);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(47);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(172);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(24),
    arrayMap = __webpack_require__(173),
    isArray = __webpack_require__(8),
    isSymbol = __webpack_require__(29);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 173 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(29);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = deprecate

function deprecate (func, message) {
  return function () {
    const caller = (new Error()).stack.split('\n')[2]
    console.warn('DEPRECATED: ' + message)
    console.warn(caller)

    return func.apply(null, arguments)
  }
}


/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = {"authorization":{"get":{"url":"/authorizations/:id","method":"GET","params":{"id":{"type":"string","required":true}},"description":"Get a single authorization."},"create":{"url":"/authorizations","method":"POST","params":{"scopes":{"type":"string[]","description":"A list of scopes that this authorization is in."},"note":{"type":"string","description":"A note to remind you what the OAuth token is for."},"note_url":{"type":"string","description":"A URL to remind you what app the OAuth token is for."},"client_id":{"type":"string","description":"The 20 character OAuth app client key for which to create the token."},"client_secret":{"type":"string","description":"The 40 character OAuth app client secret for which to create the token."},"fingerprint":{"type":"string","description":"A unique string to distinguish an authorization from others created for the same client ID and user."}},"description":"Create a new authorization."},"update":{"url":"/authorizations/:id","method":"PATCH","params":{"id":{"type":"string","required":true},"scopes":{"type":"string[]","description":"A list of scopes that this authorization is in."},"add_scopes":{"type":"string[]","description":"A list of scopes to add to this authorization."},"remove_scopes":{"type":"string[]","description":"A list of scopes to remove from this authorization."},"note":{"type":"string","description":"A note to remind you what the OAuth token is for."},"note_url":{"type":"string","description":"A URL to remind you what app the OAuth token is for."},"fingerprint":{"type":"string","description":"A unique string to distinguish an authorization from others created for the same client ID and user."}},"description":"Update an existing authorization."},"delete":{"url":"/authorizations/:id","method":"DELETE","params":{"id":{"type":"string","required":true}},"description":"Delete an authorization."},"check":{"url":"/applications/:client_id/tokens/:access_token","method":"GET","params":{"client_id":{"type":"string","description":"The 20 character OAuth app client key for which to create the token."},"access_token":{"type":"string","required":true,"description":"OAuth token"}},"description":"Check an authorization"},"reset":{"url":"/applications/:client_id/tokens/:access_token","method":"POST","params":{"client_id":{"type":"string","description":"The 20 character OAuth app client key for which to create the token."},"access_token":{"type":"string","required":true,"description":"OAuth token"}},"description":"Reset an authorization"},"revoke":{"url":"/applications/:client_id/tokens/:access_token","method":"DELETE","params":{"client_id":{"type":"string","description":"The 20 character OAuth app client key for which to create the token."},"access_token":{"type":"string","required":true,"description":"OAuth token"}},"description":"Revoke an authorization for an application"},"getGrants":{"url":"/applications/grants","method":"GET","params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List your grants."},"getGrant":{"url":"/applications/grants/:id","method":"GET","params":{"id":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get a single grant."},"deleteGrant":{"url":"/applications/grants/:id","method":"DELETE","params":{"id":{"type":"string","required":true}},"description":"Delete a grant."},"getAll":{"url":"/authorizations","method":"GET","params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List your authorizations."},"getOrCreateAuthorizationForApp":{"url":"/authorizations/clients/:client_id","method":"PUT","params":{"client_id":{"type":"string","description":"The 20 character OAuth app client key for which to create the token."},"client_secret":{"type":"string","required":true,"description":"The 40 character OAuth app client secret associated with the client ID specified in the URL."},"scopes":{"type":"string[]","description":"A list of scopes that this authorization is in."},"note":{"type":"string","description":"A note to remind you what the OAuth token is for."},"note_url":{"type":"string","description":"A URL to remind you what app the OAuth token is for."},"fingerprint":{"type":"string","description":"A unique string to distinguish an authorization from others created for the same client ID and user."}},"description":"Get or create an authorization for a specific app."},"getOrCreateAuthorizationForAppAndFingerprint":{"url":"/authorizations/clients/:client_id/:fingerprint","method":"PUT","params":{"client_id":{"type":"string","description":"The 20 character OAuth app client key for which to create the token."},"fingerprint":{"type":"string","description":"A unique string to distinguish an authorization from others created for the same client ID and user."},"client_secret":{"type":"string","required":true,"description":"The 40 character OAuth app client secret associated with the client ID specified in the URL."},"scopes":{"type":"string[]","description":"A list of scopes that this authorization is in."},"note":{"type":"string","description":"A note to remind you what the OAuth token is for."},"note_url":{"type":"string","description":"A URL to remind you what app the OAuth token is for."}},"description":"Get or create an authorization for a specific app and fingerprint."},"revokeGrant":{"url":"/applications/:client_id/grants/:access_token","method":"DELETE","params":{"client_id":{"type":"string","description":"The 20 character OAuth app client key for which to create the token."},"access_token":{"type":"string","required":true,"description":"OAuth token"}},"description":"Revoke a grant for an application"}},"activity":{"getEvents":{"url":"/events","method":"GET","params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List public events"},"getEventsForRepo":{"url":"/repos/:owner/:repo/events","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List repository events"},"getEventsForRepoIssues":{"url":"/repos/:owner/:repo/issues/events","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List issue events for a repository"},"getEventsForRepoNetwork":{"url":"/networks/:owner/:repo/events","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List public events for a network of repositories"},"getEventsForOrg":{"url":"/orgs/:org/events","method":"GET","params":{"org":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List public events for an organization"},"getEventsReceived":{"url":"/users/:username/received_events","method":"GET","params":{"username":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List events that a user has received"},"getEventsReceivedPublic":{"url":"/users/:username/received_events/public","method":"GET","params":{"username":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List public events that a user has received"},"getEventsForUser":{"url":"/users/:username/events","method":"GET","params":{"username":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List events performed by a user"},"getEventsForUserPublic":{"url":"/users/:username/events/public","method":"GET","params":{"username":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List public events performed by a user"},"getEventsForUserOrg":{"url":"/users/:username/events/orgs/:org","method":"GET","params":{"username":{"type":"string","required":true},"org":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List events for a user's organization"},"getFeeds":{"url":"/feeds","method":"GET","params":{},"description":"Get all feeds available for the authenticated user."},"getNotifications":{"url":"/notifications","method":"GET","params":{"all":{"type":"boolean","default":"false","description":"If true, show notifications marked as read. Default: false"},"participating":{"type":"boolean","default":"false","description":"If true, only shows notifications in which the user is directly participating or mentioned. Default: false"},"since":{"type":"date","description":"Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ"},"before":{"type":"string","description":"Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ."}},"description":"Get all notifications for the current user, grouped by repository."},"getNotificationsForUser":{"url":"/repos/:owner/:repo/notifications","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"all":{"type":"boolean","default":"false","description":"If true, show notifications marked as read. Default: false"},"participating":{"type":"boolean","default":"false","description":"If true, only shows notifications in which the user is directly participating or mentioned. Default: false"},"since":{"type":"date","description":"Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ"},"before":{"type":"string","description":"Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ."}},"description":"Get all notifications for the given user."},"markNotificationsAsRead":{"url":"/notifications","method":"PUT","params":{"last_read_at":{"type":"string","default":"Time.now","description":"Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now"}},"description":"Mark notifications as read for authenticated user."},"markNotificationsAsReadForRepo":{"url":"/repos/:owner/:repo/notifications","method":"PUT","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"last_read_at":{"type":"string","default":"Time.now","description":"Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now"}},"description":"Mark notifications in a repo as read."},"getNotificationThread":{"url":"/notifications/threads/:id","method":"GET","params":{"id":{"type":"string","required":true}},"description":"View a single notification thread."},"markNotificationThreadAsRead":{"url":"/notifications/threads/:id","method":"PATCH","params":{"id":{"type":"string","required":true}},"description":"Mark a notification thread as read."},"checkNotificationThreadSubscription":{"url":"/notifications/threads/:id/subscription","method":"GET","params":{"id":{"type":"string","required":true}},"description":"Check to see if the current user is subscribed to a thread."},"setNotificationThreadSubscription":{"url":"/notifications/threads/:id/subscription","method":"PUT","params":{"id":{"type":"string","required":true},"subscribed":{"type":"boolean","description":"Determines if notifications should be received from this thread"},"ignored":{"type":"boolean","description":"Determines if all notifications should be blocked from this thread"}},"description":"This lets you subscribe or unsubscribe from a conversation. Unsubscribing from a conversation mutes all future notifications (until you comment or get @mentioned once more)."},"deleteNotificationThreadSubscription":{"url":"/notifications/threads/:id/subscription","method":"DELETE","params":{"id":{"type":"string","required":true}},"description":"Delete a notification thread subscription."},"getStargazersForRepo":{"url":"/repos/:owner/:repo/stargazers","method":"GET","headers":{"accept":"application/vnd.github.v3.star+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List Stargazers"},"getStarredReposForUser":{"url":"/users/:username/starred","method":"GET","headers":{"accept":"application/vnd.github.v3.star+json"},"params":{"username":{"type":"string","required":true},"sort":{"type":"string","enum":["created","updated"],"default":"created"},"direction":{"type":"string","enum":["asc","desc"],"default":"desc"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List repositories being starred by a user"},"getStarredRepos":{"url":"/user/starred","method":"GET","headers":{"accept":"application/vnd.github.v3.star+json"},"params":{"sort":{"type":"string","enum":["created","updated"],"default":"created"},"direction":{"type":"string","enum":["asc","desc"],"default":"desc"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List repositories being starred by the authenticated user"},"checkStarringRepo":{"url":"/user/starred/:owner/:repo","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Check if you are starring a repository"},"starRepo":{"url":"/user/starred/:owner/:repo","method":"PUT","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Star a repository"},"unstarRepo":{"url":"/user/starred/:owner/:repo","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Unstar a repository"},"getWatchersForRepo":{"url":"/repos/:owner/:repo/subscribers","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get watchers for repository."},"getWatchedReposForUser":{"url":"/users/:username/subscriptions","method":"GET","params":{"username":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List repositories being watched by a user."},"getWatchedRepos":{"url":"/user/subscriptions","method":"GET","params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List repositories being watched by the authenticated user."},"getRepoSubscription":{"url":"/repos/:owner/:repo/subscription","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get a Repository Subscription."},"setRepoSubscription":{"url":"/repos/:owner/:repo/subscription","method":"PUT","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"subscribed":{"type":"boolean","description":"Determines if notifications should be received from this repository."},"ignored":{"type":"boolean","description":"Determines if all notifications should be blocked from this repository."}},"description":"Set a Repository Subscription"},"unwatchRepo":{"url":"/repos/:owner/:repo/subscription","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Unwatch a repository."}},"gists":{"get":{"url":"/gists/:id","method":"GET","params":{"id":{"type":"string","required":true}},"description":"Get a single gist"},"create":{"url":"/gists","method":"POST","params":{"files":{"type":"json","required":true,"description":"Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'"},"description":{"type":"string"},"public":{"type":"boolean","required":true}},"description":"Create a gist"},"edit":{"url":"/gists/:id","method":"PATCH","params":{"id":{"type":"string","required":true},"description":{"type":"string"},"files":{"type":"json","required":true,"description":"Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'"},"content":{"type":"string","description":"Updated file contents."},"filename":{"type":"string","description":"New name for this file."}},"description":"Edit a gist"},"star":{"url":"/gists/:id/star","method":"PUT","params":{"id":{"type":"string","required":true}},"description":"Star a gist"},"unstar":{"url":"/gists/:id/star","method":"DELETE","params":{"id":{"type":"string","required":true}},"description":"Unstar a gist"},"fork":{"url":"/gists/:id/forks","method":"POST","params":{"id":{"type":"string","required":true}},"description":"Fork a gist"},"delete":{"url":"/gists/:id","method":"DELETE","params":{"id":{"type":"string","required":true}},"description":"Delete a gist"},"getForUser":{"url":"/users/:username/gists","method":"GET","params":{"username":{"type":"string","required":true},"since":{"type":"date","description":"Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List a user's gists"},"getAll":{"url":"/gists","method":"GET","params":{"since":{"type":"date","description":"Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List the authenticated user's gists or if called anonymously, this will return all public gists"},"getPublic":{"url":"/gists/public","method":"GET","params":{"since":{"type":"date","description":"Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ"}},"description":"List all public gists"},"getStarred":{"url":"/gists/starred","method":"GET","params":{"since":{"type":"date","description":"Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ"}},"description":"List the authenticated user's starred gists"},"getRevision":{"url":"/gists/:id/:sha","method":"GET","params":{"id":{"type":"string","required":true},"sha":{"type":"string","required":true}},"description":"Get a specific revision of a gist"},"getCommits":{"url":"/gists/:id/commits","method":"GET","params":{"id":{"type":"string","required":true}},"description":"List gist commits"},"checkStar":{"url":"/gists/:id/star","method":"GET","params":{"id":{"type":"string","required":true}},"description":"Check if a gist is starred"},"getForks":{"url":"/gists/:id/forks","method":"GET","params":{"id":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List gist forks"},"getComments":{"url":"/gists/:gist_id/comments","method":"GET","params":{"gist_id":{"type":"string","required":true,"description":"Id (SHA1 hash) of the gist."}},"description":"List comments on a gist"},"getComment":{"url":"/gists/:gist_id/comments/:id","method":"GET","params":{"gist_id":{"type":"string","required":true,"description":"Id (SHA1 hash) of the gist."},"id":{"type":"string","required":true}},"description":"Get a single comment"},"createComment":{"url":"/gists/:gist_id/comments","method":"POST","params":{"gist_id":{"type":"string","required":true,"description":"Id (SHA1 hash) of the gist."},"body":{"type":"string","required":true}},"description":"Create a comment"},"editComment":{"url":"/gists/:gist_id/comments/:id","method":"PATCH","params":{"gist_id":{"type":"string","required":true,"description":"Id (SHA1 hash) of the gist."},"id":{"type":"string","required":true},"body":{"type":"string","required":true}},"description":"Edit a comment"},"deleteComment":{"url":"/gists/:gist_id/comments/:id","method":"DELETE","params":{"gist_id":{"type":"string","required":true,"description":"Id (SHA1 hash) of the gist."},"id":{"type":"string","required":true}},"description":"Delete a comment"}},"gitdata":{"getBlob":{"url":"/repos/:owner/:repo/git/blobs/:sha","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"sha":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get a Blob"},"createBlob":{"url":"/repos/:owner/:repo/git/blobs","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"content":{"type":"string","required":true,"allow-empty":true},"encoding":{"type":"string","required":true}},"description":"Create a Blob"},"getCommit":{"url":"/repos/:owner/:repo/git/commits/:sha","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"sha":{"type":"string","required":true}},"description":"Get a Commit"},"createCommit":{"url":"/repos/:owner/:repo/git/commits","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"message":{"type":"string","required":true,"description":"String of the commit message"},"tree":{"type":"string","required":true,"description":"String of the SHA of the tree object this commit points to"},"parents":{"type":"string[]","required":true,"description":"Array of the SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided, for a merge commit, an array of more than one should be provided."},"author":{"type":"json"},"committer":{"type":"json"}},"description":"Create a Commit"},"getCommitSignatureVerification":{"url":"/repos/:owner/:repo/git/commits/:sha","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"sha":{"type":"string","required":true}},"description":"Get a Commit Signature Verification. (In preview period. See README.)"},"getReference":{"url":"/repos/:owner/:repo/git/refs/:ref","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"ref":{"type":"string","required":true,"allow-empty":true,"description":"String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected."}},"description":"Get a Reference"},"getReferences":{"url":"/repos/:owner/:repo/git/refs","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get all References"},"getTags":{"url":"/repos/:owner/:repo/git/refs/tags","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get all tag References"},"createReference":{"url":"/repos/:owner/:repo/git/refs","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"ref":{"type":"string","required":true,"description":"The name of the fully qualified reference (ie: refs/heads/master). If it doesn't start with 'refs' and have at least two slashes, it will be rejected. NOTE: After creating the reference, on calling (get|update|delete)Reference, drop the leading 'refs/' when providing the 'ref' param."},"sha":{"type":"string","required":true}},"description":"Create a Reference"},"updateReference":{"url":"/repos/:owner/:repo/git/refs/:ref","method":"PATCH","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"ref":{"type":"string","required":true,"allow-empty":true,"description":"String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected."},"sha":{"type":"string","required":true},"force":{"type":"boolean","default":"false","description":"Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work."}},"description":"Update a Reference"},"deleteReference":{"url":"/repos/:owner/:repo/git/refs/:ref","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"ref":{"type":"string","required":true,"allow-empty":true,"description":"String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected."}},"description":"Delete a Reference"},"getTag":{"url":"/repos/:owner/:repo/git/tags/:sha","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"sha":{"type":"string","required":true}},"description":"Get a Tag"},"createTag":{"url":"/repos/:owner/:repo/git/tags","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"tag":{"type":"string","required":true,"description":"String of the tag"},"message":{"type":"string","required":true,"description":"String of the tag message"},"object":{"type":"string","required":true,"description":"String of the SHA of the git object this is tagging"},"type":{"type":"string","required":true,"description":"String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob."},"tagger":{"type":"json","required":true,"description":"JSON object that contains the following keys: `name` - String of the name of the author of the tag, `email` - String of the email of the author of the tag, `date` - Timestamp of when this object was tagged"}},"description":"Create a Tag Object"},"getTagSignatureVerification":{"url":"/repos/:owner/:repo/git/tags/:sha","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"sha":{"type":"string","required":true}},"description":"Get a Tag Signature Verification. (In preview period. See README.)"},"getTree":{"url":"/repos/:owner/:repo/git/trees/:sha","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"sha":{"type":"string","required":true},"recursive":{"type":"boolean"}},"description":"Get a Tree"},"createTree":{"url":"/repos/:owner/:repo/git/trees","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"tree":{"type":"json","required":true,"description":"Array of Hash objects (of path, mode, type and sha) specifying a tree structure"},"base_tree":{"type":"string","description":"String of the SHA1 of the tree you want to update with new data"}},"description":"Create a Tree"}},"integrations":{"getInstallations":{"url":"/app/installations","method":"GET","deprecated":"`integrations` has been renamed to `apps`","headers":{"accept":"application/vnd.github.machine-man-preview"},"params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List the app's installations. (In preview period. See README.)"},"createInstallationToken":{"url":"/installations/:installation_id/access_tokens","method":"POST","deprecated":"`integrations` has been renamed to `apps`","headers":{"accept":"application/vnd.github.machine-man-preview"},"params":{"installation_id":{"type":"string","required":true},"user_id":{"type":"string","description":"The id of the user for whom the app is acting on behalf of."}},"description":"Create a new installation token. (In preview period. See README.)"},"getInstallationRepositories":{"url":"/installation/repositories","method":"GET","deprecated":"`integrations` has been renamed to `apps`","headers":{"accept":"application/vnd.github.machine-man-preview"},"params":{"user_id":{"type":"string","description":"The integer ID of a user, to filter results to repositories that are visible to both the installation and the given user."}},"description":"List repositories that are accessible to the authenticated installation. (In preview period. See README.)"},"addRepoToInstallation":{"url":"/installations/:installation_id/repositories/:repository_id","method":"PUT","deprecated":"`integrations` has been renamed to `apps`","headers":{"accept":"application/vnd.github.machine-man-preview"},"params":{"installation_id":{"type":"string","required":true},"repository_id":{"type":"string","required":true}},"description":"Add a single repository to an installation. (In preview period. See README.)"},"removeRepoFromInstallation":{"url":"/installations/:installation_id/repositories/:repository_id","method":"DELETE","deprecated":"`integrations` has been renamed to `apps`","headers":{"accept":"application/vnd.github.machine-man-preview"},"params":{"installation_id":{"type":"string","required":true},"repository_id":{"type":"string","required":true}},"description":"Remove a single repository from an installation. (In preview period. See README.)"}},"apps":{"get":{"url":"/app","method":"GET","params":{},"description":"Get the authenticated GitHub App. (In preview period. See README.)"},"getForSlug":{"url":"/apps/:app_slug","method":"GET","headers":{"accept":"application/vnd.github.machine-man-preview"},"params":{"app_slug":{"type":"string","required":true,"description":"The URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., https://github.com/settings/apps/:app_slug)."}},"description":"Get a single GitHub App. (In preview period. See README.)"},"getInstallations":{"url":"/app/installations","method":"GET","headers":{"accept":"application/vnd.github.machine-man-preview"},"params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List the app's installations. (In preview period. See README.)"},"getInstallation":{"url":"/app/installations/:installation_id","method":"GET","headers":{"accept":"application/vnd.github.machine-man-preview"},"params":{"installation_id":{"type":"string","required":true}},"description":"Get a single installation. (In preview period. See README.)"},"createInstallationToken":{"url":"/installations/:installation_id/access_tokens","method":"POST","headers":{"accept":"application/vnd.github.machine-man-preview"},"params":{"installation_id":{"type":"string","required":true},"user_id":{"type":"string","description":"The id of the user for whom the app is acting on behalf of."}},"description":"Create a new installation token. (In preview period. See README.)"},"getInstallationRepositories":{"url":"/installation/repositories","method":"GET","headers":{"accept":"application/vnd.github.machine-man-preview"},"params":{"user_id":{"type":"string","description":"The integer ID of a user, to filter results to repositories that are visible to both the installation and the given user."}},"description":"List repositories that are accessible to the authenticated installation. (In preview period. See README.)"},"addRepoToInstallation":{"url":"/installations/:installation_id/repositories/:repository_id","method":"PUT","headers":{"accept":"application/vnd.github.machine-man-preview"},"params":{"installation_id":{"type":"string","required":true},"repository_id":{"type":"string","required":true}},"description":"Add a single repository to an installation. (In preview period. See README.)"},"removeRepoFromInstallation":{"url":"/installations/:installation_id/repositories/:repository_id","method":"DELETE","headers":{"accept":"application/vnd.github.machine-man-preview"},"params":{"installation_id":{"type":"string","required":true},"repository_id":{"type":"string","required":true}},"description":"Remove a single repository from an installation. (In preview period. See README.)"},"getMarketplaceListingPlans":{"url":"/marketplace_listing/plans","method":"GET","headers":{"accept":"application/vnd.github.valkyrie-preview+json"},"params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List all plans for your Marketplace listing. (In preview period. See README.)"},"getMarketplaceListingStubbedPlans":{"url":"/marketplace_listing/stubbed/plans","method":"GET","headers":{"accept":"application/vnd.github.valkyrie-preview+json"},"params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List all stubbed plans for your Marketplace listing. (In preview period. See README.)"},"getMarketplaceListingPlanAccounts":{"url":"/marketplace_listing/plans/:id/accounts","method":"GET","headers":{"accept":"application/vnd.github.valkyrie-preview+json"},"params":{"id":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List all GitHub accounts (user or organization) on a specific plan. (In preview period. See README.)"},"getMarketplaceListingStubbedPlanAccounts":{"url":"/marketplace_listing/stubbed/plans/:id/accounts","method":"GET","headers":{"accept":"application/vnd.github.valkyrie-preview+json"},"params":{"id":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List all GitHub accounts (user or organization) on a specific stubbed plan. (In preview period. See README.)"},"checkMarketplaceListingAccount":{"url":"/marketplace_listing/accounts/:id","method":"GET","headers":{"accept":"application/vnd.github.valkyrie-preview+json"},"params":{"id":{"type":"string","required":true}},"description":"Check if a GitHub account is associated with any Marketplace listing. (In preview period. See README.)"},"checkMarketplaceListingStubbedAccount":{"url":"/marketplace_listing/stubbed/accounts/:id","method":"GET","headers":{"accept":"application/vnd.github.valkyrie-preview+json"},"params":{"id":{"type":"string","required":true}},"description":"Check if a stubbed GitHub account is associated with any Marketplace listing. (In preview period. See README.)"}},"issues":{"get":{"url":"/repos/:owner/:repo/issues/:number","method":"GET","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true}},"description":"Get a single issue"},"create":{"url":"/repos/:owner/:repo/issues","method":"POST","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"title":{"type":"string","required":true},"body":{"type":"string"},"assignee":{"type":"string","description":"Login for the user that this issue should be assigned to."},"milestone":{"type":"number","description":"Milestone to associate this issue with."},"labels":{"type":"string[]","description":"Array of strings - Labels to associate with this issue."},"assignees":{"type":"string[]","description":"Logins for Users to assign to this issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise."}},"description":"Create an issue"},"edit":{"url":"/repos/:owner/:repo/issues/:number","method":"PATCH","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"title":{"type":"string"},"body":{"type":"string"},"assignee":{"type":"string","description":"Login for the user that this issue should be assigned to."},"state":{"type":"string","enum":["open","closed"],"default":"open","description":"open or closed"},"milestone":{"type":"number","description":"Milestone to associate this issue with."},"labels":{"type":"string[]","description":"Array of strings - Labels to associate with this issue."},"assignees":{"type":"string[]","description":"Logins for Users to assign to this issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise."}},"description":"Edit an issue"},"lock":{"url":"/repos/:owner/:repo/issues/:number/lock","method":"PUT","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true}},"description":"Users with push access can lock an issue's conversation."},"unlock":{"url":"/repos/:owner/:repo/issues/:number/lock","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true}},"description":"Users with push access can unlock an issue's conversation."},"getAll":{"url":"/issues","method":"GET","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"filter":{"type":"string","enum":["all","assigned","created","mentioned","subscribed"]},"state":{"type":"string","enum":["open","closed","all"],"default":"open","description":"open, closed, or all"},"labels":{"type":"string","description":"String list of comma separated Label names. Example: bug,ui,@high"},"sort":{"type":"string","enum":["created","updated","comments"],"default":"created"},"direction":{"type":"string","enum":["asc","desc"],"default":"desc"},"since":{"type":"date","description":"Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List all issues across all the authenticated user's visible repositories including owned repositories, member repositories, and organization repositories"},"getForUser":{"url":"/user/issues","method":"GET","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"filter":{"type":"string","enum":["all","assigned","created","mentioned","subscribed"]},"state":{"type":"string","enum":["open","closed","all"],"default":"open","description":"open, closed, or all"},"labels":{"type":"string","description":"String list of comma separated Label names. Example: bug,ui,@high"},"sort":{"type":"string","enum":["created","updated","comments"],"default":"created"},"direction":{"type":"string","enum":["asc","desc"],"default":"desc"},"since":{"type":"date","description":"Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List all issues across owned and member repositories for the authenticated user"},"getForOrg":{"url":"/orgs/:org/issues","method":"GET","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"org":{"type":"string","required":true},"filter":{"type":"string","enum":["all","assigned","created","mentioned","subscribed"]},"state":{"type":"string","enum":["open","closed","all"],"default":"open","description":"open, closed, or all"},"labels":{"type":"string","description":"String list of comma separated Label names. Example: bug,ui,@high"},"sort":{"type":"string","enum":["created","updated","comments"],"default":"created"},"direction":{"type":"string","enum":["asc","desc"],"default":"desc"},"since":{"type":"date","description":"Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List all issues for a given organization for the authenticated user"},"getForRepo":{"url":"/repos/:owner/:repo/issues","method":"GET","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"milestone":{"type":"string","validation":"^([0-9]+|none|\\*)$"},"state":{"type":"string","enum":["open","closed","all"],"default":"open","description":"open, closed, or all"},"assignee":{"type":"string","description":"String User login, `none` for Issues with no assigned User. `*` for Issues with any assigned User."},"creator":{"type":"string","description":"The user that created the issue."},"mentioned":{"type":"string","description":"String User login."},"labels":{"type":"string","description":"String list of comma separated Label names. Example: bug,ui,@high"},"sort":{"type":"string","enum":["created","updated","comments"],"default":"created"},"direction":{"type":"string","enum":["asc","desc"],"default":"desc"},"since":{"type":"date","description":"Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List issues for a repository"},"getAssignees":{"url":"/repos/:owner/:repo/assignees","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"List assignees"},"checkAssignee":{"url":"/repos/:owner/:repo/assignees/:assignee","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"assignee":{"type":"string","required":true,"description":"Login for the user that this issue should be assigned to."}},"description":"Check assignee"},"addAssigneesToIssue":{"url":"/repos/:owner/:repo/issues/:number/assignees","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"assignees":{"type":"string[]","required":true,"description":"Logins for the users that should be added to the issue."}},"description":"Add assignees to an issue."},"removeAssigneesFromIssue":{"url":"/repos/:owner/:repo/issues/:number/assignees","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"body":{"type":"json","required":true}},"description":"Remove assignees from an issue."},"getComments":{"url":"/repos/:owner/:repo/issues/:number/comments","method":"GET","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"since":{"type":"date","description":"Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List comments on an issue"},"getCommentsForRepo":{"url":"/repos/:owner/:repo/issues/comments","method":"GET","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"sort":{"type":"string","enum":["created","updated"],"default":"created"},"direction":{"type":"string","enum":["asc","desc"],"default":"desc"},"since":{"type":"date","description":"Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List comments in a repository"},"getComment":{"url":"/repos/:owner/:repo/issues/comments/:id","method":"GET","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Get a single comment"},"createComment":{"url":"/repos/:owner/:repo/issues/:number/comments","method":"POST","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"body":{"type":"string","required":true}},"description":"Create a comment"},"editComment":{"url":"/repos/:owner/:repo/issues/comments/:id","method":"PATCH","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true},"body":{"type":"string","required":true}},"description":"Edit a comment"},"deleteComment":{"url":"/repos/:owner/:repo/issues/comments/:id","method":"DELETE","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Delete a comment"},"getEvents":{"url":"/repos/:owner/:repo/issues/:issue_number/events","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"issue_number":{"type":"number","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List events for an issue"},"getEventsForRepo":{"url":"/repos/:owner/:repo/issues/events","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List events for a repository"},"getEvent":{"url":"/repos/:owner/:repo/issues/events/:id","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Get a single event"},"getLabels":{"url":"/repos/:owner/:repo/labels","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List all labels for this repository"},"getLabel":{"url":"/repos/:owner/:repo/labels/:name","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"name":{"type":"string","required":true}},"description":"Get a single label"},"createLabel":{"url":"/repos/:owner/:repo/labels","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"name":{"type":"string","required":true},"color":{"type":"string","required":true,"description":"6 character hex code, without a leading #."}},"description":"Create a label"},"updateLabel":{"url":"/repos/:owner/:repo/labels/:oldname","method":"PATCH","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"oldname":{"type":"string","required":true,"description":"The old name of the label."},"name":{"type":"string","required":true,"description":"The new name of the label."},"color":{"type":"string","required":true,"description":"6 character hex code, without a leading #."}},"description":"Update a label"},"deleteLabel":{"url":"/repos/:owner/:repo/labels/:name","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"name":{"type":"string","required":true}},"description":"Delete a label"},"getIssueLabels":{"url":"/repos/:owner/:repo/issues/:number/labels","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true}},"description":"List labels on an issue"},"addLabels":{"url":"/repos/:owner/:repo/issues/:number/labels","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"labels":{"type":"string[]","required":true,"mapTo":"input"}},"description":"Add labels to an issue"},"removeLabel":{"url":"/repos/:owner/:repo/issues/:number/labels/:name","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"name":{"type":"string","required":true}},"description":"Remove a label from an issue"},"replaceAllLabels":{"url":"/repos/:owner/:repo/issues/:number/labels","method":"PUT","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"labels":{"type":"string[]","required":true,"mapTo":"input","description":"Sending an empty array ([]) will remove all Labels from the Issue."}},"description":"Replace all labels for an issue"},"removeAllLabels":{"url":"/repos/:owner/:repo/issues/:number/labels","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true}},"description":"Remove all labels from an issue"},"getMilestoneLabels":{"url":"/repos/:owner/:repo/milestones/:number/labels","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true}},"description":"Get labels for every issue in a milestone"},"getMilestones":{"url":"/repos/:owner/:repo/milestones","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"state":{"type":"string","enum":["open","closed","all"],"default":"open"},"sort":{"type":"string","enum":["due_on","completeness"],"default":"due_on","description":"due_on, completeness, default: due_on"},"direction":{"type":"string","enum":["asc","desc"],"default":"asc"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List milestones for a repository"},"getMilestone":{"url":"/repos/:owner/:repo/milestones/:number","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true}},"description":"Get a single milestone"},"createMilestone":{"url":"/repos/:owner/:repo/milestones","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"title":{"type":"string","required":true},"state":{"type":"string","enum":["open","closed","all"],"default":"open"},"description":{"type":"string"},"due_on":{"type":"date","description":"Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ"}},"description":"Create a milestone"},"updateMilestone":{"url":"/repos/:owner/:repo/milestones/:number","method":"PATCH","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"title":{"type":"string","required":true},"state":{"type":"string","enum":["open","closed","all"],"default":"open"},"description":{"type":"string"},"due_on":{"type":"date","description":"Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ"}},"description":"Update a milestone"},"deleteMilestone":{"url":"/repos/:owner/:repo/milestones/:number","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true}},"description":"Delete a milestone"},"getEventsTimeline":{"url":"/repos/:owner/:repo/issues/:issue_number/timeline","method":"GET","headers":{"accept":"application/vnd.github.mockingbird-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"issue_number":{"type":"number","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List events for an issue. (In preview period. See README.)"}},"migrations":{"startMigration":{"url":"/orgs/:org/migrations","method":"POST","headers":{"accept":"application/vnd.github.wyandotte-preview+json"},"params":{"org":{"type":"string","required":true},"repositories":{"type":"string[]","required":true,"description":"A list of arrays indicating which repositories should be migrated."},"lock_repositories":{"type":"boolean","default":"false","description":"Indicates whether repositories should be locked (to prevent manipulation) while migrating data. Default: false."},"exclude_attachments":{"type":"boolean","default":"false","description":"Indicates whether attachments should be excluded from the migration (to reduce migration archive file size). Default: false."}},"description":"Start a migration. (In preview period. See README.)"},"getMigrations":{"url":"/orgs/:org/migrations","method":"GET","headers":{"accept":"application/vnd.github.wyandotte-preview+json"},"params":{"org":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get a list of migrations. (In preview period. See README.)"},"getMigrationStatus":{"url":"/orgs/:org/migrations/:id","method":"GET","headers":{"accept":"application/vnd.github.wyandotte-preview+json"},"params":{"org":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Get the status of a migration. (In preview period. See README.)"},"getMigrationArchiveLink":{"url":"/orgs/:org/migrations/:id/archive","method":"GET","headers":{"accept":"application/vnd.github.wyandotte-preview+json"},"params":{"org":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Get the URL to a migration archive. (In preview period. See README.)"},"deleteMigrationArchive":{"url":"/orgs/:org/migrations/:id/archive","method":"DELETE","headers":{"accept":"application/vnd.github.wyandotte-preview+json"},"params":{"org":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Delete a migration archive. (In preview period. See README.)"},"unlockRepoLockedForMigration":{"url":"/orgs/:org/migrations/:id/repos/:repo_name/lock","method":"DELETE","headers":{"accept":"application/vnd.github.wyandotte-preview+json"},"params":{"org":{"type":"string","required":true},"id":{"type":"string","required":true},"repo_name":{"type":"string","required":true}},"description":"Unlock a repository that was locked for migration. (In preview period. See README.)"},"startImport":{"url":"/repos/:owner/:repo/import","method":"PUT","headers":{"accept":"application/vnd.github.barred-rock-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"vcs_url":{"type":"string","required":true,"description":"The URL of the originating repository."},"vcs":{"type":"string","enum":["subversion","git","mercurial","tfvc"],"description":"The originating VCS type. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response."},"vcs_username":{"type":"string","description":"If authentication is required, the username to provide to vcs_url."},"vcs_password":{"type":"string","description":"If authentication is required, the password to provide to vcs_url."},"tfvc_project":{"type":"string","description":"For a tfvc import, the name of the project that is being imported."}},"description":"Start an import. (In preview period. See README.)"},"getImportProgress":{"url":"/repos/:owner/:repo/import","method":"GET","headers":{"accept":"application/vnd.github.barred-rock-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Get import progress. (In preview period. See README.)"},"updateImport":{"url":"/repos/:owner/:repo/import","method":"PATCH","headers":{"accept":"application/vnd.github.barred-rock-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"vcs_username":{"type":"string","description":"The username to provide to the originating repository."},"vcs_password":{"type":"string","description":"The password to provide to the originating repository."}},"description":"Update existing import. (In preview period. See README.)"},"getImportCommitAuthors":{"url":"/repos/:owner/:repo/import/authors","method":"GET","headers":{"accept":"application/vnd.github.barred-rock-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"since":{"type":"string","description":"Only authors found after this id are returned. Provide the highest author ID you've seen so far. New authors may be added to the list at any point while the importer is performing the raw step."}},"description":"Get import commit authors. (In preview period. See README.)"},"mapImportCommitAuthor":{"url":"/repos/:owner/:repo/import/authors/:author_id","method":"PATCH","headers":{"accept":"application/vnd.github.barred-rock-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"author_id":{"type":"string","required":true,"description":"The commit author id."},"email":{"type":"string","description":"The new Git author email."},"name":{"type":"string","description":"The new Git author name."}},"description":"Map a commit author. (In preview period. See README.)"},"setImportLfsPreference":{"url":"/:owner/:name/import/lfs","method":"PATCH","headers":{"accept":"application/vnd.github.barred-rock-preview"},"params":{"owner":{"type":"string","required":true},"name":{"type":"string","required":true},"use_lfs":{"type":"string","required":true,"description":"Can be one of `opt_in` (large files will be stored using Git LFS) or `opt_out` (large files will be removed during the import)."}},"description":"Set import LFS preference. (In preview period. See README.)"},"getLargeImportFiles":{"url":"/:owner/:name/import/large_files","method":"GET","headers":{"accept":"application/vnd.github.barred-rock-preview"},"params":{"owner":{"type":"string","required":true},"name":{"type":"string","required":true}},"description":"List files larger than 100MB found during the import. (In preview period. See README.)"},"cancelImport":{"url":"/repos/:owner/:repo/import","method":"DELETE","headers":{"accept":"application/vnd.github.barred-rock-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Cancel an import. (In preview period. See README.)"}},"misc":{"getCodesOfConduct":{"url":"/codes_of_conduct","method":"GET","headers":{"accept":"application/vnd.github.scarlet-witch-preview+json"},"params":{},"description":"List all codes of conduct. (In preview period. See README.)"},"getCodeOfConduct":{"url":"/codes_of_conduct/:key","method":"GET","headers":{"accept":"application/vnd.github.scarlet-witch-preview+json"},"params":{"key":{"type":"string","required":true,"description":"Ex: contributor_covenant"}},"description":"Get an code of conduct. (In preview period. See README.)"},"getRepoCodeOfConduct":{"url":"/repos/:owner/:repo/community/code_of_conduct","method":"GET","headers":{"accept":"application/vnd.github.scarlet-witch-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Get the contents of a repository's code of conduct. (In preview period. See README.)"},"getEmojis":{"url":"/emojis","method":"GET","params":{},"description":"Lists all the emojis available to use on GitHub."},"getGitignoreTemplates":{"url":"/gitignore/templates","method":"GET","params":{},"description":"Lists available gitignore templates"},"getGitignoreTemplate":{"url":"/gitignore/templates/:name","method":"GET","params":{"name":{"type":"string","required":true,"description":"The name of the .gitignore template to get e.g. 'C'"}},"description":"Get a single gitignore template"},"getLicenses":{"url":"/licenses","method":"GET","headers":{"accept":"application/vnd.github.drax-preview+json"},"params":{},"description":"List all licenses. (In preview period. See README.)"},"getLicense":{"url":"/licenses/:license","method":"GET","headers":{"accept":"application/vnd.github.drax-preview+json"},"params":{"license":{"type":"string","required":true,"description":"Ex: /licenses/mit"}},"description":"Get an individual license. (In preview period. See README.)"},"getRepoLicense":{"url":"/repos/:owner/:repo/license","method":"GET","headers":{"accept":"application/vnd.github.drax-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Get the contents of a repository's license. (In preview period. See README.)"},"renderMarkdown":{"url":"/markdown","method":"POST","params":{"text":{"type":"string","required":true,"description":"The Markdown text to render"},"mode":{"type":"string","enum":["markdown","gfm"],"default":"markdown","description":"The rendering mode, `markdown` to render a document as plain Markdown, just like README files are rendered. `gfm` to render a document as user-content, e.g. like user comments or issues are rendered. In GFM mode, hard line breaks are always taken into account, and issue and user mentions are linked accordingly."},"context":{"type":"string","description":"The repository context. Only taken into account when rendering as `gfm`"}},"description":"Render an arbitrary Markdown document"},"renderMarkdownRaw":{"url":"/markdown/raw","method":"POST","headers":{"content-type":"text/plain; charset=utf-8"},"params":{"data":{"type":"string","required":true,"mapTo":"input","description":"Raw data to send as the body of the request"}},"description":"Render a Markdown document in raw mode"},"getMeta":{"url":"/meta","method":"GET","params":{},"description":"This endpoint provides information about GitHub.com, the service. Or, if you access this endpoint on your organization's GitHub Enterprise installation, this endpoint provides information about that installation."},"getRateLimit":{"url":"/rate_limit","method":"GET","params":{},"description":"Get your current rate limit status"}},"orgs":{"get":{"url":"/orgs/:org","method":"GET","params":{"org":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get an organization"},"update":{"url":"/orgs/:org","method":"PATCH","params":{"org":{"type":"string","required":true},"billing_email":{"type":"string","description":"Billing email address. This address is not publicized."},"company":{"type":"string","description":"The company name."},"email":{"type":"string","description":"The publicly visible email address."},"location":{"type":"string","description":"The location."},"name":{"type":"string","description":"The shorthand name of the company."},"description":{"type":"string","description":"The description of the company."},"default_repository_permission":{"type":"string","enum":["read","write","admin","none"],"default":"read","description":"Default permission level members have for organization repositories."},"members_can_create_repositories":{"type":"boolean","default":true,"description":"Toggles ability of non-admin organization members to create repositories."}},"description":"Edit an organization"},"getAll":{"url":"/organizations","method":"GET","params":{"since":{"type":"string","description":"The integer ID of the last Organization that you've seen."},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List all organizations"},"getForUser":{"url":"/users/:username/orgs","method":"GET","params":{"username":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List public organization memberships for the specified user."},"getMembers":{"url":"/orgs/:org/members","method":"GET","params":{"org":{"type":"string","required":true},"filter":{"type":"string","enum":["all","2fa_disabled"],"default":"all","description":"Filter members returned in the list."},"role":{"type":"string","enum":["all","admin","member"],"default":"all","description":"Filter members returned by their role."},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Members list"},"checkMembership":{"url":"/orgs/:org/members/:username","method":"GET","params":{"org":{"type":"string","required":true},"username":{"type":"string","required":true}},"description":"Check membership"},"removeMember":{"url":"/orgs/:org/members/:username","method":"DELETE","params":{"org":{"type":"string","required":true},"username":{"type":"string","required":true}},"description":"Remove a member"},"getPublicMembers":{"url":"/orgs/:org/public_members","method":"GET","params":{"org":{"type":"string","required":true}},"description":"Public members list"},"checkPublicMembership":{"url":"/orgs/:org/public_members/:username","method":"GET","params":{"org":{"type":"string","required":true},"username":{"type":"string","required":true}},"description":"Check public membership"},"publicizeMembership":{"url":"/orgs/:org/public_members/:username","method":"PUT","params":{"org":{"type":"string","required":true},"username":{"type":"string","required":true}},"description":"Publicize a user's membership"},"concealMembership":{"url":"/orgs/:org/public_members/:username","method":"DELETE","params":{"org":{"type":"string","required":true},"username":{"type":"string","required":true}},"description":"Conceal a user's membership"},"getOrgMembership":{"url":"/orgs/:org/memberships/:username","method":"GET","params":{"org":{"type":"string","required":true},"username":{"type":"string","required":true}},"description":"Get organization membership"},"addOrgMembership":{"url":"/orgs/:org/memberships/:username","method":"PUT","params":{"org":{"type":"string","required":true},"username":{"type":"string","required":true},"role":{"type":"string","required":true,"enum":["admin","member"],"default":"member","description":"The role to give the user in the organization."}},"description":"Add or update organization membership"},"removeOrgMembership":{"url":"/orgs/:org/memberships/:username","method":"DELETE","params":{"org":{"type":"string","required":true},"username":{"type":"string","required":true}},"description":"Remove organization membership"},"getPendingOrgInvites":{"url":"/orgs/:org/invitations","method":"GET","params":{"org":{"type":"string","required":true}},"description":"List pending organization invites."},"getOutsideCollaborators":{"url":"/orgs/:org/outside_collaborators","method":"GET","params":{"org":{"type":"string","required":true},"filter":{"type":"string","enum":["all","2fa_disabled"],"default":"all","description":"Filter the list of outside collaborators."},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List all users who are outside collaborators of an organization."},"removeOutsideCollaborator":{"url":"/orgs/:org/outside_collaborators/:username","method":"DELETE","params":{"org":{"type":"string","required":true},"username":{"type":"string","required":true}},"description":"Remove outside collaborator."},"convertMemberToOutsideCollaborator":{"url":"/orgs/:org/outside_collaborators/:username","method":"PUT","params":{"org":{"type":"string","required":true},"username":{"type":"string","required":true}},"description":"Convert member to outside collaborator."},"getTeams":{"url":"/orgs/:org/teams","method":"GET","headers":{"accept":"application/vnd.github.hellcat-preview+json"},"params":{"org":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List teams"},"getTeam":{"url":"/teams/:id","method":"GET","headers":{"accept":"application/vnd.github.hellcat-preview+json"},"params":{"id":{"type":"string","required":true}},"description":"Get team"},"createTeam":{"url":"/orgs/:org/teams","method":"POST","headers":{"accept":"application/vnd.github.hellcat-preview+json"},"params":{"org":{"type":"string","required":true},"name":{"type":"string","required":true},"description":{"type":"string","description":"The description of the team."},"maintainers":{"type":"string[]","description":"The logins of organization members to add as maintainers of the team."},"repo_names":{"type":"string[]","description":"The full name (e.g., \"organization-name/repository-name\") of repositories to add the team to."},"privacy":{"type":"string","enum":["secret","closed"],"default":"secret","description":"The level of privacy this team should have."},"parent_team_id":{"type":"string","description":"The ID of a team to set as the parent team."}},"description":"Create team"},"editTeam":{"url":"/teams/:id","method":"PATCH","headers":{"accept":"application/vnd.github.hellcat-preview+json"},"params":{"id":{"type":"string","required":true},"name":{"type":"string","required":true},"description":{"type":"string","description":"The description of the team."},"privacy":{"type":"string","enum":["secret","closed"],"default":"secret","description":"The level of privacy this team should have."},"parent_team_id":{"type":"string","description":"The ID of a team to set as the parent team."}},"description":"Edit team"},"deleteTeam":{"url":"/teams/:id","method":"DELETE","headers":{"accept":"application/vnd.github.hellcat-preview+json"},"params":{"id":{"type":"string","required":true}},"description":"Delete team"},"getTeamMembers":{"url":"/teams/:id/members","method":"GET","headers":{"accept":"application/vnd.github.hellcat-preview+json"},"params":{"id":{"type":"string","required":true},"role":{"type":"string","enum":["member","maintainer","all"],"default":"all","description":"Filters members returned by their role in the team."},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List team members"},"getChildTeams":{"url":"/teams/:id/teams","method":"GET","headers":{"accept":"application/vnd.github.hellcat-preview+json"},"params":{"id":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List child teams"},"getTeamMembership":{"url":"/teams/:id/memberships/:username","method":"GET","headers":{"accept":"application/vnd.github.hellcat-preview+json"},"params":{"id":{"type":"string","required":true},"username":{"type":"string","required":true}},"description":"Get team membership"},"addTeamMembership":{"url":"/teams/:id/memberships/:username","method":"PUT","headers":{"accept":"application/vnd.github.hellcat-preview+json"},"params":{"id":{"type":"string","required":true},"username":{"type":"string","required":true},"role":{"type":"string","enum":["member","maintainer"],"default":"member","description":"The role that this user should have in the team."}},"description":"Add team membership"},"removeTeamMembership":{"url":"/teams/:id/memberships/:username","method":"DELETE","headers":{"accept":"application/vnd.github.hellcat-preview+json"},"params":{"id":{"type":"string","required":true},"username":{"type":"string","required":true}},"description":"Remove team membership"},"getTeamRepos":{"url":"/teams/:id/repos","method":"GET","headers":{"accept":"application/vnd.github.hellcat-preview+json"},"params":{"id":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get team repos"},"getPendingTeamInvites":{"url":"/teams/:id/invitations","method":"GET","params":{"id":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List pending team invitations."},"checkTeamRepo":{"url":"/teams/:id/repos/:owner/:repo","method":"GET","headers":{"accept":"application/vnd.github.hellcat-preview+json"},"params":{"id":{"type":"string","required":true},"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Check if a team manages a repository"},"addTeamRepo":{"url":"/teams/:id/repos/:org/:repo","method":"PUT","headers":{"accept":"application/vnd.github.hellcat-preview+json"},"params":{"id":{"type":"string","required":true},"org":{"type":"string","required":true},"repo":{"type":"string","required":true},"permission":{"type":"string","enum":["pull","push","admin"],"description":"`pull` - team members can pull, but not push or administer this repository, `push` - team members can pull and push, but not administer this repository, `admin` - team members can pull, push and administer this repository."}},"description":"Add team repository"},"deleteTeamRepo":{"url":"/teams/:id/repos/:owner/:repo","method":"DELETE","headers":{"accept":"application/vnd.github.hellcat-preview+json"},"params":{"id":{"type":"string","required":true},"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Remove team repository"},"getHooks":{"url":"/orgs/:org/hooks","method":"GET","params":{"org":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List hooks"},"getHook":{"url":"/orgs/:org/hooks/:id","method":"GET","params":{"org":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Get single hook"},"createHook":{"url":"/orgs/:org/hooks","method":"POST","params":{"org":{"type":"string","required":true},"name":{"type":"string","required":true,"description":"Must be passed as \"web\"."},"config":{"type":"json","required":true,"description":"Key/value pairs to provide settings for this webhook"},"events":{"type":"string[]","default":"[\"push\"]","description":"Determines what events the hook is triggered for. Default: [\"push\"]."},"active":{"type":"boolean","description":"Determines whether the hook is actually triggered on pushes."}},"description":"Create a hook"},"editHook":{"url":"/orgs/:org/hooks/:id","method":"PATCH","params":{"org":{"type":"string","required":true},"id":{"type":"string","required":true},"config":{"type":"json","required":true,"description":"Key/value pairs to provide settings for this webhook"},"events":{"type":"string[]","default":"[\"push\"]","description":"Determines what events the hook is triggered for. Default: [\"push\"]."},"active":{"type":"boolean","description":"Determines whether the hook is actually triggered on pushes."}},"description":"Edit a hook"},"pingHook":{"url":"/orgs/:org/hooks/:id/pings","method":"POST","params":{"org":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Ping a hook"},"deleteHook":{"url":"/orgs/:org/hooks/:id","method":"DELETE","params":{"org":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Delete a hook"},"getBlockedUsers":{"url":"/orgs/:org/blocks","method":"GET","headers":{"accept":"application/vnd.github.giant-sentry-fist-preview+json"},"params":{"org":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List blocked users. (In preview period. See README.)"},"checkBlockedUser":{"url":"/orgs/:org/blocks/:username","method":"GET","headers":{"accept":"application/vnd.github.giant-sentry-fist-preview+json"},"params":{"org":{"type":"string","required":true},"username":{"type":"string","required":true}},"description":"Check whether you've blocked a user. (In preview period. See README.)"},"blockUser":{"url":"/orgs/:org/blocks/:username","method":"PUT","headers":{"accept":"application/vnd.github.giant-sentry-fist-preview+json"},"params":{"org":{"type":"string","required":true},"username":{"type":"string","required":true}},"description":"Block a user. (In preview period. See README.)"},"unblockUser":{"url":"/orgs/:org/blocks/:username","method":"DELETE","headers":{"accept":"application/vnd.github.giant-sentry-fist-preview+json"},"params":{"org":{"type":"string","required":true},"username":{"type":"string","required":true}},"description":"Unblock a user. (In preview period. See README.)"}},"projects":{"getRepoProjects":{"url":"/repos/:owner/:repo/projects","method":"GET","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"state":{"type":"string","enum":["open","closed","all"],"default":"open"}},"description":"List repository projects. (In preview period. See README.)"},"getOrgProjects":{"url":"/orgs/:org/projects","method":"GET","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"org":{"type":"string","required":true},"state":{"type":"string","enum":["open","closed","all"],"default":"open"}},"description":"List organization projects. (In preview period. See README.)"},"getProject":{"url":"/projects/:id","method":"GET","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"id":{"type":"string","required":true}},"description":"Get a project. (In preview period. See README.)"},"createRepoProject":{"url":"/repos/:owner/:repo/projects","method":"POST","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"name":{"type":"string","required":true},"body":{"type":"string"}},"description":"Create a repository project. (In preview period. See README.)"},"createOrgProject":{"url":"/orgs/:org/projects","method":"POST","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"org":{"type":"string","required":true},"name":{"type":"string","required":true},"body":{"type":"string"}},"description":"Create an organization project. (In preview period. See README.)"},"updateProject":{"url":"/projects/:id","method":"PATCH","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"id":{"type":"string","required":true},"name":{"type":"string","required":true},"body":{"type":"string"},"state":{"type":"string","enum":["open","closed","all"],"default":"open"}},"description":"Update a project. (In preview period. See README.)"},"deleteProject":{"url":"/projects/:id","method":"DELETE","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"id":{"type":"string","required":true}},"description":"Delete a project. (In preview period. See README.)"},"getProjectCards":{"url":"/projects/columns/:column_id/cards","method":"GET","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"column_id":{"type":"string","required":true}},"description":"List project cards. (In preview period. See README.)"},"getProjectCard":{"url":"/projects/columns/cards/:id","method":"GET","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"id":{"type":"string","required":true}},"description":"Get project card. (In preview period. See README.)"},"createProjectCard":{"url":"/projects/columns/:column_id/cards","method":"POST","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"column_id":{"type":"string","required":true},"note":{"type":"string","description":"The note of the card."},"content_id":{"type":"string","description":"The id of the Issue or Pull Request to associate with this card."},"content_type":{"type":"string","description":"The type of content to associate with this card. Can be either 'Issue' or 'PullRequest'."}},"description":"Create a project card. (In preview period. See README.)"},"updateProjectCard":{"url":"/projects/columns/cards/:id","method":"PATCH","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"id":{"type":"string","required":true},"note":{"type":"string","description":"The note of the card."}},"description":"Update a project card. (In preview period. See README.)"},"deleteProjectCard":{"url":"/projects/columns/cards/:id","method":"DELETE","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"id":{"type":"string","required":true}},"description":"Delete a project card. (In preview period. See README.)"},"moveProjectCard":{"url":"/projects/columns/cards/:id/moves","method":"POST","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"id":{"type":"string","required":true},"position":{"type":"string","required":true,"validation":"^(top|bottom|after:\\d+)$","description":"Can be one of top, bottom, or after:<card-id>, where <card-id> is the id value of a card in the same project."},"column_id":{"type":"string","description":"The id value of a column in the same project."}},"description":"Move a project card. (In preview period. See README.)"},"getProjectColumns":{"url":"/projects/:project_id/columns","method":"GET","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"project_id":{"type":"string","required":true}},"description":"List project columns. (In preview period. See README.)"},"getProjectColumn":{"url":"/projects/columns/:id","method":"GET","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"id":{"type":"string","required":true}},"description":"Get a project column. (In preview period. See README.)"},"createProjectColumn":{"url":"/projects/:project_id/columns","method":"POST","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"project_id":{"type":"string","required":true},"name":{"type":"string","required":true}},"description":"Create a project column. (In preview period. See README.)"},"updateProjectColumn":{"url":"/projects/columns/:id","method":"PATCH","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"id":{"type":"string","required":true},"name":{"type":"string","required":true}},"description":"Update a project column. (In preview period. See README.)"},"deleteProjectColumn":{"url":"/projects/columns/:id","method":"DELETE","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"id":{"type":"string","required":true}},"description":"Delete a project column. (In preview period. See README.)"},"moveProjectColumn":{"url":"/projects/columns/:id/moves","method":"POST","headers":{"accept":"application/vnd.github.inertia-preview+json"},"params":{"id":{"type":"string","required":true},"position":{"type":"string","required":true,"validation":"^(first|last|after:\\d+)$","description":"Can be one of first, last, or after:<column-id>, where <column-id> is the id value of a column in the same project."}},"description":"Move a project column. (In preview period. See README.)"}},"pullRequests":{"get":{"url":"/repos/:owner/:repo/pulls/:number","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true}},"description":"Get a single pull request"},"create":{"url":"/repos/:owner/:repo/pulls","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"head":{"type":"string","required":true,"description":"The branch (or git ref) where your changes are implemented."},"base":{"type":"string","required":true,"description":"The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo."}},"description":"Create a pull request"},"update":{"url":"/repos/:owner/:repo/pulls/:number","method":"PATCH","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"title":{"type":"string","description":"The title of the pull request."},"body":{"type":"string","description":"The contents of the pull request."},"state":{"type":"string","enum":["open","closed"],"description":"open or closed"},"base":{"type":"string","description":"The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo."},"maintainer_can_modify":{"type":"boolean","default":"true","description":"Indicates whether maintainers can modify the pull request."}},"description":"Update a pull request"},"merge":{"url":"/repos/:owner/:repo/pulls/:number/merge","method":"PUT","headers":{"accept":"application/vnd.github.polaris-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"commit_title":{"type":"string","description":"Title for the automatic commit message. (In preview period. See README.)"},"commit_message":{"type":"string","description":"Extra detail to append to automatic commit message."},"sha":{"type":"string","description":"SHA that pull request head must match to allow merge"},"merge_method":{"type":"string","enum":["merge","squash","rebase"],"default":"merge","description":"Merge method to use. Possible values are `merge`, `squash`, or `rebase`. (In preview period. See README.)"}},"description":"Merge a pull request (Merge Button)"},"getAll":{"url":"/repos/:owner/:repo/pulls","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"state":{"type":"string","enum":["open","closed","all"],"default":"open"},"head":{"type":"string","description":"Filter pulls by head user and branch name in the format of user:ref-name. Example: github:new-script-format."},"base":{"type":"string","description":"Filter pulls by base branch name. Example: gh-pages."},"sort":{"type":"string","enum":["created","updated","popularity","long-running"],"default":"created","description":"Possible values are: `created`, `updated`, `popularity`, `long-running`, Default: `created`"},"direction":{"type":"string","enum":["asc","desc"],"default":"desc"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List pull requests"},"createFromIssue":{"url":"/repos/:owner/:repo/pulls","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"issue":{"type":"number","required":true,"description":"The issue number in this repository to turn into a Pull Request."},"head":{"type":"string","required":true,"description":"The branch (or git ref) where your changes are implemented."},"base":{"type":"string","required":true,"description":"The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo."}},"description":"Create a pull request from an existing issue"},"getCommits":{"url":"/repos/:owner/:repo/pulls/:number/commits","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List commits on a pull request"},"getFiles":{"url":"/repos/:owner/:repo/pulls/:number/files","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List pull requests files"},"checkMerged":{"url":"/repos/:owner/:repo/pulls/:number/merge","method":"GET","headers":{"accept":"application/vnd.github.polaris-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get if a pull request has been merged"},"getReviews":{"url":"/repos/:owner/:repo/pulls/:number/reviews","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List reviews on a pull request."},"getReview":{"url":"/repos/:owner/:repo/pulls/:number/reviews/:id","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"id":{"type":"string","required":true}},"description":"Get a single pull request review."},"deletePendingReview":{"url":"/repos/:owner/:repo/pulls/:number/reviews/:id","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"id":{"type":"string","required":true}},"description":"Delete a pending pull request review."},"getReviewComments":{"url":"/repos/:owner/:repo/pulls/:number/reviews/:id/comments","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"id":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get comments for a pull request review."},"createReview":{"url":"/repos/:owner/:repo/pulls/:number/reviews","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"commit_id":{"type":"string","description":"Sha of the commit to comment on."},"body":{"type":"string","description":"The body text of the pull request review."},"event":{"type":"string","enum":["APPROVE","REQUEST_CHANGES","COMMENT","PENDING"],"default":"PENDING","description":"The event to perform on the review upon submission, can be one of APPROVE, REQUEST_CHANGES, or COMMENT. If left blank, the review will be in the PENDING state."},"comments":{"type":"string[]","description":"An array of draft review comment objects. Draft review comments must include a `path`, `position`, and `body`."}},"description":"Create a pull request review."},"submitReview":{"url":"/repos/:owner/:repo/pulls/:number/reviews/:id/events","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"id":{"type":"string","required":true},"body":{"type":"string","description":"The body text of the pull request review."},"event":{"type":"string","enum":["APPROVE","REQUEST_CHANGES","COMMENT","PENDING"],"default":"PENDING","description":"The event to perform on the review upon submission, can be one of APPROVE, REQUEST_CHANGES, or COMMENT. If left blank, the review will be in the PENDING state."}},"description":"Submit a pull request review."},"dismissReview":{"url":"/repos/:owner/:repo/pulls/:number/reviews/:id/dismissals","method":"PUT","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"id":{"type":"string","required":true},"message":{"type":"string","description":"The message for the pull request review dismissal."},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Dismiss a pull request review."},"getComments":{"url":"/repos/:owner/:repo/pulls/:number/comments","method":"GET","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List comments on a pull request"},"getCommentsForRepo":{"url":"/repos/:owner/:repo/pulls/comments","method":"GET","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"sort":{"type":"string","enum":["created","updated"],"default":"created","description":"Possible values are: `created`, `updated`, Default: `created`"},"direction":{"type":"string","enum":["asc","desc"],"default":"desc"},"since":{"type":"date","description":"Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List comments in a repository"},"getComment":{"url":"/repos/:owner/:repo/pulls/comments/:id","method":"GET","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Get a single comment"},"createComment":{"url":"/repos/:owner/:repo/pulls/:number/comments","method":"POST","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"body":{"type":"string","required":true}},"description":"Create a comment"},"createCommentReply":{"url":"/repos/:owner/:repo/pulls/:number/comments","method":"POST","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"body":{"type":"string","required":true},"in_reply_to":{"type":"number","required":true,"description":"The comment id to reply to."}},"description":"Reply to existing pull request comment"},"editComment":{"url":"/repos/:owner/:repo/pulls/comments/:id","method":"PATCH","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true},"body":{"type":"string","required":true}},"description":"Edit a comment"},"deleteComment":{"url":"/repos/:owner/:repo/pulls/comments/:id","method":"DELETE","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Delete a comment"},"getReviewRequests":{"url":"/repos/:owner/:repo/pulls/:number/requested_reviewers","method":"GET","headers":{"accept":"application/vnd.github.thor-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List review requests. (In preview period. See README.)"},"createReviewRequest":{"url":"/repos/:owner/:repo/pulls/:number/requested_reviewers","method":"POST","headers":{"accept":"application/vnd.github.thor-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"reviewers":{"type":"string[]","description":"An array of user logins that will be requested."},"team_reviewers":{"type":"string[]","description":"An array of team slugs that will be requested."}},"description":"Create a review request. (In preview period. See README.)"},"deleteReviewRequest":{"url":"/repos/:owner/:repo/pulls/:number/requested_reviewers","method":"DELETE","headers":{"accept":"application/vnd.github.thor-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"reviewers":{"type":"string[]","description":"An array of user logins that will be requested."},"team_reviewers":{"type":"string[]","description":"An array of team slugs that will be requested."}},"description":"Delete a review request. (In preview period. See README.)"}},"reactions":{"delete":{"url":"/reactions/:id","method":"DELETE","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"id":{"type":"string","required":true}},"description":"Delete a reaction. (In preview period. See README.)"},"getForCommitComment":{"url":"/repos/:owner/:repo/comments/:id/reactions","method":"GET","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true},"content":{"type":"string","enum":["+1","-1","laugh","confused","heart","hooray"],"description":"Indicates which type of reaction to return."}},"description":"List reactions for a commit comment. (In preview period. See README.)"},"createForCommitComment":{"url":"/repos/:owner/:repo/comments/:id/reactions","method":"POST","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true},"content":{"type":"string","required":true,"enum":["+1","-1","laugh","confused","heart","hooray"],"description":"The reaction type."}},"description":"Create reaction for a commit comment. (In preview period. See README.)"},"getForIssue":{"url":"/repos/:owner/:repo/issues/:number/reactions","method":"GET","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"content":{"type":"string","enum":["+1","-1","laugh","confused","heart","hooray"],"description":"Indicates which type of reaction to return."}},"description":"List reactions for an issue. (In preview period. See README.)"},"createForIssue":{"url":"/repos/:owner/:repo/issues/:number/reactions","method":"POST","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"number":{"type":"number","required":true},"content":{"type":"string","required":true,"enum":["+1","-1","laugh","confused","heart","hooray"],"description":"The reaction type."}},"description":"Create reaction for an issue. (In preview period. See README.)"},"getForIssueComment":{"url":"/repos/:owner/:repo/issues/comments/:id/reactions","method":"GET","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true},"content":{"type":"string","enum":["+1","-1","laugh","confused","heart","hooray"],"description":"Indicates which type of reaction to return."}},"description":"List reactions for an issue comment. (In preview period. See README.)"},"createForIssueComment":{"url":"/repos/:owner/:repo/issues/comments/:id/reactions","method":"POST","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true},"content":{"type":"string","required":true,"enum":["+1","-1","laugh","confused","heart","hooray"],"description":"The reaction type."}},"description":"Create reaction for an issue comment. (In preview period. See README.)"},"getForPullRequestReviewComment":{"url":"/repos/:owner/:repo/pulls/comments/:id/reactions","method":"GET","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true},"content":{"type":"string","enum":["+1","-1","laugh","confused","heart","hooray"],"description":"Indicates which type of reaction to return."}},"description":"List reactions for a pull request review comment. (In preview period. See README.)"},"createForPullRequestReviewComment":{"url":"/repos/:owner/:repo/pulls/comments/:id/reactions","method":"POST","headers":{"accept":"application/vnd.github.squirrel-girl-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true},"content":{"type":"string","required":true,"enum":["+1","-1","laugh","confused","heart","hooray"],"description":"The reaction type."}},"description":"Create reaction for a pull request review comment. (In preview period. See README.)"}},"repos":{"create":{"url":"/user/repos","method":"POST","params":{"name":{"type":"string","required":true},"description":{"type":"string"},"homepage":{"type":"string"},"private":{"type":"boolean","default":"false","description":"True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false."},"has_issues":{"type":"boolean","default":"true","description":"True to enable issues for this repository, false to disable them. Default is true."},"has_projects":{"type":"boolean","default":"true","description":"True to enable projects for this repository, false to disable them. Default is true."},"has_wiki":{"type":"boolean","default":"true","description":"True to enable the wiki for this repository, false to disable it. Default is true."},"team_id":{"type":"number","description":"The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization."},"auto_init":{"type":"boolean","default":"false","description":"True to create an initial commit with empty README. Default is false"},"gitignore_template":{"type":"string","description":"Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided."},"license_template":{"type":"string","description":"Desired LICENSE template to apply. Use the name of the template without the extension. For example, \"mit\" or \"mozilla\"."},"allow_squash_merge":{"type":"boolean","default":"true","description":"Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)"},"allow_merge_commit":{"type":"boolean","default":"true","description":"Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)"},"allow_rebase_merge":{"type":"boolean","default":"true","description":"Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)"}},"description":"Create a new repository for the authenticated user."},"get":{"url":"/repos/:owner/:repo","method":"GET","headers":{"accept":"application/vnd.github.drax-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Get a repo for a user."},"edit":{"url":"/repos/:owner/:repo","method":"PATCH","headers":{"accept":"application/vnd.github.drax-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"name":{"type":"string","required":true},"description":{"type":"string"},"homepage":{"type":"string"},"private":{"type":"boolean","default":"false","description":"True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false."},"has_issues":{"type":"boolean","default":"true","description":"True to enable issues for this repository, false to disable them. Default is true."},"has_projects":{"type":"boolean","default":"true","description":"True to enable projects for this repository, false to disable them. Default is true."},"has_wiki":{"type":"boolean","default":"true","description":"True to enable the wiki for this repository, false to disable it. Default is true."},"default_branch":{"type":"string","description":"Updates the default branch for this repository."},"allow_squash_merge":{"type":"boolean","default":"true","description":"Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)"},"allow_merge_commit":{"type":"boolean","default":"true","description":"Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)"},"allow_rebase_merge":{"type":"boolean","default":"true","description":"Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)"}},"description":"Update a repo."},"delete":{"url":"/repos/:owner/:repo","method":"DELETE","headers":{"accept":"application/vnd.github.drax-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Delete a repository."},"fork":{"url":"/repos/:owner/:repo/forks","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"organization":{"type":"string","description":"Optional parameter to specify the organization name if forking into an organization."}},"description":"Create a fork."},"merge":{"url":"/repos/:owner/:repo/merges","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"base":{"type":"string","required":true,"description":"The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo."},"head":{"type":"string","required":true,"description":"The branch (or git ref) where your changes are implemented."},"commit_message":{"type":"string","description":"Commit message to use for the merge commit. If omitted, a default message will be used."}},"description":"Perform a merge."},"getAll":{"url":"/user/repos","method":"GET","params":{"visibility":{"type":"string","enum":["all","public","private"],"default":"all","description":"Can be one of `all`, `public`, or `private`. Default: `all`."},"affiliation":{"type":"string","default":"owner,collaborator,organization_member","description":"Comma-separated list of values. Can include: `owner`, `collaborator`, `organization_member`."},"type":{"type":"string","enum":["all","owner","public","private","member"],"default":"all","description":"Possible values: `all`, `owner`, `public`, `private`, `member`. Default: `all`."},"sort":{"type":"string","enum":["created","updated","pushed","full_name"],"default":"full_name","description":"Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`."},"direction":{"type":"string","enum":["asc","desc"],"default":"desc"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List your repositories"},"getForUser":{"url":"/users/:username/repos","method":"GET","params":{"username":{"type":"string","required":true},"type":{"type":"string","enum":["all","owner","member"],"default":"owner","description":"Possible values: `all`, `owner`, `member`. Default: `owner`."},"sort":{"type":"string","enum":["created","updated","pushed","full_name"],"default":"full_name","description":"Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`."},"direction":{"type":"string","enum":["asc","desc"],"default":"desc"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List public repositories for the specified user."},"getForOrg":{"url":"/orgs/:org/repos","method":"GET","params":{"org":{"type":"string","required":true},"type":{"type":"string","enum":["all","public","private","forks","sources","member"],"default":"all","description":"Possible values: `all`, `public`, `private`, `forks`, `sources`, `member`. Default: `all`."},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List repositories for the specified org."},"getPublic":{"url":"/repositories","method":"GET","params":{"since":{"type":"string","description":"The integer ID of the last Repository that you've seen."},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List all public repositories"},"createForOrg":{"url":"/orgs/:org/repos","method":"POST","params":{"org":{"type":"string","required":true},"name":{"type":"string","required":true},"description":{"type":"string"},"homepage":{"type":"string"},"private":{"type":"boolean","default":"false","description":"True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false."},"has_issues":{"type":"boolean","default":"true","description":"True to enable issues for this repository, false to disable them. Default is true."},"has_projects":{"type":"boolean","default":"true","description":"True to enable projects for this repository, false to disable them. Default is true."},"has_wiki":{"type":"boolean","default":"true","description":"True to enable the wiki for this repository, false to disable it. Default is true."},"team_id":{"type":"number","description":"The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization."},"auto_init":{"type":"boolean","default":"false","description":"True to create an initial commit with empty README. Default is false"},"gitignore_template":{"type":"string","description":"Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided."},"license_template":{"type":"string","description":"Desired LICENSE template to apply. Use the name of the template without the extension. For example, \"mit\" or \"mozilla\"."},"allow_squash_merge":{"type":"boolean","default":"true","description":"Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)"},"allow_merge_commit":{"type":"boolean","default":"true","description":"Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)"},"allow_rebase_merge":{"type":"boolean","default":"true","description":"Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)"}},"description":"Create a new repository for an organization."},"getById":{"url":"/repositories/:id","method":"GET","params":{"id":{"type":"string","required":true,"description":"Numerical ID of the repository."}},"description":"Get a single repo by id."},"getTopics":{"url":"/repos/:owner/:repo/topics","method":"GET","headers":{"accept":"application/vnd.github.mercy-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List all topics for a repository. (In preview period. See README.)"},"replaceTopics":{"url":"/repos/:owner/:repo/topics","method":"PUT","headers":{"accept":"application/vnd.github.mercy-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"names":{"type":"string[]","required":true,"description":"An array of topics to add to the repository. Pass one or more topics to replace the set of existing topics. Send an empty array ([]) to clear all topics from the repository."}},"description":"Replace all topics for a repository. (In preview period. See README.)"},"getContributors":{"url":"/repos/:owner/:repo/contributors","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"anon":{"type":"boolean","description":"Set to 1 or true to include anonymous contributors in results."},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get contributors for the specified repository."},"getLanguages":{"url":"/repos/:owner/:repo/languages","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get languages for the specified repository."},"getTeams":{"url":"/repos/:owner/:repo/teams","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get teams for the specified repository."},"getTags":{"url":"/repos/:owner/:repo/tags","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get tags for the specified repository."},"getBranches":{"url":"/repos/:owner/:repo/branches","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"protected":{"type":"boolean","description":"Set to true to only return protected branches"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List branches."},"getBranch":{"url":"/repos/:owner/:repo/branches/:branch","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get branch."},"getBranchProtection":{"url":"/repos/:owner/:repo/branches/:branch/protection","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get branch protection."},"updateBranchProtection":{"url":"/repos/:owner/:repo/branches/:branch/protection","method":"PUT","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"required_status_checks":{"type":"json","required":true,"allow-null":true,"description":"JSON object that contains the following keys: `include_admins` - Enforce required status checks for repository administrators, `strict` - Require branches to be up to date before merging, `contexts` - The list of status checks to require in order to merge into this branch. This object can have the value of `null` for disabled."},"required_pull_request_reviews":{"type":"json","required":true,"allow-null":true,"description":"JSON object that contains the following keys: `include_admins` - Enforce required status checks for repository administrators."},"dismissal_restrictions":{"type":"json","allow-null":true,"description":"JSON object that contains the following keys: `users` - The list of user logins with dismissal access, `teams` - The list of team slugs with dismissal access. This object can have the value of `null` for disabled."},"restrictions":{"type":"json","required":true,"allow-null":true,"description":"JSON object that contains the following keys: `users` - The list of user logins with push access, `teams` - The list of team slugs with push access. This object can have the value of `null` for disabled."},"enforce_admins":{"type":"boolean","required":true,"allow-null":false,"description":"Enforces required status checks for repository administrators."},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Update branch protection."},"removeBranchProtection":{"url":"/repos/:owner/:repo/branches/:branch/protection","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true}},"description":"Remove branch protection."},"getProtectedBranchRequiredStatusChecks":{"url":"/repos/:owner/:repo/branches/:branch/protection/required_status_checks","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get required status checks of protected branch."},"updateProtectedBranchRequiredStatusChecks":{"url":"/repos/:owner/:repo/branches/:branch/protection/required_status_checks","method":"PATCH","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"strict":{"type":"boolean","description":"Require branches to be up to date before merging."},"contexts":{"type":"string[]","description":"The list of status checks to require in order to merge into this branch."}},"description":"Update required status checks of protected branch."},"removeProtectedBranchRequiredStatusChecks":{"url":"/repos/:owner/:repo/branches/:branch/protection/required_status_checks","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true}},"description":"Remove required status checks of protected branch."},"getProtectedBranchRequiredStatusChecksContexts":{"url":"/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List required status checks contexts of protected branch."},"replaceProtectedBranchRequiredStatusChecksContexts":{"url":"/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts","method":"PUT","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"contexts":{"type":"string[]","required":true,"mapTo":"input","description":"An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins)."}},"description":"Replace required status checks contexts of protected branch."},"addProtectedBranchRequiredStatusChecksContexts":{"url":"/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"contexts":{"type":"string[]","required":true,"mapTo":"input","description":"An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins)."}},"description":"Add required status checks contexts of protected branch."},"removeProtectedBranchRequiredStatusChecksContexts":{"url":"/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"contexts":{"type":"string[]","required":true,"mapTo":"input","description":"An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins)."}},"description":"Remove required status checks contexts of protected branch."},"getProtectedBranchPullRequestReviewEnforcement":{"url":"/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get pull request review enforcement of protected branch."},"updateProtectedBranchPullRequestReviewEnforcement":{"url":"/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews","method":"PATCH","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"dismissal_restrictions":{"type":"json","allow-null":true,"description":"JSON object that contains the following keys: `users` - The list of user logins with dismissal access, `teams` - The list of team slugs with dismissal access. This object can have the value of `null` for disabled."},"dismiss_stale_reviews":{"type":"boolean","description":"Dismiss approved reviews automatically when a new commit is pushed."},"require_code_owner_reviews":{"type":"boolean","description":"Blocks merge until code owners have reviewed."}},"description":"Update pull request review enforcement of protected branch."},"removeProtectedBranchPullRequestReviewEnforcement":{"url":"/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true}},"description":"Remove pull request review enforcement of protected branch."},"getProtectedBranchAdminEnforcement":{"url":"/repos/:owner/:repo/branches/:branch/protection/enforce_admins","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get admin enforcement of protected branch."},"addProtectedBranchAdminEnforcement":{"url":"/repos/:owner/:repo/branches/:branch/protection/enforce_admins","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Add admin enforcement of protected branch."},"removeProtectedBranchAdminEnforcement":{"url":"/repos/:owner/:repo/branches/:branch/protection/enforce_admins","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true}},"description":"Remove admin enforcement of protected branch."},"getProtectedBranchRestrictions":{"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get restrictions of protected branch."},"removeProtectedBranchRestrictions":{"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true}},"description":"Remove restrictions of protected branch."},"getProtectedBranchTeamRestrictions":{"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List team restrictions of protected branch."},"replaceProtectedBranchTeamRestrictions":{"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams","method":"PUT","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"teams":{"type":"string[]","required":true,"mapTo":"input","description":"An array of team slugs (e.g. justice-league)."}},"description":"Replace team restrictions of protected branch."},"addProtectedBranchTeamRestrictions":{"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"teams":{"type":"string[]","required":true,"mapTo":"input","description":"An array of team slugs (e.g. justice-league)."}},"description":"Add team restrictions of protected branch."},"removeProtectedBranchTeamRestrictions":{"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/teams","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"teams":{"type":"string[]","required":true,"mapTo":"input","description":"An array of team slugs (e.g. justice-league)."}},"description":"Remove team restrictions of protected branch."},"getProtectedBranchUserRestrictions":{"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/users","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List user restrictions of protected branch."},"replaceProtectedBranchUserRestrictions":{"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/users","method":"PUT","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"users":{"type":"string[]","required":true,"mapTo":"input","description":"An array of team slugs (e.g. justice-league)."}},"description":"Replace user restrictions of protected branch."},"addProtectedBranchUserRestrictions":{"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/users","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"users":{"type":"string[]","required":true,"mapTo":"input","description":"An array of team slugs (e.g. justice-league)."}},"description":"Add user restrictions of protected branch."},"removeProtectedBranchUserRestrictions":{"url":"/repos/:owner/:repo/branches/:branch/protection/restrictions/users","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"branch":{"type":"string","required":true},"users":{"type":"string[]","required":true,"mapTo":"input","description":"An array of team slugs (e.g. justice-league)."}},"description":"Remove user restrictions of protected branch."},"getCollaborators":{"url":"/repos/:owner/:repo/collaborators","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"affiliation":{"type":"string","enum":["outside","all","direct"],"default":"all","description":"Filter collaborators returned by their affiliation."},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List collaborators"},"checkCollaborator":{"url":"/repos/:owner/:repo/collaborators/:username","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"username":{"type":"string","required":true}},"description":"Check if user is a collaborator."},"reviewUserPermissionLevel":{"url":"/repos/:owner/:repo/collaborators/:username/permission","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"username":{"type":"string","required":true}},"description":"Review a user's permission level."},"addCollaborator":{"url":"/repos/:owner/:repo/collaborators/:username","method":"PUT","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"username":{"type":"string","required":true},"permission":{"type":"string","enum":["pull","push","admin"],"default":"push","description":"`pull` - can pull, but not push to or administer this repository, `push` - can pull and push, but not administer this repository, `admin` - can pull, push and administer this repository."}},"description":"Add user as a collaborator"},"removeCollaborator":{"url":"/repos/:owner/:repo/collaborators/:username","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"username":{"type":"string","required":true}},"description":"Remove user as a collaborator."},"getAllCommitComments":{"url":"/repos/:owner/:repo/comments","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List commit comments for a repository."},"getCommitComments":{"url":"/repos/:owner/:repo/commits/:ref/comments","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"ref":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List comments for a single commit."},"createCommitComment":{"url":"/repos/:owner/:repo/commits/:sha/comments","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"sha":{"type":"string","required":true},"body":{"type":"string","required":true},"path":{"type":"string","description":"Relative path of the file to comment on."},"position":{"type":"number","description":"Line index in the diff to comment on."}},"description":"Create a commit comment."},"getCommitComment":{"url":"/repos/:owner/:repo/comments/:id","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Get a single commit comment."},"updateCommitComment":{"url":"/repos/:owner/:repo/comments/:id","method":"PATCH","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true},"body":{"type":"string","required":true}},"description":"Update a commit comment."},"deleteCommitComment":{"url":"/repos/:owner/:repo/comments/:id","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Delete a commit comment."},"getCommunityProfileMetrics":{"url":"/repos/:owner/:name/community/profile","method":"GET","headers":{"accept":"application/vnd.github.black-panther-preview+json"},"params":{"owner":{"type":"string","required":true},"name":{"type":"string","required":true}},"description":"Retrieve community profile metrics."},"getCommits":{"url":"/repos/:owner/:repo/commits","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"sha":{"type":"string","description":"Sha or branch to start listing commits from."},"path":{"type":"string","description":"Only commits containing this file path will be returned."},"author":{"type":"string","description":"GitHub login or email address by which to filter by commit author."},"since":{"type":"date","description":"Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ"},"until":{"type":"date","description":"Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List commits on a repository."},"getCommit":{"url":"/repos/:owner/:repo/commits/:sha","method":"GET","headers":{"accept":"application/vnd.github.cryptographer-preview"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"sha":{"type":"string","required":true}},"description":"Get a single commit."},"getShaOfCommitRef":{"url":"/repos/:owner/:repo/commits/:ref","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"ref":{"type":"string","required":true,"allow-empty":true,"description":"String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected."}},"description":"Get the SHA-1 of a commit reference."},"compareCommits":{"url":"/repos/:owner/:repo/compare/:base...:head","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"base":{"type":"string","required":true,"description":"The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo."},"head":{"type":"string","required":true,"description":"The branch (or git ref) where your changes are implemented."}},"description":"Compare two commits."},"getReadme":{"url":"/repos/:owner/:repo/readme","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"ref":{"type":"string","description":"The name of the commit/branch/tag. Default: the repository’s default branch (usually master)"}},"description":"Get the README for the given repository."},"getContent":{"url":"/repos/:owner/:repo/contents/:path","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"path":{"type":"string","required":true,"allow-empty":true,"description":"The content path."},"ref":{"type":"string","description":"The String name of the Commit/Branch/Tag. Defaults to master."}},"description":"Get the contents of a file or directory in a repository."},"createFile":{"url":"/repos/:owner/:repo/contents/:path","method":"PUT","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"path":{"type":"string","required":true,"description":"The content path."},"message":{"type":"string","required":true,"description":"The commit message."},"content":{"type":"string","required":true,"description":"The new file content, Base64 encoded."},"branch":{"type":"string","description":"The branch name. If not provided, uses the repository’s default branch (usually master)."},"committer":{"type":"json"},"author":{"type":"json"}},"description":"Create a new file in the given repository."},"updateFile":{"url":"/repos/:owner/:repo/contents/:path","method":"PUT","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"path":{"type":"string","required":true,"description":"The content path."},"message":{"type":"string","required":true,"description":"The commit message."},"content":{"type":"string","required":true,"description":"The updated file content, Base64 encoded."},"sha":{"type":"string","required":true,"description":"The blob SHA of the file being replaced."},"branch":{"type":"string","description":"The branch name. If not provided, uses the repository’s default branch (usually master)."},"committer":{"type":"json"},"author":{"type":"json"}},"description":"Update a file."},"deleteFile":{"url":"/repos/:owner/:repo/contents/:path","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"path":{"type":"string","required":true,"description":"The content path."},"message":{"type":"string","required":true,"description":"The commit message."},"sha":{"type":"string","required":true,"description":"The blob SHA of the file being removed."},"branch":{"type":"string","description":"The branch name. If not provided, uses the repository’s default branch (usually master)."},"committer":{"type":"json"},"author":{"type":"json"}},"description":"Delete a file."},"getArchiveLink":{"url":"/repos/:owner/:repo/:archive_format/:ref","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"archive_format":{"type":"string","required":true,"enum":["tarball","zipball"],"default":"tarball","description":"Either tarball or zipball, Deafult: tarball."},"ref":{"type":"string","description":"A valid Git reference. Default: the repository’s default branch (usually master)."}},"description":"Get archive link."},"getDeployKeys":{"url":"/repos/:owner/:repo/keys","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List deploy keys."},"getDeployKey":{"url":"/repos/:owner/:repo/keys/:id","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Get a deploy key."},"addDeployKey":{"url":"/repos/:owner/:repo/keys","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"title":{"type":"string","required":true},"key":{"type":"string","required":true},"read_only":{"type":"boolean","description":"If true, the key will only be able to read repository contents. Otherwise, the key will be able to read and write."}},"description":"Add a new deploy key."},"deleteDeployKey":{"url":"/repos/:owner/:repo/keys/:id","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Remove a deploy key."},"getDeployments":{"url":"/repos/:owner/:repo/deployments","method":"GET","headers":{"accept":"application/vnd.github.ant-man-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"sha":{"type":"string","default":"none","description":"The short or long sha that was recorded at creation time. Default: none."},"ref":{"type":"string","default":"none","description":"The name of the ref. This can be a branch, tag, or sha. Default: none."},"task":{"type":"string","default":"none","description":"The name of the task for the deployment. e.g. deploy or deploy:migrations. Default: none."},"environment":{"type":"string","default":"none","description":"The name of the environment that was deployed to. e.g. staging or production. Default: none."},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List deployments."},"getDeployment":{"url":"/repos/:owner/:repo/deployments/:deployment_id","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"deployment_id":{"type":"string","required":true,"description":"The deployment id."}},"description":"Get a single Deployment. (In preview period. See README.)"},"createDeployment":{"url":"/repos/:owner/:repo/deployments","method":"POST","headers":{"accept":"application/vnd.github.ant-man-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"ref":{"type":"string","required":true,"description":"The ref to deploy. This can be a branch, tag, or sha."},"task":{"type":"string","default":"deploy","description":"The named task to execute. e.g. deploy or deploy:migrations. Default: deploy"},"auto_merge":{"type":"boolean","default":"true","description":"Optional parameter to merge the default branch into the requested ref if it is behind the default branch. Default: true"},"required_contexts":{"type":"string[]","description":"Optional array of status contexts verified against commit status checks. If this parameter is omitted from the parameters then all unique contexts will be verified before a deployment is created. To bypass checking entirely pass an empty array. Defaults to all unique contexts."},"payload":{"type":"string","default":"\"\"","description":"Optional JSON payload with extra information about the deployment. Default: \"\""},"environment":{"type":"string","default":"none","description":"The name of the environment that was deployed to. e.g. staging or production. Default: none."},"description":{"type":"string","default":"\"\"","description":"Optional short description. Default: \"\""},"transient_environment":{"type":"boolean","default":false,"description":"Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: false. (In preview period. See README.)"},"production_environment":{"type":"boolean","description":"Specifies if the given environment is a one that end-users directly interact with. Default: true when environment is `production` and false otherwise. (In preview period. See README.)"}},"description":"Create a deployment. (In preview period. See README.)"},"getDeploymentStatuses":{"url":"/repos/:owner/:repo/deployments/:id/statuses","method":"GET","headers":{"accept":"application/vnd.github.ant-man-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"List deployment statuses. (In preview period. See README.)"},"getDeploymentStatus":{"url":"/repos/:owner/:repo/deployments/:id/statuses/:status_id","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true,"description":"The Deployment ID to list the statuses from."},"status_id":{"type":"string","required":true,"description":"The Deployment Status ID."}},"description":"List deployment statuses. (In preview period. See README.)"},"createDeploymentStatus":{"url":"/repos/:owner/:repo/deployments/:id/statuses","method":"POST","headers":{"accept":"application/vnd.github.ant-man-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true},"state":{"type":"string","description":"The state of the status. Can be one of pending, success, error, or failure."},"target_url":{"type":"string","default":"\"\"","description":"The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. Default: \"\""},"log_url":{"type":"string","default":"\"\"","description":"Functionally equivalent to target_url. Default: \"\". (In preview period. See README.)"},"description":{"type":"string","default":"\"\"","description":"A short description of the status. Default: \"\""},"environment_url":{"type":"string","default":"\"\"","description":"URL for accessing the deployment environment. Default: \"\". (In preview period. See README.)"},"auto_inactive":{"type":"boolean","default":true,"description":"When true the new `inactive` status is added to all other non-transient, non-production environment deployments with the same repository and environment name as the created status's deployment. Default: true. (In preview period. See README.)"}},"description":"Create a deployment status. (In preview period. See README.)"},"getDownloads":{"url":"/repos/:owner/:repo/downloads","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List downloads for a repository."},"getDownload":{"url":"/repos/:owner/:repo/downloads/:id","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Get a single download."},"deleteDownload":{"url":"/repos/:owner/:repo/downloads/:id","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Delete a download."},"getForks":{"url":"/repos/:owner/:repo/forks","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"sort":{"type":"string","enum":["newest","oldest","stargazers"],"default":"newest","description":"Possible values: `newest`, `oldest`, `stargazers`, default: `newest`."},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List forks."},"getInvites":{"url":"/repos/:owner/:repo/invitations","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"List invitations for a repository."},"deleteInvite":{"url":"/repos/:owner/:repo/invitations/:invitation_id","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"invitation_id":{"type":"string","required":true}},"description":"Delete a repository invitation."},"updateInvite":{"url":"/repos/:owner/:repo/invitations/:invitation_id","method":"PATCH","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"invitation_id":{"type":"string","required":true},"permissions":{"type":"string","enum":["read","write","admin"],"description":"The permissions that the associated user will have on the repository."}},"description":"Update a repository invitation."},"getPages":{"url":"/repos/:owner/:repo/pages","method":"GET","headers":{"accept":"application/vnd.github.mister-fantastic-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get information about a Pages site. (In preview period. See README.)"},"requestPageBuild":{"url":"/repos/:owner/:repo/pages/builds","method":"POST","headers":{"accept":"application/vnd.github.mister-fantastic-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Request a page build. (In preview period. See README.)"},"getPagesBuilds":{"url":"/repos/:owner/:repo/pages/builds","method":"GET","headers":{"accept":"application/vnd.github.mister-fantastic-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List Pages builds. (In preview period. See README.)"},"getLatestPagesBuild":{"url":"/repos/:owner/:repo/pages/builds/latest","method":"GET","headers":{"accept":"application/vnd.github.mister-fantastic-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Get latest Pages build. (In preview period. See README.)"},"getPagesBuild":{"url":"/repos/:owner/:repo/pages/builds/:id","method":"GET","headers":{"accept":"application/vnd.github.mister-fantastic-preview+json"},"params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Get a specific Pages build. (In preview period. See README.)"},"getReleases":{"url":"/repos/:owner/:repo/releases","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List releases for a repository."},"getRelease":{"url":"/repos/:owner/:repo/releases/:id","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Get a single release."},"getLatestRelease":{"url":"/repos/:owner/:repo/releases/latest","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Get the latest release."},"getReleaseByTag":{"url":"/repos/:owner/:repo/releases/tags/:tag","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"tag":{"type":"string","required":true,"description":"String of the tag"}},"description":"Get a release by tag name."},"createRelease":{"url":"/repos/:owner/:repo/releases","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"tag_name":{"type":"string","required":true,"description":"String of the tag"},"target_commitish":{"type":"string","description":"Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master)."},"name":{"type":"string"},"body":{"type":"string"},"draft":{"type":"boolean","default":"false","description":"true to create a draft (unpublished) release, false to create a published one. Default: false"},"prerelease":{"type":"boolean","default":"false","description":"true to identify the release as a prerelease. false to identify the release as a full release. Default: false"}},"description":"Create a release."},"editRelease":{"url":"/repos/:owner/:repo/releases/:id","method":"PATCH","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true},"tag_name":{"type":"string","required":true,"description":"String of the tag"},"target_commitish":{"type":"string","description":"Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master)."},"name":{"type":"string"},"body":{"type":"string"},"draft":{"type":"boolean","default":"false","description":"true to create a draft (unpublished) release, false to create a published one. Default: false"},"prerelease":{"type":"boolean","default":"false","description":"true to identify the release as a prerelease. false to identify the release as a full release. Default: false"}},"description":"Edit a release."},"deleteRelease":{"url":"/repos/:owner/:repo/releases/:id","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Delete a release"},"getAssets":{"url":"/repos/:owner/:repo/releases/:id/assets","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"List assets for a release."},"uploadAsset":{"method":"POST","url":":url","params":{"url":{"type":"string","required":true,"description":"This endpoint makes use of a Hypermedia relation (https://developer.github.com/v3/#hypermedia) to determine which URL to access. This endpoint is provided by a URI template in the release's API response (https://developer.github.com/v3/repos/releases/#get-a-single-release). You need to use an HTTP client which supports SNI (https://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint."},"file":{"type":"string | object","required":true,"mapTo":"input","description":"A file read stream, a String or a Buffer."},"contentType":{"type":"string","required":true,"mapTo":"headers.content-type","description":"The content type of the asset. This should be set in the Header. Example: 'application/zip'. For a list of acceptable types, refer this list of media types (https://www.iana.org/assignments/media-types/media-types.xhtml)"},"contentLength":{"type":"number","required":true,"mapTo":"headers.content-length","description":"File size in bytes."},"name":{"type":"string","required":true,"description":"The file name of the asset. This should be set in a URI query parameter."},"label":{"type":"string","description":"An alternate short description of the asset. Used in place of the filename. This should be set in a URI query parameter."}},"description":"Upload a release asset."},"getAsset":{"url":"/repos/:owner/:repo/releases/assets/:id","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Get a single release asset."},"editAsset":{"url":"/repos/:owner/:repo/releases/assets/:id","method":"PATCH","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true},"name":{"type":"string","required":true},"label":{"type":"string","description":"An alternate short description of the asset. Used in place of the filename."}},"description":"Edit a release asset."},"deleteAsset":{"url":"/repos/:owner/:repo/releases/assets/:id","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Delete a release asset."},"getStatsContributors":{"url":"/repos/:owner/:repo/stats/contributors","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Get contributors list with additions, deletions, and commit counts."},"getStatsCommitActivity":{"url":"/repos/:owner/:repo/stats/commit_activity","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Get the last year of commit activity data."},"getStatsCodeFrequency":{"url":"/repos/:owner/:repo/stats/code_frequency","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Get the number of additions and deletions per week."},"getStatsParticipation":{"url":"/repos/:owner/:repo/stats/participation","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Get the weekly commit count for the repository owner and everyone else."},"getStatsPunchCard":{"url":"/repos/:owner/:repo/stats/punch_card","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true}},"description":"Get the number of commits per hour in each day."},"createStatus":{"url":"/repos/:owner/:repo/statuses/:sha","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"sha":{"type":"string","required":true},"state":{"type":"string","required":true,"enum":["pending","success","error","failure"],"description":"State of the status - can be one of pending, success, error, or failure."},"target_url":{"type":"string","description":"Target url to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the ‘source’ of the Status."},"description":{"type":"string","description":"Short description of the status."},"context":{"type":"string","description":"A string label to differentiate this status from the status of other systems."}},"description":"Create a status."},"getStatuses":{"url":"/repos/:owner/:repo/commits/:ref/statuses","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"ref":{"type":"string","required":true,"description":"Ref to list the statuses from. It can be a SHA, a branch name, or a tag name."},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List statuses for a specfic ref."},"getCombinedStatusForRef":{"url":"/repos/:owner/:repo/commits/:ref/status","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"ref":{"type":"string","required":true,"description":"Ref to fetch the status for. It can be a SHA, a branch name, or a tag name."},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get the combined status for a specific ref."},"getReferrers":{"url":"/repos/:owner/:repo/traffic/popular/referrers","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get the top 10 referrers over the last 14 days."},"getPaths":{"url":"/repos/:owner/:repo/traffic/popular/paths","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get the top 10 popular contents over the last 14 days."},"getViews":{"url":"/repos/:owner/:repo/traffic/views","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get the total number of views and breakdown per day or week for the last 14 days."},"getClones":{"url":"/repos/:owner/:repo/traffic/clones","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get the total number of clones and breakdown per day or week for the last 14 days."},"getHooks":{"url":"/repos/:owner/:repo/hooks","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List hooks."},"getHook":{"url":"/repos/:owner/:repo/hooks/:id","method":"GET","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Get single hook."},"createHook":{"url":"/repos/:owner/:repo/hooks","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"name":{"type":"string","required":true},"config":{"type":"json","required":true,"description":"A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically."},"events":{"type":"string[]","default":"[\"push\"]","description":"Determines what events the hook is triggered for. Default: `['push']`."},"active":{"type":"boolean","description":"Determines whether the hook is actually triggered on pushes."}},"description":"Create a hook."},"editHook":{"url":"/repos/:owner/:repo/hooks/:id","method":"PATCH","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true},"name":{"type":"string","required":true},"config":{"type":"json","required":true,"description":"A Hash containing key/value pairs to provide settings for this hook. Modifying this will replace the entire config object. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically."},"events":{"type":"string[]","default":"[\"push\"]","description":"Determines what events the hook is triggered for. This replaces the entire array of events. Default: `['push']`."},"add_events":{"type":"string[]","description":"Determines a list of events to be added to the list of events that the Hook triggers for."},"remove_events":{"type":"string[]","description":"Determines a list of events to be removed from the list of events that the Hook triggers for."},"active":{"type":"boolean","description":"Determines whether the hook is actually triggered on pushes."}},"description":"Edit a hook."},"testHook":{"url":"/repos/:owner/:repo/hooks/:id/tests","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Test a [push] hook."},"pingHook":{"url":"/repos/:owner/:repo/hooks/:id/pings","method":"POST","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Ping a hook."},"deleteHook":{"url":"/repos/:owner/:repo/hooks/:id","method":"DELETE","params":{"owner":{"type":"string","required":true},"repo":{"type":"string","required":true},"id":{"type":"string","required":true}},"description":"Deleate a hook."}},"search":{"repos":{"url":"/search/repositories","method":"GET","headers":{"accept":"application/vnd.github.mercy-preview+json"},"params":{"q":{"type":"string","required":true,"description":"Search Term"},"sort":{"type":"string","enum":["stars","forks","updated"],"description":"stars, forks, or updated"},"order":{"type":"string","enum":["asc","desc"],"default":"desc","description":"asc or desc"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Search repositories."},"code":{"url":"/search/code","method":"GET","params":{"q":{"type":"string","required":true,"description":"Search Term"},"sort":{"type":"string","enum":["indexed"],"description":"The sort field. Can only be indexed, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: results are sorted by best match."},"order":{"type":"string","enum":["asc","desc"],"default":"desc","description":"asc or desc"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Search code."},"commits":{"url":"/search/commits","method":"GET","headers":{"accept":"application/vnd.github.cloak-preview+json"},"params":{"q":{"type":"string","required":true,"description":"Search Term"},"sort":{"type":"string","enum":["author-date","committer-date"],"description":"The sort field. Can be author-date or committer-date. Default: best match."},"order":{"type":"string","enum":["asc","desc"],"default":"desc","description":"asc or desc"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Search commits. (In preview period. See README.)"},"issues":{"url":"/search/issues","method":"GET","params":{"q":{"type":"string","required":true,"description":"Search Term"},"sort":{"type":"string","enum":["comments","created","updated"],"description":"The sort field. Can be comments, created, or updated. Default: results are sorted by best match."},"order":{"type":"string","enum":["asc","desc"],"default":"desc","description":"asc or desc"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Search issues."},"users":{"url":"/search/users","method":"GET","params":{"q":{"type":"string","required":true,"description":"Search Term"},"sort":{"type":"string","enum":["followers","repositories","joined"],"description":"The sort field. Can be followers, repositories, or joined. Default: results are sorted by best match."},"order":{"type":"string","enum":["asc","desc"],"default":"desc","description":"asc or desc"},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Search users."},"email":{"url":"/legacy/user/email/:email","method":"GET","params":{"email":{"type":"string","required":true,"description":"The email address"}},"description":"Search against public email addresses."}},"users":{"get":{"url":"/user","method":"GET","params":{},"description":"Get the authenticated user"},"update":{"url":"/user","method":"PATCH","params":{"name":{"type":"string","description":"The new name of the user"},"email":{"type":"string","description":"Publicly visible email address."},"blog":{"type":"string","description":"The new blog URL of the user."},"company":{"type":"string","description":"The new company of the user."},"location":{"type":"string","description":"The new location of the user."},"hireable":{"type":"boolean","description":"The new hiring availability of the user."},"bio":{"type":"string","description":"The new short biography of the user."}},"description":"Update the authenticated user"},"promote":{"url":"/users/:username/site_admin","method":"PUT","params":{"username":{"type":"string","required":true}},"description":"Promote an ordinary user to a site administrator"},"demote":{"url":"/users/:username/site_admin","method":"DELETE","params":{"username":{"type":"string","required":true}},"description":"Demote a site administrator to an ordinary user"},"suspend":{"url":"/users/:username/suspended","method":"PUT","params":{"username":{"type":"string","required":true}},"description":"Suspend a user"},"unsuspend":{"url":"/users/:username/suspended","method":"DELETE","params":{"username":{"type":"string","required":true}},"description":"Unsuspend a user"},"getForUser":{"url":"/users/:username","method":"GET","params":{"username":{"type":"string","required":true}},"description":"Get a single user"},"getById":{"url":"/user/:id","method":"GET","params":{"id":{"type":"string","required":true,"description":"Numerical ID of the user."}},"description":"Get a single user by GitHub ID. This method uses numerical user ID. Use users.getForUser method if you need to get a user by username."},"getAll":{"url":"/users","method":"GET","params":{"since":{"type":"number","description":"The integer ID of the last User that you’ve seen."}},"description":"Get all users"},"getOrgs":{"url":"/user/orgs","method":"GET","params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List organizations for the authenticated user."},"getOrgMemberships":{"url":"/user/memberships/orgs","method":"GET","params":{"state":{"type":"string","enum":["active","pending"],"description":"Indicates the state of the memberships to return. Can be either active or pending. If not specified, both active and pending memberships are returned."}},"description":"List your organization memberships"},"getOrgMembership":{"url":"/user/memberships/orgs/:org","method":"GET","params":{"org":{"type":"string","required":true}},"description":"Get your organization membership"},"editOrgMembership":{"url":"/user/memberships/orgs/:org","method":"PATCH","params":{"org":{"type":"string","required":true},"state":{"type":"string","required":true,"enum":["active"],"description":"The state that the membership should be in. Only \"active\" will be accepted."}},"description":"Edit your organization membership."},"getTeams":{"url":"/user/teams","method":"GET","headers":{"accept":"application/vnd.github.hellcat-preview+json"},"params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get your teams."},"getEmails":{"url":"/user/emails","method":"GET","params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List email addresses for a user."},"getPublicEmails":{"url":"/user/public_emails","method":"GET","params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List public email addresses for a user."},"addEmails":{"url":"/user/emails","method":"POST","params":{"emails":{"type":"string[]","required":true,"mapTo":"input","description":"You can post a single email address or an array of addresses."}},"description":"Add email address(es)."},"deleteEmails":{"url":"/user/emails","method":"DELETE","params":{"emails":{"type":"string[]","required":true,"mapTo":"input","description":"You can post a single email address or an array of addresses."}},"description":"Delete email address(es)."},"togglePrimaryEmailVisibility":{"url":"/user/email/visibility","method":"PATCH","params":{},"description":"Toggle primary email visibility."},"getFollowersForUser":{"url":"/users/:username/followers","method":"GET","params":{"username":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List a user's followers"},"getFollowers":{"url":"/user/followers","method":"GET","params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List the authenticated user's followers"},"getFollowingForUser":{"url":"/users/:username/following","method":"GET","params":{"username":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List who a user is following"},"getFollowing":{"url":"/user/following","method":"GET","params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List who the authenticated user is following"},"checkFollowing":{"url":"/user/following/:username","method":"GET","params":{"username":{"type":"string","required":true}},"description":"Check if you are following a user"},"checkIfOneFollowersOther":{"url":"/users/:username/following/:target_user","method":"GET","params":{"username":{"type":"string","required":true},"target_user":{"type":"string","required":true}},"description":"Check if one user follows another"},"followUser":{"url":"/user/following/:username","method":"PUT","params":{"username":{"type":"string","required":true}},"description":"Follow a user"},"unfollowUser":{"url":"/user/following/:username","method":"DELETE","params":{"username":{"type":"string","required":true}},"description":"Unfollow a user"},"getKeysForUser":{"url":"/users/:username/keys","method":"GET","params":{"username":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List public keys for a user"},"getKeys":{"url":"/user/keys","method":"GET","params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List your public keys"},"getKey":{"url":"/user/keys/:id","method":"GET","params":{"id":{"type":"string","required":true}},"description":"Get a single public key"},"createKey":{"url":"/user/keys","method":"POST","params":{"title":{"type":"string","required":true},"key":{"type":"string","required":true}},"description":"Create a public key"},"deleteKey":{"url":"/user/keys/:id","method":"DELETE","params":{"id":{"type":"string","required":true}},"description":"Delete a public key"},"getGpgKeysForUser":{"url":"/users/:username/gpg_keys","method":"GET","headers":{"accept":"application/vnd.github.cryptographer-preview"},"params":{"username":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Lists the GPG keys for a user. This information is accessible by anyone. (In preview period. See README.)"},"getGpgKeys":{"url":"/user/gpg_keys","method":"GET","headers":{"accept":"application/vnd.github.cryptographer-preview"},"params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List your GPG keys. (In preview period. See README.)"},"getGpgKey":{"url":"/user/gpg_keys/:id","method":"GET","headers":{"accept":"application/vnd.github.cryptographer-preview"},"params":{"id":{"type":"string","required":true}},"description":"Get a single GPG key. (In preview period. See README.)"},"createGpgKey":{"url":"/user/gpg_keys","method":"POST","headers":{"accept":"application/vnd.github.cryptographer-preview"},"params":{"armored_public_key":{"type":"string","required":true,"description":"GPG key contents"}},"description":"Create a GPG key. (In preview period. See README.)"},"deleteGpgKey":{"url":"/user/gpg_keys/:id","method":"DELETE","headers":{"accept":"application/vnd.github.cryptographer-preview"},"params":{"id":{"type":"string","required":true}},"description":"Delete a GPG key. (In preview period. See README.)"},"getBlockedUsers":{"url":"/user/blocks","method":"GET","headers":{"accept":"application/vnd.github.giant-sentry-fist-preview+json"},"params":{},"description":"List blocked users. (In preview period. See README.)"},"checkBlockedUser":{"url":"/user/blocks/:username","method":"GET","headers":{"accept":"application/vnd.github.giant-sentry-fist-preview+json"},"params":{"username":{"type":"string","required":true}},"description":"Check whether you've blocked a user. (In preview period. See README.)"},"blockUser":{"url":"/user/blocks/:username","method":"PUT","headers":{"accept":"application/vnd.github.giant-sentry-fist-preview+json"},"params":{"username":{"type":"string","required":true}},"description":"Block a user. (In preview period. See README.)"},"unblockUser":{"url":"/user/blocks/:username","method":"DELETE","headers":{"accept":"application/vnd.github.giant-sentry-fist-preview+json"},"params":{"username":{"type":"string","required":true}},"description":"Unblock a user. (In preview period. See README.)"},"getRepoInvites":{"url":"/user/repository_invitations","method":"GET","params":{},"description":"List a user's repository invitations."},"acceptRepoInvite":{"url":"/user/repository_invitations/:invitation_id","method":"PATCH","params":{"invitation_id":{"type":"string","required":true}},"description":"Accept a repository invitation."},"declineRepoInvite":{"url":"/user/repository_invitations/:invitation_id","method":"DELETE","params":{"invitation_id":{"type":"string","required":true}},"description":"Decline a repository invitation."},"getInstallations":{"url":"/user/installations","method":"GET","headers":{"accept":"application/vnd.github.machine-man-preview"},"params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List installations. (In preview period. See README.)"},"getInstallationRepos":{"url":"/user/installations/:installation_id/repositories","method":"GET","params":{"installation_id":{"type":"string","required":true},"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"List repositories accessible to the user for an installation. (In preview period. See README.)"},"addRepoToInstallation":{"url":"/user/installations/:installation_id/repositories/:repository_id","method":"PUT","headers":{"accept":"application/vnd.github.machine-man-preview"},"params":{"installation_id":{"type":"string","required":true},"repository_id":{"type":"string","required":true}},"description":"Add a single repository to an installation. (In preview period. See README.)"},"removeRepoFromInstallation":{"url":"/user/installations/:installation_id/repositories/:repository_id","method":"DELETE","headers":{"accept":"application/vnd.github.machine-man-preview"},"params":{"installation_id":{"type":"string","required":true},"repository_id":{"type":"string","required":true}},"description":"Remove a single repository from an installation. (In preview period. See README.)"},"getMarketplacePurchases":{"url":"/user/marketplace_purchases","method":"GET","headers":{"accept":"application/vnd.github.valkyrie-preview+json"},"params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get a user's Marketplace purchases. (In preview period. See README.)"},"getMarketplaceStubbedPurchases":{"url":"/user/marketplace_purchases/stubbed","method":"GET","headers":{"accept":"application/vnd.github.valkyrie-preview+json"},"params":{"page":{"type":"number","description":"Page number of the results to fetch."},"per_page":{"type":"number","default":"30","description":"A custom page size up to 100. Default is 30."}},"description":"Get a user's stubbed Marketplace purchases. (In preview period. See README.)"}},"enterprise":{"stats":{"url":"/enterprise/stats/:type","method":"GET","params":{"type":{"type":"string","required":true,"enum":["issues","hooks","milestones","orgs","comments","pages","users","gists","pulls","repos","all"],"description":"Possible values: issues, hooks, milestones, orgs, comments, pages, users, gists, pulls, repos, all."}},"description":"Get statistics."},"updateLdapForUser":{"url":"/admin/ldap/users/:username/mapping","method":"PATCH","params":{"username":{"type":"string","required":true},"ldap_dn":{"type":"string","required":true,"description":"LDAP DN for user"}},"description":"Update LDAP mapping for a user."},"syncLdapForUser":{"url":"/admin/ldap/users/:username/sync","method":"POST","params":{"username":{"type":"string","required":true}},"description":"Sync LDAP mapping for a user."},"updateLdapForTeam":{"url":"/admin/ldap/teams/:team_id/mapping","method":"PATCH","params":{"team_id":{"type":"number","required":true},"ldap_dn":{"type":"string","required":true,"description":"LDAP DN for user"}},"description":"Update LDAP mapping for a team."},"syncLdapForTeam":{"url":"/admin/ldap/teams/:team_id/sync","method":"POST","params":{"team_id":{"type":"number","required":true}},"description":"Sync LDAP mapping for a team."},"getLicense":{"url":"/enterprise/settings/license","method":"GET","params":{},"description":"Get license information"},"getPreReceiveEnvironment":{"url":"/admin/pre-receive-environments/:id","method":"GET","headers":{"accept":"application/vnd.github.eye-scream-preview"},"params":{"id":{"type":"string","required":true}},"description":"Get a single pre-receive environment. (In preview period. See README.)"},"getPreReceiveEnvironments":{"url":"/admin/pre_receive_environments","method":"GET","headers":{"accept":"application/vnd.github.eye-scream-preview"},"params":{},"description":"List pre-receive environments. (In preview period. See README.)"},"createPreReceiveEnvironment":{"url":"/admin/pre_receive_environments","method":"POST","headers":{"accept":"application/vnd.github.eye-scream-preview"},"params":{"name":{"type":"string","required":true,"description":"The new pre-receive environment's name."},"image_url":{"type":"string","required":true,"description":"URL from which to download a tarball of this environment."}},"description":"Create a pre-receive environment. (In preview period. See README.)"},"editPreReceiveEnvironment":{"url":"/admin/pre_receive_environments/:id","method":"PATCH","params":{"id":{"type":"string","required":true},"name":{"type":"string","required":true,"description":"This pre-receive environment's new name."},"image_url":{"type":"string","required":true,"description":"URL from which to download a tarball of this environment."}},"description":"Create a pre-receive environment. (In preview period. See README.)"},"deletePreReceiveEnvironment":{"url":"/admin/pre_receive_environments/:id","method":"DELETE","params":{"id":{"type":"string","required":true}},"description":"Delete a pre-receive environment. (In preview period. See README.)"},"getPreReceiveEnvironmentDownloadStatus":{"url":"/admin/pre-receive-environments/:id/downloads/latest","method":"GET","headers":{"accept":"application/vnd.github.eye-scream-preview"},"params":{"id":{"type":"string","required":true}},"description":"Get a pre-receive environment's download status. (In preview period. See README.)"},"triggerPreReceiveEnvironmentDownload":{"url":"/admin/pre_receive_environments/:id/downloads","method":"POST","headers":{"accept":"application/vnd.github.eye-scream-preview"},"params":{"id":{"type":"string","required":true}},"description":"Trigger a pre-receive environment download. (In preview period. See README.)"},"getPreReceiveHook":{"url":"/admin/pre-receive-hooks/:id","method":"GET","headers":{"accept":"application/vnd.github.eye-scream-preview"},"params":{"id":{"type":"string","required":true}},"description":"Get a single pre-receive hook. (In preview period. See README.)"},"getPreReceiveHooks":{"url":"/admin/pre-receive-hooks","method":"GET","headers":{"accept":"application/vnd.github.eye-scream-preview"},"params":{},"description":"List pre-receive hooks. (In preview period. See README.)"},"createPreReceiveHook":{"url":"/admin/pre-receive-hooks","method":"POST","headers":{"accept":"application/vnd.github.eye-scream-preview"},"params":{"name":{"type":"string","required":true,"description":"The name of the hook."},"script":{"type":"string","required":true,"description":"The script that the hook runs."},"script_repository":{"type":"json","required":true,"description":"The GitHub repository where the script is kept."},"environment":{"type":"json","required":true,"description":"The pre-receive environment where the script is executed."},"enforcement":{"type":"string","default":"disabled","description":"The state of enforcement for this hook. default: disabled"},"allow_downstream_configuration":{"type":"boolean","default":"false","description":"Whether enforcement can be overridden at the org or repo level. default: false"}},"description":"Create a pre-receive hook. (In preview period. See README.)"},"editPreReceiveHook":{"url":"/admin/pre_receive_hooks/:id","method":"PATCH","params":{"id":{"type":"string","required":true},"hook":{"type":"json","required":true,"mapTo":"input","description":"JSON object that contains pre-receive hook info."}},"description":"Edit a pre-receive hook. (In preview period. See README.)"},"deletePreReceiveHook":{"url":"/admin/pre_receive_hooks/:id","method":"DELETE","params":{"id":{"type":"string","required":true}},"description":"Delete a pre-receive hook. (In preview period. See README.)"},"queueIndexingJob":{"url":"/staff/indexing_jobs","method":"POST","params":{"target":{"type":"string","required":true,"description":"A string representing the item to index."}},"description":"Queue an indexing job"},"createOrg":{"url":"/admin/organizations","method":"POST","params":{"login":{"type":"string","required":true,"description":"The organization's username."},"admin":{"type":"string","required":true,"description":"The login of the user who will manage this organization."},"profile_name":{"type":"string","description":"The organization's display name."}},"description":"Create an organization"}}}

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = paginationPlugin

function paginationPlugin (octokit) {
  octokit.getFirstPage = __webpack_require__(178).bind(null, octokit)
  octokit.getLastPage = __webpack_require__(179).bind(null, octokit)
  octokit.getNextPage = __webpack_require__(180).bind(null, octokit)
  octokit.getPreviousPage = __webpack_require__(181).bind(null, octokit)
  octokit.hasFirstPage = __webpack_require__(182)
  octokit.hasLastPage = __webpack_require__(183)
  octokit.hasNextPage = __webpack_require__(184)
  octokit.hasPreviousPage = __webpack_require__(185)
}


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = getFirstPage

const getPage = __webpack_require__(19)

function getFirstPage (octokit, link, headers, callback) {
  return getPage(octokit, link, 'first', headers, callback)
}


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = getLastPage

const getPage = __webpack_require__(19)

function getLastPage (octokit, link, headers, callback) {
  return getPage(octokit, link, 'last', headers, callback)
}


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = getNextPage

const getPage = __webpack_require__(19)

function getNextPage (octokit, link, headers, callback) {
  return getPage(octokit, link, 'next', headers, callback)
}


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = getPreviousPage

const getPage = __webpack_require__(19)

function getPreviousPage (octokit, link, headers, callback) {
  return getPage(octokit, link, 'prev', headers, callback)
}


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = hasFirstPage

const getPageLinks = __webpack_require__(10)

function hasFirstPage (link) {
  return getPageLinks(link).first
}


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = hasLastPage

const getPageLinks = __webpack_require__(10)

function hasLastPage (link) {
  return getPageLinks(link).last
}


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = hasNextPage

const getPageLinks = __webpack_require__(10)

function hasNextPage (link) {
  return getPageLinks(link).next
}


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = hasPreviousPage

const getPageLinks = __webpack_require__(10)

function hasPreviousPage (link) {
  return getPageLinks(link).prev
}


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_ui_kit_Button_TertiaryButton__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ui_kit_Input_Input__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_querier__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_querier___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_querier__);




const css = __webpack_require__(193);
class SearchBox extends __WEBPACK_IMPORTED_MODULE_2_react__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleQueryChange = this.handleQueryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleSubmit();
    }
    handleQueryChange(e) {
        this.setState({
            value: e.currentTarget.value
        });
    }
    handleSubmit() {
        this.props.onSubmit(this.state.value);
    }
    render() {
        const { status } = this.props;
        const label = status && status === __WEBPACK_IMPORTED_MODULE_3_querier__["QuerierState"].Active ? 'Loading...' : 'Search';
        return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: css.SearchBox },
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: css.inputWrap },
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_app_ui_kit_Input_Input__["a" /* default */], { value: this.state.value, onChange: this.handleQueryChange, type: "text", placeholder: "Search github username..." })),
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: css.button },
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_app_ui_kit_Button_TertiaryButton__["a" /* default */], { onClick: this.handleSubmit }, label))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (SearchBox);


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_ui_kit_Button_Button__ = __webpack_require__(188);



const css = __webpack_require__(190);
const TertiaryButton = (buttonProps) => {
    const finalClassName = __WEBPACK_IMPORTED_MODULE_0_classnames__(css.TertiaryButton, buttonProps.disabled && css.disabled);
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_app_ui_kit_Button_Button__["a" /* default */], Object.assign({}, buttonProps, { className: finalClassName }));
};
/* harmony default export */ __webpack_exports__["a"] = (TertiaryButton);


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


const css = __webpack_require__(189);
class Button extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        const { onClick } = this.props;
        if (onClick) {
            e.preventDefault();
            onClick();
        }
    }
    render() {
        const { children, className, disabled, type, itemElement, loading } = this.props;
        const buttonProps = {
            type,
            disabled: !!disabled,
            onClick: this.handleClick,
            className: __WEBPACK_IMPORTED_MODULE_0_classnames__(css.Button, disabled && css.disabled, className)
        };
        const content = loading ? 'Please wait...' : children;
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](itemElement || 'button', Object.assign({}, buttonProps), content);
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Button);


/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports = {
	"Button": "Button__Button___TsuMD",
	"disabled": "Button__disabled___2YBm8"
};

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = {
	"TertiaryButton": "TertiaryButton__TertiaryButton___2DQn2",
	"disabled": "TertiaryButton__disabled___13PMv"
};

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};


const css = __webpack_require__(192);
const Input = (props) => {
    const { label, error, className } = props, inputProps = __rest(props, ["label", "error", "className"]);
    const inputClassNames = __WEBPACK_IMPORTED_MODULE_1_classnames__(css.Input, error && css.inputInvalid, className);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: inputClassNames },
        label && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: css.label }, label),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", Object.assign({ className: css.inputElement }, inputProps)),
        error && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", { className: css.errorMessage }, error)));
};
/* harmony default export */ __webpack_exports__["a"] = (Input);


/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = {
	"Input": "Input__Input___qr16o",
	"label": "Input__label___3MHee",
	"inputElement": "Input__inputElement___1CsCx",
	"errorMessage": "Input__errorMessage___LBT3L"
};

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = {
	"SearchBox": "SearchBox__SearchBox___um2-4",
	"inputWrap": "SearchBox__inputWrap___1TKqo",
	"button": "SearchBox__button___1TIe1"
};

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_services_navigation__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ui_kit_List_List__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_ui_kit_Typography_HeaderLevel1__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_ui_kit_Typography_TextLabels__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);





const css = __webpack_require__(207);
const SearchResult = ({ data }) => {
    return (__WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("div", { className: css.SearchResult, onClick: () => {
            Object(__WEBPACK_IMPORTED_MODULE_0_app_services_navigation__["a" /* navigateTo */])('/organisation/' + data.login);
        } },
        __WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("div", { className: css.imageWrap },
            __WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("img", { src: data.avatar_url, className: css.avatar })),
        __WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("div", { className: css.details },
            __WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_app_ui_kit_Typography_TextLabels__["a" /* TextLabel */], { className: css.name }, data.login),
            __WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("br", null),
            __WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_app_ui_kit_Typography_TextLabels__["b" /* TextLabelSmallMediumGrey */], { className: css.name }, data.type))));
};
const resultRenderer = (item) => {
    return __WEBPACK_IMPORTED_MODULE_4_react__["createElement"](SearchResult, { data: item });
};
const SearchResults = ({ results }) => {
    const empty = results.length === 0
        ? __WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_app_ui_kit_Typography_HeaderLevel1__["a" /* default */], { className: css.empty }, "No results...")
        : null;
    return (__WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react__["Fragment"], null, empty || __WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_app_ui_kit_List_List__["a" /* default */], { className: css.SearchResults, items: results, itemRenderer: resultRenderer })));
};
/* harmony default export */ __webpack_exports__["a"] = (SearchResults);


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);

let flokkHistory;
const history = () => {
    if (!flokkHistory) {
        flokkHistory = __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()();
    }
    return flokkHistory;
};
/* unused harmony export history */

const navigateTo = (url) => {
    history().push(url);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = navigateTo;



/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(59);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(197);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(198);

var _PathUtils = __webpack_require__(60);

var _createTransitionManager = __webpack_require__(201);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(202);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = __webpack_require__(199);

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(200);

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = require("resolve-pathname");

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = require("value-equal");

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(59);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = {
	"List": "List__List___1dhJh",
	"listItem": "List__listItem___TabBQ"
};

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);


const css = __webpack_require__(205);
const HeaderLevel1 = ({ className, children }) => {
    const classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(css.HeaderLevel1, className);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: classes }, children));
};
/* harmony default export */ __webpack_exports__["a"] = (HeaderLevel1);


/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = {
	"HeaderLevel1": "HeaderLevel1__HeaderLevel1___2RVxK"
};

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = {
	"TextLabel": "TextLabels__TextLabel___3s7y3",
	"mediumGrey": "TextLabels__mediumGrey___1nPfo"
};

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = {
	"SearchResults": "SearchResults__SearchResults___BpDTo",
	"SearchResult": "SearchResults__SearchResult___36vTB",
	"imageWrap": "SearchResults__imageWrap___wVlPD",
	"avatar": "SearchResults__avatar___3QpmS",
	"empty": "SearchResults__empty___3reBV"
};

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = require("react-json-tree");

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_components_organisation_OrganisationDetails__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_components_organisation_OrganisationRepositiories__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_octokit__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_ui_kit_Feedback_Feedback__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_querier__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_querier___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_querier__);






class OrganisationPage extends __WEBPACK_IMPORTED_MODULE_4_react__["Component"] {
    constructor(props) {
        super(props);
    }
    renderDetails() {
        const { orgName, states, results: { organisation } } = this.props;
        return (__WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react__["Fragment"], null,
            __WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_app_ui_kit_Feedback_Feedback__["a" /* default */], { states: { organisation: states.organisation }, text: `Loading ${orgName} details...` }),
            organisation && __WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_app_components_organisation_OrganisationDetails__["a" /* default */], { details: organisation })));
    }
    renderRepos() {
        const { orgName, states, results: { repos } } = this.props;
        return (__WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react__["Fragment"], null,
            __WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_app_ui_kit_Feedback_Feedback__["a" /* default */], { states: { repos: states.repos }, text: `Loading ${orgName} repos...` }),
            repos && __WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_app_components_organisation_OrganisationRepositiories__["a" /* default */], { repos: repos })));
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react__["Fragment"], null,
            this.renderDetails(),
            this.renderRepos()));
    }
}
const organisationPageQueries = {
    inputQueries: {
        organisation: {
            query: __WEBPACK_IMPORTED_MODULE_2_app_services_octokit__["a" /* getOrganisationDetails */],
        },
        repos: {
            query: __WEBPACK_IMPORTED_MODULE_2_app_services_octokit__["b" /* getOrganisationRepositories */]
        }
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = organisationPageQueries;

const OrganisationPageWithData = Object(__WEBPACK_IMPORTED_MODULE_5_querier__["withData"])(organisationPageQueries)(OrganisationPage);
const OrganisationPageRoute = (props) => {
    return __WEBPACK_IMPORTED_MODULE_4_react__["createElement"](OrganisationPageWithData, { orgName: props.match.params.orgName });
};
/* harmony default export */ __webpack_exports__["a"] = (OrganisationPageRoute);


/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_ui_kit_Typography_HeaderLevel2__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_ui_kit_Typography_TextLabels__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);




const css = __webpack_require__(213);
const OrganisationDetails = ({ details }) => {
    return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: css.OrganisationDetails },
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: css.back },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"], { to: "/", replace: false }, "\u25C0")),
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: css.avatar },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("img", { src: details.avatar_url })),
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: css.details },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_app_ui_kit_Typography_HeaderLevel2__["a" /* default */], null, details.name),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("a", { href: details.html_url, target: "_blank" }, "View on Github")),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: css.repos },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: css.count }, details.public_repos),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_app_ui_kit_Typography_TextLabels__["b" /* TextLabelSmallMediumGrey */], null, "Repositories")))));
};
/* harmony default export */ __webpack_exports__["a"] = (OrganisationDetails);


/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = {
	"HeaderLevel2": "HeaderLevel2__HeaderLevel2___18ckQ"
};

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = {
	"OrganisationDetails": "OrganisationDetails__OrganisationDetails___2omBa",
	"avatar": "OrganisationDetails__avatar___3Apxj",
	"details": "OrganisationDetails__details___2sawH",
	"repos": "OrganisationDetails__repos___rjK4V",
	"count": "OrganisationDetails__count___2OM22",
	"back": "OrganisationDetails__back___32nY4"
};

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_components_organisation_RepositoryPanel__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


const OrganisationRepositories = ({ repos }) => {
    return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], null, repos.map((repo) => {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_app_components_organisation_RepositoryPanel__["a" /* default */], { name: repo.name, owner: repo.owner.login, id: repo.id, key: repo.id }));
    })));
};
/* harmony default export */ __webpack_exports__["a"] = (OrganisationRepositories);


/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ui_kit_AccordionPanel_AccordionPanel__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_components_organisation_RepositoryDetails__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_components_organisation_RepositoryContributors__ = __webpack_require__(226);




const RepositoryPanel = ({ name, owner, id }) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_app_ui_kit_AccordionPanel_AccordionPanel__["a" /* default */], { title: name },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_app_components_organisation_RepositoryDetails__["a" /* default */], { id: id }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_app_components_organisation_RepositoryContributors__["a" /* default */], { owner: owner, repo: name }))));
};
/* harmony default export */ __webpack_exports__["a"] = (RepositoryPanel);


/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AccordionPanelTitle__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AccordionPanelContent__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);



const css = __webpack_require__(223);

class AccordionPanel extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
        this.handleAccordionPanelClick = this.handleAccordionPanelClick.bind(this);
    }
    handleAccordionPanelClick() {
        this.setState({ isActive: !this.state.isActive });
    }
    render() {
        const { className, title, children } = this.props;
        const { isActive } = this.state;
        const finalTitleClassName = __WEBPACK_IMPORTED_MODULE_3_classnames__(css.title, isActive && css.titleActive);
        const finalContentClassName = __WEBPACK_IMPORTED_MODULE_3_classnames__(css.content, isActive && css.contentExpanded);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_3_classnames__(css.AccordionPanel, className) },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__AccordionPanelTitle__["a" /* default */], { onClick: this.handleAccordionPanelClick, className: finalTitleClassName, isActive: isActive }, title),
            this.state.isActive && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__AccordionPanelContent__["a" /* default */], { className: finalContentClassName }, children)));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (AccordionPanel);


/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ui_kit_Icon_Icon__ = __webpack_require__(219);


const css = __webpack_require__(218);

const AccordionPanelTitle = ({ className, children, onClick, isActive }) => {
    const classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(css.AccordionPanelTitle, className);
    const iconComponent = isActive ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_ui_kit_Icon_Icon__["a" /* default */], { name: "minus" }) : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_ui_kit_Icon_Icon__["a" /* default */], { name: "plus" });
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: classes, onClick: onClick },
        children,
        iconComponent));
};
/* harmony default export */ __webpack_exports__["a"] = (AccordionPanelTitle);


/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = {
	"AccordionPanelTitle": "AccordionPanelTitle__AccordionPanelTitle___N4Bh_"
};

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_utils_string_capitalizeFirstLetter__ = __webpack_require__(220);



const Icon = ({ className, name }) => {
    const iconName = `icon${Object(__WEBPACK_IMPORTED_MODULE_2_app_utils_string_capitalizeFirstLetter__["a" /* default */])(name)}`;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(iconName, className) });
};
/* harmony default export */ __webpack_exports__["a"] = (Icon);


/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};
/* harmony default export */ __webpack_exports__["a"] = (capitalizeFirstLetter);


/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const css = __webpack_require__(222);
const AccordionPanelContent = ({ className, children }) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: className },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: css.AccordionPanelContent }, children)));
};
/* harmony default export */ __webpack_exports__["a"] = (AccordionPanelContent);


/***/ }),
/* 222 */
/***/ (function(module, exports) {

module.exports = {
	"AccordionPanelContent": "AccordionPanelContent__AccordionPanelContent___2nRcc"
};

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports = {
	"AccordionPanel": "AccordionPanel__AccordionPanel___2Bwm-",
	"content": "AccordionPanel__content___FsFqP",
	"contentExpanded": "AccordionPanel__contentExpanded___3Vv_f",
	"title": "AccordionPanel__title___3s3kN",
	"titleActive": "AccordionPanel__titleActive___3GUul"
};

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_services_octokit__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ui_kit_Feedback_Feedback__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_ui_kit_Typography_TextLabels__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_querier__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_querier___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_querier__);





const css = __webpack_require__(225);
class RepositoryDetails extends __WEBPACK_IMPORTED_MODULE_3_react__["Component"] {
    render() {
        const { states, results: { repository } } = this.props;
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react__["Fragment"], null,
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_app_ui_kit_Feedback_Feedback__["a" /* default */], { states: states }),
            repository && __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: css.RepositoryDetails },
                __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: css.row },
                    __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_app_ui_kit_Typography_TextLabels__["b" /* TextLabelSmallMediumGrey */], null, "Language: "),
                    __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_app_ui_kit_Typography_TextLabels__["a" /* TextLabel */], null, repository.language)),
                __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: css.row },
                    __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_app_ui_kit_Typography_TextLabels__["b" /* TextLabelSmallMediumGrey */], null, "Homepage: "),
                    __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("a", { href: repository.homepage, target: "_blank" }, repository.homepage)))));
    }
}
const repositoryDetailsQueries = {
    inputQueries: {
        repository: {
            query: __WEBPACK_IMPORTED_MODULE_0_app_services_octokit__["c" /* getRepository */]
        }
    }
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_querier__["withData"])(repositoryDetailsQueries)(RepositoryDetails));


/***/ }),
/* 225 */
/***/ (function(module, exports) {

module.exports = {
	"RepositoryDetails": "RepositoryDetails__RepositoryDetails___1KdyW",
	"row": "RepositoryDetails__row___1bbUy"
};

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_services_octokit__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ui_kit_Feedback_Feedback__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_ui_kit_List_List__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_querier__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_querier___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_querier__);





const css = __webpack_require__(227);
class RepositoryContirbutors extends __WEBPACK_IMPORTED_MODULE_3_react__["Component"] {
    renderContributor(item) {
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: css.contributor },
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("img", { src: item.avatar_url })));
    }
    render() {
        const { states, results: { contributors } } = this.props;
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react__["Fragment"], null,
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_app_ui_kit_Feedback_Feedback__["a" /* default */], { text: "Loading contributors...", states: states }),
            contributors &&
                __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_app_ui_kit_List_List__["a" /* default */], { className: css.list, items: contributors, itemRenderer: this.renderContributor }))));
    }
}
const repositortContributorsQueries = {
    inputQueries: {
        contributors: {
            query: __WEBPACK_IMPORTED_MODULE_0_app_services_octokit__["d" /* getRepositoryContributors */]
        }
    }
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_querier__["withData"])(repositortContributorsQueries)(RepositoryContirbutors));


/***/ }),
/* 227 */
/***/ (function(module, exports) {

module.exports = {
	"list": "RepositoryContributors__list___3198V",
	"contributor": "RepositoryContributors__contributor___2c4oi"
};

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const ErrorPage = () => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Ops, something went wrong"));
};
/* harmony default export */ __webpack_exports__["a"] = (ErrorPage);


/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const NotFoundPage = () => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Sorry, content not found"));
};
/* harmony default export */ __webpack_exports__["a"] = (NotFoundPage);


/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports = {
	"App": "App__App___1Ytu5"
};

/***/ }),
/* 231 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 233 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  flushModuleIds: __webpack_require__(32).flushModuleIds,
  flushChunkNames: __webpack_require__(32).flushChunkNames,
  clearChunks: __webpack_require__(32).clearChunks,
  ReportChunks: __webpack_require__(236).default
}


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "development" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (true) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module)))

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(237);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 237 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filesFromChunks = exports.concatFilesAtKeys = exports.normalizePath = exports.isUnique = exports.createFilesByModuleId = exports.createFilesByPath = exports.flushWebpack = exports.flushBabel = exports.flush = exports.flushFilesPure = exports.flushFiles = exports.flushChunks = undefined;

var _createApiWithCss = __webpack_require__(239);

var _createApiWithCss2 = _interopRequireDefault(_createApiWithCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var filesByPath = null;
var filesByModuleId = null;

var IS_WEBPACK = typeof __webpack_require__ !== 'undefined';
var IS_TEST = "development" === 'test';
var defaults = {
  before: ['bootstrap', 'vendor'],
  after: ['main']
};

/** PUBLIC API */

exports.default = function (stats, opts) {
  return flushChunks(stats, IS_WEBPACK, opts);
};

var flushChunks = function flushChunks(stats, isWebpack) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var beforeEntries = opts.before || defaults.before;
  var jsBefore = filesFromChunks(beforeEntries, stats.assetsByChunkName);

  var files = opts.chunkNames ? filesFromChunks(opts.chunkNames, stats.assetsByChunkName, true) : flush(opts.moduleIds || [], stats, opts.rootDir, isWebpack);

  var afterEntries = opts.after || defaults.after;
  var jsAfter = filesFromChunks(afterEntries, stats.assetsByChunkName);

  return (0, _createApiWithCss2.default)([].concat(_toConsumableArray(jsBefore), _toConsumableArray(files), _toConsumableArray(jsAfter)), [].concat(_toConsumableArray(jsBefore), _toConsumableArray(jsAfter.reverse()), _toConsumableArray(files)), stats, opts.outputPath);
};

var flushFiles = function flushFiles(stats, opts) {
  return flushFilesPure(stats, IS_WEBPACK, opts);
};

var flushFilesPure = function flushFilesPure(stats, isWebpack, opts) {
  var files = opts.chunkNames ? filesFromChunks(opts.chunkNames, stats.assetsByChunkName) : flush(opts.moduleIds || [], stats, opts.rootDir, isWebpack);

  var filter = opts.filter;

  if (filter) {
    if (typeof filter === 'function') {
      return files.filter(filter);
    }

    var regex = filter instanceof RegExp ? filter : new RegExp('.' + filter + '$');
    return files.filter(function (file) {
      return regex.test(file);
    });
  }

  return files;
};

/** BABEL VS. WEBPACK FLUSHING */

var flush = function flush(moduleIds, stats, rootDir, isWebpack) {
  return !isWebpack ? flushBabel(moduleIds, stats, rootDir).filter(isUnique) : flushWebpack(moduleIds, stats).filter(isUnique);
};

var flushBabel = function flushBabel(paths, stats, rootDir) {
  if (!rootDir) {
    throw new Error('No `rootDir` was provided as an option to `flushChunks`.\n      Please provide one so modules rendered server-side can be\n      paired to their webpack equivalents client-side, and their\n      corresponding chunks.');
  }

  var dir = rootDir; // satisfy flow

  filesByPath = filesByPath && !IS_TEST ? filesByPath // cached
  : createFilesByPath(stats);

  return concatFilesAtKeys(filesByPath, paths.map(function (p) {
    return normalizePath(p, dir);
  }));
};

var flushWebpack = function flushWebpack(ids, stats) {
  filesByModuleId = filesByModuleId && !IS_TEST ? filesByModuleId // cached
  : createFilesByModuleId(stats);

  return concatFilesAtKeys(filesByModuleId, ids);
};

/** CREATE FILES MAP */

var createFilesByPath = function createFilesByPath(_ref) {
  var chunks = _ref.chunks,
      modules = _ref.modules;

  var filesByChunk = chunks.reduce(function (chunks, chunk) {
    chunks[chunk.id] = chunk.files;
    return chunks;
  }, {});

  return modules.reduce(function (filesByPath, module) {
    var filePath = module.name;
    var files = concatFilesAtKeys(filesByChunk, module.chunks);

    filesByPath[filePath] = files.filter(isUnique);
    return filesByPath;
  }, {});
};

var createFilesByModuleId = function createFilesByModuleId(stats) {
  var filesByPath = createFilesByPath(stats);

  return stats.modules.reduce(function (filesByModuleId, module) {
    var filePath = module.name;
    var id = module.id;

    filesByModuleId[id] = filesByPath[filePath];
    return filesByModuleId;
  }, {});
};

/** HELPERS */

var isUnique = function isUnique(v, i, self) {
  return self.indexOf(v) === i;
};

var normalizePath = function normalizePath(path, rootDir) {
  return path.replace(rootDir, '.').replace(/\.js$/, '') + '.js';
};

var concatFilesAtKeys = function concatFilesAtKeys(inputFilesMap, pathsOrIdsOrChunks) {
  return pathsOrIdsOrChunks.reduce(function (files, key) {
    return files.concat(inputFilesMap[key] || []);
  }, []);
};

var filesFromChunks = function filesFromChunks(chunkNames, assets, checkChunkNames) {
  var _ref2;

  var hasChunk = function hasChunk(entry) {
    var result = !!(assets[entry] || assets[entry + '-']);
    if (!result && checkChunkNames) {
      console.warn('[FLUSH CHUNKS]: Unable to find ' + entry + ' in Webpack chunks. Please check usage of Babel plugin.');
    }

    return result;
  };

  var entryToFiles = function entryToFiles(entry) {
    return assets[entry] || assets[entry + '-'];
  };

  return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(chunkNames.filter(hasChunk).map(entryToFiles)));
};

/** EXPORTS FOR TESTS */

exports.flushChunks = flushChunks;
exports.flushFiles = flushFiles;
exports.flushFilesPure = flushFilesPure;
exports.flush = flush;
exports.flushBabel = flushBabel;
exports.flushWebpack = flushWebpack;
exports.createFilesByPath = createFilesByPath;
exports.createFilesByModuleId = createFilesByModuleId;
exports.isUnique = isUnique;
exports.normalizePath = normalizePath;
exports.concatFilesAtKeys = concatFilesAtKeys;
exports.filesFromChunks = filesFromChunks;

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCssHash = exports.stylesAsString = exports.isCss = exports.isJs = exports.getJsFileRegex = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _fs = __webpack_require__(240);

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEV = "development" === 'development';

/** CREATE API WITH CSS */

exports.default = function (files, filesOrderedForCss, stats, outputPath) {
  var publicPath = stats.publicPath.replace(/\/$/, '');
  var regex = getJsFileRegex(files);
  var scripts = files.filter(function (file) {
    return isJs(regex, file);
  });
  var stylesheets = filesOrderedForCss.filter(isCss);
  var cssHashRaw = createCssHash(stats);

  var api = {
    // 1) Use as React components using ReactDOM.renderToStaticMarkup, eg:
    // <html><Styles /><Js /><html>
    Js: function Js() {
      return _react2.default.createElement(
        'span',
        null,
        scripts.map(function (file, key) {
          return _react2.default.createElement('script', {
            type: 'text/javascript',
            src: publicPath + '/' + file,
            key: key,
            defer: true
          });
        })
      );
    },
    Styles: function Styles() {
      return _react2.default.createElement(
        'span',
        null,
        stylesheets.map(function (file, key) {
          return _react2.default.createElement('link', { rel: 'stylesheet', href: publicPath + '/' + file, key: key });
        })
      );
    },

    // 2) Use as string, eg: `${styles} ${js}`
    js: {
      toString: function toString() {
        return (
          // lazy-loaded in case not used
          scripts.map(function (file) {
            return '<script type=\'text/javascript\' src=\'' + publicPath + '/' + file + '\' defer></script>';
          }).join('\n')
        );
      }
    },
    styles: {
      toString: function toString() {
        return (
          // lazy-loaded in case not used
          stylesheets.map(function (file) {
            return '<link rel=\'stylesheet\' href=\'' + publicPath + '/' + file + '\' />';
          }).join('\n')
        );
      }
    },

    // 3) Embed the raw css without needing to load another file.
    // Use as a React component (<Css />) or a string (`${css}`):
    // NOTE: during development, HMR requires stylesheets.
    Css: function Css() {
      return DEV ? api.Styles() : _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'style',
          null,
          stylesAsString(stylesheets, outputPath)
        )
      );
    },
    css: {
      toString: function toString() {
        return (
          // lazy-loaded in case not used
          DEV ? api.styles.toString() : '<style>' + stylesAsString(stylesheets, outputPath) + '</style>'
        );
      }
    },

    // 4) names of files without publicPath or outputPath prefixed:
    scripts: scripts,
    stylesheets: stylesheets,

    // 5) for completeness provide the paths even though they were inputs:
    publicPath: publicPath,
    outputPath: outputPath,

    // 6) special goodness for dual-file import()
    cssHashRaw: cssHashRaw,
    CssHash: function CssHash() {
      return _react2.default.createElement('script', {
        type: 'text/javascript',
        dangerouslySetInnerHTML: {
          __html: 'window.__CSS_CHUNKS__ = ' + JSON.stringify(cssHashRaw)
        }
      });
    },
    cssHash: {
      toString: function toString() {
        return '<script type=\'text/javascript\'>window.__CSS_CHUNKS__= ' + JSON.stringify(cssHashRaw) + '</script>';
      }
    }
  };

  return api;
};

/** HELPERS */

var getJsFileRegex = exports.getJsFileRegex = function getJsFileRegex(files) {
  var isUsingExtractCssChunk = !!files.find(function (file) {
    return file.includes('no_css');
  });
  return isUsingExtractCssChunk ? /\.no_css\.js$/ : /\.js$/;
};

var isJs = exports.isJs = function isJs(regex, file) {
  return regex.test(file) && !/\.hot-update\.js$/.test(file);
};

var isCss = exports.isCss = function isCss(file) {
  return (/\.css$/.test(file)
  );
};

var stylesAsString = exports.stylesAsString = function stylesAsString(stylesheets, outputPath) {
  if (!outputPath) {
    throw new Error('No `outputPath` was provided as an option to `flushChunks`. \n      Please provide one so stylesheets can be read from the\n      file system since you\'re embedding the css as a string.');
  }

  var path = outputPath.replace(/\/$/, '');

  return stylesheets.map(function (file) {
    var filePath = path + '/' + file;
    return _fs2.default.readFileSync(filePath, 'utf8');
  }).join('\n').replace(/\/\*# sourceMappingURL=.+\*\//g, ''); // hide prod sourcemap err
};

var createCssHash = exports.createCssHash = function createCssHash(_ref) {
  var assetsByChunkName = _ref.assetsByChunkName,
      publicPath = _ref.publicPath;
  return Object.keys(assetsByChunkName).reduce(function (hash, name) {
    if (!assetsByChunkName[name] || !assetsByChunkName[name].find) return hash;
    var file = assetsByChunkName[name].find(function (file) {
      return file.endsWith('.css');
    });
    if (file) hash[name] = '' + publicPath + file;
    return hash;
  }, {});
};

/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_data_store__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_routes__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_config__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_querier__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_querier___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_querier__);





const getQueriesFromRoutes = (matchedRoutes) => {
    // tslint:disable-next-line
    let queries = [];
    // tslint:disable-next-line
    matchedRoutes.map((matchedRoute) => {
        const { route, match } = matchedRoute;
        if (route.initialData) {
            const params = match.params;
            const routeQueries = route.initialData.inputQueries;
            if (routeQueries) {
                for (let routeQueryKey in routeQueries) {
                    if (routeQueryKey) {
                        // tslint:disable-next-line
                        let query;
                        let queryKey;
                        const queryToApply = routeQueries[routeQueryKey].query;
                        const effects = routeQueries[routeQueryKey].resultActions;
                        query = () => queryToApply(params);
                        queryKey = Object(__WEBPACK_IMPORTED_MODULE_4_querier__["buildQueryKey"])(queryToApply, params);
                        queries = queries.concat([{
                                query,
                                queryKey,
                                props: params,
                                effects,
                                hot: !!(routeQueries[routeQueryKey].hot),
                            }]);
                    }
                }
            }
        }
    });
    return {
        queries,
    };
};
const resolveInitialDataSaga = (url, store) => function* resolve() {
    const querier = new __WEBPACK_IMPORTED_MODULE_4_querier___default.a({}, store.dispatch);
    // Collect all queries from matched routes and send them to fetch required data
    const matchedRoutes = Object(__WEBPACK_IMPORTED_MODULE_2_react_router_config__["matchRoutes"])(__WEBPACK_IMPORTED_MODULE_1_app_routes__["a" /* default */], url);
    const { queries } = getQueriesFromRoutes(matchedRoutes);
    const queryCalls = queries.map((query) => {
        return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["b" /* call */])(querier.sendQuery, query);
    });
    yield Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["a" /* all */])(queryCalls);
    return querier;
};
const resolveInitialData = (url, store) => {
    // TODO: handle exceptions in a more sophisticated way
    if (url === '/error' || url === '/404') {
        return Promise.resolve();
    }
    return __WEBPACK_IMPORTED_MODULE_0_app_data_store__["b" /* sagaMiddleware */].run(resolveInitialDataSaga(url, store)).done;
};
/* harmony default export */ __webpack_exports__["a"] = (resolveInitialData);


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map