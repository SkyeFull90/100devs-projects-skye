// Fetch using nasa apod api
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('h3').innerText = localStorage.getItem('title')

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        localStorage.setItem('title', (localStorage.getItem('title') ? localStorage.getItem('title') + ' ' : '') + data.title)
        document.querySelector('h3').innerText = localStorage.getItem('title')
        document.querySelector('h4').innerText = data.description
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}