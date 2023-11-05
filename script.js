let players = {
  player1: {
    playerName: '',
    playerScore: 0,
    playerCurrentScore: 0,
    playerActive: true,
  },
  player2: {
    playerName: '',
    playerScore: 0,
    playerCurrentScore: 0,
    playerActive: false,
  },
};

document.querySelector('.player--0').classList.add('player--active');

let rollsSum = 0;

let mainScore1 = document.getElementById('score--0');
let mainScore2 = document.getElementById('score--1');


function rollDice() {
  if (players.player1.playerActive == true) {
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');

    rolls = Math.floor(Math.random() * 6) + 1;

    const diceImage = document.getElementById('image');
    diceImage.src = `dice-${rolls}.png`;

    if (rolls == 1) {
      players.player1.playerScore = 0;
      players.player1.playerCurrentScore=0;
      document.getElementById('score--0').textContent = players.player1.playerScore;
      document.getElementById('current--0').textContent = players.player1.playerCurrentScore;
      rollsSum = 0;
      players.player1.playerActive = false;
      players.player2.playerActive = true;
    } else {
      rollsSum += rolls;
      let player1 = {
        playerName: '',
        playerScore: rollsSum,
      };

      document.getElementById('current--0').textContent = player1.playerScore;
    }
  } else {
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('.player--0').classList.remove('player--active');

    rolls = Math.floor(Math.random() * 6) + 1;

    const diceImage = document.getElementById('image');
    diceImage.src = `dice-${rolls}.png`;
    if (rolls == 1) {
      players.player2.playerScore = 0;
      players.player2.playerCurrentScore = 0;
      document.getElementById('score--1').textContent =  players.player2.playerScore;
      document.getElementById('current--1').textContent = players.player2.playerCurrentScore;
      rollsSum = 0;

      players.player2.playerActive = false;
      players.player1.playerActive = true;
    } else {
      rollsSum += rolls;
      let player2 = {
        playerName: '',
        playerScore: rollsSum,
      };

      document.getElementById('current--1').textContent = player2.playerScore;
    }
  }
  return rolls;
}

const newGame = () => {

  players.player1.playerScore = 0;
  players.player2.playerScore = 0;

  document.getElementById('current--0').textContent =
    players.player1.playerScore;
  document.getElementById('current--1').textContent =
    players.player2.playerScore;

  mainScore1.textContent = 0;
  mainScore2.textContent = 0;
  rollsSum = 0;
};

const hold = () => {
  // players.player1.playerScore = 0;
  if (players.player1.playerActive == true) {
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('.player--0').classList.remove('player--active');

    players.player1.playerCurrentScore += rollsSum;
    mainScore1.textContent = players.player1.playerCurrentScore;

    if (players.player1.playerCurrentScore >= 100) {
      player = document.querySelector('.player--0');
      player.classList.add('player--winner');
    }

    players.player1.playerActive = false;
    players.player2.playerActive = true;

    players.player1.playerScore = 0;

    document.getElementById('current--0').textContent =
      players.player1.playerScore;

    rollsSum = 0;
  } else {
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');

    players.player2.playerCurrentScore += rollsSum;
    mainScore2.textContent = players.player2.playerCurrentScore;

    if (players.player1.playerCurrentScore >= 100) {
      player = document.querySelector('.player--1');
      player.classList.add('player--winner');
      
    }

    players.player2.playerActive = false;
    players.player1.playerActive = true;

    players.player2.playerScore = 0;
    document.getElementById('current--1').textContent =
      players.player2.playerScore;

    rollsSum = 0;
  }
  scoreUpdate = document.getElementById('current--0').textContent = 0;
  mainScore.textContent = 0;
};







