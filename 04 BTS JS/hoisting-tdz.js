// 1. output: undefined
console.log(addVar);
var addVar = function (a, b) {
    return a + b;
};

// 2 output: Cannot access 'addExp' before initialization
// console.log(addExp);     
const addExp = function (a, b) {
    return a + b;
};

/* explanation:
In the first code snippet, the variable "addVar" is declared using the 'var' keyword. When a variable is declared using var, it is hoisted to the top of its scope during the creation phase of the execution context. However, only the variable declaration is hoisted, not the assignment. So, at the point where console.log(addVar) is executed, the variable addVar exists but has not yet been assigned a value. Therefore, its value is undefined.

In the second code snippet, the variable addExp is declared using the const keyword. Variables declared with const or let are also hoisted, but they are not accessible before the actual declaration. This is known as the "temporal dead zone" (TDZ). So, when console.log(addExp) is executed, the variable addExp is still in the TDZ, and accessing it before the initialization throws a reference error.
*/

//! Example of why u should not use var
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}
// the above code is pronounced as, if the numProducts are empty then deleteShoppingCart()
// (! operator) !true -> false , !false -> true
// but here var is hoisted so the value of var in the if () is undefined which is falsy, since the condition is !numProducts i.e (!undefined) -> hence the condition in if() becomes truthy and deleteShoppingCart() is invoked

var x = 1; // creates property in the window object
let y = 10; // doesnt create "  "
const z = 9; // doesnt create "  "

console.log(x === window.x);
