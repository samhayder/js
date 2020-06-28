const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  const calculateDescription = `${currentResult} + ${userInput.value}`;
  currentResult = currentResult + parseFloat(userInput.value);
  outputResult(currentResult, calculateDescription);
}

addBtn.addEventListener('click', add);
