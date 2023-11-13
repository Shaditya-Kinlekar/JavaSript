const input = prompt('Enter a Operator( + , - , * , / , % ):');

function sum(num1, num2) {
    return num1 + num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function subraction(num1, num2) {
    return num1 - num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function modulo(num1, num2) {
    return num1 % num2;
}

// passing numbers as user input using prompt()
if (input === '+') {
    console.log(sum(Number(prompt('Enter Number 1')), Number(prompt('Enter Number 2'))));
} else if (input === '-') {
    console.log(subraction(Number(prompt('Enter Number 1')), Number(prompt('Enter Number 2'))));
} else if (input === '*') {
    console.log(multiplication(Number(prompt('Enter Number 1')), Number(prompt('Enter Number 2'))));
} else if (input === '/') {
    console.log(division(Number(prompt('Enter Number 1')), Number(prompt('Enter Number 2'))));
} else if (input === '%') {
    console.log(modulo(Number(prompt('Enter Number 1')), Number(prompt('Enter Number 2'))));
} else {
    console.log('Inavlid Operator, Enter again!!');
}
