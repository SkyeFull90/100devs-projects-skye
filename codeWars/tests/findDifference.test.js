import chai from "chai";
import {describe, it} from "bun:test";

const assert = chai.assert;
chai.config.truncateThreshold=0;
const findDifference1 = require("../findDifference.js");

describe("Tests", function(){
  it("Basic tests", function(){
    assert.strictEqual(findDifference1([3, 2, 5], [1, 4, 4]), 14);
    assert.strictEqual(findDifference1([9, 7, 2], [5, 2, 2]), 106);
    assert.strictEqual(findDifference1([11, 2, 5], [1, 10, 8]), 30);
    assert.strictEqual(findDifference1([4, 4, 7], [3, 9, 3]), 31);
    assert.strictEqual(findDifference1([15, 20, 25], [10, 30, 25]), 0);
  });
});