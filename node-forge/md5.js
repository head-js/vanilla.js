var forge = require('node-forge');

/**
 * @param text [String]
 * @return hash [String] e.g. 21232f297a57a5a743894a0e4a801fc3
 */
module.exports = function md5(text) {
  var md = forge.md.md5.create();
  md.update(text, 'utf8');
  return md.digest().toHex();
};
