const assert = (require('assert');


describe('Square Odd numbers of Array', () => {

    it('SquareOdd', () => {
        const arr1 = [2, 3, 9, 12, 8, 5, 7];
        const arr2 = squareOdd(arr1, (item) => {
            if (item % 2 === 1)
            return  item * 2;
    });
    assert.deepEqual(arr2, [81, 25, 49]);

});