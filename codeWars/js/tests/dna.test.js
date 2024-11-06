const chai = require("chai");
const assert = chai.assert;
const dnaStrand = require("../dna.cjs")
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(dnaStrand("AAAA"),"TTTT","String AAAA is")
    assert.strictEqual(dnaStrand("ATTGC"),"TAACG","String ATTGC is")
    assert.strictEqual(dnaStrand("GTAT"),"CATA","String GTAT is")
  })
})
