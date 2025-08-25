module.exports = function decrypt(encrypted, privateKey) {
  var str = '-----BEGIN PRIVATE KEY-----' + privateKey + '-----END PRIVATE KEY-----';
  var priv = forge.pki.privateKeyFromPem(str);
  var bytes = forge.util.decode64(encrypted);
  var decrypted = priv.decrypt(bytes); // eslint-disable-line sonarjs/prefer-immediate-return
  return decrypted;
}
