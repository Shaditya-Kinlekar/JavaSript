console.log(addDecl(2, 3));
console.log(addExp(2, 3));
console.log(addArr(2, 3));
console.log(addVar(2, 3));

// function declaration -> hoisted
function addDecl(a, b) {
    return a + b;
}

//* addExp, addArr -> Temporal dead zone
// function expression -> not hoisted, (not initialised error)
const addExp = function (a, b) {
    return a + b;
};
// arrow function -> not hoisted, (not initialised error)
let addArr = (a, b) => {
    return a + b;
};

// NOTE:
var addVar = function (a, b) {
    return a + b;
};
/* 👇️
In JavaScript, function declarations are hoisted to the top of their scope. However, variable declarations are hoisted, but their assignments are not.
In your code, the variable addVar is hoisted to the top, but its assignment to the function is not hoisted. 
So when you invoke addVar(2,3) before the assignment, the variable exists but it is not yet a function. the actual value of the variable is undefined(addVar). so when u invoke addVar(2,3) its like ur passing the parameters to undefined variable and not a function,
so u get the error:  TypeError: addVar is not a function
*/
