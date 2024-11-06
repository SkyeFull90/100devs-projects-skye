const chai = require('chai');
const expect = chai.expect;
const solution = require("../strEndsWith.cjs")

describe("solution", () => {
  it("should return true if the first argument ends with the second argument", () => {
    expect(solution('abcde', 'cde')).to.be.true;
    expect(solution('abcde', 'abc')).to.be.false;
  });
});