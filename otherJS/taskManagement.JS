// Select DOM Elements
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Event Listener for Task Form Submission
taskForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get input values
    const taskTitle = document.getElementById('task-title').value;
    const taskDetails = document.getElementById('task-details').value;
    const taskDeadline = document.getElementById('task-deadline').value;

    // Validate input
    if (!taskTitle) {
        alert('Please enter a task title.');
        return;
    }

    // Create a task item
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    taskItem.innerHTML = `
        <h3>${taskTitle}</h3>
        <p>${taskDetails || 'No details provided.'}</p>
        <p><strong>Deadline:</strong> ${taskDeadline || 'No deadline set.'}</p>
        <button class="complete-task-btn">Mark Complete</button>
        <button class="delete-task-btn">Delete</button>
    `;

    // Add event listeners for buttons
    const completeBtn = taskItem.querySelector('.complete-task-btn');
    completeBtn.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
        completeBtn.textContent = taskItem.classList.contains('completed')
            ? 'Mark Incomplete'
            : 'Mark Complete';
    });

    const deleteBtn = taskItem.querySelector('.delete-task-btn');
    deleteBtn.addEventListener('click', () => {
        taskItem.remove();
    });

    // Add task to the list
    taskList.appendChild(taskItem);

    // Clear the form
    taskForm.reset();
});
