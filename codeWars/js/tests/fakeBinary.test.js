import {describe, it} from 'bun:test';
// import {describe, it} from 'mocha';
import {assert as _assert, config} from 'chai';

const assert = _assert;
config.truncateThreshold = 0;
import fakeBin from "../fakeBinary.js";

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
    assert.strictEqual(fakeBin('509321967506747'), '101000111101101');
    assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
  })
});