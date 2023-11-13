'use strict';

const typing_ground = document.querySelector('#textarea'); // Textarea where the user types
const btn = document.querySelector('#btn'); // Button element
const score = document.querySelector('#score'); // Element to display the typing speed
const showSentence = document.querySelector('#showSentence'); // Element to display the sentence to type
const showTime = document.querySelector('.show-time'); // Element to display elapsed time

let startTime, endTime, totalTimeTaken, sentenceToWrite;

const sentences = [
    'The early bird catches the worm and gets to enjoy the rewards of its early rising',
    'Actions speak louder than words, so make sure your actions align with your intentions',
    'A journey of a thousand miles begins with a single step, so take that first step towards your goals',
    "All's fair in love and war, but it's important to remember to treat others with respect and kindness",
    'Beauty is in the eye of the beholder, and everyone has their own unique perspective on what is beautiful',
    "Don't count your chickens before they hatch, as things may not always go as planned",
    'Every cloud has a silver lining, so look for the positive aspects even in difficult situations',
    'Fortune favors the bold, so take risks and seize opportunities when they arise',
    'When life gives you lemons, make lemonade, and turn challenges into something positive',
    "Where there's a will, there's a way, so stay determined and find solutions to overcome obstacles",
];

// Selects a random sentence from the array
let randomNumber = Math.floor(Math.random() * sentences.length);
let displaySentence = sentences[randomNumber].toLowerCase().replace(/,/g, '');

// Function to check for typing errors by comparing typed words with sentence words
const checkError = (actualWords) => {
    let num = 0;
    sentenceToWrite = displaySentence;
    // Trim any leading/trailing whitespace from sentenceToWrite and split it into an array of words
    sentenceToWrite = sentenceToWrite.trim().split(' ');

    // Loop through each word in the actualWords array
    for (let i = 0; i < actualWords.length; i++) {
        // Check if the word at the current index in actualWords is equal to the word at the same index in sentenceToWrite
        if (actualWords[i] === sentenceToWrite[i]) {
            // If they are equal, increment the num variable by 1
            num++;
        }
    }
    return num;
};

// Function to calculate the typing speed and display the result
const calculateTypingSpeed = (time_taken) => {
    let totalWords = typing_ground.value.trim(); // Get the typed words and remove leading/trailing whitespace
    let actualWords = totalWords === '' ? 0 : totalWords.split(' '); // Count the number of words

    actualWords = checkError(actualWords); // Check for errors in typed words

    if (actualWords !== 0) {
        let typing_speed = Math.round((actualWords / time_taken) * 60); // Calculate the typing speed in words per minute
        score.innerHTML = `Your typing speed is ${typing_speed} words per minute & you wrote ${actualWords} ${
            actualWords === 1 ? 'correct word' : 'correct words'
        } out of ${sentenceToWrite.length} & time taken ${time_taken} sec`; // Display the result
    } else {
        score.innerHTML = `Your typing speed is 0 words per minute & time taken ${time_taken} sec`; // Display the result when no words are typed
    }
};

let intervalId,
    elapsedTime = 0;

// Function to display elapsed time during typing test
const displayTimer = () => {
    if (btn.innerText === 'Done') {
        intervalId = setInterval(() => {
            elapsedTime++;
            showTime.innerHTML = elapsedTime;
        }, 1000);
    } else if (btn.innerText === 'Start') {
        clearInterval(intervalId);
        elapsedTime = 0;
        showTime.innerHTML = '';
    }
};

// Function to start the typing test
const startTyping = () => {
    randomNumber = Math.floor(Math.random() * sentences.length);
    displaySentence = sentences[randomNumber].toLowerCase().replace(/,/g, '');
    showSentence.innerHTML = displaySentence; // Display the sentence to type in all lowercase and remove commas

    let date = new Date(); // Get the current date and time
    startTime = date.getTime(); // Record the start time in milliseconds

    btn.innerText = 'Done'; // Change the button text to 'Done'
    displayTimer();
    score.innerHTML = '';
};

// Function to end the typing test
const endTypingTest = () => {
    btn.innerText = 'Start'; // Change the button text to 'Start'
    displayTimer();
    let date = new Date(); // Get the current date and time
    endTime = date.getTime(); // Record the end time in milliseconds

    totalTimeTaken = (endTime - startTime) / 1000; // Calculate the total time taken in seconds

    calculateTypingSpeed(totalTimeTaken); // Calculate the typing speed and display the result
    showSentence.innerHTML = ''; // Clear the sentence display
    typing_ground.value = ''; // Clear the typed text
};

// Event listener for the button click
btn.addEventListener('click', () => {
    switch (btn.innerText.toLowerCase()) {
        case 'start':
            typing_ground.removeAttribute('disabled'); // Enable the textarea for typing
            startTyping();
            break;
        case 'done':
            typing_ground.setAttribute('disabled', true); // Disable the textarea for typing
            endTypingTest();
            break;
    }
});
