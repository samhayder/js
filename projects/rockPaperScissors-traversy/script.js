//Get DOM
const restart = document.querySelector('.restart-btn');
const choices = document.querySelectorAll('.choice');
const score = document.querySelector('.score');
const result = document.querySelector('.result');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0,
};

//Play game
function play(e) {
  let playerChoice = e.target.id;
  let computerChoice = getComputerChoice();
  let winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

//Computer Choice
function getComputerChoice() {
  let random = Math.random();
  if (random < 0.34) {
    return ` rock`;
  } else if (random <= 0.67) {
    return 'paper';
  } else {
    return `scissors`;
  }
}

//Get Winner
function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'draw';
  } else if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (playerChoice === 'scissors') {
    return 'computer';
  } else {
    return 'player';
  }
}

//Show Winner
function showWinner(winner, computerChoice) {
  if (winner === 'player') {
    //Player Score Inc.
    scoreboard.player++;
    //Show Modal
    result.innerHTML = `
      <h2 class="win">You Win</h2>
      <button class="choice">${computerChoice}</button>
      <p>Computer chose: <strong>${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }</strong></p>`;
  } else if (winner === 'computer') {
    //Computer Score Inc.
    scoreboard.computer++;
    //Show Modal
    result.innerHTML = `
      <h2 class="lose">You Lose</h2>
      <button class="choice">${computerChoice}</button>
      <p>Computer chose: <strong>${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }</strong></p>`;
  } else {
    //Show Modal
    result.innerHTML = `
      <h2>It's Draw</h2>
      <button class="choice">${computerChoice}</button>
      <p>Computer chose: <strong>${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }</strong></p>`;
  }

  //Show restart btn
  restart.style.display = 'inline-block';

  //Show Score
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>`;

  //Show Modal
  modal.style.display = 'block';
}

//Game Over
function getRestart() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>`;
}

//Clear Modal
function clearModal(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

//Event
choices.forEach((choice) => {
  choice.addEventListener('click', play);
});
//Event clear Modal
modal.addEventListener('click', clearModal);
//Game Over
restart.addEventListener('click', getRestart);
