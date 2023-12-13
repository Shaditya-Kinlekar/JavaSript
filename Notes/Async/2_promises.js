// * Creating a Promise, Chaining & Error Handling

const cart = [
  { orderID: 1, item: 'Apples', quantity: 3, price: 1.2 },
  { orderID: 2, item: 'Bread', quantity: 2, price: 2.5 },
  { orderID: 3, item: 'Milk', quantity: 1, price: 0.99 },
  { orderID: 4, item: 'Eggs', quantity: 12, price: 3.99 },
  { orderID: 5, item: 'Cheese', quantity: 1, price: 4.5 },
];

// basic eg:
//* Consumer part
const promise = createOrder(cart); // returns orderID
// attaching the callback fn to promise object
promise.then(function (orderID) {
  proceedToPayment(orderID);
});

//* Producer part
// creating promise
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // (resolve, reject) are given by javascript
  });
}
