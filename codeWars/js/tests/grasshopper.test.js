import { findAverage } from "../grasshopper";
const {assert} = require('chai');

describe('Get average', function () {
    it('Should return the average', function () {
        assert.approximately(findAverage([1]), 1, 1e-9);
        assert.approximately(findAverage([1, 3, 5, 7]), 4, 1e-9);
    });
});