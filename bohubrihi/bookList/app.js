//Get DOM
let form = document.querySelector('.book-form');
let bookList = document.querySelector('.book-list');

//Event Listener
form.addEventListener('submit', addBook);
bookList.addEventListener('click', removeSingleBook);

//OOP
class Book {
  constructor(title, author, isbn) {
    (this.title = title), (this.author = author), (this.isbn = isbn);
  }
}

class UI {
  constructor() {}

  addBookFormUI(book) {
    let tbody = document.querySelector('.book-list');
    let tr = document.createElement('tr');
    tr.innerHTML = `
            <th scope="col">${book.title}</th>
            <th scope="col">${book.author}</th>
            <th scope="col">${book.isbn}</th>
            <th scope="col"> <a href="#" class="delete"> X </a> </th>`;
    tbody.appendChild(tr);
  }

  clearFiled() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }

  showMsg(message, className) {
    let msg = document.querySelector('.show-msg');
    let msgContent = document.createElement('p');
    msgContent.className = `btn ${className}`;
    msgContent.appendChild(document.createTextNode(message));
    msg.appendChild(msgContent);

    setTimeout(() => {
      msgContent.remove();
    }, 3000);
  }

  removeSingleBookFormUI(target) {
    if (target.hasAttribute('href')) {
      if (confirm('Are you sure? Remove this book item.')) {
        target.parentElement.parentElement.remove();
      }
    }
  }
}

function addBook(e) {
  e.preventDefault();
  //DOM
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let isbn = document.querySelector('#isbn').value;

  let ui = new UI();

  if (title === '' || author === '' || isbn === '') {
    ui.showMsg('please fill all field', 'btn-danger');
  } else {
    let book = new Book(title, author, isbn);
    ui.addBookFormUI(book);
    ui.showMsg('Successfully added a single book.', 'btn-success');
    ui.clearFiled();
  }
}

function removeSingleBook(e) {
  e.preventDefault();

  let ui = new UI();
  ui.removeSingleBookFormUI(e.target);
}
