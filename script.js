let players = {
  player1:{
    playerScore:0,
    playerCurrentScore:0,
    player1Active:true
  },
  player2:{
    playerScore:0,
    playerCurrentScore:0,
    player2Active:false
  }
}
let rollDiceDigit;

const randomNumber = ()=>{
  const rollDiceDigit = Math.ceil(Math.random()*6);
  return rollDiceDigit;
}

const rollDice=()=>{
  rollDiceDigit = randomNumber();
  const image = document.getElementById('image');
  image.src = `dice-${rollDiceDigit}.png`;
  if(players.player1.player1Active == true && players.player2.player2Active == false){
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    players.player1.playerCurrentScore  += rollDiceDigit;
    document.getElementById('current--0').innerHTML = players.player1.playerCurrentScore;
    if(rollDiceDigit == 1){
      players.player1.playerScore = 0;
      players.player1.playerCurrentScore = 0;
      document.getElementById('score--0').innerHTML = players.player1.playerScore;
      document.getElementById('current--0').innerHTML = players.player1.playerCurrentScore;
      players.player1.player1Active=false;
      players.player2.player2Active=true;
    }
  } 
  else{
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    players.player2.playerCurrentScore  += rollDiceDigit;
    document.getElementById('current--1').innerHTML = players.player2.playerCurrentScore;
    if(rollDiceDigit == 1){
      players.player2.playerScore = 0;  
      players.player2.playerCurrentScore = 0;
      document.getElementById('score--1').innerHTML = players.player2.playerScore;
      document.getElementById('current--1').innerHTML = players.player2.playerCurrentScore;
      players.player1.player1Active=true;
      players.player2.player2Active=false;
    }
  }

}

const hold = () =>{
if(players.player1.player1Active=true && players.player2.player2Active == false){
  document.querySelector('.player--0').classList.remove('player--active');
  document.querySelector('.player--1').classList.add('player--active');
  players.player1.playerScore = players.player1.playerScore + players.player1.playerCurrentScore;
  players.player1.playerCurrentScore = 0;
  document.getElementById('current--0').innerHTML = players.player1.playerCurrentScore;
  document.getElementById('score--0').innerHTML = players.player1.playerScore;
  players.player1.player1Active=false;
  players.player2.player2Active=true;

}
else{
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  players.player2.playerScore = players.player2.playerScore+players.player2.playerCurrentScore;
  players.player2.playerCurrentScore = 0;
  document.getElementById('current--1').innerHTML = players.player2.playerCurrentScore;
  document.getElementById('score--1').innerHTML = players.player2.playerScore;
  players.player1.player1Active=true;
  players.player2.player2Active=false;
}
  if(Number(players.player1.playerScore) >= Number(10))
    document.querySelector('.player--0').classList.add('player--winner');
  if(Number(players.player2.playerScore) >= Number(10))
    document.querySelector('.player--1').classList.add('player--winner');
}

const newGameStart=() =>{
players.player1.playerScore = 0;
players.player1.playerCurrentScore = 0;
players.player2.playerScore = 0;
players.player2.playerCurrentScore = 0;
document.querySelector('.player--0').classList.remove('player--active');
document.querySelector('.player--1').classList.remove('player--active');
document.getElementById('score--0').innerHTML = players.player1.playerScore;
document.getElementById('current--0').innerHTML = players.player1.playerCurrentScore;
document.getElementById('score--1').innerHTML = players.player2.playerScore;
document.getElementById('current--1').innerHTML = players.player2.playerCurrentScore;
}