module.exports = function _pickBy(object) {
  const obj = {};
  for (const key in object) {
    if (object[key] !== null && object[key] !== false && object[key] !== undefined) {
      obj[key] = object[key];
    }
  }
  return obj;
}
