const chai = require('chai');
const hoopCount = require('../hoopCnt.cjs')
const expect = chai.expect;

describe("Tests", () => {
  it("test", () => {
    expect(hoopCount(3)).to.equal("Keep at it until you get it");
    expect(hoopCount(11)).to.equal("Great, now move on to tricks");
  });
});
