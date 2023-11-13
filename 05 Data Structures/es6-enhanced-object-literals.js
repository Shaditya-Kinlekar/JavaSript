'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const hours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[0]]: {
        open: 11,
        close: 23,
    },
    [`day ${2 + 4}`]: {
        open: 0,
        close: 24,
    },
};

const person = {
    fname: 'John',
};

const hello = function () {
    console.log('hello world');
};

const restaurant = {
    name: 'Classico Italiano',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
    // es6 enhanced object literal syntax (nested objects )
    hours,
    person,

    //es6 enhanced syntax for methods
    hello,
    favFood() {
        console.log('Pizza');
    },
};

restaurant.person.dob = '2-2-2';
console.log('restaurant: ', restaurant);
console.log('person: ', person);
console.log('-------------------------------------');

restaurant.hello();
restaurant.favFood();
