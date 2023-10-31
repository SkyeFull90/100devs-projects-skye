//Create an array of movie titles. Loop through the array and each element to the h2.

function movieArr (){
    let movieTitles = ['fight to the finish ', ' shrek ', ' minions']

    for(let i = 0; i < movieTitles.length; i++){
        document.querySelector('h2').innerText += movieTitles[i]
    }
}
movieArr();