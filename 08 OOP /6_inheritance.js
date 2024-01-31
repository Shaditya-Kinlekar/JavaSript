class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`${this.username} added a new course`);
  }
}

const u1 = new Teacher('john', 'john@email', '123456');
u1.addCourse();

const u2 = new User('Kate');
u2.logMe();
u1.addCourse.call(u2);

console.log(u2 instanceof User); // true
console.log(u1 instanceof Teacher); // true
console.log(u1 instanceof User); // true
