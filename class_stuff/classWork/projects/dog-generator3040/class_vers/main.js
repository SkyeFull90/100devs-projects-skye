// main.js
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('generate').addEventListener('click', generateRandomDog);
});

function generateRandomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            let dogImage = document.getElementById('dog');
            dogImage.src = data.message;
        })
        .catch(error => console.error(error));
}