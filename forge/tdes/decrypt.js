module.exports = function decrypt(encrypted, secret) {
  var decipher = forge.cipher.createDecipher('3DES-ECB', secret);
  decipher.start();
  decipher.update(forge.util.createBuffer(forge.util.decode64(encrypted)));
  var result = decipher.finish(); // eslint-disable-line @typescript-eslint/no-unused-vars
  return forge.util.encodeUtf8(decipher.output.getBytes());
}
