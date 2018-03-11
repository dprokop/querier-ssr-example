webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ui_kit_Typography_HeaderLevel2__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querier__ = __webpack_require__(16);



const Feedback = ({ states, text }) => {
    const combinedState = Object(__WEBPACK_IMPORTED_MODULE_2_querier__["c" /* combineStates */])(states);
    if (combinedState.state === __WEBPACK_IMPORTED_MODULE_2_querier__["b" /* QuerierState */].Error) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_app_ui_kit_Typography_HeaderLevel2__["a" /* default */], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                "Shit went wrong ",
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("pre", null, "\u00AF\\_(\u30C4)_/\u00AF")));
    }
    if (combinedState.state === __WEBPACK_IMPORTED_MODULE_2_querier__["b" /* QuerierState */].Active) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_app_ui_kit_Typography_HeaderLevel2__["a" /* default */], null, text || `Loading data...`);
    }
    return null;
};
/* harmony default export */ __webpack_exports__["a"] = (Feedback);


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);

let flokkHistory;
const history = () => {
    if (!flokkHistory) {
        flokkHistory = __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()();
    }
    return flokkHistory;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = history;

const navigateTo = (url) => {
    history().push(url);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = navigateTo;



/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);

const css = __webpack_require__(348);

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

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuerierState; });
/* unused harmony export QuerierLogger */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuerierProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return withData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return combineStates; });
/* unused harmony export buildQueryKey */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var QuerierLogger = /** @class */ (function () {
    function QuerierLogger() {
        // tslint:disable-next-line
        this.logs = [];
    }
    QuerierLogger.prototype.log = function (label, data) {
        if (true) {
            console.groupCollapsed('Querier: ' + label);
            // tslint:disable-next-line
            console.info(data);
            console.groupEnd();
        }
    };
    return QuerierLogger;
}());

var QuerierState;
(function (QuerierState) {
    QuerierState[QuerierState["Pending"] = 0] = "Pending";
    QuerierState[QuerierState["Active"] = 1] = "Active";
    QuerierState[QuerierState["Success"] = 2] = "Success";
    QuerierState[QuerierState["Error"] = 3] = "Error";
})(QuerierState || (QuerierState = {}));

