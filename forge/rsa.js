/**
 * @param text [String]
 * @param publicKey [String]
 * @return encrypted [String]
 */
module.exports = function rsa(text, publicKey) {
  var pkstr = '-----BEGIN PUBLIC KEY-----' + publicKey + '-----END PUBLIC KEY-----';
  var pk = forge.pki.publicKeyFromPem(pkstr);
  // console.debug(pk);
  var bytes = pk.encrypt(text);
  // console.debug(bytes);
  return forge.util.encode64(bytes);
};
