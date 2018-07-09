const assert = require('assert');
const oddSquare = require('../lib/oddSquare');

describe('Array function', () => {
    let numbers = [2, 3, 9, 12, 8, 5, 7];

    it('squares the odd numbers in an array', () => {
        const result = oddSquare(numbers);
        assert.deepEqual(result, [9, 81, 25, 49]);
    });
});