class UI {
  constructor() {
    this.budgetFeedback = document.querySelector('.budget-feedback');
    this.budgetForm = document.querySelector('.budget-form');
    this.budgetInput = document.querySelector('.budget-input');
    this.budgetAmount = document.querySelector('#budget-amount');
    this.expenseAmount = document.querySelector('#expense-amount');
    this.balance = document.querySelector('#balance');
    this.balanceAmount = document.querySelector('#balance-amount');
    this.expenseFeedback = document.querySelector('.expense-feedback');
    this.expenseForm = document.querySelector('.expense-form');
    this.expenseInput = document.querySelector('.expense-input');
    this.amountInput = document.querySelector('#amount-input');
    this.expenseList = document.querySelector('.expense-list');
    this.itemList = [];
    this.itemID = 0;
  }

  //Submit Budget Form
  submitBudgetForm() {
    let value = this.budgetInput.value;
    if (value === '' || value < 0) {
      this.budgetFeedback.classList.add('showItem');
      this.budgetFeedback.innerHTML = `<p>Value can not be empty or negative.</p>`;
      let self = this;
      setTimeout(() => {
        self.budgetFeedback.classList.remove('showItem');
      }, 4000);
    } else {
      this.budgetAmount.textContent = value;
      this.budgetInput.value = '';
      this.showBalance();
    }
  }

  //Total Expense
  totalExpense() {
    let total = 0;
    if (this.itemList.length > 0) {
      total = this.itemList.reduce((acc, curr) => {
        acc += curr.amount;
        return acc;
      }, 0);
    }
    this.expenseAmount.textContent = total;
    return total;
  }

  //Show Balance
  showBalance() {
    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense;
    this.balanceAmount.textContent = total;

    if (total < 0) {
      this.balance.classList.remove('showBlack', 'showGreen');
      this.balance.classList.add('showRed');
    } else if (total > 0) {
      this.balance.classList.remove('showBlack', 'showRed');
      this.balance.classList.add('showGreen');
    } else if (total === 0) {
      this.balance.classList.remove('showRed', 'showGreen');
      this.balance.classList.add('showBlack');
    }
  }

  //Submit Expense Form
  submitExpenseForm() {
    let expenseTitle = this.expenseInput.value;
    let amountValue = parseInt(this.amountInput.value);

    if (expenseTitle === '' || amountValue === '' || amountValue < 0) {
      this.expenseFeedback.classList.add('showItem');
      this.expenseFeedback.innerHTML = `<p>Values can not be empty or negative.</p>`;
      let self = this;
      setTimeout(() => {
        this.expenseFeedback.classList.remove('showItem');
      }, 4000);
    } else {
      //amountValue = parseInt(this.amountInput);
      this.expenseInput.value = '';
      this.amountInput.value = '';

      let expense = {
        id: this.itemID,
        title: expenseTitle,
        amount: amountValue,
      };

      this.itemID++;
      this.itemList.push(expense);
      this.addExpense(expense);
      this.showBalance();
    }
  }

  //Add Single Expense
  addExpense(expense) {
    let div = document.createElement('div');
    div.classList.add('expense');
    div.innerHTML = `
      <div class="expense-item d-flex justify-content-between align-items-baseline">
        <h6 class="expense-title mb-0 text-uppercase list-item">- ${expense.title}</h6>
        <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>
        <div class="expense-icons list-item">
          <a href="#" class="edit-icon mx-2" data-id="${expense.id}"> <i class="fas fa-edit"></i> </a>
          <a href="#" class="delete-icon" data-id="${expense.id}"> <i class="fas fa-trash"></i> </a>
        </div>
      </div>
    `;

    this.expenseList.appendChild(div);
  }

  //Edit Expense List
  editExpenseList(element) {
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement;
    //Remove Expense List DOM
    this.expenseList.removeChild(parent);
    let expense = this.itemList.filter((item) => {
      return item.id === id;
    });
    //Show value
    this.expenseInput.value = expense[0].title;
    this.amountInput.value = expense[0].amount;

    //Remove item list
    let tempList = this.itemList.filter((item) => {
      return item.id !== id;
    });
    this.itemList = tempList;
    this.showBalance();
  }

  //Delete Expense List
  deleteExpenseList(element) {
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement;
    //Remove Expense List DOM
    this.expenseList.removeChild(parent);
    let expense = this.itemList.filter((item) => {
      return item.id === id;
    });
    //Remove item list
    let tempList = this.itemList.filter((item) => {
      return item.id !== id;
    });
    this.itemList = tempList;
    this.showBalance();
  }
} //End of UI class

//Event Listener function
function eventListener() {
  //get event DOM
  const budgetForm = document.querySelector('.budget-form');
  const expenseForm = document.querySelector('.expense-form');
  const expenseList = document.querySelector('.expense-list');

  //get UI CLASS
  const ui = new UI();

  //Budget form
  budgetForm.addEventListener('submit', (event) => {
    event.preventDefault();
    ui.submitBudgetForm();
  });

  //Expense form
  expenseForm.addEventListener('submit', (event) => {
    event.preventDefault();
    ui.submitExpenseForm();
  });

  //Expense List
  expenseList.addEventListener('click', (event) => {
    if (event.target.parentElement.classList.contains('edit-icon')) {
      ui.editExpenseList(event.target.parentElement);
    }

    if (event.target.parentElement.classList.contains('delete-icon')) {
      ui.deleteExpenseList(event.target.parentElement);
    }
  });
}

document.addEventListener('DOMContentLoaded', eventListener());
