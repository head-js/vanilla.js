const fen2yuan = require('./fen2yuan');


module.exports = function yuan2yuan(yuan) {
  return fen2yuan(Math.floor(yuan * 100));
}
