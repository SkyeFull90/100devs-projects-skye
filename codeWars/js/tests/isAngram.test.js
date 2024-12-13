import assert from 'assert';
import isAnagram from '../isAngram.js';

describe('isAnagram', () => {
    it('should return true for anagrams', () => {
        assert.strictEqual(isAnagram('foefet', 'toffee'), true, 'The word "foefet" is an anagram of "toffee"');
        assert.strictEqual(isAnagram('Buckethead', 'DeathCubeK'), true, 'The word "Buckethead" is an anagram of "DeathCubeK"');
        assert.strictEqual(isAnagram('Twoo', 'WooT'), true, 'The word "Twoo" is an anagram of "WooT"');
    });

    it('should return false for non-anagrams', () => {
        assert.strictEqual(isAnagram('dumble', 'bumble'), false, 'Characters do not match for test case "dumble", "bumble"');
        assert.strictEqual(isAnagram('ound', 'round'), false, 'Missing characters for test case "ound", "round"');
        assert.strictEqual(isAnagram('apple', 'pale'), false, 'Same letters, but different count');
    });
});