var forge = require('node-forge');


// unstable
module.exports = function verify(text, signature, publicKey) {
  var md = forge.md.sha1.create();
  md.update(text, 'utf8');

  var pem = '-----BEGIN RSA PUBLIC KEY-----' + publicKey + '-----END RSA PUBLIC KEY-----';
  var pub = forge.pki.publicKeyFromPem(pem);
  var sig = forge.util.decode64(signature);

  return pub.verify(md.digest().getBytes(), sig);
}
