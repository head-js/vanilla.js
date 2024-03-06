export default function _fetchForm(method, form, headers, options) {
  return {
    method,
    headers,
    body: JSON.stringify(form),
    credentials: options.credentials || 'same-origin',
  };
}
