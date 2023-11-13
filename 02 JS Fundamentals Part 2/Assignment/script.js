// 1.
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const country1 = describeCountry('India', 1.8, 'Delhi');
// console.log(country1);

// const country2 = describeCountry('UK', 1, 'London');
// console.log(country2);

// const country3 = describeCountry('US', 1.2, 'Washingtaon DC');
// console.log(country3);

// 2.
// const country = 'India';
// function percentageOfWorld1(population, country) {
//   return `${country} has ${population} million people, so it's about ${
//     (population * 100) / 7900
//   }% of the world population`;
// }

// const percentageOfWorld2 = function (population, country) {
//   return `${country} has ${population} million people, so it's about ${
//     (population * 100) / 7900
//   }% of the world population`;
// };

// console.log(percentageOfWorld1(5478, country));
// console.log(percentageOfWorld2(2340, 'Spain'));

// 3.
const percentageOfWorld3 = (population) => {
    return (population * 100) / 7900;
};

// console.log(percentageOfWorld3(1234, 'Japan'));

// 4.
// const describePopulation = function (country, population) {
//   return `${country} has ${population} million people, so it's about ${percentageOfWorld3(
//     population,
//     country
//   )}% of the world population`;
// };
// console.log(describePopulation("India", 5673));

// 5.
// const populations = ['India', 'Japan', 'Indonesia', 'Switzerland'];
// console.log(populations.length === 4);
// const percentages = [
//   percentageOfWorld3(1241),
//   percentageOfWorld3(3450),
//   percentageOfWorld3(4538),
//   percentageOfWorld3(2992),
// ];
// console.log(percentages);

// 6.
// const neighbours = ['Portugal', 'Germany', 'Italy'];
// neighbours.push('Utopia');
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')) {
//   console.log('Probably not a central European country :D');
// }

// neighbours[neighbours.indexOf('Italy')] = 'Sweden';
// console.log(neighbours);

// 7.
const myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Russia'],
    describe: function () {
        console.log(
            `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring coutries and a capital called ${this.capital}`
        );
    },
    checkIsland: function () {
        this.isIsland = !Boolean(myCountry.neighbours.length);
    },
};
// console.log(myCountry);

// 8.
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring coutries and a capital called ${myCountry.capital}`
// );
// myCountry.population += 2;
// myCountry['population'] -= 2;

// 9
// myCountry.describe = function () {
//   console.log(
//     `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring coutries and a capital called ${this.capital}`
//   );
// };
myCountry.describe();

// myCountry.checkIsland = function () {
// myCountry.isIsland = !myCountry.neighbours.length === 0 ? false : true;
// };

myCountry.checkIsland();
// console.log(myCountry);

// 10
// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter Number ${i} is currently voting`);
// }

// 11
// const populations = [10, 1441, 332, 83];
// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//   const perc = percentageOfWorld3(populations[i]);
//   percentages2.push(perc);
// }
// console.log(percentages2);

// 12
// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let y = 0; y < listOfNeighbours[i].length; y++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
//   }
// }

// 13
const populations = [10, 1441, 332, 83];
const percentages2 = [];

let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld3(populations[i]);
    percentages2.push(perc);
    i++;
}
console.log(percentages2);
