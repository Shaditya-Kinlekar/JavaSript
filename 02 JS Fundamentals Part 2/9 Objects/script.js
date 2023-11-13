//* Objects
//* key:value (pair)

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schedman',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'],
};

// console.log(jonas);

// How to retrieve data from object & change data in object
//* Dot vs Bracket notation

// using .(dot)
console.log(jonas.age);
console.log(jonas.job);

// using [] (bracket)
console.log(jonas['friends']);

// expression can be used in the []
const newKey = 'Name';
console.log(jonas['first' + newKey]);

const lastNameKey = 'last';
console.log(jonas[lastNameKey + newKey]);

// const interestIn = prompt(
//   'What do you want to know about Jonas? Choose between firstName, lastName, age , job, friends'
// );
// returns a 'string'   eg: interestIn = 'age'

// console.log(jonas[interestIn]);
// takes a expression -> string in this case
// eg: 'age' -> so, jonas['age'] -> then checks for this key in the object and returns the  value

console.log(jonas.interestIn);
//!  -> undefined (what we get when we try to access a property on an object that does not exist)

// using truthy falsy logic
// if 'age' (not empty) -> execute if   (truthy)
// else '' (empty) -> execute else  (falsy)
// if (jonas[interestIn]) {
//   console.log(jonas[interestIn]);
// } else {
//   console.log('Wrong Request!');
// }

// Adding data to object
jonas.location = 'Goa';
jonas['twitter'] = '@jonas_twts';
console.log(jonas);

// challenge
console.log(
    `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`
);
