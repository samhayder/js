const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  const result = num1 + num2;
  alert('This is result:' + result);
}

add(4, 5);
add(9, 6);
currentResult = ((currentResult + 10) * 3) / 4 - 1;

let calculationInfo = `(${defaultResult} +10) *3 % 4`;

outputResult(currentResult, calculationInfo);
