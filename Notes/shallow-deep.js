'use strict';

// Shallow copy: Creates a new object or array that references the same elements as the original. Changes to one will affect the other.
// Deep copy: Creates a new object or array with independent copies of all elements. Changes to one will not affect the other.

//* Shallow copy
console.log('--- shallow copy ---');
const fruits = ['Apple', 'Orange', ['Banana', 'Mango']];
console.log('original fruits: ', fruits);

// 1. shallow copy using spread operator
const fruitsCopy = [...fruits];
console.log('original fruitsCopy: ', fruitsCopy);

// if i change any of the elements in nested[] of fruits or fruitsCopy, it should change for both since the nested[] array for both are pointing to the same memory address
fruits[2].pop();
// fruitsCopy[2].pop();
console.log('fruits: ', fruits);
console.log('fruitsCopy: ', fruitsCopy);
//* the above is demo of how shallow copy works

//* more ways to create shallow copies:
// 2. Object.assign()
// const copy = Object.assign([], fruits);  // for array
// const copy = Object.assign({}, fruits);  // for object

// 3. Using Array.prototype.slice() on arrays
// const copy = fruits.slice(); // for arrays

//* Deep Copy
console.log('--- deep copy ---');
const friendA = ['John', 'Mary', ['Jane', 'Bob']];
console.log('original friendA: ', friendA);

const clone = JSON.parse(JSON.stringify(friendA));
console.log('clone: ', clone);

// changing element in nested array of clone should not reflect in friendA or vice versa
clone[2].push('Adam');
// friendA[2].pop();
console.log('friendA: ', friendA);
console.log('clone: ', clone);
// the above is demo of how deep clone works

/* another way to deep copy:
Libraries: You can use libraries like lodash which has a .cloneDeep() to perform a deep copy.
eg:
const lodash = require('lodash');
const originalArray = [1, 2, [3, 4]];
const deepCopyArray = lodash.cloneDeep(originalArray);

deepCopyArray[2].push(5);

console.log(originalArray); // Output: [1, 2, [3, 4]]
console.log(deepCopyArray); // Output: [1, 2, [3, 4, 5]]
*/
