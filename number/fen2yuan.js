module.exports = function fen2yuan(fen) {
  if (fen) {
    const digits = fen.toString().split('');
    while (digits.length < 3) {
      digits.unshift('0');
    }
    digits.splice(digits.length - 2, 0, '.');
    return digits.join('');
  } else {
    return '0.00';
  }
}
