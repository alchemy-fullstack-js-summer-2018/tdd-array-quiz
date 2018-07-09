module.exports = function powers(arr) {
    let list = arr.filter(m => m % 2 === 0);
    list.forEach(n => n * n);
    const results = list.filter(n => n > 24);
    return results;
};

