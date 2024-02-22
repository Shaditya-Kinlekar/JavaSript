// find min num among the 3 nums
const x = 10,
  y = 2,
  z = 7;

// for variables
if (x < y && x < z) {
  console.log(x);
} else if (y < x && y < z) {
  console.log(y);
} else {
  console.log(z);
}

// for array of nums
const nums = [10, 2, 7];

// 1. Math.min()
console.log(Math.min(...nums));

let min = nums[0];
// 2. forEach
nums.forEach((curr) => {
  if (curr < min) min = curr;
});
console.log('🚀 ~ nums.forEach ~ min:', min);

//  3. for loop
for (let curr = 0; curr < nums.length; curr++) {
  if (nums[curr] < min) min = nums[curr];
}
console.log(min);
