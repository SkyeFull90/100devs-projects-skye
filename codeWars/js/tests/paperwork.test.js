const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const paperwork = require("../paperwork");

describe("Simple Tests", function(){
  it("Testing for fixed tests", () => {
    assert.strictEqual(paperwork(5,5), 25, 'Failed at paperwork(5, 5)');
    assert.strictEqual(paperwork(5,-5), 0, 'Failed at paperwork(5, -5)');
    assert.strictEqual(paperwork(-5,-5), 0, 'Failed at paperwork(-5, -5)');
    assert.strictEqual(paperwork(-5,5), 0, 'Failed at paperwork(-5, 5)');
    assert.strictEqual(paperwork(5,0), 0, 'Failed at paperwork(5, 0)');
  });
});
