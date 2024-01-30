function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  return this;
}
// Without the "return this" statement, the code will still work the same because the "this" keyword refers to the object that is being created by the constructor function. In JavaScript, when a constructor function is called with the "new" keyword, it automatically creates a new object and sets the value of "this" to that object. The constructor function then modifies the properties of the object using the "this" keyword. Finally, the newly created object is implicitly returned by the constructor function, regardless of whether the "return this" statement is present or not.

// So, even without the "return this" statement, the constructor function will still update the properties of the newly created object correctly, and the object will be assigned to the variable userOne and userTwo as expected. The code will continue to work as intended.

// Without the "new" keyword, "this" refers to the global object, not a new instance.
const userOne = User('john', 5, true); // Assigns properties to the global object.
// The second call overwrites the properties on the global object.
const userTwo = User('jane', 10, false);
// This will log the global object with the properties of userTwo,
// because the same global object was modified twice.
// console.log(userOne);

const user1 = new User('john', 5, true);
const user2 = new User('jane', 10, false);
console.log(user1); // Now userOne is a separate instance of the User object
/* 
When a constructor function is called with the new keyword, JavaScript does the following steps under the hood:
1. It creates a new empty object.
2. It sets the prototype of the new object to the prototype of the User function, which is an object that inherits from
"Object.prototype" by default.
3. It binds the this value to the new object and calls the User function with the given arguments.
4. It returns the new object implicitly(automatically), unless the User function returns a different object explicitly.
*/
