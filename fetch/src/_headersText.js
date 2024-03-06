export default function _headers(headers) {
  const headers2 = new Headers(headers);
  headers2.append('Accept', 'text/plain');

  return headers2;
}
