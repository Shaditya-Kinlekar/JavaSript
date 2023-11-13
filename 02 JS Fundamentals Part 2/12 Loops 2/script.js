//? LOOPING BACKWARDS & LOOPS IN LOOPS

const jonas = ['Jonas', 'Schedman', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']];

// 0 -> 4,
//  4 -> 0 (reverse array)

//* 1. REVERSING ARRAY 
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, '->', jonas[i]);
}

//* 2. using unshift
const arr = [1, 2, 3, 4, 5];
const nums = [];
for (let i = 0; i < arr.length; i++) {
    nums.unshift(arr[i]);
}
console.log(...nums);

//* LOOP INSIDE A LOOP
for (let exercise = 1; exercise < 6; exercise++) {
    console.log(`----- Starting Exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
    }
}

// table of any number
const n = 10;
for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}

// table from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(`number: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

console.log('`````````````````````````` Pattern ```````````````````````');
const x = 5;
for (let i = 1; i <= x; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '#';
    }
    console.log(stars);
}

const superHeros = ['Captain America', 'Spiderman', 'Thor', 'Hulk', 'Black Widow'];
for (let i = 0; i < superHeros.length; i++) {
    console.log(superHeros[i]);
}

//* break & continue
// first 5 numbers
for (let i = 1; i <= 10; i++) {
    if (i == 6) break;
    console.log(i);
}
console.log('=============================');
// last 5 numbers
for (let i = 1; i <= 10; i++) {
    if (i <= 5) continue;
    console.log(i);
}
