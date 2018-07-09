function getThoseNumbers(arr) {
    return arr.filter(n => n % 2)
        .map(n => n * n)
        .filter(n => n > 24);
}

module.exports = getThoseNumbers;