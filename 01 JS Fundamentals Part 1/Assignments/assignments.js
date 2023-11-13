//  1
let country = 'India';
let continent = 'Asia';
let population = 1409620297;

console.log(country);
console.log(continent);
console.log(population);

//  2
const isIsland = false;
let language;

console.log(typeof isIsland, typeof population, typeof country, typeof language);

//  3
language = 'Konkani';
console.log(language);

//  4
const finlandPopulation = 6000000;
const avgCountryPopualtion = 33000000;
console.log(population / 2);
console.log(population + 1);
console.log(population > finlandPopulation);
console.log(population < avgCountryPopualtion);

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
description = `Portugal is in Europe, and it's ${11} million people speak portuguese`;
console.log(description);

//  5
if (population > avgCountryPopualtion) {
  console.log(`Portugal's population is above average`);
} else {
  console.log(
    `Portugal's population is ${population - avgCountryPopualtion} million below average`
  );
}

// 6
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// 7
// let numNeighbours = Number(
//   prompt('How many neighbour countries does your country have?')
// );
// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

// 8
const myCountry = 'India';
const countryLanguage = 'english';
const countryPopulation = 20;
const countryIsIsland = false;

if (countryLanguage === 'english' && countryPopulation < 50 && !countryIsIsland) {
  console.log(`You should live in ${myCountry}`);
} else {
  console.log(`${myCountry} does not meet your your criteria`);
}

//  9
const nativeLanguage = 'mandarian';
switch (nativeLanguage) {
  case 'chinese':
  case 'mandarian':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}

10;
const testPopulation = 130;
console.log(
  testPopulation > 33
    ? `${country}'s population is above average`
    : `${country}'s population is below average`
);

// another solution
console.log(
  `${country}'s population is ${testPopulation > 33 ? 'above' : 'below'} average`
);
