import {assert} from "chai";
import getCount from "../getCount.js";

describe("Vowels Count Tests",function(){
    it("should return 5 for 'abracadabra'",function(){
        assert.strictEqual(getCount("abracadabra"), 5) ;
    });
});