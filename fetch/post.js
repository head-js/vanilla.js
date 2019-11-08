module.exports = function $post(endpoint, command, headers) {
  command = command || {};

  headers = headers || {};
  headers['Accept'] = 'application/json';
  headers['Content-Type'] = 'application/json';

  return fetch(endpoint, {
    method: 'POST',
    headers: headers,
    credentials: 'same-origin',
    body: JSON.stringify(command),
  })
  .then(function (resp) {
    if (resp.status >= 200 && resp.status < 300) {
      return resp.json().then(function (j) {
        var hds = {};
        var x = false;
        for (var kv of resp.headers.entries()) {
          if (kv[0].indexOf('x-') > -1) {
            hds[kv[0]] = kv[1];
            x = true;
          }
        }
        if (x) {
          j.headers = hds;
        }
        return Promise.resolve(j);
      });
    } else {
      return resp.json().then(function (j) { return Promise.reject(j); });
    }
  });
}
