'use strict';

// Looping Objects keys, Values, and Entries

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
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

// Property Names
const properties = Object.keys(restaurant.openingHours); // returns an array with the key names
console.log(properties);

// for (const day of Object.keys(restaurant.openingHours)) {
//     console.log(day); // logs all key names present in openingHours
// }

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
    console.log(day);
    openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(restaurant.openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}
