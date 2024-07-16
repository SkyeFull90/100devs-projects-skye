//Create an a class and extend it - Can be anything you would like it to be! 
class Anime{
    constructor(name){
        this.name = name
    }
    weeb(){
        console.log(`${this.name} is a good anime`)
    }
}
class Series extends Anime{
    constructor(name, episodes){
        super(name)
        this.episodes = episodes
    }
}
let kimetsuNoYaiba = new Anime(`demon slayer`, `30`)
