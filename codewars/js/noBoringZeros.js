function noBoringZeros(n) {
    // your code
    return Number(n.toString().replace(/0+$/, ''))
}

console.log(noBoringZeros(1450));