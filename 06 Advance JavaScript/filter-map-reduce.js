'use strict';

// const coding = ['JavaScript', 'Python', 'C++', 'Rust'];

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item;
// });
// console.log(values);
// forEach doesn't return any value
console.log('Higher Order Functions');
console.log('\n******* Filter *******');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//* filter returns a value which specifies the condition
const evenNumbers = numbers.filter((num) => num % 2 === 0); // implicit so no need to use return
console.log(evenNumbers);

const oddNumbers = numbers.filter((num) => {
    return num % 2 !== 0; // writing inside a scope so need to return
});
console.log(oddNumbers);

const arr = [];
numbers.forEach((num) => {
    //  push the num to arr if it is divisible by 3
    num % 3 === 0 && arr.push(num);
});

console.log(`arr: ${arr}`);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
];

const userBooks = books.filter((book) => book.genre === 'Fiction');
console.log(userBooks);

const myBook = books.filter((book) => {
    return book.publish >= 1990 && book.genre === 'History';
});
console.log(myBook);

console.log('\n******* Map *******');

// const sumNums = numbers.map((num) => num + 10);

const newNums = numbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 50);
console.log(newNums);

// storing the values from newNums(array) in object form using map
const obj = {};
newNums.map((num, index) => (obj[index] = num));
console.log(obj);

/*

* diff between forEach and map()
-> forEach() is used when you want to iterate over an array and perform some side effects (modifying other variables, DOM manipulation, etc).

-> map() is used when you want to transform each element into a new value, and return a new array with the transformed values.
*/

console.log('\n******* Reduce *******');

const myNums = [1, 2, 3, 4];

// usign function keyword
const total = myNums.reduce(function (acc, currValue) {
    console.log(`acc: ${acc} , currValue: ${currValue}`);
    return acc + currValue;
}, 0);

console.log(total);

// using arrow function
const total2 = myNums.reduce((acc, currValue) => acc + currValue, 40);
console.log(total2);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999,
    },
    {
        itemName: 'py course',
        price: 999,
    },
    {
        itemName: 'mobile dev course',
        price: 5999,
    },
    {
        itemName: 'data science course',
        price: 12999,
    },
];

const totalPrice = shoppingCart.reduce((acc, currValue) => acc + currValue.price, 0);
console.log(totalPrice);

// filter example:
console.log('\n******* Filtered Fruits eg: *******');
const fruits = ['apple', 'banana', 'orange', 'lime', 'lemon'];

const citrusFruits = fruits.filter((x) => {
    const lowerCasedFruit = x.toLowerCase();
    const citrusSet = new Set(['orange', 'lime', 'lemon', 'grape']);

    // Check if the 'lowerCasedFruit' exists in the 'citrusSet' using the has() method
    // The has() method returns a boolean indicating whether an element with the specified value exists in the Set object or not
    return citrusSet.has(lowerCasedFruit);
});
console.log('🚀 ~ file: random2.js:31 ~ citrusFruits:', citrusFruits);
