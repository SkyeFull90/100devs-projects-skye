import {expect as _expect} from 'chai';
import isSquare from '../isSquare.cjs';
const expect = _expect;

describe("isSquare", function() {
    it("should work for some examples", function() {
        expect(isSquare(-1)).to.equal(false);
        expect(isSquare(0)).to.equal(true);
        expect(isSquare(3)).to.equal(false);
        expect(isSquare(4)).to.equal(true);
        expect(isSquare(25)).to.equal(true);
        expect(isSquare(26)).to.equal(false);
    });
});