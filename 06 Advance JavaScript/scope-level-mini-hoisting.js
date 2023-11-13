'use strict';

if (true) {
    const username = 'shadz';
    if (true) {
        console.log(username);
        const age = 23;
    }
    // console.log(age);  // error: age is not defined
}
// console.log(username); // error: username is not defined

console.log(addOne(5));
function addOne(num) {
    // hoisted
    return num + 1;
}

console.log(addTwo(8)); // error: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    // not hoisted
    return num + 2;
};

