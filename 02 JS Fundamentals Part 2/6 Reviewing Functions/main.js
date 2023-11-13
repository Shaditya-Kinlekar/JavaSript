// Calculates the age based on the birth year
const calcAge = function (birthYear) {
    return 2022 - birthYear;
};

// Calculates the number of years until retirement
const yearsUntilRetirement = function (birthYear, firstName) {
    const currentAge = calcAge(birthYear);
    const retirement = 60 - currentAge;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
};

console.log(yearsUntilRetirement(1962, 'Shadz'));
