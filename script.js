


const rollDice = () => {
  let rolls = Math.floor(Math.random() * 6) + 1;
  console.log(rolls);
};





























































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
