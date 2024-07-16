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
}
let kimetsuNoYaiba = new Series('demon slayer', '30')
