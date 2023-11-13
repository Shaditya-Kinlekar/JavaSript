const friends = [`Michael`, 'Steven', 'Peter'];
console.log(friends);

//* another way to create a array
const myYears = new Array(2002, 2020, 2022, 'string');
console.log(myYears);

console.log(friends[0]);
//* get a element at a particular index
console.log(friends[2]);

console.log(friends.indexOf('Steven'));
//* to get index value of a particular element

console.log(friends.length);
//* to get length of Array

console.log(friends[friends.length - 1]);
//* to get element at last index when u dont know the last index

//* changing the element at a particular index
friends[2] = 'Jay';
console.log(friends);
//* this is possible even though friends is declared const because an Array is not a primitive(only primitives cannot change)  and it can mutate/change.

// friends = ['Bob', 'Alice'];
// replacing the whole array is not possible

const firstName = 'Shadz';
const shadz = [firstName, 'Kinlekar', 2037 - 2002, friends];
console.log(shadz);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]) , calcAge(years[years.length-1])];
// console.log(ages);
// same solution using for loop
let ages = [];
for (let i = 0; i < years.length; i++) {
    ages[i] = calcAge(years[i]);
}
console.log(ages);

// foreach
const arr = [1, 2, 3, 4, 5];

arr.forEach((num, i) => {
    console.log(`${i} -> ${num}`);
});
