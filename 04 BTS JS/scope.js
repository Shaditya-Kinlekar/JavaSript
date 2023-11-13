'use strict';

function printAge(firstName, birthYear, age) {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
        var millenial = true;
        // Creating NEW variable with same name as outer scope's variable
        const firstName = 'Steven';
        // Reasssigning outer scope's variable
        output = 'NEW OUTPUT!';
        const str = `Oh, and you're a millenial, ${firstName}`;
        console.log(str);
        function add(a, b) {
            return a + b;
        }
    }
}
//console.log(str);
printAge('shadz', 1995, 23);
// console.log(millenial);
//console.log(add (2, 3));
// console.log(output);
