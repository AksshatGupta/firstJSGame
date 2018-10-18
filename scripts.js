function Character(health, name, klass, stamina, mana) {
  this.health = health;
  this.name = name;
  this.klass = klass;
  this.stamina = stamina;
  this.mana = mana;
}

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

  console.warn("Defender Health: " + defender.health + "\nDefender Stamina: " + defender.stamina);
  console.warn("Attacker Health: " + attacker.health + "\nAttacker Stamina: " + attacker.stamina);
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

  console.warn("Defender Health: " + defender.health + "\nDefender Mana: " + defender.mana);
  console.warn("Attacker Health: " + attacker.health + "\nAttacker Mana: " + attacker.mana);
  if (attacker.health <= 0 || defender.health <= 0) {
    return attacker.health <= 0 ? "Attacker is dead" : "Defender is dead";
  }
}

var player1 = new Character(100, "Random", "Random", 100, 100);
var enemy1 = new Character(50, "Random2", "Random2", 50, 50);
