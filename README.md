# SpendWise

SpendWise is a simple monthly budget planner that helps users track income, expenses, and savings goals. The app lets a person enter financial data to understand how much money remains after paying fixed and variable costs. This makes the project useful for everyday budgeting and for learning how JavaScript can work with real data.

## JavaScript concepts implemented

This project applies core JavaScript concepts from the course:

- Variables store financial values such as income, expenses, and the savings target.
- Data types include numbers for money values and strings for labels and messages.
- User input is collected through form fields and browser prompts.
- Calculations are used to total monthly spending and determine the remaining balance.
- Functions organize repeated logic so the code stays clear and reusable.

## How variables are being used

The app uses variables to keep budget information easy to manage. For example, the monthly income, housing cost, grocery spending, utilities, transportation, and other expenses are each stored in variables. These values are later used to calculate total spending and the remaining balance.

## How user input is collected

SpendWise collects user input in two ways:

1. Form fields in the browser let the user type numbers into the page.
2. The app also uses `prompt()` to gather budget information when the user clicks the "Use Input Prompts" button.

Once numbers are entered, the program stores them in variables and updates the page instantly.

## How calculations are performed

The app performs the following calculations:

- Total expenses = housing + groceries + utilities + transportation + other expenses
- Remaining balance = monthly income - total expenses - savings goal
- Savings rate = (savings goal / monthly income) * 100

These calculations are completed in JavaScript and displayed in labeled result boxes and in the browser console.

## How functions help organize the code

The application uses functions to separate the logic into reusable blocks:

- `readBudgetData()` reads values from the HTML form and stores them in the budget object.
- `calculateTotalExpenses()` totals all spending categories.
- `calculateRemainingBalance()` determines how much money is left after expenses and savings.
- `calculateSavingsRate()` measures the savings percentage.
- `updateResults()` refreshes the user interface and logs the summary to the console.

This structure makes the code easier to read, update, and maintain.

## How to run the project

1. Open `index.html` in a browser.
2. Enter your monthly budget values or click the example button.
3. Click "Calculate Budget" to display the results.
4. Open the browser developer console to view labeled budget logs.

## Files in this project

- `index.html` — page layout and form structure
- `style.css` — styling for the budgeting dashboard
- `script.js` — budget calculations and interactive logic

