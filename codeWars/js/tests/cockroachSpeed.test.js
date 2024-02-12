const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const cockroachSpeed = require("../cockroachSpeed");

describe("Basic Tests", function() {
  it("Testing for fixed tests", () => {
    assert.strictEqual(cockroachSpeed(1.08), 30);
    assert.strictEqual(cockroachSpeed(1.09), 30);
    assert.strictEqual(cockroachSpeed(0), 0);
  });
});
