const playerScoreText = document.querySelector('.player-score');
const tieScoreText = document.querySelector('.tie-score');
const computerScoreText = document.querySelector('.computer-score');
const btns = document.querySelectorAll('button');
const result = document.querySelector('.result');

let scoreComputer = 0;
let scorePlayer = 0;
let scoreTie = 0;

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

function playRound(input) {
  const playerSelection = input;
  const computerSelection = getComputerChoice();

  // Tie game
  if (playerSelection === computerSelection) {
    scoreTie++;
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

const updateUI = function () {
  playerScoreText.textContent = scorePlayer;
  computerScoreText.textContent = scoreComputer;
  tieScoreText.textContent = scoreTie;
  if (scorePlayer >= 5) {
    result.classList.add('win');
    result.textContent = 'You wins!';
    btns.forEach((button) => button.setAttribute('disabled', ''));
    btns.forEach((button) => button.classList.remove('control'));
  } else if (scoreComputer >= 5) {
    result.classList.add('lose');
    result.textContent = 'You lose!';
    btns.forEach((button) => button.setAttribute('disabled', ''));
    btns.forEach((button) => button.classList.remove('control'));
  }
};

btns.forEach((button) =>
  button.addEventListener('click', function () {
    result.textContent = playRound(button.value);
    updateUI();
  })
);
