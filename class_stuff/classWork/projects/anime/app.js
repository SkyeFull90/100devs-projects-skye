document.getElementById('spin').addEventListener('click', function() {
    fetch('https://animechan.xyz/api/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').textContent = `"${data.quote}" - ${data.character}, ${data.anime}`;
        })
        .catch(error => console.error(error));
});