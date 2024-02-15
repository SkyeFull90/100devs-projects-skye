const { assert } = require('chai');
const getRealFloor = require('../getRealFloor.cjs');

describe("Tests", () => {
    it("test", () => {
      assert.strictEqual(getRealFloor( 1),  0);
      assert.strictEqual(getRealFloor( 5),  4);
      assert.strictEqual(getRealFloor(15), 13);
      assert.strictEqual(getRealFloor(-2), -2);
    });
  });
  