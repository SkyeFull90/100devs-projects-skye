const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const rowSumOddNumbers = require("../rowSumOddNumbers");

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(rowSumOddNumbers(1), 1);
    assert.strictEqual(rowSumOddNumbers(42), 74088);
  });
});
