const assert = require('assert');
const squarer = require('../lib/squarer');

describe('squarer', () => {

    it('returns squares greater than 24 of odd numbers', () => {
        const input = [2, 3, 9, 12, 8, 5, 7];
        assert.deepEqual(squarer(input), [81, 25, 49]);
    });
    
    it('handles negative numbers in input', () => {
        const input = [-2, -3, -9, -12, -8, -5, -7];
        assert.deepEqual(squarer(input), [81, 25, 49]);
    });
    
});