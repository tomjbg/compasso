(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Restrito-restrito-module"],{

/***/ "./node_modules/@angular/http/fesm5/http.js":
/*!**************************************************!*\
  !*** ./node_modules/@angular/http/fesm5/http.js ***!
  \**************************************************/
/*! exports provided: ɵangular_packages_http_http_e, ɵangular_packages_http_http_f, ɵangular_packages_http_http_a, ɵangular_packages_http_http_b, ɵangular_packages_http_http_c, BrowserXhr, JSONPBackend, JSONPConnection, CookieXSRFStrategy, XHRBackend, XHRConnection, BaseRequestOptions, RequestOptions, BaseResponseOptions, ResponseOptions, ReadyState, RequestMethod, ResponseContentType, ResponseType, Headers, Http, Jsonp, HttpModule, JsonpModule, Connection, ConnectionBackend, XSRFStrategy, Request, Response, QueryEncoder, URLSearchParams, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_e", function() { return BrowserJsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_f", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_a", function() { return _createDefaultCookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_b", function() { return httpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_c", function() { return jsonpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserXhr", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPBackend", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPConnection", function() { return JSONPConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieXSRFStrategy", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRBackend", function() { return XHRBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRConnection", function() { return XHRConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequestOptions", function() { return BaseRequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOptions", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponseOptions", function() { return BaseResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseOptions", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseContentType", function() { return ResponseContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jsonp", function() { return Jsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpModule", function() { return JsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionBackend", function() { return ConnectionBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSRFStrategy", function() { return XSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEncoder", function() { return QueryEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return URLSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license Angular v6.1.1
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @deprecated see https://angular.io/guide/http
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    BrowserXhr.ctorParameters = function () { return []; };
    return BrowserXhr;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Supported http methods.
 * @deprecated see https://angular.io/guide/http
 */
var RequestMethod;
(function (RequestMethod) {
    RequestMethod[RequestMethod["Get"] = 0] = "Get";
    RequestMethod[RequestMethod["Post"] = 1] = "Post";
    RequestMethod[RequestMethod["Put"] = 2] = "Put";
    RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
    RequestMethod[RequestMethod["Options"] = 4] = "Options";
    RequestMethod[RequestMethod["Head"] = 5] = "Head";
    RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
})(RequestMethod || (RequestMethod = {}));
/**
 * All possible states in which a connection can be, based on
 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
 * additional "CANCELLED" state.
 * @deprecated see https://angular.io/guide/http
 */
var ReadyState;
(function (ReadyState) {
    ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
    ReadyState[ReadyState["Open"] = 1] = "Open";
    ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
    ReadyState[ReadyState["Loading"] = 3] = "Loading";
    ReadyState[ReadyState["Done"] = 4] = "Done";
    ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
})(ReadyState || (ReadyState = {}));
/**
 * Acceptable response types to be associated with a {@link Response}, based on
 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
 * @deprecated see https://angular.io/guide/http
 */
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["Basic"] = 0] = "Basic";
    ResponseType[ResponseType["Cors"] = 1] = "Cors";
    ResponseType[ResponseType["Default"] = 2] = "Default";
    ResponseType[ResponseType["Error"] = 3] = "Error";
    ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
})(ResponseType || (ResponseType = {}));
/**
 * Supported content type to be automatically associated with a {@link Request}.
 * @deprecated see https://angular.io/guide/http
 */
var ContentType;
(function (ContentType) {
    ContentType[ContentType["NONE"] = 0] = "NONE";
    ContentType[ContentType["JSON"] = 1] = "JSON";
    ContentType[ContentType["FORM"] = 2] = "FORM";
    ContentType[ContentType["FORM_DATA"] = 3] = "FORM_DATA";
    ContentType[ContentType["TEXT"] = 4] = "TEXT";
    ContentType[ContentType["BLOB"] = 5] = "BLOB";
    ContentType[ContentType["ARRAY_BUFFER"] = 6] = "ARRAY_BUFFER";
})(ContentType || (ContentType = {}));
/**
 * Define which buffer to use to store the response
 * @deprecated see https://angular.io/guide/http
 */
