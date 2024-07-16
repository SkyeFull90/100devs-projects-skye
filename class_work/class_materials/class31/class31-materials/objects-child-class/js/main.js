//Create an a class and extend it - Can be anything you would like it to be! 
class Anime{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name

    }
    weeb(){
        console.log(`${this._name} is a good anime`)
    }
}
class Series extends Anime{
    constructor(name, episodes){
        super(name)
        this._episodes = episodes
    }
    get episodes(){
        return this._episodes
    }
    weeb(){
        super.weeb()
        console.log(`${this.name} has ${this.episodes} episodes`)
    }
}
let kimetsuNoYaiba = new Series('demon slayer', '30')

let anime = [kimetsuNoYaiba]

for(a of anime){
    a.weeb()
}