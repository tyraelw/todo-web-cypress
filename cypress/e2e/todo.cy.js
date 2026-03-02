/// <reference types='cypress' />

describe('todo flow test', () => {

    // Clear cookies, local storage and visit the app before each test
    // This ensures each test starts with a clean state
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.visit('https://todomvc.com/examples/react/dist/#/active')
    })

    // Verifies that multiple tasks can be created and that creating a new task
    // does not remove or affect previously created tasks
    it('should be able to create multiple tasks', () => {
        cy.addTodo('task 1')
        cy.contains('[data-testid="todo-item-label"]', 'task 1').should('be.visible')
        cy.addTodo('task 2')
        cy.contains('[data-testid="todo-item-label"]', 'task 2').should('be.visible')
        cy.contains('[data-testid="todo-item-label"]', 'task 1').should('be.visible')
    })

    // Verifies that an existing task can be edited via double-click
    // and that the updated text is reflected in the list
    it('should be able to edit a task', () => {
        cy.addAndVerifyTodo('task 1')
        cy.editTodo('task 1', 'updated task 1')
        cy.contains('[data-testid="todo-item-label"]', 'updated task 1').should('be.visible')
    })

    // Verifies that a task can be marked as completed and then unmarked back to active
    // Uses filter navigation to confirm the task appears in the correct section after each state change
    it('should be able to mark and unmark tasks', () => {
        cy.addAndVerifyTodo('task 1')
        cy.get('[data-testid="todo-item-toggle"]').click()
        cy.contains('a', 'Completed').click()
        cy.contains('[data-testid="todo-item-label"]', 'task 1').should('be.visible')
        cy.get('[data-testid="todo-item-toggle"]').should('be.checked')
        cy.get('[data-testid="todo-item-toggle"]').click()
        // After unmarking, task should disappear from Completed filter
        cy.contains('[data-testid="todo-item-label"]', 'task 1').should('not.exist')
        cy.contains('a', 'Active').click()
        cy.contains('[data-testid="todo-item-label"]', 'task 1').should('be.visible')
        cy.get('[data-testid="todo-item-toggle"]').should('not.be.checked')
    })

    // Verifies that the Active and Completed filters display only the correct tasks
    // and that the All filter restores the full list
    it('should filter active and completed tasks', () => {
        cy.addAndVerifyTodo('task 1')
        cy.addAndVerifyTodo('task 2')
        // Mark task 1 as completed, task 2 remains active
        cy.get('[data-testid="todo-item-toggle"]').first().click()
        cy.contains('a', 'Active').click()
        cy.contains('[data-testid="todo-item-label"]', 'task 2').should('be.visible')
        cy.contains('a', 'Completed').click()
        cy.contains('[data-testid="todo-item-label"]', 'task 1').should('be.visible')
        cy.contains('a', 'All').click()
        cy.contains('[data-testid="todo-item-label"]', 'task 1').should('be.visible')
        cy.contains('[data-testid="todo-item-label"]', 'task 2').should('be.visible')
    })

    // Verifies that a task can be deleted using the X button
    // force: true is required because the delete button is only visible on hover via CSS
    it('should be able to delete a task using the x button', () => {
        cy.addAndVerifyTodo('task 1')
        cy.get('[data-testid="todo-item-button"]').click({ force: true })
        cy.contains('[data-testid="todo-item-label"]', 'task 1').should('not.exist')
    })

    // Verifies that all completed tasks can be removed at once using the Clear completed button
    // and that the button itself disappears when there are no completed tasks left
    it('should clear all completed tasks', () => {
        cy.addAndVerifyTodo('task 1')
        cy.addAndVerifyTodo('task 2')
        cy.get('[data-testid="todo-item-toggle"]').first().click()
        cy.get('[data-testid="todo-item-toggle"]').last().click()
        cy.contains('button', 'Clear completed').click()
        cy.contains('[data-testid="todo-item-label"]', 'task 1').should('not.exist')
        cy.contains('[data-testid="todo-item-label"]', 'task 2').should('not.exist')
        cy.contains('button', 'Clear completed').should('not.exist')
    })

    // Verifies that the toggle-all button marks all tasks as completed at once
    // and that clicking it again restores all tasks back to active
    it('should mark all tasks using toggle button', () => {
        cy.addAndVerifyTodo('task 1')
        cy.addAndVerifyTodo('task 2')
        cy.get('#toggle-all').click()
        cy.contains('a', 'Completed').click()
        cy.contains('[data-testid="todo-item-label"]', 'task 1').should('be.visible')
        cy.contains('[data-testid="todo-item-label"]', 'task 2').should('be.visible')
        cy.get('#toggle-all').click()
        cy.contains('a', 'Active').click()
        cy.contains('[data-testid="todo-item-label"]', 'task 1').should('be.visible')
        cy.contains('[data-testid="todo-item-label"]', 'task 2').should('be.visible')
    })

})