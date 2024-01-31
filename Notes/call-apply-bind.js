let name = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@email.com',
  printFullName: function () {
    console.log(this.firstName + ' ' + this.lastName);
  },
};

let name2 = {
  firstName: 'Big',
  lastName: 'Head',
  age: 20,
};

//* This example demonstrates function borrowing in JavaScript, where the `printFullName` method from the `name` object is called with `name2` as its context using `.call()`. Thus, it prints "Big Head" instead of "John Doe".
name.printFullName.call(name2);

// This eg explains the use of the 'this' keyword in a globally declared function, which allows the function to dynamically refer to the calling object's context.
function age(birthMonth) {
  const year = new Date().getFullYear();
  console.log(`your age: ${this.age}, you were born in ${year - this.age}-${birthMonth}`);
}

age.call(name2, 'May');

// in call() method you pass arguments separated by comma
function career(jobtype, expectedSalary, techStack) {
  console.log(
    `Your Email: ${this.email}  
    your job type is ${jobtype}, 
    your expected salary is ${expectedSalary}$, 
    and your tech stack is ${techStack}`
  );
}

console.log('call() ->');
career.call(name, 'Front-End Developer', '50,000', 'React, Nextjs');

//* in apply() method you pass arguments as an array
console.log('apply() ->');
career.apply(name, ['Front-End Developer', '50,000', 'React, Nextjs']);

//* blind()
function address(state, country) {
  console.log(`Your name is ${this.firstName} ${this.lastName}, youre from ${state}, ${country}`);
}

console.log('bind() ->');
const boundAddress = address.bind(name, 'California', 'USA');
boundAddress();
// This will bind the `address` function to `name` obj and return a new function. When called, this new function will execute `address` with `name` obj as its context, allowing us to pass additional arguments such as state and country at a later time. Unlike call() and apply(), "bind() does not immediately execute" the function but rather returns a new function that can be executed later.

// this is also possible:
// const boundAddress2 = address.bind(name);
// boundAddress2('Pune', 'India'); // passing the arguments later
