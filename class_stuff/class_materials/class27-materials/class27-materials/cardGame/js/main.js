//Create a button that fetches a new deck from the deck of cards API and stores the deck id in localStorage

/*
document.querySelector('button').addEventListener('click', getDeck)

function getDeck(){
    const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            deckId = data.deck_id
            localStorage.setItem('deckId', deckId)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

//Create a button that fetches a new card from the deck of cards API and stores the card image in localStorage
document.querySelector('button').addEventListener('click', drawCard)

function drawCard(){
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            localStorage.setItem('cardImage', data.cards[0].image)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
    
*/
let deckId = ''

document.querySelector('button').addEventListener('click', drawTwoCards)

function drawTwoCards(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'video'){
          document.querySelector
          ('iframe').src = data.url
        }
        else{
          document.querySelector('img').src = data.hdurl
        }
        document.getElementById('explanation').innerText = data.explanation
        document.getElementById('title').innerText = data.title
        if(data.copyright){
          document.getElementById('copyright').innerText = data.copyright
        }
        else{
          document.getElementById('copyright').innerText = ''
        }
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
