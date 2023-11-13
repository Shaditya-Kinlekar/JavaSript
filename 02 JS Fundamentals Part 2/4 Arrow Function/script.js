//* Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

//* Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const currentAge = 2022 - birthYear;
  const retirement = 60 - currentAge;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2002, 'Shadz'));
