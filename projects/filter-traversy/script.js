let filter = document.querySelector('.filterInput');

function filterList() {
  let filterValue = filter.value.toLowerCase().trim();
  let ul = document.querySelector('ul.list-group');
  let li = ul.querySelectorAll('li.list-item');

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];

    if (a.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

filter.addEventListener('keyup', filterList);
