import {assert as _assert} from "chai";
import rot13 from "../rot13.js";
const assert = _assert;

describe("Tests", function() {
    it("Sample tests", function() {
        for (const [input, expected] of [["test", "grfg"], ["Test", "Grfg"]]) {
            assert.strictEqual(rot13(input), expected, `Test failed with messsage = '${input}'`);
        }
    });
});
