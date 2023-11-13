//* arguments object in functions

/* 
arguments object behaves in different types of functions:
1. Regular Functions:
    - arguments object is available inside regular functions.
    - arguments object contains all the arguments passed to the function, including the ones not explicitly defined in the function signature.
    - arguments object is an array-like object, but not an actual array. It does not have access to array methods like forEach() or map().
    - Changes made to the arguments object do not affect the original arguments passed to the function.

2. Arrow Functions:
    - arguments object is not available inside arrow functions.
    - Arrow functions do not have their own arguments object, so they cannot access the arguments passed to them.
    - It is recommended to use rest parameters (...args) in arrow functions to capture the arguments instead.

3. Methods:
    arguments object is not available inside methods of objects or classes.
    Methods have access to the arguments passed to them through regular function parameters.
    If you need an array-like object that contains all the arguments, you can use the spread syntax (...args) to capture the arguments as an array.

4. Callback Functions:
    arguments object behaves the same way as in regular functions when used as a callback function.
    It contains all the arguments passed to the callback function, even the ones not explicitly defined in the function signature.
    Changes made to the arguments object do not affect the original arguments passed to the callback function.
*/

console.log('----- Regular Function -----');
function regularFunction(a, b, c) {
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    console.log(arguments); // [1, 2, 3]
    console.log(arguments[0]); // 1
    console.log(arguments.length); // 3
}
regularFunction(1, 2, 3);

console.log('----- Arrow Function -----'); // does not have access to arguments
const arrowFunction = (...args) => {
    console.log(args); // [1, 2, 3]
    console.log(args[0]); // 1
    console.log(args.length); // 3
};
arrowFunction(1, 2, 3);

console.log('----- Method -----');
const obj = {
    method(a, b) {
        console.log(arguments); // [1, 2, 3]
        console.log(arguments[0]); // 1
        console.log(arguments.length); // 3
    },
};
obj.method(1, 2, 3);

console.log('----- Callback Function -----');
function callbackFunction(a, b, callback) {
    callback(a, b);
}

callbackFunction(100, 200, function (a, b) {
    console.log(`a: ${a}`);
    arguments[1] = 93228;
    console.log(b);
    a = 99;
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments.length);
});
