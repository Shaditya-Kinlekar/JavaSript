//* Higher-Order Functions in JavaScript
// Higher-order functions are functions that can take other functions as arguments or return functions as results.

//* callback function
function x() {
    console.log('namaste!');
}
//* higher order function
function y(funX) {
    funX();
}
y(x);

const radius = [3, 4, 5];

// how you would normally write the below Functions, (code which is repeating again and again)
/* const calculateArea = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};
-
const calculateCircumference = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
};

const calculateDiameter = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output;
};
*/

//* But for the above we area violating the DRY Principle, now lets observe the better approach.

const area = function (radius) {
    return Number((Math.PI * radius * radius).toFixed(2));
};

const circumference = function (radius) {
    return Number((2 * Math.PI * radius).toFixed(2));
};

const diameter = function (radius) {
    return 2 * radius;
};

const calculate = function (logic, arr) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output;
};

// console.log(calculate(area, radius));
console.log(calculate(circumference, radius));
console.log(calculate(diameter, radius));

// The code above demonstrates the use of higher-order functions in JavaScript.
// The advantage of using higher-order functions is that they promote code modularity and reusability.
// By passing functions as arguments to other functions, we can create more flexible and generic code.
// This allows us to separate concerns and make our code more modular, making it easier to maintain and test.
// Additionally, higher-order functions enable us to write cleaner and more concise code by abstracting away repetitive code patterns.

// console.log(radius.map(area)); // same as calculate(area, radius)

// making the calculate function same as map, the below .calculate() can be used on all the []
// this is how we generally write polyfills
Array.prototype.calc = function (logic) {
    const output = [];

    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i])); // this -> radius []
    }
    return output;
};

console.log('area of circle: ', radius.calc(area));

const areaSquare = function (side) {
    return side * side;
};

const sides = [10, 20, 50];
console.log('area of square: ', sides.calc(areaSquare));

// another approach for writing calculate fn
/* 
const operations = {
    area: radius => Number((Math.PI * radius * radius).toFixed(2)),
    circumference: radius => Number((2 * Math.PI * radius).toFixed(2)),
    diameter: radius => Number((2 * radius).toFixed(2))
};

const calculate = function (arr, operation) {
    const output = [];
    const operationFunc = operations[operation];

    if (!operationFunc) {
        throw new Error(`Invalid operation: ${operation}`);
    }

    for (let i = 0; i < arr.length; i++) {
        output.push(operationFunc(arr[i]));
    }
    return output;
};

const radius = [3, 4, 5];
console.log(calculate(radius, 'area'));
*/
