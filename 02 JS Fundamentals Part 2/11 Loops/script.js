//* For loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    // console.log(`Lifting weights repetition ${rep} 🏋️`);
}

//* applications of for loop
// 1 looping through arrays
const jonas = ['Jonas', 'Schedman', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven'], true];
const types = [];

for (let i = 0; i < jonas.length; i++) {
    // reading from jonas []
    console.log(jonas[i], typeof jonas[i]);

    // filling types []
    //* types[i] = typeof jonas[i];
    //! types.unshift(jonas[i]);  //adds elements to the beginning (elements will be displayed in reverse)
    types.push(jonas[i]); //*adds elements to the end
    // types[0] = (jonas[0] = 'string') ...
    // types[5] = (jonas[5] = 'object')
}

console.log(types);

// exercise
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//! continue & break
console.log('---ONLY STRINGS---');
// print strings , skip others
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log('---BREAK WITH NUMBER---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    // when 'number' === number -> break iteration
    console.log(jonas[i], typeof jonas[i]);
}

console.log('---OTHER THAN STRING---');
const arr = ['name', 'age', 'location', { x: 'hey' }, 'string', 20];
// break when arr[i]=number/object(other than 'string') , i.e number != 'string'
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'string') break;

    console.log(arr[i], typeof arr[i]);
}
