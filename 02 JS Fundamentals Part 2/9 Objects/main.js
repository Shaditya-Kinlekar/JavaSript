'use strict';

const random = {
    'full name': 'john snow',
};

console.log(random['full name']); // only way to access a key which has space in it

//! note: JavaScript intepretes keys as strings

const mySym = Symbol('key1');

const myobj = {
    mySym: 'symbol datatype',
};

//* interview
console.log(typeof myobj.mySym); // typeof is string but should be symbol, how to do it?
// so how to make the key as symbol:
const symKey = Symbol('key2');
const myobj2 = {
    [symKey]: 'this is symbol key',
};
console.log(myobj2[symKey]);

console.log(myobj2);
// Object.freeze(myobj2);
myobj2.name = 'shadz';
console.log(myobj2);

//*  Object.assign
const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'a', 4: 'b' };
const obj3 = { 5: 'a', 6: 'b' };

const obj4 = Object.assign({}, obj1, obj2, obj3); // Object.assign(target, source)  combine all objs into a new single obj
console.log(obj4);

//* similiarly the above code can be written as: using spread operator
const obj5 = { ...obj1, ...obj2, ...obj3 };
console.log(obj5);

// example getting data from database,
const users = [
    {
        id: 1,
        email: 'shadz@gmail.com',
    },
    {
        id: 2,
        email: 'john@gmail.com',
    },
    {
        id: 3,
        email: 'sarah@gmail.com',
    },
];

console.log(users[1].email);

const tinderUser = {
    id: 1,
    name: 'Shadz',
    age: 20,
};

console.log(Object.keys(tinderUser)); //* returns an 'array' of keys from the object
console.log(Object.values(tinderUser)); //* returns an array of values from the object
console.log(Object.entries(tinderUser)); //* Returns an array of key/values of the enumerable properties of an object, in the form of arrays -> [key, value]

console.log(tinderUser.hasOwnProperty('name')); //* returns true or false
console.log(Object.keys(tinderUser).includes('name')); // returns true or false, like the above

