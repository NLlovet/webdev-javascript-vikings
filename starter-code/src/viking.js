// Soldier
class Soldier {
    constructor(health, strength) {
         this.health = health;
         this.strength = strength;
        }
         attack = function() {
             return this.strength;
    }
        receiveDamage = function(damage) {
            this.health -= damage;
        }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    attack = function() {
        return this.strength;
    }
    receiveDamage = function(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return (`${this.name} has died in act of combat`);
        }
        else{
            return (`${this.name} has received ${damage} points of damage`);
        }
    }

    battleCry = function() {
        return "Odin Owns You All!";
    }
    
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength);
        this.health = health;
        this.strength = strength;
    }

    receiveDamage = function(damage) {
        this.health -= damage;
        if(this.health <= 0) {
            return (`A Saxon has died in combat`);
        }
        else{
            return (`A Saxon has received ${damage} points of damage`);
        }
    }
}

// War BONUS
class War {}
