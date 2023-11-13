//* Tip Calculator using loops

// fn to calculate tips
const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return bill * (15 / 100);
  } else {
    return bill * (20 / 100);
  }
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

// filling tips[] , totals[]
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

// fn to calculate Avg of totals
const calcAverage = function (arr) {
  let sums = 0;
  for (let j = 0; j < arr.length; j++) {
    sums += arr[j];
  }
  return sums / arr.length;
};

console.log(`Average of total: ${calcAverage(totals)}`);
console.log(`Average of tips: ${calcAverage(tips)}`);
