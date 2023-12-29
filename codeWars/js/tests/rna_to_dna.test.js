const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const DNAtoRNA = require("../rna_to_dna.js");

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
    assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
    assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
    });
  })