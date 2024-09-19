const chai = require('chai');
const expect = chai.expect;

function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  return result;
}

describe('fizzBuzz', () => {
  it('should return correct values', () => {
    expect(fizzBuzz(5)).to.deep.equal(["1", "2", "Fizz", "4", "Buzz"]);
    expect(fizzBuzz(3)).to.deep.equal(["1", "2", "Fizz"]);
    expect(fizzBuzz(15)).to.deep.equal(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
  });
});