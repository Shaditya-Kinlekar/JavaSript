const now = 2037;
const ageShadz = now - 2002;
const ageSara = now - 2018;

console.log(now - 2002 > now - 2018);
//  - is executed first and then compared(>)

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); 

const averageAge = (ageShadz + ageSara) / 2;
console.log(averageAge);
