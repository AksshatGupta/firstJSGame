function Character(health, name, klass, stamina, mana) {
  this.health = health;
  this.name = name;
  this.klass = klass;
  this.stamina = stamina;
  this.mana = mana;
}

function Human(myName) {
  Character.call(this);
  this.health = 100;
  this.name = myName;
  this.klass = "Human";
  this.stamina = 100;
  this.mana = 100;
}

Human.prototype = Object.create(Character.prototype); // Inheritence
Human.prototype.constructor = Human; // Helps in doing subclass specific actions.

function Elf(myName) {
  Character.call(this);
  this.health = 75;
  this.name = myName;
  this.klass = "Elf";
  this.stamina = 75;
  this.mana = 150;
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

function Dwarf(myName) {
  Character.call(this);
  this.health = 125;
  this.name = myName;
  this.klass = "Dwarf";
  this.stamina = 125;
  this.mana = 50;
}

Dwarf.prototype = Object.create(Character.prototype);
Dwarf.prototype.constructor = Dwarf;

function Goblin(myName) {
  Character.call(this);
  this.health = 100;
  this.name = myName;
  this.klass = "Goblin";
  this.stamina = 100;
  this.mana = 100;
}

Goblin.prototype = Object.create(Character.prototype);
Goblin.prototype.constructor = Goblin;

function Orc(myName) {
  Character.call(this);
  this.health = 200;
  this.name = myName;
  this.klass = "Orc";
  this.stamina = 200;
  this.mana = 0;
}

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;

function Pixie(myName) {
  Character.call(this);
  this.health = 50;
  this.name = myName;
  this.klass = "Pixie";
  this.stamina = 50;
  this.mana = 200;
}

Pixie.prototype = Object.create(Character.prototype);
Pixie.prototype.constructor = Pixie;

function Undead(myName) {
  Character.call(this);
  this.health = 100;
  this.name = myName;
  this.klass = "Undead";
  this.stamina = 100;
  this.mana = 100;
}

Undead.prototype = Object.create(Character.prototype);
Undead.prototype.constructor = Undead;

var healthSubtraction;

Character.prototype.staminaAttack = function (attacker, defender) {
  var attackerDiceRoll = Math.floor((Math.random() * 10) + 1);
  var defenderDiceRoll = Math.floor((Math.random() * 10) + 1);
  healthSubtraction = Math.floor((Math.random() * 10) + 1)
  var healthSubtractionAttacker = healthSubtraction;

  if (attacker.stamina < 75) {
    healthSubtractionAttacker = Math.floor((Math.random() * 7) + 1);
  } else if (attacker.stamina < 50) {
    healthSubtractionAttacker = Math.floor((Math.random() * 5) + 1);
  } else if (attacker.stamina < 25) {
    healthSubtractionAttacker = Math.floor((Math.random() * 2) + 1);
  }

  if(attackerDiceRoll > defenderDiceRoll) {
    defender.health -= healthSubtractionAttacker;
    attacker.stamina -= 10;
    defender.stamina += 5;
  } else {
    attacker.health -= healthSubtraction;
    defender.stamina -= 5;
    attacker.stamina += 10;
  }

  console.warn(defender.name + "'s Health: " + defender.health + "\n" + defender.name + "'s Stamina: " + defender.stamina);
  console.warn(attacker.name + "'s Health: " + attacker.health + "\n" + attacker.name + "'s Stamina: " + attacker.stamina);
  if (attacker.health <= 0 || defender.health <= 0) {
    return attacker.health <= 0 ? "Attacker is dead" : "Defender is dead";
  }
}

Character.prototype.manaAttack = function (attacker, defender) {
  var attackerDiceRoll = Math.floor((Math.random() * 10) + 1);
  var defenderDiceRoll = Math.floor((Math.random() * 10) + 1);
  healthSubtraction = Math.floor((Math.random() * 20) + 1)
  var healthSubtractionAttacker = healthSubtraction;

  if (attacker.mana < 75) {
    healthSubtractionAttacker = Math.floor((Math.random() * 15) + 1);
  } else if (attacker.mana < 50) {
    healthSubtractionAttacker = Math.floor((Math.random() * 10) + 1);
  } else if (attacker.mana < 25) {
    healthSubtractionAttacker = Math.floor((Math.random() * 5) + 1);
  }

  if(attackerDiceRoll > defenderDiceRoll) {
    defender.health -= healthSubtractionAttacker;
    attacker.mana -= 20;
    defender.mana += 5;
  } else {
    attacker.health -= healthSubtraction;
    defender.mana -= 10;
    attacker.mana += 10;
  }

  console.warn(defender.name + "'s Health: " + defender.health + "\n" + defender.name + "'s Mana: " + defender.mana);
  console.warn(attacker.name + "'s Health: " + attacker.health + "\n" + attacker.name + "'s Mana: " + attacker.mana);
  if (attacker.health <= 0 || defender.health <= 0) {
    return attacker.health <= 0 ? "Attacker is dead" : "Defender is dead";
  }
}

module.exports = {
  Human,
  Undead
};
