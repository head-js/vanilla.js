const fen2yuan = require('./fen2yuan'); // eslint-disable-line @typescript-eslint/no-var-requires


module.exports = function yuan2yuan(yuan) {
  return fen2yuan(Math.floor(yuan * 100));
}
