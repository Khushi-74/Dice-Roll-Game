'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1E1 = document.getElementById('current--1')
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold= document.querySelector('.btn--hold')
const btnnew = document.querySelector('.btn--new')
//starting conditions
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden')

let scores = [0,0]
let currentscore =0;
let activeplayer =0;
let playing = true;

const switchplayer = function(){
    document.getElementById(  `current--${activeplayer}`).textContent = 0;
    currentscore = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}
//rolling dice functionality
btnRoll.addEventListener('click',function(){
    //1. generating a random dice roll
    if(playing)
    {
const dice = Math.trunc(Math.random()*6)+1;
console.log(dice)
    //2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. check for rolled 1: if true , switch to next player
    if(dice!==1)
    {
    // add dice to current score
       currentscore+=dice;
       document.getElementById(
        `current--${activeplayer}`
      ).textContent = currentscore;
      //document.querySelector('.current-score').textContent=currentscore;
    }
    else{
// switch to next player
switchplayer();
    }
}})

btnHold.addEventListener('click',function()
{
    if(playing)
    {
    //1. add current score to active players score
        scores[activeplayer]+=currentscore;
        document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer]
        console.log(scores[activeplayer]);
    //2. check if player's score is >=100
    if(scores[activeplayer]>=20)
    {
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active')
    }else{
    //3. switch to next player
switchplayer();
    }
}})

//<button class="btn btn--new">🔄 New game</button>
btnnew.addEventListener('click',function(){
    scores = [0,0]
    currentscore =0;
    playing = true;
    activeplayer=0;

score0El.textContent=0;
score1El.textContent=0;
current0El.textContent=0;
current1E1.textContent=0;

diceEl.classList.add('hidden')
player0El.classList.remove('player--winner')
player0El.classList.add('player--active')
player1El.classList.remove('player--winner')
player1E2.classList.add('player--active')



})