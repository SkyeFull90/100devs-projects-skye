//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
/*
function multiplyArray(array){
    let product = 1;
    for(let i = 0; i < array.length; i++){
        product *= array[i];
    }
   // alert(product);
    console.log(product);
}
multiplyArray([1,2,3,4,5,6,7,8,9,10]);
*/
function multiNumsArr(arr){
    let product = 1;
    arr.forEach( num => product *= num);
    console.log(product);
}
multiNumsArr([10,3,2])