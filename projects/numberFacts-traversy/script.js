let numberInput = document.querySelector('.numberInput');
let showNumberResult = document.querySelector('.showNumberResult');
let numberResult = document.querySelector('.numberResult');

numberInput.addEventListener('input', numberFacts);

function numberFacts() {
  let number = Number(numberInput.value);

  fetch(`http://numbersapi.com/${number}`)
    .then((response) => response.text())
    .then((data) => {
      if (number != ' ') {
        showNumberResult.style.display = 'block';
        numberResult.innerText = data;
      }
    })
    .catch((error) => console.log(error));
}
