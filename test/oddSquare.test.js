const assert = require('assert');
const oddSquare = require('../lib/oddSquare');

describe('Array function', () => {
    let numbers = [2, 3, 9, 12, 8, 5, 7];

    // it('returns only the odd numbers in an array', () => {
    //     const result = oddSquare(numbers);
    //     assert.deepEqual(result, [3, 9, 5, 7]);
    // });

    // it('squares the odd numbers in an array', () => {
    //     const result = oddSquare(numbers);
    //     assert.deepEqual(result, [9, 81, 25, 49]);
    // });

    it('only returns the squares of odd numbers that are greater than 24', () => {
        const result = oddSquare(numbers);
        assert.deepEqual(result, [81, 25, 49]);
    });
});