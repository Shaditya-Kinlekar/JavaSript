'use strict';

// generate a randomColor
const randomColor = function () {
    // The hex characters that can be used to generate a color
    const hex = '0123456789ABCDEF';
    // Start with '#' to indicate a color in hexadecimal notation
    let color = '#';
    // Generate a random color by randomly selecting characters from the hex string
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    // Return the generated color
    return color;
};

let intervalId;

// Function to start changing the background color at regular intervals
const startChangeColor = function () {
    // Check if the interval ID is not set
    if (!intervalId) {
        // Set the interval ID to the value returned by setInterval, which calls the changeBgColor function every 2 sec
        intervalId = setInterval(changeBgColor, 2000);
    }

    // Function to change the background color
    function changeBgColor() {
        // Get a random color using the randomColor function and set it as the background color of the body element
        document.body.style.backgroundColor = randomColor();
    }

    // Return the interval ID
    return intervalId;
};

// Function to stop changing the background color
const stopChangeColor = function () {
    // Clear the interval using the interval ID
    clearInterval(intervalId);
    // Reset the interval ID to null
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangeColor);
document.querySelector('#stop').addEventListener('click', stopChangeColor);
