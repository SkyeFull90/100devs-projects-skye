//Create a button that fetches a new deck from the deck of cards API and stores the deck id in localStorage
let deckId = ''

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
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


