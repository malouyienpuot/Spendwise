const budget = {
  monthlyIncome: 0,
  housing: 0,
  groceries: 0,
  utilities: 0,
  transportation: 0,
  otherExpenses: 0,
  savingsGoal: 0,
};

const form = document.getElementById("budget-form");
const totalExpensesElement = document.getElementById("totalExpenses");
const remainingBalanceElement = document.getElementById("remainingBalance");
const savingsRateElement = document.getElementById("savingsRate");

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function readBudgetData() {
  const incomeInput = Number(document.getElementById("income").value);
  const housingInput = Number(document.getElementById("housing").value);
  const groceriesInput = Number(document.getElementById("groceries").value);
  const utilitiesInput = Number(document.getElementById("utilities").value);
  const transportationInput = Number(document.getElementById("transportation").value);
  const otherExpensesInput = Number(document.getElementById("otherExpenses").value);
  const savingsGoalInput = Number(document.getElementById("savingsGoal").value);

  budget.monthlyIncome = incomeInput;
  budget.housing = housingInput;
  budget.groceries = groceriesInput;
  budget.utilities = utilitiesInput;
  budget.transportation = transportationInput;
  budget.otherExpenses = otherExpensesInput;
  budget.savingsGoal = savingsGoalInput;

  return budget;
}

function calculateTotalExpenses(budgetData) {
  return (
    budgetData.housing +
    budgetData.groceries +
    budgetData.utilities +
    budgetData.transportation +
    budgetData.otherExpenses
  );
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

function updateResults() {
  const budgetData = readBudgetData();
  const totalExpenses = calculateTotalExpenses(budgetData);
  const remainingBalance = calculateRemainingBalance(
    budgetData.monthlyIncome,
    totalExpenses,
    budgetData.savingsGoal
  );
  const savingsRate = calculateSavingsRate(
    budgetData.monthlyIncome,
    budgetData.savingsGoal
  );

  totalExpensesElement.textContent = formatCurrency(totalExpenses);
  remainingBalanceElement.textContent = formatCurrency(remainingBalance);
  savingsRateElement.textContent = `${savingsRate.toFixed(2)}%`;

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
  const housing = getPromptValue("Enter your housing cost:", "1500");
  const groceries = getPromptValue("Enter your grocery spending:", "500");
  const utilities = getPromptValue("Enter your utility cost:", "250");
  const transportation = getPromptValue("Enter your transportation cost:", "220");
  const otherExpenses = getPromptValue("Enter other monthly expenses:", "350");
  const savingsGoal = getPromptValue("Enter your savings goal:", "600");

  document.getElementById("income").value = monthlyIncome;
  document.getElementById("housing").value = housing;
  document.getElementById("groceries").value = groceries;
  document.getElementById("utilities").value = utilities;
  document.getElementById("transportation").value = transportation;
  document.getElementById("otherExpenses").value = otherExpenses;
  document.getElementById("savingsGoal").value = savingsGoal;

  updateResults();
}

function loadExampleBudget() {
  document.getElementById("income").value = 5200;
  document.getElementById("housing").value = 1700;
  document.getElementById("groceries").value = 540;
  document.getElementById("utilities").value = 240;
  document.getElementById("transportation").value = 310;
  document.getElementById("otherExpenses").value = 420;
  document.getElementById("savingsGoal").value = 650;

  updateResults();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  updateResults();
});

document.getElementById("promptButton").addEventListener("click", collectBudgetPrompts);
document.getElementById("sampleButton").addEventListener("click", loadExampleBudget);

updateResults();
