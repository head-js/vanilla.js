function xHeaders(headers) {
  const x = {};
  Object.keys(headers).forEach(function (key) {
    const k = key.toLowerCase();
    if (k.indexOf('x-') === 0) {
      x[k] = headers[key];
    }
  });
  return x;
}


function success(resolve, reject, res) {
  if (res.statusCode === 200) {
    const resp = { code: 0, message: res.errMsg, data: res.data };
    const headers = xHeaders(res.header);
    if (Object.keys(headers).length > 0) {
      resp.headers = headers;
    }
    resolve(resp);
  } else {
    const code = res.errCode || res.errcode || res.statusCode || -1;
    const message = res.errMsg || res.errmsg || '';
    reject({ code: code, message: message });
  }
}

function fail(resolve, reject, err) {
  const code = err.errCode || err.errcode || -1;
  const message = err.errMsg || err.errmsg || '';
  reject({ code: code, message: message });
}

module.exports.get = function get(endpoint, query, headers) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: endpoint,
      data: query,
      method: 'GET',
      success: function (res) { success(resolve, reject, res); },
      fail: function (err) { fail(resolve, reject, err); },
    });
  });
}
