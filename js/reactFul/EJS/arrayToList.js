function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

console.log(arrayToList([10, 20]));  // Outputs: {value: 10, rest: {value: 20, rest: {value: 3, rest: null}}}