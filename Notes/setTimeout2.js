//* Defering a function (setTimeout to 0)
// such that a more important code can run first and less important later.
console.log('Cars');

setTimeout(() => {
    cars();
}, 0);

function cars() {
    const cars = ['BMW', 'Mercedes', 'Audi'];
    console.log(cars);
}

console.log('fetching cars...');
