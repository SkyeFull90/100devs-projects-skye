const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const repeatStr = require("../repeatStr");

describe("Tests", function() {
  it ("Basic tests", function() {
    assert.strictEqual(repeatStr(3, "*"), "***");
    assert.strictEqual(repeatStr(5, "#"), "#####");
    assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
  });
});