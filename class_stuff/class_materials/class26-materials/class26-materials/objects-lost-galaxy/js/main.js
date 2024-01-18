//Create a dog object that has four properties and three methods
function Dog(name, breed, age, color) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.color = color;
    this.bark = function () {
        console.log("Bark!");
    };
    this.eat = function () {
        console.log("Eat!");
    };
    this.sleep = function () {
        console.log("Sleep!");
    };
}