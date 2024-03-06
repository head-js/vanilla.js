export default function _url(endpoint, query) {
  const esc = encodeURIComponent;

  const keys = Object.keys(query);

  let url = endpoint;
  if (keys.length > 0) {
    url += '?' + keys.map((k) => { // eslint-disable-line prefer-template
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
