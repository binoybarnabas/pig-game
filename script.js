'use strict';

let players = {
  player1: {
    playerName: '',
    playerScore: 0,
    playerCurrentScore: 0,
  },
  player2: {
    playerName: '',
    playerScore: 0,
    playerCurrentScore: 0,
  },
};

let rollsSum = 0,
  rolls;

function rollDice() {
  rolls = Math.floor(Math.random() * 6) + 1;

  const diceImage = document.getElementById('image');
  diceImage.src = `dice-${rolls}.png`;

  rollsSum += rolls;
  let player1 = {
    playerName: '',
    playerScore: rollsSum,
  };

  let scoreUpdate = (document.getElementById('current--0').textContent =
    player1.playerScore);
  return rolls;
}
