const now = 2050;
const ageShadz = now - 2002;
const ageSarah = now - 2018;

console.log(ageShadz, ageSarah);

console.log(ageShadz * 10, ageShadz / 10, 2 ** 4);
//  2**4 = 2^4 (2 raised to 4)

//* String concatenation
const firstName = 'Shadz';
const lastName = 'Kin';
console.log(firstName + ' ' + lastName);

//* Assignment Operators
let x = 10 + 5; // 10+5 are assigned to x -> 15
console.log(x);

x += 10; // x = x + 10   -> 25
console.log(x);

x *= 4; // x = x * 4  -> 25*4 = 100

console.log(x);

x /= 5; // x = x / 5  -> 100/5 -> 20
console.log(x);

//* increment operator
x++; // x = x+1
console.log(x);

//* decrement operator
x--; // x = x-1
console.log(x);

//* Comparison Operators
//*  > , < , >= , <=
console.log(ageShadz > ageSarah);
console.log(ageSarah >= 18);

const fullAge = ageSarah >= 18;
console.log(fullAge);

console.log(now - 2002 > now - 2018);
