//DOM
let showData = document.querySelector('.show-data');
document.querySelector('.get-data').addEventListener('click', loadAPI);

//create loadApi function
function loadAPI(e) {
  let jokeId = document.querySelector('.joke-id').value;

  //create XHR new object
  let xhr = new XMLHttpRequest();

  //open xhr data
  xhr.open('GET', `http://api.icndb.com/jokes/random/${jokeId}`, true);

  //Progress xhr data
  xhr.progress = function () {};

  //Load xhr data
  xhr.onload = function () {
    if (this.status === 200) {
      let data = JSON.parse(this.responseText);
      let jokes = data.value;
      let output = '<ol>';

      jokes.forEach((item) => {
        output += `<li>${item.joke}</li>`;
        //console.log(item.joke);
      });

      output += '</ol>';
      //Show data of DOM
      showData.innerHTML = output;
    }
  };

  //Send xhr data
  xhr.send();
}

//Fetch API
document.querySelector('.fetch-api').addEventListener('click', fetchApi);

function fetchApi() {
  fetch('http://api.icndb.com/jokes/random')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.value.joke);
      document.querySelector('.fetch-output').innerHTML = data.value.joke;
    })
    .catch((err) => {
      console.log(err);
    });
}

//CallBack API
let persons = [
  { firstName: 'Samsuddin', lastName: 'Hayder' },
  { firstName: 'Yasin', lastName: 'Hayder' },
];
//Create new person
function createPerson(person, getPerson) {
  setTimeout(() => {
    persons.push(person);
    //Callback function
    getPerson();
  }, 2000);
}
//Get person
function getPerson() {
  setTimeout(() => {
    let personOutput = '';
    persons.forEach((person) => {
      personOutput += `<li>${person.firstName} ${person.lastName}</li>`;
    });
    document.querySelector('.person-output').innerHTML = personOutput;
  }, 500);
}

createPerson({ firstName: 'abc', lastName: 'hayder' }, getPerson);
