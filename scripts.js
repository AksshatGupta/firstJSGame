function Character(health, name, klass, stamina, mana) {
  this.health = health;
  this.name = name;
  this.klass = klass;
  this.stamina = stamina;
  this.mana = mana;
}

Character.prototype.attack = function (attacker, defender) {
  var attackerDiceRoll = Math.floor((Math.random() * 10) + 1);
  var defenderDiceRoll = Math.floor((Math.random() * 10) + 1);

  if(attackerDiceRoll > defenderDiceRoll) {
    defender.health -= Math.floor((Math.random() * 10) + 1);
  } else {
    attacker.health -= Math.floor((Math.random() * 10) + 1);
  }
  console.warn("Defender Health: " + defender.health);
  console.warn("Attacker Health: " + attacker.health);
  if (attacker.health <= 0 || defender.health <= 0) {
    return attacker.health == 0 ? "Attacker is dead" : "Defender is dead";
  }
}

var player1 = new Character(100, "Random", "Random", 100, 100);
var enemy1 = new Character(50, "Random2", "Random2", 50, 50);
