const assert = require('assert');
const oddSquare = require('../lib/oddSquare');

describe('Array function', () => {
    let numbers = [2, 3, 9, 12, 8, 5, 7];
    let oddNumbers = [5, 6, 7, 8, 9];

    // it('returns only the odd numbers in an array', () => {
    //     const result = oddSquare(numbers);
    //     assert.deepEqual(result, [3, 9, 5, 7]);
    // });

    it('squares the odd numbers in an array', () => {
        const result = oddSquare(oddNumbers);
        assert.deepEqual(result, [25, 49, 81]);
    });

    it('only returns the squares of odd numbers that are greater than 24', () => {
        const result = oddSquare(numbers);
        assert.deepEqual(result, [81, 25, 49]);
    });

    it('checks whether greater than equal to 5 first', () => {
        const result = oddSquare(numbers);
        assert.deepEqual(result, [81, 25, 49]);
    });
});