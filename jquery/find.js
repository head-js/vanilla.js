module.exports = function $find(selector) {
  // The selector should return ONE and only ONE element
  var el = document.querySelector(selector); // eslint-disable-line sonarjs/prefer-immediate-return
  return el;
}

