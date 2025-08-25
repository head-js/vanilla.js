var yuan2ccy = require('./yuan2ccy'); // eslint-disable-line @typescript-eslint/no-var-requires


module.exports = function fen2ccy(fen, symbol) { // eslint-disable-line @typescript-eslint/no-unused-vars
  if (!fen) {
    fen = 0;
  }

  const yuan = fen / 100;

  return yuan2ccy(yuan);
}
