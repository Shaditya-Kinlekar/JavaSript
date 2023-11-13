// Reverses a string recursively
function reverseString(str) {
    // Base case: if the string is empty, return an empty string
    if (str === '') return '';
    // Recursive case: recursively call the function on the substring starting from the second character,
    // and concatenate it with the first character of the original string
    else return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString('hello'));

// fibonacci without recursion
const fib = (num, arr = [0, 1]) => {
    while (num > 2) {
        const [secondLast, last] = arr.slice(-2);
        arr.push(secondLast + last);
        --num;
    }
    return arr;
};
console.log('fib: ', fib(12));

// Calculates the Fibonacci sequence up to the given number n
function fibonacci(n) {
    // Base case: if the number is 0 or 1, return the number itself
    if (n <= 1) return n;
    // Recursive case: recursively call the function on the previous two numbers in the sequence, and add them together
    else return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5));

// Calculates the factorial of a number n
function factorial(n) {
    // Base case: if the number is 1, return 1
    if (n === 1) {
        return 1;
    }
    // Recursive case: recursively call the function on the previous number and multiply it with the current number
    return n * factorial(n - 1);
}
console.log(factorial(5));
