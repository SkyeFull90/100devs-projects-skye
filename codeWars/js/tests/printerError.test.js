import printerError from '../printerError.js';
import { assert } from 'chai';

describe("printerError",function() {
    it("Basic tests",function() {   
        var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
        assert(printerError(s), "3/56")
    })})