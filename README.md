# SpendWise – Monthly Budget Planner

## Project Description

SpendWise is a responsive, interactive monthly budgeting dashboard. It helps users enter their monthly income and savings goal, record expenses, and understand their remaining balance and savings rate. The dashboard also provides budget-status feedback to help users notice when they are over budget or maintaining a healthy balance.

## Technologies Used

- **HTML5** – page structure and accessible form controls
- **CSS3** – responsive layout, styling, and status indicators
- **JavaScript (Vanilla JS)** – budget calculations, expense management, DOM updates, and event handling
- **Git and GitHub** – source control and project hosting
- **Netlify** – live website hosting and continuous deployment

## GitHub Repository Information

- **Repository:** [Spendwise](https://github.com/malouyienpuot/Spendwise)
- **Owner:** malouyienpuot
- **Default branch:** `main`
- **Visibility:** Public

## Live Netlify Website

[https://spendwise-tracker2.netlify.app/](https://spendwise-tracker2.netlify.app/)

## Main Features

- Enter monthly income and a savings target.
- Add expenses with a name and amount.
- Remove individual expenses or clear the expense list.
- Calculate total expenses, remaining balance, and savings rate.
- Receive a status message based on the budget results.
- Load an example budget to explore the dashboard.
- Use the responsive layout on desktop and mobile screens.

## Project Structure

```text
Spendwise/
├── index.html   # Application structure and forms
├── style.css    # Responsive design and visual styling
├── script.js    # Budget calculations and interactive features
└── README.md    # Project documentation and deployment notes
```

## Deployment Process Summary

1. Reviewed the project files and confirmed that `index.html`, `style.css`, and `script.js` are in the repository root.
2. Pushed the project source code to the public GitHub repository.
3. Connected the GitHub repository to Netlify and selected the `main` branch for deployment.
4. Configured the site as a static website. No build command is required; the publish directory is the repository root (`.`).
5. Set the Netlify site name to **spendwise-tracker2**, giving the site the URL shown above.
6. Added a visible deployment/version note to the application and committed the change to GitHub. With the repository connected to Netlify, a push to the selected branch triggers a new deployment automatically.
7. Checked the live site and the main budgeting interactions.

## Testing Checklist

- [ ] Open the live Netlify URL and confirm the page loads.
- [ ] Confirm the CSS styling is applied and the JavaScript runs.
- [ ] Calculate a budget using different income and savings values.
- [ ] Add an expense and confirm the totals update.
- [ ] Remove an expense and clear the expense list.
- [ ] Load the example budget and confirm the values change.
- [ ] Check the layout on both desktop and mobile screen sizes.
- [ ] After a new GitHub commit, check the Netlify Deploys page and confirm the latest deployment is published.

## Challenges Encountered During Deployment

The main deployment tasks that require care are keeping the HTML, CSS, and JavaScript file paths correct, choosing the repository root as the publish directory for a plain static site, and confirming that Netlify is connected to the correct GitHub repository and branch. These are addressed by keeping the three application files together in the root directory and using the `main` branch for deployment.

A further point to verify is that a successful GitHub push is followed by a completed Netlify deployment. The Netlify Deploys page provides the deployment status and build log if a deployment fails.

## Lessons Learned

- A simple HTML, CSS, and JavaScript project can be published without a build command.
- GitHub provides version control and a central place to maintain the project.
- Netlify can deploy a connected repository automatically whenever changes are pushed to the configured branch.
- Correct file paths and publish-directory settings are important for static-site deployment.
- Testing the live website is necessary because a project working locally does not by itself prove that the deployed version works.
- Small updates followed by a GitHub push are a practical way to check the continuous-deployment workflow.

## Run the Project Locally

1. Clone or download this repository.
2. Open the project folder in a code editor.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Enter income and savings details, then add expenses to try the budget planner.

---

**Project:** SpendWise  
**Live site:** https://spendwise-tracker2.netlify.app/  
