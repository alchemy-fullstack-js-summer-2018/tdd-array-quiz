const assert = require('assert');
const sqr = require('..lib/array-methods');

describe('array methods', () => {
    it('uses only the odd numbers from array and returns an array of squared numbers greater than 24', () => {
        const arr = [2, 3, 9, 12, 8, 5, 7];
        const result = sqr(arr);
        assert.deepEqual(result, [81, 25, 49]);

    });

});