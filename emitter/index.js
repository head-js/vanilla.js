/* @head.js/snippet-emitter 0.4.0 */

// require('core-js/modules/es.array.splice.js');
// require('core-js/modules/es.function.bind.js');
// require('core-js/modules/es.object.create.js');

// https://github.com/vuejs/vue/blob/2.6/src/shared/util.js
// http://stackoverflow.com/a/29975135/707580

/**
 * Convert an Array-like object to a real Array.
 */
function toArray(list, start) {
  start = start || 0; // eslint-disable-line no-param-reassign
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    // eslint-disable-line no-plusplus
    ret[i] = list[i + start];
  }
  return ret;
}

// https://github.com/vuejs/vue/blob/2.6/src/core/instance/events.js
function Vue() {
  var vm = this;
  vm._events = Object.create(null);
  return vm;
}
Vue.prototype.$on = function $on(event, fn) {
  var vm = this;
  (vm._events[event] || (vm._events[event] = [])).push(fn);
  return vm;
};
Vue.prototype.$once = function $once(event, fn) {
  var vm = this;
  function on() {
    vm.$off(event, on);
    fn.apply(vm, arguments); // eslint-disable-line prefer-rest-params
  }
  on.fn = fn;
  vm.$on(event, on);
  return vm;
};
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
  if (!fn) {
    vm._events[event] = null;
    return vm;
  }
  // specific handler
  var cb;
  var i = cbs.length;
  while (i--) {
    // eslint-disable-line no-plusplus
    cb = cbs[i];
    if (cb === fn || cb.fn === fn) {
      cbs.splice(i, 1);
      break;
    }
  }
  return vm;
};
Vue.prototype.$emit = function $emit(event) {
  var vm = this;
  var cbs = vm._events[event];
  if (cbs) {
    cbs = cbs.length > 1 ? toArray(cbs) : cbs;
    var args = toArray(arguments, 1); // eslint-disable-line prefer-rest-params
    for (var i = 0, l = cbs.length; i < l; i += 1) {
      cbs[i].apply(vm, args);
    }
  }
  return vm;
};
var $emitter = new Vue();
$emitter.on = $emitter.$on.bind($emitter);
$emitter.once = $emitter.$once.bind($emitter);
$emitter.off = $emitter.$off.bind($emitter);
$emitter.emit = $emitter.$emit.bind($emitter);

module.exports = $emitter;
