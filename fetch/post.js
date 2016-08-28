module.exports = function $post(endpoint, command) {
  command = command || {};

  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify(command),
  })
  .then(function (resp) {
    if (resp.status >= 200 && resp.status < 300) {
      return resp.json().then(function (j) { return Promise.resolve(j); });
    } else {
      return resp.json().then(function (j) { return Promise.reject(j); });
    }
  });
}
