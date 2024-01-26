//Example fetch using pokemonapi.co
/*document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
*/

document.querySelector('#get-cocktail').addEventListener('click', () => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => {
      const cocktail = data.drinks[0];

      document.querySelector('#cocktail-name').textContent = cocktail.strDrink;
      document.querySelector('#cocktail-photo').src = cocktail.strDrinkThumb;
      document.querySelector('#cocktail-instructions').textContent = cocktail.strInstructions;
    })
    .catch(err => console.log(err));
});