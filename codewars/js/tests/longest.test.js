import {assert} from "chai";

function longest(s1, s2) {
    const combined = s1 + s2;
    const uniqueChars = [...new Set(combined)].sort(); // Use Set for unique chars, then spread into array and sort
    return uniqueChars.join('');
}

describe("longest", function() {
    it("Basic tests", function() {
        assert.equal(longest("aretheyhere", "yestheyarehere"), "aehrsty");
        assert.equal(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu");
        assert.equal(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy");
    });
});