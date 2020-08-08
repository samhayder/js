//Define Ui Elements
let form = document.querySelector('.task-form');
let taskInput = document.querySelector('.new-task');
let filter = document.querySelector('.filter');
let taskList = document.querySelector('.tasks-list');
let clearBtn = document.querySelector('.clear-task');

//Declare Event Listener
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTasks);
filter.addEventListener('keyup', filterTask);

//Create Function
//ADD new task function
function addTask(e) {
  e.preventDefault();

  if (!taskInput.value) {
    alert('Please add new task list.');
  } else {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput.value + ' '));
    taskList.appendChild(li);
    taskInput.value = ''; //Clear Task input filed

    //Add Remove icon
    let link = document.createElement('a');
    link.setAttribute('href', '#');
    link.innerHTML = 'X';
    link.style.color = 'red';
    li.appendChild(link);
  }
}

//Delete single task of li
function removeTask(e) {
  e.preventDefault();

  if (e.target.hasAttribute('href')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.remove();
    }
  }
}

//Remove whole ul task list
function clearTasks(e) {
  e.preventDefault();

  if (confirm('Are you sure delete the whole task list?')) {
    taskList.innerHTML = '';
  }
}

//Searching list item
function filterTask(e) {
  let text = e.target.value.toLowerCase();

  document.querySelectorAll('li').forEach((task) => {
    let item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
