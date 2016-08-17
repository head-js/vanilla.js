module.exports = function $on(selector, event, handler) {
  var els = document.querySelectorAll(selector);
  Array.prototype.forEach.call(els, function (el) {
    el.addEventListener(event, function (e) {
      handler.call(el, e, el);
    });
  });

  return els;
};
