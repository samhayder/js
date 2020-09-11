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
document.addEventListener('DOMContentLoaded', getTask);

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
    //Add Remove icon
    let link = document.createElement('a');
    link.setAttribute('href', '#');
    link.innerHTML = 'X';
    link.style.color = 'red';
    li.appendChild(link);

    //Local Storage
    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = ''; //Clear Task input filed
  }
}

//Delete single task of li
function removeTask(e) {
  e.preventDefault();

  if (e.target.hasAttribute('href')) {
    if (confirm('Are you sure?')) {
      let ele = e.target.parentElement;
      ele.remove();
      //Remove form Local Storage
      removeTaskLocalStore(ele);
    }
  }
}

//Remove whole ul task list
function clearTasks(e) {
  e.preventDefault();

  if (confirm('Are you sure delete the whole task list?')) {
    taskList.innerHTML = '';
  }

  localStorage.clear();
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

//Local Storage
function storeTaskInLocalStorage(task) {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
//Add Local Store item show ui
function getTask() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task) => {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(task + ' '));
    taskList.appendChild(li);
    let link = document.createElement('a');
    link.setAttribute('href', '#');
    link.innerHTML = 'X';
    link.style.color = 'red';
    li.appendChild(link);
  });
}
//Local Store Remove Task
function removeTaskLocalStore(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  let li = taskItem;
  li.removeChild(li.lastChild);

  tasks.forEach((task, index) => {
    if (li.textContent.trim() === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}
