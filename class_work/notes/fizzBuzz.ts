function fizzbuzz(num: number): string[] {
    let answer: string[] = [];
    //loop
    for(let i = 1; i<= num; i++){
    //conditions % 3&5, % 3, % 5
        if(i % 3 && i % 5){
            answer.push("FizBuzz")
        } else if(i % 3){
            answer.push("Fizz")
        } else if(i % 5){
            answer.push("Buzz")
        } else {
            answer.push(i.toString())
        }
    }
    //console log the result
    return answer;
}
console.log(fizzbuzz(5))

console.log(fizzbuzz(3))

console.log(fizzbuzz(15))

export default fizzbuzz;