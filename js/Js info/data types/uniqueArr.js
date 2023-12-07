function unique(arr6){
    let arr7 = [];
    for(let i = 0; i < arr6.length; i++){
        if(arr7.indexOf(arr6[i]) === -1){
            arr7.push(arr6[i]);
        }
    }
    return arr7;
}
console.log(unique(["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"])); // ["Hare", "Krishna", ":-O"]
let strings = ["Krishna", "Krishna", "Hare", "Hare"];
unique(strings);
console.log(strings); // ["Krishna", "Krishna", "Hare", "Hare"]

