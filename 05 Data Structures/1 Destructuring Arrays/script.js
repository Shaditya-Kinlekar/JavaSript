'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

// destructuring: break complex data-structure into smaller DS like a variable

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// simpler way 👇️
const [x, y, z] = arr; // destructuring/unpacking array from the right side
// x => arr[0] , y => arr[1] ,  z => arr[2]
// console.log(x, y, z);

//* skips the second element in restaurant.categories[]
const [first, , third] = restaurant.categories;
// console.log(first, third);

//* swapping/switching variables
let [main, , secondary] = restaurant.categories;
console.log('before:', main, secondary);
//* 1: using a third variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log('after:', main, secondary);

//* 2: by reassigning main and secondary using destructuring
[main, secondary] = [secondary, main];
console.log('after:', main, secondary);

//* Recieve 2 return values from a fn(method)
const [starter, mainCourse] = restaurant.order(1, 0); // returns a array from which we destructure values
console.log(starter, mainCourse);

//* Nested destructuring
const nestedArr = [2, 4, [6, 8]];
// const [i, , j] = nestedArr;
// console.log(i, j);
//* how to get the values individually from the nested arr -> by doing 'destructuring inside destructuring'
const [i, , [j, k]] = nestedArr; // i->2, j->6, k->8
console.log(i, j, k);

//* Default values
const [num1 = 1, num2 = 1, num3 = 1] = [20, 40];
console.log(num1, num2, num3);
