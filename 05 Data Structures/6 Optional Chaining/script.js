'use strict';

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
      open: 0,
      close: 24,
    },
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours.mon?.open); // undefined cuz mon doesn't exist
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours?.fri?.open);

// Example - objects
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // read as restaurant.openingHours.mon
  // if (open !== undefined) {
  //     console.log(`On ${day}, we open at ${open}`);
  // }
  if (open) {
    console.log(`On ${day}, we open at ${open}`);
  }
}

// Methods (to check if Method exists)
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderPizza?.(0, 1) ?? 'Method does not exist');

// Arrays (to check if Array exists)
const users = [{ name: 'Jonas', email: 'jonas@example.com' }];

console.log(users[0]?.name ?? 'User array does not exist');
// without optional chaining
if (users.length > 0) console.log(users[0].name);
else console.log('User array does not exist');
