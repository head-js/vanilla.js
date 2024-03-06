export default function _fetch(method, headers, options) {
  return {
    method,
    headers,
    credentials: options.credentials || 'same-origin',
  };
}
