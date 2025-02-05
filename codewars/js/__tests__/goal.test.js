import "mocha"
import { assert } from 'chai';
import goals from '../goals.cjs';

it('should add all goals', () => {
    assert.strictEqual(goals(0,0,0),0)
    assert.strictEqual(goals(0,4,9),13)
})