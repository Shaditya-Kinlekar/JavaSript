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
      open: 0, //open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // destructuring the obj which is passed as argument into variables(with defaults) 👇️
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '8 pm', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

//* Object Destructuring
// order of declaring variabales doesnt matter
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // this variable names should match the property names in the object(restaurant)
// 👇️ if you want to change the variable names while destructuring from the object
// syntax-> propertyName: variableName
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

//* Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
/*
! Note:  
 * menu without "menu = []" (default value) gives undefined
 * default values only apply if the property is not there in the object(restaurant) / has no value like "menu",
 * since,  starterMenu has value in restaurant object, starters = [] (default value) was not applied
 * starters is the new variabale name for starterMenu
 * setting defaults is useful when we dont know the data, like while getting data from an api
*/

//* Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // changing the original values of a-111, b-999 by destructuring/getting the value from obj
console.log(a, b);

//* Nested Objects
const {
  // fri: { open, close },
  fri: { open: opening, close: closing }, // changing variable names
} = openingHours;
console.log(opening, closing);

//* passing obj as argument
restaurant.orderDelivery({
  time: '11:23 PM',
  address: 'Mumbai,India',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Panaji,Goa',
});
