'use strict';

// require('core-js/modules/es.date.to-json.js');
// require('core-js/modules/es.object.to-string.js');
// require('core-js/modules/es.promise.js');
// require('core-js/modules/web.url.to-json.js');
var axios$1 = require('axios');
// require('core-js/modules/es.array.join.js');
// require('core-js/modules/es.array.map.js');
// require('core-js/modules/es.object.keys.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios$1);

function _url(endpoint, query) {
  var esc = encodeURIComponent;
  var keys = Object.keys(query);
  var url = endpoint;
  if (keys.length > 0) {
    url += '?' + keys.map(function (k) {
      // eslint-disable-line prefer-template
      var value = query[k];
      if (value === null || value === '') {
        return '';
      } else {
        return esc(k) + '=' + esc(value); // eslint-disable-line prefer-template
      }
    }).join('&');
  }
  return url;
}

function _headers(headers) {
  var headers2 = new Headers(headers);
  headers2.append('Accept', 'application/json');
  headers2.append('Content-Type', 'application/json');
  return headers2;
}

function _fetch(method, headers, options) {
  return {
    method: method,
    headers: headers,
    credentials: options.credentials || 'same-origin'
  };
}

function _then(resolve, reject) {
  return function (resp) {
    var status = resp.status;
    if (resp.ok) {
      resp.text().then(function (t) {
        resolve(t ? JSON.parse(t) : {
          status: status
        });
      });
    } else {
      resp.text().then(function (t) {
        reject(t ? JSON.parse(t) : {
          status: status
        });
      });
    }
  };
}

function _catch(resolve, reject) {
  return function (err) {
    reject(err);
  };
}

function get(endpoint) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var url = _url(endpoint, query);
  var headers2 = _headers(headers);
  return new Promise(function (resolve, reject) {
    fetch(url, _fetch('GET', headers2, options)).then(_then(resolve, reject))["catch"](_catch(resolve, reject));
  });
}

function _fetchForm(method, form, headers, options) {
  return {
    method: method,
    headers: headers,
    body: JSON.stringify(form),
    credentials: options.credentials || 'same-origin'
  };
}

function post(endpoint) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var form = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var url = _url(endpoint, query);
  var headers2 = _headers(headers);
  return new Promise(function (resolve, reject) {
    fetch(url, _fetchForm('POST', form, headers2, options)).then(_then(resolve, reject))["catch"](_catch(resolve, reject));
  });
}

function put(endpoint) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var form = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var url = _url(endpoint, query);
  var headers2 = _headers(headers);
  return new Promise(function (resolve, reject) {
    fetch(url, _fetchForm('PUT', form, headers2, options)).then(_then(resolve, reject))["catch"](_catch(resolve, reject));
  });
}

function del(endpoint) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var url = _url(endpoint, query);
  var headers2 = _headers(headers);
  return new Promise(function (resolve, reject) {
    fetch(url, _fetch('DELETE', headers2, options)).then(_then(resolve, reject))["catch"](_catch(resolve, reject));
  });
}

var $fetch = {
  get: get,
  post: post,
  put: put,
  'delete': del // eslint-disable-line quote-props
};

function adapter(config) {
  return new Promise(function (resolve, reject) {
    var method = config.method,
      url = config.url,
      _config$params = config.params,
      params = _config$params === void 0 ? {} : _config$params,
      _config$data = config.data,
      data = _config$data === void 0 ? {} : _config$data; // eslint-disable-line object-curly-newline
    var headers = config.headers.toJSON();
    var options = {};
    if (config.credentials) {
      options.credentials = config.credentials;
    }
    return $fetch[method](url, params, data, headers, options).then(resolve)["catch"](reject);
  });
}
function create() {
  return axios__default["default"].create({
    adapter: adapter,
    headers: {
      'X-Requested-With': 'vanilla.js/fetch'
    }
  });
}
var axios = {
  create: create
};

module.exports = axios;
