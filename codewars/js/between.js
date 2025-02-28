function between(a, b){
    //a < b and return an array of integers
    let arr = [];
   for(let i = a; i <= b; i++){
       arr.push(i);
   }
   return arr;
}

console.log(between(1, 10));

export default between;