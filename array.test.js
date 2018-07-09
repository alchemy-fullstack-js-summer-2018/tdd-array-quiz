const assert = require('assert');


describe('Array Test', () => {

    describe('Returns a new array that contains the square of the values', () => {
        const arr = [2, 3, 4];
        const result = squares(arr, (item) => item * item);
        assert.deepEqual(result, [4, 9, 16]);
    });

});