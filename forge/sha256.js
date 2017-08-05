/**
 * @param text [String]
 * @return hash [String] e.g. b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
 */
module.exports = function sha256(text) {
  var md = forge.sha256.create();
  md.update(text, 'utf8');
  return md.digest().toHex();
};
