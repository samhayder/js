let form = document.querySelector('.book-form');
let bookList = document.querySelector('.book-list');

class Book {
  constructor(title, author, isbn) {
    (this.title = title), (this.author = author), (this.isbn = isbn);
  }
}
class UI {
  static addBookFormUI(book) {
    let bookList = document.querySelector('.book-list');
    let tr = document.createElement('tr');
    tr.innerHTML = `
        <th scope="col">${book.title}</th>
        <th scope="col">${book.author}</th>
        <th scope="col">${book.isbn}</th>
        <th scope="col"> <a href="#" class="delete"> X </a> </th>`;
    bookList.appendChild(tr);
  }

  static clearFiled() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }

  static removeBookFormUI(target) {
    if (target.hasAttribute('href')) {
      target.parentElement.parentElement.remove();

      Store.deleteBook(
        target.parentElement.previousElementSibling.textContent.trim()
      );
      UI.showMsg('Remove book list', 'btn-danger');
    }
  }

  static showMsg(message, className) {
    let msg = document.querySelector('.show-msg');
    let msgContainer = document.createElement('p');
    msgContainer.appendChild(document.createTextNode(message));
    msgContainer.className = `btn ${className}`;

    msg.appendChild(msgContainer);

    setTimeout(() => {
      msgContainer.remove();
    }, 3000);
  }
}

class Store {
  //get
  //set
  //display
  //Remove
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static setBooks(book) {
    let books = Store.getBooks(book);
    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static displayBooks() {
    let books = Store.getBooks();
    books.forEach((book) => {
      UI.addBookFormUI(book);
    });
  }

  static deleteBook() {
    let books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
      }
    });
  }
}

function addBook(e) {
  e.preventDefault();

  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let isbn = document.querySelector('#isbn').value;
  let book = new Book(title, author, isbn);

  if (title === '' || author === '' || isbn === '') {
    UI.showMsg('Please fill the field.', 'btn-danger');
  } else {
    UI.addBookFormUI(book);
    UI.clearFiled();
    UI.showMsg('Successfully add book list.', 'btn-success');
    Store.setBooks(book);
  }
}

function removeBook(e) {
  e.preventDefault();
  UI.removeBookFormUI(e.target);
}

form.addEventListener('submit', addBook);
bookList.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', Store.displayBooks());
