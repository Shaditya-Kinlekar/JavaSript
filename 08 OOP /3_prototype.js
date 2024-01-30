let myHeros = ['Thor', 'Spiderman'];

let heroPower = {
  thor: 'hammer',
  spiderman: 'sling',

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.onEveryObject = function () {
  console.log('Present on all Objects/Array/Strings, etc..');
};

// heroPower.onEveryObject();

// shallow copy
Array.prototype.sortDescending = function () {
  const copy = [...this];
  return copy.sort((a, b) => b - a);
};

// deep copy
// Array.prototype.sortDescending = function () {
//   const copy = JSON.parse(JSON.stringify(this));
//   return copy.sort((a, b) => b - a);
// };

const nums = [10, 40, 20, 15, 85, 25, 100];
const newArr = nums.sortDescending();
console.log(newArr);

//  prototypal inheritance eg
const User = {
  name: 'John',
  email: 'j@j.com',
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: true,
};

const TASupport = {
  makeAssignment: 'Assignment',
  fullTime: true,
  __proto__: TeachingSupport,
};

// prototype-based inheritance, By setting Teacher's prototype to User, Teacher now has access to User's properties and methods.
Teacher.__proto__ = User;
console.log('name' in Teacher);

// achieves the same result as the __proto__ property, but is considered more modern and reliable.
Object.setPrototypeOf(TeachingSupport, Teacher);

// Extending the String prototype: The trueLength method is added to the String prototype. This means that all string instances in the code can now call trueLength(), which returns the length of the string after removing leading and trailing whitespace.
let anotherUsername = 'shadz.dev    ';

String.prototype.trueLength = function () {
  return this.trim().length;
};

console.log(anotherUsername.trueLength());
