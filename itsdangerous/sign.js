var forge = require('node-forge');


// unstable
module.exports = function sign(text, privateKey) {
  var md = forge.md.sha1.create();
  md.update(text, 'utf8');

  var pem = '-----BEGIN RSA PRIVATE KEY-----' + privateKey + '-----END RSA PRIVATE KEY-----';
  var prv = forge.pki.privateKeyFromPem(pem);
  var signature = prv.sign(md);

  return forge.util.encode64(signature);
}
