


let players = {
    player1:{
      playerName:"",
      playerScore:0,
      playerCurrentScore:0
    },
    player2:{
      playerName:"",
      playerScore:0,
      playerCurrentScore:0
    }
  };
  


function rollDice() {
  let rolls;
  rolls = Math.floor(Math.random() * 6) + 1;

}
let rolls = 6;

const diceImage = document.getElementById("image");
diceImage.src = `dice-${rolls}.png`;



let scoreUpdate = document.getElementById("current--0").textContent=player1.playerScore;
































































const newGame = ()=> {
  let score_0 = 0;
  let score_1 = 0;
  let current_score_0 = 0;
  let current_score_1 = 0;
  document.getElementById('current--0').innerHTML = current_score_0;
  document.getElementById('current--1').innerHTML = current_score_1;
  document.getElementById('score--0').innerHTML = score_0;
  document.getElementById('score--1').innerHTML = score_1;
}
