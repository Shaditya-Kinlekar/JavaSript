'use strict';

const person = {
  name: 'John',
  age: 20,
  job: 'Teacher',
  printMssg: function () {
    console.log('hello world');
  },
};

// define multiple properties/keys
// Object.defineProperties(person, {
//   name: {
//     enumerable: false,
//   },
//   age: {
//     enumerable: false,
//   },
// });

// Object.defineProperty() is a method in JavaScript that allows you to define a new property on an object or modify an existing property with a given property descriptor. This method can be used to set the property's value as well as its attributes (writable, enumerable, and configurable), and it can also be used to create getters and setters.
// Here's the syntax for Object.defineProperty():  Object.defineProperty(obj, prop, descriptor)
// obj: The object on which to define the property.
// prop: The name of the property to be defined or modified.
// descriptor: The descriptor for the property being defined or modified.

Object.defineProperty(person, 'name', {
  enumerable: false,
});

for (const [keys, value] of Object.entries(person)) {
  // Check if the value is not a function
  if (typeof value !== 'function') {
    console.log(`key: ${keys}, value: ${value}`);
  }
}

//? in a interview its asked if the value of Math.PI can be overriden if yes then how and if not then why? please provide the answer
// The Math object in JavaScript is a built-in object that has properties and methods for mathematical constants and functions. Its properties are read-only and non-configurable by default, which means you cannot normally change them or redefine them.
// However, with Object.defineProperty(), you can redefine a property of an object if it is configurable. The Math.PI property is non-configurable, which means that attempting to redefine it using Object.defineProperty() will not work and will throw a TypeError in strict mode.

/* 
* A property descriptor is an object in JavaScript that provides detailed information about a property on an object. It includes the value of the property and metadata that describes the characteristics of the property. The metadata attributes are:

- value: The value associated with the property (can be any valid JavaScript value).
- writable: A boolean indicating whether the value of the property can be changed (true if the property can be changed, false otherwise).
- enumerable: A boolean indicating if the property shows up during an enumeration of the properties on the corresponding object (true - if it appears, false otherwise).
- configurable: A boolean indicating if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
*/

// Get the property descriptor of the 'PI' property from the Math object
const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);
// Object.getOwnPropertyDescriptor(), it returns the descriptor for the specified property if it exists on the object, or undefined if it does not.

// ('use strict'); // This line ensures we're in strict mode
try {
  Object.defineProperty(Math, 'PI', {
    writable: true,
    configurable: true,
    value: 4,
  });
  console.log(Math.PI); // This line won't be reached, as an error will be thrown
} catch (e) {
  console.error('error: ', e.message); // TypeError: Cannot redefine property: PI
}

console.log(Math.PI);
