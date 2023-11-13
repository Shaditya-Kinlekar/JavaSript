// Get the form, input, error message, and posts elements
let form = document.getElementById('form');
let input = document.getElementById('input');
let errorMssg = document.getElementById('error-msg');
let posts = document.getElementById('posts');

// Create an empty object to store data
let data = {};

// Function to create a new post
let createPost = () => {
    // Append a new post element to the posts container
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    // Clear the input value, when submitted
    input.value = '';
};

// Function to delete a post
let deletePost = (e) => {
    // Remove the parent element of the clicked delete button, div>span>i
    e.parentElement.parentElement.remove();
};

// Function to edit a post
let editPost = (e) => {
    // Set the input value to the text of the previous sibling element,,  p(sibling element) + span>i
    input.value = e.parentElement.previousElementSibling.innerHTML;
    // Remove the parent element of the clicked edit button from posts section while editing post, div>span>i
    e.parentElement.parentElement.remove();
};

// Function to accept form data and create a new post
let acceptData = () => {
    // Set the 'text' property of the data object to the input value(from text-area)
    data['text'] = input.value;
    // Create a new post after accepting data and storing it in the data{}
    createPost();
};

// Event listener for form submission
form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Perform form validation
    formValidation();
});

// Event listener for input change
input.addEventListener('input', () => {
    // If the input value is not empty, clear the error message
    if (input.value !== '') {
        errorMssg.innerHTML = '';
    }
});

// Function to validate the form
let formValidation = () => {
    // If the input value is empty, display an error message
    if (input.value === '') {
        errorMssg.innerHTML = 'Post cannot be blank!';
    } else {
        // Otherwise, accept the form data, clear the input value
        acceptData();
        input.value = '';
    }
};