var Querier = /** @class */ (function () {
    // tslint:disable-next-line
    function Querier(store, dispatch) {
        this.logger = new QuerierLogger();
        this.store = store || {};
        this.listeners = new Map();
        this.reduxDispatch = dispatch;
        this.sendQuery = this.sendQuery.bind(this);
        this.notify = this.notify.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.getEntry = this.getEntry.bind(this);
    }
    Querier.prototype.sendQuery = function (queryDescriptor) {
        return __awaiter(this, void 0, void 0, function () {
            var query, queryKey, effects, hot, props, possibleQueryResult, queryState, result_1, dispatch_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = queryDescriptor.query, queryKey = queryDescriptor.queryKey, effects = queryDescriptor.effects, hot = queryDescriptor.hot, props = queryDescriptor.props;
                        possibleQueryResult = this.store[queryKey];
                        if (!!!hot &&
                            possibleQueryResult &&
                            (possibleQueryResult.result ||
                                possibleQueryResult.state.state === QuerierState.Active)) {
                            this.logger.log('Serving query from cache', possibleQueryResult);
                            this.notify(queryKey);
                            return [2 /*return*/];
                        }
                        queryState = {};
                        queryState[queryKey] = {
                            id: queryKey,
                            result: null,
                            state: {
                                state: QuerierState.Active
                            },
                            $props: props,
                            $reason: queryDescriptor.reason || null
                        };
                        this.store = __assign({}, this.store, queryState);
                        this.notify(queryKey);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.logger.log('Sending query', __assign({}, queryState[queryKey]));
                        return [4 /*yield*/, query()];
                    case 2:
                        result_1 = _a.sent();
                        queryState[queryKey] = __assign({}, queryState[queryKey], { result: result_1, state: {
                                state: QuerierState.Success
                            } });
                        this.store = __assign({}, this.store, queryState);
                        this.logger.log('Query succeeded', __assign({}, queryState[queryKey]));
                        if (effects && this.reduxDispatch) {
                            this.logger.log('Performing query effects', __assign({}, effects));
                            dispatch_1 = this.reduxDispatch;
                            effects.forEach(function (effect) {
                                dispatch_1(effect(result_1));
                            });
                        }
                        this.notify(queryKey);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        queryState[queryKey] = __assign({}, queryState[queryKey], { result: null, state: {
                                state: QuerierState.Error,
                                error: e_1
                            } });
                        this.store = __assign({}, this.store, queryState);
                        this.logger.log('Query failed', __assign({}, queryState[queryKey]));
                        this.notify(queryKey);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Querier.prototype.getStore = function () {
        return this.store;
    };
    Querier.prototype.getEntry = function (key) {
        if (this.getStore()[key]) {
            return this.getStore()[key];
        }
        return null;
    };
    Querier.prototype.subscribe = function (queryKey, listener) {
        var _this = this;
        // TODO: add typings
        var listeners = this.listeners.get(queryKey);
        this.listeners.set(queryKey, listeners ? listeners.concat([listener]) : [listener]);
        return function () {
            var _listeners = _this.listeners.get(queryKey);
            if (_listeners) {
                var index = _listeners.indexOf(listener);
                _this.listeners.set(queryKey, _listeners.slice(0, index).concat(_listeners.slice(index + 1, _listeners.length)));
            }
        };
    };
    Querier.prototype.notify = function (queryKey) {
        var _this = this;
        var listeners = this.listeners.get(queryKey);
        if (listeners) {
            listeners.map(function (listener) { return listener(_this.store[queryKey]); });
        }
    };
    return Querier;
}());

var QuerierProvider = /** @class */ (function (_super) {
    __extends(QuerierProvider, _super);
    function QuerierProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.querier = props.querier || new Querier();
        return _this;
    }
    QuerierProvider.prototype.getChildContext = function () {
        return {
            querier: this.querier
        };
    };
    QuerierProvider.prototype.render = function () {
        return this.props.children;
    };
    QuerierProvider.childContextTypes = {
        querier: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
    };
    return QuerierProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));

// tslint:disable-next-line
var buildQueryKey = function (query, props) {
    if (props) {
        return query.name + ":" + JSON.stringify(props);
    }
    else {
        return "" + query.name;
    }
};

var inputQueryDescriptorsBuilder = function (inputQueries) {
    var wrappedInputQueries = {};
    var _loop_1 = function (inputQueryProp) {
        if (inputQueryProp) {
            var query_1 = inputQueries[inputQueryProp].query;
            var wrappedQuery = function (props) { return query_1(props); };
            var queryKey = buildQueryKey(query_1);
            var wrappedQueryDescriptor = {};
            wrappedQueryDescriptor[inputQueryProp] = {
                query: wrappedQuery,
                hot: !!inputQueries[inputQueryProp].hot,
                resultActions: inputQueries[inputQueryProp].resultActions,
                key: queryKey
            };
            wrappedInputQueries = Object.assign({}, wrappedInputQueries, wrappedQueryDescriptor);
        }
    };
    for (var inputQueryProp in inputQueries) {
        _loop_1(inputQueryProp);
    }
    return wrappedInputQueries;
};
var actionQueryDescriptorsBuilder = function (actionQueries) {
    var wrappedActionQueries = {};
    var _loop_2 = function (actionQueryProp) {
        if (actionQueryProp) {
            var query_2 = actionQueries[actionQueryProp].query;
            // tslint:disable-next-line
            var wrappedQuery = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return query_2.apply(void 0, args);
            };
            var queryDescriptor = {};
            queryDescriptor[actionQueryProp] = {
                query: wrappedQuery,
                hot: !!actionQueries[actionQueryProp].hot,
                key: buildQueryKey(actionQueries[actionQueryProp].query)
            };
            wrappedActionQueries = Object.assign({}, wrappedActionQueries, queryDescriptor);
        }
    };
    for (var actionQueryProp in actionQueries) {
        _loop_2(actionQueryProp);
    }
    return wrappedActionQueries;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "development";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var invariant_1 = invariant;

// tslint:disable-next-line
var getComponentDisplayName = function (wrapped) {
    return wrapped.displayName || wrapped.name || 'Component';
};
var withDataFactory = function (queries) { return function (Component$$1) {
    var WithData = /** @class */ (function (_super) {
        __extends(WithData, _super);
        function WithData(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.querierSubscriptions = [];
            _this.propsToQueryKeysMap = new Map();
            _this.handleQuerierUpdate = _this.handleQuerierUpdate.bind(_this);
            _this.initializePropsToQueryKeysMap();
            invariant_1(context.querier, 'Querier is not available in the context. Make sure you have wrapped your root component ' +
                'with QuerierProvider');
            return _this;
        }
        WithData.prototype.componentDidMount = function () {
            this.fireInputQueries(this.props);
        };
        WithData.prototype.componentWillReceiveProps = function (nextProps) {
            this.unsubscribeQuerier();
            this.fireInputQueries(nextProps);
        };
        WithData.prototype.componentWillUnmount = function () {
            this.unsubscribeQuerier();
        };
        WithData.prototype.initializePropsToQueryKeysMap = function () {
            var inputQueries = queries.inputQueries;
            if (inputQueries) {
                for (var prop in inputQueries) {
                    if (prop) {
                        var queryKey = inputQueries[prop].key + ":" + JSON.stringify(this.props);
                        this.propsToQueryKeysMap.set(prop, queryKey);
                    }
                }
            }
        };
        WithData.prototype.fireInputQueries = function (props) {
            var querier = this.context.querier;
            var inputQueries = queries.inputQueries;
            if (inputQueries) {
                var _loop_1 = function (prop) {
                    if (prop) {
                        var query = function () { return inputQueries[prop].query(props); };
                        var queryKey = inputQueries[prop].key + ":" + JSON.stringify(props);
                        this_1.propsToQueryKeysMap.set(prop, queryKey);
                        this_1.querierSubscriptions.push(querier.subscribe(queryKey, this_1.handleQuerierUpdate));
                        querier.sendQuery({
                            query: query,
                            queryKey: queryKey,
                            props: props,
                            reason: getComponentDisplayName(Component$$1),
                            effects: inputQueries[prop].resultActions,
                            hot: !!inputQueries[prop].hot,
                        });
                    }
                };
                var this_1 = this;
                for (var prop in inputQueries) {
                    _loop_1(prop);
                }
            }
        };
        WithData.prototype.unsubscribeQuerier = function () {
            this.querierSubscriptions = this.querierSubscriptions.filter(function (unsubscribe) {
                return unsubscribe();
            });
        };
        WithData.prototype.handleQuerierUpdate = function (queryData) {
            this.setState({});
        };
        WithData.prototype.buildComponentPropsFromResults = function () {
            var _this = this;
            var props = {
                results: {},
                states: {}
            };
            this.propsToQueryKeysMap.forEach(function (queryKey, prop) {
                var queryStoreEntry = _this.context.querier.getEntry(queryKey);
                var result = {};
                var states = {};
                result[prop] = queryStoreEntry && queryStoreEntry.result;
                states[prop] = queryStoreEntry && queryStoreEntry.state;
                props = {
                    results: __assign({}, props.results, result),
                    states: __assign({}, props.states, states)
                };
            });
            // console.log(props);
            return props;
        };
        WithData.prototype.getWrappedActionQueries = function () {
            var _this = this;
            var actionQueries = queries.actionQueries;
            var querier = this.context.querier;
            var wrappedActionQueries = {};
            if (actionQueries) {
                var _loop_2 = function (actionQueryProp) {
                    if (actionQueryProp) {
                        var wrappedActionQuery = {};
                        wrappedActionQuery[actionQueryProp] = function (actionQueryParams) {
                            var query = function () { return actionQueries[actionQueryProp].query(actionQueryParams); };
                            var queryKey = actionQueries[actionQueryProp].key + ":" + JSON.stringify(actionQueryParams);
                            _this.propsToQueryKeysMap.set(actionQueryProp, queryKey);
                            querier.subscribe(queryKey, _this.handleQuerierUpdate);
                            querier.sendQuery({
                                query: query,
                                queryKey: queryKey,
                                hot: actionQueries[actionQueryProp].hot,
                                props: actionQueryParams,
                                reason: getComponentDisplayName(Component$$1)
                            });
                        };
                        wrappedActionQueries = __assign({}, wrappedActionQueries, wrappedActionQuery);
                    }
                };
                for (var actionQueryProp in actionQueries) {
                    _loop_2(actionQueryProp);
                }
            }
            return wrappedActionQueries;
        };
        WithData.prototype.render = function () {
            var _a = this.buildComponentPropsFromResults(), results = _a.results, states = _a.states;
            return (Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Component$$1, __assign({ results: results, actionQueries: this.getWrappedActionQueries(), states: states }, this.props)));
        };
        WithData.displayName = "WithData(" + getComponentDisplayName(Component$$1) + ")";
        WithData.contextTypes = {
            querier: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"]
        };
        return WithData;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
    return WithData;
}; };

function withData(dependencies) {
    var actionQueries = dependencies.actionQueries;
    var inputQueriesDescriptor = dependencies.inputQueries &&
        inputQueryDescriptorsBuilder(dependencies.inputQueries);
    var actionQueriesDescriptor = actionQueries &&
        actionQueryDescriptorsBuilder(actionQueries);
    return withDataFactory({
        inputQueries: inputQueriesDescriptor,
        actionQueries: actionQueriesDescriptor,
    });
}

var combineStates = function (states) {
    var successes = 0;
    for (var key in states) {
        if (key && states[key]) {
            if (states[key].state === QuerierState.Active) {
                return {
                    state: QuerierState.Active
                };
            }
            if (states[key].state === QuerierState.Error) {
                return {
                    state: QuerierState.Error,
                    error: states[key].error
                };
            }
            if (states[key].state === QuerierState.Success) {
                successes++;
            }
        }
    }
    if (successes === Object.keys(states).length) {
        return {
            state: QuerierState.Success
        };
    }
    return {
        state: QuerierState.Pending
    };
};

/* harmony default export */ __webpack_exports__["d"] = (Querier);



/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);


const css = __webpack_require__(461);
const HeaderLevel2 = ({ className, children }) => {
    const classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(css.HeaderLevel2, className);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: classes }, children));
};
/* harmony default export */ __webpack_exports__["a"] = (HeaderLevel2);


