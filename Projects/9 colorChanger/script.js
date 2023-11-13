'use strict';

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const canvas = document.querySelector('.canvas');

// buttons.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         e.stopPropagation(); // Added line to stop event propagation, so that body event doesnt interrupt the button events
//         console.log(e);
//         console.log(e.target);
//         if (e.target.id === 'grey') {
//             body.style.backgroundColor = e.target.id;
//         } else if (e.target.id === 'red') {
//             body.style.backgroundColor = e.target.id;
//         } else if (e.target.id === 'blue') {
//             body.style.backgroundColor = e.target.id;
//         } else if (e.target.id === 'yellow') {
//             body.style.backgroundColor = e.target.id;
//         }
//     });
// });

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Added line to stop event propagation, so that body event doesnt interrupt the button events
        console.log(e);
        console.log(e.target);
        if (e.target.id) {
            body.style.backgroundColor = e.target.id;
        }
    });
});

// default case clicking anywhere in body changes its color to white
body.addEventListener('click', () => {
    body.style.backgroundColor = 'white';
});

/* 
in summary:
- We loop through each button and add an event listener
- When a button is clicked, its listener function is executed
- We stop event propagation to isolate that button's listener
- We check if the clicked button has an ID
- If so, we use that ID to set the background color
- Changing the background color to match that button's ID
*/
