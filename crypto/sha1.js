const crypto = require('crypto'); // eslint-disable-line @typescript-eslint/no-var-requires


module.exports = function sha1(text) {
  return crypto.createHash('sha1').update(text).digest('hex');
}
