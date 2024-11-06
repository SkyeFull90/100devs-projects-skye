function uniqueInOrder(iterable) {
    const result = [];
    let lastItem;

    for(const item of iterable){
        if (item !== lastItem) {
            result.push(item);
            lastItem = item;
        }
    }
    return result;
}

console.log(uniqueInOrder('ahahahghggjhgjhg'))
module.exports = uniqueInOrder;