/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const NODE_ENV_DEVELOPMENT = 'development';
const isDev = () => "development" === NODE_ENV_DEVELOPMENT;
/* harmony export (immutable) */ __webpack_exports__["a"] = isDev;



/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(198);
module.exports = __webpack_require__(199);


/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_index_css__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_App__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_data_store__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_services_navigation__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_querier__ = __webpack_require__(16);





// import { AppContainer } from 'react-hot-loader';




// tslint:disable-next-line
const render = (Component) => {
    const store = Object(__WEBPACK_IMPORTED_MODULE_2_data_store__["a" /* configureStore */])();
    const querier = new __WEBPACK_IMPORTED_MODULE_8_querier__["d" /* default */](window.__PRELOADED_DATA__, store.dispatch);
    window.Querier = querier;
    const appComponent = (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_querier__["a" /* QuerierProvider */], { querier: querier },
        __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_redux__["a" /* Provider */], { store: store },
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_router__["a" /* Router */], { history: Object(__WEBPACK_IMPORTED_MODULE_7_services_navigation__["a" /* history */])() },
                __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_components_App__["a" /* default */], null)))));
    __WEBPACK_IMPORTED_MODULE_4_react_dom__["hydrate"](appComponent, document.getElementById('root'));
    // if (process.env.NODE_ENV === 'development' && module && module.hot) {
    //   module.hot.accept('./components/App', () => {
    //     const AppComponent = require('./components/App').default;
    //     render(AppComponent);
    //   });
    // }
};
render(__WEBPACK_IMPORTED_MODULE_1_components_App__["a" /* default */]);


