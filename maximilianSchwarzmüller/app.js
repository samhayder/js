const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  const calculateDescription = `${currentResult} + ${userInput.value}`;
  currentResult += parseFloat(userInput.value);
  userInput.value = '';
  outputResult(currentResult, calculateDescription);
}

function subtract() {
  const calculateDescription = `${currentResult} - ${userInput.value}`;
  currentResult -= parseFloat(userInput.value);
  userInput.value = '';
  outputResult(currentResult, calculateDescription);
}

function multiply() {
  const calculateDescription = `${currentResult} * ${userInput.value}`;
  currentResult *= parseFloat(userInput.value);
  userInput.value = '';
  outputResult(currentResult, calculateDescription);
}

function divide() {
  const calculateDescription = `${currentResult} / ${userInput.value}`;
  currentResult /= parseFloat(userInput.value);
  userInput.value = '';
  outputResult(currentResult, calculateDescription);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
