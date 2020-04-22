module.exports = function $get(endpoint, query, headers) {
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

  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    if (headers) {
      Object.keys(headers).forEach(k => xhr.setRequestHeader(k, headers[k]));
    }

    xhr.onload = function () {
      // console.debug(xhr);
      var status = xhr.status;
      if (status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };
    xhr.send();
  });
};
