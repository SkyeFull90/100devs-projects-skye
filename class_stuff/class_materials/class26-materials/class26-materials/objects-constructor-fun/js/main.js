//Create a constructor with 4 properties and 3 methods
function PizzaMachine(name, size, price, toppings) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.toppings = toppings;
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