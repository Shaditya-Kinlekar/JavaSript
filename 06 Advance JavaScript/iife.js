'use strict';

//* Immediately Invoked Function Expression (IIFE) in JavaScript
/*  syntax:
        (function () {
            // …
        })();
*/

/* 
Use Cases Of IIFE:
    - Avoid polluting the global namespace 
    - To create closures
    - Avoid conflict of variable names between libraries and programs.
    - IIFE is used to create private and  public variables and methods
*/

(function hello() {
    console.log('hello world');
})(); // note that semicolon is imp to end the statement

(() => {
    console.log('whatsup');
})();

(({ age, name: myName }) => {
    console.log(`My name is ${myName} and I am ${age}`);
})({ name: 'Shadz', age: 20 });

(() => console.log('implicit arrow IIFE'))();
