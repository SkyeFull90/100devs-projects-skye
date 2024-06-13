const chai = require('chai');
const expect = chai.expect;

const toJadenCase = require('../jadenCase.cjs'); // Import the function

describe("toJadenCase", () => {
  it("should convert a string to Jaden Case", () => {
    const str = "How can mirrors be real if our eyes aren't real";
    const expected = "How Can Mirrors Be Real If Our Eyes Aren't Real";
    expect(toJadenCase(str)).to.equal(expected);
  });

  // Add more test cases to cover different scenarios (optional)
});
