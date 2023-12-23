const expect = require('chai').expect;
const sum = require('../sum');

describe('sumAll', () => {
    it('should sum numbers', () => {
        expect(sum([1, 5.2, 4, 0, -1])).to.equal(9.2);
        expect(sum([])).to.equal(0);
        expect(sum([-2.398])).to.equal(-2.398);
    });
});