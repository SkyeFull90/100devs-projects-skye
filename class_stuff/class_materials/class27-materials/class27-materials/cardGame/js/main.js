//Create a button that fetches a new deck from the deck of cards API and stores the deck id in localStorage

let deckId = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        deckId = data.deck_id
        localStorage.setItem('deckId', deckId)
    })
    .catch(err => { 
        console.log(`error ${err}`)
    });

document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){
  
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player2').src = data.cards[1].image

        let player1 = convertNum(data.cards[0].value) 
        let player2 = convertNum(data.cards[1].value) 

        if(player1 === player2){
          document.querySelector('h2').innerText = 'It\'s a tie!'
        } else if(player1 > player2){
          document.querySelector('h2').innerText = 'Player 1 wins!'
        } else {
          document.querySelector('h2').innerText = 'Player 2 wins!'
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function convertNum(val){
  if(val === 'JACK'){
    return 11
  } else if(val === 'QUEEN'){
    return 12
  } else if(val === 'KING'){
    return 13
  } else if(val === 'ACE'){
    return 14
  } else {
    return Number(val)
  }
}
