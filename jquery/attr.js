module.exports = function $attr(el, key, value) {
  if (value) {
    el.setAttribute(key, value);
  } else {
    return el.getAttribute(key);
  }
};
