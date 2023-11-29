const arr = [1, 2, 3, 4, 5];

function isPrime(number) {
  // Check if the number is less than 2
  if (number < 2) {
    // If it is, return false because prime numbers are greater than 1
    return false;
  }

  // Loop through all numbers from 2 to number-1
  for (let i = 2; i < number; i++) {
    // Check if the number is divisible by any number other than 1 and itself
    if (number % i === 0) {
      // If it is, return false because it is not a prime number
      return false;
    }
  }

  // If the number is not divisible by any number other than 1 and itself,
  // it is a prime number, so return the number itself
  return number;
}

//  without filter
// const output = [];
// for (let i = 0; i < arr.length; i++) {
//     // isPrime(arr[i]) ? output.push(arr[i]) : null;
//     if (isPrime(arr[i])) output.push(arr[i]);
// }
// console.log(output);

// with filter
const primeNums = arr.filter(isPrime);
console.log(primeNums);
