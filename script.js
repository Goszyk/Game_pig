'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;

diceEL.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality

btnRoll.addEventListener('click', function () {
  /// Genereting a random dice roll
  let dice = Math.floor(Math.random() * 6 + 1);
  console.log(dice);

  /// Display dice
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;
  /// check for rolled
  if (dice !== 1) {
    //Add dice to current score
    // currentScore = currentScore + dice;
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore; // change letter!!
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    //switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {});
