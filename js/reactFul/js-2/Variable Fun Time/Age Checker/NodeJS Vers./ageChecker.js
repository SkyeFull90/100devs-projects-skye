const readline = require("readline");


//ask user to enter a number for age, to validate
function ageChecker(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
     rl.question("Enter in a number: ", age =>{
        age = parseInt(age);
        if(isNaN(age)){
            console.log('invalid input, try again')
        } 
        else {
           if (age >= 16){
                console.log('You can\'t drive')
            }
            else {
                console.log('You can drive')
            }
            //if under 18, tell them they can't hate from outside the club, because they can't even get in
            if (age <= 18){
                console.log('You can\'t hate from outside the club, because you can\'t even get in')
            } else {
                console.log('You can hate from outside the club, because you can get in')
            }
            //if under 21, tell them they can't drink
            if (age <= 21){
                console.log('You can\'t drink')
            } else {
                console.log('You can drink')
            }
            //if under 25, tell them they can't rent cars affordably
            if (age <= 25){
                console.log('You can\'t rent cars affordably')
            }else {
                console.log('You can rent cars affordably')
            }
            //if under 30, tell them they can't rent fancy cars affordably
            if (age <= 30){
                console.log('You can\'t rent fancy cars affordably')
            } else {
                console.log('You can rent fancy cars affordably')
            }
            //if under over 30, tell them there is nothing left to look forward to
            if (age >= 30){
                console.log('There is nothing left to look forward to, expect retirement and death')
            }else {
                console.log('You have a lot to look forward to')
            }
            if (age >= 116){
                console.log('You are the oldest person alive, how are you still alive. Are you even human.')
            }else {
                console.log('You just old')
            }
            rl.close();
        }
    })
} 
module.exports = ageChecker;
