//Book Class: Represent a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI Class: Handle UI Tasks
class UI {
  //Display Book
  static displayBook() {
    let books = StoreBooks.getBook();
    books.forEach((book) => UI.addBookToList(book));
  }

  //Add Book to List
  static addBookToList(book) {
    let showResult = document.querySelector('.show-result');
    let tr = document.createElement('tr');
    tr.innerHTML = `
      <td scope="row">#</td>
      <td scope="col">${book.title}</td>
      <td scope="col">${book.author}</td>
      <td scope="col">${book.isbn}</td>
      <td scope="col"> <a href="#" class="btn btn-secondary edit">Edit</a> </td>
      <td scope="col"> <a href="#" class="btn btn-danger delete">X</a> </td>
    `;
    showResult.appendChild(tr);
  }

  //Edit Book
  static edit(ele) {
    if (ele.classList.contains('edit')) {
      ele.parentElement.parentElement.remove();

      let books = StoreBooks.getBook();
      books.forEach((b) => {
        title.value = b.title;
        author.value = b.author;
        isbn.value = b.isbn;
      });
    }
  }

  //Remove Book
  static removeBook(ele) {
    if (ele.classList.contains('delete')) {
      ele.parentElement.parentElement.remove();
    }
  }

  //Show Message
  static showMsg(message, className) {}

  //Clear Fields
  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

//Store Class: Handles Local Storages
class StoreBooks {
  //Get Storage
  static getBook() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  //Add Book of Store
  static addBook(book) {
    let books = StoreBooks.getBook();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  //Edit Book of Store
  static editBook(isbn) {
    const books = StoreBooks.getBook();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }

  //Remove Book of Store
  static removeBook(isbn) {
    const books = StoreBooks.getBook();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

//Event: Display Book by Submitted Form
document.addEventListener('DOMContentLoaded', UI.displayBook);

//Event: Add a Single Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  //Get inputs Values
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let isbn = document.querySelector('#isbn').value;

  let book = new Book(title, author, isbn);

  //Validation
  if (title === '' || author === '' || isbn === '') {
    alert('fill');
  } else {
    UI.addBookToList(book);
    //Call store
    StoreBooks.addBook(book);
    //Clear input fields
    UI.clearFields();
  }
});

//Event: Edit a Single Book
document.querySelector('.show-result').addEventListener('click', (e) => {
  UI.edit(e.target);
  StoreBooks.editBook(
    e.target.parentElement.previousElementSibling.textContent
  );
});

//Event: Delete a Single Book
document.querySelector('.show-result').addEventListener('click', (e) => {
  UI.removeBook(e.target);
  // Remove book from store
  StoreBooks.removeBook(
    e.target.parentElement.previousElementSibling.previousElementSibling
      .textContent
  );
});
