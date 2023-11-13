'use strict';

const timer = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

// Function to start the timer
function startTimer() {
    // Calculate the starting time based on the current time and elapsed time
    startTime = Date.now() - elapsedTime;

    // Update the timer every 10 milliseconds
    timeInterval = setInterval(() => {
        // Calculate the elapsed time since the start
        elapsedTime = Date.now() - startTime;

        // Display the formatted time in the timer element
        timer.textContent = formatTime(elapsedTime);
    }, 10);

    // Disable the start button and enable the stop button
    startButton.disabled = true;
    stopButton.disabled = false;
}

// Function to format the elapsed time into hours, minutes, seconds, and milliseconds
function formatTime(elapsedTime) {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    // Return the formatted time as a string in the format HH:MM:SS.mm
    return (
        (hours ? (hours > 9 ? hours : '0' + hours) : '00') +
        ':' +
        (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') +
        ':' +
        (seconds ? (seconds > 9 ? seconds : '0' + seconds) : '00') +
        '.' +
        (milliseconds > 9 ? milliseconds : '0' + milliseconds)
    );
}

// Function to stop the timer
function stopTimer() {
    // Clear the interval to stop updating the timer
    clearInterval(timeInterval);

    // Enable the start button and disable the stop button
    startButton.disabled = false;
    stopButton.disabled = true;
}

// Function to reset the timer to its initial state
function resetTimer() {
    // Clear the interval to stop updating the timer
    clearInterval(timeInterval);

    // Reset the elapsed time and display '00:00:00' in the timer element
    elapsedTime = 0;
    timer.textContent = '00:00:00';

    // Enable the start button and disable the stop button
    startButton.disabled = false;
    stopButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
