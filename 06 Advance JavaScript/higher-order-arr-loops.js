const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const greetings = 'Hello World!';
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
// modified code to print the output of all characters in a single and after each chararacter a comma , it should ignore the space
const characters = greetings.replace(/ /g, '').split('');
const output = characters.join(', ');
console.log(output);

// Map data-structure
const map = new Map();
map.set('IN', 'India');
map.set('CN', 'China');
map.set('JP', 'Japan');
console.log(map);

for (const [key, value] of map) {
    // console.log(key + ':' + value);
}

// map to Object
const x = Object.fromEntries(map);
// console.log(x);

// can't use for of on a Object, since its not an iterable, there are other methods to do it
// for (const i of x) {
//     console.log(i);
// }

Object.entries(x).forEach(([key, value]) => {
    console.log(`key: ${key}, val: ${value}`);
});

//* looping obj using "for in"
const lang = {
    js: 'JavaScript',
    py: 'Python',
    cpp: 'C++',
};

for (const key in lang) {
    console.log(`${key} shortcut is for ${lang[key]}`);
}
// note that the key is actually the index

const programming = ['JavaScript', 'Python', 'C++', 'Java'];
for (const index in programming) {
    console.log(`${index} -> ${programming[index]}`);
}



