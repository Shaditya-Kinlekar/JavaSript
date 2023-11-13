const age = '18';
if (age === 18) console.log('You are an Adult (strict)');
//  dont need {} if there is only one line
if (age == 18) console.log('Your are an Adult (loose)');

// prompt to take input from browser
const favourite = Number(prompt(`What's your favourite number?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('cool! 23 is a great number');
} else if (favourite === 7) {
    console.log('cool! 7 is a great number');
} else if (favourite === 9) {
    console.log('cool! 9 is a great number');
} else {
    console.log('Number is not 23 nor 7 and neither 9');
}

if (favourite !== 23) console.log('why not 23?');
