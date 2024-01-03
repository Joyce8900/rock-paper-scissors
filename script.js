const { createInterface } = require('readline');


const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getUserChoice(callback) {
  rl.question('Digite sua opção: (1 para -> Rock, 2 para -> Paper, 3 para -> Scissors) ', (choice) => {
    choice = parseInt(choice);

    switch (choice) {
      case 1:
      case 2:
      case 3:
        callback(choice);
        break;
      default:
        console.log('Escolha inválida');
        rl.close();
    }
  });
}

function game(computerChoice, userChoice) {
  if (computerChoice === 'Rock' && userChoice === 1) {
    console.log('Empate');
  } else if (computerChoice === 'Rock' && userChoice === 2) {
    console.log('Usuário vence');
  } else {
    console.log('Computador vence');
  }

  rl.close();
}

getUserChoice((userChoice) => {
  const computerChoice = getComputerChoice();
  game(computerChoice, userChoice);
});
