'use strict';

//* Set -> collection of unique values and are iterables
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);

//* How are sets different from arrays?
// -> they have unique values and the order of elements in the set is irrelevant

console.log(new Set('Jonas')); // since strings are iterable

console.log(ordersSet.size); // total unique items

console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');

ordersSet.delete('Pizza');

console.log(ordersSet);

//!  Note: there are no indexes in sets and there is no way of getting values out of a set
// there is no need of getting values out of a set -> because they are unique and if they're order does not matter then there is no point in retrieving elements out of a set, all we need to know if a certain value is in a set or not n for that we have "has" method
//* if youre goal is to store values in order and then retrieve it then just use "Arrays"

// ordersSet.clear();
// console.log(ordersSet);

//* iterating through each element
for (const order of ordersSet) console.log(order);

//* main use case -> remove duplicates from Arrays

// Example
const staff = ['Chef', 'Waiter', 'Chef', 'Manager', 'Chef', 'Waiter'];
// which unique positions are there? or what unique values are there?
const staffUnique = new Set(staff); // in set form
const staffUniqueArray = [...new Set(staff)]; // converted from set to array
console.log(staffUniqueArray);
z
//* counting unique characters in the string
const str = 'ajkfjdfja jdjfajdajdsk';
console.log(new Set(str).size); // returns the number of unique characters(7, also counts the space)
const uniqueCharactersCount = new Set(str.replace(/\s/g, '')).size; // to only count the characters without spaces by replacing whitespace characters(space, tab, newline, etc.) with empty string
// another way - str.replace(/ /g, '') -> replaces only spaces
console.log(uniqueCharactersCount);

//* Conclusion
// Sets are not intended to replace Arrays, so whenever u want to store values in order that might contain duplicates always just use arrays, also when you want to manupulate data use Arrays
