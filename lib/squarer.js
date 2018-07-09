function squarer(input) {
    return input.filter(n => n % 2 === 1 && n > 3).map(n => n * n);
}

module.exports = squarer;