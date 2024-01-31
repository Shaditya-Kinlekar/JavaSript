class User {
  constructor(username) {
    this.username = username;
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

const u1 = new User('John');
u1.logMe();

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const u2 = new Teacher('Kate', 'kate@email');
// console.log(u2.createID());  // error because createID is not available on instanceof a class

console.log(Teacher.createID()); // This will work because static methods are inherited in subclasses, so Teacher.createID() is the same as User.createID().
