
class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(
            "Name: ", this.name,
            "Strength: ", this.strength,
            "Speed: ", this.speed,
            "Health: ", this.health);
    }

    drinkSake(){
        this.health += 10;
    }
}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();

class superSensei extends Ninja{
    constructor(name){
        super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }

}

const superSensei1 = new superSensei("Master Splinter");
superSensei1.speakWisdom();
superSensei1.showStats();