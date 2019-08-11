var forge = require('node-forge');

/**
 * @param text [String]
 * @return hash [String] e.g. effcdf6ae5eb2fa2d27416d5f184df9c259a7c79
 */
module.exports = function hs256(text, secret) {
  var hmac = forge.hmac.create();
  hmac.start('sha256', secret);
  hmac.update(text);
  return hmac.digest().toHex();
};
