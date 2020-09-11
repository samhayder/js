let searchUser = document.querySelector('.search-user');
let searchBtn = document.querySelector('.search-btn');
let ui = new UI();

searchBtn.addEventListener('click', (e) => {
  let userText = searchUser.value;
  if (userText != '') {
    //show fetch api
    fetch(`https://api.github.com/users/${userText}`)
      .then((result) => result.json())
      .then((data) => {
        if (data.message == 'Not Found') {
          //show alert
          ui.showAlert('User Not Found!', 'alert alert-danger');
        } else {
          //show profile
          ui.showProfile(data);
        }
      });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
