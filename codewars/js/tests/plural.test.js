const {expect} = require('chai')
const plural = require('../plural.cjs')

describe('test plural', () => { 
    it('should return correct plural values', () => {
        expect(plural(0)).to.be.true;
        expect(plural(0.5)).to.be.true;
        expect(plural(1)).to.be.false;        
        expect(plural(100)).to.be.true;
        expect(plural(Infinity)).to.be.true;
    })
 })