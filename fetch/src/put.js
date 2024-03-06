import _url from './_url';
import _headers from './_headers';
import _fetchForm from './_fetchForm';
import _then from './_then';
import _catch from './_catch';


export default function put(endpoint, query = {}, form = {}, headers = {}, options = {}) {
  const url = _url(endpoint, query);

  const headers2 = _headers(headers);

  return new Promise((resolve, reject) => {
    fetch(url, _fetchForm('PUT', form, headers2, options))
      .then(_then(resolve, reject))
      .catch(_catch(resolve, reject));
  });
}
