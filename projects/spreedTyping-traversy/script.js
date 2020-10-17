window.addEventListener('load', init);
//Global
let time = 5;
let score = 0;
let isPlay;

//DOM Elements
let currentWord = document.querySelector('#currentWord');
let wordInput = document.querySelector('#wordInput');
let resultMsg = document.querySelector('.resultMsg');
let timeLeft = document.querySelector('.timeLeft');
let scoreDisplay = document.querySelector('.score');

let words = [
  'hello',
  'javascript',
  'developer',
  'instruction',
  'project ',
  'knowledge',
  'finished ',
  'responsive ',
  'portfolio ',
  'vanilla ',
  'thumbing ',
  'down',
  'watching ',
  'love',
];

//Initialize Game
function init() {
  //Show random word in the words array
  randomWord(words);
  //Word Matching
  wordInput.addEventListener('input', startWord);
  //Countdown game time
  setInterval(countdownTime, 1000);
  //Game Status
  setInterval(gameStatus, 50);
}

//Start Word to input
function startWord() {
  if (matchWord()) {
    isPlay = true;
    time = 6;
    randomWord(words);
    score++;
    document.querySelector('#wordInput').value = '';
  }

  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}
//Matching Word
function matchWord() {
  if (wordInput.value === currentWord.innerHTML) {
    resultMsg.innerHTML = 'Correct!!';
    return true;
  } else {
    resultMsg.innerHTML = '';
    return false;
  }
}

//Random word in the array
function randomWord(words) {
  let randomWordIndex = Math.floor(Math.random() * words.length);
  //show display
  currentWord.innerHTML = words[randomWordIndex];
}

//Countdown time
function countdownTime() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlay = false;
  }
  timeLeft.innerHTML = time;
}

//Game Status
function gameStatus() {
  if (!isPlay && time === 0) {
    resultMsg.innerHTML = 'Game Over!!';
    score = -1;
  }
}
