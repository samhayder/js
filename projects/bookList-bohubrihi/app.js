//Get DOM
let form = document.querySelector('.book-form');
let bookList = document.querySelector('.book-list');

//Event Listener
form.addEventListener('submit', addBook);
bookList.addEventListener('click', removeSingleBook);
//document.addEventListener('DOMContentLoaded', Store.displayBooksLS());

//OOP
class Book {
  constructor(title, author, isbn) {
    (this.title = title), (this.author = author), (this.isbn = isbn);
  }
}

class UI {
  static addBookFormUI(book) {
    let tbody = document.querySelector('.book-list');
    let tr = document.createElement('tr');
    tr.innerHTML = `
            <th scope="col">${book.title}</th>
            <th scope="col">${book.author}</th>
            <th scope="col">${book.isbn}</th>
            <th scope="col"> <a href="#" class="delete"> X </a> </th>`;
    tbody.appendChild(tr);
  }

  static clearFiled() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }

  static showMsg(message, className) {
    let msg = document.querySelector('.show-msg');
    let msgContent = document.createElement('p');
    msgContent.className = `btn ${className}`;
    msgContent.appendChild(document.createTextNode(message));
    msg.appendChild(msgContent);

    setTimeout(() => {
      msgContent.remove();
    }, 3000);
  }

  static removeSingleBookFormUI(target) {
    if (target.hasAttribute('href')) {
      if (confirm('Are you sure? Remove this book item.')) {
        target.parentElement.parentElement.remove();
      }
    }
  }
}

//Local store
class Store {
  //Get books
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse('books');
    }
    return books;
  }

  //Add book
  static addBook(book) {
    let books = Store.getBooks();
    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  //Display books
  static displayBooksLS() {
    let books = Store.getBooks();

    books.forEach((book) => {
      UI.addBookFormUI(book);
      console.log(book);
    });
  }
}

function addBook(e) {
  e.preventDefault();
  //DOM
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let isbn = document.querySelector('#isbn').value;

  if (title === '' || author === '' || isbn === '') {
    UI.showMsg('please fill all field', 'btn-danger');
  } else {
    let book = new Book(title, author, isbn);
    UI.addBookFormUI(book);
    UI.showMsg('Successfully added a single book.', 'btn-success');
    UI.clearFiled();
    Store.addBook(book); //Local Store
  }
}

function removeSingleBook(e) {
  e.preventDefault();

  UI.removeSingleBookFormUI(e.target);
}
