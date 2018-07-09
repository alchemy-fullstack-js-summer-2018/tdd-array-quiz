const assert = require('assert');
const { arrayPower } = require('../lib/app');

describe('Array Method', () => {
    it('n * n`, or `Math.pow(n, 2)', () => {
        const array = [2, 3, 9, 12, 8, 7];
        const result = array.arrayPower();
        assert.deepEqual(result, [81, 25, 49]);
    });
});
