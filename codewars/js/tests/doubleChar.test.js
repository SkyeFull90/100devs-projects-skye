import {expect} from "chai";
import doubleChar from "../doubleChar.cjs";

describe("doubleChar", function() {
    it("works for some examples", function() {
        expect(doubleChar("abcd")).to.equal("aabbccdd");
        expect(doubleChar("Adidas")).to.equal("AAddiiddaass");
        expect(doubleChar("1337")).to.equal("11333377");
        expect(doubleChar("illuminati")).to.equal("iilllluummiinnaattii");
        expect(doubleChar("123456")).to.equal("112233445566");
        expect(doubleChar("%^&*(")).to.equal("%%^^&&**((");
    });
});