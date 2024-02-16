//Create a button that adds 1 to a botScore stored in localStorage 

document.querySelector('button').addEventListener('click', addScore)

function addScore(){
    let botScore = localStorage.getItem('botScore')
    botScore++
    localStorage.setItem('botScore', botScore)
    document.getElementById('botScore').innerText = botScore
    }

let botScore = localStorage.getItem('botScore')
if(botScore === null){
    localStorage.setItem('botScore', 0)
    botScore = 0
}
document.getElementById('botScore').innerText = botScore


