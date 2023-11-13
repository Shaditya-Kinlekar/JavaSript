'use strict';

const arr = [7, 8, 9];
// create new array based on arr
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);
// instead
//* use spread operator (es6+ syntax)
// -> take all the values out of the "arr" array and write them individually
const newArray = [1, 2, ...arr];
console.log(newArray);
//* log individual element of array
console.log(...newArray);

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto', ['Focaccia', 'Bruschetta']],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, //open 24 hours
            close: 24,
        },
    },
    orderPasta: function (ing1, ing2, ing3) {
        // function which accepts multiple arguments
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
};

// creating new array by expanding "restaurant.mainMenu[]" and then by adding new elements to it(i.e 'Gnocci')... here we dont manupulate the original array(restaurant.mainMenu) but create a new array(newMenu) and its "[] object" has its own new memory address
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//! spread operator is similiar to destructuring since it gets elements out of arrays but the big "difference" is spread operator takes all the elements from the arrays and it also doesn't "creates new variables" and as a consequence, we can only use it in places where we would otherwise write values sepearated by commas.

//* 2 important use cases of spread operator:-
// 1. Copy array (shallow copy)
const mainMenuCopy = [...restaurant.mainMenu];
// mainMenuCopy[3].pop();
restaurant.mainMenu[3].push('apple');
console.log(mainMenuCopy);
console.log(restaurant.mainMenu);
// similiar to Object.assign() (ref. 04 BTS JS/Primitives-vs-Objects.js)

// 2. Join/Merge 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

//* Spread operator works with all iterables
//* iterables -> arrays, strings, maps, sets but "NOT objects"

//! Note: we can only use the spread operator when building an array or when we pass values into a function. [...arr], fn(...arr)

//* Strings
const str = 'Shadz';
const letters = [...str, ' ', 'K.'];
console.log(letters);
console.log(...str);
// same as writing:  console.log('S', 'h', 'a', 'd', 'z');

//! console.log(`${...str} Kinlekar`);  // gives error, since the only place where we can use spread operator is where we can write values sepearated by commas and i.e a function(...) or arrays [,,]

//* Real-world example
const ingredients = [
    // prompt("Let's make pasta! Ingrdient 1?"),
    // prompt('Ingrdient 2?'),
    // prompt('Ingrdient 3?'),
];
console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// a better soln will be using the spread operator:
restaurant.orderPasta(...ingredients);

//* objects
//* since ES2018, the spread operator also works with objects even though objects are not iterables
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// shallow copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristornate Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
