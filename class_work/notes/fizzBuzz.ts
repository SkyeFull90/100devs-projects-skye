function fizzBuzz(num: number): string[] {
    let answer: string[] = [];
    //loop
    for(let i = 1; i<= num; i++){
    //conditions % 3&5, % 3, % 5
        if(i % 3 && i % 5){
            answer.push("FizBuzz")
        } else if(i % 3){
            answer.push("Fizz")
        }
    }
    //console log the result
    return answer;
}
console.log(fizzBuzz(5))

console.log(fizzBuzz(3))

console.log(fizzBuzz(15))
