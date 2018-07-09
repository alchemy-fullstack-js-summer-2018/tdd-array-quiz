
function arrayMethod() {
    let numbers = [2, 3, 9, 12, 8, 5, 7];
    //filter odd numbers

    //map squared numbers of all odd numbers
    let newNum = numbers.map((n) => n);
    //filter out squares less than 24

    return newNum;
}

module.exports = {
    arrayMethod
};