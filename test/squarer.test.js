const assert = require('assert');
const squarer = require('../lib/squarer');

describe('squarer', () => {

    const input = [2, 3, 9, 12, 8, 5, 7];

    it('squares odd numbers greater than 3', () => {
        assert.deepEqual(squarer(input), [81, 25, 49]);
    });
});