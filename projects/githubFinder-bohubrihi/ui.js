class UI {
  constructor() {
    this.profile = document.querySelector('.show-profile');
  }

  //show profile
  showProfile(user) {
    this.clearShowAlert();
    this.profile.innerHTML = `
        <div class="card">
            <div class="row d-flex">
                <div class="col-5">
                    <div class="card-header">
                        <img src="${user.avatar_url}" alt="Profile Img" class="card-img-top mb-4"/>
                         <a href="${user.html_url}" class="profile-link btn btn-success btn-block" target="-blank"> View Profile </a>
                    </div>
                </div>
                <div class="col-7 align-self-center">
                    <div class="card-body">
                        <h2 class="text-capitalize">${user.name}</h2>
                        <p>Company Name: ${user.company}</p>
                        <p>Location: ${user.location}</p>
                        <p>Blog Profile:
                            <a href="${user.blog}" target="-blank"> ${user.blog} </a>
                        </p>
                        <p class="lead">Created Date: ${user.created_at}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between flex-wrap">
                        <span class="badge badge-primary">Public Repo: ${user.public_repos} </span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists} </span>
                        <span class="badge badge-danger">Followers: ${user.followers} </span>
                        <span class="badge badge-info">Following: ${user.following} </span>
                    </div>
                </div>
            </div>
        </div>
      `;
  }

  //clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }

  //show alert
  showAlert(message, className) {
    this.clearShowAlert();
    this.clearProfile();

    let div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    let msg = document.querySelector('.show-msg');
    msg.appendChild(div);
  }
  //clear show alert
  clearShowAlert() {
    let currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
