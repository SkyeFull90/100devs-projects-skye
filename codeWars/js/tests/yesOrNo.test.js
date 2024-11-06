import { assert } from 'chai';

function boolToWord(bool){
    return bool ? "Yes" : "No";
}

describe("Basic tests", () => {
    it('Testing for basic tests', () => {
        assert.strictEqual(boolToWord(true), "Yes")
        assert.strictEqual(boolToWord(false), "No")
    })
})