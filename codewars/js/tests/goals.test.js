const chai = require("chai");
const assert = chai.assert;
const goals = require("../goals.cjs")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(goals(0, 0, 0), 0);
    assert.strictEqual(goals(43, 10, 5), 58);
  });
});
