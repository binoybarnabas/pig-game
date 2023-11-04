<<<<<<< HEAD
function rollDice() {
  let rolls;
  rolls = Math.floor(Math.random() * 6) + 1;
=======
'use strict';



let player1 = {
    playerName :"",
    playerScore:"5",

}

let scoreUpdate = document.getElementById("current--0").textContent=player1.playerScore;



const rollDice = () => {
  let rolls = Math.floor(Math.random() * 6) + 1;
>>>>>>> 17ec99d4f48f704479982911b336b2745e8a3001
  console.log(rolls);
  return rolls;
}
