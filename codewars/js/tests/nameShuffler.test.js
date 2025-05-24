import nameShuffler from "../nameShuffler.js";
import {assert as _assert, config} from "chai";

const assert = _assert;
config.truncateThreshold=0;

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(nameShuffler('john McClane'),'McClane john');
        assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
        assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')
    });
});