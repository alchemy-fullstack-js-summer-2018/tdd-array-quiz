const assert = require('assert');
const getThoseNumbers = require('../lib/function');

describe('quiz function', () => {

    it('squares odds and only shows numbers over 24', () => {
        let numbers = [2, 3, 9, 12, 8, 5, 7];
        let newNumbers = getThoseNumbers(numbers);
        assert.deepEqual(newNumbers, [81, 25, 49]);
    });

    it('squares odds and only shows numbers over 24 but with a new array for testing purposes', () => {
        let numbers2 = [15, 87, 1, 2, 0, 66, 33];
        let newerNumbers = getThoseNumbers(numbers2);
        assert.deepEqual(newerNumbers, [225, 7569, 1089]);
    });
});