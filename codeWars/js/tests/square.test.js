import square from "../square.cjs";

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(square(3), 9);
  });
});
