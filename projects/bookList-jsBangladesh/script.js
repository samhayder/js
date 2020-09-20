//DOM

let form = document.querySelector('form');
let result = document.querySelector('.result');

function addBook(e) {
  e.preventDefault();

  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let year = document.querySelector('#year').value;

  if (title === '' || author === '' || year === '') {
    alert('Please fill the input field.');
  } else {
    let tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
      <td>${year}</td>
      <td style="text-align: right; cursor: pointer;">X</td>`;
    result.appendChild(tr);

    clearField();
    alert('Successfully added book.');
  }
}

function clearField() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#year').value = '';
}

form.addEventListener('submit', addBook);
