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

let rollsSum = 0;
let scoreUpdate = 0;

let mainScore = document.getElementById('score--0');
// let rolls;

function rollDice() {
  rolls = Math.floor(Math.random() * 6) + 1;

  const diceImage = document.getElementById('image');
  diceImage.src = `dice-${rolls}.png`;

  rollsSum += rolls;
  let player1 = {
    playerName: '',
    playerScore: rollsSum,
  };

  scoreUpdate = document.getElementById('current--0').textContent =
    player1.playerScore;
  return rolls;
}

// let rolls = 6;

// const diceImage = document.getElementById('image');
// diceImage.src = `dice-${rolls}.png`;

// let scoreUpdate = (document.getElementById('current--0').textContent = player1.playerScore);

const newGame = () => {
  players.player1.playerScore = 0;
  scoreUpdate = document.getElementById('current--0').textContent =
    players.player1.playerScore;
  mainScore.textContent = 0;
};

const hold = () => {
  mainScore.textContent = scoreUpdate;
  //   console.log(mainScore);
  //   console.log(scoreUpdate);
};
