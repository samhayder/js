function digitalClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let timeFormate = 'AM';

  //set condition by timeFormate
  if (hours === 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    timeFormate = 'PM';
  }
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  let FinalTime = `${hours} : ${minutes} : ${seconds}`;

  //DOM
  document.querySelector('.time').innerText = FinalTime;
  document.querySelector('small').innerText = timeFormate;

  //Update time jones
  setInterval(digitalClock, 1000);
}

digitalClock();
