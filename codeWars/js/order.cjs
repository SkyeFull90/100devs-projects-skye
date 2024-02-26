function order(words){
    return words.split(' ').sort(function(a, b){
            return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}
console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"

module.exports = order;