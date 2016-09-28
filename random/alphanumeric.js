module.exports = function rnd(repeat) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var len = possible.length;
  for (var i = 0; i < repeat; i++) {
    text += possible.charAt(Math.floor(Math.random() * len));
  }
  return text;
}
