const age = 15;
// const oldEnough = age >= 18;

if (age >= 18) {
    console.log('Sarah can start driving 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is young, wait another ${yearsLeft} years :) `);
}

let century;
const birthYear = 2002;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
