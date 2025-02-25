import {assert} from "chai";


describe('Basic tests', function() {
    it('noBoringZeros', function() {
        assert.strictEqual(noBoringZeros(1450), 145);
        assert.strictEqual(noBoringZeros(960000), 96);
        assert.strictEqual(noBoringZeros(1050), 105);
        assert.strictEqual(noBoringZeros(-1050), -105);
        assert.strictEqual(noBoringZeros(-105), -105);
        assert.strictEqual(noBoringZeros(0), 0);
    });
});

// Assuming noBoringZeros is defined elsewhere
function noBoringZeros(n) {
    if (n === 0) {
        return 0;
    }

    let str = String(n);
    while (str.endsWith('0')) {
        str = str.slice(0, -1);
    }
    return parseInt(str);
}