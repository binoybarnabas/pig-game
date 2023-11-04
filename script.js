'use strict';



let player1 = {
    playerName :"",
    playerScore:"5",

}

let scoreUpdate = document.getElementById("current--0").textContent=player1.playerScore;



const rollDice = () => {
  let rolls = Math.floor(Math.random() * 6) + 1;
  console.log(rolls);
};
