const expect = require('chai').expect;
const fen2yuan = require('../number/fen2yuan');
const yuan2yuan = require('../number/yuan2yuan');
const yuan2ccy = require('../number/yuan2ccy');


describe('number', function () {
  it('fen2yuan', function () {
    const fen = 123456;
    expect(fen2yuan(fen)).to.be.equal('1234.56');
  });

  it('yuan2yuan-1', function () {
    const yuan = 1234;
    expect(yuan2yuan(yuan)).to.be.equal('1234.00');
  });

  it('yuan2yuan-2', function () {
    const yuan = 1234.56;
    expect(yuan2yuan(yuan)).to.be.equal('1234.56');
  });

  it('yuan2yuan-3', function () {
    const yuan = 1234.567;
    expect(yuan2yuan(yuan)).to.be.equal('1234.56');
  });

  it('yuan2ccy-1', function () {
    const yuan = 1234;
    expect(yuan2ccy(yuan)).to.be.equal('1,234.00');
  });

  it('yuan2ccy-2', function () {
    const yuan = 1234.56;
    expect(yuan2ccy(yuan)).to.be.equal('1,234.56');
  });

  it('yuan2ccy-3', function () {
    const yuan = 1234.567;
    expect(yuan2ccy(yuan)).to.be.equal('1,234.57');
  });

  it('yuan2ccy-4', function () {
    const yuan = -1234.567;
    expect(yuan2ccy(yuan)).to.be.equal('-1,234.57');
  });
});
