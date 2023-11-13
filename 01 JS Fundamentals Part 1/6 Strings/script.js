//* String & Template literals

const firstName = 'Jonas';
const job = 'teacher';
const birthyear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthyear) + ' years old ' + job + '!';
//* concating strings (not recommended this way )
console.log(jonas);

//* using template literal -> ` ` (backtick)
const jonasNew = `I'm ${firstName}, a ${year - birthyear} years old ${job}!`;
console.log(jonasNew);

console.log(`hey 
there, 
im learning
JavaScript`);
