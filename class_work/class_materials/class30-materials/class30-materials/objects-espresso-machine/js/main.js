//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class espressoMachine {
    constructor(make, price, model, color){
        this.make = make
        this.price = price
        this.model = model
        this.color = color
    }
    turnOn(){
        console.log("Good day, what are we drinking today?")
    }
    steam(){
        console.log("ITSSS SUMMERR SALEEEEEEEEE 50% OFFFFFFF!")
    }
    brew(){
        console.log("your drink is now brewing.")
    }
}

let  Gaggia = new espressoMachine('red', 'Gaggia', 'Classic Pro', 400);