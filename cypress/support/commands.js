// Creates a new todo item by typing the given text into the input field and pressing Enter
Cypress.Commands.add('addTodo', (text) => {
    cy.get('#todo-input').type(text + '{enter}')
})

// Triggers edit mode on an existing todo via double-click, clears the input,
// types the updated text and confirms with Enter
// Note: after dblclick the label is removed from the DOM and replaced by an input field,
// so the edit input must be targeted separately
Cypress.Commands.add('editTodo', (originalText, updatedText) => {
    cy.contains('[data-testid="todo-item-label"]', originalText).dblclick()
    cy.get('[data-testid="todo-item"] input').clear().type(updatedText + '{enter}')
})

// Creates a new todo and immediately verifies it is visible in the list
// Used as a setup step in tests where task creation is a precondition, not the main assertion
Cypress.Commands.add('addAndVerifyTodo', (text) => {
    cy.addTodo(text)
    cy.contains('[data-testid="todo-item-label"]', text).should('be.visible')
})