import uniqueInOrder from "../uniqueInOrder.cjs"
import { assert } from 'chai';

describe("Tests", () => {
    it("test", () => {
      assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
    });
  });
  
  