//todo:  Array Methods / Array Operations

const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay');
//* adds element to the end of the array

//* push() returns lenght of array
// const newLength = friends.push('Jay');
// console.log(newLength);

//* adding element to the beginning of the array
friends.unshift('John');
console.log(friends);

//* Remove last element from Array
friends.pop();
console.log(friends);

//* pop() returns removed element
const removedElement = friends.pop();
console.log(removedElement);

//* remove first element from array
friends.shift();
console.log(friends);

//* to see what shift() returned
// const removed = friends.shift();
// or
// console.log(friends.shift());
// console.log(removed);

//* Method to get index of an element
console.log(friends.indexOf('Steven'));
// example
const arr = ['Michael', 'Steven', 'Peter', 'Joe', 20];
for (let i = 0; i < arr.length; i++) {
    console.log(`${arr.indexOf(arr[i])} -> ${arr[i]}`);
}

//* return true if element is present / false if not in array
console.log(friends.includes('Bob'));
console.log(friends.includes(friends[0])); // if array is empty returns false or vice versa

//* includes() -> performs strict equality check
friends.push(23); // number
console.log(friends.includes('23')); // string
// give false

const present = 'BOB';
if (friends.includes(present)) {
    console.log(`You have a friend named ${present}`);
} else {
    console.log(`You have a friend named ${present}`);
}

// adding elements to array using foreach
const years = [1990, 1967, 2002, 2010, 2018];

const calcAge = function (birthYear) {
    return 2050 - birthYear;
};

let ages = [];

years.forEach((num, i) => {
    ages.push(calcAge(years[i]));
});

console.log(ages);
