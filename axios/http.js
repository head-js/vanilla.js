var axios = require('axios');

var $http = axios.create({});


$http.interceptors.response.use(
  function (response) {
    var data = response.data;
    var status = response.status;

    if (typeof data === 'string') {
      return Promise.resolve({ status: status, data: data });
    } else {
      data.status = status;
      return Promise.resolve(data);
    }
  },
  function (error) {
    var data = error.response.data;
    var status = error.response.status;

    if (typeof data === 'string') {
      return Promise.reject({ status: status, data: data });
    } else {
      data.status = status;
      return Promise.reject(data);
    }
  }
);


$http._get = $http.get;

$http.get = function (endpoint, query) {
  if (!query) {
    query = {};
  }

  return $http._get(endpoint, { params: query });
}


module.exports = $http;
