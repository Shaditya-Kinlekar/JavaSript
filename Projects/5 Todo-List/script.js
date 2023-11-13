'use strict';

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const button = document.querySelector('.btn');

// Add an event listener to the button element
button.addEventListener('click', () => {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert('Please enter a task!');
    } else {
        // Create a new list item element and span element
        let li = document.createElement('li');
        let span = document.createElement('span');

        // Set the innerHTML of the list item element to the value of the input box
        li.innerHTML = inputBox.value;

        // Append the list item element to the list container
        listContainer.appendChild(li);

        // Set the innerHTML of the span element to the delete symbol
        span.innerHTML = '\u00d7';

        // Append the span element to the list item element
        li.appendChild(span);
    }

    // Clear the value of the input box
    inputBox.value = '';

    // Call the saveData function to save the updated list to localStorage
    saveData();
});

// Add an event listener to the list container element
listContainer.addEventListener('click', (e) => {
    // Check if the clicked element is a list item
    if (e.target.tagName === 'LI') {
        // Toggle the 'checked' class of the clicked list item
        e.target.classList.toggle('checked');

        // Call the saveData function to save the updated list to localStorage
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        // Remove the parent list item of the clicked span element
        e.target.parentElement.remove();

        // Call the saveData function to save the updated list to localStorage
        saveData();
    }
});

// Function to save the list data to localStorage
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

// Function to display the saved list from localStorage
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}
// Call the showTask function to display the saved list
showTask();
