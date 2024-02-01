function createPost(imageUrl) {
    const post = document.createElement('div');
    post.className = 'post';
    const img = document.createElement('img');
    img.src = imageUrl;
    post.appendChild(img);
    document.getElementById('blog').appendChild(post);
}

function fetchKitten() {
    fetch('https://placekitten.com/200/300') // replace with the actual API endpoint
        .then(response => response.blob())
        .then(images => {
            var outside = URL.createObjectURL(images);
            createPost(outside);
        })
        .catch(error => console.error(error));
}
