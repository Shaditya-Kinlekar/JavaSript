// get - is when we want to read a value from the object, set - is when we want to change a value in the object
// getter - is when we use the get() function
// setter - is when we use the set(value) function

//! important to do get - set together
// if u dont do this._email in get and set then there will be a race condition
// as getter and setter can be called at the same time, without locking mechanism
// this is called "race condition"
// the error u get when there is a race condition is "Maximum call stack size exceeded (can be at get or set)"

// modern syntax - class based  - mostly used
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value;
  }
}

const u1 = new User('John@email.com', 'dsjnf309wnsd');
console.log('🚀 ~ u1:', u1.email);
console.log('🚀 ~ u1:', u1.password);

// old syntax - function based - can be found
function User2(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, 'email', {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, 'password', {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const u2 = new User2('kate@email.com', 'jdlkfajd39dkjfk');
console.log('🚀 ~ u2:', u2._email);
console.log('🚀 ~ u2:', u2._password);

// Object based syntax - very rare
const User3 = {
  _email: 'random@email.com',
  _password: 'nafgf9uagnds',

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const u3 = Object.create(User3);
console.log('🚀 ~ u3:', u3.email);
