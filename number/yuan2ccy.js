// https://stackoverflow.com/a/16233919/707580
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'JPY',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});


module.exports = function yuan2ccy(yuan, symbol) {
  if (!yuan) {
    yuan = 0;
  }

  var fmt = formatter.format(yuan);
  if (yuan >= 0) {
    return fmt.substring(1);
  } else {
    return '-' + fmt.substring(2);
  }
}
