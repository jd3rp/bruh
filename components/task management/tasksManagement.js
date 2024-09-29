// tasks.js

// DOM Elements
const taskForm = document.getElementById('task-form');
const newTaskInput = document.getElementById('new-task-input');
const taskPrioritySelect = document.getElementById('task-priority');
const pendingTasksList = document.getElementById('pending-tasks');
const completedTasksList = document.getElementById('completed-tasks');

// Placeholder for task tracking data
const tasks = [];

// Function to add a new task
function addNewTask(event) {
    event.preventDefault();  // Prevent form from submitting

    const taskName = newTaskInput.value.trim();
    const taskPriority = taskPrioritySelect.value;

    // Validate input
    if (taskName !== '') {
        const task = {
            name: taskName,
            priority: taskPriority,
            completed: false
        };
        tasks.push(task);

        // Add task to the pending tasks list
        displayTask(task);

        // Clear input field and reset priority
        newTaskInput.value = '';
        taskPrioritySelect.value = 'low';
    } else {
        alert('Please enter a task.');
    }
}

// Function to display a task in the pending tasks list
function displayTask(task) {
    const taskItem = document.createElement('li');
    taskItem.setAttribute('role', 'article');
    taskItem.innerHTML = `
        <p>${task.name} <strong>(${task.priority})</strong></p>
        <button class="complete-btn">Mark Complete</button>
    `;

    // Event listener for completing the task
    const completeBtn = taskItem.querySelector('.complete-btn');
    completeBtn.addEventListener('click', () => completeTask(task, taskItem));

    // Append to pending tasks list
    pendingTasksList.appendChild(taskItem);
}

// Function to complete a task
function completeTask(task, taskItem) {
    task.completed = true;

    // Remove from pending tasks list
    taskItem.remove();

    // Add to completed tasks list
    const completedItem = document.createElement('li');
    completedItem.setAttribute('role', 'article');
    completedItem.innerHTML = `<p>${task.name} <strong>(Completed)</strong></p>`;
    completedTasksList.appendChild(completedItem);
}

// Event listener for adding a new task
taskForm.addEventListener('submit', addNewTask);
