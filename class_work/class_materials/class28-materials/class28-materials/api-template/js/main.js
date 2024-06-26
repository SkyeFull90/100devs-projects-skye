// Fetch using nasa apod api
document.querySelector('button').addEventListener('click', getFetch)
 /*
  const url = `https://api.nasa.gov/planetary/apod?api_key=iJy0Nd4wZZzfW2HFgBkNV4DDUsZ6PxL3RqQRgFfI&date=2021-07-15`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data)
          if(data.media_type === "image"){
            document.querySelector('img').src = data.hdurl
      }
          else if(data.media_type === 'video'){
            document.querySelector('iframe').src = data.url
          }
          else{
            alert('Media Not Supported - Contact NASA IMMEDIATELY')
          }
      })
      .catch(err => {
          console.log(`error ${err}`)
      }
      );

*/
function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=iJy0Nd4wZZzfW2HFgBkNV4DDUsZ6PxL3RqQRgFfI&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === "image"){
          document.querySelector('img').src = data.hdurl
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
        }else{
          alert('Media Not Supported - Contact NASA IMMEDIATELY')
        }
       
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

