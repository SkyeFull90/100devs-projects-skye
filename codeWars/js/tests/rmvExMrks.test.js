const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const  removeExclamationMarks  = require("../rmvExMrks");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
  });
});
