<style>
    body {
        font-size: 15px;
    }
  p {
    font-size: 17px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: 30px;
  }
</style>

# JavaScript Operators: Optional Chaining, Logical Operators, and Nullish Coalescing

<br>

## 1. Optional chaining operator (?.)

`The optional chaining operator (?.)` is a new feature introduced in 'ES2020', which is the latest version of the JavaScript standard. It allows you to access the properties or methods of an object without checking if the object or any of its intermediate properties are null or undefined.

For example, suppose you have an object called user that has a property called `address`, which itself has a property called `street`. If you want to get the value of `user.address.street`, you would normally write something like this:

```js
let user = {
    name: 'Alice',
    address: {
        street: 'Main Street',
        city: 'New York',
    },
};

let street = user.address.street; // Main Street
```

However, what if the user object or its address property is `null or undefined`? In that case, trying to access user.address.street would cause an `error`:

```js
let user = null;

let street = user.address.street; // TypeError: Cannot read property 'street' of null
```

!! To avoid this error, you would have to check if user and user.address are not null or undefined before accessing user.address.street:

```js
let user = null;

let street = user && user.address && user.address.street; // null
```

!! This works, but it is verbose and repetitive. The optional chaining operator (?.) simplifies this by allowing you to write:

```js
let user = null;

let street = user?.address?.street; // null
```

This expression will return the value of user.address.street if user and user.address are both defined. Otherwise, it will return undefined without throwing an error.

<br>

✅ The optional chaining operator (?.) can also be used to call a function or access an array element. For example:

```js
let user = {
    name: 'Alice',
    sayHello: function () {
        alert('Hello!');
    },
};

user.sayHello?.(); // Hello!

user = null;

user.sayHello?.(); // nothing happens

let numbers = [1, 2, 3];

console.log(numbers[0]?.toString()); // "1"

numbers = null;

console.log(numbers[0]?.toString()); // undefined
```

✅ The optional chaining operator (?.) is useful when you want to access or call something that may not exist. It can help you avoid errors and write cleaner and shorter code.

## 2. AND operator (&&)

`The AND operator (&&)` is a logical operator that returns `true if both operands are truthy`, and `false` otherwise. A truthy value is a value that evaluates to true when converted to a boolean, such as 1, "hello", or an object. A falsy value is a value that evaluates to false when converted to a boolean, such as 0, "", or null.

For example:

```js
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(1 && 2); // 2
console.log(1 && 0); // 0
console.log(0 && 1); // 0
console.log(0 && 0); // 0

console.log('hello' && 'world'); // "world"
console.log('hello' && ''); // ""
console.log('' && 'hello'); // ""
console.log('' && ''); // ""

console.log({} && []); // []
console.log({} && null); // null
    return operation?.;
console.log(null && {}); // null
console.log(null && null); // null
```

Notice that when` both operands are truthy`, the AND operator returns the `last` operand. This is because the AND operator evaluates the operands from `left to right`, and stops as soon as it finds a falsy value. If both operands are truthy, it returns the last one. This behavior is called `short-circuiting`.

✅ The AND operator can be used to check multiple conditions in an if statement. For example:

```js
let age = 25;
let gender = 'male';

if (age >= 18 && gender === 'male') {
    console.log('You are eligible for military service.');
}
```

✅ The AND operator can also be used to assign a default value to a variable. For example:

```js
let name = prompt('Enter your name:');

let greeting = name && 'Hello, ' + name;

console.log(greeting); // Hello, Alice (if name is not empty)
```

-   This works because if name is truthy, the AND operator returns the second operand, which is the greeting. If name is falsy, the AND operator returns name, which is an empty string.

## 3. OR operator (||)

`The OR operator (||)` is a logical operator that returns `true if either operand is truthy`, and false otherwise. For example:

```js
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(1 || 2); // 1
console.log(1 || 0); // 1
console.log(0 || 1); // 1
console.log(0 || 0); // 0

console.log('hello' || 'world'); // "hello"
console.log('hello' || ''); // "hello"
console.log('' || 'hello'); // "hello"
console.log('' || ''); // ""

console.log({} || []); // {}
console.log({} || null); // {}
console.log(null || {}); // {}
console.log(null || null); // null
```

Notice that when either operand is truthy, the OR operator returns the `first` operand. This is because the OR operator evaluates the operands from `left to right`, and stops as soon as it finds a truthy value. If both operands are falsy, it returns the last one. This behavior is also called short-circuiting.

✅ The OR operator can be used to check multiple conditions in an if statement. For example:

```js
let day = 'Sunday';

if (day === 'Saturday' || day === 'Sunday') {
    console.log("It's a weekend!");
}
```

✅ The OR operator can also be used to provide a default value to a variable. For example:

```js
let name = prompt('Enter your name:');

let greeting = name || 'Anonymous';

console.log(greeting); // Anonymous (if name is empty)
```

-   This works because if name is truthy, the OR operator returns name. If name is falsy, the OR operator returns the second operand, which is "Anonymous".

## 4. Nullish coalescing operator (??)

`The nullish coalescing operator (??)` is another new feature introduced in 'ES2020'. It is similar to the OR operator, but it only "returns the second operand if the first operand is `null or undefined`". Otherwise, it returns the first operand.

For example:

```js
console.log(null ?? 'default'); // "default"
console.log(undefined ?? 'default'); // "default"
console.log(0 ?? 'default'); // 0
console.log('' ?? 'default'); // ""
```

Notice that unlike the OR operator, the nullish coalescing operator `does not treat 0 or "" as falsy values`. It only "treats null and undefined" as such. This can be useful when you want to use a default value only when the variable is null or undefined, and not when it has other falsy values.

For example:

```js
let score = 0;

let message = score || 'No score'; // No score

let message2 = score ?? 'No score'; // 0
```

In this example, using the OR operator would replace the score of 0 with "No score", which may not be desirable. Using the nullish coalescing operator would preserve the score of 0 and only use "No score" if score is null or undefined.

✅ The nullish coalescing operator can also be combined with the optional chaining operator to access properties or methods that may not exist. For example:

```js
let user = {
    name: 'Alice',
    address: {
        street: 'Main Street',
        city: 'New York',
    },
};

let zipCode = user.address?.zipCode ?? 'Unknown'; // Unknown

user.address.zipCode = '10001';

zipCode = user.address?.zipCode ?? 'Unknown'; // 10001
```

> In this example, using the optional chaining operator allows us to safely access user.address.zipCode without checking if user or user.address are defined.
> Using the nullish coalescing operator allows us to provide a default value of "Unknown" if user.address.zipCode is null or undefined.
