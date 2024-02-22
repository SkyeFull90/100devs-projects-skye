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
      
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