/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
if (true) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1520797345139
		__webpack_require__(3)("/static/", "main.css");
	}
}

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_routes__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_config__ = __webpack_require__(498);



const css = __webpack_require__(504);
class App extends __WEBPACK_IMPORTED_MODULE_1_react__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: css.App }, Object(__WEBPACK_IMPORTED_MODULE_2_react_router_config__["a" /* renderRoutes */])(__WEBPACK_IMPORTED_MODULE_0_app_routes__["a" /* default */]))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_components_HomePage__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_components_OrganisationPage__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_error_ErrorPage__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_error_NotFoundPage__ = __webpack_require__(497);




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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_services_octokit__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ui_kit_SearchBox_SearchBox__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_ui_kit_SearchResults_SearchResults__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_json_tree__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_json_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_json_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_querier__ = __webpack_require__(16);






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

const HomePageWithData = Object(__WEBPACK_IMPORTED_MODULE_5_querier__["e" /* withData */])(homePageQueries)(HomePage);
const HomePageRoute = () => __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](HomePageWithData, null);
/* harmony default export */ __webpack_exports__["a"] = (HomePageRoute);


/***/ }),

/***/ 289:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_ui_kit_Button_TertiaryButton__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ui_kit_Input_Input__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_querier__ = __webpack_require__(16);




