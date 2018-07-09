const assert = require('assert');
const { squares } = require('../lib/array');

describe('Array Test', () => {

    describe('Returns a new array that contains the square of the values', () => {
        const arr = [2, 3, 4];
        const result = squares(arr);
        assert.deepEqual(result, [4, 9, 16]);
    });

});