function rollDice() {
  let rolls;
  rolls = Math.floor(Math.random() * 6) + 1;
  return rolls;
}

let player1 = {
  playerName: '',
  playerScore: '5',
};

let scoreUpdate = (document.getElementById('current--0').textContent =
  player1.playerScore);
