const API_URL = 'https://jsonplaceholder.typicode.com/todos';
const LOCAL_STORAGE_KEY = 'todos';

// Fetch first 20 todos from API and store in Local Storage
async function fetchTodos() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const first20 = data.slice(0, 20);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(first20));
        renderTodos();
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

// Get todos from Local Storage
function getStoredTodos() {
    const todos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return todos ? JSON.parse(todos) : [];
}

// Delete a todo by ID
function deleteTodo(id) {
    const todos = getStoredTodos();
    const updatedTodos = todos.filter(todo => todo.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    renderTodos();
}

// Toggle completion status
function toggleComplete(id) {
    const todos = getStoredTodos();
    const updatedTodos = todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    renderTodos();
}

// Render todos to the UI
function renderTodos() {
    const todoList = document.getElementById('todo-list');
    const emptyMsg = document.getElementById('empty-msg');
    const todos = getStoredTodos();

    todoList.innerHTML = '';

    if (todos.length === 0) {
        emptyMsg.style.display = 'block';
        return;
    } else {
        emptyMsg.style.display = 'none';
    }

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = todo.completed ? 'completed' : '';
        li.innerHTML = `
            <span>${todo.title}</span>
            <div>
                <button class="toggle" onclick="toggleComplete(${todo.id})">
                    ${todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button class="delete" onclick="deleteTodo(${todo.id})">Delete</button>
            </div>
        `;
        todoList.appendChild(li);
    });
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    const todos = getStoredTodos();
    if (todos.length === 0) {
        fetchTodos();
    } else {
        renderTodos();
    }
});
