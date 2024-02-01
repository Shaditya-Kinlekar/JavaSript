class User {
  constructor(username, age) {
    this.username = username;
    this.age = age;
  }

  logMe() {
    console.log(`username is ${this.username}`);
  }

  static createID() {
    const randomStr = Math.random().toString(36).substring(2, 9);
    const randomNum = Math.floor(Math.random() * 10000);
    const id = randomNum + randomStr;
    return id;
  }
}

const u1 = new User('John', 23);
u1.logMe();
console.log(u1);

// The "super" keyword in the constructor method is used to call the constructor of the parent class (in this case, the User class). It is used to pass the (username, age) parameter to the constructor of the User class, allowing the User class to initialize its own properties using the passed (username, age). This is a common practice when creating subclasses that extend from a parent class.
class Teacher extends User {
  constructor(username, age, email) {
    super(username, age);
    this.email = email;
  }
}

const u2 = new Teacher('Kate', 40, 'kate@email');
// console.log(u2.createID());  // error because createID is not available on instanceof a class

console.log(Teacher.createID()); // This will work because static methods are inherited in subclasses, so Teacher.createID() is the same as User.createID().

console.log(u2);
