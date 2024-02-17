function sumMix(x){
    return x.reduce((acc, val) => acc + Number(val), 0);
}
console.log(sumMix([9, 3, '7', '3'])); // 22

module.exports = sumMix;