const expect = require('chai').expect;
const des = require('../forge/des');
const md5 = require('../forge/md5');
const sha256 = require('../forge/sha256');


describe('forge', function () {
  it('des', function () {
    const SECRET = 'ABCDEFGHIJklmnopqrst1234';
    expect(des('admin', SECRET)).to.be.equal('83HneVSbIIk=');
  });

  it('md5', function () {
    expect(md5('admin')).to.be.equal('21232f297a57a5a743894a0e4a801fc3');
  });

  xit('rsa', function () {
  });

  it('sha256', function () {
    expect(sha256('admin')).to.be.equal('8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918');
  });
});
