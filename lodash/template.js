module.exports = function _template(tpl, locals) {
  var fn = new Function('_', 'return `' + tpl + '`;');
  return fn(locals);
}
