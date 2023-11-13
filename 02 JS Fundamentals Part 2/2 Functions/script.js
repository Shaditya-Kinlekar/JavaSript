function logger() {
    console.log(`My name is Shadz`);
}

//* calling / invoking / running the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples & ${oranges} oranges`;
    return juice;
}

fruitProcessor(3, 5);

//* storing value returned by the function
const fruit = fruitProcessor(2, 4);
console.log(fruit);

console.log(fruitProcessor(5, 8));
