const budget = {
  monthlyIncome: 4500,
  savingsGoal: 600,
};

const defaultExpenses = [
  { name: "Housing", amount: 1500 },
  { name: "Groceries", amount: 500 },
  { name: "Utilities", amount: 250 },
  { name: "Transportation", amount: 220 },
  { name: "Other", amount: 350 },
];

let expenseRecords = defaultExpenses.map((expense) => ({ ...expense }));

const form = document.getElementById("budget-form");
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expenseList");
const totalExpensesElement = document.getElementById("totalExpenses");
const remainingBalanceElement = document.getElementById("remainingBalance");
const savingsRateElement = document.getElementById("savingsRate");
const statusMessage = document.getElementById("statusMessage");

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function readBudgetData() {
  const monthlyIncome = Number(document.getElementById("income").value) || 0;
  const savingsGoal = Number(document.getElementById("savingsGoal").value) || 0;

  budget.monthlyIncome = monthlyIncome;
  budget.savingsGoal = savingsGoal;

  return budget;
}

function calculateTotalExpenses(expenses) {
  let total = 0;

  for (let index = 0; index < expenses.length; index += 1) {
    total += Number(expenses[index].amount);
  }

  return total;
}

function calculateRemainingBalance(income, expenses, savingsGoal) {
  return income - expenses - savingsGoal;
}

function calculateSavingsRate(income, savingsGoal) {
  if (income === 0) {
    return 0;
  }

  return (savingsGoal / income) * 100;
}

function getBudgetStatus(remainingBalance, savingsRateValue) {
  if (remainingBalance < 0) {
    return { message: "Warning: you are over budget. Reduce spending or increase income.", className: "danger" };
  }

  if (savingsRateValue < 10) {
    return { message: "Keep an eye on savings. Your savings rate is below 10%.", className: "warning" };
  }

  if (remainingBalance > 1000) {
    return { message: "Great job! You have a healthy budget cushion.", className: "success" };
  }

  return { message: "Your budget is balanced. You are on track for the month.", className: "neutral" };
}

function renderExpenseList() {
  expenseList.innerHTML = "";

  if (expenseRecords.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "expense-item";
    emptyItem.innerHTML = "<span>No expenses added yet.</span>";
    expenseList.appendChild(emptyItem);
    return;
  }

  expenseRecords.forEach((expense, index) => {
    const listItem = document.createElement("li");
    listItem.className = "expense-item";

    const expenseLabel = document.createElement("span");
    expenseLabel.textContent = `${expense.name}: ${formatCurrency(expense.amount)}`;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "remove-button";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      expenseRecords.splice(index, 1);
      renderExpenseList();
      updateResults();
    });

    listItem.appendChild(expenseLabel);
    listItem.appendChild(removeButton);
    expenseList.appendChild(listItem);
  });
}

function updateResults() {
  const budgetData = readBudgetData();
  const totalExpenses = calculateTotalExpenses(expenseRecords);
  const remainingBalance = calculateRemainingBalance(
    budgetData.monthlyIncome,
    totalExpenses,
    budgetData.savingsGoal
  );
  const savingsRate = calculateSavingsRate(
    budgetData.monthlyIncome,
    budgetData.savingsGoal
  );
  const status = getBudgetStatus(remainingBalance, savingsRate);

  totalExpensesElement.textContent = formatCurrency(totalExpenses);
  remainingBalanceElement.textContent = formatCurrency(remainingBalance);
  savingsRateElement.textContent = `${savingsRate.toFixed(2)}%`;
  statusMessage.textContent = status.message;
  statusMessage.className = `status ${status.className}`;

  console.log("SpendWise Budget Summary");
  console.log("Monthly income:", formatCurrency(budgetData.monthlyIncome));
  console.log("Total expenses:", formatCurrency(totalExpenses));
  console.log("Remaining balance:", formatCurrency(remainingBalance));
  console.log("Savings rate:", `${savingsRate.toFixed(2)}%`);
}

function getPromptValue(message, defaultValue) {
  if (typeof window !== "undefined" && typeof window.prompt === "function") {
    try {
      const userInput = window.prompt(message, defaultValue);
      if (userInput === null || userInput === "") {
        return Number(defaultValue);
      }

      return Number(userInput);
    } catch (error) {
      console.warn("Prompt is unavailable in this browser context.", error);
    }
  }

  return Number(defaultValue);
}

function collectBudgetPrompts() {
  const monthlyIncome = getPromptValue("Enter your monthly income:", "4500");
  const savingsGoal = getPromptValue("Enter your savings goal:", "600");

  document.getElementById("income").value = monthlyIncome;
  document.getElementById("savingsGoal").value = savingsGoal;
  updateResults();
}

function loadExampleBudget() {
  document.getElementById("income").value = 5200;
  document.getElementById("savingsGoal").value = 650;

  expenseRecords = [
    { name: "Housing", amount: 1700 },
    { name: "Groceries", amount: 540 },
    { name: "Utilities", amount: 240 },
    { name: "Transportation", amount: 310 },
    { name: "Other", amount: 420 },
  ];

  renderExpenseList();
  updateResults();
}

function addExpense(event) {
  event.preventDefault();

  const expenseName = document.getElementById("expenseName").value.trim();
  const expenseAmount = Number(document.getElementById("expenseAmount").value);

  if (!expenseName || Number.isNaN(expenseAmount) || expenseAmount <= 0) {
    statusMessage.textContent = "Please enter a valid expense name and amount.";
    statusMessage.className = "status warning";
    return;
  }

  expenseRecords.push({ name: expenseName, amount: expenseAmount });
  expenseForm.reset();
  document.getElementById("expenseName").focus();
  renderExpenseList();
  updateResults();
}

function clearExpenseList() {
  expenseRecords = [];
  renderExpenseList();
  updateResults();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  updateResults();
});

expenseForm.addEventListener("submit", addExpense);
document.getElementById("clearExpenses").addEventListener("click", clearExpenseList);
document.getElementById("promptButton").addEventListener("click", collectBudgetPrompts);
document.getElementById("sampleButton").addEventListener("click", loadExampleBudget);

renderExpenseList();
updateResults();
