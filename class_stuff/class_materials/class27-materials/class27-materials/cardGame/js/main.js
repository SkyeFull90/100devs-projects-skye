//Create a button that fetches a new deck from the deck of cards API and stores the deck id in localStorage
let deckId = ''

document.querySelector('button').addEventListener('click', fetchDeck)

function fetchDeck(){
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => response.json())
    .then(data => {
        deckId = data.deck_id
        console.log(data)
        localStorage.setItem('deckId', deckId)
    })
}
//Create a button that draws 2 cards from the deck in localStorage and stores the drawn cards in localStorage




