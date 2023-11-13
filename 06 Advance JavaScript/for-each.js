const coding = ['HTML', 'CSS', 'JS', 'Python', 'PHP'];

// coding.forEach(function (value) {
//     console.log(value);
// });

//using arrow function
// coding.forEach((value) => {
//     console.log(value);
// });

// function printValue(value) {
//     console.log(value);
// }
// // passing a function as a parameter
// coding.forEach(printValue);

coding.forEach((value, index, arr) => {
    console.log(value, index, arr);
});

const myCountry = [
    {
        country: 'India',
        language: 'Hindi',
    },
    {
        country: 'China',
        language: 'Mandarin',
    },
    {
        country: 'Japan',
        language: 'Japanese',
    },
];

myCountry.forEach((value) => {
    console.log(`country: ${value.country}, language-spoken: ${value.language}`);
});

//* forEach() returns undefined. It just iterates over the array and executes the provided function for each element.

