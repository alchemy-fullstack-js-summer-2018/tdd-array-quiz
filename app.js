const result = [];

function oddSquares(arr) {
    const isOdd = x => x % 2 !== 0;
    

    for(let i=0; i < arr.length; i++) {
        if arr[i] === isOdd {
            result.push(result[i])
        }
    }
    return result;
}


module.exports = { 
    oddSquares 
};