// Data 1
let markWeight = 78,
  johnWeight = 92;
let markHeight = 1.69,
  johnHeight = 1.95;

const bmiMark1 = markWeight / markHeight ** 2;
const bmiJohn1 = johnWeight / johnHeight ** 2;

if (bmiMark1 > bmiJohn1) {
  console.log(`"Mark's Bmi (${bmiMark1}) is higher than John's (${bmiJohn1})"`);
} else {
  console.log(`"John's Bmi (${bmiJohn1}) is higher than Mark's (${bmiMark1})"`);
}

// data 2
(markWeight = 95), (johnWeight = 85);
(markHeight = 1.88), (johnHeight = 1.76);

const bmiMark2 = markWeight / markHeight ** 2;
const bmiJohn2 = johnWeight / johnHeight ** 2;

if (bmiMark2 > bmiJohn2) {
  console.log(`"Mark's Bmi (${bmiMark2}) is higher than John's (${bmiJohn2})"`);
} else {
  console.log(`"John's Bmi (${bmiJohn2}) is higher than Mark's (${bmiMark2})"`);
}
