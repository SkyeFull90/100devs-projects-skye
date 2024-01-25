//Create a constructor with 4 properties and 3 methods
function PizzaMachine(name, size, price, toppings, sauce) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.toppings = toppings;
    this.sauce = sauce;
    this.addTopping = function (topping) {
        this.toppings.push(topping);
    }
    this.removeTopping = function (topping) {
        this.toppings.splice(this.toppings.indexOf(topping), 1);
    }
    this.changePrice = function (newPrice) {
        this.price = newPrice;
    }
}
let pizza1 = new PizzaMachine("Pepperoni", "Large", 15, ["Pepperoni", "Cheese", "Sausage"], "Marinara");
console.log(pizza1);