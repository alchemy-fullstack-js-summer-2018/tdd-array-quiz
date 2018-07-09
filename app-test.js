const assert = require('assert');
const { oddSquares } = require('app.js');

describe('oddSquares', () => {
    //define array
    const result =  [2, 3, 5, 15, 23, 26, 32, 48, 57];
    
    const isOdd = x => x % 2 !== 0;
    
    it('returns only the odd numbers', () => {
        assert.equal(result, [3, 5, 15, 23, 57]);
    });

    it('Squares each number where the square will exceed 24')

});