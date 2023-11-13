'use strict';

// Q. 6
// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function leapYear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

console.log(leapYear(2016));
console.log(leapYear(2000));
console.log(leapYear(1900));
console.log(leapYear(700));

console.log('```````````````````````````````');

// method 2
const isLeapYear = (year) => new Date(year, 1, 29).getMonth() === 1;
console.log(isLeapYear(2019));
console.log(isLeapYear(1400));
console.log(isLeapYear(1800));
console.log(isLeapYear(2024));

console.log('```````````````````````````````');

// Q. 7
// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
const checkDate = (year) => {
    const day = new Date(year, 0, 1).toLocaleString([], { weekday: 'long' });
    return day === 'Sunday';
};
const arr = [];
for (let year = 2014; year <= 2050; year++) {
    if (checkDate(year)) arr.push(year);
}
console.log(arr);

// solution 2
// for (let year = 2014; year <= 2050; year++) {
//     const d = new Date(year, 0, 1);
//     if (d.getDay() === 0) console.log(`1st January is being a Sunday  ${year}`);
// }

console.log('```````````````````````````````');

// Q. 8
// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

let guessNumber = Math.floor(Math.random() * 10) + 1;
const randomNumber = Math.floor(Math.random() * 10) + 1;

if (randomNumber >= 1 && randomNumber <= 10) {
    console.log('Your guess: ', guessNumber);
    if (guessNumber === randomNumber) {
        console.log('Good Work 😄');
    } else {
        console.log('Not matched 😔');
        console.log('🚀 ~ randomNumber:', randomNumber);
    }
}

console.log('```````````````````````````````');

// 9. Write a JavaScript program to calculate the days left before Christmas.
const today = new Date();
const christmasDay = new Date(today.getFullYear(), 11, 25);

if (today.getMonth() === 11 && today.getDate() > 25) {
    christmasDay.setFullYear(christmasDay.getFullYear() + 1);
}

const oneDay = 1000 * 60 * 60 * 24;
const timeLeft = Math.ceil((christmasDay.getTime() - today.getTime()) / oneDay);
console.log(`${timeLeft} days left until Christmas!`);
