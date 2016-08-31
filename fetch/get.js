module.exports = function $get(endpoint, query) {
  query = query || {};

  var esc = encodeURIComponent;

  var keys = Object.keys(query);

  var url = endpoint;
  if (keys.length > 0) {
    url += '?' + keys.map(function (k) {
      var value = query[k];
      if (value == null || value == '') {
        return '';
      } else {
        return esc(k) + '=' + esc(value);
      }
    }).join('&');
  }

  return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
  })
  .then(function (resp) {
    if (resp.status >= 200 && resp.status < 300) {
      return resp.json().then(function (j) { return Promise.resolve(j); });
    } else {
      return resp.json().then(function (j) { return Promise.reject(j); });
    }
  });
}
