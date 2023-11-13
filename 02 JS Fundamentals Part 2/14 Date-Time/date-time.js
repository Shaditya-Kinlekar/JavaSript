'use strict';

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23); // Month starts at 0 in js
// let myCreatedDate = new Date('17-08-2023'); // invalid
let myCreatedDate = new Date('2023-08-17');
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now(); // time in milliseconds
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

/*
let myTimeStamp = Date.now();
in javascript explain how the above concept can be used in real world project, like in hotel booking system -> GPT
*/

//* if you want to compare and convert the time from milliseconds to seconds
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getFullYear());

const day = newDate.toLocaleString('default', {
    weekday: 'short',
    year: '2-digit',
    day: 'numeric',
    month: 'numeric',
});

console.log(day);
