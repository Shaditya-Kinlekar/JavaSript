'use strict';

/* REST Pattern and Parameters */
// Rest pattern uses same syntax like spread operator however to collect multiple elements and "condense" them into an array i.e opposite of spread operator

//? Spread Operator -> unpack an array
//? Rest -> pack elements into an array

// 1) Destructuring
//* SPREAD, becauase on right side of =
// [...[3,4]] -> unpack the elements and store as individual elements i.e [1,2,3,4]
const arr = [1, 2, ...[3, 4]];
console.log('arr: ', arr);

//* REST, becauase on left side of =
// [...others] -> take the remaining elements and put it in a new array
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
    orderPizza: function (mainIngredient, ...otherIngredients) {
        //mainIngredient takes the first argument/element and otherIngredients packs all the other arguments/elements into []
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

const [pizza, , rissotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(pizza, rissotto, otherFood);
// note: otherFood does not include any "skipped" elements, it just packs the "remaining" elements, and so for that reason the "rest pattern" should always must be "last" in the destructuring assignment cuz otherwise how will js know until when it should collect the rest of the array/elements.
// Also, there can be just 'one rest element' in any destructuring assignment

//* Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// 2) Functions
// rest parameter (...num) -> packs/compresses the multiple arguments into a single variable into a array
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
};

add(5, 3);
add(2, 6, 8, 4, 1, 9);

const x = [20, 5, 15, 10];
// unpacking the elements
add(...x); // same as add(20, 5, 15, 10)

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

/* 
!Note:
Spread operator -> is used where we would write "values" separated by commas
Rest pattern -> is used where we would write "variables" separated by commas and not values separated by commas   
*/
