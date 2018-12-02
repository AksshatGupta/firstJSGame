const { prompt } = require('enquirer');
const { Human, Elf, Dwarf, Goblin, Orc, Pixie, Undead } = require('./scripts.js');

const promptForClass = async () => {
  const response = await prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your username?'
    },
    {
      type: 'list',
      name: 'race',
      message: 'What race would you prefer to be?',
      choices: [Human, Elf, Dwarf, Goblin, Orc, Pixie, Undead]
    }
  ]);
  return chooseCharacter(response);
};

const chooseCharacter = (response) => {
  if(response.race == Human) {
    return new Human(response.username);
  }
  else if(response.race == Elf) {
    return new Elf(response.username);
  }
  else if(response.race == Dwarf) {
    return new Dwarf(response.username);
  }
  else if(response.race == Orc) {
   return new Orc(response.username);
 }
  else if(response.race == Pixie) {
   return new Pixie(response.username);
 }
  else if(response.race == Undead) {
   return new Undead(response.username);
 }
}

const player = promptForClass();
console.log(player.name);
