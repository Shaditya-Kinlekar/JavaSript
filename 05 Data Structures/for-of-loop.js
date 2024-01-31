'use strict';

/* 
The .entries() method is used to get an iterator object that contains key-value pairs for each element in an array. Each key-value pair is represented as an array with two elements: the index/key and the corresponding value.
*/

const fruits = ['apple', 'banana', 'orange'];
const entries = fruits.entries(); // Get the iterator object

for (const [index, value] of entries) {
  console.log(`Index: ${index}, Value: ${value}`);
}
// Output:
// Index: 0, Value: apple
// Index: 1, Value: banana
// Index: 2, Value: orange

const restaurant = {
  name: 'Classico Italiano',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for-of loop,  loops through array and logs each item
for (const item of menu) console.log(item);

// for (const iterator of menu.entries()) {
//     console.log(iterator);
// }
// console.log('menu.entries(): ', [...menu.entries()]);

for (const [index, item] of menu.entries()) {
  console.log(`${index + 1} : ${item}`);
}
console.log('--------------------');

// code to return max number from an array
let math = {
  max(numbers) {
    let max = -Infinity;

    for (const num of numbers) {
      num > max ? (max = num) : null;
    }
    return max;
  },
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(math.max(numbers));

