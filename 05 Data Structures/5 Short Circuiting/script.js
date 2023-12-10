'use strict';

//* Logical Operator
// 3 properties:
// use ANY datatype, return ANY datatype, short-circuiting

console.log('------------- OR ---------------');
// short-circuiting in the case of "||" operator: if the first value is a "truthy" value then it will immediately return the first value, if the first value is a "truthy" value then JS wont even evaluate the other/second value.
console.log(3 || 'hello');
console.log('' || 'Javascript');
console.log(true || 0);
console.log(undefined || null); // both falsy so returns the last falsy value
console.log(undefined || 0 || '' || 'React' || 23 || null);

const restaurant = {
  name: 'Classico Italiano',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// if numGuests exists store its value otherwise store a default value of 10
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

// evaluating using || (better approach as compared to the above or using if/else)
restaurant.numGuests = 30;
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('------------- AND ---------------');
// short-circuiting in the case of "&&" operator: if the first value is a "falsy" value then it will immediately return the first value, if the first value is a "falsy" value then JS wont even evaluate the other/second value.
console.log(0 && 'hello');
console.log(7 && 'hello'); // both truthy so returns the last truthy value
console.log('hello' && 20 && null && undefined);
console.log(undefined && null);

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// to check if a certain value exists, which can be done in a simpler way 👇️
restaurant.orderPizza && restaurant.orderPizza('tomato', 'cheese'); // both truthy so returns the last truthy value

/* To summarise:
-> the || operator will return the first truthy value of all operands or the last value if all of the operands are falsy
-> the && operator will return the first falsy value of all operands or the last value if all of the operands are truthy

for Practical applications:
-> we can use the || operator to set default values 
-> we can use the && operator to execute the code in the second operand if the the first one is true
*/

//* ------------------ Nullish Coalescing Operator (es2020) -----------------------

// Nullish values: null and undefined (NOT 0 or '')
// for Nullish Coalescing operator it is as if 0 and '' were not falsy values and were instead truthy values.
restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
// only if restaurant.numGuests was null/undefined then guestCorrect = 10
console.log(guestCorrect);
