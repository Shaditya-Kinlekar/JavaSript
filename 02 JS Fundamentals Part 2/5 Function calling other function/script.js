//* function expression
// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

//* arrow fn
const cutPieces = (fruit) => fruit * 4;

const fruitProcessor = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
};

console.log(fruitProcessor(3, 2));
