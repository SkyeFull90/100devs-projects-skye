//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function TonyHawkProSkater(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.kickflip = function () {
        console.log("Kickflip!");
    };
    this.grind = function () {
        console.log("Grinding!");
    };
    this.manual = function () {
        console.log("Manual!");
    };
}

let tonyHawk = new TonyHawkProSkater("Tony Hawk", 52, "6'3", 180);
console.log(tonyHawk);
tonyHawk.kickflip();
tonyHawk.grind();
tonyHawk.manual();
// TODO refactor and practice this more
