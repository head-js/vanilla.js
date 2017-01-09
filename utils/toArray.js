// https://github.com/vuejs/vue/blob/master/src/shared/util.js
// http://stackoverflow.com/a/29975135/707580

/**
 * Convert an Array-like object to a real Array.
 */
module.exports = function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}
