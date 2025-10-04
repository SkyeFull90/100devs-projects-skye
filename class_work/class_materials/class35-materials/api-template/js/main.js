//Make an api request using async await
document.querySelector('button').addEventListener('click', getDog)

async function getDog(){
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    document.querySelector('img').src = data.message
}
