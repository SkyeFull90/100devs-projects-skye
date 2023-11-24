// test.js
const { expect } = require('chai');
const { assignFavoriteFood } = require('./main');
const sinon = require('sinon');

describe('assignFavoriteFood', function() {
  it('should exist', function() {
    expect(assignFavoriteFood).to.exist;
  });

  it('should correctly assign and console log favorite food', function() {
    let log = sinon.spy(console, 'log');
    assignFavoriteFood("Pizza");
    expect(log.calledWith("Pizza")).to.be.true;
    log.restore();
  });
});