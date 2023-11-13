'use strict';

const stopwatch = document.querySelector('#stopwatch');
const time = document.querySelector('.time');

let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;

// Function to update the display of the stopwatch with the current time
const updateDisplay = function () {
    time.innerHTML = `⏱️  ${hours} : ${minutes} : ${seconds}`;
};

const startStopwatch = function () {
    // Set an interval to execute the code inside the function every 1000 milliseconds (1 second)
    interval = setInterval(function () {
        // Increment the seconds
        seconds++;
        // Check if the seconds reach 60, if so, reset seconds and increment minutes
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        // Check if the minutes reach 60, if so, reset minutes and increment hours
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        // Update the display with the new time
        updateDisplay();
    }, 1000);
};

const resetStopwatch = function () {
    // Clear the interval to stop the stopwatch
    clearInterval(interval);
    interval = null;
    // Reset the hours, minutes, and seconds to zero
    hours = 0;
    minutes = 0;
    seconds = 0;

    // Update the display with the new time
    updateDisplay();
};

const startTime = function () {
    // Check if the interval is not already running
    if (!interval) {
        // Start the stopwatch
        startStopwatch();
    }
};
const stopTime = function () {
    // Clear the interval to stop the stopwatch
    clearInterval(interval);
    interval = null; // Reset the interval
    console.log('Stopped!');
};

// Event listener to execute the code when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Update the display with the initial time
    updateDisplay();

    // Insert a set of buttons after the time element
    time.insertAdjacentHTML(
        'afterend',
        `<p><button class="btnStart">Start</button>
        <button class="btnStop">Stop</button>
        <button class="btnReset">Reset</button></p>`
    );

    // Event listener for the start button click
    document.querySelector('.btnStart').addEventListener('click', startTime);

    // Event listener for the stop button click
    document.querySelector('.btnStop').addEventListener('click', stopTime);

    // Event listener for the reset button click
    document.querySelector('.btnReset').addEventListener('click', resetStopwatch);
});
