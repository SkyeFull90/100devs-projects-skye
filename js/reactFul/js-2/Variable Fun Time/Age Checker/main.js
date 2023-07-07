//Create a conditional that checks their age
//-- see NodeJS Vers.
//--- harder challenge
//onclick of the h1
document.querySelector('#checkAge').addEventListener('click', ageChecker)
//take the value from the input box
function ageChecker(){
    const age = parseFloat(document.querySelector('#danceDanceRevolution').value)

    //Place into the result of conditional in paragraph
    if(age <16){
        document.querySelector('#validatedAge').innerText = "You can't drive"
    }

    else{
        document.querySelector('#validatedAge').innerText = "You can drive"
    }
}
