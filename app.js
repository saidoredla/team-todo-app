// Global array to store our tasks in memory
let todos = [];

// DOM Elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Helper function to render tasks on screen
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <div>
                <button onclick="toggleComplete(${index})">✓</button>
                <button onclick="deleteTodo(${index})">✗</button>
            </div>
        `;
        todoList.appendChild(li);
    });
}
    // Feature: Add Task
addBtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if (taskText !== '') {
        todos.push({ text: taskText, completed: false });
        todoInput.value = '';
        renderTodos();
    }
});
// Feature: Complete Task
window.toggleComplete = function(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

// Feature: Delete Task
window.deleteTodo = function(index) {
    todos.splice(index, 1);
    renderTodos();
}
