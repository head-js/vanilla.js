/**
 * @param text [String]
 * @param secret [String] 长度应为 24，e.g. ABCDEFGHIJklmnopqrst1234
 * @return encrypted [String] e.g. K7XF7EbkCEG3dfSvwwGbEQ==
 */
module.exports = function des(text, secret) {
  var cipher = forge.cipher.createCipher('3DES-ECB', secret);
  cipher.start();
  cipher.update(forge.util.createBuffer(forge.util.encodeUtf8(text)));
  cipher.finish();
  return forge.util.encode64(cipher.output.getBytes());
};

// // DEBUG:
// des.algorithm = '3DES-ECB';
