'use strict';

function rollDice() {
  let rolls;
  rolls = Math.floor(Math.random() * 6) + 1;

}
let rolls = 3;

const diceImage = document.getElementById("image");
diceImage.src = `dice-${rolls}.png`;

let player1 = {
    playerName :"",
    playerScore:"5",

}

let scoreUpdate = document.getElementById("current--0").textContent=player1.playerScore;



