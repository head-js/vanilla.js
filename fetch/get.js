'use strict';

function _url(endpoint, query) {
  const esc = encodeURIComponent;
  const keys = Object.keys(query);
  let url = endpoint;
  if (keys.length > 0) {
    url += '?' + keys.map(k => {
      // eslint-disable-line prefer-template
      const value = query[k];
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
  const headers2 = new Headers(headers);
  headers2.append('Accept', 'application/json');
  headers2.append('Content-Type', 'application/json');
  return headers2;
}

function _fetch(method, headers, options) {
  return {
    method,
    headers,
    credentials: options.credentials || 'same-origin'
  };
}

function _then(resolve, reject) {
  return resp => {
    const {
      status
    } = resp;
    if (resp.ok) {
      resp.text().then(t => {
        resolve(t ? JSON.parse(t) : {
          status
        });
      });
    } else {
      resp.text().then(t => {
        reject(t ? JSON.parse(t) : {
          status
        });
      });
    }
  };
}

function _catch(resolve, reject) {
  return err => {
    reject(err);
  };
}

function get(endpoint) {
  let query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const url = _url(endpoint, query);
  const headers2 = _headers(headers);
  return new Promise((resolve, reject) => {
    fetch(url, _fetch('GET', headers2, options)).then(_then(resolve, reject)).catch(_catch(resolve, reject));
  });
}

module.exports = get;
