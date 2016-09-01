module.exports = function rnd() {
  // http://stackoverflow.com/a/8084248
  return Math.random().toString(36).substring(2);
}
