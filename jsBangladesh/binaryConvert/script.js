let submit = document.querySelector('#submit');
let result = document.querySelector('.result');

function binaryConvert(e) {
  e.preventDefault();
  let userInput = document.querySelector('#userInput').value;

  if (userInput === '') {
    alert('Please provide a number.');
  } else {
    let binaryNumber = Number(userInput).toString(2);
    result.innerHTML = binaryNumber;
    result.style.visibility = 'visible';
    result.style.fontSize = '25px';
    result.style.fontWeight = '700';

    document.querySelector('#userInput').value = '';
  }
}

submit.addEventListener('click', binaryConvert);
