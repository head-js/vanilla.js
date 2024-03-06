import _url from './_url';
import _headers from './_headers';
import _fetch from './_fetch';
import _then from './_then';
import _catch from './_catch';


export default function del(endpoint, query = {}, headers = {}, options = {}) {
  const url = _url(endpoint, query);

  const headers2 = _headers(headers);

  return new Promise((resolve, reject) => {
    fetch(url, _fetch('DELETE', headers2, options))
      .then(_then(resolve, reject))
      .catch(_catch(resolve, reject));
  });
}
