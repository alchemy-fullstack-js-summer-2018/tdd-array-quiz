const assert = require('assert');
const { arrayMethod } = require('../lib/array-methods');

describe('array methods', () => {

    let numbers = [2, 3, 9, 12, 8, 5, 7];

    it('returns an array', () => {
        const newNum = arrayMethod(numbers, n => n);
        assert.deepEqual(newNum, numbers);
    });

    it.skip('returns a new array that contains the square of all the odd input, but only those squares that are greater than 24', () => {
        
    });
});