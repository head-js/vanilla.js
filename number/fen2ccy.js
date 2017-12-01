var yuan2ccy = require('./yuan2ccy');


module.exports = function fen2ccy(fen, symbol) {
  if (!fen) {
    fen = 0;
  }

  const yuan = fen / 100;

  return yuan2ccy(yuan);
}
