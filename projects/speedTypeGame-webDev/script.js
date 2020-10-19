window.addEventListener('load', getRandomQuote)
//Set Api url link
const RANDOM_QUOTE_API_URL =   'https://api.chucknorris.io/jokes/random';
//DOM Element
let timeCount = document.querySelector('.timeCount');
let randomTextDisplay = document.querySelector('.randomText');
let typeText = document.querySelector('#typeText');

//Random Text
function getRandomQuote() {
    fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data =>  {
        randomTextDisplay.innerHTML = '';
        //Rendering all randomTextDisplay to span
        data.value.split('').forEach(character => {
            let characterSpan  = document.createElement('span');
            characterSpan.innerHTML = character;
            randomTextDisplay.appendChild(characterSpan);
        })
        //Set initial value
        typeText.value = null;

        startTimer()
        
    })
}

//Access Textarea input Value
typeText.addEventListener('input', () => {
    let arrayQuote = randomTextDisplay.querySelectorAll('span');
    let arrayValue = typeText.value.split('');

    let correct = true;
    
    arrayQuote.forEach((characterSpan,index) => {
        let character = arrayValue[index];

        if(character == null) {
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
            correct = false;
        } else if(character === characterSpan.innerText) {
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
        } else {
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect');
            correct = false;
        }
    })

    if(correct) getRandomQuote();
})

//Set Timer 
let startTime
function startTimer() {
  timeCount.innerText = 0
  startTime = new Date()
  setInterval(() => {
    timeCount.innerText = Math.floor((new Date() - startTime) / 1000)
  }, 1000)
}

