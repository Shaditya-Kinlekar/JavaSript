const a = 7,
  b = 7,
  c = 7;

if (a === b && b === c && a === c) console.log('equilateral triangle');

const num1 = 10,
  num2 = 40,
  num3 = 20;
if (num1 !== num2 && num2 !== num3 && num1 !== num3) console.log('scalene triangle');

const x = 8,
  y = 16,
  z = 8;
if ((x === y || x === z) && (y === x || y === z)) console.log('isosceles triangle');
