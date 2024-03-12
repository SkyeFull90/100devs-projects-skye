// Fetch using nasa apod api
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/search.json?title=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h3').innerText = data.docs[0].title
        document.querySelector('h4').innerText = data.docs[0].author_name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

