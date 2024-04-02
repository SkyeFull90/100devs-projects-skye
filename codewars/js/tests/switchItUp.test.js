import {assert} from "chai";
//simport switchItUp from "../../wrk_codewars/switchIt.js"
import switchItUp from "../switchItUp.cjs";

describe("Basic Tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(switchItUp(1),"One");
    assert.strictEqual(switchItUp(3),"Three");
    assert.strictEqual(switchItUp(5),"Five");
  });
});
