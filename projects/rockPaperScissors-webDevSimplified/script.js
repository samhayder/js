let selectionButtons = document.querySelectorAll('[data-selection]');
let finalColumn = document.querySelector('[data-final-column]');
let computerScore = document.querySelector('[data-computer-score]');
let yourScore = document.querySelector('[data-your-score]');

const SELECTIONS = [
  {
    name: 'rock',
    emoji: '✊',
    beats: 'scissors',
  },
  {
    name: 'paper',
    emoji: '✋',
    beats: 'rock',
  },
  {
    name: 'scissors',
    emoji: '✌️',
    beats: 'paper',
  },
];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener('click', (e) => {
    let selectionName = selectionButton.dataset.selection;
    let selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  let computerSelection = randomSelection();
  let computerWinner = isWinner(computerSelection, selection);
  let youWinner = isWinner(selection, computerSelection);

  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, youWinner);

  if (computerWinner) incrementScore(computerScore);
  if (youWinner) incrementScore(yourScore);
}

function randomSelection() {
  let selectionIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[selectionIndex];
}

function isWinner(selection, operantSelection) {
  return operantSelection.beats === selection.name;
}

function addSelectionResult(selection, winner) {
  let div = document.createElement('div');
  div.innerText = selection.emoji;
  div.classList.add('result-selection');
  if (winner) div.classList.add('winner');
  finalColumn.after(div);
}

function incrementScore(score) {
  score.innerText = parseInt(score.innerText) + 1;
}
