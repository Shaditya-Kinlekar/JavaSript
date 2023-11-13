'use strict';

// Data is stored in key:value pairs in maps, the difference between keys in maps and objects is that keys in maps can be of any type(object, array, string, int, etc).

const restaurant = new Map();
restaurant.set('name', 'Classico Italiano'); // ('key', 'value')
restaurant.set(1, 'Firenze, Italy');
restaurant.set(2, 'Lisbon, Portugal');
// calling the set returns the updated map, u can also chain them:
restaurant
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');

console.log(restaurant);

// to read data:
console.log(restaurant.get('name'));
console.log(restaurant.get('categories'));

const time = 21;
console.log(restaurant.get(time > restaurant.get('open') && time < restaurant.get('close')));

// check if map has a key
console.log(restaurant.has('categories'));

// delete a key
restaurant.delete(2);

console.log(restaurant.size);
restaurant.clear();
console.log(restaurant);

// Array/Object as keys
const arr = [1, 2];
restaurant.set(arr, 'Test');
console.log(restaurant.get(arr));

const openingHours = {
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
};

// populating a map
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['Correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try Again!'],
]);
console.log(question);

// Converting Object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map([Object.entries(openingHours)]);
console.log(hoursMap);

// Quiz
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer: '));
const answer = 3;
console.log(question.get(question.get('Correct') === answer));

// Map to Array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

/* 
* Advantages of using maps over objects:
- Keys can be of any type: Unlike objects, which only allow string keys, maps can have keys of any type, including objects, arrays, strings, integers, etc.
- Built-in methods: Maps have built-in methods for common operations like adding, removing, and updating key-value pairs, as well as methods for iterating over the keys or values.
- Order preservation: Maps preserve the order of key-value pairs, whereas the order of properties in objects is not guaranteed.
- Size tracking: Maps have a built-in size property that allows you to easily get the number of key-value pairs in the map.

* Disadvantages of using maps over objects:
- Performance: Maps can have slower performance compared to objects for certain operations, especially when dealing with a large number of - key-value pairs. Objects are optimized for fast property access.
- No object-like features: Maps do not have some of the built-in features that objects have, such as prototype chains, constructors, and methods like hasOwnProperty().
- JSON compatibility: Maps cannot be directly serialized to JSON, whereas objects can be easily converted to JSON using JSON.stringify().
*/
