// PROBLEM 1
// ignore error
// get min & max
// return diff of min & max

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcAmplitude = function (temps) {
    let max = temps[0]; // storing first element in variable
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const currTemp = temps[i]; // current index element is stored updated at every iteration

        if (typeof currTemp !== 'number') continue; // skipping/ignoring error
        if (currTemp > max) max = currTemp;
        if (currTemp < min) min = currTemp;
    }
    console.log('min: ' + min, ' max: ' + max);
    return max - min; // returning difference
};

console.log(calcAmplitude(temperatures));

// PROBLEM 2
// pasing 2 arrays in fn
const calcAmplitudeNew = function (arr1, arr2) {
    const temps = arr1.concat(arr2); // joining/merging 2 arrays
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const currTemp = temps[i];

        if (typeof currTemp !== 'number') continue;
        if (currTemp > max) max = currTemp;
        if (currTemp < min) min = currTemp;
    }

    console.log('min: ' + min, ' max: ' + max);
    return max - min;
};

console.log(calcAmplitudeNew([1, 2, 3], [4, 5, 6]));
