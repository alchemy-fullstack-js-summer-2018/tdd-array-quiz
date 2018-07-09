const assert = require('assert');
const oddSquare = require('../lib/oddSquare');

describe('Array function', () => {
    let numbers = [1, 2, 6, 9, 13];
    it('gets only the odd numbers in an array', () => {
        const result = oddSquare(numbers);
        assert.deepEqual(result, [1, 9, 13]);
    });
});