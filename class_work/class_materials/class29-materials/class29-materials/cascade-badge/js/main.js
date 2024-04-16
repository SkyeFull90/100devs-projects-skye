//Arrays
//Your Pokémon party order which is a list of Pokémon has been leaked to Misty.
// Please create a function that reverses your list and prints it to the console.
function reversePokemonOrder(pokemonParty) {
    return pokemonParty.reverse();
}
console.log(reversePokemonOrder(["Pikachu", "Charmander", "Bulbasaur", "Squirtle"]));
//Given two integer arrays a, b, both of lengths >= 1,
// create a program that returns true
// if the sum of the squares of each element in an is strictly greater than the sum of the cubes of each element in b.
function sumOfSquaresIsGreaterThanCubes(a, b) {
   return a.reduce((acc, num) => acc + num ** 2, 0) > b.reduce((acc, num) => acc + num ** 3, 0);
}
console.log(sumOfSquaresIsGreaterThanCubes([1, 2, 3], [1, 2, 3]));
//Return a new array consisting of elements which are multiple of their own index in an input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function multipleOfIndex(array) {
    return array.filter((num, index) => num % index === 0);
}
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function sumMix(x) {
    return x.reduce((acc, num) => acc + parseInt(num), 0);
}
console.log(sumMix([9, 3, '7', '3']));