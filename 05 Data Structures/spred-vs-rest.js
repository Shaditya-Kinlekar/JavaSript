// -----------------------------   SPREAD VS REST  -------------------------------- //

//* Spread Operator:
// The spread operator in JavaScript is denoted by three dots (...). It is primarily used to "spread" or unpack the elements of an iterable (like an array or a string) into individual elements. Here's an example:
const nums = [1, 2, 3];
console.log(...nums); // Output: 1 2 3
// In this case, the spread operator ...numbers takes the elements of the numbers array and spreads them as individual values. It's equivalent to writing console.log(1, 2, 3).

// The spread operator is commonly used in various contexts, such as:
// 1. Concatenating arrays:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// 2. Copying arrays:
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]

// 3. Passing arguments to functions:
const numbers = [1, 2, 3];
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(...numbers)); // Output: 6

//* Rest Pattern:
// The rest pattern, also denoted by three dots (...), is used in function parameters to collect multiple arguments into a single array. It is the opposite of the spread operator. Here's an example:
function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}
console.log(sum(1, 2, 3, 4)); // Output: 10
// In this case, the rest pattern ...numbers collects all the arguments passed to the sum function into an array called numbers. It allows you to handle a variable number of arguments without explicitly specifying them as individual parameters.

// The rest pattern is particularly useful when you want to work with multiple arguments as a group inside a function.

//* To summarize:
// The spread operator is used to spread or unpack the elements of an iterable (like an array) into individual values.
// The rest pattern is used in function parameters to collect multiple arguments into a single array.
