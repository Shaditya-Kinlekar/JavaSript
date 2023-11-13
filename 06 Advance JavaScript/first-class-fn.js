// difference between Parameters and Arguments
function person(name, age) {
    // (name, age) are parameters
    console.log(name, age);
}
person('John', 25); // ('John', 25) - are arguments

// 1. Function Statements / Function Declaration
function funDec() {
    console.log('This is a fn declaration');
}

// 2. Function Expressions
const funExp = function () {
    console.log('this is a fn expression');
};

// 3. Arrow Functions
const funExp2 = () => {
    console.log('this is a fn expression using arrow fn');
};

// 4. Anonymous Function
// anonymous fn is a function without name, and will give an SyntaxError: requires a function name
// function () {
//     console.log('this is an anonymous fn');
// };

// 5. IIFE - Immediately Invoked Function Expression
(function () {
    console.log('this is an IIFE');
})();

// 6. Named Function Expressions
var a = function b() {
    console.log(b);
};
// b(); // ReferenceError: b is not defined
a(); // fn b() {...}

//* 7. First Class Functions / First Class Citizens
// First-class functions refer to the ability of a programming language to treat functions as first-class citizens. This means that functions can be assigned to variables, passed as arguments to other functions, and returned as values from other functions.

// using a fn as value
let add = function (num) {
    console.log(num());
};
// passing a fn as argument
add(function () {
    return 6 + 4;
});

// functions returning functions
const double = function (num) {
    return function () {
        return num * 2;
    };
};
console.log(double(50)()); // double(50)() - invokes the double fn aswell as the returning fn
// same as
const value = double(20);
console.log(value());
