const synth = window.speechSynthesis;
document.querySelector('#yell').addEventListener('click', run)

function run() {
    const fName = document.querySelector('#firstName').value
    const fMiddleName = document.querySelector('#firstMiddle').value
    const lLastMiddleName = document.querySelector('#lastMiddle').value
    const lName = document.querySelector('#lastName').value
    const yellText = `${fName} ${fMiddleName} ${lLastMiddleName} ${lName}`
    //document.querySelector('#placeToYell').innerText = fName + ' ' + fMiddleName + ' ' + ' ' + lLastMiddleName + ' ' + lName
    document.querySelector('#placeToYell').innerText = yellText
    
    //Add what you should be doing here - conditionals here
    let yellThis = new SpeechSynthesisUtterance(yellText)

    synth.speak(yellThis)
}