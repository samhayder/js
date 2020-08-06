//DOM
document.querySelector('.get-data').addEventListener('click', loadAJAX);

function loadAJAX() {
  //create new object XHR
  let xhr = new XMLHttpRequest();

  //Open xhr file
  xhr.open('GET', 'data.json', true);

  //Progress readyStatus === 3
  xhr.onprogress = function () {};

  //Load xhr file
  xhr.onload = function () {
    //set http status
    if (this.status === 200) {
      //console.log(this.responseText);
      document.querySelector('.show-data').innerHTML = this.responseText;
    }
  };

  //Send xhr file data
  xhr.send();
}
