function getComputerChoice() {
  const randInt = Math.floor(Math.random() * 3 + 1);
  if (randInt === 1) {
    return 'rock';
  } else if (randInt === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound() {
  const playerSelection = prompt(
    'Input rock, paper, or scissors'
  ).toLowerCase();
  const computerSelection = getComputerChoice();

  //   // Input check DOES NOT WORK IDONTFUCNKINGKNOWWHY!!!!!!!!
  //   // Using hardcoded player win conditions instead
  //   if (
  //     playerSelection !== 'rock' ||
  //     playerSelection !== 'paper' ||
  //     playerSelection !== 'scissors'
  //   ) {
  //     console.log(
  //       playerSelection === 'paper' ||
  //         playerSelection === 'rock' ||
  //         playerSelection === 'scissors'
  //     );

  //     return 'Invalid Inputs';
  //   } else {
  //   }

  // Tie game
  if (playerSelection === computerSelection) {
    return 'Tie!';
    // Computer win
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    scoreComputer++;
    return 'Computer wins! Paper beats Rock';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    scoreComputer++;
    return 'Computer wins! Scissors beat Paper';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    scoreComputer++;
    return 'Computer wins! Rock beat Scissors';
    // Player win
  } else if (computerSelection === 'rock' && playerSelection === 'paper') {
    scorePlayer++;
    return 'Player wins! Paper beats Rock';
  } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    scorePlayer++;
    return 'Player wins! Scissors beat Paper';
  } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    scorePlayer++;
    return 'Player wins! Rock beat Scissors';
  } else {
    return 'Invalid input';
  }
}

let scoreComputer = 0;
let scorePlayer = 0;

for (let i = 0; i < 5; i++) {
  console.log(playRound());
}
console.log(`Player score: ${scorePlayer} \nComputer score: ${scoreComputer}`);
