# SpendWise

SpendWise is an interactive monthly budgeting dashboard that helps users track income, manage expenses, and evaluate whether their current plan is healthy. This week, the project was improved to support dynamic updates, condition-based budget feedback, and user-driven expense tracking.

## Improvements made this week

The updated SpendWise app now includes:

- A cleaner budget dashboard with real-time calculations
- A dynamic expense list that lets users add or remove spending items
- Conditional messages that tell the user if they are over budget or saving well
- Event-driven interactions for buttons, forms, and list actions
- DOM updates that refresh values directly on the page without reloading the browser

## How conditionals are used

Conditionals allow the app to evaluate budget conditions and respond with useful feedback. For example:

- If the remaining balance is below zero, the app shows a danger message and warns that the user is over budget.
- If the savings rate is less than 10%, the app displays a warning about low savings.
- If the remaining balance is large enough, the application marks the budget as healthy and successful.

This logic is handled in the `getBudgetStatus()` function, which decides the message and status class shown to the user.

## How arrays are used to store data

The application stores multiple expense records in an array called `expenseRecords`. Each item in the array contains an expense name and an amount, such as:

- Housing
- Groceries
- Utilities
- Transportation
- Other

The program uses loops to iterate through the array, sum all amounts, and render each expense in the browser. This makes it easy to manage multiple records without creating separate variables for every expense.

## How the DOM is updated

The Document Object Model (DOM) is updated directly in JavaScript so the web page changes in real time. The app updates:

- Total expenses
- Remaining balance
- Savings rate
- Budget status message
- The list of expense items on the page

This is done through DOM methods such as `document.getElementById()`, `textContent`, `createElement()`, and `appendChild()`.

## How user interactions are handled through events

SpendWise responds to browser events so users can interact with the application naturally. Examples include:

- Clicking "Calculate Budget" triggers the submit event for the budget form.
- Clicking "Add Expense" adds a new item to the expense array and re-renders the list.
- Clicking "Remove" deletes an expense from the array.
- Clicking "Use Input Prompts" asks for values using a prompt and then updates the page.

These user actions are managed through event listeners such as `addEventListener("submit", ...)` and `addEventListener("click", ...)`.

## Challenges encountered and how they were resolved

One challenge was making the app work reliably in different browser contexts, especially when using prompts. Some environments block `prompt()` or do not support it in the same way. To resolve this, the app includes a safe fallback that uses the default value when a prompt is unavailable and still allows the budget logic to continue running.

Another challenge was keeping the logic organized as the app grew. This was solved by separating responsibilities into functions like `readBudgetData()`, `calculateTotalExpenses()`, `renderExpenseList()`, and `updateResults()`. That structure keeps the code easier to maintain and understand.

## How to run the project

1. Open `index.html` in a browser.
2. Enter your income and savings goal.
3. Add one or more expenses to the expense list.
4. Click "Calculate Budget" to update the dashboard.
5. Review the status message and spending summary.

## Files in this project

- `index.html` — page structure and interactive form layout
- `style.css` — dashboard styling and status colors
- `script.js` — JavaScript logic, arrays, conditionals, and event handling
- `README.md` — project overview and assignment explanation
