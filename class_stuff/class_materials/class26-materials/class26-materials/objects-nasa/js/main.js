//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// main.js
const apiKey = 'DEMO_KEY'; // replace with your API key
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        // use the data here
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
