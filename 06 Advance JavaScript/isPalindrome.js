const str = 'level';

//* 1. checking only variable
const isPalindrome = function (params) {
    const reversedStr = params.split('').reverse().join('');
    if (reversedStr === params) {
        return reversedStr;
    } else {
        return 'Not a Palindrome';
    }
};

const palindromeStr = isPalindrome(str);
console.log('🚀 ~ file: isPalindrome.js:14 ~ palindromeStr:', palindromeStr);

//* 2. checking array of Strings
const arr = ['radar', 'level', 'madam', 'racecar', 12321, 'hello', 'namaste'];

const arrPalindrome = arr.reduce((acc, curr) => {
    const reversedStr = String(curr).split('').reverse().join('');

    if (reversedStr === String(curr)) {
        acc.push(curr);
    }
    return acc;
}, []);

console.log('🚀 ~ file: isPalindrome.js:27 ~ arrPalindrome:', arrPalindrome);