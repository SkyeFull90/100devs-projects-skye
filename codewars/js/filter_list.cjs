function filter_list(l){
    return l.filter(x => typeof x === "number");
}
console.log(filter_list([1,2,'a','b'])); // [1,2]

module.exports = filter_list;