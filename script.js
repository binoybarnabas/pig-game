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



