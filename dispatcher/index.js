// https://github.com/vuejs/vue/blob/master/src/core/instance/events.js
var toArray = require('../utils/toArray.js');

function Vue() {
  var vm = this;
  vm._events = Object.create(null);
  return vm;
};

Vue.prototype.$on = function $on(event, fn) {
  var vm = this;
  (vm._events[event] || (vm._events[event] = [])).push(fn);
  return vm;
}

Vue.prototype.$once = function $once(event, fn) {
  var vm = this;
  function on() {
    vm.$off(event, on);
    fn.apply(vm, arguments);
  }
  on.fn = fn;
  vm.$on(event, on);
  return vm;
}

Vue.prototype.$off = function $off(event, fn) {
  var vm = this;
  // all
  if (!arguments.length) {
    vm._events = Object.create(null);
    return vm;
  }
  // specific event
  var cbs = vm._events[event];
  if (!cbs) {
    return vm;
  }
  if (arguments.length === 1) {
    vm._events[event] = null;
    return vm;
  }
  // specific handler
  var cb;
  var i = cbs.length;
  while (i--) {
    cb = cbs[i];
    if (cb === fn || cb.fn === fn) {
      cbs.splice(i, 1);
      break;
    }
  }
  return vm;
}

Vue.prototype.$emit = function $emit(event) {
  var vm = this;
  var cbs = vm._events[event];
  if (cbs) {
    cbs = cbs.length > 1 ? toArray(cbs) : cbs;
    var args = toArray(arguments, 1);
    for (var i = 0, l = cbs.length; i < l; i++) {
      cbs[i].apply(vm, args);
    }
  }
  return vm;
}

var $dispatcher = new Vue();

$dispatcher.$on = $dispatcher.$on.bind($dispatcher);
$dispatcher.$once = $dispatcher.$once.bind($dispatcher);
$dispatcher.$off = $dispatcher.$off.bind($dispatcher);
$dispatcher.$emit = $dispatcher.$emit.bind($dispatcher);

module.exports = $dispatcher;
