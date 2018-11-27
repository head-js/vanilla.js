const crypto = require('crypto');


module.exports = function sha1(text) {
  return crypto.createHash('sha1').update(text).digest('hex');
}
