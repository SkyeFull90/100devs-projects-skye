//Example fetch using DnD5eAPI - place subclasses in ul

 document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
   
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data)
          console.log(data.subclasses)
        data.subclasses.forEach(element => {
            console.log(element)
            const li = document.createElement('li')
            li.innerText = element.name
            document.querySelector('#sub-class').appendChild(li)
        });
          document.querySelector('h2').innerText = data.name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
