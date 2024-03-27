import { expect } from "chai";
import  getMiddle  from "../getMiddle.cjs";

describe("GetMiddle", function() {
  it("Tests", function() {
    expect(getMiddle("test")).to.equal("es");
    expect(getMiddle("testing")).to.equal("t");
    expect(getMiddle("middle")).to.equal("dd");
    expect(getMiddle("A")).to.equal("A");
  });
});