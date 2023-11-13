'use strict';

function price(...num1) {
    return num1;
}

console.log(price(20, 30, 40, 50, 60));

const user = {
    username: 'John',
    price: 100,
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user); // passing object directly
handleObject({ username: 'Shadz', price: 200 }); // passing obj manually

const myNewArray = [1, 2, 3];

function retunSecondValue(getArray) {
    return getArray[1];
}

// console.log(retunSecondValue(myNewArray));
console.log(retunSecondValue([100, 200, 300]));

// note:
/* 
functions are first-class objects in JavaScript because:
They are objects that have properties and methods
They can be stored in variables and data structures
They can be passed as arguments to other functions
They can be returned from other functions
*/
