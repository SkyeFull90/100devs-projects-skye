import {assert as _assert, config} from "chai";
import getAge from "../getAge.cjs";

const assert = _assert;
config.truncateThreshold=0;

describe("Basic tests",() =>{
    it("Testing for fixed tests", () => {
        assert.strictEqual(getAge("4 years old"), 4);
        assert.strictEqual(getAge("9 years old"), 9);
        assert.strictEqual(getAge("1 year old"), 1);
    })
})