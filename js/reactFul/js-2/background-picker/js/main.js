function partyPurple() {
    document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
    document.querySelector('body').style.color = 'white'
}

document.getElementById('purple').onclick = partyPurple

function partyGreen() {
    document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
    document.querySelector('body').style.color = 'white'
}

document.getElementById('green').onclick = partyGreen

function partyBlue() {
    document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
    document.querySelector('body').style.color = 'white'
}

document.getElementById('blue').onclick = partyBlue

function clearSection() {
    document.querySelector('body').style.backgroundColor = 'white'
    document.querySelector('body').style.color = 'black'
}

document.getElementById('clear').onclick = clearSection