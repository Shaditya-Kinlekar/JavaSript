//*  Map , Filter & Reduce

//* 1. Map: It is basically used to transform a array. The map() method creates a new array with the results of calling a function for every array element.

const arr = [1, 2, 3, 4, 5];

function double(params) {
  return params * 2;
}

function binary(params) {
  // Convert the input parameter to binary representation using the `toString` method
  return params.toString(2);
}

console.log(
  'double: ',
  arr.map((x) => double(x))
);

console.log('binary: ', arr.map(binary)); // calls binary() for each element, === arr.map((x) => binary(x))

//* 2. Filter: Filter function is basically used to filter the value inside an array. The arr.filter() method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method.
//* Filter function creates an array and store only those values which evaluates to true.

//  without filter
// const output = [];
// for (let i = 0; i < arr.length; i++) {
//     // isPrime(arr[i]) ? output.push(arr[i]) : null;
//     if (isPrime(arr[i])) output.push(arr[i]);
// }
// console.log(output);

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num;
}

console.log('is prime: ', arr.filter(isPrime));

const oddNums = arr.filter((x) => x % 2 !== 0);
console.log(oddNums);

//* 3. Reduce: It is a function which take all the values of array and gives a single output of it. It reduces the array to give a single output.
// without reduce
// function findSum() {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(findSum());

//* with reduce()
// if initial value is not passed then reduce considers acc to be the first value of the arr[]
const sum = arr.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);
// shorthand
// const sum = arr.reduce((acc, curr) => (acc += curr), 0);

console.log('sum: ', sum);

// max number
function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log('max: ', findMax(arr));

const maxNum = arr.reduce((max, curr) => {
  if (curr > max) max = curr;
  return max;
}, 0);
console.log('🚀 ~ file: map-filter-reduce.js:84 ~ maxNum:', maxNum);

const minNum = arr.reduce((min, curr) => {
  if (min <= curr) return min;
  return curr;
});
console.log('🚀 ~ file: map-filter-reduce.js:90 ~ minNum:', minNum);

const user = [
  {
    firstName: 'Shadz',
    lastName: 'kin',
    age: 20,
  },
  {
    firstName: 'Sarah',
    lastName: 'Costa',
    age: 26,
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 56,
  },
  {
    firstName: 'Kenny',
    lastName: 'Omega',
    age: 20,
  },
];

const output = user.map((x) => `${x.firstName} ${x.lastName}`);
console.log('🚀 ~ file: map-filter-reduce.js:117 ~ output:', output);

// Initialize an empty object to store the age counts
const ageCount = user.reduce((acc, curr) => {
  // Check if the age already exists as a key in the accumulator object
  if (acc[curr.age]) {
    // If it exists, increment the count by 1
    acc[curr.age] = ++acc[curr.age];
  } else {
    // If it doesn't exist, create a new key with the age and set the count to 1
    acc[curr.age] = 1;
  }
  // Return the updated accumulator object
  return acc;
}, {});

console.log('js:131 ~ ageCount:', ageCount);

//* chaining methods
// function fnameBelow30() {
//     const firstNames = user.filter((currValue) => {
//         if (currValue.age < 30) return currValue;
//     });
//     return firstNames.map((x) => x.firstName);
// }
// optimise the above code by chaining methods
const fnameBelow30 = user.filter((curValue) => curValue.age < 30).map((x) => x.firstName);

console.log('🚀 ~ file: map-filter-reduce.js:142 ~ fnameBelow30:', fnameBelow30);

const fname30nAbove = user.reduce((acc, curr) => {
  if (curr.age >= 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log('🚀 ~ file: map-filter-reduce.js:151 ~ fname30nAbove:', fname30nAbove);
