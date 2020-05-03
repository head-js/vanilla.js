var match = require('path-to-regexp').match;


module.exports = function $match(route, pathname, actions) {
  var matches = match(route)(pathname);
  if (matches) {
    actions(matches.params);
  }
}
