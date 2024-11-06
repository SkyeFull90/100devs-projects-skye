const { expect } = require('chai');

describe('move function', () => {
  const move = (currentPosition, roll) => currentPosition + (roll * 2);  
  it('basic tests', () => {
    expect(move(0, 4)).to.equal(8);
    expect(move(3, 6)).to.equal(15);
    expect(move(2, 5)).to.equal(12);
  });
});