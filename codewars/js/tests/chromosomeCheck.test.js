import { assert } from 'chai';
import chromosomeCheck from "../chromosomeCheck.js";

describe("Tests", () => {
    it("test", () => {
        assert.equal(chromosomeCheck('XY'), "Congratulations! You're going to have a son.");
        assert.equal(chromosomeCheck('XX'), "Congratulations! You're going to have a daughter.");
    });
});
