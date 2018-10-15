var forge = require('node-forge');

/**
 * @param text [String]
 * @return hash [String] e.g. 8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918
 */
module.exports = function sha256(text) {
  var md = forge.sha256.create();
  md.update(text, 'utf8');
  return md.digest().toHex();
};
