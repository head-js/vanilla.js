module.exports = function $before(selector, html) {
  // The selector should return ONE and only ONE element
  var el = document.querySelector(selector);
  el.insertAdjacentHTML('beforebegin', html);
  return el;
};
