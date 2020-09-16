document
  .querySelector('.bookmark-form')
  .addEventListener('submit', saveBookmark);

function saveBookmark(e) {
  e.preventDefault();

  let siteName = document.querySelector('#site-name').value;
  let siteUrl = document.querySelector('#site-url').value;

  //Validation
  let expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  let regex = new RegExp(expression);
  if (!siteName || !siteUrl) {
    alert('Please fill all input field.');
    return false;
  } else if (!siteUrl.match(regex)) {
    alert('Provide valid website url link.');
    return false;
  } else {
    document.querySelector('.bookmark-form').reset();
  }

  let bookmark = {
    name: siteName,
    url: siteUrl,
  };
  //Local store
  if (localStorage.getItem('bookmarks') === null) {
    var bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  fetchBookmarks();
}

function deleteBookmark(url) {
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  for (let i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url === url) {
      bookmarks.splice(i, 1);
    }
  }

  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  fetchBookmarks();
}

function fetchBookmarks() {
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  let bookmarksResults = document.querySelector('.bookmark-result');
  bookmarksResults.innerHTML = '';

  for (let i = 0; i < bookmarks.length; i++) {
    let name = bookmarks[i].name;
    let url = bookmarks[i].url;

    bookmarksResults.innerHTML += `
    <div class='jumbotron'>
        <h3>${name} 
        <a href="${url}" class="btn btn-secondary">Visit</a>
        <a onclick="deleteBookmark(\'${url}'\)" href="#" class="btn btn-danger">Delete</a>
        </h3>
      </div>`;
  }
}

document.addEventListener('DOMContentLoaded', fetchBookmarks());

//Validation
/* let expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
let regex = new RegExp(expression);

if (!siteName || !siteURL) {
  alert('Please fill all input field.');
  return false;
} else if (!siteURL.match(regex)) {
  alert('Please type valid website url address.');
  return false;
} else {
  document.querySelector('.bookmark-form').reset();
} */
