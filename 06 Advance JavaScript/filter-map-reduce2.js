let studentRecords = [
    { name: 'Jane', id: 123, marks: 98 },
    { name: 'Baba', id: 101, marks: 23 },
    { name: 'John', id: 200, marks: 45 },
    { name: 'Wick', id: 115, marks: 75 },
];

const studentFnames = studentRecords.filter((x) => x.marks >= 75).map((x) => x.name);
console.log('Students with Distinction:', studentFnames);

// above logic with reduce()
const fnames = studentRecords.reduce((acc, curr) => {
    if (curr.marks >= 75) {
        acc.push(curr.name);
    }
    return acc;
}, []);

// manually with for loop
function students() {
    let temp = [];
    for (let i = 0; i < studentRecords.length; i++) {
        if (studentRecords[i].marks < 75) temp.push(studentRecords[i].name);
    }
    return temp;
}

console.log('Below Distinction: ', students());

// Define an array of objects
const people = [
    { name: 'Alice', age: 25, gender: 'female' },
    { name: 'Bob', age: 30, gender: 'male' },
    { name: 'Charlie', age: 35, gender: 'male' },
    { name: 'David', age: 40, gender: 'male' },
    { name: 'Eve', age: 45, gender: 'female' },
];

// This is a reducer function that groups an array of objects by gender
// It takes an accumulator (acc) and the current element (curr) as parameters
const groupByGenderReducer = (acc, curr) => {
    // Check if the gender key already exists in the accumulator
    if (acc[curr.gender]) {
        // If it exists, push the current element to the existing gender array
        acc[curr.gender].push(curr);
    } else {
        // If it doesn't exist, create a new key-value pair in the accumulator
        // The key is the gender and the value is an array containing the current element
        acc[curr.gender] = [curr];
    }
    // Return the updated accumulator for the next iteration
    return acc;
};

const groupedByGender = people.reduce(groupByGenderReducer, {});
console.log('🚀 ~ file: filter-map-reduce2.js:49 ~ groupedByGender:', groupedByGender);
