import findOdd from './oddInt.js';

const testCases = [
    { input: [7], expected: 7 },
    { input: [0], expected: 0 },
    { input: [1, 1, 2], expected: 2 },
    { input: [0, 1, 0, 1, 0], expected: 0 },
    { input: [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1], expected: 4 }
];

testCases.forEach(({input, expected}) => {
    const result = findOdd(input);
    console.log(`Input: [${input}], Expected: ${expected} (${typeof expected}), Got: ${result} (${typeof result})`);
    if (result !== expected) {
        console.error(`FAILED: result ${result} is not strictly equal to ${expected}`);
    } else {
        console.log(`PASSED`);
    }
});
