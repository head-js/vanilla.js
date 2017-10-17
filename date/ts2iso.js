// https://stackoverflow.com/a/28149561/707580
module.exports = function ts2iso(timestamp) {
  var d = new Date(timestamp);
  return new Date(d.getTime() - (d.getTimezoneOffset() * 60 * 1000)).toISOString().slice(0, -5).replace('T', ' ');
}
