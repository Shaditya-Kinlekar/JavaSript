//* A class is a template or blueprint for creating objects that have similar properties and methods. Properties are the data or information that the objects store, and methods are the functions or actions that the objects can perform

//* The first method that you should define in the class body is the constructor(). The constructor is a special method that is automatically called when you create a new object of the class. The constructor is used to initialize or assign values to the properties of the object

//* The new keyword is used to create a new object of the class, and the values that you pass inside the parentheses () are the arguments for the constructor.

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc$!`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const u1 = new User('john', 'john@email', '123456');
console.log(u1);
console.log(u1.encryptPassword());
console.log(u1.changeUsername());

//!NOTE
// The methods(encryptPassword, changeUsername) are not shown in the u1 object because they are not stored as properties of the object, but they are "inherited from the class User". The object u1 only shows the properties that are "assigned by the constructor", which are username, email, and password. The methods are part of the class definition, and they are "shared by all the objects of the class" through the "prototype chain". The prototype chain is a mechanism that JavaScript uses to look up properties and methods of an object. If a property or method is not found on the object itself, JavaScript looks up the prototype chain to find it. The prototype chain links the object to its parent class, and the parent class to its parent class, and so on, until it reaches the root object, which is Object. The methods of the class User are stored in the prototype of the class, which is User.prototype. The object u1 has a hidden link to "User.prototype", which allows it to access the methods of the class. However, the methods are not visible in the output of the object, unless you explicitly access them using the dot notation.

// behind the scene of how the above code would look like without the class keyword
function User2(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User2.prototype.encryptPassword = function () {
  return `${this.password}sdjdn$!`;
};

User2.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const u2 = new User2('Kate', 'kate@email', '90892');
console.log(u2);
console.log(u2.changeUsername());
console.log(u2.encryptPassword());
