const expect = require('chai').expect;
const diff = require('../compare/diff');


describe.only('diff', function () {
  it.only('diff', function () {
    const prev = [{ id: '0', name: 'Zero' }, { id: '1', name: 'One' }, { id: '3', name: 'Three' }];
    const next = [{ id: '1', name: 'First' }, { id: '2', name: 'Second' }, { id: '3', name: 'Three' }];

    const [toInsert, toDelete, toUpdate] = diff(prev, next, ['name']);

    console.log(toInsert);
    console.log(toDelete);
    console.log(toUpdate[0].changes);

    expect(toInsert.length).to.be.equal(1);
  });
});
