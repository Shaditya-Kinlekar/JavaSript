'use strict';

// ! Note: "this" works differently in "strict mode" and "without strict mode"

//* 1. this in global space
console.log(this); // window object or global object depending on the environment
// value of this in global space will always will be global object(depends on the runtime environment i.e node - global/browser - window...)

//* 2. this inside a function
function a() {
  // value of this depends on strict/non-strict mode
  console.log(this);
}
a();
// without strict mode:  window object
// strict mode:  undefined
//?   but why this behaviour?
//* -> "this substitution", if the value of "this keyword" -> "undefined" or "null", then this(value) will be replaced by global object but only in non-strict mode.
//? how to say in interview?
// "this" in a fn is "undefined" but since js has something known as "this substitution" the (value of this) becomes "global object" in non-strict mode.

// the 'value of this inside a fn' also depends on how the fn is invoked.
a(); // undefined(strict mode)
// window.a(); // window object

//* 3. this inside a object's method
const obj = {
  a: 10,
  x: function () {
    // method
    console.log(this); // obj{}
  },
};
obj.x();

//* 4. call, apply, and bind methods (sharing methods)
const student = {
  name: 'John',
  printName: function () {
    console.log(this.name);
  },
};
student.printName();
//? how to share the printName method of student with student2
const student2 = {
  name: 'Bob',
};

student.printName.call(student2); // value of this = student2

//* 5. this inside a arrow function
// arrow functions dont have their own this, they take the value of thier lexical environment where they are enclosed
const arrowThis = {
  a: 10,
  x: () => {
    console.log(this); // window obj
  },
};
arrowThis.x();
// window obj, since the enclosing lexical context is arrowThis, the this keyword refers to window obj

const lexicalArrowThis = {
  a: 'hello',
  b: function () {
    const c = () => {
      console.log(this);
    };
    c();
  },
};
lexicalArrowThis.b();
// o/p: lexicalArrowThis{} since c is arrow fn and it does not have its own this keyword, so it refers to its lexical parent which is b, and the this inside b refers to the lexicalArrowThis object.

//* 6. This inside DOM
// this inside dom elements => references to HTMLelements
