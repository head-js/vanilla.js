const crypto = require('crypto'); // eslint-disable-line @typescript-eslint/no-var-requires


module.exports = function sha256(text) {
  return crypto.createHash('sha256').update(text).digest('hex');
}