const css = __webpack_require__(346);
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
        const label = status && status === __WEBPACK_IMPORTED_MODULE_3_querier__["b" /* QuerierState */].Active ? 'Loading...' : 'Search';
        return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: css.SearchBox },
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: css.inputWrap },
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_app_ui_kit_Input_Input__["a" /* default */], { value: this.state.value, onChange: this.handleQueryChange, type: "text", placeholder: "Search github username..." })),
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: css.button },
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_app_ui_kit_Button_TertiaryButton__["a" /* default */], { onClick: this.handleSubmit }, label))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (SearchBox);


/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_ui_kit_Button_Button__ = __webpack_require__(336);



const css = __webpack_require__(338);
const TertiaryButton = (buttonProps) => {
    const finalClassName = __WEBPACK_IMPORTED_MODULE_0_classnames__(css.TertiaryButton, buttonProps.disabled && css.disabled);
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_app_ui_kit_Button_Button__["a" /* default */], Object.assign({}, buttonProps, { className: finalClassName }));
};
/* harmony default export */ __webpack_exports__["a"] = (TertiaryButton);


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


const css = __webpack_require__(337);
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

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"Button":"Button__Button___TsuMD","disabled":"Button__disabled___2YBm8"};
if (true) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1520797345553
		__webpack_require__(3)("/static/", "main.css");
	}
}

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"TertiaryButton":"TertiaryButton__TertiaryButton___2DQn2","disabled":"TertiaryButton__disabled___13PMv"};
if (true) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1520797345527
		__webpack_require__(3)("/static/", "main.css");
	}
}

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
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


const css = __webpack_require__(340);
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

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"Input":"Input__Input___qr16o","label":"Input__label___3MHee","inputElement":"Input__inputElement___1CsCx","errorMessage":"Input__errorMessage___LBT3L"};
if (true) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1520797345502
		__webpack_require__(3)("/static/", "main.css");
	}
}

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"SearchBox":"SearchBox__SearchBox___um2-4","inputWrap":"SearchBox__inputWrap___1TKqo","button":"SearchBox__button___1TIe1"};
if (true) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1520797345478
		__webpack_require__(3)("/static/", "main.css");
	}
}

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_services_navigation__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ui_kit_List_List__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_ui_kit_Typography_HeaderLevel1__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_ui_kit_Typography_TextLabels__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);





const css = __webpack_require__(352);
const SearchResult = ({ data }) => {
    return (__WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("div", { className: css.SearchResult, onClick: () => {
            Object(__WEBPACK_IMPORTED_MODULE_0_app_services_navigation__["b" /* navigateTo */])('/organisation/' + data.login);
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

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"List":"List__List___1dhJh","listItem":"List__listItem___TabBQ"};
if (true) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1520797345339
		__webpack_require__(3)("/static/", "main.css");
	}
}

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);


const css = __webpack_require__(350);
const HeaderLevel1 = ({ className, children }) => {
    const classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(css.HeaderLevel1, className);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: classes }, children));
};
/* harmony default export */ __webpack_exports__["a"] = (HeaderLevel1);


