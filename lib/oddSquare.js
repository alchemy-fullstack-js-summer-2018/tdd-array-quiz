module.exports = function oddSquare(arr) {
    return arr
        .filter(num => num % 2 === 1)
        .map(num => num * num);
};