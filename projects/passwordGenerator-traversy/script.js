//Get DOM
const result = document.querySelector('.result');
const clipboard = document.querySelector('.clipboard');
const pwLength = document.querySelector('#length');
const uppercaseEl = document.querySelector('#uppercase');
const lowercaseEl = document.querySelector('#lowercase');
const numberEl = document.querySelector('#number');
const symbolsEl = document.querySelector('#symbols');
const generate = document.querySelector('.generate');

const randomSetting = {
  uppercase: getRandomUppercase,
  lowercase: getRandomLowercase,
  number: getRandomNumber,
  symbols: getRandomSymbols,
};

//Event
generate.addEventListener('click', () => {
  //value
  const length = pwLength.value;
  const uppercase = uppercaseEl.checked;
  const lowercase = lowercaseEl.checked;
  const number = numberEl.checked;
  const symbols = symbolsEl.checked;

  //init variable
  let generatedPassword = '';
  //Type count
  const typeCount = uppercase + lowercase + number + symbols;
  //Filter out unchecked type count
  const typeCountArr = [
    { uppercase },
    { lowercase },
    { number },
    { symbols },
  ].filter((item) => Object.values(item)[0]);
  //Whole unchecked return null
  if (typeCount === 0) {
    return '';
  }
  //Loop
  for (let i = 0; i < length; i += typeCount) {
    typeCountArr.forEach((type) => {
      const func = Object.keys(type)[0];
      generatedPassword += randomSetting[func]();
    });
  }
  //Final Password
  const finalPassword = generatedPassword.slice(0, length);
  result.innerText = finalPassword;
});

//Copy Clipboard event
clipboard.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = result.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copy to clipboard!');
});

//Generate Random setting
function getRandomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbols() {
  const symbols = '!@#$%^&*(){}[];:|,<>./?=';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
