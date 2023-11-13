// Tip Calculator

const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return bill * (15 / 100);
  } else {
    return bill * (20 / 100);
  }
};

// or using ternary
// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
// };

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];

console.log(bills, '\n', tip, '\n', total, '\n');
