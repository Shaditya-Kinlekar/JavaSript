'use strict';

const rest1 = {
    name: 'Capri',
    numGuests: 20,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

//* OR assignment operator
//  the Logical OR operator (||) is used to check if the numGuests property of rest1 is falsy. If it is, the expression evaluates to the right-hand side operand (10) and assigns it to the numGuests property. However, if the numGuests property is already defined and truthy, the assignment does not occur, and the current value is maintained.
rest1.numGuests = rest1.numGuests || 10; // (20 || 10 -> 20 - truthy)
rest2.numGuests = rest2.numGuests || 10; // (undefined || 10 -> 10 - since undefined falsy )
// can write the above in a more concise way using OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
console.log(rest1);
console.log(rest2);

//* nullish assignment operator (null or undefined)
const obj = {
    value: 0,
};
// If the value property of the obj object is null or undefined, assign the value 10 to it, else maintain the current value.
obj.value ??= 10;
console.log('obj: ', obj);

//* logical AND operator (returns first "falsy" value or last truthy value if all are truthy)
rest2.owner &&= 'Anonymous';
console.log(rest2);
// the Logical AND operator (&&) is used to check if the owner property of rest2 is truthy. If it is, the &&= operator assigns the value on the right side ('Anonymous') to the owner property. However, if the owner property is falsy (such as null, undefined, or false), the assignment does not occur, and the current value is maintained.

obj.name &&= 'Shadz'; // (returns undefined since obj.name doesn't exist)
console.log('obj.name: ', obj.name);
