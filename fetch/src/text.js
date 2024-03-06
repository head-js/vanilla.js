import _url from './_url';
import _headersText from './_headersText';
import _fetch from './_fetch';
import _thenText from './_thenText';
import _catch from './_catch';


export default function text(endpoint, query = {}, headers = {}, options = {}) {
  const url = _url(endpoint, query);

  const headers2 = _headersText(headers);

  return new Promise((resolve, reject) => {
    fetch(url, _fetch('GET', headers2, options))
      .then(_thenText(resolve, reject))
      .catch(_catch(resolve, reject));
  });
}
