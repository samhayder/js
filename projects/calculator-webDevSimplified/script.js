class Calculator {
  constructor(previousResult, currentResult) {
    this.previousResult = previousResult;
    this.currentResult = currentResult;
    this.clear();
  }

  clear() {
    this.previousOperand = '';
    this.currentOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    let previous = parseFloat(this.previousOperand);
    let current = parseFloat(this.currentOperand);

    switch (this.operation) {
      case '+':
        computation = previous + current;
        break;
      case '-':
        computation = previous - current;
        break;
      case '*':
        computation = previous * current;
        break;
      case '/':
        computation = previous / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.previousOperand = '';
    this.operation = undefined;
  }

  updateDisplay() {
    this.currentResult.innerText = this.currentOperand;
    if (this.operation != null) {
      this.previousResult.innerText = `${this.previousOperand} ${this.operation}`;
    }
  }
}

//DOM
let previousResult = document.querySelector('[data-previous-operant]');
let currentResult = document.querySelector('[data-current-operant]');
let clearBtn = document.querySelector('[data-all-clear]');
let deleteBtn = document.querySelector('[data-back]');
let equalBtn = document.querySelector('[data-equal]');
let numberBtn = document.querySelectorAll('[data-number]');
let operationBtn = document.querySelectorAll('[data-operation]');

let calculator = new Calculator(previousResult, currentResult);

numberBtn.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationBtn.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalBtn.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});

clearBtn.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteBtn.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});
