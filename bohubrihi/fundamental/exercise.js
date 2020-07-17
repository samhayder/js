/*  ** Accept a number from user. (temperature in Celcius)
 ** Convert it fo Fahrenheit (Formula: F=9/5*C+32)
 ** Print the Result as alert! ("Fahrenheit: 94 Degree")
 ** Print "Task Complete" in console! */

let tem = prompt('Please enter Temperature');
let result = (9 / 5) * tem + 32;
alert('Fahrenheit: ' + result + ' Degree');
console.log('Task Complete');
