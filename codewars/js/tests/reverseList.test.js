import { reverseList } from '../reverseList.js'; // Path to your module
import { expect } from 'chai';

describe("reverseList", function() {
    it("should reverse some sample arrays", function() {
        expect(reverseList([1, 2, 3, 4])).to.deep.equal([4, 3, 2, 1]);
        expect(reverseList([3, 1, 5, 4])).to.deep.equal([4, 5, 1, 3]);
    });

    it("should handle other cases", function() {
        expect(reverseList([])).to.deep.equal([]);
        expect(reverseList([1])).to.deep.equal([1]);
        expect(reverseList(['a','b','c'])).to.deep.equal(['c','b','a']);
    });
});