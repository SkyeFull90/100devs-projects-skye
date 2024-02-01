const sayings = [
    "Purrfect!",
    "Meowtstanding!",
    "Pawsome!",
    "Furrbulous!",
    "Purrhaps the cutest kitten ever!",
    "Just claw-some!",
    "Feline good!",
    "Purr-fection!",
    "Meow-velous!",
    "Pawsitively adorable!"
];

let counter = 0;
let intervalId;

function createPost(imageUrl) {
    const post = document.createElement('div');
    post.className = 'post';
    const img = document.createElement('img');
    img.src = imageUrl;
    post.appendChild(img);
    const p = document.createElement('p');
    p.textContent = sayings[counter];
    post.appendChild(p);
    document.getElementById('blog').appendChild(post);
}

function fetchKitten() {
    fetch('https://cataas.com/cat') // replace with the actual API endpoint
        .then(response => response.blob())
        .then(images => {
            var outside = URL.createObjectURL(images);
            createPost(outside);
            counter++;
            if (counter === sayings.length) {
                clearInterval(intervalId);
            }
        })
        .catch(error => console.error(error));
}

// Fetch a new kitten every 5 seconds
intervalId = setInterval(fetchKitten, 5000);

// Fetch a kitten as soon as the page loads
fetchKitten();