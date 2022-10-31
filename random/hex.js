module.exports = function rnd(repeat) {
  var text = '';
  var possible = '0123456789abcdef';
  var len = possible.length;
  for (var i = 0; i < repeat; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * len));
  }
  return text;
}
