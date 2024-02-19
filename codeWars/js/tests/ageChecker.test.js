const { assert } = require("chai")
const  peopleWithAgeDrink  = require("../ageChecker")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(peopleWithAgeDrink(22), 'drink whisky');
    })
  })