// 'use strict';

// require('core-js/modules/es.object.to-string.js');
// require('core-js/modules/es.promise.js');
// require('core-js/modules/es.array.join.js');
// require('core-js/modules/es.array.map.js');
// require('core-js/modules/es.object.keys.js');

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

function _fetchForm(method, form, headers, options) {
  return {
    method: method,
    headers: headers,
    body: JSON.stringify(form),
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

module.exports = post;
