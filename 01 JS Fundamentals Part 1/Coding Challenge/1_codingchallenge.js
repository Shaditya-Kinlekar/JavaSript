// TEST DATA 1
let markWeight = 78,
  johnWeight = 92;
let markHeight = 1.69,
  johnHeight = 1.95;

//   bmi for mark
const bmiMark1 = markWeight / markHeight ** 2;
console.log(bmiMark1);

// bmi for john
const bmiJohn1 = johnWeight / johnHeight ** 2;
console.log(bmiJohn1);

const markHigherBMI1 = bmiMark1 > bmiJohn1;

console.log(markHigherBMI1 + '\n');

// TEST DATA 2
(markWeight = 95), (johnWeight = 85);
(markHeight = 1.88), (johnHeight = 1.76);

//   bmi for mark
const bmiMark2 = markWeight / markHeight ** 2;
console.log(bmiMark2);

// bmi for john
const bmiJohn2 = johnWeight / johnHeight ** 2;
console.log(bmiJohn2);

const markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log(markHigherBMI2 + '\n');
