'use strict';

function temp() {
    console.log(this);
}
temp();
console.log(this);

const test = () => {
    let username = 'shadz';
    console.log(this.username);
};
test();

const addTwo = (num1, num2) => {
    return num1 + num2;
};
console.log(addTwo(2, 3));

// implicit return
const addTwo2 = (num1, num2) => num1 + num2;
console.log(addTwo2(7, 3)); 

/* syntax for implicit:
1. using curly braces so need to use return
const test = () => {return 'hello'}

2. using () so no need to use return
const random = () => ('hello')
*/

// implicit function returning obj
const hello = () => ({name: 'shadz'});
console.log(hello());