/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"HeaderLevel1":"HeaderLevel1__HeaderLevel1___2RVxK"};
if (true) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1520797345449
		__webpack_require__(3)("/static/", "main.css");
	}
}

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"TextLabel":"TextLabels__TextLabel___3s7y3","mediumGrey":"TextLabels__mediumGrey___1nPfo"};
if (true) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1520797345281
		__webpack_require__(3)("/static/", "main.css");
	}
}

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"SearchResults":"SearchResults__SearchResults___BpDTo","SearchResult":"SearchResults__SearchResult___36vTB","imageWrap":"SearchResults__imageWrap___wVlPD","avatar":"SearchResults__avatar___3QpmS","empty":"SearchResults__empty___3reBV"};
if (true) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1520797345432
		__webpack_require__(3)("/static/", "main.css");
	}
}

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__octokit_rest__ = __webpack_require__(204);
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

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_components_organisation_OrganisationDetails__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_components_organisation_OrganisationRepositiories__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_octokit__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_ui_kit_Feedback_Feedback__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_querier__ = __webpack_require__(16);






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

const OrganisationPageWithData = Object(__WEBPACK_IMPORTED_MODULE_5_querier__["e" /* withData */])(organisationPageQueries)(OrganisationPage);
const OrganisationPageRoute = (props) => {
    return __WEBPACK_IMPORTED_MODULE_4_react__["createElement"](OrganisationPageWithData, { orgName: props.match.params.orgName });
};
/* harmony default export */ __webpack_exports__["a"] = (OrganisationPageRoute);


/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_ui_kit_Typography_HeaderLevel2__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_ui_kit_Typography_TextLabels__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(462);




const css = __webpack_require__(481);
const OrganisationDetails = ({ details }) => {
    return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: css.OrganisationDetails },
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: css.back },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["a" /* Link */], { to: "/", replace: false }, "\u25C0")),
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

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"HeaderLevel2":"HeaderLevel2__HeaderLevel2___18ckQ"};
if (true) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1520797345325
		__webpack_require__(3)("/static/", "main.css");
	}
}

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"OrganisationDetails":"OrganisationDetails__OrganisationDetails___2omBa","avatar":"OrganisationDetails__avatar___3Apxj","details":"OrganisationDetails__details___2sawH","repos":"OrganisationDetails__repos___rjK4V","count":"OrganisationDetails__count___2OM22","back":"OrganisationDetails__back___32nY4"};
if (true) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1520797345313
		__webpack_require__(3)("/static/", "main.css");
	}
}

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_components_organisation_RepositoryPanel__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


const OrganisationRepositories = ({ repos }) => {
    return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], null, repos.map((repo) => {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_app_components_organisation_RepositoryPanel__["a" /* default */], { name: repo.name, owner: repo.owner.login, id: repo.id, key: repo.id }));
    })));
};
/* harmony default export */ __webpack_exports__["a"] = (OrganisationRepositories);


/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ui_kit_AccordionPanel_AccordionPanel__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_components_organisation_RepositoryDetails__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_components_organisation_RepositoryContributors__ = __webpack_require__(494);




const RepositoryPanel = ({ name, owner, id }) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_app_ui_kit_AccordionPanel_AccordionPanel__["a" /* default */], { title: name },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_app_components_organisation_RepositoryDetails__["a" /* default */], { id: id }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_app_components_organisation_RepositoryContributors__["a" /* default */], { owner: owner, repo: name }))));
};
/* harmony default export */ __webpack_exports__["a"] = (RepositoryPanel);


/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AccordionPanelTitle__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AccordionPanelContent__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);



const css = __webpack_require__(491);

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

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ui_kit_Icon_Icon__ = __webpack_require__(487);


const css = __webpack_require__(486);

