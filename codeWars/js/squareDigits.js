export default function squareDigits(num) {
//may the code be with you
    let numStr = num.toString();
    let result = "";
    for (let i = 0; i < numStr.length; i++) {
        result += Math.pow(parseInt(numStr[i]), 2);
    }
    return parseInt(result)
}
console.log(squareDigits(3212));
