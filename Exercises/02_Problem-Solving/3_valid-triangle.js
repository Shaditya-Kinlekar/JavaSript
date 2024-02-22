// valid triangle
const a = 10,
  b = 8,
  c = 14;

if (a + b > c && b + c > a && a + c > b) {
  console.log('can form a triangle');
} else {
  console.log('cannot form a triangle');
}

// valid square
let one = 10,
  two = 10,
  three = 10,
  four = 10;

if (one === two && one === three && one === four) {
  console.log('can form a square');
}

// valied rectangle
if (
  (one === two && three === four) ||
  (one === three && two === four) ||
  (one === four && two === three)
) {
  console.log('can form a rectangle');
}
