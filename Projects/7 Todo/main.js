// Get references to various elements in the DOM
let form = document.getElementById('form');
let textInput = document.getElementById('textInput');
let dateInput = document.getElementById('dateInput');
let textarea = document.getElementById('textarea');
let msg = document.getElementById('msg');
let tasks = document.getElementById('tasks');
let add = document.getElementById('add');

// Listen for the form submission event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
});

// Function to validate form inputs
let formValidation = () => {
    // Check if the text input is empty
    if (textInput.value === '') {
        console.log('failure');
        msg.innerHTML = 'Task cannot be blank';

        // Listen for input events on the text input field
        textInput.addEventListener('input', () => {
            // If text input is not empty, clear the error message
            if (textInput.value !== '') {
                msg.innerHTML = '';
            }
        });
    } else {
        console.log('success');
        msg.innerHTML = '';
        acceptData();
        // Set the 'data-bs-dismiss' attribute of the 'add' button to 'modal'
        add.setAttribute('data-bs-dismiss', 'modal');

        // Simulate a click event on the 'add' button
        add.click();
        (() => {
            // Reset the 'data-bs-dismiss' attribute of the 'add' button
            add.setAttribute('data-bs-dismiss', '');
        })();
    }
};

// Array to store task data
let data = [];

// Function to accept form data and store it in the 'data' array
let acceptData = () => {
    // Check if the form is in edit mode (if a task is being edited)
    let originalPosition = null;
    if (form.dataset.editMode === 'true') {
        // Get the original position of the task being edited
        originalPosition = parseInt(form.dataset.taskIndex);
    }

    // Create an object with the form data
    let task = {
        text: textInput.value,
        date: dateInput.value,
        description: textarea.value,
    };

    // Update or insert the task in the 'data' array
    if (originalPosition !== null) {
        data[originalPosition] = task;
    } else {
        data.push(task);
    }

    // Store the 'data' array in local storage as a JSON string
    localStorage.setItem('data', JSON.stringify(data));
    console.log(data);

    // Reset the form and update the task list
    resetForm();
    createTasks();
};

// Function to generate HTML for the tasks
let createTasks = () => {
    tasks.innerHTML = '';
    data.map((x, y) => {
        // Append HTML for each task to the 'tasks' element
        return (tasks.innerHTML += `
            <div id="${y}">
                <span class="fw-bold">${x.text}</span>
                <span class="small text-secondary">${x.date}</span>
                <p>${x.description}</p>

                <span class="options">
                <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
                <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
                </span>
            </div>
        `);
    });
};

// Function to reset the form inputs
let resetForm = () => {
    // Clear the values of the form inputs
    textInput.value = '';
    dateInput.value = '';
    textarea.value = '';

    // Clear the edit mode and task index from the form dataset
    form.dataset.editMode = 'false';
    form.dataset.taskIndex = '';
};

// Function to delete a task
let deleteTask = (e) => {
    let taskElement = e.parentElement.parentElement;
    let taskIndex = parseInt(taskElement.id);
    // Remove the task from the 'data' array
    data.splice(taskIndex, 1);

    // Update the 'data' array in local storage
    localStorage.setItem('data', JSON.stringify(data));
    console.log(data);

    // Update the task list
    createTasks();
};

// Function to edit a task
let editTask = (e) => {
    let taskElement = e.parentElement.parentElement;
    let taskIndex = parseInt(taskElement.id);
    // Get the task data from the 'data' array
    let task = data[taskIndex];

    // Populate the form inputs with the task data
    textInput.value = task.text;
    dateInput.value = task.date;
    textarea.value = task.description;

    // Set the edit mode and task index in the form dataset
    form.dataset.editMode = 'true';
    form.dataset.taskIndex = taskIndex;
};

/* // Event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the 'data' array from local storage or use an empty array if it doesn't exist
    data = JSON.parse(localStorage.getItem('data')) || [];
    // Update the task list
    createTasks();
}); */
// or
(() => {
    // Retrieve the 'data' array from local storage or use an empty array if it doesn't exist
    data = JSON.parse(localStorage.getItem('data')) || [];
    console.log(data);
    4;
    createTasks();
})();
