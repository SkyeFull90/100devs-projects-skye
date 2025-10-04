//Make an api request using async await
document.querySelector('button').addEventListener('click', getDog)

async function getDog(){
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    document.querySelector('img').src = data.message
}
//Make an api request using promises
// document.querySelector('button').addEventListener('click', getDog)

// function getDog(){
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(res => res.json())
//     .then(data => {
//         document.querySelector('img').src = data.message
//     })
// }

//Make an api request using reqres.append('field', value);
// document.querySelector('button').addEventListener('click', getDog)

// function getDog(){
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
//     xhr.onload = function(){
//         if(xhr.status === 200){
//             const data = JSON.parse(xhr.responseText)
//             document.querySelector('img').src = data.message
//         } else {
//             console.log('Error: ' + xhr.status)
//         }
//     }
//     xhr.send()
// }