const AccordionPanelTitle = ({ className, children, onClick, isActive }) => {
    const classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(css.AccordionPanelTitle, className);
    const iconComponent = isActive ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_ui_kit_Icon_Icon__["a" /* default */], { name: "minus" }) : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_ui_kit_Icon_Icon__["a" /* default */], { name: "plus" });
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: classes, onClick: onClick },
        children,
        iconComponent));
};
/* harmony default export */ __webpack_exports__["a"] = (AccordionPanelTitle);


/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"AccordionPanelTitle":"AccordionPanelTitle__AccordionPanelTitle___N4Bh_"};
if (true) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1520797345405
		__webpack_require__(3)("/static/", "main.css");
	}
}

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_utils_string_capitalizeFirstLetter__ = __webpack_require__(488);



const Icon = ({ className, name }) => {
    const iconName = `icon${Object(__WEBPACK_IMPORTED_MODULE_2_app_utils_string_capitalizeFirstLetter__["a" /* default */])(name)}`;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(iconName, className) });
};
/* harmony default export */ __webpack_exports__["a"] = (Icon);


/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};
/* harmony default export */ __webpack_exports__["a"] = (capitalizeFirstLetter);


/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const css = __webpack_require__(490);
const AccordionPanelContent = ({ className, children }) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: className },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: css.AccordionPanelContent }, children)));
};
/* harmony default export */ __webpack_exports__["a"] = (AccordionPanelContent);


/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"AccordionPanelContent":"AccordionPanelContent__AccordionPanelContent___2nRcc"};
if (true) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1520797345387
		__webpack_require__(3)("/static/", "main.css");
	}
}

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"AccordionPanel":"AccordionPanel__AccordionPanel___2Bwm-","content":"AccordionPanel__content___FsFqP","contentExpanded":"AccordionPanel__contentExpanded___3Vv_f","title":"AccordionPanel__title___3s3kN","titleActive":"AccordionPanel__titleActive___3GUul"};
if (true) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1520797345362
		__webpack_require__(3)("/static/", "main.css");
	}
}

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_services_octokit__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ui_kit_Feedback_Feedback__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_ui_kit_Typography_TextLabels__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_querier__ = __webpack_require__(16);





const css = __webpack_require__(493);
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
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_querier__["e" /* withData */])(repositoryDetailsQueries)(RepositoryDetails));


/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"RepositoryDetails":"RepositoryDetails__RepositoryDetails___1KdyW","row":"RepositoryDetails__row___1bbUy"};
if (true) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1520797345264
		__webpack_require__(3)("/static/", "main.css");
	}
}

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_services_octokit__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ui_kit_Feedback_Feedback__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_ui_kit_List_List__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_querier__ = __webpack_require__(16);





const css = __webpack_require__(495);
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
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_querier__["e" /* withData */])(repositortContributorsQueries)(RepositoryContirbutors));


/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"list":"RepositoryContributors__list___3198V","contributor":"RepositoryContributors__contributor___2c4oi"};
if (true) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1520797345222
		__webpack_require__(3)("/static/", "main.css");
	}
}

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const ErrorPage = () => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Ops, something went wrong"));
};
/* harmony default export */ __webpack_exports__["a"] = (ErrorPage);


/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const NotFoundPage = () => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Sorry, content not found"));
};
/* harmony default export */ __webpack_exports__["a"] = (NotFoundPage);


/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"App":"App__App___1Ytu5"};
if (true) {
	module.hot.accept();
	if (module.hot.data) {
		var neverUsed = 1520797345237
		__webpack_require__(3)("/static/", "main.css");
	}
}

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export rootSaga */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_utils_redux_reducersRegistry__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_utils_env__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_devtools_extension__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_saga__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_saga_effects__ = __webpack_require__(192);






let store;
const sagaMiddleware = Object(__WEBPACK_IMPORTED_MODULE_4_redux_saga__["a" /* default */])();
/* unused harmony export sagaMiddleware */

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

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_utils_env__ = __webpack_require__(187);
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

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
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


const css = __webpack_require__(351);
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



/***/ })

},[197]);
//# sourceMappingURL=main.f6092da2bb61500dd6ca.js.map