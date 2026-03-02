# ✅ TodoMVC - Automated E2E Testing Suite
![Cypress](https://img.shields.io/badge/Cypress-JavaScript-green)
![Testing](https://img.shields.io/badge/Testing-E2E-blue)

A comprehensive end-to-end testing suite for the TodoMVC React application using Cypress with Custom Commands design pattern. This project demonstrates professional test automation patterns including task creation, editing, filtering, and deletion validation.

Application Under Test: todomvc.com/examples/react/dist/#/

---

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Scenarios](#test-scenarios)
- [Custom Commands](#custom-commands)
- [Best Practices](#best-practices)
- [Author](#author)

---

## 🎯 Overview
This testing suite automates validation of the TodoMVC React application, covering the complete task management lifecycle including creation, editing, completion tracking, filtering, and deletion.

---

## ✨ Features
✅ **Custom Commands** - Reusable actions for common interactions  
✅ **DRY Principle** - Minimal code repetition across tests  
✅ **Data-testid Selectors** - Stable selectors that avoid relying on classes  
✅ **Clean State** - localStorage cleared before each test  
✅ **Video Recording** - Automatic recording of test runs  
✅ **Screenshot on Failure** - Easy debugging  

---

## 📁 Project Structure
```
todo-web-cypress/
├── cypress/
│   ├── e2e/
│   │   └── test.cy.js                 # Main test suite (7 tests)
│   ├── support/
│   │   ├── commands.js                # Custom commands
│   │   └── e2e.js                     # Global config
│   ├── videos/                        # Test recordings
│   └── screenshots/                   # Failure captures
├── cypress.config.js                  # Cypress configuration
├── package.json                       
├── .gitignore                         
└── README.md                          
```

---

## 🔧 Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Modern web browser (Chrome, Firefox, Edge)
```bash
# Verify installations
node --version
npm --version
```

---

## 📥 Installation

### 1. Clone the repository
```bash
git clone https://github.com/tyraelw/todo-web-cypress.git
cd todo-web-cypress
```

### 2. Install dependencies
```bash
npm install
```

---

## 🚀 Running Tests

### Interactive Mode (Recommended for development)
```bash
npx cypress open
```
Best for:
- Test development
- Debugging
- Visual inspection

### Headless Mode
```bash
npx cypress run
```

---

## 🧪 Test Scenarios

### Full Test Suite (7 tests)
Objective: Validate all core TodoMVC functionality

| # | Test | Description |
|---|------|-------------|
| 1 | Create multiple tasks | Verifies tasks are added and previous tasks are not affected |
| 2 | Edit a task | Verifies double-click edit mode and text update |
| 3 | Mark and unmark tasks | Verifies completed/active state transitions |
| 4 | Filter active and completed | Verifies each filter shows the correct tasks |
| 5 | Delete task using X button | Verifies task is removed from the DOM |
| 6 | Clear all completed tasks | Verifies bulk deletion and button visibility |
| 7 | Toggle all tasks | Verifies mark all and unmark all functionality |

**Total Validations: 20+ assertions**

---

## 🛠️ Custom Commands

Located in `cypress/support/commands.js`:

| Command | Description | Usage |
|---------|-------------|-------|
| `addTodo(text)` | Types a task and confirms with Enter | `cy.addTodo('task 1')` |
| `addAndVerifyTodo(text)` | Creates a task and verifies it is visible | `cy.addAndVerifyTodo('task 1')` |
| `editTodo(original, updated)` | Double-clicks and edits an existing task | `cy.editTodo('task 1', 'updated task 1')` |

---

## 🎯 Best Practices Implemented

### 1. Code Organization
✅ Custom Commands pattern  
✅ DRY principle  
✅ Single responsibility per command  

### 2. Test Reliability
✅ `clearAllCookies` and `clearAllLocalStorage` before each test  
✅ `data-testid` selectors over class-based selectors  
✅ `{ force: true }` for CSS hover-dependent elements  
✅ Broken command chains after DOM re-renders  

### 3. Debugging
✅ Video recording  
✅ Screenshots on failure  
✅ Descriptive test names  
✅ Professional inline comments  

---

## 👤 Author
**Isrrael Andres Toro Alvarez**

- GitHub: [@tyraelw](https://github.com/tyraelw)
- LinkedIn: [Isrrael Toro Alvarez](https://linkedin.com/in/isrrael-toro-alvarez)
- Email: tyrael78w@gmail.com

---

## 📧 Contact
For questions or feedback: tyrael78w@gmail.com

## 🔗 Related Projects
- [PokéAPI E2E Testing](https://github.com/tyraelw/pokemon-web-cypress) - E2E testing with Page Object Model
- [E-commerce Testing Suite](https://github.com/tyraelw/cypress-ecommerce-testing) - Full purchase flow automation
- [Trello API Testing](https://github.com/tyraelw/trello-api-testing) - REST API automation with Postman

---
⭐ If you find this project helpful, please consider giving it a star!