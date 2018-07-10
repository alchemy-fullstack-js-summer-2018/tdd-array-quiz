const squarer = (input) => input.map(n => n * n).filter(n => n % 2 === 1 && n > 24);

module.exports = squarer;