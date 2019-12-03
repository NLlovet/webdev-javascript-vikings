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
    constructor(name, heatlh, strength);
    super(health, strength);
}

// Saxon
class Saxon {}

// War
class War {}
