//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(name, health, attack,defense){
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.fight = function(){
        console.log(`${this.name} is fighting`);
    }
}

let ryu = new StreetFighter("Ryu", 100, 50, 50);
let ken = new StreetFighter("Ken", 100, 50, 50);
let chunLi = new StreetFighter("Chun Li", 100, 50, 50);
let blanka = new StreetFighter("Blanka", 100, 50, 50);
let zangief = new StreetFighter("Zangief", 100, 50, 50);
console.log(ryu);
ryu.fight();