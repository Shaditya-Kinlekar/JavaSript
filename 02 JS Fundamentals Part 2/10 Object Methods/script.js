const jonas = {
    firstName: 'Jonas', // -> string value
    lastName: 'Sheman', // -> string value
    birthYear: 1991, // -> number value
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'], // -> array value
    hasDriverLicense: true, // -> boolean value

    //   // -> function value
    //   calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    //   },

    //   calcAge: function () {
    //     console.log(this); // returns jonas object
    //     return 2037 - this.birthYear; // -> points to birthYear from jonas object
    //   },

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old teacher, and he has ${
            this.hasDriverLicense ? 'a' : 'no'
        } driver's license.`;
    },
};

// console.log(jonas.calcAge(jonas.birthYear));
// console.log(jonas.calcAge(2002));
// console.log(jonas['calcAge'](1975));

console.log(jonas.calcAge());
console.log(jonas.age);

// Challenge
console.log(jonas.getSummary());
