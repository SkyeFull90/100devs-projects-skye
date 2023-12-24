//Create a mouse object that has four properties and three methods
//without using a constructor function
let mouse = {};
mouse.brand = "Logitech";
mouse.color = "black";
mouse.model = " MX Master 3s";
mouse.wireless = true;
mouse.buttons = 5;

mouse.click = function () {
    console.log("click");
    };
mouse.scroll = function () {
    console.log("scroll");
    }
mouse.move = function () {
    console.log("move");
    }
console.log(mouse);

//now as a constructor function
function Mouse(brand, color, model, wireless, buttons) {
    this.brand = brand;
    this.color = color;
    this.model = model;
    this.wireless = wireless;
    this.buttons = buttons;
    this.click = function () {
        console.log("click");
        };
    this.scroll = function () {
        console.log("scroll");
        }
    this.move = function () {
        console.log("move");
        }
}
let mouse1 = new Mouse("Logitech", "black", "MX Master 3s", true, 5);
console.log(mouse1);