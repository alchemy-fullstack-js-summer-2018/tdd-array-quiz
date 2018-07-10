function squareOddNums(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 1) {
            let square = arr[i] * arr[i];
            if(square > 24) {
                newArr.push(square);
            }
        }    
    }
    return newArr;
}

module.exports = { squareOddNums };

