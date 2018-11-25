const { prompt } = require('enquirer');
const { Human, Undead } = require('./scripts.js');

(async () => {
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
    }
  ]);
  const player = new Human(response.username);
  console.log(player.name);
})();
