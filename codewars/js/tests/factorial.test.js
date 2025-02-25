import {assert} from "chai";

import factorial from "../factorial.js"; // Adjust the path as needed
describe('Tests', () => {
    it('test', () => {
        assert.strictEqual(factorial(0), 1, 'factorial for 0 is 1');
        assert.strictEqual(factorial(1), 1, 'factorial for 1 is 1');
        assert.strictEqual(factorial(2), 2, 'factorial for 2 is 2');
        assert.strictEqual(factorial(3), 6, 'factorial for 3 is 6');
    });
});