var ResponseContentType;
(function (ResponseContentType) {
    ResponseContentType[ResponseContentType["Text"] = 0] = "Text";
    ResponseContentType[ResponseContentType["Json"] = 1] = "Json";
    ResponseContentType[ResponseContentType["ArrayBuffer"] = 2] = "ArrayBuffer";
    ResponseContentType[ResponseContentType["Blob"] = 3] = "Blob";
})(ResponseContentType || (ResponseContentType = {}));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * ### Example
 *
 * ```
 * import {Headers} from '@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var Headers = /** @class */ (function () {
    // TODO(vicb): any -> string|string[]
    function Headers(headers) {
        var _this = this;
        /** @internal header names are lower case */
        this._headers = new Map();
        /** @internal map lower case names to actual names */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    Headers.fromResponseHeaderString = function (headersString) {
        var headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var index = line.indexOf(':');
            if (index > 0) {
                var name_1 = line.slice(0, index);
                var value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    Headers.prototype.append = function (name, value) {
        var values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     */
    Headers.prototype.delete = function (name) {
        var lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     */
    Headers.prototype.get = function (name) {
        var values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     */
    Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     */
    Headers.prototype.keys = function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     */
    Headers.prototype.set = function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     */
    Headers.prototype.values = function () { return Array.from(this._headers.values()); };
    /**
     * Returns string of all headers.
     */
    // TODO(vicb): returns {[name: string]: string[]}
    Headers.prototype.toJSON = function () {
        var _this = this;
        var serialized = {};
        this._headers.forEach(function (values, name) {
            var split = [];
            values.forEach(function (v) { return split.push.apply(split, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(v.split(','))); });
            serialized[_this._normalizedNames.get(name)] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     */
    Headers.prototype.getAll = function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     */
    Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {@link Response Responses} for
 * mock responses (see {@link MockBackend}).
 *
 * ### Example
 *
 * ```typescript
 * import {ResponseOptions, Response} from '@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var ResponseOptions = /** @class */ (function () {
    function ResponseOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example
     *
     * ```typescript
     * import {ResponseOptions, Response} from '@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    ResponseOptions.prototype.merge = function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link ResponseOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create {@link Response Responses}.
 *
 * ### Example
 *
 * ```typescript
 * import {provide} from '@angular/core';
 * import {bootstrap} from '@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {@link Response}
 * object.
 *
 * ### Example
 *
 * ```
 * import {BaseResponseOptions, Response} from '@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var BaseResponseOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    BaseResponseOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    BaseResponseOptions.ctorParameters = function () { return []; };
    return BaseResponseOptions;
}(ResponseOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {@link Request}.
 *
 * @deprecated see https://angular.io/guide/http
 */
var ConnectionBackend = /** @class */ (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * @deprecated see https://angular.io/guide/http
 */
var Connection = /** @class */ (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @deprecated see https://angular.io/guide/http
 */
var XSRFStrategy = /** @class */ (function () {
    function XSRFStrategy() {
    }
    return XSRFStrategy;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
function stringToArrayBuffer(input) {
    var view = new Uint16Array(input.length);
    for (var i = 0, strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var map = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], 2), key = _a[0], val = _a[1];
            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * @deprecated see https://angular.io/guide/http
 **/
var QueryEncoder = /** @class */ (function () {
    function QueryEncoder() {
    }
    QueryEncoder.prototype.encodeKey = function (k) { return standardEncoding(k); };
    QueryEncoder.prototype.encodeValue = function (v) { return standardEncoding(v); };
    return QueryEncoder;
}());
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @deprecated see https://angular.io/guide/http
 */
var URLSearchParams = /** @class */ (function () {
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    URLSearchParams.prototype.clone = function () {
        var clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    URLSearchParams.prototype.get = function (param) {
        var storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
        });
        return paramsList.join('&');
    };
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {@link Request} and {@link Response}
 * https://fetch.spec.whatwg.org/#body
 */
var Body = /** @class */ (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    Body.prototype.json = function () {
        if (typeof this._body === 'string') {
            return JSON.parse(this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     */
    Body.prototype.text = function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(this._body));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(this._body));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     */
    Body.prototype.arrayBuffer = function () {
        if (this._body instanceof ArrayBuffer) {
            return this._body;
        }
        return stringToArrayBuffer(this.text());
    };
    /**
      * Returns the request's body as a Blob, assuming that body exists.
      */
    Body.prototype.blob = function () {
        if (this._body instanceof Blob) {
            return this._body;
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @deprecated see https://angular.io/guide/http
 */
var Response = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(Response, _super);
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = responseOptions.status;
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = responseOptions.type;
        _this.url = responseOptions.url;
        return _this;
    }
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
function _getJsonpConnections() {
    var w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
// Make sure not to evaluate this in a non-browser environment!
var BrowserJsonp = /** @class */ (function () {
    function BrowserJsonp() {
    }
    // Construct a <script> element with the specified URL
    BrowserJsonp.prototype.build = function (url) {
        var node = document.createElement('script');
        node.src = url;
        return node;
    };
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var connections = _getJsonpConnections();
        connections[id] = connection;
    };
    BrowserJsonp.prototype.removeConnection = function (id) {
        var connections = _getJsonpConnections();
        connections[id] = null;
    };
    // Attach the <script> element to the DOM
    BrowserJsonp.prototype.send = function (node) { document.body.appendChild((node)); };
    // Remove <script> element from the DOM
    BrowserJsonp.prototype.cleanup = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild((node));
        }
    };
    BrowserJsonp.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return BrowserJsonp;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Base class for an in-flight JSONP request.
 *
 * @deprecated see https://angular.io/guide/http
 */
var JSONPConnection = /** @class */ (function () {
    /** @internal */
    function JSONPConnection(req, _dom, baseResponseOptions) {
        var _this = this;
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     */
    JSONPConnection.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection;
}());
/**
 * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @deprecated see https://angular.io/guide/http
 */
var JSONPBackend = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(JSONPBackend, _super);
    /** @internal */
    function JSONPBackend(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    JSONPBackend.prototype.createConnection = function (request) {
        return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    JSONPBackend.ctorParameters = function () { return [
        { type: BrowserJsonp },
        { type: ResponseOptions }
    ]; };
    return JSONPBackend;
}(ConnectionBackend));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {@link MockConnection} may be interacted with in tests.
 *
 * @deprecated see https://angular.io/guide/http
 */
var XHRConnection = /** @class */ (function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                var body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var url = getResponseURL(_xhr) || req.url;
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * @deprecated see https://angular.io/guide/http
 */
var CookieXSRFStrategy = /** @class */ (function () {
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var xsrfToken = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["ɵgetDOM"])().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '@angular/http';
 * @Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @deprecated see https://angular.io/guide/http
 */
var XHRBackend = /** @class */ (function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    XHRBackend.ctorParameters = function () { return [
        { type: BrowserXhr },
        { type: ResponseOptions },
        { type: XSRFStrategy }
    ]; };
    return XHRBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var RequestOptions = /** @class */ (function () {
    // TODO(Dzmitry): remove search when this.search is removed
    function RequestOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        get: function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        set: function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    RequestOptions.prototype.merge = function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    RequestOptions.prototype._mergeSearchParams = function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    RequestOptions.prototype._parseParams = function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    RequestOptions.prototype._appendParam = function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {@link RequestMethod RequestMethod.Get}
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link RequestOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create and send {@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var BaseRequestOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    BaseRequestOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    BaseRequestOptions.ctorParameters = function () { return []; };
    return BaseRequestOptions;
}(RequestOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jeffbcross): properly implement body accessors
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {@link Http} and
 * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '@angular/http';
 *
 * @Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var Request = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(Request, _super);
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var url = requestOptions.url;
        _this.url = requestOptions.url;
        var paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName(requestOptions.method);
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = requestOptions.withCredentials;
        _this.responseType = requestOptions.responseType;
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     */
    Request.prototype.detectContentType = function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     */
    Request.prototype.detectContentTypeFromBody = function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     */
    Request.prototype.getBody = function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
function urlEncodeParams(params) {
    var searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = w /** TODO #9100 */['FormData'] || noop;
var Blob$1 = w /** TODO #9100 */['Blob'] || noop;
var ArrayBuffer$1 = w /** TODO #9100 */['ArrayBuffer'] || noop;

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        }));
    }
    return newOptions.merge(new RequestOptions({ method: method, url: url }));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {@link Response} when a
 * response is received.
 *
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '@angular/http';
 * import {map} from 'rxjs/operators';
 *
 * @Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .pipe(map(res => res.json()))
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '@angular/http';
 * import {MockBackend} from '@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var Http = /** @class */ (function () {
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    Http.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     */
    Http.prototype.get = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     */
    Http.prototype.post = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     */
    Http.prototype.put = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     */
    Http.prototype.delete = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     */
    Http.prototype.patch = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     */
    Http.prototype.head = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     */
    Http.prototype.options = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    Http.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    Http.ctorParameters = function () { return [
        { type: ConnectionBackend },
        { type: RequestOptions }
    ]; };
    return Http;
}());
/**
 * @deprecated see https://angular.io/guide/http
 */
var Jsonp = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     *
     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     */
    Jsonp.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    Jsonp.ctorParameters = function () { return [
        { type: ConnectionBackend },
        { type: RequestOptions }
    ]; };
    return Jsonp;
}(Http));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
}
function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
}
function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * @deprecated see https://angular.io/guide/http
 */
var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    HttpModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                        BrowserXhr,
                        { provide: RequestOptions, useClass: BaseRequestOptions },
                        { provide: ResponseOptions, useClass: BaseResponseOptions },
                        XHRBackend,
                        { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
                    ],
                },] }
    ];
    return HttpModule;
}());
/**
 * The module that includes jsonp's providers
 *
 * @deprecated see https://angular.io/guide/http
 */
var JsonpModule = /** @class */ (function () {
    function JsonpModule() {
    }
    JsonpModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
                        BrowserJsonp,
                        { provide: RequestOptions, useClass: BaseRequestOptions },
                        { provide: ResponseOptions, useClass: BaseResponseOptions },
                        JSONPBackend,
                    ],
                },] }
    ];
    return JsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @deprecated see https://angular.io/guide/http
 */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('6.1.1');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./node_modules/ngx-embed-video/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/ngx-embed-video/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var embed_video_service_1 = __webpack_require__(/*! ./src/embed-video.service */ "./node_modules/ngx-embed-video/dist/src/embed-video.service.js");
__export(__webpack_require__(/*! ./src/embed-video.service */ "./node_modules/ngx-embed-video/dist/src/embed-video.service.js"));
var EmbedVideo = /** @class */ (function () {
    function EmbedVideo() {
    }
    EmbedVideo_1 = EmbedVideo;
    EmbedVideo.forRoot = function () {
        return {
            ngModule: EmbedVideo_1,
            providers: [embed_video_service_1.EmbedVideoService]
        };
    };
    EmbedVideo = EmbedVideo_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [],
            exports: [],
            providers: [embed_video_service_1.EmbedVideoService]
        })
    ], EmbedVideo);
    return EmbedVideo;
    var EmbedVideo_1;
}());
exports.EmbedVideo = EmbedVideo;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-embed-video/dist/src/embed-video.service.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-embed-video/dist/src/embed-video.service.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
__webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
__webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var EmbedVideoService = /** @class */ (function () {
    function EmbedVideoService(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.validYouTubeOptions = [
            'default',
            'mqdefault',
            'hqdefault',
            'sddefault',
            'maxresdefault'
        ];
        this.validVimeoOptions = [
            'thumbnail_small',
            'thumbnail_medium',
            'thumbnail_large'
        ];
        this.validDailyMotionOptions = [
            'thumbnail_60_url',
            'thumbnail_120_url',
            'thumbnail_180_url',
            'thumbnail_240_url',
            'thumbnail_360_url',
            'thumbnail_480_url',
            'thumbnail_720_url',
            'thumbnail_1080_url'
        ];
    }
    EmbedVideoService.prototype.embed = function (url, options) {
        var id;
        url = new URL(url);
        id = this.detectYoutube(url);
        if (id) {
            return this.embed_youtube(id, options);
        }
        id = this.detectVimeo(url);
        if (id) {
            return this.embed_vimeo(id, options);
        }
        id = this.detectDailymotion(url);
        if (id) {
            return this.embed_dailymotion(id, options);
        }
    };
    EmbedVideoService.prototype.embed_youtube = function (id, options) {
        options = this.parseOptions(options);
        var queryString;
        if (options && options.hasOwnProperty('query')) {
            queryString = '?' + this.serializeQuery(options.query);
        }
        return this.sanitize_iframe('<iframe src="https://www.youtube.com/embed/'
            + id + options.query + '"' + options.attr
            + ' frameborder="0" allowfullscreen></iframe>');
    };
    EmbedVideoService.prototype.embed_vimeo = function (id, options) {
        options = this.parseOptions(options);
        var queryString;
        if (options && options.hasOwnProperty('query')) {
            queryString = '?' + this.serializeQuery(options.query);
        }
        return this.sanitize_iframe('<iframe src="https://player.vimeo.com/video/'
            + id + options.query + '"' + options.attr
            + ' frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    };
    EmbedVideoService.prototype.embed_dailymotion = function (id, options) {
        options = this.parseOptions(options);
        var queryString;
        if (options && options.hasOwnProperty('query')) {
            queryString = '?' + this.serializeQuery(options.query);
        }
        return this.sanitize_iframe('<iframe src="https://www.dailymotion.com/embed/video/'
            + id + options.query + '"' + options.attr
            + ' frameborder="0" allowfullscreen></iframe>');
    };
    EmbedVideoService.prototype.embed_image = function (url, options) {
        var id;
        url = new URL(url);
        id = this.detectYoutube(url);
        if (id) {
            return this.embed_youtube_image(id, options);
        }
        id = this.detectVimeo(url);
        if (id) {
            return this.embed_vimeo_image(id, options);
        }
        id = this.detectDailymotion(url);
        if (id) {
            return this.embed_dailymotion_image(id, options);
        }
    };
    EmbedVideoService.prototype.embed_youtube_image = function (id, options) {
        if (typeof options === 'function') {
            options = {};
        }
        options = options || {};
        options.image = this.validYouTubeOptions.indexOf(options.image) > 0 ? options.image : 'default';
        var src = 'https://img.youtube.com/vi/' + id + '/' + options.image + '.jpg';
        var result = {
            link: src,
            html: '<img src="' + src + '"/>'
        };
        return new Promise(function (resolve, reject) {
            resolve(result);
        });
    };
    EmbedVideoService.prototype.embed_vimeo_image = function (id, options) {
        if (typeof options === 'function') {
            options = {};
        }
        options = options || {};
        options.image = this.validVimeoOptions.indexOf(options.image) >= 0 ? options.image : 'thumbnail_large';
        return this.http.get('https://vimeo.com/api/v2/video/' + id + '.json')
            .map(function (res) {
            return {
                'link': res.json()[0][options.image],
                'html': '<img src="' + res.json()[0][options.image] + '"/>'
            };
        })
            .toPromise()
            .catch(function (error) { return console.log(error); });
    };
    EmbedVideoService.prototype.embed_dailymotion_image = function (id, options) {
        if (typeof options === 'function') {
            options = {};
        }
        options = options || {};
        options.image = this.validDailyMotionOptions.indexOf(options.image) >= 0 ? options.image : 'thumbnail_480_url';
        return this.http.get('https://api.dailymotion.com/video/' + id + '?fields=' + options.image)
            .map(function (res) {
            return {
                'link': res.json()[options.image],
                'html': '<img src="' + res.json()[options.image] + '"/>'
            };
        })
            .toPromise()
            .catch(function (error) { return console.log(error); });
    };
    EmbedVideoService.prototype.parseOptions = function (options) {
        var queryString = '', attributes = '';
        if (options && options.hasOwnProperty('query')) {
            queryString = '?' + this.serializeQuery(options.query);
        }
        if (options && options.hasOwnProperty('attr')) {
            var temp_1 = [];
            Object.keys(options.attr).forEach(function (key) {
                temp_1.push(key + '="' + (options.attr[key]) + '"');
            });
            attributes = ' ' + temp_1.join(' ');
        }
        return {
            query: queryString,
            attr: attributes
        };
    };
    EmbedVideoService.prototype.serializeQuery = function (query) {
        var queryString = [];
        for (var p in query) {
            if (query.hasOwnProperty(p)) {
                queryString.push(encodeURIComponent(p) + '=' + encodeURIComponent(query[p]));
            }
        }
        return queryString.join('&');
    };
    EmbedVideoService.prototype.sanitize_iframe = function (iframe) {
        return this.sanitizer.bypassSecurityTrustHtml(iframe);
    };
    EmbedVideoService.prototype.detectVimeo = function (url) {
        return (url.hostname === 'vimeo.com') ? url.pathname.split('/')[1] : null;
    };
    EmbedVideoService.prototype.detectYoutube = function (url) {
        if (url.hostname.indexOf('youtube.com') > -1) {
            return url.search.split('=')[1];
        }
        if (url.hostname === 'youtu.be') {
            return url.pathname.split('/')[1];
        }
        return '';
    };
    EmbedVideoService.prototype.detectDailymotion = function (url) {
        if (url.hostname.indexOf('dailymotion.com') > -1) {
            return url.pathname.split('/')[2].split('_')[0];
        }
        if (url.hostname === 'dai.ly') {
            return url.pathname.split('/')[1];
        }
        return '';
    };
    EmbedVideoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            platform_browser_1.DomSanitizer])
    ], EmbedVideoService);
    return EmbedVideoService;
}());
exports.EmbedVideoService = EmbedVideoService;
//# sourceMappingURL=embed-video.service.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/map.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/map.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/map */ "./node_modules/rxjs-compat/_esm5/operator/map.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.map = _operator_map__WEBPACK_IMPORTED_MODULE_1__["map"];
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/map.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/map.js ***!
  \********************************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function map(project, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(project, thisArg)(this);
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./src/app/Restrito/analytics-report/analytics-report.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Restrito/analytics-report/analytics-report.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <title>Dados API V4</title>\n  <meta name=\"google-signin-client_id\" content=\"UA-59299363-2\">\n  <meta name=\"google-signin-scope\" content=\"https://www.googleapis.com/auth/analytics.readonly\">\n</head>\n<body>\n\n  <div class=\"container\">\n\n\n  </div>\n\n<h1>Dados</h1>\n\n<!-- The Sign-in button. This will run `queryReports()` on success. -->\n<p class=\"g-signin2\" data-onsuccess=\"queryReports\"></p>\n\n<!-- The API response will be printed here. -->\n<textarea cols=\"80\" rows=\"20\" id=\"query-output\"></textarea>\n\n<script>\n  // Replace with your view ID.\n  var VIEW_ID = '181292198';\n\n  // Query the API and print the results to the page.\n  function queryReports() {\n    gapi.client.request({\n      path: '/v4/reports:batchGet',\n      root: 'https://analyticsreporting.googleapis.com/',\n      method: 'POST',\n      body: {\n        reportRequests: [\n          {\n            viewId: VIEW_ID,\n            dateRanges: [\n              {\n                startDate: '7daysAgo',\n                endDate: 'today'\n              }\n            ],\n            metrics: [\n              {\n                expression: 'ga:sessions'\n              }\n            ]\n          }\n        ]\n      }\n    }).then(displayResults, console.error.bind(console));\n  }\n\n  function displayResults(response) {\n    var formattedJson = JSON.stringify(response.result, null, 2);\n    document.getElementById('query-output').value = formattedJson;\n  }\n</script>\n\n<!-- Load the JavaScript API client and Sign-in library. -->\n<script src=\"https://apis.google.com/js/client:platform.js\"></script>\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/Restrito/analytics-report/analytics-report.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Restrito/analytics-report/analytics-report.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Restrito/analytics-report/analytics-report.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Restrito/analytics-report/analytics-report.component.ts ***!
  \*************************************************************************/
/*! exports provided: AnalyticsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsReportComponent", function() { return AnalyticsReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnalyticsReportComponent = /** @class */ (function () {
    function AnalyticsReportComponent() {
    }
    AnalyticsReportComponent.prototype.ngOnInit = function () {
    };
    AnalyticsReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comp-analytics-report',
            template: __webpack_require__(/*! ./analytics-report.component.html */ "./src/app/Restrito/analytics-report/analytics-report.component.html"),
            styles: [__webpack_require__(/*! ./analytics-report.component.scss */ "./src/app/Restrito/analytics-report/analytics-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnalyticsReportComponent);
    return AnalyticsReportComponent;
}());



/***/ }),

/***/ "./src/app/Restrito/cad-audios/cad-audios.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Restrito/cad-audios/cad-audios.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n\n\n<iframe src=\"https://tunein.com/embed/player/s85089/\" style=\"width:100%; height:100px;\" scrolling=\"no\" frameborder=\"no\"></iframe>\n\n<br><br><br>\n\n<iframe src=\"http://tunein.com/embed/player/s269231/\" style=\"width:100%;height:100px;\" scrolling=\"no\" frameborder=\"no\"></iframe>\n\n<br><br><br>\n\n<!-- <audio src=\"https://tunein.com/embed/player/s85089/\" (pause)=\"pause()\" (play)=\"play()\" (playing)=\"playing()\"></audio> -->\n\n\n\n<audio autoplay=\"autoplay\" controls=\"controls\">\n\n    <source src=\"https://tunein.com/embed/player/s85089/\" type=\"audio/mp3\" />\n    seu navegador não suporta HTML5\n\n   \n\n    </audio>"

/***/ }),

/***/ "./src/app/Restrito/cad-audios/cad-audios.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/Restrito/cad-audios/cad-audios.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Restrito/cad-audios/cad-audios.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Restrito/cad-audios/cad-audios.component.ts ***!
  \*************************************************************/
/*! exports provided: CadAudiosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadAudiosComponent", function() { return CadAudiosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CadAudiosComponent = /** @class */ (function () {
    function CadAudiosComponent() {
    }
    CadAudiosComponent.prototype.ngOnInit = function () {
    };
    CadAudiosComponent.prototype.pause = function () {
        alert('Audio pausado');
    };
    CadAudiosComponent.prototype.play = function () {
        alert('Play no áudio');
    };
    CadAudiosComponent.prototype.playing = function () {
    };
    CadAudiosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comp-cad-audios',
            template: __webpack_require__(/*! ./cad-audios.component.html */ "./src/app/Restrito/cad-audios/cad-audios.component.html"),
            styles: [__webpack_require__(/*! ./cad-audios.component.scss */ "./src/app/Restrito/cad-audios/cad-audios.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CadAudiosComponent);
    return CadAudiosComponent;
}());



/***/ }),

/***/ "./src/app/Restrito/cad-blog/cad-blog.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Restrito/cad-blog/cad-blog.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"jumbotron\">\n  cad-blog works!\n</p>\n"

/***/ }),

/***/ "./src/app/Restrito/cad-blog/cad-blog.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/Restrito/cad-blog/cad-blog.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Restrito/cad-blog/cad-blog.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Restrito/cad-blog/cad-blog.component.ts ***!
  \*********************************************************/
/*! exports provided: CadBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadBlogComponent", function() { return CadBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CadBlogComponent = /** @class */ (function () {
    function CadBlogComponent() {
    }
    CadBlogComponent.prototype.ngOnInit = function () {
    };
    CadBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comp-cad-blog',
            template: __webpack_require__(/*! ./cad-blog.component.html */ "./src/app/Restrito/cad-blog/cad-blog.component.html"),
            styles: [__webpack_require__(/*! ./cad-blog.component.scss */ "./src/app/Restrito/cad-blog/cad-blog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CadBlogComponent);
    return CadBlogComponent;
}());



/***/ }),

/***/ "./src/app/Restrito/cad-home/cad-home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Restrito/cad-home/cad-home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n\n  <form [formGroup]=\"frmCadHomeSomos\" enctype=\"multipart/form-data\" class=\"form-horizontal col-md-8 col-md-offset-2 frm-restrita\">\n\n    <h3 class=\"text-center\">Compasso</h3>\n\n    <div class=\"col-md-10 col-md-offset-1\">\n\n        <fieldset class=\"form-group\">\n            <label for=\"titulo\">Imagem</label> <br>\n            <!-- <img [hidden]=\"ImagePreview === undefined\" src=\"{{ImagePreview}}\" alt=\"Foto do serviço\"> -->\n            <img [hidden]=\"imagemPreview === undefined\" [src]=\"imagemPreview\" alt=\"Foto de Somos\">\n            <input type=\"file\" multiple=\"multiple\" name=\"imagem\" id=\"imagem\" formControlName=\"imagem\" (change)=\"onChangeImage($event.target.files)\"\n              class=\"form-control input-sm\">\n    \n          </fieldset>\n\n\n      <fieldset class=\"form-group\">\n        <label for=\"titulo\">Titulo</label>\n        <input type=\"text\" formControlName=\"titulo\" [value]=\"HomeSomos.titulo\" name=\"Titulo\" id=\"titulo\" class=\"form-control input-sm\">\n\n      </fieldset>\n\n      <fieldset class=\"form-group\">\n        <label for=\"texto\">Texto</label>\n        <textarea class=\"form-control\" formControlName=\"texto\" [value]=\"HomeSomos.texto\" name=\"DescricaoCurta\" id=\"descricaocurta\" rows=\"2\"></textarea>\n      </fieldset>\n\n\n      <fieldset class=\"form-group\">\n\n        <input type=\"button\" (click)=\"postHomeSomos(HomeSomos)\" value=\"Cadastrar\" class=\"btn btn-lg btn-success btn-block\">\n        <input type=\"button\" (click)=\"getHomeSomos()\" value=\"Listar\" class=\"btn btn-lg btn-success btn-block\">\n\n      </fieldset>\n\n    </div>\n\n    <br><br>\n\n\n    <table class=\"table tbl\">\n      <thead>\n        <th hidden>Id</th>\n        <th>Titulo</th>\n        <th>Texto</th>\n        <th></th>\n      </thead>\n      <tbody>\n\n        <tr *ngFor=\"let hs of lstHomeSomos\">\n          <td hidden>{{hs.id}}</td>\n          <td>{{hs.imagem}}</td>\n          <td>{{hs.titulo}}</td>\n          <td>{{hs.texto}}</td>\n        </tr>\n\n        <!-- <tr *ngFor=\"let s of ServicosVM\">\n                <td hidden>{{s.ativo}}</td>\n                <td>{{s.titulo}}</td>\n                <td>\n                  <img src='data:image/jpg;base64,{{s.imagemData}}' width=\"100px\" alt=\"Imagem\">\n                </td>\n                <td>{{s.descricaoCurta}}</td>\n                <td>{{s.descricaoLonga}}</td>\n                <td>\n                  <select class=\"form-control\">\n                    <option *ngFor=\"let vantagem of s.listaVantagens\" value=\"{{vantagem.descricao}}\">{{vantagem.descricao}}</option>\n                  </select>\n                </td>\n                <td class=\"text-center\">\n                  <button class=\"btn btn-sm btn-warning\">Editar</button>\n                  &nbsp;\n                  <button class=\"btn btn-sm btn-danger\">Deletar</button>\n                </td>\n                \n              </tr> -->\n      </tbody>\n\n    </table>\n\n  </form>\n\n\n\n  <!-- <ul class=\"nav nav-tabs\">\n    <li role=\"presentation\">\n      <a href=\"#compasso\" aria-controls=\"compasso\" role=\"tab\" data-toggle=\"tab\">Compasso</a>\n    </li>\n    <li role=\"presentation\">\n      <a href=\"#identidade\" aria-controls=\"identidade\" role=\"tab\" data-toggle=\"tab\">Identidade</a>\n    </li>\n  </ul>\n\n  <div class=\"tab-content\">\n    <div role=\"tabpanel\" id=\"compasso\" class=\"tab-pane\">\n\n    </div>\n\n    <div role=\"tabpanel\" id=\"identidade\" class=\"tab-pane\">\n\n      <form [formGroup]=\"frmCadIdentidade\" enctype=\"multipart/form-data\" class=\"form-horizontal col-md-8 col-md-offset-2 frm-restrita\">\n\n        <h3 class=\"text-center\">Identidade Organizacional</h3>\n\n        <div class=\"col-md-10 col-md-offset-1\">\n\n\n          <fieldset class=\"form-group\">\n            <label for=\"missao\">Missão</label>\n            <input type=\"text\" formControlName=\"missao\" name=\"Missao\" id=\"missao\" class=\"form-control input-sm\">\n\n          </fieldset>\n\n          <fieldset class=\"form-group\">\n            <label for=\"visao\">Visão</label>\n            <input type=\"text\" formControlName=\"visao\" name=\"Visao\" id=\"visao\" class=\"form-control input-sm\">\n\n          </fieldset>\n\n          <fieldset class=\"form-group\">\n            <label for=\"valores\">Valores</label>\n            <input type=\"text\" formControlName=\"valores\" name=\"Valores\" id=\"valores\" class=\"form-control input-sm\">\n\n          </fieldset>\n\n          <fieldset class=\"form-group\">\n\n            <input type=\"button\" (click)=\"postHomeSomos(HomeSomos)\" value=\"Cadastrar\" class=\"btn btn-lg btn-success btn-block\">\n            <input type=\"button\" (click)=\"getHomeSomos()\" value=\"Listar\" class=\"btn btn-lg btn-success btn-block\">\n\n          </fieldset>\n\n        </div>\n\n        <br><br>\n\n\n        <table class=\"table tbl\">\n          <thead>\n            <th hidden>Id</th>\n            <th>Titulo</th>\n            <th>Texto</th>\n            <th></th>\n          </thead>\n          <tbody>\n\n            <tr *ngFor=\"let i of Identidades\">\n              <td hidden>{{i.id}}</td>\n              <td>{{i.titulo}}</td>\n              <td>{{i.texto}}</td>\n            </tr>\n\n            \n          </tbody>\n\n        </table>\n\n      </form>\n\n    </div>\n  </div> -->\n\n\n</div>"

/***/ }),

/***/ "./src/app/Restrito/cad-home/cad-home.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/Restrito/cad-home/cad-home.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Restrito/cad-home/cad-home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Restrito/cad-home/cad-home.component.ts ***!
  \*********************************************************/
/*! exports provided: CadHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadHomeComponent", function() { return CadHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cad_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cad-home.service */ "./src/app/Restrito/cad-home/cad-home.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadHomeComponent = /** @class */ (function () {
    function CadHomeComponent(fb, cadHomeService, toast) {
        this.fb = fb;
        this.cadHomeService = cadHomeService;
        this.toast = toast;
    }
    CadHomeComponent.prototype.ngOnInit = function () {
        this.frmCadHomeSomos = this.fb.group({
            imagem: this.fb.control(''),
            titulo: this.fb.control(''),
            texto: this.fb.control('')
        });
    };
    CadHomeComponent.prototype.onChangeImage = function (files) {
        var _this = this;
        var file;
        file = files.item(0);
        this.fileupload = files.item(0);
        var reader = new FileReader();
        if (files && files.length > 0) {
            reader.onload = function (e) {
                _this.HomeSomos.imagem.data = reader.result;
                _this.HomeSomos.imagem.contentType = _this.fileupload.type;
                _this.imagemPreview = e.target.result;
            };
            reader.readAsDataURL(file);
        }
        console.log(this.HomeSomos);
        console.log(this.fileupload);
    };
    CadHomeComponent.prototype.getHomeSomos = function () {
        var _this = this;
        this.cadHomeService.getHome().subscribe(function (res) {
            console.log(res);
            console.log(res.data);
            _this.toast.success('Dados buscados com sucesso', 'Sucesso');
        }, function (err) {
            console.log(err);
            _this.toast.error('Infelizmente aconteceu um erro', 'Erro');
        });
    };
    CadHomeComponent.prototype.postHomeSomos = function (HomeSomos) {
        console.log(HomeSomos);
    };
    CadHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comp-cad-home',
            template: __webpack_require__(/*! ./cad-home.component.html */ "./src/app/Restrito/cad-home/cad-home.component.html"),
            styles: [__webpack_require__(/*! ./cad-home.component.scss */ "./src/app/Restrito/cad-home/cad-home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _cad_home_service__WEBPACK_IMPORTED_MODULE_2__["CadHomeService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CadHomeComponent);
    return CadHomeComponent;
}());



/***/ }),

/***/ "./src/app/Restrito/cad-home/cad-home.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/Restrito/cad-home/cad-home.service.ts ***!
  \*******************************************************/
/*! exports provided: CadHomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadHomeService", function() { return CadHomeService; });
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadHomeService = /** @class */ (function (_super) {
    __extends(CadHomeService, _super);
    function CadHomeService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    CadHomeService.prototype.posthome = function () {
    };
    CadHomeService.prototype.getHome = function () {
        var options = {
            headers: this.getHeader()
        };
        return this.http.get(this.UrlV1 + "somos/v1/listasomos", options);
    };
    CadHomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CadHomeService);
    return CadHomeService;
}(_services_base_service__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



/***/ }),

/***/ "./src/app/Restrito/cad-podcasts/cad-podcasts.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Restrito/cad-podcasts/cad-podcasts.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"jumbotron\">\n  cad-podcasts works!\n</p>\n"

/***/ }),

/***/ "./src/app/Restrito/cad-podcasts/cad-podcasts.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Restrito/cad-podcasts/cad-podcasts.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Restrito/cad-podcasts/cad-podcasts.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Restrito/cad-podcasts/cad-podcasts.component.ts ***!
  \*****************************************************************/
/*! exports provided: CadPodcastsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadPodcastsComponent", function() { return CadPodcastsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CadPodcastsComponent = /** @class */ (function () {
    function CadPodcastsComponent() {
    }
    CadPodcastsComponent.prototype.ngOnInit = function () {
    };
    CadPodcastsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comp-cad-podcasts',
            template: __webpack_require__(/*! ./cad-podcasts.component.html */ "./src/app/Restrito/cad-podcasts/cad-podcasts.component.html"),
            styles: [__webpack_require__(/*! ./cad-podcasts.component.scss */ "./src/app/Restrito/cad-podcasts/cad-podcasts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CadPodcastsComponent);
    return CadPodcastsComponent;
}());



/***/ }),

/***/ "./src/app/Restrito/cad-portifolio/cad-portifolio.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Restrito/cad-portifolio/cad-portifolio.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n    <form [formGroup]=\"frmCadPortifolio\" enctype=\"multipart/form-data\" class=\"form-horizontal col-md-8 col-md-offset-2 frm-restrita\">\n  \n      <h3 class=\"text-center\">Cadastro de serviços</h3>\n  \n      <div class=\"col-md-10 col-md-offset-1\">\n  \n        <fieldset class=\"form-group\">\n          <label for=\"titulo\">Titulo</label>\n          <input type=\"text\" formControlName=\"titulo\" name=\"Titulo\" id=\"titulo\" class=\"form-control input-sm\">\n  \n        </fieldset>\n  \n        <fieldset class=\"form-group\">\n          <label for=\"descricaocurta\">Descrição curta</label>\n          <textarea class=\"form-control\" formControlName=\"descricaocurta\" name=\"DescricaoCurta\" id=\"descricaocurta\" rows=\"2\"></textarea>\n        </fieldset>\n  \n        <fieldset class=\"form-group\">\n          <label for=\"descricaolonga\">Descrição Longa</label>\n          <textarea class=\"form-control\" formControlName=\"descricaolonga\" name=\"DescricaoLonga\" id=\"descricaolonga\" rows=\"3\"></textarea>\n        </fieldset>\n  \n        <fieldset class=\"form-group\">\n          <label for=\"titulo\">Imagem</label> <br>\n          <img src=\"\" alt=\"\">\n          <input type=\"file\" multiple=\"multiple\" name=\"imagem\" id=\"imagem\" (change)=\"onChangeImage($event.target.files)\" class=\"form-control input-sm\">\n  \n        </fieldset>\n  \n        <fieldset class=\"form-group\">\n          \n          <input type=\"text\" #txtvantagem class=\"form-control input-sm inline-block w85\" maxlength=\"100\" placeholder=\"Digite uma vantagem\">\n          &nbsp;\n          <button (click)=\"addVantagens(txtvantagem)\" class=\"btn btn-sm btn-default inline-block\">Adicionar</button>\n  \n          <div>\n  \n            <table id=\"tblVantagens\" class=\"table\">\n              <thead><th></th><th></th></thead>\n              <tbody>\n                <tr>\n                  <td></td><td></td>\n                </tr>\n                <!-- <tr *ngFor=\"let vant of ServicoVM.ListaVantagens\">\n                  <td class=\"w100\">{{vant.Descricao}}</td><td><span class=\"btn btn-sm btn-danger\">Remover</span></td>\n                </tr> -->\n              </tbody>\n            </table>\n  \n          </div>\n  \n        </fieldset>\n  \n        <fieldset class=\"form-group\">\n            \n          <input type=\"button\" (click)=\"postHomeSomos(HomeSomos)\" value=\"Cadastrar\" class=\"btn btn-lg btn-success btn-block\">\n        </fieldset>\n  \n      </div>\n  \n    </form>\n  \n    <br><br>\n  \n    <table class=\"table tbl\">\n      <thead>\n        <th hidden>Ativo?</th>\n        <th>Titulo</th>\n        <th>Imagem</th>\n        <th>Descrição curta</th>\n        <th>Descrição longa</th>\n        <th>Vantagens</th>\n        <th></th>\n      </thead>\n      <tbody>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <!-- <tr *ngFor=\"let s of ServicosVM\">\n          <td hidden>{{s.ativo}}</td>\n          <td>{{s.titulo}}</td>\n          <td>\n            <img src='data:image/jpg;base64,{{s.imagemData}}' width=\"100px\" alt=\"Imagem\">\n          </td>\n          <td>{{s.descricaoCurta}}</td>\n          <td>{{s.descricaoLonga}}</td>\n          <td>\n            <select class=\"form-control\">\n              <option *ngFor=\"let vantagem of s.listaVantagens\" value=\"{{vantagem.descricao}}\">{{vantagem.descricao}}</option>\n            </select>\n          </td>\n          <td class=\"text-center\">\n            <button class=\"btn btn-sm btn-warning\">Editar</button>\n            &nbsp;\n            <button class=\"btn btn-sm btn-danger\">Deletar</button>\n          </td>\n          \n        </tr> -->\n      </tbody>\n  \n    </table>\n  \n  </div>"

/***/ }),

/***/ "./src/app/Restrito/cad-portifolio/cad-portifolio.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/Restrito/cad-portifolio/cad-portifolio.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Restrito/cad-portifolio/cad-portifolio.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Restrito/cad-portifolio/cad-portifolio.component.ts ***!
  \*********************************************************************/
/*! exports provided: CadPortifolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadPortifolioComponent", function() { return CadPortifolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cad_portifolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cad-portifolio.service */ "./src/app/Restrito/cad-portifolio/cad-portifolio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadPortifolioComponent = /** @class */ (function () {
    function CadPortifolioComponent(cadPortService, fb) {
        this.cadPortService = cadPortService;
        this.fb = fb;
    }
    CadPortifolioComponent.prototype.ngOnInit = function () {
        this.frmCadPortifolio = this.fb.group({
            titulo: this.fb.control(''),
            descricaocurta: this.fb.control(''),
            descricaolonga: this.fb.control(''),
            imagempath: this.fb.control('')
        });
    };
    CadPortifolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comp-cad-portifolio',
            template: __webpack_require__(/*! ./cad-portifolio.component.html */ "./src/app/Restrito/cad-portifolio/cad-portifolio.component.html"),
            styles: [__webpack_require__(/*! ./cad-portifolio.component.scss */ "./src/app/Restrito/cad-portifolio/cad-portifolio.component.scss")]
        }),
        __metadata("design:paramtypes", [_cad_portifolio_service__WEBPACK_IMPORTED_MODULE_2__["CadPortifolioService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CadPortifolioComponent);
    return CadPortifolioComponent;
}());



/***/ }),

/***/ "./src/app/Restrito/cad-portifolio/cad-portifolio.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Restrito/cad-portifolio/cad-portifolio.service.ts ***!
  \*******************************************************************/
/*! exports provided: CadPortifolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadPortifolioService", function() { return CadPortifolioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/base.service */ "./src/app/services/base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CadPortifolioService = /** @class */ (function (_super) {
    __extends(CadPortifolioService, _super);
    function CadPortifolioService() {
        return _super.call(this) || this;
    }
    CadPortifolioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CadPortifolioService);
    return CadPortifolioService;
}(_services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/Restrito/cad-servicos/cad-servicos.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Restrito/cad-servicos/cad-servicos.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <form [formGroup]=\"frmCadServicos\" enctype=\"multipart/form-data\" class=\"form-horizontal col-md-8 col-md-offset-2 frm-restrita\">\n\n    <h3 class=\"text-center\">Cadastro de serviços</h3>\n\n    <div class=\"col-md-10 col-md-offset-1\">\n\n      <fieldset class=\"form-group\">\n        <label for=\"titulo\">Titulo</label>\n        <input type=\"text\" autofocus=\"autofocus\" formControlName=\"titulo\" name=\"Titulo\" id=\"titulo\" [value]=\"ServicoVM.titulo\" class=\"form-control input-sm\">\n\n      </fieldset>\n\n      <fieldset class=\"form-group\">\n        <label for=\"descricaocurta\">Descrição curta</label>\n        <textarea class=\"form-control input-sm\" formControlName=\"descricaocurta\" name=\"DescricaoCurta\" id=\"descricaocurta\" rows=\"2\"\n          [value]='ServicoVM.descricaoCurta'></textarea>\n      </fieldset>\n\n      <fieldset class=\"form-group\">\n        <label for=\"descricaolonga\">Descrição Longa</label>\n        <textarea class=\"form-control input-sm\" formControlName=\"descricaolonga\" name=\"DescricaoLonga\" id=\"descricaolonga\" rows=\"3\"\n          [value]='ServicoVM.descricaoLonga'></textarea>\n      </fieldset>\n\n      <fieldset class=\"form-group\">\n        <label for=\"video\">Vídeo</label> <br>\n\n        <div [hidden]=\"VideoPreviewUrl === undefined\" [innerHTML]=\"VideoPreviewUrl\"></div>\n\n        <input type=\"url\" #video name=\"video\" formControlName=\"urlvideo\" id=\"video\" [value]='ServicoVM.urlVideo' class=\"form-control input-sm\"\n          (change)=\"onChangeVideo(video)\">\n\n      </fieldset>\n\n      <fieldset class=\"form-group\">\n        <label for=\"titulo\">Imagem</label> <br>\n        <!-- <img [hidden]=\"ImagePreview === undefined\" src=\"{{ImagePreview}}\" alt=\"Foto do serviço\"> -->\n        <img [hidden]=\"ServicoVM.imagem.data === undefined\" [src]=\"ServicoVM.imagem.data\" alt=\"Foto do serviço\">\n        <input type=\"file\" multiple=\"multiple\" name=\"imagem\" id=\"imagem\" formControlName=\"imagem\" (change)=\"onChangeImage($event.target.files)\"\n          class=\"form-control input-sm\">\n\n      </fieldset>\n\n      <fieldset class=\"form-group\">\n\n        <input type=\"text\" #txtvantagem class=\"form-control input-sm inline-block w85\" maxlength=\"100\" placeholder=\"Digite uma vantagem\">\n        &nbsp;\n        <button (click)=\"addVantagens(txtvantagem)\" class=\"btn btn-sm btn-default inline-block\">Adicionar</button>\n\n        <div>\n\n          <table id=\"tblVantagens\" class=\"table\">\n            <thead>\n              <th></th>\n              <th></th>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let vant of ServicoVM.listaVantagens\">\n                <td class=\"w100\">{{vant.descricao}}</td>\n                <td><span class=\"btn btn-sm btn-danger\" (click)='removeVantagens(vant)'>Remover</span></td>\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n\n      </fieldset>\n\n      <fieldset class=\"form-group\">\n\n        <input type=\"button\" (click)=\"postServicos(ServicoVM)\" value=\"Cadastrar\" class=\"btn btn-lg btn-success btn-block\">\n      </fieldset>\n\n    </div>\n\n  </form>\n\n  <br><br>\n\n  <table class=\"table tbl\">\n    <thead>\n      <th>Titulo</th>\n      <th>Video</th>\n      <th>Imagem</th>\n      <th>Descrição curta</th>\n      <th>Descrição longa</th>\n      <th>Vantagens</th>\n      <th></th>\n      <th></th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let s of ServicosVM\">\n        <td>{{s.titulo}}</td>\n        <td>\n                      \n            <ng-container *ngIf=\"s.urlVideo; else elseTemplate\">\n              <img  [src]=\"getEmbedImage(s.urlVideo)\" alt=\"\">\n            </ng-container>\n            <ng-template #elseTemplate>\n              Sem vídeo\n            </ng-template>\n          \n        </td>\n        <td>\n          <img [src]='s.imagem.data' [hidden]='s.imagem.data === undefined' alt=\"Imagem\">\n        </td>\n        <td>{{s.descricaoCurta}}</td>\n        <td>{{s.descricaoLonga}}</td>\n        <td>\n          <select class=\"form-control\">\n            <option *ngFor=\"let vantagem of s.listaVantagens\" value=\"{{vantagem.descricao}}\">{{vantagem.descricao}}</option>\n          </select>\n        </td>\n        <td class=\"text-center\">\n          <button class=\"btn btn-sm btn-warning\" (click)='editaServico(s)'>Editar</button>\n        </td>\n        <td class=\"text-center\">\n          <button class=\"btn btn-sm btn-danger\" (click)='delServicos(s)'>Deletar</button>\n        </td>\n      </tr>\n    </tbody>\n\n  </table>\n\n  <br>\n\n  <div>\n\n    <ul id=\"icons\">\n      <li class=\"ion-ionic\" data-pack=\"default\" data-tags=\"badass, framework, sexy, hawt\"></li>\n      <li class=\"ion-arrow-up-a\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-arrow-right-a\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-arrow-down-a\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-arrow-left-a\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-arrow-up-b\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-arrow-right-b\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-arrow-down-b\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-arrow-left-b\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-arrow-up-c\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-arrow-right-c\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-arrow-down-c\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-arrow-left-c\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-arrow-return-right\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-arrow-return-left\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-arrow-swap\" data-pack=\"default\" data-tags=\"switch, flip\"></li>\n      <li class=\"ion-arrow-shrink\" data-pack=\"default\" data-tags=\"pinch\"></li>\n      <li class=\"ion-arrow-expand\" data-pack=\"default\" data-tags=\"fullscreen\"></li>\n      <li class=\"ion-arrow-move\" data-pack=\"default\" data-tags=\"drag\"></li>\n      <li class=\"ion-arrow-resize\" data-pack=\"default\" data-tags=\"drag\"></li>\n      <li class=\"ion-chevron-up\" data-pack=\"default\" data-tags=\"arrow, up\"></li>\n      <li class=\"ion-chevron-right\" data-pack=\"default\" data-tags=\"arrow, right\"></li>\n      <li class=\"ion-chevron-down\" data-pack=\"default\" data-tags=\"arrow, down\"></li>\n      <li class=\"ion-chevron-left\" data-pack=\"default\" data-tags=\"arrow, left\"></li>\n      <li class=\"ion-navicon-round\" data-pack=\"default\" data-tags=\"menu, hamburger, slide menu\"></li>\n      <li class=\"ion-navicon\" data-pack=\"default\" data-tags=\"menu, hamburger, slide menu\"></li>\n      <li class=\"ion-drag\" data-pack=\"default\" data-tags=\"reorder, move, drag\"></li>\n      <li class=\"ion-log-in\" data-pack=\"default\" data-tags=\"sign in, \"></li>\n      <li class=\"ion-log-out\" data-pack=\"default\" data-tags=\"sign out\"></li>\n      <li class=\"ion-checkmark-round\" data-pack=\"default\" data-tags=\"complete, finished, success, on\"></li>\n      <li class=\"ion-checkmark\" data-pack=\"default\" data-tags=\"complete, finished, success, on\"></li>\n      <li class=\"ion-checkmark-circled\" data-pack=\"default\" data-tags=\"complete, finished, success, on\"></li>\n      <li class=\"ion-close-round\" data-pack=\"default\" data-tags=\"delete, trash, kill, x\"></li>\n      <li class=\"ion-close\" data-pack=\"default\" data-tags=\"delete, trash, kill, x\"></li>\n      <li class=\"ion-close-circled\" data-pack=\"default\" data-tags=\"delete, trash, kill, x\"></li>\n      <li class=\"ion-plus-round\" data-pack=\"default\" data-tags=\"add, include, new, invite, +\"></li>\n      <li class=\"ion-plus\" data-pack=\"default\" data-tags=\"add, include, new, invite, +\"></li>\n      <li class=\"ion-plus-circled\" data-pack=\"default\" data-tags=\"add, include, new, invite, +\"></li>\n      <li class=\"ion-minus-round\" data-pack=\"default\" data-tags=\"hide, remove, minimize, -\"></li>\n      <li class=\"ion-minus\" data-pack=\"default\" data-tags=\"hide, remove, minimize, -\"></li>\n      <li class=\"ion-minus-circled\" data-pack=\"default\" data-tags=\"hide, remove, minimize, -\"></li>\n      <li class=\"ion-information\" data-pack=\"default\" data-tags=\"help, more, tooltip\"></li>\n      <li class=\"ion-information-circled\" data-pack=\"default\" data-tags=\"help, more, tooltip\"></li>\n      <li class=\"ion-help\" data-pack=\"default\" data-tags=\"question, ?\"></li>\n      <li class=\"ion-help-circled\" data-pack=\"default\" data-tags=\"question, ?\"></li>\n      <li class=\"ion-backspace-outline\" data-pack=\"default\" data-tags=\"delete, remove, back\"></li>\n      <li class=\"ion-backspace\" data-pack=\"default\" data-tags=\"delete, remove, back\"></li>\n      <li class=\"ion-help-buoy\" data-pack=\"default\" data-tags=\"question, ?\"></li>\n      <li class=\"ion-asterisk\" data-pack=\"default\" data-tags=\"favorite, mark, star\"></li>\n      <li class=\"ion-alert\" data-pack=\"default\" data-tags=\"attention, warning, notice, !, exclamation\"></li>\n      <li class=\"ion-alert-circled\" data-pack=\"default\" data-tags=\"attention, warning, notice, !, exclamation\"></li>\n      <li class=\"ion-refresh\" data-pack=\"default\" data-tags=\"reload, renew\"></li>\n      <li class=\"ion-loop\" data-pack=\"default\" data-tags=\"refresh\"></li>\n      <li class=\"ion-shuffle\" data-pack=\"default\" data-tags=\"random\"></li>\n      <li class=\"ion-home\" data-pack=\"default\" data-tags=\"house\"></li>\n      <li class=\"ion-search\" data-pack=\"default\" data-tags=\"magnifying glass\"></li>\n      <li class=\"ion-flag\" data-pack=\"default\" data-tags=\"favorite, mark, star\"></li>\n      <li class=\"ion-star\" data-pack=\"default\" data-tags=\"favorite\"></li>\n      <li class=\"ion-heart\" data-pack=\"default\" data-tags=\"love\"></li>\n      <li class=\"ion-heart-broken\" data-pack=\"default\" data-tags=\"love\"></li>\n      <li class=\"ion-gear-a\" data-pack=\"default\" data-tags=\"settings, options, cog\"></li>\n      <li class=\"ion-gear-b\" data-pack=\"default\" data-tags=\"settings, options, cog\"></li>\n      <li class=\"ion-toggle-filled\" data-pack=\"default\" data-tags=\"settings, options, switch\"></li>\n      <li class=\"ion-toggle\" data-pack=\"default\" data-tags=\"settings, options, switch\"></li>\n      <li class=\"ion-settings\" data-pack=\"default\" data-tags=\"options, tools\"></li>\n      <li class=\"ion-wrench\" data-pack=\"default\" data-tags=\"settings, options, tools\"></li>\n      <li class=\"ion-hammer\" data-pack=\"default\" data-tags=\"settings, options, tools\"></li>\n      <li class=\"ion-edit\" data-pack=\"default\" data-tags=\"change, update, write, type, pencil\"></li>\n      <li class=\"ion-trash-a\" data-pack=\"default\" data-tags=\"delete, remove, dump\"></li>\n      <li class=\"ion-trash-b\" data-pack=\"default\" data-tags=\"delete, remove, dump\"></li>\n      <li class=\"ion-document\" data-pack=\"default\" data-tags=\"paper, file\"></li>\n      <li class=\"ion-document-text\" data-pack=\"default\" data-tags=\"paper, file\"></li>\n      <li class=\"ion-clipboard\" data-pack=\"default\" data-tags=\"write\"></li>\n      <li class=\"ion-scissors\" data-pack=\"default\" data-tags=\"cut\"></li>\n      <li class=\"ion-funnel\" data-pack=\"default\" data-tags=\"sort\"></li>\n      <li class=\"ion-bookmark\" data-pack=\"default\" data-tags=\"favorite, tag, save\"></li>\n      <li class=\"ion-email\" data-pack=\"default\" data-tags=\"snail, mail, inbox\"></li>\n      <li class=\"ion-email-unread\" data-pack=\"default\" data-tags=\"snail, mail, inbox\"></li>\n      <li class=\"ion-folder\" data-pack=\"default\" data-tags=\"snail, mail\"></li>\n      <li class=\"ion-filing\" data-pack=\"default\" data-tags=\"mail\"></li>\n      <li class=\"ion-archive\" data-pack=\"default\" data-tags=\"mail\"></li>\n      <li class=\"ion-reply\" data-pack=\"default\" data-tags=\"mail, undo\"></li>\n      <li class=\"ion-reply-all\" data-pack=\"default\" data-tags=\"mail\"></li>\n      <li class=\"ion-forward\" data-pack=\"default\" data-tags=\"mail, redo\"></li>\n      <li class=\"ion-share\" data-pack=\"default\" data-tags=\"outbound\"></li>\n      <li class=\"ion-paper-airplane\" data-pack=\"default\" data-tags=\"outbound, mail, letter, send\"></li>\n      <li class=\"ion-link\" data-pack=\"default\" data-tags=\"chain, anchor, href, attach\"></li>\n      <li class=\"ion-paperclip\" data-pack=\"default\" data-tags=\"attach\"></li>\n      <li class=\"ion-compose\" data-pack=\"default\" data-tags=\"write, compose, type\"></li>\n      <li class=\"ion-briefcase\" data-pack=\"default\" data-tags=\"store, organize\"></li>\n      <li class=\"ion-medkit\" data-pack=\"default\" data-tags=\"health\"></li>\n      <li class=\"ion-at\" data-pack=\"default\" data-tags=\"@\"></li>\n      <li class=\"ion-pound\" data-pack=\"default\" data-tags=\"hashtag, #\"></li>\n      <li class=\"ion-quote\" data-pack=\"default\" data-tags=\"chat, quotation\"></li>\n      <li class=\"ion-cloud\" data-pack=\"default\" data-tags=\"storage\"></li>\n      <li class=\"ion-upload\" data-pack=\"default\" data-tags=\"storage, cloud\"></li>\n      <li class=\"ion-more\" data-pack=\"default\" data-tags=\"circles\"></li>\n      <li class=\"ion-grid\" data-pack=\"default\" data-tags=\"menu\"></li>\n      <li class=\"ion-calendar\" data-pack=\"default\" data-tags=\"date, time, month, year\"></li>\n      <li class=\"ion-clock\" data-pack=\"default\" data-tags=\"time, watch, hours, minutes, seconds\"></li>\n      <li class=\"ion-compass\" data-pack=\"default\" data-tags=\"location, directions, navigation\"></li>\n      <li class=\"ion-pinpoint\" data-pack=\"default\" data-tags=\"gps, navigation\"></li>\n      <li class=\"ion-pin\" data-pack=\"default\" data-tags=\"gps, navigation\"></li>\n      <li class=\"ion-navigate\" data-pack=\"default\" data-tags=\"gps, location pin\"></li>\n      <li class=\"ion-location\" data-pack=\"default\" data-tags=\"gps, navigation, pin\"></li>\n      <li class=\"ion-map\" data-pack=\"default\" data-tags=\"gps, navigation, pin\"></li>\n      <li class=\"ion-lock-combination\" data-pack=\"default\" data-tags=\"padlock, security\"></li>\n      <li class=\"ion-locked\" data-pack=\"default\" data-tags=\"padlock, security\"></li>\n      <li class=\"ion-unlocked\" data-pack=\"default\" data-tags=\"padlock, security\"></li>\n      <li class=\"ion-key\" data-pack=\"default\" data-tags=\"access\"></li>\n      <li class=\"ion-arrow-graph-up-right\" data-pack=\"default\" data-tags=\"stats\"></li>\n      <li class=\"ion-arrow-graph-down-right\" data-pack=\"default\" data-tags=\"stats\"></li>\n      <li class=\"ion-arrow-graph-up-left\" data-pack=\"default\" data-tags=\"stats\"></li>\n      <li class=\"ion-arrow-graph-down-left\" data-pack=\"default\" data-tags=\"stats\"></li>\n      <li class=\"ion-stats-bars\" data-pack=\"default\" data-tags=\"data\"></li>\n      <li class=\"ion-connection-bars\" data-pack=\"default\" data-tags=\"data, stats\"></li>\n      <li class=\"ion-pie-graph\" data-pack=\"default\" data-tags=\"stats\"></li>\n      <li class=\"ion-chatbubble\" data-pack=\"default\" data-tags=\"talk\"></li>\n      <li class=\"ion-chatbubble-working\" data-pack=\"default\" data-tags=\"talk\"></li>\n      <li class=\"ion-chatbubbles\" data-pack=\"default\" data-tags=\"talk\"></li>\n      <li class=\"ion-chatbox\" data-pack=\"default\" data-tags=\"talk\"></li>\n      <li class=\"ion-chatbox-working\" data-pack=\"default\" data-tags=\"talk\"></li>\n      <li class=\"ion-chatboxes\" data-pack=\"default\" data-tags=\"talk\"></li>\n      <li class=\"ion-person\" data-pack=\"default\" data-tags=\"users, staff, head, human\"></li>\n      <li class=\"ion-person-add\" data-pack=\"default\" data-tags=\"users, staff, head, human, member, new\"></li>\n      <li class=\"ion-person-stalker\" data-pack=\"default\" data-tags=\"people, human, users, staff\"></li>\n      <li class=\"ion-woman\" data-pack=\"default\" data-tags=\"female, lady, girl, dudette\"></li>\n      <li class=\"ion-man\" data-pack=\"default\" data-tags=\"male, guy, boy, dude\"></li>\n      <li class=\"ion-female\" data-pack=\"default\" data-tags=\"lady, girl, dudette\"></li>\n      <li class=\"ion-male\" data-pack=\"default\" data-tags=\"male, guy, boy, dude\"></li>\n      <li class=\"ion-transgender\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-fork\" data-pack=\"default\" data-tags=\"food, drink, eat\"></li>\n      <li class=\"ion-knife\" data-pack=\"default\" data-tags=\"food, drink, eat\"></li>\n      <li class=\"ion-spoon\" data-pack=\"default\" data-tags=\"food, drink, eat\"></li>\n      <li class=\"ion-soup-can-outline\" data-pack=\"default\" data-tags=\"food, drink, eat\"></li>\n      <li class=\"ion-soup-can\" data-pack=\"default\" data-tags=\"food, drink, eat\"></li>\n      <li class=\"ion-beer\" data-pack=\"default\" data-tags=\"food, drink, eat\"></li>\n      <li class=\"ion-wineglass\" data-pack=\"default\" data-tags=\"food, drink, eat\"></li>\n      <li class=\"ion-coffee\" data-pack=\"default\" data-tags=\"food, drink, eat, caffeine\"></li>\n      <li class=\"ion-icecream\" data-pack=\"default\" data-tags=\"food, drink, eat\"></li>\n      <li class=\"ion-pizza\" data-pack=\"default\" data-tags=\"food, drink, eat\"></li>\n      <li class=\"ion-power\" data-pack=\"default\" data-tags=\"on, off\"></li>\n      <li class=\"ion-mouse\" data-pack=\"default\" data-tags=\"computer\"></li>\n      <li class=\"ion-battery-full\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-battery-half\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-battery-low\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-battery-empty\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-battery-charging\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-wifi\" data-pack=\"default\" data-tags=\"internet, connection\"></li>\n      <li class=\"ion-bluetooth\" data-pack=\"default\" data-tags=\"connection, cloud\"></li>\n      <li class=\"ion-calculator\" data-pack=\"default\" data-tags=\"math, arithmatic, numbers, addition, subtraction\"></li>\n      <li class=\"ion-camera\" data-pack=\"default\" data-tags=\"photo\"></li>\n      <li class=\"ion-eye\" data-pack=\"default\" data-tags=\"view, see, creeper\"></li>\n      <li class=\"ion-eye-disabled\" data-pack=\"default\" data-tags=\"view, see, creeper\"></li>\n      <li class=\"ion-flash\" data-pack=\"default\" data-tags=\"lightning, weather, whether\"></li>\n      <li class=\"ion-flash-off\" data-pack=\"default\" data-tags=\"\"></li>\n      <li class=\"ion-qr-scanner\" data-pack=\"default\" data-tags=\"reader\"></li>\n      <li class=\"ion-image\" data-pack=\"default\" data-tags=\"photo\"></li>\n      <li class=\"ion-images\" data-pack=\"default\" data-tags=\"photo\"></li>\n      <li class=\"ion-wand\" data-pack=\"default\" data-tags=\"images, levels, light, dark, settings\"></li>\n      <li class=\"ion-contrast\" data-pack=\"default\" data-tags=\"images, levels, light, dark, settings\"></li>\n      <li class=\"ion-aperture\" data-pack=\"default\" data-tags=\"images, levels, light, dark, settings\"></li>\n      <li class=\"ion-crop\" data-pack=\"default\" data-tags=\"images, levels, light, dark, settings\"></li>\n      <li class=\"ion-easel\" data-pack=\"default\" data-tags=\"images, art, create, color\"></li>\n      <li class=\"ion-paintbrush\" data-pack=\"default\" data-tags=\"images, art, create, color\"></li>\n      <li class=\"ion-paintbucket\" data-pack=\"default\" data-tags=\"images, art, create, color\"></li>\n      <li class=\"ion-monitor\" data-pack=\"default\" data-tags=\"thunderbolt, screen\"></li>\n      <li class=\"ion-laptop\" data-pack=\"default\" data-tags=\"macbook, apple, osx\"></li>\n      <li class=\"ion-ipad\" data-pack=\"default\" data-tags=\"tablet, mobile, apple, retina, device\"></li>\n      <li class=\"ion-iphone\" data-pack=\"default\" data-tags=\"smartphone, mobile, apple, retina, device\"></li>\n      <li class=\"ion-ipod\" data-pack=\"default\" data-tags=\"music, player, apple, retina, device\"></li>\n      <li class=\"ion-printer\" data-pack=\"default\" data-tags=\"paper\"></li>\n      <li class=\"ion-usb\" data-pack=\"default\" data-tags=\"digital, computer\"></li>\n      <li class=\"ion-outlet\" data-pack=\"default\" data-tags=\"digital, computer, electricity\"></li>\n      <li class=\"ion-bug\" data-pack=\"default\" data-tags=\"develop, program, hacker, error\"></li>\n      <li class=\"ion-code\" data-pack=\"default\" data-tags=\"develop, program, hacker\"></li>\n      <li class=\"ion-code-working\" data-pack=\"default\" data-tags=\"develop, program, hacker\"></li>\n      <li class=\"ion-code-download\" data-pack=\"default\" data-tags=\"develop, program, hacker\"></li>\n      <li class=\"ion-fork-repo\" data-pack=\"default\" data-tags=\"develop, program, hacker, github\"></li>\n      <li class=\"ion-network\" data-pack=\"default\" data-tags=\"develop, program, hacker, github\"></li>\n      <li class=\"ion-pull-request\" data-pack=\"default\" data-tags=\"develop, program, hacker, github\"></li>\n      <li class=\"ion-merge\" data-pack=\"default\" data-tags=\"develop, program, hacker, github\"></li>\n      <li class=\"ion-xbox\" data-pack=\"default\" data-tags=\"fun, games\"></li>\n      <li class=\"ion-playstation\" data-pack=\"default\" data-tags=\"fun, games\"></li>\n      <li class=\"ion-steam\" data-pack=\"default\" data-tags=\"fun, games\"></li>\n      <li class=\"ion-closed-captioning\" data-pack=\"default\" data-tags=\"movie, film, television\"></li>\n      <li class=\"ion-videocamera\" data-pack=\"default\" data-tags=\"movie, film, television\"></li>\n      <li class=\"ion-film-marker\" data-pack=\"default\" data-tags=\"film, cut, action\"></li>\n      <li class=\"ion-disc\" data-pack=\"default\" data-tags=\"cd, vinyl\"></li>\n      <li class=\"ion-headphone\" data-pack=\"default\" data-tags=\"music, earbuds, beats\"></li>\n      <li class=\"ion-music-note\" data-pack=\"default\" data-tags=\"songs\"></li>\n      <li class=\"ion-radio-waves\" data-pack=\"default\" data-tags=\"music, sound, speaker\"></li>\n      <li class=\"ion-speakerphone\" data-pack=\"default\" data-tags=\"sound, speaker, loud, amplify\"></li>\n      <li class=\"ion-mic-a\" data-pack=\"default\" data-tags=\"sound, talk, speaker\"></li>\n      <li class=\"ion-mic-b\" data-pack=\"default\" data-tags=\"sound, talk, speaker\"></li>\n      <li class=\"ion-mic-c\" data-pack=\"default\" data-tags=\"sound, talk, speaker\"></li>\n      <li class=\"ion-volume-high\" data-pack=\"default\" data-tags=\"sound, noise\"></li>\n      <li class=\"ion-volume-medium\" data-pack=\"default\" data-tags=\"sound\"></li>\n      <li class=\"ion-volume-low\" data-pack=\"default\" data-tags=\"sound\"></li>\n      <li class=\"ion-volume-mute\" data-pack=\"default\" data-tags=\"sound\"></li>\n      <li class=\"ion-levels\" data-pack=\"default\" data-tags=\"options, toggles, sound, mixer\"></li>\n      <li class=\"ion-play\" data-pack=\"default\" data-tags=\"music, watch, arrow, right\"></li>\n      <li class=\"ion-pause\" data-pack=\"default\" data-tags=\"music, break, hold, freeze\"></li>\n      <li class=\"ion-stop\" data-pack=\"default\" data-tags=\"music, square, hold, freeze\"></li>\n      <li class=\"ion-record\" data-pack=\"default\" data-tags=\"music, circle\"></li>\n      <li class=\"ion-skip-forward\" data-pack=\"default\" data-tags=\"music, next\"></li>\n      <li class=\"ion-skip-backward\" data-pack=\"default\" data-tags=\"music, previous\"></li>\n      <li class=\"ion-eject\" data-pack=\"default\" data-tags=\"music, dvd, remove\"></li>\n      <li class=\"ion-bag\" data-pack=\"default\" data-tags=\"shopping, price, cart, money, container, $\"></li>\n      <li class=\"ion-card\" data-pack=\"default\" data-tags=\"credit, price, debit, money, shopping, cash, dollars, $\"></li>\n      <li class=\"ion-cash\" data-pack=\"default\" data-tags=\"credit, price, debit, money, shopping, dollars, $\"></li>\n      <li class=\"ion-pricetag\" data-pack=\"default\" data-tags=\"credit, debit, money, shopping, cash, dollars, $\"></li>\n      <li class=\"ion-pricetags\" data-pack=\"default\" data-tags=\"credit, debit, money, shopping, cash, dollars, $\"></li>\n      <li class=\"ion-thumbsup\" data-pack=\"default\" data-tags=\"like, fun, yes\"></li>\n      <li class=\"ion-thumbsdown\" data-pack=\"default\" data-tags=\"dislike, boring, no\"></li>\n      <li class=\"ion-happy-outline\" data-pack=\"default\" data-tags=\"good, like, fun, yes\"></li>\n      <li class=\"ion-happy\" data-pack=\"default\" data-tags=\"good, like, fun, yes\"></li>\n      <li class=\"ion-sad-outline\" data-pack=\"default\" data-tags=\"cry, bad, no\"></li>\n      <li class=\"ion-sad\" data-pack=\"default\" data-tags=\"cry, bad, no\"></li>\n      <li class=\"ion-bowtie\" data-pack=\"default\" data-tags=\"tie, shirt, dress, clothing\"></li>\n      <li class=\"ion-tshirt-outline\" data-pack=\"default\" data-tags=\"tie, shirt, dress, clothing\"></li>\n      <li class=\"ion-tshirt\" data-pack=\"default\" data-tags=\"tie, shirt, dress, clothing\"></li>\n      <li class=\"ion-trophy\" data-pack=\"default\" data-tags=\"competition, compete, win, lose, award\"></li>\n      <li class=\"ion-podium\" data-pack=\"default\" data-tags=\"competition, compete, win, lose, award\"></li>\n      <li class=\"ion-ribbon-a\" data-pack=\"default\" data-tags=\"competition, compete, win, lose, award, trophy\"></li>\n      <li class=\"ion-ribbon-b\" data-pack=\"default\" data-tags=\"competition, compete, win, lose, award, trophy\"></li>\n      <li class=\"ion-university\" data-pack=\"default\" data-tags=\"graduate, education, school, tassle\"></li>\n      <li class=\"ion-magnet\" data-pack=\"default\" data-tags=\"sticky, attraction\"></li>\n      <li class=\"ion-beaker\" data-pack=\"default\" data-tags=\"mixture, potion, flask\"></li>\n      <li class=\"ion-erlenmeyer-flask\" data-pack=\"default\" data-tags=\"mixture, potion, beaker, potion\"></li>\n      <li class=\"ion-egg\" data-pack=\"default\" data-tags=\"birth, twitter, bird, baby\"></li>\n      <li class=\"ion-earth\" data-pack=\"default\" data-tags=\"nature, globe, home, planet\"></li>\n      <li class=\"ion-planet\" data-pack=\"default\" data-tags=\"nature, globe, home, planet, space\"></li>\n      <li class=\"ion-lightbulb\" data-pack=\"default\" data-tags=\"idea, new, aha!\"></li>\n      <li class=\"ion-cube\" data-pack=\"default\" data-tags=\"box, square, container\"></li>\n      <li class=\"ion-leaf\" data-pack=\"default\" data-tags=\"green, recycle, plant, nature\"></li>\n      <li class=\"ion-waterdrop\" data-pack=\"default\" data-tags=\"nature, clean, recycle, fresh, wet, rain\"></li>\n      <li class=\"ion-flame\" data-pack=\"default\" data-tags=\"fire, hot, heat\"></li>\n      <li class=\"ion-fireball\" data-pack=\"default\" data-tags=\"hot, heat\"></li>\n      <li class=\"ion-bonfire\" data-pack=\"default\" data-tags=\"hot, heat\"></li>\n      <li class=\"ion-umbrella\" data-pack=\"default\" data-tags=\"wet, rain, dry, shelter\"></li>\n      <li class=\"ion-nuclear\" data-pack=\"default\" data-tags=\"danger, warning, hazard\"></li>\n      <li class=\"ion-no-smoking\" data-pack=\"default\" data-tags=\"danger, warning, cigarette, cancer\"></li>\n      <li class=\"ion-thermometer\" data-pack=\"default\" data-tags=\"hot, cold, heat, temperature, mercury\"></li>\n      <li class=\"ion-speedometer\" data-pack=\"default\" data-tags=\"travel, accelerate\"></li>\n      <li class=\"ion-model-s\" data-pack=\"default\" data-tags=\"navigation, car, drive, transportation, tesla, sexy\"></li>\n      <li class=\"ion-plane\" data-pack=\"default\" data-tags=\"fly, jet\"></li>\n      <li class=\"ion-jet\" data-pack=\"default\" data-tags=\"fly, plane\"></li>\n      <li class=\"ion-load-a\" data-pack=\"default\" data-tags=\"spinner, waiting, refresh\"></li>\n      <li class=\"ion-load-b\" data-pack=\"default\" data-tags=\"spinner, waiting, refresh\"></li>\n      <li class=\"ion-load-c\" data-pack=\"default\" data-tags=\"spinner, waiting, refresh\"></li>\n      <li class=\"ion-load-d\" data-pack=\"default\" data-tags=\"spinner, waiting, refresh\"></li>\n\n      <li class=\"ion-ios-ionic-outline\" data-pack=\"ios\" data-tags=\"badass, framework, sexy\"></li>\n      <li class=\"ion-ios-arrow-back\" data-pack=\"ios\" data-tags=\"chevron, left\"></li>\n      <li class=\"ion-ios-arrow-forward\" data-pack=\"ios\" data-tags=\"chevron, right\"></li>\n      <li class=\"ion-ios-arrow-up\" data-pack=\"ios\" data-tags=\"chevron\"></li>\n      <li class=\"ion-ios-arrow-right\" data-pack=\"ios\" data-tags=\"chevron\"></li>\n      <li class=\"ion-ios-arrow-down\" data-pack=\"ios\" data-tags=\"chevron\"></li>\n      <li class=\"ion-ios-arrow-left\" data-pack=\"ios\" data-tags=\"chevron\"></li>\n      <li class=\"ion-ios-arrow-thin-up\" data-pack=\"ios\" data-tags=\"chevron\"></li>\n      <li class=\"ion-ios-arrow-thin-right\" data-pack=\"ios\" data-tags=\"chevron\"></li>\n      <li class=\"ion-ios-arrow-thin-down\" data-pack=\"ios\" data-tags=\"chevron\"></li>\n      <li class=\"ion-ios-arrow-thin-left\" data-pack=\"ios\" data-tags=\"chevron\"></li>\n      <li class=\"ion-ios-circle-filled\" data-pack=\"ios\" data-tags=\"checkmark, radio, dot, on, selected, button\"></li>\n      <li class=\"ion-ios-circle-outline\" data-pack=\"ios\" data-tags=\"checkmark, radio, dot, off, button\"></li>\n      <li class=\"ion-ios-checkmark-empty\" data-pack=\"ios\" data-tags=\"success, confirmed, on, finished, complete\"></li>\n      <li class=\"ion-ios-checkmark-outline\" data-pack=\"ios\" data-tags=\"success, confirmed, on, finished, complete\"></li>\n      <li class=\"ion-ios-checkmark\" data-pack=\"ios\" data-tags=\"success, confirmed, on, finished, complete\"></li>\n      <li class=\"ion-ios-plus-empty\" data-pack=\"ios\" data-tags=\"add, include, new, invite, +\"></li>\n      <li class=\"ion-ios-plus-outline\" data-pack=\"ios\" data-tags=\"add, include, new, invite, +\"></li>\n      <li class=\"ion-ios-plus\" data-pack=\"ios\" data-tags=\"add, include, new, invite, +\"></li>\n      <li class=\"ion-ios-close-empty\" data-pack=\"ios\" data-tags=\"delete, remove, trash, end, stop, x\"></li>\n      <li class=\"ion-ios-close-outline\" data-pack=\"ios\" data-tags=\"delete, remove, trash, end, stop, x\"></li>\n      <li class=\"ion-ios-close\" data-pack=\"ios\" data-tags=\"delete, remove, trash, end, stop, x\"></li>\n      <li class=\"ion-ios-minus-empty\" data-pack=\"ios\" data-tags=\"hide, remove, minimize, -\"></li>\n      <li class=\"ion-ios-minus-outline\" data-pack=\"ios\" data-tags=\"hide, remove, minimize, -\"></li>\n      <li class=\"ion-ios-minus\" data-pack=\"ios\" data-tags=\"hide, remove, minimize, -\"></li>\n      <li class=\"ion-ios-information-empty\" data-pack=\"ios\" data-tags=\"help, question\"></li>\n      <li class=\"ion-ios-information-outline\" data-pack=\"ios\" data-tags=\"help, question\"></li>\n      <li class=\"ion-ios-information\" data-pack=\"ios\" data-tags=\"help, question\"></li>\n      <li class=\"ion-ios-help-empty\" data-pack=\"ios\" data-tags=\"question, information, ?\"></li>\n      <li class=\"ion-ios-help-outline\" data-pack=\"ios\" data-tags=\"question, information, ?\"></li>\n      <li class=\"ion-ios-help\" data-pack=\"ios\" data-tags=\"question, information, ?\"></li>\n      <li class=\"ion-ios-search\" data-pack=\"ios\" data-tags=\"find, seek, look, magnifying glass\"></li>\n      <li class=\"ion-ios-search-strong\" data-pack=\"ios\" data-tags=\"find, seek, look, magnifying glass\"></li>\n      <li class=\"ion-ios-star\" data-pack=\"ios\" data-tags=\"favorite, rate\"></li>\n      <li class=\"ion-ios-star-half\" data-pack=\"ios\" data-tags=\"favorite, rate\"></li>\n      <li class=\"ion-ios-star-outline\" data-pack=\"ios\" data-tags=\"favorite, rate\"></li>\n      <li class=\"ion-ios-heart\" data-pack=\"ios\" data-tags=\"love\"></li>\n      <li class=\"ion-ios-heart-outline\" data-pack=\"ios\" data-tags=\"love\"></li>\n      <li class=\"ion-ios-more\" data-pack=\"ios\" data-tags=\"menu\"></li>\n      <li class=\"ion-ios-more-outline\" data-pack=\"ios\" data-tags=\"menu\"></li>\n      <li class=\"ion-ios-home\" data-pack=\"ios\" data-tags=\"house\"></li>\n      <li class=\"ion-ios-home-outline\" data-pack=\"ios\" data-tags=\"house\"></li>\n      <li class=\"ion-ios-cloud\" data-pack=\"ios\" data-tags=\"storage, weather, whether\"></li>\n      <li class=\"ion-ios-cloud-outline\" data-pack=\"ios\" data-tags=\"storage, weather, whether\"></li>\n      <li class=\"ion-ios-cloud-upload\" data-pack=\"ios\" data-tags=\"storage\"></li>\n      <li class=\"ion-ios-cloud-upload-outline\" data-pack=\"ios\" data-tags=\"storage\"></li>\n      <li class=\"ion-ios-cloud-download\" data-pack=\"ios\" data-tags=\"storage\"></li>\n      <li class=\"ion-ios-cloud-download-outline\" data-pack=\"ios\" data-tags=\"storage\"></li>\n      <li class=\"ion-ios-upload\" data-pack=\"ios\" data-tags=\"share, import\"></li>\n      <li class=\"ion-ios-upload-outline\" data-pack=\"ios\" data-tags=\"share, import\"></li>\n      <li class=\"ion-ios-download\" data-pack=\"ios\" data-tags=\"save, export\"></li>\n      <li class=\"ion-ios-download-outline\" data-pack=\"ios\" data-tags=\"save, export\"></li>\n      <li class=\"ion-ios-refresh\" data-pack=\"ios\" data-tags=\"reload, renew, reset\"></li>\n      <li class=\"ion-ios-refresh-outline\" data-pack=\"ios\" data-tags=\"reload, renew, reset\"></li>\n      <li class=\"ion-ios-refresh-empty\" data-pack=\"ios\" data-tags=\"reload, renew\"></li>\n      <li class=\"ion-ios-reload\" data-pack=\"ios\" data-tags=\"renew, reset\"></li>\n      <li class=\"ion-ios-loop-strong\" data-pack=\"ios\" data-tags=\"reload, renew, reset\"></li>\n      <li class=\"ion-ios-loop\" data-pack=\"ios\" data-tags=\"reload, renew, reset\"></li>\n      <li class=\"ion-ios-bookmarks\" data-pack=\"ios\" data-tags=\"favorite\"></li>\n      <li class=\"ion-ios-bookmarks-outline\" data-pack=\"ios\" data-tags=\"favorite\"></li>\n      <li class=\"ion-ios-book\" data-pack=\"ios\" data-tags=\"favorite, read, literature\"></li>\n      <li class=\"ion-ios-book-outline\" data-pack=\"ios\" data-tags=\"favorite, read, literature\"></li>\n      <li class=\"ion-ios-flag\" data-pack=\"ios\" data-tags=\"marker, favorite\"></li>\n      <li class=\"ion-ios-flag-outline\" data-pack=\"ios\" data-tags=\"marker, favorite\"></li>\n      <li class=\"ion-ios-glasses\" data-pack=\"ios\" data-tags=\"steve, reading, look, see\"></li>\n      <li class=\"ion-ios-glasses-outline\" data-pack=\"ios\" data-tags=\"steve, reading, look, see\"></li>\n      <li class=\"ion-ios-browsers\" data-pack=\"ios\" data-tags=\"square\"></li>\n      <li class=\"ion-ios-browsers-outline\" data-pack=\"ios\" data-tags=\"square\"></li>\n      <li class=\"ion-ios-at\" data-pack=\"ios\" data-tags=\"@\"></li>\n      <li class=\"ion-ios-at-outline\" data-pack=\"ios\" data-tags=\"@\"></li>\n      <li class=\"ion-ios-pricetag\" data-pack=\"ios\" data-tags=\"shopping, money, items, commerce, $\"></li>\n      <li class=\"ion-ios-pricetag-outline\" data-pack=\"ios\" data-tags=\"shopping, money, items, commerce, $\"></li>\n      <li class=\"ion-ios-pricetags\" data-pack=\"ios\" data-tags=\"shopping, money, items, commerce, $\"></li>\n      <li class=\"ion-ios-pricetags-outline\" data-pack=\"ios\" data-tags=\"shopping, money, items, commerce, $\"></li>\n      <li class=\"ion-ios-cart\" data-pack=\"ios\" data-tags=\"shopping, money, items, commerce, $\"></li>\n      <li class=\"ion-ios-cart-outline\" data-pack=\"ios\" data-tags=\"shopping, money, items, commerce, $\"></li>\n      <li class=\"ion-ios-chatboxes\" data-pack=\"ios\" data-tags=\"talk\"></li>\n      <li class=\"ion-ios-chatboxes-outline\" data-pack=\"ios\" data-tags=\"talk\"></li>\n      <li class=\"ion-ios-chatbubble\" data-pack=\"ios\" data-tags=\"talk\"></li>\n      <li class=\"ion-ios-chatbubble-outline\" data-pack=\"ios\" data-tags=\"talk\"></li>\n      <li class=\"ion-ios-cog\" data-pack=\"ios\" data-tags=\"settings, gear, options\"></li>\n      <li class=\"ion-ios-cog-outline\" data-pack=\"ios\" data-tags=\"settings, gear, options\"></li>\n      <li class=\"ion-ios-gear\" data-pack=\"ios\" data-tags=\"cog, settings, options\"></li>\n      <li class=\"ion-ios-gear-outline\" data-pack=\"ios\" data-tags=\"cog, settings, options\"></li>\n      <li class=\"ion-ios-settings\" data-pack=\"ios\" data-tags=\"cog, settings, options\"></li>\n      <li class=\"ion-ios-settings-strong\" data-pack=\"ios\" data-tags=\"cog, settings, options\"></li>\n      <li class=\"ion-ios-toggle\" data-pack=\"ios\" data-tags=\"settings, options, switch\"></li>\n      <li class=\"ion-ios-toggle-outline\" data-pack=\"ios\" data-tags=\"settings, options, switch\"></li>\n      <li class=\"ion-ios-analytics\" data-pack=\"ios\" data-tags=\"metrics, track, data\"></li>\n      <li class=\"ion-ios-analytics-outline\" data-pack=\"ios\" data-tags=\"metrics, track, data\"></li>\n      <li class=\"ion-ios-pie\" data-pack=\"ios\" data-tags=\"cog, settings, options\"></li>\n      <li class=\"ion-ios-pie-outline\" data-pack=\"ios\" data-tags=\"cog, settings, options\"></li>\n      <li class=\"ion-ios-pulse\" data-pack=\"ios\" data-tags=\"live, hot, rate\"></li>\n      <li class=\"ion-ios-pulse-strong\" data-pack=\"ios\" data-tags=\"live, hot, rate\"></li>\n      <li class=\"ion-ios-filing\" data-pack=\"ios\" data-tags=\"archive\"></li>\n      <li class=\"ion-ios-filing-outline\" data-pack=\"ios\" data-tags=\"archive\"></li>\n      <li class=\"ion-ios-box\" data-pack=\"ios\" data-tags=\"archive\"></li>\n      <li class=\"ion-ios-box-outline\" data-pack=\"ios\" data-tags=\"archive\"></li>\n      <li class=\"ion-ios-compose\" data-pack=\"ios\" data-tags=\"write, type, create\"></li>\n      <li class=\"ion-ios-compose-outline\" data-pack=\"ios\" data-tags=\"write, type, create\"></li>\n      <li class=\"ion-ios-trash\" data-pack=\"ios\" data-tags=\"delete, remove, dispose, waste, basket, dump, kill\"></li>\n      <li class=\"ion-ios-trash-outline\" data-pack=\"ios\" data-tags=\"delete, remove, dispose, waste, basket, dump, kill\"></li>\n      <li class=\"ion-ios-copy\" data-pack=\"ios\" data-tags=\"duplicate, paper\"></li>\n      <li class=\"ion-ios-copy-outline\" data-pack=\"ios\" data-tags=\"duplicate, paper\"></li>\n      <li class=\"ion-ios-email\" data-pack=\"ios\" data-tags=\"snail, mail\"></li>\n      <li class=\"ion-ios-email-outline\" data-pack=\"ios\" data-tags=\"snail, mail\"></li>\n      <li class=\"ion-ios-undo\" data-pack=\"ios\" data-tags=\"reply\"></li>\n      <li class=\"ion-ios-undo-outline\" data-pack=\"ios\" data-tags=\"reply\"></li>\n      <li class=\"ion-ios-redo\" data-pack=\"ios\" data-tags=\"forward\"></li>\n      <li class=\"ion-ios-redo-outline\" data-pack=\"ios\" data-tags=\"forward\"></li>\n      <li class=\"ion-ios-paperplane\" data-pack=\"ios\" data-tags=\"send\"></li>\n      <li class=\"ion-ios-paperplane-outline\" data-pack=\"ios\" data-tags=\"send\"></li>\n      <li class=\"ion-ios-folder\" data-pack=\"ios\" data-tags=\"file\"></li>\n      <li class=\"ion-ios-folder-outline\" data-pack=\"ios\" data-tags=\"file\"></li>\n      <li class=\"ion-ios-paper\" data-pack=\"ios\" data-tags=\"feed, paper\"></li>\n      <li class=\"ion-ios-paper-outline\" data-pack=\"ios\" data-tags=\"feed, paper\"></li>\n      <li class=\"ion-ios-list\" data-pack=\"ios\" data-tags=\"todo, feed, paper\"></li>\n      <li class=\"ion-ios-list-outline\" data-pack=\"ios\" data-tags=\"todo, feed, paper\"></li>\n      <li class=\"ion-ios-world\" data-pack=\"ios\" data-tags=\"globe, earth\"></li>\n      <li class=\"ion-ios-world-outline\" data-pack=\"ios\" data-tags=\"globe, earth\"></li>\n      <li class=\"ion-ios-alarm\" data-pack=\"ios\" data-tags=\"wake, ring\"></li>\n      <li class=\"ion-ios-alarm-outline\" data-pack=\"ios\" data-tags=\"wake, ring\"></li>\n      <li class=\"ion-ios-speedometer\" data-pack=\"ios\" data-tags=\"speed, drive, level\"></li>\n      <li class=\"ion-ios-speedometer-outline\" data-pack=\"ios\" data-tags=\"speed, drive, level\"></li>\n      <li class=\"ion-ios-stopwatch\" data-pack=\"ios\" data-tags=\"time, speed\"></li>\n      <li class=\"ion-ios-stopwatch-outline\" data-pack=\"ios\" data-tags=\"time, speed\"></li>\n      <li class=\"ion-ios-timer\" data-pack=\"ios\" data-tags=\"cooking, alarm, buzz\"></li>\n      <li class=\"ion-ios-timer-outline\" data-pack=\"ios\" data-tags=\"cooking, alarm, buzz\"></li>\n      <li class=\"ion-ios-clock\" data-pack=\"ios\" data-tags=\"time, date, hours, minutes, seconds, watch\"></li>\n      <li class=\"ion-ios-clock-outline\" data-pack=\"ios\" data-tags=\"time, date, hours, minutes, seconds, watch\"></li>\n      <li class=\"ion-ios-time\" data-pack=\"ios\" data-tags=\"clock, watch, hour, minute, second\"></li>\n      <li class=\"ion-ios-time-outline\" data-pack=\"ios\" data-tags=\"clock, watch, hour, minute, second\"></li>\n      <li class=\"ion-ios-calendar\" data-pack=\"ios\" data-tags=\"date, time, month, year\"></li>\n      <li class=\"ion-ios-calendar-outline\" data-pack=\"ios\" data-tags=\"date, time, month, year\"></li>\n      <li class=\"ion-ios-photos\" data-pack=\"ios\" data-tags=\"images, stills, square\"></li>\n      <li class=\"ion-ios-photos-outline\" data-pack=\"ios\" data-tags=\"images, stills, square\"></li>\n      <li class=\"ion-ios-albums\" data-pack=\"ios\" data-tags=\"square, boxes, slides\"></li>\n      <li class=\"ion-ios-albums-outline\" data-pack=\"ios\" data-tags=\"square, boxes, slides\"></li>\n      <li class=\"ion-ios-camera\" data-pack=\"ios\" data-tags=\"picture\"></li>\n      <li class=\"ion-ios-camera-outline\" data-pack=\"ios\" data-tags=\"picture\"></li>\n      <li class=\"ion-ios-reverse-camera\" data-pack=\"ios\" data-tags=\"picture\"></li>\n      <li class=\"ion-ios-reverse-camera-outline\" data-pack=\"ios\" data-tags=\"picture\"></li>\n      <li class=\"ion-ios-eye\" data-pack=\"ios\" data-tags=\"view, see, exposed, look\"></li>\n      <li class=\"ion-ios-eye-outline\" data-pack=\"ios\" data-tags=\"view, see, exposed, look\"></li>\n      <li class=\"ion-ios-bolt\" data-pack=\"ios\" data-tags=\"flash, lightning\"></li>\n      <li class=\"ion-ios-bolt-outline\" data-pack=\"ios\" data-tags=\"flash, lightning\"></li>\n      <li class=\"ion-ios-color-wand\" data-pack=\"ios\" data-tags=\"camera, picture, edit, magic\"></li>\n      <li class=\"ion-ios-color-wand-outline\" data-pack=\"ios\" data-tags=\"camera, picture, edit, magic\"></li>\n      <li class=\"ion-ios-color-filter\" data-pack=\"ios\" data-tags=\"camera, picture\"></li>\n      <li class=\"ion-ios-color-filter-outline\" data-pack=\"ios\" data-tags=\"camera, picture\"></li>\n      <li class=\"ion-ios-grid-view\" data-pack=\"ios\" data-tags=\"camera, picture\"></li>\n      <li class=\"ion-ios-grid-view-outline\" data-pack=\"ios\" data-tags=\"camera, picture\"></li>\n      <li class=\"ion-ios-crop-strong\" data-pack=\"ios\" data-tags=\"camera, picture, edit\"></li>\n      <li class=\"ion-ios-crop\" data-pack=\"ios\" data-tags=\"camera, picture, edit\"></li>\n      <li class=\"ion-ios-barcode\" data-pack=\"ios\" data-tags=\"reader, camera\"></li>\n      <li class=\"ion-ios-barcode-outline\" data-pack=\"ios\" data-tags=\"reader, camera\"></li>\n      <li class=\"ion-ios-briefcase\" data-pack=\"ios\" data-tags=\"organize, folder\"></li>\n      <li class=\"ion-ios-briefcase-outline\" data-pack=\"ios\" data-tags=\"organize, folder\"></li>\n      <li class=\"ion-ios-medkit\" data-pack=\"ios\" data-tags=\"health, case, first aid, sick, disease\"></li>\n      <li class=\"ion-ios-medkit-outline\" data-pack=\"ios\" data-tags=\"health, case, first aid, sick, disease\"></li>\n      <li class=\"ion-ios-medical\" data-pack=\"ios\" data-tags=\"health, case, first aid, sick, disease\"></li>\n      <li class=\"ion-ios-medical-outline\" data-pack=\"ios\" data-tags=\"health, case, first aid, sick, disease\"></li>\n      <li class=\"ion-ios-infinite\" data-pack=\"ios\" data-tags=\"forever, loop\"></li>\n      <li class=\"ion-ios-infinite-outline\" data-pack=\"ios\" data-tags=\"forever, loop\"></li>\n      <li class=\"ion-ios-calculator\" data-pack=\"ios\" data-tags=\"math, arithmatic\"></li>\n      <li class=\"ion-ios-calculator-outline\" data-pack=\"ios\" data-tags=\"math, arithmatic\"></li>\n      <li class=\"ion-ios-keypad\" data-pack=\"ios\" data-tags=\"type, grid, circle\"></li>\n      <li class=\"ion-ios-keypad-outline\" data-pack=\"ios\" data-tags=\"type, grid, circle\"></li>\n      <li class=\"ion-ios-telephone\" data-pack=\"ios\" data-tags=\"oldschool, call\"></li>\n      <li class=\"ion-ios-telephone-outline\" data-pack=\"ios\" data-tags=\"oldschool, call\"></li>\n      <li class=\"ion-ios-drag\" data-pack=\"ios\" data-tags=\"reorder, move, drag\"></li>\n      <li class=\"ion-ios-location\" data-pack=\"ios\" data-tags=\"navigation, map, gps, pin\"></li>\n      <li class=\"ion-ios-location-outline\" data-pack=\"ios\" data-tags=\"navigation, map, gps, pin\"></li>\n      <li class=\"ion-ios-navigate\" data-pack=\"ios\" data-tags=\"location, map, gps, pin\"></li>\n      <li class=\"ion-ios-navigate-outline\" data-pack=\"ios\" data-tags=\"location, map, gps, pin\"></li>\n      <li class=\"ion-ios-locked\" data-pack=\"ios\" data-tags=\"security, padlock, safe\"></li>\n      <li class=\"ion-ios-locked-outline\" data-pack=\"ios\" data-tags=\"security, padlock, safe\"></li>\n      <li class=\"ion-ios-unlocked\" data-pack=\"ios\" data-tags=\"security, padlock, safe\"></li>\n      <li class=\"ion-ios-unlocked-outline\" data-pack=\"ios\" data-tags=\"security, padlock, safe\"></li>\n      <li class=\"ion-ios-monitor\" data-pack=\"ios\" data-tags=\"thunderbolt, display, screen\"></li>\n      <li class=\"ion-ios-monitor-outline\" data-pack=\"ios\" data-tags=\"thunderbolt, display, screen\"></li>\n      <li class=\"ion-ios-printer\" data-pack=\"ios\" data-tags=\"paper\"></li>\n      <li class=\"ion-ios-printer-outline\" data-pack=\"ios\" data-tags=\"paper\"></li>\n      <li class=\"ion-ios-game-controller-a\" data-pack=\"ios\" data-tags=\"gaming, nintendo, play\"></li>\n      <li class=\"ion-ios-game-controller-a-outline\" data-pack=\"ios\" data-tags=\"gaming, nintendo, play\"></li>\n      <li class=\"ion-ios-game-controller-b\" data-pack=\"ios\" data-tags=\"gaming, nintendo, play\"></li>\n      <li class=\"ion-ios-game-controller-b-outline\" data-pack=\"ios\" data-tags=\"gaming, nintendo, play\"></li>\n      <li class=\"ion-ios-americanfootball\" data-pack=\"ios\" data-tags=\"nfl, games, sports, fun, play\"></li>\n      <li class=\"ion-ios-americanfootball-outline\" data-pack=\"ios\" data-tags=\"nfl, games, sports, fun, play\"></li>\n      <li class=\"ion-ios-baseball\" data-pack=\"ios\" data-tags=\"mlb, games, sports, fun, play\"></li>\n      <li class=\"ion-ios-baseball-outline\" data-pack=\"ios\" data-tags=\"mlb, games, sports, fun, play\"></li>\n      <li class=\"ion-ios-basketball\" data-pack=\"ios\" data-tags=\"nba, games, sports, fun, play\"></li>\n      <li class=\"ion-ios-basketball-outline\" data-pack=\"ios\" data-tags=\"nba, games, sports, fun, play\"></li>\n      <li class=\"ion-ios-tennisball\" data-pack=\"ios\" data-tags=\"games, sports, fun, play\"></li>\n      <li class=\"ion-ios-tennisball-outline\" data-pack=\"ios\" data-tags=\"games, sports, fun, play\"></li>\n      <li class=\"ion-ios-football\" data-pack=\"ios\" data-tags=\"mls, soccer, games, sports, fun, play\"></li>\n      <li class=\"ion-ios-football-outline\" data-pack=\"ios\" data-tags=\"mls, soccer, games, sports, fun, play\"></li>\n      <li class=\"ion-ios-body\" data-pack=\"ios\" data-tags=\"person, users, staff, head, human\"></li>\n      <li class=\"ion-ios-body-outline\" data-pack=\"ios\" data-tags=\"person, users, staff, head, human\"></li>\n      <li class=\"ion-ios-person\" data-pack=\"ios\" data-tags=\"users, staff, head, human\"></li>\n      <li class=\"ion-ios-person-outline\" data-pack=\"ios\" data-tags=\"users, staff, head, human\"></li>\n      <li class=\"ion-ios-personadd\" data-pack=\"ios\" data-tags=\"users, staff, head, human, new, invite\"></li>\n      <li class=\"ion-ios-personadd-outline\" data-pack=\"ios\" data-tags=\"users, staff, head, human, new, invite\"></li>\n      <li class=\"ion-ios-people\" data-pack=\"ios\" data-tags=\"stalker, person, users, head, human\"></li>\n      <li class=\"ion-ios-people-outline\" data-pack=\"ios\" data-tags=\"stalker, person, users, head, human\"></li>\n      <li class=\"ion-ios-musical-notes\" data-pack=\"ios\" data-tags=\"sound, noise, listening, play\"></li>\n      <li class=\"ion-ios-musical-note\" data-pack=\"ios\" data-tags=\"sound, noise, listening, play\"></li>\n      <li class=\"ion-ios-bell\" data-pack=\"ios\" data-tags=\"right, noise, alarm, sound, music\"></li>\n      <li class=\"ion-ios-bell-outline\" data-pack=\"ios\" data-tags=\"right, noise, alarm, sound, music\"></li>\n      <li class=\"ion-ios-mic\" data-pack=\"ios\" data-tags=\"sound, noise, speaker, talk\"></li>\n      <li class=\"ion-ios-mic-outline\" data-pack=\"ios\" data-tags=\"sound, noise, speaker, talk\"></li>\n      <li class=\"ion-ios-mic-off\" data-pack=\"ios\" data-tags=\"sound, noise, speaker, talk\"></li>\n      <li class=\"ion-ios-volume-high\" data-pack=\"ios\" data-tags=\"sound, noise, listen, music\"></li>\n      <li class=\"ion-ios-volume-low\" data-pack=\"ios\" data-tags=\"sound, noise, listen, music\"></li>\n      <li class=\"ion-ios-play\" data-pack=\"ios\" data-tags=\"music, watch, arrow, right\"></li>\n      <li class=\"ion-ios-play-outline\" data-pack=\"ios\" data-tags=\"music, watch, arrow, right\"></li>\n      <li class=\"ion-ios-pause\" data-pack=\"ios\" data-tags=\"music, break, hold, freeze\"></li>\n      <li class=\"ion-ios-pause-outline\" data-pack=\"ios\" data-tags=\"music, break, hold, freeze\"></li>\n      <li class=\"ion-ios-recording\" data-pack=\"ios\" data-tags=\"film, tape, voicemail\"></li>\n      <li class=\"ion-ios-recording-outline\" data-pack=\"ios\" data-tags=\"film, tape, voicemail\"></li>\n      <li class=\"ion-ios-fastforward\" data-pack=\"ios\" data-tags=\"next, skip, jump\"></li>\n      <li class=\"ion-ios-fastforward-outline\" data-pack=\"ios\" data-tags=\"next, skip, jump\"></li>\n      <li class=\"ion-ios-rewind\" data-pack=\"ios\" data-tags=\"music, previous, back\"></li>\n      <li class=\"ion-ios-rewind-outline\" data-pack=\"ios\" data-tags=\"music, previous, back\"></li>\n      <li class=\"ion-ios-skipbackward\" data-pack=\"ios\" data-tags=\"music, previous\"></li>\n      <li class=\"ion-ios-skipbackward-outline\" data-pack=\"ios\" data-tags=\"music, previous\"></li>\n      <li class=\"ion-ios-skipforward\" data-pack=\"ios\" data-tags=\"music, next\"></li>\n      <li class=\"ion-ios-skipforward-outline\" data-pack=\"ios\" data-tags=\"music, next\"></li>\n      <li class=\"ion-ios-shuffle-strong\" data-pack=\"ios\" data-tags=\"music, next\"></li>\n      <li class=\"ion-ios-shuffle\" data-pack=\"ios\" data-tags=\"music, next\"></li>\n      <li class=\"ion-ios-videocam\" data-pack=\"ios\" data-tags=\"film, movie, camera\"></li>\n      <li class=\"ion-ios-videocam-outline\" data-pack=\"ios\" data-tags=\"film, movie, camera\"></li>\n      <li class=\"ion-ios-film\" data-pack=\"ios\" data-tags=\"film, movie, camera\"></li>\n      <li class=\"ion-ios-film-outline\" data-pack=\"ios\" data-tags=\"film, movie, camera\"></li>\n      <li class=\"ion-ios-flask\" data-pack=\"ios\" data-tags=\"options, mixer, liquid\"></li>\n      <li class=\"ion-ios-flask-outline\" data-pack=\"ios\" data-tags=\"options, mixer, liquid\"></li>\n      <li class=\"ion-ios-lightbulb\" data-pack=\"ios\" data-tags=\"idea, new, bright, aha!\"></li>\n      <li class=\"ion-ios-lightbulb-outline\" data-pack=\"ios\" data-tags=\"idea, new, bright, aha!\"></li>\n      <li class=\"ion-ios-wineglass\" data-pack=\"ios\" data-tags=\"alcohol, drink, food, glass, drunk, cheers\"></li>\n      <li class=\"ion-ios-wineglass-outline\" data-pack=\"ios\" data-tags=\"alcohol, drink, food, glass, drunk, cheers\"></li>\n      <li class=\"ion-ios-pint\" data-pack=\"ios\" data-tags=\"alcohol, drink, food, beer, drunk, cheers\"></li>\n      <li class=\"ion-ios-pint-outline\" data-pack=\"ios\" data-tags=\"alcohol, drink, food, beer, drunk, cheers\"></li>\n      <li class=\"ion-ios-nutrition\" data-pack=\"ios\" data-tags=\"health, carrot, food\"></li>\n      <li class=\"ion-ios-nutrition-outline\" data-pack=\"ios\" data-tags=\"health, carrot, food\"></li>\n      <li class=\"ion-ios-flower\" data-pack=\"ios\" data-tags=\"nature, spring, leaf, garden\"></li>\n      <li class=\"ion-ios-flower-outline\" data-pack=\"ios\" data-tags=\"nature, spring, leaf, garden\"></li>\n      <li class=\"ion-ios-rose\" data-pack=\"ios\" data-tags=\"nature, spring, leaf, garden, flower\"></li>\n      <li class=\"ion-ios-rose-outline\" data-pack=\"ios\" data-tags=\"nature, spring, leaf, garden, flower\"></li>\n      <li class=\"ion-ios-paw\" data-pack=\"ios\" data-tags=\"nature, animal, pet, outdoor, track\"></li>\n      <li class=\"ion-ios-paw-outline\" data-pack=\"ios\" data-tags=\"nature, animal, pet, outdoor, track\"></li>\n      <li class=\"ion-ios-flame\" data-pack=\"ios\" data-tags=\"fire, hot, burn\"></li>\n      <li class=\"ion-ios-flame-outline\" data-pack=\"ios\" data-tags=\"fire, hot, burn\"></li>\n      <li class=\"ion-ios-sunny\" data-pack=\"ios\" data-tags=\"weather, whether, light, sky\"></li>\n      <li class=\"ion-ios-sunny-outline\" data-pack=\"ios\" data-tags=\"weather, whether, light, sky\"></li>\n      <li class=\"ion-ios-partlysunny\" data-pack=\"ios\" data-tags=\"light, weather, whether, cloudy\"></li>\n      <li class=\"ion-ios-partlysunny-outline\" data-pack=\"ios\" data-tags=\"light, weather, whether, cloudy\"></li>\n      <li class=\"ion-ios-cloudy\" data-pack=\"ios\" data-tags=\"weather, whether, overcast\"></li>\n      <li class=\"ion-ios-cloudy-outline\" data-pack=\"ios\" data-tags=\"weather, whether, overcast\"></li>\n      <li class=\"ion-ios-rainy\" data-pack=\"ios\" data-tags=\"whether, weather, water, cloud\"></li>\n      <li class=\"ion-ios-rainy-outline\" data-pack=\"ios\" data-tags=\"whether, weather, water, cloud\"></li>\n      <li class=\"ion-ios-thunderstorm\" data-pack=\"ios\" data-tags=\"whether, weather, sky, lightning, rain, cloudy, overcast, storm\"></li>\n      <li class=\"ion-ios-thunderstorm-outline\" data-pack=\"ios\" data-tags=\"whether, weather, sky, lightning, rain, cloudy, overcast, storm\"></li>\n      <li class=\"ion-ios-snowy\" data-pack=\"ios\" data-tags=\"cold, weather, whether, overcast\"></li>\n      <li class=\"ion-ios-moon\" data-pack=\"ios\" data-tags=\"sky, night, dark\"></li>\n      <li class=\"ion-ios-moon-outline\" data-pack=\"ios\" data-tags=\"sky, night, dark\"></li>\n      <li class=\"ion-ios-cloudy-night\" data-pack=\"ios\" data-tags=\"weather, whether, overcast\"></li>\n      <li class=\"ion-ios-cloudy-night-outline\" data-pack=\"ios\" data-tags=\"weather, whether, overcast\"></li>\n\n\n      <li class=\"ion-android-arrow-up\" data-pack=\"android\" data-tags=\"chevron, navigation\"></li>\n      <li class=\"ion-android-arrow-forward\" data-pack=\"android\" data-tags=\"chevron, navigation\"></li>\n      <li class=\"ion-android-arrow-down\" data-pack=\"android\" data-tags=\"chevron, navigation\"></li>\n      <li class=\"ion-android-arrow-back\" data-pack=\"android\" data-tags=\"chevron, navigation\"></li>\n      <li class=\"ion-android-arrow-dropup\" data-pack=\"android\" data-tags=\"chevron, navigation\"></li>\n      <li class=\"ion-android-arrow-dropup-circle\" data-pack=\"android\" data-tags=\"chevron, navigation\"></li>\n      <li class=\"ion-android-arrow-dropright\" data-pack=\"android\" data-tags=\"chevron, navigation\"></li>\n      <li class=\"ion-android-arrow-dropright-circle\" data-pack=\"android\" data-tags=\"chevron, navigation\"></li>\n      <li class=\"ion-android-arrow-dropdown\" data-pack=\"android\" data-tags=\"chevron, navigation\"></li>\n      <li class=\"ion-android-arrow-dropdown-circle\" data-pack=\"android\" data-tags=\"chevron, navigation\"></li>\n      <li class=\"ion-android-arrow-dropleft\" data-pack=\"android\" data-tags=\"chevron, navigation\"></li>\n      <li class=\"ion-android-arrow-dropleft-circle\" data-pack=\"android\" data-tags=\"chevron, navigation\"></li>\n      <li class=\"ion-android-add\" data-pack=\"android\" data-tags=\"plus, include, invite\"></li>\n      <li class=\"ion-android-add-circle\" data-pack=\"android\" data-tags=\"plus, include, invite\"></li>\n      <li class=\"ion-android-remove\" data-pack=\"android\" data-tags=\"minus, subtract, delete\"></li>\n      <li class=\"ion-android-remove-circle\" data-pack=\"android\" data-tags=\"minus, subtract, delete\"></li>\n      <li class=\"ion-android-close\" data-pack=\"android\" data-tags=\"delete, remove\"></li>\n      <li class=\"ion-android-cancel\" data-pack=\"android\" data-tags=\"delete, remove\"></li>\n      <li class=\"ion-android-radio-button-off\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-radio-button-on\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-checkmark-circle\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-checkbox-outline-blank\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-checkbox-outline\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-checkbox-blank\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-checkbox\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-done\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-done-all\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-menu\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-more-horizontal\" data-pack=\"android\" data-tags=\"options, menu\"></li>\n      <li class=\"ion-android-more-vertical\" data-pack=\"android\" data-tags=\"options, menu\"></li>\n      <li class=\"ion-android-refresh\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-sync\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-wifi\" data-pack=\"android\" data-tags=\"internet,connection, bars\"></li>\n      <li class=\"ion-android-call\" data-pack=\"android\" data-tags=\"telephone\"></li>\n      <li class=\"ion-android-apps\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-settings\" data-pack=\"android\" data-tags=\"options\"></li>\n      <li class=\"ion-android-options\" data-pack=\"android\" data-tags=\"settings, mixer\"></li>\n      <li class=\"ion-android-funnel\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-search\" data-pack=\"android\" data-tags=\"magnifying glass\"></li>\n      <li class=\"ion-android-home\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-cloud-outline\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-cloud\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-download\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-upload\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-cloud-done\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-cloud-circle\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-favorite-outline\" data-pack=\"android\" data-tags=\"favorite, like, rate\"></li>\n      <li class=\"ion-android-favorite\" data-pack=\"android\" data-tags=\"favorite, like, rate\"></li>\n      <li class=\"ion-android-star-outline\" data-pack=\"android\" data-tags=\"favorite, like, rate\"></li>\n      <li class=\"ion-android-star-half\" data-pack=\"android\" data-tags=\"favorite, like, rate\"></li>\n      <li class=\"ion-android-star\" data-pack=\"android\" data-tags=\"favorite, like, rate\"></li>\n      <li class=\"ion-android-calendar\" data-pack=\"android\" data-tags=\"clock\"></li>\n      <li class=\"ion-android-alarm-clock\" data-pack=\"android\" data-tags=\"clock\"></li>\n      <li class=\"ion-android-time\" data-pack=\"android\" data-tags=\"clock\"></li>\n      <li class=\"ion-android-stopwatch\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-watch\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-locate\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-navigate\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-pin\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-compass\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-map\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-walk\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-bicycle\" data-pack=\"android\" data-tags=\"move, bike, transportation, maps\"></li>\n      <li class=\"ion-android-car\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-bus\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-subway\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-train\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-boat\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-plane\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-restaurant\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-bar\" data-pack=\"android\" data-tags=\"wine, drink, food, dinner\"></li>\n      <li class=\"ion-android-cart\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-camera\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-image\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-film\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-color-palette\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-create\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-mail\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-drafts\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-send\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-archive\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-delete\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-attach\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-share\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-share-alt\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-bookmark\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-document\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-clipboard\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-list\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-folder-open\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-folder\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-print\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-open\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-exit\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-contract\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-expand\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-globe\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-chat\" data-pack=\"android\" data-tags=\"talk, text\"></li>\n      <li class=\"ion-android-textsms\" data-pack=\"android\" data-tags=\"talk, text\"></li>\n      <li class=\"ion-android-hangout\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-happy\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-sad\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-person\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-people\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-person-add\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-contact\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-contacts\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-playstore\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-lock\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-unlock\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-microphone\" data-pack=\"android\" data-tags=\"recorder, speak, noise, music, sound\"></li>\n      <li class=\"ion-android-microphone-off\" data-pack=\"android\" data-tags=\"recorder, speak, noise, music, sound, mute\"></li>\n      <li class=\"ion-android-notifications-none\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-notifications\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-notifications-off\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-volume-mute\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-volume-down\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-volume-up\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-volume-off\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-hand\" data-pack=\"android\" data-tags=\"stop\"></li>\n      <li class=\"ion-android-desktop\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-laptop\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-phone-portrait\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-phone-landscape\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-bulb\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-sunny\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-alert\" data-pack=\"android\" data-tags=\"\"></li>\n      <li class=\"ion-android-warning\" data-pack=\"android\" data-tags=\"\"></li>\n\n\n      <li class=\"ion-social-twitter\" data-pack=\"social\" data-tags=\"follow, post, share\"></li>\n      <li class=\"ion-social-twitter-outline\" data-pack=\"social\" data-tags=\"follow, post, share\"></li>\n      <li class=\"ion-social-facebook\" data-pack=\"social\" data-tags=\"like, post, share\"></li>\n      <li class=\"ion-social-facebook-outline\" data-pack=\"social\" data-tags=\"like, post, share\"></li>\n      <li class=\"ion-social-googleplus\" data-pack=\"social\" data-tags=\"follow, post, share\"></li>\n      <li class=\"ion-social-googleplus-outline\" data-pack=\"social\" data-tags=\"follow, post, share\"></li>\n      <li class=\"ion-social-google\" data-pack=\"social\" data-tags=\"follow, post, share\"></li>\n      <li class=\"ion-social-google-outline\" data-pack=\"social\" data-tags=\"follow, post, share\"></li>\n      <li class=\"ion-social-dribbble\" data-pack=\"social\" data-tags=\"design\"></li>\n      <li class=\"ion-social-dribbble-outline\" data-pack=\"social\" data-tags=\"design\"></li>\n      <li class=\"ion-social-octocat\" data-pack=\"social\" data-tags=\"code, github, fork, merge, clone\"></li>\n      <li class=\"ion-social-github\" data-pack=\"social\" data-tags=\"code, fork, merge, clone\"></li>\n      <li class=\"ion-social-github-outline\" data-pack=\"social\" data-tags=\"code, fork, merge, clone\"></li>\n      <li class=\"ion-social-instagram\" data-pack=\"social\" data-tags=\"photo, camera, facebook\"></li>\n      <li class=\"ion-social-instagram-outline\" data-pack=\"social\" data-tags=\"photo, camera, facebook\"></li>\n      <li class=\"ion-social-whatsapp\" data-pack=\"social\" data-tags=\"text, sharing, private, facebook\"></li>\n      <li class=\"ion-social-whatsapp-outline\" data-pack=\"social\" data-tags=\"text, sharing, private, facebook\"></li>\n      <li class=\"ion-social-snapchat\" data-pack=\"social\" data-tags=\"photos, app\"></li>\n      <li class=\"ion-social-snapchat-outline\" data-pack=\"social\" data-tags=\"photos, app\"></li>\n      <li class=\"ion-social-foursquare\" data-pack=\"social\" data-tags=\"checkin\"></li>\n      <li class=\"ion-social-foursquare-outline\" data-pack=\"social\" data-tags=\"checkin\"></li>\n      <li class=\"ion-social-pinterest\" data-pack=\"social\" data-tags=\"social\"></li>\n      <li class=\"ion-social-pinterest-outline\" data-pack=\"social\" data-tags=\"social\"></li>\n      <li class=\"ion-social-rss\" data-pack=\"social\" data-tags=\"blogging\"></li>\n      <li class=\"ion-social-rss-outline\" data-pack=\"social\" data-tags=\"blogging\"></li>\n      <li class=\"ion-social-tumblr\" data-pack=\"social\" data-tags=\"blogging\"></li>\n      <li class=\"ion-social-tumblr-outline\" data-pack=\"social\" data-tags=\"blogging\"></li>\n      <li class=\"ion-social-wordpress\" data-pack=\"social\" data-tags=\"blogging\"></li>\n      <li class=\"ion-social-wordpress-outline\" data-pack=\"social\" data-tags=\"blogging\"></li>\n      <li class=\"ion-social-reddit\" data-pack=\"social\" data-tags=\"news, upvotes, karma\"></li>\n      <li class=\"ion-social-reddit-outline\" data-pack=\"social\" data-tags=\"news, upvotes, karma\"></li>\n      <li class=\"ion-social-hackernews\" data-pack=\"social\" data-tags=\"discuss, upvotes, karma\"></li>\n      <li class=\"ion-social-hackernews-outline\" data-pack=\"social\" data-tags=\"discuss, upvotes, karma\"></li>\n      <li class=\"ion-social-designernews\" data-pack=\"social\" data-tags=\"design, post\"></li>\n      <li class=\"ion-social-designernews-outline\" data-pack=\"social\" data-tags=\"design, post\"></li>\n      <li class=\"ion-social-yahoo\" data-pack=\"social\" data-tags=\"\"></li>\n      <li class=\"ion-social-yahoo-outline\" data-pack=\"social\" data-tags=\"\"></li>\n      <li class=\"ion-social-buffer\" data-pack=\"social\" data-tags=\"share\"></li>\n      <li class=\"ion-social-buffer-outline\" data-pack=\"social\" data-tags=\"share\"></li>\n      <li class=\"ion-social-skype\" data-pack=\"social\" data-tags=\"call\"></li>\n      <li class=\"ion-social-skype-outline\" data-pack=\"social\" data-tags=\"call\"></li>\n      <li class=\"ion-social-linkedin\" data-pack=\"social\" data-tags=\"connect\"></li>\n      <li class=\"ion-social-linkedin-outline\" data-pack=\"social\" data-tags=\"connect\"></li>\n      <li class=\"ion-social-vimeo\" data-pack=\"social\" data-tags=\"video, watch, share, view\"></li>\n      <li class=\"ion-social-vimeo-outline\" data-pack=\"social\" data-tags=\"video, watch, share, view\"></li>\n      <li class=\"ion-social-twitch\" data-pack=\"social\" data-tags=\"gaming, games, live, streaming, video, watch, share, view\"></li>\n      <li class=\"ion-social-twitch-outline\" data-pack=\"social\" data-tags=\"gaming, games, live, streaming, video, watch, share, view\"></li>\n      <li class=\"ion-social-youtube\" data-pack=\"social\" data-tags=\"video, watch, share, view\"></li>\n      <li class=\"ion-social-youtube-outline\" data-pack=\"social\" data-tags=\"video, watch, share, view\"></li>\n      <li class=\"ion-social-dropbox\" data-pack=\"social\" data-tags=\"upload\"></li>\n      <li class=\"ion-social-dropbox-outline\" data-pack=\"social\" data-tags=\"upload\"></li>\n      <li class=\"ion-social-apple\" data-pack=\"social\" data-tags=\"mac, mobile\"></li>\n      <li class=\"ion-social-apple-outline\" data-pack=\"social\" data-tags=\"mac, mobile\"></li>\n      <li class=\"ion-social-android\" data-pack=\"social\" data-tags=\"mobile\"></li>\n      <li class=\"ion-social-android-outline\" data-pack=\"social\" data-tags=\"mobile\"></li>\n      <li class=\"ion-social-windows\" data-pack=\"social\" data-tags=\"pc\"></li>\n      <li class=\"ion-social-windows-outline\" data-pack=\"social\" data-tags=\"pc\"></li>\n      <li class=\"ion-social-html5\" data-pack=\"social\" data-tags=\"code, html, css, js, developer\"></li>\n      <li class=\"ion-social-html5-outline\" data-pack=\"social\" data-tags=\"code, html, css, js, developer\"></li>\n      <li class=\"ion-social-css3\" data-pack=\"social\" data-tags=\"code, html, css, js, developer\"></li>\n      <li class=\"ion-social-css3-outline\" data-pack=\"social\" data-tags=\"code, html, css, js, developer\"></li>\n      <li class=\"ion-social-javascript\" data-pack=\"social\" data-tags=\"code, html, css, js, developer\"></li>\n      <li class=\"ion-social-javascript-outline\" data-pack=\"social\" data-tags=\"code, html, css, js, developer\"></li>\n      <li class=\"ion-social-angular\" data-pack=\"social\" data-tags=\"code, mobile, js, angularjs, ionic\"></li>\n      <li class=\"ion-social-angular-outline\" data-pack=\"social\" data-tags=\"code, mobile, js, angularjs, ionic\"></li>\n      <li class=\"ion-social-nodejs\" data-pack=\"social\" data-tags=\"code, js, javascript, developer\"></li>\n      <li class=\"ion-social-sass\" data-pack=\"social\" data-tags=\"code, css\"></li>\n      <li class=\"ion-social-python\" data-pack=\"social\" data-tags=\"code\"></li>\n      <li class=\"ion-social-chrome\" data-pack=\"social\" data-tags=\"code, mobile, js, angularjs, ionic\"></li>\n      <li class=\"ion-social-chrome-outline\" data-pack=\"social\" data-tags=\"code, mobile, js, angularjs, ionic\"></li>\n      <li class=\"ion-social-codepen\" data-pack=\"social\" data-tags=\"testing, js, developer\"></li>\n      <li class=\"ion-social-codepen-outline\" data-pack=\"social\" data-tags=\"testing, js, developer\"></li>\n      <li class=\"ion-social-markdown\" data-pack=\"social\" data-tags=\"code, testing, text, developer\"></li>\n      <li class=\"ion-social-tux\" data-pack=\"social\" data-tags=\"code, linux, opensource\"></li>\n      <li class=\"ion-social-freebsd-devil\" data-pack=\"social\" data-tags=\"code, opensource, unix\"></li>\n      <li class=\"ion-social-usd\" data-pack=\"social\" data-tags=\"currency, trade, money, cash\"></li>\n      <li class=\"ion-social-usd-outline\" data-pack=\"social\" data-tags=\"currency, trade, money, cash\"></li>\n      <li class=\"ion-social-bitcoin\" data-pack=\"social\" data-tags=\"currency, trade, money\"></li>\n      <li class=\"ion-social-bitcoin-outline\" data-pack=\"social\" data-tags=\"currency, trade, money\"></li>\n      <li class=\"ion-social-yen\" data-pack=\"social\" data-tags=\"currency, trade, money, japanese\"></li>\n      <li class=\"ion-social-yen-outline\" data-pack=\"social\" data-tags=\"currency, trade, money, japanese\"></li>\n      <li class=\"ion-social-euro\" data-pack=\"social\" data-tags=\"currency, trade, money, europe\"></li>\n      <li class=\"ion-social-euro-outline\" data-pack=\"social\" data-tags=\"currency, trade, money, europe\"></li>\n    </ul>\n\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/Restrito/cad-servicos/cad-servicos.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Restrito/cad-servicos/cad-servicos.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#icons {\n  transition: opacity .2s ease-in-out; }\n"

/***/ }),

/***/ "./src/app/Restrito/cad-servicos/cad-servicos.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Restrito/cad-servicos/cad-servicos.component.ts ***!
  \*****************************************************************/
/*! exports provided: CadServicosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadServicosComponent", function() { return CadServicosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cad_servicos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cad-servicos.service */ "./src/app/Restrito/cad-servicos/cad-servicos.service.ts");
/* harmony import */ var _cad_servicosVM_cadastra_servico_view_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cad-servicosVM/cadastra-servico-view-model */ "./src/app/Restrito/cad-servicos/cad-servicosVM/cadastra-servico-view-model.ts");
/* harmony import */ var _cad_servicosVM_vantagem_view_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cad-servicosVM/vantagem-view-model */ "./src/app/Restrito/cad-servicos/cad-servicosVM/vantagem-view-model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CadServicosComponent = /** @class */ (function () {
    function CadServicosComponent(cadServicos, fb, toast, hostElement, domSanitizer, embedService) {
        this.cadServicos = cadServicos;
        this.fb = fb;
        this.toast = toast;
        this.hostElement = hostElement;
        this.domSanitizer = domSanitizer;
        this.embedService = embedService;
        this.ServicoVM = new _cad_servicosVM_cadastra_servico_view_model__WEBPACK_IMPORTED_MODULE_3__["CadastraServicoViewModel"]();
    }
    CadServicosComponent.prototype.ngOnInit = function () {
        this.frmCadServicos = this.fb.group({
            titulo: this.fb.control(''),
            urlvideo: this.fb.control(''),
            imagem: this.fb.control(''),
            descricaocurta: this.fb.control(''),
            descricaolonga: this.fb.control('')
        });
        this.getServicos();
    };
    CadServicosComponent.prototype.ngAfterContentInit = function () {
    };
    CadServicosComponent.prototype.postServicos = function (servico) {
        var _this = this;
        if (this.ServicoVM.id === null || this.ServicoVM.id === undefined) {
            this.ServicoVM.titulo = this.frmCadServicos.value.titulo;
            this.ServicoVM.descricaoCurta = this.frmCadServicos.value.descricaocurta;
            this.ServicoVM.descricaoLonga = this.frmCadServicos.value.descricaolonga;
            this.ServicoVM.urlVideo = this.frmCadServicos.value.urlvideo;
            this.cadServicos.postServicos(this.ServicoVM, this.fileupload).subscribe(function (res) {
                if (res.success === true) {
                    _this.toast.success("Servi\u00E7o cadastrado com sucesso.", 'Cadastro de serviços');
                    _this.ServicosVM.push(res.data);
                    _this.limpaformulario();
                }
                else {
                    _this.toast.error('Falha ao cadastrar serviço.', 'Cadastro de serviços');
                    console.log(res);
                }
            }, function (err) {
                _this.toast.error('Falha ao cadastrar serviço.', 'Cadastro de serviços');
                console.log(err);
            });
        }
        else {
            this.ServicoVM.titulo = this.frmCadServicos.value.titulo;
            this.ServicoVM.descricaoCurta = this.frmCadServicos.value.descricaocurta;
            this.ServicoVM.descricaoLonga = this.frmCadServicos.value.descricaolonga;
            this.ServicoVM.urlVideo = this.frmCadServicos.value.urlvideo;
            this.cadServicos.putServicos(this.ServicoVM, this.fileupload).subscribe(function (res) {
                if (res.success === true) {
                    _this.toast.success('Dados alterados c/ sucesso.', 'Alteração de registro');
                    var servicovmEdit = _this.ServicosVM.find(function (m) { return m.id === _this.ServicoVM.id; });
                    servicovmEdit = Object.assign(servicovmEdit, res.data);
                    _this.limpaformulario();
                }
                else {
                    _this.toast.error('Falha na alteração do registro.', 'Alteração de registro');
                    console.log(res);
                }
            }, function (err) {
                _this.toast.error('Falha do servidor na alteração do registro.', 'Alteração de registro');
                console.log(err);
            });
        }
    };
    CadServicosComponent.prototype.editaServico = function (cadservicovm) {
        this.ServicoVM = cadservicovm;
        this.frmCadServicos.get('titulo').setValue(cadservicovm.titulo);
        this.frmCadServicos.get('urlvideo').setValue(cadservicovm.urlVideo);
        this.frmCadServicos.get('descricaocurta').setValue(cadservicovm.descricaoCurta);
        this.frmCadServicos.get('descricaolonga').setValue(cadservicovm.descricaoLonga);
        if (cadservicovm.urlVideo) {
            this.VideoPreviewUrl = this.embedService.embed(cadservicovm.urlVideo);
        }
    };
    CadServicosComponent.prototype.getServicos = function () {
        var _this = this;
        this.cadServicos.getServicos().subscribe(function (res) {
            if (res.success === true) {
                _this.ServicosVM = res.data;
            }
            else {
                _this.toast.error('Erro ao buscar serviços cadastrados.', 'Lista serviços');
            }
        }, function (err) {
            _this.toast.error('Falha ao buscar serviços cadastrados.', 'Lista serviços');
            console.log(err);
        });
    };
    CadServicosComponent.prototype.delServicos = function (srvvm) {
        var _this = this;
        if (srvvm.id) {
            this.cadServicos.deleteServicos(srvvm.id).subscribe(function (res) {
                if (res.success === true) {
                    var index = _this.ServicosVM.indexOf(srvvm);
                    _this.ServicosVM.splice(index, 1);
                    _this.toast.success('Serviço deletado com sucesso.', 'Delete de serviço');
                }
                else {
                    _this.toast.error('O Delete do serviço falhou.', 'Delete de serviço');
                    console.log(res);
                }
            }, function (err) {
                _this.toast.error('Infelizmente aconteceu um erro.', 'Delete de Serviço');
                console.log(err);
            });
        }
    };
    CadServicosComponent.prototype.limpaformulario = function () {
        this.frmCadServicos.reset();
        this.ImagePreview = undefined;
        this.VideoPreviewUrl = undefined;
        this.ServicoVM = new _cad_servicosVM_cadastra_servico_view_model__WEBPACK_IMPORTED_MODULE_3__["CadastraServicoViewModel"]();
    };
    CadServicosComponent.prototype.addVantagens = function (txt) {
        if (this.ServicoVM.listaVantagens === null || this.ServicoVM.listaVantagens === undefined) {
            this.ServicoVM.listaVantagens = new Array();
            var vantagem = new _cad_servicosVM_vantagem_view_model__WEBPACK_IMPORTED_MODULE_4__["VantagemViewModel"]();
            vantagem.descricao = txt.value;
            this.ServicoVM.listaVantagens.push(vantagem);
            txt.value = '';
            txt.focus();
        }
        else {
            var vantagem = new _cad_servicosVM_vantagem_view_model__WEBPACK_IMPORTED_MODULE_4__["VantagemViewModel"]();
            vantagem.descricao = txt.value;
            this.ServicoVM.listaVantagens.push(vantagem);
            txt.value = '';
            txt.focus();
        }
    };
    CadServicosComponent.prototype.removeVantagens = function (vantagem) {
        var i = this.ServicoVM.listaVantagens.findIndex(function (v) { return v.descricao === vantagem.descricao; });
        this.ServicoVM.listaVantagens.splice(i, 1);
    };
    CadServicosComponent.prototype.b64toUint8Array = function (b64Data) {
        var sliceSize = 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        return byteArrays;
    };
    CadServicosComponent.prototype.b64toBlob = function (b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    CadServicosComponent.prototype.onChangeImage = function (files) {
        var _this = this;
        var file;
        file = files.item(0);
        this.fileupload = files.item(0);
        var reader = new FileReader();
        if (files && files.length > 0) {
            reader.onload = function (e) {
                _this.ServicoVM.imagem.data = reader.result;
                _this.ServicoVM.imagem.contentType = file.type;
                _this.ImagePreview = e.target.result;
            };
            reader.readAsDataURL(file);
            // reader.onload = (e: any) => {
            //   // preview da imagem
            //   this.ImagePreview = e.target.result;
            //   // this.ServicoVM.File = file;
            //   // adiciona no form
            //   // this.frmCadServicos.get('imagem').setValue(file, {
            //   //   filename: file.name,
            //   //   filetype: file.type
            //   // });
            // };
        }
    };
    CadServicosComponent.prototype.onChangeVideo = function (txt) {
        // console.log('Valor do txt: ---> ' + txt.value);
        // console.log(this.embedService.embed(txt.value));
        this.VideoPreviewUrl = this.embedService.embed(txt.value);
        this.ServicoVM.urlVideo = txt.value;
        // this.ServicoVM.UrlVideo = this.domSanitizer.bypassSecurityTrustResourceUrl(txt.value);
        // this.ServicoVM.safeurl = this.domSanitizer.bypassSecurityTrustResourceUrl(txt.value);
    };
    CadServicosComponent.prototype.getEmbedImage = function (url) {
        var img = this.embedService.embed_image(url, { image: 'thumbnail_small' });
        var i = img.__zone_symbol__value;
        // console.log(i.html);
        return i.link;
    };
    CadServicosComponent.prototype.getEmbedUrl = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    CadServicosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comp-cad-servicos',
            template: __webpack_require__(/*! ./cad-servicos.component.html */ "./src/app/Restrito/cad-servicos/cad-servicos.component.html"),
            styles: [__webpack_require__(/*! ./cad-servicos.component.scss */ "./src/app/Restrito/cad-servicos/cad-servicos.component.scss")]
        }),
        __metadata("design:paramtypes", [_cad_servicos_service__WEBPACK_IMPORTED_MODULE_2__["CadServicosService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            ngx_embed_video__WEBPACK_IMPORTED_MODULE_7__["EmbedVideoService"]])
    ], CadServicosComponent);
    return CadServicosComponent;
}());



/***/ }),

/***/ "./src/app/Restrito/cad-servicos/cad-servicos.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/Restrito/cad-servicos/cad-servicos.service.ts ***!
  \***************************************************************/
/*! exports provided: CadServicosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadServicosService", function() { return CadServicosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadServicosService = /** @class */ (function (_super) {
    __extends(CadServicosService, _super);
    function CadServicosService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    CadServicosService.prototype.postServicos = function (servico, imagem) {
        var options = {
            headers: this.getHeader()
        };
        var formdata = new FormData();
        formdata.append('servico', JSON.stringify(servico));
        formdata.append('files', imagem);
        return this.http.post(this.UrlV1 + "servico/v1/cadastrar", formdata, options);
    };
    // getServicos(): Observable<CadastraServicoViewModel[]>
    CadServicosService.prototype.getServicos = function () {
        var options = {
            headers: this.getHeader()
        };
        return this.http.get(this.UrlV1 + "servico/v1/listaservicos", options);
    };
    CadServicosService.prototype.deleteServicos = function (id) {
        var options = {
            headers: this.getAuthHeader(),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('id', id)
        };
        return this.http.delete(this.UrlV1 + "servico/v1/deletaservico", options);
    };
    CadServicosService.prototype.putServicos = function (servico, imagem) {
        var options = {
            headers: this.getHeader()
        };
        var formdata = new FormData();
        if (imagem !== null || imagem !== undefined) {
            formdata.append('files', imagem);
        }
        formdata.append('servico', JSON.stringify(servico));
        return this.http.put(this.UrlV1 + "servico/v1/alteraservico", formdata, options);
    };
    CadServicosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CadServicosService);
    return CadServicosService;
}(_services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/Restrito/cad-servicos/cad-servicosVM/cadastra-servico-view-model.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/Restrito/cad-servicos/cad-servicosVM/cadastra-servico-view-model.ts ***!
  \*************************************************************************************/
/*! exports provided: CadastraServicoViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastraServicoViewModel", function() { return CadastraServicoViewModel; });
/* harmony import */ var _imagem_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imagem-view-model */ "./src/app/Restrito/cad-servicos/cad-servicosVM/imagem-view-model.ts");

// import { SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
var CadastraServicoViewModel = /** @class */ (function () {
    function CadastraServicoViewModel() {
        this.iconFont = '';
        this.titulo = '';
        this.urlVideo = '';
        this.imagem = new _imagem_view_model__WEBPACK_IMPORTED_MODULE_0__["ImagemViewModel"]();
        this.descricaoCurta = '';
        this.descricaoLonga = '';
        this.listaVantagens = new Array();
        this.ativo = true;
    }
    return CadastraServicoViewModel;
}());



/***/ }),

/***/ "./src/app/Restrito/cad-servicos/cad-servicosVM/imagem-view-model.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Restrito/cad-servicos/cad-servicosVM/imagem-view-model.ts ***!
  \***************************************************************************/
/*! exports provided: ImagemViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagemViewModel", function() { return ImagemViewModel; });
var ImagemViewModel = /** @class */ (function () {
    function ImagemViewModel() {
        // this.data = '';
        this.contentType = '';
    }
    return ImagemViewModel;
}());



/***/ }),

/***/ "./src/app/Restrito/cad-servicos/cad-servicosVM/vantagem-view-model.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Restrito/cad-servicos/cad-servicosVM/vantagem-view-model.ts ***!
  \*****************************************************************************/
/*! exports provided: VantagemViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VantagemViewModel", function() { return VantagemViewModel; });
var VantagemViewModel = /** @class */ (function () {
    function VantagemViewModel() {
    }
    return VantagemViewModel;
}());



/***/ }),

/***/ "./src/app/Restrito/cad-videos/cad-videos.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Restrito/cad-videos/cad-videos.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"jumbotron\">\n  cad-videos works!\n</p>\n"

/***/ }),

/***/ "./src/app/Restrito/cad-videos/cad-videos.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/Restrito/cad-videos/cad-videos.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Restrito/cad-videos/cad-videos.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Restrito/cad-videos/cad-videos.component.ts ***!
  \*************************************************************/
/*! exports provided: CadVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadVideosComponent", function() { return CadVideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CadVideosComponent = /** @class */ (function () {
    function CadVideosComponent() {
    }
    CadVideosComponent.prototype.ngOnInit = function () {
    };
    CadVideosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comp-cad-videos',
            template: __webpack_require__(/*! ./cad-videos.component.html */ "./src/app/Restrito/cad-videos/cad-videos.component.html"),
            styles: [__webpack_require__(/*! ./cad-videos.component.scss */ "./src/app/Restrito/cad-videos/cad-videos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CadVideosComponent);
    return CadVideosComponent;
}());



/***/ }),

/***/ "./src/app/Restrito/principal/principal.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Restrito/principal/principal.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    Principal\r\n</div>"

/***/ }),

/***/ "./src/app/Restrito/principal/principal.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/Restrito/principal/principal.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Restrito/principal/principal.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Restrito/principal/principal.component.ts ***!
  \***********************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent() {
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    PrincipalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comp-principal',
            template: __webpack_require__(/*! ./principal.component.html */ "./src/app/Restrito/principal/principal.component.html"),
            styles: [__webpack_require__(/*! ./principal.component.scss */ "./src/app/Restrito/principal/principal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "./src/app/Restrito/restrito-footer/restrito-footer.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Restrito/restrito-footer/restrito-footer.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"restrito-footer\">\n        <p class=\"text-center\">Desenvolvido por <a href=\"https://imagineag.com.br/\">Imagine Coolab</a></p>\n    \n    <!-- <section id=\"footer-area\" class=\"footer-area-section\">\n        <div class=\"container\">\n            <div class=\"row section-padding\">\n\n                <div class=\"copy-right-text\">\n                    <p>© All Right Reserved. Designed by <a href=\"#\">vidco</a></p>\n                </div>\n            </div>\n        </div>\n    </section> -->\n\n    <script src=\"assets/js/script.js\"></script>\n</footer>"

/***/ }),

/***/ "./src/app/Restrito/restrito-footer/restrito-footer.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/Restrito/restrito-footer/restrito-footer.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".restrito-footer {\n  color: rgba(255, 255, 255, 0.6);\n  line-height: 3em;\n  bottom: 0;\n  font-weight: normal;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/Restrito/restrito-footer/restrito-footer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Restrito/restrito-footer/restrito-footer.component.ts ***!
  \***********************************************************************/
/*! exports provided: RestritoFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestritoFooterComponent", function() { return RestritoFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RestritoFooterComponent = /** @class */ (function () {
    function RestritoFooterComponent() {
    }
    RestritoFooterComponent.prototype.ngOnInit = function () {
    };
    RestritoFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comp-restrito-footer',
            template: __webpack_require__(/*! ./restrito-footer.component.html */ "./src/app/Restrito/restrito-footer/restrito-footer.component.html"),
            styles: [__webpack_require__(/*! ./restrito-footer.component.scss */ "./src/app/Restrito/restrito-footer/restrito-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RestritoFooterComponent);
    return RestritoFooterComponent;
}());



/***/ }),

/***/ "./src/app/Restrito/restrito-navbar/restrito-navbar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Restrito/restrito-navbar/restrito-navbar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n            <a class=\"navbar-brand\" [routerLink]=\"['/principal']\" routerLinkActive=\"router-link-active\">\n                <!-- <img alt=\"Brand\" src=\"../../../assets/img/logo/logo.png\" /> -->\n            </a>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li><a href=\"#\">Principal <span class=\"sr-only\">(current)</span></a></li>\n                <li><a [routerLink]=\"['cadhome']\" routerLinkActive=\"active\">Home/Somos</a></li>\n                <li><a [routerLink]=\"['cadservicos']\" routerLinkActive=\"active\">Serviços</a></li>\n                <li><a [routerLink]=\"['cadportifolio']\" routerLinkActive=\"active\">Portifolio</a></li>\n                <li><a [routerLink]=\"['cadpodcasts']\" routerLinkActive=\"active\">Podcasts</a></li>\n                <li><a [routerLink]=\"['cadblog']\" routerLinkActive=\"active\">Blog</a></li>\n                <li><a [routerLink]=\"['cadaudios']\" routerLinkActive=\"active\">Audios</a></li>\n                <li><a [routerLink]=\"['cadvideos']\" routerLinkActive=\"active\">Videos</a></li>\n                <li><a [routerLink]=\"['dados']\" routerLinkActive=\"active\">Dados</a></li>\n                <!-- <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Primeiro</a></li>\n                        <li><a href=\"#\">Segundo</a></li>\n                        <li role=\"separator\" class=\"divider\"></li>\n                        <li><a href=\"#\">Terceiro</a></li>\n                    </ul>\n                </li> -->\n            </ul>\n            <!-- <form class=\"navbar-form navbar-left\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Palavra chave\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-default\">Procurar</button>\n            </form> -->\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li><a>{{username}}</a></li>\n                <li><a (click)=\"logout()\">Sair</a></li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/Restrito/restrito-navbar/restrito-navbar.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/Restrito/restrito-navbar/restrito-navbar.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Restrito/restrito-navbar/restrito-navbar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Restrito/restrito-navbar/restrito-navbar.component.ts ***!
  \***********************************************************************/
/*! exports provided: RestritoNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestritoNavbarComponent", function() { return RestritoNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_conta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/conta.service */ "./src/app/services/conta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestritoNavbarComponent = /** @class */ (function () {
    function RestritoNavbarComponent(contaService, router) {
        this.contaService = contaService;
        this.router = router;
        this.username = '';
    }
    RestritoNavbarComponent.prototype.ngOnInit = function () {
        // let access = localStorage.getItem('comp.access');
        // if (access !== undefined) {
        //   Object.assign(this.accessData, access);
        // }
        var access = localStorage.getItem('comp.access');
        this.username = JSON.parse(access).UserName;
    };
    RestritoNavbarComponent.prototype.ngAfterViewInit = function () {
        // let access = localStorage.getItem('comp.access');
        // this.username = JSON.parse(access).UserName;
    };
    RestritoNavbarComponent.prototype.logout = function () {
        if (this.contaService.logout()) {
            document.location.reload();
        }
    };
    RestritoNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comp-restrito-navbar',
            template: __webpack_require__(/*! ./restrito-navbar.component.html */ "./src/app/Restrito/restrito-navbar/restrito-navbar.component.html"),
            styles: [__webpack_require__(/*! ./restrito-navbar.component.scss */ "./src/app/Restrito/restrito-navbar/restrito-navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_conta_service__WEBPACK_IMPORTED_MODULE_1__["ContaService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RestritoNavbarComponent);
    return RestritoNavbarComponent;
}());



/***/ }),

/***/ "./src/app/Restrito/restrito-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Restrito/restrito-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RestritoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestritoRoutingModule", function() { return RestritoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _principal_principal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./principal/principal.component */ "./src/app/Restrito/principal/principal.component.ts");
/* harmony import */ var _cad_blog_cad_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cad-blog/cad-blog.component */ "./src/app/Restrito/cad-blog/cad-blog.component.ts");
/* harmony import */ var _restrito_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./restrito.component */ "./src/app/Restrito/restrito.component.ts");
/* harmony import */ var _cad_servicos_cad_servicos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cad-servicos/cad-servicos.component */ "./src/app/Restrito/cad-servicos/cad-servicos.component.ts");
/* harmony import */ var _cad_home_cad_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cad-home/cad-home.component */ "./src/app/Restrito/cad-home/cad-home.component.ts");
/* harmony import */ var _cad_portifolio_cad_portifolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cad-portifolio/cad-portifolio.component */ "./src/app/Restrito/cad-portifolio/cad-portifolio.component.ts");
/* harmony import */ var _cad_podcasts_cad_podcasts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cad-podcasts/cad-podcasts.component */ "./src/app/Restrito/cad-podcasts/cad-podcasts.component.ts");
/* harmony import */ var _cad_audios_cad_audios_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cad-audios/cad-audios.component */ "./src/app/Restrito/cad-audios/cad-audios.component.ts");
/* harmony import */ var _cad_videos_cad_videos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cad-videos/cad-videos.component */ "./src/app/Restrito/cad-videos/cad-videos.component.ts");
/* harmony import */ var _analytics_report_analytics_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./analytics-report/analytics-report.component */ "./src/app/Restrito/analytics-report/analytics-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', component: _restrito_component__WEBPACK_IMPORTED_MODULE_4__["RestritoComponent"],
        children: [
            { path: '', component: _principal_principal_component__WEBPACK_IMPORTED_MODULE_2__["PrincipalComponent"] },
            { path: 'cadhome', component: _cad_home_cad_home_component__WEBPACK_IMPORTED_MODULE_6__["CadHomeComponent"] },
            { path: 'cadservicos', component: _cad_servicos_cad_servicos_component__WEBPACK_IMPORTED_MODULE_5__["CadServicosComponent"] },
            { path: 'cadportifolio', component: _cad_portifolio_cad_portifolio_component__WEBPACK_IMPORTED_MODULE_7__["CadPortifolioComponent"] },
            { path: 'cadpodcasts', component: _cad_podcasts_cad_podcasts_component__WEBPACK_IMPORTED_MODULE_8__["CadPodcastsComponent"] },
            { path: 'cadblog', component: _cad_blog_cad_blog_component__WEBPACK_IMPORTED_MODULE_3__["CadBlogComponent"] },
            { path: 'cadaudios', component: _cad_audios_cad_audios_component__WEBPACK_IMPORTED_MODULE_9__["CadAudiosComponent"] },
            { path: 'cadvideos', component: _cad_videos_cad_videos_component__WEBPACK_IMPORTED_MODULE_10__["CadVideosComponent"] },
            { path: 'dados', component: _analytics_report_analytics_report_component__WEBPACK_IMPORTED_MODULE_11__["AnalyticsReportComponent"] },
        ] }
];
var RestritoRoutingModule = /** @class */ (function () {
    function RestritoRoutingModule() {
    }
    RestritoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RestritoRoutingModule);
    return RestritoRoutingModule;
}());



/***/ }),

/***/ "./src/app/Restrito/restrito.component.html":
/*!**************************************************!*\
  !*** ./src/app/Restrito/restrito.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"preloader\">\n</div> -->\n\n\n<comp-restrito-navbar></comp-restrito-navbar>\n\n<div class=\"container conteudo-arearestrita\">\n  <router-outlet></router-outlet>\n</div>\n\n\n<!-- <comp-restrito-footer></comp-restrito-footer> -->\n"

/***/ }),

/***/ "./src/app/Restrito/restrito.component.scss":
/*!**************************************************!*\
  !*** ./src/app/Restrito/restrito.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Restrito/restrito.component.ts":
/*!************************************************!*\
  !*** ./src/app/Restrito/restrito.component.ts ***!
  \************************************************/
/*! exports provided: RestritoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestritoComponent", function() { return RestritoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RestritoComponent = /** @class */ (function () {
    function RestritoComponent() {
    }
    RestritoComponent.prototype.ngOnInit = function () {
    };
    RestritoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comp-restrito',
            template: __webpack_require__(/*! ./restrito.component.html */ "./src/app/Restrito/restrito.component.html"),
            styles: [__webpack_require__(/*! ./restrito.component.scss */ "./src/app/Restrito/restrito.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RestritoComponent);
    return RestritoComponent;
}());



/***/ }),

/***/ "./src/app/Restrito/restrito.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Restrito/restrito.module.ts ***!
  \*********************************************/
/*! exports provided: RestritoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestritoModule", function() { return RestritoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _restrito_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restrito-routing.module */ "./src/app/Restrito/restrito-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _cad_servicos_cad_servicos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cad-servicos/cad-servicos.service */ "./src/app/Restrito/cad-servicos/cad-servicos.service.ts");
/* harmony import */ var _restrito_navbar_restrito_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./restrito-navbar/restrito-navbar.component */ "./src/app/Restrito/restrito-navbar/restrito-navbar.component.ts");
/* harmony import */ var _principal_principal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./principal/principal.component */ "./src/app/Restrito/principal/principal.component.ts");
/* harmony import */ var _restrito_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./restrito.component */ "./src/app/Restrito/restrito.component.ts");
/* harmony import */ var _Restrito_cad_blog_cad_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Restrito/cad-blog/cad-blog.component */ "./src/app/Restrito/cad-blog/cad-blog.component.ts");
/* harmony import */ var _cad_servicos_cad_servicos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cad-servicos/cad-servicos.component */ "./src/app/Restrito/cad-servicos/cad-servicos.component.ts");
/* harmony import */ var _restrito_footer_restrito_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./restrito-footer/restrito-footer.component */ "./src/app/Restrito/restrito-footer/restrito-footer.component.ts");
/* harmony import */ var _cad_home_cad_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cad-home/cad-home.component */ "./src/app/Restrito/cad-home/cad-home.component.ts");
/* harmony import */ var _cad_portifolio_cad_portifolio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cad-portifolio/cad-portifolio.component */ "./src/app/Restrito/cad-portifolio/cad-portifolio.component.ts");
/* harmony import */ var _cad_podcasts_cad_podcasts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cad-podcasts/cad-podcasts.component */ "./src/app/Restrito/cad-podcasts/cad-podcasts.component.ts");
/* harmony import */ var _cad_audios_cad_audios_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cad-audios/cad-audios.component */ "./src/app/Restrito/cad-audios/cad-audios.component.ts");
/* harmony import */ var _cad_videos_cad_videos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cad-videos/cad-videos.component */ "./src/app/Restrito/cad-videos/cad-videos.component.ts");
/* harmony import */ var _analytics_report_analytics_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./analytics-report/analytics-report.component */ "./src/app/Restrito/analytics-report/analytics-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var RestritoModule = /** @class */ (function () {
    function RestritoModule() {
    }
    RestritoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _restrito_routing_module__WEBPACK_IMPORTED_MODULE_3__["RestritoRoutingModule"],
                ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__["EmbedVideo"].forRoot()
            ],
            declarations: [
                _restrito_navbar_restrito_navbar_component__WEBPACK_IMPORTED_MODULE_7__["RestritoNavbarComponent"],
                _principal_principal_component__WEBPACK_IMPORTED_MODULE_8__["PrincipalComponent"],
                _restrito_component__WEBPACK_IMPORTED_MODULE_9__["RestritoComponent"],
                _Restrito_cad_blog_cad_blog_component__WEBPACK_IMPORTED_MODULE_10__["CadBlogComponent"],
                _cad_servicos_cad_servicos_component__WEBPACK_IMPORTED_MODULE_11__["CadServicosComponent"],
                _restrito_footer_restrito_footer_component__WEBPACK_IMPORTED_MODULE_12__["RestritoFooterComponent"],
                _cad_home_cad_home_component__WEBPACK_IMPORTED_MODULE_13__["CadHomeComponent"],
                _cad_portifolio_cad_portifolio_component__WEBPACK_IMPORTED_MODULE_14__["CadPortifolioComponent"],
                _cad_podcasts_cad_podcasts_component__WEBPACK_IMPORTED_MODULE_15__["CadPodcastsComponent"],
                _cad_audios_cad_audios_component__WEBPACK_IMPORTED_MODULE_16__["CadAudiosComponent"],
                _cad_videos_cad_videos_component__WEBPACK_IMPORTED_MODULE_17__["CadVideosComponent"],
                _analytics_report_analytics_report_component__WEBPACK_IMPORTED_MODULE_18__["AnalyticsReportComponent"]
            ],
            providers: [
                _cad_servicos_cad_servicos_service__WEBPACK_IMPORTED_MODULE_6__["CadServicosService"]
            ],
            bootstrap: [_restrito_component__WEBPACK_IMPORTED_MODULE_9__["RestritoComponent"]]
        })
    ], RestritoModule);
    return RestritoModule;
}());



/***/ })

}]);
//# sourceMappingURL=Restrito-restrito-module.js.map