const expect = require('chai').expect; // eslint-disable-line @typescript-eslint/no-var-requires
const ts2iso = require('../date/ts2iso'); // eslint-disable-line @typescript-eslint/no-var-requires


describe('date', function () {
  it('ts2iso', function () {
    const timestamp = 1508205930788;
    expect(ts2iso(timestamp)).to.be.equal('2017-10-17 10:05:30');
  });
});
