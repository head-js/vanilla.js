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
  headers2.append('Accept', 'text/plain');
  return headers2;
}

function _fetch(method, headers, options) {
  return {
    method,
    headers,
    credentials: options.credentials || 'same-origin'
  };
}

function _thenText(resolve, reject) {
  return resp => {
    const {
      status
    } = resp;
    if (resp.ok) {
      resp.text().then(t => {
        resolve(t ? t : ''); // eslint-disable-line no-unneeded-ternary
      });
    } else {
      resp.text().then(t => {
        reject(t ? t : "status: ".concat(status)); // eslint-disable-line no-unneeded-ternary
      });
    }
  };
}

function _catch(resolve, reject) {
  return err => {
    reject(err);
  };
}

function text(endpoint) {
  let query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const url = _url(endpoint, query);
  const headers2 = _headers(headers);
  return new Promise((resolve, reject) => {
    fetch(url, _fetch('GET', headers2, options)).then(_thenText(resolve, reject)).catch(_catch(resolve, reject));
  });
}

module.exports = text;
