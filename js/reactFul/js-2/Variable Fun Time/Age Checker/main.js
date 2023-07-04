//Create a conditional that checks their age
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})    

function ageChecker(){
    rl.question('Enter your age: ', (age) => {
        let parsedAge = parseInt(age);
        //if under 16, tell them they can't drive
        if (parsedAge < 16){
            console.log('You can\'t drive')
        } 
        else {
            console.log('You can drive')
        }
        //if under 18, tell them they can't hate from outside the club, because they can't even get in
        if (parsedAge < 18){
            console.log('You can\'t hate from outside the club, because you can\'t even get in')
        } else {
            console.log('You can hate from outside the club, because you can get in')
        }
        //if under 21, tell them they can't drink
        if (parsedAge < 21){
            console.log('You can\'t drink')
        } else {
            console.log('You can drink')
        }
        //if under 25, tell them they can't rent cars affordably
        if (parsedAge < 25){
            console.log('You can\'t rent cars affordably')
        }else { 
            console.log('You can rent cars affordably')
        }
        //if under 30, tell them they can't rent fancy cars affordably
        if (parsedAge < 30){
            console.log('You can\'t rent fancy cars affordably')
        } else {
            console.log('You can rent fancy cars affordably')
        }
        //if under over 30, tell them there is nothing left to look forward to
        if (parsedAge > 30){
            console.log('There is nothign left to look forward to, expect retirement and death')
        }else {
            console.log('You have a lot to look forward to')
        }
        if (parsedAge > 116){
            console.log('You are the oldest person alive, how are you still alive. Are you even human.')
        }else {
            console.log('You just old')
        }
        rl.close();
    })
} 
ageChecker();
