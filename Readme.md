# 📌 Loan Management System - Functional Testing

This repository contains **functional tests** for the **Loan Management System**, covering **UI Testing** using **Cypress**.  

## 📖 Table of Contents
- [🚀 Overview](#-overview)  
- [📂 Project Structure](#-project-structure)  
- [🛠️ Installation & Setup](#-installation--setup)  
- [🧪 Running Automated Tests](#-running-automated-tests)  
- [📊 Test Coverage](#-test-coverage)  
- [⚙️ Configuration](#-configuration)  
- [📝 Reporting](#-reporting)  
- [🎯 Future Improvements](#-future-improvements)  
- [📞 Support](#-support)  

---

## 🚀 Overview
This project automates the **functional testing** of the Loan Management System, focusing on **UI Testing** using **Cypress**.  It ensures the core functionality of the system works as expected from a user's perspective.


---

## 📂 Project Structure

```sh
/loan-management-testing
├── /cypress              # Cypress UI test automation
│   ├── /e2e            # End-to-end test files
│   ├── /fixtures       # Test data (borrowers, loans, etc.)
│   ├── /support        # Custom Cypress commands
│   ├── cypress.config.js # Cypress configuration
├── README.md             # Documentation
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/loan-management-testing.git
cd loan-management-testing
```

### 2️⃣ Install Dependencies
- Cypress (for UI testing)
```sh
npm install cypress --save-dev
```

### 🧪 Running Automated Tests
- ✅ Running UI Tests (Cypress)

1. Open Cypress GUI:

```sh
npx cypress open
```
- Select and run specific UI test cases.


2. Run Cypress tests in headless mode:

```sh
npx cypress run --spec "cypress/e2e/borrowers.cy.js"
```
- Replace "cypress/e2e/borrowers.cy.js" with the path to the specific test file you want to execute. You can also use wildcards to run multiple tests (e.g., cypress/e2e/*.cy.js).

### 📊 Test Coverage

| Test Suite      | Status |
|-----------------|--------|
| Login Tests     | ❌ Failed |
| Borrowers Tests | ✅ Passed |
| Dashboard Tests | ✅ Passed |
| Email Tests     | ✅ Passed |
| Loans Tests     | ✅ Passed |
| Payments Tests  | ✅ Passed |


### ⚙️ Configuration
🔹 Update cypress.config.js to customize settings like the base URL, support file, and retry attempts.

```sh
export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8000", // URL of the Loan Management System
    supportFile: "cypress/support/e2e.js", // Path to the support file
    retries: 2 // Number of retry attempts for failed tests
  },
});
```

### 📝 Reporting
### 📌 Cypress Reports

Generate Cypress HTML report (using Mochawesome reporter):

```sh

npx cypress run --reporter mochawesome
```

Report is saved in:

```sh
cypress/reports/mochawesome-report/
```

### 🎯 Future Improvements
🔹 Fix Login Test Failure

🔹 Performance testing using Gatling

🔹 Security testing for authentication endpoints

🔹 Integration with CI/CD pipeline

### 📞 Support
If you encounter any issues, feel free to open an issue or contact:

📧 Email: petermwovi73@gmail.com

🔗 GitHub: Mwovi