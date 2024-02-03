let drinks = [];
        let currentDrinkIndex = 0;

        function fetchDrinks() {
            fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
                .then(response => response.json())
                .then(data => {
                    drinks = data.drinks;
                    displayDrink();
                });
        }

        function displayDrink() {
            const drink = drinks[currentDrinkIndex];
            document.getElementById('drink-image').src = drink.strDrinkThumb;
            document.getElementById('drink-name').textContent = drink.strDrink;
        }

        function rotateDrinks() {
            currentDrinkIndex = (currentDrinkIndex + 1) % drinks.length;
            displayDrink();
        }

        fetchDrinks();
        setInterval(rotateDrinks, 2000);  // Rotate every 2 seconds