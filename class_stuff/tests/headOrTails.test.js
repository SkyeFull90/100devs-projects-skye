import {expect as _expect} from 'chai';

const expect = _expect;
import headsTails from '../classWork/headTails.js';

describe('headsTails function', function() {
    it('should return either "heads" or "tails"', function() {
        const result = headsTails(5);
        expect(result).to.satisfy((s) => s === 'heads' || s === 'tails');
    });
});