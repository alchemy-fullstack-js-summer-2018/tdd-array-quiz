const assert = require('assert');
const createPowers = require('./createPowers');

describe('tdd-array-test', () => {
    const arr = [2, 3, 5, 7, 8];
    
    it('returns odd powers greater than 24', () => {
        return createPowers(arr)
            .then(result => {
                assert.equal(result, [25, 49]);
            });
    });
});