/*  ** Accept a number from user. (temperature in Celcius)
 ** Convert it fo Fahrenheit (Formula: F=9/5*C+32)
 ** Print the Result as alert! ("Fahrenheit: 94 Degree")
 ** Print "Task Complete" in console! */

/* let tem = prompt('Please enter Temperature');
let result = (9 / 5) * tem + 32;
alert('Fahrenheit: ' + result + ' Degree');
console.log('Task Complete'); */

/* Exercise 02 */
/* let gradeNumber = parseFloat(prompt('Whate is your number?'));
if (gradeNumber >= 80 && gradeNumber <= 100) {
  alert('Your Grade: A+');
} else if (gradeNumber >= 60 && gradeNumber <= 79) {
  alert('Your Grade: A');
} else if (gradeNumber >= 33 && gradeNumber <= 59) {
  alert('Your Grade: B');
} else if (gradeNumber <= 32 && gradeNumber > 0) {
  alert('Your Grade: C');
} else {
  alert('Invalid Input');
} */

/* Exercise 03 */
/* console.log(`Select Option
01. Add
02. Subtract
03. Multiply
04. Division`);

let firstNumber = prompt('Type First Number?');
let secondNumber = prompt('Type Second Number?');
let option = prompt('Chose Your Option.');

if (option == '+') {
  alert(`Your Adding Value: ${firstNumber + secondNumber}`);
} else if (option == '-') {
  alert(`Your Subtraction Value: ${firstNumber - secondNumber}`);
} else if (option == '*') {
  alert(`Your Multiplication Value: ${firstNumber * secondNumber}`);
} else if (option == '/') {
  alert(`Your Divided Value: ${firstNumber / secondNumber}`);
} else {
  alert('Invalid Operation!');
} */

//Use Switch
/* firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);
option = parseInt(option);

let result = null;
//Checking condition
firstNumberCon = isNaN(firstNumber);
secondNumberCon = isNaN(secondNumber);
optionCon = isNaN(option);

if (firstNumberCon || secondNumberCon || optionCon) {
  alert('Invalid Operation!');
} else {
  switch (Option) {
    case 1:
      result = firstNumber + secondNumber;
      break;
    case 2:
      result = firstNumber - secondNumber;
      break;
    case 3:
      result = firstNumber * secondNumber;
      break;
    case 4:
      result = firstNumber / secondNumber;
      break;
    default:
      break;
  }

  if (result == null) {
    console.log('No Result');
  } else {
    console.log('Result is: ' + result);
  }
} */

/* Exercise 04 */
/* let userInput = parseInt(prompt('Enter Your Number?'));
let userInputSum = 0;
let series = '';

for (let i = 1; i <= userInput; i++) {
  userInputSum += i * i;
  series += (i ** 2).toString();
  if (i == userInput) {
    continue;
  }
  series += ' + ';
}
console.log(`${series} = ${userInputSum}`);
 */

//JavaScript Classes (ES6)
class Person {
  constructor(firstName, lastName, dob) {
    (this.firstName = firstName), (this.lastName = lastName), (this.dob = dob);
  }

  calculateAge() {
    let birthday = new Date(this.dob);
    let diff = Date.now() - birthday.getTime();
    let ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

let personSam = new Person('sam', 'hayden', '06-30-1988');

console.log(personSam);
console.log(personSam.calculateAge());

//Sub Classes (inheritance)
class Customer {
  constructor(fname, lname) {
    (this.firstName = fname), (this.lastName = lname);
  }
  greetings() {
    return `Hello ${this.firstName} ${this.lastName}!`;
  }
}

let customer1 = new Customer('samsuddin', 'hayder');
console.log(customer1);
console.log(customer1.greetings());

class NewCustomer extends Customer {
  constructor(fname, lname, phone, id) {
    super(fname, lname);
    (this.phone = phone), (this.memberShip = id);
  }
}
let newCustomer2 = new NewCustomer('yasin', 'hayder', '01778965423', 'esd235');
console.log(newCustomer2);
