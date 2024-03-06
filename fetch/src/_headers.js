export default function _headers(headers) {
  const headers2 = new Headers(headers);
  headers2.append('Accept', 'application/json');
  headers2.append('Content-Type', 'application/json');

  return headers2;
}
