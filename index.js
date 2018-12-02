const { prompt } = require('inquirer');
const { Human, Elf, Dwarf, Goblin, Orc, Pixie, Undead } = require('./scripts.js');

let player;

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
      type: 'rawlist',
      name: 'race',
      message: 'What race would you prefer to be?',
      choices: ['Human', 'Elf', 'Dwarf', 'Goblin', 'Orc', 'Pixie', 'Undead']
    }
  ]);
  return chooseCharacter(response);
};

const chooseCharacter = (response) => {

  if(response.race == 'Human') {
    player = new Human(response.username);
  }
  else if(response.race == 'Elf') {
    player = new Elf(response.username);
  }
  else if(response.race == 'Dwarf') {
    player = new Dwarf(response.username);
  }
  else if(response.race == 'Orc') {
   player = new Orc(response.username);
 }
  else if(response.race == 'Pixie') {
   player = new Pixie(response.username);
 }
  else if(response.race == 'Undead') {
   player = new Undead(response.username);
 }
}

promptForClass();
console.log();
