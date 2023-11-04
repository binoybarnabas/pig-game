'use strict';
let rollsSum = 0,
  rolls;

function rollDice() {
  rolls = Math.floor(Math.random() * 6) + 1;

  rollsSum += rolls;
  let player1 = {
    playerName: '',
    playerScore: rollsSum,
  };

  let scoreUpdate = (document.getElementById('current--0').textContent =
    player1.playerScore);
  return rolls;
}
